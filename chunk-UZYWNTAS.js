import{a as e,b as l}from"./chunk-PJTN5MCN.js";import{d as a}from"./chunk-SO6VPFYA.js";var r,o,i,n=a(()=>{l();r="lensFlarePixelShader",o=`varying vec2 vUV;uniform sampler2D textureSampler;uniform vec4 color;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 baseColor=texture2D(textureSampler,vUV);gl_FragColor=baseColor*color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[r]=o;i={name:r,shader:o}});export{i as a,n as b};
