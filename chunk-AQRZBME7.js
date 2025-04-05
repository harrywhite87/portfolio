import{a}from"./chunk-L4CYZ2LP.js";import{a as e,b as r}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var s,u,n=t(()=>{"use strict";r();s="kernelBlurVertex",u="vertexOutputs.sampleCoord{X}=vertexOutputs.sampleCenter+uniforms.delta*KERNEL_OFFSET{X};";e.IncludesShadersStoreWGSL[s]=u});var o,i,f,d=t(()=>{r();a();n();o="kernelBlurVertexShader",i=`attribute position: vec2f;uniform delta: vec2f;varying sampleCenter: vec2f;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.sampleCenter=(input.position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[o]=i;f={name:o,shader:i}});export{f as a,d as b};
