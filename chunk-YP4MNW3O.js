import{b as m}from"./chunk-2WHHOXUH.js";import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,t,u,p=a(()=>{n();m();r="rgbdEncodePixelShader",t=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`;e.ShadersStoreWGSL[r]=t;u={name:r,shader:t}});export{u as a,p as b};
