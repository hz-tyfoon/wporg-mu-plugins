!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};!function(e,t,n){var r=window.wp.blocks,o=window.wp.element,l=window.wp.i18n,i=window.wp.blockEditor,a=window.wp.components,u=window.wp.serverSideRender,c=n.n(u),s=JSON.parse('{"u2":"wporg/latest-news"}');(0,r.registerBlockType)(s.u2,{edit:function(e){let{attributes:t,setAttributes:n,name:r}=e;const{perPage:u}=t;return(0,o.createElement)("div",(0,i.useBlockProps)(),(0,o.createElement)(i.InspectorControls,null,(0,o.createElement)(a.PanelBody,{title:(0,l.__)("Settings","wporg")},(0,o.createElement)(a.__experimentalNumberControl,{label:(0,l.__)("Items To Show","wporg"),onChange:e=>n({perPage:1*e}),value:u}))),(0,o.createElement)(a.Disabled,null,(0,o.createElement)(c(),{block:r,attributes:t})))},save:()=>null})}(0,0,e)}();