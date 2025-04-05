import{a as o,b as e}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var f,g,t=r(()=>{"use strict";e();f="fogFragment",g=`#ifdef FOG
float fog=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color.rgb=mix(vFogColor,color.rgb,fog);
#endif
`;o.IncludesShadersStore[f]=g});export{t as a};
