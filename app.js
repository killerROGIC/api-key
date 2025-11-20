var e = require("./@babel/runtime/helpers/typeof");
require("./runtime"), require("./common"), require("./vendors"), (wx.webpackJsonp = wx.webpackJsonp || []).push([
  [3], {
    172: function(t, n, o) {
      (function(o) {
        var r, i, a, c = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
          return e(t)
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
        };
        ! function(e, o) {
          "object" == c(n) && void 0 !== t ? o(n) : (i = [n], void 0 === (a = "function" == typeof(r = o) ? r.apply(n, i) : r) || (t.exports = a))
        }(0, (function(e) {
          function t(e, t) {
            e.super_ = t, e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })
          }

          function n(e, t) {
            Object.defineProperty(this, "kind", {
              value: e,
              enumerable: !0
            }), t && t.length && Object.defineProperty(this, "path", {
              value: t,
              enumerable: !0
            })
          }

          function r(e, t, n) {
            r.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
              value: t,
              enumerable: !0
            }), Object.defineProperty(this, "rhs", {
              value: n,
              enumerable: !0
            })
          }

          function i(e, t) {
            i.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {
              value: t,
              enumerable: !0
            })
          }

          function a(e, t) {
            a.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {
              value: t,
              enumerable: !0
            })
          }

          function s(e, t, n) {
            s.super_.call(this, "A", e), Object.defineProperty(this, "index", {
              value: t,
              enumerable: !0
            }), Object.defineProperty(this, "item", {
              value: n,
              enumerable: !0
            })
          }

          function u(e, t, n) {
            var o = e.slice((n || t) + 1 || e.length);
            return e.length = t < 0 ? e.length + t : t, e.push.apply(e, o), e
          }

          function p(e) {
            var t = void 0 === e ? "undefined" : j(e);
            return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
          }

          function f(e, t, n, o, c, l, d) {
            d = d || [];
            var g = (c = c || []).slice(0);
            if (void 0 !== l) {
              if (o) {
                if ("function" == typeof o && o(g, l)) return;
                if ("object" === (void 0 === o ? "undefined" : j(o))) {
                  if (o.prefilter && o.prefilter(g, l)) return;
                  if (o.normalize) {
                    var h = o.normalize(g, l, e, t);
                    h && (e = h[0], t = h[1])
                  }
                }
              }
              g.push(l)
            }
            "regexp" === p(e) && "regexp" === p(t) && (e = e.toString(), t = t.toString());
            var y = void 0 === e ? "undefined" : j(e),
              m = void 0 === t ? "undefined" : j(t),
              b = "undefined" !== y || d && d[d.length - 1].lhs && d[d.length - 1].lhs.hasOwnProperty(l),
              v = "undefined" !== m || d && d[d.length - 1].rhs && d[d.length - 1].rhs.hasOwnProperty(l);
            if (!b && v) n(new i(g, t));
            else if (!v && b) n(new a(g, e));
            else if (p(e) !== p(t)) n(new r(g, e, t));
            else if ("date" === p(e) && e - t != 0) n(new r(g, e, t));
            else if ("object" === y && null !== e && null !== t)
              if (d.filter((function(t) {
                  return t.lhs === e
                })).length) e !== t && n(new r(g, e, t));
              else {
                if (d.push({
                    lhs: e,
                    rhs: t
                  }), Array.isArray(e)) {
                  var w;
                  for (e.length, w = 0; w < e.length; w++) w >= t.length ? n(new s(g, w, new a(void 0, e[w]))) : f(e[w], t[w], n, o, g, w, d);
                  for (; w < t.length;) n(new s(g, w, new i(void 0, t[w++])))
                } else {
                  var x = Object.keys(e),
                    S = Object.keys(t);
                  x.forEach((function(r, i) {
                    var a = S.indexOf(r);
                    a >= 0 ? (f(e[r], t[r], n, o, g, r, d), S = u(S, a)) : f(e[r], void 0, n, o, g, r, d)
                  })), S.forEach((function(e) {
                    f(void 0, t[e], n, o, g, e, d)
                  }))
                }
                d.length = d.length - 1
              }
            else e !== t && ("number" === y && isNaN(e) && isNaN(t) || n(new r(g, e, t)))
          }

          function l(e, t, n, o) {
            return o = o || [], f(e, t, (function(e) {
              e && o.push(e)
            }), n), o.length ? o : void 0
          }

          function d(e, t, n) {
            if (e && t && n && n.kind) {
              for (var o = e, r = -1, i = n.path ? n.path.length - 1 : 0; ++r < i;) void 0 === o[n.path[r]] && (o[n.path[r]] = "number" == typeof n.path[r] ? [] : {}), o = o[n.path[r]];
              switch (n.kind) {
                case "A":
                  ! function e(t, n, o) {
                    if (o.path && o.path.length) {
                      var r, i = t[n],
                        a = o.path.length - 1;
                      for (r = 0; r < a; r++) i = i[o.path[r]];
                      switch (o.kind) {
                        case "A":
                          e(i[o.path[r]], o.index, o.item);
                          break;
                        case "D":
                          delete i[o.path[r]];
                          break;
                        case "E":
                        case "N":
                          i[o.path[r]] = o.rhs
                      }
                    } else switch (o.kind) {
                      case "A":
                        e(t[n], o.index, o.item);
                        break;
                      case "D":
                        t = u(t, n);
                        break;
                      case "E":
                      case "N":
                        t[n] = o.rhs
                    }
                    return t
                  }(n.path ? o[n.path[r]] : o, n.index, n.item);
                  break;
                case "D":
                  delete o[n.path[r]];
                  break;
                case "E":
                case "N":
                  o[n.path[r]] = n.rhs
              }
            }
          }

          function g(e) {
            return "color: " + C[e].color + "; font-weight: bold"
          }

          function h(e, t, n, o) {
            var r = l(e, t);
            try {
              o ? n.groupCollapsed("diff") : n.group("diff")
            } catch (e) {
              n.log("diff")
            }
            r ? r.forEach((function(e) {
              var t = e.kind,
                o = function(e) {
                  var t = e.kind,
                    n = e.path,
                    o = e.lhs,
                    r = e.rhs,
                    i = e.index,
                    a = e.item;
                  switch (t) {
                    case "E":
                      return [n.join("."), o, "→", r];
                    case "N":
                      return [n.join("."), r];
                    case "D":
                      return [n.join(".")];
                    case "A":
                      return [n.join(".") + "[" + i + "]", a];
                    default:
                      return []
                  }
                }(e);
              n.log.apply(n, ["%c " + C[t].text, g(t)].concat(k(o)))
            })) : n.log("—— no diff ——");
            try {
              n.groupEnd()
            } catch (e) {
              n.log("—— diff end —— ")
            }
          }

          function y(e, t, n, o) {
            switch (void 0 === e ? "undefined" : j(e)) {
              case "object":
                return "function" == typeof e[o] ? e[o].apply(e, k(n)) : e[o];
              case "function":
                return e(t);
              default:
                return e
            }
          }

          function m(e, t) {
            var n = t.logger,
              o = t.actionTransformer,
              r = t.titleFormatter,
              i = void 0 === r ? function(e) {
                var t = e.timestamp,
                  n = e.duration;
                return function(e, o, r) {
                  var i = ["action"];
                  return i.push("%c" + String(e.type)), t && i.push("%c@ " + o), n && i.push("%c(in " + r.toFixed(2) + " ms)"), i.join(" ")
                }
              }(t) : r,
              a = t.collapsed,
              c = t.colors,
              s = t.level,
              u = t.diff,
              p = void 0 === t.titleFormatter;
            e.forEach((function(r, f) {
              var l = r.started,
                d = r.startedTime,
                g = r.action,
                m = r.prevState,
                b = r.error,
                v = r.took,
                w = r.nextState,
                x = e[f + 1];
              x && (w = x.prevState, v = x.started - l);
              var O = o(g),
                j = "function" == typeof a ? a((function() {
                  return w
                }), g, r) : a,
                k = S(d),
                E = c.title ? "color: " + c.title(O) + ";" : "",
                C = ["color: gray; font-weight: lighter;"];
              C.push(E), t.timestamp && C.push("color: gray; font-weight: lighter;"), t.duration && C.push("color: gray; font-weight: lighter;");
              var P = i(O, k, v);
              try {
                j ? c.title && p ? n.groupCollapsed.apply(n, ["%c " + P].concat(C)) : n.groupCollapsed(P) : c.title && p ? n.group.apply(n, ["%c " + P].concat(C)) : n.group(P)
              } catch (e) {
                n.log(P)
              }
              var T = y(s, O, [m], "prevState"),
                D = y(s, O, [O], "action"),
                A = y(s, O, [b, m], "error"),
                I = y(s, O, [w], "nextState");
              if (T)
                if (c.prevState) {
                  var N = "color: " + c.prevState(m) + "; font-weight: bold";
                  n[T]("%c prev state", N, m)
                } else n[T]("prev state", m);
              if (D)
                if (c.action) {
                  var _ = "color: " + c.action(O) + "; font-weight: bold";
                  n[D]("%c action    ", _, O)
                } else n[D]("action    ", O);
              if (b && A)
                if (c.error) {
                  var F = "color: " + c.error(b, m) + "; font-weight: bold;";
                  n[A]("%c error     ", F, b)
                } else n[A]("error     ", b);
              if (I)
                if (c.nextState) {
                  var L = "color: " + c.nextState(w) + "; font-weight: bold";
                  n[I]("%c next state", L, w)
                } else n[I]("next state", w);
              u && h(m, w, n, j);
              try {
                n.groupEnd()
              } catch (e) {
                n.log("—— log end ——")
              }
            }))
          }

          function b() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = Object.assign({}, P, e),
              n = t.logger,
              o = t.stateTransformer,
              r = t.errorTransformer,
              i = t.predicate,
              a = t.logErrors,
              c = t.diffPredicate;
            if (void 0 === n) return function() {
              return function(e) {
                return function(t) {
                  return e(t)
                }
              }
            };
            if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),
              function() {
                return function(e) {
                  return function(t) {
                    return e(t)
                  }
                }
              };
            var s = [];
            return function(e) {
              var n = e.getState;
              return function(e) {
                return function(u) {
                  if ("function" == typeof i && !i(n, u)) return e(u);
                  var p = {};
                  s.push(p), p.started = O.now(), p.startedTime = new Date, p.prevState = o(n()), p.action = u;
                  var f = void 0;
                  if (a) try {
                    f = e(u)
                  } catch (e) {
                    p.error = r(e)
                  } else f = e(u);
                  p.took = O.now() - p.started, p.nextState = o(n());
                  var l = t.diff && "function" == typeof c ? c(n, u) : t.diff;
                  if (m(s, Object.assign({}, t, {
                      diff: l
                    })), s.length = 0, p.error) throw p.error;
                  return f
                }
              }
            }
          }
          var v, w, x = function(e, t) {
              return function(e, t) {
                return new Array(t + 1).join(e)
              }("0", t - e.toString().length) + e
            },
            S = function(e) {
              return x(e.getHours(), 2) + ":" + x(e.getMinutes(), 2) + ":" + x(e.getSeconds(), 2) + "." + x(e.getMilliseconds(), 3)
            },
            O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
            j = "function" == typeof Symbol && "symbol" == c(Symbol.iterator) ? function(e) {
              return void 0 === e ? "undefined" : c(e)
            } : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : c(e)
            },
            k = function(e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
              }
              return Array.from(e)
            },
            E = [];
          v = "object" === (void 0 === o ? "undefined" : j(o)) && o ? o : "undefined" != typeof window ? window : {}, (w = v.DeepDiff) && E.push((function() {
            void 0 !== w && v.DeepDiff === l && (v.DeepDiff = w, w = void 0)
          })), t(r, n), t(i, n), t(a, n), t(s, n), Object.defineProperties(l, {
            diff: {
              value: l,
              enumerable: !0
            },
            observableDiff: {
              value: f,
              enumerable: !0
            },
            applyDiff: {
              value: function(e, t, n) {
                e && t && f(e, t, (function(o) {
                  n && !n(e, t, o) || d(e, t, o)
                }))
              },
              enumerable: !0
            },
            applyChange: {
              value: d,
              enumerable: !0
            },
            revertChange: {
              value: function(e, t, n) {
                if (e && t && n && n.kind) {
                  var o, r, i = e;
                  for (r = n.path.length - 1, o = 0; o < r; o++) void 0 === i[n.path[o]] && (i[n.path[o]] = {}), i = i[n.path[o]];
                  switch (n.kind) {
                    case "A":
                      ! function e(t, n, o) {
                        if (o.path && o.path.length) {
                          var r, i = t[n],
                            a = o.path.length - 1;
                          for (r = 0; r < a; r++) i = i[o.path[r]];
                          switch (o.kind) {
                            case "A":
                              e(i[o.path[r]], o.index, o.item);
                              break;
                            case "D":
                            case "E":
                              i[o.path[r]] = o.lhs;
                              break;
                            case "N":
                              delete i[o.path[r]]
                          }
                        } else switch (o.kind) {
                          case "A":
                            e(t[n], o.index, o.item);
                            break;
                          case "D":
                          case "E":
                            t[n] = o.lhs;
                            break;
                          case "N":
                            t = u(t, n)
                        }
                        return t
                      }(i[n.path[o]], n.index, n.item);
                      break;
                    case "D":
                    case "E":
                      i[n.path[o]] = n.lhs;
                      break;
                    case "N":
                      delete i[n.path[o]]
                  }
                }
              },
              enumerable: !0
            },
            isConflict: {
              value: function() {
                return void 0 !== w
              },
              enumerable: !0
            },
            noConflict: {
              value: function() {
                return E && (E.forEach((function(e) {
                  e()
                })), E = null), l
              },
              enumerable: !0
            }
          });
          var C = {
              E: {
                color: "#2196F3",
                text: "CHANGED:"
              },
              N: {
                color: "#4CAF50",
                text: "ADDED:"
              },
              D: {
                color: "#F44336",
                text: "DELETED:"
              },
              A: {
                color: "#2196F3",
                text: "ARRAY:"
              }
            },
            P = {
              level: "log",
              logger: console,
              logErrors: !0,
              collapsed: void 0,
              predicate: void 0,
              duration: !1,
              timestamp: !0,
              stateTransformer: function(e) {
                return e
              },
              actionTransformer: function(e) {
                return e
              },
              errorTransformer: function(e) {
                return e
              },
              colors: {
                title: function() {
                  return "inherit"
                },
                prevState: function() {
                  return "#9E9E9E"
                },
                action: function() {
                  return "#03A9F4"
                },
                nextState: function() {
                  return "#4CAF50"
                },
                error: function() {
                  return "#F20404"
                }
              },
              diff: !1,
              diffPredicate: void 0,
              transformer: void 0
            },
            T = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.dispatch,
                n = e.getState;
              return "function" == typeof t || "function" == typeof n ? b()({
                dispatch: t,
                getState: n
              }) : void 0
            };
          e.defaults = P, e.createLogger = b, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", {
            value: !0
          })
        }))
      }).call(this, o(31))
    },
    219: function(e, t, n) {},
    220: function(e, t, n) {},
    446: function(t, n, o) {
      o.r(n);
      var r = o(0),
        i = o.n(r),
        a = o(15),
        c = o(6),
        s = o(7),
        u = o(17);

      function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, o)
        }
        return n
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f(Object(n), !0).forEach((function(t) {
            p(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }
      i.a.Component.prototype.tip = function(e, t, n) {
        i.a.showToast({
          title: e,
          icon: t || "none",
          duration: n || 1e3
        })
      }, i.a.Component.prototype.rsaEncrypt = function(e) {
        return u.a.rsaEncrypt(e)
      }, i.a.Component.prototype.post = function(e, t, n) {
        return u.a.post(e, t, n, "application/json;charset=UTF-8")
      }, i.a.Component.prototype.$post = function(e, t, n, o, r, i) {
        return u.a.$post(e, t, n, o, r, i)
      }, i.a.Component.prototype.get = function(e, t, n) {
        return u.a.get(e, t, n)
      }, i.a.Component.prototype.moneyFormat = function(e) {
        if (!e) return "0.00";
        var t = "",
          n = "00";
        "number" == typeof e && (e = e.toString());
        var o = e.split(".");
        return t = o[0], 2 == o.length && o[1] && ((n = o[1]).length > 2 && (n = n.substr(0, 2)), 1 == n.length && parseInt(n) > 0 && (n += "0")), -1 == t.indexOf(",") && (t = t.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")), t + "." + n
      }, i.a.Component.prototype.setNum = function(e) {
        return e ? e.toString().replace(/(?!^)(?=(\d{3})+$)/g, ",") : "0"
      }, i.a.Component.prototype.navTo = function(e) {
        i.a.navigateTo({
          url: e
        })
      }, i.a.Component.prototype.redirectTo = function(e) {
        i.a.redirectTo({
          url: e
        })
      }, i.a.Component.prototype.reLaunch = function(e) {
        i.a.reLaunch({
          url: e
        })
      }, i.a.Component.prototype.wxlogin = function(e) {
        var t = e.cb,
          n = e.scene;
        i.a.login({
          success: function(e) {
            var o = e.code,
              r = i.a.getStorageSync("nickName");
            o && r ? i.a.getUserInfo({
              withCredentials: !0,
              success: function(e) {
                console.log("wxlogin_getUserProfile", e), i.a.Component.prototype.post("buc/wx/auth/getLoginOpenId", {
                  authorizationCode: o,
                  encryptedData: e.encryptedData,
                  iv: e.iv,
                  withoutToken: !0
                }, (function(e) {
                  if (e.code, console.log("wxlogin_dt", e), 200 == e.code) {
                    var o = e.data.openId,
                      r = e.data.unionId,
                      a = e.data.attentionFlag;
                    console.log("scene================" + n, o, r), i.a.Component.prototype.svlogin({
                      openId: o,
                      cb: t,
                      scene: n,
                      unionId: r
                    }), i.a.setStorageSync("openId", e.data.openId), i.a.setStorageSync("submitFlat", r), i.a.setStorageSync("discerner", n), i.a.setStorageSync("attentionFlag", a)
                  }
                }))
              }
            }) : console.log("登录失败！" + e.errMsg)
          }
        })
      }, i.a.Component.prototype.catchCamera = function(e) {
        i.a.chooseMedia ? i.a.chooseMedia({
          count: 1,
          mediaType: ["image"],
          sourceType: e.sourceType,
          sizeType: [e.isCompress ? "compressed" : "original"],
          success: function(t) {
            console.log("Taro.chooseMedia", t.tempFiles[0]);
            var n = t.tempFiles[0].size / 1024 / 1024;
            if (!(n < 10)) return i.a.showToast({
              title: "上传图片不能大于10M",
              icon: "none"
            });
            e.success && e.success(t.tempFiles[0].tempFilePath, n)
          },
          fail: function(t) {
            e.fail && e.fail(t)
          },
          complete: function() {
            e.complete && e.complete()
          }
        }) : i.a.chooseImage({
          count: 1,
          sourceType: e.sourceType,
          sizeType: ["original"],
          success: function(t) {
            var n = t.tempFiles[0].size / 1024 / 1024;
            if (!(n < 10)) return i.a.showToast({
              title: "上传图片不能大于10M",
              icon: "none"
            });
            e.success && e.success(t.tempFiles[0].tempFilePath, n)
          },
          fail: function(t) {
            e.fail && e.fail(t)
          },
          complete: function() {
            e.complete && e.complete()
          }
        })
      }, i.a.Component.prototype.getSetting = function(e) {
        i.a.getSetting({
          success: function(t) {
            console.log("getSetting", t), t.authSetting["scope.userInfo"] ? i.a.getUserInfo({
              success: function(t) {
                var n = t.userInfo;
                return n.nickName, n.avatarUrl, n.gender, n.province, n.city, n.country, e && e(n)
              }
            }) : (console.log("未授权：1111"), i.a.Component.prototype.wxlogin())
          }
        })
      }, i.a.Component.prototype.isLogin = function(e) {
        var t = i.a.getStorageSync("userId");
        console.log("isLogin", t), t || i.a.navigateTo({
          url: "/pages/mine/login"
        })
      }, i.a.Component.prototype.showImage = function(e, t, n) {
        console.log("showImage", e, t);
        var o = t;
        n && "string" == typeof n && (o = t.map((function(e) {
          return e[n]
        })));
        var r = {
          current: e,
          urls: o
        };
        console.log(r), i.a.previewImage(r)
      }, i.a.Component.prototype.copyText = function(e, t) {
        i.a.setClipboardData({
          data: e,
          success: function() {
            i.a.showToast({
              title: "复制成功",
              icon: "none"
            }).then((function() {
              "function" == typeof t && t()
            }))
          }
        })
      }, i.a.Component.prototype.setEasyState = function(e, t) {
        this.setState(function(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = n, e
        }({}, e, t))
      }, i.a.Component.prototype.showFailToast = function(e) {
        i.a.showToast({
          title: e,
          icon: "none"
        })
      }, i.a.Component.prototype.httpToHttps = function(e) {
        return "string" != typeof e || e.startsWith("https://") || e.startsWith("http://tmp") ? e : e.startsWith("http://") ? e.replace("http://", "https://") : e
      };
      var d = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
        return e(t)
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
      };

      function g(e) {
        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
      }
      var h = "function" == typeof Symbol && Symbol.observable || "@@observable",
        y = function() {
          return Math.random().toString(36).substring(7).split("").join(".")
        },
        m = {
          INIT: "@@redux/INIT" + y(),
          REPLACE: "@@redux/REPLACE" + y(),
          PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + y()
          }
        };

      function b(e) {
        if ("object" !== (void 0 === e ? "undefined" : d(e)) || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t
      }

      function v(e, t, n) {
        var o;
        if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw new Error(g(0));
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
          if ("function" != typeof n) throw new Error(g(1));
          return n(v)(e, t)
        }
        if ("function" != typeof e) throw new Error(g(2));
        var r = e,
          i = t,
          a = [],
          c = a,
          s = !1;

        function u() {
          c === a && (c = a.slice())
        }

        function p() {
          if (s) throw new Error(g(3));
          return i
        }

        function f(e) {
          if ("function" != typeof e) throw new Error(g(4));
          if (s) throw new Error(g(5));
          var t = !0;
          return u(), c.push(e),
            function() {
              if (t) {
                if (s) throw new Error(g(6));
                t = !1, u();
                var n = c.indexOf(e);
                c.splice(n, 1), a = null
              }
            }
        }

        function l(e) {
          if (!b(e)) throw new Error(g(7));
          if (void 0 === e.type) throw new Error(g(8));
          if (s) throw new Error(g(9));
          try {
            s = !0, i = r(i, e)
          } finally {
            s = !1
          }
          for (var t = a = c, n = 0; n < t.length; n++)(0, t[n])();
          return e
        }

        function y(e) {
          if ("function" != typeof e) throw new Error(g(10));
          r = e, l({
            type: m.REPLACE
          })
        }

        function w() {
          var e, t = f;
          return (e = {
            subscribe: function(e) {
              if ("object" !== (void 0 === e ? "undefined" : d(e)) || null === e) throw new Error(g(11));

              function n() {
                e.next && e.next(p())
              }
              return n(), {
                unsubscribe: t(n)
              }
            }
          })[h] = function() {
            return this
          }, e
        }
        return l({
          type: m.INIT
        }), (o = {
          dispatch: l,
          subscribe: f,
          getState: p,
          replaceReducer: y
        })[h] = w, o
      }

      function w() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
          return e
        } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
          return function() {
            return e(t.apply(void 0, arguments))
          }
        }))
      }

      function x() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
          return function() {
            var n = e.apply(void 0, arguments),
              o = function() {
                throw new Error(g(15))
              },
              r = {
                getState: n.getState,
                dispatch: function() {
                  return o.apply(void 0, arguments)
                }
              },
              i = t.map((function(e) {
                return e(r)
              }));
            return o = w.apply(void 0, i)(n.dispatch), l(l({}, n), {}, {
              dispatch: o
            })
          }
        }
      }

      function S(e) {
        return function(t) {
          var n = t.dispatch,
            o = t.getState;
          return function(t) {
            return function(r) {
              return "function" == typeof r ? r(n, o, e) : t(r)
            }
          }
        }
      }
      var O = S();
      O.withExtraArgument = S;
      var j = O,
        k = o(29),
        E = {
          orderTotal: 0,
          bannerList: [],
          brandItem: {}
        },
        C = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            t = arguments[1],
            n = JSON.parse(JSON.stringify(e));
          switch (t.type) {
            case k.b:
              return n.bannerList = t.list, n;
            case k.a:
              return n.brandItem = t.item, n;
            default:
              return e
          }
        },
        P = o(172),
        T = [j, Object(P.createLogger)()];
      o(219), o(220);
      var D = function() {
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

      function A(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function I(t, n) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != e(n) && "function" != typeof n ? t : n
      }
      var N = v(C, x.apply(void 0, T));
      Object(a.setStore)(N), a.ReduxContext.Provider && (a.ReduxContext.Provider({
        store: N
      }), a.ReduxContext.Provider({
        store: N
      }));
      var _ = function(t) {
        function n() {
          var e, t, o;
          A(this, n);
          for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
          return t = o = I(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(i))), o.config = {
            pages: ["pages/index/index", "pages/my/trend", "pages/my/identifyer", "pages/my/materialOrder", "pages/my/onlineOrder", "pages/batch/index", "pages/shop/index", "pages/index/h5Link", "pages/batch/suggest", "pages/mine/feedback", "pages/mine/mineFeedback", "pages/mine/feedbackRecord", "pages/mine/feedbackRecordInfo", "pages/mine/serviceDescription", "pages/mine/login", "pages/mine/phoneBind", "pages/my/user", "pages/find/info", "pages/find/video", "pages/coupon/index", "pages/mine/userInfo", "pages/test/index", "pages/index/materialHome", "pages/freeCoupon/detail", "pages/freeCoupon/list", "pages/my/bear", "pages/my/bearDetail", "pages/worktop/index", "pages/barcode/index", "pages/yywdemo/index"],
            subpackages: [{
              root: "pages/identifyTeacher",
              name: "identifyTeacher",
              pages: ["index", "identifyTeacherList", "detail"]
            }, {
              root: "pages/brand",
              name: "brand",
              pages: ["detail", "index", "selectList", "new", "materDetail", "addressPage", "materOrderDetail", "DetailStatus", "agreement", "logisticDetail", "materialIdentify"]
            }, {
              root: "pages/activity",
              name: "activity",
              pages: ["index", "act02index", "act01", "drawRules", "luckyDrawList", "buy"]
            }, {
              root: "pages/identifyList",
              name: "identifyList",
              pages: ["index", "confirm", "result"]
            }],
            preloadRule: {
              "pages/index/index": {
                network: "all",
                packages: ["brand", "identifyTeacher", "identifyList", "activity"]
              }
            },
            window: {
              backgroundTextStyle: "light",
              navigationBarBackgroundColor: "#fff",
              backgroundColor: "#000000",
              navigationBarTextStyle: "black",
              navigationStyle: "custom"
            },
            usingComponents: {
              "component-base-navigation": "/components/navi/index"
            },
            tabBar: {
              custom: !0,
              position: "bottom",
              color: "#333",
              selectedColor: "#ff5a5a",
              backgroundColor: "#fff",
              borderStyle: "black",
              list: [{
                pagePath: "pages/index/index",
                iconPath: "./asset/images/jianbie.png",
                selectedIconPath: "./asset/images/select_jianbie.png",
                text: "鉴别"
              }, {
                pagePath: "pages/index/materialHome",
                iconPath: "./asset/images/tabbar-material.png",
                selectedIconPath: "./asset/images/tabbar-material-selected.png",
                text: "检测"
              }, {
                pagePath: "pages/batch/index",
                iconPath: "./asset/images/batch.png",
                selectedIconPath: "./asset/images/batch_select.png",
                text: "批号"
              }, {
                pagePath: "pages/my/user",
                iconPath: "./asset/images/me.png",
                selectedIconPath: "./asset/images/me_select.png",
                text: "我的"
              }]
            },
            __usePrivacyCheck__: !0
          }, I(o, t)
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
        }(n, t), D(n, [{
          key: "componentWillMount",
          value: function() {
            if (i.a.canIUse("getUpdateManager")) {
              var e = i.a.getUpdateManager();
              e.onCheckForUpdate((function(t) {
                console.log("onCheckForUpdate====", t), t.hasUpdate && (console.log("res.hasUpdate===="), e.onUpdateReady((function() {
                  i.a.showModal({
                    title: "更新提示",
                    content: "检测到新版本，是否下载新版本并重启小程序？",
                    success: function(t) {
                      console.log("success====", t), t.confirm && e.applyUpdate()
                    }
                  })
                })), e.onUpdateFailed((function() {
                  i.a.showModal({
                    title: "已经有新版本了哟~",
                    content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                  })
                })))
              }))
            } else i.a.showModal({
              title: "提示",
              content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
            })
          }
        }, {
          key: "componentDidMount",
          value: function() {
            this.requestGoal(), Object(c.e)(), i.a.setStorageSync("bottomSafeAreaHeight", Object(s.b)(10))
          }
        }, {
          key: "requestGoal",
          value: function() {
            this.$post("mk/app/dictionary/oauthGetExpressInformation", {}, (function(e) {
              i.a.setStorageSync("Express", e.data)
            }))
          }
        }, {
          key: "_createData",
          value: function() {}
        }]), n
      }(r.Component);
      App(o(0).default.createApp(_)), i.a.initPxTransform({
        designWidth: 750,
        deviceRatio: {
          640: 1.17,
          750: 1,
          828: .905
        }
      })
    }
  },
  [
    [446, 0, 1, 2]
  ]
]);