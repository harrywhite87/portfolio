import{a as o,b as f}from"./chunk-SS6WXUSY.js";import{d as e}from"./chunk-4ZZIO3ZI.js";var r,a,c=e(()=>{"use strict";f();r="fogFragment",a=`#ifdef FOG
var fog: f32=CalcFogFactor();
#ifdef PBR
fog=toLinearSpace(fog);
#endif
color= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);
#endif
`;o.IncludesShadersStoreWGSL[r]||(o.IncludesShadersStoreWGSL[r]=a)});export{c as a};
