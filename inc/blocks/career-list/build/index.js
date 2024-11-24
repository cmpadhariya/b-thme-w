(()=>{"use strict";var e,r={500:(e,r,t)=>{const o=window.wp.blocks,a=window.wp.i18n,n=window.wp.blockEditor,s=(window.wp.components,window.wp.data),i=window.wp.element;window.wp.date;var l=t(893);const c=JSON.parse('{"u2":"create-block/career-list"}');(0,o.registerBlockType)(c.u2,{edit:function(e){const{attributes:{numberOfItems:r},setAttributes:t}=e,o=e=>{t({location:e})},c=e=>{t({category:e})},d=e=>{t({buttonText:e})},{authorDetails:p,posts:u}=(0,s.useSelect)((e=>{const t=e("core/editor").getCurrentPostAttribute("author");return{authorDetails:t?e("core").getUser(t):null,posts:e("core").getEntityRecords("postType","careers",{author:t,per_page:r,_embed:!0})}}),[r]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"career-list ",children:(0,l.jsx)("div",{className:"container p-0",children:(0,l.jsx)("div",{className:"career-list__inner",children:(0,l.jsx)("div",{className:"row",children:u&&u.map((r=>(0,l.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12",children:(0,l.jsxs)("div",{class:"career-list__inner_content",children:[(0,l.jsx)("h3",{children:r.title.rendered?(0,l.jsx)(i.RawHTML,{children:r.title.rendered}):(0,a.__)("Default title","author-plugin")}),(0,l.jsx)(n.RichText,{tagName:"p",value:e.attributes.location,onChange:o,placeholder:(0,a.__)("Enter post location ...")}),(0,l.jsx)(n.RichText,{tagName:"span",value:e.attributes.category,onChange:c,placeholder:(0,a.__)("Add category manual ...")}),(0,l.jsx)("h5",{className:"wp-block-author-box-author-plugin__post-title",children:(0,l.jsx)("a",{href:r.link,className:"button-view-post-service",children:(0,l.jsx)(n.RichText,{value:e.attributes.buttonText,onChange:d,placeholder:(0,a.__)("Button Text ...")})})})]})},r.id)))})})})})})}})},251:(e,r,t)=>{var o=t(196),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var o,n={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)s.call(r,o)&&!l.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===n[o]&&(n[o]=r[o]);return{$$typeof:a,type:e,key:c,ref:d,props:n,_owner:i.current}}r.Fragment=n,r.jsx=c,r.jsxs=c},893:(e,r,t)=>{e.exports=t(251)},196:e=>{e.exports=window.React}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var n=t[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(r,t,a,n)=>{if(!t){var s=1/0;for(d=0;d<e.length;d++){for(var[t,a,n]=e[d],i=!0,l=0;l<t.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(d--,1);var c=a();void 0!==c&&(r=c)}}return r}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,a,n]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={826:0,431:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[s,i,l]=t,c=0;if(s.some((r=>0!==e[r]))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var d=l(o)}for(r&&r(t);c<s.length;c++)n=s[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},t=globalThis.webpackChunkcareer_list=globalThis.webpackChunkcareer_list||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=o.O(void 0,[431],(()=>o(500)));a=o.O(a)})();