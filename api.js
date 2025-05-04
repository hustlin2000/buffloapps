// --------------------------------------------------------------------------------
// API SECTION
// --------------------------------------------------------------------------------

function tc(t,e){for(var i,s,r=[],n=0,a=t.length;n<a;n++)(s=t[n]).style&&(i=s.style.display,e?("none"===i&&(r[n]=Q.get(s,"display")||null,r[n]||(s.style.display="")),""===s.style.display&&th(s)&&(r[n]=tp(s))):"none"!==i&&(r[n]="none",Q.set(s,"display",i)));for(n=0;n<a;n++)null!=r[n]&&(t[n].style.display=r[n]);return t}

function tx(t,e){for(var i=0,s=t.length;i<s;i++)Q.set(t[i],"globalEval",!e||Q.get(e[i],"globalEval"))}

function tP(t,e,i){i?(Q.set(t,e,!1),T.event.add(t,e,{namespace:!1,handler:function(t){var s,r,n=Q.get(this,e);if(1&t.isTrigger&&this[e]){if(n.length)(T.event.special[e]||{}).delegateType&&t.stopPropagation();else if(n=o.call(arguments),Q.set(this,e,n),s=i(this,e),this[e](),n!==(r=Q.get(this,e))||s?Q.set(this,e,!1):r={},n!==r)return t.stopImmediatePropagation(),t.preventDefault(),r&&r.value}else n.length&&(Q.set(this,e,{value:T.event.trigger(T.extend(n[0],T.Event.prototype),n.slice(1),this)}),t.stopImmediatePropagation())}})):void 0===Q.get(t,e)&&T.event.add(t,e,tT)}

function eL(t,e){var i,s,r=T.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((r[i]?t:s||(s={}))[i]=e[i]);return s&&T.extend(!0,t,s),t}

function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}

function getRenderer(t){return renderers[t]}

function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix;default:return null}}

function getQueryVariable(t){for(var e=queryString.split("&"),i=0;i<e.length;i+=1){var s=e[i].split("=");if(decodeURIComponent(s[0])==t)return decodeURIComponent(s[1])}return null}

function getPerpendicularVector(t,e){var i=[e[0]-t[0],e[1]-t[1]],s=-(.5*Math.PI);return[Math.cos(s)*i[0]-Math.sin(s)*i[1],Math.sin(s)*i[0]+Math.cos(s)*i[1]]}

function getProjectingAngle(t,e){var i=0===e?t.length()-1:e-1,s=(e+1)%t.length(),r=getPerpendicularVector(t.v[i],t.v[s]);return Math.atan2(0,1)-Math.atan2(r[1],r[0])}

function getIntersection(t,e){var i=t.intersections(e);return i.length&&floatEqual(i[0][0],1)&&i.shift(),i.length?i[0]:null}

function getFontProperties(t){for(var e=t.fStyle?t.fStyle.split(" "):[],i="normal",s="normal",r=e.length,n=0;n<r;n+=1)switch(e[n].toLowerCase()){case"italic":s="italic";break;case"bold":i="700";break;case"black":i="900";break;case"medium":i="500";break;case"regular":case"normal":i="400";break;case"light":case"thin":i="200"}return{style:s,weight:t.fWeight||i}}

function getInterface(t){return interfaces[t]||null}

function posterizeTime(t){value=valueAtTime(time=0===t?0:Math.floor(time*t)/t)}

var e={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(t)}

function t(t,e,i){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),t.call(this,e,i)}

function s(t,e){this._dataToConvert=e.get("data")||[],s.__super__.constructor.call(this,t,e)}

function s(t,e){this.ajaxOptions=this._applyDefaults(e.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),s.__super__.constructor.call(this,t,e)}

var e={data:function(t){return i.extend({},t,{q:t.term})},transport:function(t,e,s){var r=i.ajax(t);return r.then(e),r.fail(s),r}}

function n(){var i=r.transport(r,function(i){var r=s.processResults(i,t);s.options.get("debug")&&window.console&&console.error&&(r&&r.results&&Array.isArray(r.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),e(r)},function(){"status"in i&&(0===i.status||"0"===i.status)||s.trigger("results:message",{message:"errorLoading"})});s._request=i}

function e(t,e,i){var s=i.get("tags"),r=i.get("createTag");void 0!==r&&(this.createTag=r);var n=i.get("insertTag");if(void 0!==n&&(this.insertTag=n),t.call(this,e,i),Array.isArray(s))for(var a=0;a<s.length;a++){var o=s[a],l=this._normalizeItem(o),h=this.option(l);this.$element.append(h)}}

function e(t,e,i){var s=i.get("tokenizer");void 0!==s&&(this.tokenizer=s),t.call(this,e,i)}

function t(t,e,i){this.minimumInputLength=i.get("minimumInputLength"),t.call(this,e,i)}

function t(t,e,i){this.maximumInputLength=i.get("maximumInputLength"),t.call(this,e,i)}

function t(t,e,i){this.maximumSelectionLength=i.get("maximumSelectionLength"),t.call(this,e,i)}

function t(t,e,i,s){this.placeholder=this.normalizePlaceholder(i.get("placeholder")),t.call(this,e,i,s)}

function i(e,i,s){this.$dropdownParent=t(s.get("dropdownParent")||document.body),e.call(this,i,s)}

function e(t,e,i,s){this.minimumResultsForSearch=i.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),t.call(this,e,i,s)}

