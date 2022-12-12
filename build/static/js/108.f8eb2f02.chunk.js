(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[108],{1353:function(e,t,r){"use strict";r.r(t),r.d(t,"toBinaryGLTF",(function(){return Y}));var i,n,a=r(142),s=r(143),o=r(187),u=r(164),c=r(194);(n=i||(i={}))[n.JSON=1313821514]="JSON",n[n.BIN=5130562]="BIN";var f=function(){function e(t,r){if(Object(a.a)(this,e),!t)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;var n=this._textToArrayBuffer(t);if(this.length+=this._alignTo(n.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();var s=this._writeChunk(n,12,i.JSON,32);r&&this._writeChunk(r,s,i.BIN)}return Object(s.a)(e,[{key:"_writeHeader",value:function(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}},{key:"_writeChunk",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=this._alignTo(e.byteLength,4);for(this.outView.setUint32(t,n,!0),this.outView.setUint32(t+=4,r,!0),this._writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}},{key:"_writeArrayBuffer",value:function(e,t,r,i,n){new Uint8Array(e,r,n).set(new Uint8Array(t,i,n),0)}},{key:"_textToArrayBuffer",value:function(e){return(new TextEncoder).encode(e).buffer}},{key:"_alignTo",value:function(e,t){return t*Math.ceil(e/t)}}]),e}();f.HEADER_SIZE=12,f.CHUNK_HEADER_SIZE=8,f.MAGIC=1179937895,f.VERSION=2;var h,l,d,p,g,m,b,y=r(60),v=r(469),w=r(146),E=r(514),O=r(406),A=r(222),T=r(209),_=r(874),x=r(621);!function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(h||(h={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(l||(l={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(d||(d={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(p||(p={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(g||(g={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(m||(m={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(b||(b={}));var R=r(153),k=function(){function e(t,r,i,n,s){Object(a.a)(this,e),this.buffer=t,this.componentType=i,this.dataType=n,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r.bufferViews||(r.bufferViews=[]),this.index=r.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:s};var o=this._getElementSize();o>=4&&s!==d.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=o),r.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}return Object(s.a)(e,[{key:"push",value:function(e){var t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){var r=t%this.numComponentsForDataType,i=this.accessorMin[r];this.accessorMin[r]="number"!=typeof i?e:Math.min(i,e);var n=this.accessorMax[r];this.accessorMax[r]="number"!=typeof n?e:Math.max(n,e)}}},{key:"dataSize",get:function(){return this.data.length*this._sizeComponentType()}},{key:"byteSize",get:function(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}},{key:"getByteOffset",value:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"_createTypedArray",value:function(e,t){switch(this.componentType){case R.k.BYTE:return new Int8Array(e,t);case R.k.FLOAT:return new Float32Array(e,t);case R.k.SHORT:return new Int16Array(e,t);case R.k.UNSIGNED_BYTE:return new Uint8Array(e,t);case R.k.UNSIGNED_INT:return new Uint32Array(e,t);case R.k.UNSIGNED_SHORT:return new Uint16Array(e,t)}}},{key:"writeOutToBuffer",value:function(e,t){this._createTypedArray(e,t).set(this.data)}},{key:"writeAsync",value:function(e){var t=this;if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((function(e){for(var r=new Uint8Array(e),i=0;i<r.length;++i)t.data.push(r[i]);delete t.asyncWritePromise})),this.asyncWritePromise}},{key:"startAccessor",value:function(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;var t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}},{key:"endAccessor",value:function(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");var e=this._getElementSize(),t=this.numComponentsForDataType,r=(this.data.length-this.accessorIndex)/t;if(r%1)throw new Error("An accessor was ended with missing component values");for(var i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);var n={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:r,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case R.k.UNSIGNED_BYTE:case R.k.UNSIGNED_SHORT:n.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,n}},{key:"finalized",get:function(){var e=this;return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((function(t){return e.finalizedPromiseResolve=t}))}},{key:"finalize",value:function(){var e=this,t=this.bufferView;return new Promise((function(t){var r=e.buffer.getViewFinalizePromises(e);e.asyncWritePromise&&r.push(e.asyncWritePromise),t(Object(u.g)(r))})).then((function(){e.isFinalized=!0,t.byteOffset=e.getByteOffset(),t.byteLength=e.dataSize,e.finalizedPromiseResolve&&e.finalizedPromiseResolve()}))}},{key:"_getElementSize",value:function(){return this._sizeComponentType()*this.numComponentsForDataType}},{key:"_sizeComponentType",value:function(){switch(this.componentType){case R.k.BYTE:case R.k.UNSIGNED_BYTE:return 1;case R.k.SHORT:case R.k.UNSIGNED_SHORT:return 2;case R.k.UNSIGNED_INT:case R.k.FLOAT:return 4}}},{key:"_calculateNumComponentsForDataType",value:function(){switch(this.dataType){case p.SCALAR:return 1;case p.VEC2:return 2;case p.VEC3:return 3;case p.VEC4:case p.MAT2:return 4;case p.MAT3:return 9;case p.MAT4:return 16}}}]),e}(),B=function(){function e(t){Object(a.a)(this,e),this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;var r={byteLength:-1};t.buffers.push(r),this.buffer=r}return Object(s.a)(e,[{key:"addBufferView",value:function(e,t,r){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var i=new k(this,this.gltf,e,t,r);return this.bufferViews.push(i),i}},{key:"getByteOffset",value:function(e){var t,r=0,i=Object(y.a)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(n===e)return r;r+=n.byteSize}}catch(a){i.e(a)}finally{i.f()}throw new Error("Given bufferView was not present in this buffer")}},{key:"getViewFinalizePromises",value:function(e){var t,r=[],i=Object(y.a)(this.bufferViews);try{for(i.s();!(t=i.n()).done;){var n=t.value;if(e&&n===e)return r;r.push(n.finalized)}}catch(a){i.e(a)}finally{i.f()}return r}},{key:"getArrayBuffer",value:function(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");var e,t=this._getTotalSize(),r=new ArrayBuffer(t),i=0,n=Object(y.a)(this.bufferViews);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.writeOutToBuffer(r,i),i+=a.byteSize}}catch(s){n.e(s)}finally{n.f()}return r}},{key:"finalize",value:function(){var e=this;if(this.finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this.finalizePromise=new Promise((function(t){t(Object(u.g)(e.getViewFinalizePromises()))})).then((function(){e.isFinalized=!0;var t=e.getArrayBuffer();e.buffer.byteLength=t.byteLength,e.buffer.uri=t})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}},{key:"_getTotalSize",value:function(){var e,t=0,r=Object(y.a)(this.bufferViews);try{for(r.s();!(e=r.n()).done;){t+=e.value.byteSize}}catch(i){r.e(i)}finally{r.f()}return t}}]),e}();function N(e,t){Object(w.j)(t.normal)&&(t.normal=new Float32Array(t.position.length));for(var r=e.faces,i=t.position,n=t.normal,a=r.length/3,s=0;s<a;++s){var o=3*r[3*s+0],u=3*r[3*s+1],c=3*r[3*s+2],f=Object(A.u)(j,i[o+0],i[o+1],i[o+2]),h=Object(A.u)(S,i[u+0],i[u+1],i[u+2]),l=Object(A.u)(I,i[c+0],i[c+1],i[c+2]),d=Object(A.d)(h,h,f),p=Object(A.d)(l,l,f),g=Object(A.h)(d,d,p);n[o+0]+=g[0],n[o+1]+=g[1],n[o+2]+=g[2],n[u+0]+=g[0],n[u+1]+=g[1],n[u+2]+=g[2],n[c+0]+=g[0],n[c+1]+=g[1],n[c+2]+=g[2]}for(var m=0;m<n.length;m+=3)Object(A.u)(M,n[m],n[m+1],n[m+2]),Object(A.p)(M,M),n[m+0]=M[0],n[m+1]=M[1],n[m+2]=M[2]}var j=Object(T.e)(),S=Object(T.e)(),I=Object(T.e)(),M=Object(T.e)(),C=r(723),L=function(){function e(t,r,i){Object(a.a)(this,e),this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:r,binChunkBuffer:null,promises:[]}},i&&(this.params=i),this._addScenes(t)}return Object(s.a)(e,[{key:"_addScenes",value:function(e){var t=this;this.gltf.scene=e.defaultScene;var r=this.gltf.extras.options.bufferOutputType===h.GLB||this.gltf.extras.options.imageOutputType===l.GLB;r&&(this.gltf.extras.binChunkBuffer=new B(this.gltf)),e.forEachScene((function(e){t._addScene(e)})),r&&this.gltf.extras.binChunkBuffer.finalize()}},{key:"_addScene",value:function(e){var t=this;this.gltf.scenes||(this.gltf.scenes=[]);var r={};e.name&&(r.name=e.name),e.forEachNode((function(e){r.nodes||(r.nodes=[]);var i=t._addNode(e);r.nodes.push(i)})),this.gltf.scenes.push(r)}},{key:"_addNode",value:function(e){var t=this;this.gltf.nodes||(this.gltf.nodes=[]);var r={};e.name&&(r.name=e.name);var i=e.translation;Object(A.m)(i,T.b)||(r.translation=Object(T.c)(i));var n=e.rotation;Object(E.c)(n,O.a)||(r.rotation=Object(O.c)(n));var a=e.scale;Object(A.m)(a,T.a)||(r.scale=Object(T.c)(a)),e.mesh&&e.mesh.vertexAttributes.position?r.mesh=this._addMesh(e.mesh):e.forEachNode((function(e){r.children||(r.children=[]);var i=t._addNode(e);r.children.push(i)}));var s=this.gltf.nodes.length;return this.gltf.nodes.push(r),s}},{key:"_addMesh",value:function(e){this.gltf.meshes||(this.gltf.meshes=[]);var t,r={primitives:[]},i=this.gltf.extras.options.bufferOutputType===h.GLB;t=i?this.gltf.extras.binChunkBuffer:new B(this.gltf),this.params.origin||(this.params.origin=function(e){if(Object(w.k)(e.transform))return e.transform.getOriginPoint(e.spatialReference);var t=e.extent.xmax-e.extent.width/2,r=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new c.a({x:t,y:r,z:i,spatialReference:e.extent.spatialReference})}(e));var n=Object(x.e)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});(function(e,t){if(e.components){var r,i=Object(y.a)(e.components);try{for(i.s();!(r=i.n()).done;){var n=r.value;n.faces&&"smooth"===n.shading&&N(n,t)}}catch(a){i.e(a)}finally{i.f()}}})(e,n),this._flipYZAxis(n);var a,s,o,u,f=t.addBufferView(R.k.FLOAT,p.VEC3,d.ARRAY_BUFFER);n.normal&&(a=t.addBufferView(R.k.FLOAT,p.VEC3,d.ARRAY_BUFFER)),e.vertexAttributes.uv&&(s=t.addBufferView(R.k.FLOAT,p.VEC2,d.ARRAY_BUFFER)),n.tangent&&(o=t.addBufferView(R.k.FLOAT,p.VEC4,d.ARRAY_BUFFER)),e.vertexAttributes.color&&(u=t.addBufferView(R.k.UNSIGNED_BYTE,p.VEC4,d.ARRAY_BUFFER)),f.startAccessor("POSITION"),a&&a.startAccessor("NORMAL"),s&&s.startAccessor("TEXCOORD_0"),o&&o.startAccessor("TANGENT"),u&&u.startAccessor("COLOR_0");for(var l=n.position.length/3,g=n.position,m=n.normal,b=n.tangent,v=e.vertexAttributes,E=v.color,O=v.uv,A=0;A<l;++A)f.push(g[3*A+0]),f.push(g[3*A+1]),f.push(g[3*A+2]),a&&Object(w.k)(m)&&(a.push(m[3*A+0]),a.push(m[3*A+1]),a.push(m[3*A+2])),s&&Object(w.k)(O)&&(s.push(O[2*A+0]),s.push(O[2*A+1])),o&&Object(w.k)(b)&&(o.push(b[4*A+0]),o.push(b[4*A+1]),o.push(b[4*A+2]),o.push(b[4*A+3])),u&&Object(w.k)(E)&&(u.push(E[4*A+0]),u.push(E[4*A+1]),u.push(E[4*A+2]),u.push(E[4*A+3]));var T,_,k,j,S,I=f.endAccessor(),M=this._addAccessor(f.index,I);if(a){var C=a.endAccessor();T=this._addAccessor(a.index,C)}if(s){var L=s.endAccessor();_=this._addAccessor(s.index,L)}if(o){var z=o.endAccessor();k=this._addAccessor(o.index,z)}if(u){var V=u.endAccessor();j=this._addAccessor(u.index,V)}e.components&&e.components.length>0&&e.components[0].faces?(S=t.addBufferView(R.k.UNSIGNED_INT,p.SCALAR,d.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(S,e.components,r,M,T,_,k,j)):this._addMeshVertexNonIndexed(e.components,r,M,T,_,k,j),f.finalize(),a&&a.finalize(),s&&s.finalize(),o&&o.finalize(),S&&S.finalize(),u&&u.finalize(),i||t.finalize();var F=this.gltf.meshes.length;return this.gltf.meshes.push(r),F}},{key:"_flipYZAxis",value:function(e){var t=e.position,r=e.normal,i=e.tangent;this._flipYZBuffer(t,3),this._flipYZBuffer(r,3),this._flipYZBuffer(i,4)}},{key:"_flipYZBuffer",value:function(e,t){if(!Object(w.j)(e))for(var r=1,i=2;r<e.length;r+=t,i+=t){var n=e[r],a=e[i];e[r]=a,e[i]=-n}}},{key:"_addMaterial",value:function(e){if(null!==e){var t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);var r={};switch(e.alphaMode){case"mask":r.alphaMode=m.MASK;break;case"auto":case"blend":r.alphaMode=m.BLEND}.5!==e.alphaCutoff&&(r.alphaCutoff=e.alphaCutoff),e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};var i=function(e){return Math.pow(e,2.1)},n=function(e){var t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if(Object(w.k)(e.color)&&(r.pbrMetallicRoughness.baseColorFactor=n(e.color)),Object(w.k)(e.colorTexture)&&(r.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),Object(w.k)(e.normalTexture)&&(r.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof _.a){if(Object(w.k)(e.emissiveTexture)&&(r.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),Object(w.k)(e.emissiveColor)){var a=n(e.emissiveColor);r.emissiveFactor=[a[0],a[1],a[2]]}Object(w.k)(e.occlusionTexture)&&(r.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),Object(w.k)(e.metallicRoughnessTexture)&&(r.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1;var s=this.gltf.materials.length;return this.gltf.materials.push(r),this.materialMap.push(e),s}}},{key:"_addTexture",value:function(e){var t=this;return this.gltf.textures||(this.gltf.textures=[]),Object(v.a)(this.textureMap,e,(function(){var r={sampler:t._addSampler(e),source:t._addImage(e)},i=t.gltf.textures.length;return t.gltf.textures.push(r),i}))}},{key:"_addImage",value:function(e){var t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);var r={};if(e.url)r.uri=e.url;else{r.extras=e.data;for(var i=0;i<this.gltf.images.length;++i)if(e.data===this.gltf.images[i].extras)return i;switch(this.gltf.extras.options.imageOutputType){case l.GLB:var n=this.gltf.extras.binChunkBuffer.addBufferView(R.k.UNSIGNED_BYTE,p.SCALAR),a=Object(C.b)(e.data).then((function(e){var t=e.data,i=e.type;return r.mimeType=i,t}));n.writeAsync(a).then((function(){n.finalize()})),r.bufferView=n.index;break;case l.DataURI:r.uri=Object(C.c)(e.data);break;default:this.gltf.extras.promises.push(Object(C.b)(e.data).then((function(e){var t=e.data,i=e.type;r.uri=t,r.mimeType=i})))}}var s=this.gltf.images.length;return this.gltf.images.push(r),this.imageMap.set(e,s),s}},{key:"_addSampler",value:function(e){this.gltf.samplers||(this.gltf.samplers=[]);var t=R.B.REPEAT,r=R.B.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=R.B.CLAMP_TO_EDGE,r=R.B.CLAMP_TO_EDGE;break;case"mirror":t=R.B.MIRRORED_REPEAT,r=R.B.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":r=R.B.CLAMP_TO_EDGE;break;case"mirror":r=R.B.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=R.B.CLAMP_TO_EDGE;break;case"mirror":t=R.B.MIRRORED_REPEAT}}for(var i={wrapS:t,wrapT:r},n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[n]))return n;var a=this.gltf.samplers.length;return this.gltf.samplers.push(i),a}},{key:"_addAccessor",value:function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);var r={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(r.normalized=!0);var i=this.gltf.accessors.length;return this.gltf.accessors.push(r),i}},{key:"_addMeshVertexIndexed",value:function(e,t,r,i,n,a,s,o){var u,c=Object(y.a)(t);try{for(c.s();!(u=c.n()).done;){var f=u.value;e.startAccessor("INDICES");for(var h=0;h<f.faces.length;++h)e.push(f.faces[h]);var l=e.endAccessor(),d={attributes:{POSITION:i},indices:this._addAccessor(e.index,l),material:this._addMaterial(f.material)};n&&"flat"!==f.shading&&(d.attributes.NORMAL=n),a&&(d.attributes.TEXCOORD_0=a),s&&"flat"!==f.shading&&(d.attributes.TANGENT=s),o&&(d.attributes.COLOR_0=o),r.primitives.push(d)}}catch(p){c.e(p)}finally{c.f()}}},{key:"_addMeshVertexNonIndexed",value:function(e,t,r,i,n,a,s){var o={attributes:{POSITION:r}};i&&(o.attributes.NORMAL=i),n&&(o.attributes.TEXCOORD_0=n),a&&(o.attributes.TANGENT=a),s&&(o.attributes.COLOR_0=s),e&&(o.material=this._addMaterial(e[0].material)),t.primitives.push(o)}}]),e}(),z=r(152),V=function(){function e(){Object(a.a)(this,e),this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}return Object(s.a)(e,[{key:"addScene",value:function(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}},{key:"removeScene",value:function(e){Object(z.i)(this._scenes,e)}},{key:"forEachScene",value:function(e){this._scenes.forEach(e)}}]),e}(),F=function(){function e(){Object(a.a)(this,e),this.name="",this._nodes=[]}return Object(s.a)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}}]),e}(),D=function(){function e(t){Object(a.a)(this,e),this.mesh=t,this.name="",this.translation=Object(T.e)(),this.rotation=Object(O.b)(),this.scale=Object(T.c)(T.a),this._nodes=[]}return Object(s.a)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}},{key:"rotationAngles",set:function(e){Object(E.d)(this.rotation,e[0],e[1],e[2])}}]),e}(),P="model.glb";function U(e,t){return function(e,t,r){var i=new L(e,t=t||{},r),n=i.params;n?n.origin||(n.origin=new c.a({x:-1,y:-1,z:-1})):n={origin:new c.a({x:-1,y:-1,z:-1})};var a=n.origin,s=i.gltf,o=s.extras.promises,d=1,p=1,g=null;return Object(u.g)(o).then((function(){var e={origin:a};delete s.extras;var r="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(s,(function(r,i){if("extras"!==r){if(i instanceof ArrayBuffer){if(Object(C.e)(i))switch(t.imageOutputType){case l.DataURI:case l.GLB:break;case l.External:default:var n="img".concat(p,".png");return p++,e[n]=i,n}switch(t.bufferOutputType){case h.DataURI:return Object(C.a)(i);case h.GLB:if(g)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(g=i);case h.External:default:var a="data".concat(d,".bin");return d++,e[a]=i,a}}return i}}),r);return t.bufferOutputType===h.GLB||t.imageOutputType===l.GLB?e[P]=new f(i,g).buffer:e["model.gltf"]=i,e}))}(e,{bufferOutputType:h.GLB,imageOutputType:l.GLB,jsonSpacing:0},t)}var G=function(){function e(t,r){Object(a.a)(this,e),this._file={type:"model/gltf-binary",data:t},this.origin=r}return Object(s.a)(e,[{key:"buffer",value:function(){return Promise.resolve(this._file)}},{key:"download",value:function(e){Object(o.j)(new Blob([this._file.data],{type:this._file.type}),e)}}]),e}();function Y(e,t){var r=new V,i=new F;return r.addScene(i),i.addNode(new D(e)),U(r,t).then((function(e){return new G(e[P],e.origin)}))}},723:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return m}));var i=r(155),n=r(154),a=r.n(n),s=(r(147),r(159)),o=r(146),u=r(187);function c(e){var t=p(e);return Object(o.k)(t)?t.toDataURL():""}function f(e){return h.apply(this,arguments)}function h(){return h=Object(i.a)(a.a.mark((function e(t){var r,i,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=p(t),!Object(o.j)(r)){e.next=3;break}throw new s.a("imageToArrayBuffer","Unsupported image type");case 3:return e.next=5,l(t);case 5:return i=e.sent,e.next=8,new Promise((function(e){return r.toBlob(e,i)}));case 8:if(n=e.sent){e.next=11;break}throw new s.a("imageToArrayBuffer","Failed to encode image");case 11:return e.next=13,n.arrayBuffer();case 13:return e.t0=e.sent,e.t1=i,e.abrupt("return",{data:e.t0,type:e.t1});case 16:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(a.a.mark((function e(t){var r,i,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof HTMLImageElement){e.next=2;break}return e.abrupt("return","image/png");case 2:if(r=t.src,!Object(u.w)(r)){e.next=6;break}return i=Object(u.h)(r),n=i.mediaType,e.abrupt("return","image/jpeg"===n?n:"image/png");case 6:return e.abrupt("return",/\.png$/i.test(r)?"image/png":/\.(jpg|jpeg)$/i.test(r)?"image/jpeg":"image/png");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,0,0),t}function g(e){for(var t=[],r=new Uint8Array(e),i=0;i<r.length;i++)t.push(String.fromCharCode(r[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function m(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}}}]);