var e = require("../../../../../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [20], {
    165: function(e, t, n) {
      e.exports = n.p + "npm/taro-ui/dist/weapp/components/action-sheet/index.wxml"
    },
    439: function(e, t, n) {
      n(165)
    },
    535: function(t, n, o) {
      o.r(n), o(439);
      var r, i, a = o(0),
        s = o.n(a),
        c = o(3),
        p = o.n(c),
        l = o(1),
        u = o.n(l),
        f = o(4),
        h = function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return function(e, t) {
            var n = [],
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); o = !0);
            } catch (e) {
              r = !0, i = e
            } finally {
              try {
                !o && s.return && s.return()
              } finally {
                if (r) throw i
              }
            }
            return n
          }(e, t);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        },
        d = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
          }
          return function(t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        }();

      function _(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function y(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != e(n) && "function" != typeof n ? t : n
      }
      var v = (i = r = function(t) {
        function n() {
          var e, t, o;
          _(this, n);
          for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
          return t = o = y(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(i))), o.$usedState = ["$compid__253", "rootClass", "title", "cancelText", "_isOpened", "className", "isOpened", "children"], o.handleClose = function() {
            "function" == typeof o.props.onClose && o.props.onClose()
          }, o.handleCancel = function() {
            if ("function" == typeof o.props.onCancel) return o.props.onCancel();
            o.close()
          }, o.close = function() {
            o.setState({
              _isOpened: !1
            }, o.handleClose)
          }, o.handleTouchMove = function(e) {
            e.stopPropagation(), e.preventDefault()
          }, o.customComponents = ["AtActionSheetHeader", "AtActionSheetBody", "AtActionSheetFooter"], y(o, t)
        }
        return function(t, n) {
          if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + e(n));
          t.prototype = Object.create(n && n.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n)
        }(n, t), d(n, [{
          key: "_constructor",
          value: function(e) {
            (function e(t, n, o) {
              null === t && (t = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(t, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(t);
                return null === i ? void 0 : e(i, n, o)
              }
              if ("value" in r) return r.value;
              var a = r.get;
              return void 0 !== a ? a.call(o) : void 0
            })(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "_constructor", this).call(this, e);
            var t = e.isOpened;
            this.state = {
              _isOpened: t
            }, this.$$refs = new s.a.RefsArray
          }
        }, {
          key: "componentWillReceiveProps",
          value: function(e) {
            var t = e.isOpened;
            t !== this.state._isOpened && (this.setState({
              _isOpened: t
            }), !t && this.handleClose())
          }
        }, {
          key: "_createData",
          value: function() {
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
            var e = this.$prefix,
              t = Object(a.genCompid)(e + "$compid__253"),
              n = h(t, 2),
              o = n[0],
              r = n[1],
              i = this.__props,
              s = i.title,
              c = i.cancelText,
              l = i.className,
              u = this.__state._isOpened,
              f = p()("at-action-sheet", {
                "at-action-sheet--active": u
              }, l);
            return c && a.propsManager.set({
              onClick: this.handleCancel
            }, r, o), Object.assign(this.__state, {
              $compid__253: r,
              rootClass: f,
              title: s,
              cancelText: c
            }), this.__state
          }
        }]), n
      }(f.a), r.$$events = ["handleTouchMove", "close"], r.$$componentPath = "node_modules/taro-ui/dist/weapp/components/action-sheet/index", i);
      v.defaultProps = {
        title: "",
        cancelText: "",
        isOpened: !1
      }, v.propTypes = {
        title: u.a.string,
        onClose: u.a.func,
        onCancel: u.a.func,
        isOpened: u.a.bool.isRequired,
        cancelText: u.a.string
      }, Component(o(0).default.createComponent(v))
    }
  },
  [
    [535, 0, 1]
  ]
]);