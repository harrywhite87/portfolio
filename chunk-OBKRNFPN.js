import{a as e,b as p}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,t,l,n=a(()=>{p();r="meshUVSpaceRendererPixelShader",t=`varying vDecalTC: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {if (input.vDecalTC.x<0. || input.vDecalTC.x>1. || input.vDecalTC.y<0. || input.vDecalTC.y>1.) {discard;}
fragmentOutputs.color=textureSample(textureSampler,textureSamplerSampler,input.vDecalTC);}
`;e.ShadersStoreWGSL[r]=t;l={name:r,shader:t}});export{l as a,n as b};
