(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Relsa = factory());
}(this, (function () { 'use strict';

  var hasOwnProperty=Object.prototype.hasOwnProperty;function extend(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a}

  function Relsa(a){var b=Math.floor,c=this,d={container:".relsa-container",render:4,startIndex:1,customDotClassName:"",isResponsive:!0};a.render&&(a.render=b(a.render)),a.startIndex&&(a.startIndex=b(a.startIndex)),1>a.render&&(a.render=1),(a.startIndex>a.render||1>a.startIndex)&&(a.startIndex=1),this.options=a instanceof Object?extend(d,a):d,this.generateProportions=function(){// create array
  for(var a,d=[],e=c.options.render,f=+(50/e).toFixed(2),g=0;g<e;g++){a=[];for(var i=0;i<e+1;i++)a.push(f);d.push(a);}var h=e%2;// fill array with values of proportions
  return d.forEach(function(a,c){var d=Math.ceil;return h&&c==d(e/2)-1?(a[c]=f*e,a[c+1]=f*e,!1):void(a[c]=f*(e+(b(e/2)-c)-+!h),a[c+1]=f*(e-(b(e/2)-c)))}),d},this.state={currentActiveItem:c.options.startIndex,node:document.querySelector(c.options.container),proportions:this.generateProportions()},this.render=function(){var b=c.state.node;if(!b||1>c.options.container.length||1>b.length)return console.log("No container found in",c.options.container),!1;b.classList.add("relsa-carousel"),c.options.isResponsive&&b.classList.add("responsive");var d=document.createElement("div"),e=c.options.startIndex-1;d.style.flexBasis=c.state.proportions[e][0]+"%",d.className="relsa-item"+(a.customDotClassName?" "+a.customDotClassName:""),b.appendChild(d);for(var f,g=1;g<c.options.render+1;g++)f=d.cloneNode(),f.innerHTML="<span>"+g+"</span>",f.style.flexBasis=c.state.proportions[e][g]+"%",b.appendChild(f);return this.setActiveClassName(c.options.startIndex),c},this.setActiveClassName=function(a){var b=c.state.node.querySelectorAll(".relsa-item");b.forEach(function(a){return a.classList.remove("active")});var d=b[a].classList.add("active");return d},this.setProportions=function(){var a=c.state.currentActiveItem-1,b=c.state.node.querySelectorAll(".relsa-item");b.forEach(function(b,d){b.style.flexBasis=c.state.proportions[a][d]+"%";});},this.setNext=function(){return c.setActiveItem(c.state.currentActiveItem+1)},this.setPrev=function(){return c.setActiveItem(c.state.currentActiveItem-1)},this.setActiveItem=function(a){return !(1>a||a>c.options.render)&&(c.state.currentActiveItem=a,c.setActiveClassName(c.state.currentActiveItem),c.setProportions(),c.state)};}

  return Relsa;

})));
