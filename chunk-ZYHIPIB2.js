import{a as d}from"./chunk-KRT4VFQE.js";import{a as p}from"./chunk-WQOGLHCS.js";import{a,b as h}from"./chunk-UXS7NP56.js";import{b as c}from"./chunk-AU7SK2RE.js";import{b as s}from"./chunk-IVWITBTT.js";import{b as l}from"./chunk-FPAXVEJT.js";import{b as m}from"./chunk-MJHMTYLB.js";import{b as u}from"./chunk-2GBTBIQ6.js";import{b as n}from"./chunk-IF3HN4H2.js";import{a as e,b as o}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,t,A,S=r(()=>{o();n();a();c();s();d();l();m();p();u();h();i="pickingVertexShader",t=`attribute vec3 position;
#if defined(INSTANCES)
attribute vec4 instanceMeshID;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<instancesDeclaration>
uniform mat4 viewProjection;
#if defined(INSTANCES)
varying vec4 vMeshID;
#endif
void main(void) {
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;
#if defined(INSTANCES)
vMeshID=instanceMeshID;
#endif
}`;e.ShadersStore[i]||(e.ShadersStore[i]=t);A={name:i,shader:t}});export{A as a,S as b};
