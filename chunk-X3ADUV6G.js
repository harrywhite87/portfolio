import{a,b as t}from"./chunk-PJTN5MCN.js";import{d as e}from"./chunk-SO6VPFYA.js";var r,o,S,d=e(()=>{t();r="shadowMapFragmentSoftTransparentShadow",o=`#if SM_SOFTTRANSPARENTSHADOW==1
if ((bayerDither8(floor(mod(gl_FragCoord.xy,8.0))))/64.0>=softTransparentShadowSM.x*alpha) discard;
#endif
`;a.IncludesShadersStore[r]=o;S={name:r,shader:o}});export{S as a,d as b};
