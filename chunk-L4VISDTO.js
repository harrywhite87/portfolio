import{a as e,b as p}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var r,a,m,s=t(()=>{p();r="displayPassPixelShader",a=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var passSamplerSampler: sampler;var passSampler: texture_2d<f32>;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureSample(passSampler,passSamplerSampler,input.vUV);}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=a);m={name:r,shader:a}});export{m as a,s as b};
