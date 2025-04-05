import{a as p}from"./chunk-2PVXTZ46.js";import{a as m}from"./chunk-POT6QY66.js";import{a as l}from"./chunk-YWUR2PYD.js";import{a}from"./chunk-YLNL3OUM.js";import{a as d}from"./chunk-SU5CDZBG.js";import{a as P}from"./chunk-DVKT4BHC.js";import{b as f}from"./chunk-RYQQOO24.js";import{b as s}from"./chunk-X3NXG7VQ.js";import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var v,x,t=i(()=>{"use strict";o();v="lineVertexDeclaration",x=`uniform mat4 viewProjection;
#define ADDITIONAL_VERTEX_DECLARATION
`;e.IncludesShadersStore[v]=x});var S,u,n=i(()=>{"use strict";o();a();l();S="lineUboDeclaration",u=`layout(std140,column_major) uniform;
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`;e.IncludesShadersStore[S]=u});var r,c,O,w=i(()=>{o();t();n();d();s();m();P();f();p();r="lineVertexShader",c=`#include<__decl__lineVertex>
#include<instancesDeclaration>
#include<clipPlaneVertexDeclaration>
attribute vec3 position;attribute vec4 normal;uniform float width;uniform float aspectRatio;
#include<logDepthDeclaration>
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
#include<instancesVertex>
mat4 worldViewProjection=viewProjection*finalWorld;vec4 viewPosition=worldViewProjection*vec4(position,1.0);vec4 viewPositionNext=worldViewProjection*vec4(normal.xyz,1.0);vec2 currentScreen=viewPosition.xy/viewPosition.w;vec2 nextScreen=viewPositionNext.xy/viewPositionNext.w;currentScreen.x*=aspectRatio;nextScreen.x*=aspectRatio;vec2 dir=normalize(nextScreen-currentScreen);vec2 normalDir=vec2(-dir.y,dir.x);normalDir*=width/2.0;normalDir.x/=aspectRatio;vec4 offset=vec4(normalDir*normal.w,0.0,0.0);gl_Position=viewPosition+offset;
#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)
vec4 worldPos=finalWorld*vec4(position,1.0);
#include<clipPlaneVertex>
#endif
#include<logDepthVertex>
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[r]=c;O={name:r,shader:c}});export{O as a,w as b};
