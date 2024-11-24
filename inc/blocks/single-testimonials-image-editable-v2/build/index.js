(()=>{"use strict";var e,t={21:()=>{const e=window.wp.blocks,t=window.React,i=window.wp.i18n,l=window.wp.blockEditor,n=window.wp.components;window.wp.element;const a=JSON.parse('{"UU":"create-block/single-testimonials-image-editable-v2"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{imageId:s,imageUrl:o,imgWidth:c,imgHeight:m,positionIcon:r,heading:d,description:g,position:p,positiondescription:E,mediaID:v,mediaURL:h,altText:u}=e,_=(0,l.useBlockProps)(),b=()=>{a({imageUrl:void 0,imageId:void 0})},w=()=>{a({mediaID:null,mediaURL:null,altText:null})};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(n.PanelBody,null,(0,t.createElement)(n.TextControl,{label:(0,i.__)("Add icon class","single-testimonial-img-editable-v2"),onChange:e=>{a({positionIcon:e})},value:r}),(0,t.createElement)(n.TextControl,{label:(0,i.__)("Add height","single-testimonial-img-editable-v2"),onChange:e=>{a({imgHeight:e})},value:m}),(0,t.createElement)(n.TextControl,{label:(0,i.__)("Add width","single-testimonial-img-editable-v2"),onChange:e=>{a({imgWidth:e})},value:c}))),(0,t.createElement)("section",{..._},(0,t.createElement)("div",{className:"single-testimonial-img-editable"},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"single-testimonial-img-editable__inner"},(0,t.createElement)("div",{className:"row"},(0,t.createElement)("div",{className:"col-lg-3 col-md-4 col-12"},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{onSelect:e=>{a({imageUrl:e.url,imageId:e.id})},allowedTypes:["image"],value:s,render:({open:i})=>(0,t.createElement)("div",{className:"single-testimonial-img-editable__inner_thumbnail"},!s&&(0,t.createElement)(n.Button,{onClick:i,isDefault:!0},"Upload Media"),s&&(0,t.createElement)("div",null,e.imageUrl?(0,t.createElement)("img",{src:e.imageUrl,alt:"single-testimonial-img-editable",width:c,height:m}):"Upload Image"," ",(0,t.createElement)("br",null),(0,t.createElement)(n.Button,{onClick:b,isLink:!0,isDestructive:!0},"X")))}))),(0,t.createElement)("div",{className:"col-lg-9 col-md-8 col-12 content-center"},(0,t.createElement)("div",{className:"single-testimonial-img-editable__inner_heading"},(0,t.createElement)(l.RichText,{tagName:"h2",placeholder:(0,i.__)("Main Heading","qrolic"),value:d,onChange:e=>{a({heading:e})}})),(0,t.createElement)("div",{className:"single-testimonial-img-editable__inner_content"},(0,t.createElement)(l.RichText,{tagName:"p",placeholder:(0,i.__)("Write Here Employee Review Description","qrolic"),value:g,onChange:e=>{a({description:e})},className:"single-testimonial-description"})),(0,t.createElement)("div",{className:"single-testimonial-img-editable__inner_title"},(0,t.createElement)("div",null,(0,t.createElement)(l.RichText,{tagName:"h3",placeholder:(0,i.__)("Enter Employee Name","qrolic"),value:p,onChange:e=>{a({position:e})},className:"single-testimonial-position"}),(0,t.createElement)("div",{class:"single-testimonial-img-editable__inner_title-position"},(0,t.createElement)(l.RichText,{tagName:"p",placeholder:(0,i.__)("Enter Employee Position","qrolic"),value:E,onChange:e=>{a({positiondescription:e})},className:"single-testimonial-subdescription"}))),(0,t.createElement)("hr",null),(0,t.createElement)("div",{className:"single-testimonial-google-review"},(0,t.createElement)(l.MediaUploadCheck,null,(0,t.createElement)(l.MediaUpload,{onSelect:e=>{a({mediaID:e.id,mediaURL:e.url,altText:e.alt})},allowedTypes:["image"],value:v,render:({open:l})=>(0,t.createElement)("picture",null,!v&&(0,t.createElement)(n.Button,{onClick:l,isPrimary:!0,className:"icon-doc-add"},(0,t.createElement)("span",{className:"add-items"},"Add Review Image")),v&&(0,t.createElement)(t.Fragment,null,e.mediaURL?(0,t.createElement)("img",{src:e.mediaURL,alt:e.altText,width:"145",height:"61"}):"Upload Image"," ",(0,t.createElement)("br",null),(0,t.createElement)(n.Button,{onClick:w,isLink:!0,isDestructive:!0},(0,i.__)("X","qrolic"))))})))))))))))},save:function({attributes:e}){const{positionIcon:i,heading:n,description:a,position:s,positiondescription:o,imageUrl:c,imgWidth:m,imgHeight:r,mediaID:d,mediaURL:g,altText:p}=e;return(0,t.createElement)("section",{...l.useBlockProps.save()},(0,t.createElement)("div",{class:"single-testimonial-img-editable"},(0,t.createElement)("div",{class:"container p-0"},(0,t.createElement)("div",{class:"single-testimonial-img-editable__inner"},(0,t.createElement)("div",{class:"row"},(0,t.createElement)("div",{class:"col-lg-3 col-md-4 col-12"},(0,t.createElement)("div",{class:"single-testimonial-img-editable__inner_thumbnail"},(0,t.createElement)("img",{src:c,alt:"single-testimonial-img-editable",width:m,height:r}))),(0,t.createElement)("div",{class:"col-lg-9 col-md-8 col-12 content-center"},(0,t.createElement)("div",{class:"single-testimonial-img-editable__inner_heading"},(0,t.createElement)("h2",null,n)),(0,t.createElement)("div",{class:"single-testimonial-img-editable__inner_content"},(0,t.createElement)("p",{class:"single-testimonial-description"},a)),(0,t.createElement)("div",{class:"single-testimonial-img-editable__inner_title"},(0,t.createElement)("div",null,(0,t.createElement)("h3",{class:"single-testimonial-position"},s),(0,t.createElement)("div",{class:"single-testimonial-img-editable__inner_title-position"},(0,t.createElement)("p",{class:"single-testimonial-subdescription"},o),i&&(0,t.createElement)("div",{dangerouslySetInnerHTML:{__html:`<i class="${i}"></i>`}}))),(0,t.createElement)("hr",null),(0,t.createElement)("div",{className:"single-testimonial-google-review"},g?(0,t.createElement)("img",{src:g,alt:e.altText,width:"145",height:"61",loading:"lazy"}):""))))))))}})}},i={};function l(e){var n=i[e];if(void 0!==n)return n.exports;var a=i[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,i,n,a)=>{if(!i){var s=1/0;for(r=0;r<e.length;r++){for(var[i,n,a]=e[r],o=!0,c=0;c<i.length;c++)(!1&a||s>=a)&&Object.keys(l.O).every((e=>l.O[e](i[c])))?i.splice(c--,1):(o=!1,a<s&&(s=a));if(o){e.splice(r--,1);var m=n();void 0!==m&&(t=m)}}return t}a=a||0;for(var r=e.length;r>0&&e[r-1][2]>a;r--)e[r]=e[r-1];e[r]=[i,n,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};l.O.j=t=>0===e[t];var t=(t,i)=>{var n,a,[s,o,c]=i,m=0;if(s.some((t=>0!==e[t]))){for(n in o)l.o(o,n)&&(l.m[n]=o[n]);if(c)var r=c(l)}for(t&&t(i);m<s.length;m++)a=s[m],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(r)},i=globalThis.webpackChunksingle_testimonials_image_editable_v2=globalThis.webpackChunksingle_testimonials_image_editable_v2||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=l.O(void 0,[350],(()=>l(21)));n=l.O(n)})();