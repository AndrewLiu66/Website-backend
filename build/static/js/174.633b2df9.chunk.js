(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[174],{1035:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return I}));var a=r(5),n=r(142),i=r(143),o=r(144),c=r(145),l=r(148),s=r(188),u=r(159),p=r(218),b=r(146),d=r(260),y=r(164),O=r(187),v=r(151),f=(r(152),r(147),r(244)),j=r(189),h=r(149),_=r(191),g=r(184),m=r(272),S=r(475),k=r(824),w=r(1012),T=r(436),R=r(326),W=r(476),U=r(294),L=r(297),P=r(392),A=r(298),C=r(1013),D=r(365),M=r(266),J=r(830),N=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],B=function(e){Object(o.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(n.a)(this,r);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return Object(i.a)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(a.a)({url:e},t):e}},{key:"load",value:function(e){var t=this,r=Object(b.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(y.o).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,t=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}},{key:"readSpatialReference",value:function(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&g.a.fromJSON(e)}},{key:"writeSublayers",value:function(e,t,r,n){if(this.loaded&&e){var i=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),o=[],c=Object(a.a)({writeSublayerStructure:!1},n);i.forEach((function(e){var t=e.write({},c);o.push(t)})),o.some((function(e){return Object.keys(e).length>1}))&&(t.layers=o)}}},{key:"tileServers",get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return Object(O.M)(e).path})):null}},{key:"fetchTile",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.signal,o=this.getTileUrl(e,t,r),c={responseType:"image",signal:i,query:Object(a.a)({},this.refreshParameters)};return Object(s.default)(o,c).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,r){var n=!this.tilemapCache&&this.supportsBlankTile,i=Object(O.G)(Object(a.a)(Object(a.a)(Object(a.a)({},this.parsedUrl.query),{},{blankTile:!n&&null},this.customParameters),{},{token:this.apiKey})),o=this.tileServers;return"".concat(o&&o.length?o[t%o.length]:this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(r).concat(i?"?"+i:"")}},{key:"_fetchService",value:function(e){var t=this;return new Promise((function(r,n){if(t.sourceJSON){if(null!=t.sourceJSON.bandCount&&null!=t.sourceJSON.pixelSizeX)throw new u.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");r({data:t.sourceJSON})}else{if(!t.parsedUrl)throw new u.a("tile-layer:undefined-url","layer's url is not defined");var i=Object(D.f)(t.parsedUrl.path);if(Object(b.k)(i)&&"ImageServer"===i.serverType)throw new u.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(s.default)(t.parsedUrl.path,{query:Object(a.a)(Object(a.a)(Object(a.a)({f:"json"},t.parsedUrl.query),t.customParameters),{},{token:t.apiKey}),responseType:"json",signal:e}).then(r,n)}})).then((function(r){if(r.ssl&&(t.url=t.url.replace(/^http:/i,"https:")),t.sourceJSON=r.data,t.read(r.data,{origin:"service",url:t.parsedUrl}),10.1===t.version&&!Object(D.c)(t.url))return t._fetchServerVersion(t.url,e).then((function(e){t.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,t){if(!Object(D.b)(e))return Promise.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(s.default)(r,{query:Object(a.a)(Object(a.a)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:t}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new u.a("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}},{key:"_getDefaultAttribution",value:function(e){if(e){var t;e=e.toLowerCase();for(var r=0,a=N.length;r<a;r++)if((t=N[r]).toLowerCase().includes(e))return Object(O.C)("//static.arcgis.com/attribution/"+t)}}},{key:"_getDefaultTileServers",value:function(e){var t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),r}(Object(R.a)(Object(C.a)(Object(A.a)(Object(U.a)(Object(L.a)(Object(k.a)(Object(w.a)(Object(T.a)(Object(d.a)(Object(p.b)(Object(P.a)(Object(S.a)(Object(W.a)(m.a))))))))))))));Object(l.a)([Object(v.b)({readOnly:!0})],B.prototype,"attributionDataUrl",null),Object(l.a)([Object(v.b)({type:["show","hide","hide-children"]})],B.prototype,"listMode",void 0),Object(l.a)([Object(v.b)({json:{read:!0,write:!0}})],B.prototype,"blendMode",void 0),Object(l.a)([Object(v.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],B.prototype,"isReference",void 0),Object(l.a)([Object(v.b)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],B.prototype,"operationalLayerType",void 0),Object(l.a)([Object(v.b)({type:Boolean})],B.prototype,"resampling",void 0),Object(l.a)([Object(v.b)()],B.prototype,"sourceJSON",void 0),Object(l.a)([Object(v.b)({type:g.a})],B.prototype,"spatialReference",void 0),Object(l.a)([Object(j.a)("spatialReference",["spatialReference","tileInfo"])],B.prototype,"readSpatialReference",null),Object(l.a)([Object(v.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],B.prototype,"path",void 0),Object(l.a)([Object(v.b)({readOnly:!0})],B.prototype,"sublayers",void 0),Object(l.a)([Object(_.a)("sublayers",{layers:{type:[J.a]}})],B.prototype,"writeSublayers",null),Object(l.a)([Object(v.b)({json:{read:!1,write:!1}})],B.prototype,"popupEnabled",void 0),Object(l.a)([Object(v.b)()],B.prototype,"tileServers",null),Object(l.a)([Object(f.a)("tileServers")],B.prototype,"castTileServers",null),Object(l.a)([Object(v.b)({readOnly:!0,json:{read:!1}})],B.prototype,"type",void 0),Object(l.a)([Object(v.b)(M.o)],B.prototype,"url",void 0),(B=Object(l.a)([Object(h.a)("esri.layers.TileLayer")],B)).prototype.fetchTile.__isDefault__=!0;var I=B}}]);