var t = require("../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [4], {
    138: function(t, e, n) {
      t.exports = n.p + "components/Agreement/index.wxml"
    },
    381: function(t, e, n) {
      n(138)
    },
    382: function(t, e, n) {},
    515: function(e, n, o) {
      o.r(n), o(381);
      var r, i, s = o(10),
        a = o.n(s),
        c = o(0),
        u = o.n(c),
        l = (o(382), function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function(t, e) {
            var n = [],
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (var s, a = t[Symbol.iterator](); !(o = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); o = !0);
            } catch (t) {
              r = !0, i = t
            } finally {
              try {
                !o && a.return && a.return()
              } finally {
                if (r) throw i
              }
            }
            return n
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }),
        p = function() {
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

      function f(t) {
        return function() {
          var e = t.apply(this, arguments);
          return new Promise((function(t, n) {
            return function o(r, i) {
              try {
                var s = e[r](i),
                  a = s.value
              } catch (t) {
                return void n(t)
              }
              if (!s.done) return Promise.resolve(a).then((function(t) {
                o("next", t)
              }), (function(t) {
                o("throw", t)
              }));
              t(a)
            }("next")
          }))
        }
      }

      function h(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function y(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != t(n) && "function" != typeof n ? e : n
      }
      var m = (i = r = function(e) {
        function n() {
          var t, e, o;
          h(this, n);
          for (var r = arguments.length, i = Array(r), s = 0; s < r; s++) i[s] = arguments[s];
          return e = o = y(this, (t = n.__proto__ || Object.getPrototypeOf(n)).call.apply(t, [this].concat(i))), o.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__239", "content", "btnInfo", "btnIndex", "status", "isOpened", "allData", "boxViewHeight", "key", "isFirst", "close", "confirm", "title", "contentPaddingStyle"], o.customComponents = ["AtFloatLayout"], y(o, e)
        }
        var o;
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
            var e;
            (e = function t(e, n, o) {
              null === e && (e = Function.prototype);
              var r = Object.getOwnPropertyDescriptor(e, n);
              if (void 0 === r) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : t(i, n, o)
              }
              if ("value" in r) return r.value;
              var s = r.get;
              return void 0 !== s ? s.call(o) : void 0
            }(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "_constructor", this)).call.apply(e, [this].concat(function(t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
              }
              return Array.from(t)
            }(t))), this.state = {
              status: t.status,
              isOpened: t.isFirst,
              content: "",
              allData: {},
              btnIndex: 0,
              btnInfo: [{
                text: "请上划看完本条款在同意",
                bg: "#969696"
              }, {
                text: "同意本条款，下次不再提示",
                bg: "#f01632"
              }],
              boxViewHeight: 300,
              key: !1
            }, this.$$refs = new u.a.RefsArray
          }
        }, {
          key: "componentDidMount",
          value: function() {}
        }, {
          key: "componentWillReceiveProps",
          value: (o = f(a.a.mark((function t(e) {
            return a.a.wrap((function(t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  this.props.isFirst != e.isFirst && (this.state.status && e.isFirst && this.getAgreement(), this.setState({
                    isOpened: e.isFirst
                  }));
                case 1:
                case "end":
                  return t.stop()
              }
            }), t, this)
          }))), function(t) {
            return o.apply(this, arguments)
          })
        }, {
          key: "getAgreementInfo",
          value: function() {
            var t = this;
            return new Promise((function(e) {
              t.refs.agreement.boundingClientRect().exec((function(t) {
                t && t.length && e(t[t.length - 1])
              }))
            }))
          }
        }, {
          key: "getScrollBoxInfo",
          value: function() {
            var t = this;
            return new Promise((function(e) {
              t.refs.scrollBox.boundingClientRect().exec((function(t) {
                t && t.length && e(t[t.length - 1])
              }))
            }))
          }
        }, {
          key: "getAgreement",
          value: function() {
            var t = this;
            this.post("mk/app/commodityAgreement/getCommodityAgreementByType", {
              status: this.state.status
            }, (function(e) {
              if ("200" == e.code) {
                var n = e.data.content,
                  o = n.substring(n.indexOf("<body>") + 6, n.lastIndexOf("</body>"));
                t.setState({
                  allData: e.data,
                  content: o,
                  key: !0
                }, f(a.a.mark((function e() {
                  var n, o;
                  return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.getAgreementInfo();
                      case 2:
                        return n = e.sent, e.next = 5, t.getScrollBoxInfo();
                      case 5:
                        o = e.sent, t.state.key && n.height - 5 <= o.height && t.setState({
                          btnIndex: 1,
                          key: !1
                        });
                      case 7:
                      case "end":
                        return e.stop()
                    }
                  }), e, t)
                }))))
              } else u.a.showToast({
                title: e.message,
                icon: "none"
              })
            }))
          }
        }, {
          key: "onScrollToLower",
          value: function() {
            this.setState({
              btnIndex: 1
            })
          }
        }, {
          key: "onClose",
          value: function() {
            this.props.close(!this.state.isOpened)
          }
        }, {
          key: "onConfirm",
          value: function() {
            this.state.btnIndex && (this.setState({
              isOpened: !1
            }), this.props.confirm(!this.state.isOpened))
          }
        }, {
          key: "_createData",
          value: function() {
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
            var t = this.$prefix,
              e = Object(c.genCompid)(t + "$compid__239"),
              n = l(e, 2),
              o = n[0],
              r = n[1],
              i = this.__props,
              s = i.title,
              a = i.contentPaddingStyle,
              u = this.__state,
              p = u.isOpened,
              f = (u.content, u.btnInfo),
              h = u.btnIndex,
              y = Object(c.internal_inline_style)({
                maxHeight: "50vh",
                boxSizing: "border-box",
                overflowY: "auto"
              }),
              m = Object(c.internal_inline_style)({
                padding: "\n          " + (a && a.top || "5px") + " \n          " + (a && a.left || "5px") + " \n          110px \n          " + (a && a.right || "5px")
              }),
              d = Object(c.internal_inline_style)({
                backgroundColor: f[h].bg
              });
            return c.propsManager.set({
              isOpened: p,
              scrollWithAnimation: !0,
              onClose: this.onClose.bind(this),
              title: s
            }, r, o), this.$$refs.pushRefs([{
              type: "dom",
              id: "gfzzz",
              refName: "scrollBox",
              fn: null
            }, {
              type: "dom",
              id: "ggzzz",
              refName: "agreement",
              fn: null
            }]), Object.assign(this.__state, {
              anonymousState__temp: y,
              anonymousState__temp2: m,
              anonymousState__temp3: d,
              $compid__239: r
            }), this.__state
          }
        }]), n
      }(c.Component), r.$$events = ["onScrollToLower", "onConfirm"], r.$$componentPath = "components/Agreement/index", i);
      Component(o(0).default.createComponent(m))
    }
  },
  [
    [515, 0, 1]
  ]
]);