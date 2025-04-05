import{a as r,b as t}from"./chunk-PJTN5MCN.js";import{d as l}from"./chunk-SO6VPFYA.js";var e,o,g,m=l(()=>{t();e="bloomMergePixelShader",o=`uniform sampler2D textureSampler;uniform sampler2D bloomBlur;varying vec2 vUV;uniform float bloomWeight;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(textureSampler,vUV);vec3 blurred=texture2D(bloomBlur,vUV).rgb;gl_FragColor.rgb=gl_FragColor.rgb+(blurred.rgb*bloomWeight); }
`;r.ShadersStore[e]=o;g={name:e,shader:o}});export{g as a,m as b};
