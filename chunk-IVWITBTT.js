import{a as e,b as f}from"./chunk-SS6WXUSY.js";import{d as r}from"./chunk-4ZZIO3ZI.js";var t,i,d,n=r(()=>{f();t="morphTargetsVertexDeclaration",i=`#ifdef MORPHTARGETS
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
`;e.IncludesShadersStore[t]||(e.IncludesShadersStore[t]=i);d={name:t,shader:i}});export{d as a,n as b};
