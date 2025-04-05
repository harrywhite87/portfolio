import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as s}from"./chunk-SO6VPFYA.js";var t,r,p,o=s(()=>{n();t="postprocessVertexShader",r=`attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}
`;e.ShadersStoreWGSL[t]=r;p={name:t,shader:r}});export{p as a,o as b};
