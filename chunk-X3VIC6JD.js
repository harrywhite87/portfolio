import{a as d}from"./chunk-WYE52IHK.js";import{a as m}from"./chunk-DQ5IFYWY.js";import{b as c}from"./chunk-O7WTYIII.js";import{b as s}from"./chunk-6HTDPGD7.js";import{b as g}from"./chunk-S6I6UDHN.js";import{a as l}from"./chunk-Y5RP3RSX.js";import{a as o,b as e}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,p,n=r(()=>{"use strict";e();d();m();i="gaussianSplattingFragmentDeclaration",p=`vec4 gaussianColor(vec4 inColor)
{float A=-dot(vPosition,vPosition);if (A<-4.0) discard;float B=exp(A)*inColor.a;
#include<logDepthFragment>
vec3 color=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4(color,B);}
`;o.IncludesShadersStore[i]||(o.IncludesShadersStore[i]=p)});var a,t,y,S=r(()=>{e();c();l();s();n();g();a="gaussianSplattingPixelShader",t=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vec4 vColor;varying vec2 vPosition;
#include<gaussianSplattingFragmentDeclaration>
void main () { 
#include<clipPlaneFragment>
gl_FragColor=gaussianColor(vColor);}
`;o.ShadersStore[a]||(o.ShadersStore[a]=t);y={name:a,shader:t}});export{y as a,S as b};
