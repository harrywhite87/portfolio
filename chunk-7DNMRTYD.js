import{b as a}from"./chunk-66GN6STB.js";import{b as o}from"./chunk-KZMMENIX.js";import{b as n}from"./chunk-MO66LBYJ.js";import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as s}from"./chunk-SO6VPFYA.js";var r,i,u,l=s(()=>{t();o();n();a();r="imageProcessingPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 result=texture2D(textureSampler,vUV);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result.rgb=toLinearSpace(result.rgb);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
gl_FragColor=result;}`;e.ShadersStore[r]=i;u={name:r,shader:i}});export{u as a,l as b};
