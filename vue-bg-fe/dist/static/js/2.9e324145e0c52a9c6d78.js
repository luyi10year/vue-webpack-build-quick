webpackJsonp([2],{"2y5D":function(e,t,i){"use strict";var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),l=i("LygO"),o={created:function(){this.initView()},computed:n()({},Object(a.d)(["alertMsg","loginCheck"])),data:function(){return n()({},Object(a.b)(["getAlertMsg","setEditWithMsg","setAlertBussMsg"]),{dialogClose:!1,alertConfig:{isModal:!1},dataReady:!1,detailConfig:{type:"alert"}})},methods:{initView:function(){var e=this;this.alertConfig.isModal=this.alertMsg,this.getAlertMsg().then(function(){e.alertMsg||e.businessInfo()})},businessInfo:function(){this.loginCheck.isInformation||(this.setEditWithMsg(!0),this.setAlertBussMsg(!0))}},components:{vDetailView:l.a},watch:{alertMsg:function(e,t){e?this.alertConfig.isModal=!0:(this.alertConfig.isModal=!1,this.businessInfo())}}},c=i("mBfb"),r=i.n(c),d=i("VU/8")(o,r.a,!1,null,null,null);t.a=d.exports},"35Nr":function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this.isLoading?t("div",{staticClass:"fixed-view"}):this._e(),this._v(" "),t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}]})])},staticRenderFns:[]}},ARYA:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.alertBussMsg?i("div",{staticClass:"main-container"},[i("el-dialog",{attrs:{size:"large",title:"完善基本信息","close-on-press-escape":!1,"close-on-click-modal":!1,"show-close":!1,visible:e.baseInfoReady},on:{"update:visible":function(t){e.baseInfoReady=t},close:function(t){e.closeBaseInfo()}}},[e.baseInfoReady?i("div",{staticClass:"section",staticStyle:{"padding-bottom":"0"}},[e.editBaseInfo.businessImgs&&e.editBaseInfo.businessImgs.length&&e.editBaseInfo.businessImgs[0].auditReason?i("div",{staticClass:"block-item mg-l primary-color"},[e._v("\n        资质信息审核不通过原因:"+e._s(e.editBaseInfo.businessImgs[0].auditReason)+"\n      ")]):e._e(),e._v(" "),i("div",{staticClass:"section-item"},[i("div",{staticClass:"section-title"},[i("span",[e._v("结算账户信息（所有信息必填）")])]),e._v(" "),e._l(e.configBaseInfo.sellerMain,function(t){return i("div",{staticClass:"block-item"},[i("span",{staticClass:"section-item-sign"},[e._v(e._s(t.label)+"：")]),e._v(" "),i("div",{staticClass:"inline-item"},[i("el-input",{staticClass:"input-item-large",attrs:{placeholder:t.placeholder,size:"small"},model:{value:e.editBaseInfo.sellerMain[t.key],callback:function(i){e.$set(e.editBaseInfo.sellerMain,t.key,i)},expression:"editBaseInfo.sellerMain[item.key]"}}),e._v(" "),t.tip?i("span",{staticClass:"mg-l disable-color",staticStyle:{display:"inline-block",width:"400px",float:"right","margin-top":"5px"}},[e._v(e._s(t.tip))]):e._e()],1)])}),e._v(" "),i("div",{staticClass:"block-item"},[i("span",{staticClass:"pd-l"},[e._v("注：开户行信息关系商家结款事宜，请务必确保信息正确，如不正确影响结款，由商家自行承担。")])])],2),e._v(" "),i("div",{staticClass:"section-item"},[i("div",{staticClass:"section-title"},[i("span",[e._v("联系人信息（标*为必填信息）")])]),e._v(" "),i("div",{staticClass:"result-view mg-t contact-view"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.editBaseInfo.sellerContacts}},[e._l(e.configBaseInfo.sellerContacts,function(t){return[i("el-table-column",{attrs:{label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(s){return["input"==t.type?i("div",[i("el-input",{staticClass:"input-item-middle",attrs:{size:"small"},model:{value:s.row[t.key],callback:function(i){e.$set(s.row,t.key,i)},expression:"scope.row[configItem.key]"}})],1):i("span",[e._v("\n                 "+e._s(e.mapSellerContactType[s.row[t.key]])+"\n               ")])]}}])})]})],2)],1)]),e._v(" "),i("div",{staticClass:"section-item"},[i("div",{staticClass:"section-title"},[i("span",[e._v("资质信息（宽度620px，高度不限，jpg格式）")])]),e._v(" "),i("div",{staticClass:"block-item"},[i("span",{staticClass:"section-item-sign",staticStyle:{display:"inline-block",width:"180px","text-align":"right"}},[e._v("发货类型：")]),e._v(" "),i("div",{staticClass:"inline-item"},[i("el-checkbox-group",{model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},[i("el-checkbox",{attrs:{label:0}},[e._v("一般贸易")]),e._v(" "),i("el-checkbox",{attrs:{label:1}},[e._v("跨境直邮")]),e._v(" "),i("el-checkbox",{attrs:{label:2}},[e._v("保税")])],1)],1)]),e._v(" "),i("div",{staticClass:"block-item"},[i("span",{staticClass:"section-item-sign",staticStyle:{display:"inline-block",width:"180px","text-align":"right"}},[e._v("公司注册地：")]),e._v(" "),i("div",{staticClass:"inline-item"},[i("el-radio",{attrs:{label:0},model:{value:e.CRPlace,callback:function(t){e.CRPlace=t},expression:"CRPlace"}},[e._v("大陆地区")]),e._v(" "),i("el-radio",{attrs:{label:1},model:{value:e.CRPlace,callback:function(t){e.CRPlace=t},expression:"CRPlace"}},[e._v("港澳台")]),e._v(" "),i("el-radio",{attrs:{label:2},model:{value:e.CRPlace,callback:function(t){e.CRPlace=t},expression:"CRPlace"}},[e._v("海外")])],1)]),e._v(" "),i("div",{staticClass:"block-item"},[i("span",{staticClass:"section-item-sign",staticStyle:{display:"inline-block",width:"180px","text-align":"right"}},[e._v("\n            "+e._s(e.CRPlace>0?"公司注册证号：":"营业执照编号：")+"\n          ")]),e._v(" "),i("div",{staticClass:"inline-item"},[i("el-input",{staticClass:"input-item-large",attrs:{placeholder:"请填写"+(e.CRPlace>0?"公司注册证号":"营业执照编号"),size:"small"},model:{value:e.editBaseInfo.sellerMain.businessLicenseCode,callback:function(t){e.$set(e.editBaseInfo.sellerMain,"businessLicenseCode",t)},expression:"editBaseInfo.sellerMain.businessLicenseCode"}})],1)]),e._v(" "),i("v-qual",{attrs:{CRPlace:e.CRPlace,qualificationList:e.qualificationList}})],1),e._v(" "),i("div",{staticClass:"section-item",staticStyle:{color:"#fb4b4d"}},[i("p",[e._v("注：1、复印件加盖公司公章或扫描件即可，图片中公章不可为灰色")])]),e._v(" "),i("section",{staticClass:"menu-center"},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.submitInfo}},[e._v("确认无误并提交")])],1)]):e._e()])],1):e._e()},staticRenderFns:[]}},"AX/5":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{visible:e.viewImageConfig.isShow,size:"small"},on:{"update:visible":function(t){e.$set(e.viewImageConfig,"isShow",t)}}},[i("img",{attrs:{width:"100%",src:e.viewImageConfig.url,alt:""}})])},staticRenderFns:[]}},"DZ/Q":function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]}},KYZe:function(e,t){},MpTN:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),a=i("vKXm"),l=i("GgDs"),o=i("bacB"),c=i("px6P"),r=i("/dWb"),d=i("2y5D"),u=i("pWp4"),v=i("Wphe"),m=i("NYxO"),f={name:"HOME",components:{vLeftNav:a.a,vHead:l.a,vLoad:o.a,vNotice:c.a,vToast:r.a,vAlertMsg:d.a,vEditInfo:u.a,vViewImage:v.a},data:function(){return{isReady:!1,config:{type:"Home",menu:!0}}},created:function(){this.initView()},computed:n()({},Object(m.d)(["loginCheck","editBussWithMsg"])),methods:n()({},Object(m.b)(["getLoginCheck","setEditWithMsg"]),{initView:function(){var e=this;this.getLoginCheck().then(function(){e.loginCheck.functionList.sort(function(e,t){return e.id-t.id}),e.isReady=!0})}})},g=i("Yr3F"),h=i.n(g);var p=function(e){i("PvpW")},_=i("VU/8")(f,h.a,!1,p,null,null);t.default=_.exports},PGMJ:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"left-bav panel-item"},[i("div",{staticStyle:{opacity:"0"}},[e._v("fixed-demo")]),e._v(" "),i("el-menu",{staticClass:"el-menu-vertical",attrs:{"default-active":e.onRoutes,"unique-opened":!0,router:""}},[e._l(e.menuList,function(t){return["经营概况"==t?[i("el-menu-item",{attrs:{index:"/operate/condition"}},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("经营概况")]),e._v(" "),i("el-menu-item",{attrs:{index:"/sale/guidelines"}},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("联系我们")])]:e._e(),e._v(" "),"商品管理"==t?[i("el-submenu",{attrs:{index:"8"}},[i("template",{slot:"title"},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("商品管理")]),e._v(" "),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"/product/list"}},[e._v("商品列表")]),e._v(" "),i("el-menu-item",{attrs:{index:"/product/audit"}},[e._v("审核记录")])],1)],2)]:e._e(),e._v(" "),"订单管理"==t?i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("订单管理")]),e._v(" "),i("el-menu-item-group",[e.menuList.indexOf("订单查询")>-1?[i("el-menu-item",{attrs:{index:"/order/search"}},[e._v("订单查询")]),e._v(" "),i("el-menu-item",{attrs:{index:"/order/export/list"}},[e._v("订单下载列表")])]:e._e(),e._v(" "),e.menuList.indexOf("售后订单统计")>-1?[i("el-menu-item",{attrs:{index:"/order/market/statistics"}},[e._v("售后订单统计")]),e._v(" "),i("el-menu-item",{attrs:{index:"/order/market"}},[e._v("售后订单列表")])]:e._e(),e._v(" "),e.menuList.indexOf("超时订单统计")>-1?[i("el-menu-item",{attrs:{index:"/order/timeout"}},[e._v("超时订单列表")])]:e._e(),e._v(" "),e.menuList.indexOf("超时发货报备")>-1?i("el-menu-item",{attrs:{index:"/order/timeout/record"}},[e._v("超时发货报备")]):e._e()],2)],2):e._e(),e._v(" "),"商家基本信息"==t?i("el-submenu",{attrs:{index:"3"}},[i("template",{slot:"title"},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("商家信息")]),e._v(" "),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"/business/info"}},[e._v("基本信息")]),e._v(" "),i("el-menu-item",{attrs:{index:"/delivery/area"}},[e._v("发货地管理")]),e._v(" "),i("el-menu-item",{attrs:{index:"/distribution/template"}},[e._v("配送模板管理")])],1)],2):e._e(),e._v(" "),"活动提报"==t?i("el-submenu",{attrs:{index:"4"}},[i("template",{slot:"title"},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("活动提报")]),e._v(" "),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"/large/report"}},[e._v("大促活动提报")])],1)],2):e._e(),e._v(" "),"运费模板"==t?i("el-menu-item",{attrs:{index:"/freight/temp"}},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("运费模板")]):e._e(),e._v(" "),"商家入仓"==t?[2==e.sellerInStorageStatus.status?[i("el-submenu",{attrs:{index:"9"}},[i("template",{slot:"title"},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("商家入仓")]),e._v(" "),i("el-menu-item-group",[i("el-menu-item",{attrs:{index:"/manage/warehouse"}},[e._v("入仓单管理")]),e._v(" "),i("el-menu-item",{attrs:{index:"/manage/warehouse/product"}},[e._v("入仓商品管理")]),e._v(" "),i("el-menu-item",{attrs:{index:"/manage/warehouse/order"}},[e._v("入仓订单管理")])],1)],2)]:i("el-menu-item",{attrs:{index:"/warehouse/agreement"}},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("商家入仓")])]:e._e(),e._v(" "),"发票管理"==t?i("el-menu-item",{attrs:{index:"/invoice/list"}},[i("i",{staticClass:"ggj-nav-icon"},[e._v("")]),e._v("发票管理")]):e._e()]})],2)],1)},staticRenderFns:[]}},PvpW:function(e,t){},VRGa:function(e,t){},Wphe:function(e,t,i){"use strict";var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),l={computed:n()({},Object(a.d)(["viewImageConfig"])),methods:n()({},Object(a.b)(["setViewImage"]))},o=i("AX/5"),c=i.n(o),r=i("VU/8")(l,c.a,!1,null,null,null);t.a=r.exports},Yr3F:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isReady?i("div",{staticClass:"main-panel",attrs:{id:"operateCondition"}},[i("v-head",{attrs:{config:e.config}}),e._v(" "),i("div",{staticClass:"control-panel"},[i("v-left-nav"),e._v(" "),i("div",{staticClass:"main-container panel-item"},[i("transition",{attrs:{name:"move",mode:"out-in"}},[i("router-view")],1)],1)],1),e._v(" "),i("v-load"),e._v(" "),i("v-notice"),e._v(" "),i("v-toast"),e._v(" "),e.editBussWithMsg?e._e():i("v-alert-msg"),e._v(" "),e.editBussWithMsg?i("v-edit-info"):e._e(),e._v(" "),i("v-view-image")],1):e._e()},staticRenderFns:[]}},bacB:function(e,t,i){"use strict";var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),l={computed:n()({},Object(a.d)(["loading","fullscreenLoading"])),data:function(){return{isLoading:!1}},watch:{"loading.list":function(e,t){e&&(e.length>=1?this.isLoading=!0:this.isLoading=!1)}}},o=i("35Nr"),c=i.n(o);var r=function(e){i("KYZe")},d=i("VU/8")(l,c.a,!1,r,"data-v-0c90650d",null);t.a=d.exports},mBfb:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{attrs:{size:"large",title:"消息","close-on-press-escape":e.dialogClose,"show-close":e.dialogClose,"close-on-click-modal":e.dialogClose,visible:e.alertConfig.isModal},on:{"update:visible":function(t){e.$set(e.alertConfig,"isModal",t)}}},[[i("v-detail-view",{attrs:{detailConfig:e.detailConfig}})]],2)],1)},staticRenderFns:[]}},"oY+3":function(e,t){},pWp4:function(e,t,i){"use strict";var s=i("mvHQ"),n=i.n(s),a=i("Dd8w"),l=i.n(a),o=i("NYxO"),c=i("DIng"),r=(i("HbYu"),{name:"editBusinessInfo",computed:l()({},Object(o.d)(["sellerQualification","alertBussMsg"])),created:function(){this.initView()},data:function(){return{checkList:[],CRPlace:"",editBaseInfo:{},baseInfoReady:!1,mapSellerContactType:{1:"发货联系人",2:"售后联系人",3:"运营联系人",4:"结算联系人",5:"业务对接人"},configBaseInfo:{sellerMain:[{key:"receiveBankAccount",label:"收款账号",placeholder:"字数限制50字",limit:50,req:!0},{key:"receiveBank",label:"开户行",placeholder:"字数限制150字",limit:150,tip:"注：需写到支行",req:!0},{key:"receiveName",label:"收款方名称",placeholder:"字数限制150字",limit:150,req:!0},{key:"swiftCode",label:"银行国际代码",placeholder:"字数限制150字",limit:150,tip:"注：海外商家必需填写银行国际代码"},{key:"bankAddress",label:"银行地址",placeholder:"字数限制150字",limit:150,tip:"注：海外商家必需填写银行地址"},{key:"companyAddress",label:"公司地址",placeholder:"字数限制150字",limit:150,tip:"注：海外商家必需填写公司地址"}],sellerContacts:[{label:"联系人类型",key:"type",type:"span",width:""},{label:"*姓名",key:"contactName",type:"input",width:"130"},{label:"*手机号",key:"contactPhone",type:"input",width:"130"},{label:"*QQ",key:"qq",type:"input",width:"130"},{label:"*邮箱",key:"email",type:"input",width:"130"},{label:"微信",key:"weixin",type:"input",width:"130"}]},qualificationList:{},checkContact:[{key:"contactName",label:"姓名",required:!0},{key:"contactPhone",label:"手机号",required:!0,reg:/^1(3|4|5|7|8)\d{9}$/g},{key:"qq",label:"QQ",required:!0,reg:/^\d{6,}$/g},{key:"email",label:"邮箱",required:!0,reg:/^(\w-*\.*)+@(\w-?)+(\.\w{2,4})+$/g}]}},methods:l()({},Object(o.b)(["getSellerBaseInfo","saveSellerBaseInfo","callSetNotice","setEditWithMsg","setAlertBussMsg"]),{initView:function(){var e=this;this.getSellerBaseInfo().then(function(t){e.editBaseInfo=JSON.parse(n()(t)),e.checkList=e.editBaseInfo.sellerMain.sendTypeList||[],e.CRPlace=e.editBaseInfo.sellerMain.registerType,e.qualificationList=[{key:"businessImgs",list:e.editBaseInfo.businessImgs,limit:1,label:"营业执照（副本）",success:"handleBusinessSuccess",before:"beforeBusinessUpload"},{key:"companyRegistrationImgs",list:e.editBaseInfo.companyRegistrationImgs,limit:5,label:"公司注册证明书",success:"handleCompanyRegistrationSuccess",before:"beforeCompanyRegistrationUpload"},{key:"foodCirculationImgs",list:e.editBaseInfo.foodCirculationImgs,limit:1,label:"食品流通许可证（副本）",success:"handleFoodCirculationSuccess",before:"beforeFoodCirculationUpload"}],e.baseInfoReady=!0})},submitInfo:function(){var e=this;for(var t in this.editBaseInfo.businessImgs=this.sellerQualification.businessImgs,this.editBaseInfo.foodCirculationImgs=this.sellerQualification.foodCirculationImgs,this.editBaseInfo.companyRegistrationImgs=this.sellerQualification.companyRegistrationImgs,this.configBaseInfo.sellerMain){var i=this.configBaseInfo.sellerMain[t];if(!this.editBaseInfo.sellerMain[i.key]&&i.req)return this.getNotice("请填写"+i.label),!1;if(this.editBaseInfo.sellerMain[i.key].length>i.limit)return this.getNotice(i.label+"字数小于"+i.limit+"字"),!1}for(var s in this.editBaseInfo.sellerContacts){var n=this.editBaseInfo.sellerContacts[s];for(var a in delete n.createTime,delete n.updateTime,delete n.remark,this.checkContact){var l=this.checkContact[a];if(l.required&&!n[l.key])return this.getNotice("请完善"+this.mapSellerContactType[n.type]+l.label),!1;if(l.reg&&!n[l.key].match(l.reg))return this.getNotice(this.mapSellerContactType[n.type]+l.label+"格式错误"),!1}}return this.checkList.length?"[object Null]"==Object.prototype.toString.call(this.CRPlace)?(this.getNotice("请选择公司注册地"),!1):this.editBaseInfo.sellerMain.businessLicenseCode?(this.editBaseInfo.sellerMain.sendTypeList=this.checkList,this.editBaseInfo.sellerMain.registerType=this.CRPlace,void this.saveSellerBaseInfo(this.editBaseInfo).then(function(){e.closeBaseInfo()})):(this.getNotice("请填写"+(this.CRPlace>0?"公司注册证号":"营业执照编号")),!1):(this.getNotice("请选择发货类型"),!1)},getNotice:function(e){var t={isShow:!0,msg:e};this.callSetNotice(t)},closeBaseInfo:function(){this.setAlertBussMsg(!1)}}),components:{vQual:c.a}}),d=i("ARYA"),u=i.n(d);var v=function(e){i("oY+3")},m=i("VU/8")(r,u.a,!1,v,"data-v-44b1e1b2",null);t.a=m.exports},px6P:function(e,t,i){"use strict";var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),l={computed:n()({},Object(a.d)(["notice"])),methods:n()({},Object(a.b)(["callSetNotice"])),watch:{"notice.isShow":function(e,t){if(e){this.notice.type&&"success"==this.notice.type?this.$message.success(this.notice.msg):this.$message.error(this.notice.msg);this.callSetNotice({isShow:!1,msg:""})}}}},o=i("DZ/Q"),c=i.n(o);var r=function(e){i("VRGa")},d=i("VU/8")(l,c.a,!1,r,"data-v-17664cc3",null);t.a=d.exports},vKXm:function(e,t,i){"use strict";var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),l={data:function(){return{menuList:[],uniqueOpen:!1}},created:function(){this.initMenu()},computed:n()({},Object(a.d)(["loginCheck","sellerInStorageStatus","newGoods"]),{onRoutes:function(){return this.$route.path}}),methods:n()({},Object(a.b)(["getSellerInStorageStatus"]),{initMenu:function(){for(var e=this.loginCheck.functionList.length;e--;){var t=this.loginCheck.functionList[e].functionName;this.menuList.push(t)}this.menuList.reverse(),this.getSellerInStorageStatus()},wareHouse:function(){var e=this,t=window.open();this.getSellerInStorageStatus().then(function(){2==e.sellerInStorageStatus.status?t.location.href="/sellerAdmin/page/sellerinstorage/order.html":(t.close(),e.$router.push({path:"/warehouse/agreement"}))})}})},o=i("PGMJ"),c=i.n(o),r=i("VU/8")(l,c.a,!1,null,null,null);t.a=r.exports}});
//# sourceMappingURL=2.9e324145e0c52a9c6d78.js.map