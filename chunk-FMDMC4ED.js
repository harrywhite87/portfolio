import{a as e,b as d}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var o,i,n,r=t(()=>{d();o="glowMapMergeVertexShader",i=`attribute vec2 position;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[o]=i;n={name:o,shader:i}});export{n as a,r as b};
