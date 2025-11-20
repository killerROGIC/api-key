var t = require("../../../../../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [21], {
    144: function(t, e, r) {
      t.exports = r.p + "npm/taro-ui/dist/weapp/components/activity-indicator/index.wxml"
    },
    391: function(t, e, r) {
      r(144)
    },
    521: function(e, r, n) {
      n.r(r), n(391);
      var o, i, a = n(0),
        c = n.n(a),
        s = n(3),
        p = n.n(s),
        u = n(1),
        l = n.n(u),
        f = n(4),
        y = function(t, e) {
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
        },
        d = function() {
          function t(t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
          }
          return function(e, r, n) {
            return r && t(e.prototype, r), n && t(e, n), e
          }
        }();

      function _(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function h(e, r) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !r || "object" != t(r) && "function" != typeof r ? e : r
      }
      var m = (i = o = function(e) {
        function r() {
          var t, e, n;
          _(this, r);
          for (var o = arguments.length, i = Array(o), a = 0; a < o; a++) i[a] = arguments[a];
          return e = n = h(this, (t = r.__proto__ || Object.getPrototypeOf(r)).call.apply(t, [this].concat(i))), n.$usedState = ["$compid__250", "rootClass", "content", "color", "size", "mode", "isOpened", "className"], n.customComponents = ["AtLoading"], h(n, e)
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
        }(r, e), d(r, [{
          key: "_constructor",
          value: function(t) {
            (function t(e, r, n) {
              null === e && (e = Function.prototype);
              var o = Object.getOwnPropertyDescriptor(e, r);
              if (void 0 === o) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, r, n)
              }
              if ("value" in o) return o.value;
              var a = o.get;
              return void 0 !== a ? a.call(n) : void 0
            })(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "_constructor", this).call(this, t), this.$$refs = new c.a.RefsArray
          }
        }, {
          key: "_createData",
          value: function() {
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
            var t = this.$prefix,
              e = Object(a.genCompid)(t + "$compid__250"),
              r = y(e, 2),
              n = r[0],
              o = r[1],
              i = this.__props,
              c = i.color,
              s = i.size,
              u = i.mode,
              l = i.content,
              f = i.isOpened,
              d = p()("at-activity-indicator", {
                "at-activity-indicator--center": "center" === u,
                "at-activity-indicator--isopened": f
              }, this.__props.className);
            return a.propsManager.set({
              size: s,
              color: c
            }, o, n), Object.assign(this.__state, {
              $compid__250: o,
              rootClass: d,
              content: l
            }), this.__state
          }
        }]), r
      }(f.a), o.$$events = [], o.$$componentPath = "node_modules/taro-ui/dist/weapp/components/activity-indicator/index", i);
      m.defaultProps = {
        size: 0,
        mode: "normal",
        color: "",
        content: "",
        className: "",
        isOpened: !0
      }, m.propTypes = {
        size: l.a.number,
        mode: l.a.string,
        color: l.a.string,
        content: l.a.string,
        className: l.a.oneOfType([l.a.array, l.a.string]),
        isOpened: l.a.bool
      }, Component(n(0).default.createComponent(m))
    }
  },
  [
    [521, 0, 1]
  ]
]);