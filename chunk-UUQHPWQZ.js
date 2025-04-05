import{a as d}from"./chunk-ZKAVBVS4.js";import{b as t}from"./chunk-J4HULUOK.js";import{b as a}from"./chunk-VEMZTVVL.js";import{a as l}from"./chunk-POT6QY66.js";import{a as e,b as r}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var i,n,f,c=o(()=>{r();t();l();d();a();i="linePixelShader",n=`#include<clipPlaneFragmentDeclaration>
uniform vec4 color;
#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<logDepthFragment>
#include<clipPlaneFragment>
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[i]=n;f={name:i,shader:n}});export{f as a,c as b};
