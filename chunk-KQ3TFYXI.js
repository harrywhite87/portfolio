import{b as n}from"./chunk-MO66LBYJ.js";import{a as e,b as d}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var r,o,l,a=t(()=>{d();n();r="rgbdEncodePixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`;e.ShadersStore[r]=o;l={name:r,shader:o}});export{l as a,a as b};
