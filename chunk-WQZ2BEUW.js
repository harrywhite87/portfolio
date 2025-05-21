import{a as S}from"./chunk-DQ5IFYWY.js";import{b as d}from"./chunk-O7WTYIII.js";import{b as l}from"./chunk-6HTDPGD7.js";import{b as a}from"./chunk-S6I6UDHN.js";import{a as e,b as n}from"./chunk-SS6WXUSY.js";import{d as i}from"./chunk-4ZZIO3ZI.js";var o,r,O,f=i(()=>{n();d();l();a();S();o="colorPixelShader",r=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vec4 vColor;
#else
uniform vec4 color;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
gl_FragColor=vColor;
#else
gl_FragColor=color;
#endif
#include<fogFragment>(color,gl_FragColor)
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[o]||(e.ShadersStore[o]=r);O={name:o,shader:r}});export{O as a,f as b};
