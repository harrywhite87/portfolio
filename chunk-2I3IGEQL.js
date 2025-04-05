import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var i,r,c,n=t(()=>{o();i="hdrFilteringVertexShader",r=`attribute vec2 position;varying vec3 direction;uniform vec3 up;uniform vec3 right;uniform vec3 front;
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
mat3 view=mat3(up,right,front);direction=view*vec3(position,1.0);gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;e.ShadersStore[i]=r;c={name:i,shader:r}});export{c as a,n as b};
