import{a as e,b as i}from"./chunk-PJTN5MCN.js";import{d as t}from"./chunk-SO6VPFYA.js";var n,a,o=t(()=>{"use strict";i();n="importanceSampling",a=`vec3 hemisphereCosSample(vec2 u) {float phi=2.*PI*u.x;float cosTheta2=1.-u.y;float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
vec3 hemisphereImportanceSampleDggx(vec2 u,float a) {float phi=2.*PI*u.x;float cosTheta2=(1.-u.y)/(1.+(a+1.)*((a-1.)*u.y));float cosTheta=sqrt(cosTheta2);float sinTheta=sqrt(1.-cosTheta2);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}
vec3 hemisphereImportanceSampleDCharlie(vec2 u,float a) { 
float phi=2.*PI*u.x;float sinTheta=pow(u.y,a/(2.*a+1.));float cosTheta=sqrt(1.-sinTheta*sinTheta);return vec3(sinTheta*cos(phi),sinTheta*sin(phi),cosTheta);}`;e.IncludesShadersStore[n]=a});var l,r,s=t(()=>{"use strict";i();l="hdrFilteringFunctions",r=`#ifdef NUM_SAMPLES
#if NUM_SAMPLES>0
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
float radicalInverse_VdC(uint bits) 
{bits=(bits<<16u) | (bits>>16u);bits=((bits & 0x55555555u)<<1u) | ((bits & 0xAAAAAAAAu)>>1u);bits=((bits & 0x33333333u)<<2u) | ((bits & 0xCCCCCCCCu)>>2u);bits=((bits & 0x0F0F0F0Fu)<<4u) | ((bits & 0xF0F0F0F0u)>>4u);bits=((bits & 0x00FF00FFu)<<8u) | ((bits & 0xFF00FF00u)>>8u);return float(bits)*2.3283064365386963e-10; }
vec2 hammersley(uint i,uint N)
{return vec2(float(i)/float(N),radicalInverse_VdC(i));}
#else
float vanDerCorpus(int n,int base)
{float invBase=1.0/float(base);float denom =1.0;float result =0.0;for(int i=0; i<32; ++i)
{if(n>0)
{denom =mod(float(n),2.0);result+=denom*invBase;invBase=invBase/2.0;n =int(float(n)/2.0);}}
return result;}
vec2 hammersley(int i,int N)
{return vec2(float(i)/float(N),vanDerCorpus(i,2));}
#endif
float log4(float x) {return log2(x)/2.;}
vec3 uv_to_normal(vec2 uv) {vec3 N;vec2 uvRange=uv;float theta=uvRange.x*2.0*PI;float phi=uvRange.y*PI;N.x=cos(theta)*sin(phi);N.z=sin(theta)*sin(phi);N.y=cos(phi);return N;}
const float NUM_SAMPLES_FLOAT=float(NUM_SAMPLES);const float NUM_SAMPLES_FLOAT_INVERSED=1./NUM_SAMPLES_FLOAT;const float K=4.;
#define inline
vec3 irradiance(samplerCube inputTexture,vec3 inputN,vec2 filteringInfo
#ifdef IBL_CDF_FILTERING
,sampler2D icdfSampler
#endif
)
{vec3 n=normalize(inputN);vec3 result=vec3(0.0);
#ifndef IBL_CDF_FILTERING
vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);tangent=normalize(cross(tangent,n));vec3 bitangent=cross(n,tangent);mat3 tbn=mat3(tangent,bitangent,n);
#endif
float maxLevel=filteringInfo.y;float dim0=filteringInfo.x;float omegaP=(4.*PI)/(6.*dim0*dim0);
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{vec2 Xi=hammersley(i,NUM_SAMPLES);
#ifdef IBL_CDF_FILTERING
vec2 T;T.x=textureLod(icdfSampler,vec2(Xi.x,0.0),0.0).x;T.y=textureLod(icdfSampler,vec2(T.x,Xi.y),0.0).y;vec3 Ls=uv_to_normal(vec2(1.0-fract(T.x+0.25),T.y));float NoL=dot(n,Ls);
#else
vec3 Ls=hemisphereCosSample(Xi);Ls=normalize(Ls);vec3 Ns=vec3(0.,0.,1.);float NoL=dot(Ns,Ls);
#endif
if (NoL>0.) {
#ifdef IBL_CDF_FILTERING
float pdf=textureLod(icdfSampler,T,0.0).z;vec3 c=textureCubeLodEXT(inputTexture,Ls,0.0).rgb;
#else
float pdf_inversed=PI/NoL;float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;float l=log4(omegaS)-log4(omegaP)+log4(K);float mipLevel=clamp(l,0.0,maxLevel);vec3 c=textureCubeLodEXT(inputTexture,tbn*Ls,mipLevel).rgb;
#endif
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
#ifdef IBL_CDF_FILTERING
vec3 light=pdf<1e-6 ? vec3(0.0) : vec3(1.0)/vec3(pdf)*c;result+=NoL*light;
#else
result+=c;
#endif
}}
result=result*NUM_SAMPLES_FLOAT_INVERSED;return result;}
#define inline
vec3 radiance(float alphaG,samplerCube inputTexture,vec3 inputN,vec2 filteringInfo)
{vec3 n=normalize(inputN);vec3 c=textureCube(inputTexture,n).rgb; 
if (alphaG==0.) {
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
return c;} else {vec3 result=vec3(0.);vec3 tangent=abs(n.z)<0.999 ? vec3(0.,0.,1.) : vec3(1.,0.,0.);tangent=normalize(cross(tangent,n));vec3 bitangent=cross(n,tangent);mat3 tbn=mat3(tangent,bitangent,n);float maxLevel=filteringInfo.y;float dim0=filteringInfo.x;float omegaP=(4.*PI)/(6.*dim0*dim0);float weight=0.;
#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)
for(uint i=0u; i<NUM_SAMPLES; ++i)
#else
for(int i=0; i<NUM_SAMPLES; ++i)
#endif
{vec2 Xi=hammersley(i,NUM_SAMPLES);vec3 H=hemisphereImportanceSampleDggx(Xi,alphaG);float NoV=1.;float NoH=H.z;float NoH2=H.z*H.z;float NoL=2.*NoH2-1.;vec3 L=vec3(2.*NoH*H.x,2.*NoH*H.y,NoL);L=normalize(L);if (NoL>0.) {float pdf_inversed=4./normalDistributionFunction_TrowbridgeReitzGGX(NoH,alphaG);float omegaS=NUM_SAMPLES_FLOAT_INVERSED*pdf_inversed;float l=log4(omegaS)-log4(omegaP)+log4(K);float mipLevel=clamp(float(l),0.0,maxLevel);weight+=NoL;vec3 c=textureCubeLodEXT(inputTexture,tbn*L,mipLevel).rgb;
#ifdef GAMMA_INPUT
c=toLinearSpace(c);
#endif
result+=c*NoL;}}
result=result/weight;return result;}}
#endif
#endif
`;e.IncludesShadersStore[l]=r});export{o as a,s as b};
