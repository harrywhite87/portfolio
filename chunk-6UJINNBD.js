import{a as t}from"./chunk-ZKAVBVS4.js";import{b as d}from"./chunk-J4HULUOK.js";import{b as l}from"./chunk-VEMZTVVL.js";import{a}from"./chunk-POT6QY66.js";import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var i,r,_,f=n(()=>{o();d();a();l();t();i="outlinePixelShader",r=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform vec4 color;
#ifdef ALPHATEST
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#include<logDepthFragment>
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[i]=r;_={name:i,shader:r}});export{_ as a,f as b};
