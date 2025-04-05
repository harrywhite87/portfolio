import{a as e,b as S}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var r,o,a,F=t(()=>{S();r="depthBoxBlurPixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec2 screenSize;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{vec4 colorDepth=vec4(0.0);for (int x=-OFFSET; x<=OFFSET; x++)
for (int y=-OFFSET; y<=OFFSET; y++)
colorDepth+=texture2D(textureSampler,vUV+vec2(x,y)/screenSize);gl_FragColor=(colorDepth/float((OFFSET*2+1)*(OFFSET*2+1)));}`;e.ShadersStore[r]=o;a={name:r,shader:o}});export{a,F as b};
