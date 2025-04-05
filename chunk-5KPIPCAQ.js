import{a as l,b as c}from"./chunk-U2MMTLBS.js";import{a}from"./chunk-FGRGX3BA.js";import{b as t}from"./chunk-MO66LBYJ.js";import{a as r,b as o}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var i,e,f,d=n(()=>{o();t();l();a();c();i="hdrFilteringPixelShader",e=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform float alphaG;uniform samplerCube inputTexture;uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=radiance(alphaG,inputTexture,direction,vFilteringInfo);gl_FragColor=vec4(color*hdrScale,1.0);}`;r.ShadersStore[i]=e;f={name:i,shader:e}});export{f as a,d as b};
