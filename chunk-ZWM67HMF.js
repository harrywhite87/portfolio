import{a}from"./chunk-IYE2BRVS.js";import{b as t}from"./chunk-M2QO3XUK.js";import{b as d}from"./chunk-JTH72UWR.js";import{b as f}from"./chunk-WMDC7UFR.js";import{a as e,b as i}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var n,r,N,l=o(()=>{i();t();d();f();a();n="colorPixelShader",r=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vColor: vec4f;
#else
uniform color: vec4f;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
fragmentOutputs.color=input.vColor;
#else
fragmentOutputs.color=uniforms.color;
#endif
#include<fogFragment>(color,fragmentOutputs.color)
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[n]=r;N={name:n,shader:r}});export{N as a,l as b};
