import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var t,i,s,o=r(()=>{n();t="fluidRenderingParticleThicknessVertexShader",i=`attribute position: vec3f;attribute offset: vec2f;uniform view: mat4x4f;uniform projection: mat4x4f;uniform size: vec2f;varying uv: vec2f;@vertex
fn main(input: VertexInputs)->FragmentInputs {var cornerPos: vec3f=vec3f(
vec2f(input.offset.x-0.5,input.offset.y-0.5)*uniforms.size,
0.0
);var viewPos: vec3f=(uniforms.view*vec4f(input.position,1.0)).xyz+cornerPos;vertexOutputs.position=uniforms.projection*vec4f(viewPos,1.0);vertexOutputs.uv=input.offset;}
`;e.ShadersStoreWGSL[t]=i;s={name:t,shader:i}});export{s as a,o as b};
