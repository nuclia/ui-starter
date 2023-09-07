var Ol = Object.defineProperty;
var Fl = (t, e, n) => e in t ? Ol(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var U = (t, e, n) => (Fl(t, typeof e != "symbol" ? e + "" : e, n), n);
function z() {
}
function Cl(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function wi(t) {
  return t();
}
function Vi() {
  return /* @__PURE__ */ Object.create(null);
}
function Oe(t) {
  t.forEach(wi);
}
function nn(t) {
  return typeof t == "function";
}
function Fe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Rn;
function $l(t, e) {
  return Rn || (Rn = document.createElement("a")), Rn.href = e, t === Rn.href;
}
function Eo(t) {
  return Object.keys(t).length === 0;
}
function jl(t, ...e) {
  if (t == null)
    return z;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function q(t, e, n) {
  t.$$.on_destroy.push(jl(e, n));
}
function qr(t, e, n, r) {
  if (t) {
    const i = Ao(t, e, n, r);
    return t[0](i);
  }
}
function Ao(t, e, n, r) {
  return t[1] && r ? Cl(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function Hr(t, e, n, r) {
  if (t[2] && r) {
    const i = t[2](r(n));
    if (e.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(e.dirty.length, i.length);
      for (let a = 0; a < o; a += 1)
        s[a] = e.dirty[a] | i[a];
      return s;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function Wr(t, e, n, r, i, s) {
  if (i) {
    const o = Ao(e, n, r, s);
    t.p(o, i);
  }
}
function Vr(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function Io(t) {
  return t && nn(t.destroy) ? t.destroy : z;
}
const xo = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function x(t, e) {
  t.appendChild(e);
}
function Ve(t, e, n) {
  const r = Ml(t);
  if (!r.getElementById(e)) {
    const i = S("style");
    i.id = e, i.textContent = n, Nl(r, i);
  }
}
function Ml(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function Nl(t, e) {
  return x(t.head || t, e), e.sheet;
}
function R(t, e, n) {
  t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function fr(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function S(t) {
  return document.createElement(t);
}
function Gi(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function he(t) {
  return document.createTextNode(t);
}
function Q() {
  return he(" ");
}
function ot() {
  return he("");
}
function J(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function Ll(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function b(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function zl(t) {
  return Array.from(t.childNodes);
}
function Te(t, e) {
  e = "" + e, t.data !== e && (t.data = e);
}
function Ji(t, e) {
  t.value = e ?? "";
}
function Ie(t, e, n, r) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, r ? "important" : "");
}
let Pn;
function Dl() {
  if (Pn === void 0) {
    Pn = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Pn = !0;
    }
  }
  return Pn;
}
function Ul(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const r = S("iframe");
  r.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), r.setAttribute("aria-hidden", "true"), r.tabIndex = -1;
  const i = Dl();
  let s;
  return i ? (r.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", s = J(window, "message", (o) => {
    o.source === r.contentWindow && e();
  })) : (r.src = "about:blank", r.onload = () => {
    s = J(r.contentWindow, "resize", e), e();
  }), x(t, r), () => {
    (i || s && r.contentWindow) && s(), T(r);
  };
}
function V(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Bl(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const i = document.createEvent("CustomEvent");
  return i.initCustomEvent(t, n, r, e), i;
}
function ql(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let yn;
function pn(t) {
  yn = t;
}
function hr() {
  if (!yn)
    throw new Error("Function called outside component initialization");
  return yn;
}
function Sn(t) {
  hr().$$.on_mount.push(t);
}
function Hl(t) {
  hr().$$.on_destroy.push(t);
}
function Ot() {
  const t = hr();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const i = t.$$.callbacks[e];
    if (i) {
      const s = Bl(e, n, { cancelable: r });
      return i.slice().forEach((o) => {
        o.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function ki(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const Kt = [], Tt = [];
let Zt = [];
const Ki = [], To = /* @__PURE__ */ Promise.resolve();
let Gr = !1;
function Ro() {
  Gr || (Gr = !0, To.then(ke));
}
function Wl() {
  return Ro(), To;
}
function rn(t) {
  Zt.push(t);
}
const Ir = /* @__PURE__ */ new Set();
let Jt = 0;
function ke() {
  if (Jt !== 0)
    return;
  const t = yn;
  do {
    try {
      for (; Jt < Kt.length; ) {
        const e = Kt[Jt];
        Jt++, pn(e), Vl(e.$$);
      }
    } catch (e) {
      throw Kt.length = 0, Jt = 0, e;
    }
    for (pn(null), Kt.length = 0, Jt = 0; Tt.length; )
      Tt.pop()();
    for (let e = 0; e < Zt.length; e += 1) {
      const n = Zt[e];
      Ir.has(n) || (Ir.add(n), n());
    }
    Zt.length = 0;
  } while (Kt.length);
  for (; Ki.length; )
    Ki.pop()();
  Gr = !1, Ir.clear(), pn(t);
}
function Vl(t) {
  if (t.fragment !== null) {
    t.update(), Oe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(rn);
  }
}
function Gl(t) {
  const e = [], n = [];
  Zt.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), Zt = e;
}
const Ln = /* @__PURE__ */ new Set();
let zt;
function ge() {
  zt = {
    r: 0,
    c: [],
    p: zt
    // parent group
  };
}
function ve() {
  zt.r || Oe(zt.c), zt = zt.p;
}
function w(t, e) {
  t && t.i && (Ln.delete(t), t.i(e));
}
function P(t, e, n, r) {
  if (t && t.o) {
    if (Ln.has(t))
      return;
    Ln.add(t), zt.c.push(() => {
      Ln.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function Jl(t, e) {
  P(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Kl(t, e, n, r, i, s, o, a, l, c, u, d) {
  let f = t.length, h = s.length, g = f;
  const p = {};
  for (; g--; )
    p[t[g].key] = g;
  const _ = [], v = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), F = [];
  for (g = h; g--; ) {
    const $ = d(i, s, g), O = n($);
    let j = o.get(O);
    j ? r && F.push(() => j.p($, e)) : (j = c(O, $), j.c()), v.set(O, _[g] = j), O in p && m.set(O, Math.abs(g - p[O]));
  }
  const y = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set();
  function I($) {
    w($, 1), $.m(a, u), o.set($.key, $), u = $.first, h--;
  }
  for (; f && h; ) {
    const $ = _[h - 1], O = t[f - 1], j = $.key, ie = O.key;
    $ === O ? (u = $.first, f--, h--) : v.has(ie) ? !o.has(j) || y.has(j) ? I($) : k.has(ie) ? f-- : m.get(j) > m.get(ie) ? (k.add(j), I($)) : (y.add(ie), f--) : (l(O, o), f--);
  }
  for (; f--; ) {
    const $ = t[f];
    v.has($.key) || l($, o);
  }
  for (; h; )
    I(_[h - 1]);
  return Oe(F), _;
}
function le(t) {
  t && t.c();
}
function oe(t, e, n, r) {
  const { fragment: i, after_update: s } = t.$$;
  i && i.m(e, n), r || rn(() => {
    const o = t.$$.on_mount.map(wi).filter(nn);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : Oe(o), t.$$.on_mount = [];
  }), s.forEach(rn);
}
function re(t, e) {
  const n = t.$$;
  n.fragment !== null && (Gl(n.after_update), Oe(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ql(t, e) {
  t.$$.dirty[0] === -1 && (Kt.push(t), Ro(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ce(t, e, n, r, i, s, o, a = [-1]) {
  const l = yn;
  pn(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: z,
    not_equal: i,
    bound: Vi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Vi(),
    dirty: a,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  o && o(c.root);
  let u = !1;
  if (c.ctx = n ? n(t, e.props || {}, (d, f, ...h) => {
    const g = h.length ? h[0] : f;
    return c.ctx && i(c.ctx[d], c.ctx[d] = g) && (!c.skip_bound && c.bound[d] && c.bound[d](g), u && Ql(t, d)), f;
  }) : [], c.update(), u = !0, Oe(c.before_update), c.fragment = r ? r(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = zl(e.target);
      c.fragment && c.fragment.l(d), d.forEach(T);
    } else
      c.fragment && c.fragment.c();
    e.intro && w(t.$$.fragment), oe(t, e.target, e.anchor, e.customElement), ke();
  }
  pn(l);
}
let Po;
typeof HTMLElement == "function" && (Po = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(wi).filter(nn);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    Oe(this.$$.on_disconnect);
  }
  $destroy() {
    re(this, 1), this.$destroy = z;
  }
  $on(t, e) {
    if (!nn(e))
      return z;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !Eo(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
class je {
  $destroy() {
    re(this, 1), this.$destroy = z;
  }
  $on(e, n) {
    if (!nn(n))
      return z;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(e) {
    this.$$set && !Eo(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
var Jr = function(t, e) {
  return Jr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Jr(t, e);
};
function lt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Jr(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var Qn = function() {
  return Qn = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
    }
    return e;
  }, Qn.apply(this, arguments);
};
function Xl(t, e) {
  var n = {};
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Yl(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (d) {
        o(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        o(d);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Oo(t, e) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (r)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; )
      try {
        if (r = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done)
          return s;
        switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
          case 0:
          case 1:
            s = c;
            break;
          case 4:
            return n.label++, { value: c[1], done: !1 };
          case 5:
            n.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = n.ops.pop(), n.trys.pop();
            continue;
          default:
            if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              n = 0;
              continue;
            }
            if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
              n.label = c[1];
              break;
            }
            if (c[0] === 6 && n.label < s[1]) {
              n.label = s[1], s = c;
              break;
            }
            if (s && n.label < s[2]) {
              n.label = s[2], n.ops.push(c);
              break;
            }
            s[2] && n.ops.pop(), n.trys.pop();
            continue;
        }
        c = e.call(t, n);
      } catch (u) {
        c = [6, u], i = 0;
      } finally {
        r = s = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function sn(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n)
    return n.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bt(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n)
    return t;
  var r = n.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function qt(t, e, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = e.length, s; r < i; r++)
      (s || !(r in e)) && (s || (s = Array.prototype.slice.call(e, 0, r)), s[r] = e[r]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function en(t) {
  return this instanceof en ? (this.v = t, this) : new en(t);
}
function Zl(t, e, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(f) {
    r[f] && (i[f] = function(h) {
      return new Promise(function(g, p) {
        s.push([f, h, g, p]) > 1 || a(f, h);
      });
    });
  }
  function a(f, h) {
    try {
      l(r[f](h));
    } catch (g) {
      d(s[0][3], g);
    }
  }
  function l(f) {
    f.value instanceof en ? Promise.resolve(f.value.v).then(c, u) : d(s[0][2], f);
  }
  function c(f) {
    a("next", f);
  }
  function u(f) {
    a("throw", f);
  }
  function d(f, h) {
    f(h), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function ec(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof sn == "function" ? sn(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(s) {
    n[s] = t[s] && function(o) {
      return new Promise(function(a, l) {
        o = t[s](o), i(a, l, o.done, o.value);
      });
    };
  }
  function i(s, o, a, l) {
    Promise.resolve(l).then(function(c) {
      s({ value: c, done: a });
    }, o);
  }
}
function ne(t) {
  return typeof t == "function";
}
function Si(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var xr = Si(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function Xn(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var En = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, s;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var a = sn(o), l = a.next(); !l.done; l = a.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              l && !l.done && (n = a.return) && n.call(a);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          o.remove(this);
      var u = this.initialTeardown;
      if (ne(u))
        try {
          u();
        } catch (p) {
          s = p instanceof xr ? p.errors : [p];
        }
      var d = this._finalizers;
      if (d) {
        this._finalizers = null;
        try {
          for (var f = sn(d), h = f.next(); !h.done; h = f.next()) {
            var g = h.value;
            try {
              Qi(g);
            } catch (p) {
              s = s ?? [], p instanceof xr ? s = qt(qt([], Bt(s)), Bt(p.errors)) : s.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            h && !h.done && (i = f.return) && i.call(f);
          } finally {
            if (r)
              throw r.error;
          }
        }
      }
      if (s)
        throw new xr(s);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Qi(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && Xn(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && Xn(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Fo = En.EMPTY;
function Co(t) {
  return t instanceof En || t && "closed" in t && ne(t.remove) && ne(t.add) && ne(t.unsubscribe);
}
function Qi(t) {
  ne(t) ? t() : t.unsubscribe();
}
var $o = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Kr = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = Kr.delegate;
    return i != null && i.setTimeout ? i.setTimeout.apply(i, qt([t, e], Bt(n))) : setTimeout.apply(void 0, qt([t, e], Bt(n)));
  },
  clearTimeout: function(t) {
    var e = Kr.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function jo(t) {
  Kr.setTimeout(function() {
    throw t;
  });
}
function Xi() {
}
function zn(t) {
  t();
}
var Ei = function(t) {
  lt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Co(n) && n.add(r)) : r.destination = ic, r;
  }
  return e.create = function(n, r, i) {
    return new Yn(n, r, i);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(En), tc = Function.prototype.bind;
function Tr(t, e) {
  return tc.call(t, e);
}
var nc = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        On(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        On(r);
      }
    else
      On(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        On(n);
      }
  }, t;
}(), Yn = function(t) {
  lt(e, t);
  function e(n, r, i) {
    var s = t.call(this) || this, o;
    if (ne(n) || !n)
      o = {
        next: n ?? void 0,
        error: r ?? void 0,
        complete: i ?? void 0
      };
    else {
      var a;
      s && $o.useDeprecatedNextContext ? (a = Object.create(n), a.unsubscribe = function() {
        return s.unsubscribe();
      }, o = {
        next: n.next && Tr(n.next, a),
        error: n.error && Tr(n.error, a),
        complete: n.complete && Tr(n.complete, a)
      }) : o = n;
    }
    return s.destination = new nc(o), s;
  }
  return e;
}(Ei);
function On(t) {
  jo(t);
}
function rc(t) {
  throw t;
}
var ic = {
  closed: !0,
  next: Xi,
  error: rc,
  complete: Xi
}, Ai = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function an(t) {
  return t;
}
function sc(t) {
  return t.length === 0 ? an : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var _e = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, s = ac(e) ? e : new Yn(e, n, r);
    return zn(function() {
      var o = i, a = o.operator, l = o.source;
      s.add(a ? a.call(s, l) : l ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = Yi(n), new n(function(i, s) {
      var o = new Yn({
        next: function(a) {
          try {
            e(a);
          } catch (l) {
            s(l), o.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
      r.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Ai] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return sc(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Yi(e), new e(function(r, i) {
      var s;
      n.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Yi(t) {
  var e;
  return (e = t ?? $o.Promise) !== null && e !== void 0 ? e : Promise;
}
function oc(t) {
  return t && ne(t.next) && ne(t.error) && ne(t.complete);
}
function ac(t) {
  return t && t instanceof Ei || oc(t) && Co(t);
}
function lc(t) {
  return ne(t == null ? void 0 : t.lift);
}
function Ge(t) {
  return function(e) {
    if (lc(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Re(t, e, n, r, i) {
  return new cc(t, e, n, r, i);
}
var cc = function(t) {
  lt(e, t);
  function e(n, r, i, s, o, a) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = a, l._next = r ? function(c) {
      try {
        r(c);
      } catch (u) {
        n.error(u);
      }
    } : t.prototype._next, l._error = s ? function(c) {
      try {
        s(c);
      } catch (u) {
        n.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, l;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(Ei), uc = Si(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Vt = function(t) {
  lt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Zi(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new uc();
  }, e.prototype.next = function(n) {
    var r = this;
    zn(function() {
      var i, s;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var o = sn(r.currentObservers), a = o.next(); !a.done; a = o.next()) {
            var l = a.value;
            l.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (s = o.return) && s.call(o);
          } finally {
            if (i)
              throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    zn(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    zn(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, i = this, s = i.hasError, o = i.isStopped, a = i.observers;
    return s || o ? Fo : (this.currentObservers = null, a.push(n), new En(function() {
      r.currentObservers = null, Xn(a, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, s = r.thrownError, o = r.isStopped;
    i ? n.error(s) : o && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new _e();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Zi(n, r);
  }, e;
}(_e), Zi = function(t) {
  lt(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return e.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, e.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Fo;
  }, e;
}(Vt), An = function(t) {
  lt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, s = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), s;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
}(Vt), Ii = {
  now: function() {
    return (Ii.delegate || Date).now();
  },
  delegate: void 0
}, dc = function(t) {
  lt(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = Ii);
    var s = t.call(this) || this;
    return s._bufferSize = n, s._windowTime = r, s._timestampProvider = i, s._buffer = [], s._infiniteTimeWindow = !0, s._infiniteTimeWindow = r === 1 / 0, s._bufferSize = Math.max(1, n), s._windowTime = Math.max(1, r), s;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, s = r._buffer, o = r._infiniteTimeWindow, a = r._timestampProvider, l = r._windowTime;
    i || (s.push(n), !o && s.push(a.now() + l)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, s = i._infiniteTimeWindow, o = i._buffer, a = o.slice(), l = 0; l < a.length && !n.closed; l += s ? 1 : 2)
      n.next(a[l]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, s = n._buffer, o = n._infiniteTimeWindow, a = (o ? 1 : 2) * r;
    if (r < 1 / 0 && a < s.length && s.splice(0, s.length - a), !o) {
      for (var l = i.now(), c = 0, u = 1; u < s.length && s[u] <= l; u += 2)
        c = u;
      c && s.splice(0, c + 1);
    }
  }, e;
}(Vt), fc = function(t) {
  lt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(En), Zn = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    var i = Zn.delegate;
    return i != null && i.setInterval ? i.setInterval.apply(i, qt([t, e], Bt(n))) : setInterval.apply(void 0, qt([t, e], Bt(n)));
  },
  clearInterval: function(t) {
    var e = Zn.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, hc = function(t) {
  lt(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var s = this.id, o = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(o, s, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), Zn.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Zn.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = !1, s;
    try {
      this.work(n);
    } catch (o) {
      i = !0, s = o || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), s;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, s = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Xn(s, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(fc), es = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Ii.now, t;
}(), pc = function(t) {
  lt(e, t);
  function e(n, r) {
    r === void 0 && (r = es.now);
    var i = t.call(this, n, r) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, e;
}(es), Mo = new pc(hc), gc = Mo, pr = new _e(function(t) {
  return t.complete();
});
function No(t) {
  return t && ne(t.schedule);
}
function xi(t) {
  return t[t.length - 1];
}
function Lo(t) {
  return ne(xi(t)) ? t.pop() : void 0;
}
function In(t) {
  return No(xi(t)) ? t.pop() : void 0;
}
function vc(t, e) {
  return typeof xi(t) == "number" ? t.pop() : e;
}
var zo = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Do(t) {
  return ne(t == null ? void 0 : t.then);
}
function Uo(t) {
  return ne(t[Ai]);
}
function Bo(t) {
  return Symbol.asyncIterator && ne(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function qo(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function _c() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Ho = _c();
function Wo(t) {
  return ne(t == null ? void 0 : t[Ho]);
}
function Vo(t) {
  return Zl(this, arguments, function() {
    var n, r, i, s;
    return Oo(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, en(n.read())];
        case 3:
          return r = o.sent(), i = r.value, s = r.done, s ? [4, en(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, en(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Go(t) {
  return ne(t == null ? void 0 : t.getReader);
}
function Ye(t) {
  if (t instanceof _e)
    return t;
  if (t != null) {
    if (Uo(t))
      return mc(t);
    if (zo(t))
      return yc(t);
    if (Do(t))
      return bc(t);
    if (Bo(t))
      return Jo(t);
    if (Wo(t))
      return wc(t);
    if (Go(t))
      return kc(t);
  }
  throw qo(t);
}
function mc(t) {
  return new _e(function(e) {
    var n = t[Ai]();
    if (ne(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function yc(t) {
  return new _e(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function bc(t) {
  return new _e(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, jo);
  });
}
function wc(t) {
  return new _e(function(e) {
    var n, r;
    try {
      for (var i = sn(t), s = i.next(); !s.done; s = i.next()) {
        var o = s.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (a) {
      n = { error: a };
    } finally {
      try {
        s && !s.done && (r = i.return) && r.call(i);
      } finally {
        if (n)
          throw n.error;
      }
    }
    e.complete();
  });
}
function Jo(t) {
  return new _e(function(e) {
    Sc(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function kc(t) {
  return Jo(Vo(t));
}
function Sc(t, e) {
  var n, r, i, s;
  return Yl(this, void 0, void 0, function() {
    var o, a;
    return Oo(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = ec(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done)
            return [3, 4];
          if (o = r.value, e.next(o), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = l.sent(), i = { error: a }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (s = n.return) ? [4, s.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i)
            throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function _t(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var s = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(s), !i)
    return s;
}
function Ko(t, e) {
  return e === void 0 && (e = 0), Ge(function(n, r) {
    n.subscribe(Re(r, function(i) {
      return _t(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return _t(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return _t(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Qo(t, e) {
  return e === void 0 && (e = 0), Ge(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Ec(t, e) {
  return Ye(t).pipe(Qo(e), Ko(e));
}
function Ac(t, e) {
  return Ye(t).pipe(Qo(e), Ko(e));
}
function Ic(t, e) {
  return new _e(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function xc(t, e) {
  return new _e(function(n) {
    var r;
    return _t(n, e, function() {
      r = t[Ho](), _t(n, e, function() {
        var i, s, o;
        try {
          i = r.next(), s = i.value, o = i.done;
        } catch (a) {
          n.error(a);
          return;
        }
        o ? n.complete() : n.next(s);
      }, 0, !0);
    }), function() {
      return ne(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Xo(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new _e(function(n) {
    _t(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      _t(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function Tc(t, e) {
  return Xo(Vo(t), e);
}
function Rc(t, e) {
  if (t != null) {
    if (Uo(t))
      return Ec(t, e);
    if (zo(t))
      return Ic(t, e);
    if (Do(t))
      return Ac(t, e);
    if (Bo(t))
      return Xo(t, e);
    if (Wo(t))
      return xc(t, e);
    if (Go(t))
      return Tc(t, e);
  }
  throw qo(t);
}
function fe(t, e) {
  return e ? Rc(t, e) : Ye(t);
}
function H() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = In(t);
  return fe(t, n);
}
function Qr(t, e) {
  var n = ne(t) ? t : function() {
    return t;
  }, r = function(i) {
    return i.error(n());
  };
  return new _e(e ? function(i) {
    return e.schedule(r, 0, i);
  } : r);
}
var Pc = Si(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Oc(t, e) {
  var n = typeof e == "object";
  return new Promise(function(r, i) {
    var s = new Yn({
      next: function(o) {
        r(o), s.unsubscribe();
      },
      error: i,
      complete: function() {
        n ? r(e.defaultValue) : i(new Pc());
      }
    });
    t.subscribe(s);
  });
}
function Fc(t) {
  return t instanceof Date && !isNaN(t);
}
function A(t, e) {
  return Ge(function(n, r) {
    var i = 0;
    n.subscribe(Re(r, function(s) {
      r.next(t.call(e, s, i++));
    }));
  });
}
var Cc = Array.isArray;
function $c(t, e) {
  return Cc(e) ? t.apply(void 0, qt([], Bt(e))) : t(e);
}
function Yo(t) {
  return A(function(e) {
    return $c(t, e);
  });
}
var jc = Array.isArray, Mc = Object.getPrototypeOf, Nc = Object.prototype, Lc = Object.keys;
function Zo(t) {
  if (t.length === 1) {
    var e = t[0];
    if (jc(e))
      return { args: e, keys: null };
    if (zc(e)) {
      var n = Lc(e);
      return {
        args: n.map(function(r) {
          return e[r];
        }),
        keys: n
      };
    }
  }
  return { args: t, keys: null };
}
function zc(t) {
  return t && typeof t == "object" && Mc(t) === Nc;
}
function ea(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function ct() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = In(t), r = Lo(t), i = Zo(t), s = i.args, o = i.keys;
  if (s.length === 0)
    return fe([], n);
  var a = new _e(Dc(s, n, o ? function(l) {
    return ea(o, l);
  } : an));
  return r ? a.pipe(Yo(r)) : a;
}
function Dc(t, e, n) {
  return n === void 0 && (n = an), function(r) {
    ts(e, function() {
      for (var i = t.length, s = new Array(i), o = i, a = i, l = function(u) {
        ts(e, function() {
          var d = fe(t[u], e), f = !1;
          d.subscribe(Re(r, function(h) {
            s[u] = h, f || (f = !0, a--), a || r.next(n(s.slice()));
          }, function() {
            --o || r.complete();
          }));
        }, r);
      }, c = 0; c < i; c++)
        l(c);
    }, r);
  };
}
function ts(t, e, n) {
  t ? _t(n, t, e) : e();
}
function Uc(t, e, n, r, i, s, o, a) {
  var l = [], c = 0, u = 0, d = !1, f = function() {
    d && !l.length && !c && e.complete();
  }, h = function(p) {
    return c < r ? g(p) : l.push(p);
  }, g = function(p) {
    s && e.next(p), c++;
    var _ = !1;
    Ye(n(p, u++)).subscribe(Re(e, function(v) {
      i == null || i(v), s ? h(v) : e.next(v);
    }, function() {
      _ = !0;
    }, void 0, function() {
      if (_)
        try {
          c--;
          for (var v = function() {
            var m = l.shift();
            o ? _t(e, o, function() {
              return g(m);
            }) : g(m);
          }; l.length && c < r; )
            v();
          f();
        } catch (m) {
          e.error(m);
        }
    }));
  };
  return t.subscribe(Re(e, h, function() {
    d = !0, f();
  })), function() {
    a == null || a();
  };
}
function bn(t, e, n) {
  return n === void 0 && (n = 1 / 0), ne(e) ? bn(function(r, i) {
    return A(function(s, o) {
      return e(r, s, i, o);
    })(Ye(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Ge(function(r, i) {
    return Uc(r, i, t, n);
  }));
}
function ta(t) {
  return t === void 0 && (t = 1 / 0), bn(an, t);
}
function Bc() {
  return ta(1);
}
function ns() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Bc()(fe(t, In(t)));
}
function gr() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Lo(t), r = Zo(t), i = r.args, s = r.keys, o = new _e(function(a) {
    var l = i.length;
    if (!l) {
      a.complete();
      return;
    }
    for (var c = new Array(l), u = l, d = l, f = function(g) {
      var p = !1;
      Ye(i[g]).subscribe(Re(a, function(_) {
        p || (p = !0, d--), c[g] = _;
      }, function() {
        return u--;
      }, void 0, function() {
        (!u || !p) && (d || a.next(s ? ea(s, c) : c), a.complete());
      }));
    }, h = 0; h < l; h++)
      f(h);
  });
  return n ? o.pipe(Yo(n)) : o;
}
function na(t, e, n) {
  t === void 0 && (t = 0), n === void 0 && (n = gc);
  var r = -1;
  return e != null && (No(e) ? n = e : r = e), new _e(function(i) {
    var s = Fc(t) ? +t - n.now() : t;
    s < 0 && (s = 0);
    var o = 0;
    return n.schedule(function() {
      i.closed || (i.next(o++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, s);
  });
}
function ra() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = In(t), r = vc(t, 1 / 0), i = t;
  return i.length ? i.length === 1 ? Ye(i[0]) : ta(r)(fe(i, n)) : pr;
}
function ae(t, e) {
  return Ge(function(n, r) {
    var i = 0;
    n.subscribe(Re(r, function(s) {
      return t.call(e, s, i++) && r.next(s);
    }));
  });
}
function qc(t, e, n) {
  if (e == null && (e = t, t = 0), e <= 0)
    return pr;
  var r = e + t;
  return new _e(n ? function(i) {
    var s = t;
    return n.schedule(function() {
      s < r ? (i.next(s++), this.schedule()) : i.complete();
    });
  } : function(i) {
    for (var s = t; s < r && !i.closed; )
      i.next(s++);
    i.complete();
  });
}
function We(t) {
  return Ge(function(e, n) {
    var r = null, i = !1, s;
    r = e.subscribe(Re(n, void 0, void 0, function(o) {
      s = Ye(t(o, We(t)(e))), r ? (r.unsubscribe(), r = null, s.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, s.subscribe(n));
  });
}
function Rr(t, e) {
  return ne(e) ? bn(t, e, 1) : bn(t, 1);
}
function ia(t, e) {
  return e === void 0 && (e = Mo), Ge(function(n, r) {
    var i = null, s = null, o = null, a = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = s;
        s = null, r.next(c);
      }
    };
    function l() {
      var c = o + t, u = e.now();
      if (u < c) {
        i = this.schedule(void 0, c - u), r.add(i);
        return;
      }
      a();
    }
    n.subscribe(Re(r, function(c) {
      s = c, o = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      a(), r.complete();
    }, void 0, function() {
      s = i = null;
    }));
  });
}
function se(t) {
  return t <= 0 ? function() {
    return pr;
  } : Ge(function(e, n) {
    var r = 0;
    e.subscribe(Re(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function It(t, e) {
  return e === void 0 && (e = an), t = t ?? Hc, Ge(function(n, r) {
    var i, s = !0;
    n.subscribe(Re(r, function(o) {
      var a = e(o);
      (s || !t(i, a)) && (s = !1, i = a, r.next(o));
    }));
  });
}
function Hc(t, e) {
  return t === e;
}
function sa(t) {
  var e, n = 1 / 0, r;
  return t != null && (typeof t == "object" ? (e = t.count, n = e === void 0 ? 1 / 0 : e, r = t.delay) : n = t), n <= 0 ? function() {
    return pr;
  } : Ge(function(i, s) {
    var o = 0, a, l = function() {
      if (a == null || a.unsubscribe(), a = null, r != null) {
        var u = typeof r == "number" ? na(r) : Ye(r(o)), d = Re(s, function() {
          d.unsubscribe(), c();
        });
        u.subscribe(d);
      } else
        c();
    }, c = function() {
      var u = !1;
      a = i.subscribe(Re(s, void 0, function() {
        ++o < n ? a ? l() : u = !0 : s.complete();
      })), u && l();
    };
    c();
  });
}
function oa(t) {
  return ae(function(e, n) {
    return t <= n;
  });
}
function Wc() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = In(t);
  return Ge(function(r, i) {
    (n ? ns(t, r, n) : ns(t, r)).subscribe(i);
  });
}
function L(t, e) {
  return Ge(function(n, r) {
    var i = null, s = 0, o = !1, a = function() {
      return o && !i && r.complete();
    };
    n.subscribe(Re(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, u = s++;
      Ye(t(l, u)).subscribe(i = Re(r, function(d) {
        return r.next(e ? e(l, d, u, c++) : d);
      }, function() {
        i = null, a();
      }));
    }, function() {
      o = !0, a();
    }));
  });
}
function qe(t, e, n) {
  var r = ne(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Ge(function(i, s) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var a = !0;
    i.subscribe(Re(s, function(l) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, l), s.next(l);
    }, function() {
      var l;
      a = !1, (l = r.complete) === null || l === void 0 || l.call(r), s.complete();
    }, function(l) {
      var c;
      a = !1, (c = r.error) === null || c === void 0 || c.call(r, l), s.error(l);
    }, function() {
      var l, c;
      a && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : an;
}
function aa(t, e) {
  e === void 0 && (e = {});
  var n = e.selector, r = Xl(e, ["selector"]);
  return new _e(function(i) {
    var s = new AbortController(), o = s.signal, a = !0, l = r.signal;
    if (l)
      if (l.aborted)
        s.abort();
      else {
        var c = function() {
          o.aborted || s.abort();
        };
        l.addEventListener("abort", c), i.add(function() {
          return l.removeEventListener("abort", c);
        });
      }
    var u = Qn(Qn({}, r), { signal: o }), d = function(f) {
      a = !1, i.error(f);
    };
    return fetch(t, u).then(function(f) {
      n ? Ye(n(f)).subscribe(Re(i, void 0, function() {
        a = !1, i.complete();
      }, d)) : (a = !1, i.next(f), i.complete());
    }).catch(d), function() {
      a && s.abort();
    };
  });
}
class rs {
  constructor(e) {
    U(this, "token");
    this.token = e;
  }
  urlBase64Decode(e) {
    let n = e.replace(/-/g, "+").replace(/_/g, "/");
    switch (n.length % 4) {
      case 0:
        break;
      case 2: {
        n += "==";
        break;
      }
      case 3: {
        n += "=";
        break;
      }
      default:
        throw new Error("Illegal base64url string!");
    }
    return this.b64DecodeUnicode(n);
  }
  // credits for decoder goes to https://github.com/atk
  b64decode(e) {
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let r = "";
    if (e = String(e).replace(/=+$/, ""), e.length % 4 === 1)
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    for (
      let i = 0, s, o, a = 0;
      // get next character
      o = e.charAt(a++);
      // character found in table? initialize bit storage and add its ascii value;
      // tslint:disable-next-line:no-bitwise
      ~o && (s = i % 4 ? s * 64 + o : o, // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      i++ % 4) ? (
        // tslint:disable-next-line:no-bitwise
        r += String.fromCharCode(255 & s >> (-2 * i & 6))
      ) : 0
    )
      o = n.indexOf(o);
    return r;
  }
  b64DecodeUnicode(e) {
    return decodeURIComponent(
      Array.prototype.map.call(this.b64decode(e), (n) => "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)).join("")
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decodeToken(e = this.token) {
    if (e === null)
      return null;
    const n = e.split(".");
    if (n.length !== 3)
      throw new Error(
        "The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more."
      );
    const r = this.urlBase64Decode(n[1]);
    if (!r)
      throw new Error("Cannot decode the token.");
    return JSON.parse(r);
  }
  getJWTUser(e = this.token) {
    let n;
    try {
      n = this.decodeToken(e);
    } catch {
      return null;
    }
    return n;
  }
  getTokenExpirationDate(e = this.token) {
    const n = this.getJWTUser(e);
    if (!n)
      return null;
    const r = /* @__PURE__ */ new Date(0);
    return r.setUTCSeconds(n.exp), r;
  }
  isTokenExpired(e = this.token, n) {
    if (e === null || e === "")
      return !0;
    const r = this.getTokenExpirationDate(e);
    return n = n || 0, r === null ? !0 : r.valueOf() <= (/* @__PURE__ */ new Date()).valueOf() + n * 1e3;
  }
}
const Pr = "JWT_KEY", Or = "JWT_REFRESH_KEY", is = 5 * 60 * 1e3;
class Vc {
  constructor(e) {
    U(this, "nuclia");
    U(this, "_isAuthenticated", new dc(1));
    U(this, "timerSubscription");
    this.nuclia = e, this.nuclia.options.knowledgeBox ? this._isAuthenticated.next(!0) : this.checkTokenExpiration();
  }
  getAuthHeaders(e, n) {
    return this.nuclia.options.standalone ? { "X-NUCLIADB-ROLES": this.getNucliaDbRole(e, n) } : this.nuclia.options.apiKey ? { "X-NUCLIA-SERVICEACCOUNT": `Bearer ${this.nuclia.options.apiKey}` } : this.getToken() ? { Authorization: `Bearer ${this.getToken()}` } : {};
  }
  getNucliaDbRole(e, n) {
    let r;
    switch (e) {
      case "PUT":
      case "PATCH":
      case "POST":
      case "DELETE":
        r = "WRITER";
        break;
      default:
        r = "READER";
    }
    return n === "/kbs" || e === "PATCH" && (n != null && n.startsWith("/kb")) && (n == null ? void 0 : n.split("/").length) === 3 ? r = "MANAGER" : (n != null && n.endsWith("/search") || n != null && n.endsWith("/find") || n != null && n.endsWith("/catalog") || n != null && n.endsWith("/chat")) && (r = "READER"), r;
  }
  isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }
  hasLoggedOut() {
    return this.isAuthenticated().pipe(
      oa(1),
      ae((e) => !e)
    );
  }
  login(e, n, r) {
    return this.fetch(
      "/auth/login",
      { username: e, password: n },
      !1,
      r ? { "X-STF-VALIDATION": r } : {}
    ).pipe(A((i) => this.authenticate(i)));
  }
  authenticate(e) {
    return e.access_token ? (this.storeTokens(e), this._isAuthenticated.next(!0), !0) : (this._isAuthenticated.next(!1), !1);
  }
  logout() {
    this.fetch("/auth/logout", {}, !0, {}).subscribe(), localStorage.removeItem(Pr), localStorage.removeItem(Or), this._isAuthenticated.next(!1);
  }
  refresh() {
    return this.fetch("/auth/refresh", { refresh_token: this.getRefreshToken() }, !0, {}).pipe(
      We((e) => (this.logout(), Qr(e))),
      A((e) => e.access_token ? (this.storeTokens(e), !0) : (this.logout(), !1))
    );
  }
  getToken() {
    return this.nuclia.options.public ? "" : localStorage.getItem(Pr) || "";
  }
  setPassword(e) {
    return this.fetch("/auth/setpassword", { password: e }, !0, {}).pipe(
      A((n) => this.authenticate(n))
    );
  }
  deleteAuthenticatedUser() {
    return this.nuclia.rest.delete("/user").pipe(qe(() => this.storeTokens({ access_token: "", refresh_token: "" })));
  }
  getJWTUser() {
    const e = this.getToken();
    return e ? new rs(e).getJWTUser() : null;
  }
  getRefreshToken() {
    return localStorage.getItem(Or) || "";
  }
  storeTokens(e) {
    localStorage.setItem(Pr, e.access_token), localStorage.setItem(Or, e.refresh_token), this.checkTokenExpiration();
  }
  checkTokenExpiration() {
    var n, r;
    const e = this.getToken();
    if (e) {
      const s = (n = new rs(e).getTokenExpirationDate()) == null ? void 0 : n.getTime();
      if (s) {
        const o = (/* @__PURE__ */ new Date()).getTime();
        if (s < o)
          this.logout();
        else {
          this._isAuthenticated.next(!0);
          const a = s - o < is ? 0 : is;
          (r = this.timerSubscription) == null || r.unsubscribe(), this.timerSubscription = na(a).pipe(L(() => this.refresh())).subscribe();
        }
      } else
        this._isAuthenticated.next(!1);
    } else
      this._isAuthenticated.next(!1);
  }
  fetch(e, n, r, i) {
    const s = { "content-type": "application/json", ...i };
    return r && (s.Authorization = `Bearer ${this.getToken()}`), aa(`${this.nuclia.backend}${e}`, {
      method: "POST",
      selector: (o) => Promise.resolve(o),
      headers: s,
      body: JSON.stringify(n)
    }).pipe(
      L((o) => o.ok ? fe(o.clone().json()) : Qr(o))
    );
  }
}
const Gc = "NUCLIA_NUA_KEY";
var la = /* @__PURE__ */ ((t) => (t.DAY = "day", t.WEEK = "week", t.MONTH = "month", t.YEAR = "year", t))(la || {}), B = /* @__PURE__ */ ((t) => (t.BASIC = "basic", t.ORIGIN = "origin", t.RELATIONS = "relations", t.VALUES = "values", t.EXTRACTED = "extracted", t.ERRORS = "errors", t.EXTRA = "extra", t))(B || {});
const Fr = 512 * 1024, Jc = new RegExp(/[^a-z0-9_-]/g), Ti = (t, e, n, r, i = {}) => (!i.contentType && !(n instanceof ArrayBuffer) && (i.contentType = (n == null ? void 0 : n.type) !== "null" ? n == null ? void 0 : n.type : void 0), !i.filename && !(n instanceof ArrayBuffer) && (i.filename = n == null ? void 0 : n.name), !i.lang && !(n instanceof ArrayBuffer) && (i.lang = n.lang), !i.md5 && !(n instanceof ArrayBuffer) && (i.md5 = n.md5), (n instanceof ArrayBuffer ? H(n) : fe(n.arrayBuffer())).pipe(
  L(
    (s) => r ? Qc(t, e, s, i, n.payload) : Kc(t, e, s, i)
  )
)), Kc = (t, e, n, r) => {
  const i = {
    "content-type": (r == null ? void 0 : r.contentType) || "application/octet-stream",
    ...ua(r)
  };
  let s = 1;
  const o = r != null && r.rslug ? `?rslug=${r.rslug}` : "";
  return t.rest.post(`${e}/upload${o}`, n, i, !0).pipe(
    sa(),
    ae((a) => s-- === 0 || a.status !== 503),
    se(1),
    L((a) => {
      try {
        switch (a.status) {
          case 201:
            return fe(a.json()).pipe(
              A((l) => ({
                resource: l.uuid || "",
                field: l.field_id || "",
                completed: !0
              }))
            );
          case 409:
            return H({ conflict: !0 });
          default:
            return H({ failed: !0 });
        }
      } catch {
        return H({ failed: !0 });
      }
    })
  );
}, Qc = (t, e, n, r, i) => {
  let s = 0, o = 0, a = !1;
  const l = n.byteLength, c = Math.ceil(l / Fr), u = {
    "upload-length": `${l}`,
    "tus-resumable": "1.0.0"
  }, d = [];
  r != null && r.filename && d.push(`filename ${btoa(encodeURIComponent(r.filename))}`), r != null && r.lang && d.push(`language ${btoa(r.lang)}`), r != null && r.md5 && d.push(`md5 ${btoa(r.md5)}`), d.push(`content_type ${btoa((r == null ? void 0 : r.contentType) || "application/octet-stream")}`), d.length > 0 && (u["upload-metadata"] = d.join(","));
  let f = 1;
  return t.rest.post(`${e}/tusupload`, i, u, !0).pipe(
    sa(),
    ae((h) => f-- === 0 || h.status !== 503),
    We((h) => H(h)),
    se(1),
    Rr(
      (h) => ra(
        H(h).pipe(
          ae((g) => g.status !== 201 || !g.headers.get("location")),
          A((g) => g.status === 409 ? { conflict: !0, failed: !0 } : { failed: !0 })
        ),
        H(h).pipe(
          ae((g) => g.status === 201 && !!g.headers.get("location")),
          A((g) => g.headers.get("location")),
          Rr(
            (g) => qc(0, c).pipe(
              Rr(() => {
                const p = n.slice(s, s + Fr);
                return o += 1, a ? H({ failed: a }) : t.rest.patch(
                  g,
                  p,
                  {
                    "content-type": (r == null ? void 0 : r.contentType) || "application/octet-stream",
                    "upload-offset": `${s}`,
                    "content-length": `${p.byteLength}`
                  },
                  !0
                ).pipe(
                  A((_) => _.status !== 200 ? (a = !0, { failed: a }) : (s += Fr, {
                    completed: o === c,
                    progress: s >= l ? 100 : Math.min(Math.floor(s / l * 100), 100)
                  })),
                  We(() => (a = !0, H({ failed: !0 })))
                );
              })
            )
          )
        )
      )
    )
  );
}, ca = (t, e, n, r = !1) => {
  const i = Array.from(n), s = i.reduce((c, u) => c + (u.size || 0), 0), o = [], a = i.map((c) => ({
    file: c,
    progress: 0,
    uploaded: !1,
    failed: !1
  })), l = i.map((c) => {
    let u = e;
    if (r) {
      let f = c.name.toLowerCase().replace(Jc, "_");
      o.includes(f) && (f += "_" + o.filter((h) => h.startsWith(f)).length), o.push(f), u = `${u}/file/${f}`;
    }
    const d = c.lang;
    if (d) {
      const f = c.payload || {};
      c.payload = { ...f, metadata: { ...f == null ? void 0 : f.metadata, language: d } };
    }
    return Ti(t, u, c, !0, {}).pipe(
      Wc({ progress: 0, completed: !1 }),
      A((f) => ({ status: f, file: c }))
    );
  });
  return fe(l).pipe(
    bn((c) => c, 6),
    // restrict to 6 concurrent uploads
    A((c) => {
      const u = a.find((_) => _.file === c.file);
      c.status.failed && (u.failed = !0), c.status.conflict && (u.conflicts = !0), c.status.completed && (u.uploaded = !0), !c.status.failed && !c.status.conflict && !c.status.completed ? u.progress = c.status.progress || 0 : u.progress = 100;
      const d = a.filter((_) => _.failed).length, f = a.filter((_) => _.conflicts).length, h = a.filter((_) => _.uploaded).length, g = a.filter((_) => !_.failed && !_.uploaded).length === 0, p = Math.round(
        a.reduce((_, v) => _ + v.file.size * v.progress / 100, 0) / s * 100
      );
      return { files: a, progress: p, completed: g, uploaded: h, failed: d, conflicts: f };
    })
  );
}, Xc = (t, e, n, r) => {
  const i = {
    "x-stf-nuakey": `Bearer ${e}`,
    "content-type": (r == null ? void 0 : r.contentType) || "application/octet-stream",
    ...ua(r)
  };
  return t.rest.post("/processing/upload", n, i);
}, ua = (t) => {
  const e = {};
  return t != null && t.filename && (e["x-filename"] = encodeURIComponent(t.filename)), t != null && t.md5 && (e["x-md5"] = t.md5), t != null && t.lang && (e["x-language"] = t.lang), e;
};
var D = /* @__PURE__ */ ((t) => (t.text = "text", t.file = "file", t.link = "link", t.layout = "layout", t.conversation = "conversation", t.keywordset = "keywordset", t.datetime = "datetime", t.generic = "generic", t))(D || {}), da = /* @__PURE__ */ ((t) => (t.VALUE = "value", t.EXTRACTED = "extracted", t.ERROR = "error", t))(da || {}), Se = /* @__PURE__ */ ((t) => (t.TEXT = "text", t.METADATA = "metadata", t.SHORTENED_METADATA = "shortened_metadata", t.LARGE_METADATA = "large_metadata", t.VECTOR = "vectors", t.LINK = "link", t.FILE = "file", t))(Se || {});
function Yc(t) {
  return `/l/${t.labelset}/${t.label}`;
}
function Zc(t) {
  const e = t.split("/");
  return { labelset: e[2], label: e[3] };
}
function eu(t) {
  return `/e/${t.family}/${t.entity}`;
}
function fa(t) {
  const e = t.split("/");
  return { family: e[2], entity: e[3] };
}
var rt = /* @__PURE__ */ ((t) => (t.layout = "l", t.text = "t", t.file = "f", t.link = "u", t.datetime = "d", t.keywordset = "k", t.generic = "a", t.conversation = "c", t))(rt || {}), ht;
((t) => {
  ((e) => {
    e.PARAGRAPH = "paragraph", e.DOCUMENT = "document", e.RELATIONS = "relations", e.VECTOR = "vector";
  })(t.Features || (t.Features = {})), ((e) => {
    e.PARAGRAPH = "paragraph", e.RELATIONS = "relations", e.VECTOR = "vector";
  })(t.ResourceFeatures || (t.ResourceFeatures = {})), ((e) => {
    e.PARAGRAPH = "paragraph", e.ENTITIES = "entities", e.INTENT = "intent";
  })(t.SuggestionFeatures || (t.SuggestionFeatures = {})), ((e) => {
    e.VECTOR = "VECTOR", e.BM25 = "BM25", e.BOTH = "BOTH";
  })(t.FindScoreType || (t.FindScoreType = {}));
})(ht || (ht = {}));
const ha = (t, e, n, r, i = [], s, o) => {
  var f;
  const { inTitleOnly: a, ...l } = s || {}, c = {
    query: r || "",
    features: i
  };
  a && (c.fields = ["a/title"]), c.shards = ((f = t.currentShards) == null ? void 0 : f[e]) || [];
  const u = `${n}/find`;
  return (o ? t.rest.get(`${u}?${vr(c, l)}`, void 0, !0) : t.rest.post(u, { ...c, ...l }, void 0, !0)).pipe(
    L((h) => {
      var p;
      const g = h.headers.get("X-Nuclia-Trace-Id") || "";
      return !h.ok || h.status === 206 ? (h.status === 206 && ((p = t.events) == null || p.emit("partial", { ...c, ...l })), fe(
        h.json().then(
          (_) => {
            throw { status: h.status, body: _ };
          },
          () => {
            throw { status: h.status };
          }
        )
      )) : fe(
        h.json().then(
          (_) => ({ ..._, searchId: g }),
          () => {
            console.warn(`${u} did not return a valid JSON`);
          }
        )
      );
    }),
    We(
      (h) => H({ type: "error", status: h.status, detail: h.detail, body: h.body })
    ),
    A((h) => h.type === "error" ? h : { ...h, type: "findResults" }),
    qe((h) => {
      h.type === "findResults" && h.shards && (t.currentShards = { ...t.currentShards, [e]: h.shards });
    })
  );
}, pa = (t, e, n, r, i = [], s, o) => {
  var d;
  const { inTitleOnly: a, ...l } = s || {}, c = {
    query: r || "",
    features: i
  };
  a && (c.fields = ["a/title"]), c.shards = ((d = t.currentShards) == null ? void 0 : d[e]) || [];
  const u = o ? t.rest.get(`${n}/search?${vr(c, l)}`) : t.rest.post(`${n}/search`, { ...c, ...l });
  return ga(t, e, u);
}, tu = (t, e, n, r) => {
  var o;
  const i = {};
  i.query = n || "", i.shards = ((o = t.currentShards) == null ? void 0 : o[e]) || [];
  const s = t.rest.get(
    `/kb/${e}/catalog?${r ? vr(i, r) : ""}`
  );
  return ga(t, e, s);
}, nu = (t, e, n, r, i, s) => {
  const o = {
    query: r || "",
    features: s
  };
  return i && (o.fields = ["a/title"]), t.rest.get(`${n}/suggest?${vr(o, {})}`).pipe(
    We((a) => H({ type: "error", status: a.status, detail: a.detail })),
    A((a) => a.type === "error" ? a : { ...a, type: "suggestions" })
  );
};
function ga(t, e, n) {
  return n.pipe(
    We((r) => H({ type: "error", status: r.status, detail: r.detail })),
    A((r) => r.type === "error" ? r : { ...r, type: "searchResults" }),
    qe((r) => {
      r.type === "searchResults" && r.shards && (t.currentShards = { ...t.currentShards, [e]: r.shards });
    })
  );
}
const vr = (t, e) => {
  Object.entries(e || {}).forEach(([r, i]) => {
    i != null && (Array.isArray(i) ? t[r] = i.map((s) => `${s}`) : typeof i == "object" ? Object.entries(i).forEach(([s, o]) => t[`${r}_${s}`] = `${o}`) : t[r] = `${i}`);
  });
  const n = new URLSearchParams();
  return Object.entries(t).forEach(
    ([r, i]) => Array.isArray(i) ? i.forEach((s) => n.append(r, s)) : n.append(r, i)
  ), n.toString();
};
var Rt;
((t) => {
  ((e) => {
    e.PARAGRAPHS = "paragraphs", e.RELATIONS = "relations";
  })(t.Features || (t.Features = {})), ((e) => {
    e.USER = "USER", e.NUCLIA = "NUCLIA";
  })(t.Author || (t.Author = {}));
})(Rt || (Rt = {}));
const ss = "_END_";
function ru(t, e, n, r = [], i = [Rt.Features.PARAGRAPHS], s = {}) {
  let o = 0, a, l, c = "";
  return t.rest.getStream(`${e}/chat`, {
    query: n,
    context: r,
    show: [B.BASIC, B.VALUES],
    features: i.length > 0 ? i : void 0,
    ...s
  }).pipe(
    A(({ data: u, incomplete: d, headers: f }) => {
      const h = f.get("X-Nuclia-Trace-Id") || "", g = f.get("NUCLIA-LEARNING-ID") || "";
      if (o === 0 && u.length >= 4 && (o = new DataView(u.buffer.slice(0, 4)).getUint32(0)), !a && o > 0 && u.length > o + 4) {
        const p = u.slice(4, o + 4);
        a = JSON.parse(atob(new TextDecoder().decode(p.buffer)));
      }
      if (a && (a.searchId = h), a && u.length > o + 4 && (c = new TextDecoder().decode(u.slice(o + 4).buffer), c.includes(ss))) {
        let p;
        if ([c, p] = c.split(ss), p)
          try {
            l = JSON.parse(atob(p)), a.relations = l;
          } catch (_) {
            console.warn(_);
          }
      }
      return { type: "answer", text: c, sources: a, incomplete: d, id: g };
    }),
    We((u) => H({ type: "error", status: u.status, detail: u.detail || "" }))
  );
}
const Xr = (t) => [...new Set([...t].map((e) => JSON.stringify(e)))].map((e) => JSON.parse(e)), iu = (t, e, n, r, i) => {
  const s = Xr(
    i.filter((u) => ou(u, t, e)).map((u) => u.token).reduce((u, d) => u.concat(d), [])
  ), a = Xr(
    i.filter((u) => va(u, t, e)).map((u) => u.paragraphs).reduce((u, d) => u.concat(d), [])
  ).filter((u) => u.key !== n), l = i.filter((u) => u.field.field !== t || u.field.field_type !== e), c = r.length > 0 ? [...a, { key: n, classifications: r }] : a;
  return s.length > 0 || c.length > 0 ? [
    ...l,
    {
      field: { field: t, field_type: e },
      token: s.length > 0 ? s : void 0,
      paragraphs: c.length > 0 ? c : void 0
    }
  ] : l;
}, su = (t, e, n, r) => {
  const i = Xr(
    r.filter((o) => va(o, t, e)).map((o) => o.paragraphs).reduce((o, a) => o.concat(a), [])
  ), s = r.filter((o) => o.field.field !== t || o.field.field_type !== e);
  return n.length > 0 || i.length > 0 ? [
    ...s,
    {
      field: { field: t, field_type: e },
      token: n.length > 0 ? n : void 0,
      paragraphs: i.length > 0 ? i : void 0
    }
  ] : s;
}, ou = (t, e, n) => t.field.field === e && t.field.field_type === n && t.token && t.token.length > 0, va = (t, e, n) => t.field.field === e && t.field.field_type === n && t.paragraphs && t.paragraphs.length > 0, os = (t, e, n) => t ? (Array.isArray(t) || (t = Array.from(t)), t.slice(e, n).join("")) : "";
class au {
  constructor(e) {
    U(this, "data", {});
    U(this, "fieldTextsCache", {});
    e.data || (e.data = {}), Object.assign(this, { ...e, title: this.formatTitle(e.title) });
  }
  getFields(e = ["files", "links", "texts", "keywordsets"]) {
    return Object.entries(this.data).filter(([n]) => e.includes(n)).map(([, n]) => n).filter((n) => !!n).map((n) => Object.values(n)).reduce((n, r) => n.concat(r), []);
  }
  getFieldData(e, n) {
    var i;
    const r = (i = this.data[e]) == null ? void 0 : i[n];
    return r || void 0;
  }
  getExtractedSummaries() {
    return this.getFields().filter((e) => {
      var n, r, i;
      return (i = (r = (n = e.extracted) == null ? void 0 : n.metadata) == null ? void 0 : r.metadata) == null ? void 0 : i.summary;
    }).map((e) => e.extracted.metadata.metadata.summary);
  }
  getExtractedTexts() {
    return this.getFields().filter((e) => {
      var n;
      return (n = e.extracted) == null ? void 0 : n.text;
    }).map((e) => e.extracted.text);
  }
  getFiles() {
    return this.getFields(["files"]).filter((e) => !!e && !!e.value && !!e.value.file).map((e) => e.value.file);
  }
  getThumbnails() {
    return this.getFields(["files"]).map((e) => {
      var n, r;
      return (r = (n = e.extracted) == null ? void 0 : n.file) == null ? void 0 : r.file_thumbnail;
    }).concat(this.getFields(["links"]).map((e) => {
      var n, r;
      return (r = (n = e.extracted) == null ? void 0 : n.link) == null ? void 0 : r.link_thumbnail;
    })).filter((e) => !!e);
  }
  getAnnotatedEntities() {
    return (this.fieldmetadata || []).filter((n) => n.token && n.token.length > 0).map((n) => n.token).reduce(
      (n, r) => (r.filter((i) => !i.cancelled_by_user).forEach((i) => {
        n[i.klass] || (n[i.klass] = []), n[i.klass].push(i.token);
      }), n),
      {}
    );
  }
  getNamedEntities() {
    return this.getFields().filter((e) => {
      var n, r, i;
      return (i = (r = (n = e.extracted) == null ? void 0 : n.metadata) == null ? void 0 : r.metadata) == null ? void 0 : i.ner;
    }).map(
      (e) => Object.entries(e.extracted.metadata.metadata.ner).reduce(
        (n, [r, i]) => (n[i] = (n[i] || []).concat([r]), n),
        {}
      )
    ).reduce((e, n) => (Object.entries(n).forEach(([r, i]) => {
      e[r] = (e[r] || []).concat(i);
    }), e), {});
  }
  getClassifications() {
    var r, i, s;
    const e = (((r = this.usermetadata) == null ? void 0 : r.classifications) || []).filter((o) => !o.cancelled_by_user), n = (((i = this.usermetadata) == null ? void 0 : i.classifications) || []).filter((o) => o.cancelled_by_user);
    return (((s = this.computedmetadata) == null ? void 0 : s.field_classifications) || []).reduce((o, a) => (a.classifications.forEach((l) => {
      const c = o.find((d) => d.label === l.label && d.labelset === l.labelset), u = n.find(
        (d) => d.label === l.label && d.labelset === l.labelset
      );
      !c && !u && o.push({ ...l, immutable: !0 });
    }), o), e);
  }
  getPositionedNamedEntities(e, n) {
    var i, s, o, a;
    const r = (a = (o = (s = (i = this.data[e]) == null ? void 0 : i[n]) == null ? void 0 : s.extracted) == null ? void 0 : o.metadata) == null ? void 0 : a.metadata.positions;
    return r ? Object.entries(r).reduce((l, [c, u]) => {
      const d = c.split("/")[0];
      return u.position.forEach((f) => {
        l.push({ entity: u.entity, family: d, ...f });
      }), l;
    }, []) : [];
  }
  formatTitle(e) {
    e = e || "–";
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  }
  getParagraphText(e, n, r) {
    return os(this.getFieldText(e, n), r.start, r.end);
  }
  getSentenceText(e, n, r) {
    return os(this.getFieldText(e, n), r.start, r.end);
  }
  getFieldText(e, n) {
    var i, s;
    const r = `${e}-${n}`;
    if (!this.fieldTextsCache[r]) {
      const o = this.getFieldData(`${e}s`, n);
      this.fieldTextsCache[r] = Array.from(((s = (i = o == null ? void 0 : o.extracted) == null ? void 0 : i.text) == null ? void 0 : s.text) || "");
    }
    return this.fieldTextsCache[r];
  }
}
class Cr extends au {
  constructor(n, r, i) {
    super(i);
    U(this, "kb");
    U(this, "uuid");
    U(this, "nuclia");
    this.nuclia = n, this.kb = r, this.uuid = i.id;
  }
  get kbPath() {
    return `/kb/${this.kb}`;
  }
  get path() {
    if (!this.uuid && !this.slug)
      throw new Error("Resource must have either uuid or slug");
    return this.uuid ? `${this.kbPath}/resource/${this.uuid}` : `${this.kbPath}/slug/${this.slug}`;
  }
  modify(n, r = !0) {
    return this.nuclia.rest.patch(this.path, n, void 0, void 0, r);
  }
  delete(n = !0) {
    return this.nuclia.rest.delete(this.path, void 0, n);
  }
  reprocess() {
    return this.nuclia.rest.post(`${this.path}/reprocess`, {}, void 0, void 0, !0);
  }
  getField(n, r, i = [da.VALUE], s = [
    Se.TEXT,
    Se.SHORTENED_METADATA,
    Se.LINK,
    Se.FILE
  ]) {
    const o = [...i.map((a) => `show=${a}`), ...s.map((a) => `extracted=${a}`)];
    return this.nuclia.rest.get(`${this.path}/${n}/${r}?${o.join("&")}`);
  }
  getThumbnailsUrl() {
    return gr(
      this.getThumbnails().filter((n) => n.uri).map((n) => this.nuclia.rest.getObjectURL(n.uri))
    );
  }
  deleteField(n, r) {
    return this.nuclia.rest.delete(`${this.path}/${n}/${r}`);
  }
  setField(n, r, i) {
    return this.nuclia.rest.put(`${this.path}/${n}/${r}`, i);
  }
  upload(n, r, i, s) {
    return Ti(this.nuclia, `${this.path}/file/${n}`, r, !!i, s);
  }
  batchUpload(n) {
    return ca(this.nuclia, this.path, n, !0);
  }
  search(n, r = [], i) {
    return pa(this.nuclia, this.kb, this.path, n, r, i, !0);
  }
  find(n, r = [], i) {
    return ha(
      this.nuclia,
      this.kb,
      this.kbPath,
      n,
      r,
      this.uuid ? { ...i, resource_filters: [this.uuid] } : i
    );
  }
  setLabels(n, r, i, s) {
    const o = iu(n, r, i, s, this.fieldmetadata || []);
    return this.modify({ fieldmetadata: o }).pipe(qe(() => this.fieldmetadata = o));
  }
  setEntities(n, r, i) {
    const s = su(n, r, i, this.fieldmetadata || []);
    return this.modify({ fieldmetadata: s }).pipe(qe(() => this.fieldmetadata = s));
  }
}
const lu = (t) => {
  switch (t) {
    case D.text:
    case D.file:
    case D.link:
    case D.keywordset:
      return `${t}s`;
    default:
      return null;
  }
};
function as(t) {
  switch (t) {
    case rt.conversation:
      return D.conversation;
    case rt.datetime:
      return D.datetime;
    case rt.file:
      return D.file;
    case rt.layout:
      return D.layout;
    case rt.keywordset:
      return D.keywordset;
    case rt.link:
      return D.link;
    case rt.text:
      return D.text;
    case rt.generic:
      return D.generic;
    default:
      return null;
  }
}
function Ri(t) {
  switch (t) {
    case D.file:
      return D.file;
    case D.link:
      return D.link;
    case D.text:
      return D.text;
    case D.layout:
      return D.layout;
    case D.conversation:
      return D.conversation;
    case D.datetime:
      return D.datetime;
    case D.generic:
      return D.generic;
    default:
      return null;
  }
}
var _a = /* @__PURE__ */ ((t) => (t.finished = "finished", t.not_running = "not_running", t.running = "running", t.started = "started", t.stopped = "stopped", t))(_a || {});
class cu {
  constructor(e, n) {
    U(this, "kb");
    U(this, "nuclia");
    this.kb = e, this.nuclia = n;
  }
  start(e, n) {
    return this.nuclia.rest.post(`${this.kb.path}/train/${e}/start`, n || {});
  }
  stop(e) {
    return this.nuclia.rest.post(`${this.kb.path}/train/${e}/stop`, {});
  }
  getStatus(e) {
    return this.nuclia.rest.get(`${this.kb.path}/train/${e}/inspect`).pipe(We(() => H({ task: "", status: _a.not_running })));
  }
  getExecutions(e = 0) {
    return this.nuclia.rest.get(`${this.kb.path}/train/executions?page=${e}`);
  }
  hasModel(e) {
    return this.nuclia.rest.get(`${this.kb.path}/train/${e}/model/model/nuclia.json`).pipe(
      A(() => !0),
      We(() => H(!1))
    );
  }
}
class ma {
  constructor(e, n, r) {
    U(this, "account");
    U(this, "nuclia");
    this.nuclia = e, this.account = n, Object.assign(this, r), !r.id && r.uuid && (this.id = r.uuid), !r.title && r.slug && (this.title = r.slug);
  }
  get path() {
    return `/kb/${this.id}`;
  }
  get fullpath() {
    return `${this.nuclia.regionalBackend}/v1/kb/${this.id}`;
  }
  getEntities(e = !1) {
    return this.nuclia.rest.get(`${this.path}/entitiesgroups?show_entities=${e}`).pipe(A((n) => n.groups));
  }
  getEntitiesGroup(e) {
    return this.nuclia.rest.get(`${this.path}/entitiesgroup/${e}`);
  }
  getSynonyms() {
    return this.nuclia.rest.get(`${this.path}/custom-synonyms`).pipe(A((e) => e.synonyms));
  }
  getLabels() {
    return this.nuclia.rest.get(`${this.path}/labelsets`).pipe(
      A((e) => (e == null ? void 0 : e.labelsets) || {}),
      We(() => H({}))
    );
  }
  getResource(e, n = [
    B.BASIC,
    B.ORIGIN,
    B.RELATIONS,
    B.VALUES,
    B.EXTRACTED,
    B.ERRORS
  ], r = [
    Se.TEXT,
    Se.METADATA,
    Se.LINK,
    Se.FILE
  ]) {
    return this._getResource(e, void 0, n, r);
  }
  getResourceBySlug(e, n = [
    B.BASIC,
    B.ORIGIN,
    B.RELATIONS,
    B.VALUES,
    B.EXTRACTED,
    B.ERRORS
  ], r = [
    Se.TEXT,
    Se.METADATA,
    Se.LINK,
    Se.FILE
  ]) {
    return this._getResource(void 0, e, n, r);
  }
  _getResource(e, n, r = [
    B.BASIC,
    B.ORIGIN,
    B.RELATIONS,
    B.VALUES,
    B.EXTRACTED,
    B.ERRORS
  ], i = [
    Se.TEXT,
    Se.METADATA,
    Se.LINK,
    Se.FILE
  ]) {
    const s = [...r.map((o) => `show=${o}`), ...i.map((o) => `extracted=${o}`)];
    return this.nuclia.rest.get(`${this._getPath(e, n)}?${s.join("&")}`).pipe(A((o) => new Cr(this.nuclia, this.id, o)));
  }
  _getPath(e, n) {
    return e ? `${this.path}/resource/${e}` : `${this.path}/slug/${n}`;
  }
  getResourceFromData(e) {
    return new Cr(this.nuclia, this.id, e);
  }
  chat(e, n, r, i) {
    return ru(this.nuclia, this.path, e, n, r, i);
  }
  find(e, n = [], r) {
    return ha(this.nuclia, this.id, this.path, e, n, r);
  }
  search(e, n = [], r) {
    return pa(this.nuclia, this.id, this.path, e, n, r);
  }
  catalog(e, n) {
    return tu(this.nuclia, this.id, e, n);
  }
  suggest(e, n = !1, r = []) {
    return nu(this.nuclia, this.id, this.path, e, n, r);
  }
  feedback(e, n) {
    return this.nuclia.rest.post(`${this.path}/feedback`, { ident: e, good: n, task: "CHAT", feedback: "" });
  }
  counters() {
    return this.nuclia.rest.get(`/kb/${this.id}/counters`);
  }
  listResources(e, n) {
    const r = [e ? `page=${e}` : "", n ? `size=${n}` : ""].filter((i) => i).join("&");
    return this.nuclia.rest.get(`/kb/${this.id}/resources${r ? "?" + r : ""}`).pipe(
      A((i) => ({
        resources: i.resources.map((s) => new Cr(this.nuclia, this.id, s)),
        pagination: i.pagination
      }))
    );
  }
  getTempToken() {
    const e = this.account || this.nuclia.options.account, n = this.slug || this.nuclia.options.kbSlug;
    if (this.nuclia.options.standalone)
      return this.nuclia.rest.get("/temp-access-token").pipe(A((r) => r.token));
    if (!e || !n)
      throw new Error("Account and KB slug are required to get a temp token");
    return this.nuclia.rest.post(`/account/${e}/kb/${n}/ephemeral_tokens`, {}).pipe(A((r) => r.token));
  }
  listActivity(e, n, r) {
    const i = [e ? `type=${e}` : "", n ? `page=${n}` : "", r ? `size=${r}` : ""].filter((s) => s).join("&");
    return this.nuclia.rest.get(`/kb/${this.id}/activity${i ? "?" + i : ""}`);
  }
  listActivityDownloads(e) {
    return this.nuclia.rest.get(`/kb/${this.id}/activity/downloads?type=${e}`);
  }
  downloadActivity(e, n) {
    return this.nuclia.rest.get(`/kb/${this.id}/activity/download?type=${e}&month=${n}`, {}, !0).pipe(L((r) => fe(r.blob())));
  }
  getConfiguration() {
    return this.nuclia.rest.get(`/kb/${this.id}/configuration`);
  }
}
class ls extends ma {
  constructor() {
    super(...arguments);
    U(this, "admin");
    U(this, "contrib");
    U(this, "_training");
  }
  get training() {
    return this._training || (this._training = new cu(this, this.nuclia)), this._training;
  }
  modify(n) {
    const r = this.account === "local" ? `/kb/${this.id}` : `/account/${this.account}/kb/${this.slug}`;
    return this.nuclia.rest.patch(r, n);
  }
  publish(n) {
    return this.modify({ state: n ? "PUBLISHED" : "PRIVATE" });
  }
  delete() {
    return this.nuclia.rest.delete(`/account/${this.account}/kb/${this.slug}`);
  }
  createEntitiesGroup(n, r) {
    return this.nuclia.rest.post(`${this.path}/entitiesgroups`, { ...r, group: n });
  }
  updateEntitiesGroup(n, r) {
    return this.nuclia.rest.patch(`${this.path}/entitiesgroup/${n}`, r);
  }
  deleteEntitiesGroup(n) {
    return this.nuclia.rest.delete(`${this.path}/entitiesgroup/${n}`);
  }
  setLabelSet(n, r) {
    return this.nuclia.rest.post(`${this.path}/labelset/${n}`, r);
  }
  deleteLabelSet(n) {
    return this.nuclia.rest.delete(`${this.path}/labelset/${n}`);
  }
  setSynonyms(n) {
    return this.nuclia.rest.put(`${this.path}/custom-synonyms`, { synonyms: n });
  }
  deleteAllSynonyms() {
    return this.nuclia.rest.delete(`${this.path}/custom-synonyms`);
  }
  createResource(n, r = !0) {
    return this.nuclia.rest.post(
      `${this.path}/resources`,
      n,
      void 0,
      void 0,
      r
    );
  }
  createLinkResource(n, r, i = !0, s) {
    return this.createResource(
      {
        links: { link: n },
        usermetadata: r,
        title: n.uri,
        icon: "application/stf-link",
        ...s ? { origin: s } : {}
      },
      i
    );
  }
  hasResource(n) {
    return this.nuclia.rest.get(`${this.path}/slug/${n}`).pipe(
      A(() => !0),
      We(() => H(!1))
    );
  }
  createOrUpdateResource(n, r = !0) {
    return (n.slug ? this.hasResource(n.slug) : H(!1)).pipe(
      L(
        (s) => s ? this.getResourceFromData({ id: "", slug: n.slug }).modify(n, r) : this.createResource(n, r)
      )
    );
  }
  upload(n, r, i) {
    return Ti(this.nuclia, `/kb/${this.id}`, n, !!r, i);
  }
  batchUpload(n) {
    return ca(this.nuclia, `/kb/${this.id}`, n, !1);
  }
  getServiceAccounts() {
    return this.nuclia.rest.get(`/account/${this.account}/kb/${this.slug}/service_accounts`);
  }
  createServiceAccount(n) {
    return this.nuclia.rest.post(`/account/${this.account}/kb/${this.slug}/service_accounts`, n);
  }
  deleteServiceAccount(n) {
    return this.nuclia.rest.delete(`/account/${this.account}/kb/${this.slug}/service_account/${n}`);
  }
  createKey(n, r) {
    return this.nuclia.rest.post(`/account/${this.account}/kb/${this.slug}/service_account/${n}/keys`, { expires: r });
  }
  createKeyForService(n, r) {
    return this.getServiceAccounts().pipe(
      L((i) => {
        const s = i.find((o) => o.title === n.title && o.role === n.role);
        return s ? H(s) : this.createServiceAccount(n).pipe(
          L(() => this.getServiceAccounts()),
          A(
            (o) => o.find((a) => a.title === n.title && a.role === n.role)
          )
        );
      }),
      L((i) => i ? this.createKey(i.id, r) : H({ token: "" }))
    );
  }
  deleteKey(n, r) {
    return this.nuclia.rest.delete(`/account/${this.account}/kb/${this.slug}/service_account/${n}/key/${r}`);
  }
  setConfiguration(n) {
    return this.nuclia.rest.patch(`/kb/${this.id}/configuration`, n);
  }
}
var er = /* @__PURE__ */ ((t) => (t.RESOURCES = "RESOURCES", t.PARAGRAPHS = "PARAGRAPHS", t.SELECTIONS = "SELECTIONS", t))(er || {});
class uu {
  constructor(e) {
    U(this, "nuclia");
    this.nuclia = e;
  }
  getAccounts() {
    return this.nuclia.rest.get("/accounts");
  }
  createAccount(e) {
    return this.nuclia.rest.post("/accounts", e);
  }
  modifyAccount(e, n) {
    return this.nuclia.rest.patch(`/account/${e}`, n);
  }
  deleteAccount(e) {
    return this.nuclia.rest.delete(`/account/${e}`);
  }
  getAccountStatus(e) {
    return this.nuclia.rest.get(`/account/${e}/status`);
  }
  getWelcome() {
    return this.nuclia.rest.get("/user/welcome");
  }
  getAccount(e) {
    if (e = e || this.nuclia.options.account, !e)
      throw new Error("Account is not set");
    return this.nuclia.rest.get(`/account/${e}`);
  }
  getStandaloneKbs() {
    return this.nuclia.rest.get("/kbs").pipe(A((e) => e.kbs));
  }
  getKnowledgeBoxes(e) {
    return this.nuclia.rest.get(`/account/${e}/kbs`);
  }
  getKnowledgeBox(e, n) {
    if (e = e || this.nuclia.options.account, e) {
      const r = n || this.nuclia.options.knowledgeBox || this.nuclia.options.kbSlug;
      if (!r)
        throw new Error("account and knowledgeBox must be defined in the Nuclia options");
      const i = this.nuclia.options.standalone ? `/kb/${n}` : `/account/${e}/kb/${r}`;
      return this.nuclia.rest.get(i).pipe(
        L(
          (s) => this.nuclia.options.zone || this.nuclia.options.standalone ? H(s) : this.nuclia.rest.getZoneSlug(s.zone).pipe(
            qe((o) => this.nuclia.options.zone = o),
            A(() => s)
          )
        ),
        A((s) => new ls(this.nuclia, e, s))
      );
    } else {
      if (!this.nuclia.options.knowledgeBox || !this.nuclia.options.zone)
        throw new Error("zone must be defined in the Nuclia options");
      return H(
        new ls(this.nuclia, "", {
          id: this.nuclia.options.knowledgeBox,
          zone: this.nuclia.options.zone
        })
      );
    }
  }
  createKnowledgeBox(e, n) {
    return this.nuclia.rest.post(this.nuclia.options.standalone ? "/kbs" : `/account/${e}/kbs`, n).pipe(
      L((r) => {
        const i = r.id || r.uuid;
        if (!i)
          throw "KnowledgeBox creation failed";
        return this.getKnowledgeBox(e, this.nuclia.options.standalone ? i : n.slug);
      })
    );
  }
  getStats(e, n, r, i = la.DAY, s) {
    const o = [`period=${i}`, `stats=${n}`];
    return s && o.push(`utctime=${s}`), r && o.push(`knowledgebox=${r}`), this.nuclia.rest.get(`/account/${e}/stats?${o.join("&")}`).pipe(
      A((a) => a.data),
      ae((a) => !!a)
    );
  }
  upload(e) {
    if (!this.hasNUAClient())
      throw new Error("NUA key is needed to be able to call /process");
    return Xc(this.nuclia, this.getNUAKey(), e, { md5: e.md5 }).pipe(
      L(
        (n) => this.nuclia.rest.post(
          "/processing/push",
          {
            filefield: { file: n }
          },
          this.getNUAHeader()
        )
      )
    );
  }
  pull() {
    if (!this.hasNUAClient())
      throw new Error("NUA key is needed to be able to call /processing");
    return this.nuclia.rest.get("/processing/pull", this.getNUAHeader());
  }
  getProcessingStatus(e) {
    if (!e && !this.hasNUAClient())
      throw new Error("NUA key or account id is needed to be able to call /processing/status");
    const n = e ? `/processing/status?account_id=${e}` : "/processing/status", r = e ? void 0 : this.getNUAHeader();
    return this.nuclia.rest.get(n, r);
  }
  getProcessingStats(e, n) {
    const r = this.hasNUAClient();
    if (!n && !r)
      throw new Error("NUA key or account id is needed to be able to call /processing/stats");
    const i = r ? `/processing/stats${e ? "?period=" + e : ""}` : `/processing/stats?account_id=${n}${e ? "&period=" + e : ""}`, s = r ? this.getNUAHeader() : void 0;
    return this.nuclia.rest.get(i, s).pipe(A((o) => o.data));
  }
  getNUAActivity(e, n, r = 0) {
    return this.nuclia.rest.get(
      `/account/${e}/nua_client/${n}/activity?page=${r}`
    );
  }
  getNUAClients(e) {
    return this.nuclia.rest.get(`/account/${e}/nua_clients`).pipe(A((n) => n.clients));
  }
  getNUAClient(e, n) {
    return this.nuclia.rest.get(`/account/${e}/nua_client/${n}`);
  }
  hasNUAClient() {
    return !!this.getNUAKey();
  }
  getNUAKey() {
    return this.nuclia.options.nuaKey || "";
  }
  getNUAHeader() {
    return {
      "x-stf-nuakey": `Bearer ${this.getNUAKey()}`
    };
  }
  createNUAClient(e, n) {
    const r = { ...n };
    return r.webhook && (r.processing_webhook = { uri: r.webhook }, delete r.webhook), this.nuclia.rest.post(`/account/${e}/nua_clients`, r).pipe(
      We((i) => {
        if (i.status === 409 && n.client_id)
          return this.renewNUAClient(e, n.client_id);
        throw i;
      }),
      qe((i) => {
        this.nuclia.options.client === "desktop" && (this.nuclia.options.nuaKey = i.token, localStorage.setItem(Gc, i.token));
      })
    );
  }
  renewNUAClient(e, n) {
    return this.nuclia.rest.put(
      `/account/${e}/nua_client/${n}/key`,
      {}
    );
  }
  deleteNUAClient(e, n) {
    return this.nuclia.rest.delete(`/account/${e}/nua_client/${n}`);
  }
  getLearningConfigurations() {
    return this.nuclia.rest.get("/learning/configuration/schema");
  }
  predictTokens(e) {
    if (!this.hasNUAClient())
      throw new Error("NUA key is needed to be able to call /predict");
    return this.nuclia.rest.get(`/predict/tokens?text=${encodeURIComponent(e)}`, this.getNUAHeader()).pipe(A((n) => n.tokens));
  }
}
class du {
  constructor(e) {
    U(this, "nuclia");
    U(this, "zones");
    this.nuclia = e;
  }
  get(e, n, r) {
    return this.fetch("GET", e, void 0, n, r);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post(e, n, r, i, s) {
    return this.fetch("POST", e, n, r, i, s);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  put(e, n, r, i, s) {
    return this.fetch("PUT", e, n, r, i, s);
  }
  patch(e, n, r, i, s) {
    return this.fetch("PATCH", e, n, r, i, s);
  }
  delete(e, n, r) {
    return this.fetch("DELETE", e, void 0, n, !0, r);
  }
  head(e, n) {
    return this.fetch("HEAD", e, void 0, n, !0);
  }
  getHeaders(e, n, r, i = !1) {
    const s = r && r["x-stf-nuakey"] ? {} : this.nuclia.auth.getAuthHeaders(e, n), o = {
      "content-type": "application/json",
      "x-ndb-client": this.nuclia.options.client || "web",
      ...s
    };
    return i && (o["x-synchronous"] = `${i}`), {
      ...o,
      ...r
    };
  }
  fetch(e, n, r, i, s, o = !1) {
    const a = i && i["content-type"];
    return fe(
      fetch(this.getFullUrl(n), {
        method: e,
        headers: this.getHeaders(e, n, i, o),
        body: a ? r : JSON.stringify(r)
      }).then((l) => {
        var c;
        return l.ok ? s ? l : l.json().then(
          (u) => u,
          () => {
            console.warn(`${n} did not return a valid JSON`);
          }
        ) : ((c = this.nuclia.events) == null || c.emit("api-error", {
          status: l.status,
          path: this.getFullUrl(n)
        }), l.json().then(
          (u) => {
            throw { status: l.status, body: u };
          },
          () => {
            throw { status: l.status };
          }
        ));
      })
    );
  }
  getFullUrl(e) {
    const r = e.startsWith("/account") || e.startsWith("/user") || e.startsWith("/auth") || e.startsWith("/zones") || e.startsWith("/billing") || e.startsWith("/configuration") || e.startsWith("/manage") || e.includes("/activity") && !e.includes("/activity/download") || this.nuclia.options.standalone ? this.nuclia.backend : this.nuclia.regionalBackend, i = e.startsWith("/auth") || e.startsWith("/export") || e.startsWith("/billing") || e.startsWith("/configuration") || e.startsWith("/manage") ? "" : "/v1";
    return `${r}${i}${e}`;
  }
  getZones() {
    return this.zones ? H(this.zones) : this.get("/zones").pipe(
      A((e) => {
        const n = e.reduce((r, i) => (r[i.id] = i.slug, r), {});
        return this.zones = n, n;
      })
    );
  }
  getZoneSlug(e) {
    return this.getZones().pipe(A((n) => n[e]));
  }
  getObjectURL(e) {
    return this.get(e, void 0, !0).pipe(
      L((n) => fe(n.blob())),
      A((n) => URL.createObjectURL(n))
    );
  }
  getStream(e, n) {
    return e = this.getFullUrl(e), new _e((r) => {
      fetch(e, { method: "POST", headers: this.getHeaders("POST", e), body: JSON.stringify(n) }).then(
        (i) => {
          var l;
          const s = (l = i.body) == null ? void 0 : l.getReader(), o = i.headers, a = i.status;
          if (!s || !i.ok)
            r.error({ status: a }), r.complete();
          else {
            let c = new Uint8Array();
            const u = () => {
              s.read().then(({ done: d, value: f }) => {
                d && (r.next({ data: c, incomplete: !1, headers: o }), r.complete()), f && (c = this.concat(c, f), r.next({ data: c, incomplete: !0, headers: o }), u());
              });
            };
            u();
          }
        }
      );
    });
  }
  concat(e, n) {
    const r = new Uint8Array(e.length + n.length);
    return r.set(e), r.set(n, e.length), r;
  }
}
class fu {
  constructor() {
    U(this, "messages", new Vt());
  }
  emit(e, n) {
    this.messages.next({ name: e, data: n });
  }
  on(e) {
    return this.messages.asObservable().pipe(
      ae((n) => n.name === e),
      A((n) => n.data)
    );
  }
}
class hu {
  constructor(e) {
    U(this, "options");
    U(this, "auth");
    U(this, "rest");
    U(this, "db");
    U(this, "currentShards", {});
    U(this, "events", new fu());
    U(this, "readKb");
    this.options = e, this.auth = new Vc(this), this.rest = new du(this), this.db = new uu(this);
  }
  get backend() {
    return this.options.backend;
  }
  get regionalBackend() {
    return this.options.backend.replace("//", `//${this.options.zone}.`);
  }
  get knowledgeBox() {
    if (!this.options.knowledgeBox || !this.options.zone && !this.options.standalone)
      throw new Error("zone and knowledge box id must be defined in the Nuclia options");
    return this.readKb || (this.readKb = new ma(this, "", {
      id: this.options.knowledgeBox,
      zone: this.options.zone || ""
    })), this.readKb;
  }
  get asyncKnowledgeBox() {
    return new Proxy(this.knowledgeBox, {
      get(e, n) {
        const r = Reflect.get(e, n);
        return typeof r == "function" ? (...i) => Oc(r.bind(e)(...i)) : r;
      }
    });
  }
}
let ya = "https://cdn.nuclia.cloud/";
const pu = (t) => ya = t, _r = () => ya, gu = () => {
  const t = "nuclia-fonts-link";
  if (!document.getElementById(t)) {
    const e = document.createElement("link");
    e.id = t, e.href = "https://fonts.googleapis.com/css?family=Inter:300,400,600,700", e.rel = "stylesheet", (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
  }
}, vu = () => aa(`${_r()}icons/glyphs-sprite.svg`).pipe(L((t) => t.text())), mr = (t) => `__nuclia_${t}__`, Fn = (t) => {
  const e = t.toString(), n = `${location.pathname}${location.hash.split("?")[0]}`, r = e ? `${n}?${e}` : n;
  history.replaceState(null, "", r);
};
function dn() {
  const t = window.location.hash && window.location.hash.includes("?") ? window.location.hash.slice(window.location.hash.indexOf("?")) : window.location.search;
  return new URLSearchParams(t);
}
const _u = (t) => {
  const e = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/, n = t.match(e);
  return n && n[2].length === 11 ? n[2] : "";
}, mu = (t) => !!_u(t), yu = {
  DATE: "#FF8989",
  EVENT: "#CBA2DA",
  FAC: "#81D8AC",
  GPE: "#6EB0EC",
  LANGUAGE: "#D1D3FF",
  LAW: "#9295E7",
  LOC: "#D1BEA9",
  MAIL: "#D2F1E1",
  MONEY: "#FF8C4B",
  NORP: "#CFE8FF",
  ORG: "#A0E3FF",
  PERCENT: "#FBDBB9",
  PERSON: "#FFDA69",
  PRODUCT: "#FF6363",
  QUANTITY: "#E7D2EF",
  TIME: "#21B8A6",
  WORK_OF_ART: "#ffc7c7"
};
function Yr(t, e) {
  const n = new URL(t);
  if (n.protocol.startsWith("http")) {
    let r = "";
    const i = "fragmentDirective" in document;
    e && i && !n.hash && (r = bu(e), r && (t = t + r)), window.location.href = t;
  } else
    console.info(`Invalid URL: ${t}`);
}
function bu(t) {
  const e = (s) => encodeURIComponent(s).replace(/-/g, "%2D");
  t = t.replace(/<mark>/g, "").replace(/<\/mark>/g, "");
  const r = /\s+\n\s+/, i = t.trim().split(r).filter((s) => s.length > 0).map((s) => s.split(/\s+/));
  if (i.length === 1)
    return `#:~:text=${e(i[0].join(" "))}`;
  {
    const s = i[0], o = i[i.length - 1];
    if (s.length >= 4 && o.length >= 4)
      return `#:~:text=${e(s.slice(0, 6).join(" "))},${e(o.slice(-6).join(" "))}`;
  }
  return "";
}
const ba = new An("en"), Zr = new An({}), wu = (t, e) => {
  const n = Zr.getValue();
  Zr.next({ ...n, [t]: { ...n[t] || {}, ...e } });
}, ku = (t) => fetch(`${_r()}i18n/${t}.json`).then((e) => e.json()).then((e) => wu(t, e)), wa = (t) => {
  ku(t).then(
    () => ba.next(t),
    () => {
      t !== "en" && wa("en");
    }
  );
}, Su = new RegExp(/[<>]/gim), Eu = (t, e, n, r) => {
  var s, o;
  let i = ((s = e[t]) == null ? void 0 : s[n]) || ((o = e.en) == null ? void 0 : o[n]);
  return i && r && Object.keys(r).forEach((a) => {
    let l = r[a];
    typeof l == "string" && (l = l.replace(Su, (c) => "&#" + c.charCodeAt(0) + ";")), i = i.replace(new RegExp(`{{${a}}}`, "g"), l);
  }), i || n;
}, Ft = ct([
  ba,
  Zr
]).pipe(
  A(
    ([t, e]) => (n, r) => Eu(t, e, n, r)
  )
);
class Gt {
  constructor(e) {
    U(this, "store");
    U(this, "initialState");
    this.initialState = e, this.store = new An(e);
  }
  reader(e) {
    const n = this.store.asObservable().pipe(A(e));
    return n.getValue = () => e(this.store.getValue()), n;
  }
  writer(e, n) {
    const r = this.reader(e);
    return r.set = (i) => {
      const s = this.store.getValue();
      this.store.next(n(s, i));
    }, r;
  }
  action(e) {
    const n = this.reader(() => {
    });
    return n.do = () => {
      const r = this.store.getValue();
      this.store.next(e(r));
    }, n;
  }
  reset() {
    this.store.next(this.initialState);
  }
}
class Au extends An {
  set(e) {
    super.next(e);
  }
  update(e) {
    super.next(e(super.value));
  }
}
function xn(t) {
  return new Au(t);
}
const Iu = {
  type: "findResults",
  total: 0,
  page_number: 0,
  next_page: !1,
  page_size: 0,
  query: ""
}, ka = {
  ...Iu,
  resultList: []
}, ei = {
  type: "suggestions",
  paragraphs: {}
}, ze = xn(null), Sa = xn("input.placeholder");
ze.pipe(A((t) => !!(t != null && t.navigateToLink)));
ze.pipe(A((t) => !!(t != null && t.navigateToFile)));
ze.pipe(A((t) => !!(t != null && t.filter)));
const wn = ze.pipe(A((t) => !!(t != null && t.answers)));
ze.pipe(A((t) => !!(t != null && t.knowledgeGraph)));
const xu = ze.pipe(A((t) => !!(t != null && t.suggestEntities)));
ze.pipe(A((t) => !!(t != null && t.displayMetadata)));
ze.pipe(A((t) => !!(t != null && t.hideThumbnails)));
const Ea = ct([
  wn,
  ze.pipe(A((t) => !!(t != null && t.onlyAnswers)))
]).pipe(A(([t, e]) => t && e)), Tu = ct([
  wn,
  ze.pipe(A((t) => !!(t != null && t.hideSources)))
]).pipe(A(([t, e]) => t && e)), Ru = () => {
  ze.set({ ...ze.value || {}, answers: !1 });
}, bt = new Gt({
  typeAhead: "",
  suggestions: {
    results: ei
  }
}), Aa = new Vt(), tn = bt.writer(
  (t) => t.typeAhead,
  (t, e) => ({
    ...t,
    typeAhead: e
  })
), Pu = bt.writer(
  (t) => t.suggestions,
  (t, e) => ({
    ...t,
    suggestions: e,
    error: void 0
  })
), Ia = bt.writer(
  (t) => t.error,
  (t, e) => ({
    ...t,
    error: e
  })
), xa = bt.reader((t) => !!t.error), Ta = bt.reader(
  (t) => {
    var e;
    return ((e = t.suggestions.results.paragraphs) == null ? void 0 : e.results) || [];
  }
), Ou = bt.reader(
  (t) => t.suggestions.labels || []
), Fu = bt.reader(
  (t) => {
    var e;
    return ((e = t.suggestions.results.entities) == null ? void 0 : e.entities) || [];
  }
), Cu = ct([
  Ta,
  Ou,
  Fu,
  xu
]).pipe(
  A(
    ([t, e, n, r]) => t.length > 0 || e.length > 0 || n.length > 0 && r
    // TODO: canSuggestEntities can be deleted once "features" param works properly on suggest endpoint
  )
);
let Ra = "https://cdn.nuclia.cloud/";
const $u = (t) => Ra = t, ju = () => Ra, fn = Mu() && localStorage.getItem("nuclia_debug") === "true" ? console.log : () => {
};
function Mu() {
  try {
    return localStorage.getItem("nuclia_debug"), !0;
  } catch {
    return !1;
  }
}
async function Nu(t, e, n) {
  return new Vu(t, e, n);
}
class cs {
  constructor(e) {
    e && (this.key = e), this.children = {}, this.end = !1;
  }
}
class Lu {
  constructor() {
    this.root = new cs(void 0);
  }
  insert(e, n, r) {
    let i = this.root;
    const s = [];
    for (const o of e)
      s.push(o);
    for (let o = 0; o < s.length; o++)
      i.children[s[o]] || (i.children[s[o]] = new cs(s[o]), i.children[s[o]].parent = i), i = i.children[s[o]], o === s.length - 1 && (i.end = !0, i.score = n, i.index = r);
  }
  find(e) {
    let n = this.root, r = 0;
    for (; r < e.length && n != null; )
      n = n.children[e[r]], r++;
    return n;
  }
}
class zu {
  constructor(e, n) {
    this.vocab = [], this.separator = "▁", this.UNK_INDEX = 100, this.doLowerCase = e, this.multilingual = n;
  }
  load(e) {
    this.vocab = this.loadVocab(e), this.trie = new Lu(), this.trie.insert("[CLS]", 1, 101), this.trie.insert("[SEP]", 1, 102);
    const n = this.multilingual ? 106 : 999;
    for (let r = n; r < this.vocab.length; r++) {
      const i = this.vocab[r];
      this.trie.insert(i, 1, r);
    }
  }
  loadVocab(e) {
    const n = new XMLHttpRequest();
    return n.open("GET", e, !1), n.send(null), JSON.parse(n.responseText);
  }
  processInput(e) {
    return e.split(" ").map((r) => r !== "[CLS]" && r !== "[SEP]" ? this.doLowerCase ? this.separator + r.toLowerCase().normalize("NFKC") : this.separator + r.normalize("NFKC") : r);
  }
  tokenize(e) {
    var i;
    let n = [];
    const r = this.processInput(e);
    for (let s = 0; s < r.length; s++) {
      const o = [];
      for (const d of r[s])
        o.push(d);
      let a = !1, l = 0;
      const c = [], u = o.length;
      for (; l < u; ) {
        let d = u, f;
        for (; l < d; ) {
          const h = o.slice(l, d).join(""), g = (i = this.trie) == null ? void 0 : i.find(h);
          if (g && g.end && g.index) {
            f = g.index;
            break;
          }
          d = d - 1;
        }
        if (!f) {
          a = !0;
          break;
        }
        c.push(f), l = d;
      }
      a ? n.push(this.UNK_INDEX) : n = n.concat(c);
    }
    return fn("tokenizer", n), n;
  }
}
function Du(t) {
  return Ju.indexOf(t) !== -1;
}
function Uu(t) {
  return t = t.normalize("NFD"), Gu.forEach((e) => {
    t = t.replace(String.fromCodePoint(e), "");
  }), t;
}
function Bu(t) {
  return t === 32 || t === 9 || t === 10 || t === 13 || Qu.indexOf(t) !== -1;
}
function qu(t) {
  return Ku.indexOf(t) !== -1 && t !== 9 && t !== 10 && t !== 13;
}
function Hu(t) {
  const e = [];
  let n = -1, r = !1;
  for (let i = 0; i < t.length; i++) {
    const s = t.charCodeAt(i), o = Du(s);
    (o && n !== 32 || r && s !== 32) && e.push(32), e.push(s), n = s, r = o;
  }
  return String.fromCodePoint(...e);
}
function Wu(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) {
    let r = t.charCodeAt(n);
    r === 0 || r === 65533 || qu(r) || (Bu(r) ? e.push(32) : e.push(r));
  }
  return String.fromCharCode(...e);
}
class Vu {
  constructor(e, n = !1, r = !1, i = 128) {
    this.doLowerCase = n, this.tokenizer = new zu(this.doLowerCase, r), this.tokenizer.load(e), this.maxSeqLength = i, this.clsId = this.convertTokensToId("[CLS]")[0], this.sepId = this.convertTokensToId("[SEP]")[0];
  }
  tokenize(e) {
    return e = Wu(e), e = Hu(e), e = Uu(e), this.doLowerCase && (e = e.toLowerCase()), this.tokenizer.tokenize(e);
  }
  convertIdsToTokens(e) {
    const n = [];
    return e.forEach((r) => {
      n.push(this.tokenizer.vocab[r]);
    }), n;
  }
  convertTokensToId(e) {
    return this.tokenizer.tokenize(e);
  }
  encodeText(e) {
    const n = [], r = [], i = [], s = this.tokenize(e);
    n.push(this.clsId), r.push(1), i.push(0), n.push(...s), s.forEach((a) => {
      r.push(1), i.push(0);
    }), n.push(this.sepId), r.push(1), i.push(0);
    const o = n.length;
    for (let a = 0; a < this.maxSeqLength - o; a++)
      n.push(0), r.push(0), i.push(0);
    return { inputIds: n, segmentIds: i, inputMask: r };
  }
}
const Gu = [
  768,
  769,
  770,
  771,
  772,
  773,
  774,
  775,
  776,
  777,
  778,
  779,
  780,
  781,
  782,
  783,
  784,
  785,
  786,
  787,
  788,
  789,
  790,
  791,
  792,
  793,
  794,
  795,
  796,
  797,
  798,
  799,
  800,
  801,
  802,
  803,
  804,
  805,
  806,
  807,
  808,
  809,
  810,
  811,
  812,
  813,
  814,
  815,
  816,
  817,
  818,
  819,
  820,
  821,
  822,
  823,
  824,
  825,
  826,
  827,
  828,
  829,
  830,
  831,
  832,
  833,
  834,
  835,
  836,
  837,
  838,
  839,
  840,
  841,
  842,
  843,
  844,
  845,
  846,
  847,
  848,
  849,
  850,
  851,
  852,
  853,
  854,
  855,
  856,
  857,
  858,
  859,
  860,
  861,
  862,
  863,
  864,
  865,
  866,
  867,
  868,
  869,
  870,
  871,
  872,
  873,
  874,
  875,
  876,
  877,
  878,
  879,
  1155,
  1156,
  1157,
  1158,
  1159,
  1425,
  1426,
  1427,
  1428,
  1429,
  1430,
  1431,
  1432,
  1433,
  1434,
  1435,
  1436,
  1437,
  1438,
  1439,
  1440,
  1441,
  1442,
  1443,
  1444,
  1445,
  1446,
  1447,
  1448,
  1449,
  1450,
  1451,
  1452,
  1453,
  1454,
  1455,
  1456,
  1457,
  1458,
  1459,
  1460,
  1461,
  1462,
  1463,
  1464,
  1465,
  1466,
  1467,
  1468,
  1469,
  1471,
  1473,
  1474,
  1476,
  1477,
  1479,
  1552,
  1553,
  1554,
  1555,
  1556,
  1557,
  1558,
  1559,
  1560,
  1561,
  1562,
  1611,
  1612,
  1613,
  1614,
  1615,
  1616,
  1617,
  1618,
  1619,
  1620,
  1621,
  1622,
  1623,
  1624,
  1625,
  1626,
  1627,
  1628,
  1629,
  1630,
  1631,
  1648,
  1750,
  1751,
  1752,
  1753,
  1754,
  1755,
  1756,
  1759,
  1760,
  1761,
  1762,
  1763,
  1764,
  1767,
  1768,
  1770,
  1771,
  1772,
  1773,
  1809,
  1840,
  1841,
  1842,
  1843,
  1844,
  1845,
  1846,
  1847,
  1848,
  1849,
  1850,
  1851,
  1852,
  1853,
  1854,
  1855,
  1856,
  1857,
  1858,
  1859,
  1860,
  1861,
  1862,
  1863,
  1864,
  1865,
  1866,
  1958,
  1959,
  1960,
  1961,
  1962,
  1963,
  1964,
  1965,
  1966,
  1967,
  1968,
  2027,
  2028,
  2029,
  2030,
  2031,
  2032,
  2033,
  2034,
  2035,
  2045,
  2070,
  2071,
  2072,
  2073,
  2075,
  2076,
  2077,
  2078,
  2079,
  2080,
  2081,
  2082,
  2083,
  2085,
  2086,
  2087,
  2089,
  2090,
  2091,
  2092,
  2093,
  2137,
  2138,
  2139,
  2259,
  2260,
  2261,
  2262,
  2263,
  2264,
  2265,
  2266,
  2267,
  2268,
  2269,
  2270,
  2271,
  2272,
  2273,
  2275,
  2276,
  2277,
  2278,
  2279,
  2280,
  2281,
  2282,
  2283,
  2284,
  2285,
  2286,
  2287,
  2288,
  2289,
  2290,
  2291,
  2292,
  2293,
  2294,
  2295,
  2296,
  2297,
  2298,
  2299,
  2300,
  2301,
  2302,
  2303,
  2304,
  2305,
  2306,
  2362,
  2364,
  2369,
  2370,
  2371,
  2372,
  2373,
  2374,
  2375,
  2376,
  2381,
  2385,
  2386,
  2387,
  2388,
  2389,
  2390,
  2391,
  2402,
  2403,
  2433,
  2492,
  2497,
  2498,
  2499,
  2500,
  2509,
  2530,
  2531,
  2558,
  2561,
  2562,
  2620,
  2625,
  2626,
  2631,
  2632,
  2635,
  2636,
  2637,
  2641,
  2672,
  2673,
  2677,
  2689,
  2690,
  2748,
  2753,
  2754,
  2755,
  2756,
  2757,
  2759,
  2760,
  2765,
  2786,
  2787,
  2810,
  2811,
  2812,
  2813,
  2814,
  2815,
  2817,
  2876,
  2879,
  2881,
  2882,
  2883,
  2884,
  2893,
  2902,
  2914,
  2915,
  2946,
  3008,
  3021,
  3072,
  3076,
  3134,
  3135,
  3136,
  3142,
  3143,
  3144,
  3146,
  3147,
  3148,
  3149,
  3157,
  3158,
  3170,
  3171,
  3201,
  3260,
  3263,
  3270,
  3276,
  3277,
  3298,
  3299,
  3328,
  3329,
  3387,
  3388,
  3393,
  3394,
  3395,
  3396,
  3405,
  3426,
  3427,
  3530,
  3538,
  3539,
  3540,
  3542,
  3633,
  3636,
  3637,
  3638,
  3639,
  3640,
  3641,
  3642,
  3655,
  3656,
  3657,
  3658,
  3659,
  3660,
  3661,
  3662,
  3761,
  3764,
  3765,
  3766,
  3767,
  3768,
  3769,
  3770,
  3771,
  3772,
  3784,
  3785,
  3786,
  3787,
  3788,
  3789,
  3864,
  3865,
  3893,
  3895,
  3897,
  3953,
  3954,
  3955,
  3956,
  3957,
  3958,
  3959,
  3960,
  3961,
  3962,
  3963,
  3964,
  3965,
  3966,
  3968,
  3969,
  3970,
  3971,
  3972,
  3974,
  3975,
  3981,
  3982,
  3983,
  3984,
  3985,
  3986,
  3987,
  3988,
  3989,
  3990,
  3991,
  3993,
  3994,
  3995,
  3996,
  3997,
  3998,
  3999,
  4e3,
  4001,
  4002,
  4003,
  4004,
  4005,
  4006,
  4007,
  4008,
  4009,
  4010,
  4011,
  4012,
  4013,
  4014,
  4015,
  4016,
  4017,
  4018,
  4019,
  4020,
  4021,
  4022,
  4023,
  4024,
  4025,
  4026,
  4027,
  4028,
  4038,
  4141,
  4142,
  4143,
  4144,
  4146,
  4147,
  4148,
  4149,
  4150,
  4151,
  4153,
  4154,
  4157,
  4158,
  4184,
  4185,
  4190,
  4191,
  4192,
  4209,
  4210,
  4211,
  4212,
  4226,
  4229,
  4230,
  4237,
  4253,
  4957,
  4958,
  4959,
  5906,
  5907,
  5908,
  5938,
  5939,
  5940,
  5970,
  5971,
  6002,
  6003,
  6068,
  6069,
  6071,
  6072,
  6073,
  6074,
  6075,
  6076,
  6077,
  6086,
  6089,
  6090,
  6091,
  6092,
  6093,
  6094,
  6095,
  6096,
  6097,
  6098,
  6099,
  6109,
  6155,
  6156,
  6157,
  6277,
  6278,
  6313,
  6432,
  6433,
  6434,
  6439,
  6440,
  6450,
  6457,
  6458,
  6459,
  6679,
  6680,
  6683,
  6742,
  6744,
  6745,
  6746,
  6747,
  6748,
  6749,
  6750,
  6752,
  6754,
  6757,
  6758,
  6759,
  6760,
  6761,
  6762,
  6763,
  6764,
  6771,
  6772,
  6773,
  6774,
  6775,
  6776,
  6777,
  6778,
  6779,
  6780,
  6783,
  6832,
  6833,
  6834,
  6835,
  6836,
  6837,
  6838,
  6839,
  6840,
  6841,
  6842,
  6843,
  6844,
  6845,
  6912,
  6913,
  6914,
  6915,
  6964,
  6966,
  6967,
  6968,
  6969,
  6970,
  6972,
  6978,
  7019,
  7020,
  7021,
  7022,
  7023,
  7024,
  7025,
  7026,
  7027,
  7040,
  7041,
  7074,
  7075,
  7076,
  7077,
  7080,
  7081,
  7083,
  7084,
  7085,
  7142,
  7144,
  7145,
  7149,
  7151,
  7152,
  7153,
  7212,
  7213,
  7214,
  7215,
  7216,
  7217,
  7218,
  7219,
  7222,
  7223,
  7376,
  7377,
  7378,
  7380,
  7381,
  7382,
  7383,
  7384,
  7385,
  7386,
  7387,
  7388,
  7389,
  7390,
  7391,
  7392,
  7394,
  7395,
  7396,
  7397,
  7398,
  7399,
  7400,
  7405,
  7412,
  7416,
  7417,
  7616,
  7617,
  7618,
  7619,
  7620,
  7621,
  7622,
  7623,
  7624,
  7625,
  7626,
  7627,
  7628,
  7629,
  7630,
  7631,
  7632,
  7633,
  7634,
  7635,
  7636,
  7637,
  7638,
  7639,
  7640,
  7641,
  7642,
  7643,
  7644,
  7645,
  7646,
  7647,
  7648,
  7649,
  7650,
  7651,
  7652,
  7653,
  7654,
  7655,
  7656,
  7657,
  7658,
  7659,
  7660,
  7661,
  7662,
  7663,
  7664,
  7665,
  7666,
  7667,
  7668,
  7669,
  7670,
  7671,
  7672,
  7673,
  7675,
  7676,
  7677,
  7678,
  7679,
  8400,
  8401,
  8402,
  8403,
  8404,
  8405,
  8406,
  8407,
  8408,
  8409,
  8410,
  8411,
  8412,
  8417,
  8421,
  8422,
  8423,
  8424,
  8425,
  8426,
  8427,
  8428,
  8429,
  8430,
  8431,
  8432,
  11503,
  11504,
  11505,
  11647,
  11744,
  11745,
  11746,
  11747,
  11748,
  11749,
  11750,
  11751,
  11752,
  11753,
  11754,
  11755,
  11756,
  11757,
  11758,
  11759,
  11760,
  11761,
  11762,
  11763,
  11764,
  11765,
  11766,
  11767,
  11768,
  11769,
  11770,
  11771,
  11772,
  11773,
  11774,
  11775,
  12330,
  12331,
  12332,
  12333,
  12441,
  12442,
  42607,
  42612,
  42613,
  42614,
  42615,
  42616,
  42617,
  42618,
  42619,
  42620,
  42621,
  42654,
  42655,
  42736,
  42737,
  43010,
  43014,
  43019,
  43045,
  43046,
  43204,
  43205,
  43232,
  43233,
  43234,
  43235,
  43236,
  43237,
  43238,
  43239,
  43240,
  43241,
  43242,
  43243,
  43244,
  43245,
  43246,
  43247,
  43248,
  43249,
  43263,
  43302,
  43303,
  43304,
  43305,
  43306,
  43307,
  43308,
  43309,
  43335,
  43336,
  43337,
  43338,
  43339,
  43340,
  43341,
  43342,
  43343,
  43344,
  43345,
  43392,
  43393,
  43394,
  43443,
  43446,
  43447,
  43448,
  43449,
  43452,
  43453,
  43493,
  43561,
  43562,
  43563,
  43564,
  43565,
  43566,
  43569,
  43570,
  43573,
  43574,
  43587,
  43596,
  43644,
  43696,
  43698,
  43699,
  43700,
  43703,
  43704,
  43710,
  43711,
  43713,
  43756,
  43757,
  43766,
  44005,
  44008,
  44013,
  64286,
  65024,
  65025,
  65026,
  65027,
  65028,
  65029,
  65030,
  65031,
  65032,
  65033,
  65034,
  65035,
  65036,
  65037,
  65038,
  65039,
  65056,
  65057,
  65058,
  65059,
  65060,
  65061,
  65062,
  65063,
  65064,
  65065,
  65066,
  65067,
  65068,
  65069,
  65070,
  65071,
  66045,
  66272,
  66422,
  66423,
  66424,
  66425,
  66426,
  68097,
  68098,
  68099,
  68101,
  68102,
  68108,
  68109,
  68110,
  68111,
  68152,
  68153,
  68154,
  68159,
  68325,
  68326,
  68900,
  68901,
  68902,
  68903,
  69446,
  69447,
  69448,
  69449,
  69450,
  69451,
  69452,
  69453,
  69454,
  69455,
  69456,
  69633,
  69688,
  69689,
  69690,
  69691,
  69692,
  69693,
  69694,
  69695,
  69696,
  69697,
  69698,
  69699,
  69700,
  69701,
  69702,
  69759,
  69760,
  69761,
  69811,
  69812,
  69813,
  69814,
  69817,
  69818,
  69888,
  69889,
  69890,
  69927,
  69928,
  69929,
  69930,
  69931,
  69933,
  69934,
  69935,
  69936,
  69937,
  69938,
  69939,
  69940,
  70003,
  70016,
  70017,
  70070,
  70071,
  70072,
  70073,
  70074,
  70075,
  70076,
  70077,
  70078,
  70089,
  70090,
  70091,
  70092,
  70191,
  70192,
  70193,
  70196,
  70198,
  70199,
  70206,
  70367,
  70371,
  70372,
  70373,
  70374,
  70375,
  70376,
  70377,
  70378,
  70400,
  70401,
  70459,
  70460,
  70464,
  70502,
  70503,
  70504,
  70505,
  70506,
  70507,
  70508,
  70512,
  70513,
  70514,
  70515,
  70516,
  70712,
  70713,
  70714,
  70715,
  70716,
  70717,
  70718,
  70719,
  70722,
  70723,
  70724,
  70726,
  70750,
  70835,
  70836,
  70837,
  70838,
  70839,
  70840,
  70842,
  70847,
  70848,
  70850,
  70851,
  71090,
  71091,
  71092,
  71093,
  71100,
  71101,
  71103,
  71104,
  71132,
  71133,
  71219,
  71220,
  71221,
  71222,
  71223,
  71224,
  71225,
  71226,
  71229,
  71231,
  71232,
  71339,
  71341,
  71344,
  71345,
  71346,
  71347,
  71348,
  71349,
  71351,
  71453,
  71454,
  71455,
  71458,
  71459,
  71460,
  71461,
  71463,
  71464,
  71465,
  71466,
  71467,
  71727,
  71728,
  71729,
  71730,
  71731,
  71732,
  71733,
  71734,
  71735,
  71737,
  71738,
  72148,
  72149,
  72150,
  72151,
  72154,
  72155,
  72160,
  72193,
  72194,
  72195,
  72196,
  72197,
  72198,
  72199,
  72200,
  72201,
  72202,
  72243,
  72244,
  72245,
  72246,
  72247,
  72248,
  72251,
  72252,
  72253,
  72254,
  72263,
  72273,
  72274,
  72275,
  72276,
  72277,
  72278,
  72281,
  72282,
  72283,
  72330,
  72331,
  72332,
  72333,
  72334,
  72335,
  72336,
  72337,
  72338,
  72339,
  72340,
  72341,
  72342,
  72344,
  72345,
  72752,
  72753,
  72754,
  72755,
  72756,
  72757,
  72758,
  72760,
  72761,
  72762,
  72763,
  72764,
  72765,
  72767,
  72850,
  72851,
  72852,
  72853,
  72854,
  72855,
  72856,
  72857,
  72858,
  72859,
  72860,
  72861,
  72862,
  72863,
  72864,
  72865,
  72866,
  72867,
  72868,
  72869,
  72870,
  72871,
  72874,
  72875,
  72876,
  72877,
  72878,
  72879,
  72880,
  72882,
  72883,
  72885,
  72886,
  73009,
  73010,
  73011,
  73012,
  73013,
  73014,
  73018,
  73020,
  73021,
  73023,
  73024,
  73025,
  73026,
  73027,
  73028,
  73029,
  73031,
  73104,
  73105,
  73109,
  73111,
  73459,
  73460,
  92912,
  92913,
  92914,
  92915,
  92916,
  92976,
  92977,
  92978,
  92979,
  92980,
  92981,
  92982,
  94031,
  94095,
  94096,
  94097,
  94098,
  113821,
  113822,
  119143,
  119144,
  119145,
  119163,
  119164,
  119165,
  119166,
  119167,
  119168,
  119169,
  119170,
  119173,
  119174,
  119175,
  119176,
  119177,
  119178,
  119179,
  119210,
  119211,
  119212,
  119213,
  119362,
  119363,
  119364,
  121344,
  121345,
  121346,
  121347,
  121348,
  121349,
  121350,
  121351,
  121352,
  121353,
  121354,
  121355,
  121356,
  121357,
  121358,
  121359,
  121360,
  121361,
  121362,
  121363,
  121364,
  121365,
  121366,
  121367,
  121368,
  121369,
  121370,
  121371,
  121372,
  121373,
  121374,
  121375,
  121376,
  121377,
  121378,
  121379,
  121380,
  121381,
  121382,
  121383,
  121384,
  121385,
  121386,
  121387,
  121388,
  121389,
  121390,
  121391,
  121392,
  121393,
  121394,
  121395,
  121396,
  121397,
  121398,
  121403,
  121404,
  121405,
  121406,
  121407,
  121408,
  121409,
  121410,
  121411,
  121412,
  121413,
  121414,
  121415,
  121416,
  121417,
  121418,
  121419,
  121420,
  121421,
  121422,
  121423,
  121424,
  121425,
  121426,
  121427,
  121428,
  121429,
  121430,
  121431,
  121432,
  121433,
  121434,
  121435,
  121436,
  121437,
  121438,
  121439,
  121440,
  121441,
  121442,
  121443,
  121444,
  121445,
  121446,
  121447,
  121448,
  121449,
  121450,
  121451,
  121452,
  121461,
  121476,
  121499,
  121500,
  121501,
  121502,
  121503,
  121505,
  121506,
  121507,
  121508,
  121509,
  121510,
  121511,
  121512,
  121513,
  121514,
  121515,
  121516,
  121517,
  121518,
  121519,
  122880,
  122881,
  122882,
  122883,
  122884,
  122885,
  122886,
  122888,
  122889,
  122890,
  122891,
  122892,
  122893,
  122894,
  122895,
  122896,
  122897,
  122898,
  122899,
  122900,
  122901,
  122902,
  122903,
  122904,
  122907,
  122908,
  122909,
  122910,
  122911,
  122912,
  122913,
  122915,
  122916,
  122918,
  122919,
  122920,
  122921,
  122922,
  123184,
  123185,
  123186,
  123187,
  123188,
  123189,
  123190,
  123628,
  123629,
  123630,
  123631,
  125136,
  125137,
  125138,
  125139,
  125140,
  125141,
  125142,
  125252,
  125253,
  125254,
  125255,
  125256,
  125257,
  125258,
  917760,
  917761,
  917762,
  917763,
  917764,
  917765,
  917766,
  917767,
  917768,
  917769,
  917770,
  917771,
  917772,
  917773,
  917774,
  917775,
  917776,
  917777,
  917778,
  917779,
  917780,
  917781,
  917782,
  917783,
  917784,
  917785,
  917786,
  917787,
  917788,
  917789,
  917790,
  917791,
  917792,
  917793,
  917794,
  917795,
  917796,
  917797,
  917798,
  917799,
  917800,
  917801,
  917802,
  917803,
  917804,
  917805,
  917806,
  917807,
  917808,
  917809,
  917810,
  917811,
  917812,
  917813,
  917814,
  917815,
  917816,
  917817,
  917818,
  917819,
  917820,
  917821,
  917822,
  917823,
  917824,
  917825,
  917826,
  917827,
  917828,
  917829,
  917830,
  917831,
  917832,
  917833,
  917834,
  917835,
  917836,
  917837,
  917838,
  917839,
  917840,
  917841,
  917842,
  917843,
  917844,
  917845,
  917846,
  917847,
  917848,
  917849,
  917850,
  917851,
  917852,
  917853,
  917854,
  917855,
  917856,
  917857,
  917858,
  917859,
  917860,
  917861,
  917862,
  917863,
  917864,
  917865,
  917866,
  917867,
  917868,
  917869,
  917870,
  917871,
  917872,
  917873,
  917874,
  917875,
  917876,
  917877,
  917878,
  917879,
  917880,
  917881,
  917882,
  917883,
  917884,
  917885,
  917886,
  917887,
  917888,
  917889,
  917890,
  917891,
  917892,
  917893,
  917894,
  917895,
  917896,
  917897,
  917898,
  917899,
  917900,
  917901,
  917902,
  917903,
  917904,
  917905,
  917906,
  917907,
  917908,
  917909,
  917910,
  917911,
  917912,
  917913,
  917914,
  917915,
  917916,
  917917,
  917918,
  917919,
  917920,
  917921,
  917922,
  917923,
  917924,
  917925,
  917926,
  917927,
  917928,
  917929,
  917930,
  917931,
  917932,
  917933,
  917934,
  917935,
  917936,
  917937,
  917938,
  917939,
  917940,
  917941,
  917942,
  917943,
  917944,
  917945,
  917946,
  917947,
  917948,
  917949,
  917950,
  917951,
  917952,
  917953,
  917954,
  917955,
  917956,
  917957,
  917958,
  917959,
  917960,
  917961,
  917962,
  917963,
  917964,
  917965,
  917966,
  917967,
  917968,
  917969,
  917970,
  917971,
  917972,
  917973,
  917974,
  917975,
  917976,
  917977,
  917978,
  917979,
  917980,
  917981,
  917982,
  917983,
  917984,
  917985,
  917986,
  917987,
  917988,
  917989,
  917990,
  917991,
  917992,
  917993,
  917994,
  917995,
  917996,
  917997,
  917998,
  917999
], Ju = [
  33,
  34,
  35,
  37,
  38,
  39,
  40,
  41,
  42,
  44,
  45,
  46,
  47,
  58,
  59,
  63,
  64,
  91,
  92,
  93,
  95,
  123,
  125,
  161,
  167,
  171,
  182,
  183,
  187,
  191,
  894,
  903,
  1370,
  1371,
  1372,
  1373,
  1374,
  1375,
  1417,
  1418,
  1470,
  1472,
  1475,
  1478,
  1523,
  1524,
  1545,
  1546,
  1548,
  1549,
  1563,
  1566,
  1567,
  1642,
  1643,
  1644,
  1645,
  1748,
  1792,
  1793,
  1794,
  1795,
  1796,
  1797,
  1798,
  1799,
  1800,
  1801,
  1802,
  1803,
  1804,
  1805,
  2039,
  2040,
  2041,
  2096,
  2097,
  2098,
  2099,
  2100,
  2101,
  2102,
  2103,
  2104,
  2105,
  2106,
  2107,
  2108,
  2109,
  2110,
  2142,
  2404,
  2405,
  2416,
  2557,
  2678,
  2800,
  3191,
  3204,
  3572,
  3663,
  3674,
  3675,
  3844,
  3845,
  3846,
  3847,
  3848,
  3849,
  3850,
  3851,
  3852,
  3853,
  3854,
  3855,
  3856,
  3857,
  3858,
  3860,
  3898,
  3899,
  3900,
  3901,
  3973,
  4048,
  4049,
  4050,
  4051,
  4052,
  4057,
  4058,
  4170,
  4171,
  4172,
  4173,
  4174,
  4175,
  4347,
  4960,
  4961,
  4962,
  4963,
  4964,
  4965,
  4966,
  4967,
  4968,
  5120,
  5742,
  5787,
  5788,
  5867,
  5868,
  5869,
  5941,
  5942,
  6100,
  6101,
  6102,
  6104,
  6105,
  6106,
  6144,
  6145,
  6146,
  6147,
  6148,
  6149,
  6150,
  6151,
  6152,
  6153,
  6154,
  6468,
  6469,
  6686,
  6687,
  6816,
  6817,
  6818,
  6819,
  6820,
  6821,
  6822,
  6824,
  6825,
  6826,
  6827,
  6828,
  6829,
  7002,
  7003,
  7004,
  7005,
  7006,
  7007,
  7008,
  7164,
  7165,
  7166,
  7167,
  7227,
  7228,
  7229,
  7230,
  7231,
  7294,
  7295,
  7360,
  7361,
  7362,
  7363,
  7364,
  7365,
  7366,
  7367,
  7379,
  8208,
  8209,
  8210,
  8211,
  8212,
  8213,
  8214,
  8215,
  8216,
  8217,
  8218,
  8219,
  8220,
  8221,
  8222,
  8223,
  8224,
  8225,
  8226,
  8227,
  8228,
  8229,
  8230,
  8231,
  8240,
  8241,
  8242,
  8243,
  8244,
  8245,
  8246,
  8247,
  8248,
  8249,
  8250,
  8251,
  8252,
  8253,
  8254,
  8255,
  8256,
  8257,
  8258,
  8259,
  8261,
  8262,
  8263,
  8264,
  8265,
  8266,
  8267,
  8268,
  8269,
  8270,
  8271,
  8272,
  8273,
  8275,
  8276,
  8277,
  8278,
  8279,
  8280,
  8281,
  8282,
  8283,
  8284,
  8285,
  8286,
  8317,
  8318,
  8333,
  8334,
  8968,
  8969,
  8970,
  8971,
  9001,
  9002,
  10088,
  10089,
  10090,
  10091,
  10092,
  10093,
  10094,
  10095,
  10096,
  10097,
  10098,
  10099,
  10100,
  10101,
  10181,
  10182,
  10214,
  10215,
  10216,
  10217,
  10218,
  10219,
  10220,
  10221,
  10222,
  10223,
  10627,
  10628,
  10629,
  10630,
  10631,
  10632,
  10633,
  10634,
  10635,
  10636,
  10637,
  10638,
  10639,
  10640,
  10641,
  10642,
  10643,
  10644,
  10645,
  10646,
  10647,
  10648,
  10712,
  10713,
  10714,
  10715,
  10748,
  10749,
  11513,
  11514,
  11515,
  11516,
  11518,
  11519,
  11632,
  11776,
  11777,
  11778,
  11779,
  11780,
  11781,
  11782,
  11783,
  11784,
  11785,
  11786,
  11787,
  11788,
  11789,
  11790,
  11791,
  11792,
  11793,
  11794,
  11795,
  11796,
  11797,
  11798,
  11799,
  11800,
  11801,
  11802,
  11803,
  11804,
  11805,
  11806,
  11807,
  11808,
  11809,
  11810,
  11811,
  11812,
  11813,
  11814,
  11815,
  11816,
  11817,
  11818,
  11819,
  11820,
  11821,
  11822,
  11824,
  11825,
  11826,
  11827,
  11828,
  11829,
  11830,
  11831,
  11832,
  11833,
  11834,
  11835,
  11836,
  11837,
  11838,
  11839,
  11840,
  11841,
  11842,
  11843,
  11844,
  11845,
  11846,
  11847,
  11848,
  11849,
  11850,
  11851,
  11852,
  11853,
  11854,
  11855,
  12289,
  12290,
  12291,
  12296,
  12297,
  12298,
  12299,
  12300,
  12301,
  12302,
  12303,
  12304,
  12305,
  12308,
  12309,
  12310,
  12311,
  12312,
  12313,
  12314,
  12315,
  12316,
  12317,
  12318,
  12319,
  12336,
  12349,
  12448,
  12539,
  42238,
  42239,
  42509,
  42510,
  42511,
  42611,
  42622,
  42738,
  42739,
  42740,
  42741,
  42742,
  42743,
  43124,
  43125,
  43126,
  43127,
  43214,
  43215,
  43256,
  43257,
  43258,
  43260,
  43310,
  43311,
  43359,
  43457,
  43458,
  43459,
  43460,
  43461,
  43462,
  43463,
  43464,
  43465,
  43466,
  43467,
  43468,
  43469,
  43486,
  43487,
  43612,
  43613,
  43614,
  43615,
  43742,
  43743,
  43760,
  43761,
  44011,
  64830,
  64831,
  65040,
  65041,
  65042,
  65043,
  65044,
  65045,
  65046,
  65047,
  65048,
  65049,
  65072,
  65073,
  65074,
  65075,
  65076,
  65077,
  65078,
  65079,
  65080,
  65081,
  65082,
  65083,
  65084,
  65085,
  65086,
  65087,
  65088,
  65089,
  65090,
  65091,
  65092,
  65093,
  65094,
  65095,
  65096,
  65097,
  65098,
  65099,
  65100,
  65101,
  65102,
  65103,
  65104,
  65105,
  65106,
  65108,
  65109,
  65110,
  65111,
  65112,
  65113,
  65114,
  65115,
  65116,
  65117,
  65118,
  65119,
  65120,
  65121,
  65123,
  65128,
  65130,
  65131,
  65281,
  65282,
  65283,
  65285,
  65286,
  65287,
  65288,
  65289,
  65290,
  65292,
  65293,
  65294,
  65295,
  65306,
  65307,
  65311,
  65312,
  65339,
  65340,
  65341,
  65343,
  65371,
  65373,
  65375,
  65376,
  65377,
  65378,
  65379,
  65380,
  65381,
  65792,
  65793,
  65794,
  66463,
  66512,
  66927,
  67671,
  67871,
  67903,
  68176,
  68177,
  68178,
  68179,
  68180,
  68181,
  68182,
  68183,
  68184,
  68223,
  68336,
  68337,
  68338,
  68339,
  68340,
  68341,
  68342,
  68409,
  68410,
  68411,
  68412,
  68413,
  68414,
  68415,
  68505,
  68506,
  68507,
  68508,
  69461,
  69462,
  69463,
  69464,
  69465,
  69703,
  69704,
  69705,
  69706,
  69707,
  69708,
  69709,
  69819,
  69820,
  69822,
  69823,
  69824,
  69825,
  69952,
  69953,
  69954,
  69955,
  70004,
  70005,
  70085,
  70086,
  70087,
  70088,
  70093,
  70107,
  70109,
  70110,
  70111,
  70200,
  70201,
  70202,
  70203,
  70204,
  70205,
  70313,
  70731,
  70732,
  70733,
  70734,
  70735,
  70747,
  70749,
  70854,
  71105,
  71106,
  71107,
  71108,
  71109,
  71110,
  71111,
  71112,
  71113,
  71114,
  71115,
  71116,
  71117,
  71118,
  71119,
  71120,
  71121,
  71122,
  71123,
  71124,
  71125,
  71126,
  71127,
  71233,
  71234,
  71235,
  71264,
  71265,
  71266,
  71267,
  71268,
  71269,
  71270,
  71271,
  71272,
  71273,
  71274,
  71275,
  71276,
  71484,
  71485,
  71486,
  71739,
  72162,
  72255,
  72256,
  72257,
  72258,
  72259,
  72260,
  72261,
  72262,
  72346,
  72347,
  72348,
  72350,
  72351,
  72352,
  72353,
  72354,
  72769,
  72770,
  72771,
  72772,
  72773,
  72816,
  72817,
  73463,
  73464,
  73727,
  74864,
  74865,
  74866,
  74867,
  74868,
  92782,
  92783,
  92917,
  92983,
  92984,
  92985,
  92986,
  92987,
  92996,
  93847,
  93848,
  93849,
  93850,
  94178,
  113823,
  121479,
  121480,
  121481,
  121482,
  121483,
  125278,
  125279
], Ku = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  127,
  128,
  129,
  130,
  131,
  132,
  133,
  134,
  135,
  136,
  137,
  138,
  139,
  140,
  141,
  142,
  143,
  144,
  145,
  146,
  147,
  148,
  149,
  150,
  151,
  152,
  153,
  154,
  155,
  156,
  157,
  158,
  159
], Qu = [32, 160, 5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288];
class Xu {
  constructor(e) {
    this.options = {
      executionProviders: ["wasm"],
      graphOptimizationLevel: "all"
    }, this.session = void 0, this.labels = [], this.isReady = !1, this.scriptsInjected = new An(!1), $u(e), this.injectScript(
      "onnxruntime-web",
      "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js",
      () => this.scriptsInjected.next(!0)
    );
  }
  loadModels(e, n) {
    fe(this.loadLabelSets(e, n)).subscribe(), this.scriptsInjected.pipe(
      ae((r) => r),
      se(1),
      L(() => fe(this.loadModelDefinition(e, n))),
      L((r) => r.ok ? fe(r.json()) : Qr(() => new Error("Unable to load modelType"))),
      L((r) => {
        const i = `${ju()}models/classifier/${r.model}/vocab.json`, s = `${e}/train/classifier/model/onnx_models/model-int8.onnx`, o = ort.InferenceSession.create(s, this.options);
        return gr([
          fe(Nu(i, !1, !0)),
          fe(o.then((a) => this.session = a))
        ]);
      })
    ).subscribe(([r, i]) => {
      this.tokenizer = r, this.isReady = !0;
    });
  }
  predict(e) {
    return this.isReady ? fe(this.lm_inference(e)).pipe(
      A(
        (n) => n.filter((r) => r.score > 0.5).map((r) => {
          const [i, s] = r.label.split("/");
          return { labelset: i, label: s };
        })
      )
    ) : (fn("Model not loaded yet"), H([]));
  }
  async lm_inference(e) {
    var l;
    const n = (l = this.tokenizer) == null ? void 0 : l.tokenize(e);
    if (fn(n), !n || n.length === 0)
      return Promise.resolve([]);
    const r = performance.now(), i = this.create_model_input(n), s = await this.session.run(i), o = (performance.now() - r).toFixed(1), a = [];
    for (let c = 0; c < this.labels.length; c++)
      a[c] = { label: this.labels[c][0], score: s.probabilities.data[c] };
    return a.sort((c, u) => c.score === u.score ? 0 : c.score < u.score ? 1 : -1), fn("duration", o), fn("result", a), a;
  }
  create_model_input(e) {
    const n = new Array(e.length + 1), r = new Array(e.length + 1), i = new Array(e.length + 1);
    n[0] = BigInt(101), r[0] = BigInt(1), i[0] = BigInt(0);
    for (let c = 0; c < e.length; c++)
      n[c + 1] = BigInt(e[c]), r[c + 1] = BigInt(1), i[c + 1] = BigInt(0);
    n[e.length] = BigInt(102), r[e.length] = BigInt(1), i[e.length] = BigInt(0);
    const s = n.length, o = new ort.Tensor("int64", BigInt64Array.from(n), [1, s]), a = new ort.Tensor("int64", BigInt64Array.from(r), [1, s]), l = new ort.Tensor("int64", BigInt64Array.from(i), [1, s]);
    return {
      input_ids: o,
      attention_mask: a,
      token_type_ids: l
    };
  }
  async loadLabelSets(e, n) {
    return fetch(`${e}/train/classifier/model/model_files/pos_to_lab.json`, { headers: n }).then((r) => {
      r.ok ? r.json().then((i) => this.labels = i.labels) : console.info("No trained labels in knowledge box");
    });
  }
  injectScript(e, n, r) {
    if (!document.getElementById(e)) {
      const i = window.document.createElement("script");
      i.id = e, i.type = "text/javascript", i.async = !0, i.defer = !0, i.src = n, i.onload = r, window.document.body.appendChild(i);
    }
  }
  async loadModelDefinition(e, n) {
    const r = `${e}/train/classifier/model/model/nuclia.json`;
    return fetch(r, { headers: n });
  }
}
const X = new Gt({
  query: "",
  filters: {},
  options: { inTitleOnly: !1, highlight: !0, page_number: 0 },
  show: [B.BASIC, B.VALUES, B.ORIGIN],
  results: ka,
  pending: !1,
  showResults: !1,
  tracking: {
    startTime: 0,
    resultsReceived: !1,
    searchId: void 0,
    engagement: {}
  }
}), Ht = X.writer(
  (t) => t.query,
  (t, e) => {
    const n = e.trim();
    return n !== t.query ? {
      ...t,
      query: n,
      error: void 0,
      autofilerDisabled: !1
    } : t;
  }
), Cn = X.writer(
  (t) => t.results,
  (t, e) => {
    const n = Na(Object.values(e.results.resources || {})), { resources: r, ...i } = e.results;
    return {
      ...t,
      results: {
        ...i,
        resultList: e.append ? t.results.resultList.concat(n) : n
      },
      pending: !1,
      showResults: !0,
      filters: {
        ...t.filters,
        autofilters: e.append ? t.filters.autofilters : (e.results.autofilters || []).map((s) => fa(s))
      }
    };
  }
), ti = X.reader((t) => t.results.resultList), tr = X.writer(
  (t) => t.showResults,
  (t, e) => ({
    ...t,
    showResults: e
  })
), Yu = X.reader((t) => !!t.error), Zu = X.reader((t) => !!t.error && t.error.status === 206), Pa = X.writer(
  (t) => t.error,
  (t, e) => ({
    ...t,
    error: e,
    pending: !1,
    showResults: !0
  })
), Oa = X.writer(
  (t) => t.options,
  (t, e) => ({
    ...t,
    options: e
  })
), ed = X.writer(
  (t) => t.show,
  (t, e) => ({
    ...t,
    show: e
  })
), yr = X.writer(
  (t) => [
    ...(t.filters.labels || []).map((e) => Yc(e.classification)),
    ...(t.filters.entities || []).map((e) => eu(e))
  ],
  (t, e) => {
    const n = {};
    return e.filters.forEach((r) => {
      const i = r.split("/").filter((s) => !!s);
      if (i[0] === "l") {
        const s = {
          classification: Zc(r),
          kind: e.titleOnly ? er.RESOURCES : er.PARAGRAPHS
        };
        n.labels ? n.labels.push(s) : n.labels = [s];
      } else if (i[0] === "e") {
        const s = fa(r);
        n.entities ? n.entities.push(s) : n.entities = [s];
      }
    }), {
      ...t,
      filters: n
    };
  }
), td = X.writer(
  (t) => t.filters.labels || [],
  (t, e) => ({
    ...t,
    filters: {
      ...t.filters,
      labels: e
    }
  })
), nd = X.writer(
  (t) => t.filters.entities || [],
  (t, e) => ({
    ...t,
    filters: {
      ...t.filters,
      entities: e
    }
  })
);
X.writer(
  (t) => t.filters.autofilters || [],
  (t, e) => ({
    ...t,
    filters: {
      ...t.filters,
      autofilters: e
    }
  })
);
const us = X.writer(
  (t) => t.autofilerDisabled,
  (t, e) => ({
    ...t,
    autofilerDisabled: e
  })
), nr = X.reader(
  (t) => !t.query && (!t.filters.labels || t.filters.labels.length === 0) && (!t.filters.entities || t.filters.entities.length === 0)
), rd = X.reader((t) => t.results.next_page), Fa = X.writer(
  (t) => t.options.page_number || 0,
  (t) => ({
    ...t,
    options: { ...t.options, page_number: (t.options.page_number || 0) + 1 }
  })
), id = X.writer(
  (t) => t.options.page_number || 0,
  (t, e) => ({
    ...t,
    options: { ...t.options, page_number: e }
  })
), Dn = X.writer(
  (t) => t.pending,
  (t, e) => ({ ...t, pending: e })
), Ca = X.writer(
  (t) => t.tracking.startTime,
  (t, e) => ({ ...t, tracking: { startTime: e, resultsReceived: !1, searchId: "", engagement: {} } })
), ni = X.writer(
  (t) => t.tracking.searchId,
  (t, e) => ({ ...t, tracking: { ...t.tracking, searchId: e } })
), $a = X.writer(
  (t) => t.tracking.resultsReceived,
  (t, e) => ({ ...t, tracking: { ...t.tracking, resultsReceived: e } })
), sd = X.writer(
  () => {
  },
  (t) => ({ ...t, tracking: { ...t.tracking, startTime: 0, resultsReceived: !1 } })
), od = ct([
  $a,
  Ca,
  ni
]).pipe(
  ae(([t, e]) => t && e > 0),
  A(([, t, e]) => ({ startTime: t, searchId: e }))
), ja = X.writer(
  (t) => t.tracking.engagement,
  (t, e) => {
    var i, s, o;
    const n = t.results.resultList, r = e.rid ? n.find((a) => a.id === e.rid) : void 0;
    return {
      ...t,
      tracking: {
        ...t.tracking,
        engagement: {
          type: e.type,
          resourceRank: r ? n.findIndex((a) => a.id === e.rid) : void 0,
          paragraphRank: r && e.paragraph ? (i = r.paragraphs) == null ? void 0 : i.findIndex((a) => {
            var l;
            return a.id === ((l = e.paragraph) == null ? void 0 : l.id);
          }) : void 0,
          paragraphType: (s = e.paragraph) == null ? void 0 : s.score_type,
          paragraphOrder: (o = e.paragraph) == null ? void 0 : o.order,
          searchId: t.tracking.searchId
        }
      }
    };
  }
), ad = X.reader(
  (t) => {
    var e;
    return Object.entries(((e = t.results.relations) == null ? void 0 : e.entities) || {}).map(([n, r]) => ({
      entity: n,
      relations: r.related_to.filter((i) => i.entity_type === "entity" && i.relation_label.length > 0).reduce((i, s) => (i[s.relation_label] ? i[s.relation_label].push(s.entity) : i[s.relation_label] = [s.entity], i), {})
    })).filter((n) => Object.keys(n.relations).length > 0);
  }
), Ma = ct([Ht, td, nd]).pipe(
  A(
    ([t, e, n]) => !t && !!e && e.every((r) => r.kind === er.RESOURCES) && (n || []).length === 0
  )
), gt = new Vt();
function Na(t) {
  if (!t)
    return [];
  const e = [];
  return t.filter((n) => {
    var r;
    return !!((r = n.origin) != null && r.url);
  }).reduce((n, r) => {
    const i = Object.keys(r.fields).length, s = Object.entries(r.fields).filter(([o]) => {
      const a = o.split("/")[1];
      return i === 1 ? !0 : o !== "/a/title" && as(a) !== null;
    }).map(([o, a]) => {
      let [, l, c] = o.split("/"), u;
      if (l === rt.generic && r.data)
        u = Object.entries(r.data).filter(([, _]) => !!_).map(([_, v]) => ({ field_type: Ri(_.substring(0, _.length - 1)), field_id: Object.keys(v)[0] })).filter((_) => _.field_type !== D.generic)[0];
      else {
        const _ = as(l);
        u = { field_id: c, field_type: _ };
      }
      const d = {
        ...r,
        field: u,
        fieldData: La(r, u),
        paragraphs: o !== "/a/title" ? Object.values(a.paragraphs).sort((_, v) => _.order - v.order) : []
      }, { resultType: f, resultIcon: h } = Da(d), g = {
        ...d,
        resultType: f,
        resultIcon: h
      }, p = za(g);
      return e.includes(p) ? null : (e.push(p), g);
    }).filter((o) => !!o).map((o) => o);
    return n = n.concat(s), n;
  }, []);
}
function La(t, e) {
  var r, i;
  const n = lu(e.field_type);
  return n ? (i = (r = t.data) == null ? void 0 : r[n]) == null ? void 0 : i[e.field_id] : void 0;
}
function za(t) {
  return t.paragraphs && t.paragraphs.length > 0 ? `${(t.paragraphs || []).reduce((e, n) => `${e}${e.length > 0 ? "__" : ""}${n.id}`, "")}` : t.id;
}
const ld = [
  "text/csv",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.oasis.opendocument.spreadsheet"
];
function Da(t) {
  var s, o, a, l, c, u, d, f, h, g;
  const e = (s = t == null ? void 0 : t.field) == null ? void 0 : s.field_type, n = (o = t == null ? void 0 : t.fieldData) == null ? void 0 : o.value;
  let r, i = "";
  if (e === D.link && n) {
    const p = (a = t.fieldData.value) == null ? void 0 : a.uri;
    r = p != null && p.includes("youtube.com") || p != null && p.includes("youtu.be") ? "video" : "text";
  } else if (e === D.conversation)
    r = "conversation";
  else if (e === D.file && n) {
    const p = (l = t.fieldData.value) == null ? void 0 : l.file;
    (c = p == null ? void 0 : p.content_type) != null && c.startsWith("audio") ? r = "audio" : (u = p == null ? void 0 : p.content_type) != null && u.startsWith("video") ? r = "video" : (d = p == null ? void 0 : p.content_type) != null && d.startsWith("image") ? r = "image" : (f = p == null ? void 0 : p.content_type) != null && f.startsWith("text") ? r = "text" : ld.includes((p == null ? void 0 : p.content_type) || "") ? r = "spreadsheet" : (h = p == null ? void 0 : p.content_type) != null && h.startsWith("application/octet-stream") ? r = "text" : (g = p == null ? void 0 : p.content_type) != null && g.startsWith("application") ? (r = "pdf", i = (p == null ? void 0 : p.content_type) === "application/pdf" ? "pdf" : "generic") : r = "text";
  } else
    r = "text";
  return { resultType: r, resultIcon: i || r };
}
function ds(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function M(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ds(Object(n), !0).forEach(function(r) {
      N(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ds(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function xt(t) {
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xt(t);
}
function ce(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fs(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function ue(t, e, n) {
  return e && fs(t.prototype, e), n && fs(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function N(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function Ua(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ri(t, e);
}
function rr(t) {
  return rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  }, rr(t);
}
function ri(t, e) {
  return ri = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ri(t, e);
}
function cd(t, e) {
  if (t == null)
    return {};
  var n, r, i = function(o, a) {
    if (o == null)
      return {};
    var l, c, u = {}, d = Object.keys(o);
    for (c = 0; c < d.length; c++)
      l = d[c], a.indexOf(l) >= 0 || (u[l] = o[l]);
    return u;
  }(t, e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    for (r = 0; r < s.length; r++)
      n = s[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
  }
  return i;
}
function ud(t, e) {
  if (e && (typeof e == "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return function(n) {
    if (n === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }(t);
}
function Ba(t) {
  var e = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var n, r = rr(t);
    if (e) {
      var i = rr(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else
      n = r.apply(this, arguments);
    return ud(this, n);
  };
}
function Pt(t, e) {
  return function(n) {
    if (Array.isArray(n))
      return n;
  }(t) || function(n, r) {
    var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (i != null) {
      var s, o, a = [], l = !0, c = !1;
      try {
        for (i = i.call(n); !(l = (s = i.next()).done) && (a.push(s.value), !r || a.length !== r); l = !0)
          ;
      } catch (u) {
        c = !0, o = u;
      } finally {
        try {
          l || i.return == null || i.return();
        } finally {
          if (c)
            throw o;
        }
      }
      return a;
    }
  }(t, e) || Pi(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function ii(t) {
  return function(e) {
    if (Array.isArray(e))
      return si(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
      return Array.from(e);
  }(t) || Pi(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Pi(t, e) {
  if (t) {
    if (typeof t == "string")
      return si(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? si(t, e) : void 0;
  }
}
function si(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function yt(t, e) {
  var n = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (!n) {
    if (Array.isArray(t) || (n = Pi(t)) || e && t && typeof t.length == "number") {
      n && (t = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, o = !0, a = !1;
  return { s: function() {
    n = n.call(t);
  }, n: function() {
    var l = n.next();
    return o = l.done, l;
  }, e: function(l) {
    a = !0, s = l;
  }, f: function() {
    try {
      o || n.return == null || n.return();
    } finally {
      if (a)
        throw s;
    }
  } };
}
var at = { DEBUG: !1, LIB_VERSION: "1.68.4" };
/**
 * uuidv7: An experimental implementation of the proposed UUID Version 7
 *
 * @license Apache-2.0
 * @copyright 2021-2023 LiosK
 * @packageDocumentation
 *
 * from https://github.com/LiosK/uuidv7/blob/e501462ea3d23241de13192ceae726956f9b3b7d/src/index.ts
 */
Math.trunc || (Math.trunc = function(t) {
  return t < 0 ? Math.ceil(t) : Math.floor(t);
}), Number.isInteger || (Number.isInteger = function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
});
var hs = "0123456789abcdef", dd = function() {
  function t(e) {
    if (ce(this, t), this.bytes = e, e.length !== 16)
      throw new TypeError("not 128-bit length");
  }
  return ue(t, [{ key: "toString", value: function() {
    for (var e = "", n = 0; n < this.bytes.length; n++)
      e += hs.charAt(this.bytes[n] >>> 4), e += hs.charAt(15 & this.bytes[n]), n !== 3 && n !== 5 && n !== 7 && n !== 9 || (e += "-");
    return e;
  } }, { key: "clone", value: function() {
    return new t(this.bytes.slice(0));
  } }, { key: "equals", value: function(e) {
    return this.compareTo(e) === 0;
  } }, { key: "compareTo", value: function(e) {
    for (var n = 0; n < 16; n++) {
      var r = this.bytes[n] - e.bytes[n];
      if (r !== 0)
        return Math.sign(r);
    }
    return 0;
  } }], [{ key: "fromFieldsV7", value: function(e, n, r, i) {
    if (!Number.isInteger(e) || !Number.isInteger(n) || !Number.isInteger(r) || !Number.isInteger(i) || e < 0 || n < 0 || r < 0 || i < 0 || e > 281474976710655 || n > 4095 || r > 1073741823 || i > 4294967295)
      throw new RangeError("invalid field value");
    var s = new Uint8Array(16);
    return s[0] = e / Math.pow(2, 40), s[1] = e / Math.pow(2, 32), s[2] = e / Math.pow(2, 24), s[3] = e / Math.pow(2, 16), s[4] = e / Math.pow(2, 8), s[5] = e, s[6] = 112 | n >>> 8, s[7] = n, s[8] = 128 | r >>> 24, s[9] = r >>> 16, s[10] = r >>> 8, s[11] = r, s[12] = i >>> 24, s[13] = i >>> 16, s[14] = i >>> 8, s[15] = i, new t(s);
  } }]), t;
}(), fd = function() {
  function t() {
    ce(this, t), N(this, "timestamp", 0), N(this, "counter", 0), N(this, "random", new hd());
  }
  return ue(t, [{ key: "generate", value: function() {
    var e = this.generateOrAbort();
    if (e !== void 0)
      return e;
    this.timestamp = 0;
    var n = this.generateOrAbort();
    if (n === void 0)
      throw new Error("Could not generate UUID after timestamp reset");
    return n;
  } }, { key: "generateOrAbort", value: function() {
    var e = Date.now();
    if (e > this.timestamp)
      this.timestamp = e, this.resetCounter();
    else {
      if (!(e + 1e4 > this.timestamp))
        return;
      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    }
    return dd.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
  } }, { key: "resetCounter", value: function() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  } }]), t;
}(), qa = function(t) {
  if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG)
    throw new Error("no cryptographically strong RNG available");
  for (var e = 0; e < t.length; e++)
    t[e] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return t;
};
typeof crypto < "u" && crypto.getRandomValues && (qa = function(t) {
  return crypto.getRandomValues(t);
});
var ps, hd = function() {
  function t() {
    ce(this, t), N(this, "buffer", new Uint32Array(8)), N(this, "cursor", 1 / 0);
  }
  return ue(t, [{ key: "nextUint32", value: function() {
    return this.cursor >= this.buffer.length && (qa(this.buffer), this.cursor = 0), this.buffer[this.cursor++];
  } }]), t;
}(), pd = function() {
  return (ps || (ps = new fd())).generate();
}, Ha = Array.prototype, Wa = Object.prototype, br = Wa.toString, gd = Wa.hasOwnProperty, C = typeof window < "u" ? window : {}, Nt = C.navigator || { userAgent: "" }, pe = C.document || {}, Ke = Nt.userAgent, vd = ["localhost", "127.0.0.1"], gs = Ha.forEach, vs = Ha.indexOf, _d = Array.isArray, Oi = {}, te = { log: function() {
  if (at.DEBUG && !Xe(window.console) && window.console) {
    for (var t = ("__rrweb_original__" in window.console.log) ? window.console.log.__rrweb_original__ : window.console.log, e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    try {
      t.apply(window.console, n);
    } catch {
      mt(n, function(s) {
        t(s);
      });
    }
  }
}, error: function() {
  if (at.DEBUG && !Xe(window.console) && window.console) {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    var r = ["PostHog error:"].concat(e), i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
    try {
      i.apply(window.console, r);
    } catch {
      mt(r, function(o) {
        i(o);
      });
    }
  }
}, critical: function() {
  if (!Xe(window.console) && window.console) {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
      e[n] = arguments[n];
    var r = ["PostHog error:"].concat(e), i = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
    try {
      i.apply(window.console, r);
    } catch {
      mt(r, function(o) {
        i(o);
      });
    }
  }
} }, oi = function(t) {
  return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function mt(t, e, n) {
  if (Array.isArray(t)) {
    if (gs && t.forEach === gs)
      t.forEach(e, n);
    else if ("length" in t && t.length === +t.length) {
      for (var r = 0, i = t.length; r < i; r++)
        if (r in t && e.call(n, t[r], r) === Oi)
          return;
    }
  }
}
function W(t, e, n) {
  if (t != null) {
    if (Array.isArray(t))
      return mt(t, e, n);
    for (var r in t)
      if (gd.call(t, r) && e.call(n, t[r], r) === Oi)
        return;
  }
}
var Ee = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return mt(n, function(i) {
    for (var s in i)
      i[s] !== void 0 && (t[s] = i[s]);
  }), t;
}, pt = _d || function(t) {
  return br.call(t) === "[object Array]";
}, Va = function(t) {
  try {
    return /^\s*\bfunction\b/.test(t);
  } catch {
    return !1;
  }
};
function K(t, e) {
  return t.indexOf(e) !== -1;
}
var Dt = function(t) {
  return t === Object(t) && !pt(t);
}, Xe = function(t) {
  return t === void 0;
}, Ga = function(t) {
  return br.call(t) == "[object String]";
}, md = function(t) {
  return br.call(t) == "[object Number]";
}, yd = function t(e) {
  return W(e, function(n, r) {
    (function(i) {
      return br.call(i) == "[object Date]";
    })(n) ? e[r] = bd(n) : Dt(n) && (e[r] = t(n));
  }), e;
}, bd = function(t) {
  function e(n) {
    return n < 10 ? "0" + n : n;
  }
  return t.getUTCFullYear() + "-" + e(t.getUTCMonth() + 1) + "-" + e(t.getUTCDate()) + "T" + e(t.getUTCHours()) + ":" + e(t.getUTCMinutes()) + ":" + e(t.getUTCSeconds());
}, Ja = function(t) {
  return function() {
    try {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      return t.apply(this, n);
    } catch (i) {
      te.critical("Implementation error. Please turn on debug and contact support@posthog.com."), te.critical(i);
    }
  };
}, ai = function(t) {
  var e = {};
  return W(t, function(n, r) {
    Ga(n) && n.length > 0 && (e[r] = n);
  }), e;
}, wd = ["$performance_raw"];
function Ka(t, e) {
  return n = t, r = function(s, o) {
    return o && wd.indexOf(o) > -1 ? s : typeof s == "string" && e !== null ? s.slice(0, e) : s;
  }, i = /* @__PURE__ */ new Set(), function s(o, a) {
    return o !== Object(o) ? r ? r(o, a) : o : i.has(o) ? void 0 : (i.add(o), pt(o) ? (l = [], mt(o, function(c) {
      l.push(s(c));
    })) : (l = {}, W(o, function(c, u) {
      i.has(c) || (l[u] = s(c, u));
    })), l);
    var l;
  }(n);
  var n, r, i;
}
function wr(t) {
  var e, n, r, i, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = 0, l = 0, c = "", u = [];
  if (!t)
    return t;
  t = kd(t);
  do
    e = (s = t.charCodeAt(a++) << 16 | t.charCodeAt(a++) << 8 | t.charCodeAt(a++)) >> 18 & 63, n = s >> 12 & 63, r = s >> 6 & 63, i = 63 & s, u[l++] = o.charAt(e) + o.charAt(n) + o.charAt(r) + o.charAt(i);
  while (a < t.length);
  switch (c = u.join(""), t.length % 3) {
    case 1:
      c = c.slice(0, -2) + "==";
      break;
    case 2:
      c = c.slice(0, -1) + "=";
  }
  return c;
}
var $r, kd = function(t) {
  var e, n, r, i, s = "";
  for (e = n = 0, r = (t = (t + "").replace(/\r\n/g, `
`).replace(/\r/g, `
`)).length, i = 0; i < r; i++) {
    var o = t.charCodeAt(i), a = null;
    o < 128 ? n++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), a !== null && (n > e && (s += t.substring(e, n)), s += a, e = n = i + 1);
  }
  return n > e && (s += t.substring(e, t.length)), s;
}, vt = ($r = function() {
  for (var t = (/* @__PURE__ */ new Date()).valueOf(), e = 0; t == (/* @__PURE__ */ new Date()).valueOf(); )
    e++;
  return t.toString(16) + e.toString(16);
}, function(t) {
  if (t === "v7")
    return pd().toString();
  var e = typeof window < "u" ? (window.screen.height * window.screen.width).toString(16) : "0";
  return $r() + "-" + Math.random().toString(16).replace(".", "") + "-" + function() {
    var n, r, i = Ke, s = 0, o = [];
    function a(l, c) {
      var u, d = 0;
      for (u = 0; u < c.length; u++)
        d |= o[u] << 8 * u;
      return l ^ d;
    }
    for (n = 0; n < i.length; n++)
      r = i.charCodeAt(n), o.unshift(255 & r), o.length >= 4 && (s = a(s, o), o = []);
    return o.length > 0 && (s = a(s, o)), s.toString(16);
  }() + "-" + e + "-" + $r();
}), Sd = function(t) {
  return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog|applebot|semrushbot|duckduckbot|twitterbot|rogerbot|linkedinbot|mj12bot|sitebulb|bot.htm|bot.php|hubspot|crawler|prerender)/i.test(t);
}, _s = function(t, e) {
  var n = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"), r = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(t);
  if (r === null || r && typeof r[1] != "string" && r[1].length)
    return "";
  var i = r[1];
  try {
    i = decodeURIComponent(i);
  } catch {
    te.error("Skipping decoding for malformed query param: " + i);
  }
  return i.replace(/\+/g, " ");
}, ms = function(t, e) {
  var n = t.match(new RegExp(e + "=([^&]*)"));
  return n ? n[1] : null;
}, gn = function() {
  function t(e) {
    return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), e;
  }
  return t.preventDefault = function() {
    this.returnValue = !1;
  }, t.stopPropagation = function() {
    this.cancelBubble = !0;
  }, function(e, n, r, i, s) {
    if (e)
      if (e.addEventListener && !i)
        e.addEventListener(n, r, !!s);
      else {
        var o = "on" + n, a = e[o];
        e[o] = function(l, c, u) {
          return function(d) {
            if (d = d || t(window.event)) {
              var f, h = !0;
              Va(u) && (f = u(d));
              var g = c.call(l, d);
              return f !== !1 && g !== !1 || (h = !1), h;
            }
          };
        }(e, r, a);
      }
    else
      te.error("No valid element provided to register_event");
  };
}();
function Fi(t, e) {
  var n = function() {
    var r = pe.createElement("script");
    r.type = "text/javascript", r.src = t, r.onload = function(o) {
      return e(void 0, o);
    }, r.onerror = function(o) {
      return e(o);
    };
    var i, s = pe.querySelectorAll("body > script");
    s.length > 0 ? (i = s[0].parentNode) === null || i === void 0 || i.insertBefore(r, s[0]) : pe.body.appendChild(r);
  };
  pe.body ? n() : pe.addEventListener("DOMContentLoaded", n);
}
var be = { campaignParams: function(t) {
  var e = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "msclkid"].concat(t || []), n = {};
  return W(e, function(r) {
    var i = _s(pe.URL, r);
    i.length && (n[r] = i);
  }), n;
}, searchEngine: function() {
  var t = pe.referrer;
  return t ? t.search("https?://(.*)google.([^/?]*)") === 0 ? "google" : t.search("https?://(.*)bing.com") === 0 ? "bing" : t.search("https?://(.*)yahoo.com") === 0 ? "yahoo" : t.search("https?://(.*)duckduckgo.com") === 0 ? "duckduckgo" : null : null;
}, searchInfo: function() {
  var t = be.searchEngine(), e = t != "yahoo" ? "q" : "p", n = {};
  if (t !== null) {
    n.$search_engine = t;
    var r = _s(pe.referrer, e);
    r.length && (n.ph_keyword = r);
  }
  return n;
}, browser: function(t, e, n) {
  return e = e || "", n || K(t, " OPR/") ? K(t, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : K(t, "IEMobile") || K(t, "WPDesktop") ? "Internet Explorer Mobile" : K(t, "SamsungBrowser/") ? "Samsung Internet" : K(t, "Edge") || K(t, "Edg/") ? "Microsoft Edge" : K(t, "FBIOS") ? "Facebook Mobile" : K(t, "Chrome") ? "Chrome" : K(t, "CriOS") ? "Chrome iOS" : K(t, "UCWEB") || K(t, "UCBrowser") ? "UC Browser" : K(t, "FxiOS") ? "Firefox iOS" : K(e, "Apple") ? K(t, "Mobile") ? "Mobile Safari" : "Safari" : K(t, "Android") ? "Android Mobile" : K(t, "Konqueror") ? "Konqueror" : K(t, "Firefox") ? "Firefox" : K(t, "MSIE") || K(t, "Trident/") ? "Internet Explorer" : K(t, "Gecko") ? "Mozilla" : "";
}, browserVersion: function(t, e, n) {
  var r = { "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/, "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/, Chrome: /Chrome\/(\d+(\.\d+)?)/, "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/, "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/, Safari: /Version\/(\d+(\.\d+)?)/, "Mobile Safari": /Version\/(\d+(\.\d+)?)/, Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/, Firefox: /Firefox\/(\d+(\.\d+)?)/, "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/, Konqueror: /Konqueror:(\d+(\.\d+)?)/, BlackBerry: /BlackBerry (\d+(\.\d+)?)/, "Android Mobile": /android\s(\d+(\.\d+)?)/, "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/, "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/, Mozilla: /rv:(\d+(\.\d+)?)/ }[be.browser(t, e, n)];
  if (r === void 0)
    return null;
  var i = t.match(r);
  return i ? parseFloat(i[i.length - 2]) : null;
}, browserLanguage: function() {
  return Nt.language || Nt.userLanguage;
}, os: function(t) {
  if (/Windows/i.test(t)) {
    if (/Phone/.test(t) || /WPDesktop/.test(t))
      return { os_name: "Windows Phone", os_version: "" };
    var e = /Windows NT ([0-9.]+)/i.exec(t);
    return e && e[1] ? { os_name: "Windows", os_version: e[1] } : { os_name: "Windows", os_version: "" };
  }
  if (/(iPhone|iPad|iPod)/.test(t)) {
    var n = /OS (\d+)_(\d+)_?(\d+)?/i.exec(t);
    return n && n[1] ? { os_name: "iOS", os_version: [n[1], n[2], n[3] || "0"].join(".") } : { os_name: "iOS", os_version: "" };
  }
  if (/Android/.test(t)) {
    var r = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(t);
    return r && r[1] ? { os_name: "Android", os_version: [r[1], r[2], r[3] || "0"].join(".") } : { os_name: "Android", os_version: "" };
  }
  if (/(BlackBerry|PlayBook|BB10)/i.test(t))
    return { os_name: "BlackBerry", os_version: "" };
  if (/Mac/i.test(t)) {
    var i = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(t);
    return i && i[1] ? { os_name: "Mac OS X", os_version: [i[1], i[2], i[3] || "0"].join(".") } : { os_name: "Mac OS X", os_version: "" };
  }
  return /Linux/.test(t) ? { os_name: "Linux", os_version: "" } : /CrOS/.test(t) ? { os_name: "Chrome OS", os_version: "" } : { os_name: "", os_version: "" };
}, device: function(t) {
  return /Windows Phone/i.test(t) || /WPDesktop/.test(t) ? "Windows Phone" : /iPad/.test(t) ? "iPad" : /iPod/.test(t) ? "iPod Touch" : /iPhone/.test(t) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Android/.test(t) && !/Mobile/.test(t) ? "Android Tablet" : /Android/.test(t) ? "Android" : "";
}, deviceType: function(t) {
  var e = this.device(t);
  return e === "iPad" || e === "Android Tablet" ? "Tablet" : e ? "Mobile" : "Desktop";
}, referrer: function() {
  return pe.referrer || "$direct";
}, referringDomain: function() {
  if (!pe.referrer)
    return "$direct";
  var t = pe.createElement("a");
  return t.href = pe.referrer, t.host;
}, properties: function() {
  var t = be.os(Ke), e = t.os_name, n = t.os_version;
  return Ee(ai({ $os: e, $os_version: n, $browser: be.browser(Ke, Nt.vendor, C.opera), $device: be.device(Ke), $device_type: be.deviceType(Ke) }), { $current_url: C == null ? void 0 : C.location.href, $host: C == null ? void 0 : C.location.host, $pathname: C == null ? void 0 : C.location.pathname, $browser_version: be.browserVersion(Ke, Nt.vendor, C.opera), $browser_language: be.browserLanguage(), $screen_height: C == null ? void 0 : C.screen.height, $screen_width: C == null ? void 0 : C.screen.width, $viewport_height: C == null ? void 0 : C.innerHeight, $viewport_width: C == null ? void 0 : C.innerWidth, $lib: "web", $lib_version: at.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: (Date.now = Date.now || function() {
    return +/* @__PURE__ */ new Date();
  }, Date.now() / 1e3) });
}, people_properties: function() {
  var t = be.os(Ke), e = t.os_name, n = t.os_version;
  return Ee(ai({ $os: e, $os_version: n, $browser: be.browser(Ke, Nt.vendor, C.opera) }), { $browser_version: be.browserVersion(Ke, Nt.vendor, C.opera) });
} };
function ir(t) {
  switch (xt(t.className)) {
    case "string":
      return t.className;
    case "object":
      return ("baseVal" in t.className ? t.className.baseVal : null) || t.getAttribute("class") || "";
    default:
      return "";
  }
}
function sr(t) {
  var e = "";
  return Un(t) && !Xa(t) && t.childNodes && t.childNodes.length && W(t.childNodes, function(n) {
    Qa(n) && n.textContent && (e += oi(n.textContent).split(/(\s+)/).filter(Qt).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
  }), oi(e);
}
function ys(t) {
  return !!t && t.nodeType === 1;
}
function Ut(t, e) {
  return !!t && !!t.tagName && t.tagName.toLowerCase() === e.toLowerCase();
}
function Qa(t) {
  return !!t && t.nodeType === 3;
}
function bs(t) {
  return !!t && t.nodeType === 11;
}
var jr = ["a", "button", "form", "input", "select", "textarea", "label"];
function Un(t) {
  for (var e = t; e.parentNode && !Ut(e, "body"); e = e.parentNode) {
    var n = ir(e).split(" ");
    if (K(n, "ph-sensitive") || K(n, "ph-no-capture"))
      return !1;
  }
  if (K(ir(t).split(" "), "ph-include"))
    return !0;
  var r = t.type || "";
  if (typeof r == "string")
    switch (r.toLowerCase()) {
      case "hidden":
      case "password":
        return !1;
    }
  var i = t.name || t.id || "";
  return !(typeof i == "string" && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i.replace(/[^a-zA-Z0-9]/g, "")));
}
function Xa(t) {
  return !!(Ut(t, "input") && !["button", "checkbox", "submit", "reset"].includes(t.type) || Ut(t, "select") || Ut(t, "textarea") || t.getAttribute("contenteditable") === "true");
}
function Qt(t) {
  return !(t === null || Xe(t) || typeof t == "string" && (t = oi(t), /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((t || "").replace(/[- ]/g, "")) || /(^\d{3}-?\d{2}-?\d{4}$)/.test(t)));
}
function ws(t) {
  var e = sr(t);
  return Qt(e = "".concat(e, " ").concat(Ya(t)).trim()) ? e : "";
}
function Ya(t) {
  var e = "";
  return t && t.childNodes && t.childNodes.length && W(t.childNodes, function(n) {
    var r;
    if (n && ((r = n.tagName) === null || r === void 0 ? void 0 : r.toLowerCase()) === "span")
      try {
        var i = sr(n);
        e = "".concat(e, " ").concat(i).trim(), n.childNodes && n.childNodes.length && (e = "".concat(e, " ").concat(Ya(n)).trim());
      } catch (s) {
        console.error(s);
      }
  }), e;
}
var Ed = function() {
  function t(e) {
    ce(this, t), this.clicks = [], this.enabled = e;
  }
  return ue(t, [{ key: "isRageClick", value: function(e, n, r) {
    if (!this.enabled)
      return !1;
    var i = this.clicks[this.clicks.length - 1];
    if (i && Math.abs(e - i.x) + Math.abs(n - i.y) < 30 && r - i.timestamp < 1e3) {
      if (this.clicks.push({ x: e, y: n, timestamp: r }), this.clicks.length === 3)
        return !0;
    } else
      this.clicks = [{ x: e, y: n, timestamp: r }];
    return !1;
  } }]), t;
}(), Ad = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i, st = { is_supported: function() {
  return !0;
}, error: function(t) {
  te.error("cookieStore error: " + t);
}, get: function(t) {
  try {
    for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
      for (var i = n[r]; i.charAt(0) == " "; )
        i = i.substring(1, i.length);
      if (i.indexOf(e) === 0)
        return decodeURIComponent(i.substring(e.length, i.length));
    }
  } catch {
  }
  return null;
}, parse: function(t) {
  var e;
  try {
    e = JSON.parse(st.get(t)) || {};
  } catch {
  }
  return e;
}, set: function(t, e, n, r, i) {
  try {
    var s = "", o = "", a = "";
    if (r) {
      var l = document.location.hostname.match(Ad), c = l ? l[0] : "";
      s = c ? "; domain=." + c : "";
    }
    if (n) {
      var u = /* @__PURE__ */ new Date();
      u.setTime(u.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=" + u.toUTCString();
    }
    i && (a = "; secure");
    var d = t + "=" + encodeURIComponent(JSON.stringify(e)) + o + "; SameSite=Lax; path=/" + s + a;
    return document.cookie = d, d;
  } catch {
    return;
  }
}, remove: function(t, e) {
  try {
    st.set(t, "", -1, e);
  } catch {
    return;
  }
} }, Mr = null, de = { is_supported: function() {
  if (Mr !== null)
    return Mr;
  var t = !0;
  if (typeof window < "u")
    try {
      var e = "__mplssupport__";
      de.set(e, "xyz"), de.get(e) !== '"xyz"' && (t = !1), de.remove(e);
    } catch {
      t = !1;
    }
  else
    t = !1;
  return t || te.error("localStorage unsupported; falling back to cookie store"), Mr = t, t;
}, error: function(t) {
  te.error("localStorage error: " + t);
}, get: function(t) {
  try {
    return window.localStorage.getItem(t);
  } catch (e) {
    de.error(e);
  }
  return null;
}, parse: function(t) {
  try {
    return JSON.parse(de.get(t)) || {};
  } catch {
  }
  return null;
}, set: function(t, e) {
  try {
    window.localStorage.setItem(t, JSON.stringify(e));
  } catch (n) {
    de.error(n);
  }
}, remove: function(t) {
  try {
    window.localStorage.removeItem(t);
  } catch (e) {
    de.error(e);
  }
} }, li = M(M({}, de), {}, { parse: function(t) {
  try {
    var e = {};
    try {
      (e = st.parse(t) || {}).distinct_id && st.set(t, { distinct_id: e.distinct_id });
    } catch {
    }
    var n = Ee(e, JSON.parse(de.get(t) || "{}"));
    return de.set(t, n), n;
  } catch {
  }
  return null;
}, set: function(t, e, n, r, i) {
  try {
    de.set(t, e), e.distinct_id && st.set(t, { distinct_id: e.distinct_id }, n, r, i);
  } catch (s) {
    de.error(s);
  }
}, remove: function(t, e) {
  try {
    window.localStorage.removeItem(t), st.remove(t, e);
  } catch (n) {
    de.error(n);
  }
} }), $n = {}, Id = { is_supported: function() {
  return !0;
}, error: function(t) {
  te.error("memoryStorage error: " + t);
}, get: function(t) {
  return $n[t] || null;
}, parse: function(t) {
  return $n[t] || null;
}, set: function(t, e) {
  $n[t] = e;
}, remove: function(t) {
  delete $n[t];
} }, jt = null, xe = { is_supported: function() {
  if (jt !== null)
    return jt;
  if (jt = !0, typeof window < "u")
    try {
      var t = "__support__";
      xe.set(t, "xyz"), xe.get(t) !== '"xyz"' && (jt = !1), xe.remove(t);
    } catch {
      jt = !1;
    }
  else
    jt = !1;
  return jt;
}, error: function(t) {
  at.DEBUG && te.error("sessionStorage error: ", t);
}, get: function(t) {
  try {
    return window.sessionStorage.getItem(t);
  } catch (e) {
    xe.error(e);
  }
  return null;
}, parse: function(t) {
  try {
    return JSON.parse(xe.get(t)) || null;
  } catch {
  }
  return null;
}, set: function(t, e) {
  try {
    window.sessionStorage.setItem(t, JSON.stringify(e));
  } catch (n) {
    xe.error(n);
  }
}, remove: function(t) {
  try {
    window.sessionStorage.removeItem(t);
  } catch (e) {
    xe.error(e);
  }
} }, Za = "$people_distinct_id", Bn = "__alias", hn = "__timers", ks = "$autocapture_disabled_server_side", ci = "$session_recording_enabled_server_side", Ss = "$console_log_recording_enabled_server_side", Es = "$session_recording_recorder_version_server_side", ui = "$sesid", Xt = "$enabled_feature_flags", di = "$early_access_features", Yt = "$stored_person_properties", Et = "$stored_group_properties", fi = "$surveys", or = "$flag_call_reported", hi = "$user_state", xd = [Za, Bn, "__cmpns", hn, ci, ui, Xt, hi, di, Et, Yt, fi, or], Td = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"], As = function() {
  function t(e) {
    ce(this, t);
    var n = "";
    e.token && (n = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = !1, this.custom_campaign_params = e.custom_campaign_params || [], e.persistence_name ? this.name = "ph_" + e.persistence_name : this.name = "ph_" + n + "_posthog", Td.indexOf(e.persistence.toLowerCase()) === -1 && (te.critical("Unknown persistence type " + e.persistence + "; falling back to cookie"), e.persistence = "cookie");
    var r = e.persistence.toLowerCase();
    r === "localstorage" && de.is_supported() ? this.storage = de : r === "localstorage+cookie" && li.is_supported() ? this.storage = li : r === "sessionstorage" && xe.is_supported() ? this.storage = xe : this.storage = r === "memory" ? Id : st, this.user_state = "anonymous", this.load(), this.update_config(e), this.save();
  }
  return ue(t, [{ key: "properties", value: function() {
    var e = {};
    return W(this.props, function(n, r) {
      if (r === Xt && xt(n) === "object")
        for (var i = Object.keys(n), s = 0; s < i.length; s++)
          e["$feature/".concat(i[s])] = n[i[s]];
      else
        a = r, l = !1, ((o = xd) === null ? l : vs && o.indexOf === vs ? o.indexOf(a) != -1 : (W(o, function(c) {
          if (l || (l = c === a))
            return Oi;
        }), l)) || (e[r] = n);
      var o, a, l;
    }), e;
  } }, { key: "load", value: function() {
    if (!this.disabled) {
      var e = this.storage.parse(this.name);
      e && (this.props = Ee({}, e));
    }
  } }, { key: "save", value: function() {
    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
  } }, { key: "remove", value: function() {
    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0);
  } }, { key: "clear", value: function() {
    this.remove(), this.props = {};
  } }, { key: "register_once", value: function(e, n, r) {
    var i = this;
    if (Dt(e)) {
      n === void 0 && (n = "None"), this.expire_days = r === void 0 ? this.default_expiry : r;
      var s = !1;
      if (W(e, function(o, a) {
        i.props.hasOwnProperty(a) && i.props[a] !== n || (i.props[a] = o, s = !0);
      }), s)
        return this.save(), !0;
    }
    return !1;
  } }, { key: "register", value: function(e, n) {
    var r = this;
    if (Dt(e)) {
      this.expire_days = n === void 0 ? this.default_expiry : n;
      var i = !1;
      if (W(e, function(s, o) {
        e.hasOwnProperty(o) && r.props[o] !== s && (r.props[o] = s, i = !0);
      }), i)
        return this.save(), !0;
    }
    return !1;
  } }, { key: "unregister", value: function(e) {
    e in this.props && (delete this.props[e], this.save());
  } }, { key: "update_campaign_params", value: function() {
    this.campaign_params_saved || (this.register(be.campaignParams(this.custom_campaign_params)), this.campaign_params_saved = !0);
  } }, { key: "update_search_keyword", value: function() {
    this.register(be.searchInfo());
  } }, { key: "update_referrer_info", value: function() {
    this.register({ $referrer: this.props.$referrer || be.referrer(), $referring_domain: this.props.$referring_domain || be.referringDomain() });
  } }, { key: "get_referrer_info", value: function() {
    return ai({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
  } }, { key: "safe_merge", value: function(e) {
    return W(this.props, function(n, r) {
      r in e || (e[r] = n);
    }), e;
  } }, { key: "update_config", value: function(e) {
    this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie);
  } }, { key: "set_disabled", value: function(e) {
    this.disabled = e, this.disabled ? this.remove() : this.save();
  } }, { key: "set_cross_subdomain", value: function(e) {
    e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save());
  } }, { key: "get_cross_subdomain", value: function() {
    return !!this.cross_subdomain;
  } }, { key: "set_secure", value: function(e) {
    e !== this.secure && (this.secure = e, this.remove(), this.save());
  } }, { key: "set_event_timer", value: function(e, n) {
    var r = this.props[hn] || {};
    r[e] = n, this.props[hn] = r, this.save();
  } }, { key: "remove_event_timer", value: function(e) {
    var n = (this.props[hn] || {})[e];
    return Xe(n) || (delete this.props[hn][e], this.save()), n;
  } }, { key: "get_user_state", value: function() {
    return this.props[hi] || "anonymous";
  } }, { key: "set_user_state", value: function(e) {
    this.props[hi] = e, this.save();
  } }]), t;
}(), At = { _initializedTokens: [], _isAutocaptureEnabled: !1, _setIsAutocaptureEnabled: function(t) {
  var e = !!t.get_property(ks), n = !!t.get_config("autocapture");
  this._isAutocaptureEnabled = n && !e;
}, _previousElementSibling: function(t) {
  if (t.previousElementSibling)
    return t.previousElementSibling;
  var e = t;
  do
    e = e.previousSibling;
  while (e && !ys(e));
  return e;
}, _getAugmentPropertiesFromElement: function(t) {
  if (!Un(t))
    return {};
  var e = {};
  return W(t.attributes, function(n) {
    if (n.name.indexOf("data-ph-capture-attribute") === 0) {
      var r = n.name.replace("data-ph-capture-attribute-", ""), i = n.value;
      r && i && Qt(i) && (e[r] = i);
    }
  }), e;
}, _getPropertiesFromElement: function(t, e, n) {
  var r = t.tagName.toLowerCase(), i = { tag_name: r };
  jr.indexOf(r) > -1 && !n && (r.toLowerCase() === "a" || r.toLowerCase() === "button" ? i.$el_text = ws(t) : i.$el_text = sr(t));
  var s = ir(t);
  s.length > 0 && (i.classes = s.split(" ").filter(function(c) {
    return c !== "";
  })), W(t.attributes, function(c) {
    var u;
    Xa(t) && ["name", "id", "class"].indexOf(c.name) === -1 || !e && Qt(c.value) && (typeof (u = c.name) != "string" || u.substring(0, 10) !== "_ngcontent" && u.substring(0, 7) !== "_nghost") && (i["attr__" + c.name] = c.value);
  });
  for (var o = 1, a = 1, l = t; l = this._previousElementSibling(l); )
    o++, l.tagName === t.tagName && a++;
  return i.nth_child = o, i.nth_of_type = a, i;
}, _getDefaultProperties: function(t) {
  return { $event_type: t, $ce_version: 1 };
}, _extractCustomPropertyValue: function(t) {
  var e = [];
  return W(document.querySelectorAll(t.css_selector), function(n) {
    var r;
    ["input", "select"].indexOf(n.tagName.toLowerCase()) > -1 ? r = n.value : n.textContent && (r = n.textContent), Qt(r) && e.push(r);
  }), e.join(", ");
}, _getCustomProperties: function(t) {
  var e = this, n = {};
  return W(this._customProperties, function(r) {
    W(r.event_selectors, function(i) {
      W(document.querySelectorAll(i), function(s) {
        K(t, s) && Un(s) && (n[r.name] = e._extractCustomPropertyValue(r));
      });
    });
  }), n;
}, _getEventTarget: function(t) {
  return t.target === void 0 ? t.srcElement || null : (e = t.target) !== null && e !== void 0 && e.shadowRoot ? t.composedPath()[0] || null : t.target || null;
  var e;
}, _captureEvent: function(t, e) {
  var n, r = this, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "$autocapture", s = this._getEventTarget(t);
  if (Qa(s) && (s = s.parentNode || null), i === "$autocapture" && t.type === "click" && t instanceof MouseEvent && (n = this.rageclicks) !== null && n !== void 0 && n.isRageClick(t.clientX, t.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._captureEvent(t, e, "$rageclick"), s && function(h, g) {
    var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    if (!h || Ut(h, "html") || !ys(h))
      return !1;
    if (p != null && p.url_allowlist) {
      var _ = window.location.href, v = p.url_allowlist;
      if (v && !v.some(function(Y) {
        return _.match(Y);
      }))
        return !1;
    }
    if (p != null && p.dom_event_allowlist) {
      var m = p.dom_event_allowlist;
      if (m && !m.some(function(Y) {
        return g.type === Y;
      }))
        return !1;
    }
    if (p != null && p.element_allowlist) {
      var F = p.element_allowlist;
      if (F && !F.some(function(Y) {
        return h.tagName.toLowerCase() === Y;
      }))
        return !1;
    }
    if (p != null && p.css_selector_allowlist) {
      var y = p.css_selector_allowlist;
      if (y && !y.some(function(Y) {
        return h.matches(Y);
      }))
        return !1;
    }
    for (var k = !1, I = [h], $ = !0, O = h; O.parentNode && !Ut(O, "body"); )
      if (bs(O.parentNode))
        I.push(O.parentNode.host), O = O.parentNode.host;
      else {
        if (!($ = O.parentNode || !1))
          break;
        if (jr.indexOf($.tagName.toLowerCase()) > -1)
          k = !0;
        else {
          var j = window.getComputedStyle($);
          j && j.getPropertyValue("cursor") === "pointer" && (k = !0);
        }
        I.push($), O = $;
      }
    var ie = window.getComputedStyle(h);
    if (ie && ie.getPropertyValue("cursor") === "pointer" && g.type === "click")
      return !0;
    var Me = h.tagName.toLowerCase();
    switch (Me) {
      case "html":
        return !1;
      case "form":
        return g.type === "submit";
      case "input":
      case "select":
      case "textarea":
        return g.type === "change" || g.type === "click";
      default:
        return k ? g.type === "click" : g.type === "click" && (jr.indexOf(Me) > -1 || h.getAttribute("contenteditable") === "true");
    }
  }(s, t, this.config)) {
    for (var o = [s], a = s; a.parentNode && !Ut(a, "body"); )
      bs(a.parentNode) ? (o.push(a.parentNode.host), a = a.parentNode.host) : (o.push(a.parentNode), a = a.parentNode);
    var l, c = [], u = {}, d = !1;
    if (W(o, function(h) {
      var g = Un(h);
      h.tagName.toLowerCase() === "a" && (l = h.getAttribute("href"), l = g && Qt(l) && l), K(ir(h).split(" "), "ph-no-capture") && (d = !0), c.push(r._getPropertiesFromElement(h, e.get_config("mask_all_element_attributes"), e.get_config("mask_all_text")));
      var p = r._getAugmentPropertiesFromElement(h);
      Ee(u, p);
    }), e.get_config("mask_all_text") || (s.tagName.toLowerCase() === "a" || s.tagName.toLowerCase() === "button" ? c[0].$el_text = ws(s) : c[0].$el_text = sr(s)), l && (c[0].attr__href = l), d)
      return !1;
    var f = Ee(this._getDefaultProperties(t.type), { $elements: c }, this._getCustomProperties(o), u);
    return e.capture(i, f), !0;
  }
}, _navigate: function(t) {
  window.location.href = t;
}, _addDomEventHandlers: function(t) {
  var e = this, n = function(r) {
    r = r || window.event, e._captureEvent(r, t);
  };
  gn(document, "submit", n, !1, !0), gn(document, "change", n, !1, !0), gn(document, "click", n, !1, !0);
}, _customProperties: [], rageclicks: null, config: void 0, init: function(t) {
  var e;
  typeof t.__autocapture != "boolean" && (this.config = t.__autocapture), (e = this.config) !== null && e !== void 0 && e.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map(function(n) {
    return new RegExp(n);
  })), this.rageclicks = new Ed(t.get_config("rageclick"));
}, afterDecideResponse: function(t, e) {
  this._setIsAutocaptureEnabled(e);
  var n = e.get_config("token");
  this._initializedTokens.indexOf(n) > -1 ? te.log('autocapture already initialized for token "' + n + '"') : (e.persistence && e.persistence.register(N({}, ks, !!t.autocapture_opt_out)), this._initializedTokens.push(n), t && t.config && t.config.enable_collect_everything && this._isAutocaptureEnabled ? (t.custom_properties && (this._customProperties = t.custom_properties), this._addDomEventHandlers(e)) : e.__autocapture = !1);
}, enabledForProject: function(t, e, n) {
  if (!t)
    return !0;
  e = Xe(e) ? 10 : e, n = Xe(n) ? 10 : n;
  for (var r = 0, i = 0; i < t.length; i++)
    r += t.charCodeAt(i);
  return r % e < n;
}, isBrowserSupported: function() {
  return Va(document.querySelectorAll);
} };
(function(t) {
  for (var e in t)
    typeof t[e] == "function" && (t[e] = t[e].bind(t));
})(At), function(t) {
  for (var e in t)
    typeof t[e] == "function" && (t[e] = Ja(t[e]));
}(At);
var Rd = "__ph_opt_in_out_";
function Pd(t, e) {
  nl(!0, t, e);
}
function Od(t, e) {
  nl(!1, t, e);
}
function Fd(t, e) {
  return tl(t, e) === "1";
}
function el(t, e) {
  return !!function(n) {
    if (n && n.respectDnt) {
      var r = n && n.window || C, i = r.navigator || {}, s = !1;
      return W([i.doNotTrack, i.msDoNotTrack, r.doNotTrack], function(o) {
        K([!0, 1, "1", "yes"], o) && (s = !0);
      }), s;
    }
    return !1;
  }(e) || tl(t, e) === "0";
}
function Cd(t, e) {
  Ci(e = e || {}).remove($i(t, e), !!e.crossSubdomainCookie);
}
function Ci(t) {
  return (t = t || {}).persistenceType === "localStorage" ? de : t.persistenceType === "localStorage+cookie" ? li : st;
}
function $i(t, e) {
  return ((e = e || {}).persistencePrefix || Rd) + t;
}
function tl(t, e) {
  return Ci(e).get($i(t, e));
}
function nl(t, e, n) {
  Ga(e) && e.length ? (Ci(n = n || {}).set($i(e, n), t ? 1 : 0, md(n.cookieExpiration) ? n.cookieExpiration : null, n.crossSubdomainCookie, n.secureCookie), n.capture && t && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, { send_instantly: !0 })) : console.error("gdpr." + (t ? "optIn" : "optOut") + " called with an invalid token");
}
function rl(t, e) {
  var n = !1;
  try {
    var r = t.get_config("token"), i = t.get_config("respect_dnt"), s = t.get_config("opt_out_capturing_persistence_type"), o = t.get_config("opt_out_capturing_cookie_prefix") || void 0, a = t.get_config("window");
    r && (n = el(r, { respectDnt: i, persistenceType: s, persistencePrefix: o, window: a }));
  } catch (l) {
    e || console.error("Unexpected error when checking capturing opt-out status: " + l);
  }
  return n;
}
function Is(t, e, n) {
  return function() {
    for (var r = rl(t, n), i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    if (!r)
      return e.apply(this, s);
    var a = s[s.length - 1];
    typeof a == "function" && a(0);
  };
}
var Nr = "$set", $d = function() {
  function t(e) {
    var n = this;
    ce(this, t), this._posthog = e, this.set = Is(e, function(r, i, s) {
      var o = n.set_action(r, i);
      return n._posthog.setPersonPropertiesForFlags(o.$set || {}), Dt(r) && (s = i), n._get_config("save_referrer") && n._posthog.sessionPersistence.update_referrer_info(), o[Nr] = Ee({}, be.people_properties(), n._posthog.sessionPersistence.get_referrer_info(), o[Nr]), n._send_request(o, s);
    }), this.set_once = Is(e, function(r, i, s) {
      var o = n.set_once_action(r, i);
      return Dt(r) && (s = i), n._send_request(o, s);
    });
  }
  return ue(t, [{ key: "toString", value: function() {
    return this._posthog.toString() + ".people";
  } }, { key: "_send_request", value: function(e, n) {
    e.$token = this._get_config("token"), e.$distinct_id = this._posthog.get_distinct_id();
    var r = this._posthog.get_property("$device_id"), i = this._posthog.get_property("$user_id"), s = this._posthog.get_property("$had_persisted_distinct_id");
    r && (e.$device_id = r), i && (e.$user_id = i), s && (e.$had_persisted_distinct_id = s);
    var o = yd(e), a = Ka(o, this._get_config("properties_string_max_length")), l = wr(JSON.stringify(o));
    return this._posthog._send_request(this._get_config("api_host") + "/engage/", { data: l }, {}, this._posthog._prepare_callback(n, a)), a;
  } }, { key: "_get_config", value: function(e) {
    return this._posthog.get_config(e);
  } }, { key: "_is_reserved_property", value: function(e) {
    return e === "$distinct_id" || e === "$token" || e === "$device_id" || e === "$user_id" || e === "$had_persisted_distinct_id";
  } }, { key: "set_action", value: function(e, n) {
    return this.apiActionParser(Nr, e, n);
  } }, { key: "set_once_action", value: function(e, n) {
    return this.apiActionParser("$set_once", e, n);
  } }, { key: "apiActionParser", value: function(e, n, r) {
    var i = this, s = {}, o = {};
    return Dt(n) ? W(n, function(a, l) {
      i._is_reserved_property(l) || (o[l] = a);
    }) : o[n] = r, s[e] = o, s;
  } }]), t;
}(), Lr = "$active_feature_flags", jn = "$override_feature_flags", xs = "$feature_flag_payloads", Ts = function(t) {
  var e, n = {}, r = yt(function(a) {
    for (var l = Object.keys(a), c = l.length, u = new Array(c); c--; )
      u[c] = [l[c], a[l[c]]];
    return u;
  }(t || {}));
  try {
    for (r.s(); !(e = r.n()).done; ) {
      var i = Pt(e.value, 2), s = i[0], o = i[1];
      o && (n[s] = o);
    }
  } catch (a) {
    r.e(a);
  } finally {
    r.f();
  }
  return n;
}, jd = function() {
  function t(e) {
    ce(this, t), this.instance = e, this._override_warning = !1, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1;
  }
  return ue(t, [{ key: "getFlags", value: function() {
    return Object.keys(this.getFlagVariants());
  } }, { key: "getFlagVariants", value: function() {
    var e = this.instance.get_property(Xt), n = this.instance.get_property(jn);
    if (!n)
      return e || {};
    for (var r = Ee({}, e), i = Object.keys(n), s = 0; s < i.length; s++)
      n[i[s]] === !1 ? delete r[i[s]] : r[i[s]] = n[i[s]];
    return this._override_warning || (console.warn("[PostHog] Overriding feature flags!", { enabledFlags: e, overriddenFlags: n, finalFlags: r }), this._override_warning = !0), r;
  } }, { key: "getFlagPayloads", value: function() {
    return this.instance.get_property(xs) || {};
  } }, { key: "reloadFeatureFlags", value: function() {
    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer());
  } }, { key: "setAnonymousDistinctId", value: function(e) {
    this.$anon_distinct_id = e;
  } }, { key: "setReloadingPaused", value: function(e) {
    this.reloadFeatureFlagsInAction = e;
  } }, { key: "resetRequestQueue", value: function() {
    this.reloadFeatureFlagsQueued = !1;
  } }, { key: "_startReloadTimer", value: function() {
    var e = this;
    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
      !e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest());
    }, 5);
  } }, { key: "_reloadFeatureFlagsRequest", value: function() {
    var e = this;
    this.setReloadingPaused(!0);
    var n = this.instance.get_config("token"), r = this.instance.get_property(Yt), i = this.instance.get_property(Et), s = wr(JSON.stringify({ token: n, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: r, group_properties: i }));
    this.instance._send_request(this.instance.get_config("api_host") + "/decide/?v=3", { data: s }, { method: "POST" }, this.instance._prepare_callback(function(o) {
      e.$anon_distinct_id = void 0, e.receivedFeatureFlags(o), e.setReloadingPaused(!1), e._startReloadTimer();
    }));
  } }, { key: "getFeatureFlag", value: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.getFlags() && this.getFlags().length !== 0) {
      var r = this.getFlagVariants()[e], i = "".concat(r), s = this.instance.get_property(or) || {};
      return !n.send_event && "send_event" in n || e in s && s[e].includes(i) || (Array.isArray(s[e]) ? s[e].push(i) : s[e] = [i], this.instance.persistence.register(N({}, or, s)), this.instance.capture("$feature_flag_called", { $feature_flag: e, $feature_flag_response: r })), r;
    }
    console.warn('getFeatureFlag for key "' + e + `" failed. Feature flags didn't load in time.`);
  } }, { key: "getFeatureFlagPayload", value: function(e) {
    return this.getFlagPayloads()[e];
  } }, { key: "isFeatureEnabled", value: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.getFlags() && this.getFlags().length !== 0)
      return !!this.getFeatureFlag(e, n);
    console.warn('isFeatureEnabled for key "' + e + `" failed. Feature flags didn't load in time.`);
  } }, { key: "addFeatureFlagsHandler", value: function(e) {
    this.featureFlagEventHandlers.push(e);
  } }, { key: "removeFeatureFlagsHandler", value: function(e) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(n) {
      return n !== e;
    });
  } }, { key: "receivedFeatureFlags", value: function(e) {
    this.instance.decideEndpointWasHit = !0;
    var n = this.getFlagVariants(), r = this.getFlagPayloads();
    (function(i, s) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, l = i.featureFlags, c = i.featureFlagPayloads;
      if (l)
        if (Array.isArray(l)) {
          var u, d = {};
          if (l)
            for (var f = 0; f < l.length; f++)
              d[l[f]] = !0;
          s && s.register((N(u = {}, Lr, l), N(u, Xt, d), u));
        } else {
          var h, g = l, p = c;
          i.errorsWhileComputingFlags && (g = M(M({}, o), g), p = M(M({}, a), p)), s && s.register((N(h = {}, Lr, Object.keys(Ts(g))), N(h, Xt, g || {}), N(h, xs, p || {}), h));
        }
    })(e, this.instance.persistence, n, r), this._fireFeatureFlagsCallbacks();
  } }, { key: "override", value: function(e) {
    if (this._override_warning = !1, e === !1)
      this.instance.persistence.unregister(jn);
    else if (Array.isArray(e)) {
      for (var n = {}, r = 0; r < e.length; r++)
        n[e[r]] = !0;
      this.instance.persistence.register(N({}, jn, n));
    } else
      this.instance.persistence.register(N({}, jn, e));
  } }, { key: "onFeatureFlags", value: function(e) {
    var n = this;
    if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
      var r = this._prepareFeatureFlagsForCallbacks(), i = r.flags, s = r.flagVariants;
      e(i, s);
    }
    return function() {
      return n.removeFeatureFlagsHandler(e);
    };
  } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e, n) {
    var r, i = N({}, "$feature_enrollment/".concat(e), n);
    this.instance.capture("$feature_enrollment_update", { $feature_flag: e, $feature_enrollment: n, $set: i }), this.setPersonPropertiesForFlags(i, !1);
    var s = M(M({}, this.getFlagVariants()), {}, N({}, e, n));
    this.instance.persistence.register((N(r = {}, Lr, Object.keys(Ts(s))), N(r, Xt, s), r)), this._fireFeatureFlagsCallbacks();
  } }, { key: "getEarlyAccessFeatures", value: function(e) {
    var n = this, r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.instance.get_property(di);
    if (i && !r)
      return e(i);
    this.instance._send_request("".concat(this.instance.get_config("api_host"), "/api/early_access_features/?token=").concat(this.instance.get_config("token")), {}, { method: "GET" }, function(s) {
      var o = s.earlyAccessFeatures;
      return n.instance.persistence.register(N({}, di, o)), e(o);
    });
  } }, { key: "_prepareFeatureFlagsForCallbacks", value: function() {
    var e = this.getFlags(), n = this.getFlagVariants();
    return { flags: e.filter(function(r) {
      return n[r];
    }), flagVariants: Object.keys(n).filter(function(r) {
      return n[r];
    }).reduce(function(r, i) {
      return r[i] = n[i], r;
    }, {}) };
  } }, { key: "_fireFeatureFlagsCallbacks", value: function() {
    var e = this._prepareFeatureFlagsForCallbacks(), n = e.flags, r = e.flagVariants;
    this.featureFlagEventHandlers.forEach(function(i) {
      return i(n, r);
    });
  } }, { key: "setPersonPropertiesForFlags", value: function(e) {
    var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r = this.instance.get_property(Yt) || {};
    this.instance.register(N({}, Yt, M(M({}, r), e))), n && this.instance.reloadFeatureFlags();
  } }, { key: "resetPersonPropertiesForFlags", value: function() {
    this.instance.unregister(Yt);
  } }, { key: "setGroupPropertiesForFlags", value: function(e) {
    var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r = this.instance.get_property(Et) || {};
    Object.keys(r).length !== 0 && Object.keys(r).forEach(function(i) {
      r[i] = M(M({}, r[i]), e[i]), delete e[i];
    }), this.instance.register(N({}, Et, M(M({}, r), e))), n && this.instance.reloadFeatureFlags();
  } }, { key: "resetGroupPropertiesForFlags", value: function(e) {
    if (e) {
      var n = this.instance.get_property(Et) || {};
      this.instance.register(N({}, Et, M(M({}, n), {}, N({}, e, {}))));
    } else
      this.instance.unregister(Et);
  } }]), t;
}(), Md = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==", Rs = 2, Nd = 4, Ld = 6, zd = 5e6, Dd = "rrweb/console@1", it, Ud = "/s/";
(function(t) {
  t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
})(it || (it = {}));
var Bd = [it.MouseMove, it.MouseInteraction, it.Scroll, it.ViewportResize, it.Input, it.TouchMove, it.MediaInteraction, it.Drag], qd = function() {
  function t(e) {
    var n = this;
    ce(this, t), N(this, "lastActivityTimestamp", Date.now()), N(this, "isIdle", !1), this.instance = e, this.captureStarted = !1, this.snapshots = [], this.emit = !1, this.endpoint = Ud, this.stopRrweb = void 0, this.windowId = null, this.sessionId = null, this.receivedDecide = !1, window.addEventListener("beforeunload", function() {
      n._flushBuffer();
    });
  }
  return ue(t, [{ key: "startRecordingIfEnabled", value: function() {
    this.isRecordingEnabled() ? this.startCaptureAndTrySendingQueuedSnapshots() : this.stopRecording();
  } }, { key: "started", value: function() {
    return this.captureStarted;
  } }, { key: "stopRecording", value: function() {
    this.captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this.captureStarted = !1);
  } }, { key: "isRecordingEnabled", value: function() {
    var e = !!this.instance.get_property(ci), n = !this.instance.get_config("disable_session_recording");
    return e && n;
  } }, { key: "isConsoleLogCaptureEnabled", value: function() {
    var e = !!this.instance.get_property(Ss), n = this.instance.get_config("enable_recording_console_log");
    return n ?? e;
  } }, { key: "getRecordingVersion", value: function() {
    var e, n = this.instance.get_property(Es);
    return ((e = this.instance.get_config("session_recording")) === null || e === void 0 ? void 0 : e.recorderVersion) || n || "v1";
  } }, { key: "afterDecideResponse", value: function(e) {
    var n, r, i, s, o, a;
    this.receivedDecide = !0, this.instance.persistence && this.instance.persistence.register((N(o = {}, ci, !!e.sessionRecording), N(o, Ss, (i = e.sessionRecording) === null || i === void 0 ? void 0 : i.consoleLogRecordingEnabled), N(o, Es, (s = e.sessionRecording) === null || s === void 0 ? void 0 : s.recorderVersion), o)), (n = e.sessionRecording) !== null && n !== void 0 && n.endpoint && (this.endpoint = (a = e.sessionRecording) === null || a === void 0 ? void 0 : a.endpoint), (r = e.sessionRecording) !== null && r !== void 0 && r.recorderVersion && (this.recorderVersion = e.sessionRecording.recorderVersion), this.startRecordingIfEnabled();
  } }, { key: "startCaptureAndTrySendingQueuedSnapshots", value: function() {
    var e = this;
    this.receivedDecide && (this.emit = !0, this.snapshots.forEach(function(n) {
      return e._captureSnapshotBuffered(n);
    })), this._startCapture();
  } }, { key: "_startCapture", value: function() {
    var e = this;
    if (Object.assign !== void 0 && !this.captureStarted && !this.instance.get_config("disable_session_recording")) {
      this.captureStarted = !0, this.instance.sessionManager.checkAndGetSessionAndWindowId();
      var n = this.getRecordingVersion() === "v2" ? "recorder-v2.js" : "recorder.js";
      this.instance.__loaded_recorder_version !== this.getRecordingVersion() ? Fi(this.instance.get_config("api_host") + "/static/".concat(n, "?v=").concat(at.LIB_VERSION), function(r) {
        if (r)
          return te.error("Could not load ".concat(n), r);
        e._onScriptLoaded();
      }) : this._onScriptLoaded();
    }
  } }, { key: "_isInteractiveEvent", value: function(e) {
    var n;
    return e.type === 3 && Bd.indexOf((n = e.data) === null || n === void 0 ? void 0 : n.source) !== -1;
  } }, { key: "_updateWindowAndSessionIds", value: function(e) {
    var n = this._isInteractiveEvent(e);
    if (n || this.isIdle || e.timestamp - this.lastActivityTimestamp > 3e5 && (this.isIdle = !0), n && (this.lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryTakeFullSnapshot())), !this.isIdle) {
      var r = this.instance.sessionManager.checkAndGetSessionAndWindowId(!n, e.timestamp), i = r.windowId, s = r.sessionId;
      [Rs, Nd].indexOf(e.type) !== -1 || this.windowId === i && this.sessionId === s || this._tryTakeFullSnapshot(), this.windowId = i, this.sessionId = s;
    }
  } }, { key: "_tryTakeFullSnapshot", value: function() {
    if (!this.captureStarted)
      return !1;
    try {
      var e;
      return (e = this.rrwebRecord) === null || e === void 0 || e.takeFullSnapshot(), !0;
    } catch (n) {
      return te.error("Error taking full snapshot.", n), !1;
    }
  } }, { key: "_onScriptLoaded", value: function() {
    var e = this, n = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskTextClass: "ph-mask", maskTextSelector: void 0, maskTextFn: void 0, maskAllInputs: !0, maskInputOptions: {}, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: !1, inlineStylesheet: !0, recordCrossOriginIframes: !1 };
    this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord;
    for (var r = this.instance.get_config("session_recording"), i = 0, s = Object.entries(r || {}); i < s.length; i++) {
      var o = Pt(s[i], 2), a = o[0], l = o[1];
      a in n && (n[a] = l);
    }
    this.rrwebRecord ? (this.stopRrweb = this.rrwebRecord(M({ emit: function(c) {
      e.onRRwebEmit(c);
    }, plugins: window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled() ? [window.rrwebConsoleRecord.getRecordConsolePlugin()] : [] }, n)), this.instance._addCaptureHook(function(c) {
      try {
        var u;
        c === "$pageview" && ((u = e.rrwebRecord) === null || u === void 0 || u.addCustomEvent("$pageview", { href: window.location.href }));
      } catch (d) {
        te.error("Could not add $pageview to rrweb session", d);
      }
    }), this.lastActivityTimestamp = Date.now(), this.isIdle = !1) : te.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
  } }, { key: "onRRwebEmit", value: function(e) {
    if (e && xt(e) === "object") {
      var n = function(o) {
        var a = JSON.stringify(o);
        if (a.length > zd) {
          var l, c = yt(a.matchAll(/data:([\w\/\-\.]+);(\w+),([^)"]*)/gim));
          try {
            for (c.s(); !(l = c.n()).done; ) {
              var u = l.value;
              a = u[1].toLocaleLowerCase().slice(0, 6) === "image/" ? a.replace(u[0], Md) : a.replace(u[0], "");
            }
          } catch (d) {
            c.e(d);
          } finally {
            c.f();
          }
        }
        return { event: JSON.parse(a), size: a.length };
      }(function(o) {
        var a = o;
        if (a && xt(a) === "object" && a.type === Ld && xt(a.data) === "object" && a.data.plugin === Dd) {
          a.data.payload.payload.length > 10 && (a.data.payload.payload = a.data.payload.payload.slice(0, 10), a.data.payload.payload.push("...[truncated]"));
          for (var l = [], c = 0; c < a.data.payload.payload.length; c++)
            a.data.payload.payload[c] && a.data.payload.payload[c].length > 2e3 ? l.push(a.data.payload.payload[c].slice(0, 2e3) + "...[truncated]") : l.push(a.data.payload.payload[c]);
          return a.data.payload.payload = l, o;
        }
        return o;
      }(e)), r = n.event, i = n.size;
      if (this._updateWindowAndSessionIds(r), !this.isIdle) {
        var s = { $snapshot_bytes: i, $snapshot_data: r, $session_id: this.sessionId, $window_id: this.windowId };
        this.instance._captureMetrics.incr("rrweb-record"), this.instance._captureMetrics.incr("rrweb-record-".concat(r.type)), this.emit ? this._captureSnapshotBuffered(s) : this.snapshots.push(s);
      }
    }
  } }, { key: "_flushBuffer", value: function() {
    return this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0), this.buffer && this.buffer.data.length !== 0 && this._captureSnapshot({ $snapshot_bytes: this.buffer.size, $snapshot_data: this.buffer.data, $session_id: this.buffer.sessionId, $window_id: this.buffer.windowId }), this.buffer = void 0, { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId };
  } }, { key: "_captureSnapshotBuffered", value: function(e) {
    var n, r = this, i = 2 + (((n = this.buffer) === null || n === void 0 ? void 0 : n.data.length) || 0);
    (!this.buffer || this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
      r._flushBuffer();
    }, 2e3));
  } }, { key: "_captureSnapshot", value: function(e) {
    this.instance.capture("$snapshot", e, { transport: "XHR", method: "POST", endpoint: this.endpoint, _noTruncate: !0, _batchKey: "sessionRecording", _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === Rs } });
  } }]), t;
}(), nt = { entryType: 0, timeOrigin: 1, name: 2, startTime: 3, redirectStart: 4, redirectEnd: 5, workerStart: 6, fetchStart: 7, domainLookupStart: 8, domainLookupEnd: 9, connectStart: 10, secureConnectionStart: 11, connectEnd: 12, requestStart: 13, responseStart: 14, responseEnd: 15, decodedBodySize: 16, encodedBodySize: 17, initiatorType: 18, nextHopProtocol: 19, renderBlockingStatus: 20, responseStatus: 21, transferSize: 22, element: 23, renderTime: 24, loadTime: 25, size: 26, id: 27, url: 28, domComplete: 29, domContentLoadedEvent: 30, domInteractive: 31, loadEventEnd: 32, loadEventStart: 33, redirectCount: 34, navigationType: 35, unloadEventEnd: 36, unloadEventStart: 37, duration: 39, timestamp: 40 }, Hd = ["first-input", "navigation", "paint", "resource"], Wd = ["/s/", "/e/"], Vd = function() {
  function t(e) {
    ce(this, t), N(this, "_forceAllowLocalhost", !1), this.instance = e;
  }
  return ue(t, [{ key: "startObservingIfEnabled", value: function() {
    this.isEnabled() ? this.startObserving() : this.stopObserving();
  } }, { key: "startObserving", value: function() {
    var e, n, r = this;
    if (!this.observer)
      if (((e = window) === null || e === void 0 || (n = e.PerformanceObserver) === null || n === void 0 ? void 0 : n.supportedEntryTypes) !== void 0)
        if (!vd.includes(location.hostname) || this._forceAllowLocalhost)
          try {
            this.observer = new PerformanceObserver(function(s) {
              s.getEntries().forEach(function(o) {
                r._capturePerformanceEvent(o);
              });
            });
            var i = PerformanceObserver.supportedEntryTypes.filter(function(s) {
              return Hd.includes(s);
            });
            i.forEach(function(s) {
              var o;
              (o = r.observer) === null || o === void 0 || o.observe({ type: s, buffered: !0 });
            });
          } catch (s) {
            console.error("PostHog failed to start performance observer", s), this.stopObserving();
          }
        else
          te.log("PostHog Peformance observer not started because we are on localhost.");
      else
        te.log("PostHog Performance observer not started because PerformanceObserver is not supported by this browser.");
  } }, { key: "stopObserving", value: function() {
    this.observer && (this.observer.disconnect(), this.observer = void 0);
  } }, { key: "isObserving", value: function() {
    return !!this.observer;
  } }, { key: "isEnabled", value: function() {
    var e, n;
    return (e = (n = this.instance.get_config("capture_performance")) !== null && n !== void 0 ? n : this.remoteEnabled) !== null && e !== void 0 && e;
  } }, { key: "afterDecideResponse", value: function(e) {
    this.remoteEnabled = e.capturePerformance || !1, this.isEnabled() && this.startObserving();
  } }, { key: "_capturePerformanceEvent", value: function(e) {
    if (e.name.indexOf(this.instance.get_config("api_host")) === 0) {
      var n = e.name.replace(this.instance.get_config("api_host"), "");
      if (Wd.find(function(h) {
        return n.indexOf(h) === 0;
      }))
        return;
    }
    var r = { url: e.name }, i = this.instance.get_config("session_recording");
    if (i.maskNetworkRequestFn && (r = i.maskNetworkRequestFn(r)), r) {
      var s = e.toJSON();
      s.name = r.url;
      var o = {}, a = Math.floor(Date.now() - performance.now());
      for (var l in o[nt.timeOrigin] = a, o[nt.timestamp] = Math.floor(a + e.startTime), nt)
        s[l] !== void 0 && (o[nt[l]] = s[l]);
      if (this.capturePerformanceEvent(o), Gd(e)) {
        var c, u = yt(e.serverTiming || []);
        try {
          for (u.s(); !(c = u.n()).done; ) {
            var d, f = c.value;
            this.capturePerformanceEvent((N(d = {}, nt.timeOrigin, a), N(d, nt.timestamp, Math.floor(a + e.startTime)), N(d, nt.name, f.name), N(d, nt.duration, f.duration), N(d, nt.entryType, "serverTiming"), d));
          }
        } catch (h) {
          u.e(h);
        } finally {
          u.f();
        }
      }
    }
  } }, { key: "capturePerformanceEvent", value: function(e) {
    var n, r = e[nt.timestamp];
    (n = this.instance.sessionRecording) === null || n === void 0 || n.onRRwebEmit({ type: 6, data: { plugin: "posthog/network@1", payload: e }, timestamp: r });
  } }]), t;
}(), Gd = function(t) {
  return t.entryType === "navigation" || t.entryType === "resource";
}, Jd = function() {
  function t(e) {
    ce(this, t), this.instance = e, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  return ue(t, [{ key: "call", value: function() {
    var e = this, n = wr(JSON.stringify({ token: this.instance.get_config("token"), distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), person_properties: this.instance.get_property(Yt), group_properties: this.instance.get_property(Et) }));
    this.instance._send_request("".concat(this.instance.get_config("api_host"), "/decide/?v=3"), { data: n, verbose: !0 }, { method: "POST" }, function(r) {
      return e.parseDecideResponse(r);
    });
  } }, { key: "parseDecideResponse", value: function(e) {
    var n, r, i, s = this;
    if ((e == null ? void 0 : e.status) !== 0) {
      if (this.instance.decideEndpointWasHit = !0, !document || !document.body)
        return console.log("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
          s.parseDecideResponse(e);
        }, 500);
      if (this.instance.toolbar.afterDecideResponse(e), (n = this.instance.sessionRecording) === null || n === void 0 || n.afterDecideResponse(e), At.afterDecideResponse(e, this.instance), (r = this.instance.webPerformance) === null || r === void 0 || r.afterDecideResponse(e), (i = this.instance.exceptionAutocapture) === null || i === void 0 || i.afterDecideResponse(e), this.instance.featureFlags.receivedFeatureFlags(e), this.instance.compression = {}, e.supportedCompression && !this.instance.get_config("disable_compression")) {
        var o, a = {}, l = yt(e.supportedCompression);
        try {
          for (l.s(); !(o = l.n()).done; )
            a[o.value] = !0;
        } catch (h) {
          l.e(h);
        } finally {
          l.f();
        }
        this.instance.compression = a;
      }
      if (e.siteApps)
        if (this.instance.get_config("opt_in_site_apps")) {
          var c, u = this.instance.get_config("api_host"), d = yt(e.siteApps);
          try {
            var f = function() {
              var h = c.value, g = h.id, p = h.url, _ = [u, u[u.length - 1] === "/" && p[0] === "/" ? p.substring(1) : p].join("");
              window["__$$ph_site_app_".concat(g)] = s.instance, Fi(_, function(v) {
                v && console.error("Error while initializing PostHog app with config id ".concat(g), v);
              });
            };
            for (d.s(); !(c = d.n()).done; )
              f();
          } catch (h) {
            d.e(h);
          } finally {
            d.f();
          }
        } else
          e.siteApps.length > 0 && console.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    } else
      console.error("Failed to fetch feature flags from PostHog.");
  } }]), t;
}(), Kd = ["https://app.posthog.com", "https://eu.posthog.com"], Qd = ["source"], Xd = function() {
  function t(e) {
    ce(this, t), this.instance = e;
  }
  return ue(t, [{ key: "afterDecideResponse", value: function(e) {
    var n = e.toolbarParams || e.editorParams || (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {});
    e.isAuthenticated && n.toolbarVersion && n.toolbarVersion.indexOf("toolbar") === 0 && this.loadToolbar(M({}, n));
  } }, { key: "maybeLoadToolbar", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.location, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window.history;
    try {
      if (!n) {
        try {
          window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test");
        } catch {
          return !1;
        }
        n = window.localStorage;
      }
      var i, s = ms(e.hash, "__posthog") || ms(e.hash, "state"), o = s ? JSON.parse(decodeURIComponent(s)) : null;
      return o && o.action === "ph_authorize" ? ((i = o).source = "url", i && Object.keys(i).length > 0 && (o.desiredHash ? e.hash = o.desiredHash : r ? r.replaceState("", document.title, e.pathname + e.search) : e.hash = "")) : ((i = JSON.parse(n.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", delete i.userIntent), !(!i.token || this.instance.get_config("token") !== i.token) && (this.loadToolbar(i), !0);
    } catch {
      return !1;
    }
  } }, { key: "loadToolbar", value: function(e) {
    var n = this;
    if (window._postHogToolbarLoaded)
      return !1;
    window._postHogToolbarLoaded = !0;
    var r = this.instance.get_config("api_host"), i = 3e4 * Math.floor(Date.now() / 3e4), s = "".concat(r).concat(r.endsWith("/") ? "" : "/", "static/toolbar.js?_ts=").concat(i), o = !Kd.includes(this.instance.get_config("api_host")) && this.instance.get_config("advanced_disable_toolbar_metrics"), a = M(M({ token: this.instance.get_config("token") }, e), {}, { apiURL: r }, o ? { instrument: !1 } : {});
    a.source;
    var l = cd(a, Qd);
    return window.localStorage.setItem("_postHogToolbarParams", JSON.stringify(l)), Fi(s, function(c) {
      c ? te.error("Failed to load toolbar", c) : (window.ph_load_toolbar || window.ph_load_editor)(a, n.instance);
    }), gn(window, "turbolinks:load", function() {
      window._postHogToolbarLoaded = !1, n.loadToolbar(a);
    }), !0;
  } }, { key: "_loadEditor", value: function(e) {
    return this.loadToolbar(e);
  } }, { key: "maybeLoadEditor", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window.location, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : window.history;
    return this.maybeLoadToolbar(e, n, r);
  } }]), t;
}(), il = function() {
  function t() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3e3;
    ce(this, t), this.isPolling = !0, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = e;
  }
  return ue(t, [{ key: "setPollInterval", value: function(e) {
    this._pollInterval = e, this.isPolling && this.poll();
  } }, { key: "poll", value: function() {
  } }, { key: "unload", value: function() {
  } }, { key: "getTime", value: function() {
    return (/* @__PURE__ */ new Date()).getTime();
  } }]), t;
}(), Yd = function(t) {
  Ua(n, il);
  var e = Ba(n);
  function n(r, i) {
    var s, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3e3;
    return ce(this, n), (s = e.call(this, o)).handlePollRequest = i, s.captureMetrics = r, s;
  }
  return ue(n, [{ key: "enqueue", value: function(r, i, s) {
    this.captureMetrics.incr("batch-enqueue"), this._event_queue.push({ url: r, data: i, options: s }), this.isPolling || (this.isPolling = !0, this.poll());
  } }, { key: "poll", value: function() {
    var r = this;
    clearTimeout(this._poller), this._poller = setTimeout(function() {
      if (r._event_queue.length > 0) {
        var i = r.formatQueue(), s = function(a) {
          var l = i[a], c = l.url, u = l.data, d = l.options;
          W(u, function(f, h) {
            u[h].offset = Math.abs(u[h].timestamp - r.getTime()), delete u[h].timestamp;
          }), r.handlePollRequest(c, u, d), r.captureMetrics.incr("batch-requests"), r.captureMetrics.incr("batch-requests-".concat(c.slice(c.length - 2))), r.captureMetrics.incr("batch-handle", u.length), r.captureMetrics.incr("batch-handle-".concat(c.slice(c.length - 2)), u.length);
        };
        for (var o in i)
          s(o);
        r._event_queue.length = 0, r._empty_queue_count = 0;
      } else
        r._empty_queue_count++;
      r._empty_queue_count > 4 && (r.isPolling = !1, r._empty_queue_count = 0), r.isPolling && r.poll();
    }, this._pollInterval);
  } }, { key: "updateUnloadMetrics", value: function() {
    var r = this.formatQueue();
    for (var i in r) {
      var s = r[i], o = s.url, a = s.data;
      this.captureMetrics.incr("batch-unload-requests"), this.captureMetrics.incr("batch-unload-requests-".concat(o.slice(o.length - 2))), this.captureMetrics.incr("batch-unload", a.length), this.captureMetrics.incr("batch-unload-".concat(o.slice(o.length - 2)), a.length);
    }
  } }, { key: "unload", value: function() {
    var r = this;
    clearTimeout(this._poller);
    var i = this._event_queue.length > 0 ? this.formatQueue() : {};
    this._event_queue.length = 0;
    var s = Object.values(i);
    [].concat(ii(s.filter(function(o) {
      return o.url.indexOf("/e") === 0;
    })), ii(s.filter(function(o) {
      return o.url.indexOf("/e") !== 0;
    }))).map(function(o) {
      var a = o.url, l = o.data, c = o.options;
      r.handlePollRequest(a, l, M(M({}, c), {}, { transport: "sendBeacon" }));
    });
  } }, { key: "formatQueue", value: function() {
    var r = {};
    return W(this._event_queue, function(i) {
      var s = i.url, o = i.data, a = i.options, l = (a ? a._batchKey : null) || s;
      r[l] === void 0 && (r[l] = { data: [], url: s, options: a }), a && r[l].options && r[l].options._metrics && !r[l].options._metrics.rrweb_full_snapshot && (r[l].options._metrics.rrweb_full_snapshot = a._metrics.rrweb_full_snapshot), r[l].data.push(o);
    }), r;
  } }]), n;
}(), Zd = function() {
  function t(e) {
    ce(this, t), this.enabled = e, this.metrics = {};
  }
  return ue(t, [{ key: "incr", value: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    this.enabled && (e = "phjs-".concat(e), this.metrics[e] = (this.metrics[e] || 0) + n);
  } }, { key: "decr", value: function(e) {
    this.enabled && (e = "phjs-".concat(e), this.metrics[e] = (this.metrics[e] || 0) - 1);
  } }]), t;
}(), He = Uint8Array, $e = Uint16Array, on = Uint32Array, ji = new He([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), Mi = new He([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), Ps = new He([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), sl = function(t, e) {
  for (var n = new $e(31), r = 0; r < 31; ++r)
    n[r] = e += 1 << t[r - 1];
  var i = new on(n[30]);
  for (r = 1; r < 30; ++r)
    for (var s = n[r]; s < n[r + 1]; ++s)
      i[s] = s - n[r] << 5 | r;
  return [n, i];
}, ol = sl(ji, 2), ef = ol[0], pi = ol[1];
ef[28] = 258, pi[258] = 28;
for (var Os = sl(Mi, 0)[1], gi = new $e(32768), Z = 0; Z < 32768; ++Z) {
  var Mt = (43690 & Z) >>> 1 | (21845 & Z) << 1;
  Mt = (61680 & (Mt = (52428 & Mt) >>> 2 | (13107 & Mt) << 2)) >>> 4 | (3855 & Mt) << 4, gi[Z] = ((65280 & Mt) >>> 8 | (255 & Mt) << 8) >>> 1;
}
var vn = function(t, e, n) {
  for (var r = t.length, i = 0, s = new $e(e); i < r; ++i)
    ++s[t[i] - 1];
  var o, a = new $e(e);
  for (i = 0; i < e; ++i)
    a[i] = a[i - 1] + s[i - 1] << 1;
  if (n) {
    o = new $e(1 << e);
    var l = 15 - e;
    for (i = 0; i < r; ++i)
      if (t[i])
        for (var c = i << 4 | t[i], u = e - t[i], d = a[t[i] - 1]++ << u, f = d | (1 << u) - 1; d <= f; ++d)
          o[gi[d] >>> l] = c;
  } else
    for (o = new $e(r), i = 0; i < r; ++i)
      o[i] = gi[a[t[i] - 1]++] >>> 15 - t[i];
  return o;
}, Wt = new He(288);
for (Z = 0; Z < 144; ++Z)
  Wt[Z] = 8;
for (Z = 144; Z < 256; ++Z)
  Wt[Z] = 9;
for (Z = 256; Z < 280; ++Z)
  Wt[Z] = 7;
for (Z = 280; Z < 288; ++Z)
  Wt[Z] = 8;
var ar = new He(32);
for (Z = 0; Z < 32; ++Z)
  ar[Z] = 5;
var Lt, Fs, Cs, tf = vn(Wt, 9, 0), nf = vn(ar, 5, 0), al = function(t) {
  return (t / 8 >> 0) + (7 & t && 1);
}, ll = function(t, e, n) {
  (e == null || e < 0) && (e = 0), (n == null || n > t.length) && (n = t.length);
  var r = new (t instanceof $e ? $e : t instanceof on ? on : He)(n - e);
  return r.set(t.subarray(e, n)), r;
}, ft = function(t, e, n) {
  n <<= 7 & e;
  var r = e / 8 >> 0;
  t[r] |= n, t[r + 1] |= n >>> 8;
}, cn = function(t, e, n) {
  n <<= 7 & e;
  var r = e / 8 >> 0;
  t[r] |= n, t[r + 1] |= n >>> 8, t[r + 2] |= n >>> 16;
}, zr = function(t, e) {
  for (var n = [], r = 0; r < t.length; ++r)
    t[r] && n.push({ s: r, f: t[r] });
  var i = n.length, s = n.slice();
  if (!i)
    return [new He(0), 0];
  if (i == 1) {
    var o = new He(n[0].s + 1);
    return o[n[0].s] = 1, [o, 1];
  }
  n.sort(function(k, I) {
    return k.f - I.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], l = n[1], c = 0, u = 1, d = 2;
  for (n[0] = { s: -1, f: a.f + l.f, l: a, r: l }; u != i - 1; )
    a = n[n[c].f < n[d].f ? c++ : d++], l = n[c != u && n[c].f < n[d].f ? c++ : d++], n[u++] = { s: -1, f: a.f + l.f, l: a, r: l };
  var f = s[0].s;
  for (r = 1; r < i; ++r)
    s[r].s > f && (f = s[r].s);
  var h = new $e(f + 1), g = rf(n[u - 1], h, 0);
  if (g > e) {
    r = 0;
    var p = 0, _ = g - e, v = 1 << _;
    for (s.sort(function(k, I) {
      return h[I.s] - h[k.s] || k.f - I.f;
    }); r < i; ++r) {
      var m = s[r].s;
      if (!(h[m] > e))
        break;
      p += v - (1 << g - h[m]), h[m] = e;
    }
    for (p >>>= _; p > 0; ) {
      var F = s[r].s;
      h[F] < e ? p -= 1 << e - h[F]++ - 1 : ++r;
    }
    for (; r >= 0 && p; --r) {
      var y = s[r].s;
      h[y] == e && (--h[y], ++p);
    }
    g = e;
  }
  return [new He(h), g];
}, rf = function t(e, n, r) {
  return e.s == -1 ? Math.max(t(e.l, n, r + 1), t(e.r, n, r + 1)) : n[e.s] = r;
}, $s = function(t) {
  for (var e = t.length; e && !t[--e]; )
    ;
  for (var n = new $e(++e), r = 0, i = t[0], s = 1, o = function(l) {
    n[r++] = l;
  }, a = 1; a <= e; ++a)
    if (t[a] == i && a != e)
      ++s;
    else {
      if (!i && s > 2) {
        for (; s > 138; s -= 138)
          o(32754);
        s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
      } else if (s > 3) {
        for (o(i), --s; s > 6; s -= 6)
          o(8304);
        s > 2 && (o(s - 3 << 5 | 8208), s = 0);
      }
      for (; s--; )
        o(i);
      s = 1, i = t[a];
    }
  return [n.subarray(0, r), e];
}, un = function(t, e) {
  for (var n = 0, r = 0; r < e.length; ++r)
    n += t[r] * e[r];
  return n;
}, qn = function(t, e, n) {
  var r = n.length, i = al(e + 2);
  t[i] = 255 & r, t[i + 1] = r >>> 8, t[i + 2] = 255 ^ t[i], t[i + 3] = 255 ^ t[i + 1];
  for (var s = 0; s < r; ++s)
    t[i + s + 4] = n[s];
  return 8 * (i + 4 + r);
}, js = function(t, e, n, r, i, s, o, a, l, c, u) {
  ft(e, u++, n), ++i[256];
  for (var d = zr(i, 15), f = d[0], h = d[1], g = zr(s, 15), p = g[0], _ = g[1], v = $s(f), m = v[0], F = v[1], y = $s(p), k = y[0], I = y[1], $ = new $e(19), O = 0; O < m.length; ++O)
    $[31 & m[O]]++;
  for (O = 0; O < k.length; ++O)
    $[31 & k[O]]++;
  for (var j = zr($, 7), ie = j[0], Me = j[1], Y = 19; Y > 4 && !ie[Ps[Y - 1]]; --Y)
    ;
  var De, Ne, me, wt, Ze = c + 5 << 3, et = un(i, Wt) + un(s, ar) + o, Je = un(i, f) + un(s, p) + o + 14 + 3 * Y + un($, ie) + (2 * $[16] + 3 * $[17] + 7 * $[18]);
  if (Ze <= et && Ze <= Je)
    return qn(e, u, t.subarray(l, l + c));
  if (ft(e, u, 1 + (Je < et)), u += 2, Je < et) {
    De = vn(f, h, 0), Ne = f, me = vn(p, _, 0), wt = p;
    var Qe = vn(ie, Me, 0);
    for (ft(e, u, F - 257), ft(e, u + 5, I - 1), ft(e, u + 10, Y - 4), u += 14, O = 0; O < Y; ++O)
      ft(e, u + 3 * O, ie[Ps[O]]);
    u += 3 * Y;
    for (var dt = [m, k], ye = 0; ye < 2; ++ye) {
      var Pe = dt[ye];
      for (O = 0; O < Pe.length; ++O) {
        var we = 31 & Pe[O];
        ft(e, u, Qe[we]), u += ie[we], we > 15 && (ft(e, u, Pe[O] >>> 5 & 127), u += Pe[O] >>> 12);
      }
    }
  } else
    De = tf, Ne = Wt, me = nf, wt = ar;
  for (O = 0; O < a; ++O)
    if (r[O] > 255) {
      we = r[O] >>> 18 & 31, cn(e, u, De[we + 257]), u += Ne[we + 257], we > 7 && (ft(e, u, r[O] >>> 23 & 31), u += ji[we]);
      var kt = 31 & r[O];
      cn(e, u, me[kt]), u += wt[kt], kt > 3 && (cn(e, u, r[O] >>> 5 & 8191), u += Mi[kt]);
    } else
      cn(e, u, De[r[O]]), u += Ne[r[O]];
  return cn(e, u, De[256]), u + Ne[256];
}, sf = new on([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), of = new He(0), af = function() {
  for (var t = new on(256), e = 0; e < 256; ++e) {
    for (var n = e, r = 9; --r; )
      n = (1 & n && 3988292384) ^ n >>> 1;
    t[e] = n;
  }
  return t;
}(), lf = function() {
  var t = 4294967295;
  return { p: function(e) {
    for (var n = t, r = 0; r < e.length; ++r)
      n = af[255 & n ^ e[r]] ^ n >>> 8;
    t = n;
  }, d: function() {
    return 4294967295 ^ t;
  } };
}, cf = function(t, e, n, r, i) {
  return function(s, o, a, l, c, u) {
    var d = s.length, f = new He(l + d + 5 * (1 + Math.floor(d / 7e3)) + c), h = f.subarray(l, f.length - c), g = 0;
    if (!o || d < 8)
      for (var p = 0; p <= d; p += 65535) {
        var _ = p + 65535;
        _ < d ? g = qn(h, g, s.subarray(p, _)) : (h[p] = u, g = qn(h, g, s.subarray(p, d)));
      }
    else {
      for (var v = sf[o - 1], m = v >>> 13, F = 8191 & v, y = (1 << a) - 1, k = new $e(32768), I = new $e(y + 1), $ = Math.ceil(a / 3), O = 2 * $, j = function(Ar) {
        return (s[Ar] ^ s[Ar + 1] << $ ^ s[Ar + 2] << O) & y;
      }, ie = new on(25e3), Me = new $e(288), Y = new $e(32), De = 0, Ne = 0, me = (p = 0, 0), wt = 0, Ze = 0; p < d; ++p) {
        var et = j(p), Je = 32767 & p, Qe = I[et];
        if (k[Je] = Qe, I[et] = Je, wt <= p) {
          var dt = d - p;
          if ((De > 7e3 || me > 24576) && dt > 423) {
            g = js(s, h, 0, ie, Me, Y, Ne, me, Ze, p - Ze, g), me = De = Ne = 0, Ze = p;
            for (var ye = 0; ye < 286; ++ye)
              Me[ye] = 0;
            for (ye = 0; ye < 30; ++ye)
              Y[ye] = 0;
          }
          var Pe = 2, we = 0, kt = F, Ue = Je - Qe & 32767;
          if (dt > 2 && et == j(p - Ue))
            for (var kr = Math.min(m, dt) - 1, Sr = Math.min(32767, p), Er = Math.min(258, dt); Ue <= Sr && --kt && Je != Qe; ) {
              if (s[p + Pe] == s[p + Pe - Ue]) {
                for (var tt = 0; tt < Er && s[p + tt] == s[p + tt - Ue]; ++tt)
                  ;
                if (tt > Pe) {
                  if (Pe = tt, we = Ue, tt > kr)
                    break;
                  var E = Math.min(Ue, tt - 2), Be = 0;
                  for (ye = 0; ye < E; ++ye) {
                    var $t = p - Ue + ye + 32768 & 32767, qi = $t - k[$t] + 32768 & 32767;
                    qi > Be && (Be = qi, Qe = $t);
                  }
                }
              }
              Ue += (Je = Qe) - (Qe = k[Je]) + 32768 & 32767;
            }
          if (we) {
            ie[me++] = 268435456 | pi[Pe] << 18 | Os[we];
            var Hi = 31 & pi[Pe], Wi = 31 & Os[we];
            Ne += ji[Hi] + Mi[Wi], ++Me[257 + Hi], ++Y[Wi], wt = p + Pe, ++De;
          } else
            ie[me++] = s[p], ++Me[s[p]];
        }
      }
      g = js(s, h, u, ie, Me, Y, Ne, me, Ze, p - Ze, g), u || (g = qn(h, g, of));
    }
    return ll(f, 0, l + al(g) + c);
  }(t, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + e.mem, n, r, !i);
}, vi = function(t, e, n) {
  for (; n; ++e)
    t[e] = n, n >>>= 8;
}, uf = function(t, e) {
  var n = e.filename;
  if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = e.level < 2 ? 4 : e.level == 9 ? 2 : 0, t[9] = 3, e.mtime != 0 && vi(t, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)), n) {
    t[3] = 8;
    for (var r = 0; r <= n.length; ++r)
      t[r + 10] = n.charCodeAt(r);
  }
}, df = function(t) {
  return 10 + (t.filename && t.filename.length + 1 || 0);
};
function ff(t, e) {
  e === void 0 && (e = {});
  var n = lf(), r = t.length;
  n.p(t);
  var i = cf(t, e, df(e), 8), s = i.length;
  return uf(i, e), vi(i, s - 8, n.d()), vi(i, s - 4, r), i;
}
function hf(t, e) {
  var n = t.length;
  if (!e && typeof TextEncoder < "u")
    return new TextEncoder().encode(t);
  for (var r = new He(t.length + (t.length >>> 1)), i = 0, s = function(c) {
    r[i++] = c;
  }, o = 0; o < n; ++o) {
    if (i + 5 > r.length) {
      var a = new He(i + 8 + (n - o << 1));
      a.set(r), r = a;
    }
    var l = t.charCodeAt(o);
    l < 128 || e ? s(l) : l < 2048 ? (s(192 | l >>> 6), s(128 | 63 & l)) : l > 55295 && l < 57344 ? (s(240 | (l = 65536 + (1047552 & l) | 1023 & t.charCodeAt(++o)) >>> 18), s(128 | l >>> 12 & 63), s(128 | l >>> 6 & 63), s(128 | 63 & l)) : (s(224 | l >>> 12), s(128 | l >>> 6 & 63), s(128 | 63 & l));
  }
  return ll(r, 0, i);
}
(function(t) {
  t.GZipJS = "gzip-js", t.Base64 = "base64";
})(Lt || (Lt = {})), function(t) {
  t.Popover = "Popover", t.Button = "Button", t.Email = "Email", t.FullScreen = "Fullscreen";
}(Fs || (Fs = {})), function(t) {
  t.Open = "open", t.MultipleChoiceSingle = "multiple_single", t.MultipleChoiceMulti = "multiple_multi", t.NPS = "nps", t.Rating = "rating", t.Link = "link";
}(Cs || (Cs = {}));
var pf = function(t, e, n) {
  var r = e || {};
  r.ip = n.ip ? 1 : 0, r._ = (/* @__PURE__ */ new Date()).getTime().toString(), r.ver = at.LIB_VERSION;
  var i = t.split("?");
  if (i.length > 1) {
    var s, o = yt(i[1].split("&"));
    try {
      for (o.s(); !(s = o.n()).done; ) {
        var a = s.value.split("=")[0];
        r[a] && delete r[a];
      }
    } catch (c) {
      o.e(c);
    } finally {
      o.f();
    }
  }
  var l = t.indexOf("?") > -1 ? "&" : "?";
  return t + l + function(c) {
    var u, d, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "&", h = [];
    return W(c, function(g, p) {
      u = encodeURIComponent(g.toString()), d = encodeURIComponent(p), h[h.length] = d + "=" + u;
    }), h.join(f);
  }(r);
}, Ni = function t(e, n) {
  if (n.blob && e.buffer)
    return new Blob([e.buffer], { type: "text/plain" });
  if (n.sendBeacon || n.blob) {
    var r = t(e, { method: "POST" });
    return new Blob([r], { type: "application/x-www-form-urlencoded" });
  }
  if (n.method !== "POST")
    return null;
  var i, s;
  return i = Array.isArray(e) || (s = e, Object.prototype.toString.call(s) === "[object Uint8Array]") ? "data=" + encodeURIComponent(e) : "data=" + encodeURIComponent(e.data), "compression" in e && e.compression && (i += "&compression=" + e.compression), i;
}, cl = function(t) {
  var e = t.url, n = t.data, r = t.headers, i = t.options, s = t.captureMetrics, o = t.callback, a = t.retriesPerformedSoFar, l = t.retryQueue, c = t.onXHRError, u = t.timeout, d = u === void 0 ? 1e4 : u, f = new XMLHttpRequest();
  f.open(i.method || "GET", e, !0);
  var h = Ni(n, i);
  s.incr("_send_request"), s.incr("_send_request_inflight"), W(r, function(g, p) {
    f.setRequestHeader(p, g);
  }), i.method !== "POST" || i.blob || f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), f.timeout = d, f.withCredentials = !0, f.onreadystatechange = function() {
    if (f.readyState === 4)
      if (s.incr("xhr-response"), s.incr("xhr-response-".concat(f.status)), s.decr("_send_request_inflight"), f.status === 200) {
        if (o) {
          var g;
          try {
            g = JSON.parse(f.responseText);
          } catch (p) {
            return void te.error(p);
          }
          o(g);
        }
      } else
        typeof c == "function" && c(f), [401, 403, 404, 500].indexOf(f.status) < 0 && l.enqueue({ url: e, data: n, options: i, headers: r, retriesPerformedSoFar: (a || 0) + 1, callback: o }), o && o({ status: 0 });
  }, f.send(h);
}, gf = 18e5, vf = function(t) {
  Ua(n, il);
  var e = Ba(n);
  function n(r, i) {
    var s;
    return ce(this, n), (s = e.call(this)).captureMetrics = r, s.isPolling = !1, s.queue = [], s.areWeOnline = !0, s.onXHRError = i, typeof window < "u" && "onLine" in window.navigator && (s.areWeOnline = window.navigator.onLine, window.addEventListener("online", function() {
      s._handleWeAreNowOnline();
    }), window.addEventListener("offline", function() {
      s.areWeOnline = !1;
    })), s;
  }
  return ue(n, [{ key: "enqueue", value: function(r) {
    var i = r.retriesPerformedSoFar || 0;
    if (!(i >= 10)) {
      var s = function(a) {
        var l = 3e3 * Math.pow(2, a), c = l / 2, u = Math.min(gf, l), d = (Math.random() - 0.5) * (u - c);
        return Math.ceil(u + d);
      }(i), o = new Date(Date.now() + s);
      this.queue.push({ retryAt: o, requestData: r }), console.warn("Enqueued failed request for retry in ".concat(s)), this.isPolling || (this.isPolling = !0, this.poll());
    }
  } }, { key: "poll", value: function() {
    var r = this;
    this._poller && clearTimeout(this._poller), this._poller = setTimeout(function() {
      r.areWeOnline && r.queue.length > 0 && r.flush(), r.poll();
    }, this._pollInterval);
  } }, { key: "flush", value: function() {
    var r = new Date(Date.now()), i = this.queue.filter(function(l) {
      return l.retryAt < r;
    });
    if (i.length > 0) {
      this.queue = this.queue.filter(function(l) {
        return l.retryAt >= r;
      });
      var s, o = yt(i);
      try {
        for (o.s(); !(s = o.n()).done; ) {
          var a = s.value.requestData;
          this._executeXhrRequest(a);
        }
      } catch (l) {
        o.e(l);
      } finally {
        o.f();
      }
    }
  } }, { key: "unload", value: function() {
    this._poller && (clearTimeout(this._poller), this._poller = void 0);
    var r, i = yt(this.queue);
    try {
      for (i.s(); !(r = i.n()).done; ) {
        var s = r.value.requestData, o = s.url, a = s.data, l = s.options;
        try {
          window.navigator.sendBeacon(o, Ni(a, M(M({}, l), {}, { sendBeacon: !0 })));
        } catch (c) {
          at.DEBUG && console.error(c);
        }
      }
    } catch (c) {
      i.e(c);
    } finally {
      i.f();
    }
    this.queue = [];
  } }, { key: "_executeXhrRequest", value: function(r) {
    var i = r.url, s = r.data, o = r.options, a = r.headers, l = r.callback, c = r.retriesPerformedSoFar;
    cl({ url: i, data: s || {}, options: o || {}, headers: a || {}, retriesPerformedSoFar: c || 0, callback: l, captureMetrics: this.captureMetrics, retryQueue: this, onXHRError: this.onXHRError });
  } }, { key: "_handleWeAreNowOnline", value: function() {
    this.areWeOnline = !0, this.flush();
  } }]), n;
}(), Mn = 1800, Ms = 60, _f = 864e5, mf = function() {
  function t(e, n) {
    ce(this, t), this.config = e, this.persistence = n, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null;
    var r = e.persistence_name || e.token, i = e.session_idle_timeout_seconds || Mn;
    if (typeof i != "number" ? (console.warn("[PostHog] session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), i = Mn) : i > Mn ? console.warn("[PostHog] session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : i < Ms && console.warn("[PostHog] session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead."), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(i, Ms), Mn), this._window_id_storage_key = "ph_" + r + "_window_id", this._primary_window_exists_storage_key = "ph_" + r + "_primary_window_exists", this._canUseSessionStorage()) {
      var s = xe.parse(this._window_id_storage_key), o = xe.parse(this._primary_window_exists_storage_key);
      s && !o ? this._windowId = s : xe.remove(this._window_id_storage_key), xe.set(this._primary_window_exists_storage_key, !0);
    }
    this._listenToReloadWindow();
  }
  return ue(t, [{ key: "_canUseSessionStorage", value: function() {
    return this.config.persistence !== "memory" && !this.persistence.disabled && xe.is_supported();
  } }, { key: "_setWindowId", value: function(e) {
    e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && xe.set(this._window_id_storage_key, e));
  } }, { key: "_getWindowId", value: function() {
    return this._windowId ? this._windowId : this._canUseSessionStorage() ? xe.parse(this._window_id_storage_key) : null;
  } }, { key: "_setSessionId", value: function(e, n, r) {
    e === this._sessionId && n === this._sessionActivityTimestamp && r === this._sessionStartTimestamp || (this._sessionStartTimestamp = r, this._sessionActivityTimestamp = n, this._sessionId = e, this.persistence.register(N({}, ui, [n, e, r])));
  } }, { key: "_getSessionId", value: function() {
    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
      return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
    var e = this.persistence.props[ui];
    return Array.isArray(e) && e.length === 2 && e.push(e[0]), e || [0, null, 0];
  } }, { key: "resetSessionId", value: function() {
    this._setSessionId(null, null, null);
  } }, { key: "_listenToReloadWindow", value: function() {
    var e = this;
    window.addEventListener("beforeunload", function() {
      e._canUseSessionStorage() && xe.remove(e._primary_window_exists_storage_key);
    });
  } }, { key: "checkAndGetSessionAndWindowId", value: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null) || (/* @__PURE__ */ new Date()).getTime(), r = Pt(this._getSessionId(), 3), i = r[0], s = r[1], o = r[2], a = this._getWindowId(), l = o && o > 0 && Math.abs(n - o) > _f;
    !s || !e && Math.abs(n - i) > this._sessionTimeoutMs || l ? (s = vt(), a = vt(), o = n) : a || (a = vt());
    var c = i === 0 || !e || l ? n : i, u = o === 0 ? (/* @__PURE__ */ new Date()).getTime() : o;
    return this._setWindowId(a), this._setSessionId(s, c, u), { sessionId: s, windowId: a, sessionStartTimestamp: u };
  } }]), t;
}(), yf = ue(function t(e, n, r, i) {
  ce(this, t), this.name = "posthog-js", this.setupOnce = function(s) {
    s(function(o) {
      var a, l, c, u, d;
      if (o.level !== "error" || !e.__loaded)
        return o;
      o.tags || (o.tags = {});
      var f = e.config.ui_host || e.config.api_host;
      o.tags["PostHog Person URL"] = f + "/person/" + e.get_distinct_id(), e.sessionRecordingStarted() && (o.tags["PostHog Recording URL"] = e.get_session_replay_url({ withTimestamp: !0 }));
      var h = ((a = o.exception) === null || a === void 0 ? void 0 : a.values) || [], g = { $exception_message: (l = h[0]) === null || l === void 0 ? void 0 : l.value, $exception_type: (c = h[0]) === null || c === void 0 ? void 0 : c.type, $exception_personURL: f + "/person/" + e.get_distinct_id(), $sentry_event_id: o.event_id, $sentry_exception: o.exception, $sentry_exception_message: (u = h[0]) === null || u === void 0 ? void 0 : u.value, $sentry_exception_type: (d = h[0]) === null || d === void 0 ? void 0 : d.type, $sentry_tags: o.tags };
      return n && r && (g.$sentry_url = (i || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + o.event_id), e.capture("$exception", g), o;
    });
  };
}), bf = function(t) {
  Promise && Promise.resolve || console.warn("This browser does not have Promise support, and can not use the segment integration");
  var e = function(n, r) {
    n.event.userId || n.event.anonymousId === t.get_distinct_id() || t.reset(), n.event.userId && n.event.userId !== t.get_distinct_id() && (t.register({ distinct_id: n.event.userId }), t.reloadFeatureFlags());
    var i = t._calculate_event_properties(r, n.event.properties);
    return n.event.properties = Object.assign({}, i, n.event.properties), n;
  };
  return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: function() {
    return !0;
  }, load: function() {
    return Promise.resolve();
  }, track: function(n) {
    return e(n, n.event.event);
  }, page: function(n) {
    return e(n, "$pageview");
  }, identify: function(n) {
    return e(n, "$identify");
  }, screen: function(n) {
    return e(n, "$screen");
  } };
}, wf = function() {
  function t() {
    ce(this, t), N(this, "_seenFirstPageView", !1);
  }
  return ue(t, [{ key: "onPageview", value: function() {
    this._seenFirstPageView && (this._pageViewId = vt()), this._seenFirstPageView = !0;
  } }, { key: "getPageViewId", value: function() {
    return this._pageViewId || (this._pageViewId = vt()), this._pageViewId;
  } }]), t;
}();
function Ns(t) {
  return typeof Event < "u" && ul(t, Event);
}
function ul(t, e) {
  try {
    return t instanceof e;
  } catch {
    return !1;
  }
}
function Ls(t) {
  return t === null || xt(t) !== "object" && typeof t != "function";
}
function Hn(t, e) {
  return Object.prototype.toString.call(t) === "[object ".concat(e, "]");
}
function Dr(t) {
  return Hn(t, "DOMError");
}
var zs = /\(error: (.*)\)/, Ds = 50, Wn = "?";
function Ur(t, e, n, r) {
  var i = { filename: t, function: e, in_app: !0 };
  return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
var kf = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, Sf = /\((\S*)(?::(\d+))(?::(\d+))\)/, Ef = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, Af = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, If = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, xf = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r = e.sort(function(i, s) {
    return i[0] - s[0];
  }).map(function(i) {
    return i[1];
  });
  return function(i) {
    for (var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = [], a = i.split(`
`), l = s; l < a.length; l++) {
      var c = a[l];
      if (!(c.length > 1024)) {
        var u = zs.test(c) ? c.replace(zs, "$1") : c;
        if (!u.match(/\S*Error: /)) {
          var d, f = yt(r);
          try {
            for (f.s(); !(d = f.n()).done; ) {
              var h = (0, d.value)(u);
              if (h) {
                o.push(h);
                break;
              }
            }
          } catch (g) {
            f.e(g);
          } finally {
            f.f();
          }
          if (o.length >= Ds)
            break;
        }
      }
    }
    return function(g) {
      if (!g.length)
        return [];
      var p = g.slice(0, Ds);
      return p.reverse(), p.map(function(_) {
        return M(M({}, _), {}, { filename: _.filename || p[p.length - 1].filename, function: _.function || "?" });
      });
    }(o);
  };
}.apply(void 0, [[30, function(t) {
  var e = kf.exec(t);
  if (e) {
    if (e[2] && e[2].indexOf("eval") === 0) {
      var n = Sf.exec(e[2]);
      n && (e[2] = n[1], e[3] = n[2], e[4] = n[3]);
    }
    var r = Pt(Us(e[1] || Wn, e[2]), 2), i = r[0];
    return Ur(r[1], i, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0);
  }
}], [50, function(t) {
  var e = Ef.exec(t);
  if (e) {
    if (e[3] && e[3].indexOf(" > eval") > -1) {
      var n = Af.exec(e[3]);
      n && (e[1] = e[1] || "eval", e[3] = n[1], e[4] = n[2], e[5] = "");
    }
    var r = e[3], i = e[1] || Wn, s = Pt(Us(i, r), 2);
    return i = s[0], Ur(r = s[1], i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0);
  }
}], [40, function(t) {
  var e = If.exec(t);
  return e ? Ur(e[2], e[1] || Wn, +e[3], e[4] ? +e[4] : void 0) : void 0;
}]]), Us = function(t, e) {
  var n = t.indexOf("safari-extension") !== -1, r = t.indexOf("safari-web-extension") !== -1;
  return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : Wn, n ? "safari-extension:".concat(e) : "safari-web-extension:".concat(e)] : [t, e];
}, Tf = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i, Rf = /Minified React error #\d+;/i;
function Pf(t) {
  var e = t.stacktrace || t.stack || "", n = function(r) {
    if (r) {
      if (typeof r.framesToPop == "number")
        return r.framesToPop;
      if (Rf.test(r.message))
        return 1;
    }
    return 0;
  }(t);
  try {
    return xf(e, n);
  } catch {
  }
  return [];
}
function Br(t) {
  var e = Pf(t);
  return { $exception_type: t.name, $exception_message: t.message, $exception_stack_trace_raw: JSON.stringify(e) };
}
function Of(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 40, n = Object.keys(t);
  if (n.sort(), !n.length)
    return "[object has no keys]";
  for (var r = n.length; r > 0; r--) {
    var i = n.slice(0, r).join(", ");
    if (!(i.length > e))
      return r === n.length || i.length <= e ? i : "".concat(i.slice(0, e), "...");
  }
  return "";
}
function Bs(t) {
  var e = Pt(t, 5), n = e[0], r = e[1], i = e[2], s = e[3], o = e[4], a = {};
  if (o === void 0 && typeof n == "string") {
    var l = "Error", c = n, u = n.match(Tf);
    u && (l = u[1], c = u[2]), a = { $exception_type: l, $exception_message: c };
  }
  var d = o || n;
  if (Dr(d) || function(p) {
    return Hn(p, "DOMException");
  }(d)) {
    var f = d;
    if (function(p) {
      return "stack" in p;
    }(d))
      a = Br(d);
    else {
      var h = f.name || (Dr(f) ? "DOMError" : "DOMException"), g = f.message ? "".concat(h, ": ").concat(f.message) : h;
      a = function(p) {
        return { $exception_type: "Error", $exception_message: p };
      }(g), a.$exception_type = Dr(f) ? "DOMError" : "DOMException", a.$exception_message = a.$exception_message || g;
    }
    "code" in f && (a.$exception_DOMException_code = "".concat(f.code));
  } else
    (function(p) {
      return Hn(p, "ErrorEvent");
    })(d) && d.error ? a = Br(d.error) : function(p) {
      switch (Object.prototype.toString.call(p)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return ul(p, Error);
      }
    }(d) ? a = Br(d) : function(p) {
      return Hn(p, "Object");
    }(d) || Ns(d) ? (a = function(p) {
      return { $exception_type: Ns(p) ? p.constructor.name : "Error", $exception_message: "Non-Error ".concat("exception", " captured with keys: ", Of(p)) };
    }(d), a.$exception_is_synthetic = !0) : (a.$exception_type = a.$exception_type || "Error", a.$exception_message = a.$exception_message || d, a.$exception_is_synthetic = !0);
  return M(M(M(M({}, a), {}, { $exception_type: a.$exception_type || "UnknownErrorType", $exception_message: a.$exception_message || "" }, r ? { $exception_source: r } : {}), i ? { $exception_lineno: i } : {}), s ? { $exception_colno: s } : {});
}
var kn, Li, Ae, Ff = function() {
  function t(e) {
    ce(this, t), N(this, "originalOnErrorHandler", void 0), N(this, "originalOnUnhandledRejectionHandler", void 0), N(this, "errorsToIgnore", []), this.instance = e;
  }
  return ue(t, [{ key: "debugLog", value: function() {
    if (this.instance.get_config("debug")) {
      for (var e, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      (e = console).log.apply(e, ["PostHog.js [PostHog.ExceptionObserver]"].concat(r));
    }
  } }, { key: "startCapturing", value: function() {
    var e;
    if (this.isEnabled() && ((e = C.onerror) === null || e === void 0 || !e.__POSTHOG_INSTRUMENTED__))
      try {
        this.originalOnErrorHandler = C.onerror, C.onerror = function() {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          return this.captureException(r), !!this.originalOnErrorHandler && this.originalOnErrorHandler.apply(this, r);
        }.bind(this), C.onerror.__POSTHOG_INSTRUMENTED__ = !0, this.originalOnUnhandledRejectionHandler = C.onunhandledrejection, C.onunhandledrejection = function() {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          var s = function(o) {
            var a = Pt(o, 1)[0], l = a;
            try {
              "reason" in a ? l = a.reason : "detail" in a && "reason" in a.detail && (l = a.detail.reason);
            } catch {
            }
            var c = {};
            return (c = Ls(l) ? { $exception_message: "Non-Error promise rejection captured with value: ".concat(String(l)) } : Bs([l])).$exception_handled = !1, M(M({}, c), {}, { $exception_type: c.$exception_type = "UnhandledRejection", $exception_message: c.$exception_message = c.$exception_message || a.reason || String(l) });
          }(r);
          return this.sendExceptionEvent(s), !this.originalOnUnhandledRejectionHandler || this.originalOnUnhandledRejectionHandler.apply(C, r);
        }.bind(this), C.onunhandledrejection.__POSTHOG_INSTRUMENTED__ = !0;
      } catch (n) {
        console.error("PostHog failed to start exception autocapture", n), this.stopCapturing();
      }
  } }, { key: "stopCapturing", value: function() {
    var e, n;
    this.originalOnErrorHandler !== void 0 && (C.onerror = this.originalOnErrorHandler, this.originalOnErrorHandler = null), (e = C.onerror) === null || e === void 0 || delete e.__POSTHOG_INSTRUMENTED__, this.originalOnUnhandledRejectionHandler !== void 0 && (C.onunhandledrejection = this.originalOnUnhandledRejectionHandler, this.originalOnUnhandledRejectionHandler = null), (n = C.onunhandledrejection) === null || n === void 0 || delete n.__POSTHOG_INSTRUMENTED__;
  } }, { key: "isCapturing", value: function() {
    var e;
    return !((e = C.onerror) === null || e === void 0 || !e.__POSTHOG_INSTRUMENTED__);
  } }, { key: "isEnabled", value: function() {
    var e;
    return (e = this.remoteEnabled) !== null && e !== void 0 && e;
  } }, { key: "afterDecideResponse", value: function(e) {
    var n = e.autocaptureExceptions;
    if (this.remoteEnabled = !!n || !1, !Ls(n) && "errors_to_ignore" in n && Array.isArray(n.errors_to_ignore)) {
      var r = n.errors_to_ignore;
      this.errorsToIgnore = r.map(function(i) {
        return new RegExp(i);
      });
    }
    this.isEnabled() ? (this.startCapturing(), this.debugLog("Remote config for exception autocapture is enabled, starting", n)) : this.debugLog("Remote config for exception autocapture is disabled, not starting", n);
  } }, { key: "captureException", value: function(e, n) {
    var r = Bs(e);
    if (this.errorsToIgnore.some(function(o) {
      return o.test(r.$exception_message || "");
    }))
      this.debugLog("Ignoring exception based on remote config", r);
    else {
      var i = M(M({}, n), r), s = this.instance.get_config("ui_host") || this.instance.get_config("api_host");
      r.$exception_personURL = s + "/person/" + this.instance.get_distinct_id(), this.sendExceptionEvent(i);
    }
  } }, { key: "sendExceptionEvent", value: function(e) {
    this.instance.capture("$exception", e, { transport: "XHR", method: "POST", endpoint: "/e/", _noTruncate: !0, _batchKey: "exceptionEvent" });
  } }]), t;
}(), Cf = function() {
  function t(e) {
    ce(this, t), this.instance = e;
  }
  return ue(t, [{ key: "getSurveys", value: function(e) {
    var n = this, r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.instance.get_property(fi);
    if (i && !r)
      return e(i);
    this.instance._send_request("".concat(this.instance.get_config("api_host"), "/api/surveys/?token=").concat(this.instance.get_config("token")), {}, { method: "GET" }, function(s) {
      var o = s.surveys;
      return n.instance.persistence.register(N({}, fi, o)), e(o);
    });
  } }, { key: "getActiveMatchingSurveys", value: function(e) {
    var n = this, r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    this.getSurveys(function(i) {
      var s = i.filter(function(o) {
        return !(!o.start_date || o.end_date);
      }).filter(function(o) {
        var a, l;
        if (!o.conditions)
          return !0;
        var c = (a = o.conditions) === null || a === void 0 || !a.url || window.location.href.indexOf(o.conditions.url) > -1, u = (l = o.conditions) === null || l === void 0 || !l.selector || document.querySelector(o.conditions.selector);
        return c && u;
      }).filter(function(o) {
        if (!o.linked_flag_key && !o.targeting_flag_key)
          return !0;
        var a = !o.linked_flag_key || n.instance.featureFlags.isFeatureEnabled(o.linked_flag_key), l = !o.targeting_flag_key || n.instance.featureFlags.isFeatureEnabled(o.targeting_flag_key);
        return a && l;
      });
      return e(s);
    }, r);
  } }]), t;
}();
(function(t) {
  t[t.INIT_MODULE = 0] = "INIT_MODULE", t[t.INIT_SNIPPET = 1] = "INIT_SNIPPET";
})(kn || (kn = {}));
var _i = function() {
}, Nn = {}, Le = "posthog", Vn = C.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(), dl = !Vn && Ke.indexOf("MSIE") === -1 && Ke.indexOf("Mozilla") === -1, qs = function() {
  var t, e, n;
  return { api_host: "https://app.posthog.com", api_method: "POST", api_transport: "XHR", ui_host: null, token: "", autocapture: !0, rageclick: !0, cross_subdomain_cookie: (pe == null || (t = pe.location) === null || t === void 0 || (e = t.hostname) === null || e === void 0 ? void 0 : e.indexOf("herokuapp.com")) === -1, persistence: "cookie", persistence_name: "", cookie_name: "", loaded: _i, store_google: !0, custom_campaign_params: [], save_referrer: !0, test: !1, verbose: !1, capture_pageview: !0, capture_pageleave: !0, debug: !1, cookie_expiration: 365, upgrade: !1, disable_session_recording: !1, disable_persistence: !1, disable_cookie: !1, enable_recording_console_log: void 0, secure_cookie: (C == null || (n = C.location) === null || n === void 0 ? void 0 : n.protocol) === "https:", ip: !0, opt_out_capturing_by_default: !1, opt_out_persistence_by_default: !1, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: !1, property_blacklist: [], respect_dnt: !1, sanitize_properties: null, xhr_headers: {}, inapp_protocol: "//", inapp_link_new_window: !1, request_batching: !0, properties_string_max_length: 65535, session_recording: {}, mask_all_element_attributes: !1, mask_all_text: !1, advanced_disable_decide: !1, advanced_disable_toolbar_metrics: !1, on_xhr_error: function(r) {
    var i = "Bad HTTP status: " + r.status + " " + r.statusText;
    console.error(i);
  }, get_device_id: function(r) {
    return r;
  }, _onCapture: _i, _capture_metrics: !1, capture_performance: void 0, name: "posthog", callback_fn: "posthog._jsc", bootstrap: {}, disable_compression: !1, session_idle_timeout_seconds: 1800 };
}, mi = function(t, e, n, r) {
  var i, s = n !== Le && Ae ? n ? Ae[n] : void 0 : Ae, o = { initComplete: !1, syncCode: !1 }, a = function(l) {
    return function(c) {
      o[l] || (o[l] = !0, o.initComplete && o.syncCode && (r == null || r(c)));
    };
  };
  if (s && Li === kn.INIT_MODULE)
    i = s;
  else {
    if (s && !pt(s))
      return void console.error("You have already initialized " + n);
    i = new zi();
  }
  return i._init(t, e, n, a("initComplete")), i.toolbar.maybeLoadToolbar(), i.sessionRecording = new qd(i), i.sessionRecording.startRecordingIfEnabled(), i.webPerformance = new Vd(i), i.webPerformance.startObservingIfEnabled(), i.exceptionAutocapture = new Ff(i), i.__autocapture = i.get_config("autocapture"), At._setIsAutocaptureEnabled(i), At._isAutocaptureEnabled && (i.__autocapture = i.get_config("autocapture"), At.enabledForProject(i.get_config("token"), 100, 100) ? At.isBrowserSupported() ? At.init(i) : (i.__autocapture = !1, te.log("Disabling Automatic Event Collection because this browser is not supported")) : (i.__autocapture = !1, te.log("Not in active bucket: disabling Automatic Event Collection."))), at.DEBUG = at.DEBUG || i.get_config("debug"), s !== void 0 && pt(s) && (i._execute_array.call(i.people, s.people), i._execute_array(s)), a("syncCode")(i), i;
}, zi = function() {
  function t() {
    var e = this;
    ce(this, t), this.config = qs(), this.compression = {}, this.decideEndpointWasHit = !1, this.SentryIntegration = yf, this.segmentIntegration = function() {
      return bf(e);
    }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = !1, this.__loaded_recorder_version = void 0, this.__autocapture = void 0, this._jsc = function() {
    }, this.people = new $d(this), this.featureFlags = new jd(this), this.toolbar = new Xd(this), this.pageViewIdManager = new wf(), this.surveys = new Cf(this), this._captureMetrics = void 0, this._requestQueue = void 0, this._retryQueue = void 0, this.persistence = void 0, this.sessionPersistence = void 0, this.sessionManager = void 0;
  }
  return ue(t, [{ key: "init", value: function(e, n, r) {
    if (Xe(r))
      console.error("You must name your new library: init(token, config, name)");
    else {
      if (r !== Le) {
        var i = mi(e, n, r, function(s) {
          Ae[r] = s, s._loaded();
        });
        return Ae[r] = i, i;
      }
      console.error("You must initialize the main posthog object right after you include the PostHog js snippet");
    }
  } }, { key: "_init", value: function(e) {
    var n, r, i = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0;
    this.__loaded = !0, this.config = {}, this._triggered_notifs = [];
    var l, c = { segmentRegister: !1, syncCode: !1 }, u = function(y) {
      return function() {
        c[y] || (c[y] = !0, c.segmentRegister && c.syncCode && (a == null || a(i)));
      };
    };
    if (this.set_config(Ee({}, qs(), s, { name: o, token: e, callback_fn: (o === Le ? o : Le + "." + o) + "._jsc" })), this._jsc = function() {
    }, (C != null && (n = C.rrweb) !== null && n !== void 0 && n.record || C != null && C.rrwebRecord) && (this.__loaded_recorder_version = C == null || (l = C.rrweb) === null || l === void 0 ? void 0 : l.version), this._captureMetrics = new Zd(this.get_config("_capture_metrics")), this._requestQueue = new Yd(this._captureMetrics, this._handle_queued_event.bind(this)), this._retryQueue = new vf(this._captureMetrics, this.get_config("on_xhr_error")), this.__captureHooks = [], this.__request_queue = [], this.persistence = new As(this.config), this.sessionManager = new mf(this.config, this.persistence), this.sessionPersistence = this.config.persistence === "sessionStorage" ? this.persistence : new As(M(M({}, this.config), {}, { persistence: "sessionStorage" })), this._gdpr_init(), s.segment ? (this.config.get_device_id = function() {
      return s.segment.user().anonymousId();
    }, s.segment.user().id() && (this.register({ distinct_id: s.segment.user().id() }), this.persistence.set_user_state("identified")), s.segment.register(this.segmentIntegration()).then(u("segmentRegister"))) : u("segmentRegister")(), ((r = s.bootstrap) === null || r === void 0 ? void 0 : r.distinctID) !== void 0) {
      var d, f, h = this.get_config("get_device_id")(vt()), g = (d = s.bootstrap) !== null && d !== void 0 && d.isIdentifiedID ? h : s.bootstrap.distinctID;
      this.persistence.set_user_state((f = s.bootstrap) !== null && f !== void 0 && f.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: s.bootstrap.distinctID, $device_id: g });
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var p, _, v = Object.keys(((p = s.bootstrap) === null || p === void 0 ? void 0 : p.featureFlags) || {}).filter(function(y) {
        var k, I;
        return !((k = s.bootstrap) === null || k === void 0 || (I = k.featureFlags) === null || I === void 0 || !I[y]);
      }).reduce(function(y, k) {
        var I, $;
        return y[k] = ((I = s.bootstrap) === null || I === void 0 || ($ = I.featureFlags) === null || $ === void 0 ? void 0 : $[k]) || !1, y;
      }, {}), m = Object.keys(((_ = s.bootstrap) === null || _ === void 0 ? void 0 : _.featureFlagPayloads) || {}).filter(function(y) {
        return v[y];
      }).reduce(function(y, k) {
        var I, $, O, j;
        return (I = s.bootstrap) !== null && I !== void 0 && ($ = I.featureFlagPayloads) !== null && $ !== void 0 && $[k] && (y[k] = (O = s.bootstrap) === null || O === void 0 || (j = O.featureFlagPayloads) === null || j === void 0 ? void 0 : j[k]), y;
      }, {});
      this.featureFlags.receivedFeatureFlags({ featureFlags: v, featureFlagPayloads: m });
    }
    if (!this.get_distinct_id()) {
      var F = this.get_config("get_device_id")(vt());
      this.register_once({ distinct_id: F, $device_id: F }, ""), this.persistence.set_user_state("anonymous");
    }
    C.addEventListener && C.addEventListener("onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), u("syncCode")();
  } }, { key: "_loaded", value: function() {
    this.featureFlags.setReloadingPaused(!0);
    try {
      this.get_config("loaded")(this);
    } catch (e) {
      console.error("`loaded` function failed", e);
    }
    this._start_queue_if_opted_in(), this.get_config("capture_pageview") && this.capture("$pageview", {}, { send_instantly: !0 }), this.get_config("advanced_disable_decide") || new Jd(this).call(), this.featureFlags.resetRequestQueue(), this.featureFlags.setReloadingPaused(!1);
  } }, { key: "_start_queue_if_opted_in", value: function() {
    this.has_opted_out_capturing() || this.get_config("request_batching") && this._requestQueue.poll();
  } }, { key: "_dom_loaded", value: function() {
    var e = this;
    this.has_opted_out_capturing() || mt(this.__request_queue, function(n) {
      e._send_request.apply(e, ii(n));
    }), this.__request_queue = [], this._start_queue_if_opted_in();
  } }, { key: "_prepare_callback", value: function(e, n) {
    if (Xe(e))
      return null;
    if (Vn)
      return function(o) {
        e(o, n);
      };
    var r = this._jsc, i = "" + Math.floor(1e8 * Math.random()), s = this.get_config("callback_fn") + "[" + i + "]";
    return r[i] = function(o) {
      delete r[i], e(o, n);
    }, s;
  } }, { key: "_handle_unload", value: function() {
    this.get_config("request_batching") ? (this.get_config("capture_pageview") && this.get_config("capture_pageleave") && this.capture("$pageleave"), this.get_config("_capture_metrics") && (this._requestQueue.updateUnloadMetrics(), this.capture("$capture_metrics", this._captureMetrics.metrics)), this._requestQueue.unload(), this._retryQueue.unload()) : this.get_config("capture_pageview") && this.get_config("capture_pageleave") && this.capture("$pageleave", null, { transport: "sendBeacon" });
  } }, { key: "_handle_queued_event", value: function(e, n, r) {
    var i = JSON.stringify(n);
    this.__compress_and_send_json_request(e, i, r || Nn, _i);
  } }, { key: "__compress_and_send_json_request", value: function(e, n, r, i) {
    var s = function(c, u, d) {
      return c === Lt.GZipJS ? [ff(hf(u), { mtime: 0 }), M(M({}, d), {}, { blob: !0, urlQueryArgs: { compression: Lt.GZipJS } })] : [{ data: wr(u) }, d];
    }(this.compression[Lt.GZipJS] ? Lt.GZipJS : Lt.Base64, n, r), o = Pt(s, 2), a = o[0], l = o[1];
    this._send_request(e, a, l, i);
  } }, { key: "_send_request", value: function(e, n, r, i) {
    if (dl)
      this.__request_queue.push([e, n, r, i]);
    else {
      var s = { method: this.get_config("api_method"), transport: this.get_config("api_transport"), verbose: this.get_config("verbose") };
      r = Ee(s, r || {}), Vn || (r.method = "GET");
      var o = "sendBeacon" in C.navigator && r.transport === "sendBeacon";
      if (e = pf(e, r.urlQueryArgs || {}, { ip: this.get_config("ip") }), o)
        try {
          C.navigator.sendBeacon(e, Ni(n, M(M({}, r), {}, { sendBeacon: !0 })));
        } catch (u) {
          this.get_config("debug") && console.error(u);
        }
      else if (Vn)
        try {
          cl({ url: e, data: n, headers: this.get_config("xhr_headers"), options: r, captureMetrics: this._captureMetrics, callback: i, retriesPerformedSoFar: 0, retryQueue: this._retryQueue, onXHRError: this.get_config("on_xhr_error") });
        } catch (u) {
          console.error(u);
        }
      else {
        var a, l = pe.createElement("script");
        l.type = "text/javascript", l.async = !0, l.defer = !0, l.src = e;
        var c = pe.getElementsByTagName("script")[0];
        (a = c.parentNode) === null || a === void 0 || a.insertBefore(l, c);
      }
    }
  } }, { key: "_execute_array", value: function(e) {
    var n, r = this, i = [], s = [], o = [];
    mt(e, function(l) {
      l && (n = l[0], pt(n) ? o.push(l) : typeof l == "function" ? l.call(r) : pt(l) && n === "alias" ? i.push(l) : pt(l) && n.indexOf("capture") !== -1 && typeof r[n] == "function" ? o.push(l) : s.push(l));
    });
    var a = function(l, c) {
      mt(l, function(u) {
        if (pt(u[0])) {
          var d = c;
          W(u, function(f) {
            d = d[f[0]].apply(d, f.slice(1));
          });
        } else
          this[u[0]].apply(this, u.slice(1));
      }, c);
    };
    a(i, this), a(s, this), a(o, this);
  } }, { key: "_hasBootstrappedFeatureFlags", value: function() {
    var e, n;
    return ((e = this.config.bootstrap) === null || e === void 0 ? void 0 : e.featureFlags) && Object.keys((n = this.config.bootstrap) === null || n === void 0 ? void 0 : n.featureFlags).length > 0 || !1;
  } }, { key: "push", value: function(e) {
    this._execute_array([e]);
  } }, { key: "captureException", value: function(e, n) {
    var r;
    (r = this.exceptionAutocapture) === null || r === void 0 || r.captureException([e.name, void 0, void 0, void 0, e], n);
  } }, { key: "capture", value: function(e, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Nn;
    if (this.__loaded && !rl(this, !1)) {
      this._captureMetrics.incr("capture"), e === "$snapshot" && this._captureMetrics.incr("snapshot");
      var i = (r = r || Nn).transport;
      if (i && (r.transport = i), Xe(e) || typeof e != "string")
        console.error("No event name provided to posthog.capture");
      else if (!Sd(Ke)) {
        this.sessionPersistence.update_search_keyword(), this.get_config("store_google") && this.sessionPersistence.update_campaign_params(), this.get_config("save_referrer") && this.sessionPersistence.update_referrer_info();
        var s = { uuid: vt("v7"), event: e, properties: this._calculate_event_properties(e, n || {}) };
        e === "$identify" && (s.$set = r.$set, s.$set_once = r.$set_once), (s = Ka(s, r._noTruncate ? null : this.get_config("properties_string_max_length"))).timestamp = r.timestamp || /* @__PURE__ */ new Date(), this.get_config("debug") && te.log("PostHog.js send", s);
        var o = JSON.stringify(s), a = this.get_config("api_host") + (r.endpoint || "/e/"), l = r !== Nn;
        return !this.get_config("request_batching") || l && !r._batchKey || r.send_instantly ? this.__compress_and_send_json_request(a, o, r) : this._requestQueue.enqueue(a, s, r), this._invokeCaptureHooks(e, s), s;
      }
    }
  } }, { key: "_addCaptureHook", value: function(e) {
    this.__captureHooks.push(e);
  } }, { key: "_invokeCaptureHooks", value: function(e, n) {
    this.config._onCapture(e, n), W(this.__captureHooks, function(r) {
      return r(e);
    });
  } }, { key: "_calculate_event_properties", value: function(e, n) {
    var r, i = this.persistence.remove_event_timer(e), s = M({}, n);
    if (s.token = this.get_config("token"), e === "$snapshot") {
      var o = M(M({}, this.persistence.properties()), this.sessionPersistence.properties());
      return s.distinct_id = o.distinct_id, s;
    }
    var a = be.properties();
    if (this.sessionManager) {
      var l = this.sessionManager.checkAndGetSessionAndWindowId(), c = l.sessionId, u = l.windowId;
      s.$session_id = c, s.$window_id = u;
    }
    if ((r = this.webPerformance) !== null && r !== void 0 && r.isEnabled && (e === "$pageview" && this.pageViewIdManager.onPageview(), s = Ee(s, { $pageview_id: this.pageViewIdManager.getPageViewId() })), e === "$performance_event") {
      var d = this.persistence.properties();
      return s.distinct_id = d.distinct_id, s.$current_url = a.$current_url, s;
    }
    if (i !== void 0) {
      var f = (/* @__PURE__ */ new Date()).getTime() - i;
      s.$duration = parseFloat((f / 1e3).toFixed(3));
    }
    s = Ee({}, be.properties(), this.persistence.properties(), this.sessionPersistence.properties(), s);
    var h = this.get_config("property_blacklist");
    pt(h) ? W(h, function(p) {
      delete s[p];
    }) : console.error("Invalid value for property_blacklist config: " + h);
    var g = this.get_config("sanitize_properties");
    return g && (s = g(s, e)), s;
  } }, { key: "register", value: function(e, n) {
    this.persistence.register(e, n);
  } }, { key: "register_once", value: function(e, n, r) {
    this.persistence.register_once(e, n, r);
  } }, { key: "register_for_session", value: function(e) {
    this.sessionPersistence.register(e);
  } }, { key: "unregister", value: function(e) {
    this.persistence.unregister(e);
  } }, { key: "unregister_for_session", value: function(e) {
    this.sessionPersistence.unregister(e);
  } }, { key: "_register_single", value: function(e, n) {
    this.register(N({}, e, n));
  } }, { key: "getFeatureFlag", value: function(e, n) {
    return this.featureFlags.getFeatureFlag(e, n);
  } }, { key: "getFeatureFlagPayload", value: function(e) {
    var n = this.featureFlags.getFeatureFlagPayload(e);
    try {
      return JSON.parse(n);
    } catch {
      return n;
    }
  } }, { key: "isFeatureEnabled", value: function(e, n) {
    return this.featureFlags.isFeatureEnabled(e, n);
  } }, { key: "reloadFeatureFlags", value: function() {
    this.featureFlags.reloadFeatureFlags();
  } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e, n) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, n);
  } }, { key: "getEarlyAccessFeatures", value: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    return this.featureFlags.getEarlyAccessFeatures(e, n);
  } }, { key: "onFeatureFlags", value: function(e) {
    return this.featureFlags.onFeatureFlags(e);
  } }, { key: "getSurveys", value: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    this.surveys.getSurveys(e, n);
  } }, { key: "getActiveMatchingSurveys", value: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    this.surveys.getActiveMatchingSurveys(e, n);
  } }, { key: "identify", value: function(e, n, r) {
    if (e) {
      this._captureMetrics.incr("identify");
      var i = this.get_distinct_id();
      if (this.register({ $user_id: e }), !this.get_property("$device_id")) {
        var s = i;
        this.register_once({ $had_persisted_distinct_id: !0, $device_id: s }, "");
      }
      e !== i && e !== this.get_property(Bn) && (this.unregister(Bn), this.register({ distinct_id: e }));
      var o = this.persistence.get_user_state() === "anonymous";
      e !== i && o ? (this.persistence.set_user_state("identified"), this.capture("$identify", { distinct_id: e, $anon_distinct_id: i }, { $set: n || {}, $set_once: r || {} }), this.featureFlags.setAnonymousDistinctId(i)) : (n && this.people.set(n), r && this.people.set_once(r)), e !== i && (this.reloadFeatureFlags(), this.unregister(or));
    } else
      console.error("Unique user id has not been set in posthog.identify");
  } }, { key: "group", value: function(e, n, r) {
    if (e && n) {
      this._captureMetrics.incr("group");
      var i = this.getGroups();
      i[e] !== n && this.resetGroupPropertiesForFlags(e), this.register({ $groups: M(M({}, i), {}, N({}, e, n)) }), r && (this.capture("$groupidentify", { $group_type: e, $group_key: n, $group_set: r }), this.setGroupPropertiesForFlags(N({}, e, r))), i[e] === n || r || this.reloadFeatureFlags();
    } else
      console.error("posthog.group requires a group type and group key");
  } }, { key: "resetGroups", value: function() {
    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  } }, { key: "setPersonPropertiesForFlags", value: function(e) {
    var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    this.featureFlags.setPersonPropertiesForFlags(e, n);
  } }, { key: "resetPersonPropertiesForFlags", value: function() {
    this.featureFlags.resetPersonPropertiesForFlags();
  } }, { key: "setGroupPropertiesForFlags", value: function(e) {
    var n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    this.featureFlags.setGroupPropertiesForFlags(e, n);
  } }, { key: "resetGroupPropertiesForFlags", value: function(e) {
    this.featureFlags.resetGroupPropertiesForFlags(e);
  } }, { key: "reset", value: function(e) {
    var n = this.get_property("$device_id");
    this.persistence.clear(), this.sessionPersistence.clear(), this.persistence.set_user_state("anonymous"), this.sessionManager.resetSessionId();
    var r = this.get_config("get_device_id")(vt());
    this.register_once({ distinct_id: r, $device_id: e ? r : n }, "");
  } }, { key: "get_distinct_id", value: function() {
    return this.get_property("distinct_id");
  } }, { key: "getGroups", value: function() {
    return this.get_property("$groups") || {};
  } }, { key: "get_session_id", value: function() {
    return this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId;
  } }, { key: "get_session_replay_url", value: function(e) {
    var n = this.config.ui_host || this.config.api_host, r = this.sessionManager.checkAndGetSessionAndWindowId(!0), i = r.sessionId, s = r.sessionStartTimestamp, o = n + "/replay/" + i;
    if (e != null && e.withTimestamp && s) {
      var a, l = (a = e.timestampLookBack) !== null && a !== void 0 ? a : 10;
      if (!s)
        return o;
      var c = Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - s) / 1e3) - l, 0);
      o += "?t=".concat(c);
    }
    return o;
  } }, { key: "alias", value: function(e, n) {
    return e === this.get_property(Za) ? (te.critical("Attempting to create alias for existing People user - aborting."), -2) : (Xe(n) && (n = this.get_distinct_id()), e !== n ? (this._register_single(Bn, e), this.capture("$create_alias", { alias: e, distinct_id: n })) : (console.error("alias matches current distinct_id - skipping api call."), this.identify(e), -1));
  } }, { key: "set_config", value: function(e) {
    var n = M({}, this.config);
    Dt(e) && (Ee(this.config, e), this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.update_config(this.config), this.sessionPersistence && this.sessionPersistence.update_config(this.config), de.is_supported() && de.get("ph_debug") === "true" && (this.config.debug = !0), this.get_config("debug") && (at.DEBUG = !0), this.sessionRecording && e.disable_session_recording !== void 0 && n.disable_session_recording !== e.disable_session_recording && (e.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled()));
  } }, { key: "startSessionRecording", value: function() {
    this.set_config({ disable_session_recording: !1 });
  } }, { key: "stopSessionRecording", value: function() {
    this.set_config({ disable_session_recording: !0 });
  } }, { key: "sessionRecordingStarted", value: function() {
    var e;
    return !((e = this.sessionRecording) === null || e === void 0 || !e.started());
  } }, { key: "loadToolbar", value: function(e) {
    return this.toolbar.loadToolbar(e);
  } }, { key: "get_config", value: function(e) {
    var n;
    return (n = this.config) === null || n === void 0 ? void 0 : n[e];
  } }, { key: "get_property", value: function(e) {
    return this.persistence.props[e];
  } }, { key: "getSessionProperty", value: function(e) {
    return this.sessionPersistence.props[e];
  } }, { key: "toString", value: function() {
    var e, n = (e = this.get_config("name")) !== null && e !== void 0 ? e : Le;
    return n !== Le && (n = Le + "." + n), n;
  } }, { key: "_gdpr_init", value: function() {
    this.get_config("opt_out_capturing_persistence_type") === "localStorage" && de.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({ persistence_type: "cookie" }) && this.opt_in_capturing({ enable_persistence: !1 }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({ persistence_type: "cookie" }) && this.opt_out_capturing({ clear_persistence: !1 }), this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: !1 })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({ clear_persistence: !0 }) : this.has_opted_in_capturing() || !this.get_config("opt_out_capturing_by_default") && !st.get("ph_optout") || (st.remove("ph_optout"), this.opt_out_capturing({ clear_persistence: this.get_config("opt_out_persistence_by_default") }));
  } }, { key: "_gdpr_update_persistence", value: function(e) {
    var n;
    if (e && e.clear_persistence)
      n = !0;
    else {
      if (!e || !e.enable_persistence)
        return;
      n = !1;
    }
    this.get_config("disable_persistence") || this.persistence.disabled === n || this.persistence.set_disabled(n), this.get_config("disable_persistence") || this.sessionPersistence.disabled === n || this.sessionPersistence.set_disabled(n);
  } }, { key: "_gdpr_call_func", value: function(e, n) {
    return n = Ee({ capture: this.capture.bind(this), persistence_type: this.get_config("opt_out_capturing_persistence_type"), cookie_prefix: this.get_config("opt_out_capturing_cookie_prefix"), cookie_expiration: this.get_config("cookie_expiration"), cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"), secure_cookie: this.get_config("secure_cookie") }, n || {}), de.is_supported() || n.persistence_type !== "localStorage" || (n.persistence_type = "cookie"), e(this.get_config("token"), { capture: n.capture, captureEventName: n.capture_event_name, captureProperties: n.capture_properties, persistenceType: n.persistence_type, persistencePrefix: n.cookie_prefix, cookieExpiration: n.cookie_expiration, crossSubdomainCookie: n.cross_subdomain_cookie, secureCookie: n.secure_cookie });
  } }, { key: "opt_in_capturing", value: function(e) {
    e = Ee({ enable_persistence: !0 }, e || {}), this._gdpr_call_func(Pd, e), this._gdpr_update_persistence(e);
  } }, { key: "opt_out_capturing", value: function(e) {
    var n = Ee({ clear_persistence: !0 }, e || {});
    this._gdpr_call_func(Od, n), this._gdpr_update_persistence(n);
  } }, { key: "has_opted_in_capturing", value: function(e) {
    return this._gdpr_call_func(Fd, e);
  } }, { key: "has_opted_out_capturing", value: function(e) {
    return this._gdpr_call_func(el, e);
  } }, { key: "clear_opt_in_out_capturing", value: function(e) {
    var n = Ee({ enable_persistence: !0 }, e ?? {});
    this._gdpr_call_func(Cd, n), this._gdpr_update_persistence(n);
  } }, { key: "debug", value: function(e) {
    e === !1 ? (C.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: !1 })) : (C.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: !0 }));
  } }]), t;
}();
(function(t, e) {
  for (var n = 0; n < e.length; n++)
    t.prototype[e[n]] = Ja(t.prototype[e[n]]);
})(zi, ["identify"]);
var St = {}, $f = function() {
  Ae.init = function(t, e, n) {
    if (n)
      return Ae[n] || (Ae[n] = St[n] = mi(t || "", e || {}, n, function(i) {
        Ae[n] = St[n] = i, i._loaded();
      })), Ae[n];
    var r = Ae;
    return St[Le] ? r = St[Le] : t && (r = mi(t, e || {}, Le, function(i) {
      St[Le] = i, i._loaded();
    }), St[Le] = r), Ae = r, Li === kn.INIT_SNIPPET && (C[Le] = Ae), W(St, function(i, s) {
      s !== Le && (Ae[s] = i);
    }), r;
  };
}, jf = function() {
  function t() {
    t.done || (t.done = !0, dl = !1, W(St, function(e) {
      e._dom_loaded();
    }));
  }
  pe.addEventListener && (pe.readyState === "complete" ? t() : pe.addEventListener("DOMContentLoaded", t, !1)), gn(C, "load", t, !0);
}, fl = (Li = kn.INIT_MODULE, Ae = new zi(), $f(), Ae.init(), jf(), Ae);
let hl = "";
function Mf(t) {
  hl = t, window.location.hostname !== "localhost" && fl.init("phc_TAooetKnDVSmvK9WfqtFVUtiEjxpgnPYQ5OaTWUVuY8", { api_host: "https://eu.posthog.com" });
}
function pl(t, e = {}) {
  e.kbid = hl, window.location.hostname !== "localhost" ? fl.capture(`[${t}]`, e) : localStorage.getItem("DEBUG_TRACKING") === "on" && console.info(`[${t}]`, e);
}
const ee = new Gt({
  currentResult: null,
  selectedParagraphIndex: -1,
  playFromTranscript: !1,
  summary: "",
  isPreviewing: !1,
  fieldFullId: null,
  transcripts: [],
  fullMetadataLoaded: !1,
  query: null,
  searchInFieldResults: null,
  hasError: !1
}), Nf = ee.reader(
  (t) => {
    var e, n;
    return ((e = t.currentResult) == null ? void 0 : e.resultType) === "video" || ((n = t.currentResult) == null ? void 0 : n.resultType) === "audio";
  }
);
ee.reader((t) => {
  var s;
  const e = (((s = t.currentResult) == null ? void 0 : s.paragraphs) || []).length > 0 ? 1 : 0, n = Nf.getValue() ? 1 : 0, r = t.summary ? 1 : 0, i = (zf.getValue() || []).length > 0 ? 1 : 0;
  return e + n + r + i;
});
const gl = ee.writer(
  (t) => t,
  (t, e) => ({
    ...t,
    currentResult: e.result ? {
      ...e.result,
      paragraphs: e.result.paragraphs || []
    } : null,
    selectedParagraphIndex: e.selectedParagraphIndex,
    fieldFullId: e.result && e.result.field ? {
      field_id: e.result.field.field_id,
      field_type: e.result.field.field_type,
      resourceId: e.result.id
    } : null,
    isPreviewing: !!e,
    searchInFieldResults: null,
    fullMetadataLoaded: !1
  })
);
ee.writer(
  (t) => t.query,
  (t, e) => {
    const n = e.trim();
    return n !== t.query ? {
      ...t,
      query: n,
      hasError: !1
    } : t;
  }
);
ee.writer(
  (t) => t.searchInFieldResults,
  (t, e) => ({
    ...t,
    searchInFieldResults: e,
    selectedParagraphIndex: -1
  })
);
ee.action((t) => ({
  ...t,
  searchInFieldResults: null,
  query: null,
  selectedParagraphIndex: -1,
  playFromTranscripts: !1
}));
ee.writer(
  (t) => t.hasError,
  (t, e) => ({
    ...t,
    hasError: e
  })
);
ee.writer(
  (t) => t.isPreviewing,
  (t, e) => ({ ...t, isPreviewing: e })
);
ee.writer(
  (t) => t.selectedParagraphIndex,
  (t, e) => ({
    ...t,
    selectedParagraphIndex: e.index,
    playFromTranscript: e.playFromTranscripts
  })
);
ee.reader((t) => {
  if (t.selectedParagraphIndex !== null) {
    if (t.searchInFieldResults)
      return t.searchInFieldResults[t.selectedParagraphIndex];
    if (t.currentResult && t.currentResult.paragraphs)
      return t.currentResult.paragraphs[t.selectedParagraphIndex];
  }
  return null;
});
ee.action((t) => t.selectedParagraphIndex !== null && t.selectedParagraphIndex > 0 ? {
  ...t,
  selectedParagraphIndex: t.selectedParagraphIndex - 1,
  playFromTranscript: !1
} : t);
ee.action((t) => {
  var e;
  return (e = t.currentResult) != null && e.paragraphs ? t.playFromTranscript ? {
    ...t,
    selectedParagraphIndex: 0,
    playFromTranscript: !1
  } : t.selectedParagraphIndex !== null && t.selectedParagraphIndex < t.currentResult.paragraphs.length - 1 ? {
    ...t,
    selectedParagraphIndex: t.selectedParagraphIndex + 1,
    playFromTranscript: !1
  } : t : t;
});
ee.reader(
  (t) => {
    var e;
    return ((e = t.currentResult) == null ? void 0 : e.resultType) || null;
  }
);
ee.reader((t) => {
  var e;
  return ((e = t.currentResult) == null ? void 0 : e.thumbnail) || null;
});
ee.reader((t) => {
  var r, i, s;
  if (t.selectedParagraphIndex === null || t.playFromTranscript && t.transcripts.length === 0 || !t.playFromTranscript && (!((r = t.currentResult) != null && r.paragraphs) || t.currentResult.paragraphs.length === 0))
    return 0;
  const n = (t.playFromTranscript ? t.transcripts : (i = t.currentResult) == null ? void 0 : i.paragraphs)[t.selectedParagraphIndex];
  return ((s = n == null ? void 0 : n.position.start_seconds) == null ? void 0 : s[0]) || 0;
});
const Lf = ee.writer(
  (t) => t.fieldFullId,
  (t, e) => ({
    ...t,
    fieldFullId: e
  })
);
ee.writer(
  (t) => {
    var e;
    return ((e = t.currentResult) == null ? void 0 : e.fieldData) || null;
  },
  (t, e) => {
    var i, s, o, a;
    let n;
    e && (n = {
      value: e.value,
      extracted: e.extracted
    });
    const r = t.currentResult ? {
      ...t.currentResult,
      fieldData: n
    } : null;
    return {
      ...t,
      currentResult: r,
      summary: ((a = (o = (s = (i = e == null ? void 0 : e.extracted) == null ? void 0 : i.metadata) == null ? void 0 : s.metadata) == null ? void 0 : o.summary) == null ? void 0 : a.trim()) || ""
    };
  }
);
const zf = ee.reader((t) => {
  if (!t.currentResult)
    return null;
  const e = t.currentResult, n = Object.entries(e.data || {}).filter(([r, i]) => r !== "generics" && !!i).reduce((r, [i, s]) => {
    const o = Ri(i.substring(0, i.length - 1));
    return o && Object.keys(s).forEach(
      (a) => r.push({ field_id: a, field_type: o, resourceId: e.id })
    ), r;
  }, []);
  return n.length > 1 ? n : null;
});
ee.reader((t) => t.fullMetadataLoaded);
ee.writer(
  (t) => {
    var e, n, r, i;
    return (i = (r = (n = (e = t.currentResult) == null ? void 0 : e.fieldData) == null ? void 0 : n.extracted) == null ? void 0 : r.metadata) == null ? void 0 : i.metadata;
  },
  (t, e) => {
    var n, r, i, s;
    return (s = (i = (r = (n = t.currentResult) == null ? void 0 : n.fieldData) == null ? void 0 : r.extracted) == null ? void 0 : i.metadata) != null && s.metadata ? {
      ...t,
      currentResult: {
        ...t.currentResult,
        fieldData: {
          ...t.currentResult.fieldData,
          extracted: {
            ...t.currentResult.fieldData.extracted,
            metadata: {
              ...t.currentResult.fieldData.extracted.metadata,
              metadata: e
            }
          }
        }
      },
      fullMetadataLoaded: !0
    } : t;
  }
);
ee.writer(
  (t) => t.transcripts,
  (t, e) => ({
    ...t,
    transcripts: e
  })
);
ee.reader((t) => t.summary);
ee.reader((t) => {
  var e;
  return ((e = t.fieldFullId) == null ? void 0 : e.field_type) || null;
});
const vl = [ht.Features.PARAGRAPH, ht.Features.VECTOR], _l = [Rt.Features.PARAGRAPHS];
let G, lr, ml, _n = [...vl], mn = [..._l], cr = [];
const yl = {}, Df = (t, e, n) => {
  var r, i, s, o, a, l, c, u, d, f;
  if (G)
    throw new Error("Cannot exist more than one Nuclia widget at the same time");
  if ((r = n.features) != null && r.useSynonyms && ((i = n.features) != null && i.relations))
    throw new Error("Cannot use synonyms and relations at the same time");
  if ((n.fuzzyOnly || (s = n.features) != null && s.useSynonyms) && (_n = [ht.Features.PARAGRAPH]), (o = n.features) != null && o.useSynonyms && (yl.with_synonyms = !0), G = new hu(t), Mf(G.options.knowledgeBox || "kb not defined"), Oa.set({
    inTitleOnly: !1,
    highlight: n.highlight,
    autofilter: !!((a = n.features) != null && a.autofilter)
  }), (l = n.features) != null && l.suggestLabels) {
    const h = G == null ? void 0 : G.knowledgeBox.fullpath;
    if (h) {
      lr = new Xu(_r());
      const g = e === "PRIVATE" ? G.auth.getAuthHeaders() : {};
      lr.loadModels(h, g);
    }
  }
  return (c = n.features) != null && c.relations && !_n.includes(ht.Features.RELATIONS) && (_n.push(ht.Features.RELATIONS), mn.push(Rt.Features.RELATIONS)), (u = n.features) != null && u.suggestions && cr.push(ht.SuggestionFeatures.PARAGRAPH), (d = n.features) != null && d.suggestEntities && cr.push(ht.SuggestionFeatures.ENTITIES), (f = n.features) != null && f.noBM25forChat && (mn = mn.filter((h) => h !== Rt.Features.PARAGRAPHS)), ml = e, G;
}, Uf = () => {
  G = null, _n = [...vl], mn = [..._l], cr = [];
}, Bf = (t, e) => {
  if (!G)
    throw new Error("Nuclia API not initialized");
  return G.knowledgeBox.find(t, _n, { ...yl, ...e }).pipe(
    ae((n) => (n.type === "error" && Pa.set(n), n.type === "findResults" || n.status === 206)),
    A((n) => n.type === "error" ? n.body : n)
  );
}, qf = (t, e, n) => {
  if (!G)
    throw new Error("Nuclia API not initialized");
  const r = e == null ? void 0 : e.reduce((i, s) => (i.push({ author: Rt.Author.USER, text: s.question }), i.push({ author: Rt.Author.NUCLIA, text: s.answer.text }), i), []);
  return G.knowledgeBox.chat(
    t,
    r,
    mn,
    n ? { ...n, highlight: !0 } : { highlight: !0 }
  );
}, Hf = (t, e) => {
  if (!G)
    throw new Error("Nuclia API not initialized");
  return G.knowledgeBox.feedback(t.id, e);
}, Hs = (t) => {
  if (!G)
    throw new Error("Nuclia API not initialized");
  return G.knowledgeBox.suggest(t, !0, cr).pipe(
    ae((e) => (e.type === "error" && Ia.set(e), e.type === "suggestions"))
  );
}, Wf = (t) => {
  if (!lr)
    throw new Error("Nuclia prediction not initialized");
  return lr.predict(t);
}, bl = (t, e) => {
  if (!G)
    throw new Error("Nuclia API not initialized");
  return G.knowledgeBox.getResource(t, e);
}, Vf = () => {
  if (!G)
    throw new Error("Nuclia API not initialized");
  return G.options.standalone ? `${G.options.backend}/v1` : G.regionalBackend + "/v1";
}, Gf = () => {
  if (!G)
    throw new Error("Nuclia API not initialized");
  return G.knowledgeBox.getTempToken();
}, Jf = () => {
  var t;
  return ml === "PRIVATE" || !!((t = G == null ? void 0 : G.options) != null && t.standalone);
}, Kf = (t, e = !1) => (t.length === 0 || !Jf() ? H("") : Gf()).pipe(
  A(
    (r) => t.map((i) => {
      if (i.startsWith("/")) {
        const s = (r ? `eph-token=${r}` : "") + (e ? "inline=true" : ""), o = `${Vf()}${i}`;
        return s ? `${o}?${s}` : o;
      } else
        return i;
    })
  )
);
function Qf(t) {
  Ve(t, "svelte-cyofob", ".sw-svg-icon.svelte-cyofob{fill:currentColor;height:var(--rhythm-3);width:var(--rhythm-3)}.sw-svg-icon.small.svelte-cyofob{height:var(--rhythm-2);width:var(--rhythm-2)}.sw-svg-icon.large.svelte-cyofob{height:var(--rhythm-5);width:var(--rhythm-5)}.sw-svg-icon.svelte-cyofob:focus{outline:0}");
}
function Ws(t) {
  let e, n, r, i;
  return {
    c() {
      e = Gi("svg"), n = Gi("use"), b(n, "href", r = "#" + /*name*/
      t[0]), b(e, "class", i = "sw-svg-icon " + /*size*/
      t[1] + " svelte-cyofob"), b(e, "tabindex", "-1");
    },
    m(s, o) {
      R(s, e, o), x(e, n);
    },
    p(s, o) {
      o & /*name*/
      1 && r !== (r = "#" + /*name*/
      s[0]) && b(n, "href", r), o & /*size*/
      2 && i !== (i = "sw-svg-icon " + /*size*/
      s[1] + " svelte-cyofob") && b(e, "class", i);
    },
    d(s) {
      s && T(e);
    }
  };
}
function Xf(t) {
  let e, n = (
    /*name*/
    t[0] && Ws(t)
  );
  return {
    c() {
      n && n.c(), e = ot();
    },
    m(r, i) {
      n && n.m(r, i), R(r, e, i);
    },
    p(r, [i]) {
      /*name*/
      r[0] ? n ? n.p(r, i) : (n = Ws(r), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: z,
    o: z,
    d(r) {
      n && n.d(r), r && T(e);
    }
  };
}
function Yf(t, e, n) {
  let { name: r } = e, { size: i = "" } = e;
  return t.$$set = (s) => {
    "name" in s && n(0, r = s.name), "size" in s && n(1, i = s.size);
  }, [r, i];
}
class wl extends je {
  constructor(e) {
    super(), Ce(this, e, Yf, Xf, Fe, { name: 0, size: 1 }, Qf);
  }
}
function Zf(t) {
  Ve(t, "svelte-18427o9", ".sw-modal-header.svelte-18427o9.svelte-18427o9{display:flex;align-items:center;height:3em}.sw-modal-header.svelte-18427o9 .back.svelte-18427o9,.sw-modal-header.svelte-18427o9 .close.svelte-18427o9{-webkit-appearance:none;border:none;margin:0;padding:0;width:auto;background:transparent;cursor:pointer}.sw-modal-header.svelte-18427o9 .back.svelte-18427o9{color:#fff;font:inherit;font-size:1.2em;font-weight:var(--font-weight-bold)}.sw-modal-header.svelte-18427o9 .close.svelte-18427o9{margin-left:auto}.sw-modal-header.svelte-18427o9 .close img.svelte-18427o9{width:30px}@media(min-width: 599px){.sw-modal-header.svelte-18427o9.svelte-18427o9{position:absolute;top:0;width:100vw;left:calc((var(--resource-modal-width-md, fit-content) - 100vw) / 2)}.sw-modal-header.svelte-18427o9 .close.svelte-18427o9{margin-right:var(--rhythm-1)}}");
}
function Vs(t) {
  let e, n = (
    /*$_*/
    t[2]("modal.back") + ""
  ), r, i, s;
  return {
    c() {
      e = S("button"), r = he(n), b(e, "class", "back svelte-18427o9");
    },
    m(o, a) {
      R(o, e, a), x(e, r), i || (s = J(
        e,
        "click",
        /*back*/
        t[4]
      ), i = !0);
    },
    p(o, a) {
      a & /*$_*/
      4 && n !== (n = /*$_*/
      o[2]("modal.back") + "") && Te(r, n);
    },
    d(o) {
      o && T(e), i = !1, s();
    }
  };
}
function Gs(t) {
  let e, n, r, i, s;
  return {
    c() {
      e = S("button"), n = S("img"), $l(n.src, r = `${_r()}icons/close-light.svg`) || b(n, "src", r), b(n, "alt", "icon"), b(n, "class", "svelte-18427o9"), b(e, "class", "close svelte-18427o9");
    },
    m(o, a) {
      R(o, e, a), x(e, n), i || (s = J(
        e,
        "click",
        /*close*/
        t[3]
      ), i = !0);
    },
    p: z,
    d(o) {
      o && T(e), i = !1, s();
    }
  };
}
function eh(t) {
  let e, n, r = (
    /*backButton*/
    t[1] && Vs(t)
  ), i = (
    /*closeButton*/
    t[0] && Gs(t)
  );
  return {
    c() {
      e = S("div"), r && r.c(), n = Q(), i && i.c(), b(e, "class", "sw-modal-header svelte-18427o9");
    },
    m(s, o) {
      R(s, e, o), r && r.m(e, null), x(e, n), i && i.m(e, null);
    },
    p(s, [o]) {
      /*backButton*/
      s[1] ? r ? r.p(s, o) : (r = Vs(s), r.c(), r.m(e, n)) : r && (r.d(1), r = null), /*closeButton*/
      s[0] ? i ? i.p(s, o) : (i = Gs(s), i.c(), i.m(e, null)) : i && (i.d(1), i = null);
    },
    i: z,
    o: z,
    d(s) {
      s && T(e), r && r.d(), i && i.d();
    }
  };
}
function th(t, e, n) {
  let r;
  q(t, Ft, (c) => n(2, r = c));
  let { closeButton: i = !1 } = e, { backButton: s = !1 } = e;
  const o = Ot(), a = () => {
    o("close");
  }, l = () => {
    o("back");
  };
  return t.$$set = (c) => {
    "closeButton" in c && n(0, i = c.closeButton), "backButton" in c && n(1, s = c.backButton);
  }, [i, s, r, a, l];
}
class nh extends je {
  constructor(e) {
    super(), Ce(this, e, th, eh, Fe, { closeButton: 0, backButton: 1 }, Zf);
  }
}
function rh(t = !1) {
  if (t) {
    const e = window.scrollY, n = document.body;
    n.style.position = "fixed", n.style.top = `-${e}px`;
  } else
    document.body.style.overflow = "hidden";
}
function Js(t = !1) {
  if (t) {
    const e = document.body, n = e.style.top;
    e.style.position = "", e.style.top = "", setTimeout(() => ih(n));
  } else
    document.body.style.overflow = "inherit";
}
function ih(t) {
  window.scrollTo(0, parseInt(t || "0") * -1);
}
function sh(t) {
  Ve(t, "svelte-8jv0hp", ".sw-modal-backdrop.svelte-8jv0hp.svelte-8jv0hp{bottom:0;left:0;position:fixed;right:0;top:0;z-index:var(--z-index-modal-backdrop)}.sw-modal-backdrop.fade.svelte-8jv0hp.svelte-8jv0hp{animation:svelte-8jv0hp-fadeIn 480ms}@keyframes svelte-8jv0hp-fadeIn{0%{opacity:0}100%{opacity:1}}.sw-modal-backdrop.visible.svelte-8jv0hp.svelte-8jv0hp{background-color:var(--color-backdrop)}.sw-modal-backdrop.svelte-8jv0hp .modal.svelte-8jv0hp{align-items:stretch;background-color:transparent;border:0;color:inherit;display:flex;flex-flow:column nowrap;left:50%;margin:0;max-width:100vw;padding:0;position:relative;top:50%;transform:translateX(-50%) translateY(-50%);z-index:var(--z-index-modal)}.sw-modal-backdrop.svelte-8jv0hp .modal .modal-content.svelte-8jv0hp{background-color:var(--color-light-stronger);overflow:auto}.sw-modal-backdrop.svelte-8jv0hp .modal-content.svelte-8jv0hp{z-index:0;overflow:scroll}@media(min-width: 599px){.sw-modal-backdrop.svelte-8jv0hp .modal.svelte-8jv0hp{max-height:calc(100vh - var(--popup-top));max-width:calc(100vw - var(--rhythm-3))}.sw-modal-backdrop.svelte-8jv0hp .modal .modal-content.svelte-8jv0hp::-webkit-scrollbar{width:var(--rhythm-1)}.sw-modal-backdrop.svelte-8jv0hp .modal .modal-content.svelte-8jv0hp::-webkit-scrollbar-thumb{background-color:var(--color-scrollbar-thumb)}.sw-modal-backdrop.svelte-8jv0hp .modal .modal-content.svelte-8jv0hp::-webkit-scrollbar-track{background-color:var(--color-scrollbar-track)}}.sw-modal-backdrop.svelte-8jv0hp.svelte-8jv0hp{--modal-width:calc(100vw - var(--side-spacing)*2)}.sw-modal-backdrop.popup.svelte-8jv0hp .modal .modal-content.svelte-8jv0hp{box-shadow:var(--shadow-modal)}.sw-modal-backdrop.popup.svelte-8jv0hp .modal.svelte-8jv0hp{position:fixed;left:var(--side-spacing);right:var(--side-spacing);top:var(--popup-top);transform:none;width:var(--modal-width)}.sw-modal-backdrop.svelte-8jv0hp:not(.popup) .modal-content.svelte-8jv0hp{width:var(--modal-width, fit-content);height:var(--modal-height, fit-content)}@media(min-width: 599px){.sw-modal-backdrop.popup.svelte-8jv0hp .modal.svelte-8jv0hp{--modal-width:var(--rhythm-64);left:var(--popup-left);max-height:calc(100vh - var(--popup-top) - var(--rhythm-3))}.sw-modal-backdrop.popup.align-right.svelte-8jv0hp .modal.svelte-8jv0hp{left:max(var(--popup-left) - var(--modal-width), 0px)}.sw-modal-backdrop.svelte-8jv0hp:not(.popup) .modal-content.svelte-8jv0hp{width:var(--resource-modal-width-md, fit-content);height:100vh}}");
}
function Ks(t) {
  var h, g, p;
  let e, n, r, i, s = `${/*parentPosition*/
  ((h = t[4]) == null ? void 0 : h.bottom) || 0}px`, o = `${/*alignTo*/
  (t[5] === "right" ? (
    /*parentPosition*/
    (g = t[4]) == null ? void 0 : g.right
  ) : (
    /*parentPosition*/
    (p = t[4]) == null ? void 0 : p.left
  )) || 0}px`, a, l, c, u = (
    /*backButton*/
    (t[3] || /*closeButton*/
    t[2]) && Qs(t)
  );
  const d = (
    /*#slots*/
    t[15].default
  ), f = qr(
    d,
    t,
    /*$$scope*/
    t[14],
    null
  );
  return {
    c() {
      e = S("div"), n = S("dialog"), u && u.c(), r = Q(), i = S("div"), f && f.c(), b(i, "class", "modal-content svelte-8jv0hp"), Ie(
        i,
        "--modal-content-height",
        /*modalContentHeight*/
        t[7]
      ), b(n, "class", "modal svelte-8jv0hp"), Ie(n, "--popup-top", s), Ie(n, "--popup-left", o), Ie(
        n,
        "--modal-width",
        /*modalWidth*/
        t[6] ? (
          /*modalWidth*/
          t[6]
        ) : ""
      ), b(e, "class", "sw-modal-backdrop fade svelte-8jv0hp"), V(e, "visible", !/*popup*/
      t[1]), V(
        e,
        "popup",
        /*popup*/
        t[1]
      ), V(
        e,
        "align-right",
        /*alignTo*/
        t[5] === "right"
      );
    },
    m(_, v) {
      R(_, e, v), x(e, n), u && u.m(n, null), x(n, r), x(n, i), f && f.m(i, null), t[17](i), a = !0, l || (c = [
        J(
          n,
          "click",
          /*insideClick*/
          t[12]
        ),
        J(
          e,
          "click",
          /*outsideClick*/
          t[11]
        )
      ], l = !0);
    },
    p(_, v) {
      var m, F, y;
      /*backButton*/
      _[3] || /*closeButton*/
      _[2] ? u ? (u.p(_, v), v & /*backButton, closeButton*/
      12 && w(u, 1)) : (u = Qs(_), u.c(), w(u, 1), u.m(n, r)) : u && (ge(), P(u, 1, 1, () => {
        u = null;
      }), ve()), f && f.p && (!a || v & /*$$scope*/
      16384) && Wr(
        f,
        d,
        _,
        /*$$scope*/
        _[14],
        a ? Hr(
          d,
          /*$$scope*/
          _[14],
          v,
          null
        ) : Vr(
          /*$$scope*/
          _[14]
        ),
        null
      ), v & /*modalContentHeight*/
      128 && Ie(
        i,
        "--modal-content-height",
        /*modalContentHeight*/
        _[7]
      ), v & /*parentPosition*/
      16 && s !== (s = `${/*parentPosition*/
      ((m = _[4]) == null ? void 0 : m.bottom) || 0}px`) && Ie(n, "--popup-top", s), v & /*alignTo, parentPosition*/
      48 && o !== (o = `${/*alignTo*/
      (_[5] === "right" ? (
        /*parentPosition*/
        (F = _[4]) == null ? void 0 : F.right
      ) : (
        /*parentPosition*/
        (y = _[4]) == null ? void 0 : y.left
      )) || 0}px`) && Ie(n, "--popup-left", o), v & /*modalWidth*/
      64 && Ie(
        n,
        "--modal-width",
        /*modalWidth*/
        _[6] ? (
          /*modalWidth*/
          _[6]
        ) : ""
      ), (!a || v & /*popup*/
      2) && V(e, "visible", !/*popup*/
      _[1]), (!a || v & /*popup*/
      2) && V(
        e,
        "popup",
        /*popup*/
        _[1]
      ), (!a || v & /*alignTo*/
      32) && V(
        e,
        "align-right",
        /*alignTo*/
        _[5] === "right"
      );
    },
    i(_) {
      a || (w(u), w(f, _), a = !0);
    },
    o(_) {
      P(u), P(f, _), a = !1;
    },
    d(_) {
      _ && T(e), u && u.d(), f && f.d(_), t[17](null), l = !1, Oe(c);
    }
  };
}
function Qs(t) {
  let e, n;
  return e = new nh({
    props: {
      closeButton: (
        /*closeButton*/
        t[2]
      ),
      backButton: (
        /*backButton*/
        t[3]
      )
    }
  }), e.$on(
    "close",
    /*close*/
    t[10]
  ), e.$on(
    "back",
    /*back_handler*/
    t[16]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*closeButton*/
      4 && (s.closeButton = /*closeButton*/
      r[2]), i & /*backButton*/
      8 && (s.backButton = /*backButton*/
      r[3]), e.$set(s);
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function oh(t) {
  let e, n, r, i, s = (
    /*show*/
    t[0] && Ks(t)
  );
  return {
    c() {
      s && s.c(), e = ot();
    },
    m(o, a) {
      s && s.m(o, a), R(o, e, a), n = !0, r || (i = [
        J(
          window,
          "keydown",
          /*closeOnEsc*/
          t[13]
        ),
        J(
          window,
          "resize",
          /*setModalContentHeight*/
          t[9]
        )
      ], r = !0);
    },
    p(o, [a]) {
      /*show*/
      o[0] ? s ? (s.p(o, a), a & /*show*/
      1 && w(s, 1)) : (s = Ks(o), s.c(), w(s, 1), s.m(e.parentNode, e)) : s && (ge(), P(s, 1, 1, () => {
        s = null;
      }), ve());
    },
    i(o) {
      n || (w(s), n = !0);
    },
    o(o) {
      P(s), n = !1;
    },
    d(o) {
      s && s.d(o), o && T(e), r = !1, Oe(i);
    }
  };
}
function ah(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { show: s = !1 } = e, { popup: o = !1 } = e, { closeButton: a = !1 } = e, { backButton: l = !1 } = e, { parentPosition: c = void 0 } = e, { alignTo: u = "" } = e, { modalWidth: d = "" } = e;
  const f = Ot();
  let h = "100%", g;
  function p() {
    g && n(7, h = `${g.getBoundingClientRect().height}px`);
  }
  Sn(() => {
    p();
  });
  const _ = () => {
    n(0, s = !1), o || Js(), f("close");
  }, v = () => {
    _();
  }, m = (I) => {
    I.stopPropagation();
  }, F = (I) => {
    I.key === "Escape" && _();
  };
  function y(I) {
    ki.call(this, t, I);
  }
  function k(I) {
    Tt[I ? "unshift" : "push"](() => {
      g = I, n(8, g);
    });
  }
  return t.$$set = (I) => {
    "show" in I && n(0, s = I.show), "popup" in I && n(1, o = I.popup), "closeButton" in I && n(2, a = I.closeButton), "backButton" in I && n(3, l = I.backButton), "parentPosition" in I && n(4, c = I.parentPosition), "alignTo" in I && n(5, u = I.alignTo), "modalWidth" in I && n(6, d = I.modalWidth), "$$scope" in I && n(14, i = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*popup, show*/
    3 && (o || (s ? rh() : Js()));
  }, [
    s,
    o,
    a,
    l,
    c,
    u,
    d,
    h,
    g,
    p,
    _,
    v,
    m,
    F,
    i,
    r,
    y,
    k
  ];
}
class lh extends je {
  constructor(e) {
    super(), Ce(
      this,
      e,
      ah,
      oh,
      Fe,
      {
        show: 0,
        popup: 1,
        closeButton: 2,
        backButton: 3,
        parentPosition: 4,
        alignTo: 5,
        modalWidth: 6
      },
      sh
    );
  }
}
const Di = { type: "answer", text: "", id: "" }, ut = new Gt({
  chat: [],
  currentQuestion: "",
  currentAnswer: Di,
  isStreaming: !1
}), ch = ut.writer(
  (t) => t.currentQuestion,
  (t, e) => ({
    ...t,
    currentQuestion: e.question,
    chat: e.reset ? [] : t.chat,
    isStreaming: !0,
    error: void 0
  })
), uh = ut.writer(
  (t) => t.currentAnswer,
  (t, e) => (tr.set(!0), {
    ...t,
    currentAnswer: { ...t.currentAnswer, ...e },
    isStreaming: !0
  })
), dh = ut.reader(
  (t) => {
    var e;
    return t.chat.length === 0 && t.isStreaming ? { ...t.currentAnswer, incomplete: !0 } : ((e = t.chat[0]) == null ? void 0 : e.answer) || Di;
  }
);
ut.reader(
  (t) => t.chat.length > 0 && !t.isStreaming ? t.chat[t.chat.length - 1].answer : void 0
);
const ur = ut.writer(
  (t) => t.isStreaming ? [...t.chat, { question: t.currentQuestion, answer: { ...t.currentAnswer, incomplete: !0 } }] : t.chat,
  (t, e) => ({
    ...t,
    chat: [...t.chat, { question: e.question, answer: e.answer }],
    currentQuestion: "",
    currentAnswer: Di,
    isStreaming: !1
  })
);
ut.writer(
  () => {
  },
  (t) => ({ ...t, chat: t.chat.slice(0, 1) })
);
ut.reader((t) => t.isStreaming);
const fh = ut.reader((t) => !!t.error && t.error.status === 529), kl = ut.writer(
  (t) => t.error,
  (t, e) => (tr.set(!0), {
    ...t,
    error: e
  })
), Ui = new Gt({
  labelSets: {}
});
Ui.writer(
  (t) => t.labelSets,
  (t, e) => ({
    ...t,
    labelSets: e
  })
);
Ui.reader(
  (t) => Object.entries(t.labelSets).map(([e, n]) => ({ ...n, id: e })).sort((e, n) => e.title.localeCompare(n.title))
);
const ln = new Gt({
  query: ""
});
ln.writer(
  (t) => t.query,
  (t, e) => ({
    ...t,
    query: e
  })
);
ln.writer(
  (t) => t.selectedNode,
  (t, e) => ({
    ...t,
    selectedNode: e,
    query: (e == null ? void 0 : e.ner) || ""
  })
);
ln.writer(
  (t) => (t.selectedNodeEdges || []).sort((e, n) => e.relevance < n.relevance ? 1 : e.relevance > n.relevance ? -1 : 0),
  (t, e) => ({
    ...t,
    selectedNodeEdges: e,
    selectedNodeResults: void 0
  })
);
ln.writer(
  (t) => t.selectedNodeResults,
  (t, e) => ({
    ...t,
    selectedNodeResults: e
  })
);
ln.reader(
  (t) => t.selectedNodeResults || []
);
const Ct = xn(null);
Ct.pipe(
  A((t) => t ? Object.entries(t.getAnnotatedEntities()).length > 0 : !1)
);
Ct.pipe(A((t) => t ? t.getClassifications() : []));
Ct.pipe(
  A((t) => t ? t.summary ? [t.summary].concat(t.getExtractedSummaries()) : t.getExtractedSummaries() : []),
  A((t) => t.filter((e) => !!e))
);
Ct.pipe(
  L(
    (t) => t ? Kf(t.getFiles().reduce((e, n) => n.uri ? e.concat(n.uri) : e, [])) : H([])
  )
);
Ct.pipe(
  A(
    (t) => t ? t.getFields(["links"]).map((e) => {
      var n;
      return (n = e.value) == null ? void 0 : n.uri;
    }).filter((e) => !!e) : []
  )
);
Ct.pipe(
  A(
    (t) => t ? t.getFields(["links"]).filter((e) => !hh(e)).map((e) => {
      var n, r;
      return (r = (n = e.extracted) == null ? void 0 : n.link) == null ? void 0 : r.link_preview;
    }).filter((e) => !!e) : []
  )
);
function hh(t) {
  var e;
  return (e = t.value) != null && e.uri ? mu(t.value.uri) : !1;
}
const Sl = new Gt({
  entities: []
});
Sl.writer(
  (t) => t.entities,
  (t, e) => ({
    ...t,
    entities: e
  })
);
const Bi = xn([]), ph = xn("");
ct([
  Bi,
  ph
]).pipe(A(([t, e]) => t.find((n) => n.id === e)));
ct([
  Ct,
  Bi,
  Ft.pipe(se(1))
]).pipe(
  A(
    ([t, e, n]) => t ? El(t.getNamedEntities(), e, n) : []
  )
);
ct([
  Ct,
  Bi,
  Ft.pipe(se(1))
]).pipe(
  A(
    ([t, e, n]) => t ? El(t.getAnnotatedEntities(), e, n) : []
  )
);
function El(t, e, n = (r) => r) {
  return Object.entries(t).map(([r, i]) => {
    const s = e.find((l) => l.id === r), o = yu[r], a = (s == null ? void 0 : s.title) || (o ? `entities.${r.toLowerCase()}` : r);
    return {
      id: r,
      title: a,
      color: (s == null ? void 0 : s.color) || o,
      entities: i.filter((l) => !!l).sort((l, c) => l.localeCompare(c))
    };
  }).sort((r, i) => n(r.title).localeCompare(n(i.title)));
}
const Gn = [];
function gh() {
  Gn.forEach((t) => t.unsubscribe());
}
const vh = (t) => {
  Gn.push(
    gt.pipe(
      L(
        (e) => nr.pipe(
          se(1),
          ae((n) => !n),
          L(() => Ht.pipe(se(1))),
          qe((n) => t ? t("search", n) : void 0),
          qe(() => {
            e != null && e.more || (id.set(0), Ca.set(Date.now()), Cn.set({ results: ka, append: !1 }));
          }),
          L(
            (n) => gr([
              Ea.pipe(se(1)),
              Oa.pipe(se(1)),
              ed.pipe(se(1)),
              yr.pipe(se(1)),
              Ma.pipe(se(1)),
              us.pipe(se(1)),
              wn.pipe(se(1))
            ]).pipe(
              qe(([r]) => {
                r || Dn.set(!0);
              }),
              L(([r, i, s, o, a, l, c]) => {
                const u = {
                  ...i,
                  show: s,
                  filters: o,
                  inTitleOnly: a,
                  ...l ? { autofilter: !1 } : {}
                };
                return c && !(e != null && e.more) ? Al(n, !0, u).pipe(
                  qe((d) => {
                    d.type === "error" && d.status === 402 && !r && (Ru(), gt.next());
                  }),
                  ae((d) => d.type !== "error"),
                  A((d) => d),
                  // Chat is emitting several times until the answer is complete, but the result sources doesn't change while answer is incomplete
                  // So we make sure to emit only when results are changing, preventing to write in the state several times while loading the answer
                  It((d, f) => d.sources === f.sources),
                  A((d) => ({
                    results: d.sources,
                    append: !1,
                    onlyAnswers: r,
                    loadingMore: !1,
                    options: u
                  }))
                ) : Bf(n, u).pipe(
                  A((d) => ({
                    results: d,
                    append: !!(e != null && e.more),
                    onlyAnswers: r,
                    loadingMore: e == null ? void 0 : e.more,
                    options: u
                  }))
                );
              })
            )
          )
        )
      )
    ).subscribe(({ results: e, append: n, onlyAnswers: r, loadingMore: i, options: s }) => {
      e && e.total === 0 && s.autofilter && (e.autofilters || []).length > 0 ? (us.set(!0), gt.next(i ? { more: !0 } : void 0)) : e && (wn && !i ? r || (ni.set(e.searchId), Cn.set({ results: e, append: !1 })) : (n || ni.set(e.searchId), Cn.set({ results: e, append: n })), $a.set(!0));
    })
  ), typeof t == "function" && Gn.push(Cn.subscribe((e) => t("results", e))), Gn.push(
    Fa.pipe(
      ae((e) => !!e),
      It()
    ).subscribe(() => {
      gt.next({ more: !0 });
    })
  );
}, Tn = [];
function _h() {
  Tn.forEach((t) => t.unsubscribe()), gh(), ut.reset(), Sl.reset(), ln.reset(), Ui.reset(), X.reset(), bt.reset(), ee.reset();
}
function mh() {
  const t = Aa.pipe(L(() => tn.pipe(se(1)))), e = ra(
    // Trigger suggestion when hitting space between words
    t.pipe(ae((n) => !!n && n.slice(-1) === " " && n.slice(-2, -1) !== " ")),
    // Trigger suggestion after 350ms of inactivity
    t.pipe(ia(350))
  ).pipe(
    // Don't trigger suggestion after inactivity if only spaces were added at the end of the query
    It((n, r) => n === r),
    L((n) => {
      var i;
      if (!n || n.length <= 2)
        return H({
          results: ei
        });
      const r = (i = ze.getValue()) != null && i.suggestLabels ? [Hs(n), Wf(n)] : [Hs(n), H([])];
      return gr(r).pipe(
        A(([s, o]) => ({
          results: s.type !== "error" ? s : ei,
          labels: o
        }))
      );
    })
  ).subscribe((n) => Pu.set(n));
  Tn.push(e);
}
const yi = mr("query"), Jn = mr("filter"), Kn = mr("titleOnly"), bi = mr("preview"), yh = new Vt();
function bh() {
  Tn.push(
    yh.pipe(
      It(),
      L(({ question: t, reset: e }) => Al(t, e))
    ).subscribe()
  );
}
function wh() {
  kh();
  const t = [
    // When a search is performed, save the query and filters in the current URL
    gt.pipe(
      L(() => nr.pipe(se(1))),
      ae((e) => !e),
      L(() => ct([Ht, yr, Ma]).pipe(se(1)))
    ).subscribe(([e, n, r]) => {
      const i = dn();
      i.set(yi, e), i.delete(Jn), i.delete(Kn), n.forEach((s) => i.append(Jn, s)), i.append(Kn, `${r}`), Fn(i);
    }),
    // Remove search parameters from the URL when search results are reset
    nr.pipe(
      It(),
      oa(1),
      ae((e) => e)
    ).subscribe(() => {
      const e = dn();
      e.delete(yi), e.delete(Jn), e.delete(Kn), Fn(e);
    }),
    // Add current field id in the URL when preview is open
    gl.pipe(
      It(),
      ae((e) => !!e.fieldFullId)
    ).subscribe((e) => {
      var s, o, a;
      const n = `${(s = e.fieldFullId) == null ? void 0 : s.resourceId}|${(o = e.fieldFullId) == null ? void 0 : o.field_type}|${(a = e.fieldFullId) == null ? void 0 : a.field_id}`, r = `${e.selectedParagraphIndex}`, i = dn();
      i.set(bi, `${n}|${r}`), Fn(i);
    }),
    //Remove preview parameters from the URL when preview is closed
    Lf.pipe(
      It(),
      ae((e) => !e)
    ).subscribe(() => {
      const e = dn();
      e.delete(bi), Fn(e);
    })
  ];
  Tn.push(...t);
}
function kh() {
  const t = dn(), e = t.get(yi), n = t.get(Kn) === "true", r = t.getAll(Jn);
  (e || r.length > 0) && (Ht.set(e || ""), yr.set({ filters: r, titleOnly: n }), tn.set(e || ""), gt.next());
  const i = t.get(bi);
  if (i) {
    const [s, o, a, l] = i.split("|"), c = Ri(o);
    s && c && a && ti.pipe(
      se(1),
      L((u) => {
        if (u.length > 0) {
          const d = u.find(
            (f) => {
              var h;
              return f.id === s && ((h = f.field) == null ? void 0 : h.field_id) === a && f.field.field_type === c;
            }
          );
          return H(d);
        } else
          return bl(s, [
            B.BASIC,
            B.ORIGIN,
            B.VALUES
          ]).pipe(
            A((d) => {
              const f = { field_id: a, field_type: c }, h = { ...d, field: f, fieldData: La(d, f) }, { resultType: g, resultIcon: p } = Da(h);
              return {
                ...h,
                resultType: g,
                resultIcon: p
              };
            })
          );
      })
    ).subscribe((u) => {
      const d = l !== "null" ? parseInt(l, 10) : -1;
      u && gl.set({
        result: u,
        selectedParagraphIndex: d
      });
    });
  }
}
function Al(t, e, n = {}) {
  return H({ question: t, reset: e }).pipe(
    qe((r) => ch.set(r)),
    L(
      ({ question: r }) => ur.pipe(
        se(1),
        A((i) => i.filter((s) => !s.answer.incomplete)),
        L(
          (i) => yr.pipe(
            se(1),
            L(
              (s) => qf(r, i, { ...n, filters: s }).pipe(
                qe((o) => {
                  o.type === "error" ? kl.set(o) : o.incomplete ? uh.set(o) : ur.set({ question: r, answer: o });
                })
              )
            )
          )
        )
      )
    )
  );
}
function Sh() {
  Tn.push(
    ja.pipe(
      It(),
      ae((t) => Object.keys(t).length > 0)
    ).subscribe((t) => pl("engage", { ...t }))
  );
}
function Eh(t) {
  Ve(t, "svelte-12v6qxf", ".sw-suggestions.svelte-12v6qxf.svelte-12v6qxf{--suggestion-side-padding:var(--rhythm-3);background:var(--dropdown-background-color)}.sw-suggestions.svelte-12v6qxf .error-message.svelte-12v6qxf{padding:0 var(--rhythm-2)}.sw-suggestions.svelte-12v6qxf section.svelte-12v6qxf{padding:var(--rhythm-2) var(--suggestion-side-padding)}.sw-suggestions.svelte-12v6qxf section.svelte-12v6qxf:not(:last-of-type){border-bottom:1px solid var(--color-neutral-light)}.sw-suggestions.svelte-12v6qxf .paragraph.svelte-12v6qxf{cursor:pointer;font-size:var(--font-size-base);line-height:var(--line-height-body-s);margin:0 calc(var(--suggestion-side-padding) * -1);padding:var(--rhythm-1) var(--suggestion-side-padding)}.sw-suggestions.svelte-12v6qxf .paragraph.svelte-12v6qxf:hover,.sw-suggestions.svelte-12v6qxf .paragraph.svelte-12v6qxf:focus{background-color:var(--hover-background-color);outline:0}");
}
function Xs(t, e, n) {
  const r = t.slice();
  return r[7] = e[n], r;
}
function Ah(t) {
  let e, n, r = (
    /*paragraphs*/
    t[0].slice(0, 4)
  ), i = [];
  for (let s = 0; s < r.length; s += 1)
    i[s] = Ys(Xs(t, r, s));
  return {
    c() {
      e = S("section"), n = S("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      b(e, "class", "svelte-12v6qxf");
    },
    m(s, o) {
      R(s, e, o), x(e, n);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(n, null);
    },
    p(s, o) {
      if (o & /*goToResource, paragraphs*/
      17) {
        r = /*paragraphs*/
        s[0].slice(0, 4);
        let a;
        for (a = 0; a < r.length; a += 1) {
          const l = Xs(s, r, a);
          i[a] ? i[a].p(l, o) : (i[a] = Ys(l), i[a].c(), i[a].m(n, null));
        }
        for (; a < i.length; a += 1)
          i[a].d(1);
        i.length = r.length;
      }
    },
    d(s) {
      s && T(e), fr(i, s);
    }
  };
}
function Ih(t) {
  let e;
  function n(s, o) {
    return (
      /*$suggestionError*/
      s[2].status === 402 ? Th : xh
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = S("div"), i.c(), b(e, "class", "error-message svelte-12v6qxf");
    },
    m(s, o) {
      R(s, e, o), i.m(e, null);
    },
    p(s, o) {
      r === (r = n(s)) && i ? i.p(s, o) : (i.d(1), i = r(s), i && (i.c(), i.m(e, null)));
    },
    d(s) {
      s && T(e), i.d();
    }
  };
}
function Ys(t) {
  let e, n = (
    /*paragraph*/
    t[7].text + ""
  ), r, i, s, o;
  function a() {
    return (
      /*click_handler*/
      t[5](
        /*paragraph*/
        t[7]
      )
    );
  }
  function l(...c) {
    return (
      /*keyup_handler*/
      t[6](
        /*paragraph*/
        t[7],
        ...c
      )
    );
  }
  return {
    c() {
      e = S("div"), r = he(n), i = Q(), b(e, "class", "paragraph svelte-12v6qxf"), b(e, "tabindex", "0");
    },
    m(c, u) {
      R(c, e, u), x(e, r), x(e, i), s || (o = [
        J(e, "click", Ll(a)),
        J(e, "keyup", l)
      ], s = !0);
    },
    p(c, u) {
      t = c, u & /*paragraphs*/
      1 && n !== (n = /*paragraph*/
      t[7].text + "") && Te(r, n);
    },
    d(c) {
      c && T(e), s = !1, Oe(o);
    }
  };
}
function xh(t) {
  let e, n = (
    /*$_*/
    t[3]("error.search") + ""
  ), r;
  return {
    c() {
      e = S("strong"), r = he(n);
    },
    m(i, s) {
      R(i, e, s), x(e, r);
    },
    p(i, s) {
      s & /*$_*/
      8 && n !== (n = /*$_*/
      i[3]("error.search") + "") && Te(r, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Th(t) {
  let e, n = (
    /*$_*/
    t[3]("error.feature-blocked") + ""
  ), r;
  return {
    c() {
      e = S("p"), r = he(n);
    },
    m(i, s) {
      R(i, e, s), x(e, r);
    },
    p(i, s) {
      s & /*$_*/
      8 && n !== (n = /*$_*/
      i[3]("error.feature-blocked") + "") && Te(r, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Rh(t) {
  let e;
  function n(s, o) {
    if (
      /*$suggestionsHasError*/
      s[1]
    )
      return Ih;
    if (
      /*paragraphs*/
      s[0].length > 0
    )
      return Ah;
  }
  let r = n(t), i = r && r(t);
  return {
    c() {
      e = S("div"), i && i.c(), b(e, "class", "sw-suggestions svelte-12v6qxf");
    },
    m(s, o) {
      R(s, e, o), i && i.m(e, null);
    },
    p(s, [o]) {
      r === (r = n(s)) && i ? i.p(s, o) : (i && i.d(1), i = r && r(s), i && (i.c(), i.m(e, null)));
    },
    i: z,
    o: z,
    d(s) {
      s && T(e), i && i.d();
    }
  };
}
function Ph(t, e, n) {
  let r, i, s;
  q(t, xa, (u) => n(1, r = u)), q(t, Ia, (u) => n(2, i = u)), q(t, Ft, (u) => n(3, s = u));
  let { paragraphs: o = [] } = e;
  const a = (u) => {
    bl(u.rid, [
      B.BASIC,
      B.ORIGIN,
      B.VALUES
    ]).subscribe((d) => {
      var f, h, g, p, _, v;
      (f = d.origin) != null && f.url ? Yr(d.origin.url) : (_ = (p = (g = (h = d.data) == null ? void 0 : h.links) == null ? void 0 : g.link) == null ? void 0 : p.value) != null && _.uri ? Yr((v = d.data) == null ? void 0 : v.links.link.value.uri) : console.log(d.data);
    });
  }, l = (u) => a(u), c = (u, d) => {
    d.key === "Enter" && a(u);
  };
  return t.$$set = (u) => {
    "paragraphs" in u && n(0, o = u.paragraphs);
  }, [
    o,
    r,
    i,
    s,
    a,
    l,
    c
  ];
}
class Oh extends je {
  constructor(e) {
    super(), Ce(this, e, Ph, Rh, Fe, { paragraphs: 0 }, Eh);
  }
}
function Fh(t) {
  Ve(t, "svelte-1t3kt48", ".sw-button.svelte-1t3kt48{background:var(--button-background-color);border:none;border-radius:var(--border-radius);color:var(--button-color);display:inline-flex;font-family:inherit;font-size:var(--font-size-base);justify-content:center;line-height:var(--line-height-body);margin:0;outline:0;padding:var(--rhythm-1) var(--rhythm-2);transition:background-color var(--transition-superfast), box-shadow var(--transition-superfast), color var(--transition-superfast);white-space:nowrap}.sw-button.svelte-1t3kt48:focus-visible{box-shadow:var(--focus-shadow);outline:0}.sw-button.icon.svelte-1t3kt48{border-radius:50%;padding:var(--rhythm-1)}.sw-button.svelte-1t3kt48:not(:disabled){cursor:pointer}.sw-button.svelte-1t3kt48:not(:disabled):hover{background:var(--button-background-color-hover);color:var(--button-color-hover)}.sw-button.svelte-1t3kt48:not(:disabled):active,.sw-button:not(:disabled).active.svelte-1t3kt48{background:var(--button-background-color-active);color:var(--button-color-active)}.sw-button.svelte-1t3kt48:not(.small):not(.xsmall):not(.icon){min-width:var(--rhythm-12)}.sw-button.small.svelte-1t3kt48:not(.icon),.sw-button.xsmall.svelte-1t3kt48:not(.icon){font-size:calc(var(--font-size-base) * 0.75);line-height:var(--rhythm-3);padding:var(--rhythm-0_5) var(--rhythm-2)}.sw-button.xsmall.icon.svelte-1t3kt48,.sw-button.small.icon.svelte-1t3kt48{padding:var(--rhythm-0_5)}.sw-button.large.svelte-1t3kt48{padding:var(--rhythm-1_5)}.sw-button.solid.primary.svelte-1t3kt48{--button-background-color:var(--color-primary-regular);--button-background-color-hover:var(--color-primary-strong);--button-background-color-active:var(--color-primary-stronger);--button-color:var(--color-light-stronger);--button-color-hover:var(--color-light-stronger);--button-color-active:var(--color-light-stronger)}.sw-button.solid.secondary.svelte-1t3kt48{--button-background-color:var(--color-dark-stronger);--button-background-color-hover:var(--color-dark-stronger);--button-background-color-active:var(--color-neutral-light);--button-color:var(--color-light-stronger);--button-color-hover:var(--color-light-stronger);--button-color-active:var(--color-light-stronger)}.sw-button.solid.svelte-1t3kt48:disabled{--button-background-color:var(--color-neutral-lighter);--button-color:var(--color-light-stronger)}.sw-button.basic.primary.svelte-1t3kt48{--button-background-color:transparent;--button-background-color-hover:var(--color-primary-lightest);--button-background-color-active:var(--color-primary-lighter);--button-color:var(--color-primary-regular);--button-color-hover:var(--color-primary-regular);--button-color-active:var(--color-primary-regular)}.sw-button.basic.secondary.svelte-1t3kt48{--button-background-color:transparent;--button-background-color-hover:var(--color-neutral-light);--button-background-color-active:var(--color-neutral-regular);--button-color:inherit;--button-color-hover:inherit;--button-color-active:var(--color-light-stronger)}.sw-button.basic.svelte-1t3kt48:disabled{--button-color:var(--color-neutral-light)}");
}
function Ch(t) {
  let e, n, r, i, s, o;
  return n = new wl({
    props: {
      name: (
        /*icon*/
        t[0]
      ),
      size: (
        /*iconSize*/
        t[7]
      )
    }
  }), {
    c() {
      e = S("button"), le(n.$$.fragment), b(e, "class", r = "sw-button icon " + /*aspect*/
      t[2] + " " + /*kind*/
      t[3] + " " + /*size*/
      t[4] + " svelte-1t3kt48"), b(e, "type", "button"), b(
        e,
        "aria-label",
        /*ariaLabel*/
        t[1]
      ), b(e, "tabindex", "0"), e.disabled = /*disabled*/
      t[5], V(
        e,
        "active",
        /*active*/
        t[6]
      );
    },
    m(a, l) {
      R(a, e, l), oe(n, e, null), i = !0, s || (o = [
        J(
          e,
          "click",
          /*click_handler*/
          t[9]
        ),
        J(
          e,
          "keyup",
          /*onKeyup*/
          t[8]
        )
      ], s = !0);
    },
    p(a, [l]) {
      const c = {};
      l & /*icon*/
      1 && (c.name = /*icon*/
      a[0]), l & /*iconSize*/
      128 && (c.size = /*iconSize*/
      a[7]), n.$set(c), (!i || l & /*aspect, kind, size*/
      28 && r !== (r = "sw-button icon " + /*aspect*/
      a[2] + " " + /*kind*/
      a[3] + " " + /*size*/
      a[4] + " svelte-1t3kt48")) && b(e, "class", r), (!i || l & /*ariaLabel*/
      2) && b(
        e,
        "aria-label",
        /*ariaLabel*/
        a[1]
      ), (!i || l & /*disabled*/
      32) && (e.disabled = /*disabled*/
      a[5]), (!i || l & /*aspect, kind, size, active*/
      92) && V(
        e,
        "active",
        /*active*/
        a[6]
      );
    },
    i(a) {
      i || (w(n.$$.fragment, a), i = !0);
    },
    o(a) {
      P(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && T(e), re(n), s = !1, Oe(o);
    }
  };
}
function $h(t, e, n) {
  let r, { icon: i = "" } = e, { ariaLabel: s = "" } = e, { aspect: o = "solid" } = e, { kind: a = "secondary" } = e, { size: l = "medium" } = e, { disabled: c = !1 } = e, { active: u = !1 } = e;
  const d = Ot();
  function f(g) {
    g.key === "Enter" && d("enter");
  }
  function h(g) {
    ki.call(this, t, g);
  }
  return t.$$set = (g) => {
    "icon" in g && n(0, i = g.icon), "ariaLabel" in g && n(1, s = g.ariaLabel), "aspect" in g && n(2, o = g.aspect), "kind" in g && n(3, a = g.kind), "size" in g && n(4, l = g.size), "disabled" in g && n(5, c = g.disabled), "active" in g && n(6, u = g.active);
  }, t.$$.update = () => {
    t.$$.dirty & /*size*/
    16 && n(7, r = l === "xsmall" ? "small" : "medium");
  }, [
    i,
    s,
    o,
    a,
    l,
    c,
    u,
    r,
    f,
    h
  ];
}
class dr extends je {
  constructor(e) {
    super(), Ce(
      this,
      e,
      $h,
      Ch,
      Fe,
      {
        icon: 0,
        ariaLabel: 1,
        aspect: 2,
        kind: 3,
        size: 4,
        disabled: 5,
        active: 6
      },
      Fh
    );
  }
}
function jh(t) {
  Ve(t, "svelte-kh2ok6", ".sw-search-input.svelte-kh2ok6.svelte-kh2ok6{display:flex;flex-direction:column;position:relative}.sw-search-input.svelte-kh2ok6 .input-container.svelte-kh2ok6{align-items:center;box-sizing:border-box;display:flex;flex:1 0 auto;position:relative}.sw-search-input.svelte-kh2ok6 input.svelte-kh2ok6{background-color:inherit;border:0;box-sizing:border-box;color:inherit;font-family:inherit;font-size:var(--font-size-base);font-weight:var(--font-weight-body);line-height:calc(var(--line-height-body) * 1.5);outline:none;text-overflow:ellipsis;width:100%;-webkit-appearance:none}.sw-search-input.svelte-kh2ok6 input.svelte-kh2ok6::placeholder{color:var(--color-neutral-regular);transition:all 0s ease}.sw-search-input.search-bar-widget.svelte-kh2ok6.svelte-kh2ok6{height:var(--rhythm-6)}.sw-search-input.search-bar-widget.svelte-kh2ok6 .input-container.svelte-kh2ok6{padding-left:var(--rhythm-5);padding-right:var(--rhythm-1)}.sw-search-input.svelte-kh2ok6 .search-icon-container.svelte-kh2ok6{left:var(--rhythm-0_5);position:absolute;top:50%;transform:translateY(-50%)}.sw-search-input.svelte-kh2ok6 .search-icon-container .search-icon.svelte-kh2ok6{display:flex;padding:var(--rhythm-1_5) var(--rhythm-0_5)}");
}
function Mh(t) {
  let e, n, r;
  return n = new wl({ props: { name: "search" } }), {
    c() {
      e = S("div"), le(n.$$.fragment), b(e, "class", "search-icon svelte-kh2ok6");
    },
    m(i, s) {
      R(i, e, s), oe(n, e, null), r = !0;
    },
    p: z,
    i(i) {
      r || (w(n.$$.fragment, i), r = !0);
    },
    o(i) {
      P(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && T(e), re(n);
    }
  };
}
function Nh(t) {
  let e, n;
  return e = new dr({
    props: {
      aspect: "basic",
      icon: "cross",
      ariaLabel: (
        /*$_*/
        t[6]("input.clear")
      ),
      size: "small"
    }
  }), e.$on(
    "click",
    /*clear*/
    t[15]
  ), e.$on(
    "enter",
    /*clear*/
    t[15]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$_*/
      64 && (s.ariaLabel = /*$_*/
      r[6]("input.clear")), e.$set(s);
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function Lh(t) {
  let e, n, r;
  return n = new Oh({
    props: {
      paragraphs: (
        /*$suggestedParagraphs*/
        t[10]
      )
    }
  }), n.$on(
    "search",
    /*search_handler*/
    t[20]
  ), {
    c() {
      e = S("div"), le(n.$$.fragment), b(e, "class", "sw-suggestions-container");
    },
    m(i, s) {
      R(i, e, s), oe(n, e, null), r = !0;
    },
    p(i, s) {
      const o = {};
      s & /*$suggestedParagraphs*/
      1024 && (o.paragraphs = /*$suggestedParagraphs*/
      i[10]), n.$set(o);
    },
    i(i) {
      r || (w(n.$$.fragment, i), r = !0);
    },
    o(i) {
      P(n.$$.fragment, i), r = !1;
    },
    d(i) {
      i && T(e), re(n);
    }
  };
}
function zh(t) {
  let e, n, r, i, s, o, a, l, c, u, d, f, h;
  const g = [Nh, Mh], p = [];
  function _(v, m) {
    return (
      /*$typeAhead*/
      v[5].length > 0 ? 0 : 1
    );
  }
  return i = _(t), s = p[i] = g[i](t), u = new lh({
    props: {
      show: (
        /*showSuggestions*/
        t[3] && /*$hasSuggestions*/
        (t[8] || /*$suggestionsHasError*/
        t[9])
      ),
      popup: !0,
      parentPosition: (
        /*position*/
        t[2]
      ),
      modalWidth: (
        /*suggestionModalWidth*/
        t[4]
      ),
      $$slots: { default: [Lh] },
      $$scope: { ctx: t }
    }
  }), u.$on(
    "close",
    /*closeSuggestions*/
    t[14]
  ), {
    c() {
      e = S("form"), n = S("div"), r = S("div"), s.c(), o = Q(), a = S("input"), c = Q(), le(u.$$.fragment), b(r, "class", "search-icon-container svelte-kh2ok6"), b(a, "class", "search-field svelte-kh2ok6"), b(a, "name", "nuclia-search-field"), b(a, "placeholder", l = /*$_*/
      t[6](
        /*$widgetPlaceholder*/
        t[7]
      )), b(a, "tabindex", "0"), b(a, "autocomplete", "off"), b(a, "autocapitalize", "off"), b(a, "spellcheck", "false"), b(a, "aria-label", "Search input"), b(n, "class", "input-container svelte-kh2ok6"), b(e, "role", "search"), b(e, "autocomplete", "off"), b(e, "class", "sw-search-input search-bar-widget svelte-kh2ok6");
    },
    m(v, m) {
      R(v, e, m), x(e, n), x(n, r), p[i].m(r, null), x(n, o), x(n, a), t[16](a), Ji(
        a,
        /*$typeAhead*/
        t[5]
      ), t[19](e), R(v, c, m), oe(u, v, m), d = !0, f || (h = [
        J(
          window,
          "resize",
          /*setInputPosition*/
          t[11]
        ),
        J(
          a,
          "input",
          /*input_input_handler*/
          t[17]
        ),
        J(
          a,
          "input",
          /*input_handler*/
          t[18]
        ),
        J(
          a,
          "keypress",
          /*onKeyPress*/
          t[13]
        )
      ], f = !0);
    },
    p(v, [m]) {
      let F = i;
      i = _(v), i === F ? p[i].p(v, m) : (ge(), P(p[F], 1, 1, () => {
        p[F] = null;
      }), ve(), s = p[i], s ? s.p(v, m) : (s = p[i] = g[i](v), s.c()), w(s, 1), s.m(r, null)), (!d || m & /*$_, $widgetPlaceholder*/
      192 && l !== (l = /*$_*/
      v[6](
        /*$widgetPlaceholder*/
        v[7]
      ))) && b(a, "placeholder", l), m & /*$typeAhead*/
      32 && a.value !== /*$typeAhead*/
      v[5] && Ji(
        a,
        /*$typeAhead*/
        v[5]
      );
      const y = {};
      m & /*showSuggestions, $hasSuggestions, $suggestionsHasError*/
      776 && (y.show = /*showSuggestions*/
      v[3] && /*$hasSuggestions*/
      (v[8] || /*$suggestionsHasError*/
      v[9])), m & /*position*/
      4 && (y.parentPosition = /*position*/
      v[2]), m & /*suggestionModalWidth*/
      16 && (y.modalWidth = /*suggestionModalWidth*/
      v[4]), m & /*$$scope, $suggestedParagraphs*/
      4195328 && (y.$$scope = { dirty: m, ctx: v }), u.$set(y);
    },
    i(v) {
      d || (w(s), w(u.$$.fragment, v), d = !0);
    },
    o(v) {
      P(s), P(u.$$.fragment, v), d = !1;
    },
    d(v) {
      v && T(e), p[i].d(), t[16](null), t[19](null), v && T(c), re(u, v), f = !1, Oe(h);
    }
  };
}
function Dh(t, e, n) {
  let r, i, s, o, a, l;
  q(t, tn, (j) => n(5, r = j)), q(t, Ft, (j) => n(6, i = j)), q(t, Sa, (j) => n(7, s = j)), q(t, Cu, (j) => n(8, o = j)), q(t, xa, (j) => n(9, a = j)), q(t, Ta, (j) => n(10, l = j));
  let c;
  const u = Ot();
  let d, f, h = !1, g;
  Sn(() => {
    c == null || c.focus();
  });
  const p = () => {
    d && n(2, f = d.getBoundingClientRect());
  }, _ = () => {
    Ht.set(tn.getValue()), gt.next(), u("search"), c.blur();
  }, v = (j) => {
    j.key === "Enter" ? (j.preventDefault(), _(), n(3, h = !1)) : (n(3, h = !0), p());
  }, m = () => {
    n(3, h = !1);
  };
  function F() {
    bt.reset(), Ht.set("");
  }
  function y(j) {
    Tt[j ? "unshift" : "push"](() => {
      c = j, n(1, c);
    });
  }
  function k() {
    r = this.value, tn.set(r);
  }
  const I = () => Aa.next();
  function $(j) {
    Tt[j ? "unshift" : "push"](() => {
      d = j, n(0, d);
    });
  }
  const O = () => _();
  return t.$$.update = () => {
    t.$$.dirty & /*inputContainerElement*/
    1 && d && n(4, g = `${d.offsetWidth}px`);
  }, [
    d,
    c,
    f,
    h,
    g,
    r,
    i,
    s,
    o,
    a,
    l,
    p,
    _,
    v,
    m,
    F,
    y,
    k,
    I,
    $,
    O
  ];
}
class Uh extends je {
  constructor(e) {
    super(), Ce(this, e, Dh, zh, Fe, {}, jh);
  }
}
const Bh = `a{color:var(--link-color)}mark{background-color:inherit;color:inherit;font-weight:var(--font-weight-medium)}mark[family]{background-color:var(--color-neutral-lighter);cursor:pointer;font-weight:var(--font-weight-body);padding:0 var(--rhythm-0_5)}mark.ner[family]{cursor:auto;padding:0;background-color:transparent}.ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.highlight{background-color:var(--selected-background-color);color:var(--selected-text-color);border-radius:0}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}[tabindex="-1"]:focus{outline:0!important}:focus:not(:focus-visible){outline:none}.sw-dropdown ul{list-style:none;margin:0;max-height:var(--rhythm-32);overflow-x:hidden;overflow-y:auto;padding-left:0}ul.sw-dropdown-options li{cursor:pointer;line-height:var(--rhythm-5);padding:0 var(--rhythm-2)}ul.sw-dropdown-options li:hover{background-color:var(--hover-background-color)}ul.sw-dropdown-options li.selected{background-color:var(--selected-background-color);color:var(--selected-text-color)}.sw-dropdown-options .filter-option{align-items:center;display:flex;flex-direction:row;gap:var(--rhythm-1);justify-content:space-between}.sw-dropdown-options .filter-option .filter-title{flex:1 1 0}.sw-dropdown-options .filter-option .filter-color{flex:0 0 auto;height:var(--rhythm-1);width:var(--rhythm-1)}.sw-text-rendering{background:var(--container-background-color);margin:0 auto;max-width:800px;padding:var(--rhythm-1) var(--rhythm-2)}.sw-text-rendering p{padding:var(--rhythm-1) var(--rhythm-2)}.external-html-content p{margin-top:0}.external-html-content p:last-child{margin-bottom:0}.external-html-content h1,.external-html-content h2,.external-html-content h3,.external-html-content h4,.external-html-content h5,.external-html-content h6{line-height:100%}.external-html-content h1:first-child,.external-html-content h2:first-child,.external-html-content h3:first-child,.external-html-content h4:first-child,.external-html-content h5:first-child,.external-html-content h6:first-child{margin-top:0}.sw-paragraphs-container{display:flex;flex-direction:column;gap:var(--paragraph-gap);list-style:none;margin:0;padding:0}.title-m{font-size:var(--font-size-title-m);font-weight:var(--font-weight-title-m);line-height:var(--line-height-title-m)}.title-xs{font-size:var(--font-size-medium);font-weight:var(--font-weight-semi-bold);line-height:var(--line-height-title-xs)}.title-xxs{font-size:var(--font-size-small);font-weight:var(--font-weight-semi-bold);line-height:var(--line-height-title-xxs)}.title-s{font-size:var(--font-size-medium);font-weight:var(--font-weight-semi-bold);line-height:var(--line-height-title-s)}.body-m{font-size:var(--font-size-medium);font-weight:var(--font-weight-body);line-height:var(--line-height-body)}.body-s{font-size:var(--font-size-small);font-weight:var(--font-weight-body);line-height:var(--line-height-body)}.body-xs{font-size:var(--font-size-xsmall);font-weight:var(--font-weight-body);line-height:var(--line-height-body-xs)}pre>code{white-space:pre-wrap}
`;
function qh(t) {
  Ve(t, "svelte-1yq6144", ".sw-loading-dots.svelte-1yq6144.svelte-1yq6144{align-content:center;display:flex;gap:var(--rhythm-1);justify-content:center}.sw-loading-dots.svelte-1yq6144.svelte-1yq6144:not(.small){margin:var(--rhythm-12) auto 0;text-align:center}.sw-loading-dots.svelte-1yq6144>div.svelte-1yq6144{width:var(--rhythm-2);height:var(--rhythm-2);background-color:var(--color-primary-regular);border-radius:100%;display:inline-block;-webkit-animation:svelte-1yq6144-sk-bouncedelay 1.4s infinite ease-in-out both;animation:svelte-1yq6144-sk-bouncedelay 1.4s infinite ease-in-out both}.sw-loading-dots.small.svelte-1yq6144.svelte-1yq6144{gap:var(--rhythm-0_5)}.sw-loading-dots.small.svelte-1yq6144>div.svelte-1yq6144{width:calc(var(--rhythm-0_5) + var(--rhythm-0_25));height:calc(var(--rhythm-0_5) + var(--rhythm-0_25))}.sw-loading-dots.svelte-1yq6144 .bounce1.svelte-1yq6144{-webkit-animation-delay:-0.32s;animation-delay:-0.32s}.sw-loading-dots.svelte-1yq6144 .bounce2.svelte-1yq6144{-webkit-animation-delay:-0.16s;animation-delay:-0.16s}@-webkit-keyframes svelte-1yq6144-sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes svelte-1yq6144-sk-bouncedelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}");
}
function Hh(t) {
  let e, n, r;
  return {
    c() {
      e = S("div"), e.textContent = "Loading", n = Q(), r = S("div"), r.innerHTML = `<div class="bounce1 svelte-1yq6144"></div> 
  <div class="bounce2 svelte-1yq6144"></div> 
  <div class="bounce3 svelte-1yq6144"></div>`, b(e, "class", "sr-only"), b(r, "class", "sw-loading-dots svelte-1yq6144"), V(
        r,
        "small",
        /*small*/
        t[0]
      );
    },
    m(i, s) {
      R(i, e, s), R(i, n, s), R(i, r, s);
    },
    p(i, [s]) {
      s & /*small*/
      1 && V(
        r,
        "small",
        /*small*/
        i[0]
      );
    },
    i: z,
    o: z,
    d(i) {
      i && T(e), i && T(n), i && T(r);
    }
  };
}
function Wh(t, e, n) {
  let { small: r = !1 } = e;
  return t.$$set = (i) => {
    "small" in i && n(0, r = i.small);
  }, [r];
}
class Vh extends je {
  constructor(e) {
    super(), Ce(this, e, Wh, Hh, Fe, { small: 0 }, qh);
  }
}
function Gh(t) {
  Ve(t, "svelte-p0cmbw", ".sw-expander.svelte-p0cmbw .expander-content.svelte-p0cmbw{overflow:hidden}.sw-expander.svelte-p0cmbw .header.svelte-p0cmbw{align-items:center;cursor:pointer;display:flex;gap:var(--rhythm-0_5)}.sw-expander.svelte-p0cmbw .header .expander-icon.svelte-p0cmbw{transition:transform var(--transition-superfast)}.sw-expander.svelte-p0cmbw .header.expanded .expander-icon.svelte-p0cmbw{transform:rotate(90deg)}");
}
const Jh = (t) => ({}), Zs = (t) => ({});
function Kh(t) {
  let e, n, r, i, s, o, a, l, c = `${/*contentHeight*/
  t[4]}px`, u, d, f;
  i = new dr({
    props: {
      icon: "chevron-right",
      size: "small",
      aspect: "basic"
    }
  });
  const h = (
    /*#slots*/
    t[6].header
  ), g = qr(
    h,
    t,
    /*$$scope*/
    t[5],
    Zs
  ), p = (
    /*#slots*/
    t[6].default
  ), _ = qr(
    p,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = S("div"), n = S("div"), r = S("span"), le(i.$$.fragment), s = Q(), g && g.c(), o = Q(), a = S("div"), l = S("div"), _ && _.c(), b(r, "class", "expander-icon svelte-p0cmbw"), b(n, "class", "header svelte-p0cmbw"), V(
        n,
        "expanded",
        /*expanded*/
        t[0]
      ), b(a, "class", "expander-content svelte-p0cmbw"), Ie(a, "height", c), Ie(
        a,
        "display",
        /*showContent*/
        t[3] ? "block" : "none"
      ), Ie(a, "transition", `height ${/*duration*/
      t[1]}ms`), b(e, "class", "sw-expander svelte-p0cmbw");
    },
    m(v, m) {
      R(v, e, m), x(e, n), x(n, r), oe(i, r, null), x(n, s), g && g.m(n, null), x(e, o), x(e, a), x(a, l), _ && _.m(l, null), t[9](l), u = !0, d || (f = [
        J(
          n,
          "click",
          /*click_handler*/
          t[7]
        ),
        J(
          n,
          "keypress",
          /*keypress_handler*/
          t[8]
        )
      ], d = !0);
    },
    p(v, [m]) {
      g && g.p && (!u || m & /*$$scope*/
      32) && Wr(
        g,
        h,
        v,
        /*$$scope*/
        v[5],
        u ? Hr(
          h,
          /*$$scope*/
          v[5],
          m,
          Jh
        ) : Vr(
          /*$$scope*/
          v[5]
        ),
        Zs
      ), (!u || m & /*expanded*/
      1) && V(
        n,
        "expanded",
        /*expanded*/
        v[0]
      ), _ && _.p && (!u || m & /*$$scope*/
      32) && Wr(
        _,
        p,
        v,
        /*$$scope*/
        v[5],
        u ? Hr(
          p,
          /*$$scope*/
          v[5],
          m,
          null
        ) : Vr(
          /*$$scope*/
          v[5]
        ),
        null
      ), m & /*contentHeight*/
      16 && c !== (c = `${/*contentHeight*/
      v[4]}px`) && Ie(a, "height", c), m & /*showContent*/
      8 && Ie(
        a,
        "display",
        /*showContent*/
        v[3] ? "block" : "none"
      ), m & /*duration*/
      2 && Ie(a, "transition", `height ${/*duration*/
      v[1]}ms`);
    },
    i(v) {
      u || (w(i.$$.fragment, v), w(g, v), w(_, v), u = !0);
    },
    o(v) {
      P(i.$$.fragment, v), P(g, v), P(_, v), u = !1;
    },
    d(v) {
      v && T(e), re(i), g && g.d(v), _ && _.d(v), t[9](null), d = !1, Oe(f);
    }
  };
}
function Qh(t, e, n) {
  let { $$slots: r = {}, $$scope: i } = e, { expanded: s = !1 } = e, { duration: o = 300 } = e;
  const a = Ot();
  let l, c = !1, u = 0;
  Sn(() => {
    const _ = new ResizeObserver((v) => {
      v[0].contentRect.height !== u && n(4, u = v[0].contentRect.height);
    });
    return _.observe(l), () => {
      _.disconnect();
    };
  });
  const d = async () => {
    n(3, c = !0), await Wl(), n(4, u = l.getBoundingClientRect().height), setTimeout(() => a("toggleExpander", { expanded: !0 }), o);
  }, f = () => {
    n(4, u = 0), setTimeout(
      () => {
        n(3, c = !1), a("toggleExpander", { expanded: !1 });
      },
      o
    );
  }, h = () => n(0, s = !s), g = (_) => {
    _.key === "Enter" && n(0, s = !s);
  };
  function p(_) {
    Tt[_ ? "unshift" : "push"](() => {
      l = _, n(2, l);
    });
  }
  return t.$$set = (_) => {
    "expanded" in _ && n(0, s = _.expanded), "duration" in _ && n(1, o = _.duration), "$$scope" in _ && n(5, i = _.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*expanded*/
    1 && (s ? d() : f());
  }, [
    s,
    o,
    l,
    c,
    u,
    i,
    r,
    h,
    g,
    p
  ];
}
class Xh extends je {
  constructor(e) {
    super(), Ce(this, e, Qh, Kh, Fe, { expanded: 0, duration: 1 }, Gh);
  }
}
function eo(t) {
  let e, n, r, i;
  return e = new dr({
    props: {
      aspect: "basic",
      icon: "smiley-happy",
      active: (
        /*isGood*/
        t[2]
      ),
      size: "small",
      kind: (
        /*isGood*/
        t[2] ? "primary" : "secondary"
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), r = new dr({
    props: {
      aspect: "basic",
      icon: "smiley-sad",
      active: (
        /*isBad*/
        t[1]
      ),
      size: "small",
      kind: (
        /*isBad*/
        t[1] ? "primary" : "secondary"
      )
    }
  }), r.$on(
    "click",
    /*click_handler_1*/
    t[7]
  ), {
    c() {
      le(e.$$.fragment), n = Q(), le(r.$$.fragment);
    },
    m(s, o) {
      oe(e, s, o), R(s, n, o), oe(r, s, o), i = !0;
    },
    p(s, o) {
      const a = {};
      o & /*isGood*/
      4 && (a.active = /*isGood*/
      s[2]), o & /*isGood*/
      4 && (a.kind = /*isGood*/
      s[2] ? "primary" : "secondary"), e.$set(a);
      const l = {};
      o & /*isBad*/
      2 && (l.active = /*isBad*/
      s[1]), o & /*isBad*/
      2 && (l.kind = /*isBad*/
      s[1] ? "primary" : "secondary"), r.$set(l);
    },
    i(s) {
      i || (w(e.$$.fragment, s), w(r.$$.fragment, s), i = !0);
    },
    o(s) {
      P(e.$$.fragment, s), P(r.$$.fragment, s), i = !1;
    },
    d(s) {
      re(e, s), s && T(n), re(r, s);
    }
  };
}
function Yh(t) {
  var i;
  let e, n, r = !/*$chat*/
  ((i = t[3][
    /*rank*/
    t[0]
  ]) != null && i.answer.incomplete) && eo(t);
  return {
    c() {
      r && r.c(), e = ot();
    },
    m(s, o) {
      r && r.m(s, o), R(s, e, o), n = !0;
    },
    p(s, [o]) {
      var a;
      /*$chat*/
      (a = s[3][
        /*rank*/
        s[0]
      ]) != null && a.answer.incomplete ? r && (ge(), P(r, 1, 1, () => {
        r = null;
      }), ve()) : r ? (r.p(s, o), o & /*$chat, rank*/
      9 && w(r, 1)) : (r = eo(s), r.c(), w(r, 1), r.m(e.parentNode, e));
    },
    i(s) {
      n || (w(r), n = !0);
    },
    o(s) {
      P(r), n = !1;
    },
    d(s) {
      r && r.d(s), s && T(e);
    }
  };
}
function Zh(t, e, n) {
  let r, i, s;
  q(t, ur, (d) => n(3, s = d));
  let { rank: o = 0 } = e, a = "";
  function l(d) {
    ur.pipe(se(1), L((f) => Hf(f[o].answer, d))).subscribe(() => n(5, a = d ? "good" : "bad"));
  }
  const c = () => l(!0), u = () => l(!1);
  return t.$$set = (d) => {
    "rank" in d && n(0, o = d.rank);
  }, t.$$.update = () => {
    t.$$.dirty & /*approved*/
    32 && n(2, r = a === "good"), t.$$.dirty & /*approved*/
    32 && n(1, i = a === "bad");
  }, [o, i, r, s, l, a, c, u];
}
class Il extends je {
  constructor(e) {
    super(), Ce(this, e, Zh, Yh, Fe, { rank: 0 });
  }
}
function ep(t) {
  return t < 448;
}
function tp(t) {
  let e;
  return {
    c() {
      e = S("div"), Ie(e, "width", "0px");
    },
    m(n, r) {
      R(n, e, r), t[2](e);
    },
    p: z,
    i: z,
    o: z,
    d(n) {
      n && T(e), t[2](null);
    }
  };
}
function np(t, e, n) {
  let { hasMore: r = !0 } = e;
  const i = Ot();
  let s = !1, o;
  Sn(() => {
    document.addEventListener("scroll", l), document.addEventListener("resize", l);
  });
  const a = (u) => {
    const d = u.getBoundingClientRect();
    return d.top >= 0 && d.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }, l = () => {
    o && a(o) ? (!s && r && i("loadMore"), s = !0) : s = !1;
  };
  Hl(() => {
    document.removeEventListener("scroll", l, !0), document.removeEventListener("resize", l, !0);
  });
  function c(u) {
    Tt[u ? "unshift" : "push"](() => {
      o = u, n(0, o);
    });
  }
  return t.$$set = (u) => {
    "hasMore" in u && n(1, r = u.hasMore);
  }, [o, r, c];
}
class rp extends je {
  constructor(e) {
    super(), Ce(this, e, np, tp, Fe, { hasMore: 1 });
  }
}
function ip(t) {
  Ve(t, "svelte-1g97jfd", ".sw-paragraph-result.svelte-1g97jfd.svelte-1g97jfd{--expander-width:var(--rhythm-3);align-items:start;display:flex}.sw-paragraph-result.svelte-1g97jfd .paragraph-result-container.svelte-1g97jfd{display:flex;font-size:var(--font-size-medium);gap:var(--rhythm-1);line-height:var(--rhythm-2_5);transition:background-color var(--transition-superfast), color var(--transition-superfast);width:calc(100% - var(--expander-width))}.sw-paragraph-result.svelte-1g97jfd .paragraph-result-container:not(.stack).no-indicator.svelte-1g97jfd{margin-left:calc(var(--rhythm-1) * -1);padding-left:var(--rhythm-1)}.sw-paragraph-result.svelte-1g97jfd .paragraph-result-container.stack.svelte-1g97jfd{flex-direction:column;gap:var(--rhythm-0_5);padding:var(--rhythm-2)}.sw-paragraph-result.svelte-1g97jfd .paragraph-result-container.selected.svelte-1g97jfd{background:var(--selected-background-color);color:var(--selected-text-color)}.sw-paragraph-result.svelte-1g97jfd .paragraph-result-container.svelte-1g97jfd:not(.disabled){cursor:pointer}.sw-paragraph-result.svelte-1g97jfd .paragraph-result-container .paragraph-text.svelte-1g97jfd{display:-webkit-box;overflow:hidden;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical}");
}
function sp(t) {
  let e, n, r, i = (
    /*paragraph*/
    t[0].text.trim() + ""
  ), s, o;
  return {
    c() {
      e = S("li"), n = S("div"), r = S("div"), b(r, "class", "paragraph-text svelte-1g97jfd"), V(
        r,
        "ellipsis",
        /*ellipsis*/
        t[2]
      ), b(n, "class", "paragraph-result-container svelte-1g97jfd"), V(
        n,
        "no-indicator",
        /*noIndicator*/
        t[4]
      ), V(
        n,
        "stack",
        /*stack*/
        t[1]
      ), V(
        n,
        "selected",
        /*selected*/
        t[3]
      ), V(
        n,
        "disabled",
        /*disabled*/
        t[5]
      ), b(e, "class", "sw-paragraph-result svelte-1g97jfd");
    },
    m(a, l) {
      R(a, e, l), x(e, n), x(n, r), r.innerHTML = i, t[10](r), s || (o = [
        J(
          n,
          "mouseenter",
          /*mouseenter_handler*/
          t[11]
        ),
        J(
          n,
          "mouseleave",
          /*mouseleave_handler*/
          t[12]
        ),
        J(n, "click", function() {
          nn(
            /*disabled*/
            t[5] ? null : (
              /*open*/
              t[8]
            )
          ) && /*disabled*/
          (t[5] ? null : (
            /*open*/
            t[8]
          )).apply(this, arguments);
        }),
        J(
          n,
          "keyup",
          /*keyup_handler*/
          t[13]
        )
      ], s = !0);
    },
    p(a, [l]) {
      t = a, l & /*paragraph*/
      1 && i !== (i = /*paragraph*/
      t[0].text.trim() + "") && (r.innerHTML = i), l & /*ellipsis*/
      4 && V(
        r,
        "ellipsis",
        /*ellipsis*/
        t[2]
      ), l & /*noIndicator*/
      16 && V(
        n,
        "no-indicator",
        /*noIndicator*/
        t[4]
      ), l & /*stack*/
      2 && V(
        n,
        "stack",
        /*stack*/
        t[1]
      ), l & /*selected*/
      8 && V(
        n,
        "selected",
        /*selected*/
        t[3]
      ), l & /*disabled*/
      32 && V(
        n,
        "disabled",
        /*disabled*/
        t[5]
      );
    },
    i: z,
    o: z,
    d(a) {
      a && T(e), t[10](null), s = !1, Oe(o);
    }
  };
}
function op(t, e, n) {
  let { paragraph: r } = e, { resultType: i } = e, { stack: s = !1 } = e, { ellipsis: o = !1 } = e, { selected: a = !1 } = e, { noIndicator: l = !1 } = e, { disabled: c = !1 } = e, u = !1;
  const d = Ot(), f = () => {
    d("open", !0);
  };
  let h;
  function g(m) {
    Tt[m ? "unshift" : "push"](() => {
      h = m, n(6, h);
    });
  }
  const p = () => n(7, u = !0), _ = () => n(7, u = !1), v = (m) => {
    m.key === "Enter" && !c && f();
  };
  return t.$$set = (m) => {
    "paragraph" in m && n(0, r = m.paragraph), "resultType" in m && n(9, i = m.resultType), "stack" in m && n(1, s = m.stack), "ellipsis" in m && n(2, o = m.ellipsis), "selected" in m && n(3, a = m.selected), "noIndicator" in m && n(4, l = m.noIndicator), "disabled" in m && n(5, c = m.disabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*resultType*/
    512, t.$$.dirty & /*resultType*/
    512, t.$$.dirty & /*paragraphElement*/
    64 && h && h.offsetWidth < h.scrollWidth;
  }, [
    r,
    s,
    o,
    a,
    l,
    c,
    h,
    u,
    f,
    i,
    g,
    p,
    _,
    v
  ];
}
class ap extends je {
  constructor(e) {
    super(), Ce(
      this,
      e,
      op,
      sp,
      Fe,
      {
        paragraph: 0,
        resultType: 9,
        stack: 1,
        ellipsis: 2,
        selected: 3,
        noIndicator: 4,
        disabled: 5
      },
      ip
    );
  }
}
const { window: xl } = xo;
function lp(t) {
  Ve(t, "svelte-17gdirz", ".sw-result-row.svelte-17gdirz.svelte-17gdirz{--paragraph-height:var(--rhythm-4);--paragraph-gap:var(--rhythm-0_5);--expanded-paragraph-height:0px;display:flex;padding:var(--rhythm-1) var(--rhythm-3)}.sw-result-row.svelte-17gdirz .link-origin.svelte-17gdirz{text-decoration:none}.sw-result-row.svelte-17gdirz .result-container.svelte-17gdirz{flex:1 0 auto}.sw-result-row.svelte-17gdirz .result-container h3.svelte-17gdirz{margin:0}@media(max-width: 647px){.sw-result-row.svelte-17gdirz.svelte-17gdirz{flex-direction:column}}@media(min-width: 648px){.sw-result-row.svelte-17gdirz.svelte-17gdirz{--paragraph-height:var(--rhythm-3);--width-thumbnail:var(--rhythm-28);gap:var(--rhythm-2)}.sw-result-row.svelte-17gdirz .result-container.svelte-17gdirz{width:calc(100% - var(--width-thumbnail) - var(--rhythm-2))}.sw-result-row.svelte-17gdirz .result-container h3.svelte-17gdirz{cursor:pointer}}@media(hover: hover){.sw-result-row.svelte-17gdirz.svelte-17gdirz:hover{background:var(--hover-background-color)}}");
}
function to(t) {
  let e, n;
  return e = new ap({
    props: {
      paragraph: (
        /*paragraphs*/
        t[2][0]
      ),
      resultType: (
        /*result*/
        t[0].resultType
      ),
      noIndicator: !0
    }
  }), e.$on(
    "open",
    /*open_handler*/
    t[7]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*paragraphs*/
      4 && (s.paragraph = /*paragraphs*/
      r[2][0]), i & /*result*/
      1 && (s.resultType = /*result*/
      r[0].resultType), e.$set(s);
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function no(t) {
  let e, n = (
    /*result*/
    t[0].origin.url + ""
  ), r, i;
  return {
    c() {
      e = S("a"), r = he(n), b(e, "href", i = /*result*/
      t[0].origin.url), b(e, "class", "body-m link-origin svelte-17gdirz");
    },
    m(s, o) {
      R(s, e, o), x(e, r);
    },
    p(s, o) {
      o & /*result*/
      1 && n !== (n = /*result*/
      s[0].origin.url + "") && Te(r, n), o & /*result*/
      1 && i !== (i = /*result*/
      s[0].origin.url) && b(e, "href", i);
    },
    d(s) {
      s && T(e);
    }
  };
}
function cp(t) {
  var g, p;
  let e, n, r, i = (
    /*result*/
    ((g = t[0]) == null ? void 0 : g.title) + ""
  ), s, o, a, l, c, u, d;
  rn(
    /*onwindowresize*/
    t[4]
  );
  let f = !!/*paragraphs*/
  t[2][0] && to(t), h = (
    /*result*/
    ((p = t[0].origin) == null ? void 0 : p.url) && no(t)
  );
  return {
    c() {
      e = S("div"), n = S("div"), r = S("h3"), s = he(i), o = Q(), a = S("div"), f && f.c(), l = Q(), h && h.c(), b(r, "class", "ellipsis title-xs svelte-17gdirz"), b(a, "tabindex", "-1"), b(n, "class", "result-container svelte-17gdirz"), b(e, "class", "sw-result-row svelte-17gdirz");
    },
    m(_, v) {
      R(_, e, v), x(e, n), x(n, r), x(r, s), x(n, o), x(n, a), f && f.m(a, null), x(a, l), h && h.m(a, null), c = !0, u || (d = [
        J(
          xl,
          "resize",
          /*onwindowresize*/
          t[4]
        ),
        J(
          r,
          "click",
          /*click_handler*/
          t[5]
        ),
        J(
          r,
          "keyup",
          /*keyup_handler*/
          t[6]
        )
      ], u = !0);
    },
    p(_, [v]) {
      var m, F;
      (!c || v & /*result*/
      1) && i !== (i = /*result*/
      ((m = _[0]) == null ? void 0 : m.title) + "") && Te(s, i), /*paragraphs*/
      _[2][0] ? f ? (f.p(_, v), v & /*paragraphs*/
      4 && w(f, 1)) : (f = to(_), f.c(), w(f, 1), f.m(a, l)) : f && (ge(), P(f, 1, 1, () => {
        f = null;
      }), ve()), /*result*/
      (F = _[0].origin) != null && F.url ? h ? h.p(_, v) : (h = no(_), h.c(), h.m(a, null)) : h && (h.d(1), h = null);
    },
    i(_) {
      c || (w(f), c = !0);
    },
    o(_) {
      P(f), c = !1;
    },
    d(_) {
      _ && T(e), f && f.d(), h && h.d(), u = !1, Oe(d);
    }
  };
}
function up(t, e, n) {
  let r, { result: i } = e, s = window.innerWidth;
  function o(d) {
    var f;
    ja.set({
      type: "RESULT",
      rid: i.id,
      paragraph: d
    }), (f = i.origin) != null && f.url && Yr(i.origin.url, d == null ? void 0 : d.text);
  }
  function a() {
    n(1, s = xl.innerWidth);
  }
  const l = () => o(), c = (d) => {
    d.key === "Enter" && o();
  }, u = () => o(r[0]);
  return t.$$set = (d) => {
    "result" in d && n(0, i = d.result);
  }, t.$$.update = () => {
    t.$$.dirty & /*result*/
    1 && n(2, r = i.paragraphs || []);
  }, [
    i,
    s,
    r,
    o,
    a,
    l,
    c,
    u
  ];
}
class Tl extends je {
  constructor(e) {
    super(), Ce(this, e, up, cp, Fe, { result: 0 }, lp);
  }
}
const { window: Rl } = xo;
function dp(t) {
  Ve(t, "svelte-115eemk", ".sw-answer.svelte-115eemk .answer-container.svelte-115eemk{align-items:center;display:flex;gap:var(--rhythm-1);margin-top:var(--rhythm-1)}.sw-answer.svelte-115eemk .answer-container .text.svelte-115eemk{flex:1 1 auto}.sw-answer.svelte-115eemk .results.svelte-115eemk{display:flex;flex-direction:column;gap:var(--rhythm-2);width:100%}@media(min-width: 599px){}");
}
function ro(t, e, n) {
  const r = t.slice();
  return r[14] = e[n], r;
}
function io(t) {
  let e, n;
  return e = new Il({ props: { rank: (
    /*rank*/
    t[1]
  ) } }), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*rank*/
      2 && (s.rank = /*rank*/
      r[1]), e.$set(s);
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function so(t) {
  let e, n, r = !/*$hideSources*/
  t[7] && oo(t);
  return {
    c() {
      r && r.c(), e = ot();
    },
    m(i, s) {
      r && r.m(i, s), R(i, e, s), n = !0;
    },
    p(i, s) {
      /*$hideSources*/
      i[7] ? r && (ge(), P(r, 1, 1, () => {
        r = null;
      }), ve()) : r ? (r.p(i, s), s & /*$hideSources*/
      128 && w(r, 1)) : (r = oo(i), r.c(), w(r, 1), r.m(e.parentNode, e));
    },
    i(i) {
      n || (w(r), n = !0);
    },
    o(i) {
      P(r), n = !1;
    },
    d(i) {
      r && r.d(i), i && T(e);
    }
  };
}
function oo(t) {
  let e, n;
  return e = new Xh({
    props: {
      $$slots: {
        header: [hp],
        default: [fp]
      },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "toggleExpander",
    /*toggleExpander_handler*/
    t[11]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*$$scope, isMobile, $_*/
      131360 && (s.$$scope = { dirty: i, ctx: r }), e.$set(s);
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function ao(t) {
  let e, n;
  return e = new Tl({ props: { result: (
    /*result*/
    t[14]
  ) } }), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p: z,
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function fp(t) {
  let e, n, r = (
    /*sources*/
    t[9]
  ), i = [];
  for (let o = 0; o < r.length; o += 1)
    i[o] = ao(ro(t, r, o));
  const s = (o) => P(i[o], 1, 1, () => {
    i[o] = null;
  });
  return {
    c() {
      e = S("div");
      for (let o = 0; o < i.length; o += 1)
        i[o].c();
      b(e, "class", "results svelte-115eemk");
    },
    m(o, a) {
      R(o, e, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(e, null);
      n = !0;
    },
    p(o, a) {
      if (a & /*sources*/
      512) {
        r = /*sources*/
        o[9];
        let l;
        for (l = 0; l < r.length; l += 1) {
          const c = ro(o, r, l);
          i[l] ? (i[l].p(c, a), w(i[l], 1)) : (i[l] = ao(c), i[l].c(), w(i[l], 1), i[l].m(e, null));
        }
        for (ge(), l = r.length; l < i.length; l += 1)
          s(l);
        ve();
      }
    },
    i(o) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          w(i[a]);
        n = !0;
      }
    },
    o(o) {
      i = i.filter(Boolean);
      for (let a = 0; a < i.length; a += 1)
        P(i[a]);
      n = !1;
    },
    d(o) {
      o && T(e), fr(i, o);
    }
  };
}
function hp(t) {
  let e, n = (
    /*isMobile*/
    (t[5] ? (
      /*$_*/
      t[8]("answer.sources-mobile")
    ) : (
      /*$_*/
      t[8]("answer.sources")
    )) + ""
  ), r;
  return {
    c() {
      e = S("h3"), r = he(n), b(e, "class", "title-xs"), b(e, "slot", "header");
    },
    m(i, s) {
      R(i, e, s), x(e, r);
    },
    p(i, s) {
      s & /*isMobile, $_*/
      288 && n !== (n = /*isMobile*/
      (i[5] ? (
        /*$_*/
        i[8]("answer.sources-mobile")
      ) : (
        /*$_*/
        i[8]("answer.sources")
      )) + "") && Te(r, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function pp(t) {
  let e, n, r, i, s, o, a, l;
  rn(
    /*onwindowresize*/
    t[10]
  );
  let c = !/*isMobile*/
  t[5] && !/*hideFeedback*/
  t[2] && io(t), u = (
    /*answer*/
    t[0].sources && !/*notEnoughData*/
    t[6] && so(t)
  );
  return {
    c() {
      e = S("div"), n = S("div"), r = S("div"), i = Q(), c && c.c(), s = Q(), u && u.c(), b(r, "class", "text svelte-115eemk"), b(n, "class", "answer-container svelte-115eemk"), b(e, "class", "sw-answer svelte-115eemk");
    },
    m(d, f) {
      R(d, e, f), x(e, n), x(n, r), r.innerHTML = /*text*/
      t[3], x(n, i), c && c.m(n, null), x(e, s), u && u.m(e, null), o = !0, a || (l = J(
        Rl,
        "resize",
        /*onwindowresize*/
        t[10]
      ), a = !0);
    },
    p(d, [f]) {
      (!o || f & /*text*/
      8) && (r.innerHTML = /*text*/
      d[3]), !/*isMobile*/
      d[5] && !/*hideFeedback*/
      d[2] ? c ? (c.p(d, f), f & /*isMobile, hideFeedback*/
      36 && w(c, 1)) : (c = io(d), c.c(), w(c, 1), c.m(n, null)) : c && (ge(), P(c, 1, 1, () => {
        c = null;
      }), ve()), /*answer*/
      d[0].sources && !/*notEnoughData*/
      d[6] ? u ? (u.p(d, f), f & /*answer, notEnoughData*/
      65 && w(u, 1)) : (u = so(d), u.c(), w(u, 1), u.m(e, null)) : u && (ge(), P(u, 1, 1, () => {
        u = null;
      }), ve());
    },
    i(d) {
      o || (w(c), w(u), o = !0);
    },
    o(d) {
      P(c), P(u), o = !1;
    },
    d(d) {
      d && T(e), c && c.d(), u && u.d(), a = !1, l();
    }
  };
}
function gp(t, e, n) {
  var _;
  let r, i, s, o;
  q(t, Tu, (v) => n(7, s = v)), q(t, Ft, (v) => n(8, o = v));
  let { answer: a } = e, { rank: l = 0 } = e, { hideFeedback: c = !1 } = e, u = "", d = window.innerWidth;
  Ot();
  const f = new RegExp(/\n/g), h = Na(Object.values((_ = a.sources) == null ? void 0 : _.resources));
  function g() {
    n(4, d = Rl.innerWidth);
  }
  function p(v) {
    ki.call(this, t, v);
  }
  return t.$$set = (v) => {
    "answer" in v && n(0, a = v.answer), "rank" in v && n(1, l = v.rank), "hideFeedback" in v && n(2, c = v.hideFeedback);
  }, t.$$.update = () => {
    var v;
    t.$$.dirty & /*answer*/
    1 && n(3, u = ((v = a.text) == null ? void 0 : v.replace(f, "<br>")) || ""), t.$$.dirty & /*text*/
    8 && n(6, r = u === "Not enough data to answer this."), t.$$.dirty & /*innerWidth*/
    16 && n(5, i = ep(d));
  }, [
    a,
    l,
    c,
    u,
    d,
    i,
    r,
    s,
    o,
    h,
    g,
    p
  ];
}
class vp extends je {
  constructor(e) {
    super(), Ce(this, e, gp, pp, Fe, { answer: 0, rank: 1, hideFeedback: 2 }, dp);
  }
}
function _p(t) {
  Ve(t, "svelte-zfi9e0", ".sw-initial-answer.svelte-zfi9e0.svelte-zfi9e0{border-bottom:1px solid var(--color-neutral-light);padding:var(--rhythm-2) var(--rhythm-3);position:relative}.sw-initial-answer.svelte-zfi9e0 .container.svelte-zfi9e0{display:flex;flex-direction:column;flex-wrap:wrap}.sw-initial-answer.svelte-zfi9e0 .answer.svelte-zfi9e0{width:100%}.sw-initial-answer.svelte-zfi9e0 .actions.svelte-zfi9e0{margin-top:var(--rhythm-1)}.sw-initial-answer.svelte-zfi9e0 .actions .feedback.svelte-zfi9e0{gap:var(--rhythm-1)}");
}
function lo(t) {
  let e, n, r, i;
  const s = [yp, mp], o = [];
  function a(l, c) {
    return (
      /*$chatError*/
      l[1] ? 0 : 1
    );
  }
  return n = a(t), r = o[n] = s[n](t), {
    c() {
      e = S("div"), r.c(), b(e, "class", "sw-initial-answer svelte-zfi9e0");
    },
    m(l, c) {
      R(l, e, c), o[n].m(e, null), i = !0;
    },
    p(l, c) {
      let u = n;
      n = a(l), n === u ? o[n].p(l, c) : (ge(), P(o[u], 1, 1, () => {
        o[u] = null;
      }), ve(), r = o[n], r ? r.p(l, c) : (r = o[n] = s[n](l), r.c()), w(r, 1), r.m(e, null));
    },
    i(l) {
      i || (w(r), i = !0);
    },
    o(l) {
      P(r), i = !1;
    },
    d(l) {
      l && T(e), o[n].d();
    }
  };
}
function mp(t) {
  let e, n, r, i, s, o, a, l;
  return r = new vp({
    props: {
      answer: (
        /*$firstAnswer*/
        t[0]
      ),
      rank: 0,
      hideFeedback: !0
    }
  }), a = new Il({ props: { rank: 0 } }), {
    c() {
      e = S("div"), n = S("div"), le(r.$$.fragment), i = Q(), s = S("div"), o = S("div"), le(a.$$.fragment), b(n, "class", "answer svelte-zfi9e0"), b(o, "class", "feedback svelte-zfi9e0"), b(s, "class", "actions svelte-zfi9e0"), b(e, "class", "container svelte-zfi9e0");
    },
    m(c, u) {
      R(c, e, u), x(e, n), oe(r, n, null), x(e, i), x(e, s), x(s, o), oe(a, o, null), l = !0;
    },
    p(c, u) {
      const d = {};
      u & /*$firstAnswer*/
      1 && (d.answer = /*$firstAnswer*/
      c[0]), r.$set(d);
    },
    i(c) {
      l || (w(r.$$.fragment, c), w(a.$$.fragment, c), l = !0);
    },
    o(c) {
      P(r.$$.fragment, c), P(a.$$.fragment, c), l = !1;
    },
    d(c) {
      c && T(e), re(r), re(a);
    }
  };
}
function yp(t) {
  let e;
  function n(s, o) {
    return (
      /*$isServiceOverloaded*/
      s[2] ? kp : (
        /*$chatError*/
        s[1].status === 402 ? wp : bp
      )
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      i.c(), e = ot();
    },
    m(s, o) {
      i.m(s, o), R(s, e, o);
    },
    p(s, o) {
      r === (r = n(s)) && i ? i.p(s, o) : (i.d(1), i = r(s), i && (i.c(), i.m(e.parentNode, e)));
    },
    i: z,
    o: z,
    d(s) {
      i.d(s), s && T(e);
    }
  };
}
function bp(t) {
  let e = (
    /*$_*/
    t[3]("error.search") + ""
  ), n;
  return {
    c() {
      n = he(e);
    },
    m(r, i) {
      R(r, n, i);
    },
    p(r, i) {
      i & /*$_*/
      8 && e !== (e = /*$_*/
      r[3]("error.search") + "") && Te(n, e);
    },
    d(r) {
      r && T(n);
    }
  };
}
function wp(t) {
  let e = (
    /*$_*/
    t[3]("error.answer-feature-blocked") + ""
  ), n;
  return {
    c() {
      n = he(e);
    },
    m(r, i) {
      R(r, n, i);
    },
    p(r, i) {
      i & /*$_*/
      8 && e !== (e = /*$_*/
      r[3]("error.answer-feature-blocked") + "") && Te(n, e);
    },
    d(r) {
      r && T(n);
    }
  };
}
function kp(t) {
  let e = (
    /*$_*/
    t[3]("error.service-overloaded") + ""
  ), n;
  return {
    c() {
      n = he(e);
    },
    m(r, i) {
      R(r, n, i);
    },
    p(r, i) {
      i & /*$_*/
      8 && e !== (e = /*$_*/
      r[3]("error.service-overloaded") + "") && Te(n, e);
    },
    d(r) {
      r && T(n);
    }
  };
}
function Sp(t) {
  let e, n, r = (
    /*$firstAnswer*/
    (t[0].text || /*$chatError*/
    t[1]) && lo(t)
  );
  return {
    c() {
      r && r.c(), e = ot();
    },
    m(i, s) {
      r && r.m(i, s), R(i, e, s), n = !0;
    },
    p(i, [s]) {
      /*$firstAnswer*/
      i[0].text || /*$chatError*/
      i[1] ? r ? (r.p(i, s), s & /*$firstAnswer, $chatError*/
      3 && w(r, 1)) : (r = lo(i), r.c(), w(r, 1), r.m(e.parentNode, e)) : r && (ge(), P(r, 1, 1, () => {
        r = null;
      }), ve());
    },
    i(i) {
      n || (w(r), n = !0);
    },
    o(i) {
      P(r), n = !1;
    },
    d(i) {
      r && r.d(i), i && T(e);
    }
  };
}
function Ep(t, e, n) {
  let r, i, s, o;
  return q(t, dh, (a) => n(0, r = a)), q(t, kl, (a) => n(1, i = a)), q(t, fh, (a) => n(2, s = a)), q(t, Ft, (a) => n(3, o = a)), [r, i, s, o];
}
class Ap extends je {
  constructor(e) {
    super(), Ce(this, e, Ep, Sp, Fe, {}, _p);
  }
}
function Ip(t) {
  Ve(t, "svelte-1w8rufs", ".relations.svelte-1w8rufs.svelte-1w8rufs{display:flex;flex-direction:column;gap:var(--rhythm-5)}.relations.svelte-1w8rufs .entity.svelte-1w8rufs{display:flex;flex-direction:column;gap:var(--rhythm-1_5)}.relations.svelte-1w8rufs .entity-name.svelte-1w8rufs{font-size:var(--font-size-base);font-weight:var(--font-weight-bold)}.relations.svelte-1w8rufs .relation.svelte-1w8rufs{font-size:var(--font-size-medium)}.relations.svelte-1w8rufs .relation-name.svelte-1w8rufs{font-weight:var(--font-weight-semi-bold)}@media(min-width: 1200px){.relations.svelte-1w8rufs.svelte-1w8rufs{width:var(--rhythm-40);padding-left:var(--rhythm-2)}}");
}
function co(t, e, n) {
  const r = t.slice();
  return r[1] = e[n], r;
}
function uo(t, e, n) {
  const r = t.slice();
  return r[4] = e[n][0], r[5] = e[n][1], r;
}
function fo(t) {
  let e, n, r = (
    /*name*/
    t[4] + ""
  ), i, s, o, a, l = (
    /*related*/
    t[5].join(", ") + ""
  ), c;
  return {
    c() {
      e = S("div"), n = S("span"), i = he(r), s = he(":"), o = Q(), a = S("span"), c = he(l), b(n, "class", "relation-name svelte-1w8rufs"), b(e, "class", "relation svelte-1w8rufs");
    },
    m(u, d) {
      R(u, e, d), x(e, n), x(n, i), x(n, s), x(e, o), x(e, a), x(a, c);
    },
    p(u, d) {
      d & /*entityRelations*/
      1 && r !== (r = /*name*/
      u[4] + "") && Te(i, r), d & /*entityRelations*/
      1 && l !== (l = /*related*/
      u[5].join(", ") + "") && Te(c, l);
    },
    d(u) {
      u && T(e);
    }
  };
}
function ho(t) {
  let e, n, r = (
    /*entity*/
    t[1].entity + ""
  ), i, s, o, a = Object.entries(
    /*entity*/
    t[1].relations
  ), l = [];
  for (let c = 0; c < a.length; c += 1)
    l[c] = fo(uo(t, a, c));
  return {
    c() {
      e = S("div"), n = S("div"), i = he(r), s = Q();
      for (let c = 0; c < l.length; c += 1)
        l[c].c();
      o = Q(), b(n, "class", "entity-name svelte-1w8rufs"), b(e, "class", "entity svelte-1w8rufs");
    },
    m(c, u) {
      R(c, e, u), x(e, n), x(n, i), x(e, s);
      for (let d = 0; d < l.length; d += 1)
        l[d] && l[d].m(e, null);
      x(e, o);
    },
    p(c, u) {
      if (u & /*entityRelations*/
      1 && r !== (r = /*entity*/
      c[1].entity + "") && Te(i, r), u & /*Object, entityRelations*/
      1) {
        a = Object.entries(
          /*entity*/
          c[1].relations
        );
        let d;
        for (d = 0; d < a.length; d += 1) {
          const f = uo(c, a, d);
          l[d] ? l[d].p(f, u) : (l[d] = fo(f), l[d].c(), l[d].m(e, o));
        }
        for (; d < l.length; d += 1)
          l[d].d(1);
        l.length = a.length;
      }
    },
    d(c) {
      c && T(e), fr(l, c);
    }
  };
}
function xp(t) {
  let e, n = (
    /*entityRelations*/
    t[0]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = ho(co(t, n, i));
  return {
    c() {
      e = S("div");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      b(e, "class", "relations svelte-1w8rufs");
    },
    m(i, s) {
      R(i, e, s);
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(e, null);
    },
    p(i, [s]) {
      if (s & /*Object, entityRelations*/
      1) {
        n = /*entityRelations*/
        i[0];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = co(i, n, o);
          r[o] ? r[o].p(a, s) : (r[o] = ho(a), r[o].c(), r[o].m(e, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    i: z,
    o: z,
    d(i) {
      i && T(e), fr(r, i);
    }
  };
}
function Tp(t, e, n) {
  let { entityRelations: r = [] } = e;
  return t.$$set = (i) => {
    "entityRelations" in i && n(0, r = i.entityRelations);
  }, [r];
}
class Rp extends je {
  constructor(e) {
    super(), Ce(this, e, Tp, xp, Fe, { entityRelations: 0 }, Ip);
  }
}
var Pl = typeof window < "u" ? window : {};
function Pp() {
  var t = Pl.DOMParser, e = !1;
  try {
    new t().parseFromString("", "text/html") && (e = !0);
  } catch {
  }
  return e;
}
function Op() {
  var t = function() {
  };
  return Fp() ? t.prototype.parseFromString = function(e) {
    var n = new window.ActiveXObject("htmlfile");
    return n.designMode = "on", n.open(), n.write(e), n.close(), n;
  } : t.prototype.parseFromString = function(e) {
    var n = document.implementation.createHTMLDocument("");
    return n.open(), n.write(e), n.close(), n;
  }, t;
}
function Fp() {
  var t = !1;
  try {
    document.implementation.createHTMLDocument("").open();
  } catch {
    window.ActiveXObject && (t = !0);
  }
  return t;
}
Pp() ? Pl.DOMParser : Op();
function po(t, e, n) {
  const r = t.slice();
  return r[44] = e[n], r[46] = n, r;
}
function go(t) {
  let e, n, r, i, s, o, a, l, c;
  i = new Uh({});
  let u = (
    /*$showResults*/
    t[5] && !/*$isEmptySearchQuery*/
    t[6] && vo(t)
  );
  return {
    c() {
      e = S("div"), n = S("div"), r = S("div"), le(i.$$.fragment), s = Q(), o = S("div"), u && u.c(), b(r, "class", "search-bar-container"), b(o, "class", "search-results-container"), b(n, "class", "search-container"), V(
        n,
        "with-results",
        /*$showResults*/
        t[5] && !/*$isEmptySearchQuery*/
        t[6]
      ), Ie(
        n,
        "--answer-height",
        /*answerHeight*/
        t[3] + "px"
      ), b(e, "class", "backdrop");
    },
    m(d, f) {
      R(d, e, f), x(e, n), x(n, r), oe(i, r, null), x(n, s), x(n, o), u && u.m(o, null), a = !0, l || (c = [
        J(
          e,
          "keyup",
          /*onBackdropKeyup*/
          t[20]
        ),
        J(
          e,
          "click",
          /*onBackdropClick*/
          t[21]
        )
      ], l = !0);
    },
    p(d, f) {
      /*$showResults*/
      d[5] && !/*$isEmptySearchQuery*/
      d[6] ? u ? (u.p(d, f), f[0] & /*$showResults, $isEmptySearchQuery*/
      96 && w(u, 1)) : (u = vo(d), u.c(), w(u, 1), u.m(o, null)) : u && (ge(), P(u, 1, 1, () => {
        u = null;
      }), ve()), (!a || f[0] & /*$showResults, $isEmptySearchQuery*/
      96) && V(
        n,
        "with-results",
        /*$showResults*/
        d[5] && !/*$isEmptySearchQuery*/
        d[6]
      ), f[0] & /*answerHeight*/
      8 && Ie(
        n,
        "--answer-height",
        /*answerHeight*/
        d[3] + "px"
      );
    },
    i(d) {
      a || (w(i.$$.fragment, d), w(u), a = !0);
    },
    o(d) {
      P(i.$$.fragment, d), P(u), a = !1;
    },
    d(d) {
      d && T(e), re(i), u && u.d(), l = !1, Oe(c);
    }
  };
}
function vo(t) {
  let e, n, r, i;
  const s = [jp, $p, Cp], o = [];
  function a(l, c) {
    return (
      /*$hasSearchError*/
      l[7] && !/*$hasPartialResults*/
      l[8] ? 0 : !/*$pendingResults*/
      l[11] && /*$resultList*/
      l[12].length === 0 && !/*$onlyAnswers*/
      l[13] ? 1 : 2
    );
  }
  return e = a(t), n = o[e] = s[e](t), {
    c() {
      n.c(), r = ot();
    },
    m(l, c) {
      o[e].m(l, c), R(l, r, c), i = !0;
    },
    p(l, c) {
      let u = e;
      e = a(l), e === u ? o[e].p(l, c) : (ge(), P(o[u], 1, 1, () => {
        o[u] = null;
      }), ve(), n = o[e], n ? n.p(l, c) : (n = o[e] = s[e](l), n.c()), w(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      i || (w(n), i = !0);
    },
    o(l) {
      P(n), i = !1;
    },
    d(l) {
      o[e].d(l), l && T(r);
    }
  };
}
function Cp(t) {
  let e, n, r, i, s, o = [], a = /* @__PURE__ */ new Map(), l, c, u, d, f, h = (
    /*$hasPartialResults*/
    t[8] && _o(t)
  ), g = (
    /*$isAnswerEnabled*/
    t[15] && mo(t)
  ), p = (
    /*$resultList*/
    t[12]
  );
  const _ = (y) => za(
    /*result*/
    y[44]
  );
  for (let y = 0; y < p.length; y += 1) {
    let k = po(t, p, y), I = _(k);
    a.set(I, o[y] = bo(I, k));
  }
  let v = (
    /*$hasMore*/
    t[16] && wo(t)
  ), m = (
    /*$entityRelations*/
    t[14].length > 0 && ko(t)
  ), F = (
    /*$showLoading*/
    t[17] && So()
  );
  return {
    c() {
      h && h.c(), e = Q(), n = S("div"), r = S("div"), g && g.c(), i = Q(), s = S("div");
      for (let y = 0; y < o.length; y += 1)
        o[y].c();
      l = Q(), v && v.c(), c = Q(), m && m.c(), u = Q(), F && F.c(), d = ot(), b(s, "class", "search-results"), b(r, "class", "results"), V(
        r,
        "with-relations",
        /*$entityRelations*/
        t[14].length > 0
      ), b(n, "class", "results-container");
    },
    m(y, k) {
      h && h.m(y, k), R(y, e, k), R(y, n, k), x(n, r), g && g.m(r, null), x(r, i), x(r, s);
      for (let I = 0; I < o.length; I += 1)
        o[I] && o[I].m(s, null);
      x(s, l), v && v.m(s, null), x(n, c), m && m.m(n, null), R(y, u, k), F && F.m(y, k), R(y, d, k), f = !0;
    },
    p(y, k) {
      /*$hasPartialResults*/
      y[8] ? h ? h.p(y, k) : (h = _o(y), h.c(), h.m(e.parentNode, e)) : h && (h.d(1), h = null), /*$isAnswerEnabled*/
      y[15] ? g ? (g.p(y, k), k[0] & /*$isAnswerEnabled*/
      32768 && w(g, 1)) : (g = mo(y), g.c(), w(g, 1), g.m(r, i)) : g && (ge(), P(g, 1, 1, () => {
        g = null;
      }), ve()), k[0] & /*$resultList*/
      4096 && (p = /*$resultList*/
      y[12], ge(), o = Kl(o, k, _, 1, y, p, a, s, Jl, bo, l, po), ve()), /*$hasMore*/
      y[16] ? v ? (v.p(y, k), k[0] & /*$hasMore*/
      65536 && w(v, 1)) : (v = wo(y), v.c(), w(v, 1), v.m(s, null)) : v && (ge(), P(v, 1, 1, () => {
        v = null;
      }), ve()), (!f || k[0] & /*$entityRelations*/
      16384) && V(
        r,
        "with-relations",
        /*$entityRelations*/
        y[14].length > 0
      ), /*$entityRelations*/
      y[14].length > 0 ? m ? (m.p(y, k), k[0] & /*$entityRelations*/
      16384 && w(m, 1)) : (m = ko(y), m.c(), w(m, 1), m.m(n, null)) : m && (ge(), P(m, 1, 1, () => {
        m = null;
      }), ve()), /*$showLoading*/
      y[17] ? F ? k[0] & /*$showLoading*/
      131072 && w(F, 1) : (F = So(), F.c(), w(F, 1), F.m(d.parentNode, d)) : F && (ge(), P(F, 1, 1, () => {
        F = null;
      }), ve());
    },
    i(y) {
      if (!f) {
        w(g);
        for (let k = 0; k < p.length; k += 1)
          w(o[k]);
        w(v), w(m), w(F), f = !0;
      }
    },
    o(y) {
      P(g);
      for (let k = 0; k < o.length; k += 1)
        P(o[k]);
      P(v), P(m), P(F), f = !1;
    },
    d(y) {
      h && h.d(y), y && T(e), y && T(n), g && g.d();
      for (let k = 0; k < o.length; k += 1)
        o[k].d();
      v && v.d(), m && m.d(), y && T(u), F && F.d(y), y && T(d);
    }
  };
}
function $p(t) {
  let e, n = (
    /*$_*/
    t[10]("results.empty") + ""
  ), r, i, s, o, a;
  return {
    c() {
      e = S("strong"), r = he(n), i = Q(), s = S("div"), b(s, "class", "results-end");
    },
    m(l, c) {
      R(l, e, c), x(e, r), R(l, i, c), R(l, s, c), o || (a = Io(
        /*renderingDone*/
        t[19].call(null, s)
      ), o = !0);
    },
    p(l, c) {
      c[0] & /*$_*/
      1024 && n !== (n = /*$_*/
      l[10]("results.empty") + "") && Te(r, n);
    },
    i: z,
    o: z,
    d(l) {
      l && T(e), l && T(i), l && T(s), o = !1, a();
    }
  };
}
function jp(t) {
  let e;
  function n(s, o) {
    var a;
    return (
      /*$searchError*/
      ((a = s[9]) == null ? void 0 : a.status) === 402 ? Np : Mp
    );
  }
  let r = n(t), i = r(t);
  return {
    c() {
      e = S("div"), i.c(), b(e, "class", "error");
    },
    m(s, o) {
      R(s, e, o), i.m(e, null);
    },
    p(s, o) {
      r === (r = n(s)) && i ? i.p(s, o) : (i.d(1), i = r(s), i && (i.c(), i.m(e, null)));
    },
    i: z,
    o: z,
    d(s) {
      s && T(e), i.d();
    }
  };
}
function _o(t) {
  let e, n, r = (
    /*$_*/
    t[10]("error.partial-results") + ""
  ), i;
  return {
    c() {
      e = S("div"), n = S("strong"), i = he(r), b(e, "class", "partial-results-warning");
    },
    m(s, o) {
      R(s, e, o), x(e, n), x(n, i);
    },
    p(s, o) {
      o[0] & /*$_*/
      1024 && r !== (r = /*$_*/
      s[10]("error.partial-results") + "") && Te(i, r);
    },
    d(s) {
      s && T(e);
    }
  };
}
function mo(t) {
  let e, n, r, i;
  return n = new Ap({}), {
    c() {
      e = S("div"), le(n.$$.fragment), rn(() => (
        /*div_elementresize_handler*/
        t[39].call(e)
      ));
    },
    m(s, o) {
      R(s, e, o), oe(n, e, null), r = Ul(
        e,
        /*div_elementresize_handler*/
        t[39].bind(e)
      ), i = !0;
    },
    p: z,
    i(s) {
      i || (w(n.$$.fragment, s), i = !0);
    },
    o(s) {
      P(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && T(e), re(n), r();
    }
  };
}
function yo(t) {
  let e, n, r;
  return {
    c() {
      e = S("div"), b(e, "class", "results-end");
    },
    m(i, s) {
      R(i, e, s), n || (r = Io(
        /*renderingDone*/
        t[19].call(null, e)
      ), n = !0);
    },
    d(i) {
      i && T(e), n = !1, r();
    }
  };
}
function bo(t, e) {
  let n, r, i, s, o;
  r = new Tl({ props: { result: (
    /*result*/
    e[44]
  ) } });
  let a = (
    /*i*/
    e[46] === /*$resultList*/
    e[12].length - 1 && yo(e)
  );
  return {
    key: t,
    first: null,
    c() {
      n = ot(), le(r.$$.fragment), i = Q(), a && a.c(), s = ot(), this.first = n;
    },
    m(l, c) {
      R(l, n, c), oe(r, l, c), R(l, i, c), a && a.m(l, c), R(l, s, c), o = !0;
    },
    p(l, c) {
      e = l;
      const u = {};
      c[0] & /*$resultList*/
      4096 && (u.result = /*result*/
      e[44]), r.$set(u), /*i*/
      e[46] === /*$resultList*/
      e[12].length - 1 ? a || (a = yo(e), a.c(), a.m(s.parentNode, s)) : a && (a.d(1), a = null);
    },
    i(l) {
      o || (w(r.$$.fragment, l), o = !0);
    },
    o(l) {
      P(r.$$.fragment, l), o = !1;
    },
    d(l) {
      l && T(n), re(r, l), l && T(i), a && a.d(l), l && T(s);
    }
  };
}
function wo(t) {
  let e, n;
  return e = new rp({ props: { hasMore: (
    /*$hasMore*/
    t[16]
  ) } }), e.$on(
    "loadMore",
    /*onLoadMore*/
    t[22]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i[0] & /*$hasMore*/
      65536 && (s.hasMore = /*$hasMore*/
      r[16]), e.$set(s);
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function ko(t) {
  let e, n;
  return e = new Rp({
    props: {
      entityRelations: (
        /*$entityRelations*/
        t[14]
      )
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i[0] & /*$entityRelations*/
      16384 && (s.entityRelations = /*$entityRelations*/
      r[14]), e.$set(s);
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function So(t) {
  let e, n;
  return e = new Vh({}), {
    c() {
      le(e.$$.fragment);
    },
    m(r, i) {
      oe(e, r, i), n = !0;
    },
    i(r) {
      n || (w(e.$$.fragment, r), n = !0);
    },
    o(r) {
      P(e.$$.fragment, r), n = !1;
    },
    d(r) {
      re(e, r);
    }
  };
}
function Mp(t) {
  let e, n = (
    /*$_*/
    t[10]("error.search") + ""
  ), r;
  return {
    c() {
      e = S("strong"), r = he(n);
    },
    m(i, s) {
      R(i, e, s), x(e, r);
    },
    p(i, s) {
      s[0] & /*$_*/
      1024 && n !== (n = /*$_*/
      i[10]("error.search") + "") && Te(r, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Np(t) {
  let e, n = (
    /*$_*/
    t[10]("error.feature-blocked") + ""
  ), r;
  return {
    c() {
      e = S("strong"), r = he(n);
    },
    m(i, s) {
      R(i, e, s), x(e, r);
    },
    p(i, s) {
      s[0] & /*$_*/
      1024 && n !== (n = /*$_*/
      i[10]("error.feature-blocked") + "") && Te(r, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Lp(t) {
  let e, n, r, i, s, o, a = (
    /*ready*/
    t[1] && !!/*svgSprite*/
    t[0] && /*visible*/
    t[2] && go(t)
  );
  return {
    c() {
      e = S("style"), n = Q(), r = S("div"), a && a.c(), i = Q(), s = S("div"), this.c = z, b(s, "id", "nuclia-glyphs-sprite"), s.hidden = !0, b(r, "class", "nuclia-widget"), b(r, "data-version", "__NUCLIA_DEV_VERSION__"), V(
        r,
        "dark-mode",
        /*darkMode*/
        t[4]
      );
    },
    m(l, c) {
      R(l, e, c), e.innerHTML = Bh, R(l, n, c), R(l, r, c), a && a.m(r, null), x(r, i), x(r, s), s.innerHTML = /*svgSprite*/
      t[0], o = !0;
    },
    p(l, c) {
      /*ready*/
      l[1] && /*svgSprite*/
      l[0] && /*visible*/
      l[2] ? a ? (a.p(l, c), c[0] & /*ready, svgSprite, visible*/
      7 && w(a, 1)) : (a = go(l), a.c(), w(a, 1), a.m(r, i)) : a && (ge(), P(a, 1, 1, () => {
        a = null;
      }), ve()), (!o || c[0] & /*svgSprite*/
      1) && (s.innerHTML = /*svgSprite*/
      l[0]), (!o || c[0] & /*darkMode*/
      16) && V(
        r,
        "dark-mode",
        /*darkMode*/
        l[4]
      );
    },
    i(l) {
      o || (w(a), o = !0);
    },
    o(l) {
      P(a), o = !1;
    },
    d(l) {
      l && T(e), l && T(n), l && T(r), a && a.d();
    }
  };
}
function zp(t, e, n) {
  let r, i, s, o, a, l, c, u, d, f, h, g, p, _;
  q(t, tr, (E) => n(5, i = E)), q(t, nr, (E) => n(6, s = E)), q(t, Yu, (E) => n(7, o = E)), q(t, Zu, (E) => n(8, a = E)), q(t, Pa, (E) => n(9, l = E)), q(t, Ft, (E) => n(10, c = E)), q(t, Dn, (E) => n(11, u = E)), q(t, ti, (E) => n(12, d = E)), q(t, Ea, (E) => n(13, f = E)), q(t, ad, (E) => n(14, h = E)), q(t, wn, (E) => n(15, g = E)), q(t, rd, (E) => n(16, p = E));
  let { backend: v = "https://nuclia.cloud/api" } = e, { zone: m = "europe-1" } = e, { knowledgebox: F } = e, { placeholder: y = "" } = e, { lang: k = "" } = e, { cdn: I = "" } = e, { apikey: $ = "" } = e, { kbslug: O = "" } = e, { account: j = "" } = e, { client: ie = "widget" } = e, { state: Me = "PUBLISHED" } = e, { features: Y = "" } = e, { standalone: De = !1 } = e, { mode: Ne = "" } = e, me = {};
  function wt(E) {
    Ht.set(E), tn.set(E || ""), gt.next();
  }
  function Ze() {
    console.log("reloadSearch"), gt.next();
  }
  const et = hr(), Je = (E, Be) => {
    et.dispatchEvent && et.dispatchEvent(new CustomEvent(E, { detail: Be, composed: !0 }));
  }, Qe = Dn.pipe(ia(1500));
  q(t, Qe, (E) => n(17, _ = E));
  let dt, ye = !1, Pe = !1, we;
  Sn(() => {
    I && pu(I), me = (Y ? Y.split(",").filter((Be) => !!Be) : []).reduce((Be, $t) => ({ ...Be, [$t]: !0 }), {}), Df(
      {
        backend: v,
        zone: m,
        knowledgeBox: F,
        client: ie,
        apiKey: $,
        kbSlug: O,
        standalone: De,
        account: j
      },
      Me,
      { highlight: !0, features: me }
    ), ze.set(me), y && Sa.set(y), me.answers && bh(), gu(), vu().subscribe((Be) => n(0, dt = Be)), (me.suggestions || me.suggestEntities) && mh(), n(23, k = k || window.navigator.language.split("-")[0] || "en"), wa(k), vh(Je), me.permalink && wh(), Sh();
    const E = document.querySelector('[data-nuclia="global-search-button"]');
    return E ? E.addEventListener("click", Ue) : console.error(`No button found to open Nuclia’s global search. Make sure you added 'data-nuclia="global-search-button"' to your search button.`), n(1, ye = !0), (Dn.getValue() || ti.getValue().length > 0) && tr.set(!0), () => {
      E && E.removeEventListener("click", Ue), Uf(), _h();
    };
  });
  function kt(E) {
    od.pipe(se(1)).subscribe((Be) => {
      const $t = Date.now() - Be.startTime;
      pl("search", { searchId: Be.searchId || "", tti: $t }), sd.set(void 0);
    });
  }
  function Ue() {
    n(2, Pe = !Pe);
  }
  function kr(E) {
    E.key === "Escape" && Ue();
  }
  function Sr(E) {
    E.target.classList.contains("backdrop") && Ue();
  }
  function Er() {
    Fa.set();
  }
  function tt() {
    we = this.offsetHeight, n(3, we);
  }
  return t.$$set = (E) => {
    "backend" in E && n(24, v = E.backend), "zone" in E && n(25, m = E.zone), "knowledgebox" in E && n(26, F = E.knowledgebox), "placeholder" in E && n(27, y = E.placeholder), "lang" in E && n(23, k = E.lang), "cdn" in E && n(28, I = E.cdn), "apikey" in E && n(29, $ = E.apikey), "kbslug" in E && n(30, O = E.kbslug), "account" in E && n(31, j = E.account), "client" in E && n(32, ie = E.client), "state" in E && n(33, Me = E.state), "features" in E && n(34, Y = E.features), "standalone" in E && n(35, De = E.standalone), "mode" in E && n(36, Ne = E.mode);
  }, t.$$.update = () => {
    t.$$.dirty[1] & /*mode*/
    32 && n(4, r = Ne === "dark");
  }, [
    dt,
    ye,
    Pe,
    we,
    r,
    i,
    s,
    o,
    a,
    l,
    c,
    u,
    d,
    f,
    h,
    g,
    p,
    _,
    Qe,
    kt,
    kr,
    Sr,
    Er,
    k,
    v,
    m,
    F,
    y,
    I,
    $,
    O,
    j,
    ie,
    Me,
    Y,
    De,
    Ne,
    wt,
    Ze,
    tt
  ];
}
class Dp extends Po {
  constructor(e) {
    super();
    const n = document.createElement("style");
    n.textContent = ".nuclia-widget{--color-dark-stronger:var(--custom-color-dark-stronger, #000);--color-dark-stronger-rgb:0, 0, 0;--color-light-stronger:#fff;--color-neutral-regular:hsl(0, 0%, 44%);--color-neutral-light:hsl(0, 0%, 77%);--color-neutral-lighter:hsl(0, 0%, 90%);--color-neutral-lightest:hsl(240, 7%, 97%);--color-primary-stronger:hsl(336, 100%, 24%);--color-primary-strong:hsl(336, 100%, 36%);--color-primary-regular:hsl(336, 100%, 50%);--color-primary-light:hsl(336, 100%, 73%);--color-primary-lighter:hsl(336, 100%, 90%);--color-primary-lightest:hsl(336, 100%, 96%);--color-secondary-stronger:hsl(51, 78%, 32%);--color-secondary-strong:hsl(51, 100%, 41%);--color-secondary-regular:hsl(51, 100%, 55%);--color-secondary-light:hsl(51, 100%, 75%);--color-secondary-lighter:hsl(51, 100%, 86%);--color-secondary-lightest:hsl(51, 100%, 95%);--color-tertiary-stronger:hsl(249, 100%, 24%);--color-tertiary-strong:hsl(249, 100%, 40%);--color-tertiary-regular:hsl(249, 100%, 50%);--color-tertiary-light:hsl(249, 100%, 65%);--color-tertiary-lighter:hsl(249, 100%, 92%);--color-tertiary-lightest:hsl(249, 100%, 96%);--spacer:8px;--rhythm-0_25:calc(var(--spacer) * 0.25);--rhythm-0_5:calc(var(--spacer) * 0.5);--rhythm-1:var(--spacer);--rhythm-1_5:calc(var(--spacer) * 1.5);--rhythm-2:calc(var(--spacer) * 2);--rhythm-2_5:calc(var(--spacer) * 2.5);--rhythm-3:calc(var(--spacer) * 3);--rhythm-4:calc(var(--spacer) * 4);--rhythm-5:calc(var(--spacer) * 5);--rhythm-6:calc(var(--spacer) * 6);--rhythm-7:calc(var(--spacer) * 7);--rhythm-8:calc(var(--spacer) * 8);--rhythm-9:calc(var(--spacer) * 9);--rhythm-10:calc(var(--spacer) * 10);--rhythm-11:calc(var(--spacer) * 11);--rhythm-12:calc(var(--spacer) * 12);--rhythm-14:calc(var(--spacer) * 14);--rhythm-16:calc(var(--spacer) * 16);--rhythm-20:calc(var(--spacer) * 20);--rhythm-22:calc(var(--spacer) * 22);--rhythm-24:calc(var(--spacer) * 24);--rhythm-27:calc(var(--spacer) * 27);--rhythm-28:calc(var(--spacer) * 28);--rhythm-32:calc(var(--spacer) * 32);--rhythm-36:calc(var(--spacer) * 36);--rhythm-39:calc(var(--spacer) * 39);--rhythm-40:calc(var(--spacer) * 40);--rhythm-46:calc(var(--spacer) * 46);--rhythm-48:calc(var(--spacer) * 48);--rhythm-53:calc(var(--spacer) * 53);--rhythm-56:calc(var(--spacer) * 56);--rhythm-64:calc(var(--spacer) * 64);--rhythm-75:calc(var(--spacer) * 75);--rhythm-80:calc(var(--spacer) * 80);--font-size-base:16px;--font-size-medium:14px;--font-size-small:12px;--font-size-xsmall:10px;--font-weight-body:300;--font-weight-medium:500;--font-weight-semi-bold:600;--font-weight-bold:700;--nuclia-family:Inter, sans-serif;--font-family-body:var(--custom-font-family-body, var(--nuclia-family));--font-size-title-m:var(--font-size-base);--font-size-title-s:var(--font-size-medium);--font-weight-title-m:var(--font-weight-semi-bold);--line-height-body-xs:var(--font-size-base);--line-height-body-s:calc(var(--font-size-base) * 1.125);--line-height-body:calc(var(--font-size-base) * 1.25);--line-height-title-m-mobile:calc(var(--font-size-base) * 1.625);--line-height-title-m:calc(var(--font-size-base) * 1.75);--line-height-title-s:calc(var(--font-size-base) * 1.375);--line-height-title-xs:calc(var(--font-size-base) * 1.375);--line-height-title-xxs:calc(var(--font-size-base) * 1.375);--duration--superfast:0.16s;--duration--fast:0.24s;--duration--moderate:0.48s;--duration--slow:0.8s;--transition-superfast:var(--duration--superfast) ease-in-out;--transition-fast:var(--duration--fast) ease;--transition-moderate:var(--duration--moderate) ease;--transition-slow:var(--duration--slow) cubic-bezier(0.6, 0, 0.4, 1);--border-radius:var(--rhythm-0_25);--color-backdrop:rgba(var(--color-dark-stronger-rgb), 0.5);--default-modal-width:calc(100vw - var(--rhythm-1_5));--shadow-modal:0 var(--rhythm-0_25) var(--rhythm-1) rgba(var(--color-dark-stronger-rgb), 0.2);--z-index-modal:10010;--z-index-modal-backdrop:10000;--resource-modal-width:var(--default-modal-width);--resource-modal-width-md:80vw;--resource-modal-height:calc(100vh - var(--rhythm-16));--resource-modal-height-md:85vh;--color-scrollbar-track:var(--color-light-stronger);--color-scrollbar-thumb:var(--color-dark-stronger);--focus-shadow:inset 0 0 0 var(--rhythm-0_25) var(--color-primary-lighter);--search-bar-border-color:var(--border-color);--search-bar-border-focus-color:var(--border-focus-color);--search-bar-border:1px solid var(--search-bar-border-color);--search-bar-border-focus:1px solid var(--search-bar-border-focus-color);--search-bar-border-radius:0;--search-bar-max-width:var(--rhythm-56);--expander-header-height:var(--rhythm-5);--player-bar-height:var(--rhythm-5);--border-color:var(--custom-border-color, var(--color-dark-stronger));--border-focus-color:var(--custom-border-focus-color, var(--color-primary-regular));--link-color:var(--custom-link-color, var(--color-primary-regular));--text-color:var(--custom-text-color, var(--color-dark-stronger));--selected-text-color:var(--custom-selected-text-color, inherit);--selected-background-color:var(--custom-selected-background-color, var(--color-primary-lightest));--hover-background-color:var(--custom-hover-background-color, var(--color-neutral-lightest));--thumbnail-background-color:var(--custom-thumbnail-background-color, var(--color-neutral-lightest));--modal-background-color:var(--custom-modal-background-color, var(--color-neutral-lighter));--dropdown-background-color:var(--custom-dropdown-background-color, var(--color-light-stronger));--container-background-color:var(--custom-container-background-color, var(--color-light-stronger));box-sizing:border-box;color:var(--text-color);font-family:var(--font-family-body);font-size:var(--font-size-base);font-weight:var(--font-weight-body);line-height:var(--line-height-body);text-align:left}.nuclia-widget.dark-mode{--border-color:var(--color-neutral-lightest);--text-color:var(--color-neutral-lightest);--selected-text-color:var(--color-dark-stronger);--hover-background-color:#2b2d30;--thumbnail-background-color:#2b2d30;--modal-background-color:#303136;--dropdown-background-color:#26282b;--container-background-color:#1f2023}.backdrop{--top-spacing:var(--rhythm-2);--side-spacing:var(--rhythm-2);align-items:start;background:rgba(0, 0, 0, 0.5);bottom:0;display:flex;justify-content:center;left:0;padding-top:var(--top-spacing);position:fixed;right:0;top:0;z-index:0}.search-container{--search-bar-height:var(--rhythm-6);background:#fff;max-height:calc(100vh - var(--top-spacing) * 2);overflow:hidden;width:calc(100% - var(--side-spacing) * 2)}.search-container:not(.with-results){height:var(--search-bar-height)}.search-container.with-results .search-bar-container{border-bottom:1px solid var(--color-neutral-light)}.search-container .search-bar-container{position:sticky;top:0;z-index:1}.search-container .search-bar-container,.search-container .search-results-container{background:inherit}.search-container .search-results-container{--vertical-spacing:var(--rhythm-1)}.search-container .search-results-container .search-results{max-height:calc(100vh - var(--top-spacing) * 2 - var(--search-bar-height) - var(--answer-height) - var(--vertical-spacing) * 2);padding:var(--vertical-spacing) 0;overflow:auto}@media(min-width: 640px){.backdrop{--top-spacing:var(--rhythm-11)}.search-container{max-width:784px;width:80%}}", this.shadowRoot.appendChild(n), Ce(
      this,
      {
        target: this.shadowRoot,
        props: ql(this.attributes),
        customElement: !0
      },
      zp,
      Lp,
      Fe,
      {
        backend: 24,
        zone: 25,
        knowledgebox: 26,
        placeholder: 27,
        lang: 23,
        cdn: 28,
        apikey: 29,
        kbslug: 30,
        account: 31,
        client: 32,
        state: 33,
        features: 34,
        standalone: 35,
        mode: 36,
        search: 37,
        reloadSearch: 38
      },
      null,
      [-1, -1]
    ), e && (e.target && R(e.target, this, e.anchor), e.props && (this.$set(e.props), ke()));
  }
  static get observedAttributes() {
    return [
      "backend",
      "zone",
      "knowledgebox",
      "placeholder",
      "lang",
      "cdn",
      "apikey",
      "kbslug",
      "account",
      "client",
      "state",
      "features",
      "standalone",
      "mode",
      "search",
      "reloadSearch"
    ];
  }
  get backend() {
    return this.$$.ctx[24];
  }
  set backend(e) {
    this.$$set({ backend: e }), ke();
  }
  get zone() {
    return this.$$.ctx[25];
  }
  set zone(e) {
    this.$$set({ zone: e }), ke();
  }
  get knowledgebox() {
    return this.$$.ctx[26];
  }
  set knowledgebox(e) {
    this.$$set({ knowledgebox: e }), ke();
  }
  get placeholder() {
    return this.$$.ctx[27];
  }
  set placeholder(e) {
    this.$$set({ placeholder: e }), ke();
  }
  get lang() {
    return this.$$.ctx[23];
  }
  set lang(e) {
    this.$$set({ lang: e }), ke();
  }
  get cdn() {
    return this.$$.ctx[28];
  }
  set cdn(e) {
    this.$$set({ cdn: e }), ke();
  }
  get apikey() {
    return this.$$.ctx[29];
  }
  set apikey(e) {
    this.$$set({ apikey: e }), ke();
  }
  get kbslug() {
    return this.$$.ctx[30];
  }
  set kbslug(e) {
    this.$$set({ kbslug: e }), ke();
  }
  get account() {
    return this.$$.ctx[31];
  }
  set account(e) {
    this.$$set({ account: e }), ke();
  }
  get client() {
    return this.$$.ctx[32];
  }
  set client(e) {
    this.$$set({ client: e }), ke();
  }
  get state() {
    return this.$$.ctx[33];
  }
  set state(e) {
    this.$$set({ state: e }), ke();
  }
  get features() {
    return this.$$.ctx[34];
  }
  set features(e) {
    this.$$set({ features: e }), ke();
  }
  get standalone() {
    return this.$$.ctx[35];
  }
  set standalone(e) {
    this.$$set({ standalone: e }), ke();
  }
  get mode() {
    return this.$$.ctx[36];
  }
  set mode(e) {
    this.$$set({ mode: e }), ke();
  }
  get search() {
    return this.$$.ctx[37];
  }
  get reloadSearch() {
    return this.$$.ctx[38];
  }
}
customElements.define("nuclia-global-search", Dp);
