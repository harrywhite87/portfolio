import{a,b as t}from"./chunk-SS6WXUSY.js";import{d as e}from"./chunk-4ZZIO3ZI.js";var r,o,s,n=e(()=>{t();r="shadowMapFragmentSoftTransparentShadow",o=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(((fragmentInputs.position.xy)%(8.0)))))/64.0>=uniforms.softTransparentShadowSM.x*alpha) {discard;}
#endif
`;a.IncludesShadersStoreWGSL[r]||(a.IncludesShadersStoreWGSL[r]=o);s={name:r,shader:o}});export{s as a,n as b};
