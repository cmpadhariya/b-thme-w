(()=>{"use strict";var e,t={95:()=>{const e=window.wp.blocks,t=window.React,r=window.wp.i18n,i=window.wp.blockEditor,n=window.wp.components,l=window.wp.data,o=JSON.parse('{"UU":"create-block/why-qrolic-testimonial-v2"}');(0,e.registerBlockType)(o.UU,{edit:function({attributes:e,setAttributes:o}){const{selectedPostId:a}=e,s=(0,l.useSelect)((e=>{try{return e("core").getEntityRecords("postType","testimonial",{per_page:-1,_embed:!0})}catch(e){return console.error("Error fetching testimonials:",e),[]}}),[]);if(!s||0===s.length)return(0,t.createElement)("div",{...(0,i.useBlockProps)()},(0,t.createElement)("p",null,(0,r.__)("No testimonials found or there was an error fetching the testimonials.","why-qrolic-testimonial-v2")));const c=s.map((e=>({label:e.title.rendered,value:e.id.toString(),key:e.id})));return(0,t.createElement)("div",{...(0,i.useBlockProps)()},(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,r.__)("Settings","why-qrolic-testimonial-v2")},(0,t.createElement)(n.RadioControl,{label:(0,r.__)("Select Testimonial","why-qrolic-testimonial-v2"),selected:a?.toString(),options:c,onChange:e=>o({selectedPostId:parseInt(e,10)})}))),a?s.map((e=>{if(e.id===a){const r=e.meta?.client_position||"",i=e.meta?.client_quotes||"",n=e._embedded?.["wp:featuredmedia"]?.[0];return(0,t.createElement)("div",{key:e.id,className:"why-qrolic-testimonials__inner_block"},i&&(0,t.createElement)("p",{className:"client-quotes"},i),(0,t.createElement)("div",{className:"why-qrolic-testimonials__inner_block--content"},n&&(0,t.createElement)("img",{src:n.source_url,alt:n.alt_text||"Testimonial image",className:"testimonial-featured-image"}),(0,t.createElement)("div",{className:"why-qrolic-testimonials__inner_block--content-details"},(0,t.createElement)("h3",null,e.title.rendered),r&&(0,t.createElement)("p",{className:"subtitle"},r))))}return null})):(0,t.createElement)("p",null,(0,r.__)("No testimonial selected","why-qrolic-testimonial-v2")))}})}},r={};function i(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,i),l.exports}i.m=t,e=[],i.O=(t,r,n,l)=>{if(!r){var o=1/0;for(m=0;m<e.length;m++){r=e[m][0],n=e[m][1],l=e[m][2];for(var a=!0,s=0;s<r.length;s++)(!1&l||o>=l)&&Object.keys(i.O).every((e=>i.O[e](r[s])))?r.splice(s--,1):(a=!1,l<o&&(o=l));if(a){e.splice(m--,1);var c=n();void 0!==c&&(t=c)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[r,n,l]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,l,o=r[0],a=r[1],s=r[2],c=0;if(o.some((t=>0!==e[t]))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(s)var m=s(i)}for(t&&t(r);c<o.length;c++)l=o[c],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(m)},r=self.webpackChunkwhy_qrolic_testimonial_v2=self.webpackChunkwhy_qrolic_testimonial_v2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=i.O(void 0,[350],(()=>i(95)));n=i.O(n)})();