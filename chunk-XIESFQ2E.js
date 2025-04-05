import{a as g}from"./chunk-N4GDF6MX.js";import{a as p}from"./chunk-IYE2BRVS.js";import{b as l}from"./chunk-M2QO3XUK.js";import{b as s}from"./chunk-JTH72UWR.js";import{b as c}from"./chunk-WMDC7UFR.js";import{a}from"./chunk-5SLLER2Z.js";import{a as n,b as o}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var m,u,e=t(()=>{"use strict";o();g();p();m="gaussianSplattingFragmentDeclaration",u=`fn gaussianColor(inColor: vec4f,inPosition: vec2f)->vec4f
{var A : f32=-dot(inPosition,inPosition);if (A>-4.0)
{var B: f32=exp(A)*inColor.a;
#include<logDepthFragment>
var color: vec3f=inColor.rgb;
#ifdef FOG
#include<fogFragment>
#endif
return vec4f(color,B);} else {return vec4f(0.0);}}
`;n.IncludesShadersStoreWGSL[m]=u});var i,r,L,f=t(()=>{o();l();a();s();e();c();i="gaussianSplattingPixelShader",r=`#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#include<fogFragmentDeclaration>
varying vColor: vec4f;varying vPosition: vec2f;
#include<gaussianSplattingFragmentDeclaration>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#include<clipPlaneFragment>
fragmentOutputs.color=gaussianColor(input.vColor,input.vPosition);}
`;n.ShadersStoreWGSL[i]=r;L={name:i,shader:r}});export{L as a,f as b};
