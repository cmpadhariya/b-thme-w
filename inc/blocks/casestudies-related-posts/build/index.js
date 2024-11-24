(()=>{"use strict";var e,t={445:(e,t,r)=>{const s=window.wp.blocks,a=window.wp.i18n,o=(window.lodash,window.wp.blockEditor),l=window.wp.components,n=window.wp.data,i=window.wp.element,d=window.wp.date;var c=r(893);const p=JSON.parse('{"u2":"create-block/casestudies-related-posts"}');(0,s.registerBlockType)(p.u2,{edit:function({attributes:e,setAttributes:t}){const{numberOfItems:r,columns:s,displayExcerpt:p,displayDate:u,displayThumbnail:h,readMore:m,Title:_}=e,{authorDetails:x,posts:w}=(0,n.useSelect)((e=>{const t=e("core/editor").getCurrentPostAttribute("author");return{authorDetails:t?e("core").getUser(t):null,posts:e("core").getEntityRecords("postType","case-studies",{author:t,per_page:r,_embed:!0})}}),[r]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.InspectorControls,{children:(0,c.jsxs)(l.PanelBody,{title:(0,a.__)("Content Settings","author-plugin"),children:[(0,c.jsx)(l.PanelRow,{children:(0,c.jsx)(l.QueryControls,{numberOfItems:r,onNumberOfItemsChange:e=>t({numberOfItems:e}),minItems:1,maxItems:10})}),(0,c.jsx)(l.PanelRow,{children:(0,c.jsx)(l.RangeControl,{label:(0,a.__)("Number of Columns","author-plugin"),value:s,onChange:e=>t({columns:e}),min:1,max:4,required:!0})}),(0,c.jsx)(l.PanelRow,{children:(0,c.jsx)(l.ToggleControl,{label:(0,a.__)("Show Featured Image","author-plugin"),checked:h,onChange:()=>t({displayThumbnail:!h})})}),(0,c.jsx)(l.PanelRow,{children:(0,c.jsx)(l.ToggleControl,{label:(0,a.__)("Show Date","author-plugin"),checked:u,onChange:()=>t({displayDate:!u})})}),(0,c.jsx)(l.PanelRow,{children:(0,c.jsx)(l.ToggleControl,{label:(0,a.__)("Display Excerpt","author-plugin"),checked:p,onChange:()=>t({displayExcerpt:!p})})})]})}),(0,c.jsx)("div",{...(0,o.useBlockProps)(),className:"casestudies-related-posts section-padding",children:(0,c.jsxs)("div",{className:"container p-0",children:[(0,c.jsx)(o.RichText,{tagName:"h2",value:_,onChange:e=>{t({Title:e})},placeholder:(0,a.__)("Enter title...","qrolic")}),(0,c.jsx)("div",{className:"row",children:w&&w.map((e=>(0,c.jsx)("div",{className:"col-lg-6 col-md-6 col-12",children:(0,c.jsxs)("div",{class:"casestudies-related-posts__inner",children:[(0,c.jsx)("a",{href:e.link,children:h&&e._embedded&&e._embedded["wp:featuredmedia"]&&e._embedded["wp:featuredmedia"][0]&&(0,c.jsx)("img",{className:"wp-block-author-box-author-plugin__post-thumbnail",src:e._embedded["wp:featuredmedia"][0].source_url,alt:e._embedded["wp:featuredmedia"][0].alt_text})}),(0,c.jsxs)("div",{class:"description",children:[(0,c.jsx)("h4",{className:"wp-block-author-box-author-plugin__post-title",children:(0,c.jsx)("a",{href:e.link,children:e.title.rendered?(0,c.jsx)(i.RawHTML,{children:e.title.rendered}):(0,a.__)("Default title","author-plugin")})}),u&&(0,c.jsx)("time",{className:"wp-block-author-box-author-plugin__post-date",dateTime:(0,d.format)("c",e.date_gmt),children:(0,d.dateI18n)((0,d.__experimentalGetSettings)().formats.date,e.date_gmt)}),p&&e.excerpt?.rendered&&(0,c.jsx)("div",{className:"wp-block-author-box-author-plugin__post-excerpt",children:(0,c.jsx)(i.RawHTML,{children:e.excerpt.rendered})}),(0,c.jsx)("a",{href:e.link,className:"readmore",children:"Keep Reading"})]})]})},e.id)))})]})})]})}})},251:(e,t,r)=>{var s=r(196),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,n=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var s,o={},d=null,c=null;for(s in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)l.call(t,s)&&!i.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:a,type:e,key:d,ref:c,props:o,_owner:n.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},893:(e,t,r)=>{e.exports=r(251)},196:e=>{e.exports=window.React}},r={};function s(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,s),o.exports}s.m=t,e=[],s.O=(t,r,a,o)=>{if(!r){var l=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],n=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(s.O).every((e=>s.O[e](r[i])))?r.splice(i--,1):(n=!1,o<l&&(l=o));if(n){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,n,i]=r,d=0;if(l.some((t=>0!==e[t]))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(i)var c=i(s)}for(t&&t(r);d<l.length;d++)o=l[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},r=globalThis.webpackChunkcasestudies_related_posts=globalThis.webpackChunkcasestudies_related_posts||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=s.O(void 0,[431],(()=>s(445)));a=s.O(a)})();