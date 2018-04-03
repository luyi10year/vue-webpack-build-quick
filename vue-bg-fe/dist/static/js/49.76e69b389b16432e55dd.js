webpackJsonp([49],{q8vC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),r=a.n(l),i=a("uzL+"),n=a("jzsd"),s=a("NYxO"),c=a("tKaV"),u={created:function(){},mounted:function(){this.initView()},data:function(){return{tableList:[],pagingShow:!1,paging:{currentPage:1,pageSizes:[20,30,50,100],pageSize:0,total:0,query:{}},loading:!0}},computed:r()({},Object(s.d)(["currentSearch","currentSearchQuery"])),methods:r()({},Object(s.b)(["getWareHouseOrderList","getWareHouseOrderListCount","setCurrentSearchQuery"]),{initView:function(){var e=this,t=this.$route.query;this.currentSearchOption=Util.searchQuery(t,this.currentSearch.searchList.public,this.currentSearch.searchList.private),this.setCurrentSearchQuery(this.currentSearchOption),this.loading=!0,this.pagingShow=!1,this.getWareHouseOrderList(this.currentSearchQuery).then(function(t){e.pagingShow=!0,e.setList(t)})},setList:function(e){var t=this;this.tableList=e,this.loading=!1,this.paging.pageSize=Number(this.currentSearchQuery.rows),this.paging.currentPage=Number(this.currentSearchQuery.page),this.getWareHouseOrderListCount(this.currentSearchQuery).then(function(e){t.paging.total=e}),this.paging.query=this.currentSearchQuery},tableRowClassName:function(e,t){return t%2==1?"info-row":"positive-row"},toDetail:function(e){this.$router.push({path:"/manage/warehouse/order/detail",query:{operateNumber:e}})}}),components:{vPagination:c.a},watch:{$route:function(e,t){e.fullPath!==t.fullPath&&this.initView()}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section-item section-item-no-padding"},[a("div",{staticClass:"result-view"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中",data:e.tableList,"row-class-name":e.tableRowClassName}},[e._l(e.currentSearch.resultItem.option,function(t,l){return["unit"==t.type?a("el-table-column",{attrs:{prop:t.key,label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}):"opera"==t.type?a("el-table-column",{attrs:{label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.toDetail(t.row.orderNumber)}}},[e._v("查看详情")])]}}])}):"type"==t.type?a("el-table-column",{attrs:{label:t.label,width:t.width,align:"center"},scopedSlots:e._u([{key:"default",fn:function(l){return[a("span",[e._v(e._s(t.map[l.row[t.key]]))])]}}])}):a("el-table-column",{attrs:{prop:t.key,label:t.label,width:t.width,align:"center"}})]})],2),e._v(" "),e.pagingShow?a("v-pagination",{attrs:{paging:e.paging}}):e._e()],1)])},staticRenderFns:[]},p=a("VU/8")(u,o,!1,null,null,null).exports,h={name:"",created:function(){this.initView()},computed:r()({},Object(s.d)(["currentSearch"])),data:function(){return{searchPage:{searchList:{public:[{type:"",key:"page",intKey:1},{type:"",key:"rows",intKey:20},{type:"input",label:"订单编号",placeholder:"请输入内容",key:"orderNumber"},{type:"select",label:"订单状态",placeholder:"请选择",key:"orderStatus",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"2",label:"待发货"},{value:"3",label:"已发货"},{value:"4",label:"交易成功"},{value:"5",label:"用户取消"},{value:"6",label:"超时取消"}]},{type:"select",label:"销售渠道",placeholder:"请选择",key:"orderType",selectType:"selectAll",options:[{value:"all",label:"全部"},{value:"1",label:"格格家"},{value:"4",label:"环球捕手"},{value:"6",label:"格格家供应链"},{value:"7",label:"手Q"},{value:"8",label:"脉宝云店"},{value:"10",label:"美食买手"}]},{type:"input",label:"基础商品码",placeholder:"请输入内容",key:"baseGoodsCode"},{type:"input",label:"发货编码",placeholder:"请输入内容",key:"deliveryCode"},{type:"input",label:"商品名称",placeholder:"请输入内容",key:"productName"},{type:"date-picker",label:"付款时间",placeholder:"请选择",key:"payTimeStart",checkNextDate:"payTimeEnd",split:!0},{type:"date-picker",label:"",placeholder:"请选择",key:"payTimeEnd",checkPreDate:"payTimeStart"},{type:"date-picker",label:"发货时间",placeholder:"请选择",key:"sendTimeStart",checkNextDate:"sendTimeEnd",split:!0},{type:"date-picker",label:"",placeholder:"请选择",key:"sendTimeEnd",checkPreDate:"sendTimeStart"}]},searchMenu:{public:[{label:"查询",style:"primary",type:"submit"},{label:"重置",type:"reset"}],private:[{type:"export",label:"导出"}]},resultItem:{option:[{label:"订单编号",key:"orderNumber"},{label:"订单状态",key:"status",type:"type",map:{1:"提交订单",2:"待发货",3:"已发货",4:"交易成功",5:"用户取消",6:"超时取消"}},{label:"销售渠道",key:"type"},{label:"付款时间",key:"payTime"},{label:"发货时间",key:"sendTime"},{type:"opera",label:"操作",width:"120"}]}}}},methods:r()({},Object(s.b)(["setSearch"]),{initView:function(){this.setSearch(this.searchPage)}}),components:{vSearchItem:i.a,vSearchMenu:n.a,vSearchResult:p}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._m(0),this._v(" "),t("div",{staticClass:"section search-ware-box"},[t("v-search-item"),this._v(" "),t("v-search-menu"),this._v(" "),t("v-search-result")],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("span",[this._v("入仓订单管理")])])}]},y=a("VU/8")(h,d,!1,null,null,null);t.default=y.exports}});
//# sourceMappingURL=49.76e69b389b16432e55dd.js.map