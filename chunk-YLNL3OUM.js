import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var n,r,i=o(()=>{"use strict";t();n="sceneUboDeclaration",r=`layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;mat4 projection;vec4 vEyePosition;};
`;e.IncludesShadersStore[n]=r});export{i as a};
