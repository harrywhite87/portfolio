import{a as n}from"./chunk-WYE52IHK.js";import{a as c}from"./chunk-DQ5IFYWY.js";import{b as f}from"./chunk-6HTDPGD7.js";import{a as s}from"./chunk-Y5RP3RSX.js";import{a as e,b as i}from"./chunk-SS6WXUSY.js";import{d as o}from"./chunk-4ZZIO3ZI.js";var t,d,a=o(()=>{"use strict";i();t="imageProcessingCompatibility",d=`#ifdef IMAGEPROCESSINGPOSTPROCESS
gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));
#endif
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=d)});var r,l,T,v=o(()=>{i();f();s();n();c();a();r="spritesPixelShader",l=`#ifdef LOGARITHMICDEPTH
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
}`;e.ShadersStore[r]||(e.ShadersStore[r]=l);T={name:r,shader:l}});export{a,T as b,v as c};
