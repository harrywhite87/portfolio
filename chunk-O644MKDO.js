import{b as L}from"./chunk-4G45S5EJ.js";import{a as c,b as V}from"./chunk-XBYCNKQV.js";import{a as h}from"./chunk-G5DN7MJ6.js";import{a as S}from"./chunk-VNPX227B.js";import{a as s}from"./chunk-E72UFCPK.js";import{b as p}from"./chunk-GRSRJZF5.js";import{b as u}from"./chunk-ZPCXJOIM.js";import{b as M}from"./chunk-L6FTKB7A.js";import{b as x}from"./chunk-JSTJE7YL.js";import{b as N}from"./chunk-T5ULCAUH.js";import{b as W}from"./chunk-GF4NH2MX.js";import{b as m}from"./chunk-GFDHCHOS.js";import{b as v}from"./chunk-UNHO7PZR.js";import{b as l}from"./chunk-JDF3M24H.js";import{a as e,b as i}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var t,T,a=r(()=>{"use strict";i();t="shadowMapVertexExtraDeclaration",T=`#if SM_NORMALBIAS==1
uniform lightDataSM: vec3f;
#endif
uniform biasAndScaleSM: vec3f;uniform depthValuesSM: vec2f;varying vDepthMetricSM: f32;
#if SM_USEDISTANCE==1
varying vPositionWSM: vec3f;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying zSM: f32;
#endif
`;e.IncludesShadersStoreWGSL[t]||(e.IncludesShadersStoreWGSL[t]=T)});var n,U,d=r(()=>{"use strict";i();n="shadowMapVertexNormalBias",U=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
var worldLightDirSM: vec3f=normalize(-uniforms.lightDataSM.xyz);
#else
var directionToLightSM: vec3f=uniforms.lightDataSM.xyz-worldPos.xyz;var worldLightDirSM: vec3f=normalize(directionToLightSM);
#endif
var ndlSM: f32=dot(vNormalW,worldLightDirSM);var sinNLSM: f32=sqrt(1.0-ndlSM*ndlSM);var normalBiasSM: f32=uniforms.biasAndScaleSM.y*sinNLSM;worldPos=vec4f(worldPos.xyz-vNormalW*normalBiasSM,worldPos.w);
#endif
`;e.IncludesShadersStoreWGSL[n]||(e.IncludesShadersStoreWGSL[n]=U)});var o,f,K,w=r(()=>{i();m();c();p();u();l();s();S();a();v();M();x();h();N();V();d();L();W();o="shadowMapVertexShader",f=`attribute position: vec3f;
#ifdef NORMAL
attribute normal: vec3f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute world0: vec4f;attribute world1: vec4f;attribute world2: vec4f;attribute world3: vec4f;
#endif
#include<helperFunctions>
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
#ifdef ALPHATEXTURE
varying vUV: vec2f;uniform diffuseMatrix: mat4x4f;
#ifdef UV1
attribute uv: vec2f;
#endif
#ifdef UV2
attribute uv2: vec2f;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=input.position;
#ifdef UV1
var uvUpdated: vec2f=input.uv;
#endif
#ifdef UV2
var uv2Updated: vec2f=input.uv2;
#endif
#ifdef NORMAL
var normalUpdated: vec3f=input.normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);
#ifdef NORMAL
var normWorldSM: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
var vNormalW: vec3f=normalUpdated/ vec3f(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
var vNormalW: vec3f=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
vertexOutputs.position=scene.viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;
#endif
#ifdef UV2
vertexOutputs.vUV= (uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;
#endif
#endif
#include<clipPlaneVertex>
}`;e.ShadersStoreWGSL[o]||(e.ShadersStoreWGSL[o]=f);K={name:o,shader:f}});export{K as a,w as b};
