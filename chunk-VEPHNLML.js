import{a as o,b as r}from"./chunk-SS6WXUSY.js";import{d as i}from"./chunk-4ZZIO3ZI.js";var e,t,a=i(()=>{"use strict";r();e="meshUboDeclaration",t=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`;o.IncludesShadersStore[e]||(o.IncludesShadersStore[e]=t)});export{a};
