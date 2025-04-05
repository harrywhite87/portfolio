import{a as o,b as r}from"./chunk-PJTN5MCN.js";import{d as e}from"./chunk-SO6VPFYA.js";var n,i,t=e(()=>{"use strict";r();n="boundingBoxRendererUboDeclaration",i=`#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;o.IncludesShadersStore[n]=i});export{t as a};
