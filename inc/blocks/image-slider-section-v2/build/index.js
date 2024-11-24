(()=>{"use strict";var e,i={558:(e,i,s)=>{const r=window.wp.blocks,l=window.wp.i18n,n=window.wp.blockEditor,a=window.wp.components,t=window.wp.element;var d=s(848);const o=JSON.parse('{"UU":"create-block/image-slider-section-v2"}');(0,r.registerBlockType)(o.UU,{edit:e=>{const{attributes:{slides:i},setAttributes:s}=e,r=(0,n.useBlockProps)(),[o,c]=(0,t.useState)(1);return(0,d.jsxs)("div",{className:"images-slider-section",...r,children:[(0,d.jsxs)(n.InspectorControls,{children:[(0,d.jsx)(a.PanelBody,{title:(0,l.__)("Add Image Slide","image-slider-section"),children:(0,d.jsx)(n.MediaUpload,{onSelect:e=>{if(e&&e.url){const r=e.alt||`Slide ${o}`;c(o+1),s({slides:[...i,{src:e.url,alt:r}]})}},render:({open:e})=>(0,d.jsx)(a.Button,{onClick:e,children:(0,l.__)("+ Add Slide Image","image-slider-section")})})}),i.map(((e,r)=>(0,d.jsxs)(a.PanelBody,{title:(0,l.__)("Edit Slide Image","image-slider-section"),children:[(0,d.jsx)("div",{className:"image-preview",children:(0,d.jsx)("img",{src:e.src,alt:e.alt})}),(0,d.jsx)(n.MediaUpload,{onSelect:e=>((e,r)=>{if(e&&e.url){const l=e.alt||`Slide ${r+1}`,n=[...i];n[r]={src:e.url,alt:l},s({slides:n})}})(e,r),render:({open:e})=>(0,d.jsx)(a.Button,{onClick:e,children:(0,l.__)("Change Image","image-slider-section")})}),(0,d.jsx)(a.Button,{onClick:()=>(e=>{const r=[...i];r.splice(e,1),s({slides:r})})(r),children:(0,l.__)("Remove Image","image-slider-section")})]},r)))]}),(0,d.jsx)("div",{className:"images-slider-section__inner",children:(0,d.jsx)("div",{className:"container p-0",children:(0,d.jsx)("div",{className:"splide",id:"image-slider",children:(0,d.jsx)("div",{className:"images-slider-section__inner_content splide__track",children:(0,d.jsx)("div",{className:"splide__list",children:i.map(((e,i)=>(0,d.jsx)("div",{className:"splide__slide ",children:(0,d.jsx)("img",{src:e.src,alt:e.alt,height:"405.05px",width:"1140px",loading:"lazy",className:"images-slider__inner_content--image"})},i)))})})})})})]})},save:({attributes:e})=>{const{slides:i}=e,s=n.useBlockProps.save();return(0,d.jsx)("div",{className:"images-slider",...s,children:(0,d.jsx)("div",{className:"images-slider__inner",children:(0,d.jsx)("div",{className:"container p-0",children:(0,d.jsx)("div",{className:"splide",id:"image-slider",children:(0,d.jsxs)("div",{className:"images-slider__inner_content splide__track",children:[(0,d.jsx)("div",{className:"splide__list",children:i.map(((e,i)=>(0,d.jsx)("div",{className:"splide__slide images-slider__inner_content--image ",children:(0,d.jsx)("img",{src:e.src,alt:e.alt,height:"405.05px",width:"1140px",loading:"lazy"})},i)))}),(0,d.jsx)("div",{className:"splide__pagination images-slider__inner_content--pagination "})]})})})})})}})},20:(e,i,s)=>{var r=s(609),l=Symbol.for("react.element"),n=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function d(e,i,s){var r,d={},o=null,c=null;for(r in void 0!==s&&(o=""+s),void 0!==i.key&&(o=""+i.key),void 0!==i.ref&&(c=i.ref),i)n.call(i,r)&&!t.hasOwnProperty(r)&&(d[r]=i[r]);if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===d[r]&&(d[r]=i[r]);return{$$typeof:l,type:e,key:o,ref:c,props:d,_owner:a.current}}i.jsx=d,i.jsxs=d},848:(e,i,s)=>{e.exports=s(20)},609:e=>{e.exports=window.React}},s={};function r(e){var l=s[e];if(void 0!==l)return l.exports;var n=s[e]={exports:{}};return i[e](n,n.exports,r),n.exports}r.m=i,e=[],r.O=(i,s,l,n)=>{if(!s){var a=1/0;for(c=0;c<e.length;c++){for(var[s,l,n]=e[c],t=!0,d=0;d<s.length;d++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](s[d])))?s.splice(d--,1):(t=!1,n<a&&(a=n));if(t){e.splice(c--,1);var o=l();void 0!==o&&(i=o)}}return i}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[s,l,n]},r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={57:0,350:0};r.O.j=i=>0===e[i];var i=(i,s)=>{var l,n,[a,t,d]=s,o=0;if(a.some((i=>0!==e[i]))){for(l in t)r.o(t,l)&&(r.m[l]=t[l]);if(d)var c=d(r)}for(i&&i(s);o<a.length;o++)n=a[o],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},s=globalThis.webpackChunkimage_slider_section_v2=globalThis.webpackChunkimage_slider_section_v2||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))})();var l=r.O(void 0,[350],(()=>r(558)));l=r.O(l)})();