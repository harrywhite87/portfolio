import{b as n}from"./chunk-3GCX4PQ7.js";import{a as e,b as c}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,o,d,l=r(()=>{c();n();i="iblScaledLuminancePixelShader",o=`precision highp sampler2D;precision highp samplerCube;
#include<helperFunctions>
varying vec2 vUV;
#ifdef IBL_USE_CUBE_MAP
uniform samplerCube iblSource;
#else
uniform sampler2D iblSource;
#endif
uniform int iblWidth;uniform int iblHeight;float fetchLuminance(vec2 coords) {
#ifdef IBL_USE_CUBE_MAP
vec3 direction=equirectangularToCubemapDirection(coords);vec3 color=textureCubeLodEXT(iblSource,direction,0.0).rgb;
#else
vec3 color=textureLod(iblSource,coords,0.0).rgb;
#endif
return dot(color,LuminanceEncodeApprox);}
void main(void) {float deform=sin(vUV.y*PI);float luminance=fetchLuminance(vUV);gl_FragColor=vec4(vec3(deform*luminance),1.0);}`;e.ShadersStore[i]||(e.ShadersStore[i]=o);d={name:i,shader:o}});export{d as a,l as b};
