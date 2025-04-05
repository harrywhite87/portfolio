import{a as t,b as r}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var e,i,u,n=o(()=>{r();e="iblVoxelGridVertexShader",i=`attribute position: vec3f;attribute normal: vec3f;varying vNormalizedPosition: vec3f;uniform world: mat4x4f;uniform invWorldScale: mat4x4f;uniform viewMatrix: mat4x4f;@vertex
fn main(input : VertexInputs)->FragmentInputs {vertexOutputs.position=uniforms.viewMatrix*uniforms.invWorldScale*uniforms.world* vec4f(input.position,1.);vertexOutputs.vNormalizedPosition=vertexOutputs.position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
vertexOutputs.position=vec4f(vertexOutputs.position.x,vertexOutputs.position.y,vertexOutputs.position.z*0.5+0.5,vertexOutputs.position.w);
#endif
}`;t.ShadersStoreWGSL[e]=i;u={name:e,shader:i}});export{u as a,n as b};
