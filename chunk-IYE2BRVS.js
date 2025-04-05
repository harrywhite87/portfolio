import{a as o,b as e}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var f,a,c=r(()=>{"use strict";e();f="fogFragment",a=`#ifdef FOG
var fog: f32=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);
#endif
`;o.IncludesShadersStoreWGSL[f]=a});export{c as a};
