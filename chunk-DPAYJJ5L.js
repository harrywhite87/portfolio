import{a,b as c}from"./chunk-TQELINQH.js";import{a as u}from"./chunk-SWOLF7KG.js";import{b as o}from"./chunk-JDF3M24H.js";import{a as r,b as t}from"./chunk-SS6WXUSY.js";import{d as n}from"./chunk-4ZZIO3ZI.js";var e,i,S,p=n(()=>{t();o();a();u();c();e="hdrFilteringPixelShader",i=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;r.ShadersStoreWGSL[e]||(r.ShadersStoreWGSL[e]=i);S={name:e,shader:i}});export{S as a,p as b};
