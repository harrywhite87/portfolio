import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,o,l,n=a(()=>{t();r="ssaoCombinePixelShader",o=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;var originalColorSampler: sampler;var originalColor: texture_2d<f32>;uniform viewport: vec4f;
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
var ssaoColor: vec4f=textureSample(textureSampler,textureSamplerSampler,uniforms.viewport.xy+input.vUV*uniforms.viewport.zw);var sceneColor: vec4f=textureSample(originalColor,originalColorSampler,input.vUV);fragmentOutputs.color=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;e.ShadersStoreWGSL[r]=o;l={name:r,shader:o}});export{l as a,n as b};
