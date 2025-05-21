import{a as e,b as t}from"./chunk-SS6WXUSY.js";import{d as o}from"./chunk-4ZZIO3ZI.js";var r,a,l,c=o(()=>{t();r="meshUVSpaceRendererPixelShader",a=`precision highp float;varying vec2 vDecalTC;uniform sampler2D textureSampler;void main(void) {if (vDecalTC.x<0. || vDecalTC.x>1. || vDecalTC.y<0. || vDecalTC.y>1.) {discard;}
gl_FragColor=texture2D(textureSampler,vDecalTC);}
`;e.ShadersStore[r]||(e.ShadersStore[r]=a);l={name:r,shader:a}});export{l as a,c as b};
