(this["webpackJsonpfront-sdci"]=this["webpackJsonpfront-sdci"]||[]).push([[27],{208:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_tab",(function(){return s})),i.d(e,"ion_tabs",(function(){return a}));var n=i(2),o=i(25),r=i(232),s=function(){function t(t){Object(o.o)(this,t),this.loaded=!1,this.active=!1}return t.prototype.componentWillLoad=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){switch(t.label){case 0:return this.active?[4,this.setActive()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},t.prototype.setActive=function(){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}}))}))},t.prototype.changeActive=function(t){t&&this.prepareLazyLoaded()},t.prototype.prepareLazyLoaded=function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(r.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)},t.prototype.render=function(){var t=this,e=t.tab,i=t.active,n=t.component;return Object(o.j)(o.c,{role:"tabpanel","aria-hidden":i?null:"true","aria-labelledby":"tab-button-"+e,class:{"ion-page":void 0===n,"tab-hidden":!i}},Object(o.j)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.k)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:!1,configurable:!0}),t}();s.style=":host(.tab-hidden){display:none !important}";var a=function(){function t(t){var e=this;Object(o.o)(this,t),this.ionNavWillLoad=Object(o.g)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(o.g)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(o.g)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(t){var i=t.detail,n=i.href,o=i.tab;if(e.useRouter&&void 0!==n){var r=document.querySelector("ion-router");r&&r.push(n)}else e.select(o)}}return t.prototype.componentWillLoad=function(){return Object(n.a)(this,void 0,void 0,(function(){var t;return Object(n.c)(this,(function(e){switch(e.label){case 0:return this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter?[3,2]:(t=this.tabs).length>0?[4,this.select(t[0])]:[3,2];case 1:e.sent(),e.label=2;case 2:return this.ionNavWillLoad.emit(),[2]}}))}))},t.prototype.componentWillRender=function(){var t=this.el.querySelector("ion-tab-bar");if(t){var e=this.selectedTab?this.selectedTab.tab:void 0;t.selectedTab=e}},t.prototype.select=function(t){return Object(n.a)(this,void 0,void 0,(function(){var e;return Object(n.c)(this,(function(i){switch(i.label){case 0:return e=c(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 1:return i.sent(),[4,this.notifyRouter()];case 2:return i.sent(),this.tabSwitch(),[2,!0]}}))}))},t.prototype.getTab=function(t){return Object(n.a)(this,void 0,void 0,(function(){return Object(n.c)(this,(function(e){return[2,c(this.tabs,t)]}))}))},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.setRouteId=function(t){return Object(n.a)(this,void 0,void 0,(function(){var e,i=this;return Object(n.c)(this,(function(n){switch(n.label){case 0:return e=c(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 1:return n.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return i.tabSwitch()}}]}}))}))},t.prototype.getRouteId=function(){return Object(n.a)(this,void 0,void 0,(function(){var t;return Object(n.c)(this,(function(e){return[2,void 0!==(t=this.selectedTab&&this.selectedTab.tab)?{id:t,element:this.selectedTab}:void 0]}))}))},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return void 0!==t&&t!==e&&!this.transitioning},Object.defineProperty(t.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))},enumerable:!1,configurable:!0}),t.prototype.render=function(){return Object(o.j)(o.c,{onIonTabButtonClick:this.onTabClicked},Object(o.j)("slot",{name:"top"}),Object(o.j)("div",{class:"tabs-inner"},Object(o.j)("slot",null)),Object(o.j)("slot",{name:"bottom"}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.k)(this)},enumerable:!1,configurable:!0}),t}(),c=function(t,e){var i="string"===typeof e?t.find((function(t){return t.tab===e})):e;return i||console.error('tab with id: "'+i+'" does not exist'),i};a.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"},232:function(t,e,i){"use strict";i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r}));var n=i(2),o=function(t,e,i,o,r){return Object(n.a)(void 0,void 0,void 0,(function(){var s;return Object(n.c)(this,(function(n){switch(n.label){case 0:if(t)return[2,t.attachViewToDom(e,i,r,o)];if("string"!==typeof i&&!(i instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,o&&o.forEach((function(t){return s.classList.add(t)})),r&&Object.assign(s,r),e.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,s]}}))}))},r=function(t,e){if(e){if(t){var i=e.parentElement;return t.removeViewFromDom(i,e)}e.remove()}return Promise.resolve()}}}]);
//# sourceMappingURL=27.f6f34375.chunk.js.map