import{a as x}from"./chunk-ZXTISSJF.js";import{a as s}from"./chunk-4U763SJP.js";import{a as f}from"./chunk-FO4ZHIB5.js";import{a}from"./chunk-ALJ346FT.js";import{a as d,b as p}from"./chunk-A2HDXSVT.js";import{a as l}from"./chunk-MFFZPXDS.js";import{b as m}from"./chunk-FNLHNYAA.js";import{b as u}from"./chunk-MHVTGCOF.js";import{b as r}from"./chunk-TZLS5CGI.js";import{b as c}from"./chunk-UGGPM2TS.js";import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var i,t,A,S=n(()=>{o();r();d();c();f();a();l();m();p();u();s();x();i="colorVertexShader",t=`attribute position: vec3f;
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
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
var worldPos: vec4f=finalWorld* vec4f(input.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[i]=t;A={name:i,shader:t}});export{A as a,S as b};
