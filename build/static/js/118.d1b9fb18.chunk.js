(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[118],{592:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return U}));var a=l(60),r=l(6),n=l(142),o=l(143),i=l(144),s=l(145),c=l(148),u=(l(177),l(186)),p=l(159),b=l(272),y=l(267),j=l(183),v=l(151),O=(l(153),l(147),l(150),l(190)),f=l(149),d=l(192),h=l(286),m=l(339),w=l(304),g=l(307),T=l(401),S=l(308),R=l(567),x=l(296),P=l(593),k=l(176),I=l(185),M=l(197),E=function(e){Object(i.a)(l,e);var t=Object(s.a)(l);function l(){var e;Object(n.a)(this,l);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).copyright="",e.fullExtent=new k.a(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,I.a.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=I.a.WebMercator,e.subDomains=null,e.tileInfo=new x.a({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new M.a({x:-20037508.342787,y:20037508.342787,spatialReference:I.a.WebMercator}),spatialReference:I.a.WebMercator,lods:[new R.a({level:0,scale:591657527.591555,resolution:156543.033928}),new R.a({level:1,scale:295828763.795777,resolution:78271.5169639999}),new R.a({level:2,scale:147914381.897889,resolution:39135.7584820001}),new R.a({level:3,scale:73957190.948944,resolution:19567.8792409999}),new R.a({level:4,scale:36978595.474472,resolution:9783.93962049996}),new R.a({level:5,scale:18489297.737236,resolution:4891.96981024998}),new R.a({level:6,scale:9244648.868618,resolution:2445.98490512499}),new R.a({level:7,scale:4622324.434309,resolution:1222.99245256249}),new R.a({level:8,scale:2311162.217155,resolution:611.49622628138}),new R.a({level:9,scale:1155581.108577,resolution:305.748113140558}),new R.a({level:10,scale:577790.554289,resolution:152.874056570411}),new R.a({level:11,scale:288895.277144,resolution:76.4370282850732}),new R.a({level:12,scale:144447.638572,resolution:38.2185141425366}),new R.a({level:13,scale:72223.819286,resolution:19.1092570712683}),new R.a({level:14,scale:36111.909643,resolution:9.55462853563415}),new R.a({level:15,scale:18055.954822,resolution:4.77731426794937}),new R.a({level:16,scale:9027.977411,resolution:2.38865713397468}),new R.a({level:17,scale:4513.988705,resolution:1.19432856685505}),new R.a({level:18,scale:2256.994353,resolution:.597164283559817}),new R.a({level:19,scale:1128.497176,resolution:.298582141647617}),new R.a({level:20,scale:564.248588,resolution:.14929107082380833}),new R.a({level:21,scale:282.124294,resolution:.07464553541190416}),new R.a({level:22,scale:141.062147,resolution:.03732276770595208}),new R.a({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return Object(o.a)(l,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(r.a)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,l=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var l=new j.a(t.urlTemplate);!(t.subDomains&&t.subDomains.length>0)&&l.authority.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new p.a("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(l),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,l=Object(a.a)(this.tileInfo.lods);try{for(l.s();!(t=l.n()).done;){var r=t.value;e[r.level]=r.levelValue||r.level}}catch(n){l.e(n)}finally{l.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&I.a.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,l=this.subDomains,r=new j.a(t),n=r.scheme?r.scheme+"://":"//",o=n+r.authority+"/";if(r.authority.includes("{subDomain}")){if(l&&l.length>0&&r.authority.split(".").length>1){var i,s=Object(a.a)(l);try{for(s.s();!(i=s.n()).done;){var c=i.value;e.push(n+r.authority.replace(/\{subDomain\}/gi,c)+"/")}}catch(u){s.e(u)}finally{s.f()}}}else e.push(o);return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new j.a(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(l.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&Object(j.y)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=Object(j.F)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,l){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=a.signal,o=this.getTileUrl(e,t,l),i={responseType:"image",signal:n,query:Object(r.a)({},this.refreshParameters)};return Object(u.default)(o,i).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,l){var a=this.levelValues[e];return this.tileServers[t%this.tileServers.length]+Object(y.c)(this.urlPath,{level:a,z:a,col:l,x:l,row:t,y:t})}}]),l}(Object(m.a)(Object(T.a)(Object(S.a)(Object(w.a)(Object(g.a)(Object(b.a)(h.a)))))));Object(c.a)([Object(v.b)({type:String,value:"",json:{write:!0}})],E.prototype,"copyright",void 0),Object(c.a)([Object(v.b)({type:k.a,json:{write:!0},nonNullable:!0})],E.prototype,"fullExtent",void 0),Object(c.a)([Object(v.b)({readOnly:!0,json:{read:!1,write:!1}})],E.prototype,"legendEnabled",void 0),Object(c.a)([Object(v.b)({type:["show","hide"]})],E.prototype,"listMode",void 0),Object(c.a)([Object(v.b)({json:{read:!0,write:!0}})],E.prototype,"blendMode",void 0),Object(c.a)([Object(v.b)()],E.prototype,"levelValues",null),Object(c.a)([Object(v.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],E.prototype,"isReference",void 0),Object(c.a)([Object(v.b)({type:["WebTiledLayer"],value:"WebTiledLayer"})],E.prototype,"operationalLayerType",void 0),Object(c.a)([Object(v.b)({readOnly:!0,json:{read:!1,write:!1}})],E.prototype,"popupEnabled",void 0),Object(c.a)([Object(v.b)({type:I.a})],E.prototype,"spatialReference",void 0),Object(c.a)([Object(O.a)("spatialReference",["spatialReference","fullExtent.spatialReference"])],E.prototype,"readSpatialReference",null),Object(c.a)([Object(v.b)({type:[String],json:{write:!0}})],E.prototype,"subDomains",void 0),Object(c.a)([Object(v.b)({type:x.a,json:{write:!0}})],E.prototype,"tileInfo",void 0),Object(c.a)([Object(v.b)({readOnly:!0})],E.prototype,"tileServers",null),Object(c.a)([Object(v.b)({json:{read:!1}})],E.prototype,"type",void 0),Object(c.a)([Object(v.b)()],E.prototype,"urlPath",null),Object(c.a)([Object(v.b)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],E.prototype,"urlTemplate",void 0),Object(c.a)([Object(O.a)("urlTemplate",["urlTemplate","templateUrl"])],E.prototype,"readUrlTemplate",null),Object(c.a)([Object(d.a)("urlTemplate",{templateUrl:{type:String}})],E.prototype,"writeUrlTemplate",null),Object(c.a)([Object(v.b)({type:P.a,json:{write:!0}})],E.prototype,"wmtsInfo",void 0);var U=E=Object(c.a)([Object(f.a)("esri.layers.WebTileLayer")],E)},593:function(e,t,l){"use strict";l.d(t,"a",(function(){return y}));var a,r=l(142),n=l(143),o=l(144),i=l(145),s=l(148),c=l(160),u=l(161),p=l(151),b=(l(150),l(149)),y=a=function(e){Object(o.a)(l,e);var t=Object(i.a)(l);function l(e){return Object(r.a)(this,l),t.call(this,e)}return Object(n.a)(l,[{key:"clone",value:function(){return new a({customLayerParameters:Object(u.a)(this.customLayerParameters),customParameters:Object(u.a)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),l}(c.a);Object(s.a)([Object(p.b)({json:{type:Object,write:!0}})],y.prototype,"customLayerParameters",void 0),Object(s.a)([Object(p.b)({json:{type:Object,write:!0}})],y.prototype,"customParameters",void 0),Object(s.a)([Object(p.b)({type:String,json:{write:!0}})],y.prototype,"layerIdentifier",void 0),Object(s.a)([Object(p.b)({type:String,json:{write:!0}})],y.prototype,"tileMatrixSet",void 0),Object(s.a)([Object(p.b)({type:String,json:{write:!0}})],y.prototype,"url",void 0),y=a=Object(s.a)([Object(b.a)("esri.layer.support.WMTSLayerInfo")],y)}}]);