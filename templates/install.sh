#!/bin/bash
yum install nginx git jq -y
mkdir /root/east-ai-deploy/
cd /root/east-ai-deploy/
wget https://bootstrap.pypa.io/get-pip.py
python3 get-pip.py
git clone https://github.com/DGSA-workshop/east-ai-deploy.git
yes | cp -rf east-ai-deploy/dist/east-ai-ui/* /usr/share/nginx/html/
yes | cp -rf east-ai-deploy/templates/nginx.conf /etc/nginx/nginx.conf
systemctl start nginx
systemctl enable nginx

TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`
aws configure set region `curl -H "X-aws-ec2-metadata-token: $TOKEN" -s  http://169.254.169.254/latest/dynamic/instance-identity/document | jq -r .region`
ACCOUNTID=`curl -H "X-aws-ec2-metadata-token: $TOKEN" -s  http://169.254.169.254/latest/dynamic/instance-identity/document | jq -r .accountId`
aws s3 mb s3://east-ai-workshop-$ACCOUNTID
cd east-ai-deploy/dist/east-ai-backend/
python3 -m venv .
source bin/activate
export WORKSHOP_IMAGE_BUCKET=east-ai-workshop-$ACCOUNTID
pip3 install -r requirements.txt
pip3 install gunicorn
gunicorn -k uvicorn.workers.UvicornWorker app:app -w 5 --log-level error --log-file error.log &
cd ../../templates/
chmod +x postinstall.sh
./postinstall.sh