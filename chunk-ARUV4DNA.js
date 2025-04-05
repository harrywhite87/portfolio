import{G as ee,Hb as ie,pa as te}from"./chunk-3T6OEJ4F.js";import"./chunk-ZWQV5RCI.js";import"./chunk-2GH5F7MV.js";import"./chunk-B2Q7KY5G.js";import"./chunk-3DOT7JQG.js";import{a as _}from"./chunk-Y24LPCLM.js";import"./chunk-EAXGI6JZ.js";import{Ya as C,e as $,eb as b,ga as Z,ia as d,pa as z,q as Q,xa as D}from"./chunk-WLEDRWRN.js";import{m as K,o as J}from"./chunk-G2IRSE7Y.js";import{Da as l,Ga as U,La as A,Na as B,Pa as F,Qa as q,R as L,Ra as c,Sa as f,T as Y,Ta as E,Va as T,Wa as G,Xa as w,Ya as P,Za as V,bb as W,fb as j,gb as R,hb as N,ia as X}from"./chunk-F7FHNGY5.js";import{a as p,b as H,j as y}from"./chunk-SO6VPFYA.js";var S=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;var O=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`;var re=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`;var ne=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`;var oe=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`;var ae=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`;var ge=Object.defineProperty,xe=(o,e,t)=>e in o?ge(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e,t)=>(xe(o,typeof e!="symbol"?e+"":e,t),t),se=class le extends _{constructor(...e){let t=e[0]??{};(typeof t=="number"||Array.isArray(t))&&(Q("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),t={strength:t},e[1]!==void 0&&(t.quality=e[1]),e[2]!==void 0&&(t.clamp=e[2])),t=p(p({},le.DEFAULT_OPTIONS),t);let i=b.from({vertex:{source:O,entryPoint:"mainVertex"},fragment:{source:t?.clamp?ae:ne,entryPoint:"mainFragment"}}),r=C.from({vertex:S,fragment:t?.clamp?oe:re,name:"kawase-blur-filter"});super({gpuProgram:i,glProgram:r,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),g(this,"uniforms"),g(this,"_pixelSize",{x:0,y:0}),g(this,"_clamp"),g(this,"_kernels",[]),g(this,"_blur"),g(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=t.pixelSize??{x:1,y:1},Array.isArray(t.strength)?this.kernels=t.strength:typeof t.strength=="number"&&(this._blur=t.strength,this.quality=t.quality??3),this._clamp=!!t.clamp}apply(e,t,i,r){let n=this.pixelSizeX/t.source.width,s=this.pixelSizeY/t.source.height,a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*n,this.uniforms.uOffset[1]=a*s,e.applyFilter(this,t,i,r);else{let m=d.getSameSizeTexture(t),u=t,h=m,x,k=this._quality-1;for(let M=0;M<k;M++)a=this._kernels[M]+.5,this.uniforms.uOffset[0]=a*n,this.uniforms.uOffset[1]=a*s,e.applyFilter(this,u,h,!0),x=u,u=h,h=x;a=this._kernels[k]+.5,this.uniforms.uOffset[0]=a*n,this.uniforms.uOffset[1]=a*s,e.applyFilter(this,u,i,r),d.returnTexture(m)}}get strength(){return this._blur}set strength(e){this._blur=e,this._generateKernels()}get quality(){return this._quality}set quality(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()}get kernels(){return this._kernels}set kernels(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max(...e)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(e){if(typeof e=="number"){this.pixelSizeX=this.pixelSizeY=e;return}if(Array.isArray(e)){this.pixelSizeX=e[0],this.pixelSizeY=e[1];return}this._pixelSize=e}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(e){this.pixelSize.x=e}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(e){this.pixelSize.y=e}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((e,t)=>e+t+.5,0))}_generateKernels(){let e=this._blur,t=this._quality,i=[e];if(e>0){let r=e,n=e/t;for(let s=1;s<t;s++)r-=n,i.push(r)}this._kernels=i,this._updatePadding()}};g(se,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});var ue=se;var pe=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`;var fe=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`;var de=Object.defineProperty,ve=(o,e,t)=>e in o?de(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,v=(o,e,t)=>(ve(o,typeof e!="symbol"?e+"":e,t),t),me=class ce extends _{constructor(e){e=p(p({},ce.DEFAULT_OPTIONS),e);let t=b.from({vertex:{source:O,entryPoint:"mainVertex"},fragment:{source:fe,entryPoint:"mainFragment"}}),i=C.from({vertex:S,fragment:pe,name:"drop-shadow-filter"});super({gpuProgram:t,glProgram:i,resources:{dropShadowUniforms:{uAlpha:{value:e.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:e.offset,type:"vec2<f32>"}}},resolution:e.resolution}),v(this,"uniforms"),v(this,"shadowOnly",!1),v(this,"_color"),v(this,"_blurFilter"),v(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new $,this.color=e.color??0,this._blurFilter=new ue({strength:e.kernels??e.blur,quality:e.kernels?void 0:e.quality}),this._basePass=new _({gpuProgram:b.from({vertex:{source:O,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:C.from({vertex:S,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,e)}apply(e,t,i,r){let n=d.getSameSizeTexture(t);e.applyFilter(this,t,n,!0),this._blurFilter.apply(e,n,i,r),this.shadowOnly||e.applyFilter(this._basePass,t,i,!1),d.returnTexture(n)}get offset(){return this.uniforms.uOffset}set offset(e){this.uniforms.uOffset=e,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(e){this.offset.x=e,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(e){this.offset.y=e,this._updatePadding()}get color(){return this._color.value}set color(e){this._color.setValue(e);let[t,i,r]=this._color.toArray();this.uniforms.uColor[0]=t,this.uniforms.uColor[1]=i,this.uniforms.uColor[2]=r}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get blur(){return this._blurFilter.strength}set blur(e){this._blurFilter.strength=e,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(e){this._blurFilter.quality=e,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(e){this._blurFilter.kernels=e}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(e){typeof e=="number"&&(e={x:e,y:e}),Array.isArray(e)&&(e={x:e[0],y:e[1]}),this._blurFilter.pixelSize=e}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(e){this._blurFilter.pixelSizeX=e}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(e){this._blurFilter.pixelSizeY=e}_updatePadding(){let e=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=e+this.blur*2+this.quality*4}};v(me,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});var I=me;function he(o){return y(this,null,function*(){var e;let t=p({importPixi:!1},o);t.app&&(t.renderer=t.app.renderer,t.stage=t.app.stage),t.importPixi&&!t.pixi&&(t.pixi=yield import("./chunk-HTGHWTZB.js")),window.__PIXI_DEVTOOLS__=H(p({},window.__PIXI_DEVTOOLS__||{}),{app:t.app,stage:t.stage,renderer:t.renderer,extensions:[...((e=window.__PIXI_DEVTOOLS__)==null?void 0:e.extensions)||[],...t.extensions||[]],plugins:{}})})}var ye=["pixiWrapper"];function we(o,e){if(o&1&&(c(0,"p",12),w(1),f()),o&2){let t=G(2);l(),V(" ",t.currentImage.subtitle," ")}}function Ce(o,e){o&1&&(c(0,"a",11),E(1,"img",13),f())}function be(o,e){if(o&1&&(c(0,"div",6)(1,"div",7)(2,"div",8)(3,"h2",9),w(4),f(),F(5,we,2,1,"p",10),f(),F(6,Ce,2,0,"a",11),f()()),o&2){let t=G();l(4),P(t.currentImage.title),l(),A("ngIf",t.currentImage.subtitle),l(),q(6,t.currentImage.isHolition?6:-1)}}var pt=(()=>{class o{constructor(){this.cdr=L(U),this.offsetX=0,this.offsetY=0,this.scale=1,this.minScale=.5,this.maxScale=3,this.zoomStep=.1,this.animationSpeed=.05,this.isAnimating=!1,this.currentImageIndex=0,this.isHorizontalLayout=!0,this.targetX=0,this.targetY=0,this.targetScale=1,this.imageContainers=[],this.images=[{title:"Jo Malone London | Virtual Townhouse",subtitle:"360 Virtual Space, 2020-2022",imageBase:"townhouse",link:"https://holition.com/work/jomalone-london-virtual-townhouse",alt:"Jo Malone London | Virtual Townhouse",src:"assets/images/project-townhouse-default.webp",weight:1.2,id:"1",x:0,y:0,width:382.7052,height:251.9368,isHolition:!0},{title:"Jo Malone London | The Discovery Collection AR",subtitle:"Japan, Online, 2024",imageBase:"asmr",link:"https://holition.com/work/jo-malone-london-the-discovery-collection-ar",alt:"Jo Malone London | The Discovery Collection AR",src:"assets/images/project-asmr-default.webp",weight:.6,id:"2",x:461.0054,y:0,width:198.4269,height:207.0986,isHolition:!0},{title:"Jo Malone London | The Paddington\u2122 Filter",subtitle:"Online, Global, 2024",imageBase:"paddington",link:"https://holition.com/work/jo-malone-london-the-paddington-filter",alt:"Jo Malone London | The Paddington\u2122 Filter",src:"assets/images/project-paddington-default.webp",weight:1.1,id:"3",x:716.3311,y:0,width:303.3101,height:197.7094,isHolition:!0},{title:"Cl\xE9 de Peau Beaut\xE9 | Virtual Flower Market",subtitle:"New York, Online, 2024",imageBase:"cdp",link:"https://holition.com/work/cle-de-peau-flower-market",alt:"Cl\xE9 de Peau Beaut\xE9 | Virtual Flower Market",src:"assets/images/project-cpb-default.webp",weight:1,id:"4",x:113.1512,y:307.5348,width:278.1534,height:202.9596,isHolition:!0},{title:"La Mer | Great Gifting Dash",subtitle:"Gamification, November 2023",imageBase:"la-mer",link:"https://holition.com/work/greatgiftingdash-lamer",alt:"La Mer | Great Gifting Dash",src:"assets/images/project-la-mer-default.webp",weight:.6,id:"5",x:453.1688,y:283.0462,width:198.4269,height:207.0986,isHolition:!0},{title:"Cyprus Duty Free | Mirror Box & Selfie Station",subtitle:"Cyprus Duty Free | Mirror Box & Selfie Station",imageBase:"selfie-station",link:"https://holition.com/work/mirrorbox-and-selfiestation",alt:"Cyprus Duty Free | Mirror Box & Selfie Station",src:"assets/images/project-selfie-station-default.webp",weight:.7,id:"6",x:712.2104,y:275.6246,width:368.6943,height:234.1158,isHolition:!0},{title:"TOMMYXMIFFY | Miffy world",subtitle:"Amsterdam, Milan, Dusseldorf, Online, December 2022",imageBase:"miffy",link:"https://holition.com/work/tommyxmiffy",alt:"TOMMYXMIFFY | Miffy world",src:"assets/images/project-miffy-default.webp",weight:.7,id:"7",x:307.1147,y:566.0925,width:344,height:215.0933,isHolition:!0},{title:"BOSS | Boss Bottled Absolu Fragrance Filter",subtitle:"Online, Global, 2024",imageBase:"boss",link:"https://holition.com/work/boss-boss-bottled-absolu-fragrance-filter",alt:"BOSS | Boss Bottled Absolu Fragrance Filter",src:"assets/images/project-boss-default.webp",weight:1.2,id:"8",x:712.2104,y:587.6555,width:261.6633,height:180.9742,isHolition:!0}]}get currentImage(){return this.images[this.currentImageIndex]||null}ngOnInit(){this.updateLayoutOrientation()}ngAfterViewInit(){this.initPixiApp(),this.cdr.detectChanges()}onWindowResize(){this.updateLayoutOrientation(),this.onResize(),this.isAnimating||this.focusOnCurrentImage(!1),this.cdr.detectChanges()}updateLayoutOrientation(){let t=window.innerWidth,i=window.innerHeight;this.isHorizontalLayout=t>i}initPixiApp(){return y(this,null,function*(){this.app=new ee,yield this.app.init({resizeTo:this.pixiWrapper.nativeElement,antialias:!0,backgroundAlpha:0,autoDensity:!0,resolution:window.devicePixelRatio||1,powerPreference:"high-performance"}),he({app:this.app});let t=this.app.canvas;this.pixiWrapper.nativeElement.appendChild(t);try{yield this.preloadAssets(),this.setupBackground(),this.mainContainer=new z,this.app.stage.addChild(this.mainContainer),this.mainContainer.x=this.offsetX,this.mainContainer.y=this.offsetY,this.mainContainer.scale.set(this.scale),this.images.forEach((i,r)=>{let n=this.createImageContainer(i);this.imageContainers.push(n)}),this.currentImageIndex=0,this.focusOnCurrentImage(!1),this.setupAnimationTicker(),window.addEventListener("resize",this.onResize.bind(this))}catch(i){console.error("Error initializing gallery:",i)}})}preloadAssets(){return y(this,null,function*(){let t=[];t.push({alias:"wall-tile",src:"/assets/images/wall-tile.jpg"});for(let i of this.images)t.push({alias:`frame-${i.imageBase}`,src:`/assets/images/frame-${i.imageBase}.jpg`},{alias:`frame-${i.imageBase}-hover`,src:`/assets/images/frame-${i.imageBase}-hover.jpg`});try{yield te.load(t),console.log("All assets loaded successfully")}catch(i){throw console.error("Error loading assets:",i),i}})}setupBackground(){this.backgroundContainer=new z;let t=Z.from("wall-tile"),i=this.app.screen.width,r=this.app.screen.height;this.backgroundTile=new ie(t,i,r),this.backgroundContainer.addChild(this.backgroundTile),this.app.stage.addChild(this.backgroundContainer),this.backgroundContainer.zIndex=0,this.app.stage.sortableChildren=!0}onResize(){this.backgroundTile&&(this.backgroundTile.width=this.app.screen.width,this.backgroundTile.height=this.app.screen.height)}createImageContainer(t){let i=new z;i.interactive=!0,i.cursor="pointer",i.x=t.x,i.y=t.y;let r=D.from(`frame-${t.imageBase}`);r.width=t.width,r.height=t.height;let n=D.from(`frame-${t.imageBase}-hover`);n.width=t.width,n.height=t.height,n.alpha=0;let s=.1,a=0,m=!1,u=k=>{n.alpha!==a&&(n.alpha+=(a-n.alpha)*s,Math.abs(n.alpha-a)<.01&&(n.alpha=a))};this.app.ticker.add(u),i.on("pointerover",()=>{a=1,m=!0,i.zIndex=9999}),i.on("pointerout",()=>{a=0,m=!1,i.scale.set(1),i.zIndex=1});let h=new I({color:0,alpha:.06,blur:1,quality:6,offset:{x:-22*Number(t.weight),y:0}}),x=new I({color:0,alpha:.04,blur:2,quality:6,offset:{x:-26*Number(t.weight),y:8}});return i.filters=[h,x],t.link&&i.on("pointerdown",()=>{window.open(t.link,"_blank")}),i.addChild(r),i.addChild(n),this.mainContainer.addChild(i),this.mainContainer.sortableChildren=!0,i}setupAnimationTicker(){this.app.ticker.add(()=>{if(this.isAnimating){this.mainContainer.x+=(this.targetX-this.mainContainer.x)*this.animationSpeed,this.mainContainer.y+=(this.targetY-this.mainContainer.y)*this.animationSpeed,this.mainContainer.scale.x+=(this.targetScale-this.mainContainer.scale.x)*this.animationSpeed,this.mainContainer.scale.y+=(this.targetScale-this.mainContainer.scale.y)*this.animationSpeed;let t=Math.abs(this.targetX-this.mainContainer.x),i=Math.abs(this.targetY-this.mainContainer.y),r=Math.abs(this.targetScale-this.mainContainer.scale.x);t<.5&&i<.5&&r<.01&&(this.mainContainer.x=this.targetX,this.mainContainer.y=this.targetY,this.mainContainer.scale.set(this.targetScale),this.isAnimating=!1)}})}focusOnCurrentImage(t=!0){if(this.images.length===0||this.currentImageIndex<0||this.currentImageIndex>=this.images.length)return;let i=this.images[this.currentImageIndex],r=this.pixiWrapper.nativeElement.clientWidth,n=this.pixiWrapper.nativeElement.clientHeight,s=r/2,a=n/2,m={x:i.x+i.width/2,y:i.y+i.height/2},u=50,h=(r-u*2)/i.width,x=(n-u*2)/i.height;this.targetScale=Math.min(h,x,2.5),this.targetX=s-m.x*this.targetScale,this.targetY=a-m.y*this.targetScale,t?this.isAnimating=!0:(this.mainContainer.x=this.targetX,this.mainContainer.y=this.targetY,this.mainContainer.scale.set(this.targetScale),this.isAnimating=!1),this.updateImageHighlights(),this.cdr.detectChanges()}updateImageHighlights(){this.imageContainers.forEach((t,i)=>{let r=t.getChildAt(1);i===this.currentImageIndex?t.zIndex=9999:t.zIndex=1})}navigateToPrevious(){this.currentImageIndex>0&&!this.isAnimating&&(this.currentImageIndex--,this.focusOnCurrentImage())}navigateToNext(){this.currentImageIndex<this.images.length-1&&!this.isAnimating&&(this.currentImageIndex++,this.focusOnCurrentImage())}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=Y({type:o,selectors:[["gallery-wall"]],viewQuery:function(i,r){if(i&1&&R(ye,7),i&2){let n;j(n=N())&&(r.pixiWrapper=n.first)}},hostBindings:function(i,r){i&1&&T("resize",function(){return r.onWindowResize()},!1,X)},standalone:!0,features:[W],decls:9,vars:15,consts:[[1,"gallery-pixi-wrapper"],["pixiWrapper",""],[1,"nav-arrow","prev",3,"click"],[1,"arrow-icon"],[1,"nav-arrow","next",3,"click"],["class","image-info",4,"ngIf"],[1,"image-info"],[1,"info-content"],[1,"text-content"],[1,"image-title"],["class","image-subtitle",4,"ngIf"],["href","https://www.holition.com/","target","_blank"],[1,"image-subtitle"],["src","assets/images/holition-logo.svg","alt","Holition",1,"brand-logo"]],template:function(i,r){i&1&&(c(0,"div",0,1)(2,"button",2),T("click",function(){return r.navigateToPrevious()}),c(3,"span",3),w(4),f()(),c(5,"button",4),T("click",function(){return r.navigateToNext()}),c(6,"span",3),w(7),f()(),F(8,be,7,3,"div",5),f()),i&2&&(l(2),B("horizontal",r.isHorizontalLayout)("vertical",!r.isHorizontalLayout)("hidden",r.currentImageIndex===0),l(2),P(r.isHorizontalLayout?"\u2190":"\u2191"),l(),B("horizontal",r.isHorizontalLayout)("vertical",!r.isHorizontalLayout)("hidden",r.currentImageIndex===r.images.length-1),l(2),P(r.isHorizontalLayout?"\u2192":"\u2193"),l(),A("ngIf",r.currentImage))},dependencies:[J,K],styles:["[_nghost-%COMP%]{display:block;position:relative;width:100dvw;height:100dvh;overflow:hidden;box-sizing:border-box}.gallery-pixi-wrapper[_ngcontent-%COMP%]{width:100dvw;height:100dvh;touch-action:none;position:relative}.nav-arrow[_ngcontent-%COMP%]{position:absolute;width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.9);box-shadow:0 2px 10px #0003;cursor:pointer;display:flex;align-items:center;justify-content:center;border:none;margin:20px;transition:all .2s ease;z-index:100}.nav-arrow.horizontal[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%)}.nav-arrow.horizontal.prev[_ngcontent-%COMP%]{left:20px}.nav-arrow.horizontal.next[_ngcontent-%COMP%]{right:20px}.nav-arrow.horizontal[_ngcontent-%COMP%]:hover{background:rgb(255,255,255);transform:translateY(-50%) scale(1.05)}.nav-arrow.vertical[_ngcontent-%COMP%]{left:50%;transform:translate(-50%)}.nav-arrow.vertical.prev[_ngcontent-%COMP%]{top:0}.nav-arrow.vertical.next[_ngcontent-%COMP%]{bottom:0}.nav-arrow.vertical[_ngcontent-%COMP%]:hover{background:rgb(255,255,255);transform:translate(-50%) scale(1.05)}.nav-arrow[_ngcontent-%COMP%]:active{transform:scale(.95)}.nav-arrow.hidden[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}.nav-arrow[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{font-size:28px;line-height:1}.image-info[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;padding:20px;background:linear-gradient(to top,rgba(0,0,0,.7) 0%,rgba(0,0,0,0) 100%);color:#fff;z-index:90}.info-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.text-content[_ngcontent-%COMP%]{flex:1}.image-title[_ngcontent-%COMP%]{margin:0 0 8px;font-size:24px;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,.5)}.image-subtitle[_ngcontent-%COMP%]{margin:0;font-size:16px;opacity:.9;text-shadow:0 1px 2px rgba(0,0,0,.5)}.brand-logo[_ngcontent-%COMP%]{height:40px;width:226px;margin-left:20px;opacity:.9}@media (max-width: 768px){.nav-arrow[_ngcontent-%COMP%]{width:50px;height:50px;margin:10px}.nav-arrow[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{font-size:24px}.image-info[_ngcontent-%COMP%]{padding:15px}.info-content[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.text-content[_ngcontent-%COMP%]{margin-bottom:10px}.image-title[_ngcontent-%COMP%]{font-size:20px}.image-subtitle[_ngcontent-%COMP%]{font-size:14px}.brand-logo[_ngcontent-%COMP%]{height:30px;width:auto;margin-left:0;margin-top:8px}}@media (max-width: 480px){.nav-arrow[_ngcontent-%COMP%]{width:40px;height:40px;margin:8px}.nav-arrow[_ngcontent-%COMP%]   .arrow-icon[_ngcontent-%COMP%]{font-size:20px}.image-info[_ngcontent-%COMP%]{padding:12px}.image-title[_ngcontent-%COMP%]{font-size:18px;margin-bottom:4px}.image-subtitle[_ngcontent-%COMP%]{font-size:12px}.brand-logo[_ngcontent-%COMP%]{height:25px;margin-top:5px}}"],changeDetection:0})}}return o})();export{pt as GalleryWallComponent};
