(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[80],{1393:function(e,t,r){"use strict";r.r(t),r.d(t,"previewCIMSymbol",(function(){return L}));var a,n,i=r(155),c=r(154),o=r.n(c),s=r(168),l=r(60),u=r(142),m=r(143),h=r(201),f=r(188),g=r(164),y=r(256),d=r(169),v=r(293),b=r(343),p=r(851),C=r(350),w=r(273),x=r(818),O=r(980);(n=a||(a={})).Legend="legend",n.Preview="preview";var P=function(e,t,r){if(e&&e.targetSize){var a;if(r){var n=Math.max(r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin);a=e.targetSize/Object(s.c)(n)}else a=e.targetSize/t.referenceSize;return a}return e&&e.scaleFactor?e.scaleFactor:1},j={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}},M=function(){function e(t,r){Object(u.a)(this,e),this._spatialReference=t,this._avoidSDF=r,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new C.a,this._cimResourceManager=new b.a,this._rasterizer=new p.a(this._cimResourceManager)}return Object(m.a)(e,[{key:"rasterizeCIMSymbolAsync",value:function(){var e=Object(i.a)(o.a.mark((function e(t,r,a,n,i,c,s,l){var u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=n||(r?null!=r.centroid?"esriGeometryPolygon":Object(d.c)(r.geometry):null)||I(t),e.next=3,this.analyzeCIMSymbol(t,r?z(r.attributes):null,a,n,l);case 3:return u=e.sent,e.abrupt("return",this.rasterizeCIMSymbol(u,r,n,i,c,s));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,a,n,i,c,o,s){return e.apply(this,arguments)}}()},{key:"analyzeCIMSymbol",value:function(){var e=Object(i.a)(o.a.mark((function e(t,r,a,n,i){var c,s,l,u,m,h;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],s=r?{geometryType:n,spatialReference:this._spatialReference,fields:r}:null,e.next=3,Object(v.b)(t.data,s,this._cimResourceManager,c,this._avoidSDF);case 3:for(Object(g.p)(i),u=0,m=c;u<m.length;u++)"CIMPictureMarker"!==(h=m[u]).cim.type&&"CIMPictureFill"!==h.cim.type&&"CIMPictureStroke"!==h.cim.type||(l||(l=[]),l.push(this._fetchPictureMarkerResource(h,i))),a&&"text"===h.type&&"string"==typeof h.text&&h.text.includes("[")&&(h.text=Object(w.c)(a,h.text,h.cim.textCase));if(e.t0=l,!e.t0){e.next=9;break}return e.next=9,Promise.all(l);case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e,this)})));return function(t,r,a,n,i){return e.apply(this,arguments)}}()},{key:"_fetchPictureMarkerResource",value:function(){var e=Object(i.a)(o.a.mark((function e(t,r){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.materialHash,this._pictureMarkerCache.get(a)){e.next=6;break}return e.next=4,Object(f.default)(t.cim.url,{responseType:"image",signal:r&&r.signal});case 4:n=e.sent.data,this._pictureMarkerCache.set(a,n);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"rasterizeCIMSymbol",value:function(e,t,r,a,n,i){var c,o=[],s=Object(l.a)(e);try{for(s.s();!(c=s.n()).done;){var u=c.value;a&&"function"==typeof a.scaleFactor&&(a.scaleFactor=a.scaleFactor(t,n,i));var m=this._getRasterizedResource(u,t,r,a,n,i);if(m){var h=0,f=m.anchorX||0,g=m.anchorY||0,y=!1,d=0,v=0;if("esriGeometryPoint"===r){var b=P(a,u,null);if(d=Object(w.d)(u.offsetX,t,n,i)*b||0,v=Object(w.d)(u.offsetY,t,n,i)*b||0,"marker"===u.type)h=Object(w.d)(u.rotation,t,n,i)||0,y=!!u.rotateClockwise&&u.rotateClockwise;else if("text"===u.type){if(h=Object(w.d)(u.angle,t,n,i)||0,void 0!==u.horizontalAlignment)switch(u.horizontalAlignment){case"left":f=-.5;break;case"right":f=.5;break;default:f=0}if(void 0!==u.verticalAlignment)switch(u.verticalAlignment){case"top":g=.5;break;case"bottom":g=-.5;break;case"baseline":g=-.25;break;default:g=0}}}null!=m&&o.push({angle:h,rotateClockWise:y,anchorX:f,anchorY:g,offsetX:d,offsetY:v,rasterizedResource:m})}}}catch(p){s.e(p)}finally{s.f()}return this.getSymbolImage(o)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),r=t.getContext("2d"),a=0,n=0,i=0,c=0,o=[],l=0;l<e.length;l++){var u=e[l],m=u.rasterizedResource;if(m){var h=m.size,f=u.offsetX,g=u.offsetY,y=u.anchorX,d=u.anchorY,v=u.rotateClockWise||!1,b=u.angle,p=Object(s.c)(f)-h[0]*(.5+y),C=Object(s.c)(g)-h[1]*(.5+d),w=p+h[0],x=C+h[1];if(b){v&&(b=-b);var P=Math.sin(b*Math.PI/180),j=Math.cos(b*Math.PI/180),M=p*j-C*P,z=p*P+C*j,I=p*j-x*P,k=p*P+x*j,S=w*j-x*P,_=w*P+x*j,R=w*j-C*P,A=w*P+C*j;p=Math.min(M,I,S,R),C=Math.min(z,k,_,A),w=Math.max(M,I,S,R),x=Math.max(z,k,_,A)}a=p<a?p:a,n=C<n?C:n,i=w>i?w:i,c=x>c?x:c;var L=r.createImageData(m.size[0],m.size[1]);L.data.set(new Uint8ClampedArray(m.image.buffer));var D={offsetX:f,offsetY:g,rotateClockwise:v,angle:b,rasterizedImage:L,anchorX:y,anchorY:d};o.push(D)}}t.width=i-a,t.height=c-n;for(var F=-a,T=c,X=0;X<o.length;X++){var Y=o[X],B=this._imageDataToCanvas(Y.rasterizedImage),U=Y.rasterizedImage.width,H=Y.rasterizedImage.height,G=F-U*(.5+Y.anchorX),V=T-H*(.5-Y.anchorY);if(Y.angle){var E=(360-Y.angle)*Math.PI/180;r.save(),r.translate(Object(s.c)(Y.offsetX),-Object(s.c)(Y.offsetY)),r.translate(F,T),r.rotate(E),r.translate(-F,-T),r.drawImage(B,G,V),r.restore()}else r.drawImage(B,G+Object(s.c)(Y.offsetX),V-Object(s.c)(Y.offsetY))}var J=new O.a({x:F/t.width-.5,y:T/t.height-.5});return{imageData:0!==t.width&&0!==t.height?r.getImageData(0,0,t.width,t.height):r.createImageData(1,1),anchorPosition:J}}},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,r,a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var n=this._imageDataCanvas,i=n.getContext("2d");if(n.width=t,n.height=r,i.drawImage(e,0,0,t,r),a){i.save();var c=new h.a(a);i.fillStyle=c.toHex(),i.globalCompositeOperation="multiply",i.fillRect(0,0,t,r),i.globalCompositeOperation="destination-atop",i.drawImage(e,0,0,t,r),i.restore()}return new Uint32Array(i.getImageData(0,0,t,r).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,r,n,i,c){var o,s,l,u,m=null,h=null;if("esriGeometryPolyline"===r||"esriGeometryPolygon"===r){var f=n&&n.style?n.style:a.Legend,g="esriGeometryPolyline"===r?j.stroke[f]:j.fill[f];if("line"===e.type){var d;if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){var v=Object(w.d)(e.width,t,i,c),b=Object(w.d)(e.color,t,i,c),p=this._getPictureResource(e,v,b),C=p.image,O=p.width,M=p.height;return this._rasterizePictureResource(e,C,O,M,g,v)}return null}o=(d=k(e,t,i,c)).analyzedCIM,l=d.hash,s=this._embedCIMLayerInVectorMarker(o,g)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type){var z=Object(w.d)(e.size,t,i,c),I=Object(w.d)(e.color,t,i,c),S=this._getPictureResource(e,z,I),_=S.image,R=S.width,A=S.height;return this._rasterizePictureResource(e,_,R,A,g,z)}if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=Object(w.d)(e.offsetX,t,i,c),e.cim.offsetY=Object(w.d)(e.offsetY,t,i,c),e.cim.rotation=Object(w.d)(e.rotation,t,i,c),e.cim.markerPlacement=e.markerPlacement,o=k(e,t,i,c).analyzedCIM,l=Object(y.b)(JSON.stringify(o)).toString(),s=this._embedCIMLayerInVectorMarker(o,g),m=Object(w.d)(e.size,t,i,c),h=e.path}else{if("text"===e.type)return null;if("fill"===e.type){var L;if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var D,F,T,X=e.cim.size||e.cim.height;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var Y=this._getPictureResource(e,X,Object(w.d)(e.color,t,i,c));D=Y.image,F=Y.width,T=Y.height}else{var B=k(e,t,i,c);o=B.analyzedCIM,l=B.hash;var U=this._rasterizer.rasterizeJSONResource({cim:o,type:e.type,url:e.url,mosaicHash:l,size:X,path:h},1,this._avoidSDF);D=U.image,F=U.size[0],T=U.size[1]}return this._rasterizePictureResource(e,D,F,T,g,null)}if("CIMSolidFill"!==e.cim.type)return null;o=(L=k(e,t,i,c)).analyzedCIM,l=L.hash,s=this._embedCIMLayerInVectorMarker(o,g)}}}else{if("text"===e.type)return u=this._rasterizeTextResource(e,t,n,i,c);var H=k(e,t,i,c);o=H.analyzedCIM,l=H.hash;var G=P(n,e,null);if("CIMPictureMarker"===e.cim.type){var V=Object(w.d)(e.size,t,i,c)*G,E=this._getPictureResource(e,V,Object(w.d)(e.color,t,i,c));return u={image:E.image,size:[E.width,E.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}Object(x.c)(o,G,{preserveOutlineWidth:!1}),s=o}l+=r,n&&(l+=JSON.stringify(n));var J=this._resourceCache;return J.has(l)?J.get(l):(u=this._rasterizer.rasterizeJSONResource({cim:s,type:e.type,url:e.url,mosaicHash:l,size:m,path:h},window.devicePixelRatio||1,this._avoidSDF),J.set(l,u),u)}},{key:"_rasterizeTextResource",value:function(e,t,r,a,n){var i=P(r,e,null),c=Object(w.d)(e.text,t,a,n);if(!c||0===c.length)return null;var o=Object(w.d)(e.fontName,t,a,n),s=Object(w.d)(e.style,t,a,n),l=Object(w.d)(e.weight,t,a,n),u=Object(w.d)(e.decoration,t,a,n),m=Object(w.d)(e.size,t,a,n)*i,h=Object(w.d)(e.horizontalAlignment,t,a,n),f=Object(w.d)(e.verticalAlignment,t,a,n),g=Object(w.b)(Object(w.d)(e.color,t,a,n)),y=Object(w.b)(Object(w.d)(e.outlineColor,t,a,n)),d={color:g,size:m,horizontalAlignment:h,verticalAlignment:f,font:{family:o,style:s,weight:l,decoration:u},halo:{size:Object(w.d)(e.outlineSize,t,a,n)||0,color:y,style:s},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(c,d)}},{key:"_rasterizePictureResource",value:function(e,t,r,a,n,i){var c=document.createElement("canvas"),o=c.getContext("2d");c.height=Object(s.c)(Math.max(n.frame.ymax-n.frame.ymin,i)),c.width=Object(s.c)(n.frame.xmax-n.frame.xmin);var u=o.createImageData(r,a);u.data.set(new Uint8ClampedArray(t.buffer));var m=this._imageDataToCanvas(u),h=o.createPattern(m,"repeat"),f=Math.cos((-e.cim.rotation||0)*Math.PI/180),g=Math.sin((-e.cim.rotation||0)*Math.PI/180);h.setTransform({m11:f,m12:g,m21:-g,m22:f,m41:Object(s.c)(e.cim.offsetX)||0,m42:Object(s.c)(e.cim.offsetY)||0});var y,v,b,p=n.canvasPaths;Object(d.g)(p)?(y=p.rings,o.fillStyle=h,v=o.fill,b=["evenodd"]):Object(d.h)(p)&&(y=p.paths,o.strokeStyle=h,o.lineWidth=i,v=o.stroke,y[0][0][1]=c.height/2,y[0][1][1]=c.height/2),o.beginPath();var C,w=Object(l.a)(y);try{for(w.s();!(C=w.n()).done;){var x=C.value,O=x?x.length:0;if(O>1){var P=x[0];o.moveTo(Object(s.c)(P[0]),Object(s.c)(P[1]));for(var j=1;j<O;++j)P=x[j],o.lineTo(Object(s.c)(P[0]),Object(s.c)(P[1]));o.closePath()}}}catch(I){w.e(I)}finally{w.f()}v.apply(o,b);var M=o.getImageData(0,0,c.width,c.height),z=new Uint8Array(M.data);return{size:[c.width,c.height],image:new Uint32Array(z.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}},{key:"_getPictureResource",value:function(e,t,r){var a=this._pictureMarkerCache.get(e.materialHash);if(!a)return null;var n=a.height/a.width,i=t?n>1?Object(s.c)(t):Object(s.c)(t)/n:a.width,c=t?n>1?Object(s.c)(t)*n:Object(s.c)(t):a.height;return{image:this._imageTo32Array(a,i,c,r),width:i,height:c}}},{key:"_embedCIMLayerInVectorMarker",value:function(e,t){var r=Object(d.g)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",a=t.frame;return{type:"CIMVectorMarker",frame:a,size:a.ymax-a.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:r,symbolLayers:[e]}}]}}}]),e}();function z(e){return(e?Object.keys(e):[]).map((function(t){return{name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}}))}function I(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function k(e,t,r,a){var n,i;return"function"==typeof e.materialHash?(n=(0,e.materialHash)(t,r,a),i=Object(v.a)(e.cim,e.materialOverrides)):(n=e.materialHash,i=e.cim),{analyzedCIM:i,hash:n}}var S=r(611),_=r(759),R=new M(null,!0),A=S.a.maxSize;function L(e){return D.apply(this,arguments)}function D(){return D=Object(i.a)(o.a.mark((function e(t){var r,a,n,i,c,l,u,m,h,f,g,y,d,v,b,p,C,w,O,P,j,M,z=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=z.length>1&&void 0!==z[1]?z[1]:{},a=r.size,n=r.maxSize,i=r.node,c=r.opacity,l=r.cimOptions||r,u=l.feature,m=l.fieldMap,h=l.geometryType,f=l.style,g=Object(x.b)(t),y="number"==typeof a?a:null,(d=Math.min(null!=y?y:g,null!=n?n:Object(s.d)(A)))!==g&&(t=t.clone(),Object(x.d)(t,d,{preserveOutlineWidth:!0})),v=3,t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(v=1),e.next=7,R.rasterizeCIMSymbolAsync(t,u,m,h,{scaleFactor:v,style:f});case 7:return b=e.sent,(p=document.createElement("canvas")).width=b.imageData.width,p.height=b.imageData.height,p.getContext("2d").putImageData(b.imageData,0,0),C=p.width/v,w=p.height/v,null!=a&&(null==(null===r||void 0===r?void 0:r.scale)||null!==r&&void 0!==r&&r.scale)&&(C=(O=C/w)<=1?Math.ceil(d*O):d,w=O<=1?d:Math.ceil(d/O)),(P=new Image(C,w)).src=p.toDataURL(),null!=c&&(P.style.opacity="".concat(c)),j=P,null!=r.effectView&&(M={shape:{type:"image",x:0,y:0,width:C,height:w,src:P.src},fill:null,stroke:null,offset:[0,0]},j=Object(_.a)([[M]],[C,w],{effectView:r.effectView})),e.abrupt("return",(i&&i.appendChild(j),j));case 18:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}},170:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return n}));var a=new Float32Array(1);new Uint32Array(a.buffer);function n(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function i(e,t){return 65535&e|t<<16}function c(e,t,r,a){return 255&e|(255&t)<<8|(255&r)<<16|a<<24}},215:function(e,t,r){"use strict";var a,n;function i(e){switch(e){case"left":return a.Left;case"right":return a.Right;case"center":return a.Center}}function c(e){switch(e){case"top":return n.Top;case"middle":return n.Center;case"baseline":return n.Baseline;case"bottom":return n.Bottom}}function o(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[a.Right,n.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[a.Center,n.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[a.Left,n.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[a.Right,n.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[a.Center,n.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[a.Left,n.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[a.Right,n.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[a.Center,n.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[a.Left,n.Top];default:return console.debug("Found invalid placement type ".concat(e)),[a.Center,n.Center]}}function s(e){switch(e){case a.Right:return-1;case a.Center:return 0;case a.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function l(e){switch(e){case n.Top:return 1;case n.Center:return 0;case n.Bottom:case n.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function u(e){switch(e){case"left":return a.Left;case"right":return a.Right;case"center":return a.Center}}function m(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return u})),r.d(t,"e",(function(){return i})),r.d(t,"f",(function(){return s})),r.d(t,"g",(function(){return c})),r.d(t,"h",(function(){return l})),r.d(t,"i",(function(){return m})),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(a||(a={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(n||(n={}))},275:function(e,t,r){"use strict";r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return P})),r.d(t,"g",(function(){return j}));var a=r(14),n=r(146),i=r(169);var c=function(e,t,r){return[t,r]},o=function(e,t,r){return[t,r,e[2]]},s=function(e,t,r){return[t,r,e[2],e[3]]};function l(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:Object(n.k)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function u(e,t){var r=e.scale,a=e.translate;return Math.round((t-a[0])/r[0])}function m(e,t){var r=e.scale,a=e.translate;return Math.round((a[1]-t)/r[1])}function h(e,t,r){for(var a,n,i,c,o=[],s=0;s<r.length;s++){var l=r[s];s>0?(i=u(e,l[0]),c=m(e,l[1]),i===a&&c===n||(o.push(t(l,i-a,c-n)),a=i,n=c)):(a=u(e,l[0]),n=m(e,l[1]),o.push(t(l,a,n)))}return o.length>0?o:null}function f(e,t){var r=e.scale,a=e.translate;return t*r[0]+a[0]}function g(e,t){var r=e.scale;return e.translate[1]-t*r[1]}function y(e,t,r){var n=new Array(r.length);if(!r.length)return n;var i=Object(a.a)(e.scale,2),c=i[0],o=i[1],s=f(e,r[0][0]),l=g(e,r[0][1]);n[0]=t(r[0],s,l);for(var u=1;u<r.length;u++){var m=r[u];s+=m[0]*c,l-=m[1]*o,n[u]=t(m,s,l)}return n}function d(e,t,r){for(var a=new Array(r.length),n=0;n<r.length;n++)a[n]=y(e,t,r[n]);return a}function v(e,t,r,a,n){return t.points=function(e,t,r,a){return h(e,r?a?s:o:a?o:c,t)}(e,r.points,a,n),t}function b(e,t,r,a,n){return t.x=u(e,r.x),t.y=m(e,r.y),t!==r&&(a&&(t.z=r.z),n&&(t.m=r.m)),t}function p(e,t,r,a,n){var i=function(e,t,r,a){for(var n=[],i=r?a?s:o:a?o:c,l=0;l<t.length;l++){var u=h(e,i,t[l]);u&&u.length>=3&&n.push(u)}return n.length?n:null}(e,r.rings,a,n);return i?(t.rings=i,t):null}function C(e,t,r,a,n){var i=function(e,t,r,a){for(var n=[],i=r?a?s:o:a?o:c,l=0;l<t.length;l++){var u=h(e,i,t[l]);u&&u.length>=2&&n.push(u)}return n.length?n:null}(e,r.paths,a,n);return i?(t.paths=i,t):null}function w(e,t){return e&&t?Object(i.f)(t)?b(e,{},t,!1,!1):Object(i.h)(t)?C(e,{},t,!1,!1):Object(i.g)(t)?p(e,{},t,!1,!1):Object(i.e)(t)?v(e,{},t,!1,!1):Object(i.d)(t)?function(e,t,r,a,n){return t.xmin=u(e,r.xmin),t.ymin=m(e,r.ymin),t.xmax=u(e,r.xmax),t.ymax=m(e,r.ymax),t!==r&&(a&&(t.zmin=r.zmin,t.zmax=r.zmax),n&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}(e,{},t,!1,!1):null:null}function x(e,t,r,a,i){return Object(n.k)(r)&&(t.points=function(e,t,r,a){return y(e,r?a?s:o:a?o:c,t)}(e,r.points,a,i)),t}function O(e,t,r,a,i){return Object(n.j)(r)||(t.x=f(e,r.x),t.y=g(e,r.y),t!==r&&(a&&(t.z=r.z),i&&(t.m=r.m))),t}function P(e,t,r,a,i){return Object(n.k)(r)&&(t.rings=function(e,t,r,a){return d(e,r?a?s:o:a?o:c,t)}(e,r.rings,a,i)),t}function j(e,t,r,a,i){return Object(n.k)(r)&&(t.paths=function(e,t,r,a){return d(e,r?a?s:o:a?o:c,t)}(e,r.paths,a,i)),t}},851:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var a=r(60),n=r(14),i=r(142),c=r(143),o=r(237),s=r(251),l=r(359),u=r(273),m=function(){function e(t){Object(i.a)(this,e),this._resourceManager=t}return Object(c.a)(e,[{key:"dispose",value:function(){this._rasterizationCanvas=null}},{key:"rasterizeJSONResource",value:function(e,t,r){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){var a=o.d.rasterizeSimpleFill(this._rasterizationCanvas,e.style,t),i=Object(n.a)(a,3),c=i[0];return{size:[i[1],i[2]],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){var u,m;if("simple-line"===e.type||"esriSLS"===e.type)switch(u=Object(o.e)(e.style,e.cap),e.cap){case"butt":m="Butt";break;case"square":m="Square";break;default:m="Round"}else u=e.dashTemplate,m=e.cim.capStyle;var h=o.d.rasterizeSimpleLine(u,m),f=Object(n.a)(h,3),g=f[0];return{size:[f[1],f[2]],image:new Uint32Array(g.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}var y,d,v;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(y=o.b.fromSimpleMarker(e),v=Object(l.c)(y)):e.cim&&"CIMHatchFill"===e.cim.type?(y=o.b.fromCIMHatchFill(e.cim),d=new s.a(y.frame.xmin,-y.frame.ymax,y.frame.xmax-y.frame.xmin,y.frame.ymax-y.frame.ymin)):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(y=o.b.fromCIMInsidePolygon(e.cim),d=new s.a(y.frame.xmin,-y.frame.ymax,y.frame.xmax-y.frame.xmin,y.frame.ymax-y.frame.ymin)):(y=e.cim,v=Object(l.c)(y)),v&&!r){var b=Object(l.a)(v),p=Object(n.a)(b,3),C=p[0],w=p[1],x=p[2];return C?{size:[w,x],image:new Uint32Array(C.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}var O=o.b.rasterize(this._rasterizationCanvas,y,d,this._resourceManager,!r),P=Object(n.a)(O,5),j=P[0],M=P[1],z=P[2],I=P[3],k=P[4];return j?{size:[M,z],image:new Uint32Array(j.buffer),sdf:!1,simplePattern:!1,anchorX:I,anchorY:k}:null}},{key:"rasterizeImageResource",value:function(e,t,r,i){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;var c=this._rasterizationCanvas.getContext("2d");r instanceof ImageData?c.putImageData(r,0,0):(r.setAttribute("width","".concat(e,"px")),r.setAttribute("height","".concat(t,"px")),c.drawImage(r,0,0,e,t));var o,s=c.getImageData(0,0,e,t),l=new Uint8Array(s.data);if(i){var m,h=Object(a.a)(i);try{for(h.s();!(m=h.n()).done;){var f=m.value;if(f&&f.oldColor&&4===f.oldColor.length&&f.newColor&&4===f.newColor.length){var g=Object(n.a)(f.oldColor,4),y=g[0],d=g[1],v=g[2],b=g[3],p=Object(n.a)(f.newColor,4),C=p[0],w=p[1],x=p[2],O=p[3];if(y===C&&d===w&&v===x&&b===O)continue;for(var P=0;P<l.length;P+=4)y===l[P]&&d===l[P+1]&&v===l[P+2]&&b===l[P+3]&&(l[P]=C,l[P+1]=w,l[P+2]=x,l[P+3]=O)}}}catch(R){h.e(R)}finally{h.f()}}for(var j=0;j<l.length;j+=4)o=l[j+3]/255,l[j]=l[j]*o,l[j+1]=l[j+1]*o,l[j+2]=l[j+2]*o;var M=l,z=e,I=t,k=512;if(z>=k||I>=k){var S=z/I;S>1?(z=k,I=Math.round(k/S)):(I=k,z=Math.round(k*S)),M=new Uint8Array(4*z*I);var _=new Uint8ClampedArray(M.buffer);Object(u.m)(l,e,t,_,z,I,!1)}return{size:[z,I],image:new Uint32Array(M.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}]),e}()}}]);