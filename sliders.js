// --------------------------------------------------------------------------------
// SLIDERS SECTION
// --------------------------------------------------------------------------------

function x(...t){var e;let i=Object(t[0]),s=["__proto__","constructor","prototype"];for(let r=1;r<t.length;r+=1){let n=t[r];if(null!=n&&(e=n,!("undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)))){let a=Object.keys(Object(n)).filter(t=>0>s.indexOf(t));for(let o=0,l=a.length;o<l;o+=1){let h=a[o],d=Object.getOwnPropertyDescriptor(n,h);void 0!==d&&d.enumerable&&(y(i[h])&&y(n[h])?n[h].__swiper__?i[h]=n[h]:x(i[h],n[h]):!y(i[h])&&y(n[h])?(i[h]={},n[h].__swiper__?i[h]=n[h]:x(i[h],n[h])):i[h]=n[h])}}}return i}

function w({swiper:t,targetPosition:e,side:i}

function A({swiper:t,runCallbacks:e,direction:i,step:s}

function a(){if(t.params.loop)return;let{$nextEl:e,$prevEl:i}=t.navigation;n(i,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}

let u=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),d()}

function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}

function l(e,i){let{bulletActiveClass:s}=t.params.pagination;e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)}

let c=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),p()}

function c(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}

function f(){return c()&&t.params.pagination.clickable}

