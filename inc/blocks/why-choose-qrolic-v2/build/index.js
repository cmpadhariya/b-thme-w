(()=>{"use strict";var e,t={21:()=>{const e=window.wp.blocks,t=window.React,l=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components,i=window.wp.element,a=JSON.parse('{"UU":"create-block/why-choose-qrolic-v2"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{SectionPadding:n,ourExpertiseTitle:c,ourExpertiseDescription:s,ourExpertise:m,workWithLoveTitle:p,workWithLoveText:h,workWithLoveDescription:g,wordpressComplexitiesTitle:d,wordpressComplexitiesDescription:u,wordpressComplexitiesgifUrl:_,provenSuccessTitle:E,provenSuccessDescription:v,provenSuccessLogos:w,moreCompaniesText:x,ongoingSupportTitle:C,ongoingSupportDescription:f,ongoingSupportgifUrl:N}=e,q=(0,o.useBlockProps)(),{gifUrl:y,gifAlt:T,gifWidth:S,gifHeight:k}=N||{gifUrl:"",gifAlt:"",gifWidth:"",gifHeight:""},{url:b,alt:U,width:D,height:P}=_||{url:"",alt:"",width:"",height:""},[W,L]=(0,i.useState)(""),[B,O]=(0,i.useState)(""),[A,H]=(0,i.useState)(null);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{...q,className:`why-choose-qrolic ${n||""} `},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_top"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_top--our-expertise"},(0,t.createElement)(o.RichText,{tagName:"h3",value:c,placeholder:(0,l.__)("Enter Subtitle...","qrolic"),onChange:e=>a({ourExpertiseTitle:e})}),(0,t.createElement)(o.RichText,{tagName:"p",className:"description-secondary",value:s,placeholder:(0,l.__)("Enter Our Expertise Description...","qrolic"),onChange:e=>a({ourExpertiseDescription:e})}),(0,t.createElement)("div",{className:"expertise-tags"},m.map(((e,r)=>(0,t.createElement)("span",{key:r},(0,t.createElement)("i",{className:e.icon}),(0,t.createElement)(o.RichText,{className:"expertise-name",value:e.expertise,placeholder:(0,l.__)("Enter Expertise Name...","qrolic"),onChange:e=>O(e)}),(0,t.createElement)("a",{isDestructive:!0,onClick:()=>(e=>{const t=m.filter(((t,l)=>l!==e));a({ourExpertise:t}),A===e&&(H(null),L(""),O(""))})(r)},(0,l.__)("x","qrolic"))))))),(0,t.createElement)("div",{className:"why-choose-qrolic__inner_top--work-with-love"},(0,t.createElement)(o.RichText,{tagName:"h3",value:p,placeholder:(0,l.__)("Enter Work With Love Title...","qrolic"),onChange:e=>a({workWithLoveTitle:e})}),(0,t.createElement)(o.RichText,{tagName:"p",className:"description-secondary",value:g,placeholder:(0,l.__)("Enter Work With Love Description...","qrolic"),onChange:e=>a({workWithLoveDescription:e})}),(0,t.createElement)("div",null,(0,t.createElement)("span",null,(0,t.createElement)(r.TextareaControl,{value:h,onChange:e=>a({workWithLoveText:e}),placeholder:(0,l.__)("Enter text...","qrolic")}))))),(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom"},(0,t.createElement)("div",{className:"row"},(0,t.createElement)("div",{className:"col-lg-4 col-md-6"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom--wordPress-complexities"},(0,t.createElement)(r.TextControl,{label:(0,l.__)("Title","qrolic"),value:d,onChange:e=>a({wordpressComplexitiesTitle:e})}),(0,t.createElement)(o.RichText,{tagName:"p",className:"description-secondary remove-extra-padding",value:u,placeholder:(0,l.__)("Enter WordPress Complexities Description...","qrolic"),onChange:e=>a({wordpressComplexitiesDescription:e})}),b&&(0,t.createElement)("img",{src:b,alt:U,width:D,height:P,loading:"lazy"}),(0,t.createElement)(o.MediaUploadCheck,null,(0,t.createElement)(o.MediaUpload,{onSelect:e=>a({wordpressComplexitiesgifUrl:{url:e.url,alt:e.alt,width:e.width,height:e.height}}),allowedTypes:["image","video","gif"],value:b,render:({open:e})=>(0,t.createElement)(r.Button,{onClick:e},(0,l.__)("Select GIF","qrolic"))}),(0,t.createElement)(r.Button,{isDestructive:!0,onClick:()=>{a({wordpressComplexitiesgifUrl:{gifUrl:"",gifAlt:"",gifWidth:"",gifHeight:""}})}},(0,l.__)("x","qrolic"))))),(0,t.createElement)("div",{className:"col-lg-4 col-md-6"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom--Success"},(0,t.createElement)(o.RichText,{tagName:"h3",value:E,placeholder:(0,l.__)("Enter Proven Success Title...","qrolic"),onChange:e=>a({provenSuccessTitle:e})}),(0,t.createElement)(o.RichText,{tagName:"p",className:"description-secondary",value:v,placeholder:(0,l.__)("Enter Proven Success Description...","qrolic"),onChange:e=>a({provenSuccessDescription:e})}),(0,t.createElement)("div",{className:"logos"},w.map(((e,l)=>(0,t.createElement)("div",{className:"logos__inner"},(0,t.createElement)("img",{key:l,src:e.url,alt:e.alt||`Logo ${l+1}`,width:e.width||100,height:e.height||100,loading:"lazy"})))),(0,t.createElement)(o.RichText,{tagName:"p",className:"morecompanies",value:x,onChange:e=>a({moreCompaniesText:e}),placeholder:(0,l.__)("Enter text...","qrolic")})))),(0,t.createElement)("div",{className:"col-lg-4 col-md-6"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom--ongoing-support"},(0,t.createElement)(o.RichText,{tagName:"h3",value:C,placeholder:(0,l.__)("Enter Ongoing Support Title...","qrolic"),onChange:e=>a({ongoingSupportTitle:e})}),(0,t.createElement)(o.RichText,{tagName:"p",className:"description-secondary",value:f,placeholder:(0,l.__)("Enter Ongoing Support Description...","qrolic"),onChange:e=>a({ongoingSupportDescription:e})}),y&&(0,t.createElement)("img",{src:y,alt:T,width:S,height:k,loading:"lazy"}),(0,t.createElement)(o.MediaUploadCheck,null,(0,t.createElement)(o.MediaUpload,{onSelect:e=>a({ongoingSupportgifUrl:{gifUrl:e.url,gifAlt:e.alt,gifWidth:e.width,gifHeight:e.height}}),allowedTypes:["image","video","gif"],value:y,render:({open:e})=>(0,t.createElement)(r.Button,{onClick:e},(0,l.__)("Select GIF","qrolic"))}),(0,t.createElement)(r.Button,{isDestructive:!0,onClick:()=>{a({ongoingSupportgifUrl:{gifUrl:"",gifAlt:"",gifWidth:"",gifHeight:""}})}},(0,l.__)("x","qrolic")))))))))),(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,l.__)("Block Settings","qrolic")},(0,t.createElement)(r.TextControl,{label:(0,l.__)("Section Padding","qrolic"),value:n,onChange:e=>a({SectionPadding:e}),placeholder:(0,l.__)("Section Padding Class Name","qrolic")})),(0,t.createElement)(r.PanelBody,{title:(0,l.__)("Our Expertise","qrolic")},(0,t.createElement)(r.TextControl,{label:(0,l.__)("Icon Class","qrolic"),value:W,onChange:e=>L(e)}),(0,t.createElement)(r.TextControl,{label:(0,l.__)("Expertise","qrolic"),value:B,onChange:e=>O(e)}),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Button,{isPrimary:!0,onClick:()=>{if(W||B){const e=[...m],t={icon:W||"",expertise:B||""};null!==A?(e[A]=t,H(null)):e.push(t),a({ourExpertise:e}),L(""),O("")}},disabled:!W&&!B},null!==A?(0,l.__)("Update Expertise","qrolic"):(0,l.__)("Add Expertise","qrolic")))),(0,t.createElement)(r.PanelBody,{title:(0,l.__)("WordPress Complexities","qrolic")},(0,t.createElement)(r.TextControl,{label:(0,l.__)("GIF Alt Text","qrolic"),value:U,onChange:e=>a({wordpressComplexitiesgifUrl:{..._,alt:e}})}),(0,t.createElement)(r.TextControl,{label:(0,l.__)("Width","qrolic"),value:D,onChange:e=>a({wordpressComplexitiesgifUrl:{..._,width:e}})}),(0,t.createElement)(r.TextControl,{label:(0,l.__)("Height","qrolic"),value:P,onChange:e=>a({wordpressComplexitiesgifUrl:{..._,height:e}})})),(0,t.createElement)(r.PanelBody,{title:(0,l.__)("Proven Success","qrolic")},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.Button,{isPrimary:!0,onClick:()=>{const e=[...w,{url:"",alt:"",width:100,height:100}];a({provenSuccessLogos:e})}},(0,l.__)("Add Logo","qrolic"))),(0,t.createElement)("div",{className:"logo-list"},w.map(((e,i)=>(0,t.createElement)(r.PanelRow,{key:i},(0,t.createElement)(o.MediaUpload,{onSelect:e=>((e,t)=>{const l=[...w];l[t]={url:e.url,alt:e.alt||`Logo ${t+1}`,width:e.width||100,height:e.height||100},a({provenSuccessLogos:l})})(e,i),allowedTypes:["image"],value:e.url,render:({open:o})=>(0,t.createElement)(r.Button,{onClick:o},e.url?(0,t.createElement)("img",{src:e.url,alt:e.alt,width:50}):(0,l.__)("Select Logo","qrolic"))}),(0,t.createElement)(r.Button,{isDestructive:!0,onClick:()=>(e=>{const t=[...w];t.splice(e,1),a({provenSuccessLogos:t})})(i)},(0,l.__)("x","qrolic"))))))),(0,t.createElement)(r.PanelBody,{title:(0,l.__)("Ongoing Support","qrolic")},(0,t.createElement)(r.TextControl,{label:(0,l.__)("GIF Alt Text","qrolic"),value:T,onChange:e=>a({ongoingSupportgifUrl:{...N,gifAlt:e}})}),(0,t.createElement)(r.TextControl,{label:(0,l.__)("Width","qrolic"),value:S,onChange:e=>a({ongoingSupportgifUrl:{...N,gifWidth:e}})}),(0,t.createElement)(r.TextControl,{label:(0,l.__)("Height","qrolic"),value:k,onChange:e=>a({ongoingSupportgifUrl:{...N,gifHeight:e}})}))))},save:function({attributes:e}){const{ourExpertiseTitle:r,ourExpertiseDescription:i,ourExpertise:a,workWithLoveText:n,workWithLoveTitle:c,workWithLoveDescription:s,wordpressComplexitiesTitle:m,wordpressComplexitiesDescription:p,wordpressComplexitiesgifUrl:h,provenSuccessTitle:g,provenSuccessDescription:d,provenSuccessLogos:u,moreCompaniesText:_,ongoingSupportTitle:E,ongoingSupportDescription:v,ongoingSupportgifUrl:w,SectionPadding:x}=e,C=o.useBlockProps.save(),{gifUrl:f,gifAlt:N,gifWidth:q,gifHeight:y}=w||{gifUrl:"",gifAlt:"",gifWidth:"",gifHeight:""},{url:T,alt:S,width:k,height:b}=h||{url:"",alt:"",width:"",height:""};return(0,t.createElement)("div",{...C,className:`why-choose-qrolic ${x||""} `},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_top"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_top--our-expertise"},(0,t.createElement)("h3",null,r),(0,t.createElement)("p",{className:"description-secondary"},i),(0,t.createElement)("div",{className:"expertise-tags"},a.map(((e,l)=>(0,t.createElement)("span",{key:l},(0,t.createElement)("i",{className:e.icon})," ",e.expertise))))),(0,t.createElement)("div",{className:"why-choose-qrolic__inner_top--work-with-love"},(0,t.createElement)("h3",null,c),(0,t.createElement)("p",{className:"description-secondary"},s),(0,t.createElement)("div",{className:"work-with-love-tag"},(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"538",height:"113",viewBox:"0 0 538 113",fill:"none"},(0,t.createElement)("path",{d:"M-64 0.5H39.3621C43.7804 0.5 47.3621 4.08172 47.3621 8.5V41.2175C47.3621 45.6358 50.9438 49.2175 55.3621 49.2175H407.178C411.596 49.2175 415.178 52.7992 415.178 57.2175V104.5C415.178 108.918 418.76 112.5 423.178 112.5H594",stroke:"url(#paint0_radial_5284_19506)"}),(0,t.createElement)("defs",null,(0,t.createElement)("radialGradient",{id:"paint0_radial_5284_19506",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(264.732 44.1951) scale(288.578 607.521)"},(0,t.createElement)("stop",{"stop-color":"#A6A7AD"}),(0,t.createElement)("stop",{offset:"1","stop-color":"#13161B"})))),(0,t.createElement)("span",{dangerouslySetInnerHTML:{__html:n}},(0,t.createElement)("i",{className:"icon-heart"}))))),(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom"},(0,t.createElement)("div",{className:"row"},(0,t.createElement)("div",{className:"col-lg-4 col-md-6"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom--wordPress-complexities"},(0,t.createElement)("h3",{className:"wordpress-complexities-title",dangerouslySetInnerHTML:{__html:m}}),(0,t.createElement)("p",{className:"description-secondary remove-extra-padding"},p),T&&(0,t.createElement)("img",{src:T,alt:S||(0,l.__)("GIF Image","qrolic"),width:k,height:b,loading:"lazy"}))),(0,t.createElement)("div",{className:"col-lg-4 col-md-6"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom--Success"},(0,t.createElement)("h3",null,g),(0,t.createElement)("p",{className:"description-secondary"},d),(0,t.createElement)("div",{className:"logos"},u.map(((e,l)=>(0,t.createElement)("div",{className:"logos__inner"},(0,t.createElement)("img",{key:l,src:e.url,alt:e.alt||"Logo",width:e.width||100,height:e.height||100,loading:"lazy"})))),(0,t.createElement)("p",{className:"morecompanies"},_)))),(0,t.createElement)("div",{className:"col-lg-4 col-md-6"},(0,t.createElement)("div",{className:"why-choose-qrolic__inner_bottom--ongoing-support"},(0,t.createElement)("h3",null,E),(0,t.createElement)("p",{className:"description-secondary"},v),f&&(0,t.createElement)("img",{src:f,alt:N||(0,l.__)("GIF Image","qrolic"),width:q,height:y,loading:"lazy"}))))))))}})}},l={};function o(e){var r=l[e];if(void 0!==r)return r.exports;var i=l[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,l,r,i)=>{if(!l){var a=1/0;for(m=0;m<e.length;m++){l=e[m][0],r=e[m][1],i=e[m][2];for(var n=!0,c=0;c<l.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](l[c])))?l.splice(c--,1):(n=!1,i<a&&(a=i));if(n){e.splice(m--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[l,r,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,l)=>{var r,i,a=l[0],n=l[1],c=l[2],s=0;if(a.some((t=>0!==e[t]))){for(r in n)o.o(n,r)&&(o.m[r]=n[r]);if(c)var m=c(o)}for(t&&t(l);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(m)},l=self.webpackChunkwhy_choose_qrolic_v2=self.webpackChunkwhy_choose_qrolic_v2||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var r=o.O(void 0,[350],(()=>o(21)));r=o.O(r)})();