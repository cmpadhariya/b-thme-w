(()=>{"use strict";var e,n={135:(e,n,a)=>{const s=window.wp.blocks,t=(window.wp.i18n,window.wp.blockEditor),i=window.wp.components;var l=a(893);const o=JSON.parse('{"u2":"create-block/follow-us"}');(0,s.registerBlockType)(o.u2,{edit:function(e){const{attributes:n,setAttributes:a}=e,{heading:s,subheading:o,facebook:r,twitter:c,instagram:h,linkedin:d,whatsapp:x,facebooktext:p,twittertext:u,instagramtext:j,linkedintext:f,whatsapptext:g}=n;return(0,l.jsx)("section",{...(0,t.useBlockProps)(),children:(0,l.jsx)("div",{className:"follow-us section-padding",children:(0,l.jsx)("div",{className:"container p-0",children:(0,l.jsxs)("div",{className:"follow-us__inner",children:[(0,l.jsxs)("div",{className:"follow-us__inner_heading",children:[(0,l.jsx)(t.RichText,{tagName:"h2",onChange:e=>{a({heading:e})},placeholder:"Title",value:s}),(0,l.jsx)(t.RichText,{tagName:"p",onChange:e=>{a({subheading:e})},placeholder:"Sub Heading",value:o})]}),(0,l.jsx)("div",{className:"follow-us__inner_social-icon",children:(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)(t.InspectorControls,{children:(0,l.jsx)(i.TextControl,{label:"Add linkedin icon Link",onChange:e=>{a({linkedin:e})},value:d})}),(0,l.jsx)("a",{href:d,className:"icon-linkedin",children:(0,l.jsx)(t.RichText,{tagName:"span",onChange:e=>{a({linkedintext:e})},placeholder:"Linkedin",value:f})})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(t.InspectorControls,{children:(0,l.jsx)(i.TextControl,{label:"Add twitter icon Link",onChange:e=>{a({twitter:e})},value:c})}),(0,l.jsx)("a",{href:c,className:"icon-twitter",children:(0,l.jsx)(t.RichText,{tagName:"span",onChange:e=>{a({twittertext:e})},placeholder:"Twitter",value:u})})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(t.InspectorControls,{children:(0,l.jsx)(i.TextControl,{label:"Add facebook icon Link",onChange:e=>{a({facebook:e})},value:r})}),(0,l.jsx)("a",{href:r,className:"icon-facebook",children:(0,l.jsx)(t.RichText,{tagName:"span",onChange:e=>{a({facebooktext:e})},placeholder:"Facebook",value:p})})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(t.InspectorControls,{children:(0,l.jsx)(i.TextControl,{label:"Add instagram icon Link",onChange:e=>{a({instagram:e})},value:h})}),(0,l.jsx)("a",{href:h,className:"icon-instagram",children:(0,l.jsx)(t.RichText,{tagName:"span",onChange:e=>{a({instagramtext:e})},placeholder:"Instagram",value:j})})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)(t.InspectorControls,{children:(0,l.jsx)(i.TextControl,{label:"Add Whatsapp icon Link",onChange:e=>{a({whatsapp:e})},value:x})}),(0,l.jsx)("a",{href:x,className:"icon-whatsapp",children:(0,l.jsx)(t.RichText,{tagName:"span",onChange:e=>{a({whatsapptext:e})},placeholder:"Whatsapp",value:g})})]})]})})]})})})})},save:function(e){const{attributes:n,setAttributes:a}=e,{heading:s,subheading:i,facebook:o,twitter:r,instagram:c,linkedin:h,whatsapp:d,facebooktext:x,twittertext:p,instagramtext:u,linkedintext:j,whatsapptext:f}=n;return(0,l.jsx)("section",{...t.useBlockProps.save(),children:(0,l.jsx)("div",{className:"follow-us section-padding",children:(0,l.jsx)("div",{className:"container p-0",children:(0,l.jsxs)("div",{className:"follow-us__inner",children:[(0,l.jsxs)("div",{className:"follow-us__inner_heading",children:[(0,l.jsx)(t.RichText.Content,{tagName:"h2",value:s}),(0,l.jsx)(t.RichText.Content,{tagName:"p",value:i})]}),(0,l.jsx)("div",{className:"follow-us__inner_social-icon",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:h,className:"icon-linkedin",children:(0,l.jsx)(t.RichText.Content,{tagName:"span",value:j})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:r,className:"icon-twitter",children:(0,l.jsx)(t.RichText.Content,{tagName:"span",value:p})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:o,className:"icon-facebook",children:(0,l.jsx)(t.RichText.Content,{tagName:"span",value:x})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:c,className:"icon-instagram",children:(0,l.jsx)(t.RichText.Content,{tagName:"span",value:u})})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:d,className:"icon-whatsapp",children:(0,l.jsx)(t.RichText.Content,{tagName:"span",value:f})})})]})})]})})})})}})},251:(e,n,a)=>{var s=a(196),t=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function r(e,n,a){var s,r={},c=null,h=null;for(s in void 0!==a&&(c=""+a),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(h=n.ref),n)i.call(n,s)&&!o.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:h,props:r,_owner:l.current}}n.jsx=r,n.jsxs=r},893:(e,n,a)=>{e.exports=a(251)},196:e=>{e.exports=window.React}},a={};function s(e){var t=a[e];if(void 0!==t)return t.exports;var i=a[e]={exports:{}};return n[e](i,i.exports,s),i.exports}s.m=n,e=[],s.O=(n,a,t,i)=>{if(!a){var l=1/0;for(h=0;h<e.length;h++){for(var[a,t,i]=e[h],o=!0,r=0;r<a.length;r++)(!1&i||l>=i)&&Object.keys(s.O).every((e=>s.O[e](a[r])))?a.splice(r--,1):(o=!1,i<l&&(l=i));if(o){e.splice(h--,1);var c=t();void 0!==c&&(n=c)}}return n}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[a,t,i]},s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={826:0,431:0};s.O.j=n=>0===e[n];var n=(n,a)=>{var t,i,[l,o,r]=a,c=0;if(l.some((n=>0!==e[n]))){for(t in o)s.o(o,t)&&(s.m[t]=o[t]);if(r)var h=r(s)}for(n&&n(a);c<l.length;c++)i=l[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(h)},a=globalThis.webpackChunkfollow_us=globalThis.webpackChunkfollow_us||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))})();var t=s.O(void 0,[431],(()=>s(135)));t=s.O(t)})();