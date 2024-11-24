(()=>{"use strict";var e,t={953:()=>{const e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,a=window.wp.blockEditor,{TextControl:i,Button:l,PanelBody:r,PanelRow:c}=(window.React,wp.components),{createElement:s}=wp.element,o=JSON.parse('{"u2":"create-block/services-headings"}');(0,e.registerBlockType)(o.u2,{edit:function(e){const{attributes:{items:s,heading:o,subheading:d,description:m,descriptiontext:u,descriptionlink:p,relatedservice:v},setAttributes:h}=e,g=(0,a.useBlockProps)();return(0,t.createElement)("div",{className:"services-headings section-padding"},(0,t.createElement)("div",{className:"services-headings__inner"},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"row justify-content-center"},(0,t.createElement)("div",{className:"col-lg-9 col-md-10 col-12"},(0,t.createElement)(a.RichText,{...g,tagName:"h1",onChange:e=>{h({heading:e})},placeholder:"heading",value:o}),(0,t.createElement)(a.RichText,{...g,tagName:"p",className:"description-primary",onChange:e=>{h({subheading:e})},placeholder:"sub heading",value:d}),(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(r,{title:(0,n.__)("Services Headings Info")},(0,t.createElement)(c,null,(0,t.createElement)("label",null,"Add Service:"),(0,t.createElement)(l,{onClick:()=>{const e={id:(new Date).getTime(),text:"",link:""};h({items:[...s,e]})}},(0,n.__)("+","rich-text-list-save-block"))),(0,t.createElement)(i,{label:"Add Service Link",onChange:e=>{h({descriptionlink:e})},value:p}))),(0,t.createElement)("ul",null,(0,t.createElement)("li",null,(0,t.createElement)(a.RichText,{...g,onChange:e=>{h({description:e})},placeholder:"Description",className:"description-secondary",value:m}),(0,t.createElement)("a",{href:"#"},(0,t.createElement)(a.RichText,{...g,onChange:e=>{h({descriptiontext:e})},placeholder:"Description Text",value:u}))),(0,t.createElement)("li",null,(0,t.createElement)(a.RichText,{...g,onChange:e=>{h({relatedservice:e})},placeholder:"Description",value:v}),(0,t.createElement)("ul",{className:"sub-menu"},s.map((e=>(0,t.createElement)("li",{key:e.id},(0,t.createElement)(a.RichText,{tagName:"a",placeholder:(0,n.__)("Enter text","rich-text-list-save-block"),value:e.text,onChange:t=>((e,t)=>{const n=s.map((n=>n.id===e?{...n,text:t}:n));h({items:n})})(e.id,t)}),(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)("label",null,"Related Service Link"),(0,t.createElement)(a.URLInput,{value:e.link,onChange:t=>((e,t)=>{const n=s.map((n=>n.id===e?{...n,link:t}:n));h({items:n})})(e.id,t)})),(0,t.createElement)(l,{onClick:()=>(e=>{const t=s.filter((t=>t.id!==e));h({items:t})})(e.id)},(0,n.__)("Remove","rich-text-list-save-block")))))))))))))},save:function(e){const{attributes:{items:t},setAttributes:n}=e,i=a.useBlockProps.save();return s("div",{className:"services-headings section-padding"},s("div",{className:"services-headings__inner"},s("div",{className:"container p-0"},s("div",{className:"row justify-content-center"},s("div",{className:"col-lg-9 col-md-10 col-12"},s(a.RichText.Content,{...i,tagName:"h1",value:e.attributes.heading}),s(a.RichText.Content,{...i,tagName:"p",value:e.attributes.subheading}),s("ul",null,s("li",null,s(a.RichText.Content,{...i,tagName:"p",value:e.attributes.description}),s("a",{href:e.attributes.descriptionlink},s(a.RichText.Content,{...i,value:e.attributes.descriptiontext}))),s("li",null,s(a.RichText.Content,{...i,tagName:"p",value:e.attributes.relatedservice}),s("ul",{className:"sub-menu"},t.map((e=>s("li",{key:e.id},e.link&&s("a",{href:e.link},e.text))))))))))))}})}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,a),l.exports}a.m=t,e=[],a.O=(t,n,i,l)=>{if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],l=e[d][2];for(var c=!0,s=0;s<n.length;s++)(!1&l||r>=l)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(c=!1,l<r&&(r=l));if(c){e.splice(d--,1);var o=i();void 0!==o&&(t=o)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,i,l]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var i,l,r=n[0],c=n[1],s=n[2],o=0;if(r.some((t=>0!==e[t]))){for(i in c)a.o(c,i)&&(a.m[i]=c[i]);if(s)var d=s(a)}for(t&&t(n);o<r.length;o++)l=r[o],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(d)},n=self.webpackChunkservices_headings=self.webpackChunkservices_headings||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=a.O(void 0,[431],(()=>a(953)));i=a.O(i)})();