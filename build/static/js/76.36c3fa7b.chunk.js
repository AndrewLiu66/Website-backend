(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[76],{1196:function(e,t,n){"use strict";var r=n(78),a=n(80),i=n(82),c=Object(i.a)(),o=Object(r.a)({defaultTheme:c,defaultClassName:"MuiBox-root",generateClassName:a.a.generate});t.a=o},1233:function(e,t,n){"use strict";var r=n(16),a=n(7),i=n(6),c=n(2),o=n(0),s=n(42),l=n(9),m=n(123),u=n(137),d=n(41),p=n(43);var b=o.createContext(),f=n(124),g=n(138);function x(e){return Object(f.a)("MuiGrid",e)}var j=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],O=Object(g.a)("MuiGrid",["root","container","item","zeroMinWidth"].concat(Object(r.a)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),Object(r.a)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),Object(r.a)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),Object(r.a)(j.map((function(e){return"grid-xs-".concat(e)}))),Object(r.a)(j.map((function(e){return"grid-sm-".concat(e)}))),Object(r.a)(j.map((function(e){return"grid-md-".concat(e)}))),Object(r.a)(j.map((function(e){return"grid-lg-".concat(e)}))),Object(r.a)(j.map((function(e){return"grid-xl-".concat(e)}))))),h=n(3),v=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var r=e.xs,a=e.sm,i=e.md,c=e.lg,o=e.xl;return[Number(r)>0&&(n["spacing-xs-".concat(String(r))]||"spacing-xs-".concat(String(r))),Number(a)>0&&(n["spacing-sm-".concat(String(a))]||"spacing-sm-".concat(String(a))),Number(i)>0&&(n["spacing-md-".concat(String(i))]||"spacing-md-".concat(String(i))),Number(c)>0&&(n["spacing-lg-".concat(String(c))]||"spacing-lg-".concat(String(c))),Number(o)>0&&(n["spacing-xl-".concat(String(o))]||"spacing-xl-".concat(String(o)))]}var y=Object(d.a)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState,a=n.container,i=n.direction,c=n.item,o=n.lg,s=n.md,l=n.sm,m=n.spacing,u=n.wrap,d=n.xl,p=n.xs,b=n.zeroMinWidth;return[t.root,a&&t.container,c&&t.item,b&&t.zeroMinWidth].concat(Object(r.a)(w(m,a,t)),["row"!==i&&t["direction-xs-".concat(String(i))],"wrap"!==u&&t["wrap-xs-".concat(String(u))],!1!==p&&t["grid-xs-".concat(String(p))],!1!==l&&t["grid-sm-".concat(String(l))],!1!==s&&t["grid-md-".concat(String(s))],!1!==o&&t["grid-lg-".concat(String(o))],!1!==d&&t["grid-xl-".concat(String(d))]])}})((function(e){var t=e.ownerState;return Object(c.a)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(e){var t=e.theme,n=e.ownerState,r=Object(l.d)({values:n.direction,breakpoints:t.breakpoints.values});return Object(l.b)({theme:t},r,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(O.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,i=n.rowSpacing,c={};if(r&&0!==i){var o=Object(l.d)({values:i,breakpoints:t.breakpoints.values});c=Object(l.b)({theme:t},o,(function(e){var n=t.spacing(e);return"0px"!==n?Object(a.a)({marginTop:"-".concat(S(n))},"& > .".concat(O.item),{paddingTop:S(n)}):{}}))}return c}),(function(e){var t=e.theme,n=e.ownerState,r=n.container,i=n.columnSpacing,c={};if(r&&0!==i){var o=Object(l.d)({values:i,breakpoints:t.breakpoints.values});c=Object(l.b)({theme:t},o,(function(e){var n=t.spacing(e);return"0px"!==n?Object(a.a)({width:"calc(100% + ".concat(S(n),")"),marginLeft:"-".concat(S(n))},"& > .".concat(O.item),{paddingLeft:S(n)}):{}}))}return c}),(function(e){var t,n=e.theme,r=e.ownerState;return n.breakpoints.keys.reduce((function(e,a){var i={};if(r[a]&&(t=r[a]),!t)return e;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var o=Object(l.d)({values:r.columns,breakpoints:n.breakpoints.values}),s="object"===typeof o?o[a]:o;if(void 0===s||null===s)return e;var m="".concat(Math.round(t/s*1e8)/1e6,"%"),u={};if(r.container&&r.item&&0!==r.columnSpacing){var d=n.spacing(r.columnSpacing);if("0px"!==d){var p="calc(".concat(m," + ").concat(S(d),")");u={flexBasis:p,maxWidth:p}}}i=Object(c.a)({flexBasis:m,flexGrow:0,maxWidth:m},u)}return 0===n.breakpoints.values[a]?Object.assign(e,i):e[n.breakpoints.up(a)]=i,e}),{})})),N=o.forwardRef((function(e,t){var n,a=Object(p.a)({props:e,name:"MuiGrid"}),l=Object(m.a)(a),d=l.className,f=l.columns,g=l.columnSpacing,j=l.component,O=void 0===j?"div":j,S=l.container,N=void 0!==S&&S,T=l.direction,W=void 0===T?"row":T,z=l.item,k=void 0!==z&&z,M=l.lg,B=void 0!==M&&M,H=l.md,F=void 0!==H&&H,C=l.rowSpacing,E=l.sm,G=void 0!==E&&E,I=l.spacing,A=void 0===I?0:I,L=l.wrap,q=void 0===L?"wrap":L,D=l.xl,P=void 0!==D&&D,R=l.xs,V=void 0!==R&&R,J=l.zeroMinWidth,Q=void 0!==J&&J,U=Object(i.a)(l,v),Y=C||A,_=g||A,K=o.useContext(b),X=f||K||12,Z=Object(c.a)({},l,{columns:X,container:N,direction:W,item:k,lg:B,md:F,sm:G,rowSpacing:Y,columnSpacing:_,wrap:q,xl:P,xs:V,zeroMinWidth:Q}),$=function(e){var t=e.classes,n=e.container,a=e.direction,i=e.item,c=e.lg,o=e.md,s=e.sm,l=e.spacing,m=e.wrap,d=e.xl,p=e.xs,b={root:["root",n&&"container",i&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat(Object(r.a)(w(l,n)),["row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==m&&"wrap-xs-".concat(String(m)),!1!==p&&"grid-xs-".concat(String(p)),!1!==s&&"grid-sm-".concat(String(s)),!1!==o&&"grid-md-".concat(String(o)),!1!==c&&"grid-lg-".concat(String(c)),!1!==d&&"grid-xl-".concat(String(d))])};return Object(u.a)(b,x,t)}(Z);return n=Object(h.jsx)(y,Object(c.a)({ownerState:Z,className:Object(s.a)($.root,d),as:O,ref:t},U)),12!==X?Object(h.jsx)(b.Provider,{value:X,children:n}):n}));t.a=N},1272:function(e,t,n){"use strict";n.r(t);var r=n(7),a=(n(0),n(119)),i=n(1196),c=n(1233),o=n(523),s=n(3),l=Object(a.a)("div")((function(e){var t=e.theme;return Object(r.a)({margin:"60px"},t.breakpoints.down("sm"),{margin:"30px"})})),m=Object(a.a)(o.a)((function(e){var t=e.theme;return Object(r.a)({},t.breakpoints.down("sm"),{fontSize:"19px"})})),u=Object(a.a)(i.a)((function(){return{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",fontWeight:700,marginBottom:"10px"}})),d=Object(a.a)(i.a)((function(){return{fontSize:"14px",color:"#7e7f80"}})),p=function(e){var t=e.embedId,n=e.SoundType,r=e.Location,a=e.StartTime,i=e.EndTime,c=e.HydrophoneType;return Object(s.jsxs)("div",{className:"video-responsive",children:[Object(s.jsxs)(u,{children:[Object(s.jsxs)("span",{children:["Type: ",n]}),Object(s.jsxs)("span",{children:["Location: ",r]}),Object(s.jsxs)("span",{children:["Start Time: ",a]}),Object(s.jsxs)("span",{children:["End Time: ",i]}),Object(s.jsxs)("span",{children:["Hydrophone Type: ",c]})]}),Object(s.jsx)("iframe",{width:"780",height:"460",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})]})},b=function(e,t,n,r,a,i){return Object(s.jsx)(c.a,{item:!0,lg:12,md:12,sm:12,xs:12,mb:5,children:Object(s.jsx)(p,{embedId:e,SoundType:t,Location:n,StartTime:r,EndTime:a,HydrophoneType:i})})};t.default=function(){return Object(s.jsx)(l,{children:Object(s.jsxs)(c.a,{container:!0,spacing:3,mt:2,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(s.jsxs)(c.a,{item:!0,lg:12,md:12,sm:12,xs:12,style:{display:"flex",flexDirection:"column",alignItems:"center"},mb:6,children:[Object(s.jsx)(m,{children:"Welcome to the Ocean Noice Explorer Video Gallery"}),Object(s.jsx)(o.b,{children:"here are some interesting sound events"}),Object(s.jsx)(d,{children:"Note: Sample rate of the sound files are adjusted to speed up the audio"})]}),b("xp5jJUeLNRw","Airgun Pulses","Axial Base Seafloor (Fs = 64 kHz)","2019-08-01 15:00:03","2019-08-01 15:00:20","broadband"),b("kgeuBAxFB3E","Fin whale Calls","Axial Base Seaflor (Fs = 200 Hz)","2019-02-03 12:00:00","2019-02-03 12:15:00","low frequency"),b("qla5DjV2i_o","Ship Noise","Axial Base Seaflor (Fs = 200 Hz)","2016-01-08 21:54:00","2016-01-08 23:54:00","low frequency"),b("g4Fe43GChCw","Whale Vocalizations","Oregon Slope Base Seafloor (Fs = 64 kHz)","2017-10-06 20:00:00","2017-10-06 20:00:30","broadband"),b("erTn9MIQYIE","Axial Seamount Volcano Erruption","Axial Base Seaflor (Fs = 200 Hz)","2015-04-23 22:35:00","2015-04-23 22:45:00","low frequency")]})})}},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(6);function a(e,t){if(null==e)return{};var n,a,i=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return j}));var r=n(5),a=n(7),i=n(503),c=n(42),o=(n(0),n(41)),s=n(1196),l=n(3),m=["children","className","ellipsis","textTransform"],u=["children","className","ellipsis","textTransform"],d=["children","className","ellipsis","textTransform"],p=["children","className","ellipsis","textTransform"],b=Object(o.a)(s.a)((function(e){e.theme;var t=e.textTransformStyle,n=e.ellipsis;return{textTransform:t||"none",whiteSpace:n?"nowrap":"normal",overflow:n?"hidden":"",textOverflow:n?"ellipsis":""}})),f=function(e){var t=e.children,n=e.className,o=e.ellipsis,s=e.textTransform,u=Object(i.a)(e,m);return Object(l.jsx)(b,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:o,className:Object(c.a)(Object(a.a)({},n||"",!0)),component:"h1",mb:0,mt:0,fontSize:"28px",fontWeight:"500",lineHeight:"1.5"},u),{},{children:t}))},g=function(e){var t=e.children,n=e.className,o=e.ellipsis,s=e.textTransform,m=Object(i.a)(e,u);return Object(l.jsx)(b,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:o,className:Object(c.a)(Object(a.a)({},n||"",!0)),component:"h4",mb:0,mt:0,fontSize:"16px",fontWeight:"500",lineHeight:"1.5"},m),{},{children:t}))},x=function(e){var t=e.children,n=e.className,o=e.ellipsis,s=e.textTransform,m=Object(i.a)(e,d);return Object(l.jsx)(b,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:o,className:Object(c.a)(Object(a.a)({},n||"",!0)),component:"p",mb:0,mt:0,fontSize:"14px"},m),{},{children:t}))},j=function(e){var t=e.children,n=e.className,o=e.ellipsis,s=e.textTransform,m=Object(i.a)(e,p);return Object(l.jsx)(b,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:o,className:Object(c.a)(Object(a.a)({},n||"",!0)),component:"span",lineHeight:"1.5"},m),{},{children:t}))}}}]);