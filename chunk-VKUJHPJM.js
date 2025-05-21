import{a as l}from"./chunk-YXNV5GTR.js";import{a as i,b as f}from"./chunk-XBYCNKQV.js";import{a as s}from"./chunk-G5DN7MJ6.js";import{b as d}from"./chunk-GRSRJZF5.js";import{b as m}from"./chunk-ZPCXJOIM.js";import{b as c}from"./chunk-L6FTKB7A.js";import{b as p}from"./chunk-JSTJE7YL.js";import{b as v}from"./chunk-T5ULCAUH.js";import{b as n}from"./chunk-GFDHCHOS.js";import{a as e,b as a}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var r,o,C,u=t(()=>{a();n();i();d();m();l();c();p();s();v();f();r="meshUVSpaceRendererVertexShader",o=`attribute position: vec3f;attribute normal: vec3f;attribute uv: vec2f;uniform projMatrix: mat4x4f;varying vDecalTC: vec2f;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;var normalUpdated: vec3f=input.normal;
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);var vNormalW: vec3f;
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vNormalW=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vNormalW=normalize(normWorldSM*normalUpdated);
#endif
var normalView: vec3f=normalize((uniforms.projMatrix* vec4f(vNormalW,0.0)).xyz);var decalTC: vec3f=(uniforms.projMatrix*worldPos).xyz;vertexOutputs.vDecalTC=decalTC.xy;vertexOutputs.position=vec4f(input.uv*2.0-1.0,select(decalTC.z,2.,normalView.z>0.0),1.0);}`;e.ShadersStoreWGSL[r]||(e.ShadersStoreWGSL[r]=o);C={name:r,shader:o}});export{C as a,u as b};
