(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{77:function(e,t,r){e.exports=r(95)},92:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(54),i=r.n(o),c=r(22),l=r(49),s=r(55),u=r.n(s),h=r(41),f=(r(30),"REGISTER_USER"),d="CHANGE_USER",p="LOGOUT",m={user:"",email:"",password:"",isLogged:!1};var v=r(30),g=r(30).createStore,y=Object(v.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case d:return Object(h.a)({},e,{user:t.user,email:t.email,password:t.password,isLogged:!0});case p:return Object(h.a)({},e,{isLogged:!1});default:return e}}}),E={key:"root",storage:u.a},w=g(Object(l.a)(E,y)),b=Object(l.b)(w),x=r(61),L=r(58),O=(r(92),r(12)),j=r(59),S=r(139),N=r(140);function _(){_=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var u={};function h(){}function f(){}function d(){}var p={};c(p,a,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(O([])));v&&v!==t&&r.call(v,a)&&(p=v);var g=d.prototype=h.prototype=Object.create(p);function y(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(h).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=d,c(g,"constructor",d),c(d,"constructor",f),f.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var k=function(){var e=Object(O.f)(),t=w.getState();return Object(n.useEffect)(function(){function r(){return(r=Object(j.a)(_().mark(function r(){return _().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:!0===t.isLogged?e("dashboard",{replace:!0}):e("login",{replace:!0});case 1:case"end":return r.stop()}},r)}))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),n.createElement("div",{className:"preload"},n.createElement(S.a,{sx:{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"}},n.createElement(N.a,null)))},R=r(136),G=r(135),P=r(138),I=function(){var e=Object(O.f)(),t=n.useRef(),r=n.useRef(),a=n.useRef(),o=w.getState();return n.createElement("form",{className:"Register"},n.createElement(P.a,{container:!0,className:"container"},n.createElement(P.a,{container:!0,item:!0,height:"170px",width:"300px"},n.createElement(G.a,{required:!0,ref:t,type:"text",variant:"standard",label:"Seu nome de usu\xe1rio"}),n.createElement(G.a,{required:!0,ref:a,type:"email",variant:"standard",label:"Seu melhor email"}),n.createElement(G.a,{required:!0,ref:r,type:"password",variant:"standard",label:"Crie uma senha"})),n.createElement(P.a,{container:!0,item:!0,width:"300px",height:"150px"},n.createElement("span",null,"Ao se registrar voc\xea concorda com os ",n.createElement("a",{href:"#"},"termos de uso e pol\xedtica de privacidade")),n.createElement(R.a,{onClick:function(){var n=t.current.children[1].children[0].value,i=a.current.children[1].children[0].value,c=r.current.children[1].children[0].value;n===o.user||i===o.email?console.log("Usu\xe1rio j\xe1 registrado"):i&&c&&n?c.length<8?console.log("Senha muito curta! Precisa de 8 caracteres ou mais"):(w.dispatch(function(e,t,r){return{type:f,user:e,email:t,password:r}}(n,i,c)),e("../dashboard",{replace:!0})):console.log("Por favor preencha todos os campos!")},color:"primary",size:"small",variant:"contained",disableElevation:!0},"registrar"),n.createElement("span",null,"J\xe1 tem uma conta? ",n.createElement(c.b,{to:"/login"},"Ent\xe3o fa\xe7a log in")))))},T=function(){var e=n.useRef(),t=n.useRef(),r=Object(O.f)(),a=w.getState().user;return n.createElement("form",{className:"login"},n.createElement(P.a,{container:!0,className:"container"},n.createElement(P.a,{container:!0,item:!0,className:"inputs",height:"180px"},n.createElement(G.a,{ref:e,required:!0,className:"loginIpt",type:"text",label:"Email ou nome de usu\xe1rio",variant:"standard"}),n.createElement(G.a,{ref:t,required:!0,className:"passwordIpt",type:"password",label:"Sua senha",variant:"standard"}),n.createElement("span",null,n.createElement(c.b,{to:"/"},"Esqueceu sua senha?"))),n.createElement(P.a,{container:!0,item:!0,className:"buttons",height:"140px"},n.createElement(R.a,{onClick:function(){var n=e.current.children[1].children[0].value,o=t.current.children[1].children[0].value;n&&o?o.length<8?console.log("Senha muito curta! Precisa de 8 caracteres ou mais"):n!==a.email&&n!==a.user&&o!==a.password?console.log("Usu\xe1rio n\xe3o registrado"):n!==a.email&&n!==a.user||o!==a.password?console.log("Senha incorreta"):(w.dispatch(function(e,t,r){return{type:d,user:e,email:t,password:r}}(a.user,a.email,a.password)),r("../dashboard",{replace:!0})):console.log("Por favor preencha todos os campos!")},color:"primary",size:"small",variant:"contained",disableElevation:!0},"Log in"),n.createElement("span",null,"N\xe3o tem conta? ",n.createElement(c.b,{to:"/signin"},"Registre-se")))))},q=function(){var e=Object(O.f)(),t=w.getState().user;return""!==t.user&&!0===t.isLogged?n.createElement("div",{className:"dashboard"},n.createElement("h1",null,"Bem vindo ",t.user,"!"),n.createElement("h4",null,"Seu email \xe9: ",t.email),n.createElement("h4",null,"Sua senha \xe9: ",t.password),n.createElement("button",{onClick:function(){w.dispatch({type:p}),e("/",{replace:!0})}},"Log out")):n.createElement("div",{className:"dashboard"},n.createElement("h1",null,"Usu\xe1rio n\xe3o logado :("))};var C=function(){return n.createElement("div",{className:"App"},n.createElement(O.c,null,n.createElement(O.a,{path:"/",element:n.createElement(k,null)}),n.createElement(O.a,{path:"signin",element:n.createElement(I,null)}),n.createElement(O.a,{path:"login",element:n.createElement(T,null)}),n.createElement(O.a,{path:"dashboard",element:n.createElement(q,null)})))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x.a,{store:w},a.a.createElement(L.a,{loading:null,persistor:b},a.a.createElement(c.a,null,a.a.createElement(C,{store:w,persistor:b}))))))}},[[77,1,2]]]);
//# sourceMappingURL=main.16b7364b.chunk.js.map