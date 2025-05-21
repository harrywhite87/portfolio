import{a}from"./chunk-5QKDFXE4.js";import{a as e,b as n}from"./chunk-SS6WXUSY.js";import{d as o}from"./chunk-4ZZIO3ZI.js";var d,S,i=o(()=>{"use strict";n();d="boundingBoxRendererFragmentDeclaration",S=`uniform vec4 color;
`;e.IncludesShadersStore[d]||(e.IncludesShadersStore[d]=S)});var r,t,h,c=o(()=>{n();i();a();r="boundingBoxRendererPixelShader",t=`#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[r]||(e.ShadersStore[r]=t);h={name:r,shader:t}});export{h as a,c as b};
