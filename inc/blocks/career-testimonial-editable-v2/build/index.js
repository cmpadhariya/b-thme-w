(()=>{"use strict";var e,t={21:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,i=window.wp.blockEditor,n=window.wp.components,l=window.wp.element,r=JSON.parse('{"UU":"create-block/career-testimonial-editable-v2"}');(0,e.registerBlockType)(r.UU,{edit:function({attributes:e,setAttributes:r}){const{title:c,description:o,SectionPadding:s,testimonials:m=[]}=e,d=(e,t,a)=>{const i=[...m];i[e]={...i[e],[t]:a},r({testimonials:i})},v=()=>{r({testimonials:[...m,{image:"",review:"",name:"",position:"",reviewImage:""}]})};return(0,l.useEffect)((()=>{0===m.length&&v()}),[]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(n.PanelBody,{title:(0,a.__)("Block Settings","career-testimonials-section-v2")},(0,t.createElement)(n.PanelRow,null,(0,t.createElement)(n.TextControl,{label:(0,a.__)("Section Padding Class","career-testimonials-section-v2"),value:s,onChange:e=>r({SectionPadding:e})})),(0,t.createElement)(n.PanelBody,{title:(0,a.__)("Manage Testimonials","career-testimonials-section-v2")},(0,t.createElement)(n.Button,{isPrimary:!0,onClick:v},(0,a.__)("Add Testimonials ","career-testimonials-section-v2")),m.map(((e,i)=>(0,t.createElement)(n.PanelRow,{key:i},(0,t.createElement)(n.TextControl,{label:`${(0,a.__)("Testimonial","career-testimonials-section-v2")} ${i+1}`,value:`Testimonial ${i+1}`,readOnly:!0}),(0,t.createElement)(n.IconButton,{icon:"trash",onClick:()=>(e=>{const t=m.filter(((t,a)=>a!==e));r({testimonials:t})})(i),label:(0,a.__)("X Testimonial","career-testimonials-section-v2")}))))))),(0,t.createElement)("div",{...(0,i.useBlockProps)()},(0,t.createElement)("div",{className:`career-testimonial-editable ${s}`},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"career-testimonial-editable__top"},(0,t.createElement)("div",{className:"row align-items-center"},(0,t.createElement)("div",{class:"col-lg-8 col-md-12 col-12 mx-auto"},(0,t.createElement)(i.RichText,{tagName:"h2",value:c,onChange:e=>r({title:e}),placeholder:(0,a.__)("Enter section title...","career-testimonials-section-v2")}),(0,t.createElement)(i.RichText,{tagName:"p",className:"description-primary",value:o,onChange:e=>r({description:e}),placeholder:(0,a.__)("Enter description...","career-testimonials-section-v2")})))),(0,t.createElement)("div",{className:"career-testimonial-editable__inner"},(0,t.createElement)("div",{className:"row"},m.map(((e,l)=>(0,t.createElement)("div",{key:l,className:"col-lg-4 col-md-6 col-12 m-top-back-end"},(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box"},(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box--image"},(0,t.createElement)(i.MediaUploadCheck,null,(0,t.createElement)(i.MediaUpload,{onSelect:e=>((e,t)=>{d(e,"image",t.url)})(l,e),allowedTypes:["image"],value:e.image,render:({open:i})=>(0,t.createElement)(t.Fragment,null,e.image?(0,t.createElement)(n.Button,{onClick:()=>(e=>{d(e,"image","")})(l),isSecondary:!0},(0,a.__)("X","career-testimonials-section-v2")):(0,t.createElement)(n.Button,{onClick:i,isSecondary:!0},(0,a.__)("+","career-testimonials-section-v2")))})),e.image&&(0,t.createElement)("div",null,(0,t.createElement)("img",{src:e.image,alt:`Testimonial Image ${l+1}`,width:"113",height:"113",className:"career-testimonial-editable__inner_box--image-img",loading:"lazy"}))),(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box--content"},(0,t.createElement)("ul",{className:"star-rating"},[...Array(5)].map(((e,a)=>(0,t.createElement)("li",{key:a,className:"icon-star"})))),(0,t.createElement)(i.RichText,{tagName:"p",className:"career_testimonials__inner_box--content-text",value:e.review,onChange:e=>d(l,"review",e),placeholder:(0,a.__)("Enter review...","career-testimonials-section-v2")}),(0,t.createElement)("div",{className:"post-meta"},(0,t.createElement)(i.RichText,{tagName:"h3",className:"employed-review",value:e.name,onChange:e=>d(l,"name",e),placeholder:(0,a.__)("Enter name...","career-testimonials-section-v2")}),(0,t.createElement)(i.RichText,{tagName:"p",className:"client-position",value:e.position,onChange:e=>d(l,"position",e),placeholder:(0,a.__)("Enter position...","career-testimonials-section-v2")}),(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box--content-bottom-image"},(0,t.createElement)(i.MediaUploadCheck,null,(0,t.createElement)(i.MediaUpload,{onSelect:e=>((e,t)=>{d(e,"reviewImage",t.url)})(l,e),allowedTypes:["reviewImage"],value:e.reviewImage,render:({open:i})=>(0,t.createElement)(t.Fragment,null,e.reviewImage?(0,t.createElement)(n.Button,{onClick:()=>(e=>{d(e,"reviewImage","")})(l),isSecondary:!0},(0,a.__)("X","career-testimonials-section-v2")):(0,t.createElement)(n.Button,{onClick:i,isSecondary:!0},(0,a.__)("+","career-testimonials-section-v2")))})),e.reviewImage&&(0,t.createElement)("div",null,(0,t.createElement)("img",{src:e.reviewImage,alt:`Testimonial ReviewImage ${l+1}`,width:"71",height:"30",className:"career-testimonial-editable__inner_box--image-img",loading:"lazy"})))))))))))))))},save:function({attributes:e}){const{title:a,description:n,SectionPadding:l,sectionDescription:r,icon:c,testimonials:o}=e;return(0,t.createElement)("div",{className:`career-testimonial-editable ${l}`},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"career-testimonial-editable__top"},(0,t.createElement)("div",{className:"row align-items-center"},(0,t.createElement)("div",{class:"col-lg-8 col-md-12 col-12 mx-auto"},(0,t.createElement)(i.RichText.Content,{tagName:"h2",value:a}),(0,t.createElement)(i.RichText.Content,{tagName:"p",className:"description-primary",value:n})))),(0,t.createElement)("div",{className:"career-testimonial-editable__inner"},(0,t.createElement)("div",{className:"row"},o.map(((e,a)=>(0,t.createElement)("div",{key:a,className:"col-lg-4 col-md-6 col-12 m-bottom"},(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box"},(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box--image"},e.image&&(0,t.createElement)("img",{src:e.image,alt:`Client image ${a+1}`,width:"113",height:"113",loading:"lazy"})),(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box--content"},(0,t.createElement)("ul",{className:"star-rating"},[...Array(5)].map(((e,a)=>(0,t.createElement)("li",{key:a,className:"icon-star"})))),(0,t.createElement)(i.RichText.Content,{tagName:"p",className:"career-testimonial-editable__inner_box--content-text",value:e.review}),(0,t.createElement)("div",{className:"post-meta"},(0,t.createElement)(i.RichText.Content,{tagName:"h3",value:e.name}),e.position&&(0,t.createElement)("p",{className:"client-position"},e.position),(0,t.createElement)("div",{className:"career-testimonial-editable__inner_box--content-bottom-image"},e.reviewImage&&(0,t.createElement)("img",{src:e.reviewImage,alt:`Client review image ${a+1}`,width:"71",height:"30",loading:"lazy"}))))))))))))}})}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var l=a[e]={exports:{}};return t[e](l,l.exports,i),l.exports}i.m=t,e=[],i.O=(t,a,n,l)=>{if(!a){var r=1/0;for(m=0;m<e.length;m++){for(var[a,n,l]=e[m],c=!0,o=0;o<a.length;o++)(!1&l||r>=l)&&Object.keys(i.O).every((e=>i.O[e](a[o])))?a.splice(o--,1):(c=!1,l<r&&(r=l));if(c){e.splice(m--,1);var s=n();void 0!==s&&(t=s)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[a,n,l]},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};i.O.j=t=>0===e[t];var t=(t,a)=>{var n,l,[r,c,o]=a,s=0;if(r.some((t=>0!==e[t]))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);if(o)var m=o(i)}for(t&&t(a);s<r.length;s++)l=r[s],i.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return i.O(m)},a=globalThis.webpackChunkcareer_testimonial_editable_v2=globalThis.webpackChunkcareer_testimonial_editable_v2||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=i.O(void 0,[350],(()=>i(21)));n=i.O(n)})();