import{a as N}from"./chunk-QMC53BKB.js";import{a as M}from"./chunk-QNS27NX7.js";import{a as E}from"./chunk-Y5RP3RSX.js";import{a as R}from"./chunk-A5DHMGE6.js";import{a as s}from"./chunk-F6ATPLJG.js";import{a as l}from"./chunk-KRT4VFQE.js";import{a as I}from"./chunk-WQOGLHCS.js";import{a as c,b as p}from"./chunk-UXS7NP56.js";import{b as D}from"./chunk-3GIGS3D3.js";import{b as m}from"./chunk-4WK3TV5U.js";import{b as u}from"./chunk-AY5YLNWB.js";import{b as V}from"./chunk-2GBTBIQ6.js";import{b as U}from"./chunk-YIWAZ7LK.js";import{b as a}from"./chunk-IF3HN4H2.js";import{b as v}from"./chunk-EGTOBOZI.js";import{b as d}from"./chunk-3GCX4PQ7.js";import{a as e,b as o}from"./chunk-SS6WXUSY.js";import{d as n}from"./chunk-4ZZIO3ZI.js";var r,_,t=n(()=>{"use strict";o();r="backgroundVertexDeclaration",_=`uniform mat4 view;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform float shadowLevel;
#ifdef DIFFUSE
uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;
#endif
#ifdef REFLECTION
uniform vec2 vReflectionInfos;uniform mat4 reflectionMatrix;uniform vec3 vReflectionMicrosurfaceInfos;uniform float fFovMultiplier;
#endif
#ifdef POINTSIZE
uniform float pointSize;
#endif
`;e.IncludesShadersStore[r]||(e.IncludesShadersStore[r]=_)});var i,f,K,S=n(()=>{o();t();N();d();a();c();l();v();s();m();u();E();I();V();p();U();R();D();M();i="backgroundVertexShader",f=`precision highp float;
#include<__decl__backgroundVertex>
#include<helperFunctions>
attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<instancesDeclaration>
varying vec3 vPositionW;
#ifdef NORMAL
varying vec3 vNormalW;
#endif
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#ifdef MAINUV1
varying vec2 vMainUV1;
#endif
#ifdef MAINUV2
varying vec2 vMainUV2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
varying vec2 vDiffuseUV;
#endif
#include<clipPlaneVertexDeclaration>
#include<fogVertexDeclaration>
#include<__decl__lightVxFragment>[0..maxSimultaneousLights]
#ifdef REFLECTIONMAP_SKYBOX
varying vec3 vPositionUVW;
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
varying vec3 vDirectionW;
#endif
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#ifdef REFLECTIONMAP_SKYBOX
vPositionUVW=position;
#endif
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
#ifdef MULTIVIEW
if (gl_ViewID_OVR==0u) {gl_Position=viewProjection*finalWorld*vec4(position,1.0);} else {gl_Position=viewProjectionR*finalWorld*vec4(position,1.0);}
#else
gl_Position=viewProjection*finalWorld*vec4(position,1.0);
#endif
vec4 worldPos=finalWorld*vec4(position,1.0);vPositionW=vec3(worldPos);
#ifdef NORMAL
mat3 normalWorld=mat3(finalWorld);
#ifdef NONUNIFORMSCALING
normalWorld=transposeMat3(inverseMat3(normalWorld));
#endif
vNormalW=normalize(normalWorld*normal);
#endif
#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)
vDirectionW=normalize(vec3(finalWorld*vec4(position,0.0)));
#ifdef EQUIRECTANGULAR_RELFECTION_FOV
mat3 screenToWorld=inverseMat3(mat3(finalWorld*viewProjection));vec3 segment=mix(vDirectionW,screenToWorld*vec3(0.0,0.0,1.0),abs(fFovMultiplier-1.0));if (fFovMultiplier<=1.0) {vDirectionW=normalize(segment);} else {vDirectionW=normalize(vDirectionW+(vDirectionW-segment));}
#endif
#endif
#ifndef UV1
vec2 uv=vec2(0.,0.);
#endif
#ifndef UV2
vec2 uv2=vec2(0.,0.);
#endif
#ifdef MAINUV1
vMainUV1=uv;
#endif
#ifdef MAINUV2
vMainUV2=uv2;
#endif
#if defined(DIFFUSE) && DIFFUSEDIRECTUV==0
if (vDiffuseInfos.x==0.)
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}
else
{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}
#endif
#include<clipPlaneVertex>
#include<fogVertex>
#include<shadowsVertex>[0..maxSimultaneousLights]
#ifdef VERTEXCOLOR
vColor=colorUpdated;
#endif
#if defined(POINTSIZE) && !defined(WEBGPU)
gl_PointSize=pointSize;
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}
`;e.ShadersStore[i]||(e.ShadersStore[i]=f);K={name:i,shader:f}});export{K as a,S as b};
