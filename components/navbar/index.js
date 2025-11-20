var t = require("../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [13], {
    164: function(t, e, n) {
      t.exports = n.p + "components/navbar/index.wxml"
    },
    437: function(t, e, n) {
      n(164)
    },
    438: function(t, e, n) {},
    534: function(e, n, o) {
      o.r(n), o(437);
      var r, a, i = o(0),
        s = o.n(i),
        p = (o(438), function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
          }
          return function(e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e
          }
        }());

      function u(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function c(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != t(n) && "function" != typeof n ? e : n
      }
      var l = s.a.getSystemInfoSync().statusBarHeight,
        f = (a = r = function(e) {
          function n() {
            var t, e, o;
            u(this, n);
            for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
            return e = o = c(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [this].concat(a))), o.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "showBack", "title", "background", "height", "align", "children"], o.customComponents = [], c(o, e)
          }
          return function(e, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + t(n));
            e.prototype = Object.create(n && n.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n)
          }(n, e), p(n, [{
            key: "_constructor",
            value: function(t) {
              (function t(e, n, o) {
                null === e && (e = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(e, n);
                if (void 0 === r) {
                  var a = Object.getPrototypeOf(e);
                  return null === a ? void 0 : t(a, n, o)
                }
                if ("value" in r) return r.value;
                var i = r.get;
                return void 0 !== i ? i.call(o) : void 0
              })(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "_constructor", this).call(this, t), this.$$refs = new s.a.RefsArray
            }
          }, {
            key: "_createData",
            value: function() {
              this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, this.$prefix;
              var t = this.__props,
                e = t.background,
                n = t.height,
                o = t.title,
                r = t.showBack,
                a = t.align,
                p = Number.parseInt(s.a.pxTransform(96)) / 2 + l + "PX",
                u = l + "PX";
              l || (p = s.a.pxTransform(96), u = "20PX");
              var c = Object(i.internal_inline_style)({
                  height: p
                }),
                f = Object(i.internal_inline_style)({
                  height: n || s.a.pxTransform(96),
                  paddingTop: u,
                  lineHeight: n || s.a.pxTransform(96),
                  background: e || "#fff",
                  zIndex: 99
                }),
                _ = Object(i.internal_inline_style)({
                  textAlign: a || "left",
                  paddingLeft: null == a || "left" == a ? "10px" : "0"
                }),
                h = r ? Object(i.internal_inline_style)("center" == a ? "position: absolute;left:10px;top:8px;" : "") : null;
              return Object.assign(this.__state, {
                anonymousState__temp: c,
                anonymousState__temp2: f,
                anonymousState__temp3: _,
                anonymousState__temp4: h,
                showBack: r,
                title: o
              }), this.__state
            }
          }]), n
        }(i.Component), r.$$events = [], r.$$componentPath = "components/navbar/index", a);
      Component(o(0).default.createComponent(f))
    }
  },
  [
    [534, 0, 1]
  ]
]);