import{a as x}from"./chunk-2FK3LCP2.js";import{a as s}from"./chunk-BOMKHDQX.js";import{a as f}from"./chunk-T7DHRQ66.js";import{a}from"./chunk-YXNV5GTR.js";import{a as d,b as m}from"./chunk-XBYCNKQV.js";import{a as l}from"./chunk-G5DN7MJ6.js";import{b as p}from"./chunk-T5ULCAUH.js";import{b as u}from"./chunk-GF4NH2MX.js";import{b as n}from"./chunk-GFDHCHOS.js";import{b as c}from"./chunk-UNHO7PZR.js";import{a as e,b as o}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,t,b,S=r(()=>{o();n();d();c();f();a();l();p();m();u();s();x();i="colorVertexShader",t=`attribute position: vec3f;
#ifdef VERTEXCOLOR
attribute color: vec4f;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform view: mat4x4f;
#endif
#include<instancesDeclaration>
uniform viewProjection: mat4x4f;
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vColor: vec4f;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
var colorUpdated: vec4f=vertexInputs.color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[i]||(e.ShadersStoreWGSL[i]=t);b={name:i,shader:t}});export{b as a,S as b};
