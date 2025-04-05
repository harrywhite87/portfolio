import{A as vo,B as Ao,Ca as Do,D as gt,Eb as bt,Fb as Re,L as qs,Ma as Me,N as yo,O as Eo,Oa as Be,P as So,Ra as To,Ua as Bo,_a as Ro,c as G,cb as je,d as te,e as Te,g as ft,h as le,j as fo,kb as Ke,m as mo,n as ho,ra as xt,s as mt,t as go,tb as wo,u as dt,v as z,vb as _e,z as _o}from"./chunk-B2Q7KY5G.js";import{a as W,g as _t,v as Po}from"./chunk-Y24LPCLM.js";import{$ as J,D as Fe,E as pt,Fb as ce,Hb as ht,I as co,La as rr,Lb as Co,Ma as xo,N as po,P as N,Pa as bo,Ya as re,a as m,ba as Ue,c as ue,ca as q,e as We,eb as oe,ga as T,ia as Oe,j as lo,k as ct,ka as tr,l as ae,o as P,pa as ge,q as E,qa as Ye,sa as xe,ta as ee,va as w,xa as be}from"./chunk-WLEDRWRN.js";import{a as h,b as C,c as D,e as ze,g as oi,j as d}from"./chunk-SO6VPFYA.js";var Ut=ze(tt=>{"use strict";function ou(e,t,r){if(r===void 0&&(r=Array.prototype),e&&typeof r.find=="function")return r.find.call(e,t);for(var o=0;o<e.length;o++)if(Object.prototype.hasOwnProperty.call(e,o)){var n=e[o];if(t.call(void 0,n,o,e))return n}}function dn(e,t){return t===void 0&&(t=Object),t&&typeof t.freeze=="function"?t.freeze(e):e}function nu(e,t){if(e===null||typeof e!="object")throw new TypeError("target is not an object");for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}var Di=dn({HTML:"text/html",isHTML:function(e){return e===Di.HTML},XML_APPLICATION:"application/xml",XML_TEXT:"text/xml",XML_XHTML_APPLICATION:"application/xhtml+xml",XML_SVG_IMAGE:"image/svg+xml"}),Ti=dn({HTML:"http://www.w3.org/1999/xhtml",isHTML:function(e){return e===Ti.HTML},SVG:"http://www.w3.org/2000/svg",XML:"http://www.w3.org/XML/1998/namespace",XMLNS:"http://www.w3.org/2000/xmlns/"});tt.assign=nu;tt.find=ou;tt.freeze=dn;tt.MIME_TYPE=Di;tt.NAMESPACE=Ti});var Cn=ze(we=>{"use strict";var Mi=Ut(),de=Mi.find,Ot=Mi.NAMESPACE;function iu(e){return e!==""}function su(e){return e?e.split(/[\t\n\f\r ]+/).filter(iu):[]}function au(e,t){return e.hasOwnProperty(t)||(e[t]=!0),e}function Bi(e){if(!e)return[];var t=su(e);return Object.keys(t.reduce(au,{}))}function uu(e){return function(t){return e&&e.indexOf(t)!==-1}}function Gt(e,t){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}function Q(e,t){var r=e.prototype;if(!(r instanceof t)){let n=function(){};var o=n;n.prototype=t.prototype,n=new n,Gt(r,n),e.prototype=r=n}r.constructor!=e&&(typeof e!="function"&&console.error("unknown Class:"+e),r.constructor=e)}var Z={},fe=Z.ELEMENT_NODE=1,ot=Z.ATTRIBUTE_NODE=2,Lr=Z.TEXT_NODE=3,Gi=Z.CDATA_SECTION_NODE=4,Ii=Z.ENTITY_REFERENCE_NODE=5,lu=Z.ENTITY_NODE=6,Ni=Z.PROCESSING_INSTRUCTION_NODE=7,Li=Z.COMMENT_NODE=8,ki=Z.DOCUMENT_NODE=9,Xi=Z.DOCUMENT_TYPE_NODE=10,Se=Z.DOCUMENT_FRAGMENT_NODE=11,cu=Z.NOTATION_NODE=12,H={},k={},Ch=H.INDEX_SIZE_ERR=(k[1]="Index size error",1),Dh=H.DOMSTRING_SIZE_ERR=(k[2]="DOMString size error",2),$=H.HIERARCHY_REQUEST_ERR=(k[3]="Hierarchy request error",3),Th=H.WRONG_DOCUMENT_ERR=(k[4]="Wrong document",4),Bh=H.INVALID_CHARACTER_ERR=(k[5]="Invalid character",5),Rh=H.NO_DATA_ALLOWED_ERR=(k[6]="No data allowed",6),wh=H.NO_MODIFICATION_ALLOWED_ERR=(k[7]="No modification allowed",7),Hi=H.NOT_FOUND_ERR=(k[8]="Not found",8),Ph=H.NOT_SUPPORTED_ERR=(k[9]="Not supported",9),Ri=H.INUSE_ATTRIBUTE_ERR=(k[10]="Attribute in use",10),Fh=H.INVALID_STATE_ERR=(k[11]="Invalid state",11),Uh=H.SYNTAX_ERR=(k[12]="Syntax error",12),Oh=H.INVALID_MODIFICATION_ERR=(k[13]="Invalid modification",13),Mh=H.NAMESPACE_ERR=(k[14]="Invalid namespace",14),Gh=H.INVALID_ACCESS_ERR=(k[15]="Invalid access",15);function I(e,t){if(t instanceof Error)var r=t;else r=this,Error.call(this,k[e]),this.message=k[e],Error.captureStackTrace&&Error.captureStackTrace(this,I);return r.code=e,t&&(this.message=this.message+": "+t),r}I.prototype=Error.prototype;Gt(H,I);function Ee(){}Ee.prototype={length:0,item:function(e){return e>=0&&e<this.length?this[e]:null},toString:function(e,t){for(var r=[],o=0;o<this.length;o++)rt(this[o],r,e,t);return r.join("")},filter:function(e){return Array.prototype.filter.call(this,e)},indexOf:function(e){return Array.prototype.indexOf.call(this,e)}};function nt(e,t){this._node=e,this._refresh=t,xn(this)}function xn(e){var t=e._node._inc||e._node.ownerDocument._inc;if(e._inc!==t){var r=e._refresh(e._node);if(es(e,"length",r.length),!e.$$length||r.length<e.$$length)for(var o=r.length;o in e;o++)Object.prototype.hasOwnProperty.call(e,o)&&delete e[o];Gt(r,e),e._inc=t}}nt.prototype.item=function(e){return xn(this),this[e]||null};Q(nt,Ee);function kr(){}function Vi(e,t){for(var r=e.length;r--;)if(e[r]===t)return r}function wi(e,t,r,o){if(o?t[Vi(t,o)]=r:t[t.length++]=r,e){r.ownerElement=e;var n=e.ownerDocument;n&&(o&&Wi(n,e,o),pu(n,e,r))}}function Pi(e,t,r){var o=Vi(t,r);if(o>=0){for(var n=t.length-1;o<n;)t[o]=t[++o];if(t.length=n,e){var i=e.ownerDocument;i&&(Wi(i,e,r),r.ownerElement=null)}}else throw new I(Hi,new Error(e.tagName+"@"+r))}kr.prototype={length:0,item:Ee.prototype.item,getNamedItem:function(e){for(var t=this.length;t--;){var r=this[t];if(r.nodeName==e)return r}},setNamedItem:function(e){var t=e.ownerElement;if(t&&t!=this._ownerElement)throw new I(Ri);var r=this.getNamedItem(e.nodeName);return wi(this._ownerElement,this,e,r),r},setNamedItemNS:function(e){var t=e.ownerElement,r;if(t&&t!=this._ownerElement)throw new I(Ri);return r=this.getNamedItemNS(e.namespaceURI,e.localName),wi(this._ownerElement,this,e,r),r},removeNamedItem:function(e){var t=this.getNamedItem(e);return Pi(this._ownerElement,this,t),t},removeNamedItemNS:function(e,t){var r=this.getNamedItemNS(e,t);return Pi(this._ownerElement,this,r),r},getNamedItemNS:function(e,t){for(var r=this.length;r--;){var o=this[r];if(o.localName==t&&o.namespaceURI==e)return o}return null}};function qi(){}qi.prototype={hasFeature:function(e,t){return!0},createDocument:function(e,t,r){var o=new It;if(o.implementation=this,o.childNodes=new Ee,o.doctype=r||null,r&&o.appendChild(r),t){var n=o.createElementNS(e,t);o.appendChild(n)}return o},createDocumentType:function(e,t,r){var o=new Vr;return o.name=e,o.nodeName=e,o.publicId=t||"",o.systemId=r||"",o}};function R(){}R.prototype={firstChild:null,lastChild:null,previousSibling:null,nextSibling:null,attributes:null,parentNode:null,childNodes:null,ownerDocument:null,nodeValue:null,namespaceURI:null,prefix:null,localName:null,insertBefore:function(e,t){return Xr(this,e,t)},replaceChild:function(e,t){Xr(this,e,t,ji),t&&this.removeChild(t)},removeChild:function(e){return Yi(this,e)},appendChild:function(e){return this.insertBefore(e,null)},hasChildNodes:function(){return this.firstChild!=null},cloneNode:function(e){return gn(this.ownerDocument||this,this,e)},normalize:function(){for(var e=this.firstChild;e;){var t=e.nextSibling;t&&t.nodeType==Lr&&e.nodeType==Lr?(this.removeChild(t),e.appendData(t.data)):(e.normalize(),e=t)}},isSupported:function(e,t){return this.ownerDocument.implementation.hasFeature(e,t)},hasAttributes:function(){return this.attributes.length>0},lookupPrefix:function(e){for(var t=this;t;){var r=t._nsMap;if(r){for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)&&r[o]===e)return o}t=t.nodeType==ot?t.ownerDocument:t.parentNode}return null},lookupNamespaceURI:function(e){for(var t=this;t;){var r=t._nsMap;if(r&&Object.prototype.hasOwnProperty.call(r,e))return r[e];t=t.nodeType==ot?t.ownerDocument:t.parentNode}return null},isDefaultNamespace:function(e){var t=this.lookupPrefix(e);return t==null}};function zi(e){return e=="<"&&"&lt;"||e==">"&&"&gt;"||e=="&"&&"&amp;"||e=='"'&&"&quot;"||"&#"+e.charCodeAt()+";"}Gt(Z,R);Gt(Z,R.prototype);function Mt(e,t){if(t(e))return!0;if(e=e.firstChild)do if(Mt(e,t))return!0;while(e=e.nextSibling)}function It(){this.ownerDocument=this}function pu(e,t,r){e&&e._inc++;var o=r.namespaceURI;o===Ot.XMLNS&&(t._nsMap[r.prefix?r.localName:""]=r.value)}function Wi(e,t,r,o){e&&e._inc++;var n=r.namespaceURI;n===Ot.XMLNS&&delete t._nsMap[r.prefix?r.localName:""]}function bn(e,t,r){if(e&&e._inc){e._inc++;var o=t.childNodes;if(r)o[o.length++]=r;else{for(var n=t.firstChild,i=0;n;)o[i++]=n,n=n.nextSibling;o.length=i,delete o[o.length]}}}function Yi(e,t){var r=t.previousSibling,o=t.nextSibling;return r?r.nextSibling=o:e.firstChild=o,o?o.previousSibling=r:e.lastChild=r,t.parentNode=null,t.previousSibling=null,t.nextSibling=null,bn(e.ownerDocument,e),t}function fu(e){return e&&(e.nodeType===R.DOCUMENT_NODE||e.nodeType===R.DOCUMENT_FRAGMENT_NODE||e.nodeType===R.ELEMENT_NODE)}function mu(e){return e&&(he(e)||_n(e)||Ce(e)||e.nodeType===R.DOCUMENT_FRAGMENT_NODE||e.nodeType===R.COMMENT_NODE||e.nodeType===R.PROCESSING_INSTRUCTION_NODE)}function Ce(e){return e&&e.nodeType===R.DOCUMENT_TYPE_NODE}function he(e){return e&&e.nodeType===R.ELEMENT_NODE}function _n(e){return e&&e.nodeType===R.TEXT_NODE}function Fi(e,t){var r=e.childNodes||[];if(de(r,he)||Ce(t))return!1;var o=de(r,Ce);return!(t&&o&&r.indexOf(o)>r.indexOf(t))}function Ui(e,t){var r=e.childNodes||[];function o(i){return he(i)&&i!==t}if(de(r,o))return!1;var n=de(r,Ce);return!(t&&n&&r.indexOf(n)>r.indexOf(t))}function du(e,t,r){if(!fu(e))throw new I($,"Unexpected parent node type "+e.nodeType);if(r&&r.parentNode!==e)throw new I(Hi,"child not in parent");if(!mu(t)||Ce(t)&&e.nodeType!==R.DOCUMENT_NODE)throw new I($,"Unexpected node type "+t.nodeType+" for parent node type "+e.nodeType)}function hu(e,t,r){var o=e.childNodes||[],n=t.childNodes||[];if(t.nodeType===R.DOCUMENT_FRAGMENT_NODE){var i=n.filter(he);if(i.length>1||de(n,_n))throw new I($,"More than one element or text in fragment");if(i.length===1&&!Fi(e,r))throw new I($,"Element in fragment can not be inserted before doctype")}if(he(t)&&!Fi(e,r))throw new I($,"Only one element can be added and only after doctype");if(Ce(t)){if(de(o,Ce))throw new I($,"Only one doctype is allowed");var s=de(o,he);if(r&&o.indexOf(s)<o.indexOf(r))throw new I($,"Doctype can only be inserted before an element");if(!r&&s)throw new I($,"Doctype can not be appended since element is present")}}function ji(e,t,r){var o=e.childNodes||[],n=t.childNodes||[];if(t.nodeType===R.DOCUMENT_FRAGMENT_NODE){var i=n.filter(he);if(i.length>1||de(n,_n))throw new I($,"More than one element or text in fragment");if(i.length===1&&!Ui(e,r))throw new I($,"Element in fragment can not be inserted before doctype")}if(he(t)&&!Ui(e,r))throw new I($,"Only one element can be added and only after doctype");if(Ce(t)){let u=function(l){return Ce(l)&&l!==r};var a=u;if(de(o,u))throw new I($,"Only one doctype is allowed");var s=de(o,he);if(r&&o.indexOf(s)<o.indexOf(r))throw new I($,"Doctype can only be inserted before an element")}}function Xr(e,t,r,o){du(e,t,r),e.nodeType===R.DOCUMENT_NODE&&(o||hu)(e,t,r);var n=t.parentNode;if(n&&n.removeChild(t),t.nodeType===Se){var i=t.firstChild;if(i==null)return t;var s=t.lastChild}else i=s=t;var a=r?r.previousSibling:e.lastChild;i.previousSibling=a,s.nextSibling=r,a?a.nextSibling=i:e.firstChild=i,r==null?e.lastChild=s:r.previousSibling=s;do i.parentNode=e;while(i!==s&&(i=i.nextSibling));return bn(e.ownerDocument||e,e),t.nodeType==Se&&(t.firstChild=t.lastChild=null),t}function gu(e,t){return t.parentNode&&t.parentNode.removeChild(t),t.parentNode=e,t.previousSibling=e.lastChild,t.nextSibling=null,t.previousSibling?t.previousSibling.nextSibling=t:e.firstChild=t,e.lastChild=t,bn(e.ownerDocument,e,t),t}It.prototype={nodeName:"#document",nodeType:ki,doctype:null,documentElement:null,_inc:1,insertBefore:function(e,t){if(e.nodeType==Se){for(var r=e.firstChild;r;){var o=r.nextSibling;this.insertBefore(r,t),r=o}return e}return Xr(this,e,t),e.ownerDocument=this,this.documentElement===null&&e.nodeType===fe&&(this.documentElement=e),e},removeChild:function(e){return this.documentElement==e&&(this.documentElement=null),Yi(this,e)},replaceChild:function(e,t){Xr(this,e,t,ji),e.ownerDocument=this,t&&this.removeChild(t),he(e)&&(this.documentElement=e)},importNode:function(e,t){return Ji(this,e,t)},getElementById:function(e){var t=null;return Mt(this.documentElement,function(r){if(r.nodeType==fe&&r.getAttribute("id")==e)return t=r,!0}),t},getElementsByClassName:function(e){var t=Bi(e);return new nt(this,function(r){var o=[];return t.length>0&&Mt(r.documentElement,function(n){if(n!==r&&n.nodeType===fe){var i=n.getAttribute("class");if(i){var s=e===i;if(!s){var a=Bi(i);s=t.every(uu(a))}s&&o.push(n)}}}),o})},createElement:function(e){var t=new ke;t.ownerDocument=this,t.nodeName=e,t.tagName=e,t.localName=e,t.childNodes=new Ee;var r=t.attributes=new kr;return r._ownerElement=t,t},createDocumentFragment:function(){var e=new qr;return e.ownerDocument=this,e.childNodes=new Ee,e},createTextNode:function(e){var t=new vn;return t.ownerDocument=this,t.appendData(e),t},createComment:function(e){var t=new An;return t.ownerDocument=this,t.appendData(e),t},createCDATASection:function(e){var t=new yn;return t.ownerDocument=this,t.appendData(e),t},createProcessingInstruction:function(e,t){var r=new Sn;return r.ownerDocument=this,r.tagName=r.nodeName=r.target=e,r.nodeValue=r.data=t,r},createAttribute:function(e){var t=new Hr;return t.ownerDocument=this,t.name=e,t.nodeName=e,t.localName=e,t.specified=!0,t},createEntityReference:function(e){var t=new En;return t.ownerDocument=this,t.nodeName=e,t},createElementNS:function(e,t){var r=new ke,o=t.split(":"),n=r.attributes=new kr;return r.childNodes=new Ee,r.ownerDocument=this,r.nodeName=t,r.tagName=t,r.namespaceURI=e,o.length==2?(r.prefix=o[0],r.localName=o[1]):r.localName=t,n._ownerElement=r,r},createAttributeNS:function(e,t){var r=new Hr,o=t.split(":");return r.ownerDocument=this,r.nodeName=t,r.name=t,r.namespaceURI=e,r.specified=!0,o.length==2?(r.prefix=o[0],r.localName=o[1]):r.localName=t,r}};Q(It,R);function ke(){this._nsMap={}}ke.prototype={nodeType:fe,hasAttribute:function(e){return this.getAttributeNode(e)!=null},getAttribute:function(e){var t=this.getAttributeNode(e);return t&&t.value||""},getAttributeNode:function(e){return this.attributes.getNamedItem(e)},setAttribute:function(e,t){var r=this.ownerDocument.createAttribute(e);r.value=r.nodeValue=""+t,this.setAttributeNode(r)},removeAttribute:function(e){var t=this.getAttributeNode(e);t&&this.removeAttributeNode(t)},appendChild:function(e){return e.nodeType===Se?this.insertBefore(e,null):gu(this,e)},setAttributeNode:function(e){return this.attributes.setNamedItem(e)},setAttributeNodeNS:function(e){return this.attributes.setNamedItemNS(e)},removeAttributeNode:function(e){return this.attributes.removeNamedItem(e.nodeName)},removeAttributeNS:function(e,t){var r=this.getAttributeNodeNS(e,t);r&&this.removeAttributeNode(r)},hasAttributeNS:function(e,t){return this.getAttributeNodeNS(e,t)!=null},getAttributeNS:function(e,t){var r=this.getAttributeNodeNS(e,t);return r&&r.value||""},setAttributeNS:function(e,t,r){var o=this.ownerDocument.createAttributeNS(e,t);o.value=o.nodeValue=""+r,this.setAttributeNode(o)},getAttributeNodeNS:function(e,t){return this.attributes.getNamedItemNS(e,t)},getElementsByTagName:function(e){return new nt(this,function(t){var r=[];return Mt(t,function(o){o!==t&&o.nodeType==fe&&(e==="*"||o.tagName==e)&&r.push(o)}),r})},getElementsByTagNameNS:function(e,t){return new nt(this,function(r){var o=[];return Mt(r,function(n){n!==r&&n.nodeType===fe&&(e==="*"||n.namespaceURI===e)&&(t==="*"||n.localName==t)&&o.push(n)}),o})}};It.prototype.getElementsByTagName=ke.prototype.getElementsByTagName;It.prototype.getElementsByTagNameNS=ke.prototype.getElementsByTagNameNS;Q(ke,R);function Hr(){}Hr.prototype.nodeType=ot;Q(Hr,R);function Nt(){}Nt.prototype={data:"",substringData:function(e,t){return this.data.substring(e,e+t)},appendData:function(e){e=this.data+e,this.nodeValue=this.data=e,this.length=e.length},insertData:function(e,t){this.replaceData(e,0,t)},appendChild:function(e){throw new Error(k[$])},deleteData:function(e,t){this.replaceData(e,t,"")},replaceData:function(e,t,r){var o=this.data.substring(0,e),n=this.data.substring(e+t);r=o+r+n,this.nodeValue=this.data=r,this.length=r.length}};Q(Nt,R);function vn(){}vn.prototype={nodeName:"#text",nodeType:Lr,splitText:function(e){var t=this.data,r=t.substring(e);t=t.substring(0,e),this.data=this.nodeValue=t,this.length=t.length;var o=this.ownerDocument.createTextNode(r);return this.parentNode&&this.parentNode.insertBefore(o,this.nextSibling),o}};Q(vn,Nt);function An(){}An.prototype={nodeName:"#comment",nodeType:Li};Q(An,Nt);function yn(){}yn.prototype={nodeName:"#cdata-section",nodeType:Gi};Q(yn,Nt);function Vr(){}Vr.prototype.nodeType=Xi;Q(Vr,R);function Ki(){}Ki.prototype.nodeType=cu;Q(Ki,R);function $i(){}$i.prototype.nodeType=lu;Q($i,R);function En(){}En.prototype.nodeType=Ii;Q(En,R);function qr(){}qr.prototype.nodeName="#document-fragment";qr.prototype.nodeType=Se;Q(qr,R);function Sn(){}Sn.prototype.nodeType=Ni;Q(Sn,R);function Qi(){}Qi.prototype.serializeToString=function(e,t,r){return Zi.call(e,t,r)};R.prototype.toString=Zi;function Zi(e,t){var r=[],o=this.nodeType==9&&this.documentElement||this,n=o.prefix,i=o.namespaceURI;if(i&&n==null){var n=o.lookupPrefix(i);if(n==null)var s=[{namespace:i,prefix:null}]}return rt(this,r,e,t,s),r.join("")}function Oi(e,t,r){var o=e.prefix||"",n=e.namespaceURI;if(!n||o==="xml"&&n===Ot.XML||n===Ot.XMLNS)return!1;for(var i=r.length;i--;){var s=r[i];if(s.prefix===o)return s.namespace!==n}return!0}function hn(e,t,r){e.push(" ",t,'="',r.replace(/[<>&"\t\n\r]/g,zi),'"')}function rt(e,t,r,o,n){if(n||(n=[]),o)if(e=o(e),e){if(typeof e=="string"){t.push(e);return}}else return;switch(e.nodeType){case fe:var i=e.attributes,s=i.length,y=e.firstChild,a=e.tagName;r=Ot.isHTML(e.namespaceURI)||r;var u=a;if(!r&&!e.prefix&&e.namespaceURI){for(var l,c=0;c<i.length;c++)if(i.item(c).name==="xmlns"){l=i.item(c).value;break}if(!l)for(var p=n.length-1;p>=0;p--){var f=n[p];if(f.prefix===""&&f.namespace===e.namespaceURI){l=f.namespace;break}}if(l!==e.namespaceURI)for(var p=n.length-1;p>=0;p--){var f=n[p];if(f.namespace===e.namespaceURI){f.prefix&&(u=f.prefix+":"+a);break}}}t.push("<",u);for(var g=0;g<s;g++){var x=i.item(g);x.prefix=="xmlns"?n.push({prefix:x.localName,namespace:x.value}):x.nodeName=="xmlns"&&n.push({prefix:"",namespace:x.value})}for(var g=0;g<s;g++){var x=i.item(g);if(Oi(x,r,n)){var _=x.prefix||"",b=x.namespaceURI;hn(t,_?"xmlns:"+_:"xmlns",b),n.push({prefix:_,namespace:b})}rt(x,t,r,o,n)}if(a===u&&Oi(e,r,n)){var _=e.prefix||"",b=e.namespaceURI;hn(t,_?"xmlns:"+_:"xmlns",b),n.push({prefix:_,namespace:b})}if(y||r&&!/^(?:meta|link|img|br|hr|input)$/i.test(a)){if(t.push(">"),r&&/^script$/i.test(a))for(;y;)y.data?t.push(y.data):rt(y,t,r,o,n.slice()),y=y.nextSibling;else for(;y;)rt(y,t,r,o,n.slice()),y=y.nextSibling;t.push("</",u,">")}else t.push("/>");return;case ki:case Se:for(var y=e.firstChild;y;)rt(y,t,r,o,n.slice()),y=y.nextSibling;return;case ot:return hn(t,e.name,e.value);case Lr:return t.push(e.data.replace(/[<&>]/g,zi));case Gi:return t.push("<![CDATA[",e.data,"]]>");case Li:return t.push("<!--",e.data,"-->");case Xi:var F=e.publicId,S=e.systemId;if(t.push("<!DOCTYPE ",e.name),F)t.push(" PUBLIC ",F),S&&S!="."&&t.push(" ",S),t.push(">");else if(S&&S!=".")t.push(" SYSTEM ",S,">");else{var B=e.internalSubset;B&&t.push(" [",B,"]"),t.push(">")}return;case Ni:return t.push("<?",e.target," ",e.data,"?>");case Ii:return t.push("&",e.nodeName,";");default:t.push("??",e.nodeName)}}function Ji(e,t,r){var o;switch(t.nodeType){case fe:o=t.cloneNode(!1),o.ownerDocument=e;case Se:break;case ot:r=!0;break}if(o||(o=t.cloneNode(!1)),o.ownerDocument=e,o.parentNode=null,r)for(var n=t.firstChild;n;)o.appendChild(Ji(e,n,r)),n=n.nextSibling;return o}function gn(e,t,r){var o=new t.constructor;for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=t[n];typeof i!="object"&&i!=o[n]&&(o[n]=i)}switch(t.childNodes&&(o.childNodes=new Ee),o.ownerDocument=e,o.nodeType){case fe:var s=t.attributes,a=o.attributes=new kr,u=s.length;a._ownerElement=o;for(var l=0;l<u;l++)o.setAttributeNode(gn(e,s.item(l),!0));break;case ot:r=!0}if(r)for(var c=t.firstChild;c;)o.appendChild(gn(e,c,r)),c=c.nextSibling;return o}function es(e,t,r){e[t]=r}try{if(Object.defineProperty){let e=function(t){switch(t.nodeType){case fe:case Se:var r=[];for(t=t.firstChild;t;)t.nodeType!==7&&t.nodeType!==8&&r.push(e(t)),t=t.nextSibling;return r.join("");default:return t.nodeValue}};xu=e,Object.defineProperty(nt.prototype,"length",{get:function(){return xn(this),this.$$length}}),Object.defineProperty(R.prototype,"textContent",{get:function(){return e(this)},set:function(t){switch(this.nodeType){case fe:case Se:for(;this.firstChild;)this.removeChild(this.firstChild);(t||String(t))&&this.appendChild(this.ownerDocument.createTextNode(t));break;default:this.data=t,this.value=t,this.nodeValue=t}}}),es=function(t,r,o){t["$$"+r]=o}}}catch{}var xu;we.DocumentType=Vr;we.DOMException=I;we.DOMImplementation=qi;we.Element=ke;we.Node=R;we.NodeList=Ee;we.XMLSerializer=Qi});var rs=ze(Lt=>{"use strict";var ts=Ut().freeze;Lt.XML_ENTITIES=ts({amp:"&",apos:"'",gt:">",lt:"<",quot:'"'});Lt.HTML_ENTITIES=ts({Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\u{1D504}",afr:"\u{1D51E}",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",AMP:"&",amp:"&",And:"\u2A53",and:"\u2227",andand:"\u2A55",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsd:"\u2221",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\u{1D538}",aopf:"\u{1D552}",ap:"\u2248",apacir:"\u2A6F",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\u{1D49C}",ascr:"\u{1D4B6}",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",Barwed:"\u2306",barwed:"\u2305",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",Because:"\u2235",because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\u{1D505}",bfr:"\u{1D51F}",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\u{1D539}",bopf:"\u{1D553}",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxDL:"\u2557",boxDl:"\u2556",boxdL:"\u2555",boxdl:"\u2510",boxDR:"\u2554",boxDr:"\u2553",boxdR:"\u2552",boxdr:"\u250C",boxH:"\u2550",boxh:"\u2500",boxHD:"\u2566",boxHd:"\u2564",boxhD:"\u2565",boxhd:"\u252C",boxHU:"\u2569",boxHu:"\u2567",boxhU:"\u2568",boxhu:"\u2534",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxUL:"\u255D",boxUl:"\u255C",boxuL:"\u255B",boxul:"\u2518",boxUR:"\u255A",boxUr:"\u2559",boxuR:"\u2558",boxur:"\u2514",boxV:"\u2551",boxv:"\u2502",boxVH:"\u256C",boxVh:"\u256B",boxvH:"\u256A",boxvh:"\u253C",boxVL:"\u2563",boxVl:"\u2562",boxvL:"\u2561",boxvl:"\u2524",boxVR:"\u2560",boxVr:"\u255F",boxvR:"\u255E",boxvr:"\u251C",bprime:"\u2035",Breve:"\u02D8",breve:"\u02D8",brvbar:"\xA6",Bscr:"\u212C",bscr:"\u{1D4B7}",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsol:"\\",bsolb:"\u29C5",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",Cap:"\u22D2",cap:"\u2229",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",CenterDot:"\xB7",centerdot:"\xB7",Cfr:"\u212D",cfr:"\u{1D520}",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",cir:"\u25CB",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",Colon:"\u2237",colon:":",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",Conint:"\u222F",conint:"\u222E",ContourIntegral:"\u222E",Copf:"\u2102",copf:"\u{1D554}",coprod:"\u2210",Coproduct:"\u2210",COPY:"\xA9",copy:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",Cross:"\u2A2F",cross:"\u2717",Cscr:"\u{1D49E}",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",Cup:"\u22D3",cup:"\u222A",cupbrcap:"\u2A48",CupCap:"\u224D",cupcap:"\u2A46",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",Dagger:"\u2021",dagger:"\u2020",daleth:"\u2138",Darr:"\u21A1",dArr:"\u21D3",darr:"\u2193",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",DD:"\u2145",dd:"\u2146",ddagger:"\u2021",ddarr:"\u21CA",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\u{1D507}",dfr:"\u{1D521}",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",Diamond:"\u22C4",diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\u{1D53B}",dopf:"\u{1D555}",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrow:"\u2193",Downarrow:"\u21D3",downarrow:"\u2193",DownArrowBar:"\u2913",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVector:"\u21BD",DownLeftVectorBar:"\u2956",DownRightTeeVector:"\u295F",DownRightVector:"\u21C1",DownRightVectorBar:"\u2957",DownTee:"\u22A4",DownTeeArrow:"\u21A7",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\u{1D49F}",dscr:"\u{1D4B9}",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",ecir:"\u2256",Ecirc:"\xCA",ecirc:"\xEA",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",eDot:"\u2251",edot:"\u0117",ee:"\u2147",efDot:"\u2252",Efr:"\u{1D508}",efr:"\u{1D522}",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp:"\u2003",emsp13:"\u2004",emsp14:"\u2005",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\u{1D53C}",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",Escr:"\u2130",escr:"\u212F",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",ExponentialE:"\u2147",exponentiale:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\u{1D509}",ffr:"\u{1D523}",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\u{1D53D}",fopf:"\u{1D557}",ForAll:"\u2200",forall:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",Fscr:"\u2131",fscr:"\u{1D4BB}",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",gE:"\u2267",ge:"\u2265",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",ges:"\u2A7E",gescc:"\u2AA9",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\u{1D50A}",gfr:"\u{1D524}",Gg:"\u22D9",gg:"\u226B",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gl:"\u2277",gla:"\u2AA5",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gnE:"\u2269",gne:"\u2A88",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\u{1D53E}",gopf:"\u{1D558}",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\u{1D4A2}",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",Gt:"\u226B",GT:">",gt:">",gtcc:"\u2AA7",gtcir:"\u2A7A",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",hArr:"\u21D4",harr:"\u2194",harrcir:"\u2948",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",Hfr:"\u210C",hfr:"\u{1D525}",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",Hopf:"\u210D",hopf:"\u{1D559}",horbar:"\u2015",HorizontalLine:"\u2500",Hscr:"\u210B",hscr:"\u{1D4BD}",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",Ifr:"\u2111",ifr:"\u{1D526}",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Im:"\u2111",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",in:"\u2208",incare:"\u2105",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",Int:"\u222C",int:"\u222B",intcal:"\u22BA",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\u{1D540}",iopf:"\u{1D55A}",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",Iscr:"\u2110",iscr:"\u{1D4BE}",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\u{1D50D}",jfr:"\u{1D527}",jmath:"\u0237",Jopf:"\u{1D541}",jopf:"\u{1D55B}",Jscr:"\u{1D4A5}",jscr:"\u{1D4BF}",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\u{1D50E}",kfr:"\u{1D528}",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\u{1D542}",kopf:"\u{1D55C}",Kscr:"\u{1D4A6}",kscr:"\u{1D4C0}",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",Lang:"\u27EA",lang:"\u27E8",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",Larr:"\u219E",lArr:"\u21D0",larr:"\u2190",larrb:"\u21E4",larrbfs:"\u291F",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",lat:"\u2AAB",lAtail:"\u291B",latail:"\u2919",late:"\u2AAD",lates:"\u2AAD\uFE00",lBarr:"\u290E",lbarr:"\u290C",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",lE:"\u2266",le:"\u2264",LeftAngleBracket:"\u27E8",LeftArrow:"\u2190",Leftarrow:"\u21D0",leftarrow:"\u2190",LeftArrowBar:"\u21E4",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVector:"\u21C3",LeftDownVectorBar:"\u2959",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrow:"\u2194",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTee:"\u22A3",LeftTeeArrow:"\u21A4",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangle:"\u22B2",LeftTriangleBar:"\u29CF",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVector:"\u21BF",LeftUpVectorBar:"\u2958",LeftVector:"\u21BC",LeftVectorBar:"\u2952",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",les:"\u2A7D",lescc:"\u2AA8",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\u{1D50F}",lfr:"\u{1D529}",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",Ll:"\u22D8",ll:"\u226A",llarr:"\u21C7",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoust:"\u23B0",lmoustache:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lnE:"\u2268",lne:"\u2A87",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftarrow:"\u27F5",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longleftrightarrow:"\u27F7",longmapsto:"\u27FC",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",longrightarrow:"\u27F6",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\u{1D543}",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",Lscr:"\u2112",lscr:"\u{1D4C1}",Lsh:"\u21B0",lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",Lt:"\u226A",LT:"<",lt:"<",ltcc:"\u2AA6",ltcir:"\u2A79",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\u{1D510}",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",mid:"\u2223",midast:"*",midcir:"\u2AF0",middot:"\xB7",minus:"\u2212",minusb:"\u229F",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\u{1D544}",mopf:"\u{1D55E}",mp:"\u2213",Mscr:"\u2133",mscr:"\u{1D4C2}",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natur:"\u266E",natural:"\u266E",naturals:"\u2115",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",ne:"\u2260",nearhk:"\u2924",neArr:"\u21D7",nearr:"\u2197",nearrow:"\u2197",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:`
`,nexist:"\u2204",nexists:"\u2204",Nfr:"\u{1D511}",nfr:"\u{1D52B}",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nhArr:"\u21CE",nharr:"\u21AE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlArr:"\u21CD",nlarr:"\u219A",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nLeftarrow:"\u21CD",nleftarrow:"\u219A",nLeftrightarrow:"\u21CE",nleftrightarrow:"\u21AE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",Nopf:"\u2115",nopf:"\u{1D55F}",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangle:"\u22EA",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangle:"\u22EB",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",npar:"\u2226",nparallel:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",npre:"\u2AAF\u0338",nprec:"\u2280",npreceq:"\u2AAF\u0338",nrArr:"\u21CF",nrarr:"\u219B",nrarrc:"\u2933\u0338",nrarrw:"\u219D\u0338",nRightarrow:"\u21CF",nrightarrow:"\u219B",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\u{1D4A9}",nscr:"\u{1D4C3}",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nVDash:"\u22AF",nVdash:"\u22AE",nvDash:"\u22AD",nvdash:"\u22AC",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwArr:"\u21D6",nwarr:"\u2196",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",ocir:"\u229A",Ocirc:"\xD4",ocirc:"\xF4",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\u{1D512}",ofr:"\u{1D52C}",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\u{1D546}",oopf:"\u{1D560}",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",Or:"\u2A54",or:"\u2228",orarr:"\u21BB",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\u{1D4AA}",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",Otimes:"\u2A37",otimes:"\u2297",otimesas:"\u2A36",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",par:"\u2225",para:"\xB6",parallel:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\u{1D513}",pfr:"\u{1D52D}",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plus:"+",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",Popf:"\u2119",popf:"\u{1D561}",pound:"\xA3",Pr:"\u2ABB",pr:"\u227A",prap:"\u2AB7",prcue:"\u227C",prE:"\u2AB3",pre:"\u2AAF",prec:"\u227A",precapprox:"\u2AB7",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",precsim:"\u227E",Prime:"\u2033",prime:"\u2032",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportion:"\u2237",Proportional:"\u221D",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\u{1D4AB}",pscr:"\u{1D4C5}",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\u{1D514}",qfr:"\u{1D52E}",qint:"\u2A0C",Qopf:"\u211A",qopf:"\u{1D562}",qprime:"\u2057",Qscr:"\u{1D4AC}",qscr:"\u{1D4C6}",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",QUOT:'"',quot:'"',rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",Rang:"\u27EB",rang:"\u27E9",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",Rarr:"\u21A0",rArr:"\u21D2",rarr:"\u2192",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",rAtail:"\u291C",ratail:"\u291A",ratio:"\u2236",rationals:"\u211A",RBarr:"\u2910",rBarr:"\u290F",rbarr:"\u290D",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",Re:"\u211C",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",rect:"\u25AD",REG:"\xAE",reg:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",Rfr:"\u211C",rfr:"\u{1D52F}",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrow:"\u2192",Rightarrow:"\u21D2",rightarrow:"\u2192",RightArrowBar:"\u21E5",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVector:"\u21C2",RightDownVectorBar:"\u2955",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTee:"\u22A2",RightTeeArrow:"\u21A6",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangle:"\u22B3",RightTriangleBar:"\u29D0",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVector:"\u21BE",RightUpVectorBar:"\u2954",RightVector:"\u21C0",RightVectorBar:"\u2953",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoust:"\u23B1",rmoustache:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",Ropf:"\u211D",ropf:"\u{1D563}",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",Rscr:"\u211B",rscr:"\u{1D4C7}",Rsh:"\u21B1",rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",Sc:"\u2ABC",sc:"\u227B",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",sccue:"\u227D",scE:"\u2AB4",sce:"\u2AB0",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdot:"\u22C5",sdotb:"\u22A1",sdote:"\u2A66",searhk:"\u2925",seArr:"\u21D8",searr:"\u2198",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\u{1D516}",sfr:"\u{1D530}",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",sol:"/",solb:"\u29C4",solbar:"\u233F",Sopf:"\u{1D54A}",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",squ:"\u25A1",Square:"\u25A1",square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squf:"\u25AA",srarr:"\u2192",Sscr:"\u{1D4AE}",sscr:"\u{1D4C8}",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",Sub:"\u22D0",sub:"\u2282",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",Subset:"\u22D0",subset:"\u2282",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succ:"\u227B",succapprox:"\u2AB8",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",Sum:"\u2211",sum:"\u2211",sung:"\u266A",Sup:"\u22D1",sup:"\u2283",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",Supset:"\u22D1",supset:"\u2283",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swArr:"\u21D9",swarr:"\u2199",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"	",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\u{1D517}",tfr:"\u{1D531}",there4:"\u2234",Therefore:"\u2234",therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",thinsp:"\u2009",ThinSpace:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",Tilde:"\u223C",tilde:"\u02DC",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",times:"\xD7",timesb:"\u22A0",timesbar:"\u2A31",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",top:"\u22A4",topbot:"\u2336",topcir:"\u2AF1",Topf:"\u{1D54B}",topf:"\u{1D565}",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",TRADE:"\u2122",trade:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\u{1D4AF}",tscr:"\u{1D4C9}",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",Uarr:"\u219F",uArr:"\u21D1",uarr:"\u2191",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\u{1D518}",ufr:"\u{1D532}",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\u{1D54C}",uopf:"\u{1D566}",UpArrow:"\u2191",Uparrow:"\u21D1",uparrow:"\u2191",UpArrowBar:"\u2912",UpArrowDownArrow:"\u21C5",UpDownArrow:"\u2195",Updownarrow:"\u21D5",updownarrow:"\u2195",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",Upsi:"\u03D2",upsi:"\u03C5",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTee:"\u22A5",UpTeeArrow:"\u21A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\u{1D4B0}",uscr:"\u{1D4CA}",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",vArr:"\u21D5",varr:"\u2195",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",Vbar:"\u2AEB",vBar:"\u2AE8",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",VDash:"\u22AB",Vdash:"\u22A9",vDash:"\u22A8",vdash:"\u22A2",Vdashl:"\u2AE6",Vee:"\u22C1",vee:"\u2228",veebar:"\u22BB",veeeq:"\u225A",vellip:"\u22EE",Verbar:"\u2016",verbar:"|",Vert:"\u2016",vert:"|",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\u{1D519}",vfr:"\u{1D533}",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\u{1D54D}",vopf:"\u{1D567}",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\u{1D4B1}",vscr:"\u{1D4CB}",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",Wedge:"\u22C0",wedge:"\u2227",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\u{1D51A}",wfr:"\u{1D534}",Wopf:"\u{1D54E}",wopf:"\u{1D568}",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\u{1D4B2}",wscr:"\u{1D4CC}",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\u{1D51B}",xfr:"\u{1D535}",xhArr:"\u27FA",xharr:"\u27F7",Xi:"\u039E",xi:"\u03BE",xlArr:"\u27F8",xlarr:"\u27F5",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\u{1D54F}",xopf:"\u{1D569}",xoplus:"\u2A01",xotime:"\u2A02",xrArr:"\u27F9",xrarr:"\u27F6",Xscr:"\u{1D4B3}",xscr:"\u{1D4CD}",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\u{1D51C}",yfr:"\u{1D536}",YIcy:"\u0407",yicy:"\u0457",Yopf:"\u{1D550}",yopf:"\u{1D56A}",Yscr:"\u{1D4B4}",yscr:"\u{1D4CE}",YUcy:"\u042E",yucy:"\u044E",Yuml:"\u0178",yuml:"\xFF",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",Zfr:"\u2128",zfr:"\u{1D537}",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",Zopf:"\u2124",zopf:"\u{1D56B}",Zscr:"\u{1D4B5}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"});Lt.entityMap=Lt.HTML_ENTITIES});var cs=ze(Tn=>{"use strict";var Vt=Ut().NAMESPACE,Dn=/[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,os=new RegExp("[\\-\\.0-9"+Dn.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),ns=new RegExp("^"+Dn.source+os.source+"*(?::"+Dn.source+os.source+"*)?$"),kt=0,Pe=1,it=2,Xt=3,st=4,at=5,Ht=6,zr=7;function ut(e,t){this.message=e,this.locator=t,Error.captureStackTrace&&Error.captureStackTrace(this,ut)}ut.prototype=new Error;ut.prototype.name=ut.name;function as(){}as.prototype={parse:function(e,t,r){var o=this.domBuilder;o.startDocument(),us(t,t={}),bu(e,t,r,o,this.errorHandler),o.endDocument()}};function bu(e,t,r,o,n){function i(M){if(M>65535){M-=65536;var se=55296+(M>>10),Vs=56320+(M&1023);return String.fromCharCode(se,Vs)}else return String.fromCharCode(M)}function s(M){var se=M.slice(1,-1);return Object.hasOwnProperty.call(r,se)?r[se]:se.charAt(0)==="#"?i(parseInt(se.substr(1).replace("x","0x"))):(n.error("entity not found:"+M),M)}function a(M){if(M>_){var se=e.substring(_,M).replace(/&#?\w+;/g,s);f&&u(_),o.characters(se,0,M-_),_=M}}function u(M,se){for(;M>=c&&(se=p.exec(e));)l=se.index,c=l+se[0].length,f.lineNumber++;f.columnNumber=M-l+1}for(var l=0,c=0,p=/.*(?:\r\n?|\n)|.*$/g,f=o.locator,g=[{currentNSMap:t}],x={},_=0;;){try{var b=e.indexOf("<",_);if(b<0){if(!e.substr(_).match(/^\s*$/)){var y=o.doc,F=y.createTextNode(e.substr(_));y.appendChild(F),o.currentElement=F}return}switch(b>_&&a(b),e.charAt(b+1)){case"/":var V=e.indexOf(">",b+3),S=e.substring(b+2,V).replace(/[ \t\n\r]+$/g,""),B=g.pop();V<0?(S=e.substring(b+2).replace(/[\s<].*/,""),n.error("end tag name: "+S+" is not complete:"+B.tagName),V=b+1+S.length):S.match(/\s</)&&(S=S.replace(/[\s<].*/,""),n.error("end tag name: "+S+" maybe not complete"),V=b+1+S.length);var me=B.localNSMap,qe=B.tagName==S,so=qe||B.tagName&&B.tagName.toLowerCase()==S.toLowerCase();if(so){if(o.endElement(B.uri,B.localName,S),me)for(var er in me)Object.prototype.hasOwnProperty.call(me,er)&&o.endPrefixMapping(er);qe||n.fatalError("end tag name: "+S+" is not match the current start tagName:"+B.tagName)}else g.push(B);V++;break;case"?":f&&u(b),V=Eu(e,b,o);break;case"!":f&&u(b),V=yu(e,b,o,n);break;default:f&&u(b);var X=new ls,ao=g[g.length-1].currentNSMap,V=_u(e,b,X,ao,s,n),ti=X.length;if(!X.closed&&Au(e,V,X.tagName,x)&&(X.closed=!0,r.nbsp||n.warning("unclosed xml attribute")),f&&ti){for(var Hs=is(f,{}),uo=0;uo<ti;uo++){var ri=X[uo];u(ri.offset),ri.locator=is(f,{})}o.locator=Hs,ss(X,o,ao)&&g.push(X),o.locator=f}else ss(X,o,ao)&&g.push(X);Vt.isHTML(X.uri)&&!X.closed?V=vu(e,V,X.tagName,s,o):V++}}catch(M){if(M instanceof ut)throw M;n.error("element parse error: "+M),V=-1}V>_?_=V:a(Math.max(b,_)+1)}}function is(e,t){return t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber,t}function _u(e,t,r,o,n,i){function s(g,x,_){r.attributeNames.hasOwnProperty(g)&&i.fatalError("Attribute "+g+" redefined"),r.addValue(g,x.replace(/[\t\n\r]/g," ").replace(/&#?\w+;/g,n),_)}for(var a,u,l=++t,c=kt;;){var p=e.charAt(l);switch(p){case"=":if(c===Pe)a=e.slice(t,l),c=Xt;else if(c===it)c=Xt;else throw new Error("attribute equal must after attrName");break;case"'":case'"':if(c===Xt||c===Pe)if(c===Pe&&(i.warning('attribute value must after "="'),a=e.slice(t,l)),t=l+1,l=e.indexOf(p,t),l>0)u=e.slice(t,l),s(a,u,t-1),c=at;else throw new Error("attribute value no end '"+p+"' match");else if(c==st)u=e.slice(t,l),s(a,u,t),i.warning('attribute "'+a+'" missed start quot('+p+")!!"),t=l+1,c=at;else throw new Error('attribute value must after "="');break;case"/":switch(c){case kt:r.setTagName(e.slice(t,l));case at:case Ht:case zr:c=zr,r.closed=!0;case st:case Pe:break;case it:r.closed=!0;break;default:throw new Error("attribute invalid close char('/')")}break;case"":return i.error("unexpected end of input"),c==kt&&r.setTagName(e.slice(t,l)),l;case">":switch(c){case kt:r.setTagName(e.slice(t,l));case at:case Ht:case zr:break;case st:case Pe:u=e.slice(t,l),u.slice(-1)==="/"&&(r.closed=!0,u=u.slice(0,-1));case it:c===it&&(u=a),c==st?(i.warning('attribute "'+u+'" missed quot(")!'),s(a,u,t)):((!Vt.isHTML(o[""])||!u.match(/^(?:disabled|checked|selected)$/i))&&i.warning('attribute "'+u+'" missed value!! "'+u+'" instead!!'),s(u,u,t));break;case Xt:throw new Error("attribute value missed!!")}return l;case"\x80":p=" ";default:if(p<=" ")switch(c){case kt:r.setTagName(e.slice(t,l)),c=Ht;break;case Pe:a=e.slice(t,l),c=it;break;case st:var u=e.slice(t,l);i.warning('attribute "'+u+'" missed quot(")!!'),s(a,u,t);case at:c=Ht;break}else switch(c){case it:var f=r.tagName;(!Vt.isHTML(o[""])||!a.match(/^(?:disabled|checked|selected)$/i))&&i.warning('attribute "'+a+'" missed value!! "'+a+'" instead2!!'),s(a,a,t),t=l,c=Pe;break;case at:i.warning('attribute space is required"'+a+'"!!');case Ht:c=Pe,t=l;break;case Xt:c=st,t=l;break;case zr:throw new Error("elements closed character '/' and '>' must be connected to")}}l++}}function ss(e,t,r){for(var o=e.tagName,n=null,p=e.length;p--;){var i=e[p],s=i.qName,a=i.value,f=s.indexOf(":");if(f>0)var u=i.prefix=s.slice(0,f),l=s.slice(f+1),c=u==="xmlns"&&l;else l=s,u=null,c=s==="xmlns"&&"";i.localName=l,c!==!1&&(n==null&&(n={},us(r,r={})),r[c]=n[c]=a,i.uri=Vt.XMLNS,t.startPrefixMapping(c,a))}for(var p=e.length;p--;){i=e[p];var u=i.prefix;u&&(u==="xml"&&(i.uri=Vt.XML),u!=="xmlns"&&(i.uri=r[u||""]))}var f=o.indexOf(":");f>0?(u=e.prefix=o.slice(0,f),l=e.localName=o.slice(f+1)):(u=null,l=e.localName=o);var g=e.uri=r[u||""];if(t.startElement(g,l,o,e),e.closed){if(t.endElement(g,l,o),n)for(u in n)Object.prototype.hasOwnProperty.call(n,u)&&t.endPrefixMapping(u)}else return e.currentNSMap=r,e.localNSMap=n,!0}function vu(e,t,r,o,n){if(/^(?:script|textarea)$/i.test(r)){var i=e.indexOf("</"+r+">",t),s=e.substring(t+1,i);if(/[&<]/.test(s))return/^script$/i.test(r)?(n.characters(s,0,s.length),i):(s=s.replace(/&#?\w+;/g,o),n.characters(s,0,s.length),i)}return t+1}function Au(e,t,r,o){var n=o[r];return n==null&&(n=e.lastIndexOf("</"+r+">"),n<t&&(n=e.lastIndexOf("</"+r)),o[r]=n),n<t}function us(e,t){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}function yu(e,t,r,o){var n=e.charAt(t+2);switch(n){case"-":if(e.charAt(t+3)==="-"){var i=e.indexOf("-->",t+4);return i>t?(r.comment(e,t+4,i-t-4),i+3):(o.error("Unclosed comment"),-1)}else return-1;default:if(e.substr(t+3,6)=="CDATA["){var i=e.indexOf("]]>",t+9);return r.startCDATA(),r.characters(e,t+9,i-t-9),r.endCDATA(),i+3}var s=Su(e,t),a=s.length;if(a>1&&/!doctype/i.test(s[0][0])){var u=s[1][0],l=!1,c=!1;a>3&&(/^public$/i.test(s[2][0])?(l=s[3][0],c=a>4&&s[4][0]):/^system$/i.test(s[2][0])&&(c=s[3][0]));var p=s[a-1];return r.startDTD(u,l,c),r.endDTD(),p.index+p[0].length}}return-1}function Eu(e,t,r){var o=e.indexOf("?>",t);if(o){var n=e.substring(t,o).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);if(n){var i=n[0].length;return r.processingInstruction(n[1],n[2]),o+2}else return-1}return-1}function ls(){this.attributeNames={}}ls.prototype={setTagName:function(e){if(!ns.test(e))throw new Error("invalid tagName:"+e);this.tagName=e},addValue:function(e,t,r){if(!ns.test(e))throw new Error("invalid attribute:"+e);this.attributeNames[e]=this.length,this[this.length++]={qName:e,value:t,offset:r}},length:0,getLocalName:function(e){return this[e].localName},getLocator:function(e){return this[e].locator},getQName:function(e){return this[e].qName},getURI:function(e){return this[e].uri},getValue:function(e){return this[e].value}};function Su(e,t){var r,o=[],n=/'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;for(n.lastIndex=t,n.exec(e);r=n.exec(e);)if(o.push(r),r[1])return o}Tn.XMLReader=as;Tn.ParseError=ut});var xs=ze(Yr=>{"use strict";var Cu=Ut(),Du=Cn(),ps=rs(),ds=cs(),Tu=Du.DOMImplementation,fs=Cu.NAMESPACE,Bu=ds.ParseError,Ru=ds.XMLReader;function hs(e){return e.replace(/\r[\n\u0085]/g,`
`).replace(/[\r\u0085\u2028]/g,`
`)}function gs(e){this.options=e||{locator:{}}}gs.prototype.parseFromString=function(e,t){var r=this.options,o=new Ru,n=r.domBuilder||new qt,i=r.errorHandler,s=r.locator,a=r.xmlns||{},u=/\/x?html?$/.test(t),l=u?ps.HTML_ENTITIES:ps.XML_ENTITIES;s&&n.setDocumentLocator(s),o.errorHandler=wu(i,n,s),o.domBuilder=r.domBuilder||n,u&&(a[""]=fs.HTML),a.xml=a.xml||fs.XML;var c=r.normalizeLineEndings||hs;return e&&typeof e=="string"?o.parse(c(e),a,l):o.errorHandler.error("invalid doc source"),n.doc};function wu(e,t,r){if(!e){if(t instanceof qt)return t;e=t}var o={},n=e instanceof Function;r=r||{};function i(s){var a=e[s];!a&&n&&(a=e.length==2?function(u){e(s,u)}:e),o[s]=a&&function(u){a("[xmldom "+s+"]	"+u+Bn(r))}||function(){}}return i("warning"),i("error"),i("fatalError"),o}function qt(){this.cdata=!1}function lt(e,t){t.lineNumber=e.lineNumber,t.columnNumber=e.columnNumber}qt.prototype={startDocument:function(){this.doc=new Tu().createDocument(null,null,null),this.locator&&(this.doc.documentURI=this.locator.systemId)},startElement:function(e,t,r,o){var n=this.doc,i=n.createElementNS(e,r||t),s=o.length;Wr(this,i),this.currentElement=i,this.locator&&lt(this.locator,i);for(var a=0;a<s;a++){var e=o.getURI(a),u=o.getValue(a),r=o.getQName(a),l=n.createAttributeNS(e,r);this.locator&&lt(o.getLocator(a),l),l.value=l.nodeValue=u,i.setAttributeNode(l)}},endElement:function(e,t,r){var o=this.currentElement,n=o.tagName;this.currentElement=o.parentNode},startPrefixMapping:function(e,t){},endPrefixMapping:function(e){},processingInstruction:function(e,t){var r=this.doc.createProcessingInstruction(e,t);this.locator&&lt(this.locator,r),Wr(this,r)},ignorableWhitespace:function(e,t,r){},characters:function(e,t,r){if(e=ms.apply(this,arguments),e){if(this.cdata)var o=this.doc.createCDATASection(e);else var o=this.doc.createTextNode(e);this.currentElement?this.currentElement.appendChild(o):/^\s*$/.test(e)&&this.doc.appendChild(o),this.locator&&lt(this.locator,o)}},skippedEntity:function(e){},endDocument:function(){this.doc.normalize()},setDocumentLocator:function(e){(this.locator=e)&&(e.lineNumber=0)},comment:function(e,t,r){e=ms.apply(this,arguments);var o=this.doc.createComment(e);this.locator&&lt(this.locator,o),Wr(this,o)},startCDATA:function(){this.cdata=!0},endCDATA:function(){this.cdata=!1},startDTD:function(e,t,r){var o=this.doc.implementation;if(o&&o.createDocumentType){var n=o.createDocumentType(e,t,r);this.locator&&lt(this.locator,n),Wr(this,n),this.doc.doctype=n}},warning:function(e){console.warn("[xmldom warning]	"+e,Bn(this.locator))},error:function(e){console.error("[xmldom error]	"+e,Bn(this.locator))},fatalError:function(e){throw new Bu(e,this.locator)}};function Bn(e){if(e)return`
@`+(e.systemId||"")+"#[line:"+e.lineNumber+",col:"+e.columnNumber+"]"}function ms(e,t,r){return typeof e=="string"?e.substr(t,r):e.length>=t+r||t?new java.lang.String(e,t,r)+"":e}"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(e){qt.prototype[e]=function(){return null}});function Wr(e,t){e.currentElement?e.currentElement.appendChild(t):e.doc.appendChild(t)}Yr.__DOMHandler=qt;Yr.normalizeLineEndings=hs;Yr.DOMParser=gs});var _s=ze(jr=>{"use strict";var bs=Cn();jr.DOMImplementation=bs.DOMImplementation;jr.XMLSerializer=bs.XMLSerializer;jr.DOMParser=xs().DOMParser});var ni={extension:{type:m.Environment,name:"browser",priority:-1},test:()=>!0,load:()=>d(void 0,null,function*(){yield import("./chunk-5FOVZ6VX.js")})};var ii={extension:{type:m.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:()=>d(void 0,null,function*(){yield import("./chunk-2Z5OMY4J.js")})};var Fo=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uBlend;

uniform sampler2D uTexture;
uniform sampler2D uBackTexture;

{FUNCTIONS}

void main()
{ 
    vec4 back = texture(uBackTexture, vTextureCoord);
    vec4 front = texture(uTexture, vTextureCoord);
    float blendedAlpha = front.a + back.a * (1.0 - front.a);
    
    {MAIN}
}
`;var Uo=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 backgroundUv;

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
`;var Oo=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlendUniforms {
  uBlend:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(0) @binding(3) var uBackTexture: texture_2d<f32>;

@group(1) @binding(0) var<uniform> blendUniforms : BlendUniforms;


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
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

{FUNCTIONS}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {


   var back =  textureSample(uBackTexture, uSampler, uv);
   var front = textureSample(uTexture, uSampler, uv);
   var blendedAlpha = front.a + back.a * (1.0 - front.a);
   
   var out = vec4<f32>(0.0,0.0,0.0,0.0);

   {MAIN}

   return out;
}`;var A=class extends W{constructor(t){let r=t.gpu,o=si(h({source:Oo},r)),n=oe.from({vertex:{source:o,entryPoint:"mainVertex"},fragment:{source:o,entryPoint:"mainFragment"}}),i=t.gl,s=si(h({source:Fo},i)),a=re.from({vertex:Uo,fragment:s}),u=new ce({uBlend:{value:1,type:"f32"}});super({gpuProgram:n,glProgram:a,blendRequired:!0,resources:{blendUniforms:u,uBackTexture:T.EMPTY}})}};function si(e){let{source:t,functions:r,main:o}=e;return t.replace("{FUNCTIONS}",r).replace("{MAIN}",o)}var Ge=`
	float getLuminosity(vec3 c) {
		return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
	}

	vec3 setLuminosity(vec3 c, float lum) {
		float modLum = lum - getLuminosity(c);
		vec3 color = c.rgb + vec3(modLum);

		// clip back into legal range
		modLum = getLuminosity(color);
		vec3 modLumVec = vec3(modLum);

		float cMin = min(color.r, min(color.g, color.b));
		float cMax = max(color.r, max(color.g, color.b));

		if(cMin < 0.0) {
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0) {
			color = mix(modLumVec, color, (1.0 - modLum) / (cMax - modLum));
		}

		return color;
	}

	float getSaturation(vec3 c) {
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	vec3 setSaturationMinMidMax(vec3 cSorted, float s) {
		vec3 colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x) {
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else {
			colorSorted.y = 0.0;
			colorSorted.z = 0.0;
		}

		colorSorted.x = 0.0;

		return colorSorted;
	}

	vec3 setSaturation(vec3 c, float s) {
		vec3 color = c;

		if(color.r <= color.g && color.r <= color.b) {
			if(color.g <= color.b) {
				color = setSaturationMinMidMax(color.rgb, s).rgb;
			}
			else {
				color = setSaturationMinMidMax(color.rbg, s).rbg;
			}
		}
		else if(color.g <= color.r && color.g <= color.b) {
			if(color.r <= color.b) {
				color = setSaturationMinMidMax(color.grb, s).grb;
			}
			else {
				color = setSaturationMinMidMax(color.gbr, s).gbr;
			}
		}
		else {
			// Using bgr for both fixes part of hue
			if(color.r <= color.g) {
				color = setSaturationMinMidMax(color.brg, s).brg;
			}
			else {
				color = setSaturationMinMidMax(color.bgr, s).bgr;
			}
		}

		return color;
	}
    `;var Ie=`
	fn getLuminosity(c: vec3<f32>) -> f32
	{
		return 0.3*c.r + 0.59*c.g + 0.11*c.b;
	}

	fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32>
	{
		var modLum: f32 = lum - getLuminosity(c);
		var color: vec3<f32> = c.rgb + modLum;

		// clip back into legal range
		modLum = getLuminosity(color);
		let modLumVec = vec3<f32>(modLum);

		let cMin: f32 = min(color.r, min(color.g, color.b));
		let cMax: f32 = max(color.r, max(color.g, color.b));

		if(cMin < 0.0)
		{
			color = mix(modLumVec, color, modLum / (modLum - cMin));
		}

		if(cMax > 1.0)
		{
			color = mix(modLumVec, color, (1 - modLum) / (cMax - modLum));
		}

		return color;
	}

	fn getSaturation(c: vec3<f32>) -> f32
	{
		return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
	}

	fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32>
	{
		var colorSorted = cSorted;

		if(colorSorted.z > colorSorted.x)
		{
			colorSorted.y = (((colorSorted.y - colorSorted.x) * s) / (colorSorted.z - colorSorted.x));
			colorSorted.z = s;
		}
		else
		{
			colorSorted.y = 0;
			colorSorted.z = 0;
		}

		colorSorted.x = 0;

		return colorSorted;
	}

	fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32>
	{
		var color = c;

		if (color.r <= color.g && color.r <= color.b)
		{
			if (color.g <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rgb, s)).rgb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.rbg, s)).rbg;
			}
		}
		else if (color.g <= color.r && color.g <= color.b)
		{
			if (color.r <= color.b)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.grb, s)).grb;
			}
			else
			{
				color = vec3<f32>(setSaturationMinMidMax(color.gbr, s)).gbr;
			}
		}
		else
		{
			// Using bgr for both fixes part of hue
			if (color.r <= color.g)
			{
				color = vec3<f32>(setSaturationMinMidMax(color.brg, s)).brg;
			}
			else
			{
				color  = vec3<f32>(setSaturationMinMidMax(color.bgr, s)).bgr;
			}
		}

		return color;
	}
	`;var or=class extends A{constructor(){super({gl:{functions:`
                ${Ge}

                vec3 blendColor(vec3 base, vec3 blend,  float opacity)
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendColor(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                ${Ie}

                fn blendColorOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (setLuminosity(blend, getLuminosity(base)) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendColorOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};or.extension={name:"color",type:m.BlendMode};var nr=class extends A{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0 - ((1.0 - base) / blend)), 0.0);
                }

                vec3 blendColorBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendColorBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn blendColorBurn(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorBurn(base.r, blend.r),
                        colorBurn(base.g, blend.g),
                        colorBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendColorBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};nr.extension={name:"color-burn",type:m.BlendMode};var ir=class extends A{constructor(){super({gl:{functions:`
                float colorDodge(float base, float blend)
                {
                    return base / (1.0 - blend);
                }

                vec3 blendColorDodge(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendColorDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return base / (1.0 - blend);
                }

                fn blendColorDodge(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        colorDodge(base.r, blend.r),
                        colorDodge(base.g, blend.g),
                        colorDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                    out = vec4<f32>(blendColorDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};ir.extension={name:"color-dodge",type:m.BlendMode};var sr=class extends A{constructor(){super({gl:{functions:`
                vec3 blendDarken(vec3 base, vec3 blend, float opacity)
                {
                    return (min(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendDarken(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn blendDarken(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (min(blend,base) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendDarken(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};sr.extension={name:"darken",type:m.BlendMode};var ar=class extends A{constructor(){super({gl:{functions:`
                vec3 blendDifference(vec3 base, vec3 blend,  float opacity)
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendDifference(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn blendDifference(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (abs(blend - base) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDifference(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};ar.extension={name:"difference",type:m.BlendMode};var ur=class extends A{constructor(){super({gl:{functions:`
                float divide(float base, float blend)
                {
                    return (blend > 0.0) ? clamp(base / blend, 0.0, 1.0) : 1.0;
                }

                vec3 blendDivide(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendDivide(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn divide(base: f32, blend: f32) -> f32
                {
                    return select(1.0, clamp(base / blend, 0.0, 1.0), blend > 0.0);
                }

                fn blendDivide(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        divide(base.r, blend.r),
                        divide(base.g, blend.g),
                        divide(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendDivide(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};ur.extension={name:"divide",type:m.BlendMode};var lr=class extends A{constructor(){super({gl:{functions:`
                vec3 exclusion(vec3 base, vec3 blend)
                {
                    return base + blend - 2.0 * base * blend;
                }

                vec3 blendExclusion(vec3 base, vec3 blend, float opacity)
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendExclusion(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn exclusion(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return base+blend-2.0*base*blend;
                }

                fn blendExclusion(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (exclusion(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendExclusion(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};lr.extension={name:"exclusion",type:m.BlendMode};var cr=class extends A{constructor(){super({gl:{functions:`
                float hardLight(float base, float blend)
                {
                    return (blend < 0.5) ? 2.0 * base * blend : 1.0 - 2.0 * (1.0 - base) * (1.0 - blend);
                }

                vec3 blendHardLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendHardLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn hardLight(base: f32, blend: f32) -> f32
                {
                    return select(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, blend < 0.5);
                }

                fn blendHardLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        hardLight(base.r, blend.r),
                        hardLight(base.g, blend.g),
                        hardLight(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendHardLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};cr.extension={name:"hard-light",type:m.BlendMode};var pr=class extends A{constructor(){super({gl:{functions:`
                float hardMix(float base, float blend)
                {
                    return (base + blend >= 1.0) ? 1.0 : 0.0;
                }

                vec3 blendHardMix(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blended = vec3(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendHardMix(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn hardMix(base: f32, blend: f32) -> f32
                {
                    return select(0.0, 1.0, base + blend >= 1.0);
                }

                fn blendHardMix(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        hardMix(base.r, blend.r),
                        hardMix(base.g, blend.g),
                        hardMix(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendHardMix(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};pr.extension={name:"hard-mix",type:m.BlendMode};var fr=class extends A{constructor(){super({gl:{functions:`
                vec3 blendLighten(vec3 base, vec3 blend, float opacity)
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLighten(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn blendLighten(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    return (max(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLighten(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};fr.extension={name:"lighten",type:m.BlendMode};var mr=class extends A{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend)
                {
                    return max(0.0, base + blend - 1.0);
                }

                vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLinearBurn(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn blendLinearBurn(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearBurn(base.r, blend.r),
                        linearBurn(base.g, blend.g),
                        linearBurn(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendLinearBurn(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};mr.extension={name:"linear-burn",type:m.BlendMode};var dr=class extends A{constructor(){super({gl:{functions:`
                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLinearDodge(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1, base + blend);
                }

                fn blendLinearDodge(base:vec3<f32>, blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearDodge(base.r, blend.r),
                        linearDodge(base.g, blend.g),
                        linearDodge(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearDodge(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};dr.extension={name:"linear-dodge",type:m.BlendMode};var hr=class extends A{constructor(){super({gl:{functions:`
                float linearBurn(float base, float blend) {
                    return max(0.0, base + blend - 1.0);
                }

                float linearDodge(float base, float blend) {
                    return min(1.0, base + blend);
                }

                float linearLight(float base, float blend) {
                    return (blend <= 0.5) ? linearBurn(base,2.0*blend) : linearBurn(base,2.0*(blend-0.5));
                }

                vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
                    vec3 blended = vec3(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendLinearLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn linearBurn(base: f32, blend: f32) -> f32
                {
                    return max(0.0, base + blend - 1.0);
                }

                fn linearDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base + blend);
                }

                fn linearLight(base: f32, blend: f32) -> f32
                {
                    return select(linearBurn(base,2.0*(blend-0.5)), linearBurn(base,2.0*blend), blend <= 0.5);
                }

                fn blendLinearLightOpacity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        linearLight(base.r, blend.r),
                        linearLight(base.g, blend.g),
                        linearLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLinearLightOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};hr.extension={name:"linear-light",type:m.BlendMode};var gr=class extends A{constructor(){super({gl:{functions:`
                ${Ge}

                vec3 blendLuminosity(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendLuminosity = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendLuminosity(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                ${Ie}

                fn blendLuminosity(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendLuminosity: vec3<f32> = setLuminosity(base, getLuminosity(blend));
                    return (blendLuminosity * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendLuminosity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};gr.extension={name:"luminosity",type:m.BlendMode};var xr=class extends A{constructor(){super({gl:{functions:`
                vec3 negation(vec3 base, vec3 blend)
                {
                    return 1.0-abs(1.0-base-blend);
                }

                vec3 blendNegation(vec3 base, vec3 blend, float opacity)
                {
                    return (negation(base, blend) * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendNegation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn blendNegation(base: vec3<f32>, blend: vec3<f32>) -> vec3<f32>
                {
                    return 1.0-abs(1.0-base-blend);
                }

                fn blendNegationOpacity(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    return (blendNegation(base, blend) * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendNegationOpacity(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};xr.extension={name:"negation",type:m.BlendMode};var br=class extends A{constructor(){super({gl:{functions:`
                float overlay(float base, float blend)
                {
                    return (base < 0.5) ? (2.0*base*blend) : (1.0-2.0*(1.0-base)*(1.0-blend));
                }

                vec3 blendOverlay(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );
   
                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendOverlay(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn overlay(base: f32, blend: f32) -> f32
                {
                    return select((1.0-2.0*(1.0-base)*(1.0-blend)), (2.0*base*blend), base < 0.5);
                }

                fn blendOverlay(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        overlay(base.r, blend.r),
                        overlay(base.g, blend.g),
                        overlay(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendOverlay(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};br.extension={name:"overlay",type:m.BlendMode};var _r=class extends A{constructor(){super({gl:{functions:`
                float pinLight(float base, float blend)
                {
                    return (blend <= 0.5) ? min(base, 2.0 * blend) : max(base, 2.0 * (blend - 0.5));
                }

                vec3 blendPinLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn pinLight(base: f32, blend: f32) -> f32
                {
                    return select(max(base,2.0*(blend-0.5)), min(base,2.0*blend), blend <= 0.5);
                }

                fn blendPinLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        pinLight(base.r, blend.r),
                        pinLight(base.g, blend.g),
                        pinLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendPinLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};_r.extension={name:"pin-light",type:m.BlendMode};var vr=class extends A{constructor(){super({gl:{functions:`
                ${Ge}

                vec3 blendSaturation(vec3 base, vec3 blend,  float opacity)
                {
                    vec3 blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                ${Ie}

                fn blendSaturation(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blendSaturation = setLuminosity(setSaturation(base, getSaturation(blend)), getLuminosity(base));
                    return (blendSaturation * opacity + base * (1.0 - opacity));
                }
            `,main:`
                out = vec4<f32>(blendSaturation(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
            `}})}};vr.extension={name:"saturation",type:m.BlendMode};var Ar=class extends A{constructor(){super({gl:{functions:`
                float softLight(float base, float blend)
                {
                    return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));
                }

                vec3 blendSoftLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn softLight(base: f32, blend: f32) -> f32
                {
                    return select(2.0 * base * blend + base * base * (1.0 - 2.0 * blend), sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), blend < 0.5);
                }

                fn blendSoftLight(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        softLight(base.r, blend.r),
                        softLight(base.g, blend.g),
                        softLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSoftLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};Ar.extension={name:"soft-light",type:m.BlendMode};var yr=class extends A{constructor(){super({gl:{functions:`
                float subtract(float base, float blend)
                {
                    return max(0.0, base - blend);
                }

                vec3 blendSubtract(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                finalColor = vec4(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * uBlend;
                `},gpu:{functions:`
                fn subtract(base: f32, blend: f32) -> f32
                {
                    return max(0, base - blend);
                }

                fn blendSubtract(base:vec3<f32>,  blend:vec3<f32>,  opacity:f32) -> vec3<f32>
                {
                    let blended = vec3<f32>(
                        subtract(base.r, blend.r),
                        subtract(base.g, blend.g),
                        subtract(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendSubtract(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};yr.extension={name:"subtract",type:m.BlendMode};var Er=class extends A{constructor(){super({gl:{functions:`
                float colorBurn(float base, float blend)
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                float colorDodge(float base, float blend)
                {
                    return min(1.0, base / (1.0-blend));
                }

                float vividLight(float base, float blend)
                {
                    return (blend < 0.5) ? colorBurn(base,(2.0*blend)) : colorDodge(base,(2.0*(blend-0.5)));
                }

                vec3 blendVividLight(vec3 base, vec3 blend, float opacity)
                {
                    vec3 blended = vec3(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
            `,main:`
                finalColor = vec4(blendVividLight(back.rgb, front.rgb,front.a), blendedAlpha) * uBlend;
            `},gpu:{functions:`
                fn colorBurn(base:f32, blend:f32) -> f32
                {
                    return max((1.0-((1.0-base)/blend)),0.0);
                }

                fn colorDodge(base: f32, blend: f32) -> f32
                {
                    return min(1.0, base / (1.0-blend));
                }

                fn vividLight(base: f32, blend: f32) -> f32
                {
                    return select(colorDodge(base,(2.0*(blend-0.5))), colorBurn(base,(2.0*blend)), blend<0.5);
                }

                fn blendVividLight(base: vec3<f32>, blend: vec3<f32>, opacity: f32) -> vec3<f32>
                {
                    let blended: vec3<f32> = vec3<f32>(
                        vividLight(base.r, blend.r),
                        vividLight(base.g, blend.g),
                        vividLight(base.b, blend.b)
                    );

                    return (blended * opacity + base * (1.0 - opacity));
                }
                `,main:`
                out = vec4<f32>(blendVividLight(back.rgb, front.rgb, front.a), blendedAlpha) * blendUniforms.uBlend;
                `}})}};Er.extension={name:"vivid-light",type:m.BlendMode};var Sr;function ve(e){return Sr!==void 0||(Sr=(()=>{let t={stencil:!0,failIfMajorPerformanceCaveat:e??_t.defaultOptions.failIfMajorPerformanceCaveat};try{if(!w.get().getWebGLRenderingContext())return!1;let o=w.get().createCanvas().getContext("webgl",t),n=!!o?.getContextAttributes()?.stencil;if(o){let i=o.getExtension("WEBGL_lose_context");i&&i.loseContext()}return o=null,n}catch{return!1}})()),Sr}var Cr;function Ae(){return d(this,arguments,function*(e={}){return Cr!==void 0||(Cr=yield(()=>d(this,null,function*(){let t=w.get().getNavigator().gpu;if(!t)return!1;try{return yield(yield t.requestAdapter(e)).requestDevice(),!0}catch{return!1}}))()),Cr})}var ai=["webgl","webgpu","canvas"];function Mo(e){return d(this,null,function*(){let t=[];e.preference?(t.push(e.preference),ai.forEach(i=>{i!==e.preference&&t.push(i)})):t=ai.slice();let r,o={};for(let i=0;i<t.length;i++){let s=t[i];if(s==="webgpu"&&(yield Ae())){let{WebGPURenderer:a}=yield import("./chunk-L74F2DVL.js");r=a,o=h(h({},e),e.webgpu);break}else if(s==="webgl"&&ve(e.failIfMajorPerformanceCaveat??_t.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:a}=yield import("./chunk-E4R7R4TL.js");r=a,o=h(h({},e),e.webgl);break}else if(s==="canvas")throw o=h({},e),new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!r)throw new Error("No available renderer for the current environment");let n=new r;return yield n.init(o),n})}var zs=(()=>{let e=class Go{constructor(...r){this.stage=new ge,r[0]!==void 0&&E(P,"Application constructor options are deprecated, please use Application.init() instead.")}init(r){return d(this,null,function*(){r=h({},r),this.renderer=yield Mo(r),Go._plugins.forEach(o=>{o.init.call(this,r)})})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return E(P,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(r=!1,o=!1){let n=Go._plugins.slice(0);n.reverse(),n.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(o),this.stage=null,this.renderer.destroy(r),this.renderer=null}};return e._plugins=[],e})(),ui=zs;ue.handleByList(m.Application,ui._plugins);ue.add(Po);var $e=class extends Ro{constructor(t,r){super();let{textures:o,data:n}=t;Object.keys(n.pages).forEach(i=>{let s=n.pages[parseInt(i,10)],a=o[s.id];this.pages.push({texture:a})}),Object.keys(n.chars).forEach(i=>{let s=n.chars[i],{frame:a,source:u}=o[s.page],l=new Fe(s.x+a.x,s.y+a.y,s.width,s.height),c=new T({source:u,frame:l});this.chars[i]={id:i.codePointAt(0),xOffset:s.xOffset,yOffset:s.yOffset,xAdvance:s.xAdvance,kerning:s.kerning??{},texture:c}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=r}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){let{texture:r}=this.pages[t];r.destroy(!0)}this.pages=null}static install(t){je.install(t)}static uninstall(t){je.uninstall(t)}};var vt={test(e){return typeof e=="string"&&e.startsWith("info face=")},parse(e){let t=e.match(/^[a-z]+\s+.+$/gm),r={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let p in t){let f=t[p].match(/^[a-z]+/gm)[0],g=t[p].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),x={};for(let _ in g){let b=g[_].split("="),y=b[0],F=b[1].replace(/"/gm,""),S=parseFloat(F),B=isNaN(S)?F:S;x[y]=B}r[f].push(x)}let o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=r.info,[i]=r.common,[s]=r.distanceField??[];s&&(o.distanceField={range:parseInt(s.distanceRange,10),type:s.fieldType}),o.fontSize=parseInt(n.size,10),o.fontFamily=n.face,o.lineHeight=parseInt(i.lineHeight,10);let a=r.page;for(let p=0;p<a.length;p++)o.pages.push({id:parseInt(a[p].id,10)||0,file:a[p].file});let u={};o.baseLineOffset=o.lineHeight-parseInt(i.base,10);let l=r.char;for(let p=0;p<l.length;p++){let f=l[p],g=parseInt(f.id,10),x=f.letter??f.char??String.fromCharCode(g);x==="space"&&(x=" "),u[g]=x,o.chars[x]={id:g,page:parseInt(f.page,10)||0,x:parseInt(f.x,10),y:parseInt(f.y,10),width:parseInt(f.width,10),height:parseInt(f.height,10),xOffset:parseInt(f.xoffset,10),yOffset:parseInt(f.yoffset,10),xAdvance:parseInt(f.xadvance,10),kerning:{}}}let c=r.kerning||[];for(let p=0;p<c.length;p++){let f=parseInt(c[p].first,10),g=parseInt(c[p].second,10),x=parseInt(c[p].amount,10);o.chars[u[g]].kerning[u[f]]=x}return o}};var Dr={test(e){let t=e;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(e){let t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},r=e.getElementsByTagName("info")[0],o=e.getElementsByTagName("common")[0],n=e.getElementsByTagName("distanceField")[0];n&&(t.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});let i=e.getElementsByTagName("page"),s=e.getElementsByTagName("char"),a=e.getElementsByTagName("kerning");t.fontSize=parseInt(r.getAttribute("size"),10),t.fontFamily=r.getAttribute("face"),t.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let l=0;l<i.length;l++)t.pages.push({id:parseInt(i[l].getAttribute("id"),10)||0,file:i[l].getAttribute("file")});let u={};t.baseLineOffset=t.lineHeight-parseInt(o.getAttribute("base"),10);for(let l=0;l<s.length;l++){let c=s[l],p=parseInt(c.getAttribute("id"),10),f=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(p);f==="space"&&(f=" "),u[p]=f,t.chars[f]={id:p,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let l=0;l<a.length;l++){let c=parseInt(a[l].getAttribute("first"),10),p=parseInt(a[l].getAttribute("second"),10),f=parseInt(a[l].getAttribute("amount"),10);t.chars[u[p]].kerning[u[c]]=f}return t}};var Tr={test(e){return typeof e=="string"&&e.includes("<font>")?Dr.test(w.get().parseXML(e)):!1},parse(e){return Dr.parse(w.get().parseXML(e))}};var Ws=[".xml",".fnt"],Io={extension:{type:m.CacheParser,name:"cacheBitmapFont"},test:e=>e instanceof $e,getCacheableAssets(e,t){let r={};return e.forEach(o=>{r[o]=t,r[`${o}-bitmap`]=t}),r[`${t.fontFamily}-bitmap`]=t,r}},No={extension:{type:m.LoadParser,priority:G.Normal},name:"loadBitmapFont",test(e){return Ws.includes(te.extname(e).toLowerCase())},testParse(e){return d(this,null,function*(){return vt.test(e)||Tr.test(e)})},parse(e,t,r){return d(this,null,function*(){let o=vt.test(e)?vt.parse(e):Tr.parse(e),{src:n}=t,{pages:i}=o,s=[],a=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let p=0;p<i.length;++p){let f=i[p].file,g=te.join(te.dirname(n),f);g=fo(g,n),s.push({src:g,data:a})}let u=yield r.load(s),l=s.map(p=>u[p.src]);return new $e({data:o,textures:l},n)})},load(e,t){return d(this,null,function*(){return yield(yield w.get().fetch(e)).text()})},unload(e,t,r){return d(this,null,function*(){yield Promise.all(e.pages.map(o=>r.unload(o.texture.source._sourceOrigin))),e.destroy()})}};var At=class{constructor(t,r=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=r}add(t){t.forEach(r=>{this._assetList.push(r)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}_next(){return d(this,null,function*(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let t=[],r=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<r;o++)t.push(this._assetList.pop());yield this._loader.load(t),this._isLoading=!1,this._next()}})}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}};var Lo={extension:{type:m.CacheParser,name:"cacheTextureArray"},test:e=>Array.isArray(e)&&e.every(t=>t instanceof T),getCacheableAssets:(e,t)=>{let r={};return e.forEach(o=>{t.forEach((n,i)=>{r[o+(i===0?"":i+1)]=n})}),r}};function yt(e){return d(this,null,function*(){if("Image"in globalThis)return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{let t=yield(yield fetch(e)).blob();yield createImageBitmap(t)}catch{return!1}return!0}return!1})}var ko={extension:{type:m.DetectionParser,priority:1},test:()=>d(void 0,null,function*(){return yt("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=")}),add:e=>d(void 0,null,function*(){return[...e,"avif"]}),remove:e=>d(void 0,null,function*(){return e.filter(t=>t!=="avif")})};var li=["png","jpg","jpeg"],Xo={extension:{type:m.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:e=>d(void 0,null,function*(){return[...e,...li]}),remove:e=>d(void 0,null,function*(){return e.filter(t=>!li.includes(t))})};var Ys="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ne(e){return Ys?!1:document.createElement("video").canPlayType(e)!==""}var Ho={extension:{type:m.DetectionParser,priority:0},test:()=>d(void 0,null,function*(){return Ne("video/mp4")}),add:e=>d(void 0,null,function*(){return[...e,"mp4","m4v"]}),remove:e=>d(void 0,null,function*(){return e.filter(t=>t!=="mp4"&&t!=="m4v")})};var Vo={extension:{type:m.DetectionParser,priority:0},test:()=>d(void 0,null,function*(){return Ne("video/ogg")}),add:e=>d(void 0,null,function*(){return[...e,"ogv"]}),remove:e=>d(void 0,null,function*(){return e.filter(t=>t!=="ogv")})};var qo={extension:{type:m.DetectionParser,priority:0},test:()=>d(void 0,null,function*(){return Ne("video/webm")}),add:e=>d(void 0,null,function*(){return[...e,"webm"]}),remove:e=>d(void 0,null,function*(){return e.filter(t=>t!=="webm")})};var zo={extension:{type:m.DetectionParser,priority:0},test:()=>d(void 0,null,function*(){return yt("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=")}),add:e=>d(void 0,null,function*(){return[...e,"webp"]}),remove:e=>d(void 0,null,function*(){return e.filter(t=>t!=="webp")})};var Et=class{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,r,o)=>(this._parsersValidated=!1,t[r]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,r){let o={promise:null,parser:null};return o.promise=(()=>d(this,null,function*(){let n=null,i=null;if(r.loadParser&&(i=this._parserHash[r.loadParser],i||N(`[Assets] specified load parser "${r.loadParser}" not found while loading ${t}`)),!i){for(let s=0;s<this.parsers.length;s++){let a=this.parsers[s];if(a.load&&a.test?.(t,r,this)){i=a;break}}if(!i)return N(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=yield i.load(t,r,this),o.parser=i;for(let s=0;s<this.parsers.length;s++){let a=this.parsers[s];a.parse&&a.parse&&(yield a.testParse?.(n,r,this))&&(n=(yield a.parse(n,r,this))||n,o.parser=a)}return n}))(),o}load(t,r){return d(this,null,function*(){this._parsersValidated||this._validateParsers();let o=0,n={},i=ft(t),s=Te(t,l=>({alias:[l],src:l,data:{}})),a=s.length,u=s.map(l=>d(this,null,function*(){let c=te.toAbsolute(l.src);if(!n[l.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,l)),n[l.src]=yield this.promiseCache[c].promise,r&&r(++o/a)}catch(p){throw delete this.promiseCache[c],delete n[l.src],new Error(`[Loader.load] Failed to load ${c}.
${p}`)}}));return yield Promise.all(u),i?n[s[0].src]:n})}unload(t){return d(this,null,function*(){let o=Te(t,n=>({alias:[n],src:n})).map(n=>d(this,null,function*(){let i=te.toAbsolute(n.src),s=this.promiseCache[i];if(s){let a=yield s.promise;delete this.promiseCache[i],yield s.parser?.unload?.(a,n,this)}}));yield Promise.all(o)})}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,r)=>(r.name?t[r.name]&&N(`[Assets] loadParser name conflict "${r.name}"`):N("[Assets] loadParser should have a name"),C(h({},t),{[r.name]:r})),{})}};function ne(e,t){if(Array.isArray(t)){for(let r of t)if(e.startsWith(`data:${r}`))return!0;return!1}return e.startsWith(`data:${t}`)}function U(e,t){let r=e.split("?")[0],o=te.extname(r).toLowerCase();return Array.isArray(t)?t.includes(o):o===t}var js=".json",Ks="application/json",Wo={extension:{type:m.LoadParser,priority:G.Low},name:"loadJson",test(e){return ne(e,Ks)||U(e,js)},load(e){return d(this,null,function*(){return yield(yield w.get().fetch(e)).json()})}};var $s=".txt",Qs="text/plain",Yo={name:"loadTxt",extension:{type:m.LoadParser,priority:G.Low,name:"loadTxt"},test(e){return ne(e,Qs)||U(e,$s)},load(e){return d(this,null,function*(){return yield(yield w.get().fetch(e)).text()})}};var Zs=["normal","bold","100","200","300","400","500","600","700","800","900"],Js=[".ttf",".otf",".woff",".woff2"],ea=["font/ttf","font/otf","font/woff","font/woff2"],ta=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ci(e){let t=te.extname(e),n=te.basename(e,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1)),i=n.length>0;for(let a of n)if(!a.match(ta)){i=!1;break}let s=n.join(" ");return i||(s=`"${s.replace(/[\\"]/g,"\\$&")}"`),s}var ra=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function oa(e){return ra.test(e)?e:encodeURI(e)}var jo={extension:{type:m.LoadParser,priority:G.Low},name:"loadWebFont",test(e){return ne(e,ea)||U(e,Js)},load(e,t){return d(this,null,function*(){let r=w.get().getFontFaceSet();if(r){let o=[],n=t.data?.family??ci(e),i=t.data?.weights?.filter(a=>Zs.includes(a))??["normal"],s=t.data??{};for(let a=0;a<i.length;a++){let u=i[a],l=new FontFace(n,`url(${oa(e)})`,C(h({},s),{weight:u}));yield l.load(),r.add(l),o.push(l)}return z.set(`${n}-and-url`,{url:e,fontFaces:o}),o.length===1?o[0]:o}return N("[loadWebFont] FontFace API is not supported. Skipping loading font"),null})},unload(e){(Array.isArray(e)?e:[e]).forEach(t=>{z.remove(`${t.family}-and-url`),w.get().getFontFaceSet().delete(t)})}};function Le(e,t=1){let r=le.RETINA_PREFIX?.exec(e);return r?parseFloat(r[1]):t}function Y(e,t,r){e.label=r,e._sourceOrigin=r;let o=new T({source:e,label:r}),n=()=>{delete t.promiseCache[r],z.has(r)&&z.remove(r)};return o.source.once("destroy",()=>{t.promiseCache[r]&&(N("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),o.once("destroy",()=>{e.destroyed||(N("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),o}var na=".svg",ia="image/svg+xml",Ko={extension:{type:m.LoadParser,priority:G.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(e){return ne(e,ia)||U(e,na)},load(e,t,r){return d(this,null,function*(){return t.data?.parseAsGraphicsContext??this.config.parseAsGraphicsContext?aa(e):sa(e,t,r,this.config.crossOrigin)})},unload(e){e.destroy(!0)}};function sa(e,t,r,o){return d(this,null,function*(){let i=yield(yield w.get().fetch(e)).blob(),s=URL.createObjectURL(i),a=new Image;a.src=s,a.crossOrigin=o,yield a.decode(),URL.revokeObjectURL(s);let u=document.createElement("canvas"),l=u.getContext("2d"),c=t.data?.resolution||Le(e),p=t.data?.width??a.width,f=t.data?.height??a.height;u.width=p*c,u.height=f*c,l.drawImage(a,0,0,p*c,f*c);let b=t.data??{},{parseAsGraphicsContext:g}=b,x=D(b,["parseAsGraphicsContext"]),_=new mt(h({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:c},x));return Y(_,r,e)})}function aa(e){return d(this,null,function*(){let r=yield(yield w.get().fetch(e)).text(),o=new Me;return o.svg(r),o})}var ua=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`,Qe=null,$o=(()=>{class e{constructor(){Qe||(Qe=URL.createObjectURL(new Blob([ua],{type:"application/javascript"}))),this.worker=new Worker(Qe)}}return e.revokeObjectURL=function(){Qe&&(URL.revokeObjectURL(Qe),Qe=null)},e})();var la=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`,Ze=null,pi=(()=>{class e{constructor(){Ze||(Ze=URL.createObjectURL(new Blob([la],{type:"application/javascript"}))),this.worker=new Worker(Ze)}}return e.revokeObjectURL=function(){Ze&&(URL.revokeObjectURL(Ze),Ze=null)},e})();var fi=0,Qo,Zo=class{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{let{worker:r}=new $o;r.addEventListener("message",o=>{r.terminate(),$o.revokeObjectURL(),t(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t,r){return this._run("loadImageBitmap",[t,r?.data?.alphaMode])}_initWorkers(){return d(this,null,function*(){this._initialized||(this._initialized=!0)})}_getWorker(){Qo===void 0&&(Qo=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<Qo&&(this._createdWorkers++,t=new pi().worker,t.addEventListener("message",r=>{this._complete(r.data),this._returnWorker(r.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}_run(t,r){return d(this,null,function*(){yield this._initWorkers();let o=new Promise((n,i)=>{this._queue.push({id:t,arguments:r,resolve:n,reject:i})});return this._next(),o})}_next(){if(!this._queue.length)return;let t=this._getWorker();if(!t)return;let r=this._queue.pop(),o=r.id;this._resolveHash[fi]={resolve:r.resolve,reject:r.reject},t.postMessage({data:r.arguments,uuid:fi++,id:o})}},Br=new Zo;var ca=[".jpeg",".jpg",".png",".webp",".avif"],pa=["image/jpeg","image/png","image/webp","image/avif"];function mi(e,t){return d(this,null,function*(){let r=yield w.get().fetch(e);if(!r.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${r.status} ${r.statusText}`);let o=yield r.blob();return t?.data?.alphaMode==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)})}var St={name:"loadTextures",extension:{type:m.LoadParser,priority:G.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(e){return ne(e,pa)||U(e,ca)},load(e,t,r){return d(this,null,function*(){let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&(yield Br.isImageBitmapSupported())?o=yield Br.loadImageBitmap(e,t):o=yield mi(e,t):o=yield new Promise((i,s)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=e,o.complete?i(o):(o.onload=()=>{i(o)},o.onerror=s)});let n=new mt(h({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:t.data?.resolution||Le(e)},t.data));return Y(n,r,e)})},unload(e){e.destroy(!0)}};var di=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],fa=di.map(e=>`video/${e.substring(1)}`);function hi(e,t,r){r===void 0&&!t.startsWith("data:")?e.crossOrigin=xi(t):r!==!1&&(e.crossOrigin=typeof r=="string"?r:"anonymous")}function gi(e){return new Promise((t,r)=>{e.addEventListener("canplaythrough",o),e.addEventListener("error",n),e.load();function o(){i(),t()}function n(s){i(),r(s)}function i(){e.removeEventListener("canplaythrough",o),e.removeEventListener("error",n)}})}function xi(e,t=globalThis.location){if(e.startsWith("data:"))return"";t||(t=globalThis.location);let r=new URL(e,document.baseURI);return r.hostname!==t.hostname||r.port!==t.port||r.protocol!==t.protocol?"anonymous":""}var Jo={name:"loadVideo",extension:{type:m.LoadParser,name:"loadVideo"},test(e){let t=ne(e,fa),r=U(e,di);return t||r},load(e,t,r){return d(this,null,function*(){let o=h(C(h({},dt.defaultOptions),{resolution:t.data?.resolution||Le(e),alphaMode:t.data?.alphaMode||(yield go())}),t.data),n=document.createElement("video"),i={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(i).forEach(u=>{let l=i[u];l!==void 0&&n.setAttribute(u,l)}),o.muted===!0&&(n.muted=!0),hi(n,e,o.crossorigin);let s=document.createElement("source"),a;if(e.startsWith("data:"))a=e.slice(5,e.indexOf(";"));else if(!e.startsWith("blob:")){let u=e.split("?")[0].slice(e.lastIndexOf(".")+1).toLowerCase();a=dt.MIME_TYPES[u]||`video/${u}`}return s.src=e,a&&(s.type=a),new Promise(u=>{let l=()=>d(this,null,function*(){let c=new dt(C(h({},o),{resource:n}));n.removeEventListener("canplay",l),t.data.preload&&(yield gi(n)),u(Y(c,r,e))});n.addEventListener("canplay",l),n.appendChild(s)})})},unload(e){e.destroy(!0)}};var Ct={extension:{type:m.ResolveParser,name:"resolveTexture"},test:St.test,parse:e=>({resolution:parseFloat(le.RETINA_PREFIX.exec(e)?.[1]??"1"),format:e.split(".").pop(),src:e})};var en={extension:{type:m.ResolveParser,priority:-2,name:"resolveJson"},test:e=>le.RETINA_PREFIX.test(e)&&e.endsWith(".json"),parse:Ct.parse};var Rr=class{constructor(){this._detections=[],this._initialized=!1,this.resolver=new le,this.loader=new Et,this.cache=z,this._backgroundLoader=new At(this.loader),this._backgroundLoader.active=!0,this.reset()}init(){return d(this,arguments,function*(t={}){if(this._initialized){N("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let i=t.manifest;typeof i=="string"&&(i=yield this.load(i)),this.resolver.addManifest(i)}let r=t.texturePreference?.resolution??1,o=typeof r=="number"?[r]:r,n=yield this._detectFormats({preferredFormats:t.texturePreference?.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:o}}),t.preferences&&this.setPreferences(t.preferences)})}add(t){this.resolver.add(t)}load(t,r){return d(this,null,function*(){this._initialized||(yield this.init());let o=ft(t),n=Te(t).map(a=>{if(typeof a!="string"){let u=this.resolver.getAlias(a);return u.some(l=>!this.resolver.hasKey(l))&&this.add(a),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),i=this.resolver.resolve(n),s=yield this._mapLoadToResolve(i,r);return o?s[n[0]]:s})}addBundle(t,r){this.resolver.addBundle(t,r)}loadBundle(t,r){return d(this,null,function*(){this._initialized||(yield this.init());let o=!1;typeof t=="string"&&(o=!0,t=[t]);let n=this.resolver.resolveBundle(t),i={},s=Object.keys(n),a=0,u=0,l=()=>{r?.(++a/u)},c=s.map(p=>{let f=n[p];return u+=Object.keys(f).length,this._mapLoadToResolve(f,l).then(g=>{i[p]=g})});return yield Promise.all(c),o?i[t[0]]:i})}backgroundLoad(t){return d(this,null,function*(){this._initialized||(yield this.init()),typeof t=="string"&&(t=[t]);let r=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(r))})}backgroundLoadBundle(t){return d(this,null,function*(){this._initialized||(yield this.init()),typeof t=="string"&&(t=[t]);let r=this.resolver.resolveBundle(t);Object.values(r).forEach(o=>{this._backgroundLoader.add(Object.values(o))})})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return z.get(t);let r={};for(let o=0;o<t.length;o++)r[o]=z.get(t[o]);return r}_mapLoadToResolve(t,r){return d(this,null,function*(){let o=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;let n=yield this.loader.load(o,r);this._backgroundLoader.active=!0;let i={};return o.forEach(s=>{let a=n[s.src],u=[s.src];s.alias&&u.push(...s.alias),u.forEach(l=>{i[l]=a}),z.set(u,a)}),i})}unload(t){return d(this,null,function*(){this._initialized||(yield this.init());let r=Te(t).map(n=>typeof n!="string"?n.src:n),o=this.resolver.resolve(r);yield this._unloadFromResolved(o)})}unloadBundle(t){return d(this,null,function*(){this._initialized||(yield this.init()),t=Te(t);let r=this.resolver.resolveBundle(t),o=Object.keys(r).map(n=>this._unloadFromResolved(r[n]));yield Promise.all(o)})}_unloadFromResolved(t){return d(this,null,function*(){let r=Object.values(t);r.forEach(o=>{z.remove(o.src)}),yield this.loader.unload(r)})}_detectFormats(t){return d(this,null,function*(){let r=[];t.preferredFormats&&(r=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(let o of t.detections)t.skipDetections||(yield o.test())?r=yield o.add(r):t.skipDetections||(r=yield o.remove(r));return r=r.filter((o,n)=>r.indexOf(o)===n),r})}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(r=>{r.config&&Object.keys(r.config).filter(o=>o in t).forEach(o=>{r.config[o]=t[o]})})}},Dt=new Rr;ue.handleByList(m.LoadParser,Dt.loader.parsers).handleByList(m.ResolveParser,Dt.resolver.parsers).handleByList(m.CacheParser,Dt.cache.parsers).handleByList(m.DetectionParser,Dt.detections);ue.add(Lo,Xo,ko,zo,Ho,Vo,qo,Wo,Yo,jo,Ko,St,Jo,No,Io,Ct,en);var bi={loader:m.LoadParser,resolver:m.ResolveParser,cache:m.CacheParser,detection:m.DetectionParser};ue.handle(m.Asset,e=>{let t=e.ref;Object.entries(bi).filter(([r])=>!!t[r]).forEach(([r,o])=>ue.add(Object.assign(t[r],{extension:t[r].extension??o})))},e=>{let t=e.ref;Object.keys(bi).filter(r=>!!t[r]).forEach(r=>ue.remove(t[r]))});var ma={extension:{type:m.DetectionParser,priority:3},test:()=>d(void 0,null,function*(){return!!((yield Ae())||ve())}),add:e=>d(void 0,null,function*(){return[...e,"basis"]}),remove:e=>d(void 0,null,function*(){return e.filter(t=>t!=="basis")})};var pe=class extends Ue{constructor(t){super(t),this.uploadMethodId="compressed",this.resource=t.resource,this.mipLevelCount=this.resource.length}};var wr;function Pr(){if(wr)return wr;let t=document.createElement("canvas").getContext("webgl");return t?(wr=[...t.getExtension("EXT_texture_compression_bptc")?["bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"]:[],...t.getExtension("WEBGL_compressed_texture_s3tc")?["bc1-rgba-unorm","bc2-rgba-unorm","bc3-rgba-unorm"]:[],...t.getExtension("WEBGL_compressed_texture_s3tc_srgb")?["bc1-rgba-unorm-srgb","bc2-rgba-unorm-srgb","bc3-rgba-unorm-srgb"]:[],...t.getExtension("EXT_texture_compression_rgtc")?["bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm"]:[],...t.getExtension("WEBGL_compressed_texture_etc")?["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","eac-r11unorm","eac-rg11unorm"]:[],...t.getExtension("WEBGL_compressed_texture_astc")?["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]:[]],wr):[]}var Fr;function Ur(){return d(this,null,function*(){if(Fr)return Fr;let e=yield w.get().getNavigator().gpu.requestAdapter();return Fr=[...e.features.has("texture-compression-bc")?["bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb"]:[],...e.features.has("texture-compression-etc2")?["etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm"]:[],...e.features.has("texture-compression-astc")?["astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"]:[]],Fr})}var Or;function Tt(){return d(this,null,function*(){return Or!==void 0||(Or=yield(()=>d(this,null,function*(){let e=yield Ae(),t=ve();if(e&&t){let r=yield Ur(),o=Pr();return r.filter(n=>o.includes(n))}else{if(e)return yield Ur();if(t)return Pr()}return[]}))()),Or})}var _i=["r8unorm","r8snorm","r8uint","r8sint","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32uint","r32sint","r32float","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb9e5ufloat","rgb10a2unorm","rg11b10ufloat","rg32uint","rg32sint","rg32float","rgba16uint","rgba16sint","rgba16float","rgba32uint","rgba32sint","rgba32float","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8"],Mr;function ye(){return d(this,null,function*(){if(Mr!==void 0)return Mr;let e=yield Tt();return Mr=[..._i,...e],Mr})}var da=`(function () {
    'use strict';

    function createLevelBuffers(basisTexture, basisTranscoderFormat) {
      const images = basisTexture.getNumImages();
      const levels = basisTexture.getNumLevels(0);
      const success = basisTexture.startTranscoding();
      if (!success) {
        throw new Error("startTranscoding failed");
      }
      const levelBuffers = [];
      for (let levelIndex = 0; levelIndex < levels; ++levelIndex) {
        for (let sliceIndex = 0; sliceIndex < images; ++sliceIndex) {
          const transcodeSize = basisTexture.getImageTranscodedSizeInBytes(sliceIndex, levelIndex, basisTranscoderFormat);
          const levelBuffer = new Uint8Array(transcodeSize);
          const success2 = basisTexture.transcodeImage(levelBuffer, sliceIndex, levelIndex, basisTranscoderFormat, 1, 0);
          if (!success2) {
            throw new Error("transcodeImage failed");
          }
          levelBuffers.push(levelBuffer);
        }
      }
      return levelBuffers;
    }

    const gpuFormatToBasisTranscoderFormatMap = {
      "bc3-rgba-unorm": 3,
      // cTFBC3_RGBA
      "bc7-rgba-unorm": 6,
      // cTFBC7_RGBA,
      "etc2-rgba8unorm": 1,
      // cTFETC2_RGBA,
      "astc-4x4-unorm": 10,
      // cTFASTC_4x4_RGBA,
      // Uncompressed
      rgba8unorm: 13,
      // cTFRGBA32,
      rgba4unorm: 16
      // cTFRGBA4444,
    };
    function gpuFormatToBasisTranscoderFormat(transcoderFormat) {
      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported transcoderFormat: \${transcoderFormat}\`);
    }

    const settings = {
      jsUrl: "basis/basis_transcoder.js",
      wasmUrl: "basis/basis_transcoder.wasm"
    };
    let basisTranscoderFormat;
    let basisTranscodedTextureFormat;
    let basisPromise;
    async function getBasis() {
      if (!basisPromise) {
        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;
        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;
        importScripts(absoluteJsUrl);
        basisPromise = new Promise((resolve) => {
          BASIS({
            locateFile: (_file) => absoluteWasmUrl
          }).then((module) => {
            module.initializeBasis();
            resolve(module.BasisFile);
          });
        });
      }
      return basisPromise;
    }
    async function fetchBasisTexture(url, BasisTexture) {
      const basisResponse = await fetch(url);
      if (basisResponse.ok) {
        const basisArrayBuffer = await basisResponse.arrayBuffer();
        return new BasisTexture(new Uint8Array(basisArrayBuffer));
      }
      throw new Error(\`Failed to load Basis texture: \${url}\`);
    }
    const preferredTranscodedFormat = [
      "bc7-rgba-unorm",
      "astc-4x4-unorm",
      "etc2-rgba8unorm",
      "bc3-rgba-unorm",
      "rgba8unorm"
    ];
    async function load(url) {
      const BasisTexture = await getBasis();
      const basisTexture = await fetchBasisTexture(url, BasisTexture);
      const levelBuffers = createLevelBuffers(basisTexture, basisTranscoderFormat);
      return {
        width: basisTexture.getImageWidth(0, 0),
        height: basisTexture.getImageHeight(0, 0),
        format: basisTranscodedTextureFormat,
        resource: levelBuffers,
        alphaMode: "no-premultiply-alpha"
      };
    }
    async function init(jsUrl, wasmUrl, supportedTextures) {
      if (jsUrl)
        settings.jsUrl = jsUrl;
      if (wasmUrl)
        settings.wasmUrl = wasmUrl;
      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];
      basisTranscoderFormat = gpuFormatToBasisTranscoderFormat(basisTranscodedTextureFormat);
      await getBasis();
    }
    const messageHandlers = {
      init: async (data) => {
        const { jsUrl, wasmUrl, supportedTextures } = data;
        await init(jsUrl, wasmUrl, supportedTextures);
      },
      load: async (data) => {
        try {
          const textureOptions = await load(data.url);
          return {
            type: "load",
            url: data.url,
            success: true,
            textureOptions,
            transferables: textureOptions.resource?.map((arr) => arr.buffer)
          };
        } catch (e) {
          throw e;
        }
      }
    };
    self.onmessage = async (messageEvent) => {
      const message = messageEvent.data;
      const response = await messageHandlers[message.type](message);
      if (response) {
        self.postMessage(response, response.transferables);
      }
    };

})();
`,Je=null,vi=(()=>{class e{constructor(){Je||(Je=URL.createObjectURL(new Blob([da],{type:"application/javascript"}))),this.worker=new Worker(Je)}}return e.revokeObjectURL=function(){Je&&(URL.revokeObjectURL(Je),Je=null)},e})();var Bt={jsUrl:"https://files.pixijs.download/transcoders/basis/basis_transcoder.js",wasmUrl:"https://files.pixijs.download/transcoders/basis/basis_transcoder.wasm"};function ha(e){Object.assign(Bt,e)}var Rt,Ai={};function ga(e){return Rt||(Rt=new vi().worker,Rt.onmessage=t=>{let{success:r,url:o,textureOptions:n}=t.data;r||console.warn("Failed to load Basis texture",o),Ai[o](n)},Rt.postMessage({type:"init",jsUrl:Bt.jsUrl,wasmUrl:Bt.wasmUrl,supportedTextures:e})),Rt}function tn(e,t){let r=ga(t);return new Promise(o=>{Ai[e]=o,r.postMessage({type:"load",url:e})})}var xa={extension:{type:m.LoadParser,priority:G.High,name:"loadBasis"},name:"loadBasis",test(e){return U(e,[".basis"])},load(e,t,r){return d(this,null,function*(){let o=yield ye(),n=yield tn(e,o),i=new pe(n);return Y(i,r,e)})},unload(e){Array.isArray(e)?e.forEach(t=>t.destroy(!0)):e.destroy(!0)}};function ba(e,t){let r=e.getNumImages(),o=e.getNumLevels(0);if(!e.startTranscoding())throw new Error("startTranscoding failed");let i=[];for(let s=0;s<o;++s)for(let a=0;a<r;++a){let u=e.getImageTranscodedSizeInBytes(a,s,t),l=new Uint8Array(u);if(!e.transcodeImage(l,a,s,t,1,0))throw new Error("transcodeImage failed");i.push(l)}return i}var _a={"bc3-rgba-unorm":3,"bc7-rgba-unorm":6,"etc2-rgba8unorm":1,"astc-4x4-unorm":10,rgba8unorm:13,rgba4unorm:16};function va(e){let t=_a[e];if(t)return t;throw new Error(`Unsupported transcoderFormat: ${e}`)}var Aa={MAGIC:0,SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19,PF_FLAGS:20,FOURCC:21,RGB_BITCOUNT:22,R_BIT_MASK:23,G_BIT_MASK:24,B_BIT_MASK:25,A_BIT_MASK:26},ya={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},rn=(e=>(e[e.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",e[e.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",e[e.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",e[e.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",e[e.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",e[e.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",e[e.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",e[e.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",e[e.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",e[e.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",e[e.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",e[e.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",e[e.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",e[e.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",e[e.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",e[e.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",e[e.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",e[e.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",e[e.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",e[e.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",e[e.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",e[e.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",e[e.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",e[e.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",e[e.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",e[e.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",e[e.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",e[e.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",e[e.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",e[e.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",e[e.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",e[e.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",e[e.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",e[e.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",e[e.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",e[e.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",e[e.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",e[e.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",e[e.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",e[e.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",e[e.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",e[e.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",e[e.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",e[e.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",e[e.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",e[e.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",e[e.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",e[e.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",e[e.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",e[e.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",e[e.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",e[e.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",e[e.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",e[e.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",e[e.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",e[e.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",e[e.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",e[e.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",e[e.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",e[e.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",e[e.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",e[e.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",e[e.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",e[e.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",e[e.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",e[e.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",e[e.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",e[e.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",e[e.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",e[e.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",e[e.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",e[e.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",e[e.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",e[e.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",e[e.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",e[e.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",e[e.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",e[e.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",e[e.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",e[e.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",e[e.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",e[e.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",e[e.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",e[e.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",e[e.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",e[e.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",e[e.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",e[e.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",e[e.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",e[e.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",e[e.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",e[e.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",e[e.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",e[e.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",e[e.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",e[e.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",e[e.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",e[e.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",e[e.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",e[e.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",e[e.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",e[e.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",e[e.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",e[e.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",e[e.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",e[e.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",e[e.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",e[e.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",e[e.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",e[e.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",e[e.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",e[e.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",e[e.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",e[e.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",e[e.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",e[e.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",e[e.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",e[e.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",e[e.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",e[e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",e[e.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",e[e.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT",e))(rn||{}),on=(e=>(e[e.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",e[e.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",e[e.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D",e))(on||{});function L(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var K=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.R8G8B8=20]="R8G8B8",e[e.A8R8G8B8=21]="A8R8G8B8",e[e.X8R8G8B8=22]="X8R8G8B8",e[e.R5G6B5=23]="R5G6B5",e[e.X1R5G5B5=24]="X1R5G5B5",e[e.A1R5G5B5=25]="A1R5G5B5",e[e.A4R4G4B4=26]="A4R4G4B4",e[e.R3G3B2=27]="R3G3B2",e[e.A8=28]="A8",e[e.A8R3G3B2=29]="A8R3G3B2",e[e.X4R4G4B4=30]="X4R4G4B4",e[e.A2B10G10R10=31]="A2B10G10R10",e[e.A8B8G8R8=32]="A8B8G8R8",e[e.X8B8G8R8=33]="X8B8G8R8",e[e.G16R16=34]="G16R16",e[e.A2R10G10B10=35]="A2R10G10B10",e[e.A16B16G16R16=36]="A16B16G16R16",e[e.A8P8=40]="A8P8",e[e.P8=41]="P8",e[e.L8=50]="L8",e[e.A8L8=51]="A8L8",e[e.A4L4=52]="A4L4",e[e.V8U8=60]="V8U8",e[e.L6V5U5=61]="L6V5U5",e[e.X8L8V8U8=62]="X8L8V8U8",e[e.Q8W8V8U8=63]="Q8W8V8U8",e[e.V16U16=64]="V16U16",e[e.A2W10V10U10=67]="A2W10V10U10",e[e.Q16W16V16U16=110]="Q16W16V16U16",e[e.R16F=111]="R16F",e[e.G16R16F=112]="G16R16F",e[e.A16B16G16R16F=113]="A16B16G16R16F",e[e.R32F=114]="R32F",e[e.G32R32F=115]="G32R32F",e[e.A32B32G32R32F=116]="A32B32G32R32F",e[e.UYVY=L("UYVY")]="UYVY",e[e.R8G8_B8G8=L("RGBG")]="R8G8_B8G8",e[e.YUY2=L("YUY2")]="YUY2",e[e.D3DFMT_G8R8_G8B8=L("GRGB")]="D3DFMT_G8R8_G8B8",e[e.DXT1=L("DXT1")]="DXT1",e[e.DXT2=L("DXT2")]="DXT2",e[e.DXT3=L("DXT3")]="DXT3",e[e.DXT4=L("DXT4")]="DXT4",e[e.DXT5=L("DXT5")]="DXT5",e[e.ATI1=L("ATI1")]="ATI1",e[e.AT1N=L("AT1N")]="AT1N",e[e.ATI2=L("ATI2")]="ATI2",e[e.AT2N=L("AT2N")]="AT2N",e[e.BC4U=L("BC4U")]="BC4U",e[e.BC4S=L("BC4S")]="BC4S",e[e.BC5U=L("BC5U")]="BC5U",e[e.BC5S=L("BC5S")]="BC5S",e[e.DX10=L("DX10")]="DX10",e))(K||{}),Gr={[K.DXT1]:"bc1-rgba-unorm",[K.DXT2]:"bc2-rgba-unorm",[K.DXT3]:"bc2-rgba-unorm",[K.DXT4]:"bc3-rgba-unorm",[K.DXT5]:"bc3-rgba-unorm",[K.ATI1]:"bc4-r-unorm",[K.BC4U]:"bc4-r-unorm",[K.BC4S]:"bc4-r-snorm",[K.ATI2]:"bc5-rg-unorm",[K.BC5U]:"bc5-rg-unorm",[K.BC5S]:"bc5-rg-snorm",36:"rgba16uint",110:"rgba16sint",111:"r16float",112:"rg16float",113:"rgba16float",114:"r32float",115:"rg32float",116:"rgba32float"},j={70:"bc1-rgba-unorm",71:"bc1-rgba-unorm",72:"bc1-rgba-unorm-srgb",73:"bc2-rgba-unorm",74:"bc2-rgba-unorm",75:"bc2-rgba-unorm-srgb",76:"bc3-rgba-unorm",77:"bc3-rgba-unorm",78:"bc3-rgba-unorm-srgb",79:"bc4-r-unorm",80:"bc4-r-unorm",81:"bc4-r-snorm",82:"bc5-rg-unorm",83:"bc5-rg-unorm",84:"bc5-rg-snorm",94:"bc6h-rgb-ufloat",95:"bc6h-rgb-ufloat",96:"bc6h-rgb-float",97:"bc7-rgba-unorm",98:"bc7-rgba-unorm",99:"bc7-rgba-unorm-srgb",28:"rgba8unorm",29:"rgba8unorm-srgb",87:"bgra8unorm",91:"bgra8unorm-srgb",41:"r32float",49:"rg8unorm",56:"r16uint",61:"r8unorm",24:"rgb10a2unorm",11:"rgba16uint",13:"rgba16sint",10:"rgba16float",54:"r16float",34:"rg16float",16:"rg32float",2:"rgba32float"},v={MAGIC_VALUE:542327876,MAGIC_SIZE:4,HEADER_SIZE:124,HEADER_DX10_SIZE:20,PIXEL_FORMAT_FLAGS:{ALPHAPIXELS:1,ALPHA:2,FOURCC:4,RGB:64,RGBA:65,YUV:512,LUMINANCE:131072,LUMINANCEA:131073},RESOURCE_MISC_TEXTURECUBE:4,HEADER_FIELDS:Aa,HEADER_DX10_FIELDS:ya,DXGI_FORMAT:rn,D3D10_RESOURCE_DIMENSION:on,D3DFMT:K},nn={"bc1-rgba-unorm":8,"bc1-rgba-unorm-srgb":8,"bc2-rgba-unorm":16,"bc2-rgba-unorm-srgb":16,"bc3-rgba-unorm":16,"bc3-rgba-unorm-srgb":16,"bc4-r-unorm":8,"bc4-r-snorm":8,"bc5-rg-unorm":16,"bc5-rg-snorm":16,"bc6h-rgb-ufloat":16,"bc6h-rgb-float":16,"bc7-rgba-unorm":16,"bc7-rgba-unorm-srgb":16};function sn(e,t){let{format:r,fourCC:o,width:n,height:i,dataOffset:s,mipmapCount:a}=Sa(e);if(!t.includes(r))throw new Error(`Unsupported texture format: ${o} ${r}, supported: ${t}`);if(a<=1)return{format:r,width:n,height:i,resource:[new Uint8Array(e,s)],alphaMode:"no-premultiply-alpha"};let u=Ea(r,n,i,s,a,e);return{format:r,width:n,height:i,resource:u,alphaMode:"no-premultiply-alpha"}}function Ea(e,t,r,o,n,i){let s=[],a=nn[e],u=t,l=r,c=o;for(let p=0;p<n;++p){let f=Math.ceil(Math.max(4,u)/4)*4,g=Math.ceil(Math.max(4,l)/4)*4,x=a?f/4*g/4*a:u*l*4,_=new Uint8Array(i,c,x);s.push(_),c+=x,u=Math.max(u>>1,1),l=Math.max(l>>1,1)}return s}function Sa(e){let t=new Uint32Array(e,0,v.HEADER_SIZE/Uint32Array.BYTES_PER_ELEMENT);if(t[v.HEADER_FIELDS.MAGIC]!==v.MAGIC_VALUE)throw new Error("Invalid magic number in DDS header");let r=t[v.HEADER_FIELDS.HEIGHT],o=t[v.HEADER_FIELDS.WIDTH],n=Math.max(1,t[v.HEADER_FIELDS.MIPMAP_COUNT]),i=t[v.HEADER_FIELDS.PF_FLAGS],s=t[v.HEADER_FIELDS.FOURCC],a=Ca(t,i,s,e),u=v.MAGIC_SIZE+v.HEADER_SIZE+(s===v.D3DFMT.DX10?v.HEADER_DX10_SIZE:0);return{format:a,fourCC:s,width:o,height:r,dataOffset:u,mipmapCount:n}}function Ca(e,t,r,o){if(t&v.PIXEL_FORMAT_FLAGS.FOURCC){if(r===v.D3DFMT.DX10){let n=new Uint32Array(o,v.MAGIC_SIZE+v.HEADER_SIZE,v.HEADER_DX10_SIZE/Uint32Array.BYTES_PER_ELEMENT);if(n[v.HEADER_DX10_FIELDS.MISC_FLAG]===v.RESOURCE_MISC_TEXTURECUBE)throw new Error("DDSParser does not support cubemap textures");if(n[v.HEADER_DX10_FIELDS.RESOURCE_DIMENSION]===v.D3D10_RESOURCE_DIMENSION.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSParser does not supported 3D texture data");let a=n[v.HEADER_DX10_FIELDS.DXGI_FORMAT];if(a in j)return j[a];throw new Error(`DDSParser cannot parse texture data with DXGI format ${a}`)}if(r in Gr)return Gr[r];throw new Error(`DDSParser cannot parse texture data with fourCC format ${r}`)}if(t&v.PIXEL_FORMAT_FLAGS.RGB||t&v.PIXEL_FORMAT_FLAGS.RGBA)return Da(e);throw t&v.PIXEL_FORMAT_FLAGS.YUV?new Error("DDSParser does not supported YUV uncompressed texture data."):t&v.PIXEL_FORMAT_FLAGS.LUMINANCE||t&v.PIXEL_FORMAT_FLAGS.LUMINANCEA?new Error("DDSParser does not support single-channel (lumninance) texture data!"):t&v.PIXEL_FORMAT_FLAGS.ALPHA||t&v.PIXEL_FORMAT_FLAGS.ALPHAPIXELS?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}function Da(e){let t=e[v.HEADER_FIELDS.RGB_BITCOUNT],r=e[v.HEADER_FIELDS.R_BIT_MASK],o=e[v.HEADER_FIELDS.G_BIT_MASK],n=e[v.HEADER_FIELDS.B_BIT_MASK],i=e[v.HEADER_FIELDS.A_BIT_MASK];switch(t){case 32:if(r===255&&o===65280&&n===16711680&&i===4278190080)return j[v.DXGI_FORMAT.DXGI_FORMAT_R8G8B8A8_UNORM];if(r===16711680&&o===65280&&n===255&&i===4278190080)return j[v.DXGI_FORMAT.DXGI_FORMAT_B8G8R8A8_UNORM];if(r===1072693248&&o===1047552&&n===1023&&i===3221225472)return j[v.DXGI_FORMAT.DXGI_FORMAT_R10G10B10A2_UNORM];if(r===65535&&o===4294901760&&n===0&&i===0)return j[v.DXGI_FORMAT.DXGI_FORMAT_R16G16_UNORM];if(r===4294967295&&o===0&&n===0&&i===0)return j[v.DXGI_FORMAT.DXGI_FORMAT_R32_FLOAT];break;case 24:break;case 16:if(r===31744&&o===992&&n===31&&i===32768)return j[v.DXGI_FORMAT.DXGI_FORMAT_B5G5R5A1_UNORM];if(r===63488&&o===2016&&n===31&&i===0)return j[v.DXGI_FORMAT.DXGI_FORMAT_B5G6R5_UNORM];if(r===3840&&o===240&&n===15&&i===61440)return j[v.DXGI_FORMAT.DXGI_FORMAT_B4G4R4A4_UNORM];if(r===255&&o===0&&n===0&&i===65280)return j[v.DXGI_FORMAT.DXGI_FORMAT_R8G8_UNORM];if(r===65535&&o===0&&n===0&&i===0)return j[v.DXGI_FORMAT.DXGI_FORMAT_R16_UNORM];break;case 8:if(r===255&&o===0&&n===0&&i===0)return j[v.DXGI_FORMAT.DXGI_FORMAT_R8_UNORM];break}throw new Error(`DDSParser does not support uncompressed texture with configuration:
                bitCount = ${t}, rBitMask = ${r}, gBitMask = ${o}, aBitMask = ${i}`)}var Ta={extension:{type:m.LoadParser,priority:G.High,name:"loadDDS"},name:"loadDDS",test(e){return U(e,[".dds"])},load(e,t,r){return d(this,null,function*(){let o=yield ye(),i=yield(yield fetch(e)).arrayBuffer(),s=sn(i,o),a=new pe(s);return Y(a,r,e)})},unload(e){Array.isArray(e)?e.forEach(t=>t.destroy(!0)):e.destroy(!0)}};var yi=(e=>(e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGBA=6408]="RGBA",e[e.RGBA8UI=36220]="RGBA8UI",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGBA8I=36238]="RGBA8I",e[e.RGBA8=32856]="RGBA8",e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RED_RGTC1_EXT=36283]="COMPRESSED_RED_RGTC1_EXT",e[e.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]="COMPRESSED_SIGNED_RED_RGTC1_EXT",e[e.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]="COMPRESSED_RED_GREEN_RGTC2_EXT",e[e.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]="COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",e[e.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]="COMPRESSED_RGBA_ASTC_5x4_KHR",e[e.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]="COMPRESSED_RGBA_ASTC_5x5_KHR",e[e.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]="COMPRESSED_RGBA_ASTC_6x5_KHR",e[e.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]="COMPRESSED_RGBA_ASTC_6x6_KHR",e[e.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]="COMPRESSED_RGBA_ASTC_8x5_KHR",e[e.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]="COMPRESSED_RGBA_ASTC_8x6_KHR",e[e.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]="COMPRESSED_RGBA_ASTC_8x8_KHR",e[e.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]="COMPRESSED_RGBA_ASTC_10x5_KHR",e[e.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]="COMPRESSED_RGBA_ASTC_10x6_KHR",e[e.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]="COMPRESSED_RGBA_ASTC_10x8_KHR",e[e.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]="COMPRESSED_RGBA_ASTC_10x10_KHR",e[e.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]="COMPRESSED_RGBA_ASTC_12x10_KHR",e[e.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]="COMPRESSED_RGBA_ASTC_12x12_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]="COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR",e[e.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR",e[e.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",e[e.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",e[e.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",e[e.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",e))(yi||{});var Ba={33776:"bc1-rgba-unorm",33777:"bc1-rgba-unorm",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",35916:"bc1-rgba-unorm-srgb",35917:"bc1-rgba-unorm-srgb",35918:"bc2-rgba-unorm-srgb",35919:"bc3-rgba-unorm-srgb",36283:"bc4-r-unorm",36284:"bc4-r-snorm",36285:"bc5-rg-unorm",36286:"bc5-rg-snorm",37488:"eac-r11unorm",37490:"eac-rg11snorm",37492:"etc2-rgb8unorm",37496:"etc2-rgba8unorm",37493:"etc2-rgb8unorm-srgb",37497:"etc2-rgba8unorm-srgb",37494:"etc2-rgb8a1unorm",37495:"etc2-rgb8a1unorm-srgb",37808:"astc-4x4-unorm",37840:"astc-4x4-unorm-srgb",37809:"astc-5x4-unorm",37841:"astc-5x4-unorm-srgb",37810:"astc-5x5-unorm",37842:"astc-5x5-unorm-srgb",37811:"astc-6x5-unorm",37843:"astc-6x5-unorm-srgb",37812:"astc-6x6-unorm",37844:"astc-6x6-unorm-srgb",37813:"astc-8x5-unorm",37845:"astc-8x5-unorm-srgb",37814:"astc-8x6-unorm",37846:"astc-8x6-unorm-srgb",37815:"astc-8x8-unorm",37847:"astc-8x8-unorm-srgb",37816:"astc-10x5-unorm",37848:"astc-10x5-unorm-srgb",37817:"astc-10x6-unorm",37849:"astc-10x6-unorm-srgb",37818:"astc-10x8-unorm",37850:"astc-10x8-unorm-srgb",37819:"astc-10x10-unorm",37851:"astc-10x10-unorm-srgb",37820:"astc-12x10-unorm",37852:"astc-12x10-unorm-srgb",37821:"astc-12x12-unorm",37853:"astc-12x12-unorm-srgb",36492:"bc7-rgba-unorm",36493:"bc7-rgba-unorm-srgb",36494:"bc6h-rgb-float",36495:"bc6h-rgb-ufloat",35907:"rgba8unorm-srgb",36759:"rgba8snorm",36220:"rgba8uint",36238:"rgba8sint",6408:"rgba8unorm"},Ra=[171,75,84,88,32,49,49,187,13,10,26,10],wa={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},Pa=64,Fa=67305985,Ua={5121:1,5123:2,5124:4,5125:4,5126:4,36193:8},Oa={6408:4,6407:3,33319:2,6403:1,6409:1,6410:2,6406:1},Ma={32819:2,32820:2,33635:2},Ga={33776:.5,33777:.5,33778:1,33779:1,35916:.5,35917:.5,35918:1,35919:1,36283:.5,36284:.5,36285:1,36286:1,37488:.5,37489:.5,37490:1,37491:1,37492:.5,37496:1,37493:.5,37497:1,37494:.5,37495:.5,37808:1,37840:1,37809:.8,37841:.8,37810:.64,37842:.64,37811:.53375,37843:.53375,37812:.445,37844:.445,37813:.4,37845:.4,37814:.33375,37846:.33375,37815:.25,37847:.25,37816:.32,37848:.32,37817:.26625,37849:.26625,37818:.2,37850:.2,37819:.16,37851:.16,37820:.13375,37852:.13375,37821:.11125,37853:.11125,36492:1,36493:1,36494:1,36495:1},O={FILE_HEADER_SIZE:Pa,FILE_IDENTIFIER:Ra,FORMATS_TO_COMPONENTS:Oa,INTERNAL_FORMAT_TO_BYTES_PER_PIXEL:Ga,INTERNAL_FORMAT_TO_TEXTURE_FORMATS:Ba,FIELDS:wa,TYPES_TO_BYTES_PER_COMPONENT:Ua,TYPES_TO_BYTES_PER_PIXEL:Ma,ENDIANNESS:Fa};function an(e,t){let r=new DataView(e);if(!ka(r))throw new Error("Invalid KTX identifier in header");let{littleEndian:o,glType:n,glFormat:i,glInternalFormat:s,pixelWidth:a,pixelHeight:u,numberOfMipmapLevels:l,offset:c}=La(r),p=O.INTERNAL_FORMAT_TO_TEXTURE_FORMATS[s];if(!p)throw new Error(`Unknown texture format ${s}`);if(!t.includes(p))throw new Error(`Unsupported texture format: ${p}, supportedFormats: ${t}`);let f=Na(n,i,s),g=Ia(r,n,f,a,u,c,l,o);return{format:p,width:a,height:u,resource:g,alphaMode:"no-premultiply-alpha"}}function Ia(e,t,r,o,n,i,s,a){let u=o+3&-4,l=n+3&-4,c=o*n;t===0&&(c=u*l);let p=c*r,f=o,g=n,x=u,_=l,b=i,y=new Array(s);for(let F=0;F<s;F++){let S=e.getUint32(b,a),B=b+4;y[F]=new Uint8Array(e.buffer,B,p),B+=p,b+=S+4,b=b%4!==0?b+4-b%4:b,f=f>>1||1,g=g>>1||1,x=f+4-1&~(4-1),_=g+4-1&~(4-1),p=x*_*r}return y}function Na(e,t,r){let o=O.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL[r];if(e!==0&&(O.TYPES_TO_BYTES_PER_COMPONENT[e]?o=O.TYPES_TO_BYTES_PER_COMPONENT[e]*O.FORMATS_TO_COMPONENTS[t]:o=O.TYPES_TO_BYTES_PER_PIXEL[e]),o===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");return o}function La(e){let t=e.getUint32(O.FIELDS.ENDIANNESS,!0)===O.ENDIANNESS,r=e.getUint32(O.FIELDS.GL_TYPE,t),o=e.getUint32(O.FIELDS.GL_FORMAT,t),n=e.getUint32(O.FIELDS.GL_INTERNAL_FORMAT,t),i=e.getUint32(O.FIELDS.PIXEL_WIDTH,t),s=e.getUint32(O.FIELDS.PIXEL_HEIGHT,t)||1,a=e.getUint32(O.FIELDS.PIXEL_DEPTH,t)||1,u=e.getUint32(O.FIELDS.NUMBER_OF_ARRAY_ELEMENTS,t)||1,l=e.getUint32(O.FIELDS.NUMBER_OF_FACES,t),c=e.getUint32(O.FIELDS.NUMBER_OF_MIPMAP_LEVELS,t),p=e.getUint32(O.FIELDS.BYTES_OF_KEY_VALUE_DATA,t);if(s===0||a!==1)throw new Error("Only 2D textures are supported");if(l!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(u!==1)throw new Error("WebGL does not support array textures");return{littleEndian:t,glType:r,glFormat:o,glInternalFormat:n,pixelWidth:i,pixelHeight:s,numberOfMipmapLevels:c,offset:O.FILE_HEADER_SIZE+p}}function ka(e){for(let t=0;t<O.FILE_IDENTIFIER.length;t++)if(e.getUint8(t)!==O.FILE_IDENTIFIER[t])return!1;return!0}var Xa={extension:{type:m.LoadParser,priority:G.High,name:"loadKTX"},name:"loadKTX",test(e){return U(e,".ktx")},load(e,t,r){return d(this,null,function*(){let o=yield ye(),i=yield(yield fetch(e)).arrayBuffer(),s=an(i,o),a=new pe(s);return Y(a,r,e)})},unload(e){Array.isArray(e)?e.forEach(t=>t.destroy(!0)):e.destroy(!0)}};var Ha=`(function () {
    'use strict';

    const converters = {
      rgb8unorm: {
        convertedFormat: "rgba8unorm",
        convertFunction: convertRGBtoRGBA
      },
      "rgb8unorm-srgb": {
        convertedFormat: "rgba8unorm-srgb",
        convertFunction: convertRGBtoRGBA
      }
    };
    function convertFormatIfRequired(textureOptions) {
      const format = textureOptions.format;
      if (converters[format]) {
        const convertFunction = converters[format].convertFunction;
        const levelBuffers = textureOptions.resource;
        for (let i = 0; i < levelBuffers.length; i++) {
          levelBuffers[i] = convertFunction(levelBuffers[i]);
        }
        textureOptions.format = converters[format].convertedFormat;
      }
    }
    function convertRGBtoRGBA(levelBuffer) {
      const pixelCount = levelBuffer.byteLength / 3;
      const levelBufferWithAlpha = new Uint32Array(pixelCount);
      for (let i = 0; i < pixelCount; ++i) {
        levelBufferWithAlpha[i] = levelBuffer[i * 3] + (levelBuffer[i * 3 + 1] << 8) + (levelBuffer[i * 3 + 2] << 16) + 4278190080;
      }
      return new Uint8Array(levelBufferWithAlpha.buffer);
    }

    function createLevelBuffersFromKTX(ktxTexture) {
      const levelBuffers = [];
      for (let i = 0; i < ktxTexture.numLevels; i++) {
        const imageData = ktxTexture.getImageData(i, 0, 0);
        const levelBuffer = new Uint8Array(imageData.byteLength);
        levelBuffer.set(imageData);
        levelBuffers.push(levelBuffer);
      }
      return levelBuffers;
    }

    const glFormatToGPUFormatMap = {
      6408: "rgba8unorm",
      32856: "bgra8unorm",
      //
      32857: "rgb10a2unorm",
      33189: "depth16unorm",
      33190: "depth24plus",
      33321: "r8unorm",
      33323: "rg8unorm",
      33325: "r16float",
      33326: "r32float",
      33327: "rg16float",
      33328: "rg32float",
      33329: "r8sint",
      33330: "r8uint",
      33331: "r16sint",
      33332: "r16uint",
      33333: "r32sint",
      33334: "r32uint",
      33335: "rg8sint",
      33336: "rg8uint",
      33337: "rg16sint",
      33338: "rg16uint",
      33339: "rg32sint",
      33340: "rg32uint",
      33778: "bc2-rgba-unorm",
      33779: "bc3-rgba-unorm",
      34836: "rgba32float",
      34842: "rgba16float",
      35056: "depth24plus-stencil8",
      35898: "rg11b10ufloat",
      35901: "rgb9e5ufloat",
      35907: "rgba8unorm-srgb",
      // bgra8unorm-srgb
      36012: "depth32float",
      36013: "depth32float-stencil8",
      36168: "stencil8",
      36208: "rgba32uint",
      36214: "rgba16uint",
      36220: "rgba8uint",
      36226: "rgba32sint",
      36232: "rgba16sint",
      36238: "rgba8sint",
      36492: "bc7-rgba-unorm",
      36756: "r8snorm",
      36757: "rg8snorm",
      36759: "rgba8snorm",
      37496: "etc2-rgba8unorm",
      37808: "astc-4x4-unorm"
    };
    function glFormatToGPUFormat(glInternalFormat) {
      const format = glFormatToGPUFormatMap[glInternalFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported glInternalFormat: \${glInternalFormat}\`);
    }

    const vkFormatToGPUFormatMap = {
      23: "rgb8unorm",
      // VK_FORMAT_R8G8B8_UNORM
      37: "rgba8unorm",
      // VK_FORMAT_R8G8B8A8_UNORM
      43: "rgba8unorm-srgb"
      // VK_FORMAT_R8G8B8A8_SRGB
      // TODO add more!
    };
    function vkFormatToGPUFormat(vkFormat) {
      const format = vkFormatToGPUFormatMap[vkFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported VkFormat: \${vkFormat}\`);
    }

    function getTextureFormatFromKTXTexture(ktxTexture) {
      if (ktxTexture.classId === 2) {
        return vkFormatToGPUFormat(ktxTexture.vkFormat);
      }
      return glFormatToGPUFormat(ktxTexture.glInternalformat);
    }

    const gpuFormatToBasisTranscoderFormatMap = {
      "bc3-rgba-unorm": "BC3_RGBA",
      "bc7-rgba-unorm": "BC7_M5_RGBA",
      "etc2-rgba8unorm": "ETC2_RGBA",
      "astc-4x4-unorm": "ASTC_4x4_RGBA",
      // Uncompressed
      rgba8unorm: "RGBA32",
      rg11b10ufloat: "R11F_G11F_B10F"
    };
    function gpuFormatToKTXBasisTranscoderFormat(transcoderFormat) {
      const format = gpuFormatToBasisTranscoderFormatMap[transcoderFormat];
      if (format) {
        return format;
      }
      throw new Error(\`Unsupported transcoderFormat: \${transcoderFormat}\`);
    }

    const settings = {
      jsUrl: "",
      wasmUrl: ""
    };
    let basisTranscoderFormat;
    let basisTranscodedTextureFormat;
    let ktxPromise;
    async function getKTX() {
      if (!ktxPromise) {
        const absoluteJsUrl = new URL(settings.jsUrl, location.origin).href;
        const absoluteWasmUrl = new URL(settings.wasmUrl, location.origin).href;
        importScripts(absoluteJsUrl);
        ktxPromise = new Promise((resolve) => {
          LIBKTX({
            locateFile: (_file) => absoluteWasmUrl
          }).then((libktx) => {
            resolve(libktx);
          });
        });
      }
      return ktxPromise;
    }
    async function fetchKTXTexture(url, ktx) {
      const ktx2Response = await fetch(url);
      if (ktx2Response.ok) {
        const ktx2ArrayBuffer = await ktx2Response.arrayBuffer();
        return new ktx.ktxTexture(new Uint8Array(ktx2ArrayBuffer));
      }
      throw new Error(\`Failed to load KTX(2) texture: \${url}\`);
    }
    const preferredTranscodedFormat = [
      "bc7-rgba-unorm",
      "astc-4x4-unorm",
      "etc2-rgba8unorm",
      "bc3-rgba-unorm",
      "rgba8unorm"
    ];
    async function load(url) {
      const ktx = await getKTX();
      const ktxTexture = await fetchKTXTexture(url, ktx);
      let format;
      if (ktxTexture.needsTranscoding) {
        format = basisTranscodedTextureFormat;
        const transcodeFormat = ktx.TranscodeTarget[basisTranscoderFormat];
        const result = ktxTexture.transcodeBasis(transcodeFormat, 0);
        if (result !== ktx.ErrorCode.SUCCESS) {
          throw new Error("Unable to transcode basis texture.");
        }
      } else {
        format = getTextureFormatFromKTXTexture(ktxTexture);
      }
      const levelBuffers = createLevelBuffersFromKTX(ktxTexture);
      const textureOptions = {
        width: ktxTexture.baseWidth,
        height: ktxTexture.baseHeight,
        format,
        mipLevelCount: ktxTexture.numLevels,
        resource: levelBuffers,
        alphaMode: "no-premultiply-alpha"
      };
      convertFormatIfRequired(textureOptions);
      return textureOptions;
    }
    async function init(jsUrl, wasmUrl, supportedTextures) {
      if (jsUrl)
        settings.jsUrl = jsUrl;
      if (wasmUrl)
        settings.wasmUrl = wasmUrl;
      basisTranscodedTextureFormat = preferredTranscodedFormat.filter((format) => supportedTextures.includes(format))[0];
      basisTranscoderFormat = gpuFormatToKTXBasisTranscoderFormat(basisTranscodedTextureFormat);
      await getKTX();
    }
    const messageHandlers = {
      init: async (data) => {
        const { jsUrl, wasmUrl, supportedTextures } = data;
        await init(jsUrl, wasmUrl, supportedTextures);
      },
      load: async (data) => {
        try {
          const textureOptions = await load(data.url);
          return {
            type: "load",
            url: data.url,
            success: true,
            textureOptions,
            transferables: textureOptions.resource?.map((arr) => arr.buffer)
          };
        } catch (e) {
          throw e;
        }
      }
    };
    self.onmessage = async (messageEvent) => {
      const message = messageEvent.data;
      const response = await messageHandlers[message.type]?.(message);
      if (response) {
        self.postMessage(response, response.transferables);
      }
    };

})();
`,et=null,Ei=(()=>{class e{constructor(){et||(et=URL.createObjectURL(new Blob([Ha],{type:"application/javascript"}))),this.worker=new Worker(et)}}return e.revokeObjectURL=function(){et&&(URL.revokeObjectURL(et),et=null)},e})();var wt={jsUrl:"https://files.pixijs.download/transcoders/ktx/libktx.js",wasmUrl:"https://files.pixijs.download/transcoders/ktx/libktx.wasm"};function Va(e){Object.assign(wt,e)}var Pt,Si={};function qa(e){return Pt||(Pt=new Ei().worker,Pt.onmessage=t=>{let{success:r,url:o,textureOptions:n}=t.data;r||console.warn("Failed to load KTX texture",o),Si[o](n)},Pt.postMessage({type:"init",jsUrl:wt.jsUrl,wasmUrl:wt.wasmUrl,supportedTextures:e})),Pt}function un(e,t){let r=qa(t);return new Promise(o=>{Si[e]=o,r.postMessage({type:"load",url:e})})}var za={extension:{type:m.LoadParser,priority:G.High,name:"loadKTX2"},name:"loadKTX2",test(e){return U(e,".ktx2")},load(e,t,r){return d(this,null,function*(){let o=yield ye(),n=yield un(e,o),i=new pe(n);return Y(i,r,e)})},unload(e){return d(this,null,function*(){Array.isArray(e)?e.forEach(t=>t.destroy(!0)):e.destroy(!0)})}};var ln={rgb8unorm:{convertedFormat:"rgba8unorm",convertFunction:Ci},"rgb8unorm-srgb":{convertedFormat:"rgba8unorm-srgb",convertFunction:Ci}};function Wa(e){let t=e.format;if(ln[t]){let r=ln[t].convertFunction,o=e.resource;for(let n=0;n<o.length;n++)o[n]=r(o[n]);e.format=ln[t].convertedFormat}}function Ci(e){let t=e.byteLength/3,r=new Uint32Array(t);for(let o=0;o<t;++o)r[o]=e[o*3]+(e[o*3+1]<<8)+(e[o*3+2]<<16)+4278190080;return new Uint8Array(r.buffer)}function Ya(e){let t=[];for(let r=0;r<e.numLevels;r++){let o=e.getImageData(r,0,0),n=new Uint8Array(o.byteLength);n.set(o),t.push(n)}return t}var ja={6408:"rgba8unorm",32856:"bgra8unorm",32857:"rgb10a2unorm",33189:"depth16unorm",33190:"depth24plus",33321:"r8unorm",33323:"rg8unorm",33325:"r16float",33326:"r32float",33327:"rg16float",33328:"rg32float",33329:"r8sint",33330:"r8uint",33331:"r16sint",33332:"r16uint",33333:"r32sint",33334:"r32uint",33335:"rg8sint",33336:"rg8uint",33337:"rg16sint",33338:"rg16uint",33339:"rg32sint",33340:"rg32uint",33778:"bc2-rgba-unorm",33779:"bc3-rgba-unorm",34836:"rgba32float",34842:"rgba16float",35056:"depth24plus-stencil8",35898:"rg11b10ufloat",35901:"rgb9e5ufloat",35907:"rgba8unorm-srgb",36012:"depth32float",36013:"depth32float-stencil8",36168:"stencil8",36208:"rgba32uint",36214:"rgba16uint",36220:"rgba8uint",36226:"rgba32sint",36232:"rgba16sint",36238:"rgba8sint",36492:"bc7-rgba-unorm",36756:"r8snorm",36757:"rg8snorm",36759:"rgba8snorm",37496:"etc2-rgba8unorm",37808:"astc-4x4-unorm"};function cn(e){let t=ja[e];if(t)return t;throw new Error(`Unsupported glInternalFormat: ${e}`)}var Ka={23:"rgb8unorm",37:"rgba8unorm",43:"rgba8unorm-srgb"};function pn(e){let t=Ka[e];if(t)return t;throw new Error(`Unsupported VkFormat: ${e}`)}function $a(e){return e.classId===2?pn(e.vkFormat):cn(e.glInternalformat)}var Qa={"bc3-rgba-unorm":"BC3_RGBA","bc7-rgba-unorm":"BC7_M5_RGBA","etc2-rgba8unorm":"ETC2_RGBA","astc-4x4-unorm":"ASTC_4x4_RGBA",rgba8unorm:"RGBA32",rg11b10ufloat:"R11F_G11F_B10F"};function Za(e){let t=Qa[e];if(t)return t;throw new Error(`Unsupported transcoderFormat: ${e}`)}var Ft=["basis","bc7","bc6h","astc","etc2","bc5","bc4","bc3","bc2","bc1","eac"],Ja={extension:m.ResolveParser,test:e=>U(e,[".ktx",".ktx2",".dds"]),parse:e=>{let t,r=e.split(".");if(r.length>2){let o=r[r.length-2];Ft.includes(o)&&(t=o)}else t=r[r.length-1];return{resolution:parseFloat(le.RETINA_PREFIX.exec(e)?.[1]??"1"),format:t,src:e}}};var Ir,eu={extension:{type:m.DetectionParser,priority:2},test:()=>d(void 0,null,function*(){return!!((yield Ae())||ve())}),add:e=>d(void 0,null,function*(){let t=yield Tt();return Ir=tu(t),[...Ir,...e]}),remove:e=>d(void 0,null,function*(){return Ir?e.filter(t=>!(t in Ir)):e})};function tu(e){let t=["basis"],r={};return e.forEach(o=>{let n=o.split("-")[0];n&&!r[n]&&(r[n]=!0,t.push(n))}),t.sort((o,n)=>{let i=Ft.indexOf(o),s=Ft.indexOf(n);return i===-1?1:s===-1?-1:i-s}),t}var ru=new pt,fn=class{cull(t,r,o=!0){this._cullRecursive(t,r,o)}_cullRecursive(t,r,o=!0){if(t.cullable&&t.measurable&&t.includeInBuild){let n=t.cullArea??co(t,o,ru);t.culled=n.x>=r.x+r.width||n.y>=r.y+r.height||n.x+n.width<=r.x||n.y+n.height<=r.y}else t.culled=!1;if(!(!t.cullableChildren||t.culled||!t.renderable||!t.measurable||!t.includeInBuild))for(let n=0;n<t.children.length;n++)this._cullRecursive(t.children[n],r,o)}};fn.shared=new fn;var mn=fn;var Nr=class{static init(){this._renderRef=this.render.bind(this),this.render=()=>{mn.shared.cull(this.stage,this.renderer.screen),this.renderer.render({container:this.stage})}}static destroy(){this.render=this._renderRef}};Nr.extension={priority:10,type:m.Application,name:"culler"};var vs=oi(_s(),1),Pu={createCanvas:(e,t)=>new OffscreenCanvas(e??0,t??0),getCanvasRenderingContext2D:()=>OffscreenCanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>globalThis.location.href,getFontFaceSet:()=>globalThis.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new vs.DOMParser().parseFromString(e,"text/xml")};var Xe=`in vec2 aPosition;
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
`;var Rn=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`;var Kr=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

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
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;var Fu=(()=>{let e=class As extends W{constructor(r){r=h(h({},As.defaultOptions),r);let o=oe.from({vertex:{source:Kr,entryPoint:"mainVertex"},fragment:{source:Kr,entryPoint:"mainFragment"}}),n=re.from({vertex:Xe,fragment:Rn,name:"alpha-filter"}),u=r,{alpha:i}=u,s=D(u,["alpha"]),a=new ce({uAlpha:{value:i,type:"f32"}});super(C(h({},s),{gpuProgram:o,glProgram:n,resources:{alphaUniforms:a}}))}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(r){this.resources.alphaUniforms.uniforms.uAlpha=r}};return e.defaultOptions={alpha:1},e})(),Uu=Fu;var zt={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]};var Ou=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function wn(e){let t=zt[e],r=t.length,o=Ou,n="",i="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;",s;for(let a=0;a<e;a++){let u=i.replace("%index%",a.toString());s=a,a>=r&&(s=e-a-1),u=u.replace("%value%",t[s].toString()),n+=u,n+=`
`}return o=o.replace("%blur%",n),o=o.replace("%size%",e.toString()),o}var Mu=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

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

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Pn(e,t){let r=Math.ceil(e/2),o=Mu,n="",i;t?i="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":i="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let s=0;s<e;s++){let a=i.replace("%index%",s.toString());a=a.replace("%sampleIndex%",`${s-(r-1)}.0`),n+=a,n+=`
`}return o=o.replace("%blur%",n),o=o.replace("%size%",e.toString()),o=o.replace("%dimension%",t?"z":"w"),o}function Fn(e,t){let r=Pn(t,e),o=wn(t);return re.from({vertex:r,fragment:o,name:`blur-${e?"horizontal":"vertical"}-pass-filter`})}var Un=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
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

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function On(e,t){let r=zt[t],o=r.length,n=[],i=[],s=[];for(let p=0;p<t;p++){n[p]=`@location(${p}) offset${p}: vec2<f32>,`,e?i[p]=`filteredCord + vec2(${p-o+1} * pixelStrength, 0.0),`:i[p]=`filteredCord + vec2(0.0, ${p-o+1} * pixelStrength),`;let f=p<o?p:t-p-1,g=r[f].toString();s[p]=`finalColor += textureSample(uTexture, uSampler, offset${p}) * ${g};`}let a=n.join(`
`),u=i.join(`
`),l=s.join(`
`),c=Un.replace("%blur-struct%",a).replace("%blur-vertex-out%",u).replace("%blur-fragment-in%",a).replace("%blur-sampling%",l).replace("%dimension%",e?"z":"w");return oe.from({vertex:{source:c,entryPoint:"mainVertex"},fragment:{source:c,entryPoint:"mainFragment"}})}var Gu=(()=>{let e=class ys extends W{constructor(r){r=h(h({},ys.defaultOptions),r);let o=Fn(r.horizontal,r.kernelSize),n=On(r.horizontal,r.kernelSize);super(h({glProgram:o,gpuProgram:n,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}}},r)),this.horizontal=r.horizontal,this._quality=0,this.quality=r.quality,this.blur=r.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(r,o,n,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)r.applyFilter(this,o,n,i);else{let s=Oe.getSameSizeTexture(o),a=o,u=s;this._state.blend=!1;let l=r.renderer.type===ht.WEBGPU;for(let c=0;c<this.passes-1;c++){r.applyFilter(this,a,u,c===0?!0:l);let p=u;u=a,a=p}this._state.blend=!0,r.applyFilter(this,a,n,i),Oe.returnTexture(s)}}get blur(){return this.strength}set blur(r){this.padding=1+Math.abs(r)*2,this.strength=r}get quality(){return this._quality}set quality(r){this._quality=r,this.passes=r}};return e.defaultOptions={strength:8,quality:4,kernelSize:5},e})(),Wt=Gu;var Iu=(()=>{class e extends W{constructor(...r){let o=r[0]??{};typeof o=="number"&&(E(P,"BlurFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }"),o={strength:o},r[1]!==void 0&&(o.quality=r[1]),r[2]!==void 0&&(o.resolution=r[2]||"inherit"),r[3]!==void 0&&(o.kernelSize=r[3])),o=h(h({},Wt.defaultOptions),o);let l=o,{strength:n,strengthX:i,strengthY:s,quality:a}=l,u=D(l,["strength","strengthX","strengthY","quality"]);super(C(h({},u),{compatibleRenderers:ht.BOTH,resources:{}})),this._repeatEdgePixels=!1,this.blurXFilter=new Wt(h({horizontal:!0},o)),this.blurYFilter=new Wt(h({horizontal:!1},o)),this.quality=a,this.strengthX=i??n,this.strengthY=s??n,this.repeatEdgePixels=!1}apply(r,o,n,i){let s=Math.abs(this.blurXFilter.strength),a=Math.abs(this.blurYFilter.strength);if(s&&a){let u=Oe.getSameSizeTexture(o);this.blurXFilter.blendMode="normal",this.blurXFilter.apply(r,o,u,!0),this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(r,u,n,i),Oe.returnTexture(u)}else a?(this.blurYFilter.blendMode=this.blendMode,this.blurYFilter.apply(r,o,n,i)):(this.blurXFilter.blendMode=this.blendMode,this.blurXFilter.apply(r,o,n,i))}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}get strength(){if(this.strengthX!==this.strengthY)throw new Error("BlurFilter's strengthX and strengthY are different");return this.strengthX}set strength(r){this.blurXFilter.blur=this.blurYFilter.blur=r,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(r){this.blurXFilter.quality=this.blurYFilter.quality=r}get strengthX(){return this.blurXFilter.blur}set strengthX(r){this.blurXFilter.blur=r,this.updatePadding()}get strengthY(){return this.blurYFilter.blur}set strengthY(r){this.blurYFilter.blur=r,this.updatePadding()}get blur(){return E("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength}set blur(r){E("8.3.0","BlurFilter.blur is deprecated, please use BlurFilter.strength instead."),this.strength=r}get blurX(){return E("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX}set blurX(r){E("8.3.0","BlurFilter.blurX is deprecated, please use BlurFilter.strengthX instead."),this.strengthX=r}get blurY(){return E("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY}set blurY(r){E("8.3.0","BlurFilter.blurY is deprecated, please use BlurFilter.strengthY instead."),this.strengthY=r}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(r){this._repeatEdgePixels=r,this.updatePadding()}}return e.defaultOptions={strength:8,quality:4,kernelSize:5},e})();var Mn=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uColorMatrix[20];
uniform float uAlpha;

uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * 0.2);
    float diff = (randomValue - 0.5) *  0.5;

    if (uAlpha == 0.0) {
        finalColor = color;
        return;
    }

    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    vec4 result;

    result.r = (uColorMatrix[0] * color.r);
        result.r += (uColorMatrix[1] * color.g);
        result.r += (uColorMatrix[2] * color.b);
        result.r += (uColorMatrix[3] * color.a);
        result.r += uColorMatrix[4];

    result.g = (uColorMatrix[5] * color.r);
        result.g += (uColorMatrix[6] * color.g);
        result.g += (uColorMatrix[7] * color.b);
        result.g += (uColorMatrix[8] * color.a);
        result.g += uColorMatrix[9];

    result.b = (uColorMatrix[10] * color.r);
       result.b += (uColorMatrix[11] * color.g);
       result.b += (uColorMatrix[12] * color.b);
       result.b += (uColorMatrix[13] * color.a);
       result.b += uColorMatrix[14];

    result.a = (uColorMatrix[15] * color.r);
       result.a += (uColorMatrix[16] * color.g);
       result.a += (uColorMatrix[17] * color.b);
       result.a += (uColorMatrix[18] * color.a);
       result.a += uColorMatrix[19];

    vec3 rgb = mix(color.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    finalColor = vec4(rgb, result.a);
}
`;var $r=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct ColorMatrixUniforms {
  uColorMatrix:array<vec4<f32>, 5>,
  uAlpha:f32,
};


@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;
@group(1) @binding(0) var<uniform> colorMatrixUniforms : ColorMatrixUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
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

@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
  );
}


@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
) -> @location(0) vec4<f32> {


  var c = textureSample(uTexture, uSampler, uv);
  
  if (colorMatrixUniforms.uAlpha == 0.0) {
    return c;
  }

 
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.r /= c.a;
      c.g /= c.a;
      c.b /= c.a;
    }

    var cm = colorMatrixUniforms.uColorMatrix;


    var result = vec4<f32>(0.);

    result.r = (cm[0][0] * c.r);
    result.r += (cm[0][1] * c.g);
    result.r += (cm[0][2] * c.b);
    result.r += (cm[0][3] * c.a);
    result.r += cm[1][0];

    result.g = (cm[1][1] * c.r);
    result.g += (cm[1][2] * c.g);
    result.g += (cm[1][3] * c.b);
    result.g += (cm[2][0] * c.a);
    result.g += cm[2][1];

    result.b = (cm[2][2] * c.r);
    result.b += (cm[2][3] * c.g);
    result.b += (cm[3][0] * c.b);
    result.b += (cm[3][1] * c.a);
    result.b += cm[3][2];

    result.a = (cm[3][3] * c.r);
    result.a += (cm[4][0] * c.g);
    result.a += (cm[4][1] * c.b);
    result.a += (cm[4][2] * c.a);
    result.a += cm[4][3];

    var rgb = mix(c.rgb, result.rgb, colorMatrixUniforms.uAlpha);

    rgb.r *= result.a;
    rgb.g *= result.a;
    rgb.b *= result.a;

    return vec4(rgb, result.a);
}`;var Gn=class extends W{constructor(t={}){let r=new ce({uColorMatrix:{value:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],type:"f32",size:20},uAlpha:{value:1,type:"f32"}}),o=oe.from({vertex:{source:$r,entryPoint:"mainVertex"},fragment:{source:$r,entryPoint:"mainFragment"}}),n=re.from({vertex:Xe,fragment:Mn,name:"color-matrix-filter"});super(C(h({},t),{gpuProgram:o,glProgram:n,resources:{colorMatrixUniforms:r}})),this.alpha=1}_loadMatrix(t,r=!1){let o=t;r&&(this._multiply(o,this.matrix,t),o=this._colorMatrix(o)),this.resources.colorMatrixUniforms.uniforms.uColorMatrix=o,this.resources.colorMatrixUniforms.update()}_multiply(t,r,o){return t[0]=r[0]*o[0]+r[1]*o[5]+r[2]*o[10]+r[3]*o[15],t[1]=r[0]*o[1]+r[1]*o[6]+r[2]*o[11]+r[3]*o[16],t[2]=r[0]*o[2]+r[1]*o[7]+r[2]*o[12]+r[3]*o[17],t[3]=r[0]*o[3]+r[1]*o[8]+r[2]*o[13]+r[3]*o[18],t[4]=r[0]*o[4]+r[1]*o[9]+r[2]*o[14]+r[3]*o[19]+r[4],t[5]=r[5]*o[0]+r[6]*o[5]+r[7]*o[10]+r[8]*o[15],t[6]=r[5]*o[1]+r[6]*o[6]+r[7]*o[11]+r[8]*o[16],t[7]=r[5]*o[2]+r[6]*o[7]+r[7]*o[12]+r[8]*o[17],t[8]=r[5]*o[3]+r[6]*o[8]+r[7]*o[13]+r[8]*o[18],t[9]=r[5]*o[4]+r[6]*o[9]+r[7]*o[14]+r[8]*o[19]+r[9],t[10]=r[10]*o[0]+r[11]*o[5]+r[12]*o[10]+r[13]*o[15],t[11]=r[10]*o[1]+r[11]*o[6]+r[12]*o[11]+r[13]*o[16],t[12]=r[10]*o[2]+r[11]*o[7]+r[12]*o[12]+r[13]*o[17],t[13]=r[10]*o[3]+r[11]*o[8]+r[12]*o[13]+r[13]*o[18],t[14]=r[10]*o[4]+r[11]*o[9]+r[12]*o[14]+r[13]*o[19]+r[14],t[15]=r[15]*o[0]+r[16]*o[5]+r[17]*o[10]+r[18]*o[15],t[16]=r[15]*o[1]+r[16]*o[6]+r[17]*o[11]+r[18]*o[16],t[17]=r[15]*o[2]+r[16]*o[7]+r[17]*o[12]+r[18]*o[17],t[18]=r[15]*o[3]+r[16]*o[8]+r[17]*o[13]+r[18]*o[18],t[19]=r[15]*o[4]+r[16]*o[9]+r[17]*o[14]+r[18]*o[19]+r[19],t}_colorMatrix(t){let r=new Float32Array(t);return r[4]/=255,r[9]/=255,r[14]/=255,r[19]/=255,r}brightness(t,r){let o=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(o,r)}tint(t,r){let[o,n,i]=We.shared.setValue(t).toArray(),s=[o,0,0,0,0,0,n,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(s,r)}greyscale(t,r){let o=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(o,r)}grayscale(t,r){this.greyscale(t,r)}blackAndWhite(t){let r=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(r,t)}hue(t,r){t=(t||0)/180*Math.PI;let o=Math.cos(t),n=Math.sin(t),i=Math.sqrt,s=1/3,a=i(s),u=o+(1-o)*s,l=s*(1-o)-a*n,c=s*(1-o)+a*n,p=s*(1-o)+a*n,f=o+s*(1-o),g=s*(1-o)-a*n,x=s*(1-o)-a*n,_=s*(1-o)+a*n,b=o+s*(1-o),y=[u,l,c,0,0,p,f,g,0,0,x,_,b,0,0,0,0,0,1,0];this._loadMatrix(y,r)}contrast(t,r){let o=(t||0)+1,n=-.5*(o-1),i=[o,0,0,0,n,0,o,0,0,n,0,0,o,0,n,0,0,0,1,0];this._loadMatrix(i,r)}saturate(t=0,r){let o=t*2/3+1,n=(o-1)*-.5,i=[o,n,n,0,0,n,o,n,0,0,n,n,o,0,0,0,0,0,1,0];this._loadMatrix(i,r)}desaturate(){this.saturate(-1)}negative(t){let r=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(r,t)}sepia(t){let r=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(r,t)}technicolor(t){let r=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(r,t)}polaroid(t){let r=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(r,t)}toBGR(t){let r=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(r,t)}kodachrome(t){let r=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(r,t)}browni(t){let r=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(r,t)}vintage(t){let r=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(r,t)}colorTone(t,r,o,n,i){t||(t=.2),r||(r=.15),o||(o=16770432),n||(n=3375104);let s=We.shared,[a,u,l]=s.setValue(o).toArray(),[c,p,f]=s.setValue(n).toArray(),g=[.3,.59,.11,0,0,a,u,l,t,0,c,p,f,r,0,a-c,u-p,l-f,0,0];this._loadMatrix(g,i)}night(t,r){t||(t=.1);let o=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(o,r)}predator(t,r){let o=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(o,r)}lsd(t){let r=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(r,t)}reset(){let t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.resources.colorMatrixUniforms.uniforms.uColorMatrix}set matrix(t){this.resources.colorMatrixUniforms.uniforms.uColorMatrix=t}get alpha(){return this.resources.colorMatrixUniforms.uniforms.uAlpha}set alpha(t){this.resources.colorMatrixUniforms.uniforms.uAlpha=t}};var In=`
in vec2 vTextureCoord;
in vec2 vFilterUv;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;

uniform vec4 uInputClamp;
uniform highp vec4 uInputSize;
uniform mat2 uRotation;
uniform vec2 uScale;

void main()
{
    vec4 map = texture(uMapTexture, vFilterUv);
    
    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; 

    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));
}
`;var Nn=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterUv;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

uniform mat3 uFilterMatrix;

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

vec2 getFilterCoord( void )
{
  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;
}


void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterUv = getFilterCoord();
}
`;var Qr=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct DisplacementUniforms {
  uFilterMatrix:mat3x3<f32>,
  uScale:vec2<f32>,
  uRotation:mat2x2<f32>
};



@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
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

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
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
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var map = textureSample(uMapTexture, uMapSampler, filterUv);

    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; 
   
    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
}`;var Ln=class extends W{constructor(...t){let r=t[0];r instanceof be&&(t[1]&&E(P,"DisplacementFilter now uses options object instead of params. {sprite, scale}"),r={sprite:r,scale:t[1]});let p=r,{sprite:o,scale:n}=p,i=D(p,["sprite","scale"]),s=n??20;typeof s=="number"&&(s=new lo(s,s));let a=new ce({uFilterMatrix:{value:new ct,type:"mat3x3<f32>"},uScale:{value:s,type:"vec2<f32>"},uRotation:{value:new Float32Array([0,0,0,0]),type:"mat2x2<f32>"}}),u=re.from({vertex:Nn,fragment:In,name:"displacement-filter"}),l=oe.from({vertex:{source:Qr,entryPoint:"mainVertex"},fragment:{source:Qr,entryPoint:"mainFragment"}}),c=o.texture.source;super(C(h({},i),{gpuProgram:l,glProgram:u,resources:{filterUniforms:a,uMapTexture:c,uMapSampler:c.style}})),this._sprite=r.sprite,this._sprite.renderable=!1}apply(t,r,o,n){let i=this.resources.filterUniforms.uniforms;t.calculateSpriteMatrix(i.uFilterMatrix,this._sprite);let s=this._sprite.worldTransform,a=Math.sqrt(s.a*s.a+s.b*s.b),u=Math.sqrt(s.c*s.c+s.d*s.d);a!==0&&u!==0&&(i.uRotation[0]=s.a/a,i.uRotation[1]=s.b/a,i.uRotation[2]=s.c/u,i.uRotation[3]=s.d/u),this.resources.uMapTexture=this._sprite.texture.source,t.applyFilter(this,r,o,n)}get scale(){return this.resources.filterUniforms.uniforms.uScale}};var kn=`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uTexture;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) *  uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    finalColor = color;
}
`;var Zr=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct NoiseUniforms {
  uNoise:f32,
  uSeed:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;

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
}

fn rand(co:vec2<f32>) -> f32
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}



@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);
  
    
    var sample = textureSample(uTexture, uSampler, uv);
    var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);
    var diff = (randomValue - 0.5) * noiseUniforms.uNoise;
  
    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (sample.a > 0.0) {
      sample.r /= sample.a;
      sample.g /= sample.a;
      sample.b /= sample.a;
    }

    sample.r += diff;
    sample.g += diff;
    sample.b += diff;

    // Premultiply alpha again.
    sample.r *= sample.a;
    sample.g *= sample.a;
    sample.b *= sample.a;
    
    return sample;
}`;var Nu=(()=>{let e=class Es extends W{constructor(r={}){r=h(h({},Es.defaultOptions),r);let o=oe.from({vertex:{source:Zr,entryPoint:"mainVertex"},fragment:{source:Zr,entryPoint:"mainFragment"}}),n=re.from({vertex:Xe,fragment:kn,name:"noise-filter"}),u=r,{noise:i,seed:s}=u,a=D(u,["noise","seed"]);super(C(h({},a),{gpuProgram:o,glProgram:n,resources:{noiseUniforms:new ce({uNoise:{value:1,type:"f32"},uSeed:{value:1,type:"f32"}})}})),this.noise=i,this.seed=s??Math.random()}get noise(){return this.resources.noiseUniforms.uniforms.uNoise}set noise(r){this.resources.noiseUniforms.uniforms.uNoise=r}get seed(){return this.resources.noiseUniforms.uniforms.uSeed}set seed(r){this.resources.noiseUniforms.uniforms.uSeed=r}};return e.defaultOptions={noise:.5},e})(),Lu=Nu;var ku=`fn getLuminosity(c: vec3<f32>) -> f32 {
  return 0.3 * c.r + 0.59 * c.g + 0.11 * c.b;
}

fn setLuminosity(c: vec3<f32>, lum: f32) -> vec3<f32> {
  let d: f32 = lum - getLuminosity(c);
  let newColor: vec3<f32> = c.rgb + vec3<f32>(d, d, d);

  // clip back into legal range
  let newLum: f32 = getLuminosity(newColor);
  let cMin: f32 = min(newColor.r, min(newColor.g, newColor.b));
  let cMax: f32 = max(newColor.r, max(newColor.g, newColor.b));

  let t1: f32 = newLum / (newLum - cMin);
  let t2: f32 = (1.0 - newLum) / (cMax - newLum);

  let finalColor = mix(vec3<f32>(newLum, newLum, newLum), newColor, select(select(1.0, t2, cMax > 1.0), t1, cMin < 0.0));

  return finalColor;
}

fn getSaturation(c: vec3<f32>) -> f32 {
  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
}

// Set saturation if color components are sorted in ascending order.
fn setSaturationMinMidMax(cSorted: vec3<f32>, s: f32) -> vec3<f32> {
  var result: vec3<f32>;
  if (cSorted.z > cSorted.x) {
    let newY = (((cSorted.y - cSorted.x) * s) / (cSorted.z - cSorted.x));
    result = vec3<f32>(0.0, newY, s);
  } else {
    result = vec3<f32>(0.0, 0.0, 0.0);
  }
  return vec3<f32>(result.x, result.y, result.z);
}

fn setSaturation(c: vec3<f32>, s: f32) -> vec3<f32> {
    var result: vec3<f32> = c;

    if (c.r <= c.g && c.r <= c.b) {
        if (c.g <= c.b) {
            result = setSaturationMinMidMax(result, s);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.r, result.b, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.r, temp.b, temp.g);
        }
    } else if (c.g <= c.r && c.g <= c.b) {
        if (c.r <= c.b) {
            var temp: vec3<f32> = vec3<f32>(result.g, result.r, result.b);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.r, temp.b);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.g, result.b, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.g, temp.b, temp.r);
        }
    } else {
        if (c.r <= c.g) {
            var temp: vec3<f32> = vec3<f32>(result.b, result.r, result.g);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.r, temp.g);
        } else {
            var temp: vec3<f32> = vec3<f32>(result.b, result.g, result.r);
            temp = setSaturationMinMidMax(temp, s);
            result = vec3<f32>(temp.b, temp.g, temp.r);
        }
    }

    return result;
}`;function Jr(e,t,r,o,n,i,s,a){let u=s-r,l=a-o,c=n-r,p=i-o,f=e-r,g=t-o,x=u*u+l*l,_=u*c+l*p,b=u*f+l*g,y=c*c+p*p,F=c*f+p*g,S=1/(x*y-_*_),B=(y*b-_*F)*S,me=(x*F-_*b)*S;return B>=0&&me>=0&&B+me<1}var Xn=class e{constructor(t=0,r=0,o=0,n=0,i=0,s=0){this.type="triangle",this.x=t,this.y=r,this.x2=o,this.y2=n,this.x3=i,this.y3=s}contains(t,r){let o=(this.x-this.x3)*(r-this.y3)-(this.y-this.y3)*(t-this.x3),n=(this.x2-this.x)*(r-this.y)-(this.y2-this.y)*(t-this.x);if(o<0!=n<0&&o!==0&&n!==0)return!1;let i=(this.x3-this.x2)*(r-this.y2)-(this.y3-this.y2)*(t-this.x2);return i===0||i<0==o+n<=0}strokeContains(t,r,o,n=.5){let i=o/2,s=i*i,{x:a,x2:u,x3:l,y:c,y2:p,y3:f}=this;return xt(t,r,a,c,u,f)<=s||xt(t,r,u,p,l,f)<=s||xt(t,r,l,f,a,c)<=s}clone(){return new e(this.x,this.y,this.x2,this.y2,this.x3,this.y3)}copyFrom(t){return this.x=t.x,this.y=t.y,this.x2=t.x2,this.y2=t.y2,this.x3=t.x3,this.y3=t.y3,this}copyTo(t){return t.copyFrom(this),t}getBounds(t){t||(t=new Fe);let r=Math.min(this.x,this.x2,this.x3),o=Math.max(this.x,this.x2,this.x3),n=Math.min(this.y,this.y2,this.y3),i=Math.max(this.y,this.y2,this.y3);return t.x=r,t.y=n,t.width=o-r,t.height=i-n,t}};var Xu=(()=>{let e=class Ss{constructor(r){this._tick=()=>{this.timeout=setTimeout(this._processQueue,0)},this._processQueue=()=>{let{queue:o}=this,n=0;for(;o.length&&n<Ss.uploadsPerFrame;){let i=o.shift();this.uploadQueueItem(i),n++}o.length?xe.system.addOnce(this._tick,this,Ye.UTILITY):this._resolve()},this.renderer=r,this.queue=[],this.resolves=[]}getQueue(){return[...this.queue]}add(r){let o=Array.isArray(r)?r:[r];for(let n of o)n instanceof ge?this._addContainer(n):this.resolveQueueItem(n,this.queue);return this}_addContainer(r){this.resolveQueueItem(r,this.queue);for(let o of r.children)this._addContainer(o)}upload(r){return r&&this.add(r),new Promise(o=>{this.queue.length?(this.resolves.push(o),this.dedupeQueue(),xe.system.addOnce(this._tick,this,Ye.UTILITY)):o()})}dedupeQueue(){let r=Object.create(null),o=0;for(let n=0;n<this.queue.length;n++){let i=this.queue[n];r[i.uid]||(r[i.uid]=!0,this.queue[o++]=i)}this.queue.length=o}_resolve(){let{resolves:r}=this,o=r.slice(0);r.length=0;for(let n of o)n()}};return e.uploadsPerFrame=4,e})(),Hn=Xu;var ie=class extends ee{constructor(...t){let r=t[0];r instanceof bo&&(E(P,"Mesh: use new Mesh({ geometry, shader }) instead"),r={geometry:r,shader:t[1]},t[3]&&(E(P,"Mesh: drawMode argument has been removed, use geometry.topology instead"),r.geometry.topology=t[3]));let l=r,{geometry:o,shader:n,texture:i,roundPixels:s,state:a}=l,u=D(l,["geometry","shader","texture","roundPixels","state"]);super(h({label:"Mesh"},u)),this.renderPipeId="mesh",this._shader=null,this.allowChildren=!1,this.shader=n??null,this.texture=i??n?.texture??T.WHITE,this.state=a??Co.for2d(),this._geometry=o,this._geometry.on("update",this.onViewUpdate,this),this.roundPixels=s??!1}get material(){return E(P,"mesh.material property has been removed, use mesh.shader instead"),this._shader}set shader(t){this._shader!==t&&(this._shader=t,this.onViewUpdate())}get shader(){return this._shader}set geometry(t){this._geometry!==t&&(this._geometry?.off("update",this.onViewUpdate,this),t.on("update",this.onViewUpdate,this),this._geometry=t,this.onViewUpdate())}get geometry(){return this._geometry}set texture(t){t||(t=T.EMPTY);let r=this._texture;r!==t&&(r&&r.dynamic&&r.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this.shader&&(this.shader.texture=t),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof _e?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}get bounds(){return this._geometry.bounds}updateBounds(){this._bounds=this._geometry.bounds}containsPoint(t){let{x:r,y:o}=t;if(!this.bounds.containsPoint(r,o))return!1;let n=this.geometry.getBuffer("aPosition").data,i=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){let s=this.geometry.getIndex().data,a=s.length;for(let u=0;u+2<a;u+=i){let l=s[u]*2,c=s[u+1]*2,p=s[u+2]*2;if(Jr(r,o,n[l],n[l+1],n[c],n[c+1],n[p],n[p+1]))return!0}}else{let s=n.length/2;for(let a=0;a+2<s;a+=i){let u=a*2,l=(a+1)*2,c=(a+2)*2;if(Jr(r,o,n[u],n[u+1],n[l],n[l+1],n[c],n[c+1]))return!0}}return!1}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){let o=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(o)}this._geometry?.off("update",this.onViewUpdate,this),this._texture=null,this._geometry=null,this._shader=null}};var Yt=class e extends be{constructor(...t){let r=t[0];Array.isArray(t[0])&&(r={textures:t[0],autoUpdate:t[1]});let x=r,{animationSpeed:o=1,autoPlay:n=!1,autoUpdate:i=!0,loop:s=!0,onComplete:a=null,onFrameChange:u=null,onLoop:l=null,textures:c,updateAnchor:p=!1}=x,f=D(x,["animationSpeed","autoPlay","autoUpdate","loop","onComplete","onFrameChange","onLoop","textures","updateAnchor"]),[g]=c;super(C(h({},f),{texture:g instanceof T?g:g.texture})),this._textures=null,this._durations=null,this._autoUpdate=i,this._isConnectedToTicker=!1,this.animationSpeed=o,this.loop=s,this.updateAnchor=p,this.onComplete=a,this.onFrameChange=u,this.onLoop=l,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=c,n&&this.play()}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(xe.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(xe.shared.add(this.update,this,Ye.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(t){this.stop(),this.currentFrame=t}gotoAndPlay(t){this.currentFrame=t,this.play()}update(t){if(!this._playing)return;let r=t.deltaTime,o=this.animationSpeed*r,n=this.currentFrame;if(this._durations!==null){let i=this._currentTime%1*this._durations[this.currentFrame];for(i+=o/60*1e3;i<0;)this._currentTime--,i+=this._durations[this.currentFrame];let s=Math.sign(this.animationSpeed*r);for(this._currentTime=Math.floor(this._currentTime);i>=this._durations[this.currentFrame];)i-=this._durations[this.currentFrame]*s,this._currentTime+=s;this._currentTime+=i/this._durations[this.currentFrame]}else this._currentTime+=o;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):n!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<n||this.animationSpeed<0&&this.currentFrame>n)&&this.onLoop(),this._updateTexture())}_updateTexture(){let t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this.texture=this._textures[t],this.updateAnchor&&this.texture.defaultAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(t){let r=[];for(let o=0;o<t.length;++o)r.push(T.from(t[o]));return new e(r)}static fromImages(t){let r=[];for(let o=0;o<t.length;++o)r.push(T.from(t[o]));return new e(r)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(t){if(t[0]instanceof T)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(let r=0;r<t.length;r++)this._textures.push(t[r].texture),this._durations.push(t[r].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}set currentFrame(t){if(t<0||t>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);let r=this.currentFrame;this._currentTime=t,r!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(xe.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(xe.shared.add(this.update,this),this._isConnectedToTicker=!0))}};var jt=class{constructor({matrix:t,observer:r}={}){this.dirty=!0,this._matrix=t??new ct,this.observer=r,this.position=new ae(this,0,0),this.scale=new ae(this,1,1),this.pivot=new ae(this,0,0),this.skew=new ae(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){let t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){this.dirty=!0,t===this.skew&&this.updateSkew(),this.observer?._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}};var Cs=class eo extends ee{constructor(...t){let r=t[0]||{};r instanceof T&&(r={texture:r}),t.length>1&&(E(P,"use new TilingSprite({ texture, width:100, height:100 }) instead"),r.width=t[1],r.height=t[2]),r=h(h({},eo.defaultOptions),r);let g=r??{},{texture:o,anchor:n,tilePosition:i,tileScale:s,tileRotation:a,width:u,height:l,applyAnchorToTexture:c,roundPixels:p}=g,f=D(g,["texture","anchor","tilePosition","tileScale","tileRotation","width","height","applyAnchorToTexture","roundPixels"]);super(h({label:"TilingSprite"},f)),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new ae({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=c,this.texture=o,this._width=u??o.width,this._height=l??o.height,this._tileTransform=new jt({observer:{_onUpdate:()=>this.onViewUpdate()}}),n&&(this.anchor=n),this.tilePosition=i,this.tileScale=s,this.tileRotation=a,this.roundPixels=p??!1}static from(t,r={}){return typeof t=="string"?new eo(h({texture:z.get(t)},r)):new eo(h({texture:t},r))}get uvRespectAnchor(){return N("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){N("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=T.EMPTY);let r=this._texture;r!==t&&(r&&r.dynamic&&r.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,r){typeof t=="object"&&(r=t.height??t.width,t=t.width),this._width=t,this._height=r??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){let t=this._bounds,r=this._anchor,o=this._width,n=this._height;t.minX=-r._x*o,t.maxX=t.minX+o,t.minY=-r._y*n,t.maxY=t.minY+n}containsPoint(t){let r=this._width,o=this._height,n=-r*this._anchor._x,i=0;return t.x>=n&&t.x<=n+r&&(i=-o*this._anchor._y,t.y>=i&&t.y<=i+o)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t?.texture){let o=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(o)}this._texture=null}};Cs.defaultOptions={texture:T.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};var Vn=Cs;var De=class extends ee{constructor(t,r){let p=t,{text:o,resolution:n,style:i,anchor:s,width:a,height:u,roundPixels:l}=p,c=D(p,["text","resolution","style","anchor","width","height","roundPixels"]);super(h({},c)),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=r,this.text=o??"",this.style=i,this.resolution=n??null,this.allowChildren=!1,this._anchor=new ae({_onUpdate:()=>{this.onViewUpdate()}}),s&&(this.anchor=s),this.roundPixels=l??!1,a!==void 0&&(this.width=a),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}set resolution(t){this._autoResolution=t===null,this._resolution=t,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(t){t||(t={}),this._style?.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,r){typeof t=="object"?(r=t.height??t.width,t=t.width):r??(r=t),t!==void 0&&this._setWidth(t,this.bounds.width),r!==void 0&&this._setHeight(r,this.bounds.height)}containsPoint(t){let r=this.bounds.width,o=this.bounds.height,n=-r*this.anchor.x,i=0;return t.x>=n&&t.x<=n+r&&(i=-o*this.anchor.y,t.y>=i&&t.y<=i+o)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t?.style)&&this._style.destroy(t),this._style=null,this._text=null}};function He(e,t){let r=e[0]??{};return(typeof r=="string"||e[1])&&(E(P,`use new ${t}({ text: "hi!", style }) instead`),r={text:r,style:e[1]}),r}var Ve=class extends De{constructor(...t){let r=He(t,"Text");super(r,Be),this.renderPipeId="text"}updateBounds(){let t=this._bounds,r=this._anchor,o=To.measureText(this._text,this._style),{width:n,height:i}=o;t.minX=-r._x*n,t.maxX=t.minX+n,t.minY=-r._y*i,t.maxY=t.minY+i}};var Kt=class extends Hn{resolveQueueItem(t,r){return t instanceof ge?this.resolveContainerQueueItem(t,r):t instanceof Ue||t instanceof T?r.push(t.source):t instanceof Me&&r.push(t),null}resolveContainerQueueItem(t,r){t instanceof be||t instanceof Vn||t instanceof ie?r.push(t.texture.source):t instanceof Ve?r.push(t):t instanceof Bo?r.push(t.context):t instanceof Yt&&t.textures.forEach(o=>{o.source?r.push(o.source):r.push(o.texture.source)})}resolveGraphicsContextQueueItem(t){this.renderer.graphicsContext.getGpuContext(t);let{instructions:r}=t;for(let o of r)if(o.action==="texture"){let{image:n}=o.data;return n.source}else if(o.action==="fill"){let{texture:n}=o.data.style;return n.source}return null}};var $t=class extends De{constructor(...t){var r;let o=He(t,"BitmapText");o.style??(o.style=o.style||{}),(r=o.style).fill??(r.fill=16777215),super(o,Be),this.renderPipeId="bitmapText"}updateBounds(){let t=this._bounds,r=this._anchor,o=je.measureText(this.text,this._style),n=o.scale,i=o.offsetY*n,s=o.width*n,a=o.height*n,u=this._style._stroke;u&&(s+=u.width,a+=u.width),t.minX=-r._x*s,t.maxX=t.minX+s,t.minY=-r._y*(a+i),t.maxY=t.minY+a}set resolution(t){t!==null&&N("[BitmapText] dynamically updating the resolution is not supported. Resolution should be managed by the BitmapFont.")}get resolution(){return this._resolution}};var Qt=class extends De{constructor(...t){let r=He(t,"HtmlText");super(r,Ke),this.renderPipeId="htmlText"}updateBounds(){let t=this._bounds,r=this._anchor,o=wo(this.text,this._style),{width:n,height:i}=o;t.minX=-r._x*n,t.maxX=t.minX+n,t.minY=-r._y*i,t.maxY=t.minY+i}};var Zt=class extends Kt{uploadQueueItem(t){t instanceof Ue?this.uploadTextureSource(t):t instanceof Ve?this.uploadText(t):t instanceof Qt?this.uploadHTMLText(t):t instanceof $t?this.uploadBitmapText(t):t instanceof Me&&this.uploadGraphicsContext(t)}uploadTextureSource(t){this.renderer.texture.initSource(t)}uploadText(t){this.renderer.renderPipes.text.initGpuText(t)}uploadBitmapText(t){this.renderer.renderPipes.bitmapText.initGpuText(t)}uploadHTMLText(t){this.renderer.renderPipes.htmlText.initGpuText(t)}uploadGraphicsContext(t){this.renderer.graphicsContext.getGpuContext(t);let{instructions:r}=t;for(let o of r)if(o.action==="texture"){let{image:n}=o.data;this.uploadTextureSource(n.source)}else if(o.action==="fill"){let{texture:n}=o.data.style;this.uploadTextureSource(n.source)}return null}};var to=class extends Zt{destroy(){clearTimeout(this.timeout),this.renderer=null,this.queue=null,this.resolves=null}};to.extension={type:[m.WebGLSystem,m.WebGPUSystem],name:"prepare"};function Hu(e){let t=[],r=0;for(let o=0;o<e;o++)t[r]={texture:{sampleType:"float",viewDimension:"2d",multisampled:!1},binding:r,visibility:GPUShaderStage.FRAGMENT},r++,t[r]={sampler:{type:"filtering"},binding:r,visibility:GPUShaderStage.FRAGMENT},r++;return t}function Vu(e){let t={},r=0;for(let o=0;o<e;o++)t[`textureSource${o+1}`]=r++,t[`textureSampler${o+1}`]=r++;return t}function qu(e){let t=e.split(/([\n{}])/g).map(n=>n.trim()).filter(n=>n.length),r="";return t.map(n=>{let i=r+n;return n==="{"?r+="    ":n==="}"&&(r=r.substr(0,r.length-4),i=r+n),i}).join(`
`)}var qn=class{constructor(t){this.priority=0,this.pipe="scissorMask",this.mask=t,this.mask.renderable=!1,this.mask.measurable=!1}addBounds(t,r){mo(this.mask,t,r)}addLocalBounds(t,r){ho(this.mask,t,r)}containsPoint(t,r){let o=this.mask;return r(o,t)}reset(){this.mask.measurable=!0,this.mask=null}destroy(){this.reset()}};function zu(e){return e=e.replaceAll("texture2D","texture").replaceAll("gl_FragColor","finalColor").replaceAll("varying","in"),e=`
        out vec4 finalColor;
    ${e}
    `,e}var Wu={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Yu(e){return Wu[e]}function ju(e,t){let r=e.descriptor.size,o=t.gpu.device,n=new xo({data:new Float32Array(24e5),usage:rr.MAP_READ|rr.COPY_DST}),i=t.buffer.createGPUBuffer(n),s=o.createCommandEncoder();s.copyBufferToBuffer(t.buffer.getGPUBuffer(e),0,i,0,r),o.queue.submit([s.finish()]),i.mapAsync(GPUMapMode.READ,0,r).then(()=>{i.getMappedRange(0,r),i.unmap()})}var Ds={POINTS:"point-list",LINES:"line-list",LINE_STRIP:"line-strip",TRIANGLES:"triangle-list",TRIANGLE_STRIP:"triangle-strip"},Ku=new Proxy(Ds,{get(e,t){return E(P,`DRAW_MODES.${t} is deprecated, use '${Ds[t]}' instead`),e[t]}});var $u=new Fe(0,0,1,1);function Qu(e,t,r){r||(r=$u);let o=t.pixelWidth,n=t.pixelHeight;return e.x=r.x*o|0,e.y=r.y*n|0,e.width=r.width*o|0,e.height=r.height*n|0,e}var Ts=(e=>(e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH",e))(Ts||{}),ro=(e=>(e.CLAMP="clamp-to-edge",e.REPEAT="repeat",e.MIRRORED_REPEAT="mirror-repeat",e))(ro||{}),Zu=new Proxy(ro,{get(e,t){return E(P,`DRAW_MODES.${t} is deprecated, use '${ro[t]}' instead`),e[t]}}),oo=(e=>(e.NEAREST="nearest",e.LINEAR="linear",e))(oo||{}),Ju=new Proxy(oo,{get(e,t){return E(P,`DRAW_MODES.${t} is deprecated, use '${oo[t]}' instead`),e[t]}});var zn=class{constructor(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}set(t,r,o){let n=r.width,i=r.height;if(o){let s=t.width/2/n,a=t.height/2/i,u=t.x/n+s,l=t.y/i+a;o=q.add(o,q.NW),this.x0=u+s*q.uX(o),this.y0=l+a*q.uY(o),o=q.add(o,2),this.x1=u+s*q.uX(o),this.y1=l+a*q.uY(o),o=q.add(o,2),this.x2=u+s*q.uX(o),this.y2=l+a*q.uY(o),o=q.add(o,2),this.x3=u+s*q.uX(o),this.y3=l+a*q.uY(o)}else this.x0=t.x/n,this.y0=t.y/i,this.x1=(t.x+t.width)/n,this.y1=t.y/i,this.x2=(t.x+t.width)/n,this.y2=(t.y+t.height)/i,this.x3=t.x/n,this.y3=(t.y+t.height)/i;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3}toString(){return`[pixi.js/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`}};var el=0;function tl(){return el++}function rl(e){let t=e.toString(),r=t.indexOf("{"),o=t.lastIndexOf("}");if(r===-1||o===-1)throw new Error("getFunctionBody: No body found in function definition");return t.slice(r+1,o).trim()}function ol(e,t){return E("8.7.0","Use container.getFastGlobalBounds() instead"),e.getFastGlobalBounds(!0,t)}var Wn=class extends ee{constructor(t){typeof t=="function"&&(t={render:t});let n=t,{render:r}=n,o=D(n,["render"]);super(h({label:"RenderContainer"},o)),this.renderPipeId="customRender",this.batched=!1,r&&(this.render=r),this.containsPoint=t.containsPoint??(()=>!1),this.addBounds=t.addBounds??(()=>!1)}updateBounds(){this._bounds.clear(),this.addBounds(this._bounds)}render(t){}};function nl(e,t,r){E("8.7.0","Please use container.collectRenderables instead.");let o=r.renderPipes?r:r.batch.renderer;return e.collectRenderables(t,o,null)}function il(e,t,r){let o=e>>16&255,n=e>>8&255,i=e&255,s=t>>16&255,a=t>>8&255,u=t&255,l=o+(s-o)*r,c=n+(a-n)*r,p=i+(u-i)*r;return(l<<16)+(c<<8)+p}function sl(e,t){let r=t._scale,o=t._pivot,n=t._position,i=r._x,s=r._y,a=o._x,u=o._y;e.a=t._cx*i,e.b=t._sx*i,e.c=t._cy*s,e.d=t._sy*s,e.tx=n._x-(a*e.a+u*e.c),e.ty=n._y-(a*e.b+u*e.d)}function al(e,t,r){let o=e.a,n=e.b,i=e.c,s=e.d,a=e.tx,u=e.ty,l=t.a,c=t.b,p=t.c,f=t.d;r.a=o*l+n*p,r.b=o*c+n*f,r.c=i*l+s*p,r.d=i*c+s*f,r.tx=a*l+u*p+t.tx,r.ty=a*c+u*f+t.ty}var ul={rectangle:Eo,polygon:yo,triangle:So,circle:gt,ellipse:gt,roundedRectangle:gt};function ll(e){e instanceof Do&&(e={path:e,textureMatrix:null,out:null});let t=[],r=[],o=[],n=e.path.shapePath,i=e.textureMatrix;n.shapePrimitives.forEach(({shape:u,transform:l})=>{let c=o.length,p=t.length/2,f=[],g=ul[u.type];g.build(u,f),l&&Ao(f,l),g.triangulate(f,t,2,p,o,c);let x=r.length/2;i?(l&&i.append(l.clone().invert()),_o(t,2,p,r,x,2,t.length/2-p,i)):vo(r,x,2,t.length/2-p)});let s=e.out;return s?(s.positions=new Float32Array(t),s.uvs=new Float32Array(r),s.indices=new Uint32Array(o),s):new _e({positions:new Float32Array(t),uvs:new Float32Array(r),indices:new Uint32Array(o)})}var cl=(()=>{let e=class Bs extends ge{constructor(r={}){r=h(h({},Bs.defaultOptions),r),super(),this.renderLayerChildren=[],this.sortableChildren=r.sortableChildren,this.sortFunction=r.sortFunction}attach(...r){for(let o=0;o<r.length;o++){let n=r[o];if(n.parentRenderLayer){if(n.parentRenderLayer===this)continue;n.parentRenderLayer.detach(n)}this.renderLayerChildren.push(n),n.parentRenderLayer=this;let i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0)}return r[0]}detach(...r){for(let o=0;o<r.length;o++){let n=r[o],i=this.renderLayerChildren.indexOf(n);i!==-1&&this.renderLayerChildren.splice(i,1),n.parentRenderLayer=null;let s=this.renderGroup||this.parentRenderGroup;s&&(s.structureDidChange=!0)}return r[0]}detachAll(){let r=this.renderLayerChildren;for(let o=0;o<r.length;o++)r[o].parentRenderLayer=null;this.renderLayerChildren.length=0}collectRenderables(r,o,n){let i=this.renderLayerChildren,s=i.length;this.sortableChildren&&this.sortRenderLayerChildren();for(let a=0;a<s;a++)i[a].parent||N("Container must be added to both layer and scene graph. Layers only handle render order - the scene graph is required for transforms (addChild)",i[a]),i[a].collectRenderables(r,o,this)}sortRenderLayerChildren(){this.renderLayerChildren.sort(this.sortFunction)}_getGlobalBoundsRecursive(r,o,n){if(!r)return;let i=this.renderLayerChildren;for(let s=0;s<i.length;s++)i[s]._getGlobalBoundsRecursive(!0,o,this)}};return e.defaultOptions={sortableChildren:!1,sortFunction:(t,r)=>t.zIndex-r.zIndex},e})(),Rs=cl,pl=Rs;function Yn(e,t,r,o){let n=r.buffers[0],i=n.data,{verticesX:s,verticesY:a}=r,u=e/(s-1),l=t/(a-1),c=0,p=o[0],f=o[1],g=o[2],x=o[3],_=o[4],b=o[5],y=o[6],F=o[7],S=o[8];for(let B=0;B<i.length;B+=2){let me=c%s*u,qe=(c/s|0)*l,so=p*me+f*qe+g,er=x*me+_*qe+b,X=y*me+F*qe+S;i[B]=so/X,i[B+1]=er/X,c++}n.update()}function Ps(e,t){let r=t[0],o=t[1],n=t[2],i=t[3],s=t[4],a=t[5],u=t[6],l=t[7],c=t[8];return e[0]=s*c-a*l,e[1]=n*l-o*c,e[2]=o*a-n*s,e[3]=a*u-i*c,e[4]=r*c-n*u,e[5]=n*i-r*a,e[6]=i*l-s*u,e[7]=o*u-r*l,e[8]=r*s-o*i,e}function Fs(e,t,r){let o=t[0],n=t[1],i=t[2],s=t[3],a=t[4],u=t[5],l=t[6],c=t[7],p=t[8],f=r[0],g=r[1],x=r[2],_=r[3],b=r[4],y=r[5],F=r[6],S=r[7],B=r[8];return e[0]=f*o+g*s+x*l,e[1]=f*n+g*a+x*c,e[2]=f*i+g*u+x*p,e[3]=_*o+b*s+y*l,e[4]=_*n+b*a+y*c,e[5]=_*i+b*u+y*p,e[6]=F*o+S*s+B*l,e[7]=F*n+S*a+B*c,e[8]=F*i+S*u+B*p,e}function fl(e,t,r){let o=r[0],n=r[1],i=r[2];return e[0]=t[0]*o+t[1]*n+t[2]*i,e[1]=t[3]*o+t[4]*n+t[5]*i,e[2]=t[6]*o+t[7]*n+t[8]*i,e}var ml=[0,0,0,0,0,0,0,0,0],dl=[0,0,0],no=[0,0,0];function ws(e,t,r,o,n,i,s,a,u){let l=ml;l[0]=t,l[1]=o,l[2]=i,l[3]=r,l[4]=n,l[5]=s,l[6]=1,l[7]=1,l[8]=1;let c=Ps(e,l);no[0]=a,no[1]=u,no[2]=1;let p=fl(dl,c,no),f=e;return e[0]=p[0],e[1]=0,e[2]=0,e[3]=0,e[4]=p[1],e[5]=0,e[6]=0,e[7]=0,e[8]=p[2],Fs(e,f,l)}var hl=[0,0,0,0,0,0,0,0,0],gl=[0,0,0,0,0,0,0,0,0];function jn(e,t,r,o,n,i,s,a,u,l,c,p,f,g,x,_,b){let y=ws(hl,t,r,i,s,l,c,g,x),F=ws(gl,o,n,a,u,p,f,_,b);return Fs(e,Ps(y,y),F)}var Jt=class extends bt{constructor(t){super(t),this._projectionMatrix=[0,0,0,0,0,0,0,0,0];let{width:r,height:o}=t;this.corners=[0,0,r,0,r,o,0,o]}setCorners(t,r,o,n,i,s,a,u){let l=this.corners;l[0]=t,l[1]=r,l[2]=o,l[3]=n,l[4]=i,l[5]=s,l[6]=a,l[7]=u,this.updateProjection()}updateProjection(){let{width:t,height:r}=this,o=this.corners,n=jn(this._projectionMatrix,0,0,o[0],o[1],t,0,o[2],o[3],t,r,o[4],o[5],0,r,o[6],o[7]);Yn(t,r,this,n)}};var Us=class Os extends ie{constructor(t){t=h(h({},Os.defaultOptions),t);let a=t,{texture:r,verticesX:o,verticesY:n}=a,i=D(a,["texture","verticesX","verticesY"]),s=new Jt(J({width:r.width,height:r.height,verticesX:o,verticesY:n}));super(J(C(h({},i),{geometry:s}))),this._texture=r,this.geometry.setCorners(t.x0,t.y0,t.x1,t.y1,t.x2,t.y2,t.x3,t.y3)}textureUpdated(){let t=this.geometry;if(!t)return;let{width:r,height:o}=this.texture;(t.width!==r||t.height!==o)&&(t.width=r,t.height=o,t.updateProjection())}set texture(t){this._texture!==t&&(super.texture=t,this.textureUpdated())}get texture(){return this._texture}setCorners(t,r,o,n,i,s,a,u){this.geometry.setCorners(t,r,o,n,i,s,a,u)}};Us.defaultOptions={texture:T.WHITE,verticesX:10,verticesY:10,x0:0,y0:0,x1:100,y1:0,x2:100,y2:100,x3:0,y3:100};var xl=Us;var Kn=class extends ie{constructor(t){let a=t,{texture:r,verticesX:o,verticesY:n}=a,i=D(a,["texture","verticesX","verticesY"]),s=new bt(J({width:r.width,height:r.height,verticesX:o,verticesY:n}));super(J(C(h({},i),{geometry:s,texture:r}))),this.texture=r,this.autoResize=!0}textureUpdated(){let t=this.geometry,{width:r,height:o}=this.texture;this.autoResize&&(t.width!==r||t.height!==o)&&(t.width=r,t.height=o,t.build({}))}set texture(t){this._texture?.off("update",this.textureUpdated,this),super.texture=t,t.on("update",this.textureUpdated,this),this.textureUpdated()}get texture(){return this._texture}destroy(t){this.texture.off("update",this.textureUpdated,this),super.destroy(t)}};var bl=(()=>{let e=class Ms extends _e{constructor(r){let{width:o,points:n,textureScale:i}=h(h({},Ms.defaultOptions),r);super({positions:new Float32Array(n.length*4),uvs:new Float32Array(n.length*4),indices:new Uint32Array((n.length-1)*6)}),this.points=n,this._width=o,this.textureScale=i,this._build()}get width(){return this._width}_build(){let r=this.points;if(!r)return;let o=this.getBuffer("aPosition"),n=this.getBuffer("aUV"),i=this.getIndex();if(r.length<1)return;o.data.length/4!==r.length&&(o.data=new Float32Array(r.length*4),n.data=new Float32Array(r.length*4),i.data=new Uint16Array((r.length-1)*6));let s=n.data,a=i.data;s[0]=0,s[1]=0,s[2]=0,s[3]=1;let u=0,l=r[0],c=this._width*this.textureScale,p=r.length;for(let g=0;g<p;g++){let x=g*4;if(this.textureScale>0){let _=l.x-r[g].x,b=l.y-r[g].y,y=Math.sqrt(_*_+b*b);l=r[g],u+=y/c}else u=g/(p-1);s[x]=u,s[x+1]=0,s[x+2]=u,s[x+3]=1}let f=0;for(let g=0;g<p-1;g++){let x=g*2;a[f++]=x,a[f++]=x+1,a[f++]=x+2,a[f++]=x+2,a[f++]=x+1,a[f++]=x+3}n.update(),i.update(),this.updateVertices()}updateVertices(){let r=this.points;if(r.length<1)return;let o=r[0],n,i=0,s=0,a=this.buffers[0].data,u=r.length,l=this.textureScale>0?this.textureScale*this._width/2:this._width/2;for(let c=0;c<u;c++){let p=r[c],f=c*4;c<r.length-1?n=r[c+1]:n=p,s=-(n.x-o.x),i=n.y-o.y;let g=(1-c/(u-1))*10;g>1&&(g=1);let x=Math.sqrt(i*i+s*s);x<1e-6?(i=0,s=0):(i/=x,s/=x,i*=l,s*=l),a[f]=p.x+i,a[f+1]=p.y+s,a[f+2]=p.x-i,a[f+3]=p.y-s,o=p}this.buffers[0].update()}update(){this.textureScale>0?this._build():this.updateVertices()}};return e.defaultOptions={width:200,points:[],textureScale:0},e})(),$n=bl;var _l=(()=>{let e=class Gs extends ie{constructor(r){let u=h(h({},Gs.defaultOptions),r),{texture:o,points:n,textureScale:i}=u,s=D(u,["texture","points","textureScale"]),a=new $n(J({width:o.height,points:n,textureScale:i}));i>0&&(o.source.style.addressMode="repeat"),super(J(C(h({},s),{texture:o,geometry:a}))),this.autoUpdate=!0,this.onRender=this._render}_render(){let r=this.geometry;(this.autoUpdate||r._width!==this.texture.height)&&(r._width=this.texture.height,r.update())}};return e.defaultOptions={textureScale:0},e})(),vl=_l;var Qn=class extends ie{constructor(t){let l=t,{texture:r,vertices:o,uvs:n,indices:i,topology:s}=l,a=D(l,["texture","vertices","uvs","indices","topology"]),u=new _e(J({positions:o,uvs:n,indices:i,topology:s}));super(J(C(h({},a),{texture:r,geometry:u}))),this.autoUpdate=!0,this.onRender=this._render}get vertices(){return this.geometry.getBuffer("aPosition").data}set vertices(t){this.geometry.getBuffer("aPosition").data=t}_render(){this.autoUpdate&&this.geometry.getBuffer("aPosition").update()}};function Al(e,t){let{width:r,height:o}=e.frame;return t.scale(1/r,1/o),t}var yl=(()=>{let e=class Zn{constructor(r){if(r instanceof T)this.texture=r,tr(this,Zn.defaultOptions,{});else{let o=h(h({},Zn.defaultOptions),r);tr(this,o,{})}}get alpha(){return this._alpha}set alpha(r){this._alpha=Math.min(Math.max(r,0),1),this._updateColor()}get tint(){return po(this._tint)}set tint(r){typeof r=="number"?this._tint=r:this._tint=We.shared.setValue(r??16777215).toBgrNumber(),this._updateColor()}_updateColor(){this.color=this._tint+((this._alpha*255|0)<<24)}};return e.defaultOptions={anchorX:0,anchorY:0,x:0,y:0,scaleX:1,scaleY:1,rotation:0,tint:16777215,alpha:1},e})(),El=yl;var io={vertex:{attributeName:"aVertex",format:"float32x2",code:`
            const texture = p.texture;
            const sx = p.scaleX;
            const sy = p.scaleY;
            const ax = p.anchorX;
            const ay = p.anchorY;
            const trim = texture.trim;
            const orig = texture.orig;

            if (trim)
            {
                w1 = trim.x - (ax * orig.width);
                w0 = w1 + trim.width;

                h1 = trim.y - (ay * orig.height);
                h0 = h1 + trim.height;
            }
            else
            {
                w1 = -ax * (orig.width);
                w0 = w1 + orig.width;

                h1 = -ay * (orig.height);
                h0 = h1 + orig.height;
            }

            f32v[offset] = w1 * sx;
            f32v[offset + 1] = h1 * sy;

            f32v[offset + stride] = w0 * sx;
            f32v[offset + stride + 1] = h1 * sy;

            f32v[offset + (stride * 2)] = w0 * sx;
            f32v[offset + (stride * 2) + 1] = h0 * sy;

            f32v[offset + (stride * 3)] = w1 * sx;
            f32v[offset + (stride * 3) + 1] = h0 * sy;
        `,dynamic:!1},position:{attributeName:"aPosition",format:"float32x2",code:`
            var x = p.x;
            var y = p.y;

            f32v[offset] = x;
            f32v[offset + 1] = y;

            f32v[offset + stride] = x;
            f32v[offset + stride + 1] = y;

            f32v[offset + (stride * 2)] = x;
            f32v[offset + (stride * 2) + 1] = y;

            f32v[offset + (stride * 3)] = x;
            f32v[offset + (stride * 3) + 1] = y;
        `,dynamic:!0},rotation:{attributeName:"aRotation",format:"float32",code:`
            var rotation = p.rotation;

            f32v[offset] = rotation;
            f32v[offset + stride] = rotation;
            f32v[offset + (stride * 2)] = rotation;
            f32v[offset + (stride * 3)] = rotation;
        `,dynamic:!1},uvs:{attributeName:"aUV",format:"float32x2",code:`
            var uvs = p.texture.uvs;

            f32v[offset] = uvs.x0;
            f32v[offset + 1] = uvs.y0;

            f32v[offset + stride] = uvs.x1;
            f32v[offset + stride + 1] = uvs.y1;

            f32v[offset + (stride * 2)] = uvs.x2;
            f32v[offset + (stride * 2) + 1] = uvs.y2;

            f32v[offset + (stride * 3)] = uvs.x3;
            f32v[offset + (stride * 3) + 1] = uvs.y3;
        `,dynamic:!1},color:{attributeName:"aColor",format:"unorm8x4",code:`
            const c = p.color;

            u32v[offset] = c;
            u32v[offset + stride] = c;
            u32v[offset + (stride * 2)] = c;
            u32v[offset + (stride * 3)] = c;
        `,dynamic:!1}};var Sl=new pt(0,0,0,0),Cl=(()=>{let e=class Jn extends ee{constructor(r={}){r=C(h(h({},Jn.defaultOptions),r),{dynamicProperties:h(h({},Jn.defaultOptions.dynamicProperties),r?.dynamicProperties)});let l=r,{dynamicProperties:o,shader:n,roundPixels:i,texture:s,particles:a}=l,u=D(l,["dynamicProperties","shader","roundPixels","texture","particles"]);super(h({label:"ParticleContainer"},u)),this.renderPipeId="particle",this.batched=!1,this._childrenDirty=!1,this.texture=s||null,this.shader=n,this._properties={};for(let c in io){let p=io[c],f=o[c];this._properties[c]=C(h({},p),{dynamic:f})}this.allowChildren=!0,this.roundPixels=i??!1,this.particleChildren=a??[]}addParticle(...r){for(let o=0;o<r.length;o++)this.particleChildren.push(r[o]);return this.onViewUpdate(),r[0]}removeParticle(...r){let o=!1;for(let n=0;n<r.length;n++){let i=this.particleChildren.indexOf(r[n]);i>-1&&(this.particleChildren.splice(i,1),o=!0)}return o&&this.onViewUpdate(),r[0]}update(){this._childrenDirty=!0}onViewUpdate(){this._childrenDirty=!0,super.onViewUpdate()}get bounds(){return Sl}updateBounds(){}destroy(r=!1){if(super.destroy(r),typeof r=="boolean"?r:r?.texture){let n=typeof r=="boolean"?r:r?.textureSource,i=this.texture??this.particleChildren[0]?.texture;i&&i.destroy(n)}this.texture=null,this.shader?.destroy()}removeParticles(r,o){let n=this.particleChildren.splice(r,o);return this.onViewUpdate(),n}removeParticleAt(r){let o=this.particleChildren.splice(r,1);return this.onViewUpdate(),o[0]}addParticleAt(r,o){return this.particleChildren.splice(o,0,r),this.onViewUpdate(),r}addChild(...r){throw new Error("ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()")}removeChild(...r){throw new Error("ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()")}removeChildren(r,o){throw new Error("ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()")}removeChildAt(r){throw new Error("ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()")}getChildAt(r){throw new Error("ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()")}setChildIndex(r,o){throw new Error("ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()")}getChildIndex(r){throw new Error("ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()")}addChildAt(r,o){throw new Error("ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()")}swapChildren(r,o){throw new Error("ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()")}reparentChild(...r){throw new Error("ParticleContainer.reparentChild() is not available with the particle container")}reparentChildAt(r,o){throw new Error("ParticleContainer.reparentChildAt() is not available with the particle container")}};return e.defaultOptions={dynamicProperties:{vertex:!1,position:!0,rotation:!1,uvs:!1,color:!1},roundPixels:!1},e})(),Dl=Cl;var Is=class Ns extends ee{constructor(t){t instanceof T&&(t={texture:t});let f=t,{width:r,height:o,anchor:n,leftWidth:i,rightWidth:s,topHeight:a,bottomHeight:u,texture:l,roundPixels:c}=f,p=D(f,["width","height","anchor","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(h({label:"NineSliceSprite"},p)),this.renderPipeId="nineSliceSprite",this.batched=!0,this._leftWidth=i??l?.defaultBorders?.left??Re.defaultOptions.leftWidth,this._topHeight=a??l?.defaultBorders?.top??Re.defaultOptions.topHeight,this._rightWidth=s??l?.defaultBorders?.right??Re.defaultOptions.rightWidth,this._bottomHeight=u??l?.defaultBorders?.bottom??Re.defaultOptions.bottomHeight,this._width=r??l.width??Re.defaultOptions.width,this._height=o??l.height??Re.defaultOptions.height,this.allowChildren=!1,this.texture=l??Ns.defaultOptions.texture,this.roundPixels=c??!1,this._anchor=new ae({_onUpdate:()=>{this.onViewUpdate()}}),n?this.anchor=n:this.texture.defaultAnchor&&(this.anchor=this.texture.defaultAnchor)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return this._width}set width(t){this._width=t,this.onViewUpdate()}get height(){return this._height}set height(t){this._height=t,this.onViewUpdate()}setSize(t,r){typeof t=="object"&&(r=t.height??t.width,t=t.width),this._width=t,this._height=r??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}get leftWidth(){return this._leftWidth}set leftWidth(t){this._leftWidth=t,this.onViewUpdate()}get topHeight(){return this._topHeight}set topHeight(t){this._topHeight=t,this.onViewUpdate()}get rightWidth(){return this._rightWidth}set rightWidth(t){this._rightWidth=t,this.onViewUpdate()}get bottomHeight(){return this._bottomHeight}set bottomHeight(t){this._bottomHeight=t,this.onViewUpdate()}get texture(){return this._texture}set texture(t){t||(t=T.EMPTY);let r=this._texture;r!==t&&(r&&r.dynamic&&r.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get originalWidth(){return this._texture.width}get originalHeight(){return this._texture.height}destroy(t){if(super.destroy(t),typeof t=="boolean"?t:t?.texture){let o=typeof t=="boolean"?t:t?.textureSource;this._texture.destroy(o)}this._texture=null}updateBounds(){let t=this._bounds,r=this._anchor,o=this._width,n=this._height;t.minX=-r._x*o,t.maxX=t.minX+o,t.minY=-r._y*n,t.maxY=t.minY+n}};Is.defaultOptions={texture:T.EMPTY};var Ls=Is,ei=class extends Ls{constructor(...t){let r=t[0];r instanceof T&&(E(P,"NineSlicePlane now uses the options object {texture, leftWidth, rightWidth, topHeight, bottomHeight}"),r={texture:r,leftWidth:t[1],topHeight:t[2],rightWidth:t[3],bottomHeight:t[4]}),E(P,"NineSlicePlane is deprecated. Use NineSliceSprite instead."),super(r)}};function Tl(e,t){return t instanceof Be||t instanceof Ke?t:e==="html"?new Ke(t):new Be(t)}function Bl(e,t,r=200){return d(this,null,function*(){let o=yield t.extract.base64(e);yield t.encoder.commandFinished;let n=r;console.log(`logging texture ${e.source.width}px ${e.source.height}px`);let i=["font-size: 1px;",`padding: ${n}px 300px;`,`background: url(${o}) no-repeat;`,"background-size: contain;"].join(" ");console.log("%c ",i)})}var Rl=["#000080","#228B22","#8B0000","#4169E1","#008080","#800000","#9400D3","#FF8C00","#556B2F","#8B008B"],wl=0;function ks(e,t=0,r={color:"#000000"}){e.renderGroup&&(r.color=Rl[wl++]);let o="";for(let s=0;s<t;s++)o+="    ";let n=e.label;!n&&e instanceof be&&(n=`sprite:${e.texture.label}`);let i=`%c ${o}|- ${n} (worldX:${e.worldTransform.tx}, relativeRenderX:${e.relativeGroupTransform.tx}, renderX:${e.groupTransform.tx}, localX:${e.x})`;e.renderGroup&&(i+=" (RenderGroup)"),e.filters&&(i+="(*filters)"),console.log(i,`color:${r.color}; font-weight:bold;`),t++;for(let s=0;s<e.children.length;s++){let a=e.children[s];ks(a,t,h({},r))}}function Xs(e,t=0,r={index:0,color:"#000000"}){let o="";for(let i=0;i<t;i++)o+="    ";let n=`%c ${o}- ${r.index}: ${e.root.label} worldX:${e.worldTransform.tx}`;console.log(n,`color:${r.color}; font-weight:bold;`),t++;for(let i=0;i<e.renderGroupChildren.length;i++){let s=e.renderGroupChildren[i];Xs(s,t,C(h({},r),{index:i}))}}var Pl=oi(qs(),1);ue.add(ni,ii);export{ni as a,ii as b,Fo as c,Uo as d,Oo as e,A as f,Ge as g,Ie as h,or as i,nr as j,ir as k,sr as l,ar as m,ur as n,lr as o,cr as p,pr as q,fr as r,mr as s,dr as t,hr as u,gr as v,xr as w,br as x,_r as y,vr as z,Ar as A,yr as B,Er as C,ve as D,Ae as E,Mo as F,ui as G,$e as H,vt as I,Dr as J,Tr as K,Io as L,No as M,At as N,Lo as O,yt as P,ko as Q,Xo as R,Ne as S,Ho as T,Vo as U,qo as V,zo as W,Et as X,ne as Y,U as Z,Wo as _,Yo as $,ci as aa,jo as ba,Le as ca,Y as da,Ko as ea,Br as fa,mi as ga,St as ha,hi as ia,gi as ja,xi as ka,Jo as la,Ct as ma,en as na,Rr as oa,Dt as pa,ma as qa,pe as ra,Pr as sa,Ur as ta,Tt as ua,_i as va,ye as wa,Bt as xa,ha as ya,tn as za,xa as Aa,ba as Ba,va as Ca,rn as Da,on as Ea,K as Fa,Gr as Ga,j as Ha,v as Ia,nn as Ja,sn as Ka,Ta as La,yi as Ma,O as Na,an as Oa,Xa as Pa,wt as Qa,Va as Ra,un as Sa,za as Ta,Wa as Ua,Ya as Va,cn as Wa,pn as Xa,$a as Ya,Za,Ft as _a,Ja as $a,eu as ab,mn as bb,Nr as cb,Pu as db,Xe as eb,Rn as fb,Kr as gb,Uu as hb,zt as ib,wn as jb,Pn as kb,Fn as lb,Un as mb,On as nb,Wt as ob,Iu as pb,Mn as qb,$r as rb,Gn as sb,In as tb,Nn as ub,Qr as vb,Ln as wb,kn as xb,Zr as yb,Lu as zb,ku as Ab,Jr as Bb,Xn as Cb,Hn as Db,ie as Eb,Yt as Fb,jt as Gb,Vn as Hb,De as Ib,He as Jb,Ve as Kb,Kt as Lb,$t as Mb,Qt as Nb,Zt as Ob,to as Pb,Hu as Qb,Vu as Rb,qu as Sb,qn as Tb,zu as Ub,Yu as Vb,ju as Wb,Ku as Xb,Qu as Yb,Ts as Zb,ro as _b,Zu as $b,oo as ac,Ju as bc,zn as cc,tl as dc,rl as ec,ol as fc,Wn as gc,nl as hc,il as ic,sl as jc,al as kc,ll as lc,Rs as mc,pl as nc,Yn as oc,jn as pc,Jt as qc,xl as rc,Kn as sc,$n as tc,vl as uc,Qn as vc,Al as wc,El as xc,io as yc,Dl as zc,Ls as Ac,ei as Bc,Tl as Cc,Bl as Dc,ks as Ec,Xs as Fc,Pl as Gc};
