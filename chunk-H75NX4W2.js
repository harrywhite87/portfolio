import{b as a}from"./chunk-CSD7UQPQ.js";import{b as o}from"./chunk-6N5C2HPX.js";import{b as n}from"./chunk-3GCX4PQ7.js";import{a as e,b as t}from"./chunk-SS6WXUSY.js";import{d as s}from"./chunk-4ZZIO3ZI.js";var r,i,m,l=s(()=>{t();o();n();a();r="imageProcessingPixelShader",i=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 result=texture2D(textureSampler,vUV);result.rgb=max(result.rgb,vec3(0.));
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
gl_FragColor=result;}`;e.ShadersStore[r]||(e.ShadersStore[r]=i);m={name:r,shader:i}});export{m as a,l as b};
