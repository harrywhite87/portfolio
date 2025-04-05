import{a as o,b as i}from"./chunk-PJTN5MCN.js";import{d as e}from"./chunk-SO6VPFYA.js";var r,t,a=e(()=>{"use strict";i();r="meshUboDeclaration",t=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;o.IncludesShadersStore[r]=t});export{a};
