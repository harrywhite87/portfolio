import{a as e,b as r}from"./chunk-SS6WXUSY.js";import{d}from"./chunk-4ZZIO3ZI.js";var o,i,n=d(()=>{"use strict";r();o="vertexColorMixing",i=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
vColor=vec4(1.0);
#ifdef VERTEXCOLOR
#ifdef VERTEXALPHA
vColor*=colorUpdated;
#else
vColor.rgb*=colorUpdated.rgb;
#endif
#endif
#ifdef INSTANCESCOLOR
vColor*=instanceColor;
#endif
#endif
`;e.IncludesShadersStore[o]||(e.IncludesShadersStore[o]=i)});export{n as a};
