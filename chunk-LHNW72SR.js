import{b as u}from"./chunk-JDF3M24H.js";import{a as e,b as o}from"./chunk-SS6WXUSY.js";import{d as a}from"./chunk-4ZZIO3ZI.js";var r,t,s,n=a(()=>{o();u();r="extractHighlightsPixelShader",t=`#include<helperFunctions>
varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform threshold: f32;uniform exposure: f32;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);var luma: f32=dot(LuminanceEncodeApprox,fragmentOutputs.color.rgb*uniforms.exposure);fragmentOutputs.color=vec4f(step(uniforms.threshold,luma)*fragmentOutputs.color.rgb,fragmentOutputs.color.a);}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=t);s={name:r,shader:t}});export{s as a,n as b};
