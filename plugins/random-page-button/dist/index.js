import { createRequire } from 'module';

createRequire(import.meta.url);

// node_modules/@quartz-community/utils/dist/lang.js
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/scripts/randomPage.inline.ts
var randomPage_inline_default = 'var p=Object.hasOwnProperty;function C(u){let D=a(c(u,"index"),!0);return D.length===0?"/":D}function A(u){return u.document.body.dataset.slug}function s(u,D){return u===D||u.endsWith("/"+D)}function c(u,D){return s(u,D)&&(u=u.slice(0,-D.length)),u}function a(u,D){return u.startsWith("/")&&(u=u.substring(1)),!D&&u.endsWith("/")&&(u=u.slice(0,-1)),u}function r(u){let D=u.split("/").filter(t=>t!=="").slice(0,-1).map(t=>"..").join("/");return D.length===0&&(D="."),D}function l(u){return Math.floor(Math.random()*u)}async function o(){let u=A(window),D=C(A(window)),t=await fetchData,F=Object.keys(t).filter(E=>!t[E].tags?.some(B=>B.endsWith("exclude")||B==="slurp")).map(E=>C(E));if(F.length===0)return;let e=F[l(F.length)],i=0;for(;e===D&&F.length>1&&i<50;)e=F[l(F.length)],i++;let n;e===""||e==="/"?n=r(u):n=`${r(u)}/${e}`,window.location.href=n}document.addEventListener("nav",async()=>{let u=document.getElementById("random-page-button");u?.removeEventListener("click",o),u?.addEventListener("click",o)});\n';

// src/components/styles/randomPage.scss
var randomPage_default = ".random-page {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-left: auto;\n  margin: 0;\n}\n.random-page > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0.5rem 0;\n}\n.random-page > svg {\n  cursor: pointer;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n}\n.random-page:hover {\n  opacity: 0.7; /* Decrease opacity on hover */\n  cursor: pointer;\n}\n.random-page > h3 {\n  font-size: 1rem;\n  margin: 0;\n}\n\n.random-page-ellipse {\n  stroke: var(--darkgray);\n  fill: var(--darkgray);\n  transition: stroke 0.5s ease;\n}\n\n.random-page-square {\n  stroke: var(--darkgray);\n  transition: stroke 0.5s ease;\n}";
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Math.random().toString(8);

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/RandomPageButton.tsx
var RandomPageButton_default = (() => {
  const RandomPageButton = ({ displayClass }) => {
    return /* @__PURE__ */ u2("div", { id: "random-page-button", class: classNames(displayClass, "random-page"), children: /* @__PURE__ */ u2("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ u2("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }),
      /* @__PURE__ */ u2("g", { id: "SVGRepo_tracerCarrier", "stroke-linecap": "round", "stroke-linejoin": "round" }),
      /* @__PURE__ */ u2("g", { id: "SVGRepo_iconCarrier", children: [
        /* @__PURE__ */ u2(
          "path",
          {
            d: "M3 7H4.77985C6.93172 7 8.00766 7 8.87921 7.45631C9.25172 7.65134 9.59114 7.90388 9.88499 8.20464C10.5725 8.90832 10.8817 9.93888 11.5 12V12C12.1183 14.0611 12.4275 15.0917 13.115 15.7954C13.4089 16.0961 13.7483 16.3487 14.1208 16.5437C14.9923 17 16.0683 17 18.2202 17H21M21 17L18 14M21 17L18 20",
            stroke: "currentColor"
          }
        ),
        /* @__PURE__ */ u2(
          "path",
          {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M21.3536 6.64648L18.3536 3.64648L17.6464 4.35359L19.7929 6.50004H18.2202H18.1963C17.1406 6.50003 16.3153 6.50003 15.6464 6.55901C14.964 6.61918 14.405 6.74317 13.8889 7.01339C13.4698 7.2328 13.0879 7.51691 12.7574 7.85526C12.7386 7.87444 12.7202 7.8938 12.7019 7.91335C12.8289 8.16228 12.9399 8.41464 13.0406 8.66741C13.0782 8.7617 13.1154 8.85879 13.1523 8.95851C13.2519 8.80434 13.3571 8.6724 13.4727 8.5541C13.7298 8.29094 14.0268 8.06996 14.3527 7.89931C14.7081 7.71321 15.1228 7.60905 15.7343 7.55514C16.3542 7.50049 17.1355 7.50004 18.2202 7.50004H19.7929L17.6464 9.64648L18.3536 10.3536L21.3536 7.35359L21.7071 7.00004L21.3536 6.64648ZM10.2981 16.0867C10.1711 15.8378 10.0601 15.5854 9.95935 15.3327C9.92175 15.2384 9.88456 15.1413 9.84766 15.0416C9.74807 15.1957 9.64293 15.3277 9.52735 15.446C9.27024 15.7091 8.97324 15.9301 8.6473 16.1008C8.29185 16.2869 7.87716 16.391 7.26574 16.4449C6.64583 16.4996 5.86454 16.5 4.77985 16.5H3V17.5H4.77985H4.80369C5.85944 17.5 6.68467 17.5 7.35357 17.4411C8.03597 17.3809 8.59502 17.2569 9.11113 16.9867C9.5302 16.7673 9.91205 16.4832 10.2426 16.1448C10.2614 16.1256 10.2798 16.1063 10.2981 16.0867Z",
            fill: "currentColor"
          }
        )
      ] })
    ] }) });
  };
  RandomPageButton.css = randomPage_default;
  RandomPageButton.afterDOMLoaded = randomPage_inline_default;
  return RandomPageButton;
});

export { RandomPageButton_default as RandomPageButton };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map