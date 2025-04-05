import{a as t,b as o}from"./chunk-PJTN5MCN.js";import{d as e}from"./chunk-SO6VPFYA.js";var r,s,n=e(()=>{"use strict";o();r="logDepthVertex",s=`#ifdef LOGARITHMICDEPTH
vertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;
#endif
`;t.IncludesShadersStoreWGSL[r]=s});export{n as a};
