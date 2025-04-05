import{a as e,b as d}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var i,r,a,n=o(()=>{d();i="pickingPixelShader",r=`#if defined(INSTANCES)
varying vec4 vMeshID;
#else
uniform vec4 meshID;
#endif
void main(void) {
#if defined(INSTANCES)
gl_FragColor=vMeshID;
#else
gl_FragColor=meshID;
#endif
}`;e.ShadersStore[i]=r;a={name:i,shader:r}});export{a,n as b};
