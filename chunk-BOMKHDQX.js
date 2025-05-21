import{a as e,b as r}from"./chunk-SS6WXUSY.js";import{d as t}from"./chunk-4ZZIO3ZI.js";var o,s,d=t(()=>{"use strict";r();o="fogVertex",s=`#ifdef FOG
#ifdef SCENE_UBO
vertexOutputs.vFogDistance=(scene.view*worldPos).xyz;
#else
vertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;
#endif
#endif
`;e.IncludesShadersStoreWGSL[o]||(e.IncludesShadersStoreWGSL[o]=s)});export{d as a};
