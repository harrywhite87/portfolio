import{a as i}from"./chunk-62Z6UULF.js";import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var d,l,t=r(()=>{"use strict";n();d="kernelBlurVertex",l="sampleCoord{X}=sampleCenter+delta*KERNEL_OFFSET{X};";e.IncludesShadersStore[d]=l});var o,a,E,s=r(()=>{n();i();t();o="kernelBlurVertexShader",a=`attribute vec2 position;uniform vec2 delta;varying vec2 sampleCenter;
#include<kernelBlurVaryingDeclaration>[0..varyingCount]
const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
sampleCenter=(position*madd+madd);
#include<kernelBlurVertex>[0..varyingCount]
gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[o]=a;E={name:o,shader:a}});export{E as a,s as b};
