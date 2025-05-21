import{a as o,b as n}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var e,i,t=r(()=>{"use strict";n();e="boundingBoxRendererUboDeclaration",i=`#ifdef WEBGL2
uniform vec4 color;uniform mat4 world;uniform mat4 viewProjection;
#ifdef MULTIVIEW
uniform mat4 viewProjectionR;
#endif
#else
layout(std140,column_major) uniform;uniform BoundingBoxRenderer {vec4 color;mat4 world;mat4 viewProjection;mat4 viewProjectionR;};
#endif
`;o.IncludesShadersStore[e]||(o.IncludesShadersStore[e]=i)});export{t as a};
