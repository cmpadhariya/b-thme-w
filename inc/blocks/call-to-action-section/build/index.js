(()=>{"use strict";var e,t={259:(e,t,n)=>{const a=window.wp.blocks,o=window.wp.i18n,r=window.wp.components,l=window.wp.blockEditor;window.wp.element;var i=n(893);const c=JSON.parse('{"u2":"create-block/call-to-action-section"}');(0,a.registerBlockType)(c.u2,{edit:function(e){const{attributes:t,setAttributes:n}=e,{Heading:a,content:c,buttonText:s,buttonURL:d}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.InspectorControls,{children:(0,i.jsx)(r.PanelBody,{title:(0,o.__)("Settings","qrolic"),children:(0,i.jsx)(r.TextControl,{label:(0,o.__)("Button URL"),value:d,onChange:e=>n({buttonURL:e})})})}),(0,i.jsx)("section",{id:"call-to-action",...(0,l.useBlockProps)(),children:(0,i.jsx)("div",{className:"call-to-action section-padding",children:(0,i.jsx)("div",{className:"container p-0",children:(0,i.jsx)("div",{className:"call-to-action__inner",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("div",{className:"call-to-action__inner_heading",children:(0,i.jsx)(l.RichText,{tagName:"h2",value:a,onChange:e=>{n({Heading:e})},placeholder:(0,o.__)("Enter call-to-action heading text...","qrolic")})}),(0,i.jsx)("div",{className:"call-to-action__inner_text",children:(0,i.jsx)(l.RichText,{tagName:"p",value:c,className:"description-primary",onChange:e=>{n({content:e})},placeholder:(0,o.__)("Enter call-to-action text...","qrolic")})}),(0,i.jsx)("div",{className:"call-to-action__inner_button",children:(0,i.jsx)("div",{children:(0,i.jsx)(l.RichText,{tagName:"a",target:"_self",rel:"noopener noreferrer",className:"button-general",placeholder:(0,o.__)("Button Text"),value:s,onChange:e=>n({buttonText:e})})})})]})})})})})})]})},save:function(e){const{Heading:t,content:n,buttonText:a,buttonURL:o}=e.attributes;return(0,i.jsx)("section",{id:"call-to-action",...l.useBlockProps.save(),children:(0,i.jsx)("div",{className:"call-to-action section-padding",children:(0,i.jsx)("div",{className:"container p-0",children:(0,i.jsx)("div",{className:"call-to-action__inner",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col",children:[(0,i.jsx)("div",{className:"call-to-action__inner_heading",children:(0,i.jsx)(l.RichText.Content,{tagName:"h2",value:t})}),(0,i.jsx)("div",{className:"call-to-action__inner_text",children:(0,i.jsx)(l.RichText.Content,{tagName:"p",value:n,className:"description-primary"})}),(0,i.jsx)("div",{className:"call-to-action__inner_button",children:(0,i.jsx)("a",{href:o,target:"_self",rel:"noopener noreferrer",className:"button-general",children:(0,i.jsx)(l.RichText.Content,{tagName:"span",className:"button-text",value:a})})})]})})})})})})}})},251:(e,t,n)=>{var a=n(196),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var a,r={},s=null,d=null;for(a in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,a)&&!c.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===r[a]&&(r[a]=t[a]);return{$$typeof:o,type:e,key:s,ref:d,props:r,_owner:i.current}}t.Fragment=r,t.jsx=s,t.jsxs=s},893:(e,t,n)=>{e.exports=n(251)},196:e=>{e.exports=window.React}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,o,r)=>{if(!n){var l=1/0;for(d=0;d<e.length;d++){for(var[n,o,r]=e[d],i=!0,c=0;c<n.length;c++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](n[c])))?n.splice(c--,1):(i=!1,r<l&&(l=r));if(i){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[l,i,c]=n,s=0;if(l.some((t=>0!==e[t]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var d=c(a)}for(t&&t(n);s<l.length;s++)r=l[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=globalThis.webpackChunkcall_to_action_section=globalThis.webpackChunkcall_to_action_section||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=a.O(void 0,[431],(()=>a(259)));o=a.O(o)})();