import{b as i}from"./chunk-MO66LBYJ.js";import{a as e,b as c}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var o,r,m,l=t(()=>{c();i();o="copyTextureToTexturePixelShader",r=`uniform float conversion;uniform sampler2D textureSampler;varying vec2 vUV;
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
`;e.ShadersStore[o]=r;m={name:o,shader:r}});export{m as a,l as b};
