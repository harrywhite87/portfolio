import{b as n}from"./chunk-2WHHOXUH.js";import{a as e,b as a}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var r,t,p,u=o(()=>{a();n();r="copyTextureToTexturePixelShader",t=`uniform conversion: f32;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;varying vUV: vec2f;
#include<helperFunctions>
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {var color: vec4f=textureSample(textureSampler,textureSamplerSampler,input.vUV);
#ifdef DEPTH_TEXTURE
fragmentOutputs.fragDepth=color.r;
#else
if (uniforms.conversion==1.) {color=toLinearSpaceVec4(color);} else if (uniforms.conversion==2.) {color=toGammaSpace(color);}
fragmentOutputs.color=color;
#endif
}
`;e.ShadersStoreWGSL[r]=t;p={name:r,shader:t}});export{p as a,u as b};
