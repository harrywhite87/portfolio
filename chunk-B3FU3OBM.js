import{b as l}from"./chunk-BONCDMWT.js";import{b as o}from"./chunk-O7WTYIII.js";import{b as a}from"./chunk-S6I6UDHN.js";import{a as e,b as f}from"./chunk-SS6WXUSY.js";import{d}from"./chunk-4ZZIO3ZI.js";var i,r,s,n=d(()=>{f();o();l();a();i="depthPixelShader",r=`#ifdef ALPHATEST
varying vec2 vUV;uniform sampler2D diffuseSampler;
#endif
#include<clipPlaneFragmentDeclaration>
varying float vDepthMetric;
#ifdef PACKED
#include<packingFunctions>
#endif
#ifdef STORE_CAMERASPACE_Z
varying vec4 vViewPos;
#endif
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{
#include<clipPlaneFragment>
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#ifdef STORE_CAMERASPACE_Z
#ifdef PACKED
gl_FragColor=pack(vViewPos.z);
#else
gl_FragColor=vec4(vViewPos.z,0.0,0.0,1.0);
#endif
#else
#ifdef NONLINEARDEPTH
#ifdef PACKED
gl_FragColor=pack(gl_FragCoord.z);
#else
gl_FragColor=vec4(gl_FragCoord.z,0.0,0.0,0.0);
#endif
#else
#ifdef PACKED
gl_FragColor=pack(vDepthMetric);
#else
gl_FragColor=vec4(vDepthMetric,0.0,0.0,1.0);
#endif
#endif
#endif
}`;e.ShadersStore[i]||(e.ShadersStore[i]=r);s={name:i,shader:r}});export{s as a,n as b};
