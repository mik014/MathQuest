!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.CanvasLatex = e())
    : (t.CanvasLatex = e());
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) ||
          Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 6))
    );
  })([
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.ContainerNode =
          e.VerticalListRow =
          e.VerticalLineNode =
          e.HorizontalLineNode =
          e.HPaddingNode =
          e.VerticalList =
          e.SvgNode =
          e.TextNode =
          e.BoxNode =
            void 0);
      var r = f(n(11)),
        i = f(n(12)),
        a = f(n(13)),
        o = f(n(14)),
        s = f(n(15)),
        l = f(n(16)),
        u = f(n(17)),
        h = f(n(18)),
        c = f(n(3));
      function f(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.BoxNode = r.default),
        (e.TextNode = i.default),
        (e.SvgNode = a.default),
        (e.VerticalList = o.default),
        (e.HPaddingNode = s.default),
        (e.HorizontalLineNode = l.default),
        (e.VerticalLineNode = u.default),
        (e.VerticalListRow = h.default),
        (e.ContainerNode = c.default);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })();
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var a = (function () {
          function t(e, n, r, a) {
            i(this, t),
              (this.x = e || 0),
              (this.y = n || 0),
              (this.width = r || 0),
              (this.height = a || 0);
          }
          return (
            r(t, [
              {
                key: "clone",
                value: function () {
                  return new t(this.x, this.y, this.width, this.height);
                },
              },
              {
                key: "extend",
                value: function (t) {
                  var e = t.x,
                    n = t.y,
                    r = t.width,
                    i = void 0 === r ? 0 : r,
                    a = t.height,
                    o = void 0 === a ? 0 : a;
                  e < this.x && ((this.width += this.x - e), (this.x = e)),
                    n < this.y && ((this.height += this.y - n), (this.y = n)),
                    e + i > this.x + this.width &&
                      (this.width = e + i - this.x),
                    n + o > this.y + this.height &&
                      (this.height = n + o - this.y);
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height,
                  };
                },
              },
              {
                key: "set",
                value: function (t) {
                  var e = this;
                  Object.keys(t).forEach(function (n) {
                    void 0 !== e[n] && (e[n] = t[n]);
                  });
                },
              },
            ]),
            t
          );
        })(),
        o = (function () {
          function t() {
            i(this, t), (this.left = 0), (this.right = 0);
          }
          return (
            r(t, [
              {
                key: "toJSON",
                value: function () {
                  return { left: this.left, right: this.right };
                },
              },
              {
                key: "set",
                value: function (t) {
                  var e = this;
                  Object.keys(t).forEach(function (n) {
                    void 0 !== e[n] && (e[n] = t[n]);
                  });
                },
              },
            ]),
            t
          );
        })(),
        s = (function () {
          function t(e) {
            i(this, t),
              (this.margin = new o()),
              (this.bounds = new a()),
              (this.classes = e || []);
          }
          return (
            r(t, [
              {
                key: "setPosition",
                value: function (t, e) {
                  (this.bounds.x = t), (this.bounds.y = e);
                },
              },
              {
                key: "getBounds",
                value: function () {
                  return this.bounds;
                },
              },
              {
                key: "toJSON",
                value: function () {
                  return {
                    margin: this.margin.toJSON(),
                    bounds: this.getBounds().toJSON(),
                    classes: this.classes,
                    type: this.type,
                  };
                },
              },
              {
                key: "type",
                get: function () {
                  throw new Error("Type must be implemented by sub node");
                },
              },
            ]),
            t
          );
        })();
      e.default = s;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(1));
      var a = (function (t) {
        function e(t, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var r = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
          return (r.minWidth = t || 0), r;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "toJSON",
              value: function () {
                var t = (function t(e, n, r) {
                  null === e && (e = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(e);
                    return null === a ? void 0 : t(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                })(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "toJSON",
                  this
                ).call(this);
                return (t.minWidth = this.minWidth), t;
              },
            },
            {
              key: "listWidth",
              set: function (t) {
                this.bounds.width = t + this.minWidth;
              },
            },
          ]),
          e
        );
      })();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = function t(e, n, r) {
          null === e && (e = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === i) {
            var a = Object.getPrototypeOf(e);
            return null === a ? void 0 : t(a, n, r);
          }
          if ("value" in i) return i.value;
          var o = i.get;
          return void 0 !== o ? o.call(r) : void 0;
        },
        a = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(1));
      var o = (function (t) {
        function e(t) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var n = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return (n.nodes = []), n;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, a.default),
          r(e, [
            {
              key: "toJSON",
              value: function () {
                var t = i(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "toJSON",
                  this
                ).call(this);
                return (
                  (t.nodes = this.nodes.map(function (t) {
                    return t.toJSON();
                  })),
                  t
                );
              },
            },
            {
              key: "addNode",
              value: function (t) {
                this.nodes.push(t);
              },
            },
            {
              key: "last",
              value: function () {
                return this.nodes[this.nodes.length - 1];
              },
            },
            {
              key: "setPosition",
              value: function (t, n) {
                i(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "setPosition",
                  this
                ).call(this, t, n);
                var r = t - this.getBounds().x;
                this.nodes.forEach(function (t) {
                  var e = t.bounds.x + r;
                  t.setPosition(e, t.bounds.y);
                });
              },
            },
            {
              key: "getBounds",
              value: function () {
                var t = this;
                return (
                  this.nodes.forEach(function (e, n) {
                    var r = e.getBounds();
                    0 === n ? (t.bounds = r.clone()) : t.bounds.extend(r);
                  }),
                  this.bounds
                );
              },
            },
          ]),
          e
        );
      })();
      e.default = o;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = u(n(8)),
        a = u(n(10)),
        o = u(n(19)),
        s = u(n(20)),
        l = n(0);
      function u(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function h(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var c = (function () {
        function t(e, n) {
          h(this, t), (this._latex = e), (this._options = n);
        }
        return (
          r(t, [
            {
              key: "build",
              value: function () {
                this._state = new a.default(
                  a.default.defaultOptions(this._options)
                );
                var t = new l.VerticalListRow();
                this._state.vlist.addRow(t), (this._classIndexes = {});
                var e = i.default.__renderToHTMLTree(this._latex, this._options)
                  .children[0];
                this._createRenderingState(e);
                var n = this._state.vlist;
                return (
                  n.align(),
                  new (function t(e, n) {
                    h(this, t), (this.rootNode = e), (this.attributes = n);
                  })(n, this._getNodeAttributes(e, n))
                );
              },
            },
            {
              key: "_getNodeAttributes",
              value: function (t, e) {
                var n = {},
                  r = e.getStrutBounds();
                return (
                  (n.baselineHeight = r.height - t.depth * this._state.em),
                  (n.strutBounds = r),
                  n
                );
              },
            },
            {
              key: "_createRenderingState",
              value: function (t) {
                var e = this,
                  n = this._state;
                this._getGlyphDataFromNode(t),
                  t.children &&
                    t.children.forEach(function (t) {
                      return e._createRenderingState(t);
                    }),
                  this._resetState(n);
              },
            },
            {
              key: "_resetState",
              value: function (t) {
                var e = this,
                  n = this._state.vlist,
                  r = t.vlist;
                n !== r && (n.setStretchyWidths(), n.align(), r.addCell(n)),
                  this._state.classes !== t.classes &&
                    this._state.classes.forEach(function (n) {
                      n in t.classes || e._classIndexes[n.name]++;
                    }),
                  this._state.pstrut &&
                    (t = t.withYShift(this._state.pstrut).withResetMargin()),
                  (this._state = t);
              },
            },
            {
              key: "_getGlyphDataFromNode",
              value: function (t) {
                this._extractClassDataFromNode(t),
                  this._extractStyleDataFromNode(t),
                  this._createMSpace(),
                  this._createSvgNode(t),
                  this._createTextNode(t),
                  this._createItalicNode(t);
              },
            },
            {
              key: "_extractClassDataFromNode",
              value: function (t) {
                var e = this,
                  n = !1;
                (t.classes || []).forEach(function (r) {
                  if ("enclosing" === r) n = !0;
                  else if (n)
                    (n = !1),
                      (e._classIndexes[r] = e._classIndexes[r] || 0),
                      (e._state = e._state.withClass({
                        name: r,
                        index: e._classIndexes[r],
                      }));
                  else {
                    var i = e._toCamelCase(r);
                    o.default[i] &&
                      (e._state = o.default[i](e._state, t, e._options));
                  }
                });
              },
            },
            {
              key: "_toCamelCase",
              value: function (t) {
                return t.replace(/-([a-z])/g, function (t) {
                  return t[1].toUpperCase();
                });
              },
            },
            {
              key: "_createMSpace",
              value: function () {
                if (this._state.mspace) {
                  var t = new l.HPaddingNode(this._state.classes);
                  t.setPosition(this._state.nextX, this._state.y),
                    t.bounds.set({
                      width: this._state.mspace * this._state.em,
                    }),
                    this._state.vlist.addCell(t),
                    (this._state = this._state.withResetMargin());
                }
              },
            },
            {
              key: "_extractStyleDataFromNode",
              value: function (t) {
                var e = this;
                t.style &&
                  Object.keys(t.style).forEach(function (n) {
                    var r = t.style[n];
                    s.default[n] && (e._state = s.default[n](e._state, r, t));
                  });
              },
            },
            {
              key: "_createSvgNode",
              value: function (t) {
                if (t instanceof i.default.__domTree.svgNode) {
                  var e = t,
                    n = this._state,
                    r = +e.attributes.height.replace("em", "") * this._state.em;
                  (e.attributes.height = r),
                    (e.attributes.fill = this._state.color);
                  var a = new l.SvgNode(e, n.minWidth, n.classes);
                  a.setPosition(n.nextX, n.y),
                    a.bounds.set({ height: r }),
                    a.margin.set({ left: n.marginLeft, right: n.marginRight }),
                    this._state.vlist.addCell(a),
                    (this._state = this._state.withResetMargin());
                }
              },
            },
            {
              key: "_createTextNode",
              value: function (t) {
                if (t.value && "​" !== t.value) {
                  var e = this._state,
                    n = new l.TextNode(t.value, e.font, e.color, e.classes);
                  n.setPosition(e.nextX, e.y),
                    n.margin.set({ left: e.marginLeft, right: e.marginRight }),
                    this._state.vlist.addCell(n),
                    (this._state = this._state.withResetMargin());
                }
              },
            },
            {
              key: "_createItalicNode",
              value: function (t) {
                if (t.italic) {
                  var e = this._state.em * t.italic,
                    n = new l.HPaddingNode(this._state.classes);
                  n.setPosition(this._state.nextX, 0),
                    n.bounds.set({ width: e }),
                    this._state.vlist.addCell(n),
                    (this._state = this._state.withResetMargin());
                }
              },
            },
          ]),
          t
        );
      })();
      e.default = c;
    },
    function (t, e) {
      function n(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function r(t, e) {
        var r = t.prototype;
        if (Object.create) {
          var i = Object.create(e.prototype);
          r.__proto__ = i;
        }
        if (!(r instanceof e)) {
          function a() {}
          (a.prototype = e.prototype),
            n(r, (a = new a())),
            (t.prototype = r = a);
        }
        r.constructor != t &&
          ("function" != typeof t && console.error("unknow Class:" + t),
          (r.constructor = t));
      }
      var i = "http://www.w3.org/1999/xhtml",
        a = {},
        o = (a.ELEMENT_NODE = 1),
        s = (a.ATTRIBUTE_NODE = 2),
        l = (a.TEXT_NODE = 3),
        u = (a.CDATA_SECTION_NODE = 4),
        h = (a.ENTITY_REFERENCE_NODE = 5),
        c = (a.ENTITY_NODE = 6),
        f = (a.PROCESSING_INSTRUCTION_NODE = 7),
        m = (a.COMMENT_NODE = 8),
        d = (a.DOCUMENT_NODE = 9),
        p = (a.DOCUMENT_TYPE_NODE = 10),
        v = (a.DOCUMENT_FRAGMENT_NODE = 11),
        g = (a.NOTATION_NODE = 12),
        y = {},
        b = {},
        x =
          ((y.INDEX_SIZE_ERR = ((b[1] = "Index size error"), 1)),
          (y.DOMSTRING_SIZE_ERR = ((b[2] = "DOMString size error"), 2)),
          (y.HIERARCHY_REQUEST_ERR = ((b[3] = "Hierarchy request error"), 3))),
        w =
          ((y.WRONG_DOCUMENT_ERR = ((b[4] = "Wrong document"), 4)),
          (y.INVALID_CHARACTER_ERR = ((b[5] = "Invalid character"), 5)),
          (y.NO_DATA_ALLOWED_ERR = ((b[6] = "No data allowed"), 6)),
          (y.NO_MODIFICATION_ALLOWED_ERR =
            ((b[7] = "No modification allowed"), 7)),
          (y.NOT_FOUND_ERR = ((b[8] = "Not found"), 8))),
        k =
          ((y.NOT_SUPPORTED_ERR = ((b[9] = "Not supported"), 9)),
          (y.INUSE_ATTRIBUTE_ERR = ((b[10] = "Attribute in use"), 10)));
      (y.INVALID_STATE_ERR = ((b[11] = "Invalid state"), 11)),
        (y.SYNTAX_ERR = ((b[12] = "Syntax error"), 12)),
        (y.INVALID_MODIFICATION_ERR = ((b[13] = "Invalid modification"), 13)),
        (y.NAMESPACE_ERR = ((b[14] = "Invalid namespace"), 14)),
        (y.INVALID_ACCESS_ERR = ((b[15] = "Invalid access"), 15));
      function S(t, e) {
        if (e instanceof Error) var n = e;
        else
          (n = this),
            Error.call(this, b[t]),
            (this.message = b[t]),
            Error.captureStackTrace && Error.captureStackTrace(this, S);
        return (n.code = t), e && (this.message = this.message + ": " + e), n;
      }
      function E() {}
      function M(t, e) {
        (this._node = t), (this._refresh = e), T(this);
      }
      function T(t) {
        var e = t._node._inc || t._node.ownerDocument._inc;
        if (t._inc != e) {
          var r = t._refresh(t._node);
          nt(t, "length", r.length), n(r, t), (t._inc = e);
        }
      }
      function _() {}
      function N(t, e) {
        for (var n = t.length; n--; ) if (t[n] === e) return n;
      }
      function P(t, e, n, r) {
        if ((r ? (e[N(e, r)] = n) : (e[e.length++] = n), t)) {
          n.ownerElement = t;
          var i = t.ownerDocument;
          i &&
            (r && D(i, t, r),
            (function (t, e, n) {
              t && t._inc++,
                "http://www.w3.org/2000/xmlns/" == n.namespaceURI &&
                  (e._nsMap[n.prefix ? n.localName : ""] = n.value);
            })(i, t, n));
        }
      }
      function C(t, e, n) {
        var r = N(e, n);
        if (!(r >= 0)) throw S(w, new Error(t.tagName + "@" + n));
        for (var i = e.length - 1; r < i; ) e[r] = e[++r];
        if (((e.length = i), t)) {
          var a = t.ownerDocument;
          a && (D(a, t, n), (n.ownerElement = null));
        }
      }
      function O(t) {
        if (((this._features = {}), t)) for (var e in t) this._features = t[e];
      }
      function A() {}
      function B(t) {
        return (
          ("<" == t ? "&lt;" : ">" == t && "&gt;") ||
          ("&" == t && "&amp;") ||
          ('"' == t && "&quot;") ||
          "&#" + t.charCodeAt() + ";"
        );
      }
      function z(t, e) {
        if (e(t)) return !0;
        if ((t = t.firstChild))
          do {
            if (z(t, e)) return !0;
          } while ((t = t.nextSibling));
      }
      function R() {}
      function D(t, e, n, r) {
        t && t._inc++,
          "http://www.w3.org/2000/xmlns/" == n.namespaceURI &&
            delete e._nsMap[n.prefix ? n.localName : ""];
      }
      function I(t, e, n) {
        if (t && t._inc) {
          t._inc++;
          var r = e.childNodes;
          if (n) r[r.length++] = n;
          else {
            for (var i = e.firstChild, a = 0; i; )
              (r[a++] = i), (i = i.nextSibling);
            r.length = a;
          }
        }
      }
      function V(t, e) {
        var n = e.previousSibling,
          r = e.nextSibling;
        return (
          n ? (n.nextSibling = r) : (t.firstChild = r),
          r ? (r.previousSibling = n) : (t.lastChild = n),
          I(t.ownerDocument, t),
          e
        );
      }
      function L(t, e, n) {
        var r = e.parentNode;
        if ((r && r.removeChild(e), e.nodeType === v)) {
          var i = e.firstChild;
          if (null == i) return e;
          var a = e.lastChild;
        } else i = a = e;
        var o = n ? n.previousSibling : t.lastChild;
        (i.previousSibling = o),
          (a.nextSibling = n),
          o ? (o.nextSibling = i) : (t.firstChild = i),
          null == n ? (t.lastChild = a) : (n.previousSibling = a);
        do {
          i.parentNode = t;
        } while (i !== a && (i = i.nextSibling));
        return (
          I(t.ownerDocument || t, t),
          e.nodeType == v && (e.firstChild = e.lastChild = null),
          e
        );
      }
      function j() {
        this._nsMap = {};
      }
      function q() {}
      function F() {}
      function H() {}
      function X() {}
      function W() {}
      function G() {}
      function U() {}
      function Y() {}
      function $() {}
      function J() {}
      function K() {}
      function Z() {}
      function Q(t, e) {
        var n = [],
          r = 9 == this.nodeType ? this.documentElement : this,
          i = r.prefix,
          a = r.namespaceURI;
        if (a && null == i && null == (i = r.lookupPrefix(a)))
          var o = [{ namespace: a, prefix: null }];
        return et(this, n, t, e, o), n.join("");
      }
      function tt(t, e, n) {
        var r = t.prefix || "",
          i = t.namespaceURI;
        if (!r && !i) return !1;
        if (
          ("xml" === r && "http://www.w3.org/XML/1998/namespace" === i) ||
          "http://www.w3.org/2000/xmlns/" == i
        )
          return !1;
        for (var a = n.length; a--; ) {
          var o = n[a];
          if (o.prefix == r) return o.namespace != i;
        }
        return !0;
      }
      function et(t, e, n, r, a) {
        if (r) {
          if (!(t = r(t))) return;
          if ("string" == typeof t) return void e.push(t);
        }
        switch (t.nodeType) {
          case o:
            a || (a = []);
            a.length;
            var c = t.attributes,
              g = c.length,
              y = t.firstChild,
              b = t.tagName;
            (n = i === t.namespaceURI || n), e.push("<", b);
            for (var x = 0; x < g; x++) {
              "xmlns" == (w = c.item(x)).prefix
                ? a.push({ prefix: w.localName, namespace: w.value })
                : "xmlns" == w.nodeName &&
                  a.push({ prefix: "", namespace: w.value });
            }
            for (x = 0; x < g; x++) {
              var w;
              if (tt((w = c.item(x)), 0, a)) {
                var k = w.prefix || "",
                  S = w.namespaceURI,
                  E = k ? " xmlns:" + k : " xmlns";
                e.push(E, '="', S, '"'), a.push({ prefix: k, namespace: S });
              }
              et(w, e, n, r, a);
            }
            if (tt(t, 0, a)) {
              (k = t.prefix || ""),
                (S = t.namespaceURI),
                (E = k ? " xmlns:" + k : " xmlns");
              e.push(E, '="', S, '"'), a.push({ prefix: k, namespace: S });
            }
            if (y || (n && !/^(?:meta|link|img|br|hr|input)$/i.test(b))) {
              if ((e.push(">"), n && /^script$/i.test(b)))
                for (; y; )
                  y.data ? e.push(y.data) : et(y, e, n, r, a),
                    (y = y.nextSibling);
              else for (; y; ) et(y, e, n, r, a), (y = y.nextSibling);
              e.push("</", b, ">");
            } else e.push("/>");
            return;
          case d:
          case v:
            for (y = t.firstChild; y; ) et(y, e, n, r, a), (y = y.nextSibling);
            return;
          case s:
            return e.push(" ", t.name, '="', t.value.replace(/[<&"]/g, B), '"');
          case l:
            return e.push(t.data.replace(/[<&]/g, B));
          case u:
            return e.push("<![CDATA[", t.data, "]]>");
          case m:
            return e.push("\x3c!--", t.data, "--\x3e");
          case p:
            var M = t.publicId,
              T = t.systemId;
            if ((e.push("<!DOCTYPE ", t.name), M))
              e.push(' PUBLIC "', M),
                T && "." != T && e.push('" "', T),
                e.push('">');
            else if (T && "." != T) e.push(' SYSTEM "', T, '">');
            else {
              var _ = t.internalSubset;
              _ && e.push(" [", _, "]"), e.push(">");
            }
            return;
          case f:
            return e.push("<?", t.target, " ", t.data, "?>");
          case h:
            return e.push("&", t.nodeName, ";");
          default:
            e.push("??", t.nodeName);
        }
      }
      function nt(t, e, n) {
        t[e] = n;
      }
      (S.prototype = Error.prototype),
        n(y, S),
        (E.prototype = {
          length: 0,
          item: function (t) {
            return this[t] || null;
          },
          toString: function (t, e) {
            for (var n = [], r = 0; r < this.length; r++) et(this[r], n, t, e);
            return n.join("");
          },
        }),
        (M.prototype.item = function (t) {
          return T(this), this[t];
        }),
        r(M, E),
        (_.prototype = {
          length: 0,
          item: E.prototype.item,
          getNamedItem: function (t) {
            for (var e = this.length; e--; ) {
              var n = this[e];
              if (n.nodeName == t) return n;
            }
          },
          setNamedItem: function (t) {
            var e = t.ownerElement;
            if (e && e != this._ownerElement) throw new S(k);
            var n = this.getNamedItem(t.nodeName);
            return P(this._ownerElement, this, t, n), n;
          },
          setNamedItemNS: function (t) {
            var e,
              n = t.ownerElement;
            if (n && n != this._ownerElement) throw new S(k);
            return (
              (e = this.getNamedItemNS(t.namespaceURI, t.localName)),
              P(this._ownerElement, this, t, e),
              e
            );
          },
          removeNamedItem: function (t) {
            var e = this.getNamedItem(t);
            return C(this._ownerElement, this, e), e;
          },
          removeNamedItemNS: function (t, e) {
            var n = this.getNamedItemNS(t, e);
            return C(this._ownerElement, this, n), n;
          },
          getNamedItemNS: function (t, e) {
            for (var n = this.length; n--; ) {
              var r = this[n];
              if (r.localName == e && r.namespaceURI == t) return r;
            }
            return null;
          },
        }),
        (O.prototype = {
          hasFeature: function (t, e) {
            var n = this._features[t.toLowerCase()];
            return !(!n || (e && !(e in n)));
          },
          createDocument: function (t, e, n) {
            var r = new R();
            if (
              ((r.implementation = this),
              (r.childNodes = new E()),
              (r.doctype = n),
              n && r.appendChild(n),
              e)
            ) {
              var i = r.createElementNS(t, e);
              r.appendChild(i);
            }
            return r;
          },
          createDocumentType: function (t, e, n) {
            var r = new G();
            return (
              (r.name = t),
              (r.nodeName = t),
              (r.publicId = e),
              (r.systemId = n),
              r
            );
          },
        }),
        (A.prototype = {
          firstChild: null,
          lastChild: null,
          previousSibling: null,
          nextSibling: null,
          attributes: null,
          parentNode: null,
          childNodes: null,
          ownerDocument: null,
          nodeValue: null,
          namespaceURI: null,
          prefix: null,
          localName: null,
          insertBefore: function (t, e) {
            return L(this, t, e);
          },
          replaceChild: function (t, e) {
            this.insertBefore(t, e), e && this.removeChild(e);
          },
          removeChild: function (t) {
            return V(this, t);
          },
          appendChild: function (t) {
            return this.insertBefore(t, null);
          },
          hasChildNodes: function () {
            return null != this.firstChild;
          },
          cloneNode: function (t) {
            return (function t(e, n, r) {
              var i = new n.constructor();
              for (var a in n) {
                var l = n[a];
                "object" != typeof l && l != i[a] && (i[a] = l);
              }
              n.childNodes && (i.childNodes = new E());
              i.ownerDocument = e;
              switch (i.nodeType) {
                case o:
                  var u = n.attributes,
                    h = (i.attributes = new _()),
                    c = u.length;
                  h._ownerElement = i;
                  for (var f = 0; f < c; f++)
                    i.setAttributeNode(t(e, u.item(f), !0));
                  break;
                case s:
                  r = !0;
              }
              if (r)
                for (var m = n.firstChild; m; )
                  i.appendChild(t(e, m, r)), (m = m.nextSibling);
              return i;
            })(this.ownerDocument || this, this, t);
          },
          normalize: function () {
            for (var t = this.firstChild; t; ) {
              var e = t.nextSibling;
              e && e.nodeType == l && t.nodeType == l
                ? (this.removeChild(e), t.appendData(e.data))
                : (t.normalize(), (t = e));
            }
          },
          isSupported: function (t, e) {
            return this.ownerDocument.implementation.hasFeature(t, e);
          },
          hasAttributes: function () {
            return this.attributes.length > 0;
          },
          lookupPrefix: function (t) {
            for (var e = this; e; ) {
              var n = e._nsMap;
              if (n) for (var r in n) if (n[r] == t) return r;
              e = e.nodeType == s ? e.ownerDocument : e.parentNode;
            }
            return null;
          },
          lookupNamespaceURI: function (t) {
            for (var e = this; e; ) {
              var n = e._nsMap;
              if (n && t in n) return n[t];
              e = e.nodeType == s ? e.ownerDocument : e.parentNode;
            }
            return null;
          },
          isDefaultNamespace: function (t) {
            return null == this.lookupPrefix(t);
          },
        }),
        n(a, A),
        n(a, A.prototype),
        (R.prototype = {
          nodeName: "#document",
          nodeType: d,
          doctype: null,
          documentElement: null,
          _inc: 1,
          insertBefore: function (t, e) {
            if (t.nodeType == v) {
              for (var n = t.firstChild; n; ) {
                var r = n.nextSibling;
                this.insertBefore(n, e), (n = r);
              }
              return t;
            }
            return (
              null == this.documentElement &&
                t.nodeType == o &&
                (this.documentElement = t),
              L(this, t, e),
              (t.ownerDocument = this),
              t
            );
          },
          removeChild: function (t) {
            return (
              this.documentElement == t && (this.documentElement = null),
              V(this, t)
            );
          },
          importNode: function (t, e) {
            return (function t(e, n, r) {
              var i;
              switch (n.nodeType) {
                case o:
                  (i = n.cloneNode(!1)).ownerDocument = e;
                case v:
                  break;
                case s:
                  r = !0;
              }
              i || (i = n.cloneNode(!1));
              i.ownerDocument = e;
              i.parentNode = null;
              if (r)
                for (var a = n.firstChild; a; )
                  i.appendChild(t(e, a, r)), (a = a.nextSibling);
              return i;
            })(this, t, e);
          },
          getElementById: function (t) {
            var e = null;
            return (
              z(this.documentElement, function (n) {
                if (n.nodeType == o && n.getAttribute("id") == t)
                  return (e = n), !0;
              }),
              e
            );
          },
          createElement: function (t) {
            var e = new j();
            return (
              (e.ownerDocument = this),
              (e.nodeName = t),
              (e.tagName = t),
              (e.childNodes = new E()),
              ((e.attributes = new _())._ownerElement = e),
              e
            );
          },
          createDocumentFragment: function () {
            var t = new J();
            return (t.ownerDocument = this), (t.childNodes = new E()), t;
          },
          createTextNode: function (t) {
            var e = new H();
            return (e.ownerDocument = this), e.appendData(t), e;
          },
          createComment: function (t) {
            var e = new X();
            return (e.ownerDocument = this), e.appendData(t), e;
          },
          createCDATASection: function (t) {
            var e = new W();
            return (e.ownerDocument = this), e.appendData(t), e;
          },
          createProcessingInstruction: function (t, e) {
            var n = new K();
            return (
              (n.ownerDocument = this),
              (n.tagName = n.target = t),
              (n.nodeValue = n.data = e),
              n
            );
          },
          createAttribute: function (t) {
            var e = new q();
            return (
              (e.ownerDocument = this),
              (e.name = t),
              (e.nodeName = t),
              (e.localName = t),
              (e.specified = !0),
              e
            );
          },
          createEntityReference: function (t) {
            var e = new $();
            return (e.ownerDocument = this), (e.nodeName = t), e;
          },
          createElementNS: function (t, e) {
            var n = new j(),
              r = e.split(":"),
              i = (n.attributes = new _());
            return (
              (n.childNodes = new E()),
              (n.ownerDocument = this),
              (n.nodeName = e),
              (n.tagName = e),
              (n.namespaceURI = t),
              2 == r.length
                ? ((n.prefix = r[0]), (n.localName = r[1]))
                : (n.localName = e),
              (i._ownerElement = n),
              n
            );
          },
          createAttributeNS: function (t, e) {
            var n = new q(),
              r = e.split(":");
            return (
              (n.ownerDocument = this),
              (n.nodeName = e),
              (n.name = e),
              (n.namespaceURI = t),
              (n.specified = !0),
              2 == r.length
                ? ((n.prefix = r[0]), (n.localName = r[1]))
                : (n.localName = e),
              n
            );
          },
        }),
        r(R, A),
        (j.prototype = {
          nodeType: o,
          hasAttribute: function (t) {
            return null != this.getAttributeNode(t);
          },
          getAttribute: function (t) {
            var e = this.getAttributeNode(t);
            return (e && e.value) || "";
          },
          getAttributeNode: function (t) {
            return this.attributes.getNamedItem(t);
          },
          setAttribute: function (t, e) {
            var n = this.ownerDocument.createAttribute(t);
            (n.value = n.nodeValue = "" + e), this.setAttributeNode(n);
          },
          removeAttribute: function (t) {
            var e = this.getAttributeNode(t);
            e && this.removeAttributeNode(e);
          },
          appendChild: function (t) {
            return t.nodeType === v
              ? this.insertBefore(t, null)
              : (function (t, e) {
                  var n = e.parentNode;
                  if (n) {
                    var r = t.lastChild;
                    n.removeChild(e), (r = t.lastChild);
                  }
                  return (
                    (r = t.lastChild),
                    (e.parentNode = t),
                    (e.previousSibling = r),
                    (e.nextSibling = null),
                    r ? (r.nextSibling = e) : (t.firstChild = e),
                    (t.lastChild = e),
                    I(t.ownerDocument, t, e),
                    e
                  );
                })(this, t);
          },
          setAttributeNode: function (t) {
            return this.attributes.setNamedItem(t);
          },
          setAttributeNodeNS: function (t) {
            return this.attributes.setNamedItemNS(t);
          },
          removeAttributeNode: function (t) {
            return this.attributes.removeNamedItem(t.nodeName);
          },
          removeAttributeNS: function (t, e) {
            var n = this.getAttributeNodeNS(t, e);
            n && this.removeAttributeNode(n);
          },
          hasAttributeNS: function (t, e) {
            return null != this.getAttributeNodeNS(t, e);
          },
          getAttributeNS: function (t, e) {
            var n = this.getAttributeNodeNS(t, e);
            return (n && n.value) || "";
          },
          setAttributeNS: function (t, e, n) {
            var r = this.ownerDocument.createAttributeNS(t, e);
            (r.value = r.nodeValue = "" + n), this.setAttributeNode(r);
          },
          getAttributeNodeNS: function (t, e) {
            return this.attributes.getNamedItemNS(t, e);
          },
          getElementsByTagName: function (t) {
            return new M(this, function (e) {
              var n = [];
              return (
                z(e, function (r) {
                  r === e ||
                    r.nodeType != o ||
                    ("*" !== t && r.tagName != t) ||
                    n.push(r);
                }),
                n
              );
            });
          },
          getElementsByTagNameNS: function (t, e) {
            return new M(this, function (n) {
              var r = [];
              return (
                z(n, function (i) {
                  i === n ||
                    i.nodeType !== o ||
                    ("*" !== t && i.namespaceURI !== t) ||
                    ("*" !== e && i.localName != e) ||
                    r.push(i);
                }),
                r
              );
            });
          },
        }),
        (R.prototype.getElementsByTagName = j.prototype.getElementsByTagName),
        (R.prototype.getElementsByTagNameNS =
          j.prototype.getElementsByTagNameNS),
        r(j, A),
        (q.prototype.nodeType = s),
        r(q, A),
        (F.prototype = {
          data: "",
          substringData: function (t, e) {
            return this.data.substring(t, t + e);
          },
          appendData: function (t) {
            (t = this.data + t),
              (this.nodeValue = this.data = t),
              (this.length = t.length);
          },
          insertData: function (t, e) {
            this.replaceData(t, 0, e);
          },
          appendChild: function (t) {
            throw new Error(b[x]);
          },
          deleteData: function (t, e) {
            this.replaceData(t, e, "");
          },
          replaceData: function (t, e, n) {
            (n = this.data.substring(0, t) + n + this.data.substring(t + e)),
              (this.nodeValue = this.data = n),
              (this.length = n.length);
          },
        }),
        r(F, A),
        (H.prototype = {
          nodeName: "#text",
          nodeType: l,
          splitText: function (t) {
            var e = this.data,
              n = e.substring(t);
            (e = e.substring(0, t)),
              (this.data = this.nodeValue = e),
              (this.length = e.length);
            var r = this.ownerDocument.createTextNode(n);
            return (
              this.parentNode &&
                this.parentNode.insertBefore(r, this.nextSibling),
              r
            );
          },
        }),
        r(H, F),
        (X.prototype = { nodeName: "#comment", nodeType: m }),
        r(X, F),
        (W.prototype = { nodeName: "#cdata-section", nodeType: u }),
        r(W, F),
        (G.prototype.nodeType = p),
        r(G, A),
        (U.prototype.nodeType = g),
        r(U, A),
        (Y.prototype.nodeType = c),
        r(Y, A),
        ($.prototype.nodeType = h),
        r($, A),
        (J.prototype.nodeName = "#document-fragment"),
        (J.prototype.nodeType = v),
        r(J, A),
        (K.prototype.nodeType = f),
        r(K, A),
        (Z.prototype.serializeToString = function (t, e, n) {
          return Q.call(t, e, n);
        }),
        (A.prototype.toString = Q);
      try {
        if (Object.defineProperty) {
          Object.defineProperty(M.prototype, "length", {
            get: function () {
              return T(this), this.$$length;
            },
          }),
            Object.defineProperty(A.prototype, "textContent", {
              get: function () {
                return (function t(e) {
                  switch (e.nodeType) {
                    case o:
                    case v:
                      var n = [];
                      for (e = e.firstChild; e; )
                        7 !== e.nodeType && 8 !== e.nodeType && n.push(t(e)),
                          (e = e.nextSibling);
                      return n.join("");
                    default:
                      return e.nodeValue;
                  }
                })(this);
              },
              set: function (t) {
                switch (this.nodeType) {
                  case o:
                  case v:
                    for (; this.firstChild; ) this.removeChild(this.firstChild);
                    (t || String(t)) &&
                      this.appendChild(this.ownerDocument.createTextNode(t));
                    break;
                  default:
                    (this.data = t), (this.value = t), (this.nodeValue = t);
                }
              },
            }),
            (nt = function (t, e, n) {
              t["$$" + e] = n;
            });
        }
      } catch (t) {}
      (e.DOMImplementation = O), (e.XMLSerializer = Z);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.PixiJS = void 0);
      var r = a(n(7)),
        i = a(n(27));
      function a(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.PixiJS = i.default), (e.default = r.default);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EVENTS = void 0);
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(4)),
        a = n(21);
      var o = (e.EVENTS = {
          PRE_RENDER: "pre-render",
          POST_RENDER: "post-render",
        }),
        s = window.createjs || { Container: function () {} },
        l = (function (t) {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var r = (function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return (
              (r._latex = t),
              (r._ids = {}),
              (r._classes = {}),
              (r._options = n),
              r._render(),
              r
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, s.Container),
            r(e, [
              {
                key: "getObjectsByClass",
                value: function (t) {
                  var e = void 0;
                  return (
                    this._classes[t] &&
                      ((e = []),
                      this._classes[t].forEach(function (t) {
                        e = e.concat(t);
                      })),
                    e
                  );
                },
              },
              {
                key: "getObjectsByClassSeparated",
                value: function (t) {
                  return this._classes[t];
                },
              },
              {
                key: "_render",
                value: function () {
                  this.dispatchEvent(o.PRE_RENDER), (this._bounds = null);
                  var t = new i.default(this._latex, this._options).build();
                  (this._classes = (0, a.convertAndGetClasses)(
                    t.rootNode,
                    this
                  )),
                    this._setWidgetBoundsAndBaseline(t.attributes),
                    this.dispatchEvent(o.POST_RENDER);
                },
              },
              {
                key: "_setWidgetBoundsAndBaseline",
                value: function (t) {
                  var e = this.getBounds();
                  if (e) {
                    var n = t.strutBounds;
                    (this._baselineHeight = t.baselineHeight),
                      this.setBounds(e.x, n.y, e.width, n.height),
                      this._options.debugBounds &&
                        (this._showWidgetBounds(), this._showBaseline());
                  }
                },
              },
              {
                key: "_showWidgetBounds",
                value: function () {
                  var t = this.getBounds(),
                    e = new s.Shape(
                      new s.Graphics().f("blue").dr(t.x, t.y, t.width, t.height)
                    );
                  (e.alpha = 0.3), this.addChild(e);
                },
              },
              {
                key: "_showBaseline",
                value: function () {
                  var t = this.getBounds(),
                    e = new s.Shape();
                  e.graphics
                    .setStrokeStyle(1)
                    .beginStroke("red")
                    .moveTo(t.x, t.y + this.distanceToBaseline)
                    .lineTo(t.x + t.width, t.y + this.distanceToBaseline),
                    this.addChild(e);
                },
              },
              {
                key: "latex",
                set: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  this.removeAllChildren(), (this._latex = t), this._render();
                },
                get: function () {
                  return this._latex;
                },
              },
              {
                key: "classes",
                get: function () {
                  return this._classes;
                },
              },
              {
                key: "ids",
                get: function () {
                  throw new Error("Not yet implemented.");
                },
              },
              {
                key: "distanceToBaseline",
                get: function () {
                  return this._baselineHeight;
                },
              },
            ]),
            e
          );
        })();
      e.default = l;
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        var n,
          r,
          i,
          a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                };
        !(function (o, s) {
          "object" == a(e) && "object" == a(t)
            ? (t.exports = s())
            : ((r = []),
              void 0 ===
                (i = "function" == typeof (n = s) ? n.apply(e, r) : n) ||
                (t.exports = i));
        })("undefined" != typeof self && self, function () {
          return (function (t) {
            var e = {};
            function n(r) {
              if (e[r]) return e[r].exports;
              var i = (e[r] = { i: r, l: !1, exports: {} });
              return (
                t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, r) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: r });
              }),
              (n.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (
                  4 & e &&
                  "object" == (void 0 === t ? "undefined" : a(t)) &&
                  t &&
                  t.__esModule
                )
                  return t;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var i in t)
                    n.d(
                      r,
                      i,
                      function (e) {
                        return t[e];
                      }.bind(null, i)
                    );
                return r;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, "a", e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ""),
              n((n.s = 66))
            );
          })([
            function (t, e, n) {
              (e.__esModule = !0),
                (e.default = function (t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                });
            },
            function (t, e, n) {
              e.__esModule = !0;
              var r,
                i = (r = n(60)) && r.__esModule ? r : { default: r };
              e.default = (function () {
                function t(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      (0, i.default)(t, r.key, r);
                  }
                }
                return function (e, n, r) {
                  return n && t(e.prototype, n), r && t(e, r), e;
                };
              })();
            },
            function (t, e) {
              var n = (t.exports = { version: "2.5.7" });
              "number" == typeof __e && (__e = n);
            },
            function (t, e, n) {
              t.exports = { default: n(100), __esModule: !0 };
            },
            function (t, e, n) {
              e.__esModule = !0;
              var r,
                i = (r = n(113)) && r.__esModule ? r : { default: r };
              e.default = function (t) {
                if (Array.isArray(t)) {
                  for (var e = 0, n = Array(t.length); e < t.length; e++)
                    n[e] = t[e];
                  return n;
                }
                return (0, i.default)(t);
              };
            },
            function (t, e, n) {
              var r = n(32)("wks"),
                i = n(25),
                a = n(7).Symbol,
                o = "function" == typeof a;
              (t.exports = function (t) {
                return (
                  r[t] || (r[t] = (o && a[t]) || (o ? a : i)("Symbol." + t))
                );
              }).store = r;
            },
            function (t, e, n) {
              var r = n(12),
                i = n(59),
                a = n(38),
                o = Object.defineProperty;
              e.f = n(10)
                ? Object.defineProperty
                : function (t, e, n) {
                    if ((r(t), (e = a(e, !0)), r(n), i))
                      try {
                        return o(t, e, n);
                      } catch (t) {}
                    if ("get" in n || "set" in n)
                      throw TypeError("Accessors not supported!");
                    return "value" in n && (t[e] = n.value), t;
                  };
            },
            function (t, e) {
              var n = (t.exports =
                "undefined" != typeof window && window.Math == Math
                  ? window
                  : "undefined" != typeof self && self.Math == Math
                  ? self
                  : Function("return this")());
              "number" == typeof __g && (__g = n);
            },
            function (t, e, n) {
              var r = n(7),
                i = n(2),
                a = n(39),
                o = n(16),
                s = n(9),
                l = function t(e, n, l) {
                  var u,
                    h,
                    c,
                    f = e & t.F,
                    m = e & t.G,
                    d = e & t.S,
                    p = e & t.P,
                    v = e & t.B,
                    g = e & t.W,
                    y = m ? i : i[n] || (i[n] = {}),
                    b = y.prototype,
                    x = m ? r : d ? r[n] : (r[n] || {}).prototype;
                  for (u in (m && (l = n), l))
                    ((h = !f && x && void 0 !== x[u]) && s(y, u)) ||
                      ((c = h ? x[u] : l[u]),
                      (y[u] =
                        m && "function" != typeof x[u]
                          ? l[u]
                          : v && h
                          ? a(c, r)
                          : g && x[u] == c
                          ? (function (t) {
                              var e = function (e, n, r) {
                                if (this instanceof t) {
                                  switch (arguments.length) {
                                    case 0:
                                      return new t();
                                    case 1:
                                      return new t(e);
                                    case 2:
                                      return new t(e, n);
                                  }
                                  return new t(e, n, r);
                                }
                                return t.apply(this, arguments);
                              };
                              return (e.prototype = t.prototype), e;
                            })(c)
                          : p && "function" == typeof c
                          ? a(Function.call, c)
                          : c),
                      p &&
                        (((y.virtual || (y.virtual = {}))[u] = c),
                        e & t.R && b && !b[u] && o(b, u, c)));
                };
              (l.F = 1),
                (l.G = 2),
                (l.S = 4),
                (l.P = 8),
                (l.B = 16),
                (l.W = 32),
                (l.U = 64),
                (l.R = 128),
                (t.exports = l);
            },
            function (t, e) {
              var n = {}.hasOwnProperty;
              t.exports = function (t, e) {
                return n.call(t, e);
              };
            },
            function (t, e, n) {
              t.exports = !n(15)(function () {
                return (
                  7 !=
                  Object.defineProperty({}, "a", {
                    get: function () {
                      return 7;
                    },
                  }).a
                );
              });
            },
            function (t, e) {
              t.exports = function (t) {
                return "object" == (void 0 === t ? "undefined" : a(t))
                  ? null !== t
                  : "function" == typeof t;
              };
            },
            function (t, e, n) {
              var r = n(11);
              t.exports = function (t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t;
              };
            },
            function (t, e, n) {
              var r = n(53),
                i = n(36);
              t.exports = function (t) {
                return r(i(t));
              };
            },
            function (t, e) {
              t.exports = {};
            },
            function (t, e) {
              t.exports = function (t) {
                try {
                  return !!t();
                } catch (t) {
                  return !0;
                }
              };
            },
            function (t, e, n) {
              var r = n(6),
                i = n(19);
              t.exports = n(10)
                ? function (t, e, n) {
                    return r.f(t, e, i(1, n));
                  }
                : function (t, e, n) {
                    return (t[e] = n), t;
                  };
            },
            function (t, e, n) {
              var r = n(36);
              t.exports = function (t) {
                return Object(r(t));
              };
            },
            function (t, e, n) {
              var r = n(54),
                i = n(31);
              t.exports =
                Object.keys ||
                function (t) {
                  return r(t, i);
                };
            },
            function (t, e) {
              t.exports = function (t, e) {
                return {
                  enumerable: !(1 & t),
                  configurable: !(2 & t),
                  writable: !(4 & t),
                  value: e,
                };
              };
            },
            function (t, e, n) {
              e.__esModule = !0;
              var r = a(n(95)),
                i = a(n(3));
              function a(t) {
                return t && t.__esModule ? t : { default: t };
              }
              e.default = function (t, e) {
                if (Array.isArray(t)) return t;
                if ((0, r.default)(Object(t)))
                  return (function (t, e) {
                    var n = [],
                      r = !0,
                      a = !1,
                      o = void 0;
                    try {
                      for (
                        var s, l = (0, i.default)(t);
                        !(r = (s = l.next()).done) &&
                        (n.push(s.value), !e || n.length !== e);
                        r = !0
                      );
                    } catch (t) {
                      (a = !0), (o = t);
                    } finally {
                      try {
                        !r && l.return && l.return();
                      } finally {
                        if (a) throw o;
                      }
                    }
                    return n;
                  })(t, e);
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance"
                );
              };
            },
            function (t, e) {
              e.f = {}.propertyIsEnumerable;
            },
            function (t, e) {
              t.exports = !0;
            },
            function (t, e, n) {
              var r = n(111)(!0);
              n(56)(
                String,
                "String",
                function (t) {
                  (this._t = String(t)), (this._i = 0);
                },
                function () {
                  var t,
                    e = this._t,
                    n = this._i;
                  return n >= e.length
                    ? { value: void 0, done: !0 }
                    : ((t = r(e, n)),
                      (this._i += t.length),
                      { value: t, done: !1 });
                }
              );
            },
            function (t, e, n) {
              var r = n(8),
                i = n(2),
                a = n(15);
              t.exports = function (t, e) {
                var n = (i.Object || {})[t] || Object[t],
                  o = {};
                (o[t] = e(n)),
                  r(
                    r.S +
                      r.F *
                        a(function () {
                          n(1);
                        }),
                    "Object",
                    o
                  );
              };
            },
            function (t, e) {
              var n = 0,
                r = Math.random();
              t.exports = function (t) {
                return "Symbol(".concat(
                  void 0 === t ? "" : t,
                  ")_",
                  (++n + r).toString(36)
                );
              };
            },
            function (t, e) {
              e.f = Object.getOwnPropertySymbols;
            },
            function (t, e, n) {
              var r = n(7),
                i = n(2),
                a = n(22),
                o = n(28),
                s = n(6).f;
              t.exports = function (t) {
                var e = i.Symbol || (i.Symbol = a ? {} : r.Symbol || {});
                "_" == t.charAt(0) || t in e || s(e, t, { value: o.f(t) });
              };
            },
            function (t, e, n) {
              e.f = n(5);
            },
            function (t, e, n) {
              n(99);
              for (
                var r = n(7),
                  i = n(16),
                  a = n(14),
                  o = n(5)("toStringTag"),
                  s =
                    "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                      ","
                    ),
                  l = 0;
                l < s.length;
                l++
              ) {
                var u = s[l],
                  h = r[u],
                  c = h && h.prototype;
                c && !c[o] && i(c, o, u), (a[u] = a.Array);
              }
            },
            function (t, e, n) {
              var r = n(6).f,
                i = n(9),
                a = n(5)("toStringTag");
              t.exports = function (t, e, n) {
                t &&
                  !i((t = n ? t : t.prototype), a) &&
                  r(t, a, { configurable: !0, value: e });
              };
            },
            function (t, e) {
              t.exports =
                "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                  ","
                );
            },
            function (t, e, n) {
              var r = n(2),
                i = n(7),
                a = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
              (t.exports = function (t, e) {
                return a[t] || (a[t] = void 0 !== e ? e : {});
              })("versions", []).push({
                version: r.version,
                mode: n(22) ? "pure" : "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
              });
            },
            function (t, e, n) {
              var r = n(32)("keys"),
                i = n(25);
              t.exports = function (t) {
                return r[t] || (r[t] = i(t));
              };
            },
            function (t, e) {
              var n = {}.toString;
              t.exports = function (t) {
                return n.call(t).slice(8, -1);
              };
            },
            function (t, e, n) {
              var r = n(12),
                i = n(109),
                a = n(31),
                o = n(33)("IE_PROTO"),
                s = function () {},
                l = function () {
                  var t,
                    e = n(58)("iframe"),
                    r = a.length;
                  for (
                    e.style.display = "none",
                      n(106).appendChild(e),
                      e.src = "javascript:",
                      (t = e.contentWindow.document).open(),
                      t.write("<script>document.F=Object</script>"),
                      t.close(),
                      l = t.F;
                    r--;

                  )
                    delete l.prototype[a[r]];
                  return l();
                };
              t.exports =
                Object.create ||
                function (t, e) {
                  var n;
                  return (
                    null !== t
                      ? ((s.prototype = r(t)),
                        (n = new s()),
                        (s.prototype = null),
                        (n[o] = t))
                      : (n = l()),
                    void 0 === e ? n : i(n, e)
                  );
                };
            },
            function (t, e) {
              t.exports = function (t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t;
              };
            },
            function (t, e) {
              var n = Math.ceil,
                r = Math.floor;
              t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
              };
            },
            function (t, e, n) {
              var r = n(11);
              t.exports = function (t, e) {
                if (!r(t)) return t;
                var n, i;
                if (
                  e &&
                  "function" == typeof (n = t.toString) &&
                  !r((i = n.call(t)))
                )
                  return i;
                if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t))))
                  return i;
                if (
                  !e &&
                  "function" == typeof (n = t.toString) &&
                  !r((i = n.call(t)))
                )
                  return i;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            function (t, e, n) {
              var r = n(116);
              t.exports = function (t, e, n) {
                if ((r(t), void 0 === e)) return t;
                switch (n) {
                  case 1:
                    return function (n) {
                      return t.call(e, n);
                    };
                  case 2:
                    return function (n, r) {
                      return t.call(e, n, r);
                    };
                  case 3:
                    return function (n, r, i) {
                      return t.call(e, n, r, i);
                    };
                }
                return function () {
                  return t.apply(e, arguments);
                };
              };
            },
            function (t, e) {
              t.exports = {
                "́": { text: "\\'", math: "\\acute" },
                "̀": { text: "\\`", math: "\\grave" },
                "̈": { text: '\\"', math: "\\ddot" },
                "̃": { text: "\\~", math: "\\tilde" },
                "̄": { text: "\\=", math: "\\bar" },
                "̆": { text: "\\u", math: "\\breve" },
                "̌": { text: "\\v", math: "\\check" },
                "̂": { text: "\\^", math: "\\hat" },
                "̇": { text: "\\.", math: "\\dot" },
                "̊": { text: "\\r", math: "\\mathring" },
                "̋": { text: "\\H" },
              };
            },
            function (t, e, n) {
              t.exports = { default: n(73), __esModule: !0 };
            },
            function (t, e, n) {
              e.__esModule = !0;
              var r = o(n(80)),
                i = o(n(76)),
                a = o(n(48));
              function o(t) {
                return t && t.__esModule ? t : { default: t };
              }
              e.default = function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Super expression must either be null or a function, not " +
                      (void 0 === e ? "undefined" : (0, a.default)(e))
                  );
                (t.prototype = (0, i.default)(e && e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                  e && (r.default ? (0, r.default)(t, e) : (t.__proto__ = e));
              };
            },
            function (t, e, n) {
              e.__esModule = !0;
              var r,
                i = (r = n(48)) && r.__esModule ? r : { default: r };
              e.default = function (t, e) {
                if (!t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !e ||
                  ("object" !==
                    (void 0 === e ? "undefined" : (0, i.default)(e)) &&
                    "function" != typeof e)
                  ? t
                  : e;
              };
            },
            function (t, e, n) {
              t.exports = { default: n(92), __esModule: !0 };
            },
            function (t, e, n) {
              var r = n(21),
                i = n(19),
                a = n(13),
                o = n(38),
                s = n(9),
                l = n(59),
                u = Object.getOwnPropertyDescriptor;
              e.f = n(10)
                ? u
                : function (t, e) {
                    if (((t = a(t)), (e = o(e, !0)), l))
                      try {
                        return u(t, e);
                      } catch (t) {}
                    if (s(t, e)) return i(!r.f.call(t, e), t[e]);
                  };
            },
            function (t, e, n) {
              var r = n(54),
                i = n(31).concat("length", "prototype");
              e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                  return r(t, i);
                };
            },
            function (t, e, n) {
              var r = n(13),
                i = n(46).f,
                o = {}.toString,
                s =
                  "object" ==
                    ("undefined" == typeof window ? "undefined" : a(window)) &&
                  window &&
                  Object.getOwnPropertyNames
                    ? Object.getOwnPropertyNames(window)
                    : [];
              t.exports.f = function (t) {
                return s && "[object Window]" == o.call(t)
                  ? (function (t) {
                      try {
                        return i(t);
                      } catch (t) {
                        return s.slice();
                      }
                    })(t)
                  : i(r(t));
              };
            },
            function (t, e, n) {
              e.__esModule = !0;
              var r = s(n(90)),
                i = s(n(88)),
                o =
                  "function" == typeof i.default && "symbol" == a(r.default)
                    ? function (t) {
                        return void 0 === t ? "undefined" : a(t);
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof i.default &&
                          t.constructor === i.default &&
                          t !== i.default.prototype
                          ? "symbol"
                          : void 0 === t
                          ? "undefined"
                          : a(t);
                      };
              function s(t) {
                return t && t.__esModule ? t : { default: t };
              }
              e.default =
                "function" == typeof i.default && "symbol" === o(r.default)
                  ? function (t) {
                      return void 0 === t ? "undefined" : o(t);
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof i.default &&
                        t.constructor === i.default &&
                        t !== i.default.prototype
                        ? "symbol"
                        : void 0 === t
                        ? "undefined"
                        : o(t);
                    };
            },
            function (t, e, n) {
              var r = n(34),
                i = n(5)("toStringTag"),
                a =
                  "Arguments" ==
                  r(
                    (function () {
                      return arguments;
                    })()
                  );
              t.exports = function (t) {
                var e, n, o;
                return void 0 === t
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (t, e) {
                      try {
                        return t[e];
                      } catch (t) {}
                    })((e = Object(t)), i))
                  ? n
                  : a
                  ? r(e)
                  : "Object" == (o = r(e)) && "function" == typeof e.callee
                  ? "Arguments"
                  : o;
              };
            },
            function (t, e, n) {
              var r = n(49),
                i = n(5)("iterator"),
                a = n(14);
              t.exports = n(2).getIteratorMethod = function (t) {
                if (void 0 != t) return t[i] || t["@@iterator"] || a[r(t)];
              };
            },
            function (t, e, n) {
              var r = n(9),
                i = n(17),
                a = n(33)("IE_PROTO"),
                o = Object.prototype;
              t.exports =
                Object.getPrototypeOf ||
                function (t) {
                  return (
                    (t = i(t)),
                    r(t, a)
                      ? t[a]
                      : "function" == typeof t.constructor &&
                        t instanceof t.constructor
                      ? t.constructor.prototype
                      : t instanceof Object
                      ? o
                      : null
                  );
                };
            },
            function (t, e, n) {
              var r = n(37),
                i = Math.min;
              t.exports = function (t) {
                return t > 0 ? i(r(t), 9007199254740991) : 0;
              };
            },
            function (t, e, n) {
              var r = n(34);
              t.exports = Object("z").propertyIsEnumerable(0)
                ? Object
                : function (t) {
                    return "String" == r(t) ? t.split("") : Object(t);
                  };
            },
            function (t, e, n) {
              var r = n(9),
                i = n(13),
                a = n(108)(!1),
                o = n(33)("IE_PROTO");
              t.exports = function (t, e) {
                var n,
                  s = i(t),
                  l = 0,
                  u = [];
                for (n in s) n != o && r(s, n) && u.push(n);
                for (; e.length > l; )
                  r(s, (n = e[l++])) && (~a(u, n) || u.push(n));
                return u;
              };
            },
            function (t, e, n) {
              t.exports = n(16);
            },
            function (t, e, n) {
              var r = n(22),
                i = n(8),
                a = n(55),
                o = n(16),
                s = n(14),
                l = n(110),
                u = n(30),
                h = n(51),
                c = n(5)("iterator"),
                f = !([].keys && "next" in [].keys()),
                m = function () {
                  return this;
                };
              t.exports = function (t, e, n, d, p, v, g) {
                l(n, e, d);
                var y,
                  b,
                  x,
                  w = function (t) {
                    if (!f && t in M) return M[t];
                    switch (t) {
                      case "keys":
                      case "values":
                        return function () {
                          return new n(this, t);
                        };
                    }
                    return function () {
                      return new n(this, t);
                    };
                  },
                  k = e + " Iterator",
                  S = "values" == p,
                  E = !1,
                  M = t.prototype,
                  T = M[c] || M["@@iterator"] || (p && M[p]),
                  _ = T || w(p),
                  N = p ? (S ? w("entries") : _) : void 0,
                  P = ("Array" == e && M.entries) || T;
                if (
                  (P &&
                    (x = h(P.call(new t()))) !== Object.prototype &&
                    x.next &&
                    (u(x, k, !0), r || "function" == typeof x[c] || o(x, c, m)),
                  S &&
                    T &&
                    "values" !== T.name &&
                    ((E = !0),
                    (_ = function () {
                      return T.call(this);
                    })),
                  (r && !g) || (!f && !E && M[c]) || o(M, c, _),
                  (s[e] = _),
                  (s[k] = m),
                  p)
                )
                  if (
                    ((y = {
                      values: S ? _ : w("values"),
                      keys: v ? _ : w("keys"),
                      entries: N,
                    }),
                    g)
                  )
                    for (b in y) b in M || a(M, b, y[b]);
                  else i(i.P + i.F * (f || E), e, y);
                return y;
              };
            },
            function (t, e, n) {
              var r = n(25)("meta"),
                i = n(11),
                o = n(9),
                s = n(6).f,
                l = 0,
                u =
                  Object.isExtensible ||
                  function () {
                    return !0;
                  },
                h = !n(15)(function () {
                  return u(Object.preventExtensions({}));
                }),
                c = function (t) {
                  s(t, r, { value: { i: "O" + ++l, w: {} } });
                },
                f = (t.exports = {
                  KEY: r,
                  NEED: !1,
                  fastKey: function (t, e) {
                    if (!i(t))
                      return "symbol" == (void 0 === t ? "undefined" : a(t))
                        ? t
                        : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, r)) {
                      if (!u(t)) return "F";
                      if (!e) return "E";
                      c(t);
                    }
                    return t[r].i;
                  },
                  getWeak: function (t, e) {
                    if (!o(t, r)) {
                      if (!u(t)) return !0;
                      if (!e) return !1;
                      c(t);
                    }
                    return t[r].w;
                  },
                  onFreeze: function (t) {
                    return h && f.NEED && u(t) && !o(t, r) && c(t), t;
                  },
                });
            },
            function (t, e, n) {
              var r = n(11),
                i = n(7).document,
                a = r(i) && r(i.createElement);
              t.exports = function (t) {
                return a ? i.createElement(t) : {};
              };
            },
            function (t, e, n) {
              t.exports =
                !n(10) &&
                !n(15)(function () {
                  return (
                    7 !=
                    Object.defineProperty(n(58)("div"), "a", {
                      get: function () {
                        return 7;
                      },
                    }).a
                  );
                });
            },
            function (t, e, n) {
              t.exports = { default: n(118), __esModule: !0 };
            },
            function (t) {
              t.exports = { a: "0.11.0-pre" };
            },
            function (t, e, n) {
              t.exports = { default: n(68), __esModule: !0 };
            },
            function (t, e, n) {
              e.__esModule = !0;
              var r,
                i = (r = n(60)) && r.__esModule ? r : { default: r };
              e.default = function (t, e, n) {
                return (
                  e in t
                    ? (0, i.default)(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (t[e] = n),
                  t
                );
              };
            },
            function (t, e, n) {
              t.exports = { default: n(70), __esModule: !0 };
            },
            function (t, e, n) {
              t.exports = { default: n(115), __esModule: !0 };
            },
            function (t, e, n) {
              n.r(e), n(120);
              var r = n(0),
                i = n.n(r),
                a = n(1),
                o = n.n(a),
                s = n(65),
                l = n.n(s),
                u = (function () {
                  function t(e, n, r) {
                    i()(this, t),
                      (this.lexer = e),
                      (this.start = n),
                      (this.end = r),
                      l()(this);
                  }
                  return (
                    o()(t, null, [
                      {
                        key: "range",
                        value: function (e, n) {
                          return n
                            ? e && e.loc && n.loc && e.loc.lexer === n.loc.lexer
                              ? new t(e.loc.lexer, e.loc.start, n.loc.end)
                              : null
                            : e && e.loc;
                        },
                      },
                    ]),
                    t
                  );
                })(),
                h = (function () {
                  function t(e, n) {
                    i()(this, t), (this.text = e), (this.loc = n);
                  }
                  return (
                    o()(t, [
                      {
                        key: "range",
                        value: function (e, n) {
                          return new t(n, u.range(this, e));
                        },
                      },
                    ]),
                    t
                  );
                })(),
                c = function t(e, n) {
                  i()(this, t);
                  var r = "KaTeX parse error: " + e,
                    a = void 0,
                    o = n && n.loc;
                  if (o && o.start <= o.end) {
                    var s = o.lexer.input;
                    a = o.start;
                    var l = o.end;
                    a === s.length
                      ? (r += " at end of input: ")
                      : (r += " at position " + (a + 1) + ": ");
                    var u = s.slice(a, l).replace(/[^]/g, "$&̲");
                    r +=
                      (a > 15 ? "…" + s.slice(a - 15, a) : s.slice(0, a)) +
                      u +
                      (l + 15 < s.length
                        ? s.slice(l, l + 15) + "…"
                        : s.slice(l));
                  }
                  var h = new Error(r);
                  return (
                    (h.name = "ParseError"),
                    (h.__proto__ = t.prototype),
                    (h.position = a),
                    h
                  );
                };
              c.prototype.__proto__ = Error.prototype;
              var f = c,
                m = Array.prototype.indexOf,
                d = function (t, e) {
                  if (null == t) return -1;
                  if (m && t.indexOf === m) return t.indexOf(e);
                  for (var n = t.length, r = 0; r < n; r++)
                    if (t[r] === e) return r;
                  return -1;
                },
                p = /([A-Z])/g,
                v = {
                  "&": "&amp;",
                  ">": "&gt;",
                  "<": "&lt;",
                  '"': "&quot;",
                  "'": "&#x27;",
                },
                g = /[&><"']/g,
                y = void 0;
              if ("undefined" != typeof document) {
                var b = document.createElement("span");
                y =
                  "textContent" in b
                    ? function (t, e) {
                        t.textContent = e;
                      }
                    : function (t, e) {
                        t.innerText = e;
                      };
              }
              var x = function t(e) {
                  return "ordgroup" === e.type
                    ? 1 === e.value.length
                      ? t(e.value[0])
                      : e
                    : "color" === e.type
                    ? 1 === e.value.value.length
                      ? t(e.value.value[0])
                      : e
                    : "font" === e.type
                    ? t(e.value.body)
                    : e;
                },
                w = function (t) {
                  if (!t)
                    throw new Error("Expected non-null, but got " + String(t));
                  return t;
                },
                k = {
                  contains: function (t, e) {
                    return -1 !== d(t, e);
                  },
                  deflt: function (t, e) {
                    return void 0 === t ? e : t;
                  },
                  escape: function (t) {
                    return String(t).replace(g, function (t) {
                      return v[t];
                    });
                  },
                  hyphenate: function (t) {
                    return t.replace(p, "-$1").toLowerCase();
                  },
                  indexOf: d,
                  setTextContent: y,
                  clearNode: function (t) {
                    y(t, "");
                  },
                  getBaseElem: x,
                  isCharacterBox: function (t) {
                    var e = x(t);
                    return (
                      "mathord" === e.type ||
                      "textord" === e.type ||
                      "bin" === e.type ||
                      "rel" === e.type ||
                      "inner" === e.type ||
                      "open" === e.type ||
                      "close" === e.type ||
                      "punct" === e.type
                    );
                  },
                },
                S = (function () {
                  function t(e) {
                    i()(this, t),
                      (e = e || {}),
                      (this.displayMode = k.deflt(e.displayMode, !1)),
                      (this.throwOnError = k.deflt(e.throwOnError, !0)),
                      (this.errorColor = k.deflt(e.errorColor, "#cc0000")),
                      (this.macros = e.macros || {}),
                      (this.colorIsTextColor = k.deflt(e.colorIsTextColor, !1)),
                      (this.strict = k.deflt(e.strict, "warn")),
                      (this.maxSize = Math.max(0, k.deflt(e.maxSize, 1 / 0))),
                      (this.maxExpand = Math.max(0, k.deflt(e.maxExpand, 1e3))),
                      (this.allowedProtocols = k.deflt(e.allowedProtocols, [
                        "http",
                        "https",
                        "mailto",
                        "_relative",
                      ]));
                  }
                  return (
                    o()(t, [
                      {
                        key: "reportNonstrict",
                        value: function (t, e, n) {
                          var r = this.strict;
                          if (
                            ("function" == typeof r && (r = r(t, e, n)),
                            r && "ignore" !== r)
                          ) {
                            if (!0 === r || "error" === r)
                              throw new f(
                                "LaTeX-incompatible input and strict mode is set to 'error': " +
                                  e +
                                  " [" +
                                  t +
                                  "]",
                                n
                              );
                            "warn" === r
                              ? "undefined" != typeof console &&
                                console.warn(
                                  "LaTeX-incompatible input and strict mode is set to 'warn': " +
                                    e +
                                    " [" +
                                    t +
                                    "]"
                                )
                              : "undefined" != typeof console &&
                                console.warn(
                                  "LaTeX-incompatible input and strict mode is set to unrecognized '" +
                                    r +
                                    "': " +
                                    e +
                                    " [" +
                                    t +
                                    "]"
                                );
                          }
                        },
                      },
                      {
                        key: "useStrictBehavior",
                        value: function (t, e, n) {
                          var r = this.strict;
                          if ("function" == typeof r)
                            try {
                              r = r(t, e, n);
                            } catch (t) {
                              r = "error";
                            }
                          return !(
                            !r ||
                            "ignore" === r ||
                            (!0 !== r &&
                              "error" !== r &&
                              ("warn" === r
                                ? ("undefined" != typeof console &&
                                    console.warn(
                                      "LaTeX-incompatible input and strict mode is set to 'warn': " +
                                        e +
                                        " [" +
                                        t +
                                        "]"
                                    ),
                                  1)
                                : ("undefined" != typeof console &&
                                    console.warn(
                                      "LaTeX-incompatible input and strict mode is set to unrecognized '" +
                                        r +
                                        "': " +
                                        e +
                                        " [" +
                                        t +
                                        "]"
                                    ),
                                  1)))
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(),
                E = n(4),
                M = n.n(E),
                T = (function () {
                  function t(e, n, r) {
                    i()(this, t),
                      (this.id = e),
                      (this.size = n),
                      (this.cramped = r);
                  }
                  return (
                    o()(t, [
                      {
                        key: "sup",
                        value: function () {
                          return _[N[this.id]];
                        },
                      },
                      {
                        key: "sub",
                        value: function () {
                          return _[P[this.id]];
                        },
                      },
                      {
                        key: "fracNum",
                        value: function () {
                          return _[C[this.id]];
                        },
                      },
                      {
                        key: "fracDen",
                        value: function () {
                          return _[O[this.id]];
                        },
                      },
                      {
                        key: "cramp",
                        value: function () {
                          return _[A[this.id]];
                        },
                      },
                      {
                        key: "text",
                        value: function () {
                          return _[B[this.id]];
                        },
                      },
                      {
                        key: "isTight",
                        value: function () {
                          return this.size >= 2;
                        },
                      },
                    ]),
                    t
                  );
                })(),
                _ = [
                  new T(0, 0, !1),
                  new T(1, 0, !0),
                  new T(2, 1, !1),
                  new T(3, 1, !0),
                  new T(4, 2, !1),
                  new T(5, 2, !0),
                  new T(6, 3, !1),
                  new T(7, 3, !0),
                ],
                N = [4, 5, 4, 5, 6, 7, 6, 7],
                P = [5, 5, 5, 5, 7, 7, 7, 7],
                C = [2, 3, 4, 5, 6, 7, 6, 7],
                O = [3, 3, 5, 5, 7, 7, 7, 7],
                A = [1, 1, 3, 3, 5, 5, 7, 7],
                B = [0, 1, 2, 3, 2, 3, 2, 3],
                z = {
                  DISPLAY: _[0],
                  TEXT: _[2],
                  SCRIPT: _[4],
                  SCRIPTSCRIPT: _[6],
                },
                R = n(3),
                D = n.n(R),
                I = n(20),
                V = n.n(I),
                L = n(44),
                j = n.n(L),
                q = n(43),
                F = n.n(q),
                H = n(42),
                X = n.n(H),
                W = n(41),
                G = n.n(W),
                U = [
                  {
                    name: "latin",
                    blocks: [
                      [256, 591],
                      [768, 879],
                    ],
                  },
                  { name: "cyrillic", blocks: [[1024, 1279]] },
                  { name: "brahmic", blocks: [[2304, 4255]] },
                  { name: "georgian", blocks: [[4256, 4351]] },
                  {
                    name: "cjk",
                    blocks: [
                      [12288, 12543],
                      [19968, 40879],
                      [65280, 65376],
                    ],
                  },
                  { name: "hangul", blocks: [[44032, 55215]] },
                ],
                Y = [];
              function $(t) {
                for (var e = 0; e < Y.length; e += 2)
                  if (t >= Y[e] && t <= Y[e + 1]) return !0;
                return !1;
              }
              U.forEach(function (t) {
                return t.blocks.forEach(function (t) {
                  return Y.push.apply(Y, M()(t));
                });
              });
              var J = {
                  path: {
                    sqrtMain:
                      "M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z",
                    sqrtSize1:
                      "M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z",
                    sqrtSize2:
                      "M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z",
                    sqrtSize3:
                      "M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z",
                    sqrtSize4:
                      "M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z",
                    doubleleftarrow:
                      "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
                    doublerightarrow:
                      "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
                    leftarrow:
                      "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
                    leftbrace:
                      "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
                    leftbraceunder:
                      "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
                    leftgroup:
                      "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
                    leftgroupunder:
                      "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
                    leftharpoon:
                      "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
                    leftharpoonplus:
                      "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
                    leftharpoondown:
                      "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
                    leftharpoondownplus:
                      "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
                    lefthook:
                      "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
                    leftlinesegment:
                      "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
                    leftmapsto:
                      "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
                    leftToFrom:
                      "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
                    longequal:
                      "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
                    midbrace:
                      "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
                    midbraceunder:
                      "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
                    oiintSize1:
                      "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
                    oiintSize2:
                      "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
                    oiiintSize1:
                      "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
                    oiiintSize2:
                      "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
                    rightarrow:
                      "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
                    rightbrace:
                      "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
                    rightbraceunder:
                      "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
                    rightgroup:
                      "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
                    rightgroupunder:
                      "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
                    rightharpoon:
                      "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
                    rightharpoonplus:
                      "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
                    rightharpoondown:
                      "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
                    rightharpoondownplus:
                      "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
                    righthook:
                      "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
                    rightlinesegment:
                      "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
                    rightToFrom:
                      "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
                    twoheadleftarrow:
                      "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
                    twoheadrightarrow:
                      "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
                    tilde1:
                      "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
                    tilde2:
                      "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
                    tilde3:
                      "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
                    tilde4:
                      "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
                    vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
                    widehat1:
                      "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
                    widehat2:
                      "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                    widehat3:
                      "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                    widehat4:
                      "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                    widecheck1:
                      "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
                    widecheck2:
                      "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                    widecheck3:
                      "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                    widecheck4:
                      "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                    baraboveleftarrow:
                      "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 241v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
                    rightarrowabovebar:
                      "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
                    baraboveshortleftharpoon:
                      "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
                    rightharpoonaboveshortbar:
                      "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
                    shortbaraboveleftharpoon:
                      "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
                    shortrightharpoonabovebar:
                      "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z",
                  },
                },
                K = function (t) {
                  return t
                    .filter(function (t) {
                      return t;
                    })
                    .join(" ");
                },
                Z = (function () {
                  function t(e, n, r, a) {
                    if (
                      (i()(this, t),
                      (this.classes = e || []),
                      (this.children = n || []),
                      (this.attributes = {}),
                      (this.height = 0),
                      (this.depth = 0),
                      (this.maxFontSize = 0),
                      (this.style = G()({}, a)),
                      r)
                    ) {
                      r.style.isTight() && this.classes.push("mtight");
                      var o = r.getColor();
                      o && (this.style.color = o);
                    }
                  }
                  return (
                    o()(t, [
                      {
                        key: "setAttribute",
                        value: function (t, e) {
                          this.attributes[t] = e;
                        },
                      },
                      {
                        key: "hasClass",
                        value: function (t) {
                          return k.contains(this.classes, t);
                        },
                      },
                      {
                        key: "tryCombine",
                        value: function (t) {
                          return !1;
                        },
                      },
                      {
                        key: "tagName",
                        value: function () {
                          throw new Error(
                            "use of generic HtmlDomContainer tagName"
                          );
                        },
                      },
                      {
                        key: "toNode",
                        value: function () {
                          var t = document.createElement(this.tagName());
                          for (var e in ((t.className = K(this.classes)),
                          this.style))
                            Object.prototype.hasOwnProperty.call(
                              this.style,
                              e
                            ) && (t.style[e] = this.style[e]);
                          for (var n in this.attributes)
                            this.attributes.hasOwnProperty(n) &&
                              t.setAttribute(n, this.attributes[n]);
                          for (var r = 0; r < this.children.length; r++)
                            t.appendChild(this.children[r].toNode());
                          return t;
                        },
                      },
                      {
                        key: "toMarkup",
                        value: function () {
                          var t = "<" + this.tagName();
                          this.classes.length &&
                            (t += ' class="' + k.escape(K(this.classes)) + '"');
                          var e = "";
                          for (var n in this.style)
                            this.style.hasOwnProperty(n) &&
                              (e += k.hyphenate(n) + ":" + this.style[n] + ";");
                          for (var r in (e &&
                            (t += ' style="' + k.escape(e) + '"'),
                          this.attributes))
                            this.attributes.hasOwnProperty(r) &&
                              ((t += " " + r + '="'),
                              (t += k.escape(this.attributes[r])),
                              (t += '"'));
                          t += ">";
                          for (var i = 0; i < this.children.length; i++)
                            t += this.children[i].toMarkup();
                          return t + "</" + this.tagName() + ">";
                        },
                      },
                    ]),
                    t
                  );
                })(),
                Q = (function (t) {
                  function e(t, n, r, a) {
                    return (
                      i()(this, e),
                      F()(this, (e.__proto__ || j()(e)).call(this, t, n, r, a))
                    );
                  }
                  return (
                    X()(e, t),
                    o()(e, [
                      {
                        key: "tagName",
                        value: function () {
                          return "span";
                        },
                      },
                    ]),
                    e
                  );
                })(Z),
                tt = (function (t) {
                  function e(t, n, r, a) {
                    i()(this, e);
                    var o = F()(
                      this,
                      (e.__proto__ || j()(e)).call(this, n, r, a)
                    );
                    return o.setAttribute("href", t), o;
                  }
                  return (
                    X()(e, t),
                    o()(e, [
                      {
                        key: "tagName",
                        value: function () {
                          return "a";
                        },
                      },
                    ]),
                    e
                  );
                })(Z),
                et = (function () {
                  function t(e) {
                    i()(this, t),
                      (this.children = e || []),
                      (this.classes = []),
                      (this.height = 0),
                      (this.depth = 0),
                      (this.maxFontSize = 0),
                      (this.style = {});
                  }
                  return (
                    o()(t, [
                      {
                        key: "hasClass",
                        value: function (t) {
                          return k.contains(this.classes, t);
                        },
                      },
                      {
                        key: "tryCombine",
                        value: function (t) {
                          return !1;
                        },
                      },
                      {
                        key: "toNode",
                        value: function () {
                          for (
                            var t = document.createDocumentFragment(), e = 0;
                            e < this.children.length;
                            e++
                          )
                            t.appendChild(this.children[e].toNode());
                          return t;
                        },
                      },
                      {
                        key: "toMarkup",
                        value: function () {
                          for (var t = "", e = 0; e < this.children.length; e++)
                            t += this.children[e].toMarkup();
                          return t;
                        },
                      },
                    ]),
                    t
                  );
                })(),
                nt = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" },
                rt = (function () {
                  function t(e, n, r, a, o, s, l, u) {
                    i()(this, t),
                      (this.value = e),
                      (this.height = n || 0),
                      (this.depth = r || 0),
                      (this.italic = a || 0),
                      (this.skew = o || 0),
                      (this.width = s || 0),
                      (this.classes = l || []),
                      (this.style = G()({}, u)),
                      (this.maxFontSize = 0);
                    var h = (function (t) {
                      var e = !0,
                        n = !1,
                        r = void 0;
                      try {
                        for (
                          var i, a = D()(U);
                          !(e = (i = a.next()).done);
                          e = !0
                        ) {
                          var o = i.value,
                            s = !0,
                            l = !1,
                            u = void 0;
                          try {
                            for (
                              var h, c = D()(o.blocks);
                              !(s = (h = c.next()).done);
                              s = !0
                            ) {
                              var f = h.value;
                              if (t >= f[0] && t <= f[1]) return o.name;
                            }
                          } catch (t) {
                            (l = !0), (u = t);
                          } finally {
                            try {
                              !s && c.return && c.return();
                            } finally {
                              if (l) throw u;
                            }
                          }
                        }
                      } catch (t) {
                        (n = !0), (r = t);
                      } finally {
                        try {
                          !e && a.return && a.return();
                        } finally {
                          if (n) throw r;
                        }
                      }
                      return null;
                    })(this.value.charCodeAt(0));
                    h && this.classes.push(h + "_fallback"),
                      /[\xee\xef\xed\xec]/.test(this.value) &&
                        (this.value = nt[this.value]);
                  }
                  return (
                    o()(t, [
                      {
                        key: "hasClass",
                        value: function (t) {
                          return k.contains(this.classes, t);
                        },
                      },
                      {
                        key: "tryCombine",
                        value: function (e) {
                          if (
                            !e ||
                            !(e instanceof t) ||
                            this.italic > 0 ||
                            K(this.classes) !== K(e.classes) ||
                            this.skew !== e.skew ||
                            this.maxFontSize !== e.maxFontSize
                          )
                            return !1;
                          for (var n in this.style)
                            if (
                              this.style.hasOwnProperty(n) &&
                              this.style[n] !== e.style[n]
                            )
                              return !1;
                          for (var r in e.style)
                            if (
                              e.style.hasOwnProperty(r) &&
                              this.style[r] !== e.style[r]
                            )
                              return !1;
                          return (
                            (this.value += e.value),
                            (this.height = Math.max(this.height, e.height)),
                            (this.depth = Math.max(this.depth, e.depth)),
                            (this.italic = e.italic),
                            !0
                          );
                        },
                      },
                      {
                        key: "toNode",
                        value: function () {
                          var t = document.createTextNode(this.value),
                            e = null;
                          for (var n in (this.italic > 0 &&
                            ((e =
                              document.createElement(
                                "span"
                              )).style.marginRight = this.italic + "em"),
                          this.classes.length > 0 &&
                            ((e =
                              e || document.createElement("span")).className =
                              K(this.classes)),
                          this.style))
                            this.style.hasOwnProperty(n) &&
                              ((e = e || document.createElement("span")).style[
                                n
                              ] = this.style[n]);
                          return e ? (e.appendChild(t), e) : t;
                        },
                      },
                      {
                        key: "toMarkup",
                        value: function () {
                          var t = !1,
                            e = "<span";
                          this.classes.length &&
                            ((t = !0),
                            (e += ' class="'),
                            (e += k.escape(K(this.classes))),
                            (e += '"'));
                          var n = "";
                          for (var r in (this.italic > 0 &&
                            (n += "margin-right:" + this.italic + "em;"),
                          this.style))
                            this.style.hasOwnProperty(r) &&
                              (n += k.hyphenate(r) + ":" + this.style[r] + ";");
                          n &&
                            ((t = !0), (e += ' style="' + k.escape(n) + '"'));
                          var i = k.escape(this.value);
                          return t
                            ? ((e += ">"), (e += i), (e += "</span>"))
                            : i;
                        },
                      },
                    ]),
                    t
                  );
                })(),
                it = (function () {
                  function t(e, n) {
                    i()(this, t),
                      (this.children = e || []),
                      (this.attributes = n || {});
                  }
                  return (
                    o()(t, [
                      {
                        key: "toNode",
                        value: function () {
                          var t = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "svg"
                          );
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e
                            ) && t.setAttribute(e, this.attributes[e]);
                          for (var n = 0; n < this.children.length; n++)
                            t.appendChild(this.children[n].toNode());
                          return t;
                        },
                      },
                      {
                        key: "toMarkup",
                        value: function () {
                          var t = "<svg";
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e
                            ) &&
                              (t += " " + e + "='" + this.attributes[e] + "'");
                          t += ">";
                          for (var n = 0; n < this.children.length; n++)
                            t += this.children[n].toMarkup();
                          return t + "</svg>";
                        },
                      },
                    ]),
                    t
                  );
                })(),
                at = (function () {
                  function t(e, n) {
                    i()(this, t), (this.pathName = e), (this.alternate = n);
                  }
                  return (
                    o()(t, [
                      {
                        key: "toNode",
                        value: function () {
                          var t = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "path"
                          );
                          return (
                            this.alternate
                              ? t.setAttribute("d", this.alternate)
                              : t.setAttribute("d", J.path[this.pathName]),
                            t
                          );
                        },
                      },
                      {
                        key: "toMarkup",
                        value: function () {
                          return this.alternate
                            ? "<path d='" + this.alternate + "'/>"
                            : "<path d='" + J.path[this.pathName] + "'/>";
                        },
                      },
                    ]),
                    t
                  );
                })(),
                ot = (function () {
                  function t(e) {
                    i()(this, t), (this.attributes = e || {});
                  }
                  return (
                    o()(t, [
                      {
                        key: "toNode",
                        value: function () {
                          var t = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "line"
                          );
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e
                            ) && t.setAttribute(e, this.attributes[e]);
                          return t;
                        },
                      },
                      {
                        key: "toMarkup",
                        value: function () {
                          var t = "<line";
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e
                            ) &&
                              (t += " " + e + "='" + this.attributes[e] + "'");
                          return t + "/>";
                        },
                      },
                    ]),
                    t
                  );
                })(),
                st = {
                  span: Q,
                  anchor: tt,
                  documentFragment: et,
                  symbolNode: rt,
                  svgNode: it,
                  pathNode: at,
                  lineNode: ot,
                },
                lt = {
                  "AMS-Regular": {
                    65: [0, 0.68889, 0, 0, 0.72222],
                    66: [0, 0.68889, 0, 0, 0.66667],
                    67: [0, 0.68889, 0, 0, 0.72222],
                    68: [0, 0.68889, 0, 0, 0.72222],
                    69: [0, 0.68889, 0, 0, 0.66667],
                    70: [0, 0.68889, 0, 0, 0.61111],
                    71: [0, 0.68889, 0, 0, 0.77778],
                    72: [0, 0.68889, 0, 0, 0.77778],
                    73: [0, 0.68889, 0, 0, 0.38889],
                    74: [0.16667, 0.68889, 0, 0, 0.5],
                    75: [0, 0.68889, 0, 0, 0.77778],
                    76: [0, 0.68889, 0, 0, 0.66667],
                    77: [0, 0.68889, 0, 0, 0.94445],
                    78: [0, 0.68889, 0, 0, 0.72222],
                    79: [0.16667, 0.68889, 0, 0, 0.77778],
                    80: [0, 0.68889, 0, 0, 0.61111],
                    81: [0.16667, 0.68889, 0, 0, 0.77778],
                    82: [0, 0.68889, 0, 0, 0.72222],
                    83: [0, 0.68889, 0, 0, 0.55556],
                    84: [0, 0.68889, 0, 0, 0.66667],
                    85: [0, 0.68889, 0, 0, 0.72222],
                    86: [0, 0.68889, 0, 0, 0.72222],
                    87: [0, 0.68889, 0, 0, 1],
                    88: [0, 0.68889, 0, 0, 0.72222],
                    89: [0, 0.68889, 0, 0, 0.72222],
                    90: [0, 0.68889, 0, 0, 0.66667],
                    107: [0, 0.68889, 0, 0, 0.55556],
                    165: [0, 0.675, 0.025, 0, 0.75],
                    174: [0.15559, 0.69224, 0, 0, 0.94666],
                    240: [0, 0.68889, 0, 0, 0.55556],
                    295: [0, 0.68889, 0, 0, 0.54028],
                    710: [0, 0.825, 0, 0, 2.33334],
                    732: [0, 0.9, 0, 0, 2.33334],
                    770: [0, 0.825, 0, 0, 2.33334],
                    771: [0, 0.9, 0, 0, 2.33334],
                    989: [0.08167, 0.58167, 0, 0, 0.77778],
                    1008: [0, 0.43056, 0.04028, 0, 0.66667],
                    8245: [0, 0.54986, 0, 0, 0.275],
                    8463: [0, 0.68889, 0, 0, 0.54028],
                    8487: [0, 0.68889, 0, 0, 0.72222],
                    8498: [0, 0.68889, 0, 0, 0.55556],
                    8502: [0, 0.68889, 0, 0, 0.66667],
                    8503: [0, 0.68889, 0, 0, 0.44445],
                    8504: [0, 0.68889, 0, 0, 0.66667],
                    8513: [0, 0.68889, 0, 0, 0.63889],
                    8592: [-0.03598, 0.46402, 0, 0, 0.5],
                    8594: [-0.03598, 0.46402, 0, 0, 0.5],
                    8602: [-0.13313, 0.36687, 0, 0, 1],
                    8603: [-0.13313, 0.36687, 0, 0, 1],
                    8606: [0.01354, 0.52239, 0, 0, 1],
                    8608: [0.01354, 0.52239, 0, 0, 1],
                    8610: [0.01354, 0.52239, 0, 0, 1.11111],
                    8611: [0.01354, 0.52239, 0, 0, 1.11111],
                    8619: [0, 0.54986, 0, 0, 1],
                    8620: [0, 0.54986, 0, 0, 1],
                    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
                    8622: [-0.13313, 0.36687, 0, 0, 1],
                    8624: [0, 0.69224, 0, 0, 0.5],
                    8625: [0, 0.69224, 0, 0, 0.5],
                    8630: [0, 0.43056, 0, 0, 1],
                    8631: [0, 0.43056, 0, 0, 1],
                    8634: [0.08198, 0.58198, 0, 0, 0.77778],
                    8635: [0.08198, 0.58198, 0, 0, 0.77778],
                    8638: [0.19444, 0.69224, 0, 0, 0.41667],
                    8639: [0.19444, 0.69224, 0, 0, 0.41667],
                    8642: [0.19444, 0.69224, 0, 0, 0.41667],
                    8643: [0.19444, 0.69224, 0, 0, 0.41667],
                    8644: [0.1808, 0.675, 0, 0, 1],
                    8646: [0.1808, 0.675, 0, 0, 1],
                    8647: [0.1808, 0.675, 0, 0, 1],
                    8648: [0.19444, 0.69224, 0, 0, 0.83334],
                    8649: [0.1808, 0.675, 0, 0, 1],
                    8650: [0.19444, 0.69224, 0, 0, 0.83334],
                    8651: [0.01354, 0.52239, 0, 0, 1],
                    8652: [0.01354, 0.52239, 0, 0, 1],
                    8653: [-0.13313, 0.36687, 0, 0, 1],
                    8654: [-0.13313, 0.36687, 0, 0, 1],
                    8655: [-0.13313, 0.36687, 0, 0, 1],
                    8666: [0.13667, 0.63667, 0, 0, 1],
                    8667: [0.13667, 0.63667, 0, 0, 1],
                    8669: [-0.13313, 0.37788, 0, 0, 1],
                    8672: [-0.064, 0.437, 0, 0, 1.334],
                    8674: [-0.064, 0.437, 0, 0, 1.334],
                    8705: [0, 0.825, 0, 0, 0.5],
                    8708: [0, 0.68889, 0, 0, 0.55556],
                    8709: [0.08167, 0.58167, 0, 0, 0.77778],
                    8717: [0, 0.43056, 0, 0, 0.42917],
                    8722: [-0.03598, 0.46402, 0, 0, 0.5],
                    8724: [0.08198, 0.69224, 0, 0, 0.77778],
                    8726: [0.08167, 0.58167, 0, 0, 0.77778],
                    8733: [0, 0.69224, 0, 0, 0.77778],
                    8736: [0, 0.69224, 0, 0, 0.72222],
                    8737: [0, 0.69224, 0, 0, 0.72222],
                    8738: [0.03517, 0.52239, 0, 0, 0.72222],
                    8739: [0.08167, 0.58167, 0, 0, 0.22222],
                    8740: [0.25142, 0.74111, 0, 0, 0.27778],
                    8741: [0.08167, 0.58167, 0, 0, 0.38889],
                    8742: [0.25142, 0.74111, 0, 0, 0.5],
                    8756: [0, 0.69224, 0, 0, 0.66667],
                    8757: [0, 0.69224, 0, 0, 0.66667],
                    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
                    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
                    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
                    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
                    8774: [0.30274, 0.79383, 0, 0, 0.77778],
                    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
                    8778: [0.08167, 0.58167, 0, 0, 0.77778],
                    8782: [0.06062, 0.54986, 0, 0, 0.77778],
                    8783: [0.06062, 0.54986, 0, 0, 0.77778],
                    8785: [0.08198, 0.58198, 0, 0, 0.77778],
                    8786: [0.08198, 0.58198, 0, 0, 0.77778],
                    8787: [0.08198, 0.58198, 0, 0, 0.77778],
                    8790: [0, 0.69224, 0, 0, 0.77778],
                    8791: [0.22958, 0.72958, 0, 0, 0.77778],
                    8796: [0.08198, 0.91667, 0, 0, 0.77778],
                    8806: [0.25583, 0.75583, 0, 0, 0.77778],
                    8807: [0.25583, 0.75583, 0, 0, 0.77778],
                    8808: [0.25142, 0.75726, 0, 0, 0.77778],
                    8809: [0.25142, 0.75726, 0, 0, 0.77778],
                    8812: [0.25583, 0.75583, 0, 0, 0.5],
                    8814: [0.20576, 0.70576, 0, 0, 0.77778],
                    8815: [0.20576, 0.70576, 0, 0, 0.77778],
                    8816: [0.30274, 0.79383, 0, 0, 0.77778],
                    8817: [0.30274, 0.79383, 0, 0, 0.77778],
                    8818: [0.22958, 0.72958, 0, 0, 0.77778],
                    8819: [0.22958, 0.72958, 0, 0, 0.77778],
                    8822: [0.1808, 0.675, 0, 0, 0.77778],
                    8823: [0.1808, 0.675, 0, 0, 0.77778],
                    8828: [0.13667, 0.63667, 0, 0, 0.77778],
                    8829: [0.13667, 0.63667, 0, 0, 0.77778],
                    8830: [0.22958, 0.72958, 0, 0, 0.77778],
                    8831: [0.22958, 0.72958, 0, 0, 0.77778],
                    8832: [0.20576, 0.70576, 0, 0, 0.77778],
                    8833: [0.20576, 0.70576, 0, 0, 0.77778],
                    8840: [0.30274, 0.79383, 0, 0, 0.77778],
                    8841: [0.30274, 0.79383, 0, 0, 0.77778],
                    8842: [0.13597, 0.63597, 0, 0, 0.77778],
                    8843: [0.13597, 0.63597, 0, 0, 0.77778],
                    8847: [0.03517, 0.54986, 0, 0, 0.77778],
                    8848: [0.03517, 0.54986, 0, 0, 0.77778],
                    8858: [0.08198, 0.58198, 0, 0, 0.77778],
                    8859: [0.08198, 0.58198, 0, 0, 0.77778],
                    8861: [0.08198, 0.58198, 0, 0, 0.77778],
                    8862: [0, 0.675, 0, 0, 0.77778],
                    8863: [0, 0.675, 0, 0, 0.77778],
                    8864: [0, 0.675, 0, 0, 0.77778],
                    8865: [0, 0.675, 0, 0, 0.77778],
                    8872: [0, 0.69224, 0, 0, 0.61111],
                    8873: [0, 0.69224, 0, 0, 0.72222],
                    8874: [0, 0.69224, 0, 0, 0.88889],
                    8876: [0, 0.68889, 0, 0, 0.61111],
                    8877: [0, 0.68889, 0, 0, 0.61111],
                    8878: [0, 0.68889, 0, 0, 0.72222],
                    8879: [0, 0.68889, 0, 0, 0.72222],
                    8882: [0.03517, 0.54986, 0, 0, 0.77778],
                    8883: [0.03517, 0.54986, 0, 0, 0.77778],
                    8884: [0.13667, 0.63667, 0, 0, 0.77778],
                    8885: [0.13667, 0.63667, 0, 0, 0.77778],
                    8888: [0, 0.54986, 0, 0, 1.11111],
                    8890: [0.19444, 0.43056, 0, 0, 0.55556],
                    8891: [0.19444, 0.69224, 0, 0, 0.61111],
                    8892: [0.19444, 0.69224, 0, 0, 0.61111],
                    8901: [0, 0.54986, 0, 0, 0.27778],
                    8903: [0.08167, 0.58167, 0, 0, 0.77778],
                    8905: [0.08167, 0.58167, 0, 0, 0.77778],
                    8906: [0.08167, 0.58167, 0, 0, 0.77778],
                    8907: [0, 0.69224, 0, 0, 0.77778],
                    8908: [0, 0.69224, 0, 0, 0.77778],
                    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
                    8910: [0, 0.54986, 0, 0, 0.76042],
                    8911: [0, 0.54986, 0, 0, 0.76042],
                    8912: [0.03517, 0.54986, 0, 0, 0.77778],
                    8913: [0.03517, 0.54986, 0, 0, 0.77778],
                    8914: [0, 0.54986, 0, 0, 0.66667],
                    8915: [0, 0.54986, 0, 0, 0.66667],
                    8916: [0, 0.69224, 0, 0, 0.66667],
                    8918: [0.0391, 0.5391, 0, 0, 0.77778],
                    8919: [0.0391, 0.5391, 0, 0, 0.77778],
                    8920: [0.03517, 0.54986, 0, 0, 1.33334],
                    8921: [0.03517, 0.54986, 0, 0, 1.33334],
                    8922: [0.38569, 0.88569, 0, 0, 0.77778],
                    8923: [0.38569, 0.88569, 0, 0, 0.77778],
                    8926: [0.13667, 0.63667, 0, 0, 0.77778],
                    8927: [0.13667, 0.63667, 0, 0, 0.77778],
                    8928: [0.30274, 0.79383, 0, 0, 0.77778],
                    8929: [0.30274, 0.79383, 0, 0, 0.77778],
                    8934: [0.23222, 0.74111, 0, 0, 0.77778],
                    8935: [0.23222, 0.74111, 0, 0, 0.77778],
                    8936: [0.23222, 0.74111, 0, 0, 0.77778],
                    8937: [0.23222, 0.74111, 0, 0, 0.77778],
                    8938: [0.20576, 0.70576, 0, 0, 0.77778],
                    8939: [0.20576, 0.70576, 0, 0, 0.77778],
                    8940: [0.30274, 0.79383, 0, 0, 0.77778],
                    8941: [0.30274, 0.79383, 0, 0, 0.77778],
                    8994: [0.19444, 0.69224, 0, 0, 0.77778],
                    8995: [0.19444, 0.69224, 0, 0, 0.77778],
                    9416: [0.15559, 0.69224, 0, 0, 0.90222],
                    9484: [0, 0.69224, 0, 0, 0.5],
                    9488: [0, 0.69224, 0, 0, 0.5],
                    9492: [0, 0.37788, 0, 0, 0.5],
                    9496: [0, 0.37788, 0, 0, 0.5],
                    9585: [0.19444, 0.68889, 0, 0, 0.88889],
                    9586: [0.19444, 0.74111, 0, 0, 0.88889],
                    9632: [0, 0.675, 0, 0, 0.77778],
                    9633: [0, 0.675, 0, 0, 0.77778],
                    9650: [0, 0.54986, 0, 0, 0.72222],
                    9651: [0, 0.54986, 0, 0, 0.72222],
                    9654: [0.03517, 0.54986, 0, 0, 0.77778],
                    9660: [0, 0.54986, 0, 0, 0.72222],
                    9661: [0, 0.54986, 0, 0, 0.72222],
                    9664: [0.03517, 0.54986, 0, 0, 0.77778],
                    9674: [0.11111, 0.69224, 0, 0, 0.66667],
                    9733: [0.19444, 0.69224, 0, 0, 0.94445],
                    10003: [0, 0.69224, 0, 0, 0.83334],
                    10016: [0, 0.69224, 0, 0, 0.83334],
                    10731: [0.11111, 0.69224, 0, 0, 0.66667],
                    10846: [0.19444, 0.75583, 0, 0, 0.61111],
                    10877: [0.13667, 0.63667, 0, 0, 0.77778],
                    10878: [0.13667, 0.63667, 0, 0, 0.77778],
                    10885: [0.25583, 0.75583, 0, 0, 0.77778],
                    10886: [0.25583, 0.75583, 0, 0, 0.77778],
                    10887: [0.13597, 0.63597, 0, 0, 0.77778],
                    10888: [0.13597, 0.63597, 0, 0, 0.77778],
                    10889: [0.26167, 0.75726, 0, 0, 0.77778],
                    10890: [0.26167, 0.75726, 0, 0, 0.77778],
                    10891: [0.48256, 0.98256, 0, 0, 0.77778],
                    10892: [0.48256, 0.98256, 0, 0, 0.77778],
                    10901: [0.13667, 0.63667, 0, 0, 0.77778],
                    10902: [0.13667, 0.63667, 0, 0, 0.77778],
                    10933: [0.25142, 0.75726, 0, 0, 0.77778],
                    10934: [0.25142, 0.75726, 0, 0, 0.77778],
                    10935: [0.26167, 0.75726, 0, 0, 0.77778],
                    10936: [0.26167, 0.75726, 0, 0, 0.77778],
                    10937: [0.26167, 0.75726, 0, 0, 0.77778],
                    10938: [0.26167, 0.75726, 0, 0, 0.77778],
                    10949: [0.25583, 0.75583, 0, 0, 0.77778],
                    10950: [0.25583, 0.75583, 0, 0, 0.77778],
                    10955: [0.28481, 0.79383, 0, 0, 0.77778],
                    10956: [0.28481, 0.79383, 0, 0, 0.77778],
                    57350: [0.08167, 0.58167, 0, 0, 0.22222],
                    57351: [0.08167, 0.58167, 0, 0, 0.38889],
                    57352: [0.08167, 0.58167, 0, 0, 0.77778],
                    57353: [0, 0.43056, 0.04028, 0, 0.66667],
                    57356: [0.25142, 0.75726, 0, 0, 0.77778],
                    57357: [0.25142, 0.75726, 0, 0, 0.77778],
                    57358: [0.41951, 0.91951, 0, 0, 0.77778],
                    57359: [0.30274, 0.79383, 0, 0, 0.77778],
                    57360: [0.30274, 0.79383, 0, 0, 0.77778],
                    57361: [0.41951, 0.91951, 0, 0, 0.77778],
                    57366: [0.25142, 0.75726, 0, 0, 0.77778],
                    57367: [0.25142, 0.75726, 0, 0, 0.77778],
                    57368: [0.25142, 0.75726, 0, 0, 0.77778],
                    57369: [0.25142, 0.75726, 0, 0, 0.77778],
                    57370: [0.13597, 0.63597, 0, 0, 0.77778],
                    57371: [0.13597, 0.63597, 0, 0, 0.77778],
                  },
                  "Caligraphic-Regular": {
                    48: [0, 0.43056, 0, 0, 0.5],
                    49: [0, 0.43056, 0, 0, 0.5],
                    50: [0, 0.43056, 0, 0, 0.5],
                    51: [0.19444, 0.43056, 0, 0, 0.5],
                    52: [0.19444, 0.43056, 0, 0, 0.5],
                    53: [0.19444, 0.43056, 0, 0, 0.5],
                    54: [0, 0.64444, 0, 0, 0.5],
                    55: [0.19444, 0.43056, 0, 0, 0.5],
                    56: [0, 0.64444, 0, 0, 0.5],
                    57: [0.19444, 0.43056, 0, 0, 0.5],
                    65: [0, 0.68333, 0, 0.19445, 0.79847],
                    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
                    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
                    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
                    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
                    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
                    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
                    72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
                    73: [0, 0.68333, 0.07382, 0, 0.54452],
                    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
                    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
                    76: [0, 0.68333, 0, 0.13889, 0.68972],
                    77: [0, 0.68333, 0, 0.13889, 1.2009],
                    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
                    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
                    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
                    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
                    82: [0, 0.68333, 0, 0.08334, 0.8475],
                    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
                    84: [0, 0.68333, 0.25417, 0, 0.54464],
                    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
                    86: [0, 0.68333, 0.08222, 0, 0.61278],
                    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
                    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
                    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
                    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
                  },
                  "Fraktur-Regular": {
                    33: [0, 0.69141, 0, 0, 0.29574],
                    34: [0, 0.69141, 0, 0, 0.21471],
                    38: [0, 0.69141, 0, 0, 0.73786],
                    39: [0, 0.69141, 0, 0, 0.21201],
                    40: [0.24982, 0.74947, 0, 0, 0.38865],
                    41: [0.24982, 0.74947, 0, 0, 0.38865],
                    42: [0, 0.62119, 0, 0, 0.27764],
                    43: [0.08319, 0.58283, 0, 0, 0.75623],
                    44: [0, 0.10803, 0, 0, 0.27764],
                    45: [0.08319, 0.58283, 0, 0, 0.75623],
                    46: [0, 0.10803, 0, 0, 0.27764],
                    47: [0.24982, 0.74947, 0, 0, 0.50181],
                    48: [0, 0.47534, 0, 0, 0.50181],
                    49: [0, 0.47534, 0, 0, 0.50181],
                    50: [0, 0.47534, 0, 0, 0.50181],
                    51: [0.18906, 0.47534, 0, 0, 0.50181],
                    52: [0.18906, 0.47534, 0, 0, 0.50181],
                    53: [0.18906, 0.47534, 0, 0, 0.50181],
                    54: [0, 0.69141, 0, 0, 0.50181],
                    55: [0.18906, 0.47534, 0, 0, 0.50181],
                    56: [0, 0.69141, 0, 0, 0.50181],
                    57: [0.18906, 0.47534, 0, 0, 0.50181],
                    58: [0, 0.47534, 0, 0, 0.21606],
                    59: [0.12604, 0.47534, 0, 0, 0.21606],
                    61: [-0.13099, 0.36866, 0, 0, 0.75623],
                    63: [0, 0.69141, 0, 0, 0.36245],
                    65: [0, 0.69141, 0, 0, 0.7176],
                    66: [0, 0.69141, 0, 0, 0.88397],
                    67: [0, 0.69141, 0, 0, 0.61254],
                    68: [0, 0.69141, 0, 0, 0.83158],
                    69: [0, 0.69141, 0, 0, 0.66278],
                    70: [0.12604, 0.69141, 0, 0, 0.61119],
                    71: [0, 0.69141, 0, 0, 0.78539],
                    72: [0.06302, 0.69141, 0, 0, 0.7203],
                    73: [0, 0.69141, 0, 0, 0.55448],
                    74: [0.12604, 0.69141, 0, 0, 0.55231],
                    75: [0, 0.69141, 0, 0, 0.66845],
                    76: [0, 0.69141, 0, 0, 0.66602],
                    77: [0, 0.69141, 0, 0, 1.04953],
                    78: [0, 0.69141, 0, 0, 0.83212],
                    79: [0, 0.69141, 0, 0, 0.82699],
                    80: [0.18906, 0.69141, 0, 0, 0.82753],
                    81: [0.03781, 0.69141, 0, 0, 0.82699],
                    82: [0, 0.69141, 0, 0, 0.82807],
                    83: [0, 0.69141, 0, 0, 0.82861],
                    84: [0, 0.69141, 0, 0, 0.66899],
                    85: [0, 0.69141, 0, 0, 0.64576],
                    86: [0, 0.69141, 0, 0, 0.83131],
                    87: [0, 0.69141, 0, 0, 1.04602],
                    88: [0, 0.69141, 0, 0, 0.71922],
                    89: [0.18906, 0.69141, 0, 0, 0.83293],
                    90: [0.12604, 0.69141, 0, 0, 0.60201],
                    91: [0.24982, 0.74947, 0, 0, 0.27764],
                    93: [0.24982, 0.74947, 0, 0, 0.27764],
                    94: [0, 0.69141, 0, 0, 0.49965],
                    97: [0, 0.47534, 0, 0, 0.50046],
                    98: [0, 0.69141, 0, 0, 0.51315],
                    99: [0, 0.47534, 0, 0, 0.38946],
                    100: [0, 0.62119, 0, 0, 0.49857],
                    101: [0, 0.47534, 0, 0, 0.40053],
                    102: [0.18906, 0.69141, 0, 0, 0.32626],
                    103: [0.18906, 0.47534, 0, 0, 0.5037],
                    104: [0.18906, 0.69141, 0, 0, 0.52126],
                    105: [0, 0.69141, 0, 0, 0.27899],
                    106: [0, 0.69141, 0, 0, 0.28088],
                    107: [0, 0.69141, 0, 0, 0.38946],
                    108: [0, 0.69141, 0, 0, 0.27953],
                    109: [0, 0.47534, 0, 0, 0.76676],
                    110: [0, 0.47534, 0, 0, 0.52666],
                    111: [0, 0.47534, 0, 0, 0.48885],
                    112: [0.18906, 0.52396, 0, 0, 0.50046],
                    113: [0.18906, 0.47534, 0, 0, 0.48912],
                    114: [0, 0.47534, 0, 0, 0.38919],
                    115: [0, 0.47534, 0, 0, 0.44266],
                    116: [0, 0.62119, 0, 0, 0.33301],
                    117: [0, 0.47534, 0, 0, 0.5172],
                    118: [0, 0.52396, 0, 0, 0.5118],
                    119: [0, 0.52396, 0, 0, 0.77351],
                    120: [0.18906, 0.47534, 0, 0, 0.38865],
                    121: [0.18906, 0.47534, 0, 0, 0.49884],
                    122: [0.18906, 0.47534, 0, 0, 0.39054],
                    8216: [0, 0.69141, 0, 0, 0.21471],
                    8217: [0, 0.69141, 0, 0, 0.21471],
                    58112: [0, 0.62119, 0, 0, 0.49749],
                    58113: [0, 0.62119, 0, 0, 0.4983],
                    58114: [0.18906, 0.69141, 0, 0, 0.33328],
                    58115: [0.18906, 0.69141, 0, 0, 0.32923],
                    58116: [0.18906, 0.47534, 0, 0, 0.50343],
                    58117: [0, 0.69141, 0, 0, 0.33301],
                    58118: [0, 0.62119, 0, 0, 0.33409],
                    58119: [0, 0.47534, 0, 0, 0.50073],
                  },
                  "Main-Bold": {
                    33: [0, 0.69444, 0, 0, 0.35],
                    34: [0, 0.69444, 0, 0, 0.60278],
                    35: [0.19444, 0.69444, 0, 0, 0.95833],
                    36: [0.05556, 0.75, 0, 0, 0.575],
                    37: [0.05556, 0.75, 0, 0, 0.95833],
                    38: [0, 0.69444, 0, 0, 0.89444],
                    39: [0, 0.69444, 0, 0, 0.31944],
                    40: [0.25, 0.75, 0, 0, 0.44722],
                    41: [0.25, 0.75, 0, 0, 0.44722],
                    42: [0, 0.75, 0, 0, 0.575],
                    43: [0.13333, 0.63333, 0, 0, 0.89444],
                    44: [0.19444, 0.15556, 0, 0, 0.31944],
                    45: [0, 0.44444, 0, 0, 0.38333],
                    46: [0, 0.15556, 0, 0, 0.31944],
                    47: [0.25, 0.75, 0, 0, 0.575],
                    48: [0, 0.64444, 0, 0, 0.575],
                    49: [0, 0.64444, 0, 0, 0.575],
                    50: [0, 0.64444, 0, 0, 0.575],
                    51: [0, 0.64444, 0, 0, 0.575],
                    52: [0, 0.64444, 0, 0, 0.575],
                    53: [0, 0.64444, 0, 0, 0.575],
                    54: [0, 0.64444, 0, 0, 0.575],
                    55: [0, 0.64444, 0, 0, 0.575],
                    56: [0, 0.64444, 0, 0, 0.575],
                    57: [0, 0.64444, 0, 0, 0.575],
                    58: [0, 0.44444, 0, 0, 0.31944],
                    59: [0.19444, 0.44444, 0, 0, 0.31944],
                    60: [0.08556, 0.58556, 0, 0, 0.89444],
                    61: [-0.10889, 0.39111, 0, 0, 0.89444],
                    62: [0.08556, 0.58556, 0, 0, 0.89444],
                    63: [0, 0.69444, 0, 0, 0.54305],
                    64: [0, 0.69444, 0, 0, 0.89444],
                    65: [0, 0.68611, 0, 0, 0.86944],
                    66: [0, 0.68611, 0, 0, 0.81805],
                    67: [0, 0.68611, 0, 0, 0.83055],
                    68: [0, 0.68611, 0, 0, 0.88194],
                    69: [0, 0.68611, 0, 0, 0.75555],
                    70: [0, 0.68611, 0, 0, 0.72361],
                    71: [0, 0.68611, 0, 0, 0.90416],
                    72: [0, 0.68611, 0, 0, 0.9],
                    73: [0, 0.68611, 0, 0, 0.43611],
                    74: [0, 0.68611, 0, 0, 0.59444],
                    75: [0, 0.68611, 0, 0, 0.90138],
                    76: [0, 0.68611, 0, 0, 0.69166],
                    77: [0, 0.68611, 0, 0, 1.09166],
                    78: [0, 0.68611, 0, 0, 0.9],
                    79: [0, 0.68611, 0, 0, 0.86388],
                    80: [0, 0.68611, 0, 0, 0.78611],
                    81: [0.19444, 0.68611, 0, 0, 0.86388],
                    82: [0, 0.68611, 0, 0, 0.8625],
                    83: [0, 0.68611, 0, 0, 0.63889],
                    84: [0, 0.68611, 0, 0, 0.8],
                    85: [0, 0.68611, 0, 0, 0.88472],
                    86: [0, 0.68611, 0.01597, 0, 0.86944],
                    87: [0, 0.68611, 0.01597, 0, 1.18888],
                    88: [0, 0.68611, 0, 0, 0.86944],
                    89: [0, 0.68611, 0.02875, 0, 0.86944],
                    90: [0, 0.68611, 0, 0, 0.70277],
                    91: [0.25, 0.75, 0, 0, 0.31944],
                    92: [0.25, 0.75, 0, 0, 0.575],
                    93: [0.25, 0.75, 0, 0, 0.31944],
                    94: [0, 0.69444, 0, 0, 0.575],
                    95: [0.31, 0.13444, 0.03194, 0, 0.575],
                    97: [0, 0.44444, 0, 0, 0.55902],
                    98: [0, 0.69444, 0, 0, 0.63889],
                    99: [0, 0.44444, 0, 0, 0.51111],
                    100: [0, 0.69444, 0, 0, 0.63889],
                    101: [0, 0.44444, 0, 0, 0.52708],
                    102: [0, 0.69444, 0.10903, 0, 0.35139],
                    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
                    104: [0, 0.69444, 0, 0, 0.63889],
                    105: [0, 0.69444, 0, 0, 0.31944],
                    106: [0.19444, 0.69444, 0, 0, 0.35139],
                    107: [0, 0.69444, 0, 0, 0.60694],
                    108: [0, 0.69444, 0, 0, 0.31944],
                    109: [0, 0.44444, 0, 0, 0.95833],
                    110: [0, 0.44444, 0, 0, 0.63889],
                    111: [0, 0.44444, 0, 0, 0.575],
                    112: [0.19444, 0.44444, 0, 0, 0.63889],
                    113: [0.19444, 0.44444, 0, 0, 0.60694],
                    114: [0, 0.44444, 0, 0, 0.47361],
                    115: [0, 0.44444, 0, 0, 0.45361],
                    116: [0, 0.63492, 0, 0, 0.44722],
                    117: [0, 0.44444, 0, 0, 0.63889],
                    118: [0, 0.44444, 0.01597, 0, 0.60694],
                    119: [0, 0.44444, 0.01597, 0, 0.83055],
                    120: [0, 0.44444, 0, 0, 0.60694],
                    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
                    122: [0, 0.44444, 0, 0, 0.51111],
                    123: [0.25, 0.75, 0, 0, 0.575],
                    124: [0.25, 0.75, 0, 0, 0.31944],
                    125: [0.25, 0.75, 0, 0, 0.575],
                    126: [0.35, 0.34444, 0, 0, 0.575],
                    168: [0, 0.69444, 0, 0, 0.575],
                    172: [0, 0.44444, 0, 0, 0.76666],
                    176: [0, 0.69444, 0, 0, 0.86944],
                    177: [0.13333, 0.63333, 0, 0, 0.89444],
                    184: [0.17014, 0, 0, 0, 0.51111],
                    198: [0, 0.68611, 0, 0, 1.04166],
                    215: [0.13333, 0.63333, 0, 0, 0.89444],
                    216: [0.04861, 0.73472, 0, 0, 0.89444],
                    223: [0, 0.69444, 0, 0, 0.59722],
                    230: [0, 0.44444, 0, 0, 0.83055],
                    247: [0.13333, 0.63333, 0, 0, 0.89444],
                    248: [0.09722, 0.54167, 0, 0, 0.575],
                    305: [0, 0.44444, 0, 0, 0.31944],
                    338: [0, 0.68611, 0, 0, 1.16944],
                    339: [0, 0.44444, 0, 0, 0.89444],
                    567: [0.19444, 0.44444, 0, 0, 0.35139],
                    710: [0, 0.69444, 0, 0, 0.575],
                    711: [0, 0.63194, 0, 0, 0.575],
                    713: [0, 0.59611, 0, 0, 0.575],
                    714: [0, 0.69444, 0, 0, 0.575],
                    715: [0, 0.69444, 0, 0, 0.575],
                    728: [0, 0.69444, 0, 0, 0.575],
                    729: [0, 0.69444, 0, 0, 0.31944],
                    730: [0, 0.69444, 0, 0, 0.86944],
                    732: [0, 0.69444, 0, 0, 0.575],
                    733: [0, 0.69444, 0, 0, 0.575],
                    824: [0.19444, 0.69444, 0, 0, 0],
                    915: [0, 0.68611, 0, 0, 0.69166],
                    916: [0, 0.68611, 0, 0, 0.95833],
                    920: [0, 0.68611, 0, 0, 0.89444],
                    923: [0, 0.68611, 0, 0, 0.80555],
                    926: [0, 0.68611, 0, 0, 0.76666],
                    928: [0, 0.68611, 0, 0, 0.9],
                    931: [0, 0.68611, 0, 0, 0.83055],
                    933: [0, 0.68611, 0, 0, 0.89444],
                    934: [0, 0.68611, 0, 0, 0.83055],
                    936: [0, 0.68611, 0, 0, 0.89444],
                    937: [0, 0.68611, 0, 0, 0.83055],
                    8211: [0, 0.44444, 0.03194, 0, 0.575],
                    8212: [0, 0.44444, 0.03194, 0, 1.14999],
                    8216: [0, 0.69444, 0, 0, 0.31944],
                    8217: [0, 0.69444, 0, 0, 0.31944],
                    8220: [0, 0.69444, 0, 0, 0.60278],
                    8221: [0, 0.69444, 0, 0, 0.60278],
                    8224: [0.19444, 0.69444, 0, 0, 0.51111],
                    8225: [0.19444, 0.69444, 0, 0, 0.51111],
                    8242: [0, 0.55556, 0, 0, 0.34444],
                    8407: [0, 0.72444, 0.15486, 0, 0.575],
                    8463: [0, 0.69444, 0, 0, 0.66759],
                    8465: [0, 0.69444, 0, 0, 0.83055],
                    8467: [0, 0.69444, 0, 0, 0.47361],
                    8472: [0.19444, 0.44444, 0, 0, 0.74027],
                    8476: [0, 0.69444, 0, 0, 0.83055],
                    8501: [0, 0.69444, 0, 0, 0.70277],
                    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8593: [0.19444, 0.69444, 0, 0, 0.575],
                    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8595: [0.19444, 0.69444, 0, 0, 0.575],
                    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8597: [0.25, 0.75, 0, 0, 0.575],
                    8598: [0.19444, 0.69444, 0, 0, 1.14999],
                    8599: [0.19444, 0.69444, 0, 0, 1.14999],
                    8600: [0.19444, 0.69444, 0, 0, 1.14999],
                    8601: [0.19444, 0.69444, 0, 0, 1.14999],
                    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8657: [0.19444, 0.69444, 0, 0, 0.70277],
                    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8659: [0.19444, 0.69444, 0, 0, 0.70277],
                    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
                    8661: [0.25, 0.75, 0, 0, 0.70277],
                    8704: [0, 0.69444, 0, 0, 0.63889],
                    8706: [0, 0.69444, 0.06389, 0, 0.62847],
                    8707: [0, 0.69444, 0, 0, 0.63889],
                    8709: [0.05556, 0.75, 0, 0, 0.575],
                    8711: [0, 0.68611, 0, 0, 0.95833],
                    8712: [0.08556, 0.58556, 0, 0, 0.76666],
                    8715: [0.08556, 0.58556, 0, 0, 0.76666],
                    8722: [0.13333, 0.63333, 0, 0, 0.89444],
                    8723: [0.13333, 0.63333, 0, 0, 0.89444],
                    8725: [0.25, 0.75, 0, 0, 0.575],
                    8726: [0.25, 0.75, 0, 0, 0.575],
                    8727: [-0.02778, 0.47222, 0, 0, 0.575],
                    8728: [-0.02639, 0.47361, 0, 0, 0.575],
                    8729: [-0.02639, 0.47361, 0, 0, 0.575],
                    8730: [0.18, 0.82, 0, 0, 0.95833],
                    8733: [0, 0.44444, 0, 0, 0.89444],
                    8734: [0, 0.44444, 0, 0, 1.14999],
                    8736: [0, 0.69224, 0, 0, 0.72222],
                    8739: [0.25, 0.75, 0, 0, 0.31944],
                    8741: [0.25, 0.75, 0, 0, 0.575],
                    8743: [0, 0.55556, 0, 0, 0.76666],
                    8744: [0, 0.55556, 0, 0, 0.76666],
                    8745: [0, 0.55556, 0, 0, 0.76666],
                    8746: [0, 0.55556, 0, 0, 0.76666],
                    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
                    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
                    8768: [0.19444, 0.69444, 0, 0, 0.31944],
                    8771: [0.00222, 0.50222, 0, 0, 0.89444],
                    8776: [0.02444, 0.52444, 0, 0, 0.89444],
                    8781: [0.00222, 0.50222, 0, 0, 0.89444],
                    8801: [0.00222, 0.50222, 0, 0, 0.89444],
                    8804: [0.19667, 0.69667, 0, 0, 0.89444],
                    8805: [0.19667, 0.69667, 0, 0, 0.89444],
                    8810: [0.08556, 0.58556, 0, 0, 1.14999],
                    8811: [0.08556, 0.58556, 0, 0, 1.14999],
                    8826: [0.08556, 0.58556, 0, 0, 0.89444],
                    8827: [0.08556, 0.58556, 0, 0, 0.89444],
                    8834: [0.08556, 0.58556, 0, 0, 0.89444],
                    8835: [0.08556, 0.58556, 0, 0, 0.89444],
                    8838: [0.19667, 0.69667, 0, 0, 0.89444],
                    8839: [0.19667, 0.69667, 0, 0, 0.89444],
                    8846: [0, 0.55556, 0, 0, 0.76666],
                    8849: [0.19667, 0.69667, 0, 0, 0.89444],
                    8850: [0.19667, 0.69667, 0, 0, 0.89444],
                    8851: [0, 0.55556, 0, 0, 0.76666],
                    8852: [0, 0.55556, 0, 0, 0.76666],
                    8853: [0.13333, 0.63333, 0, 0, 0.89444],
                    8854: [0.13333, 0.63333, 0, 0, 0.89444],
                    8855: [0.13333, 0.63333, 0, 0, 0.89444],
                    8856: [0.13333, 0.63333, 0, 0, 0.89444],
                    8857: [0.13333, 0.63333, 0, 0, 0.89444],
                    8866: [0, 0.69444, 0, 0, 0.70277],
                    8867: [0, 0.69444, 0, 0, 0.70277],
                    8868: [0, 0.69444, 0, 0, 0.89444],
                    8869: [0, 0.69444, 0, 0, 0.89444],
                    8900: [-0.02639, 0.47361, 0, 0, 0.575],
                    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
                    8902: [-0.02778, 0.47222, 0, 0, 0.575],
                    8968: [0.25, 0.75, 0, 0, 0.51111],
                    8969: [0.25, 0.75, 0, 0, 0.51111],
                    8970: [0.25, 0.75, 0, 0, 0.51111],
                    8971: [0.25, 0.75, 0, 0, 0.51111],
                    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
                    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
                    9651: [0.19444, 0.69444, 0, 0, 1.02222],
                    9657: [-0.02778, 0.47222, 0, 0, 0.575],
                    9661: [0.19444, 0.69444, 0, 0, 1.02222],
                    9667: [-0.02778, 0.47222, 0, 0, 0.575],
                    9711: [0.19444, 0.69444, 0, 0, 1.14999],
                    9824: [0.12963, 0.69444, 0, 0, 0.89444],
                    9825: [0.12963, 0.69444, 0, 0, 0.89444],
                    9826: [0.12963, 0.69444, 0, 0, 0.89444],
                    9827: [0.12963, 0.69444, 0, 0, 0.89444],
                    9837: [0, 0.75, 0, 0, 0.44722],
                    9838: [0.19444, 0.69444, 0, 0, 0.44722],
                    9839: [0.19444, 0.69444, 0, 0, 0.44722],
                    10216: [0.25, 0.75, 0, 0, 0.44722],
                    10217: [0.25, 0.75, 0, 0, 0.44722],
                    10815: [0, 0.68611, 0, 0, 0.9],
                    10927: [0.19667, 0.69667, 0, 0, 0.89444],
                    10928: [0.19667, 0.69667, 0, 0, 0.89444],
                  },
                  "Main-BoldItalic": {
                    33: [0, 0.69444, 0.11417, 0, 0.38611],
                    34: [0, 0.69444, 0.07939, 0, 0.62055],
                    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
                    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
                    38: [0, 0.69444, 0.08528, 0, 0.88555],
                    39: [0, 0.69444, 0.12945, 0, 0.35555],
                    40: [0.25, 0.75, 0.15806, 0, 0.47333],
                    41: [0.25, 0.75, 0.03306, 0, 0.47333],
                    42: [0, 0.75, 0.14333, 0, 0.59111],
                    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
                    44: [0.19444, 0.14722, 0, 0, 0.35555],
                    45: [0, 0.44444, 0.02611, 0, 0.41444],
                    46: [0, 0.14722, 0, 0, 0.35555],
                    47: [0.25, 0.75, 0.15806, 0, 0.59111],
                    48: [0, 0.64444, 0.13167, 0, 0.59111],
                    49: [0, 0.64444, 0.13167, 0, 0.59111],
                    50: [0, 0.64444, 0.13167, 0, 0.59111],
                    51: [0, 0.64444, 0.13167, 0, 0.59111],
                    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
                    53: [0, 0.64444, 0.13167, 0, 0.59111],
                    54: [0, 0.64444, 0.13167, 0, 0.59111],
                    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
                    56: [0, 0.64444, 0.13167, 0, 0.59111],
                    57: [0, 0.64444, 0.13167, 0, 0.59111],
                    58: [0, 0.44444, 0.06695, 0, 0.35555],
                    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
                    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
                    63: [0, 0.69444, 0.11472, 0, 0.59111],
                    64: [0, 0.69444, 0.09208, 0, 0.88555],
                    65: [0, 0.68611, 0, 0, 0.86555],
                    66: [0, 0.68611, 0.0992, 0, 0.81666],
                    67: [0, 0.68611, 0.14208, 0, 0.82666],
                    68: [0, 0.68611, 0.09062, 0, 0.87555],
                    69: [0, 0.68611, 0.11431, 0, 0.75666],
                    70: [0, 0.68611, 0.12903, 0, 0.72722],
                    71: [0, 0.68611, 0.07347, 0, 0.89527],
                    72: [0, 0.68611, 0.17208, 0, 0.8961],
                    73: [0, 0.68611, 0.15681, 0, 0.47166],
                    74: [0, 0.68611, 0.145, 0, 0.61055],
                    75: [0, 0.68611, 0.14208, 0, 0.89499],
                    76: [0, 0.68611, 0, 0, 0.69777],
                    77: [0, 0.68611, 0.17208, 0, 1.07277],
                    78: [0, 0.68611, 0.17208, 0, 0.8961],
                    79: [0, 0.68611, 0.09062, 0, 0.85499],
                    80: [0, 0.68611, 0.0992, 0, 0.78721],
                    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
                    82: [0, 0.68611, 0.02559, 0, 0.85944],
                    83: [0, 0.68611, 0.11264, 0, 0.64999],
                    84: [0, 0.68611, 0.12903, 0, 0.7961],
                    85: [0, 0.68611, 0.17208, 0, 0.88083],
                    86: [0, 0.68611, 0.18625, 0, 0.86555],
                    87: [0, 0.68611, 0.18625, 0, 1.15999],
                    88: [0, 0.68611, 0.15681, 0, 0.86555],
                    89: [0, 0.68611, 0.19803, 0, 0.86555],
                    90: [0, 0.68611, 0.14208, 0, 0.70888],
                    91: [0.25, 0.75, 0.1875, 0, 0.35611],
                    93: [0.25, 0.75, 0.09972, 0, 0.35611],
                    94: [0, 0.69444, 0.06709, 0, 0.59111],
                    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
                    97: [0, 0.44444, 0.09426, 0, 0.59111],
                    98: [0, 0.69444, 0.07861, 0, 0.53222],
                    99: [0, 0.44444, 0.05222, 0, 0.53222],
                    100: [0, 0.69444, 0.10861, 0, 0.59111],
                    101: [0, 0.44444, 0.085, 0, 0.53222],
                    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
                    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
                    104: [0, 0.69444, 0.09426, 0, 0.59111],
                    105: [0, 0.69326, 0.11387, 0, 0.35555],
                    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
                    107: [0, 0.69444, 0.11111, 0, 0.53222],
                    108: [0, 0.69444, 0.10861, 0, 0.29666],
                    109: [0, 0.44444, 0.09426, 0, 0.94444],
                    110: [0, 0.44444, 0.09426, 0, 0.64999],
                    111: [0, 0.44444, 0.07861, 0, 0.59111],
                    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
                    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
                    114: [0, 0.44444, 0.11111, 0, 0.50167],
                    115: [0, 0.44444, 0.08167, 0, 0.48694],
                    116: [0, 0.63492, 0.09639, 0, 0.385],
                    117: [0, 0.44444, 0.09426, 0, 0.62055],
                    118: [0, 0.44444, 0.11111, 0, 0.53222],
                    119: [0, 0.44444, 0.11111, 0, 0.76777],
                    120: [0, 0.44444, 0.12583, 0, 0.56055],
                    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
                    122: [0, 0.44444, 0.13889, 0, 0.49055],
                    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
                    163: [0, 0.69444, 0, 0, 0.86853],
                    168: [0, 0.69444, 0.11473, 0, 0.59111],
                    176: [0, 0.69444, 0, 0, 0.94888],
                    184: [0.17014, 0, 0, 0, 0.53222],
                    198: [0, 0.68611, 0.11431, 0, 1.02277],
                    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
                    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
                    230: [0, 0.44444, 0.085, 0, 0.82666],
                    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
                    305: [0, 0.44444, 0.09426, 0, 0.35555],
                    338: [0, 0.68611, 0.11431, 0, 1.14054],
                    339: [0, 0.44444, 0.085, 0, 0.82666],
                    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
                    710: [0, 0.69444, 0.06709, 0, 0.59111],
                    711: [0, 0.63194, 0.08271, 0, 0.59111],
                    713: [0, 0.59444, 0.10444, 0, 0.59111],
                    714: [0, 0.69444, 0.08528, 0, 0.59111],
                    715: [0, 0.69444, 0, 0, 0.59111],
                    728: [0, 0.69444, 0.10333, 0, 0.59111],
                    729: [0, 0.69444, 0.12945, 0, 0.35555],
                    730: [0, 0.69444, 0, 0, 0.94888],
                    732: [0, 0.69444, 0.11472, 0, 0.59111],
                    733: [0, 0.69444, 0.11472, 0, 0.59111],
                    915: [0, 0.68611, 0.12903, 0, 0.69777],
                    916: [0, 0.68611, 0, 0, 0.94444],
                    920: [0, 0.68611, 0.09062, 0, 0.88555],
                    923: [0, 0.68611, 0, 0, 0.80666],
                    926: [0, 0.68611, 0.15092, 0, 0.76777],
                    928: [0, 0.68611, 0.17208, 0, 0.8961],
                    931: [0, 0.68611, 0.11431, 0, 0.82666],
                    933: [0, 0.68611, 0.10778, 0, 0.88555],
                    934: [0, 0.68611, 0.05632, 0, 0.82666],
                    936: [0, 0.68611, 0.10778, 0, 0.88555],
                    937: [0, 0.68611, 0.0992, 0, 0.82666],
                    8211: [0, 0.44444, 0.09811, 0, 0.59111],
                    8212: [0, 0.44444, 0.09811, 0, 1.18221],
                    8216: [0, 0.69444, 0.12945, 0, 0.35555],
                    8217: [0, 0.69444, 0.12945, 0, 0.35555],
                    8220: [0, 0.69444, 0.16772, 0, 0.62055],
                    8221: [0, 0.69444, 0.07939, 0, 0.62055],
                  },
                  "Main-Italic": {
                    33: [0, 0.69444, 0.12417, 0, 0.30667],
                    34: [0, 0.69444, 0.06961, 0, 0.51444],
                    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
                    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
                    38: [0, 0.69444, 0.09694, 0, 0.76666],
                    39: [0, 0.69444, 0.12417, 0, 0.30667],
                    40: [0.25, 0.75, 0.16194, 0, 0.40889],
                    41: [0.25, 0.75, 0.03694, 0, 0.40889],
                    42: [0, 0.75, 0.14917, 0, 0.51111],
                    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
                    44: [0.19444, 0.10556, 0, 0, 0.30667],
                    45: [0, 0.43056, 0.02826, 0, 0.35778],
                    46: [0, 0.10556, 0, 0, 0.30667],
                    47: [0.25, 0.75, 0.16194, 0, 0.51111],
                    48: [0, 0.64444, 0.13556, 0, 0.51111],
                    49: [0, 0.64444, 0.13556, 0, 0.51111],
                    50: [0, 0.64444, 0.13556, 0, 0.51111],
                    51: [0, 0.64444, 0.13556, 0, 0.51111],
                    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
                    53: [0, 0.64444, 0.13556, 0, 0.51111],
                    54: [0, 0.64444, 0.13556, 0, 0.51111],
                    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
                    56: [0, 0.64444, 0.13556, 0, 0.51111],
                    57: [0, 0.64444, 0.13556, 0, 0.51111],
                    58: [0, 0.43056, 0.0582, 0, 0.30667],
                    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
                    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
                    63: [0, 0.69444, 0.1225, 0, 0.51111],
                    64: [0, 0.69444, 0.09597, 0, 0.76666],
                    65: [0, 0.68333, 0, 0, 0.74333],
                    66: [0, 0.68333, 0.10257, 0, 0.70389],
                    67: [0, 0.68333, 0.14528, 0, 0.71555],
                    68: [0, 0.68333, 0.09403, 0, 0.755],
                    69: [0, 0.68333, 0.12028, 0, 0.67833],
                    70: [0, 0.68333, 0.13305, 0, 0.65277],
                    71: [0, 0.68333, 0.08722, 0, 0.77361],
                    72: [0, 0.68333, 0.16389, 0, 0.74333],
                    73: [0, 0.68333, 0.15806, 0, 0.38555],
                    74: [0, 0.68333, 0.14028, 0, 0.525],
                    75: [0, 0.68333, 0.14528, 0, 0.76888],
                    76: [0, 0.68333, 0, 0, 0.62722],
                    77: [0, 0.68333, 0.16389, 0, 0.89666],
                    78: [0, 0.68333, 0.16389, 0, 0.74333],
                    79: [0, 0.68333, 0.09403, 0, 0.76666],
                    80: [0, 0.68333, 0.10257, 0, 0.67833],
                    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
                    82: [0, 0.68333, 0.03868, 0, 0.72944],
                    83: [0, 0.68333, 0.11972, 0, 0.56222],
                    84: [0, 0.68333, 0.13305, 0, 0.71555],
                    85: [0, 0.68333, 0.16389, 0, 0.74333],
                    86: [0, 0.68333, 0.18361, 0, 0.74333],
                    87: [0, 0.68333, 0.18361, 0, 0.99888],
                    88: [0, 0.68333, 0.15806, 0, 0.74333],
                    89: [0, 0.68333, 0.19383, 0, 0.74333],
                    90: [0, 0.68333, 0.14528, 0, 0.61333],
                    91: [0.25, 0.75, 0.1875, 0, 0.30667],
                    93: [0.25, 0.75, 0.10528, 0, 0.30667],
                    94: [0, 0.69444, 0.06646, 0, 0.51111],
                    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
                    97: [0, 0.43056, 0.07671, 0, 0.51111],
                    98: [0, 0.69444, 0.06312, 0, 0.46],
                    99: [0, 0.43056, 0.05653, 0, 0.46],
                    100: [0, 0.69444, 0.10333, 0, 0.51111],
                    101: [0, 0.43056, 0.07514, 0, 0.46],
                    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
                    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
                    104: [0, 0.69444, 0.07671, 0, 0.51111],
                    105: [0, 0.65536, 0.1019, 0, 0.30667],
                    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
                    107: [0, 0.69444, 0.10764, 0, 0.46],
                    108: [0, 0.69444, 0.10333, 0, 0.25555],
                    109: [0, 0.43056, 0.07671, 0, 0.81777],
                    110: [0, 0.43056, 0.07671, 0, 0.56222],
                    111: [0, 0.43056, 0.06312, 0, 0.51111],
                    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
                    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
                    114: [0, 0.43056, 0.10764, 0, 0.42166],
                    115: [0, 0.43056, 0.08208, 0, 0.40889],
                    116: [0, 0.61508, 0.09486, 0, 0.33222],
                    117: [0, 0.43056, 0.07671, 0, 0.53666],
                    118: [0, 0.43056, 0.10764, 0, 0.46],
                    119: [0, 0.43056, 0.10764, 0, 0.66444],
                    120: [0, 0.43056, 0.12042, 0, 0.46389],
                    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
                    122: [0, 0.43056, 0.12292, 0, 0.40889],
                    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
                    163: [0, 0.69444, 0, 0, 0.76909],
                    168: [0, 0.66786, 0.10474, 0, 0.51111],
                    176: [0, 0.69444, 0, 0, 0.83129],
                    184: [0.17014, 0, 0, 0, 0.46],
                    198: [0, 0.68333, 0.12028, 0, 0.88277],
                    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
                    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
                    230: [0, 0.43056, 0.07514, 0, 0.71555],
                    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
                    305: [0, 0.43056, 0, 0.02778, 0.32246],
                    338: [0, 0.68333, 0.12028, 0, 0.98499],
                    339: [0, 0.43056, 0.07514, 0, 0.71555],
                    567: [0.19444, 0.43056, 0, 0.08334, 0.38403],
                    710: [0, 0.69444, 0.06646, 0, 0.51111],
                    711: [0, 0.62847, 0.08295, 0, 0.51111],
                    713: [0, 0.56167, 0.10333, 0, 0.51111],
                    714: [0, 0.69444, 0.09694, 0, 0.51111],
                    715: [0, 0.69444, 0, 0, 0.51111],
                    728: [0, 0.69444, 0.10806, 0, 0.51111],
                    729: [0, 0.66786, 0.11752, 0, 0.30667],
                    730: [0, 0.69444, 0, 0, 0.83129],
                    732: [0, 0.66786, 0.11585, 0, 0.51111],
                    733: [0, 0.69444, 0.1225, 0, 0.51111],
                    915: [0, 0.68333, 0.13305, 0, 0.62722],
                    916: [0, 0.68333, 0, 0, 0.81777],
                    920: [0, 0.68333, 0.09403, 0, 0.76666],
                    923: [0, 0.68333, 0, 0, 0.69222],
                    926: [0, 0.68333, 0.15294, 0, 0.66444],
                    928: [0, 0.68333, 0.16389, 0, 0.74333],
                    931: [0, 0.68333, 0.12028, 0, 0.71555],
                    933: [0, 0.68333, 0.11111, 0, 0.76666],
                    934: [0, 0.68333, 0.05986, 0, 0.71555],
                    936: [0, 0.68333, 0.11111, 0, 0.76666],
                    937: [0, 0.68333, 0.10257, 0, 0.71555],
                    8211: [0, 0.43056, 0.09208, 0, 0.51111],
                    8212: [0, 0.43056, 0.09208, 0, 1.02222],
                    8216: [0, 0.69444, 0.12417, 0, 0.30667],
                    8217: [0, 0.69444, 0.12417, 0, 0.30667],
                    8220: [0, 0.69444, 0.1685, 0, 0.51444],
                    8221: [0, 0.69444, 0.06961, 0, 0.51444],
                    8463: [0, 0.68889, 0, 0, 0.54028],
                  },
                  "Main-Regular": {
                    32: [0, 0, 0, 0, 0.25],
                    33: [0, 0.69444, 0, 0, 0.27778],
                    34: [0, 0.69444, 0, 0, 0.5],
                    35: [0.19444, 0.69444, 0, 0, 0.83334],
                    36: [0.05556, 0.75, 0, 0, 0.5],
                    37: [0.05556, 0.75, 0, 0, 0.83334],
                    38: [0, 0.69444, 0, 0, 0.77778],
                    39: [0, 0.69444, 0, 0, 0.27778],
                    40: [0.25, 0.75, 0, 0, 0.38889],
                    41: [0.25, 0.75, 0, 0, 0.38889],
                    42: [0, 0.75, 0, 0, 0.5],
                    43: [0.08333, 0.58333, 0, 0, 0.77778],
                    44: [0.19444, 0.10556, 0, 0, 0.27778],
                    45: [0, 0.43056, 0, 0, 0.33333],
                    46: [0, 0.10556, 0, 0, 0.27778],
                    47: [0.25, 0.75, 0, 0, 0.5],
                    48: [0, 0.64444, 0, 0, 0.5],
                    49: [0, 0.64444, 0, 0, 0.5],
                    50: [0, 0.64444, 0, 0, 0.5],
                    51: [0, 0.64444, 0, 0, 0.5],
                    52: [0, 0.64444, 0, 0, 0.5],
                    53: [0, 0.64444, 0, 0, 0.5],
                    54: [0, 0.64444, 0, 0, 0.5],
                    55: [0, 0.64444, 0, 0, 0.5],
                    56: [0, 0.64444, 0, 0, 0.5],
                    57: [0, 0.64444, 0, 0, 0.5],
                    58: [0, 0.43056, 0, 0, 0.27778],
                    59: [0.19444, 0.43056, 0, 0, 0.27778],
                    60: [0.0391, 0.5391, 0, 0, 0.77778],
                    61: [-0.13313, 0.36687, 0, 0, 0.77778],
                    62: [0.0391, 0.5391, 0, 0, 0.77778],
                    63: [0, 0.69444, 0, 0, 0.47222],
                    64: [0, 0.69444, 0, 0, 0.77778],
                    65: [0, 0.68333, 0, 0, 0.75],
                    66: [0, 0.68333, 0, 0, 0.70834],
                    67: [0, 0.68333, 0, 0, 0.72222],
                    68: [0, 0.68333, 0, 0, 0.76389],
                    69: [0, 0.68333, 0, 0, 0.68056],
                    70: [0, 0.68333, 0, 0, 0.65278],
                    71: [0, 0.68333, 0, 0, 0.78472],
                    72: [0, 0.68333, 0, 0, 0.75],
                    73: [0, 0.68333, 0, 0, 0.36111],
                    74: [0, 0.68333, 0, 0, 0.51389],
                    75: [0, 0.68333, 0, 0, 0.77778],
                    76: [0, 0.68333, 0, 0, 0.625],
                    77: [0, 0.68333, 0, 0, 0.91667],
                    78: [0, 0.68333, 0, 0, 0.75],
                    79: [0, 0.68333, 0, 0, 0.77778],
                    80: [0, 0.68333, 0, 0, 0.68056],
                    81: [0.19444, 0.68333, 0, 0, 0.77778],
                    82: [0, 0.68333, 0, 0, 0.73611],
                    83: [0, 0.68333, 0, 0, 0.55556],
                    84: [0, 0.68333, 0, 0, 0.72222],
                    85: [0, 0.68333, 0, 0, 0.75],
                    86: [0, 0.68333, 0.01389, 0, 0.75],
                    87: [0, 0.68333, 0.01389, 0, 1.02778],
                    88: [0, 0.68333, 0, 0, 0.75],
                    89: [0, 0.68333, 0.025, 0, 0.75],
                    90: [0, 0.68333, 0, 0, 0.61111],
                    91: [0.25, 0.75, 0, 0, 0.27778],
                    92: [0.25, 0.75, 0, 0, 0.5],
                    93: [0.25, 0.75, 0, 0, 0.27778],
                    94: [0, 0.69444, 0, 0, 0.5],
                    95: [0.31, 0.12056, 0.02778, 0, 0.5],
                    97: [0, 0.43056, 0, 0, 0.5],
                    98: [0, 0.69444, 0, 0, 0.55556],
                    99: [0, 0.43056, 0, 0, 0.44445],
                    100: [0, 0.69444, 0, 0, 0.55556],
                    101: [0, 0.43056, 0, 0, 0.44445],
                    102: [0, 0.69444, 0.07778, 0, 0.30556],
                    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
                    104: [0, 0.69444, 0, 0, 0.55556],
                    105: [0, 0.66786, 0, 0, 0.27778],
                    106: [0.19444, 0.66786, 0, 0, 0.30556],
                    107: [0, 0.69444, 0, 0, 0.52778],
                    108: [0, 0.69444, 0, 0, 0.27778],
                    109: [0, 0.43056, 0, 0, 0.83334],
                    110: [0, 0.43056, 0, 0, 0.55556],
                    111: [0, 0.43056, 0, 0, 0.5],
                    112: [0.19444, 0.43056, 0, 0, 0.55556],
                    113: [0.19444, 0.43056, 0, 0, 0.52778],
                    114: [0, 0.43056, 0, 0, 0.39167],
                    115: [0, 0.43056, 0, 0, 0.39445],
                    116: [0, 0.61508, 0, 0, 0.38889],
                    117: [0, 0.43056, 0, 0, 0.55556],
                    118: [0, 0.43056, 0.01389, 0, 0.52778],
                    119: [0, 0.43056, 0.01389, 0, 0.72222],
                    120: [0, 0.43056, 0, 0, 0.52778],
                    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
                    122: [0, 0.43056, 0, 0, 0.44445],
                    123: [0.25, 0.75, 0, 0, 0.5],
                    124: [0.25, 0.75, 0, 0, 0.27778],
                    125: [0.25, 0.75, 0, 0, 0.5],
                    126: [0.35, 0.31786, 0, 0, 0.5],
                    160: [0, 0, 0, 0, 0.25],
                    167: [0.19444, 0.69444, 0, 0, 0.44445],
                    168: [0, 0.66786, 0, 0, 0.5],
                    172: [0, 0.43056, 0, 0, 0.66667],
                    176: [0, 0.69444, 0, 0, 0.75],
                    177: [0.08333, 0.58333, 0, 0, 0.77778],
                    182: [0.19444, 0.69444, 0, 0, 0.61111],
                    184: [0.17014, 0, 0, 0, 0.44445],
                    198: [0, 0.68333, 0, 0, 0.90278],
                    215: [0.08333, 0.58333, 0, 0, 0.77778],
                    216: [0.04861, 0.73194, 0, 0, 0.77778],
                    223: [0, 0.69444, 0, 0, 0.5],
                    230: [0, 0.43056, 0, 0, 0.72222],
                    247: [0.08333, 0.58333, 0, 0, 0.77778],
                    248: [0.09722, 0.52778, 0, 0, 0.5],
                    305: [0, 0.43056, 0, 0, 0.27778],
                    338: [0, 0.68333, 0, 0, 1.01389],
                    339: [0, 0.43056, 0, 0, 0.77778],
                    567: [0.19444, 0.43056, 0, 0, 0.30556],
                    710: [0, 0.69444, 0, 0, 0.5],
                    711: [0, 0.62847, 0, 0, 0.5],
                    713: [0, 0.56778, 0, 0, 0.5],
                    714: [0, 0.69444, 0, 0, 0.5],
                    715: [0, 0.69444, 0, 0, 0.5],
                    728: [0, 0.69444, 0, 0, 0.5],
                    729: [0, 0.66786, 0, 0, 0.27778],
                    730: [0, 0.69444, 0, 0, 0.75],
                    732: [0, 0.66786, 0, 0, 0.5],
                    733: [0, 0.69444, 0, 0, 0.5],
                    824: [0.19444, 0.69444, 0, 0, 0],
                    915: [0, 0.68333, 0, 0, 0.625],
                    916: [0, 0.68333, 0, 0, 0.83334],
                    920: [0, 0.68333, 0, 0, 0.77778],
                    923: [0, 0.68333, 0, 0, 0.69445],
                    926: [0, 0.68333, 0, 0, 0.66667],
                    928: [0, 0.68333, 0, 0, 0.75],
                    931: [0, 0.68333, 0, 0, 0.72222],
                    933: [0, 0.68333, 0, 0, 0.77778],
                    934: [0, 0.68333, 0, 0, 0.72222],
                    936: [0, 0.68333, 0, 0, 0.77778],
                    937: [0, 0.68333, 0, 0, 0.72222],
                    8211: [0, 0.43056, 0.02778, 0, 0.5],
                    8212: [0, 0.43056, 0.02778, 0, 1],
                    8216: [0, 0.69444, 0, 0, 0.27778],
                    8217: [0, 0.69444, 0, 0, 0.27778],
                    8220: [0, 0.69444, 0, 0, 0.5],
                    8221: [0, 0.69444, 0, 0, 0.5],
                    8224: [0.19444, 0.69444, 0, 0, 0.44445],
                    8225: [0.19444, 0.69444, 0, 0, 0.44445],
                    8230: [0, 0.12, 0, 0, 1.172],
                    8242: [0, 0.55556, 0, 0, 0.275],
                    8407: [0, 0.71444, 0.15382, 0, 0.5],
                    8463: [0, 0.68889, 0, 0, 0.54028],
                    8465: [0, 0.69444, 0, 0, 0.72222],
                    8467: [0, 0.69444, 0, 0.11111, 0.41667],
                    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
                    8476: [0, 0.69444, 0, 0, 0.72222],
                    8501: [0, 0.69444, 0, 0, 0.61111],
                    8592: [-0.13313, 0.36687, 0, 0, 1],
                    8593: [0.19444, 0.69444, 0, 0, 0.5],
                    8594: [-0.13313, 0.36687, 0, 0, 1],
                    8595: [0.19444, 0.69444, 0, 0, 0.5],
                    8596: [-0.13313, 0.36687, 0, 0, 1],
                    8597: [0.25, 0.75, 0, 0, 0.5],
                    8598: [0.19444, 0.69444, 0, 0, 1],
                    8599: [0.19444, 0.69444, 0, 0, 1],
                    8600: [0.19444, 0.69444, 0, 0, 1],
                    8601: [0.19444, 0.69444, 0, 0, 1],
                    8614: [0.011, 0.511, 0, 0, 1],
                    8617: [0.011, 0.511, 0, 0, 1.126],
                    8618: [0.011, 0.511, 0, 0, 1.126],
                    8636: [-0.13313, 0.36687, 0, 0, 1],
                    8637: [-0.13313, 0.36687, 0, 0, 1],
                    8640: [-0.13313, 0.36687, 0, 0, 1],
                    8641: [-0.13313, 0.36687, 0, 0, 1],
                    8652: [0.011, 0.671, 0, 0, 1],
                    8656: [-0.13313, 0.36687, 0, 0, 1],
                    8657: [0.19444, 0.69444, 0, 0, 0.61111],
                    8658: [-0.13313, 0.36687, 0, 0, 1],
                    8659: [0.19444, 0.69444, 0, 0, 0.61111],
                    8660: [-0.13313, 0.36687, 0, 0, 1],
                    8661: [0.25, 0.75, 0, 0, 0.61111],
                    8704: [0, 0.69444, 0, 0, 0.55556],
                    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
                    8707: [0, 0.69444, 0, 0, 0.55556],
                    8709: [0.05556, 0.75, 0, 0, 0.5],
                    8711: [0, 0.68333, 0, 0, 0.83334],
                    8712: [0.0391, 0.5391, 0, 0, 0.66667],
                    8715: [0.0391, 0.5391, 0, 0, 0.66667],
                    8722: [0.08333, 0.58333, 0, 0, 0.77778],
                    8723: [0.08333, 0.58333, 0, 0, 0.77778],
                    8725: [0.25, 0.75, 0, 0, 0.5],
                    8726: [0.25, 0.75, 0, 0, 0.5],
                    8727: [-0.03472, 0.46528, 0, 0, 0.5],
                    8728: [-0.05555, 0.44445, 0, 0, 0.5],
                    8729: [-0.05555, 0.44445, 0, 0, 0.5],
                    8730: [0.2, 0.8, 0, 0, 0.83334],
                    8733: [0, 0.43056, 0, 0, 0.77778],
                    8734: [0, 0.43056, 0, 0, 1],
                    8736: [0, 0.69224, 0, 0, 0.72222],
                    8739: [0.25, 0.75, 0, 0, 0.27778],
                    8741: [0.25, 0.75, 0, 0, 0.5],
                    8743: [0, 0.55556, 0, 0, 0.66667],
                    8744: [0, 0.55556, 0, 0, 0.66667],
                    8745: [0, 0.55556, 0, 0, 0.66667],
                    8746: [0, 0.55556, 0, 0, 0.66667],
                    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
                    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
                    8768: [0.19444, 0.69444, 0, 0, 0.27778],
                    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
                    8773: [-0.022, 0.589, 0, 0, 1],
                    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
                    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
                    8784: [-0.133, 0.67, 0, 0, 0.778],
                    8800: [0.215, 0.716, 0, 0, 0.778],
                    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
                    8804: [0.13597, 0.63597, 0, 0, 0.77778],
                    8805: [0.13597, 0.63597, 0, 0, 0.77778],
                    8810: [0.0391, 0.5391, 0, 0, 1],
                    8811: [0.0391, 0.5391, 0, 0, 1],
                    8826: [0.0391, 0.5391, 0, 0, 0.77778],
                    8827: [0.0391, 0.5391, 0, 0, 0.77778],
                    8834: [0.0391, 0.5391, 0, 0, 0.77778],
                    8835: [0.0391, 0.5391, 0, 0, 0.77778],
                    8838: [0.13597, 0.63597, 0, 0, 0.77778],
                    8839: [0.13597, 0.63597, 0, 0, 0.77778],
                    8846: [0, 0.55556, 0, 0, 0.66667],
                    8849: [0.13597, 0.63597, 0, 0, 0.77778],
                    8850: [0.13597, 0.63597, 0, 0, 0.77778],
                    8851: [0, 0.55556, 0, 0, 0.66667],
                    8852: [0, 0.55556, 0, 0, 0.66667],
                    8853: [0.08333, 0.58333, 0, 0, 0.77778],
                    8854: [0.08333, 0.58333, 0, 0, 0.77778],
                    8855: [0.08333, 0.58333, 0, 0, 0.77778],
                    8856: [0.08333, 0.58333, 0, 0, 0.77778],
                    8857: [0.08333, 0.58333, 0, 0, 0.77778],
                    8866: [0, 0.69444, 0, 0, 0.61111],
                    8867: [0, 0.69444, 0, 0, 0.61111],
                    8868: [0, 0.69444, 0, 0, 0.77778],
                    8869: [0, 0.69444, 0, 0, 0.77778],
                    8872: [0.249, 0.75, 0, 0, 0.867],
                    8900: [-0.05555, 0.44445, 0, 0, 0.5],
                    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
                    8902: [-0.03472, 0.46528, 0, 0, 0.5],
                    8904: [0.005, 0.505, 0, 0, 0.9],
                    8942: [0.03, 0.9, 0, 0, 0.278],
                    8943: [-0.19, 0.31, 0, 0, 1.172],
                    8945: [-0.1, 0.82, 0, 0, 1.282],
                    8968: [0.25, 0.75, 0, 0, 0.44445],
                    8969: [0.25, 0.75, 0, 0, 0.44445],
                    8970: [0.25, 0.75, 0, 0, 0.44445],
                    8971: [0.25, 0.75, 0, 0, 0.44445],
                    8994: [-0.14236, 0.35764, 0, 0, 1],
                    8995: [-0.14236, 0.35764, 0, 0, 1],
                    9136: [0.244, 0.744, 0, 0, 0.412],
                    9137: [0.244, 0.744, 0, 0, 0.412],
                    9651: [0.19444, 0.69444, 0, 0, 0.88889],
                    9657: [-0.03472, 0.46528, 0, 0, 0.5],
                    9661: [0.19444, 0.69444, 0, 0, 0.88889],
                    9667: [-0.03472, 0.46528, 0, 0, 0.5],
                    9711: [0.19444, 0.69444, 0, 0, 1],
                    9824: [0.12963, 0.69444, 0, 0, 0.77778],
                    9825: [0.12963, 0.69444, 0, 0, 0.77778],
                    9826: [0.12963, 0.69444, 0, 0, 0.77778],
                    9827: [0.12963, 0.69444, 0, 0, 0.77778],
                    9837: [0, 0.75, 0, 0, 0.38889],
                    9838: [0.19444, 0.69444, 0, 0, 0.38889],
                    9839: [0.19444, 0.69444, 0, 0, 0.38889],
                    10216: [0.25, 0.75, 0, 0, 0.38889],
                    10217: [0.25, 0.75, 0, 0, 0.38889],
                    10222: [0.244, 0.744, 0, 0, 0.412],
                    10223: [0.244, 0.744, 0, 0, 0.412],
                    10229: [0.011, 0.511, 0, 0, 1.609],
                    10230: [0.011, 0.511, 0, 0, 1.638],
                    10231: [0.011, 0.511, 0, 0, 1.859],
                    10232: [0.024, 0.525, 0, 0, 1.609],
                    10233: [0.024, 0.525, 0, 0, 1.638],
                    10234: [0.024, 0.525, 0, 0, 1.858],
                    10236: [0.011, 0.511, 0, 0, 1.638],
                    10815: [0, 0.68333, 0, 0, 0.75],
                    10927: [0.13597, 0.63597, 0, 0, 0.77778],
                    10928: [0.13597, 0.63597, 0, 0, 0.77778],
                  },
                  "Math-BoldItalic": {
                    47: [0.19444, 0.69444, 0, 0, 0],
                    65: [0, 0.68611, 0, 0, 0.86944],
                    66: [0, 0.68611, 0.04835, 0, 0.8664],
                    67: [0, 0.68611, 0.06979, 0, 0.81694],
                    68: [0, 0.68611, 0.03194, 0, 0.93812],
                    69: [0, 0.68611, 0.05451, 0, 0.81007],
                    70: [0, 0.68611, 0.15972, 0, 0.68889],
                    71: [0, 0.68611, 0, 0, 0.88673],
                    72: [0, 0.68611, 0.08229, 0, 0.98229],
                    73: [0, 0.68611, 0.07778, 0, 0.51111],
                    74: [0, 0.68611, 0.10069, 0, 0.63125],
                    75: [0, 0.68611, 0.06979, 0, 0.97118],
                    76: [0, 0.68611, 0, 0, 0.75555],
                    77: [0, 0.68611, 0.11424, 0, 1.14201],
                    78: [0, 0.68611, 0.11424, 0, 0.95034],
                    79: [0, 0.68611, 0.03194, 0, 0.83666],
                    80: [0, 0.68611, 0.15972, 0, 0.72309],
                    81: [0.19444, 0.68611, 0, 0, 0.86861],
                    82: [0, 0.68611, 0.00421, 0, 0.87235],
                    83: [0, 0.68611, 0.05382, 0, 0.69271],
                    84: [0, 0.68611, 0.15972, 0, 0.63663],
                    85: [0, 0.68611, 0.11424, 0, 0.80027],
                    86: [0, 0.68611, 0.25555, 0, 0.67778],
                    87: [0, 0.68611, 0.15972, 0, 1.09305],
                    88: [0, 0.68611, 0.07778, 0, 0.94722],
                    89: [0, 0.68611, 0.25555, 0, 0.67458],
                    90: [0, 0.68611, 0.06979, 0, 0.77257],
                    97: [0, 0.44444, 0, 0, 0.63287],
                    98: [0, 0.69444, 0, 0, 0.52083],
                    99: [0, 0.44444, 0, 0, 0.51342],
                    100: [0, 0.69444, 0, 0, 0.60972],
                    101: [0, 0.44444, 0, 0, 0.55361],
                    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
                    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
                    104: [0, 0.69444, 0, 0, 0.66759],
                    105: [0, 0.69326, 0, 0, 0.4048],
                    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
                    107: [0, 0.69444, 0.01852, 0, 0.6037],
                    108: [0, 0.69444, 0.0088, 0, 0.34815],
                    109: [0, 0.44444, 0, 0, 1.0324],
                    110: [0, 0.44444, 0, 0, 0.71296],
                    111: [0, 0.44444, 0, 0, 0.58472],
                    112: [0.19444, 0.44444, 0, 0, 0.60092],
                    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
                    114: [0, 0.44444, 0.03194, 0, 0.5287],
                    115: [0, 0.44444, 0, 0, 0.53125],
                    116: [0, 0.63492, 0, 0, 0.41528],
                    117: [0, 0.44444, 0, 0, 0.68102],
                    118: [0, 0.44444, 0.03704, 0, 0.56666],
                    119: [0, 0.44444, 0.02778, 0, 0.83148],
                    120: [0, 0.44444, 0, 0, 0.65903],
                    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
                    122: [0, 0.44444, 0.04213, 0, 0.55509],
                    915: [0, 0.68611, 0.15972, 0, 0.65694],
                    916: [0, 0.68611, 0, 0, 0.95833],
                    920: [0, 0.68611, 0.03194, 0, 0.86722],
                    923: [0, 0.68611, 0, 0, 0.80555],
                    926: [0, 0.68611, 0.07458, 0, 0.84125],
                    928: [0, 0.68611, 0.08229, 0, 0.98229],
                    931: [0, 0.68611, 0.05451, 0, 0.88507],
                    933: [0, 0.68611, 0.15972, 0, 0.67083],
                    934: [0, 0.68611, 0, 0, 0.76666],
                    936: [0, 0.68611, 0.11653, 0, 0.71402],
                    937: [0, 0.68611, 0.04835, 0, 0.8789],
                    945: [0, 0.44444, 0, 0, 0.76064],
                    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
                    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
                    948: [0, 0.69444, 0.03819, 0, 0.52222],
                    949: [0, 0.44444, 0, 0, 0.52882],
                    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
                    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
                    952: [0, 0.69444, 0.03194, 0, 0.5618],
                    953: [0, 0.44444, 0, 0, 0.41204],
                    954: [0, 0.44444, 0, 0, 0.66759],
                    955: [0, 0.69444, 0, 0, 0.67083],
                    956: [0.19444, 0.44444, 0, 0, 0.70787],
                    957: [0, 0.44444, 0.06898, 0, 0.57685],
                    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
                    959: [0, 0.44444, 0, 0, 0.58472],
                    960: [0, 0.44444, 0.03704, 0, 0.68241],
                    961: [0.19444, 0.44444, 0, 0, 0.6118],
                    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
                    963: [0, 0.44444, 0.03704, 0, 0.68588],
                    964: [0, 0.44444, 0.13472, 0, 0.52083],
                    965: [0, 0.44444, 0.03704, 0, 0.63055],
                    966: [0.19444, 0.44444, 0, 0, 0.74722],
                    967: [0.19444, 0.44444, 0, 0, 0.71805],
                    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
                    969: [0, 0.44444, 0.03704, 0, 0.71782],
                    977: [0, 0.69444, 0, 0, 0.69155],
                    981: [0.19444, 0.69444, 0, 0, 0.7125],
                    982: [0, 0.44444, 0.03194, 0, 0.975],
                    1009: [0.19444, 0.44444, 0, 0, 0.6118],
                    1013: [0, 0.44444, 0, 0, 0.48333],
                  },
                  "Math-Italic": {
                    47: [0.19444, 0.69444, 0, 0, 0],
                    65: [0, 0.68333, 0, 0.13889, 0.75],
                    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
                    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
                    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
                    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
                    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
                    71: [0, 0.68333, 0, 0.08334, 0.78625],
                    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
                    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
                    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
                    76: [0, 0.68333, 0, 0.02778, 0.68056],
                    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
                    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
                    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
                    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
                    82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
                    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
                    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
                    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
                    86: [0, 0.68333, 0.22222, 0, 0.58333],
                    87: [0, 0.68333, 0.13889, 0, 0.94445],
                    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
                    89: [0, 0.68333, 0.22222, 0, 0.58056],
                    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
                    97: [0, 0.43056, 0, 0, 0.52859],
                    98: [0, 0.69444, 0, 0, 0.42917],
                    99: [0, 0.43056, 0, 0.05556, 0.43276],
                    100: [0, 0.69444, 0, 0.16667, 0.52049],
                    101: [0, 0.43056, 0, 0.05556, 0.46563],
                    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
                    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
                    104: [0, 0.69444, 0, 0, 0.57616],
                    105: [0, 0.65952, 0, 0, 0.34451],
                    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
                    107: [0, 0.69444, 0.03148, 0, 0.5206],
                    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
                    109: [0, 0.43056, 0, 0, 0.87801],
                    110: [0, 0.43056, 0, 0, 0.60023],
                    111: [0, 0.43056, 0, 0.05556, 0.48472],
                    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
                    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
                    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
                    115: [0, 0.43056, 0, 0.05556, 0.46875],
                    116: [0, 0.61508, 0, 0.08334, 0.36111],
                    117: [0, 0.43056, 0, 0.02778, 0.57246],
                    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
                    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
                    120: [0, 0.43056, 0, 0.02778, 0.57153],
                    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
                    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
                    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
                    916: [0, 0.68333, 0, 0.16667, 0.83334],
                    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                    923: [0, 0.68333, 0, 0.16667, 0.69445],
                    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
                    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
                    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
                    934: [0, 0.68333, 0, 0.08334, 0.66667],
                    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
                    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
                    945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
                    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
                    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
                    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
                    949: [0, 0.43056, 0, 0.08334, 0.46632],
                    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
                    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
                    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
                    953: [0, 0.43056, 0, 0.05556, 0.35394],
                    954: [0, 0.43056, 0, 0, 0.57616],
                    955: [0, 0.69444, 0, 0, 0.58334],
                    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
                    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
                    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
                    959: [0, 0.43056, 0, 0.05556, 0.48472],
                    960: [0, 0.43056, 0.03588, 0, 0.57003],
                    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
                    963: [0, 0.43056, 0.03588, 0, 0.57141],
                    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
                    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
                    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
                    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
                    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
                    969: [0, 0.43056, 0.03588, 0, 0.62245],
                    977: [0, 0.69444, 0, 0.08334, 0.59144],
                    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
                    982: [0, 0.43056, 0.02778, 0, 0.82813],
                    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                    1013: [0, 0.43056, 0, 0.05556, 0.4059],
                  },
                  "Math-Regular": {
                    65: [0, 0.68333, 0, 0.13889, 0.75],
                    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
                    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
                    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
                    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
                    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
                    71: [0, 0.68333, 0, 0.08334, 0.78625],
                    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
                    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
                    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
                    76: [0, 0.68333, 0, 0.02778, 0.68056],
                    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
                    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
                    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
                    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
                    82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
                    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
                    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
                    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
                    86: [0, 0.68333, 0.22222, 0, 0.58333],
                    87: [0, 0.68333, 0.13889, 0, 0.94445],
                    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
                    89: [0, 0.68333, 0.22222, 0, 0.58056],
                    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
                    97: [0, 0.43056, 0, 0, 0.52859],
                    98: [0, 0.69444, 0, 0, 0.42917],
                    99: [0, 0.43056, 0, 0.05556, 0.43276],
                    100: [0, 0.69444, 0, 0.16667, 0.52049],
                    101: [0, 0.43056, 0, 0.05556, 0.46563],
                    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
                    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
                    104: [0, 0.69444, 0, 0, 0.57616],
                    105: [0, 0.65952, 0, 0, 0.34451],
                    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
                    107: [0, 0.69444, 0.03148, 0, 0.5206],
                    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
                    109: [0, 0.43056, 0, 0, 0.87801],
                    110: [0, 0.43056, 0, 0, 0.60023],
                    111: [0, 0.43056, 0, 0.05556, 0.48472],
                    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
                    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
                    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
                    115: [0, 0.43056, 0, 0.05556, 0.46875],
                    116: [0, 0.61508, 0, 0.08334, 0.36111],
                    117: [0, 0.43056, 0, 0.02778, 0.57246],
                    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
                    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
                    120: [0, 0.43056, 0, 0.02778, 0.57153],
                    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
                    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
                    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
                    916: [0, 0.68333, 0, 0.16667, 0.83334],
                    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                    923: [0, 0.68333, 0, 0.16667, 0.69445],
                    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
                    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
                    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
                    934: [0, 0.68333, 0, 0.08334, 0.66667],
                    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
                    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
                    945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
                    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
                    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
                    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
                    949: [0, 0.43056, 0, 0.08334, 0.46632],
                    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
                    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
                    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
                    953: [0, 0.43056, 0, 0.05556, 0.35394],
                    954: [0, 0.43056, 0, 0, 0.57616],
                    955: [0, 0.69444, 0, 0, 0.58334],
                    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
                    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
                    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
                    959: [0, 0.43056, 0, 0.05556, 0.48472],
                    960: [0, 0.43056, 0.03588, 0, 0.57003],
                    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
                    963: [0, 0.43056, 0.03588, 0, 0.57141],
                    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
                    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
                    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
                    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
                    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
                    969: [0, 0.43056, 0.03588, 0, 0.62245],
                    977: [0, 0.69444, 0, 0.08334, 0.59144],
                    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
                    982: [0, 0.43056, 0.02778, 0, 0.82813],
                    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                    1013: [0, 0.43056, 0, 0.05556, 0.4059],
                  },
                  "SansSerif-Bold": {
                    33: [0, 0.69444, 0, 0, 0.36667],
                    34: [0, 0.69444, 0, 0, 0.55834],
                    35: [0.19444, 0.69444, 0, 0, 0.91667],
                    36: [0.05556, 0.75, 0, 0, 0.55],
                    37: [0.05556, 0.75, 0, 0, 1.02912],
                    38: [0, 0.69444, 0, 0, 0.83056],
                    39: [0, 0.69444, 0, 0, 0.30556],
                    40: [0.25, 0.75, 0, 0, 0.42778],
                    41: [0.25, 0.75, 0, 0, 0.42778],
                    42: [0, 0.75, 0, 0, 0.55],
                    43: [0.11667, 0.61667, 0, 0, 0.85556],
                    44: [0.10556, 0.13056, 0, 0, 0.30556],
                    45: [0, 0.45833, 0, 0, 0.36667],
                    46: [0, 0.13056, 0, 0, 0.30556],
                    47: [0.25, 0.75, 0, 0, 0.55],
                    48: [0, 0.69444, 0, 0, 0.55],
                    49: [0, 0.69444, 0, 0, 0.55],
                    50: [0, 0.69444, 0, 0, 0.55],
                    51: [0, 0.69444, 0, 0, 0.55],
                    52: [0, 0.69444, 0, 0, 0.55],
                    53: [0, 0.69444, 0, 0, 0.55],
                    54: [0, 0.69444, 0, 0, 0.55],
                    55: [0, 0.69444, 0, 0, 0.55],
                    56: [0, 0.69444, 0, 0, 0.55],
                    57: [0, 0.69444, 0, 0, 0.55],
                    58: [0, 0.45833, 0, 0, 0.30556],
                    59: [0.10556, 0.45833, 0, 0, 0.30556],
                    61: [-0.09375, 0.40625, 0, 0, 0.85556],
                    63: [0, 0.69444, 0, 0, 0.51945],
                    64: [0, 0.69444, 0, 0, 0.73334],
                    65: [0, 0.69444, 0, 0, 0.73334],
                    66: [0, 0.69444, 0, 0, 0.73334],
                    67: [0, 0.69444, 0, 0, 0.70278],
                    68: [0, 0.69444, 0, 0, 0.79445],
                    69: [0, 0.69444, 0, 0, 0.64167],
                    70: [0, 0.69444, 0, 0, 0.61111],
                    71: [0, 0.69444, 0, 0, 0.73334],
                    72: [0, 0.69444, 0, 0, 0.79445],
                    73: [0, 0.69444, 0, 0, 0.33056],
                    74: [0, 0.69444, 0, 0, 0.51945],
                    75: [0, 0.69444, 0, 0, 0.76389],
                    76: [0, 0.69444, 0, 0, 0.58056],
                    77: [0, 0.69444, 0, 0, 0.97778],
                    78: [0, 0.69444, 0, 0, 0.79445],
                    79: [0, 0.69444, 0, 0, 0.79445],
                    80: [0, 0.69444, 0, 0, 0.70278],
                    81: [0.10556, 0.69444, 0, 0, 0.79445],
                    82: [0, 0.69444, 0, 0, 0.70278],
                    83: [0, 0.69444, 0, 0, 0.61111],
                    84: [0, 0.69444, 0, 0, 0.73334],
                    85: [0, 0.69444, 0, 0, 0.76389],
                    86: [0, 0.69444, 0.01528, 0, 0.73334],
                    87: [0, 0.69444, 0.01528, 0, 1.03889],
                    88: [0, 0.69444, 0, 0, 0.73334],
                    89: [0, 0.69444, 0.0275, 0, 0.73334],
                    90: [0, 0.69444, 0, 0, 0.67223],
                    91: [0.25, 0.75, 0, 0, 0.34306],
                    93: [0.25, 0.75, 0, 0, 0.34306],
                    94: [0, 0.69444, 0, 0, 0.55],
                    95: [0.35, 0.10833, 0.03056, 0, 0.55],
                    97: [0, 0.45833, 0, 0, 0.525],
                    98: [0, 0.69444, 0, 0, 0.56111],
                    99: [0, 0.45833, 0, 0, 0.48889],
                    100: [0, 0.69444, 0, 0, 0.56111],
                    101: [0, 0.45833, 0, 0, 0.51111],
                    102: [0, 0.69444, 0.07639, 0, 0.33611],
                    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
                    104: [0, 0.69444, 0, 0, 0.56111],
                    105: [0, 0.69444, 0, 0, 0.25556],
                    106: [0.19444, 0.69444, 0, 0, 0.28611],
                    107: [0, 0.69444, 0, 0, 0.53056],
                    108: [0, 0.69444, 0, 0, 0.25556],
                    109: [0, 0.45833, 0, 0, 0.86667],
                    110: [0, 0.45833, 0, 0, 0.56111],
                    111: [0, 0.45833, 0, 0, 0.55],
                    112: [0.19444, 0.45833, 0, 0, 0.56111],
                    113: [0.19444, 0.45833, 0, 0, 0.56111],
                    114: [0, 0.45833, 0.01528, 0, 0.37222],
                    115: [0, 0.45833, 0, 0, 0.42167],
                    116: [0, 0.58929, 0, 0, 0.40417],
                    117: [0, 0.45833, 0, 0, 0.56111],
                    118: [0, 0.45833, 0.01528, 0, 0.5],
                    119: [0, 0.45833, 0.01528, 0, 0.74445],
                    120: [0, 0.45833, 0, 0, 0.5],
                    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
                    122: [0, 0.45833, 0, 0, 0.47639],
                    126: [0.35, 0.34444, 0, 0, 0.55],
                    168: [0, 0.69444, 0, 0, 0.55],
                    176: [0, 0.69444, 0, 0, 0.73334],
                    180: [0, 0.69444, 0, 0, 0.55],
                    184: [0.17014, 0, 0, 0, 0.48889],
                    305: [0, 0.45833, 0, 0, 0.25556],
                    567: [0.19444, 0.45833, 0, 0, 0.28611],
                    710: [0, 0.69444, 0, 0, 0.55],
                    711: [0, 0.63542, 0, 0, 0.55],
                    713: [0, 0.63778, 0, 0, 0.55],
                    728: [0, 0.69444, 0, 0, 0.55],
                    729: [0, 0.69444, 0, 0, 0.30556],
                    730: [0, 0.69444, 0, 0, 0.73334],
                    732: [0, 0.69444, 0, 0, 0.55],
                    733: [0, 0.69444, 0, 0, 0.55],
                    915: [0, 0.69444, 0, 0, 0.58056],
                    916: [0, 0.69444, 0, 0, 0.91667],
                    920: [0, 0.69444, 0, 0, 0.85556],
                    923: [0, 0.69444, 0, 0, 0.67223],
                    926: [0, 0.69444, 0, 0, 0.73334],
                    928: [0, 0.69444, 0, 0, 0.79445],
                    931: [0, 0.69444, 0, 0, 0.79445],
                    933: [0, 0.69444, 0, 0, 0.85556],
                    934: [0, 0.69444, 0, 0, 0.79445],
                    936: [0, 0.69444, 0, 0, 0.85556],
                    937: [0, 0.69444, 0, 0, 0.79445],
                    8211: [0, 0.45833, 0.03056, 0, 0.55],
                    8212: [0, 0.45833, 0.03056, 0, 1.10001],
                    8216: [0, 0.69444, 0, 0, 0.30556],
                    8217: [0, 0.69444, 0, 0, 0.30556],
                    8220: [0, 0.69444, 0, 0, 0.55834],
                    8221: [0, 0.69444, 0, 0, 0.55834],
                  },
                  "SansSerif-Italic": {
                    33: [0, 0.69444, 0.05733, 0, 0.31945],
                    34: [0, 0.69444, 0.00316, 0, 0.5],
                    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
                    36: [0.05556, 0.75, 0.11156, 0, 0.5],
                    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
                    38: [0, 0.69444, 0.03058, 0, 0.75834],
                    39: [0, 0.69444, 0.07816, 0, 0.27778],
                    40: [0.25, 0.75, 0.13164, 0, 0.38889],
                    41: [0.25, 0.75, 0.02536, 0, 0.38889],
                    42: [0, 0.75, 0.11775, 0, 0.5],
                    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
                    44: [0.125, 0.08333, 0, 0, 0.27778],
                    45: [0, 0.44444, 0.01946, 0, 0.33333],
                    46: [0, 0.08333, 0, 0, 0.27778],
                    47: [0.25, 0.75, 0.13164, 0, 0.5],
                    48: [0, 0.65556, 0.11156, 0, 0.5],
                    49: [0, 0.65556, 0.11156, 0, 0.5],
                    50: [0, 0.65556, 0.11156, 0, 0.5],
                    51: [0, 0.65556, 0.11156, 0, 0.5],
                    52: [0, 0.65556, 0.11156, 0, 0.5],
                    53: [0, 0.65556, 0.11156, 0, 0.5],
                    54: [0, 0.65556, 0.11156, 0, 0.5],
                    55: [0, 0.65556, 0.11156, 0, 0.5],
                    56: [0, 0.65556, 0.11156, 0, 0.5],
                    57: [0, 0.65556, 0.11156, 0, 0.5],
                    58: [0, 0.44444, 0.02502, 0, 0.27778],
                    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
                    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
                    63: [0, 0.69444, 0.11809, 0, 0.47222],
                    64: [0, 0.69444, 0.07555, 0, 0.66667],
                    65: [0, 0.69444, 0, 0, 0.66667],
                    66: [0, 0.69444, 0.08293, 0, 0.66667],
                    67: [0, 0.69444, 0.11983, 0, 0.63889],
                    68: [0, 0.69444, 0.07555, 0, 0.72223],
                    69: [0, 0.69444, 0.11983, 0, 0.59722],
                    70: [0, 0.69444, 0.13372, 0, 0.56945],
                    71: [0, 0.69444, 0.11983, 0, 0.66667],
                    72: [0, 0.69444, 0.08094, 0, 0.70834],
                    73: [0, 0.69444, 0.13372, 0, 0.27778],
                    74: [0, 0.69444, 0.08094, 0, 0.47222],
                    75: [0, 0.69444, 0.11983, 0, 0.69445],
                    76: [0, 0.69444, 0, 0, 0.54167],
                    77: [0, 0.69444, 0.08094, 0, 0.875],
                    78: [0, 0.69444, 0.08094, 0, 0.70834],
                    79: [0, 0.69444, 0.07555, 0, 0.73611],
                    80: [0, 0.69444, 0.08293, 0, 0.63889],
                    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
                    82: [0, 0.69444, 0.08293, 0, 0.64584],
                    83: [0, 0.69444, 0.09205, 0, 0.55556],
                    84: [0, 0.69444, 0.13372, 0, 0.68056],
                    85: [0, 0.69444, 0.08094, 0, 0.6875],
                    86: [0, 0.69444, 0.1615, 0, 0.66667],
                    87: [0, 0.69444, 0.1615, 0, 0.94445],
                    88: [0, 0.69444, 0.13372, 0, 0.66667],
                    89: [0, 0.69444, 0.17261, 0, 0.66667],
                    90: [0, 0.69444, 0.11983, 0, 0.61111],
                    91: [0.25, 0.75, 0.15942, 0, 0.28889],
                    93: [0.25, 0.75, 0.08719, 0, 0.28889],
                    94: [0, 0.69444, 0.0799, 0, 0.5],
                    95: [0.35, 0.09444, 0.08616, 0, 0.5],
                    97: [0, 0.44444, 0.00981, 0, 0.48056],
                    98: [0, 0.69444, 0.03057, 0, 0.51667],
                    99: [0, 0.44444, 0.08336, 0, 0.44445],
                    100: [0, 0.69444, 0.09483, 0, 0.51667],
                    101: [0, 0.44444, 0.06778, 0, 0.44445],
                    102: [0, 0.69444, 0.21705, 0, 0.30556],
                    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
                    104: [0, 0.69444, 0.01778, 0, 0.51667],
                    105: [0, 0.67937, 0.09718, 0, 0.23889],
                    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
                    107: [0, 0.69444, 0.08336, 0, 0.48889],
                    108: [0, 0.69444, 0.09483, 0, 0.23889],
                    109: [0, 0.44444, 0.01778, 0, 0.79445],
                    110: [0, 0.44444, 0.01778, 0, 0.51667],
                    111: [0, 0.44444, 0.06613, 0, 0.5],
                    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
                    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
                    114: [0, 0.44444, 0.10836, 0, 0.34167],
                    115: [0, 0.44444, 0.0778, 0, 0.38333],
                    116: [0, 0.57143, 0.07225, 0, 0.36111],
                    117: [0, 0.44444, 0.04169, 0, 0.51667],
                    118: [0, 0.44444, 0.10836, 0, 0.46111],
                    119: [0, 0.44444, 0.10836, 0, 0.68334],
                    120: [0, 0.44444, 0.09169, 0, 0.46111],
                    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
                    122: [0, 0.44444, 0.08752, 0, 0.43472],
                    126: [0.35, 0.32659, 0.08826, 0, 0.5],
                    168: [0, 0.67937, 0.06385, 0, 0.5],
                    176: [0, 0.69444, 0, 0, 0.73752],
                    184: [0.17014, 0, 0, 0, 0.44445],
                    305: [0, 0.44444, 0.04169, 0, 0.23889],
                    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
                    710: [0, 0.69444, 0.0799, 0, 0.5],
                    711: [0, 0.63194, 0.08432, 0, 0.5],
                    713: [0, 0.60889, 0.08776, 0, 0.5],
                    714: [0, 0.69444, 0.09205, 0, 0.5],
                    715: [0, 0.69444, 0, 0, 0.5],
                    728: [0, 0.69444, 0.09483, 0, 0.5],
                    729: [0, 0.67937, 0.07774, 0, 0.27778],
                    730: [0, 0.69444, 0, 0, 0.73752],
                    732: [0, 0.67659, 0.08826, 0, 0.5],
                    733: [0, 0.69444, 0.09205, 0, 0.5],
                    915: [0, 0.69444, 0.13372, 0, 0.54167],
                    916: [0, 0.69444, 0, 0, 0.83334],
                    920: [0, 0.69444, 0.07555, 0, 0.77778],
                    923: [0, 0.69444, 0, 0, 0.61111],
                    926: [0, 0.69444, 0.12816, 0, 0.66667],
                    928: [0, 0.69444, 0.08094, 0, 0.70834],
                    931: [0, 0.69444, 0.11983, 0, 0.72222],
                    933: [0, 0.69444, 0.09031, 0, 0.77778],
                    934: [0, 0.69444, 0.04603, 0, 0.72222],
                    936: [0, 0.69444, 0.09031, 0, 0.77778],
                    937: [0, 0.69444, 0.08293, 0, 0.72222],
                    8211: [0, 0.44444, 0.08616, 0, 0.5],
                    8212: [0, 0.44444, 0.08616, 0, 1],
                    8216: [0, 0.69444, 0.07816, 0, 0.27778],
                    8217: [0, 0.69444, 0.07816, 0, 0.27778],
                    8220: [0, 0.69444, 0.14205, 0, 0.5],
                    8221: [0, 0.69444, 0.00316, 0, 0.5],
                  },
                  "SansSerif-Regular": {
                    33: [0, 0.69444, 0, 0, 0.31945],
                    34: [0, 0.69444, 0, 0, 0.5],
                    35: [0.19444, 0.69444, 0, 0, 0.83334],
                    36: [0.05556, 0.75, 0, 0, 0.5],
                    37: [0.05556, 0.75, 0, 0, 0.83334],
                    38: [0, 0.69444, 0, 0, 0.75834],
                    39: [0, 0.69444, 0, 0, 0.27778],
                    40: [0.25, 0.75, 0, 0, 0.38889],
                    41: [0.25, 0.75, 0, 0, 0.38889],
                    42: [0, 0.75, 0, 0, 0.5],
                    43: [0.08333, 0.58333, 0, 0, 0.77778],
                    44: [0.125, 0.08333, 0, 0, 0.27778],
                    45: [0, 0.44444, 0, 0, 0.33333],
                    46: [0, 0.08333, 0, 0, 0.27778],
                    47: [0.25, 0.75, 0, 0, 0.5],
                    48: [0, 0.65556, 0, 0, 0.5],
                    49: [0, 0.65556, 0, 0, 0.5],
                    50: [0, 0.65556, 0, 0, 0.5],
                    51: [0, 0.65556, 0, 0, 0.5],
                    52: [0, 0.65556, 0, 0, 0.5],
                    53: [0, 0.65556, 0, 0, 0.5],
                    54: [0, 0.65556, 0, 0, 0.5],
                    55: [0, 0.65556, 0, 0, 0.5],
                    56: [0, 0.65556, 0, 0, 0.5],
                    57: [0, 0.65556, 0, 0, 0.5],
                    58: [0, 0.44444, 0, 0, 0.27778],
                    59: [0.125, 0.44444, 0, 0, 0.27778],
                    61: [-0.13, 0.37, 0, 0, 0.77778],
                    63: [0, 0.69444, 0, 0, 0.47222],
                    64: [0, 0.69444, 0, 0, 0.66667],
                    65: [0, 0.69444, 0, 0, 0.66667],
                    66: [0, 0.69444, 0, 0, 0.66667],
                    67: [0, 0.69444, 0, 0, 0.63889],
                    68: [0, 0.69444, 0, 0, 0.72223],
                    69: [0, 0.69444, 0, 0, 0.59722],
                    70: [0, 0.69444, 0, 0, 0.56945],
                    71: [0, 0.69444, 0, 0, 0.66667],
                    72: [0, 0.69444, 0, 0, 0.70834],
                    73: [0, 0.69444, 0, 0, 0.27778],
                    74: [0, 0.69444, 0, 0, 0.47222],
                    75: [0, 0.69444, 0, 0, 0.69445],
                    76: [0, 0.69444, 0, 0, 0.54167],
                    77: [0, 0.69444, 0, 0, 0.875],
                    78: [0, 0.69444, 0, 0, 0.70834],
                    79: [0, 0.69444, 0, 0, 0.73611],
                    80: [0, 0.69444, 0, 0, 0.63889],
                    81: [0.125, 0.69444, 0, 0, 0.73611],
                    82: [0, 0.69444, 0, 0, 0.64584],
                    83: [0, 0.69444, 0, 0, 0.55556],
                    84: [0, 0.69444, 0, 0, 0.68056],
                    85: [0, 0.69444, 0, 0, 0.6875],
                    86: [0, 0.69444, 0.01389, 0, 0.66667],
                    87: [0, 0.69444, 0.01389, 0, 0.94445],
                    88: [0, 0.69444, 0, 0, 0.66667],
                    89: [0, 0.69444, 0.025, 0, 0.66667],
                    90: [0, 0.69444, 0, 0, 0.61111],
                    91: [0.25, 0.75, 0, 0, 0.28889],
                    93: [0.25, 0.75, 0, 0, 0.28889],
                    94: [0, 0.69444, 0, 0, 0.5],
                    95: [0.35, 0.09444, 0.02778, 0, 0.5],
                    97: [0, 0.44444, 0, 0, 0.48056],
                    98: [0, 0.69444, 0, 0, 0.51667],
                    99: [0, 0.44444, 0, 0, 0.44445],
                    100: [0, 0.69444, 0, 0, 0.51667],
                    101: [0, 0.44444, 0, 0, 0.44445],
                    102: [0, 0.69444, 0.06944, 0, 0.30556],
                    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
                    104: [0, 0.69444, 0, 0, 0.51667],
                    105: [0, 0.67937, 0, 0, 0.23889],
                    106: [0.19444, 0.67937, 0, 0, 0.26667],
                    107: [0, 0.69444, 0, 0, 0.48889],
                    108: [0, 0.69444, 0, 0, 0.23889],
                    109: [0, 0.44444, 0, 0, 0.79445],
                    110: [0, 0.44444, 0, 0, 0.51667],
                    111: [0, 0.44444, 0, 0, 0.5],
                    112: [0.19444, 0.44444, 0, 0, 0.51667],
                    113: [0.19444, 0.44444, 0, 0, 0.51667],
                    114: [0, 0.44444, 0.01389, 0, 0.34167],
                    115: [0, 0.44444, 0, 0, 0.38333],
                    116: [0, 0.57143, 0, 0, 0.36111],
                    117: [0, 0.44444, 0, 0, 0.51667],
                    118: [0, 0.44444, 0.01389, 0, 0.46111],
                    119: [0, 0.44444, 0.01389, 0, 0.68334],
                    120: [0, 0.44444, 0, 0, 0.46111],
                    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
                    122: [0, 0.44444, 0, 0, 0.43472],
                    126: [0.35, 0.32659, 0, 0, 0.5],
                    168: [0, 0.67937, 0, 0, 0.5],
                    176: [0, 0.69444, 0, 0, 0.66667],
                    184: [0.17014, 0, 0, 0, 0.44445],
                    305: [0, 0.44444, 0, 0, 0.23889],
                    567: [0.19444, 0.44444, 0, 0, 0.26667],
                    710: [0, 0.69444, 0, 0, 0.5],
                    711: [0, 0.63194, 0, 0, 0.5],
                    713: [0, 0.60889, 0, 0, 0.5],
                    714: [0, 0.69444, 0, 0, 0.5],
                    715: [0, 0.69444, 0, 0, 0.5],
                    728: [0, 0.69444, 0, 0, 0.5],
                    729: [0, 0.67937, 0, 0, 0.27778],
                    730: [0, 0.69444, 0, 0, 0.66667],
                    732: [0, 0.67659, 0, 0, 0.5],
                    733: [0, 0.69444, 0, 0, 0.5],
                    915: [0, 0.69444, 0, 0, 0.54167],
                    916: [0, 0.69444, 0, 0, 0.83334],
                    920: [0, 0.69444, 0, 0, 0.77778],
                    923: [0, 0.69444, 0, 0, 0.61111],
                    926: [0, 0.69444, 0, 0, 0.66667],
                    928: [0, 0.69444, 0, 0, 0.70834],
                    931: [0, 0.69444, 0, 0, 0.72222],
                    933: [0, 0.69444, 0, 0, 0.77778],
                    934: [0, 0.69444, 0, 0, 0.72222],
                    936: [0, 0.69444, 0, 0, 0.77778],
                    937: [0, 0.69444, 0, 0, 0.72222],
                    8211: [0, 0.44444, 0.02778, 0, 0.5],
                    8212: [0, 0.44444, 0.02778, 0, 1],
                    8216: [0, 0.69444, 0, 0, 0.27778],
                    8217: [0, 0.69444, 0, 0, 0.27778],
                    8220: [0, 0.69444, 0, 0, 0.5],
                    8221: [0, 0.69444, 0, 0, 0.5],
                  },
                  "Script-Regular": {
                    65: [0, 0.7, 0.22925, 0, 0.80253],
                    66: [0, 0.7, 0.04087, 0, 0.90757],
                    67: [0, 0.7, 0.1689, 0, 0.66619],
                    68: [0, 0.7, 0.09371, 0, 0.77443],
                    69: [0, 0.7, 0.18583, 0, 0.56162],
                    70: [0, 0.7, 0.13634, 0, 0.89544],
                    71: [0, 0.7, 0.17322, 0, 0.60961],
                    72: [0, 0.7, 0.29694, 0, 0.96919],
                    73: [0, 0.7, 0.19189, 0, 0.80907],
                    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
                    75: [0, 0.7, 0.31259, 0, 0.91364],
                    76: [0, 0.7, 0.19189, 0, 0.87373],
                    77: [0, 0.7, 0.15981, 0, 1.08031],
                    78: [0, 0.7, 0.3525, 0, 0.9015],
                    79: [0, 0.7, 0.08078, 0, 0.73787],
                    80: [0, 0.7, 0.08078, 0, 1.01262],
                    81: [0, 0.7, 0.03305, 0, 0.88282],
                    82: [0, 0.7, 0.06259, 0, 0.85],
                    83: [0, 0.7, 0.19189, 0, 0.86767],
                    84: [0, 0.7, 0.29087, 0, 0.74697],
                    85: [0, 0.7, 0.25815, 0, 0.79996],
                    86: [0, 0.7, 0.27523, 0, 0.62204],
                    87: [0, 0.7, 0.27523, 0, 0.80532],
                    88: [0, 0.7, 0.26006, 0, 0.94445],
                    89: [0, 0.7, 0.2939, 0, 0.70961],
                    90: [0, 0.7, 0.24037, 0, 0.8212],
                  },
                  "Size1-Regular": {
                    40: [0.35001, 0.85, 0, 0, 0.45834],
                    41: [0.35001, 0.85, 0, 0, 0.45834],
                    47: [0.35001, 0.85, 0, 0, 0.57778],
                    91: [0.35001, 0.85, 0, 0, 0.41667],
                    92: [0.35001, 0.85, 0, 0, 0.57778],
                    93: [0.35001, 0.85, 0, 0, 0.41667],
                    123: [0.35001, 0.85, 0, 0, 0.58334],
                    125: [0.35001, 0.85, 0, 0, 0.58334],
                    710: [0, 0.72222, 0, 0, 0.55556],
                    732: [0, 0.72222, 0, 0, 0.55556],
                    770: [0, 0.72222, 0, 0, 0.55556],
                    771: [0, 0.72222, 0, 0, 0.55556],
                    8214: [-99e-5, 0.601, 0, 0, 0.77778],
                    8593: [1e-5, 0.6, 0, 0, 0.66667],
                    8595: [1e-5, 0.6, 0, 0, 0.66667],
                    8657: [1e-5, 0.6, 0, 0, 0.77778],
                    8659: [1e-5, 0.6, 0, 0, 0.77778],
                    8719: [0.25001, 0.75, 0, 0, 0.94445],
                    8720: [0.25001, 0.75, 0, 0, 0.94445],
                    8721: [0.25001, 0.75, 0, 0, 1.05556],
                    8730: [0.35001, 0.85, 0, 0, 1],
                    8739: [-0.00599, 0.606, 0, 0, 0.33333],
                    8741: [-0.00599, 0.606, 0, 0, 0.55556],
                    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
                    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
                    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
                    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
                    8896: [0.25001, 0.75, 0, 0, 0.83334],
                    8897: [0.25001, 0.75, 0, 0, 0.83334],
                    8898: [0.25001, 0.75, 0, 0, 0.83334],
                    8899: [0.25001, 0.75, 0, 0, 0.83334],
                    8968: [0.35001, 0.85, 0, 0, 0.47222],
                    8969: [0.35001, 0.85, 0, 0, 0.47222],
                    8970: [0.35001, 0.85, 0, 0, 0.47222],
                    8971: [0.35001, 0.85, 0, 0, 0.47222],
                    9168: [-99e-5, 0.601, 0, 0, 0.66667],
                    10216: [0.35001, 0.85, 0, 0, 0.47222],
                    10217: [0.35001, 0.85, 0, 0, 0.47222],
                    10752: [0.25001, 0.75, 0, 0, 1.11111],
                    10753: [0.25001, 0.75, 0, 0, 1.11111],
                    10754: [0.25001, 0.75, 0, 0, 1.11111],
                    10756: [0.25001, 0.75, 0, 0, 0.83334],
                    10758: [0.25001, 0.75, 0, 0, 0.83334],
                  },
                  "Size2-Regular": {
                    40: [0.65002, 1.15, 0, 0, 0.59722],
                    41: [0.65002, 1.15, 0, 0, 0.59722],
                    47: [0.65002, 1.15, 0, 0, 0.81111],
                    91: [0.65002, 1.15, 0, 0, 0.47222],
                    92: [0.65002, 1.15, 0, 0, 0.81111],
                    93: [0.65002, 1.15, 0, 0, 0.47222],
                    123: [0.65002, 1.15, 0, 0, 0.66667],
                    125: [0.65002, 1.15, 0, 0, 0.66667],
                    710: [0, 0.75, 0, 0, 1],
                    732: [0, 0.75, 0, 0, 1],
                    770: [0, 0.75, 0, 0, 1],
                    771: [0, 0.75, 0, 0, 1],
                    8719: [0.55001, 1.05, 0, 0, 1.27778],
                    8720: [0.55001, 1.05, 0, 0, 1.27778],
                    8721: [0.55001, 1.05, 0, 0, 1.44445],
                    8730: [0.65002, 1.15, 0, 0, 1],
                    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
                    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
                    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
                    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
                    8896: [0.55001, 1.05, 0, 0, 1.11111],
                    8897: [0.55001, 1.05, 0, 0, 1.11111],
                    8898: [0.55001, 1.05, 0, 0, 1.11111],
                    8899: [0.55001, 1.05, 0, 0, 1.11111],
                    8968: [0.65002, 1.15, 0, 0, 0.52778],
                    8969: [0.65002, 1.15, 0, 0, 0.52778],
                    8970: [0.65002, 1.15, 0, 0, 0.52778],
                    8971: [0.65002, 1.15, 0, 0, 0.52778],
                    10216: [0.65002, 1.15, 0, 0, 0.61111],
                    10217: [0.65002, 1.15, 0, 0, 0.61111],
                    10752: [0.55001, 1.05, 0, 0, 1.51112],
                    10753: [0.55001, 1.05, 0, 0, 1.51112],
                    10754: [0.55001, 1.05, 0, 0, 1.51112],
                    10756: [0.55001, 1.05, 0, 0, 1.11111],
                    10758: [0.55001, 1.05, 0, 0, 1.11111],
                  },
                  "Size3-Regular": {
                    40: [0.95003, 1.45, 0, 0, 0.73611],
                    41: [0.95003, 1.45, 0, 0, 0.73611],
                    47: [0.95003, 1.45, 0, 0, 1.04445],
                    91: [0.95003, 1.45, 0, 0, 0.52778],
                    92: [0.95003, 1.45, 0, 0, 1.04445],
                    93: [0.95003, 1.45, 0, 0, 0.52778],
                    123: [0.95003, 1.45, 0, 0, 0.75],
                    125: [0.95003, 1.45, 0, 0, 0.75],
                    710: [0, 0.75, 0, 0, 1.44445],
                    732: [0, 0.75, 0, 0, 1.44445],
                    770: [0, 0.75, 0, 0, 1.44445],
                    771: [0, 0.75, 0, 0, 1.44445],
                    8730: [0.95003, 1.45, 0, 0, 1],
                    8968: [0.95003, 1.45, 0, 0, 0.58334],
                    8969: [0.95003, 1.45, 0, 0, 0.58334],
                    8970: [0.95003, 1.45, 0, 0, 0.58334],
                    8971: [0.95003, 1.45, 0, 0, 0.58334],
                    10216: [0.95003, 1.45, 0, 0, 0.75],
                    10217: [0.95003, 1.45, 0, 0, 0.75],
                  },
                  "Size4-Regular": {
                    40: [1.25003, 1.75, 0, 0, 0.79167],
                    41: [1.25003, 1.75, 0, 0, 0.79167],
                    47: [1.25003, 1.75, 0, 0, 1.27778],
                    91: [1.25003, 1.75, 0, 0, 0.58334],
                    92: [1.25003, 1.75, 0, 0, 1.27778],
                    93: [1.25003, 1.75, 0, 0, 0.58334],
                    123: [1.25003, 1.75, 0, 0, 0.80556],
                    125: [1.25003, 1.75, 0, 0, 0.80556],
                    710: [0, 0.825, 0, 0, 1.8889],
                    732: [0, 0.825, 0, 0, 1.8889],
                    770: [0, 0.825, 0, 0, 1.8889],
                    771: [0, 0.825, 0, 0, 1.8889],
                    8730: [1.25003, 1.75, 0, 0, 1],
                    8968: [1.25003, 1.75, 0, 0, 0.63889],
                    8969: [1.25003, 1.75, 0, 0, 0.63889],
                    8970: [1.25003, 1.75, 0, 0, 0.63889],
                    8971: [1.25003, 1.75, 0, 0, 0.63889],
                    9115: [0.64502, 1.155, 0, 0, 0.875],
                    9116: [1e-5, 0.6, 0, 0, 0.875],
                    9117: [0.64502, 1.155, 0, 0, 0.875],
                    9118: [0.64502, 1.155, 0, 0, 0.875],
                    9119: [1e-5, 0.6, 0, 0, 0.875],
                    9120: [0.64502, 1.155, 0, 0, 0.875],
                    9121: [0.64502, 1.155, 0, 0, 0.66667],
                    9122: [-99e-5, 0.601, 0, 0, 0.66667],
                    9123: [0.64502, 1.155, 0, 0, 0.66667],
                    9124: [0.64502, 1.155, 0, 0, 0.66667],
                    9125: [-99e-5, 0.601, 0, 0, 0.66667],
                    9126: [0.64502, 1.155, 0, 0, 0.66667],
                    9127: [1e-5, 0.9, 0, 0, 0.88889],
                    9128: [0.65002, 1.15, 0, 0, 0.88889],
                    9129: [0.90001, 0, 0, 0, 0.88889],
                    9130: [0, 0.3, 0, 0, 0.88889],
                    9131: [1e-5, 0.9, 0, 0, 0.88889],
                    9132: [0.65002, 1.15, 0, 0, 0.88889],
                    9133: [0.90001, 0, 0, 0, 0.88889],
                    9143: [0.88502, 0.915, 0, 0, 1.05556],
                    10216: [1.25003, 1.75, 0, 0, 0.80556],
                    10217: [1.25003, 1.75, 0, 0, 0.80556],
                    57344: [-0.00499, 0.605, 0, 0, 1.05556],
                    57345: [-0.00499, 0.605, 0, 0, 1.05556],
                    57680: [0, 0.12, 0, 0, 0.45],
                    57681: [0, 0.12, 0, 0, 0.45],
                    57682: [0, 0.12, 0, 0, 0.45],
                    57683: [0, 0.12, 0, 0, 0.45],
                  },
                  "Typewriter-Regular": {
                    32: [0, 0, 0, 0, 0.525],
                    33: [0, 0.61111, 0, 0, 0.525],
                    34: [0, 0.61111, 0, 0, 0.525],
                    35: [0, 0.61111, 0, 0, 0.525],
                    36: [0.08333, 0.69444, 0, 0, 0.525],
                    37: [0.08333, 0.69444, 0, 0, 0.525],
                    38: [0, 0.61111, 0, 0, 0.525],
                    39: [0, 0.61111, 0, 0, 0.525],
                    40: [0.08333, 0.69444, 0, 0, 0.525],
                    41: [0.08333, 0.69444, 0, 0, 0.525],
                    42: [0, 0.52083, 0, 0, 0.525],
                    43: [-0.08056, 0.53055, 0, 0, 0.525],
                    44: [0.13889, 0.125, 0, 0, 0.525],
                    45: [-0.08056, 0.53055, 0, 0, 0.525],
                    46: [0, 0.125, 0, 0, 0.525],
                    47: [0.08333, 0.69444, 0, 0, 0.525],
                    48: [0, 0.61111, 0, 0, 0.525],
                    49: [0, 0.61111, 0, 0, 0.525],
                    50: [0, 0.61111, 0, 0, 0.525],
                    51: [0, 0.61111, 0, 0, 0.525],
                    52: [0, 0.61111, 0, 0, 0.525],
                    53: [0, 0.61111, 0, 0, 0.525],
                    54: [0, 0.61111, 0, 0, 0.525],
                    55: [0, 0.61111, 0, 0, 0.525],
                    56: [0, 0.61111, 0, 0, 0.525],
                    57: [0, 0.61111, 0, 0, 0.525],
                    58: [0, 0.43056, 0, 0, 0.525],
                    59: [0.13889, 0.43056, 0, 0, 0.525],
                    60: [-0.05556, 0.55556, 0, 0, 0.525],
                    61: [-0.19549, 0.41562, 0, 0, 0.525],
                    62: [-0.05556, 0.55556, 0, 0, 0.525],
                    63: [0, 0.61111, 0, 0, 0.525],
                    64: [0, 0.61111, 0, 0, 0.525],
                    65: [0, 0.61111, 0, 0, 0.525],
                    66: [0, 0.61111, 0, 0, 0.525],
                    67: [0, 0.61111, 0, 0, 0.525],
                    68: [0, 0.61111, 0, 0, 0.525],
                    69: [0, 0.61111, 0, 0, 0.525],
                    70: [0, 0.61111, 0, 0, 0.525],
                    71: [0, 0.61111, 0, 0, 0.525],
                    72: [0, 0.61111, 0, 0, 0.525],
                    73: [0, 0.61111, 0, 0, 0.525],
                    74: [0, 0.61111, 0, 0, 0.525],
                    75: [0, 0.61111, 0, 0, 0.525],
                    76: [0, 0.61111, 0, 0, 0.525],
                    77: [0, 0.61111, 0, 0, 0.525],
                    78: [0, 0.61111, 0, 0, 0.525],
                    79: [0, 0.61111, 0, 0, 0.525],
                    80: [0, 0.61111, 0, 0, 0.525],
                    81: [0.13889, 0.61111, 0, 0, 0.525],
                    82: [0, 0.61111, 0, 0, 0.525],
                    83: [0, 0.61111, 0, 0, 0.525],
                    84: [0, 0.61111, 0, 0, 0.525],
                    85: [0, 0.61111, 0, 0, 0.525],
                    86: [0, 0.61111, 0, 0, 0.525],
                    87: [0, 0.61111, 0, 0, 0.525],
                    88: [0, 0.61111, 0, 0, 0.525],
                    89: [0, 0.61111, 0, 0, 0.525],
                    90: [0, 0.61111, 0, 0, 0.525],
                    91: [0.08333, 0.69444, 0, 0, 0.525],
                    92: [0.08333, 0.69444, 0, 0, 0.525],
                    93: [0.08333, 0.69444, 0, 0, 0.525],
                    94: [0, 0.61111, 0, 0, 0.525],
                    95: [0.09514, 0, 0, 0, 0.525],
                    96: [0, 0.61111, 0, 0, 0.525],
                    97: [0, 0.43056, 0, 0, 0.525],
                    98: [0, 0.61111, 0, 0, 0.525],
                    99: [0, 0.43056, 0, 0, 0.525],
                    100: [0, 0.61111, 0, 0, 0.525],
                    101: [0, 0.43056, 0, 0, 0.525],
                    102: [0, 0.61111, 0, 0, 0.525],
                    103: [0.22222, 0.43056, 0, 0, 0.525],
                    104: [0, 0.61111, 0, 0, 0.525],
                    105: [0, 0.61111, 0, 0, 0.525],
                    106: [0.22222, 0.61111, 0, 0, 0.525],
                    107: [0, 0.61111, 0, 0, 0.525],
                    108: [0, 0.61111, 0, 0, 0.525],
                    109: [0, 0.43056, 0, 0, 0.525],
                    110: [0, 0.43056, 0, 0, 0.525],
                    111: [0, 0.43056, 0, 0, 0.525],
                    112: [0.22222, 0.43056, 0, 0, 0.525],
                    113: [0.22222, 0.43056, 0, 0, 0.525],
                    114: [0, 0.43056, 0, 0, 0.525],
                    115: [0, 0.43056, 0, 0, 0.525],
                    116: [0, 0.55358, 0, 0, 0.525],
                    117: [0, 0.43056, 0, 0, 0.525],
                    118: [0, 0.43056, 0, 0, 0.525],
                    119: [0, 0.43056, 0, 0, 0.525],
                    120: [0, 0.43056, 0, 0, 0.525],
                    121: [0.22222, 0.43056, 0, 0, 0.525],
                    122: [0, 0.43056, 0, 0, 0.525],
                    123: [0.08333, 0.69444, 0, 0, 0.525],
                    124: [0.08333, 0.69444, 0, 0, 0.525],
                    125: [0.08333, 0.69444, 0, 0, 0.525],
                    126: [0, 0.61111, 0, 0, 0.525],
                    127: [0, 0.61111, 0, 0, 0.525],
                    160: [0, 0, 0, 0, 0.525],
                    176: [0, 0.61111, 0, 0, 0.525],
                    184: [0.19445, 0, 0, 0, 0.525],
                    305: [0, 0.43056, 0, 0, 0.525],
                    567: [0.22222, 0.43056, 0, 0, 0.525],
                    711: [0, 0.56597, 0, 0, 0.525],
                    713: [0, 0.56555, 0, 0, 0.525],
                    714: [0, 0.61111, 0, 0, 0.525],
                    715: [0, 0.61111, 0, 0, 0.525],
                    728: [0, 0.61111, 0, 0, 0.525],
                    730: [0, 0.61111, 0, 0, 0.525],
                    770: [0, 0.61111, 0, 0, 0.525],
                    771: [0, 0.61111, 0, 0, 0.525],
                    776: [0, 0.61111, 0, 0, 0.525],
                    915: [0, 0.61111, 0, 0, 0.525],
                    916: [0, 0.61111, 0, 0, 0.525],
                    920: [0, 0.61111, 0, 0, 0.525],
                    923: [0, 0.61111, 0, 0, 0.525],
                    926: [0, 0.61111, 0, 0, 0.525],
                    928: [0, 0.61111, 0, 0, 0.525],
                    931: [0, 0.61111, 0, 0, 0.525],
                    933: [0, 0.61111, 0, 0, 0.525],
                    934: [0, 0.61111, 0, 0, 0.525],
                    936: [0, 0.61111, 0, 0, 0.525],
                    937: [0, 0.61111, 0, 0, 0.525],
                    8216: [0, 0.61111, 0, 0, 0.525],
                    8217: [0, 0.61111, 0, 0, 0.525],
                    8242: [0, 0.61111, 0, 0, 0.525],
                    9251: [0.11111, 0.21944, 0, 0, 0.525],
                  },
                },
                ut = {
                  slant: [0.25, 0.25, 0.25],
                  space: [0, 0, 0],
                  stretch: [0, 0, 0],
                  shrink: [0, 0, 0],
                  xHeight: [0.431, 0.431, 0.431],
                  quad: [1, 1.171, 1.472],
                  extraSpace: [0, 0, 0],
                  num1: [0.677, 0.732, 0.925],
                  num2: [0.394, 0.384, 0.387],
                  num3: [0.444, 0.471, 0.504],
                  denom1: [0.686, 0.752, 1.025],
                  denom2: [0.345, 0.344, 0.532],
                  sup1: [0.413, 0.503, 0.504],
                  sup2: [0.363, 0.431, 0.404],
                  sup3: [0.289, 0.286, 0.294],
                  sub1: [0.15, 0.143, 0.2],
                  sub2: [0.247, 0.286, 0.4],
                  supDrop: [0.386, 0.353, 0.494],
                  subDrop: [0.05, 0.071, 0.1],
                  delim1: [2.39, 1.7, 1.98],
                  delim2: [1.01, 1.157, 1.42],
                  axisHeight: [0.25, 0.25, 0.25],
                  defaultRuleThickness: [0.04, 0.049, 0.049],
                  bigOpSpacing1: [0.111, 0.111, 0.111],
                  bigOpSpacing2: [0.166, 0.166, 0.166],
                  bigOpSpacing3: [0.2, 0.2, 0.2],
                  bigOpSpacing4: [0.6, 0.611, 0.611],
                  bigOpSpacing5: [0.1, 0.143, 0.143],
                  sqrtRuleThickness: [0.04, 0.04, 0.04],
                  ptPerEm: [10, 10, 10],
                  doubleRuleSep: [0.2, 0.2, 0.2],
                },
                ht = {
                  Å: "A",
                  Ç: "C",
                  Ð: "D",
                  Þ: "o",
                  å: "a",
                  ç: "c",
                  ð: "d",
                  þ: "o",
                  А: "A",
                  Б: "B",
                  В: "B",
                  Г: "F",
                  Д: "A",
                  Е: "E",
                  Ж: "K",
                  З: "3",
                  И: "N",
                  Й: "N",
                  К: "K",
                  Л: "N",
                  М: "M",
                  Н: "H",
                  О: "O",
                  П: "N",
                  Р: "P",
                  С: "C",
                  Т: "T",
                  У: "y",
                  Ф: "O",
                  Х: "X",
                  Ц: "U",
                  Ч: "h",
                  Ш: "W",
                  Щ: "W",
                  Ъ: "B",
                  Ы: "X",
                  Ь: "B",
                  Э: "3",
                  Ю: "X",
                  Я: "R",
                  а: "a",
                  б: "b",
                  в: "a",
                  г: "r",
                  д: "y",
                  е: "e",
                  ж: "m",
                  з: "e",
                  и: "n",
                  й: "n",
                  к: "n",
                  л: "n",
                  м: "m",
                  н: "n",
                  о: "o",
                  п: "n",
                  р: "p",
                  с: "c",
                  т: "o",
                  у: "y",
                  ф: "b",
                  х: "x",
                  ц: "n",
                  ч: "n",
                  ш: "w",
                  щ: "w",
                  ъ: "a",
                  ы: "m",
                  ь: "a",
                  э: "e",
                  ю: "m",
                  я: "r",
                };
              function ct(t, e, n) {
                if (!lt[e])
                  throw new Error(
                    "Font metrics not found for font: " + e + "."
                  );
                var r = t.charCodeAt(0);
                t[0] in ht && (r = ht[t[0]].charCodeAt(0));
                var i = lt[e][r];
                if ((i || "text" !== n || ($(r) && (i = lt[e][77])), i))
                  return {
                    depth: i[0],
                    height: i[1],
                    italic: i[2],
                    skew: i[3],
                    width: i[4],
                  };
              }
              var ft = {},
                mt = {
                  "accent-token": 1,
                  bin: 1,
                  close: 1,
                  inner: 1,
                  mathord: 1,
                  "op-token": 1,
                  open: 1,
                  punct: 1,
                  rel: 1,
                  spacing: 1,
                  textord: 1,
                },
                dt = { math: {}, text: {} },
                pt = dt;
              function vt(t, e, n, r, i, a) {
                (dt[t][i] = { font: e, group: n, replace: r }),
                  a && r && (dt[t][r] = dt[t][i]);
              }
              var gt = "main",
                yt = "ams",
                bt = "bin",
                xt = "mathord",
                wt = "op-token",
                kt = "rel",
                St = "spacing";
              vt("math", gt, kt, "≡", "\\equiv", !0),
                vt("math", gt, kt, "≺", "\\prec", !0),
                vt("math", gt, kt, "≻", "\\succ", !0),
                vt("math", gt, kt, "∼", "\\sim", !0),
                vt("math", gt, kt, "⊥", "\\perp"),
                vt("math", gt, kt, "⪯", "\\preceq", !0),
                vt("math", gt, kt, "⪰", "\\succeq", !0),
                vt("math", gt, kt, "≃", "\\simeq", !0),
                vt("math", gt, kt, "∣", "\\mid", !0),
                vt("math", gt, kt, "≪", "\\ll", !0),
                vt("math", gt, kt, "≫", "\\gg", !0),
                vt("math", gt, kt, "≍", "\\asymp", !0),
                vt("math", gt, kt, "∥", "\\parallel"),
                vt("math", gt, kt, "⋈", "\\bowtie", !0),
                vt("math", gt, kt, "⌣", "\\smile", !0),
                vt("math", gt, kt, "⊑", "\\sqsubseteq", !0),
                vt("math", gt, kt, "⊒", "\\sqsupseteq", !0),
                vt("math", gt, kt, "≐", "\\doteq", !0),
                vt("math", gt, kt, "⌢", "\\frown", !0),
                vt("math", gt, kt, "∋", "\\ni", !0),
                vt("math", gt, kt, "∝", "\\propto", !0),
                vt("math", gt, kt, "⊢", "\\vdash", !0),
                vt("math", gt, kt, "⊣", "\\dashv", !0),
                vt("math", gt, kt, "∋", "\\owns"),
                vt("math", gt, "punct", ".", "\\ldotp"),
                vt("math", gt, "punct", "⋅", "\\cdotp"),
                vt("math", gt, "textord", "#", "\\#"),
                vt("text", gt, "textord", "#", "\\#"),
                vt("math", gt, "textord", "&", "\\&"),
                vt("text", gt, "textord", "&", "\\&"),
                vt("math", gt, "textord", "ℵ", "\\aleph", !0),
                vt("math", gt, "textord", "∀", "\\forall", !0),
                vt("math", gt, "textord", "ℏ", "\\hbar", !0),
                vt("math", gt, "textord", "∃", "\\exists", !0),
                vt("math", gt, "textord", "∇", "\\nabla", !0),
                vt("math", gt, "textord", "♭", "\\flat", !0),
                vt("math", gt, "textord", "ℓ", "\\ell", !0),
                vt("math", gt, "textord", "♮", "\\natural", !0),
                vt("math", gt, "textord", "♣", "\\clubsuit", !0),
                vt("math", gt, "textord", "℘", "\\wp", !0),
                vt("math", gt, "textord", "♯", "\\sharp", !0),
                vt("math", gt, "textord", "♢", "\\diamondsuit", !0),
                vt("math", gt, "textord", "ℜ", "\\Re", !0),
                vt("math", gt, "textord", "♡", "\\heartsuit", !0),
                vt("math", gt, "textord", "ℑ", "\\Im", !0),
                vt("math", gt, "textord", "♠", "\\spadesuit", !0),
                vt("text", gt, "textord", "§", "\\S", !0),
                vt("text", gt, "textord", "¶", "\\P", !0),
                vt("math", gt, "textord", "†", "\\dag"),
                vt("text", gt, "textord", "†", "\\dag"),
                vt("text", gt, "textord", "†", "\\textdagger"),
                vt("math", gt, "textord", "‡", "\\ddag"),
                vt("text", gt, "textord", "‡", "\\ddag"),
                vt("text", gt, "textord", "†", "\\textdaggerdbl"),
                vt("math", gt, "close", "⎱", "\\rmoustache", !0),
                vt("math", gt, "open", "⎰", "\\lmoustache", !0),
                vt("math", gt, "close", "⟯", "\\rgroup", !0),
                vt("math", gt, "open", "⟮", "\\lgroup", !0),
                vt("math", gt, bt, "∓", "\\mp", !0),
                vt("math", gt, bt, "⊖", "\\ominus", !0),
                vt("math", gt, bt, "⊎", "\\uplus", !0),
                vt("math", gt, bt, "⊓", "\\sqcap", !0),
                vt("math", gt, bt, "∗", "\\ast"),
                vt("math", gt, bt, "⊔", "\\sqcup", !0),
                vt("math", gt, bt, "◯", "\\bigcirc"),
                vt("math", gt, bt, "∙", "\\bullet"),
                vt("math", gt, bt, "‡", "\\ddagger"),
                vt("math", gt, bt, "≀", "\\wr", !0),
                vt("math", gt, bt, "⨿", "\\amalg"),
                vt("math", gt, bt, "&", "\\And"),
                vt("math", gt, kt, "⟵", "\\longleftarrow", !0),
                vt("math", gt, kt, "⇐", "\\Leftarrow", !0),
                vt("math", gt, kt, "⟸", "\\Longleftarrow", !0),
                vt("math", gt, kt, "⟶", "\\longrightarrow", !0),
                vt("math", gt, kt, "⇒", "\\Rightarrow", !0),
                vt("math", gt, kt, "⟹", "\\Longrightarrow", !0),
                vt("math", gt, kt, "↔", "\\leftrightarrow", !0),
                vt("math", gt, kt, "⟷", "\\longleftrightarrow", !0),
                vt("math", gt, kt, "⇔", "\\Leftrightarrow", !0),
                vt("math", gt, kt, "⟺", "\\Longleftrightarrow", !0),
                vt("math", gt, kt, "↦", "\\mapsto", !0),
                vt("math", gt, kt, "⟼", "\\longmapsto", !0),
                vt("math", gt, kt, "↗", "\\nearrow", !0),
                vt("math", gt, kt, "↩", "\\hookleftarrow", !0),
                vt("math", gt, kt, "↪", "\\hookrightarrow", !0),
                vt("math", gt, kt, "↘", "\\searrow", !0),
                vt("math", gt, kt, "↼", "\\leftharpoonup", !0),
                vt("math", gt, kt, "⇀", "\\rightharpoonup", !0),
                vt("math", gt, kt, "↙", "\\swarrow", !0),
                vt("math", gt, kt, "↽", "\\leftharpoondown", !0),
                vt("math", gt, kt, "⇁", "\\rightharpoondown", !0),
                vt("math", gt, kt, "↖", "\\nwarrow", !0),
                vt("math", gt, kt, "⇌", "\\rightleftharpoons", !0),
                vt("math", yt, kt, "≮", "\\nless", !0),
                vt("math", yt, kt, "", "\\nleqslant"),
                vt("math", yt, kt, "", "\\nleqq"),
                vt("math", yt, kt, "⪇", "\\lneq", !0),
                vt("math", yt, kt, "≨", "\\lneqq", !0),
                vt("math", yt, kt, "", "\\lvertneqq"),
                vt("math", yt, kt, "⋦", "\\lnsim", !0),
                vt("math", yt, kt, "⪉", "\\lnapprox", !0),
                vt("math", yt, kt, "⊀", "\\nprec", !0),
                vt("math", yt, kt, "⋠", "\\npreceq", !0),
                vt("math", yt, kt, "⋨", "\\precnsim", !0),
                vt("math", yt, kt, "⪹", "\\precnapprox", !0),
                vt("math", yt, kt, "≁", "\\nsim", !0),
                vt("math", yt, kt, "", "\\nshortmid"),
                vt("math", yt, kt, "∤", "\\nmid", !0),
                vt("math", yt, kt, "⊬", "\\nvdash", !0),
                vt("math", yt, kt, "⊭", "\\nvDash", !0),
                vt("math", yt, kt, "⋪", "\\ntriangleleft"),
                vt("math", yt, kt, "⋬", "\\ntrianglelefteq", !0),
                vt("math", yt, kt, "⊊", "\\subsetneq", !0),
                vt("math", yt, kt, "", "\\varsubsetneq"),
                vt("math", yt, kt, "⫋", "\\subsetneqq", !0),
                vt("math", yt, kt, "", "\\varsubsetneqq"),
                vt("math", yt, kt, "≯", "\\ngtr", !0),
                vt("math", yt, kt, "", "\\ngeqslant"),
                vt("math", yt, kt, "", "\\ngeqq"),
                vt("math", yt, kt, "⪈", "\\gneq", !0),
                vt("math", yt, kt, "≩", "\\gneqq", !0),
                vt("math", yt, kt, "", "\\gvertneqq"),
                vt("math", yt, kt, "⋧", "\\gnsim", !0),
                vt("math", yt, kt, "⪊", "\\gnapprox", !0),
                vt("math", yt, kt, "⊁", "\\nsucc", !0),
                vt("math", yt, kt, "⋡", "\\nsucceq", !0),
                vt("math", yt, kt, "⋩", "\\succnsim", !0),
                vt("math", yt, kt, "⪺", "\\succnapprox", !0),
                vt("math", yt, kt, "≆", "\\ncong", !0),
                vt("math", yt, kt, "", "\\nshortparallel"),
                vt("math", yt, kt, "∦", "\\nparallel", !0),
                vt("math", yt, kt, "⊯", "\\nVDash", !0),
                vt("math", yt, kt, "⋫", "\\ntriangleright"),
                vt("math", yt, kt, "⋭", "\\ntrianglerighteq", !0),
                vt("math", yt, kt, "", "\\nsupseteqq"),
                vt("math", yt, kt, "⊋", "\\supsetneq", !0),
                vt("math", yt, kt, "", "\\varsupsetneq"),
                vt("math", yt, kt, "⫌", "\\supsetneqq", !0),
                vt("math", yt, kt, "", "\\varsupsetneqq"),
                vt("math", yt, kt, "⊮", "\\nVdash", !0),
                vt("math", yt, kt, "⪵", "\\precneqq", !0),
                vt("math", yt, kt, "⪶", "\\succneqq", !0),
                vt("math", yt, kt, "", "\\nsubseteqq"),
                vt("math", yt, bt, "⊴", "\\unlhd"),
                vt("math", yt, bt, "⊵", "\\unrhd"),
                vt("math", yt, kt, "↚", "\\nleftarrow", !0),
                vt("math", yt, kt, "↛", "\\nrightarrow", !0),
                vt("math", yt, kt, "⇍", "\\nLeftarrow", !0),
                vt("math", yt, kt, "⇏", "\\nRightarrow", !0),
                vt("math", yt, kt, "↮", "\\nleftrightarrow", !0),
                vt("math", yt, kt, "⇎", "\\nLeftrightarrow", !0),
                vt("math", yt, kt, "△", "\\vartriangle"),
                vt("math", yt, "textord", "ℏ", "\\hslash"),
                vt("math", yt, "textord", "▽", "\\triangledown"),
                vt("math", yt, "textord", "◊", "\\lozenge"),
                vt("math", yt, "textord", "Ⓢ", "\\circledS"),
                vt("math", yt, "textord", "®", "\\circledR"),
                vt("text", yt, "textord", "®", "\\circledR"),
                vt("math", yt, "textord", "∡", "\\measuredangle", !0),
                vt("math", yt, "textord", "∄", "\\nexists"),
                vt("math", yt, "textord", "℧", "\\mho"),
                vt("math", yt, "textord", "Ⅎ", "\\Finv", !0),
                vt("math", yt, "textord", "⅁", "\\Game", !0),
                vt("math", yt, "textord", "k", "\\Bbbk"),
                vt("math", yt, "textord", "‵", "\\backprime"),
                vt("math", yt, "textord", "▲", "\\blacktriangle"),
                vt("math", yt, "textord", "▼", "\\blacktriangledown"),
                vt("math", yt, "textord", "■", "\\blacksquare"),
                vt("math", yt, "textord", "⧫", "\\blacklozenge"),
                vt("math", yt, "textord", "★", "\\bigstar"),
                vt("math", yt, "textord", "∢", "\\sphericalangle", !0),
                vt("math", yt, "textord", "∁", "\\complement", !0),
                vt("math", yt, "textord", "ð", "\\eth", !0),
                vt("math", yt, "textord", "╱", "\\diagup"),
                vt("math", yt, "textord", "╲", "\\diagdown"),
                vt("math", yt, "textord", "□", "\\square"),
                vt("math", yt, "textord", "□", "\\Box"),
                vt("math", yt, "textord", "◊", "\\Diamond"),
                vt("math", yt, "textord", "¥", "\\yen", !0),
                vt("text", yt, "textord", "¥", "\\yen", !0),
                vt("math", yt, "textord", "✓", "\\checkmark", !0),
                vt("text", yt, "textord", "✓", "\\checkmark"),
                vt("math", yt, "textord", "ℶ", "\\beth", !0),
                vt("math", yt, "textord", "ℸ", "\\daleth", !0),
                vt("math", yt, "textord", "ℷ", "\\gimel", !0),
                vt("math", yt, "textord", "ϝ", "\\digamma"),
                vt("math", yt, "textord", "ϰ", "\\varkappa"),
                vt("math", yt, "open", "┌", "\\ulcorner", !0),
                vt("math", yt, "close", "┐", "\\urcorner", !0),
                vt("math", yt, "open", "└", "\\llcorner", !0),
                vt("math", yt, "close", "┘", "\\lrcorner", !0),
                vt("math", yt, kt, "≦", "\\leqq", !0),
                vt("math", yt, kt, "⩽", "\\leqslant", !0),
                vt("math", yt, kt, "⪕", "\\eqslantless", !0),
                vt("math", yt, kt, "≲", "\\lesssim", !0),
                vt("math", yt, kt, "⪅", "\\lessapprox", !0),
                vt("math", yt, kt, "≊", "\\approxeq", !0),
                vt("math", yt, bt, "⋖", "\\lessdot"),
                vt("math", yt, kt, "⋘", "\\lll", !0),
                vt("math", yt, kt, "≶", "\\lessgtr", !0),
                vt("math", yt, kt, "⋚", "\\lesseqgtr", !0),
                vt("math", yt, kt, "⪋", "\\lesseqqgtr", !0),
                vt("math", yt, kt, "≑", "\\doteqdot"),
                vt("math", yt, kt, "≓", "\\risingdotseq", !0),
                vt("math", yt, kt, "≒", "\\fallingdotseq", !0),
                vt("math", yt, kt, "∽", "\\backsim", !0),
                vt("math", yt, kt, "⋍", "\\backsimeq", !0),
                vt("math", yt, kt, "⫅", "\\subseteqq", !0),
                vt("math", yt, kt, "⋐", "\\Subset", !0),
                vt("math", yt, kt, "⊏", "\\sqsubset", !0),
                vt("math", yt, kt, "≼", "\\preccurlyeq", !0),
                vt("math", yt, kt, "⋞", "\\curlyeqprec", !0),
                vt("math", yt, kt, "≾", "\\precsim", !0),
                vt("math", yt, kt, "⪷", "\\precapprox", !0),
                vt("math", yt, kt, "⊲", "\\vartriangleleft"),
                vt("math", yt, kt, "⊴", "\\trianglelefteq"),
                vt("math", yt, kt, "⊨", "\\vDash", !0),
                vt("math", yt, kt, "⊪", "\\Vvdash", !0),
                vt("math", yt, kt, "⌣", "\\smallsmile"),
                vt("math", yt, kt, "⌢", "\\smallfrown"),
                vt("math", yt, kt, "≏", "\\bumpeq", !0),
                vt("math", yt, kt, "≎", "\\Bumpeq", !0),
                vt("math", yt, kt, "≧", "\\geqq", !0),
                vt("math", yt, kt, "⩾", "\\geqslant", !0),
                vt("math", yt, kt, "⪖", "\\eqslantgtr", !0),
                vt("math", yt, kt, "≳", "\\gtrsim", !0),
                vt("math", yt, kt, "⪆", "\\gtrapprox", !0),
                vt("math", yt, bt, "⋗", "\\gtrdot"),
                vt("math", yt, kt, "⋙", "\\ggg", !0),
                vt("math", yt, kt, "≷", "\\gtrless", !0),
                vt("math", yt, kt, "⋛", "\\gtreqless", !0),
                vt("math", yt, kt, "⪌", "\\gtreqqless", !0),
                vt("math", yt, kt, "≖", "\\eqcirc", !0),
                vt("math", yt, kt, "≗", "\\circeq", !0),
                vt("math", yt, kt, "≜", "\\triangleq", !0),
                vt("math", yt, kt, "∼", "\\thicksim"),
                vt("math", yt, kt, "≈", "\\thickapprox"),
                vt("math", yt, kt, "⫆", "\\supseteqq", !0),
                vt("math", yt, kt, "⋑", "\\Supset", !0),
                vt("math", yt, kt, "⊐", "\\sqsupset", !0),
                vt("math", yt, kt, "≽", "\\succcurlyeq", !0),
                vt("math", yt, kt, "⋟", "\\curlyeqsucc", !0),
                vt("math", yt, kt, "≿", "\\succsim", !0),
                vt("math", yt, kt, "⪸", "\\succapprox", !0),
                vt("math", yt, kt, "⊳", "\\vartriangleright"),
                vt("math", yt, kt, "⊵", "\\trianglerighteq"),
                vt("math", yt, kt, "⊩", "\\Vdash", !0),
                vt("math", yt, kt, "∣", "\\shortmid"),
                vt("math", yt, kt, "∥", "\\shortparallel"),
                vt("math", yt, kt, "≬", "\\between", !0),
                vt("math", yt, kt, "⋔", "\\pitchfork", !0),
                vt("math", yt, kt, "∝", "\\varpropto"),
                vt("math", yt, kt, "◀", "\\blacktriangleleft"),
                vt("math", yt, kt, "∴", "\\therefore", !0),
                vt("math", yt, kt, "∍", "\\backepsilon"),
                vt("math", yt, kt, "▶", "\\blacktriangleright"),
                vt("math", yt, kt, "∵", "\\because", !0),
                vt("math", yt, kt, "⋘", "\\llless"),
                vt("math", yt, kt, "⋙", "\\gggtr"),
                vt("math", yt, bt, "⊲", "\\lhd"),
                vt("math", yt, bt, "⊳", "\\rhd"),
                vt("math", yt, kt, "≂", "\\eqsim", !0),
                vt("math", gt, kt, "⋈", "\\Join"),
                vt("math", yt, kt, "≑", "\\Doteq", !0),
                vt("math", yt, bt, "∔", "\\dotplus", !0),
                vt("math", yt, bt, "∖", "\\smallsetminus"),
                vt("math", yt, bt, "⋒", "\\Cap", !0),
                vt("math", yt, bt, "⋓", "\\Cup", !0),
                vt("math", yt, bt, "⩞", "\\doublebarwedge", !0),
                vt("math", yt, bt, "⊟", "\\boxminus", !0),
                vt("math", yt, bt, "⊞", "\\boxplus", !0),
                vt("math", yt, bt, "⋇", "\\divideontimes", !0),
                vt("math", yt, bt, "⋉", "\\ltimes", !0),
                vt("math", yt, bt, "⋊", "\\rtimes", !0),
                vt("math", yt, bt, "⋋", "\\leftthreetimes", !0),
                vt("math", yt, bt, "⋌", "\\rightthreetimes", !0),
                vt("math", yt, bt, "⋏", "\\curlywedge", !0),
                vt("math", yt, bt, "⋎", "\\curlyvee", !0),
                vt("math", yt, bt, "⊝", "\\circleddash", !0),
                vt("math", yt, bt, "⊛", "\\circledast", !0),
                vt("math", yt, bt, "⋅", "\\centerdot"),
                vt("math", yt, bt, "⊺", "\\intercal", !0),
                vt("math", yt, bt, "⋒", "\\doublecap"),
                vt("math", yt, bt, "⋓", "\\doublecup"),
                vt("math", yt, bt, "⊠", "\\boxtimes", !0),
                vt("math", yt, kt, "⇢", "\\dashrightarrow", !0),
                vt("math", yt, kt, "⇠", "\\dashleftarrow", !0),
                vt("math", yt, kt, "⇇", "\\leftleftarrows", !0),
                vt("math", yt, kt, "⇆", "\\leftrightarrows", !0),
                vt("math", yt, kt, "⇚", "\\Lleftarrow", !0),
                vt("math", yt, kt, "↞", "\\twoheadleftarrow", !0),
                vt("math", yt, kt, "↢", "\\leftarrowtail", !0),
                vt("math", yt, kt, "↫", "\\looparrowleft", !0),
                vt("math", yt, kt, "⇋", "\\leftrightharpoons", !0),
                vt("math", yt, kt, "↶", "\\curvearrowleft", !0),
                vt("math", yt, kt, "↺", "\\circlearrowleft", !0),
                vt("math", yt, kt, "↰", "\\Lsh", !0),
                vt("math", yt, kt, "⇈", "\\upuparrows", !0),
                vt("math", yt, kt, "↿", "\\upharpoonleft", !0),
                vt("math", yt, kt, "⇃", "\\downharpoonleft", !0),
                vt("math", yt, kt, "⊸", "\\multimap", !0),
                vt("math", yt, kt, "↭", "\\leftrightsquigarrow", !0),
                vt("math", yt, kt, "⇉", "\\rightrightarrows", !0),
                vt("math", yt, kt, "⇄", "\\rightleftarrows", !0),
                vt("math", yt, kt, "↠", "\\twoheadrightarrow", !0),
                vt("math", yt, kt, "↣", "\\rightarrowtail", !0),
                vt("math", yt, kt, "↬", "\\looparrowright", !0),
                vt("math", yt, kt, "↷", "\\curvearrowright", !0),
                vt("math", yt, kt, "↻", "\\circlearrowright", !0),
                vt("math", yt, kt, "↱", "\\Rsh", !0),
                vt("math", yt, kt, "⇊", "\\downdownarrows", !0),
                vt("math", yt, kt, "↾", "\\upharpoonright", !0),
                vt("math", yt, kt, "⇂", "\\downharpoonright", !0),
                vt("math", yt, kt, "⇝", "\\rightsquigarrow", !0),
                vt("math", yt, kt, "⇝", "\\leadsto"),
                vt("math", yt, kt, "⇛", "\\Rrightarrow", !0),
                vt("math", yt, kt, "↾", "\\restriction"),
                vt("math", gt, "textord", "‘", "`"),
                vt("math", gt, "textord", "$", "\\$"),
                vt("text", gt, "textord", "$", "\\$"),
                vt("text", gt, "textord", "$", "\\textdollar"),
                vt("math", gt, "textord", "%", "\\%"),
                vt("text", gt, "textord", "%", "\\%"),
                vt("math", gt, "textord", "_", "\\_"),
                vt("text", gt, "textord", "_", "\\_"),
                vt("text", gt, "textord", "_", "\\textunderscore"),
                vt("math", gt, "textord", "∠", "\\angle", !0),
                vt("math", gt, "textord", "∞", "\\infty", !0),
                vt("math", gt, "textord", "′", "\\prime"),
                vt("math", gt, "textord", "△", "\\triangle"),
                vt("math", gt, "textord", "Γ", "\\Gamma", !0),
                vt("math", gt, "textord", "Δ", "\\Delta", !0),
                vt("math", gt, "textord", "Θ", "\\Theta", !0),
                vt("math", gt, "textord", "Λ", "\\Lambda", !0),
                vt("math", gt, "textord", "Ξ", "\\Xi", !0),
                vt("math", gt, "textord", "Π", "\\Pi", !0),
                vt("math", gt, "textord", "Σ", "\\Sigma", !0),
                vt("math", gt, "textord", "Υ", "\\Upsilon", !0),
                vt("math", gt, "textord", "Φ", "\\Phi", !0),
                vt("math", gt, "textord", "Ψ", "\\Psi", !0),
                vt("math", gt, "textord", "Ω", "\\Omega", !0),
                vt("math", gt, "textord", "A", "Α"),
                vt("math", gt, "textord", "B", "Β"),
                vt("math", gt, "textord", "E", "Ε"),
                vt("math", gt, "textord", "Z", "Ζ"),
                vt("math", gt, "textord", "H", "Η"),
                vt("math", gt, "textord", "I", "Ι"),
                vt("math", gt, "textord", "K", "Κ"),
                vt("math", gt, "textord", "M", "Μ"),
                vt("math", gt, "textord", "N", "Ν"),
                vt("math", gt, "textord", "O", "Ο"),
                vt("math", gt, "textord", "P", "Ρ"),
                vt("math", gt, "textord", "T", "Τ"),
                vt("math", gt, "textord", "X", "Χ"),
                vt("math", gt, "textord", "¬", "\\neg", !0),
                vt("math", gt, "textord", "¬", "\\lnot"),
                vt("math", gt, "textord", "⊤", "\\top"),
                vt("math", gt, "textord", "⊥", "\\bot"),
                vt("math", gt, "textord", "∅", "\\emptyset"),
                vt("math", yt, "textord", "∅", "\\varnothing"),
                vt("math", gt, xt, "α", "\\alpha", !0),
                vt("math", gt, xt, "β", "\\beta", !0),
                vt("math", gt, xt, "γ", "\\gamma", !0),
                vt("math", gt, xt, "δ", "\\delta", !0),
                vt("math", gt, xt, "ϵ", "\\epsilon", !0),
                vt("math", gt, xt, "ζ", "\\zeta", !0),
                vt("math", gt, xt, "η", "\\eta", !0),
                vt("math", gt, xt, "θ", "\\theta", !0),
                vt("math", gt, xt, "ι", "\\iota", !0),
                vt("math", gt, xt, "κ", "\\kappa", !0),
                vt("math", gt, xt, "λ", "\\lambda", !0),
                vt("math", gt, xt, "μ", "\\mu", !0),
                vt("math", gt, xt, "ν", "\\nu", !0),
                vt("math", gt, xt, "ξ", "\\xi", !0),
                vt("math", gt, xt, "ο", "\\omicron", !0),
                vt("math", gt, xt, "π", "\\pi", !0),
                vt("math", gt, xt, "ρ", "\\rho", !0),
                vt("math", gt, xt, "σ", "\\sigma", !0),
                vt("math", gt, xt, "τ", "\\tau", !0),
                vt("math", gt, xt, "υ", "\\upsilon", !0),
                vt("math", gt, xt, "ϕ", "\\phi", !0),
                vt("math", gt, xt, "χ", "\\chi", !0),
                vt("math", gt, xt, "ψ", "\\psi", !0),
                vt("math", gt, xt, "ω", "\\omega", !0),
                vt("math", gt, xt, "ε", "\\varepsilon", !0),
                vt("math", gt, xt, "ϑ", "\\vartheta", !0),
                vt("math", gt, xt, "ϖ", "\\varpi", !0),
                vt("math", gt, xt, "ϱ", "\\varrho", !0),
                vt("math", gt, xt, "ς", "\\varsigma", !0),
                vt("math", gt, xt, "φ", "\\varphi", !0),
                vt("math", gt, bt, "∗", "*"),
                vt("math", gt, bt, "+", "+"),
                vt("math", gt, bt, "−", "-"),
                vt("math", gt, bt, "⋅", "\\cdot", !0),
                vt("math", gt, bt, "∘", "\\circ"),
                vt("math", gt, bt, "÷", "\\div", !0),
                vt("math", gt, bt, "±", "\\pm", !0),
                vt("math", gt, bt, "×", "\\times", !0),
                vt("math", gt, bt, "∩", "\\cap", !0),
                vt("math", gt, bt, "∪", "\\cup", !0),
                vt("math", gt, bt, "∖", "\\setminus"),
                vt("math", gt, bt, "∧", "\\land"),
                vt("math", gt, bt, "∨", "\\lor"),
                vt("math", gt, bt, "∧", "\\wedge", !0),
                vt("math", gt, bt, "∨", "\\vee", !0),
                vt("math", gt, "textord", "√", "\\surd"),
                vt("math", gt, "open", "(", "("),
                vt("math", gt, "open", "[", "["),
                vt("math", gt, "open", "⟨", "\\langle", !0),
                vt("math", gt, "open", "∣", "\\lvert"),
                vt("math", gt, "open", "∥", "\\lVert"),
                vt("math", gt, "close", ")", ")"),
                vt("math", gt, "close", "]", "]"),
                vt("math", gt, "close", "?", "?"),
                vt("math", gt, "close", "!", "!"),
                vt("math", gt, "close", "⟩", "\\rangle", !0),
                vt("math", gt, "close", "∣", "\\rvert"),
                vt("math", gt, "close", "∥", "\\rVert"),
                vt("math", gt, kt, "=", "="),
                vt("math", gt, kt, "<", "<"),
                vt("math", gt, kt, ">", ">"),
                vt("math", gt, kt, ":", ":"),
                vt("math", gt, kt, "≈", "\\approx", !0),
                vt("math", gt, kt, "≅", "\\cong", !0),
                vt("math", gt, kt, "≥", "\\ge"),
                vt("math", gt, kt, "≥", "\\geq", !0),
                vt("math", gt, kt, "←", "\\gets"),
                vt("math", gt, kt, ">", "\\gt"),
                vt("math", gt, kt, "∈", "\\in", !0),
                vt("math", gt, kt, "̸", "\\not"),
                vt("math", gt, kt, "⊂", "\\subset", !0),
                vt("math", gt, kt, "⊃", "\\supset", !0),
                vt("math", gt, kt, "⊆", "\\subseteq", !0),
                vt("math", gt, kt, "⊇", "\\supseteq", !0),
                vt("math", yt, kt, "⊈", "\\nsubseteq", !0),
                vt("math", yt, kt, "⊉", "\\nsupseteq", !0),
                vt("math", gt, kt, "⊨", "\\models"),
                vt("math", gt, kt, "←", "\\leftarrow", !0),
                vt("math", gt, kt, "≤", "\\le"),
                vt("math", gt, kt, "≤", "\\leq", !0),
                vt("math", gt, kt, "<", "\\lt"),
                vt("math", gt, kt, "→", "\\rightarrow", !0),
                vt("math", gt, kt, "→", "\\to"),
                vt("math", yt, kt, "≱", "\\ngeq", !0),
                vt("math", yt, kt, "≰", "\\nleq", !0),
                vt("math", gt, St, " ", "\\ "),
                vt("math", gt, St, " ", "~"),
                vt("math", gt, St, " ", "\\space"),
                vt("math", gt, St, " ", "\\nobreakspace"),
                vt("text", gt, St, " ", "\\ "),
                vt("text", gt, St, " ", "~"),
                vt("text", gt, St, " ", "\\space"),
                vt("text", gt, St, " ", "\\nobreakspace"),
                vt("math", gt, St, null, "\\nobreak"),
                vt("math", gt, St, null, "\\allowbreak"),
                vt("math", gt, "punct", ",", ","),
                vt("math", gt, "punct", ";", ";"),
                vt("math", yt, bt, "⊼", "\\barwedge", !0),
                vt("math", yt, bt, "⊻", "\\veebar", !0),
                vt("math", gt, bt, "⊙", "\\odot", !0),
                vt("math", gt, bt, "⊕", "\\oplus", !0),
                vt("math", gt, bt, "⊗", "\\otimes", !0),
                vt("math", gt, "textord", "∂", "\\partial", !0),
                vt("math", gt, bt, "⊘", "\\oslash", !0),
                vt("math", yt, bt, "⊚", "\\circledcirc", !0),
                vt("math", yt, bt, "⊡", "\\boxdot", !0),
                vt("math", gt, bt, "△", "\\bigtriangleup"),
                vt("math", gt, bt, "▽", "\\bigtriangledown"),
                vt("math", gt, bt, "†", "\\dagger"),
                vt("math", gt, bt, "⋄", "\\diamond"),
                vt("math", gt, bt, "⋆", "\\star"),
                vt("math", gt, bt, "◃", "\\triangleleft"),
                vt("math", gt, bt, "▹", "\\triangleright"),
                vt("math", gt, "open", "{", "\\{"),
                vt("text", gt, "textord", "{", "\\{"),
                vt("text", gt, "textord", "{", "\\textbraceleft"),
                vt("math", gt, "close", "}", "\\}"),
                vt("text", gt, "textord", "}", "\\}"),
                vt("text", gt, "textord", "}", "\\textbraceright"),
                vt("math", gt, "open", "{", "\\lbrace"),
                vt("math", gt, "close", "}", "\\rbrace"),
                vt("math", gt, "open", "[", "\\lbrack"),
                vt("text", gt, "textord", "[", "\\lbrack"),
                vt("math", gt, "close", "]", "\\rbrack"),
                vt("text", gt, "textord", "]", "\\rbrack"),
                vt("text", gt, "textord", "<", "\\textless"),
                vt("text", gt, "textord", ">", "\\textgreater"),
                vt("math", gt, "open", "⌊", "\\lfloor", !0),
                vt("math", gt, "close", "⌋", "\\rfloor", !0),
                vt("math", gt, "open", "⌈", "\\lceil", !0),
                vt("math", gt, "close", "⌉", "\\rceil", !0),
                vt("math", gt, "textord", "\\", "\\backslash"),
                vt("math", gt, "textord", "∣", "|"),
                vt("math", gt, "textord", "∣", "\\vert"),
                vt("text", gt, "textord", "|", "\\textbar"),
                vt("math", gt, "textord", "∥", "\\|"),
                vt("math", gt, "textord", "∥", "\\Vert"),
                vt("text", gt, "textord", "∥", "\\textbardbl"),
                vt("text", gt, "textord", "~", "\\textasciitilde"),
                vt("math", gt, kt, "↑", "\\uparrow", !0),
                vt("math", gt, kt, "⇑", "\\Uparrow", !0),
                vt("math", gt, kt, "↓", "\\downarrow", !0),
                vt("math", gt, kt, "⇓", "\\Downarrow", !0),
                vt("math", gt, kt, "↕", "\\updownarrow", !0),
                vt("math", gt, kt, "⇕", "\\Updownarrow", !0),
                vt("math", gt, wt, "∐", "\\coprod"),
                vt("math", gt, wt, "⋁", "\\bigvee"),
                vt("math", gt, wt, "⋀", "\\bigwedge"),
                vt("math", gt, wt, "⨄", "\\biguplus"),
                vt("math", gt, wt, "⋂", "\\bigcap"),
                vt("math", gt, wt, "⋃", "\\bigcup"),
                vt("math", gt, wt, "∫", "\\int"),
                vt("math", gt, wt, "∫", "\\intop"),
                vt("math", gt, wt, "∬", "\\iint"),
                vt("math", gt, wt, "∭", "\\iiint"),
                vt("math", gt, wt, "∏", "\\prod"),
                vt("math", gt, wt, "∑", "\\sum"),
                vt("math", gt, wt, "⨂", "\\bigotimes"),
                vt("math", gt, wt, "⨁", "\\bigoplus"),
                vt("math", gt, wt, "⨀", "\\bigodot"),
                vt("math", gt, wt, "∮", "\\oint"),
                vt("math", gt, wt, "∯", "\\oiint"),
                vt("math", gt, wt, "∰", "\\oiiint"),
                vt("math", gt, wt, "⨆", "\\bigsqcup"),
                vt("math", gt, wt, "∫", "\\smallint"),
                vt("text", gt, "inner", "…", "\\textellipsis"),
                vt("math", gt, "inner", "…", "\\mathellipsis"),
                vt("text", gt, "inner", "…", "\\ldots", !0),
                vt("math", gt, "inner", "…", "\\ldots", !0),
                vt("math", gt, "inner", "⋯", "\\@cdots", !0),
                vt("math", gt, "inner", "⋱", "\\ddots", !0),
                vt("math", gt, "textord", "⋮", "\\varvdots"),
                vt("math", gt, "accent-token", "ˊ", "\\acute"),
                vt("math", gt, "accent-token", "ˋ", "\\grave"),
                vt("math", gt, "accent-token", "¨", "\\ddot"),
                vt("math", gt, "accent-token", "~", "\\tilde"),
                vt("math", gt, "accent-token", "ˉ", "\\bar"),
                vt("math", gt, "accent-token", "˘", "\\breve"),
                vt("math", gt, "accent-token", "ˇ", "\\check"),
                vt("math", gt, "accent-token", "^", "\\hat"),
                vt("math", gt, "accent-token", "⃗", "\\vec"),
                vt("math", gt, "accent-token", "˙", "\\dot"),
                vt("math", gt, "accent-token", "˚", "\\mathring"),
                vt("math", gt, xt, "ı", "\\imath", !0),
                vt("math", gt, xt, "ȷ", "\\jmath", !0),
                vt("text", gt, "textord", "ı", "\\i", !0),
                vt("text", gt, "textord", "ȷ", "\\j", !0),
                vt("text", gt, "textord", "ß", "\\ss", !0),
                vt("text", gt, "textord", "æ", "\\ae", !0),
                vt("text", gt, "textord", "æ", "\\ae", !0),
                vt("text", gt, "textord", "œ", "\\oe", !0),
                vt("text", gt, "textord", "ø", "\\o", !0),
                vt("text", gt, "textord", "Æ", "\\AE", !0),
                vt("text", gt, "textord", "Œ", "\\OE", !0),
                vt("text", gt, "textord", "Ø", "\\O", !0),
                vt("text", gt, "accent-token", "ˊ", "\\'"),
                vt("text", gt, "accent-token", "ˋ", "\\`"),
                vt("text", gt, "accent-token", "ˆ", "\\^"),
                vt("text", gt, "accent-token", "˜", "\\~"),
                vt("text", gt, "accent-token", "ˉ", "\\="),
                vt("text", gt, "accent-token", "˘", "\\u"),
                vt("text", gt, "accent-token", "˙", "\\."),
                vt("text", gt, "accent-token", "˚", "\\r"),
                vt("text", gt, "accent-token", "ˇ", "\\v"),
                vt("text", gt, "accent-token", "¨", '\\"'),
                vt("text", gt, "accent-token", "˝", "\\H"),
                vt("text", gt, "accent-token", "◯", "\\textcircled");
              var Et = { "--": !0, "---": !0, "``": !0, "''": !0 };
              vt("text", gt, "textord", "–", "--"),
                vt("text", gt, "textord", "–", "\\textendash"),
                vt("text", gt, "textord", "—", "---"),
                vt("text", gt, "textord", "—", "\\textemdash"),
                vt("text", gt, "textord", "‘", "`"),
                vt("text", gt, "textord", "‘", "\\textquoteleft"),
                vt("text", gt, "textord", "’", "'"),
                vt("text", gt, "textord", "’", "\\textquoteright"),
                vt("text", gt, "textord", "“", "``"),
                vt("text", gt, "textord", "“", "\\textquotedblleft"),
                vt("text", gt, "textord", "”", "''"),
                vt("text", gt, "textord", "”", "\\textquotedblright"),
                vt("math", gt, "textord", "°", "\\degree", !0),
                vt("text", gt, "textord", "°", "\\degree"),
                vt("text", gt, "textord", "°", "\\textdegree", !0),
                vt("math", gt, xt, "£", "\\pounds"),
                vt("math", gt, xt, "£", "\\mathsterling", !0),
                vt("text", gt, xt, "£", "\\pounds"),
                vt("text", gt, xt, "£", "\\textsterling", !0),
                vt("math", yt, "textord", "✠", "\\maltese"),
                vt("text", yt, "textord", "✠", "\\maltese"),
                vt("text", gt, St, " ", "\\ "),
                vt("text", gt, St, " ", " "),
                vt("text", gt, St, " ", "~");
              for (var Mt = 0; Mt < '0123456789/@."'.length; Mt++) {
                var Tt = '0123456789/@."'.charAt(Mt);
                vt("math", gt, "textord", Tt, Tt);
              }
              for (
                var _t = 0;
                _t < '0123456789!@*()-=+[]<>|";:?/.,'.length;
                _t++
              ) {
                var Nt = '0123456789!@*()-=+[]<>|";:?/.,'.charAt(_t);
                vt("text", gt, "textord", Nt, Nt);
              }
              for (
                var Pt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                  Ct = 0;
                Ct < Pt.length;
                Ct++
              ) {
                var Ot = Pt.charAt(Ct);
                vt("math", gt, xt, Ot, Ot), vt("text", gt, "textord", Ot, Ot);
              }
              for (var At = "", Bt = 0; Bt < Pt.length; Bt++) {
                var zt = Pt.charAt(Bt);
                vt(
                  "math",
                  gt,
                  xt,
                  zt,
                  (At = String.fromCharCode(55349, 56320 + Bt))
                ),
                  vt("text", gt, "textord", zt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    zt,
                    (At = String.fromCharCode(55349, 56372 + Bt))
                  ),
                  vt("text", gt, "textord", zt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    zt,
                    (At = String.fromCharCode(55349, 56424 + Bt))
                  ),
                  vt("text", gt, "textord", zt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    zt,
                    (At = String.fromCharCode(55349, 56580 + Bt))
                  ),
                  vt("text", gt, "textord", zt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    zt,
                    (At = String.fromCharCode(55349, 56736 + Bt))
                  ),
                  vt("text", gt, "textord", zt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    zt,
                    (At = String.fromCharCode(55349, 56788 + Bt))
                  ),
                  vt("text", gt, "textord", zt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    zt,
                    (At = String.fromCharCode(55349, 56840 + Bt))
                  ),
                  vt("text", gt, "textord", zt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    zt,
                    (At = String.fromCharCode(55349, 56944 + Bt))
                  ),
                  vt("text", gt, "textord", zt, At),
                  Bt < 26 &&
                    (vt(
                      "math",
                      gt,
                      xt,
                      zt,
                      (At = String.fromCharCode(55349, 56632 + Bt))
                    ),
                    vt("text", gt, "textord", zt, At),
                    vt(
                      "math",
                      gt,
                      xt,
                      zt,
                      (At = String.fromCharCode(55349, 56476 + Bt))
                    ),
                    vt("text", gt, "textord", zt, At));
              }
              vt("math", gt, xt, "k", (At = String.fromCharCode(55349, 56668))),
                vt("text", gt, "textord", "k", At);
              for (var Rt = 0; Rt < 10; Rt++) {
                var Dt = Pt.charAt(Rt);
                vt(
                  "math",
                  gt,
                  xt,
                  Dt,
                  (At = String.fromCharCode(55349, 57294 + Rt))
                ),
                  vt("text", gt, "textord", Dt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    Dt,
                    (At = String.fromCharCode(55349, 57314 + Rt))
                  ),
                  vt("text", gt, "textord", Dt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    Dt,
                    (At = String.fromCharCode(55349, 57324 + Rt))
                  ),
                  vt("text", gt, "textord", Dt, At),
                  vt(
                    "math",
                    gt,
                    xt,
                    Dt,
                    (At = String.fromCharCode(55349, 57334 + Rt))
                  ),
                  vt("text", gt, "textord", Dt, At);
              }
              for (var It = 0; It < "ÇÐÞçþ".length; It++) {
                var Vt = "ÇÐÞçþ".charAt(It);
                vt("math", gt, xt, Vt, Vt), vt("text", gt, "textord", Vt, Vt);
              }
              vt("text", gt, "textord", "ð", "ð"),
                vt("text", gt, "textord", "–", "–"),
                vt("text", gt, "textord", "—", "—"),
                vt("text", gt, "textord", "‘", "‘"),
                vt("text", gt, "textord", "’", "’"),
                vt("text", gt, "textord", "“", "“"),
                vt("text", gt, "textord", "”", "”");
              var Lt = [
                  ["mathbf", "textbf", "Main-Bold"],
                  ["mathbf", "textbf", "Main-Bold"],
                  ["mathit", "textit", "Math-Italic"],
                  ["mathit", "textit", "Math-Italic"],
                  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                  ["mathscr", "textscr", "Script-Regular"],
                  ["", "", ""],
                  ["", "", ""],
                  ["", "", ""],
                  ["mathfrak", "textfrak", "Fraktur-Regular"],
                  ["mathfrak", "textfrak", "Fraktur-Regular"],
                  ["mathbb", "textbb", "AMS-Regular"],
                  ["mathbb", "textbb", "AMS-Regular"],
                  ["", "", ""],
                  ["", "", ""],
                  ["mathsf", "textsf", "SansSerif-Regular"],
                  ["mathsf", "textsf", "SansSerif-Regular"],
                  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                  ["mathitsf", "textitsf", "SansSerif-Italic"],
                  ["mathitsf", "textitsf", "SansSerif-Italic"],
                  ["", "", ""],
                  ["", "", ""],
                  ["mathtt", "texttt", "Typewriter-Regular"],
                  ["mathtt", "texttt", "Typewriter-Regular"],
                ],
                jt = [
                  ["mathbf", "textbf", "Main-Bold"],
                  ["", "", ""],
                  ["mathsf", "textsf", "SansSerif-Regular"],
                  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                  ["mathtt", "texttt", "Typewriter-Regular"],
                ],
                qt = [
                  [1, 1, 1],
                  [2, 1, 1],
                  [3, 1, 1],
                  [4, 2, 1],
                  [5, 2, 1],
                  [6, 3, 1],
                  [7, 4, 2],
                  [8, 6, 3],
                  [9, 7, 6],
                  [10, 8, 7],
                  [11, 10, 9],
                ],
                Ft = [
                  0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488,
                ],
                Ht = function (t, e) {
                  return e.size < 2 ? t : qt[t - 1][e.size - 1];
                },
                Xt = (function () {
                  function t(e) {
                    i()(this, t),
                      (this.style = e.style),
                      (this.color = e.color),
                      (this.size = e.size || t.BASESIZE),
                      (this.textSize = e.textSize || this.size),
                      (this.phantom = !!e.phantom),
                      (this.font = e.font || ""),
                      (this.fontFamily = e.fontFamily || ""),
                      (this.fontWeight = e.fontWeight || ""),
                      (this.fontShape = e.fontShape || ""),
                      (this.sizeMultiplier = Ft[this.size - 1]),
                      (this.maxSize = e.maxSize),
                      (this._fontMetrics = void 0);
                  }
                  return (
                    o()(t, [
                      {
                        key: "extend",
                        value: function (e) {
                          var n = {
                            style: this.style,
                            size: this.size,
                            textSize: this.textSize,
                            color: this.color,
                            phantom: this.phantom,
                            font: this.font,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontShape: this.fontShape,
                            maxSize: this.maxSize,
                          };
                          for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                          return new t(n);
                        },
                      },
                      {
                        key: "havingStyle",
                        value: function (t) {
                          return this.style === t
                            ? this
                            : this.extend({
                                style: t,
                                size: Ht(this.textSize, t),
                              });
                        },
                      },
                      {
                        key: "havingCrampedStyle",
                        value: function () {
                          return this.havingStyle(this.style.cramp());
                        },
                      },
                      {
                        key: "havingSize",
                        value: function (t) {
                          return this.size === t && this.textSize === t
                            ? this
                            : this.extend({
                                style: this.style.text(),
                                size: t,
                                textSize: t,
                                sizeMultiplier: Ft[t - 1],
                              });
                        },
                      },
                      {
                        key: "havingBaseStyle",
                        value: function (e) {
                          e = e || this.style.text();
                          var n = Ht(t.BASESIZE, e);
                          return this.size === n &&
                            this.textSize === t.BASESIZE &&
                            this.style === e
                            ? this
                            : this.extend({ style: e, size: n });
                        },
                      },
                      {
                        key: "withColor",
                        value: function (t) {
                          return this.extend({ color: t });
                        },
                      },
                      {
                        key: "withPhantom",
                        value: function () {
                          return this.extend({ phantom: !0 });
                        },
                      },
                      {
                        key: "withFont",
                        value: function (t) {
                          return this.extend({ font: t });
                        },
                      },
                      {
                        key: "withTextFontFamily",
                        value: function (t) {
                          return this.extend({ fontFamily: t, font: "" });
                        },
                      },
                      {
                        key: "withTextFontWeight",
                        value: function (t) {
                          return this.extend({ fontWeight: t, font: "" });
                        },
                      },
                      {
                        key: "withTextFontShape",
                        value: function (t) {
                          return this.extend({ fontShape: t, font: "" });
                        },
                      },
                      {
                        key: "sizingClasses",
                        value: function (t) {
                          return t.size !== this.size
                            ? [
                                "sizing",
                                "reset-size" + t.size,
                                "size" + this.size,
                              ]
                            : [];
                        },
                      },
                      {
                        key: "baseSizingClasses",
                        value: function () {
                          return this.size !== t.BASESIZE
                            ? [
                                "sizing",
                                "reset-size" + this.size,
                                "size" + t.BASESIZE,
                              ]
                            : [];
                        },
                      },
                      {
                        key: "fontMetrics",
                        value: function () {
                          return (
                            this._fontMetrics ||
                              (this._fontMetrics = (function (t) {
                                var e;
                                if (!ft[(e = t >= 5 ? 0 : t >= 3 ? 1 : 2)]) {
                                  var n = (ft[e] = {
                                    cssEmPerMu: ut.quad[e] / 18,
                                  });
                                  for (var r in ut)
                                    ut.hasOwnProperty(r) && (n[r] = ut[r][e]);
                                }
                                return ft[e];
                              })(this.size)),
                            this._fontMetrics
                          );
                        },
                      },
                      {
                        key: "getColor",
                        value: function () {
                          return this.phantom
                            ? "transparent"
                            : null != this.color &&
                              t.colorMap.hasOwnProperty(this.color)
                            ? t.colorMap[this.color]
                            : this.color;
                        },
                      },
                    ]),
                    t
                  );
                })();
              (Xt.BASESIZE = 6),
                (Xt.colorMap = {
                  "katex-blue": "#6495ed",
                  "katex-orange": "#ffa500",
                  "katex-pink": "#ff00af",
                  "katex-red": "#df0030",
                  "katex-green": "#28ae7b",
                  "katex-gray": "gray",
                  "katex-purple": "#9d38bd",
                  "katex-blueA": "#ccfaff",
                  "katex-blueB": "#80f6ff",
                  "katex-blueC": "#63d9ea",
                  "katex-blueD": "#11accd",
                  "katex-blueE": "#0c7f99",
                  "katex-tealA": "#94fff5",
                  "katex-tealB": "#26edd5",
                  "katex-tealC": "#01d1c1",
                  "katex-tealD": "#01a995",
                  "katex-tealE": "#208170",
                  "katex-greenA": "#b6ffb0",
                  "katex-greenB": "#8af281",
                  "katex-greenC": "#74cf70",
                  "katex-greenD": "#1fab54",
                  "katex-greenE": "#0d923f",
                  "katex-goldA": "#ffd0a9",
                  "katex-goldB": "#ffbb71",
                  "katex-goldC": "#ff9c39",
                  "katex-goldD": "#e07d10",
                  "katex-goldE": "#a75a05",
                  "katex-redA": "#fca9a9",
                  "katex-redB": "#ff8482",
                  "katex-redC": "#f9685d",
                  "katex-redD": "#e84d39",
                  "katex-redE": "#bc2612",
                  "katex-maroonA": "#ffbde0",
                  "katex-maroonB": "#ff92c6",
                  "katex-maroonC": "#ed5fa6",
                  "katex-maroonD": "#ca337c",
                  "katex-maroonE": "#9e034e",
                  "katex-purpleA": "#ddd7ff",
                  "katex-purpleB": "#c6b9fc",
                  "katex-purpleC": "#aa87ff",
                  "katex-purpleD": "#7854ab",
                  "katex-purpleE": "#543b78",
                  "katex-mintA": "#f5f9e8",
                  "katex-mintB": "#edf2df",
                  "katex-mintC": "#e0e5cc",
                  "katex-grayA": "#f6f7f7",
                  "katex-grayB": "#f0f1f2",
                  "katex-grayC": "#e3e5e6",
                  "katex-grayD": "#d6d8da",
                  "katex-grayE": "#babec2",
                  "katex-grayF": "#888d93",
                  "katex-grayG": "#626569",
                  "katex-grayH": "#3b3e40",
                  "katex-grayI": "#21242c",
                  "katex-kaBlue": "#314453",
                  "katex-kaGreen": "#71B307",
                });
              var Wt = Xt,
                Gt = {
                  pt: 1,
                  mm: 7227 / 2540,
                  cm: 7227 / 254,
                  in: 72.27,
                  bp: 1.00375,
                  pc: 12,
                  dd: 1238 / 1157,
                  cc: 14856 / 1157,
                  nd: 685 / 642,
                  nc: 1370 / 107,
                  sp: 1 / 65536,
                  px: 1.00375,
                },
                Ut = { ex: !0, em: !0, mu: !0 },
                Yt = function (t, e) {
                  var n = void 0;
                  if (t.unit in Gt)
                    n = Gt[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
                  else if ("mu" === t.unit) n = e.fontMetrics().cssEmPerMu;
                  else {
                    var r = void 0;
                    if (
                      ((r = e.style.isTight()
                        ? e.havingStyle(e.style.text())
                        : e),
                      "ex" === t.unit)
                    )
                      n = r.fontMetrics().xHeight;
                    else {
                      if ("em" !== t.unit)
                        throw new f("Invalid unit: '" + t.unit + "'");
                      n = r.fontMetrics().quad;
                    }
                    r !== e && (n *= r.sizeMultiplier / e.sizeMultiplier);
                  }
                  return Math.min(t.number * n, e.maxSize);
                },
                $t = [
                  "\\imath",
                  "ı",
                  "\\jmath",
                  "ȷ",
                  "\\pounds",
                  "\\mathsterling",
                  "\\textsterling",
                  "£",
                ],
                Jt = function (t, e, n) {
                  return (
                    pt[n][t] && pt[n][t].replace && (t = pt[n][t].replace),
                    { value: t, metrics: ct(t, e, n) }
                  );
                },
                Kt = function (t, e, n, r, i) {
                  var a = Jt(t, e, n),
                    o = a.metrics;
                  t = a.value;
                  var s = void 0;
                  if (o) {
                    var l = o.italic;
                    "text" === n && (l = 0),
                      (s = new st.symbolNode(
                        t,
                        o.height,
                        o.depth,
                        l,
                        o.skew,
                        o.width,
                        i
                      ));
                  } else
                    "undefined" != typeof console &&
                      console.warn(
                        "No character metrics for '" +
                          t +
                          "' in style '" +
                          e +
                          "'"
                      ),
                      (s = new st.symbolNode(t, 0, 0, 0, 0, 0, i));
                  if (r) {
                    (s.maxFontSize = r.sizeMultiplier),
                      r.style.isTight() && s.classes.push("mtight");
                    var u = r.getColor();
                    u && (s.style.color = u);
                  }
                  return s;
                },
                Zt = function (t, e, n, r, i) {
                  if ("mathord" === i) {
                    var a = Qt(t, e, n, r);
                    return Kt(t, a.fontName, e, n, r.concat([a.fontClass]));
                  }
                  if ("textord" === i) {
                    var o = pt[e][t] && pt[e][t].font;
                    if ("ams" === o) {
                      var s = ie("amsrm", n.fontWeight, n.fontShape);
                      return Kt(
                        t,
                        s,
                        e,
                        n,
                        r.concat("amsrm", n.fontWeight, n.fontShape)
                      );
                    }
                    if ("main" !== o && o) {
                      var l = ie(o, n.fontWeight, n.fontShape);
                      return Kt(
                        t,
                        l,
                        e,
                        n,
                        r.concat(l, n.fontWeight, n.fontShape)
                      );
                    }
                    var u = ie("textrm", n.fontWeight, n.fontShape);
                    return Kt(t, u, e, n, r.concat(n.fontWeight, n.fontShape));
                  }
                  throw new Error("unexpected type: " + i + " in mathDefault");
                },
                Qt = function (t, e, n, r) {
                  return /[0-9]/.test(t.charAt(0)) || k.contains($t, t)
                    ? { fontName: "Main-Italic", fontClass: "mainit" }
                    : { fontName: "Math-Italic", fontClass: "mathit" };
                },
                te = function (t) {
                  var e = 0,
                    n = 0,
                    r = 0,
                    i = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var s, l = D()(t.children);
                      !(i = (s = l.next()).done);
                      i = !0
                    ) {
                      var u = s.value;
                      u.height > e && (e = u.height),
                        u.depth > n && (n = u.depth),
                        u.maxFontSize > r && (r = u.maxFontSize);
                    }
                  } catch (t) {
                    (a = !0), (o = t);
                  } finally {
                    try {
                      !i && l.return && l.return();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  (t.height = e), (t.depth = n), (t.maxFontSize = r);
                },
                ee = function (t, e, n, r) {
                  var i = new st.span(t, e, n, r);
                  return te(i), i;
                },
                ne = function (t, e, n, r) {
                  return new st.span(t, e, n, r);
                },
                re = function (t) {
                  var e = new st.documentFragment(t);
                  return te(e), e;
                },
                ie = function (t, e, n) {
                  var r = "";
                  switch (t) {
                    case "amsrm":
                      r = "AMS";
                      break;
                    case "textrm":
                      r = "Main";
                      break;
                    case "textsf":
                      r = "SansSerif";
                      break;
                    case "texttt":
                      r = "Typewriter";
                      break;
                    default:
                      r = t;
                  }
                  return (
                    r +
                    "-" +
                    ("textbf" === e && "textit" === n
                      ? "BoldItalic"
                      : "textbf" === e
                      ? "Bold"
                      : "textit" === e
                      ? "Italic"
                      : "Regular")
                  );
                },
                ae = {
                  mathbf: { variant: "bold", fontName: "Main-Bold" },
                  mathrm: { variant: "normal", fontName: "Main-Regular" },
                  textit: { variant: "italic", fontName: "Main-Italic" },
                  mathbb: { variant: "double-struck", fontName: "AMS-Regular" },
                  mathcal: {
                    variant: "script",
                    fontName: "Caligraphic-Regular",
                  },
                  mathfrak: { variant: "fraktur", fontName: "Fraktur-Regular" },
                  mathscr: { variant: "script", fontName: "Script-Regular" },
                  mathsf: {
                    variant: "sans-serif",
                    fontName: "SansSerif-Regular",
                  },
                  mathtt: {
                    variant: "monospace",
                    fontName: "Typewriter-Regular",
                  },
                },
                oe = {
                  vec: ["vec", 0.471, 0.714],
                  oiintSize1: ["oiintSize1", 0.957, 0.499],
                  oiintSize2: ["oiintSize2", 1.472, 0.659],
                  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
                  oiiintSize2: ["oiiintSize2", 1.98, 0.659],
                },
                se = {
                  fontMap: ae,
                  makeSymbol: Kt,
                  mathsym: function (t, e, n) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [];
                    return n &&
                      n.font &&
                      "boldsymbol" === n.font &&
                      Jt(t, "Main-Bold", e).metrics
                      ? Kt(t, "Main-Bold", e, n, r.concat(["mathbf"]))
                      : "\\" === t || "main" === pt[e][t].font
                      ? Kt(t, "Main-Regular", e, n, r)
                      : Kt(t, "AMS-Regular", e, n, r.concat(["amsrm"]));
                  },
                  makeSpan: ee,
                  makeSvgSpan: ne,
                  makeLineSpan: function (t, e, n) {
                    var r = ee([t], [], e);
                    return (
                      (r.height = n || e.fontMetrics().defaultRuleThickness),
                      (r.style.borderBottomWidth = r.height + "em"),
                      (r.maxFontSize = 1),
                      r
                    );
                  },
                  makeAnchor: function (t, e, n, r) {
                    var i = new st.anchor(t, e, n, r);
                    return te(i), i;
                  },
                  makeFragment: re,
                  makeVList: function (t, e) {
                    var n = (function (t) {
                        if ("individualShift" === t.positionType) {
                          for (
                            var e = t.children,
                              n = [e[0]],
                              r = -e[0].shift - e[0].elem.depth,
                              i = r,
                              a = 1;
                            a < e.length;
                            a++
                          ) {
                            var o = -e[a].shift - i - e[a].elem.depth,
                              s =
                                o -
                                (e[a - 1].elem.height + e[a - 1].elem.depth);
                            (i += o),
                              n.push({ type: "kern", size: s }),
                              n.push(e[a]);
                          }
                          return { children: n, depth: r };
                        }
                        var l = void 0;
                        if ("top" === t.positionType) {
                          var u = t.positionData,
                            h = !0,
                            c = !1,
                            f = void 0;
                          try {
                            for (
                              var m, d = D()(t.children);
                              !(h = (m = d.next()).done);
                              h = !0
                            ) {
                              var p = m.value;
                              u -=
                                "kern" === p.type
                                  ? p.size
                                  : p.elem.height + p.elem.depth;
                            }
                          } catch (t) {
                            (c = !0), (f = t);
                          } finally {
                            try {
                              !h && d.return && d.return();
                            } finally {
                              if (c) throw f;
                            }
                          }
                          l = u;
                        } else if ("bottom" === t.positionType)
                          l = -t.positionData;
                        else {
                          var v = t.children[0];
                          if ("elem" !== v.type)
                            throw new Error(
                              'First child must have type "elem".'
                            );
                          if ("shift" === t.positionType)
                            l = -v.elem.depth - t.positionData;
                          else {
                            if ("firstBaseline" !== t.positionType)
                              throw new Error(
                                "Invalid positionType " + t.positionType + "."
                              );
                            l = -v.elem.depth;
                          }
                        }
                        return { children: t.children, depth: l };
                      })(t),
                      r = n.children,
                      i = n.depth,
                      a = 0,
                      o = !0,
                      s = !1,
                      l = void 0;
                    try {
                      for (
                        var u, h = D()(r);
                        !(o = (u = h.next()).done);
                        o = !0
                      ) {
                        var c = u.value;
                        if ("elem" === c.type) {
                          var f = c.elem;
                          a = Math.max(a, f.maxFontSize, f.height);
                        }
                      }
                    } catch (t) {
                      (s = !0), (l = t);
                    } finally {
                      try {
                        !o && h.return && h.return();
                      } finally {
                        if (s) throw l;
                      }
                    }
                    a += 2;
                    var m = ee(["pstrut"], []);
                    m.style.height = a + "em";
                    var d = [],
                      p = i,
                      v = i,
                      g = i,
                      y = !0,
                      b = !1,
                      x = void 0;
                    try {
                      for (
                        var w, k = D()(r);
                        !(y = (w = k.next()).done);
                        y = !0
                      ) {
                        var S = w.value;
                        if ("kern" === S.type) g += S.size;
                        else {
                          var E = S.elem,
                            M = S.wrapperClasses || [],
                            T = S.wrapperStyle || {},
                            _ = ee(M, [m, E], void 0, T);
                          (_.style.top = -a - g - E.depth + "em"),
                            S.marginLeft && (_.style.marginLeft = S.marginLeft),
                            S.marginRight &&
                              (_.style.marginRight = S.marginRight),
                            d.push(_),
                            (g += E.height + E.depth);
                        }
                        (p = Math.min(p, g)), (v = Math.max(v, g));
                      }
                    } catch (t) {
                      (b = !0), (x = t);
                    } finally {
                      try {
                        !y && k.return && k.return();
                      } finally {
                        if (b) throw x;
                      }
                    }
                    var N = ee(["vlist"], d);
                    N.style.height = v + "em";
                    var P = void 0;
                    if (p < 0) {
                      var C = ee([], []),
                        O = ee(["vlist"], [C]);
                      O.style.height = -p + "em";
                      var A = ee(["vlist-s"], [new st.symbolNode("​")]);
                      P = [ee(["vlist-r"], [N, A]), ee(["vlist-r"], [O])];
                    } else P = [ee(["vlist-r"], [N])];
                    var B = ee(["vlist-t"], P);
                    return (
                      2 === P.length && B.classes.push("vlist-t2"),
                      (B.height = v),
                      (B.depth = -p),
                      B
                    );
                  },
                  makeOrd: function (t, e, n) {
                    var r = t.mode,
                      i = t.value,
                      a = ["mord"],
                      o = "math" === r || ("text" === r && e.font),
                      s = o ? e.font : e.fontFamily;
                    if (55349 === i.charCodeAt(0)) {
                      var l = (function (t, e) {
                          var n =
                              1024 * (t.charCodeAt(0) - 55296) +
                              (t.charCodeAt(1) - 56320) +
                              65536,
                            r = "math" === e ? 0 : 1;
                          if (119808 <= n && n < 120484) {
                            var i = Math.floor((n - 119808) / 26);
                            return [Lt[i][2], Lt[i][r]];
                          }
                          if (120782 <= n && n <= 120831) {
                            var a = Math.floor((n - 120782) / 10);
                            return [jt[a][2], jt[a][r]];
                          }
                          if (120485 === n || 120486 === n)
                            return [Lt[0][2], Lt[0][r]];
                          if (120486 < n && n < 120782) return ["", ""];
                          throw new f("Unsupported character: " + t);
                        })(i, r),
                        u = V()(l, 2),
                        h = u[0],
                        c = u[1];
                      return Kt(i, h, r, e, a.concat(c));
                    }
                    if (s) {
                      var m = void 0,
                        d = void 0;
                      if ("boldsymbol" === s) {
                        var p = (function (t, e, n, r) {
                          return Jt(i, "Math-BoldItalic", e).metrics
                            ? {
                                fontName: "Math-BoldItalic",
                                fontClass: "boldsymbol",
                              }
                            : { fontName: "Main-Bold", fontClass: "mathbf" };
                        })(0, r);
                        (m = p.fontName), (d = [p.fontClass]);
                      } else if ("mathit" === s || k.contains($t, i)) {
                        var v = Qt(i, r, e, a);
                        (m = v.fontName), (d = [v.fontClass]);
                      } else
                        o
                          ? ((m = ae[s].fontName), (d = [s]))
                          : ((m = ie(s, e.fontWeight, e.fontShape)),
                            (d = [s, e.fontWeight, e.fontShape]));
                      if (Jt(i, m, r).metrics)
                        return Kt(i, m, r, e, a.concat(d));
                      if (
                        Et.hasOwnProperty(i) &&
                        "Typewriter" === m.substr(0, 10)
                      ) {
                        for (var g = [], y = 0; y < i.length; y++)
                          g.push(Kt(i[y], m, r, e, a.concat(d)));
                        return re(g);
                      }
                      return Zt(i, r, e, a, n);
                    }
                    return Zt(i, r, e, a, n);
                  },
                  makeVerb: function (t, e) {
                    var n = t.value.body;
                    return t.value.star
                      ? n.replace(/ /g, "␣")
                      : n.replace(/ /g, " ");
                  },
                  makeGlue: function (t, e) {
                    var n = ee(["mspace"], [], e),
                      r = Yt(t, e);
                    return (n.style.marginRight = r + "em"), n;
                  },
                  staticSvg: function (t, e) {
                    var n = V()(oe[t], 3),
                      r = n[0],
                      i = n[1],
                      a = n[2],
                      o = new st.pathNode(r),
                      s = new st.svgNode([o], {
                        width: i + "em",
                        height: a + "em",
                        style: "width:" + i + "em",
                        viewBox: "0 0 " + 1e3 * i + " " + 1e3 * a,
                        preserveAspectRatio: "xMinYMin",
                      }),
                      l = ne(["overlay"], [s], e);
                    return (
                      (l.height = a),
                      (l.style.height = a + "em"),
                      (l.style.width = i + "em"),
                      l
                    );
                  },
                  svgData: oe,
                  tryCombineChars: function (t) {
                    for (var e = 0; e < t.length - 1; e++)
                      t[e].tryCombine(t[e + 1]) && (t.splice(e + 1, 1), e--);
                    return t;
                  },
                  cssSpace: {
                    "\\nobreak": "nobreak",
                    "\\allowbreak": "allowbreak",
                  },
                  regularSpace: {
                    " ": {},
                    "\\ ": {},
                    "~": { className: "nobreak" },
                    "\\space": {},
                    "\\nobreakspace": { className: "nobreak" },
                  },
                },
                le = function t(e, n, r, a, o) {
                  i()(this, t),
                    (this.type = e),
                    (this.value = n),
                    (this.mode = r),
                    (this.loc = u.range(a, o));
                };
              function ue(t, e) {
                var n = he(t, e);
                if (!n)
                  throw new Error(
                    "Expected node of type " +
                      e +
                      ", but got " +
                      (t ? "node of type " + t.type : String(t))
                  );
                return n;
              }
              function he(t, e) {
                return t && t.type === e ? t : null;
              }
              function ce(t) {
                return t && mt.hasOwnProperty(t.type) ? t : null;
              }
              var fe = { number: 3, unit: "mu" },
                me = { number: 4, unit: "mu" },
                de = { number: 5, unit: "mu" },
                pe = {
                  mord: { mop: fe, mbin: me, mrel: de, minner: fe },
                  mop: { mord: fe, mop: fe, mrel: de, minner: fe },
                  mbin: { mord: me, mop: me, mopen: me, minner: me },
                  mrel: { mord: de, mop: de, mopen: de, minner: de },
                  mopen: {},
                  mclose: { mop: fe, mbin: me, mrel: de, minner: fe },
                  mpunct: {
                    mord: fe,
                    mop: fe,
                    mrel: de,
                    mopen: fe,
                    mclose: fe,
                    mpunct: fe,
                    minner: fe,
                  },
                  minner: {
                    mord: fe,
                    mop: fe,
                    mbin: me,
                    mrel: de,
                    mopen: fe,
                    mpunct: fe,
                    minner: fe,
                  },
                },
                ve = {
                  mord: { mop: fe },
                  mop: { mord: fe, mop: fe },
                  mbin: {},
                  mrel: {},
                  mopen: {},
                  mclose: { mop: fe },
                  mpunct: {},
                  minner: { mop: fe },
                },
                ge = {},
                ye = {},
                be = {};
              function xe(t) {
                for (
                  var e = t.type,
                    n = (t.nodeType, t.names),
                    r = t.props,
                    i = t.handler,
                    a = t.htmlBuilder,
                    o = t.mathmlBuilder,
                    s = {
                      type: e,
                      numArgs: r.numArgs,
                      argTypes: r.argTypes,
                      greediness: void 0 === r.greediness ? 1 : r.greediness,
                      allowedInText: !!r.allowedInText,
                      allowedInMath:
                        void 0 === r.allowedInMath || r.allowedInMath,
                      numOptionalArgs: r.numOptionalArgs || 0,
                      infix: !!r.infix,
                      consumeMode: r.consumeMode,
                      handler: i,
                    },
                    l = 0;
                  l < n.length;
                  ++l
                )
                  ge[n[l]] = s;
                e && (a && (ye[e] = a), o && (be[e] = o));
              }
              function we(t) {
                xe({
                  type: t.type,
                  names: [],
                  props: { numArgs: 0 },
                  handler: function () {
                    throw new Error("Should never be called.");
                  },
                  htmlBuilder: t.htmlBuilder,
                  mathmlBuilder: t.mathmlBuilder,
                });
              }
              var ke = function (t) {
                  var e = he(t, "ordgroup");
                  return e ? e.value : [t];
                },
                Se = se.makeSpan,
                Ee = function (t, e) {
                  return t
                    ? k.contains(
                        ["mbin", "mopen", "mrel", "mop", "mpunct"],
                        Ce(t, "right")
                      )
                    : e;
                },
                Me = function (t, e) {
                  return t
                    ? k.contains(["mrel", "mclose", "mpunct"], Ce(t, "left"))
                    : e;
                },
                Te = {
                  display: z.DISPLAY,
                  text: z.TEXT,
                  script: z.SCRIPT,
                  scriptscript: z.SCRIPTSCRIPT,
                },
                _e = {
                  mord: "mord",
                  mop: "mop",
                  mbin: "mbin",
                  mrel: "mrel",
                  mopen: "mopen",
                  mclose: "mclose",
                  mpunct: "mpunct",
                  minner: "minner",
                },
                Ne = function (t, e, n) {
                  for (
                    var r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : [null, null],
                      i = [],
                      a = 0;
                    a < t.length;
                    a++
                  ) {
                    var o = Be(t[a], e);
                    if (o instanceof st.documentFragment) {
                      var s = o.children;
                      i.push.apply(i, M()(s));
                    } else i.push(o);
                  }
                  for (
                    var l = [r[0] ? Se([r[0]], [], e) : null].concat(
                        M()(
                          i.filter(function (t) {
                            return t && "mspace" !== t.classes[0];
                          })
                        ),
                        [r[1] ? Se([r[1]], [], e) : null]
                      ),
                      u = 1;
                    u < l.length - 1;
                    u++
                  ) {
                    var h = w(l[u]),
                      c = Pe(h, "left");
                    "mbin" === c.classes[0] &&
                      Ee(l[u - 1], n) &&
                      (c.classes[0] = "mord");
                    var f = Pe(h, "right");
                    "mbin" === f.classes[0] &&
                      Me(l[u + 1], n) &&
                      (f.classes[0] = "mord");
                  }
                  for (var m = [], d = 0, p = 0; p < i.length; p++)
                    if (
                      (m.push(i[p]),
                      "mspace" !== i[p].classes[0] && d < l.length - 1)
                    ) {
                      0 === d && (m.pop(), p--);
                      var v = Ce(l[d], "right"),
                        g = Ce(l[d + 1], "left");
                      if (v && g && n) {
                        var y = w(l[d + 1]),
                          b = Oe(y) ? ve[v][g] : pe[v][g];
                        if (b) {
                          var x = e;
                          if (1 === t.length) {
                            var k = he(t[0], "sizing") || he(t[0], "styling");
                            k &&
                              ("sizing" === k.type
                                ? (x = e.havingSize(k.value.size))
                                : "styling" === k.type &&
                                  (x = e.havingStyle(Te[k.value.style])));
                          }
                          m.push(se.makeGlue(b, x));
                        }
                      }
                      d++;
                    }
                  for (var S = 0; S < m.length; S++) {
                    var E = m[S];
                    E instanceof st.symbolNode &&
                      "̸" === E.value &&
                      ((E.style.position = "absolute"),
                      (E.style.paddingLeft = "0.8em"));
                  }
                  return m;
                },
                Pe = function t(e, n) {
                  if (
                    e instanceof st.documentFragment ||
                    e instanceof st.anchor ||
                    (e instanceof st.span && e.hasClass("enclosing"))
                  ) {
                    var r = e.children;
                    if (r.length) {
                      if ("right" === n) return t(r[r.length - 1], "right");
                      if ("left" === n) return t(r[0], "right");
                    }
                  }
                  return e;
                },
                Ce = function (t, e) {
                  return t ? ((t = Pe(t, e)), _e[t.classes[0]] || null) : null;
                },
                Oe = function (t) {
                  return (t = Pe(t, "left")).hasClass("mtight");
                },
                Ae = function (t, e) {
                  var n = ["nulldelimiter"].concat(t.baseSizingClasses());
                  return Se(e.concat(n));
                },
                Be = function (t, e, n) {
                  if (!t) return Se();
                  if (ye[t.type]) {
                    var r = ye[t.type](t, e);
                    if (n && e.size !== n.size) {
                      r = Se(e.sizingClasses(n), [r], e);
                      var i = e.sizeMultiplier / n.sizeMultiplier;
                      (r.height *= i), (r.depth *= i);
                    }
                    return r;
                  }
                  throw new f("Got group of unknown type: '" + t.type + "'");
                };
              function ze(t, e) {
                var n = Se(["base"], t, e),
                  r = Se(["strut"]);
                return (
                  (r.style.height = n.height + n.depth + "em"),
                  (r.style.verticalAlign = -n.depth + "em"),
                  n.children.unshift(r),
                  n
                );
              }
              function Re(t, e) {
                var n = null;
                1 === t.length &&
                  "tag" === t[0].type &&
                  ((n = t[0].value.tag), (t = t[0].value.body));
                for (
                  var r = Ne(t, e, !0), i = [], a = [], o = 0;
                  o < r.length;
                  o++
                )
                  if (
                    (a.push(r[o]),
                    r[o].hasClass("mbin") ||
                      r[o].hasClass("mrel") ||
                      r[o].hasClass("allowbreak"))
                  ) {
                    for (
                      var s = !1;
                      o < r.length - 1 && r[o + 1].hasClass("mspace");

                    )
                      o++, a.push(r[o]), r[o].hasClass("nobreak") && (s = !0);
                    s || (i.push(ze(a, e)), (a = []));
                  } else
                    r[o].hasClass("newline") &&
                      (a.pop(),
                      a.length > 0 && (i.push(ze(a, e)), (a = [])),
                      i.push(r[o]));
                a.length > 0 && i.push(ze(a, e));
                var l = void 0;
                n && (((l = ze(Ne(n, e, !0))).classes = ["tag"]), i.push(l));
                var u = Se(["katex-html"], i);
                if ((u.setAttribute("aria-hidden", "true"), l)) {
                  var h = l.children[0];
                  (h.style.height = u.height + u.depth + "em"),
                    (h.style.verticalAlign = -u.depth + "em");
                }
                return u;
              }
              var De = {
                  MathNode: (function () {
                    function t(e, n) {
                      i()(this, t),
                        (this.type = e),
                        (this.attributes = {}),
                        (this.children = n || []);
                    }
                    return (
                      o()(t, [
                        {
                          key: "setAttribute",
                          value: function (t, e) {
                            this.attributes[t] = e;
                          },
                        },
                        {
                          key: "getAttribute",
                          value: function (t) {
                            return this.attributes[t];
                          },
                        },
                        {
                          key: "toNode",
                          value: function () {
                            var t = document.createElementNS(
                              "http://www.w3.org/1998/Math/MathML",
                              this.type
                            );
                            for (var e in this.attributes)
                              Object.prototype.hasOwnProperty.call(
                                this.attributes,
                                e
                              ) && t.setAttribute(e, this.attributes[e]);
                            var n = !0,
                              r = !1,
                              i = void 0;
                            try {
                              for (
                                var a, o = D()(this.children);
                                !(n = (a = o.next()).done);
                                n = !0
                              ) {
                                var s = a.value;
                                t.appendChild(s.toNode());
                              }
                            } catch (t) {
                              (r = !0), (i = t);
                            } finally {
                              try {
                                !n && o.return && o.return();
                              } finally {
                                if (r) throw i;
                              }
                            }
                            return t;
                          },
                        },
                        {
                          key: "toMarkup",
                          value: function () {
                            var t = "<" + this.type;
                            for (var e in this.attributes)
                              Object.prototype.hasOwnProperty.call(
                                this.attributes,
                                e
                              ) &&
                                ((t += " " + e + '="'),
                                (t += k.escape(this.attributes[e])),
                                (t += '"'));
                            t += ">";
                            for (var n = 0; n < this.children.length; n++)
                              t += this.children[n].toMarkup();
                            return t + "</" + this.type + ">";
                          },
                        },
                        {
                          key: "toText",
                          value: function () {
                            return this.children
                              .map(function (t) {
                                return t.toText();
                              })
                              .join("");
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  TextNode: (function () {
                    function t(e) {
                      var n =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      i()(this, t), (this.text = e), (this.needsEscape = n);
                    }
                    return (
                      o()(t, [
                        {
                          key: "toNode",
                          value: function () {
                            return document.createTextNode(this.toText());
                          },
                        },
                        {
                          key: "toMarkup",
                          value: function () {
                            return this.toText();
                          },
                        },
                        {
                          key: "toText",
                          value: function () {
                            return this.needsEscape
                              ? k.escape(this.text)
                              : this.text;
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                  SpaceNode: (function () {
                    function t(e) {
                      i()(this, t),
                        (this.width = e),
                        (this.character =
                          e >= 0.05555 && e <= 0.05556
                            ? "&VeryThinSpace;"
                            : e >= 0.1666 && e <= 0.1667
                            ? "&ThinSpace;"
                            : e >= 0.2222 && e <= 0.2223
                            ? "&MediumSpace;"
                            : e >= 0.2777 && e <= 0.2778
                            ? "&ThickSpace;"
                            : e >= -0.05556 && e <= -0.05555
                            ? "&NegativeVeryThinSpace;"
                            : e >= -0.1667 && e <= -0.1666
                            ? "&NegativeThinSpace;"
                            : e >= -0.2223 && e <= -0.2222
                            ? "&NegativeMediumSpace;"
                            : e >= -0.2778 && e <= -0.2777
                            ? "&NegativeThickSpace;"
                            : null);
                    }
                    return (
                      o()(t, [
                        {
                          key: "toNode",
                          value: function () {
                            if (this.character)
                              return document.createTextNode(this.character);
                            var t = document.createElementNS(
                              "http://www.w3.org/1998/Math/MathML",
                              "mspace"
                            );
                            return (
                              t.setAttribute("width", this.width + "em"), t
                            );
                          },
                        },
                        {
                          key: "toMarkup",
                          value: function () {
                            return this.character
                              ? "<mtext>" + this.character + "</mtext>"
                              : '<mspace width="' + this.width + 'em"/>';
                          },
                        },
                        {
                          key: "toText",
                          value: function () {
                            return this.character ? this.character : " ";
                          },
                        },
                      ]),
                      t
                    );
                  })(),
                },
                Ie = function (t, e, n) {
                  return (
                    !pt[e][t] ||
                      !pt[e][t].replace ||
                      55349 === t.charCodeAt(0) ||
                      (Et.hasOwnProperty(t) &&
                        n &&
                        ((n.fontFamily && "tt" === n.fontFamily.substr(4, 2)) ||
                          (n.font && "tt" === n.font.substr(4, 2)))) ||
                      (t = pt[e][t].replace),
                    new De.TextNode(t)
                  );
                },
                Ve = function (t) {
                  return 1 === t.length ? t[0] : new De.MathNode("mrow", t);
                },
                Le = function (t, e) {
                  if ("texttt" === e.fontFamily) return "monospace";
                  if ("textsf" === e.fontFamily)
                    return "textit" === e.fontShape && "textbf" === e.fontWeight
                      ? "sans-serif-bold-italic"
                      : "textit" === e.fontShape
                      ? "sans-serif-italic"
                      : "textbf" === e.fontWeight
                      ? "bold-sans-serif"
                      : "sans-serif";
                  if ("textit" === e.fontShape && "textbf" === e.fontWeight)
                    return "bold-italic";
                  if ("textit" === e.fontShape) return "italic";
                  if ("textbf" === e.fontWeight) return "bold";
                  var n = e.font;
                  if (!n) return null;
                  var r = t.mode;
                  if ("mathit" === n) return "italic";
                  if ("boldsymbol" === n) return "bold-italic";
                  var i = t.value;
                  return k.contains(["\\imath", "\\jmath"], i)
                    ? null
                    : (pt[r][i] && pt[r][i].replace && (i = pt[r][i].replace),
                      ct(i, se.fontMap[n].fontName, r)
                        ? se.fontMap[n].variant
                        : null);
                },
                je = function (t, e) {
                  for (var n = [], r = void 0, i = 0; i < t.length; i++) {
                    var a,
                      o = Fe(t[i], e);
                    if (
                      "mtext" === o.type &&
                      r &&
                      "mtext" === r.type &&
                      o.getAttribute("mathvariant") ===
                        r.getAttribute("mathvariant")
                    )
                      (a = r.children).push.apply(a, M()(o.children));
                    else if ("mn" === o.type && r && "mn" === r.type) {
                      var s;
                      (s = r.children).push.apply(s, M()(o.children));
                    } else if (
                      "mi" === o.type &&
                      1 === o.children.length &&
                      "." === o.children[0].text &&
                      r &&
                      "mn" === r.type
                    ) {
                      var l;
                      (l = r.children).push.apply(l, M()(o.children));
                    } else n.push(o), (r = o);
                  }
                  return n;
                },
                qe = function (t, e) {
                  return Ve(je(t, e));
                },
                Fe = function (t, e) {
                  if (!t) return new De.MathNode("mrow");
                  if (be[t.type]) return be[t.type](t, e);
                  throw new f("Got group of unknown type: '" + t.type + "'");
                },
                He = function (t) {
                  return new Wt({
                    style: t.displayMode ? z.DISPLAY : z.TEXT,
                    maxSize: t.maxSize,
                  });
                },
                Xe = {
                  widehat: "^",
                  widecheck: "ˇ",
                  widetilde: "~",
                  utilde: "~",
                  overleftarrow: "←",
                  underleftarrow: "←",
                  xleftarrow: "←",
                  overrightarrow: "→",
                  underrightarrow: "→",
                  xrightarrow: "→",
                  underbrace: "⎵",
                  overbrace: "⏞",
                  overleftrightarrow: "↔",
                  underleftrightarrow: "↔",
                  xleftrightarrow: "↔",
                  Overrightarrow: "⇒",
                  xRightarrow: "⇒",
                  overleftharpoon: "↼",
                  xleftharpoonup: "↼",
                  overrightharpoon: "⇀",
                  xrightharpoonup: "⇀",
                  xLeftarrow: "⇐",
                  xLeftrightarrow: "⇔",
                  xhookleftarrow: "↩",
                  xhookrightarrow: "↪",
                  xmapsto: "↦",
                  xrightharpoondown: "⇁",
                  xleftharpoondown: "↽",
                  xrightleftharpoons: "⇌",
                  xleftrightharpoons: "⇋",
                  xtwoheadleftarrow: "↞",
                  xtwoheadrightarrow: "↠",
                  xlongequal: "=",
                  xtofrom: "⇄",
                  xrightleftarrows: "⇄",
                  xrightequilibrium: "⇌",
                  xleftequilibrium: "⇋",
                },
                We = {
                  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
                  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
                  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
                  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
                  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
                  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
                  Overrightarrow: [
                    ["doublerightarrow"],
                    0.888,
                    560,
                    "xMaxYMin",
                  ],
                  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
                  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
                  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
                  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
                  xleftharpoondown: [
                    ["leftharpoondown"],
                    0.888,
                    522,
                    "xMinYMin",
                  ],
                  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
                  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
                  xrightharpoondown: [
                    ["rightharpoondown"],
                    0.888,
                    522,
                    "xMaxYMin",
                  ],
                  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
                  xtwoheadleftarrow: [
                    ["twoheadleftarrow"],
                    0.888,
                    334,
                    "xMinYMin",
                  ],
                  xtwoheadrightarrow: [
                    ["twoheadrightarrow"],
                    0.888,
                    334,
                    "xMaxYMin",
                  ],
                  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
                  overbrace: [
                    ["leftbrace", "midbrace", "rightbrace"],
                    1.6,
                    548,
                  ],
                  underbrace: [
                    ["leftbraceunder", "midbraceunder", "rightbraceunder"],
                    1.6,
                    548,
                  ],
                  underleftrightarrow: [
                    ["leftarrow", "rightarrow"],
                    0.888,
                    522,
                  ],
                  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
                  xLeftrightarrow: [
                    ["doubleleftarrow", "doublerightarrow"],
                    1.75,
                    560,
                  ],
                  xrightleftharpoons: [
                    ["leftharpoondownplus", "rightharpoonplus"],
                    1.75,
                    716,
                  ],
                  xleftrightharpoons: [
                    ["leftharpoonplus", "rightharpoondownplus"],
                    1.75,
                    716,
                  ],
                  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
                  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
                  overlinesegment: [
                    ["leftlinesegment", "rightlinesegment"],
                    0.888,
                    522,
                  ],
                  underlinesegment: [
                    ["leftlinesegment", "rightlinesegment"],
                    0.888,
                    522,
                  ],
                  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
                  undergroup: [
                    ["leftgroupunder", "rightgroupunder"],
                    0.888,
                    342,
                  ],
                  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
                  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
                  xrightleftarrows: [
                    ["baraboveleftarrow", "rightarrowabovebar"],
                    1.75,
                    901,
                  ],
                  xrightequilibrium: [
                    ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
                    1.75,
                    716,
                  ],
                  xleftequilibrium: [
                    ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
                    1.75,
                    716,
                  ],
                },
                Ge = function (t) {
                  var e = new De.MathNode("mo", [
                    new De.TextNode(Xe[t.substr(1)]),
                  ]);
                  return e.setAttribute("stretchy", "true"), e;
                },
                Ue = function (t, e) {
                  var n = (function () {
                      var n = 4e5,
                        r = t.value.label.substr(1);
                      if (
                        k.contains(
                          ["widehat", "widecheck", "widetilde", "utilde"],
                          r
                        )
                      ) {
                        var i = (function (t) {
                            return "ordgroup" === t.type ? t.value.length : 1;
                          })(t.value.base),
                          a = void 0,
                          o = void 0,
                          s = void 0;
                        if (i > 5)
                          "widehat" === r || "widecheck" === r
                            ? ((a = 420), (n = 2364), (s = 0.42), (o = r + "4"))
                            : ((a = 312),
                              (n = 2340),
                              (s = 0.34),
                              (o = "tilde4"));
                        else {
                          var l = [1, 1, 2, 2, 3, 3][i];
                          "widehat" === r || "widecheck" === r
                            ? ((n = [0, 1062, 2364, 2364, 2364][l]),
                              (a = [0, 239, 300, 360, 420][l]),
                              (s = [0, 0.24, 0.3, 0.3, 0.36, 0.42][l]),
                              (o = r + l))
                            : ((n = [0, 600, 1033, 2339, 2340][l]),
                              (a = [0, 260, 286, 306, 312][l]),
                              (s = [0, 0.26, 0.286, 0.3, 0.306, 0.34][l]),
                              (o = "tilde" + l));
                        }
                        var u = new st.pathNode(o),
                          h = new st.svgNode([u], {
                            width: "100%",
                            height: s + "em",
                            viewBox: "0 0 " + n + " " + a,
                            preserveAspectRatio: "none",
                          });
                        return {
                          span: se.makeSvgSpan([], [h], e),
                          minWidth: 0,
                          height: s,
                        };
                      }
                      var c = [],
                        f = We[r],
                        m = V()(f, 3),
                        d = m[0],
                        p = m[1],
                        v = m[2],
                        g = v / 1e3,
                        y = d.length,
                        b = void 0,
                        x = void 0;
                      if (1 === y) (b = ["hide-tail"]), (x = [f[3]]);
                      else if (2 === y)
                        (b = ["halfarrow-left", "halfarrow-right"]),
                          (x = ["xMinYMin", "xMaxYMin"]);
                      else {
                        if (3 !== y)
                          throw new Error(
                            "Correct katexImagesData or update code here to support\n                    " +
                              y +
                              " children."
                          );
                        (b = ["brace-left", "brace-center", "brace-right"]),
                          (x = ["xMinYMin", "xMidYMin", "xMaxYMin"]);
                      }
                      for (var w = 0; w < y; w++) {
                        var S = new st.pathNode(d[w]),
                          E = new st.svgNode([S], {
                            width: "400em",
                            height: g + "em",
                            viewBox: "0 0 " + n + " " + v,
                            preserveAspectRatio: x[w] + " slice",
                          }),
                          M = se.makeSvgSpan([b[w]], [E], e);
                        if (1 === y) return { span: M, minWidth: p, height: g };
                        (M.style.height = g + "em"), c.push(M);
                      }
                      return {
                        span: se.makeSpan(["stretchy"], c, e),
                        minWidth: p,
                        height: g,
                      };
                    })(),
                    r = n.span,
                    i = n.minWidth,
                    a = n.height;
                  return (
                    (r.height = a),
                    (r.style.height = a + "em"),
                    i > 0 && (r.style.minWidth = i + "em"),
                    r
                  );
                },
                Ye = function (t, e) {
                  var n = void 0,
                    r = void 0,
                    i = he(t, "supsub"),
                    a = void 0;
                  i
                    ? ((n = (r = ue(i.value.base, "accent")).value.base),
                      (i.value.base = n),
                      (a = (function (t) {
                        if (t instanceof Z) return t;
                        throw new Error(
                          "Expected HtmlDomContainer but got " + String(t) + "."
                        );
                      })(Be(i, e))),
                      (i.value.base = r))
                    : (n = (r = ue(t, "accent")).value.base);
                  var o = Be(n, e.havingCrampedStyle()),
                    s = 0;
                  if (r.value.isShifty && k.isCharacterBox(n)) {
                    var l = k.getBaseElem(n);
                    s = (function (t) {
                      if (t instanceof rt) return t;
                      throw new Error(
                        "Expected symbolNode but got " + String(t) + "."
                      );
                    })(Be(l, e.havingCrampedStyle())).skew;
                  }
                  var u = Math.min(o.height, e.fontMetrics().xHeight),
                    h = void 0;
                  if (r.value.isStretchy)
                    (h = Ue(r, e)),
                      (h = se.makeVList(
                        {
                          positionType: "firstBaseline",
                          children: [
                            { type: "elem", elem: o },
                            {
                              type: "elem",
                              elem: h,
                              wrapperClasses: ["svg-align"],
                              wrapperStyle:
                                s > 0
                                  ? {
                                      width: "calc(100% - " + 2 * s + "em)",
                                      marginLeft: 2 * s + "em",
                                    }
                                  : void 0,
                            },
                          ],
                        },
                        e
                      ));
                  else {
                    var c = void 0,
                      f = void 0;
                    "\\vec" === r.value.label
                      ? ((c = se.staticSvg("vec", e)), (f = se.svgData.vec[1]))
                      : (((c = se.makeSymbol(
                          r.value.label,
                          "Main-Regular",
                          r.mode,
                          e
                        )).italic = 0),
                        (f = c.width)),
                      (h = se.makeSpan(["accent-body"], [c]));
                    var m = "\\textcircled" === r.value.label;
                    m && (h.classes.push("accent-full"), (u = o.height));
                    var d = s;
                    m || (d -= f / 2),
                      (h.style.left = d + "em"),
                      "\\textcircled" === r.value.label &&
                        (h.style.top = ".2em"),
                      (h = se.makeVList(
                        {
                          positionType: "firstBaseline",
                          children: [
                            { type: "elem", elem: o },
                            { type: "kern", size: -u },
                            { type: "elem", elem: h },
                          ],
                        },
                        e
                      ));
                  }
                  var p = se.makeSpan(["mord", "accent"], [h], e);
                  return a
                    ? ((a.children[0] = p),
                      (a.height = Math.max(p.height, a.height)),
                      (a.classes[0] = "mord"),
                      a)
                    : p;
                },
                $e = function (t, e) {
                  var n,
                    r = t.value;
                  n = r.isStretchy
                    ? Ge(r.label)
                    : new De.MathNode("mo", [Ie(r.label, t.mode)]);
                  var i = new De.MathNode("mover", [Fe(r.base, e), n]);
                  return i.setAttribute("accent", "true"), i;
                },
                Je = new RegExp(
                  [
                    "\\acute",
                    "\\grave",
                    "\\ddot",
                    "\\tilde",
                    "\\bar",
                    "\\breve",
                    "\\check",
                    "\\hat",
                    "\\vec",
                    "\\dot",
                    "\\mathring",
                  ]
                    .map(function (t) {
                      return "\\" + t;
                    })
                    .join("|")
                );
              xe({
                type: "accent",
                names: [
                  "\\acute",
                  "\\grave",
                  "\\ddot",
                  "\\tilde",
                  "\\bar",
                  "\\breve",
                  "\\check",
                  "\\hat",
                  "\\vec",
                  "\\dot",
                  "\\mathring",
                  "\\widecheck",
                  "\\widehat",
                  "\\widetilde",
                  "\\overrightarrow",
                  "\\overleftarrow",
                  "\\Overrightarrow",
                  "\\overleftrightarrow",
                  "\\overgroup",
                  "\\overlinesegment",
                  "\\overleftharpoon",
                  "\\overrightharpoon",
                ],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var n = e[0],
                    r = !Je.test(t.funcName),
                    i =
                      !r ||
                      "\\widehat" === t.funcName ||
                      "\\widetilde" === t.funcName ||
                      "\\widecheck" === t.funcName;
                  return new le(
                    "accent",
                    {
                      type: "accent",
                      label: t.funcName,
                      isStretchy: r,
                      isShifty: i,
                      base: n,
                    },
                    t.parser.mode
                  );
                },
                htmlBuilder: Ye,
                mathmlBuilder: $e,
              }),
                xe({
                  type: "accent",
                  names: [
                    "\\'",
                    "\\`",
                    "\\^",
                    "\\~",
                    "\\=",
                    "\\u",
                    "\\.",
                    '\\"',
                    "\\r",
                    "\\H",
                    "\\v",
                    "\\textcircled",
                  ],
                  props: { numArgs: 1, allowedInText: !0, allowedInMath: !1 },
                  handler: function (t, e) {
                    var n = e[0];
                    return new le(
                      "accent",
                      {
                        type: "accent",
                        label: t.funcName,
                        isStretchy: !1,
                        isShifty: !0,
                        base: n,
                      },
                      t.parser.mode
                    );
                  },
                  htmlBuilder: Ye,
                  mathmlBuilder: $e,
                }),
                xe({
                  type: "accentUnder",
                  names: [
                    "\\underleftarrow",
                    "\\underrightarrow",
                    "\\underleftrightarrow",
                    "\\undergroup",
                    "\\underlinesegment",
                    "\\utilde",
                  ],
                  props: { numArgs: 1 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = t.funcName,
                      i = e[0];
                    return new le(
                      "accentUnder",
                      { type: "accentUnder", label: r, base: i },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = Be(t.value.base, e),
                      r = Ue(t, e),
                      i = "\\utilde" === t.value.label ? 0.12 : 0,
                      a = se.makeVList(
                        {
                          positionType: "bottom",
                          positionData: r.height + i,
                          children: [
                            {
                              type: "elem",
                              elem: r,
                              wrapperClasses: ["svg-align"],
                            },
                            { type: "kern", size: i },
                            { type: "elem", elem: n },
                          ],
                        },
                        e
                      );
                    return se.makeSpan(["mord", "accentunder"], [a], e);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = Ge(t.value.label),
                      r = new De.MathNode("munder", [Fe(t.value.base, e), n]);
                    return r.setAttribute("accentunder", "true"), r;
                  },
                }),
                xe({
                  type: "xArrow",
                  names: [
                    "\\xleftarrow",
                    "\\xrightarrow",
                    "\\xLeftarrow",
                    "\\xRightarrow",
                    "\\xleftrightarrow",
                    "\\xLeftrightarrow",
                    "\\xhookleftarrow",
                    "\\xhookrightarrow",
                    "\\xmapsto",
                    "\\xrightharpoondown",
                    "\\xrightharpoonup",
                    "\\xleftharpoondown",
                    "\\xleftharpoonup",
                    "\\xrightleftharpoons",
                    "\\xleftrightharpoons",
                    "\\xlongequal",
                    "\\xtwoheadrightarrow",
                    "\\xtwoheadleftarrow",
                    "\\xtofrom",
                    "\\xrightleftarrows",
                    "\\xrightequilibrium",
                    "\\xleftequilibrium",
                  ],
                  props: { numArgs: 1, numOptionalArgs: 1 },
                  handler: function (t, e, n) {
                    var r = t.parser,
                      i = t.funcName;
                    return new le(
                      "xArrow",
                      { type: "xArrow", label: i, body: e[0], below: n[0] },
                      r.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = e.style,
                      r = e.havingStyle(n.sup()),
                      i = Be(t.value.body, r, e);
                    i.classes.push("x-arrow-pad");
                    var a = void 0;
                    t.value.below &&
                      ((r = e.havingStyle(n.sub())),
                      (a = Be(t.value.below, r, e)).classes.push(
                        "x-arrow-pad"
                      ));
                    var o = Ue(t, e),
                      s = -e.fontMetrics().axisHeight + 0.5 * o.height,
                      l = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
                    (i.depth > 0.25 ||
                      "\\xleftequilibrium" === t.value.label) &&
                      (l -= i.depth);
                    var u = void 0;
                    if (a) {
                      var h =
                        -e.fontMetrics().axisHeight +
                        a.height +
                        0.5 * o.height +
                        0.111;
                      u = se.makeVList(
                        {
                          positionType: "individualShift",
                          children: [
                            { type: "elem", elem: i, shift: l },
                            { type: "elem", elem: o, shift: s },
                            { type: "elem", elem: a, shift: h },
                          ],
                        },
                        e
                      );
                    } else
                      u = se.makeVList(
                        {
                          positionType: "individualShift",
                          children: [
                            { type: "elem", elem: i, shift: l },
                            { type: "elem", elem: o, shift: s },
                          ],
                        },
                        e
                      );
                    return (
                      u.children[0].children[0].children[1].classes.push(
                        "svg-align"
                      ),
                      se.makeSpan(["mrel", "x-arrow"], [u], e)
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = Ge(t.value.label),
                      r = void 0,
                      i = void 0;
                    if (t.value.body) {
                      var a = Fe(t.value.body, e);
                      t.value.below
                        ? ((i = Fe(t.value.below, e)),
                          (r = new De.MathNode("munderover", [n, i, a])))
                        : (r = new De.MathNode("mover", [n, a]));
                    } else
                      t.value.below
                        ? ((i = Fe(t.value.below, e)),
                          (r = new De.MathNode("munder", [n, i])))
                        : (r = new De.MathNode("mover", [n]));
                    return r;
                  },
                });
              var Ke = function (t, e) {
                  var n = Ne(t.value.value, e.withColor(t.value.color), !1);
                  return new se.makeFragment(n);
                },
                Ze = function (t, e) {
                  var n = je(t.value.value, e),
                    r = new De.MathNode("mstyle", n);
                  return r.setAttribute("mathcolor", t.value.color), r;
                };
              xe({
                type: "color",
                names: ["\\textcolor"],
                props: {
                  numArgs: 2,
                  allowedInText: !0,
                  greediness: 3,
                  argTypes: ["color", "original"],
                },
                handler: function (t, e) {
                  var n = t.parser,
                    r = ue(e[0], "color-token"),
                    i = e[1];
                  return new le(
                    "color",
                    { type: "color", color: r.value, value: ke(i) },
                    n.mode
                  );
                },
                htmlBuilder: Ke,
                mathmlBuilder: Ze,
              }),
                xe({
                  type: "color",
                  names: [
                    "\\blue",
                    "\\orange",
                    "\\pink",
                    "\\red",
                    "\\green",
                    "\\gray",
                    "\\purple",
                    "\\blueA",
                    "\\blueB",
                    "\\blueC",
                    "\\blueD",
                    "\\blueE",
                    "\\tealA",
                    "\\tealB",
                    "\\tealC",
                    "\\tealD",
                    "\\tealE",
                    "\\greenA",
                    "\\greenB",
                    "\\greenC",
                    "\\greenD",
                    "\\greenE",
                    "\\goldA",
                    "\\goldB",
                    "\\goldC",
                    "\\goldD",
                    "\\goldE",
                    "\\redA",
                    "\\redB",
                    "\\redC",
                    "\\redD",
                    "\\redE",
                    "\\maroonA",
                    "\\maroonB",
                    "\\maroonC",
                    "\\maroonD",
                    "\\maroonE",
                    "\\purpleA",
                    "\\purpleB",
                    "\\purpleC",
                    "\\purpleD",
                    "\\purpleE",
                    "\\mintA",
                    "\\mintB",
                    "\\mintC",
                    "\\grayA",
                    "\\grayB",
                    "\\grayC",
                    "\\grayD",
                    "\\grayE",
                    "\\grayF",
                    "\\grayG",
                    "\\grayH",
                    "\\grayI",
                    "\\kaBlue",
                    "\\kaGreen",
                  ],
                  props: { numArgs: 1, allowedInText: !0, greediness: 3 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = t.funcName,
                      i = e[0];
                    return new le(
                      "color",
                      {
                        type: "color",
                        color: "katex-" + r.slice(1),
                        value: ke(i),
                      },
                      n.mode
                    );
                  },
                  htmlBuilder: Ke,
                  mathmlBuilder: Ze,
                }),
                xe({
                  type: "color",
                  names: ["\\color"],
                  props: {
                    numArgs: 1,
                    allowedInText: !0,
                    greediness: 3,
                    argTypes: ["color"],
                  },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = t.breakOnTokenText,
                      i = ue(e[0], "color-token"),
                      a = n.parseExpression(!0, r);
                    return new le(
                      "color",
                      { type: "color", color: i.value, value: a },
                      n.mode
                    );
                  },
                  htmlBuilder: Ke,
                  mathmlBuilder: Ze,
                }),
                xe({
                  type: "cr",
                  names: ["\\cr", "\\newline"],
                  props: {
                    numArgs: 0,
                    numOptionalArgs: 1,
                    argTypes: ["size"],
                    allowedInText: !0,
                  },
                  handler: function (t, e, n) {
                    var r = t.parser,
                      i = t.funcName,
                      a = n[0],
                      o = "\\cr" === i,
                      s = !1;
                    return (
                      o ||
                        (s =
                          !r.settings.displayMode ||
                          !r.settings.useStrictBehavior(
                            "newLineInDisplayMode",
                            "In LaTeX, \\\\ or \\newline does nothing in display mode"
                          )),
                      new le(
                        "cr",
                        {
                          type: "cr",
                          newLine: s,
                          newRow: o,
                          size: a && ue(a, "size"),
                        },
                        r.mode
                      )
                    );
                  },
                  htmlBuilder: function (t, e) {
                    if (t.value.newRow)
                      throw new f(
                        "\\cr valid only within a tabular/array environment"
                      );
                    var n = se.makeSpan(["mspace"], [], e);
                    return (
                      t.value.newLine &&
                        (n.classes.push("newline"),
                        t.value.size &&
                          (n.style.marginTop =
                            Yt(t.value.size.value.value, e) + "em")),
                      n
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mspace");
                    return (
                      t.value.newLine &&
                        (n.setAttribute("linebreak", "newline"),
                        t.value.size &&
                          n.setAttribute(
                            "height",
                            Yt(t.value.size.value.value, e) + "em"
                          )),
                      n
                    );
                  },
                });
              var Qe = function (t, e, n) {
                  var r = ct((pt.math[t] && pt.math[t].replace) || t, e, n);
                  if (!r)
                    throw new Error(
                      "Unsupported symbol " + t + " and font size " + e + "."
                    );
                  return r;
                },
                tn = function (t, e, n, r) {
                  var i = n.havingBaseStyle(e),
                    a = se.makeSpan(r.concat(i.sizingClasses(n)), [t], n),
                    o = i.sizeMultiplier / n.sizeMultiplier;
                  return (
                    (a.height *= o),
                    (a.depth *= o),
                    (a.maxFontSize = i.sizeMultiplier),
                    a
                  );
                },
                en = function (t, e, n) {
                  var r = e.havingBaseStyle(n),
                    i =
                      (1 - e.sizeMultiplier / r.sizeMultiplier) *
                      e.fontMetrics().axisHeight;
                  t.classes.push("delimcenter"),
                    (t.style.top = i + "em"),
                    (t.height -= i),
                    (t.depth += i);
                },
                nn = function (t, e, n, r, i, a) {
                  var o = (function (t, e, n, r) {
                      return se.makeSymbol(t, "Size" + e + "-Regular", n, r);
                    })(t, e, i, r),
                    s = tn(
                      se.makeSpan(["delimsizing", "size" + e], [o], r),
                      z.TEXT,
                      r,
                      a
                    );
                  return n && en(s, r, z.TEXT), s;
                },
                rn = function (t, e, n) {
                  var r;
                  return (
                    (r = "Size1-Regular" === e ? "delim-size1" : "delim-size4"),
                    {
                      type: "elem",
                      elem: se.makeSpan(
                        ["delimsizinginner", r],
                        [se.makeSpan([], [se.makeSymbol(t, e, n)])]
                      ),
                    }
                  );
                },
                an = function (t, e, n, r, i, a) {
                  var o = void 0,
                    s = void 0,
                    l = void 0,
                    u = void 0;
                  (o = l = u = t), (s = null);
                  var h = "Size1-Regular";
                  "\\uparrow" === t
                    ? (l = u = "⏐")
                    : "\\Uparrow" === t
                    ? (l = u = "‖")
                    : "\\downarrow" === t
                    ? (o = l = "⏐")
                    : "\\Downarrow" === t
                    ? (o = l = "‖")
                    : "\\updownarrow" === t
                    ? ((o = "\\uparrow"), (l = "⏐"), (u = "\\downarrow"))
                    : "\\Updownarrow" === t
                    ? ((o = "\\Uparrow"), (l = "‖"), (u = "\\Downarrow"))
                    : "[" === t || "\\lbrack" === t
                    ? ((o = "⎡"), (l = "⎢"), (u = "⎣"), (h = "Size4-Regular"))
                    : "]" === t || "\\rbrack" === t
                    ? ((o = "⎤"), (l = "⎥"), (u = "⎦"), (h = "Size4-Regular"))
                    : "\\lfloor" === t || "⌊" === t
                    ? ((l = o = "⎢"), (u = "⎣"), (h = "Size4-Regular"))
                    : "\\lceil" === t || "⌈" === t
                    ? ((o = "⎡"), (l = u = "⎢"), (h = "Size4-Regular"))
                    : "\\rfloor" === t || "⌋" === t
                    ? ((l = o = "⎥"), (u = "⎦"), (h = "Size4-Regular"))
                    : "\\rceil" === t || "⌉" === t
                    ? ((o = "⎤"), (l = u = "⎥"), (h = "Size4-Regular"))
                    : "(" === t
                    ? ((o = "⎛"), (l = "⎜"), (u = "⎝"), (h = "Size4-Regular"))
                    : ")" === t
                    ? ((o = "⎞"), (l = "⎟"), (u = "⎠"), (h = "Size4-Regular"))
                    : "\\{" === t || "\\lbrace" === t
                    ? ((o = "⎧"),
                      (s = "⎨"),
                      (u = "⎩"),
                      (l = "⎪"),
                      (h = "Size4-Regular"))
                    : "\\}" === t || "\\rbrace" === t
                    ? ((o = "⎫"),
                      (s = "⎬"),
                      (u = "⎭"),
                      (l = "⎪"),
                      (h = "Size4-Regular"))
                    : "\\lgroup" === t || "⟮" === t
                    ? ((o = "⎧"), (u = "⎩"), (l = "⎪"), (h = "Size4-Regular"))
                    : "\\rgroup" === t || "⟯" === t
                    ? ((o = "⎫"), (u = "⎭"), (l = "⎪"), (h = "Size4-Regular"))
                    : "\\lmoustache" === t || "⎰" === t
                    ? ((o = "⎧"), (u = "⎭"), (l = "⎪"), (h = "Size4-Regular"))
                    : ("\\rmoustache" !== t && "⎱" !== t) ||
                      ((o = "⎫"), (u = "⎩"), (l = "⎪"), (h = "Size4-Regular"));
                  var c = Qe(o, h, i),
                    f = c.height + c.depth,
                    m = Qe(l, h, i),
                    d = m.height + m.depth,
                    p = Qe(u, h, i),
                    v = p.height + p.depth,
                    g = 0,
                    y = 1;
                  if (null !== s) {
                    var b = Qe(s, h, i);
                    (g = b.height + b.depth), (y = 2);
                  }
                  var x = f + v + g,
                    w = Math.ceil((e - x) / (y * d)),
                    k = x + w * y * d,
                    S = r.fontMetrics().axisHeight;
                  n && (S *= r.sizeMultiplier);
                  var E = k / 2 - S,
                    M = [];
                  if ((M.push(rn(u, h, i)), null === s))
                    for (var T = 0; T < w; T++) M.push(rn(l, h, i));
                  else {
                    for (var _ = 0; _ < w; _++) M.push(rn(l, h, i));
                    M.push(rn(s, h, i));
                    for (var N = 0; N < w; N++) M.push(rn(l, h, i));
                  }
                  M.push(rn(o, h, i));
                  var P = r.havingBaseStyle(z.TEXT),
                    C = se.makeVList(
                      { positionType: "bottom", positionData: E, children: M },
                      P
                    );
                  return tn(
                    se.makeSpan(["delimsizing", "mult"], [C], P),
                    z.TEXT,
                    r,
                    a
                  );
                },
                on = function (t, e, n, r) {
                  var i = void 0;
                  "sqrtTall" === t &&
                    (i =
                      "M702 80H400000v40H742v" +
                      (n - 54 - 80) +
                      "l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z");
                  var a = new st.pathNode(t, i),
                    o = new st.svgNode([a], {
                      width: "400em",
                      height: e + "em",
                      viewBox: "0 0 400000 " + n,
                      preserveAspectRatio: "xMinYMin slice",
                    });
                  return se.makeSvgSpan(["hide-tail"], [o], r);
                },
                sn = [
                  "(",
                  ")",
                  "[",
                  "\\lbrack",
                  "]",
                  "\\rbrack",
                  "\\{",
                  "\\lbrace",
                  "\\}",
                  "\\rbrace",
                  "\\lfloor",
                  "\\rfloor",
                  "⌊",
                  "⌋",
                  "\\lceil",
                  "\\rceil",
                  "⌈",
                  "⌉",
                  "\\surd",
                ],
                ln = [
                  "\\uparrow",
                  "\\downarrow",
                  "\\updownarrow",
                  "\\Uparrow",
                  "\\Downarrow",
                  "\\Updownarrow",
                  "|",
                  "\\|",
                  "\\vert",
                  "\\Vert",
                  "\\lvert",
                  "\\rvert",
                  "\\lVert",
                  "\\rVert",
                  "\\lgroup",
                  "\\rgroup",
                  "⟮",
                  "⟯",
                  "\\lmoustache",
                  "\\rmoustache",
                  "⎰",
                  "⎱",
                ],
                un = [
                  "<",
                  ">",
                  "\\langle",
                  "\\rangle",
                  "/",
                  "\\backslash",
                  "\\lt",
                  "\\gt",
                ],
                hn = [0, 1.2, 1.8, 2.4, 3],
                cn = [
                  { type: "small", style: z.SCRIPTSCRIPT },
                  { type: "small", style: z.SCRIPT },
                  { type: "small", style: z.TEXT },
                  { type: "large", size: 1 },
                  { type: "large", size: 2 },
                  { type: "large", size: 3 },
                  { type: "large", size: 4 },
                ],
                fn = [
                  { type: "small", style: z.SCRIPTSCRIPT },
                  { type: "small", style: z.SCRIPT },
                  { type: "small", style: z.TEXT },
                  { type: "stack" },
                ],
                mn = [
                  { type: "small", style: z.SCRIPTSCRIPT },
                  { type: "small", style: z.SCRIPT },
                  { type: "small", style: z.TEXT },
                  { type: "large", size: 1 },
                  { type: "large", size: 2 },
                  { type: "large", size: 3 },
                  { type: "large", size: 4 },
                  { type: "stack" },
                ],
                dn = function (t) {
                  if ("small" === t.type) return "Main-Regular";
                  if ("large" === t.type) return "Size" + t.size + "-Regular";
                  if ("stack" === t.type) return "Size4-Regular";
                  throw new Error(
                    "Add support for delim type '" + t.type + "' here."
                  );
                },
                pn = function (t, e, n, r) {
                  for (
                    var i = Math.min(2, 3 - r.style.size);
                    i < n.length && "stack" !== n[i].type;
                    i++
                  ) {
                    var a = Qe(t, dn(n[i]), "math"),
                      o = a.height + a.depth;
                    if (
                      ("small" === n[i].type &&
                        (o *= r.havingBaseStyle(n[i].style).sizeMultiplier),
                      o > e)
                    )
                      return n[i];
                  }
                  return n[n.length - 1];
                },
                vn = function (t, e, n, r, i, a) {
                  "<" === t || "\\lt" === t || "⟨" === t
                    ? (t = "\\langle")
                    : (">" !== t && "\\gt" !== t && "⟩" !== t) ||
                      (t = "\\rangle");
                  var o;
                  o = k.contains(un, t) ? cn : k.contains(sn, t) ? mn : fn;
                  var s = pn(t, e, o, r);
                  return "small" === s.type
                    ? (function (t, e, n, r, i, a) {
                        var o = se.makeSymbol(t, "Main-Regular", i, r),
                          s = tn(o, e, r, a);
                        return n && en(s, r, e), s;
                      })(t, s.style, n, r, i, a)
                    : "large" === s.type
                    ? nn(t, s.size, n, r, i, a)
                    : an(t, e, n, r, i, a);
                },
                gn = function (t, e, n, r, i) {
                  if (
                    ("<" === t || "\\lt" === t || "⟨" === t
                      ? (t = "\\langle")
                      : (">" !== t && "\\gt" !== t && "⟩" !== t) ||
                        (t = "\\rangle"),
                    k.contains(sn, t) || k.contains(un, t))
                  )
                    return nn(t, e, !1, n, r, i);
                  if (k.contains(ln, t)) return an(t, hn[e], !1, n, r, i);
                  throw new f("Illegal delimiter: '" + t + "'");
                },
                yn = vn,
                bn = function (t, e, n, r, i, a) {
                  var o = r.fontMetrics().axisHeight * r.sizeMultiplier,
                    s = 5 / r.fontMetrics().ptPerEm,
                    l = Math.max(e - o, n + o),
                    u = Math.max((l / 500) * 901, 2 * l - s);
                  return vn(t, u, !0, r, i, a);
                },
                xn = {
                  "\\bigl": { mclass: "mopen", size: 1 },
                  "\\Bigl": { mclass: "mopen", size: 2 },
                  "\\biggl": { mclass: "mopen", size: 3 },
                  "\\Biggl": { mclass: "mopen", size: 4 },
                  "\\bigr": { mclass: "mclose", size: 1 },
                  "\\Bigr": { mclass: "mclose", size: 2 },
                  "\\biggr": { mclass: "mclose", size: 3 },
                  "\\Biggr": { mclass: "mclose", size: 4 },
                  "\\bigm": { mclass: "mrel", size: 1 },
                  "\\Bigm": { mclass: "mrel", size: 2 },
                  "\\biggm": { mclass: "mrel", size: 3 },
                  "\\Biggm": { mclass: "mrel", size: 4 },
                  "\\big": { mclass: "mord", size: 1 },
                  "\\Big": { mclass: "mord", size: 2 },
                  "\\bigg": { mclass: "mord", size: 3 },
                  "\\Bigg": { mclass: "mord", size: 4 },
                },
                wn = [
                  "(",
                  ")",
                  "[",
                  "\\lbrack",
                  "]",
                  "\\rbrack",
                  "\\{",
                  "\\lbrace",
                  "\\}",
                  "\\rbrace",
                  "\\lfloor",
                  "\\rfloor",
                  "⌊",
                  "⌋",
                  "\\lceil",
                  "\\rceil",
                  "⌈",
                  "⌉",
                  "<",
                  ">",
                  "\\langle",
                  "⟨",
                  "\\rangle",
                  "⟩",
                  "\\lt",
                  "\\gt",
                  "\\lvert",
                  "\\rvert",
                  "\\lVert",
                  "\\rVert",
                  "\\lgroup",
                  "\\rgroup",
                  "⟮",
                  "⟯",
                  "\\lmoustache",
                  "\\rmoustache",
                  "⎰",
                  "⎱",
                  "/",
                  "\\backslash",
                  "|",
                  "\\vert",
                  "\\|",
                  "\\Vert",
                  "\\uparrow",
                  "\\Uparrow",
                  "\\downarrow",
                  "\\Downarrow",
                  "\\updownarrow",
                  "\\Updownarrow",
                  ".",
                ];
              function kn(t, e) {
                var n = ce(t);
                if (n && k.contains(wn, n.value)) return n;
                throw new f(
                  "Invalid delimiter: '" +
                    String(t.value) +
                    "' after '" +
                    e.funcName +
                    "'",
                  t
                );
              }
              function Sn(t) {
                if (!t.value.body)
                  throw new Error(
                    "Bug: The leftright ParseNode wasn't fully parsed."
                  );
                return t.value;
              }
              xe({
                type: "delimsizing",
                names: [
                  "\\bigl",
                  "\\Bigl",
                  "\\biggl",
                  "\\Biggl",
                  "\\bigr",
                  "\\Bigr",
                  "\\biggr",
                  "\\Biggr",
                  "\\bigm",
                  "\\Bigm",
                  "\\biggm",
                  "\\Biggm",
                  "\\big",
                  "\\Big",
                  "\\bigg",
                  "\\Bigg",
                ],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var n = kn(e[0], t);
                  return new le(
                    "delimsizing",
                    {
                      type: "delimsizing",
                      size: xn[t.funcName].size,
                      mclass: xn[t.funcName].mclass,
                      value: n.value,
                    },
                    t.parser.mode
                  );
                },
                htmlBuilder: function (t, e) {
                  var n = t.value.value;
                  return "." === n
                    ? se.makeSpan([t.value.mclass])
                    : gn(n, t.value.size, e, t.mode, [t.value.mclass]);
                },
                mathmlBuilder: function (t) {
                  var e = [];
                  "." !== t.value.value && e.push(Ie(t.value.value, t.mode));
                  var n = new De.MathNode("mo", e);
                  return (
                    "mopen" === t.value.mclass || "mclose" === t.value.mclass
                      ? n.setAttribute("fence", "true")
                      : n.setAttribute("fence", "false"),
                    n
                  );
                },
              }),
                xe({
                  type: "leftright-right",
                  names: ["\\right"],
                  props: { numArgs: 1 },
                  handler: function (t, e) {
                    return new le(
                      "leftright-right",
                      { type: "leftright-right", value: kn(e[0], t).value },
                      t.parser.mode
                    );
                  },
                }),
                xe({
                  type: "leftright",
                  names: ["\\left"],
                  props: { numArgs: 1 },
                  handler: function (t, e) {
                    var n = kn(e[0], t),
                      r = t.parser;
                    ++r.leftrightDepth;
                    var i = r.parseExpression(!1);
                    --r.leftrightDepth, r.expect("\\right", !1);
                    var a = r.parseFunction();
                    if (!a)
                      throw new f("failed to parse function after \\right");
                    return new le(
                      "leftright",
                      {
                        type: "leftright",
                        body: i,
                        left: n.value,
                        right: ue(a, "leftright-right").value.value,
                      },
                      r.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    for (
                      var n = Sn(t),
                        r = Ne(n.body, e, !0, [null, "mclose"]),
                        i = 0,
                        a = 0,
                        o = !1,
                        s = 0;
                      s < r.length;
                      s++
                    )
                      r[s].isMiddle
                        ? (o = !0)
                        : ((i = Math.max(r[s].height, i)),
                          (a = Math.max(r[s].depth, a)));
                    (i *= e.sizeMultiplier), (a *= e.sizeMultiplier);
                    var l;
                    if (
                      ((l =
                        "." === n.left
                          ? Ae(e, ["mopen"])
                          : bn(n.left, i, a, e, t.mode, ["mopen"])),
                      r.unshift(l),
                      o)
                    )
                      for (var u = 1; u < r.length; u++) {
                        var h = r[u].isMiddle;
                        h && (r[u] = bn(h.value, i, a, h.options, t.mode, []));
                      }
                    var c;
                    return (
                      (c =
                        "." === n.right
                          ? Ae(e, ["mclose"])
                          : bn(n.right, i, a, e, t.mode, ["mclose"])),
                      r.push(c),
                      se.makeSpan(["minner"], r, e)
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = Sn(t),
                      r = je(n.body, e);
                    if ("." !== n.left) {
                      var i = new De.MathNode("mo", [Ie(n.left, t.mode)]);
                      i.setAttribute("fence", "true"), r.unshift(i);
                    }
                    if ("." !== n.right) {
                      var a = new De.MathNode("mo", [Ie(n.right, t.mode)]);
                      a.setAttribute("fence", "true"), r.push(a);
                    }
                    return Ve(r);
                  },
                }),
                xe({
                  type: "middle",
                  names: ["\\middle"],
                  props: { numArgs: 1 },
                  handler: function (t, e) {
                    var n = kn(e[0], t);
                    if (!t.parser.leftrightDepth)
                      throw new f("\\middle without preceding \\left", n);
                    return new le(
                      "middle",
                      { type: "middle", value: n.value },
                      t.parser.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = void 0;
                    if ("." === t.value.value) n = Ae(e, []);
                    else {
                      n = gn(t.value.value, 1, e, t.mode, []);
                      var r = { value: t.value.value, options: e };
                      n.isMiddle = r;
                    }
                    return n;
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mo", [Ie(t.value.value, t.mode)]);
                    return n.setAttribute("fence", "true"), n;
                  },
                });
              var En = function (t, e) {
                  var n = Be(t.value.body, e),
                    r = t.value.label.substr(1),
                    i = e.sizeMultiplier,
                    a = void 0,
                    o = 0,
                    s = k.isCharacterBox(t.value.body);
                  if ("sout" === r)
                    ((a = se.makeSpan(["stretchy", "sout"])).height =
                      e.fontMetrics().defaultRuleThickness / i),
                      (o = -0.5 * e.fontMetrics().xHeight);
                  else {
                    /cancel/.test(r)
                      ? s || n.classes.push("cancel-pad")
                      : n.classes.push("boxpad");
                    var l;
                    (a = (function (t, e, n, r) {
                      var i = void 0,
                        a = t.height + t.depth + 2 * n;
                      if (/fbox|color/.test(e)) {
                        if (
                          ((i = se.makeSpan(["stretchy", e], [], r)),
                          "fbox" === e)
                        ) {
                          var o = r.color && r.getColor();
                          o && (i.style.borderColor = o);
                        }
                      } else {
                        var s = [];
                        /^[bx]cancel$/.test(e) &&
                          s.push(
                            new st.lineNode({
                              x1: "0",
                              y1: "0",
                              x2: "100%",
                              y2: "100%",
                              "stroke-width": "0.046em",
                            })
                          ),
                          /^x?cancel$/.test(e) &&
                            s.push(
                              new st.lineNode({
                                x1: "0",
                                y1: "100%",
                                x2: "100%",
                                y2: "0",
                                "stroke-width": "0.046em",
                              })
                            );
                        var l = new st.svgNode(s, {
                          width: "100%",
                          height: a + "em",
                        });
                        i = se.makeSvgSpan([], [l], r);
                      }
                      return (i.height = a), (i.style.height = a + "em"), i;
                    })(
                      n,
                      r,
                      (l = /box/.test(r)
                        ? "colorbox" === r
                          ? 0.3
                          : 0.34
                        : s
                        ? 0.2
                        : 0),
                      e
                    )),
                      (o = n.depth + l),
                      t.value.backgroundColor &&
                        ((a.style.backgroundColor =
                          t.value.backgroundColor.value),
                        t.value.borderColor &&
                          (a.style.borderColor = t.value.borderColor.value));
                  }
                  var u = void 0;
                  return (
                    (u = t.value.backgroundColor
                      ? se.makeVList(
                          {
                            positionType: "individualShift",
                            children: [
                              { type: "elem", elem: a, shift: o },
                              { type: "elem", elem: n, shift: 0 },
                            ],
                          },
                          e
                        )
                      : se.makeVList(
                          {
                            positionType: "individualShift",
                            children: [
                              { type: "elem", elem: n, shift: 0 },
                              {
                                type: "elem",
                                elem: a,
                                shift: o,
                                wrapperClasses: /cancel/.test(r)
                                  ? ["svg-align"]
                                  : [],
                              },
                            ],
                          },
                          e
                        )),
                    /cancel/.test(r) &&
                      ((u.height = n.height), (u.depth = n.depth)),
                    /cancel/.test(r) && !s
                      ? se.makeSpan(["mord", "cancel-lap"], [u], e)
                      : se.makeSpan(["mord"], [u], e)
                  );
                },
                Mn = function (t, e) {
                  var n = new De.MathNode("menclose", [Fe(t.value.body, e)]);
                  switch (t.value.label) {
                    case "\\cancel":
                      n.setAttribute("notation", "updiagonalstrike");
                      break;
                    case "\\bcancel":
                      n.setAttribute("notation", "downdiagonalstrike");
                      break;
                    case "\\sout":
                      n.setAttribute("notation", "horizontalstrike");
                      break;
                    case "\\fbox":
                    case "\\fcolorbox":
                      n.setAttribute("notation", "box");
                      break;
                    case "\\xcancel":
                      n.setAttribute(
                        "notation",
                        "updiagonalstrike downdiagonalstrike"
                      );
                  }
                  return (
                    t.value.backgroundColor &&
                      n.setAttribute(
                        "mathbackground",
                        t.value.backgroundColor.value
                      ),
                    n
                  );
                };
              xe({
                type: "enclose",
                names: ["\\colorbox"],
                props: {
                  numArgs: 2,
                  allowedInText: !0,
                  greediness: 3,
                  argTypes: ["color", "text"],
                },
                handler: function (t, e, n) {
                  var r = t.parser,
                    i = t.funcName,
                    a = ue(e[0], "color-token"),
                    o = e[1];
                  return new le(
                    "enclose",
                    { type: "enclose", label: i, backgroundColor: a, body: o },
                    r.mode
                  );
                },
                htmlBuilder: En,
                mathmlBuilder: Mn,
              }),
                xe({
                  type: "enclose",
                  names: ["\\fcolorbox"],
                  props: {
                    numArgs: 3,
                    allowedInText: !0,
                    greediness: 3,
                    argTypes: ["color", "color", "text"],
                  },
                  handler: function (t, e, n) {
                    var r = t.parser,
                      i = t.funcName,
                      a = ue(e[0], "color-token"),
                      o = ue(e[1], "color-token"),
                      s = e[2];
                    return new le(
                      "enclose",
                      {
                        type: "enclose",
                        label: i,
                        backgroundColor: o,
                        borderColor: a,
                        body: s,
                      },
                      r.mode
                    );
                  },
                  htmlBuilder: En,
                  mathmlBuilder: Mn,
                }),
                xe({
                  type: "enclose",
                  names: [
                    "\\cancel",
                    "\\bcancel",
                    "\\xcancel",
                    "\\sout",
                    "\\fbox",
                  ],
                  props: { numArgs: 1 },
                  handler: function (t, e, n) {
                    var r = t.parser,
                      i = t.funcName,
                      a = e[0];
                    return new le(
                      "enclose",
                      { type: "enclose", label: i, body: a },
                      r.mode
                    );
                  },
                  htmlBuilder: En,
                  mathmlBuilder: Mn,
                }),
                xe({
                  type: "environment",
                  names: ["\\begin", "\\end"],
                  props: { numArgs: 1, argTypes: ["text"] },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    if ("ordgroup" !== r.type)
                      throw new f("Invalid environment name", r);
                    for (var i = "", a = 0; a < r.value.length; ++a)
                      i += ue(r.value[a], "textord").value;
                    return new le(
                      "environment",
                      { type: "environment", name: i, nameGroup: r },
                      n.mode
                    );
                  },
                });
              var Tn = n(64),
                _n = n.n(Tn),
                Nn = function (t, e) {
                  var n = t.value.font,
                    r = e.withFont(n);
                  return Be(t.value.body, r);
                },
                Pn = function (t, e) {
                  var n = t.value.font,
                    r = e.withFont(n);
                  return Fe(t.value.body, r);
                },
                Cn = {
                  "\\Bbb": "\\mathbb",
                  "\\bold": "\\mathbf",
                  "\\frak": "\\mathfrak",
                  "\\bm": "\\boldsymbol",
                };
              xe({
                type: "font",
                names: [
                  "\\mathrm",
                  "\\mathit",
                  "\\mathbf",
                  "\\mathbb",
                  "\\mathcal",
                  "\\mathfrak",
                  "\\mathscr",
                  "\\mathsf",
                  "\\mathtt",
                  "\\Bbb",
                  "\\bold",
                  "\\frak",
                ],
                props: { numArgs: 1, greediness: 2 },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName,
                    i = e[0],
                    a = r;
                  return (
                    a in Cn && (a = Cn[a]),
                    new le(
                      "font",
                      { type: "font", font: a.slice(1), body: i },
                      n.mode
                    )
                  );
                },
                htmlBuilder: Nn,
                mathmlBuilder: Pn,
              }),
                xe({
                  type: "mclass",
                  names: ["\\boldsymbol", "\\bm"],
                  props: { numArgs: 1, greediness: 2 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0],
                      i = "mord",
                      a =
                        "ordgroup" === r.type && r.value.length
                          ? r.value[0].type
                          : r.type;
                    return (
                      /^(bin|rel)$/.test(a) && (i = "m" + a),
                      new le(
                        "mclass",
                        {
                          type: "mclass",
                          mclass: i,
                          value: [
                            new le(
                              "font",
                              { type: "font", font: "boldsymbol", body: r },
                              n.mode
                            ),
                          ],
                        },
                        n.mode
                      )
                    );
                  },
                });
              var On = {
                "\\rm": "mathrm",
                "\\sf": "mathsf",
                "\\tt": "mathtt",
                "\\bf": "mathbf",
                "\\it": "mathit",
              };
              xe({
                type: "font",
                names: _n()(On),
                props: { numArgs: 0, allowedInText: !0 },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName,
                    i = t.breakOnTokenText,
                    a = n.mode;
                  n.consumeSpaces();
                  var o = n.parseExpression(!0, i);
                  return new le(
                    "font",
                    {
                      type: "font",
                      font: On[r],
                      body: new le("ordgroup", o, n.mode),
                    },
                    a
                  );
                },
                htmlBuilder: Nn,
                mathmlBuilder: Pn,
              });
              var An = function (t, e) {
                  var n = e.style;
                  "display" === t.value.size
                    ? (n = z.DISPLAY)
                    : "text" === t.value.size && n.size === z.DISPLAY.size
                    ? (n = z.TEXT)
                    : "script" === t.value.size
                    ? (n = z.SCRIPT)
                    : "scriptscript" === t.value.size && (n = z.SCRIPTSCRIPT);
                  var r = n.fracNum(),
                    i = n.fracDen(),
                    a = void 0;
                  a = e.havingStyle(r);
                  var o = Be(t.value.numer, a, e);
                  if (t.value.continued) {
                    var s = 8.5 / e.fontMetrics().ptPerEm,
                      l = 3.5 / e.fontMetrics().ptPerEm;
                    (o.height = o.height < s ? s : o.height),
                      (o.depth = o.depth < l ? l : o.depth);
                  }
                  a = e.havingStyle(i);
                  var u = Be(t.value.denom, a, e),
                    h = void 0,
                    c = void 0,
                    f = void 0;
                  t.value.hasBarLine
                    ? (t.value.barSize
                        ? ((c = Yt(t.value.barSize, e)),
                          (h = se.makeLineSpan("frac-line", e, c)))
                        : (h = se.makeLineSpan("frac-line", e)),
                      (c = h.height),
                      (f = h.height))
                    : ((h = null),
                      (c = 0),
                      (f = e.fontMetrics().defaultRuleThickness));
                  var m = void 0,
                    d = void 0,
                    p = void 0;
                  n.size === z.DISPLAY.size
                    ? ((m = e.fontMetrics().num1),
                      (d = c > 0 ? 3 * f : 7 * f),
                      (p = e.fontMetrics().denom1))
                    : (c > 0
                        ? ((m = e.fontMetrics().num2), (d = f))
                        : ((m = e.fontMetrics().num3), (d = 3 * f)),
                      (p = e.fontMetrics().denom2));
                  var v = void 0;
                  if (h) {
                    var g = e.fontMetrics().axisHeight;
                    m - o.depth - (g + 0.5 * c) < d &&
                      (m += d - (m - o.depth - (g + 0.5 * c))),
                      g - 0.5 * c - (u.height - p) < d &&
                        (p += d - (g - 0.5 * c - (u.height - p)));
                    var y = -(g - 0.5 * c);
                    v = se.makeVList(
                      {
                        positionType: "individualShift",
                        children: [
                          { type: "elem", elem: u, shift: p },
                          { type: "elem", elem: h, shift: y },
                          { type: "elem", elem: o, shift: -m },
                        ],
                      },
                      e
                    );
                  } else {
                    var b = m - o.depth - (u.height - p);
                    b < d && ((m += 0.5 * (d - b)), (p += 0.5 * (d - b))),
                      (v = se.makeVList(
                        {
                          positionType: "individualShift",
                          children: [
                            { type: "elem", elem: u, shift: p },
                            { type: "elem", elem: o, shift: -m },
                          ],
                        },
                        e
                      ));
                  }
                  (a = e.havingStyle(n)),
                    (v.height *= a.sizeMultiplier / e.sizeMultiplier),
                    (v.depth *= a.sizeMultiplier / e.sizeMultiplier);
                  var x;
                  x =
                    n.size === z.DISPLAY.size
                      ? e.fontMetrics().delim1
                      : e.fontMetrics().delim2;
                  var w, k;
                  return (
                    (w =
                      null == t.value.leftDelim
                        ? Ae(e, ["mopen"])
                        : yn(
                            t.value.leftDelim,
                            x,
                            !0,
                            e.havingStyle(n),
                            t.mode,
                            ["mopen"]
                          )),
                    (k = t.value.continued
                      ? se.makeSpan([])
                      : null == t.value.rightDelim
                      ? Ae(e, ["mclose"])
                      : yn(
                          t.value.rightDelim,
                          x,
                          !0,
                          e.havingStyle(n),
                          t.mode,
                          ["mclose"]
                        )),
                    se.makeSpan(
                      ["mord"].concat(a.sizingClasses(e)),
                      [w, se.makeSpan(["mfrac"], [v]), k],
                      e
                    )
                  );
                },
                Bn = function (t, e) {
                  var n = new De.MathNode("mfrac", [
                    Fe(t.value.numer, e),
                    Fe(t.value.denom, e),
                  ]);
                  if (t.value.hasBarLine) {
                    if (t.value.barSize) {
                      var r = Yt(t.value.barSize, e);
                      n.setAttribute("linethickness", r + "em");
                    }
                  } else n.setAttribute("linethickness", "0px");
                  if (null != t.value.leftDelim || null != t.value.rightDelim) {
                    var i = [];
                    if (null != t.value.leftDelim) {
                      var a = new De.MathNode("mo", [
                        new De.TextNode(t.value.leftDelim),
                      ]);
                      a.setAttribute("fence", "true"), i.push(a);
                    }
                    if ((i.push(n), null != t.value.rightDelim)) {
                      var o = new De.MathNode("mo", [
                        new De.TextNode(t.value.rightDelim),
                      ]);
                      o.setAttribute("fence", "true"), i.push(o);
                    }
                    return Ve(i);
                  }
                  return n;
                };
              xe({
                type: "genfrac",
                names: [
                  "\\cfrac",
                  "\\dfrac",
                  "\\frac",
                  "\\tfrac",
                  "\\dbinom",
                  "\\binom",
                  "\\tbinom",
                  "\\\\atopfrac",
                  "\\\\bracefrac",
                  "\\\\brackfrac",
                ],
                props: { numArgs: 2, greediness: 2 },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName,
                    i = e[0],
                    a = e[1],
                    o = void 0,
                    s = null,
                    l = null,
                    u = "auto";
                  switch (r) {
                    case "\\cfrac":
                    case "\\dfrac":
                    case "\\frac":
                    case "\\tfrac":
                      o = !0;
                      break;
                    case "\\\\atopfrac":
                      o = !1;
                      break;
                    case "\\dbinom":
                    case "\\binom":
                    case "\\tbinom":
                      (o = !1), (s = "("), (l = ")");
                      break;
                    case "\\\\bracefrac":
                      (o = !1), (s = "\\{"), (l = "\\}");
                      break;
                    case "\\\\brackfrac":
                      (o = !1), (s = "["), (l = "]");
                      break;
                    default:
                      throw new Error("Unrecognized genfrac command");
                  }
                  switch (r) {
                    case "\\cfrac":
                    case "\\dfrac":
                    case "\\dbinom":
                      u = "display";
                      break;
                    case "\\tfrac":
                    case "\\tbinom":
                      u = "text";
                  }
                  return new le(
                    "genfrac",
                    {
                      type: "genfrac",
                      continued: "\\cfrac" === r,
                      numer: i,
                      denom: a,
                      hasBarLine: o,
                      leftDelim: s,
                      rightDelim: l,
                      size: u,
                      barSize: null,
                    },
                    n.mode
                  );
                },
                htmlBuilder: An,
                mathmlBuilder: Bn,
              }),
                xe({
                  type: "infix",
                  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
                  props: { numArgs: 0, infix: !0 },
                  handler: function (t) {
                    var e = t.parser,
                      n = t.funcName,
                      r = t.token,
                      i = void 0;
                    switch (n) {
                      case "\\over":
                        i = "\\frac";
                        break;
                      case "\\choose":
                        i = "\\binom";
                        break;
                      case "\\atop":
                        i = "\\\\atopfrac";
                        break;
                      case "\\brace":
                        i = "\\\\bracefrac";
                        break;
                      case "\\brack":
                        i = "\\\\brackfrac";
                        break;
                      default:
                        throw new Error("Unrecognized infix genfrac command");
                    }
                    return new le(
                      "infix",
                      { type: "infix", replaceWith: i, token: r },
                      e.mode
                    );
                  },
                });
              var zn = ["display", "text", "script", "scriptscript"],
                Rn = function (t) {
                  var e = null;
                  return t.length > 0 && (e = "." === (e = t) ? null : e), e;
                };
              xe({
                type: "genfrac",
                names: ["\\genfrac"],
                props: {
                  numArgs: 6,
                  greediness: 6,
                  argTypes: ["math", "math", "size", "text", "math", "math"],
                },
                handler: function (t, e) {
                  var n = t.parser,
                    r = e[4],
                    i = e[5],
                    a = he(e[0], "ordgroup");
                  a = ue(a ? a.value[0] : e[0], "open");
                  var o = Rn(a.value),
                    s = he(e[1], "ordgroup");
                  s = ue(s ? s.value[0] : e[1], "close");
                  var l,
                    u = Rn(s.value),
                    h = ue(e[2], "size"),
                    c = null;
                  l = !!h.value.isBlank || (c = h.value.value).number > 0;
                  var f = "auto",
                    m = he(e[3], "ordgroup");
                  return (
                    m
                      ? m.value.length > 0 && (f = zn[Number(m.value[0].value)])
                      : ((m = ue(e[3], "textord")), (f = zn[Number(m.value)])),
                    new le(
                      "genfrac",
                      {
                        type: "genfrac",
                        numer: r,
                        denom: i,
                        continued: !1,
                        hasBarLine: l,
                        barSize: c,
                        leftDelim: o,
                        rightDelim: u,
                        size: f,
                      },
                      n.mode
                    )
                  );
                },
                htmlBuilder: An,
                mathmlBuilder: Bn,
              }),
                xe({
                  type: "infix",
                  names: ["\\above"],
                  props: { numArgs: 1, argTypes: ["size"], infix: !0 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = (t.funcName, t.token),
                      i = ue(e[0], "size");
                    return new le(
                      "infix",
                      {
                        type: "infix",
                        replaceWith: "\\\\abovefrac",
                        sizeNode: i,
                        token: r,
                      },
                      n.mode
                    );
                  },
                }),
                xe({
                  type: "genfrac",
                  names: ["\\\\abovefrac"],
                  props: { numArgs: 3, argTypes: ["math", "size", "math"] },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = (t.funcName, e[0]),
                      i = ue(ue(e[1], "infix").value.sizeNode, "size"),
                      a = e[2],
                      o = i.value.value,
                      s = o.number > 0;
                    return new le(
                      "genfrac",
                      {
                        type: "genfrac",
                        numer: r,
                        denom: a,
                        continued: !1,
                        hasBarLine: s,
                        barSize: o,
                        leftDelim: null,
                        rightDelim: null,
                        size: "auto",
                      },
                      n.mode
                    );
                  },
                  htmlBuilder: An,
                  mathmlBuilder: Bn,
                });
              var Dn = function (t, e) {
                var n = e.style,
                  r = void 0,
                  i = void 0,
                  a = he(t, "supsub");
                a
                  ? ((r = a.value.sup
                      ? Be(a.value.sup, e.havingStyle(n.sup()), e)
                      : Be(a.value.sub, e.havingStyle(n.sub()), e)),
                    (i = ue(a.value.base, "horizBrace")))
                  : (i = ue(t, "horizBrace"));
                var o = Be(i.value.base, e.havingBaseStyle(z.DISPLAY)),
                  s = Ue(i, e),
                  l = void 0;
                if (
                  (i.value.isOver
                    ? (l = se.makeVList(
                        {
                          positionType: "firstBaseline",
                          children: [
                            { type: "elem", elem: o },
                            { type: "kern", size: 0.1 },
                            { type: "elem", elem: s },
                          ],
                        },
                        e
                      )).children[0].children[0].children[1].classes.push(
                        "svg-align"
                      )
                    : (l = se.makeVList(
                        {
                          positionType: "bottom",
                          positionData: o.depth + 0.1 + s.height,
                          children: [
                            { type: "elem", elem: s },
                            { type: "kern", size: 0.1 },
                            { type: "elem", elem: o },
                          ],
                        },
                        e
                      )).children[0].children[0].children[0].classes.push(
                        "svg-align"
                      ),
                  r)
                ) {
                  var u = se.makeSpan(
                    ["mord", i.value.isOver ? "mover" : "munder"],
                    [l],
                    e
                  );
                  l = i.value.isOver
                    ? se.makeVList(
                        {
                          positionType: "firstBaseline",
                          children: [
                            { type: "elem", elem: u },
                            { type: "kern", size: 0.2 },
                            { type: "elem", elem: r },
                          ],
                        },
                        e
                      )
                    : se.makeVList(
                        {
                          positionType: "bottom",
                          positionData: u.depth + 0.2 + r.height + r.depth,
                          children: [
                            { type: "elem", elem: r },
                            { type: "kern", size: 0.2 },
                            { type: "elem", elem: u },
                          ],
                        },
                        e
                      );
                }
                return se.makeSpan(
                  ["mord", i.value.isOver ? "mover" : "munder"],
                  [l],
                  e
                );
              };
              xe({
                type: "horizBrace",
                names: ["\\overbrace", "\\underbrace"],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName;
                  return new le(
                    "horizBrace",
                    {
                      type: "horizBrace",
                      label: r,
                      isOver: /^\\over/.test(r),
                      base: e[0],
                    },
                    n.mode
                  );
                },
                htmlBuilder: Dn,
                mathmlBuilder: function (t, e) {
                  var n = Ge(t.value.label);
                  return new De.MathNode(t.value.isOver ? "mover" : "munder", [
                    Fe(t.value.base, e),
                    n,
                  ]);
                },
              }),
                xe({
                  type: "href",
                  names: ["\\href"],
                  props: {
                    numArgs: 2,
                    argTypes: ["string", "original"],
                    allowedInText: !0,
                  },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[1],
                      i = ue(e[0], "string").value.value.replace(
                        /\\([#$%&~_^{}])/g,
                        "$1"
                      );
                    return new le(
                      "href",
                      { type: "href", href: i, body: ke(r) },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = Ne(t.value.body, e, !1),
                      r = t.value.href;
                    return new se.makeAnchor(r, [], n, e);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = qe(t.value.body, e);
                    return n.setAttribute("href", t.value.href), n;
                  },
                });
              var In = n(63),
                Vn = n.n(In);
              xe({
                type: "mclass",
                names: ["\\class", "\\cssId"],
                props: {
                  numArgs: 2,
                  argTypes: ["string", "original"],
                  allowedInText: !0,
                },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName,
                    i = e[1],
                    a = "mord",
                    o =
                      "ordgroup" === i.type && i.value.length
                        ? i.value[0].type
                        : i.type;
                  /^(bin|rel)$/.test(o) && (a = "m" + o);
                  var s = ue(e[0], "string").value.value;
                  return new le(
                    "mclass",
                    {
                      type: "mclass",
                      mclass: a,
                      value: [
                        new le(
                          "html",
                          Vn()({ type: "html", body: i }, r.substr(1), s),
                          n.mode
                        ),
                      ],
                    },
                    n.mode
                  );
                },
              }),
                xe({
                  type: "html",
                  names: [],
                  props: { numArgs: 2, argTypes: ["string", "original"] },
                  htmlBuilder: function (t, e) {
                    var n = Be(t.value.body, e),
                      r = ["enclosing"];
                    t.value.class &&
                      r.push.apply(r, M()(t.value.class.trim().split(/\s+/)));
                    var i = new se.makeSpan(r, [n], e);
                    return (
                      t.value.cssId && i.setAttribute("id", t.value.cssId), i
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = qe(t.value.body, e);
                    return (
                      t.value.class && n.setAttribute("class", t.value.class),
                      t.value.cssId && n.setAttribute("id", t.value.cssId),
                      n
                    );
                  },
                }),
                xe({
                  type: "kern",
                  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
                  props: { numArgs: 1, argTypes: ["size"], allowedInText: !0 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = t.funcName,
                      i = ue(e[0], "size");
                    if (n.settings.strict) {
                      var a = "m" === r[1],
                        o = "mu" === i.value.value.unit;
                      a
                        ? (o ||
                            n.settings.reportNonstrict(
                              "mathVsTextUnits",
                              "LaTeX's " +
                                r +
                                " supports only mu units, not " +
                                i.value.value.unit +
                                " units"
                            ),
                          "math" !== n.mode &&
                            n.settings.reportNonstrict(
                              "mathVsTextUnits",
                              "LaTeX's " + r + " works only in math mode"
                            ))
                        : o &&
                          n.settings.reportNonstrict(
                            "mathVsTextUnits",
                            "LaTeX's " + r + " doesn't support mu units"
                          );
                    }
                    return new le(
                      "kern",
                      { type: "kern", dimension: i.value.value },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    return se.makeGlue(t.value.dimension, e);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = Yt(t.value.dimension, e);
                    return new De.SpaceNode(n);
                  },
                }),
                xe({
                  type: "lap",
                  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
                  props: { numArgs: 1, allowedInText: !0 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = t.funcName,
                      i = e[0];
                    return new le(
                      "lap",
                      { type: "lap", alignment: r.slice(5), body: i },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = void 0;
                    "clap" === t.value.alignment
                      ? ((n = se.makeSpan([], [Be(t.value.body, e)])),
                        (n = se.makeSpan(["inner"], [n], e)))
                      : (n = se.makeSpan(["inner"], [Be(t.value.body, e)]));
                    var r = se.makeSpan(["fix"], []),
                      i = se.makeSpan([t.value.alignment], [n, r], e),
                      a = se.makeSpan(["strut"]);
                    return (
                      (a.style.height = i.height + i.depth + "em"),
                      (a.style.verticalAlign = -i.depth + "em"),
                      i.children.unshift(a),
                      (i = se.makeVList(
                        {
                          positionType: "firstBaseline",
                          children: [{ type: "elem", elem: i }],
                        },
                        e
                      )),
                      se.makeSpan(["mord"], [i], e)
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mpadded", [Fe(t.value.body, e)]);
                    if ("rlap" !== t.value.alignment) {
                      var r = "llap" === t.value.alignment ? "-1" : "-0.5";
                      n.setAttribute("lspace", r + "width");
                    }
                    return n.setAttribute("width", "0px"), n;
                  },
                }),
                xe({
                  type: "styling",
                  names: ["\\(", "$"],
                  props: {
                    numArgs: 0,
                    allowedInText: !0,
                    allowedInMath: !1,
                    consumeMode: "math",
                  },
                  handler: function (t, e) {
                    var n = t.funcName,
                      r = t.parser,
                      i = r.mode;
                    r.switchMode("math");
                    var a = "\\(" === n ? "\\)" : "$",
                      o = r.parseExpression(!1, a);
                    return (
                      r.expect(a, !1),
                      r.switchMode(i),
                      r.consume(),
                      new le(
                        "styling",
                        { type: "styling", style: "text", value: o },
                        r.mode
                      )
                    );
                  },
                }),
                xe({
                  type: "text",
                  names: ["\\)", "\\]"],
                  props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
                  handler: function (t, e) {
                    throw new f("Mismatched " + t.funcName);
                  },
                });
              var Ln = function (t, e) {
                var n = e.style;
                return n.size === z.DISPLAY.size
                  ? t.value.display
                  : n.size === z.TEXT.size
                  ? t.value.text
                  : n.size === z.SCRIPT.size
                  ? t.value.script
                  : n.size === z.SCRIPTSCRIPT.size
                  ? t.value.scriptscript
                  : t.value.text;
              };
              xe({
                type: "mathchoice",
                names: ["\\mathchoice"],
                props: { numArgs: 4 },
                handler: function (t, e) {
                  var n = t.parser;
                  return new le(
                    "mathchoice",
                    {
                      type: "mathchoice",
                      display: ke(e[0]),
                      text: ke(e[1]),
                      script: ke(e[2]),
                      scriptscript: ke(e[3]),
                    },
                    n.mode
                  );
                },
                htmlBuilder: function (t, e) {
                  var n = Ln(t, e),
                    r = Ne(n, e, !1);
                  return new se.makeFragment(r);
                },
                mathmlBuilder: function (t, e) {
                  var n = Ln(t, e);
                  return qe(n, e);
                },
              });
              var jn = se.makeSpan;
              function qn(t, e) {
                var n = Ne(t.value.value, e, !0);
                return jn([t.value.mclass], n, e);
              }
              function Fn(t, e) {
                var n = je(t.value.value, e);
                return new De.MathNode("mstyle", n);
              }
              xe({
                type: "mclass",
                names: [
                  "\\mathord",
                  "\\mathbin",
                  "\\mathrel",
                  "\\mathopen",
                  "\\mathclose",
                  "\\mathpunct",
                  "\\mathinner",
                ],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName,
                    i = e[0];
                  return new le(
                    "mclass",
                    { type: "mclass", mclass: "m" + r.substr(5), value: ke(i) },
                    n.mode
                  );
                },
                htmlBuilder: qn,
                mathmlBuilder: Fn,
              }),
                xe({
                  type: "mclass",
                  names: ["\\stackrel", "\\overset", "\\underset"],
                  props: { numArgs: 2 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = t.funcName,
                      i = e[1],
                      a = e[0],
                      o = "mrel";
                    if ("\\stackrel" !== r) {
                      var s =
                        "ordgroup" === i.type && i.value.length
                          ? i.value[0].type
                          : i.type;
                      o = /^(bin|rel)$/.test(s) ? "m" + s : "mord";
                    }
                    var l = new le(
                        "op",
                        {
                          type: "op",
                          limits: !0,
                          alwaysHandleSupSub: !0,
                          symbol: !1,
                          suppressBaseShift: "\\stackrel" !== r,
                          value: ke(i),
                        },
                        i.mode
                      ),
                      u = new le(
                        "supsub",
                        {
                          type: "supsub",
                          base: l,
                          sup: "\\underset" === r ? null : a,
                          sub: "\\underset" === r ? a : null,
                        },
                        a.mode
                      );
                    return new le(
                      "mclass",
                      { type: "mclass", mclass: o, value: [u] },
                      n.mode
                    );
                  },
                  htmlBuilder: qn,
                  mathmlBuilder: Fn,
                });
              var Hn = function (t, e) {
                  var n = void 0,
                    r = void 0,
                    i = !1,
                    a = void 0,
                    o = he(t, "supsub");
                  o
                    ? ((n = o.value.sup),
                      (r = o.value.sub),
                      (a = ue(o.value.base, "op")),
                      (i = !0))
                    : (a = ue(t, "op"));
                  var s = e.style,
                    l = !1;
                  s.size === z.DISPLAY.size &&
                    a.value.symbol &&
                    !k.contains(["\\smallint"], a.value.body) &&
                    (l = !0);
                  var u = void 0;
                  if (a.value.symbol) {
                    var h = l ? "Size2-Regular" : "Size1-Regular",
                      c = "";
                    if (
                      (("\\oiint" !== a.value.body &&
                        "\\oiiint" !== a.value.body) ||
                        ((c = a.value.body.substr(1)),
                        (a.value.body = "oiint" === c ? "\\iint" : "\\iiint")),
                      (u = se.makeSymbol(a.value.body, h, "math", e, [
                        "mop",
                        "op-symbol",
                        l ? "large-op" : "small-op",
                      ])),
                      c.length > 0)
                    ) {
                      var f = u.italic,
                        m = se.staticSvg(c + "Size" + (l ? "2" : "1"), e);
                      (u = se.makeVList(
                        {
                          positionType: "individualShift",
                          children: [
                            { type: "elem", elem: u, shift: 0 },
                            { type: "elem", elem: m, shift: l ? 0.08 : 0 },
                          ],
                        },
                        e
                      )),
                        (a.value.body = "\\" + c),
                        u.classes.unshift("mop"),
                        (u.italic = f);
                    }
                  } else if (a.value.value) {
                    var d = Ne(a.value.value, e, !0);
                    1 === d.length && d[0] instanceof st.symbolNode
                      ? ((u = d[0]).classes[0] = "mop")
                      : (u = se.makeSpan(["mop"], d, e));
                  } else {
                    for (var p = [], v = 1; v < a.value.body.length; v++)
                      p.push(se.mathsym(a.value.body[v], a.mode));
                    u = se.makeSpan(["mop"], p, e);
                  }
                  var g = 0,
                    y = 0;
                  if (
                    ((u instanceof st.symbolNode ||
                      "\\oiint" === a.value.body ||
                      "\\oiiint" === a.value.body) &&
                      !a.value.suppressBaseShift &&
                      ((g =
                        (u.height - u.depth) / 2 - e.fontMetrics().axisHeight),
                      (y = u.italic)),
                    i)
                  ) {
                    u = se.makeSpan([], [u]);
                    var b = void 0,
                      x = void 0;
                    if (n) {
                      var w = Be(n, e.havingStyle(s.sup()), e);
                      x = {
                        elem: w,
                        kern: Math.max(
                          e.fontMetrics().bigOpSpacing1,
                          e.fontMetrics().bigOpSpacing3 - w.depth
                        ),
                      };
                    }
                    if (r) {
                      var S = Be(r, e.havingStyle(s.sub()), e);
                      b = {
                        elem: S,
                        kern: Math.max(
                          e.fontMetrics().bigOpSpacing2,
                          e.fontMetrics().bigOpSpacing4 - S.height
                        ),
                      };
                    }
                    var E = void 0;
                    if (x && b) {
                      var M =
                        e.fontMetrics().bigOpSpacing5 +
                        b.elem.height +
                        b.elem.depth +
                        b.kern +
                        u.depth +
                        g;
                      E = se.makeVList(
                        {
                          positionType: "bottom",
                          positionData: M,
                          children: [
                            {
                              type: "kern",
                              size: e.fontMetrics().bigOpSpacing5,
                            },
                            {
                              type: "elem",
                              elem: b.elem,
                              marginLeft: -y + "em",
                            },
                            { type: "kern", size: b.kern },
                            { type: "elem", elem: u },
                            { type: "kern", size: x.kern },
                            {
                              type: "elem",
                              elem: x.elem,
                              marginLeft: y + "em",
                            },
                            {
                              type: "kern",
                              size: e.fontMetrics().bigOpSpacing5,
                            },
                          ],
                        },
                        e
                      );
                    } else if (b) {
                      var T = u.height - g;
                      E = se.makeVList(
                        {
                          positionType: "top",
                          positionData: T,
                          children: [
                            {
                              type: "kern",
                              size: e.fontMetrics().bigOpSpacing5,
                            },
                            {
                              type: "elem",
                              elem: b.elem,
                              marginLeft: -y + "em",
                            },
                            { type: "kern", size: b.kern },
                            { type: "elem", elem: u },
                          ],
                        },
                        e
                      );
                    } else {
                      if (!x) return u;
                      var _ = u.depth + g;
                      E = se.makeVList(
                        {
                          positionType: "bottom",
                          positionData: _,
                          children: [
                            { type: "elem", elem: u },
                            { type: "kern", size: x.kern },
                            {
                              type: "elem",
                              elem: x.elem,
                              marginLeft: y + "em",
                            },
                            {
                              type: "kern",
                              size: e.fontMetrics().bigOpSpacing5,
                            },
                          ],
                        },
                        e
                      );
                    }
                    return se.makeSpan(["mop", "op-limits"], [E], e);
                  }
                  return (
                    g &&
                      ((u.style.position = "relative"),
                      (u.style.top = g + "em")),
                    u
                  );
                },
                Xn = function (t, e) {
                  var n = void 0;
                  if (t.value.symbol)
                    n = new De.MathNode("mo", [Ie(t.value.body, t.mode)]);
                  else {
                    if (!t.value.value) {
                      n = new De.MathNode("mi", [
                        new De.TextNode(t.value.body.slice(1)),
                      ]);
                      var r = new De.MathNode("mo", [Ie("⁡", "text")]);
                      return new st.documentFragment([n, r]);
                    }
                    n = new De.MathNode("mo", je(t.value.value, e));
                  }
                  return n;
                },
                Wn = {
                  "∏": "\\prod",
                  "∐": "\\coprod",
                  "∑": "\\sum",
                  "⋀": "\\bigwedge",
                  "⋁": "\\bigvee",
                  "⋂": "\\bigcap",
                  "⋃": "\\bigcap",
                  "⨀": "\\bigodot",
                  "⨁": "\\bigoplus",
                  "⨂": "\\bigotimes",
                  "⨄": "\\biguplus",
                  "⨆": "\\bigsqcup",
                };
              xe({
                type: "op",
                names: [
                  "\\coprod",
                  "\\bigvee",
                  "\\bigwedge",
                  "\\biguplus",
                  "\\bigcap",
                  "\\bigcup",
                  "\\intop",
                  "\\prod",
                  "\\sum",
                  "\\bigotimes",
                  "\\bigoplus",
                  "\\bigodot",
                  "\\bigsqcup",
                  "\\smallint",
                  "∏",
                  "∐",
                  "∑",
                  "⋀",
                  "⋁",
                  "⋂",
                  "⋃",
                  "⨀",
                  "⨁",
                  "⨂",
                  "⨄",
                  "⨆",
                ],
                props: { numArgs: 0 },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName;
                  return (
                    1 === r.length && (r = Wn[r]),
                    new le(
                      "op",
                      { type: "op", limits: !0, symbol: !0, body: r },
                      n.mode
                    )
                  );
                },
                htmlBuilder: Hn,
                mathmlBuilder: Xn,
              }),
                xe({
                  type: "op",
                  names: ["\\mathop"],
                  props: { numArgs: 1 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    return new le(
                      "op",
                      { type: "op", limits: !1, symbol: !1, value: ke(r) },
                      n.mode
                    );
                  },
                  htmlBuilder: Hn,
                  mathmlBuilder: Xn,
                });
              var Gn = {
                "∫": "\\int",
                "∬": "\\iint",
                "∭": "\\iiint",
                "∮": "\\oint",
                "∯": "\\oiint",
                "∰": "\\oiiint",
              };
              function Un(t, e, n) {
                for (
                  var r = Ne(t, e, !1),
                    i = e.sizeMultiplier / n.sizeMultiplier,
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var o = k.indexOf(r[a].classes, "sizing");
                  o < 0
                    ? Array.prototype.push.apply(
                        r[a].classes,
                        e.sizingClasses(n)
                      )
                    : r[a].classes[o + 1] === "reset-size" + e.size &&
                      (r[a].classes[o + 1] = "reset-size" + n.size),
                    (r[a].height *= i),
                    (r[a].depth *= i);
                }
                return se.makeFragment(r);
              }
              xe({
                type: "op",
                names: ["\\mathop"],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var n = t.parser,
                    r = e[0];
                  return new le(
                    "op",
                    { type: "op", limits: !1, symbol: !1, value: ke(r) },
                    n.mode
                  );
                },
                htmlBuilder: Hn,
                mathmlBuilder: Xn,
              }),
                xe({
                  type: "op",
                  names: [
                    "\\arcsin",
                    "\\arccos",
                    "\\arctan",
                    "\\arctg",
                    "\\arcctg",
                    "\\arg",
                    "\\ch",
                    "\\cos",
                    "\\cosec",
                    "\\cosh",
                    "\\cot",
                    "\\cotg",
                    "\\coth",
                    "\\csc",
                    "\\ctg",
                    "\\cth",
                    "\\deg",
                    "\\dim",
                    "\\exp",
                    "\\hom",
                    "\\ker",
                    "\\lg",
                    "\\ln",
                    "\\log",
                    "\\sec",
                    "\\sin",
                    "\\sinh",
                    "\\sh",
                    "\\tan",
                    "\\tanh",
                    "\\tg",
                    "\\th",
                  ],
                  props: { numArgs: 0 },
                  handler: function (t) {
                    var e = t.parser,
                      n = t.funcName;
                    return new le(
                      "op",
                      { type: "op", limits: !1, symbol: !1, body: n },
                      e.mode
                    );
                  },
                  htmlBuilder: Hn,
                  mathmlBuilder: Xn,
                }),
                xe({
                  type: "op",
                  names: [
                    "\\det",
                    "\\gcd",
                    "\\inf",
                    "\\lim",
                    "\\max",
                    "\\min",
                    "\\Pr",
                    "\\sup",
                  ],
                  props: { numArgs: 0 },
                  handler: function (t) {
                    var e = t.parser,
                      n = t.funcName;
                    return new le(
                      "op",
                      { type: "op", limits: !0, symbol: !1, body: n },
                      e.mode
                    );
                  },
                  htmlBuilder: Hn,
                  mathmlBuilder: Xn,
                }),
                xe({
                  type: "op",
                  names: [
                    "\\int",
                    "\\iint",
                    "\\iiint",
                    "\\oint",
                    "\\oiint",
                    "\\oiiint",
                    "∫",
                    "∬",
                    "∭",
                    "∮",
                    "∯",
                    "∰",
                  ],
                  props: { numArgs: 0 },
                  handler: function (t) {
                    var e = t.parser,
                      n = t.funcName;
                    return (
                      1 === n.length && (n = Gn[n]),
                      new le(
                        "op",
                        { type: "op", limits: !1, symbol: !0, body: n },
                        e.mode
                      )
                    );
                  },
                  htmlBuilder: Hn,
                  mathmlBuilder: Xn,
                }),
                xe({
                  type: "operatorname",
                  names: ["\\operatorname"],
                  props: { numArgs: 1 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    return new le(
                      "operatorname",
                      { type: "operatorname", value: ke(r) },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = [];
                    if (t.value.value.length > 0) {
                      var r = "",
                        i = "",
                        a = t.value.value.map(function (t) {
                          var e = t.value;
                          return "string" == typeof e &&
                            -1 !== "*-/:".indexOf(e)
                            ? new le("textord", e, t.mode)
                            : t;
                        }),
                        o = Ne(a, e.withFont("mathrm"), !0),
                        s = !0,
                        l = !1,
                        u = void 0;
                      try {
                        for (
                          var h, c = D()(o);
                          !(s = (h = c.next()).done);
                          s = !0
                        ) {
                          var f = h.value;
                          f instanceof st.symbolNode
                            ? ((r = (r = (r = f.value).replace(
                                /\u2212/,
                                "-"
                              )).replace(/\u2217/, "*")),
                              (i = /[\u0391-\u03D7]/.test(r) ? "math" : "text"),
                              n.push(se.mathsym(r, i)))
                            : n.push(f);
                        }
                      } catch (t) {
                        (l = !0), (u = t);
                      } finally {
                        try {
                          !s && c.return && c.return();
                        } finally {
                          if (l) throw u;
                        }
                      }
                    }
                    return se.makeSpan(["mop"], n, e);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = [];
                    if (t.value.value.length > 0) {
                      var r = je(t.value.value, e.withFont("mathrm"))
                        .map(function (t) {
                          return t.toText();
                        })
                        .join("");
                      (r = (r = r.replace(/\u2212/g, "-")).replace(
                        /\u2217/g,
                        "*"
                      )),
                        (n = [new De.TextNode(r, !1)]);
                    }
                    var i = new De.MathNode("mi", n);
                    i.setAttribute("mathvariant", "normal");
                    var a = new De.MathNode("mo", [Ie("⁡", "text")]);
                    return new st.documentFragment([i, a]);
                  },
                }),
                we({
                  type: "ordgroup",
                  htmlBuilder: function (t, e) {
                    return se.makeSpan(["mord"], Ne(t.value, e, !0), e);
                  },
                  mathmlBuilder: function (t, e) {
                    return qe(t.value, e);
                  },
                }),
                xe({
                  type: "overline",
                  names: ["\\overline"],
                  props: { numArgs: 1 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    return new le(
                      "overline",
                      { type: "overline", body: r },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = Be(t.value.body, e.havingCrampedStyle()),
                      r = se.makeLineSpan("overline-line", e),
                      i = se.makeVList(
                        {
                          positionType: "firstBaseline",
                          children: [
                            { type: "elem", elem: n },
                            { type: "kern", size: 3 * r.height },
                            { type: "elem", elem: r },
                            { type: "kern", size: r.height },
                          ],
                        },
                        e
                      );
                    return se.makeSpan(["mord", "overline"], [i], e);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mo", [new De.TextNode("‾")]);
                    n.setAttribute("stretchy", "true");
                    var r = new De.MathNode("mover", [Fe(t.value.body, e), n]);
                    return r.setAttribute("accent", "true"), r;
                  },
                }),
                xe({
                  type: "phantom",
                  names: ["\\phantom"],
                  props: { numArgs: 1, allowedInText: !0 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    return new le(
                      "phantom",
                      { type: "phantom", value: ke(r) },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = Ne(t.value.value, e.withPhantom(), !1);
                    return new se.makeFragment(n);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = je(t.value.value, e);
                    return new De.MathNode("mphantom", n);
                  },
                }),
                xe({
                  type: "hphantom",
                  names: ["\\hphantom"],
                  props: { numArgs: 1, allowedInText: !0 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    return new le(
                      "hphantom",
                      { type: "hphantom", value: ke(r), body: r },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = se.makeSpan(
                      [],
                      [Be(t.value.body, e.withPhantom())]
                    );
                    if (((n.height = 0), (n.depth = 0), n.children))
                      for (var r = 0; r < n.children.length; r++)
                        (n.children[r].height = 0), (n.children[r].depth = 0);
                    return se.makeVList(
                      {
                        positionType: "firstBaseline",
                        children: [{ type: "elem", elem: n }],
                      },
                      e
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = je(t.value.value, e),
                      r = new De.MathNode("mphantom", n);
                    return r.setAttribute("height", "0px"), r;
                  },
                }),
                xe({
                  type: "vphantom",
                  names: ["\\vphantom"],
                  props: { numArgs: 1, allowedInText: !0 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    return new le(
                      "vphantom",
                      { type: "vphantom", value: ke(r), body: r },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = se.makeSpan(
                        ["inner"],
                        [Be(t.value.body, e.withPhantom())]
                      ),
                      r = se.makeSpan(["fix"], []);
                    return se.makeSpan(["mord", "rlap"], [n, r], e);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = je(t.value.value, e),
                      r = new De.MathNode("mphantom", n);
                    return r.setAttribute("width", "0px"), r;
                  },
                });
              var Yn = [
                  "\\tiny",
                  "\\sixptsize",
                  "\\scriptsize",
                  "\\footnotesize",
                  "\\small",
                  "\\normalsize",
                  "\\large",
                  "\\Large",
                  "\\LARGE",
                  "\\huge",
                  "\\Huge",
                ],
                $n = function (t, e) {
                  var n = e.havingSize(t.value.size);
                  return Un(t.value.value, n, e);
                };
              xe({
                type: "sizing",
                names: Yn,
                props: { numArgs: 0, allowedInText: !0 },
                handler: function (t, e) {
                  var n = t.breakOnTokenText,
                    r = t.funcName,
                    i = t.parser;
                  i.consumeSpaces();
                  var a = i.parseExpression(!1, n);
                  return new le(
                    "sizing",
                    { type: "sizing", size: k.indexOf(Yn, r) + 1, value: a },
                    i.mode
                  );
                },
                htmlBuilder: $n,
                mathmlBuilder: function (t, e) {
                  var n = e.havingSize(t.value.size),
                    r = je(t.value.value, n),
                    i = new De.MathNode("mstyle", r);
                  return i.setAttribute("mathsize", n.sizeMultiplier + "em"), i;
                },
              }),
                xe({
                  type: "raisebox",
                  names: ["\\raisebox"],
                  props: {
                    numArgs: 2,
                    argTypes: ["size", "text"],
                    allowedInText: !0,
                  },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = ue(e[0], "size"),
                      i = e[1];
                    return new le(
                      "raisebox",
                      { type: "raisebox", dy: r, body: i, value: ke(i) },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = new le(
                        "text",
                        { type: "text", body: t.value.value, font: "mathrm" },
                        t.mode
                      ),
                      r = new le(
                        "sizing",
                        { type: "sizing", value: [n], size: 6 },
                        t.mode
                      ),
                      i = $n(r, e),
                      a = Yt(t.value.dy.value.value, e);
                    return se.makeVList(
                      {
                        positionType: "shift",
                        positionData: -a,
                        children: [{ type: "elem", elem: i }],
                      },
                      e
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mpadded", [Fe(t.value.body, e)]),
                      r =
                        t.value.dy.value.value.number +
                        t.value.dy.value.value.unit;
                    return n.setAttribute("voffset", r), n;
                  },
                }),
                xe({
                  type: "rule",
                  names: ["\\rule"],
                  props: {
                    numArgs: 2,
                    numOptionalArgs: 1,
                    argTypes: ["size", "size", "size"],
                  },
                  handler: function (t, e, n) {
                    var r = t.parser,
                      i = n[0],
                      a = ue(e[0], "size"),
                      o = ue(e[1], "size");
                    return new le(
                      "rule",
                      {
                        type: "rule",
                        shift: i && ue(i, "size").value.value,
                        width: a.value.value,
                        height: o.value.value,
                      },
                      r.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = se.makeSpan(["mord", "rule"], [], e),
                      r = 0;
                    t.value.shift && (r = Yt(t.value.shift, e));
                    var i = Yt(t.value.width, e),
                      a = Yt(t.value.height, e);
                    return (
                      (n.style.borderRightWidth = i + "em"),
                      (n.style.borderTopWidth = a + "em"),
                      (n.style.bottom = r + "em"),
                      (n.width = i),
                      (n.height = a + r),
                      (n.depth = -r),
                      (n.maxFontSize = 1.125 * a * e.sizeMultiplier),
                      n
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    return new De.MathNode("mrow");
                  },
                }),
                xe({
                  type: "smash",
                  names: ["\\smash"],
                  props: { numArgs: 1, numOptionalArgs: 1, allowedInText: !0 },
                  handler: function (t, e, n) {
                    var r = t.parser,
                      i = !1,
                      a = !1,
                      o = n[0] && ue(n[0], "ordgroup");
                    if (o)
                      for (var s = "", l = 0; l < o.value.length; ++l)
                        if ("t" === (s = o.value[l].value)) i = !0;
                        else {
                          if ("b" !== s) {
                            (i = !1), (a = !1);
                            break;
                          }
                          a = !0;
                        }
                    else (i = !0), (a = !0);
                    var u = e[0];
                    return new le(
                      "smash",
                      { type: "smash", body: u, smashHeight: i, smashDepth: a },
                      r.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = se.makeSpan(["mord"], [Be(t.value.body, e)]);
                    if (!t.value.smashHeight && !t.value.smashDepth) return n;
                    if (t.value.smashHeight && ((n.height = 0), n.children))
                      for (var r = 0; r < n.children.length; r++)
                        n.children[r].height = 0;
                    if (t.value.smashDepth && ((n.depth = 0), n.children))
                      for (var i = 0; i < n.children.length; i++)
                        n.children[i].depth = 0;
                    return se.makeVList(
                      {
                        positionType: "firstBaseline",
                        children: [{ type: "elem", elem: n }],
                      },
                      e
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mpadded", [Fe(t.value.body, e)]);
                    return (
                      t.value.smashHeight && n.setAttribute("height", "0px"),
                      t.value.smashDepth && n.setAttribute("depth", "0px"),
                      n
                    );
                  },
                }),
                xe({
                  type: "sqrt",
                  names: ["\\sqrt"],
                  props: { numArgs: 1, numOptionalArgs: 1 },
                  handler: function (t, e, n) {
                    var r = t.parser,
                      i = n[0],
                      a = e[0];
                    return new le(
                      "sqrt",
                      { type: "sqrt", body: a, index: i },
                      r.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = Be(t.value.body, e.havingCrampedStyle());
                    0 === n.height && (n.height = e.fontMetrics().xHeight),
                      n instanceof st.documentFragment &&
                        (n = se.makeSpan([], [n], e));
                    var r = e.fontMetrics().defaultRuleThickness,
                      i = r;
                    e.style.id < z.TEXT.id && (i = e.fontMetrics().xHeight);
                    var a = r + i / 4,
                      o = (function (t, e) {
                        var n = pn("\\surd", t, mn, e),
                          r = void 0,
                          i = e.sizeMultiplier,
                          a = 0,
                          o = 0,
                          s = 0,
                          l = void 0;
                        return (
                          "small" === n.type
                            ? ((s = 1080),
                              (o =
                                1 *
                                (i =
                                  e.havingBaseStyle(n.style).sizeMultiplier /
                                  e.sizeMultiplier)),
                              ((r = on(
                                "sqrtMain",
                                (a = 1.08 * i),
                                s,
                                e
                              )).style.minWidth = "0.853em"),
                              (l = 0.833 * i))
                            : "large" === n.type
                            ? ((s = 1080 * hn[n.size]),
                              (o = hn[n.size] / i),
                              (a = (hn[n.size] + 0.08) / i),
                              ((r = on(
                                "sqrtSize" + n.size,
                                a,
                                s,
                                e
                              )).style.minWidth = "1.02em"),
                              (l = 1 / i))
                            : ((a = t / i + 0.08),
                              (o = t / i),
                              (s = Math.floor(1e3 * t) + 80),
                              ((r = on("sqrtTall", a, s, e)).style.minWidth =
                                "0.742em"),
                              (l = 1.056 / i)),
                          (r.height = o),
                          (r.style.height = a + "em"),
                          {
                            span: r,
                            advanceWidth: l,
                            ruleWidth: e.fontMetrics().sqrtRuleThickness * i,
                          }
                        );
                      })((n.height + n.depth + a + r) * e.sizeMultiplier, e),
                      s = o.span,
                      l = o.ruleWidth,
                      u = o.advanceWidth,
                      h = s.height - l;
                    h > n.height + n.depth + a &&
                      (a = (a + h - n.height - n.depth) / 2);
                    var c = s.height - n.height - a - l;
                    n.style.paddingLeft = u + "em";
                    var f = se.makeVList(
                      {
                        positionType: "firstBaseline",
                        children: [
                          {
                            type: "elem",
                            elem: n,
                            wrapperClasses: ["svg-align"],
                          },
                          { type: "kern", size: -(n.height + c) },
                          { type: "elem", elem: s },
                          { type: "kern", size: l },
                        ],
                      },
                      e
                    );
                    if (t.value.index) {
                      var m = e.havingStyle(z.SCRIPTSCRIPT),
                        d = Be(t.value.index, m, e),
                        p = 0.6 * (f.height - f.depth),
                        v = se.makeVList(
                          {
                            positionType: "shift",
                            positionData: -p,
                            children: [{ type: "elem", elem: d }],
                          },
                          e
                        ),
                        g = se.makeSpan(["root"], [v]);
                      return se.makeSpan(["mord", "sqrt"], [g, f], e);
                    }
                    return se.makeSpan(["mord", "sqrt"], [f], e);
                  },
                  mathmlBuilder: function (t, e) {
                    return t.value.index
                      ? new De.MathNode("mroot", [
                          Fe(t.value.body, e),
                          Fe(t.value.index, e),
                        ])
                      : new De.MathNode("msqrt", [Fe(t.value.body, e)]);
                  },
                });
              var Jn = {
                display: z.DISPLAY,
                text: z.TEXT,
                script: z.SCRIPT,
                scriptscript: z.SCRIPTSCRIPT,
              };
              function Kn(t, e) {
                we({
                  type: t,
                  htmlBuilder: function (e, n) {
                    var r = e.value;
                    return se.mathsym(r, e.mode, n, ["m" + t]);
                  },
                  mathmlBuilder: function (t, n) {
                    var r = new De.MathNode("mo", [Ie(t.value, t.mode)]);
                    return e && e(r, t, n), r;
                  },
                });
              }
              xe({
                type: "styling",
                names: [
                  "\\displaystyle",
                  "\\textstyle",
                  "\\scriptstyle",
                  "\\scriptscriptstyle",
                ],
                props: { numArgs: 0, allowedInText: !0 },
                handler: function (t, e) {
                  var n = t.breakOnTokenText,
                    r = t.funcName,
                    i = t.parser;
                  i.consumeSpaces();
                  var a = i.parseExpression(!0, n),
                    o = r.slice(1, r.length - 5);
                  return new le(
                    "styling",
                    { type: "styling", style: o, value: a },
                    i.mode
                  );
                },
                htmlBuilder: function (t, e) {
                  var n = Jn[t.value.style],
                    r = e.havingStyle(n).withFont("");
                  return Un(t.value.value, r, e);
                },
                mathmlBuilder: function (t, e) {
                  var n = {
                      display: z.DISPLAY,
                      text: z.TEXT,
                      script: z.SCRIPT,
                      scriptscript: z.SCRIPTSCRIPT,
                    }[t.value.style],
                    r = e.havingStyle(n),
                    i = je(t.value.value, r),
                    a = new De.MathNode("mstyle", i),
                    o = {
                      display: ["0", "true"],
                      text: ["0", "false"],
                      script: ["1", "false"],
                      scriptscript: ["2", "false"],
                    }[t.value.style];
                  return (
                    a.setAttribute("scriptlevel", o[0]),
                    a.setAttribute("displaystyle", o[1]),
                    a
                  );
                },
              }),
                we({
                  type: "supsub",
                  htmlBuilder: function (t, e) {
                    var n = (function (t, e) {
                      var n = t.value.base;
                      return n
                        ? "op" === n.type
                          ? n.value.limits &&
                            (e.style.size === z.DISPLAY.size ||
                              n.value.alwaysHandleSupSub)
                            ? Hn
                            : null
                          : "accent" === n.type
                          ? k.isCharacterBox(n.value.base)
                            ? Ye
                            : null
                          : "horizBrace" === n.type &&
                            !t.value.sub === n.value.isOver
                          ? Dn
                          : null
                        : null;
                    })(t, e);
                    if (n) return n(t, e);
                    var r = t.value,
                      i = r.base,
                      a = r.sup,
                      o = r.sub,
                      s = Be(i, e),
                      l = void 0,
                      u = void 0,
                      h = e.fontMetrics(),
                      c = 0,
                      f = 0,
                      m = i && k.isCharacterBox(i);
                    if (a) {
                      var d = e.havingStyle(e.style.sup());
                      (l = Be(a, d, e)),
                        m ||
                          (c =
                            s.height -
                            (d.fontMetrics().supDrop * d.sizeMultiplier) /
                              e.sizeMultiplier);
                    }
                    if (o) {
                      var p = e.havingStyle(e.style.sub());
                      (u = Be(o, p, e)),
                        m ||
                          (f =
                            s.depth +
                            (p.fontMetrics().subDrop * p.sizeMultiplier) /
                              e.sizeMultiplier);
                    }
                    var v;
                    v =
                      e.style === z.DISPLAY
                        ? h.sup1
                        : e.style.cramped
                        ? h.sup3
                        : h.sup2;
                    var g = e.sizeMultiplier,
                      y = 0.5 / h.ptPerEm / g + "em",
                      b = null;
                    if (u) {
                      var x = !1;
                      t.value.base &&
                        (x =
                          "\\oiint" === t.value.base.value.body ||
                          "\\oiiint" === t.value.base.value.body),
                        (s instanceof st.symbolNode || x) &&
                          (b = -s.italic + "em");
                    }
                    var w = void 0;
                    if (l && u) {
                      (c = Math.max(c, v, l.depth + 0.25 * h.xHeight)),
                        (f = Math.max(f, h.sub2));
                      var S = 4 * h.defaultRuleThickness;
                      if (c - l.depth - (u.height - f) < S) {
                        f = S - (c - l.depth) + u.height;
                        var E = 0.8 * h.xHeight - (c - l.depth);
                        E > 0 && ((c += E), (f -= E));
                      }
                      var M = [
                        {
                          type: "elem",
                          elem: u,
                          shift: f,
                          marginRight: y,
                          marginLeft: b,
                        },
                        { type: "elem", elem: l, shift: -c, marginRight: y },
                      ];
                      w = se.makeVList(
                        { positionType: "individualShift", children: M },
                        e
                      );
                    } else if (u) {
                      f = Math.max(f, h.sub1, u.height - 0.8 * h.xHeight);
                      var T = [
                        {
                          type: "elem",
                          elem: u,
                          marginLeft: b,
                          marginRight: y,
                        },
                      ];
                      w = se.makeVList(
                        { positionType: "shift", positionData: f, children: T },
                        e
                      );
                    } else {
                      if (!l)
                        throw new Error("supsub must have either sup or sub.");
                      (c = Math.max(c, v, l.depth + 0.25 * h.xHeight)),
                        (w = se.makeVList(
                          {
                            positionType: "shift",
                            positionData: -c,
                            children: [
                              { type: "elem", elem: l, marginRight: y },
                            ],
                          },
                          e
                        ));
                    }
                    var _ = Ce(s, "right") || "mord";
                    return se.makeSpan(
                      [_],
                      [s, se.makeSpan(["msupsub"], [w])],
                      e
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = !1,
                      r = void 0,
                      i = he(t.value.base, "horizBrace");
                    i &&
                      !!t.value.sup === i.value.isOver &&
                      ((n = !0), (r = i.value.isOver));
                    var a = [Fe(t.value.base, e)];
                    t.value.sub && a.push(Fe(t.value.sub, e)),
                      t.value.sup && a.push(Fe(t.value.sup, e));
                    var o = void 0;
                    if (n) o = r ? "mover" : "munder";
                    else if (t.value.sub)
                      if (t.value.sup) {
                        var s = t.value.base;
                        o =
                          s && s.value.limits && e.style === z.DISPLAY
                            ? "munderover"
                            : "msubsup";
                      } else {
                        var l = t.value.base;
                        o =
                          l && l.value.limits && e.style === z.DISPLAY
                            ? "munder"
                            : "msub";
                      }
                    else {
                      var u = t.value.base;
                      o =
                        u && u.value.limits && e.style === z.DISPLAY
                          ? "mover"
                          : "msup";
                    }
                    return new De.MathNode(o, a);
                  },
                }),
                Kn("bin", function (t, e, n) {
                  var r = Le(e, n);
                  "bold-italic" === r && t.setAttribute("mathvariant", r);
                }),
                Kn("rel"),
                Kn("open"),
                Kn("close"),
                Kn("inner"),
                Kn("punct", function (t) {
                  return t.setAttribute("separator", "true");
                });
              var Zn = { mi: "italic", mn: "normal", mtext: "normal" };
              we({
                type: "mathord",
                htmlBuilder: function (t, e) {
                  return se.makeOrd(t, e, "mathord");
                },
                mathmlBuilder: function (t, e) {
                  var n = new De.MathNode("mi", [Ie(t.value, t.mode, e)]),
                    r = Le(t, e) || "italic";
                  return (
                    r !== Zn[n.type] && n.setAttribute("mathvariant", r), n
                  );
                },
              }),
                we({
                  type: "textord",
                  htmlBuilder: function (t, e) {
                    return se.makeOrd(t, e, "textord");
                  },
                  mathmlBuilder: function (t, e) {
                    var n = Ie(t.value, t.mode, e),
                      r = Le(t, e) || "normal",
                      i = void 0;
                    return (
                      (i =
                        "text" === t.mode
                          ? new De.MathNode("mtext", [n])
                          : /[0-9]/.test(t.value)
                          ? new De.MathNode("mn", [n])
                          : "\\prime" === t.value
                          ? new De.MathNode("mo", [n])
                          : new De.MathNode("mi", [n])),
                      r !== Zn[i.type] && i.setAttribute("mathvariant", r),
                      i
                    );
                  },
                }),
                we({
                  type: "spacing",
                  htmlBuilder: function (t, e) {
                    if (se.regularSpace.hasOwnProperty(t.value)) {
                      var n = se.regularSpace[t.value].className || "";
                      if ("text" === t.mode) {
                        var r = se.makeOrd(t, e, "textord");
                        return r.classes.push(n), r;
                      }
                      return se.makeSpan(
                        ["mspace", n],
                        [se.mathsym(t.value, t.mode, e)],
                        e
                      );
                    }
                    if (se.cssSpace.hasOwnProperty(t.value))
                      return se.makeSpan(
                        ["mspace", se.cssSpace[t.value]],
                        [],
                        e
                      );
                    throw new f('Unknown type of space "' + t.value + '"');
                  },
                  mathmlBuilder: function (t, e) {
                    if (!se.regularSpace.hasOwnProperty(t.value)) {
                      if (se.cssSpace.hasOwnProperty(t.value))
                        return new De.MathNode("mspace");
                      throw new f('Unknown type of space "' + t.value + '"');
                    }
                    return new De.MathNode("mtext", [new De.TextNode(" ")]);
                  },
                }),
                we({
                  type: "tag",
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mtable", [
                      new De.MathNode("mlabeledtr", [
                        new De.MathNode("mtd", [qe(t.value.tag, e)]),
                        new De.MathNode("mtd", [qe(t.value.body, e)]),
                      ]),
                    ]);
                    return n.setAttribute("side", "right"), n;
                  },
                });
              var Qn = {
                  "\\text": void 0,
                  "\\textrm": "textrm",
                  "\\textsf": "textsf",
                  "\\texttt": "texttt",
                  "\\textnormal": "textrm",
                },
                tr = { "\\textbf": "textbf" },
                er = { "\\textit": "textit" },
                nr = function (t, e) {
                  var n = t.value.font;
                  return n
                    ? Qn[n]
                      ? e.withTextFontFamily(Qn[n])
                      : tr[n]
                      ? e.withTextFontWeight(tr[n])
                      : e.withTextFontShape(er[n])
                    : e;
                };
              xe({
                type: "text",
                names: [
                  "\\text",
                  "\\textrm",
                  "\\textsf",
                  "\\texttt",
                  "\\textnormal",
                  "\\textbf",
                  "\\textit",
                ],
                props: {
                  numArgs: 1,
                  argTypes: ["text"],
                  greediness: 2,
                  allowedInText: !0,
                  consumeMode: "text",
                },
                handler: function (t, e) {
                  var n = t.parser,
                    r = t.funcName,
                    i = e[0];
                  return new le(
                    "text",
                    { type: "text", body: ke(i), font: r },
                    n.mode
                  );
                },
                htmlBuilder: function (t, e) {
                  var n = nr(t, e),
                    r = Ne(t.value.body, n, !0);
                  return (
                    se.tryCombineChars(r), se.makeSpan(["mord", "text"], r, n)
                  );
                },
                mathmlBuilder: function (t, e) {
                  var n = nr(t, e);
                  return qe(t.value.body, n);
                },
              }),
                xe({
                  type: "underline",
                  names: ["\\underline"],
                  props: { numArgs: 1, allowedInText: !0 },
                  handler: function (t, e) {
                    var n = t.parser,
                      r = e[0];
                    return new le(
                      "underline",
                      { type: "underline", body: r },
                      n.mode
                    );
                  },
                  htmlBuilder: function (t, e) {
                    var n = Be(t.value.body, e),
                      r = se.makeLineSpan("underline-line", e),
                      i = se.makeVList(
                        {
                          positionType: "top",
                          positionData: n.height,
                          children: [
                            { type: "kern", size: r.height },
                            { type: "elem", elem: r },
                            { type: "kern", size: 3 * r.height },
                            { type: "elem", elem: n },
                          ],
                        },
                        e
                      );
                    return se.makeSpan(["mord", "underline"], [i], e);
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.MathNode("mo", [new De.TextNode("‾")]);
                    n.setAttribute("stretchy", "true");
                    var r = new De.MathNode("munder", [Fe(t.value.body, e), n]);
                    return r.setAttribute("accentunder", "true"), r;
                  },
                }),
                xe({
                  type: "verb",
                  names: ["\\verb"],
                  props: { numArgs: 0, allowedInText: !0 },
                  handler: function (t, e, n) {
                    throw new f(
                      "\\verb ended by end of line instead of matching delimiter"
                    );
                  },
                  htmlBuilder: function (t, e) {
                    for (
                      var n = se.makeVerb(t, e),
                        r = [],
                        i = e.havingStyle(e.style.text()),
                        a = 0;
                      a < n.length;
                      a++
                    ) {
                      var o = n[a];
                      "~" === o && (o = "\\textasciitilde"),
                        r.push(
                          se.makeSymbol(o, "Typewriter-Regular", t.mode, i, [
                            "mord",
                            "texttt",
                          ])
                        );
                    }
                    return (
                      se.tryCombineChars(r),
                      se.makeSpan(
                        ["mord", "text"].concat(i.sizingClasses(e)),
                        r,
                        i
                      )
                    );
                  },
                  mathmlBuilder: function (t, e) {
                    var n = new De.TextNode(se.makeVerb(t, e)),
                      r = new De.MathNode("mtext", [n]);
                    return r.setAttribute("mathvariant", "monospace"), r;
                  },
                });
              var rr = ge,
                ir = {};
              function ar(t) {
                for (
                  var e = t.type,
                    n = t.names,
                    r = t.props,
                    i = t.handler,
                    a = t.htmlBuilder,
                    o = t.mathmlBuilder,
                    s = {
                      type: e,
                      numArgs: r.numArgs || 0,
                      greediness: 1,
                      allowedInText: !1,
                      numOptionalArgs: 0,
                      handler: i,
                    },
                    l = 0;
                  l < n.length;
                  ++l
                )
                  ir[n[l]] = s;
                a && (ye[e] = a), o && (be[e] = o);
              }
              function or(t) {
                var e = [];
                t.consumeSpaces();
                for (
                  var n = t.nextToken.text;
                  "\\hline" === n || "\\hdashline" === n;

                )
                  t.consume(),
                    e.push("\\hdashline" === n),
                    t.consumeSpaces(),
                    (n = t.nextToken.text);
                return e;
              }
              function sr(t, e, n) {
                if (
                  (t.gullet.beginGroup(),
                  t.gullet.macros.set("\\\\", "\\cr"),
                  !e.arraystretch)
                ) {
                  var r = t.gullet.expandMacroAsText("\\arraystretch");
                  if (null == r) e.arraystretch = 1;
                  else if (
                    ((e.arraystretch = parseFloat(r)),
                    !e.arraystretch || e.arraystretch < 0)
                  )
                    throw new f("Invalid \\arraystretch: " + r);
                }
                var i = [],
                  a = [i],
                  o = [],
                  s = [];
                for (s.push(or(t)); ; ) {
                  var l = t.parseExpression(!1, "\\cr");
                  (l = new le("ordgroup", l, t.mode)),
                    n &&
                      (l = new le(
                        "styling",
                        { type: "styling", style: n, value: [l] },
                        t.mode
                      )),
                    i.push(l);
                  var u = t.nextToken.text;
                  if ("&" === u) t.consume();
                  else {
                    if ("\\end" === u) {
                      1 === i.length &&
                        0 === l.value.value[0].value.length &&
                        a.pop(),
                        s.length < a.length + 1 && s.push([]);
                      break;
                    }
                    if ("\\cr" !== u)
                      throw new f(
                        "Expected & or \\\\ or \\cr or \\end",
                        t.nextToken
                      );
                    var h = t.parseFunction();
                    if (!h) throw new f("Failed to parse function after " + u);
                    o.push(ue(h, "cr").value.size),
                      s.push(or(t)),
                      (i = []),
                      a.push(i);
                  }
                }
                (e.body = a), (e.rowGaps = o), (e.hLinesBeforeRow = s);
                var c = e;
                return t.gullet.endGroup(), new le("array", c, t.mode);
              }
              function lr(t) {
                return "d" === t.substr(0, 1) ? "display" : "text";
              }
              var ur = function (t, e) {
                  var n = void 0,
                    r = void 0,
                    i = t.value.body.length,
                    a = t.value.hLinesBeforeRow,
                    o = 0,
                    s = new Array(i),
                    l = [],
                    u = 1 / e.fontMetrics().ptPerEm,
                    h = 5 * u,
                    c = 12 * u,
                    m = 3 * u,
                    d = t.value.arraystretch * c,
                    p = 0.7 * d,
                    v = 0.3 * d,
                    g = 0;
                  function y(t) {
                    for (var e = 0; e < t.length; ++e)
                      e > 0 && (g += 0.25), l.push({ pos: g, isDashed: t[e] });
                  }
                  for (y(a[0]), n = 0; n < t.value.body.length; ++n) {
                    var b = t.value.body[n],
                      x = p,
                      w = v;
                    o < b.length && (o = b.length);
                    var S = new Array(b.length);
                    for (r = 0; r < b.length; ++r) {
                      var E = Be(b[r], e);
                      w < E.depth && (w = E.depth),
                        x < E.height && (x = E.height),
                        (S[r] = E);
                    }
                    var M = t.value.rowGaps[n],
                      T = 0;
                    M &&
                      (T = Yt(M.value.value, e)) > 0 &&
                      (w < (T += v) && (w = T), (T = 0)),
                      t.value.addJot && (w += m),
                      (S.height = x),
                      (S.depth = w),
                      (g += x),
                      (S.pos = g),
                      (g += w + T),
                      (s[n] = S),
                      y(a[n + 1]);
                  }
                  var _ = g / 2 + e.fontMetrics().axisHeight,
                    N = t.value.cols || [],
                    P = [],
                    C = void 0,
                    O = void 0;
                  for (r = 0, O = 0; r < o || O < N.length; ++r, ++O) {
                    for (var A = N[O] || {}, B = !0; "separator" === A.type; ) {
                      if (
                        (B ||
                          (((C = se.makeSpan(["arraycolsep"], [])).style.width =
                            e.fontMetrics().doubleRuleSep + "em"),
                          P.push(C)),
                        "|" === A.separator)
                      ) {
                        var z = se.makeSpan(["vertical-separator"], [], e);
                        (z.style.height = g + "em"),
                          (z.style.verticalAlign = -(g - _) + "em"),
                          P.push(z);
                      } else {
                        if (":" !== A.separator)
                          throw new f("Invalid separator type: " + A.separator);
                        var R = se.makeSpan(
                          ["vertical-separator", "vs-dashed"],
                          [],
                          e
                        );
                        (R.style.height = g + "em"),
                          (R.style.verticalAlign = -(g - _) + "em"),
                          P.push(R);
                      }
                      (A = N[++O] || {}), (B = !1);
                    }
                    if (!(r >= o)) {
                      var D = void 0;
                      (r > 0 || t.value.hskipBeforeAndAfter) &&
                        0 !== (D = k.deflt(A.pregap, h)) &&
                        (((C = se.makeSpan(["arraycolsep"], [])).style.width =
                          D + "em"),
                        P.push(C));
                      var I = [];
                      for (n = 0; n < i; ++n) {
                        var V = s[n],
                          L = V[r];
                        if (L) {
                          var j = V.pos - _;
                          (L.depth = V.depth),
                            (L.height = V.height),
                            I.push({ type: "elem", elem: L, shift: j });
                        }
                      }
                      (I = se.makeVList(
                        { positionType: "individualShift", children: I },
                        e
                      )),
                        (I = se.makeSpan(
                          ["col-align-" + (A.align || "c")],
                          [I]
                        )),
                        P.push(I),
                        (r < o - 1 || t.value.hskipBeforeAndAfter) &&
                          0 !== (D = k.deflt(A.postgap, h)) &&
                          (((C = se.makeSpan(["arraycolsep"], [])).style.width =
                            D + "em"),
                          P.push(C));
                    }
                  }
                  if (((s = se.makeSpan(["mtable"], P)), l.length > 0)) {
                    for (
                      var q = se.makeLineSpan("hline", e, 0.05),
                        F = se.makeLineSpan("hdashline", e, 0.05),
                        H = [{ type: "elem", elem: s, shift: 0 }];
                      l.length > 0;

                    ) {
                      var X = l.pop(),
                        W = X.pos - _;
                      X.isDashed
                        ? H.push({ type: "elem", elem: F, shift: W })
                        : H.push({ type: "elem", elem: q, shift: W });
                    }
                    s = se.makeVList(
                      { positionType: "individualShift", children: H },
                      e
                    );
                  }
                  return se.makeSpan(["mord"], [s], e);
                },
                hr = function (t, e) {
                  return new De.MathNode(
                    "mtable",
                    t.value.body.map(function (t) {
                      return new De.MathNode(
                        "mtr",
                        t.map(function (t) {
                          return new De.MathNode("mtd", [Fe(t, e)]);
                        })
                      );
                    })
                  );
                },
                cr = function (t, e) {
                  var n = [],
                    r = { type: "array", cols: n, addJot: !0 };
                  r = sr(t.parser, r, "display");
                  var i = void 0,
                    a = 0,
                    o = new le("ordgroup", [], t.mode),
                    s = he(e[0], "ordgroup");
                  if (s) {
                    for (var l = "", u = 0; u < s.value.length; u++)
                      l += ue(s.value[u], "textord").value;
                    (i = Number(l)), (a = 2 * i);
                  }
                  var h = !a;
                  r.value.body.forEach(function (t) {
                    for (var e = 1; e < t.length; e += 2)
                      ue(
                        ue(t[e], "styling").value.value[0],
                        "ordgroup"
                      ).value.unshift(o);
                    if (h) a < t.length && (a = t.length);
                    else {
                      var n = t.length / 2;
                      if (i < n)
                        throw new f(
                          "Too many math in a row: expected " +
                            i +
                            ", but got " +
                            n,
                          t[0]
                        );
                    }
                  });
                  for (var c = 0; c < a; ++c) {
                    var m = "r",
                      d = 0;
                    c % 2 == 1 ? (m = "l") : c > 0 && h && (d = 1),
                      (n[c] = {
                        type: "align",
                        align: m,
                        pregap: d,
                        postgap: 0,
                      });
                  }
                  return r;
                };
              ar({
                type: "array",
                names: ["array", "darray"],
                props: { numArgs: 1 },
                handler: function (t, e) {
                  var n = {
                    type: "array",
                    cols: (ce(e[0]) ? [e[0]] : ue(e[0], "ordgroup").value).map(
                      function (t) {
                        var e = (function (t) {
                          var e = ce(t);
                          if (!e)
                            throw new Error(
                              "Expected node of symbol group type, but got " +
                                (t ? "node of type " + t.type : String(t))
                            );
                          return e;
                        })(t).value;
                        if (-1 !== "lcr".indexOf(e))
                          return { type: "align", align: e };
                        if ("|" === e)
                          return { type: "separator", separator: "|" };
                        if (":" === e)
                          return { type: "separator", separator: ":" };
                        throw new f("Unknown column alignment: " + e, t);
                      }
                    ),
                    hskipBeforeAndAfter: !0,
                  };
                  return sr(t.parser, n, lr(t.envName));
                },
                htmlBuilder: ur,
                mathmlBuilder: hr,
              }),
                ar({
                  type: "array",
                  names: [
                    "matrix",
                    "pmatrix",
                    "bmatrix",
                    "Bmatrix",
                    "vmatrix",
                    "Vmatrix",
                  ],
                  props: { numArgs: 0 },
                  handler: function (t) {
                    var e = {
                        matrix: null,
                        pmatrix: ["(", ")"],
                        bmatrix: ["[", "]"],
                        Bmatrix: ["\\{", "\\}"],
                        vmatrix: ["|", "|"],
                        Vmatrix: ["\\Vert", "\\Vert"],
                      }[t.envName],
                      n = { type: "array", hskipBeforeAndAfter: !1 };
                    return (
                      (n = sr(t.parser, n, lr(t.envName))),
                      e &&
                        (n = new le(
                          "leftright",
                          {
                            type: "leftright",
                            body: [n],
                            left: e[0],
                            right: e[1],
                          },
                          t.mode
                        )),
                      n
                    );
                  },
                  htmlBuilder: ur,
                  mathmlBuilder: hr,
                }),
                ar({
                  type: "array",
                  names: ["cases", "dcases"],
                  props: { numArgs: 0 },
                  handler: function (t) {
                    var e = {
                      type: "array",
                      arraystretch: 1.2,
                      cols: [
                        { type: "align", align: "l", pregap: 0, postgap: 1 },
                        { type: "align", align: "l", pregap: 0, postgap: 0 },
                      ],
                    };
                    return (
                      (e = sr(t.parser, e, lr(t.envName))),
                      new le(
                        "leftright",
                        {
                          type: "leftright",
                          body: [e],
                          left: "\\{",
                          right: ".",
                        },
                        t.mode
                      )
                    );
                  },
                  htmlBuilder: ur,
                  mathmlBuilder: hr,
                }),
                ar({
                  type: "array",
                  names: ["aligned"],
                  props: { numArgs: 0 },
                  handler: cr,
                  htmlBuilder: ur,
                  mathmlBuilder: hr,
                }),
                ar({
                  type: "array",
                  names: ["gathered"],
                  props: { numArgs: 0 },
                  handler: function (t) {
                    var e = {
                      type: "array",
                      cols: [{ type: "align", align: "c" }],
                      addJot: !0,
                    };
                    return sr(t.parser, e, "display");
                  },
                  htmlBuilder: ur,
                  mathmlBuilder: hr,
                }),
                ar({
                  type: "array",
                  names: ["alignedat"],
                  props: { numArgs: 1 },
                  handler: cr,
                  htmlBuilder: ur,
                  mathmlBuilder: hr,
                }),
                xe({
                  type: "text",
                  names: ["\\hline", "\\hdashline"],
                  props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
                  handler: function (t, e) {
                    throw new f(
                      t.funcName + " valid only within array environment"
                    );
                  },
                });
              var fr = ir,
                mr = new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$"),
                dr = new RegExp("[̀-ͯ]+$"),
                pr =
                  "([ \r\n\t]+)|(%[^\n]*[\n]|[!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])",
                vr =
                  (new RegExp("^\\\\[a-zA-Z@]+"), new RegExp("^%[^\n]*[\n]")),
                gr = (function () {
                  function t(e) {
                    i()(this, t),
                      (this.input = e),
                      (this.tokenRegex = new RegExp(pr, "g"));
                  }
                  return (
                    o()(t, [
                      {
                        key: "lex",
                        value: function () {
                          var t = this.input,
                            e = this.tokenRegex.lastIndex;
                          if (e === t.length)
                            return new h("EOF", new u(this, e, e));
                          var n = this.tokenRegex.exec(t);
                          if (null === n || n.index !== e)
                            throw new f(
                              "Unexpected character: '" + t[e] + "'",
                              new h(t[e], new u(this, e, e + 1))
                            );
                          var r = n[2] || " ",
                            i = r.match(mr);
                          return (
                            i && (r = i[1]),
                            vr.test(r)
                              ? this.lex()
                              : new h(
                                  r,
                                  new u(this, e, this.tokenRegex.lastIndex)
                                )
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(),
                yr = n(62),
                br = n.n(yr),
                xr = (function () {
                  function t() {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    i()(this, t),
                      (this.current = n),
                      (this.builtins = e),
                      (this.undefStack = []);
                  }
                  return (
                    o()(t, [
                      {
                        key: "beginGroup",
                        value: function () {
                          this.undefStack.push({});
                        },
                      },
                      {
                        key: "endGroup",
                        value: function () {
                          if (0 === this.undefStack.length)
                            throw new f(
                              "Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug"
                            );
                          var t = this.undefStack.pop(),
                            e = !0,
                            n = !1,
                            r = void 0;
                          try {
                            for (
                              var i, a = D()(br()(t));
                              !(e = (i = a.next()).done);
                              e = !0
                            ) {
                              var o = i.value;
                              void 0 === t[o]
                                ? delete this.current[o]
                                : (this.current[o] = t[o]);
                            }
                          } catch (t) {
                            (n = !0), (r = t);
                          } finally {
                            try {
                              !e && a.return && a.return();
                            } finally {
                              if (n) throw r;
                            }
                          }
                        },
                      },
                      {
                        key: "has",
                        value: function (t) {
                          return (
                            this.current.hasOwnProperty(t) ||
                            this.builtins.hasOwnProperty(t)
                          );
                        },
                      },
                      {
                        key: "get",
                        value: function (t) {
                          return this.current.hasOwnProperty(t)
                            ? this.current[t]
                            : this.builtins[t];
                        },
                      },
                      {
                        key: "set",
                        value: function (t, e) {
                          if (
                            arguments.length > 2 &&
                            void 0 !== arguments[2] &&
                            arguments[2]
                          ) {
                            for (var n = 0; n < this.undefStack.length; n++)
                              delete this.undefStack[n][t];
                            this.undefStack.length > 0 &&
                              (this.undefStack[this.undefStack.length - 1][t] =
                                e);
                          } else {
                            var r = this.undefStack[this.undefStack.length - 1];
                            r &&
                              !r.hasOwnProperty(t) &&
                              (r[t] = this.current[t]);
                          }
                          this.current[t] = e;
                        },
                      },
                    ]),
                    t
                  );
                })(),
                wr = {},
                kr = wr;
              function Sr(t, e) {
                wr[t] = e;
              }
              Sr("\\@firstoftwo", function (t) {
                return { tokens: t.consumeArgs(2)[0], numArgs: 0 };
              }),
                Sr("\\@secondoftwo", function (t) {
                  return { tokens: t.consumeArgs(2)[1], numArgs: 0 };
                }),
                Sr("\\@ifnextchar", function (t) {
                  var e = t.consumeArgs(3),
                    n = t.future();
                  return 1 === e[0].length && e[0][0].text === n.text
                    ? { tokens: e[1], numArgs: 0 }
                    : { tokens: e[2], numArgs: 0 };
                }),
                Sr("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"),
                Sr("\\TextOrMath", function (t) {
                  var e = t.consumeArgs(2);
                  return "text" === t.mode
                    ? { tokens: e[0], numArgs: 0 }
                    : { tokens: e[1], numArgs: 0 };
                });
              var Er = function (t, e) {
                var n = t.consumeArgs(1)[0];
                if (1 !== n.length)
                  throw new f("\\gdef's first argument must be a macro name");
                var r = n[0].text,
                  i = 0;
                for (
                  n = t.consumeArgs(1)[0];
                  1 === n.length && "#" === n[0].text;

                ) {
                  if (1 !== (n = t.consumeArgs(1)[0]).length)
                    throw new f(
                      'Invalid argument number length "' + n.length + '"'
                    );
                  if (!/^[1-9]$/.test(n[0].text))
                    throw new f('Invalid argument number "' + n[0].text + '"');
                  if ((i++, parseInt(n[0].text) !== i))
                    throw new f(
                      'Argument number "' + n[0].text + '" out of order'
                    );
                  n = t.consumeArgs(1)[0];
                }
                return t.macros.set(r, { tokens: n, numArgs: i }, e), "";
              };
              Sr("\\gdef", function (t) {
                return Er(t, !0);
              }),
                Sr("\\def", function (t) {
                  return Er(t, !1);
                }),
                Sr("\\global", function (t) {
                  var e = t.consumeArgs(1)[0];
                  if (1 !== e.length)
                    throw new f("Invalid command after \\global");
                  var n = e[0].text;
                  if ("\\def" === n) return Er(t, !0);
                  throw new f("Invalid command '" + n + "' after \\global");
                });
              var Mr = function (t, e, n) {
                var r = t.consumeArgs(1)[0];
                if (1 !== r.length)
                  throw new f(
                    "\\newcommand's first argument must be a macro name"
                  );
                var i = r[0].text,
                  a = t.isDefined(i);
                if (a && !e)
                  throw new f(
                    "\\newcommand{" +
                      i +
                      "} attempting to redefine " +
                      i +
                      "; use \\renewcommand"
                  );
                if (!a && !n)
                  throw new f(
                    "\\renewcommand{" +
                      i +
                      "} when command " +
                      i +
                      " does not yet exist; use \\newcommand"
                  );
                var o = 0;
                if (
                  1 === (r = t.consumeArgs(1)[0]).length &&
                  "[" === r[0].text
                ) {
                  for (
                    var s = "", l = t.expandNextToken();
                    "]" !== l.text && "EOF" !== l.text;

                  )
                    (s += l.text), (l = t.expandNextToken());
                  if (!s.match(/^\s*[0-9]+\s*$/))
                    throw new f("Invalid number of arguments: " + s);
                  (o = parseInt(s)), (r = t.consumeArgs(1)[0]);
                }
                return t.macros.set(i, { tokens: r, numArgs: o }), "";
              };
              Sr("\\newcommand", function (t) {
                return Mr(t, !1, !0);
              }),
                Sr("\\renewcommand", function (t) {
                  return Mr(t, !0, !1);
                }),
                Sr("\\providecommand", function (t) {
                  return Mr(t, !0, !0);
                }),
                Sr("\\bgroup", "{"),
                Sr("\\egroup", "}"),
                Sr("\\begingroup", "{"),
                Sr("\\endgroup", "}"),
                Sr("\\lq", "`"),
                Sr("\\rq", "'"),
                Sr("\\aa", "\\r a"),
                Sr("\\AA", "\\r A"),
                Sr("\\textcopyright", "\\textcircled{c}"),
                Sr(
                  "\\copyright",
                  "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"
                ),
                Sr("\\textregistered", "\\textcircled{\\scriptsize R}"),
                Sr("ℂ", "\\mathbb{C}"),
                Sr("ℍ", "\\mathbb{H}"),
                Sr("ℕ", "\\mathbb{N}"),
                Sr("ℙ", "\\mathbb{P}"),
                Sr("ℚ", "\\mathbb{Q}"),
                Sr("ℝ", "\\mathbb{R}"),
                Sr("ℤ", "\\mathbb{Z}"),
                Sr("ℎ", "\\mathit{h}"),
                Sr("ℬ", "\\mathscr{B}"),
                Sr("ℰ", "\\mathscr{E}"),
                Sr("ℱ", "\\mathscr{F}"),
                Sr("ℋ", "\\mathscr{H}"),
                Sr("ℐ", "\\mathscr{I}"),
                Sr("ℒ", "\\mathscr{L}"),
                Sr("ℳ", "\\mathscr{M}"),
                Sr("ℛ", "\\mathscr{R}"),
                Sr("ℭ", "\\mathfrak{C}"),
                Sr("ℌ", "\\mathfrak{H}"),
                Sr("ℨ", "\\mathfrak{Z}"),
                Sr("·", "\\cdotp"),
                Sr("\\llap", "\\mathllap{\\textrm{#1}}"),
                Sr("\\rlap", "\\mathrlap{\\textrm{#1}}"),
                Sr("\\clap", "\\mathclap{\\textrm{#1}}"),
                Sr("\\neq", "\\not="),
                Sr("\\ne", "\\neq"),
                Sr("≠", "\\neq"),
                Sr("\\notin", "\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}"),
                Sr("∉", "\\notin"),
                Sr(
                  "≘",
                  "\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}"
                ),
                Sr("≙", "\\stackrel{\\tiny\\wedge}{=}"),
                Sr("≚", "\\stackrel{\\tiny\\vee}{=}"),
                Sr("≛", "\\stackrel{\\scriptsize\\star}{=}"),
                Sr("≝", "\\stackrel{\\tiny\\mathrm{def}}{=}"),
                Sr("≞", "\\stackrel{\\tiny\\mathrm{m}}{=}"),
                Sr("≟", "\\stackrel{\\tiny?}{=}"),
                Sr("⟂", "\\perp"),
                Sr("‼", "\\mathclose{!\\mkern-0.8mu!}"),
                Sr("∌", "\\notni"),
                Sr("⌜", "\\ulcorner"),
                Sr("⌝", "\\urcorner"),
                Sr("⌞", "\\llcorner"),
                Sr("⌟", "\\lrcorner"),
                Sr("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"),
                Sr("⋮", "\\vdots"),
                Sr("\\varGamma", "\\mathit{\\Gamma}"),
                Sr("\\varDelta", "\\mathit{\\Delta}"),
                Sr("\\varTheta", "\\mathit{\\Theta}"),
                Sr("\\varLambda", "\\mathit{\\Lambda}"),
                Sr("\\varXi", "\\mathit{\\Xi}"),
                Sr("\\varPi", "\\mathit{\\Pi}"),
                Sr("\\varSigma", "\\mathit{\\Sigma}"),
                Sr("\\varUpsilon", "\\mathit{\\Upsilon}"),
                Sr("\\varPhi", "\\mathit{\\Phi}"),
                Sr("\\varPsi", "\\mathit{\\Psi}"),
                Sr("\\varOmega", "\\mathit{\\Omega}"),
                Sr(
                  "\\colon",
                  "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"
                ),
                Sr("\\boxed", "\\fbox{\\displaystyle{#1}}"),
                Sr("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"),
                Sr("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"),
                Sr("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
              var Tr = {
                ",": "\\dotsc",
                "\\not": "\\dotsb",
                "+": "\\dotsb",
                "=": "\\dotsb",
                "<": "\\dotsb",
                ">": "\\dotsb",
                "-": "\\dotsb",
                "*": "\\dotsb",
                ":": "\\dotsb",
                "\\DOTSB": "\\dotsb",
                "\\coprod": "\\dotsb",
                "\\bigvee": "\\dotsb",
                "\\bigwedge": "\\dotsb",
                "\\biguplus": "\\dotsb",
                "\\bigcap": "\\dotsb",
                "\\bigcup": "\\dotsb",
                "\\prod": "\\dotsb",
                "\\sum": "\\dotsb",
                "\\bigotimes": "\\dotsb",
                "\\bigoplus": "\\dotsb",
                "\\bigodot": "\\dotsb",
                "\\bigsqcup": "\\dotsb",
                "\\And": "\\dotsb",
                "\\longrightarrow": "\\dotsb",
                "\\Longrightarrow": "\\dotsb",
                "\\longleftarrow": "\\dotsb",
                "\\Longleftarrow": "\\dotsb",
                "\\longleftrightarrow": "\\dotsb",
                "\\Longleftrightarrow": "\\dotsb",
                "\\mapsto": "\\dotsb",
                "\\longmapsto": "\\dotsb",
                "\\hookrightarrow": "\\dotsb",
                "\\doteq": "\\dotsb",
                "\\mathbin": "\\dotsb",
                "\\mathrel": "\\dotsb",
                "\\relbar": "\\dotsb",
                "\\Relbar": "\\dotsb",
                "\\xrightarrow": "\\dotsb",
                "\\xleftarrow": "\\dotsb",
                "\\DOTSI": "\\dotsi",
                "\\int": "\\dotsi",
                "\\oint": "\\dotsi",
                "\\iint": "\\dotsi",
                "\\iiint": "\\dotsi",
                "\\iiiint": "\\dotsi",
                "\\idotsint": "\\dotsi",
                "\\DOTSX": "\\dotsx",
              };
              Sr("\\dots", function (t) {
                var e = "\\dotso",
                  n = t.expandAfterFuture().text;
                return (
                  n in Tr
                    ? (e = Tr[n])
                    : "\\not" === n.substr(0, 4)
                    ? (e = "\\dotsb")
                    : n in pt.math &&
                      k.contains(["bin", "rel"], pt.math[n].group) &&
                      (e = "\\dotsb"),
                  e
                );
              });
              var _r = {
                ")": !0,
                "]": !0,
                "\\rbrack": !0,
                "\\}": !0,
                "\\rbrace": !0,
                "\\rangle": !0,
                "\\rceil": !0,
                "\\rfloor": !0,
                "\\rgroup": !0,
                "\\rmoustache": !0,
                "\\right": !0,
                "\\bigr": !0,
                "\\biggr": !0,
                "\\Bigr": !0,
                "\\Biggr": !0,
                $: !0,
                ";": !0,
                ".": !0,
                ",": !0,
              };
              Sr("\\dotso", function (t) {
                return t.future().text in _r ? "\\ldots\\," : "\\ldots";
              }),
                Sr("\\dotsc", function (t) {
                  var e = t.future().text;
                  return e in _r && "," !== e ? "\\ldots\\," : "\\ldots";
                }),
                Sr("\\cdots", function (t) {
                  return t.future().text in _r ? "\\@cdots\\," : "\\@cdots";
                }),
                Sr("\\dotsb", "\\cdots"),
                Sr("\\dotsm", "\\cdots"),
                Sr("\\dotsi", "\\!\\cdots"),
                Sr("\\dotsx", "\\ldots\\,"),
                Sr("\\DOTSI", "\\relax"),
                Sr("\\DOTSB", "\\relax"),
                Sr("\\DOTSX", "\\relax"),
                Sr("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"),
                Sr("\\,", "\\tmspace+{3mu}{.1667em}"),
                Sr("\\thinspace", "\\,"),
                Sr("\\:", "\\tmspace+{4mu}{.2222em}"),
                Sr("\\medspace", "\\:"),
                Sr("\\;", "\\tmspace+{5mu}{.2777em}"),
                Sr("\\thickspace", "\\;"),
                Sr("\\!", "\\tmspace-{3mu}{.1667em}"),
                Sr("\\negthinspace", "\\!"),
                Sr("\\negmedspace", "\\tmspace-{4mu}{.2222em}"),
                Sr("\\negthickspace", "\\tmspace-{5mu}{.277em}"),
                Sr("\\enspace", "\\kern.5em "),
                Sr("\\enskip", "\\hskip.5em\\relax"),
                Sr("\\quad", "\\hskip1em\\relax"),
                Sr("\\qquad", "\\hskip2em\\relax"),
                Sr("\\tag", "\\@ifstar\\tag@literal\\tag@paren"),
                Sr("\\tag@paren", "\\tag@literal{({#1})}"),
                Sr("\\tag@literal", function (t) {
                  if (t.macros.get("\\df@tag")) throw new f("Multiple \\tag");
                  return "\\gdef\\df@tag{\\text{#1}}";
                }),
                Sr(
                  "\\bmod",
                  "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"
                ),
                Sr(
                  "\\pod",
                  "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"
                ),
                Sr("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"),
                Sr(
                  "\\mod",
                  "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"
                ),
                Sr("\\\\", "\\newline"),
                Sr(
                  "\\TeX",
                  "\\textrm{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}"
                );
              var Nr =
                lt["Main-Regular"]["T".charCodeAt(0)][1] -
                0.7 * lt["Main-Regular"]["A".charCodeAt(0)][1] +
                "em";
              Sr(
                "\\LaTeX",
                "\\textrm{L\\kern-.36em\\raisebox{" +
                  Nr +
                  "}{\\scriptsize A}\\kern-.15em\\TeX}"
              ),
                Sr(
                  "\\KaTeX",
                  "\\textrm{K\\kern-.17em\\raisebox{" +
                    Nr +
                    "}{\\scriptsize A}\\kern-.15em\\TeX}"
                ),
                Sr("\\hspace", "\\@ifstar\\@hspacer\\@hspace"),
                Sr("\\@hspace", "\\hskip #1\\relax"),
                Sr("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"),
                Sr("\\ordinarycolon", ":"),
                Sr("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"),
                Sr(
                  "\\dblcolon",
                  "\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}"
                ),
                Sr(
                  "\\coloneqq",
                  "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}"
                ),
                Sr(
                  "\\Coloneqq",
                  "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}"
                ),
                Sr(
                  "\\coloneq",
                  "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"
                ),
                Sr(
                  "\\Coloneq",
                  "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}"
                ),
                Sr(
                  "\\eqqcolon",
                  "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}"
                ),
                Sr(
                  "\\Eqqcolon",
                  "\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}"
                ),
                Sr(
                  "\\eqcolon",
                  "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}"
                ),
                Sr(
                  "\\Eqcolon",
                  "\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}"
                ),
                Sr(
                  "\\colonapprox",
                  "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}"
                ),
                Sr(
                  "\\Colonapprox",
                  "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}"
                ),
                Sr(
                  "\\colonsim",
                  "\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}"
                ),
                Sr(
                  "\\Colonsim",
                  "\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}"
                ),
                Sr("≔", "\\coloneqq"),
                Sr("≕", "\\eqqcolon"),
                Sr("⩴", "\\Coloneqq"),
                Sr("\\ratio", "\\vcentcolon"),
                Sr("\\coloncolon", "\\dblcolon"),
                Sr("\\colonequals", "\\coloneqq"),
                Sr("\\coloncolonequals", "\\Coloneqq"),
                Sr("\\equalscolon", "\\eqqcolon"),
                Sr("\\equalscoloncolon", "\\Eqqcolon"),
                Sr("\\colonminus", "\\coloneq"),
                Sr("\\coloncolonminus", "\\Coloneq"),
                Sr("\\minuscolon", "\\eqcolon"),
                Sr("\\minuscoloncolon", "\\Eqcolon"),
                Sr("\\coloncolonapprox", "\\Colonapprox"),
                Sr("\\coloncolonsim", "\\Colonsim"),
                Sr(
                  "\\simcolon",
                  "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"
                ),
                Sr(
                  "\\simcoloncolon",
                  "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"
                ),
                Sr(
                  "\\approxcolon",
                  "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"
                ),
                Sr(
                  "\\approxcoloncolon",
                  "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"
                ),
                Sr("\\notni", "\\not\\ni"),
                Sr(
                  "\\limsup",
                  "\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"
                ),
                Sr(
                  "\\liminf",
                  "\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits"
                );
              var Pr = {
                  "\\relax": !0,
                  "^": !0,
                  _: !0,
                  "\\limits": !0,
                  "\\nolimits": !0,
                },
                Cr = (function () {
                  function t(e, n, r) {
                    i()(this, t),
                      this.feed(e),
                      (this.macros = new xr(kr, n.macros)),
                      (this.maxExpand = n.maxExpand),
                      (this.mode = r),
                      (this.stack = []);
                  }
                  return (
                    o()(t, [
                      {
                        key: "feed",
                        value: function (t) {
                          this.lexer = new gr(t);
                        },
                      },
                      {
                        key: "switchMode",
                        value: function (t) {
                          this.mode = t;
                        },
                      },
                      {
                        key: "beginGroup",
                        value: function () {
                          this.macros.beginGroup();
                        },
                      },
                      {
                        key: "endGroup",
                        value: function () {
                          this.macros.endGroup();
                        },
                      },
                      {
                        key: "future",
                        value: function () {
                          return (
                            0 === this.stack.length &&
                              this.pushToken(this.lexer.lex()),
                            this.stack[this.stack.length - 1]
                          );
                        },
                      },
                      {
                        key: "popToken",
                        value: function () {
                          return this.future(), this.stack.pop();
                        },
                      },
                      {
                        key: "pushToken",
                        value: function (t) {
                          this.stack.push(t);
                        },
                      },
                      {
                        key: "pushTokens",
                        value: function (t) {
                          var e;
                          (e = this.stack).push.apply(e, M()(t));
                        },
                      },
                      {
                        key: "consumeSpaces",
                        value: function () {
                          for (; " " === this.future().text; ) this.stack.pop();
                        },
                      },
                      {
                        key: "consumeArgs",
                        value: function (t) {
                          for (var e = [], n = 0; n < t; ++n) {
                            this.consumeSpaces();
                            var r = this.popToken();
                            if ("{" === r.text) {
                              for (var i = [], a = 1; 0 !== a; ) {
                                var o = this.popToken();
                                if ((i.push(o), "{" === o.text)) ++a;
                                else if ("}" === o.text) --a;
                                else if ("EOF" === o.text)
                                  throw new f(
                                    "End of input in macro argument",
                                    r
                                  );
                              }
                              i.pop(), i.reverse(), (e[n] = i);
                            } else {
                              if ("EOF" === r.text)
                                throw new f(
                                  "End of input expecting macro argument"
                                );
                              e[n] = [r];
                            }
                          }
                          return e;
                        },
                      },
                      {
                        key: "expandOnce",
                        value: function () {
                          var t = this.popToken(),
                            e = t.text,
                            n = this._getExpansion(e);
                          if (null == n) return this.pushToken(t), t;
                          if (
                            this.maxExpand !== 1 / 0 &&
                            (this.maxExpand--, this.maxExpand < 0)
                          )
                            throw new f(
                              "Too many expansions: infinite loop or need to increase maxExpand setting"
                            );
                          var r = n.tokens;
                          if (n.numArgs)
                            for (
                              var i = this.consumeArgs(n.numArgs),
                                a = (r = r.slice()).length - 1;
                              a >= 0;
                              --a
                            ) {
                              var o = r[a];
                              if ("#" === o.text) {
                                if (0 === a)
                                  throw new f(
                                    "Incomplete placeholder at end of macro body",
                                    o
                                  );
                                if ("#" === (o = r[--a]).text)
                                  r.splice(a + 1, 1);
                                else {
                                  if (!/^[1-9]$/.test(o.text))
                                    throw new f(
                                      "Not a valid argument number",
                                      o
                                    );
                                  var s;
                                  (s = r).splice.apply(
                                    s,
                                    [a, 2].concat(M()(i[+o.text - 1]))
                                  );
                                }
                              }
                            }
                          return this.pushTokens(r), r;
                        },
                      },
                      {
                        key: "expandAfterFuture",
                        value: function () {
                          return this.expandOnce(), this.future();
                        },
                      },
                      {
                        key: "expandNextToken",
                        value: function () {
                          for (;;) {
                            var t = this.expandOnce();
                            if (t instanceof h) {
                              if ("\\relax" !== t.text) return this.stack.pop();
                              this.stack.pop();
                            }
                          }
                          throw new Error();
                        },
                      },
                      {
                        key: "expandMacro",
                        value: function (t) {
                          if (this.macros.get(t)) {
                            var e = [],
                              n = this.stack.length;
                            for (
                              this.pushToken(new h(t));
                              this.stack.length > n;

                            )
                              this.expandOnce() instanceof h &&
                                e.push(this.stack.pop());
                            return e;
                          }
                        },
                      },
                      {
                        key: "expandMacroAsText",
                        value: function (t) {
                          var e = this.expandMacro(t);
                          return e
                            ? e
                                .map(function (t) {
                                  return t.text;
                                })
                                .join("")
                            : e;
                        },
                      },
                      {
                        key: "_getExpansion",
                        value: function (t) {
                          var e = this.macros.get(t);
                          if (null == e) return e;
                          var n = "function" == typeof e ? e(this) : e;
                          if ("string" == typeof n) {
                            var r = 0;
                            if (-1 !== n.indexOf("#"))
                              for (
                                var i = n.replace(/##/g, "");
                                -1 !== i.indexOf("#" + (r + 1));

                              )
                                ++r;
                            for (
                              var a = new gr(n), o = [], s = a.lex();
                              "EOF" !== s.text;

                            )
                              o.push(s), (s = a.lex());
                            return o.reverse(), { tokens: o, numArgs: r };
                          }
                          return n;
                        },
                      },
                      {
                        key: "isDefined",
                        value: function (t) {
                          return (
                            this.macros.has(t) ||
                            rr.hasOwnProperty(t) ||
                            pt.math.hasOwnProperty(t) ||
                            pt.text.hasOwnProperty(t) ||
                            Pr.hasOwnProperty(t)
                          );
                        },
                      },
                    ]),
                    t
                  );
                })(),
                Or = n(40),
                Ar = n.n(Or),
                Br = {
                  á: "á",
                  à: "à",
                  ä: "ä",
                  ǟ: "ǟ",
                  ã: "ã",
                  ā: "ā",
                  ă: "ă",
                  ắ: "ắ",
                  ằ: "ằ",
                  ẵ: "ẵ",
                  ǎ: "ǎ",
                  â: "â",
                  ấ: "ấ",
                  ầ: "ầ",
                  ẫ: "ẫ",
                  ȧ: "ȧ",
                  ǡ: "ǡ",
                  å: "å",
                  ǻ: "ǻ",
                  ḃ: "ḃ",
                  ć: "ć",
                  č: "č",
                  ĉ: "ĉ",
                  ċ: "ċ",
                  ď: "ď",
                  ḋ: "ḋ",
                  é: "é",
                  è: "è",
                  ë: "ë",
                  ẽ: "ẽ",
                  ē: "ē",
                  ḗ: "ḗ",
                  ḕ: "ḕ",
                  ĕ: "ĕ",
                  ě: "ě",
                  ê: "ê",
                  ế: "ế",
                  ề: "ề",
                  ễ: "ễ",
                  ė: "ė",
                  ḟ: "ḟ",
                  ǵ: "ǵ",
                  ḡ: "ḡ",
                  ğ: "ğ",
                  ǧ: "ǧ",
                  ĝ: "ĝ",
                  ġ: "ġ",
                  ḧ: "ḧ",
                  ȟ: "ȟ",
                  ĥ: "ĥ",
                  ḣ: "ḣ",
                  í: "í",
                  ì: "ì",
                  ï: "ï",
                  ḯ: "ḯ",
                  ĩ: "ĩ",
                  ī: "ī",
                  ĭ: "ĭ",
                  ǐ: "ǐ",
                  î: "î",
                  ǰ: "ǰ",
                  ĵ: "ĵ",
                  ḱ: "ḱ",
                  ǩ: "ǩ",
                  ĺ: "ĺ",
                  ľ: "ľ",
                  ḿ: "ḿ",
                  ṁ: "ṁ",
                  ń: "ń",
                  ǹ: "ǹ",
                  ñ: "ñ",
                  ň: "ň",
                  ṅ: "ṅ",
                  ó: "ó",
                  ò: "ò",
                  ö: "ö",
                  ȫ: "ȫ",
                  õ: "õ",
                  ṍ: "ṍ",
                  ṏ: "ṏ",
                  ȭ: "ȭ",
                  ō: "ō",
                  ṓ: "ṓ",
                  ṑ: "ṑ",
                  ŏ: "ŏ",
                  ǒ: "ǒ",
                  ô: "ô",
                  ố: "ố",
                  ồ: "ồ",
                  ỗ: "ỗ",
                  ȯ: "ȯ",
                  ȱ: "ȱ",
                  ő: "ő",
                  ṕ: "ṕ",
                  ṗ: "ṗ",
                  ŕ: "ŕ",
                  ř: "ř",
                  ṙ: "ṙ",
                  ś: "ś",
                  ṥ: "ṥ",
                  š: "š",
                  ṧ: "ṧ",
                  ŝ: "ŝ",
                  ṡ: "ṡ",
                  ẗ: "ẗ",
                  ť: "ť",
                  ṫ: "ṫ",
                  ú: "ú",
                  ù: "ù",
                  ü: "ü",
                  ǘ: "ǘ",
                  ǜ: "ǜ",
                  ǖ: "ǖ",
                  ǚ: "ǚ",
                  ũ: "ũ",
                  ṹ: "ṹ",
                  ū: "ū",
                  ṻ: "ṻ",
                  ŭ: "ŭ",
                  ǔ: "ǔ",
                  û: "û",
                  ů: "ů",
                  ű: "ű",
                  ṽ: "ṽ",
                  ẃ: "ẃ",
                  ẁ: "ẁ",
                  ẅ: "ẅ",
                  ŵ: "ŵ",
                  ẇ: "ẇ",
                  ẘ: "ẘ",
                  ẍ: "ẍ",
                  ẋ: "ẋ",
                  ý: "ý",
                  ỳ: "ỳ",
                  ÿ: "ÿ",
                  ỹ: "ỹ",
                  ȳ: "ȳ",
                  ŷ: "ŷ",
                  ẏ: "ẏ",
                  ẙ: "ẙ",
                  ź: "ź",
                  ž: "ž",
                  ẑ: "ẑ",
                  ż: "ż",
                  Á: "Á",
                  À: "À",
                  Ä: "Ä",
                  Ǟ: "Ǟ",
                  Ã: "Ã",
                  Ā: "Ā",
                  Ă: "Ă",
                  Ắ: "Ắ",
                  Ằ: "Ằ",
                  Ẵ: "Ẵ",
                  Ǎ: "Ǎ",
                  Â: "Â",
                  Ấ: "Ấ",
                  Ầ: "Ầ",
                  Ẫ: "Ẫ",
                  Ȧ: "Ȧ",
                  Ǡ: "Ǡ",
                  Å: "Å",
                  Ǻ: "Ǻ",
                  Ḃ: "Ḃ",
                  Ć: "Ć",
                  Č: "Č",
                  Ĉ: "Ĉ",
                  Ċ: "Ċ",
                  Ď: "Ď",
                  Ḋ: "Ḋ",
                  É: "É",
                  È: "È",
                  Ë: "Ë",
                  Ẽ: "Ẽ",
                  Ē: "Ē",
                  Ḗ: "Ḗ",
                  Ḕ: "Ḕ",
                  Ĕ: "Ĕ",
                  Ě: "Ě",
                  Ê: "Ê",
                  Ế: "Ế",
                  Ề: "Ề",
                  Ễ: "Ễ",
                  Ė: "Ė",
                  Ḟ: "Ḟ",
                  Ǵ: "Ǵ",
                  Ḡ: "Ḡ",
                  Ğ: "Ğ",
                  Ǧ: "Ǧ",
                  Ĝ: "Ĝ",
                  Ġ: "Ġ",
                  Ḧ: "Ḧ",
                  Ȟ: "Ȟ",
                  Ĥ: "Ĥ",
                  Ḣ: "Ḣ",
                  Í: "Í",
                  Ì: "Ì",
                  Ï: "Ï",
                  Ḯ: "Ḯ",
                  Ĩ: "Ĩ",
                  Ī: "Ī",
                  Ĭ: "Ĭ",
                  Ǐ: "Ǐ",
                  Î: "Î",
                  İ: "İ",
                  Ĵ: "Ĵ",
                  Ḱ: "Ḱ",
                  Ǩ: "Ǩ",
                  Ĺ: "Ĺ",
                  Ľ: "Ľ",
                  Ḿ: "Ḿ",
                  Ṁ: "Ṁ",
                  Ń: "Ń",
                  Ǹ: "Ǹ",
                  Ñ: "Ñ",
                  Ň: "Ň",
                  Ṅ: "Ṅ",
                  Ó: "Ó",
                  Ò: "Ò",
                  Ö: "Ö",
                  Ȫ: "Ȫ",
                  Õ: "Õ",
                  Ṍ: "Ṍ",
                  Ṏ: "Ṏ",
                  Ȭ: "Ȭ",
                  Ō: "Ō",
                  Ṓ: "Ṓ",
                  Ṑ: "Ṑ",
                  Ŏ: "Ŏ",
                  Ǒ: "Ǒ",
                  Ô: "Ô",
                  Ố: "Ố",
                  Ồ: "Ồ",
                  Ỗ: "Ỗ",
                  Ȯ: "Ȯ",
                  Ȱ: "Ȱ",
                  Ő: "Ő",
                  Ṕ: "Ṕ",
                  Ṗ: "Ṗ",
                  Ŕ: "Ŕ",
                  Ř: "Ř",
                  Ṙ: "Ṙ",
                  Ś: "Ś",
                  Ṥ: "Ṥ",
                  Š: "Š",
                  Ṧ: "Ṧ",
                  Ŝ: "Ŝ",
                  Ṡ: "Ṡ",
                  Ť: "Ť",
                  Ṫ: "Ṫ",
                  Ú: "Ú",
                  Ù: "Ù",
                  Ü: "Ü",
                  Ǘ: "Ǘ",
                  Ǜ: "Ǜ",
                  Ǖ: "Ǖ",
                  Ǚ: "Ǚ",
                  Ũ: "Ũ",
                  Ṹ: "Ṹ",
                  Ū: "Ū",
                  Ṻ: "Ṻ",
                  Ŭ: "Ŭ",
                  Ǔ: "Ǔ",
                  Û: "Û",
                  Ů: "Ů",
                  Ű: "Ű",
                  Ṽ: "Ṽ",
                  Ẃ: "Ẃ",
                  Ẁ: "Ẁ",
                  Ẅ: "Ẅ",
                  Ŵ: "Ŵ",
                  Ẇ: "Ẇ",
                  Ẍ: "Ẍ",
                  Ẋ: "Ẋ",
                  Ý: "Ý",
                  Ỳ: "Ỳ",
                  Ÿ: "Ÿ",
                  Ỹ: "Ỹ",
                  Ȳ: "Ȳ",
                  Ŷ: "Ŷ",
                  Ẏ: "Ẏ",
                  Ź: "Ź",
                  Ž: "Ž",
                  Ẑ: "Ẑ",
                  Ż: "Ż",
                  ά: "ά",
                  ὰ: "ὰ",
                  ᾱ: "ᾱ",
                  ᾰ: "ᾰ",
                  έ: "έ",
                  ὲ: "ὲ",
                  ή: "ή",
                  ὴ: "ὴ",
                  ί: "ί",
                  ὶ: "ὶ",
                  ϊ: "ϊ",
                  ΐ: "ΐ",
                  ῒ: "ῒ",
                  ῑ: "ῑ",
                  ῐ: "ῐ",
                  ό: "ό",
                  ὸ: "ὸ",
                  ύ: "ύ",
                  ὺ: "ὺ",
                  ϋ: "ϋ",
                  ΰ: "ΰ",
                  ῢ: "ῢ",
                  ῡ: "ῡ",
                  ῠ: "ῠ",
                  ώ: "ώ",
                  ὼ: "ὼ",
                  Ύ: "Ύ",
                  Ὺ: "Ὺ",
                  Ϋ: "Ϋ",
                  Ῡ: "Ῡ",
                  Ῠ: "Ῠ",
                  Ώ: "Ώ",
                  Ὼ: "Ὼ",
                };
              function zr(t, e) {
                return { type: "arg", result: t, token: e };
              }
              var Rr = (function () {
                function t(e, n) {
                  i()(this, t),
                    (this.mode = "math"),
                    (this.gullet = new Cr(e, n, this.mode)),
                    (this.settings = n),
                    (this.leftrightDepth = 0);
                }
                return (
                  o()(t, [
                    {
                      key: "expect",
                      value: function (t) {
                        var e =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1];
                        if (this.nextToken.text !== t)
                          throw new f(
                            "Expected '" +
                              t +
                              "', got '" +
                              this.nextToken.text +
                              "'",
                            this.nextToken
                          );
                        e && this.consume();
                      },
                    },
                    {
                      key: "consume",
                      value: function () {
                        this.nextToken = this.gullet.expandNextToken();
                      },
                    },
                    {
                      key: "switchMode",
                      value: function (t) {
                        (this.mode = t), this.gullet.switchMode(t);
                      },
                    },
                    {
                      key: "parse",
                      value: function () {
                        this.gullet.beginGroup(),
                          this.settings.colorIsTextColor &&
                            this.gullet.macros.set("\\color", "\\textcolor"),
                          this.consume();
                        var t = this.parseExpression(!1);
                        return (
                          this.expect("EOF", !1), this.gullet.endGroup(), t
                        );
                      },
                    },
                    {
                      key: "parseExpression",
                      value: function (e, n) {
                        for (var r = []; ; ) {
                          "math" === this.mode && this.consumeSpaces();
                          var i = this.nextToken;
                          if (-1 !== t.endOfExpression.indexOf(i.text)) break;
                          if (n && i.text === n) break;
                          if (e && rr[i.text] && rr[i.text].infix) break;
                          var a = this.parseAtom(n);
                          if (!a) {
                            if (
                              !this.settings.throwOnError &&
                              "\\" === i.text[0]
                            ) {
                              var o = this.handleUnsupportedCmd();
                              r.push(o);
                              continue;
                            }
                            break;
                          }
                          r.push(a);
                        }
                        return (
                          "text" === this.mode && this.formLigatures(r),
                          this.handleInfixNodes(r)
                        );
                      },
                    },
                    {
                      key: "handleInfixNodes",
                      value: function (t) {
                        for (var e = -1, n = void 0, r = 0; r < t.length; r++) {
                          var i = he(t[r], "infix");
                          if (i) {
                            if (-1 !== e)
                              throw new f(
                                "only one infix operator per group",
                                i.value.token
                              );
                            (e = r), (n = i.value.replaceWith);
                          }
                        }
                        if (-1 !== e && n) {
                          var a,
                            o,
                            s = t.slice(0, e),
                            l = t.slice(e + 1);
                          return (
                            (a =
                              1 === s.length && "ordgroup" === s[0].type
                                ? s[0]
                                : new le("ordgroup", s, this.mode)),
                            (o =
                              1 === l.length && "ordgroup" === l[0].type
                                ? l[0]
                                : new le("ordgroup", l, this.mode)),
                            [
                              "\\\\abovefrac" === n
                                ? this.callFunction(n, [a, t[e], o], [])
                                : this.callFunction(n, [a, o], []),
                            ]
                          );
                        }
                        return t;
                      },
                    },
                    {
                      key: "handleSupSubscript",
                      value: function (e) {
                        var n = this.nextToken,
                          r = n.text;
                        this.consume(), this.consumeSpaces();
                        var i = this.parseGroup();
                        if (!i) {
                          if (
                            this.settings.throwOnError ||
                            "\\" !== this.nextToken.text[0]
                          )
                            throw new f("Expected group after '" + r + "'", n);
                          return this.handleUnsupportedCmd();
                        }
                        if ("fn" === i.type) {
                          if (rr[i.result].greediness > t.SUPSUB_GREEDINESS)
                            return this.parseGivenFunction(i);
                          throw new f(
                            "Got function '" +
                              i.result +
                              "' with no arguments as " +
                              e,
                            n
                          );
                        }
                        return i.result;
                      },
                    },
                    {
                      key: "handleUnsupportedCmd",
                      value: function () {
                        for (
                          var t = this.nextToken.text, e = [], n = 0;
                          n < t.length;
                          n++
                        )
                          e.push(new le("textord", t[n], "text"));
                        var r = new le(
                            "text",
                            { body: e, type: "text" },
                            this.mode
                          ),
                          i = new le(
                            "color",
                            {
                              color: this.settings.errorColor,
                              value: [r],
                              type: "color",
                            },
                            this.mode
                          );
                        return this.consume(), i;
                      },
                    },
                    {
                      key: "parseAtom",
                      value: function (t) {
                        var e = this.parseImplicitGroup(t);
                        if ("text" === this.mode) return e;
                        for (var n = void 0, r = void 0; ; ) {
                          this.consumeSpaces();
                          var i = this.nextToken;
                          if (
                            "\\limits" === i.text ||
                            "\\nolimits" === i.text
                          ) {
                            var a = he(e, "op");
                            if (!a)
                              throw new f(
                                "Limit controls must follow a math operator",
                                i
                              );
                            var o = "\\limits" === i.text;
                            (a.value.limits = o),
                              (a.value.alwaysHandleSupSub = !0),
                              this.consume();
                          } else if ("^" === i.text) {
                            if (n) throw new f("Double superscript", i);
                            n = this.handleSupSubscript("superscript");
                          } else if ("_" === i.text) {
                            if (r) throw new f("Double subscript", i);
                            r = this.handleSupSubscript("subscript");
                          } else {
                            if ("'" !== i.text) break;
                            if (n) throw new f("Double superscript", i);
                            var s = new le("textord", "\\prime", this.mode),
                              l = [s];
                            for (this.consume(); "'" === this.nextToken.text; )
                              l.push(s), this.consume();
                            "^" === this.nextToken.text &&
                              l.push(this.handleSupSubscript("superscript")),
                              (n = new le("ordgroup", l, this.mode));
                          }
                        }
                        return n || r
                          ? new le(
                              "supsub",
                              { type: "supsub", base: e, sup: n, sub: r },
                              this.mode
                            )
                          : e;
                      },
                    },
                    {
                      key: "parseImplicitGroup",
                      value: function (t) {
                        var e = this.parseSymbol();
                        if (null == e) return this.parseFunction();
                        if ("arg" === e.type) return this.parseGivenFunction(e);
                        if ("\\begin" === e.result) {
                          var n = ue(this.parseGivenFunction(e), "environment"),
                            r = n.value.name;
                          if (!fr.hasOwnProperty(r))
                            throw new f(
                              "No such environment: " + r,
                              n.value.nameGroup
                            );
                          var i = fr[r],
                            a = this.parseArguments("\\begin{" + r + "}", i),
                            o = a.args,
                            s = a.optArgs,
                            l = { mode: this.mode, envName: r, parser: this },
                            u = i.handler(l, o, s);
                          this.expect("\\end", !1);
                          var h = this.nextToken,
                            c = this.parseFunction();
                          if (!c)
                            throw new f("failed to parse function after \\end");
                          if ((c = ue(c, "environment")).value.name !== r)
                            throw new f(
                              "Mismatch: \\begin{" +
                                r +
                                "} matched by \\end{" +
                                c.value.name +
                                "}",
                              h
                            );
                          return u;
                        }
                        return this.parseGivenFunction(e, t);
                      },
                    },
                    {
                      key: "parseFunction",
                      value: function () {
                        var t = this.parseGroup();
                        return t ? this.parseGivenFunction(t) : null;
                      },
                    },
                    {
                      key: "parseGivenFunction",
                      value: function (t, e) {
                        if ("fn" === t.type) {
                          var n = t.result,
                            r = rr[n];
                          if ("text" === this.mode && !r.allowedInText)
                            throw new f(
                              "Can't use function '" + n + "' in text mode",
                              t.token
                            );
                          if ("math" === this.mode && !1 === r.allowedInMath)
                            throw new f(
                              "Can't use function '" + n + "' in math mode",
                              t.token
                            );
                          if (r.consumeMode) {
                            var i = this.mode;
                            this.switchMode(r.consumeMode),
                              this.consume(),
                              this.switchMode(i);
                          } else this.consume();
                          var a = this.parseArguments(n, r),
                            o = a.args,
                            s = a.optArgs,
                            l = t.token;
                          return this.callFunction(n, o, s, l, e);
                        }
                        return t.result;
                      },
                    },
                    {
                      key: "callFunction",
                      value: function (t, e, n, r, i) {
                        var a = {
                            funcName: t,
                            parser: this,
                            token: r,
                            breakOnTokenText: i,
                          },
                          o = rr[t];
                        if (o && o.handler) return o.handler(a, e, n);
                        throw new f("No function handler for " + t);
                      },
                    },
                    {
                      key: "parseArguments",
                      value: function (t, e) {
                        var n = e.numArgs + e.numOptionalArgs;
                        if (0 === n) return { args: [], optArgs: [] };
                        for (
                          var r = e.greediness, i = [], a = [], o = 0;
                          o < n;
                          o++
                        ) {
                          var s = e.argTypes && e.argTypes[o],
                            l = o < e.numOptionalArgs;
                          o > 0 && !l && this.consumeSpaces(),
                            0 !== o ||
                              l ||
                              "math" !== this.mode ||
                              this.consumeSpaces();
                          var u = this.nextToken,
                            h = s
                              ? this.parseGroupOfType(s, l)
                              : this.parseGroup(l);
                          if (!h) {
                            if (l) {
                              a.push(null);
                              continue;
                            }
                            if (
                              this.settings.throwOnError ||
                              "\\" !== this.nextToken.text[0]
                            )
                              throw new f(
                                "Expected group after '" + t + "'",
                                u
                              );
                            h = zr(this.handleUnsupportedCmd(), u);
                          }
                          var c = void 0;
                          if ("fn" === h.type) {
                            if (!(rr[h.result].greediness > r))
                              throw new f(
                                "Got function '" +
                                  h.result +
                                  "' as argument to '" +
                                  t +
                                  "'",
                                u
                              );
                            c = this.parseGivenFunction(h);
                          } else c = h.result;
                          (l ? a : i).push(c);
                        }
                        return { args: i, optArgs: a };
                      },
                    },
                    {
                      key: "parseGroupOfType",
                      value: function (t, e) {
                        if (
                          ("original" === t && (t = this.mode), "color" === t)
                        )
                          return this.parseColorGroup(e);
                        if ("size" === t) return this.parseSizeGroup(e);
                        if ("string" === t) {
                          var n = this.parseStringGroup(t, e, !0);
                          return null != n
                            ? zr(
                                new le(
                                  "string",
                                  { type: "string", value: n.text },
                                  this.mode
                                ),
                                n
                              )
                            : null;
                        }
                        return this.parseGroup(e, t);
                      },
                    },
                    {
                      key: "consumeSpaces",
                      value: function () {
                        for (; " " === this.nextToken.text; ) this.consume();
                      },
                    },
                    {
                      key: "parseStringGroup",
                      value: function (t, e, n) {
                        var r = e ? "[" : "{",
                          i = e ? "]" : "}";
                        if (e && this.nextToken.text !== r) return null;
                        var a = this.mode;
                        (this.mode = "text"), this.expect(r);
                        for (
                          var o = "", s = 0, l = this.nextToken, u = l;
                          (n && s > 0) || this.nextToken.text !== i;

                        ) {
                          if ("EOF" === this.nextToken.text)
                            throw new f(
                              "Unexpected end of input in " + t,
                              l.range(this.nextToken, o)
                            );
                          (o += (u = this.nextToken).text),
                            u.text === r ? s++ : u.text === i && s--,
                            this.consume();
                        }
                        return (this.mode = a), this.expect(i), l.range(u, o);
                      },
                    },
                    {
                      key: "parseRegexGroup",
                      value: function (t, e) {
                        var n = this.mode;
                        this.mode = "text";
                        for (
                          var r = this.nextToken, i = r, a = "";
                          "EOF" !== this.nextToken.text &&
                          t.test(a + this.nextToken.text);

                        )
                          (a += (i = this.nextToken).text), this.consume();
                        if ("" === a)
                          throw new f("Invalid " + e + ": '" + r.text + "'", r);
                        return (this.mode = n), r.range(i, a);
                      },
                    },
                    {
                      key: "parseColorGroup",
                      value: function (t) {
                        var e = this.parseStringGroup("color", t);
                        if (!e) return null;
                        var n = /^(#[a-f0-9]{3}|#[a-f0-9]{6}|[a-z]+)$/i.exec(
                          e.text
                        );
                        if (!n)
                          throw new f("Invalid color: '" + e.text + "'", e);
                        return zr(new le("color-token", n[0], this.mode), e);
                      },
                    },
                    {
                      key: "parseSizeGroup",
                      value: function (t) {
                        var e = void 0,
                          n = !1;
                        if (
                          !(e =
                            t || "{" === this.nextToken.text
                              ? this.parseStringGroup("size", t)
                              : this.parseRegexGroup(
                                  /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
                                  "size"
                                ))
                        )
                          return null;
                        t ||
                          0 !== e.text.length ||
                          ((e.text = "0pt"), (n = !0));
                        var r =
                          /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(
                            e.text
                          );
                        if (!r)
                          throw new f("Invalid size: '" + e.text + "'", e);
                        var i,
                          a = { number: +(r[1] + r[2]), unit: r[3] };
                        if (
                          ("string" != typeof (i = a) && (i = i.unit),
                          !(i in Gt || i in Ut || "ex" === i))
                        )
                          throw new f("Invalid unit: '" + a.unit + "'", e);
                        return zr(
                          new le(
                            "size",
                            { type: "size", value: a, isBlank: n },
                            this.mode
                          ),
                          e
                        );
                      },
                    },
                    {
                      key: "parseGroup",
                      value: function (t, e) {
                        var n = this.mode,
                          r = this.nextToken;
                        if (this.nextToken.text === (t ? "[" : "{")) {
                          e && this.switchMode(e),
                            this.gullet.beginGroup(),
                            this.consume();
                          var i = this.parseExpression(!1, t ? "]" : "}"),
                            a = this.nextToken;
                          return (
                            e && this.switchMode(n),
                            this.gullet.endGroup(),
                            this.expect(t ? "]" : "}"),
                            zr(
                              new le("ordgroup", i, this.mode, r, a),
                              r.range(a, r.text)
                            )
                          );
                        }
                        e && this.switchMode(e);
                        var o = t ? null : this.parseSymbol();
                        return e && this.switchMode(n), o;
                      },
                    },
                    {
                      key: "formLigatures",
                      value: function (t) {
                        for (var e = t.length - 1, n = 0; n < e; ++n) {
                          var r = t[n],
                            i = r.value;
                          "-" === i &&
                            "-" === t[n + 1].value &&
                            (n + 1 < e && "-" === t[n + 2].value
                              ? (t.splice(
                                  n,
                                  3,
                                  new le("textord", "---", "text", r, t[n + 2])
                                ),
                                (e -= 2))
                              : (t.splice(
                                  n,
                                  2,
                                  new le("textord", "--", "text", r, t[n + 1])
                                ),
                                (e -= 1))),
                            ("'" !== i && "`" !== i) ||
                              t[n + 1].value !== i ||
                              (t.splice(
                                n,
                                2,
                                new le("textord", i + i, "text", r, t[n + 1])
                              ),
                              (e -= 1));
                        }
                      },
                    },
                    {
                      key: "parseSymbol",
                      value: function () {
                        var t,
                          e = this.nextToken,
                          n = e.text;
                        if (rr[n])
                          return { type: "fn", result: (t = e).text, token: t };
                        if (/^\\verb[^a-zA-Z]/.test(n)) {
                          this.consume();
                          var r = n.slice(5),
                            i = "*" === r.charAt(0);
                          if (
                            (i && (r = r.slice(1)),
                            r.length < 2 || r.charAt(0) !== r.slice(-1))
                          )
                            throw new f(
                              "\\verb assertion failed --\n                    please report what input caused this bug"
                            );
                          return (
                            (r = r.slice(1, -1)),
                            zr(
                              new le(
                                "verb",
                                { type: "verb", body: r, star: i },
                                "text"
                              ),
                              e
                            )
                          );
                        }
                        Br.hasOwnProperty(n[0]) &&
                          !pt[this.mode][n[0]] &&
                          (this.settings.strict &&
                            "math" === this.mode &&
                            this.settings.reportNonstrict(
                              "unicodeTextInMathMode",
                              'Accented Unicode text character "' +
                                n[0] +
                                '" used in math mode',
                              e
                            ),
                          (n = Br[n[0]] + n.substr(1)));
                        var a = dr.exec(n);
                        a &&
                          ("i" === (n = n.substring(0, a.index))
                            ? (n = "ı")
                            : "j" === n && (n = "ȷ"));
                        var o = null;
                        if (pt[this.mode][n])
                          this.settings.strict &&
                            "math" === this.mode &&
                            "ÇÐÞçþ".indexOf(n) >= 0 &&
                            this.settings.reportNonstrict(
                              "unicodeTextInMathMode",
                              'Latin-1/Unicode text character "' +
                                n[0] +
                                '" used in math mode',
                              e
                            ),
                            (o = new le(
                              pt[this.mode][n].group,
                              n,
                              this.mode,
                              e
                            ));
                        else {
                          if (!(n.charCodeAt(0) >= 128)) return null;
                          this.settings.strict &&
                            ($(n.charCodeAt(0))
                              ? "math" === this.mode &&
                                this.settings.reportNonstrict(
                                  "unicodeTextInMathMode",
                                  'Unicode text character "' +
                                    n[0] +
                                    '" used in math mode',
                                  e
                                )
                              : this.settings.reportNonstrict(
                                  "unknownSymbol",
                                  'Unrecognized Unicode character "' +
                                    n[0] +
                                    '"',
                                  e
                                )),
                            (o = new le("textord", n, this.mode, e));
                        }
                        if ((this.consume(), a))
                          for (var s = 0; s < a[0].length; s++) {
                            var l = a[0][s];
                            if (!Ar.a[l])
                              throw new f("Unknown accent ' " + l + "'", e);
                            var u = Ar.a[l][this.mode];
                            if (!u)
                              throw new f(
                                "Accent " +
                                  l +
                                  " unsupported in " +
                                  this.mode +
                                  " mode",
                                e
                              );
                            o = new le(
                              "accent",
                              {
                                type: "accent",
                                label: u,
                                isStretchy: !1,
                                isShifty: !0,
                                base: o,
                              },
                              this.mode,
                              e
                            );
                          }
                        return zr(o, e);
                      },
                    },
                  ]),
                  t
                );
              })();
              (Rr.endOfExpression = ["}", "\\end", "\\right", "&"]),
                (Rr.SUPSUB_GREEDINESS = 1);
              var Dr = Rr,
                Ir = function (t, e) {
                  if (!("string" == typeof t || t instanceof String))
                    throw new TypeError(
                      "KaTeX can only parse string typed expression"
                    );
                  var n = new Dr(t, e);
                  delete n.gullet.macros.current["\\df@tag"];
                  var r = n.parse();
                  if (n.gullet.macros.get("\\df@tag")) {
                    if (!e.displayMode)
                      throw new f("\\tag works only in display equations");
                    n.gullet.feed("\\df@tag"),
                      (r = [
                        new le(
                          "tag",
                          { type: "tag", body: r, tag: n.parse() },
                          "text"
                        ),
                      ]);
                  }
                  return r;
                },
                Vr = n(61),
                Lr = function (t, e, n) {
                  k.clearNode(e);
                  var r = qr(t, n).toNode();
                  e.appendChild(r);
                };
              "undefined" != typeof document &&
                "CSS1Compat" !== document.compatMode &&
                ("undefined" != typeof console &&
                  console.warn(
                    "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."
                  ),
                (Lr = function () {
                  throw new f("KaTeX doesn't work in quirks mode.");
                }));
              var jr = function (t, e, n) {
                  if (n.throwOnError || !(t instanceof f)) throw t;
                  var r = se.makeSpan(["katex-error"], [new st.symbolNode(e)]);
                  return (
                    r.setAttribute("title", t.toString()),
                    r.setAttribute("style", "color:" + n.errorColor),
                    r
                  );
                },
                qr = function (t, e) {
                  var n = new S(e);
                  try {
                    return (function (t, e, n) {
                      var r = He(n),
                        i = (function (t, e, n) {
                          var r,
                            i = je(t, n);
                          r =
                            1 === i.length &&
                            k.contains(["mrow", "mtable"], i[0].type)
                              ? i[0]
                              : new De.MathNode("mrow", i);
                          var a = new De.MathNode("annotation", [
                            new De.TextNode(e),
                          ]);
                          a.setAttribute("encoding", "application/x-tex");
                          var o = new De.MathNode("semantics", [r, a]),
                            s = new De.MathNode("math", [o]);
                          return se.makeSpan(["katex-mathml"], [s]);
                        })(t, e, r),
                        a = Re(t, r),
                        o = se.makeSpan(["katex"], [i, a]);
                      return n.displayMode
                        ? se.makeSpan(["katex-display"], [o])
                        : o;
                    })(Ir(t, n), t, n);
                  } catch (e) {
                    return jr(e, t, n);
                  }
                },
                Fr = {
                  version: Vr.a,
                  render: Lr,
                  renderToString: function (t, e) {
                    return qr(t, e).toMarkup();
                  },
                  ParseError: f,
                  __parse: function (t, e) {
                    var n = new S(e);
                    return Ir(t, n);
                  },
                  __renderToDomTree: qr,
                  __renderToHTMLTree: function (t, e) {
                    var n = new S(e);
                    try {
                      return (function (t, e, n) {
                        var r = Re(t, He(n)),
                          i = se.makeSpan(["katex"], [r]);
                        return n.displayMode
                          ? se.makeSpan(["katex-display"], [i])
                          : i;
                      })(Ir(t, n), 0, n);
                    } catch (e) {
                      return jr(e, t, n);
                    }
                  },
                  __setFontMetrics: function (t, e) {
                    lt[t] = e;
                  },
                  __defineSymbol: vt,
                  __defineMacro: Sr,
                  __domTree: st,
                };
              e.default = Fr;
            },
            function (t, e, n) {
              n(24)("getOwnPropertyNames", function () {
                return n(47).f;
              });
            },
            function (t, e, n) {
              n(67);
              var r = n(2).Object;
              t.exports = function (t) {
                return r.getOwnPropertyNames(t);
              };
            },
            function (t, e, n) {
              var r = n(17),
                i = n(18);
              n(24)("keys", function () {
                return function (t) {
                  return i(r(t));
                };
              });
            },
            function (t, e, n) {
              n(69), (t.exports = n(2).Object.keys);
            },
            function (t, e, n) {
              var r = n(18),
                i = n(26),
                a = n(21),
                o = n(17),
                s = n(53),
                l = Object.assign;
              t.exports =
                !l ||
                n(15)(function () {
                  var t = {},
                    e = {},
                    n = Symbol(),
                    r = "abcdefghijklmnopqrst";
                  return (
                    (t[n] = 7),
                    r.split("").forEach(function (t) {
                      e[t] = t;
                    }),
                    7 != l({}, t)[n] || Object.keys(l({}, e)).join("") != r
                  );
                })
                  ? function (t, e) {
                      for (
                        var n = o(t),
                          l = arguments.length,
                          u = 1,
                          h = i.f,
                          c = a.f;
                        l > u;

                      )
                        for (
                          var f,
                            m = s(arguments[u++]),
                            d = h ? r(m).concat(h(m)) : r(m),
                            p = d.length,
                            v = 0;
                          p > v;

                        )
                          c.call(m, (f = d[v++])) && (n[f] = m[f]);
                      return n;
                    }
                  : l;
            },
            function (t, e, n) {
              var r = n(8);
              r(r.S + r.F, "Object", { assign: n(71) });
            },
            function (t, e, n) {
              n(72), (t.exports = n(2).Object.assign);
            },
            function (t, e, n) {
              var r = n(8);
              r(r.S, "Object", { create: n(35) });
            },
            function (t, e, n) {
              n(74);
              var r = n(2).Object;
              t.exports = function (t, e) {
                return r.create(t, e);
              };
            },
            function (t, e, n) {
              t.exports = { default: n(75), __esModule: !0 };
            },
            function (t, e, n) {
              var r = n(11),
                i = n(12),
                a = function (t, e) {
                  if ((i(t), !r(e) && null !== e))
                    throw TypeError(e + ": can't set as prototype!");
                };
              t.exports = {
                set:
                  Object.setPrototypeOf ||
                  ("__proto__" in {}
                    ? (function (t, e, r) {
                        try {
                          (r = n(39)(
                            Function.call,
                            n(45).f(Object.prototype, "__proto__").set,
                            2
                          ))(t, []),
                            (e = !(t instanceof Array));
                        } catch (t) {
                          e = !0;
                        }
                        return function (t, n) {
                          return a(t, n), e ? (t.__proto__ = n) : r(t, n), t;
                        };
                      })({}, !1)
                    : void 0),
                check: a,
              };
            },
            function (t, e, n) {
              var r = n(8);
              r(r.S, "Object", { setPrototypeOf: n(77).set });
            },
            function (t, e, n) {
              n(78), (t.exports = n(2).Object.setPrototypeOf);
            },
            function (t, e, n) {
              t.exports = { default: n(79), __esModule: !0 };
            },
            function (t, e, n) {
              n(27)("observable");
            },
            function (t, e, n) {
              n(27)("asyncIterator");
            },
            function (t, e) {},
            function (t, e, n) {
              var r = n(34);
              t.exports =
                Array.isArray ||
                function (t) {
                  return "Array" == r(t);
                };
            },
            function (t, e, n) {
              var r = n(18),
                i = n(26),
                a = n(21);
              t.exports = function (t) {
                var e = r(t),
                  n = i.f;
                if (n)
                  for (var o, s = n(t), l = a.f, u = 0; s.length > u; )
                    l.call(t, (o = s[u++])) && e.push(o);
                return e;
              };
            },
            function (t, e, n) {
              var r = n(7),
                i = n(9),
                o = n(10),
                s = n(8),
                l = n(55),
                u = n(57).KEY,
                h = n(15),
                c = n(32),
                f = n(30),
                m = n(25),
                d = n(5),
                p = n(28),
                v = n(27),
                g = n(85),
                y = n(84),
                b = n(12),
                x = n(11),
                w = n(13),
                k = n(38),
                S = n(19),
                E = n(35),
                M = n(47),
                T = n(45),
                _ = n(6),
                N = n(18),
                P = T.f,
                C = _.f,
                O = M.f,
                A = r.Symbol,
                B = r.JSON,
                z = B && B.stringify,
                R = d("_hidden"),
                D = d("toPrimitive"),
                I = {}.propertyIsEnumerable,
                V = c("symbol-registry"),
                L = c("symbols"),
                j = c("op-symbols"),
                q = Object.prototype,
                F = "function" == typeof A,
                H = r.QObject,
                X = !H || !H.prototype || !H.prototype.findChild,
                W =
                  o &&
                  h(function () {
                    return (
                      7 !=
                      E(
                        C({}, "a", {
                          get: function () {
                            return C(this, "a", { value: 7 }).a;
                          },
                        })
                      ).a
                    );
                  })
                    ? function (t, e, n) {
                        var r = P(q, e);
                        r && delete q[e],
                          C(t, e, n),
                          r && t !== q && C(q, e, r);
                      }
                    : C,
                G = function (t) {
                  var e = (L[t] = E(A.prototype));
                  return (e._k = t), e;
                },
                U =
                  F && "symbol" == a(A.iterator)
                    ? function (t) {
                        return "symbol" == (void 0 === t ? "undefined" : a(t));
                      }
                    : function (t) {
                        return t instanceof A;
                      },
                Y = function t(e, n, r) {
                  return (
                    e === q && t(j, n, r),
                    b(e),
                    (n = k(n, !0)),
                    b(r),
                    i(L, n)
                      ? (r.enumerable
                          ? (i(e, R) && e[R][n] && (e[R][n] = !1),
                            (r = E(r, { enumerable: S(0, !1) })))
                          : (i(e, R) || C(e, R, S(1, {})), (e[R][n] = !0)),
                        W(e, n, r))
                      : C(e, n, r)
                  );
                },
                $ = function (t, e) {
                  b(t);
                  for (var n, r = g((e = w(e))), i = 0, a = r.length; a > i; )
                    Y(t, (n = r[i++]), e[n]);
                  return t;
                },
                J = function (t) {
                  var e = I.call(this, (t = k(t, !0)));
                  return (
                    !(this === q && i(L, t) && !i(j, t)) &&
                    (!(
                      e ||
                      !i(this, t) ||
                      !i(L, t) ||
                      (i(this, R) && this[R][t])
                    ) ||
                      e)
                  );
                },
                K = function (t, e) {
                  if (
                    ((t = w(t)), (e = k(e, !0)), t !== q || !i(L, e) || i(j, e))
                  ) {
                    var n = P(t, e);
                    return (
                      !n ||
                        !i(L, e) ||
                        (i(t, R) && t[R][e]) ||
                        (n.enumerable = !0),
                      n
                    );
                  }
                },
                Z = function (t) {
                  for (var e, n = O(w(t)), r = [], a = 0; n.length > a; )
                    i(L, (e = n[a++])) || e == R || e == u || r.push(e);
                  return r;
                },
                Q = function (t) {
                  for (
                    var e, n = t === q, r = O(n ? j : w(t)), a = [], o = 0;
                    r.length > o;

                  )
                    !i(L, (e = r[o++])) || (n && !i(q, e)) || a.push(L[e]);
                  return a;
                };
              F ||
                (l(
                  (A = function () {
                    if (this instanceof A)
                      throw TypeError("Symbol is not a constructor!");
                    var t = m(arguments.length > 0 ? arguments[0] : void 0);
                    return (
                      o &&
                        X &&
                        W(q, t, {
                          configurable: !0,
                          set: function e(n) {
                            this === q && e.call(j, n),
                              i(this, R) && i(this[R], t) && (this[R][t] = !1),
                              W(this, t, S(1, n));
                          },
                        }),
                      G(t)
                    );
                  }).prototype,
                  "toString",
                  function () {
                    return this._k;
                  }
                ),
                (T.f = K),
                (_.f = Y),
                (n(46).f = M.f = Z),
                (n(21).f = J),
                (n(26).f = Q),
                o && !n(22) && l(q, "propertyIsEnumerable", J, !0),
                (p.f = function (t) {
                  return G(d(t));
                })),
                s(s.G + s.W + s.F * !F, { Symbol: A });
              for (
                var tt =
                    "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
                      ","
                    ),
                  et = 0;
                tt.length > et;

              )
                d(tt[et++]);
              for (var nt = N(d.store), rt = 0; nt.length > rt; ) v(nt[rt++]);
              s(s.S + s.F * !F, "Symbol", {
                for: function (t) {
                  return i(V, (t += "")) ? V[t] : (V[t] = A(t));
                },
                keyFor: function (t) {
                  if (!U(t)) throw TypeError(t + " is not a symbol!");
                  for (var e in V) if (V[e] === t) return e;
                },
                useSetter: function () {
                  X = !0;
                },
                useSimple: function () {
                  X = !1;
                },
              }),
                s(s.S + s.F * !F, "Object", {
                  create: function (t, e) {
                    return void 0 === e ? E(t) : $(E(t), e);
                  },
                  defineProperty: Y,
                  defineProperties: $,
                  getOwnPropertyDescriptor: K,
                  getOwnPropertyNames: Z,
                  getOwnPropertySymbols: Q,
                }),
                B &&
                  s(
                    s.S +
                      s.F *
                        (!F ||
                          h(function () {
                            var t = A();
                            return (
                              "[null]" != z([t]) ||
                              "{}" != z({ a: t }) ||
                              "{}" != z(Object(t))
                            );
                          })),
                    "JSON",
                    {
                      stringify: function (t) {
                        for (var e, n, r = [t], i = 1; arguments.length > i; )
                          r.push(arguments[i++]);
                        if (((n = e = r[1]), (x(e) || void 0 !== t) && !U(t)))
                          return (
                            y(e) ||
                              (e = function (t, e) {
                                if (
                                  ("function" == typeof n &&
                                    (e = n.call(this, t, e)),
                                  !U(e))
                                )
                                  return e;
                              }),
                            (r[1] = e),
                            z.apply(B, r)
                          );
                      },
                    }
                  ),
                A.prototype[D] || n(16)(A.prototype, D, A.prototype.valueOf),
                f(A, "Symbol"),
                f(Math, "Math", !0),
                f(r.JSON, "JSON", !0);
            },
            function (t, e, n) {
              n(86), n(83), n(82), n(81), (t.exports = n(2).Symbol);
            },
            function (t, e, n) {
              t.exports = { default: n(87), __esModule: !0 };
            },
            function (t, e, n) {
              n(23), n(29), (t.exports = n(28).f("iterator"));
            },
            function (t, e, n) {
              t.exports = { default: n(89), __esModule: !0 };
            },
            function (t, e, n) {
              var r = n(17),
                i = n(51);
              n(24)("getPrototypeOf", function () {
                return function (t) {
                  return i(r(t));
                };
              });
            },
            function (t, e, n) {
              n(91), (t.exports = n(2).Object.getPrototypeOf);
            },
            function (t, e, n) {
              var r = n(49),
                i = n(5)("iterator"),
                a = n(14);
              t.exports = n(2).isIterable = function (t) {
                var e = Object(t);
                return (
                  void 0 !== e[i] || "@@iterator" in e || a.hasOwnProperty(r(e))
                );
              };
            },
            function (t, e, n) {
              n(29), n(23), (t.exports = n(93));
            },
            function (t, e, n) {
              t.exports = { default: n(94), __esModule: !0 };
            },
            function (t, e, n) {
              var r = n(12),
                i = n(50);
              t.exports = n(2).getIterator = function (t) {
                var e = i(t);
                if ("function" != typeof e)
                  throw TypeError(t + " is not iterable!");
                return r(e.call(t));
              };
            },
            function (t, e) {
              t.exports = function (t, e) {
                return { value: e, done: !!t };
              };
            },
            function (t, e) {
              t.exports = function () {};
            },
            function (t, e, n) {
              var r = n(98),
                i = n(97),
                a = n(14),
                o = n(13);
              (t.exports = n(56)(
                Array,
                "Array",
                function (t, e) {
                  (this._t = o(t)), (this._i = 0), (this._k = e);
                },
                function () {
                  var t = this._t,
                    e = this._k,
                    n = this._i++;
                  return !t || n >= t.length
                    ? ((this._t = void 0), i(1))
                    : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
                },
                "values"
              )),
                (a.Arguments = a.Array),
                r("keys"),
                r("values"),
                r("entries");
            },
            function (t, e, n) {
              n(29), n(23), (t.exports = n(96));
            },
            function (t, e, n) {
              var r = n(5)("iterator"),
                i = !1;
              try {
                var a = [7][r]();
                (a.return = function () {
                  i = !0;
                }),
                  Array.from(a, function () {
                    throw 2;
                  });
              } catch (t) {}
              t.exports = function (t, e) {
                if (!e && !i) return !1;
                var n = !1;
                try {
                  var a = [7],
                    o = a[r]();
                  (o.next = function () {
                    return { done: (n = !0) };
                  }),
                    (a[r] = function () {
                      return o;
                    }),
                    t(a);
                } catch (t) {}
                return n;
              };
            },
            function (t, e, n) {
              var r = n(6),
                i = n(19);
              t.exports = function (t, e, n) {
                e in t ? r.f(t, e, i(0, n)) : (t[e] = n);
              };
            },
            function (t, e, n) {
              var r = n(14),
                i = n(5)("iterator"),
                a = Array.prototype;
              t.exports = function (t) {
                return void 0 !== t && (r.Array === t || a[i] === t);
              };
            },
            function (t, e, n) {
              var r = n(12);
              t.exports = function (t, e, n, i) {
                try {
                  return i ? e(r(n)[0], n[1]) : e(n);
                } catch (e) {
                  var a = t.return;
                  throw (void 0 !== a && r(a.call(t)), e);
                }
              };
            },
            function (t, e, n) {
              var r = n(39),
                i = n(8),
                a = n(17),
                o = n(104),
                s = n(103),
                l = n(52),
                u = n(102),
                h = n(50);
              i(
                i.S +
                  i.F *
                    !n(101)(function (t) {
                      Array.from(t);
                    }),
                "Array",
                {
                  from: function (t) {
                    var e,
                      n,
                      i,
                      c,
                      f = a(t),
                      m = "function" == typeof this ? this : Array,
                      d = arguments.length,
                      p = d > 1 ? arguments[1] : void 0,
                      v = void 0 !== p,
                      g = 0,
                      y = h(f);
                    if (
                      (v && (p = r(p, d > 2 ? arguments[2] : void 0, 2)),
                      void 0 == y || (m == Array && s(y)))
                    )
                      for (n = new m((e = l(f.length))); e > g; g++)
                        u(n, g, v ? p(f[g], g) : f[g]);
                    else
                      for (
                        c = y.call(f), n = new m();
                        !(i = c.next()).done;
                        g++
                      )
                        u(n, g, v ? o(c, p, [i.value, g], !0) : i.value);
                    return (n.length = g), n;
                  },
                }
              );
            },
            function (t, e, n) {
              var r = n(7).document;
              t.exports = r && r.documentElement;
            },
            function (t, e, n) {
              var r = n(37),
                i = Math.max,
                a = Math.min;
              t.exports = function (t, e) {
                return (t = r(t)) < 0 ? i(t + e, 0) : a(t, e);
              };
            },
            function (t, e, n) {
              var r = n(13),
                i = n(52),
                a = n(107);
              t.exports = function (t) {
                return function (e, n, o) {
                  var s,
                    l = r(e),
                    u = i(l.length),
                    h = a(o, u);
                  if (t && n != n) {
                    for (; u > h; ) if ((s = l[h++]) != s) return !0;
                  } else
                    for (; u > h; h++)
                      if ((t || h in l) && l[h] === n) return t || h || 0;
                  return !t && -1;
                };
              };
            },
            function (t, e, n) {
              var r = n(6),
                i = n(12),
                a = n(18);
              t.exports = n(10)
                ? Object.defineProperties
                : function (t, e) {
                    i(t);
                    for (var n, o = a(e), s = o.length, l = 0; s > l; )
                      r.f(t, (n = o[l++]), e[n]);
                    return t;
                  };
            },
            function (t, e, n) {
              var r = n(35),
                i = n(19),
                a = n(30),
                o = {};
              n(16)(o, n(5)("iterator"), function () {
                return this;
              }),
                (t.exports = function (t, e, n) {
                  (t.prototype = r(o, { next: i(1, n) })),
                    a(t, e + " Iterator");
                });
            },
            function (t, e, n) {
              var r = n(37),
                i = n(36);
              t.exports = function (t) {
                return function (e, n) {
                  var a,
                    o,
                    s = String(i(e)),
                    l = r(n),
                    u = s.length;
                  return l < 0 || l >= u
                    ? t
                      ? ""
                      : void 0
                    : (a = s.charCodeAt(l)) < 55296 ||
                      a > 56319 ||
                      l + 1 === u ||
                      (o = s.charCodeAt(l + 1)) < 56320 ||
                      o > 57343
                    ? t
                      ? s.charAt(l)
                      : a
                    : t
                    ? s.slice(l, l + 2)
                    : o - 56320 + ((a - 55296) << 10) + 65536;
                };
              };
            },
            function (t, e, n) {
              n(23), n(105), (t.exports = n(2).Array.from);
            },
            function (t, e, n) {
              t.exports = { default: n(112), __esModule: !0 };
            },
            function (t, e, n) {
              var r = n(11),
                i = n(57).onFreeze;
              n(24)("freeze", function (t) {
                return function (e) {
                  return t && r(e) ? t(i(e)) : e;
                };
              });
            },
            function (t, e, n) {
              n(114), (t.exports = n(2).Object.freeze);
            },
            function (t, e) {
              t.exports = function (t) {
                if ("function" != typeof t)
                  throw TypeError(t + " is not a function!");
                return t;
              };
            },
            function (t, e, n) {
              var r = n(8);
              r(r.S + r.F * !n(10), "Object", { defineProperty: n(6).f });
            },
            function (t, e, n) {
              n(117);
              var r = n(2).Object;
              t.exports = function (t, e, n) {
                return r.defineProperty(t, e, n);
              };
            },
            ,
            function (t, e, n) {},
          ]).default;
        });
      }).call(e, n(9)(t));
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, "loaded", {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, "id", {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = n(0);
      var a = [
          null,
          0.5,
          0.6,
          0.7,
          0.8,
          0.9,
          1,
          1.2,
          1.44,
          1.728,
          2.074,
          2.488,
        ],
        o = (function () {
          function t(e) {
            var n = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              Object.keys(e).forEach(function (t) {
                n[t] = e[t];
              });
          }
          return (
            r(t, null, [
              {
                key: "defaultOptions",
                value: function (t) {
                  return {
                    __y: 0,
                    __baseSize: t.baseSize || 44,
                    __sizeIndex: t.sizeIndex || 6,
                    __family: "KaTeX_Main",
                    __variant: "normal",
                    __weight: "normal",
                    __vlist: new i.VerticalList(t.alignment || "center", 0),
                    __textAlign: null,
                    __minWidth: 0,
                    __marginRight: 0,
                    __marginLeft: 0,
                    __delimSizing: !1,
                    __classes: [],
                    __mspace: 0,
                    __pstrut: null,
                    __color: t.defaultTextColor || "black",
                  };
                },
              },
            ]),
            r(t, [
              {
                key: "withMarginLeft",
                value: function (e) {
                  var n = new t(this);
                  return (n.__marginLeft += e), n;
                },
              },
              {
                key: "withMarginRight",
                value: function (e) {
                  var n = new t(this);
                  return (n.__marginRight += e), n;
                },
              },
              {
                key: "withResetMargin",
                value: function () {
                  var e = new t(this);
                  return (e.__marginRight = 0), (e.__marginLeft = 0), e;
                },
              },
              {
                key: "withDelimSizing",
                value: function () {
                  var e = new t(this);
                  return (e.__delimSizing = !0), e;
                },
              },
              {
                key: "withColor",
                value: function (e) {
                  var n = new t(this);
                  return (n.__color = e), n;
                },
              },
              {
                key: "withYShift",
                value: function (e) {
                  var n = new t(this);
                  return (n.__y += e), n;
                },
              },
              {
                key: "withFamily",
                value: function (e) {
                  var n = new t(this);
                  return (n.__family = e), n;
                },
              },
              {
                key: "withWeight",
                value: function (e) {
                  var n = new t(this);
                  return (n.__weight = e), n;
                },
              },
              {
                key: "withVlist",
                value: function (e) {
                  var n = new t(this);
                  return (n.__vlist = e), n;
                },
              },
              {
                key: "withClass",
                value: function (e) {
                  var n = new t(this);
                  return (n.__classes = n.__classes.concat([e])), n;
                },
              },
              {
                key: "withMSpace",
                value: function (e) {
                  var n = new t(this);
                  return (n.__mspace = e), n;
                },
              },
              {
                key: "withVariant",
                value: function (e) {
                  var n = new t(this);
                  return (n.__variant = e), n;
                },
              },
              {
                key: "withSize",
                value: function (e) {
                  var n = new t(this);
                  return (n.__sizeIndex = e), n;
                },
              },
              {
                key: "withTextAlign",
                value: function (e) {
                  var n = new t(this);
                  return (n.__textAlign = e), n;
                },
              },
              {
                key: "withMinWidth",
                value: function (e) {
                  var n = new t(this);
                  return (n.__minWidth = e), n;
                },
              },
              {
                key: "withPstrut",
                value: function (e) {
                  var n = new t(this);
                  return (n.__pstrut = e), n;
                },
              },
              {
                key: "classes",
                get: function () {
                  return this.__classes;
                },
              },
              {
                key: "pstrut",
                get: function () {
                  return this.__pstrut;
                },
              },
              {
                key: "mspace",
                get: function () {
                  return this.__mspace;
                },
              },
              {
                key: "nextX",
                get: function () {
                  return this.vlist.getNextNodePlacement() + this.marginLeft;
                },
              },
              {
                key: "marginLeft",
                get: function () {
                  return this.__marginLeft;
                },
              },
              {
                key: "marginRight",
                get: function () {
                  return this.__marginRight;
                },
              },
              {
                key: "delimSizing",
                get: function () {
                  return this.__delimSizing;
                },
              },
              {
                key: "minWidth",
                get: function () {
                  return this.__minWidth;
                },
              },
              {
                key: "color",
                get: function () {
                  return this.__color;
                },
              },
              {
                key: "textAlign",
                get: function () {
                  return this.__textAlign;
                },
              },
              {
                key: "y",
                get: function () {
                  return this.__y;
                },
              },
              {
                key: "vlist",
                get: function () {
                  return this.__vlist;
                },
              },
              {
                key: "em",
                get: function () {
                  return this.__baseSize * a[this.__sizeIndex];
                },
              },
              {
                key: "font",
                get: function () {
                  var t = this.__weight ? this.__weight + " " : "";
                  return (
                    "" +
                    (this.__variant ? this.__variant + " " : "") +
                    t +
                    this.em +
                    "px " +
                    this.__family
                  );
                },
              },
            ]),
            t
          );
        })();
      e.default = o;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(2));
      var a = (function (t) {
        function e(t, n, r, i, a) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var o = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, i, a));
          return (
            (o.backgroundColor = t), (o.borderColor = n), (o.borderWidth = r), o
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "toJSON",
              value: function () {
                var t = (function t(e, n, r) {
                  null === e && (e = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(e);
                    return null === a ? void 0 : t(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                })(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "toJSON",
                  this
                ).call(this);
                return (
                  (t.backgroundColor = this.backgroundColor),
                  (t.borderColor = this.borderColor),
                  (t.borderWidth = this.borderWidth),
                  t
                );
              },
            },
            {
              key: "type",
              get: function () {
                return "BoxNode";
              },
            },
          ]),
          e
        );
      })();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(1));
      var a = document.createElement("canvas").getContext("2d"),
        o = (function (t) {
          function e(t, n, r, i) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var o = (function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, i));
            return (
              (o.text = t),
              (o.font = n),
              (o.color = r),
              (a.font = n),
              (o.bounds.width = a.measureText(t).width),
              o
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, i.default),
            r(e, [
              {
                key: "toJSON",
                value: function () {
                  var t = (function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === i) {
                      var a = Object.getPrototypeOf(e);
                      return null === a ? void 0 : t(a, n, r);
                    }
                    if ("value" in i) return i.value;
                    var o = i.get;
                    return void 0 !== o ? o.call(r) : void 0;
                  })(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "toJSON",
                    this
                  ).call(this);
                  return (
                    (t.text = this.text),
                    (t.font = this.font),
                    (t.color = this.color),
                    t
                  );
                },
              },
              {
                key: "type",
                get: function () {
                  return "TextNode";
                },
              },
            ]),
            e
          );
        })();
      e.default = o;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(2));
      var a = (function (t) {
        function e(t, n, r) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var i = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r));
          return (i.virtualHtmlNode = t), i;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "toJSON",
              value: function () {
                var t = (function t(e, n, r) {
                  null === e && (e = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(e);
                    return null === a ? void 0 : t(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                })(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "toJSON",
                  this
                ).call(this);
                return (t.virtualHtmlNode = this.virtualHtmlNode), t;
              },
            },
            {
              key: "type",
              get: function () {
                return "SvgNode";
              },
            },
            {
              key: "listWidth",
              set: function (t) {
                (this.bounds.width = t),
                  (this.virtualHtmlNode.attributes.width = t);
              },
            },
          ]),
          e
        );
      })();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = o(n(3)),
        a = o(n(2));
      function o(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var s = (function (t) {
        function e(t, n, r) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var i = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, r));
          return (
            (i.alignment = t),
            (i.rowStart = n),
            (i.strutBounds = i.bounds.clone()),
            i
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "toJSON",
              value: function () {
                var t = (function t(e, n, r) {
                  null === e && (e = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(e);
                    return null === a ? void 0 : t(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                })(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "toJSON",
                  this
                ).call(this);
                return (
                  (t.alignment = this.alignment),
                  (t.rowStart = this.rowStart),
                  t
                );
              },
            },
            {
              key: "getNextNodePlacement",
              value: function () {
                var t = void 0,
                  e = this.last();
                if (e) {
                  var n = e.last();
                  if (n) {
                    var r = n.getBounds();
                    t = r.x + r.width + n.margin.right;
                  } else t = this.rowStart + e.margin.left;
                } else t = this.rowStart + this.margin.left;
                return t;
              },
            },
            {
              key: "setStretchyWidths",
              value: function () {
                var t = this.getBounds().width;
                this.nodes.forEach(function (e) {
                  e.nodes.forEach(function (e) {
                    e instanceof a.default && (e.listWidth = t);
                  });
                });
              },
            },
            {
              key: "align",
              value: function () {
                switch (this.alignment) {
                  case "left":
                    this.leftAlign();
                    break;
                  case "center":
                    this.centerAlign();
                    break;
                  case "right":
                    this.rightAlign();
                }
              },
            },
            {
              key: "addRow",
              value: function (t) {
                this.addNode(t);
              },
            },
            {
              key: "addCell",
              value: function (t) {
                this.last().addNode(t);
              },
            },
            {
              key: "getStrutBounds",
              value: function () {
                var t = this;
                return (
                  this.nodes.forEach(function (e) {
                    e.strutBounds && t.strutBounds.extend(e.strutBounds);
                  }),
                  this.strutBounds
                );
              },
            },
            {
              key: "centerAlign",
              value: function () {
                var t = this.getBounds(),
                  e = t.x + t.width / 2;
                this.nodes.forEach(function (t) {
                  t.centerAlign(e);
                });
              },
            },
            {
              key: "rightAlign",
              value: function () {
                var t = this.getBounds(),
                  e = t.x + t.width;
                this.nodes.forEach(function (t) {
                  t.rightAlign(e);
                });
              },
            },
            {
              key: "leftAlign",
              value: function () {
                var t = this.getBounds().x;
                this.nodes.forEach(function (e) {
                  e.leftAlign(t);
                });
              },
            },
            {
              key: "type",
              get: function () {
                return "VerticalList";
              },
            },
          ]),
          e
        );
      })();
      e.default = s;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(1));
      var a = (function (t) {
        function e() {
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
            (function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
            )
          );
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "type",
              get: function () {
                return "HPaddingNode";
              },
            },
          ]),
          e
        );
      })();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(2));
      var a = (function (t) {
        function e(t, n, r) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var i = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n, r));
          return (i.color = t), i;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "toJSON",
              value: function () {
                var t = (function t(e, n, r) {
                  null === e && (e = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(e);
                    return null === a ? void 0 : t(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                })(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "toJSON",
                  this
                ).call(this);
                return (t.color = this.color), t;
              },
            },
            {
              key: "type",
              get: function () {
                return "HorizontalLineNode";
              },
            },
          ]),
          e
        );
      })();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(1));
      var a = (function (t) {
        function e(t, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var r = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, n));
          return (r.color = t), r;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "toJSON",
              value: function () {
                var t = (function t(e, n, r) {
                  null === e && (e = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(e, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(e);
                    return null === a ? void 0 : t(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var o = i.get;
                  return void 0 !== o ? o.call(r) : void 0;
                })(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "toJSON",
                  this
                ).call(this);
                return (t.color = this.color), t;
              },
            },
            {
              key: "type",
              get: function () {
                return "VerticalLineNode";
              },
            },
          ]),
          e
        );
      })();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(3));
      var a = (function (t) {
        function e() {
          var t;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          var a = (function (t, e) {
            if (!t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !e || ("object" != typeof e && "function" != typeof e)
              ? t
              : e;
          })(
            this,
            (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(
              t,
              [this].concat(r)
            )
          );
          return (a.strutBounds = null), a;
        }
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof e
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              e &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, e)
                  : (t.__proto__ = e));
          })(e, i.default),
          r(e, [
            {
              key: "addBaseStrut",
              value: function (t) {
                this.strutBounds
                  ? this.strutBounds.extend(t.getBounds())
                  : (this.strutBounds = t.getBounds().clone());
              },
            },
            {
              key: "leftAlign",
              value: function (t) {
                this.setPosition(t);
              },
            },
            {
              key: "centerAlign",
              value: function (t) {
                var e = t - this.getBounds().width / 2;
                this.setPosition(e);
              },
            },
            {
              key: "rightAlign",
              value: function (t) {
                var e = t - this.getBounds().width;
                this.setPosition(e);
              },
            },
            {
              key: "type",
              get: function () {
                return "VerticalListRow";
              },
            },
          ]),
          e
        );
      })();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = n(0);
      function a(t, e) {
        return t.delimSizing ? t.withFamily("KaTeX_Size" + e) : t.withSize(e);
      }
      function o(t, e) {
        var n = e.style.borderBottomWidth.replace("em", "") * t.em,
          r = new i.HorizontalLineNode(t.color, t.minWidth, t.classes);
        return (
          r.setPosition(t.nextX, t.y),
          r.bounds.set({ height: n }),
          r.margin.set({ left: t.marginLeft, right: t.marginRight }),
          t.vlist.addCell(r),
          t.withResetMargin()
        );
      }
      function s(t, e, n) {
        var r =
            !e.style.backgroundColor || "none" === e.style.backgroundColor
              ? null
              : e.style.backgroundColor,
          a =
            !e.style.borderColor || "default" === e.style.borderColor
              ? t.color
              : e.style.borderColor,
          o = n ? 0.04 * t.em : 1e-7,
          s = +e.style.height.replace("em", "") * t.em,
          l = 0.3 * t.em * 2;
        t.vlist.alignment = "center";
        var u = t.nextX,
          h = new i.BoxNode(r, a, o, l, t.classes);
        return (
          h.setPosition(u, t.y),
          h.bounds.set({ height: s }),
          h.margin.set({ left: t.marginLeft, right: t.marginRight }),
          t.vlist.addCell(h),
          t.withResetMargin()
        );
      }
      var l = new ((function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        return (
          r(t, [
            {
              key: "colorbox",
              value: function (t, e) {
                return s(t, e, !1);
              },
            },
            {
              key: "fbox",
              value: function (t, e) {
                return s(t, e, !0);
              },
            },
            {
              key: "fcolorbox",
              value: function (t, e) {
                return s(t, e, !0);
              },
            },
            {
              key: "vlist",
              value: function (t, e) {
                if (e.children[0].children.length) {
                  var n = new i.VerticalList(t.textAlign, t.nextX, t.classes);
                  return (
                    n.setPosition(t.nextX, t.y),
                    n.margin.set({ left: t.marginLeft, right: t.marginRight }),
                    t.withVlist(n).withResetMargin()
                  );
                }
                return t;
              },
            },
            {
              key: "pstrut",
              value: function (t, e) {
                var n = +e.style.height.replace("em", "") * t.em,
                  r = new i.VerticalListRow(t.classes);
                return (
                  t.vlist.addRow(r),
                  r.setPosition(t.nextX, t.y + n),
                  r.bounds.set({ height: n }),
                  r.margin.set({ left: t.marginLeft, right: t.marginRight }),
                  t.withPstrut(n)
                );
              },
            },
            {
              key: "base",
              value: function (t, e) {
                var n = e.height * t.em,
                  r = new i.HPaddingNode(t.classes),
                  a = e.depth * t.em;
                r.setPosition(t.nextX, t.y - n),
                  r.bounds.set({ height: n + a });
                var o = t.vlist.last();
                return (o.depth = a), o.addBaseStrut(r), t;
              },
            },
            {
              key: "newline",
              value: function (t, e) {
                var n = new i.VerticalListRow(t.classes),
                  r = t.vlist.last().strutBounds,
                  a = e.style.marginTop,
                  o = a ? +a.replace("em", "") * t.em : 0;
                t.vlist.addRow(n), n.setPosition(t.nextX, t.y);
                var s = 1.2 * t.em,
                  l = r.height,
                  u = Math.max(s, l);
                return t.withPstrut(u + o);
              },
            },
            {
              key: "root",
              value: function (t) {
                var e = t.em * (1 / 18);
                return t.withMarginRight(-10 * e).withMarginLeft(5 * e);
              },
            },
            {
              key: "arraycolsep",
              value: function (t, e) {
                var n = e.style.width.replace("em", "") * t.em,
                  r = new i.HPaddingNode(t.classes);
                return (
                  r.setPosition(t.nextX, t.y),
                  r.bounds.set({ width: n }),
                  t.vlist.addCell(r),
                  t.withResetMargin()
                );
              },
            },
            {
              key: "colAlignR",
              value: function (t) {
                return t.withTextAlign("right");
              },
            },
            {
              key: "colAlignL",
              value: function (t) {
                return t.withTextAlign("left");
              },
            },
            {
              key: "xArrow",
              value: function (t) {
                return t.withTextAlign("center");
              },
            },
            {
              key: "accent",
              value: function (t) {
                return t.withTextAlign("center");
              },
            },
            {
              key: "colAlignC",
              value: function (t) {
                return t.withTextAlign("center");
              },
            },
            {
              key: "opLimits",
              value: function (t) {
                return t.withTextAlign("center");
              },
            },
            {
              key: "mfrac",
              value: function (t) {
                return t.withTextAlign("center");
              },
            },
            {
              key: "verticalSeparator",
              value: function (t, e) {
                return (function (t, e) {
                  var n = e.style.height.replace("em", "") * t.em,
                    r = 0.05 * t.em,
                    a = e.style.verticalAlign.replace("em", "") * t.em,
                    o = t.y - a,
                    s = new i.VerticalLineNode(t.color, t.classes);
                  return (
                    s.setPosition(t.nextX, o),
                    s.bounds.set({ width: r, height: n }),
                    s.margin.set({ left: t.marginLeft, right: t.marginRight }),
                    t.vlist.addCell(s),
                    t.withResetMargin()
                  );
                })(t, e);
              },
            },
            {
              key: "hline",
              value: function (t, e) {
                return o(t, e);
              },
            },
            {
              key: "overlineLine",
              value: function (t, e) {
                return o(t, e);
              },
            },
            {
              key: "underlineLine",
              value: function (t, e) {
                return o(t, e);
              },
            },
            {
              key: "fracLine",
              value: function (t, e) {
                return o(t, e);
              },
            },
            {
              key: "svgAlign",
              value: function (t) {
                return t.withTextAlign("left");
              },
            },
            {
              key: "delimsizing",
              value: function (t) {
                return t.withDelimSizing();
              },
            },
            {
              key: "size1",
              value: function (t) {
                return a(t, 1);
              },
            },
            {
              key: "size2",
              value: function (t) {
                return a(t, 2);
              },
            },
            {
              key: "size3",
              value: function (t) {
                return a(t, 3);
              },
            },
            {
              key: "size4",
              value: function (t) {
                return a(t, 4);
              },
            },
            {
              key: "size5",
              value: function (t) {
                return a(t, 5);
              },
            },
            {
              key: "size6",
              value: function (t) {
                return a(t, 6);
              },
            },
            {
              key: "size7",
              value: function (t) {
                return a(t, 7);
              },
            },
            {
              key: "size8",
              value: function (t) {
                return a(t, 8);
              },
            },
            {
              key: "size9",
              value: function (t) {
                return a(t, 9);
              },
            },
            {
              key: "size10",
              value: function (t) {
                return a(t, 10);
              },
            },
            {
              key: "size11",
              value: function (t) {
                return a(t, 11);
              },
            },
            {
              key: "nulldelimiter",
              value: function (t) {
                var e = 0.12 * t.em,
                  n = new i.HPaddingNode(t.classes);
                return (
                  n.setPosition(t.nextX, t.y),
                  n.bounds.set({ width: e }),
                  t.vlist.addCell(n),
                  t.withResetMargin()
                );
              },
            },
            {
              key: "textbf",
              value: function (t) {
                return t.withWeight("bold");
              },
            },
            {
              key: "textit",
              value: function (t) {
                return t.withVariant("italic");
              },
            },
            {
              key: "textrm",
              value: function (t) {
                return t.withFamily("KaTeX_Main");
              },
            },
            {
              key: "textsf",
              value: function (t, e, n) {
                return t.withFamily("KaTeX_SansSerif");
              },
            },
            {
              key: "texttt",
              value: function (t) {
                return t.withFamily("KaTeX_Typewriter");
              },
            },
            {
              key: "mathit",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("italic")
                  .withFamily("KaTeX_Math");
              },
            },
            {
              key: "mspace",
              value: function (t, e) {
                if (e.style.marginRight) {
                  var n = e.style.marginRight.replace("em", "");
                  return t.withMSpace(n);
                }
                return t;
              },
            },
            {
              key: "mathbf",
              value: function (t) {
                return t
                  .withWeight("bold")
                  .withVariant("normal")
                  .withFamily("KaTeX_Main");
              },
            },
            {
              key: "mathbb",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_AMS");
              },
            },
            {
              key: "mathcal",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_Caligraphic");
              },
            },
            {
              key: "mathfrak",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_Fraktur");
              },
            },
            {
              key: "mathtt",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_Typewriter");
              },
            },
            {
              key: "mathscr",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_Script");
              },
            },
            {
              key: "mathsf",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_SansSerif");
              },
            },
            {
              key: "mathrm",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("Katex_Main");
              },
            },
            {
              key: "mainit",
              value: function (t) {
                return t.withVariant("italic").withFamily("KaTeX_Main");
              },
            },
            {
              key: "amsrm",
              value: function (t) {
                return t.withFamily("KaTeX_AMS");
              },
            },
            {
              key: "boldsymbol",
              value: function (t) {
                return t
                  .withWeight("bold")
                  .withVariant("italic")
                  .withFamily("KaTeX_Math");
              },
            },
            {
              key: "smallOp",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_Size1");
              },
            },
            {
              key: "largeOp",
              value: function (t) {
                return t
                  .withWeight("normal")
                  .withVariant("normal")
                  .withFamily("KaTeX_Size2");
              },
            },
          ]),
          t
        );
      })())();
      e.default = l;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = n(0);
      var a = new ((function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        return (
          r(t, [
            {
              key: "color",
              value: function (t, e) {
                return t.withColor(e);
              },
            },
            {
              key: "top",
              value: function (t, e, n) {
                var r = +e.replace("em", "") * t.em;
                return t.withYShift(r);
              },
            },
            {
              key: "paddingLeft",
              value: function (t, e) {
                var n = +e.replace("em", "") * t.em,
                  r = new i.HPaddingNode(t.classes);
                return (
                  r.setPosition(t.nextX, t.y),
                  r.bounds.set({ width: n }),
                  t.vlist.addCell(r),
                  t.withResetMargin()
                );
              },
            },
            {
              key: "marginLeft",
              value: function (t, e, n) {
                var r = +e.replace("em", "") * t.em;
                return t.withMarginLeft(r);
              },
            },
            {
              key: "marginRight",
              value: function (t, e) {
                var n = +e.replace("em", "") * t.em;
                return t.withMarginRight(n);
              },
            },
            {
              key: "minWidth",
              value: function (t, e) {
                var n = +e.replace("em", "") * t.em;
                return t.withMinWidth(n);
              },
            },
          ]),
          t
        );
      })())();
      e.default = a;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.convertAndGetClasses = function (t, e) {
          var n = {};
          return (
            (function t(e, n, a) {
              e instanceof i.ContainerNode
                ? e.nodes.forEach(function (e) {
                    t(e, n, a);
                  })
                : (function (t, e, n) {
                    if ("HPaddingNode" !== t.type) {
                      var i = void 0;
                      switch (t.type) {
                        case "VerticalLineNode":
                          i = (function (t, e) {
                            var n = t.getBounds(),
                              r = n.x,
                              i = n.y,
                              a = n.width,
                              o = n.height,
                              s = new createjs.Shape();
                            return (
                              s.graphics
                                .beginFill(t.color)
                                .drawRect(0, -o, a, o),
                              s.setBounds(0, 0, a, o),
                              s.set({ x: r, y: i }),
                              s
                            );
                          })(t);
                          break;
                        case "TextNode":
                          i = (function (t, e) {
                            var n = t.getBounds(),
                              r = n.x,
                              i = n.y,
                              a = new createjs.Text(t.text, t.font, t.color);
                            return (
                              a.set({ x: r, y: i, textBaseline: "alphabetic" }),
                              a
                            );
                          })(t);
                          break;
                        case "SvgNode":
                          i = (function (t) {
                            var e = t.getBounds(),
                              n = e.x,
                              i = e.y,
                              a = e.width,
                              o = e.height,
                              s = new createjs.Shape(),
                              l = {
                                ignoreDimensions: !0,
                                ignoreClear: !0,
                                ignoreMouse: !0,
                              };
                            return (
                              s.graphics.append({
                                exec: function (e) {
                                  (0, r.default)(
                                    e.canvas,
                                    t.virtualHtmlNode.toMarkup(),
                                    l
                                  );
                                },
                              }),
                              s.setBounds(0, 0, a, o),
                              s.cache(0, 0, a, o, window.devicePixelRatio),
                              s.set({ x: n, y: i - o }),
                              s
                            );
                          })(t);
                          break;
                        case "HorizontalLineNode":
                          i = (function (t) {
                            var e = t.getBounds(),
                              n = e.width,
                              r = e.height,
                              i = e.x,
                              a = e.y,
                              o = new createjs.Shape();
                            return (
                              o.graphics
                                .beginFill(t.color)
                                .drawRect(0, -r, n, r),
                              o.setBounds(0, 0, n, r),
                              o.set({ x: i, y: a }),
                              o
                            );
                          })(t);
                          break;
                        case "BoxNode":
                          i = (function (t) {
                            var e = t.getBounds(),
                              n = e.x,
                              r = e.y,
                              i = e.width,
                              a = e.height,
                              o = new createjs.Shape(),
                              s = t.backgroundColor,
                              l = t.borderColor,
                              u = t.borderWidth;
                            return (
                              o.graphics
                                .beginStroke(l)
                                .beginFill(s)
                                .setStrokeStyle(u)
                                .drawRect(0, -a, i, a),
                              o.setBounds(0, 0, i, a),
                              o.set({ x: n, y: r }),
                              o
                            );
                          })(t);
                          break;
                        default:
                          throw new Error(
                            "Node " + t.type + " is not a renderable node."
                          );
                      }
                      e.addChild(i),
                        (function (t, e, n) {
                          t.classes.forEach(function (t) {
                            n[t.name] || (n[t.name] = []),
                              n[t.name][t.index] || (n[t.name][t.index] = []),
                              n[t.name][t.index].push(e);
                          });
                        })(t, i, n);
                    }
                  })(e, n, a);
            })(t, e, n),
            n
          );
        });
      var r = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(22)),
        i = n(0);
    },
    function (t, e, n) {
      "use strict";
      var r = n(23),
        i = n(24);
      n(25);
      function a(t, e, n) {
        if (null != t || null != e || null != n) {
          "string" == typeof t && (t = document.getElementById(t)),
            null != t.svg && t.svg.stop();
          var s = (function (t) {
            var e = { opts: t },
              n = (function () {
                var t;
                void 0 !== Element.prototype.matches
                  ? (t = function (t, e) {
                      return t.matches(e);
                    })
                  : void 0 !== Element.prototype.webkitMatchesSelector
                  ? (t = function (t, e) {
                      return t.webkitMatchesSelector(e);
                    })
                  : void 0 !== Element.prototype.mozMatchesSelector
                  ? (t = function (t, e) {
                      return t.mozMatchesSelector(e);
                    })
                  : void 0 !== Element.prototype.msMatchesSelector
                  ? (t = function (t, e) {
                      return t.msMatchesSelector(e);
                    })
                  : void 0 !== Element.prototype.oMatchesSelector
                  ? (t = function (t, e) {
                      return t.oMatchesSelector(e);
                    })
                  : (("function" != typeof jQuery &&
                      "function" != typeof Zepto) ||
                      (t = function (t, e) {
                        return $(t).is(e);
                      }),
                    void 0 === t && (t = Sizzle.matchesSelector));
                return t;
              })();
            "undefined" != typeof CanvasRenderingContext2D &&
              (CanvasRenderingContext2D.prototype.drawSvg = function (
                t,
                e,
                n,
                r,
                i,
                o
              ) {
                var s = {
                  ignoreMouse: !0,
                  ignoreAnimation: !0,
                  ignoreDimensions: !0,
                  ignoreClear: !0,
                  offsetX: e,
                  offsetY: n,
                  scaleWidth: r,
                  scaleHeight: i,
                };
                for (var l in o) o.hasOwnProperty(l) && (s[l] = o[l]);
                a(this.canvas, t, s);
              });
            (e.FRAMERATE = 30),
              (e.MAX_VIRTUAL_PIXELS = 3e4),
              (e.log = function (t) {}),
              1 == e.opts.log &&
                "undefined" != typeof console &&
                (e.log = function (t) {
                  console.log(t);
                });
            (e.init = function (t) {
              var n = 0;
              (e.UniqueId = function () {
                return "canvg" + ++n;
              }),
                (e.Definitions = {}),
                (e.Styles = {}),
                (e.StylesSpecificity = {}),
                (e.Animations = []),
                (e.Images = []),
                (e.ctx = t),
                (e.ViewPort = new (function () {
                  (this.viewPorts = []),
                    (this.Clear = function () {
                      this.viewPorts = [];
                    }),
                    (this.SetCurrent = function (t, e) {
                      this.viewPorts.push({ width: t, height: e });
                    }),
                    (this.RemoveCurrent = function () {
                      this.viewPorts.pop();
                    }),
                    (this.Current = function () {
                      return this.viewPorts[this.viewPorts.length - 1];
                    }),
                    (this.width = function () {
                      return this.Current().width;
                    }),
                    (this.height = function () {
                      return this.Current().height;
                    }),
                    (this.ComputeSize = function (t) {
                      return null != t && "number" == typeof t
                        ? t
                        : "x" == t
                        ? this.width()
                        : "y" == t
                        ? this.height()
                        : Math.sqrt(
                            Math.pow(this.width(), 2) +
                              Math.pow(this.height(), 2)
                          ) / Math.sqrt(2);
                    });
                })());
            }),
              e.init(),
              (e.ImagesLoaded = function () {
                for (var t = 0; t < e.Images.length; t++)
                  if (!e.Images[t].loaded) return !1;
                return !0;
              }),
              (e.trim = function (t) {
                return t.replace(/^\s+|\s+$/g, "");
              }),
              (e.compressSpaces = function (t) {
                return t.replace(/[\s\r\t\n]+/gm, " ");
              }),
              (e.ajax = function (t) {
                var e;
                return (e = window.XMLHttpRequest
                  ? new XMLHttpRequest()
                  : new ActiveXObject("Microsoft.XMLHTTP"))
                  ? (e.open("GET", t, !1), e.send(null), e.responseText)
                  : null;
              }),
              (e.parseXml = function (t) {
                if (
                  "undefined" != typeof Windows &&
                  void 0 !== Windows.Data &&
                  void 0 !== Windows.Data.Xml
                ) {
                  var e = new Windows.Data.Xml.Dom.XmlDocument(),
                    n = new Windows.Data.Xml.Dom.XmlLoadSettings();
                  return (n.prohibitDtd = !1), e.loadXml(t, n), e;
                }
                if (window.DOMParser) {
                  var r = new DOMParser();
                  return r.parseFromString(t, "text/xml");
                }
                t = t.replace(/<!DOCTYPE svg[^>]*>/, "");
                var e = new ActiveXObject("Microsoft.XMLDOM");
                return (e.async = "false"), e.loadXML(t), e;
              }),
              (e.Property = function (t, e) {
                (this.name = t), (this.value = e);
              }),
              (e.Property.prototype.getValue = function () {
                return this.value;
              }),
              (e.Property.prototype.hasValue = function () {
                return null != this.value && "" != this.value;
              }),
              (e.Property.prototype.numValue = function () {
                if (!this.hasValue()) return 0;
                var t = parseFloat(this.value);
                return (this.value + "").match(/%$/) && (t /= 100), t;
              }),
              (e.Property.prototype.valueOrDefault = function (t) {
                return this.hasValue() ? this.value : t;
              }),
              (e.Property.prototype.numValueOrDefault = function (t) {
                return this.hasValue() ? this.numValue() : t;
              }),
              (e.Property.prototype.addOpacity = function (t) {
                var n = this.value;
                if (
                  null != t.value &&
                  "" != t.value &&
                  "string" == typeof this.value
                ) {
                  var i = new r(this.value);
                  i.ok &&
                    (n =
                      "rgba(" +
                      i.r +
                      ", " +
                      i.g +
                      ", " +
                      i.b +
                      ", " +
                      t.numValue() +
                      ")");
                }
                return new e.Property(this.name, n);
              }),
              (e.Property.prototype.getDefinition = function () {
                var t = this.value.match(/#([^\)'"]+)/);
                return t && (t = t[1]), t || (t = this.value), e.Definitions[t];
              }),
              (e.Property.prototype.isUrlDefinition = function () {
                return 0 == this.value.indexOf("url(");
              }),
              (e.Property.prototype.getFillStyleDefinition = function (t, n) {
                var r = this.getDefinition();
                if (null != r && r.createGradient)
                  return r.createGradient(e.ctx, t, n);
                if (null != r && r.createPattern) {
                  if (r.getHrefAttribute().hasValue()) {
                    var i = r.attribute("patternTransform");
                    (r = r.getHrefAttribute().getDefinition()),
                      i.hasValue() &&
                        (r.attribute("patternTransform", !0).value = i.value);
                  }
                  return r.createPattern(e.ctx, t);
                }
                return null;
              }),
              (e.Property.prototype.getDPI = function (t) {
                return 96;
              }),
              (e.Property.prototype.getEM = function (t) {
                var n = 12,
                  r = new e.Property(
                    "fontSize",
                    e.Font.Parse(e.ctx.font).fontSize
                  );
                return r.hasValue() && (n = r.toPixels(t)), n;
              }),
              (e.Property.prototype.getUnits = function () {
                var t = this.value + "";
                return t.replace(/[0-9\.\-]/g, "");
              }),
              (e.Property.prototype.toPixels = function (t, n) {
                if (!this.hasValue()) return 0;
                var r = this.value + "";
                if (r.match(/em$/)) return this.numValue() * this.getEM(t);
                if (r.match(/ex$/))
                  return (this.numValue() * this.getEM(t)) / 2;
                if (r.match(/px$/)) return this.numValue();
                if (r.match(/pt$/))
                  return this.numValue() * this.getDPI(t) * (1 / 72);
                if (r.match(/pc$/)) return 15 * this.numValue();
                if (r.match(/cm$/))
                  return (this.numValue() * this.getDPI(t)) / 2.54;
                if (r.match(/mm$/))
                  return (this.numValue() * this.getDPI(t)) / 25.4;
                if (r.match(/in$/)) return this.numValue() * this.getDPI(t);
                if (r.match(/%$/))
                  return this.numValue() * e.ViewPort.ComputeSize(t);
                var i = this.numValue();
                return n && i < 1 ? i * e.ViewPort.ComputeSize(t) : i;
              }),
              (e.Property.prototype.toMilliseconds = function () {
                if (!this.hasValue()) return 0;
                var t = this.value + "";
                return t.match(/s$/)
                  ? 1e3 * this.numValue()
                  : (t.match(/ms$/), this.numValue());
              }),
              (e.Property.prototype.toRadians = function () {
                if (!this.hasValue()) return 0;
                var t = this.value + "";
                return t.match(/deg$/)
                  ? this.numValue() * (Math.PI / 180)
                  : t.match(/grad$/)
                  ? this.numValue() * (Math.PI / 200)
                  : t.match(/rad$/)
                  ? this.numValue()
                  : this.numValue() * (Math.PI / 180);
              });
            var s = {
              baseline: "alphabetic",
              "before-edge": "top",
              "text-before-edge": "top",
              middle: "middle",
              central: "middle",
              "after-edge": "bottom",
              "text-after-edge": "bottom",
              ideographic: "ideographic",
              alphabetic: "alphabetic",
              hanging: "hanging",
              mathematical: "alphabetic",
            };
            return (
              (e.Property.prototype.toTextBaseline = function () {
                return this.hasValue() ? s[this.value] : null;
              }),
              (e.Font = new (function () {
                (this.Styles = "normal|italic|oblique|inherit"),
                  (this.Variants = "normal|small-caps|inherit"),
                  (this.Weights =
                    "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit"),
                  (this.CreateFont = function (t, n, r, i, a, o) {
                    var s =
                      null != o
                        ? this.Parse(o)
                        : this.CreateFont("", "", "", "", "", e.ctx.font);
                    return {
                      fontFamily: a || s.fontFamily,
                      fontSize: i || s.fontSize,
                      fontStyle: t || s.fontStyle,
                      fontWeight: r || s.fontWeight,
                      fontVariant: n || s.fontVariant,
                      toString: function () {
                        return [
                          this.fontStyle,
                          this.fontVariant,
                          this.fontWeight,
                          this.fontSize,
                          this.fontFamily,
                        ].join(" ");
                      },
                    };
                  });
                var t = this;
                this.Parse = function (n) {
                  for (
                    var r = {},
                      i = e.trim(e.compressSpaces(n || "")).split(" "),
                      a = {
                        fontSize: !1,
                        fontStyle: !1,
                        fontWeight: !1,
                        fontVariant: !1,
                      },
                      o = "",
                      s = 0;
                    s < i.length;
                    s++
                  )
                    a.fontStyle || -1 == t.Styles.indexOf(i[s])
                      ? a.fontVariant || -1 == t.Variants.indexOf(i[s])
                        ? a.fontWeight || -1 == t.Weights.indexOf(i[s])
                          ? a.fontSize
                            ? "inherit" != i[s] && (o += i[s])
                            : ("inherit" != i[s] &&
                                (r.fontSize = i[s].split("/")[0]),
                              (a.fontStyle =
                                a.fontVariant =
                                a.fontWeight =
                                a.fontSize =
                                  !0))
                          : ("inherit" != i[s] && (r.fontWeight = i[s]),
                            (a.fontStyle = a.fontVariant = a.fontWeight = !0))
                        : ("inherit" != i[s] && (r.fontVariant = i[s]),
                          (a.fontStyle = a.fontVariant = !0))
                      : ("inherit" != i[s] && (r.fontStyle = i[s]),
                        (a.fontStyle = !0));
                  return "" != o && (r.fontFamily = o), r;
                };
              })()),
              (e.ToNumberArray = function (t) {
                for (
                  var n = e
                      .trim(e.compressSpaces((t || "").replace(/,/g, " ")))
                      .split(" "),
                    r = 0;
                  r < n.length;
                  r++
                )
                  n[r] = parseFloat(n[r]);
                return n;
              }),
              (e.Point = function (t, e) {
                (this.x = t), (this.y = e);
              }),
              (e.Point.prototype.angleTo = function (t) {
                return Math.atan2(t.y - this.y, t.x - this.x);
              }),
              (e.Point.prototype.applyTransform = function (t) {
                var e = this.x * t[0] + this.y * t[2] + t[4],
                  n = this.x * t[1] + this.y * t[3] + t[5];
                (this.x = e), (this.y = n);
              }),
              (e.CreatePoint = function (t) {
                var n = e.ToNumberArray(t);
                return new e.Point(n[0], n[1]);
              }),
              (e.CreatePath = function (t) {
                for (
                  var n = e.ToNumberArray(t), r = [], i = 0;
                  i < n.length;
                  i += 2
                )
                  r.push(new e.Point(n[i], n[i + 1]));
                return r;
              }),
              (e.BoundingBox = function (t, e, n, r) {
                (this.x1 = Number.NaN),
                  (this.y1 = Number.NaN),
                  (this.x2 = Number.NaN),
                  (this.y2 = Number.NaN),
                  (this.x = function () {
                    return this.x1;
                  }),
                  (this.y = function () {
                    return this.y1;
                  }),
                  (this.width = function () {
                    return this.x2 - this.x1;
                  }),
                  (this.height = function () {
                    return this.y2 - this.y1;
                  }),
                  (this.addPoint = function (t, e) {
                    null != t &&
                      ((isNaN(this.x1) || isNaN(this.x2)) &&
                        ((this.x1 = t), (this.x2 = t)),
                      t < this.x1 && (this.x1 = t),
                      t > this.x2 && (this.x2 = t)),
                      null != e &&
                        ((isNaN(this.y1) || isNaN(this.y2)) &&
                          ((this.y1 = e), (this.y2 = e)),
                        e < this.y1 && (this.y1 = e),
                        e > this.y2 && (this.y2 = e));
                  }),
                  (this.addX = function (t) {
                    this.addPoint(t, null);
                  }),
                  (this.addY = function (t) {
                    this.addPoint(null, t);
                  }),
                  (this.addBoundingBox = function (t) {
                    this.addPoint(t.x1, t.y1), this.addPoint(t.x2, t.y2);
                  }),
                  (this.addQuadraticCurve = function (t, e, n, r, i, a) {
                    var o = t + (2 / 3) * (n - t),
                      s = e + (2 / 3) * (r - e),
                      l = o + (1 / 3) * (i - t),
                      u = s + (1 / 3) * (a - e);
                    this.addBezierCurve(t, e, o, l, s, u, i, a);
                  }),
                  (this.addBezierCurve = function (t, e, n, r, i, a, o, s) {
                    var l = [t, e],
                      u = [n, r],
                      h = [i, a],
                      c = [o, s];
                    this.addPoint(l[0], l[1]), this.addPoint(c[0], c[1]);
                    for (var f = 0; f <= 1; f++) {
                      var m = function (t) {
                          return (
                            Math.pow(1 - t, 3) * l[f] +
                            3 * Math.pow(1 - t, 2) * t * u[f] +
                            3 * (1 - t) * Math.pow(t, 2) * h[f] +
                            Math.pow(t, 3) * c[f]
                          );
                        },
                        d = 6 * l[f] - 12 * u[f] + 6 * h[f],
                        p = -3 * l[f] + 9 * u[f] - 9 * h[f] + 3 * c[f],
                        v = 3 * u[f] - 3 * l[f];
                      if (0 != p) {
                        var g = Math.pow(d, 2) - 4 * v * p;
                        if (!(g < 0)) {
                          var y = (-d + Math.sqrt(g)) / (2 * p);
                          0 < y &&
                            y < 1 &&
                            (0 == f && this.addX(m(y)),
                            1 == f && this.addY(m(y)));
                          var b = (-d - Math.sqrt(g)) / (2 * p);
                          0 < b &&
                            b < 1 &&
                            (0 == f && this.addX(m(b)),
                            1 == f && this.addY(m(b)));
                        }
                      } else {
                        if (0 == d) continue;
                        var x = -v / d;
                        0 < x &&
                          x < 1 &&
                          (0 == f && this.addX(m(x)),
                          1 == f && this.addY(m(x)));
                      }
                    }
                  }),
                  (this.isPointInBox = function (t, e) {
                    return (
                      this.x1 <= t &&
                      t <= this.x2 &&
                      this.y1 <= e &&
                      e <= this.y2
                    );
                  }),
                  this.addPoint(t, e),
                  this.addPoint(n, r);
              }),
              (e.Transform = function (t) {
                var n = this;
                (this.Type = {}),
                  (this.Type.translate = function (t) {
                    (this.p = e.CreatePoint(t)),
                      (this.apply = function (t) {
                        t.translate(this.p.x || 0, this.p.y || 0);
                      }),
                      (this.unapply = function (t) {
                        t.translate(-1 * this.p.x || 0, -1 * this.p.y || 0);
                      }),
                      (this.applyToPoint = function (t) {
                        t.applyTransform([
                          1,
                          0,
                          0,
                          1,
                          this.p.x || 0,
                          this.p.y || 0,
                        ]);
                      });
                  }),
                  (this.Type.rotate = function (t) {
                    var n = e.ToNumberArray(t);
                    (this.angle = new e.Property("angle", n[0])),
                      (this.cx = n[1] || 0),
                      (this.cy = n[2] || 0),
                      (this.apply = function (t) {
                        t.translate(this.cx, this.cy),
                          t.rotate(this.angle.toRadians()),
                          t.translate(-this.cx, -this.cy);
                      }),
                      (this.unapply = function (t) {
                        t.translate(this.cx, this.cy),
                          t.rotate(-1 * this.angle.toRadians()),
                          t.translate(-this.cx, -this.cy);
                      }),
                      (this.applyToPoint = function (t) {
                        var e = this.angle.toRadians();
                        t.applyTransform([
                          1,
                          0,
                          0,
                          1,
                          this.p.x || 0,
                          this.p.y || 0,
                        ]),
                          t.applyTransform([
                            Math.cos(e),
                            Math.sin(e),
                            -Math.sin(e),
                            Math.cos(e),
                            0,
                            0,
                          ]),
                          t.applyTransform([
                            1,
                            0,
                            0,
                            1,
                            -this.p.x || 0,
                            -this.p.y || 0,
                          ]);
                      });
                  }),
                  (this.Type.scale = function (t) {
                    (this.p = e.CreatePoint(t)),
                      (this.apply = function (t) {
                        t.scale(this.p.x || 1, this.p.y || this.p.x || 1);
                      }),
                      (this.unapply = function (t) {
                        t.scale(
                          1 / this.p.x || 1,
                          1 / this.p.y || this.p.x || 1
                        );
                      }),
                      (this.applyToPoint = function (t) {
                        t.applyTransform([
                          this.p.x || 0,
                          0,
                          0,
                          this.p.y || 0,
                          0,
                          0,
                        ]);
                      });
                  }),
                  (this.Type.matrix = function (t) {
                    (this.m = e.ToNumberArray(t)),
                      (this.apply = function (t) {
                        t.transform(
                          this.m[0],
                          this.m[1],
                          this.m[2],
                          this.m[3],
                          this.m[4],
                          this.m[5]
                        );
                      }),
                      (this.unapply = function (t) {
                        var e = this.m[0],
                          n = this.m[2],
                          r = this.m[4],
                          i = this.m[1],
                          a = this.m[3],
                          o = this.m[5],
                          s =
                            1 /
                            (e * (1 * a - 0 * o) -
                              n * (1 * i - 0 * o) +
                              r * (0 * i - 0 * a));
                        t.transform(
                          s * (1 * a - 0 * o),
                          s * (0 * o - 1 * i),
                          s * (0 * r - 1 * n),
                          s * (1 * e - 0 * r),
                          s * (n * o - r * a),
                          s * (r * i - e * o)
                        );
                      }),
                      (this.applyToPoint = function (t) {
                        t.applyTransform(this.m);
                      });
                  }),
                  (this.Type.SkewBase = function (t) {
                    (this.base = n.Type.matrix),
                      this.base(t),
                      (this.angle = new e.Property("angle", t));
                  }),
                  (this.Type.SkewBase.prototype = new this.Type.matrix()),
                  (this.Type.skewX = function (t) {
                    (this.base = n.Type.SkewBase),
                      this.base(t),
                      (this.m = [
                        1,
                        0,
                        Math.tan(this.angle.toRadians()),
                        1,
                        0,
                        0,
                      ]);
                  }),
                  (this.Type.skewX.prototype = new this.Type.SkewBase()),
                  (this.Type.skewY = function (t) {
                    (this.base = n.Type.SkewBase),
                      this.base(t),
                      (this.m = [
                        1,
                        Math.tan(this.angle.toRadians()),
                        0,
                        1,
                        0,
                        0,
                      ]);
                  }),
                  (this.Type.skewY.prototype = new this.Type.SkewBase()),
                  (this.transforms = []),
                  (this.apply = function (t) {
                    for (var e = 0; e < this.transforms.length; e++)
                      this.transforms[e].apply(t);
                  }),
                  (this.unapply = function (t) {
                    for (var e = this.transforms.length - 1; e >= 0; e--)
                      this.transforms[e].unapply(t);
                  }),
                  (this.applyToPoint = function (t) {
                    for (var e = 0; e < this.transforms.length; e++)
                      this.transforms[e].applyToPoint(t);
                  });
                for (
                  var r = e
                      .trim(e.compressSpaces(t))
                      .replace(/\)([a-zA-Z])/g, ") $1")
                      .replace(/\)(\s?,\s?)/g, ") ")
                      .split(/\s(?=[a-z])/),
                    i = 0;
                  i < r.length;
                  i++
                ) {
                  var a = e.trim(r[i].split("(")[0]),
                    o = r[i].split("(")[1].replace(")", ""),
                    s = this.Type[a];
                  if (void 0 !== s) {
                    var l = new s(o);
                    (l.type = a), this.transforms.push(l);
                  }
                }
              }),
              (e.AspectRatio = function (t, n, r, i, a, o, s, l, u, h) {
                var c =
                    (n = (n = e.compressSpaces(n)).replace(
                      /^defer\s/,
                      ""
                    )).split(" ")[0] || "xMidYMid",
                  f = n.split(" ")[1] || "meet",
                  m = r / i,
                  d = a / o,
                  p = Math.min(m, d),
                  v = Math.max(m, d);
                "meet" == f && ((i *= p), (o *= p)),
                  "slice" == f && ((i *= v), (o *= v)),
                  (u = new e.Property("refX", u)),
                  (h = new e.Property("refY", h)),
                  u.hasValue() && h.hasValue()
                    ? t.translate(-p * u.toPixels("x"), -p * h.toPixels("y"))
                    : (c.match(/^xMid/) &&
                        (("meet" == f && p == d) || ("slice" == f && v == d)) &&
                        t.translate(r / 2 - i / 2, 0),
                      c.match(/YMid$/) &&
                        (("meet" == f && p == m) || ("slice" == f && v == m)) &&
                        t.translate(0, a / 2 - o / 2),
                      c.match(/^xMax/) &&
                        (("meet" == f && p == d) || ("slice" == f && v == d)) &&
                        t.translate(r - i, 0),
                      c.match(/YMax$/) &&
                        (("meet" == f && p == m) || ("slice" == f && v == m)) &&
                        t.translate(0, a - o)),
                  "none" == c
                    ? t.scale(m, d)
                    : "meet" == f
                    ? t.scale(p, p)
                    : "slice" == f && t.scale(v, v),
                  t.translate(null == s ? 0 : -s, null == l ? 0 : -l);
              }),
              (e.Element = {}),
              (e.EmptyProperty = new e.Property("EMPTY", "")),
              (e.Element.ElementBase = function (t) {
                if (
                  ((this.attributes = {}),
                  (this.styles = {}),
                  (this.stylesSpecificity = {}),
                  (this.children = []),
                  (this.attribute = function (t, n) {
                    var r = this.attributes[t];
                    return null != r
                      ? r
                      : (1 == n &&
                          ((r = new e.Property(t, "")),
                          (this.attributes[t] = r)),
                        r || e.EmptyProperty);
                  }),
                  (this.getHrefAttribute = function () {
                    for (var t in this.attributes)
                      if ("href" == t || t.match(/:href$/))
                        return this.attributes[t];
                    return e.EmptyProperty;
                  }),
                  (this.style = function (t, n, r) {
                    var i = this.styles[t];
                    if (null != i) return i;
                    var a = this.attribute(t);
                    if (null != a && a.hasValue())
                      return (this.styles[t] = a), a;
                    if (1 != r) {
                      var o = this.parent;
                      if (null != o) {
                        var s = o.style(t);
                        if (null != s && s.hasValue()) return s;
                      }
                    }
                    return (
                      1 == n &&
                        ((i = new e.Property(t, "")), (this.styles[t] = i)),
                      i || e.EmptyProperty
                    );
                  }),
                  (this.render = function (t) {
                    if (
                      "none" != this.style("display").value &&
                      "hidden" != this.style("visibility").value
                    ) {
                      if ((t.save(), this.style("mask").hasValue())) {
                        var e = this.style("mask").getDefinition();
                        null != e && e.apply(t, this);
                      } else if (this.style("filter").hasValue()) {
                        var n = this.style("filter").getDefinition();
                        null != n && n.apply(t, this);
                      } else
                        this.setContext(t),
                          this.renderChildren(t),
                          this.clearContext(t);
                      t.restore();
                    }
                  }),
                  (this.setContext = function (t) {}),
                  (this.clearContext = function (t) {}),
                  (this.renderChildren = function (t) {
                    for (var e = 0; e < this.children.length; e++)
                      this.children[e].render(t);
                  }),
                  (this.addChild = function (t, n) {
                    var r = t;
                    n && (r = e.CreateElement(t)),
                      (r.parent = this),
                      "title" != r.type && this.children.push(r);
                  }),
                  (this.addStylesFromStyleDefinition = function () {
                    for (var r in e.Styles)
                      if ("@" != r[0] && n(t, r)) {
                        var i = e.Styles[r],
                          a = e.StylesSpecificity[r];
                        if (null != i)
                          for (var o in i) {
                            var s = this.stylesSpecificity[o];
                            void 0 === s && (s = "000"),
                              a > s &&
                                ((this.styles[o] = i[o]),
                                (this.stylesSpecificity[o] = a));
                          }
                      }
                  }),
                  null != t && 1 == t.nodeType)
                ) {
                  for (var r = 0; r < t.attributes.length; r++) {
                    var i = t.attributes[r];
                    this.attributes[i.nodeName] = new e.Property(
                      i.nodeName,
                      i.value
                    );
                  }
                  if (
                    (this.addStylesFromStyleDefinition(),
                    this.attribute("style").hasValue())
                  ) {
                    var a = this.attribute("style").value.split(";");
                    for (r = 0; r < a.length; r++)
                      if ("" != e.trim(a[r])) {
                        var o = a[r].split(":"),
                          s = e.trim(o[0]),
                          l = e.trim(o[1]);
                        this.styles[s] = new e.Property(s, l);
                      }
                  }
                  for (
                    this.attribute("id").hasValue() &&
                      null == e.Definitions[this.attribute("id").value] &&
                      (e.Definitions[this.attribute("id").value] = this),
                      r = 0;
                    r < t.childNodes.length;
                    r++
                  ) {
                    var u = t.childNodes[r];
                    if (
                      (1 == u.nodeType && this.addChild(u, !0),
                      this.captureTextNodes &&
                        (3 == u.nodeType || 4 == u.nodeType))
                    ) {
                      var h = u.value || u.text || u.textContent || "";
                      "" != e.compressSpaces(h) &&
                        this.addChild(new e.Element.tspan(u), !1);
                    }
                  }
                }
              }),
              (e.Element.RenderedElementBase = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.setContext = function (t) {
                    var n;
                    if (this.style("fill").isUrlDefinition())
                      null !=
                        (n = this.style("fill").getFillStyleDefinition(
                          this,
                          this.style("fill-opacity")
                        )) && (t.fillStyle = n);
                    else if (this.style("fill").hasValue()) {
                      var r;
                      "currentColor" == (r = this.style("fill")).value &&
                        (r.value = this.style("color").value),
                        "inherit" != r.value &&
                          (t.fillStyle =
                            "none" == r.value ? "rgba(0,0,0,0)" : r.value);
                    }
                    if (
                      (this.style("fill-opacity").hasValue() &&
                        ((r = (r = new e.Property(
                          "fill",
                          t.fillStyle
                        )).addOpacity(this.style("fill-opacity"))),
                        (t.fillStyle = r.value)),
                      this.style("stroke").isUrlDefinition())
                    )
                      null !=
                        (n = this.style("stroke").getFillStyleDefinition(
                          this,
                          this.style("stroke-opacity")
                        )) && (t.strokeStyle = n);
                    else if (this.style("stroke").hasValue()) {
                      var i;
                      "currentColor" == (i = this.style("stroke")).value &&
                        (i.value = this.style("color").value),
                        "inherit" != i.value &&
                          (t.strokeStyle =
                            "none" == i.value ? "rgba(0,0,0,0)" : i.value);
                    }
                    if (
                      (this.style("stroke-opacity").hasValue() &&
                        ((i = (i = new e.Property(
                          "stroke",
                          t.strokeStyle
                        )).addOpacity(this.style("stroke-opacity"))),
                        (t.strokeStyle = i.value)),
                      this.style("stroke-width").hasValue())
                    ) {
                      var a = this.style("stroke-width").toPixels();
                      t.lineWidth = 0 == a ? 0.001 : a;
                    }
                    if (
                      (this.style("stroke-linecap").hasValue() &&
                        (t.lineCap = this.style("stroke-linecap").value),
                      this.style("stroke-linejoin").hasValue() &&
                        (t.lineJoin = this.style("stroke-linejoin").value),
                      this.style("stroke-miterlimit").hasValue() &&
                        (t.miterLimit = this.style("stroke-miterlimit").value),
                      this.style("stroke-dasharray").hasValue() &&
                        "none" != this.style("stroke-dasharray").value)
                    ) {
                      var o = e.ToNumberArray(
                        this.style("stroke-dasharray").value
                      );
                      void 0 !== t.setLineDash
                        ? t.setLineDash(o)
                        : void 0 !== t.webkitLineDash
                        ? (t.webkitLineDash = o)
                        : void 0 === t.mozDash ||
                          (1 == o.length && 0 == o[0]) ||
                          (t.mozDash = o);
                      var s =
                        this.style("stroke-dashoffset").numValueOrDefault(1);
                      void 0 !== t.lineDashOffset
                        ? (t.lineDashOffset = s)
                        : void 0 !== t.webkitLineDashOffset
                        ? (t.webkitLineDashOffset = s)
                        : void 0 !== t.mozDashOffset && (t.mozDashOffset = s);
                    }
                    if (
                      (void 0 !== t.font &&
                        (t.font = e.Font.CreateFont(
                          this.style("font-style").value,
                          this.style("font-variant").value,
                          this.style("font-weight").value,
                          this.style("font-size").hasValue()
                            ? this.style("font-size").toPixels() + "px"
                            : "",
                          this.style("font-family").value
                        ).toString()),
                      this.style("transform", !1, !0).hasValue() &&
                        new e.Transform(
                          this.style("transform", !1, !0).value
                        ).apply(t),
                      this.style("clip-path", !1, !0).hasValue())
                    ) {
                      var l = this.style("clip-path", !1, !0).getDefinition();
                      null != l && l.apply(t);
                    }
                    this.style("opacity").hasValue() &&
                      (t.globalAlpha = this.style("opacity").numValue());
                  });
              }),
              (e.Element.RenderedElementBase.prototype =
                new e.Element.ElementBase()),
              (e.Element.PathElementBase = function (t) {
                (this.base = e.Element.RenderedElementBase),
                  this.base(t),
                  (this.path = function (t) {
                    return null != t && t.beginPath(), new e.BoundingBox();
                  }),
                  (this.renderChildren = function (t) {
                    this.path(t),
                      e.Mouse.checkPath(this, t),
                      "" != t.fillStyle &&
                        ("inherit" !=
                        this.style("fill-rule").valueOrDefault("inherit")
                          ? t.fill(this.style("fill-rule").value)
                          : t.fill()),
                      "" != t.strokeStyle && t.stroke();
                    var n = this.getMarkers();
                    if (null != n) {
                      if (
                        (this.style("marker-start").isUrlDefinition() &&
                          (r =
                            this.style("marker-start").getDefinition()).render(
                            t,
                            n[0][0],
                            n[0][1]
                          ),
                        this.style("marker-mid").isUrlDefinition())
                      )
                        for (
                          var r = this.style("marker-mid").getDefinition(),
                            i = 1;
                          i < n.length - 1;
                          i++
                        )
                          r.render(t, n[i][0], n[i][1]);
                      this.style("marker-end").isUrlDefinition() &&
                        (r = this.style("marker-end").getDefinition()).render(
                          t,
                          n[n.length - 1][0],
                          n[n.length - 1][1]
                        );
                    }
                  }),
                  (this.getBoundingBox = function () {
                    return this.path();
                  }),
                  (this.getMarkers = function () {
                    return null;
                  });
              }),
              (e.Element.PathElementBase.prototype =
                new e.Element.RenderedElementBase()),
              (e.Element.svg = function (t) {
                (this.base = e.Element.RenderedElementBase),
                  this.base(t),
                  (this.baseClearContext = this.clearContext),
                  (this.clearContext = function (t) {
                    this.baseClearContext(t), e.ViewPort.RemoveCurrent();
                  }),
                  (this.baseSetContext = this.setContext),
                  (this.setContext = function (t) {
                    (t.strokeStyle = "rgba(0,0,0,0)"),
                      (t.lineCap = "butt"),
                      (t.lineJoin = "miter"),
                      (t.miterLimit = 4),
                      void 0 !== t.font &&
                        void 0 !== window.getComputedStyle &&
                        (t.font = window
                          .getComputedStyle(t.canvas)
                          .getPropertyValue("font")),
                      this.baseSetContext(t),
                      this.attribute("x").hasValue() ||
                        (this.attribute("x", !0).value = 0),
                      this.attribute("y").hasValue() ||
                        (this.attribute("y", !0).value = 0),
                      t.translate(
                        this.attribute("x").toPixels("x"),
                        this.attribute("y").toPixels("y")
                      );
                    var n = e.ViewPort.width(),
                      r = e.ViewPort.height();
                    if (
                      (this.attribute("width").hasValue() ||
                        (this.attribute("width", !0).value = "100%"),
                      this.attribute("height").hasValue() ||
                        (this.attribute("height", !0).value = "100%"),
                      void 0 === this.root)
                    ) {
                      (n = this.attribute("width").toPixels("x")),
                        (r = this.attribute("height").toPixels("y"));
                      var i = 0,
                        a = 0;
                      this.attribute("refX").hasValue() &&
                        this.attribute("refY").hasValue() &&
                        ((i = -this.attribute("refX").toPixels("x")),
                        (a = -this.attribute("refY").toPixels("y"))),
                        "visible" !=
                          this.attribute("overflow").valueOrDefault("hidden") &&
                          (t.beginPath(),
                          t.moveTo(i, a),
                          t.lineTo(n, a),
                          t.lineTo(n, r),
                          t.lineTo(i, r),
                          t.closePath(),
                          t.clip());
                    }
                    if (
                      (e.ViewPort.SetCurrent(n, r),
                      this.attribute("viewBox").hasValue())
                    ) {
                      var o = e.ToNumberArray(this.attribute("viewBox").value),
                        s = o[0],
                        l = o[1];
                      (n = o[2]),
                        (r = o[3]),
                        e.AspectRatio(
                          t,
                          this.attribute("preserveAspectRatio").value,
                          e.ViewPort.width(),
                          n,
                          e.ViewPort.height(),
                          r,
                          s,
                          l,
                          this.attribute("refX").value,
                          this.attribute("refY").value
                        ),
                        e.ViewPort.RemoveCurrent(),
                        e.ViewPort.SetCurrent(o[2], o[3]);
                    }
                  });
              }),
              (e.Element.svg.prototype = new e.Element.RenderedElementBase()),
              (e.Element.rect = function (t) {
                (this.base = e.Element.PathElementBase),
                  this.base(t),
                  (this.path = function (t) {
                    var n = this.attribute("x").toPixels("x"),
                      r = this.attribute("y").toPixels("y"),
                      i = this.attribute("width").toPixels("x"),
                      a = this.attribute("height").toPixels("y"),
                      o = this.attribute("rx").toPixels("x"),
                      s = this.attribute("ry").toPixels("y");
                    return (
                      this.attribute("rx").hasValue() &&
                        !this.attribute("ry").hasValue() &&
                        (s = o),
                      this.attribute("ry").hasValue() &&
                        !this.attribute("rx").hasValue() &&
                        (o = s),
                      (o = Math.min(o, i / 2)),
                      (s = Math.min(s, a / 2)),
                      null != t &&
                        (t.beginPath(),
                        t.moveTo(n + o, r),
                        t.lineTo(n + i - o, r),
                        t.quadraticCurveTo(n + i, r, n + i, r + s),
                        t.lineTo(n + i, r + a - s),
                        t.quadraticCurveTo(n + i, r + a, n + i - o, r + a),
                        t.lineTo(n + o, r + a),
                        t.quadraticCurveTo(n, r + a, n, r + a - s),
                        t.lineTo(n, r + s),
                        t.quadraticCurveTo(n, r, n + o, r),
                        t.closePath()),
                      new e.BoundingBox(n, r, n + i, r + a)
                    );
                  });
              }),
              (e.Element.rect.prototype = new e.Element.PathElementBase()),
              (e.Element.circle = function (t) {
                (this.base = e.Element.PathElementBase),
                  this.base(t),
                  (this.path = function (t) {
                    var n = this.attribute("cx").toPixels("x"),
                      r = this.attribute("cy").toPixels("y"),
                      i = this.attribute("r").toPixels();
                    return (
                      null != t &&
                        (t.beginPath(),
                        t.arc(n, r, i, 0, 2 * Math.PI, !0),
                        t.closePath()),
                      new e.BoundingBox(n - i, r - i, n + i, r + i)
                    );
                  });
              }),
              (e.Element.circle.prototype = new e.Element.PathElementBase()),
              (e.Element.ellipse = function (t) {
                (this.base = e.Element.PathElementBase),
                  this.base(t),
                  (this.path = function (t) {
                    var n = ((Math.sqrt(2) - 1) / 3) * 4,
                      r = this.attribute("rx").toPixels("x"),
                      i = this.attribute("ry").toPixels("y"),
                      a = this.attribute("cx").toPixels("x"),
                      o = this.attribute("cy").toPixels("y");
                    return (
                      null != t &&
                        (t.beginPath(),
                        t.moveTo(a, o - i),
                        t.bezierCurveTo(
                          a + n * r,
                          o - i,
                          a + r,
                          o - n * i,
                          a + r,
                          o
                        ),
                        t.bezierCurveTo(
                          a + r,
                          o + n * i,
                          a + n * r,
                          o + i,
                          a,
                          o + i
                        ),
                        t.bezierCurveTo(
                          a - n * r,
                          o + i,
                          a - r,
                          o + n * i,
                          a - r,
                          o
                        ),
                        t.bezierCurveTo(
                          a - r,
                          o - n * i,
                          a - n * r,
                          o - i,
                          a,
                          o - i
                        ),
                        t.closePath()),
                      new e.BoundingBox(a - r, o - i, a + r, o + i)
                    );
                  });
              }),
              (e.Element.ellipse.prototype = new e.Element.PathElementBase()),
              (e.Element.line = function (t) {
                (this.base = e.Element.PathElementBase),
                  this.base(t),
                  (this.getPoints = function () {
                    return [
                      new e.Point(
                        this.attribute("x1").toPixels("x"),
                        this.attribute("y1").toPixels("y")
                      ),
                      new e.Point(
                        this.attribute("x2").toPixels("x"),
                        this.attribute("y2").toPixels("y")
                      ),
                    ];
                  }),
                  (this.path = function (t) {
                    var n = this.getPoints();
                    return (
                      null != t &&
                        (t.beginPath(),
                        t.moveTo(n[0].x, n[0].y),
                        t.lineTo(n[1].x, n[1].y)),
                      new e.BoundingBox(n[0].x, n[0].y, n[1].x, n[1].y)
                    );
                  }),
                  (this.getMarkers = function () {
                    var t = this.getPoints(),
                      e = t[0].angleTo(t[1]);
                    return [
                      [t[0], e],
                      [t[1], e],
                    ];
                  });
              }),
              (e.Element.line.prototype = new e.Element.PathElementBase()),
              (e.Element.polyline = function (t) {
                (this.base = e.Element.PathElementBase),
                  this.base(t),
                  (this.points = e.CreatePath(this.attribute("points").value)),
                  (this.path = function (t) {
                    var n = new e.BoundingBox(
                      this.points[0].x,
                      this.points[0].y
                    );
                    null != t &&
                      (t.beginPath(),
                      t.moveTo(this.points[0].x, this.points[0].y));
                    for (var r = 1; r < this.points.length; r++)
                      n.addPoint(this.points[r].x, this.points[r].y),
                        null != t &&
                          t.lineTo(this.points[r].x, this.points[r].y);
                    return n;
                  }),
                  (this.getMarkers = function () {
                    for (var t = [], e = 0; e < this.points.length - 1; e++)
                      t.push([
                        this.points[e],
                        this.points[e].angleTo(this.points[e + 1]),
                      ]);
                    return (
                      t.length > 0 &&
                        t.push([
                          this.points[this.points.length - 1],
                          t[t.length - 1][1],
                        ]),
                      t
                    );
                  });
              }),
              (e.Element.polyline.prototype = new e.Element.PathElementBase()),
              (e.Element.polygon = function (t) {
                (this.base = e.Element.polyline),
                  this.base(t),
                  (this.basePath = this.path),
                  (this.path = function (t) {
                    var e = this.basePath(t);
                    return (
                      null != t &&
                        (t.lineTo(this.points[0].x, this.points[0].y),
                        t.closePath()),
                      e
                    );
                  });
              }),
              (e.Element.polygon.prototype = new e.Element.polyline()),
              (e.Element.path = function (t) {
                (this.base = e.Element.PathElementBase), this.base(t);
                var n = this.attribute("d").value;
                n = n.replace(/,/gm, " ");
                for (var r = 0; r < 2; r++)
                  n = n.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
                for (
                  n = (n = n.replace(
                    /([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,
                    "$1 $2"
                  )).replace(/([0-9])([+\-])/gm, "$1 $2"),
                    r = 0;
                  r < 2;
                  r++
                )
                  n = n.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
                (n = n.replace(
                  /([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,
                  "$1 $3 $4 "
                )),
                  (n = e.compressSpaces(n)),
                  (n = e.trim(n)),
                  (this.PathParser = new (function (t) {
                    (this.tokens = t.split(" ")),
                      (this.reset = function () {
                        (this.i = -1),
                          (this.command = ""),
                          (this.previousCommand = ""),
                          (this.start = new e.Point(0, 0)),
                          (this.control = new e.Point(0, 0)),
                          (this.current = new e.Point(0, 0)),
                          (this.points = []),
                          (this.angles = []);
                      }),
                      (this.isEnd = function () {
                        return this.i >= this.tokens.length - 1;
                      }),
                      (this.isCommandOrEnd = function () {
                        return (
                          !!this.isEnd() ||
                          null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
                        );
                      }),
                      (this.isRelativeCommand = function () {
                        switch (this.command) {
                          case "m":
                          case "l":
                          case "h":
                          case "v":
                          case "c":
                          case "s":
                          case "q":
                          case "t":
                          case "a":
                          case "z":
                            return !0;
                        }
                        return !1;
                      }),
                      (this.getToken = function () {
                        return this.i++, this.tokens[this.i];
                      }),
                      (this.getScalar = function () {
                        return parseFloat(this.getToken());
                      }),
                      (this.nextCommand = function () {
                        (this.previousCommand = this.command),
                          (this.command = this.getToken());
                      }),
                      (this.getPoint = function () {
                        var t = new e.Point(this.getScalar(), this.getScalar());
                        return this.makeAbsolute(t);
                      }),
                      (this.getAsControlPoint = function () {
                        var t = this.getPoint();
                        return (this.control = t), t;
                      }),
                      (this.getAsCurrentPoint = function () {
                        var t = this.getPoint();
                        return (this.current = t), t;
                      }),
                      (this.getReflectedControlPoint = function () {
                        return "c" != this.previousCommand.toLowerCase() &&
                          "s" != this.previousCommand.toLowerCase() &&
                          "q" != this.previousCommand.toLowerCase() &&
                          "t" != this.previousCommand.toLowerCase()
                          ? this.current
                          : new e.Point(
                              2 * this.current.x - this.control.x,
                              2 * this.current.y - this.control.y
                            );
                      }),
                      (this.makeAbsolute = function (t) {
                        return (
                          this.isRelativeCommand() &&
                            ((t.x += this.current.x), (t.y += this.current.y)),
                          t
                        );
                      }),
                      (this.addMarker = function (t, e, n) {
                        null != n &&
                          this.angles.length > 0 &&
                          null == this.angles[this.angles.length - 1] &&
                          (this.angles[this.angles.length - 1] =
                            this.points[this.points.length - 1].angleTo(n)),
                          this.addMarkerAngle(
                            t,
                            null == e ? null : e.angleTo(t)
                          );
                      }),
                      (this.addMarkerAngle = function (t, e) {
                        this.points.push(t), this.angles.push(e);
                      }),
                      (this.getMarkerPoints = function () {
                        return this.points;
                      }),
                      (this.getMarkerAngles = function () {
                        for (var t = 0; t < this.angles.length; t++)
                          if (null == this.angles[t])
                            for (var e = t + 1; e < this.angles.length; e++)
                              if (null != this.angles[e]) {
                                this.angles[t] = this.angles[e];
                                break;
                              }
                        return this.angles;
                      });
                  })(n)),
                  (this.path = function (t) {
                    var n = this.PathParser;
                    n.reset();
                    var r = new e.BoundingBox();
                    for (null != t && t.beginPath(); !n.isEnd(); )
                      switch ((n.nextCommand(), n.command)) {
                        case "M":
                        case "m":
                          var i = n.getAsCurrentPoint();
                          for (
                            n.addMarker(i),
                              r.addPoint(i.x, i.y),
                              null != t && t.moveTo(i.x, i.y),
                              n.start = n.current;
                            !n.isCommandOrEnd();

                          )
                            (i = n.getAsCurrentPoint()),
                              n.addMarker(i, n.start),
                              r.addPoint(i.x, i.y),
                              null != t && t.lineTo(i.x, i.y);
                          break;
                        case "L":
                        case "l":
                          for (; !n.isCommandOrEnd(); ) {
                            var a = n.current;
                            (i = n.getAsCurrentPoint()),
                              n.addMarker(i, a),
                              r.addPoint(i.x, i.y),
                              null != t && t.lineTo(i.x, i.y);
                          }
                          break;
                        case "H":
                        case "h":
                          for (; !n.isCommandOrEnd(); ) {
                            var o = new e.Point(
                              (n.isRelativeCommand() ? n.current.x : 0) +
                                n.getScalar(),
                              n.current.y
                            );
                            n.addMarker(o, n.current),
                              (n.current = o),
                              r.addPoint(n.current.x, n.current.y),
                              null != t && t.lineTo(n.current.x, n.current.y);
                          }
                          break;
                        case "V":
                        case "v":
                          for (; !n.isCommandOrEnd(); )
                            (o = new e.Point(
                              n.current.x,
                              (n.isRelativeCommand() ? n.current.y : 0) +
                                n.getScalar()
                            )),
                              n.addMarker(o, n.current),
                              (n.current = o),
                              r.addPoint(n.current.x, n.current.y),
                              null != t && t.lineTo(n.current.x, n.current.y);
                          break;
                        case "C":
                        case "c":
                          for (; !n.isCommandOrEnd(); ) {
                            var s = n.current,
                              l = n.getPoint(),
                              u = n.getAsControlPoint(),
                              h = n.getAsCurrentPoint();
                            n.addMarker(h, u, l),
                              r.addBezierCurve(
                                s.x,
                                s.y,
                                l.x,
                                l.y,
                                u.x,
                                u.y,
                                h.x,
                                h.y
                              ),
                              null != t &&
                                t.bezierCurveTo(l.x, l.y, u.x, u.y, h.x, h.y);
                          }
                          break;
                        case "S":
                        case "s":
                          for (; !n.isCommandOrEnd(); )
                            (s = n.current),
                              (l = n.getReflectedControlPoint()),
                              (u = n.getAsControlPoint()),
                              (h = n.getAsCurrentPoint()),
                              n.addMarker(h, u, l),
                              r.addBezierCurve(
                                s.x,
                                s.y,
                                l.x,
                                l.y,
                                u.x,
                                u.y,
                                h.x,
                                h.y
                              ),
                              null != t &&
                                t.bezierCurveTo(l.x, l.y, u.x, u.y, h.x, h.y);
                          break;
                        case "Q":
                        case "q":
                          for (; !n.isCommandOrEnd(); )
                            (s = n.current),
                              (u = n.getAsControlPoint()),
                              (h = n.getAsCurrentPoint()),
                              n.addMarker(h, u, u),
                              r.addQuadraticCurve(s.x, s.y, u.x, u.y, h.x, h.y),
                              null != t &&
                                t.quadraticCurveTo(u.x, u.y, h.x, h.y);
                          break;
                        case "T":
                        case "t":
                          for (; !n.isCommandOrEnd(); )
                            (s = n.current),
                              (u = n.getReflectedControlPoint()),
                              (n.control = u),
                              (h = n.getAsCurrentPoint()),
                              n.addMarker(h, u, u),
                              r.addQuadraticCurve(s.x, s.y, u.x, u.y, h.x, h.y),
                              null != t &&
                                t.quadraticCurveTo(u.x, u.y, h.x, h.y);
                          break;
                        case "A":
                        case "a":
                          for (; !n.isCommandOrEnd(); ) {
                            s = n.current;
                            var c = n.getScalar(),
                              f = n.getScalar(),
                              m = n.getScalar() * (Math.PI / 180),
                              d = n.getScalar(),
                              p = n.getScalar(),
                              v =
                                ((h = n.getAsCurrentPoint()),
                                new e.Point(
                                  (Math.cos(m) * (s.x - h.x)) / 2 +
                                    (Math.sin(m) * (s.y - h.y)) / 2,
                                  (-Math.sin(m) * (s.x - h.x)) / 2 +
                                    (Math.cos(m) * (s.y - h.y)) / 2
                                )),
                              g =
                                Math.pow(v.x, 2) / Math.pow(c, 2) +
                                Math.pow(v.y, 2) / Math.pow(f, 2);
                            g > 1 && ((c *= Math.sqrt(g)), (f *= Math.sqrt(g)));
                            var y =
                              (d == p ? -1 : 1) *
                              Math.sqrt(
                                (Math.pow(c, 2) * Math.pow(f, 2) -
                                  Math.pow(c, 2) * Math.pow(v.y, 2) -
                                  Math.pow(f, 2) * Math.pow(v.x, 2)) /
                                  (Math.pow(c, 2) * Math.pow(v.y, 2) +
                                    Math.pow(f, 2) * Math.pow(v.x, 2))
                              );
                            isNaN(y) && (y = 0);
                            var b = new e.Point(
                                (y * c * v.y) / f,
                                (y * -f * v.x) / c
                              ),
                              x = new e.Point(
                                (s.x + h.x) / 2 +
                                  Math.cos(m) * b.x -
                                  Math.sin(m) * b.y,
                                (s.y + h.y) / 2 +
                                  Math.sin(m) * b.x +
                                  Math.cos(m) * b.y
                              ),
                              w = function (t) {
                                return Math.sqrt(
                                  Math.pow(t[0], 2) + Math.pow(t[1], 2)
                                );
                              },
                              k = function (t, e) {
                                return (
                                  (t[0] * e[0] + t[1] * e[1]) / (w(t) * w(e))
                                );
                              },
                              S = function (t, e) {
                                return (
                                  (t[0] * e[1] < t[1] * e[0] ? -1 : 1) *
                                  Math.acos(k(t, e))
                                );
                              },
                              E = S([1, 0], [(v.x - b.x) / c, (v.y - b.y) / f]),
                              M = [(v.x - b.x) / c, (v.y - b.y) / f],
                              T = [(-v.x - b.x) / c, (-v.y - b.y) / f],
                              _ = S(M, T);
                            k(M, T) <= -1 && (_ = Math.PI),
                              k(M, T) >= 1 && (_ = 0);
                            var N = 1 - p ? 1 : -1,
                              P = E + N * (_ / 2),
                              C = new e.Point(
                                x.x + c * Math.cos(P),
                                x.y + f * Math.sin(P)
                              );
                            if (
                              (n.addMarkerAngle(C, P - (N * Math.PI) / 2),
                              n.addMarkerAngle(h, P - N * Math.PI),
                              r.addPoint(h.x, h.y),
                              null != t)
                            ) {
                              k = c > f ? c : f;
                              var O = c > f ? 1 : c / f,
                                A = c > f ? f / c : 1;
                              t.translate(x.x, x.y),
                                t.rotate(m),
                                t.scale(O, A),
                                t.arc(0, 0, k, E, E + _, 1 - p),
                                t.scale(1 / O, 1 / A),
                                t.rotate(-m),
                                t.translate(-x.x, -x.y);
                            }
                          }
                          break;
                        case "Z":
                        case "z":
                          null != t && t.closePath(), (n.current = n.start);
                      }
                    return r;
                  }),
                  (this.getMarkers = function () {
                    for (
                      var t = this.PathParser.getMarkerPoints(),
                        e = this.PathParser.getMarkerAngles(),
                        n = [],
                        r = 0;
                      r < t.length;
                      r++
                    )
                      n.push([t[r], e[r]]);
                    return n;
                  });
              }),
              (e.Element.path.prototype = new e.Element.PathElementBase()),
              (e.Element.pattern = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.createPattern = function (t, n) {
                    var r = this.attribute("width").toPixels("x", !0),
                      i = this.attribute("height").toPixels("y", !0),
                      a = new e.Element.svg();
                    (a.attributes.viewBox = new e.Property(
                      "viewBox",
                      this.attribute("viewBox").value
                    )),
                      (a.attributes.width = new e.Property("width", r + "px")),
                      (a.attributes.height = new e.Property(
                        "height",
                        i + "px"
                      )),
                      (a.attributes.transform = new e.Property(
                        "transform",
                        this.attribute("patternTransform").value
                      )),
                      (a.children = this.children);
                    var o = document.createElement("canvas");
                    (o.width = r), (o.height = i);
                    var s = o.getContext("2d");
                    this.attribute("x").hasValue() &&
                      this.attribute("y").hasValue() &&
                      s.translate(
                        this.attribute("x").toPixels("x", !0),
                        this.attribute("y").toPixels("y", !0)
                      );
                    for (var l = -1; l <= 1; l++)
                      for (var u = -1; u <= 1; u++)
                        s.save(),
                          (a.attributes.x = new e.Property("x", l * o.width)),
                          (a.attributes.y = new e.Property("y", u * o.height)),
                          a.render(s),
                          s.restore();
                    return t.createPattern(o, "repeat");
                  });
              }),
              (e.Element.pattern.prototype = new e.Element.ElementBase()),
              (e.Element.marker = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.baseRender = this.render),
                  (this.render = function (t, n, r) {
                    t.translate(n.x, n.y),
                      "auto" ==
                        this.attribute("orient").valueOrDefault("auto") &&
                        t.rotate(r),
                      "strokeWidth" ==
                        this.attribute("markerUnits").valueOrDefault(
                          "strokeWidth"
                        ) && t.scale(t.lineWidth, t.lineWidth),
                      t.save();
                    var i = new e.Element.svg();
                    (i.attributes.viewBox = new e.Property(
                      "viewBox",
                      this.attribute("viewBox").value
                    )),
                      (i.attributes.refX = new e.Property(
                        "refX",
                        this.attribute("refX").value
                      )),
                      (i.attributes.refY = new e.Property(
                        "refY",
                        this.attribute("refY").value
                      )),
                      (i.attributes.width = new e.Property(
                        "width",
                        this.attribute("markerWidth").value
                      )),
                      (i.attributes.height = new e.Property(
                        "height",
                        this.attribute("markerHeight").value
                      )),
                      (i.attributes.fill = new e.Property(
                        "fill",
                        this.attribute("fill").valueOrDefault("black")
                      )),
                      (i.attributes.stroke = new e.Property(
                        "stroke",
                        this.attribute("stroke").valueOrDefault("none")
                      )),
                      (i.children = this.children),
                      i.render(t),
                      t.restore(),
                      "strokeWidth" ==
                        this.attribute("markerUnits").valueOrDefault(
                          "strokeWidth"
                        ) && t.scale(1 / t.lineWidth, 1 / t.lineWidth),
                      "auto" ==
                        this.attribute("orient").valueOrDefault("auto") &&
                        t.rotate(-r),
                      t.translate(-n.x, -n.y);
                  });
              }),
              (e.Element.marker.prototype = new e.Element.ElementBase()),
              (e.Element.defs = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.render = function (t) {});
              }),
              (e.Element.defs.prototype = new e.Element.ElementBase()),
              (e.Element.GradientBase = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.stops = []);
                for (var n = 0; n < this.children.length; n++) {
                  var r = this.children[n];
                  "stop" == r.type && this.stops.push(r);
                }
                (this.getGradient = function () {}),
                  (this.gradientUnits = function () {
                    return this.attribute("gradientUnits").valueOrDefault(
                      "objectBoundingBox"
                    );
                  }),
                  (this.attributesToInherit = ["gradientUnits"]),
                  (this.inheritStopContainer = function (t) {
                    for (var e = 0; e < this.attributesToInherit.length; e++) {
                      var n = this.attributesToInherit[e];
                      !this.attribute(n).hasValue() &&
                        t.attribute(n).hasValue() &&
                        (this.attribute(n, !0).value = t.attribute(n).value);
                    }
                  }),
                  (this.createGradient = function (t, n, r) {
                    var i = this;
                    this.getHrefAttribute().hasValue() &&
                      ((i = this.getHrefAttribute().getDefinition()),
                      this.inheritStopContainer(i));
                    var a = function (t) {
                        return r.hasValue()
                          ? new e.Property("color", t).addOpacity(r).value
                          : t;
                      },
                      o = this.getGradient(t, n);
                    if (null == o) return a(i.stops[i.stops.length - 1].color);
                    for (var s = 0; s < i.stops.length; s++)
                      o.addColorStop(i.stops[s].offset, a(i.stops[s].color));
                    if (this.attribute("gradientTransform").hasValue()) {
                      var l = e.ViewPort.viewPorts[0],
                        u = new e.Element.rect();
                      (u.attributes.x = new e.Property(
                        "x",
                        -e.MAX_VIRTUAL_PIXELS / 3
                      )),
                        (u.attributes.y = new e.Property(
                          "y",
                          -e.MAX_VIRTUAL_PIXELS / 3
                        )),
                        (u.attributes.width = new e.Property(
                          "width",
                          e.MAX_VIRTUAL_PIXELS
                        )),
                        (u.attributes.height = new e.Property(
                          "height",
                          e.MAX_VIRTUAL_PIXELS
                        ));
                      var h = new e.Element.g();
                      (h.attributes.transform = new e.Property(
                        "transform",
                        this.attribute("gradientTransform").value
                      )),
                        (h.children = [u]);
                      var c = new e.Element.svg();
                      (c.attributes.x = new e.Property("x", 0)),
                        (c.attributes.y = new e.Property("y", 0)),
                        (c.attributes.width = new e.Property("width", l.width)),
                        (c.attributes.height = new e.Property(
                          "height",
                          l.height
                        )),
                        (c.children = [h]);
                      var f = document.createElement("canvas");
                      (f.width = l.width), (f.height = l.height);
                      var m = f.getContext("2d");
                      return (
                        (m.fillStyle = o),
                        c.render(m),
                        m.createPattern(f, "no-repeat")
                      );
                    }
                    return o;
                  });
              }),
              (e.Element.GradientBase.prototype = new e.Element.ElementBase()),
              (e.Element.linearGradient = function (t) {
                (this.base = e.Element.GradientBase),
                  this.base(t),
                  this.attributesToInherit.push("x1"),
                  this.attributesToInherit.push("y1"),
                  this.attributesToInherit.push("x2"),
                  this.attributesToInherit.push("y2"),
                  (this.getGradient = function (t, e) {
                    var n =
                      "objectBoundingBox" == this.gradientUnits()
                        ? e.getBoundingBox()
                        : null;
                    this.attribute("x1").hasValue() ||
                      this.attribute("y1").hasValue() ||
                      this.attribute("x2").hasValue() ||
                      this.attribute("y2").hasValue() ||
                      ((this.attribute("x1", !0).value = 0),
                      (this.attribute("y1", !0).value = 0),
                      (this.attribute("x2", !0).value = 1),
                      (this.attribute("y2", !0).value = 0));
                    var r =
                        "objectBoundingBox" == this.gradientUnits()
                          ? n.x() + n.width() * this.attribute("x1").numValue()
                          : this.attribute("x1").toPixels("x"),
                      i =
                        "objectBoundingBox" == this.gradientUnits()
                          ? n.y() + n.height() * this.attribute("y1").numValue()
                          : this.attribute("y1").toPixels("y"),
                      a =
                        "objectBoundingBox" == this.gradientUnits()
                          ? n.x() + n.width() * this.attribute("x2").numValue()
                          : this.attribute("x2").toPixels("x"),
                      o =
                        "objectBoundingBox" == this.gradientUnits()
                          ? n.y() + n.height() * this.attribute("y2").numValue()
                          : this.attribute("y2").toPixels("y");
                    return r == a && i == o
                      ? null
                      : t.createLinearGradient(r, i, a, o);
                  });
              }),
              (e.Element.linearGradient.prototype =
                new e.Element.GradientBase()),
              (e.Element.radialGradient = function (t) {
                (this.base = e.Element.GradientBase),
                  this.base(t),
                  this.attributesToInherit.push("cx"),
                  this.attributesToInherit.push("cy"),
                  this.attributesToInherit.push("r"),
                  this.attributesToInherit.push("fx"),
                  this.attributesToInherit.push("fy"),
                  (this.getGradient = function (t, e) {
                    var n = e.getBoundingBox();
                    this.attribute("cx").hasValue() ||
                      (this.attribute("cx", !0).value = "50%"),
                      this.attribute("cy").hasValue() ||
                        (this.attribute("cy", !0).value = "50%"),
                      this.attribute("r").hasValue() ||
                        (this.attribute("r", !0).value = "50%");
                    var r =
                        "objectBoundingBox" == this.gradientUnits()
                          ? n.x() + n.width() * this.attribute("cx").numValue()
                          : this.attribute("cx").toPixels("x"),
                      i =
                        "objectBoundingBox" == this.gradientUnits()
                          ? n.y() + n.height() * this.attribute("cy").numValue()
                          : this.attribute("cy").toPixels("y"),
                      a = r,
                      o = i;
                    this.attribute("fx").hasValue() &&
                      (a =
                        "objectBoundingBox" == this.gradientUnits()
                          ? n.x() + n.width() * this.attribute("fx").numValue()
                          : this.attribute("fx").toPixels("x")),
                      this.attribute("fy").hasValue() &&
                        (o =
                          "objectBoundingBox" == this.gradientUnits()
                            ? n.y() +
                              n.height() * this.attribute("fy").numValue()
                            : this.attribute("fy").toPixels("y"));
                    var s =
                      "objectBoundingBox" == this.gradientUnits()
                        ? ((n.width() + n.height()) / 2) *
                          this.attribute("r").numValue()
                        : this.attribute("r").toPixels();
                    return t.createRadialGradient(a, o, 0, r, i, s);
                  });
              }),
              (e.Element.radialGradient.prototype =
                new e.Element.GradientBase()),
              (e.Element.stop = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.offset = this.attribute("offset").numValue()),
                  this.offset < 0 && (this.offset = 0),
                  this.offset > 1 && (this.offset = 1);
                var n = this.style("stop-color", !0);
                "" == n.value && (n.value = "#000"),
                  this.style("stop-opacity").hasValue() &&
                    (n = n.addOpacity(this.style("stop-opacity"))),
                  (this.color = n.value);
              }),
              (e.Element.stop.prototype = new e.Element.ElementBase()),
              (e.Element.AnimateBase = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  e.Animations.push(this),
                  (this.duration = 0),
                  (this.begin = this.attribute("begin").toMilliseconds()),
                  (this.maxDuration =
                    this.begin + this.attribute("dur").toMilliseconds()),
                  (this.getProperty = function () {
                    var t = this.attribute("attributeType").value,
                      e = this.attribute("attributeName").value;
                    return "CSS" == t
                      ? this.parent.style(e, !0)
                      : this.parent.attribute(e, !0);
                  }),
                  (this.initialValue = null),
                  (this.initialUnits = ""),
                  (this.removed = !1),
                  (this.calcValue = function () {
                    return "";
                  }),
                  (this.update = function (t) {
                    if (
                      (null == this.initialValue &&
                        ((this.initialValue = this.getProperty().value),
                        (this.initialUnits = this.getProperty().getUnits())),
                      this.duration > this.maxDuration)
                    ) {
                      if (
                        "indefinite" == this.attribute("repeatCount").value ||
                        "indefinite" == this.attribute("repeatDur").value
                      )
                        this.duration = 0;
                      else if (
                        "freeze" !=
                          this.attribute("fill").valueOrDefault("remove") ||
                        this.frozen
                      ) {
                        if (
                          "remove" ==
                            this.attribute("fill").valueOrDefault("remove") &&
                          !this.removed
                        )
                          return (
                            (this.removed = !0),
                            (this.getProperty().value = this.parent
                              .animationFrozen
                              ? this.parent.animationFrozenValue
                              : this.initialValue),
                            !0
                          );
                      } else
                        (this.frozen = !0),
                          (this.parent.animationFrozen = !0),
                          (this.parent.animationFrozenValue =
                            this.getProperty().value);
                      return !1;
                    }
                    this.duration = this.duration + t;
                    var e = !1;
                    if (this.begin < this.duration) {
                      var n = this.calcValue();
                      this.attribute("type").hasValue() &&
                        (n = this.attribute("type").value + "(" + n + ")"),
                        (this.getProperty().value = n),
                        (e = !0);
                    }
                    return e;
                  }),
                  (this.from = this.attribute("from")),
                  (this.to = this.attribute("to")),
                  (this.values = this.attribute("values")),
                  this.values.hasValue() &&
                    (this.values.value = this.values.value.split(";")),
                  (this.progress = function () {
                    var t = {
                      progress:
                        (this.duration - this.begin) /
                        (this.maxDuration - this.begin),
                    };
                    if (this.values.hasValue()) {
                      var n = t.progress * (this.values.value.length - 1),
                        r = Math.floor(n),
                        i = Math.ceil(n);
                      (t.from = new e.Property(
                        "from",
                        parseFloat(this.values.value[r])
                      )),
                        (t.to = new e.Property(
                          "to",
                          parseFloat(this.values.value[i])
                        )),
                        (t.progress = (n - r) / (i - r));
                    } else (t.from = this.from), (t.to = this.to);
                    return t;
                  });
              }),
              (e.Element.AnimateBase.prototype = new e.Element.ElementBase()),
              (e.Element.animate = function (t) {
                (this.base = e.Element.AnimateBase),
                  this.base(t),
                  (this.calcValue = function () {
                    var t = this.progress();
                    return (
                      t.from.numValue() +
                      (t.to.numValue() - t.from.numValue()) * t.progress +
                      this.initialUnits
                    );
                  });
              }),
              (e.Element.animate.prototype = new e.Element.AnimateBase()),
              (e.Element.animateColor = function (t) {
                (this.base = e.Element.AnimateBase),
                  this.base(t),
                  (this.calcValue = function () {
                    var t = this.progress(),
                      e = new r(t.from.value),
                      n = new r(t.to.value);
                    if (e.ok && n.ok) {
                      var i = e.r + (n.r - e.r) * t.progress,
                        a = e.g + (n.g - e.g) * t.progress,
                        o = e.b + (n.b - e.b) * t.progress;
                      return (
                        "rgb(" +
                        parseInt(i, 10) +
                        "," +
                        parseInt(a, 10) +
                        "," +
                        parseInt(o, 10) +
                        ")"
                      );
                    }
                    return this.attribute("from").value;
                  });
              }),
              (e.Element.animateColor.prototype = new e.Element.AnimateBase()),
              (e.Element.animateTransform = function (t) {
                (this.base = e.Element.AnimateBase),
                  this.base(t),
                  (this.calcValue = function () {
                    for (
                      var t = this.progress(),
                        n = e.ToNumberArray(t.from.value),
                        r = e.ToNumberArray(t.to.value),
                        i = "",
                        a = 0;
                      a < n.length;
                      a++
                    )
                      i += n[a] + (r[a] - n[a]) * t.progress + " ";
                    return i;
                  });
              }),
              (e.Element.animateTransform.prototype = new e.Element.animate()),
              (e.Element.font = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.horizAdvX = this.attribute("horiz-adv-x").numValue()),
                  (this.isRTL = !1),
                  (this.isArabic = !1),
                  (this.fontFace = null),
                  (this.missingGlyph = null),
                  (this.glyphs = []);
                for (var n = 0; n < this.children.length; n++) {
                  var r = this.children[n];
                  "font-face" == r.type
                    ? ((this.fontFace = r),
                      r.style("font-family").hasValue() &&
                        (e.Definitions[r.style("font-family").value] = this))
                    : "missing-glyph" == r.type
                    ? (this.missingGlyph = r)
                    : "glyph" == r.type &&
                      ("" != r.arabicForm
                        ? ((this.isRTL = !0),
                          (this.isArabic = !0),
                          void 0 === this.glyphs[r.unicode] &&
                            (this.glyphs[r.unicode] = []),
                          (this.glyphs[r.unicode][r.arabicForm] = r))
                        : (this.glyphs[r.unicode] = r));
                }
              }),
              (e.Element.font.prototype = new e.Element.ElementBase()),
              (e.Element.fontface = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.ascent = this.attribute("ascent").value),
                  (this.descent = this.attribute("descent").value),
                  (this.unitsPerEm = this.attribute("units-per-em").numValue());
              }),
              (e.Element.fontface.prototype = new e.Element.ElementBase()),
              (e.Element.missingglyph = function (t) {
                (this.base = e.Element.path),
                  this.base(t),
                  (this.horizAdvX = 0);
              }),
              (e.Element.missingglyph.prototype = new e.Element.path()),
              (e.Element.glyph = function (t) {
                (this.base = e.Element.path),
                  this.base(t),
                  (this.horizAdvX = this.attribute("horiz-adv-x").numValue()),
                  (this.unicode = this.attribute("unicode").value),
                  (this.arabicForm = this.attribute("arabic-form").value);
              }),
              (e.Element.glyph.prototype = new e.Element.path()),
              (e.Element.text = function (t) {
                (this.captureTextNodes = !0),
                  (this.base = e.Element.RenderedElementBase),
                  this.base(t),
                  (this.baseSetContext = this.setContext),
                  (this.setContext = function (t) {
                    this.baseSetContext(t);
                    var e = this.style("dominant-baseline").toTextBaseline();
                    null == e &&
                      (e = this.style("alignment-baseline").toTextBaseline()),
                      null != e && (t.textBaseline = e);
                  }),
                  (this.getBoundingBox = function () {
                    var t = this.attribute("x").toPixels("x"),
                      n = this.attribute("y").toPixels("y"),
                      r = this.parent
                        .style("font-size")
                        .numValueOrDefault(e.Font.Parse(e.ctx.font).fontSize);
                    return new e.BoundingBox(
                      t,
                      n - r,
                      t +
                        Math.floor((2 * r) / 3) *
                          this.children[0].getText().length,
                      n
                    );
                  }),
                  (this.renderChildren = function (t) {
                    (this.x = this.attribute("x").toPixels("x")),
                      (this.y = this.attribute("y").toPixels("y")),
                      this.attribute("dx").hasValue() &&
                        (this.x += this.attribute("dx").toPixels("x")),
                      this.attribute("dy").hasValue() &&
                        (this.y += this.attribute("dy").toPixels("y")),
                      (this.x += this.getAnchorDelta(t, this, 0));
                    for (var e = 0; e < this.children.length; e++)
                      this.renderChild(t, this, this, e);
                  }),
                  (this.getAnchorDelta = function (t, e, n) {
                    var r = this.style("text-anchor").valueOrDefault("start");
                    if ("start" != r) {
                      for (var i = 0, a = n; a < e.children.length; a++) {
                        var o = e.children[a];
                        if (a > n && o.attribute("x").hasValue()) break;
                        i += o.measureTextRecursive(t);
                      }
                      return -1 * ("end" == r ? i : i / 2);
                    }
                    return 0;
                  }),
                  (this.renderChild = function (t, e, n, r) {
                    var i = n.children[r];
                    for (
                      i.attribute("x").hasValue()
                        ? ((i.x =
                            i.attribute("x").toPixels("x") +
                            e.getAnchorDelta(t, n, r)),
                          i.attribute("dx").hasValue() &&
                            (i.x += i.attribute("dx").toPixels("x")))
                        : (i.attribute("dx").hasValue() &&
                            (e.x += i.attribute("dx").toPixels("x")),
                          (i.x = e.x)),
                        e.x = i.x + i.measureText(t),
                        i.attribute("y").hasValue()
                          ? ((i.y = i.attribute("y").toPixels("y")),
                            i.attribute("dy").hasValue() &&
                              (i.y += i.attribute("dy").toPixels("y")))
                          : (i.attribute("dy").hasValue() &&
                              (e.y += i.attribute("dy").toPixels("y")),
                            (i.y = e.y)),
                        e.y = i.y,
                        i.render(t),
                        r = 0;
                      r < i.children.length;
                      r++
                    )
                      e.renderChild(t, e, i, r);
                  });
              }),
              (e.Element.text.prototype = new e.Element.RenderedElementBase()),
              (e.Element.TextElementBase = function (t) {
                (this.base = e.Element.RenderedElementBase),
                  this.base(t),
                  (this.getGlyph = function (t, e, n) {
                    var r = e[n],
                      i = null;
                    if (t.isArabic) {
                      var a = "isolated";
                      (0 == n || " " == e[n - 1]) &&
                        n < e.length - 2 &&
                        " " != e[n + 1] &&
                        (a = "terminal"),
                        n > 0 &&
                          " " != e[n - 1] &&
                          n < e.length - 2 &&
                          " " != e[n + 1] &&
                          (a = "medial"),
                        n > 0 &&
                          " " != e[n - 1] &&
                          (n == e.length - 1 || " " == e[n + 1]) &&
                          (a = "initial"),
                        void 0 !== t.glyphs[r] &&
                          null == (i = t.glyphs[r][a]) &&
                          "glyph" == t.glyphs[r].type &&
                          (i = t.glyphs[r]);
                    } else i = t.glyphs[r];
                    return null == i && (i = t.missingGlyph), i;
                  }),
                  (this.renderChildren = function (t) {
                    var n = this.parent.style("font-family").getDefinition();
                    if (null == n)
                      "" != t.fillStyle &&
                        t.fillText(
                          e.compressSpaces(this.getText()),
                          this.x,
                          this.y
                        ),
                        "" != t.strokeStyle &&
                          t.strokeText(
                            e.compressSpaces(this.getText()),
                            this.x,
                            this.y
                          );
                    else {
                      var r = this.parent
                          .style("font-size")
                          .numValueOrDefault(e.Font.Parse(e.ctx.font).fontSize),
                        i = this.parent
                          .style("font-style")
                          .valueOrDefault(e.Font.Parse(e.ctx.font).fontStyle),
                        a = this.getText();
                      n.isRTL && (a = a.split("").reverse().join(""));
                      for (
                        var o = e.ToNumberArray(
                            this.parent.attribute("dx").value
                          ),
                          s = 0;
                        s < a.length;
                        s++
                      ) {
                        var l = this.getGlyph(n, a, s),
                          u = r / n.fontFace.unitsPerEm;
                        t.translate(this.x, this.y), t.scale(u, -u);
                        var h = t.lineWidth;
                        (t.lineWidth =
                          (t.lineWidth * n.fontFace.unitsPerEm) / r),
                          "italic" == i && t.transform(1, 0, 0.4, 1, 0, 0),
                          l.render(t),
                          "italic" == i && t.transform(1, 0, -0.4, 1, 0, 0),
                          (t.lineWidth = h),
                          t.scale(1 / u, -1 / u),
                          t.translate(-this.x, -this.y),
                          (this.x +=
                            (r * (l.horizAdvX || n.horizAdvX)) /
                            n.fontFace.unitsPerEm),
                          void 0 === o[s] || isNaN(o[s]) || (this.x += o[s]);
                      }
                    }
                  }),
                  (this.getText = function () {}),
                  (this.measureTextRecursive = function (t) {
                    for (
                      var e = this.measureText(t), n = 0;
                      n < this.children.length;
                      n++
                    )
                      e += this.children[n].measureTextRecursive(t);
                    return e;
                  }),
                  (this.measureText = function (t) {
                    var n = this.parent.style("font-family").getDefinition();
                    if (null != n) {
                      var r = this.parent
                          .style("font-size")
                          .numValueOrDefault(e.Font.Parse(e.ctx.font).fontSize),
                        i = 0,
                        a = this.getText();
                      n.isRTL && (a = a.split("").reverse().join(""));
                      for (
                        var o = e.ToNumberArray(
                            this.parent.attribute("dx").value
                          ),
                          s = 0;
                        s < a.length;
                        s++
                      )
                        (i +=
                          ((this.getGlyph(n, a, s).horizAdvX || n.horizAdvX) *
                            r) /
                          n.fontFace.unitsPerEm),
                          void 0 === o[s] || isNaN(o[s]) || (i += o[s]);
                      return i;
                    }
                    var l = e.compressSpaces(this.getText());
                    if (!t.measureText) return 10 * l.length;
                    t.save(), this.setContext(t);
                    var u = t.measureText(l).width;
                    return t.restore(), u;
                  });
              }),
              (e.Element.TextElementBase.prototype =
                new e.Element.RenderedElementBase()),
              (e.Element.tspan = function (t) {
                (this.captureTextNodes = !0),
                  (this.base = e.Element.TextElementBase),
                  this.base(t),
                  (this.text = e.compressSpaces(
                    t.value || t.text || t.textContent || ""
                  )),
                  (this.getText = function () {
                    return this.children.length > 0 ? "" : this.text;
                  });
              }),
              (e.Element.tspan.prototype = new e.Element.TextElementBase()),
              (e.Element.tref = function (t) {
                (this.base = e.Element.TextElementBase),
                  this.base(t),
                  (this.getText = function () {
                    var t = this.getHrefAttribute().getDefinition();
                    if (null != t) return t.children[0].getText();
                  });
              }),
              (e.Element.tref.prototype = new e.Element.TextElementBase()),
              (e.Element.a = function (t) {
                (this.base = e.Element.TextElementBase),
                  this.base(t),
                  (this.hasText = t.childNodes.length > 0);
                for (var n = 0; n < t.childNodes.length; n++)
                  3 != t.childNodes[n].nodeType && (this.hasText = !1);
                (this.text = this.hasText ? t.childNodes[0].value : ""),
                  (this.getText = function () {
                    return this.text;
                  }),
                  (this.baseRenderChildren = this.renderChildren),
                  (this.renderChildren = function (t) {
                    if (this.hasText) {
                      this.baseRenderChildren(t);
                      var n = new e.Property(
                        "fontSize",
                        e.Font.Parse(e.ctx.font).fontSize
                      );
                      e.Mouse.checkBoundingBox(
                        this,
                        new e.BoundingBox(
                          this.x,
                          this.y - n.toPixels("y"),
                          this.x + this.measureText(t),
                          this.y
                        )
                      );
                    } else if (this.children.length > 0) {
                      var r = new e.Element.g();
                      (r.children = this.children),
                        (r.parent = this),
                        r.render(t);
                    }
                  }),
                  (this.onclick = function () {
                    window.open(this.getHrefAttribute().value);
                  }),
                  (this.onmousemove = function () {
                    e.ctx.canvas.style.cursor = "pointer";
                  });
              }),
              (e.Element.a.prototype = new e.Element.TextElementBase()),
              (e.Element.image = function (t) {
                (this.base = e.Element.RenderedElementBase), this.base(t);
                var n = this.getHrefAttribute().value;
                if ("" != n) {
                  var r = n.match(/\.svg$/);
                  if ((e.Images.push(this), (this.loaded = !1), r))
                    (this.img = e.ajax(n)), (this.loaded = !0);
                  else {
                    (this.img = document.createElement("img")),
                      1 == e.opts.useCORS &&
                        (this.img.crossOrigin = "Anonymous");
                    var i = this;
                    (this.img.onload = function () {
                      i.loaded = !0;
                    }),
                      (this.img.onerror = function () {
                        e.log('ERROR: image "' + n + '" not found'),
                          (i.loaded = !0);
                      }),
                      (this.img.src = n);
                  }
                  (this.renderChildren = function (t) {
                    var n = this.attribute("x").toPixels("x"),
                      i = this.attribute("y").toPixels("y"),
                      a = this.attribute("width").toPixels("x"),
                      o = this.attribute("height").toPixels("y");
                    0 != a &&
                      0 != o &&
                      (t.save(),
                      r
                        ? t.drawSvg(this.img, n, i, a, o)
                        : (t.translate(n, i),
                          e.AspectRatio(
                            t,
                            this.attribute("preserveAspectRatio").value,
                            a,
                            this.img.width,
                            o,
                            this.img.height,
                            0,
                            0
                          ),
                          t.drawImage(this.img, 0, 0)),
                      t.restore());
                  }),
                    (this.getBoundingBox = function () {
                      var t = this.attribute("x").toPixels("x"),
                        n = this.attribute("y").toPixels("y"),
                        r = this.attribute("width").toPixels("x"),
                        i = this.attribute("height").toPixels("y");
                      return new e.BoundingBox(t, n, t + r, n + i);
                    });
                }
              }),
              (e.Element.image.prototype = new e.Element.RenderedElementBase()),
              (e.Element.g = function (t) {
                (this.base = e.Element.RenderedElementBase),
                  this.base(t),
                  (this.getBoundingBox = function () {
                    for (
                      var t = new e.BoundingBox(), n = 0;
                      n < this.children.length;
                      n++
                    )
                      t.addBoundingBox(this.children[n].getBoundingBox());
                    return t;
                  });
              }),
              (e.Element.g.prototype = new e.Element.RenderedElementBase()),
              (e.Element.symbol = function (t) {
                (this.base = e.Element.RenderedElementBase),
                  this.base(t),
                  (this.render = function (t) {});
              }),
              (e.Element.symbol.prototype =
                new e.Element.RenderedElementBase()),
              (e.Element.style = function (t) {
                (this.base = e.Element.ElementBase), this.base(t);
                for (var n = "", r = 0; r < t.childNodes.length; r++)
                  n += t.childNodes[r].data;
                n = n.replace(
                  /(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
                  ""
                );
                var i = (n = e.compressSpaces(n)).split("}");
                for (r = 0; r < i.length; r++)
                  if ("" != e.trim(i[r]))
                    for (
                      var a = i[r].split("{"),
                        s = a[0].split(","),
                        l = a[1].split(";"),
                        u = 0;
                      u < s.length;
                      u++
                    ) {
                      var h = e.trim(s[u]);
                      if ("" != h) {
                        for (
                          var c = e.Styles[h] || {}, f = 0;
                          f < l.length;
                          f++
                        ) {
                          var m = l[f].indexOf(":"),
                            d = l[f].substr(0, m),
                            p = l[f].substr(m + 1, l[f].length - m);
                          null != d &&
                            null != p &&
                            (c[e.trim(d)] = new e.Property(
                              e.trim(d),
                              e.trim(p)
                            ));
                        }
                        if (
                          ((e.Styles[h] = c),
                          (e.StylesSpecificity[h] = o(h)),
                          "@font-face" == h)
                        )
                          for (
                            var v = c["font-family"].value.replace(/"/g, ""),
                              g = c.src.value.split(","),
                              y = 0;
                            y < g.length;
                            y++
                          )
                            if (g[y].indexOf('format("svg")') > 0)
                              for (
                                var b = g[y].indexOf("url"),
                                  x = g[y].indexOf(")", b),
                                  w = g[y].substr(b + 5, x - b - 6),
                                  k = e
                                    .parseXml(e.ajax(w))
                                    .getElementsByTagName("font"),
                                  S = 0;
                                S < k.length;
                                S++
                              ) {
                                var E = e.CreateElement(k[S]);
                                e.Definitions[v] = E;
                              }
                      }
                    }
              }),
              (e.Element.style.prototype = new e.Element.ElementBase()),
              (e.Element.use = function (t) {
                (this.base = e.Element.RenderedElementBase),
                  this.base(t),
                  (this.baseSetContext = this.setContext),
                  (this.setContext = function (t) {
                    this.baseSetContext(t),
                      this.attribute("x").hasValue() &&
                        t.translate(this.attribute("x").toPixels("x"), 0),
                      this.attribute("y").hasValue() &&
                        t.translate(0, this.attribute("y").toPixels("y"));
                  });
                var n = this.getHrefAttribute().getDefinition();
                (this.path = function (t) {
                  null != n && n.path(t);
                }),
                  (this.getBoundingBox = function () {
                    if (null != n) return n.getBoundingBox();
                  }),
                  (this.renderChildren = function (t) {
                    if (null != n) {
                      var r = n;
                      "symbol" == n.type &&
                        (((r = new e.Element.svg()).type = "svg"),
                        (r.attributes.viewBox = new e.Property(
                          "viewBox",
                          n.attribute("viewBox").value
                        )),
                        (r.attributes.preserveAspectRatio = new e.Property(
                          "preserveAspectRatio",
                          n.attribute("preserveAspectRatio").value
                        )),
                        (r.attributes.overflow = new e.Property(
                          "overflow",
                          n.attribute("overflow").value
                        )),
                        (r.children = n.children)),
                        "svg" == r.type &&
                          (this.attribute("width").hasValue() &&
                            (r.attributes.width = new e.Property(
                              "width",
                              this.attribute("width").value
                            )),
                          this.attribute("height").hasValue() &&
                            (r.attributes.height = new e.Property(
                              "height",
                              this.attribute("height").value
                            )));
                      var i = r.parent;
                      (r.parent = null), r.render(t), (r.parent = i);
                    }
                  });
              }),
              (e.Element.use.prototype = new e.Element.RenderedElementBase()),
              (e.Element.mask = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.apply = function (t, n) {
                    var r = this.attribute("x").toPixels("x"),
                      i = this.attribute("y").toPixels("y"),
                      a = this.attribute("width").toPixels("x"),
                      o = this.attribute("height").toPixels("y");
                    if (0 == a && 0 == o) {
                      for (
                        var s = new e.BoundingBox(), l = 0;
                        l < this.children.length;
                        l++
                      )
                        s.addBoundingBox(this.children[l].getBoundingBox());
                      (r = Math.floor(s.x1)),
                        (i = Math.floor(s.y1)),
                        (a = Math.floor(s.width())),
                        (o = Math.floor(s.height()));
                    }
                    var u = n.attribute("mask").value;
                    n.attribute("mask").value = "";
                    var h = document.createElement("canvas");
                    (h.width = r + a), (h.height = i + o);
                    var c = h.getContext("2d");
                    this.renderChildren(c);
                    var f = document.createElement("canvas");
                    (f.width = r + a), (f.height = i + o);
                    var m = f.getContext("2d");
                    n.render(m),
                      (m.globalCompositeOperation = "destination-in"),
                      (m.fillStyle = c.createPattern(h, "no-repeat")),
                      m.fillRect(0, 0, r + a, i + o),
                      (t.fillStyle = m.createPattern(f, "no-repeat")),
                      t.fillRect(0, 0, r + a, i + o),
                      (n.attribute("mask").value = u);
                  }),
                  (this.render = function (t) {});
              }),
              (e.Element.mask.prototype = new e.Element.ElementBase()),
              (e.Element.clipPath = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.apply = function (t) {
                    var n = CanvasRenderingContext2D.prototype.beginPath;
                    CanvasRenderingContext2D.prototype.beginPath =
                      function () {};
                    var r = CanvasRenderingContext2D.prototype.closePath;
                    (CanvasRenderingContext2D.prototype.closePath =
                      function () {}),
                      n.call(t);
                    for (var i = 0; i < this.children.length; i++) {
                      var a = this.children[i];
                      if (void 0 !== a.path) {
                        var o = null;
                        a.style("transform", !1, !0).hasValue() &&
                          (o = new e.Transform(
                            a.style("transform", !1, !0).value
                          )).apply(t),
                          a.path(t),
                          (CanvasRenderingContext2D.prototype.closePath = r),
                          o && o.unapply(t);
                      }
                    }
                    r.call(t),
                      t.clip(),
                      (CanvasRenderingContext2D.prototype.beginPath = n),
                      (CanvasRenderingContext2D.prototype.closePath = r);
                  }),
                  (this.render = function (t) {});
              }),
              (e.Element.clipPath.prototype = new e.Element.ElementBase()),
              (e.Element.filter = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.apply = function (t, e) {
                    var n = e.getBoundingBox(),
                      r = Math.floor(n.x1),
                      i = Math.floor(n.y1),
                      a = Math.floor(n.width()),
                      o = Math.floor(n.height()),
                      s = e.style("filter").value;
                    e.style("filter").value = "";
                    for (
                      var l = 0, u = 0, h = 0;
                      h < this.children.length;
                      h++
                    ) {
                      var c = this.children[h].extraFilterDistance || 0;
                      (l = Math.max(l, c)), (u = Math.max(u, c));
                    }
                    var f = document.createElement("canvas");
                    (f.width = a + 2 * l), (f.height = o + 2 * u);
                    var m = f.getContext("2d");
                    for (
                      m.translate(-r + l, -i + u), e.render(m), h = 0;
                      h < this.children.length;
                      h++
                    )
                      "function" == typeof this.children[h].apply &&
                        this.children[h].apply(m, 0, 0, a + 2 * l, o + 2 * u);
                    t.drawImage(
                      f,
                      0,
                      0,
                      a + 2 * l,
                      o + 2 * u,
                      r - l,
                      i - u,
                      a + 2 * l,
                      o + 2 * u
                    ),
                      (e.style("filter", !0).value = s);
                  }),
                  (this.render = function (t) {});
              }),
              (e.Element.filter.prototype = new e.Element.ElementBase()),
              (e.Element.feMorphology = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.apply = function (t, e, n, r, i) {});
              }),
              (e.Element.feMorphology.prototype = new e.Element.ElementBase()),
              (e.Element.feComposite = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.apply = function (t, e, n, r, i) {});
              }),
              (e.Element.feComposite.prototype = new e.Element.ElementBase()),
              (e.Element.feColorMatrix = function (t) {
                (this.base = e.Element.ElementBase), this.base(t);
                var n = e.ToNumberArray(this.attribute("values").value);
                switch (this.attribute("type").valueOrDefault("matrix")) {
                  case "saturate":
                    var r = n[0];
                    n = [
                      0.213 + 0.787 * r,
                      0.715 - 0.715 * r,
                      0.072 - 0.072 * r,
                      0,
                      0,
                      0.213 - 0.213 * r,
                      0.715 + 0.285 * r,
                      0.072 - 0.072 * r,
                      0,
                      0,
                      0.213 - 0.213 * r,
                      0.715 - 0.715 * r,
                      0.072 + 0.928 * r,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                    break;
                  case "hueRotate":
                    var i = (n[0] * Math.PI) / 180,
                      a = function (t, e, n) {
                        return t + Math.cos(i) * e + Math.sin(i) * n;
                      };
                    n = [
                      a(0.213, 0.787, -0.213),
                      a(0.715, -0.715, -0.715),
                      a(0.072, -0.072, 0.928),
                      0,
                      0,
                      a(0.213, -0.213, 0.143),
                      a(0.715, 0.285, 0.14),
                      a(0.072, -0.072, -0.283),
                      0,
                      0,
                      a(0.213, -0.213, -0.787),
                      a(0.715, -0.715, 0.715),
                      a(0.072, 0.928, 0.072),
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                    ];
                    break;
                  case "luminanceToAlpha":
                    n = [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125,
                      0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1,
                    ];
                }
                function o(t, e, n, r, i, a) {
                  return t[n * r * 4 + 4 * e + a];
                }
                function s(t, e, n, r, i, a, o) {
                  t[n * r * 4 + 4 * e + a] = o;
                }
                function l(t, e) {
                  var r = n[t];
                  return r * (r < 0 ? e - 255 : e);
                }
                this.apply = function (t, e, n, r, i) {
                  var a = t.getImageData(0, 0, r, i);
                  for (n = 0; n < i; n++)
                    for (e = 0; e < r; e++) {
                      var u = o(a.data, e, n, r, 0, 0),
                        h = o(a.data, e, n, r, 0, 1),
                        c = o(a.data, e, n, r, 0, 2),
                        f = o(a.data, e, n, r, 0, 3);
                      s(
                        a.data,
                        e,
                        n,
                        r,
                        0,
                        0,
                        l(0, u) + l(1, h) + l(2, c) + l(3, f) + l(4, 1)
                      ),
                        s(
                          a.data,
                          e,
                          n,
                          r,
                          0,
                          1,
                          l(5, u) + l(6, h) + l(7, c) + l(8, f) + l(9, 1)
                        ),
                        s(
                          a.data,
                          e,
                          n,
                          r,
                          0,
                          2,
                          l(10, u) + l(11, h) + l(12, c) + l(13, f) + l(14, 1)
                        ),
                        s(
                          a.data,
                          e,
                          n,
                          r,
                          0,
                          3,
                          l(15, u) + l(16, h) + l(17, c) + l(18, f) + l(19, 1)
                        );
                    }
                  t.clearRect(0, 0, r, i), t.putImageData(a, 0, 0);
                };
              }),
              (e.Element.feColorMatrix.prototype = new e.Element.ElementBase()),
              (e.Element.feGaussianBlur = function (t) {
                (this.base = e.Element.ElementBase),
                  this.base(t),
                  (this.blurRadius = Math.floor(
                    this.attribute("stdDeviation").numValue()
                  )),
                  (this.extraFilterDistance = this.blurRadius),
                  (this.apply = function (t, n, r, a, o) {
                    void 0 !== i.canvasRGBA
                      ? ((t.canvas.id = e.UniqueId()),
                        (t.canvas.style.display = "none"),
                        document.body.appendChild(t.canvas),
                        i.canvasRGBA(t.canvas.id, n, r, a, o, this.blurRadius),
                        document.body.removeChild(t.canvas))
                      : e.log(
                          "ERROR: StackBlur.js must be included for blur to work"
                        );
                  });
              }),
              (e.Element.feGaussianBlur.prototype =
                new e.Element.ElementBase()),
              (e.Element.title = function (t) {}),
              (e.Element.title.prototype = new e.Element.ElementBase()),
              (e.Element.desc = function (t) {}),
              (e.Element.desc.prototype = new e.Element.ElementBase()),
              (e.Element.MISSING = function (t) {
                e.log(
                  "ERROR: Element '" + t.nodeName + "' not yet implemented."
                );
              }),
              (e.Element.MISSING.prototype = new e.Element.ElementBase()),
              (e.CreateElement = function (t) {
                var n = t.nodeName.replace(/^[^:]+:/, "");
                n = n.replace(/\-/g, "");
                var r = null;
                return (
                  ((r =
                    void 0 !== e.Element[n]
                      ? new e.Element[n](t)
                      : new e.Element.MISSING(t)).type = t.nodeName),
                  r
                );
              }),
              (e.load = function (t, n) {
                e.loadXml(t, e.ajax(n));
              }),
              (e.loadXml = function (t, n) {
                e.loadXmlDoc(t, e.parseXml(n));
              }),
              (e.loadXmlDoc = function (t, n) {
                e.init(t);
                var r = function (e) {
                  for (var n = t.canvas; n; )
                    (e.x -= n.offsetLeft),
                      (e.y -= n.offsetTop),
                      (n = n.offsetParent);
                  return (
                    window.scrollX && (e.x += window.scrollX),
                    window.scrollY && (e.y += window.scrollY),
                    e
                  );
                };
                1 != e.opts.ignoreMouse &&
                  ((t.canvas.onclick = function (t) {
                    var n = r(
                      new e.Point(
                        null != t ? t.clientX : event.clientX,
                        null != t ? t.clientY : event.clientY
                      )
                    );
                    e.Mouse.onclick(n.x, n.y);
                  }),
                  (t.canvas.onmousemove = function (t) {
                    var n = r(
                      new e.Point(
                        null != t ? t.clientX : event.clientX,
                        null != t ? t.clientY : event.clientY
                      )
                    );
                    e.Mouse.onmousemove(n.x, n.y);
                  }));
                var i = e.CreateElement(n.documentElement);
                (i.root = !0), i.addStylesFromStyleDefinition();
                var a = !0,
                  o = function () {
                    e.ViewPort.Clear(),
                      t.canvas.parentNode &&
                        e.ViewPort.SetCurrent(
                          t.canvas.parentNode.clientWidth,
                          t.canvas.parentNode.clientHeight
                        ),
                      1 != e.opts.ignoreDimensions &&
                        (i.style("width").hasValue() &&
                          ((t.canvas.width = i.style("width").toPixels("x")),
                          (t.canvas.style.width = t.canvas.width + "px")),
                        i.style("height").hasValue() &&
                          ((t.canvas.height = i.style("height").toPixels("y")),
                          (t.canvas.style.height = t.canvas.height + "px")));
                    var r = t.canvas.clientWidth || t.canvas.width,
                      o = t.canvas.clientHeight || t.canvas.height;
                    if (
                      (1 == e.opts.ignoreDimensions &&
                        i.style("width").hasValue() &&
                        i.style("height").hasValue() &&
                        ((r = i.style("width").toPixels("x")),
                        (o = i.style("height").toPixels("y"))),
                      e.ViewPort.SetCurrent(r, o),
                      null != e.opts.offsetX &&
                        (i.attribute("x", !0).value = e.opts.offsetX),
                      null != e.opts.offsetY &&
                        (i.attribute("y", !0).value = e.opts.offsetY),
                      null != e.opts.scaleWidth || null != e.opts.scaleHeight)
                    ) {
                      var s = null,
                        l = null,
                        u = e.ToNumberArray(i.attribute("viewBox").value);
                      null != e.opts.scaleWidth &&
                        (i.attribute("width").hasValue()
                          ? (s =
                              i.attribute("width").toPixels("x") /
                              e.opts.scaleWidth)
                          : isNaN(u[2]) || (s = u[2] / e.opts.scaleWidth)),
                        null != e.opts.scaleHeight &&
                          (i.attribute("height").hasValue()
                            ? (l =
                                i.attribute("height").toPixels("y") /
                                e.opts.scaleHeight)
                            : isNaN(u[3]) || (l = u[3] / e.opts.scaleHeight)),
                        null == s && (s = l),
                        null == l && (l = s),
                        (i.attribute("width", !0).value = e.opts.scaleWidth),
                        (i.attribute("height", !0).value = e.opts.scaleHeight),
                        (i.style("transform", !0, !0).value +=
                          " scale(" + 1 / s + "," + 1 / l + ")");
                    }
                    1 != e.opts.ignoreClear && t.clearRect(0, 0, r, o),
                      i.render(t),
                      a &&
                        ((a = !1),
                        "function" == typeof e.opts.renderCallback &&
                          e.opts.renderCallback(n));
                  },
                  s = !0;
                e.ImagesLoaded() && ((s = !1), o()),
                  (e.intervalID = setInterval(function () {
                    var t = !1;
                    if (
                      (s && e.ImagesLoaded() && ((s = !1), (t = !0)),
                      1 != e.opts.ignoreMouse && (t |= e.Mouse.hasEvents()),
                      1 != e.opts.ignoreAnimation)
                    )
                      for (var n = 0; n < e.Animations.length; n++)
                        t |= e.Animations[n].update(1e3 / e.FRAMERATE);
                    "function" == typeof e.opts.forceRedraw &&
                      1 == e.opts.forceRedraw() &&
                      (t = !0),
                      t && (o(), e.Mouse.runEvents());
                  }, 1e3 / e.FRAMERATE));
              }),
              (e.stop = function () {
                e.intervalID && clearInterval(e.intervalID);
              }),
              (e.Mouse = new (function () {
                (this.events = []),
                  (this.hasEvents = function () {
                    return 0 != this.events.length;
                  }),
                  (this.onclick = function (t, e) {
                    this.events.push({
                      type: "onclick",
                      x: t,
                      y: e,
                      run: function (t) {
                        t.onclick && t.onclick();
                      },
                    });
                  }),
                  (this.onmousemove = function (t, e) {
                    this.events.push({
                      type: "onmousemove",
                      x: t,
                      y: e,
                      run: function (t) {
                        t.onmousemove && t.onmousemove();
                      },
                    });
                  }),
                  (this.eventElements = []),
                  (this.checkPath = function (t, e) {
                    for (var n = 0; n < this.events.length; n++) {
                      var r = this.events[n];
                      e.isPointInPath &&
                        e.isPointInPath(r.x, r.y) &&
                        (this.eventElements[n] = t);
                    }
                  }),
                  (this.checkBoundingBox = function (t, e) {
                    for (var n = 0; n < this.events.length; n++) {
                      var r = this.events[n];
                      e.isPointInBox(r.x, r.y) && (this.eventElements[n] = t);
                    }
                  }),
                  (this.runEvents = function () {
                    e.ctx.canvas.style.cursor = "";
                    for (var t = 0; t < this.events.length; t++)
                      for (
                        var n = this.events[t], r = this.eventElements[t];
                        r;

                      )
                        n.run(r), (r = r.parent);
                    (this.events = []), (this.eventElements = []);
                  });
              })()),
              e
            );
          })(n || {});
          (1 == t.childNodes.length && "OBJECT" == t.childNodes[0].nodeName) ||
            (t.svg = s);
          var l = t.getContext("2d");
          void 0 !== e.documentElement
            ? s.loadXmlDoc(l, e)
            : "<" == e.substr(0, 1)
            ? s.loadXml(l, e)
            : s.load(l, e);
        } else
          for (
            var u = document.querySelectorAll("svg"), h = 0;
            h < u.length;
            h++
          ) {
            var c = u[h],
              f = document.createElement("canvas");
            (f.width = c.clientWidth),
              (f.height = c.clientHeight),
              c.parentNode.insertBefore(f, c),
              c.parentNode.removeChild(c);
            var m = document.createElement("div");
            m.appendChild(c), a(f, m.innerHTML);
          }
      }
      function o(t) {
        var e = [0, 0, 0],
          n = function (n, r) {
            var i = t.match(n);
            null != i && ((e[r] += i.length), (t = t.replace(n, " ")));
          };
        return (
          (t = (t = t.replace(/:not\(([^\)]*)\)/g, "     $1 ")).replace(
            /{[^]*/gm,
            " "
          )),
          n(/(\[[^\]]+\])/g, 1),
          n(/(#[^\s\+>~\.\[:]+)/g, 0),
          n(/(\.[^\s\+>~\.\[:]+)/g, 1),
          n(
            /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
            2
          ),
          n(/(:[\w-]+\([^\)]*\))/gi, 1),
          n(/(:[^\s\+>~\.\[:]+)/g, 1),
          (t = (t = t.replace(/[\*\s\+>~]/g, " ")).replace(/[#\.]/g, " ")),
          n(/([^\s\+>~\.\[:]+)/g, 2),
          e.join("")
        );
      }
      t.exports = a;
    },
    function (t, e) {
      t.exports = function (t) {
        (this.ok = !1),
          (this.alpha = 1),
          "#" == t.charAt(0) && (t = t.substr(1, 6)),
          (t = (t = t.replace(/ /g, "")).toLowerCase());
        var e = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dodgerblue: "1e90ff",
          feldspar: "d19275",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgrey: "d3d3d3",
          lightgreen: "90ee90",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslateblue: "8470ff",
          lightslategray: "778899",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "00ff00",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "ff00ff",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370d8",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "d87093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          red: "ff0000",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          violetred: "d02090",
          wheat: "f5deb3",
          white: "ffffff",
          whitesmoke: "f5f5f5",
          yellow: "ffff00",
          yellowgreen: "9acd32",
        };
        t = e[t] || t;
        for (
          var n = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
                process: function (t) {
                  return [
                    parseInt(t[1]),
                    parseInt(t[2]),
                    parseInt(t[3]),
                    parseFloat(t[4]),
                  ];
                },
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function (t) {
                  return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
                },
              },
              {
                re: /^(\w{2})(\w{2})(\w{2})$/,
                example: ["#00ff00", "336699"],
                process: function (t) {
                  return [
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    parseInt(t[3], 16),
                  ];
                },
              },
              {
                re: /^(\w{1})(\w{1})(\w{1})$/,
                example: ["#fb0", "f0f"],
                process: function (t) {
                  return [
                    parseInt(t[1] + t[1], 16),
                    parseInt(t[2] + t[2], 16),
                    parseInt(t[3] + t[3], 16),
                  ];
                },
              },
            ],
            r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r].re,
            a = n[r].process,
            o = i.exec(t);
          if (o) {
            var s = a(o);
            (this.r = s[0]),
              (this.g = s[1]),
              (this.b = s[2]),
              s.length > 3 && (this.alpha = s[3]),
              (this.ok = !0);
          }
        }
        (this.r =
          this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g =
            this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b =
            this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha =
            this.alpha < 0
              ? 0
              : this.alpha > 1 || isNaN(this.alpha)
              ? 1
              : this.alpha),
          (this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
          }),
          (this.toRGBA = function () {
            return (
              "rgba(" +
              this.r +
              ", " +
              this.g +
              ", " +
              this.b +
              ", " +
              this.alpha +
              ")"
            );
          }),
          (this.toHex = function () {
            var t = this.r.toString(16),
              e = this.g.toString(16),
              n = this.b.toString(16);
            return (
              1 == t.length && (t = "0" + t),
              1 == e.length && (e = "0" + e),
              1 == n.length && (n = "0" + n),
              "#" + t + e + n
            );
          }),
          (this.getHelpXML = function () {
            for (var t = new Array(), r = 0; r < n.length; r++)
              for (var i = n[r].example, a = 0; a < i.length; a++)
                t[t.length] = i[a];
            for (var o in e) t[t.length] = o;
            var s = document.createElement("ul");
            s.setAttribute("id", "rgbcolor-examples");
            for (r = 0; r < t.length; r++)
              try {
                var l = document.createElement("li"),
                  u = new RGBColor(t[r]),
                  h = document.createElement("div");
                (h.style.cssText =
                  "margin: 3px; border: 1px solid black; background:" +
                  u.toHex() +
                  "; color:" +
                  u.toHex()),
                  h.appendChild(document.createTextNode("test"));
                var c = document.createTextNode(
                  " " + t[r] + " -> " + u.toRGB() + " -> " + u.toHex()
                );
                l.appendChild(h), l.appendChild(c), s.appendChild(l);
              } catch (t) {}
            return s;
          });
      };
    },
    function (t, e) {
      var n = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        r = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function i() {
        (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      }
      t.exports = function (t, e, a, o) {
        if (!(isNaN(o) || o < 1)) {
          var s,
            l,
            u,
            h,
            c,
            f,
            m,
            d,
            p,
            v,
            g,
            y,
            b,
            x,
            w,
            k,
            S,
            E,
            M,
            T,
            _,
            N,
            P,
            C,
            O = (o |= 0) + o + 1,
            A = e - 1,
            B = a - 1,
            z = o + 1,
            R = (z * (z + 1)) / 2,
            D = new i(),
            I = D;
          for (u = 1; u < O; u++)
            if (((I = I.next = new i()), u == z)) var V = I;
          I.next = D;
          var L = null,
            j = null;
          m = f = 0;
          var q = n[o],
            F = r[o];
          for (l = 0; l < a; l++) {
            for (
              k = S = E = M = d = p = v = g = 0,
                y = z * (T = t[f]),
                b = z * (_ = t[f + 1]),
                x = z * (N = t[f + 2]),
                w = z * (P = t[f + 3]),
                d += R * T,
                p += R * _,
                v += R * N,
                g += R * P,
                I = D,
                u = 0;
              u < z;
              u++
            )
              (I.r = T), (I.g = _), (I.b = N), (I.a = P), (I = I.next);
            for (u = 1; u < z; u++)
              (h = f + ((A < u ? A : u) << 2)),
                (d += (I.r = T = t[h]) * (C = z - u)),
                (p += (I.g = _ = t[h + 1]) * C),
                (v += (I.b = N = t[h + 2]) * C),
                (g += (I.a = P = t[h + 3]) * C),
                (k += T),
                (S += _),
                (E += N),
                (M += P),
                (I = I.next);
            for (L = D, j = V, s = 0; s < e; s++)
              (t[f + 3] = P = (g * q) >> F),
                0 != P
                  ? ((P = 255 / P),
                    (t[f] = ((d * q) >> F) * P),
                    (t[f + 1] = ((p * q) >> F) * P),
                    (t[f + 2] = ((v * q) >> F) * P))
                  : (t[f] = t[f + 1] = t[f + 2] = 0),
                (d -= y),
                (p -= b),
                (v -= x),
                (g -= w),
                (y -= L.r),
                (b -= L.g),
                (x -= L.b),
                (w -= L.a),
                (h = (m + ((h = s + o + 1) < A ? h : A)) << 2),
                (d += k += L.r = t[h]),
                (p += S += L.g = t[h + 1]),
                (v += E += L.b = t[h + 2]),
                (g += M += L.a = t[h + 3]),
                (L = L.next),
                (y += T = j.r),
                (b += _ = j.g),
                (x += N = j.b),
                (w += P = j.a),
                (k -= T),
                (S -= _),
                (E -= N),
                (M -= P),
                (j = j.next),
                (f += 4);
            m += e;
          }
          for (s = 0; s < e; s++) {
            for (
              S = E = M = k = p = v = g = d = 0,
                y = z * (T = t[(f = s << 2)]),
                b = z * (_ = t[f + 1]),
                x = z * (N = t[f + 2]),
                w = z * (P = t[f + 3]),
                d += R * T,
                p += R * _,
                v += R * N,
                g += R * P,
                I = D,
                u = 0;
              u < z;
              u++
            )
              (I.r = T), (I.g = _), (I.b = N), (I.a = P), (I = I.next);
            for (c = e, u = 1; u <= o; u++)
              (f = (c + s) << 2),
                (d += (I.r = T = t[f]) * (C = z - u)),
                (p += (I.g = _ = t[f + 1]) * C),
                (v += (I.b = N = t[f + 2]) * C),
                (g += (I.a = P = t[f + 3]) * C),
                (k += T),
                (S += _),
                (E += N),
                (M += P),
                (I = I.next),
                u < B && (c += e);
            for (f = s, L = D, j = V, l = 0; l < a; l++)
              (t[3 + (h = f << 2)] = P = (g * q) >> F),
                P > 0
                  ? ((P = 255 / P),
                    (t[h] = ((d * q) >> F) * P),
                    (t[h + 1] = ((p * q) >> F) * P),
                    (t[h + 2] = ((v * q) >> F) * P))
                  : (t[h] = t[h + 1] = t[h + 2] = 0),
                (d -= y),
                (p -= b),
                (v -= x),
                (g -= w),
                (y -= L.r),
                (b -= L.g),
                (x -= L.b),
                (w -= L.a),
                (h = (s + ((h = l + z) < B ? h : B) * e) << 2),
                (d += k += L.r = t[h]),
                (p += S += L.g = t[h + 1]),
                (v += E += L.b = t[h + 2]),
                (g += M += L.a = t[h + 3]),
                (L = L.next),
                (y += T = j.r),
                (b += _ = j.g),
                (x += N = j.b),
                (w += P = j.a),
                (k -= T),
                (S -= _),
                (E -= N),
                (M -= P),
                (j = j.next),
                (f += e);
          }
        }
      };
    },
    function (t, e, n) {
      function r(t) {
        this.options = t || { locator: {} };
      }
      function i() {
        this.cdata = !1;
      }
      function a(t, e) {
        (e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber);
      }
      function o(t) {
        if (t)
          return (
            "\n@" +
            (t.systemId || "") +
            "#[line:" +
            t.lineNumber +
            ",col:" +
            t.columnNumber +
            "]"
          );
      }
      function s(t, e, n) {
        return "string" == typeof t
          ? t.substr(e, n)
          : t.length >= e + n || e
          ? new java.lang.String(t, e, n) + ""
          : t;
      }
      function l(t, e) {
        t.currentElement
          ? t.currentElement.appendChild(e)
          : t.doc.appendChild(e);
      }
      (r.prototype.parseFromString = function (t, e) {
        var n = this.options,
          r = new u(),
          a = n.domBuilder || new i(),
          s = n.errorHandler,
          l = n.locator,
          h = n.xmlns || {},
          c = { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" };
        return (
          l && a.setDocumentLocator(l),
          (r.errorHandler = (function (t, e, n) {
            if (!t) {
              if (e instanceof i) return e;
              t = e;
            }
            var r = {},
              a = t instanceof Function;
            function s(e) {
              var i = t[e];
              !i &&
                a &&
                (i =
                  2 == t.length
                    ? function (n) {
                        t(e, n);
                      }
                    : t),
                (r[e] =
                  (i &&
                    function (t) {
                      i("[xmldom " + e + "]\t" + t + o(n));
                    }) ||
                  function () {});
            }
            return (n = n || {}), s("warning"), s("error"), s("fatalError"), r;
          })(s, a, l)),
          (r.domBuilder = n.domBuilder || a),
          /\/x?html?$/.test(e) &&
            ((c.nbsp = " "),
            (c.copy = "©"),
            (h[""] = "http://www.w3.org/1999/xhtml")),
          (h.xml = h.xml || "http://www.w3.org/XML/1998/namespace"),
          t ? r.parse(t, h, c) : r.errorHandler.error("invalid doc source"),
          a.doc
        );
      }),
        (i.prototype = {
          startDocument: function () {
            (this.doc = new h().createDocument(null, null, null)),
              this.locator && (this.doc.documentURI = this.locator.systemId);
          },
          startElement: function (t, e, n, r) {
            var i = this.doc,
              o = i.createElementNS(t, n || e),
              s = r.length;
            l(this, o),
              (this.currentElement = o),
              this.locator && a(this.locator, o);
            for (var u = 0; u < s; u++) {
              t = r.getURI(u);
              var h = r.getValue(u),
                c = ((n = r.getQName(u)), i.createAttributeNS(t, n));
              this.locator && a(r.getLocator(u), c),
                (c.value = c.nodeValue = h),
                o.setAttributeNode(c);
            }
          },
          endElement: function (t, e, n) {
            var r = this.currentElement;
            r.tagName;
            this.currentElement = r.parentNode;
          },
          startPrefixMapping: function (t, e) {},
          endPrefixMapping: function (t) {},
          processingInstruction: function (t, e) {
            var n = this.doc.createProcessingInstruction(t, e);
            this.locator && a(this.locator, n), l(this, n);
          },
          ignorableWhitespace: function (t, e, n) {},
          characters: function (t, e, n) {
            if ((t = s.apply(this, arguments))) {
              if (this.cdata) var r = this.doc.createCDATASection(t);
              else r = this.doc.createTextNode(t);
              this.currentElement
                ? this.currentElement.appendChild(r)
                : /^\s*$/.test(t) && this.doc.appendChild(r),
                this.locator && a(this.locator, r);
            }
          },
          skippedEntity: function (t) {},
          endDocument: function () {
            this.doc.normalize();
          },
          setDocumentLocator: function (t) {
            (this.locator = t) && (t.lineNumber = 0);
          },
          comment: function (t, e, n) {
            t = s.apply(this, arguments);
            var r = this.doc.createComment(t);
            this.locator && a(this.locator, r), l(this, r);
          },
          startCDATA: function () {
            this.cdata = !0;
          },
          endCDATA: function () {
            this.cdata = !1;
          },
          startDTD: function (t, e, n) {
            var r = this.doc.implementation;
            if (r && r.createDocumentType) {
              var i = r.createDocumentType(t, e, n);
              this.locator && a(this.locator, i), l(this, i);
            }
          },
          warning: function (t) {
            console.warn("[xmldom warning]\t" + t, o(this.locator));
          },
          error: function (t) {
            console.error("[xmldom error]\t" + t, o(this.locator));
          },
          fatalError: function (t) {
            throw (
              (console.error("[xmldom fatalError]\t" + t, o(this.locator)), t)
            );
          },
        }),
        "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
          /\w+/g,
          function (t) {
            i.prototype[t] = function () {
              return null;
            };
          }
        );
      var u = n(26).XMLReader,
        h = (e.DOMImplementation = n(5).DOMImplementation);
      (e.XMLSerializer = n(5).XMLSerializer), (e.DOMParser = r);
    },
    function (t, e) {
      var n =
          /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        r = new RegExp(
          "[\\-\\.0-9" +
            n.source.slice(1, -1) +
            "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"
        ),
        i = new RegExp(
          "^" + n.source + r.source + "*(?::" + n.source + r.source + "*)?$"
        ),
        a = 0,
        o = 1,
        s = 2,
        l = 3,
        u = 4,
        h = 5,
        c = 6,
        f = 7;
      function m() {}
      function d(t, e) {
        return (
          (e.lineNumber = t.lineNumber), (e.columnNumber = t.columnNumber), e
        );
      }
      function p(t, e, n, r, i, m) {
        for (var d, p = ++e, v = a; ; ) {
          var g = t.charAt(p);
          switch (g) {
            case "=":
              if (v === o) (d = t.slice(e, p)), (v = l);
              else {
                if (v !== s)
                  throw new Error("attribute equal must after attrName");
                v = l;
              }
              break;
            case "'":
            case '"':
              if (v === l || v === o) {
                if (
                  (v === o &&
                    (m.warning('attribute value must after "="'),
                    (d = t.slice(e, p))),
                  (e = p + 1),
                  !((p = t.indexOf(g, e)) > 0))
                )
                  throw new Error("attribute value no end '" + g + "' match");
                (y = t.slice(e, p).replace(/&#?\w+;/g, i)),
                  n.add(d, y, e - 1),
                  (v = h);
              } else {
                if (v != u) throw new Error('attribute value must after "="');
                (y = t.slice(e, p).replace(/&#?\w+;/g, i)),
                  n.add(d, y, e),
                  m.warning(
                    'attribute "' + d + '" missed start quot(' + g + ")!!"
                  ),
                  (e = p + 1),
                  (v = h);
              }
              break;
            case "/":
              switch (v) {
                case a:
                  n.setTagName(t.slice(e, p));
                case h:
                case c:
                case f:
                  (v = f), (n.closed = !0);
                case u:
                case o:
                case s:
                  break;
                default:
                  throw new Error("attribute invalid close char('/')");
              }
              break;
            case "":
              return (
                m.error("unexpected end of input"),
                v == a && n.setTagName(t.slice(e, p)),
                p
              );
            case ">":
              switch (v) {
                case a:
                  n.setTagName(t.slice(e, p));
                case h:
                case c:
                case f:
                  break;
                case u:
                case o:
                  "/" === (y = t.slice(e, p)).slice(-1) &&
                    ((n.closed = !0), (y = y.slice(0, -1)));
                case s:
                  v === s && (y = d),
                    v == u
                      ? (m.warning('attribute "' + y + '" missed quot(")!!'),
                        n.add(d, y.replace(/&#?\w+;/g, i), e))
                      : (("http://www.w3.org/1999/xhtml" === r[""] &&
                          y.match(/^(?:disabled|checked|selected)$/i)) ||
                          m.warning(
                            'attribute "' +
                              y +
                              '" missed value!! "' +
                              y +
                              '" instead!!'
                          ),
                        n.add(y, y, e));
                  break;
                case l:
                  throw new Error("attribute value missed!!");
              }
              return p;
            case "":
              g = " ";
            default:
              if (g <= " ")
                switch (v) {
                  case a:
                    n.setTagName(t.slice(e, p)), (v = c);
                    break;
                  case o:
                    (d = t.slice(e, p)), (v = s);
                    break;
                  case u:
                    var y = t.slice(e, p).replace(/&#?\w+;/g, i);
                    m.warning('attribute "' + y + '" missed quot(")!!'),
                      n.add(d, y, e);
                  case h:
                    v = c;
                }
              else
                switch (v) {
                  case s:
                    n.tagName;
                    ("http://www.w3.org/1999/xhtml" === r[""] &&
                      d.match(/^(?:disabled|checked|selected)$/i)) ||
                      m.warning(
                        'attribute "' +
                          d +
                          '" missed value!! "' +
                          d +
                          '" instead2!!'
                      ),
                      n.add(d, d, e),
                      (e = p),
                      (v = o);
                    break;
                  case h:
                    m.warning('attribute space is required"' + d + '"!!');
                  case c:
                    (v = o), (e = p);
                    break;
                  case l:
                    (v = u), (e = p);
                    break;
                  case f:
                    throw new Error(
                      "elements closed character '/' and '>' must be connected to"
                    );
                }
          }
          p++;
        }
      }
      function v(t, e, n) {
        for (var r = t.tagName, i = null, a = t.length; a--; ) {
          var o = t[a],
            s = o.qName,
            l = o.value;
          if ((f = s.indexOf(":")) > 0)
            var u = (o.prefix = s.slice(0, f)),
              h = s.slice(f + 1),
              c = "xmlns" === u && h;
          else (h = s), (u = null), (c = "xmlns" === s && "");
          (o.localName = h),
            !1 !== c &&
              (null == i && ((i = {}), b(n, (n = {}))),
              (n[c] = i[c] = l),
              (o.uri = "http://www.w3.org/2000/xmlns/"),
              e.startPrefixMapping(c, l));
        }
        for (a = t.length; a--; ) {
          (u = (o = t[a]).prefix) &&
            ("xml" === u && (o.uri = "http://www.w3.org/XML/1998/namespace"),
            "xmlns" !== u && (o.uri = n[u || ""]));
        }
        var f;
        (f = r.indexOf(":")) > 0
          ? ((u = t.prefix = r.slice(0, f)), (h = t.localName = r.slice(f + 1)))
          : ((u = null), (h = t.localName = r));
        var m = (t.uri = n[u || ""]);
        if ((e.startElement(m, h, r, t), !t.closed))
          return (t.currentNSMap = n), (t.localNSMap = i), !0;
        if ((e.endElement(m, h, r), i)) for (u in i) e.endPrefixMapping(u);
      }
      function g(t, e, n, r, i) {
        if (/^(?:script|textarea)$/i.test(n)) {
          var a = t.indexOf("</" + n + ">", e),
            o = t.substring(e + 1, a);
          if (/[&<]/.test(o))
            return /^script$/i.test(n)
              ? (i.characters(o, 0, o.length), a)
              : ((o = o.replace(/&#?\w+;/g, r)),
                i.characters(o, 0, o.length),
                a);
        }
        return e + 1;
      }
      function y(t, e, n, r) {
        var i = r[n];
        return (
          null == i &&
            ((i = t.lastIndexOf("</" + n + ">")) < e &&
              (i = t.lastIndexOf("</" + n)),
            (r[n] = i)),
          i < e
        );
      }
      function b(t, e) {
        for (var n in t) e[n] = t[n];
      }
      function x(t, e, n, r) {
        switch (t.charAt(e + 2)) {
          case "-":
            return "-" === t.charAt(e + 3)
              ? (i = t.indexOf("--\x3e", e + 4)) > e
                ? (n.comment(t, e + 4, i - e - 4), i + 3)
                : (r.error("Unclosed comment"), -1)
              : -1;
          default:
            if ("CDATA[" == t.substr(e + 3, 6)) {
              var i = t.indexOf("]]>", e + 9);
              return (
                n.startCDATA(),
                n.characters(t, e + 9, i - e - 9),
                n.endCDATA(),
                i + 3
              );
            }
            var a = (function (t, e) {
                var n,
                  r = [],
                  i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                (i.lastIndex = e), i.exec(t);
                for (; (n = i.exec(t)); ) if ((r.push(n), n[1])) return r;
              })(t, e),
              o = a.length;
            if (o > 1 && /!doctype/i.test(a[0][0])) {
              var s = a[1][0],
                l = o > 3 && /^public$/i.test(a[2][0]) && a[3][0],
                u = o > 4 && a[4][0],
                h = a[o - 1];
              return (
                n.startDTD(
                  s,
                  l && l.replace(/^(['"])(.*?)\1$/, "$2"),
                  u && u.replace(/^(['"])(.*?)\1$/, "$2")
                ),
                n.endDTD(),
                h.index + h[0].length
              );
            }
        }
        return -1;
      }
      function w(t, e, n) {
        var r = t.indexOf("?>", e);
        if (r) {
          var i = t.substring(e, r).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
          if (i) {
            i[0].length;
            return n.processingInstruction(i[1], i[2]), r + 2;
          }
          return -1;
        }
        return -1;
      }
      function k(t) {}
      function S(t, e) {
        return (t.__proto__ = e), t;
      }
      (m.prototype = {
        parse: function (t, e, n) {
          var r = this.domBuilder;
          r.startDocument(),
            b(e, (e = {})),
            (function (t, e, n, r, i) {
              function a(t) {
                var e = t.slice(1, -1);
                return e in n
                  ? n[e]
                  : "#" === e.charAt(0)
                  ? (function (t) {
                      if (t > 65535) {
                        var e = 55296 + ((t -= 65536) >> 10),
                          n = 56320 + (1023 & t);
                        return String.fromCharCode(e, n);
                      }
                      return String.fromCharCode(t);
                    })(parseInt(e.substr(1).replace("x", "0x")))
                  : (i.error("entity not found:" + t), t);
              }
              function o(e) {
                if (e > b) {
                  var n = t.substring(b, e).replace(/&#?\w+;/g, a);
                  c && s(b), r.characters(n, 0, e - b), (b = e);
                }
              }
              function s(e, n) {
                for (; e >= u && (n = h.exec(t)); )
                  (l = n.index), (u = l + n[0].length), c.lineNumber++;
                c.columnNumber = e - l + 1;
              }
              var l = 0,
                u = 0,
                h = /.*(?:\r\n?|\n)|.*$/g,
                c = r.locator,
                f = [{ currentNSMap: e }],
                m = {},
                b = 0;
              for (;;) {
                try {
                  var S = t.indexOf("<", b);
                  if (S < 0) {
                    if (!t.substr(b).match(/^\s*$/)) {
                      var E = r.doc,
                        M = E.createTextNode(t.substr(b));
                      E.appendChild(M), (r.currentElement = M);
                    }
                    return;
                  }
                  switch ((S > b && o(S), t.charAt(S + 1))) {
                    case "/":
                      var T = t.indexOf(">", S + 3),
                        _ = t.substring(S + 2, T),
                        N = f.pop();
                      T < 0
                        ? ((_ = t.substring(S + 2).replace(/[\s<].*/, "")),
                          i.error(
                            "end tag name: " +
                              _ +
                              " is not complete:" +
                              N.tagName
                          ),
                          (T = S + 1 + _.length))
                        : _.match(/\s</) &&
                          ((_ = _.replace(/[\s<].*/, "")),
                          i.error("end tag name: " + _ + " maybe not complete"),
                          (T = S + 1 + _.length));
                      var P = N.localNSMap,
                        C = N.tagName == _,
                        O =
                          C ||
                          (N.tagName &&
                            N.tagName.toLowerCase() == _.toLowerCase());
                      if (O) {
                        if ((r.endElement(N.uri, N.localName, _), P))
                          for (var A in P) r.endPrefixMapping(A);
                        C ||
                          i.fatalError(
                            "end tag name: " +
                              _ +
                              " is not match the current start tagName:" +
                              N.tagName
                          );
                      } else f.push(N);
                      T++;
                      break;
                    case "?":
                      c && s(S), (T = w(t, S, r));
                      break;
                    case "!":
                      c && s(S), (T = x(t, S, r, i));
                      break;
                    default:
                      c && s(S);
                      var B = new k(),
                        z = f[f.length - 1].currentNSMap,
                        T = p(t, S, B, z, a, i),
                        R = B.length;
                      if (
                        (!B.closed &&
                          y(t, T, B.tagName, m) &&
                          ((B.closed = !0),
                          n.nbsp || i.warning("unclosed xml attribute")),
                        c && R)
                      ) {
                        for (var D = d(c, {}), I = 0; I < R; I++) {
                          var V = B[I];
                          s(V.offset), (V.locator = d(c, {}));
                        }
                        (r.locator = D),
                          v(B, r, z) && f.push(B),
                          (r.locator = c);
                      } else v(B, r, z) && f.push(B);
                      "http://www.w3.org/1999/xhtml" !== B.uri || B.closed
                        ? T++
                        : (T = g(t, T, B.tagName, a, r));
                  }
                } catch (t) {
                  i.error("element parse error: " + t), (T = -1);
                }
                T > b ? (b = T) : o(Math.max(S, b) + 1);
              }
            })(t, e, n, r, this.errorHandler),
            r.endDocument();
        },
      }),
        (k.prototype = {
          setTagName: function (t) {
            if (!i.test(t)) throw new Error("invalid tagName:" + t);
            this.tagName = t;
          },
          add: function (t, e, n) {
            if (!i.test(t)) throw new Error("invalid attribute:" + t);
            this[this.length++] = { qName: t, value: e, offset: n };
          },
          length: 0,
          getLocalName: function (t) {
            return this[t].localName;
          },
          getLocator: function (t) {
            return this[t].locator;
          },
          getQName: function (t) {
            return this[t].qName;
          },
          getURI: function (t) {
            return this[t].uri;
          },
          getValue: function (t) {
            return this[t].value;
          },
        }),
        S({}, S.prototype) instanceof S ||
          (S = function (t, e) {
            function n() {}
            for (e in ((n.prototype = e), (n = new n()), t)) n[e] = t[e];
            return n;
          }),
        (e.XMLReader = m);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.EVENTS = void 0);
      var r = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        i = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(n(4)),
        a = n(28);
      var o = (e.EVENTS = {
          PRE_RENDER: "pre-render",
          POST_RENDER: "post-render",
        }),
        s = window.PIXI || { Container: function () {} },
        l = (function (t) {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
            var r = (function (t, e) {
              if (!t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !e || ("object" != typeof e && "function" != typeof e)
                ? t
                : e;
            })(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
            return (
              (r._eventEmitter = new s.utils.EventEmitter()),
              (r._latex = t),
              (r._ids = {}),
              (r._classes = {}),
              (r._options = n),
              r._render(),
              r
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof e
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                e &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(t, e)
                    : (t.__proto__ = e));
            })(e, s.Container),
            r(e, [
              {
                key: "getObjectsByClass",
                value: function (t) {
                  var e = void 0;
                  return (
                    this._classes[t] &&
                      ((e = []),
                      this._classes[t].forEach(function (t) {
                        e = e.concat(t);
                      })),
                    e
                  );
                },
              },
              {
                key: "getObjectsByClassSeparated",
                value: function (t) {
                  return this._classes[t];
                },
              },
              {
                key: "_render",
                value: function () {
                  this._eventEmitter.emit(o.PRE_RENDER);
                  var t = new i.default(this._latex, this._options).build();
                  (this._classes = (0, a.convertAndGetClasses)(
                    t.rootNode,
                    this
                  )),
                    this._setWidgetBoundsAndBaseline(t.attributes),
                    this._eventEmitter.emit(o.POST_RENDER);
                },
              },
              {
                key: "_setWidgetBoundsAndBaseline",
                value: function (t) {
                  var e = t.strutBounds;
                  (this._baselineHeight = t.baselineHeight), (this.y = e.y);
                },
              },
              {
                key: "latex",
                set: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  this.removeChildren(), (this._latex = t), this._render();
                },
                get: function () {
                  return this._latex;
                },
              },
              {
                key: "classes",
                get: function () {
                  return this._classes;
                },
              },
              {
                key: "ids",
                get: function () {
                  throw new Error("Not yet implemented.");
                },
              },
              {
                key: "distanceToBaseline",
                get: function () {
                  return this._baselineHeight;
                },
              },
            ]),
            e
          );
        })();
      e.default = l;
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.convertAndGetClasses = function (t, e) {
          var n = {};
          return (
            (function t(e, n, a) {
              e instanceof r.ContainerNode
                ? e.nodes.forEach(function (e) {
                    t(e, n, a);
                  })
                : (function (t, e, n) {
                    if ("HPaddingNode" !== t.type) {
                      var r = void 0;
                      switch (t.type) {
                        case "VerticalLineNode":
                          r = (function (t) {
                            var e = t.getBounds(),
                              n = e.x,
                              r = e.y,
                              a = e.width,
                              o = e.height,
                              s = new i.Graphics();
                            return (
                              s.beginFill(t.color),
                              s.drawRect(0, -o, a, o),
                              (s.x = n),
                              (s.y = r),
                              s
                            );
                          })(t);
                          break;
                        case "TextNode":
                          r = (function (t, e) {
                            var n = t.getBounds(),
                              r = n.x,
                              a = n.y,
                              o = t.font.split(" "),
                              s = +o[2].replace(/px/gi, ""),
                              l = new i.TextStyle({
                                fontFamily: o[3],
                                fontSize: s,
                                fontStyle: o[0],
                                fontWeight: o[1],
                                fill: [t.color],
                                padding: 40,
                              }),
                              u = new i.Text(t.text, l);
                            return (
                              u.anchor.set(0, 0.8), (u.x = r), (u.y = a), u
                            );
                          })(t);
                          break;
                        case "SvgNode":
                          r = (function (t) {
                            var e = t.getBounds(),
                              n = e.x,
                              r = e.y,
                              a = e.height,
                              o = new XMLSerializer(),
                              s = t.virtualHtmlNode.toNode(),
                              l = o.serializeToString(s),
                              u = new i.Texture.fromImage(
                                "data:image/svg+xml;charset=utf8," + l
                              ),
                              h = new i.Sprite(u);
                            return (h.x = n), (h.y = r - a), h;
                          })(t);
                          break;
                        case "HorizontalLineNode":
                          r = (function (t) {
                            var e = t.getBounds(),
                              n = e.width,
                              r = e.height,
                              a = e.x,
                              o = e.y,
                              s = new i.Graphics();
                            return (
                              s.beginFill(t.color),
                              s.drawRect(0, -r, n, r),
                              (s.x = a),
                              (s.y = o),
                              s
                            );
                          })(t);
                          break;
                        case "BoxNode":
                          r = (function (t) {
                            var e = t.getBounds(),
                              n = e.x,
                              r = e.y,
                              a = e.width,
                              o = e.height,
                              s = new i.Graphics(),
                              l = t.backgroundColor,
                              u = t.borderColor,
                              h = t.borderWidth;
                            return (
                              null !== l && s.beginFill(l),
                              s.lineStyle(h, u),
                              s.drawRect(0, 0, a, o),
                              (s.x = n),
                              (s.y = r - o),
                              s
                            );
                          })(t);
                          break;
                        default:
                          throw new Error(
                            "Node " + t.type + " is not a renderable node."
                          );
                      }
                      e.addChild(r),
                        (function (t, e, n) {
                          t.classes.forEach(function (t) {
                            n[t.name] || (n[t.name] = []),
                              n[t.name][t.index] || (n[t.name][t.index] = []),
                              n[t.name][t.index].push(e);
                          });
                        })(t, r, n);
                    }
                  })(e, n, a);
            })(t, e, n),
            n
          );
        });
      var r = n(0),
        i = window.PIXI;
    },
  ]);
});
