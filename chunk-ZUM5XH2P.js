import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var t,i,s,r=n(()=>{o();t="proceduralVertexShader",i=`attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vPosition=input.position;vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position= vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[t]=i;s={name:t,shader:i}});export{s as a,r as b};
