import{b as n}from"./chunk-MO66LBYJ.js";import{a as r,b as t}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var e,a,m,i=o(()=>{t();n();e="grainPixelShader",a=`#include<helperFunctions>
uniform sampler2D textureSampler; 
uniform float intensity;uniform float animatedSeed;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec2 seed=vUV*(animatedSeed);float grain=dither(seed,intensity);float lum=getLuminance(gl_FragColor.rgb);float grainAmount=(cos(-PI+(lum*PI*2.))+1.)/2.;gl_FragColor.rgb+=grain*grainAmount;gl_FragColor.rgb=max(gl_FragColor.rgb,0.0);}`;r.ShadersStore[e]=a;m={name:e,shader:a}});export{m as a,i as b};
