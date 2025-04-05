import{a as e,b as i}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var n,t,o,s=r(()=>{i();n="pickingPixelShader",t=`#if defined(INSTANCES)
varying vMeshID: vec4f;
#else
uniform meshID: vec4f;
#endif
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#if defined(INSTANCES)
fragmentOutputs.color=input.vMeshID;
#else
fragmentOutputs.color=uniforms.meshID;
#endif
}`;e.ShadersStoreWGSL[n]=t;o={name:n,shader:t}});export{o as a,s as b};
