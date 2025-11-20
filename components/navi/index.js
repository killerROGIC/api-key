var t = require("../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [14], {
    131: function(t, e, n) {
      t.exports = n.p + "components/navi/index.wxml"
    },
    372: function(t, e, n) {
      n(131)
    },
    373: function(t, e, n) {},
    508: function(e, n, o) {
      o.r(n), o(372);
      var a, r, i = o(0),
        s = o.n(i),
        c = (o(373), o(7)),
        u = function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
          }
          return function(e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e
          }
        }();

      function l(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function p(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != t(n) && "function" != typeof n ? e : n
      }
      var _ = (r = a = function(e) {
        function n() {
          var t, e, o;
          l(this, n);
          for (var a = arguments.length, r = Array(a), i = 0; i < a; i++) r[i] = arguments[i];
          return e = o = p(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [this].concat(r))), o.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "systemInfo", "customBar", "normalBack", "handleBack", "isOpcity", "colors", "background", "title", "children"], o.handleGoBack = function() {
            return s.a.navigateBack()
          }, o.customComponents = [], p(o, e)
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
        }(n, e), u(n, [{
          key: "_constructor",
          value: function(t) {
            (function t(e, n, o) {
              null === e && (e = Function.prototype);
              var a = Object.getOwnPropertyDescriptor(e, n);
              if (void 0 === a) {
                var r = Object.getPrototypeOf(e);
                return null === r ? void 0 : t(r, n, o)
              }
              if ("value" in a) return a.value;
              var i = a.get;
              return void 0 !== i ? i.call(o) : void 0
            })(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "_constructor", this).call(this, t);
            var e = t.handleBack,
              o = s.a.getMenuButtonBoundingClientRect(),
              a = o.top + o.bottom - Object(c.a)().statusBarHeight;
            console.log("ComponentBaseNavigation", a), this.state = {
              systemInfo: Object(c.a)(),
              customBar: a,
              normalBack: s.a.getCurrentPages().length > 1 && !e
            }, this.$$refs = new s.a.RefsArray
          }
        }, {
          key: "componentDidMount",
          value: function() {}
        }, {
          key: "goOther",
          value: function() {
            var t = this.props.handleBack;
            this.state.normalBack ? s.a.navigateBack() : t ? t() : s.a.reLaunch({
              url: "/pages/index/index"
            })
          }
        }, {
          key: "_createData",
          value: function() {
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, this.$prefix;
            var t = this.__state.customBar,
              e = this.__state.systemInfo.statusBarHeight,
              n = this.__props,
              o = n.isOpcity,
              a = n.colors,
              r = {
                height: t + "px",
                paddingTop: e + "px"
              },
              s = {
                background: this.__props.background || "#fff"
              };
            o && delete s.background;
            var c = {
                top: e + "px"
              },
              u = Object(i.internal_inline_style)(s),
              l = Object(i.internal_inline_style)(r),
              p = Object(i.internal_inline_style)(a ? "border-color:" + a + ";" : ""),
              _ = Object(i.internal_inline_style)(c),
              f = Object(i.internal_inline_style)(a ? "color:" + a + ";" : ""),
              m = Object(i.internal_inline_style)(r);
            return Object.assign(this.__state, {
              anonymousState__temp: u,
              anonymousState__temp2: l,
              anonymousState__temp3: p,
              anonymousState__temp4: _,
              anonymousState__temp5: f,
              anonymousState__temp6: m
            }), this.__state
          }
        }]), n
      }(i.Component), a.$$events = ["goOther"], a.options = {
        addGlobalClass: !0
      }, a.defaultProps = {
        color: "white",
        backgroundColor: "#2f3333",
        ishome: !1
      }, a.$$componentPath = "components/navi/index", r);
      Component(o(0).default.createComponent(_))
    }
  },
  [
    [508, 0, 1, 2]
  ]
]);