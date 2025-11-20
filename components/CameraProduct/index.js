var t = require("../../@babel/runtime/helpers/typeof");
(wx.webpackJsonp = wx.webpackJsonp || []).push([
  [6], {
    132: function(t, e, o) {
      t.exports = o.p + "components/CameraProduct/index.wxml"
    },
    374: function(t, e, o) {
      o(132)
    },
    375: function(t, e, o) {},
    509: function(e, o, r) {
      r.r(o), r(374);
      var n, a, i = r(0),
        l = r.n(i),
        s = (r(375), function(t, e) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return function(t, e) {
            var o = [],
              r = !0,
              n = !1,
              a = void 0;
            try {
              for (var i, l = t[Symbol.iterator](); !(r = (i = l.next()).done) && (o.push(i.value), !e || o.length !== e); r = !0);
            } catch (t) {
              n = !0, a = t
            } finally {
              try {
                !r && l.return && l.return()
              } finally {
                if (n) throw a
              }
            }
            return o
          }(t, e);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }),
        c = function() {
          function t(t, e) {
            for (var o = 0; o < e.length; o++) {
              var r = e[o];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          return function(e, o, r) {
            return o && t(e.prototype, o), r && t(e, r), e
          }
        }(),
        u = function t(e, o, r) {
          null === e && (e = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(e, o);
          if (void 0 === n) {
            var a = Object.getPrototypeOf(e);
            return null === a ? void 0 : t(a, o, r)
          }
          if ("value" in n) return n.value;
          var i = n.get;
          return void 0 !== i ? i.call(r) : void 0
        };

      function p(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }

      function h(e, o) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !o || "object" != t(o) && "function" != typeof o ? e : o
      }
      var f = (a = n = function(e) {
        function o() {
          var t, e, r;
          p(this, o);
          for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
          return e = r = h(this, (t = o.__proto__ || Object.getPrototypeOf(o)).call.apply(t, [this].concat(a))), r.$usedState = ["anonymousState__temp", "anonymousState__temp2", "loopArray176", "$compid__238", "curPro", "hasPicture", "cameraHeight", "light", "curTagkey", "pos", "list", "handleTakePhoto", "handleChangeLoaction", "productModelList", "tempModelList", "imgGroupIndex", "handleChoiceImg", "handleRestart", "handleNextPhoto", "handleCloseCamera", "__fn_onClick"], r.customComponents = [], h(r, e)
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
        }(o, e), c(o, [{
          key: "_constructor",
          value: function() {
            u(o.prototype.__proto__ || Object.getPrototypeOf(o.prototype), "_constructor", this).apply(this, arguments), this.state = {
              light: !1,
              cameraHeight: 414
            }, this.$$refs = new l.a.RefsArray
          }
        }, {
          key: "componentWillMount",
          value: function() {
            var t = l.a.getSystemInfoSync(),
              e = t.screenWidth / 375 * 414,
              o = e / t.screenHeight > .55 ? parseInt(.55 * t.screenHeight) : parseInt(e);
            this.setState({
              cameraHeight: o
            })
          }
        }, {
          key: "bindCameraError",
          value: function(t) {
            console.error(t)
          }
        }, {
          key: "takePhotoes",
          value: function() {
            console.log("takePhotoes");
            var t = this.props.handleTakePhoto;
            l.a.createCameraContext().takePhoto({
              quality: "high",
              success: function(e) {
                console.log("res", e.tempImagePath), t(e.tempImagePath)
              },
              fail: function(t) {
                console.error(t)
              }
            })
          }
        }, {
          key: "handleChangeLoaction",
          value: function(t) {
            var e = this.props.handleChangeLoaction;
            e(t)
          }
        }, {
          key: "showImage",
          value: function(t) {
            l.a.previewImage({
              current: 0,
              urls: [t]
            })
          }
        }, {
          key: "switchLight",
          value: function() {
            var t = this.state.light;
            this.setState({
              light: !t
            })
          }
        }, {
          key: "_createData",
          value: function() {
            var t = this;
            this.__state = arguments[0] || this.state || {}, this.__props = arguments[1] || this.props || {};
            var e = this.$prefix,
              o = Object(i.genCompid)(e + "$compid__238"),
              r = s(o, 2),
              n = r[0],
              a = r[1],
              l = this.__state,
              c = (l.light, l.cameraHeight, this.__props),
              u = c.pos,
              p = c.productModelList,
              h = c.tempModelList,
              f = c.imgGroupIndex,
              g = (c.handleChoiceImg, c.handleRestart, c.handleNextPhoto, c.handleCloseCamera),
              m = 1 == f ? p : h,
              y = m && m[u];
            if (!y) return null;
            var d = !(!y || !y.flagImgUrl),
              v = u,
              _ = m.length === u || y.isExtra ? "附加图" : y.discernImgName;
            m.length, console.log("刷新", y, u);
            var b = d ? this.httpToHttps(y.flagImgUrl) : null,
              P = y ? this.httpToHttps(y.exampleImgUrl) : null,
              k = m.map((function(e, o) {
                return {
                  $loopState__temp4: (e = {
                    $original: Object(i.internal_get_original)(e)
                  }).$original.flagImgUrl ? t.httpToHttps(e.$original.flagImgUrl) : null,
                  $loopState__temp6: t.httpToHttps(e.$original.discernImgUrl),
                  $original: e.$original
                }
              }));
            return i.propsManager.set({
              title: _,
              isOpcity: !0,
              colors: "#fff",
              handleBack: g
            }, a, n), Object.assign(this.__state, {
              anonymousState__temp: b,
              anonymousState__temp2: P,
              loopArray176: k,
              $compid__238: a,
              curPro: y,
              hasPicture: d,
              curTagkey: v,
              pos: u,
              list: m
            }), this.__state
          }
        }, {
          key: "funPrivategczzz",
          value: function() {
            return this.props.handleChoiceImg.apply(void 0, Array.prototype.slice.call(arguments, 1))
          }
        }, {
          key: "funPrivategdzzz",
          value: function() {
            return this.props.handleRestart.apply(void 0, Array.prototype.slice.call(arguments, 1))
          }
        }, {
          key: "funPrivategezzz",
          value: function() {
            return this.props.handleNextPhoto.apply(void 0, Array.prototype.slice.call(arguments, 1))
          }
        }]), o
      }(i.Component), n.$$events = ["bindCameraError", "showImage", "handleChangeLoaction", "funPrivategczzz", "takePhotoes", "switchLight", "funPrivategdzzz", "funPrivategezzz"], n.$$componentPath = "components/CameraProduct/index", a);
      Component(r(0).default.createComponent(f))
    }
  },
  [
    [509, 0, 1]
  ]
]);