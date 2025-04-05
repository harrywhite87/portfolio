import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as s}from"./chunk-SO6VPFYA.js";var r,a,m,i=s(()=>{o();r="displayPassPixelShader",a=`varying vec2 vUV;uniform sampler2D textureSampler;uniform sampler2D passSampler;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void)
{gl_FragColor=texture2D(passSampler,vUV);}`;e.ShadersStore[r]=a;m={name:r,shader:a}});export{m as a,i as b};
