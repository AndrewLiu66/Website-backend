(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[102],{1359:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(5),i=n(14),o=n(7),c=n(119),s=n(121),d=n(34),l=n(0),p=n.n(l),u=n(523),f=n(3),h=Object(c.a)(s.a)((function(){return{display:"flex",alignItems:"center",justifyContent:"space-between"}})),b=Object(c.a)(u.d)((function(){return{fontSize:18,marginLeft:".5rem"}})),j=Object(c.a)("img")((function(){return{width:"50px",marginRight:"6px",marginTop:"-1px"}})),m=Object(c.a)(u.b)((function(){return{width:"160px",color:"#0743a6",fontWeight:500,fontSize:"15px",marginLeft:"-5px"}})),O=Object(c.a)("img")((function(e){var t=e.theme;return Object(o.a)({width:"240px",marginLeft:"15px"},t.breakpoints.down("md"),{display:"none"})})),x=function(e){var t=e.children;return Object(f.jsxs)(h,{sx:{py:1},children:[Object(f.jsxs)(s.a,{display:"flex",alignItems:"center",children:[Object(f.jsx)(j,{src:"/assets/images/logos/one.png"}),Object(f.jsx)(b,{className:"sidenavHoverShow",children:Object(f.jsx)(m,{children:"Ocean Noise Explorer"})}),Object(f.jsx)(O,{src:"/assets/images/logos/uw.png"})]}),Object(f.jsx)(s.a,{className:"sidenavHoverShow",children:t||null})]})},v=n(6),g=n(2),w=n(42),y=n(137),k=n(1362),S=n(1385),E=n(662),T=n(426),N=n(524),R=n(672),D=n(770),M=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function L(e,t,n){var r,a=function(e,t,n){var r,a=t.getBoundingClientRect(),i=n&&n.getBoundingClientRect(),o=Object(D.a)(t);if(t.fakeTransform)r=t.fakeTransform;else{var c=o.getComputedStyle(t);r=c.getPropertyValue("-webkit-transform")||c.getPropertyValue("transform")}var s=0,d=0;if(r&&"none"!==r&&"string"===typeof r){var l=r.split("(")[1].split(")")[0].split(",");s=parseInt(l[4],10),d=parseInt(l[5],10)}return"left"===e?"translateX(".concat(i?i.right+s-a.left:o.innerWidth+s-a.left,"px)"):"right"===e?"translateX(-".concat(i?a.right-i.left-s:a.left+a.width-s,"px)"):"up"===e?"translateY(".concat(i?i.bottom+d-a.top:o.innerHeight+d-a.top,"px)"):"translateY(-".concat(i?a.top-i.top+a.height-d:a.top+a.height-d,"px)")}(e,t,"function"===typeof(r=n)?r():r);a&&(t.style.webkitTransform=a,t.style.transform=a)}var P=l.forwardRef((function(e,t){var n=Object(N.a)(),r={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},a={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},i=e.addEndListener,o=e.appear,c=void 0===o||o,s=e.children,d=e.container,p=e.direction,u=void 0===p?"down":p,h=e.easing,b=void 0===h?r:h,j=e.in,m=e.onEnter,O=e.onEntered,x=e.onEntering,w=e.onExit,y=e.onExited,k=e.onExiting,P=e.style,A=e.timeout,C=void 0===A?a:A,B=e.TransitionComponent,I=void 0===B?S.a:B,z=Object(v.a)(e,M),W=l.useRef(null),H=Object(T.a)(s.ref,W),Y=Object(T.a)(H,t),V=function(e){return function(t){e&&(void 0===t?e(W.current):e(W.current,t))}},F=V((function(e,t){L(u,e,d),Object(R.b)(e),m&&m(e,t)})),G=V((function(e,t){var r=Object(R.a)({timeout:C,style:P,easing:b},{mode:"enter"});e.style.webkitTransition=n.transitions.create("-webkit-transform",Object(g.a)({},r)),e.style.transition=n.transitions.create("transform",Object(g.a)({},r)),e.style.webkitTransform="none",e.style.transform="none",x&&x(e,t)})),X=V(O),_=V(k),q=V((function(e){var t=Object(R.a)({timeout:C,style:P,easing:b},{mode:"exit"});e.style.webkitTransition=n.transitions.create("-webkit-transform",t),e.style.transition=n.transitions.create("transform",t),L(u,e,d),w&&w(e)})),J=V((function(e){e.style.webkitTransition="",e.style.transition="",y&&y(e)})),U=l.useCallback((function(){W.current&&L(u,W.current,d)}),[u,d]);return l.useEffect((function(){if(!j&&"down"!==u&&"right"!==u){var e=Object(E.a)((function(){W.current&&L(u,W.current,d)})),t=Object(D.a)(W.current);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[u,j,d]),l.useEffect((function(){j||U()}),[j,U]),Object(f.jsx)(I,Object(g.a)({nodeRef:W,onEnter:F,onEntered:X,onEntering:G,onExit:q,onExited:J,onExiting:_,addEndListener:function(e){i&&i(W.current,e)},appear:c,in:j,timeout:C},z,{children:function(e,t){return l.cloneElement(s,Object(g.a)({ref:Y,style:Object(g.a)({visibility:"exited"!==e||j?void 0:"hidden"},P,s.props.style)},t))}}))})),A=n(1376),C=n(33),B=n(43),I=n(41),z=n(124),W=n(138);function H(e){return Object(z.a)("MuiDrawer",e)}Object(W.a)("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);var Y=["BackdropProps"],V=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],F=function(e,t){var n=e.ownerState;return[t.root,("permanent"===n.variant||"persistent"===n.variant)&&t.docked,t.modal]},G=Object(I.a)(k.a,{name:"MuiDrawer",slot:"Root",overridesResolver:F})((function(e){return{zIndex:e.theme.zIndex.drawer}})),X=Object(I.a)("div",{shouldForwardProp:I.b,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:F})({flex:"0 0 auto"}),_=Object(I.a)(A.a,{name:"MuiDrawer",slot:"Paper",overridesResolver:function(e,t){var n=e.ownerState;return[t.paper,t["paperAnchor".concat(Object(C.a)(n.anchor))],"temporary"!==n.variant&&t["paperAnchorDocked".concat(Object(C.a)(n.anchor))]]}})((function(e){var t=e.theme,n=e.ownerState;return Object(g.a)({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:t.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},"left"===n.anchor&&{left:0},"top"===n.anchor&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},"right"===n.anchor&&{right:0},"bottom"===n.anchor&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},"left"===n.anchor&&"temporary"!==n.variant&&{borderRight:"1px solid ".concat(t.palette.divider)},"top"===n.anchor&&"temporary"!==n.variant&&{borderBottom:"1px solid ".concat(t.palette.divider)},"right"===n.anchor&&"temporary"!==n.variant&&{borderLeft:"1px solid ".concat(t.palette.divider)},"bottom"===n.anchor&&"temporary"!==n.variant&&{borderTop:"1px solid ".concat(t.palette.divider)})})),q={left:"right",right:"left",top:"down",bottom:"up"};var J=l.forwardRef((function(e,t){var n=Object(B.a)({props:e,name:"MuiDrawer"}),r=Object(N.a)(),a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},i=n.anchor,o=void 0===i?"left":i,c=n.BackdropProps,s=n.children,d=n.className,p=n.elevation,u=void 0===p?16:p,h=n.hideBackdrop,b=void 0!==h&&h,j=n.ModalProps,m=(j=void 0===j?{}:j).BackdropProps,O=n.onClose,x=n.open,k=void 0!==x&&x,S=n.PaperProps,E=void 0===S?{}:S,T=n.SlideProps,R=n.TransitionComponent,D=void 0===R?P:R,M=n.transitionDuration,L=void 0===M?a:M,A=n.variant,I=void 0===A?"temporary":A,z=Object(v.a)(n.ModalProps,Y),W=Object(v.a)(n,V),F=l.useRef(!1);l.useEffect((function(){F.current=!0}),[]);var J=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?q[t]:t}(r,o),U=o,Q=Object(g.a)({},n,{anchor:U,elevation:u,open:k,variant:I},W),K=function(e){var t=e.classes,n=e.anchor,r=e.variant,a={root:["root"],docked:[("permanent"===r||"persistent"===r)&&"docked"],modal:["modal"],paper:["paper","paperAnchor".concat(Object(C.a)(n)),"temporary"!==r&&"paperAnchorDocked".concat(Object(C.a)(n))]};return Object(y.a)(a,H,t)}(Q),Z=Object(f.jsx)(_,Object(g.a)({elevation:"temporary"===I?u:0,square:!0},E,{className:Object(w.a)(K.paper,E.className),ownerState:Q,children:s}));if("permanent"===I)return Object(f.jsx)(X,Object(g.a)({className:Object(w.a)(K.root,K.docked,d),ownerState:Q,ref:t},W,{children:Z}));var $=Object(f.jsx)(D,Object(g.a)({in:k,direction:q[J],timeout:L,appear:F.current},T,{children:Z}));return"persistent"===I?Object(f.jsx)(X,Object(g.a)({className:Object(w.a)(K.root,K.docked,d),ownerState:Q,ref:t},W,{children:$})):Object(f.jsx)(G,Object(g.a)({BackdropProps:Object(g.a)({},c,m,{transitionDuration:L}),className:Object(w.a)(K.root,K.modal,d),open:k,ownerState:Q,onClose:O,hideBackdrop:b,ref:t},W,z,{children:$}))})),U=n(55),Q=Object(c.a)("div")((function(){return{top:0,zIndex:96,transition:"all 0.3s ease",boxShadow:d.b[8],height:64}})),K=Object(c.a)(s.a)((function(e){var t,n=e.theme;return t={padding:"8px",paddingLeft:18,paddingRight:20,height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:n.palette.primary.main},Object(o.a)(t,n.breakpoints.down("sm"),{paddingLeft:16,paddingRight:16}),Object(o.a)(t,n.breakpoints.down("xs"),{paddingLeft:14,paddingRight:16}),t})),Z=Object(c.a)("div")((function(e){var t=e.theme;return Object(o.a)({padding:"40px",width:"350px"},t.breakpoints.down("sm"),{width:"280px"})})),$=Object(c.a)("div")((function(){return{marginBottom:"40px"}})),ee=Object(c.a)(s.a)((function(){return{display:"flex"}})),te=Object(c.a)("img")((function(){return{width:"50px",marginRight:"10px",marginBottom:"30px"}})),ne=Object(c.a)(u.b)((function(e){e.theme;return{margin:"15px",cursor:"pointer"}})),re=function(){var e="right",t=Object(l.useState)({right:!1}),n=Object(i.a)(t,2),r=n[0],c=n[1],d=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(a.a)(Object(a.a)({},r),{},Object(o.a)({},e,t)))}};return Object(f.jsx)(Q,{children:Object(f.jsxs)(K,{children:[Object(f.jsx)(U.b,{to:"/",children:Object(f.jsx)(s.a,{display:"flex",children:Object(f.jsx)(x,{})})}),Object(f.jsxs)(ee,{sx:{p:1},children:[Object(f.jsx)(U.b,{to:"/",children:Object(f.jsx)(ne,{children:"Map"})}),Object(f.jsx)(U.b,{to:"/Video",children:Object(f.jsx)(ne,{children:"Gallery"})}),Object(f.jsx)(ne,{onClick:d(e,!0),children:"About"})]}),Object(f.jsx)(J,{anchor:e,open:r.right,onClose:d(e,!1),p:4,children:Object(f.jsxs)(Z,{children:[Object(f.jsx)(te,{src:"/assets/images/logos/one.png"}),Object(f.jsxs)($,{children:[Object(f.jsx)(u.b,{sx:{mb:1,fontWeight:800},children:"Director"}),Object(f.jsx)(u.c,{sx:{mt:0,mb:1,overflow:"hidden"},children:"Dr. Shima Abadi"})]}),Object(f.jsxs)($,{children:[Object(f.jsx)(u.b,{sx:{mb:1,fontWeight:800},children:"About"}),Object(f.jsxs)(u.c,{sx:{mt:0,mb:1,overflow:"hidden"},children:[Object(f.jsx)("a",{href:"https://sites.uw.edu/abadi/",target:"_blank",rel:"noreferrer",children:"Ocean Data Lab\xa0"}),"at the University of washington has developped ocean noise explorer (ONE), a web-based interactive ocean soundscape that will enable users to visualize and explore a wide variety of underwater noise metrics and other related data products. The raw data used in this project is collected by the Regional Cabled Array and the Coastal Endurance Array of the\xa0",Object(f.jsx)("a",{href:"https://oceanobservatories.org/",target:"_blank",rel:"noreferrer",children:"Ocean Observatories Initiative (OOI)"}),". The raw data is processed by"," ",Object(f.jsx)("a",{href:"https://ooipy.readthedocs.io/en/latest/",target:"_blank",rel:"noreferrer",children:"OOIPY"}),", a Python library developed by our team, to calculate different data products that are required for a comprehensive ocean soundscape analysis."]})]}),Object(f.jsxs)($,{children:[Object(f.jsx)(u.b,{sx:{mb:1,fontWeight:800},children:"Acknowledgement"}),Object(f.jsx)(s.a,{children:"We thank the Office of Naval Research (ONR) for funding this research project and the National Science Foundation (NSF) for funding the OOI infrastructure."})]})]})})]})})},ae=p.a.memo(re),ie=n(48),oe=n(30),ce=n(79),se=n(81),de=n(549);function le(e,t,n,r,a){var o="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,c=l.useState((function(){return a&&o?n(e).matches:r?r(e).matches:t})),s=Object(i.a)(c,2),d=s[0],p=s[1];return Object(de.a)((function(){var t=!0;if(o){var r=n(e),a=function(){t&&p(r.matches)};return a(),r.addListener(a),function(){t=!1,r.removeListener(a)}}}),[e,n,o]),d}var pe=l.useSyncExternalStore;function ue(e,t,n,r){var a=l.useCallback((function(){return t}),[t]),o=l.useMemo((function(){if(null!==r){var t=r(e).matches;return function(){return t}}return a}),[a,e,r]),c=l.useMemo((function(){if(null===n)return[a,function(){return function(){}}];var t=n(e);return[function(){return t.matches},function(e){return t.addListener(e),function(){t.removeListener(e)}}]}),[a,n,e]),s=Object(i.a)(c,2),d=s[0],p=s[1];return pe(p,d,o)}var fe=n(141),he=n(47),be=Object(c.a)(s.a)((function(e){return{display:"flex",background:e.theme.palette.background.default}})),je=Object(c.a)(s.a)((function(){return{height:"100%",display:"flex",overflowY:"auto",overflowX:"hidden",flexDirection:"column",justifyContent:"space-between"}})),me=Object(c.a)(s.a)((function(e){return{height:"100vh",display:"flex",flexGrow:"1",flexDirection:"column",verticalAlign:"top",marginLeft:e.width,position:"relative",overflow:"hidden",transition:"all 0.3s ease"}})),Oe=function(){var e=Object(ie.a)(),t=e.settings,n=e.updateSettings,a=t.layout1Settings,i=t.themes[a.topbar.theme],o=Object(oe.a)(),c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(ce.a)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,a=Object(se.a)({name:"MuiUseMediaQuery",props:t,theme:n}),i=a.defaultMatches,o=void 0!==i&&i,c=a.matchMedia,s=void 0===c?r?window.matchMedia:null:c,d=a.ssrMatchMedia,l=void 0===d?null:d,p=a.noSsr,u="function"===typeof e?e(n):e;return u=u.replace(/^@media( ?)/m,""),(void 0!==pe?ue:le)(u,o,s,l,p)}(o.breakpoints.down("md")),d=Object(l.useRef)({isMdScreen:c,settings:t}),p="theme-".concat(o.palette.type);return Object(l.useEffect)((function(){var e=d.current.settings,t=e.layout1Settings.leftSidebar.mode;e.layout1Settings.leftSidebar.show&&n({layout1Settings:{leftSidebar:{mode:c?"close":t}}})}),[c]),Object(f.jsx)(be,{className:p,children:Object(f.jsxs)(me,{children:[Object(f.jsx)(fe.a,{theme:i,children:Object(f.jsx)(ae,{fixed:!0})}),Object(f.jsx)(je,{children:Object(f.jsx)(s.a,{flexGrow:1,position:"relative",children:Object(f.jsx)(he.a,{children:Object(f.jsx)(r.a,{})})})})]})})};t.default=p.a.memo(Oe)},523:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return O}));var r=n(5),a=n(7),i=n(503),o=n(42),c=(n(0),n(41)),s=n(1196),d=n(3),l=["children","className","ellipsis","textTransform"],p=["children","className","ellipsis","textTransform"],u=["children","className","ellipsis","textTransform"],f=["children","className","ellipsis","textTransform"],h=Object(c.a)(s.a)((function(e){e.theme;var t=e.textTransformStyle,n=e.ellipsis;return{textTransform:t||"none",whiteSpace:n?"nowrap":"normal",overflow:n?"hidden":"",textOverflow:n?"ellipsis":""}})),b=function(e){var t=e.children,n=e.className,c=e.ellipsis,s=e.textTransform,p=Object(i.a)(e,l);return Object(d.jsx)(h,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:c,className:Object(o.a)(Object(a.a)({},n||"",!0)),component:"h1",mb:0,mt:0,fontSize:"28px",fontWeight:"500",lineHeight:"1.5"},p),{},{children:t}))},j=function(e){var t=e.children,n=e.className,c=e.ellipsis,s=e.textTransform,l=Object(i.a)(e,p);return Object(d.jsx)(h,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:c,className:Object(o.a)(Object(a.a)({},n||"",!0)),component:"h4",mb:0,mt:0,fontSize:"16px",fontWeight:"500",lineHeight:"1.5"},l),{},{children:t}))},m=function(e){var t=e.children,n=e.className,c=e.ellipsis,s=e.textTransform,l=Object(i.a)(e,u);return Object(d.jsx)(h,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:c,className:Object(o.a)(Object(a.a)({},n||"",!0)),component:"p",mb:0,mt:0,fontSize:"14px"},l),{},{children:t}))},O=function(e){var t=e.children,n=e.className,c=e.ellipsis,s=e.textTransform,l=Object(i.a)(e,f);return Object(d.jsx)(h,Object(r.a)(Object(r.a)({textTransformStyle:s,ellipsis:c,className:Object(o.a)(Object(a.a)({},n||"",!0)),component:"span",lineHeight:"1.5"},l),{},{children:t}))}}}]);