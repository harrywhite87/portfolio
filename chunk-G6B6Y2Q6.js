import{a as d}from"./chunk-WYE52IHK.js";import{a as f}from"./chunk-DQ5IFYWY.js";import{b as p}from"./chunk-CSD7UQPQ.js";import{b as s}from"./chunk-O7WTYIII.js";import{b as m}from"./chunk-6HTDPGD7.js";import{b as c}from"./chunk-S6I6UDHN.js";import{a as n}from"./chunk-Y5RP3RSX.js";import{b as t}from"./chunk-6N5C2HPX.js";import{b as i}from"./chunk-3GCX4PQ7.js";import{a as e,b as l}from"./chunk-SS6WXUSY.js";import{d as o}from"./chunk-4ZZIO3ZI.js";var r,a,A,g=o(()=>{l();s();t();n();i();p();m();c();d();f();r="particlesPixelShader",a=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
varying vec2 vUV;varying vec4 vColor;uniform vec4 textureMask;uniform sampler2D diffuseSampler;
#include<clipPlaneFragmentDeclaration>
#include<imageProcessingDeclaration>
#include<logDepthDeclaration>
#include<helperFunctions>
#include<imageProcessingFunctions>
#ifdef RAMPGRADIENT
varying vec4 remapRanges;uniform sampler2D rampSampler;
#endif
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
vec4 textureColor=texture2D(diffuseSampler,vUV);vec4 baseColor=(textureColor*textureMask+(vec4(1.,1.,1.,1.)-textureMask))*vColor;
#ifdef RAMPGRADIENT
float alpha=baseColor.a;float remappedColorIndex=clamp((alpha-remapRanges.x)/remapRanges.y,0.0,1.0);vec4 rampColor=texture2D(rampSampler,vec2(1.0-remappedColorIndex,0.));baseColor.rgb*=rampColor.rgb;float finalAlpha=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-remapRanges.z)/remapRanges.w,0.0,1.0);
#endif
#ifdef BLENDMULTIPLYMODE
float sourceAlpha=vColor.a*textureColor.a;baseColor.rgb=baseColor.rgb*sourceAlpha+vec3(1.0)*(1.0-sourceAlpha);
#endif
#include<logDepthFragment>
#include<fogFragment>(color,baseColor)
#ifdef IMAGEPROCESSINGPOSTPROCESS
baseColor.rgb=toLinearSpace(baseColor.rgb);
#else
#ifdef IMAGEPROCESSING
baseColor.rgb=toLinearSpace(baseColor.rgb);baseColor=applyImageProcessing(baseColor);
#endif
#endif
gl_FragColor=baseColor;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[r]||(e.ShadersStore[r]=a);A={name:r,shader:a}});export{A as a,g as b};
