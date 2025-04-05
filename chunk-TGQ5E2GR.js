import{a as t}from"./chunk-DFV6FE7J.js";import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d as r}from"./chunk-SO6VPFYA.js";var a,c,n=r(()=>{"use strict";o();a="boundingBoxRendererFragmentDeclaration",c=`uniform vec4 color;
`;e.IncludesShadersStore[a]=c});var d,i,x,S=r(()=>{o();n();t();d="boundingBoxRendererPixelShader",i=`#include<__decl__boundingBoxRendererFragment>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
gl_FragColor=color;
#define CUSTOM_FRAGMENT_MAIN_END
}`;e.ShadersStore[d]=i;x={name:d,shader:i}});export{x as a,S as b};
