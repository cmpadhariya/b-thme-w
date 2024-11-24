(()=>{"use strict";var e,t={521:(e,t,n)=>{const i=window.wp.blocks,r=(window.wp.i18n,window.wp.blockEditor);var a=n(893);const{PanelBody:l,SelectControl:s,TextControl:o,Button:c}=wp.components,d=JSON.parse('{"u2":"create-block/zigzag-section"}');(0,i.registerBlockType)(d.u2,{edit:function({attributes:e,setAttributes:t}){const{image:n,altText:i,content:d,description:u,alignment:g,textButton:h,button_url:p,mediaID:x,mediaURL:v}=e,m=(0,r.useBlockProps)(),f=()=>{t({mediaID:null,mediaURL:null,altText:null})};return(0,a.jsx)("section",{...(0,r.useBlockProps)(),children:(0,a.jsx)("div",{class:"zigzag",children:(0,a.jsx)("div",{class:"container p-0",children:(0,a.jsxs)("div",{class:"zigzag__inner",children:[(0,a.jsxs)(r.InspectorControls,{children:[(0,a.jsx)(l,{title:"Image Alignment",children:(0,a.jsx)(s,{label:"Alignment",value:g,options:[{label:"Left",value:"left"},{label:"Right",value:"right"}],onChange:e=>{t({alignment:e})}})}),(0,a.jsx)(l,{title:"All Button Link Settings",children:(0,a.jsx)(o,{format:"string",label:"Add Button Link",onChange:function(e){t({button_url:e})},value:p})})]},"styles"),(0,a.jsx)("div",{className:`zigzag__inner_image align${g}`,children:(0,a.jsx)(r.MediaUploadCheck,{children:(0,a.jsx)(r.MediaUpload,{onSelect:e=>{t({mediaID:e.id,mediaURL:e.url,altText:e.alt})},allowedTypes:["image"],value:x,render:({open:t})=>(0,a.jsxs)("div",{children:[!x&&(0,a.jsx)(c,{onClick:t,isDefault:!0,children:"Select Media"}),x&&(0,a.jsxs)("div",{children:[e.mediaURL?(0,a.jsx)("img",{src:e.mediaURL,alt:e.altText,width:"559",height:"373"}):"Upload Image",(0,a.jsx)(c,{onClick:f,isLink:!0,isDestructive:!0,children:"Remove"})]})]})})})}),(0,a.jsxs)("div",{className:"zigzag__inner_text",children:[(0,a.jsx)(r.RichText,{tagName:"h2",onChange:e=>{t({content:e})},placeholder:"title",value:d}),(0,a.jsx)(r.RichText,{...m,tagName:"p",onChange:e=>{t({description:e})},placeholder:"Short description",className:"description-primary",value:u}),(0,a.jsx)(r.RichText,{tagName:"a",target:"_self",rel:"noreferrer noopener",value:h,onChange:e=>{t({textButton:e})}})]})]})})})})},save:function({attributes:e}){const{content:t,description:n,mediaURL:i,altText:l,alignment:s,textButton:o,button_url:c}=e,d=r.useBlockProps.save();return(0,a.jsx)("section",{...r.useBlockProps.save(),children:(0,a.jsx)("div",{class:"zigzag",children:(0,a.jsx)("div",{class:"container p-0",children:(0,a.jsxs)("div",{class:"zigzag__inner",children:[(0,a.jsx)("div",{className:`zigzag__inner_image align${s}`,children:i?(0,a.jsx)("img",{src:i,alt:e.altText,width:"559",height:"373"}):""}),(0,a.jsxs)("div",{className:"zigzag__inner_text",children:[(0,a.jsx)(r.RichText.Content,{tagName:"h2",value:t}),(0,a.jsx)(r.RichText.Content,{...d,tagName:"p",className:"description-primary",value:n}),(0,a.jsx)("a",{href:c,...d.save,className:"wpt-button",target:"_self",rel:"noreferrer noopener",children:o})]})]})})})})}})},251:(e,t,n)=>{var i=n(196),r=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var i,o={},c=null,d=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!s.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===o[i]&&(o[i]=t[i]);return{$$typeof:r,type:e,key:c,ref:d,props:o,_owner:l.current}}t.jsx=o,t.jsxs=o},893:(e,t,n)=>{e.exports=n(251)},196:e=>{e.exports=window.React}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,n,r,a)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,r,a]=e[d],s=!0,o=0;o<n.length;o++)(!1&a||l>=a)&&Object.keys(i.O).every((e=>i.O[e](n[o])))?n.splice(o--,1):(s=!1,a<l&&(l=a));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[l,s,o]=n,c=0;if(l.some((t=>0!==e[t]))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(o)var d=o(i)}for(t&&t(n);c<l.length;c++)a=l[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},n=globalThis.webpackChunkzigzag_section=globalThis.webpackChunkzigzag_section||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[431],(()=>i(521)));r=i.O(r)})();