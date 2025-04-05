import{a}from"./chunk-ALJ346FT.js";import{a as o,b as x}from"./chunk-A2HDXSVT.js";import{a as c}from"./chunk-MFFZPXDS.js";import{b as u}from"./chunk-ET7B2KX7.js";import{b as v}from"./chunk-VMX4JFFR.js";import{b as s}from"./chunk-S3KJLE5G.js";import{b as p}from"./chunk-WQ4ROPD7.js";import{b as m}from"./chunk-FNLHNYAA.js";import{b as l}from"./chunk-MHVTGCOF.js";import{b as n}from"./chunk-TZLS5CGI.js";import{b as d}from"./chunk-UGGPM2TS.js";import{a as e,b as f}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var i,t,b,V=r(()=>{f();n();o();u();v();d();a();s();p();c();m();x();l();i="glowMapGenerationVertexShader",t=`attribute position: vec3f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;varying vPosition: vec4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#ifdef DIFFUSE
varying vUVDiffuse: vec2f;uniform diffuseMatrix: mat4x4f;
#endif
#ifdef OPACITY
varying vUVOpacity: vec2f;uniform opacityMatrix: mat4x4f;
#endif
#ifdef EMISSIVE
varying vUVEmissive: vec2f;uniform emissiveMatrix: mat4x4f;
#endif
#ifdef VERTEXALPHA
attribute color: vec4f;varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef CUBEMAP
vertexOutputs.vPosition=worldPos;vertexOutputs.position=uniforms.viewProjection*finalWorld* vec4f(input.position,1.0);
#else
vertexOutputs.vPosition=uniforms.viewProjection*worldPos;vertexOutputs.position=vertexOutputs.vPosition;
#endif
#ifdef DIFFUSE
#ifdef DIFFUSEUV1
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef DIFFUSEUV2
vertexOutputs.vUVDiffuse= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef OPACITY
#ifdef OPACITYUV1
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef OPACITYUV2
vertexOutputs.vUVOpacity= (uniforms.opacityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef EMISSIVE
#ifdef EMISSIVEUV1
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef EMISSIVEUV2
vertexOutputs.vUVEmissive= (uniforms.emissiveMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#ifdef VERTEXALPHA
vertexOutputs.vColor=vertexInputs.color;
#endif
#include<clipPlaneVertex>
}`;e.ShadersStoreWGSL[i]=t;b={name:i,shader:t}});export{b as a,V as b};
