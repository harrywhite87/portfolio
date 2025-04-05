import{a as e,b as o}from"./chunk-PJTN5MCN.js";import{d}from"./chunk-SO6VPFYA.js";var i,l,n,P=d(()=>{o();i="clipPlaneVertex",l=`#ifdef CLIPPLANE
fClipDistance=dot(worldPos,vClipPlane);
#endif
#ifdef CLIPPLANE2
fClipDistance2=dot(worldPos,vClipPlane2);
#endif
#ifdef CLIPPLANE3
fClipDistance3=dot(worldPos,vClipPlane3);
#endif
#ifdef CLIPPLANE4
fClipDistance4=dot(worldPos,vClipPlane4);
#endif
#ifdef CLIPPLANE5
fClipDistance5=dot(worldPos,vClipPlane5);
#endif
#ifdef CLIPPLANE6
fClipDistance6=dot(worldPos,vClipPlane6);
#endif
`;e.IncludesShadersStore[i]=l;n={name:i,shader:l}});export{n as a,P as b};
