import{a as o,b as t}from"./chunk-SS6WXUSY.js";import{d as a}from"./chunk-4ZZIO3ZI.js";var e,r,m,l=a(()=>{t();e="lodPixelShader",r=`#extension GL_EXT_shader_texture_lod : enable
precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)
{gl_FragColor=texture2DLodEXT(textureSampler,vUV,lod);if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}
`;o.ShadersStore[e]||(o.ShadersStore[e]=r);m={name:e,shader:r}});export{m as a,l as b};
