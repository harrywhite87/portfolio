import{a as t,b as o}from"./chunk-PJTN5MCN.js";import{d as s}from"./chunk-SO6VPFYA.js";var c,e,i,r=s(()=>{o();c="packingFunctions",e=`vec4 pack(float depth)
{const vec4 bit_shift=vec4(255.0*255.0*255.0,255.0*255.0,255.0,1.0);const vec4 bit_mask=vec4(0.0,1.0/255.0,1.0/255.0,1.0/255.0);vec4 res=fract(depth*bit_shift);res-=res.xxyz*bit_mask;return res;}
float unpack(vec4 color)
{const vec4 bit_shift=vec4(1.0/(255.0*255.0*255.0),1.0/(255.0*255.0),1.0/255.0,1.0);return dot(color,bit_shift);}`;t.IncludesShadersStore[c]=e;i={name:c,shader:e}});export{i as a,r as b};
