import{a,b as c}from"./chunk-Q4ACAESO.js";import{a as l}from"./chunk-MUL22ZGX.js";import{b as t}from"./chunk-3GCX4PQ7.js";import{a as r,b as o}from"./chunk-SS6WXUSY.js";import{d as n}from"./chunk-4ZZIO3ZI.js";var i,e,f,d=n(()=>{o();t();a();l();c();i="hdrFilteringPixelShader",e=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform float alphaG;uniform samplerCube inputTexture;uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=radiance(alphaG,inputTexture,direction,vFilteringInfo);gl_FragColor=vec4(color*hdrScale,1.0);}`;r.ShadersStore[i]||(r.ShadersStore[i]=e);f={name:i,shader:e}});export{f as a,d as b};
