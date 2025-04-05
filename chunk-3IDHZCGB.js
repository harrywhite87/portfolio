import{a as u,b as c}from"./chunk-DBVXKFNH.js";import{a}from"./chunk-6CGTQFJ6.js";import{b as o}from"./chunk-2WHHOXUH.js";import{a as r,b as t}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var e,n,h,p=i(()=>{t();o();u();a();c();e="hdrFilteringPixelShader",n=`#include<helperFunctions>
#include<importanceSampling>
#include<pbrBRDFFunctions>
#include<hdrFilteringFunctions>
uniform alphaG: f32;var inputTextureSampler: sampler;var inputTexture: texture_cube<f32>;uniform vFilteringInfo: vec2f;uniform hdrScale: f32;varying direction: vec3f;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec3f=radiance(uniforms.alphaG,inputTexture,inputTextureSampler,input.direction,uniforms.vFilteringInfo);fragmentOutputs.color= vec4f(color*uniforms.hdrScale,1.0);}`;r.ShadersStoreWGSL[e]=n;h={name:e,shader:n}});export{h as a,p as b};
