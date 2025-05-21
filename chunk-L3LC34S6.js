import{a as e,b as S}from"./chunk-SS6WXUSY.js";import{d as a}from"./chunk-4ZZIO3ZI.js";var r,t,l,n=a(()=>{S();r="lensFlarePixelShader",t=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var baseColor: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);fragmentOutputs.color=baseColor*uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=t);l={name:r,shader:t}});export{l as a,n as b};
