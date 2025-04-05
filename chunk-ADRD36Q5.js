import{a as e,b as r}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var d,i,n=o(()=>{"use strict";r();d="vertexColorMixing",i=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=color;
#else
vColor.rgb*=color.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;e.IncludesShadersStore[d]=i});export{n as a};
