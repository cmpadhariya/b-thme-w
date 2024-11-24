(()=>{"use strict";var e,t={95:()=>{const e=window.wp.blocks,t=window.React,a=window.wp.i18n,l=window.wp.blockEditor,r=window.wp.components,s=window.wp.data,n=JSON.parse('{"UU":"create-block/casestudy-related-section-v2"}');(0,e.registerBlockType)(n.UU,{edit:function({attributes:e,setAttributes:n}){const{numberOfItems:c,displayThumbnail:o,Title:d,SectionPadding:i,readMore:m}=e,u=e=>{n({readMore:e})},{posts:p}=(0,s.useSelect)((e=>{const t=e("core/editor").getCurrentPostId(),a={categories:e("core/editor").getEditedPostAttribute("categories"),per_page:c,_embed:!0,exclude:[t]};return{posts:e("core").getEntityRecords("postType","case-studies",a)}}),[c]);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,a.__)("Block Settings","qrolic")},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.TextControl,{label:(0,a.__)("Section Padding Class","qrolic"),value:i,onChange:e=>n({SectionPadding:e})})),(0,t.createElement)(r.SelectControl,{label:(0,a.__)("Number of Posts","qrolic"),value:c,options:[{label:"0",value:0},{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5},{label:"6",value:6},{label:"7",value:7},{label:"8",value:8},{label:"9",value:9},{label:"10",value:10}],onChange:e=>{n({numberOfItems:parseInt(e,10)})}}))),(0,t.createElement)("div",{...(0,l.useBlockProps)()},(0,t.createElement)("div",{className:`casestudy-related ${i}`},(0,t.createElement)("div",{className:"container p-0"},(0,t.createElement)("div",{className:"casestudy-related__inner"},(0,t.createElement)(l.RichText,{tagName:"h2",value:d,onChange:e=>{n({Title:e})},placeholder:(0,a.__)("Enter title...","qrolic")}),p&&p.length>0&&(0,t.createElement)("div",{className:"row"},p.map((e=>{const r=e._embedded["wp:term"]?e._embedded["wp:term"][0]:[];return(0,t.createElement)("div",{className:"col-lg-6 col-md-6 col-sm-12 col-12",key:e.id},(0,t.createElement)("div",{className:"casestudy-related__list"},o&&e._embedded&&e._embedded["wp:featuredmedia"]&&(0,t.createElement)("div",{className:"casestudy-related__list_image post-thumbnail"},(0,t.createElement)("img",{src:e._embedded["wp:featuredmedia"][0].source_url,alt:e.title.rendered})),(0,t.createElement)("div",{className:"casestudy-related__list_title"},(0,t.createElement)("h3",null,(0,t.createElement)("a",{href:e.link},e.title.rendered))),r.length>0&&(0,t.createElement)("ul",{className:"post-categories casestudy-related__list_category"},r.map((e=>(0,t.createElement)("li",{key:e.id},e.name)))),(0,t.createElement)("div",{className:"casestudy-related__list_readmore"},(0,t.createElement)(l.RichText,{tagName:"span",value:m,onChange:u,placeholder:(0,a.__)("Enter Read More Text...","qrolic"),className:"subtitle"}))))}))))))))}})}},a={};function l(e){var r=a[e];if(void 0!==r)return r.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,l),s.exports}l.m=t,e=[],l.O=(t,a,r,s)=>{if(!a){var n=1/0;for(i=0;i<e.length;i++){for(var[a,r,s]=e[i],c=!0,o=0;o<a.length;o++)(!1&s||n>=s)&&Object.keys(l.O).every((e=>l.O[e](a[o])))?a.splice(o--,1):(c=!1,s<n&&(n=s));if(c){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var i=e.length;i>0&&e[i-1][2]>s;i--)e[i]=e[i-1];e[i]=[a,r,s]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};l.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,[n,c,o]=a,d=0;if(n.some((t=>0!==e[t]))){for(r in c)l.o(c,r)&&(l.m[r]=c[r]);if(o)var i=o(l)}for(t&&t(a);d<n.length;d++)s=n[d],l.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return l.O(i)},a=globalThis.webpackChunkcasestudy_related_section_v2=globalThis.webpackChunkcasestudy_related_section_v2||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=l.O(void 0,[350],(()=>l(95)));r=l.O(r)})();