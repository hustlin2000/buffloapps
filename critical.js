// Podstawowa struktura pliku critical.js
document.addEventListener('DOMContentLoaded', function() {
    // Tutaj umieść kod inicjalizujący
    initCriticalFunctions();
});

// Funkcja inicjalizująca krytyczne elementy
function initCriticalFunctions() {
    // Inicjalizacja podstawowych elementów UI
    setupMainNavigation();
    setupMainSlider();
    
    // Dodaj asynchroniczne ładowanie pozostałych skryptów
    loadNonCriticalScripts();
}

// Funkcja ładująca pozostałe skrypty asynchronicznie
function loadNonCriticalScripts() {
    const script = document.createElement('script');
    script.src = 'js/functions.min.js';
    script.async = true;
    document.body.appendChild(script);
}

// --------------------------------------------------------------------------------
// SETUP SECTION
// --------------------------------------------------------------------------------

addEventListener("matchMediaInit", function() { return eb() });

addEventListener("touchstart", function(t) { h.touchstartX = t.changedTouches[0].screenX });

function BMSegmentStartEvent(t, e, i) {
    this.type = t;
    this.firstFrame = e;
    this.totalFrames = i;
}

function BMConfigErrorEvent(t) {
    this.type = "configError";
    this.nativeError = t;
}

function BMAnimationConfigErrorEvent(t, e) {
    this.type = t;
    this.nativeError = e;
}

function initialize$2(t) {
    seedRandom([], t);
}

function initiateExpression(elem, data, property) {
    // Implementacja funkcji
}

function initialize$1() {
    addPropertyDecorator();
}

function initialize() {
    addDecorator();
}

// --------------------------------------------------------------------------------
// SLIDERS SECTION
// --------------------------------------------------------------------------------

function x(...t) {
    var e;
    let i = Object(t[0]), s = ["__proto__", "constructor", "prototype"];
    for (let r = 1; r < t.length; r += 1) {
        let n = t[r];
        if (null != n && (e = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)))) {
            let a = Object.keys(Object(n)).filter(t => 0 > s.indexOf(t));
            for (let o = 0, l = a.length; o < l; o += 1) {
                let h = a[o], d = Object.getOwnPropertyDescriptor(n, h);
                void 0 !== d && d.enumerable && (y(i[h]) && y(n[h]) ? n[h].__swiper__ ? i[h] = n[h] : x(i[h], n[h]) : !y(i[h]) && y(n[h]) ? (i[h] = {}, n[h].__swiper__ ? i[h] = n[h] : x(i[h], n[h])) : i[h] = n[h]);
            }
        }
    }
    return i;
}

function w({swiper: t, targetPosition: e, side: i}) {
    // Implementacja funkcji
}

function A({swiper: t, runCallbacks: e, direction: i, step: s}) {
    // Implementacja funkcji  
}

function a() {
    if (t.params.loop) return;
    let {$nextEl: e, $prevEl: i} = t.navigation;
    n(i, t.isBeginning && !t.params.rewind);
    n(e, t.isEnd && !t.params.rewind);
}

let u = () => {
    t.$el.addClass(t.params.navigation.navigationDisabledClass);
    d();
}

function o() {
    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
}

function l(e, i) {
    let {bulletActiveClass: s} = t.params.pagination;
    e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`);
}

let c = () => {
    t.$el.addClass(t.params.pagination.paginationDisabledClass);
    t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass);
    p();
}

function c() {
    return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
}

function f() {
    return c() && t.params.pagination.clickable;
}

// --------------------------------------------------------------------------------
// UI HANDLERS SECTION
// --------------------------------------------------------------------------------

function ty(t, e) {
    var i;
    return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? T.merge([t], i) : i;
}

function t8(t, e, i, s, r) {
    for (var n, a, o, l, h, d, u = e.createDocumentFragment(), p = [], c = 0, f = t.length; c < f; c++)
        if ((n = t[c]) || 0 === n) {
            if ("object" === b(n)) T.merge(p, n.nodeType ? [n] : n);
            else if (tb.test(n)) {
                for (a = a || u.appendChild(e.createElement("div")), l = t_[o = (t$.exec(n) || ["", ""])[1].toLowerCase()] || t_._ default, a.innerHTML = l[1] + T.htmlPrefilter(n) + l[2], d = l[0]; d--; ) a = a.lastChild;
                T.merge(p, a.childNodes), (a = u.firstChild).textContent = "";
            } else p.push(e.createTextNode(n));
        }
    for (u.textContent = "", c = 0; n = p[c++]; )
        if (s && T.inArray(n, s) > -1) r && r.push(n);
        else if (h = to(n), a = ty(u.appendChild(n), "script"), h && tx(a), i)
            for (d = 0; n = a[d++]; ) tv.test(n.type || "") && i.push(n);
    return u;
}

function createTag(t) {
    return document.createElement(t);
}

function createNS(t) {
    return document.createElementNS(svgNS, t);
}

// --------------------------------------------------------------------------------
// UTILS SECTION
// --------------------------------------------------------------------------------

var __webpack_modules__ = {
    8882: function(t, e, i) {
        "use strict";
        i.r(e), i.d(e, {
            DrawSVGPlugin: function() {
                return S;
            },
            default: function() {
                return S;
            }
        });
        var s, r, n, a, o, l, h, d, u = function() {
            return "undefined" != typeof window;
        }, p = function() {
            return s || u() && (s = window.gsap) && s.registerPlugin && s;
        }, c = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, f = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        }, m = function(t) {
            return Math.round(1e4 * t) / 1e4;
        }, g = function(t) {
            return parseFloat(t) || 0;
        }, $ = function(t, e) {
            var i = g(t);
            return ~t.indexOf("%") ? i / 100 * e : i;
        }, v = function(t, e) {
            return g(t.getAttribute(e));
        }, _ = Math.sqrt, y = function(t, e, i, s, r, n) {
            return _(Math.pow((g(i) - g(t)) * r, 2) + Math.pow((g(s) - g(e)) * n, 2));
        }, x = function(t) {
            return console.warn(t);
        }, b = function(t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect");
        }, w = function(t) {
            if (!(t = r(t)[0])) return 0;
            var e, i, s, n, a, o, h, d = t.tagName.toLowerCase(), u = t.style, p = 1, g = 1;
            b(t) && (p = _(g = t.getScreenCTM().a * g.a + g.b * g.b), g = _(g.d * g.d + g.c * g.c));
            try {
                i = t.getBBox();
            } catch ($) {
                x("Some browsers won't measure invisible elements (like display:none or masks inside defs).");
            }
            var w = i || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, T = w.x, C = w.y, S = w.width, E = w.height;
            if (i && (S || E) || !f[d] || (S = v(t, f[d][0]), E = v(t, f[d][1]), "rect" !== d && "line" !== d && (S *= 2, E *= 2), "line" === d && (T = v(t, "x1"), C = v(t, "y1"), S = Math.abs(S - T), E = Math.abs(E - C))), "path" === d) n = u.strokeDasharray, u.strokeDasharray = "none", e = t.getTotalLength() || 0, m(p) !== m(g) && !l && (l = 1) && x("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (p + g) / 2, u.strokeDasharray = n;
            else if ("rect" === d) e = 2 * S * p + 2 * E * g;
            else if ("line" === d) e = y(T, C, T + S, C + E, p, g);
            else if ("polyline" === d || "polygon" === d)
                for (s = t.getAttribute("points").match(c) || [], "polygon" === d && s.push(s[0], s[1]), e = 0, a = 2; a < s.length; a += 2) e += y(s[a - 2], s[a - 1], s[a], s[a + 1], p, g) || 0;
            else "circle" !== d && "ellipse" !== d || (e = Math.PI * (3 * ((o = S / 2 * p) + (h = E / 2 * g)) - _((3 * o + h) * (o + 3 * h))));
            return e || 0;
        }, T = function(t, e) {
            if (!(t = r(t)[0])) return [0, 0];
            e || (e = w(t) + 1);
            var i = n.getComputedStyle(t), s = i.strokeDasharray || "", a = g(i.strokeDashoffset), o = s.indexOf(",");
            return o < 0 && (o = s.indexOf(" ")), (s = o < 0 ? e : g(s.substr(0, o))) > e && (s = e), [-a || 0, s - a || 0];
        }, C = function() {
            u() && (document, n = window, o = s = p(), r = s.utils.toArray, h = s.core.getStyleSaver, d = s.core.reverting || function() {}, a = -1 !== ((n.navigator || {}).userAgent || "").indexOf("Edge"));
        }, S = {
            version: "3.11.4",
            name: "drawSVG",
            register: function(t) {
                s = t, C();
            },
            init: function(t, e, i, s, r) {
                if (!t.getBBox) return !1;
                o || C();
                var l, d, u, p, c, f, v, _, y, x = w(t);
                return this.styles = h && h(t, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = i, this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", d = (p = e, c = x, f = (l = T(t, x))[0], (y = p.indexOf(" ")) < 0 ? (v = void 0 !== f ? f + "" : p, _ = p) : (v = p.substr(0, y), _ = p.substr(y + 1)), (v = $(v, c)) > (_ = $(_,c)) ? [_, v] : [v, _]), this._length = m(x), this._dash = m(l[1] - l[0]), this._offset = m(-l[0]), this._dashPT = this.add(this, "_dash", this._dash, m(d[1] - d[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, m(-d[0]), 0, 0, 0, 0, 0, 1), a && (u = n.getComputedStyle(t)).strokeLinecap !== u.strokeLinejoin && (d = g(u.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", d, d + .01)), this._live = b(t) || ~(e + "").indexOf("live"), this._nowrap = ~(e + "").indexOf("nowrap"), this._props.push("drawSVG"), 1;
            },
            render: function(t, e) {
                if (e.tween._time || !d()) {
                    var i, s, r, n, a = e._pt, o = e._style;
                    if (a) {
                        for (e._live && (i = w(e._target)) !== e._length && (s = i / e._length, e._length = i, e._offsetPT && (e._offsetPT.s *= s, e._offsetPT.c *= s), e._dashPT ? (e._dashPT.s *= s, e._dashPT.c *= s) : e._dash *= s); a; ) a.r(t, a.d), a = a._next;
                        r = e._dash || t && 1 !== t && 1e-4 || 0, i = e._length - r + .1, n = e._offset, r && n && r + Math.abs(n % e._length) > e._length - .2 && (n += n < 0 ? .1 : -.1) && (i += .1), o.strokeDashoffset = r ? n : n + .001, o.strokeDasharray = i < .2 ? "none" : r ? r + "px," + (e._nowrap ? 999999 : i) + "px" : "0px, 999999px";
                    }
                } else e.styles.revert();
            },
            getLength: w,
            getPosition: T
        };
        p() && s.registerPlugin(S);
    }
};

// Główna funkcja inicjalizująca krytyczne skrypty
document.addEventListener('DOMContentLoaded', function() {
    // Inicjalizacja podstawowych funkcji
    initCriticalFunctions();
    
    // Załaduj resztę skryptów asynchronicznie po krótkim opóźnieniu
    setTimeout(loadNonCriticalScripts, 1000);
});

// Funkcja inicjalizująca podstawowe elementy strony
function initCriticalFunctions() {
    // Menu mobilne
    setupMobileMenu();
    
    // Inicjalizacja prostego slidera (bez pełnej funkcjonalności)
    setupBasicSlider();
    
    // Inicjalizacja podstawowych animacji
    setupBasicAnimations();
}

// Funkcja ładująca pozostałe skrypty asynchronicznie
function loadNonCriticalScripts() {
    const scripts = [
        'js/sliders.js',
        'js/animations.js',
        'js/utils.js',
        'js/uiHandlers.js'
    ];
    
    // Asynchronicznie załaduj każdy skrypt
    scripts.forEach(function(src) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    });
}

// Implementacja podstawowej funkcji menu mobilnego
function setupMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            mobileMenuButton.classList.toggle('open');
        });
    }
    
    // Obsługa zamykania menu po kliknięciu poza nim
    document.addEventListener('click', function(event) {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuButton.classList.remove('open');
        }
    });
}

// Implementacja prostego slidera
function setupBasicSlider() {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    
    if (sliderContainer && slides.length > 0) {
        // Pokaż pierwszy slajd
        if (slides[0]) {
            slides[0].classList.add('active');
        }
        
        // Podstawowa inicjalizacja nawigacji slidera
        const prevButton = document.querySelector('.slider-prev');
        const nextButton = document.querySelector('.slider-next');
        
        if (prevButton && nextButton) {
            let currentSlide = 0;
            
            nextButton.addEventListener('click', function() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            });
            
            prevButton.addEventListener('click', function() {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
            });
        }
    }
}

// Podstawowe animacje
function setupBasicAnimations() {
    // Animacje przy scrollowaniu
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        // Prosta funkcja sprawdzająca, czy element jest widoczny w oknie przeglądarki
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );
        }
        
        // Sprawdź przy pierwszym załadowaniu
        animatedElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add('animated');
            }
        });
        
        // Sprawdź przy przewijaniu strony
        let scrollTimer;
        window.addEventListener('scroll', function() {
            if (scrollTimer) clearTimeout(scrollTimer);
            scrollTimer = setTimeout(function() {
                animatedElements.forEach(function(element) {
                    if (isElementInViewport(element) && !element.classList.contains('animated')) {
                        element.classList.add('animated');
                    }
                });
            }, 100);
        });
    }
}

// Funkcja tworząca tag HTML
function createElementWithClass(tagName, className) {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    return element;
}

// Funkcja do skracania tekstu
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

