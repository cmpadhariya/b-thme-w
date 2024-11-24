(()=>{"use strict";var e,t={758:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,l=window.wp.blockEditor,{PanelBody:n,SelectControl:o,ToggleControl:r,TextControl:c,Button:i}=wp.components,m=JSON.parse('{"UU":"create-block/why-qrolic-hero-section"}');(0,e.registerBlockType)(m.UU,{edit:function({attributes:e,setAttributes:m}){const{mediaType:s,subtitle:h,title:u,description:g,blackBtnText:d,blackBtnUrl:p,grayBtnText:v,grayBtnUrl:b,altText:E,mediaID:N,mediaURL:y,srcSet:w,videoControls:C,height:x,width:_,imagetoptext:T,imagetopicon:f,imagebuttontext:k,imagebuttonicon:B,imagebuttonurl:R}=e,q=(e,t)=>{m({videoControls:{...C,[e]:t}})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n,{title:"Hero Section Settings"},(0,t.createElement)(o,{label:"Media Type",value:s,options:[{label:"Image",value:"image"},{label:"Video",value:"video"}],onChange:e=>m({mediaType:e})}),"video"===s&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r,{label:"Autoplay",checked:C.autoplay,onChange:e=>q("autoplay",e)}),(0,t.createElement)(r,{label:"Loop",checked:C.loop,onChange:e=>q("loop",e)}),(0,t.createElement)(r,{label:"Muted",checked:C.muted,onChange:e=>q("muted",e)}),(0,t.createElement)(r,{label:"Show Controls",checked:C.controls,onChange:e=>q("controls",e)})),(0,t.createElement)(c,{label:"Black Button URL",onChange:function(e){m({blackBtnUrl:e})},value:p}),(0,t.createElement)(c,{label:"Gray Button URL",onChange:function(e){m({grayBtnUrl:e})},value:b}),(0,t.createElement)(c,{label:"Image top text",onChange:e=>{m({imagetoptext:e})},value:T}),(0,t.createElement)(c,{label:"Image button Text",onChange:e=>{m({imagebuttontext:e})},value:k}),(0,t.createElement)(c,{label:"Image Top Icon",onChange:e=>{m({imagetopicon:e})},value:f}),(0,t.createElement)(c,{label:"Image Button Icon",onChange:e=>{m({imagebuttonicon:e})},value:B}),(0,t.createElement)(c,{label:"Image button URL",onChange:e=>{m({imagebuttonurl:e})},value:R}),(0,t.createElement)(c,{format:"string",label:"Add height attribute in image",onChange:e=>{m({height:e})},value:x}),(0,t.createElement)(c,{format:"string",label:"Add width attribute in image",onChange:e=>{m({width:e})},value:_}))),(0,t.createElement)("section",{...(0,l.useBlockProps)()},(0,t.createElement)("div",{className:"why-qrolic-hero-section"},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner"},(0,t.createElement)("div",{className:"row align-items-center"},(0,t.createElement)("div",{className:"col-lg-6 col-md-12 col-12"},(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--content"},(0,t.createElement)(c,{tagName:"p",className:"subtitle subtitle-heading",onChange:e=>m({subtitle:e}),placeholder:"Subtitle",value:h}),(0,t.createElement)(l.RichText,{tagName:"h1",className:"why-qrolic-hero-title",onChange:e=>m({title:e}),placeholder:"Title",value:u}),(0,t.createElement)(c,{tagName:"p",className:"subtitle why-qrolic-hero-description",onChange:e=>m({description:e}),placeholder:"Description",value:g}),(0,t.createElement)("div",{className:"hero-buttons"},(0,t.createElement)(l.RichText,{tagName:"a",target:"_blank",rel:"noreferrer noopener",placeholder:"Black Button",className:"hero-black-button button-general",value:d,onChange:e=>m({blackBtnText:e})}),(0,t.createElement)(l.RichText,{tagName:"a",target:"_self",rel:"noreferrer noopener",placeholder:"Gray Button",className:"hero-gray-button",value:v,onChange:e=>m({grayBtnText:e})})))),(0,t.createElement)("div",{className:"col-lg-6 col-md-12 col-12"},(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--image"},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{onSelect:e=>{m({mediaID:e.id,mediaURL:e.url,altText:e.alt,srcSet:e.sizes})},allowedTypes:["image","video"],value:N,render:({open:e})=>(0,t.createElement)(i,{className:N?"image-button":"button button-large",onClick:e},N?"image"===s?(0,t.createElement)("img",{src:y,alt:E,loading:"eager",height:x,width:_}):(0,t.createElement)("video",{src:y,autoPlay:C.autoplay?"autoplay":void 0,loop:C.loop?"loop":void 0,muted:C.muted?"muted":void 0,controls:C.controls?"controls":void 0,loading:"eager",height:x,width:_}):(0,a.__)("Upload Image/Video","awp"))})),(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--image-topcontent"},(0,t.createElement)(l.RichText.Content,{tagName:"p",className:"subtitle",value:T}),(0,t.createElement)("i",{className:f})),(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--image-buttomcontent"},(0,t.createElement)(l.RichText.Content,{tagName:"a",className:"subtitle",value:k,href:R}),(0,t.createElement)("i",{className:B})),N&&(0,t.createElement)(i,{className:"remove-media",onClick:()=>{m({mediaID:null,mediaURL:null,altText:null,srcSet:{}})}},(0,a.__)("Remove Media","qrolic"))))))))))},save:function({attributes:e}){const{mediaType:a,subtitle:n,title:o,description:r,blackBtnText:c,blackBtnUrl:i,grayBtnText:m,grayBtnUrl:s,altText:h,mediaURL:u,videoControls:g,height:d,width:p,imagetoptext:v,imagebuttontext:b,imagebuttonurl:E,imagetopicon:N,imagebuttonicon:y}=e;return(0,t.createElement)("section",{...l.useBlockProps.save()},(0,t.createElement)("div",{className:"why-qrolic-hero-section"},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner"},(0,t.createElement)("div",{className:"row align-items-center"},(0,t.createElement)("div",{className:"col-lg-6 col-md-12 col-12"},(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--content"},(0,t.createElement)(l.RichText.Content,{tagName:"p",className:"subtitle subtitle-heading",value:n}),(0,t.createElement)(l.RichText.Content,{tagName:"h1",className:"why-qrolic-hero-title",value:o}),(0,t.createElement)(l.RichText.Content,{tagName:"p",className:"subtitle why-qrolic-hero-description",value:r}),(0,t.createElement)("div",{className:"hero-buttons"},(0,t.createElement)(l.RichText.Content,{tagName:"a",href:i,target:"_blank",rel:"noreferrer noopener",className:"hero-black-button button-general",value:c}),(0,t.createElement)(l.RichText.Content,{tagName:"a",href:s,target:"_self",rel:"noreferrer noopener",className:"hero-gray-button",value:m})))),(0,t.createElement)("div",{className:"col-lg-6 col-md-12 col-12"},(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--image"},"image"===a&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)("img",{src:u,alt:h,height:d,width:p}),(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--image-topcontent"},(0,t.createElement)(l.RichText.Content,{tagName:"p",className:"subtitle",value:v}),(0,t.createElement)("i",{className:N})),(0,t.createElement)("div",{className:"why-qrolic-hero-section__inner--image-buttomcontent"},(0,t.createElement)(l.RichText.Content,{tagName:"a",className:"subtitle",value:b,href:E}),(0,t.createElement)("i",{className:y}))),"video"===a&&(0,t.createElement)("video",{src:u,autoPlay:g.autoplay,loop:g.loop,muted:!!g.autoplay||g.muted,controls:g.controls,height:d,width:p}))))))))}})}},a={};function l(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,l),o.exports}l.m=t,e=[],l.O=(t,a,n,o)=>{if(!a){var r=1/0;for(s=0;s<e.length;s++){a=e[s][0],n=e[s][1],o=e[s][2];for(var c=!0,i=0;i<a.length;i++)(!1&o||r>=o)&&Object.keys(l.O).every((e=>l.O[e](a[i])))?a.splice(i--,1):(c=!1,o<r&&(r=o));if(c){e.splice(s--,1);var m=n();void 0!==m&&(t=m)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[a,n,o]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var n,o,r=a[0],c=a[1],i=a[2],m=0;if(r.some((t=>0!==e[t]))){for(n in c)l.o(c,n)&&(l.m[n]=c[n]);if(i)var s=i(l)}for(t&&t(a);m<r.length;m++)o=r[m],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(s)},a=self.webpackChunkwhy_qrolic_hero_section=self.webpackChunkwhy_qrolic_hero_section||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=l.O(void 0,[350],(()=>l(758)));n=l.O(n)})();