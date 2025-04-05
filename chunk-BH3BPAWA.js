import{a as v}from"./chunk-OB4R7C5T.js";import{a}from"./chunk-ALJ346FT.js";import{a as l}from"./chunk-MFFZPXDS.js";import{a as d}from"./chunk-5SLLER2Z.js";import{a as c}from"./chunk-OKYO6MK2.js";import{a as o}from"./chunk-KV7MZCIT.js";import{b as s}from"./chunk-MHVTGCOF.js";import{b as f}from"./chunk-UGGPM2TS.js";import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var i,n,N,m=r(()=>{t();a();f();o();c();d();l();s();v();i="lineVertexShader",n=`#define ADDITIONAL_VERTEX_DECLARATION
#include<instancesDeclaration>
#include<clipPlaneVertexDeclaration>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
attribute position: vec3f;attribute normal: vec4f;uniform width: f32;uniform aspectRatio: f32;
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
var worldViewProjection: mat4x4f=scene.viewProjection*finalWorld;var viewPosition: vec4f=worldViewProjection* vec4f(input.position,1.0);var viewPositionNext: vec4f=worldViewProjection* vec4f(input.normal.xyz,1.0);var currentScreen: vec2f=viewPosition.xy/viewPosition.w;var nextScreen: vec2f=viewPositionNext.xy/viewPositionNext.w;currentScreen=vec2f(currentScreen.x*uniforms.aspectRatio,currentScreen.y);nextScreen=vec2f(nextScreen.x*uniforms.aspectRatio,nextScreen.y);var dir: vec2f=normalize(nextScreen-currentScreen);var normalDir: vec2f= vec2f(-dir.y,dir.x);normalDir*=uniforms.width/2.0;normalDir=vec2f(normalDir.x/uniforms.aspectRatio,normalDir.y);var offset: vec4f= vec4f(normalDir*input.normal.w,0.0,0.0);vertexOutputs.position=viewPosition+offset;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);
#include<clipPlaneVertex>
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[i]=n;N={name:i,shader:n}});export{N as a,m as b};
