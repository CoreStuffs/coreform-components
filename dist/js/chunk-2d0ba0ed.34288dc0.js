(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba0ed"],{"361e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"uk-table uk-table-middle uk-table-divider uk-table-small"},[t._m(0),a("tbody",t._l(t.variables,(function(e){return a("tr",{key:e.name},[a("td",{staticClass:"uk-text-nowrap uk-text-small"},[a("a",{on:{click:function(a){return t.editVariable(e)}}},[t._v(t._s(e.name))])]),a("td",{staticClass:"uk-text-nowrap uk-text-small"},[t._v(" "+t._s(e.type)+" ")]),a("td",{staticClass:"uk-text-nowrap uk-text-small"},[t.isRequired(e)?a("span",{attrs:{"uk-icon":"check"}}):t._e()]),a("td",{staticClass:"uk-text-nowrap uk-text-small"},[a("a",{attrs:{"uk-icon":"icon: pencil"},on:{click:function(a){return t.editVariable(e)}}})])])})),0),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"4"}},[a("button",{staticClass:"uk-button uk-button-default uk-button-small",on:{click:function(e){return t.addVariable()}}},[t._v(" Add ")])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"uk-table-small"},[t._v("Name")]),a("th",[t._v("Type")]),a("th",[t._v("Required")]),a("th",{staticClass:"uk-table-shrink"},[t._v("Actions")])])])}],r=(a("4de4"),{inject:["$openVariableProperties"],data:function(){return{}},methods:{isRequired:function(t){return t.validations.filter((function(t){return"required"===t.type.toLowerCase()&&t.enabled})).length>0},addVariable:function(){this.$openVariableProperties()},editVariable:function(t){this.$openVariableProperties(t,null,(function(){}))},changeRequired:function(t,e){t.srcElement.checked?e.validations.push({type:"required"}):e.validations=e.validations.filter((function(t){return"required"!==t.type.toLowerCase()}))}},props:["variables"]}),l=r,s=a("2877"),u=Object(s["a"])(l,n,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0ba0ed.34288dc0.js.map