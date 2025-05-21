import{b as i}from"./chunk-3GCX4PQ7.js";import{a as e,b as c}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var o,r,s,a=t(()=>{c();i();o="copyTextureToTexturePixelShader",r=`uniform float conversion;uniform sampler2D textureSampler;varying vec2 vUV;
#include<helperFunctions>
void main(void) 
{vec4 color=texture2D(textureSampler,vUV);
#ifdef DEPTH_TEXTURE
gl_FragDepth=color.r;
#else
if (conversion==1.) {color=toLinearSpace(color);} else if (conversion==2.) {color=toGammaSpace(color);}
gl_FragColor=color;
#endif
}
`;e.ShadersStore[o]||(e.ShadersStore[o]=r);s={name:o,shader:r}});export{s as a,a as b};
