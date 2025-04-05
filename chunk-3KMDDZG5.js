import{a as S}from"./chunk-G6ERAMNN.js";import{a as f}from"./chunk-SU5CDZBG.js";import{a as v}from"./chunk-DVKT4BHC.js";import{a,b as V}from"./chunk-GSEL6DW7.js";import{b as c}from"./chunk-6OWLVBYT.js";import{b as p}from"./chunk-LM7YVWIF.js";import{b as s}from"./chunk-CVT54UUX.js";import{b as u}from"./chunk-U43K2EKK.js";import{b as m}from"./chunk-IRFJOALB.js";import{b as x}from"./chunk-RYQQOO24.js";import{b as n}from"./chunk-NKAZBHMF.js";import{b as l}from"./chunk-X3NXG7VQ.js";import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var h,E,o=i(()=>{"use strict";t();h="pointCloudVertexDeclaration",E=`#ifdef POINTSIZE
uniform float pointSize;
#endif
`;e.IncludesShadersStore[h]=E});var r,d,H,U=i(()=>{t();n();a();c();p();l();f();o();s();u();v();m();V();x();S();r="depthVertexShader",d=`attribute vec3 position;
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#include<clipPlaneVertexDeclaration>
#include<instancesDeclaration>
uniform mat4 viewProjection;uniform vec2 depthValues;
#if defined(ALPHATEST) || defined(NEED_UV)
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#ifdef STORE_CAMERASPACE_Z
uniform mat4 view;varying vec4 vViewPos;
#endif
#include<pointCloudVertexDeclaration>
varying float vDepthMetric;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#include<clipPlaneVertex>
gl_Position=viewProjection*worldPos;
#ifdef STORE_CAMERASPACE_Z
vViewPos=view*worldPos;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
vDepthMetric=((-gl_Position.z+depthValues.x)/(depthValues.y));
#else
vDepthMetric=((gl_Position.z+depthValues.x)/(depthValues.y));
#endif
#endif
#if defined(ALPHATEST) || defined(BASIC_RENDER)
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<pointCloudVertex>
}
`;e.ShadersStore[r]=d;H={name:r,shader:d}});export{H as a,U as b};
