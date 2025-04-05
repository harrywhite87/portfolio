import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var n,r,S,d=o(()=>{t();n="boundingBoxRendererPixelShader",r=`uniform color: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
fragmentOutputs.color=uniforms.color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStoreWGSL[n]=r;S={name:n,shader:r}});export{S as a,d as b};
