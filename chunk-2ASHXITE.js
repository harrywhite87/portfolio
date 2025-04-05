import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var t,r,a,o=i(()=>{n();t="meshUVSpaceRendererFinaliserVertexShader",r=`attribute position: vec3f;attribute uv: vec2f;uniform worldViewProjection: mat4x4f;varying vUV: vec2f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.worldViewProjection* vec4f(input.position,1.0);vertexOutputs.positionvUV=input.uv;}
`;e.ShadersStoreWGSL[t]=r;a={name:t,shader:r}});export{a,o as b};
