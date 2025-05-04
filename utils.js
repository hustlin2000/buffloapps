// --------------------------------------------------------------------------------
// UTILS SECTION
// --------------------------------------------------------------------------------

var __webpack_modules__={8882:function(t,e,i){"use strict";i.r(e),i.d(e,{DrawSVGPlugin:function(){return S},default:function(){return S}});var s,r,n,a,o,l,h,d,u=function(){return"undefined"!=typeof window},p=function(){return s||u()&&(s=window.gsap)&&s.registerPlugin&&s},c=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,f={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},m=function(t){return Math.round(1e4*t)/1e4},g=function(t){return parseFloat(t)||0},$=function(t,e){var i=g(t);return~t.indexOf("%")?i/100*e:i},v=function(t,e){return g(t.getAttribute(e))},_=Math.sqrt,y=function(t,e,i,s,r,n){return _(Math.pow((g(i)-g(t))*r,2)+Math.pow((g(s)-g(e))*n,2))},x=function(t){return console.warn(t)},b=function(t){return"non-scaling-stroke"===t.getAttribute("vector-effect")},w=function(t){if(!(t=r(t)[0]))return 0;var e,i,s,n,a,o,h,d=t.tagName.toLowerCase(),u=t.style,p=1,g=1;b(t)&&(p=_((g=t.getScreenCTM()).a*g.a+g.b*g.b),g=_(g.d*g.d+g.c*g.c));try{i=t.getBBox()}catch($){x("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var w=i||{x:0,y:0,width:0,height:0},T=w.x,C=w.y,S=w.width,E=w.height;if(i&&(S||E)||!f[d]||(S=v(t,f[d][0]),E=v(t,f[d][1]),"rect"!==d&&"line"!==d&&(S*=2,E*=2),"line"===d&&(T=v(t,"x1"),C=v(t,"y1"),S=Math.abs(S-T),E=Math.abs(E-C))),"path"===d)n=u.strokeDasharray,u.strokeDasharray="none",e=t.getTotalLength()||0,m(p)!==m(g)&&!l&&(l=1)&&x("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),e*=(p+g)/2,u.strokeDasharray=n;else if("rect"===d)e=2*S*p+2*E*g;else if("line"===d)e=y(T,C,T+S,C+E,p,g);else if("polyline"===d||"polygon"===d)for(s=t.getAttribute("points").match(c)||[],"polygon"===d&&s.push(s[0],s[1]),e=0,a=2;a<s.length;a+=2)e+=y(s[a-2],s[a-1],s[a],s[a+1],p,g)||0;else"circle"!==d&&"ellipse"!==d||(e=Math.PI*(3*((o=S/2*p)+(h=E/2*g))-_((3*o+h)*(o+3*h))));return e||0},T=function(t,e){if(!(t=r(t)[0]))return[0,0];e||(e=w(t)+1);var i=n.getComputedStyle(t),s=i.strokeDasharray||"",a=g(i.strokeDashoffset),o=s.indexOf(",");return o<0&&(o=s.indexOf(" ")),(s=o<0?e:g(s.substr(0,o)))>e&&(s=e),[-a||0,s-a||0]},C=function(){u()&&(document,n=window,o=s=p(),r=s.utils.toArray,h=s.core.getStyleSaver,d=s.core.reverting||function(){},a=-1!==((n.navigator||{}).userAgent||"").indexOf("Edge"))},S={version:"3.11.4",name:"drawSVG",register:function(t){s=t,C()},init:function(t,e,i,s,r){if(!t.getBBox)return!1;o||C();var l,d,u,p,c,f,v,_,y,x=w(t);return this.styles=h&&h(t,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=i,this._style=t.style,this._target=t,e+""=="true"?e="0 100%":e?-1===(e+"").indexOf(" ")&&(e="0 "+e):e="0 0",d=(p=e,c=x,f=(l=T(t,x))[0],(y=p.indexOf(" "))<0?(v=void 0!==f?f+"":p,_=p):(v=p.substr(0,y),_=p.substr(y+1)),(v=$(v,c))>(_=$(_,c))?[_,v]:[v,_]),this._length=m(x),this._dash=m(l[1]-l[0]),this._offset=m(-l[0]),this._dashPT=this.add(this,"_dash",this._dash,m(d[1]-d[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,m(-d[0]),0,0,0,0,0,1),a&&(u=n.getComputedStyle(t)).strokeLinecap!==u.strokeLinejoin&&(d=g(u.strokeMiterlimit),this.add(t.style,"strokeMiterlimit",d,d+.01)),this._live=b(t)||~(e+"").indexOf("live"),this._nowrap=~(e+"").indexOf("nowrap"),this._props.push("drawSVG"),1},render:function(t,e){if(e.tween._time||!d()){var i,s,r,n,a=e._pt,o=e._style;if(a){for(e._live&&(i=w(e._target))!==e._length&&(s=i/e._length,e._length=i,e._offsetPT&&(e._offsetPT.s*=s,e._offsetPT.c*=s),e._dashPT?(e._dashPT.s*=s,e._dashPT.c*=s):e._dash*=s);a;)a.r(t,a.d),a=a._next;r=e._dash||t&&1!==t&&1e-4||0,i=e._length-r+.1,n=e._offset,r&&n&&r+Math.abs(n%e._length)>e._length-.2&&(n+=n<0?.1:-.1)&&(i+=.1),o.strokeDashoffset=r?n:n+.001,o.strokeDasharray=i<.2?"none":r?r+"px,"+(e._nowrap?999999:i)+"px":"0px, 999999px"}}else e.styles.revert()},getLength:w,getPosition:T};p()&&s.registerPlugin(S)},2963:function(t,e,i){"use strict";

function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}

var V=function(){var t,e;

function i(t){this.init(t)}

var r={display:"block"}

function e(a,o,l,h,d){var u=e.tween,p=o.onComplete,c={};return l=l||r(),d=h&&d||0,h=h||a-l,u&&u.kill(),i=Math.round(l),o[n]=a,o.modifiers=c,c[n]=function(t){return(t=Math.round(r()))!==i&&t!==s&&Math.abs(t-i)>3&&Math.abs(t-s)>3?(u.kill(),e.tween=0):t=l+h*u.ratio+d*u.ratio*u.ratio,s=i,i=Math.round(t)},o.onUpdate=function(){y.cache++,eE()},o.onComplete=function(){e.tween=0,p&&p.call(u)},u=e.tween=G.to(t,o)}

function t(e,i){H||t.register(G)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,i)}

var e={}

function s(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}

function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}

function t(e,i){for(var s in i)"__proto__"!==s&&"constructor"!==s&&"prototype"!==s&&(e[s]=Y(i[s])?t(e[s]||(e[s]={}),i[s]):i[s]);return e}

function t(e){return!e||e._ts&&t(e.parent)}

function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(0>i.rawTime()||t(i))}

function t(e){var i,s,r,o,_=u()-m,y=!0===e;if(_>p&&(f+=_-c),((i=(r=(m+=_)-f)-$)>0||y)&&(o=++l.frame,h=r-1e3*l.time,l.time=r/=1e3,$+=i+(i>=g?4:g-i),s=1),y||(n=a(t)),s)for(d=0;d<v.length;d++)v[d](r,h,o,e)}

function t(e,i){for(var s,r=e._first;r;)r instanceof eB?t(r,i):!r.vars.yoyoEase||r._yoyo&&r._repeat||r._yoyo===i||(r.timeline?t(r.timeline,i):(s=r._ease,r._ease=r._yEase,r._yEase=s,r._yoyo=i)),r=r._next}

function t(e,i,s){var r=i>=1?i:1,n=(s||(e?.3:.45))/(i<1?i:1),a=n/B*(Math.asin(1/r)||0),o=function(t){return 1===t?1:r*Math.pow(2,-10*t)*q((t-a)*n)+1},l="out"===e?o:"in"===e?function(t){return 1-o(1-t)}:eF(o);return n=B/n,l.config=function(i,s){return t(e,i,s)},l}

function t(e,i){void 0===i&&(i=1.70158);

var s=function(t){return t?--t*t*((i+1)*t+i)+1:0}

var e3=function(t,e){this.id=V++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tE,this.set=e?e.getSetter:eZ}

var eB=function(t){

var ej=function(t){

var eU=function(t,e,i){return t[e]=i}

function t(t,e,i,s,r,n,a,o,l){this.t=e,this.s=s,this.c=r,this.p=i,this.r=n||eQ,this.d=a||this,this.set=o||eU,this.pr=l||0,this._next=t,t&&(t._prev=this)}

function t(t){this.contexts=[],this.scope=t}

function t(e,i,s){var r=i-e;return tt(e)?ef(e,t(0,e.length),i):ei(s,function(t){return(r+(t-e)%r)%r+e})}

function t(e,i,s){var r=i-e,n=2*r;return tt(e)?ef(e,t(0,e.length-1),i):ei(s,function(t){return e+((t=(n+(t-e)%n)%n||0)>r?n-t:t)})}

function t(e,i,s,r){var n=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!n){var a,o,l,h,d,u=W(e),p={};if(!0===s&&(r=1)&&(s=null),u)e={p:e},i={p:i};else if(tt(e)&&!tt(i)){for(l=[],d=(h=e.length)-2,o=1;o<h;o++)l.push(t(e[o-1],e[o]));h--,n=function(t){var e=Math.min(d,~~(t*=h));return l[e](t-e)},s=i}else r||(e=tO(tt(e)?[]:{},e));if(!l){for(a in i)e7.call(p,e,a,"get",i[a]);n=function(t){return ie(t,p)||(u?e.p:e)}}}return ei(s,n)}

var iv=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i}

var i={target:t,props:[],revert:so,save:sn}

function t(e,i,s){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(iG,"-$1").toLowerCase())||r.getPropertyValue(i)||!s&&t(e,sp(i)||i,1)||""}

function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}

function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}

function o(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}

function l(){return(l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t}).apply(this,arguments)}

function h(t,e){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}

function d(t,e){var i=t%e;return(e>0&&i<0||e<0&&i>0)&&(i+=e),i}

function t(){}

var r={isMobile:"",animDelay:"",initReady:function(){r.initContactFormTrack()},initLoad:function(){r.isMobile=r.IsMobileDevice(),r.mobileHeightFix()},IsMobileDevice:function(){return 769>s(window).outerWidth()},mobileHeightFix:function(){if(r.isMobile){var t=s(window).outerHeight();s(".height--100vh").height(t)}},setAnimDelay:function(){return s("#preloader").length?1:.4},initContactFormTrack:function(){document.

var t={lat:r.map.points[0].lat,lng:r.map.points[0].lng}

var i={anchor:new google.maps.Point(50,50),path:"M43.5,1c-1.8,1-2,2.6-2.5,4c-0.5,1.8-2.2,3.6-3.7,3.6c-1,0-1.6-0.5-1.6-1.3c0-0.3,0.2-0.7,0.4-0.9 c1-0.7,1.4-1.9,0.9-3c-0.2-0.4-0.6-1-0.9-1.6c-0.3-0.5-0.5-0.9-0.5-1.4c0-0.3-0.2-0.4-0.5-0.4c-0.3,0-0.5,0.1-0.5,0.4        c0.1,0.5-0.2,0.9-0.5,1.4c-0.3,0.6-0.7,1.2-0.9,1.6c-0.5,1.1-0.1,2.4,0.9,3c0.3,0.2,0.4,0.5,0.4,0.9c0,0.8-0.6,1.3-1.6,1.3        c-1.1,0-3.6-1.4-4.3-3.7c-0.5-1.4-1-2.4-2-3c-0.5-0.3-1.1-0.5-1.7-0.5c-0.6,0-1.2,0.2-1.7,0.5c-1,0.6-1.5,1.6-2,3        C20.5,7.2,18,8.6,17,8.6c-1,0-1.6-0.5-1.6-1.3c0-0.3,0.2-0.7,0.4-0.9c1-0.7,1.4-1.9,0.9-3c-0.2-0.4-0.6-1-0.9-1.6        c-0.3-0.5-0.5-0.9-0.5-1.4c0-0.3-0.2-0.4-0.5-0.4c-0.3,0-0.5,0.1-0.5,0.4c0.1,0.5-0.2,0.9-0.5,1.4C13.6,2.4,13.1,3,13,3.5        c-0.5,1.1-0.1,2.4,0.9,3c0.3,0.2,0.4,0.5,0.4,0.9c0,0.8-0.6,1.3-1.6,1.3C11.2,8.6,9.5,6.9,9,5C8.6,3.6,8.3,2,6.5,1        C4.4-0.2,1.8,0.5,0.6,2.6c-1.2,2.1-0.5,4.7,1.6,5.9C4,9.6,5.4,9,6.9,8.7c1.8-0.4,4.2,0.1,4.9,1.4c0.5,0.9,0.4,1.7-0.3,2        c-0.3,0.2-0.6,0.2-1,0.1c-1.1-0.5-2.4-0.2-3.1,0.7c-0.3,0.4-0.6,1-0.9,1.6c-0.3,0.5-0.5,0.9-1,1.1c-0.3,0.1-0.3,0.4-0.1,0.6        c0.1,0.2,0.4,0.4,0.6,0.2c0.4-0.3,0.8-0.3,1.5-0.3c0.7,0,1.4,0,1.9,0c1.2-0.1,2.1-1.1,2.2-2.3c0-0.3,0.2-0.6,0.5-0.8        c0.7-0.4,1.4-0.1,1.9,0.8c0.5,0.9,0.6,3.8-1,5.6c-0.5,0.6-1.7,2-1.6,3.3c0,1.2,0.7,2.3,1.7,2.9c1,0.6,2.2,0.5,3.6,0.2        c2.3-0.5,4.8,1,5.3,1.9c0.5,0.9,0.4,1.7-0.3,2c-0.3,0.2-0.6,0.2-1,0.1c-1.1-0.5-2.4-0.2-3.1,0.7c-0.3,0.4-0.6,1-0.9,1.6        c-0.3,0.5-0.5,0.9-1,1.1c-0.3,0.1-0.3,0.4-0.1,0.6c0.1,0.2,0.4,0.4,0.6,0.2c0.4-0.3,0.8-0.3,1.5-0.3c0.7,0,1.4,0,1.9,0        c1.2-0.1,2.1-1.1,2.2-2.3c0-0.3,0.2-0.6,0.5-0.8c0.7-0.4,1.4-0.1,1.9,0.8c0.8,1.3,0,3.6-1.3,5c-1.1,1.1-2.3,2.1-2.3,4.2        c0,2.4,1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3c0-2.1-1.2-3-2.3-4.2c-1.3-1.4-2-3.7-1.3-5c0.5-0.9,1.2-1.2,1.9-0.8c0.3,0.2,0.5,0.5,0.5,0.8        c0.1,1.2,1,2.2,2.2,2.3c0.4,0.1,1.2,0,1.9,0c0.6,0,1.1,0,1.5,0.3c0.2,0.2,0.5,0,0.6-0.2c0.1-0.2,0.1-0.5-0.1-0.6        c-0.5-0.2-0.7-0.6-1-1.1c-0.4-0.6-0.7-1.2-0.9-1.6c-0.7-1-2-1.3-3.1-0.7c-0.3,0.1-0.7,0.1-1-0.1c-0.7-0.4-0.8-1.1-0.3-2        c0.5-0.9,3-2.4,5.3-1.9c1.4,0.3,2.6,0.3,3.6-0.2c1-0.6,1.7-1.7,1.7-2.9c0.1-1.3-1.1-2.7-1.6-3.3c-1.6-1.8-1.5-4.7-1-5.6        c0.5-0.9,1.2-1.2,1.9-0.8c0.3,0.2,0.5,0.5,0.5,0.8c0.1,1.2,1,2.2,2.2,2.3c0.4,0.1,1.2,0,1.9,0c0.6,0,1.1,0,1.5,0.3        c0.2,0.2,0.5,0,0.6-0.2c0.1-0.2,0.1-0.5-0.1-0.6c-0.5-0.2-0.7-0.6-1-1.1c-0.4-0.6-0.7-1.2-0.9-1.6c-0.7-1-2-1.3-3.1-0.7        c-0.3,0.1-0.7,0.1-1-0.1c-0.7-0.4-0.8-1.2-0.3-2c0.7-1.3,3.1-1.8,4.9-1.4C44.6,9,46,9.6,47.8,8.5c2.1-1.2,2.8-3.9,1.6-6        C48.2,0.5,45.5-0.2,43.5,1L43.5,1z M33.3,19.4c-0.9,0.9-1.5,2-1.9,3.2c-0.8,2.2-3.3,3.7-4.3,3.7c-1,0-1.6-0.5-1.6-1.3        c0-0.3,0.2-0.7,0.4-0.9c1-0.7,1.4-1.9,0.9-3c-0.2-0.4-0.6-1-0.9-1.6c-0.3-0.5-0.5-0.9-0.5-1.4c0-0.3-0.2-0.4-0.5-0.4        c-0.3,0-0.5,0.1-0.5,0.4c0.1,0.5-0.2,0.9-0.5,1.4c-0.3,0.6-0.7,1.2-0.9,1.6c-0.5,1.1-0.1,2.4,0.9,3c0.3,0.2,0.4,0.5,0.4,0.9        c0,0.8-0.6,1.3-1.6,1.3c-1.1,0-3.6-1.4-4.3-3.7c-0.4-1.2-1-2.3-1.9-3.2c-1.6-1.8-1.6-4.7-1-5.6c0.5-0.9,1.2-1.2,1.9-0.8        c0.3,0.2,0.5,0.5,0.5,0.8c0.1,1.2,1,2.2,2.2,2.3c0.4,0.1,1.2,0,1.9,0c0.6,0,1.1,0,1.5,0.3c0.2,0.2,0.5,0,0.6-0.2        c0.1-0.2,0.1-0.5-0.1-0.6c-0.5-0.2-0.7-0.6-1-1.1c-0.4-0.6-0.7-1.2-0.9-1.6c-0.7-1-2-1.3-3.1-0.7c-0.3,0.1-0.7,0.1-1,0        c-0.7-0.4-0.8-1.1-0.3-2c0.5-0.9,3-2.4,5.3-1.9c1.2,0.3,2.5,0.3,3.7,0c2.3-0.5,4.8,1,5.3,1.9c0.5,0.9,0.4,1.7-0.3,2        c-0.3,0.2-0.7,0.2-1,0c-1.1-0.5-2.4-0.2-3.1,0.7c-0.3,0.4-0.6,1-0.9,1.6c-0.3,0.5-0.5,0.9-1,1.1c-0.3,0.1-0.3,0.4-0.1,0.6        c0.1,0.2,0.4,0.4,0.6,0.2c0.4-0.3,0.8-0.3,1.5-0.3c0.7,0,1.4,0,1.9,0c1.2-0.1,2.1-1.1,2.2-2.3c0-0.3,0.2-0.6,0.5-0.8        c0.7-0.4,1.4-0.1,1.9,0.8C34.9,14.7,34.9,17.6,33.3,19.4z",fillColor:"#141414",fillOpacity:1,strokeWeight:0,scale:.8}

var n={lat:r.map.points[0].lat,lng:r.map.points[0].lng}

var i={dataType:"html",type:"GET"}

var r={url:i.prop("action"),data:i.serialize(),type:i.prop("method")}

function b(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?u[p.call(t)]||"object":typeof t}

function C(t){var e=!!t&&"length"in t&&t.length,i=b(t);return!$(t)&&!v(t)&&("array"===i||0===e||"number"==typeof e&&e>0&&e-1 in t)}

function th(){var t=[];return 

function e(i,r){return t.push(i+" ")>s.cacheLength&&delete e[t.shift()],e[i+" "]=r}

function td(t){return t[y]=!0,t}

function tp(t,e){for(var i=t.split("|"),r=i.length;r--;)s.attrHandle[i[r]]=e}

function tc(t,e){var i=e&&t,s=i&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;if(s)return s;if(i){for(;i=i.nextSibling;)if(i===e)return -1}return t?1:-1}

function t$(t){return td(function(e){return e=+e,td(function(i,s){for(var r,n=t([],i.length,e),a=n.length;a--;)i[r=n[a]]&&(i[r]=!(s[r]=i[r]))})})}

function tv(t){return t&&void 0!==t.getElementsByTagName&&t}

function t_(){}

function ty(t){for(var e=0,i=t.length,s="";e<i;e++)s+=t[e].value;return s}

function tx(t,e,i){var s=e.dir,r=e.next,n=r||s,a=i&&"parentNode"===n,o=w++;return e.first?function(e,i,r){for(;e=e[s];)if(1===e.nodeType||a)return t(e,i,r);return!1}:function(e,i,l){var h,d,u,p=[b,o];if(l){for(;e=e[s];)if((1===e.nodeType||a)&&t(e,i,l))return!0}else for(;e=e[s];)if(1===e.nodeType||a){if(d=(u=e[y]||(e[y]={}))[e.uniqueID]||(u[e.uniqueID]={}),r&&r===e.nodeName.toLowerCase())e=e[s]||e;else{if((h=d[n])&&h[0]===b&&h[1]===o)return p[2]=h[2];if(d[n]=p,p[2]=t(e,i,l))return!0}}return!1}}

function tb(t){return t.length>1?function(e,i,s){for(var r=t.length;r--;)if(!t[r](e,i,s))return!1;return!0}:t[0]}

function t8(t,e,i,s,r){for(var n,a=[],o=0,l=t.length,h=null!=e;o<l;o++)(n=t[o])&&(i&&!i(n,s,r)||(a.push(n),h&&e.push(o)));return a}

function tw(t,e,i,s,r,n){return s&&!s[y]&&(s=tw(s)),r&&!r[y]&&(r=tw(r,n)),td(function(n,a,o,l){var h,d,u,p=[],c=[],f=a.length,m=n||function(t,e,i){for(var s=0,r=e.length;s<r;s++)tl(t,e[s],i);return i}(e||"*",o.nodeType?[o]:o,[]),g=t&&(n||!e)?t8(m,p,t,o,l):m,$=i?r||(n?t:f||s)?[]:a:g;if(i&&i(g,$,o,l),s)for(h=t8($,c),s(h,[],o,l),d=h.length;d--;)(u=h[d])&&($[c[d]]=!(g[c[d]]=u));if(n){if(r||t){if(r){for(h=[],d=$.length;d--;)(u=$[d])&&h.push(g[d]=u);r(null,$=[],h,l)}for(d=$.length;d--;)(u=$[d])&&(h=r?R(n,u):p[d])>-1&&(n[h]=!(a[h]=u))}}else $=t8($===a?$.splice(f,$.length):$),r?r(null,a,$,l):I.apply(a,$)})}

function tT(t){for(var e,i,r,n=t.length,a=s.relative[t[0].type],o=a||s.relative[" "],l=a?1:0,d=tx(function(t){return t===e},o,!0),u=tx(function(t){return R(e,t)>-1},o,!0),p=[function(t,i,s){var r=!a&&(s||i!==h)||((e=i).nodeType?d(t,i,s):u(t,i,s));return e=null,r}];l<n;l++)if(i=s.relative[t[l].type])p=[tx(tb(p),i)];else{if((i=s.filter[t[l].type].apply(null,t[l].matches))[y]){for(r=++l;r<n&&!s.relative[t[r].type];r++);return tw(l>1&&tb(p),l>1&&ty(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(G,"$1"),i,l<r&&tT(t.slice(l,r)),r<n&&tT(t=t.slice(r)),r<n&&ty(t))}p.push(i)}return tb(p)}

var E=function(t,e,i){for(var s=[],r=void 0!==i;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(r&&T(t).is(i))break;s.push(t)}return s}

function A(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}

function M(t,e,i){return $(e)?T.grep(t,function(t,s){return!!e.call(t,s,t)!==i}):e.nodeType?T.grep(t,function(t){return t===e!==i}):"string"!=typeof e?T.grep(t,function(t){return d.call(e,t)>-1!==i}):T.filter(e,t,i)}

function F(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}

function B(t){return t}

function N(t){throw t}

function V(t,e,i,s){var r;try{t&&$(r=t.promise)?r.call(t).done(e).fail(i):t&&$(r=t.then)?r.call(t,e,i):e.apply(void 0,[t].slice(s))}catch(n){i.apply(void 0,[n])}}

function e(i){T.each(i,function(i,s){$(s)?t.unique&&u.has(s)||o.push(s):s&&s.length&&"string"!==b(s)&&e(s)})}

function a(t,e,i,r){return function(){var o=this,l=arguments,h=function(){var s,h;if(!(t<n)){if((s=i.apply(o,l))===e.promise())throw TypeError("Thenable self-resolution");$(h=s&&("object"==typeof s||"function"==typeof s)&&s.then)?r?h.call(s,a(n,e,B,r),a(n,e,N,r)):(n++,h.call(s,a(n,e,B,r),a(n,e,N,r),a(n,e,B,e.notifyWith))):(i!==B&&(o=void 0,l=[s]),(r||e.resolveWith)(o,l))}},d=r?h:function(){try{h()}catch(s){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(s,d.stackTrace),t+1>=n&&(i!==N&&(o=void 0,l=[s]),e.rejectWith(o,l))}};t?d():(T.Deferred.getStackHook&&(d.stackTrace=T.Deferred.getStackHook()),s.setTimeout(d))}}

var W=function(t,e,i,s,r,n,a){var o=0,l=t.length,h=null==i;if("object"===b(i))for(o in r=!0,i)W(t,e,o,i[o],!0,n,a);else if(void 0!==s&&(r=!0,$(s)||(a=!0),h&&(a?(e.call(t,s),e=null):(h=e,e=function(t,e,i){return h.call(T(t),i)})),e))for(;o<l;o++)e(t[o],i,a?s:s.call(t[o],o,e(t[o],i)));return r?t:h?e.call(t):l?e(t[0],i):n}

function X(t,e){return e.toUpperCase()}

function Y(t){return t.replace(j,"ms-").replace(U,X)}

var K=function(t){return 1===t.nodeType||9===t.nodeType||!+t.nodeType}

function Z(){this.expando=T.expando+Z.uid++}

function ti(t,e,i){var s,r;if(void 0===i&&1===t.nodeType){if(s="data-"+e.replace(te,"-$&").toLowerCase(),"string"==typeof(i=t.getAttribute(s))){try{i=(r=i,"true"===r||"false"!==r&&("null"===r?null:r===+r+""?+r:tt.test(r)?JSON.parse(r):r))}catch(n){}J.set(t,e,i)}else i=void 0}return i}

var th=function(t,e){return"none"===(t=e||t).style.display||""===t.style.display&&to(t)&&"none"===T.css(t,"display")}

function td(t,e,i,s){var r,n,a=20,o=s?function(){return s.cur()}:function(){return T.css(t,e,"")},l=o(),h=i&&i[3]||(T.cssNumber[e]?"":"px"),d=t.nodeType&&(T.cssNumber[e]||"px"!==h&&+l)&&tr.exec(T.css(t,e));if(d&&d[3]!==h){for(l/=2,h=h||d[3],d=+l||1;a--;)T.style(t,e,d+h),(1-n)*(1-(n=o()/l||.5))<=0&&(a=0),d/=n;d*=2,T.style(t,e,d+h),i=i||[]}return i&&(d=+d||+l||0,r=i[1]?d+(i[1]+1)*i[2]:+i[2],s&&(s.unit=h,s.start=d,s.end=r)),r}

var tu={}

var t_={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}

function tT(){return!0}

function tC(){return!1}

function tS(t,e){return t===function(){try{return _.activeElement}catch(t){}}()==("focus"===e)}

function tE(t,e,i,s,r,n){var a,o;if("object"==typeof e){for(o in"string"!=typeof i&&(s=s||i,i=void 0),e)tE(t,o,i,s,e[o],n);return t}if(null==s&&null==r?(r=i,s=i=void 0):null==r&&("string"==typeof i?(r=s,s=void 0):(r=s,s=i,i=void 0)),!1===r)r=tC;else if(!r)return t;return 1===n&&(a=r,(r=function(t){return T().off(t),a.apply(this,arguments)}).guid=a.guid||(a.guid=T.guid++)),t.each(function(){T.event.add(this,e,r,s,i)})}

function tD(t,e){return A(t,"table")&&A(11!==e.nodeType?e:e.firstChild,"tr")&&T(t).children("tbody")[0]||t}

function t1(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}

function tR(t,e,i,s){e=l(e);var r,n,a,o,h,d,u=0,p=t.length,c=p-1,f=e[0],m=$(f);if(m||p>1&&"string"==typeof f&&!g.checkClone&&tk.test(f))return t.each(function(r){var n=t.eq(r);m&&(e[0]=f.call(this,r,n.html())),tR(n,e,i,s)});if(p&&(n=(r=t8(e,t[0].ownerDocument,!1,t,s)).firstChild,1===r.childNodes.length&&(r=n),n||s)){for(o=(a=T.map(ty(r,"script"),t1)).length;u<p;u++)h=r,u!==c&&(h=T.clone(h,!0,!0),o&&T.merge(a,ty(h,"script"))),i.call(t[u],h,u);if(o)for(d=a[a.length-1].ownerDocument,T.map(a,tM),u=0;u<o;u++)h=a[u],tv.test(h.type||"")&&!Q.access(h,"globalEval")&&T.contains(d,h)&&(h.src&&"module"!==(h.type||"").toLowerCase()?T._evalUrl&&!h.noModule&&T._evalUrl(h.src,{nonce:h.nonce||h.getAttribute("nonce")},d):x(h.textContent.replace(tA,""),h,d))}return t}

function tN(t,e,i){var s,r,n,a,o=tz.test(e),l=t.style;return(i=i||t9(t))&&(a=i.getPropertyValue(e)||i[e],o&&a&&(a=a.replace(t4,"$1")||void 0),""!==a||to(t)||(a=T.style(t,e)),!g.pixelBoxStyles()&&tF.test(a)&&t2.test(e)&&(s=l.width,r=l.minWidth,n=l.maxWidth,l.minWidth=l.maxWidth=l.width=a,a=i.width,l.width=s,l.minWidth=r,l.maxWidth=n)),void 0!==a?a+"":a}

function tV(t,e){return{get:function(){if(!t())return(this.get=e).apply(this,arguments);delete this.get}}}

function e(t){return Math.round(parseFloat(t))}

function t5(t){return T.cssProps[t]||tG[t]||(t in t6?t:tG[t]=function(t){for(var e=t[0].toUpperCase()+t.slice(1),i=t7.length;i--;)if((t=t7[i]+e)in t6)return t}(t)||t)}

function tj(t,e,i){var s=tr.exec(e);return s?Math.max(0,s[2]-(i||0))+(s[3]||"px"):e}

function tU(t,e,i,s,r,n){var a="width"===e?1:0,o=0,l=0;if(i===(s?"border":"content"))return 0;for(;a<4;a+=2)"margin"===i&&(l+=T.css(t,i+tn[a],!0,r)),s?("content"===i&&(l-=T.css(t,"padding"+tn[a],!0,r)),"margin"!==i&&(l-=T.css(t,"border"+tn[a]+"Width",!0,r))):(l+=T.css(t,"padding"+tn[a],!0,r),"padding"!==i?l+=T.css(t,"border"+tn[a]+"Width",!0,r):o+=T.css(t,"border"+tn[a]+"Width",!0,r));return!s&&n>=0&&(l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-n-l-o-.5))||0),l}

function tX(t,e,i){var s=t9(t),r=(!g.boxSizingReliable()||i)&&"border-box"===T.css(t,"boxSizing",!1,s),n=r,a=tN(t,e,s),o="offset"+e[0].toUpperCase()+e.slice(1);if(tF.test(a)){if(!i)return a;a="auto"}return(!g.boxSizingReliable()&&r||!g.reliableTrDimensions()&&A(t,"tr")||"auto"===a||!parseFloat(a)&&"inline"===T.css(t,"display",!1,s))&&t.getClientRects().length&&(r="border-box"===T.css(t,"boxSizing",!1,s),(n=o in t)&&(a=t[o])),(a=parseFloat(a)||0)+tU(t,e,i||(r?"border":"content"),n,s,a)+"px"}

function tY(t,e,i,s,r){return new tY.prototype.init(t,e,i,s,r)}

function et(){tZ&&(!1===_.hidden&&s.requestAnimationFrame?s.requestAnimationFrame(et):s.setTimeout(et,T.fx.interval),T.fx.tick())}

function ee(){return s.setTimeout(function(){tK=void 0}),tK=Date.now()}

function ei(t,e){var i,s=0,r={height:t};for(e=e?1:0;s<4;s+=2-e)r["margin"+(i=tn[s])]=r["padding"+i]=t;return e&&(r.opacity=r.width=t),r}

function es(t,e,i){for(var s,r=(er.tweeners[e]||[]).concat(er.tweeners["*"]),n=0,a=r.length;n<a;n++)if(s=r[n].call(i,e,t))return s}

var s=function(t){var e=t.stop;delete t.stop,e(i)}

function eu(t){return(t.match(z)||[]).join(" ")}

function ep(t){return t.getAttribute&&t.getAttribute("class")||""}

function ec(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(z)||[]}

var i=function(t){T.event.simulate(e,t.target,T.event.fix(t))}

function ew(t,e,i,s){var r;if(Array.isArray(e))T.each(e,function(e,r){i||ey.test(t)?s(t,r):ew(t+"["+("object"==typeof r&&null!=r?e:"")+"]",r,i,s)});else if(i||"object"!==b(e))s(t,e);else for(r in e)ew(t+"["+r+"]",e[r],i,s)}

function eM(t){return function(e,i){"string"!=typeof e&&(i=e,e="*");var s,r=0,n=e.toLowerCase().match(z)||[];if($(i))for(;s=n[r++];)"+"===s[0]?(t[s=s.slice(1)||"*"]=t[s]||[]).unshift(i):(t[s]=t[s]||[]).push(i)}}

function eI(t,e,i,s){

var r={}

function a(o){var l;return r[o]=!0,T.each(t[o]||[],function(t,o){var h=o(e,i,s);return"string"!=typeof h||n||r[h]?n?!(l=h):void 0:(e.dataTypes.unshift(h),a(h),!1)}),l}

function E(t,e,a,l){var u,p,_,y,x,b=e;h||(h=!0,o&&s.clearTimeout(o),i=void 0,n=l||"",w.readyState=t>0?4:0,u=t>=200&&t<300||304===t,a&&(y=function(t,e,i){for(var s,r,n,a,o=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===s&&(s=t.mimeType||e.getResponseHeader("Content-Type"));if(s){for(r in o)if(o[r]&&o[r].test(s)){l.unshift(r);break}}if(l[0]in i)n=l[0];else{for(r in i){if(!l[0]||t.converters[r+" "+l[0]]){n=r;break}a||(a=r)}n=n||a}if(n)return n!==l[0]&&l.unshift(n),i[n]}(c,w,a)),!u&&T.inArray("script",c.dataTypes)>-1&&0>T.inArray("json",c.dataTypes)&&(c.converters["text script"]=function(){}),y=function(t,e,i,s){var r,n,a,o,l,h={},d=t.dataTypes.slice();if(d[1])for(a in t.converters)h[a.toLowerCase()]=t.converters[a];for(n=d.shift();n;)if(t.responseFields[n]&&(i[t.responseFields[n]]=e),!l&&s&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=n,n=d.shift()){if("*"===n)n=l;else if("*"!==l&&l!==n){if(!(a=h[l+" "+n]||h["* "+n])){for(r in h)if((o=r.split(" "))[1]===n&&(a=h[l+" "+o[0]]||h["* "+o[0]])){!0===a?a=h[r]:!0!==h[r]&&(n=o[0],d.unshift(o[1]));break}}if(!0!==a){if(a&&t.throws)e=a(e);else try{e=a(e)}catch(u){return{state:"parsererror",error:a?u:"No conversion from "+l+" to "+n}}}}}return{state:"success",data:e}}(c,y,w,u),u?(c.ifModified&&((x=w.getResponseHeader("Last-Modified"))&&(T.lastModified[r]=x),(x=w.getResp

var eR={0:200,1223:204}

var s=function(){return(s=Object.assign||function(t){for(var e,i=1,s=arguments.length;i<s;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}

function d(t){return function(){if("function"==typeof window.CustomEvent)return!1;window.CustomEvent=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:null};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),i}}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),new h(t)}

function p(t){return"href"===t?"src":t=(t=(t=t.replace("data-","")).charAt(0).toLowerCase()+t.slice(1)).replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})}

var c=function(t,e,i,s){void 0===i&&(i=0);var r=d(t).attr("data-lg-size")||s;if(r){var n=r.split(",");if(n[1])for(var a=window.innerWidth,o=0;o<n.length;o++){var l=n[o];if(parseInt(l.split("-")[2],10)>a){r=l;break}o===n.length-1&&(r=l)}var h,u=r.split("-"),p=parseInt(u[0],10),c=parseInt(u[1],10),f=e.width(),m=Math.min(e.height()-i,c),g=Math.min(Math.min(f,p)/p,m/c);return{width:p*g,height:c*g}}}

var e={}

function extendPrototype(t,e){var i,s,r=t.length;for(i=0;i<r;i+=1)for(var n in s=t[i].prototype)Object.prototype.hasOwnProperty.call(s,n)&&(e.prototype[n]=s[n])}

function createProxyFunction(t){

function e(){}

var audioControllerFactory=function(){

function t(t){this.audios=[],this.audioFactory=t,this._volume=1,this._isMuted=!1}

function t(t,e){var i,s=0,r=[];switch(t){case"int16":case"uint8c":i=1;break;default:i=1.1}for(s=0;s<e;s+=1)r.push(i);return r}

function createSizedArray(t){return Array.apply(null,{length:t})}

function _typeof$6(t){return(_typeof$6="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}

function ProjectInterface$1(){return{}}

function roundValues(t){_shouldRoundValues=!!t}

function bmRnd(t){return _shouldRoundValues?Math.round(t):t}

function HSVtoRGB(t,e,i){var s,r,n,a,o,l,h,d;switch(l=i*(1-e),h=i*(1-(o=6*t-(a=Math.floor(6*t)))*e),d=i*(1-(1-o)*e),a%6){case 0:s=i,r=d,n=l;break;case 1:s=h,r=i,n=l;break;case 2:s=l,r=i,n=d;break;case 3:s=l,r=h,n=i;break;case 4:s=d,r=l,n=i;break;case 5:s=i,r=l,n=h}return[s,r,n]}

function RGBtoHSV(t,e,i){var s,r=Math.max(t,e,i),n=Math.min(t,e,i),a=r-n,o=0===r?0:a/r,l=r/255;switch(r){case n:s=0;break;case t:s=e-i+a*(e<i?6:0),s/=6*a;break;case e:s=i-t+2*a,s/=6*a;break;case i:s=t-e+4*a,s/=6*a}return[s,o,l]}

function addSaturationToRGB(t,e){var i=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return i[1]+=e,i[1]>1?i[1]=1:i[1]<=0&&(i[1]=0),HSVtoRGB(i[0],i[1],i[2])}

function addBrightnessToRGB(t,e){var i=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return i[2]+=e,i[2]>1?i[2]=1:i[2]<0&&(i[2]=0),HSVtoRGB(i[0],i[1],i[2])}

function addHueToRGB(t,e){var i=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return i[0]+=e/360,i[0]>1?i[0]-=1:i[0]<0&&(i[0]+=1),HSVtoRGB(i[0],i[1],i[2])}

var rgbToHex=function(){var t,e,i=[];for(t=0;t<256;t+=1)e=t.toString(16),i[t]=1===e.length?"0"+e:e;return function(t,e,s){return t<0&&(t=0),e<0&&(e=0),s<0&&(s=0),"#"+i[t]+i[e]+i[s]}}

function _typeof$5(t){return(_typeof$5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}

var dataManager=function(){var t,e,i=1,s=[],r={onmessage:function(){},postMessage:function(e){t({data:e})}},n={postMessage:function(t){r.onmessage({data:t})}};

function a(){e||((e=function(e){if(window.Worker&&window.Blob&&getWebWorker()){var i=new Blob(["var _workerSelf = self; self.onmessage = ",e.toString()],{type:"text/javascript"}),s=URL.createObjectURL(i);return new Worker(s)}return t=e,r}(function(t){if(n.dataManager||(n.dataManager=function(){

function t(r,n){var a,o,l,h,d,u,p,c=r.length;for(o=0;o<c;o+=1)if("ks"in(a=r[o])&&!a.completed){if(a.completed=!0,a.hasMask){var f=a.masksProperties;for(h=f.length,l=0;l<h;l+=1)if(f[l].pt.k.i)s(f[l].pt.k);else for(u=f[l].pt.k.length,d=0;d<u;d+=1)f[l].pt.k[d].s&&s(f[l].pt.k[d].s[0]),f[l].pt.k[d].e&&s(f[l].pt.k[d].e[0])}0===a.ty?(a.layers=e(a.refId,n),t(a.layers,n)):4===a.ty?i(a.shapes):5===a.ty&&0===(p=a).t.a.length&&p.t.p}}

function e(t,e){

var i=function(t,e){for(var i=0,s=e.length;i<s;){if(e[i].id===t)return e[i];i+=1}return null}

function i(t){var e,r,n;for(e=t.length-1;e>=0;e-=1)if("sh"===t[e].ty){if(t[e].ks.k.i)s(t[e].ks.k);else for(n=t[e].ks.k.length,r=0;r<n;r+=1)t[e].ks.k[r].s&&s(t[e].ks.k[r].s[0]),t[e].ks.k[r].e&&s(t[e].ks.k[r].e[0])}else"gr"===t[e].ty&&i(t[e].it)}

function s(t){var e,i=t.i.length;for(e=0;e<i;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}

function r(t,e){var i=e?e.split("."):[100,100,100];return t[0]>i[0]||!(i[0]>t[0])&&(t[1]>i[1]||!(i[1]>t[1])&&(t[2]>i[2]||!(i[2]>t[2])&&null))}

function e(t){var e,i,s,r=t.length;for(e=0;e<r;e+=1)5===t[e].ty&&(s=(i=t[e]).t.d,i.t.d={k:[{s:s,t:0}]})}

function e(t){var e,i,s=t.length;for(e=0;e<s;e+=1)5===t[e].ty&&(i=void 0,"number"==typeof(i=t[e].t.p).a&&(i.a={a:0,k:i.a}),"number"==typeof i.p&&(i.p={a:0,k:i.p}),"number"==typeof i.r&&(i.r={a:0,k:i.r}))}

function e(t){var i,s,r,n=t.length;for(i=0;i<n;i+=1)if("gr"===t[i].ty)e(t[i].it);else if("fl"===t[i].ty||"st"===t[i].ty){if(t[i].c.k&&t[i].c.k[0].i)for(r=t[i].c.k.length,s=0;s<r;s+=1)t[i].c.k[s].s&&(t[i].c.k[s].s[0]/=255,t[i].c.k[s].s[1]/=255,t[i].c.k[s].s[2]/=255,t[i].c.k[s].s[3]/=255),t[i].c.k[s].e&&(t[i].c.k[s].e[0]/=255,t[i].c.k[s].e[1]/=255,t[i].c.k[s].e[2]/=255,t[i].c.k[s].e[3]/=255);else t[i].c.k[0]/=255,t[i].c.k[1]/=255,t[i].c.k[2]/=255,t[i].c.k[3]/=255}}

function i(t){var i,s=t.length;for(i=0;i<s;i+=1)4===t[i].ty&&e(t[i].shapes)}

function e(t){var i,s,r;for(i=t.length-1;i>=0;i-=1)if("sh"===t[i].ty){if(t[i].ks.k.i)t[i].ks.k.c=t[i].closed;else for(r=t[i].ks.k.length,s=0;s<r;s+=1)t[i].ks.k[s].s&&(t[i].ks.k[s].s[0].c=t[i].closed),t[i].ks.k[s].e&&(t[i].ks.k[s].e[0].c=t[i].closed)}else"gr"===t[i].ty&&e(t[i].it)}

function i(t){var i,s,r,n,a,o,l=t.length;for(s=0;s<l;s+=1){if((i=t[s]).hasMask){var h=i.masksProperties;for(n=h.length,r=0;r<n;r+=1)if(h[r].pt.k.i)h[r].pt.k.c=h[r].cl;else for(o=h[r].pt.k.length,a=0;a<o;a+=1)h[r].pt.k[a].s&&(h[r].pt.k[a].s[0].c=h[r].cl),h[r].pt.k[a].e&&(h[r].pt.k[a].e[0].c=h[r].cl)}4===i.ty&&e(i.shapes)}}

function t(t){var e=t.getResponseHeader("content-type");return e&&"json"===t.responseType&&-1!==e.indexOf("json")||t.response&&"object"===_typeof$5(t.response)?t.response:t.response&&"string"==typeof t.response?JSON.parse(t.response):t.responseText?JSON.parse(t.responseText):null}

function o(t,e){var r="processId_"+(i+=1);return s[r]={onComplete:t,onError:e},r}

function s(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}

function r(){this.loadedFootagesCount+=1,this.loadedAssets===this.totalImages&&this.loadedFootagesCount===this.totalFootages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}

function n(t,e,i){var s="";if(t.e)s=t.p;else if(e){var r=t.p;-1!==r.indexOf("images/")&&(r=r.split("/")[1]),s=e+r}else s=i,s+=t.u?t.u:"",s+=t.p;return s}

function a(t){var e=0,i=setInterval((function(){(t.getBBox().width||e>500)&&(this._imageLoaded(),clearInterval(i)),e+=1}).bind(this),50)}

function o(t){

var e={assetData:t}

function l(){this._imageLoaded=s.bind(this),this._footageLoaded=r.bind(this),this.testImageLoaded=a.bind(this),this.createFootageData=o.bind(this),this.assetsPath="",this.path="",this.totalImages=0,this.totalFootages=0,this.loadedAssets=0,this.loadedFootagesCount=0,this.imagesLoadedCb=null,this.images=[]}

var r={img:s,assetData:t}

var r={img:s,assetData:t}

var markerParser=function(){

function t(t){for(var e,i=t.split("\r\n"),s={},r=0,n=0;n<i.length;n+=1)2===(e=i[n].split(":")).length&&(s[e[0]]=e[1].trim(),r+=1);if(0===r)throw Error();return s}

function t(t){this.compositions.push(t)}

function e(t){for(var e=0,i=this.compositions.length;e<i;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].data.xt&&this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}return null}

function _typeof$4(t){return(_typeof$4="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}

var t={}

function h(){r+=1,f()}

function d(){r-=1}

function u(t,i){t.

function c(t){i=t,window.requestAnimationFrame(p)}

function f(){!a&&r&&n&&(window.requestAnimationFrame(c),n=!1)}

var t={getBezierEasing:function(t,i,s,r,n){var a=n||("bez_"+t+"_"+i+"_"+s+"_"+r).replace(/\./g,"p");if(e[a])return e[a];var o=new d([t,i,s,r]);return e[a]=o,o}}

function n(t,e){return 1-3*e+3*t}

function a(t,e){return 3*e-6*t}

function o(t){return 3*t}

function l(t,e,i){return((n(e,i)*t+a(e,i))*t+o(e))*t}

function h(t,e,i){return 3*n(e,i)*t*t+2*a(e,i)*t+o(e)}

function d(t){this._p=t,this._mSampleValues=r?new Float32Array(i):Array(i),this._precomputed=!1,this.get=this.get.bind(this)}

function bezFunction(){var t=Math;

function e(t,e,i,s,r,n){var a=t*s+e*r+i*n-r*s-n*t-i*e;return a>-.001&&a<.001}

var i=function(t,e,i,s){var r,n,a,o,l,h,d=getDefaultCurveSegments(),u=0,p=[],c=[],f=bezierLengthPool.newElement();for(a=i.length,r=0;r<d;r+=1){for(l=r/(d-1),h=0,n=0;n<a;n+=1)o=bmPow(1-l,3)*t[n]+3*bmPow(1-l,2)*l*i[n]+3*(1-l)*bmPow(l,2)*s[n]+bmPow(l,3)*e[n],p[n]=o,null!==c[n]&&(h+=bmPow(p[n]-c[n],2)),c[n]=p[n];h&&(u+=h=bmSqrt(h)),f.percents[r]=l,f.lengths[r]=u}return f.addedLength=u,f}

function s(t){this.segmentLength=0,this.points=Array(t)}

function r(t,e){this.partialLength=t,this.point=e}

function o(t,e){var i=e.percents,s=e.lengths,r=i.length,n=bmFloor((r-1)*t),a=t*e.addedLength,o=0;if(n===r-1||0===n||a===s[n])return i[n];for(var l=s[n]>a?-1:1,h=!0;h;)if(s[n]<=a&&s[n+1]>a?(o=(a-s[n])/(s[n+1]-s[n]),h=!1):n+=l,n<0||n>=r-1){if(n===r-1)return i[n];h=!1}return i[n]+(i[n+1]-i[n])*o}

function i(t,e){var i,r,n,a,o,l,h,d,u,p,c,f,m,g,$,v,_,y,x,b,w,T,C,S=this.offsetTime;"multidimensional"===this.propType&&(C=createTypedArray("float32",this.pv.length));for(var E,P,k,A,D,M,I,L,R,O=e.lastIndex,F=O,z=this.keyframes.length-1,B=!0;B;){if(E=this.keyframes[F],P=this.keyframes[F+1],F===z-1&&t>=P.t-S){E.h&&(E=P),O=0;break}if(P.t-S>t){O=F;break}F<z-1?F+=1:(O=0,B=!1)}k=this.keyframesMetadata[F]||{};var N,V,G,H,q,W,j,U,X,Y,K=P.t-S,Z=E.t-S;if(E.to){k.bezierData||(k.bezierData=bez.buildBezierData(E.s,P.s||E.e,E.to,E.ti));var Q=k.bezierData;if(t>=K||t<Z){var J=t>=K?Q.points.length-1:0;for(D=Q.points[J].point.length,A=0;A<D;A+=1)C[A]=Q.points[J].point[A]}else{k.__fnct?R=k.__fnct:(R=BezierFactory.getBezierEasing(E.o.x,E.o.y,E.i.x,E.i.y,E.n).get,k.__fnct=R),M=R((t-Z)/(K-Z));var tt,te=Q.segmentLength*M,ti=e.lastFrame<t&&e._lastKeyframeIndex===F?e._lastAddedLength:0;for(L=e.lastFrame<t&&e._lastKeyframeIndex===F?e._lastPoint:0,B=!0,I=Q.points.length;B;){if(ti+=Q.points[L].partialLength,0===te||0===M||L===Q.points.length-1){for(D=Q.points[L].point.length,A=0;A<D;A+=1)C[A]=Q.points[L].point[A];break}if(te>=ti&&te<ti+Q.points[L+1].partialLength){for(tt=(te-ti)/Q.points[L+1].partialLength,D=Q.points[L].point.length,A=0;A<D;A+=1)C[A]=Q.points[L].point[A]+(Q.points[L+1].point[A]-Q.points[L].point[A])*tt;break}L<I-1?L+=1:B=!1}e._lastPoint=L,e._lastAddedLength=ti-Q.points[L].partialLength,e._lastKeyframeIndex=F}}else if(z=E.s.length,N=P.s||E.e,this.sh&&1!==E.h)t>=K?(C[0]=N[0],C[1]=N[1],C[2]=N[2]):t<=Z?(C[0]=E.s[0],C[1]=E.s[1],C[2]=E.s[2]):(V=C,H=(G=(i=s(E.s),r=s(N),n=(t-Z)/(K-Z),u=[],p=i[0],c=i[1],f=i[2],m=i[3],g=r[0],$=r[1],v=r[2],(o=p*g+c*$+f*v+m*(_=r[3]))<0&&(o=-o,g=-g,$=-$,v=-v,_=-_),1-o>1e-6?(h=Math.sin((1-n)*a)/(l=Math.sin(a=Math.acos(o))),d=Math.sin(n*a)/l):(h=1-n,d=n),u[0]=h*p+d*g,u[1]=h*c+d*$,u[2]=h*f+d*v,u[3]=h*m+d*_,u))[0],q=G[1],W=G[2],U=Math.atan2(2*q*(j=G[3])-2*H*W,1-2*q*q-2*W*W),X=Math.asin(2*H*q+2*W*j),Y=Math.atan2(2*H*j-2*q*W,1-2*H*H-2*W*W),V[0]=U/degToRads,V[1]=X/degToRads,V[2]=Y/degToRads);else for(F=0;F<z;F+=1)1!==E.h&&(t>=K?M=1:t<Z?M=0:(E.o.x.constructor===Array?(k.__fnct||(k.__fnct=[]),k.__fnct[F]?R=k.__fnct[F]:(y=void 0===E.o.x[F]?E.o.x[0]:E.o.x[F],x=void 0===E.o.y[F]?E.o.y[0]:E.o.y[F],b=void 0===E.i.x[F]?E.i.x[0]:E.i.x[F],w=void 0===E.i.y[F]?E.i.y[0]:E.i.y[F],R=BezierFactory.getBezierEasing(y,x,b,w).get,k.__fnct[F]=R)):k.__fnct?R=k.__fnct:(y=E.o.x,x=E.o.y,b=E.i.x,w=E.i.y,R=BezierFactory.getBezierEasing(y,x,b,w).get,E.keyframeMetadata=R),M=R((t-Z)/(K-Z)))),N=P.s||E.e,T=1===E.h?E.s[F]:E.s[F]+(N[F]-E.s[F])*M,"multidimensional"===this.propType?C[F]=T:C=T;return e.lastIndex=O,C}

function s(t){var e=t[0]*degToRads,i=t[1]*degToRads,s=t[2]*degToRads,r=Math.cos(e/2),n=Math.cos(i/2),a=Math.cos(s/2),o=Math.sin(e/2),l=Math.sin(i/2),h=Math.sin(s/2);return[o*l*a+r*n*h,o*n*a+r*l*h,r*l*a-o*n*h,r*n*a-o*l*h]}

function r(){var e=this.comp.renderedFrame-this.offsetTime,i=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(e===this._caching.lastFrame||this._caching.lastFrame!==t&&(this._caching.lastFrame>=s&&e>=s||this._caching.lastFrame<i&&e<i))){this._caching.lastFrame>=e&&(this._caching._lastKeyframeIndex=-1,this._caching.lastIndex=0);var r=this.interpolateValue(e,this._caching);this.pv=r}return this._caching.lastFrame=e,this.pv}

function n(t){var i;if("unidimensional"===this.propType)i=t*this.mult,e(this.v-i)>1e-5&&(this.v=i,this._mdf=!0);else for(var s=0,r=this.v.length;s<r;)i=t[s]*this.mult,e(this.v[s]-i)>1e-5&&(this.v[s]=i,this._mdf=!0),s+=1}

function a(){if(this.elem.globalData.frameId!==this.frameId&&this.effectsSequence.length){if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=this._isFirstFrame;var t,e=this.effectsSequence.length,i=this.kf?this.pv:this.data.k;for(t=0;t<e;t+=1)i=this.effectsSequence[t](i);this.setVValue(i),this._isFirstFrame=!1,this.lock=!1,this.frameId=this.elem.globalData.frameId}}}

function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}

function l(t,e,i,s){this.propType="unidimensional",this.mult=i||1,this.data=e,this.v=i?e.k*i:e.k,this.pv=e.k,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.effectsSequence=[],this._isFirstFrame=!0,this.getValue=a,this.setVValue=n,this.addEffect=o}

function h(t,e,i,s){this.propType="multidimensional",this.mult=i||1,this.data=e,this._mdf=!1,this.elem=t,this.container=s,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1;var r,l=e.k.length;for(this.v=createTypedArray("float32",l),this.pv=createTypedArray("float32",l),this.vel=createTypedArray("float32",l),r=0;r<l;r+=1)this.v[r]=e.k[r]*this.mult,this.pv[r]=e.k[r];this._isFirstFrame=!0,this.effectsSequence=[],this.getValue=a,this.setVValue=n,this.addEffect=o}

function d(e,s,l,h){this.propType="unidimensional",this.keyframes=s.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.frameId=-1,this._caching={lastFrame:t,lastIndex:0,value:0,_lastKeyframeIndex:-1},this.k=!0,this.kf=!0,this.data=s,this.mult=l||1,this.elem=e,this.container=h,this.comp=e.comp,this.v=t,this.pv=t,this._isFirstFrame=!0,this.getValue=a,this.setVValue=n,this.interpolateValue=i,this.effectsSequence=[r.bind(this)],this.addEffect=o}

function u(e,s,l,h){this.propType="multidimensional";var d,u,p,c,f,m=s.k.length;for(d=0;d<m-1;d+=1)s.k[d].to&&s.k[d].s&&s.k[d+1]&&s.k[d+1].s&&(u=s.k[d].s,p=s.k[d+1].s,c=s.k[d].to,f=s.k[d].ti,(2===u.length&&(u[0]!==p[0]||u[1]!==p[1])&&bez.pointOnLine2D(u[0],u[1],p[0],p[1],u[0]+c[0],u[1]+c[1])&&bez.pointOnLine2D(u[0],u[1],p[0],p[1],p[0]+f[0],p[1]+f[1])||3===u.length&&(u[0]!==p[0]||u[1]!==p[1]||u[2]!==p[2])&&bez.pointOnLine3D(u[0],u[1],u[2],p[0],p[1],p[2],u[0]+c[0],u[1]+c[1],u[2]+c[2])&&bez.pointOnLine3D(u[0],u[1],u[2],p[0],p[1],p[2],p[0]+f[0],p[1]+f[1],p[2]+f[2]))&&(s.k[d].to=null,s.k[d].ti=null),u[0]===p[0]&&u[1]===p[1]&&0===c[0]&&0===c[1]&&0===f[0]&&0===f[1]&&(2===u.length||u[2]===p[2]&&0===c[2]&&0===f[2])&&(s.k[d].to=null,s.k[d].ti=null));this.effectsSequence=[r.bind(this)],this.data=s,this.keyframes=s.k,this.keyframesMetadata=[],this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this._isFirstFrame=!0,this.mult=l||1,this.elem=e,this.container=h,this.comp=e.comp,this.getValue=a,this.setVValue=n,this.interpolateValue=i,this.frameId=-1;var g=s.k[0].s.length;for(this.v=createTypedArray("float32",g),this.pv=createTypedArray("float32",g),d=0;d<g;d+=1)this.v[d]=t,this.pv[d]=t;this._caching={lastFrame:t,lastIndex:0,value:createTypedArray("float32",g)},this.addEffect=o}

function DynamicPropertyContainer(){}

function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=createSizedArray(this._maxLength),this.o=createSizedArray(this._maxLength),this.i=createSizedArray(this._maxLength)}

function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=createSizedArray(this._maxLength)}

function e(t,e,i){var s,r,n,a,o,l,h,d,u,p=i.lastIndex,c=this.keyframes;if(t<c[0].t-this.offsetTime)s=c[0].s[0],n=!0,p=0;else if(t>=c[c.length-1].t-this.offsetTime)s=c[c.length-1].s?c[c.length-1].s[0]:c[c.length-2].e[0],n=!0;else{for(var f,m,g,$,v=p,_=c.length-1,y=!0;y&&(m=c[v],!((g=c[v+1]).t-this.offsetTime>t));)v<_-1?v+=1:y=!1;$=this.keyframesMetadata[v]||{},p=v,(n=1===m.h)||(t>=g.t-this.offsetTime?d=1:t<m.t-this.offsetTime?d=0:($.__fnct?f=$.__fnct:(f=BezierFactory.getBezierEasing(m.o.x,m.o.y,m.i.x,m.i.y).get,$.__fnct=f),d=f((t-(m.t-this.offsetTime))/(g.t-this.offsetTime-(m.t-this.offsetTime)))),r=g.s?g.s[0]:m.e[0]),s=m.s[0]}for(l=e._length,h=s.i[0].length,i.lastIndex=p,a=0;a<l;a+=1)for(o=0;o<h;o+=1)u=n?s.i[a][o]:s.i[a][o]+(r.i[a][o]-s.i[a][o])*d,e.i[a][o]=u,u=n?s.o[a][o]:s.o[a][o]+(r.o[a][o]-s.o[a][o])*d,e.o[a][o]=u,u=n?s.v[a][o]:s.v[a][o]+(r.v[a][o]-s.v[a][o])*d,e.v[a][o]=u}

function i(){var e=this.comp.renderedFrame-this.offsetTime,i=this.keyframes[0].t-this.offsetTime,s=this.keyframes[this.keyframes.length-1].t-this.offsetTime,r=this._caching.lastFrame;return r!==t&&(r<i&&e<i||r>s&&e>s)||(this._caching.lastIndex=r<e?this._caching.lastIndex:0,this.interpolateShape(e,this.pv,this._caching)),this._caching.lastFrame=e,this.pv}

function s(){this.paths=this.localShapeCollection}

function r(t){(function(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var i,s=t._length;for(i=0;i<s;i+=1)if(t.v[i][0]!==e.v[i][0]||t.v[i][1]!==e.v[i][1]||t.o[i][0]!==e.o[i][0]||t.o[i][1]!==e.o[i][1]||t.i[i][0]!==e.i[i][0]||t.i[i][1]!==e.i[i][1])return!1;return!0})(this.v,t)||(this.v=shapePool.clone(t),this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(this.v),this._mdf=!0,this.paths=this.localShapeCollection)}

function n(){if(this.elem.globalData.frameId!==this.frameId){if(this.effectsSequence.length){if(this.lock)this.setVValue(this.pv);else{this.lock=!0,this._mdf=!1,t=this.kf?this.pv:this.data.ks?this.data.ks.k:this.data.pt.k;var t,e,i=this.effectsSequence.length;for(e=0;e<i;e+=1)t=this.effectsSequence[e](t);this.setVValue(t),this.lock=!1,this.frameId=this.elem.globalData.frameId}}else this._mdf=!1}}

function a(t,e,i){this.propType="shape",this.comp=t.comp,this.container=t,this.elem=t,this.data=e,this.k=!1,this.kf=!1,this._mdf=!1;var r=3===i?e.pt.k:e.ks.k;this.v=shapePool.clone(r),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=s,this.effectsSequence=[]}

function o(t){this.effectsSequence.push(t),this.container.addDynamicProperty(this)}

function l(e,r,n){this.propType="shape",this.comp=e.comp,this.elem=e,this.container=e,this.offsetTime=e.data.st,this.keyframes=3===n?r.pt.k:r.ks.k,this.keyframesMetadata=[],this.k=!0,this.kf=!0;var a=this.keyframes[0].s[0].i.length;this.v=shapePool.newElement(),this.v.setPathData(this.keyframes[0].s[0].c,a),this.pv=shapePool.clone(this.v),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=t,this.reset=s,this._caching={lastFrame:t,lastIndex:0},this.effectsSequence=[i.bind(this)]}

var h=function(){var t=roundCorner;

function e(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=e.d,this.elem=t,this.comp=t.comp,this.frameId=-1,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertEllToPath())}

function t(t,e){this.v=shapePool.newElement(),this.v.setPathData(!0,0),this.elem=t,this.comp=t.comp,this.data=e,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),1===e.sy?(this.ir=PropertyFactory.getProp(t,e.ir,0,0,this),this.is=PropertyFactory.getProp(t,e.is,0,.01,this),this.convertToPath=this.convertStarToPath):this.convertToPath=this.convertPolygonToPath,this.pt=PropertyFactory.getProp(t,e.pt,0,0,this),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this),this.or=PropertyFactory.getProp(t,e.or,0,0,this),this.os=PropertyFactory.getProp(t,e.os,0,.01,this),this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertToPath())}

function t(t,e){this.v=shapePool.newElement(),this.v.c=!0,this.localShapeCollection=shapeCollectionPool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=t,this.comp=t.comp,this.frameId=-1,this.d=e.d,this.initDynamicPropertyContainer(t),this.p=PropertyFactory.getProp(t,e.p,1,0,this),this.s=PropertyFactory.getProp(t,e.s,1,0,this),this.r=PropertyFactory.getProp(t,e.r,0,0,this),this.dynamicProperties.length?this.k=!0:(this.k=!1,this.convertRectToPath())}

function r(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}

function n(i){if(0===i)return this;var s=t(i),r=e(i);return this._t(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}

function a(i){if(0===i)return this;var s=t(i),r=e(i);return this._t(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1)}

function o(i){if(0===i)return this;var s=t(i),r=e(i);return this._t(s,0,r,0,0,1,0,0,-r,0,s,0,0,0,0,1)}

function l(i){if(0===i)return this;var s=t(i),r=e(i);return this._t(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}

function h(t,e){return this._t(1,e,t,1,0,0)}

function d(t,e){return this.shear(i(t),i(e))}

function u(s,r){var n=t(r),a=e(r);return this._t(n,a,0,0,-a,n,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,i(s),1,0,0,0,0,1,0,0,0,0,1)._t(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1)}

function p(t,e,i){return i||0===i||(i=1),1===t&&1===e&&1===i?this:this._t(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1)}

function c(t,e,i,s,r,n,a,o,l,h,d,u,p,c,f,m){return this.props[0]=t,this.props[1]=e,this.props[2]=i,this.props[3]=s,this.props[4]=r,this.props[5]=n,this.props[6]=a,this.props[7]=o,this.props[8]=l,this.props[9]=h,this.props[10]=d,this.props[11]=u,this.props[12]=p,this.props[13]=c,this.props[14]=f,this.props[15]=m,this}

function f(t,e,i){return i=i||0,0!==t||0!==e||0!==i?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,i,1):this}

function m(t,e,i,s,r,n,a,o,l,h,d,u,p,c,f,m){var g=this.props;if(1===t&&0===e&&0===i&&0===s&&0===r&&1===n&&0===a&&0===o&&0===l&&0===h&&1===d&&0===u)return g[12]=g[12]*t+g[15]*p,g[13]=g[13]*n+g[15]*c,g[14]=g[14]*d+g[15]*f,g[15]*=m,this._identityCalculated=!1,this;var $=g[0],v=g[1],_=g[2],y=g[3],x=g[4],b=g[5],w=g[6],T=g[7],C=g[8],S=g[9],E=g[10],P=g[11],k=g[12],A=g[13],D=g[14],M=g[15];return g[0]=$*t+v*r+_*l+y*p,g[1]=$*e+v*n+_*h+y*c,g[2]=$*i+v*a+_*d+y*f,g[3]=$*s+v*o+_*u+y*m,g[4]=x*t+b*r+w*l+T*p,g[5]=x*e+b*n+w*h+T*c,g[6]=x*i+b*a+w*d+T*f,g[7]=x*s+b*o+w*u+T*m,g[8]=C*t+S*r+E*l+P*p,g[9]=C*e+S*n+E*h+P*c,g[10]=C*i+S*a+E*d+P*f,g[11]=C*s+S*o+E*u+P*m,g[12]=k*t+A*r+D*l+M*p,g[13]=k*e+A*n+D*h+M*c,g[14]=k*i+A*a+D*d+M*f,g[15]=k*s+A*o+D*u+M*m,this._identityCalculated=!1,this}

function g(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}

function $(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}

function v(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e];return t}

function _(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}

function y(t,e,i){return{x:t*this.props[0]+e*this.props[4]+i*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+i*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+i*this.props[10]+this.props[14]}}

function x(t,e,i){return t*this.props[0]+e*this.props[4]+i*this.props[8]+this.props[12]}

function b(t,e,i){return t*this.props[1]+e*this.props[5]+i*this.props[9]+this.props[13]}

function w(t,e,i){return t*this.props[2]+e*this.props[6]+i*this.props[10]+this.props[14]}

function T(){var t=this.props[0]*this.props[5]-this.props[1]*this.props[4],e=this.props[5]/t,i=-this.props[1]/t,s=-this.props[4]/t,r=this.props[0]/t,n=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/t,a=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/t,o=new Matrix;return o.props[0]=e,o.props[1]=i,o.props[4]=s,o.props[5]=r,o.props[12]=n,o.props[13]=a,o}

function C(t){return this.getInverseMatrix().applyToPointArray(t[0],t[1],t[2]||0)}

function S(t){var e,i=t.length,s=[];for(e=0;e<i;e+=1)s[e]=C(t[e]);return s}

function E(t,e,i){var s=createTypedArray("float32",6);if(this.isIdentity())s[0]=t[0],s[1]=t[1],s[2]=e[0],s[3]=e[1],s[4]=i[0],s[5]=i[1];else{var r=this.props[0],n=this.props[1],a=this.props[4],o=this.props[5],l=this.props[12],h=this.props[13];s[0]=t[0]*r+t[1]*a+l,s[1]=t[0]*n+t[1]*o+h,s[2]=e[0]*r+e[1]*a+l,s[3]=e[0]*n+e[1]*o+h,s[4]=i[0]*r+i[1]*a+l,s[5]=i[0]*n+i[1]*o+h}return s}

function P(t,e,i){return this.isIdentity()?[t,e,i]:[t*this.props[0]+e*this.props[4]+i*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+i*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+i*this.props[10]+this.props[14]]}

function k(t,e){if(this.isIdentity())return t+","+e;var i=this.props;return Math.round(100*(t*i[0]+e*i[4]+i[12]))/100+","+Math.round(100*(t*i[1]+e*i[5]+i[13]))/100}

function A(){for(var t=0,e=this.props,i="matrix3d(";t<16;)i+=s(1e4*e[t])/1e4,i+=15===t?")":",",t+=1;return i}

function D(t){return t<1e-6&&t>0||t>-.000001&&t<0?s(1e4*t)/1e4:t}

function M(){var t=this.props;return"matrix("+D(t[0])+","+D(t[1])+","+D(t[4])+","+D(t[5])+","+D(t[12])+","+D(t[13])+")"}

function _typeof$3(t){return(_typeof$3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}

var lottie={}

function setLocation(t){setLocationHref(t)}

function setSubframeRendering(t){setSubframeEnabled(t)}

function setPrefix(t){setIdPrefix(t)}

function setQuality(t){if("string"==typeof t)switch(t){case"high":setDefaultCurveSegments(200);break;default:case"medium":setDefaultCurveSegments(50);break;case"low":setDefaultCurveSegments(10)}else!isNaN(t)&&t>1&&setDefaultCurveSegments(t);getDefaultCurveSegments()>=50?roundValues(!1):roundValues(!0)}

function inBrowser(){return"undefined"!=typeof navigator}

function installPlugin(t,e){"expressions"===t&&setExpressionsPlugin(e)}

function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}

function ShapeModifier(){}

function TrimModifier(){}

function PuckerAndBloatModifier(){}

var e={shape:t.sh,data:t,localShapeCollection:shapeCollectionPool.newShapeCollection()}

function RepeaterModifier(){}

function RoundCornersModifier(){}

function floatEqual(t,e){return 1e5*Math.abs(t-e)<=Math.min(Math.abs(t),Math.abs(e))}

function floatZero(t){return 1e-5>=Math.abs(t)}

function lerp(t,e,i){return t*(1-i)+e*i}

function lerpPoint(t,e,i){return[lerp(t[0],e[0],i),lerp(t[1],e[1],i)]}

function quadRoots(t,e,i){if(0===t)return[];var s=e*e-4*t*i;if(s<0)return[];var r=-e/(2*t);if(0===s)return[r];var n=Math.sqrt(s)/(2*t);return[r-n,r+n]}

function polynomialCoefficients(t,e,i,s){return[3*e-t-3*i+s,3*t-6*e+3*i,-3*t+3*e,t]}

function singlePoint(t){return new PolynomialBezier(t,t,t,t,!1)}

function PolynomialBezier(t,e,i,s,r){r&&pointEqual(t,e)&&(e=lerpPoint(t,s,1/3)),r&&pointEqual(i,s)&&(i=lerpPoint(t,s,2/3));var n=polynomialCoefficients(t[0],e[0],i[0],s[0]),a=polynomialCoefficients(t[1],e[1],i[1],s[1]);this.a=[n[0],a[0]],this.b=[n[1],a[1]],this.c=[n[2],a[2]],this.d=[n[3],a[3]],this.points=[t,e,i,s]}

function extrema(t,e){var i=t.points[0][e],s=t.points[t.points.length-1][e];if(i>s){var r=s;s=i,i=r}for(var n=quadRoots(3*t.a[e],2*t.b[e],t.c[e]),a=0;a<n.length;a+=1)if(n[a]>0&&n[a]<1){var o=t.point(n[a])[e];o<i?i=o:o>s&&(s=o)}return{min:i,max:s}}

function intersectData(t,e,i){var s=t.boundingBox();return{cx:s.cx,cy:s.cy,width:s.width,height:s.height,bez:t,t:(e+i)/2,t1:e,t2:i}}

function splitData(t){var e=t.bez.split(.5);return[intersectData(e[0],t.t1,t.t),intersectData(e[1],t.t,t.t2)]}

function boxIntersect(t,e){return 2*Math.abs(t.cx-e.cx)<t.width+e.width&&2*Math.abs(t.cy-e.cy)<t.height+e.height}

function intersectsImpl(t,e,i,s,r,n){if(boxIntersect(t,e)){if(i>=n||t.width<=s&&t.height<=s&&e.width<=s&&e.height<=s)r.push([t.t,e.t]);else{var a=splitData(t),o=splitData(e);intersectsImpl(a[0],o[0],i+1,s,r,n),intersectsImpl(a[0],o[1],i+1,s,r,n),intersectsImpl(a[1],o[0],i+1,s,r,n),intersectsImpl(a[1],o[1],i+1,s,r,n)}}}

function crossProduct(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}

function lineIntersection(t,e,i,s){var r=[t[0],t[1],1],n=[e[0],e[1],1],a=[i[0],i[1],1],o=[s[0],s[1],1],l=crossProduct(crossProduct(r,n),crossProduct(a,o));return floatZero(l[2])?null:[l[0]/l[2],l[1]/l[2]]}

function polarOffset(t,e,i){return[t[0]+Math.cos(e)*i,t[1]-Math.sin(e)*i]}

function pointDistance(t,e){return Math.hypot(t[0]-e[0],t[1]-e[1])}

function pointEqual(t,e){return floatEqual(t[0],e[0])&&floatEqual(t[1],e[1])}

function ZigZagModifier(){}

function setPoint(t,e,i,s,r,n,a){var o=i-Math.PI/2,l=i+Math.PI/2,h=e[0]+Math.cos(i)*s*r,d=e[1]-Math.sin(i)*s*r;t.setTripleAt(h,d,h+Math.cos(o)*n,d-Math.sin(o)*n,h+Math.cos(l)*a,d-Math.sin(l)*a,t.length())}

function zigZagCorner(t,e,i,s,r,n,a){var o=getProjectingAngle(e,i),l=e.v[i%e._length],h=e.v[0===i?e._length-1:i-1],d=e.v[(i+1)%e._length],u=2===n?Math.sqrt(Math.pow(l[0]-h[0],2)+Math.pow(l[1]-h[1],2)):0,p=2===n?Math.sqrt(Math.pow(l[0]-d[0],2)+Math.pow(l[1]-d[1],2)):0;setPoint(t,e.v[i%e._length],o,a,s,p/(2*(r+1)),u/(2*(r+1)),n)}

function zigZagSegment(t,e,i,s,r,n){for(var a=0;a<s;a+=1){var o=(a+1)/(s+1),l=2===r?Math.sqrt(Math.pow(e.points[3][0]-e.points[0][0],2)+Math.pow(e.points[3][1]-e.points[0][1],2)):0,h=e.normalAngle(o);setPoint(t,e.point(o),h,n,i,l/(2*(s+1)),l/(2*(s+1)),r),n=-n}return n}

function linearOffset(t,e,i){var s=Math.atan2(e[0]-t[0],e[1]-t[1]);return[polarOffset(t,s,i),polarOffset(e,s,i)]}

function offsetSegment(t,e){i=(l=linearOffset(t.points[0],t.points[1],e))[0],s=l[1],r=(l=linearOffset(t.points[1],t.points[2],e))[0],n=l[1],a=(l=linearOffset(t.points[2],t.points[3],e))[0],o=l[1];var i,s,r,n,a,o,l,h=lineIntersection(i,s,r,n);null===h&&(h=s);var d=lineIntersection(a,o,r,n);return null===d&&(d=a),new PolynomialBezier(i,h,d,o)}

function joinLines(t,e,i,s,r){var n=e.points[3],a=i.points[0];if(3===s||pointEqual(n,a))return n;if(2===s){var o=-e.tangentAngle(1),l=-i.tangentAngle(0)+Math.PI,h=lineIntersection(n,polarOffset(n,o+Math.PI/2,100),a,polarOffset(a,o+Math.PI/2,100)),d=h?pointDistance(h,n):pointDistance(n,a)/2,u=polarOffset(n,o,2*d*roundCorner);return t.setXYAt(u[0],u[1],"o",t.length()-1),u=polarOffset(a,l,2*d*roundCorner),t.setTripleAt(a[0],a[1],a[0],a[1],u[0],u[1],t.length()),a}var p=lineIntersection(pointEqual(n,e.points[2])?e.points[0]:e.points[2],n,a,pointEqual(a,i.points[1])?i.points[3]:i.points[1]);return p&&pointDistance(p,n)<r?(t.setTripleAt(p[0],p[1],p[0],p[1],p[0],p[1],t.length()),p):n}

function pruneSegmentIntersection(t,e){var i=t.slice(),s=e.slice(),r=getIntersection(t[t.length-1],e[0]);return r&&(i[t.length-1]=t[t.length-1].split(r[0])[0],s[0]=e[0].split(r[1])[1]),t.length>1&&e.length>1&&(r=getIntersection(t[0],e[e.length-1]))?[[t[0].split(r[0])[0]],[e[e.length-1].split(r[1])[1]]]:[i,s]}

function pruneIntersections(t){for(var e,i=1;i<t.length;i+=1)e=pruneSegmentIntersection(t[i-1],t[i]),t[i-1]=e[0],t[i]=e[1];return t.length>1&&(e=pruneSegmentIntersection(t[t.length-1],t[0]),t[t.length-1]=e[0],t[0]=e[1]),t}

function offsetSegmentSplit(t,e){var i,s,r,n,a=t.inflectionPoints();if(0===a.length)return[offsetSegment(t,e)];if(1===a.length||floatEqual(a[1],1))return i=(r=t.split(a[0]))[0],s=r[1],[offsetSegment(i,e),offsetSegment(s,e)];i=(r=t.split(a[0]))[0];var o=(a[1]-a[0])/(1-a[0]);return n=(r=r[1].split(o))[0],s=r[1],[offsetSegment(i,e),offsetSegment(n,e),offsetSegment(s,e)]}

function OffsetPathModifier(){}

var h={it:this.cloneElements(this._elements),ty:"gr"}

var FontManager=function(){

var t={w:0,size:0,shapes:[],data:{shapes:[]}}

var a=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.isLoaded=!1,this._warned=!1,this.initTime=Date.now(),this.setIsLoadedBinded=this.setIsLoaded.bind(this),this.checkLoadedFontsBinded=this.checkLoadedFonts.bind(this)}

function RenderableElement(){}

function AngleEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}

function ColorEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,1,0,i)}

function PointEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,1,0,i)}

function LayerIndexEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}

function MaskIndexEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}

function CheckboxEffect(t,e,i){this.p=PropertyFactory.getProp(e,t.v,0,0,i)}

function NoValueEffect(){this.p={}}

function EffectsManager(t,e){var i,s=t.ef||[];this.effectElements=[];var r,n=s.length;for(i=0;i<n;i+=1)r=new GroupEffect(s[i],e),this.effectElements.push(r)}

function GroupEffect(t,e){this.init(t,e)}

function BaseElement(){}

function FrameElement(){}

function FootageElement(t,e,i){this.initFrame(),this.initRenderable(),this.assetData=e.getAssetData(t.refId),this.footageData=e.imageLoader.getAsset(this.assetData),this.initBaseData(t,e,i)}

function BaseRenderer(){}

var filtersFactory={createFilter:function(t,e){var i=createNS("filter");return i.setAttribute("id",t),!0!==e&&(i.setAttribute("filterUnits","objectBoundingBox"),i.setAttribute("x","0%"),i.setAttribute("y","0%"),i.setAttribute("width","100%"),i.setAttribute("height","100%")),i},createAlphaToLuminanceFilter:function(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}}

function registerEffect(t,e,i){registeredEffects[t]={effect:e,countsAsEffect:i}}

function SVGBaseElement(){}

function HierarchyElement(){}

function RenderableDOMElement(){}

function IImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,i),this.sourceRect={top:0,left:0,width:this.assetData.w,height:this.assetData.h}}

function ProcessedElement(t,e){this.elem=t,this.pos=e}

function IShapeElement(){}

var lineCapEnum={1:"butt",2:"round",3:"square"}

function SVGStyleData(t,e){this.data=t,this.type=t.ty,this.d="",this.lvl=e,this._mdf=!1,this.closed=!0===t.hd,this.pElem=createNS("path"),this.msElem=null}

function DashProperty(t,e,i,s){this.elem=t,this.frameId=-1,this.dataProps=createSizedArray(e.length),this.renderer=i,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length?e.length-1:0),this.dashoffset=createTypedArray("float32",1),this.initDynamicPropertyContainer(s);var r,n,a=e.length||0;for(r=0;r<a;r+=1)n=PropertyFactory.getProp(t,e[r].v,0,0,this),this.k=n.k||this.k,this.dataProps[r]={n:e[r].n,p:n};this.k||this.getValue(!0),this._isAnimated=this.k}

function SVGStrokeStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=i,this._isAnimated=!!this._isAnimated}

function SVGFillStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.o=PropertyFactory.getProp(t,e.o,0,.01,this),this.c=PropertyFactory.getProp(t,e.c,1,255,this),this.style=i}

function SVGNoStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.style=i}

function GradientProperty(t,e,i){this.data=e,this.c=createTypedArray("uint8c",4*e.p);var s=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",s),this._cmdf=!1,this._omdf=!1,this._collapsable=this.checkCollapsable(),this._hasOpacity=s,this.initDynamicPropertyContainer(i),this.prop=PropertyFactory.getProp(t,e.k,1,null,this),this.k=this.prop.k,this.getValue(!0)}

function SVGGradientFillStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.initGradientData(t,e,i)}

function SVGGradientStrokeStyleData(t,e,i){this.initDynamicPropertyContainer(t),this.getValue=this.iterateDynamicProperties,this.w=PropertyFactory.getProp(t,e.w,0,null,this),this.d=new DashProperty(t,e.d||{},"svg",this),this.initGradientData(t,e,i),this._isAnimated=!!this._isAnimated}

function ShapeGroupData(){this.it=[],this.prevViewData=[],this.gr=createNS("g")}

var buildShapeString=function(t,e,i,s){if(0===e)return"";var r,n=t.o,a=t.i,o=t.v,l=" M"+s.applyToPointStringified(o[0][0],o[0][1]);for(r=1;r<e;r+=1)l+=" C"+s.applyToPointStringified(n[r-1][0],n[r-1][1])+" "+s.applyToPointStringified(a[r][0],a[r][1])+" "+s.applyToPointStringified(o[r][0],o[r][1]);return i&&e&&(l+=" C"+s.applyToPointStringified(n[r-1][0],n[r-1][1])+" "+s.applyToPointStringified(a[0][0],a[0][1])+" "+s.applyToPointStringified(o[0][0],o[0][1]),l+="z"),l}

function s(){}

function n(t,e,i){var s=e.style;(e.c._mdf||i)&&s.pElem.setAttribute("fill","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||i)&&s.pElem.setAttribute("fill-opacity",e.o.v)}

function a(t,e,i){o(t,e,i),l(0,e,i)}

function o(t,e,i){var s,r,n,a,o,l=e.gf,h=e.g._hasOpacity,d=e.s.v,u=e.e.v;if(e.o._mdf||i){var p="gf"===t.ty?"fill-opacity":"stroke-opacity";e.style.pElem.setAttribute(p,e.o.v)}if(e.s._mdf||i){var c=1===t.t?"x1":"cx",f="x1"===c?"y1":"cy";l.setAttribute(c,d[0]),l.setAttribute(f,d[1]),h&&!e.g._collapsable&&(e.of.setAttribute(c,d[0]),e.of.setAttribute(f,d[1]))}if(e.g._cmdf||i){s=e.cst;var m=e.g.c;for(n=s.length,r=0;r<n;r+=1)(a=s[r]).setAttribute("offset",m[4*r]+"%"),a.setAttribute("stop-color","rgb("+m[4*r+1]+","+m[4*r+2]+","+m[4*r+3]+")")}if(h&&(e.g._omdf||i)){var g=e.g.o;for(n=(s=e.g._collapsable?e.cst:e.ost).length,r=0;r<n;r+=1)a=s[r],e.g._collapsable||a.setAttribute("offset",g[2*r]+"%"),a.setAttribute("stop-opacity",g[2*r+1])}if(1===t.t)(e.e._mdf||i)&&(l.setAttribute("x2",u[0]),l.setAttribute("y2",u[1]),h&&!e.g._collapsable&&(e.of.setAttribute("x2",u[0]),e.of.setAttribute("y2",u[1])));else if((e.s._mdf||e.e._mdf||i)&&(o=Math.sqrt(Math.pow(d[0]-u[0],2)+Math.pow(d[1]-u[1],2)),l.setAttribute("r",o),h&&!e.g._collapsable&&e.of.setAttribute("r",o)),e.e._mdf||e.h._mdf||e.a._mdf||i){o||(o=Math.sqrt(Math.pow(d[0]-u[0],2)+Math.pow(d[1]-u[1],2)));var $=Math.atan2(u[1]-d[1],u[0]-d[0]),v=e.h.v;v>=1?v=.99:v<=-1&&(v=-.99);var _=o*v,y=Math.cos($+e.a.v)*_+d[0],x=Math.sin($+e.a.v)*_+d[1];l.setAttribute("fx",y),l.setAttribute("fy",x),h&&!e.g._collapsable&&(e.of.setAttribute("fx",y),e.of.setAttribute("fy",x))}}

function l(t,e,i){var s=e.style,r=e.d;r&&(r._mdf||i)&&r.dashStr&&(s.pElem.setAttribute("stroke-dasharray",r.dashStr),s.pElem.setAttribute("stroke-dashoffset",r.dashoffset[0])),e.c&&(e.c._mdf||i)&&s.pElem.setAttribute("stroke","rgb("+bmFloor(e.c.v[0])+","+bmFloor(e.c.v[1])+","+bmFloor(e.c.v[2])+")"),(e.o._mdf||i)&&s.pElem.setAttribute("stroke-opacity",e.o.v),(e.w._mdf||i)&&(s.pElem.setAttribute("stroke-width",e.w.v),s.msElem&&s.msElem.setAttribute("stroke-width",e.w.v))}

function LetterProps(t,e,i,s,r,n){this.o=t,this.sw=e,this.sc=i,this.fc=s,this.m=r,this.p=n,this._mdf={o:!0,sw:!!e,sc:!!i,fc:!!s,m:!0,p:!0}}

function TextProperty(t,e){this._frameId=initialDefaultFrame,this.pv="",this.v="",this.kf=!1,this._isFirstFrame=!0,this._mdf=!1,this.data=e,this.elem=t,this.comp=this.elem.comp,this.keysIndex=0,this.canResize=!1,this.minimumFontSize=1,this.effectsSequence=[],this.currentData={ascent:0,boxWidth:this.defaultBoxWidth,f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:null,fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,finalSize:0,finalText:[],finalLineHeight:0,__complete:!1},this.copyData(this.currentData,this.data.d.k[0].s),this.searchProperty()||this.completeTextData(this.currentData)}

var TextSelectorProp=function(){var t=Math.max,e=Math.min,i=Math.floor;

function s(t,e){this._currentTextLength=-1,this.k=!1,this.data=e,this.elem=t,this.comp=t.comp,this.finalS=0,this.finalE=0,this.initDynamicPropertyContainer(t),this.s=PropertyFactory.getProp(t,e.s||{k:0},0,0,this),this.e="e"in e?PropertyFactory.getProp(t,e.e,0,0,this):{v:100},this.o=PropertyFactory.getProp(t,e.o||{k:0},0,0,this),this.xe=PropertyFactory.getProp(t,e.xe||{k:0},0,0,this),this.ne=PropertyFactory.getProp(t,e.ne||{k:0},0,0,this),this.sm=PropertyFactory.getProp(t,e.sm||{k:100},0,0,this),this.a=PropertyFactory.getProp(t,e.a,0,.01,this),this.dynamicProperties.length||this.getValue()}

var s={propType:!1}

function ITextElement(){}

var emptyShapeData={shapes:[]}

function SVGTextLottieElement(t,e,i){this.textSpans=[],this.renderType="svg",this.initElement(t,e,i)}

function ISolidElement(t,e,i){this.initElement(t,e,i)}

function SVGRendererBase(){}

function ICompElement(){}

function SVGCompElement(t,e,i){this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}

function CVContextData(){var t;for(this.saved=[],this.cArrPos=0,this.cTr=new Matrix,this.cO=1,this.savedOp=createTypedArray("float32",15),t=0;t<15;t+=1)this.saved[t]=createTypedArray("float32",16);this._length=15}

var lumaLoader=function(){var t="__lottie_element_luma_buffer",e=null,i=null,s=null;

function createCanvas(t,e){if(featureSupport.offscreenCanvas)return new OffscreenCanvas(t,e);var i=createTag("canvas");return i.width=t,i.height=e,i}

var assetLoader={loadLumaCanvas:lumaLoader.load,getLumaCanvas:lumaLoader.get,createCanvas:createCanvas}

function CVEffects(){}

function CVMaskElement(t,e){this.data=t,this.element=e,this.masksProperties=this.data.masksProperties||[],this.viewData=createSizedArray(this.masksProperties.length);var i,s=this.masksProperties.length,r=!1;for(i=0;i<s;i+=1)"n"!==this.masksProperties[i].mode&&(r=!0),this.viewData[i]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[i],3);this.hasMasks=r,r&&this.element.addRenderableComponent(this)}

function CVBaseElement(){}

var operationsMap={1:"source-in",2:"source-out",3:"source-in",4:"source-out"}

function CVTextElement(t,e,i){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this.initElement(t,e,i)}

function CVImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.img=e.imageLoader.getAsset(this.assetData),this.initElement(t,e,i)}

function CVSolidElement(t,e,i){this.initElement(t,e,i)}

function CVCompElement(t,e,i){this.completeLayers=!1,this.layers=t.layers,this.pendingElements=[],this.elements=createSizedArray(this.layers.length),this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}

function HBaseElement(){}

function HSolidElement(t,e,i){this.initElement(t,e,i)}

function HTextElement(t,e,i){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this.initElement(t,e,i)}

function HImageElement(t,e,i){this.assetData=e.getAssetData(t.refId),this.initElement(t,e,i)}

function HCompElement(t,e,i){this.layers=t.layers,this.supports3d=!t.hasMask,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?createSizedArray(this.layers.length):[],this.initElement(t,e,i),this.tm=t.tm?PropertyFactory.getProp(this,t.tm,0,e.frameRate,this):{_placeholder:!0}}

var l={container:n,perspectiveElem:r,startPos:t,endPos:t,type:e}

var CompExpressionInterface=function(t){

function e(e){for(var i=0,s=t.layers.length;i<s;){if(t.layers[i].nm===e||t.layers[i].ind===e)return t.elements[i].layerInterface;i+=1}return null}

function t(t,e){this._mask=t,this._data=e}

var t={pv:0,v:0,mult:1}

function i(t,e,i){Object.defineProperty(t,"velocity",{get:function(){return e.getVelocityAtTime(e.comp.currentFrame)}}),t.numKeys=e.keyframes?e.keyframes.length:0,t.key=function(s){if(!t.numKeys)return 0;r="s"in e.keyframes[s-1]?e.keyframes[s-1].s:"e"in e.keyframes[s-2]?e.keyframes[s-2].e:e.keyframes[s-2].s;var r,n="unidimensional"===i?new Number(r):Object.assign({},r);return n.time=e.keyframes[s-1].t/e.elem.comp.globalData.frameRate,n.value="unidimensional"===i?r[0]:r,n},t.valueAtTime=e.getValueAtTime,t.speedAtTime=e.getSpeedAtTime,t.velocityAtTime=e.getVelocityAtTime,t.propertyGroup=e.propertyGroup}

function s(){return t}

function n(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return n.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return n.rotation;case"ADBE Rotate X":return n.xRotation;case"ADBE Rotate Y":return n.yRotation;case"position":case"Position":case"ADBE Position":case 2:return n.position;case"ADBE Position_0":return n.xPosition;case"ADBE Position_1":return n.yPosition;case"ADBE Position_2":return n.zPosition;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return n.anchorPoint;case"opacity":case"Opacity":case 11:return n.opacity;default:return null}}

function e(t,e){var i=this.getMatrix(e);return i.props[12]=0,i.props[13]=0,i.props[14]=0,this.applyPoint(i,t)}

function i(t,e){var i=this.getMatrix(e);return this.applyPoint(i,t)}

function s(t,e){var i=this.getMatrix(e);return i.props[12]=0,i.props[13]=0,i.props[14]=0,this.invertPoint(i,t)}

function r(t,e){var i=this.getMatrix(e);return this.invertPoint(i,t)}

function l(){return[1,1,1,1]}

var i={_name:t}

function t(i,s,r,n){

function a(t){for(var e=i.ef,s=0,r=e.length;s<r;){if(t===e[s].nm||t===e[s].mn||t===e[s].ix)return 5===e[s].ty?h[s]:h[s]();s+=1}throw Error()}

function e(t,e,i,s){var r=ExpressionPropertyInterface(t.p);return t.p.setGroupProperty&&t.p.setGroupProperty(PropertyInterface("",s)),function(){return 10===e?i.comp.compInterface(t.p.v):r()}}

function r(t){return"Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t?r.path:null}

function t(t,a,p){var c,f=[],m=t?t.length:0;for(c=0;c<m;c+=1)"gr"===t[c].ty?f.push(e(t[c],a[c],p)):"fl"===t[c].ty?f.push(i(t[c],a[c],p)):"st"===t[c].ty?f.push(r(t[c],a[c],p)):"tm"===t[c].ty?f.push(n(t[c],a[c],p)):"tr"===t[c].ty||("el"===t[c].ty?f.push(o(t[c],a[c],p)):"sr"===t[c].ty?f.push(l(t[c],a[c],p)):"sh"===t[c].ty?f.push(ShapePathInterface(t[c],a[c],p)):"rc"===t[c].ty?f.push(h(t[c],a[c],p)):"rd"===t[c].ty?f.push(d(t[c],a[c],p)):"rp"===t[c].ty?f.push(u(t[c],a[c],p)):"gf"===t[c].ty?f.push(s(t[c],a[c],p)):f.push((t[c],a[c],function(){return null})));return f}

function i(t,e,i){

function s(t){return"Color"===t||"color"===t?s.color:"Opacity"===t||"opacity"===t?s.opacity:null}

function s(t,e,i){

function s(t){return"Start Point"===t||"start point"===t?s.startPoint:"End Point"===t||"end point"===t?s.endPoint:"Opacity"===t||"opacity"===t?s.opacity:null}

function r(t,e,i){var s,r=propertyGroupFactory(h,i),n=propertyGroupFactory(l,r);

function a(i){Object.defineProperty(l,t.d[i].nm,{get:ExpressionPropertyInterface(e.d.dataProps[i].p)})}

function h(t){return"Color"===t||"color"===t?h.color:"Opacity"===t||"opacity"===t?h.opacity:"Stroke Width"===t||"stroke width"===t?h.strokeWidth:null}

function n(t,e,i){

function s(e){return e===t.e.ix||"End"===e||"end"===e?s.end:e===t.s.ix?s.start:e===t.o.ix?s.offset:null}

function a(t,e,i){

function s(e){return t.a.ix===e||"Anchor Point"===e?s.anchorPoint:t.o.ix===e||"Opacity"===e?s.opacity:t.p.ix===e||"Position"===e?s.position:t.r.ix===e||"Rotation"===e||"ADBE Vector Rotation"===e?s.rotation:t.s.ix===e||"Scale"===e?s.scale:t.sk&&t.sk.ix===e||"Skew"===e?s.skew:t.sa&&t.sa.ix===e||"Skew Axis"===e?s.skewAxis:null}

function o(t,e,i){

function s(e){return t.p.ix===e?s.position:t.s.ix===e?s.size:null}

function l(t,e,i){

function s(e){return t.p.ix===e?s.position:t.r.ix===e?s.rotation:t.pt.ix===e?s.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?s.outerRadius:t.os.ix===e?s.outerRoundness:t.ir&&(t.ir.ix===e||"ADBE Vector Star Inner Radius"===e)?s.innerRadius:t.is&&t.is.ix===e?s.innerRoundness:null}

function h(t,e,i){

function s(e){return t.p.ix===e?s.position:t.r.ix===e?s.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?s.size:null}

function d(t,e,i){

function s(e){return t.r.ix===e||"Round Corners 1"===e?s.radius:null}

function u(t,e,i){

function s(e){return t.c.ix===e||"Copies"===e?s.copies:t.o.ix===e||"Offset"===e?s.offset:null}

function n(t){if("number"==typeof t)return 0===(t=void 0===t?1:t)?s:r[t-1];for(var e=0,i=r.length;e<i;){if(r[e]._name===t)return r[e];e+=1}return null}

function s(t){return"ADBE Text Document"===t?s.sourceText:null}

function _typeof$2(t){return(_typeof$2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}

function e(t){return"Outline"===t?e.outlineInterface():null}

function s(t){if(i[t])return e=t,"object"===_typeof$2(i=i[t])?s:i;var r=t.indexOf(e);if(-1!==r){var n=parseInt(t.substr(r+e.length),10);return"object"===_typeof$2(i=i[n])?s:i}return""}

function e(t){return"Data"===t?e.dataInterface:null}

function _typeof$1(t){return(_typeof$1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}

function seedRandom(t,e){var i=this,s=256,r="random",n=e.pow(s,6),a=e.pow(2,52),o=2*a,l=s-1;

function h(t){var e,i=t.length,r=this,n=0,a=r.i=r.j=0,o=r.S=[];for(i||(t=[i++]);n<s;)o[n]=n++;for(n=0;n<s;n++)o[n]=o[a=l&a+t[n%i]+(e=o[n])],o[a]=e;r.g=function(t){for(var e,i=0,n=r.i,a=r.j,o=r.S;t--;)e=o[n=l&n+1],i=i*s+o[l&(o[n]=o[a=l&a+e])+(o[a]=e)];return r.i=n,r.j=a,i}}

function d(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}

function u(t,e){var i,s=[],r=_typeof$1(t);if(e&&"object"==r)for(i in t)try{s.push(u(t[i],e-1))}catch(n){}return s.length?s:"string"==r?t:t+"\0"}

function p(t,e){for(var i,s=t+"",r=0;r<s.length;)e[l&r]=l&(i^=19*e[l&r])+s.charCodeAt(r++);return c(e)}

function c(t){return String.fromCharCode.apply(0,t)}

var propTypes={SHAPE:"shape"}

function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}

var ExpressionManager=function(){

var ob={}

function $bm_isInstanceOfArray(t){return t.constructor===Array||t.constructor===Float32Array}

function isNumerable(t,e){return"number"===t||"boolean"===t||"string"===t||e instanceof Number}

function $bm_neg(t){var e=_typeof(t);if("number"===e||"boolean"===e||t instanceof Number)return-t;if($bm_isInstanceOfArray(t)){var i,s=t.length,r=[];for(i=0;i<s;i+=1)r[i]=-t[i];return r}return t.propType?t.v:-t}

function sum(t,e){var i=_typeof(t),s=_typeof(e);if("string"===i||"string"===s||isNumerable(i,t)&&isNumerable(s,e))return t+e;if($bm_isInstanceOfArray(t)&&isNumerable(s,e))return(t=t.slice(0))[0]+=e,t;if(isNumerable(i,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t+e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var r=0,n=t.length,a=e.length,o=[];r<n||r<a;)("number"==typeof t[r]||t[r]instanceof Number)&&("number"==typeof e[r]||e[r]instanceof Number)?o[r]=t[r]+e[r]:o[r]=void 0===e[r]?t[r]:t[r]||e[r],r+=1;return o}return 0}

function sub(t,e){var i=_typeof(t),s=_typeof(e);if(isNumerable(i,t)&&isNumerable(s,e))return"string"===i&&(t=parseInt(t,10)),"string"===s&&(e=parseInt(e,10)),t-e;if($bm_isInstanceOfArray(t)&&isNumerable(s,e))return(t=t.slice(0))[0]-=e,t;if(isNumerable(i,t)&&$bm_isInstanceOfArray(e))return(e=e.slice(0))[0]=t-e[0],e;if($bm_isInstanceOfArray(t)&&$bm_isInstanceOfArray(e)){for(var r=0,n=t.length,a=e.length,o=[];r<n||r<a;)("number"==typeof t[r]||t[r]instanceof Number)&&("number"==typeof e[r]||e[r]instanceof Number)?o[r]=t[r]-e[r]:o[r]=void 0===e[r]?t[r]:t[r]||e[r],r+=1;return o}return 0}

function mul(t,e){var i,s,r,n=_typeof(t),a=_typeof(e);if(isNumerable(n,t)&&isNumerable(a,e))return t*e;if($bm_isInstanceOfArray(t)&&isNumerable(a,e)){for(i=createTypedArray("float32",r=t.length),s=0;s<r;s+=1)i[s]=t[s]*e;return i}if(isNumerable(n,t)&&$bm_isInstanceOfArray(e)){for(i=createTypedArray("float32",r=e.length),s=0;s<r;s+=1)i[s]=t*e[s];return i}return 0}

function div(t,e){var i,s,r,n=_typeof(t),a=_typeof(e);if(isNumerable(n,t)&&isNumerable(a,e))return t/e;if($bm_isInstanceOfArray(t)&&isNumerable(a,e)){for(i=createTypedArray("float32",r=t.length),s=0;s<r;s+=1)i[s]=t[s]/e;return i}if(isNumerable(n,t)&&$bm_isInstanceOfArray(e)){for(i=createTypedArray("float32",r=e.length),s=0;s<r;s+=1)i[s]=t/e[s];return i}return 0}

function mod(t,e){return"string"==typeof t&&(t=parseInt(t,10)),"string"==typeof e&&(e=parseInt(e,10)),t%e}

function clamp(t,e,i){if(e>i){var s=i;i=e,e=s}return Math.min(Math.max(t,e),i)}

function radiansToDegrees(t){return t/degToRads}

function degreesToRadians(t){return t*degToRads}

function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var i,s=Math.min(t.length,e.length),r=0;for(i=0;i<s;i+=1)r+=Math.pow(e[i]-t[i],2);return Math.sqrt(r)}

function normalize(t){return div(t,length(t))}

function rgbToHsl(t){var e,i,s=t[0],r=t[1],n=t[2],a=Math.max(s,r,n),o=Math.min(s,r,n),l=(a+o)/2;if(a===o)e=0,i=0;else{var h=a-o;switch(i=l>.5?h/(2-a-o):h/(a+o),a){case s:e=(r-n)/h+(r<n?6:0);break;case r:e=(n-s)/h+2;break;case n:e=(s-r)/h+4}e/=6}return[e,i,l,t[3]]}

function hue2rgb(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*(e-t)*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}

function hslToRgb(t){var e,i,s,r=t[0],n=t[1],a=t[2];if(0===n)e=a,s=a,i=a;else{var o=a<.5?a*(1+n):a+n-a*n,l=2*a-o;e=hue2rgb(l,o,r+1/3),i=hue2rgb(l,o,r),s=hue2rgb(l,o,r-1/3)}return[e,i,s,t[3]]}

function linear(t,e,i,s,r){if(void 0!==s&&void 0!==r||(s=e,r=i,e=0,i=1),i<e){var n=i;i=e,e=n}if(t<=e)return s;if(t>=i)return r;var a,o=i===e?0:(t-e)/(i-e);if(!s.length)return s+(r-s)*o;var l=s.length,h=createTypedArray("float32",l);for(a=0;a<l;a+=1)h[a]=s[a]+(r[a]-s[a])*o;return h}

function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var i,s=e.length;t||(t=createTypedArray("float32",s));var r=createTypedArray("float32",s),n=BMMath.random();for(i=0;i<s;i+=1)r[i]=t[i]+n*(e[i]-t[i]);return r}return void 0===t&&(t=0),t+BMMath.random()*(e-t)}

function createPath(t,e,i,s){var r,n=t.length,a=shapePool.newElement();a.setPathData(!!s,n);var o,l,h=[0,0];for(r=0;r<n;r+=1)o=e&&e[r]?e[r]:h,l=i&&i[r]?i[r]:h,a.setTripleAt(t[r][0],t[r][1],l[0]+t[r][0],l[1]+t[r][1],o[0]+t[r][0],o[1]+t[r][1],r,!0);return a}

function noOp(t){return t}

function _expression_function(){"+val+";scoped_bm_rt=$bm_rt}

function loopInDuration(t,e){return loopIn(t,e,!0)}

function loopOutDuration(t,e){return loopOut(t,e,!0)}

function lookAt(t,e){var i=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],s=Math.atan2(i[0],Math.sqrt(i[1]*i[1]+i[2]*i[2]))/degToRads;return[-Math.atan2(i[1],i[2])/degToRads,s,0]}

function easeOut(t,e,i,s,r){return applyEase(easeOutBez,t,e,i,s,r)}

function easeIn(t,e,i,s,r){return applyEase(easeInBez,t,e,i,s,r)}

function ease(t,e,i,s,r){return applyEase(easeInOutBez,t,e,i,s,r)}

function applyEase(t,e,i,s,r,n){void 0===r?(r=i,n=s):e=(e-i)/(s-i),e>1?e=1:e<0&&(e=0);var a=t(e);if($bm_isInstanceOfArray(r)){var o,l=r.length,h=createTypedArray("float32",l);for(o=0;o<l;o+=1)h[o]=(n[o]-r[o])*a+r[o];return h}return(n-r)*a+r}

function nearestKey(t){var e,i,s,r=data.k.length;if(data.k.length&&"number"!=typeof data.k[0]){if(i=-1,(t*=elem.comp.globalData.frameRate)<data.k[0].t)i=1,s=data.k[0].t;else{for(e=0;e<r-1;e+=1){if(t===data.k[e].t){i=e+1,s=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(i=e+2,s=data.k[e+1].t):(i=e+1,s=data.k[e].t);break}}-1===i&&(i=e+1,s=data.k[e].t)}}else i=0,s=0;

var n={}

function key(t){if(!data.k.length||"number"==typeof data.k[0])throw Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate,value:[]};var e,i,s,r=Object.prototype.hasOwnProperty.call(data.k[t],"s")?data.k[t].s:data.k[t-1].e;for(s=r.length,i=0;i<s;i+=1)e[i]=r[i],e.value[i]=r[i];return e}

function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}

function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}

function seedRandom(t){BMMath.seedrandom(randSeed+t)}

function sourceRectAtTime(){return elem.sourceRectAtTime()}

function substring(t,e){return"string"==typeof value?void 0===e?value.substring(t):value.substring(t,e):""}

function substr(t,e){return"string"==typeof value?void 0===e?value.substr(t):value.substr(t,e):""}

function addPropertyDecorator(){

function t(t,e,i){if(!this.k||!this.keyframes)return this.pv;t=t?t.toLowerCase():"";var s,r,n,a,o,l=this.comp.renderedFrame,h=this.keyframes,d=h[h.length-1].t;if(l<=d)return this.pv;if(i?r=d-(s=e?Math.abs(d-this.elem.comp.globalData.frameRate*e):Math.max(0,d-this.elem.data.ip)):((!e||e>h.length-1)&&(e=h.length-1),s=d-(r=h[h.length-1-e].t)),"pingpong"===t){if(Math.floor((l-r)/s)%2!=0)return this.getValueAtTime((s-(l-r)%s+r)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var u=this.getValueAtTime(r/this.comp.globalData.frameRate,0),p=this.getValueAtTime(d/this.comp.globalData.frameRate,0),c=this.getValueAtTime(((l-r)%s+r)/this.comp.globalData.frameRate,0),f=Math.floor((l-r)/s);if(this.pv.length){for(a=(o=Array(u.length)).length,n=0;n<a;n+=1)o[n]=(p[n]-u[n])*f+c[n];return o}return(p-u)*f+c}if("continue"===t){var m=this.getValueAtTime(d/this.comp.globalData.frameRate,0),g=this.getValueAtTime((d-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(a=(o=Array(m.length)).length,n=0;n<a;n+=1)o[n]=m[n]+(m[n]-g[n])*((l-d)/this.comp.globalData.frameRate)/5e-4;return o}return m+(l-d)/.001*(m-g)}}return this.getValueAtTime(((l-r)%s+r)/this.comp.globalData.frameRate,0)}

function e(t,e,i){if(!this.k)return this.pv;t=t?t.toLowerCase():"";var s,r,n,a,o,l=this.comp.renderedFrame,h=this.keyframes,d=h[0].t;if(l>=d)return this.pv;if(i?r=d+(s=e?Math.abs(this.elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-d)):((!e||e>h.length-1)&&(e=h.length-1),s=(r=h[e].t)-d),"pingpong"===t){if(Math.floor((d-l)/s)%2==0)return this.getValueAtTime(((d-l)%s+d)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var u=this.getValueAtTime(d/this.comp.globalData.frameRate,0),p=this.getValueAtTime(r/this.comp.globalData.frameRate,0),c=this.getValueAtTime((s-(d-l)%s+d)/this.comp.globalData.frameRate,0),f=Math.floor((d-l)/s)+1;if(this.pv.length){for(a=(o=Array(u.length)).length,n=0;n<a;n+=1)o[n]=c[n]-(p[n]-u[n])*f;return o}return c-(p-u)*f}if("continue"===t){var m=this.getValueAtTime(d/this.comp.globalData.frameRate,0),g=this.getValueAtTime((d+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(a=(o=Array(m.length)).length,n=0;n<a;n+=1)o[n]=m[n]+(m[n]-g[n])*(d-l)/.001;return o}return m+(m-g)*(d-l)/.001}}return this.getValueAtTime((s-((d-l)%s+d))/this.comp.globalData.frameRate,0)}

function i(t,e){if(!this.k||(t=.5*(t||.4),(e=Math.floor(e||5))<=1))return this.pv;var i,s,r=this.comp.renderedFrame/this.comp.globalData.frameRate,n=r-t,a=e>1?(r+t-n)/(e-1):1,o=0,l=0;for(i=this.pv.length?createTypedArray("float32",this.pv.length):0;o<e;){if(s=this.getValueAtTime(n+o*a),this.pv.length)for(l=0;l<this.pv.length;l+=1)i[l]+=s[l];else i+=s;o+=1}if(this.pv.length)for(l=0;l<this.pv.length;l+=1)i[l]/=e;else i/=e;return i}

function r(){return this.v.clone(new Matrix)}

function h(){}

function addDecorator(){TextProperty.prototype.getExpressionValue=function(t,e){var i=this.calculateExpression(e);if(t.t!==i){

var s={}

function SVGComposableEffect(){}

function SVGStrokeEffect(t,e,i){this.initialized=!1,this.filterManager=e,this.elem=i,this.paths=[]}

var t=function(e,i){"use strict";var s=Object.create(t.prototype),r=0,n=0,a=0,o=0,l=[],h=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},u=null,p=!1;try{var c=Object.defineProperty({},"passive",{get:function(){p=!0}});window.

var a={}

function m(t,e){return p.call(t,e)}

function g(t,e){var i,s,r,n,a,o,l,h,u,p,c,m=e&&e.split("/"),g=d.map,$=g&&g["*"]||{};if(t){for(a=(t=t.split("/")).length-1,d.nodeIdCompat&&f.test(t[a])&&(t[a]=t[a].replace(f,"")),"."===t[0].charAt(0)&&m&&(t=m.slice(0,m.length-1).concat(t)),u=0;u<t.length;u++)if("."===(c=t[u]))t.splice(u,1),u-=1;else if(".."===c){if(0===u||1===u&&".."===t[2]||".."===t[u-1])continue;u>0&&(t.splice(u-1,2),u-=2)}t=t.join("/")}if((m||$)&&g){for(u=(i=t.split("/")).length;u>0;u-=1){if(s=i.slice(0,u).join("/"),m){for(p=m.length;p>0;p-=1)if((r=g[m.slice(0,p).join("/")])&&(r=r[s])){n=r,o=u;break}}if(n)break;!l&&$&&$[s]&&(l=$[s],h=u)}!n&&l&&(n=l,o=h),n&&(i.splice(0,o,n),t=i.join("/"))}return t}

function $(e,i){return function(){var s=c.call(arguments,0);return"string"!=typeof s[0]&&1===s.length&&s.push(null),n.apply(t,s.concat([e,i]))}}

function v(t){return function(e){l[t]=e}}

function _(e){if(m(h,e)){var i=h[e];delete h[e],u[e]=!0,r.apply(t,i)}if(!m(l,e)&&!m(u,e))throw Error("No "+e);return l[e]}

function y(t){var e,i=t?t.indexOf("!"):-1;return i>-1&&(e=t.substring(0,i),t=t.substring(i+1,t.length)),[e,t]}

function x(t){return t?y(t):[]}

function b(t){return function(){return d&&d.config&&d.config[t]||{}}}

var e={}

function i(t){var e=t.prototype,i=[];for(var s in e)"function"==typeof e[s]&&"constructor"!==s&&i.push(s);return i}

var i={}

function s(){this.constructor=t}

function n(){var i=Array.prototype.unshift,s=e.prototype.constructor.length,r=t.prototype.constructor;s>0&&(i.call(arguments,t.prototype.constructor),r=e.prototype.constructor),r.apply(this,arguments)}

var l=function(t){

var i=function(){}

var s=function(){this.listeners={}}

function i(t,e,s){this.$element=t,this.data=s,this.options=e,i.__super__.constructor.call(this)}

var r={role:"option"}

function s(t,e){this.$element=t,this.options=e,s.__super__.constructor.call(this)}

function r(){r.__super__.constructor.apply(this,arguments)}

function s(t,e){s.__super__.constructor.apply(this,arguments)}

function s(){}

var a={data:r}

function s(t,e,i){t.call(this,e,i)}

function e(){}

function e(){}

function i(t){this.dict=t||{}}

function e(t,i){e.__super__.constructor.call(this)}

function s(t,e){this.$element=t,this.options=e,s.__super__.constructor.call(this)}

var s={}

function a(t){return function(){return i(this).val()==t.id}}

function i(t,e){this.$element=t,this.options=e,i.__super__.constructor.call(this)}

function e(){}

function e(t,e,i,s){this.lastParams={},t.call(this,e,i,s),this.$loadingMore=this.createLoadingMore(),this.loading=!1}

var a={height:this.$container.outerHeight(!1)}

var f={top:0,left:0}

var t={width:this.$container.outerWidth(!1)+"px"}

function t(e){for(var i=0,s=0;s<e.length;s++){var r=e[s];r.children?i+=t(r.children):i++}return i}

function e(){}

function t(){}

function e(){}

function e(){}

function D(){this.reset()}

function e(t){return t.replace(/[^\u0000-\u007E]/g,function(t){return u[t]||t})}

function i(s,r){if(null==s.term||""===s.term.trim())return r;if(r.children&&r.children.length>0){for(var n=t.extend(!0,{},r),a=r.children.length-1;a>=0;a--)null==i(s,r.children[a])&&n.children.splice(a,1);return n.children.length>0?n:i(s,n)}var o=e(r.text).toUpperCase(),l=e(s.term).toUpperCase();return o.indexOf(l)>-1?r:null}

var s={}

function s(t,i){this.options=t,null!=i&&this.fromElement(i),null!=i&&(this.options=e.applyFromElement(this.options,i)),this.options=e.apply(this.options)}

var r={}

function n(t,e){return e.toUpperCase()}

function e(){}

function r(){s.off(t,r),e.apply(i,arguments)}

function e(e){return"__private_"+t+++"_"+e}

function s(){}

function r(){s.off(t,r),e.apply(i,arguments)}

function r(t){return i(n(t))}

function n(t){if(!i.o(s,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}

function r(){if(!(s>100)){if(100===s)console.warn("Curtains: too many warnings thrown, stop logging.");else{let t=Array.prototype.slice.call(arguments);console.warn.apply(console,t)}s++}}

function n(){let t=Array.prototype.slice.call(arguments);console.error.apply(console,t)}

function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16).toUpperCase()})}

function o(t){return 0==(t&t-1)}

class d{constructor(){this.clear()}clear(){this.queue=[]}add(t,e=!1){

let i={callback:t,keep:e,timeout:null}

class w{constructor(t,{program:e=null,width:i=1,height:s=1}={}){this.type="Geometry",t&&"Renderer"===t.type?t.gl||n(this.type+": Renderer WebGL context is undefined",t):n(this.type+": Renderer not passed as first argument",t),this.renderer=t,this.gl=this.renderer.gl,this.definition={id:i*s+i,width:i,height:s},this.setDefaultAttributes(),this.setVerticesUVs()}restoreContext(t){this.program=null,this.setDefaultAttributes(),this.setVerticesUVs(),this.setProgram(t)}setDefaultAttributes(){this.attributes={vertexPosition:{name:"aVertexPosition",size:3},textureCoord:{name:"aTextureCoord",size:3}}}setVerticesUVs(){let t=this.renderer.cache.getGeometryFromID(this.definition.id);t?(this.attributes.vertexPosition.array=t.vertices,this.attributes.textureCoord.array=t.uvs):(this.computeVerticesUVs(),this.renderer.cache.addGeometry(this.definition.id,this.attributes.vertexPosition.array,this.attributes.textureCoord.array))}setProgram(t){this.program=t.program,this.initAttributes(),this.renderer._isWebGL2?(this._vao=this.gl.createVertexArray(),this.gl.bindVertexArray(this._vao)):this.renderer.extensions.OES_vertex_array_object&&(this._vao=this.renderer.extensions.OES_vertex_array_object.createVertexArrayOES(),this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao)),this.initializeBuffers()}initAttributes(){for(let t in this.attributes)this.attributes[t].location=this.gl.getAttribLocation(this.program,this.attributes[t].name),this.attributes[t].buffer=this.gl.createBuffer(),this.attributes[t].numberOfItems=this.definition.width*this.definition.height*this.attributes[t].size*2}computeVerticesUVs(){this.attributes.vertexPosition.array=[],this.attributes.textureCoord.array=[];let t=this.attributes.vertexPosition.array,e=this.attributes.textureCoord.array;for(let i=0;i<this.definition.height;i++){let s=i/this.definition.height;for(let r=0;r<this.definition.width;r++){let n=r/this.definition.width;e.push(n),e.push(s),e.push(0),t.push(2*(n-.5)),t.push(2*(s-.5)),t.push(0),e.push(n+1/this.definition.width),e.push(s),e.push(0),t.push(2*(n+1/this.definition.width-.5)),t.push(2*(s-.5)),t.push(0),e.push(n),e.push(s+1/this.definition.height),e.push(0),t.push(2*(n-.5)),t.push(2*(s+1/this.definition.height-.5)),t.push(0),e.push(n),e.push(s+1/this.definition.height),e.push(0),t.push(2*(n-.5)),t.push(2*(s+1/this.definition.height-.5)),t.push(0),e.push(n+1/this.definition.width),e.push(s),e.push(0),t.push(2*(n+1/this.definition.width-.5)),t.push(2*(s-.5)),t.push(0),e.push(n+1/this.definition.width),e.push(s+1/this.definition.height),e.push(0),t.push(2*(n+1/this.definition.width-.5)),t.push(2*(s+1/this.definition.height-.5)),t.push(0)}}}initializeBuffers(){if(this.attributes){for(let t in this.attributes)this.gl.enableVertexAttribArray(this.attributes[t].location),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.attributes[t].buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(this.attributes[t].array),this.gl.STATIC_DRAW),this.gl.vertexAttribPointer(this.attributes[t].location,this.attributes[t].size,this.gl.FLOAT,!1,0,0);this.renderer.state.currentGeometryID=this.definition.id}}bindBuffers(){if(this._vao)this.renderer._isWebGL2?this.gl.bindVertexArray(this._vao):this.renderer.extensions.OES_vertex_array_object.bindVertexArrayOES(this._vao);else for(let t in this.attributes)this.gl.enableVertexAttribArray(this.attributes[t].location),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.attributes[t].buffer),this.gl.vertexAttribPointer(this.attributes[t].location,this.attributes[t].size,this.gl.FLOAT,!1,0,0);this.renderer.state.currentGeometryID=this.definition.id}draw(){this.gl.drawArrays(this.gl.TRIANGLES,0,this.attributes.vertexPosition.numberOfItems)}dispose(){for(let t in this._vao&&(this.renderer._isWebGL2?this.gl.deleteVertexArray(this._vao):this.renderer.extensions.OES_vertex_array_object.deleteVertexArrayOES(this._vao)),this.attributes)this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.attributes[t].buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,1,this.gl.STATIC_DRAW),this.gl.deleteBuffer(this.attributes[t].buffer);this.attributes=null,this.renderer.state.currentGeometryID=null}}

class T{constructor(t=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])){this.type="Mat4",this.elements=t}setFromArray(t){for(let e=0;e<this.elements.length;e++)this.elements[e]=t[e];return this}copy(t){let e=t.elements;return this.elements[0]=e[0],this.elements[1]=e[1],this.elements[2]=e[2],this.elements[3]=e[3],this.elements[4]=e[4],this.elements[5]=e[5],this.elements[6]=e[6],this.elements[7]=e[7],this.elements[8]=e[8],this.elements[9]=e[9],this.elements[10]=e[10],this.elements[11]=e[11],this.elements[12]=e[12],this.elements[13]=e[13],this.elements[14]=e[14],this.elements[15]=e[15],this}clone(){return(new T).copy(this)}multiply(t){let e=this.elements,i=t.elements,s=new T;return s.elements[0]=i[0]*e[0]+i[1]*e[4]+i[2]*e[8]+i[3]*e[12],s.elements[1]=i[0]*e[1]+i[1]*e[5]+i[2]*e[9]+i[3]*e[13],s.elements[2]=i[0]*e[2]+i[1]*e[6]+i[2]*e[10]+i[3]*e[14],s.elements[3]=i[0]*e[3]+i[1]*e[7]+i[2]*e[11]+i[3]*e[15],s.elements[4]=i[4]*e[0]+i[5]*e[4]+i[6]*e[8]+i[7]*e[12],s.elements[5]=i[4]*e[1]+i[5]*e[5]+i[6]*e[9]+i[7]*e[13],s.elements[6]=i[4]*e[2]+i[5]*e[6]+i[6]*e[10]+i[7]*e[14],s.elements[7]=i[4]*e[3]+i[5]*e[7]+i[6]*e[11]+i[7]*e[15],s.elements[8]=i[8]*e[0]+i[9]*e[4]+i[10]*e[8]+i[11]*e[12],s.elements[9]=i[8]*e[1]+i[9]*e[5]+i[10]*e[9]+i[11]*e[13],s.elements[10]=i[8]*e[2]+i[9]*e[6]+i[10]*e[10]+i[11]*e[14],s.elements[11]=i[8]*e[3]+i[9]*e[7]+i[10]*e[11]+i[11]*e[15],s.elements[12]=i[12]*e[0]+i[13]*e[4]+i[14]*e[8]+i[15]*e[12],s.elements[13]=i[12]*e[1]+i[13]*e[5]+i[14]*e[9]+i[15]*e[13],s.elements[14]=i[12]*e[2]+i[13]*e[6]+i[14]*e[10]+i[15]*e[14],s.elements[15]=i[12]*e[3]+i[13]*e[7]+i[14]*e[11]+i[15]*e[15],s}getInverse(){let t=this.elements,e=new T,i=e.elements,s=t[0],r=t[1],n=t[2],a=t[3],o=t[4],l=t[5],h=t[6],d=t[7],u=t[8],p=t[9],c=t[10],f=t[11],m=t[12],g=t[13],$=t[14],v=t[15],_=s*l-r*o,y=s*h-n*o,x=s*d-a*o,b=r*h-n*l,w=r*d-a*l,C=n*d-a*h,S=u*g-p*m,E=u*$-c*m,P=u*v-f*m,k=p*$-c*g,A=p*v-f*g,D=c*v-f*$,M=_*D-y*A+x*k+b*P-w*E+C*S;return M?(M=1/M,i[0]=(l*D-h*A+d*k)*M,i[1]=(n*A-r*D-a*k)*M,i[2]=(g*C-$*w+v*b)*M,i[3]=(c*w-p*C-f*b)*M,i[4]=(h*P-o*D-d*E)*M,i[5]=(s*D-n*P+a*E)*M,i[6]=($*x-m*C-v*y)*M,i[7]=(u*C-c*x+f*y)*M,i[8]=(o*A-l*P+d*S)*M,i[9]=(r*P-s*A-a*S)*M,i[10]=(m*w-g*x+v*_)*M,i[11]=(p*x-u*w-f*_)*M,i[12]=(l*E-o*k-h*S)*M,i[13]=(s*k-r*E+n*S)*M,i[14]=(g*y-m*b-$*_)*M,i[15]=(u*b-p*y+c*_)*M,e):null}scale(t){let e=this.elements,i=new T;return i.elements[0]=t.x*e[0],i.elements[1]=t.x*e[1],i.elements[2]=t.x*e[2],i.elements[3]=t.x*e[3],i.elements[4]=t.y*e[4],i.elements[5]=t.y*e[5],i.elements[6]=t.y*e[6],i.elements[7]=t.y*e[7],i.elements[8]=t.z*e[8],i.elements[9]=t.z*e[9],i.elements[10]=t.z*e[10],i.elements[11]=t.z*e[11],e!==i.elements&&(i.elements[12]=e[12],i.elements[13]=e[13],i.elements[14]=e[14],i.elements[15]=e[15]),i}composeFromOrigin(t,e,i,s){let r=this.elements,n=e.elements[0],a=e.elements[1],o=e.elements[2],l=e.elements[3],h=n+n,d=a+a,u=o+o,p=n*h,c=n*d,f=n*u,m=a*d,g=a*u,$=o*u,v=l*h,_=l*d,y=l*u,x=i.x,b=i.y,w=i.z,T=s.x,C=s.y,S=s.z,E=(1-(m+$))*x,P=(c+y)*x,k=(f-_)*x,A=(c-y)*b,D=(1-(p+$))*b,M=(g+v)*b,I=(f+_)*w,L=(g-v)*w,R=(1-(p+m))*w;return r[0]=E,r[1]=P,r[2]=k,r[3]=0,r[4]=A,r[5]=D,r[6]=M,r[7]=0,r[8]=I,r[9]=L,r[10]=R,r[11]=0,r[12]=t.x+T-(E*T+A*C+I*S),r[13]=t.y+C-(P*T+D*C+L*S),r[14]=t.z+S-(k*T+M*C+R*S),r[15]=1,this}}

class C{constructor(t=0,e=0){this.type="Vec2",this.set(t,e)}set(t,e){return this.x=t,this.y=e,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}copy(t){return this.x=t.x,this.y=t.y,this}clone(){return new C(this.x,this.y)}sanitizeNaNValuesWith(t){return this.x=isNaN(this.x)?t.x:parseFloat(this.x),this.y=isNaN(this.y)?t.y:parseFloat(this.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}equals(t){return this.x===t.x&&this.y===t.y}normalize(){let t=this.x*this.x+this.y*this.y;return t>0&&(t=1/Math.sqrt(t)),this.x*=t,this.y*=t,this}dot(t){return this.x*t.x+this.y*t.y}}

class S{constructor(t=0,e=0,i=0){this.type="Vec3",this.set(t,e,i)}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}clone(){return new S(this.x,this.y,this.z)}sanitizeNaNValuesWith(t){return this.x=isNaN(this.x)?t.x:parseFloat(this.x),this.y=isNaN(this.y)?t.y:parseFloat(this.y),this.z=isNaN(this.z)?t.z:parseFloat(this.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}equals(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}normalize(){let t=this.x*this.x+this.y*this.y+this.z*this.z;return t>0&&(t=1/Math.sqrt(t)),this.x*=t,this.y*=t,this.z*=t,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}applyMat4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,n=r[3]*e+r[7]*i+r[11]*s+r[15];return n=n||1,this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])/n,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])/n,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])/n,this}applyQuat(t){let e=this.x,i=this.y,s=this.z,r=t.elements[0],n=t.elements[1],a=t.elements[2],o=t.elements[3],l=o*e+n*s-a*i,h=o*i+a*e-r*s,d=o*s+r*i-n*e,u=-r*e-n*i-a*s;return this.x=l*o+-(u*r)+-(h*a)- -(d*n),this.y=h*o+-(u*n)+-(d*r)- -(l*a),this.z=d*o+-(u*a)+-(l*n)- -(h*r),this}project(t){return this.applyMat4(t.viewMatrix).applyMat4(t.projectionMatrix),this}unproject(t){return this.applyMat4(t.projectionMatrix.getInverse()).applyMat4(t.worldMatrix),this}}

class P{constructor(t,e="anonymous"){this.type="TextureLoader",(t=t&&t.renderer||t)&&"Renderer"===t.type?t.gl||n(this.type+": Renderer WebGL context is undefined",t):n(this.type+": Renderer not passed as first argument",t),this.renderer=t,this.gl=this.renderer.gl,this.crossOrigin=e,this.elements=[]}_addElement(t,e,i,s){

let r={source:t,texture:e,load:this._sourceLoaded.bind(this,t,e,i),error:this._sourceLoadError.bind(this,t,s)}

class k extends P{constructor(t,e,{sourcesLoaded:i=0,sourcesToLoad:s=0,complete:n=!1,onComplete:a=()=>{}}={}){super(t,e.crossOrigin),this.type="PlaneTextureLoader",this._parent=e,"Plane"!==this._parent.type&&"PingPongPlane"!==this._parent.type&&"ShaderPass"!==this._parent.type&&(r(this.type+": Wrong parent type assigned to this loader"),this._parent=null),this.sourcesLoaded=i,this.sourcesToLoad=s,this.complete=n,this.onComplete=a}_setLoaderSize(t){this.sourcesToLoad=t,0===this.sourcesToLoad&&(this.complete=!0,this.renderer.nextRender.add(()=>this.onComplete&&this.onComplete()))}_increment(){this.sourcesLoaded++,this.sourcesLoaded>=this.sourcesToLoad&&!this.complete&&(this.complete=!0,this.renderer.nextRender.add(()=>this.onComplete&&this.onComplete()))}_addSourceToParent(t,e){if("image"===e){let i=this._parent.images;i.find(e=>e.src===t.src)||i.push(t)}else if("video"===e){let s=this._parent.videos;s.find(e=>e.src===t.src)||s.push(t)}else if("canvas"===e){let r=this._parent.canvases;r.find(e=>e.isSameNode(t))||r.push(t)}}_addToParent(t,e,i){this._addSourceToParent(e,i),this._parent&&t.addParent(this._parent)}}

class M{constructor({fov:t=50,near:e=.1,far:i=150,width:s,height:r,pixelRatio:n=1}={}){this.position=new S,this.projectionMatrix=new T,this.worldMatrix=new T,this.viewMatrix=new T,this._shouldUpdate=!1,this.setSize(),this.setPerspective(t,e,i,s,r,n)}setFov(t){(t=Math.max(1,Math.min(t=isNaN(t)?this.fov:parseFloat(t),179)))!==this.fov&&(this.fov=t,this.setPosition(),this.setCSSPerspective(),this._shouldUpdate=!0)}setNear(t){(t=Math.max(t=isNaN(t)?this.near:parseFloat(t),.01))!==this.near&&(this.near=t,this._shouldUpdate=!0)}setFar(t){(t=Math.max(t=isNaN(t)?this.far:parseFloat(t),50))!==this.far&&(this.far=t,this._shouldUpdate=!0)}setPixelRatio(t){t!==this.pixelRatio&&(this._shouldUpdate=!0),this.pixelRatio=t}setSize(t,e){t===this.width&&e===this.height||(this._shouldUpdate=!0),this.width=t,this.height=e}setPerspective(t,e,i,s,r,n){this.setPixelRatio(n),this.setSize(s,r),this.setFov(t),this.setNear(e),this.setFar(i),this._shouldUpdate&&this.updateProjectionMatrix()}setPosition(){this.position.set(0,0,2*Math.tan(Math.PI/180*.5*this.fov)),this.worldMatrix.setFromArray([1,0,0,0,0,1,0,0,0,0,1,0,this.position.x,this.position.y,this.position.z,1]),this.viewMatrix=this.viewMatrix.copy(this.worldMatrix).getInverse()}setCSSPerspective(){this.CSSPerspective=Math.pow(Math.pow(this.width/(2*this.pixelRatio),2)+Math.pow(this.height/(2*this.pixelRatio),2),.5)/(.5*this.position.z)}updateProjectionMatrix(){let t=this.width/this.height,e=this.near*Math.tan(Math.PI/180*.5*this.fov),i=2*e,s=t*i,r=-.5*s,n=r+s,a=e-i,o=2*this.near/(n-r),l=2*this.near/(e-a),h=(n+r)/(n-r),d=(e+a)/(e-a),u=-(this.far+this.near)/(this.far-this.near),p=-2*this.far*this.near/(this.far-this.near);this.projectionMatrix.setFromArray([o,0,0,0,0,l,0,0,h,d,u,-1,0,0,p,0])}forceUpdate(){this._shouldUpdate=!0}cancelUpdate(){this._shouldUpdate=!1}}

class I{constructor(t=new Float32Array([0,0,0,1]),e="XYZ"){this.type="Quat",this.elements=t,this.axisOrder=e}setFromArray(t){return this.elements[0]=t[0],this.elements[1]=t[1],this.elements[2]=t[2],this.elements[3]=t[3],this}setAxisOrder(t){switch(t=t.toUpperCase()){case"XYZ":case"YXZ":case"ZXY":case"ZYX":case"YZX":case"XZY":this.axisOrder=t;break;default:this.axisOrder="XYZ"}return this}copy(t){return this.elements=t.elements,this.axisOrder=t.axisOrder,this}clone(){return(new I).copy(this)}equals(t){return this.elements[0]===t.elements[0]&&this.elements[1]===t.elements[1]&&this.elements[2]===t.elements[2]&&this.elements[3]===t.elements[3]&&this.axisOrder===t.axisOrder}setFromVec3(t){let e=.5*t.x,i=.5*t.y,s=.5*t.z,r=Math.cos(e),n=Math.cos(i),a=Math.cos(s),o=Math.sin(e),l=Math.sin(i),h=Math.sin(s);return"XYZ"===this.axisOrder?(this.elements[0]=o*n*a+r*l*h,this.elements[1]=r*l*a-o*n*h,this.elements[2]=r*n*h+o*l*a,this.elements[3]=r*n*a-o*l*h):"YXZ"===this.axisOrder?(this.elements[0]=o*n*a+r*l*h,this.elements[1]=r*l*a-o*n*h,this.elements[2]=r*n*h-o*l*a,this.elements[3]=r*n*a+o*l*h):"ZXY"===this.axisOrder?(this.elements[0]=o*n*a-r*l*h,this.elements[1]=r*l*a+o*n*h,this.elements[2]=r*n*h+o*l*a,this.elements[3]=r*n*a-o*l*h):"ZYX"===this.axisOrder?(this.elements[0]=o*n*a-r*l*h,this.elements[1]=r*l*a+o*n*h,this.elements[2]=r*n*h-o*l*a,this.elements[3]=r*n*a+o*l*h):"YZX"===this.axisOrder?(this.elements[0]=o*n*a+r*l*h,this.elements[1]=r*l*a+o*n*h,this.elements[2]=r*n*h-o*l*a,this.elements[3]=r*n*a-o*l*h):"XZY"===this.axisOrder&&(this.elements[0]=o*n*a-r*l*h,this.elements[1]=r*l*a-o*n*h,this.elements[2]=r*n*h+o*l*a,this.elements[3]=r*n*a+o*l*h),this}}

function s(t){return null!==t&&"object"==typeof t&&"constructor"in t&&t.constructor===Object}

function r(t={}

function a(){let t="undefined"!=typeof document?document:{};return r(t,n),t}

function l(){let t="undefined"!=typeof window?window:{};return r(t,o),t}

class h extends Array{constructor(t){"number"==typeof t?super(t):(super(...t||[]),function(t){let e=t.__proto__;Object.defineProperty(t,"__proto__",{get:()=>e,set(t){e.__proto__=t}})}(this))}}

function d(t=[]){let e=[];return t.forEach(t=>{Array.isArray(t)?e.push(...d(t)):e.push(t)}),e}

function u(t,e){return Array.prototype.filter.call(t,e)}

function f(t){return function(...e){if(void 0===e[0]){for(let i=0;i<this.length;i+=1)0>c.indexOf(t)&&(t in this[i]?this[i][t]():p(this[i]).trigger(t));return this}return this.on(t,...e)}}

function n(t){let e=t.target;if(!e)return;let r=t.target.dom7EventData||[];if(0>r.indexOf(t)&&r.unshift(t),p(e).is(i))s.apply(e,r);else{let n=p(e).parents();for(let a=0;a<n.length;a+=1)p(n[a]).is(i)&&s.apply(n[a],r)}}

function a(t){let e=t&&t.target&&t.target.dom7EventData||[];0>e.indexOf(t)&&e.unshift(t),s.apply(this,e)}

function $(t,e=0){return setTimeout(t,e)}

function v(){return Date.now()}

function y(t){return"object"==typeof t&&null!==t&&t.constructor&&"Object"===Object.prototype.toString.call(t).slice(8,-1)}

function b(t,e,i){t.style.setProperty(e,i)}

var P={on(t,e,i){let s=this;if(!s.eventsListeners||s.destroyed||"function"!=typeof e)return s;let r=i?"unshift":"push";return t.split(" ").forEach(t=>{s.eventsListeners[t]||(s.eventsListeners[t]=[]),s.eventsListeners[t][r](e)}),s},once(t,e,i){let s=this;if(!s.eventsListeners||s.destroyed||"function"!=typeof e)return s;

function r(...i){s.off(t,r),r.__emitterProxy&&delete r.__emitterProxy,e.apply(s,i)}

function e(e){return t.isHorizontal()?e:({width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"})[e]}

function i(t,i){return parseFloat(t.getPropertyValue(e(i))||0)}

function d(t){return t<0?-Math.floor(Math.abs(t)):Math.floor(t)}

function e(i){if(!i||i===a()||i===l())return null;i.assignedSlot&&(i=i.assignedSlot);let s=i.closest(t);return s||i.getRootNode?s||e(i.getRootNode().host):null}

function O(t){let e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}

function B(){}

var V={attachEvents:function(){let t=this,e=a(),{params:i,support:s}=t;t.onTouchStart=M.bind(t),t.onTouchMove=I.bind(t),t.onTouchEnd=L.bind(t),i.cssMode&&(t.onScroll=F.bind(t)),t.onClick=O.bind(t),s.touch&&!z&&(e.

function h(){n&&n()}

function e(){null!=t&&t&&!t.destroyed&&(void 0!==t.imagesLoaded&&(t.imagesLoaded+=1),t.imagesLoaded===t.imagesToLoad.length&&(t.params.updateOnImagesReady&&t.update(),t.emit("imagesReady")))}

let n={}

function s(){let e=t.rtlTranslate?-1*t.translate:t.translate,i=Math.min(Math.max(e,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}

let e=function(){s("observerUpdate",t[0])}

function Z(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}

function Q(t){let e=this,{$wrapperEl:i,params:s}=e;if(s.loop&&e.loopDestroy(),"object"==typeof t&&"length"in t)for(let r=0;r<t.length;r+=1)t[r]&&i.append(t[r]);else i.append(t);s.loop&&e.loopCreate(),s.observer||e.update()}

function x(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load(),s("virtualUpdate")}

function h(){t.keyboard.enabled||(g(r).on("keydown",o),t.keyboard.enabled=!0)}

function d(){t.keyboard.enabled&&(g(r).off("keydown",o),t.keyboard.enabled=!1)}

function d(){t.enabled&&(t.mouseEntered=!0)}

function u(){t.enabled&&(t.mouseEntered=!1)}

function c(e){var i;let r=e,o=!0;if(!t.enabled)return;let l=t.params.mousewheel;t.params.cssMode&&r.preventDefault();let d=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(d=g(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!d[0].contains(r.target)&&!l.releaseOnEdges)return!0;r.originalEvent&&(r=r.originalEvent);let u=0,c,f,m,_,y=t.rtlTranslate?-1:1,x=(i=r,c=0,f=0,m=0,_=0,"detail"in i&&(f=i.detail),"wheelDelta"in i&&(f=-i.wheelDelta/120),"wheelDeltaY"in i&&(f=-i.wheelDeltaY/120),"wheelDeltaX"in i&&(c=-i.wheelDeltaX/120),"axis"in i&&i.axis===i.HORIZONTAL_AXIS&&(c=f,f=0),m=10*c,_=10*f,"deltaY"in i&&(_=i.deltaY),"deltaX"in i&&(m=i.deltaX),i.shiftKey&&!m&&(m=_,_=0),(m||_)&&i.deltaMode&&(1===i.deltaMode?(m*=40,_*=40):(m*=800,_*=800)),m&&!c&&(c=m<1?-1:1),_&&!f&&(f=_<1?-1:1),{spinX:c,spinY:f,pixelX:m,pixelY:_});if(l.forceToAxis){if(t.isHorizontal()){if(!(Math.abs(x.pixelX)>Math.abs(x.pixelY)))return!0;u=-x.pixelX*y}else{if(!(Math.abs(x.pixelY)>Math.abs(x.pixelX)))return!0;u=-x.pixelY}}else u=Math.abs(x.pixelX)>Math.abs(x.pixelY)?-x.pixelX*y:-x.pixelY;if(0===u)return!0;l.invert&&(u=-u);let b=t.getTranslate()+u*l.sensitivity;if(b>=t.minTranslate()&&(b=t.minTranslate()),b<=t.maxTranslate()&&(b=t.maxTranslate()),(o=!!t.params.loop||!(b===t.minTranslate()||b===t.maxTranslate()))&&t.params.nested&&r.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){

let w={time:v(),delta:Math.abs(u),direction:Math.sign(u)}

let D={time:v(),delta:Math.abs(u),direction:Math.sign(u),raw:e}

function f(e){let i=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(i=g(t.params.mousewheel.eventsTarget)),i[e]("mouseenter",d),i[e]("mouseleave",u),i[e]("wheel",c)}

function _(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,c),!0):!!t.mousewheel.enabled&&(f("off"),t.mousewheel.enabled=!1,!0)}

function r(e){let i;return e&&(i=g(e),t.params.uniqueNavElements&&"string"==typeof e&&i.length>1&&1===t.$el.find(e).length&&(i=t.$el.find(e))),i}

function m(t){if(t.targetTouches.length<2)return 1;let e=t.targetTouches[0].pageX,i=t.targetTouches[0].pageY,s=t.targetTouches[1].pageX,r=t.targetTouches[1].pageY;return Math.sqrt((s-e)**2+(r-i)**2)}

function S(){let e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}

function P(e){let{passiveListener:i}=S(),s=E();t.$wrapperEl[e]("gesturestart",s,$,i),t.$wrapperEl[e]("gesturechange",s,v,i),t.$wrapperEl[e]("gestureend",s,y,i)}

function k(){n||(n=!0,P("on"))}

function A(){n&&(n=!1,P("off"))}

function s(t,e){let i,s,r,n=(t,e)=>{for(s=-1,i=t.length;i-s>1;)t[r=i+s>>1]<=e?s=r:i=r;return i},a,o;return this.x=t,this.y=e,this.lastIndex=t.length-1,this.interpolate=function(t){return t?(a=(o=n(this.x,t))-1,(t-this.x[a])*(this.y[o]-this.y[a])/(this.x[o]-this.x[a])+this.y[a]):0},this}

function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}

function r(t){let e=s;0!==e.length&&(e.html(""),e.html(t))}

function n(t){t.attr("tabIndex","0")}

function a(t){t.attr("tabIndex","-1")}

function o(t,e){t.attr("role",e)}

function l(t,e){t.attr("aria-roledescription",e)}

function h(t,e){t.attr("aria-label",e)}

function d(t){t.attr("aria-disabled",!0)}

function u(t){t.attr("aria-disabled",!1)}

function o(){return void 0===r&&!t.autoplay.running&&(t.autoplay.running=!0,s("autoplayStart"),n(),!0)}

function l(){return!!t.autoplay.running&&void 0!==r&&(r&&(clearTimeout(r),r=void 0),t.autoplay.running=!1,s("autoplayStop"),!0)}

function d(){let e=a();"hidden"===e.visibilityState&&t.autoplay.running&&h(),"visible"===e.visibilityState&&t.autoplay.paused&&(n(),t.autoplay.paused=!1)}

function c(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,s("autoplayResume"),n())}

let v={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1}

function __webpack_require__(t){var e=__webpack_module_cache__[t];if(void 0!==e)return e.exports;var i=__webpack_module_cache__[t]={exports:{}};return __webpack_modules__[t].call(i.exports,i,i.exports,__webpack_require__),i.exports}

