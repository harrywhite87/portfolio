import{a as d}from"./chunk-WYE52IHK.js";import{b as t}from"./chunk-O7WTYIII.js";import{b as a}from"./chunk-S6I6UDHN.js";import{a as l}from"./chunk-Y5RP3RSX.js";import{a as e,b as n}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,o,T,c=r(()=>{n();t();l();d();a();i="linePixelShader",o=`#include<clipPlaneFragmentDeclaration>
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
}`;e.ShadersStore[i]||(e.ShadersStore[i]=o);T={name:i,shader:o}});export{T as a,c as b};
