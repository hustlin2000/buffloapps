// --------------------------------------------------------------------------------
// EVENTS SECTION
// --------------------------------------------------------------------------------

addEventListener("scroll",A);

addEventListener("refresh",D),ee(q,"resize",D),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=_.smooth=!1),C.enable()}

addEventListener("change",ic));

addEventListener("scroll",a.onScroll),a.wrapperNode===window?(a.wrapperNode.

addEventListener("resize",a.onWindowResize),a.onWindowResize()):(a.wrapperHeight=a.wrapperNode.offsetHeight,a.wrapperWidth=a.wrapperNode.offsetWidth,a.wrapperObserver=new ResizeObserver(a.onWrapperResize),a.wrapperObserver.observe(a.wrapperNode)),a.contentHeight=a.contentNode.offsetHeight,a.contentWidth=a.contentNode.offsetWidth,a.contentObserver=new ResizeObserver(a.onContentResize),a.contentObserver.observe(a.contentNode),a.targetScroll=a.scroll=a.lastScroll=a.wrapperNode[a.scrollProperty],a.animate=new p;

addEventListener("wpcf7mailsent",function(t){console.log("Fire!"),window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"submit_contact_form"})}

addEventListener("mousemove",r.updateCoordinates),requestAnimationFrame(r.loop)}

addEventListener("touchend",function(t){h.touchendX=t.changedTouches[0].screenX,h.handleGesture()}

addEventListener("lgBeforeOpen",function(){s(".legend-item.active").hasClass("red")?s(".lg-backdrop").css("backgroundColor","#CD7C61"):s(".legend-item.active").hasClass("yellow")?s(".lg-backdrop").css("backgroundColor","#C49C56"):s(".lg-backdrop").css("backgroundColor","#141414")}

addEventListener("lgAfterOpen",function(){s(".lg-img-wrap").attr("cursor-class","close"),s(".lg-img-wrap").on("click",function(){r.closeGallery()})}

addEventListener("lgAfterClose",function(){s("#cursor").removeClass("close")}

addEventListener("unload",tn,!1):r.attachEvent&&r.attachEvent("onunload",tn)),i.scope=tu(function(t){return f.appendChild(t).appendChild(c.createElement("div")),void 0!==t.querySelectorAll&&!t.querySelectorAll(":scope fieldset div").length}

addEventListener("DOMContentLoaded",q),s.

addEventListener("load",q)):s.setTimeout(T.ready);

onseHeader("etag"))&&(T.etag[r]=x)),204===t||"HEAD"===c.type?b="nocontent":304===t?b="notmodified":(b=y.state,p=y.data,u=!(_=y.error))):(_=b,!t&&b||(b="error",t<0&&(t=0))),w.status=t,w.statusText=(e||b)+"",u?g.resolveWith(f,[p,b,w]):g.rejectWith(f,[w,b,_]),w.statusCode(v),v=void 0,d&&m.trigger(u?"ajaxSuccess":"ajaxError",[w,c,u?p:_]),$.fireWith(f,[w,b]),d&&(m.trigger("ajaxComplete",[w,c]),--T.active||T.event.trigger("ajaxStop")))}

function BMEnterFrameEvent(t,e,i,s){this.type=t,this.currentTime=e,this.totalTime=i,this.direction=s<0?-1:1}

function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}

function BMCompleteLoopEvent(t,e,i,s){this.type=t,this.currentLoop=i,this.totalLoops=e,this.direction=s<0?-1:1}

function BMDestroyEvent(t,e){this.type=t,this.target=e}

function BMRenderFrameErrorEvent(t,e){this.type="renderFrameError",this.nativeError=t,this.currentTime=e}

ontext("2d")).fillStyle="rgba(0,0,0,0)",e.fillRect(0,0,1,1),t);

addEventListener("load",this._imageLoaded,!1),s.

addEventListener("error",(function(){r.img=i,this._imageLoaded()}

addEventListener("load",this._imageLoaded,!1),s.

addEventListener("error",(function(){r.img=i,this._imageLoaded()}

function BaseEvent(){}

addEventListener("destroy",o),t.

addEventListener("_active",h),t.

addEventListener("_idle",d),e.push({elem:i,animation:t}

ontext("2d");

ontext("2d")).filter="url(#"+t+")",i.fillStyle="rgba(0,0,0,0)",i.fillRect(0,0,1,1))}

ontext("2d");

ontext("2d");

ontext("2d").drawImage(this.canvasContext.canvas,0,0),this.clearCanvas(this.canvasContext),this.canvasContext.drawImage(i,0,0)}

ontext("2d"),CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=createSizedArray(t.l?t.l.length:0);var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",this.fill=e;var i=!1;t.sc&&(i=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var s,r,n,a,o,l,h,d,u,p,c,f,m=this.globalData.fontManager.getFontByName(t.f),g=t.l,$=this.mHelper;this.stroke=i,this.values.fValue=t.finalSize+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,r=t.finalText.length;var v=this.data.singleShape,_=.001*t.tr*t.finalSize,y=0,x=0,b=!0,w=0;for(s=0;s<r;s+=1){a=(n=this.globalData.fontManager.getCharData(t.finalText[s],m.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily))&&n.data||{},$.reset(),v&&g[s].n&&(y=-_,x+=t.yOffset,x+=b?1:0,b=!1),u=(h=a.shapes?a.shapes[0].it:[]).length,$.scale(t.finalSize/100,t.finalSize/100),v&&this.applyTextPropertiesToMatrix(t,$,g[s].line,y,x),c=createSizedArray(u-1);var T=0;for(d=0;d<u;d+=1)if("sh"===h[d].ty){for(l=h[d].ks.k.i.length,p=h[d].ks.k,f=[],o=1;o<l;o+=1)1===o&&f.push($.applyToX(p.v[0][0],p.v[0][1],0),$.applyToY(p.v[0][0],p.v[0][1],0)),f.push($.applyToX(p.o[o-1][0],p.o[o-1][1],0),$.applyToY(p.o[o-1][0],p.o[o-1][1],0),$.applyToX(p.i[o][0],p.i[o][1],0),$.applyToY(p.i[o][0],p.i[o][1],0),$.applyToX(p.v[o][0],p.v[o][1],0),$.applyToY(p.v[o][0],p.v[o][1],0));f.push($.applyToX(p.o[o-1][0],p.o[o-1][1],0),$.applyToY(p.o[o-1][0],p.o[o-1][1],0),$.applyToX(p.i[0][0],p.i[0][1],0),$.applyToY(p.i[0][0],p.i[0][1],0),$.applyToX(p.v[0][0],p.v[0][1],0),$.applyToY(p.v[0][0],p.v[0][1],0)),c[T]=f,T+=1}v&&(y+=g[s].l,y+=_),this.textSpans[w]?this.textSpans[w].elem=c:this.textSpans[w]={elem:c},w+=1}}

ontext("2d"),r=this.img.width,n=this.img.height,a=r/n,o=this.assetData.w/this.assetData.h,l=this.assetData.pr||this.globalData.renderConfig.imagePreserveAspectRatio;

ontext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className),this.renderConfig.id&&this.animationItem.container.setAttribute("id",this.renderConfig.id)}

addEventListener("testPassive",null,c),window.removeEventListener("testPassive",null,c)}

addEventListener("resize",y),h=!1,C())}

addEventListener("resize",T),window.

addEventListener("orientationchange",T),(s.options.wrapper?s.options.wrapper:window).

addEventListener("scroll",T,!!p&&{passive:!0}

addEventListener("touchmove",T,!!p&&{passive:!0}

addEventListener("wheel",this._onWheel,this.listenerOptions),n.hasMouseWheelEvent&&i(this,l)[l].

addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),n.hasTouch&&i(this,o)[o].useTouch&&(i(this,l)[l].

addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),n.hasPointer&&n.hasTouchWin&&(i(this,p)[p]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",i(this,l)[l].

addEventListener("MSPointerDown",this._onTouchStart,!0),i(this,l)[l].

addEventListener("MSPointerMove",this._onTouchMove,!0)),n.hasKeyDown&&i(this,o)[o].useKeyboard&&document.

addEventListener("keydown",this._onKeyDown)}

ontext("webgl2",$),this._isWebGL2=!!this.gl,this.gl||(this.gl=this.canvas.getC

ontext("webgl",$)||this.canvas.getContext("experimental-webgl",$)),!this.gl)return this.production||r(this.type+": WebGL context could not be created"),this.state.isActive=!1,void(this.onError&&this.onError());

addEventListener("webglcontextlost",this._contextLostHandler,!1),this._contextRestoredHandler=this.contextRestored.bind(this),this.canvas.

addEventListener("webglcontextrestored",this._contextRestoredHandler,!1)}

addEventListener("scroll",this.handler,{passive:!0}

addEventListener("resize",this._resizeHandler,!1))}

addEventListener("load",o.load,!1),t.

addEventListener("error",o.error,!1)}

addEventListener("load",o.load,!1),t.

addEventListener("error",o.error,!1)),this._parent&&this._addToParent(a,t,"image")}

addEventListener("error",n.error,!1),t.readyState>=t.HAVE_FUTURE_DATA&&i&&this._sourceLoaded(t,r,i),t.load(),this._addToParent&&this._addToParent(r,t,"video"),"requestVideoFrameCallback"in HTMLVideoElement.prototype&&(n.videoFrameCallback=r._videoFrameCallback.bind(r),r._videoFrameCallbackID=t.requestVideoFrameCallback(n.videoFrameCallback))}

addEventListener("testPassiveListener",null,i)}

addEventListener("resize",a),s.

addEventListener("orientationchange",o))}

addEventListener("popstate",d))}

addEventListener("visibilitychange",d),t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",p),t.$el.on("mouseleave",c)))}

