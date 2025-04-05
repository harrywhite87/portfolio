import{a as s}from"./chunk-ALJ346FT.js";import{a,b as f}from"./chunk-A2HDXSVT.js";import{a as u}from"./chunk-MFFZPXDS.js";import{b as c}from"./chunk-ET7B2KX7.js";import{b as p}from"./chunk-VMX4JFFR.js";import{b as d}from"./chunk-S3KJLE5G.js";import{b as m}from"./chunk-WQ4ROPD7.js";import{b as l}from"./chunk-FNLHNYAA.js";import{b as o}from"./chunk-TZLS5CGI.js";import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var t,i,A,x=r(()=>{n();o();a();c();p();s();d();m();u();l();f();t="pickingVertexShader",i=`attribute position: vec3f;
#if defined(INSTANCES)
attribute instanceMeshID: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(INSTANCES)
varying vMeshID: vec4f;
#endif
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld*vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#if defined(INSTANCES)
vertexOutputs.vMeshID=input.instanceMeshID;
#endif
}`;e.ShadersStoreWGSL[t]=i;A={name:t,shader:i}});export{A as a,x as b};
