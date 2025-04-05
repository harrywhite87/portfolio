import{a as e,b as r}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var t,n,s=i(()=>{"use strict";r();t="uvAttributeDeclaration",n=`#ifdef UV{X}
attribute uv{X}: vec2f;
#endif
`;e.IncludesShadersStoreWGSL[t]=n});var o,f,d=i(()=>{"use strict";r();o="prePassVertexDeclaration",f=`#ifdef PREPASS
#ifdef PREPASS_LOCAL_POSITION
varying vPosition : vec3f;
#endif
#ifdef PREPASS_DEPTH
varying vViewPos: vec3f;
#endif
#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)
uniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;
#endif
#endif
`;e.IncludesShadersStoreWGSL[o]=f});var v,a,u=i(()=>{"use strict";r();v="samplerVertexDeclaration",a=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
varying v_VARYINGNAME_UV: vec2f;
#endif
`;e.IncludesShadersStoreWGSL[v]=a});var c,E,N=i(()=>{"use strict";r();c="bumpVertexDeclaration",E=`#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)
#if defined(TANGENT) && defined(NORMAL) 
varying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;
#endif
#endif
`;e.IncludesShadersStoreWGSL[c]=E});var I,_,m=i(()=>{"use strict";r();I="prePassVertex",_=`#ifdef PREPASS_DEPTH
vertexOutputs.vViewPos=(scene.view*worldPos).rgb;
#endif
#ifdef PREPASS_LOCAL_POSITION
vertexOutputs.vPosition=positionUpdated.xyz;
#endif
#if (defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)
vertexOutputs.vCurrentPosition=scene.viewProjection*worldPos;
#if NUM_BONE_INFLUENCERS>0
var previousInfluence: mat4x4f;previousInfluence=mPreviousBones[ i32(matricesIndices[0])]*matricesWeights[0];
#if NUM_BONE_INFLUENCERS>1
previousInfluence+=mPreviousBones[ i32(matricesIndices[1])]*matricesWeights[1];
#endif 
#if NUM_BONE_INFLUENCERS>2
previousInfluence+=mPreviousBones[ i32(matricesIndices[2])]*matricesWeights[2];
#endif 
#if NUM_BONE_INFLUENCERS>3
previousInfluence+=mPreviousBones[ i32(matricesIndices[3])]*matricesWeights[3];
#endif
#if NUM_BONE_INFLUENCERS>4
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[0])]*matricesWeightsExtra[0];
#endif 
#if NUM_BONE_INFLUENCERS>5
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[1])]*matricesWeightsExtra[1];
#endif 
#if NUM_BONE_INFLUENCERS>6
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[2])]*matricesWeightsExtra[2];
#endif 
#if NUM_BONE_INFLUENCERS>7
previousInfluence+=mPreviousBones[ i32(matricesIndicesExtra[3])]*matricesWeightsExtra[3];
#endif
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);
#else
vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);
#endif
#endif
`;e.IncludesShadersStoreWGSL[I]=_});var S,p,A=i(()=>{"use strict";r();S="uvVariableDeclaration",p=`#ifdef MAINUV{X}
#if !defined(UV{X})
var uv{X}: vec2f=vec2f(0.,0.);
#else
var uv{X}: vec2f=vertexInputs.uv{X};
#endif
vertexOutputs.vMainUV{X}=uv{X};
#endif
`;e.IncludesShadersStoreWGSL[S]=p});var P,x,l=i(()=>{"use strict";r();P="samplerVertexImplementation",x=`#if defined(_DEFINENAME_) && _DEFINENAME_DIRECTUV==0
if (uniforms.v_INFONAME_==0.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}
#ifdef UV2
else if (uniforms.v_INFONAME_==1.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}
#endif
#ifdef UV3
else if (uniforms.v_INFONAME_==2.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv3,1.0,0.0)).xy;}
#endif
#ifdef UV4
else if (uniforms.v_INFONAME_==3.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv4,1.0,0.0)).xy;}
#endif
#ifdef UV5
else if (uniforms.v_INFONAME_==4.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv5,1.0,0.0)).xy;}
#endif
#ifdef UV6
else if (uniforms.v_INFONAME_==5.)
{vertexOutputs.v_VARYINGNAME_UV= (uniforms._MATRIXNAME_Matrix* vec4f(vertexInputs.uv6,1.0,0.0)).xy;}
#endif
#endif
`;e.IncludesShadersStoreWGSL[P]=x});export{s as a,d as b,u as c,N as d,m as e,A as f,l as g};
