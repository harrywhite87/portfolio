import{a as c,b as a}from"./chunk-U2MMTLBS.js";import{a as d}from"./chunk-FGRGX3BA.js";import{b as t}from"./chunk-MO66LBYJ.js";import{a as r,b as o}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var e,i,h,l=n(()=>{o();t();c();d();a();e="hdrIrradianceFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform samplerCube inputTexture;
#ifdef IBL_CDF_FILTERING
uniform sampler2D icdfTexture;
#endif
uniform vec2 vFilteringInfo;uniform float hdrScale;varying vec3 direction;void main() {vec3 color=irradiance(inputTexture,direction,vFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfTexture
#endif
);gl_FragColor=vec4(color*hdrScale,1.0);}`;r.ShadersStore[e]=i;h={name:e,shader:i}});export{h as a,l as b};
