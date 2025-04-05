import{a as t,b as o}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var e,r,i,n=a(()=>{o();e="oitBackBlendPixelShader",r=`var uBackColor: texture_2d<f32>;@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=textureLoad(uBackColor,vec2i(fragmentInputs.position.xy),0);if (fragmentOutputs.color.a==0.0) {discard;}}
`;t.ShadersStoreWGSL[e]=r;i={name:e,shader:r}});export{i as a,n as b};
