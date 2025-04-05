import{a as e,b as r}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var i,o,d,a=t(()=>{r();i="lensFlareVertexShader",o=`attribute vec2 position;uniform mat4 viewportMatrix;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=viewportMatrix*vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[i]=o;d={name:i,shader:o}});export{d as a,a as b};
