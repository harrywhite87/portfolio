import{a as e,b as p}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var a,r,S,s=t(()=>{p();a="displayPassPixelShader",r=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var passSamplerSampler: sampler;var passSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(passSampler,passSamplerSampler,input.vUV);}`;e.ShadersStoreWGSL[a]=r;S={name:a,shader:r}});export{S as a,s as b};
