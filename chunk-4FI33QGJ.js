import{a as n}from"./chunk-N4GDF6MX.js";import{a as s}from"./chunk-IYE2BRVS.js";import{b as m}from"./chunk-JTH72UWR.js";import{a as o}from"./chunk-5SLLER2Z.js";import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var p,u,i=r(()=>{"use strict";t();p="imageProcessingCompatibility",u=`#ifdef IMAGEPROCESSINGPOSTPROCESS
fragmentOutputs.color=vec4f(pow(fragmentOutputs.color.rgb, vec3f(2.2)),fragmentOutputs.color.a);
#endif
`;e.IncludesShadersStoreWGSL[p]=u});var a,f,E,c=r(()=>{t();m();o();n();s();i();a="spritesPixelShader",f=`uniform alphaTest: i32;varying vColor: vec4f;varying vUV: vec2f;var diffuseSamplerSampler: sampler;var diffuseSampler: texture_2d<f32>;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
fn uvPixelPerfect(uv: vec2f)->vec2f {var res: vec2f= vec2f(textureDimensions(diffuseSampler,0));var uvTemp=uv*res;var seam: vec2f=floor(uvTemp+0.5);uvTemp=seam+clamp((uvTemp-seam)/fwidth(uvTemp),vec2f(-0.5),vec2f(0.5));return uvTemp/res;}
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
var uv: vec2f=uvPixelPerfect(input.vUV);
#else
var uv: vec2f=input.vUV;
#endif
var color: vec4f=textureSample(diffuseSampler,diffuseSamplerSampler,uv);var fAlphaTest: f32= f32(uniforms.alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95) {discard;}}
color*=input.vColor;
#include<logDepthFragment>
#include<fogFragment>
fragmentOutputs.color=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[a]=f;E={name:a,shader:f}});export{E as a,c as b};
