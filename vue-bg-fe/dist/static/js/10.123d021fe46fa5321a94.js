webpackJsonp([10],{"++el":function(t,e){},Efoi:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title"},[this._v("\n    商品审核列表\n  ")]),this._v(" "),e("div",{staticClass:"section audit-goods-box"},[e("div",{staticClass:"section-item"},[e("div",{staticClass:"search-item"},[e("v-search")],1)]),this._v(" "),e("v-menu"),this._v(" "),e("v-result")],1)])},staticRenderFns:[]}},MlDd:function(t,e,i){"use strict";var r=i("Dd8w"),s=i.n(r),a=i("j+MX"),n=i("NYxO"),o={computed:s()({},Object(n.d)(["currentSearch","currentSearchQuery"])),components:{vMenu:a.a},methods:s()({},Object(n.b)(["setCurrentSearchQuery","setClearSelect","exportProductList","exportBaseProduct"]),{reset:function(){var t=Util.resetQuery(this.currentSearch.searchList.public,this.currentSearch.searchList.private);this.setCurrentSearchQuery(t),this.setClearSelect({isClear:!0})},toExport:function(){var t={};for(var e in this.currentSearchQuery)this.currentSearchQuery[e]&&"all"!=this.currentSearchQuery[e]&&(t[e]=this.currentSearchQuery[e]);this.exportProductList(t)},toExportList:function(){var t={};for(var e in this.currentSearchQuery)this.currentSearchQuery[e]&&"all"!=this.currentSearchQuery[e]&&(t[e]=this.currentSearchQuery[e]);this.exportBaseProduct(t)}})},c=i("eNRE"),u=i.n(c),l=i("VU/8")(o,u.a,!1,null,null,null);e.a=l.exports},VeHz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("Dd8w"),s=i.n(r),a=i("75Vn"),n=i("MlDd"),o=i("tKaV"),c=i("NYxO"),u={computed:s()({},Object(c.d)(["currentSearch","currentSearchQuery"])),created:function(){this.initView()},data:function(){return{loading:!1,mapType:{status:{0:"待初审",1:"待复审",2:"通过",4:"失败"},firstStatus:{0:"--",1:"通过",2:"失败"},secondStatus:{0:"--",1:"通过",2:"失败"}},paging:{currentPage:1,pageSizes:[20,30,50,100],pageSize:0,total:0},pagingShow:!1,searchResult:{}}},methods:s()({},Object(c.b)(["withDrawGoodsAudit","getGoodsAuditList","callSetNotice","setCurrentSearchQuery"]),{initView:function(){var t=this.$route.query;for(var e in t)"true"==t[e]?t[e]=!0:"false"==t[e]&&(t[e]=!1);this.currentSearchOption=Util.searchQuery(t,this.currentSearch.searchList.public,this.currentSearch.searchList.private),this.setCurrentSearchQuery(this.currentSearchOption),this.searchList(this.currentSearchQuery)},searchList:function(t){var e=this;this.loading=!0,this.getGoodsAuditList(t).then(function(t){e.searchResult=t,e.setPage()})},setPage:function(){this.paging.pageSize=Number(this.currentSearchQuery.rows),this.paging.currentPage=Number(this.currentSearchQuery.page),this.paging.total=this.searchResult.total,this.pagingShow=!0,this.loading=!1},editShow:function(t,e,i){4==e?this.$router.push({name:"productDetail",query:{goodsId:t,type:"consult",baseGoodsCode:i}}):this.$router.push({name:"productConsult",query:{goodsId:t}})},callWithDrawGoodsAudit:function(t){var e=this;this.$confirm("商品审核撤回后将变为审核失败状态，如需重新提交审核请在审核失败记录中查找。是否确认撤回？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.withDrawGoodsAudit({auditId:t}).then(function(){e.initView()})}).catch(function(){})},getToast:function(t){this.callSetNotice({isShow:!0,msg:t,type:"warning"})}}),watch:{$route:function(t,e){t.fullPath!==e.fullPath&&this.initView()}},components:{vPagination:o.a}},l=i("uSMS"),d=i.n(l);var h=function(t){i("++el")},p=i("VU/8")(u,d.a,!1,h,"data-v-e0a97610",null).exports,y={computed:s()({},Object(c.d)(["currentSearchQuery"])),created:function(){this.initView()},data:function(){return{searchPage:{searchList:{public:[{type:"",key:"page",intKey:1},{type:"",key:"rows",intKey:20},{type:"input",label:"基础商品码",placeholder:"请输入基础商品码",key:"baseGoodsCode",intKey:""},{type:"input",label:"商品名称",placeholder:"请输入商品名称",key:"name",intKey:""},{type:"check-group",label:"审核状态",placeholder:"",items:[{label:"待初审",placeholder:"待初审",key:"isAudit",intKey:!0,isClear:!0},{label:"待复审",placeholder:"待复审",key:"isAuditAgain",intKey:!0,isClear:!0},{label:"通过",placeholder:"通过",key:"isPass",intKey:""},{label:"失败",placeholder:"失败",key:"isFail",intKey:""}]}],private:[]},searchMenu:{public:[{label:"查询",type:"submit",style:"primary"},{label:"重置",type:"reset"}]},resultItem:{option:[{label:"提交审核信息",type:"auditMsg",width:"260"},{label:"基础商品信息",type:"goodsMsg",width:"300"},{label:"初审信息",type:"auditFir",width:"240"},{label:"复审信息",type:"auditSec",width:"240"},{label:"操作",key:"opera",width:"120"}]}}}},methods:s()({},Object(c.b)(["setSearch"]),{initView:function(){this.setSearch(this.searchPage)}}),components:{vSearch:a.a,vResult:p,vMenu:n.a}},f=i("Efoi"),v=i.n(f);var m=function(t){i("fVop")},w=i("VU/8")(y,v.a,!1,m,null,null);e.default=w.exports},eNRE:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-item section-item-no-padding"},[i("div",{staticClass:"menu-item"},[i("v-menu"),t._v(" "),t._l(t.currentSearch.searchMenu.private,function(e,r){return i("div",{staticClass:"inline-item"},["export"==e.type?i("el-button",{attrs:{type:e.style},on:{click:function(e){t.toExport()}}},[t._v(t._s(e.label))]):"new-export"==e.type?i("el-button",{attrs:{type:e.style},on:{click:function(e){t.toExportList()}}},[t._v(t._s(e.label))]):"reset"==e.type?i("el-button",{attrs:{type:e.style},on:{click:function(e){t.reset()}}},[t._v(t._s(e.label))]):t._e()],1)})],2)])},staticRenderFns:[]}},fVop:function(t,e){},uSMS:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-box"},[i("div",{staticClass:"item-table"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中",border:"",data:t.searchResult.rows}},[t._l(t.currentSearch.resultItem.option,function(e,r){return["auditMsg"==e.type?i("el-table-column",{attrs:{fixed:"",label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"msg-item"},[i("p",[t._v("提交审核时间："+t._s(e.row.createTime))]),t._v(" "),i("p",[t._v("审核状态："+t._s(t.mapType.status[e.row.status]))])])]}}])}):"goodsMsg"==e.type?i("el-table-column",{attrs:{label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"msg-item"},[i("p",[t._v("基础商品码："+t._s(e.row.baseGoodsCode))]),t._v(" "),i("p",[t._v("商品名称："+t._s(e.row.name))])])]}}])}):"auditFir"==e.type?i("el-table-column",{attrs:{label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"msg-item"},[i("p",[t._v("初审结果："+t._s(t.mapType.firstStatus[e.row.firstAudit])+" "),e.row.firstAudit>0&&e.row.firstAuditPerson?i("span",[t._v("("+t._s(e.row.firstAuditPerson)+")")]):t._e()]),t._v(" "),e.row.firstAuditTime?i("p",[t._v("初审时间："+t._s(e.row.firstAuditTime))]):t._e(),t._v(" "),2==e.row.firstAudit&&e.row.comment?i("p",[t._v("原因："+t._s(e.row.comment))]):t._e()])]}}])}):"auditSec"==e.type?i("el-table-column",{attrs:{label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"msg-item"},[i("p",[t._v("复审结果："+t._s(t.mapType.secondStatus[e.row.secondAudit])+" "),e.row.secondAudit>0&&e.row.secondAuditPerson?i("span",[t._v("("+t._s(e.row.secondAuditPerson)+")")]):t._e()]),t._v(" "),e.row.secondAuditTime?i("p",[t._v("复审时间："+t._s(e.row.secondAuditTime))]):t._e(),t._v(" "),2==e.row.secondAudit&&e.row.comment?i("p",[t._v("原因："+t._s(e.row.comment))]):t._e()])]}}])}):"opera"==e.key?i("el-table-column",{attrs:{fixed:"right",prop:e.key,label:e.label,width:e.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.status||1==e.row.status?i("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(i){t.callWithDrawGoodsAudit(e.row.id)}}},[t._v("撤回")]):t._e(),t._v(" "),i("el-button",{attrs:{size:"small"},on:{click:function(i){t.editShow(e.row.id,e.row.status,e.row.baseGoodsCode)}}},[t._v("查看")])]}}])}):t._e()]})],2)],1),t._v(" "),t.pagingShow?i("v-pagination",{attrs:{paging:t.paging}}):t._e()],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.123d021fe46fa5321a94.js.map