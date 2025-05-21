import{a as o}from"./chunk-WIAJ462U.js";import{b as f}from"./chunk-L5DS73E3.js";import{b as l}from"./chunk-3A6RKXCW.js";import{a as n}from"./chunk-QKJPKFVP.js";import{a as e,b as a}from"./chunk-SS6WXUSY.js";import{d as i}from"./chunk-4ZZIO3ZI.js";var r,t,s,m=i(()=>{a();f();n();l();o();r="outlinePixelShader",t=`uniform color: vec4f;
#ifdef ALPHATEST
varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (textureSample(diffuseSampler,diffuseSamplerSampler,fragmentInputs.vUV).a<0.4) {discard;}
#endif
#include<logDepthFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=t);s={name:r,shader:t}});export{s as a,m as b};
