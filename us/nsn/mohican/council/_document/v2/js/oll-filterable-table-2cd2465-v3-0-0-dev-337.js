"use strict";(self.webpackChunkpartner_us_nsn_mohican_council=self.webpackChunkpartner_us_nsn_mohican_council||[]).push([[340],{4140:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});n(3466),n(9665);var r=function(){var t=this,e=t._self._c;return e("span",{staticClass:"table--filtered"},[t.tableCaption?e("h6",{staticClass:"h__caption"},[t._v("\n    "+t._s(t.tableCaption.content)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"filter-form"},[e("span",{staticClass:"icon icon-funnel"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"filter__input",attrs:{type:"text",placeholder:"Filter table...","aria-label":"Enter search term to filter table results"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),t.tableThead?e("div",{staticClass:"table_wrap"},[e("table",{staticClass:"is-filtered",staticStyle:{width:"100%"}},[t.tableThead?e("thead",t._l(t.tableThead.children,(function(n,r){return e("tr",{key:"trh_"+r},t._l(n.children,(function(n,i){return e("th",{key:"th_"+r+"_"+i},[t._v("\n            "+t._s(n.content)+"\n          ")])})),0)})),0):t._e(),t._v(" "),t.tableTbody?e("tbody",[t.isFilterEmpty?e("tr",[e("td",{attrs:{colspan:t.colspan}},[t._v("No results")])]):t._l(t.filteredRows,(function(n,r){return e("tr",{key:"trb_"+r},t._l(n.children,(function(n,i){return e("td",{key:"td_"+r+"_"+i},["children"in n&&0!==n.children.length?e("span",t._l(n.children,(function(n,l){return e(n.nodeName,{key:"a_"+r+"_"+i+"_"+l,tag:"component",class:t.attr("class",n.attributes),attrs:{href:t.attr("href",n.attributes),title:t.attr("title",n.attributes)},domProps:{innerHTML:t._s(t.highlightMatches(n.content))}})})),1):e("span",{key:"span_"+r+"_"+i,domProps:{innerHTML:t._s(t.highlightMatches(n.content))}})])})),0)}))],2):t._e()])]):e("div",{domProps:{innerHTML:t._s(t.processedHtml.outerHTML)}})])};r._withStripped=!0;var i=n(5650),l=n(7493),a=n(7111);var o=n(5626);function s(t){return function(t){if(Array.isArray(t))return(0,a.A)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.A)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(8080),n(3772),n(2956),n(6040),n(3469),n(4334),n(8192),n(3814),n(8474),n(1999),n(1097),n(2099),n(7851),n(8709),n(7734),n(2930),n(5636),n(7202);var c=n(9733),u=n.n(c),h=function(t){return t.replace(/“/gim,"&quot;").replace(/´/gim,"'")};const d={name:"TableFilter",props:{rawHtml:{type:String}},data:function(){return{processedHtml:null,tableJson:null,filter:""}},computed:{tableCaption:function(){return this.findEl("caption",this.tableJson)},tableThead:function(){return this.findEl("thead",this.tableJson)},tableTbody:function(){return this.findEl("tbody",this.tableJson)},filteredRows:function(){var t=this;return""!==this.filter.trim()?this.tableTbody.children.filter((function(e){var n=!1;return e.children.forEach((function(e){e.content.toString().toLowerCase().includes(t.filter.toLocaleLowerCase())&&(n=!0)})),!!n&&e})):this.tableTbody.children},colspan:function(){return this.tableThead.children.length+1},isFilterEmpty:function(){return 0===this.filteredRows.length},preparedHtml:function(){return h(this.rawHtml)}},watch:{filter:function(){this.debouncedAnnouncement()}},created:function(){this.processHtml(),this.debouncedAnnouncement=u()(this.announcement,1e3)},methods:{tableToJson:function(t){var e=this,n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null===t)return!1;var r={nodeName:String(t.nodeName).toLowerCase()};if(r.content=t.textContent.trim(),"attributes"in t&&e.nodeMap2Obj(t.attributes)&&(r.attributes=e.nodeMap2Obj(t.attributes)),null!=t&&t.colspan&&(r.colspan=t.colspan),null!=t&&t.rowspan&&(r.rowspan=t.rowspan),(null==t?void 0:t.children.length)>0){null!=r&&r.children||(r.children=[]);for(var i=0;i<t.children.length;i++){var l=t.children[i];r.children[i]=n(l)}}return r};this.tableJson=n(t)},findEl:function(t,e){var n=!1,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(String(e.nodeName)===String(t)&&(n=e),null!=e&&e.children)for(var i=0;i<e.children.length;i++){if(r(e.children[i]))break}return n};return r(e),n},highlightMatches:function(t){if(""!==this.filter.trim()){var e=t.toLowerCase().includes(this.filter.toLowerCase()),n=new RegExp(this.filter,"ig");return e?t.replace(n,(function(t){return'<b class="filter--highlight">'.concat(t,"</b>")})):t}return t},processHtml:function(){var t=(new DOMParser).parseFromString(this.preparedHtml,"text/html");this.processedHtml=t.activeElement.children[0],this.tableToJson(t.activeElement.firstChild)},nodeMap2Obj:function(t){var e=Object.assign.apply(Object,[{}].concat(s(Array.from(t,(function(t){var e=t.name,n=t.value;return(0,l.A)({},e,n)})))));return 0===Object.keys(e).length?null:e},announcement:function(){var t="Filtered table results, found ".concat(this.filteredRows.length,' results for query "').concat(this.filter,'"');""!==this.filter.trim()&&(console.log(t),this.$announcer.set(t))},attr:function(t,e){return"object"===(0,i.A)(e)&&(t in e&&e[t])}}};const f=(0,n(8598).A)(d,r,[],!1,null,null,null).exports}}]);