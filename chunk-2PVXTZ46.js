import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var r,n,a=t(()=>{"use strict";o();r="logDepthVertex",n=`#ifdef LOGARITHMICDEPTH
vFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;
#endif
`;e.IncludesShadersStore[r]=n});export{a};
