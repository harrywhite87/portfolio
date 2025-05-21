import{a as x}from"./chunk-A3GJAJCF.js";import{a as l}from"./chunk-KRT4VFQE.js";import{a as m}from"./chunk-WQOGLHCS.js";import{a as f,b as S}from"./chunk-UXS7NP56.js";import{b as p}from"./chunk-AU7SK2RE.js";import{b as s}from"./chunk-IVWITBTT.js";import{b as u}from"./chunk-FPAXVEJT.js";import{b as v}from"./chunk-MJHMTYLB.js";import{b as V}from"./chunk-2GBTBIQ6.js";import{b as h}from"./chunk-YIWAZ7LK.js";import{b as a}from"./chunk-IF3HN4H2.js";import{b as c}from"./chunk-EGTOBOZI.js";import{a as e,b as o}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var r,E,d=t(()=>{"use strict";o();r="pointCloudVertexDeclaration",E=`#ifdef POINTSIZE
uniform float pointSize;
#endif
`;e.IncludesShadersStore[r]||(e.IncludesShadersStore[r]=E)});var i,n,H,U=t(()=>{o();a();f();p();s();c();l();d();u();v();m();V();S();h();x();i="depthVertexShader",n=`attribute vec3 position;
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
`;e.ShadersStore[i]||(e.ShadersStore[i]=n);H={name:i,shader:n}});export{H as a,U as b};
