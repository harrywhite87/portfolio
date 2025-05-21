import{a as m}from"./chunk-WIAJ462U.js";import{b as a}from"./chunk-L5DS73E3.js";import{b as l}from"./chunk-3A6RKXCW.js";import{a as o}from"./chunk-QKJPKFVP.js";import{a as e,b as i}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var n,r,s,c=t(()=>{i();a();o();m();l();n="linePixelShader",r=`#include<clipPlaneFragmentDeclaration>
uniform color: vec4f;
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[n]||(e.ShadersStoreWGSL[n]=r);s={name:n,shader:r}});export{s as a,c as b};
