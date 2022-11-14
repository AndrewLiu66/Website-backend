(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[17],{1365:function(e,t,n){"use strict";n.r(t),n.d(t,"ElevationQuery",(function(){return z})),n.d(t,"GeometryDescriptor",(function(){return C})),n.d(t,"getFinestLodIndex",(function(){return S}));var a=n(144),r=n(145),i=n(60),o=n(6),s=n(155),l=n(142),c=n(143),u=n(154),f=n.n(u),p=n(475),h=n(159),v=n(146),m=n(163),y=n(250),d=n(347),x=n(197),b=n(297),k=n(256),O=n(180),j=(n(177),n(147),n(156)),T=n(306),g=j.a.getLogger("esri.layers.support.ElevationSampler"),w=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"queryElevation",value:function(e){return function(e,t){var n=E(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=n.elevationAt(t.x,t.y)}(e,n,t);break;case"polyline":!function(e,t,n){A.spatialReference=t.spatialReference;for(var a=e.hasM&&!e.hasZ,r=0;r<e.paths.length;r++)for(var i=e.paths[r],o=t.paths[r],s=0;s<i.length;s++){var l=i[s],c=o[s];A.x=c[0],A.y=c[1],a&&(l[3]=l[2]),l[2]=n.elevationAt(A.x,A.y)}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){A.spatialReference=t.spatialReference;for(var a=e.hasM&&!e.hasZ,r=0;r<e.points.length;r++){var i=e.points[r],o=t.points[r];A.x=o[0],A.y=o[1],a&&(i[3]=i[2]),i[2]=n.elevationAt(A.x,A.y)}e.hasZ=!0}(e,n,t)}return e}(e.clone(),this)}},{key:"on",value:function(){return q}},{key:"projectIfRequired",value:function(e,t){return E(e,t)}}]),e}(),R=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var i;Object(l.a)(this,n),(i=t.call(this)).tile=e,i.noDataValue=r,i.extent=Object(O.p)(e.tile.extent,a.spatialReference),i.extent.zmin=e.zmin,i.extent.zmax=e.zmax,i.aaExtent=e.tile.extent;var o=Object(y.c)(a.spatialReference),s=a.lodAt(e.tile.level).resolution*o;return i.demResolution={min:s,max:s},i}return Object(c.a)(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}},{key:"contains",value:function(e){var t=this.projectIfRequired(e,this.spatialReference);return!Object(v.j)(t)&&this.containsAt(t.x,t.y)}},{key:"containsAt",value:function(e,t){return Object(O.e)(this.aaExtent,e,t)}},{key:"elevationAt",value:function(e,t){if(!this.containsAt(e,t)){var n=this.extent,a="".concat(n.xmin,", ").concat(n.ymin,", ").concat(n.xmax,", ").concat(n.ymax);return g.warn("#elevationAt()","Point used to sample elevation (".concat(e,", ").concat(t,") is outside of the sampler extent (").concat(a,")")),this.noDataValue}return Object(v.r)(this.tile.sample(e,t),this.noDataValue)}}]),n}(w),_=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var i,o;Object(l.a)(this,n),i=t.call(this),"number"==typeof a?(i.noDataValue=a,o=null):(o=a,i.noDataValue=r),i.samplers=o?e.map((function(e){return new R(e,o,i.noDataValue)})):e;var s=i.samplers[0];if(s){i.extent=s.extent.clone();var c=s.demResolution,u=c.min,f=c.max;i.demResolution={min:u,max:f};for(var p=1;p<i.samplers.length;p++){var h=i.samplers[p];i.extent.union(h.extent),i.demResolution.min=Math.min(i.demResolution.min,h.demResolution.min),i.demResolution.max=Math.max(i.demResolution.max,h.demResolution.max)}}else i.extent=Object(O.p)(Object(O.g)(),o.spatialReference),i.demResolution={min:0,max:0};return i}return Object(c.a)(n,[{key:"spatialReference",get:function(){return this.extent.spatialReference}},{key:"elevationAt",value:function(e,t){var n,a=Object(i.a)(this.samplers);try{for(a.s();!(n=a.n()).done;){var r=n.value;if(r.containsAt(e,t))return r.elevationAt(e,t)}}catch(o){a.e(o)}finally{a.f()}return g.warn("#elevationAt()","Point used to sample elevation (".concat(e,", ").concat(t,") is outside of the sampler")),this.noDataValue}}]),n}(w);function E(e,t){if(Object(v.j)(e))return null;var n=e.spatialReference;if(n.equals(t))return e;var a=Object(T.d)(e,t);return a||g.error("Cannot project geometry spatial reference (wkid:".concat(n.wkid,") to elevation sampler spatial reference (wkid:").concat(t.wkid,")")),a}var A=new x.a,q={remove:function(){}},D=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(l.a)(this,e),this.tile=t,this.zmin=0,this.zmax=0,Object(v.k)(n)){var a=t.extent;this.samplerData={pixelData:n.values,width:n.width,height:n.height,safeWidth:.99999999*(n.width-1),noDataValue:n.noDataValue,dx:(n.width-1)/(a[2]-a[0]),dy:(n.width-1)/(a[3]-a[1]),x0:a[0],y1:a[3]},this.zmin=n.minValue,this.zmax=n.maxValue}}return Object(c.a)(e,[{key:"sample",value:function(e,t){if(!Object(v.j)(this.samplerData)){var n=this.samplerData,a=n.safeWidth,r=n.width,i=n.pixelData,o=n.noDataValue,s=n.dx,l=n.dy,c=n.y1,u=n.x0,f=I(l*(c-t),0,a),p=I(s*(e-u),0,a),h=Math.floor(f),m=Math.floor(p),y=h*r+m,d=y+r,x=i[y],b=i[d],k=i[y+1],O=i[d+1];if(x!==o&&b!==o&&k!==o&&O!==o){var j=p-m,T=x+(k-x)*j;return T+(b+(O-b)*j-T)*(f-h)}}}}]),e}();function I(e,t,n){return e<t?t:e>n?n:e}var z=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"queryAll",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a){var r,i,s,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=a&&a.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:return r=C.fromGeometry(n),i=!1,a&&a.returnSampleInfo||(i=!0),s=Object(o.a)(Object(o.a)(Object(o.a)({},L),a),{},{returnSampleInfo:!0}),e.next=8,this.query(t[t.length-1],r,s);case 8:return l=e.sent,e.next=11,this._queryAllContinue(t,l,s);case 11:return c=e.sent,e.abrupt("return",(c.geometry=c.geometry.export(),i&&delete c.sampleInfo,c));case 13:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"query",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a){var r,i,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&(n instanceof C||"point"===n.type||"multipoint"===n.type||"polyline"===n.type)){e.next=4;break}throw new h.a("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");case 4:return r=Object(o.a)(Object(o.a)({},L),a),i=new F(t,n.spatialReference,r),s=r.signal,e.next=7,t.load({signal:s});case 7:return e.next=9,this._createGeometryDescriptor(i,n,s);case 9:return e.next=11,this._selectTiles(i,s);case 11:return e.next=13,this._populateElevationTiles(i,s);case 13:return this._sampleGeometryWithElevation(i),e.abrupt("return",this._createQueryResult(i,s));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"createSampler",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new h.a("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return r=Object(o.a)(Object(o.a)({},L),a),e.abrupt("return",this._createSampler(t,n,r));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"createSamplerAll",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a){var r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=a&&a.ignoreInvisibleLayers?t.filter((function(e){return e.visible})):t.slice()).length){e.next=2;break}throw new h.a("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");case 2:if(n&&"extent"===n.type){e.next=4;break}throw new h.a("elevation-query:invalid-extent","Invalid or undefined extent");case 4:return r=Object(o.a)(Object(o.a)(Object(o.a)({},L),a),{},{returnSampleInfo:!0}),e.next=7,this._createSampler(t[t.length-1],n,r);case 7:return i=e.sent,e.abrupt("return",this._createSamplerAllContinue(t,n,i,r));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_createSampler",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a,r){var i,o,s,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.signal,e.next=3,t.load({signal:i});case 3:if(o=n.spatialReference,s=t.tileInfo.spatialReference,e.t0=o.equals(s),e.t0){e.next=9;break}return e.next=8,Object(k.d)([{source:o,dest:s}],{signal:i});case 8:n=Object(k.g)(n,s);case 9:return l=new V(t,n,a,r),e.next=12,this._selectTiles(l,i);case 12:return e.next=14,this._populateElevationTiles(l,i);case 14:return e.abrupt("return",new _(l.elevationTiles,l.layer.tileInfo,l.options.noDataValue));case 15:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"_createSamplerAllContinue",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a,r){var i,o,s,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.pop(),t.length){e.next=2;break}return e.abrupt("return",a);case 2:return i=a.samplers.map((function(e){return Object(O.l)(e.extent)})),e.next=5,this._createSampler(t[t.length-1],n,r,i);case 5:if(0!==(o=e.sent).samplers.length){e.next=8;break}return e.abrupt("return",a);case 8:return s=a.samplers.concat(o.samplers),l=new _(s,r.noDataValue),e.abrupt("return",this._createSamplerAllContinue(t,n,l,r));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"_queryAllContinue",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a){var r,i,o,s,l,c,u,p;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=t.pop(),i=n.geometry.coordinates,o=[],s=[],l=0;l<i.length;l++)(c=n.sampleInfo[l]).demResolution>=0?c.source||(c.source=r):t.length&&(o.push(i[l]),s.push(l));if(t.length&&0!==o.length){e.next=4;break}return e.abrupt("return",n);case 4:return u=n.geometry.clone(o),e.next=7,this.query(t[t.length-1],u,a);case 7:return p=e.sent,e.abrupt("return",(s.forEach((function(e,t){i[e].z=p.geometry.coordinates[t].z,n.sampleInfo[e].demResolution=p.sampleInfo[t].demResolution})),this._queryAllContinue(t,n,a)));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_createQueryResult",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.geometry.project(t.outSpatialReference,n);case 2:return e.t0=e.sent.export(),e.t1=t.options.noDataValue,a={geometry:e.t0,noDataValue:e.t1},e.abrupt("return",(t.options.returnSampleInfo&&(a.sampleInfo=this._extractSampleInfo(t)),t.geometry.coordinates.forEach((function(e){e.tile=null,e.elevationTile=null})),a));case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_createGeometryDescriptor",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a){var r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.layer.tileInfo.spatialReference,!(n instanceof C)){e.next=7;break}return e.next=4,n.project(i,a);case 4:r=e.sent,e.next=10;break;case 7:return e.next=9,Object(k.d)([{source:n.spatialReference,dest:i}],{signal:a});case 9:r=Object(k.g)(n,i);case 10:if(r){e.next=12;break}throw new h.a("elevation-query:spatial-reference-mismatch","Cannot query elevation in '".concat(n.spatialReference.wkid,"' on an elevation service in '").concat(i.wkid,"'"));case 12:t.geometry=C.fromGeometry(r);case 13:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_selectTiles",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.options.demResolution,"geometry"===t.type&&this._preselectOutsideLayerExtent(t),"number"!=typeof a){e.next=5;break}this._selectTilesClosestResolution(t),e.next=14;break;case 5:if("finest-contiguous"!==a){e.next=10;break}return e.next=8,this._selectTilesFinestContiguous(t,n);case 8:e.next=14;break;case 10:if("auto"===a){e.next=12;break}throw new h.a("elevation-query:invalid-dem-resolution","Invalid dem resolution value '".concat(a,'\', expected a number, "finest-contiguous" or "auto"'));case 12:return e.next=14,this._selectTilesAuto(t,n);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_preselectOutsideLayerExtent",value:function(e){if(!Object(v.j)(e.layer.fullExtent)){var t=new D(null);t.sample=function(){return e.options.noDataValue},e.outsideExtentTile=t;var n=e.layer.fullExtent;e.geometry.coordinates.forEach((function(e){var a=e.x,r=e.y;(a<n.xmin||a>n.xmax||r<n.ymin||r>n.ymax)&&(e.elevationTile=t)}))}}},{key:"_selectTilesClosestResolution",value:function(e){var t=e.layer.tileInfo,n=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(n)}},{key:"_findNearestDemResolutionLODIndex",value:function(e,t){for(var n=t/Object(y.c)(e.spatialReference),a=e.lods[0],r=0,i=1;i<e.lods.length;i++){var o=e.lods[i];Math.abs(o.resolution-n)<Math.abs(a.resolution-n)&&(a=o,r=i)}return r}},{key:"_selectTilesFinestContiguous",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S(t.layer.tileInfo,t.options.minDemResolution),e.next=3,this._selectTilesFinestContiguousAt(t,a,n);case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesFinestContiguousAt",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n,a){var r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.layer,t.selectTilesAtLOD(n),!(n<0)){e.next=3;break}return e.abrupt("return");case 3:if(i=r.tilemapCache,o=t.getTilesToFetch(),e.prev=4,!i){e.next=10;break}return e.next=8,Object(m.t)(Promise.all(o.map((function(e){return i.fetchAvailability(e.level,e.row,e.col,{signal:a})}))),a);case 8:e.next=14;break;case 10:return e.next=12,this._populateElevationTiles(t,a);case 12:if(t.allElevationTilesFetched()){e.next=14;break}throw t.clearElevationTiles(),new h.a("elevation-query:has-unavailable-tiles");case 14:e.next=21;break;case 16:return e.prev=16,e.t0=e.catch(4),Object(m.o)(e.t0),e.next=21,this._selectTilesFinestContiguousAt(t,n-1,a);case 21:case"end":return e.stop()}}),e,this,[[4,16]])})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"_populateElevationTiles",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n){var a,r,i,o,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.getTilesToFetch(),r={},i=t.options.cache,o=t.options.noDataValue,l=a.map(function(){var e=Object(s.a)(f.a.mark((function e(a){var s,l,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="".concat(t.layer.uid,":").concat(a.id,":").concat(o),l=Object(v.k)(i)?i.get(s):null,!Object(v.k)(l)){e.next=6;break}e.t0=l,e.next=9;break;case 6:return e.next=8,t.layer.fetchTile(a.level,a.row,a.col,{noDataValue:o,signal:n});case 8:e.t0=e.sent;case 9:c=e.t0,Object(v.k)(i)&&i.put(s,c),r[a.id]=new D(a,c);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Object(m.t)(Object(m.g)(l),n);case 3:t.populateElevationTiles(r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_selectTilesAuto",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n){var a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._selectTilesAutoFinest(t),this._reduceTilesForMaximumRequests(t),a=t.layer.tilemapCache){e.next=4;break}return e.abrupt("return",this._selectTilesAutoPrefetchUpsample(t,n));case 4:return r=t.getTilesToFetch(),i={},o=r.map(function(){var e=Object(s.a)(f.a.mark((function e(t){var r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:null,level:0,row:0,col:0,extent:Object(O.g)()},e.next=3,Object(p.c)(a.fetchAvailabilityUpsample(t.level,t.row,t.col,r,{signal:n}));case 3:!1===(o=e.sent).ok?Object(m.o)(o.error):i[t.id]=r;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=7,Object(m.t)(Promise.all(o),n);case 7:t.remapTiles(i);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_reduceTilesForMaximumRequests",value:function(e){var t=e.layer.tileInfo,n=0,a={},r=function(e){e.id in a?a[e.id]++:(a[e.id]=1,n++)},i=function(e){var t=a[e.id];1===t?(delete a[e.id],n--):a[e.id]=t-1};e.forEachTileToFetch(r,i);for(var o=!0;o&&(o=!1,e.forEachTileToFetch((function(a){n<=e.options.maximumAutoTileRequests||(i(a),t.upsampleTile(a)&&(o=!0),r(a))}),i),o););}},{key:"_selectTilesAutoFinest",value:function(e){var t=S(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}},{key:"_selectTilesAutoPrefetchUpsample",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.layer.tileInfo,e.next=3,this._populateElevationTiles(t,n);case 3:if(r=!1,t.forEachTileToFetch((function(e,t){a.upsampleTile(e)?r=!0:t()})),e.t0=r,!e.t0){e.next=9;break}return e.next=9,this._selectTilesAutoPrefetchUpsample(t,n);case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_sampleGeometryWithElevation",value:function(e){e.geometry.coordinates.forEach((function(t){var n=t.elevationTile,a=e.options.noDataValue;if(n){var r=n.sample(t.x,t.y);Object(v.k)(r)?a=r:t.elevationTile=null}t.z=a}))}},{key:"_extractSampleInfo",value:function(e){var t=e.layer.tileInfo,n=Object(y.c)(t.spatialReference);return e.geometry.coordinates.map((function(a){var r=-1;return a.elevationTile&&a.elevationTile!==e.outsideExtentTile&&(r=t.lodAt(a.elevationTile.tile.level).resolution*n),{demResolution:r}}))}}]),e}(),C=function(){function e(){Object(l.a)(this,e)}return Object(c.a)(e,[{key:"export",value:function(){return this._exporter(this.coordinates,this.spatialReference)}},{key:"clone",value:function(t){var n=this,a=new e;return a.geometry=this.geometry,a.spatialReference=this.spatialReference,a.coordinates=t||this.coordinates.map((function(e){return n._cloneCoordinate(e)})),a._exporter=this._exporter,a}},{key:"project",value:function(){var e=Object(s.a)(f.a.mark((function e(t,n){var a,r,i,o,s=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.spatialReference.equals(t)){e.next=2;break}return e.abrupt("return",this.clone());case 2:return e.next=4,Object(k.d)([{source:this.spatialReference,dest:t}],{signal:n});case 4:if(a=new d.a({spatialReference:this.spatialReference,points:this.coordinates.map((function(e){return[e.x,e.y]}))}),r=Object(k.g)(a,t)){e.next=7;break}return e.abrupt("return",null);case 7:return i=this.coordinates.map((function(e,t){var n=s._cloneCoordinate(e),a=r.points[t];return n.x=a[0],n.y=a[1],n})),o=this.clone(i),e.abrupt("return",(o.spatialReference=t,o));case 9:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_cloneCoordinate",value:function(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}}],[{key:"fromGeometry",value:function(t){var n=new e;if(n.geometry=t,n.spatialReference=t.spatialReference,t instanceof e)n.coordinates=t.coordinates.map((function(e){return n._cloneCoordinate(e)})),n._exporter=function(e,n){var a=t.clone(e);return a.spatialReference=n,a};else switch(t.type){case"point":var a=t,r=a.hasZ,o=a.hasM;n.coordinates=r&&o?[{x:a.x,y:a.y,z:a.z,m:a.m}]:r?[{x:a.x,y:a.y,z:a.z}]:o?[{x:a.x,y:a.y,m:a.m}]:[{x:a.x,y:a.y}],n._exporter=function(e,n){return t.hasM?new x.a(e[0].x,e[0].y,e[0].z,e[0].m,n):new x.a(e[0].x,e[0].y,e[0].z,n)};break;case"multipoint":var s=t,l=s.hasZ,c=s.hasM;n.coordinates=l&&c?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2],m:e[3]}})):l?s.points.map((function(e){return{x:e[0],y:e[1],z:e[2]}})):c?s.points.map((function(e){return{x:e[0],y:e[1],m:e[2]}})):s.points.map((function(e){return{x:e[0],y:e[1]}})),n._exporter=function(e,n){return t.hasM?new d.a({points:e.map((function(e){return[e.x,e.y,e.z,e.m]})),hasZ:!0,hasM:!0,spatiaReference:n}):new d.a(e.map((function(e){return[e.x,e.y,e.z]})),n)};break;case"polyline":var u,f=t,p=[],h=[],v=t.hasZ,m=t.hasM,y=0,k=Object(i.a)(f.paths);try{for(k.s();!(u=k.n()).done;){var O=u.value;if(h.push([y,y+O.length]),y+=O.length,v&&m){var j,T=Object(i.a)(O);try{for(T.s();!(j=T.n()).done;){var g=j.value;p.push({x:g[0],y:g[1],z:g[2],m:g[3]})}}catch(C){T.e(C)}finally{T.f()}}else if(v){var w,R=Object(i.a)(O);try{for(R.s();!(w=R.n()).done;){var _=w.value;p.push({x:_[0],y:_[1],z:_[2]})}}catch(C){R.e(C)}finally{R.f()}}else if(m){var E,A=Object(i.a)(O);try{for(A.s();!(E=A.n()).done;){var q=E.value;p.push({x:q[0],y:q[1],m:q[2]})}}catch(C){A.e(C)}finally{A.f()}}else{var D,I=Object(i.a)(O);try{for(I.s();!(D=I.n()).done;){var z=D.value;p.push({x:z[0],y:z[1]})}}catch(C){I.e(C)}finally{I.f()}}}}catch(C){k.e(C)}finally{k.f()}n.coordinates=p,n._exporter=function(e,n){var a=t.hasM?e.map((function(e){return[e.x,e.y,e.z,e.m]})):e.map((function(e){return[e.x,e.y,e.z]})),r=h.map((function(e){return a.slice(e[0],e[1])}));return new b.a({paths:r,hasM:t.hasM,hasZ:!0,spatialReference:n})}}return n}}]),e}(),M=Object(c.a)((function e(t,n){Object(l.a)(this,e),this.layer=t,this.options=n})),F=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r){var i;return Object(l.a)(this,n),(i=t.call(this,e,r)).outSpatialReference=a,i.type="geometry",i}return Object(c.a)(n,[{key:"selectTilesAtLOD",value:function(e){if(e<0)this.geometry.coordinates.forEach((function(e){return e.tile=null}));else{var t=this.layer.tileInfo,n=t.lods[e].level;this.geometry.coordinates.forEach((function(e){e.tile=t.tileAt(n,e.x,e.y)}))}}},{key:"allElevationTilesFetched",value:function(){return!this.geometry.coordinates.some((function(e){return!e.elevationTile}))}},{key:"clearElevationTiles",value:function(){var e,t=Object(i.a)(this.geometry.coordinates);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.elevationTile!==this.outsideExtentTile&&(n.elevationTile=null)}}catch(a){t.e(a)}finally{t.f()}}},{key:"populateElevationTiles",value:function(e){var t,n=Object(i.a)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var a=t.value;!a.elevationTile&&a.tile&&(a.elevationTile=e[a.tile.id])}}catch(r){n.e(r)}finally{n.f()}}},{key:"remapTiles",value:function(e){var t,n=Object(i.a)(this.geometry.coordinates);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.tile=e[a.tile.id]}}catch(r){n.e(r)}finally{n.f()}}},{key:"getTilesToFetch",value:function(){var e,t={},n=[],a=Object(i.a)(this.geometry.coordinates);try{for(a.s();!(e=a.n()).done;){var r=e.value,o=r.tile;r.elevationTile||!r.tile||t[o.id]||(t[o.id]=o,n.push(o))}}catch(s){a.e(s)}finally{a.f()}return n}},{key:"forEachTileToFetch",value:function(e){var t,n=Object(i.a)(this.geometry.coordinates);try{var a=function(){var n=t.value;n.tile&&!n.elevationTile&&e(n.tile,(function(){return n.tile=null}))};for(n.s();!(t=n.n()).done;)a()}catch(r){n.e(r)}finally{n.f()}}}]),n}(M),V=function(e){Object(a.a)(n,e);var t=Object(r.a)(n);function n(e,a,r,i){var o;return Object(l.a)(this,n),(o=t.call(this,e,r)).type="extent",o.elevationTiles=[],o.candidateTiles=[],o.fetchedCandidates=new Set,o.extent=a.intersection(e.fullExtent),o.maskExtents=i,o}return Object(c.a)(n,[{key:"selectTilesAtLOD",value:function(e,t){var n=this._maximumLodForRequests(t),a=Math.min(n,e);a<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(a)}},{key:"_maximumLodForRequests",value:function(e){var t=this.layer.tileInfo;if(!e)return t.lods.length-1;var n=this.extent;if(Object(v.j)(n))return-1;for(var a=t.lods.length-1;a>=0;a--){var r=t.lods[a],i=r.resolution*t.size[0],o=r.resolution*t.size[1];if(Math.ceil(n.width/i)*Math.ceil(n.height/o)<=e)return a}return-1}},{key:"allElevationTilesFetched",value:function(){return this.candidateTiles.length===this.elevationTiles.length}},{key:"clearElevationTiles",value:function(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}},{key:"populateElevationTiles",value:function(e){var t,n=Object(i.a)(this.candidateTiles);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=e[a.id];r&&(this.fetchedCandidates.add(a),this.elevationTiles.push(r))}}catch(o){n.e(o)}finally{n.f()}}},{key:"remapTiles",value:function(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((function(t){return e[t.id]})))}},{key:"getTilesToFetch",value:function(){return this.candidateTiles}},{key:"forEachTileToFetch",value:function(e,t){var n=this,a=this.candidateTiles;this.candidateTiles=[],a.forEach((function(a){if(n.fetchedCandidates.has(a))t&&t(a);else{var r=!1;e(a,(function(){return r=!0})),r?t&&t(a):n.candidateTiles.push(a)}})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}},{key:"_uniqueNonOverlappingTiles",value:function(e,t){var n,a={},r=[],o=Object(i.a)(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;a[s.id]?t&&t(s):(a[s.id]=s,r.push(s))}}catch(c){o.e(c)}finally{o.f()}var l=r.sort((function(e,t){return e.level-t.level}));return l.filter((function(e,n){for(var a=0;a<n;a++)if(Object(O.c)(l[a].extent,e.extent))return t&&t(e),!1;return!0}))}},{key:"_selectCandidateTilesCoveringExtentAt",value:function(e){this.candidateTiles.length=0;var t=this.extent;if(!Object(v.j)(t))for(var n=this.layer.tileInfo,a=n.lods[e],r=n.tileAt(a.level,t.xmin,t.ymin),i=a.resolution*n.size[0],o=a.resolution*n.size[1],s=Math.ceil((t.xmax-r.extent[0])/i),l=Math.ceil((t.ymax-r.extent[1])/o),c=0;c<l;c++)for(var u=0;u<s;u++){var f={id:null,level:r.level,row:r.row-c,col:r.col+u};n.updateTileInfo(f),this._tileIsMasked(f)||this.candidateTiles.push(f)}}},{key:"_tileIsMasked",value:function(e){return!!this.maskExtents&&this.maskExtents.some((function(t){return Object(O.c)(t,e.extent)}))}}]),n}(M);function S(e,t){var n=e.lods.length-1;if(t>0){var a=e.lods.findIndex((function(e){return e.resolution<t}));0===a?n=0:a>0&&(n=a-1)}return n}var L={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}}}]);