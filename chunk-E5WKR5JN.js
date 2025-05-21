import{b as g}from"./chunk-EOTIZTCM.js";import{a as x}from"./chunk-VEPHNLML.js";import{a as v}from"./chunk-OZFRLUQ2.js";import{a as A}from"./chunk-WQOGLHCS.js";import{a as D,b as W}from"./chunk-UXS7NP56.js";import{b as w}from"./chunk-AU7SK2RE.js";import{b as I}from"./chunk-IVWITBTT.js";import{b as U}from"./chunk-FPAXVEJT.js";import{b as T}from"./chunk-MJHMTYLB.js";import{b}from"./chunk-2GBTBIQ6.js";import{b as E}from"./chunk-YIWAZ7LK.js";import{b as V}from"./chunk-IF3HN4H2.js";import{b as N}from"./chunk-EGTOBOZI.js";import{b as h}from"./chunk-3GCX4PQ7.js";import{a as e,b as o}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,L,a=r(()=>{"use strict";o();i="sceneVertexDeclaration",L=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;
`;e.IncludesShadersStore[i]||(e.IncludesShadersStore[i]=L)});var n,P,d=r(()=>{"use strict";o();n="meshVertexDeclaration",P=`uniform mat4 world;uniform float visibility;
`;e.IncludesShadersStore[n]||(e.IncludesShadersStore[n]=P)});var l,_,c=r(()=>{"use strict";o();a();d();l="shadowMapVertexDeclaration",_=`#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;e.IncludesShadersStore[l]||(e.IncludesShadersStore[l]=_)});var s,y,m=r(()=>{"use strict";o();v();x();s="shadowMapUboDeclaration",y=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;e.IncludesShadersStore[s]||(e.IncludesShadersStore[s]=y)});var S,R,f=r(()=>{"use strict";o();S="shadowMapVertexExtraDeclaration",R=`#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;e.IncludesShadersStore[S]||(e.IncludesShadersStore[S]=R)});var p,O,u=r(()=>{"use strict";o();p="shadowMapVertexNormalBias",O=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);float sinNLSM=sqrt(1.0-ndlSM*ndlSM);float normalBiasSM=biasAndScaleSM.y*sinNLSM;worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;e.IncludesShadersStore[p]||(e.IncludesShadersStore[p]=O)});var t,M,xe,z=r(()=>{o();V();D();w();I();h();c();m();f();N();U();T();A();b();W();u();g();E();t="shadowMapVertexShader",M=`attribute vec3 position;
#ifdef NORMAL
attribute vec3 normal;
#endif
#include<bonesDeclaration>
#include<bakedVertexAnimationDeclaration>
#include<morphTargetsVertexGlobalDeclaration>
#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]
#ifdef INSTANCES
attribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;
#endif
#include<helperFunctions>
#include<__decl__shadowMapVertex>
#ifdef ALPHATEXTURE
varying vec2 vUV;uniform mat4 diffuseMatrix;
#ifdef UV1
attribute vec2 uv;
#endif
#ifdef UV2
attribute vec2 uv2;
#endif
#endif
#include<shadowMapVertexExtraDeclaration>
#include<clipPlaneVertexDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void)
{vec3 positionUpdated=position;
#ifdef UV1
vec2 uvUpdated=uv;
#endif
#ifdef UV2
vec2 uv2Updated=uv2;
#endif
#ifdef NORMAL
vec3 normalUpdated=normal;
#endif
#include<morphTargetsVertexGlobal>
#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]
#include<instancesVertex>
#include<bonesVertex>
#include<bakedVertexAnimation>
vec4 worldPos=finalWorld*vec4(positionUpdated,1.0);
#ifdef NORMAL
mat3 normWorldSM=mat3(finalWorld);
#if defined(INSTANCES) && defined(THIN_INSTANCES)
vec3 vNormalW=normalUpdated/vec3(dot(normWorldSM[0],normWorldSM[0]),dot(normWorldSM[1],normWorldSM[1]),dot(normWorldSM[2],normWorldSM[2]));vNormalW=normalize(normWorldSM*vNormalW);
#else
#ifdef NONUNIFORMSCALING
normWorldSM=transposeMat3(inverseMat3(normWorldSM));
#endif
vec3 vNormalW=normalize(normWorldSM*normalUpdated);
#endif
#endif
#include<shadowMapVertexNormalBias>
gl_Position=viewProjection*worldPos;
#include<shadowMapVertexMetric>
#ifdef ALPHATEXTURE
#ifdef UV1
vUV=vec2(diffuseMatrix*vec4(uvUpdated,1.0,0.0));
#endif
#ifdef UV2
vUV=vec2(diffuseMatrix*vec4(uv2Updated,1.0,0.0));
#endif
#endif
#include<clipPlaneVertex>
}`;e.ShadersStore[t]||(e.ShadersStore[t]=M);xe={name:t,shader:M}});export{xe as a,z as b};
