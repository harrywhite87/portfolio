import{a as n}from"./chunk-ZKAVBVS4.js";import{a as s}from"./chunk-ZEU6R3GF.js";import{b as f}from"./chunk-KQNTIX7Y.js";import{a as l}from"./chunk-POT6QY66.js";import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var c,d,i=r(()=>{"use strict";o();c="imageProcessingCompatibility",d=`#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;e.IncludesShadersStore[c]=d});var t,a,h,v=r(()=>{o();f();l();n();s();i();t="spritesPixelShader",a=`#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform bool alphaTest;varying vec4 vColor;varying vec2 vUV;uniform sampler2D diffuseSampler;
#include<fogFragmentDeclaration>
#include<logDepthDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
#ifdef PIXEL_PERFECT
vec2 uvPixelPerfect(vec2 uv) {vec2 res=vec2(textureSize(diffuseSampler,0));uv=uv*res;vec2 seam=floor(uv+0.5);uv=seam+clamp((uv-seam)/fwidth(uv),-0.5,0.5);return uv/res;}
#endif
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#ifdef PIXEL_PERFECT
vec2 uv=uvPixelPerfect(vUV);
#else
vec2 uv=vUV;
#endif
vec4 color=texture2D(diffuseSampler,uv);float fAlphaTest=float(alphaTest);if (fAlphaTest != 0.)
{if (color.a<0.95)
discard;}
color*=vColor;
#include<logDepthFragment>
#include<fogFragment>
gl_FragColor=color;
#include<imageProcessingCompatibility>
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[t]=a;h={name:t,shader:a}});export{i as a,h as b,v as c};
