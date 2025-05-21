import{a as p}from"./chunk-DLLKGQOR.js";import{a as E}from"./chunk-A5DHMGE6.js";import{a}from"./chunk-F6ATPLJG.js";import{a as c}from"./chunk-KRT4VFQE.js";import{a as f}from"./chunk-WQOGLHCS.js";import{a as d,b as s}from"./chunk-UXS7NP56.js";import{b as m}from"./chunk-2GBTBIQ6.js";import{b as V}from"./chunk-YIWAZ7LK.js";import{b as t}from"./chunk-IF3HN4H2.js";import{b as l}from"./chunk-EGTOBOZI.js";import{a as e,b as n}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,o,g,u=r(()=>{n();t();d();l();a();c();f();m();s();V();E();p();i="colorVertexShader",o=`attribute vec3 position;
#ifdef VERTEXCOLOR
attribute vec4 color;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#ifdef FOG
uniform mat4 view;
#endif
#include<instancesDeclaration>
uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
varying vec4 vColor;
#endif
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef VERTEXCOLOR
vec4 colorUpdated=color;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(position,1.0);
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*worldPos;} else {gl_Position=viewProjectionR*worldPos;}
#else
gl_Position=viewProjection*worldPos;
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<vertexColorMixing>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[i]||(e.ShadersStore[i]=o);g={name:i,shader:o}});export{g as a,u as b};
