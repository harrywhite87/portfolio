import{b as a}from"./chunk-MO66LBYJ.js";import{a as r,b as l}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var e,o,h,i=t(()=>{l();a();e="extractHighlightsPixelShader",o=`#include<helperFunctions>
varying vec2 vUV;uniform sampler2D textureSampler;uniform float threshold;uniform float exposure;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);float luma=dot(LuminanceEncodeApprox,gl_FragColor.rgb*exposure);gl_FragColor.rgb=step(threshold,luma)*gl_FragColor.rgb;}`;r.ShadersStore[e]=o;h={name:e,shader:o}});export{h as a,i as b};
