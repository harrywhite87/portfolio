import{a as e,b as d}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var r,c,f,x=i(()=>{d();r="iblCdfxPixelShader",c=`precision highp sampler2D;
#define PI 3.1415927
varying vec2 vUV;uniform sampler2D cdfy;void main(void) {ivec2 cdfyRes=textureSize(cdfy,0);ivec2 currentPixel=ivec2(gl_FragCoord.xy);float cdfx=0.0;for (int x=1; x<=currentPixel.x; x++) {cdfx+=texelFetch(cdfy,ivec2(x-1,cdfyRes.y-1),0).x;}
gl_FragColor=vec4(vec3(cdfx),1.0);}`;e.ShadersStore[r]=c;f={name:r,shader:c}});export{f as a,x as b};
