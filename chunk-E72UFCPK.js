import{a as e,b as t}from"./chunk-SS6WXUSY.js";import{d as n}from"./chunk-4ZZIO3ZI.js";var o,r,c=n(()=>{"use strict";t();o="sceneUboDeclaration",r=`struct Scene {viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,};
#define SCENE_UBO
var<uniform> scene : Scene;
`;e.IncludesShadersStoreWGSL[o]||(e.IncludesShadersStoreWGSL[o]=r)});export{c as a};
