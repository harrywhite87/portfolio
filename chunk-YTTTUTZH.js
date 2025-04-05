import{a as U}from"./chunk-OB4R7C5T.js";import{a as f}from"./chunk-ALJ346FT.js";import{a,b as x}from"./chunk-A2HDXSVT.js";import{a as m}from"./chunk-MFFZPXDS.js";import{a as s}from"./chunk-5SLLER2Z.js";import{b as u}from"./chunk-ET7B2KX7.js";import{b as p}from"./chunk-VMX4JFFR.js";import{b as c}from"./chunk-S3KJLE5G.js";import{b as l}from"./chunk-WQ4ROPD7.js";import{b as v}from"./chunk-FNLHNYAA.js";import{b as V}from"./chunk-MHVTGCOF.js";import{b as n}from"./chunk-TZLS5CGI.js";import{b as d}from"./chunk-UGGPM2TS.js";import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var t,i,W,S=r(()=>{o();n();a();u();p();d();f();s();c();l();m();v();x();V();U();t="outlineVertexShader",i=`attribute position: vec3f;attribute normal: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
uniform offset: f32;
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#ifdef ALPHATEST
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f; 
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input: VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;var normalUpdated: vec3f=vertexInputs.normal;
#ifdef UV1
var uvUpdated: vec2f=vertexInputs.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=vertexInputs.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
var offsetPosition: vec3f=positionUpdated+(normalUpdated*uniforms.offset);
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(offsetPosition,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#ifdef ALPHATEST
#ifdef UV1
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV=(uniforms.diffuseMatrix*vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
#include<logDepthVertex>
}
`;e.ShadersStoreWGSL[t]=i;W={name:t,shader:i}});export{W as a,S as b};
