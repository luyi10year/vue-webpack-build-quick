webpackJsonp([23],{FLCD:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.mapBatchType[t.batchType]))])]),t._v(" "),s("div",{staticClass:"section"},[s("div",{staticClass:"section-item export-config"},[s("div",{staticClass:"left-item"},[s("el-upload",{ref:"uploadMock",attrs:{"show-file-list":!1,action:(t.batchType,"/sellerAdmin/order/mockSendOrder"),data:t.batchMockSendOrder,"before-upload":t.handleBeforeUpload,"on-success":t.handSuccess}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),t.uploadFileList.isShow?s("ul",{staticClass:"el-upload-list el-upload-list--text"},[s("li",{staticClass:"el-upload-list__item is-ready"},[s("a",{staticClass:"el-upload-list__item-name"},[s("i",{staticClass:"el-icon-document"}),t._v(t._s(t.uploadFileList.name))])])]):t._e(),t._v(" "),t.isReady?s("div",[t._v("导入结果：成功："+t._s(t.uploadList.successNumber)+" "),t.uploadList.failNumber?s("span",{staticClass:"primary-color"},[t._v("失败："+t._s(t.uploadList.failNumber))]):t._e(),t._v(" "),t.uploadList.warnNumber?s("span",{staticClass:"warn-color"},[t._v("提醒："+t._s(t.uploadList.warnNumber))]):t._e()]):t._e()],1),t._v(" "),s("div",{staticClass:"right-item"},[s("div",{staticClass:"export-menu"},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){t.downTemplate("send")}}},[t._v("下载"+t._s(t.mapBatchType[t.batchType])+"模板")])],1),t._v(" "),t.isReady?s("div",{staticClass:"export-menu"},[s("el-button",{attrs:{size:"small",disabled:!t.uploadList.list||!t.uploadList.list.length,type:"primary"},on:{click:function(e){t.exportMock()}}},[t._v("导出发货数据")])],1):t._e()])]),t._v(" "),t.isReady?s("div",{staticClass:"section-item"},[s("div",{staticClass:"result-view"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.uploadList.list}},[t._l(t.currentSearch.option,function(e,a){return["statusStr"==e.key?s("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["失败"==e.row.statusStr?s("span",{staticClass:"primary-color"},[t._v(t._s(e.row.statusStr))]):"提醒"==e.row.statusStr?s("span",{staticClass:"warn-color"},[t._v(t._s(e.row.statusStr))]):s("span",[t._v(t._s(e.row.statusStr))])]}}])}):"msg"==e.key?s("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["失败"==e.row.statusStr?s("span",{staticClass:"primary-color"},[t._v(t._s(e.row.msg))]):"提醒"==e.row.statusStr?s("span",{staticClass:"warn-color"},[t._v(t._s(e.row.msg))]):s("span",[t._v(t._s(e.row.msg))])]}}])}):"shipmentCode"==e.key?[1==t.batchType?s("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}}):t._e()]:s("el-table-column",{attrs:{prop:e.key,label:e.label,width:e.width,align:"center"}})]})],2)],1)]):t._e(),t._v(" "),t.isReady?s("div",{staticClass:"section-item"},[s("div",{staticClass:"export-result-menu"},[s("el-button",{attrs:{disabled:!(t.uploadList.successNumber+t.uploadList.warnNumber>0&&t.uploadList.failNumber<1),size:"small",type:"primary"},on:{click:function(e){t.batchSend()}}},[t._v("确认导入发货")])],1)]):t._e()]),t._v(" "),s("el-dialog",{staticClass:"modal-dialog",attrs:{title:"",size:"tiny",visible:t.modal.isShow},on:{"update:visible":function(e){t.$set(t.modal,"isShow",e)},close:t.cancelModal}},[s("div",[t._v("完成发货，存在发货失败的数据是否下载？")]),t._v(" "),s("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[s("a",{attrs:{target:"_blank",href:t.modal.href}},[s("el-button",{attrs:{type:"primary",size:"small"}},[t._v("下载")])],1),t._v(" "),s("el-button",{staticStyle:{"margin-left":"20px"},attrs:{size:"small"},on:{click:t.cancelModal}},[t._v("取消")])],1)])],1)},staticRenderFns:[]}},FkLL:function(t,e){},O3wM:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),l=s("NYxO"),o={name:"batchDeliver",computed:i()({},Object(l.mapState)(["mockSendOrder"])),created:function(){this.initBatch()},data:function(){return{batchMockSendOrder:{orderSendFile:null,isReSend:!1},uploadList:{},uploadFileList:{isShow:!1,name:""},isReady:!1,currentSearch:{option:[{label:"订单编号",key:"orderNumber"},{label:"发货编码",key:"deliverCode"},{label:"发货件数",key:"count"},{label:"物流公司",key:"expressChannel"},{label:"运单编号",key:"expressNumber"},{label:"发货单号",key:"shipmentCode"},{label:"状态",key:"statusStr"},{label:"说明",key:"msg"}]},batchType:0,modal:{isShow:!1,href:""},mapBatchType:{0:"批量发货",1:"重新批量发货"}}},methods:i()({},Object(l.mapActions)(["downLoadSendTemplate","exportMockResult","batchSendOrder","callSetNotice","getMockOrderList","setMockSendOrder","submitBatchSendOrder","getIfTaskOver","setFullLoading"]),{initBatch:function(){var t=this;this.batchType="resend"==this.$route.params.type?1:0,this.batchMockSendOrder.isReSend=1==this.batchType,this.mockSendOrder.orderSendFile&&(this.uploadFileList.isShow=!0,this.uploadFileList.name=this.mockSendOrder.orderSendFile.name,this.batchMockSendOrder.orderSendFile=this.mockSendOrder.orderSendFile,this.setFullLoading(!0),this.getMockOrderList({type:this.batchType,data:this.batchMockSendOrder}).then(function(e){t.uploadList=e,t.isReady=!0,t.setMockSendOrder(null),t.setFullLoading(!1)}))},batchSend:function(){var t=this;this.submitBatchSendOrder({type:this.batchType,data:{orderSendFile:this.batchMockSendOrder.orderSendFile}}).then(function(){t.setFullLoading(!0),setTimeout(function(){this.checkBatchSend()}.bind(t),1500)})},checkBatchSend:function(){var t=this;this.getIfTaskOver().then(function(e){0==e?setTimeout(function(){this.checkBatchSend()}.bind(t),1500):1==e?(t.setFullLoading(!1),t.getNotice("批量发货成功"),t.$router.push({path:"/order/search"})):(t.setFullLoading(!1),t.setFailLink(e))})},setFailLink:function(t){this.modal.isShow=!0,this.modal.href=t},cancelModal:function(){this.modal.isShow=!1,this.modal.href=""},handleBeforeUpload:function(t){t.type;if(!{xls:"xls",xlsx:"xlsx"}[t.name.split(".").pop()])return this.getNotice("格式错误"),!1;this.uploadFileList.isShow=!0,this.uploadFileList.name=t.name,this.batchMockSendOrder.orderSendFile=t,this.setFullLoading(!0)},handSuccess:function(t){this.successReady(t)},successReady:function(t){1==t.code?(this.uploadList=t.data,this.isReady=!0):(this.getNotice("格式错误"),this.isReady=!1,this.uploadList={}),this.setFullLoading(!1)},downTemplate:function(){this.downLoadSendTemplate({type:this.batchType})},exportMock:function(){this.exportMockResult()},getNotice:function(t,e){var s={isShow:!0,msg:t,type:e};this.callSetNotice(s)}})},n=s("FLCD"),r=s.n(n);var d=function(t){s("FkLL"),s("eDyL")},c=s("VU/8")(o,r.a,!1,d,"data-v-106e29b0",null);e.default=c.exports},eDyL:function(t,e){}});
//# sourceMappingURL=23.060f02a185d0ed9cd8c1.js.map