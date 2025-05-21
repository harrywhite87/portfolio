import{a as e,b as t}from"./chunk-SS6WXUSY.js";import{d as o}from"./chunk-4ZZIO3ZI.js";var r,a,i,S=o(()=>{t();r="passPixelShader",a=`varying vec2 vUV;uniform sampler2D textureSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=texture2D(textureSampler,vUV);}`;e.ShadersStore[r]||(e.ShadersStore[r]=a);i={name:r,shader:a}});export{i as a,S as b};
