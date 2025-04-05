import{a as e,b as c}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var r,a,i,l=o(()=>{c();r="meshUVSpaceRendererPixelShader",a=`precision highp float;varying vec2 vDecalTC;uniform sampler2D textureSampler;void main(void) {if (vDecalTC.x<0. || vDecalTC.x>1. || vDecalTC.y<0. || vDecalTC.y>1.) {discard;}
gl_FragColor=texture2D(textureSampler,vDecalTC);}
`;e.ShadersStore[r]=a;i={name:r,shader:a}});export{i as a,l as b};
