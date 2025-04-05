import{a as o,b as i}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,e,c,l=a(()=>{i();r="oitBackBlendPixelShader",e=`precision highp float;uniform sampler2D uBackColor;void main() {glFragColor=texelFetch(uBackColor,ivec2(gl_FragCoord.xy),0);if (glFragColor.a==0.0) { 
discard;}}`;o.ShadersStore[r]=e;c={name:r,shader:e}});export{c as a,l as b};
