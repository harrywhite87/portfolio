import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var t,i,s,f=r(()=>{o();t="layerVertexShader",i=`attribute position: vec2f;uniform scale: vec2f;uniform offset: vec2f;uniform textureMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
var shiftedPosition: vec2f=input.position*uniforms.scale+uniforms.offset;vertexOutputs.vUV=(uniforms.textureMatrix* vec4f(shiftedPosition*madd+madd,1.0,0.0)).xy;vertexOutputs.position= vec4f(shiftedPosition,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[t]=i;s={name:t,shader:i}});export{s as a,f as b};
