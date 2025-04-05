import{a as e,b as s}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var o,t,n,r=i(()=>{s();o="postprocessVertexShader",t=`attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[o]=t;n={name:o,shader:t}});export{n as a,r as b};
