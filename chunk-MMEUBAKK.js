import{a as t,b as o}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var e,r,i,n=a(()=>{o();e="taaPixelShader",r=`var textureSampler: texture_2d<f32>;var historySampler: texture_2d<f32>;uniform factor: f32;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {let c=textureLoad(textureSampler,vec2<i32>(fragmentInputs.position.xy),0);let h=textureLoad(historySampler,vec2<i32>(fragmentInputs.position.xy),0);fragmentOutputs.color= mix(h,c,uniforms.factor);}
`;t.ShadersStoreWGSL[e]=r;i={name:e,shader:r}});export{i as a,n as b};
