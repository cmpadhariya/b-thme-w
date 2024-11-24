(()=>{"use strict";var e,s={259:(e,s,r)=>{const i=window.wp.blocks,l=window.wp.i18n,a=window.wp.blockEditor,o=window.wp.components,n=window.wp.element;var d=r(893);const c=JSON.parse('{"u2":"create-block/images-slider"}');(0,i.registerBlockType)(c.u2,{edit:e=>{const{attributes:{slides:s},setAttributes:r}=e,[i,c]=((0,a.useBlockProps)(),(0,n.useState)(1));return(0,d.jsxs)("div",{className:"images-slider",...(0,a.useBlockProps)(),children:[(0,d.jsx)(a.InspectorControls,{children:(0,d.jsx)(o.PanelBody,{title:(0,l.__)("Add Image Slide","image-slider-block"),children:(0,d.jsx)(a.MediaUpload,{onSelect:e=>{if(e&&e.url){const l=e.alt||`Slide ${i}`;c(i+1),r({slides:[...s,{src:e.url,alt:l}]})}},render:({open:e})=>(0,d.jsx)(o.Button,{onClick:e,children:(0,l.__)("+ Add Slide Image","image-slider-block")})})})}),(0,d.jsx)("div",{className:"images-slider__inner",children:(0,d.jsx)("div",{className:"container p-0",children:(0,d.jsx)("div",{className:"splide",id:"image-slider",children:(0,d.jsx)("div",{className:"images-slider__inner_content splide__track",children:(0,d.jsx)("div",{className:"splide__list",children:s.map(((e,i)=>(0,d.jsxs)("div",{className:"splide__slide col-lg-10 col-md-10 col-12",children:[(0,d.jsx)("img",{src:e.src,alt:e.alt}),(0,d.jsx)(o.Button,{onClick:()=>(e=>{const i=[...s];i.splice(e,1),r({slides:i})})(i),children:(0,l.__)("Remove Image","image-slider-block")})]},i)))})})})})})]})},save:({attributes:e})=>{const{slides:s}=e;return a.useBlockProps.save(),(0,d.jsx)("div",{className:"images-slider",...a.useBlockProps.save(),children:(0,d.jsx)("div",{className:"images-slider__inner",children:(0,d.jsx)("div",{className:"container p-0",children:(0,d.jsx)("div",{className:"splide",id:"image-slider",children:(0,d.jsx)("div",{className:"images-slider__inner_content splide__track",children:(0,d.jsx)("div",{className:"splide__list",children:s.map(((e,s)=>(0,d.jsx)("div",{className:"splide__slide col-lg-10 col-md-10 col-12",children:(0,d.jsx)("img",{src:e.src,alt:e.alt})},s)))})})})})})})}})},251:(e,s,r)=>{var i=r(196),l=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,r){var i,d={},c=null,t=null;for(i in void 0!==r&&(c=""+r),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(t=s.ref),s)a.call(s,i)&&!n.hasOwnProperty(i)&&(d[i]=s[i]);if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===d[i]&&(d[i]=s[i]);return{$$typeof:l,type:e,key:c,ref:t,props:d,_owner:o.current}}s.jsx=d,s.jsxs=d},893:(e,s,r)=>{e.exports=r(251)},196:e=>{e.exports=window.React}},r={};function i(e){var l=r[e];if(void 0!==l)return l.exports;var a=r[e]={exports:{}};return s[e](a,a.exports,i),a.exports}i.m=s,e=[],i.O=(s,r,l,a)=>{if(!r){var o=1/0;for(t=0;t<e.length;t++){for(var[r,l,a]=e[t],n=!0,d=0;d<r.length;d++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](r[d])))?r.splice(d--,1):(n=!1,a<o&&(o=a));if(n){e.splice(t--,1);var c=l();void 0!==c&&(s=c)}}return s}a=a||0;for(var t=e.length;t>0&&e[t-1][2]>a;t--)e[t]=e[t-1];e[t]=[r,l,a]},i.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={826:0,431:0};i.O.j=s=>0===e[s];var s=(s,r)=>{var l,a,[o,n,d]=r,c=0;if(o.some((s=>0!==e[s]))){for(l in n)i.o(n,l)&&(i.m[l]=n[l]);if(d)var t=d(i)}for(s&&s(r);c<o.length;c++)a=o[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(t)},r=globalThis.webpackChunkimages_slider=globalThis.webpackChunkimages_slider||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))})();var l=i.O(void 0,[431],(()=>i(259)));l=i.O(l)})();