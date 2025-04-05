import{a as c}from"./chunk-ZEU6R3GF.js";import{b as d}from"./chunk-J4HULUOK.js";import{b as l}from"./chunk-KQNTIX7Y.js";import{b as a}from"./chunk-VEMZTVVL.js";import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var o,r,O,f=i(()=>{n();d();l();a();c();o="colorPixelShader",r=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
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
}`;e.ShadersStore[o]=r;O={name:o,shader:r}});export{O as a,f as b};
