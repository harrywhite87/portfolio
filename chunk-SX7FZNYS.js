import{a as e,b as i}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var t,r,s,o=n(()=>{i();t="lensFlareVertexShader",r=`attribute position: vec2f;uniform viewportMatrix: mat4x4f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
@vertex
fn main(input : VertexInputs)->FragmentInputs {
#define CUSTOM_VERTEX_MAIN_BEGIN
vertexOutputs.vUV=input.position*madd+madd;vertexOutputs.position=uniforms.viewportMatrix* vec4f(input.position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStoreWGSL[t]=r;s={name:t,shader:r}});export{s as a,o as b};
