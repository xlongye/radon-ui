webpackJsonp([11,31],{2:/*!*****************************!*\
  !*** ./docs/views/index.js ***!
  \*****************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Mark=void 0;var i=n(7),a=r(i);t.Mark=a["default"]},3:/*!*************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/views/mark.vue ***!
  \*************************************************************************************************************************************************************/
function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=document.createElement("div");return t.innerHTML=e,t.innerText||t.textContent};t["default"]={data:function(){return{mark:""}},ready:function(){this.mark=window.marked(n(this.$el.getElementsByClassName("ex-mark-text")[0].innerHTML))}}},4:/*!*********************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/views/mark.vue ***!
  \*********************************************************************************************************************************************/
function(e,t,n){t=e.exports=n(9)(),t.push([e.id,'.ex-mark-text{display:none}.marked p{max-width:40rem}.marked code{background:#f7f7f7;color:#ff5722}.marked pre code{display:block;background:#f7f7f7;padding:1rem;color:#999;font-size:.8rem;line-height:1.2;overflow-x:auto}.marked pre{line-height:1.5em;margin:1rem 0}.marked{font-size:.9rem;line-height:1.8;color:#666;max-width:40rem}.marked h1{font-size:1.6rem}.marked h2{font-size:1.2rem}.marked h2,.marked h3{position:relative}.marked h3:before{content:"#";color:#00bcd4;font-size:1.2em;font-weight:700;margin-right:.5rem}.marked blockquote{position:relative;font-size:90%;color:#404040;border-left:4px solid #67cdfb;padding-left:.8em;margin:1em 0;background:#f8f8f8;padding:1rem}.marked blockquote p{margin:0}.marked blockquote:before{position:absolute;top:14px;left:-12px;background-color:#67cdfb;color:#fff;content:"!";width:20px;height:20px;border-radius:100%;text-align:center;line-height:20px;font-weight:700;font-family:Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;font-size:14px}.marked ul,ol{padding:0 2rem;list-style:inherit}.marked table{width:100%;max-width:100%;text-align:left;border-radius:6px}.marked thead{background:#e0f5ff}.marked th{color:rgba(0,0,0,.870588);height:3rem;border-bottom:1px solid #e9e9e9}.marked tr>td:first-child,.marked tr>th:first-child{padding-left:.5rem}.marked tr>td:last-child,.marked tr>th:last-child{padding-right:.5rem}.marked tr>td{height:2rem;line-height:1rem;border-bottom:1px solid #ececec}@media screen and (max-width:768px){.ex-card{margin:0}}',"",{version:3,sources:["/./docs/views/mark.vue"],names:[],mappings:"AACA,cACI,YAAc,CACjB,AACD,UACI,eAAiB,CACpB,AACD,aACI,mBAAoB,AACpB,aAAe,CAClB,AACD,iBACI,cAAe,AACf,mBAAoB,AACpB,aAAc,AACd,WAAY,AACZ,gBAAiB,AACjB,gBAAiB,AACjB,eAAiB,CACpB,AACD,YACI,kBAAmB,AACnB,aAAe,CAClB,AACD,QACI,gBAAiB,AACjB,gBAAiB,AACjB,WAAY,AACZ,eAAiB,CACpB,AACD,WACI,gBAAkB,CACrB,AACD,WACI,gBAAkB,CAErB,AACD,sBAFI,iBAAmB,CAItB,AACD,kBACI,YAAa,AACb,cAAe,AACf,gBAAiB,AACjB,gBAAkB,AAClB,kBAAoB,CACvB,AACD,mBACI,kBAAmB,AACnB,cAAe,AACf,cAAe,AACf,8BAA+B,AAC/B,kBAAmB,AACnB,aAAc,AACd,mBAAoB,AACpB,YAAc,CACjB,AACD,qBACI,QAAU,CACb,AACD,0BACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,yBAA0B,AAC1B,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,gBAAkB,AAClB,kEAA6E,AAC7E,cAAgB,CACnB,AACD,cACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,cACI,WAAY,AACZ,eAAgB,AAChB,gBAAiB,AACjB,iBAAmB,CACtB,AACD,cACI,kBAAoB,CACvB,AACD,WACI,0BAA2B,AAC3B,YAAa,AACb,+BAAiC,CACpC,AACD,oDACI,kBAAmB,CACtB,AACD,kDACI,mBAAoB,CACvB,AACD,cACI,YAAa,AACb,iBAAkB,AAClB,+BAAiC,CACpC,AACD,oCACI,SACI,QAAU,CACb,CACJ",file:"mark.vue",sourcesContent:["\n.ex-mark-text {\n    display: none;\n}\n.marked p{\n    max-width: 40rem;\n}\n.marked code {\n    background: #f7f7f7;\n    color: #FF5722;\n}\n.marked pre code {\n    display: block;\n    background: #f7f7f7;\n    padding: 1rem;\n    color: #999;\n    font-size: .8rem;\n    line-height: 1.2;\n    overflow-x: auto;\n}\n.marked pre {\n    line-height: 1.5em;\n    margin: 1rem 0;\n}\n.marked {\n    font-size: .9rem;\n    line-height: 1.8;\n    color: #666;\n    max-width: 40rem;\n}\n.marked h1 {\n    font-size: 1.6rem;\n}\n.marked h2 {\n    font-size: 1.2rem;\n    position: relative;\n}\n.marked h3 {\n    position: relative;\n}\n.marked h3::before {\n    content: \"#\";\n    color: #00BCD4;\n    font-size: 1.2em;\n    font-weight: bold;\n    margin-right: .5rem;\n}\n.marked blockquote {\n    position: relative;\n    font-size: 90%;\n    color: #404040;\n    border-left: 4px solid #67cdfb;\n    padding-left: .8em;\n    margin: 1em 0;\n    background: #f8f8f8;\n    padding: 1rem;\n}\n.marked blockquote p {\n    margin: 0;\n}\n.marked blockquote::before {\n    position: absolute;\n    top: 14px;\n    left: -12px;\n    background-color: #67cdfb;\n    color: #fff;\n    content: \"!\";\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    line-height: 20px;\n    font-weight: bold;\n    font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    font-size: 14px;\n}\n.marked ul, ol {\n    padding: 0 2rem;\n    list-style: inherit;\n}\n.marked table {\n    width: 100%;\n    max-width: 100%;\n    text-align: left;\n    border-radius: 6px;\n}\n.marked thead {\n    background: #e0f5ff;\n}\n.marked th {\n    color: rgba(0,0,0,.870588);\n    height: 3rem;\n    border-bottom: 1px solid #e9e9e9;\n}\n.marked tr > td:first-child, .marked tr > th:first-child {\n    padding-left: .5rem\n}\n.marked tr > td:last-child, .marked tr > th:last-child {\n    padding-right: .5rem\n}\n.marked tr > td {\n    height: 2rem;\n    line-height: 1rem;\n    border-bottom: 1px solid #ececec;\n}\n@media screen and (max-width: 768px) {\n    .ex-card {\n        margin: 0;\n    }\n}\n"],sourceRoot:"webpack://"}])},5:/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/extract-text-webpack-plugin/loader.js?{"omit":1,"extract":true,"remove":true}!./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js!./~/vue-loader/lib/selector.js?type=style&index=0!./docs/views/mark.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]),n(10)(r,{}),r.locals&&(e.exports=r.locals)},6:/*!******************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/views/mark.vue ***!
  \******************************************************************************************************/
function(e,t){e.exports="<div class=marked> <div> {{{mark}}} </div> <slot></slot> </div>"},7:/*!*****************************!*\
  !*** ./docs/views/mark.vue ***!
  \*****************************/
function(e,t,n){var r,i;n(5),r=n(3),i=n(6),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},336:/*!***********************************************************************************************************************************************************************!*\
  !*** ./~/babel-loader?presets[]=es2015&plugins[]=transform-runtime&comments=false!./~/vue-loader/lib/selector.js?type=script&index=0!./docs/views/form/textfield.vue ***!
  \***********************************************************************************************************************************************************************/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(8),a={0:{state:"loading",tip:"loading?!"},1:{state:"failed",tip:"该用户名已被使用"},2:{state:"success",tip:"该用户名似乎没有被使用"},3:{state:"info",tip:"该用户名已被使用"},4:{state:"warning",tip:"该用户名已被使用"}};t["default"]={data:function(){return{textArea:{value:"",minHeight:100,autoResize:!0,lineHeight:14,input:function(){console.log("textarea is inputing")},change:function(){console.log("textarea is changed")}},limits:{length:{type:"Length",min:6,max:12},email:{type:"Email",tip:"please input avavilable E-mail address"},phone:{type:"Phone"},number:{type:"Number",decimal:2}},form:{bio:{value:"",placeHolder:" 6 < length < 12",title:"用户名:",key:"user",state:"default",tip:""},email:{value:"",placeHolder:"Email",title:"用户名:",key:"user",state:"default",tip:""},phone:{value:"",placeHolder:"Phone Number",title:"用户名:",key:"user",state:"default",tip:""},number:{value:"",placeHolder:"Number",key:"user",state:"default",tip:""},username:{value:"",placeHolder:"input here",title:"用户名:",key:"user",state:"default",tip:""},password:{value:"",placeHolder:"",state:"default",tip:""},info:{value:"",placeHolder:"info",state:"info",tip:""},warning:{value:"",placeHolder:"warning",state:"warning",tip:""},failed:{value:"",placeHolder:"failed",state:"failed",tip:""},success:{value:"",placeHolder:"success",state:"success",tip:""},inline:{value:"",placeHolder:"我是inline的input",state:"",tip:"",inline:!0},textArea:{value:"",title:"用户名:",state:"default",minHeight:100,autoResize:!0,lineHeight:14}}}},components:{rdText:i.rdText,rdTextarea:i.rdTextarea,Mark:r.Mark},methods:{blurAction:function(){console.log("blur")},userInputing:function(e){var t=this;this.form.username.state="loading",setTimeout(function(){var e=Math.floor(4.9*Math.random());t.form.username.state=a[e].state,t.form.username.tip=a[e].tip},500)},userInputed:function(){console.log("?"),this.$Notification.success("你输入了"+this.form.username.value,"",5e3)}}}},577:/*!****************************************************************************************************************!*\
  !*** ./~/vue-html-loader!./~/vue-loader/lib/selector.js?type=template&index=0!./docs/views/form/textfield.vue ***!
  \****************************************************************************************************************/
function(e,t){e.exports="<div class=ex-content> <div class=ex-card> <mark> <textarea class=ex-mark-text>\n# Textfield 输入框\n\n最常用的表单内容输入框，内置了多种状态的设置和数据类型验证功能。\n### 示例\n        </textarea> </mark> <h4>输入测试</h4> <p> <rd-text :textfield=form.username @inputing=userInputing @changing=userInputed></rd-text> </p> <h4>状态</h4> <p> <rd-text :textfield=form.info @blur=blurAction></rd-text> </p> <p> <rd-text :textfield=form.warning></rd-text> </p> <p> <rd-text :textfield=form.success></rd-text> </p> <p> <rd-text :textfield=form.failed></rd-text> </p> <h4>密码类型</h4> <p> <rd-text :textfield=form.password type=password></rd-text> </p> <h4>数据验证</h4> <p> <rd-text :textfield=form.bio :limit=limits.length></rd-text> </p> <p> <rd-text :textfield=form.email :limit=limits.email></rd-text> </p> <p> <rd-text :textfield=form.phone :limit=limits.phone></rd-text> </p> <p> <rd-text :textfield=form.number :limit=limits.number></rd-text> </p> <h4>行内输入框</h4> <p> <rd-text :textfield=form.inline></rd-text> </p> <h4>多行输入框</h4> <p> <rd-textarea :textfield=form.textArea></rd-textarea> </p> <mark> <textarea class=ex-mark-text>\n## API\n\n### textfield : Object\n输入框的基础对象\n```\n<template>\n    <rd-text :textfield=user></rd-text>   \n</template>\nuser: {\n    // value 值 :String\n    value: '',\n    // placeHolder :String\n    placeHolder: 'input here',\n    // 输入框状态 :String\n    state: 'default', // ['warning', 'failed', 'info', 'success']\n    // 输入框提示文字 :String \n    tip: '' \n}\n```\n### input : Function\n输入框 oninput hook\n```html\n<rd-text :textfield=obj :input=Inputing></rd-text>\n\nmethods: {\n    Inputing () {\n        console.log('is inputing')\n    }\n}\n```\n### change : Function\n输入框 onchange hook\n```\n<rd-text :textfield=obj :change=userInputed></rd-text>\n\nmethods: {\n    userInputed () {\n        console.log('is changed')\n    }\n}\n```\n\n### type : String\ninput type\n```\n<rd-text :textfield=form.pass :input=passInputing type=password></rd-text>\n```\n## 验证\n\n```\n\n<rd-text :textfield=form.bio :limit=limits.length></rd-text>\n\n\n<rd-text :textfield=form.email :limit=limits.email></rd-text>\n\n\n<rd-text :textfield=form.phone :limit=limits.phone></rd-text>\n\n\n<rd-text :textfield=form.number :limit=limits.number></rd-text>\n\n\n```\n\n```\nlimits: {\n    length: {\n        type: 'Length',\n        min: 6,\n        max: 12\n    },\n    email: {\n        type: 'Email'\n    },\n    phone: {\n        type: 'Phone'\n    },\n    number: {\n        type: 'Number'\n    }\n}\n```\n\n## 完整示例代码\n```javascript\nexport default {\n    template: '<rd-text :textfield=form.user :input=userInputing></rd-text>'\n    data () {\n        return {\n            form: {\n                user: {\n                    value: '',\n                    placeHolder: 'input here',\n                    title: '用户名:',\n                    state: 'default',\n                    tip: ''\n                }\n            }\n        }\n    },\n    components: {\n        rdText,\n    },\n    methods: {\n        userInputing () {\n            this.form.user.state = 'loading'\n            setTimeout(() => {\n                let i = Math.floor(Math.random() * 4.9)\n                this.form.user.state = MAP[i].state\n                this.form.user.tip = MAP[i].tip\n            }, 500)\n        }\n    }\n}\n```\n## textarea\n\n```html\n<rd-textarea :textfield=form.textArea></rd-textarea>\n\n```\n```javascript\n textArea: {\n    value: '',\n    minHeight: 100,\n    autoResize: true,\n    lineHeight: 14,\n    input () {\n        console.log('textarea is inputing')\n    },\n    change () {\n        console.log('textarea is changed')\n    }\n},\n\n```\n        </textarea> </mark> </div> </div>"},611:/*!***************************************!*\
  !*** ./docs/views/form/textfield.vue ***!
  \***************************************/
function(e,t,n){var r,i;r=n(336),i=n(577),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});