import{a as e,b as t}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var i,o,n,a=r(()=>{t();i="lensFlareVertexShader",o=`attribute vec2 position;uniform mat4 viewportMatrix;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vUV=position*madd+madd;gl_Position=viewportMatrix*vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[i]||(e.ShadersStore[i]=o);n={name:i,shader:o}});export{n as a,a as b};
