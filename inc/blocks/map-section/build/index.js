(()=>{"use strict";var e,r={135:(e,r,t)=>{const n=window.wp.blocks,o=window.wp.i18n,s=window.wp.blockEditor,i=window.wp.components;var a=t(893);const l=JSON.parse('{"u2":"create-block/map-section"}');(0,n.registerBlockType)(l.u2,{edit:function(e){const{attributes:r,setAttributes:t,isSelected:n}=e,{src:l,alignment:c}=r;return(0,a.jsx)("div",{class:"map-section section-padding",children:(0,a.jsx)("div",{class:"container p-0",children:(0,a.jsxs)("div",{class:"map-section__inner",children:[(0,a.jsx)(s.InspectorControls,{children:(0,a.jsx)(i.PanelBody,{title:(0,o.__)("Iframe Settings"),children:(0,a.jsx)(i.TextControl,{label:(0,o.__)("Iframe Source"),value:l,onChange:e=>t({src:e})})})}),n&&(0,a.jsx)(s.BlockControls,{children:(0,a.jsx)(s.AlignmentToolbar,{value:c,onChange:e=>t({alignment:e})})}),(0,a.jsx)("div",{style:{textAlign:c},children:(0,a.jsx)("iframe",{title:"Address map of our company",src:l})})]})})})},save:function(e){const{attributes:r,setAttributes:t,isSelected:n}=e,{src:o,alignment:s}=r;return(0,a.jsx)("div",{class:"map-section section-padding",children:(0,a.jsx)("div",{class:"container p-0",children:(0,a.jsx)("div",{class:"map-section__inner",style:{textAlign:s},children:(0,a.jsx)("iframe",{title:"Address map of our company",src:o})})})})}})},251:(e,r,t)=>{var n=t(196),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,l={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,n)&&!a.hasOwnProperty(n)&&(l[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===l[n]&&(l[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:p,props:l,_owner:i.current}}r.jsx=l,r.jsxs=l},893:(e,r,t)=>{e.exports=t(251)},196:e=>{e.exports=window.React}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var s=t[e]={exports:{}};return r[e](s,s.exports,n),s.exports}n.m=r,e=[],n.O=(r,t,o,s)=>{if(!t){var i=1/0;for(p=0;p<e.length;p++){for(var[t,o,s]=e[p],a=!0,l=0;l<t.length;l++)(!1&s||i>=s)&&Object.keys(n.O).every((e=>n.O[e](t[l])))?t.splice(l--,1):(a=!1,s<i&&(i=s));if(a){e.splice(p--,1);var c=o();void 0!==c&&(r=c)}}return r}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[t,o,s]},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={826:0,431:0};n.O.j=r=>0===e[r];var r=(r,t)=>{var o,s,[i,a,l]=t,c=0;if(i.some((r=>0!==e[r]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var p=l(n)}for(r&&r(t);c<i.length;c++)s=i[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(p)},t=globalThis.webpackChunkmap_section=globalThis.webpackChunkmap_section||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var o=n.O(void 0,[431],(()=>n(135)));o=n.O(o)})();