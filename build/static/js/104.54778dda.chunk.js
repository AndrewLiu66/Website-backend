(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[104],{1343:function(e,t,n){"use strict";n.r(t),n.d(t,"toBinaryGLTF",(function(){return Y}));var r,i,a=n(142),s=n(143),E=n(183),_=n(163),u=n(197);(i=r||(r={}))[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN";var o=function(){function e(t,n){if(Object(a.a)(this,e),!t)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;var i=this._textToArrayBuffer(t);if(this.length+=this._alignTo(i.byteLength,4),n&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=n.byteLength,n.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();var s=this._writeChunk(i,12,r.JSON,32);n&&this._writeChunk(n,s,r.BIN)}return Object(s.a)(e,[{key:"_writeHeader",value:function(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}},{key:"_writeChunk",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=this._alignTo(e.byteLength,4);for(this.outView.setUint32(t,i,!0),this.outView.setUint32(t+=4,n,!0),this._writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this.outView.setUint8(t,r),t++;return t}},{key:"_writeArrayBuffer",value:function(e,t,n,r,i){new Uint8Array(e,n,i).set(new Uint8Array(t,r,i),0)}},{key:"_textToArrayBuffer",value:function(e){return(new TextEncoder).encode(e).buffer}},{key:"_alignTo",value:function(e,t){return t*Math.ceil(e/t)}}]),e}();o.HEADER_SIZE=12,o.CHUNK_HEADER_SIZE=8,o.MAGIC=1179937895,o.VERSION=2;var T,R,c,A,f,N,h,O=n(60),S=n(472),l=n(146),I=n(485),C=n(378),d=n(222),L=n(209),M=n(885),D=n(581);!function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(T||(T={})),function(e){e[e.External=0]="External",e[e.DataURI=1]="DataURI",e[e.GLB=2]="GLB"}(R||(R={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(c||(c={})),function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(A||(A={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(f||(f={})),function(e){e.OPAQUE="OPAQUE",e.MASK="MASK",e.BLEND="BLEND"}(N||(N={})),function(e){e[e.NoColor=0]="NoColor",e[e.FaceColor=1]="FaceColor",e[e.VertexColor=2]="VertexColor"}(h||(h={}));var B=n(152),p=function(){function e(t,n,r,i,s){Object(a.a)(this,e),this.buffer=t,this.componentType=r,this.dataType=i,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,n.bufferViews||(n.bufferViews=[]),this.index=n.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:s};var E=this._getElementSize();E>=4&&s!==c.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=E),n.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}return Object(s.a)(e,[{key:"push",value:function(e){var t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){var n=t%this.numComponentsForDataType,r=this.accessorMin[n];this.accessorMin[n]="number"!=typeof r?e:Math.min(r,e);var i=this.accessorMax[n];this.accessorMax[n]="number"!=typeof i?e:Math.max(i,e)}}},{key:"dataSize",get:function(){return this.data.length*this._sizeComponentType()}},{key:"byteSize",get:function(){return function(e,t){return t*Math.ceil(e/t)}(this.dataSize,4)}},{key:"getByteOffset",value:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"_createTypedArray",value:function(e,t){switch(this.componentType){case B.k.BYTE:return new Int8Array(e,t);case B.k.FLOAT:return new Float32Array(e,t);case B.k.SHORT:return new Int16Array(e,t);case B.k.UNSIGNED_BYTE:return new Uint8Array(e,t);case B.k.UNSIGNED_INT:return new Uint32Array(e,t);case B.k.UNSIGNED_SHORT:return new Uint16Array(e,t)}}},{key:"writeOutToBuffer",value:function(e,t){this._createTypedArray(e,t).set(this.data)}},{key:"writeAsync",value:function(e){var t=this;if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((function(e){for(var n=new Uint8Array(e),r=0;r<n.length;++r)t.data.push(n[r]);delete t.asyncWritePromise})),this.asyncWritePromise}},{key:"startAccessor",value:function(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;var t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}},{key:"endAccessor",value:function(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");var e=this._getElementSize(),t=this.numComponentsForDataType,n=(this.data.length-this.accessorIndex)/t;if(n%1)throw new Error("An accessor was ended with missing component values");for(var r=0;r<this.accessorMin.length;++r)"number"!=typeof this.accessorMin[r]&&(this.accessorMin[r]=0),"number"!=typeof this.accessorMax[r]&&(this.accessorMax[r]=0);var i={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:n,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case B.k.UNSIGNED_BYTE:case B.k.UNSIGNED_SHORT:i.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,i}},{key:"finalized",get:function(){var e=this;return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((function(t){return e.finalizedPromiseResolve=t}))}},{key:"finalize",value:function(){var e=this,t=this.bufferView;return new Promise((function(t){var n=e.buffer.getViewFinalizePromises(e);e.asyncWritePromise&&n.push(e.asyncWritePromise),t(Object(_.g)(n))})).then((function(){e.isFinalized=!0,t.byteOffset=e.getByteOffset(),t.byteLength=e.dataSize,e.finalizedPromiseResolve&&e.finalizedPromiseResolve()}))}},{key:"_getElementSize",value:function(){return this._sizeComponentType()*this.numComponentsForDataType}},{key:"_sizeComponentType",value:function(){switch(this.componentType){case B.k.BYTE:case B.k.UNSIGNED_BYTE:return 1;case B.k.SHORT:case B.k.UNSIGNED_SHORT:return 2;case B.k.UNSIGNED_INT:case B.k.FLOAT:return 4}}},{key:"_calculateNumComponentsForDataType",value:function(){switch(this.dataType){case A.SCALAR:return 1;case A.VEC2:return 2;case A.VEC3:return 3;case A.VEC4:case A.MAT2:return 4;case A.MAT3:return 9;case A.MAT4:return 16}}}]),e}(),P=function(){function e(t){Object(a.a)(this,e),this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;var n={byteLength:-1};t.buffers.push(n),this.buffer=n}return Object(s.a)(e,[{key:"addBufferView",value:function(e,t,n){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var r=new p(this,this.gltf,e,t,n);return this.bufferViews.push(r),r}},{key:"getByteOffset",value:function(e){var t,n=0,r=Object(O.a)(this.bufferViews);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(i===e)return n;n+=i.byteSize}}catch(a){r.e(a)}finally{r.f()}throw new Error("Given bufferView was not present in this buffer")}},{key:"getViewFinalizePromises",value:function(e){var t,n=[],r=Object(O.a)(this.bufferViews);try{for(r.s();!(t=r.n()).done;){var i=t.value;if(e&&i===e)return n;n.push(i.finalized)}}catch(a){r.e(a)}finally{r.f()}return n}},{key:"getArrayBuffer",value:function(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");var e,t=this._getTotalSize(),n=new ArrayBuffer(t),r=0,i=Object(O.a)(this.bufferViews);try{for(i.s();!(e=i.n()).done;){var a=e.value;a.writeOutToBuffer(n,r),r+=a.byteSize}}catch(s){i.e(s)}finally{i.f()}return n}},{key:"finalize",value:function(){var e=this;if(this.finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this.finalizePromise=new Promise((function(t){t(Object(_.g)(e.getViewFinalizePromises()))})).then((function(){e.isFinalized=!0;var t=e.getArrayBuffer();e.buffer.byteLength=t.byteLength,e.buffer.uri=t})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}},{key:"_getTotalSize",value:function(){var e,t=0,n=Object(O.a)(this.bufferViews);try{for(n.s();!(e=n.n()).done;){t+=e.value.byteSize}}catch(r){n.e(r)}finally{n.f()}return t}}]),e}();function U(e,t){Object(l.j)(t.normal)&&(t.normal=new Float32Array(t.position.length));for(var n=e.faces,r=t.position,i=t.normal,a=n.length/3,s=0;s<a;++s){var E=3*n[3*s+0],_=3*n[3*s+1],u=3*n[3*s+2],o=Object(d.u)(G,r[E+0],r[E+1],r[E+2]),T=Object(d.u)(g,r[_+0],r[_+1],r[_+2]),R=Object(d.u)(b,r[u+0],r[u+1],r[u+2]),c=Object(d.d)(T,T,o),A=Object(d.d)(R,R,o),f=Object(d.h)(c,c,A);i[E+0]+=f[0],i[E+1]+=f[1],i[E+2]+=f[2],i[_+0]+=f[0],i[_+1]+=f[1],i[_+2]+=f[2],i[u+0]+=f[0],i[u+1]+=f[1],i[u+2]+=f[2]}for(var N=0;N<i.length;N+=3)Object(d.u)(m,i[N],i[N+1],i[N+2]),Object(d.p)(m,m),i[N+0]=m[0],i[N+1]=m[1],i[N+2]=m[2]}var G=Object(L.e)(),g=Object(L.e)(),b=Object(L.e)(),m=Object(L.e)(),F=n(723),y=function(){function e(t,n,r){Object(a.a)(this,e),this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:n,binChunkBuffer:null,promises:[]}},r&&(this.params=r),this._addScenes(t)}return Object(s.a)(e,[{key:"_addScenes",value:function(e){var t=this;this.gltf.scene=e.defaultScene;var n=this.gltf.extras.options.bufferOutputType===T.GLB||this.gltf.extras.options.imageOutputType===R.GLB;n&&(this.gltf.extras.binChunkBuffer=new P(this.gltf)),e.forEachScene((function(e){t._addScene(e)})),n&&this.gltf.extras.binChunkBuffer.finalize()}},{key:"_addScene",value:function(e){var t=this;this.gltf.scenes||(this.gltf.scenes=[]);var n={};e.name&&(n.name=e.name),e.forEachNode((function(e){n.nodes||(n.nodes=[]);var r=t._addNode(e);n.nodes.push(r)})),this.gltf.scenes.push(n)}},{key:"_addNode",value:function(e){var t=this;this.gltf.nodes||(this.gltf.nodes=[]);var n={};e.name&&(n.name=e.name);var r=e.translation;Object(d.m)(r,L.b)||(n.translation=Object(L.c)(r));var i=e.rotation;Object(I.c)(i,C.a)||(n.rotation=Object(C.c)(i));var a=e.scale;Object(d.m)(a,L.a)||(n.scale=Object(L.c)(a)),e.mesh&&e.mesh.vertexAttributes.position?n.mesh=this._addMesh(e.mesh):e.forEachNode((function(e){n.children||(n.children=[]);var r=t._addNode(e);n.children.push(r)}));var s=this.gltf.nodes.length;return this.gltf.nodes.push(n),s}},{key:"_addMesh",value:function(e){this.gltf.meshes||(this.gltf.meshes=[]);var t,n={primitives:[]},r=this.gltf.extras.options.bufferOutputType===T.GLB;t=r?this.gltf.extras.binChunkBuffer:new P(this.gltf),this.params.origin||(this.params.origin=function(e){if(Object(l.k)(e.transform))return e.transform.getOriginPoint(e.spatialReference);var t=e.extent.xmax-e.extent.width/2,n=e.extent.ymax-e.extent.height/2,r=e.extent.zmin;return new u.a({x:t,y:n,z:r,spatialReference:e.extent.spatialReference})}(e));var i=Object(D.e)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});(function(e,t){if(e.components){var n,r=Object(O.a)(e.components);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.faces&&"smooth"===i.shading&&U(i,t)}}catch(a){r.e(a)}finally{r.f()}}})(e,i),this._flipYZAxis(i);var a,s,E,_,o=t.addBufferView(B.k.FLOAT,A.VEC3,c.ARRAY_BUFFER);i.normal&&(a=t.addBufferView(B.k.FLOAT,A.VEC3,c.ARRAY_BUFFER)),e.vertexAttributes.uv&&(s=t.addBufferView(B.k.FLOAT,A.VEC2,c.ARRAY_BUFFER)),i.tangent&&(E=t.addBufferView(B.k.FLOAT,A.VEC4,c.ARRAY_BUFFER)),e.vertexAttributes.color&&(_=t.addBufferView(B.k.UNSIGNED_BYTE,A.VEC4,c.ARRAY_BUFFER)),o.startAccessor("POSITION"),a&&a.startAccessor("NORMAL"),s&&s.startAccessor("TEXCOORD_0"),E&&E.startAccessor("TANGENT"),_&&_.startAccessor("COLOR_0");for(var R=i.position.length/3,f=i.position,N=i.normal,h=i.tangent,S=e.vertexAttributes,I=S.color,C=S.uv,d=0;d<R;++d)o.push(f[3*d+0]),o.push(f[3*d+1]),o.push(f[3*d+2]),a&&Object(l.k)(N)&&(a.push(N[3*d+0]),a.push(N[3*d+1]),a.push(N[3*d+2])),s&&Object(l.k)(C)&&(s.push(C[2*d+0]),s.push(C[2*d+1])),E&&Object(l.k)(h)&&(E.push(h[4*d+0]),E.push(h[4*d+1]),E.push(h[4*d+2]),E.push(h[4*d+3])),_&&Object(l.k)(I)&&(_.push(I[4*d+0]),_.push(I[4*d+1]),_.push(I[4*d+2]),_.push(I[4*d+3]));var L,M,p,G,g,b=o.endAccessor(),m=this._addAccessor(o.index,b);if(a){var F=a.endAccessor();L=this._addAccessor(a.index,F)}if(s){var y=s.endAccessor();M=this._addAccessor(s.index,y)}if(E){var v=E.endAccessor();p=this._addAccessor(E.index,v)}if(_){var w=_.endAccessor();G=this._addAccessor(_.index,w)}e.components&&e.components.length>0&&e.components[0].faces?(g=t.addBufferView(B.k.UNSIGNED_INT,A.SCALAR,c.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(g,e.components,n,m,L,M,p,G)):this._addMeshVertexNonIndexed(e.components,n,m,L,M,p,G),o.finalize(),a&&a.finalize(),s&&s.finalize(),E&&E.finalize(),g&&g.finalize(),_&&_.finalize(),r||t.finalize();var x=this.gltf.meshes.length;return this.gltf.meshes.push(n),x}},{key:"_flipYZAxis",value:function(e){var t=e.position,n=e.normal,r=e.tangent;this._flipYZBuffer(t,3),this._flipYZBuffer(n,3),this._flipYZBuffer(r,4)}},{key:"_flipYZBuffer",value:function(e,t){if(!Object(l.j)(e))for(var n=1,r=2;n<e.length;n+=t,r+=t){var i=e[n],a=e[r];e[n]=a,e[r]=-i}}},{key:"_addMaterial",value:function(e){if(null!==e){var t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);var n={};switch(e.alphaMode){case"mask":n.alphaMode=N.MASK;break;case"auto":case"blend":n.alphaMode=N.BLEND}.5!==e.alphaCutoff&&(n.alphaCutoff=e.alphaCutoff),e.doubleSided&&(n.doubleSided=e.doubleSided),n.pbrMetallicRoughness={};var r=function(e){return Math.pow(e,2.1)},i=function(e){var t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(Object(l.k)(e.color)&&(n.pbrMetallicRoughness.baseColorFactor=i(e.color)),Object(l.k)(e.colorTexture)&&(n.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),Object(l.k)(e.normalTexture)&&(n.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof M.a){if(Object(l.k)(e.emissiveTexture)&&(n.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),Object(l.k)(e.emissiveColor)){var a=i(e.emissiveColor);n.emissiveFactor=[a[0],a[1],a[2]]}Object(l.k)(e.occlusionTexture)&&(n.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),Object(l.k)(e.metallicRoughnessTexture)&&(n.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),n.pbrMetallicRoughness.metallicFactor=e.metallic,n.pbrMetallicRoughness.roughnessFactor=e.roughness}else n.pbrMetallicRoughness.metallicFactor=1,n.pbrMetallicRoughness.roughnessFactor=1;var s=this.gltf.materials.length;return this.gltf.materials.push(n),this.materialMap.push(e),s}}},{key:"_addTexture",value:function(e){var t=this;return this.gltf.textures||(this.gltf.textures=[]),Object(S.a)(this.textureMap,e,(function(){var n={sampler:t._addSampler(e),source:t._addImage(e)},r=t.gltf.textures.length;return t.gltf.textures.push(n),r}))}},{key:"_addImage",value:function(e){var t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);var n={};if(e.url)n.uri=e.url;else{n.extras=e.data;for(var r=0;r<this.gltf.images.length;++r)if(e.data===this.gltf.images[r].extras)return r;switch(this.gltf.extras.options.imageOutputType){case R.GLB:var i=this.gltf.extras.binChunkBuffer.addBufferView(B.k.UNSIGNED_BYTE,A.SCALAR),a=Object(F.b)(e.data).then((function(e){var t=e.data,r=e.type;return n.mimeType=r,t}));i.writeAsync(a).then((function(){i.finalize()})),n.bufferView=i.index;break;case R.DataURI:n.uri=Object(F.c)(e.data);break;default:this.gltf.extras.promises.push(Object(F.b)(e.data).then((function(e){var t=e.data,r=e.type;n.uri=t,n.mimeType=r})))}}var s=this.gltf.images.length;return this.gltf.images.push(n),this.imageMap.set(e,s),s}},{key:"_addSampler",value:function(e){this.gltf.samplers||(this.gltf.samplers=[]);var t=B.B.REPEAT,n=B.B.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=B.B.CLAMP_TO_EDGE,n=B.B.CLAMP_TO_EDGE;break;case"mirror":t=B.B.MIRRORED_REPEAT,n=B.B.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":n=B.B.CLAMP_TO_EDGE;break;case"mirror":n=B.B.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=B.B.CLAMP_TO_EDGE;break;case"mirror":t=B.B.MIRRORED_REPEAT}}for(var r={wrapS:t,wrapT:n},i=0;i<this.gltf.samplers.length;++i)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[i]))return i;var a=this.gltf.samplers.length;return this.gltf.samplers.push(r),a}},{key:"_addAccessor",value:function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);var n={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(n.normalized=!0);var r=this.gltf.accessors.length;return this.gltf.accessors.push(n),r}},{key:"_addMeshVertexIndexed",value:function(e,t,n,r,i,a,s,E){var _,u=Object(O.a)(t);try{for(u.s();!(_=u.n()).done;){var o=_.value;e.startAccessor("INDICES");for(var T=0;T<o.faces.length;++T)e.push(o.faces[T]);var R=e.endAccessor(),c={attributes:{POSITION:r},indices:this._addAccessor(e.index,R),material:this._addMaterial(o.material)};i&&"flat"!==o.shading&&(c.attributes.NORMAL=i),a&&(c.attributes.TEXCOORD_0=a),s&&"flat"!==o.shading&&(c.attributes.TANGENT=s),E&&(c.attributes.COLOR_0=E),n.primitives.push(c)}}catch(A){u.e(A)}finally{u.f()}}},{key:"_addMeshVertexNonIndexed",value:function(e,t,n,r,i,a,s){var E={attributes:{POSITION:n}};r&&(E.attributes.NORMAL=r),i&&(E.attributes.TEXCOORD_0=i),a&&(E.attributes.TANGENT=a),s&&(E.attributes.COLOR_0=s),e&&(E.material=this._addMaterial(e[0].material)),t.primitives.push(E)}}]),e}(),v=n(153),w=function(){function e(){Object(a.a)(this,e),this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}return Object(s.a)(e,[{key:"addScene",value:function(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}},{key:"removeScene",value:function(e){Object(v.i)(this._scenes,e)}},{key:"forEachScene",value:function(e){this._scenes.forEach(e)}}]),e}(),x=function(){function e(){Object(a.a)(this,e),this.name="",this._nodes=[]}return Object(s.a)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}}]),e}(),H=function(){function e(t){Object(a.a)(this,e),this.mesh=t,this.name="",this.translation=Object(L.e)(),this.rotation=Object(C.b)(),this.scale=Object(L.c)(L.a),this._nodes=[]}return Object(s.a)(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}},{key:"rotationAngles",set:function(e){Object(I.d)(this.rotation,e[0],e[1],e[2])}}]),e}(),V="model.glb";function k(e,t){return function(e,t,n){var r=new y(e,t=t||{},n),i=r.params;i?i.origin||(i.origin=new u.a({x:-1,y:-1,z:-1})):i={origin:new u.a({x:-1,y:-1,z:-1})};var a=i.origin,s=r.gltf,E=s.extras.promises,c=1,A=1,f=null;return Object(_.g)(E).then((function(){var e={origin:a};delete s.extras;var n="number"==typeof t.jsonSpacing?t.jsonSpacing:4,r=JSON.stringify(s,(function(n,r){if("extras"!==n){if(r instanceof ArrayBuffer){if(Object(F.e)(r))switch(t.imageOutputType){case R.DataURI:case R.GLB:break;case R.External:default:var i="img".concat(A,".png");return A++,e[i]=r,i}switch(t.bufferOutputType){case T.DataURI:return Object(F.a)(r);case T.GLB:if(f)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(f=r);case T.External:default:var a="data".concat(c,".bin");return c++,e[a]=r,a}}return r}}),n);return t.bufferOutputType===T.GLB||t.imageOutputType===R.GLB?e[V]=new o(r,f).buffer:e["model.gltf"]=r,e}))}(e,{bufferOutputType:T.GLB,imageOutputType:R.GLB,jsonSpacing:0},t)}var j=function(){function e(t,n){Object(a.a)(this,e),this._file={type:"model/gltf-binary",data:t},this.origin=n}return Object(s.a)(e,[{key:"buffer",value:function(){return Promise.resolve(this._file)}},{key:"download",value:function(e){Object(E.j)(new Blob([this._file.data],{type:this._file.type}),e)}}]),e}();function Y(e,t){var n=new w,r=new x;return n.addScene(r),r.addNode(new H(e)),k(n,t).then((function(e){return new j(e[V],e.origin)}))}},152:function(e,t,n){"use strict";var r,i,a,s,E,_,u,o,T,R,c,A,f,N,h,O,S,l,I,C,d,L;n.d(t,"a",(function(){return B})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return D})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return p})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return F})),n.d(t,"m",(function(){return L})),n.d(t,"n",(function(){return _})),n.d(t,"o",(function(){return C})),n.d(t,"p",(function(){return N})),n.d(t,"q",(function(){return O})),n.d(t,"r",(function(){return i})),n.d(t,"s",(function(){return S})),n.d(t,"t",(function(){return M})),n.d(t,"u",(function(){return I})),n.d(t,"v",(function(){return h})),n.d(t,"w",(function(){return R})),n.d(t,"x",(function(){return b})),n.d(t,"y",(function(){return d})),n.d(t,"z",(function(){return c})),n.d(t,"A",(function(){return f})),n.d(t,"B",(function(){return A})),n.d(t,"C",(function(){return P})),n.d(t,"D",(function(){return l})),function(e){e[e.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",e[e.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",e[e.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(r||(r={})),function(e){e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(i||(i={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(a||(a={})),function(e){e[e.ADD=32774]="ADD",e[e.SUBTRACT=32778]="SUBTRACT",e[e.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(s||(s={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e[e.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",e[e.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",e[e.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",e[e.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(E||(E={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(_||(_={})),function(e){e[e.CW=2304]="CW",e[e.CCW=2305]="CCW"}(u||(u={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT"}(o||(o={})),function(e){e[e.NEVER=512]="NEVER",e[e.LESS=513]="LESS",e[e.EQUAL=514]="EQUAL",e[e.LEQUAL=515]="LEQUAL",e[e.GREATER=516]="GREATER",e[e.NOTEQUAL=517]="NOTEQUAL",e[e.GEQUAL=518]="GEQUAL",e[e.ALWAYS=519]="ALWAYS"}(T||(T={})),function(e){e[e.ZERO=0]="ZERO",e[e.KEEP=7680]="KEEP",e[e.REPLACE=7681]="REPLACE",e[e.INCR=7682]="INCR",e[e.DECR=7683]="DECR",e[e.INVERT=5386]="INVERT",e[e.INCR_WRAP=34055]="INCR_WRAP",e[e.DECR_WRAP=34056]="DECR_WRAP"}(R||(R={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9729]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(A||(A={})),function(e){e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_3D=32879]="TEXTURE_3D",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(f||(f={})),function(e){e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.RED=6403]="RED",e[e.RG=33319]="RG",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER"}(N||(N={})),function(e){e[e.RGBA4=32854]="RGBA4",e[e.R16F=33325]="R16F",e[e.RG16F=33327]="RG16F",e[e.RGB32F=34837]="RGB32F",e[e.RGBA16F=34842]="RGBA16F",e[e.R32F=33326]="R32F",e[e.RG32F=33328]="RG32F",e[e.RGBA32F=34836]="RGBA32F",e[e.R11F_G11F_B10F=35898]="R11F_G11F_B10F",e[e.RGB8=32849]="RGB8",e[e.RGBA8=32856]="RGBA8",e[e.RGB5_A1=32855]="RGB5_A1",e[e.R8=33321]="R8",e[e.RG8=33323]="RG8",e[e.R8I=33329]="R8I",e[e.R8UI=33330]="R8UI",e[e.R16I=33331]="R16I",e[e.R16UI=33332]="R16UI",e[e.R32I=33333]="R32I",e[e.R32UI=33334]="R32UI",e[e.RG8I=33335]="RG8I",e[e.RG8UI=33336]="RG8UI",e[e.RG16I=33337]="RG16I",e[e.RG16UI=33338]="RG16UI",e[e.RG32I=33339]="RG32I",e[e.RG32UI=33340]="RG32UI",e[e.RGB16F=34843]="RGB16F",e[e.RGB9_E5=35901]="RGB9_E5",e[e.SRGB8=35905]="SRGB8",e[e.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",e[e.RGB565=36194]="RGB565",e[e.RGBA32UI=36208]="RGBA32UI",e[e.RGB32UI=36209]="RGB32UI",e[e.RGBA16UI=36214]="RGBA16UI",e[e.RGB16UI=36215]="RGB16UI",e[e.RGBA8UI=36220]="RGBA8UI",e[e.RGB8UI=36221]="RGB8UI",e[e.RGBA32I=36226]="RGBA32I",e[e.RGB32I=36227]="RGB32I",e[e.RGBA16I=36232]="RGBA16I",e[e.RGB16I=36233]="RGB16I",e[e.RGBA8I=36238]="RGBA8I",e[e.RGB8I=36239]="RGB8I",e[e.R8_SNORM=36756]="R8_SNORM",e[e.RG8_SNORM=36757]="RG8_SNORM",e[e.RGB8_SNORM=36758]="RGB8_SNORM",e[e.RGBA8_SNORM=36759]="RGBA8_SNORM",e[e.RGB10_A2=32857]="RGB10_A2",e[e.RGB10_A2UI=36975]="RGB10_A2UI"}(h||(h={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.INT=5124]="INT",e[e.HALF_FLOAT=5131]="HALF_FLOAT",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(O||(O={})),function(e){e[e.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",e[e.STENCIL_INDEX8=36168]="STENCIL_INDEX8",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e[e.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",e[e.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",e[e.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",e[e.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(S||(S={})),function(e){e[e.STATIC_DRAW=35044]="STATIC_DRAW",e[e.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",e[e.STREAM_DRAW=35040]="STREAM_DRAW",e[e.STATIC_READ=35045]="STATIC_READ",e[e.DYNAMIC_READ=35049]="DYNAMIC_READ",e[e.STREAM_READ=35041]="STREAM_READ",e[e.STATIC_COPY=35046]="STATIC_COPY",e[e.DYNAMIC_COPY=35050]="DYNAMIC_COPY",e[e.STREAM_COPY=35042]="STREAM_COPY"}(l||(l={})),function(e){e[e.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",e[e.VERTEX_SHADER=35633]="VERTEX_SHADER"}(I||(I={})),function(e){e[e.FRAMEBUFFER=36160]="FRAMEBUFFER",e[e.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",e[e.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(C||(C={})),function(e){e[e.TEXTURE=0]="TEXTURE",e[e.RENDER_BUFFER=1]="RENDER_BUFFER",e[e.CUBEMAP=2]="CUBEMAP"}(d||(d={})),function(e){e[e.NONE=0]="NONE",e[e.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",e[e.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",e[e.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(L||(L={}));var M,D,B=33984;!function(e){e[e.Texture=0]="Texture",e[e.BufferObject=1]="BufferObject",e[e.VertexArrayObject=2]="VertexArrayObject",e[e.Shader=3]="Shader",e[e.Program=4]="Program",e[e.FramebufferObject=5]="FramebufferObject",e[e.Renderbuffer=6]="Renderbuffer",e[e.Sync=7]="Sync",e[e.COUNT=8]="COUNT"}(M||(M={})),function(e){e[e.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",e[e.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",e[e.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",e[e.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",e[e.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",e[e.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",e[e.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",e[e.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",e[e.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",e[e.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",e[e.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",e[e.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",e[e.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",e[e.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",e[e.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",e[e.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(D||(D={}));var p,P,U,G,g,b,m,F=33306;!function(e){e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(p||(p={})),function(e){e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT=5124]="INT",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D",e[e.SAMPLER_CUBE=35680]="SAMPLER_CUBE",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",e[e.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",e[e.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",e[e.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",e[e.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",e[e.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",e[e.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",e[e.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",e[e.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",e[e.SAMPLER_3D=35679]="SAMPLER_3D",e[e.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",e[e.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",e[e.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",e[e.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",e[e.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",e[e.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",e[e.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",e[e.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",e[e.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",e[e.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",e[e.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",e[e.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(P||(P={})),function(e){e[e.OBJECT_TYPE=37138]="OBJECT_TYPE",e[e.SYNC_CONDITION=37139]="SYNC_CONDITION",e[e.SYNC_STATUS=37140]="SYNC_STATUS",e[e.SYNC_FLAGS=37141]="SYNC_FLAGS"}(U||(U={})),function(e){e[e.UNSIGNALED=37144]="UNSIGNALED",e[e.SIGNALED=37145]="SIGNALED"}(G||(G={})),function(e){e[e.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",e[e.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",e[e.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",e[e.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(e){e[e.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(b||(b={})),function(e){e[e.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))},723:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return A})),n.d(t,"e",(function(){return N}));var r=n(155),i=n(154),a=n.n(i),s=(n(147),n(159)),E=n(146),_=n(183);function u(e){var t=A(e);return Object(E.k)(t)?t.toDataURL():""}function o(e){return T.apply(this,arguments)}function T(){return T=Object(r.a)(a.a.mark((function e(t){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=A(t),!Object(E.j)(n)){e.next=3;break}throw new s.a("imageToArrayBuffer","Unsupported image type");case 3:return e.next=5,R(t);case 5:return r=e.sent,e.next=8,new Promise((function(e){return n.toBlob(e,r)}));case 8:if(i=e.sent){e.next=11;break}throw new s.a("imageToArrayBuffer","Failed to encode image");case 11:return e.next=13,i.arrayBuffer();case 13:return e.t0=e.sent,e.t1=r,e.abrupt("return",{data:e.t0,type:e.t1});case 16:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function R(e){return c.apply(this,arguments)}function c(){return(c=Object(r.a)(a.a.mark((function e(t){var n,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t instanceof HTMLImageElement){e.next=2;break}return e.abrupt("return","image/png");case 2:if(n=t.src,!Object(_.w)(n)){e.next=6;break}return r=Object(_.h)(n),i=r.mediaType,e.abrupt("return","image/jpeg"===i?i:"image/png");case 6:return e.abrupt("return",/\.png$/i.test(n)?"image/png":/\.(jpg|jpeg)$/i.test(n)?"image/jpeg":"image/png");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var n=t.getContext("2d");return e instanceof HTMLImageElement?n.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&n.putImageData(e,0,0),t}function f(e){for(var t=[],n=new Uint8Array(e),r=0;r<n.length;r++)t.push(String.fromCharCode(n[r]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function N(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}}}]);