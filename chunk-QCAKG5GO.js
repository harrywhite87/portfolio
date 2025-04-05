import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,t,n,l=a(()=>{o();r="filterPixelShader",t=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform kernelMatrix: mat4x4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var baseColor: vec3f=textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb;var updatedColor: vec3f=(uniforms.kernelMatrix* vec4f(baseColor,1.0)).rgb;fragmentOutputs.color= vec4f(updatedColor,1.0);}`;e.ShadersStoreWGSL[r]=t;n={name:r,shader:t}});export{n as a,l as b};
