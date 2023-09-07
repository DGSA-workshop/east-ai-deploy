from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sagemaker.huggingface.model import HuggingFacePredictor
from fastapi import UploadFile
from PIL import Image
from io import BytesIO
import boto3
from datetime import datetime
import uuid


# from dotenv import load_dotenv
# import git
# import os
# import subprocess

# load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# src_dir = os.getenv("SRC_DIR")
# git_username = os.getenv("GIT_USERNAME")
# git_token = os.getenv("GIT_TOKEN")


llm_predictor = HuggingFacePredictor(endpoint_name="chatglm2-lmi-model")
pd_predictor = HuggingFacePredictor(endpoint_name="product-design-sd")
sam_predictor = HuggingFacePredictor(endpoint_name="grounded-sam")
inpaint_predictor = HuggingFacePredictor(endpoint_name="inpainting-sd")

translate_client = boto3.client("translate")

s3_bucket = "east-ai-workshop"

patterns = {
    "redbook": "请根据下面的内容写一段小红书的种草文案: ",
    "zhihu": "请根据下面的内容写一段知乎的文章: ",
    "weibo": "请根据下面的内容写一段微博的文章: ",
    "gongzhonghao": "请根据下面的内容写一段公众号的文章: ",
    "dianping": "请根据下面的内容写一段点评的文章: ",
    "toutiao": "请根据下面的内容写一段头条的文章: ",
    "zhidemai": "请根据下面的内容写一段值得买的文章: ",
    "douyin": "请根据下面的内容写一段抖音的拍摄文案: ",
    "kuaishou": "请根据下面的内容写一段快手的拍摄文案: ",
}


@app.post("/api/write-marketing-text")
def write_marketing_text(item: dict):
    history = item["history"] if "history" in item else []
    pattern = item["pattern"]
    prompt_pattern = patterns[pattern]
    prompt = item["prompt"]
    prompt = prompt if history else prompt_pattern + "\n\n" + prompt
    return llm_predictor.predict({"inputs": prompt, "parameters": {"history": history}})


@app.get("/")
def home():
    return "Hello world"


@app.post("/api/product-design")
def product_design(item: dict):
    # 这里还需更细致的校验
    print(item)

    # 调用 translate 对 prompt 和 negative_prompt 进行翻译
    prompt_res = translate_client.translate_text(
        Text=item["prompt"], SourceLanguageCode="auto", TargetLanguageCode="en"
    )
    item["prompt"] = prompt_res["TranslatedText"]

    if item["negative_prompt"]:
        neg_prompt_res = translate_client.translate_text(
            Text=item["negative_prompt"],
            SourceLanguageCode="auto",
            TargetLanguageCode="en",
        )
        item["negative_prompt"] = neg_prompt_res["TranslatedText"]

    item["steps"] = int(item["steps"]) or 30
    item["seed"] = int(item["seed"]) or -1
    item["height"] = int(item["height"]) or 512
    item["width"] = int(item["width"]) or 512
    item["count"] = int(item["count"]) or 1
    item["output_image_dir"] = f"s3://{s3_bucket}/product-images/"

    print(item)

    # item["steps"] = int(item["steps"])
    # inputs = {
    #     "prompt": "3D product render, futuristic armchair, finely detailed, purism, ue 5, a computer rendering, minimalism, octane render, 4k",
    #     "negative_prompt": "EasyNegative, (worst quality:2), (low quality:2), (normal quality:2), lowres, ((monochrome)), ((grayscale)), cropped, text, jpeg artifacts, signature, watermark, username, sketch, cartoon, drawing, anime, duplicate, blurry, semi-realistic, out of frame, ugly, deformed",
    #     "steps": 30,
    #     "sampler": "dpm2_a",
    #     "seed": -1,
    #     "height": 512,
    #     "width": 512,
    #     "count": 1,
    # }
    return pd_predictor.predict(item)


@app.post("/api/upload")
async def upload(file: UploadFile):
    print(file)
    contents = await file.read()
    try:
        image = Image.open(BytesIO(contents))
    except:
        return {"success": False, "message": "需要上传合法的图片。"}

    # image = resize_image_for_ai(image)

    rnd_key = str(uuid.uuid4())
    now = datetime.now()
    year_str = now.strftime("%Y")
    day_str = now.strftime("%m%d")
    path_str = f"{year_str}{day_str}/"
    key_original = path_str + rnd_key + ".webp"

    buffer = BytesIO()
    image.save(buffer, format="WEBP")
    img_byte_arr = buffer.getvalue()

    s3 = boto3.resource("s3")
    s3.Bucket(s3_bucket).put_object(Key=f"images/{key_original}", Body=img_byte_arr)

    # image.save("./x.webp", format="WEBP")

    return {"success": True, "data": f"s3://{s3_bucket}/images/{key_original}"}


@app.post("/api/inpaint")
async def inpaint(item: dict):
    assert "input_image" in item
    assert "sam_prompt" in item
    output_mask_image_dir = f"s3://{s3_bucket}/mask-images/"

    sam_prompt_res = translate_client.translate_text(
        Text=item["sam_prompt"], SourceLanguageCode="auto", TargetLanguageCode="en"
    )

    mask_res = sam_predictor.predict(
        {
            "input_image": item["input_image"],
            "prompt": sam_prompt_res["TranslatedText"],
            "output_mask_image_dir": output_mask_image_dir,
        }
    )

    print(mask_res)

    # 调用 translate 对 prompt 和 negative_prompt 进行翻译
    prompt_res = translate_client.translate_text(
        Text=item["prompt"], SourceLanguageCode="auto", TargetLanguageCode="en"
    )

    if item["negative_prompt"]:
        neg_prompt_res = translate_client.translate_text(
            Text=item["negative_prompt"],
            SourceLanguageCode="auto",
            TargetLanguageCode="en",
        )

    return inpaint_predictor.predict(
        {
            "prompt": prompt_res["TranslatedText"] or item["prompt"],
            "negative_prompt": neg_prompt_res["TranslatedText"]
            or item["negative_prompt"],
            "input_image": item["input_image"],
            "input_mask_image": mask_res["result"],
            "steps": int(item["steps"]) or 30,
            "sampler": item["sampler"],
            "seed": int(item["seed"]) or -1,
            "count": int(item["count"]) or 1,
        }
    )
