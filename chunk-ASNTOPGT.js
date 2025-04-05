import{a as m}from"./chunk-N4GDF6MX.js";import{b as f}from"./chunk-M2QO3XUK.js";import{b as l}from"./chunk-WMDC7UFR.js";import{a}from"./chunk-5SLLER2Z.js";import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var r,t,s,o=i(()=>{n();f();a();l();m();r="outlinePixelShader",t=`uniform color: vec4f;
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
}`;e.ShadersStoreWGSL[r]=t;s={name:r,shader:t}});export{s as a,o as b};
