import{a as e,b as f}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var t,i,a,n=r(()=>{f();t="morphTargetsVertexDeclaration",i=`#ifdef MORPHTARGETS
#ifndef MORPHTARGETS_TEXTURE
#ifdef MORPHTARGETS_POSITION
attribute vec3 position{X};
#endif
#ifdef MORPHTARGETS_NORMAL
attribute vec3 normal{X};
#endif
#ifdef MORPHTARGETS_TANGENT
attribute vec3 tangent{X};
#endif
#ifdef MORPHTARGETS_UV
attribute vec2 uv_{X};
#endif
#ifdef MORPHTARGETS_UV2
attribute vec2 uv2_{X};
#endif
#elif {X}==0
uniform int morphTargetCount;
#endif
#endif
`;e.IncludesShadersStore[t]=i;a={name:t,shader:i}});export{a,n as b};
