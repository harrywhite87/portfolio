import{a as e,b as a}from"./chunk-PJTN5MCN.js";import{d as i}from"./chunk-SO6VPFYA.js";var o,r,s,n=i(()=>{a();o="ssaoCombinePixelShader",r=`uniform sampler2D textureSampler;uniform sampler2D originalColor;uniform vec4 viewport;varying vec2 vUV;
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
vec4 ssaoColor=texture2D(textureSampler,viewport.xy+vUV*viewport.zw);vec4 sceneColor=texture2D(originalColor,vUV);gl_FragColor=sceneColor*ssaoColor;
#define CUSTOM_FRAGMENT_MAIN_END
}
`;e.ShadersStore[o]=r;s={name:o,shader:r}});export{s as a,n as b};
