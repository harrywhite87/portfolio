import{a as e,b as p}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,t,n,S=a(()=>{p();r="passPixelShader",t=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vUV);}`;e.ShadersStoreWGSL[r]=t;n={name:r,shader:t}});export{n as a,S as b};
