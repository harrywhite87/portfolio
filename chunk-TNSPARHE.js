import{a as u}from"./chunk-ADRD36Q5.js";import{a as p}from"./chunk-VWLO2H7S.js";import{a}from"./chunk-QJBPF4BK.js";import{a as l}from"./chunk-SU5CDZBG.js";import{a as f}from"./chunk-DVKT4BHC.js";import{a as d,b as s}from"./chunk-GSEL6DW7.js";import{b as m}from"./chunk-IRFJOALB.js";import{b as V}from"./chunk-RYQQOO24.js";import{b as t}from"./chunk-NKAZBHMF.js";import{b as c}from"./chunk-X3NXG7VQ.js";import{a as e,b as r}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var i,o,g,E=n(()=>{r();t();d();c();a();l();f();m();s();V();p();u();i="colorVertexShader",o=`attribute vec3 position;
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
}`;e.ShadersStore[i]=o;g={name:i,shader:o}});export{g as a,E as b};
