"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[803],{28099:function(W,Z,a){a.r(Z),a.d(Z,{default:function(){return H}});var b=a(15009),o=a.n(b),D=a(99289),F=a.n(D),B=a(5574),m=a.n(B),E=a(92296),P=a(79090),p=a(1413),d=a(67294),f=a(42110),A=a(91146),c=function(T,M){return d.createElement(A.Z,(0,p.Z)((0,p.Z)({},T),{},{ref:M,icon:f.Z}))};c.displayName="PlusOutlined";var u=d.forwardRef(c),i=a(90930),l=a(9361),h=a(2453),t=a(71230),_=a(15746),r=a(5298),j=a(31863),G=a(2519),I=a(66428),O=a(73360),K=a(97029),w=a(3247),e=a(85893),N=function(){var T=l.Z.useToken(),M=T.token,z=(0,d.useState)([]),U=m()(z,2),V=U[0],J=U[1],Y=(0,d.useState)(!1),S=m()(Y,2),R=S[0],C=S[1],Q=(0,d.useState)(),L=m()(Q,2),v=L[0],X=L[1],k=function(s){return s.replace("s3://east-ai-workshop","https://d1onssyrnp1eaq.cloudfront.net")},q=function(){var n=F()(o()().mark(function s(g){var x;return o()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return C(!0),v&&v.length>1&&(g.input_image=v),y.next=4,(0,E.fN)(g);case 4:x=y.sent,J(x.images),C(!1);case 7:case"end":return y.stop()}},s)}));return function(g){return n.apply(this,arguments)}}(),ee=function(s){console.log("Failed:",s)},ae=["euler_a","eular","heun","lms","dpm2","dpm2_a","ddim"],se={negative_prompt:"(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, disfigured, gross proportions",steps:30,sampler:"ddim",seed:-1,count:1,model_id:"product_design",sam_prompt:""},te=(0,e.jsxs)("div",{children:[R?(0,e.jsx)(P.Z,{}):(0,e.jsx)(u,{}),(0,e.jsx)("div",{style:{marginTop:8},children:"Upload"})]}),re=function(s){if(s.file.status==="uploading"){C(!0);return}s.file.status==="done"&&(s.file.response.success?X(s.file.response.data):h.ZP.error(s.file.response.message),C(!1))},ne=function(s){var g=s.type==="image/jpeg"||s.type==="image/png"||s.type==="image/webp";g||h.ZP.error("You can only upload JPG/PNG file!");var x=s.size/1024/1024<5;return x||h.ZP.error("Image must smaller than 5MB!"),g&&x};return(0,e.jsx)(i._z,{waterMarkProps:{content:""},children:(0,e.jsx)("div",{style:{color:M.colorTextHeading},children:(0,e.jsxs)(t.Z,{children:[(0,e.jsx)(_.Z,{span:8,children:(0,e.jsxs)(r.Z,{name:"basic",onFinish:q,onFinishFailed:ee,autoComplete:"off",layout:"vertical",initialValues:se,children:[(0,e.jsx)(r.Z.Item,{label:"\u6A21\u578B\u9009\u62E9",name:"model_id",children:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)(j.Z.Option,{value:"product_design",children:"\u62A0\u56FE\u6E32\u67D3\u6A21\u578B"}),(0,e.jsx)(j.Z.Option,{value:"product_inpaint",children:"\u5907\u7528\u6A21\u578B"})]})}),(0,e.jsx)(r.Z.Item,{label:"\u4EA7\u54C1\u56FE\u7247",name:"input_image",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u539F\u59CB\u56FE\u7247!"}],valuePropName:"fieldList",children:(0,e.jsx)(G.Z,{name:"file",action:"/api/upload",className:"avatar-uploader",showUploadList:!1,onChange:re,beforeUpload:ne,maxCount:1,children:v?(0,e.jsx)("img",{src:k(v),alt:"avatar",style:{maxHeight:320,maxWidth:320}}):te})}),(0,e.jsx)(r.Z.Item,{label:"\u4EA7\u54C1\u63CF\u8FF0",name:"sam_prompt",rules:[{required:!0,message:"\u8BF7\u63CF\u8FF0\u60A8\u4E0A\u4F20\u56FE\u7247\u7684\u4E2D\u9700\u8981\u4FDD\u7559\u7684\u5185\u5BB9!"}],children:(0,e.jsx)(I.Z,{placeholder:"\u8BF7\u63CF\u8FF0\u60A8\u4E0A\u4F20\u56FE\u7247\u7684\u4E2D\u9700\u8981\u4FDD\u7559\u7684\u5185\u5BB9!"})}),(0,e.jsx)(r.Z.Item,{label:"\u80CC\u666F\u63D0\u793A\u8BCD",name:"prompt",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u91CD\u7ED8\u5185\u5BB9!"}],children:(0,e.jsx)(I.Z.TextArea,{showCount:!0,maxLength:500,placeholder:"\u9664\u4E86\u4FDD\u7559\u7684\u5185\u5BB9\uFF0C\u5176\u4ED6\u5730\u65B9\u60A8\u60F3\u753B\u4EC0\u4E48\uFF1F",allowClear:!0,style:{height:120}})}),(0,e.jsx)(r.Z.Item,{label:"\u907F\u514D\u51FA\u73B0\u5728\u753B\u9762\u4E2D\u7684\u5185\u5BB9",name:"negative_prompt",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CD\u5411\u63D0\u793A\u8BCD!"}],children:(0,e.jsx)(I.Z.TextArea,{showCount:!0,maxLength:500,placeholder:"\u8BF7\u8F93\u5165\u60A8\u4E0D\u60F3\u5728\u91CD\u4F1A\u533A\u57DF\u4E2D\u51FA\u73B0\u7684\u5185\u5BB9",allowClear:!0,style:{height:120}})}),(0,e.jsx)(t.Z,{children:(0,e.jsx)(_.Z,{span:24,children:(0,e.jsx)(r.Z.Item,{label:"\u56FE\u7247\u6570\u91CF",name:"count",rules:[{required:!0,message:"\u56FE\u7247\u6570\u91CF!"}],children:(0,e.jsx)(O.Z,{min:1,max:4})})})}),(0,e.jsx)(t.Z,{style:{display:"none"},children:(0,e.jsxs)(_.Z,{span:24,children:[(0,e.jsx)(r.Z.Item,{label:"\u79CD\u5B50",name:"seed",rules:[{required:!0,message:"\u79CD\u5B50!"}],children:(0,e.jsx)(O.Z,{})}),(0,e.jsx)(r.Z.Item,{label:"\u91C7\u6837\u5668",name:"sampler",rules:[{required:!0,message:"\u91C7\u6837\u5668!"}],children:(0,e.jsx)(j.Z,{children:ae.map(function(n){return(0,e.jsx)(j.Z.Option,{value:n,children:n},n)})})}),(0,e.jsx)(r.Z.Item,{label:"\u6B65\u6570",name:"steps",rules:[{required:!0,message:"\u6B65\u6570!"}],children:(0,e.jsx)(O.Z,{min:5,max:50})})]})}),(0,e.jsx)(r.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(K.ZP,{type:"primary",htmlType:"submit",children:"\u5F00\u59CB\u751F\u6210"})})]})}),(0,e.jsx)(_.Z,{span:1}),(0,e.jsx)(_.Z,{span:14,children:(0,e.jsxs)("div",{style:{width:"100%",borderRadius:4,margin:8},children:[R?(0,e.jsx)("div",{children:(0,e.jsx)(P.Z,{})}):null,V.map(function(n,s){return(0,e.jsx)(w.Z,{src:"data:image/png;base64,"+n,style:{maxWidth:320,maxHeight:320,border:"solid #fff 1px",margin:"10px",float:"left"}},s)})]})})]})})})},H=N},92296:function(W,Z,a){a.d(Z,{fN:function(){return A},uu:function(){return d}});var b=a(15009),o=a.n(b),D=a(97857),F=a.n(D),B=a(99289),m=a.n(B),E=a(35312);function P(u,i){return p.apply(this,arguments)}function p(){return p=_asyncToGenerator(_regeneratorRuntime().mark(function u(i,l){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(_objectSpread({},l||{})),t.abrupt("return",request("/api/write-marketing-text",_objectSpread({method:"POST",data:i},l||{})));case 2:case"end":return t.stop()}},u)})),p.apply(this,arguments)}function d(u,i){return f.apply(this,arguments)}function f(){return f=m()(o()().mark(function u(i,l){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,E.request)("/api/product-design",F()({method:"POST",data:i},l||{})));case 1:case"end":return t.stop()}},u)})),f.apply(this,arguments)}function A(u,i){return c.apply(this,arguments)}function c(){return c=m()(o()().mark(function u(i,l){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,E.request)("/api/inpaint",F()({method:"POST",data:i},l||{})));case 1:case"end":return t.stop()}},u)})),c.apply(this,arguments)}}}]);
