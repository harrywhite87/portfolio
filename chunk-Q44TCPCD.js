import{b as n}from"./chunk-4NPYFG24.js";import{b as l}from"./chunk-HG3VIM4J.js";import{b as i}from"./chunk-JDF3M24H.js";import{a as e,b as s}from"./chunk-SS6WXUSY.js";import{d as a}from"./chunk-4ZZIO3ZI.js";var r,t,c,u=a(()=>{s();n();i();l();r="imageProcessingPixelShader",t=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<imageProcessingDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var result: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);result=vec4f(max(result.rgb,vec3f(0.)),result.a);
#ifdef IMAGEPROCESSING
#ifndef FROMLINEARSPACE
result=vec4f(toLinearSpaceVec3(result.rgb),result.a);
#endif
result=applyImageProcessing(result);
#else
#ifdef FROMLINEARSPACE
result=applyImageProcessing(result);
#endif
#endif
fragmentOutputs.color=result;}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=t);c={name:r,shader:t}});export{c as a,u as b};
