import{b as a}from"./chunk-MO66LBYJ.js";import{a as e,b as d}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var r,o,S,i=t(()=>{d();a();r="rgbdDecodePixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}`;e.ShadersStore[r]=o;S={name:r,shader:o}});export{S as a,i as b};
