import{b as l}from"./chunk-MO66LBYJ.js";import{a as e,b as i}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,o,f,d=a(()=>{i();l();r="layerPixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);
#if defined(CONVERT_TO_GAMMA)
baseColor.rgb=toGammaSpace(baseColor.rgb);
#elif defined(CONVERT_TO_LINEAR)
baseColor.rgb=toLinearSpace(baseColor.rgb);
#endif
#ifdef ALPHATEST
if (baseColor.a<0.4)
discard;
#endif
gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[r]=o;f={name:r,shader:o}});export{f as a,d as b};
