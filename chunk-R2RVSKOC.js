import{a as s}from"./chunk-ZKAVBVS4.js";import{a as d}from"./chunk-ZEU6R3GF.js";import{b as l}from"./chunk-J4HULUOK.js";import{b as c}from"./chunk-KQNTIX7Y.js";import{b as g}from"./chunk-VEMZTVVL.js";import{a as t}from"./chunk-POT6QY66.js";import{a as o,b as r}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var m,p,i=a(()=>{"use strict";r();s();d();m="gaussianSplattingFragmentDeclaration",p=`vec4 gaussianColor(vec4 inColor)
{float A=-dot(vPosition,vPosition);if (A<-4.0) discard;float B=exp(A)*inColor.a;
#include<logDepthFragment>
vec3 color=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4(color,B);}
`;o.IncludesShadersStore[m]=p});var n,e,y,u=a(()=>{r();l();t();c();i();g();n="gaussianSplattingPixelShader",e=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vec4 vColor;varying vec2 vPosition;
#include<gaussianSplattingFragmentDeclaration>
void main () { 
#include<clipPlaneFragment>
gl_FragColor=gaussianColor(vColor);}
`;o.ShadersStore[n]=e;y={name:n,shader:e}});export{y as a,u as b};
