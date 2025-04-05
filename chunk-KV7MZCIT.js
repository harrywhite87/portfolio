import{a as e,b as n}from"./chunk-PJTN5MCN.js";import{d as o}from"./chunk-SO6VPFYA.js";var t,c,r=o(()=>{"use strict";n();t="sceneUboDeclaration",c=`struct Scene {viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,};
#define SCENE_UBO
var<uniform> scene : Scene;
`;e.IncludesShadersStoreWGSL[t]=c});export{r as a};
