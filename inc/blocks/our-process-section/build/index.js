(()=>{"use strict";var e,t={758:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.i18n,c=window.wp.blockEditor,{Button:a,PanelBody:l,RadioControl:s}=wp.components,r=JSON.parse('{"UU":"create-block/our-process-section"}');(0,e.registerBlockType)(r.UU,{edit:function(e){const{attributes:r,setAttributes:o}=e,{items:i,sectiontitle:m,sectiontitlealignment:d}=r,p=((0,c.useBlockProps)(),(e,t,n)=>{const c=[...i];c[e][t]=n,o({items:c})});return(0,t.createElement)("section",{...(0,c.useBlockProps)()},(0,t.createElement)("div",{className:"process"},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"process__heading "+("center"===d?"text-center":"")},(0,t.createElement)(c.RichText,{tagName:"h2",onChange:e=>{o({sectiontitle:e})},placeholder:"title",value:m})),(0,t.createElement)("div",{className:"process__inner"},(0,t.createElement)("div",{className:"row"},i.map(((e,l)=>(0,t.createElement)("div",{className:"col-lg-3 col-md-6 col-sm-6 col-12"},(0,t.createElement)("div",{className:"process__box"},(0,t.createElement)("div",{className:"block"},(0,t.createElement)(c.RichText,{tagName:"h2",placeholder:"00",value:e.number,onChange:e=>p(l,"number",e)})),(0,t.createElement)("div",{className:"content"},(0,t.createElement)(c.RichText,{tagName:"h3",placeholder:"Heading",value:e.heading,onChange:e=>p(l,"heading",e)}),(0,t.createElement)(c.RichText,{tagName:"p",placeholder:"Description",value:e.description,onChange:e=>p(l,"description",e)}))),(0,t.createElement)(a,{onClick:()=>(e=>{const t=[...i];t.splice(e,1),o({items:t})})(l)},(0,n.__)("- Remove Box","rich-text-list-save-block"))))),(0,t.createElement)(c.InspectorControls,{key:"styles"},(0,t.createElement)(l,{title:"Process Settings"},(0,t.createElement)(s,{label:(0,n.__)("Section Title Alignment","qrolic"),selected:d,options:[{label:"Left",value:"left"},{label:"Center",value:"center"}],onChange:e=>o({sectiontitlealignment:e})}),(0,t.createElement)(a,{onClick:()=>{const e=[...i,{number:"",heading:"",description:""}];o({items:e})}},(0,n.__)("+ Add Our Process","custom-gutenberg-block")))))))))},save:function(e){const{items:n,sectiontitle:a,sectiontitlealignment:l}=e.attributes;return c.useBlockProps.save(),(0,t.createElement)("section",{...c.useBlockProps.save()},(0,t.createElement)("div",{className:"process"},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"process__heading "+("center"===l?"text-center":"")},(0,t.createElement)(c.RichText.Content,{tagName:"h2",value:a})),(0,t.createElement)("div",{className:"process__inner"},(0,t.createElement)("div",{className:"row"},n.map(((e,n)=>(0,t.createElement)("div",{className:"col-lg-3 col-md-6 col-sm-6 col-12",id:n},(0,t.createElement)("div",{className:"process__box"},(0,t.createElement)("div",{className:"block"},(0,t.createElement)("h2",null,e.number)),(0,t.createElement)("div",{className:"content"},(0,t.createElement)("h3",null,e.heading),(0,t.createElement)("p",null,e.description)))))))))))}})}},n={};function c(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,c),l.exports}c.m=t,e=[],c.O=(t,n,a,l)=>{if(!n){var s=1/0;for(m=0;m<e.length;m++){for(var[n,a,l]=e[m],r=!0,o=0;o<n.length;o++)(!1&l||s>=l)&&Object.keys(c.O).every((e=>c.O[e](n[o])))?n.splice(o--,1):(r=!1,l<s&&(s=l));if(r){e.splice(m--,1);var i=a();void 0!==i&&(t=i)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,a,l]},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};c.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[s,r,o]=n,i=0;if(s.some((t=>0!==e[t]))){for(a in r)c.o(r,a)&&(c.m[a]=r[a]);if(o)var m=o(c)}for(t&&t(n);i<s.length;i++)l=s[i],c.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return c.O(m)},n=globalThis.webpackChunkour_process_section=globalThis.webpackChunkour_process_section||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=c.O(void 0,[350],(()=>c(758)));a=c.O(a)})();