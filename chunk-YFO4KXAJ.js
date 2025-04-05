import{a as m}from"./chunk-N4GDF6MX.js";import{b as a}from"./chunk-M2QO3XUK.js";import{b as l}from"./chunk-WMDC7UFR.js";import{a as o}from"./chunk-5SLLER2Z.js";import{a as e,b as i}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var n,r,g,c=t(()=>{i();a();o();m();l();n="linePixelShader",r=`#include<clipPlaneFragmentDeclaration>
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
}`;e.ShadersStoreWGSL[n]=r;g={name:n,shader:r}});export{g as a,c as b};
