import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var d,a,r=n(()=>{"use strict";t();d="bumpVertex",a=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL)
vec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tangentUpdated.w;vTBN=mat3(finalWorld)*mat3(tbnTangent,tbnBitangent,tbnNormal);
#endif
#endif
`;e.IncludesShadersStore[d]=a});export{r as a};
