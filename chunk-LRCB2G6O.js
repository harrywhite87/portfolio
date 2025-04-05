import{a as i,b as t}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var o,e,d,n=r(()=>{t();o="iblVoxelGridVertexShader",e=`attribute vec3 position;attribute vec3 normal;varying vec3 vNormalizedPosition;uniform mat4 world;uniform mat4 invWorldScale;uniform mat4 viewMatrix;void main(void) {gl_Position=viewMatrix*invWorldScale*world*vec4(position,1.);vNormalizedPosition.xyz=gl_Position.xyz*0.5+0.5;
#ifdef IS_NDC_HALF_ZRANGE
gl_Position.z=gl_Position.z*0.5+0.5;
#endif
}`;i.ShadersStore[o]=e;d={name:o,shader:e}});export{d as a,n as b};
