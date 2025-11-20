var t = require("../../../../../../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [18], {
    168: function(t, e, o) {
      t.exports = o.p + "npm/taro-ui/dist/weapp/components/action-sheet/footer/index.wxml"
    },
    442: function(t, e, o) {
      o(168)
    },
    538: function(e, o, n) {
      n.r(o), n(442);
      var r, i, a, s = n(0),
        c = n.n(s),
        p = n(3),
        u = n.n(p),
        l = n(1),
        f = n.n(l),
        h = n(4),
        y = function() {
          function t(t, e) {
            for (var o = 0; o < e.length; o++) {
              var n = e[o];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
          }
        }(),
        _ = function t(e, o, n) {
          null === e && (e = Function.prototype);
          var r = Object.getOwnPropertyDescriptor(e, o);
          if (void 0 === r) {
            var i = Object.getPrototypeOf(e);
            return null === i ? void 0 : t(i, o, n)
          }
          if ("value" in r) return r.value;
          var a = r.get;
          return void 0 !== a ? a.call(n) : void 0
        };

      function b(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function v(e, o) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !o || "object" != t(o) && "function" != typeof o ? e : o
      }
      var d = (i = r = function(e) {
        function o() {
          var t, e, n;
          b(this, o);
          for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
          return e = n = v(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [this].concat(i))), a.call(n), v(n, e)
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
        }(o, e), y(o, [{
          key: "_constructor",
          value: function() {
            _(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "_constructor", this).apply(this, arguments), this.$$refs = new c.a.RefsArray
          }
        }, {
          key: "_createData",
          value: function() {
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {}, this.$prefix;
            var t = u()("at-action-sheet__footer", this.__props.className);
            return Object.assign(this.__state, {
              rootClass: t
            }), this.__state
          }
        }]), o
      }(h.a), r.$$events = ["handleClick"], r.$$componentPath = "node_modules/taro-ui/dist/weapp/components/action-sheet/footer/index", a = function() {
        var t = this;
        this.$usedState = ["rootClass", "className", "children"], this.handleClick = function() {
          var e;
          "function" == typeof t.props.onClick && (e = t.props).onClick.apply(e, arguments)
        }, this.customComponents = []
      }, i);
      d.defaultProps = {
        onClick: function() {}
      }, d.propTypes = {
        onClick: f.a.func
      }, Component(n(0).default.createComponent(d))
    }
  },
  [
    [538, 0, 1]
  ]
]);