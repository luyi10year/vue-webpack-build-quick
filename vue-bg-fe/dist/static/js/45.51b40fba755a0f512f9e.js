webpackJsonp([45],{D3Ux:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),e._v(" "),e.dataReady?i("div",{staticClass:"section"},[i("div",{staticClass:"section-item"},[i("div",{staticClass:"base-data"},[i("div",{staticClass:"base-data"},[i("div",{staticClass:"inline-item"},[i("span",[e._v("订单编号："+e._s(e.orderDetail.number||"暂无信息"))])]),e._v(" "),i("div",{staticClass:"inline-item"},[i("span",[e._v("销售渠道："+e._s(e.orderType[e.orderDetail.type]||"暂无信息"))])]),e._v(" "),i("div",{staticClass:"inline-item"},[i("span",[e._v("下单时间："+e._s(e.orderDetail.createTime||"暂无信息"))])]),e._v(" "),i("div",{staticClass:"inline-item"},[i("span",[e._v("付款时间："+e._s(e.orderDetail.payTime||"暂无信息"))])]),e._v(" "),i("div",{staticClass:"inline-item"},[i("span",[e._v("导出时间：\n            "),1==e.orderDetail.operationStatus?[e._v("\n              "+e._s(e.orderDetail.operationTime?e.orderDetail.operationTime:"未导出")+"\n            ")]:[e._v("\n              未导出\n            ")]],2)]),e._v(" "),i("div",{staticClass:"inline-item"},[i("span",[e._v("订单状态："+e._s(e.orderStatus[e.orderDetail.status]))])]),e._v(" "),i("div",{staticClass:"inline-item"},[i("span",[e._v("冻结状态："+e._s(e.orderFreeze[e.orderDetail.isFreeze]?e.orderFreeze[e.orderDetail.isFreeze]:"暂无信息"))])])]),e._v(" "),i("div",{staticClass:"steps"},[e.orderDetail.status>4?i("el-steps",{attrs:{space:200,active:1,center:""}},[i("el-step",{attrs:{title:"提交订单",description:""}}),e._v(" "),i("el-step",{attrs:{title:"待发货",description:""}}),e._v(" "),i("el-step",{attrs:{title:"已发货",description:""}}),e._v(" "),i("el-step",{attrs:{title:"交易成功",description:""}})],1):i("el-steps",{attrs:{space:200,active:e.orderDetail.status,center:""}},[i("el-step",{attrs:{title:"提交订单",description:""}}),e._v(" "),i("el-step",{attrs:{title:"待发货",description:""}}),e._v(" "),i("el-step",{attrs:{title:"已发货",description:""}}),e._v(" "),i("el-step",{attrs:{title:"交易成功",description:""}})],1)],1)])]),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"result-view"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.orderDetail.orderProductList}},[e._l(e.productConfig,function(t,s){return["unit"==t.type?i("el-table-column",{attrs:{label:t.label,width:"item.width",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("div",{staticClass:"el-table-image"})]}}])}):i("el-table-column",{attrs:{label:t.label,width:t.width,prop:t.key,align:"center"}})]})],2)],1)]):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("入仓订单详情")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-item"},[t("div",[t("div",{staticClass:"section-title"},[t("span",[this._v("商品清单")])])])])}]}},bV3l:function(e,t){},yWkB:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("Dd8w"),a=i.n(s),r=i("NYxO"),l={created:function(){this.initView()},data:function(){return{marketType:{1:"仅退款",2:"退款退货",3:"咨询",4:"投诉",5:"赔付"},orderType:{1:"格格家",2:"格格团",3:"格格团全球购",4:"环球捕手",5:"燕网",6:"格格家供应链",7:"手q",8:"脉宝云店",10:"美食买手"},marketLabel:{1:"退款",2:"退款",5:"赔付",3:""},orderStatus:{1:"提交订单",2:"待发货",3:"已发货",4:"交易成功",5:"用户取消",6:"超时取消",7:"团购进行中"},orderFreeze:{0:"未冻结",1:"已冻结",2:"未冻结"},tableList:[],productConfig:[{key:"baseGoodsCode",label:"基础商品码"},{key:"skuCode",label:"SKU码"},{key:"deliverCode",label:"发货编码"},{key:"skuName",label:"商品名称-销售属性"},{key:"count",label:"购买数量"},{key:"refundCount",label:"退款数量"}],dataReady:!1,orderNumber:"",orderDetail:{}}},computed:a()({},Object(r.d)(["orderDetail"])),methods:a()({},Object(r.b)(["setViewImage","getWareHouseOrderDetail"]),{initView:function(){var e=this,t=this.$route.query.operateNumber;this.orderNumber=t;var i={orderNumber:t};this.getWareHouseOrderDetail(i).then(function(t){e.setOrderDetail(t)})},setOrderDetail:function(e){this.orderDetail=e,this.dataReady=!0}})},n=i("D3Ux"),d=i.n(n);var o=function(e){i("bV3l")},c=i("VU/8")(l,d.a,!1,o,"data-v-17c691f6",null);t.default=c.exports}});
//# sourceMappingURL=45.51b40fba755a0f512f9e.js.map