var t = require("../../../../../../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [16], {
    167: function(t, e, o) {
      t.exports = o.p + "npm/taro-ui/dist/weapp/components/action-sheet/body/index.wxml"
    },
    441: function(t, e, o) {
      o(167)
    },
    537: function(e, o, n) {
      n.r(o), n(441);
      var r, a, i = n(0),
        s = n.n(i),
        c = n(3),
        p = n.n(c),
        u = n(4),
        l = function() {
          function t(t, e) {
            for (var o = 0; o < e.length; o++) {
              var n = e[o];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
          }
        }();

      function f(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function h(e, o) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !o || "object" != t(o) && "function" != typeof o ? e : o
      }
      var _ = (a = r = function(e) {
        function o() {
          var t, e, n;
          f(this, o);
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++) a[i] = arguments[i];
          return e = n = h(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [this].concat(a))), n.$usedState = ["rootClass", "className", "children"], n.customComponents = [], h(n, e)
        }
        return function(e, o) {
          if ("function" != typeof o && null !== o) throw new TypeError("Super expression must either be null or a function, not " + t(o));
          e.prototype = Object.create(o && o.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(e, o) : e.__proto__ = o)
        }(o, e), l(o, [{
          key: "_constructor",
          value: function(t) {
            (function t(e, o, n) {
              null === e && (e = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(e, o);
              if (void 0 === r) {
                var a = Object.getPrototypeOf(e);
                return null === a ? void 0 : t(a, o, n)
              }
              if ("value" in r) return r.value;
              var i = r.get;
              return void 0 !== i ? i.call(n) : void 0
            })(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "_constructor", this).call(this, t), this.$$refs = new s.a.RefsArray
          }
        }, {
          key: "_createData",
          value: function() {
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, this.$prefix;
            var t = p()("at-action-sheet__body", this.__props.className);
            return Object.assign(this.__state, {
              rootClass: t
            }), this.__state
          }
        }]), o
      }(u.a), r.$$events = [], r.$$componentPath = "node_modules/taro-ui/dist/weapp/components/action-sheet/body/index", a);
      Component(n(0).default.createComponent(_))
    }
  },
  [
    [537, 0, 1]
  ]
]);