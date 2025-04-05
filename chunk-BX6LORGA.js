import{a as u,b as o}from"./chunk-DBVXKFNH.js";import{a as c}from"./chunk-6CGTQFJ6.js";import{b as a}from"./chunk-2WHHOXUH.js";import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var r,i,F,d=t(()=>{n();a();u();c();o();r="hdrIrradianceFilteringPixelShader",i=`#include<helperFunctions>
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
);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;e.ShadersStoreWGSL[r]=i;F={name:r,shader:i}});export{F as a,d as b};
