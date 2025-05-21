import{a as o,b as f}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var e,t,a=r(()=>{"use strict";f();e="fogFragment",t=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;o.IncludesShadersStore[e]||(o.IncludesShadersStore[e]=t)});export{a};
