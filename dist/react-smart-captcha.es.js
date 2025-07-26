import * as fn from "react";
import ht, { useRef as st, useEffect as Qt, createContext as Ot, useLayoutEffect as Jr, useId as dn, useContext as U, useInsertionEffect as gi, useMemo as bt, useCallback as Dt, Children as Qr, isValidElement as to, useState as ut, Fragment as yi, createElement as eo, forwardRef as no, Component as so } from "react";
import { toast as Hn } from "sonner";
var ie = { exports: {} }, Bt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function io() {
  if (Xn) return Bt;
  Xn = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(s, i, o) {
    var r = null;
    if (o !== void 0 && (r = "" + o), i.key !== void 0 && (r = "" + i.key), "key" in i) {
      o = {};
      for (var a in i)
        a !== "key" && (o[a] = i[a]);
    } else o = i;
    return i = o.ref, {
      $$typeof: t,
      type: s,
      key: r,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return Bt.Fragment = e, Bt.jsx = n, Bt.jsxs = n, Bt;
}
var Nt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function ro() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && function() {
    function t(m) {
      if (m == null) return null;
      if (typeof m == "function")
        return m.$$typeof === j ? null : m.displayName || m.name || null;
      if (typeof m == "string") return m;
      switch (m) {
        case y:
          return "Fragment";
        case g:
          return "Profiler";
        case x:
          return "StrictMode";
        case b:
          return "Suspense";
        case S:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof m == "object")
        switch (typeof m.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), m.$$typeof) {
          case p:
            return "Portal";
          case v:
            return (m.displayName || "Context") + ".Provider";
          case T:
            return (m._context.displayName || "Context") + ".Consumer";
          case A:
            var E = m.render;
            return m = m.displayName, m || (m = E.displayName || E.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
          case V:
            return E = m.displayName || null, E !== null ? E : t(m.type) || "Memo";
          case P:
            E = m._payload, m = m._init;
            try {
              return t(m(E));
            } catch {
            }
        }
      return null;
    }
    function e(m) {
      return "" + m;
    }
    function n(m) {
      try {
        e(m);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var D = E.error, N = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return D.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), e(m);
      }
    }
    function s(m) {
      if (m === y) return "<>";
      if (typeof m == "object" && m !== null && m.$$typeof === P)
        return "<...>";
      try {
        var E = t(m);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var m = K.A;
      return m === null ? null : m.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function r(m) {
      if (z.call(m, "key")) {
        var E = Object.getOwnPropertyDescriptor(m, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return m.key !== void 0;
    }
    function a(m, E) {
      function D() {
        Se || (Se = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      D.isReactWarning = !0, Object.defineProperty(m, "key", {
        get: D,
        configurable: !0
      });
    }
    function l() {
      var m = t(this.type);
      return Ae[m] || (Ae[m] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), m = this.props.ref, m !== void 0 ? m : null;
    }
    function u(m, E, D, N, lt, tt, Ve, Ee) {
      return D = tt.ref, m = {
        $$typeof: d,
        type: m,
        key: E,
        props: tt,
        _owner: lt
      }, (D !== void 0 ? D : null) !== null ? Object.defineProperty(m, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(m, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(m, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ve
      }), Object.defineProperty(m, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ee
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    }
    function c(m, E, D, N, lt, tt, Ve, Ee) {
      var _ = E.children;
      if (_ !== void 0)
        if (N)
          if (G(_)) {
            for (N = 0; N < _.length; N++)
              h(_[N]);
            Object.freeze && Object.freeze(_);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(_);
      if (z.call(E, "key")) {
        _ = t(m);
        var wt = Object.keys(E).filter(function(Zr) {
          return Zr !== "key";
        });
        N = 0 < wt.length ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}", Pt[_ + N] || (wt = 0 < wt.length ? "{" + wt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          _,
          wt,
          _
        ), Pt[_ + N] = !0);
      }
      if (_ = null, D !== void 0 && (n(D), _ = "" + D), r(E) && (n(E.key), _ = "" + E.key), "key" in E) {
        D = {};
        for (var Ce in E)
          Ce !== "key" && (D[Ce] = E[Ce]);
      } else D = E;
      return _ && a(
        D,
        typeof m == "function" ? m.displayName || m.name || "Unknown" : m
      ), u(
        m,
        _,
        tt,
        lt,
        i(),
        D,
        Ve,
        Ee
      );
    }
    function h(m) {
      typeof m == "object" && m !== null && m.$$typeof === d && m._store && (m._store.validated = 1);
    }
    var f = ht, d = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), v = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), K = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, G = Array.isArray, at = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      "react-stack-bottom-frame": function(m) {
        return m();
      }
    };
    var Se, Ae = {}, I = f["react-stack-bottom-frame"].bind(
      f,
      o
    )(), H = at(s(o)), Pt = {};
    Nt.Fragment = y, Nt.jsx = function(m, E, D, N, lt) {
      var tt = 1e4 > K.recentlyCreatedOwnerStacks++;
      return c(
        m,
        E,
        D,
        !1,
        N,
        lt,
        tt ? Error("react-stack-top-frame") : I,
        tt ? at(s(m)) : H
      );
    }, Nt.jsxs = function(m, E, D, N, lt) {
      var tt = 1e4 > K.recentlyCreatedOwnerStacks++;
      return c(
        m,
        E,
        D,
        !0,
        N,
        lt,
        tt ? Error("react-stack-top-frame") : I,
        tt ? at(s(m)) : H
      );
    };
  }()), Nt;
}
var Zn;
function oo() {
  return Zn || (Zn = 1, process.env.NODE_ENV === "production" ? ie.exports = io() : ie.exports = ro()), ie.exports;
}
var R = oo();
const ao = ({
  text: t,
  width: e = 180,
  height: n = 50,
  fontSize: s = 28,
  fontFamily: i = "Arial",
  backgroundColor: o = "#f9f9f9",
  textColor: r = "#333",
  noise: a = 30
}) => {
  const l = st(null);
  return Qt(() => {
    const u = l.current;
    if (!u) return;
    const c = u.getContext("2d");
    if (c) {
      c.clearRect(0, 0, e, n), c.fillStyle = o, c.fillRect(0, 0, e, n);
      for (let h = 0; h < a; h++)
        c.fillStyle = `rgba(0,0,0,${Math.random()})`, c.beginPath(), c.arc(
          Math.random() * e,
          Math.random() * n,
          Math.random() * 5,
          0,
          2 * Math.PI
        ), c.fill();
      c.font = `${s}px ${i}`, c.fillStyle = r, c.textAlign = "center", c.textBaseline = "middle", c.fillText(t, e / 2, n / 2);
    }
  }, [
    t,
    e,
    n,
    s,
    i,
    o,
    r,
    a
  ]), /* @__PURE__ */ R.jsx(
    "canvas",
    {
      ref: l,
      width: e,
      height: n,
      className: "rounded-md border border-gray-300"
    }
  );
}, lo = ({
  question: t,
  width: e = 180,
  height: n = 50,
  fontSize: s = 28,
  fontFamily: i = "Arial",
  backgroundColor: o = "#f9f9f9",
  textColor: r = "#333"
}) => /* @__PURE__ */ R.jsx(
  "div",
  {
    style: { width: e, height: n, backgroundColor: o },
    className: "flex items-center justify-center rounded-md border border-gray-300 select-none",
    children: /* @__PURE__ */ R.jsx(
      "span",
      {
        style: { fontSize: s, fontFamily: i, color: r },
        className: "font-bold",
        children: t
      }
    )
  }
), mn = Ot({});
function pn(t) {
  const e = st(null);
  return e.current === null && (e.current = t()), e.current;
}
const gn = typeof window < "u", vi = gn ? Jr : Qt, xe = /* @__PURE__ */ Ot(null);
function yn(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function vn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const it = (t, e, n) => n > e ? e : n < t ? t : n;
function We(t, e) {
  return e ? `${t}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${e}` : t;
}
let Lt = () => {
}, rt = () => {
};
process.env.NODE_ENV !== "production" && (Lt = (t, e, n) => {
  !t && typeof console < "u" && console.warn(We(e, n));
}, rt = (t, e, n) => {
  if (!t)
    throw new Error(We(e, n));
});
const ot = {}, Ti = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function xi(t) {
  return typeof t == "object" && t !== null;
}
const bi = (t) => /^0[^.\s]+$/u.test(t);
// @__NO_SIDE_EFFECTS__
function Tn(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const Z = /* @__NO_SIDE_EFFECTS__ */ (t) => t, co = (t, e) => (n) => e(t(n)), te = (...t) => t.reduce(co), Yt = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
};
class xn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return yn(this.subscriptions, e), () => vn(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let o = 0; o < i; o++) {
          const r = this.subscriptions[o];
          r && r(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Q = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, et = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3;
function Pi(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const Jn = /* @__PURE__ */ new Set();
function bn(t, e, n) {
  t || Jn.has(e) || (console.warn(We(e, n)), Jn.add(e));
}
const wi = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, uo = 1e-7, ho = 12;
function fo(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = wi(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > uo && ++a < ho);
  return r;
}
function ee(t, e, n, s) {
  if (t === e && n === s)
    return Z;
  const i = (o) => fo(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : wi(i(o), e, s);
}
const Si = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Ai = (t) => (e) => 1 - t(1 - e), Vi = /* @__PURE__ */ ee(0.33, 1.53, 0.69, 0.99), Pn = /* @__PURE__ */ Ai(Vi), Ei = /* @__PURE__ */ Si(Pn), Ci = (t) => (t *= 2) < 1 ? 0.5 * Pn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), wn = (t) => 1 - Math.sin(Math.acos(t)), Mi = Ai(wn), Di = Si(wn), mo = /* @__PURE__ */ ee(0.42, 0, 1, 1), po = /* @__PURE__ */ ee(0, 0, 0.58, 1), Ri = /* @__PURE__ */ ee(0.42, 0, 0.58, 1), go = (t) => Array.isArray(t) && typeof t[0] != "number", ki = (t) => Array.isArray(t) && typeof t[0] == "number", Qn = {
  linear: Z,
  easeIn: mo,
  easeInOut: Ri,
  easeOut: po,
  circIn: wn,
  circInOut: Di,
  circOut: Mi,
  backIn: Pn,
  backInOut: Ei,
  backOut: Vi,
  anticipate: Ci
}, yo = (t) => typeof t == "string", ts = (t) => {
  if (ki(t)) {
    rt(t.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [e, n, s, i] = t;
    return ee(e, n, s, i);
  } else if (yo(t))
    return rt(Qn[t] !== void 0, `Invalid easing type '${t}'`, "invalid-easing-type"), Qn[t];
  return t;
}, re = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function vo(t, e) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = !1, o = !1;
  const r = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    r.has(c) && (u.schedule(c), t()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, h = !1, f = !1) => {
      const p = f && i ? n : s;
      return h && r.add(c), p.has(c) || p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      s.delete(c), r.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, i) {
        o = !0;
        return;
      }
      i = !0, [n, s] = [s, n], n.forEach(l), n.clear(), i = !1, o && (o = !1, u.process(c));
    }
  };
  return u;
}
const To = 40;
function Oi(t, e) {
  let n = !1, s = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = () => n = !0, r = re.reduce((v, A) => (v[A] = vo(o), v), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: f, render: d, postRender: p } = r, y = () => {
    const v = ot.useManualTiming ? i.timestamp : performance.now();
    n = !1, ot.useManualTiming || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(v - i.timestamp, To), 1)), i.timestamp = v, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), f.process(i), d.process(i), p.process(i), i.isProcessing = !1, n && e && (s = !1, t(y));
  }, x = () => {
    n = !0, s = !0, i.isProcessing || t(y);
  };
  return { schedule: re.reduce((v, A) => {
    const b = r[A];
    return v[A] = (S, V = !1, P = !1) => (n || x(), b.schedule(S, V, P)), v;
  }, {}), cancel: (v) => {
    for (let A = 0; A < re.length; A++)
      r[re[A]].cancel(v);
  }, state: i, steps: r };
}
const { schedule: M, cancel: ft, state: B, steps: Me } = /* @__PURE__ */ Oi(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Z, !0);
let ce;
function xo() {
  ce = void 0;
}
const Y = {
  now: () => (ce === void 0 && Y.set(B.isProcessing || ot.useManualTiming ? B.timestamp : performance.now()), ce),
  set: (t) => {
    ce = t, queueMicrotask(xo);
  }
}, Li = (t) => (e) => typeof e == "string" && e.startsWith(t), Sn = /* @__PURE__ */ Li("--"), bo = /* @__PURE__ */ Li("var(--"), An = (t) => bo(t) ? Po.test(t.split("/*")[0].trim()) : !1, Po = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, jt = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, Gt = {
  ...jt,
  transform: (t) => it(0, 1, t)
}, oe = {
  ...jt,
  default: 1
}, $t = (t) => Math.round(t * 1e5) / 1e5, Vn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function wo(t) {
  return t == null;
}
const So = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, En = (t, e) => (n) => !!(typeof n == "string" && So.test(n) && n.startsWith(t) || e && !wo(n) && Object.prototype.hasOwnProperty.call(n, e)), ji = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [i, o, r, a] = s.match(Vn);
  return {
    [t]: parseFloat(i),
    [e]: parseFloat(o),
    [n]: parseFloat(r),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Ao = (t) => it(0, 255, t), De = {
  ...jt,
  transform: (t) => Math.round(Ao(t))
}, yt = {
  test: /* @__PURE__ */ En("rgb", "red"),
  parse: /* @__PURE__ */ ji("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + De.transform(t) + ", " + De.transform(e) + ", " + De.transform(n) + ", " + $t(Gt.transform(s)) + ")"
};
function Vo(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Ke = {
  test: /* @__PURE__ */ En("#"),
  parse: Vo,
  transform: yt.transform
}, ne = /* @__NO_SIDE_EFFECTS__ */ (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), ct = /* @__PURE__ */ ne("deg"), nt = /* @__PURE__ */ ne("%"), w = /* @__PURE__ */ ne("px"), Eo = /* @__PURE__ */ ne("vh"), Co = /* @__PURE__ */ ne("vw"), es = {
  ...nt,
  parse: (t) => nt.parse(t) / 100,
  transform: (t) => nt.transform(t * 100)
}, St = {
  test: /* @__PURE__ */ En("hsl", "hue"),
  parse: /* @__PURE__ */ ji("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + nt.transform($t(e)) + ", " + nt.transform($t(n)) + ", " + $t(Gt.transform(s)) + ")"
}, F = {
  test: (t) => yt.test(t) || Ke.test(t) || St.test(t),
  parse: (t) => yt.test(t) ? yt.parse(t) : St.test(t) ? St.parse(t) : Ke.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? yt.transform(t) : St.transform(t),
  getAnimatableNone: (t) => {
    const e = F.parse(t);
    return e.alpha = 0, F.transform(e);
  }
}, Mo = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Do(t) {
  return isNaN(t) && typeof t == "string" && (t.match(Vn)?.length || 0) + (t.match(Mo)?.length || 0) > 0;
}
const Fi = "number", Ii = "color", Ro = "var", ko = "var(", ns = "${}", Oo = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ht(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let o = 0;
  const a = e.replace(Oo, (l) => (F.test(l) ? (s.color.push(o), i.push(Ii), n.push(F.parse(l))) : l.startsWith(ko) ? (s.var.push(o), i.push(Ro), n.push(l)) : (s.number.push(o), i.push(Fi), n.push(parseFloat(l))), ++o, ns)).split(ns);
  return { values: n, split: a, indexes: s, types: i };
}
function Bi(t) {
  return Ht(t).values;
}
function Ni(t) {
  const { split: e, types: n } = Ht(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++)
      if (o += e[r], i[r] !== void 0) {
        const a = n[r];
        a === Fi ? o += $t(i[r]) : a === Ii ? o += F.transform(i[r]) : o += i[r];
      }
    return o;
  };
}
const Lo = (t) => typeof t == "number" ? 0 : F.test(t) ? F.getAnimatableNone(t) : t;
function jo(t) {
  const e = Bi(t);
  return Ni(t)(e.map(Lo));
}
const dt = {
  test: Do,
  parse: Bi,
  createTransformer: Ni,
  getAnimatableNone: jo
};
function Re(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Fo({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e)
    i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = Re(l, a, t + 1 / 3), o = Re(l, a, t), r = Re(l, a, t - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(r * 255),
    alpha: s
  };
}
function de(t, e) {
  return (n) => n > 0 ? e : t;
}
const O = (t, e, n) => t + (e - t) * n, ke = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, Io = [Ke, yt, St], Bo = (t) => Io.find((e) => e.test(t));
function ss(t) {
  const e = Bo(t);
  if (Lt(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e)
    return !1;
  let n = e.parse(t);
  return e === St && (n = Fo(n)), n;
}
const is = (t, e) => {
  const n = ss(t), s = ss(e);
  if (!n || !s)
    return de(t, e);
  const i = { ...n };
  return (o) => (i.red = ke(n.red, s.red, o), i.green = ke(n.green, s.green, o), i.blue = ke(n.blue, s.blue, o), i.alpha = O(n.alpha, s.alpha, o), yt.transform(i));
}, ze = /* @__PURE__ */ new Set(["none", "hidden"]);
function No(t, e) {
  return ze.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function _o(t, e) {
  return (n) => O(t, e, n);
}
function Cn(t) {
  return typeof t == "number" ? _o : typeof t == "string" ? An(t) ? de : F.test(t) ? is : Wo : Array.isArray(t) ? _i : typeof t == "object" ? F.test(t) ? is : Uo : de;
}
function _i(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => Cn(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++)
      n[r] = i[r](o);
    return n;
  };
}
function Uo(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n)
    t[i] !== void 0 && e[i] !== void 0 && (s[i] = Cn(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s)
      n[o] = s[o](i);
    return n;
  };
}
function $o(t, e) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], r = t.indexes[o][s[o]], a = t.values[r] ?? 0;
    n[i] = a, s[o]++;
  }
  return n;
}
const Wo = (t, e) => {
  const n = dt.createTransformer(e), s = Ht(t), i = Ht(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? ze.has(t) && !i.values.length || ze.has(e) && !s.values.length ? No(t, e) : te(_i($o(s, i), i.values), n) : (Lt(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), de(t, e));
};
function Ui(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? O(t, e, n) : Cn(t)(t, e);
}
const Ko = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: (n = !0) => M.update(e, n),
    stop: () => ft(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => B.isProcessing ? B.timestamp : Y.now()
  };
}, $i = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++)
    s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, me = 2e4;
function Mn(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < me; )
    e += n, s = t.next(e);
  return e >= me ? 1 / 0 : e;
}
function zo(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }), i = Math.min(Mn(s), me);
  return {
    type: "keyframes",
    ease: (o) => s.next(i * o).value / e,
    duration: /* @__PURE__ */ et(i)
  };
}
const Yo = 5;
function Wi(t, e, n) {
  const s = Math.max(e - Yo, 0);
  return Pi(n - t(s), e - s);
}
const k = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Oe = 1e-3;
function Go({ duration: t = k.duration, bounce: e = k.bounce, velocity: n = k.velocity, mass: s = k.mass }) {
  let i, o;
  Lt(t <= /* @__PURE__ */ Q(k.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let r = 1 - e;
  r = it(k.minDamping, k.maxDamping, r), t = it(k.minDuration, k.maxDuration, /* @__PURE__ */ et(t)), r < 1 ? (i = (u) => {
    const c = u * r, h = c * t, f = c - n, d = Ye(u, r), p = Math.exp(-h);
    return Oe - f / d * p;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, p = Math.exp(-h), y = Ye(Math.pow(u, 2), r);
    return (-i(u) + Oe > 0 ? -1 : 1) * ((f - d) * p) / y;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -Oe + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = Xo(i, o, a);
  if (t = /* @__PURE__ */ Q(t), isNaN(l))
    return {
      stiffness: k.stiffness,
      damping: k.damping,
      duration: t
    };
  {
    const u = Math.pow(l, 2) * s;
    return {
      stiffness: u,
      damping: r * 2 * Math.sqrt(s * u),
      duration: t
    };
  }
}
const Ho = 12;
function Xo(t, e, n) {
  let s = n;
  for (let i = 1; i < Ho; i++)
    s = s - t(s) / e(s);
  return s;
}
function Ye(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const qo = ["duration", "bounce"], Zo = ["stiffness", "damping", "mass"];
function rs(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Jo(t) {
  let e = {
    velocity: k.velocity,
    stiffness: k.stiffness,
    damping: k.damping,
    mass: k.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!rs(t, Zo) && rs(t, qo))
    if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * it(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
      e = {
        ...e,
        mass: k.mass,
        stiffness: i,
        damping: o
      };
    } else {
      const n = Go(t);
      e = {
        ...e,
        ...n,
        mass: k.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function pe(t = k.visualDuration, e = k.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: d } = Jo({
    ...n,
    velocity: -/* @__PURE__ */ et(n.velocity || 0)
  }), p = f || 0, y = u / (2 * Math.sqrt(l * c)), x = r - o, g = /* @__PURE__ */ et(Math.sqrt(l / c)), T = Math.abs(x) < 5;
  s || (s = T ? k.restSpeed.granular : k.restSpeed.default), i || (i = T ? k.restDelta.granular : k.restDelta.default);
  let v;
  if (y < 1) {
    const b = Ye(g, y);
    v = (S) => {
      const V = Math.exp(-y * g * S);
      return r - V * ((p + y * g * x) / b * Math.sin(b * S) + x * Math.cos(b * S));
    };
  } else if (y === 1)
    v = (b) => r - Math.exp(-g * b) * (x + (p + g * x) * b);
  else {
    const b = g * Math.sqrt(y * y - 1);
    v = (S) => {
      const V = Math.exp(-y * g * S), P = Math.min(b * S, 300);
      return r - V * ((p + y * g * x) * Math.sinh(P) + b * x * Math.cosh(P)) / b;
    };
  }
  const A = {
    calculatedDuration: d && h || null,
    next: (b) => {
      const S = v(b);
      if (d)
        a.done = b >= h;
      else {
        let V = b === 0 ? p : 0;
        y < 1 && (V = b === 0 ? /* @__PURE__ */ Q(p) : Wi(v, b, S));
        const P = Math.abs(V) <= s, C = Math.abs(r - S) <= i;
        a.done = P && C;
      }
      return a.value = a.done ? r : S, a;
    },
    toString: () => {
      const b = Math.min(Mn(A), me), S = $i((V) => A.next(b * V).value, b, 30);
      return b + "ms " + S;
    },
    toTransition: () => {
    }
  };
  return A;
}
pe.applyToOptions = (t) => {
  const e = zo(t, 100, pe);
  return t.ease = e.ease, t.duration = /* @__PURE__ */ Q(e.duration), t.type = "keyframes", t;
};
function Ge({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = {
    done: !1,
    value: h
  }, d = (P) => a !== void 0 && P < a || l !== void 0 && P > l, p = (P) => a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l;
  let y = n * e;
  const x = h + y, g = r === void 0 ? x : r(x);
  g !== x && (y = g - h);
  const T = (P) => -y * Math.exp(-P / s), v = (P) => g + T(P), A = (P) => {
    const C = T(P), j = v(P);
    f.done = Math.abs(C) <= u, f.value = f.done ? g : j;
  };
  let b, S;
  const V = (P) => {
    d(f.value) && (b = P, S = pe({
      keyframes: [f.value, p(f.value)],
      velocity: Wi(v, P, f.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: o,
      restDelta: u,
      restSpeed: c
    }));
  };
  return V(0), {
    calculatedDuration: null,
    next: (P) => {
      let C = !1;
      return !S && b === void 0 && (C = !0, A(P), V(P)), b !== void 0 && P >= b ? S.next(P - b) : (!C && A(P), f);
    }
  };
}
function Qo(t, e, n) {
  const s = [], i = n || ot.mix || Ui, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || Z : e;
      a = te(l, a);
    }
    s.push(a);
  }
  return s;
}
function ta(t, e, { clamp: n = !0, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (rt(o === e.length, "Both input and output ranges must be the same length", "range-length"), o === 1)
    return () => e[0];
  if (o === 2 && e[0] === e[1])
    return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Qo(e, s, i), l = a.length, u = (c) => {
    if (r && c < t[0])
      return e[0];
    let h = 0;
    if (l > 1)
      for (; h < t.length - 2 && !(c < t[h + 1]); h++)
        ;
    const f = /* @__PURE__ */ Yt(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => u(it(t[0], t[o - 1], c)) : u;
}
function ea(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = /* @__PURE__ */ Yt(0, e, s);
    t.push(O(n, 1, i));
  }
}
function na(t) {
  const e = [0];
  return ea(e, t.length - 1), e;
}
function sa(t, e) {
  return t.map((n) => n * e);
}
function ia(t, e) {
  return t.map(() => e || Ri).splice(0, t.length - 1);
}
function At({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = go(s) ? s.map(ts) : ts(s), o = {
    done: !1,
    value: e[0]
  }, r = sa(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : na(e),
    t
  ), a = ta(r, e, {
    ease: Array.isArray(i) ? i : ia(e, i)
  });
  return {
    calculatedDuration: t,
    next: (l) => (o.value = a(l), o.done = l >= t, o)
  };
}
const ra = (t) => t !== null;
function Dn(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(ra), a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const oa = {
  decay: Ge,
  inertia: Ge,
  tween: At,
  keyframes: At,
  spring: pe
};
function Ki(t) {
  typeof t.type == "string" && (t.type = oa[t.type]);
}
class Rn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const aa = (t) => t / 100;
class kn extends Rn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Y.now() && this.tick(Y.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    Ki(e);
    const { type: n = At, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || At;
    process.env.NODE_ENV !== "production" && l !== At && rt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== At && typeof a[0] != "number" && (this.mixKeyframes = te(aa, Ui(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({
      ...e,
      keyframes: [...a].reverse(),
      velocity: -r
    })), u.calculatedDuration === null && (u.calculatedDuration = Mn(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = !1) {
    const { generator: s, totalDuration: i, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return s.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: f, repeatDelay: d, type: p, onUpdate: y, finalKeyframe: x } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), T = this.playbackSpeed >= 0 ? g < 0 : g > i;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let v = this.currentTime, A = s;
    if (h) {
      const P = Math.min(this.currentTime, i) / a;
      let C = Math.floor(P), j = P % 1;
      !j && P >= 1 && (j = 1), j === 1 && C--, C = Math.min(C, h + 1), !!(C % 2) && (f === "reverse" ? (j = 1 - j, d && (j -= d / a)) : f === "mirror" && (A = r)), v = it(0, 1, j) * a;
    }
    const b = T ? { done: !1, value: c[0] } : A.next(v);
    o && (b.value = o(b.value));
    let { done: S } = b;
    !T && l !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const V = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return V && p !== Ge && (b.value = Dn(c, this.options, x, this.speed)), y && y(b.value), V && this.finish(), b;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return /* @__PURE__ */ et(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ et(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ Q(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(Y.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ et(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: e = Ko, startTime: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), this.options.onPlay?.();
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Y.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
  attachTimeline(e) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
  }
}
function la(t) {
  for (let e = 1; e < t.length; e++)
    t[e] ?? (t[e] = t[e - 1]);
}
const vt = (t) => t * 180 / Math.PI, He = (t) => {
  const e = vt(Math.atan2(t[1], t[0]));
  return Xe(e);
}, ca = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
  rotate: He,
  rotateZ: He,
  skewX: (t) => vt(Math.atan(t[1])),
  skewY: (t) => vt(Math.atan(t[2])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}, Xe = (t) => (t = t % 360, t < 0 && (t += 360), t), os = He, as = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), ls = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), ua = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: as,
  scaleY: ls,
  scale: (t) => (as(t) + ls(t)) / 2,
  rotateX: (t) => Xe(vt(Math.atan2(t[6], t[5]))),
  rotateY: (t) => Xe(vt(Math.atan2(-t[2], t[0]))),
  rotateZ: os,
  rotate: os,
  skewX: (t) => vt(Math.atan(t[4])),
  skewY: (t) => vt(Math.atan(t[1])),
  skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function qe(t) {
  return t.includes("scale") ? 1 : 0;
}
function Ze(t, e) {
  if (!t || t === "none")
    return qe(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n)
    s = ua, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = ca, i = a;
  }
  if (!i)
    return qe(e);
  const o = s[e], r = i[1].split(",").map(fa);
  return typeof o == "function" ? o(r) : r[o];
}
const ha = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return Ze(n, e);
};
function fa(t) {
  return parseFloat(t.trim());
}
const Ft = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], It = new Set(Ft), cs = (t) => t === jt || t === w, da = /* @__PURE__ */ new Set(["x", "y", "z"]), ma = Ft.filter((t) => !da.has(t));
function pa(t) {
  const e = [];
  return ma.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const Tt = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: (t, { transform: e }) => Ze(e, "x"),
  y: (t, { transform: e }) => Ze(e, "y")
};
Tt.translateX = Tt.x;
Tt.translateY = Tt.y;
const xt = /* @__PURE__ */ new Set();
let Je = !1, Qe = !1, tn = !1;
function zi() {
  if (Qe) {
    const t = Array.from(xt).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = pa(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        s.getValue(o)?.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  Qe = !1, Je = !1, xt.forEach((t) => t.complete(tn)), xt.clear();
}
function Yi() {
  xt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Qe = !0);
  });
}
function ga() {
  tn = !0, Yi(), zi(), tn = !1;
}
class On {
  constructor(e, n, s, i, o, r = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (xt.add(this), Je || (Je = !0, M.read(Yi), M.resolveKeyframes(zi))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i?.get(), r = e[e.length - 1];
      if (o !== void 0)
        e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]);
    }
    la(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), xt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (xt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const ya = (t) => t.startsWith("--");
function va(t, e, n) {
  ya(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const Ta = /* @__PURE__ */ Tn(() => window.ScrollTimeline !== void 0), xa = {};
function ba(t, e) {
  const n = /* @__PURE__ */ Tn(t);
  return () => xa[e] ?? n();
}
const Gi = /* @__PURE__ */ ba(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Ut = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, us = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Ut([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Ut([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Ut([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Ut([0.33, 1.53, 0.69, 0.99])
};
function Hi(t, e) {
  if (t)
    return typeof t == "function" ? Gi() ? $i(t, e) : "ease-out" : ki(t) ? Ut(t) : Array.isArray(t) ? t.map((n) => Hi(n, e) || us.easeOut) : us[t];
}
function Pa(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [e]: n
  };
  l && (c.offset = l);
  const h = Hi(a, i);
  Array.isArray(h) && (c.easing = h);
  const f = {
    delay: s,
    duration: i,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: o + 1,
    direction: r === "reverse" ? "alternate" : "normal"
  };
  return u && (f.pseudoElement = u), t.animate(c, f);
}
function Xi(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function wa({ type: t, ...e }) {
  return Xi(t) && Gi() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Sa extends Rn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !e)
      return;
    const { element: n, name: s, keyframes: i, pseudoElement: o, allowFlatten: r = !1, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, rt(typeof e.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = wa(e);
    this.animation = Pa(n, s, i, u, o), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = Dn(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : va(n, s, c), this.animation.cancel();
      }
      l?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ et(Number(e));
  }
  get time() {
    return /* @__PURE__ */ et(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Q(e);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: e, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && Ta() ? (this.animation.timeline = e, Z) : n(this);
  }
}
const qi = {
  anticipate: Ci,
  backInOut: Ei,
  circInOut: Di
};
function Aa(t) {
  return t in qi;
}
function Va(t) {
  typeof t.ease == "string" && Aa(t.ease) && (t.ease = qi[t.ease]);
}
const hs = 10;
class Ea extends Sa {
  constructor(e) {
    Va(e), Ki(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n)
      return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new kn({
      ...r,
      autoplay: !1
    }), l = /* @__PURE__ */ Q(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - hs).value, a.sample(l).value, hs), a.stop();
  }
}
const fs = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(dt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function Ca(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function Ma(t, e, n, s) {
  const i = t[0];
  if (i === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const o = t[t.length - 1], r = fs(i, e), a = fs(o, e);
  return Lt(r === a, `You are trying to animate ${e} from "${i}" to "${o}". "${r ? o : i}" is not an animatable value.`, "value-not-animatable"), !r || !a ? !1 : Ca(t) || (n === "spring" || Xi(n)) && s;
}
function en(t) {
  t.duration = 0, t.type;
}
const Da = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Ra = /* @__PURE__ */ Tn(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function ka(t) {
  const { motionValue: e, name: n, repeatDelay: s, repeatType: i, damping: o, type: r } = t;
  if (!(e?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return Ra() && n && Da.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !s && i !== "mirror" && o !== 0 && r !== "inertia";
}
const Oa = 40;
class La extends Rn {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Y.now();
    const f = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: i,
      repeatDelay: o,
      repeatType: r,
      name: l,
      motionValue: u,
      element: c,
      ...h
    }, d = c?.KeyframeResolver || On;
    this.keyframeResolver = new d(a, (p, y, x) => this.onKeyframesResolved(p, y, f, !x), l, u, c), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = s;
    this.resolvedAt = Y.now(), Ma(e, o, r, a) || ((ot.instantAnimations || !l) && c?.(Dn(e, s, n)), e[0] = e[e.length - 1], en(s), s.repeat = 0);
    const f = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Oa ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...s,
      keyframes: e
    }, d = !u && ka(f) ? new Ea({
      ...f,
      element: f.motionValue.owner.current
    }) : new kn(f);
    d.finished.then(() => this.notifyFinished()).catch(Z), this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = d;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), ga()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const ja = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Fa(t) {
  const e = ja.exec(t);
  if (!e)
    return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
const Ia = 4;
function Zi(t, e, n = 1) {
  rt(n <= Ia, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [s, i] = Fa(t);
  if (!s)
    return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Ti(r) ? parseFloat(r) : r;
  }
  return An(i) ? Zi(i, e, n + 1) : i;
}
function Ln(t, e) {
  return t?.[e] ?? t?.default ?? t;
}
const Ji = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Ft
]), Ba = {
  test: (t) => t === "auto",
  parse: (t) => t
}, Qi = (t) => (e) => e.test(t), tr = [jt, w, nt, ct, Co, Eo, Ba], ds = (t) => tr.find(Qi(t));
function Na(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || bi(t) : !0;
}
const _a = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Ua(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(Vn) || [];
  if (!s)
    return t;
  const i = n.replace(s, "");
  let o = _a.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const $a = /\b([a-z-]*)\(.*?\)/gu, nn = {
  ...dt,
  getAnimatableNone: (t) => {
    const e = t.match($a);
    return e ? e.map(Ua).join(" ") : t;
  }
}, ms = {
  ...jt,
  transform: Math.round
}, Wa = {
  rotate: ct,
  rotateX: ct,
  rotateY: ct,
  rotateZ: ct,
  scale: oe,
  scaleX: oe,
  scaleY: oe,
  scaleZ: oe,
  skew: ct,
  skewX: ct,
  skewY: ct,
  distance: w,
  translateX: w,
  translateY: w,
  translateZ: w,
  x: w,
  y: w,
  z: w,
  perspective: w,
  transformPerspective: w,
  opacity: Gt,
  originX: es,
  originY: es,
  originZ: w
}, jn = {
  // Border props
  borderWidth: w,
  borderTopWidth: w,
  borderRightWidth: w,
  borderBottomWidth: w,
  borderLeftWidth: w,
  borderRadius: w,
  radius: w,
  borderTopLeftRadius: w,
  borderTopRightRadius: w,
  borderBottomRightRadius: w,
  borderBottomLeftRadius: w,
  // Positioning props
  width: w,
  maxWidth: w,
  height: w,
  maxHeight: w,
  top: w,
  right: w,
  bottom: w,
  left: w,
  // Spacing props
  padding: w,
  paddingTop: w,
  paddingRight: w,
  paddingBottom: w,
  paddingLeft: w,
  margin: w,
  marginTop: w,
  marginRight: w,
  marginBottom: w,
  marginLeft: w,
  // Misc
  backgroundPositionX: w,
  backgroundPositionY: w,
  ...Wa,
  zIndex: ms,
  // SVG
  fillOpacity: Gt,
  strokeOpacity: Gt,
  numOctaves: ms
}, Ka = {
  ...jn,
  // Color props
  color: F,
  backgroundColor: F,
  outlineColor: F,
  fill: F,
  stroke: F,
  // Border props
  borderColor: F,
  borderTopColor: F,
  borderRightColor: F,
  borderBottomColor: F,
  borderLeftColor: F,
  filter: nn,
  WebkitFilter: nn
}, er = (t) => Ka[t];
function nr(t, e) {
  let n = er(t);
  return n !== nn && (n = dt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const za = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Ya(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !za.has(o) && Ht(o).values.length && (i = t[s]), s++;
  }
  if (i && n)
    for (const o of e)
      t[o] = nr(n, i);
}
class Ga extends On {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), An(u))) {
        const c = Zi(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Ji.has(s) || e.length !== 2)
      return;
    const [i, o] = e, r = ds(i), a = ds(o);
    if (r !== a)
      if (cs(r) && cs(a))
        for (let l = 0; l < e.length; l++) {
          const u = e[l];
          typeof u == "string" && (e[l] = parseFloat(u));
        }
      else Tt[s] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++)
      (e[i] === null || Na(e[i])) && s.push(i);
    s.length && Ya(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Tt[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, !1);
  }
  measureEndState() {
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current)
      return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1, r = s[o];
    s[o] = Tt[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function Ha(t, e, n) {
  if (t instanceof EventTarget)
    return [t];
  if (typeof t == "string") {
    let s = document;
    const i = n?.[t] ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
const sr = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function ir(t) {
  return xi(t) && "offsetHeight" in t;
}
const ps = 30, Xa = (t) => !isNaN(parseFloat(t));
class qa {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      const i = Y.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = Y.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Xa(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && bn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new xn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), M.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = Y.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > ps)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, ps);
    return Pi(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Rt(t, e) {
  return new qa(t, e);
}
const { schedule: Fn } = /* @__PURE__ */ Oi(queueMicrotask, !1), J = {
  x: !1,
  y: !1
};
function rr() {
  return J.x || J.y;
}
function Za(t) {
  return t === "x" || t === "y" ? J[t] ? null : (J[t] = !0, () => {
    J[t] = !1;
  }) : J.x || J.y ? null : (J.x = J.y = !0, () => {
    J.x = J.y = !1;
  });
}
function or(t, e) {
  const n = Ha(t), s = new AbortController(), i = {
    passive: !0,
    ...e,
    signal: s.signal
  };
  return [n, i, () => s.abort()];
}
function gs(t) {
  return !(t.pointerType === "touch" || rr());
}
function Ja(t, e, n = {}) {
  const [s, i, o] = or(t, n), r = (a) => {
    if (!gs(a))
      return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (h) => {
      gs(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
const ar = (t, e) => e ? t === e ? !0 : ar(t, e.parentElement) : !1, In = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1, Qa = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function tl(t) {
  return Qa.has(t.tagName) || t.tabIndex !== -1;
}
const ue = /* @__PURE__ */ new WeakSet();
function ys(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function Le(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
}
const el = (t, e) => {
  const n = t.currentTarget;
  if (!n)
    return;
  const s = ys(() => {
    if (ue.has(n))
      return;
    Le(n, "down");
    const i = ys(() => {
      Le(n, "up");
    }), o = () => Le(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function vs(t) {
  return In(t) && !rr();
}
function nl(t, e, n = {}) {
  const [s, i, o] = or(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!vs(a))
      return;
    ue.add(l);
    const u = e(l, a), c = (d, p) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), ue.has(l) && ue.delete(l), vs(d) && typeof u == "function" && u(d, { success: p });
    }, h = (d) => {
      c(d, l === window || l === document || n.useGlobalTarget || ar(l, d.target));
    }, f = (d) => {
      c(d, !1);
    };
    window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", f, i);
  };
  return s.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), ir(a) && (a.addEventListener("focus", (u) => el(u, i)), !tl(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function lr(t) {
  return xi(t) && "ownerSVGElement" in t;
}
function sl(t) {
  return lr(t) && t.tagName === "svg";
}
const $ = (t) => !!(t && t.getVelocity), il = [...tr, F, dt], rl = (t) => il.find(Qi(t)), Bn = Ot({
  transformPagePoint: (t) => t,
  isStatic: !1,
  reducedMotion: "never"
});
class ol extends fn.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = n.offsetParent, i = ir(s) && s.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function al({ children: t, isPresent: e, anchorX: n, root: s }) {
  const i = dn(), o = st(null), r = st({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = U(Bn);
  return gi(() => {
    const { width: l, height: u, top: c, left: h, right: f } = r.current;
    if (e || !o.current || !l || !u)
      return;
    const d = n === "left" ? `left: ${h}` : `right: ${f}`;
    o.current.dataset.motionPopId = i;
    const p = document.createElement("style");
    a && (p.nonce = a);
    const y = s ?? document.head;
    return y.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${d}px !important;
            top: ${c}px !important;
          }
        `), () => {
      y.contains(p) && y.removeChild(p);
    };
  }, [e]), R.jsx(ol, { isPresent: e, childRef: o, sizeRef: r, children: fn.cloneElement(t, { ref: o }) });
}
const ll = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a, root: l }) => {
  const u = pn(cl), c = dn();
  let h = !0, f = bt(() => (h = !1, {
    id: c,
    initial: e,
    isPresent: n,
    custom: i,
    onExitComplete: (d) => {
      u.set(d, !0);
      for (const p of u.values())
        if (!p)
          return;
      s && s();
    },
    register: (d) => (u.set(d, !1), () => u.delete(d))
  }), [n, u, s]);
  return o && h && (f = { ...f }), bt(() => {
    u.forEach((d, p) => u.set(p, !1));
  }, [n]), fn.useEffect(() => {
    !n && !u.size && s && s();
  }, [n]), r === "popLayout" && (t = R.jsx(al, { isPresent: n, anchorX: a, root: l, children: t })), R.jsx(xe.Provider, { value: f, children: t });
};
function cl() {
  return /* @__PURE__ */ new Map();
}
function cr(t = !0) {
  const e = U(xe);
  if (e === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = dn();
  Qt(() => {
    if (t)
      return i(o);
  }, [t]);
  const r = Dt(() => t && s && s(o), [o, s, t]);
  return !n && s ? [!1, r] : [!0];
}
const ae = (t) => t.key || "";
function Ts(t) {
  const e = [];
  return Qr.forEach(t, (n) => {
    to(n) && e.push(n);
  }), e;
}
const ul = ({ children: t, custom: e, initial: n = !0, onExitComplete: s, presenceAffectsLayout: i = !0, mode: o = "sync", propagate: r = !1, anchorX: a = "left", root: l }) => {
  const [u, c] = cr(r), h = bt(() => Ts(t), [t]), f = r && !u ? [] : h.map(ae), d = st(!0), p = st(h), y = pn(() => /* @__PURE__ */ new Map()), [x, g] = ut(h), [T, v] = ut(h);
  vi(() => {
    d.current = !1, p.current = h;
    for (let S = 0; S < T.length; S++) {
      const V = ae(T[S]);
      f.includes(V) ? y.delete(V) : y.get(V) !== !0 && y.set(V, !1);
    }
  }, [T, f.length, f.join("-")]);
  const A = [];
  if (h !== x) {
    let S = [...h];
    for (let V = 0; V < T.length; V++) {
      const P = T[V], C = ae(P);
      f.includes(C) || (S.splice(V, 0, P), A.push(P));
    }
    return o === "wait" && A.length && (S = A), v(Ts(S)), g(h), null;
  }
  process.env.NODE_ENV !== "production" && o === "wait" && T.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: b } = U(mn);
  return R.jsx(R.Fragment, { children: T.map((S) => {
    const V = ae(S), P = r && !u ? !1 : h === T || f.includes(V), C = () => {
      if (y.has(V))
        y.set(V, !0);
      else
        return;
      let j = !0;
      y.forEach((K) => {
        K || (j = !1);
      }), j && (b?.(), v(p.current), r && c?.(), s && s());
    };
    return R.jsx(ll, { isPresent: P, initial: !d.current || n ? void 0 : !1, custom: e, presenceAffectsLayout: i, mode: o, root: l, onExitComplete: P ? void 0 : C, anchorX: a, children: S }, V);
  }) });
}, ur = Ot({ strict: !1 }), xs = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, kt = {};
for (const t in xs)
  kt[t] = {
    isEnabled: (e) => xs[t].some((n) => !!e[n])
  };
function hl(t) {
  for (const e in t)
    kt[e] = {
      ...kt[e],
      ...t[e]
    };
}
const fl = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function ge(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || fl.has(t);
}
let hr = (t) => !ge(t);
function dl(t) {
  typeof t == "function" && (hr = (e) => e.startsWith("on") ? !ge(e) : t(e));
}
try {
  dl(require("@emotion/is-prop-valid").default);
} catch {
}
function ml(t, e, n) {
  const s = {};
  for (const i in t)
    i === "values" && typeof t.values == "object" || (hr(i) || n === !0 && ge(i) || !e && !ge(i) || // If trying to use native HTML drag events, forward drag listeners
    t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
const be = /* @__PURE__ */ Ot({});
function Pe(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Xt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const Nn = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], _n = ["initial", ...Nn];
function we(t) {
  return Pe(t.animate) || _n.some((e) => Xt(t[e]));
}
function fr(t) {
  return !!(we(t) || t.variants);
}
function pl(t, e) {
  if (we(t)) {
    const { initial: n, animate: s } = t;
    return {
      initial: n === !1 || Xt(n) ? n : void 0,
      animate: Xt(s) ? s : void 0
    };
  }
  return t.inherit !== !1 ? e : {};
}
function gl(t) {
  const { initial: e, animate: n } = pl(t, U(be));
  return bt(() => ({ initial: e, animate: n }), [bs(e), bs(n)]);
}
function bs(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
const qt = {};
function yl(t) {
  for (const e in t)
    qt[e] = t[e], Sn(e) && (qt[e].isCSSVariable = !0);
}
function dr(t, { layout: e, layoutId: n }) {
  return It.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!qt[t] || t === "opacity");
}
const vl = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Tl = Ft.length;
function xl(t, e, n) {
  let s = "", i = !0;
  for (let o = 0; o < Tl; o++) {
    const r = Ft[o], a = t[r];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = sr(a, jn[r]);
      if (!l) {
        i = !1;
        const c = vl[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function Un(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = !1, a = !1;
  for (const l in e) {
    const u = e[l];
    if (It.has(l)) {
      r = !0;
      continue;
    } else if (Sn(l)) {
      i[l] = u;
      continue;
    } else {
      const c = sr(u, jn[l]);
      l.startsWith("origin") ? (a = !0, o[l] = c) : s[l] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = xl(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const $n = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function mr(t, e, n) {
  for (const s in e)
    !$(e[s]) && !dr(s, n) && (t[s] = e[s]);
}
function bl({ transformTemplate: t }, e) {
  return bt(() => {
    const n = $n();
    return Un(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Pl(t, e) {
  const n = t.style || {}, s = {};
  return mr(s, n, t), Object.assign(s, bl(t, e)), s;
}
function wl(t, e) {
  const n = {}, s = Pl(t, e);
  return t.drag && t.dragListener !== !1 && (n.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const Sl = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Al = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Vl(t, e, n = 1, s = 0, i = !0) {
  t.pathLength = 1;
  const o = i ? Sl : Al;
  t[o.offset] = w.transform(-s);
  const r = w.transform(e), a = w.transform(n);
  t[o.array] = `${r} ${a}`;
}
function pr(t, {
  attrX: e,
  attrY: n,
  attrScale: s,
  pathLength: i,
  pathSpacing: o = 1,
  pathOffset: r = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  if (Un(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: f } = t;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = c?.transformBox ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), s !== void 0 && (h.scale = s), i !== void 0 && Vl(h, i, o, r, !1);
}
const gr = () => ({
  ...$n(),
  attrs: {}
}), yr = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function El(t, e, n, s) {
  const i = bt(() => {
    const o = gr();
    return pr(o, e, yr(s), t.transformTemplate, t.style), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [e]);
  if (t.style) {
    const o = {};
    mr(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
const Cl = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function Wn(t) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof t != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    t.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Cl.indexOf(t) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(t))
    )
  );
}
function Ml(t, e, n, { latestValues: s }, i, o = !1) {
  const a = (Wn(t) ? El : wl)(e, s, i, t), l = ml(e, typeof t == "string", o), u = t !== yi ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = bt(() => $(c) ? c.get() : c, [c]);
  return eo(t, {
    ...u,
    children: h
  });
}
function Ps(t) {
  const e = [{}, {}];
  return t?.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function Kn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = Ps(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = Ps(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function he(t) {
  return $(t) ? t.get() : t;
}
function Dl({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return {
    latestValues: Rl(n, s, i, t),
    renderState: e()
  };
}
function Rl(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const f in o)
    i[f] = he(o[f]);
  let { initial: r, animate: a } = t;
  const l = we(t), u = fr(t);
  e && u && !l && t.inherit !== !1 && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || r === !1;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !Pe(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const p = Kn(t, f[d]);
      if (p) {
        const { transitionEnd: y, transition: x, ...g } = p;
        for (const T in g) {
          let v = g[T];
          if (Array.isArray(v)) {
            const A = c ? v.length - 1 : 0;
            v = v[A];
          }
          v !== null && (i[T] = v);
        }
        for (const T in y)
          i[T] = y[T];
      }
    }
  }
  return i;
}
const vr = (t) => (e, n) => {
  const s = U(be), i = U(xe), o = () => Dl(t, e, s, i);
  return n ? o() : pn(o);
};
function zn(t, e, n) {
  const { style: s } = t, i = {};
  for (const o in s)
    ($(s[o]) || e.style && $(e.style[o]) || dr(o, t) || n?.getValue(o)?.liveStyle !== void 0) && (i[o] = s[o]);
  return i;
}
const kl = /* @__PURE__ */ vr({
  scrapeMotionValuesFromProps: zn,
  createRenderState: $n
});
function Tr(t, e, n) {
  const s = zn(t, e, n);
  for (const i in t)
    if ($(t[i]) || $(e[i])) {
      const o = Ft.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      s[o] = t[i];
    }
  return s;
}
const Ol = /* @__PURE__ */ vr({
  scrapeMotionValuesFromProps: Tr,
  createRenderState: gr
}), Ll = Symbol.for("motionComponentSymbol");
function Vt(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function jl(t, e, n) {
  return Dt(
    (s) => {
      s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : Vt(n) && (n.current = s));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [e]
  );
}
const Yn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Fl = "framerAppearId", xr = "data-" + Yn(Fl), br = Ot({});
function Il(t, e, n, s, i) {
  const { visualElement: o } = U(be), r = U(ur), a = U(xe), l = U(Bn).reducedMotion, u = st(null);
  s = s || r.renderer, !u.current && s && (u.current = s(t, {
    visualState: e,
    parent: o,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, h = U(br);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && Bl(u.current, n, i, h);
  const f = st(!1);
  gi(() => {
    c && f.current && c.update(n, a);
  });
  const d = n[xr], p = st(!!d && !window.MotionHandoffIsComplete?.(d) && window.MotionHasOptimisedAnimation?.(d));
  return vi(() => {
    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), p.current && c.animationState && c.animationState.animateChanges());
  }), Qt(() => {
    c && (!p.current && c.animationState && c.animationState.animateChanges(), p.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(d);
    }), p.current = !1));
  }), c;
}
function Bl(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : Pr(t.parent)), t.projection.setOptions({
    layoutId: i,
    layout: o,
    alwaysMeasureLayout: !!r || a && Vt(a),
    visualElement: t,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: s,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function Pr(t) {
  if (t)
    return t.options.allowProjection !== !1 ? t.projection : Pr(t.parent);
}
function je(t, { forwardMotionProps: e = !1 } = {}, n, s) {
  n && hl(n);
  const i = Wn(t) ? Ol : kl;
  function o(a, l) {
    let u;
    const c = {
      ...U(Bn),
      ...a,
      layoutId: Nl(a)
    }, { isStatic: h } = c, f = gl(a), d = i(a, h);
    if (!h && gn) {
      _l(c, n);
      const p = Ul(c);
      u = p.MeasureLayout, f.visualElement = Il(t, d, c, s, p.ProjectionNode);
    }
    return R.jsxs(be.Provider, { value: f, children: [u && f.visualElement ? R.jsx(u, { visualElement: f.visualElement, ...c }) : null, Ml(t, a, jl(d, f.visualElement, l), d, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = no(o);
  return r[Ll] = t, r;
}
function Nl({ layoutId: t }) {
  const e = U(mn).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function _l(t, e) {
  const n = U(ur).strict;
  if (process.env.NODE_ENV !== "production" && e && n) {
    const s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    t.ignoreStrict ? Lt(!1, s, "lazy-strict-mode") : rt(!1, s, "lazy-strict-mode");
  }
}
function Ul(t) {
  const { drag: e, layout: n } = kt;
  if (!e && !n)
    return {};
  const s = { ...e, ...n };
  return {
    MeasureLayout: e?.isEnabled(t) || n?.isEnabled(t) ? s.MeasureLayout : void 0,
    ProjectionNode: s.ProjectionNode
  };
}
function $l(t, e) {
  if (typeof Proxy > "u")
    return je;
  const n = /* @__PURE__ */ new Map(), s = (o, r) => je(o, r, t, e), i = (o, r) => (process.env.NODE_ENV !== "production" && bn(!1, "motion() is deprecated. Use motion.create() instead."), s(o, r));
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (o, r) => r === "create" ? s : (n.has(r) || n.set(r, je(r, void 0, t, e)), n.get(r))
  });
}
function wr({ top: t, left: e, right: n, bottom: s }) {
  return {
    x: { min: e, max: n },
    y: { min: t, max: s }
  };
}
function Wl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function Kl(t, e) {
  if (!e)
    return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: s.y,
    right: s.x
  };
}
function Fe(t) {
  return t === void 0 || t === 1;
}
function sn({ scale: t, scaleX: e, scaleY: n }) {
  return !Fe(t) || !Fe(e) || !Fe(n);
}
function gt(t) {
  return sn(t) || Sr(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Sr(t) {
  return ws(t.x) || ws(t.y);
}
function ws(t) {
  return t && t !== "0%";
}
function ye(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function Ss(t, e, n, s, i) {
  return i !== void 0 && (t = ye(t, i, s)), ye(t, n, s) + e;
}
function rn(t, e = 0, n = 1, s, i) {
  t.min = Ss(t.min, e, n, s, i), t.max = Ss(t.max, e, n, s, i);
}
function Ar(t, { x: e, y: n }) {
  rn(t.x, e.translate, e.scale, e.originPoint), rn(t.y, n.translate, n.scale, n.originPoint);
}
const As = 0.999999999999, Vs = 1.0000000000001;
function zl(t, e, n, s = !1) {
  const i = n.length;
  if (!i)
    return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && Ct(t, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Ar(t, r)), s && gt(o.latestValues) && Ct(t, o.latestValues));
  }
  e.x < Vs && e.x > As && (e.x = 1), e.y < Vs && e.y > As && (e.y = 1);
}
function Et(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Es(t, e, n, s, i = 0.5) {
  const o = O(t.min, t.max, i);
  rn(t, e, n, o, s);
}
function Ct(t, e) {
  Es(t.x, e.x, e.scaleX, e.scale, e.originX), Es(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function Vr(t, e) {
  return wr(Kl(t.getBoundingClientRect(), e));
}
function Yl(t, e, n) {
  const s = Vr(t, n), { scroll: i } = e;
  return i && (Et(s.x, i.offset.x), Et(s.y, i.offset.y)), s;
}
const Cs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Mt = () => ({
  x: Cs(),
  y: Cs()
}), Ms = () => ({ min: 0, max: 0 }), L = () => ({
  x: Ms(),
  y: Ms()
}), on = { current: null }, Er = { current: !1 };
function Gl() {
  if (Er.current = !0, !!gn)
    if (window.matchMedia) {
      const t = window.matchMedia("(prefers-reduced-motion)"), e = () => on.current = t.matches;
      t.addEventListener("change", e), e();
    } else
      on.current = !1;
}
const Hl = /* @__PURE__ */ new WeakMap();
function Xl(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if ($(i))
      t.addValue(s, i);
    else if ($(o))
      t.addValue(s, Rt(i, { owner: t }));
    else if (o !== i)
      if (t.hasValue(s)) {
        const r = t.getValue(s);
        r.liveStyle === !0 ? r.jump(i) : r.hasAnimated || r.set(i);
      } else {
        const r = t.getStaticValue(s);
        t.addValue(s, Rt(r !== void 0 ? r : i, { owner: t }));
      }
  }
  for (const s in n)
    e[s] === void 0 && t.removeValue(s);
  return e;
}
const Ds = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class ql {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = On, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Y.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, M.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = we(n), this.isVariantNode = fr(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in h) {
      const d = h[f];
      l[f] !== void 0 && $(d) && d.set(l[f]);
    }
  }
  mount(e) {
    this.current = e, Hl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), Er.current || Gl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : on.current, process.env.NODE_ENV !== "production" && bn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), ft(this.notifyUpdate), ft(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const e in this.events)
      this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = It.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && M.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in kt) {
      const n = kt[e];
      if (!n)
        continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : L();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Ds.length; s++) {
      const i = Ds[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = Xl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e])
      return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = Rt(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(e, n) {
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Ti(s) || bi(s)) ? s = parseFloat(s) : !rl(s) && dt.test(n) && (s = nr(e, n)), this.setBaseTarget(e, $(s) ? s.get() : s)), $(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(e) {
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const o = Kn(this.props, n, this.presenceContext?.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0)
      return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !$(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new xn()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    Fn.render(this.render);
  }
}
class Cr extends ql {
  constructor() {
    super(...arguments), this.KeyframeResolver = Ga;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    $(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Mr(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e)
    o[r] = e[r];
  i?.applyProjectionStyles(o, s);
  for (r in n)
    o.setProperty(r, n[r]);
}
function Zl(t) {
  return window.getComputedStyle(t);
}
class Jl extends Cr {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Mr;
  }
  readValueFromInstance(e, n) {
    if (It.has(n))
      return this.projection?.isProjecting ? qe(n) : ha(e, n);
    {
      const s = Zl(e), i = (Sn(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return Vr(e, n);
  }
  build(e, n, s) {
    Un(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return zn(e, n, s);
  }
}
const Dr = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ql(t, e, n, s) {
  Mr(t, e, void 0, s);
  for (const i in e.attrs)
    t.setAttribute(Dr.has(i) ? i : Yn(i), e.attrs[i]);
}
class tc extends Cr {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = L;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (It.has(n)) {
      const s = er(n);
      return s && s.default || 0;
    }
    return n = Dr.has(n) ? n : Yn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Tr(e, n, s);
  }
  build(e, n, s) {
    pr(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    Ql(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = yr(e.tagName), super.mount(e);
  }
}
const ec = (t, e) => Wn(t) ? new tc(e) : new Jl(e, {
  allowProjection: t !== yi
});
function Zt(t, e, n) {
  const s = t.getProps();
  return Kn(s, e, n !== void 0 ? n : s.custom, t);
}
const an = (t) => Array.isArray(t);
function nc(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, Rt(n));
}
function sc(t) {
  return an(t) ? t[t.length - 1] || 0 : t;
}
function ic(t, e) {
  const n = Zt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = sc(o[r]);
    nc(t, r, a);
  }
}
function rc(t) {
  return !!($(t) && t.add);
}
function ln(t, e) {
  const n = t.getValue("willChange");
  if (rc(n))
    return n.add(e);
  if (!n && ot.WillChange) {
    const s = new ot.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
function Rr(t) {
  return t.props[xr];
}
const oc = (t) => t !== null;
function ac(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(oc), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const lc = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, cc = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), uc = {
  type: "keyframes",
  duration: 0.8
}, hc = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, fc = (t, { keyframes: e }) => e.length > 2 ? uc : It.has(t) ? t.startsWith("scale") ? cc(e[1]) : lc : hc;
function dc({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Gn = (t, e, n, s = {}, i, o) => (r) => {
  const a = Ln(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - /* @__PURE__ */ Q(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      e.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      r(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: o ? void 0 : i
  };
  dc(a) || Object.assign(c, fc(t, c)), c.duration && (c.duration = /* @__PURE__ */ Q(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ Q(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (en(c), c.delay === 0 && (h = !0)), (ot.instantAnimations || ot.skipAnimations) && (h = !0, en(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const f = ac(c.keyframes, a);
    if (f !== void 0) {
      M.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new kn(c) : new La(c);
};
function mc({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function kr(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  s && (o = s);
  const l = [], u = i && t.animationState && t.animationState.getState()[i];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), f = a[c];
    if (f === void 0 || u && mc(u, c))
      continue;
    const d = {
      delay: n,
      ...Ln(o || {}, c)
    }, p = h.get();
    if (p !== void 0 && !h.isAnimating && !Array.isArray(f) && f === p && !d.velocity)
      continue;
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = Rr(t);
      if (g) {
        const T = window.MotionHandoffAnimation(g, c, M);
        T !== null && (d.startTime = T, y = !0);
      }
    }
    ln(t, c), h.start(Gn(c, h, f, t.shouldReduceMotion && Ji.has(c) ? { type: !1 } : d, t, y));
    const x = h.animation;
    x && l.push(x);
  }
  return r && Promise.all(l).then(() => {
    M.update(() => {
      r && ic(t, r);
    });
  }), l;
}
function cn(t, e, n = {}) {
  const s = Zt(t, e, n.type === "exit" ? t.presenceContext?.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(kr(t, s, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: h } = i;
    return pc(t, e, l, u, c, h, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => u());
  } else
    return Promise.all([o(), r(n.delay)]);
}
function pc(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [], l = t.variantChildren.size, u = (l - 1) * i, c = typeof s == "function", h = c ? (f) => s(f, l) : (
    // Support deprecated staggerChildren
    o === 1 ? (f = 0) => f * i : (f = 0) => u - f * i
  );
  return Array.from(t.variantChildren).sort(gc).forEach((f, d) => {
    f.notify("AnimationStart", e), a.push(cn(f, e, {
      ...r,
      delay: n + (c ? 0 : s) + h(d)
    }).then(() => f.notify("AnimationComplete", e)));
  }), Promise.all(a);
}
function gc(t, e) {
  return t.sortNodePosition(e);
}
function yc(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => cn(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string")
    s = cn(t, e, n);
  else {
    const i = typeof e == "function" ? Zt(t, e, n.custom) : e;
    s = Promise.all(kr(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Or(t, e) {
  if (!Array.isArray(e))
    return !1;
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
const vc = _n.length;
function Lr(t) {
  if (!t)
    return;
  if (!t.isControllingVariants) {
    const n = t.parent ? Lr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < vc; n++) {
    const s = _n[n], i = t.props[s];
    (Xt(i) || i === !1) && (e[s] = i);
  }
  return e;
}
const Tc = [...Nn].reverse(), xc = Nn.length;
function bc(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => yc(t, n, s)));
}
function Pc(t) {
  let e = bc(t), n = Rs(), s = !0;
  const i = (l) => (u, c) => {
    const h = Zt(t, c, l === "exit" ? t.presenceContext?.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: d, ...p } = h;
      u = { ...u, ...p, ...d };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = Lr(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let d = {}, p = 1 / 0;
    for (let x = 0; x < xc; x++) {
      const g = Tc[x], T = n[g], v = u[g] !== void 0 ? u[g] : c[g], A = Xt(v), b = g === l ? T.isActive : null;
      b === !1 && (p = x);
      let S = v === c[g] && v !== u[g] && A;
      if (S && s && t.manuallyAnimateOnMount && (S = !1), T.protectedKeys = { ...d }, // If it isn't active and hasn't *just* been set as inactive
      !T.isActive && b === null || // If we didn't and don't have any defined prop for this animation type
      !v && !T.prevProp || // Or if the prop doesn't define an animation
      Pe(v) || typeof v == "boolean")
        continue;
      const V = wc(T.prevProp, v);
      let P = V || // If we're making this variant active, we want to always make it active
      g === l && T.isActive && !S && A || // If we removed a higher-priority variant (i is in reverse order)
      x > p && A, C = !1;
      const j = Array.isArray(v) ? v : [v];
      let K = j.reduce(i(g), {});
      b === !1 && (K = {});
      const { prevResolvedValues: z = {} } = T, G = {
        ...z,
        ...K
      }, at = (I) => {
        P = !0, f.has(I) && (C = !0, f.delete(I)), T.needsAnimating[I] = !0;
        const H = t.getValue(I);
        H && (H.liveStyle = !1);
      };
      for (const I in G) {
        const H = K[I], Pt = z[I];
        if (d.hasOwnProperty(I))
          continue;
        let m = !1;
        an(H) && an(Pt) ? m = !Or(H, Pt) : m = H !== Pt, m ? H != null ? at(I) : f.add(I) : H !== void 0 && f.has(I) ? at(I) : T.protectedKeys[I] = !0;
      }
      T.prevProp = v, T.prevResolvedValues = K, T.isActive && (d = { ...d, ...K }), s && t.blockInitialAnimation && (P = !1), P && (!(S && V) || C) && h.push(...j.map((I) => ({
        animation: I,
        options: { type: g }
      })));
    }
    if (f.size) {
      const x = {};
      if (typeof u.initial != "boolean") {
        const g = Zt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (x.transition = g.transition);
      }
      f.forEach((g) => {
        const T = t.getBaseTarget(g), v = t.getValue(g);
        v && (v.liveStyle = !0), x[g] = T ?? null;
      }), h.push({ animation: x });
    }
    let y = !!h.length;
    return s && (u.initial === !1 || u.initial === u.animate) && !t.manuallyAnimateOnMount && (y = !1), s = !1, y ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    if (n[l].isActive === u)
      return Promise.resolve();
    t.variantChildren?.forEach((h) => h.animationState?.setActive(l, u)), n[l].isActive = u;
    const c = r(l);
    for (const h in n)
      n[h].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: r,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Rs(), s = !0;
    }
  };
}
function wc(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Or(e, t) : !1;
}
function pt(t = !1) {
  return {
    isActive: t,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Rs() {
  return {
    animate: pt(!0),
    whileInView: pt(),
    whileHover: pt(),
    whileTap: pt(),
    whileDrag: pt(),
    whileFocus: pt(),
    exit: pt()
  };
}
class mt {
  constructor(e) {
    this.isMounted = !1, this.node = e;
  }
  update() {
  }
}
class Sc extends mt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(e) {
    super(e), e.animationState || (e.animationState = Pc(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Pe(e) && (this.unmountControls = e.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Ac = 0;
class Vc extends mt {
  constructor() {
    super(...arguments), this.id = Ac++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s)
      return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Ec = {
  animation: {
    Feature: Sc
  },
  exit: {
    Feature: Vc
  }
};
function Jt(t, e, n, s = { passive: !0 }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function se(t) {
  return {
    point: {
      x: t.pageX,
      y: t.pageY
    }
  };
}
const Cc = (t) => (e) => In(e) && t(e, se(e));
function Wt(t, e, n, s) {
  return Jt(t, e, Cc(n), s);
}
const jr = 1e-4, Mc = 1 - jr, Dc = 1 + jr, Fr = 0.01, Rc = 0 - Fr, kc = 0 + Fr;
function W(t) {
  return t.max - t.min;
}
function Oc(t, e, n) {
  return Math.abs(t - e) <= n;
}
function ks(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = O(e.min, e.max, t.origin), t.scale = W(n) / W(e), t.translate = O(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Mc && t.scale <= Dc || isNaN(t.scale)) && (t.scale = 1), (t.translate >= Rc && t.translate <= kc || isNaN(t.translate)) && (t.translate = 0);
}
function Kt(t, e, n, s) {
  ks(t.x, e.x, n.x, s ? s.originX : void 0), ks(t.y, e.y, n.y, s ? s.originY : void 0);
}
function Os(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + W(e);
}
function Lc(t, e, n) {
  Os(t.x, e.x, n.x), Os(t.y, e.y, n.y);
}
function Ls(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + W(e);
}
function zt(t, e, n) {
  Ls(t.x, e.x, n.x), Ls(t.y, e.y, n.y);
}
function q(t) {
  return [t("x"), t("y")];
}
const Ir = ({ current: t }) => t ? t.ownerDocument.defaultView : null, js = (t, e) => Math.abs(t - e);
function jc(t, e) {
  const n = js(t.x, e.x), s = js(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class Br {
  constructor(e, n, { transformPagePoint: s, contextWindow: i = window, dragSnapToOrigin: o = !1, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Be(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = jc(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!d && !p)
        return;
      const { point: y } = f, { timestamp: x } = B;
      this.history.push({ ...y, timestamp: x });
      const { onStart: g, onMove: T } = this.handlers;
      d || (g && g(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), T && T(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Ie(d, this.transformPagePoint), M.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: y, resumeAnimation: x } = this.handlers;
      if (this.dragSnapToOrigin && x && x(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const g = Be(f.type === "pointercancel" ? this.lastMoveEventInfo : Ie(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(f, g), y && y(f, g);
    }, !In(e))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.distanceThreshold = r, this.contextWindow = i || window;
    const a = se(e), l = Ie(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = B;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, Be(l, this.history)), this.removeListeners = te(Wt(this.contextWindow, "pointermove", this.handlePointerMove), Wt(this.contextWindow, "pointerup", this.handlePointerUp), Wt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), ft(this.updatePoint);
  }
}
function Ie(t, e) {
  return e ? { point: e(t.point) } : t;
}
function Fs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function Be({ point: t }, e) {
  return {
    point: t,
    delta: Fs(t, Nr(e)),
    offset: Fs(t, Fc(e)),
    velocity: Ic(e, 0.1)
  };
}
function Fc(t) {
  return t[0];
}
function Nr(t) {
  return t[t.length - 1];
}
function Ic(t, e) {
  if (t.length < 2)
    return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = Nr(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > /* @__PURE__ */ Q(e))); )
    n--;
  if (!s)
    return { x: 0, y: 0 };
  const o = /* @__PURE__ */ et(i.timestamp - s.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const r = {
    x: (i.x - s.x) / o,
    y: (i.y - s.y) / o
  };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Bc(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? O(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? O(n, t, s.max) : Math.min(t, n)), t;
}
function Is(t, e, n) {
  return {
    min: e !== void 0 ? t.min + e : void 0,
    max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0
  };
}
function Nc(t, { top: e, left: n, bottom: s, right: i }) {
  return {
    x: Is(t.x, n, i),
    y: Is(t.y, e, s)
  };
}
function Bs(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function _c(t, e) {
  return {
    x: Bs(t.x, e.x),
    y: Bs(t.y, e.y)
  };
}
function Uc(t, e) {
  let n = 0.5;
  const s = W(t), i = W(e);
  return i > s ? n = /* @__PURE__ */ Yt(e.min, e.max - s, t.min) : s > i && (n = /* @__PURE__ */ Yt(t.min, t.max - i, e.min)), it(0, 1, n);
}
function $c(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const un = 0.35;
function Wc(t = un) {
  return t === !1 ? t = 0 : t === !0 && (t = un), {
    x: Ns(t, "left", "right"),
    y: Ns(t, "top", "bottom")
  };
}
function Ns(t, e, n) {
  return {
    min: _s(t, e),
    max: _s(t, n)
  };
}
function _s(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const Kc = /* @__PURE__ */ new WeakMap();
class zc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = L(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = !1, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const o = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(se(h).point);
    }, r = (h, f) => {
      const { drag: d, dragPropagation: p, onDragStart: y } = this.getProps();
      if (d && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = Za(d), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), q((g) => {
        let T = this.getAxisMotionValue(g).get() || 0;
        if (nt.test(T)) {
          const { projection: v } = this.visualElement;
          if (v && v.layout) {
            const A = v.layout.layoutBox[g];
            A && (T = W(A) * (parseFloat(T) / 100));
          }
        }
        this.originPoint[g] = T;
      }), y && M.postRender(() => y(h, f)), ln(this.visualElement, "transform");
      const { animationState: x } = this.visualElement;
      x && x.setActive("whileDrag", !0);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: y, onDrag: x } = this.getProps();
      if (!d && !this.openDragLock)
        return;
      const { offset: g } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = Yc(g), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, g), this.updateAxis("y", f.point, g), this.visualElement.render(), x && x(h, f);
    }, l = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => q((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Br(e, {
      onSessionStart: o,
      onStart: r,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: s,
      contextWindow: Ir(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(e, n) {
    const s = e || this.latestPointerEvent, i = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !s)
      return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && M.postRender(() => a(s, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !le(e, i, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = Bc(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    const { dragConstraints: e, dragElastic: n } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    e && Vt(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = Nc(s.layoutBox, e) : this.constraints = !1, this.elastic = Wc(n), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && q((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = $c(s.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !Vt(e))
      return !1;
    const s = e.current;
    rt(s !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const o = Yl(s, i.root, this.visualElement.getTransformPagePoint());
    let r = _c(i.layout.layoutBox, o);
    if (n) {
      const a = n(Wl(r));
      this.hasMutatedConstraints = !!a, a && (r = wr(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = q((c) => {
      if (!le(c, n, this.currentDirection))
        return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const f = i ? 200 : 1e6, d = i ? 40 : 1e7, p = {
        type: "inertia",
        velocity: s ? e[c] : 0,
        bounceStiffness: f,
        bounceDamping: d,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...h
      };
      return this.startAxisValueAnimation(c, p);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return ln(this.visualElement, e), s.start(Gn(e, s, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    q((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    q((e) => this.getAxisMotionValue(e).animation?.pause());
  }
  getAnimationState(e) {
    return this.getAxisMotionValue(e).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    q((n) => {
      const { drag: s } = this.getProps();
      if (!le(n, s, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - O(r, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!Vt(n) || !s || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    q((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[r] = Uc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), q((r) => {
      if (!le(r, e, null))
        return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(O(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Kc.set(this.visualElement, this);
    const e = this.visualElement.current, n = Wt(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      Vt(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), M.read(s);
    const r = Jt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (q((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: i = !1, dragConstraints: o = !1, dragElastic: r = un, dragMomentum: a = !0 } = e;
    return {
      ...e,
      drag: n,
      dragDirectionLock: s,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: r,
      dragMomentum: a
    };
  }
}
function le(t, e, n) {
  return (e === !0 || e === t) && (n === null || n === t);
}
function Yc(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class Gc extends mt {
  constructor(e) {
    super(e), this.removeGroupControls = Z, this.removeListeners = Z, this.controls = new zc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Z;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Us = (t) => (e, n) => {
  t && M.postRender(() => t(e, n));
};
class Hc extends mt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Z;
  }
  onPointerDown(e) {
    this.session = new Br(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ir(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Us(e),
      onStart: Us(n),
      onMove: s,
      onEnd: (o, r) => {
        delete this.session, i && M.postRender(() => i(o, r));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Wt(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const fe = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function $s(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const _t = {
  correct: (t, e) => {
    if (!e.target)
      return t;
    if (typeof t == "string")
      if (w.test(t))
        t = parseFloat(t);
      else
        return t;
    const n = $s(t, e.target.x), s = $s(t, e.target.y);
    return `${n}% ${s}%`;
  }
}, Xc = {
  correct: (t, { treeScale: e, projectionDelta: n }) => {
    const s = t, i = dt.parse(t);
    if (i.length > 5)
      return s;
    const o = dt.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
    i[0 + r] /= a, i[1 + r] /= l;
    const u = O(a, l, 0.5);
    return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
  }
};
let Ws = !1;
class qc extends so {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    yl(Zc), o && (n.group && n.group.add(o), s && s.register && i && s.register(o), Ws && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), fe.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, { projection: r } = s;
    return r && (r.isPresent = o, Ws = !0, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || M.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), Fn.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function _r(t) {
  const [e, n] = cr(), s = U(mn);
  return R.jsx(qc, { ...t, layoutGroup: s, switchLayoutGroup: U(br), isPresent: e, safeToRemove: n });
}
const Zc = {
  borderRadius: {
    ..._t,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: _t,
  borderTopRightRadius: _t,
  borderBottomLeftRadius: _t,
  borderBottomRightRadius: _t,
  boxShadow: Xc
};
function Jc(t, e, n) {
  const s = $(t) ? t : Rt(t);
  return s.start(Gn("", s, e, n)), s.animation;
}
const Qc = (t, e) => t.depth - e.depth;
class tu {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(e) {
    yn(this.children, e), this.isDirty = !0;
  }
  remove(e) {
    vn(this.children, e), this.isDirty = !0;
  }
  forEach(e) {
    this.isDirty && this.children.sort(Qc), this.isDirty = !1, this.children.forEach(e);
  }
}
function eu(t, e) {
  const n = Y.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (ft(s), t(o - e));
  };
  return M.setup(s, !0), () => ft(s);
}
const Ur = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], nu = Ur.length, Ks = (t) => typeof t == "string" ? parseFloat(t) : t, zs = (t) => typeof t == "number" || w.test(t);
function su(t, e, n, s, i, o) {
  i ? (t.opacity = O(0, n.opacity ?? 1, iu(s)), t.opacityExit = O(e.opacity ?? 1, 0, ru(s))) : o && (t.opacity = O(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < nu; r++) {
    const a = `border${Ur[r]}Radius`;
    let l = Ys(e, a), u = Ys(n, a);
    if (l === void 0 && u === void 0)
      continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || zs(l) === zs(u) ? (t[a] = Math.max(O(Ks(l), Ks(u), s), 0), (nt.test(u) || nt.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = O(e.rotate || 0, n.rotate || 0, s));
}
function Ys(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const iu = /* @__PURE__ */ $r(0, 0.5, Mi), ru = /* @__PURE__ */ $r(0.5, 0.95, Z);
function $r(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(/* @__PURE__ */ Yt(t, e, s));
}
function Gs(t, e) {
  t.min = e.min, t.max = e.max;
}
function X(t, e) {
  Gs(t.x, e.x), Gs(t.y, e.y);
}
function Hs(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function Xs(t, e, n, s, i) {
  return t -= e, t = ye(t, 1 / n, s), i !== void 0 && (t = ye(t, 1 / i, s)), t;
}
function ou(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (nt.test(e) && (e = parseFloat(e), e = O(r.min, r.max, e / 100) - r.min), typeof e != "number")
    return;
  let a = O(o.min, o.max, s);
  t === o && (a -= e), t.min = Xs(t.min, e, n, a, i), t.max = Xs(t.max, e, n, a, i);
}
function qs(t, e, [n, s, i], o, r) {
  ou(t, e[n], e[s], e[i], e.scale, o, r);
}
const au = ["x", "scaleX", "originX"], lu = ["y", "scaleY", "originY"];
function Zs(t, e, n, s) {
  qs(t.x, e, au, n ? n.x : void 0, s ? s.x : void 0), qs(t.y, e, lu, n ? n.y : void 0, s ? s.y : void 0);
}
function Js(t) {
  return t.translate === 0 && t.scale === 1;
}
function Wr(t) {
  return Js(t.x) && Js(t.y);
}
function Qs(t, e) {
  return t.min === e.min && t.max === e.max;
}
function cu(t, e) {
  return Qs(t.x, e.x) && Qs(t.y, e.y);
}
function ti(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function Kr(t, e) {
  return ti(t.x, e.x) && ti(t.y, e.y);
}
function ei(t) {
  return W(t.x) / W(t.y);
}
function ni(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class uu {
  constructor() {
    this.members = [];
  }
  add(e) {
    yn(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (vn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0)
      return !1;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), !0) : !1;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = !0), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      const { crossfade: i } = e.options;
      i === !1 && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function hu(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = n?.z || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: d, skewY: p } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), p && (s += `skewY(${p}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const Ne = ["", "X", "Y", "Z"], fu = 1e3;
let du = 0;
function _e(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function zr(t) {
  if (t.hasCheckedOptimisedAppear = !0, t.root === t)
    return;
  const { visualElement: e } = t.options;
  if (!e)
    return;
  const n = Rr(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", M, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && zr(s);
}
function Yr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e?.()) {
      this.id = du++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(gu), this.nodes.forEach(xu), this.nodes.forEach(bu), this.nodes.forEach(yu);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new tu());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new xn()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    /**
     * Lifecycles
     */
    mount(r) {
      if (this.instance)
        return;
      this.isSVG = lr(r) && !sl(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), t) {
        let c, h = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        M.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const d = window.innerWidth;
          d !== h && (h = d, this.root.updateBlockedByResize = !0, c && c(), c = eu(f, 250), fe.hasAnimatedSinceResize && (fe.hasAnimatedSinceResize = !1, this.nodes.forEach(ri)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: d }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || Vu, { onLayoutAnimationStart: y, onLayoutAnimationComplete: x } = u.getProps(), g = !this.targetLayout || !Kr(this.targetLayout, d), T = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || T || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const v = {
            ...Ln(p, "layout"),
            onPlay: y,
            onComplete: x
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0, v.type = !1), this.startAnimation(v), this.setAnimationOrigin(c, T);
        } else
          h || ri(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = d;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ft(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Pu), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && zr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(si);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ii);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Tu), this.nodes.forEach(mu), this.nodes.forEach(pu)) : this.nodes.forEach(ii), this.clearAllSnapshots();
      const a = Y.now();
      B.delta = it(0, 1e3 / 60, a - B.timestamp), B.timestamp = a, B.isProcessing = !0, Me.update.process(B), Me.preRender.process(B), Me.render.process(B), B.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Fn.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(vu), this.sharedNodes.forEach(wu);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, M.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      M.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !W(this.snapshot.measuredBox.x) && !W(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = L(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = !1), a && this.instance) {
        const l = s(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: r,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Wr(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || gt(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(r = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Eu(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: r } = this.options;
      if (!r)
        return L();
      const a = r.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(Cu))) {
        const { scroll: u } = this.root;
        u && (Et(a.x, u.offset.x), Et(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      const a = L();
      if (X(a, r), this.scroll?.wasRoot)
        return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        u !== this.root && c && h.layoutScroll && (c.wasRoot && X(a, r), Et(a.x, c.offset.x), Et(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(r, a = !1) {
      const l = L();
      X(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Ct(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), gt(c.latestValues) && Ct(l, c.latestValues);
      }
      return gt(this.latestValues) && Ct(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = L();
      X(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !gt(u.latestValues))
          continue;
        sn(u.latestValues) && u.updateSnapshot();
        const c = L(), h = u.measurePageBox();
        X(c, h), Zs(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return gt(this.latestValues) && Zs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(r) {
      this.options = {
        ...this.options,
        ...r,
        crossfade: r.crossfade !== void 0 ? r.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== B.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(r = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: h } = this.options;
      if (!(!this.layout || !(c || h))) {
        if (this.resolvedRelativeTargetAt = B.timestamp, !this.targetDelta && !this.relativeTarget) {
          const f = this.getClosestProjectingParent();
          f && f.layout && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L(), this.relativeTargetOrigin = L(), zt(this.relativeTargetOrigin, this.layout.layoutBox, f.layout.layoutBox), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = L(), this.targetWithTransforms = L()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Lc(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : X(this.target, this.layout.layoutBox), Ar(this.target, this.targetDelta)) : X(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const f = this.getClosestProjectingParent();
          f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? (this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = L(), this.relativeTargetOrigin = L(), zt(this.relativeTargetOrigin, this.target, f.target), X(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || sn(this.parent.latestValues) || Sr(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === B.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      X(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      zl(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = L());
      const { target: d } = r;
      if (!d) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Hs(this.prevProjectionDelta.x, this.projectionDelta.x), Hs(this.prevProjectionDelta.y, this.projectionDelta.y)), Kt(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !ni(this.projectionDelta.x, this.prevProjectionDelta.x) || !ni(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(r = !0) {
      if (this.options.visualElement?.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Mt(), this.projectionDelta = Mt(), this.projectionDeltaWithTransform = Mt();
    }
    setAnimationOrigin(r, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = Mt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = L(), d = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, y = d !== p, x = this.getStack(), g = !x || x.members.length <= 1, T = !!(y && !g && this.options.crossfade === !0 && !this.path.some(Au));
      this.animationProgress = 0;
      let v;
      this.mixTargetDelta = (A) => {
        const b = A / 1e3;
        oi(h.x, r.x, b), oi(h.y, r.y, b), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (zt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Su(this.relativeTarget, this.relativeTargetOrigin, f, b), v && cu(this.relativeTarget, v) && (this.isProjectionDirty = !1), v || (v = L()), X(v, this.relativeTarget)), y && (this.animationValues = c, su(c, u, this.latestValues, b, T, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = b;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (ft(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = M.update(() => {
        fe.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Rt(0)), this.currentAnimation = Jc(this.motionValue, [0, 1e3], {
          ...r,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            r.onComplete && r.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fu), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && Gr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || L();
          const h = W(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = W(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        X(a, l), Ct(a, c), Kt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new uu()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : !0;
    }
    getLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: r } = this.options;
      return r ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r)
        return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r)
        return;
      let a = !1;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && _e("z", r, u, this.animationValues);
      for (let c = 0; c < Ne.length; c++)
        _e(`rotate${Ne[c]}`, r, u, this.animationValues), _e(`skew${Ne[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u)
        r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, r.visibility = "", r.opacity = "", r.pointerEvents = he(a?.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = he(a?.pointerEvents) || ""), this.hasProjected && !gt(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      r.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = hu(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), r.transform = h;
      const { x: f, y: d } = this.projectionDelta;
      r.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const p in qt) {
        if (c[p] === void 0)
          continue;
        const { correct: y, applyTo: x, isCSSVariable: g } = qt[p], T = h === "none" ? c[p] : y(c[p], u);
        if (x) {
          const v = x.length;
          for (let A = 0; A < v; A++)
            r[x[A]] = T;
        } else
          g ? this.options.visualElement.renderState.vars[p] = T : r[p] = T;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? he(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((r) => r.currentAnimation?.stop()), this.root.nodes.forEach(si), this.root.sharedNodes.clear();
    }
  };
}
function mu(t) {
  t.updateLayout();
}
function pu(t) {
  const e = t.resumeFrom?.snapshot || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: s } = t.layout, { animationType: i } = t.options, o = e.source !== t.layout.source;
    i === "size" ? q((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = W(h);
      h.min = n[c].min, h.max = h.min + f;
    }) : Gr(i, e.layoutBox, n) && q((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = W(n[c]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[c].max = t.relativeTarget[c].min + f);
    });
    const r = Mt();
    Kt(r, n, e.layoutBox);
    const a = Mt();
    o ? Kt(a, t.applyTransform(s, !0), e.measuredBox) : Kt(a, n, e.layoutBox);
    const l = !Wr(r);
    let u = !1;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: f } = c;
        if (h && f) {
          const d = L();
          zt(d, e.layoutBox, h.layoutBox);
          const p = L();
          zt(p, n, f.layoutBox), Kr(d, p) || (u = !0), c.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = d, t.relativeParent = c);
        }
      }
    }
    t.notifyListeners("didUpdate", {
      layout: n,
      snapshot: e,
      delta: a,
      layoutDelta: r,
      hasLayoutChanged: l,
      hasRelativeLayoutChanged: u
    });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function gu(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function yu(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
}
function vu(t) {
  t.clearSnapshot();
}
function si(t) {
  t.clearMeasurements();
}
function ii(t) {
  t.isLayoutDirty = !1;
}
function Tu(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function ri(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0;
}
function xu(t) {
  t.resolveTargetDelta();
}
function bu(t) {
  t.calcProjection();
}
function Pu(t) {
  t.resetSkewAndRotation();
}
function wu(t) {
  t.removeLeadSnapshot();
}
function oi(t, e, n) {
  t.translate = O(e.translate, 0, n), t.scale = O(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function ai(t, e, n, s) {
  t.min = O(e.min, n.min, s), t.max = O(e.max, n.max, s);
}
function Su(t, e, n, s) {
  ai(t.x, e.x, n.x, s), ai(t.y, e.y, n.y, s);
}
function Au(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Vu = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, li = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), ci = li("applewebkit/") && !li("chrome/") ? Math.round : Z;
function ui(t) {
  t.min = ci(t.min), t.max = ci(t.max);
}
function Eu(t) {
  ui(t.x), ui(t.y);
}
function Gr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Oc(ei(e), ei(n), 0.2);
}
function Cu(t) {
  return t !== t.root && t.scroll?.wasRoot;
}
const Mu = Yr({
  attachResizeListener: (t, e) => Jt(t, "resize", e),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Ue = {
  current: void 0
}, Hr = Yr({
  measureScroll: (t) => ({
    x: t.scrollLeft,
    y: t.scrollTop
  }),
  defaultParent: () => {
    if (!Ue.current) {
      const t = new Mu({});
      t.mount(window), t.setOptions({ layoutScroll: !0 }), Ue.current = t;
    }
    return Ue.current;
  },
  resetTransform: (t, e) => {
    t.style.transform = e !== void 0 ? e : "none";
  },
  checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed"
}), Du = {
  pan: {
    Feature: Hc
  },
  drag: {
    Feature: Gc,
    ProjectionNode: Hr,
    MeasureLayout: _r
  }
};
function hi(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && M.postRender(() => o(e, se(e)));
}
class Ru extends mt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = Ja(e, (n, s) => (hi(this.node, s, "Start"), (i) => hi(this.node, i, "End"))));
  }
  unmount() {
  }
}
class ku extends mt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let e = !1;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = !0;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = te(Jt(this.node.current, "focus", () => this.onFocus()), Jt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function fi(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled)
    return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && M.postRender(() => o(e, se(e)));
}
class Ou extends mt {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = nl(e, (n, s) => (fi(this.node, s, "Start"), (i, { success: o }) => fi(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const hn = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Lu = (t) => {
  const e = hn.get(t.target);
  e && e(t);
}, ju = (t) => {
  t.forEach(Lu);
};
function Fu({ root: t, ...e }) {
  const n = t || document;
  $e.has(n) || $e.set(n, {});
  const s = $e.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(ju, { root: t, ...e })), s[i];
}
function Iu(t, e, n) {
  const s = Fu(e);
  return hn.set(t, n), s.observe(t), () => {
    hn.delete(t), s.unobserve(t);
  };
}
const Bu = {
  some: 0,
  all: 1
};
class Nu extends mt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = {
      root: n ? n.current : void 0,
      rootMargin: s,
      threshold: typeof i == "number" ? i : Bu[i]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return Iu(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(_u(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function _u({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const Uu = {
  inView: {
    Feature: Nu
  },
  tap: {
    Feature: Ou
  },
  focus: {
    Feature: ku
  },
  hover: {
    Feature: Ru
  }
}, $u = {
  layout: {
    ProjectionNode: Hr,
    MeasureLayout: _r
  }
}, Wu = {
  ...Ec,
  ...Uu,
  ...Du,
  ...$u
}, di = /* @__PURE__ */ $l(Wu, ec);
var Xr = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, mi = ht.createContext && /* @__PURE__ */ ht.createContext(Xr), Ku = ["attr", "size", "title"];
function zu(t, e) {
  if (t == null) return {};
  var n = Yu(t, e), s, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      s = o[i], !(e.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (n[s] = t[s]);
  }
  return n;
}
function Yu(t, e) {
  if (t == null) return {};
  var n = {};
  for (var s in t)
    if (Object.prototype.hasOwnProperty.call(t, s)) {
      if (e.indexOf(s) >= 0) continue;
      n[s] = t[s];
    }
  return n;
}
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ve.apply(this, arguments);
}
function pi(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, s);
  }
  return n;
}
function Te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pi(Object(n), !0).forEach(function(s) {
      Gu(t, s, n[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pi(Object(n)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(n, s));
    });
  }
  return t;
}
function Gu(t, e, n) {
  return e = Hu(e), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Hu(t) {
  var e = Xu(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Xu(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var s = n.call(t, e);
    if (typeof s != "object") return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function qr(t) {
  return t && t.map((e, n) => /* @__PURE__ */ ht.createElement(e.tag, Te({
    key: n
  }, e.attr), qr(e.child)));
}
function qu(t) {
  return (e) => /* @__PURE__ */ ht.createElement(Zu, ve({
    attr: Te({}, t.attr)
  }, e), qr(t.child));
}
function Zu(t) {
  var e = (n) => {
    var {
      attr: s,
      size: i,
      title: o
    } = t, r = zu(t, Ku), a = i || n.size || "1em", l;
    return n.className && (l = n.className), t.className && (l = (l ? l + " " : "") + t.className), /* @__PURE__ */ ht.createElement("svg", ve({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, s, r, {
      className: l,
      style: Te(Te({
        color: t.color || n.color
      }, n.style), t.style),
      height: a,
      width: a,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ ht.createElement("title", null, o), t.children);
  };
  return mi !== void 0 ? /* @__PURE__ */ ht.createElement(mi.Consumer, null, (n) => e(n)) : e(Xr);
}
function Ju(t) {
  return qu({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }, child: [] }, { tag: "path", attr: { d: "M21 3v5h-5" }, child: [] }, { tag: "path", attr: { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }, child: [] }, { tag: "path", attr: { d: "M8 16H3v5" }, child: [] }] })(t);
}
const Qu = (t) => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from(
    { length: t },
    () => e[Math.floor(Math.random() * e.length)]
  ).join("");
}, th = () => {
  const t = Math.floor(Math.random() * 10), e = Math.floor(Math.random() * 10);
  return {
    question: `${t} + ${e} = ?`,
    answer: (t + e).toString()
  };
}, ih = ({
  type: t = "canvas",
  length: e = 6,
  width: n = 180,
  height: s = 50,
  fontSize: i = 28,
  fontFamily: o = "Arial",
  backgroundColor: r = "#f9f9f9",
  textColor: a = "#333",
  noise: l = 30,
  placeholder: u = "کد امنیتی را وارد کنید",
  errorMessage: c = "کد اشتباه است!",
  successMessage: h = "کد صحیح است",
  autoValidate: f = !0,
  animationDuration: d = 0.4,
  onValidate: p
}) => {
  const [y, x] = ut(""), [g, T] = ut(""), [v, A] = ut(""), [b, S] = ut(null), [V, P] = ut(0), C = Dt(() => {
    if (t === "canvas") {
      const z = Qu(e);
      x(z), A(""), S(null), P((G) => G + 1);
    } else if (t === "math") {
      const { question: z, answer: G } = th();
      x(z), T(G), A(""), S(null), P((at) => at + 1);
    }
  }, [e, t]);
  Qt(() => {
    C();
  }, [C]);
  const j = Dt(
    (z) => t === "canvas" && z === y || t === "math" && z === g ? (Hn.success(h), S(null), p?.(!0), !0) : (Hn.error(c), S(c), p?.(!1), C(), !1),
    [
      y,
      c,
      g,
      p,
      C,
      h,
      t
    ]
  ), K = (z) => {
    const G = z.target.value;
    A(G), f && G.length >= (t === "canvas" ? e : g.length) && j(G);
  };
  return /* @__PURE__ */ R.jsxs("div", { className: "flex flex-col gap-3 w-full max-w-sm", children: [
    /* @__PURE__ */ R.jsxs("div", { className: "flex flex-row gap-2 items-center", children: [
      /* @__PURE__ */ R.jsx(
        "input",
        {
          type: "text",
          value: v,
          onChange: K,
          placeholder: u,
          className: "flex-1 border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-400 outline-none",
          "aria-label": "captcha input"
        }
      ),
      /* @__PURE__ */ R.jsx(ul, { mode: "wait", children: /* @__PURE__ */ R.jsx(
        di.div,
        {
          initial: { opacity: 0, rotate: -5 },
          animate: { opacity: 1, rotate: 0 },
          exit: { opacity: 0, rotate: 5 },
          transition: { duration: d },
          children: t === "canvas" ? /* @__PURE__ */ R.jsx(
            ao,
            {
              text: y,
              width: n,
              height: s,
              fontSize: i,
              fontFamily: o,
              backgroundColor: r,
              textColor: a,
              noise: l
            },
            V
          ) : /* @__PURE__ */ R.jsx(
            lo,
            {
              question: y,
              width: n,
              height: s,
              fontSize: i,
              fontFamily: o,
              backgroundColor: r,
              textColor: a
            }
          )
        },
        V
      ) }),
      /* @__PURE__ */ R.jsx(
        "button",
        {
          type: "button",
          onClick: C,
          className: "p-2 hover:bg-gray-100 rounded transition",
          "aria-label": "refresh captcha",
          children: /* @__PURE__ */ R.jsx(Ju, { className: "w-6 h-6 text-gray-700" })
        }
      )
    ] }),
    b && /* @__PURE__ */ R.jsx(
      di.span,
      {
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        className: "text-red-500 text-sm",
        role: "alert",
        children: b
      }
    ),
    !f && /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        onClick: () => j(v),
        className: "bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition",
        children: "تایید"
      }
    )
  ] });
};
function rh(t = "") {
  const [e, n] = ut(t), s = Dt((o) => {
    n(o);
  }, []), i = Dt(
    (o) => o === e,
    [e]
  );
  return { captcha: e, refresh: s, validate: i };
}
export {
  ao as CanvasCaptcha,
  ih as Captcha,
  lo as MathCaptcha,
  rh as useCaptcha
};
