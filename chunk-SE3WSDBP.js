import{a as o,b as c}from"./chunk-TQELINQH.js";import{a as u}from"./chunk-SWOLF7KG.js";import{b as a}from"./chunk-JDF3M24H.js";import{a as e,b as n}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var r,i,s,d=t(()=>{n();a();o();u();c();r="hdrIrradianceFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;
#ifdef IBL_CDF_FILTERING
var icdfTextureSampler: sampler;var icdfTexture: texture_2d<f32>;
#endif
uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=irradiance(inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo
#ifdef IBL_CDF_FILTERING
,icdfTexture,icdfTextureSampler
#endif
);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=i);s={name:r,shader:i}});export{s as a,d as b};
