import{a as e,b as t}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var o,a,f=r(()=>{"use strict";t();o="prePassDeclaration",a=`#ifdef PREPASS
#extension GL_EXT_draw_buffers : require
layout(location=0) out highp vec4 glFragData[{X}];highp vec4 gl_FragColor;
#ifdef PREPASS_LOCAL_POSITION
varying highp vec3 vPosition;
#endif
#ifdef PREPASS_DEPTH
varying highp vec3 vViewPos;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
varying highp vec4 vCurrentPosition;varying highp vec4 vPreviousPosition;
#endif
#endif
`;e.IncludesShadersStore[o]=a});var n,l,i=r(()=>{"use strict";t();n="oitDeclaration",l=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
#extension GL_EXT_draw_buffers : require
layout(location=0) out vec2 depth; 
layout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;
#define MAX_DEPTH 99999.0
highp vec4 gl_FragColor;uniform sampler2D oitDepthSampler;uniform sampler2D oitFrontColorSampler;
#endif
`;e.IncludesShadersStore[n]=l});var d,s,h=r(()=>{"use strict";t();d="decalFragment",s=`#ifdef DECAL
#ifdef GAMMADECAL
decalColor.rgb=toLinearSpace(decalColor.rgb);
#endif
#ifdef DECAL_SMOOTHALPHA
decalColor.a*=decalColor.a;
#endif
surfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);
#endif
`;e.IncludesShadersStore[d]=s});var c,p,D=r(()=>{"use strict";t();c="depthPrePass",p=`#ifdef DEPTHPREPASS
gl_FragColor=vec4(0.,0.,0.,1.0);return;
#endif
`;e.IncludesShadersStore[c]=p});var g,S,E=r(()=>{"use strict";t();g="oitFragment",S=`#ifdef ORDER_INDEPENDENT_TRANSPARENCY
float fragDepth=gl_FragCoord.z; 
#ifdef ORDER_INDEPENDENT_TRANSPARENCY_16BITS
uint halfFloat=packHalf2x16(vec2(fragDepth));vec2 full=unpackHalf2x16(halfFloat);fragDepth=full.x;
#endif
ivec2 fragCoord=ivec2(gl_FragCoord.xy);vec2 lastDepth=texelFetch(oitDepthSampler,fragCoord,0).rg;vec4 lastFrontColor=texelFetch(oitFrontColorSampler,fragCoord,0);depth.rg=vec2(-MAX_DEPTH);frontColor=lastFrontColor;backColor=vec4(0.0);
#ifdef USE_REVERSE_DEPTHBUFFER
float furthestDepth=-lastDepth.x;float nearestDepth=lastDepth.y;
#else
float nearestDepth=-lastDepth.x;float furthestDepth=lastDepth.y;
#endif
float alphaMultiplier=1.0-lastFrontColor.a;
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth>nearestDepth || fragDepth<furthestDepth) {
#else
if (fragDepth<nearestDepth || fragDepth>furthestDepth) {
#endif
return;}
#ifdef USE_REVERSE_DEPTHBUFFER
if (fragDepth<nearestDepth && fragDepth>furthestDepth) {
#else
if (fragDepth>nearestDepth && fragDepth<furthestDepth) {
#endif
depth.rg=vec2(-fragDepth,fragDepth);return;}
#endif
`;e.IncludesShadersStore[g]=S});var u,P,m=r(()=>{"use strict";t();u="decalFragmentDeclaration",P=`#ifdef DECAL
uniform vec4 vDecalInfos;
#endif
`;e.IncludesShadersStore[u]=P});export{m as a,f as b,i as c,h as d,D as e,E as f};
