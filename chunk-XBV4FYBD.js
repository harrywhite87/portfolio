import{b as T}from"./chunk-W27YSIJ4.js";import{a as S}from"./chunk-YWUR2PYD.js";import{a as f}from"./chunk-YLNL3OUM.js";import{a as D}from"./chunk-DVKT4BHC.js";import{a as M,b as w}from"./chunk-GSEL6DW7.js";import{b as v}from"./chunk-6OWLVBYT.js";import{b as h}from"./chunk-LM7YVWIF.js";import{b as x}from"./chunk-CVT54UUX.js";import{b as V}from"./chunk-U43K2EKK.js";import{b as N}from"./chunk-IRFJOALB.js";import{b as U}from"./chunk-RYQQOO24.js";import{b as p}from"./chunk-NKAZBHMF.js";import{b as u}from"./chunk-X3NXG7VQ.js";import{b as s}from"./chunk-MO66LBYJ.js";import{a as e,b as r}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var A,I,t=o(()=>{"use strict";r();A="sceneVertexDeclaration",I=`uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
uniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;
`;e.IncludesShadersStore[A]=I});var b,W,i=o(()=>{"use strict";r();b="meshVertexDeclaration",W=`uniform mat4 world;uniform float visibility;
`;e.IncludesShadersStore[b]=W});var E,g,a=o(()=>{"use strict";r();t();i();E="shadowMapVertexDeclaration",g=`#include<sceneVertexDeclaration>
#include<meshVertexDeclaration>
`;e.IncludesShadersStore[E]=g});var L,P,n=o(()=>{"use strict";r();f();S();L="shadowMapUboDeclaration",P=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;e.IncludesShadersStore[L]=P});var _,y,d=o(()=>{"use strict";r();_="shadowMapVertexExtraDeclaration",y=`#if SM_NORMALBIAS==1
uniform vec3 lightDataSM;
#endif
uniform vec3 biasAndScaleSM;uniform vec2 depthValuesSM;varying float vDepthMetricSM;
#if SM_USEDISTANCE==1
varying vec3 vPositionWSM;
#endif
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
varying float zSM;
#endif
`;e.IncludesShadersStore[_]=y});var R,O,l=o(()=>{"use strict";r();R="shadowMapVertexNormalBias",O=`#if SM_NORMALBIAS==1
#if SM_DIRECTIONINLIGHTDATA==1
vec3 worldLightDirSM=normalize(-lightDataSM.xyz);
#else
vec3 directionToLightSM=lightDataSM.xyz-worldPos.xyz;vec3 worldLightDirSM=normalize(directionToLightSM);
#endif
float ndlSM=dot(vNormalW,worldLightDirSM);float sinNLSM=sqrt(1.0-ndlSM*ndlSM);float normalBiasSM=biasAndScaleSM.y*sinNLSM;worldPos.xyz-=vNormalW*normalBiasSM;
#endif
`;e.IncludesShadersStore[R]=O});var c,m,xe,z=o(()=>{r();p();M();v();h();s();a();n();d();u();x();V();D();N();w();l();T();U();c="shadowMapVertexShader",m=`attribute vec3 position;
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
}`;e.ShadersStore[c]=m;xe={name:c,shader:m}});export{xe as a,z as b};
