import{a as e,b as i}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var n,r,o,s=t(()=>{i();n="pickingPixelShader",r=`#if defined(INSTANCES)
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
}`;e.ShadersStoreWGSL[n]||(e.ShadersStoreWGSL[n]=r);o={name:n,shader:r}});export{o as a,s as b};
