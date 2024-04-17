"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[803],{2650:function(L,f,a){a.r(f);var v=a(15009),l=a.n(v),x=a(99289),M=a.n(x),b=a(5574),m=a.n(b),P=a(92296),y=a(79090),h=a(51042),I=a(90930),g=a(9361),j=a(10932),u=a(2453),r=a(71230),n=a(15746),s=a(53025),d=a(56518),_=a(62136),T=a(34596),U=a(8925),B=a(9991),A=a(67294),K=a(35312),e=a(85893),S=function(){var i=(0,K.useIntl)(),G=g.Z.useToken(),k=G.token,F=(0,A.useState)([]),C=m()(F,2),H=C[0],N=C[1],$=(0,A.useState)(!1),W=m()($,2),Z=W[0],O=W[1],z=(0,A.useState)(),R=m()(z,2),c=R[0],V=R[1],J=function(){var o=M()(l()().mark(function t(p){var E;return l()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return O(!0),c&&c.length>1&&(p.input_image=c),D.next=4,(0,P.fN)(p);case 4:E=D.sent,N(E.images),O(!1);case 7:case"end":return D.stop()}},t)}));return function(p){return o.apply(this,arguments)}}(),Y=function(t){console.log("Failed:",t)},Q=["euler_a","eular","heun","lms","dpm2","dpm2_a","ddim"],X={negative_prompt:"(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime:1.4), text, close up, cropped, out of frame, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, disfigured, gross proportions",steps:30,sampler:"ddim",seed:-1,count:1,model_id:"product_design",sam_prompt:""},w=(0,e.jsx)("div",{children:Z?(0,e.jsx)(y.Z,{}):(0,e.jsx)(j.ZP,{icon:(0,e.jsx)(h.Z,{}),children:i.formatMessage({id:"pages.common.buttonUpload"})})}),q=function(t){if(t.file.status==="uploading"){O(!0);return}t.file.status==="done"&&(t.file.response.success?V(t.file.response.data):u.ZP.error(t.file.response.message),O(!1))},ee=function(t){var p=t.type==="image/jpeg"||t.type==="image/png"||t.type==="image/webp";p||u.ZP.error("You can only upload JPG/PNG file!");var E=t.size/1024/1024<5;return E||u.ZP.error("Image must smaller than 5MB!"),p&&E};return(0,e.jsx)(I._z,{waterMarkProps:{content:""},children:(0,e.jsx)("div",{style:{color:k.colorTextHeading},children:(0,e.jsxs)(r.Z,{children:[(0,e.jsx)(n.Z,{span:8,children:(0,e.jsxs)(s.Z,{name:"basic",onFinish:J,onFinishFailed:Y,autoComplete:"off",layout:"vertical",initialValues:X,children:[(0,e.jsx)(s.Z.Item,{label:i.formatMessage({id:"pages.inpainting.modelId.title"}),name:"model_id",children:(0,e.jsx)(d.Z,{disabled:!0,children:(0,e.jsx)(d.Z.Option,{value:"product_design",children:i.formatMessage({id:"pages.inpainting.model.realityStyle"})})})}),(0,e.jsx)(s.Z.Item,{label:i.formatMessage({id:"pages.inpainting.inputImage.title"}),name:"input_image",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u539F\u59CB\u56FE\u7247!"}],valuePropName:"fieldList",children:(0,e.jsx)(_.Z,{name:"file",action:"/api/upload",className:"avatar-uploader",showUploadList:!1,onChange:q,beforeUpload:ee,maxCount:1,children:c?(0,e.jsx)("img",{src:"/api/s3-image/"+c,alt:"product image",style:{maxHeight:320,maxWidth:320}}):w})}),(0,e.jsx)(s.Z.Item,{label:i.formatMessage({id:"pages.inpainting.samPrompt.title"}),name:"sam_prompt",rules:[{required:!0}],children:(0,e.jsx)(T.Z,{placeholder:i.formatMessage({id:"pages.inpainting.samPrompt.placeHolder"})})}),(0,e.jsx)(s.Z.Item,{label:i.formatMessage({id:"pages.inpainting.prompt.title"}),name:"prompt",rules:[{required:!0}],children:(0,e.jsx)(T.Z.TextArea,{showCount:!0,maxLength:500,placeholder:i.formatMessage({id:"pages.inpainting.prompt.placeHolder"}),allowClear:!0,style:{height:120}})}),(0,e.jsx)(s.Z.Item,{label:i.formatMessage({id:"pages.inpainting.nprompt.title"}),name:"negative_prompt",rules:[{required:!0}],children:(0,e.jsx)(T.Z.TextArea,{showCount:!0,maxLength:500,placeholder:i.formatMessage({id:"pages.inpainting.nprompt.placeHolder"}),allowClear:!0,style:{height:120}})}),(0,e.jsx)(r.Z,{children:(0,e.jsx)(n.Z,{span:24,children:(0,e.jsx)(s.Z.Item,{label:i.formatMessage({id:"pages.inpainting.count.title"}),name:"count",rules:[{required:!0}],children:(0,e.jsx)(U.Z,{min:1,max:4})})})}),(0,e.jsx)(r.Z,{style:{display:"none"},children:(0,e.jsxs)(n.Z,{span:24,children:[(0,e.jsx)(s.Z.Item,{label:"\u79CD\u5B50",name:"seed",rules:[{required:!0,message:"\u79CD\u5B50!"}],children:(0,e.jsx)(U.Z,{})}),(0,e.jsx)(s.Z.Item,{label:"\u91C7\u6837\u5668",name:"sampler",rules:[{required:!0,message:"\u91C7\u6837\u5668!"}],children:(0,e.jsx)(d.Z,{children:Q.map(function(o){return(0,e.jsx)(d.Z.Option,{value:o,children:o},o)})})}),(0,e.jsx)(s.Z.Item,{label:"\u6B65\u6570",name:"steps",rules:[{required:!0,message:"\u6B65\u6570!"}],children:(0,e.jsx)(U.Z,{min:5,max:50})})]})}),(0,e.jsx)(s.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsx)(j.ZP,{type:"primary",htmlType:"submit",children:i.formatMessage({id:"pages.common.buttonBeginGen"})})})]})}),(0,e.jsx)(n.Z,{span:1}),(0,e.jsx)(n.Z,{span:14,children:(0,e.jsxs)("div",{style:{width:"100%",borderRadius:4,margin:8},children:[Z?(0,e.jsx)("div",{children:(0,e.jsx)(y.Z,{})}):null,H.map(function(o,t){return(0,e.jsx)(B.Z,{src:"data:image/png;base64,"+o,style:{maxWidth:320,maxHeight:320,border:"solid #fff 1px",margin:"10px",float:"left"}},t)})]})})]})})})};f.default=S},92296:function(L,f,a){a.d(f,{fN:function(){return j},uu:function(){return I}});var v=a(15009),l=a.n(v),x=a(97857),M=a.n(x),b=a(99289),m=a.n(b),P=a(35312);function y(r,n){return h.apply(this,arguments)}function h(){return h=_asyncToGenerator(_regeneratorRuntime().mark(function r(n,s){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return console.log(_objectSpread({},s||{})),_.abrupt("return",request("/api/write-marketing-text",_objectSpread({method:"POST",data:n},s||{})));case 2:case"end":return _.stop()}},r)})),h.apply(this,arguments)}function I(r,n){return g.apply(this,arguments)}function g(){return g=m()(l()().mark(function r(n,s){return l()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,P.request)("/api/product-design",M()({method:"POST",data:n},s||{})));case 1:case"end":return _.stop()}},r)})),g.apply(this,arguments)}function j(r,n){return u.apply(this,arguments)}function u(){return u=m()(l()().mark(function r(n,s){return l()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,P.request)("/api/inpaint",M()({method:"POST",data:n},s||{})));case 1:case"end":return _.stop()}},r)})),u.apply(this,arguments)}}}]);
