import{a as e,b as a}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var r,i,c,l=o(()=>{a();r="fluidRenderingParticleDepthPixelShader",i=`uniform mat4 projection;varying vec2 uv;varying vec3 viewPos;varying float sphereRadius;
#ifdef FLUIDRENDERING_VELOCITY
varying float velocityNorm;
#endif
void main(void) {vec3 normal;normal.xy=uv*2.0-1.0;float r2=dot(normal.xy,normal.xy);if (r2>1.0) discard;normal.z=sqrt(1.0-r2);
#ifndef FLUIDRENDERING_RHS
normal.z=-normal.z;
#endif
vec4 realViewPos=vec4(viewPos+normal*sphereRadius,1.0);vec4 clipSpacePos=projection*realViewPos;
#ifdef WEBGPU
gl_FragDepth=clipSpacePos.z/clipSpacePos.w;
#else
gl_FragDepth=(clipSpacePos.z/clipSpacePos.w)*0.5+0.5;
#endif
#ifdef FLUIDRENDERING_RHS
realViewPos.z=-realViewPos.z;
#endif
#ifdef FLUIDRENDERING_VELOCITY
glFragColor=vec4(realViewPos.z,velocityNorm,0.,1.);
#else
glFragColor=vec4(realViewPos.z,0.,0.,1.);
#endif
}
`;e.ShadersStore[r]=i;c={name:r,shader:i}});export{c as a,l as b};
