(this["webpackJsonpgraphql-chess-app"]=this["webpackJsonpgraphql-chess-app"]||[]).push([[0],{18:function(e,n,t){e.exports=t(33)},29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a,r,c,o,s,i,u,l=t(0),f=t.n(l),b=t(7),d=t.n(b),p=t(4),v=t(3),m=t(15),h=(t(29),t(30),t(31),t(1)),O="chess-and-constants/REQUEST",j="chess-and-constants/RECEIVE",E="chess-and-constants/FAILURE",C="move/REQUEST",y="move/RECEIVE",g="move/FAILURE",S="BLACK",k="WHITE",I="KING",q="QUEEN",A="ROOK",L="BISHOP",N="KNIGHT",w="PAWN",P=(u={},Object(h.a)(u,I,(a={},Object(h.a)(a,S,"\u265a"),Object(h.a)(a,k,"\u2654"),a)),Object(h.a)(u,q,(r={},Object(h.a)(r,S,"\u265b"),Object(h.a)(r,k,"\u2655"),r)),Object(h.a)(u,A,(c={},Object(h.a)(c,S,"\u265c"),Object(h.a)(c,k,"\u2656"),c)),Object(h.a)(u,L,(o={},Object(h.a)(o,S,"\u265d"),Object(h.a)(o,k,"\u2657"),o)),Object(h.a)(u,N,(s={},Object(h.a)(s,S,"\u265e"),Object(h.a)(s,k,"\u2658"),s)),Object(h.a)(u,w,(i={},Object(h.a)(i,S,"\u265f"),Object(h.a)(i,k,"\u2659"),i)),u),T=S,R="\n  fragment ChessAttributes on Chess {\n      analysis {\n        bestMove {\n          from\n          to\n          flags\n        }\n        ponderMove {\n          from\n          to\n          flags\n        }\n      }\n      board {\n        rank\n        squares {\n          file\n          piece {\n            type\n            color\n          }\n        }\n      }\n      fen\n      gameOver\n      inCheck\n      inCheckmate\n      inDraw\n      inStalemate\n      insufficientMaterial\n      inThreefoldRepetition\n      moves {\n        color\n        from\n        to\n        promotion\n        flags\n      }\n      turn\n  }\n",B="\n  ".concat(R,"\n\n  fragment ColorConstants on Constants {\n    BLACK\n    WHITE\n  }\n\n  fragment PieceConstants on Constants {\n    BISHOP\n    KING\n    KNIGHT\n    PAWN\n    QUEEN\n    ROOK\n  }\n\n  fragment FlagConstants on Constants {\n    FLAGS {\n      NORMAL\n      CAPTURE\n      BIG_PAWN\n      EP_CAPTURE\n      PROMOTION\n      KSIDE_CASTLE\n      QSIDE_CASTLE\n    }\n  }\n\n  {\n    chess {\n      ... ChessAttributes\n    }\n\n    colorConstants: constants {\n      ... ColorConstants\n    }\n\n    pieceConstants: constants {\n      ... PieceConstants\n    }\n\n    flagConstants: constants {\n      ... FlagConstants\n    }\n  }\n"),M="\n  ".concat(R,"\n\n  mutation makeMove($fen: String!, $move: MoveObjectInput!){\n    chess: move (input: {\n      fen: $fen,\n      move: $move\n    }) {\n      ... ChessAttributes\n    }\n  }\n");function _(e,n){return Object(h.a)({},"CALL_API",{query:M,variables:{fen:e,move:n},types:[C,y,g]})}function K(e){var n=e.dark,t=e.isActive,a=e.isTargeted,r=e.onClick,c=e.ariaLabel,o=e.children,s=["chess-board-square"];return n&&s.push("chess-board-square--dark"),a&&s.push("chess-board-square--targeted"),t&&s.push("chess-board-square--active"),f.a.createElement("button",{type:"button","aria-label":c,disabled:!r,className:s.join(" "),onClick:r},o)}var U=S;function x(e){var n=e.typeName,t=e.colorName,a=P[n][t],r="chess-board-piece".concat(t===U?" chess-board-piece--black":"");return f.a.createElement("span",{role:"presentation",className:r},a)}function W(){var e=Object(v.b)(),n=Object(v.c)((function(e){return e.chess})),t=Object(v.c)((function(e){return e.constants})),a=Object(v.c)((function(e){return e.ui}));if(!n)return null;var r=t.piecesBySymbol,c=t.colorsBySymbol,o=t.pieceConstants,s=a.selectedSquareId,i=n.fen,u=n.squares,l=n.movesBySquare,b=null,d=null;return s&&(b=l[s],d=new Set(b.map((function(e){return e.to})))),f.a.createElement("div",{className:"chess-board"},u.map((function(n){var t,a,u=n.rank,p=n.file,v=n.piece,m=n.dark,h="".concat(p).concat(u),O=null,j=null,E=null,C=!1,y=!1,g=null,S="".concat(h," is empty"),k=null;v&&(j=r[v.type],E=c[v.color],k="".concat(E," ").concat(j).toLowerCase(),O=l[h],S="".concat(h," contains a ").concat(k),(null===(t=O)||void 0===t?void 0:t.length)>0&&(g=function(){return e(function(e){return{type:"PIECE_SELECTED",squareId:e}}(h))}));s&&(h===s?(y=!0,S="".concat(h," contains a ").concat(k," selected for move."," "," Use the tab keys to select a square to initiate move."," "," Press again to cancel selection.")):(null===(a=d)||void 0===a?void 0:a.has(h))&&(C=!0,S="Move to ".concat(h),g=function(){var n=b.find((function(e){return e.to===h})),t=n.from,a=n.to,r=n.promotion;r&&(r=o[q]),e(_(i,{from:t,to:a,promotion:r}))}));var I={key:h,dark:m,isActive:y,isTargeted:C,ariaLabel:S,onClick:g};return f.a.createElement(K,I,v&&f.a.createElement(x,{typeName:j,colorName:E}))})))}function D(){return Object(v.c)((function(e){return e.appStatus})).loading?f.a.createElement("div",{className:"spinner"},f.a.createElement("div",{className:"spinner-icon"})):null}function F(){var e=Object(v.b)();return Object(l.useEffect)((function(){e(Object(h.a)({},"CALL_API",{query:B,types:[O,j,E]}))}),[e]),f.a.createElement(f.a.Fragment,null,f.a.createElement(W,null),f.a.createElement(D,null))}var G={loading:!0};var H=t(17),Q=t(2);function $(e){var n=function(e){return e.moves.reduce((function(e,n){var t=e[n.from]||[];return Object(Q.a)(Object(Q.a)({},e),{},Object(h.a)({},n.from,[].concat(Object(H.a)(t),[n])))}),{})}(e),t=function(e){return e.board.reduce((function(e,n){var t=n.rank,a=n.squares.map((function(e,n){var a=e.file,r=e.piece;return{rank:t,file:a,piece:r,dark:t%2?!(n%2):n%2}}));return e.concat(a)}),[])}(e);return Object(Q.a)(Object(Q.a)({},e),{},{squares:t,movesBySquare:n})}var J=t(6);var V={selectedSquareId:null};var z=Object(p.combineReducers)({appStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case O:case C:return{loading:!0};case y:case j:return{loading:!1};case E:return{loading:!1,errors:n.errors};default:return e}},chess:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:case y:return $(n.data.chess);default:return e}},constants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:var t=n.data,a=t.pieceConstants,r=t.colorConstants,c=t.flagConstants,o=Object.entries(a).reduce((function(e,n){var t=Object(J.a)(n,2),a=t[0],r=t[1];return Object(Q.a)(Object(h.a)({},r,a),e)}),{}),s=Object.entries(r).reduce((function(e,n){var t=Object(J.a)(n,2),a=t[0],r=t[1];return Object(Q.a)(Object(h.a)({},r,a),e)}),{});return{piecesBySymbol:o,colorsBySymbol:s,pieceConstants:a,colorConstants:r,flagConstants:c};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"PIECE_SELECTED":var t=n.squareId;return t===e.selectedSquareId?Object(Q.a)(Object(Q.a)({},e),{},{selectedSquareId:null}):Object(Q.a)(Object(Q.a)({},e),{},{selectedSquareId:t});case y:return Object(Q.a)(Object(Q.a)({},e),{},{selectedSquareId:null});default:return e}}}),X=t(12),Y=t.n(X),Z=t(16),ee={"Content-Type":"application/json"};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=[function(){return function(e){return function(){var n=Object(Z.a)(Y.a.mark((function n(t){var a,r,c,o,s,i,u,l,f,b,d,p,v,m,h;return Y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.CALL_API){n.next=2;break}return n.abrupt("return",e(t));case 2:return a=t.CALL_API,r=a.query,c=a.variables,o=Object(J.a)(a.types,3),s=o[0],i=o[1],u=o[2],l={query:r,variables:c},f=JSON.stringify(l),b={method:"POST",headers:ee,body:f},e({type:s,data:{query:r,variables:c}}),n.prev=7,n.next=10,fetch("https://fast-castle-57354.herokuapp.com",b);case 10:if(!(d=n.sent).ok){n.next=20;break}return n.next=14,d.json();case 14:p=n.sent,v=p.data,m=p.errors,v&&e({type:i,data:v}),m&&e({type:u,errors:m}),n.next=21;break;case 20:throw new Error("Response not ok");case 21:n.next=28;break;case 23:n.prev=23,n.t0=n.catch(7),h=n.t0,n.t0 instanceof Error&&(h={name:n.t0.name,message:n.t0.message,stack:n.t0.stack}),e({type:u,errors:[h]});case 28:case"end":return n.stop()}}),n,null,[[7,23]])})));return function(e){return n.apply(this,arguments)}}()}},function(e){return function(n){return function(t){if(n(t),t.type===y){var a=e.getState(),r=a.constants.colorConstants,c=a.chess,o=c.fen,s=c.turn,i=c.analysis.bestMove,u=i.from,l=i.to;s===r[T]&&e.dispatch(_(o,{from:u,to:l}))}}}}],te=Object(m.composeWithDevTools)(p.applyMiddleware.apply(void 0,ne)),ae=Object(p.createStore)(z,te);d.a.render(f.a.createElement(f.a.StrictMode,null,f.a.createElement(v.a,{store:ae},f.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ed3e3540.chunk.js.map