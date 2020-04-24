(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/post/multivote/MultiVote.tsx":function(e,t,n){"use strict";var r=n("./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js"),a=n.n(r),o=n("./node_modules/@babel/runtime/helpers/slicedToArray.js"),c=n.n(o),l=n("./node_modules/graphql-tag/src/index.js"),i=n.n(l),s=n("./node_modules/react/index.js"),u=n.n(s),p=n("./node_modules/react-redux/es/index.js"),d=n("./src/components/post/multivote/ClapMutation.tsx"),f=n("./node_modules/@babel/runtime/helpers/defineProperty.js"),m=n.n(f),v=n("./src/framework/design-system/components/index.ts"),b=n("./src/framework/style/index.ts"),h=n("./src/styles/colors.ts"),g=n("./src/styles/mediaTypes.ts");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O={top:"0",left:"0",width:"60px",height:"60px"},E={top:"-2px",left:"0",width:"25px",height:"36px"},x=function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({position:"absolute",pointerEvents:"none"},e?O:E)},j={"0%":{opacity:"0",transform:"scale(1)"},"32%":{opacity:"1"},"100%":{opacity:"0",transform:"scale(1.5)"}},C={"0%":{opacity:"0",transform:"scale(1)"},"32%":{opacity:"1",transform:"scale(1.3)"},"100%":{opacity:"0",transform:"scale(1.6)"}},w=function(e){return m()({animation:"370ms ease-out 1 ".concat(e)},Object(g.b)("reduce"),{animationDuration:"0.1ms"})},k=function(e){var t=e?30:13;return{position:"absolute",top:"".concat(48,"%"),left:"".concat(-5,"px"),transformOrigin:"".concat(t+2+3,"px"),width:"".concat(2,"px"),height:"".concat(2,"px"),borderRadius:"50%",backgroundColor:h.n}},L=function(e){var t=e?30:13;return{position:"absolute",top:"".concat(44,"%"),left:"".concat(-9,"px"),transformOrigin:"".concat(t+6+3,"px"),width:"0",height:"0",borderTop:"2px solid transparent",borderBottom:"2px solid transparent",borderLeft:"".concat(6,"px solid ").concat(h.h)}};function M(e){var t=e.isLarge,n=e.offset,r=e.onBurstEnd,a=Object(b.useCx)(),o=a(x(t));return s.createElement(v.L,{keyframes:{dotKeyframesName:j,triangleKeyframesName:C}},(function(e){for(var c=e.dotKeyframesName,l=e.triangleKeyframesName,i=[],u=[],p=0;p<5;p++){var d=72*p+n;i.push(s.createElement("div",{key:d,className:"".concat(a(k(t))),style:{transform:"rotate(".concat(d,"deg)")}})),u.push(s.createElement("div",{key:d,className:"".concat(a(L(t))),style:{transform:"rotate(".concat(d+13,"deg)")}}))}return s.createElement("div",{className:o},s.createElement("div",{className:"".concat(o," ").concat(a(w(c))),onAnimationEnd:function(){return r(n)}},i),s.createElement("div",{className:"".concat(o," ").concat(a(w(l)))},u))}))}var z=n("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),S=n.n(z),A=n("./node_modules/@babel/runtime/helpers/extends.js"),P=n.n(A),R=n("./src/styles/breakpoints.ts"),D=n("./src/svg/clap-25px.svg");function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=u.a.createElement("g",{fillRule:"evenodd"},u.a.createElement("path",{d:"M13.74 1l.76 2.97.76-2.97zM16.82 4.78l1.84-2.56-1.43-.47zM10.38 2.22l1.84 2.56-.41-3.03zM22.38 22.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M9.1 22.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L6.1 15.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L6.4 11.26l-1.18-1.18a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L11.96 14a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L8.43 9.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L20.63 15c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM13 6.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 23 23.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"})),U=function(e){return u.a.createElement("svg",I({width:29,height:29},e),N)};function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _=u.a.createElement("path",{d:"M28.86 17.34l-3.64-6.4c-.3-.43-.71-.73-1.16-.8a1.12 1.12 0 0 0-.9.21c-.62.5-.73 1.18-.32 2.06l1.22 2.6 1.4 2.45c2.23 4.09 1.51 8-2.15 11.66a9.6 9.6 0 0 1-.8.71 6.53 6.53 0 0 0 4.3-2.1c3.82-3.82 3.57-7.87 2.05-10.39zm-6.25 11.08c3.35-3.35 4-6.78 1.98-10.47L21.2 12c-.3-.43-.71-.72-1.16-.8a1.12 1.12 0 0 0-.9.22c-.62.49-.74 1.18-.32 2.06l1.72 3.63a.5.5 0 0 1-.81.57l-8.91-8.9a1.33 1.33 0 0 0-1.89 1.88l5.3 5.3a.5.5 0 0 1-.71.7l-5.3-5.3-1.49-1.49c-.5-.5-1.38-.5-1.88 0a1.34 1.34 0 0 0 0 1.89l1.49 1.5 5.3 5.28a.5.5 0 0 1-.36.86.5.5 0 0 1-.36-.15l-5.29-5.29a1.34 1.34 0 0 0-1.88 0 1.34 1.34 0 0 0 0 1.89l2.23 2.23L9.3 21.4a.5.5 0 0 1-.36.85.5.5 0 0 1-.35-.14l-3.32-3.33a1.33 1.33 0 0 0-1.89 0 1.32 1.32 0 0 0-.39.95c0 .35.14.69.4.94l6.39 6.4c3.53 3.53 8.86 5.3 12.82 1.35zM12.73 9.26l5.68 5.68-.49-1.04c-.52-1.1-.43-2.13.22-2.89l-3.3-3.3a1.34 1.34 0 0 0-1.88 0 1.33 1.33 0 0 0-.4.94c0 .22.07.42.17.61zm14.79 19.18a7.46 7.46 0 0 1-6.41 2.31 7.92 7.92 0 0 1-3.67.9c-3.05 0-6.12-1.63-8.36-3.88l-6.4-6.4A2.31 2.31 0 0 1 2 19.72a2.33 2.33 0 0 1 1.92-2.3l-.87-.87a2.34 2.34 0 0 1 0-3.3 2.33 2.33 0 0 1 1.24-.64l-.14-.14a2.34 2.34 0 0 1 0-3.3 2.39 2.39 0 0 1 3.3 0l.14.14a2.33 2.33 0 0 1 3.95-1.24l.09.09c.09-.42.29-.83.62-1.16a2.34 2.34 0 0 1 3.3 0l3.38 3.39a2.17 2.17 0 0 1 1.27-.17c.54.08 1.03.35 1.45.76.1-.55.41-1.03.9-1.42a2.12 2.12 0 0 1 1.67-.4 2.8 2.8 0 0 1 1.85 1.25l3.65 6.43c1.7 2.83 2.03 7.37-2.2 11.6zM13.22.48l-1.92.89 2.37 2.83-.45-3.72zm8.48.88L19.78.5l-.44 3.7 2.36-2.84zM16.5 3.3L15.48 0h2.04L16.5 3.3z",fillRule:"evenodd"}),T=function(e){return u.a.createElement("svg",F({width:33,height:33,viewBox:"0 0 33 33"},e),_)},H=n("./src/svg/clap-filled-25px.svg");function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var V=u.a.createElement("g",{fillRule:"evenodd"},u.a.createElement("path",{d:"M13.74 1l.76 2.97.76-2.97zM18.63 2.22l-1.43-.47-.4 3.03zM11.79 1.75l-1.43.47 1.84 2.56zM24.47 14.3L21.45 9c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M14.58 10.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z"}),u.a.createElement("path",{d:"M17.81 10.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.71.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L9.2 7.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L5.8 8.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L4.58 15.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z"})),K=function(e){return u.a.createElement("svg",B({width:29,height:29},e),V)};function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var J=u.a.createElement("g",{fillRule:"evenodd"},u.a.createElement("path",{d:"M29.58 17.1l-3.85-6.78c-.37-.54-.88-.9-1.44-.99a1.5 1.5 0 0 0-1.16.28c-.42.33-.65.74-.7 1.2v.01l3.63 6.37c2.46 4.5 1.67 8.8-2.33 12.8-.27.27-.54.5-.81.73a7.55 7.55 0 0 0 4.45-2.26c4.16-4.17 3.87-8.6 2.21-11.36zm-4.83.82l-3.58-6.3c-.3-.44-.73-.74-1.19-.81a1.1 1.1 0 0 0-.89.2c-.64.51-.75 1.2-.33 2.1l1.83 3.86a.6.6 0 0 1-.2.75.6.6 0 0 1-.77-.07l-9.44-9.44c-.51-.5-1.4-.5-1.9 0a1.33 1.33 0 0 0-.4.95c0 .36.14.7.4.95l5.6 5.61a.6.6 0 1 1-.84.85l-5.6-5.6-.01-.01-1.58-1.59a1.35 1.35 0 0 0-1.9 0 1.35 1.35 0 0 0 0 1.9l1.58 1.59 5.6 5.6a.6.6 0 0 1-.84.86L4.68 13.7c-.51-.51-1.4-.51-1.9 0a1.33 1.33 0 0 0-.4.95c0 .36.14.7.4.95l2.36 2.36 3.52 3.52a.6.6 0 0 1-.84.85l-3.53-3.52a1.34 1.34 0 0 0-.95-.4 1.34 1.34 0 0 0-.95 2.3l6.78 6.78c3.72 3.71 9.33 5.6 13.5 1.43 3.52-3.52 4.2-7.13 2.08-11.01zM11.82 7.72c.06-.32.21-.63.46-.89a1.74 1.74 0 0 1 2.4 0l3.23 3.24a2.87 2.87 0 0 0-.76 2.99l-5.33-5.33zM13.29.48l-1.92.88 2.37 2.84zM21.72 1.36L19.79.5l-.44 3.7zM16.5 3.3L15.48 0h2.04z"})),X=function(e){return u.a.createElement("svg",Y({width:33,height:33},e),J)};function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var G=u.a.createElement("path",{d:"M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62",fillRule:"evenodd"}),Q=function(e){return u.a.createElement("svg",q({width:29,height:29},e),G)},W=n("./src/util/hooks/useInterval.tsx"),Z=n("./src/util/hooks/useIsomorphicLayoutEffect.tsx"),$=n("./src/util/useragent.ts");function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){m()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={S:s.createElement(D.a,null),M:s.createElement(U,null),L:s.createElement(T,null)},re={S:s.createElement(H.a,null),M:s.createElement(K,null),L:s.createElement(X,null)},ae={"0%":{transform:"scale(1)",opacity:1},"70%":{transform:"scale(1.4)",opacity:0},"100%":{opacity:0}},oe=function(e){return e?"accentColor":"baseColor"},ce={left:"0",height:"100%",position:"absolute",top:"0",width:"100%"},le=function(e){return function(t){var n;return n={backgroundColor:t.backgroundColor,border:"1px solid ".concat(t.baseColor.border.lighter),borderRadius:"50%",display:"flex",alignItems:"center",height:"60px",position:"relative",width:"60px"},m()(n,Object(g.b)("no-preference"),{transition:"border-color 150ms ease"}),m()(n,":hover",{borderColor:t[e].border.dark}),n}},ie=function(e){return{border:"1px solid ".concat(e.baseColor.border.dark)}},se={transform:"translateX(-35px)"},ue=m()({transform:"translateX(0)"},Object(g.b)("no-preference"),{transition:"transform .2s ".concat("cubic-bezier(.25,0,.6,1.4)")}),pe=m()({},":hover + .".concat("multi-vote-undo-revealed"),se),de=function(e){var t;return t={},m()(t,R.sm(e),{display:"none"}),m()(t,"border","none"),m()(t,"cursor","pointer"),m()(t,"fill",e.baseColor.fill.lighter),m()(t,"left","4px"),m()(t,"outline","none"),m()(t,"padding","0"),m()(t,"position","absolute"),m()(t,"transition","transform .3s ".concat("cubic-bezier(.25,0,.6,1.4)"," 1s")),m()(t,":hover",se),m()(t,":focus",{fill:e.baseColor.fill.dark}),m()(t,Object(g.b)("reduce"),{transitionDuration:"0.1ms !important"}),t},fe=function(e,t){return function(n){return m()({},Object(g.b)("no-preference"),{"::before":te({background:"\n      radial-gradient(circle, ".concat(n[t].border.darker," 60%, transparent 70%)\n    "),borderRadius:"50%",content:'""',display:"block",zIndex:0},ce),":hover::before":{animation:"".concat(e," 2000ms infinite cubic-bezier(.1,.12,.25,1)")}})}},me=function(e,t,n){var r,a;switch(e){case"accentColor":var o=n.accentColor.fill;r=o.dark,a=o.normal;break;default:var c=n.baseColor.fill;r=c.lighter,a=c.light}return{fill:a,":focus":{fill:t?a:r},":hover":{fill:t?a:r}}},ve=function(e){return{opacity:.25,cursor:"not-allowed"}},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){return te({padding:0,outline:0,border:0,userSelect:"none",cursor:"pointer","> svg":{pointerEvents:"none"},":active":{borderStyle:e?"solid":"none"}},t?pe:null,{"-webkit-user-select":"none"})}},he=!1;function ge(e){var t=e.callback,n=e.ms,r=void 0===n?300:n,a=e.callImmediately,o=void 0===a||a,l=s.useState(!1),i=c()(l,2),u=i[0],p=i[1];Object(W.a)(t,u?r:null);var d=s.useCallback((function(e){"touchstart"===e.type&&(he=!0),("mousedown"!==e.type||!he&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:navigator.userAgent;return 0===e.button&&!(Object($.a)(t)&&e.ctrlKey)}(e))&&(o&&t(),p(!0))})),f=s.useCallback((function(){p(!1)}));return Object(Z.a)((function(){if(u)return document.addEventListener("mouseup",f),function(){return document.removeEventListener("mouseup",f)}}),[u]),{onMouseDown:d,onTouchStart:d,onTouchEnd:f}}function ye(e){var t=e.pulseOnHover,n=void 0===t||t,r=e.isAccentColor,a=void 0!==r&&r,o=e.children,c=Object(b.useCx)(),l=oe(a);return s.createElement(v.L,{keyframes:{pulseAnimation:ae}},(function(e){var t=e.pulseAnimation;return s.createElement("div",{className:c([le(l)].concat(n?fe(t,l):ie))},o)}))}function Oe(e){var t=e.isSuppressed,n=e.onClick,r=Object(b.useCx)();return s.createElement("button",{className:"".concat(r([de].concat(t?ue:[]))).concat(t?"":" multi-vote-undo-revealed"),onClick:n},s.createElement(Q,null))}function Ee(e){var t=e.canUndo,n=void 0!==t&&t,r=e.isCircle,a=void 0!==r&&r,o=e.isFilled,c=void 0!==o&&o,l=e.isDisabled,i=void 0!==l&&l,u=e.isUndoSuppressed,p=void 0!==u&&u,d=e.isAccentColor,f=void 0!==d&&d,v=e.scale,h=void 0===v?"L":v,y=e.onClickAndHold,O=e.onUndo,E=Object(b.useCx)(),x=oe(f),j=a?function(e,t){return function(n){var r=me(e,t,n);return te({alignItems:"center",background:n.backgroundColor,borderRadius:"50%",display:"flex",justifyContent:"center",zIndex:2},ce,{},r,m()({},Object(g.b)("no-preference"),{transition:"fill ".concat(200,"ms ease")}))}}(x,i):function(e,t){return function(n){return me(e,t,n)}}(x,i),C=ge({callback:y,ms:200}),w=c||i?re[h]:ne[h];return y?s.createElement(s.Fragment,null,s.createElement("button",P()({className:E([be(a,n),j])},C),w),n&&s.createElement(Oe,{onClick:O,isSuppressed:p})):s.createElement("div",{className:E([be(a),j].concat(S()(i?[ve]:[])))},w)}function xe(e){var t=e.canUndo,n=e.isCircle,r=e.isFilled,a=e.isUndoSuppressed,o=e.disableReason,c=e.isAccentColor,l=e.scale,i=e.onClickAndHold,u=e.onUndo,p={isFilled:r,scale:l},d={onClickAndHold:i,isAccentColor:c};return o?s.createElement(v.I,{darkTheme:!0,popoverRenderFn:function(){return s.createElement(v.b,{padding:"8px",whiteSpace:"nowrap"},o)},placement:"top",targetDistance:15},s.createElement(Ee,P()({isDisabled:!0},p))):n?s.createElement(ye,{pulseOnHover:!r,isAccentColor:c},s.createElement(Ee,P()({isCircle:!0,canUndo:t,isUndoSuppressed:a,onUndo:u},p,d))):s.createElement(Ee,P()({},p,d))}var je=n("./src/components/post/multivote/MultiVoteCount.tsx"),Ce={"0%":{transform:"matrix(0.97, 0, 0, 1, 0, 12)",opacity:"0"},"20%":{transform:"matrix(0.99, 0, 0, 1, 0, 2)",opacity:".7"},"40%":{transform:"matrix(1, 0, 0, 1, 0, -1)",opacity:"1"},"70%":{transform:"matrix(1, 0, 0, 1, 0, 0)",opacity:"1"},"100%":{transform:"matrix(1, 0, 0, 1, 0, 0)",opacity:"1"}},we={"0%":{opacity:"1",transform:"translateY(0px)"},"10%":{opacity:"1",transform:"translateY(-3px)"},"100%":{opacity:"0",transform:"translateY(-50px)"}},ke={"0%":{transform:"scale(1)"},"15%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}},Le=function(e,t){return function(n){var r=t?"accentColor":"baseColor";return m()({backgroundColor:n[r].fill.normal,bottom:"FAR"===e?"85px":"39px",color:"#fff",borderRadius:"50%",fontSize:"15px",height:"35px",left:"FAR"===e?"12px":"-4px",lineHeight:"35px",position:"absolute",textAlign:"center",width:"35px"},Object(g.b)("reduce"),{animationDuration:"0.1ms !important"})}},Me=function(e,t){var n=e.current;n&&(n.style.animation=t,n.scrollTop)};function ze(e){var t=e.clappedAt,n=e.count,r=e.isAccentColor,a=e.onFloatEnd,o=e.placement,l=Object(b.useCx)(),i=s.useState(t),u=c()(i,2),p=u[0],d=u[1],f=t!==p,m=s.useRef({enter:"",exit:"",pop:""}),h=s.useRef(null),g=s.useCallback((function(e){h.current=e,e&&Me(h,"".concat(m.current.enter," ").concat("400ms ease-out"))}),[]);function y(e){var t=m.current;e.animationName===t.enter||e.animationName===t.pop?Me(h,"".concat(t.exit," ").concat("400ms ease-out 500ms")):e.animationName===t.exit&&a()}return f&&(Me(h,""),Me(h,"".concat(m.current.pop," ").concat("500ms")),d(t)),s.createElement(v.L,{keyframes:{enter:Ce,exit:we,pop:ke}},(function(e){return m.current=e,s.createElement("div",{ref:g,className:l([Le(o,r)]),onAnimationEnd:y},"+".concat(n))}))}var Se={"0%":{transform:"scale(1)"},"50%":{transform:"scale(1.1)"},"100%":{transform:"scale(1)"}};function Ae(e){var t=e.isPopping,n=void 0!==t&&t,r=e.onPopEnd,a=e.children,o=Object(b.useCx)();return s.createElement(v.L,{keyframes:{popAnimation:Se}},(function(e){var t,c=e.popAnimation;return s.createElement("div",{className:n?o((t=c,m()({animation:"".concat(t," 500ms 1")},Object(g.b)("reduce"),{animationDuration:"0.1ms"}))):"",onAnimationEnd:r},a)}))}var Pe=n("./src/components/session/useViewer.tsx"),Re=n("./src/components/susi/SusiClickable.tsx"),De=n("./src/framework/reporter/index.ts"),Ie=n("./src/framework/source/index.ts"),Ne=n("./src/store/actions/multiVote.ts"),Ue=n("./src/util/post/claps.ts"),Fe=n("./src/util/routes.ts");function _e(){var e=a()(["\n  fragment MultiVote_post on Post {\n    id\n    clapCount\n    creator {\n      id\n      ...SusiClickable_user\n    }\n    viewerClapCount\n    isPublished\n    ...SusiClickable_post\n    collection {\n      id\n      slug\n    }\n    isLimitedState\n    ...MultiVoteCount_post\n  }\n  ","\n  ","\n  ","\n"]);return _e=function(){return e},e}n.d(t,"b",(function(){return Be})),n.d(t,"a",(function(){return Ve}));var Te={SUBTLE:"S",SUBTLE_PADDED:"M",OBVIOUS:"L"},He=function(e){var t,n=e.post,r=e.buttonStyle,a=e.hasDialog,o=e.isAccentColor,l=void 0===o?!!n.collection:o,i=Object(d.b)(),u=Object(Pe.b)(),f=null!==(t=null==u?void 0:u.id)&&void 0!==t?t:"",m=Object(p.f)((function(e){return e.multiVote.clapsPerPost})),b=Object(p.e)(),h=s.useCallback((function(e){return b(Object(Ne.d)(e))}),[b]),g=s.useCallback((function(e){return b(Object(Ne.c)(e))}),[b]),y=s.useState(),O=c()(y,2),E=O[0],x=O[1],j=s.useState(0),C=c()(j,2),w=C[0],k=C[1],L=s.useState([]),z=c()(L,2),S=z[0],A=z[1],P=s.useState(!1),R=c()(P,2),D=R[0],I=R[1],N=s.useState(!1),U=c()(N,2),F=U[0],_=U[1],T=s.useState(0),H=c()(T,2),B=H[0],V=H[1],K=Object(Ue.a)(m,n),Y=K.clapCount,J=K.viewerClapCount,X=K.viewerHasClappedSinceFetch,q=Object(De.c)(),G=Object(Ie.d)();function Q(e){A(S.filter((function(t){return t!==e})))}function W(){i(n,f,w),k(0),q.event("post.clientUpvote",{postId:n.id,postIds:[n.id],voteCount:w,source:G})}s.useEffect((function(){if(E&&clearTimeout(E),0!==w){var e=setTimeout(W,500);x(e)}else x(void 0)}),[w]),s.useEffect((function(){return function(){g({postId:n.id})}}),[]);var Z,$=n.collection,ee=n.creator,te=n.id,ne=n.isPublished,re=n.isLimitedState,ae=(Z=!(!ee||ee.id!==f),re?"This feature is temporarily disabled.":ne?Z?"You cannot applaud your own story.":void 0:"You cannot applaud a draft."),oe="OBVIOUS"===r,ce=!!(J&&J>0),le=!!(Y&&Y>0),ie=Te[r],se=$&&$.slug?Object(Fe.Ub)($.slug,te):Object(Fe.Tb)(te);return s.createElement(v.b,{display:"flex",alignItems:"center"},s.createElement(v.b,{marginRight:oe&&!ae?"16px":"5px",position:"relative"},f||ae?s.createElement(s.Fragment,null,D&&s.createElement(ze,{count:J,clappedAt:B,placement:oe?"FAR":"NEAR",isAccentColor:l,onFloatEnd:function(){I(!1)}}),s.createElement(Ae,{isPopping:F,onPopEnd:function(){_(!1)}},s.createElement(xe,{scale:ie,canUndo:ce,isAccentColor:l,isCircle:oe,isFilled:ce,isUndoSuppressed:S.length>0,disableReason:ae,onClickAndHold:function(){for(var e=360*Math.random();-1!==S.indexOf(e);)e+=360;A(S.concat(e)),V(Date.now()),I(!0),_(!0),function(){if(J&&J>=50)return;h({postId:n.id,clapCount:Y+1,viewerClapCount:J+1,viewerHasClappedSinceFetch:!0}),k(w+1)}()},onUndo:function(){J&&(i(n,f,-J),h({postId:n.id,clapCount:Y-J,viewerClapCount:0,viewerHasClappedSinceFetch:!0}),k(0),q.event("post.clientUnvote",{postId:n.id,postIds:[n.id],unvoteCount:J,source:G}))}})),S.map((function(e){return s.createElement(M,{key:e,isLarge:oe,offset:e,onBurstEnd:Q})}))):s.createElement(Re.a,{operation:"register",post:n,user:n.creator,actionUrl:se},s.createElement(xe,{isAccentColor:l,isCircle:oe,scale:ie}))),le&&!D&&s.createElement(v.b,{marginTop:"5px"},s.createElement(je.a,{shouldShowNetwork:oe,post:n,clapCount:Y,showFullNumber:X,hasLabel:oe,hasDialog:a})))},Be=i()(_e(),Re.d,Re.f,je.b),Ve=function(e){var t;return s.createElement(Ie.b,{source:{postId:null===(t=e.post)||void 0===t?void 0:t.id},extendSource:!0},s.createElement(He,e))}},"./src/svg/clap-25px.svg":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=a.a.createElement("g",{fillRule:"evenodd"},a.a.createElement("path",{d:"M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z"}));t.a=function(e){return a.a.createElement("svg",o({width:25,height:25,viewBox:"0 0 25 25"},e),c)}},"./src/svg/clap-filled-25px.svg":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n.n(r);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=a.a.createElement("g",{fillRule:"evenodd"},a.a.createElement("path",{d:"M11.74 0l.76 2.97.76-2.97zM16.63 1.22L15.2.75l-.4 3.03zM9.79.75l-1.43.47 1.84 2.56zM22.47 13.3L19.45 8c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M12.58 9.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z"}),a.a.createElement("path",{d:"M15.81 9.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.72.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L7.2 6.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L3.8 7.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L2.58 14.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z"}));t.a=function(e){return a.a.createElement("svg",o({width:25,height:25},e),c)}},"./src/util/hooks/useInterval.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("./node_modules/react/index.js");function a(e,t){var n=r.useRef(e);function a(){n.current&&n.current()}r.useEffect((function(){n.current=e}),[e]),r.useEffect((function(){if(null!==t){var e=setInterval(a,t);return function(){clearInterval(e)}}}),[t])}}}]);
//# sourceMappingURL=screen.debug.cachedPost~screen.post~screen.post.amp~screen.profile~screen.sequence.library~screen.se~95638fc8.44da9d0f.chunk.js.map