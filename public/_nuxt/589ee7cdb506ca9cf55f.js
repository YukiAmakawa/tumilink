(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{150:function(n,t,e){var content=e(154);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(60).default)("0a2007cb",content,!0,{sourceMap:!1})},153:function(n,t,e){"use strict";var o=e(150);e.n(o).a},154:function(n,t,e){(t=e(59)(!1)).push([n.i,".container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""]),n.exports=t},160:function(n,t,e){"use strict";e.r(t);e(27);var o={data:function(){return{name:""}},created:function(){this.initializeLiff()},methods:{initializeLiff:function(){this.checkLogin()},checkLogin:function(){window.liff.isLoggedIn()&&this.$router.push("/")},login:function(){var n=this,t=window.liff;t.login();try{t.init({liffId:"1654339660-NKwOzamd"},(function(data){var t=window.liff.getProfile();n.name=t.displayName}))}catch(n){console.log("LIFF initialization failed",n)}}}},c=(e(153),e(24)),component=Object(c.a)(o,(function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"container"},[t("p",{on:{click:this.login}},[this._v("\n    Login\n    "+this._s(this.name)+"\n  ")])])}),[],!1,null,null,null);t.default=component.exports}}]);