import{a as s}from"./chunk-YXNV5GTR.js";import{a,b as f}from"./chunk-XBYCNKQV.js";import{a as u}from"./chunk-G5DN7MJ6.js";import{b as c}from"./chunk-GRSRJZF5.js";import{b as d}from"./chunk-ZPCXJOIM.js";import{b as p}from"./chunk-L6FTKB7A.js";import{b as m}from"./chunk-JSTJE7YL.js";import{b as l}from"./chunk-T5ULCAUH.js";import{b as o}from"./chunk-GFDHCHOS.js";import{a as e,b as n}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var t,i,A,S=r(()=>{n();o();a();c();d();s();p();m();u();l();f();t="pickingVertexShader",i=`attribute position: vec3f;
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
}`;e.ShadersStoreWGSL[t]||(e.ShadersStoreWGSL[t]=i);A={name:t,shader:i}});export{A as a,S as b};
