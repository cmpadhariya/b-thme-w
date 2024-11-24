!function(){"use strict";var e,t={575:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,l=window.wp.blockEditor,r=window.wp.components,i=window.wp.data,o=JSON.parse('{"u2":"create-block/single-testimonial"}');(0,e.registerBlockType)(o.u2,{edit:function({attributes:e,setAttributes:o}){const{selectedPostId:a,selectedCategory:s}=e,c=(0,i.useSelect)((e=>{const t=e("core").getEntityRecords("postType","testimonial");return t?t.map((e=>({value:e.id.toString(),label:e.title.rendered}))):[]})),u=(0,i.useSelect)((e=>a?e("core").getEntityRecord("postType","testimonial",a):null),[a]);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Content Settings","author-plugin")},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,n.__)("Select Post","author-plugin"),value:a,options:[{value:"",label:(0,n.__)("Select a post","author-plugin")},...c],onChange:e=>o({selectedPostId:e})})))),(0,t.createElement)("div",{...(0,l.useBlockProps)(),className:"testimonial_single section-padding"},(0,t.createElement)("div",{className:"container p-0"},u&&(0,t.createElement)("div",{className:"testimonial_single_inner"},(0,t.createElement)("div",{className:"testimonial_single_inner__heading"},(0,t.createElement)(t.RawHTML,null,u.content.rendered)),(0,t.createElement)("div",{className:"testimonial_single_inner__title"},(0,t.createElement)("p",null,u.title.rendered)),(0,t.createElement)("div",{className:"testimonial_single_inner__location"},(0,t.createElement)(t.RawHTML,null,u.excerpt.rendered))))))}})}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,l),i.exports}l.m=t,e=[],l.O=function(t,n,r,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&i||o>=i)&&Object.keys(l.O).every((function(e){return l.O[e](n[s])}))?n.splice(s--,1):(a=!1,i<o&&(o=i));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,o=n[0],a=n[1],s=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)l.o(a,r)&&(l.m[r]=a[r]);if(s)var u=s(l)}for(t&&t(n);c<o.length;c++)i=o[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(u)},n=self.webpackChunksingle_testimonial=self.webpackChunksingle_testimonial||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=l.O(void 0,[431],(function(){return l(575)}));r=l.O(r)}();