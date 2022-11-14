(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[23],{1309:function(e,t,a){"use strict";a.r(t),a.d(t,"applyEdits",(function(){return f}));var r=a(6),n=a(155),s=a(154),i=a.n(s),d=a(220),u=a(196),o=a(159),l=a(161),p=a(146),c=a(183),h=a(285);function b(e){return e&&null!=e.applyEdits}function f(e,t,a){return y.apply(this,arguments)}function y(){return y=Object(n.a)(i.a.mark((function e(t,a,r){var n,s,d,u,o,p,c,h,b,f,y=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.length>3&&void 0!==y[3]?y[3]:{},u={edits:r,result:new Promise((function(e,t){s=e,d=t}))},t.emit("apply-edits",u),e.prev=3,e.next=6,m(t,a,r,n);case 6:return p=e.sent,c=p.results,h=p.edits,b=function(e){return e.filter((function(e){return!e.error})).map(l.a)},f={edits:h,addedFeatures:b(c.addFeatureResults),updatedFeatures:b(c.updateFeatureResults),deletedFeatures:b(c.deleteFeatureResults),addedAttachments:b(c.addAttachmentResults),updatedAttachments:b(c.updateAttachmentResults),deletedAttachments:b(c.deleteAttachmentResults)},e.abrupt("return",(null!==(o=c.editedFeatureResults)&&void 0!==o&&o.length&&(f.editedFeatures=c.editedFeatureResults),(f.addedFeatures.length||f.updatedFeatures.length||f.deletedFeatures.length||f.addedAttachments.length||f.updatedAttachments.length||f.deletedAttachments.length)&&t.emit("edits",f),s(f),c));case 14:throw e.prev=14,e.t0=e.catch(3),d(e.t0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[3,14]])}))),y.apply(this,arguments)}function m(e,t,a,r){return g.apply(this,arguments)}function g(){return(g=Object(n.a)(i.a.mark((function e(t,a,r,n){var s,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.load();case 2:if(b(a)){e.next=4;break}throw new o.a("".concat(t.type,"-layer:no-editing-support"),"Layer source does not support applyEdits capability",{layer:t});case 4:if(t.editingEnabled){e.next=6;break}throw new o.a("".concat(t.type,"-layer:editing-disabled"),"Editing is disabled for layer",{layer:t});case 6:return e.next=8,w(t,r,n);case 8:if(s=e.sent,d=s.edits,u=s.options,!(d.addFeatures.length||d.updateFeatures.length||d.deleteFeatures.length||d.addAttachments.length||d.updateAttachments.length||d.deleteAttachments.length)){e.next=19;break}return e.t1=d,e.next=15,a.applyEdits(d,u);case 15:e.t2=e.sent,e.t0={edits:e.t1,results:e.t2},e.next=20;break;case 19:e.t0={edits:d,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}};case 20:return e.abrupt("return",e.t0);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t,a){return F.apply(this,arguments)}function F(){return F=Object(n.a)(i.a.mark((function e(t,a,n){var s,d,l,p,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=a&&(a.addFeatures||a.updateFeatures||a.deleteFeatures),d=a&&(a.addAttachments||a.updateAttachments||a.deleteAttachments),a&&(s||d)){e.next=3;break}throw new o.a("".concat(t.type,"-layer:missing-parameters"),"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");case 3:if(t.capabilities.data.isVersioned||!n||!n.gdbVersion){e.next=5;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");case 5:if(t.capabilities.editing.supportsRollbackOnFailure||!n||!n.rollbackOnFailureEnabled){e.next=7;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");case 7:if(t.capabilities.editing.supportsGlobalId||!n||!n.globalIdUsed){e.next=9;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");case 9:if(t.capabilities.editing.supportsGlobalId||!d){e.next=11;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");case 11:if(n&&n.globalIdUsed||!d){e.next=13;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");case 13:if(null!=(l=Object(r.a)({},n)).rollbackOnFailureEnabled||t.capabilities.editing.supportsRollbackOnFailure||(l.rollbackOnFailureEnabled=!0),!1!==l.rollbackOnFailureEnabled||"original-and-current-features"!==l.returnServiceEditsOption){e.next=16;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");case 16:if(t.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference||!l.returnServiceEditsInSourceSR){e.next=18;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");case 18:if(!l.returnServiceEditsInSourceSR||"original-and-current-features"===l.returnServiceEditsOption){e.next=20;break}throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");case 20:if((p=Object(r.a)({},a)).addFeatures=a&&u.a.isCollection(a.addFeatures)?a.addFeatures.toArray():p.addFeatures||[],p.updateFeatures=a&&u.a.isCollection(a.updateFeatures)?a.updateFeatures.toArray():p.updateFeatures||[],p.deleteFeatures=a&&u.a.isCollection(a.deleteFeatures)?a.deleteFeatures.toArray():p.deleteFeatures||[],!p.addFeatures.length||t.capabilities.operations.supportsAdd){e.next=23;break}throw new o.a("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support adding features.");case 23:if(!p.updateFeatures.length||t.capabilities.operations.supportsUpdate){e.next=25;break}throw new o.a("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support updating features.");case 25:if(!p.deleteFeatures.length||t.capabilities.operations.supportsDelete){e.next=27;break}throw new o.a("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support deleting features.");case 27:return p.addAttachments=p.addAttachments||[],p.updateAttachments=p.updateAttachments||[],p.deleteAttachments=p.deleteAttachments||[],p.addFeatures=p.addFeatures.map(O),p.updateFeatures=p.updateFeatures.map(O),c=n&&n.globalIdUsed,p.addFeatures.forEach((function(e){return A(e,t,c)})),p.updateFeatures.forEach((function(e){return k(e,t,c)})),p.deleteFeatures.forEach((function(e){return I(e,t,c)})),p.addAttachments.forEach((function(e){return x(e,t)})),p.updateAttachments.forEach((function(e){return x(e,t)})),e.next=32,E(p);case 32:return e.t0=e.sent,e.t1=l,e.abrupt("return",{edits:e.t0,options:e.t1});case 35:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function v(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(p.k)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new o.a("".concat(t.type,"-layer:z-unsupported"),"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new o.a("".concat(t.type,"-layer:m-unsupported"),"Layer does not support m values while feature has m values.")}}function A(e,t,a){v(e,t,a)}function I(e,t,a){v(e,t,a)}function k(e,t,a){if(v(e,t,a),"geometry"in e&&Object(p.k)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new o.a("".concat(t.type,"-layer:unsupported-operation"),"Layer does not support geometry updates.")}function x(e,t){var a=e.feature,r=e.attachment;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){var n=Object(c.h)(r.data);if(n&&!n.isBase64)throw new o.a("".concat(t.type,"-layer:invalid-parameter"),"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function E(e){return S.apply(this,arguments)}function S(){return S=Object(n.a)(i.a.mark((function e(t){var a,r,n,s,d,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.addFeatures,r=t.updateFeatures,n=a.concat(r).map((function(e){return e.geometry})),e.next=5,Object(h.a)(n);case 5:return s=e.sent,d=a.length,u=r.length,e.abrupt("return",(s.slice(0,d).forEach((function(e,a){return t.addFeatures[a].geometry=e})),s.slice(d,d+u).forEach((function(e,a){return t.updateFeatures[a].geometry=e})),t));case 9:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function O(e){var t=new d.a;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);