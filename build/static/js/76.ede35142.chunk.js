(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[76],{483:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(60),i=r(142),a=r(143),s=r(146),u=function(){function e(t){Object(i.a)(this,e),this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}return Object(a.a)(e,[{key:"entries",get:function(){return this._buffer}},{key:"enqueue",value:function(e){if(this.size===this.maxSize){var t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return this._buffer[(this._start+this.size++)%this.maxSize]=e,null}},{key:"dequeue",value:function(){if(0===this.size)return null;var e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}},{key:"peek",value:function(){return 0===this.size?null:this._buffer[this._start]}},{key:"find",value:function(e){if(0===this.size)return null;var t,r=Object(n.a)(this._buffer);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(Object(s.k)(i)&&e(i))return i}}catch(a){r.e(a)}finally{r.f()}return null}},{key:"clear",value:function(e){for(var t=this.dequeue();Object(s.k)(t);)e&&e(t),t=this.dequeue()}}]),e}()},484:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return C})),r.d(t,"c",(function(){return x})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return k}));var n=r(155),i=r(154),a=r.n(i),s=r(200),u=r(146),o=r(250),c=r(537),l=r(168),d=r(285),f=r(182),h=(r(346),r(189)),p=r(215),y=r(278),v=new s.a({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),b=Object.freeze({}),_=new p.a,g=new p.a,m=new p.a,I={esriGeometryPoint:h.m,esriGeometryPolyline:h.o,esriGeometryPolygon:h.n,esriGeometryMultipoint:h.l};function k(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if(Object(u.j)(t))return null;var a=e.hasZ&&n,s=e.hasM&&i;if(r){var o=Object(h.u)(m,t,e.hasZ,e.hasM,"esriGeometryPoint",r,n,i);return Object(h.m)(o,a,s)}return Object(h.m)(t,a,s)}function x(e,t,r,n,i,a){var s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r,c=t&&s,l=r&&o,d=Object(u.k)(n)?"coords"in n?n:n.geometry:null;if(Object(u.j)(d))return null;if(i){var f=Object(h.q)(g,d,t,r,e,i,s,o);return a&&(f=Object(h.u)(m,f,c,l,e,a)),I[e](f,c,l)}if(a){var p=Object(h.u)(m,d,t,r,e,a,s,o);return I[e](p,c,l)}return Object(h.x)(_,d,t,r,s,o),I[e](_,c,l)}function j(e,t,r){return O.apply(this,arguments)}function O(){return(O=Object(n.a)(a.a.mark((function e(t,r,n){var i,s,u,o,c,l,d,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.outFields,s=t.orderByFields,u=t.groupByFieldsForStatistics,o=t.outStatistics,i)for(c=0;c<i.length;c++)i[c]=i[c].trim();if(s)for(l=0;l<s.length;l++)s[l]=s[l].trim();if(u)for(d=0;d<u.length;d++)u[d]=u[d].trim();if(o)for(f=0;f<o.length;f++)o[f].onStatisticField&&(o[f].onStatisticField=o[f].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),S(t,r,n)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,r){return w.apply(this,arguments)}function w(){return(w=Object(n.a)(a.a.mark((function e(t,r,n){var i,s,o,f,h,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(i=t.where,t.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||r&&r===i)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,A(t);case 7:return s=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(o=t.geometry.spatialReference,(s=Object(c.a)(s)).spatialReference=o),t.geometry=s,e.next=12,Object(y.a)(s.spatialReference,n);case 12:return e.next=14,Object(d.a)(Object(l.a)(s));case 14:if(f=e.sent[0],!Object(u.j)(f)){e.next=17;break}throw b;case 17:return h=f.toJSON(),e.next=20,Object(y.b)(h,h.spatialReference,n);case 20:if(p=e.sent){e.next=23;break}throw b;case 23:return e.abrupt("return",(p.spatialReference=n,t.geometry=p,t));case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return F.apply(this,arguments)}function F(){return(F=Object(n.a)(a.a.mark((function e(t){var r,n,i,s,u,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.geometry,n=t.distance,i=t.units,null!=n&&!("vertexAttributes"in r)){e.next=3;break}return e.abrupt("return",r);case 3:if(s=r.spatialReference,u=i?v.fromJSON(i):Object(o.e)(s),!s||!Object(f.h)(s)&&!Object(f.p)(s)){e.next=9;break}e.t0=r,e.next=12;break;case 9:return e.next=11,Object(y.a)(s,f.b).then((function(){return Object(y.b)(r,f.b)}));case 11:e.t0=e.sent;case 12:return c=e.t0,e.next=15,R();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(c.spatialReference,c,n,u));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return T.apply(this,arguments)}function T(){return(T=Object(n.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(6),r.e(16)]).then(r.bind(null,526));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return e&&E in e?JSON.parse(JSON.stringify(e,G)):e}var E="_geVersion",G=function(e,t){return e!==E?t:void 0}},509:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r(155),i=r(60),a=r(142),s=r(143),u=r(154),o=r.n(u),c=r(159),l=r(156),d=r(146),f=r(180),h=r(206),p=r(659),y=r(632),v=r(484),b=r(254),_=r(844),g=l.a.getLogger("esri.views.2d.layers.features.support.whereUtils"),m={getAttribute:function(e,t){return e.field(t)}};function I(e,t){return k.apply(this,arguments)}function k(){return(k=Object(n.a)(o.a.mark((function e(t,n){var i,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(4).then(r.bind(null,434));case 2:return i=e.sent,e.prev=3,(a=i.WhereClause.create(t,n)).isStandardized||(s=new c.a("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",a),g.error(s)),e.abrupt("return",(function(e){var t=e.readArcadeFeature();return a.testFeature(t,m)}));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",(g.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),function(e){return!0}));case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}var x=l.a.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),j=function(){function e(t){Object(a.a)(this,e),this._geometryBounds=Object(f.g)(),this._idToVisibility=new Map,this._serviceInfo=t}return Object(s.a)(e,[{key:"hash",get:function(){return this._hash}},{key:"check",value:function(e){return this._applyFilter(e)}},{key:"clear",value:function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}},{key:"invalidate",value:function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))}},{key:"setKnownIds",value:function(e){var t,r=Object(i.a)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._idToVisibility.set(n,1)}}catch(a){r.e(a)}finally{r.f()}}},{key:"setTrue",value:function(e){var t=this,r=[],n=[],i=new Set(e);return this._idToVisibility.forEach((function(e,a){var s=!!(1&t._idToVisibility.get(a)),u=i.has(a);!s&&u?r.push(a):s&&!u&&n.push(a),t._idToVisibility.set(a,u?3:0)})),{show:r,hide:n}}},{key:"createQuery",value:function(){var e=this.geometry,t=this.spatialRel,r=this.where,n=this.timeExtent,i=this.objectIds;return b.a.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:n,objectIds:i})}},{key:"update",value:function(){var e=Object(n.a)(o.a.mark((function e(t,r){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._hash=JSON.stringify(t),e.next=3,Object(v.e)(t,null,r);case 3:return n=e.sent,e.next=6,Promise.all([this._setGeometryFilter(n),this._setIdFilter(n),this._setAttributeFilter(n),this._setTimeFilter(n)]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_setAttributeFilter",value:function(){var e=Object(n.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.where){e.next=2;break}return e.abrupt("return",(this._clause=null,void(this.where=null)));case 2:return e.next=4,I(t.where,this._serviceInfo.fieldsIndex);case 4:this._clause=e.sent,this.where=t.where;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setIdFilter",value:function(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}},{key:"_setGeometryFilter",value:function(){var e=Object(n.a)(o.a.mark((function e(t){var r,n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.geometry){e.next=2;break}return e.abrupt("return",(this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null)));case 2:return r=t.geometry,n=t.spatialRel||"esriSpatialRelIntersects",e.next=6,Object(p.c)(n,r,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);case 6:i=e.sent,Object(h.a)(this._geometryBounds,r),this._spatialQueryOperator=i,this.geometry=r,this.spatialRel=n;case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setTimeFilter",value:function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(y.b)(this._serviceInfo.timeInfo,e.timeExtent,_.b);else{var t=new c.a("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);x.error(t)}}},{key:"_applyFilter",value:function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}},{key:"_filterByExpression",value:function(e){return!this.where||this._clause(e)}},{key:"_filterById",value:function(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}},{key:"_filterByGeometry",value:function(e){if(!this.geometry)return!0;var t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}},{key:"_filterByTime",value:function(e){return!!Object(d.j)(this._timeOperator)||this._timeOperator(e)}},{key:"_resetAllHiddenIds",value:function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,n){1&r||(e._idToVisibility.set(n,1),t.push(n))})),t}}]),e}()},632:function(e,t,r){"use strict";function n(e,t){if(!e)return null;var r=t.featureAdapter,n=e.startTimeField,i=e.endTimeField,a=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(n&&i)t.forEach((function(e){var t=r.getAttribute(e,n),u=r.getAttribute(e,i);null==t||isNaN(t)||(a=Math.min(a,t)),null==u||isNaN(u)||(s=Math.max(s,u))}));else{var u=n||i;t.forEach((function(e){var t=r.getAttribute(e,u);null==t||isNaN(t)||(a=Math.min(a,t),s=Math.max(s,t))}))}return{start:a,end:s}}function i(e,t,r){if(!t||!e)return null;var n=e.startTimeField,i=e.endTimeField;if(!n&&!i)return null;var a=t.start,s=t.end;return null===a&&null===s?null:void 0===a&&void 0===s?function(){return!1}:n&&i?function(e,t,r,n,i){return null!=n&&null!=i?function(a){var s=e.getAttribute(a,t),u=e.getAttribute(a,r);return(null==s||s<=i)&&(null==u||u>=n)}:null!=n?function(t){var i=e.getAttribute(t,r);return null==i||i>=n}:null!=i?function(r){var n=e.getAttribute(r,t);return null==n||n<=i}:void 0}(r,n,i,a,s):function(e,t,r,n){return null!=r&&null!=n&&r===n?function(n){return e.getAttribute(n,t)===r}:null!=r&&null!=n?function(i){var a=e.getAttribute(i,t);return a>=r&&a<=n}:null!=r?function(n){return e.getAttribute(n,t)>=r}:null!=n?function(r){return e.getAttribute(r,t)<=n}:void 0}(r,n||i,a,s)}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}))},659:function(e,t,r){"use strict";r.d(t,"a",(function(){return R})),r.d(t,"b",(function(){return A})),r.d(t,"c",(function(){return w}));var n=r(60),i=r(155),a=r(154),s=r.n(a),u=r(159),o=r(491),c=r(268);var l=r(168),d=r(182);function f(e,t){return e?t?4:3:t?3:2}function h(e,t,r,i,a){if(!e)return!1;var s,u=f(t,r),o=e.coords,c=e.lengths,l=!1,d=0,h=Object(n.a)(c);try{for(h.s();!(s=h.n()).done;){var y=s.value;l=p(l,o,u,d,y,i,a),d+=y*u}}catch(v){h.e(v)}finally{h.f()}return l}function p(e,t,r,n,i,a,s){for(var u=e,o=n,c=n,l=n+i*r;c<l;c+=r){(o=c+r)===l&&(o=n);var d=t[c],f=t[c+1],h=t[o],p=t[o+1];(f<s&&p>=s||p<s&&f>=s)&&d+(s-f)/(p-f)*(h-d)<a&&(u=!u)}return u}var y=r(189),v=r(215),b=r(278),_=r(484),g="feature-store:unsupported-query",m={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},I={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},k={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},x={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function j(e){return!0===I[e]}function O(e){return!0===k[Object(l.c)(e)]}function S(e){return!0===x[e]}function w(e,t,n,i,a){if(Object(l.g)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var s=Object(y.g)(new v.a,t,!1,!1);return Promise.resolve((function(e){return function(e,t,r,n){return h(e,t,r,n.coords[0],n.coords[1])}(s,!1,!1,e)}))}if(Object(l.g)(t)&&"esriGeometryMultipoint"===n){var u=Object(y.g)(new v.a,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((function(e){return function(e,t,r,n,i,a){var s=f(i,a),u=n.coords,o=n.lengths;if(!o)return!1;for(var c=0,l=0;c<o.length;c++,l+=s)if(!h(e,t,r,u[l],u[l+1]))return!1;return!0}(u,!1,!1,e,i,a)}))}if(Object(l.d)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((function(e){return Object(o.e)(t,Object(_.c)(n,i,a,e))}));if(Object(l.d)(t)&&"esriGeometryMultipoint"===n&&"esriSpatialRelContains"===e)return Promise.resolve((function(e){return Object(o.d)(t,Object(_.c)(n,i,a,e))}));if(Object(l.d)(t)&&"esriSpatialRelIntersects"===e){var d=function(e){return"mesh"===e?c.a:Object(c.b)(e)}(n);return Promise.resolve((function(e){return d(t,Object(_.c)(n,i,a,e))}))}return Promise.all([r.e(6),r.e(16)]).then(r.bind(null,526)).then((function(r){var s=r[m[e]].bind(null,t.spatialReference,t);return function(e){return s(Object(_.c)(n,i,a,e))}}))}function A(e,t,r){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(s.a.mark((function e(t,r,n){var i,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.spatialRel,!(a=t.geometry)){e.next=11;break}if(j(i)){e.next=4;break}throw new u.a(g,"Unsupported query spatial relationship",{query:t});case 4:if(!Object(d.l)(a.spatialReference)||!Object(d.l)(n)){e.next=11;break}if(O(a)){e.next=7;break}throw new u.a(g,"Unsupported query geometry type",{query:t});case 7:if(S(r)){e.next=9;break}throw new u.a(g,"Unsupported layer geometry type",{query:t});case 9:if(!t.outSR){e.next=11;break}return e.abrupt("return",Object(b.a)(t.geometry&&t.geometry.spatialReference,t.outSR));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){if(Object(l.d)(e))return!0;if(Object(l.g)(e)){var t,r=Object(n.a)(e.rings);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}}catch(a){r.e(a)}finally{r.f()}return!0}return!1}},671:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r(6),i=r(60),a=r(155),s=r(142),u=r(143),o=r(154),c=r.n(o),l=r(147),d=r(146),f=r(372),h=r(261),p=r(156);var y=r.e(183).then(r.bind(null,1332)),v=function(){function e(t,r){Object(s.a)(this,e),this._canCacheExpressionValue=!1,this._sourceInfo=t,this._storage=r,this._bitsets={computed:r.getBitset(r.createBitset())}}return Object(u.a)(e,[{key:"storage",get:function(){return this._storage}},{key:"invalidate",value:function(){this._bitsets.computed.clear()}},{key:"updateSchema",value:function(){var e=Object(a.a)(c.a.mark((function e(t,r){var n,i,a,s,u,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(f.a)(this._schema,r),this._schema=r,r&&!Object(d.j)(n)&&Object(f.b)(n,"attributes")){e.next=3;break}return e.abrupt("return");case 3:Object(l.a)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",n),this._bitsets.computed.clear(),t.targets[r.name]=!0,i=r.attributes,a=[],s=[],e.t0=c.a.keys(i);case 6:if((e.t1=e.t0()).done){e.next=20;break}u=e.t1.value,o=i[u],e.t2=o.type,e.next="field"===e.t2?12:"expression"===e.t2?13:"label-expression"===e.t2?15:"statistic"===e.t2?17:18;break;case 12:return e.abrupt("break",18);case 13:return a.push(this._createArcadeComputedField(o)),e.abrupt("break",18);case 15:return a.push(this._createLabelArcadeComputedField(o)),e.abrupt("break",18);case 17:s.push(o);case 18:e.next=6;break;case 20:return e.next=22,Promise.all(a);case 22:this._computedFields=e.sent,this._canCacheExpressionValue=!this._computedFields.some((function(e){return"expression"===e.type&&e.expression.referencesScale()})),this._statisticFields=s;case 25:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"setComputedAttributes",value:function(e,t,r,n){var a=this._bitsets.computed;if(!this._canCacheExpressionValue||!a.has(r)){a.set(r);var s,u=Object(i.a)(this._computedFields);try{for(u.s();!(s=u.n()).done;){var o=s.value,c=this._evaluateField(t,o,n);switch(o.resultType){case"numeric":e.setComputedNumericAtIndex(r,o.fieldIndex,c);break;case"string":e.setComputedStringAtIndex(r,o.fieldIndex,c)}}}catch(l){u.e(l)}finally{u.f()}}}},{key:"_createArcadeComputedField",value:function(){var e=Object(a.a)(c.a.mark((function e(t){var r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex,e.t0=n.a,e.t1=Object(n.a)({},t),e.t2={},e.next=6,Object(h.d)(t.valueExpression,r,i);case 6:return e.t3=e.sent,e.t4={expression:e.t3},e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t4));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createLabelArcadeComputedField",value:function(){var e=Object(a.a)(c.a.mark((function e(t){var r,i,a,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex,e.next=4,y;case 4:return a=e.sent,s=a.createLabelFunction,e.next=8,s(t.label,i,r);case 8:return u=e.sent,e.abrupt("return",Object(n.a)(Object(n.a)({},t),{},{builder:u}));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_evaluateField",value:function(e,t,r){switch(t.type){case"label-expression":var i=e.readArcadeFeature();return t.builder.evaluate(i)||"";case"expression":return function(e,t,r){e.referencesGeometry();var i=t.readArcadeFeature();try{return e.evaluate(Object(n.a)(Object(n.a)({},r),{},{$feature:i}))}catch(a){return p.a.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}(t.expression,e,{$view:{scale:r}})}}}]),e}()},728:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(142),i=r(143),a=r(144),s=r(145),u=r(303),o=function(e){Object(a.a)(r,e);var t=Object(s.a)(r);function r(e,i){var a;return Object(n.a)(this,r),(a=t.call(this,u.a.createInstance(),e.fullSchema()))._currentIndex=-1,a._reader=e,a._indices=i,a}return Object(i.a)(r,[{key:"hasNext",get:function(){return this._currentIndex+1<this._indices.length}},{key:"getSize",value:function(){return this._indices.length}},{key:"getCursor",value:function(){return this.copy()}},{key:"copy",value:function(){var e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}},{key:"next",value:function(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}},{key:"_nextIndex",value:function(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}},{key:"setArcadeSpatialReference",value:function(e){this._reader.setArcadeSpatialReference(e)}},{key:"attachStorage",value:function(e){this._reader.attachStorage(e)}},{key:"geometryType",get:function(){return this._reader.geometryType}},{key:"hasFeatures",get:function(){return this._reader.hasFeatures}},{key:"exceededTransferLimit",get:function(){return this._reader.exceededTransferLimit}},{key:"hasZ",get:function(){return this._reader.hasZ}},{key:"hasM",get:function(){return this._reader.hasM}},{key:"getStorage",value:function(){return this._reader.getStorage()}},{key:"getComputedNumeric",value:function(e){return this._reader.getComputedNumericAtIndex(0)}},{key:"setComputedNumeric",value:function(e,t){return this._reader.setComputedNumericAtIndex(t,0)}},{key:"getComputedString",value:function(e){return this._reader.getComputedStringAtIndex(0)}},{key:"setComputedString",value:function(e,t){return this._reader.setComputedStringAtIndex(0,t)}},{key:"getComputedNumericAtIndex",value:function(e){return this._reader.getComputedNumericAtIndex(e)}},{key:"setComputedNumericAtIndex",value:function(e,t){this._reader.setComputedNumericAtIndex(e,t)}},{key:"getComputedStringAtIndex",value:function(e){return this._reader.getComputedStringAtIndex(e)}},{key:"setComputedStringAtIndex",value:function(e,t){return this._reader.setComputedStringAtIndex(e,t)}},{key:"transform",value:function(e,t,r,n){var i=this.copy();return i._reader=this._reader.transform(e,t,r,n),i}},{key:"readAttribute",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._reader.readAttribute(e,t)}},{key:"readAttributes",value:function(){return this._reader.readAttributes()}},{key:"joinAttributes",value:function(e){return this._reader.joinAttributes(e)}},{key:"readArcadeFeature",value:function(){return this._reader.readArcadeFeature()}},{key:"geometry",value:function(){return this._reader.geometry()}},{key:"field",value:function(e){return this.readAttribute(e,!0)}},{key:"hasField",value:function(e){return this._reader.hasField(e)}},{key:"setField",value:function(e,t){return this._reader.setField(e,t)}},{key:"keys",value:function(){return this._reader.keys()}},{key:"castToText",value:function(){return this._reader.castToText()}},{key:"getQuantizationTransform",value:function(){return this._reader.getQuantizationTransform()}},{key:"getFieldNames",value:function(){return this._reader.getFieldNames()}},{key:"getAttributeHash",value:function(){return this._reader.getAttributeHash()}},{key:"getObjectId",value:function(){return this._reader.getObjectId()}},{key:"getDisplayId",value:function(){return this._reader.getDisplayId()}},{key:"setDisplayId",value:function(e){return this._reader.setDisplayId(e)}},{key:"getGroupId",value:function(){return this._reader.getGroupId()}},{key:"setGroupId",value:function(e){return this._reader.setGroupId(e)}},{key:"getXHydrated",value:function(){return this._reader.getXHydrated()}},{key:"getYHydrated",value:function(){return this._reader.getYHydrated()}},{key:"getX",value:function(){return this._reader.getX()}},{key:"getY",value:function(){return this._reader.getY()}},{key:"setIndex",value:function(e){return this._reader.setIndex(e)}},{key:"getIndex",value:function(){return this._reader.getIndex()}},{key:"readLegacyFeature",value:function(){return this._reader.readLegacyFeature()}},{key:"readOptimizedFeature",value:function(){return this._reader.readOptimizedFeature()}},{key:"readLegacyPointGeometry",value:function(){return this._reader.readLegacyPointGeometry()}},{key:"readLegacyGeometry",value:function(){return this._reader.readLegacyGeometry()}},{key:"readLegacyCentroid",value:function(){return this._reader.readLegacyCentroid()}},{key:"readGeometryArea",value:function(){return this._reader.readGeometryArea()}},{key:"readUnquantizedGeometry",value:function(){return this._reader.readUnquantizedGeometry()}},{key:"readHydratedGeometry",value:function(){return this._reader.readHydratedGeometry()}},{key:"readGeometry",value:function(){return this._reader.readGeometry()}},{key:"readCentroid",value:function(){return this._reader.readCentroid()}},{key:"_readAttribute",value:function(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}},{key:"_readAttributes",value:function(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}],[{key:"from",value:function(e,t){return new r(e.copy(),t)}}]),r}(u.a)},844:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return _}));var n=r(60),i=r(142),a=r(143),s=r(144),u=r(145),o=r(483),c=r(253),l=(r(147),r(146)),d=r(445),f=r(418),h=r(671),p=r(728);function y(e,t){return e<<16|t}function v(e){return(4294901760&e)>>>16}function b(e){return 65535&e}var _={getObjectId:function(e){return e.getObjectId()},getAttributes:function(e){return e.readAttributes()},getAttribute:function(e,t){return e.readAttribute(t)},cloneWithGeometry:function(e,t){return e},getGeometry:function(e){return e.readHydratedGeometry()},getCentroid:function(e,t){return e.readCentroid()}},g=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e,n,a){var s;return Object(i.a)(this,r),(s=t.call(this,e,n)).featureAdapter=_,s.events=new c.a,s._featureSetsByInstance=new Map,s._objectIdToDisplayId=new Map,s._spatialIndexInvalid=!0,s._indexSearchCache=new o.a(50),s._index=Object(d.a)(9,(function(e){return{minX:s._storage.getXMin(e),minY:s._storage.getYMin(e),maxX:s._storage.getXMax(e),maxY:s._storage.getYMax(e)}})),s.mode=a,s}return Object(a.a)(r,[{key:"storeStatistics",get:function(){var e=0,t=0,r=0;return this.forEach((function(n){var i=n.readGeometry();i&&(t+=i.isPoint?1:i.lengths.reduce((function(e,t){return e+t}),0),r+=i.isPoint?1:i.lengths.length,e+=1)})),{featureCount:e,vertexCount:t,ringCount:r}}},{key:"hasInstance",value:function(e){return this._featureSetsByInstance.has(e)}},{key:"onTileData",value:function(e,t){if(Object(l.j)(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){for(var r=t.addOrUpdate.getCursor();r.next();){var n=r.getDisplayId();this.setComputedAttributes(this._storage,r,n,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);for(var i=t.addOrUpdate.getCursor();i.next();)this._insertFeature(i,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}},{key:"search",value:function(e){var t=this;this._rebuildIndex();var r=e.id,i=this._indexSearchCache.find((function(e){return e.tileId===r}));if(Object(l.k)(i))return i.readers;var a,s=new Map,u=this._searchIndex(e.bounds),o=[],c=Object(n.a)(u);try{for(c.s();!(a=c.n()).done;){var d=a.value,f=this._storage.getInstanceId(d),h=v(f),y=b(f);s.has(h)||s.set(h,[]),s.get(h).push(y)}}catch(_){c.e(_)}finally{c.f()}return s.forEach((function(e,r){var n=t._featureSetsByInstance.get(r);o.push(p.a.from(n,e))})),this._indexSearchCache.enqueue({tileId:r,readers:o}),o}},{key:"insert",value:function(e){for(var t=e.getCursor(),r=this._storage;t.next();){var n,i=y(t.instance,t.getIndex()),a=t.getObjectId(),s=null!==(n=this._objectIdToDisplayId.get(a))&&void 0!==n?n:this._storage.createDisplayId();t.setDisplayId(s),r.setInstanceId(s,i),this._objectIdToDisplayId.set(a,s)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}},{key:"remove",value:function(e){var t=this._objectIdToDisplayId.get(e);if(t){var r=this._storage.getInstanceId(t),n=b(r),i=v(r),a=this._featureSetsByInstance.get(i);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),a.removeAtIndex(n),a.isEmpty&&this._featureSetsByInstance.delete(i),this._spatialIndexInvalid=!0}}},{key:"toArray",value:function(){var e=new Array;return this.forEach((function(t){return e.push(t)})),e}},{key:"forEach",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var n=t._storage.getInstanceId(r),i=t._lookupFeature(n);e(i)}))}},{key:"forEachUnsafe",value:function(e){var t=this;this._objectIdToDisplayId.forEach((function(r){var n=t._storage.getInstanceId(r),i=v(n),a=b(n),s=t._getFeatureSet(i);s.setIndex(a),e(s)}))}},{key:"forEachInBounds",value:function(e,t){var r,i=this._searchIndex(e),a=Object(n.a)(i);try{for(a.s();!(r=a.n()).done;){var s=r.value,u=this.lookupFeatureByDisplayId(s,this._storage);t(Object(l.q)(u))}}catch(o){a.e(o)}finally{a.f()}}},{key:"forEachBounds",value:function(e,t,r){this._rebuildIndex();var i,a=[0,0,0,0],s=Object(n.a)(e);try{for(s.s();!(i=s.n()).done;){var u=i.value;if(u.readGeometry()){var o=u.getDisplayId();a[0]=this._storage.getXMin(o),a[1]=this._storage.getYMin(o),a[2]=this._storage.getXMax(o),a[3]=this._storage.getYMax(o),t(Object(f.h)(r,a))}}}catch(c){s.e(c)}finally{s.f()}}},{key:"sweepFeatures",value:function(e,t,r){var n=this;this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((function(i,a){e.has(i)||(t.releaseDisplayId(i),r&&r.unsetAttributeData(i),n._objectIdToDisplayId.delete(a))})),this.events.emit("changed")}},{key:"sweepFeatureSets",value:function(e){var t=this;this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach((function(r,n){e.has(n)||t._featureSetsByInstance.delete(n)}))}},{key:"lookupObjectId",value:function(e,t){var r=this.lookupFeatureByDisplayId(e,t);return Object(l.j)(r)?null:r.getObjectId()}},{key:"lookupDisplayId",value:function(e){return this._objectIdToDisplayId.get(e)}},{key:"lookupFeatureByDisplayId",value:function(e,t){var r=t.getInstanceId(e);return this._lookupFeature(r)}},{key:"lookupByDisplayIdUnsafe",value:function(e){var t=this._storage.getInstanceId(e),r=v(t),n=b(t),i=this._getFeatureSet(r);return i?(i.setIndex(n),i):null}},{key:"_insertFeature",value:function(e,t){var r=this._storage,n=e.getObjectId(),i=y(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());var a=this._objectIdToDisplayId.get(n);a||(a=r.createDisplayId(),this._objectIdToDisplayId.set(n,a),this._spatialIndexInvalid=!0),e.setDisplayId(a),r.setInstanceId(a,i),this.setComputedAttributes(r,e,a,t)}},{key:"_searchIndex",value:function(e){this._rebuildIndex();var t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}},{key:"_rebuildIndex",value:function(){var e=this;if(this._spatialIndexInvalid){var t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((function(r){for(var n=r.getCursor();n.next();){var i=n.getDisplayId();e._storage.setBounds(i,n)&&t.push(i)}})):this._objectIdToDisplayId.forEach((function(r){var n=e._storage.getInstanceId(r);e._storage.setBounds(r,e._lookupFeature(n))&&t.push(r)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}}},{key:"_lookupFeature",value:function(e){var t=v(e),r=this._getFeatureSet(t);if(!r)return null;var n=r.getCursor(),i=b(e);return n.setIndex(i),n}},{key:"_getFeatureSet",value:function(e){return this._featureSetsByInstance.get(e)}}]),r}(h.a)}}]);