webpackJsonp([33],{"1rel":function(e,l){},esnM:function(e,l){e.exports={render:function(){var e=this.$createElement,l=this._self._c||e;return l("div",[this._m(0),this._v(" "),l("div",{staticClass:"section market-section-wrap"},[l("v-search-item"),this._v(" "),l("v-search-menu"),this._v(" "),l("v-search-result")],1)])},staticRenderFns:[function(){var e=this.$createElement,l=this._self._c||e;return l("div",{staticClass:"title"},[l("span",[this._v("售后订单列表")])])}]}},kRXt:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var a=t("Dd8w"),r=t.n(a),i=t("dJOE"),c=t("NOQh"),s=t("7sCf"),o=t("NYxO"),p={name:"orderMarket",created:function(){this.initSearch()},data:function(){return{orderSearch:{searchList:{public:[{type:"",key:"page",intKey:1},{type:"",key:"rows",intKey:20},{type:"input",label:"订单编号",placeholder:"请输入订单编号",key:"orderNumber"},{type:"select",label:"销售渠道",placeholder:"请选择",key:"orderType",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"1",label:"格格家"},{value:"4",label:"环球捕手"},{value:"6",label:"格格家供应链"},{value:"7",label:"手Q"},{value:"8",label:"脉宝云店"},{value:"10",label:"美食买手"}]},{type:"select",label:"售后类型",placeholder:"请选择",key:"workOrderType",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"1",label:"仅退款"},{value:"2",label:"退货退款"},{value:"3",label:"咨询"},{value:"4",label:"投诉"},{value:"5",label:"赔付"}]},{type:"select",label:"问题类型",placeholder:"请选择",key:"workOrderProblemCode",options:[]},{type:"select",label:"售后咨询",placeholder:"请选择",key:"replyStatus",isClear:!0,selectType:"selectAll",breakLine:!0,options:[{value:"all",label:"全部"},{value:"1",label:"待回复"}]}],private:[{type:"date-picker",label:"付款时间",placeholder:"请选择",key:"payTimeStart",checkNextDate:"payTimeEnd",split:!0},{type:"date-picker",label:"",placeholder:"请选择",key:"payTimeEnd",checkPreDate:"payTimeStart"},{type:"date-picker",label:"创建时间",placeholder:"请选择",key:"createTimeStart",checkNextDate:"createTimeEnd",split:!0},{type:"date-picker",label:"",placeholder:"请选择",key:"createTimeEnd",checkPreDate:"createTimeStart"}]},searchMenu:{public:[{label:"查询",style:"primary",type:"submit"},{label:"重置",type:"reset"}],private:[{label:"导出",type:"export"}]},resultItem:{type:"market",option:[{fixed:"left",label:"订单编号",key:"orderNumber",width:"150"},{label:"订单状态",key:"orderStatusDesc",width:"100"},{label:"销售渠道",key:"orderTypeDesc",width:"140"},{label:"售后类型",key:"workOrderTypeDesc",width:"120"},{label:"问题类型",key:"workOrderProblemStr"},{label:"创建时间",key:"workOrderCreateTime",width:"180"},{label:"售后咨询",key:"replyStr",width:"120"},{fixed:"right",type:"opera",label:"操作",width:"110"}],opera:{items:[{type:"toDetail",label:"查看详情",key:"workOrderNumber",val:"workOrderNumber",source:"market"}]}}}}},methods:r()({},Object(o.b)(["setSearch","getAllWorkOrderProblemForSelect"]),{initSearch:function(){var e=this;this.getAllWorkOrderProblemForSelect().then(function(l){var t=[];l.forEach(function(e,l){var a={label:e.value,value:e.key+""};t.push(a)}),e.orderSearch.searchList.public[5].options=t}),this.setSearch(this.orderSearch)}}),components:{vSearchItem:i.a,vSearchMenu:c.a,vSearchResult:s.a}},n=t("esnM"),d=t.n(n);var h=function(e){t("1rel")},u=t("VU/8")(p,d.a,!1,h,null,null);l.default=u.exports}});
//# sourceMappingURL=33.44a85c9dd5437cbae663.js.map