import{a as e,b as s}from"./chunk-PJTN5MCN.js";import{d as n}from"./chunk-SO6VPFYA.js";var t,S,i,a=n(()=>{s();t="shadowMapFragment",S=`var depthSM: f32=fragmentInputs.vDepthMetricSM;
#if defined(SM_DEPTHCLAMP) && SM_DEPTHCLAMP==1
#if SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
#ifdef USE_REVERSE_DEPTHBUFFER
depthSM=(-fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#else
depthSM=(fragmentInputs.zSM+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#endif
#ifdef USE_REVERSE_DEPTHBUFFER
fragmentOutputs.fragDepth=clamp(1.0-depthSM,0.0,1.0);
#else
fragmentOutputs.fragDepth=clamp(depthSM,0.0,1.0); 
#endif
#elif SM_USEDISTANCE==1
depthSM=(length(fragmentInputs.vPositionWSM-uniforms.lightDataSM)+uniforms.depthValuesSM.x)/uniforms.depthValuesSM.y+uniforms.biasAndScaleSM.x;
#endif
#if SM_ESM==1
depthSM=clamp(exp(-min(87.,uniforms.biasAndScaleSM.z*depthSM)),0.,1.);
#endif
#if SM_FLOAT==1
fragmentOutputs.color= vec4f(depthSM,1.0,1.0,1.0);
#else
fragmentOutputs.color=pack(depthSM);
#endif
`;e.IncludesShadersStoreWGSL[t]=S;i={name:t,shader:S}});export{i as a,a as b};
