import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var r,s,n=o(()=>{"use strict";t();r="fogVertex",s=`#ifdef FOG
#ifdef SCENE_UBO
vertexOutputs.vFogDistance=(scene.view*worldPos).xyz;
#else
vertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;
#endif
#endif
`;e.IncludesShadersStoreWGSL[r]=s});export{n as a};
