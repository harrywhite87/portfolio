import{a as c}from"./chunk-SU5CDZBG.js";import{a as p}from"./chunk-DVKT4BHC.js";import{a,b as h}from"./chunk-GSEL6DW7.js";import{b as d}from"./chunk-6OWLVBYT.js";import{b as s}from"./chunk-LM7YVWIF.js";import{b as l}from"./chunk-CVT54UUX.js";import{b as m}from"./chunk-U43K2EKK.js";import{b as u}from"./chunk-IRFJOALB.js";import{b as n}from"./chunk-NKAZBHMF.js";import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var i,t,A,S=r(()=>{o();n();a();d();s();c();l();m();p();u();h();i="pickingVertexShader",t=`attribute vec3 position;
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
}`;e.ShadersStore[i]=t;A={name:i,shader:t}});export{A as a,S as b};
