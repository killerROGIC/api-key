var t = require("../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [9], {
    162: function(t, e, r) {
      t.exports = r.p + "components/PrivacyLayout/index.wxml"
    },
    434: function(t, e, r) {
      r(162)
    },
    435: function(t, e, r) {},
    532: function(e, r, n) {
      n.r(r), n(434);
      var o, i, a = n(0),
        c = n.n(a),
        u = (n(435), function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function(t, e) {
            var r = [],
              n = !0,
              o = !1,
              i = void 0;
            try {
              for (var a, c = t[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
              o = !0, i = t
            } finally {
              try {
                !n && c.return && c.return()
              } finally {
                if (o) throw i
              }
            }
            return r
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }),
        s = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e
          }
        }(),
        p = function t(e, r, n) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, r);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, r, n)
          }
          if ("value" in o) return o.value;
          var a = o.get;
          return void 0 !== a ? a.call(n) : void 0
        };

      function l(t) {
        if (null == t) throw new TypeError("Cannot destructure undefined")
      }

      function f(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function y(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || "object" != t(r) && "function" != typeof r ? e : r
      }
      var h = (i = o = function(e) {
        function r() {
          var t, e, n;
          f(this, r);
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
          return e = n = y(this, (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(t, [this].concat(i))), n.$usedState = ["$compid__244", "isShow", "__fn_onClick", "__fn_onagreeprivacyauthorization"], n.customComponents = ["AtFloatLayout"], y(n, e)
        }
        return function(e, r) {
          if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + t(r));
          e.prototype = Object.create(r && r.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r)
        }(r, e), s(r, [{
          key: "_constructor",
          value: function() {
            p(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "_constructor", this).apply(this, arguments), this.state = {}, this.$$refs = new c.a.RefsArray
          }
        }, {
          key: "goPricy",
          value: function() {
            wx.openPrivacyContract({
              success: function(t) {
                console.log("openPrivacyContract success")
              },
              fail: function(t) {
                console.error("openPrivacyContract fail", t)
              }
            })
          }
        }, {
          key: "_createData",
          value: function() {
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
            var t = this.$prefix,
              e = Object(a.genCompid)(t + "$compid__244"),
              r = u(e, 2),
              n = r[0],
              o = r[1],
              i = this.__props,
              c = i.isShow;
            return i.onAgree, i.onDisagree, l(this.__state), a.propsManager.set({
              isOpened: c
            }, o, n), Object.assign(this.__state, {
              $compid__244: o
            }), this.__state
          }
        }, {
          key: "funPrivateghzzz",
          value: function() {
            return this.props.onDisagree.apply(void 0, Array.prototype.slice.call(arguments, 1))
          }
        }, {
          key: "funPrivategizzz",
          value: function() {
            return this.props.onAgree.apply(void 0, Array.prototype.slice.call(arguments, 1))
          }
        }]), r
      }(a.Component), o.$$events = ["goPricy", "funPrivateghzzz", "funPrivategizzz"], o.$$componentPath = "components/PrivacyLayout/index", i);
      h.defaultProps = {
        isShow: !1
      }, Component(n(0).default.createComponent(h))
    }
  },
  [
    [532, 0, 1]
  ]
]);