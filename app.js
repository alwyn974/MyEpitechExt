!function (t) {
    var r = {};

    function n(e) {
        if (r[e]) return r[e].exports;
        var o = r[e] = {i: e, l: !1, exports: {}};
        return t[e].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = r, n.d = function (t, r, e) {
        n.o(t, r) || Object.defineProperty(t, r, {enumerable: !0, get: e})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, r) {
        if (1 & r && (t = n(t)), 8 & r) return t;
        if (4 & r && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (n.r(e), Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        }), 2 & r && "string" != typeof t) for (var o in t) n.d(e, o, function (r) {
            return t[r]
        }.bind(null, o));
        return e
    }, n.n = function (t) {
        var r = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(r, "a", r), r
    }, n.o = function (t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }, n.p = "", n(n.s = 0)
}([function (t, r, n) {
    t.exports = n(1)
}, function (t, r, n) {
    "use strict";
    var e = n(2), o = document.getElementById("app-body");
    e.Student.Main.embed(o, argosFlags)
}, function (t, r, n) {
    var e;
    (function () {
        "use strict";

        function n(t) {
            function r(r) {
                return function (n) {
                    return t(r, n)
                }
            }

            return r.arity = 2, r.func = t, r
        }

        function o(t) {
            function r(r) {
                return function (n) {
                    return function (e) {
                        return t(r, n, e)
                    }
                }
            }

            return r.arity = 3, r.func = t, r
        }

        function c(t) {
            function r(r) {
                return function (n) {
                    return function (e) {
                        return function (o) {
                            return t(r, n, e, o)
                        }
                    }
                }
            }

            return r.arity = 4, r.func = t, r
        }

        function u(t) {
            function r(r) {
                return function (n) {
                    return function (e) {
                        return function (o) {
                            return function (c) {
                                return t(r, n, e, o, c)
                            }
                        }
                    }
                }
            }

            return r.arity = 5, r.func = t, r
        }

        function i(t) {
            function r(r) {
                return function (n) {
                    return function (e) {
                        return function (o) {
                            return function (c) {
                                return function (u) {
                                    return t(r, n, e, o, c, u)
                                }
                            }
                        }
                    }
                }
            }

            return r.arity = 6, r.func = t, r
        }

        function _(t) {
            function r(r) {
                return function (n) {
                    return function (e) {
                        return function (o) {
                            return function (c) {
                                return function (u) {
                                    return function (i) {
                                        return t(r, n, e, o, c, u, i)
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return r.arity = 7, r.func = t, r
        }

        function a(t) {
            function r(r) {
                return function (n) {
                    return function (e) {
                        return function (o) {
                            return function (c) {
                                return function (u) {
                                    return function (i) {
                                        return function (_) {
                                            return t(r, n, e, o, c, u, i, _)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return r.arity = 8, r.func = t, r
        }

        function f(t) {
            function r(r) {
                return function (n) {
                    return function (e) {
                        return function (o) {
                            return function (c) {
                                return function (u) {
                                    return function (i) {
                                        return function (_) {
                                            return function (a) {
                                                return t(r, n, e, o, c, u, i, _, a)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return r.arity = 9, r.func = t, r
        }

        function l(t, r, n) {
            return 2 === t.arity ? t.func(r, n) : t(r)(n)
        }

        function s(t, r, n, e) {
            return 3 === t.arity ? t.func(r, n, e) : t(r)(n)(e)
        }

        function d(t, r, n, e, o) {
            return 4 === t.arity ? t.func(r, n, e, o) : t(r)(n)(e)(o)
        }

        function p(t, r, n, e, o, c) {
            return 5 === t.arity ? t.func(r, n, e, o, c) : t(r)(n)(e)(o)(c)
        }

        function h(t, r, n, e, o, c, u) {
            return 6 === t.arity ? t.func(r, n, e, o, c, u) : t(r)(n)(e)(o)(c)(u)
        }

        function v(t, r, n, e, o, c, u, i) {
            return 7 === t.arity ? t.func(r, n, e, o, c, u, i) : t(r)(n)(e)(o)(c)(u)(i)
        }

        function m(t, r, n, e, o, c, u, i, _) {
            return 8 === t.arity ? t.func(r, n, e, o, c, u, i, _) : t(r)(n)(e)(o)(c)(u)(i)(_)
        }

        var g = function () {
            var t = 32, r = 2, e = {ctor: "_Array", height: 0, table: []};

            function c(r, n) {
                var e = r.height;
                if (n.length === e) {
                    var o = {ctor: "_Array", height: e + 1, table: [], lengths: []};
                    n.push(o)
                }
                n[e].table.push(r);
                var u = g(r);
                n[e].lengths.length > 0 && (u += n[e].lengths[n[e].lengths.length - 1]), n[e].lengths.push(u), n[e].table.length === t && (c(n[e], n), n[e] = {
                    ctor: "_Array",
                    height: e + 1,
                    table: [],
                    lengths: []
                })
            }

            function u(t, r) {
                var n = t.table.length - 1;
                t.table[n] = r, t.lengths[n] = g(r), t.lengths[n] += n > 0 ? t.lengths[n - 1] : 0
            }

            function i(t, r) {
                if (r.table.length > 0) {
                    t.table[0] = r, t.lengths[0] = g(r);
                    for (var n = g(t.table[0]), e = 1; e < t.lengths.length; e++) n += g(t.table[e]), t.lengths[e] = n
                } else {
                    t.table.shift();
                    for (e = 1; e < t.lengths.length; e++) t.lengths[e] = t.lengths[e] - t.lengths[0];
                    t.lengths.shift()
                }
            }

            function _(r, n) {
                for (var e = 0, o = 0; o < r.table.length; o++) e += r.table[o].table.length;
                for (o = 0; o < n.table.length; o++) e += n.table[o].table.length;
                return r.table.length + n.table.length - (Math.floor((e - 1) / t) + 1)
            }

            function a(t, r, n) {
                return n < t.length ? t[n] : r[n - t.length]
            }

            function f(t, r, n, e) {
                n < t.length ? t[n] = e : r[n - t.length] = e
            }

            function s(t, r, n, e) {
                f(t.table, r.table, n, e);
                var o = 0 === n || n === t.lengths.length ? 0 : a(t.lengths, t.lengths, n - 1);
                f(t.lengths, r.lengths, n, o + g(e))
            }

            function d(t, r) {
                r < 0 && (r = 0);
                var n = {ctor: "_Array", height: t, table: new Array(r)};
                return t > 0 && (n.lengths = new Array(r)), n
            }

            function p(r, n, e) {
                for (var o = d(r.height, Math.min(t, r.table.length + n.table.length - e)), c = d(r.height, o.table.length - (r.table.length + n.table.length - e)), u = 0; a(r.table, n.table, u).table.length % t == 0;) f(o.table, c.table, u, a(r.table, n.table, u)), f(o.lengths, c.lengths, u, a(r.lengths, n.lengths, u)), u++;
                for (var i = u, _ = new d(r.height - 1, 0), l = 0; u - i - (_.table.length > 0 ? 1 : 0) < e;) {
                    var p = a(r.table, n.table, u), h = Math.min(t - _.table.length, p.table.length);
                    if (_.table = _.table.concat(p.table.slice(l, h)), _.height > 0) for (var v = _.lengths.length, m = v; m < v + h - l; m++) _.lengths[m] = g(_.table[m]), _.lengths[m] += m > 0 ? _.lengths[m - 1] : 0;
                    l += h, p.table.length <= h && (u++, l = 0), _.table.length === t && (s(o, c, i, _), _ = d(r.height - 1, 0), i++)
                }
                for (_.table.length > 0 && (s(o, c, i, _), i++); u < r.table.length + n.table.length;) s(o, c, i, a(r.table, n.table, u)), u++, i++;
                return [o, c]
            }

            function h(t) {
                return t.table[t.table.length - 1]
            }

            function v(t) {
                return t.table[0]
            }

            function m(t) {
                var r = {ctor: "_Array", height: t.height, table: t.table.slice()};
                return t.height > 0 && (r.lengths = t.lengths.slice()), r
            }

            function g(t) {
                return 0 === t.height ? t.table.length : t.lengths[t.lengths.length - 1]
            }

            function b(t, r) {
                for (var n = t >> 5 * r.height; r.lengths[n] <= t;) n++;
                return n
            }

            function y(t, r) {
                return 0 === r ? {ctor: "_Array", height: 0, table: [t]} : {
                    ctor: "_Array",
                    height: r,
                    table: [y(t, r - 1)],
                    lengths: [1]
                }
            }

            function T(t, r) {
                return r === t.height ? t : {ctor: "_Array", height: r, table: [T(t, r - 1)], lengths: [g(t)]}
            }

            function w(t, r) {
                return {ctor: "_Array", height: t.height + 1, table: [t, r], lengths: [g(t), g(t) + g(r)]}
            }

            return {
                empty: e, fromList: function (r) {
                    if ("[]" === r.ctor) return e;
                    for (var n = new Array(t), o = [], u = 0; "[]" !== r.ctor;) n[u] = r._0, r = r._1, ++u === t && (c({
                        ctor: "_Array",
                        height: 0,
                        table: n
                    }, o), n = new Array(t), u = 0);
                    u > 0 && c({ctor: "_Array", height: 0, table: n.splice(0, u)}, o);
                    for (var i = 0; i < o.length - 1; i++) o[i].table.length > 0 && c(o[i], o);
                    var _ = o[o.length - 1];
                    return _.height > 0 && 1 === _.table.length ? _.table[0] : _
                }, toList: function (t) {
                    return function t(r, n) {
                        for (var e = n.table.length - 1; e >= 0; e--) r = 0 === n.height ? nt.Cons(n.table[e], r) : t(r, n.table[e]);
                        return r
                    }(nt.Nil, t)
                }, initialize: n(function (r, n) {
                    return r <= 0 ? e : function r(n, e, o, c) {
                        if (0 === e) {
                            for (var u = new Array((c - o) % (t + 1)), i = 0; i < u.length; i++) u[i] = n(o + i);
                            return {ctor: "_Array", height: 0, table: u}
                        }
                        for (var _ = Math.pow(t, e), u = new Array(Math.ceil((c - o) / _)), a = new Array(u.length), i = 0; i < u.length; i++) u[i] = r(n, e - 1, o + i * _, Math.min(o + (i + 1) * _, c)), a[i] = g(u[i]) + (i > 0 ? a[i - 1] : 0);
                        return {ctor: "_Array", height: e, table: u, lengths: a}
                    }(n, Math.floor(Math.log(r) / Math.log(t)), 0, r)
                }), append: n(function (n, e) {
                    if (0 === n.table.length) return e;
                    if (0 === e.table.length) return n;
                    var o = function t(n, e) {
                        if (0 === n.height && 0 === e.height) return [n, e];
                        if (1 !== n.height || 1 !== e.height) if (n.height === e.height) {
                            n = m(n), e = m(e);
                            var o = t(h(n), v(e));
                            u(n, o[1]), i(e, o[0])
                        } else if (n.height > e.height) {
                            n = m(n);
                            var o = t(h(n), e);
                            u(n, o[0]), e = T(o[1], o[1].height + 1)
                        } else {
                            e = m(e);
                            var o = t(n, v(e)), c = 0 === o[0].table.length ? 0 : 1, a = 0 === c ? 1 : 0;
                            i(e, o[c]), n = T(o[a], o[a].height + 1)
                        }
                        if (0 === n.table.length || 0 === e.table.length) return [n, e];
                        var f = _(n, e);
                        return f <= r ? [n, e] : p(n, e, f)
                    }(n, e);
                    if (o[0].table.length + o[1].table.length <= t) {
                        if (0 === o[0].table.length) return o[1];
                        if (0 === o[1].table.length) return o[0];
                        if (o[0].table = o[0].table.concat(o[1].table), o[0].height > 0) {
                            for (var c = g(o[0]), a = 0; a < o[1].lengths.length; a++) o[1].lengths[a] += c;
                            o[0].lengths = o[0].lengths.concat(o[1].lengths)
                        }
                        return o[0]
                    }
                    if (o[0].height > 0) {
                        var f = _(n, e);
                        f > r && (o = p(o[0], o[1], f))
                    }
                    return w(o[0], o[1])
                }), push: n(function (r, n) {
                    var e = function r(n, e) {
                        if (0 === e.height) {
                            if (e.table.length < t) {
                                var o = {ctor: "_Array", height: 0, table: e.table.slice()};
                                return o.table.push(n), o
                            }
                            return null
                        }
                        var c = r(n, h(e));
                        if (null !== c) {
                            var o = m(e);
                            return o.table[o.table.length - 1] = c, o.lengths[o.lengths.length - 1]++, o
                        }
                        if (e.table.length < t) {
                            var u = y(n, e.height - 1), o = m(e);
                            return o.table.push(u), o.lengths.push(o.lengths[o.lengths.length - 1] + g(u)), o
                        }
                        return null
                    }(r, n);
                    return null !== e ? e : w(n, y(r, n.height))
                }), slice: o(function (t, r, n) {
                    return t < 0 && (t += g(n)), r < 0 && (r += g(n)), function t(r, n) {
                        if (0 === r) return n;
                        if (0 === n.height) {
                            var e = {ctor: "_Array", height: 0};
                            return e.table = n.table.slice(r, n.table.length + 1), e
                        }
                        var o = b(r, n), c = t(r - (o > 0 ? n.lengths[o - 1] : 0), n.table[o]);
                        if (o === n.table.length - 1) return c;
                        var e = {
                            ctor: "_Array",
                            height: n.height,
                            table: n.table.slice(o, n.table.length + 1),
                            lengths: new Array(n.table.length - o)
                        };
                        e.table[0] = c;
                        for (var u = 0, i = 0; i < e.table.length; i++) u += g(e.table[i]), e.lengths[i] = u;
                        return e
                    }(t, function t(r, n) {
                        if (r === g(n)) return n;
                        if (0 === n.height) {
                            var e = {ctor: "_Array", height: 0};
                            return e.table = n.table.slice(0, r), e
                        }
                        var o = b(r, n), c = t(r - (o > 0 ? n.lengths[o - 1] : 0), n.table[o]);
                        if (0 === o) return c;
                        var e = {
                            ctor: "_Array",
                            height: n.height,
                            table: n.table.slice(0, o),
                            lengths: n.lengths.slice(0, o)
                        };
                        return c.table.length > 0 && (e.table[o] = c, e.lengths[o] = g(c) + (o > 0 ? e.lengths[o - 1] : 0)), e
                    }(r, n))
                }), get: n(function (t, r) {
                    if (t < 0 || t >= g(r)) throw new Error("Index " + t + " is out of range. Check the length of your array first or use getMaybe or getWithDefault.");
                    return function (t, r) {
                        for (var n = r.height; n > 0; n--) {
                            for (var e = t >> 5 * n; r.lengths[e] <= t;) e++;
                            e > 0 && (t -= r.lengths[e - 1]), r = r.table[e]
                        }
                        return r.table[t]
                    }(t, r)
                }), set: o(function (t, r, n) {
                    return t < 0 || g(n) <= t ? n : function t(r, n, e) {
                        if (0 === (e = m(e)).height) e.table[r] = n; else {
                            var o = b(r, e);
                            o > 0 && (r -= e.lengths[o - 1]), e.table[o] = t(r, n, e.table[o])
                        }
                        return e
                    }(t, r, n)
                }), map: n(function t(r, n) {
                    var e = {ctor: "_Array", height: n.height, table: new Array(n.table.length)};
                    n.height > 0 && (e.lengths = n.lengths);
                    for (var o = 0; o < n.table.length; o++) e.table[o] = 0 === n.height ? r(n.table[o]) : t(r, n.table[o]);
                    return e
                }), indexedMap: n(function (t, r) {
                    return function t(r, n, e) {
                        var o = {ctor: "_Array", height: n.height, table: new Array(n.table.length)};
                        n.height > 0 && (o.lengths = n.lengths);
                        for (var c = 0; c < n.table.length; c++) o.table[c] = 0 === n.height ? l(r, e + c, n.table[c]) : t(r, n.table[c], 0 == c ? e : e + n.lengths[c - 1]);
                        return o
                    }(t, r, 0)
                }), foldl: o(function t(r, n, e) {
                    if (0 === e.height) for (var o = 0; o < e.table.length; o++) n = l(r, e.table[o], n); else for (o = 0; o < e.table.length; o++) n = t(r, n, e.table[o]);
                    return n
                }), foldr: o(function t(r, n, e) {
                    if (0 === e.height) for (var o = e.table.length; o--;) n = l(r, e.table[o], n); else for (o = e.table.length; o--;) n = t(r, n, e.table[o]);
                    return n
                }), length: g, toJSArray: function (t) {
                    var r = new Array(g(t));
                    return function t(r, n, e) {
                        for (var o = 0; o < e.table.length; o++) if (0 === e.height) r[n + o] = e.table[o]; else {
                            var c = 0 === o ? 0 : e.lengths[o - 1];
                            t(r, n + c, e.table[o])
                        }
                    }(r, 0, t), r
                }, fromJSArray: function (r) {
                    return 0 === r.length ? e : function r(n, e, o, c) {
                        if (0 === e) return {ctor: "_Array", height: 0, table: n.slice(o, c)};
                        for (var u = Math.pow(t, e), i = new Array(Math.ceil((c - o) / u)), _ = new Array(i.length), a = 0; a < i.length; a++) i[a] = r(n, e - 1, o + a * u, Math.min(o + (a + 1) * u, c)), _[a] = g(i[a]) + (a > 0 ? _[a - 1] : 0);
                        return {ctor: "_Array", height: e, table: i, lengths: _}
                    }(r, Math.floor(Math.log(r.length) / Math.log(t)), 0, r.length)
                }
            }
        }(), b = function () {
            var t = ["LT", "EQ", "GT"];
            return {
                div: n(function (t, r) {
                    return t / r | 0
                }),
                rem: n(function (t, r) {
                    return t % r
                }),
                mod: n(function t(r, n) {
                    if (0 === n) throw new Error("Cannot perform mod 0. Division by zero error.");
                    var e = r % n, o = 0 === r ? 0 : n > 0 ? r >= 0 ? e : e + n : -t(-r, -n);
                    return o === n ? 0 : o
                }),
                pi: Math.PI,
                e: Math.E,
                cos: Math.cos,
                sin: Math.sin,
                tan: Math.tan,
                acos: Math.acos,
                asin: Math.asin,
                atan: Math.atan,
                atan2: n(Math.atan2),
                degrees: function (t) {
                    return t * Math.PI / 180
                },
                turns: function (t) {
                    return 2 * Math.PI * t
                },
                fromPolar: function (t) {
                    var r = t._0, n = t._1;
                    return y.Tuple2(r * Math.cos(n), r * Math.sin(n))
                },
                toPolar: function (t) {
                    var r = t._0, n = t._1;
                    return y.Tuple2(Math.sqrt(r * r + n * n), Math.atan2(n, r))
                },
                sqrt: Math.sqrt,
                logBase: n(function (t, r) {
                    return Math.log(r) / Math.log(t)
                }),
                negate: function (t) {
                    return -t
                },
                abs: function (t) {
                    return t < 0 ? -t : t
                },
                min: n(function (t, r) {
                    return y.cmp(t, r) < 0 ? t : r
                }),
                max: n(function (t, r) {
                    return y.cmp(t, r) > 0 ? t : r
                }),
                clamp: o(function (t, r, n) {
                    return y.cmp(n, t) < 0 ? t : y.cmp(n, r) > 0 ? r : n
                }),
                compare: n(function (r, n) {
                    return {ctor: t[y.cmp(r, n) + 1]}
                }),
                xor: n(function (t, r) {
                    return t !== r
                }),
                not: function (t) {
                    return !t
                },
                truncate: function (t) {
                    return 0 | t
                },
                ceiling: Math.ceil,
                floor: Math.floor,
                round: Math.round,
                toFloat: function (t) {
                    return t
                },
                isNaN: isNaN,
                isInfinite: function (t) {
                    return t === 1 / 0 || t === -1 / 0
                }
            }
        }(), y = function () {
            function t(r, n, e, o) {
                if (e > 100) return o.push({x: r, y: n}), !0;
                if (r === n) return !0;
                if ("object" != typeof r) {
                    if ("function" == typeof r) throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
                    return !1
                }
                if (null === r || null === n) return !1;
                if (r instanceof Date) return r.getTime() === n.getTime();
                if (!("ctor" in r)) {
                    for (var c in r) if (!t(r[c], n[c], e + 1, o)) return !1;
                    return !0
                }
                if ("RBNode_elm_builtin" !== r.ctor && "RBEmpty_elm_builtin" !== r.ctor || (r = Fr(r), n = Fr(n)), "Set_elm_builtin" === r.ctor && (r = Qo(r), n = Qo(n)), "::" === r.ctor) {
                    for (var u = r, i = n; "::" === u.ctor && "::" === i.ctor;) {
                        if (!t(u._0, i._0, e + 1, o)) return !1;
                        u = u._1, i = i._1
                    }
                    return u.ctor === i.ctor
                }
                if ("_Array" === r.ctor) {
                    var _ = g.toJSArray(r), a = g.toJSArray(n);
                    if (_.length !== a.length) return !1;
                    for (var f = 0; f < _.length; f++) if (!t(_[f], a[f], e + 1, o)) return !1;
                    return !0
                }
                if (!t(r.ctor, n.ctor, e + 1, o)) return !1;
                for (var c in r) if (!t(r[c], n[c], e + 1, o)) return !1;
                return !0
            }

            var r = -1, e = 0, o = 1;
            var c = 0;
            var u = {ctor: "[]"};

            function i(t, r) {
                return {ctor: "::", _0: t, _1: r}
            }

            function _(t) {
                return t.start.line == t.end.line ? "on line " + t.start.line : "between lines " + t.start.line + " and " + t.end.line
            }

            function a(t) {
                var r = typeof t;
                if ("function" === r) return "<function>";
                if ("boolean" === r) return t ? "True" : "False";
                if ("number" === r) return t + "";
                if (t instanceof String) return "'" + f(t, !0) + "'";
                if ("string" === r) return '"' + f(t, !1) + '"';
                if (null === t) return "null";
                if ("object" === r && "ctor" in t) {
                    var n = t.ctor.substring(0, 5);
                    if ("_Tupl" === n) {
                        var e = [];
                        for (var o in t) "ctor" !== o && e.push(a(t[o]));
                        return "(" + e.join(",") + ")"
                    }
                    if ("_Task" === n) return "<task>";
                    if ("_Array" === t.ctor) return "Array.fromList " + a(Wt(t));
                    if ("<decoder>" === t.ctor) return "<decoder>";
                    if ("_Process" === t.ctor) return "<process:" + t.id + ">";
                    if ("::" === t.ctor) {
                        e = "[" + a(t._0);
                        for (t = t._1; "::" === t.ctor;) e += "," + a(t._0), t = t._1;
                        return e + "]"
                    }
                    if ("[]" === t.ctor) return "[]";
                    if ("Set_elm_builtin" === t.ctor) return "Set.fromList " + a(Qo(t));
                    if ("RBNode_elm_builtin" === t.ctor || "RBEmpty_elm_builtin" === t.ctor) return "Dict.fromList " + a(Fr(t));
                    e = "";
                    for (var c in t) if ("ctor" !== c) {
                        var u = a(t[c]), i = u[0];
                        e += " " + ("{" === i || "(" === i || "<" === i || '"' === i || u.indexOf(" ") < 0 ? u : "(" + u + ")")
                    }
                    return t.ctor + e
                }
                if ("object" === r) {
                    if (t instanceof Date) return "<" + t.toString() + ">";
                    if (t.elm_web_socket) return "<websocket>";
                    e = [];
                    for (var o in t) e.push(o + " = " + a(t[o]));
                    return 0 === e.length ? "{}" : "{ " + e.join(", ") + " }"
                }
                return "<internal structure>"
            }

            function f(t, r) {
                var n = t.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
                return r ? n.replace(/\'/g, "\\'") : n.replace(/\"/g, '\\"')
            }

            return {
                eq: function (r, n) {
                    for (var e, o = [], c = t(r, n, 0, o); c && (e = o.pop());) c = t(e.x, e.y, 0, o);
                    return c
                }, cmp: function t(n, c) {
                    if ("object" != typeof n) return n === c ? e : n < c ? r : o;
                    if (n instanceof String) {
                        var u = n.valueOf(), i = c.valueOf();
                        return u === i ? e : u < i ? r : o
                    }
                    if ("::" === n.ctor || "[]" === n.ctor) {
                        for (; "::" === n.ctor && "::" === c.ctor;) {
                            if ((_ = t(n._0, c._0)) !== e) return _;
                            n = n._1, c = c._1
                        }
                        return n.ctor === c.ctor ? e : "[]" === n.ctor ? r : o
                    }
                    if ("_Tuple" === n.ctor.slice(0, 6)) {
                        var _, a = n.ctor.slice(6) - 0;
                        if (0 === a) return e;
                        if (a >= 1) {
                            if ((_ = t(n._0, c._0)) !== e) return _;
                            if (a >= 2) {
                                if ((_ = t(n._1, c._1)) !== e) return _;
                                if (a >= 3) {
                                    if ((_ = t(n._2, c._2)) !== e) return _;
                                    if (a >= 4) {
                                        if ((_ = t(n._3, c._3)) !== e) return _;
                                        if (a >= 5) {
                                            if ((_ = t(n._4, c._4)) !== e) return _;
                                            if (a >= 6) {
                                                if ((_ = t(n._5, c._5)) !== e) return _;
                                                if (a >= 7) throw new Error("Comparison error: cannot compare tuples with more than 6 elements.")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        return e
                    }
                    throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.")
                }, Tuple0: {ctor: "_Tuple0"}, Tuple2: function (t, r) {
                    return {ctor: "_Tuple2", _0: t, _1: r}
                }, chr: function (t) {
                    return new String(t)
                }, update: function (t, r) {
                    var n = {};
                    for (var e in t) n[e] = t[e];
                    for (var e in r) n[e] = r[e];
                    return n
                }, guid: function (t) {
                    return c++
                }, append: n(function (t, r) {
                    if ("string" == typeof t) return t + r;
                    if ("[]" === t.ctor) return r;
                    var n = i(t._0, u), e = n;
                    for (t = t._1; "[]" !== t.ctor;) e._1 = i(t._0, u), t = t._1, e = e._1;
                    return e._1 = r, n
                }), crash: function (t, r) {
                    return function (n) {
                        throw new Error("Ran into a `Debug.crash` in module `" + t + "` " + _(r) + "\nThe message provided by the code author is:\n\n    " + n)
                    }
                }, crashCase: function (t, r, n) {
                    return function (e) {
                        throw new Error("Ran into a `Debug.crash` in module `" + t + "`\n\nThis was caused by the `case` expression " + _(r) + ".\nOne of the branches ended with a crash and the following value got through:\n\n    " + a(n) + "\n\nThe message provided by the code author is:\n\n    " + e)
                    }
                }, toString: a
            }
        }(), T = n(function (t, r) {
            var n = r;
            return l(t, n._0, n._1)
        }), w = o(function (t, r, n) {
            return t({ctor: "_Tuple2", _0: r, _1: n})
        }), k = o(function (t, r, n) {
            return l(t, n, r)
        }), x = n(function (t, r) {
            return t
        }), S = function (t) {
            return t
        };
        (z = z || {})["<|"] = n(function (t, r) {
            return t(r)
        }), (z = z || {})["|>"] = n(function (t, r) {
            return r(t)
        }), (z = z || {})[">>"] = o(function (t, r, n) {
            return r(t(n))
        }), (z = z || {})["<<"] = o(function (t, r, n) {
            return t(r(n))
        }), (z = z || {})["++"] = y.append;
        var M = y.toString, N = b.isInfinite, B = b.isNaN, R = b.toFloat, O = b.ceiling, A = b.floor, C = b.truncate,
            E = b.round;
        b.not, b.xor;
        (z = z || {})["||"] = b.or, (z = z || {})["&&"] = b.and;
        var L = b.max, q = b.min, D = b.compare;
        (z = z || {})[">="] = b.ge, (z = z || {})["<="] = b.le, (z = z || {})[">"] = b.gt, (z = z || {})["<"] = b.lt, (z = z || {})["/="] = b.neq, (z = z || {})["=="] = b.eq;
        b.e;
        var I = b.pi, F = b.clamp, P = b.logBase, J = b.abs, j = b.negate, U = b.sqrt,
            H = (b.atan2, b.atan, b.asin, b.acos, b.tan, b.sin), W = b.cos;
        (z = z || {})["^"] = b.exp, (z = z || {})["%"] = b.mod;
        var z, G = b.rem;
        (z = z || {})["//"] = b.div, (z = z || {})["/"] = b.floatDiv, (z = z || {})["*"] = b.mul, (z = z || {})["-"] = b.sub, (z = z || {})["+"] = b.add;
        b.toPolar, b.fromPolar, b.turns, b.degrees;
        var Y = {ctor: "GT"}, V = {ctor: "EQ"}, Q = {ctor: "LT"}, X = n(function (t, r) {
            var n = r;
            return "Just" === n.ctor ? n._0 : t
        }), Z = {ctor: "Nothing"}, K = n(function (t, r) {
            var n = r;
            return "Just" === n.ctor ? t(n._0) : Z
        }), $ = function (t) {
            return {ctor: "Just", _0: t}
        }, tt = n(function (t, r) {
            var n = r;
            return "Just" === n.ctor ? $(t(n._0)) : Z
        }), rt = o(function (t, r, n) {
            var e = {ctor: "_Tuple2", _0: r, _1: n};
            return "_Tuple2" === e.ctor && "Just" === e._0.ctor && "Just" === e._1.ctor ? $(l(t, e._0._0, e._1._0)) : Z
        }), nt = (c(function (t, r, n, e) {
            var o = {ctor: "_Tuple3", _0: r, _1: n, _2: e};
            return "_Tuple3" === o.ctor && "Just" === o._0.ctor && "Just" === o._1.ctor && "Just" === o._2.ctor ? $(s(t, o._0._0, o._1._0, o._2._0)) : Z
        }), u(function (t, r, n, e, o) {
            var c = {ctor: "_Tuple4", _0: r, _1: n, _2: e, _3: o};
            return "_Tuple4" === c.ctor && "Just" === c._0.ctor && "Just" === c._1.ctor && "Just" === c._2.ctor && "Just" === c._3.ctor ? $(d(t, c._0._0, c._1._0, c._2._0, c._3._0)) : Z
        }), i(function (t, r, n, e, o, c) {
            var u = {ctor: "_Tuple5", _0: r, _1: n, _2: e, _3: o, _4: c};
            return "_Tuple5" === u.ctor && "Just" === u._0.ctor && "Just" === u._1.ctor && "Just" === u._2.ctor && "Just" === u._3.ctor && "Just" === u._4.ctor ? $(p(t, u._0._0, u._1._0, u._2._0, u._3._0, u._4._0)) : Z
        }), function () {
            var t = {ctor: "[]"};

            function r(t, r) {
                return {ctor: "::", _0: t, _1: r}
            }

            function e(n) {
                for (var e = t, o = n.length; o--;) e = r(n[o], e);
                return e
            }

            function _(t) {
                for (var r = []; "[]" !== t.ctor;) r.push(t._0), t = t._1;
                return r
            }

            return {
                Nil: t, Cons: r, cons: n(r), toArray: _, fromArray: e, foldr: o(function (t, r, n) {
                    for (var e = _(n), o = r, c = e.length; c--;) o = l(t, e[c], o);
                    return o
                }), map2: o(function (t, r, n) {
                    for (var o = []; "[]" !== r.ctor && "[]" !== n.ctor;) o.push(l(t, r._0, n._0)), r = r._1, n = n._1;
                    return e(o)
                }), map3: c(function (t, r, n, o) {
                    for (var c = []; "[]" !== r.ctor && "[]" !== n.ctor && "[]" !== o.ctor;) c.push(s(t, r._0, n._0, o._0)), r = r._1, n = n._1, o = o._1;
                    return e(c)
                }), map4: u(function (t, r, n, o, c) {
                    for (var u = []; "[]" !== r.ctor && "[]" !== n.ctor && "[]" !== o.ctor && "[]" !== c.ctor;) u.push(d(t, r._0, n._0, o._0, c._0)), r = r._1, n = n._1, o = o._1, c = c._1;
                    return e(u)
                }), map5: i(function (t, r, n, o, c, u) {
                    for (var i = []; "[]" !== r.ctor && "[]" !== n.ctor && "[]" !== o.ctor && "[]" !== c.ctor && "[]" !== u.ctor;) i.push(p(t, r._0, n._0, o._0, c._0, u._0)), r = r._1, n = n._1, o = o._1, c = c._1, u = u._1;
                    return e(i)
                }), sortBy: n(function (t, r) {
                    return e(_(r).sort(function (r, n) {
                        return y.cmp(t(r), t(n))
                    }))
                }), sortWith: n(function (t, r) {
                    return e(_(r).sort(function (r, n) {
                        var e = t(r)(n).ctor;
                        return "EQ" === e ? 0 : "LT" === e ? -1 : 1
                    }))
                })
            }
        }()), et = nt.sortWith, ot = nt.sortBy, ct = n(function (t, r) {
            for (; ;) {
                if (y.cmp(t, 0) < 1) return r;
                var n = r;
                if ("[]" === n.ctor) return r;
                t = t - 1, r = n._1
            }
        }), ut = nt.map5, it = nt.map4, _t = nt.map3, at = nt.map2, ft = n(function (t, r) {
            for (; ;) {
                var n = r;
                if ("[]" === n.ctor) return !1;
                if (t(n._0)) return !0;
                t = t, r = n._1
            }
        }), lt = (n(function (t, r) {
            return !l(ft, function (r) {
                return !t(r)
            }, r)
        }), nt.foldr), st = o(function (t, r, n) {
            for (; ;) {
                var e = n;
                if ("[]" === e.ctor) return r;
                var o = t, c = l(t, e._0, r);
                t = o, r = c, n = e._1
            }
        }), dt = function (t) {
            return s(st, n(function (t, r) {
                return r + 1
            }), 0, t)
        }, pt = n(function (t, r) {
            return l(ft, function (r) {
                return y.eq(r, t)
            }, r)
        }), ht = function (t) {
            return "[]" === t.ctor
        }, vt = function (t) {
            var r = t;
            return "::" === r.ctor ? $(r._1) : Z
        }, mt = function (t) {
            var r = t;
            return "::" === r.ctor ? $(r._0) : Z
        }, gt = gt || {};
        gt["::"] = nt.cons;
        var bt = n(function (t, r) {
                return s(lt, n(function (r, n) {
                    return {ctor: "::", _0: t(r), _1: n}
                }), {ctor: "[]"}, r)
            }), yt = n(function (t, r) {
                var e = n(function (r, n) {
                    return t(r) ? {ctor: "::", _0: r, _1: n} : n
                });
                return s(lt, e, {ctor: "[]"}, r)
            }), Tt = o(function (t, r, n) {
                var e = t(r);
                return "Just" === e.ctor ? {ctor: "::", _0: e._0, _1: n} : n
            }), wt = n(function (t, r) {
                return s(lt, Tt(t), {ctor: "[]"}, r)
            }), kt = function (t) {
                return s(st, n(function (t, r) {
                    return {ctor: "::", _0: t, _1: r}
                }), {ctor: "[]"}, t)
            }, xt = o(function (t, r, e) {
                var o = n(function (r, n) {
                    var e = n;
                    return "::" === e.ctor ? {ctor: "::", _0: l(t, r, e._0), _1: n} : {ctor: "[]"}
                });
                return kt(s(st, o, {ctor: "::", _0: r, _1: {ctor: "[]"}}, e))
            }), St = n(function (t, r) {
                return "[]" === r.ctor ? t : s(lt, n(function (t, r) {
                    return {ctor: "::", _0: t, _1: r}
                }), r, t)
            }), Mt = function (t) {
                return s(lt, St, {ctor: "[]"}, t)
            }, Nt = n(function (t, r) {
                return Mt(l(bt, t, r))
            }), Bt = (n(function (t, r) {
                var e = n(function (r, n) {
                    var e = n, o = e._0, c = e._1;
                    return t(r) ? {ctor: "_Tuple2", _0: {ctor: "::", _0: r, _1: o}, _1: c} : {
                        ctor: "_Tuple2",
                        _0: o,
                        _1: {ctor: "::", _0: r, _1: c}
                    }
                });
                return s(lt, e, {ctor: "_Tuple2", _0: {ctor: "[]"}, _1: {ctor: "[]"}}, r)
            }), n(function (t, r) {
                var e = r;
                if ("[]" === e.ctor) return {ctor: "[]"};
                var o = n(function (r, n) {
                    return {ctor: "::", _0: t, _1: {ctor: "::", _0: r, _1: n}}
                }), c = s(lt, o, {ctor: "[]"}, e._1);
                return {ctor: "::", _0: e._0, _1: c}
            })), Rt = o(function (t, r, n) {
                for (; ;) {
                    if (y.cmp(t, 0) < 1) return n;
                    var e = r;
                    if ("[]" === e.ctor) return n;
                    t = t - 1, r = e._1, n = {ctor: "::", _0: e._0, _1: n}
                }
            }), Ot = n(function (t, r) {
                return kt(s(Rt, t, r, {ctor: "[]"}))
            }), At = o(function (t, r, n) {
                if (y.cmp(r, 0) < 1) return {ctor: "[]"};
                var e = {ctor: "_Tuple2", _0: r, _1: n};
                t:do {
                    r:do {
                        if ("_Tuple2" !== e.ctor) break t;
                        if ("[]" === e._1.ctor) return n;
                        if ("::" !== e._1._1.ctor) {
                            if (1 === e._0) break r;
                            break t
                        }
                        switch (e._0) {
                            case 1:
                                break r;
                            case 2:
                                return {ctor: "::", _0: e._1._0, _1: {ctor: "::", _0: e._1._1._0, _1: {ctor: "[]"}}};
                            case 3:
                                if ("::" === e._1._1._1.ctor) return {
                                    ctor: "::",
                                    _0: e._1._0,
                                    _1: {ctor: "::", _0: e._1._1._0, _1: {ctor: "::", _0: e._1._1._1._0, _1: {ctor: "[]"}}}
                                };
                                break t;
                            default:
                                if ("::" === e._1._1._1.ctor && "::" === e._1._1._1._1.ctor) {
                                    var o = e._1._1._1._0, c = e._1._1._0, u = e._1._0, i = e._1._1._1._1._0,
                                        _ = e._1._1._1._1._1;
                                    return y.cmp(t, 1e3) > 0 ? {
                                        ctor: "::",
                                        _0: u,
                                        _1: {
                                            ctor: "::",
                                            _0: c,
                                            _1: {ctor: "::", _0: o, _1: {ctor: "::", _0: i, _1: l(Ot, r - 4, _)}}
                                        }
                                    } : {
                                        ctor: "::",
                                        _0: u,
                                        _1: {
                                            ctor: "::",
                                            _0: c,
                                            _1: {ctor: "::", _0: o, _1: {ctor: "::", _0: i, _1: s(At, t + 1, r - 4, _)}}
                                        }
                                    }
                                }
                                break t
                        }
                    } while (0);
                    return {ctor: "::", _0: e._1._0, _1: {ctor: "[]"}}
                } while (0);
                return n
            }), Ct = n(function (t, r) {
                return s(At, 0, t, r)
            }), Et = o(function (t, r, n) {
                for (; ;) {
                    if (y.cmp(r, 0) < 1) return t;
                    t = {ctor: "::", _0: n, _1: t}, r = r - 1, n = n
                }
            }), Lt = n(function (t, r) {
                return s(Et, {ctor: "[]"}, t, r)
            }), qt = o(function (t, r, n) {
                for (; ;) {
                    if (!(y.cmp(t, r) < 1)) return n;
                    var e = {ctor: "::", _0: r, _1: n};
                    t = t, r = r - 1, n = e
                }
            }), Dt = n(function (t, r) {
                return s(qt, t, r, {ctor: "[]"})
            }), It = n(function (t, r) {
                return s(at, t, l(Dt, 0, dt(r) - 1), r)
            }), Ft = (g.append, g.length), Pt = (g.slice, g.set, n(function (t, r) {
                return y.cmp(0, t) < 1 && y.cmp(t, g.length(r)) < 0 ? $(l(g.get, t, r)) : Z
            })), Jt = (g.push, g.empty), jt = n(function (t, r) {
                var e = n(function (r, n) {
                    return t(r) ? l(g.push, r, n) : n
                });
                return s(g.foldl, e, g.empty, r)
            }), Ut = (g.foldr, g.foldl, g.indexedMap), Ht = g.map, Wt = g.toList, zt = g.fromList, Gt = g.initialize,
            Yt = (n(function (t, r) {
                return l(Gt, t, x(r))
            }), function () {
                return {
                    crash: function (t) {
                        throw new Error(t)
                    }, log: n(function (t, r) {
                        var n = t + ": " + y.toString(r), e = e || {};
                        return e.stdout ? e.stdout.write(n) : console.log(n), r
                    })
                }
            }()), Vt = function () {
                function t(t, r) {
                    for (var n = ""; t > 0;) 1 & t && (n += r), t >>= 1, r += r;
                    return n
                }

                function r(t) {
                    return rr("could not convert string '" + t + "' to an Int")
                }

                function e(t) {
                    return rr("could not convert string '" + t + "' to a Float")
                }

                return {
                    isEmpty: function (t) {
                        return 0 === t.length
                    }, cons: n(function (t, r) {
                        return t + r
                    }), uncons: function (t) {
                        var r = t[0];
                        return r ? $(y.Tuple2(y.chr(r), t.slice(1))) : Z
                    }, append: n(function (t, r) {
                        return t + r
                    }), concat: function (t) {
                        return nt.toArray(t).join("")
                    }, length: function (t) {
                        return t.length
                    }, map: n(function (t, r) {
                        for (var n = r.split(""), e = n.length; e--;) n[e] = t(y.chr(n[e]));
                        return n.join("")
                    }), filter: n(function (t, r) {
                        return r.split("").map(y.chr).filter(t).join("")
                    }), reverse: function (t) {
                        return t.split("").reverse().join("")
                    }, foldl: o(function (t, r, n) {
                        for (var e = n.length, o = 0; o < e; ++o) r = l(t, y.chr(n[o]), r);
                        return r
                    }), foldr: o(function (t, r, n) {
                        for (var e = n.length; e--;) r = l(t, y.chr(n[e]), r);
                        return r
                    }), split: n(function (t, r) {
                        return nt.fromArray(r.split(t))
                    }), join: n(function (t, r) {
                        return nt.toArray(r).join(t)
                    }), repeat: n(t), slice: o(function (t, r, n) {
                        return n.slice(t, r)
                    }), left: n(function (t, r) {
                        return t < 1 ? "" : r.slice(0, t)
                    }), right: n(function (t, r) {
                        return t < 1 ? "" : r.slice(-t)
                    }), dropLeft: n(function (t, r) {
                        return t < 1 ? r : r.slice(t)
                    }), dropRight: n(function (t, r) {
                        return t < 1 ? r : r.slice(0, -t)
                    }), pad: o(function (r, n, e) {
                        var o = (r - e.length) / 2;
                        return t(Math.ceil(o), n) + e + t(0 | o, n)
                    }), padLeft: o(function (r, n, e) {
                        return t(r - e.length, n) + e
                    }), padRight: o(function (r, n, e) {
                        return e + t(r - e.length, n)
                    }), trim: function (t) {
                        return t.trim()
                    }, trimLeft: function (t) {
                        return t.replace(/^\s+/, "")
                    }, trimRight: function (t) {
                        return t.replace(/\s+$/, "")
                    }, words: function (t) {
                        return nt.fromArray(t.trim().split(/\s+/g))
                    }, lines: function (t) {
                        return nt.fromArray(t.split(/\r\n|\r|\n/g))
                    }, toUpper: function (t) {
                        return t.toUpperCase()
                    }, toLower: function (t) {
                        return t.toLowerCase()
                    }, any: n(function (t, r) {
                        for (var n = r.length; n--;) if (t(y.chr(r[n]))) return !0;
                        return !1
                    }), all: n(function (t, r) {
                        for (var n = r.length; n--;) if (!t(y.chr(r[n]))) return !1;
                        return !0
                    }), contains: n(function (t, r) {
                        return r.indexOf(t) > -1
                    }), startsWith: n(function (t, r) {
                        return 0 === r.indexOf(t)
                    }), endsWith: n(function (t, r) {
                        return r.length >= t.length && r.lastIndexOf(t) === r.length - t.length
                    }), indexes: n(function (t, r) {
                        var n = t.length;
                        if (n < 1) return nt.Nil;
                        for (var e = 0, o = []; (e = r.indexOf(t, e)) > -1;) o.push(e), e += n;
                        return nt.fromArray(o)
                    }), toInt: function (t) {
                        var n = t.length;
                        if (0 === n) return r(t);
                        if ("0" === (o = t[0]) && "x" === t[1]) {
                            for (var e = 2; e < n; ++e) if (!("0" <= (o = t[e]) && o <= "9" || "A" <= o && o <= "F" || "a" <= o && o <= "f")) return r(t);
                            return er(parseInt(t, 16))
                        }
                        if (o > "9" || o < "0" && "-" !== o && "+" !== o) return r(t);
                        for (e = 1; e < n; ++e) {
                            var o;
                            if ((o = t[e]) < "0" || "9" < o) return r(t)
                        }
                        return er(parseInt(t, 10))
                    }, toFloat: function (t) {
                        if (0 === t.length || /[\sxbo]/.test(t)) return e(t);
                        var r = +t;
                        return r == r ? er(r) : e(t)
                    }, toList: function (t) {
                        return nt.fromArray(t.split("").map(y.chr))
                    }, fromList: function (t) {
                        return nt.toArray(t).join("")
                    }
                }
            }(), Qt = {
                fromCode: function (t) {
                    return y.chr(String.fromCharCode(t))
                }, toCode: function (t) {
                    return t.charCodeAt(0)
                }, toUpper: function (t) {
                    return y.chr(t.toUpperCase())
                }, toLower: function (t) {
                    return y.chr(t.toLowerCase())
                }, toLocaleUpper: function (t) {
                    return y.chr(t.toLocaleUpperCase())
                }, toLocaleLower: function (t) {
                    return y.chr(t.toLocaleLowerCase())
                }
            }, Xt = Qt.fromCode, Zt = Qt.toCode, Kt = o(function (t, r, n) {
                var e = Zt(n);
                return y.cmp(e, Zt(t)) > -1 && y.cmp(e, Zt(r)) < 1
            }),
            $t = (l(Kt, y.chr("A"), y.chr("Z")), l(Kt, y.chr("a"), y.chr("z")), l(Kt, y.chr("0"), y.chr("9")), l(Kt, y.chr("0"), y.chr("7")), function (t) {
                var r = t;
                return "Ok" === r.ctor ? $(r._0) : Z
            }), tr = n(function (t, r) {
                var n = r;
                return "Ok" === n.ctor ? n._0 : t
            }), rr = function (t) {
                return {ctor: "Err", _0: t}
            }, nr = n(function (t, r) {
                var n = r;
                return "Ok" === n.ctor ? t(n._0) : rr(n._0)
            }), er = function (t) {
                return {ctor: "Ok", _0: t}
            }, or = n(function (t, r) {
                var n = r;
                return "Ok" === n.ctor ? er(t(n._0)) : rr(n._0)
            }), cr = o(function (t, r, n) {
                var e = {ctor: "_Tuple2", _0: r, _1: n};
                return "Ok" === e._0.ctor ? "Ok" === e._1.ctor ? er(l(t, e._0._0, e._1._0)) : rr(e._1._0) : rr(e._0._0)
            }), ur = (c(function (t, r, n, e) {
                var o = {ctor: "_Tuple3", _0: r, _1: n, _2: e};
                return "Ok" === o._0.ctor ? "Ok" === o._1.ctor ? "Ok" === o._2.ctor ? er(s(t, o._0._0, o._1._0, o._2._0)) : rr(o._2._0) : rr(o._1._0) : rr(o._0._0)
            }), u(function (t, r, n, e, o) {
                var c = {ctor: "_Tuple4", _0: r, _1: n, _2: e, _3: o};
                return "Ok" === c._0.ctor ? "Ok" === c._1.ctor ? "Ok" === c._2.ctor ? "Ok" === c._3.ctor ? er(d(t, c._0._0, c._1._0, c._2._0, c._3._0)) : rr(c._3._0) : rr(c._2._0) : rr(c._1._0) : rr(c._0._0)
            }), i(function (t, r, n, e, o, c) {
                var u = {ctor: "_Tuple5", _0: r, _1: n, _2: e, _3: o, _4: c};
                return "Ok" === u._0.ctor ? "Ok" === u._1.ctor ? "Ok" === u._2.ctor ? "Ok" === u._3.ctor ? "Ok" === u._4.ctor ? er(p(t, u._0._0, u._1._0, u._2._0, u._3._0, u._4._0)) : rr(u._4._0) : rr(u._3._0) : rr(u._2._0) : rr(u._1._0) : rr(u._0._0)
            }), n(function (t, r) {
                var n = r;
                return "Ok" === n.ctor ? er(n._0) : rr(t(n._0))
            })), ir = n(function (t, r) {
                var n = r;
                return "Just" === n.ctor ? er(n._0) : rr(t)
            }), _r = Vt.fromList, ar = Vt.toList, fr = Vt.toFloat, lr = Vt.toInt,
            sr = (Vt.indexes, Vt.indexes, Vt.endsWith), dr = Vt.startsWith, pr = Vt.contains, hr = Vt.all,
            vr = (Vt.any, Vt.toLower), mr = Vt.toUpper,
            gr = (Vt.lines, Vt.words, Vt.trimRight, Vt.trimLeft, Vt.trim, Vt.padRight), br = Vt.padLeft,
            yr = (Vt.pad, Vt.dropRight), Tr = Vt.dropLeft, wr = Vt.right, kr = (Vt.left, Vt.slice), xr = Vt.repeat,
            Sr = Vt.join, Mr = Vt.split, Nr = (Vt.foldr, Vt.foldl, Vt.reverse), Br = (Vt.filter, Vt.map),
            Rr = Vt.length, Or = Vt.concat, Ar = (Vt.append, Vt.uncons), Cr = Vt.cons, Er = function (t) {
                return l(Cr, t, "")
            }, Lr = Vt.isEmpty, qr = o(function (t, r, n) {
                for (; ;) {
                    var e = n;
                    if ("RBEmpty_elm_builtin" === e.ctor) return r;
                    var o = t, c = s(t, e._1, e._2, s(qr, t, r, e._4));
                    t = o, r = c, n = e._3
                }
            }), Dr = function (t) {
                return s(qr, o(function (t, r, n) {
                    return {ctor: "::", _0: t, _1: n}
                }), {ctor: "[]"}, t)
            }, Ir = function (t) {
                return s(qr, o(function (t, r, n) {
                    return {ctor: "::", _0: r, _1: n}
                }), {ctor: "[]"}, t)
            }, Fr = function (t) {
                return s(qr, o(function (t, r, n) {
                    return {ctor: "::", _0: {ctor: "_Tuple2", _0: t, _1: r}, _1: n}
                }), {ctor: "[]"}, t)
            }, Pr = o(function (t, r, n) {
                for (; ;) {
                    var e = n;
                    if ("RBEmpty_elm_builtin" === e.ctor) return r;
                    var o = t, c = s(t, e._1, e._2, s(Pr, t, r, e._3));
                    t = o, r = c, n = e._4
                }
            }), Jr = i(function (t, r, e, c, u, i) {
                var _ = o(function (n, o, c) {
                    for (; ;) {
                        var u = c, i = u._1, _ = u._0, a = _;
                        if ("[]" === a.ctor) return {ctor: "_Tuple2", _0: _, _1: s(e, n, o, i)};
                        var f = a._1, l = a._0._1, p = a._0._0;
                        if (!(y.cmp(p, n) < 0)) return y.cmp(p, n) > 0 ? {
                            ctor: "_Tuple2",
                            _0: _,
                            _1: s(e, n, o, i)
                        } : {ctor: "_Tuple2", _0: f, _1: d(r, p, l, o, i)};
                        n = n, o = o, c = {ctor: "_Tuple2", _0: f, _1: s(t, p, l, i)}
                    }
                }), a = s(Pr, _, {ctor: "_Tuple2", _0: Fr(c), _1: i}, u), f = a._0, l = a._1;
                return s(st, n(function (r, n) {
                    var e = r;
                    return s(t, e._0, e._1, n)
                }), l, f)
            }), jr = c(function (t, r, n, e) {
                return Yt.crash(Or({
                    ctor: "::",
                    _0: "Internal red-black tree invariant violated, expected ",
                    _1: {
                        ctor: "::",
                        _0: t,
                        _1: {
                            ctor: "::",
                            _0: " and got ",
                            _1: {
                                ctor: "::",
                                _0: M(r),
                                _1: {
                                    ctor: "::",
                                    _0: "/",
                                    _1: {
                                        ctor: "::",
                                        _0: n,
                                        _1: {
                                            ctor: "::",
                                            _0: "/",
                                            _1: {
                                                ctor: "::",
                                                _0: e,
                                                _1: {
                                                    ctor: "::",
                                                    _0: "\nPlease report this bug to <https://github.com/elm-lang/core/issues>",
                                                    _1: {ctor: "[]"}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }))
            }), Ur = function (t) {
                var r = t;
                t:do {
                    if ("RBNode_elm_builtin" === r.ctor) {
                        if ("BBlack" === r._0.ctor) return !0;
                        break t
                    }
                    if ("LBBlack" === r._0.ctor) return !0;
                    break t
                } while (0);
                return !1
            }, Hr = n(function (t, r) {
                for (; ;) {
                    var n = r;
                    if ("RBEmpty_elm_builtin" === n.ctor) return t;
                    t = l(Hr, t + 1, n._4), r = n._3
                }
            }), Wr = n(function (t, r) {
                t:for (; ;) {
                    var n = r;
                    if ("RBEmpty_elm_builtin" === n.ctor) return Z;
                    switch (l(D, t, n._1).ctor) {
                        case"LT":
                            t = t, r = n._3;
                            continue t;
                        case"EQ":
                            return $(n._2);
                        default:
                            t = t, r = n._4;
                            continue t
                    }
                }
            }), zr = n(function (t, r) {
                return "Just" === l(Wr, t, r).ctor
            }), Gr = o(function (t, r, n) {
                for (; ;) {
                    var e = n;
                    if ("RBEmpty_elm_builtin" === e.ctor) return {ctor: "_Tuple2", _0: t, _1: r};
                    t = e._1, r = e._2, n = e._4
                }
            }), Yr = {ctor: "NBlack"}, Vr = {ctor: "BBlack"}, Qr = {ctor: "Black"}, Xr = {ctor: "Red"}, Zr = function (t) {
                switch (t.ctor) {
                    case"BBlack":
                        return Qr;
                    case"Black":
                        return Xr;
                    case"Red":
                        return Yr;
                    default:
                        return Yt.crash("Can't make a negative black node less black!")
                }
            }, Kr = {ctor: "LBBlack"}, $r = {ctor: "LBlack"}, tn = function (t) {
                return {ctor: "RBEmpty_elm_builtin", _0: t}
            }, rn = tn($r), nn = u(function (t, r, n, e, o) {
                return {ctor: "RBNode_elm_builtin", _0: t, _1: r, _2: n, _3: e, _4: o}
            }), en = function (t) {
                var r = t;
                return "RBNode_elm_builtin" === r.ctor ? p(nn, Zr(r._0), r._1, r._2, r._3, r._4) : tn($r)
            }, on = function (t) {
                return function (r) {
                    return function (n) {
                        return function (e) {
                            return function (o) {
                                return function (c) {
                                    return function (u) {
                                        return function (i) {
                                            return function (_) {
                                                return function (a) {
                                                    return function (f) {
                                                        return p(nn, Zr(t), e, o, p(nn, Qr, r, n, i, _), p(nn, Qr, c, u, a, f))
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }, cn = function (t) {
                var r = t;
                return "RBEmpty_elm_builtin" === r.ctor ? Yt.crash("can't make a Leaf red") : p(nn, Xr, r._1, r._2, r._3, r._4)
            }, un = u(function (t, r, n, e, o) {
                var c = p(nn, t, r, n, e, o);
                return function (t) {
                    var r = t;
                    if ("RBNode_elm_builtin" === r.ctor) {
                        var n = r._0;
                        return y.eq(n, Qr) || y.eq(n, Vr)
                    }
                    return !0
                }(c) ? function (t) {
                    var r = t;
                    t:do {
                        r:do {
                            n:do {
                                e:do {
                                    o:do {
                                        c:do {
                                            u:do {
                                                if ("RBNode_elm_builtin" !== r.ctor) break t;
                                                if ("RBNode_elm_builtin" === r._3.ctor) if ("RBNode_elm_builtin" === r._4.ctor) switch (r._3._0.ctor) {
                                                    case"Red":
                                                        switch (r._4._0.ctor) {
                                                            case"Red":
                                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
                                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break e;
                                                                break t;
                                                            case"NBlack":
                                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
                                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break n;
                                                                break t;
                                                            default:
                                                                if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
                                                                if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                                break t
                                                        }
                                                    case"NBlack":
                                                        switch (r._4._0.ctor) {
                                                            case"Red":
                                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break e;
                                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                                                break t;
                                                            case"NBlack":
                                                                if ("BBlack" === r._0.ctor) {
                                                                    if ("RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break n;
                                                                    if ("RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                                                    break t
                                                                }
                                                                break t;
                                                            default:
                                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                                                break t
                                                        }
                                                    default:
                                                        switch (r._4._0.ctor) {
                                                            case"Red":
                                                                if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                                if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break e;
                                                                break t;
                                                            case"NBlack":
                                                                if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break n;
                                                                break t;
                                                            default:
                                                                break t
                                                        }
                                                } else switch (r._3._0.ctor) {
                                                    case"Red":
                                                        if ("RBNode_elm_builtin" === r._3._3.ctor && "Red" === r._3._3._0.ctor) break u;
                                                        if ("RBNode_elm_builtin" === r._3._4.ctor && "Red" === r._3._4._0.ctor) break c;
                                                        break t;
                                                    case"NBlack":
                                                        if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._3._3.ctor && "Black" === r._3._3._0.ctor && "RBNode_elm_builtin" === r._3._4.ctor && "Black" === r._3._4._0.ctor) break r;
                                                        break t;
                                                    default:
                                                        break t
                                                } else {
                                                    if ("RBNode_elm_builtin" !== r._4.ctor) break t;
                                                    switch (r._4._0.ctor) {
                                                        case"Red":
                                                            if ("RBNode_elm_builtin" === r._4._3.ctor && "Red" === r._4._3._0.ctor) break o;
                                                            if ("RBNode_elm_builtin" === r._4._4.ctor && "Red" === r._4._4._0.ctor) break e;
                                                            break t;
                                                        case"NBlack":
                                                            if ("BBlack" === r._0.ctor && "RBNode_elm_builtin" === r._4._3.ctor && "Black" === r._4._3._0.ctor && "RBNode_elm_builtin" === r._4._4.ctor && "Black" === r._4._4._0.ctor) break n;
                                                            break t;
                                                        default:
                                                            break t
                                                    }
                                                }
                                            } while (0);
                                            return on(r._0)(r._3._3._1)(r._3._3._2)(r._3._1)(r._3._2)(r._1)(r._2)(r._3._3._3)(r._3._3._4)(r._3._4)(r._4)
                                        } while (0);
                                        return on(r._0)(r._3._1)(r._3._2)(r._3._4._1)(r._3._4._2)(r._1)(r._2)(r._3._3)(r._3._4._3)(r._3._4._4)(r._4)
                                    } while (0);
                                    return on(r._0)(r._1)(r._2)(r._4._3._1)(r._4._3._2)(r._4._1)(r._4._2)(r._3)(r._4._3._3)(r._4._3._4)(r._4._4)
                                } while (0);
                                return on(r._0)(r._1)(r._2)(r._4._1)(r._4._2)(r._4._4._1)(r._4._4._2)(r._3)(r._4._3)(r._4._4._3)(r._4._4._4)
                            } while (0);
                            return p(nn, Qr, r._4._3._1, r._4._3._2, p(nn, Qr, r._1, r._2, r._3, r._4._3._3), p(un, Qr, r._4._1, r._4._2, r._4._3._4, cn(r._4._4)))
                        } while (0);
                        return p(nn, Qr, r._3._4._1, r._3._4._2, p(un, Qr, r._3._1, r._3._2, cn(r._3._3), r._3._4._3), p(nn, Qr, r._1, r._2, r._3._4._4, r._4))
                    } while (0);
                    return t
                }(c) : c
            }), _n = u(function (t, r, n, e, o) {
                return Ur(e) || Ur(o) ? p(un, function (t) {
                    switch (t.ctor) {
                        case"Black":
                            return Vr;
                        case"Red":
                            return Qr;
                        case"NBlack":
                            return Xr;
                        default:
                            return Yt.crash("Can't make a double black node more black!")
                    }
                }(t), r, n, en(e), en(o)) : p(nn, t, r, n, e, o)
            }), an = u(function (t, r, n, e, o) {
                var c = o;
                return "RBEmpty_elm_builtin" === c.ctor ? s(fn, t, e, o) : p(_n, t, r, n, e, p(an, c._0, c._1, c._2, c._3, c._4))
            }), fn = o(function (t, r, n) {
                var e = {ctor: "_Tuple2", _0: r, _1: n};
                if ("RBEmpty_elm_builtin" !== e._0.ctor) {
                    if ("RBEmpty_elm_builtin" === e._1.ctor) {
                        var o = e._1._0, c = e._0._0, u = {ctor: "_Tuple3", _0: t, _1: c, _2: o};
                        return "_Tuple3" === u.ctor && "Black" === u._0.ctor && "Red" === u._1.ctor && "LBlack" === u._2.ctor ? p(nn, Qr, e._0._1, e._0._2, e._0._3, e._0._4) : d(jr, "Black/Red/LBlack", t, M(c), M(o))
                    }
                    var i = e._0._2, _ = e._0._4, a = e._0._1, f = p(an, e._0._0, a, i, e._0._3, _), l = s(Gr, a, i, _),
                        h = l._0, v = l._1;
                    return p(_n, t, h, v, f, n)
                }
                if ("RBEmpty_elm_builtin" !== e._1.ctor) {
                    var m = e._1._0, g = e._0._0, b = {ctor: "_Tuple3", _0: t, _1: g, _2: m};
                    return "_Tuple3" === b.ctor && "Black" === b._0.ctor && "LBlack" === b._1.ctor && "Red" === b._2.ctor ? p(nn, Qr, e._1._1, e._1._2, e._1._3, e._1._4) : d(jr, "Black/LBlack/Red", t, M(g), M(m))
                }
                switch (t.ctor) {
                    case"Red":
                        return tn($r);
                    case"Black":
                        return tn(Kr);
                    default:
                        return Yt.crash("cannot have bblack or nblack nodes at this point")
                }
            }), ln = n(function (t, r) {
                var n = r;
                if ("RBEmpty_elm_builtin" === n.ctor) return tn($r);
                var e = n._1;
                return p(nn, n._0, e, l(t, e, n._2), l(ln, t, n._3), l(ln, t, n._4))
            }), sn = {ctor: "Same"}, dn = {ctor: "Remove"}, pn = {ctor: "Insert"}, hn = o(function (t, r, n) {
                var e = function (n) {
                    var o = n;
                    if ("RBEmpty_elm_builtin" === o.ctor) {
                        var c = r(Z);
                        return "Nothing" === c.ctor ? {ctor: "_Tuple2", _0: sn, _1: rn} : {
                            ctor: "_Tuple2",
                            _0: pn,
                            _1: p(nn, Xr, t, c._0, rn, rn)
                        }
                    }
                    var u = o._2, i = o._4, _ = o._3, a = o._1, f = o._0;
                    switch (l(D, t, a).ctor) {
                        case"EQ":
                            var d = r($(u));
                            return "Nothing" === d.ctor ? {ctor: "_Tuple2", _0: dn, _1: s(fn, f, _, i)} : {
                                ctor: "_Tuple2",
                                _0: sn,
                                _1: p(nn, f, a, d._0, _, i)
                            };
                        case"LT":
                            var h = e(_), v = h._0, m = h._1;
                            switch (v.ctor) {
                                case"Same":
                                    return {ctor: "_Tuple2", _0: sn, _1: p(nn, f, a, u, m, i)};
                                case"Insert":
                                    return {ctor: "_Tuple2", _0: pn, _1: p(un, f, a, u, m, i)};
                                default:
                                    return {ctor: "_Tuple2", _0: dn, _1: p(_n, f, a, u, m, i)}
                            }
                        default:
                            var g = e(i), b = (v = g._0, g._1);
                            switch (v.ctor) {
                                case"Same":
                                    return {ctor: "_Tuple2", _0: sn, _1: p(nn, f, a, u, _, b)};
                                case"Insert":
                                    return {ctor: "_Tuple2", _0: pn, _1: p(un, f, a, u, _, b)};
                                default:
                                    return {ctor: "_Tuple2", _0: dn, _1: p(_n, f, a, u, _, b)}
                            }
                    }
                }, o = e(n), c = o._0, u = o._1;
                switch (c.ctor) {
                    case"Same":
                        return u;
                    case"Insert":
                        return function (t) {
                            var r = t;
                            return "RBNode_elm_builtin" === r.ctor && "Red" === r._0.ctor ? p(nn, Qr, r._1, r._2, r._3, r._4) : t
                        }(u);
                    default:
                        return function (t) {
                            var r = t;
                            return "RBEmpty_elm_builtin" === r.ctor ? tn($r) : p(nn, Qr, r._1, r._2, r._3, r._4)
                        }(u)
                }
            }), vn = o(function (t, r, n) {
                return s(hn, t, x($(r)), n)
            }), mn = n(function (t, r) {
                return s(vn, t, r, rn)
            }), gn = n(function (t, r) {
                return s(Pr, vn, r, t)
            }), bn = n(function (t, r) {
                var n = o(function (r, n, e) {
                    return l(t, r, n) ? s(vn, r, n, e) : e
                });
                return s(Pr, n, rn, r)
            }), yn = n(function (t, r) {
                return l(bn, n(function (t, n) {
                    return l(zr, t, r)
                }), t)
            }), Tn = n(function (t, r) {
                var n = o(function (r, n, e) {
                    var o = e, c = o._1, u = o._0;
                    return l(t, r, n) ? {ctor: "_Tuple2", _0: s(vn, r, n, u), _1: c} : {
                        ctor: "_Tuple2",
                        _0: u,
                        _1: s(vn, r, n, c)
                    }
                });
                return s(Pr, n, {ctor: "_Tuple2", _0: rn, _1: rn}, r)
            }), wn = function (t) {
                return s(st, n(function (t, r) {
                    var n = t;
                    return s(vn, n._0, n._1, r)
                }), rn, t)
            }, kn = n(function (t, r) {
                return s(hn, t, x(Z), r)
            }), xn = n(function (t, r) {
                return s(Pr, o(function (t, r, n) {
                    return l(kn, t, n)
                }), t, r)
            }), Sn = (Yt.crash, Yt.log, n(function (t, r) {
                var n = r;
                return {ctor: "_Tuple2", _0: n._0, _1: t(n._1)}
            }), n(function (t, r) {
                var n = r;
                return {ctor: "_Tuple2", _0: t(n._0), _1: n._1}
            })), Mn = function (t) {
                return t._1
            }, Nn = function (t) {
                return t._0
            }, Bn = function () {
                function t(t, r) {
                    return function (t) {
                    }
                }

                function r(t, r, n, o) {
                    var i, _ = {};
                    var f = u(Rn.nativeBinding(function (r) {
                        var e = t._0;
                        i = o(s, e);
                        var c = t._1, u = n(e);
                        a(_, c, u), r(Rn.succeed(e))
                    }), function (t, e) {
                        return Rn.nativeBinding(function (o) {
                            var c = l(r, t, e);
                            e = c._0, i(e);
                            var u = c._1, f = n(e);
                            a(_, u, f), o(Rn.succeed(e))
                        })
                    });

                    function s(t) {
                        Rn.rawSend(f, t)
                    }

                    var d = function (t, r) {
                        var n;
                        for (var o in e) {
                            var u = e[o];
                            u.isForeign && ((n = n || {})[o] = "cmd" === u.tag ? v(o) : g(o, r)), t[o] = c(u, r)
                        }
                        return n
                    }(_, s);
                    return d ? {ports: d} : {}
                }

                var e = {};

                function c(t, r) {
                    var n = {main: r, self: void 0}, e = t.tag, o = t.onEffects, c = t.onSelfMsg;
                    var i = u(t.init, function (t, r) {
                        if ("self" === t.ctor) return s(c, n, t._0, r);
                        var u = t._0;
                        switch (e) {
                            case"cmd":
                                return s(o, n, u.cmds, r);
                            case"sub":
                                return s(o, n, u.subs, r);
                            case"fx":
                                return d(o, n, u.cmds, u.subs, r)
                        }
                    });
                    return n.self = i, i
                }

                function u(t, r) {
                    var n = Rn.andThen;
                    var e = l(n, function t(e) {
                        var o = Rn.receive(function (t) {
                            return r(t, e)
                        });
                        return l(n, t, o)
                    }, t);
                    return Rn.rawSpawn(e)
                }

                function i(t) {
                    return function (r) {
                        return {type: "leaf", home: t, value: r}
                    }
                }

                function _(t) {
                    return {type: "node", branches: t}
                }

                function a(t, r, n) {
                    var e = {};
                    for (var o in f(!0, r, e, null), f(!1, n, e, null), t) {
                        var c = o in e ? e[o] : {cmds: nt.Nil, subs: nt.Nil};
                        Rn.rawSend(t[o], {ctor: "fx", _0: c})
                    }
                }

                function f(t, r, n, o) {
                    switch (r.type) {
                        case"leaf":
                            var c = r.home, u = function (t, r, n, o) {
                                return l(t ? e[r].cmdMap : e[r].subMap, function (t) {
                                    var r = n;
                                    for (; r;) t = r.tagger(t), r = r.rest;
                                    return t
                                }, o)
                            }(t, c, o, r.value);
                            return void (n[c] = function (t, r, n) {
                                if (n = n || {cmds: nt.Nil, subs: nt.Nil}, t) return n.cmds = nt.Cons(r, n.cmds), n;
                                return n.subs = nt.Cons(r, n.subs), n
                            }(t, u, n[c]));
                        case"node":
                            for (var i = r.branches; "[]" !== i.ctor;) f(t, i._0, n, o), i = i._1;
                            return;
                        case"map":
                            return void f(t, r.tree, n, {tagger: r.tagger, rest: o})
                    }
                }

                function p(t) {
                    if (t in e) throw new Error("There can only be one port named `" + t + "`, but your program has multiple.")
                }

                var h = n(function (t, r) {
                    return r
                });

                function v(t) {
                    var r = [], n = e[t].converter, c = Rn.succeed(null);
                    return e[t].init = c, e[t].onEffects = o(function (t, e, o) {
                        for (; "[]" !== e.ctor;) {
                            for (var u = r, i = n(e._0), _ = 0; _ < u.length; _++) u[_](i);
                            e = e._1
                        }
                        return c
                    }), {
                        subscribe: function (t) {
                            r.push(t)
                        }, unsubscribe: function (t) {
                            var n = (r = r.slice()).indexOf(t);
                            n >= 0 && r.splice(n, 1)
                        }
                    }
                }

                var m = n(function (t, r) {
                    return function (n) {
                        return t(r(n))
                    }
                });

                function g(t, r) {
                    var n = [], c = nt.Nil, u = e[t].converter, i = function (t, r, e) {
                        for (var o = f(t, r, e), c = 0; c < n.length; c++) s(n[c]);
                        return n = null, _ = s, i = f, o
                    }, _ = function (t) {
                        n.push(t)
                    }, a = Rn.succeed(null);

                    function f(t, r, n) {
                        return c = r, a
                    }

                    function s(t) {
                        for (var n = c; "[]" !== n.ctor;) r(n._0(t)), n = n._1
                    }

                    return e[t].init = a, e[t].onEffects = o(function (t, r, n) {
                        return i(t, r, n)
                    }), {
                        send: function (r) {
                            var n = l(ue, u, r);
                            if ("Err" === n.ctor) throw new Error("Trying to send an unexpected type of value through port `" + t + "`:\n" + n._0);
                            _(n._0)
                        }
                    }
                }

                return {
                    sendToApp: n(function (t, r) {
                        return Rn.nativeBinding(function (n) {
                            t.main(r), n(Rn.succeed(y.Tuple0))
                        })
                    }), sendToSelf: n(function (t, r) {
                        return l(Rn.send, t.self, {ctor: "self", _0: r})
                    }), effectManagers: e, outgoingPort: function (t, r) {
                        return p(t), e[t] = {tag: "cmd", cmdMap: h, converter: r, isForeign: !0}, i(t)
                    }, incomingPort: function (t, r) {
                        return p(t), e[t] = {tag: "sub", subMap: m, converter: r, isForeign: !0}, i(t)
                    }, htmlToProgram: function (t) {
                        var r = _(nt.Nil), e = y.Tuple2(y.Tuple0, r);
                        return mu({
                            init: e, view: function (t) {
                                return main
                            }, update: n(function (t, r) {
                                return e
                            }), subscriptions: function (t) {
                                return r
                            }
                        })
                    }, program: function (n) {
                        return function (e) {
                            return function (e, o) {
                                e.worker = function (e) {
                                    if (void 0 !== e) throw new Error("The `" + o + "` module does not need flags.\nCall " + o + ".worker() with no arguments and you should be all set!");
                                    return r(n.init, n.update, n.subscriptions, t)
                                }
                            }
                        }
                    }, programWithFlags: function (n) {
                        return function (e) {
                            return function (o, c) {
                                o.worker = function (o) {
                                    if (void 0 === e) throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + c + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.");
                                    var u = l(Xn.run, e, o);
                                    if ("Err" === u.ctor) throw new Error(c + ".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + u._0);
                                    return r(n.init(u._0), n.update, n.subscriptions, t)
                                }
                            }
                        }
                    }, initialize: r, leaf: i, batch: _, map: n(function (t, r) {
                        return {type: "map", tagger: t, tree: r}
                    })
                }
            }(), Rn = function () {
                var t = 1e4;

                function r(t) {
                    return {ctor: "_Task_succeed", value: t}
                }

                function e(t) {
                    return {ctor: "_Task_nativeBinding", callback: t, cancel: null}
                }

                function o(t) {
                    var r = {ctor: "_Process", id: y.guid(), root: t, stack: null, mailbox: []};
                    return a(r), r
                }

                function c(t, r) {
                    t.mailbox.push(r), a(t)
                }

                function u(r, n) {
                    for (; r < t;) {
                        var e = n.root.ctor;
                        if ("_Task_succeed" !== e) if ("_Task_fail" !== e) if ("_Task_andThen" !== e) if ("_Task_onError" !== e) {
                            if ("_Task_nativeBinding" === e) {
                                n.root.cancel = n.root.callback(function (t) {
                                    n.root = t, a(n)
                                });
                                break
                            }
                            if ("_Task_receive" !== e) throw new Error(e);
                            var o = n.mailbox;
                            if (0 === o.length) break;
                            n.root = n.root.callback(o.shift()), ++r
                        } else n.stack = {
                            ctor: "_Task_onError",
                            callback: n.root.callback,
                            rest: n.stack
                        }, n.root = n.root.task, ++r; else n.stack = {
                            ctor: "_Task_andThen",
                            callback: n.root.callback,
                            rest: n.stack
                        }, n.root = n.root.task, ++r; else {
                            for (; n.stack && "_Task_andThen" === n.stack.ctor;) n.stack = n.stack.rest;
                            if (null === n.stack) break;
                            n.root = n.stack.callback(n.root.value), n.stack = n.stack.rest, ++r
                        } else {
                            for (; n.stack && "_Task_onError" === n.stack.ctor;) n.stack = n.stack.rest;
                            if (null === n.stack) break;
                            n.root = n.stack.callback(n.root.value), n.stack = n.stack.rest, ++r
                        }
                    }
                    return r < t ? r + 1 : (a(n), r)
                }

                var i = !1, _ = [];

                function a(t) {
                    _.push(t), i || (setTimeout(f, 0), i = !0)
                }

                function f() {
                    for (var r, n = 0; n < t && (r = _.shift());) r.root && (n = u(n, r));
                    r ? setTimeout(f, 0) : i = !1
                }

                return {
                    succeed: r, fail: function (t) {
                        return {ctor: "_Task_fail", value: t}
                    }, nativeBinding: e, andThen: n(function (t, r) {
                        return {ctor: "_Task_andThen", callback: t, task: r}
                    }), onError: n(function (t, r) {
                        return {ctor: "_Task_onError", callback: t, task: r}
                    }), receive: function (t) {
                        return {ctor: "_Task_receive", callback: t}
                    }, spawn: function (t) {
                        return e(function (n) {
                            n(r(o(t)))
                        })
                    }, kill: function (t) {
                        return e(function (n) {
                            var e = t.root;
                            "_Task_nativeBinding" === e.ctor && e.cancel && e.cancel(), t.root = null, n(r(y.Tuple0))
                        })
                    }, sleep: function (t) {
                        return e(function (n) {
                            var e = setTimeout(function () {
                                n(r(y.Tuple0))
                            }, t);
                            return function () {
                                clearTimeout(e)
                            }
                        })
                    }, send: n(function (t, n) {
                        return e(function (e) {
                            c(t, n), e(r(y.Tuple0))
                        })
                    }), rawSpawn: o, rawSend: c
                }
            }(), On = Bn.batch, An = On({ctor: "[]"}), Cn = Cn || {};
        Cn["!"] = n(function (t, r) {
            return {ctor: "_Tuple2", _0: t, _1: On(r)}
        });
        var En = Bn.map, Ln = Bn.batch, qn = Ln({ctor: "[]"}), Dn = Bn.map, In = (Rn.succeed, Bn.sendToSelf),
            Fn = Bn.sendToApp, Pn = (Bn.programWithFlags, Bn.program, n(function (t, r) {
                return function (n) {
                    return t.reverseGet(r(t.get(n)))
                }
            }), n(function (t, r) {
                return {get: t, reverseGet: r}
            })), Jn = (n(function (t, r) {
                return l(Pn, function (n) {
                    return r.get(t.get(n))
                }, function (n) {
                    return t.reverseGet(r.reverseGet(n))
                })
            }), o(function (t, r, n) {
                return function (e) {
                    var o = e, c = o._0;
                    return function (e) {
                        var u = r(t.get(c));
                        return {ctor: "_Tuple2", _0: l(t.set, u._0, c), _1: l(n, o._1, u._1)}
                    }()
                }
            }), c(function (t, r, n, e) {
                return function (o) {
                    var c = o, u = c._2, i = c._1, _ = c._0;
                    return function (o) {
                        var c = e({ctor: "_Tuple3", _0: t.get(_), _1: r.get(i), _2: n.get(u)});
                        return {ctor: "_Tuple3", _0: l(t.set, c._0, _), _1: l(r.set, c._1, i), _2: l(n.set, c._2, u)}
                    }()
                }
            }), o(function (t, r, n) {
                return function (e) {
                    var o = e, c = o._1, u = o._0;
                    return function (e) {
                        var o = n({ctor: "_Tuple2", _0: t.get(u), _1: r.get(c)});
                        return {ctor: "_Tuple2", _0: l(t.set, o._0, u), _1: l(r.set, o._1, c)}
                    }()
                }
            }), n(function (t, r) {
                return function (n) {
                    return function (r) {
                        return l(t.set, r, n)
                    }(r(t.get(n)))
                }
            }), n(function (t, r) {
                return {get: t, set: r}
            })), jn = n(function (t, r) {
                var e = n(function (n, e) {
                    return function (r) {
                        return l(t.set, r, e)
                    }(l(r.set, n, t.get(e)))
                });
                return l(Jn, function (n) {
                    return r.get(t.get(n))
                }, e)
            }), Un = (n(function (t, r) {
                var e = n(function (n, e) {
                    var o = n, c = e;
                    return {ctor: "_Tuple2", _0: l(t.set, o._0, c._0), _1: l(r.set, o._1, c._1)}
                });
                return l(Jn, function (n) {
                    var e = n;
                    return {ctor: "_Tuple2", _0: t.get(e._0), _1: r.get(e._1)}
                }, e)
            }), n(function (t, r) {
                var e = n(function (n, e) {
                    var o = n;
                    return l(r.set, o._1, l(t.set, o._0, e))
                });
                return l(Jn, function (n) {
                    return {ctor: "_Tuple2", _0: t.get(n), _1: r.get(n)}
                }, e)
            }), o(function (t, r, e) {
                var o = n(function (n, o) {
                    var c = n;
                    return l(e.set, c._2, l(r.set, c._1, l(t.set, c._0, o)))
                });
                return l(Jn, function (n) {
                    return {ctor: "_Tuple3", _0: t.get(n), _1: r.get(n), _2: e.get(n)}
                }, o)
            }), n(function (t, r) {
                return function (n) {
                    return l(tt, function (n) {
                        return t.reverseGet(r(n))
                    }, t.getOption(n))
                }
            })), Hn = (n(function (t, r) {
                return function (n) {
                    return l(X, n, s(Un, t, r, n))
                }
            }), n(function (t, r) {
                return "Just" === t.getOption(r).ctor
            }), n(function (t, r) {
                return {getOption: t, reverseGet: r}
            })), Wn = (n(function (t, r) {
                return l(Hn, function (n) {
                    var e = t.getOption(n);
                    return "Just" === e.ctor ? r.getOption(e._0) : Z
                }, function (n) {
                    return t.reverseGet(r.reverseGet(n))
                })
            }), n(function (t, r) {
                return l(Hn, function (n) {
                    var e = t.getOption(n);
                    return "Just" === e.ctor ? $(r.get(e._0)) : Z
                }, function (n) {
                    return t.reverseGet(r.reverseGet(n))
                })
            }), c(function (t, r, n, e) {
                return function (o) {
                    var c = o, u = c._2, i = c._1, _ = c._0,
                        a = {ctor: "_Tuple3", _0: t.getOption(_), _1: r.getOption(i), _2: n.getOption(u)};
                    return "_Tuple3" === a.ctor && "Just" === a._0.ctor && "Just" === a._1.ctor && "Just" === a._2.ctor ? function (o) {
                        var c = e({ctor: "_Tuple3", _0: a._0._0, _1: a._1._0, _2: a._2._0});
                        return {ctor: "_Tuple3", _0: l(t.set, c._0, _), _1: l(r.set, c._1, i), _2: l(n.set, c._2, u)}
                    }() : {ctor: "_Tuple3", _0: _, _1: i, _2: u}
                }
            }), o(function (t, r, n) {
                return function (e) {
                    var o = e, c = o._1, u = o._0, i = {ctor: "_Tuple2", _0: t.getOption(u), _1: r.getOption(c)};
                    return "_Tuple2" === i.ctor && "Just" === i._0.ctor && "Just" === i._1.ctor ? function (e) {
                        var o = n({ctor: "_Tuple2", _0: i._0._0, _1: i._1._0});
                        return {ctor: "_Tuple2", _0: l(t.set, o._0, u), _1: l(r.set, o._1, c)}
                    }() : {ctor: "_Tuple2", _0: u, _1: c}
                }
            }), n(function (t, r) {
                return function (n) {
                    return l(tt, function (e) {
                        return s(k, t.set, n, r(e))
                    }, t.getOption(n))
                }
            })), zn = (n(function (t, r) {
                return function (n) {
                    return l(X, n, s(Wn, t, r, n))
                }
            }), n(function (t, r) {
                return {getOption: t, set: r}
            })), Gn = n(function (t, r) {
                var e = n(function (n, e) {
                    return l(X, e, l(tt, function (o) {
                        return s(k, t.set, e, l(r.set, n, o))
                    }, t.getOption(e)))
                });
                return l(zn, function (n) {
                    var e = t.getOption(n);
                    return "Just" === e.ctor ? r.getOption(e._0) : Z
                }, e)
            }), Yn = (n(function (t, r) {
                var e = n(function (n, e) {
                    return l(X, e, l(tt, function (o) {
                        return s(k, t.set, e, l(r.set, n, o))
                    }, t.getOption(e)))
                });
                return l(zn, function (n) {
                    var e = t.getOption(n);
                    return "Just" === e.ctor ? $(r.get(e._0)) : Z
                }, e)
            }), function (t) {
                return l(zn, function (r) {
                    return $(t.get(r))
                }, t.set)
            }), Vn = (n(function (t, r) {
                var e = n(function (n, e) {
                    var o = n, c = e;
                    return {ctor: "_Tuple2", _0: l(t.set, o._0, c._0), _1: l(r.set, o._1, c._1)}
                });
                return l(zn, function (n) {
                    var e = n;
                    return l(K, function (t) {
                        return l(tt, function (r) {
                            return {ctor: "_Tuple2", _0: t, _1: r}
                        }, r.getOption(e._1))
                    }, t.getOption(e._0))
                }, e)
            }), n(function (t, r) {
                var e = n(function (n, e) {
                    var o = n;
                    return l(r.set, o._1, l(t.set, o._0, e))
                });
                return l(zn, function (n) {
                    var e = {ctor: "_Tuple2", _0: t.getOption(n), _1: r.getOption(n)};
                    return "_Tuple2" === e.ctor && "Just" === e._0.ctor && "Just" === e._1.ctor ? $({
                        ctor: "_Tuple2",
                        _0: e._0._0,
                        _1: e._1._0
                    }) : Z
                }, e)
            }), o(function (t, r, e) {
                var o = n(function (n, o) {
                    var c = n;
                    return l(e.set, c._2, l(r.set, c._1, l(t.set, c._0, o)))
                });
                return l(zn, function (n) {
                    var o = {ctor: "_Tuple3", _0: t.getOption(n), _1: r.getOption(n), _2: e.getOption(n)};
                    return "_Tuple3" === o.ctor && "Just" === o._0.ctor && "Just" === o._1.ctor && "Just" === o._2.ctor ? $({
                        ctor: "_Tuple3",
                        _0: o._0._0,
                        _1: o._1._0,
                        _2: o._2._0
                    }) : Z
                }, o)
            }), n(function (t, r) {
                return {ctor: "_Tuple2", _0: r._0, _1: t}
            }), n(function (t, r) {
                return {ctor: "_Tuple2", _0: t, _1: r._1}
            }), n(function (t, r) {
                return y.update(r, {id: t})
            }), l(Pn, zt, Wt), {
                getOption: S, set: function (t) {
                    return x($(t))
                }
            });
        (Qn = Qn || {})["=|>"] = n(function (t, r) {
            return l(Gn, t, Yn(r))
        }), (Qn = Qn || {})["=>"] = Gn;
        var Qn;
        (Qn = Qn || {})["<|>"] = jn;
        n(function (t, r) {
            return t & r
        }), n(function (t, r) {
            return t | r
        }), n(function (t, r) {
            return t ^ r
        }), n(function (t, r) {
            return r << t
        }), n(function (t, r) {
            return r >> t
        }), n(function (t, r) {
            return r >>> t
        });
        var Xn = function () {
                function t(t, r) {
                    return {ctor: "<decoder>", tag: "map-many", func: t, decoders: r}
                }

                function r(t) {
                    return {tag: "ok", value: t}
                }

                function e(t, r) {
                    return {tag: "primitive", type: t, value: r}
                }

                function l(t, r) {
                    return {tag: "index", index: t, rest: r}
                }

                function s(t, r) {
                    return {tag: "field", field: t, rest: r}
                }

                function l(t, r) {
                    return {tag: "index", index: t, rest: r}
                }

                function d(t) {
                    return void 0 === t ? "undefined" : JSON.stringify(t)
                }

                function p(t, n) {
                    var o = function t(n, o) {
                        switch (n.tag) {
                            case"bool":
                                return "boolean" == typeof o ? r(o) : e("a Bool", o);
                            case"int":
                                return "number" != typeof o ? e("an Int", o) : -2147483647 < o && o < 2147483647 && (0 | o) === o ? r(o) : !isFinite(o) || o % 1 ? e("an Int", o) : r(o);
                            case"float":
                                return "number" == typeof o ? r(o) : e("a Float", o);
                            case"string":
                                return "string" == typeof o ? r(o) : o instanceof String ? r(o + "") : e("a String", o);
                            case"null":
                                return null === o ? r(n.value) : e("null", o);
                            case"value":
                                return r(o);
                            case"list":
                                if (!(o instanceof Array)) return e("a List", o);
                                for (var c = nt.Nil, u = o.length; u--;) {
                                    var i = t(n.decoder, o[u]);
                                    if ("ok" !== i.tag) return l(u, i);
                                    c = nt.Cons(i.value, c)
                                }
                                return r(c);
                            case"array":
                                if (!(o instanceof Array)) return e("an Array", o);
                                for (var _ = o.length, a = new Array(_), u = _; u--;) {
                                    var i = t(n.decoder, o[u]);
                                    if ("ok" !== i.tag) return l(u, i);
                                    a[u] = i.value
                                }
                                return r(g.fromJSArray(a));
                            case"maybe":
                                var i = t(n.decoder, o);
                                return "ok" === i.tag ? r($(i.value)) : r(Z);
                            case"field":
                                var f = n.field;
                                if ("object" != typeof o || null === o || !(f in o)) return e("an object with a field named `" + f + "`", o);
                                var i = t(n.decoder, o[f]);
                                return "ok" === i.tag ? i : s(f, i);
                            case"index":
                                var d = n.index;
                                if (!(o instanceof Array)) return e("an array", o);
                                if (d >= o.length) return e("a longer array. Need index " + d + " but there are only " + o.length + " entries", o);
                                var i = t(n.decoder, o[d]);
                                return "ok" === i.tag ? i : l(d, i);
                            case"key-value":
                                if ("object" != typeof o || null === o || o instanceof Array) return e("an object", o);
                                var p = nt.Nil;
                                for (var h in o) {
                                    var i = t(n.decoder, o[h]);
                                    if ("ok" !== i.tag) return s(h, i);
                                    var v = y.Tuple2(h, i.value);
                                    p = nt.Cons(v, p)
                                }
                                return r(p);
                            case"map-many":
                                for (var m = n.func, b = n.decoders, u = 0; u < b.length; u++) {
                                    var i = t(b[u], o);
                                    if ("ok" !== i.tag) return i;
                                    m = m(i.value)
                                }
                                return r(m);
                            case"andThen":
                                var i = t(n.decoder, o);
                                return "ok" !== i.tag ? i : t(n.callback(i.value), o);
                            case"oneOf":
                                for (var T = [], w = n.decoders; "[]" !== w.ctor;) {
                                    var i = t(w._0, o);
                                    if ("ok" === i.tag) return i;
                                    T.push(i), w = w._1
                                }
                                return function (t) {
                                    return {tag: "oneOf", problems: t}
                                }(T);
                            case"fail":
                                return function (t) {
                                    return {tag: "fail", msg: t}
                                }(n.msg);
                            case"succeed":
                                return r(n.msg)
                        }
                    }(t, n);
                    return "ok" === o.tag ? er(o.value) : rr(function t(r) {
                        for (var n = "_"; r;) switch (r.tag) {
                            case"primitive":
                                return "Expecting " + r.type + ("_" === n ? "" : " at " + n) + " but instead got: " + d(r.value);
                            case"index":
                                n += "[" + r.index + "]", r = r.rest;
                                break;
                            case"field":
                                n += "." + r.field, r = r.rest;
                                break;
                            case"oneOf":
                                for (var e = r.problems, o = 0; o < e.length; o++) e[o] = t(e[o]);
                                return "I ran into the following problems" + ("_" === n ? "" : " at " + n) + ":\n\n" + e.join("\n");
                            case"fail":
                                return "I ran into a `fail` decoder" + ("_" === n ? "" : " at " + n) + ": " + r.msg
                        }
                    }(o))
                }

                function h(t, r) {
                    if (t === r) return !0;
                    if (t.tag !== r.tag) return !1;
                    switch (t.tag) {
                        case"succeed":
                        case"fail":
                            return t.msg === r.msg;
                        case"bool":
                        case"int":
                        case"float":
                        case"string":
                        case"value":
                            return !0;
                        case"null":
                            return t.value === r.value;
                        case"list":
                        case"array":
                        case"maybe":
                        case"key-value":
                            return h(t.decoder, r.decoder);
                        case"field":
                            return t.field === r.field && h(t.decoder, r.decoder);
                        case"index":
                            return t.index === r.index && h(t.decoder, r.decoder);
                        case"map-many":
                            return t.func === r.func && v(t.decoders, r.decoders);
                        case"andThen":
                            return t.callback === r.callback && h(t.decoder, r.decoder);
                        case"oneOf":
                            return v(t.decoders, r.decoders)
                    }
                }

                function v(t, r) {
                    var n = t.length;
                    if (n !== r.length) return !1;
                    for (var e = 0; e < n; e++) if (!h(t[e], r[e])) return !1;
                    return !0
                }

                return {
                    encode: n(function (t, r) {
                        return JSON.stringify(r, null, t)
                    }), runOnString: n(function (t, r) {
                        var n;
                        try {
                            n = JSON.parse(r)
                        } catch (t) {
                            return rr("Given an invalid JSON: " + t.message)
                        }
                        return p(t, n)
                    }), run: n(p), decodeNull: function (t) {
                        return {ctor: "<decoder>", tag: "null", value: t}
                    }, decodePrimitive: function (t) {
                        return {ctor: "<decoder>", tag: t}
                    }, decodeContainer: n(function (t, r) {
                        return {ctor: "<decoder>", tag: t, decoder: r}
                    }), decodeField: n(function (t, r) {
                        return {ctor: "<decoder>", tag: "field", field: t, decoder: r}
                    }), decodeIndex: n(function (t, r) {
                        return {ctor: "<decoder>", tag: "index", index: t, decoder: r}
                    }), map1: n(function (r, n) {
                        return t(r, [n])
                    }), map2: o(function (r, n, e) {
                        return t(r, [n, e])
                    }), map3: c(function (r, n, e, o) {
                        return t(r, [n, e, o])
                    }), map4: u(function (r, n, e, o, c) {
                        return t(r, [n, e, o, c])
                    }), map5: i(function (r, n, e, o, c, u) {
                        return t(r, [n, e, o, c, u])
                    }), map6: _(function (r, n, e, o, c, u, i) {
                        return t(r, [n, e, o, c, u, i])
                    }), map7: a(function (r, n, e, o, c, u, i, _) {
                        return t(r, [n, e, o, c, u, i, _])
                    }), map8: f(function (r, n, e, o, c, u, i, _, a) {
                        return t(r, [n, e, o, c, u, i, _, a])
                    }), decodeKeyValuePairs: function (t) {
                        return {ctor: "<decoder>", tag: "key-value", decoder: t}
                    }, andThen: n(function (t, r) {
                        return {ctor: "<decoder>", tag: "andThen", decoder: r, callback: t}
                    }), fail: function (t) {
                        return {ctor: "<decoder>", tag: "fail", msg: t}
                    }, succeed: function (t) {
                        return {ctor: "<decoder>", tag: "succeed", msg: t}
                    }, oneOf: function (t) {
                        return {ctor: "<decoder>", tag: "oneOf", decoders: t}
                    }, identity: function (t) {
                        return t
                    }, encodeNull: null, encodeArray: g.toJSArray, encodeList: nt.toArray, encodeObject: function (t) {
                        for (var r = {}; "[]" !== t.ctor;) {
                            var n = t._0;
                            r[n._0] = n._1, t = t._1
                        }
                        return r
                    }, equality: h
                }
            }(), Zn = (Xn.encodeList, Xn.encodeArray, Xn.encodeObject, Xn.encodeNull, Xn.identity),
            Kn = (Xn.identity, Xn.identity), $n = Xn.identity, te = Xn.encode, re = Xn.decodeNull,
            ne = Xn.decodePrimitive("value"), ee = Xn.andThen, oe = Xn.fail, ce = Xn.succeed, ue = Xn.run,
            ie = Xn.runOnString, _e = (Xn.map8, Xn.map7), ae = Xn.map6, fe = Xn.map5, le = Xn.map4, se = Xn.map3,
            de = Xn.map2, pe = Xn.map1, he = Xn.oneOf, ve = function (t) {
                return l(Xn.decodeContainer, "maybe", t)
            }, me = Xn.decodeIndex, ge = Xn.decodeField, be = n(function (t, r) {
                return s(lt, ge, r, t)
            }), ye = Xn.decodeKeyValuePairs, Te = function (t) {
                return l(pe, wn, ye(t))
            }, we = function (t) {
                return l(Xn.decodeContainer, "list", t)
            }, ke = Xn.decodePrimitive("float"), xe = Xn.decodePrimitive("int"), Se = Xn.decodePrimitive("bool"),
            Me = Xn.decodePrimitive("string"), Ne = Rn.onError, Be = Rn.andThen, Re = n(function (t, r) {
                var n = r;
                return Rn.spawn(l(Be, Fn(t), n._0))
            }), Oe = Rn.fail, Ae = n(function (t, r) {
                return l(Ne, function (r) {
                    return Oe(t(r))
                }, r)
            }), Ce = Rn.succeed, Ee = n(function (t, r) {
                return l(Be, function (r) {
                    return Ce(t(r))
                }, r)
            }), Le = o(function (t, r, n) {
                return l(Be, function (r) {
                    return l(Be, function (n) {
                        return Ce(l(t, r, n))
                    }, n)
                }, r)
            }), qe = (c(function (t, r, n, e) {
                return l(Be, function (r) {
                    return l(Be, function (n) {
                        return l(Be, function (e) {
                            return Ce(s(t, r, n, e))
                        }, e)
                    }, n)
                }, r)
            }), u(function (t, r, n, e, o) {
                return l(Be, function (r) {
                    return l(Be, function (n) {
                        return l(Be, function (e) {
                            return l(Be, function (o) {
                                return Ce(d(t, r, n, e, o))
                            }, o)
                        }, e)
                    }, n)
                }, r)
            }), i(function (t, r, n, e, o, c) {
                return l(Be, function (r) {
                    return l(Be, function (n) {
                        return l(Be, function (e) {
                            return l(Be, function (o) {
                                return l(Be, function (c) {
                                    return Ce(p(t, r, n, e, o, c))
                                }, c)
                            }, o)
                        }, e)
                    }, n)
                }, r)
            }), function (t) {
                var r = t;
                return "[]" === r.ctor ? Ce({ctor: "[]"}) : s(Le, n(function (t, r) {
                    return {ctor: "::", _0: t, _1: r}
                }), r._0, qe(r._1))
            }), De = o(function (t, r, n) {
                return l(Ee, function (t) {
                    return {ctor: "_Tuple0"}
                }, qe(l(bt, Re(t), r)))
            }), Ie = Ce({ctor: "_Tuple0"}), Fe = o(function (t, r, n) {
                return Ce({ctor: "_Tuple0"})
            }), Pe = Bn.leaf("Task"), Je = function (t) {
                return {ctor: "Perform", _0: t}
            }, je = n(function (t, r) {
                return Pe(Je(l(Ee, t, r)))
            }), Ue = n(function (t, r) {
                return Pe(Je(l(Ne, function (r) {
                    return Ce(t(rr(r)))
                }, l(Be, function (r) {
                    return Ce(t(er(r)))
                }, r))))
            }), He = n(function (t, r) {
                return Je(l(Ee, t, r._0))
            });
        Bn.effectManagers.Task = {pkg: "elm-lang/core", init: Ie, onEffects: De, onSelfMsg: Fe, tag: "cmd", cmdMap: He};
        var We = function () {
            return {
                now: Rn.nativeBinding(function (t) {
                    t(Rn.succeed(Date.now()))
                }), setInterval_: n(function (t, r) {
                    return Rn.nativeBinding(function (n) {
                        var e = setInterval(function () {
                            Rn.rawSpawn(r)
                        }, t);
                        return function () {
                            clearInterval(e)
                        }
                    })
                })
            }
        }(), ze = We.setInterval_, Ge = o(function (t, r, n) {
            var e = r;
            if ("[]" === e.ctor) return Ce(n);
            var o = e._0, c = Rn.spawn(l(ze, o, l(In, t, o)));
            return l(Be, function (r) {
                return s(Ge, t, e._1, s(vn, o, r, n))
            }, c)
        }), Ye = n(function (t, r) {
            var n = t, e = n._1, o = n._0, c = l(Wr, o, r);
            return "Nothing" === c.ctor ? s(vn, o, {ctor: "::", _0: e, _1: {ctor: "[]"}}, r) : s(vn, o, {
                ctor: "::",
                _0: e,
                _1: c._0
            }, r)
        }), Ve = We.now, Qe = o(function (t, r, n) {
            var e = l(Wr, r, n.taggers);
            if ("Nothing" === e.ctor) return Ce(n);
            return l(Be, function (t) {
                return Ce(n)
            }, l(Be, function (r) {
                return qe(l(bt, function (n) {
                    return l(Fn, t, n(r))
                }, e._0))
            }, Ve))
        }), Xe = Bn.leaf("Time"), Ze = n(function (t, r) {
            return {taggers: t, processes: r}
        }), Ke = Ce(l(Ze, rn, rn)), $e = o(function (t, r, n) {
            var e = n, u = o(function (t, r, n) {
                var e = n;
                return {
                    ctor: "_Tuple3", _0: e._0, _1: e._1, _2: l(Be, function (t) {
                        return e._2
                    }, Rn.kill(r))
                }
            }), i = c(function (t, r, n, e) {
                var o = e;
                return {ctor: "_Tuple3", _0: o._0, _1: s(vn, t, n, o._1), _2: o._2}
            }), _ = o(function (t, r, n) {
                var e = n;
                return {ctor: "_Tuple3", _0: {ctor: "::", _0: t, _1: e._0}, _1: e._1, _2: e._2}
            }), a = s(st, Ye, rn, r), f = h(Jr, _, i, u, a, e.processes, {
                ctor: "_Tuple3",
                _0: {ctor: "[]"},
                _1: rn,
                _2: Ce({ctor: "_Tuple0"})
            }), d = f._0, p = f._1, v = f._2;
            return l(Be, function (t) {
                return Ce(l(Ze, a, t))
            }, l(Be, function (r) {
                return s(Ge, t, d, p)
            }, v))
        }), to = n(function (t, r) {
            return {ctor: "Every", _0: t, _1: r}
        }), ro = (n(function (t, r) {
            return Xe(l(to, t, r))
        }), n(function (t, r) {
            var n = r;
            return l(to, n._0, function (r) {
                return t(n._1(r))
            })
        }));
        Bn.effectManagers.Time = {pkg: "elm-lang/core", init: Ke, onEffects: $e, onSelfMsg: Qe, tag: "sub", subMap: ro};
        var no = n(function (t, r) {
                var n = 65535 & r, e = 65535 & t;
                return 0 | e * n + ((65535 & t >>> 16) * n + e * (65535 & r >>> 16) << 16 >>> 0)
            }), eo = c(function (t, r, n, e) {
                for (; ;) {
                    if (y.cmp(r, 1) < 0) return {ctor: "_Tuple2", _0: t, _1: e};
                    var o = n(e);
                    t = {ctor: "::", _0: o._0, _1: t}, r = r - 1, n = n, e = o._1
                }
            }), oo = function (t) {
                var r = t._0, n = 277803737 * (r ^ r >>> 4 + (r >>> 28));
                return (n >>> 22 ^ n) >>> 0
            }, co = n(function (t, r) {
                return t._0(r)
            }), uo = o(function (t, r, n) {
                for (; ;) {
                    var e = l(co, t, n), o = e._0, c = e._1;
                    if (r(o)) return {ctor: "_Tuple2", _0: o, _1: c};
                    t = t, r = r, n = c
                }
            }), io = function (t) {
                return {ctor: "Generator", _0: t}
            }, _o = n(function (t, r) {
                var n = r;
                return io(function (r) {
                    return d(eo, {ctor: "[]"}, t, n._0, r)
                })
            }), ao = n(function (t, r) {
                var n = r;
                return io(function (r) {
                    var e = n._0(r), o = e._0, c = e._1;
                    return {ctor: "_Tuple2", _0: t(o), _1: c}
                })
            }), fo = o(function (t, r, n) {
                var e = r, o = n;
                return io(function (r) {
                    var n = e._0(r), c = n._0, u = n._1, i = o._0(u), _ = i._0, a = i._1;
                    return {ctor: "_Tuple2", _0: l(t, c, _), _1: a}
                })
            }), lo = (n(function (t, r) {
                return s(fo, n(function (t, r) {
                    return {ctor: "_Tuple2", _0: t, _1: r}
                }), t, r)
            }), fo(n(function (t, r) {
                return r(t)
            })), c(function (t, r, n, e) {
                var o = r, c = n, u = e;
                return io(function (r) {
                    var n = o._0(r), e = n._0, i = n._1, _ = c._0(i), a = _._0, f = _._1, l = u._0(f), d = l._0, p = l._1;
                    return {ctor: "_Tuple2", _0: s(t, e, a, d), _1: p}
                })
            })), so = (u(function (t, r, n, e, o) {
                var c = r, u = n, i = e, _ = o;
                return io(function (r) {
                    var n = c._0(r), e = n._0, o = n._1, a = u._0(o), f = a._0, l = a._1, s = i._0(l), p = s._0, h = s._1,
                        v = _._0(h), m = v._0, g = v._1;
                    return {ctor: "_Tuple2", _0: d(t, e, f, p, m), _1: g}
                })
            }), i(function (t, r, n, e, o, c) {
                var u = r, i = n, _ = e, a = o, f = c;
                return io(function (r) {
                    var n = u._0(r), e = n._0, o = n._1, c = i._0(o), l = c._0, s = c._1, d = _._0(s), h = d._0, v = d._1,
                        m = a._0(v), g = m._0, b = m._1, y = f._0(b), T = y._0, w = y._1;
                    return {ctor: "_Tuple2", _0: p(t, e, l, h, g, T), _1: w}
                })
            }), n(function (t, r) {
                var n = r;
                return io(function (r) {
                    var e = n._0(r), o = e._0, c = e._1;
                    return (0, t(o)._0)(c)
                })
            })), po = (n(function (t, r) {
                return l(so, function (t) {
                    return t ? l(ao, $, r) : function (t) {
                        return io(function (r) {
                            return {ctor: "_Tuple2", _0: t, _1: r}
                        })
                    }(Z)
                }, t)
            }), n(function (t, r) {
                return io(l(uo, r, t))
            }), n(function (t, r) {
                return {ctor: "Seed", _0: t, _1: r}
            })), ho = function (t) {
                var r = t, n = r._1;
                return l(po, 1664525 * r._0 + n >>> 0, n)
            }, vo = function (t) {
                var r = ho(l(po, 0, 1013904223)), n = r._0, e = r._1;
                return ho(l(po, n + t >>> 0, e))
            }, mo = (n(function (t, r) {
                return l(je, t, l(Ee, function (t) {
                    return Nn(l(co, r, vo(E(t))))
                }, Ve))
            }), n(function (t, r) {
                return io(function (n) {
                    var e = y.cmp(t, r) < 0 ? {ctor: "_Tuple2", _0: t, _1: r} : {ctor: "_Tuple2", _0: r, _1: t}, o = e._0,
                        c = e._1 - o + 1;
                    if (y.eq(c - 1 & c, 0)) return {ctor: "_Tuple2", _0: ((c - 1 & oo(n)) >>> 0) + o, _1: ho(n)};
                    var u = l(G, 0 - c >>> 0, c) >>> 0;
                    return function (t) {
                        for (; ;) {
                            var r = ho(t), n = oo(t);
                            if (!(y.cmp(n, u) < 0)) return {ctor: "_Tuple2", _0: l(G, n, c) + o, _1: r};
                            t = r
                        }
                    }(n)
                })
            })), go = l(ao, n(function (t, r) {
                return y.eq(t, r)
            })(1), l(mo, 0, 1)), bo = (n(function (t, r) {
                return l(ao, function (n) {
                    return n ? t : r
                }, go)
            }), function () {
                var t = n(function (t, r) {
                    for (; ;) {
                        var n = r;
                        if ("[]" === n.ctor) return Z;
                        if (y.eq(t, 0)) return $(n._0);
                        t = t - 1, r = n._1
                    }
                })
            }(), n(function (t, r) {
                return io(function (n) {
                    var e = J(r - t), o = oo(n), c = 1 * R(67108863 & o), u = ho(n), i = oo(u);
                    return {
                        ctor: "_Tuple2",
                        _0: (134217728 * c + 1 * R(134217727 & i)) / 9007199254740992 * e + t,
                        _1: ho(u)
                    }
                })
            }), io(function (t) {
                var r = l(mo, 0, 4294967295), n = l(co, d(lo, o(function (t, r, n) {
                    return {ctor: "_Tuple3", _0: t, _1: r, _2: n}
                }), r, r, r), t), e = n._0._0, c = n._0._1, u = n._0._2;
                return {ctor: "_Tuple2", _0: n._1, _1: ho(l(po, e, (1 | c ^ u) >>> 0))}
            }), n(function (t, r) {
                var n = r, e = n._1, o = h(i(function (r, n, e, o, c, u) {
                    t:for (; ;) {
                        var i = c >>> 1, _ = l(no, e, e), a = l(no, e + 1, o), f = y.eq(1 & c, 1) ? {
                            ctor: "_Tuple2",
                            _0: l(no, r, e),
                            _1: l(no, n, e) + o >>> 0
                        } : {ctor: "_Tuple2", _0: r, _1: n}, s = f._0, d = f._1;
                        if (y.eq(i, 0)) {
                            if (y.cmp(t, 0) < 0 && u) {
                                r = s, n = d, e = _, o = a, c = -1, u = !1;
                                continue t
                            }
                            return {ctor: "_Tuple2", _0: s, _1: d}
                        }
                        r = s, n = d, e = _, o = a, c = i, u = u
                    }
                }), 1, 0, 1664525, e, t, !0), c = o._0, u = o._1;
                return l(po, l(no, c, n._0) + u >>> 0, e)
            }), he({
                ctor: "::",
                _0: s(de, po, l(me, 0, xe), l(me, 1, xe)),
                _1: {ctor: "::", _0: l(pe, vo, xe), _1: {ctor: "[]"}}
            }), function () {
                return {
                    regex: function (t) {
                        return new RegExp(t, "g")
                    }, caseInsensitive: function (t) {
                        return new RegExp(t.source, "gi")
                    }, escape: function (t) {
                        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    }, contains: n(function (t, r) {
                        return null !== r.match(t)
                    }), find: o(function (t, r, n) {
                        t = "All" === t.ctor ? 1 / 0 : t._0;
                        for (var e, o = [], c = 0, u = n, i = r.lastIndex, _ = -1; c++ < t && (e = r.exec(u)) && _ !== r.lastIndex;) {
                            for (var a = e.length - 1, f = new Array(a); a > 0;) {
                                var l = e[a];
                                f[--a] = void 0 === l ? Z : $(l)
                            }
                            o.push({match: e[0], submatches: nt.fromArray(f), index: e.index, number: c}), _ = r.lastIndex
                        }
                        return r.lastIndex = i, nt.fromArray(o)
                    }), replace: c(function (t, r, n, e) {
                        t = "All" === t.ctor ? 1 / 0 : t._0;
                        var o = 0;
                        return e.replace(r, function (r) {
                            if (o++ >= t) return r;
                            for (var e = arguments.length - 3, c = new Array(e); e > 0;) {
                                var u = arguments[e];
                                c[--e] = void 0 === u ? Z : $(u)
                            }
                            return n({
                                match: r,
                                submatches: nt.fromArray(c),
                                index: arguments[arguments.length - 2],
                                number: o
                            })
                        })
                    }), split: o(function (t, r, n) {
                        if ((t = "All" === t.ctor ? 1 / 0 : t._0) === 1 / 0) return nt.fromArray(n.split(r));
                        for (var e, o = n, c = [], u = r.lastIndex, i = r.lastIndex; t-- && (e = r.exec(o));) c.push(o.slice(u, e.index)), u = r.lastIndex;
                        return c.push(o.slice(u)), r.lastIndex = i, nt.fromArray(c)
                    })
                }
            }()), yo = (bo.split, bo.replace), To = (bo.find, bo.contains), wo = (bo.caseInsensitive, bo.regex),
            ko = (bo.escape, c(function (t, r, n, e) {
                return {match: t, submatches: r, index: n, number: e}
            }), {ctor: "All"}), xo = l(mo, 0, 15), So = function () {
                var t = n(function (t, r) {
                    return Xt(r + t)
                });
                return zt(l(z["++"], l(bt, t(48), l(Dt, 0, 9)), l(bt, t(97), l(Dt, 0, 5))))
            }(), Mo = function (t) {
                var r = l(k, Pt, So)(t);
                return "Nothing" === r.ctor ? y.chr("x") : r._0
            },
            No = wo("^[0-9A-Fa-f]{8,8}-[0-9A-Fa-f]{4,4}-[1-5][0-9A-Fa-f]{3,3}-[8-9A-Ba-b][0-9A-Fa-f]{3,3}-[0-9A-Fa-f]{12,12}$"),
            Bo = function (t) {
                return 3 & t | 8
            }, Ro = l(ao, function (t) {
                return Or({
                    ctor: "::",
                    _0: _r(l(bt, Mo, l(Ct, 8, t))),
                    _1: {
                        ctor: "::",
                        _0: "-",
                        _1: {
                            ctor: "::",
                            _0: _r(l(bt, Mo, l(Ct, 4, l(ct, 8, t)))),
                            _1: {
                                ctor: "::",
                                _0: "-",
                                _1: {
                                    ctor: "::",
                                    _0: "4",
                                    _1: {
                                        ctor: "::",
                                        _0: _r(l(bt, Mo, l(Ct, 3, l(ct, 12, t)))),
                                        _1: {
                                            ctor: "::",
                                            _0: "-",
                                            _1: {
                                                ctor: "::",
                                                _0: _r(l(bt, Mo, l(bt, Bo, l(Ct, 1, l(ct, 15, t))))),
                                                _1: {
                                                    ctor: "::",
                                                    _0: _r(l(bt, Mo, l(Ct, 3, l(ct, 16, t)))),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: "-",
                                                        _1: {
                                                            ctor: "::",
                                                            _0: _r(l(bt, Mo, l(Ct, 12, l(ct, 19, t)))),
                                                            _1: {ctor: "[]"}
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }, l(_o, 31, xo)), Oo = function (t) {
                return t._0
            }, Ao = function (t) {
                return {ctor: "Uuid", _0: t}
            }, Co = function (t) {
                return function (t) {
                    return l(To, No, t)
                }(t) ? $(Ao(vr(t))) : Z
            }, Eo = (l(ee, function (t) {
                var r = Co(t);
                return "Just" === r.ctor ? ce(r._0) : oe("Not a valid UUID")
            }, Me), l(ao, Ao, Ro)), Lo = l(be, {ctor: "::", _0: "className", _1: {ctor: "[]"}}, Me),
            qo = l(ge, "scrollTop", ke), Do = l(ge, "scrollLeft", ke), Io = l(ge, "offsetTop", ke),
            Fo = l(ge, "offsetLeft", ke), Po = l(ge, "offsetHeight", ke), Jo = l(ge, "offsetWidth", ke),
            jo = function (t) {
                var r = n(function (n, e) {
                    return l(ee, function (t) {
                        return l(X, ce(e), l(tt, function (t) {
                            return l(r, n + 1, {ctor: "::", _0: t, _1: e})
                        }, t))
                    }, ve(l(ge, M(n), t)))
                });
                return l(pe, kt, l(ge, "childNodes", l(r, 0, {ctor: "[]"})))
            }, Uo = function (t) {
                return be({ctor: "::", _0: "childNodes", _1: {ctor: "::", _0: M(t), _1: {ctor: "[]"}}})
            }, Ho = function (t) {
                return l(ge, "parentElement", t)
            }, Wo = function (t) {
                return l(ge, "nextSibling", t)
            }, zo = n(function (t, r) {
                return he({
                    ctor: "::",
                    _0: l(ge, "offsetParent", re(t)),
                    _1: {ctor: "::", _0: l(ge, "offsetParent", r), _1: {ctor: "[]"}}
                })
            }), Go = n(function (t, r) {
                return l(ee, function (t) {
                    var r = t, n = r._1, e = r._0;
                    return l(zo, {ctor: "_Tuple2", _0: e, _1: n}, l(Go, e, n))
                }, p(le, c(function (n, e, o, c) {
                    return {ctor: "_Tuple2", _0: t + o - n, _1: r + c - e}
                }), Do, qo, Fo, Io))
            }), Yo = d(se, o(function (t, r, n) {
                var e = t;
                return {top: e._1, left: e._0, width: r, height: n}
            }), l(Go, 0, 0), Jo, Po), Vo = function (t) {
                return l(ge, "target", t)
            }, Qo = (c(function (t, r, n, e) {
                return {top: t, left: r, width: n, height: e}
            }), o(function (t, r, n) {
                var e = n;
                return s(qr, o(function (r, n, e) {
                    return l(t, r, e)
                }), r, e._0)
            }), o(function (t, r, n) {
                var e = n;
                return s(Pr, o(function (r, n, e) {
                    return l(t, r, e)
                }), r, e._0)
            }), function (t) {
                return Dr(t._0)
            }), Xo = n(function (t, r) {
                return l(zr, t, r._0)
            }), Zo = function (t) {
                return {ctor: "Set_elm_builtin", _0: t}
            }, Ko = Zo(rn), $o = n(function (t, r) {
                return Zo(s(vn, t, {ctor: "_Tuple0"}, r._0))
            }), tc = (n(function (t, r) {
                return function (t) {
                    return s(st, $o, Ko, t)
                }(l(bt, t, Qo(r)))
            }), n(function (t, r) {
                return Zo(l(kn, t, r._0))
            }), n(function (t, r) {
                var n = r;
                return Zo(l(gn, t._0, n._0))
            }), n(function (t, r) {
                var n = r;
                return Zo(l(yn, t._0, n._0))
            }), n(function (t, r) {
                var n = r;
                return Zo(l(xn, t._0, n._0))
            }), n(function (t, r) {
                var e = r;
                return Zo(l(bn, n(function (r, n) {
                    return t(r)
                }), e._0))
            }), n(function (t, r) {
                var e = r, o = l(Tn, n(function (r, n) {
                    return t(r)
                }), e._0), c = o._0, u = o._1;
                return {ctor: "_Tuple2", _0: Zo(c), _1: Zo(u)}
            }), o(function (t, r, n) {
                var e = y.cmp(dt(n), 0) > 0, o = y.cmp(t, 0) > 0 && y.cmp(r, 0) > 0, c = l(ct, r, n), u = l(Ct, t, n);
                return o && e ? {ctor: "::", _0: u, _1: s(tc, t, r, c)} : {ctor: "[]"}
            })), rc = n(function (t, r) {
                return s(tc, t, t, r)
            }), nc = o(function (t, r, n) {
                var e = y.cmp(t, 0) > 0 && y.cmp(r, 0) > 0, o = l(ct, r, n), c = l(Ct, t, n), u = y.eq(t, dt(c));
                return e && u ? {ctor: "::", _0: c, _1: s(nc, t, r, o)} : {ctor: "[]"}
            }), ec = (n(function (t, r) {
                return s(nc, t, t, r)
            }), ut(u(function (t, r, n, e, o) {
                return {ctor: "_Tuple5", _0: t, _1: r, _2: n, _3: e, _4: o}
            })), it(c(function (t, r, n, e) {
                return {ctor: "_Tuple4", _0: t, _1: r, _2: n, _3: e}
            })), _t(o(function (t, r, n) {
                return {ctor: "_Tuple3", _0: t, _1: r, _2: n}
            })), at(n(function (t, r) {
                return {ctor: "_Tuple2", _0: t, _1: r}
            })), n(function (t, r) {
                var n = {ctor: "_Tuple2", _0: t, _1: r};
                return "[]" === n._0.ctor || "[]" !== n._1.ctor && (y.eq(n._0._0, n._1._0) && l(ec, n._0._1, n._1._1))
            })), oc = (n(function (t, r) {
                return l(ec, kt(t), kt(r))
            }), function (t) {
                var r = t;
                if ("[]" === r.ctor) return {ctor: "[]"};
                var n = r._1, e = r._0;
                return {
                    ctor: "::", _0: {ctor: "_Tuple2", _0: e, _1: n}, _1: l(bt, function (t) {
                        var r = t;
                        return {ctor: "_Tuple2", _0: r._0, _1: {ctor: "::", _0: e, _1: r._1}}
                    }, oc(n))
                }
            }), cc = n(function (t, r) {
                var n = r;
                if ("::" === n.ctor) {
                    var e = n._0;
                    return {ctor: "::", _0: {ctor: "::", _0: t, _1: e}, _1: {ctor: "::", _0: e, _1: n._1}}
                }
                return {ctor: "[]"}
            }), uc = l(lt, cc, {ctor: "::", _0: {ctor: "[]"}, _1: {ctor: "[]"}}), ic = (n(function (t, r) {
                return l(ft, ec(t), uc(r))
            }), l(lt, n(function (t, r) {
                return {
                    ctor: "::", _0: {ctor: "[]"}, _1: l(bt, n(function (t, r) {
                        return {ctor: "::", _0: t, _1: r}
                    })(t), r)
                }
            }), {ctor: "::", _0: {ctor: "[]"}, _1: {ctor: "[]"}}), n(function (t, r) {
                var n = r;
                if ("[]" === n.ctor) return {ctor: "[]"};
                if ("[]" === n._1.ctor) return {ctor: "::", _0: {ctor: "::", _0: n._0, _1: {ctor: "[]"}}, _1: {ctor: "[]"}};
                var e = n._0, o = l(ic, t, n._1);
                return "::" === o.ctor ? l(t, e, n._1._0) ? {
                    ctor: "::",
                    _0: {ctor: "::", _0: e, _1: o._0},
                    _1: o._1
                } : {ctor: "::", _0: {ctor: "::", _0: e, _1: {ctor: "[]"}}, _1: o} : {ctor: "[]"}
            })), _c = (n(function (t, r) {
                var e = n(function (t, r) {
                    var n = r;
                    return "Nothing" === n.ctor ? Z : "[]" === n._0.ctor ? Z : y.eq(t, n._0._0) ? $(n._0._1) : Z
                });
                return s(st, e, $(r), t)
            }), n(function (t, r) {
                return {ctor: "_Tuple2", _0: l(Ct, t, r), _1: l(ct, t, r)}
            })), ac = o(function (t, r, n) {
                for (; ;) {
                    var e = {ctor: "_Tuple2", _0: t, _1: r};
                    if ("_Tuple2" !== e.ctor || "::" !== e._0.ctor || "::" !== e._1.ctor) return kt(n);
                    var o = l(_c, e._0._0, r), c = o._0, u = o._1;
                    t = e._0._1, r = u, n = {ctor: "::", _0: c, _1: n}
                }
            }), fc = (n(function (t, r) {
                return s(ac, t, r, {ctor: "[]"})
            }), n(function (t, r) {
                var n = t(r);
                return "Nothing" === n.ctor ? {ctor: "[]"} : {ctor: "::", _0: n._0._0, _1: l(fc, t, n._0._1)}
            })), lc = n(function (t, r) {
                var n = r;
                if ("[]" === n.ctor) return {ctor: "[]"};
                if ("[]" === n._1.ctor) return {ctor: "::", _0: n._0, _1: {ctor: "[]"}};
                var e = l(lc, t, n._1);
                return "::" === e.ctor ? {ctor: "::", _0: l(t, n._0, e._0), _1: e} : {ctor: "[]"}
            }), sc = o(function (t, r, n) {
                var e = n;
                if ("[]" === e.ctor) return {ctor: "::", _0: r, _1: {ctor: "[]"}};
                var o = s(sc, t, r, e._1);
                return "::" === o.ctor ? {ctor: "::", _0: l(t, e._0, o._0), _1: o} : {ctor: "[]"}
            }), dc = (n(function (t, r) {
                var n = r;
                return "[]" === n.ctor ? {ctor: "[]"} : s(xt, t, n._0, n._1)
            }), o(function (t, r, e) {
                var o = n(function (r, n) {
                    var e = n, o = e._0;
                    return {ctor: "_Tuple2", _0: o - 1, _1: s(t, o, r, e._1)}
                });
                return Mn(s(lt, o, {ctor: "_Tuple2", _0: dt(e) - 1, _1: r}, e))
            }), o(function (t, r, e) {
                var o = n(function (r, n) {
                    var e = n, o = e._0;
                    return {ctor: "_Tuple2", _0: o + 1, _1: s(t, o, r, e._1)}
                });
                return Mn(s(st, o, {ctor: "_Tuple2", _0: 0, _1: r}, e))
            }), n(function (t, r) {
                var e = n(function (r, n) {
                    return $(function () {
                        var e = n;
                        return "Nothing" === e.ctor ? r : l(t, r, e._0)
                    }())
                });
                return s(lt, e, Z, r)
            }), n(function (t, r) {
                var e = n(function (r, n) {
                    return $(function () {
                        var e = n;
                        return "Nothing" === e.ctor ? r : l(t, e._0, r)
                    }())
                });
                return s(st, e, Z, r)
            })), pc = o(function (t, r, n) {
                t:for (; ;) {
                    var e = {ctor: "_Tuple2", _0: t, _1: r};
                    r:do {
                        if ("::" === e._0.ctor) {
                            if ("::" === e._1.ctor) {
                                t = e._0._1, r = e._1._1, n = l(z["++"], n, {
                                    ctor: "::",
                                    _0: e._0._0,
                                    _1: {ctor: "::", _0: e._1._0, _1: {ctor: "[]"}}
                                });
                                continue t
                            }
                            break r
                        }
                        if ("[]" === e._1.ctor) break r;
                        return l(z["++"], n, e._1)
                    } while (0);
                    return l(z["++"], n, e._0)
                }
            }), hc = (n(function (t, r) {
                return s(pc, t, r, {ctor: "[]"})
            }), function (t) {
                var r = t;
                if ("[]" === r.ctor) return {ctor: "::", _0: {ctor: "[]"}, _1: {ctor: "[]"}};
                return l(Nt, function (t) {
                    var r = t;
                    return l(bt, n(function (t, r) {
                        return {ctor: "::", _0: t, _1: r}
                    })(r._0), hc(r._1))
                }, oc(r))
            }), vc = (n(function (t, r) {
                return l(pt, t, hc(r))
            }), function (t) {
                var r = t;
                if ("[]" === r.ctor) return {ctor: "[]"};
                var e = r._0, o = n(function (t, r) {
                    return {ctor: "::", _0: t, _1: {ctor: "::", _0: {ctor: "::", _0: e, _1: t}, _1: r}}
                });
                return {ctor: "::", _0: {ctor: "::", _0: e, _1: {ctor: "[]"}}, _1: s(lt, o, {ctor: "[]"}, vc(r._1))}
            }), mc = (n(function (t, r) {
                return l(pt, t, function (t) {
                    return {ctor: "::", _0: {ctor: "[]"}, _1: vc(t)}
                }(r))
            }), n(function (t, r) {
                return l(yt, function (r) {
                    return !t(r)
                }, r)
            }), n(function (t, r) {
                if (y.cmp(t, 0) < 0) return r;
                var n = vt(l(ct, t, r)), e = l(Ct, t, r), o = n;
                return "Nothing" === o.ctor ? r : l(St, e, o._0)
            }), n(function (t, r) {
                var e = n(function (r, n) {
                    var e = r, o = n, c = l(t, e._0, o._0);
                    return "EQ" === c.ctor ? l(D, e._1, o._1) : c
                }), o = l(It, n(function (t, r) {
                    return {ctor: "_Tuple2", _0: r, _1: t}
                }), r);
                return l(bt, Nn, l(et, e, o))
            }), o(function (t, r, n) {
                if (y.cmp(t, 0) < 0) return Z;
                var e = vt(l(ct, t, n)), o = l(Ct, t, n), c = e;
                return "Nothing" === c.ctor ? Z : $(l(St, o, {ctor: "::", _0: r, _1: c._0}))
            }), n(function (t, r) {
                var n = r;
                if ("[]" === n.ctor) return {ctor: "[]"};
                var e = n._1, o = n._0;
                return y.eq(t, o) ? e : {ctor: "::", _0: o, _1: l(mc, t, e)}
            })), gc = o(function (t, r, e) {
                return l(It, n(function (n, e) {
                    return t(n) ? r(e) : e
                }), e)
            }), bc = (o(function (t, r, e) {
                return y.cmp(t, 0) < 0 || y.cmp(t, dt(e)) > -1 ? Z : $(s(gc, n(function (t, r) {
                    return y.eq(t, r)
                })(t), r, e))
            }), o(function (t, r, n) {
                return l(bt, function (n) {
                    return t(n) ? r(n) : n
                }, n)
            })), yc = (o(function (t, r, n) {
                return s(bc, t, x(r), n)
            }), function (t) {
                return function (r) {
                    return l(bt, Nn, l(yt, function (r) {
                        return t(r._1)
                    }, l(It, n(function (t, r) {
                        return {ctor: "_Tuple2", _0: t, _1: r}
                    }), r)))
                }
            }), Tc = function (t) {
                return function (r) {
                    return mt(l(yc, t, r))
                }
            }, wc = (n(function (t, r) {
                return l(tt, function (t) {
                    return l(_c, t, r)
                }, l(Tc, t, r))
            }), n(function (t, r) {
                for (; ;) {
                    var n = r;
                    if ("[]" === n.ctor) return Z;
                    var e = n._0;
                    if (t(e)) return $(e);
                    t = t, r = n._1
                }
            }), Nt), kc = (o(function (t, r, n) {
                return l(wc, function (r) {
                    return l(wc, function (n) {
                        return {ctor: "::", _0: l(t, r, n), _1: {ctor: "[]"}}
                    }, n)
                }, r)
            }), c(function (t, r, n, e) {
                return l(wc, function (r) {
                    return l(wc, function (n) {
                        return l(wc, function (e) {
                            return {ctor: "::", _0: s(t, r, n, e), _1: {ctor: "[]"}}
                        }, e)
                    }, n)
                }, r)
            }), u(function (t, r, n, e, o) {
                return l(wc, function (r) {
                    return l(wc, function (n) {
                        return l(wc, function (e) {
                            return l(wc, function (o) {
                                return {ctor: "::", _0: d(t, r, n, e, o), _1: {ctor: "[]"}}
                            }, o)
                        }, e)
                    }, n)
                }, r)
            }), n(function (t, r) {
                return s(at, n(function (t, r) {
                    return t(r)
                }), r, t)
            }), o(function (t, r, n) {
                for (; ;) {
                    var e = n;
                    if ("[]" === e.ctor) return {ctor: "[]"};
                    var o = e._1, c = e._0, u = t(c);
                    if (!l(Xo, u, r)) return {ctor: "::", _0: c, _1: s(kc, t, l($o, u, r), o)};
                    t = t, r = r, n = o
                }
            })), xc = n(function (t, r) {
                return s(kc, t, Ko, r)
            }), Sc = (n(function (t, r) {
                return y.eq(dt(r), dt(l(xc, t, r)))
            }), n(function (t, r) {
                for (; ;) {
                    var n = r;
                    if ("[]" === n.ctor) return {ctor: "[]"};
                    if (!t(n._0)) return r;
                    t = t, r = n._1
                }
            })), Mc = function (t) {
                return n(function (r, n) {
                    for (; ;) {
                        var e = n;
                        if ("[]" === e.ctor) return kt(r);
                        var o = e._0;
                        if (!t(o)) return kt(r);
                        r = {ctor: "::", _0: o, _1: r}, n = e._1
                    }
                })({ctor: "[]"})
            }, Nc = n(function (t, r) {
                return {ctor: "_Tuple2", _0: l(Mc, t, r), _1: l(Sc, t, r)}
            }), Bc = n(function (t, r) {
                var n = r;
                if ("[]" === n.ctor) return {ctor: "[]"};
                var e = n._0, o = l(Nc, t(e), n._1), c = o._0, u = o._1;
                return {ctor: "::", _0: {ctor: "::", _0: e, _1: c}, _1: l(Bc, t, u)}
            }), Rc = (Bc(n(function (t, r) {
                return y.eq(t, r)
            })), n(function (t, r) {
                var e = n(function (r, n) {
                    var e = n, o = e._1, c = t(r);
                    return y.cmp(c, o) < 0 ? {ctor: "_Tuple2", _0: r, _1: c} : {ctor: "_Tuple2", _0: e._0, _1: o}
                }), o = r;
                if ("::" === o.ctor) {
                    if ("[]" === o._1.ctor) return $(o._0);
                    var c = o._0;
                    return $(Nn(s(st, e, {ctor: "_Tuple2", _0: c, _1: t(c)}, o._1)))
                }
                return Z
            }), n(function (t, r) {
                var e = n(function (r, n) {
                    var e = n, o = e._1, c = t(r);
                    return y.cmp(c, o) > 0 ? {ctor: "_Tuple2", _0: r, _1: c} : {ctor: "_Tuple2", _0: e._0, _1: o}
                }), o = r;
                if ("::" === o.ctor) {
                    if ("[]" === o._1.ctor) return $(o._0);
                    var c = o._0;
                    return $(Nn(s(st, e, {ctor: "_Tuple2", _0: c, _1: t(c)}, o._1)))
                }
                return Z
            }), function (t) {
                var r = t;
                return "[]" === r.ctor ? Z : $({ctor: "_Tuple2", _0: r._0, _1: r._1})
            }), Oc = (o(function (t, r, e) {
                for (; ;) {
                    if (y.eq(t, r)) return $(e);
                    if (!(y.cmp(t, r) > 0)) {
                        if (y.cmp(t, 0) < 0) return Z;
                        var o = l(_c, t, e), c = o._0, u = o._1, i = l(_c, r - t, u), _ = i._0, a = i._1;
                        return s(rt, n(function (t, r) {
                            var n = t, e = r;
                            return Mt({
                                ctor: "::",
                                _0: c,
                                _1: {
                                    ctor: "::",
                                    _0: {ctor: "::", _0: e._0, _1: n._1},
                                    _1: {ctor: "::", _0: {ctor: "::", _0: n._0, _1: e._1}, _1: {ctor: "[]"}}
                                }
                            })
                        }), Rc(_), Rc(a))
                    }
                    var f = t;
                    t = r, r = f, e = e
                }
            }), n(function (t, r) {
                var n = t(r);
                return "Just" === n.ctor ? {ctor: "::", _0: r, _1: l(Oc, t, n._0)} : {ctor: "::", _0: r, _1: {ctor: "[]"}}
            })), Ac = n(function (t, r) {
                return y.cmp(t, 0) < 0 ? Z : mt(l(ct, t, r))
            }), Cc = Cc || {};
        Cc["!!"] = k(Ac);
        !function () {
            var t = n(function (t, r) {
                return function (n) {
                    return l(X, t, l(tt, r, n))
                }
            });
            l(lt, function (r) {
                return function (e) {
                    return $(s(t, {ctor: "[]"}, n(function (t, r) {
                        return {ctor: "::", _0: t, _1: r}
                    })(r), e))
                }
            }, Z)
        }();
        var Ec, Lc = dc(k(x)), qc = (n(function (t, r) {
                return "Err" === r.ctor ? t : r
            }), n(function (t, r) {
                return "Err" === r.ctor ? t({ctor: "_Tuple0"}) : r
            }), n(function (t, r) {
                return "Err" === t.ctor ? r({ctor: "_Tuple0"}) : t
            }), n(function (t, r) {
                return "Err" === t.ctor ? r : t
            }), n(function (t, r) {
                var n = {ctor: "_Tuple2", _0: t, _1: r};
                return "Err" === n._1.ctor ? rr(n._1._0) : l(or, n._1._0, n._0)
            }), l(lt, cr(n(function (t, r) {
                return {ctor: "::", _0: t, _1: r}
            })), er({ctor: "[]"}))), Dc = (o(function (t, r, n) {
                var e = n;
                return "Ok" === e.ctor ? er(r(e._0)) : rr(t(e._0))
            }), o(function (t, r, n) {
                var e = n;
                return "Ok" === e.ctor ? r(e._0) : t(e._0)
            })), Ic = (o(function (t, r, n) {
                var e = n;
                return "Ok" === e.ctor ? r(e._0) : t
            }), n(function (t, r) {
                var n = r;
                return "Ok" === n.ctor ? n._0 : t(n._0)
            }), function () {
                var t = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                return {
                    fromString: function (t) {
                        var r = new Date(t);
                        return isNaN(r.getTime()) ? rr("Unable to parse '" + t + "' as a date. Dates must be in the ISO 8601 format.") : er(r)
                    }, year: function (t) {
                        return t.getFullYear()
                    }, month: function (t) {
                        return {ctor: r[t.getMonth()]}
                    }, day: function (t) {
                        return t.getDate()
                    }, hour: function (t) {
                        return t.getHours()
                    }, minute: function (t) {
                        return t.getMinutes()
                    }, second: function (t) {
                        return t.getSeconds()
                    }, millisecond: function (t) {
                        return t.getMilliseconds()
                    }, toTime: function (t) {
                        return t.getTime()
                    }, fromTime: function (t) {
                        return new Date(t)
                    }, dayOfWeek: function (r) {
                        return {ctor: t[r.getDay()]}
                    }
                }
            }()), Fc = Ic.millisecond, Pc = Ic.second, Jc = Ic.minute, jc = Ic.hour, Uc = Ic.dayOfWeek, Hc = Ic.day,
            Wc = Ic.month, zc = Ic.year, Gc = Ic.fromTime, Yc = Ic.toTime, Vc = Ic.fromString, Qc = l(Ee, Gc, Ve),
            Xc = {ctor: "Sun"}, Zc = {ctor: "Mon"}, Kc = {ctor: "Dec"}, $c = {ctor: "Nov"}, tu = {ctor: "Oct"},
            ru = {ctor: "Sep"}, nu = {ctor: "Aug"}, eu = {ctor: "Jul"}, ou = {ctor: "Jun"}, cu = {ctor: "May"},
            uu = {ctor: "Apr"}, iu = {ctor: "Mar"}, _u = {ctor: "Feb"}, au = {ctor: "Jan"}, fu = Rn.kill, lu = Rn.sleep,
            su = Rn.spawn, du = function () {
                var t = {
                    addEventListener: function () {
                    }, removeEventListener: function () {
                    }
                }, r = c("undefined" != typeof document ? document : t), e = c("undefined" != typeof window ? window : t);

                function c(t) {
                    return function (r, n, e) {
                        return Rn.nativeBinding(function (o) {
                            function c(t) {
                                var r = l(ue, n, t);
                                "Ok" === r.ctor && Rn.rawSpawn(e(r._0))
                            }

                            return t.addEventListener(r, c), function () {
                                t.removeEventListener(r, c)
                            }
                        })
                    }
                }

                var u = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
                    t()
                };

                function i(t, r) {
                    return Rn.nativeBinding(function (n) {
                        u(function () {
                            var e = document.getElementById(t);
                            n(null !== e ? Rn.succeed(r(e)) : Rn.fail({ctor: "NotFound", _0: t}))
                        })
                    })
                }

                return {
                    onDocument: o(r), onWindow: o(e), focus: function (t) {
                        return i(t, function (t) {
                            return t.focus(), y.Tuple0
                        })
                    }, blur: function (t) {
                        return i(t, function (t) {
                            return t.blur(), y.Tuple0
                        })
                    }, getScrollTop: function (t) {
                        return i(t, function (t) {
                            return t.scrollTop
                        })
                    }, setScrollTop: n(function (t, r) {
                        return i(t, function (t) {
                            return t.scrollTop = r, y.Tuple0
                        })
                    }), getScrollLeft: function (t) {
                        return i(t, function (t) {
                            return t.scrollLeft
                        })
                    }, setScrollLeft: n(function (t, r) {
                        return i(t, function (t) {
                            return t.scrollLeft = r, y.Tuple0
                        })
                    }), toBottom: function (t) {
                        return i(t, function (t) {
                            return t.scrollTop = t.scrollHeight, y.Tuple0
                        })
                    }, toRight: function (t) {
                        return i(t, function (t) {
                            return t.scrollLeft = t.scrollWidth, y.Tuple0
                        })
                    }, height: n(function (t, r) {
                        return i(r, function (r) {
                            switch (t.ctor) {
                                case"Content":
                                    return r.scrollHeight;
                                case"VisibleContent":
                                    return r.clientHeight;
                                case"VisibleContentWithBorders":
                                    return r.offsetHeight;
                                case"VisibleContentWithBordersAndMargins":
                                    var n = r.getBoundingClientRect();
                                    return n.bottom - n.top
                            }
                        })
                    }), width: n(function (t, r) {
                        return i(r, function (r) {
                            switch (t.ctor) {
                                case"Content":
                                    return r.scrollWidth;
                                case"VisibleContent":
                                    return r.clientWidth;
                                case"VisibleContentWithBorders":
                                    return r.offsetWidth;
                                case"VisibleContentWithBordersAndMargins":
                                    var n = r.getBoundingClientRect();
                                    return n.right - n.left
                            }
                        })
                    })
                }
            }(), pu = du.onWindow, hu = du.onDocument, vu = function () {
                var t = "STYLE", r = "EVENT", e = "ATTR", u = "ATTR_NS", i = "undefined" != typeof document ? document : {};

                function _(t, r, n) {
                    return {type: "thunk", func: t, args: r, thunk: n, node: void 0}
                }

                function a(n) {
                    for (var o, c = {}; "[]" !== n.ctor;) {
                        var i = n._0, _ = i.key;
                        if (_ === e || _ === u || _ === r) {
                            var a = c[_] || {};
                            a[i.realKey] = i.value, c[_] = a
                        } else if (_ === t) {
                            for (var f = c[_] || {}, l = i.value; "[]" !== l.ctor;) {
                                var s = l._0;
                                f[s._0] = s._1, l = l._1
                            }
                            c[_] = f
                        } else if ("namespace" === _) o = i.value; else if ("className" === _) {
                            var d = c[_];
                            c[_] = void 0 === d ? i.value : d + " " + i.value
                        } else c[_] = i.value;
                        n = n._1
                    }
                    return {facts: c, namespace: o}
                }

                function f(t, n, e) {
                    return {key: r, realKey: t, value: {options: n, decoder: e}}
                }

                function d(t, r) {
                    return (t.options === r.options || t.options.stopPropagation === r.options.stopPropagation && t.options.preventDefault === r.options.preventDefault) && Xn.equality(t.decoder, r.decoder)
                }

                function p(t, r) {
                    switch (t.type) {
                        case"thunk":
                            return t.node || (t.node = t.thunk()), p(t.node, r);
                        case"tagger":
                            for (var n = t.node, e = t.tagger; "tagger" === n.type;) "object" != typeof e ? e = [e, n.tagger] : e.push(n.tagger), n = n.node;
                            var o = {tagger: e, parent: r};
                            return (_ = p(n, o)).elm_event_node_ref = o, _;
                        case"text":
                            return i.createTextNode(t.text);
                        case"node":
                            h(_ = t.namespace ? i.createElementNS(t.namespace, t.tag) : i.createElement(t.tag), r, t.facts);
                            for (var c = t.children, u = 0; u < c.length; u++) _.appendChild(p(c[u], r));
                            return _;
                        case"keyed-node":
                            h(_ = t.namespace ? i.createElementNS(t.namespace, t.tag) : i.createElement(t.tag), r, t.facts);
                            for (c = t.children, u = 0; u < c.length; u++) _.appendChild(p(c[u]._1, r));
                            return _;
                        case"custom":
                            var _;
                            return h(_ = t.impl.render(t.model), r, t.facts), _
                    }
                }

                function h(n, o, c) {
                    for (var i in c) {
                        var _ = c[i];
                        switch (i) {
                            case t:
                                v(n, _);
                                break;
                            case r:
                                m(n, o, _);
                                break;
                            case e:
                                b(n, _);
                                break;
                            case u:
                                T(n, _);
                                break;
                            case"value":
                                n[i] !== _ && (n[i] = _);
                                break;
                            default:
                                n[i] = _
                        }
                    }
                }

                function v(t, r) {
                    var n = t.style;
                    for (var e in r) n[e] = r[e]
                }

                function m(t, r, n) {
                    var e = t.elm_handlers || {};
                    for (var o in n) {
                        var c = e[o], u = n[o];
                        if (void 0 === u) t.removeEventListener(o, c), e[o] = void 0; else if (void 0 === c) {
                            c = g(r, u);
                            t.addEventListener(o, c), e[o] = c
                        } else c.info = u
                    }
                    t.elm_handlers = e
                }

                function g(t, r) {
                    function n(r) {
                        var e = n.info, o = l(Xn.run, e.decoder, r);
                        if ("Ok" === o.ctor) {
                            var c = e.options;
                            c.stopPropagation && r.stopPropagation(), c.preventDefault && r.preventDefault();
                            for (var u = o._0, i = t; i;) {
                                var _ = i.tagger;
                                if ("function" == typeof _) u = _(u); else for (var a = _.length; a--;) u = _[a](u);
                                i = i.parent
                            }
                        }
                    }

                    return n.info = r, n
                }

                function b(t, r) {
                    for (var n in r) {
                        var e = r[n];
                        void 0 === e ? t.removeAttribute(n) : t.setAttribute(n, e)
                    }
                }

                function T(t, r) {
                    for (var n in r) {
                        var e = r[n], o = e.namespace, c = e.value;
                        void 0 === c ? t.removeAttributeNS(o, n) : t.setAttributeNS(o, n, c)
                    }
                }

                function w(t, r) {
                    var n = [];
                    return x(t, r, n, 0), n
                }

                function k(t, r, n) {
                    return {index: r, type: t, data: n, domNode: void 0, eventNode: void 0}
                }

                function x(t, r, n, e) {
                    if (t !== r) {
                        var o = t.type, c = r.type;
                        if (o === c) switch (c) {
                            case"thunk":
                                for (var u = t.args, i = r.args, _ = u.length, a = t.func === r.func && _ === i.length; a && _--;) a = u[_] === i[_];
                                if (a) return void (r.node = t.node);
                                r.node = r.thunk();
                                var f = [];
                                return x(t.node, r.node, f, 0), void (f.length > 0 && n.push(k("p-thunk", e, f)));
                            case"tagger":
                                for (var l = t.tagger, s = r.tagger, d = !1, p = t.node; "tagger" === p.type;) d = !0, "object" != typeof l ? l = [l, p.tagger] : l.push(p.tagger), p = p.node;
                                for (var h = r.node; "tagger" === h.type;) d = !0, "object" != typeof s ? s = [s, h.tagger] : s.push(h.tagger), h = h.node;
                                return d && l.length !== s.length ? void n.push(k("p-redraw", e, r)) : ((d ? function (t, r) {
                                    for (var n = 0; n < t.length; n++) if (t[n] !== r[n]) return !1;
                                    return !0
                                }(l, s) : l === s) || n.push(k("p-tagger", e, s)), void x(p, h, n, e + 1));
                            case"text":
                                return t.text !== r.text ? void n.push(k("p-text", e, r.text)) : void 0;
                            case"node":
                                return t.tag !== r.tag || t.namespace !== r.namespace ? void n.push(k("p-redraw", e, r)) : (void 0 !== (v = S(t.facts, r.facts)) && n.push(k("p-facts", e, v)), void function (t, r, n, e) {
                                    var o = t.children, c = r.children, u = o.length, i = c.length;
                                    u > i ? n.push(k("p-remove-last", e, u - i)) : u < i && n.push(k("p-append", e, c.slice(u)));
                                    for (var _ = e, a = u < i ? u : i, f = 0; f < a; f++) {
                                        _++;
                                        var l = o[f];
                                        x(l, c[f], n, _), _ += l.descendantsCount || 0
                                    }
                                }(t, r, n, e));
                            case"keyed-node":
                                return t.tag !== r.tag || t.namespace !== r.namespace ? void n.push(k("p-redraw", e, r)) : (void 0 !== (v = S(t.facts, r.facts)) && n.push(k("p-facts", e, v)), void function (t, r, n, e) {
                                    var o, c = [], u = {}, i = [], _ = t.children, a = r.children, f = _.length,
                                        l = a.length, s = 0, d = 0, p = e;
                                    for (; s < f && d < l;) {
                                        var h = _[s], v = a[d], m = h._0, g = v._0, b = h._1, y = v._1;
                                        if (m !== g) {
                                            var T = s + 1 < f, w = d + 1 < l;
                                            if (T) var S = _[s + 1], M = S._0, R = S._1, O = g === M;
                                            if (w) var A = a[d + 1], C = A._0, E = A._1, L = m === C;
                                            if (T && w && L && O) x(b, E, c, ++p), N(u, c, m, y, d, i), p += b.descendantsCount || 0, B(u, c, m, R, ++p), p += R.descendantsCount || 0, s += 2, d += 2; else if (w && L) p++, N(u, c, g, y, d, i), x(b, E, c, p), p += b.descendantsCount || 0, s += 1, d += 2; else if (T && O) B(u, c, m, b, ++p), p += b.descendantsCount || 0, x(R, y, c, ++p), p += R.descendantsCount || 0, s += 2, d += 1; else {
                                                if (!T || !w || M !== C) break;
                                                B(u, c, m, b, ++p), N(u, c, g, y, d, i), p += b.descendantsCount || 0, x(R, E, c, ++p), p += R.descendantsCount || 0, s += 2, d += 2
                                            }
                                        } else x(b, y, c, ++p), p += b.descendantsCount || 0, s++, d++
                                    }
                                    for (; s < f;) {
                                        p++;
                                        var h = _[s], b = h._1;
                                        B(u, c, h._0, b, p), p += b.descendantsCount || 0, s++
                                    }
                                    for (; d < l;) {
                                        o = o || [];
                                        var v = a[d];
                                        N(u, c, v._0, v._1, void 0, o), d++
                                    }
                                    (c.length > 0 || i.length > 0 || void 0 !== o) && n.push(k("p-reorder", e, {
                                        patches: c,
                                        inserts: i,
                                        endInserts: o
                                    }))
                                }(t, r, n, e));
                            case"custom":
                                if (t.impl !== r.impl) return void n.push(k("p-redraw", e, r));
                                var v;
                                void 0 !== (v = S(t.facts, r.facts)) && n.push(k("p-facts", e, v));
                                var m = r.impl.diff(t, r);
                                return m ? void n.push(k("p-custom", e, m)) : void 0
                        } else n.push(k("p-redraw", e, r))
                    }
                }

                function S(n, o, c) {
                    var i;
                    for (var _ in n) if (_ !== t && _ !== r && _ !== e && _ !== u) if (_ in o) {
                        var a = n[_], f = o[_];
                        a === f && "value" !== _ || c === r && d(a, f) || ((i = i || {})[_] = f)
                    } else (i = i || {})[_] = void 0 === c ? "string" == typeof n[_] ? "" : null : c === t ? "" : c === r || c === e ? void 0 : {
                        namespace: n[_].namespace,
                        value: void 0
                    }; else {
                        var l = S(n[_], o[_] || {}, _);
                        l && ((i = i || {})[_] = l)
                    }
                    for (var s in o) s in n || ((i = i || {})[s] = o[s]);
                    return i
                }

                var M = "_elmW6BL";

                function N(t, r, n, e, o, c) {
                    var u = t[n];
                    if (void 0 === u) return u = {tag: "insert", vnode: e, index: o, data: void 0}, c.push({
                        index: o,
                        entry: u
                    }), void (t[n] = u);
                    if ("remove" === u.tag) {
                        c.push({index: o, entry: u}), u.tag = "move";
                        var i = [];
                        return x(u.vnode, e, i, u.index), u.index = o, void (u.data.data = {patches: i, entry: u})
                    }
                    N(t, r, n + M, e, o, c)
                }

                function B(t, r, n, e, o) {
                    var c = t[n];
                    if (void 0 === c) {
                        var u = k("p-remove", o, void 0);
                        return r.push(u), void (t[n] = {tag: "remove", vnode: e, index: o, data: u})
                    }
                    if ("insert" !== c.tag) B(t, r, n + M, e, o); else {
                        c.tag = "move";
                        var i = [];
                        x(e, c.vnode, i, o);
                        u = k("p-remove", o, {patches: i, entry: c});
                        r.push(u)
                    }
                }

                function R(t, r, n, e) {
                    !function t(r, n, e, o, c, u, i) {
                        var _ = e[o];
                        var a = _.index;
                        for (; a === c;) {
                            var f = _.type;
                            if ("p-thunk" === f) R(r, n.node, _.data, i); else if ("p-reorder" === f) {
                                _.domNode = r, _.eventNode = i;
                                var l = _.data.patches;
                                l.length > 0 && t(r, n, l, 0, c, u, i)
                            } else if ("p-remove" === f) {
                                _.domNode = r, _.eventNode = i;
                                var s = _.data;
                                if (void 0 !== s) {
                                    s.entry.data = r;
                                    var l = s.patches;
                                    l.length > 0 && t(r, n, l, 0, c, u, i)
                                }
                            } else _.domNode = r, _.eventNode = i;
                            if (!(_ = e[++o]) || (a = _.index) > u) return o
                        }
                        switch (n.type) {
                            case"tagger":
                                for (var d = n.node; "tagger" === d.type;) d = d.node;
                                return t(r, d, e, o, c + 1, u, r.elm_event_node_ref);
                            case"node":
                                for (var p = n.children, h = r.childNodes, v = 0; v < p.length; v++) {
                                    c++;
                                    var m = p[v], g = c + (m.descendantsCount || 0);
                                    if (c <= a && a <= g && (o = t(h[v], m, e, o, c, g, i), !(_ = e[o]) || (a = _.index) > u)) return o;
                                    c = g
                                }
                                return o;
                            case"keyed-node":
                                for (var p = n.children, h = r.childNodes, v = 0; v < p.length; v++) {
                                    c++;
                                    var m = p[v]._1, g = c + (m.descendantsCount || 0);
                                    if (c <= a && a <= g && (o = t(h[v], m, e, o, c, g, i), !(_ = e[o]) || (a = _.index) > u)) return o;
                                    c = g
                                }
                                return o;
                            case"text":
                            case"thunk":
                                throw new Error("should never traverse `text` or `thunk` nodes like this")
                        }
                    }(t, r, n, 0, 0, r.descendantsCount, e)
                }

                function O(t, r, n, e) {
                    return 0 === n.length ? t : (R(t, r, n, e), A(t, n))
                }

                function A(t, r) {
                    for (var n = 0; n < r.length; n++) {
                        var e = r[n], o = e.domNode, c = C(o, e);
                        o === t && (t = c)
                    }
                    return t
                }

                function C(t, r) {
                    switch (r.type) {
                        case"p-redraw":
                            return function (t, r, n) {
                                var e = t.parentNode, o = p(r, n);
                                void 0 === o.elm_event_node_ref && (o.elm_event_node_ref = t.elm_event_node_ref);
                                e && o !== t && e.replaceChild(o, t);
                                return o
                            }(t, r.data, r.eventNode);
                        case"p-facts":
                            return h(t, r.eventNode, r.data), t;
                        case"p-text":
                            return t.replaceData(0, t.length, r.data), t;
                        case"p-thunk":
                            return A(t, r.data);
                        case"p-tagger":
                            return void 0 !== t.elm_event_node_ref ? t.elm_event_node_ref.tagger = r.data : t.elm_event_node_ref = {
                                tagger: r.data,
                                parent: r.eventNode
                            }, t;
                        case"p-remove-last":
                            for (var n = r.data; n--;) t.removeChild(t.lastChild);
                            return t;
                        case"p-append":
                            var e = r.data;
                            for (n = 0; n < e.length; n++) t.appendChild(p(e[n], r.eventNode));
                            return t;
                        case"p-remove":
                            var o = r.data;
                            if (void 0 === o) return t.parentNode.removeChild(t), t;
                            var c = o.entry;
                            return void 0 !== c.index && t.parentNode.removeChild(t), c.data = A(t, o.patches), t;
                        case"p-reorder":
                            return function (t, r) {
                                var n = r.data, e = function (t, r) {
                                    if (void 0 === t) return;
                                    for (var n = i.createDocumentFragment(), e = 0; e < t.length; e++) {
                                        var o = t[e], c = o.entry;
                                        n.appendChild("move" === c.tag ? c.data : p(c.vnode, r.eventNode))
                                    }
                                    return n
                                }(n.endInserts, r);
                                t = A(t, n.patches);
                                for (var o = n.inserts, c = 0; c < o.length; c++) {
                                    var u = o[c], _ = u.entry, a = "move" === _.tag ? _.data : p(_.vnode, r.eventNode);
                                    t.insertBefore(a, t.childNodes[u.index])
                                }
                                void 0 !== e && t.appendChild(e);
                                return t
                            }(t, r);
                        case"p-custom":
                            var u = r.data;
                            return u.applyPatch(t, u.data);
                        default:
                            throw new Error("Ran into an unknown patch!")
                    }
                }

                var E = q(function (t, r) {
                    return function (t, n, e) {
                        if (void 0 === n) return t;
                        var o = "The `" + r + "` module does not need flags.\nInitialize it with no arguments and you should be all set!";
                        D(o, e)
                    }
                }), L = q(function (t, r) {
                    return function (n, e, o) {
                        if (void 0 === t) {
                            var c = "Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + r + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.";
                            D(c, o)
                        }
                        var u = l(Xn.run, t, e);
                        if ("Ok" === u.ctor) return n(u._0);
                        var c = "Trying to initialize the `" + r + "` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + u._0;
                        D(c, o)
                    }
                });

                function q(t) {
                    return n(function (r, n) {
                        return function (e) {
                            return function (o, c, u) {
                                var i = t(e, c);
                                void 0 === u ? function (t, r, n, e) {
                                    r.embed = function (r, n) {
                                        for (; r.lastChild;) r.removeChild(r.lastChild);
                                        return Bn.initialize(e(t.init, n, r), t.update, t.subscriptions, I(r, t.view))
                                    }, r.fullscreen = function (r) {
                                        return Bn.initialize(e(t.init, r, document.body), t.update, t.subscriptions, I(document.body, t.view))
                                    }
                                }(n, o, 0, i) : function (t, r, n, e) {
                                    r.fullscreen = function (r) {
                                        var o = {doc: void 0};
                                        return Bn.initialize(e(t.init, r, document.body), t.update(J(o)), t.subscriptions, j(n, document.body, o, t.view, t.viewIn, t.viewOut))
                                    }, r.embed = function (r, o) {
                                        var c = {doc: void 0};
                                        return Bn.initialize(e(t.init, o, r), t.update(J(c)), t.subscriptions, j(n, r, c, t.view, t.viewIn, t.viewOut))
                                    }
                                }(l(r, u, n), o, c, i)
                            }
                        }
                    })
                }

                function D(t, r) {
                    throw r && (r.innerHTML = '<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">' + t + "</pre></div>"), new Error(t)
                }

                function I(t, r) {
                    return function (n, e) {
                        var o = {tagger: n, parent: void 0}, c = r(e), u = p(c, o);
                        return t.appendChild(u), P(u, r, c, o)
                    }
                }

                var F = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
                    setTimeout(t, 1e3 / 60)
                };

                function P(t, r, n, e) {
                    var o, c = "NO_REQUEST", u = n;

                    function i() {
                        switch (c) {
                            case"NO_REQUEST":
                                throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.");
                            case"PENDING_REQUEST":
                                F(i), c = "EXTRA_REQUEST";
                                var n = r(o), _ = w(u, n);
                                return t = O(t, u, _, e), void (u = n);
                            case"EXTRA_REQUEST":
                                return void (c = "NO_REQUEST")
                        }
                    }

                    return function (t) {
                        "NO_REQUEST" === c && F(i), c = "PENDING_REQUEST", o = t
                    }
                }

                function J(t) {
                    return Rn.nativeBinding(function (r) {
                        var n = t.doc;
                        if (n) {
                            var e = n.getElementsByClassName("debugger-sidebar-messages")[0];
                            e && (e.scrollTop = e.scrollHeight)
                        }
                        r(Rn.succeed(y.Tuple0))
                    })
                }

                function j(t, r, n, e, o, c) {
                    return function (u, _) {
                        var a = {tagger: u, parent: void 0}, f = {tagger: u, parent: void 0}, l = e(_), s = p(l, a);
                        r.appendChild(s);
                        var d = P(s, e, l, a), h = o(_)._1, v = p(h, f);
                        r.appendChild(v);
                        var m = P(v, function (t, r, n) {
                            var e, o = function (t) {
                                return function (r) {
                                    if ("keydown" !== r.type || !r.metaKey || 82 !== r.which) {
                                        for (var n = "scroll" === r.type || "wheel" === r.type, e = r.target; null !== e;) {
                                            if ("elm-overlay-message-details" === e.className && n) return;
                                            if (e === t && !n) return;
                                            e = e.parentNode
                                        }
                                        r.stopPropagation(), r.preventDefault()
                                    }
                                }
                            }(r), c = "Normal", u = t.tagger, i = function () {
                            };
                            return function (r) {
                                var _ = n(r), a = _._0.ctor;
                                return t.tagger = "Normal" === a ? u : i, c !== a && (U("removeEventListener", o, c), U("addEventListener", o, a), "Normal" === c && (e = document.body.style.overflow, document.body.style.overflow = "hidden"), "Normal" === a && (document.body.style.overflow = e), c = a), _._1
                            }
                        }(a, v, o), h, f), g = function (t, r, n, e, o, c) {
                            var u, _;
                            return function (t) {
                                if (t.isDebuggerOpen) {
                                    if (!c.doc) return u = r(t), void (_ = function (t, r, n, e) {
                                        var o = screen.width - 900, c = screen.height - 360,
                                            u = window.open("", "", "width=900,height=360,left=" + o + ",top=" + c);
                                        i = u.document, r.doc = i, i.title = "Debugger - " + t, i.body.style.margin = "0", i.body.style.padding = "0";
                                        var _ = p(n, e);

                                        function a() {
                                            r.doc = void 0, u.close()
                                        }

                                        return i.body.appendChild(_), i.addEventListener("keydown", function (t) {
                                            t.metaKey && 82 === t.which && window.location.reload(), 38 === t.which && (e.tagger({ctor: "Up"}), t.preventDefault()), 40 === t.which && (e.tagger({ctor: "Down"}), t.preventDefault())
                                        }), window.addEventListener("unload", a), u.addEventListener("unload", function () {
                                            r.doc = void 0, window.removeEventListener("unload", a), e.tagger({ctor: "Close"})
                                        }), i = document, _
                                    }(o, c, u, n));
                                    i = c.doc;
                                    var e = r(t), a = w(u, e);
                                    _ = O(_, u, a, n), u = e, i = document
                                }
                            }
                        }(0, c, f, 0, t, n);
                        return function (t) {
                            d(t), m(t), g(t)
                        }
                    }
                }

                function U(t, r, n) {
                    switch (n) {
                        case"Normal":
                            return;
                        case"Pause":
                            return H(t, r, W);
                        case"Message":
                            return H(t, r, z)
                    }
                }

                function H(t, r, n) {
                    for (var e = 0; e < n.length; e++) document.body[t](n[e], r, !0)
                }

                var W = ["click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur"],
                    z = W.concat("wheel", "scroll");
                return {
                    node: function (t) {
                        return n(function (r, n) {
                            return function (t, r, n) {
                                for (var e = a(r), o = e.namespace, c = e.facts, u = [], i = 0; "[]" !== n.ctor;) {
                                    var _ = n._0;
                                    i += _.descendantsCount || 0, u.push(_), n = n._1
                                }
                                return i += u.length, {
                                    type: "node",
                                    tag: t,
                                    facts: c,
                                    children: u,
                                    namespace: o,
                                    descendantsCount: i
                                }
                            }(t, r, n)
                        })
                    }, text: function (t) {
                        return {type: "text", text: t}
                    }, custom: function (t, r, n) {
                        return {type: "custom", facts: a(t).facts, model: r, impl: n}
                    }, map: n(function (t, r) {
                        return {type: "tagger", tagger: t, node: r, descendantsCount: 1 + (r.descendantsCount || 0)}
                    }), on: o(f), style: function (r) {
                        return {key: t, value: r}
                    }, property: n(function (t, r) {
                        return {key: t, value: r}
                    }), attribute: n(function (t, r) {
                        return {key: e, realKey: t, value: r}
                    }), attributeNS: o(function (t, r, n) {
                        return {key: u, realKey: r, value: {value: n, namespace: t}}
                    }), mapProperty: n(function (t, n) {
                        return n.key !== r ? n : f(n.realKey, n.value.options, l(pe, t, n.value.decoder))
                    }), lazy: n(function (t, r) {
                        return _(t, [r], function () {
                            return t(r)
                        })
                    }), lazy2: o(function (t, r, n) {
                        return _(t, [r, n], function () {
                            return l(t, r, n)
                        })
                    }), lazy3: c(function (t, r, n, e) {
                        return _(t, [r, n, e], function () {
                            return s(t, r, n, e)
                        })
                    }), keyedNode: o(function (t, r, n) {
                        for (var e = a(r), o = e.namespace, c = e.facts, u = [], i = 0; "[]" !== n.ctor;) {
                            var _ = n._0;
                            i += _._1.descendantsCount || 0, u.push(_), n = n._1
                        }
                        return {
                            type: "keyed-node",
                            tag: t,
                            facts: c,
                            children: u,
                            namespace: o,
                            descendantsCount: i += u.length
                        }
                    }), program: E, programWithFlags: L, staticProgram: function (t) {
                        var r = y.Tuple2(y.Tuple0, An);
                        return l(E, Ec, {
                            init: r, view: function () {
                                return t
                            }, update: n(function () {
                                return r
                            }), subscriptions: function () {
                                return qn
                            }
                        })()
                    }
                }
            }(), mu = function (t) {
                return l(vu.program, Ec, t)
            }, gu = vu.keyedNode, bu = (vu.lazy3, vu.lazy2, vu.lazy), yu = {stopPropagation: !1, preventDefault: !1},
            Tu = vu.on, wu = n(function (t, r) {
                return s(Tu, t, yu, r)
            }), ku = vu.style, xu = (vu.mapProperty, vu.attributeNS), Su = vu.attribute, Mu = vu.property, Nu = vu.map,
            Bu = vu.text, Ru = vu.node, Ou = (n(function (t, r) {
                return {stopPropagation: t, preventDefault: r}
            }), function (t) {
                return l(vu.programWithFlags, void 0, t)
            }), Au = mu, Cu = Nu, Eu = Bu, Lu = Ru, qu = (Lu("body"), Lu("section"), Lu("nav")),
            Du = (Lu("article"), Lu("aside"), Lu("h1")),
            Iu = (Lu("h2"), Lu("h3"), Lu("h4"), Lu("h5"), Lu("h6"), Lu("header")),
            Fu = (Lu("footer"), Lu("address"), Lu("main")),
            Pu = (Lu("p"), Lu("hr"), Lu("pre"), Lu("blockquote"), Lu("ol"), Lu("ul")), Ju = Lu("li"),
            ju = (Lu("dl"), Lu("dt"), Lu("dd"), Lu("figure"), Lu("figcaption"), Lu("div")), Uu = Lu("a"),
            Hu = (Lu("em"), Lu("strong"), Lu("small"), Lu("s"), Lu("cite"), Lu("q"), Lu("dfn"), Lu("abbr"), Lu("time"), Lu("code"), Lu("var"), Lu("samp"), Lu("kbd"), Lu("sub"), Lu("sup"), Lu("i")),
            Wu = (Lu("b"), Lu("u"), Lu("mark"), Lu("ruby"), Lu("rt"), Lu("rp"), Lu("bdi"), Lu("bdo"), Lu("span")),
            zu = Lu("br"), Gu = (Lu("wbr"), Lu("ins"), Lu("del"), Lu("img")), Yu = Lu("iframe"),
            Vu = (Lu("embed"), Lu("object"), Lu("param"), Lu("video"), Lu("audio"), Lu("source"), Lu("track"), Lu("canvas"), Lu("math"), Lu("table"), Lu("caption"), Lu("colgroup"), Lu("col"), Lu("tbody"), Lu("thead"), Lu("tfoot"), Lu("tr"), Lu("td"), Lu("th"), Lu("form"), Lu("fieldset"), Lu("legend"), Lu("label")),
            Qu = Lu("input"), Xu = Lu("button"),
            Zu = (Lu("select"), Lu("datalist"), Lu("optgroup"), Lu("option"), Lu("textarea")),
            Ku = (Lu("keygen"), Lu("output"), Lu("progress"), Lu("meter"), Lu("details"), Lu("summary"), Lu("menuitem"), Lu("menu"), Su),
            $u = Mu, ti = n(function (t, r) {
                return l($u, t, $n(r))
            }), ri = function (t) {
                return l(ti, "className", t)
            }, ni = function (t) {
                return l(ti, "id", t)
            }, ei = function (t) {
                return l(ti, "src", t)
            }, oi = function (t) {
                return l(ti, "type", t)
            }, ci = function (t) {
                return l(ti, "href", t)
            }, ui = n(function (t, r) {
                return l($u, t, Zn(r))
            }), ii = function (t) {
                return l(ui, "checked", t)
            }, _i = function (t) {
                return l(ui, "disabled", t)
            }, ai = function (t) {
                return ri(l(Sr, " ", l(bt, Nn, l(yt, Mn, t))))
            }, fi = ku, li = l(ge, "keyCode", xe), si = (l(be, {
                ctor: "::",
                _0: "target",
                _1: {ctor: "::", _0: "checked", _1: {ctor: "[]"}}
            }, Se), l(be, {ctor: "::", _0: "target", _1: {ctor: "::", _0: "value", _1: {ctor: "[]"}}}, Me)), di = yu,
            pi = Tu, hi = wu, vi = (y.update(di, {preventDefault: !0}), function (t) {
                return l(hi, "click", ce(t))
            }), mi = (n(function (t, r) {
                return {stopPropagation: t, preventDefault: r}
            }), gu), gi = (mi("ol"), mi("ul")), bi = bu, yi = function () {
                return {
                    toTask: n(function (t, r) {
                        return Rn.nativeBinding(function (n) {
                            var e = new XMLHttpRequest;
                            !function (t, r) {
                                "Nothing" !== r.ctor && t.addEventListener("progress", function (t) {
                                    t.lengthComputable && Rn.rawSpawn(r._0({bytes: t.loaded, bytesExpected: t.total}))
                                })
                            }(e, r), e.addEventListener("error", function () {
                                n(Rn.fail({ctor: "NetworkError"}))
                            }), e.addEventListener("timeout", function () {
                                n(Rn.fail({ctor: "Timeout"}))
                            }), e.addEventListener("load", function () {
                                n(function (t, r) {
                                    var n = function (t) {
                                        return {
                                            status: {code: t.status, message: t.statusText}, headers: function (t) {
                                                var r = rn;
                                                if (!t) return r;
                                                for (var n = t.split("\r\n"), e = n.length; e--;) {
                                                    var o = n[e], c = o.indexOf(": ");
                                                    if (c > 0) {
                                                        var u = o.substring(0, c), i = o.substring(c + 2);
                                                        r = s(hn, u, function (t) {
                                                            return "Just" === t.ctor ? $(i + ", " + t._0) : $(i)
                                                        }, r)
                                                    }
                                                }
                                                return r
                                            }(t.getAllResponseHeaders()), url: t.responseURL, body: t.response
                                        }
                                    }(t);
                                    if (t.status < 200 || 300 <= t.status) return n.body = t.responseText, Rn.fail({
                                        ctor: "BadStatus",
                                        _0: n
                                    });
                                    var e = r(n);
                                    return "Ok" === e.ctor ? Rn.succeed(e._0) : (n.body = t.responseText, Rn.fail({
                                        ctor: "BadPayload",
                                        _0: e._0,
                                        _1: n
                                    }))
                                }(e, t.expect.responseToResult))
                            });
                            try {
                                e.open(t.method, t.url, !0)
                            } catch (r) {
                                return n(Rn.fail({ctor: "BadUrl", _0: t.url}))
                            }
                            return function (t, r) {
                                l(bt, function (r) {
                                    t.setRequestHeader(r._0, r._1)
                                }, r.headers), t.responseType = r.expect.responseType, t.withCredentials = r.withCredentials, "Just" === r.timeout.ctor && (t.timeout = r.timeout._0)
                            }(e, t), function (t, r) {
                                switch (r.ctor) {
                                    case"EmptyBody":
                                        return void t.send();
                                    case"StringBody":
                                        return t.setRequestHeader("Content-Type", r._0), void t.send(r._1);
                                    case"FormDataBody":
                                        t.send(r._0)
                                }
                            }(e, t.body), function () {
                                e.abort()
                            }
                        })
                    }), expectStringResponse: function (t) {
                        return {responseType: "text", responseToResult: t}
                    }, mapExpect: n(function (t, r) {
                        return {
                            responseType: r.responseType, responseToResult: function (n) {
                                var e = r.responseToResult(n);
                                return l(or, t, e)
                            }
                        }
                    }), multipart: function (t) {
                        for (var r = new FormData; "[]" !== t.ctor;) {
                            var n = t._0;
                            r.append(n._0, n._1), t = t._1
                        }
                        return {ctor: "FormDataBody", _0: r}
                    }, encodeUri: function (t) {
                        return encodeURIComponent(t)
                    }, decodeUri: function (t) {
                        try {
                            return $(decodeURIComponent(t))
                        } catch (t) {
                            return Z
                        }
                    }
                }
            }(), Ti = (n(function (t, r) {
                return y.update(r, {expect: l(yi.mapExpect, t, r.expect)})
            }), _(function (t, r, n, e, o, c, u) {
                return {method: t, headers: r, url: n, body: e, expect: o, timeout: c, withCredentials: u}
            }), n(function (t, r) {
                return {ctor: "StringBody", _0: t, _1: r}
            })), wi = n(function (t, r) {
                return {ctor: "Header", _0: t, _1: r}
            }), ki = yi.decodeUri, xi = yi.encodeUri, Si = yi.expectStringResponse, Mi = function (t) {
                return Si(function (r) {
                    return l(ie, t, r.body)
                })
            }, Ni = (Si(function (t) {
                return er(t.body)
            }), yi.multipart, function (t) {
                return l(Ti, "application/json", l(te, 0, t))
            }), Bi = {ctor: "EmptyBody"}, Ri = wi, Oi = function (t) {
                return {ctor: "Request", _0: t}
            }, Ai = o(function (t, r, n) {
                return Oi({
                    method: "POST",
                    headers: {ctor: "[]"},
                    url: t,
                    body: r,
                    expect: Mi(n),
                    timeout: Z,
                    withCredentials: !1
                })
            }), Ci = (n(function (t, r) {
                return Oi({
                    method: "GET",
                    headers: {ctor: "[]"},
                    url: t,
                    body: Bi,
                    expect: Mi(r),
                    timeout: Z,
                    withCredentials: !1
                })
            }), function (t) {
                var r = t;
                return l(yi.toTask, r._0, Z)
            }), Ei = n(function (t, r) {
                return l(Ue, t, Ci(r))
            }), Li = (c(function (t, r, n, e) {
                return {url: t, status: r, headers: n, body: e}
            }), n(function (t, r) {
                return {ctor: "BadPayload", _0: t, _1: r}
            }), n(function (t, r) {
                return {ctor: "StringPart", _0: t, _1: r}
            }), Li || {});
        Li["&>"] = n(function (t, r) {
            return l(Be, function (t) {
                return r
            }, t)
        });
        var qi = o(function (t, r, n) {
            var e = r, o = l(Wr, e.category, n);
            if ("Nothing" === o.ctor) return Ce(n);
            return l(Li["&>"], qe(l(bt, function (r) {
                return l(Fn, t, r(e.position))
            }, o._0.taggers)), Ce(n))
        }), Di = Ce(rn), Ii = n(function (t, r) {
            var n = r;
            return "Nothing" === n.ctor ? $({ctor: "::", _0: t, _1: {ctor: "[]"}}) : $({ctor: "::", _0: t, _1: n._0})
        }), Fi = n(function (t, r) {
            for (; ;) {
                var n = t;
                if ("[]" === n.ctor) return r;
                t = n._1, r = s(hn, n._0._0, Ii(n._0._1), r)
            }
        }), Pi = Bn.leaf("Mouse"), Ji = n(function (t, r) {
            return {x: t, y: r}
        }), ji = s(de, Ji, l(ge, "pageX", xe), l(ge, "pageY", xe)), Ui = n(function (t, r) {
            return {taggers: t, pid: r}
        }), Hi = n(function (t, r) {
            return {category: t, position: r}
        }), Wi = o(function (t, r, n) {
            var e = o(function (r, n, e) {
                var o = s(hu, r, ji, function (n) {
                    return l(In, t, l(Hi, r, n))
                });
                return l(Be, function (t) {
                    return l(Be, function (e) {
                        return Ce(s(vn, r, l(Ui, n, e), t))
                    }, su(o))
                }, e)
            }), u = c(function (t, r, n, e) {
                var o = r;
                return l(Be, function (r) {
                    return Ce(s(vn, t, l(Ui, n, o.pid), r))
                }, e)
            }), i = o(function (t, r, n) {
                var e = r;
                return l(Li["&>"], fu(e.pid), n)
            });
            return h(Jr, i, u, e, n, function (t) {
                return l(Fi, t, rn)
            }(r), Ce(rn))
        }), zi = n(function (t, r) {
            return {ctor: "MySub", _0: t, _1: r}
        }), Gi = function (t) {
            return Pi(l(zi, "click", t))
        }, Yi = n(function (t, r) {
            var n = r;
            return l(zi, n._0, function (r) {
                return t(n._1(r))
            })
        });
        Bn.effectManagers.Mouse = {
            pkg: "elm-lang/mouse",
            init: Di,
            onEffects: Wi,
            onSelfMsg: qi,
            tag: "sub",
            subMap: Yi
        };
        var Vi = function () {
                function t() {
                    var t = document.location;
                    return {
                        href: t.href,
                        host: t.host,
                        hostname: t.hostname,
                        protocol: t.protocol,
                        origin: t.origin,
                        port_: t.port,
                        pathname: t.pathname,
                        search: t.search,
                        hash: t.hash,
                        username: t.username,
                        password: t.password
                    }
                }

                return {
                    go: function (t) {
                        return Rn.nativeBinding(function (r) {
                            0 !== t && history.go(t), r(Rn.succeed(y.Tuple0))
                        })
                    }, setLocation: function (t) {
                        return Rn.nativeBinding(function (r) {
                            try {
                                window.location = t
                            } catch (t) {
                                document.location.reload(!1)
                            }
                            r(Rn.succeed(y.Tuple0))
                        })
                    }, reloadPage: function (t) {
                        return Rn.nativeBinding(function (r) {
                            document.location.reload(t), r(Rn.succeed(y.Tuple0))
                        })
                    }, pushState: function (r) {
                        return Rn.nativeBinding(function (n) {
                            history.pushState({}, "", r), n(Rn.succeed(t()))
                        })
                    }, replaceState: function (r) {
                        return Rn.nativeBinding(function (n) {
                            history.replaceState({}, "", r), n(Rn.succeed(t()))
                        })
                    }, getLocation: t, isInternetExplorer11: function () {
                        return -1 !== window.navigator.userAgent.indexOf("Trident")
                    }
                }
            }(), Qi = Vi.replaceState, Xi = Vi.pushState, Zi = Vi.go, Ki = Vi.reloadPage, $i = Vi.setLocation,
            t_ = t_ || {};
        t_["&>"] = n(function (t, r) {
            return l(Be, function (t) {
                return r
            }, t)
        });
        var r_ = o(function (t, r, n) {
            return l(t_["&>"], qe(l(bt, function (r) {
                return l(Fn, t, r._0(n))
            }, r)), Ce({ctor: "_Tuple0"}))
        }), n_ = o(function (t, r, n) {
            var e = n;
            switch (e.ctor) {
                case"Jump":
                    return Zi(e._0);
                case"New":
                    return l(Be, l(r_, t, r), Xi(e._0));
                case"Modify":
                    return l(Be, l(r_, t, r), Qi(e._0));
                case"Visit":
                    return $i(e._0);
                default:
                    return Ki(e._0)
            }
        }), e_ = function (t) {
            var r = t;
            return "Normal" === r.ctor ? fu(r._0) : l(t_["&>"], fu(r._0), fu(r._1))
        }, o_ = o(function (t, r, n) {
            return l(t_["&>"], s(r_, t, n.subs, r), Ce(n))
        }), c_ = Bn.leaf("Navigation"), u_ = Bn.leaf("Navigation"), i_ = n(function (t, r) {
            return {subs: t, popWatcher: r}
        }), __ = Ce(l(i_, {ctor: "[]"}, Z)), a_ = function (t) {
            return {ctor: "Reload", _0: t}
        }, f_ = (u_(a_(!1)), u_(a_(!0)), function (t) {
            return {ctor: "Visit", _0: t}
        }), l_ = function (t) {
            return {ctor: "Modify", _0: t}
        }, s_ = function (t) {
            return {ctor: "New", _0: t}
        }, d_ = function (t) {
            return u_(s_(t))
        }, p_ = function (t) {
            return {ctor: "Jump", _0: t}
        }, h_ = n(function (t, r) {
            var n = r;
            switch (n.ctor) {
                case"Jump":
                    return p_(n._0);
                case"New":
                    return s_(n._0);
                case"Modify":
                    return l_(n._0);
                case"Visit":
                    return f_(n._0);
                default:
                    return a_(n._0)
            }
        }), v_ = function (t) {
            return {ctor: "Monitor", _0: t}
        }, m_ = (n(function (t, r) {
            var n = r.init(Vi.getLocation({ctor: "_Tuple0"}));
            return Au({
                init: n, view: r.view, update: r.update, subscriptions: function (n) {
                    return Ln({ctor: "::", _0: c_(v_(t)), _1: {ctor: "::", _0: r.subscriptions(n), _1: {ctor: "[]"}}})
                }
            })
        }), n(function (t, r) {
            return Ou({
                init: function (t) {
                    return l(r.init, t, Vi.getLocation({ctor: "_Tuple0"}))
                }, view: r.view, update: r.update, subscriptions: function (n) {
                    return Ln({ctor: "::", _0: c_(v_(t)), _1: {ctor: "::", _0: r.subscriptions(n), _1: {ctor: "[]"}}})
                }
            })
        })), g_ = n(function (t, r) {
            var n = r;
            return v_(function (r) {
                return t(n._0(r))
            })
        }), b_ = n(function (t, r) {
            return {ctor: "InternetExplorer", _0: t, _1: r}
        }), y_ = function (t) {
            return {ctor: "Normal", _0: t}
        }, T_ = function (t) {
            var r = function (r) {
                return l(In, t, Vi.getLocation({ctor: "_Tuple0"}))
            };
            return Vi.isInternetExplorer11({ctor: "_Tuple0"}) ? s(Le, b_, su(s(pu, "popstate", ne, r)), su(s(pu, "hashchange", ne, r))) : l(Ee, y_, su(s(pu, "popstate", ne, r)))
        }, w_ = c(function (t, r, n, e) {
            var o = e.popWatcher, c = function () {
                var r = {ctor: "_Tuple2", _0: n, _1: o};
                t:do {
                    if ("[]" === r._0.ctor) {
                        if ("Just" === r._1.ctor) return l(t_["&>"], e_(r._1._0), Ce(l(i_, n, Z)));
                        break t
                    }
                    if ("Nothing" === r._1.ctor) return l(Ee, function (t) {
                        return l(i_, n, $(t))
                    }, T_(t));
                    break t
                } while (0);
                return Ce(l(i_, n, o))
            }();
            return l(t_["&>"], qe(l(bt, l(n_, t, n), r)), c)
        });
        Bn.effectManagers.Navigation = {
            pkg: "elm-lang/navigation",
            init: __,
            onEffects: w_,
            onSelfMsg: o_,
            tag: "fx",
            cmdMap: h_,
            subMap: g_
        };
        var k_ = Bu, x_ = l(Mu, "namespace", $n("http://www.w3.org/2000/svg")), S_ = o(function (t, r, n) {
                return s(Ru, t, {ctor: "::", _0: x_, _1: r}, n)
            }), M_ = S_("svg"),
            N_ = (S_("foreignObject"), S_("animate"), S_("animateColor"), S_("animateMotion"), S_("animateTransform"), S_("mpath"), S_("set"), S_("a"), S_("defs")),
            B_ = (S_("g"), S_("marker"), S_("mask")),
            R_ = (S_("pattern"), S_("switch"), S_("symbol"), S_("desc"), S_("metadata"), S_("title"), S_("feBlend"), S_("feColorMatrix"), S_("feComponentTransfer"), S_("feComposite"), S_("feConvolveMatrix"), S_("feDiffuseLighting"), S_("feDisplacementMap"), S_("feFlood"), S_("feFuncA"), S_("feFuncB"), S_("feFuncG"), S_("feFuncR"), S_("feGaussianBlur"), S_("feImage"), S_("feMerge"), S_("feMergeNode"), S_("feMorphology"), S_("feOffset"), S_("feSpecularLighting"), S_("feTile"), S_("feTurbulence"), S_("font"), S_("linearGradient"), S_("radialGradient"), S_("stop"), S_("circle")),
            O_ = (S_("ellipse"), S_("image"), S_("line"), S_("path")),
            A_ = (S_("polygon"), S_("polyline"), S_("rect"), S_("use"), S_("feDistantLight"), S_("fePointLight"), S_("feSpotLight"), S_("altGlyph"), S_("altGlyphDef"), S_("altGlyphItem"), S_("glyph"), S_("glyphRef"), S_("textPath"), S_("text")),
            C_ = (S_("tref"), S_("tspan"), S_("clipPath"), S_("colorProfile"), S_("cursor"), S_("filter"), S_("script"), S_("style"), S_("view"), Su("writing-mode"), Su("word-spacing"), Su("visibility"), Su("unicode-bidi"), Su("text-rendering"), Su("text-decoration"), Su("text-anchor")),
            E_ = Su("stroke"),
            L_ = (Su("stroke-width"), Su("stroke-opacity"), Su("stroke-miterlimit"), Su("stroke-linejoin"), Su("stroke-linecap"), Su("stroke-dashoffset"), Su("stroke-dasharray"), Su("stop-opacity"), Su("stop-color"), Su("shape-rendering"), Su("pointer-events"), Su("overflow"), Su("opacity"), Su("mask")),
            q_ = (Su("marker-start"), Su("marker-mid"), Su("marker-end"), Su("lighting-color"), Su("letter-spacing"), Su("kerning"), Su("image-rendering"), Su("glyph-orientation-vertical"), Su("glyph-orientation-horizontal"), Su("font-weight"), Su("font-variant"), Su("font-style"), Su("font-stretch"), Su("font-size")),
            D_ = (Su("font-size-adjust"), Su("font-family"), Su("flood-opacity"), Su("flood-color"), Su("filter"), Su("fill")),
            I_ = (Su("fill-rule"), Su("fill-opacity"), Su("enable-background"), Su("dominant-baseline"), Su("display"), Su("direction"), Su("cursor"), Su("color"), Su("color-rendering"), Su("color-profile"), Su("color-interpolation"), Su("color-interpolation-filters"), Su("clip"), Su("clip-rule"), Su("clip-path"), Su("baseline-shift"), Su("alignment-baseline"), Su("zoomAndPan"), Su("z"), Su("yChannelSelector"), Su("y2"), Su("y1"), Su("y")),
            F_ = (l(xu, "http://www.w3.org/XML/1998/namespace", "xml:space"), l(xu, "http://www.w3.org/XML/1998/namespace", "xml:lang"), l(xu, "http://www.w3.org/XML/1998/namespace", "xml:base"), l(xu, "http://www.w3.org/1999/xlink", "xlink:type"), l(xu, "http://www.w3.org/1999/xlink", "xlink:title"), l(xu, "http://www.w3.org/1999/xlink", "xlink:show"), l(xu, "http://www.w3.org/1999/xlink", "xlink:role"), l(xu, "http://www.w3.org/1999/xlink", "xlink:href"), l(xu, "http://www.w3.org/1999/xlink", "xlink:arcrole"), l(xu, "http://www.w3.org/1999/xlink", "xlink:actuate"), Su("xChannelSelector"), Su("x2"), Su("x1"), Su("x-height"), Su("x")),
            P_ = (Su("widths"), Su("width")), J_ = (Su("viewTarget"), Su("viewBox")),
            j_ = (Su("vert-origin-y"), Su("vert-origin-x"), Su("vert-adv-y"), Su("version"), Su("values"), Su("v-mathematical"), Su("v-ideographic"), Su("v-hanging"), Su("v-alphabetic"), Su("units-per-em"), Su("unicode-range"), Su("unicode"), Su("underline-thickness"), Su("underline-position"), Su("u2"), Su("u1"), Su("type"), Su("transform"), Su("to"), Su("title"), Su("textLength"), Su("targetY"), Su("targetX"), Su("target"), Su("tableValues"), Su("systemLanguage"), Su("surfaceScale"), Su("style"), Su("string"), Su("strikethrough-thickness"), Su("strikethrough-position"), Su("stitchTiles"), Su("stemv"), Su("stemh"), Su("stdDeviation"), Su("startOffset"), Su("spreadMethod"), Su("speed"), Su("specularExponent"), Su("specularConstant"), Su("spacing"), Su("slope"), Su("seed"), Su("scale"), Su("ry"), Su("rx"), Su("rotate"), Su("result"), Su("restart"), Su("requiredFeatures"), Su("requiredExtensions"), Su("repeatDur"), Su("repeatCount"), Su("rendering-intent"), Su("refY"), Su("refX"), Su("radius"), Su("r")),
            U_ = (Su("primitiveUnits"), Su("preserveAspectRatio"), Su("preserveAlpha"), Su("pointsAtZ"), Su("pointsAtY"), Su("pointsAtX"), Su("points"), Su("point-order"), Su("patternUnits"), Su("patternTransform"), Su("patternContentUnits"), Su("pathLength"), Su("path"), Su("panose-1"), Su("overline-thickness"), Su("overline-position"), Su("origin"), Su("orientation"), Su("orient"), Su("order"), Su("operator"), Su("offset"), Su("numOctaves"), Su("name"), Su("mode"), Su("min"), Su("method"), Su("media"), Su("max"), Su("mathematical"), Su("maskUnits"), Su("maskContentUnits"), Su("markerWidth"), Su("markerUnits"), Su("markerHeight"), Su("local"), Su("limitingConeAngle"), Su("lengthAdjust"), Su("lang"), Su("keyTimes"), Su("keySplines"), Su("keyPoints"), Su("kernelUnitLength"), Su("kernelMatrix"), Su("k4"), Su("k3"), Su("k2"), Su("k1"), Su("k"), Su("intercept"), Su("in2"), Su("in"), Su("ideographic"), Su("id")),
            H_ = (Su("horiz-origin-y"), Su("horiz-origin-x"), Su("horiz-adv-x"), Su("height")),
            W_ = (Su("hanging"), Su("gradientUnits"), Su("gradientTransform"), Su("glyphRef"), Su("glyph-name"), Su("g2"), Su("g1"), Su("fy"), Su("fx"), Su("from"), Su("format"), Su("filterUnits"), Su("filterRes"), Su("externalResourcesRequired"), Su("exponent"), Su("end"), Su("elevation"), Su("edgeMode"), Su("dy")),
            z_ = (Su("dx"), Su("dur"), Su("divisor"), Su("diffuseConstant"), Su("descent"), Su("decelerate"), Su("d")),
            G_ = Su("cy"), Y_ = Su("cx"),
            V_ = (Su("contentStyleType"), Su("contentScriptType"), Su("clipPathUnits"), Su("class"), Su("cap-height"), Su("calcMode"), Su("by"), Su("bias"), Su("begin"), Su("bbox"), Su("baseProfile"), Su("baseFrequency"), Su("azimuth"), Su("autoReverse"), Su("attributeType"), Su("attributeName"), Su("ascent"), Su("arabic-form"), Su("amplitude"), Su("allowReorder"), Su("alphabetic"), Su("additive"), Su("accumulate"), Su("accelerate"), Su("accent-height"), {
                size: Rn.nativeBinding(function (t) {
                    t(Rn.succeed({width: window.innerWidth, height: window.innerHeight}))
                })
            }), Q_ = Q_ || {};
        Q_["&>"] = n(function (t, r) {
            return l(Be, function (t) {
                return r
            }, t)
        });
        var X_ = o(function (t, r, n) {
            var e = n;
            if ("Nothing" === e.ctor) return Ce(n);
            return l(Q_["&>"], qe(l(bt, function (n) {
                return l(Fn, t, n._0(r))
            }, e._0.subs)), Ce(n))
        }), Z_ = Ce(Z), K_ = V_.size, $_ = l(Ee, function (t) {
            return t.width
        }, K_), ta = (l(Ee, function (t) {
            return t.height
        }, K_), o(function (t, r, n) {
            var e = {ctor: "_Tuple2", _0: n, _1: r};
            return "Nothing" === e._0.ctor ? "[]" === e._1.ctor ? Ce(Z) : l(Be, function (t) {
                return Ce($({subs: r, pid: t}))
            }, su(s(pu, "resize", ce({ctor: "_Tuple0"}), function (r) {
                return l(Be, In(t), K_)
            }))) : "[]" === e._1.ctor ? l(Q_["&>"], fu(e._0._0.pid), Ce(Z)) : Ce($({subs: r, pid: e._0._0.pid}))
        })), ra = Bn.leaf("Window"), na = (n(function (t, r) {
            return {width: t, height: r}
        }), function (t) {
            return {ctor: "MySub", _0: t}
        }), ea = n(function (t, r) {
            var n = r;
            return na(function (r) {
                return t(n._0(r))
            })
        });
        Bn.effectManagers.Window = {
            pkg: "elm-lang/window",
            init: Z_,
            onEffects: ta,
            onSelfMsg: X_,
            tag: "sub",
            subMap: ea
        };
        var oa = function (t) {
            var r = l(Mr, "=", t);
            return "::" === r.ctor && "::" === r._1.ctor && "[]" === r._1._1.ctor ? s(rt, n(function (t, r) {
                return {ctor: "_Tuple2", _0: t, _1: r}
            }), ki(r._0), ki(r._1._0)) : Z
        }, ca = function (t) {
            return wn(l(wt, oa, l(Mr, "&", l(Tr, 1, t))))
        }, ua = o(function (t, r, n) {
            return function (t) {
                for (; ;) {
                    var r = t;
                    if ("[]" === r.ctor) return Z;
                    var n = r._0, e = n.unvisited;
                    if ("[]" === e.ctor) return $(n.value);
                    if ("" === e._0 && "[]" === e._1.ctor) return $(n.value);
                    t = r._1
                }
            }(t._0({
                visited: {ctor: "[]"}, unvisited: function (t) {
                    var r = l(Mr, "/", t);
                    return "::" === r.ctor && "" === r._0 ? r._1 : r
                }(r), params: n, value: S
            }))
        }), ia = n(function (t, r) {
            return s(ua, t, l(Tr, 1, r.hash), ca(r.search))
        }), _a = (n(function (t, r) {
            return s(ua, t, r.pathname, ca(r.search))
        }), n(function (t, r) {
            var n = r;
            return {visited: n.visited, unvisited: n.unvisited, params: n.params, value: t(n.value)}
        })), aa = c(function (t, r, n, e) {
            return {visited: t, unvisited: r, params: n, value: e}
        }), fa = function (t) {
            return {ctor: "Parser", _0: t}
        }, la = n(function (t, r) {
            return fa(function (t) {
                var n = t, e = n.unvisited;
                if ("[]" === e.ctor) return {ctor: "[]"};
                var o = e._0, c = r(o);
                return "Ok" === c.ctor ? {
                    ctor: "::",
                    _0: d(aa, {ctor: "::", _0: o, _1: n.visited}, e._1, n.params, n.value(c._0)),
                    _1: {ctor: "[]"}
                } : {ctor: "[]"}
            })
        }), sa = l(la, "STRING", er), da = l(la, "NUMBER", lr);
        (pa = pa || {})["</>"] = n(function (t, r) {
            var n = t, e = r;
            return fa(function (t) {
                return l(Nt, e._0, n._0(t))
            })
        });
        var pa, ha = n(function (t, r) {
            var n = r;
            return fa(function (r) {
                var e = r;
                return l(bt, _a(e.value), n._0({
                    visited: e.visited,
                    unvisited: e.unvisited,
                    params: e.params,
                    value: t
                }))
            })
        });
        fa(function (t) {
            return {ctor: "::", _0: t, _1: {ctor: "[]"}}
        });
        (pa = pa || {})["<?>"] = n(function (t, r) {
            var n = t, e = r;
            return fa(function (t) {
                return l(Nt, e._0, n._0(t))
            })
        });
        var va = n(function (t, r) {
                return function (t) {
                    return {ctor: "QueryParser", _0: t}
                }(function (n) {
                    var e = n, o = e.params;
                    return {ctor: "::", _0: d(aa, e.visited, e.unvisited, o, e.value(r(l(Wr, t, o)))), _1: {ctor: "[]"}}
                })
            }), ma = function (t) {
                return l(va, t, S)
            }, ga = -1 + Math.pow(10, 7), ba = function (t) {
                return _r(y.cmp(t, 0) < 0 ? {
                    ctor: "::",
                    _0: y.chr("-"),
                    _1: l(ya, {ctor: "[]"}, j(t))
                } : l(ya, {ctor: "[]"}, t))
            }, ya = n(function (t, r) {
                for (; ;) {
                    if (y.cmp(r, 16) < 0) return {ctor: "::", _0: Ta(r), _1: t};
                    t = {ctor: "::", _0: Ta(l(z["%"], r, 16)), _1: t}, r = r / 16 | 0
                }
            }), Ta = function (t) {
                var r = t;
                switch (r) {
                    case 0:
                        return y.chr("0");
                    case 1:
                        return y.chr("1");
                    case 2:
                        return y.chr("2");
                    case 3:
                        return y.chr("3");
                    case 4:
                        return y.chr("4");
                    case 5:
                        return y.chr("5");
                    case 6:
                        return y.chr("6");
                    case 7:
                        return y.chr("7");
                    case 8:
                        return y.chr("8");
                    case 9:
                        return y.chr("9");
                    case 10:
                        return y.chr("a");
                    case 11:
                        return y.chr("b");
                    case 12:
                        return y.chr("c");
                    case 13:
                        return y.chr("d");
                    case 14:
                        return y.chr("e");
                    case 15:
                        return y.chr("f");
                    default:
                        return y.crashCase("Hex", {
                            start: {line: 138, column: 5},
                            end: {line: 188, column: 84}
                        }, r)(l(z["++"], "Tried to convert ", l(z["++"], ba(t), " to hexadecimal.")))
                }
            }, wa = o(function (t, r, n) {
                var e = r;
                if ("[]" === e.ctor) return er(n);
                var o = function (r) {
                    return s(wa, t - 1, e._1, n + r * Math.pow(16, t))
                }, c = e._0;
                switch (c.valueOf()) {
                    case"0":
                        return o(0);
                    case"1":
                        return o(1);
                    case"2":
                        return o(2);
                    case"3":
                        return o(3);
                    case"4":
                        return o(4);
                    case"5":
                        return o(5);
                    case"6":
                        return o(6);
                    case"7":
                        return o(7);
                    case"8":
                        return o(8);
                    case"9":
                        return o(9);
                    case"a":
                        return o(10);
                    case"b":
                        return o(11);
                    case"c":
                        return o(12);
                    case"d":
                        return o(13);
                    case"e":
                        return o(14);
                    case"f":
                        return o(15);
                    default:
                        return rr(l(z["++"], M(c), " is not a valid hexadecimal character."))
                }
            }), ka = n(function (t, r) {
                var n = {ctor: "_Tuple2", _0: t, _1: r};
                return "[]" === n._0.ctor ? "[]" === n._1.ctor ? {ctor: "[]"} : {
                    ctor: "::",
                    _0: {ctor: "_Tuple2", _0: 0, _1: n._1._0},
                    _1: l(ka, {ctor: "[]"}, n._1._1)
                } : "[]" === n._1.ctor ? {
                    ctor: "::",
                    _0: {ctor: "_Tuple2", _0: n._0._0, _1: 0},
                    _1: l(ka, n._0._1, {ctor: "[]"})
                } : {ctor: "::", _0: {ctor: "_Tuple2", _0: n._0._0, _1: n._1._0}, _1: l(ka, n._0._1, n._1._1)}
            }), xa = bt(j), Sa = function (t) {
                var r = Lc(t);
                return "Nothing" !== r.ctor && y.cmp(r._0, 0) < 0
            }, Ma = function (t) {
                return l(lt, n(function (r, n) {
                    return t(r) && ht(n) ? {ctor: "[]"} : {ctor: "::", _0: r, _1: n}
                }), {ctor: "[]"})
            }(n(function (t, r) {
                return y.eq(t, r)
            })(0)), Na = o(function (t, r, n) {
                return s(st, x(t), r, l(Dt, 1, n))
            }), Ba = O(l(P, 2, R(ga))), Ra = function (t) {
                var r = function (t) {
                    return y.eq(l(z["%"], t, 2), 0)
                }, n = t;
                switch (n.ctor) {
                    case"Zer":
                        return !0;
                    case"Pos":
                    default:
                        return r(l(X, 0, mt(n._0._0)))
                }
            }, Oa = function (t) {
                return s(br, 7, y.chr("0"), M(t))
            }, Aa = function (t) {
                var r = kt(t._0);
                return "[]" === r.ctor ? "0" : Or({ctor: "::", _0: M(r._0), _1: l(bt, Oa, r._1)})
            }, Ca = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Zer":
                        return "0";
                    case"Pos":
                        return Aa(r._0);
                    default:
                        return l(z["++"], "-", Aa(r._0))
                }
            }, Ea = c(function (t, r, n, e) {
                for (; ;) {
                    var o = {ctor: "_Tuple2", _0: n, _1: e};
                    if ("[]" === o._0.ctor) return "[]" === o._1.ctor ? l(D, t, r) : Q;
                    if ("[]" === o._1.ctor) return Y;
                    var c = o._1._1, u = o._1._0, i = o._0._1, _ = o._0._0;
                    if (y.eq(_, u)) t = t, r = r, n = i, e = c; else t = _, r = u, n = i, e = c
                }
            }), La = n(function (t, r) {
                var n = {ctor: "_Tuple2", _0: t, _1: r};
                switch (n._0.ctor) {
                    case"Pos":
                        return "Pos" === n._1.ctor ? d(Ea, 0, 0, n._0._0._0, n._1._0._0) : Y;
                    case"Neg":
                        return "Neg" === n._1.ctor ? function (t) {
                            switch (t.ctor) {
                                case"LT":
                                    return Y;
                                case"EQ":
                                    return V;
                                default:
                                    return Q
                            }
                        }(d(Ea, 0, 0, n._0._0._0, n._1._0._0)) : Q;
                    default:
                        switch (n._1.ctor) {
                            case"Pos":
                                return Q;
                            case"Zer":
                                return V;
                            default:
                                return Y
                        }
                }
            }), qa = n(function (t, r) {
                return y.eq(l(La, t, r), Q)
            }), Da = (n(function (t, r) {
                return !l(qa, t, r)
            }), n(function (t, r) {
                return l(qa, t, r) ? r : t
            }), n(function (t, r) {
                return y.eq(l(La, t, r), Y)
            })), Ia = n(function (t, r) {
                return !l(Da, t, r)
            }), Fa = (n(function (t, r) {
                return l(Da, t, r) ? r : t
            }), ga + 1), Pa = function (t) {
                return y.cmp(t, 0) < 0 ? l(Sn, n(function (t, r) {
                    return t + r
                })(-1), Pa(t + Fa)) : {ctor: "_Tuple2", _0: t / Fa | 0, _1: l(G, t, Fa)}
            }, Ja = n(function (t, r) {
                var n = r;
                if ("[]" === n.ctor) return {ctor: "::", _0: t, _1: {ctor: "[]"}};
                var e = Pa(n._0 + t), o = e._0;
                return {ctor: "::", _0: e._1, _1: l(Ja, o, n._1)}
            }), ja = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Zer":
                        return {ctor: "[]"};
                    case"Pos":
                    default:
                        return r._0._0
                }
            }, Ua = {ctor: "Zero"}, Ha = {ctor: "Negative"}, Wa = {ctor: "Positive"}, za = n(function (t, r) {
                return y.eq(t, Ua) || y.eq(r, Ua) ? Ua : y.eq(t, r) ? Wa : Ha
            }), Ga = function (t) {
                switch (t.ctor) {
                    case"Positive":
                        return Ha;
                    case"Negative":
                        return Wa;
                    default:
                        return Ua
                }
            }, Ya = function (t) {
                switch (t.ctor) {
                    case"Zer":
                        return Ua;
                    case"Pos":
                        return Wa;
                    default:
                        return Ha
                }
            }, Va = {ctor: "Zer"}, Qa = function (t) {
                return {ctor: "Neg", _0: t}
            }, Xa = function (t) {
                return {ctor: "Pos", _0: t}
            }, Za = n(function (t, r) {
                var n = r;
                if (ht(r._0)) return Va;
                switch (t.ctor) {
                    case"Zero":
                        return Va;
                    case"Positive":
                        return Xa(n);
                    default:
                        return Qa(n)
                }
            }), Ka = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Zer":
                        return Va;
                    case"Neg":
                        return Xa(r._0);
                    default:
                        return r
                }
            }, $a = function (t) {
                return {ctor: "Magnitude", _0: t}
            }, tf = function (t) {
                return l(tt, function (t) {
                    return function (t) {
                        var r = t._0;
                        return "[]" === l(Sc, n(function (t, r) {
                            return y.eq(t, r)
                        })(0), r).ctor ? $a({ctor: "[]"}) : $a(r)
                    }($a(t))
                }, $t(qc(l(bt, function (t) {
                    return lr(_r(kt(t)))
                }, l(rc, 7, kt(t))))))
            }, rf = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Zer":
                        return $a({ctor: "[]"});
                    case"Pos":
                    default:
                        return r._0
                }
            }, nf = function (t) {
                return $a(Ma(l(Ja, 0, t._0)))
            }, ef = n(function (t, r) {
                return {ctor: "BigIntNotNormalised", _0: t, _1: r}
            }), of = function (t) {
                return {ctor: "MagnitudeNotNormalised", _0: t}
            }, cf = n(function (t, r) {
                return l(ef, t, of(r))
            }), uf = function (t) {
                for (; ;) {
                    var r = t, n = r._0, e = nf(r._1)._0;
                    if (!Sa(e)) return l(Za, n, $a(e));
                    t = l(cf, Ga(n), xa(e))
                }
            }, _f = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Zer":
                        return l(cf, Ua, {ctor: "[]"});
                    case"Neg":
                        return l(cf, Wa, xa(r._0._0));
                    default:
                        return l(cf, Wa, r._0._0)
                }
            }, af = function (t) {
                return uf(l(ef, function (t) {
                    switch (l(D, t, 0).ctor) {
                        case"LT":
                            return Ha;
                        case"GT":
                            return Wa;
                        default:
                            return Ua
                    }
                }(t), of({ctor: "::", _0: J(t), _1: {ctor: "[]"}})))
            }, ff = af(0), lf = af(1), sf = af(2), df = n(function (t, r) {
                var e = t;
                return nf(of(l(bt, n(function (t, r) {
                    return t * r
                })(r), e._0)))
            }), pf = n(function (t, r) {
                var n = r;
                return function (t) {
                    return {ctor: "MagnitudePair", _0: t}
                }(l(ka, t._0, n._0))
            }), hf = n(function (t, r) {
                var e = _f(r)._1, o = _f(t)._1, c = l(pf, o, e)._0, u = l(bt, T(n(function (t, r) {
                    return t + r
                })), c);
                return uf(l(ef, Wa, of(u)))
            }), vf = n(function (t, r) {
                return l(hf, t, function (t) {
                    var r = t;
                    switch (r.ctor) {
                        case"Zer":
                            return Va;
                        case"Pos":
                            return Qa(r._0);
                        default:
                            return Xa(r._0)
                    }
                }(r))
            }), mf = n(function (t, r) {
                var n = t, e = r._0, o = n._0;
                if ("[]" === o.ctor) return $a({ctor: "[]"});
                if ("[]" === o._1.ctor) return l(df, $a(e), o._0);
                var c = l(mf, $a(o._1), $a(e))._0, u = l(df, $a(e), o._0),
                    i = l(hf, l(Za, Wa, u), l(Za, Wa, $a({ctor: "::", _0: 0, _1: c})));
                return rf(i)
            }), gf = n(function (t, r) {
                return l(Za, l(za, Ya(t), Ya(r)), l(mf, rf(t), rf(r)))
            }), bf = l(gf, af(2), af(2147483648)), yf = function (t) {
                return l(tt, function (t) {
                    return s(st, n(function (t, r) {
                        return l(hf, af(t), l(gf, r, bf))
                    }), ff, kt(t))
                }, $t(qc(l(bt, function (t) {
                    return function (t) {
                        if (Lr(t)) return rr("Empty strings are not valid hexadecimal strings.");
                        var r = function () {
                            if (l(dr, "-", t)) {
                                var r = l(X, {ctor: "[]"}, vt(ar(t)));
                                return l(or, j, s(wa, dt(r) - 1, r, 0))
                            }
                            return s(wa, Rr(t) - 1, ar(t), 0)
                        }();
                        return l(ur, function (r) {
                            return l(Sr, " ", {
                                ctor: "::",
                                _0: M(t),
                                _1: {
                                    ctor: "::",
                                    _0: "is not a valid hexadecimal string because",
                                    _1: {ctor: "::", _0: r, _1: {ctor: "[]"}}
                                }
                            })
                        }, r)
                    }(_r(kt(t)))
                }, l(rc, 8, kt(t))))))
            }, Tf = function (t) {
                var r = ar(t);
                t:do {
                    if ("[]" === r.ctor) return $(ff);
                    switch (r._0.valueOf()) {
                        case"-":
                            return "::" === r._1.ctor && "0" === r._1._0.valueOf() && "::" === r._1._1.ctor && "x" === r._1._1._0.valueOf() ? l(tt, gf(af(-1)), yf(r._1._1._1)) : l(tt, Za(Ha), tf(r._1));
                        case"+":
                            return l(tt, Za(Wa), tf(r._1));
                        case"0":
                            if ("::" === r._1.ctor && "x" === r._1._0.valueOf()) return yf(r._1._1);
                            break t;
                        default:
                            break t
                    }
                } while (0);
                return l(tt, Za(Wa), tf(r))
            }, wf = function (t) {
                return l(gf, t, t)
            }, kf = function (t) {
                return s(Na, gf(af(Fa)), lf, t)
            }, xf = c(function (t, r, n, e) {
                if (y.eq(t, 0)) return {ctor: "_Tuple2", _0: ff, _1: n};
                var o = af(t), c = l(gf, l(gf, o, e), r),
                    u = l(Ia, c, n) ? {ctor: "_Tuple2", _0: l(gf, o, r), _1: l(vf, n, c)} : {
                        ctor: "_Tuple2",
                        _0: ff,
                        _1: n
                    }, i = u._0, _ = d(xf, t / 2 | 0, r, u._1, e), a = _._0, f = _._1;
                return {ctor: "_Tuple2", _0: l(hf, i, a), _1: f}
            }), Sf = o(function (t, r, n) {
                return d(xf, Math.pow(2, Ba), t, r, n)
            }), Mf = o(function (t, r, n) {
                if (y.eq(t, 0)) return s(Sf, kf(t), r, n);
                var e = s(Sf, kf(t), r, n), o = e._0, c = e._1, u = s(Mf, t - 1, c, n), i = u._0, _ = u._1;
                return {ctor: "_Tuple2", _0: l(hf, o, i), _1: _}
            }), Nf = n(function (t, r) {
                if (y.eq(r, ff)) return Z;
                var n = dt(ja(t)) - dt(ja(r)) + 1, e = s(Mf, l(L, 0, n), Ka(t), Ka(r)), o = e._0, c = e._1;
                return $({ctor: "_Tuple2", _0: l(Za, l(za, Ya(t), Ya(r)), rf(o)), _1: l(Za, Ya(t), rf(c))})
            }), Bf = n(function (t, r) {
                return l(X, ff, l(tt, Nn, l(Nf, t, r)))
            }), Rf = o(function (t, r, n) {
                t:for (; ;) {
                    switch (n.ctor) {
                        case"Zer":
                            return lf;
                        case"Neg":
                            return Va;
                        default:
                            if (y.eq(n, lf)) return l(gf, t, r);
                            if (Ra(n)) {
                                t = t, r = wf(r), n = l(Bf, n, sf);
                                continue t
                            }
                            t = l(gf, r, t), r = wf(r), n = l(Bf, l(vf, n, lf), sf);
                            continue t
                    }
                }
            }), Of = (n(function (t, r) {
                return s(Rf, lf, t, r)
            }), n(function (t, r) {
                var n = l(tt, Mn, l(Nf, t, r));
                return "Nothing" === n.ctor ? y.crashCase("BigInt", {
                    start: {line: 572, column: 5},
                    end: {line: 577, column: 14}
                }, n)("Cannot perform mod 0. Division by zero error.") : n._0
            }), o(function (t, r, n) {
                return l(X, NaN, $t(fr(l(t, r, n))))
            })), Af = function (t) {
                var r = t, n = r._1, e = r._0;
                if (y.eq(e, y.chr("9"))) {
                    var o = Ar(n);
                    return "Nothing" === o.ctor ? "01" : l(Cr, y.chr("0"), Af(o._0))
                }
                var c = Zt(e);
                return y.cmp(c, 48) > -1 && y.cmp(c, 57) < 0 ? l(Cr, Xt(c + 1), n) : "0"
            }, Cf = n(function (t, r) {
                var n = l(ft, function (t) {
                    return !y.eq(t, y.chr("0")) && !y.eq(t, y.chr("."))
                }, ar(r));
                return l(z["++"], t && n ? "-" : "", r)
            }), Ef = function (t) {
                var r = l(Mr, ".", t);
                return "::" === r.ctor ? "::" === r._1.ctor ? {ctor: "_Tuple2", _0: r._0, _1: r._1._0} : {
                    ctor: "_Tuple2",
                    _0: r._0,
                    _1: "0"
                } : {ctor: "_Tuple2", _0: "0", _1: "0"}
            }, Lf = o(function (t, r, e) {
                if (N(e) || B(e)) return M(e);
                var o = y.cmp(e, 0) < 0, c = Ef(function (t) {
                        var r = l(Mr, "e", M(J(t)));
                        if ("::" === r.ctor) {
                            if ("::" === r._1.ctor) {
                                var n = r._1._0, e = Ef(r._0), o = e._0, c = e._1, u = l(z["++"], o, c),
                                    i = l(X, 0, $t(lr(l(dr, "+", n) ? l(Tr, 1, n) : n))),
                                    _ = y.cmp(i, 0) < 0 ? l(X, "0", l(tt, function (t) {
                                        var r = t;
                                        return l(z["++"], r._0, l(z["++"], ".", r._1))
                                    }, l(tt, Sn(Er), Ar(l(z["++"], l(xr, J(i), "0"), u))))) : s(gr, i + 1, y.chr("0"), u);
                                return l(z["++"], y.cmp(t, 0) < 0 ? "-" : "", _)
                            }
                            return l(z["++"], y.cmp(t, 0) < 0 ? "-" : "", r._0)
                        }
                        return ""
                    }(J(e))), u = c._0, i = c._1, _ = Rr(u) + r, a = l(L, 1, _),
                    f = l(z["++"], l(xr, j(_) + 1, "0"), s(gr, _, y.chr("0"), l(z["++"], u, i))), d = Rr(f),
                    p = l(t, o, s(kr, a, d, f)), h = s(kr, 0, a, f), v = p ? Nr(l(X, "1", l(tt, Af, Ar(Nr(h))))) : h,
                    m = Rr(v), g = y.eq(v, "0") ? v : y.cmp(r, 0) < 1 ? l(n(function (t, r) {
                        return l(z["++"], t, r)
                    }), v, l(xr, J(r), "0")) : y.cmp(r, Rr(i)) < 0 ? l(z["++"], s(kr, 0, m - r, v), l(z["++"], ".", s(kr, m - r, m, v))) : l(n(function (t, r) {
                        return l(z["++"], t, r)
                    }), l(z["++"], u, "."), s(gr, r, y.chr("0"), i));
                return l(Cf, o, g)
            }), qf = Lf(n(function (t, r) {
                var n = Ar(r);
                return "Nothing" !== n.ctor && ("5" === n._0._0.valueOf() ? "" !== n._0._1 || !t : function (r) {
                    return y.cmp(r, 53) > 0 && t || y.cmp(r, 53) > -1 && !t
                }(Zt(n._0._0)))
            })), Df = Of(qf), If = Lf(n(function (t, r) {
                var e = Ar(r);
                return "Nothing" !== e.ctor && ("_Tuple2" === e._0.ctor && "0" === e._0._0.valueOf() ? l(n(function (t, r) {
                    return t && r
                }), !t, l(ft, n(function (t, r) {
                    return !y.eq(t, r)
                })(y.chr("0")), ar(e._0._1))) : !t)
            })), Ff = (Of(If), Lf(n(function (t, r) {
                var e = Ar(r);
                return "Nothing" !== e.ctor && ("_Tuple2" === e._0.ctor && "0" === e._0._0.valueOf() ? l(n(function (t, r) {
                    return t && r
                }), t, l(ft, n(function (t, r) {
                    return !y.eq(t, r)
                })(y.chr("0")), ar(e._0._1))) : t)
            }))), Pf = (Of(n(function (t, r) {
                return y.cmp(r, 0) < 0 ? l(If, t, r) : l(Ff, t, r)
            })), Of(n(function (t, r) {
                return y.cmp(r, 0) < 0 ? l(Ff, t, r) : l(If, t, r)
            })), Of(Ff), Of(Lf(n(function (t, r) {
                return l(n(function (t, r) {
                    return y.cmp(t, r) < 1
                }), 53, Zt(l(X, y.chr("0"), l(tt, Nn, Ar(r)))))
            }))), function (t) {
                switch (t.ctor) {
                    case"Jan":
                        return 1;
                    case"Feb":
                        return 2;
                    case"Mar":
                        return 3;
                    case"Apr":
                        return 4;
                    case"May":
                        return 5;
                    case"Jun":
                        return 6;
                    case"Jul":
                        return 7;
                    case"Aug":
                        return 8;
                    case"Sep":
                        return 9;
                    case"Oct":
                        return 10;
                    case"Nov":
                        return 11;
                    default:
                        return 12
                }
            }), Jf = function (t) {
                return y.eq(l(z["%"], t, 4), 0) && !y.eq(l(z["%"], t, 100), 0) || y.eq(l(z["%"], t, 400), 0)
            }, jf = n(function (t, r) {
                switch (r.ctor) {
                    case"Jan":
                        return 31;
                    case"Feb":
                        return Jf(t) ? 29 : 28;
                    case"Mar":
                        return 31;
                    case"Apr":
                        return 30;
                    case"May":
                        return 31;
                    case"Jun":
                        return 30;
                    case"Jul":
                    case"Aug":
                        return 31;
                    case"Sep":
                        return 30;
                    case"Oct":
                        return 31;
                    case"Nov":
                        return 30;
                    default:
                        return 31
                }
            }), Uf = function (t) {
                return l(jf, zc(t), Wc(t))
            }, Hf = function (t) {
                return A(Yc(t))
            }, Wf = function (t) {
                return Gc(R(t))
            }, zf = A(1), Gf = 1e3 * zf, Yf = 60 * Gf, Vf = 60 * Yf, Qf = 24 * Vf, Xf = 7 * Qf, Zf = (n(function (t, r) {
                var n = Fc(t) - Fc(r), e = Pc(t) - Pc(r), o = Jc(t) - Jc(r), c = jc(t) - jc(r),
                    u = (Hf(t) - Hf(r) - c * Vf - o * Yf - e * Gf - n * zf) / Qf | 0, i = function () {
                        if (y.cmp(u, 0) < 0) {
                            var t = J(u);
                            return {ctor: "_Tuple2", _0: j(t / 7 | 0), _1: j(l(z["%"], t, 7))}
                        }
                        return {ctor: "_Tuple2", _0: u / 7 | 0, _1: l(z["%"], u, 7)}
                    }();
                return {week: i._0, day: i._1, hour: c, minute: o, second: e, millisecond: n}
            }), o(function (t, r, e) {
                return Wf(l(n(function (t, r) {
                    return t + r
                }), r * t, Hf(e)))
            })), Kf = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Millisecond":
                        return zf;
                    case"Second":
                        return Gf;
                    case"Minute":
                        return Yf;
                    case"Hour":
                        return Vf;
                    case"Day":
                        return Qf;
                    case"Week":
                        return Xf;
                    default:
                        var n = r._0;
                        return zf * n.millisecond + Gf * n.second + Yf * n.minute + Vf * n.hour + Qf * n.day + Xf * n.week
                }
            }, $f = function (t) {
                return Zf(Kf(t))
            }, tl = (i(function (t, r, n, e, o, c) {
                return {week: t, day: r, hour: n, minute: e, second: o, millisecond: c}
            }), function (t) {
                return {ctor: "Delta", _0: t}
            }), rl = {ctor: "Week"}, nl = {ctor: "Day"}, el = {ctor: "Hour"}, ol = {ctor: "Minute"}, cl = {ctor: "Second"},
            ul = {ctor: "Millisecond"}, il = (c(function (t, r, n, e) {
                return {hour: t, minute: r, second: n, millisecond: e}
            }), _(function (t, r, n, e, o, c, u) {
                return {year: t, month: r, day: n, hour: e, minute: o, second: c, millisecond: u}
            }), o(function (t, r, n) {
                var e = ((153 * (r + (y.cmp(r, 2) > 0 ? -3 : 9)) + 2) / 5 | 0) + n - 1, o = t - (y.cmp(r, 2) < 1 ? 1 : 0),
                    c = (y.cmp(o, 0) > -1 ? o : o - 399) / 400 | 0, u = o - 400 * c;
                return 146097 * c + (365 * u + (u / 4 | 0) - (u / 100 | 0) + e) - 719468
            })), _l = _(function (t, r, n, e, o, c, u) {
                var i = Pf(r), _ = y.cmp(t, 0) < 0 ? 0 : t, a = s(F, 1, l(jf, _, r), n), f = s(il, _, i, a);
                return Kf(tl({
                    millisecond: s(F, 0, 999, u),
                    second: s(F, 0, 59, c),
                    minute: s(F, 0, 59, o),
                    hour: s(F, 0, 23, e),
                    day: f,
                    week: 0
                }))
            }), al = function (t) {
                var r = function (t) {
                    return v(_l, zc(t), Wc(t), Hc(t), jc(t), Jc(t), Pc(t), Fc(t))
                }(t);
                return (A(Yc(t)) - r) / Yf | 0
            }, fl = n(function (t, r) {
                return Wf(l(n(function (t, r) {
                    return t + r
                }), t * Yf, Hf(r)))
            }), ll = (n(function (t, r) {
                return s($f, ol, al(r) - al(t), r)
            }), Hf), sl = Yf, dl = Pf, pl = function (t) {
                switch (t.ctor) {
                    case"Mon":
                        return 1;
                    case"Tue":
                        return 2;
                    case"Wed":
                        return 3;
                    case"Thu":
                        return 4;
                    case"Fri":
                        return 5;
                    case"Sat":
                        return 6;
                    default:
                        return 7
                }
            }, hl = n(function (t, r) {
                var n = pl(r), e = pl(t);
                return y.cmp(e, n) < 0 ? 7 + e - n : e - n
            }), vl = function (t) {
                return y.cmp(t, 1) < 1 ? au : y.eq(t, 2) ? _u : y.eq(t, 3) ? iu : y.eq(t, 4) ? uu : y.eq(t, 5) ? cu : y.eq(t, 6) ? ou : y.eq(t, 7) ? eu : y.eq(t, 8) ? nu : y.eq(t, 9) ? ru : y.eq(t, 10) ? tu : y.eq(t, 11) ? $c : Kc
            }, ml = Wf, gl = Uf, bl = jf, yl = (c(function (t, r, n, e) {
                var o = ll(e), c = ll(n), u = l(L, c, o), i = l(q, c, o), _ = ll(r);
                switch (t.ctor) {
                    case"Between":
                        return y.cmp(_, i) > 0 && y.cmp(_, u) < 0;
                    case"BetweenOpenStart":
                        return y.cmp(_, i) > -1 && y.cmp(_, u) < 0;
                    case"BetweenOpenEnd":
                        return y.cmp(_, i) > 0 && y.cmp(_, u) < 1;
                    default:
                        return y.cmp(_, i) > -1 && y.cmp(_, u) < 1
                }
            }), o(function (t, r, n) {
                var e = ll(n), o = ll(r);
                switch (t.ctor) {
                    case"Before":
                        return y.cmp(o, e) < 0;
                    case"After":
                        return y.cmp(o, e) > 0;
                    case"Same":
                        return y.eq(o, e);
                    case"SameOrBefore":
                        return y.cmp(o, e) < 1;
                    default:
                        return y.cmp(o, e) > -1
                }
            })), Tl = {ctor: "SameOrAfter"}, wl = {ctor: "Before"}, kl = {ctor: "After"}, xl = {ctor: "PM"},
            Sl = {ctor: "AM"}, Ml = function (t) {
                return y.cmp(jc(t), 12) < 0 ? Sl : xl
            }, Nl = (n(function (t, r) {
                return {i18n: t, format: r}
            }), function (t) {
                return "AM" === t.ctor ? "AM" : "PM"
            }), Bl = {
                i18n: {
                    dayShort: function (t) {
                        switch (t.ctor) {
                            case"Mon":
                                return "Mon";
                            case"Tue":
                                return "Tue";
                            case"Wed":
                                return "Wed";
                            case"Thu":
                                return "Thu";
                            case"Fri":
                                return "Fri";
                            case"Sat":
                                return "Sat";
                            default:
                                return "Sun"
                        }
                    }, dayName: function (t) {
                        switch (t.ctor) {
                            case"Mon":
                                return "Monday";
                            case"Tue":
                                return "Tuesday";
                            case"Wed":
                                return "Wednesday";
                            case"Thu":
                                return "Thursday";
                            case"Fri":
                                return "Friday";
                            case"Sat":
                                return "Saturday";
                            default:
                                return "Sunday"
                        }
                    }, monthShort: function (t) {
                        switch (t.ctor) {
                            case"Jan":
                                return "Jan";
                            case"Feb":
                                return "Feb";
                            case"Mar":
                                return "Mar";
                            case"Apr":
                                return "Apr";
                            case"May":
                                return "May";
                            case"Jun":
                                return "Jun";
                            case"Jul":
                                return "Jul";
                            case"Aug":
                                return "Aug";
                            case"Sep":
                                return "Sep";
                            case"Oct":
                                return "Oct";
                            case"Nov":
                                return "Nov";
                            default:
                                return "Dec"
                        }
                    }, monthName: function (t) {
                        switch (t.ctor) {
                            case"Jan":
                                return "January";
                            case"Feb":
                                return "February";
                            case"Mar":
                                return "March";
                            case"Apr":
                                return "April";
                            case"May":
                                return "May";
                            case"Jun":
                                return "June";
                            case"Jul":
                                return "July";
                            case"Aug":
                                return "August";
                            case"Sep":
                                return "September";
                            case"Oct":
                                return "October";
                            case"Nov":
                                return "November";
                            default:
                                return "December"
                        }
                    }, dayOfMonthWithSuffix: n(function (t, r) {
                        var n = function () {
                            switch (r) {
                                case 1:
                                    return "1st";
                                case 21:
                                    return "21st";
                                case 2:
                                    return "2nd";
                                case 22:
                                    return "22nd";
                                case 3:
                                    return "3rd";
                                case 23:
                                    return "23rd";
                                case 31:
                                    return "31st";
                                default:
                                    return l(z["++"], M(r), "th")
                            }
                        }();
                        return t ? s(br, 4, y.chr(" "), n) : n
                    }), twelveHourPeriod: Nl
                },
                format: {
                    date: "%-m/%-d/%Y",
                    longDate: "%A, %B %d, %Y",
                    time: "%-I:%M %p",
                    longTime: "%-I:%M:%S %p",
                    dateTime: "%-m/%-d/%Y %-I:%M %p",
                    firstDayOfWeek: Xc
                }
            }, Rl = n(function (t, r) {
                var n = 1 === r ? "1er" : M(r);
                return t ? s(br, 3, y.chr(" "), n) : n
            }), Ol = Gc(0), Al = function () {
                var t = 60 * jc(Ol) + Jc(Ol);
                return y.eq(zc(Ol), 1969) ? 0 - (t - 1440) : 0 - t
            }(), Cl = al, El = function (t) {
                var r = s($f, ul, t + Al * sl, Ol), n = Cl(r);
                return y.eq(n, Al) ? r : s($f, ol, n - Al, r)
            }, Ll = _(function (t, r, n, e, o, c, u) {
                return El(v(_l, t, r, n, e, o, c, u))
            }), ql = (s(Ll, 1970, au, 1), o(function (t, r, n) {
                var e = s(il, zc(r), dl(Wc(r)), Hc(r));
                return (s(il, zc(t), dl(Wc(t)), Hc(t)) - e) * n
            })), Dl = n(function (t, r) {
                return s(yl, kl, t, r) ? s(ql, t, r, 1) : s(ql, r, t, -1)
            }), Il = o(function (t, r, n) {
                var e = o(function (t, r, n) {
                        var e = t + r;
                        return y.cmp(e, 0) < 0 ? {ctor: "_Tuple2", _0: n + e, _1: -1} : {ctor: "_Tuple2", _0: e, _1: 0}
                    }), u = c(function (t, r, n, e) {
                        return y.cmp(r, n) < 0 ? {ctor: "_Tuple2", _0: t - 1, _1: e + r - n} : {
                            ctor: "_Tuple2",
                            _0: t,
                            _1: r - n
                        }
                    }), i = Fc(r), _ = Fc(t), a = Pc(r), f = Pc(t), p = Jc(r), h = Jc(t), v = jc(r), m = jc(t), g = Hc(r),
                    b = Hc(t), T = Wc(r), w = dl(T), k = Wc(t), x = dl(k), S = zc(r), M = l(bl, S, T), N = zc(t),
                    B = l(bl, N, k), R = d(u, N - S, x, w, 12), O = R._0, A = d(u, R._1, b, g, M), C = A._0,
                    E = d(u, A._1, m, v, 24), L = E._0, q = d(u, E._1, h, p, 60), D = q._0, I = d(u, q._1, f, a, 60),
                    F = I._0, P = d(u, I._1, _, i, 1e3), J = P._0, j = s(e, P._1, 0, 1e3), U = j._0, H = s(e, J, j._1, 60),
                    W = H._0, z = s(e, F, H._1, 60), G = z._0, Y = s(e, D, z._1, 60), V = Y._0, Q = s(e, L, Y._1, B),
                    X = Q._0, Z = s(e, C, Q._1, 12), K = Z._0;
                return {
                    year: s(e, O, Z._1, 0)._0 * n,
                    month: K * n,
                    day: X * n,
                    hour: V * n,
                    minute: G * n,
                    second: W * n,
                    millisecond: U * n
                }
            }), Fl = (n(function (t, r) {
                return s(yl, kl, t, r) ? s(Il, t, r, 1) : s(Il, r, t, -1)
            }), n(function (t, r) {
                var n = Hc(r), e = dl(Wc(r)), o = e + t, c = l(z["%"], o, 12),
                    u = y.cmp(o, 0) < 0 && !y.eq(c, 0) ? (o / 12 | 0) - 1 : o / 12 | 0, i = zc(r), _ = s(il, i, e, n),
                    a = i + u, f = l(q, l(bl, a, vl(o)), n), d = s(il, a, c, f);
                return s($f, nl, d - _, r)
            })), Pl = n(function (t, r) {
                return l(Fl, 12 * t, r)
            }), Jl = n(function (t, r) {
                var n = Cl(r), e = Cl(t);
                if (y.eq(e, n)) return r;
                var o = s($f, ul, (n - e) * sl, r), c = Cl(o);
                return y.eq(c, n) ? o : r
            }), jl = (_(function (t, r, n, e, o, c, u) {
                return {year: t, month: r, day: n, hour: e, minute: o, second: c, millisecond: u}
            }), {ctor: "Year"}), Ul = {ctor: "Month"}, Hl = o(function (t, r, n) {
                var e = t;
                switch (e.ctor) {
                    case"Millisecond":
                        return s($f, ul, r, n);
                    case"Second":
                        return s($f, cl, r, n);
                    case"Minute":
                        return s($f, ol, r, n);
                    case"Hour":
                        return s($f, el, r, n);
                    case"Day":
                        return s($f, nl, r, n);
                    case"Week":
                        return s($f, rl, r, n);
                    case"Month":
                        return l(Fl, r, n);
                    case"Year":
                        return l(Pl, r, n);
                    default:
                        var o = e._0;
                        return s($f, tl({
                            week: 0,
                            day: o.day,
                            hour: o.hour,
                            minute: o.minute,
                            second: o.second,
                            millisecond: o.millisecond
                        }), r, s(Hl, Ul, o.month, s(Hl, jl, o.year, n)))
                }
            }), Wl = o(function (t, r, n) {
                var e = s(Hl, t, r, n);
                return function (t) {
                    var r = t;
                    switch (r.ctor) {
                        case"Millisecond":
                        case"Second":
                        case"Minute":
                        case"Hour":
                            return !1;
                        case"Day":
                        case"Week":
                        case"Month":
                        case"Year":
                            return !0;
                        default:
                            var n = r._0;
                            return !y.eq(n.day, 0) || !y.eq(n.month, 0) || !y.eq(n.year, 0)
                    }
                }(t) ? l(Jl, n, e) : e
            }), zl = {ctor: "Day"}, Gl = {ctor: "Hour"}, Yl = {ctor: "Minute"}, Vl = {ctor: "Second"},
            Ql = {ctor: "Millisecond"}, Xl = o(function (t, r, n) {
                var e = pl(t), o = Uc(n), c = l(hl, o, r), u = e - pl(o), i = y.cmp(c + u, 0) < 0 ? u + 7 : u;
                return s(Wl, zl, i, n)
            }), Zl = n(function (t, r) {
                var n = dl(Wc(r)), e = dl(t);
                return s(Wl, Ul, e - n, r)
            }), Kl = n(function (t, r) {
                var n = t;
                switch (n.ctor) {
                    case"Millisecond":
                        return s(Wl, Ql, s(F, 0, 999, n._0) - Fc(r), r);
                    case"Second":
                        return s(Wl, Vl, s(F, 0, 59, n._0) - Pc(r), r);
                    case"Minute":
                        return s(Wl, Yl, s(F, 0, 59, n._0) - Jc(r), r);
                    case"Hour":
                        return s(Wl, Gl, s(F, 0, 23, n._0) - jc(r), r);
                    case"DayOfWeek":
                        return s(Xl, n._0._0, n._0._1, r);
                    case"DayOfMonth":
                        var e = gl(r);
                        return s(Wl, zl, s(F, 1, e, n._0) - Hc(r), r);
                    case"Month":
                        return l(Zl, n._0, r);
                    default:
                        var o = n._0, c = y.cmp(o, 0) < 0 ? 0 : o;
                        return s(Wl, jl, c - zc(r), r)
                }
            }), $l = (n(function (t, r) {
                var n = t;
                switch (n.ctor) {
                    case"Millisecond":
                        var e = n._0;
                        return y.cmp(e, 0) < 0 || y.cmp(e, 999) > 0 ? Z : $(s(Wl, Ql, e - Fc(r), r));
                    case"Second":
                        var o = n._0;
                        return y.cmp(o, 0) < 0 || y.cmp(o, 59) > 0 ? Z : $(s(Wl, Vl, o - Pc(r), r));
                    case"Minute":
                        var c = n._0;
                        return y.cmp(c, 0) < 0 || y.cmp(c, 59) > 0 ? Z : $(s(Wl, Yl, c - Jc(r), r));
                    case"Hour":
                        var u = n._0;
                        return y.cmp(u, 0) < 0 || y.cmp(u, 23) > 0 ? Z : $(s(Wl, Gl, u - jc(r), r));
                    case"DayOfWeek":
                        return $(s(Xl, n._0._0, n._0._1, r));
                    case"DayOfMonth":
                        var i = n._0, _ = gl(r);
                        return y.cmp(i, 1) < 0 || y.cmp(i, _) > 0 ? Z : $(s(Wl, zl, i - Hc(r), r));
                    case"Month":
                        return $(l(Zl, n._0, r));
                    default:
                        var a = n._0;
                        return y.cmp(a, 0) < 0 ? Z : $(s(Wl, jl, a - zc(r), r))
                }
            }), function (t) {
                return {ctor: "DayOfMonth", _0: t}
            }), ts = function (t) {
                return {ctor: "Hour", _0: t}
            }, rs = function (t) {
                return {ctor: "Minute", _0: t}
            }, ns = function (t) {
                return {ctor: "Second", _0: t}
            }, es = function (t) {
                return {ctor: "Millisecond", _0: t}
            }, os = {ctor: "Year"}, cs = {ctor: "Month"}, us = {ctor: "Day"}, is = {ctor: "Hour"}, _s = {ctor: "Minute"},
            as = {ctor: "Second"}, fs = n(function (t, r) {
                switch (t.ctor) {
                    case"Millisecond":
                        return r;
                    case"Second":
                        return l(Kl, es(0), r);
                    case"Minute":
                        return l(Kl, ns(0), l(fs, as, r));
                    case"Hour":
                        return l(Kl, rs(0), l(fs, _s, r));
                    case"Day":
                        return l(Kl, ts(0), l(fs, is, r));
                    case"Month":
                        return l(Kl, $l(1), l(fs, us, r));
                    default:
                        return ls(r)
                }
            }), ls = function (t) {
                var r = l(Kl, $l(1), t), n = l(Kl, function (t) {
                    return {ctor: "Month", _0: t}
                }(au), r), e = ll(r) - ll(n), o = ml(ll(t) - e);
                return l(fs, cs, o)
            }, ss = n(function (t, r) {
                switch (t.ctor) {
                    case"Millisecond":
                        return r;
                    case"Second":
                        return l(Kl, es(999), r);
                    case"Minute":
                        return l(Kl, ns(59), l(ss, as, r));
                    case"Hour":
                        return l(Kl, rs(59), l(ss, _s, r));
                    case"Day":
                        return l(Kl, ts(23), l(ss, is, r));
                    case"Month":
                        return l(Kl, $l(31), l(ss, us, r));
                    default:
                        var n = s(Wl, jl, 1, r), e = l(fs, os, n);
                        return s(Wl, Ql, -1, e)
                }
            }), ds = pl(Zc), ps = function (t) {
                var r = v(Ll, t, au, 4, 0, 0, 0, 0);
                return s(Wl, zl, ds - pl(Uc(r)), r)
            }, hs = function (t) {
                var r = function (t) {
                    var r = zc(t), n = v(Ll, r, Kc, 29, 0, 0, 0, 0);
                    if (s(yl, Tl, t, n)) {
                        var e = ps(r + 1);
                        return s(yl, wl, t, e) ? {ctor: "_Tuple2", _0: r, _1: ps(r)} : {ctor: "_Tuple2", _0: r + 1, _1: e}
                    }
                    var o = ps(r);
                    return s(yl, wl, t, o) ? {ctor: "_Tuple2", _0: r - 1, _1: ps(r - 1)} : {ctor: "_Tuple2", _0: r, _1: o}
                }(t), n = r._0, e = r._1;
                return {ctor: "_Tuple3", _0: n, _1: 1 + (l(Dl, t, e) / 7 | 0), _2: pl(Uc(t))}
            }, vs = o(function (t, r, n) {
                for (; ;) {
                    if (y.eq(t, 0)) return n;
                    if (y.cmp(t, 0) > 0) {
                        var e = {ctor: "::", _0: r, _1: n};
                        t = t - 1, r = s(Wl, zl, 1, r), n = e
                    } else {
                        var o = {ctor: "::", _0: r, _1: n};
                        t = t + 1, r = s(Wl, zl, -1, r), n = o
                    }
                }
            }), ms = (n(function (t, r) {
                return kt(s(vs, t, r, {ctor: "[]"}))
            }), n(function (t, r) {
                return function (n) {
                    return s(br, t, r, M(n))
                }
            })), gs = function (t) {
                return function (r) {
                    return s(br, 2, t, M(r))
                }
            }, bs = function (t) {
                return y.eq(l(z["%"], t, 12), 0) ? 12 : l(z["%"], t, 12)
            }, ys = n(function (t, r) {
                var n = function (t) {
                    return {ctor: "_Tuple2", _0: t / 60 | 0, _1: l(z["%"], t, 60)}
                }(J(r)), e = n._0, o = n._1;
                return l(z["++"], y.cmp(r, 0) < 1 ? "+" : "-", l(z["++"], l(gs, y.chr("0"), e), l(z["++"], t, l(gs, y.chr("0"), o))))
            }), Ts = c(function (t, r, n, e) {
                var o = l(X, " ", function (t) {
                    return l(K, S, t)
                }(mt(e.submatches)));
                switch (o) {
                    case"Y":
                        return s(ms, 4, y.chr("0"), zc(n));
                    case"y":
                        return l(wr, 2, s(ms, 2, y.chr("0"), zc(n)));
                    case"m":
                        return l(gs, y.chr("0"), dl(Wc(n)));
                    case"_m":
                        return l(gs, y.chr(" "), dl(Wc(n)));
                    case"-m":
                        return M(dl(Wc(n)));
                    case"B":
                        return t.i18n.monthName(Wc(n));
                    case"^B":
                        return mr(t.i18n.monthName(Wc(n)));
                    case"b":
                        return t.i18n.monthShort(Wc(n));
                    case"^b":
                        return mr(t.i18n.monthShort(Wc(n)));
                    case"d":
                        return l(gs, y.chr("0"), Hc(n));
                    case"-d":
                        return M(Hc(n));
                    case"-@d":
                        return l(t.i18n.dayOfMonthWithSuffix, !1, Hc(n));
                    case"e":
                        return l(gs, y.chr(" "), Hc(n));
                    case"@e":
                        return l(t.i18n.dayOfMonthWithSuffix, !0, Hc(n));
                    case"A":
                        return t.i18n.dayName(Uc(n));
                    case"^A":
                        return mr(t.i18n.dayName(Uc(n)));
                    case"a":
                        return t.i18n.dayShort(Uc(n));
                    case"^a":
                        return mr(t.i18n.dayShort(Uc(n)));
                    case"H":
                        return l(gs, y.chr("0"), jc(n));
                    case"-H":
                        return M(jc(n));
                    case"k":
                        return l(gs, y.chr(" "), jc(n));
                    case"I":
                        return l(gs, y.chr("0"), bs(jc(n)));
                    case"-I":
                        return M(bs(jc(n)));
                    case"l":
                        return l(gs, y.chr(" "), bs(jc(n)));
                    case"p":
                        return mr(t.i18n.twelveHourPeriod(Ml(n)));
                    case"P":
                        return t.i18n.twelveHourPeriod(Ml(n));
                    case"M":
                        return l(gs, y.chr("0"), Jc(n));
                    case"S":
                        return l(gs, y.chr("0"), Pc(n));
                    case"L":
                        return s(ms, 3, y.chr("0"), Fc(n));
                    case"%":
                        return o;
                    case"z":
                        return l(ys, "", r);
                    case":z":
                        return l(ys, ":", r);
                    case"G":
                        var c = hs(n);
                        return s(ms, 3, y.chr("0"), c._0);
                    case"V":
                        var u = hs(n);
                        return l(gs, y.chr("0"), u._1);
                    case"-V":
                        var i = hs(n);
                        return M(i._1);
                    case"u":
                        var _ = hs(n);
                        return M(_._2);
                    default:
                        return ""
                }
            }), ws = wo("%(y|Y|m|_m|-m|B|^B|b|^b|d|-d|-@d|e|@e|A|^A|a|^a|H|-H|k|I|-I|l|p|P|M|S|%|L|z|:z|G|V|-V|u)"),
            ks = c(function (t, r, n, e) {
                var o = Cl(e);
                return d(yo, ko, ws, s(Ts, t, r, l(fl, o - r, e)), n)
            }), xs = o(function (t, r, n) {
                return d(ks, t, Cl(n), r, n)
            }), Ss = (o(function (t, r, n) {
                return d(ks, t, 0, r, n)
            }), l(xs, Bl, "%Y-%m-%dT%H:%M:%S.%L%:z"), l(xs, Bl, "%Y-%m-%dT%H:%M:%S.%L"), n(function (t, r) {
                if (y.cmp(dt(r), t) < 1) return {ctor: "::", _0: r, _1: {ctor: "[]"}};
                var n = o(function (t, r, n) {
                    for (; ;) {
                        if ("[]" === r.ctor) return n;
                        var e = t, o = l(ct, t, r), c = {ctor: "::", _0: l(Ct, t, r), _1: n};
                        t = e, r = o, n = c
                    }
                });
                return kt(s(n, t, r, {ctor: "[]"}))
            })), Ms = function (t) {
                var r = t;
                return "[]" === r.ctor ? 0 : "Off" === r._0.ctor ? 2 * Ms(r._1) : 1 + 2 * Ms(r._1)
            }, Ns = function (t) {
                return Ms(kt(t))
            }, Bs = {ctor: "Off"}, Rs = {ctor: "On"}, Os = function (t) {
                return y.eq(t, 0) ? {ctor: "[]"} : y.eq(l(z["%"], t, 2), 1) ? l(St, Os(t / 2 | 0), {
                    ctor: "::",
                    _0: Rs,
                    _1: {ctor: "[]"}
                }) : l(St, Os(t / 2 | 0), {ctor: "::", _0: Bs, _1: {ctor: "[]"}})
            }, As = n(function (t, r) {
                var n = Os(t), e = r - dt(n);
                return l(St, l(Lt, e, Bs), n)
            }), Cs = n(function (t, r) {
                return kt(l(ct, t, kt(r)))
            }), Es = ar("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), Ls = function () {
                var t = n(function (t, r) {
                    var n = t;
                    return s(vn, n._1, n._0, r)
                });
                return s(st, t, rn, l(It, n(function (t, r) {
                    return {ctor: "_Tuple2", _0: t, _1: r}
                }), Es))
            }(), qs = (function () {
                var t = n(function (t, r) {
                    t:for (; ;) {
                        var n = r;
                        if ("::" === n.ctor) {
                            if ("::" === n._1.ctor) {
                                if ("::" === n._1._1.ctor) {
                                    t = {
                                        ctor: "::",
                                        _0: {ctor: "_Tuple3", _0: n._0, _1: n._1._0, _2: n._1._1._0},
                                        _1: t
                                    }, r = n._1._1._1;
                                    continue t
                                }
                                return {ctor: "::", _0: {ctor: "_Tuple3", _0: n._0, _1: n._1._0, _2: -1}, _1: t}
                            }
                            return {ctor: "::", _0: {ctor: "_Tuple3", _0: n._0, _1: -1, _2: -1}, _1: t}
                        }
                        return t
                    }
                })
            }(), function (t) {
                if (function (t) {
                    var r = l(sr, "==", t) ? l(yr, 2, t) : l(sr, "=", t) ? l(yr, 1, t) : t;
                    return l(hr, function (t) {
                        return l(zr, t, Ls)
                    }, r)
                }(t)) {
                    var r = l(bt, Ns, l(Ss, 8, function (t) {
                        var r = l(sr, "==", t) ? 2 : l(sr, "=", t) ? 1 : 0, n = ar(l(yr, r, t)), e = l(bt, function (t) {
                            var r = l(Wr, t, Ls);
                            return "Just" === r.ctor ? r._0 : -1
                        }, n);
                        return l(Cs, 2 * r, l(Nt, l(k, As, 6), e))
                    }(t))), n = l(bt, Xt, r);
                    return er(_r(n))
                }
                return rr("Error while decoding")
            }), Ds = u(function (t, r, n, e, o) {
                return Oi({
                    method: t,
                    headers: {ctor: "::", _0: l(Ri, "Authorization", l(z["++"], "Bearer ", r)), _1: {ctor: "[]"}},
                    url: n,
                    body: e,
                    expect: Mi(o),
                    timeout: Z,
                    withCredentials: !1
                })
            }), Is = (o(function (t, r, n) {
                return p(Ds, "GET", t, r, Bi, n)
            }), Ds("POST"), Ds("PUT"), o(function (t, r, n) {
                return p(Ds, "DELETE", t, r, Bi, n)
            }), o(function (t, r, n) {
                return s(Ai, t, Ni(n), r)
            }), Br(function (t) {
                var r = t;
                switch (r.valueOf()) {
                    case"-":
                        return y.chr("+");
                    case"_":
                        return y.chr("/");
                    default:
                        return r
                }
            })), Fs = function (t) {
                return {ctor: "TokenDecodeError", _0: t}
            }, Ps = function (t) {
                return {ctor: "TokenProcessingError", _0: t}
            }, Js = function (t) {
                switch (l(z["%"], Rr(t), 4)) {
                    case 0:
                        return er(t);
                    case 2:
                        return er(Or({ctor: "::", _0: t, _1: {ctor: "::", _0: "==", _1: {ctor: "[]"}}}));
                    case 3:
                        return er(Or({ctor: "::", _0: t, _1: {ctor: "::", _0: "=", _1: {ctor: "[]"}}}));
                    default:
                        return rr(Ps("Wrong length"))
                }
            }, js = n(function (t, r) {
                var n = l(Mr, ".", Is(r)), e = l(bt, Js, n);
                t:do {
                    if ("::" === e.ctor && "::" === e._1.ctor) {
                        if ("Err" === e._1._0.ctor) {
                            if ("::" === e._1._1.ctor && "[]" === e._1._1._1.ctor) return rr(e._1._0._0);
                            break t
                        }
                        if ("::" === e._1._1.ctor && "[]" === e._1._1._1.ctor) {
                            var o = qs(e._1._0._0);
                            if ("Ok" === o.ctor) {
                                var c = l(ie, t, o._0);
                                return "Ok" === c.ctor ? er(c._0) : rr(Fs(c._0))
                            }
                            return rr(Ps(o._0))
                        }
                        break t
                    }
                    break t
                } while (0);
                return rr(Ps("Token has invalid shape"))
            }), Us = n(function (t, r) {
                return l(or, function (r) {
                    return y.cmp(t, 1e3 * r) > 0
                }, l(js, l(ge, "exp", ke), r))
            }), Hs = {ctor: "TokenNotExpired"}, Ws = {ctor: "TokenExpired"}, zs = n(function (t, r) {
                var n = l(Us, r, t);
                return "Ok" === n.ctor ? !0 === n._0 ? Ws : Hs : n._0
            }), Gs = {ctor: "Unauthorized"}, Ys = function (t) {
                return {ctor: "HttpError", _0: t}
            }, Vs = function (t) {
                var r = t;
                return "BadStatus" === r.ctor && y.eq(r._0.status.code, 401) ? Gs : Ys(t)
            }, Qs = (n(function (t, r) {
                return l(Ei, function (t) {
                    return function (r) {
                        return t(l(ur, Vs, r))
                    }
                }(t), r)
            }), n(function (t, r) {
                return "Unauthorized" === Vs(r).ctor ? function (t) {
                    return l(Be, function (r) {
                        return Ce(l(zs, t, r))
                    }, Ve)
                }(t) : Ce(Ys(r))
            })), Xs = (o(function (t, r, n) {
                return l(je, r, l(Ne, function (r) {
                    return l(Ee, rr, l(Qs, t, r))
                }, l(Ee, er, Ci(n))))
            }), l(pe, function (t) {
                return {code: t}
            }, l(ge, "code", Me))), Zs = c(function (t, r, n, e) {
                return {slug: t, name: r, skills: n, module_: e}
            }), Ks = l(pe, function (t) {
                return {name: t}
            }, l(ge, "name", Me)),
            $s = p(le, Zs, l(ge, "slug", Me), l(ge, "name", Me), l(ge, "skills", we(Ks)), ve(l(ge, "module", Xs))),
            td = (l(Hn, function (t) {
                var r = t;
                return "CityScope" === r.ctor ? $(r._0) : Z
            }, function (t) {
                return {ctor: "CityScope", _0: t}
            }), l(Hn, function (t) {
                var r = t;
                return "InstanceScope" === r.ctor ? $(r._0) : Z
            }, function (t) {
                return {ctor: "InstanceScope", _0: t}
            }), function (t) {
                return "Nothing" === t.ctor
            }), rd = (K(S), o(function (t, r, n) {
                var e = n;
                return "Nothing" === e.ctor ? t({ctor: "_Tuple0"}) : r(e._0)
            })), nd = o(function (t, r, n) {
                var e = n;
                return "Nothing" === e.ctor ? t : r(e._0)
            }), ed = (l(k, nd, $), Dc), od = l(ee, function (t) {
                return s(rd, function (r) {
                    return oe(l(z["++"], "expected a BigInt, got ", t))
                }, ce, Tf(t))
            }, l(pe, te(0), ne)), cd = function (t) {
                return ee(function (r) {
                    return s(ed, oe, ce, t(r))
                })
            }, ud = (n(function (t, r) {
                var n = y.cmp(t, 0) > 0, e = y.cmp(r, 0) > 0;
                return !0 === n ? !0 === e ? V : Q : !0 === e ? Y : l(D, t, r)
            }), function (t) {
                switch (t.ctor) {
                    case"LT":
                        return Y;
                    case"EQ":
                        return V;
                    default:
                        return Q
                }
            }), id = function (t) {
                return "Ascending" === t.ctor ? S : ud
            }, _d = (c(function (t, r, n, e) {
                var o = {ctor: "_Tuple2", _0: n, _1: e};
                return "Nothing" === o._0.ctor ? "Just" === o._1.ctor ? Y : V : "Nothing" === o._1.ctor ? Q : l(id, r, l(t, o._0._0, o._1._0))
            }), u(function (t, r, n, e, o) {
                return l(id, r, l(n, t(e), t(o)))
            }), function (t) {
                var r = n(function (r, n) {
                    var e = n, o = e._1, c = e._0, u = t(r);
                    return l(Xo, u, o) ? {ctor: "_Tuple2", _0: c, _1: o} : {
                        ctor: "_Tuple2",
                        _0: {ctor: "::", _0: r, _1: c},
                        _1: l($o, u, o)
                    }
                });
                return function (t) {
                    return Nn(s(lt, r, {ctor: "_Tuple2", _0: {ctor: "[]"}, _1: Ko}, t))
                }
            }(S)), ad = function (t) {
                return function (t) {
                    return l(ot, S, t)
                }(_d(t))
            }, fd = (n(function (t, r) {
                return s(o(function (t, r, n) {
                    for (; ;) {
                        var e = {ctor: "_Tuple2", _0: r, _1: n};
                        if ("_Tuple2" !== e.ctor || "::" !== e._0.ctor || "::" !== e._1.ctor) return kt(t);
                        t = {ctor: "::", _0: {ctor: "_Tuple2", _0: e._0._0, _1: e._1._0}, _1: t}, r = e._0._1, n = e._1._1
                    }
                }), {ctor: "[]"}, t, r)
            }), o(function (t, r, n) {
                var e = r, o = n, c = l(t, e._0, o._0);
                return "EQ" === c.ctor ? l(D, e._1, o._1) : c
            })), ld = (n(function (t, r) {
                var e = l(It, n(function (t, r) {
                    return {ctor: "_Tuple2", _0: r, _1: t}
                }), r);
                return l(bt, Nn, l(et, fd(t), e))
            }), n(function (t, r) {
                for (; ;) {
                    var n = r;
                    if ("[]" === n.ctor) return Z;
                    var e = t(n._0);
                    if ("Nothing" !== e.ctor) return e;
                    t = t, r = n._1
                }
            })), sd = n(function (t, r) {
                return ld(function (n) {
                    return y.eq(t(n), r) ? $(n) : Z
                })
            }), dd = (sd(S), l(nd, {ctor: "[]"}, function (t) {
                return {ctor: "::", _0: t, _1: {ctor: "[]"}}
            })), pd = function (t) {
                var r = t;
                return {ctor: "::", _0: r._0, _1: r._1}
            }, hd = n(function (t, r) {
                return {ctor: "NonEmptyList", _0: t, _1: r}
            }), vd = (n(function (t, r) {
                var n = r;
                return l(hd, t(n._0), l(bt, t, n._1))
            }), n(function (t, r) {
                var n = t;
                return l(hd, n._0, l(z["++"], n._1, pd(r)))
            }), n(function (t, r) {
                var n = r, e = l(Nt, function (r) {
                    return pd(t(r))
                }, n._1), o = t(n._0);
                return l(hd, function (t) {
                    return t._0
                }(o), l(z["++"], function (t) {
                    return t._1
                }(o), e))
            }), o(function (t, r, n) {
                return l(ir, l(z["++"], "No match for ", n), s(sd, t, n, r))
            })), md = _(function (t, r, n, e, o, c, u) {
                return {testRunId: t, logins: r, prerequisites: n, skills: e, mark: o, mandatoryFailed: c, externalItems: u}
            }), gd = c(function (t, r, n, e) {
                return {instanceCode: t, city: r, year: n, results: e}
            }), bd = n(function (t, r) {
                return {project: t, instances: r}
            }), yd = o(function (t, r, n) {
                return {count: t, passed: r, crashed: n}
            }), Td = d(se, yd, l(ge, "count", xe), l(ge, "passed", xe), l(ge, "crashed", xe)), wd = o(function (t, r, n) {
                return {type_: t, value: r, comment: n}
            }), kd = function (t) {
                return {ctor: "Info", _0: t}
            }, xd = function (t) {
                return {ctor: "Failure", _0: t}
            }, Sd = {ctor: "Crash"}, Md = {ctor: "MandatoryTestFailed"}, Nd = {ctor: "NoTestPassed"},
            Bd = {ctor: "NormFlag"}, Rd = {ctor: "CodingStyle"}, Od = {ctor: "Banned"}, Ad = {ctor: "MakeError"},
            Cd = {ctor: "DeliveryError"}, Ed = {ctor: "TracePool"}, Ld = {ctor: "LintInfo"}, qd = {ctor: "LintMinor"},
            Dd = {ctor: "LintMajor"}, Id = {ctor: "CoverageLines"}, Fd = {ctor: "CoverageBranches"},
            Pd = {ctor: "CoverageMain"}, Jd = l(vd, function (t) {
                var r = t;
                return "Failure" === r.ctor ? function (t) {
                    switch (t.ctor) {
                        case"DeliveryError":
                            return "delivery-error";
                        case"MakeError":
                            return "make-error";
                        case"Banned":
                            return "banned";
                        case"CodingStyle":
                            return "coding-style-fail";
                        case"NormFlag":
                            return "norm-fail";
                        case"NoTestPassed":
                            return "no-test-passed";
                        case"MandatoryTestFailed":
                            return "mandatory-test-failed";
                        default:
                            return "crash"
                    }
                }(r._0) : function (t) {
                    switch (t.ctor) {
                        case"Norm":
                            return "norm";
                        case"CoverageMain":
                            return "coverage.main";
                        case"CoverageBranches":
                            return "coverage.branches";
                        case"CoverageLines":
                            return "coverage.lines";
                        case"LintMajor":
                            return "lint.major";
                        case"LintMinor":
                            return "lint.minor";
                        case"LintInfo":
                            return "lint.info";
                        default:
                            return "trace-pool"
                    }
                }(r._0)
            }, l(z["++"], l(bt, xd, {
                ctor: "::",
                _0: Cd,
                _1: {
                    ctor: "::",
                    _0: Ad,
                    _1: {
                        ctor: "::",
                        _0: Od,
                        _1: {
                            ctor: "::",
                            _0: Rd,
                            _1: {
                                ctor: "::",
                                _0: Bd,
                                _1: {
                                    ctor: "::",
                                    _0: Nd,
                                    _1: {ctor: "::", _0: Md, _1: {ctor: "::", _0: Sd, _1: {ctor: "[]"}}}
                                }
                            }
                        }
                    }
                }
            }), l(bt, kd, {
                ctor: "::",
                _0: {ctor: "Norm"},
                _1: {
                    ctor: "::",
                    _0: Pd,
                    _1: {
                        ctor: "::",
                        _0: Fd,
                        _1: {
                            ctor: "::",
                            _0: Id,
                            _1: {
                                ctor: "::",
                                _0: Dd,
                                _1: {
                                    ctor: "::",
                                    _0: qd,
                                    _1: {ctor: "::", _0: Ld, _1: {ctor: "::", _0: Ed, _1: {ctor: "[]"}}}
                                }
                            }
                        }
                    }
                }
            }))), jd = l(cd, Jd, Me), Ud = d(se, wd, l(ge, "type", jd), l(ge, "value", ke), ve(l(ge, "comment", Me))),
            Hd = function () {
                var t = Nt(function (t) {
                    return dd($t(l(ue, Ud, t)))
                });
                return l(cd, function (r) {
                    return er(t(r))
                }, we(ne))
            }(), Wd = m(_e, md, l(ge, "testRunId", od), l(ge, "logins", function (t) {
                return l(ee, function (t) {
                    return s(nd, oe("Expected non-empty list, got []"), ce, function (t) {
                        var r = t;
                        return "[]" === r.ctor ? Z : $(l(hd, r._0, r._1))
                    }(t))
                }, we(t))
            }(Me)), l(ge, "prerequisites", ke), l(ge, "skills", Te(Td)), ve(l(ge, "mark", ke)), l(ge, "mandatoryFailed", xe), l(ge, "externalItems", Hd)),
            zd = p(le, gd, l(ge, "instance", l(ge, "code", Me)), l(ge, "instance", l(ge, "city", Me)), l(ge, "instance", l(ge, "year", xe)), l(ge, "results", we(Wd))),
            Gd = (s(de, bd, l(ge, "project", $s), l(ge, "instances", we(zd))), function (t) {
                var r = t, n = r._0;
                return y.eq(n, 0) ? 0 : 100 * R(n) / R(r._1)
            }), Yd = function (t) {
                return dt(l(yt, function (t) {
                    return t.passed
                }, t))
            }, Vd = Te(Te(xe)), Qd = l(ge, "Counts", Vd), Xd = Te(Te(we(Me))), Zd = l(ge, "Details", Xd), Kd = Me,
            $d = l(zn, function (t) {
                return t.codingStyle
            }, n(function (t, r) {
                return y.update(r, {codingStyle: $(t)})
            })), tp = l(Jn, function (t) {
                return t.externalItems
            }, n(function (t, r) {
                return y.update(r, {externalItems: t})
            })), rp = n(function (t, r) {
                return {leader: t, members: r}
            }), np = s(de, rp, l(ge, "leader", Me), l(ge, "members", we(Me))), ep = _(function (t, r, n, e, o, c, u) {
                return {type_: t, skills: r, externalItems: n, visibility: e, date: o, group_: c, codingStyle: u}
            }), op = n(function (t, r) {
                return m(_e, ep, l(ge, "type", Kd), l(ge, "skills", we(t)), l(ge, "externalItems", Hd), l(ge, "visibility", Me), l(ge, "date", Me), l(ge, "group", np), r)
            }), cp = n(function (t, r) {
                return {name: t, tests: r}
            }), up = n(function (t, r) {
                return {name: t, breakdown: r}
            }), ip = s(de, up, l(ge, "name", Me), l(ge, "breakdown", Td)), _p = l(ge, "BreakdownSkillReport", ip),
            ap = v(ae, i(function (t, r, n, e, o, c) {
                return {name: t, passed: r, crashed: n, skipped: e, mandatory: o, comment: c}
            }), l(ge, "name", Me), l(ge, "passed", Se), l(ge, "crashed", Se), l(ge, "skipped", Se), l(ge, "mandatory", Se), ve(l(ge, "comment", Me))),
            fp = s(de, cp, l(ge, "name", Me), l(ge, "tests", we(ap))), lp = l(ge, "FullSkillReport", fp),
            sp = (u(function (t, r, n, e, o) {
                return {year: t, moduleCode: r, projectSlug: n, testRunType: e, location: o}
            }), he({
                ctor: "::", _0: l(pe, function (t) {
                    return {ctor: "Detailed", _0: t}
                }, lp), _1: {
                    ctor: "::", _0: l(pe, function (t) {
                        return {ctor: "Summary", _0: t}
                    }, _p), _1: {ctor: "[]"}
                }
            })), dp = l(ge, "style", he({
                ctor: "::", _0: l(pe, function (t) {
                    return {ctor: "DeliveryStyleReport", _0: t}
                }, Zd), _1: {
                    ctor: "::", _0: l(pe, function (t) {
                        return {ctor: "GitStyleReport", _0: t}
                    }, Qd), _1: {ctor: "[]"}
                }
            })), pp = n(function (t, r) {
                return {name: t, instances: r}
            }), hp = o(function (t, r, n) {
                return {code: t, city: r, testRunTypes: n}
            }), vp = d(se, hp, l(ge, "code", Me), l(ge, "city", Me), l(ge, "testRunTypes", we(Me))),
            mp = l(pe, wn, we(d(se, o(function (t, r, n) {
                return {ctor: "_Tuple2", _0: t, _1: l(pp, r, n)}
            }), l(ge, "slug", Me), l(ge, "name", Me), l(ge, "instances", we(vp))))),
            gp = l(pe, wn, we(s(de, w(S), l(ge, "code", Me), l(ge, "projects", mp)))),
            bp = (l(pe, wn, we(s(de, w(S), l(ge, "year", xe), l(ge, "modules", gp)))), o(function (t, r, n) {
                return {project: t, results: r, date: n}
            })), yp = d(se, bp, l(ge, "project", $s), l(ge, "results", Wd), l(ge, "date", Me)), Tp = we(yp),
            wp = n(function (t, r) {
                return y.update(t, {callbacks: {ctor: "::", _0: r, _1: t.callbacks}})
            }), kp = (c(function (t, r, n, e) {
                return {state: t, seed: r, config: n, redirectState: e}
            }), c(function (t, r, n, e) {
                return {authorizeUrl: t, redirectUrl: r, renewalRedirectUrl: n, clientId: e}
            }), {ctor: "TokenExpired"}), xp = function (t) {
                return {ctor: "InvalidToken", _0: t}
            }, Sp = function (t) {
                return {ctor: "Renew", _0: t}
            }, Mp = n(function (t, r) {
                return Sp({nonce: r, callbacks: t.callbacks})
            }), Np = n(function (t, r) {
                return Sp(l(wp, t, r))
            }), Bp = function (t) {
                return {ctor: "Check", _0: t}
            }, Rp = n(function (t, r) {
                return Bp({token: t.token, callbacks: {ctor: "::", _0: r, _1: {ctor: "[]"}}})
            }), Op = n(function (t, r) {
                return Bp(l(wp, t, r))
            }), Ap = function (t) {
                return function (t) {
                    return {ctor: "Authenticated", _0: t}
                }({token: t})
            }, Cp = Ap, Ep = function (t) {
                return {ctor: "InitCheck", _0: t}
            }, Lp = function (t) {
                return Ep({localStorageFallback: !0, callbacks: t.callbacks})
            }, qp = function (t) {
                return Ep({localStorageFallback: !1, callbacks: t.callbacks})
            }, Dp = qp, Ip = n(function (t, r) {
                return Ep(l(wp, t, r))
            }), Fp = function (t) {
                return Ep({localStorageFallback: !1, callbacks: t.callbacks})
            }, Pp = function (t) {
                return {ctor: "Init", _0: t}
            }, Jp = function (t) {
                return Pp({nonce: t, callbacks: {ctor: "[]"}})
            }, jp = Jp, Up = n(function (t, r) {
                return Pp(l(wp, t, r))
            }), Hp = {ctor: "TokenReadFromLocation"}, Wp = function (t) {
                return {ctor: "Callback", _0: t}
            }, zp = {ctor: "TokenRenewalTimeout"}, Gp = function (t) {
                return {ctor: "TokenValidated", _0: t}
            }, Yp = function (t) {
                return {ctor: "TokenInput", _0: t}
            }, Vp = (n(function (t, r) {
                return l(je, S, l(Ee, x(r), lu(t)))
            }), X(An), function (t) {
                return l(je, S, Ce(t))
            }), Qp = o(function (t, r, n) {
                return {method: "POST", headers: {ctor: "[]"}, url: t, body: r, expect: n, timeout: Z, withCredentials: !1}
            }), Xp = n(function (t, r) {
                return {method: "GET", headers: {ctor: "[]"}, url: t, body: Bi, expect: r, timeout: Z, withCredentials: !1}
            }), Zp = (n(function (t, r) {
                return function (n) {
                    return s(Qp, t, Ni(r), Mi(n))
                }
            }), function (t) {
                return function (r) {
                    return l(Xp, t, Mi(r))
                }
            }), Kp = n(function (t, r) {
                var n = l(Ri, "Authorization", l(z["++"], "Bearer ", t));
                return y.update(r, {headers: {ctor: "::", _0: n, _1: r.headers}})
            }), $p = o(function (t, r, n) {
                return l(Ei, t, Oi(l(Kp, n, r)))
            }), th = o(function (t, r, n) {
                return Vp(t(l($p, r, n)))
            }), rh = (_(function (t, r, n, e, o, c, u) {
                return {method: t, headers: r, url: n, body: e, expect: o, timeout: c, withCredentials: u}
            }), function (t) {
                var r = t;
                return l(z["++"], xi(r._0), l(z["++"], "=", xi(r._1)))
            }), nh = function (t) {
                return l(z["++"], "/", xi(t))
            }, eh = function (t) {
                var r = Fr(t.options);
                return l(z["++"], t.base, l(z["++"], Or(l(bt, nh, t.segments)), function (t) {
                    var r = Or(l(Bt, "&", l(bt, rh, t)));
                    return y.eq(r, "") ? "" : l(z["++"], "?", r)
                }(r)))
            }, oh = (o(function (t, r, n) {
                return {base: t, segments: r, options: n}
            }), n(function (t, r) {
                return l(ld, function (t) {
                    var n = l(Mr, "=", t);
                    return "::" === n.ctor && "::" === n._1.ctor && "[]" === n._1._1.ctor && y.eq(n._0, r) ? $(n._1._0) : Z
                }, l(Mr, "&", l(Tr, 1, t)))
            })), ch = function (t) {
                return Vp(Yp(function (t) {
                    var r = l(oh, t.hash, "state"), n = l(oh, t.hash, "id_token");
                    if ("Just" === n.ctor) {
                        var e = n._0, o = r;
                        return "Just" === o.ctor ? $({ctor: "_Tuple2", _0: e, _1: o._0}) : $({
                            ctor: "_Tuple2",
                            _0: e,
                            _1: "#"
                        })
                    }
                    return Z
                }(t)))
            }, uh = u(function (t, r, n, e, o) {
                var c = t,
                    u = n ? {ctor: "::", _0: {ctor: "_Tuple2", _0: "prompt", _1: "none"}, _1: {ctor: "[]"}} : {ctor: "[]"};
                return eh({
                    base: r.authorizeUrl,
                    segments: {ctor: "[]"},
                    options: wn(l(z["++"], u, {
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: "response_type", _1: "id_token"},
                        _1: {
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: "client_id", _1: r.clientId},
                            _1: {
                                ctor: "::",
                                _0: {ctor: "_Tuple2", _0: "redirect_uri", _1: e},
                                _1: {
                                    ctor: "::",
                                    _0: {ctor: "_Tuple2", _0: "nonce", _1: Oo(c.nonce)},
                                    _1: {ctor: "::", _0: {ctor: "_Tuple2", _0: "state", _1: o}, _1: {ctor: "[]"}}
                                }
                            }
                        }
                    }))
                })
            }), ih = function (t) {
                var r = t, n = r.redirectState, e = r.config, o = r.state;
                switch (o.ctor) {
                    case"Init":
                        return $(p(uh, o._0, e, !1, e.redirectUrl, n));
                    case"Renew":
                        return $(p(uh, o._0, e, !0, e.renewalRedirectUrl, n));
                    default:
                        return Z
                }
            }, _h = l(ed, Oe, Ce), ah = n(function (t, r) {
                return l(Be, S, l(Ne, function (r) {
                    return Ce(_h(t(rr(r))))
                }, l(Ee, function (r) {
                    return _h(t(er(r)))
                }, r)))
            }), fh = function () {
                var t = {ctor: "_Tuple0"}, r = Rn.nativeBinding, e = Rn.succeed, o = Rn.fail, c = Z, u = $;
                var i = r(function (t) {
                    for (var r = [], n = 0; n < localStorage.length; n++) {
                        var o = localStorage.key(n);
                        r.push(o)
                    }
                    return t(e(nt.fromArray(r)))
                }), _ = r(function (r) {
                    return localStorage.clear(), r(e(t))
                }), a = function () {
                    return r(function (t) {
                        return t(o({ctor: "NoStorage"}))
                    })
                };
                return function (t) {
                    try {
                        var r = window[t], n = "__storage_test__";
                        return r.setItem(n, n), r.removeItem(n), !0
                    } catch (t) {
                        return !1
                    }
                }("localStorage") ? {
                    get: function (t) {
                        return r(function (r) {
                            var n = localStorage.getItem(t);
                            return r(e(null === n ? c : u(n)))
                        })
                    }, set: n(function (n, c) {
                        return r(function (r) {
                            try {
                                return localStorage.setItem(n, c), r(e(t))
                            } catch (t) {
                                return r(o({ctor: "Overflow"}))
                            }
                        })
                    }), remove: function (n) {
                        return r(function (r) {
                            return localStorage.removeItem(n), r(e(t))
                        })
                    }, clear: _, keys: i
                } : {get: a, set: a, remove: a, clear: a, keys: a}
            }(), lh = lh || {};
        lh["&>"] = n(function (t, r) {
            return l(Be, function (t) {
                return r
            }, t)
        });
        var sh = o(function (t, r, n) {
                var e = n;
                if ("Nothing" === e.ctor) return Ce(n);
                return l(lh["&>"], qe(l(bt, function (n) {
                    return l(Fn, t, n._0(r))
                }, e._0.subs)), Ce(n))
            }), dh = Ce(Z), ph = (fh.keys, fh.clear, fh.remove, fh.set), hh = (n(function (t, r) {
                return l(ph, t, l(te, 0, r))
            }), fh.get), vh = Bn.leaf("LocalStorage"), mh = c(function (t, r, n, e) {
                return {key: t, oldValue: r, newValue: n, url: e}
            }), gh = p(le, mh, l(ge, "key", Me), l(ge, "oldValue", Me), l(ge, "newValue", Me), l(ge, "url", Me)),
            bh = o(function (t, r, n) {
                var e = {ctor: "_Tuple2", _0: n, _1: r};
                return "Nothing" === e._0.ctor ? "[]" === e._1.ctor ? Ce(Z) : l(Be, function (t) {
                    return Ce($({subs: r, pid: t}))
                }, su(s(pu, "storage", gh, In(t)))) : "[]" === e._1.ctor ? l(lh["&>"], fu(e._0._0.pid), Ce(Z)) : Ce($({
                    subs: r,
                    pid: e._0._0.pid
                }))
            }), yh = n(function (t, r) {
                var n = l(ie, t, r);
                return "Ok" === n.ctor ? Ce($(n._0)) : Oe(function (t) {
                    return {ctor: "UnexpectedPayload", _0: t}
                }(n._0))
            }), Th = (n(function (t, r) {
                return l(Be, function (r) {
                    var n = r;
                    return "Just" === n.ctor ? l(yh, t, n._0) : Ce(Z)
                }, hh(r))
            }), function (t) {
                return {ctor: "MySub", _0: t}
            }), wh = n(function (t, r) {
                var n = r;
                return Th(function (r) {
                    return t(n._0(r))
                })
            });
        Bn.effectManagers.LocalStorage = {
            pkg: "user/project",
            init: dh,
            onEffects: bh,
            onSelfMsg: sh,
            tag: "sub",
            subMap: wh
        };
        var kh = function (t) {
                return "Renew" === t.state.ctor ? function (t) {
                    return vh(Th(t))
                }(function (t) {
                    return Yp(function (t) {
                        return y.eq(t.key, "argos-elm-openidtoken") ? $({ctor: "_Tuple2", _0: t.newValue, _1: ""}) : Z
                    }(t))
                }) : qn
            }, xh = l(Be, function (t) {
                return function (r) {
                    return _h(l(ir, t, r))
                }
            }({ctor: "TokenNotFound"}), l(Ae, x({ctor: "NoLocalStorage"}), hh("argos-elm-openidtoken"))),
            Sh = function (t) {
                return l(Be, t, Ve)
            }, Mh = n(function (t, r) {
                return On(l(bt, function (r) {
                    return r(t)
                }, r))
            }), Nh = function (t) {
                return function (t) {
                    return Sh(function (r) {
                        return _h(t(r))
                    })
                }(n(function (t, r) {
                    return l(nr, function (r) {
                        return r ? rr(kp) : er(t)
                    }, l(ur, xp, l(Us, r, t)))
                })(t))
            }, Bh = l(Be, Nh, xh), Rh = n(function (t, r) {
                var n = l(co, Eo, vo(t.seed)), e = n._0, o = n._1, c = {
                    authorizeUrl: t.authorizeUrl,
                    redirectUrl: t.redirectUrl,
                    renewalRedirectUrl: t.renewalUrl,
                    clientId: t.clientID
                };
                return l(Cn["!"], {
                    state: Pp({nonce: e, callbacks: {ctor: "[]"}}),
                    seed: o,
                    config: c,
                    redirectState: l(z["++"], r.search, r.hash)
                }, {ctor: "::", _0: ch(r), _1: {ctor: "[]"}})
            }), Oh = n(function (t, r) {
                var e = n(function (t, r) {
                    return r ? l(je, x(Hp), function (t) {
                        l(ed, x("Error"), x("Ok"));
                        return l(ah, x(er({ctor: "_Tuple0"})), l(ph, "argos-elm-openidtoken", t))
                    }(t)) : An
                }), o = function (t) {
                    return l(En, Gp, l(Ue, S, Bh))
                }, c = n(function (t, r) {
                    return l(En, Wp, l(Mh, t, r.callbacks))
                }), u = function (t) {
                    return l(En, Gp, function (t) {
                        return l(Ue, S, Nh(t))
                    }(t))
                }, i = function (t) {
                    var n = l(co, Eo, r.seed), e = n._0, o = n._1;
                    return y.update(r, {state: t(e), seed: o})
                }, _ = function (t) {
                    return y.update(r, {state: t})
                }, a = {ctor: "_Tuple2", _0: r.state, _1: t};
                t:do {
                    if ("_Tuple2" !== a.ctor) break t;
                    switch (a._0.ctor) {
                        case"Init":
                            switch (a._1.ctor) {
                                case"WithToken":
                                    return l(Cn["!"], _(l(Up, a._0._0, a._1._0)), {ctor: "[]"});
                                case"TokenInput":
                                    if ("Just" === a._1._0.ctor) {
                                        if ("_Tuple2" === a._1._0._0.ctor) {
                                            r = _(Lp(a._0._0));
                                            return l(Cn["!"], y.update(r, {redirectState: a._1._0._0._1}), {
                                                ctor: "::",
                                                _0: u(a._1._0._0._0),
                                                _1: {ctor: "[]"}
                                            })
                                        }
                                        break t
                                    }
                                    return l(Cn["!"], _(qp(a._0._0)), {ctor: "::", _0: o(), _1: {ctor: "[]"}});
                                default:
                                    break t
                            }
                        case"InitCheck":
                            switch (a._1.ctor) {
                                case"WithToken":
                                    return l(Cn["!"], _(l(Ip, a._0._0, a._1._0)), {ctor: "[]"});
                                case"TokenValidated":
                                    if ("Ok" === a._1._0.ctor) {
                                        var f = a._1._0._0, s = a._0._0;
                                        return l(Cn["!"], _(Ap(f)), {
                                            ctor: "::",
                                            _0: l(e, f, s.localStorageFallback),
                                            _1: {ctor: "::", _0: l(c, f, s), _1: {ctor: "[]"}}
                                        })
                                    }
                                    var d = a._0._0;
                                    return d.localStorageFallback ? l(Cn["!"], _(Dp(d)), {
                                        ctor: "::",
                                        _0: o(),
                                        _1: {ctor: "[]"}
                                    }) : l(Cn["!"], i(Jp), {ctor: "[]"});
                                default:
                                    break t
                            }
                        case"Authenticated":
                            if ("WithToken" === a._1.ctor) {
                                var p = a._0._0;
                                return l(Cn["!"], _(l(Rp, p, a._1._0)), {ctor: "::", _0: u(p.token), _1: {ctor: "[]"}})
                            }
                            break t;
                        case"Check":
                            switch (a._1.ctor) {
                                case"WithToken":
                                    return l(Cn["!"], _(l(Op, a._0._0, a._1._0)), {ctor: "[]"});
                                case"TokenValidated":
                                    if ("Ok" === a._1._0.ctor) {
                                        var h = a._1._0._0;
                                        return l(Cn["!"], _(Cp(h)), {ctor: "::", _0: l(c, h, a._0._0), _1: {ctor: "[]"}})
                                    }
                                    return l(Cn["!"], i(Mp(a._0._0)), {
                                        ctor: "::",
                                        _0: l(je, S, l(Be, x(Ce(zp)), lu(5e3))),
                                        _1: {ctor: "[]"}
                                    });
                                default:
                                    break t
                            }
                        default:
                            switch (a._1.ctor) {
                                case"WithToken":
                                    return l(Cn["!"], _(l(Np, a._0._0, a._1._0)), {ctor: "[]"});
                                case"TokenInput":
                                    if ("Just" === a._1._0.ctor && "_Tuple2" === a._1._0._0.ctor) {
                                        r = _(Fp(a._0._0));
                                        return l(Cn["!"], y.update(r, {redirectState: a._1._0._0._1}), {
                                            ctor: "::",
                                            _0: u(a._1._0._0._0),
                                            _1: {ctor: "[]"}
                                        })
                                    }
                                    break t;
                                case"TokenRenewalTimeout":
                                    return l(Cn["!"], i(jp), {ctor: "[]"});
                                default:
                                    break t
                            }
                    }
                } while (0);
                return l(Cn["!"], r, {ctor: "[]"})
            }), Ah = c(function (t, r, n, e) {
                for (; ;) {
                    var o = e;
                    if ("[]" === o.ctor) return {ctor: "_Tuple2", _0: r, _1: n};
                    var c = o._1;
                    if (y.eq(o._0._0, t)) t = t, r = {
                        ctor: "::",
                        _0: o._0._1,
                        _1: r
                    }, n = n, e = c; else t = t, r = r, n = {ctor: "::", _0: o._0, _1: n}, e = c
                }
            }), Ch = n(function (t, r) {
                for (; ;) {
                    var n = r;
                    if ("[]" === n.ctor) return t;
                    if ("[]" === n._1.ctor) return {
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: n._0._0, _1: {ctor: "::", _0: n._0._1, _1: {ctor: "[]"}}},
                        _1: t
                    };
                    if ("_Tuple2" === n._1._0.ctor && "[]" === n._1._1.ctor) {
                        var e = n._1._0._1, o = n._0._1, c = n._1._0._0, u = n._0._0;
                        return y.eq(u, c) ? {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: u,
                                _1: {ctor: "::", _0: e, _1: {ctor: "::", _0: o, _1: {ctor: "[]"}}}
                            },
                            _1: t
                        } : {
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: c, _1: {ctor: "::", _0: e, _1: {ctor: "[]"}}},
                            _1: {ctor: "::", _0: {ctor: "_Tuple2", _0: u, _1: {ctor: "::", _0: o, _1: {ctor: "[]"}}}, _1: t}
                        }
                    }
                    var i = n._0._0, _ = d(Ah, i, {ctor: "::", _0: n._0._1, _1: {ctor: "[]"}}, {ctor: "[]"}, n._1);
                    t = {ctor: "::", _0: {ctor: "_Tuple2", _0: i, _1: _._0}, _1: t}, r = _._1
                }
            })({ctor: "[]"}), Eh = function (t) {
                var r = t;
                return s(pi, r._0, l(X, di, r._1._1), r._1._0)
            }, Lh = function (t) {
                return l(pe, function (r) {
                    return l(wt, function (t) {
                        return $t(l(ue, t, r))
                    }, t)
                }, ne)
            }, qh = c(function (t, r, n, e) {
                return s(pi, t, n, l(pe, r, Lh(e)))
            }), Dh = (n(function (t, r) {
                return s(qh, t, r, di)
            }), n(function (t, r) {
                var n = r;
                if ("::" === n._1.ctor && "[]" === n._1._1.ctor) return Eh({ctor: "_Tuple2", _0: n._0, _1: n._1._0});
                var e = n._1;
                return s(pi, n._0, function (t) {
                    for (; ;) {
                        var r = t;
                        if ("::" !== r.ctor) return di;
                        if ("_Tuple2" === r._0.ctor && "Just" === r._0._1.ctor) return r._0._1._0;
                        t = r._1
                    }
                }(e), t(Lh(l(bt, Nn, e))))
            })), Ih = n(function (t, r) {
                var n = r;
                return {ctor: "_Tuple2", _0: n._0, _1: t(n._1)}
            }), Fh = o(function (t, r, e) {
                var o = e;
                return l(Ih, l(k, n(function (t, r) {
                    return {ctor: "::", _0: t, _1: r}
                }), o._1), l(t, r, o._0))
            }), Ph = (o(function (t, r, n) {
                return l(Ih, On, s(st, Fh(t), {ctor: "_Tuple2", _0: n, _1: {ctor: "[]"}}, r))
            }), function (t) {
                return l(je, x(t), Ce(t))
            }), Jh = function (t) {
                return {ctor: "Config", _0: t}
            }, jh = Jh({decoders: {ctor: "[]"}, lift: Z}), Uh = n(function (t, r) {
                var n = r;
                return Jh(y.update(n._0, {lift: $(t)}))
            }), Hh = c(function (t, r, n, e) {
                var o = e._0;
                return Jh(y.update(o, {
                    decoders: {
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: t, _1: {ctor: "_Tuple2", _0: n, _1: r}},
                        _1: o.decoders
                    }
                }))
            }), Wh = l(Ku, "data-elm-mdl-noop", ""), zh = (n(function (t, r) {
                return r ? l(Ku, l(z["++"], "aria-", t), "true") : Wh
            }), n(function (t, r) {
                return l(je, x(r), lu(t))
            })), Gh = function (t) {
                return l(je, x(t), Ce(t))
            }, Yh = i(function (t, r, n, e, o, c) {
                var u = l(e, o, t(c)), i = u._0, _ = u._1;
                return {ctor: "_Tuple2", _0: l(r, c, i), _1: l(En, n, _)}
            }), Vh = (u(function (t, r, n, e, o) {
                return {ctor: "_Tuple2", _0: l(r, o, l(n, e, t(o))), _1: An}
            }), n(function (t, r) {
                var n = r;
                return {ctor: "_Tuple2", _0: n._0, _1: t(n._1)}
            })), Qh = n(function (t, r) {
                var n = r;
                return {ctor: "_Tuple2", _0: t(n._0), _1: n._1}
            }), Xh = function (t) {
                return l(Ku, l(z["++"], "on", t), "this.blur()")
            }, Zh = n(function (t, r) {
                return {ctor: "_Tuple2", _0: r, _1: t}
            }), Kh = Zh(An), $h = o(function (t, r, n) {
                return l(t, r, l(wt, function (t) {
                    return t
                }, n))
            }), tv = u(function (t, r, n, e, c) {
                return Ln(s(Pr, o(function (r, o, c) {
                    return {
                        ctor: "::", _0: l(Dn, function (n) {
                            return e(l(t, r, n))
                        }, n(o)), _1: c
                    }
                }), {ctor: "[]"}, r(c)))
            }), rv = c(function (t, r, n, e) {
                return l(Vh, En(r), l(Qh, $, l(t, n, e)))
            }), nv = a(function (t, r, n, e, o, c, u, i) {
                return l(Qh, tt(l(r, u, i)), s(e, function (t) {
                    return o(l(n, u, t))
                }, c, l(t, u, i)))
            }), ev = (_(function (t, r, n, e, o, c, u) {
                return l(Qh, tt(r(u)), s(e, function (t) {
                    return o(n(t))
                }, c, t(u)))
            }), i(function (t, r, n, e, o, c) {
                return l(r, function (t) {
                    return e(l(n, o, t))
                }, l(t, o, c))
            })), ov = u(function (t, r, n, e, o) {
                return l(r, function (t) {
                    return e(n(t))
                }, t(o))
            }), cv = o(function (t, r, e) {
                var c = o(function (n, e, o) {
                    return l(r, s(vn, n, o, t(e)), e)
                });
                return {
                    ctor: "_Tuple2", _0: n(function (r, n) {
                        return l(X, e, l(Wr, r, t(n)))
                    }), _1: c
                }
            }), uv = function (t) {
                return {ctor: "Dispatch", _0: t}
            }, iv = n(function (t, r) {
                return {ctor: "SelectMsg", _0: t, _1: r}
            }), _v = n(function (t, r) {
                return {ctor: "TabsMsg", _0: t, _1: r}
            }), av = n(function (t, r) {
                return {ctor: "TooltipMsg", _0: t, _1: r}
            }), fv = n(function (t, r) {
                return {ctor: "TogglesMsg", _0: t, _1: r}
            }), lv = function (t) {
                return {ctor: "LayoutMsg", _0: t}
            }, sv = n(function (t, r) {
                return {ctor: "MenuMsg", _0: t, _1: r}
            }), dv = n(function (t, r) {
                return {ctor: "TextfieldMsg", _0: t, _1: r}
            }), pv = n(function (t, r) {
                return {ctor: "ButtonMsg", _0: t, _1: r}
            }), hv = n(function (t, r) {
                return l(z["++"], t.attrs, l(z["++"], {
                    ctor: "::",
                    _0: fi(t.css),
                    _1: {ctor: "::", _0: ri(l(Sr, " ", t.classes)), _1: {ctor: "[]"}}
                }, l(z["++"], r, l(z["++"], t.internal, function (t) {
                    var r = t._0, n = r.lift;
                    return "Just" === n.ctor ? l(bt, Dh(n._0), Ch(r.decoders)) : l(bt, Eh, r.decoders)
                }(t.dispatch)))))
            }), vv = n(function (t, r) {
                var n = t;
                switch (n.ctor) {
                    case"Class":
                        return y.update(r, {classes: {ctor: "::", _0: n._0, _1: r.classes}});
                    case"CSS":
                        return y.update(r, {css: {ctor: "::", _0: n._0, _1: r.css}});
                    case"Attribute":
                        return y.update(r, {attrs: {ctor: "::", _0: n._0, _1: r.attrs}});
                    case"Internal":
                        return y.update(r, {internal: {ctor: "::", _0: n._0, _1: r.internal}});
                    case"Listener":
                        return y.update(r, {dispatch: d(Hh, n._0, n._1, n._2, r.dispatch)});
                    case"Many":
                        return s(st, vv, r, n._0);
                    case"Lift":
                        return y.update(r, {dispatch: l(Uh, n._0, r.dispatch)});
                    case"Set":
                    default:
                        return r
                }
            }), mv = n(function (t, r) {
                var n = t;
                switch (n.ctor) {
                    case"Class":
                        return y.update(r, {classes: {ctor: "::", _0: n._0, _1: r.classes}});
                    case"CSS":
                        return y.update(r, {css: {ctor: "::", _0: n._0, _1: r.css}});
                    case"Attribute":
                        return y.update(r, {attrs: {ctor: "::", _0: n._0, _1: r.attrs}});
                    case"Internal":
                        return y.update(r, {internal: {ctor: "::", _0: n._0, _1: r.internal}});
                    case"Many":
                        return s(st, mv, r, n._0);
                    case"Set":
                        return y.update(r, {config: n._0(r.config)});
                    case"Listener":
                        return y.update(r, {dispatch: d(Hh, n._0, n._1, n._2, r.dispatch)});
                    case"Lift":
                        return y.update(r, {dispatch: l(Uh, n._0, r.dispatch)});
                    default:
                        return r
                }
            }), gv = st(mv), bv = c(function (t, r, n, e) {
                return r(l(hv, l(gv, t, n), e))
            }), yv = i(function (t, r, n, e, o, c) {
                return {classes: t, css: r, attrs: n, internal: e, dispatch: o, config: c}
            }), Tv = function (t) {
                return gv(h(yv, {ctor: "[]"}, {ctor: "[]"}, {ctor: "[]"}, {ctor: "[]"}, jh, t))
            }, wv = l(st, vv, h(yv, {ctor: "[]"}, {ctor: "[]"}, {ctor: "[]"}, {ctor: "[]"}, jh, {ctor: "_Tuple0"})),
            kv = function (t) {
                return {ctor: "Lift", _0: t}
            }, xv = function (t) {
                return kv(function (r) {
                    return l(pe, t, l(pe, uv, r))
                })
            }, Sv = (u(function (t, r, n, e, o) {
                return s(t, n, e, {ctor: "::", _0: xv(r), _1: o})
            }), o(function (t, r, n) {
                return {ctor: "Listener", _0: t, _1: r, _2: n}
            })), Mv = o(function (t, r, n) {
                return s(Sv, t, Z, l(pe, r, ce(n)))
            }), Nv = function (t) {
                return {ctor: "Set", _0: t}
            }, Bv = function (t) {
                return {ctor: "Many", _0: t}
            }, Rv = o(function (t, r, n) {
                return d(bv, y.update(t, {
                    dispatch: function (t) {
                        var r = t;
                        return Jh(y.update(r._0, {decoders: {ctor: "[]"}}))
                    }(t.dispatch), attrs: {ctor: "[]"}, internal: {ctor: "[]"}, config: {ctor: "_Tuple0"}
                }), r, {ctor: "::", _0: Bv(t.config.container), _1: n}, {ctor: "[]"})
            }), Ov = o(function (t, r, n) {
                return d(bv, y.update(t, {
                    classes: {ctor: "[]"},
                    css: {ctor: "[]"},
                    config: {ctor: "_Tuple0"}
                }), r, {ctor: "::", _0: Bv(t.config.input), _1: n}, {ctor: "[]"})
            }), Av = function (t) {
                return {ctor: "Internal", _0: t}
            }, Cv = function (t) {
                return {ctor: "Attribute", _0: t}
            }, Ev = n(function (t, r) {
                return l(Sv, t, $(r))
            }), Lv = function (t) {
                return l(Sv, t, Z)
            }, qv = (n(function (t, r) {
                return l(Lv, t, ce(r))
            })("change"), function (t) {
                return l(Lv, "click", ce(t))
            }), Dv = Cv, Iv = (n(function (t, r) {
                return Cv(l(Ku, l(z["++"], "data-", t), r))
            }), {ctor: "None"}), Fv = n(function (t, r) {
                return t ? r : Iv
            }), Pv = Bv, Jv = n(function (t, r) {
                return function (t) {
                    return {ctor: "CSS", _0: t}
                }({ctor: "_Tuple2", _0: t, _1: r})
            }), jv = Pv({
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {
                    ctor: "::",
                    _0: l(Jv, "align-items", "center"),
                    _1: {ctor: "::", _0: l(Jv, "justify-content", "center"), _1: {ctor: "[]"}}
                }
            }), Uv = function (t) {
                return function (t) {
                    return {ctor: "Class", _0: t}
                }(t)
            }, Hv = o(function (t, r, n) {
                return t(l(hv, wv(r), n))
            }), Wv = (n(function (t, r) {
                return d(Hv, Gu, t, r, {ctor: "[]"})
            }), n(function (t, r) {
                return t(l(hv, wv(r), {ctor: "[]"}))
            })), zv = Wv(ju), Gv = Wv(Wu), Yv = function (t) {
                var r = t;
                return Uv(l(z["++"], "mdl-color-text--", r._0))
            }, Vv = function (t) {
                switch (t.ctor) {
                    case"Indigo":
                        return "indigo";
                    case"Blue":
                        return "blue";
                    case"LightBlue":
                        return "light-blue";
                    case"Cyan":
                        return "cyan";
                    case"Teal":
                        return "teal";
                    case"Green":
                        return "green";
                    case"LightGreen":
                        return "light-green";
                    case"Lime":
                        return "lime";
                    case"Yellow":
                        return "yellow";
                    case"Amber":
                        return "amber";
                    case"Orange":
                        return "orange";
                    case"Brown":
                        return "brown";
                    case"BlueGrey":
                        return "blue-grey";
                    case"Grey":
                        return "grey";
                    case"DeepOrange":
                        return "deep-orange";
                    case"Red":
                        return "red";
                    case"Pink":
                        return "pink";
                    case"Purple":
                        return "purple";
                    default:
                        return "deep-purple"
                }
            }, Qv = (n(function (t, r) {
                var n = Br(function (t) {
                    return y.eq(t, y.chr("-")) ? y.chr("_") : t
                }), e = function () {
                    switch (r.ctor) {
                        case"Grey":
                        case"Brown":
                        case"BlueGrey":
                            return "";
                        default:
                            return l(z["++"], ".", l(z["++"], n(Vv(t)), l(z["++"], "-", n(Vv(r)))))
                    }
                }();
                return l(z["++"], "material", l(z["++"], e, ".min.css"))
            }), {ctor: "DeepPurple"}), Xv = {ctor: "Purple"}, Zv = {ctor: "Pink"}, Kv = {ctor: "Red"},
            $v = {ctor: "DeepOrange"}, tm = {ctor: "Orange"}, rm = {ctor: "Amber"}, nm = {ctor: "Yellow"},
            em = {ctor: "Lime"}, om = {ctor: "LightGreen"}, cm = {ctor: "Green"}, um = {ctor: "Teal"},
            im = {ctor: "Cyan"}, _m = {ctor: "LightBlue"}, am = {ctor: "Blue"}, fm = {ctor: "Indigo"}, lm = (zt({
                ctor: "::",
                _0: fm,
                _1: {
                    ctor: "::",
                    _0: am,
                    _1: {
                        ctor: "::",
                        _0: _m,
                        _1: {
                            ctor: "::",
                            _0: im,
                            _1: {
                                ctor: "::",
                                _0: um,
                                _1: {
                                    ctor: "::",
                                    _0: cm,
                                    _1: {
                                        ctor: "::",
                                        _0: om,
                                        _1: {
                                            ctor: "::",
                                            _0: em,
                                            _1: {
                                                ctor: "::",
                                                _0: nm,
                                                _1: {
                                                    ctor: "::",
                                                    _0: rm,
                                                    _1: {
                                                        ctor: "::",
                                                        _0: tm,
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {ctor: "Brown"},
                                                            _1: {
                                                                ctor: "::",
                                                                _0: {ctor: "BlueGrey"},
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: {ctor: "Grey"},
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: $v,
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: Kv,
                                                                            _1: {
                                                                                ctor: "::",
                                                                                _0: Zv,
                                                                                _1: {
                                                                                    ctor: "::",
                                                                                    _0: Xv,
                                                                                    _1: {
                                                                                        ctor: "::",
                                                                                        _0: Qv,
                                                                                        _1: {ctor: "[]"}
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }), zt({
                ctor: "::",
                _0: fm,
                _1: {
                    ctor: "::",
                    _0: am,
                    _1: {
                        ctor: "::",
                        _0: _m,
                        _1: {
                            ctor: "::",
                            _0: im,
                            _1: {
                                ctor: "::",
                                _0: um,
                                _1: {
                                    ctor: "::",
                                    _0: cm,
                                    _1: {
                                        ctor: "::",
                                        _0: om,
                                        _1: {
                                            ctor: "::",
                                            _0: em,
                                            _1: {
                                                ctor: "::",
                                                _0: nm,
                                                _1: {
                                                    ctor: "::",
                                                    _0: rm,
                                                    _1: {
                                                        ctor: "::",
                                                        _0: tm,
                                                        _1: {
                                                            ctor: "::",
                                                            _0: $v,
                                                            _1: {
                                                                ctor: "::",
                                                                _0: Kv,
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: Zv,
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: Xv,
                                                                        _1: {ctor: "::", _0: Qv, _1: {ctor: "[]"}}
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }), {ctor: "S500"}), sm = (zt({
                ctor: "::",
                _0: {ctor: "S50"},
                _1: {
                    ctor: "::",
                    _0: {ctor: "S100"},
                    _1: {
                        ctor: "::",
                        _0: {ctor: "S200"},
                        _1: {
                            ctor: "::",
                            _0: {ctor: "S300"},
                            _1: {
                                ctor: "::",
                                _0: {ctor: "S400"},
                                _1: {
                                    ctor: "::",
                                    _0: lm,
                                    _1: {
                                        ctor: "::",
                                        _0: {ctor: "S600"},
                                        _1: {
                                            ctor: "::",
                                            _0: {ctor: "S700"},
                                            _1: {
                                                ctor: "::",
                                                _0: {ctor: "S800"},
                                                _1: {
                                                    ctor: "::",
                                                    _0: {ctor: "S900"},
                                                    _1: {
                                                        ctor: "::",
                                                        _0: {ctor: "A100"},
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {ctor: "A200"},
                                                            _1: {
                                                                ctor: "::",
                                                                _0: {ctor: "A400"},
                                                                _1: {ctor: "::", _0: {ctor: "A700"}, _1: {ctor: "[]"}}
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }), function (t) {
                return {ctor: "C", _0: t}
            }), dm = n(function (t, r) {
                return sm(l(z["++"], Vv(t), l(z["++"], "-", function (t) {
                    switch (t.ctor) {
                        case"S50":
                            return "50";
                        case"S100":
                            return "100";
                        case"S200":
                            return "200";
                        case"S300":
                            return "300";
                        case"S400":
                            return "400";
                        case"S500":
                            return "500";
                        case"S600":
                            return "600";
                        case"S700":
                            return "700";
                        case"S800":
                            return "800";
                        case"S900":
                            return "900";
                        case"A100":
                            return "A100";
                        case"A200":
                            return "A200";
                        case"A400":
                            return "A400";
                        default:
                            return "A700"
                    }
                }(r))))
            }), pm = (sm("white"), sm("black")), hm = sm("primary"), vm = sm("primary-dark"),
            mm = (sm("primary-contrast"), sm("accent"), sm("accent-contrast"), o(function (t, r, n) {
                return l(L, t, l(q, n, r))
            })), gm = (Uv("mdl-cell--stretch"), function (t) {
                switch (t.ctor) {
                    case"All":
                        return "";
                    case"Desktop":
                        return "-desktop";
                    case"Tablet":
                        return "-tablet";
                    default:
                        return "-phone"
                }
            }), bm = n(function (t, r) {
                var n = function () {
                    switch (t.ctor) {
                        case"All":
                        case"Desktop":
                            return s(mm, 1, 12, r);
                        case"Tablet":
                            return s(mm, 1, 8, r);
                        default:
                            return s(mm, 1, 4, r)
                    }
                }();
                return Uv(l(z["++"], "mdl-cell--", l(z["++"], M(n), l(z["++"], "-col", gm(t)))))
            }), ym = n(function (t, r) {
                var n = function () {
                    switch (t.ctor) {
                        case"All":
                        case"Desktop":
                            return s(mm, 0, 11, r);
                        case"Tablet":
                            return s(mm, 0, 7, r);
                        default:
                            return s(mm, 0, 3, r)
                    }
                }();
                return Uv(l(z["++"], "mdl-cell--", l(z["++"], M(n), l(z["++"], "-offset", gm(t)))))
            }), Tm = (n(function (t, r) {
                return Uv(l(z["++"], "mdl-cell--order-", l(z["++"], M(s(mm, 1, 12, r)), gm(t))))
            }), n(function (t, r) {
                return l(zv, {ctor: "::", _0: Uv("mdl-grid"), _1: t}, l(bt, function (t) {
                    return t._0
                }, r))
            })), wm = (Uv("mdl-grid--no-spacing"), {ctor: "Phone"}), km = {ctor: "Tablet"}, xm = {ctor: "Desktop"},
            Sm = n(function (t, r) {
                return function (t) {
                    return {ctor: "Cell", _0: t}
                }(l(zv, {ctor: "::", _0: Uv("mdl-cell"), _1: t}, r))
            }),
            Mm = (Uv("mdl-typography--text-uppercase"), Uv("mdl-typography--text-lowercase"), Uv("mdl-typography--text-capitalize"), Uv("mdl-typography--text-justify"), Uv("mdl-typography--text-right")),
            Nm = Uv("mdl-typography--text-left"), Bm = Uv("mdl-typography--text-center"),
            Rm = (Uv("mdl-typography--table-striped"), Uv("mdl-typography--text-nowrap"), function (t) {
                return l(Jv, "opacity", M(t))
            }),
            Om = (Uv("mdl-typography--menu-color-contrast"), Uv("mdl-typography--button-color-contrast"), Uv("mdl-typography--caption-force-preferred-font-color-contrast")),
            Am = (Uv("mdl-typography--body-2-force-preferred-font-color-contrast"), Uv("mdl-typography--body-1-force-preferred-font-color-contrast")),
            Cm = (Uv("mdl-typography--subhead-color-contrast"), Uv("mdl-typography--title-color-contrast")),
            Em = (Uv("mdl-typography--headline-color-contrast"), Uv("mdl-typography--display-4-color-contrast"), Uv("mdl-typography--display-3-color-contrast")),
            Lm = (Uv("mdl-typography--display-2-color-contrast"), Uv("mdl-typography--display-1-color-contrast"), Pv({
                ctor: "::",
                _0: Cm,
                _1: {ctor: "::", _0: l(Jv, "font-weight", "300"), _1: {ctor: "[]"}}
            })), qm = (Pv({
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {ctor: "::", _0: l(Jv, "justify-content", "flex-end"), _1: {ctor: "[]"}}
            }), Pv({
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {ctor: "::", _0: l(Jv, "flex-direction", "column"), _1: {ctor: "[]"}}
            })), Dm = Pv({
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {ctor: "::", _0: l(Jv, "flex-direction", "row"), _1: {ctor: "[]"}}
            }), Im = Pv({
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {ctor: "::", _0: l(Jv, "align-items", "center"), _1: {ctor: "[]"}}
            }), Fm = Pv({
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {ctor: "::", _0: l(Jv, "justify-content", "space-around"), _1: {ctor: "[]"}}
            }), Pm = Pv({
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {
                    ctor: "::",
                    _0: l(Jv, "align-items", "center"),
                    _1: {ctor: "::", _0: l(Jv, "justify-content", "space-between"), _1: {ctor: "[]"}}
                }
            }), Jm = function (t) {
                return y.cmp(t, 25) < 0 ? "red" : y.cmp(t, 75) < 0 ? "orange" : "limegreen"
            }, jm = Yv(pm), Um = Yv(vm), Hm = Yv(hm), Wm = o(function (t, r, n) {
                return Pv({
                    ctor: "::",
                    _0: l(bm, xm, t),
                    _1: {ctor: "::", _0: l(bm, km, r), _1: {ctor: "::", _0: l(bm, wm, n), _1: {ctor: "[]"}}}
                })
            }), zm = s(Wm, 12, 8, 4), Gm = s(Wm, 6, 4, 2), Ym = function (t) {
                return l(zv, {
                    ctor: "::",
                    _0: Uv("mdl-progress"),
                    _1: {ctor: "::", _0: l(Jv, "height", "20px"), _1: {ctor: "[]"}}
                }, t)
            }, Vm = function (t) {
                return l(z["++"], M(l(Df, 1, t)), "%")
            }, Qm = n(function (t, r) {
                var n = l(Jv, "border-radius", "10px"), e = Vm(t), o = Jm(t);
                return {
                    ctor: "::",
                    _0: Ym({
                        ctor: "::",
                        _0: l(zv, {
                            ctor: "::",
                            _0: Uv("bar"),
                            _1: {
                                ctor: "::",
                                _0: l(Jv, "width", e),
                                _1: {
                                    ctor: "::",
                                    _0: n,
                                    _1: {
                                        ctor: "::",
                                        _0: l(Jv, "background-color", o),
                                        _1: {ctor: "::", _0: l(Jv, "z-index", "1"), _1: {ctor: "[]"}}
                                    }
                                }
                            }
                        }, {ctor: "[]"}),
                        _1: {
                            ctor: "::",
                            _0: l(zv, {
                                ctor: "::",
                                _0: Uv("bar"),
                                _1: {
                                    ctor: "::",
                                    _0: l(Jv, "width", "100%"),
                                    _1: {
                                        ctor: "::",
                                        _0: n,
                                        _1: {
                                            ctor: "::",
                                            _0: l(Jv, "background-color", o),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Jv, "opacity", "0.3"),
                                                _1: {ctor: "::", _0: l(Jv, "z-index", "0"), _1: {ctor: "[]"}}
                                            }
                                        }
                                    }
                                }
                            }, {ctor: "[]"}),
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(zv, {
                            ctor: "::",
                            _0: Uv("bar-legend"),
                            _1: {
                                ctor: "::",
                                _0: l(Jv, "text-align", "left"),
                                _1: {
                                    ctor: "::",
                                    _0: l(Jv, "padding-left", "2%"),
                                    _1: {ctor: "::", _0: l(Jv, "white-space", "pre"), _1: {ctor: "[]"}}
                                }
                            }
                        }, {ctor: "::", _0: Eu(l(z["++"], e, l(z["++"], " ", r))), _1: {ctor: "[]"}}),
                        _1: {ctor: "[]"}
                    }
                }
            }), Xm = (o(function (t, r, n) {
                return {name: t, value: r, color: n}
            }), {
                ctor: "::",
                _0: l(M_, {ctor: "[]"}, {
                    ctor: "::",
                    _0: l(N_, {ctor: "[]"}, {
                        ctor: "::",
                        _0: l(B_, {ctor: "::", _0: U_("pieMaskNormal"), _1: {ctor: "[]"}}, {
                            ctor: "::",
                            _0: l(R_, {
                                ctor: "::",
                                _0: Y_("0.5"),
                                _1: {
                                    ctor: "::",
                                    _0: G_("0.5"),
                                    _1: {ctor: "::", _0: j_("0.50"), _1: {ctor: "::", _0: D_("white"), _1: {ctor: "[]"}}}
                                }
                            }, {ctor: "[]"}),
                            _1: {
                                ctor: "::",
                                _0: l(R_, {
                                    ctor: "::",
                                    _0: Y_("0.5"),
                                    _1: {
                                        ctor: "::",
                                        _0: G_("0.5"),
                                        _1: {
                                            ctor: "::",
                                            _0: j_("0.40"),
                                            _1: {ctor: "::", _0: D_("black"), _1: {ctor: "[]"}}
                                        }
                                    }
                                }, {ctor: "[]"}),
                                _1: {ctor: "[]"}
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(B_, {ctor: "::", _0: U_("pieMaskSmall"), _1: {ctor: "[]"}}, {
                                ctor: "::",
                                _0: l(R_, {
                                    ctor: "::",
                                    _0: Y_("0.5"),
                                    _1: {
                                        ctor: "::",
                                        _0: G_("0.5"),
                                        _1: {ctor: "::", _0: j_("0.3"), _1: {ctor: "::", _0: D_("white"), _1: {ctor: "[]"}}}
                                    }
                                }, {ctor: "[]"}),
                                _1: {
                                    ctor: "::",
                                    _0: l(R_, {
                                        ctor: "::",
                                        _0: Y_("0.5"),
                                        _1: {
                                            ctor: "::",
                                            _0: G_("0.5"),
                                            _1: {
                                                ctor: "::",
                                                _0: j_("0.24"),
                                                _1: {ctor: "::", _0: D_("black"), _1: {ctor: "[]"}}
                                            }
                                        }
                                    }, {ctor: "[]"}),
                                    _1: {ctor: "[]"}
                                }
                            }),
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {ctor: "[]"}
                }),
                _1: {ctor: "[]"}
            }), Zm = function (t) {
                return "Normal" === t.ctor ? {
                    ctor: "_Tuple6",
                    _0: .5,
                    _1: "pieMaskNormal",
                    _2: "0.3",
                    _3: "0.1",
                    _4: "0.1",
                    _5: "0.25"
                } : {ctor: "_Tuple6", _0: .3, _1: "pieMaskSmall", _2: "0.18", _3: "0.06", _4: "0.06", _5: "0.15"}
            }, Km = c(function (t, r, n, e) {
                return l(A_, {
                    ctor: "::",
                    _0: F_("0.5"),
                    _1: {
                        ctor: "::",
                        _0: I_("0.5"),
                        _1: {
                            ctor: "::",
                            _0: D_(r),
                            _1: {
                                ctor: "::",
                                _0: C_("middle"),
                                _1: {ctor: "::", _0: q_(n), _1: {ctor: "::", _0: W_(e), _1: {ctor: "[]"}}}
                            }
                        }
                    }
                }, {ctor: "::", _0: k_(t), _1: {ctor: "[]"}})
            }), $m = o(function (t, r, n) {
                var e = Zm(t), o = e._2, c = e._3;
                return d(Km, r, n, o, c)
            }), tg = o(function (t, r, n) {
                var e = Zm(t), o = e._4, c = e._5;
                return d(Km, r, n, o, c)
            }), rg = o(function (t, r, n) {
                var e = 2 * I * (100 - r) / 100, o = Zm(t), c = o._0, u = o._1,
                    i = y.eq(e, 2 * I) ? .5 + c * H(e - .00174533) : .5 + c * H(e),
                    _ = y.eq(e, 2 * I) ? .5 - c * W(e - .00174533) : .5 - c * W(e), a = Jm(r);
                return l(M_, {
                    ctor: "::",
                    _0: D_(a),
                    _1: {
                        ctor: "::",
                        _0: P_("auto"),
                        _1: {ctor: "::", _0: H_("auto"), _1: {ctor: "::", _0: J_("0 0 1 1"), _1: {ctor: "[]"}}}
                    }
                }, {
                    ctor: "::",
                    _0: l(M_, {ctor: "::", _0: L_(l(z["++"], "url(#", l(z["++"], u, ")"))), _1: {ctor: "[]"}}, {
                        ctor: "::",
                        _0: l(R_, {
                            ctor: "::",
                            _0: Y_("0.5"),
                            _1: {ctor: "::", _0: G_("0.5"), _1: {ctor: "::", _0: j_(M(c - .01)), _1: {ctor: "[]"}}}
                        }, {ctor: "[]"}),
                        _1: {
                            ctor: "::",
                            _0: l(O_, {
                                ctor: "::",
                                _0: z_(l(z["++"], "M 0.5 0.5 0.5 ", l(z["++"], M(.5 - c), l(z["++"], " A 0.5 0.5 0 1 1 ", l(z["++"], M(i), l(z["++"], " ", l(z["++"], M(_), " z"))))))),
                                _1: {
                                    ctor: "::",
                                    _0: D_("rgba(255, 255, 255, 0.8)"),
                                    _1: {ctor: "::", _0: E_("none"), _1: {ctor: "[]"}}
                                }
                            }, {ctor: "[]"}),
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: s($m, t, M(r), "grey"),
                        _1: {ctor: "::", _0: s(tg, t, n, "grey"), _1: {ctor: "[]"}}
                    }
                })
            }), ng = {ctor: "Normal"}, eg = function (t) {
                var r = Vc(l(z["++"], M(zc(t)), "-09-01T00:00:00Z")), n = function () {
                    var n = r;
                    return "Ok" === n.ctor && s(yl, Tl, t, n._0) ? zc(t) : zc(t) - 1
                }();
                dl(Wc(t)), Hc(t);
                return n
            }, og = {
                i18n: {
                    dayShort: function (t) {
                        switch (t.ctor) {
                            case"Mon":
                                return "Lun";
                            case"Tue":
                                return "Mar";
                            case"Wed":
                                return "Mer";
                            case"Thu":
                                return "Jeu";
                            case"Fri":
                                return "Ven";
                            case"Sat":
                                return "Sam";
                            default:
                                return "Dim"
                        }
                    }, dayName: function (t) {
                        switch (t.ctor) {
                            case"Mon":
                                return "Lundi";
                            case"Tue":
                                return "Mardi";
                            case"Wed":
                                return "Mercredi";
                            case"Thu":
                                return "Jeudi";
                            case"Fri":
                                return "Vendredi";
                            case"Sat":
                                return "Samedi";
                            default:
                                return "Dimanche"
                        }
                    }, monthShort: function (t) {
                        switch (t.ctor) {
                            case"Jan":
                                return "Jan";
                            case"Feb":
                                return "Fév";
                            case"Mar":
                                return "Mar";
                            case"Apr":
                                return "Avr";
                            case"May":
                                return "Mai";
                            case"Jun":
                                return "Jun";
                            case"Jul":
                                return "Jul";
                            case"Aug":
                                return "Aou";
                            case"Sep":
                                return "Sep";
                            case"Oct":
                                return "Oct";
                            case"Nov":
                                return "Nov";
                            default:
                                return "Déc"
                        }
                    }, monthName: function (t) {
                        switch (t.ctor) {
                            case"Jan":
                                return "Janvier";
                            case"Feb":
                                return "Février";
                            case"Mar":
                                return "Mars";
                            case"Apr":
                                return "Avril";
                            case"May":
                                return "Mai";
                            case"Jun":
                                return "Juin";
                            case"Jul":
                                return "Juillet";
                            case"Aug":
                                return "Août";
                            case"Sep":
                                return "Septembre";
                            case"Oct":
                                return "Octobre";
                            case"Nov":
                                return "Novembre";
                            default:
                                return "Décembre"
                        }
                    }, dayOfMonthWithSuffix: Rl, twelveHourPeriod: Nl
                },
                format: {
                    date: "%d/%m/%Y",
                    longDate: "%A %-d %B %Y",
                    time: "%H:%M",
                    longTime: "%H:%M:%S",
                    dateTime: "%d/%m/%Y %H:%M",
                    firstDayOfWeek: Zc
                }
            }, cg = function (t) {
                return l(tr, "Failed to retrieve the date.", l(or, l(xs, og, og.format.dateTime), Vc(t)))
            }, ug = (l(nd, "-", M), l(nd, "-", function (t) {
                return M(C(t))
            })), ig = (l(nd, "-", qf(1)), n(function (t, r) {
                return {ctor: "_Tuple2", _0: r, _1: t}
            }), o(function (t, r, n) {
                return s(nd, l(Cn["!"], n, {ctor: "[]"}), function (e) {
                    var o = r(e);
                    return {ctor: "_Tuple2", _0: l(t.set, o._0, n), _1: o._1}
                }, t.getOption(n))
            }), o(function (t, r, n) {
                var e = r(t.get(n)), o = e._0, c = e._1;
                return {ctor: "_Tuple2", _0: l(t.set, o, n), _1: c}
            })), _g = c(function (t, r, n, e) {
                var o = n(t(e)), c = o._0, u = o._1;
                return {ctor: "_Tuple2", _0: l(r, c, e), _1: u}
            }), ag = o(function (t, r, n) {
                var e = r(n), o = e._0, c = e._1;
                return {ctor: "_Tuple2", _0: o, _1: l(En, t, c)}
            }), fg = (o(function (t, r, n) {
                return function (e) {
                    return l(ag, n, s(_g, t, r, e))
                }
            }), o(function (t, r, n) {
                var e = t(n), o = e._0, c = e._1, u = r(o), i = u._0, _ = u._1;
                return l(Cn["!"], i, {ctor: "::", _0: c, _1: {ctor: "::", _0: _, _1: {ctor: "[]"}}})
            })), lg = function (t) {
                return l(Cn["!"], t, {ctor: "[]"})
            }, sg = function (t) {
                return function (r) {
                    return lg(t(r))
                }
            }, dg = function (t) {
                return s(lt, fg, lg, t)
            }, pg = n(function (t, r) {
                var n = t.rect, e = function (t) {
                        return l(z["++"], M(E(t)), "px")
                    }, o = l(z["++"], "translate(", l(z["++"], e(t.x), l(z["++"], ", ", l(z["++"], e(t.y), ")")))),
                    c = e(2 * U(n.width * n.width + n.height * n.height) + 2),
                    u = y.eq(r, 0) ? "scale(0.0001, 0.0001)" : "",
                    i = l(z["++"], "translate(-50%, -50%) ", l(z["++"], o, u));
                return {
                    ctor: "::",
                    _0: {ctor: "_Tuple2", _0: "width", _1: c},
                    _1: {
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: "height", _1: c},
                        _1: {
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: "-webkit-transform", _1: i},
                            _1: {
                                ctor: "::",
                                _0: {ctor: "_Tuple2", _0: "-ms-transform", _1: i},
                                _1: {ctor: "::", _0: {ctor: "_Tuple2", _0: "transform", _1: i}, _1: {ctor: "[]"}}
                            }
                        }
                    }
                }
            }), hg = o(function (t, r, n) {
                return {rect: t, x: r, y: n}
            }), vg = (o(function (t, r, n) {
                return {animation: t, metrics: r, ignoringMouseDown: n}
            }), v(ae, i(function (t, r, n, e, o, c) {
                return {rect: t, clientX: r, clientY: n, touchX: e, touchY: o, type_: c}
            }), l(ge, "currentTarget", Yo), ve(l(ge, "clientX", ke)), ve(l(ge, "clientY", ke)), ve(l(be, {
                ctor: "::",
                _0: "touches",
                _1: {ctor: "::", _0: "0", _1: {ctor: "::", _0: "clientX", _1: {ctor: "[]"}}}
            }, ke)), ve(l(be, {
                ctor: "::",
                _0: "touches",
                _1: {ctor: "::", _0: "0", _1: {ctor: "::", _0: "clientY", _1: {ctor: "[]"}}}
            }, ke)), l(ge, "type", Me))), mg = {ctor: "Inert"}, gg = {animation: mg, metrics: Z, ignoringMouseDown: !1},
            bg = function (t) {
                return {ctor: "Frame", _0: t}
            }, yg = n(function (t, r) {
                var n = function () {
                    var t = {ctor: "_Tuple2", _0: r.metrics, _1: r.animation};
                    return "_Tuple2" === t.ctor && "Just" === t._0.ctor ? "Frame" === t._1.ctor ? l(pg, t._0._0, t._1._0) : l(pg, t._0._0, 1) : {ctor: "[]"}
                }();
                return l(Wu, t, {
                    ctor: "::",
                    _0: l(Wu, {
                        ctor: "::",
                        _0: ai({
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: "mdl-ripple", _1: !0},
                            _1: {
                                ctor: "::",
                                _0: {ctor: "_Tuple2", _0: "is-animating", _1: !y.eq(r.animation, bg(0))},
                                _1: {
                                    ctor: "::",
                                    _0: {ctor: "_Tuple2", _0: "is-visible", _1: !y.eq(r.animation, mg)},
                                    _1: {ctor: "[]"}
                                }
                            }
                        }),
                        _1: {ctor: "::", _0: fi(n), _1: {ctor: "[]"}}
                    }, {ctor: "[]"}),
                    _1: {ctor: "[]"}
                })
            }), Tg = {ctor: "Tick"}, wg = n(function (t, r) {
                var e = t;
                switch (e.ctor) {
                    case"Down":
                        var o = e._0;
                        return y.eq(o.type_, "mousedown") && r.ignoringMouseDown ? Kh(y.update(r, {ignoringMouseDown: !1})) : l(Zh, function (t) {
                            return l(zh, 50, t)
                        }(Tg), y.update(r, {
                            animation: bg(0), metrics: function (t) {
                                var r = t.rect, e = n(function (t, n) {
                                    return $({ctor: "_Tuple2", _0: t - r.left, _1: n - r.top})
                                });
                                return l(tt, function (t) {
                                    var n = t;
                                    return s(hg, r, n._0, n._1)
                                }, function () {
                                    var n = {ctor: "_Tuple4", _0: t.clientX, _1: t.clientY, _2: t.touchX, _3: t.touchY};
                                    t:do {
                                        if ("_Tuple4" === n.ctor) {
                                            if ("Just" === n._0.ctor && "Just" === n._1.ctor) return 0 === n._0._0 && 0 === n._1._0 ? $({
                                                ctor: "_Tuple2",
                                                _0: r.width / 2,
                                                _1: r.height / 2
                                            }) : l(e, n._0._0, n._1._0);
                                            if ("Just" === n._2.ctor && "Just" === n._3.ctor) return l(e, n._2._0, n._3._0);
                                            break t
                                        }
                                        break t
                                    } while (0);
                                    return Z
                                }())
                            }(o), ignoringMouseDown: !!y.eq(o.type_, "touchstart") || r.ignoringMouseDown
                        }));
                    case"Up":
                        return Kh(y.update(r, {animation: mg}));
                    default:
                        return y.eq(r.animation, bg(0)) ? Kh(y.update(r, {animation: bg(1)})) : Kh(r)
                }
            }), kg = {ctor: "Up"}, xg = n(function (t, r) {
                return l(Lv, r, ce(t(kg)))
            }), Sg = n(function (t, r) {
                return l(hi, r, ce(t(kg)))
            }), Mg = Sg(S), Ng = function (t) {
                return {ctor: "Down", _0: t}
            }, Bg = n(function (t, r) {
                return l(hi, r, l(pe, function (r) {
                    return t(Ng(r))
                }, vg))
            }), Rg = Bg(S), Og = function (t) {
                return yg(s(k, St, {
                    ctor: "::",
                    _0: Mg("mouseup"),
                    _1: {
                        ctor: "::",
                        _0: Mg("mouseleave"),
                        _1: {
                            ctor: "::",
                            _0: Mg("touchend"),
                            _1: {
                                ctor: "::",
                                _0: Mg("blur"),
                                _1: {
                                    ctor: "::",
                                    _0: Rg("mousedown"),
                                    _1: {ctor: "::", _0: Rg("touchstart"), _1: {ctor: "[]"}}
                                }
                            }
                        }
                    }
                }, t))
            }, Ag = n(function (t, r) {
                return l(Lv, r, l(pe, function (r) {
                    return t(Ng(r))
                }, vg))
            }), Cg = s(cv, function (t) {
                return t.button
            }, n(function (t, r) {
                return y.update(r, {button: t})
            }), gg), Eg = Cg._0, Lg = Cg._1, qg = Uv("mdl-button--icon"), Dg = Uv("mdl-button--fab"), Ig = (Pv({
                ctor: "::",
                _0: Uv("mdl-button--mini-fab"),
                _1: {ctor: "::", _0: Dg, _1: {ctor: "[]"}}
            }), Uv("mdl-button--raised")),
            Fg = (Uv("mdl-button--accent"), Uv("mdl-button--primary"), Uv("mdl-button--colored")),
            Pg = (Nv(function (t) {
                return y.update(t, {disabled: !0})
            }), Nv(function (t) {
                return y.update(t, {ripple: !0})
            })), Jg = function (t) {
                return Nv(function (r) {
                    return y.update(r, {link: $(t)})
                })
            }, jg = {ripple: !1, link: Z, disabled: !1}, Ug = c(function (t, r, n, e) {
                var o = Pv({
                    ctor: "::",
                    _0: l(Ag, t, "mousedown"),
                    _1: {
                        ctor: "::",
                        _0: l(Ag, t, "touchstart"),
                        _1: {
                            ctor: "::",
                            _0: l(xg, t, "touchcancel"),
                            _1: {
                                ctor: "::",
                                _0: l(xg, t, "mouseup"),
                                _1: {
                                    ctor: "::",
                                    _0: l(xg, t, "blur"),
                                    _1: {ctor: "::", _0: l(xg, t, "mouseleave"), _1: {ctor: "[]"}}
                                }
                            }
                        }
                    }
                }), c = l(Tv, jg, n), u = c, i = c.config;
                return p(bv, u, y.eq(i.link, Z) ? Xu : Uu, {
                    ctor: "::",
                    _0: Uv("mdl-button"),
                    _1: {
                        ctor: "::",
                        _0: Uv("mdl-js-button"),
                        _1: {
                            ctor: "::",
                            _0: l(Fv, u.config.ripple, Uv("mdl-js-ripple-effect")),
                            _1: {
                                ctor: "::",
                                _0: l(Jv, "box-sizing", "border-box"),
                                _1: {
                                    ctor: "::",
                                    _0: o,
                                    _1: {
                                        ctor: "::",
                                        _0: l(Fv, !y.eq(i.link, Z) && !i.disabled, Av(ci(l(X, "", i.link)))),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Fv, i.disabled, Av(_i(!0))),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Fv, i.disabled, Uv("mdl-button--disabled")),
                                                _1: {ctor: "[]"}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    ctor: "::",
                    _0: Xh("mouseup"),
                    _1: {ctor: "::", _0: Xh("mouseleave"), _1: {ctor: "::", _0: Xh("touchend"), _1: {ctor: "[]"}}}
                }, i.ripple ? Mt({
                    ctor: "::",
                    _0: e,
                    _1: {
                        ctor: "::",
                        _0: {
                            ctor: "::",
                            _0: l(Cu, t, l(yg, {ctor: "::", _0: ri("mdl-button__ripple-container"), _1: {ctor: "[]"}}, r)),
                            _1: {ctor: "[]"}
                        },
                        _1: {ctor: "[]"}
                    }
                }) : e)
            }), Hg = s(ev, Eg, Ug, pv), Wg = d(nv, Eg, Lg, pv, rv(function (t) {
                return wg(t)
            })), zg = (o(function (t, r, n) {
                return {ripple: t, link: r, disabled: n}
            }), n(function (t, r) {
                return s(Wv, Hu, {ctor: "::", _0: Uv("material-icons"), _1: r}, {ctor: "::", _0: Eu(t), _1: {ctor: "[]"}})
            })), Gg = function (t) {
                return l(zg, t, {ctor: "[]"})
            }, Yg = (l(Jv, "font-size", "48px"), l(Jv, "font-size", "36px"), l(Jv, "font-size", "24px")),
            Vg = (l(Jv, "font-size", "18px"), o(function (t, r, e) {
                return s(k, n(function (t, r) {
                    return l(Cn["!"], t, r)
                }), {ctor: "[]"}, function () {
                    var t = r;
                    switch (t.ctor) {
                        case"Input":
                            var n = !y.eq(t._0, "");
                            return y.eq(n, e.isDirty) ? Z : $(y.update(e, {isDirty: n}));
                        case"Blur":
                            return $(y.update(e, {isFocused: !1}));
                        case"Focus":
                            return $(y.update(e, {isFocused: !0}));
                        default:
                            return $(e)
                    }
                }())
            })), Qg = {isFocused: !1, isDirty: !1}, Xg = s(cv, function (t) {
                return t.textfield
            }, n(function (t, r) {
                return y.update(r, {textfield: t})
            }), Qg), Zg = Xg._0, Kg = Xg._1, $g = d(nv, Zg, Kg, dv, Vg), tb = Nv(function (t) {
                return y.update(t, {disabled: !0})
            }), rb = Dv(function (t) {
                return l(ui, "autofocus", t)
            }(!0)), nb = Nv(function (t) {
                return y.update(t, {labelFloat: !0})
            }), eb = (n(function (t, r) {
                return {isFocused: t, isDirty: r}
            }), {ctor: "Email"}), ob = (Nv(function (t) {
                return y.update(t, {kind: eb})
            }), {ctor: "Password"}), cb = (Nv(function (t) {
                return y.update(t, {kind: ob})
            }), {ctor: "Textarea"}), ub = (Nv(function (t) {
                return y.update(t, {kind: cb})
            }), {ctor: "Text"}), ib = {
                labelText: Z,
                labelFloat: !1,
                error: Z,
                value: Z,
                defaultValue: Z,
                disabled: !1,
                kind: ub,
                expandable: Z,
                expandableIcon: "search",
                input: {ctor: "[]"},
                container: {ctor: "[]"},
                maxRows: Z
            }, _b = (Nv(function (t) {
                return y.update(t, {kind: ub})
            }), {ctor: "NoOp"}), ab = {ctor: "Focus"}, fb = {ctor: "Blur"}, lb = c(function (t, r, e, o) {
                var c = l(Tv, ib, e), u = c, i = c.config, _ = function () {
                        var t = i.expandable;
                        return "Nothing" === t.ctor ? {ctor: "[]"} : {
                            ctor: "::", _0: function (t) {
                                return l(ti, "htmlFor", t)
                            }(t._0), _1: {ctor: "[]"}
                        }
                    }(), a = function () {
                        var t = i.expandable;
                        return "Nothing" === t.ctor ? Iv : Av(ni(t._0))
                    }(),
                    f = l(Fv, y.eq(i.kind, cb) && !y.eq(i.maxRows, Z), s(Ev, "keydown", y.update(di, {preventDefault: !0}), l(ee, function (r) {
                        var n = r, e = dt(l(Mr, "\n", n._1));
                        return y.cmp(e, l(X, 0, i.maxRows)) > -1 && y.eq(n._0, 13) ? ce(t(_b)) : oe("")
                    }, s(de, n(function (t, r) {
                        return {ctor: "_Tuple2", _0: t, _1: r}
                    }), li, si)))), p = "Nothing" === i.expandable.ctor ? S : function (t) {
                        return {
                            ctor: "::",
                            _0: d(Hv, Vu, {
                                ctor: "::",
                                _0: Uv("mdl-button"),
                                _1: {
                                    ctor: "::",
                                    _0: Uv("mdl-js-button"),
                                    _1: {ctor: "::", _0: Uv("mdl-button--icon"), _1: {ctor: "[]"}}
                                }
                            }, _, {ctor: "::", _0: Gg(i.expandableIcon), _1: {ctor: "[]"}}),
                            _1: {
                                ctor: "::",
                                _0: s(Wv, ju, {ctor: "::", _0: Uv("mdl-textfield__expandable-holder"), _1: {ctor: "[]"}}, t),
                                _1: {ctor: "[]"}
                            }
                        }
                    };
                return d(Rv, u, ju, {
                    ctor: "::",
                    _0: Uv("mdl-textfield"),
                    _1: {
                        ctor: "::",
                        _0: Uv("mdl-js-textfield"),
                        _1: {
                            ctor: "::",
                            _0: Uv("is-upgraded"),
                            _1: {
                                ctor: "::",
                                _0: s(Mv, "focus", t, ab),
                                _1: {
                                    ctor: "::",
                                    _0: s(Mv, "blur", t, fb),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Fv, i.labelFloat, Uv("mdl-textfield--floating-label")),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Fv, !y.eq(i.error, Z), Uv("is-invalid")),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Fv, function () {
                                                    var t = i.value;
                                                    return "Just" === t.ctor ? "" !== t._0 : r.isDirty
                                                }(), Uv("is-dirty")),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(Fv, r.isFocused && !i.disabled, Uv("is-focused")),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: l(Fv, i.disabled, Uv("is-disabled")),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: l(Fv, !y.eq(i.expandable, Z), Uv("mdl-textfield--expandable")),
                                                            _1: {ctor: "::", _0: f, _1: {ctor: "[]"}}
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, p({
                    ctor: "::",
                    _0: d(Ov, u, y.eq(i.kind, cb) ? Zu : Qu, {
                        ctor: "::",
                        _0: Uv("mdl-textfield__input"),
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "outline", "none"),
                            _1: {
                                ctor: "::",
                                _0: s(Mv, "focus", t, ab),
                                _1: {
                                    ctor: "::", _0: s(Mv, "blur", t, fb), _1: {
                                        ctor: "::",
                                        _0: function () {
                                            switch (i.kind.ctor) {
                                                case"Text":
                                                    return Av(oi("text"));
                                                case"Password":
                                                    return Av(oi("password"));
                                                case"Email":
                                                    return Av(oi("email"));
                                                default:
                                                    return Iv
                                            }
                                        }(),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Fv, i.disabled, Av(_i(!0))),
                                            _1: {
                                                ctor: "::", _0: a, _1: {
                                                    ctor: "::", _0: function (t) {
                                                        return l(Lv, "input", l(pe, t, si))
                                                    }(function (r) {
                                                        return t(function (t) {
                                                            return {ctor: "Input", _0: t}
                                                        }(r))
                                                    }), _1: {
                                                        ctor: "::", _0: l(Fv, !y.eq(i.value, Z), Av(function (t) {
                                                            return l(ti, "value", t)
                                                        }(l(X, "", i.value)))), _1: {
                                                            ctor: "::", _0: function () {
                                                                var t = i.defaultValue;
                                                                return "Nothing" === t.ctor ? Iv : Av(function (t) {
                                                                    return l(ti, "defaultValue", t)
                                                                }(t._0))
                                                            }(), _1: {ctor: "[]"}
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, {ctor: "[]"}),
                    _1: {
                        ctor: "::",
                        _0: l(Vu, l(z["++"], {
                            ctor: "::",
                            _0: ri("mdl-textfield__label"),
                            _1: {ctor: "[]"}
                        }, _), function () {
                            var t = i.labelText;
                            return "Just" === t.ctor ? {ctor: "::", _0: Eu(t._0), _1: {ctor: "[]"}} : {ctor: "[]"}
                        }()),
                        _1: {
                            ctor: "::", _0: l(X, l(ju, {ctor: "[]"}, {ctor: "[]"}), l(tt, function (t) {
                                return l(Wu, {ctor: "::", _0: ri("mdl-textfield__error"), _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: Eu(t),
                                    _1: {ctor: "[]"}
                                })
                            }, i.error)), _1: {ctor: "[]"}
                        }
                    }
                }))
            }), sb = (c(function (t, r, n, e) {
                return v(ev, Zg, lb, dv, t, r, n, {ctor: "::", _0: xv(t), _1: e})
            }), {offsetTop: 0, offsetLeft: 0, offsetHeight: 0, bounds: {top: 0, left: 0, width: 0, height: 0}}),
            db = {button: sb, menu: sb, container: sb, offsetTops: {ctor: "[]"}, offsetHeights: {ctor: "[]"}},
            pb = u(function (t, r, n, e, o) {
                return {button: t, menu: r, container: n, offsetTops: e, offsetHeights: o}
            }), hb = c(function (t, r, n, e) {
                return {offsetTop: t, offsetLeft: r, offsetHeight: n, bounds: e}
            }), vb = p(le, hb, Io, Fo, Po, Yo),
            mb = (h(fe, pb, vb, Wo(l(Uo, 1, vb)), Wo(vb), Wo(l(Uo, 1, jo(Io))), Wo(l(Uo, 1, jo(Po)))), Nv(function (t) {
                return y.update(t, {selected: !0})
            })), gb = (Nv(function (t) {
                return y.update(t, {ripple: !0})
            }), Nv(function (t) {
                return y.update(t, {divider: !0})
            }), Nv(function (t) {
                return y.update(t, {enabled: !1})
            }), {onSelect: Z, enabled: !0, divider: !1, ripple: !1, options: {ctor: "[]"}, selected: !1}),
            bb = n(function (t, r) {
                return {html: r, options: t}
            }), yb = (n(function (t, r) {
                return {html: t, options: r}
            }), i(function (t, r, n, e, o, c) {
                return {onSelect: t, enabled: r, divider: n, ripple: e, options: o, selected: c}
            }), function (t) {
                return {ctor: "Ripple", _0: t}
            }), Tb = function (t) {
                return {ctor: "Select", _0: t}
            }, wb = u(function (t, r, e, o, c) {
                var u = function (r) {
                        return t(yb(r))
                    }, i = l(X, gg, l(Wr, e, r.ripples)), _ = o.html, a = o.options, f = l(Tv, gb, l(z["++"], c, a)), s = f,
                    d = f.config, h = d.enabled && !y.eq(d.onSelect, Z), v = d.ripple && h;
                return l(n(function (t, r) {
                    return {ctor: "_Tuple2", _0: t, _1: r}
                }), M(e), p(bv, s, Ju, {
                    ctor: "::",
                    _0: Uv("mdl-menu__item"),
                    _1: {
                        ctor: "::",
                        _0: l(Fv, d.ripple, Uv("mdl-js-ripple-effect")),
                        _1: {
                            ctor: "::",
                            _0: l(Fv, d.divider, Uv("mdl-menu__item--full-bleed-divider")),
                            _1: {
                                ctor: "::",
                                _0: l(Fv, d.selected, Uv("mdl-menu__item--selected")),
                                _1: {
                                    ctor: "::",
                                    _0: l(Jv, "display", "flex"),
                                    _1: {ctor: "::", _0: l(Jv, "align-items", "center"), _1: {ctor: "[]"}}
                                }
                            }
                        }
                    }
                }, l(z["++"], l(wt, S, {
                    ctor: "::",
                    _0: h ? $(vi(t(Tb(s.config.onSelect)))) : Z,
                    _1: {
                        ctor: "::",
                        _0: s.config.enabled ? Z : $(l(Ku, "disabled", "disabled")),
                        _1: {ctor: "::", _0: $(l($u, "tabIndex", Kn(-1))), _1: {ctor: "[]"}}
                    }
                }), v ? {
                    ctor: "::",
                    _0: l(Bg, u, "mousedown"),
                    _1: {
                        ctor: "::",
                        _0: l(Bg, u, "touchstart"),
                        _1: {
                            ctor: "::",
                            _0: l(Sg, u, "mouseup"),
                            _1: {
                                ctor: "::",
                                _0: l(Sg, u, "mouseleave"),
                                _1: {
                                    ctor: "::",
                                    _0: l(Sg, u, "touchend"),
                                    _1: {ctor: "::", _0: l(Sg, u, "blur"), _1: {ctor: "[]"}}
                                }
                            }
                        }
                    }
                } : {ctor: "[]"}), v ? l(n(function (t, r) {
                    return l(z["++"], t, r)
                }), _, {
                    ctor: "::",
                    _0: l(Cu, u, l(yg, {ctor: "::", _0: ri("mdl-menu__item-ripple-container"), _1: {ctor: "[]"}}, i)),
                    _1: {ctor: "[]"}
                }) : _))
            }), kb = function (t) {
                return s(k, n(function (t, r) {
                    return l(z["++"], t, r)
                }), "px", M(t))
            }, xb = c(function (t, r, n, e) {
                return function (t) {
                    return l(z["++"], "rect(", l(z["++"], t, ")"))
                }(l(Sr, " ", l(bt, kb, {
                    ctor: "::",
                    _0: t,
                    _1: {ctor: "::", _0: r, _1: {ctor: "::", _0: n, _1: {ctor: "::", _0: e, _1: {ctor: "[]"}}}}
                })))
            }), Sb = n(function (t, r) {
                return y.eq(t.index, Z) ? r : t.index
            }), Mb = n(function (t, r) {
                switch (t.ctor) {
                    case"BottomLeft":
                        return {
                            top: $(r.button.offsetTop + r.button.offsetHeight),
                            left: $(r.menu.offsetLeft),
                            bottom: Z,
                            right: Z
                        };
                    case"BottomRight":
                        return {
                            top: $(r.button.offsetTop + r.button.offsetHeight), left: Z, bottom: Z, right: function () {
                                var t = function (t) {
                                    return t.bounds.left + t.bounds.width
                                };
                                return $(t(r.container) - t(r.menu))
                            }()
                        };
                    case"TopLeft":
                        return {
                            top: Z, left: $(r.menu.offsetLeft), bottom: function () {
                                var t = r.container.bounds.top + r.container.bounds.height;
                                return $(t - r.button.bounds.top)
                            }(), right: Z
                        };
                    case"TopRight":
                        return {
                            top: Z, left: Z, bottom: function () {
                                var t = r.container.bounds.top + r.container.bounds.height;
                                return $(t - r.button.bounds.top)
                            }(), right: function () {
                                var t = function (t) {
                                    return t.bounds.left + t.bounds.width
                                };
                                return $(t(r.container) - t(r.menu))
                            }()
                        };
                    case"Over":
                        return {top: $(0), left: $(r.button.bounds.width - r.menu.bounds.width), bottom: Z, right: Z};
                    default:
                        return {top: $(r.button.bounds.height + 20), left: $(0), bottom: Z, right: $(0)}
                }
            }), Nb = {ripples: rn, open: !1, geometry: Z, index: Z}, Bb = s(cv, function (t) {
                return t.menu
            }, n(function (t, r) {
                return y.update(r, {menu: t})
            }), Nb), Rb = Bb._0, Ob = Bb._1, Ab = .3 * .8, Cb = (c(function (t, r, n, e) {
                return {ripples: t, open: r, geometry: n, index: e}
            }), o(function (t, r, n) {
                return {alignment: t, index: r, listeners: n}
            }), c(function (t, r, n, e) {
                return {ctor: "Key", _0: t, _1: r, _2: n, _3: e}
            })), Eb = n(function (t, r) {
                return {ctor: "Click", _0: t, _1: r}
            }), Lb = {ctor: "Close"}, qb = n(function (t, r) {
                return {ctor: "ItemMsg", _0: t, _1: r}
            }), Db = function (t) {
                return {ctor: "Open", _0: t}
            }, Ib = o(function (t, r, e) {
                t:for (; ;) {
                    var o = r;
                    switch (o.ctor) {
                        case"Open":
                            return l(Cn["!"], y.update(e, {open: !0, geometry: $(o._0), index: Z}), {ctor: "[]"});
                        case"Close":
                            return l(Cn["!"], y.update(e, {open: !1, geometry: Z, index: Z}), {ctor: "[]"});
                        case"ItemMsg":
                            if ("Select" === o._1.ctor) return l(Cn["!"], y.update(e, {index: $(o._0)}), l(wt, S, {
                                ctor: "::",
                                _0: $(l(zh, 150, t(Lb))),
                                _1: {ctor: "::", _0: l(tt, Gh, o._1._0), _1: {ctor: "[]"}}
                            }));
                            var c = o._0, u = l(wg, o._1._0, l(X, gg, l(Wr, c, e.ripples))), i = u._0, _ = u._1;
                            return l(Cn["!"], y.update(e, {ripples: s(vn, c, i, e.ripples)}), {
                                ctor: "::",
                                _0: l(En, function (r) {
                                    return t(l(qb, c, yb(r)))
                                }, _),
                                _1: {ctor: "[]"}
                            });
                        case"Click":
                            var a = l(X, db, e.geometry), f = a.container.bounds, p = (a.button.bounds, n(function (t, r) {
                                var n = t, e = n.y, o = n.x, c = r, u = c.top, i = c.left;
                                return y.cmp(i, R(o)) < 1 && y.cmp(R(o), i + c.width) < 1 && y.cmp(u, R(e)) < 1 && y.cmp(R(e), u + c.height) < 1
                            }));
                            if (e.open && !l(p, o._1, f)) {
                                t = t, r = Lb, e = e;
                                continue t
                            }
                            return l(Cn["!"], e, {ctor: "[]"});
                        default:
                            var h = o._1, v = o._3, m = o._0;
                            switch (o._2) {
                                case 9:
                                    t = t, r = Lb, e = e;
                                    continue t;
                                case 13:
                                    if (e.open) {
                                        var g = m;
                                        if ("Just" === g.ctor) {
                                            var b = g._0, T = (_ = l(K, function (t) {
                                                return function (t) {
                                                    return t.onSelect
                                                }(t.config)
                                            }, mt(l(ct, b, h))), t), w = l(qb, b, Tb(_));
                                            t = T, r = w, e = e;
                                            continue t
                                        }
                                        t = t, r = Lb, e = e;
                                        continue t
                                    }
                                    var x = t, M = Db(v);
                                    t = x, r = M, e = e;
                                    continue t;
                                case 27:
                                    t = t, r = Lb, e = e;
                                    continue t;
                                case 32:
                                    var N = t, B = d(Cb, m, h, 13, v);
                                    t = N, r = B, e = e;
                                    continue t;
                                case 40:
                                    var O = dt(h), A = l(It, n(function (t, r) {
                                        return {ctor: "_Tuple2", _0: t, _1: r}
                                    }), h), C = l(X, -1, m);
                                    return s(k, n(function (t, r) {
                                        return l(Cn["!"], t, r)
                                    }), {ctor: "[]"}, l(X, e, l(tt, function (t) {
                                        return function (t) {
                                            return y.update(e, {index: $(t)})
                                        }(Nn(t))
                                    }, mt(l(yt, function (t) {
                                        return function (t) {
                                            return t.enabled
                                        }(Mn(t).config)
                                    }, l(ct, 1 + C, l(z["++"], A, A)))))));
                                case 38:
                                    O = dt(h), A = l(It, n(function (t, r) {
                                        return {ctor: "_Tuple2", _0: t, _1: r}
                                    }), h), C = l(X, 0, m);
                                    return Kh(l(X, e, l(tt, function (t) {
                                        return function (t) {
                                            return y.update(e, {index: $(t)})
                                        }(Nn(t))
                                    }, mt(l(yt, function (t) {
                                        return function (t) {
                                            return t.enabled
                                        }(Mn(t).config)
                                    }, l(ct, O - C, kt(l(z["++"], A, A))))))));
                                default:
                                    return l(Cn["!"], e, {ctor: "[]"})
                            }
                    }
                }
            }), Fb = (c(function (t, r, n, e) {
                return l(Qh, function (t) {
                    return $(s(Ob, n, e, t))
                }, s(Ib, t, r, l(Rb, n, e)))
            }), {ctor: "Below"}), Pb = Nv(function (t) {
                return y.update(t, {alignment: Fb})
            }), Jb = n(function (t, r) {
                var n = l(Mb, t, r), e = function (t) {
                    return l(X, "auto", l(tt, kb, t))
                };
                return Pv({
                    ctor: "::",
                    _0: l(Jv, "top", e(n.top)),
                    _1: {
                        ctor: "::",
                        _0: l(Jv, "bottom", e(n.bottom)),
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "left", e(n.left)),
                            _1: {
                                ctor: "::",
                                _0: l(Jv, "right", e(n.right)),
                                _1: {
                                    ctor: "::",
                                    _0: l(Jv, "width", y.eq(t, Fb) ? "100%" : kb(r.menu.bounds.width)),
                                    _1: {ctor: "::", _0: l(Jv, "height", kb(r.menu.bounds.height)), _1: {ctor: "[]"}}
                                }
                            }
                        }
                    }
                })
            }), jb = o(function (t, r, n) {
                var e = n.menu.bounds.height, o = n.menu.bounds.width;
                return l(Jv, "clip", function () {
                    if (t.open) return y.eq(r, Fb) ? d(xb, 0, n.button.bounds.width, e, 0) : d(xb, 0, o, e, 0);
                    switch (r.ctor) {
                        case"BottomRight":
                            return d(xb, 0, o, 0, o);
                        case"TopLeft":
                            return d(xb, e, 0, e, 0);
                        case"TopRight":
                            return d(xb, e, o, e, o);
                        default:
                            return ""
                    }
                }())
            }), Ub = {ctor: "Over"}, Hb = Nv(function (t) {
                return y.update(t, {alignment: Ub})
            }), Wb = {ctor: "TopRight"}, zb = Nv(function (t) {
                return y.update(t, {alignment: Wb})
            }), Gb = {ctor: "TopLeft"}, Yb = Nv(function (t) {
                return y.update(t, {alignment: Gb})
            }), Vb = c(function (t, r, n, e) {
                var o = y.eq(t, Gb) || y.eq(t, Wb) ? (r - n - e) / r * Ab : n / r * Ab;
                return l(Jv, "transition-delay", l(z["++"], M(o), "s"))
            }), Qb = {ctor: "BottomRight"}, Xb = Nv(function (t) {
                return y.update(t, {alignment: Qb})
            }), Zb = {ctor: "BottomLeft"}, Kb = {alignment: Zb, index: Z, listeners: {ctor: "[]"}},
            $b = c(function (t, r, e, c) {
                l(bt, function (t) {
                    return l(Tv, gb, t.options)
                }, c), dt(c);
                var u = l(X, db, r.geometry), i = u.menu.bounds, _ = l(Tv, Kb, e), a = _.config,
                    f = (l(Mb, a.alignment, u), l(Sb, r, a.index)), h = function () {
                        switch (a.alignment.ctor) {
                            case"BottomLeft":
                                return Uv("mdl-menu--bottom-left");
                            case"BottomRight":
                                return Uv("mdl-menu--bottom-right");
                            case"TopLeft":
                                return Uv("mdl-menu--top-left");
                            case"TopRight":
                                return Uv("mdl-menu--top-right");
                            case"Over":
                                return Uv("mdl-menu--over");
                            default:
                                return Uv("mdl-menu--below")
                        }
                    }();
                return s(Wv, ju, {
                    ctor: "::",
                    _0: Uv("mdl-menu__container"),
                    _1: {
                        ctor: "::",
                        _0: Uv("is-upgraded"),
                        _1: {
                            ctor: "::",
                            _0: l(Fv, r.open, Uv("is-visible")),
                            _1: {ctor: "::", _0: l(Fv, r.open, l(Jb, a.alignment, u)), _1: {ctor: "[]"}}
                        }
                    }
                }, {
                    ctor: "::",
                    _0: s(Wv, ju, {
                        ctor: "::",
                        _0: Uv("mdl-menu__outline"),
                        _1: {
                            ctor: "::",
                            _0: h,
                            _1: {
                                ctor: "::",
                                _0: l(Fv, r.open && !y.eq(a.alignment, Fb), l(Jv, "width", kb(i.width))),
                                _1: {ctor: "::", _0: l(Fv, r.open, l(Jv, "height", kb(i.height))), _1: {ctor: "[]"}}
                            }
                        }
                    }, {ctor: "[]"}),
                    _1: {
                        ctor: "::",
                        _0: s(Wv, gi, {
                            ctor: "::",
                            _0: Uv("mdl-menu"),
                            _1: {
                                ctor: "::",
                                _0: Uv("mdl-js-menu"),
                                _1: {
                                    ctor: "::",
                                    _0: s(jb, r, a.alignment, u),
                                    _1: {ctor: "::", _0: h, _1: {ctor: "[]"}}
                                }
                            }
                        }, function () {
                            var e = s(at, n(function (t, r) {
                                return d(Vb, a.alignment, u.menu.bounds.height, t, r)
                            }), u.offsetTops, u.offsetHeights), i = o(function (n, e, o) {
                                return p(wb, function (r) {
                                    return t(l(qb, n, r))
                                }, r, n, e, {ctor: "::", _0: l(Fv, y.eq($(n), f), mb), _1: o})
                            });
                            return r.open ? l(It, n(function (t, r) {
                                var n = r;
                                return s(i, t, n._0, {ctor: "::", _0: n._1, _1: {ctor: "[]"}})
                            }), s(at, n(function (t, r) {
                                return {ctor: "_Tuple2", _0: t, _1: r}
                            }), c, e)) : l(It, n(function (t, r) {
                                return s(i, t, r, {ctor: "[]"})
                            }), c)
                        }()),
                        _1: {ctor: "[]"}
                    }
                })
            }), ty = (s(ev, Rb, $b, sv), Nv(function (t) {
                return y.update(t, {alignment: Zb})
            })), ry = function (t) {
                return s(k, n(function (t, r) {
                    return l(z["++"], t, r)
                }), "px", M(t))
            }, ny = (c(function (t, r, n, e) {
                return function (t) {
                    return l(z["++"], "rect(", l(z["++"], t, ")"))
                }(l(Sr, " ", l(bt, ry, {
                    ctor: "::",
                    _0: t,
                    _1: {ctor: "::", _0: r, _1: {ctor: "::", _0: n, _1: {ctor: "::", _0: e, _1: {ctor: "[]"}}}}
                })))
            }), h(fe, pb, Vo(vb), Vo(Wo(l(Uo, 1, vb))), Vo(Wo(vb)), Vo(Wo(l(Uo, 1, jo(Io)))), Vo(Wo(l(Uo, 1, jo(Po)))))),
            ey = function (t) {
                return Nv(function (r) {
                    return y.update(r, {dropdown: {ctor: "::", _0: t, _1: r.dropdown}})
                })
            }, oy = (ey(ty), ey(Xb), ey(Yb), ey(zb), {dropdown: {ctor: "[]"}, icon: "more_vert"}),
            cy = {dropdown: Nb, ignoreClick: Z}, uy = s(cv, function (t) {
                return t.menu
            }, n(function (t, r) {
                return y.update(r, {menu: t})
            }), cy), iy = uy._0, _y = uy._1, ay = (n(function (t, r) {
                return {dropdown: t, ignoreClick: r}
            }), n(function (t, r) {
                return {dropdown: t, icon: r}
            }), function (t) {
                return {ctor: "MenuMsg", _0: t}
            }), fy = o(function (t, r, n) {
                t:for (; ;) {
                    var e = r;
                    switch (e.ctor) {
                        case"Click":
                            var o = n.ignoreClick;
                            if ("Just" === o.ctor) return 2 === o._0 ? l(Cn["!"], y.update(n, {ignoreClick: $(1)}), {ctor: "[]"}) : l(Cn["!"], y.update(n, {ignoreClick: Z}), {ctor: "[]"});
                            var c = t, u = ay(l(Eb, e._0, e._1));
                            t = c, r = u, n = n;
                            continue t;
                        case"Open":
                            var i = n.ignoreClick;
                            if ("Just" === i.ctor) return 2 === i._0 ? l(Cn["!"], y.update(n, {ignoreClick: $(1)}), {ctor: "[]"}) : l(Cn["!"], y.update(n, {ignoreClick: Z}), {ctor: "[]"});
                            var _ = t, a = ay(Db(e._0));
                            t = _, r = a, n = n;
                            continue t;
                        case"Close":
                            var f = n.ignoreClick;
                            if ("Just" === f.ctor) return 2 === f._0 ? l(Cn["!"], y.update(n, {ignoreClick: $(1)}), {ctor: "[]"}) : l(Cn["!"], y.update(n, {ignoreClick: Z}), {ctor: "[]"});
                            var p = t, h = ay(Lb);
                            t = p, r = h, n = n;
                            continue t;
                        case"Key":
                            var v = e._2;
                            return (y.eq(v, 32) ? n.dropdown.open ? function (t) {
                                var r = t;
                                return l(Cn["!"], y.update(r._0, {ignoreClick: $(1)}), {
                                    ctor: "::",
                                    _0: r._1,
                                    _1: {ctor: "[]"}
                                })
                            } : function (t) {
                                var r = t;
                                return l(Cn["!"], y.update(r._0, {ignoreClick: $(2)}), {
                                    ctor: "::",
                                    _0: r._1,
                                    _1: {ctor: "[]"}
                                })
                            } : S)(s(fy, t, ay(d(Cb, e._0, e._1, v, e._3)), n));
                        default:
                            var m = s(Ib, function (r) {
                                return t(ay(r))
                            }, e._0, n.dropdown), g = m._0, b = m._1;
                            return l(Cn["!"], y.update(n, {dropdown: g}), {ctor: "::", _0: b, _1: {ctor: "[]"}})
                    }
                }
            }), ly = c(function (t, r, n, e) {
                return l(Qh, function (t) {
                    return $(s(_y, n, e, t))
                }, s(fy, t, r, l(iy, n, e)))
            }), sy = n(function (t, r) {
                return {ctor: "Click", _0: t, _1: r}
            }), dy = s(tv, sv, function (t) {
                return t.menu
            }, function (t) {
                return t.dropdown.open ? Gi(sy(Gb)) : qn
            }), py = c(function (t, r, n, e) {
                return {ctor: "Key", _0: t, _1: r, _2: n, _3: e}
            }), hy = {ctor: "Close"}, vy = function (t) {
                return {ctor: "Open", _0: t}
            }, my = c(function (t, r, n, e) {
                var o = l(bt, function (t) {
                        return l(Tv, gb, t.options)
                    }, e), c = l(Tv, oy, n), u = c, i = c.config, _ = l(Tv, Kb, i.dropdown).config,
                    a = y.eq(r.dropdown.index, Z) ? _.index : r.dropdown.index, f = d(Hv, Xu, {
                        ctor: "::",
                        _0: Uv("mdl-button"),
                        _1: {
                            ctor: "::",
                            _0: Uv("mdl-js-button"),
                            _1: {
                                ctor: "::",
                                _0: Uv("mdl-button--icon"),
                                _1: {
                                    ctor: "::",
                                    _0: l(Lv, "click", l(pe, t, l(pe, r.dropdown.open ? x(hy) : vy, ny))),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Lv, "keydown", l(pe, t, s(de, l(py, a, o), li, ny))),
                                        _1: {ctor: "[]"}
                                    }
                                }
                            }
                        }
                    }, {
                        ctor: "::",
                        _0: l(Ku, "onkeydown", "javascript:\n                  if ((event.keyCode == 38) || (event.keyCode == 40)) {\n                      event.preventDefault();\n                  }\n                  if (event.keyCode == 32) {\n                      //return false;\n                  }\n              "),
                        _1: {ctor: "[]"}
                    }, {
                        ctor: "::",
                        _0: l(zg, "more_vert", {
                            ctor: "::",
                            _0: Uv("material-icons"),
                            _1: {ctor: "::", _0: l(Jv, "pointer-events", "none"), _1: {ctor: "[]"}}
                        }),
                        _1: {ctor: "[]"}
                    });
                return p(bv, u, ju, {ctor: "::", _0: l(Jv, "position", "relative"), _1: n}, {ctor: "[]"}, {
                    ctor: "::",
                    _0: f,
                    _1: {
                        ctor: "::", _0: d($b, function (r) {
                            return t(ay(r))
                        }, r.dropdown, i.dropdown, e), _1: {ctor: "[]"}
                    }
                })
            }), gy = (s(ev, iy, my, sv), n(function (t, r) {
                return y.update(r, {queue: l(St, r.queue, {ctor: "::", _0: t, _1: {ctor: "[]"}})})
            })), by = (o(function (t, r, n) {
                return {message: r, action: $(n), payload: t, timeout: 2750, fade: 250}
            }), n(function (t, r) {
                return {message: r, action: Z, payload: t, timeout: 2750, fade: 250}
            }), u(function (t, r, n, e, o) {
                return {message: t, action: r, payload: n, timeout: e, fade: o}
            }), o(function (t, r, n) {
                return {queue: t, state: r, seq: n}
            }), function (t) {
                return {ctor: "Fading", _0: t}
            }), yy = {ctor: "Inert"}, Ty = {ctor: "Timeout"}, wy = n(function (t, r) {
                return {ctor: "Move", _0: t, _1: r}
            }), ky = function (t) {
                return En(wy(t.seq))
            }, xy = function (t) {
                return {ctor: "Click", _0: t}
            }, Sy = function (t) {
                return {ctor: "End", _0: t}
            }, My = function (t) {
                var r = {ctor: "_Tuple2", _0: t.state, _1: t.queue};
                if ("_Tuple2" === r.ctor && "Inert" === r._0.ctor && "::" === r._1.ctor) {
                    var n = r._1._0;
                    return {
                        ctor: "_Tuple2",
                        _0: y.update(t, {
                            state: function (t) {
                                return {ctor: "Active", _0: t}
                            }(n), queue: r._1._1, seq: t.seq + 1
                        }),
                        _1: On({
                            ctor: "::",
                            _0: l(En, wy(t.seq + 1), l(zh, n.timeout, Ty)),
                            _1: {
                                ctor: "::", _0: Gh(function (t) {
                                    return {ctor: "Begin", _0: t}
                                }(n.payload)), _1: {ctor: "[]"}
                            }
                        })
                    }
                }
                return {ctor: "_Tuple2", _0: t, _1: An}
            }, Ny = n(function (t, r) {
                var n = {ctor: "_Tuple2", _0: r.state, _1: t};
                t:do {
                    if ("_Tuple2" !== n.ctor) break t;
                    if ("Clicked" === n._1.ctor) {
                        if ("Active" === n._0.ctor) {
                            var e = n._0._0;
                            return {
                                ctor: "_Tuple2",
                                _0: y.update(r, {state: by(e)}),
                                _1: On({
                                    ctor: "::",
                                    _0: l(ky, r, l(zh, e.fade, Ty)),
                                    _1: {ctor: "::", _0: Gh(xy(e.payload)), _1: {ctor: "[]"}}
                                })
                            }
                        }
                        break t
                    }
                    switch (n._0.ctor) {
                        case"Inert":
                            return My(r);
                        case"Active":
                            var o = n._0._0;
                            return {
                                ctor: "_Tuple2",
                                _0: y.update(r, {state: by(o)}),
                                _1: On({ctor: "::", _0: l(ky, r, l(zh, o.fade, Ty)), _1: {ctor: "[]"}})
                            };
                        default:
                            return {
                                ctor: "_Tuple2",
                                _0: y.update(r, {state: yy}),
                                _1: On({
                                    ctor: "::",
                                    _0: l(ky, r, Gh(Ty)),
                                    _1: {ctor: "::", _0: Gh(Sy(n._0._0.payload)), _1: {ctor: "[]"}}
                                })
                            }
                    }
                } while (0);
                return {ctor: "_Tuple2", _0: r, _1: An}
            }), By = (n(function (t, r) {
                var n = t;
                return "Move" === n.ctor && y.eq(n._0, r.seq) ? l(Ny, n._1, r) : {ctor: "_Tuple2", _0: r, _1: An}
            }), n(function (t, r) {
                return My(l(gy, t, r))
            }), {
                ctor: "_Tuple2", _0: function (t) {
                    return t.layout
                }, _1: n(function (t, r) {
                    return y.update(r, {layout: t})
                })
            }), Ry = By._0, Oy = By._1, Ay = o(function (t, r, n) {
                return l(ju, {
                    ctor: "::",
                    _0: ai({
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: "mdl-layout__drawer", _1: !0},
                        _1: {ctor: "::", _0: {ctor: "_Tuple2", _0: "is-visible", _1: r}, _1: {ctor: "[]"}}
                    }),
                    _1: {ctor: "::", _0: l(Ku, "aria-hidden", r ? "false" : "true"), _1: {ctor: "[]"}}
                }, n)
            }),
            Cy = (l(Ku, "onkeypress", '\n  (function (evt) {\n     if (evt && evt.type === "keydown" && (evt.keyCode === 32 || evt.keyCode === 13)) {\n       evt.preventDefault();\n     }\n   })(window.event);\n  '), function (t) {
                var r = t;
                return "Nothing" === r.ctor ? {ctor: "[]"} : {ctor: "::", _0: r._0, _1: {ctor: "[]"}}
            }), Ey = function (t) {
                return "Waterfall" === t.ctor
            }, Ly = function (t) {
                return zv({ctor: "::", _0: Uv("mdl-layout__header-row"), _1: t})
            }, qy = (n(function (t, r) {
                return s(Wv, Uu, {
                    ctor: "::",
                    _0: Uv("mdl-navigation__link"),
                    _1: {ctor: "::", _0: Av(l(Ku, "tabindex", "1")), _1: t}
                }, r)
            }), n(function (t, r) {
                return s(Wv, qu, {ctor: "::", _0: Uv("mdl-navigation"), _1: t}, r)
            }), function (t) {
                return Gv({ctor: "::", _0: Uv("mdl-layout__title"), _1: t})
            }), Dy = l(ju, {ctor: "::", _0: ri("mdl-layout-spacer"), _1: {ctor: "[]"}}, {ctor: "[]"}),
            Iy = (Nv(function (t) {
                return y.update(t, {moreTabs: !0})
            }), Nv(function (t) {
                return y.update(t, {transparentHeader: !0})
            }), Nv(function (t) {
                return y.update(t, {rippleTabs: !0})
            }), Nv(function (t) {
                return y.update(t, {fixedTabs: !0})
            }), Nv(function (t) {
                return y.update(t, {fixedDrawer: !0})
            }), Nv(function (t) {
                return y.update(t, {fixedHeader: !0})
            })), Fy = n(function (t, r) {
                var n = r.tabScrollState;
                return y.update(r, {tabScrollState: y.update(n, {width: $(t)})})
            }), Py = (n(function (t, r) {
                return y.update(r, {layout: l(Fy, t, r.layout)})
            }), {
                ripples: rn,
                isSmallScreen: !1,
                isCompact: !1,
                isAnimating: !1,
                isScrolled: !1,
                isDrawerOpen: !1,
                tabScrollState: {canScrollRight: !0, canScrollLeft: !1, width: Z}
            }), Jy = (o(function (t, r, n) {
                return {canScrollLeft: t, canScrollRight: r, width: n}
            }), _(function (t, r, n, e, o, c, u) {
                return {
                    ripples: t,
                    isSmallScreen: r,
                    isCompact: n,
                    isAnimating: e,
                    isScrolled: o,
                    isDrawerOpen: c,
                    tabScrollState: u
                }
            }), f(function (t, r, n, e, o, c, u, i, _) {
                return {
                    fixedHeader: t,
                    fixedDrawer: r,
                    fixedTabs: n,
                    rippleTabs: e,
                    mode: o,
                    selectedTab: c,
                    onSelectTab: u,
                    transparentHeader: i,
                    moreTabs: _
                }
            }), c(function (t, r, n, e) {
                return {header: t, drawer: r, tabs: n, main: e}
            }), n(function (t, r) {
                return {ctor: "Ripple", _0: t, _1: r}
            })), jy = {ctor: "NOP"}, Uy = {ctor: "TransitionEnd"}, Hy = function (t) {
                return {ctor: "TransitionHeader", _0: t}
            }, Wy = o(function (t, r, n) {
                t:for (; ;) {
                    var e = r;
                    switch (e.ctor) {
                        case"NOP":
                            return Z;
                        case"Resize":
                            var o = e._0, c = l(X, n.tabScrollState, l(tt, function (t) {
                                var r = n.tabScrollState;
                                return y.update(r, {canScrollRight: y.cmp(t + 112, o) > 0})
                            }, n.tabScrollState.width)), u = y.cmp(1024, o) > -1;
                            return y.eq(u, n.isSmallScreen) && y.eq(c.canScrollRight, n.tabScrollState.canScrollRight) ? Z : $(Kh(y.update(n, {
                                isSmallScreen: u,
                                isDrawerOpen: !u && n.isDrawerOpen,
                                tabScrollState: c
                            })));
                        case"ToggleDrawer":
                            return $(Kh(y.update(n, {isDrawerOpen: !n.isDrawerOpen})));
                        case"Ripple":
                            var i = e._0;
                            return $(l(Vh, En(function (r) {
                                return t(l(Jy, i, r))
                            }), l(Qh, function (t) {
                                return y.update(n, {ripples: s(vn, i, t, n.ripples)})
                            }, l(wg, e._1, l(X, gg, l(Wr, i, n.ripples))))));
                        case"ScrollTab":
                            var _ = e._0;
                            return y.eq(n.tabScrollState, _) ? Z : $(Kh(y.update(n, {tabScrollState: _})));
                        case"ScrollPane":
                            var a = y.cmp(0, e._1) < 0;
                            if (y.eq(a, n.isScrolled)) return Z;
                            var f = t, d = Hy({toCompact: a, fixedHeader: e._0}), p = y.update(n, {isScrolled: a});
                            t = f, r = d, n = p;
                            continue t;
                        case"TransitionHeader":
                            return n.isAnimating ? Z : $({
                                ctor: "_Tuple2",
                                _0: y.update(n, {
                                    isCompact: e._0.toCompact,
                                    isAnimating: !n.isSmallScreen || e._0.fixedHeader
                                }),
                                _1: An
                            });
                        default:
                            return $(Kh(y.update(n, {isAnimating: !1})))
                    }
                }
            }), zy = (n(function (t, r) {
                return l(X, {ctor: "_Tuple2", _0: r, _1: An}, s(Wy, S, t, r))
            }), o(function (t, r, n) {
                var e = s(Wy, t, r, Ry(n));
                return "Just" === e.ctor && "_Tuple2" === e._0.ctor ? {
                    ctor: "_Tuple2",
                    _0: $(l(Oy, e._0._0, n)),
                    _1: e._0._1
                } : {ctor: "_Tuple2", _0: Z, _1: An}
            })), Gy = n(function (t, r) {
                return {ctor: "ScrollPane", _0: t, _1: r}
            }), Yy = function (t) {
                return {ctor: "Resize", _0: t}
            }, Vy = function () {
                var t = l(je, Yy, $_);
                return {ctor: "_Tuple2", _0: Py, _1: t}
            }(), Qy = function (t) {
                return function (t) {
                    return ra(na(t))
                }(function (t) {
                    return Yy(t.width)
                })
            }, Xy = function (t) {
                return function (r) {
                    return l(Dn, function (r) {
                        return t(lv(r))
                    }, Qy(Ry(r)))
                }
            }, Zy = {ctor: "ToggleDrawer"}, Ky = n(function (t, r) {
                return l(ju, {ctor: "[]"}, {
                    ctor: "::",
                    _0: l(ju, {
                        ctor: "::",
                        _0: ai({
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: "mdl-layout__drawer-button", _1: !0},
                            _1: {ctor: "[]"}
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(Ku, "aria-expanded", r ? "true" : "false"),
                            _1: {
                                ctor: "::",
                                _0: function (t) {
                                    return l(Ku, "tabIndex", M(t))
                                }(1),
                                _1: {
                                    ctor: "::",
                                    _0: vi(t(Zy)),
                                    _1: {
                                        ctor: "::",
                                        _0: s(pi, "keydown", {stopPropagation: !1, preventDefault: !1}, l(pe, function (r) {
                                            return t(function (t) {
                                                switch (r) {
                                                    case 32:
                                                    case 13:
                                                        return Zy;
                                                    default:
                                                        return jy
                                                }
                                            }())
                                        }, li)),
                                        _1: {ctor: "[]"}
                                    }
                                }
                            }
                        }
                    }, {ctor: "::", _0: Gg("menu"), _1: {ctor: "[]"}}),
                    _1: {ctor: "[]"}
                })
            }), $y = n(function (t, r) {
                return l(ju, {
                    ctor: "::",
                    _0: ai({
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: "mdl-layout__obfuscator", _1: !0},
                        _1: {ctor: "::", _0: {ctor: "_Tuple2", _0: "is-visible", _1: r}, _1: {ctor: "[]"}}
                    }),
                    _1: {ctor: "::", _0: vi(t(Zy)), _1: {ctor: "[]"}}
                }, {ctor: "[]"})
            }), tT = {ctor: "Scrolling"}, rT = (Nv(function (t) {
                return y.update(t, {mode: tT})
            }), {ctor: "Seamed"}), nT = (Nv(function (t) {
                return y.update(t, {mode: rT})
            }), {ctor: "Standard"}), eT = {
                fixedHeader: !1,
                fixedDrawer: !1,
                fixedTabs: !1,
                rippleTabs: !0,
                mode: nT,
                onSelectTab: Z,
                selectedTab: -1,
                moreTabs: !1,
                transparentHeader: !1
            }, oT = i(function (t, r, n, e, o, c) {
                var u = c, i = function () {
                    var t = r.mode;
                    switch (t.ctor) {
                        case"Standard":
                            return Iv;
                        case"Scrolling":
                            return Uv("mdl-layout__header--scroll");
                        case"Seamed":
                            return Uv("mdl-layout__header--seamed");
                        default:
                            return !0 === t._0 ? Uv("mdl-layout__header--waterfall mdl-layout__header--waterfall-hide-top") : Uv("mdl-layout__header--waterfall")
                    }
                }();
                return s(Wv, Iu, {
                    ctor: "::",
                    _0: Uv("mdl-layout__header"),
                    _1: {
                        ctor: "::",
                        _0: l(Fv, !e && !o, l(Jv, "min-height", "48px")),
                        _1: {
                            ctor: "::",
                            _0: l(Fv, y.eq(r.mode, nT) || Ey(r.mode) && n.isCompact, Uv("is-casting-shadow")),
                            _1: {
                                ctor: "::",
                                _0: l(Fv, n.isAnimating, Uv("is-animating")),
                                _1: {
                                    ctor: "::",
                                    _0: l(Fv, n.isCompact, Uv("is-compact")),
                                    _1: {
                                        ctor: "::",
                                        _0: i,
                                        _1: {
                                            ctor: "::",
                                            _0: l(Fv, r.transparentHeader, Uv("mdl-layout__header--transparent")),
                                            _1: {
                                                ctor: "::",
                                                _0: qv(t(Hy({toCompact: !1, fixedHeader: r.fixedHeader}))),
                                                _1: {ctor: "::", _0: l(Lv, "transitionend", ce(t(Uy))), _1: {ctor: "[]"}}
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, l(Nt, function (t) {
                    return t
                }, {
                    ctor: "::",
                    _0: Cy(u._0),
                    _1: {ctor: "::", _0: u._1, _1: {ctor: "::", _0: Cy(u._2), _1: {ctor: "[]"}}}
                }))
            }), cT = {ctor: "Right"}, uT = {ctor: "Left"}, iT = c(function (t, r, e, c) {
                var u = c, i = u._1, _ = n(function (t, r) {
                    var n = "Left" === t.ctor ? "left" : "right";
                    return s(Wv, ju, {
                        ctor: "::",
                        _0: Uv("mdl-layout__tab-bar-button"),
                        _1: {
                            ctor: "::",
                            _0: Uv(l(z["++"], "mdl-layout__tab-bar-", l(z["++"], n, "-button"))),
                            _1: {
                                ctor: "::",
                                _0: l(Fv, y.eq(t, uT) && e.tabScrollState.canScrollLeft || y.eq(t, cT) && e.tabScrollState.canScrollRight, Uv("is-active")),
                                _1: {ctor: "::", _0: Pv(i), _1: {ctor: "[]"}}
                            }
                        }
                    }, {
                        ctor: "::",
                        _0: l(zg, l(z["++"], "chevron_", n), {
                            ctor: "::",
                            _0: Yg,
                            _1: {
                                ctor: "::",
                                _0: Av(l(Ku, "onclick", l(z["++"], "document.getElementsByClassName('mdl-layout__tab-bar')[0].scrollLeft += ", M(r)))),
                                _1: {ctor: "[]"}
                            }
                        }),
                        _1: {ctor: "[]"}
                    })
                });
                return l(zv, {ctor: "::", _0: Uv("mdl-layout__tab-bar-container"), _1: {ctor: "[]"}}, {
                    ctor: "::", _0: l(_, uT, -100), _1: {
                        ctor: "::",
                        _0: l(zv, {
                            ctor: "::",
                            _0: Uv("mdl-layout__tab-bar"),
                            _1: {
                                ctor: "::",
                                _0: l(Jv, "position", "relative"),
                                _1: {
                                    ctor: "::",
                                    _0: l(Jv, "scroll-behavior", "smooth"),
                                    _1: {
                                        ctor: "::",
                                        _0: r.rippleTabs ? Pv({
                                            ctor: "::",
                                            _0: Uv("mdl-js-ripple-effect"),
                                            _1: {
                                                ctor: "::",
                                                _0: Uv("mds-js-ripple-effect--ignore-events"),
                                                _1: {ctor: "[]"}
                                            }
                                        }) : Iv,
                                        _1: {
                                            ctor: "::",
                                            _0: y.eq(r.mode, nT) ? Uv("is-casting-shadow") : Iv,
                                            _1: {
                                                ctor: "::",
                                                _0: Pv(i),
                                                _1: {
                                                    ctor: "::",
                                                    _0: Av(l(hi, "scroll", Vo(d(se, o(function (r, n, e) {
                                                        return t(function (t) {
                                                            return {ctor: "ScrollTab", _0: t}
                                                        }({
                                                            canScrollLeft: y.cmp(e, 0) > 0,
                                                            canScrollRight: y.cmp(r - n, e + 1) > 0,
                                                            width: $(r)
                                                        }))
                                                    }), l(ge, "scrollWidth", ke), l(ge, "clientWidth", ke), l(ge, "scrollLeft", ke))))),
                                                    _1: {ctor: "[]"}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }, l(It, n(function (o, c) {
                            return s($h, Uu, {
                                ctor: "::",
                                _0: ai({
                                    ctor: "::",
                                    _0: {ctor: "_Tuple2", _0: "mdl-layout__tab", _1: !0},
                                    _1: {
                                        ctor: "::",
                                        _0: {ctor: "_Tuple2", _0: "is-active", _1: y.eq(o, r.selectedTab)},
                                        _1: {ctor: "[]"}
                                    }
                                }),
                                _1: {
                                    ctor: "::", _0: l(X, Wh, l(tt, n(function (t, r) {
                                        return r(t)
                                    })(o), r.onSelectTab)), _1: {ctor: "[]"}
                                }
                            }, {
                                ctor: "::", _0: $(c), _1: {
                                    ctor: "::", _0: r.rippleTabs ? $(l(Cu, function (r) {
                                        return t(l(Jy, o, r))
                                    }, l(Og, {
                                        ctor: "::",
                                        _0: ri("mdl-layout__tab-ripple-container"),
                                        _1: {ctor: "[]"}
                                    }, l(X, gg, l(Wr, o, e.ripples))))) : Z, _1: {ctor: "[]"}
                                }
                            })
                        }), u._0)),
                        _1: {ctor: "::", _0: l(_, cT, 100), _1: {ctor: "[]"}}
                    }
                })
            }), _T = c(function (t, r, e, o) {
                var c = o, u = c.tabs, i = c.header, _ = c.drawer, a = !y.eq(_, {ctor: "[]"}), f = !ht(i), p = !ht(Nn(u)),
                    v = l(Tv, eT, e).config, m = v.fixedDrawer && !r.isSmallScreen, g = r.isDrawerOpen && !m,
                    b = function () {
                        var r = "_Tuple3", n = _, e = i, o = v.fixedHeader;
                        return "_Tuple3" === r && "::" === n.ctor ? "::" === e.ctor && !0 === o ? {
                            ctor: "_Tuple2",
                            _0: Z,
                            _1: $(l(Ky, t, g))
                        } : {ctor: "_Tuple2", _0: $(l(Ky, t, g)), _1: Z} : {ctor: "_Tuple2", _0: Z, _1: Z}
                    }(), T = b._0, w = b._1, k = p ? $(d(iT, t, v, r, u)) : Z;
                return l(ju, {
                    ctor: "::",
                    _0: ai({
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: "mdl-layout__container", _1: !0},
                        _1: {
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: "has-scrolling-header", _1: y.eq(v.mode, tT)},
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {ctor: "[]"}
                }, {
                    ctor: "::",
                    _0: s($h, mi("div"), l(wt, S, {
                        ctor: "::",
                        _0: $(ai({
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: "mdl-layout ", _1: !0},
                            _1: {
                                ctor: "::",
                                _0: {ctor: "_Tuple2", _0: "is-upgraded", _1: !0},
                                _1: {
                                    ctor: "::",
                                    _0: {ctor: "_Tuple2", _0: "is-small-screen", _1: r.isSmallScreen},
                                    _1: {
                                        ctor: "::",
                                        _0: {ctor: "_Tuple2", _0: "has-drawer", _1: a},
                                        _1: {
                                            ctor: "::",
                                            _0: {ctor: "_Tuple2", _0: "has-tabs", _1: p},
                                            _1: {
                                                ctor: "::",
                                                _0: {ctor: "_Tuple2", _0: "mdl-js-layout", _1: !0},
                                                _1: {
                                                    ctor: "::",
                                                    _0: {
                                                        ctor: "_Tuple2",
                                                        _0: "mdl-layout--fixed-drawer",
                                                        _1: v.fixedDrawer && a
                                                    },
                                                    _1: {
                                                        ctor: "::",
                                                        _0: {
                                                            ctor: "_Tuple2",
                                                            _0: "mdl-layout--fixed-header",
                                                            _1: v.fixedHeader && (f || p)
                                                        },
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {
                                                                ctor: "_Tuple2",
                                                                _0: "mdl-layout--fixed-tabs",
                                                                _1: v.fixedTabs && p
                                                            },
                                                            _1: {ctor: "[]"}
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })),
                        _1: {
                            ctor: "::", _0: g ? $(l(hi, "keydown", l(pe, function (r) {
                                return t(function (t) {
                                    return y.eq(t, 27) ? Zy : jy
                                }(r))
                            }, li))) : Z, _1: {ctor: "[]"}
                        }
                    }), {
                        ctor: "::",
                        _0: f || p ? $(l(n(function (t, r) {
                            return {ctor: "_Tuple2", _0: t, _1: r}
                        }), "elm-mdl-header", h(oT, t, v, r, f, a, {ctor: "_Tuple3", _0: w, _1: i, _2: k}))) : Z,
                        _1: {
                            ctor: "::",
                            _0: a ? $({ctor: "_Tuple2", _0: "elm-mdl-drawer", _1: s(Ay, t, g, _)}) : Z,
                            _1: {
                                ctor: "::",
                                _0: a ? $({ctor: "_Tuple2", _0: "elm-mdl-obfuscator", _1: l($y, t, g)}) : Z,
                                _1: {
                                    ctor: "::", _0: l(tt, n(function (t, r) {
                                        return {ctor: "_Tuple2", _0: t, _1: r}
                                    })("elm-drawer-button"), T), _1: {
                                        ctor: "::", _0: $(l(n(function (t, r) {
                                            return {ctor: "_Tuple2", _0: t, _1: r}
                                        }), M(v.selectedTab), s(Wv, Fu, {
                                            ctor: "::",
                                            _0: function (t) {
                                                return Cv(ni(t))
                                            }("elm-mdl-layout-main"),
                                            _1: {
                                                ctor: "::",
                                                _0: Uv("mdl-layout__content"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(Fv, y.eq(v.mode, tT) && v.fixedHeader, l(Jv, "overflow-y", "visible")),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: l(Fv, y.eq(v.mode, tT) && v.fixedHeader, l(Jv, "overflow-x", "visible")),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: l(Fv, y.eq(v.mode, tT) && v.fixedHeader, l(Jv, "overflow", "visible")),
                                                            _1: {
                                                                ctor: "::", _0: l(Fv, Ey(v.mode), function (t) {
                                                                    return Av(l(hi, "scroll", t))
                                                                }(l(pe, function (r) {
                                                                    return t(l(Gy, v.fixedHeader, r))
                                                                }, Vo(qo)))), _1: {ctor: "[]"}
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }, c.main))), _1: {ctor: "[]"}
                                    }
                                }
                            }
                        }
                    }),
                    _1: {ctor: "[]"}
                })
            }), aT = s(ov, Ry, _T, lv), fT = (Av(_i(!0)), Nv(function (t) {
                return y.update(t, {ripple: !0})
            }), {value: !1, ripple: !1, input: {ctor: "[]"}, container: {ctor: "[]"}}), lT = {ripple: gg, isFocused: !1},
            sT = s(cv, function (t) {
                return t.toggles
            }, n(function (t, r) {
                return y.update(r, {toggles: t})
            }), lT), dT = sT._0, pT = sT._1, hT = (n(function (t, r) {
                return {ripple: t, isFocused: r}
            }), c(function (t, r, n, e) {
                return {value: t, ripple: r, input: n, container: e}
            }), function (t) {
                return {ctor: "SetFocus", _0: t}
            }), vT = function (t) {
                return {ctor: "Ripple", _0: t}
            }, mT = d(nv, dT, pT, fv, rv(n(function (t, r) {
                var n = t;
                return "Ripple" === n.ctor ? l(Vh, En(vT), l(Qh, function (t) {
                    return y.update(r, {ripple: t})
                }, l(wg, n._0, r.ripple))) : {ctor: "_Tuple2", _0: y.update(r, {isFocused: n._0}), _1: An}
            }))), gT = u(function (t, r, n, e, o) {
                var c = e.config;
                return d(Rv, e, Vu, {
                    ctor: "::",
                    _0: Uv(l(z["++"], "mdl-", r)),
                    _1: {
                        ctor: "::",
                        _0: Uv(l(z["++"], "mdl-js-", r)),
                        _1: {
                            ctor: "::",
                            _0: l(Fv, c.ripple, Uv("mdl-js-ripple-effect")),
                            _1: {
                                ctor: "::",
                                _0: l(Fv, c.ripple, Uv("mdl-js-ripple-effect--ignore-events")),
                                _1: {
                                    ctor: "::",
                                    _0: Uv("is-upgraded"),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Fv, c.value, Uv("is-checked")),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Fv, n.isFocused, Uv("is-focused")),
                                            _1: {
                                                ctor: "::",
                                                _0: s(Mv, "focus", t, hT(!0)),
                                                _1: {
                                                    ctor: "::",
                                                    _0: s(Mv, "blur", t, hT(!1)),
                                                    _1: {ctor: "::", _0: Av(Xh("mouseup")), _1: {ctor: "[]"}}
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, Mt({
                    ctor: "::", _0: o, _1: {
                        ctor: "::", _0: c.ripple ? {
                            ctor: "::", _0: l(Cu, function (r) {
                                return t(vT(r))
                            }, l(Og, {
                                ctor: "::",
                                _0: ri("mdl-switch__ripple-container mdl-js-ripple-effect mdl-ripple--center"),
                                _1: {ctor: "[]"}
                            }, n.ripple)), _1: {ctor: "[]"}
                        } : {ctor: "[]"}, _1: {ctor: "[]"}
                    }
                }))
            }), bT = c(function (t, r, n, e) {
                var o = l(Tv, fT, n);
                return p(gT, t, "checkbox", r, o, {
                    ctor: "::",
                    _0: d(Ov, o, Qu, {
                        ctor: "::",
                        _0: Uv("mdl-checkbox__input"),
                        _1: {
                            ctor: "::",
                            _0: Av(oi("checkbox")),
                            _1: {ctor: "::", _0: Av(ii(o.config.value)), _1: {ctor: "[]"}}
                        }
                    }, {ctor: "[]"}),
                    _1: {
                        ctor: "::",
                        _0: l(Wu, {ctor: "::", _0: ri("mdl-checkbox__label"), _1: {ctor: "[]"}}, e),
                        _1: {
                            ctor: "::",
                            _0: l(Wu, {ctor: "::", _0: ri("mdl-checkbox__focus-helper"), _1: {ctor: "[]"}}, {ctor: "[]"}),
                            _1: {
                                ctor: "::",
                                _0: l(Wu, {ctor: "::", _0: ri("mdl-checkbox__box-outline"), _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: l(Wu, {
                                        ctor: "::",
                                        _0: ri("mdl-checkbox__tick-outline"),
                                        _1: {ctor: "[]"}
                                    }, {ctor: "[]"}),
                                    _1: {ctor: "[]"}
                                }),
                                _1: {ctor: "[]"}
                            }
                        }
                    }
                })
            }), yT = (s(ev, dT, bT, fv), c(function (t, r, n, e) {
                var o = l(Tv, fT, n);
                return p(gT, t, "switch", r, o, {
                    ctor: "::",
                    _0: d(Ov, o, Qu, {
                        ctor: "::",
                        _0: Uv("mdl-switch__input"),
                        _1: {
                            ctor: "::",
                            _0: Av(oi("checkbox")),
                            _1: {ctor: "::", _0: Av(ii(o.config.value)), _1: {ctor: "[]"}}
                        }
                    }, {ctor: "[]"}),
                    _1: {
                        ctor: "::",
                        _0: l(Wu, {ctor: "::", _0: ri("mdl-switch__label"), _1: {ctor: "[]"}}, e),
                        _1: {
                            ctor: "::",
                            _0: l(ju, {ctor: "::", _0: ri("mdl-switch__track"), _1: {ctor: "[]"}}, {ctor: "[]"}),
                            _1: {
                                ctor: "::",
                                _0: l(ju, {ctor: "::", _0: ri("mdl-switch__thumb"), _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: l(Wu, {
                                        ctor: "::",
                                        _0: ri("mdl-switch__focus-helper"),
                                        _1: {ctor: "[]"}
                                    }, {ctor: "[]"}),
                                    _1: {ctor: "[]"}
                                }),
                                _1: {ctor: "[]"}
                            }
                        }
                    }
                })
            })), TT = (s(ev, dT, yT, fv), c(function (t, r, n, e) {
                var o = l(Tv, fT, n);
                return p(gT, t, "radio", r, o, {
                    ctor: "::",
                    _0: d(Ov, o, Qu, {
                        ctor: "::",
                        _0: Uv("mdl-radio__button"),
                        _1: {
                            ctor: "::",
                            _0: Dv(oi("radio")),
                            _1: {ctor: "::", _0: Dv(ii(o.config.value)), _1: {ctor: "[]"}}
                        }
                    }, {ctor: "[]"}),
                    _1: {
                        ctor: "::",
                        _0: l(Wu, {ctor: "::", _0: ri("mdl-radio__label"), _1: {ctor: "[]"}}, e),
                        _1: {
                            ctor: "::",
                            _0: l(Wu, {ctor: "::", _0: ri("mdl-radio__outer-circle"), _1: {ctor: "[]"}}, {ctor: "[]"}),
                            _1: {
                                ctor: "::",
                                _0: l(Wu, {ctor: "::", _0: ri("mdl-radio__inner-circle"), _1: {ctor: "[]"}}, {ctor: "[]"}),
                                _1: {ctor: "[]"}
                            }
                        }
                    }
                })
            })), wT = (s(ev, dT, TT, fv), function (t) {
                var r = l(bt, function (t) {
                    var r = l(Lt, t, "parentElement");
                    return l(z["++"], {ctor: "::", _0: "target", _1: {ctor: "[]"}}, l(z["++"], r, {
                        ctor: "::",
                        _0: "nextSibling",
                        _1: {ctor: "[]"}
                    }))
                }, l(Dt, 0, 4));
                return he(l(bt, function (r) {
                    return l(ee, function (n) {
                        return n ? l(be, r, t) : oe("")
                    }, function (t) {
                        return l(ee, function (t) {
                            return l(pr, "mdl-tooltip", t) ? ce(!0) : ce(!1)
                        }, l(be, t, Lo))
                    }(r))
                }, r))
            }), kT = n(function (t, r) {
                var n = t;
                return "Enter" === n.ctor ? {
                    ctor: "_Tuple2",
                    _0: y.update(r, {isActive: !0, domState: n._0}),
                    _1: An
                } : {ctor: "_Tuple2", _0: y.update(r, {isActive: !1}), _1: An}
            }), xT = n(function (t, r) {
                var e = n(function (t, r) {
                        return y.cmp(t + r, 0) < 0 ? {ctor: "_Tuple2", _0: 0, _1: 0} : {ctor: "_Tuple2", _0: t, _1: r}
                    }), o = r.offsetHeight, c = o / 2 * -1, u = r.offsetWidth, i = u / 2 * -1, _ = r.rect,
                    a = l(e, _.left + _.width / 2, i), f = a._0, s = a._1, d = l(e, _.top + _.height / 2, c), p = d._0,
                    h = d._1;
                return function () {
                    switch (t.ctor) {
                        case"Left":
                            return {left: _.left - u - 10, top: p, marginTop: h, marginLeft: 0};
                        case"Right":
                            return {left: _.left + _.width + 10, top: p, marginTop: h, marginLeft: 0};
                        case"Top":
                            return {left: f, top: _.top - o - 10, marginTop: 0, marginLeft: s};
                        default:
                            return {left: f, top: _.top + _.height + 10, marginTop: 0, marginLeft: s}
                    }
                }()
            }), ST = {left: 0, top: 0, marginLeft: 0, marginTop: 0}, MT = {
                isActive: !1,
                domState: {rect: {left: 0, top: 0, width: 0, height: 0}, offsetWidth: 0, offsetHeight: 0}
            }, NT = s(cv, function (t) {
                return t.tooltip
            }, n(function (t, r) {
                return y.update(r, {tooltip: t})
            }), MT), BT = NT._0, RT = d(nv, BT, NT._1, av, rv(kT)), OT = (n(function (t, r) {
                return {isActive: t, domState: r}
            }), c(function (t, r, n, e) {
                return {left: t, top: r, marginLeft: n, marginTop: e}
            }), o(function (t, r, n) {
                return {rect: t, offsetWidth: r, offsetHeight: n}
            })), AT = d(se, OT, Vo(Yo), wT(Jo), wT(Po)), CT = (o(function (t, r, n) {
                return {size: t, position: r, elem: n}
            }), {ctor: "Leave"}), ET = n(function (t, r) {
                return l(Lv, "mouseleave", ce(t(l(av, r, CT))))
            }), LT = function (t) {
                return {ctor: "Enter", _0: t}
            }, qT = n(function (t, r) {
                return l(Lv, "mouseenter", l(pe, function (n) {
                    return t(l(av, r, LT(n)))
                }, AT))
            }), DT = n(function (t, r) {
                return Pv({ctor: "::", _0: l(qT, t, r), _1: {ctor: "::", _0: l(ET, t, r), _1: {ctor: "[]"}}})
            }), IT = {ctor: "Large"}, FT = (Nv(function (t) {
                return y.update(t, {size: IT})
            }), {ctor: "Bottom"}), PT = {size: {ctor: "Default"}, position: FT, elem: ju}, JT = c(function (t, r, n, e) {
                var o = function (t) {
                    return l(z["++"], M(t), "px")
                }, c = l(Tv, PT, n).config, u = r.isActive ? l(xT, c.position, r.domState) : ST;
                return s(Wv, c.elem, {
                    ctor: "::",
                    _0: Uv("mdl-tooltip"),
                    _1: {
                        ctor: "::",
                        _0: l(Fv, r.isActive, Uv("is-active")),
                        _1: {
                            ctor: "::",
                            _0: l(Fv, y.eq(c.size, IT), Uv("mdl-tooltip--large")),
                            _1: {
                                ctor: "::",
                                _0: l(Fv, r.isActive, l(Jv, "left", o(u.left))),
                                _1: {
                                    ctor: "::",
                                    _0: l(Fv, r.isActive, l(Jv, "margin-left", o(u.marginLeft))),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Fv, r.isActive, l(Jv, "top", o(u.top))),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Fv, r.isActive, l(Jv, "margin-top", o(u.marginTop))),
                                            _1: {ctor: "[]"}
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, e)
            }), jT = s(ev, BT, JT, av), UT = (Nv(function (t) {
                return y.update(t, {position: FT})
            }), {ctor: "Top"}), HT = (Nv(function (t) {
                return y.update(t, {position: UT})
            }), {ctor: "Right"}), WT = (Nv(function (t) {
                return y.update(t, {position: HT})
            }), {ctor: "Left"}), zT = (Nv(function (t) {
                return y.update(t, {position: WT})
            }), Nv(function (t) {
                return y.update(t, {ripple: !0})
            })), GT = {ripple: !1, onSelectTab: Z, activeTab: 0}, YT = {ripples: rn}, VT = s(cv, function (t) {
                return t.tabs
            }, n(function (t, r) {
                return y.update(r, {tabs: t})
            }), YT), QT = VT._0, XT = VT._1, ZT = (o(function (t, r, n) {
                return {ripple: t, onSelectTab: r, activeTab: n}
            }), n(function (t, r) {
                return {ctor: "Ripple", _0: t, _1: r}
            })), KT = d(nv, QT, XT, _v, rv(n(function (t, r) {
                var n = t, e = n._0, o = l(wg, n._1, l(X, gg, l(Wr, e, r.ripples))), c = o._0, u = o._1;
                return {ctor: "_Tuple2", _0: y.update(r, {ripples: s(vn, e, c, r.ripples)}), _1: l(En, ZT(e), u)}
            }))), $T = u(function (t, r, e, o, c) {
                var u = l(mi, "div", {
                    ctor: "::",
                    _0: ai({
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: "mdl-tab__panel", _1: !0},
                        _1: {ctor: "::", _0: {ctor: "_Tuple2", _0: "is-active", _1: !0}, _1: {ctor: "[]"}}
                    }),
                    _1: {ctor: "[]"}
                }), i = l(Tv, GT, e), _ = i.config, a = n(function (n, e) {
                    var o = e, c = o._0._1;
                    return s(Wv, Uu, {
                        ctor: "::",
                        _0: Uv("mdl-tabs__tab"),
                        _1: {
                            ctor: "::",
                            _0: l(Fv, y.eq(n, _.activeTab), Uv("is-active")),
                            _1: {
                                ctor: "::", _0: l(X, Iv, l(tt, function (t) {
                                    return qv(t(n))
                                }, _.onSelectTab)), _1: {ctor: "::", _0: Pv(o._0._0), _1: {ctor: "[]"}}
                            }
                        }
                    }, _.ripple ? Mt({
                        ctor: "::", _0: c, _1: {
                            ctor: "::", _0: {
                                ctor: "::", _0: l(Cu, function (r) {
                                    return t(l(ZT, n, r))
                                }, l(Og, {
                                    ctor: "::",
                                    _0: ai({
                                        ctor: "::",
                                        _0: {ctor: "_Tuple2", _0: "mdl-tabs__ripple-container", _1: !0},
                                        _1: {
                                            ctor: "::",
                                            _0: {ctor: "_Tuple2", _0: "mdl-tabs__ripple-js-effect", _1: !0},
                                            _1: {ctor: "[]"}
                                        }
                                    }),
                                    _1: {ctor: "[]"}
                                }, l(X, gg, l(Wr, n, r.ripples)))), _1: {ctor: "[]"}
                            }, _1: {ctor: "[]"}
                        }
                    }) : c)
                }), f = s(Wv, ju, {ctor: "::", _0: Uv("mdl-tabs__tab-bar"), _1: {ctor: "[]"}}, l(It, a, o));
                return p(bv, i, ju, {
                    ctor: "::",
                    _0: Uv("mdl-tabs"),
                    _1: {
                        ctor: "::",
                        _0: Uv("mdl-js-tabs"),
                        _1: {
                            ctor: "::",
                            _0: Uv("is-upgraded"),
                            _1: {
                                ctor: "::",
                                _0: l(Fv, _.ripple, Uv("mdl-js-ripple-effect")),
                                _1: {
                                    ctor: "::",
                                    _0: l(Fv, _.ripple, Uv("mdl-js-ripple-effect--ignore-events")),
                                    _1: {ctor: "[]"}
                                }
                            }
                        }
                    }
                }, {ctor: "[]"}, {
                    ctor: "::",
                    _0: f,
                    _1: {
                        ctor: "::",
                        _0: u({
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: M(_.activeTab), _1: l(ju, {ctor: "[]"}, c)},
                            _1: {ctor: "[]"}
                        }),
                        _1: {ctor: "[]"}
                    }
                })
            }), tw = s(ev, QT, $T, _v), rw = n(function (t, r) {
                return function (t) {
                    return {ctor: "Label", _0: t}
                }({ctor: "_Tuple2", _0: t, _1: r})
            }), nw = n(function (t, r) {
                return l(rw, t, {ctor: "::", _0: Eu(r), _1: {ctor: "[]"}})
            }), ew = function (t) {
                return s(k, n(function (t, r) {
                    return l(z["++"], t, r)
                }), "px", M(t))
            }, ow = (c(function (t, r, n, e) {
                return function (t) {
                    return l(z["++"], "rect(", l(z["++"], t, ")"))
                }(l(Sr, " ", l(bt, ew, {
                    ctor: "::",
                    _0: t,
                    _1: {ctor: "::", _0: r, _1: {ctor: "::", _0: n, _1: {ctor: "::", _0: e, _1: {ctor: "[]"}}}}
                })))
            }), h(fe, pb, Vo(vb), Vo(Ho(Wo(Wo(l(Uo, 1, vb))))), Vo(Ho(Wo(Wo(vb)))), Vo(Ho(Wo(Wo(l(Uo, 1, jo(Io)))))), Vo(Ho(Wo(Wo(l(Uo, 1, jo(Po)))))))),
            cw = (Nv(function (t) {
                return y.update(t, {ripple: !0})
            }), function (t) {
                return Nv(function (r) {
                    return y.update(r, {dropdown: {ctor: "::", _0: t, _1: r.dropdown}})
                })
            }), uw = (cw(Hb), cw(Pb)), iw = function (t) {
                return Nv(function (r) {
                    return y.update(r, {textfield: {ctor: "::", _0: t, _1: r.textfield}})
                })
            }, _w = function (t) {
                return iw(function (t) {
                    return Nv(n(function (t, r) {
                        return y.update(r, {value: $(t)})
                    })(t))
                }(t))
            }, aw = (iw(nb), iw(tb), iw(rb), {textfield: {ctor: "[]"}, dropdown: {ctor: "[]"}, ripple: !1}), fw = bb,
            lw = {dropdown: Nb, textfield: Qg, openOnFocus: !1}, sw = s(cv, function (t) {
                return t.select
            }, n(function (t, r) {
                return y.update(r, {select: t})
            }), lw), dw = sw._0, pw = sw._1, hw = (o(function (t, r, n) {
                return {dropdown: t, textfield: r, openOnFocus: n}
            }), o(function (t, r, n) {
                return {textfield: t, dropdown: r, ripple: n}
            }), function (t) {
                return {ctor: "MenuMsg", _0: t}
            }), vw = s(tv, iv, function (t) {
                return t.select
            }, function (t) {
                return t.dropdown.open ? Gi(function (t) {
                    return hw(l(Eb, Ub, t))
                }) : qn
            }), mw = o(function (t, r, n) {
                var e = r;
                switch (e.ctor) {
                    case"MenuMsg":
                        var o = s(Ib, function (r) {
                            return t(hw(r))
                        }, e._0, n.dropdown), c = o._0, u = o._1;
                        return l(Cn["!"], y.update(n, {dropdown: c}), {ctor: "::", _0: u, _1: {ctor: "[]"}});
                    case"TextfieldMsg":
                        var i = s(Vg, {ctor: "_Tuple0"}, e._0, n.textfield), _ = i._0, a = i._1;
                        return l(Cn["!"], y.update(n, {textfield: l(X, n.textfield, _)}), {
                            ctor: "::",
                            _0: a,
                            _1: {ctor: "[]"}
                        });
                    case"Click":
                        return l(Cn["!"], y.update(n, {openOnFocus: !0}), {ctor: "[]"});
                    case"Open":
                        var f = Db(e._0), d = s(Ib, function (r) {
                            return t(hw(r))
                        }, f, n.dropdown);
                        c = d._0, u = d._1;
                        return l(Cn["!"], y.update(n, {dropdown: c}), {ctor: "::", _0: u, _1: {ctor: "[]"}});
                    case"Focus":
                        if (n.openOnFocus) {
                            f = Db(e._0);
                            var p = s(Ib, function (r) {
                                return t(hw(r))
                            }, f, n.dropdown);
                            c = p._0, u = p._1;
                            return l(Cn["!"], y.update(n, {dropdown: c, openOnFocus: !1}), {
                                ctor: "::",
                                _0: u,
                                _1: {ctor: "[]"}
                            })
                        }
                        return l(Cn["!"], n, {ctor: "[]"});
                    case"Blur":
                        return l(Cn["!"], y.update(n, {openOnFocus: !1}), {ctor: "[]"});
                    default:
                        return l(Cn["!"], n, {ctor: "[]"})
                }
            }), gw = c(function (t, r, n, e) {
                return l(Qh, function (t) {
                    return $(s(pw, n, e, t))
                }, s(mw, t, r, l(dw, n, e)))
            }), bw = {ctor: "Blur"}, yw = {ctor: "Click"}, Tw = c(function (t, r, n, e) {
                var o = l(bt, function (t) {
                        return l(Tv, gb, t.options)
                    }, e), c = l(X, gg, l(Wr, -1, r.dropdown.ripples)), u = function (r) {
                        return t(hw(l(qb, -1, yb(r))))
                    }, i = l(Tv, aw, n), _ = i, a = i.config, f = a.dropdown, h = l(Tv, Kb, f).config,
                    v = l(Sb, r.dropdown, h.index), m = d($b, function (r) {
                        return t(hw(r))
                    }, r.dropdown, {ctor: "::", _0: Hb, _1: f}, e), g = Mt({
                        ctor: "::",
                        _0: a.textfield,
                        _1: {
                            ctor: "::", _0: {
                                ctor: "::",
                                _0: l(Lv, "keydown", l(pe, function (r) {
                                    return t(hw(r))
                                }, s(de, l(Cb, v, o), li, ow))),
                                _1: {
                                    ctor: "::",
                                    _0: l(Lv, "blur", ce(t(bw))),
                                    _1: {
                                        ctor: "::", _0: l(Lv, "input", l(pe, function (r) {
                                            return t(function (t) {
                                                return {ctor: "Input", _0: t}
                                            }(r))
                                        }, si)), _1: {
                                            ctor: "::", _0: l(Fv, a.ripple, l(Lv, "focus", l(pe, function (r) {
                                                return t(function (t) {
                                                    return {ctor: "Focus", _0: t}
                                                }(r))
                                            }, ow))), _1: {
                                                ctor: "::", _0: l(Fv, !a.ripple, l(Lv, "click", l(pe, function (r) {
                                                    return t(function (t) {
                                                        return {ctor: "Open", _0: t}
                                                    }(r))
                                                }, ow))), _1: {ctor: "[]"}
                                            }
                                        }
                                    }
                                }
                            }, _1: {ctor: "[]"}
                        }
                    }), b = (l(Tv, ib, g).config, {
                        ctor: "::",
                        _0: l(Cu, t, l(zg, "expand_more", {ctor: "[]"})),
                        _1: {
                            ctor: "::",
                            _0: d(lb, function (r) {
                                return t(function (t) {
                                    return {ctor: "TextfieldMsg", _0: t}
                                }(r))
                            }, r.textfield, g, {ctor: "[]"}),
                            _1: {
                                ctor: "::",
                                _0: d(Hv, ju, {
                                    ctor: "::",
                                    _0: Uv("mdl-select__trigger"),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Jv, "display", a.ripple ? "block" : "none"),
                                        _1: {ctor: "::", _0: l(Lv, "click", ce(t(yw))), _1: {ctor: "[]"}}
                                    }
                                }, {
                                    ctor: "::",
                                    _0: l(Bg, u, "mousedown"),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Bg, u, "touchstart"),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Sg, u, "mouseup"),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Sg, u, "mouseleave"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(Sg, u, "touchend"),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: l(Sg, u, "blur"),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: l(Ku, "onclick", "this.previousSibling.firstChild.focus()"),
                                                            _1: {ctor: "[]"}
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, {ctor: "::", _0: l(Cu, u, l(yg, {ctor: "[]"}, c)), _1: {ctor: "[]"}}),
                                _1: {ctor: "[]"}
                            }
                        }
                    });
                return p(bv, _, ju, {
                    ctor: "::",
                    _0: Uv("mdl-select"),
                    _1: {ctor: "::", _0: l(Fv, r.dropdown.open, Uv("mdl-js-ripple-effect")), _1: n}
                }, {ctor: "[]"}, l(z["++"], b, {ctor: "::", _0: m, _1: {ctor: "[]"}}))
            }), ww = s(ev, dw, Tw, iv), kw = function (t) {
                return function (t) {
                    return l(En, function (r) {
                        return t(lv(r))
                    }, Mn(Vy))
                }(t)
            }, xw = n(function (t, r) {
                return Ln({
                    ctor: "::",
                    _0: l(Xy, t, r.mdl),
                    _1: {ctor: "::", _0: l(dy, t, r.mdl), _1: {ctor: "::", _0: l(vw, t, r.mdl), _1: {ctor: "[]"}}}
                })
            }), Sw = o(function (t, r, n) {
                var e = r;
                switch (e.ctor) {
                    case"ButtonMsg":
                        return d(Wg, t, e._1, e._0, n);
                    case"TextfieldMsg":
                        return d($g, t, e._1, e._0, n);
                    case"MenuMsg":
                        var o = e._0;
                        return d(ly, function (r) {
                            return t(l(sv, o, r))
                        }, e._1, o, n);
                    case"LayoutMsg":
                        return s(zy, function (r) {
                            return t(lv(r))
                        }, e._0, n);
                    case"TogglesMsg":
                        return d(mT, t, e._1, e._0, n);
                    case"TooltipMsg":
                        return d(RT, t, e._1, e._0, n);
                    case"TabsMsg":
                        return d(KT, t, e._1, e._0, n);
                    case"SelectMsg":
                        var c = e._0;
                        return d(gw, function (r) {
                            return t(l(iv, c, r))
                        }, e._1, c, n);
                    default:
                        return {
                            ctor: "_Tuple2", _0: Z, _1: function (t) {
                                return On(l(bt, Ph, t))
                            }(e._0)
                        }
                }
            }), Mw = o(function (t, r, n) {
                return l(Qh, X(n), l(Qh, tt(function (t) {
                    return y.update(n, {mdl: t})
                }), s(Sw, t, r, n.mdl)))
            }), Nw = {
                button: rn,
                textfield: rn,
                menu: rn,
                snackbar: Z,
                layout: Py,
                toggles: rn,
                tooltip: rn,
                tabs: rn,
                select: rn
            }, Bw = (f(function (t, r, n, e, o, c, u, i, _) {
                return {
                    button: t,
                    textfield: r,
                    menu: n,
                    snackbar: e,
                    layout: o,
                    toggles: c,
                    tooltip: u,
                    tabs: i,
                    select: _
                }
            }), Av(l(Ku, "onclick", "var event = arguments[0] || window.event; event.stopPropagation();"))),
            Rw = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Title":
                        return l(zv, {ctor: "::", _0: Uv("mdl-card__title"), _1: r._0}, r._1);
                    case"Media":
                        return l(zv, {ctor: "::", _0: Uv("mdl-card__media"), _1: r._0}, r._1);
                    case"SupportingText":
                        return l(zv, {ctor: "::", _0: Uv("mdl-card__supporting-text"), _1: r._0}, r._1);
                    case"Actions":
                        return l(zv, {
                            ctor: "::",
                            _0: Uv("mdl-card__actions"),
                            _1: {ctor: "::", _0: Bw, _1: r._0}
                        }, r._1);
                    default:
                        return l(zv, {ctor: "::", _0: Uv("mdl-card__menu"), _1: {ctor: "::", _0: Bw, _1: r._0}}, r._1)
                }
            }, Ow = n(function (t, r) {
                return l(zv, {
                    ctor: "::",
                    _0: Pv(t),
                    _1: {ctor: "::", _0: Uv("mdl-card"), _1: {ctor: "::", _0: l(Jv, "min-height", "0px"), _1: {ctor: "[]"}}}
                }, l(bt, Rw, r))
            }), Aw = function (t) {
                return Gv({
                    ctor: "::",
                    _0: Uv("mdl-card__subtitle-text"),
                    _1: {ctor: "::", _0: l(Jv, "padding-top", "8px"), _1: t}
                })
            }, Cw = function (t) {
                return l(Wv, Du, {
                    ctor: "::",
                    _0: Uv("mdl-card__title-text"),
                    _1: {ctor: "::", _0: l(Jv, "align-self", "flex-start"), _1: t}
                })
            }, Ew = (Uv("mdl-card--expand"), Uv("mdl-card--border")), Lw = n(function (t, r) {
                return {ctor: "Actions", _0: t, _1: r}
            }), qw = n(function (t, r) {
                return {ctor: "SupportingText", _0: t, _1: r}
            }), Dw = (n(function (t, r) {
                return {ctor: "Media", _0: t, _1: r}
            }), n(function (t, r) {
                return {ctor: "Menu", _0: t, _1: r}
            })), Iw = (n(function (t, r) {
                return l(Dw, t, r)
            }), n(function (t, r) {
                return {ctor: "Title", _0: t, _1: r}
            })), Fw = n(function (t, r) {
                return l(Iw, {
                    ctor: "::",
                    _0: Pv(t),
                    _1: {
                        ctor: "::",
                        _0: l(Jv, "justify-content", "flex-end"),
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "flex-direction", "column"),
                            _1: {ctor: "::", _0: l(Jv, "align-items", "flex-start"), _1: {ctor: "[]"}}
                        }
                    }
                }, r)
            }), Pw = Iv, Jw = function (t) {
                return Uv(l(z["++"], "mdl-shadow--", l(z["++"], M(t), "dp")))
            }, jw = Jw(2), Uw = Jw(3), Hw = Jw(4), Ww = Jw(6), zw = Jw(8), Gw = Jw(16), Yw = Jw(24), Vw = (zt({
                ctor: "::",
                _0: {ctor: "_Tuple2", _0: Pw, _1: 0},
                _1: {
                    ctor: "::",
                    _0: {ctor: "_Tuple2", _0: jw, _1: 2},
                    _1: {
                        ctor: "::",
                        _0: {ctor: "_Tuple2", _0: Uw, _1: 3},
                        _1: {
                            ctor: "::",
                            _0: {ctor: "_Tuple2", _0: Hw, _1: 4},
                            _1: {
                                ctor: "::",
                                _0: {ctor: "_Tuple2", _0: Ww, _1: 6},
                                _1: {
                                    ctor: "::",
                                    _0: {ctor: "_Tuple2", _0: zw, _1: 8},
                                    _1: {
                                        ctor: "::",
                                        _0: {ctor: "_Tuple2", _0: Gw, _1: 16},
                                        _1: {ctor: "::", _0: {ctor: "_Tuple2", _0: Yw, _1: 24}, _1: {ctor: "[]"}}
                                    }
                                }
                            }
                        }
                    }
                }
            }), Uv("mdl-list__item-secondary-action"), function (t) {
                return Gv({ctor: "::", _0: Uv("mdl-list__item-secondary-content"), _1: t})
            }), Qw = (n(function (t, r) {
                return l(zg, t, {ctor: "::", _0: Uv("mdl-list__item-icon"), _1: r})
            }), Uv("mdl-list__item-avatar")), Xw = (n(function (t, r) {
                return d(Hv, Gu, {ctor: "::", _0: Qw, _1: r}, {ctor: "::", _0: ei(t), _1: {ctor: "[]"}}, {ctor: "[]"})
            }), n(function (t, r) {
                return l(zv, {
                    ctor: "::",
                    _0: jv,
                    _1: {ctor: "::", _0: Pv(r), _1: {ctor: "::", _0: Qw, _1: {ctor: "[]"}}}
                }, {ctor: "::", _0: Gg(t), _1: {ctor: "[]"}})
            }), function (t) {
                return Gv({ctor: "::", _0: Uv("mdl-list__item-primary-content"), _1: t})
            }), Zw = (Uv("mdl-list__item--two-line"), Uv("mdl-list__item--three-line"), function (t) {
                return l(Wv, Ju, {ctor: "::", _0: Uv("mdl-list__item"), _1: t})
            }), Kw = function (t) {
                return l(Wv, Pu, {ctor: "::", _0: Uv("mdl-list"), _1: t})
            }, $w = function (t) {
                return l(z["++"], M(t), "%")
            }, tk = c(function (t, r, n, e) {
                return l(zv, {
                    ctor: "::",
                    _0: Uv("mdl-progress mdl-js-progress is-upgraded"),
                    _1: {ctor: "::", _0: t ? Uv("mdl-progress__indeterminate") : Iv, _1: {ctor: "[]"}}
                }, {
                    ctor: "::",
                    _0: l(zv, {
                        ctor: "::",
                        _0: Uv("progressbar bar bar1"),
                        _1: {ctor: "::", _0: l(Jv, "width", $w(n)), _1: {ctor: "[]"}}
                    }, {ctor: "[]"}),
                    _1: {
                        ctor: "::",
                        _0: l(zv, {
                            ctor: "::",
                            _0: Uv("bufferbar bar bar2"),
                            _1: {ctor: "::", _0: l(Jv, "width", $w(e)), _1: {ctor: "[]"}}
                        }, {ctor: "[]"}),
                        _1: {
                            ctor: "::",
                            _0: l(zv, {
                                ctor: "::",
                                _0: Uv("auxbar bar bar3"),
                                _1: {ctor: "::", _0: l(Jv, "width", $w(r ? 100 - e : 0)), _1: {ctor: "[]"}}
                            }, {ctor: "[]"}),
                            _1: {ctor: "[]"}
                        }
                    }
                })
            }), rk = (n(function (t, r) {
                return d(tk, !1, !0, t, r)
            }), d(tk, !0, !1, 0, 100)), nk = o(function (t, r, n) {
                return eh({
                    base: t,
                    segments: {
                        ctor: "::",
                        _0: "student",
                        _1: {ctor: "::", _0: "details", _1: {ctor: "::", _0: r, _1: {ctor: "[]"}}}
                    },
                    options: l(mn, "login", n)
                })
            }), ek = n(function (t, r) {
                return eh({
                    base: t,
                    segments: {
                        ctor: "::",
                        _0: "me",
                        _1: {ctor: "::", _0: "details", _1: {ctor: "::", _0: r, _1: {ctor: "[]"}}}
                    },
                    options: rn
                })
            }), ok = o(function (t, r, n) {
                var e = s(nd, l(ek, t, r), function (n) {
                    return s(nk, t, r, n)
                }, n);
                return l(Zp, e, l(op, sp, ve(dp)))
            }), ck = n(function (t, r) {
                return eh({
                    base: t,
                    segments: {ctor: "::", _0: "me", _1: {ctor: "::", _0: r, _1: {ctor: "[]"}}},
                    options: rn
                })
            }), uk = o(function (t, r, n) {
                return eh({
                    base: t,
                    segments: {ctor: "::", _0: "student", _1: {ctor: "::", _0: r, _1: {ctor: "[]"}}},
                    options: l(mn, "login", n)
                })
            }), ik = o(function (t, r, n) {
                var e = s(nd, l(ck, t, r), function (n) {
                    return s(uk, t, r, n)
                }, n);
                return l(Zp, e, Tp)
            }), _k = wn({
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: "C1",
                    _1: "nested conditonal branchings with a depth of 3 or more should be avoided and an if block should not contain more than 3 branchings"
                },
                _1: {
                    ctor: "::", _0: {ctor: "_Tuple2", _0: "C3", _1: "GOTO keyword is not allowed"}, _1: {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "F2",
                            _1: "function should be in english, according to the snake_case convention"
                        },
                        _1: {
                            ctor: "::", _0: {ctor: "_Tuple2", _0: "F3", _1: "too long line"}, _1: {
                                ctor: "::", _0: {ctor: "_Tuple2", _0: "F4", _1: "too long function"}, _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "F5",
                                        _1: "a function should not need more than 4 arguments and taking no parameters should take void as argument in the function declaration"
                                    },
                                    _1: {
                                        ctor: "::", _0: {ctor: "_Tuple2", _0: "F6", _1: "comment inside function"}, _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "G1",
                                                _1: "you must start your source code with a correctly formatted Epitech standard header"
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "G2",
                                                    _1: "one and only one empty line should separate the implementations of functions"
                                                },
                                                _1: {
                                                    ctor: "::",
                                                    _0: {ctor: "_Tuple2", _0: "G4", _1: "global variable must be const"},
                                                    _1: {
                                                        ctor: "::",
                                                        _0: {
                                                            ctor: "_Tuple2",
                                                            _0: "H1",
                                                            _1: "bad separation between source file and header file"
                                                        },
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {
                                                                ctor: "_Tuple2",
                                                                _0: "L1",
                                                                _1: "multiple statements on the same line"
                                                            },
                                                            _1: {
                                                                ctor: "::",
                                                                _0: {
                                                                    ctor: "_Tuple2",
                                                                    _0: "L2",
                                                                    _1: "bad indentation on start of a line"
                                                                },
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: {
                                                                        ctor: "_Tuple2",
                                                                        _0: "L3",
                                                                        _1: "misplaced space(s)"
                                                                    },
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: {
                                                                            ctor: "_Tuple2",
                                                                            _0: "L4",
                                                                            _1: "curly brackets misplaced"
                                                                        },
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: {
                                                                                ctor: "_Tuple2",
                                                                                _0: "O1",
                                                                                _1: "content of the delivery folder should contain only files required for compilation"
                                                                            },
                                                                            _1: {
                                                                                ctor: "::",
                                                                                _0: {
                                                                                    ctor: "_Tuple2",
                                                                                    _0: "O2",
                                                                                    _1: "incorrect file extension"
                                                                                },
                                                                                _1: {
                                                                                    ctor: "::",
                                                                                    _0: {
                                                                                        ctor: "_Tuple2",
                                                                                        _0: "O3",
                                                                                        _1: "more than 5 functions in a single file"
                                                                                    },
                                                                                    _1: {
                                                                                        ctor: "::",
                                                                                        _0: {
                                                                                            ctor: "_Tuple2",
                                                                                            _0: "O4",
                                                                                            _1: "your file name must follow the snake_case (for c) or camelCase (for cpp) convention, be clear, precise, explicit, and unambiguous"
                                                                                        },
                                                                                        _1: {
                                                                                            ctor: "::",
                                                                                            _0: {
                                                                                                ctor: "_Tuple2",
                                                                                                _0: "implicit_F001",
                                                                                                _1: "\\r (CR) detected in isolation"
                                                                                            },
                                                                                            _1: {
                                                                                                ctor: "::",
                                                                                                _0: {
                                                                                                    ctor: "_Tuple2",
                                                                                                    _0: "implicit_F002",
                                                                                                    _1: "invalid filename or directory"
                                                                                                },
                                                                                                _1: {
                                                                                                    ctor: "::",
                                                                                                    _0: {
                                                                                                        ctor: "_Tuple2",
                                                                                                        _0: "implicit_L001",
                                                                                                        _1: "trailing space"
                                                                                                    },
                                                                                                    _1: {
                                                                                                        ctor: "::",
                                                                                                        _0: {
                                                                                                            ctor: "_Tuple2",
                                                                                                            _0: "implicit_L003",
                                                                                                            _1: "leading or trailing empty lines"
                                                                                                        },
                                                                                                        _1: {
                                                                                                            ctor: "::",
                                                                                                            _0: {
                                                                                                                ctor: "_Tuple2",
                                                                                                                _0: "implicit_T001",
                                                                                                                _1: "one-line comment have forced continuation"
                                                                                                            },
                                                                                                            _1: {
                                                                                                                ctor: "::",
                                                                                                                _0: {
                                                                                                                    ctor: "_Tuple2",
                                                                                                                    _0: "implicit_T002",
                                                                                                                    _1: "reserved name used for macro"
                                                                                                                },
                                                                                                                _1: {
                                                                                                                    ctor: "::",
                                                                                                                    _0: {
                                                                                                                        ctor: "_Tuple2",
                                                                                                                        _0: "implicit_T005",
                                                                                                                        _1: "keyword not immediately followed by a semicolon"
                                                                                                                    },
                                                                                                                    _1: {
                                                                                                                        ctor: "::",
                                                                                                                        _0: {
                                                                                                                            ctor: "_Tuple2",
                                                                                                                            _0: "implicit_T007",
                                                                                                                            _1: "semicolon is isolated from other tokens"
                                                                                                                        },
                                                                                                                        _1: {
                                                                                                                            ctor: "::",
                                                                                                                            _0: {
                                                                                                                                ctor: "_Tuple2",
                                                                                                                                _0: "implicit_T010",
                                                                                                                                _1: "identifier should not be composed of only 'l' (L lowercase) or 'O' (o uppercase) because this would make them visually similar to numeric literals."
                                                                                                                            },
                                                                                                                            _1: {
                                                                                                                                ctor: "::",
                                                                                                                                _0: {
                                                                                                                                    ctor: "_Tuple2",
                                                                                                                                    _0: "implicit_T012",
                                                                                                                                    _1: "negation operator used in its short form"
                                                                                                                                },
                                                                                                                                _1: {ctor: "[]"}
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }), ak = "Crashed", fk = "One or more tests have crashed!", lk = "Failed or skipped", sk = "Passed",
            dk = "Total", pk = "Click button to see more", hk = "Banned functions", vk = "Coverage", mk = "Branches",
            gk = "Lines", bk = "Delivery errors", yk = "Details", Tk = "Score", wk = "Major", kk = "Minor", xk = "Info",
            Sk = "Make log", Mk = "No details to show", Nk = "Coding style", Bk = "Details log",
            Rk = "Banned function used", Ok = "Too many style errors", Ak = "Crash", Ck = "Delivery error",
            Ek = "Build error", Lk = "Mandatory test failed", qk = "Too many style errors", Dk = "No tests passed",
            Ik = "Functional", Fk = "all", Pk = "Invalid ID", Jk = "Log in", jk = "No results",
            Uk = "Error while processing request", Hk = "unknown", Wk = "my.epitech.eu",
            zk = (f(function (t, r, n, e, o, c, u, i, _) {
                return {
                    banned: t,
                    codingStyle: r,
                    crash: n,
                    deliveryError: e,
                    makeError: o,
                    mandatoryTestFailed: c,
                    normFlag: u,
                    noTestPassed: i,
                    passed: _
                }
            }), i(function (t, r, n, e, o, c) {
                return {crashed: t, crashedMessage: r, details: n, failed: e, passed: o, total: c}
            }), l(Jn, function (t) {
                return t.displayedLintRules
            }, n(function (t, r) {
                return y.update(r, {displayedLintRules: t})
            }))), Gk = l(Jn, function (t) {
                return t.selectedError
            }, n(function (t, r) {
                return y.update(r, {selectedError: t})
            })), Yk = l(Jn, function (t) {
                return t.details
            }, n(function (t, r) {
                return y.update(r, {details: t})
            })), Vk = l(Qn["=>"], Yn(Yk), Vn), Qk = l(Qn["=|>"], Vk, l(Jn, function (t) {
                return t.testRun
            }, n(function (t, r) {
                return y.update(r, {testRun: t})
            }))), Xk = (l(Qn["=|>"], Qk, tp), l(Qn["=>"], Qk, $d), l(Qn["=|>"], Vk, l(Jn, function (t) {
                return t.name
            }, n(function (t, r) {
                return y.update(r, {name: t})
            })))), Zk = l(Qn["=|>"], Vk, l(Jn, function (t) {
                return t.moduleCode
            }, n(function (t, r) {
                return y.update(r, {moduleCode: t})
            }))), Kk = l(Qn["=|>"], Vk, l(Jn, function (t) {
                return t.uid
            }, n(function (t, r) {
                return y.update(r, {uid: t})
            }))), $k = c(function (t, r, n, e) {
                return {mdl: t, details: r, selectedError: n, displayedLintRules: e}
            }), tx = c(function (t, r, n, e) {
                return {uid: t, name: r, testRun: n, moduleCode: e}
            }), rx = {ctor: "DisplayLintRules"}, nx = function (t) {
                return {ctor: "Mdl", _0: t}
            }, ex = function (t) {
                var r = l(bt, function (t) {
                        return t.type_
                    }, t), n = function (t) {
                        return l(pt, xd(t), r)
                    }, e = n(Bd) ? l(z["++"], qk, ", ") : "", o = n(Od) ? l(z["++"], Rk, ", ") : "", c = n(Cd), u = n(Ad),
                    i = n(Nd), _ = n(Md), a = n(Sd), f = n(Rd),
                    s = c ? Ck : u ? Ek : i ? Dk : _ ? Lk : a ? Ak : f ? Ok : Ik;
                return l(z["++"], e, l(z["++"], o, s))
            }, ox = l(Jn, function (t) {
                return t.loading
            }, n(function (t, r) {
                return y.update(r, {loading: t})
            })), cx = l(Jn, function (t) {
                return t.error
            }, n(function (t, r) {
                return y.update(r, {error: t})
            })), ux = l(Jn, function (t) {
                return t.mainMenu
            }, n(function (t, r) {
                return y.update(r, {mainMenu: t})
            })), ix = l(Jn, function (t) {
                return t.detailsModel
            }, n(function (t, r) {
                return y.update(r, {detailsModel: t})
            })), _x = l(Qn["<|>"], ix, Yk),
            ax = (l(Qn["=>"], Yn(ix), Qk), l(Qn["<|>"], ix, Gk), l(Qn["=>"], Yn(ix), Xk), l(Qn["=>"], Yn(ix), Kk)),
            fx = function (t) {
                var r = l(X, Fk, l(Pt, t.mainMenu.selectedProject, t.mainMenu.projects)),
                    n = l(X, Fk, l(Pt, t.mainMenu.selectedModule, t.mainMenu.modules));
                return {
                    ctor: "_Tuple5",
                    _0: t.mainMenu.selectedYear,
                    _1: n,
                    _2: r,
                    _3: ax.getOption(t),
                    _4: t.studentLogin
                }
            }, lx = l(Jn, function (t) {
                return t.studentLogin
            }, n(function (t, r) {
                return y.update(r, {studentLogin: t})
            })), sx = l(Jn, function (t) {
                return t.studentFullRecord
            }, n(function (t, r) {
                return y.update(r, {studentFullRecord: t})
            })), dx = l(Jn, function (t) {
                return t.currentYear
            }, n(function (t, r) {
                return y.update(r, {currentYear: t})
            })), px = (l(Jn, function (t) {
                return t.pathname
            }, n(function (t, r) {
                return y.update(r, {pathname: t})
            })), l(Jn, function (t) {
                return t.apiEndpoint
            }, n(function (t, r) {
                return y.update(r, {apiEndpoint: t})
            })), l(Jn, function (t) {
                return t.date
            }, n(function (t, r) {
                return y.update(r, {date: t})
            }))), hx = l(Jn, function (t) {
                return t.auth
            }, n(function (t, r) {
                return y.update(r, {auth: t})
            })), vx = l(Jn, function (t) {
                return t.projects
            }, n(function (t, r) {
                return y.update(r, {projects: t})
            })), mx = l(Qn["<|>"], ux, vx), gx = l(Jn, function (t) {
                return t.modules
            }, n(function (t, r) {
                return y.update(r, {modules: t})
            })), bx = l(Qn["<|>"], ux, gx), yx = l(Jn, function (t) {
                return t.years
            }, n(function (t, r) {
                return y.update(r, {years: t})
            })), Tx = l(Qn["<|>"], ux, yx), wx = l(Jn, function (t) {
                return t.selectedProject
            }, n(function (t, r) {
                return y.update(r, {selectedProject: t})
            })), kx = l(Qn["<|>"], ux, wx), xx = l(Jn, function (t) {
                return t.selectedModule
            }, n(function (t, r) {
                return y.update(r, {selectedModule: t})
            })), Sx = l(Qn["<|>"], ux, xx), Mx = l(Jn, function (t) {
                return t.selectedYear
            }, n(function (t, r) {
                return y.update(r, {selectedYear: t})
            })), Nx = l(Qn["<|>"], ux, Mx), Bx = (i(function (t, r, n, e, o, c) {
                return {seed: t, authorizeUrl: r, redirectUrl: n, clientID: e, renewalUrl: o, apiEndpoint: c}
            }), i(function (t, r, n, e, o, c) {
                return {selectedYear: t, selectedModule: r, selectedProject: n, years: e, modules: o, projects: c}
            }), function (t) {
                return {ctor: "DetailsMsg", _0: t}
            }), Rx = function (t) {
                return {ctor: "ExecuteCallback", _0: t}
            }, Ox = function (t) {
                return {ctor: "WithToken", _0: t}
            }, Ax = n(function (t, r) {
                return {ctor: "ReceiveDate", _0: t, _1: r}
            }), Cx = function (t) {
                return {ctor: "SelectProject", _0: t}
            }, Ex = function (t) {
                return {ctor: "SelectModule", _0: t}
            }, Lx = function (t) {
                return {ctor: "UpdateAuth", _0: t}
            }, qx = function (t) {
                return {ctor: "Mdl", _0: t}
            }, Dx = u(function (t, r, n, e, o) {
                return {ctor: "Details", _0: t, _1: r, _2: n, _3: e, _4: o}
            }), Ix = c(function (t, r, n, e) {
                return {ctor: "Master", _0: t, _1: r, _2: n, _3: e}
            }), Fx = o(function (t, r, n) {
                return l(zv, {ctor: "[]"}, {
                    ctor: "::",
                    _0: p(Hg, qx, {ctor: "::", _0: r, _1: {ctor: "[]"}}, t.mdl, {
                        ctor: "::",
                        _0: qg,
                        _1: {
                            ctor: "::", _0: Pg, _1: {
                                ctor: "::", _0: Jg(n), _1: {
                                    ctor: "::", _0: Dv(function (t) {
                                        return l(ti, "target", t)
                                    }("_blank")), _1: {ctor: "[]"}
                                }
                            }
                        }
                    }, {ctor: "::", _0: Gg("live_help"), _1: {ctor: "[]"}}),
                    _1: {ctor: "[]"}
                })
            }), Px = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Mdl":
                        return l(Mw, nx, r._0);
                    case"SelectError":
                        return sg(Gk.set($(r._0)));
                    default:
                        return function (t) {
                            return l(Cn["!"], l(zk.set, !zk.get(t), t), {ctor: "[]"})
                        }
                }
            }, Jx = function () {
                var t = {mdl: Nw, selectedError: Z, details: Z, displayedLintRules: !1};
                return l(Cn["!"], t, {ctor: "::", _0: kw(nx), _1: {ctor: "[]"}})
            }(), jx = o(function (t, r, n) {
                return l(zv, {
                    ctor: "::",
                    _0: zm,
                    _1: {
                        ctor: "::",
                        _0: l(Jv, "max-width", t),
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "max-height", r),
                            _1: {
                                ctor: "::",
                                _0: l(Jv, "width", "100%"),
                                _1: {ctor: "::", _0: l(Jv, "height", "100%"), _1: {ctor: "[]"}}
                            }
                        }
                    }
                }, n)
            }), Ux = n(function (t, r) {
                return s(jx, "200px", "200px", {ctor: "::", _0: s(rg, ng, t, r), _1: {ctor: "[]"}})
            }), Hx = n(function (t, r) {
                return s(jx, "200px", "200px", l(Qm, t, r))
            }), Wx = n(function (t, r) {
                var n = function (t) {
                    return Gd({ctor: "_Tuple2", _0: Yd(t), _1: dt(t)})
                }(t);
                return s(jx, "400px", "100px", l(Qm, n, r))
            }), zx = o(function (t, r, e) {
                var o = n(function (t, r) {
                    return l(Zw, {ctor: "[]"}, {
                        ctor: "::",
                        _0: l(Xw, {ctor: "[]"}, {ctor: "::", _0: Eu(t), _1: {ctor: "[]"}}),
                        _1: {
                            ctor: "::",
                            _0: l(Vw, {ctor: "[]"}, {ctor: "::", _0: Eu(r), _1: {ctor: "[]"}}),
                            _1: {ctor: "[]"}
                        }
                    })
                });
                return {
                    ctor: "::",
                    _0: l(o, wk, t),
                    _1: {ctor: "::", _0: l(o, kk, r), _1: {ctor: "::", _0: l(o, xk, e), _1: {ctor: "[]"}}}
                }
            }), Gx = l(zv, {
                ctor: "::",
                _0: l(Jv, "display", "flex"),
                _1: {ctor: "::", _0: l(Jv, "min-height", "50vh"), _1: {ctor: "[]"}}
            }, {
                ctor: "::",
                _0: l(zv, {
                    ctor: "::",
                    _0: jv,
                    _1: {ctor: "::", _0: l(Jv, "margin", "auto"), _1: {ctor: "[]"}}
                }, {ctor: "::", _0: rk, _1: {ctor: "[]"}}),
                _1: {ctor: "[]"}
            }), Yx = function (t) {
                return l(zv, {
                    ctor: "::",
                    _0: l(Jv, "display", "flex"),
                    _1: {ctor: "::", _0: l(Jv, "min-height", "50vh"), _1: {ctor: "[]"}}
                }, {
                    ctor: "::",
                    _0: l(zv, {
                        ctor: "::",
                        _0: Yv(vm),
                        _1: {
                            ctor: "::",
                            _0: Rm(.3),
                            _1: {
                                ctor: "::",
                                _0: Bm,
                                _1: {ctor: "::", _0: Em, _1: {ctor: "::", _0: l(Jv, "margin", "auto"), _1: {ctor: "[]"}}}
                            }
                        }
                    }, {ctor: "::", _0: Eu(t), _1: {ctor: "[]"}}),
                    _1: {ctor: "[]"}
                })
            }, Vx = {
                ctor: "::",
                _0: jw,
                _1: {ctor: "::", _0: Uv("project-cell"), _1: {ctor: "::", _0: zm, _1: {ctor: "[]"}}}
            }, Qx = function (t) {
                return l(zv, {
                    ctor: "::",
                    _0: jm,
                    _1: {
                        ctor: "::",
                        _0: jv,
                        _1: {ctor: "::", _0: Lm, _1: {ctor: "::", _0: l(Jv, "margin-bottom", "2%"), _1: {ctor: "[]"}}}
                    }
                }, {ctor: "::", _0: Eu(t), _1: {ctor: "[]"}})
            }, Xx = n(function (t, r) {
                return l(zv, {ctor: "::", _0: Am, _1: {ctor: "::", _0: Dm, _1: {ctor: "[]"}}}, {
                    ctor: "::",
                    _0: Eu(t),
                    _1: {ctor: "::", _0: Gg("keyboard_arrow_right"), _1: {ctor: "::", _0: Eu(r), _1: {ctor: "[]"}}}
                })
            }), Zx = o(function (t, r, n) {
                var e = y.eq($(r), t.selectedError) ? {ctor: "::", _0: Fg, _1: {ctor: "[]"}} : {ctor: "[]"},
                    o = l(z["++"], {
                        ctor: "::",
                        _0: Ig,
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "width", "100%"),
                            _1: {
                                ctor: "::", _0: Pm, _1: {
                                    ctor: "::", _0: qv(function (t) {
                                        return {ctor: "SelectError", _0: t}
                                    }(r)), _1: {ctor: "[]"}
                                }
                            }
                        }
                    }, e);
                return l(Sm, {ctor: "::", _0: zm, _1: {ctor: "[]"}}, {
                    ctor: "::",
                    _0: p(Hg, nx, {ctor: "::", _0: 0, _1: {ctor: "::", _0: 1, _1: {ctor: "[]"}}}, t.mdl, o, {
                        ctor: "::",
                        _0: Eu(n),
                        _1: {ctor: "::", _0: Gg("keyboard_arrow_right"), _1: {ctor: "[]"}}
                    }),
                    _1: {ctor: "[]"}
                })
            }), Kx = n(function (t, r) {
                return l(K, function (t) {
                    return s(sd, function (t) {
                        return t.type_
                    }, r, t.externalItems)
                }, t)
            }), $x = n(function (t, r) {
                var n = l(Kx, t, r);
                return {
                    ctor: "_Tuple2", _0: n, _1: l(X, "-", l(K, function (t) {
                        return t.comment
                    }, n))
                }
            }), tS = n(function (t, r) {
                var e = o(function (t, r, n) {
                    return l(z["++"], n, {ctor: "::", _0: l(Xx, t, M(r)), _1: {ctor: "[]"}})
                }), c = o(function (t, r, e) {
                    return l(z["++"], e, {
                        ctor: "::", _0: l(Xx, t, s(st, n(function (t, r) {
                            return l(z["++"], r, l(z["++"], t, "\n"))
                        }), "", r)), _1: {ctor: "[]"}
                    })
                }), u = l(X, {ctor: "[]"}, l(tt, function (t) {
                    var n = t;
                    return "DeliveryStyleReport" === n.ctor ? s(Pr, c, {ctor: "[]"}, l(X, rn, l(Wr, r, n._0))) : s(Pr, e, {ctor: "[]"}, l(X, rn, l(Wr, r, n._0)))
                }, l(K, function (t) {
                    return t.codingStyle
                }, t)));
                return l(zv, {ctor: "::", _0: l(Jv, "width", "100%"), _1: {ctor: "[]"}}, {
                    ctor: "::",
                    _0: l(zv, {
                        ctor: "::",
                        _0: l(Jv, "white-space", "pre"),
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "max-height", "15vh"),
                            _1: {
                                ctor: "::",
                                _0: l(Jv, "overflow", "auto"),
                                _1: {ctor: "::", _0: l(Jv, "padding-top", "1em"), _1: {ctor: "[]"}}
                            }
                        }
                    }, u),
                    _1: {ctor: "[]"}
                })
            }), rS = n(function (t, r) {
                return l(X, 0, l(tt, function (t) {
                    var e = t;
                    return "DeliveryStyleReport" === e.ctor ? s(st, n(function (t, r) {
                        return t + r
                    }), 0, l(bt, dt, Ir(l(X, rn, l(Wr, r, e._0))))) : s(st, n(function (t, r) {
                        return t + r
                    }), 0, Ir(l(X, rn, l(Wr, r, e._0))))
                }, l(K, function (t) {
                    return t.codingStyle
                }, t)))
            }), nS = function (t) {
                var r = t, n = r._1;
                return s(nd, {ctor: "_Tuple2", _0: 0, _1: n}, function (t) {
                    return {ctor: "_Tuple2", _0: t.value, _1: n}
                }, r._0)
            }, eS = n(function (t, r) {
                return y.eq(r, 0) ? l(zv, {ctor: "[]"}, {ctor: "[]"}) : l(zv, {ctor: "[]"}, {
                    ctor: "::",
                    _0: l(zg, "warning", {
                        ctor: "::",
                        _0: l(DT, nx, {ctor: "::", _0: 0, _1: {ctor: "[]"}}),
                        _1: {ctor: "::", _0: Yv(l(dm, Kv, lm)), _1: {ctor: "[]"}}
                    }),
                    _1: {
                        ctor: "::",
                        _0: p(jT, nx, {ctor: "::", _0: 0, _1: {ctor: "[]"}}, t.mdl, {ctor: "[]"}, {
                            ctor: "::",
                            _0: Eu(fk),
                            _1: {ctor: "[]"}
                        }),
                        _1: {ctor: "[]"}
                    }
                })
            }), oS = c(function (t, r, e, o) {
                var c = n(function (t, r) {
                    return l(z["++"], t, l(z["++"], ": ", M(r)))
                });
                return l(zv, {ctor: "[]"}, {
                    ctor: "::",
                    _0: l(zv, {ctor: "[]"}, {ctor: "::", _0: Eu(l(c, dk, t)), _1: {ctor: "[]"}}),
                    _1: {
                        ctor: "::",
                        _0: l(zv, {ctor: "[]"}, {ctor: "::", _0: Eu(l(c, sk, r)), _1: {ctor: "[]"}}),
                        _1: {
                            ctor: "::",
                            _0: l(zv, {ctor: "[]"}, {ctor: "::", _0: Eu(l(c, ak, e)), _1: {ctor: "[]"}}),
                            _1: {
                                ctor: "::",
                                _0: l(zv, {ctor: "[]"}, {ctor: "::", _0: Eu(l(c, lk, o)), _1: {ctor: "[]"}}),
                                _1: {ctor: "[]"}
                            }
                        }
                    }
                })
            }), cS = n(function (t, r) {
                var n = r.breakdown, e = r.name;
                return {
                    ctor: "::",
                    _0: l(Sm, {ctor: "::", _0: s(Wm, 4, 8, 4), _1: {ctor: "[]"}}, {
                        ctor: "::",
                        _0: Qx(e),
                        _1: {
                            ctor: "::",
                            _0: l(Tm, {ctor: "::", _0: jv, _1: {ctor: "[]"}}, {
                                ctor: "::",
                                _0: l(Sm, {ctor: "::", _0: Gm, _1: {ctor: "[]"}}, {
                                    ctor: "::", _0: function (t) {
                                        var r = y.cmp(t.count, 0) > 0 ? 100 * R(t.passed) / R(t.count) : 100;
                                        return s(jx, "400px", "100px", l(Qm, r, sk))
                                    }(n), _1: {ctor: "::", _0: l(eS, t, n.crashed), _1: {ctor: "[]"}}
                                }),
                                _1: {ctor: "[]"}
                            }),
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(Sm, {ctor: "::", _0: s(Wm, 8, 8, 4), _1: {ctor: "[]"}}, {
                            ctor: "::",
                            _0: d(oS, n.count, n.passed, n.crashed, n.count - n.passed - n.crashed),
                            _1: {ctor: "[]"}
                        }),
                        _1: {ctor: "[]"}
                    }
                }
            }), uS = n(function (t, r) {
                var n = dt(l(yt, function (t) {
                    return y.eq(t.crashed, !0)
                }, r.tests)), e = dt(l(yt, function (t) {
                    return y.eq(t.passed, !0)
                }, r.tests)), o = dt(r.tests), c = o - e - n;
                return {
                    ctor: "::",
                    _0: l(Sm, {ctor: "::", _0: s(Wm, 4, 8, 4), _1: {ctor: "[]"}}, {
                        ctor: "::",
                        _0: Qx(r.name),
                        _1: {
                            ctor: "::",
                            _0: l(Tm, {ctor: "::", _0: jv, _1: {ctor: "[]"}}, {
                                ctor: "::",
                                _0: l(Sm, {ctor: "::", _0: Gm, _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: l(Wx, r.tests, sk),
                                    _1: {
                                        ctor: "::",
                                        _0: l(zu, {ctor: "[]"}, {ctor: "[]"}),
                                        _1: {
                                            ctor: "::",
                                            _0: l(zv, {
                                                ctor: "::",
                                                _0: Dm,
                                                _1: {ctor: "::", _0: Pm, _1: {ctor: "[]"}}
                                            }, {
                                                ctor: "::",
                                                _0: d(oS, o, e, n, c),
                                                _1: {ctor: "::", _0: l(eS, t, n), _1: {ctor: "[]"}}
                                            }),
                                            _1: {ctor: "[]"}
                                        }
                                    }
                                }),
                                _1: {ctor: "[]"}
                            }),
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(Sm, {ctor: "::", _0: s(Wm, 8, 8, 4), _1: {ctor: "[]"}}, {
                            ctor: "::",
                            _0: l(zv, {
                                ctor: "::",
                                _0: l(Jv, "max-height", "20vh"),
                                _1: {ctor: "::", _0: l(Jv, "overflow", "auto"), _1: {ctor: "::", _0: zm, _1: {ctor: "[]"}}}
                            }, l(bt, function (t) {
                                return l(Xx, t.name, l(X, "-", t.comment))
                            }, r.tests)),
                            _1: {ctor: "[]"}
                        }),
                        _1: {ctor: "[]"}
                    }
                }
            }), iS = n(function (t, r) {
                var n = function () {
                    var n = r;
                    return "Detailed" === n.ctor ? l(uS, t, n._0) : l(cS, t, n._0)
                }();
                return l(Sm, Vx, {
                    ctor: "::",
                    _0: l(Tm, {ctor: "::", _0: Dm, _1: {ctor: "::", _0: Uv("skill-cell"), _1: {ctor: "[]"}}}, n),
                    _1: {ctor: "[]"}
                })
            }), _S = n(function (t, r) {
                var e = n(function (t, r) {
                        return l(z["++"], t, l(z["++"], "\n", r))
                    }), o = nS(l($x, t, kd(Pd))), c = (o._0, o._1), u = nS(l($x, t, kd(Id))), i = u._0, _ = u._1,
                    a = nS(l($x, t, kd(Fd))), f = a._0, d = a._1;
                return l(Sm, Vx, {
                    ctor: "::",
                    _0: l(Tm, {ctor: "::", _0: Dm, _1: {ctor: "[]"}}, {
                        ctor: "::",
                        _0: l(Sm, {ctor: "::", _0: s(Wm, 4, 8, 4), _1: {ctor: "[]"}}, {
                            ctor: "::",
                            _0: Qx(vk),
                            _1: {
                                ctor: "::",
                                _0: l(Tm, {ctor: "[]"}, {
                                    ctor: "::",
                                    _0: l(Sm, {
                                        ctor: "::",
                                        _0: Gm,
                                        _1: {ctor: "::", _0: jv, _1: {ctor: "::", _0: Uv("coverage-bar"), _1: {ctor: "[]"}}}
                                    }, {ctor: "::", _0: l(Hx, f, l(e, mk, d)), _1: {ctor: "[]"}}),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Sm, {
                                            ctor: "::",
                                            _0: Gm,
                                            _1: {
                                                ctor: "::",
                                                _0: jv,
                                                _1: {ctor: "::", _0: Uv("coverage-bar"), _1: {ctor: "[]"}}
                                            }
                                        }, {ctor: "::", _0: l(Hx, i, l(e, gk, _)), _1: {ctor: "[]"}}),
                                        _1: {ctor: "[]"}
                                    }
                                }),
                                _1: {ctor: "[]"}
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(Sm, {
                                ctor: "::",
                                _0: s(Wm, 8, 8, 4),
                                _1: {ctor: "::", _0: jv, _1: {ctor: "::", _0: qm, _1: {ctor: "[]"}}}
                            }, {
                                ctor: "::",
                                _0: l(zv, {ctor: "::", _0: l(Jv, "width", "100%"), _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: Qx(yk),
                                    _1: {
                                        ctor: "::",
                                        _0: l(zv, {
                                            ctor: "::",
                                            _0: Uv("coverage-details"),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Jv, "white-space", "pre"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(Jv, "max-height", "25vh"),
                                                    _1: {ctor: "::", _0: l(Jv, "overflow", "auto"), _1: {ctor: "[]"}}
                                                }
                                            }
                                        }, {ctor: "::", _0: Eu(c), _1: {ctor: "[]"}}),
                                        _1: {ctor: "[]"}
                                    }
                                }),
                                _1: {ctor: "[]"}
                            }),
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {ctor: "[]"}
                })
            }), aS = n(function (t, r) {
                var e = function (t) {
                    return l(Nt, Dr, Ir(t))
                }, c = l(X, {ctor: "[]"}, l(tt, function (t) {
                    var r = t;
                    return r.ctor, e(r._0)
                }, l(K, function (t) {
                    return t.codingStyle
                }, r))), u = s(qr, o(function (t, r, n) {
                    return {ctor: "::", _0: l(Xx, t, r), _1: n}
                }), {ctor: "[]"}, l(bn, n(function (t, r) {
                    return l(pt, t, c)
                }), _k));
                return y.eq(t.displayedLintRules, !1) ? l(zv, {ctor: "[]"}, {ctor: "[]"}) : l(zv, {ctor: "[]"}, u)
            }), fS = n(function (t, r) {
                return l(Sm, Vx, {
                    ctor: "::",
                    _0: l(Tm, {ctor: "::", _0: Uv("lint-details"), _1: {ctor: "::", _0: Dm, _1: {ctor: "[]"}}}, {
                        ctor: "::",
                        _0: l(Sm, {ctor: "::", _0: s(Wm, 2, 7, 3), _1: {ctor: "[]"}}, {
                            ctor: "::",
                            _0: Qx(Nk),
                            _1: {
                                ctor: "::",
                                _0: l(Kw, {ctor: "[]"}, s(zx, M(l(rS, r, "major")), M(l(rS, r, "minor")), M(l(rS, r, "info")))),
                                _1: {ctor: "[]"}
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: function (t) {
                                return l(Sm, {
                                    ctor: "::",
                                    _0: s(Wm, 1, 1, 1),
                                    _1: {ctor: "::", _0: qm, _1: {ctor: "[]"}}
                                }, {
                                    ctor: "::",
                                    _0: l(zv, {ctor: "::", _0: Dm, _1: {ctor: "::", _0: Fm, _1: {ctor: "[]"}}}, {
                                        ctor: "::",
                                        _0: p(Hg, nx, {ctor: "::", _0: 0, _1: {ctor: "[]"}}, t.mdl, {
                                            ctor: "::",
                                            _0: qg,
                                            _1: {
                                                ctor: "::",
                                                _0: Fg,
                                                _1: {ctor: "::", _0: Pg, _1: {ctor: "::", _0: qv(rx), _1: {ctor: "[]"}}}
                                            }
                                        }, {ctor: "::", _0: Gg("help_outline"), _1: {ctor: "[]"}}),
                                        _1: {ctor: "[]"}
                                    }),
                                    _1: {ctor: "[]"}
                                })
                            }(t),
                            _1: {
                                ctor: "::",
                                _0: l(Sm, {ctor: "::", _0: s(Wm, 9, 8, 4), _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: l(aS, t, r),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Tm, {
                                            ctor: "::",
                                            _0: zm,
                                            _1: {ctor: "::", _0: Fm, _1: {ctor: "[]"}}
                                        }, {
                                            ctor: "::",
                                            _0: l(Sm, {
                                                ctor: "::",
                                                _0: s(Wm, 4, 2, 4),
                                                _1: {
                                                    ctor: "::",
                                                    _0: jw,
                                                    _1: {ctor: "::", _0: l(Jv, "padding", "1%"), _1: {ctor: "[]"}}
                                                }
                                            }, {
                                                ctor: "::",
                                                _0: Qx(wk),
                                                _1: {ctor: "::", _0: l(tS, r, "major"), _1: {ctor: "[]"}}
                                            }),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Sm, {
                                                    ctor: "::",
                                                    _0: s(Wm, 4, 2, 4),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: jw,
                                                        _1: {ctor: "::", _0: l(Jv, "padding", "1%"), _1: {ctor: "[]"}}
                                                    }
                                                }, {
                                                    ctor: "::",
                                                    _0: Qx(kk),
                                                    _1: {ctor: "::", _0: l(tS, r, "minor"), _1: {ctor: "[]"}}
                                                }),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(Sm, {
                                                        ctor: "::",
                                                        _0: s(Wm, 4, 2, 4),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: jw,
                                                            _1: {ctor: "::", _0: l(Jv, "padding", "1%"), _1: {ctor: "[]"}}
                                                        }
                                                    }, {
                                                        ctor: "::",
                                                        _0: Qx(xk),
                                                        _1: {ctor: "::", _0: l(tS, r, "info"), _1: {ctor: "[]"}}
                                                    }),
                                                    _1: {ctor: "[]"}
                                                }
                                            }
                                        }),
                                        _1: {ctor: "[]"}
                                    }
                                }),
                                _1: {ctor: "[]"}
                            }
                        }
                    }),
                    _1: {ctor: "[]"}
                })
            }), lS = function (t) {
                var r = n(function (r, n) {
                    return s(nd, Z, function (e) {
                        return $(s(Zx, t, r, n))
                    }, function (r) {
                        var n = l(Kx, Qk.getOption(t), r);
                        return l(K, function (t) {
                            return l(K, function (t) {
                                return Lr(t) ? Z : $(t)
                            }, t.comment)
                        }, n)
                    }(r))
                }), e = l(Sm, {
                    ctor: "::",
                    _0: l(Jv, "width", "0%"),
                    _1: {
                        ctor: "::",
                        _0: l(Jv, "height", "0%"),
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "padding", "0px"),
                            _1: {ctor: "::", _0: l(Jv, "margin", "0px"), _1: {ctor: "[]"}}
                        }
                    }
                }, {ctor: "[]"}), o = function (t) {
                    return l(X, e, t)
                };
                return function () {
                    var t = l(r, kd(Ed), Bk), n = l(r, xd(Od), hk), e = l(r, xd(Ad), Sk), c = l(r, xd(Cd), bk);
                    return y.eq(c, Z) && y.eq(e, Z) && y.eq(n, Z) && y.eq(t, Z) ? {ctor: "[]"} : {
                        ctor: "::",
                        _0: o(c),
                        _1: {ctor: "::", _0: o(e), _1: {ctor: "::", _0: o(n), _1: {ctor: "::", _0: o(t), _1: {ctor: "[]"}}}}
                    }
                }()
            }, sS = function (t) {
                var r = s(nd, {ctor: "_Tuple2", _0: 0, _1: ""}, function (r) {
                    return nS(l($x, Qk.getOption(t), r))
                }, t.selectedError)._1, e = lS(t), o = function () {
                    var r = Qk.getOption(t);
                    return "Just" === r.ctor ? l(Df, 1, function (t) {
                        var r = n(function (t, r) {
                            var n = r, e = n._0, o = n._1, c = t;
                            if ("Summary" === c.ctor) {
                                var u = c._0.breakdown;
                                return {ctor: "_Tuple2", _0: e + u.passed, _1: o + u.count}
                            }
                            var i = c._0.tests;
                            return {ctor: "_Tuple2", _0: e + Yd(i), _1: o + dt(i)}
                        });
                        return Gd(s(st, r, {ctor: "_Tuple2", _0: 0, _1: 0}, t))
                    }(r._0.skills)) : 0
                }(), c = s(nd, {ctor: "[]"}, function (t) {
                    return t.externalItems
                }, Qk.getOption(t)), u = s(nd, "", function (t) {
                    return cg(t.date)
                }, Qk.getOption(t));
                return l(Sm, Vx, {
                    ctor: "::",
                    _0: l(zv, {ctor: "::", _0: l(Jv, "padding", "1%"), _1: {ctor: "[]"}}, {
                        ctor: "::",
                        _0: l(Cw, {
                            ctor: "::",
                            _0: Um,
                            _1: {ctor: "::", _0: l(Jv, "width", "100%"), _1: {ctor: "::", _0: Pm, _1: {ctor: "[]"}}}
                        }, {
                            ctor: "::",
                            _0: l(Gv, {ctor: "::", _0: Nm, _1: {ctor: "[]"}}, {
                                ctor: "::",
                                _0: Eu(l(X, "", Xk.getOption(t))),
                                _1: {ctor: "[]"}
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(Gv, {
                                    ctor: "::",
                                    _0: Bm,
                                    _1: {ctor: "::", _0: Rm(.87), _1: {ctor: "[]"}}
                                }, {ctor: "::", _0: Eu(u), _1: {ctor: "[]"}}),
                                _1: {
                                    ctor: "::",
                                    _0: l(Gv, {ctor: "::", _0: Mm, _1: {ctor: "[]"}}, {
                                        ctor: "::",
                                        _0: Eu(ex(c)),
                                        _1: {ctor: "[]"}
                                    }),
                                    _1: {ctor: "[]"}
                                }
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(Aw, {ctor: "::", _0: Um, _1: {ctor: "[]"}}, {
                                ctor: "::",
                                _0: Eu(l(X, "", Zk.getOption(t))),
                                _1: {ctor: "[]"}
                            }),
                            _1: {ctor: "[]"}
                        }
                    }),
                    _1: {
                        ctor: "::",
                        _0: l(Tm, {ctor: "::", _0: Dm, _1: {ctor: "[]"}}, {
                            ctor: "::",
                            _0: l(Sm, {ctor: "::", _0: s(Wm, 4, 4, 4), _1: {ctor: "[]"}}, {
                                ctor: "::",
                                _0: Qx(Tk),
                                _1: {
                                    ctor: "::",
                                    _0: l(zv, {ctor: "::", _0: jv, _1: {ctor: "[]"}}, {
                                        ctor: "::",
                                        _0: l(Ux, o, ""),
                                        _1: {ctor: "[]"}
                                    }),
                                    _1: {ctor: "[]"}
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(Sm, {ctor: "::", _0: s(Wm, 2, 2, 4), _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: ht(e) ? Qx(Mk) : Qx(pk),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Tm, {ctor: "::", _0: jv, _1: {ctor: "::", _0: qm, _1: {ctor: "[]"}}}, e),
                                        _1: {ctor: "[]"}
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: l(Sm, {ctor: "::", _0: s(Wm, 6, 2, 4), _1: {ctor: "[]"}}, {
                                        ctor: "::",
                                        _0: l(zv, {ctor: "::", _0: l(Jv, "width", "100%"), _1: {ctor: "[]"}}, {
                                            ctor: "::",
                                            _0: l(zv, {
                                                ctor: "::",
                                                _0: Uv("fail-details"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(Jv, "white-space", "pre"),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: l(Jv, "max-height", "25vh"),
                                                        _1: {ctor: "::", _0: l(Jv, "overflow", "auto"), _1: {ctor: "[]"}}
                                                    }
                                                }
                                            }, {ctor: "::", _0: Eu(r), _1: {ctor: "[]"}}),
                                            _1: {ctor: "[]"}
                                        }),
                                        _1: {ctor: "[]"}
                                    }),
                                    _1: {ctor: "[]"}
                                }
                            }
                        }),
                        _1: {ctor: "[]"}
                    }
                })
            }, dS = function (t) {
                return "Just" === Qk.getOption(t).ctor ? function (t) {
                    var r = Qk.getOption(t), n = function () {
                        var t = r;
                        return "Just" === t.ctor ? t._0.skills : {ctor: "[]"}
                    }();
                    return l(Tm, {ctor: "[]"}, l(z["++"], {
                        ctor: "::",
                        _0: sS(t),
                        _1: {ctor: "::", _0: l(fS, t, r), _1: {ctor: "::", _0: l(_S, r, t), _1: {ctor: "[]"}}}
                    }, l(bt, function (r) {
                        return l(iS, t, r)
                    }, n)))
                }(t) : Yx(Uk)
            }, pS = n(function (t, r) {
                var n = l(X, Hk, l(Pt, r.mainMenu.selectedProject, r.mainMenu.projects)),
                    e = l(X, Hk, l(Pt, r.mainMenu.selectedModule, r.mainMenu.modules)),
                    o = y.eq(r.mainMenu.selectedModule, 0) ? t : l(yt, function (t) {
                        return y.eq(s(nd, Hk, function (t) {
                            return vr(t.code)
                        }, t.project.module_), e)
                    }, t);
                return y.eq(r.mainMenu.selectedProject, 0) ? o : l(yt, function (t) {
                    return y.eq(vr(t.project.name), n)
                }, o)
            }), hS = n(function (t, r) {
                return {model: t, studentFullRecord: r}
            }), vS = o(function (t, r, n) {
                var e = t.model,
                    c = (M(e.mainMenu.selectedYear), l(X, Fk, l(Pt, e.mainMenu.selectedModule, e.mainMenu.modules)), l(X, Fk, l(Pt, e.mainMenu.selectedProject, e.mainMenu.projects)), function (t) {
                        return s(nd, 0, function (t) {
                            return t.value
                        }, s(sd, function (t) {
                            return t.type_
                        }, t, n.results.externalItems))
                    }), u = c(kd(Fd)), i = c(kd(Id)), _ = ug($(c(kd(Dd)))), a = ug($(c(kd(qd)))), f = ug($(c(kd(Ld)))),
                    d = l(Df, 1, Mn(function (t) {
                        var r = o(function (t, r, n) {
                            var e = n;
                            return {
                                ctor: "_Tuple3",
                                _0: s(vn, t, Gd({ctor: "_Tuple2", _0: r.passed, _1: r.count}), e._0),
                                _1: e._1 + r.passed,
                                _2: e._2 + r.count
                            }
                        });
                        return function (t) {
                            var r = t;
                            return {ctor: "_Tuple2", _0: r._0, _1: Gd({ctor: "_Tuple2", _0: r._1, _1: r._2})}
                        }(s(Pr, r, {ctor: "_Tuple3", _0: rn, _1: 0, _2: 0}, t))
                    }(n.results.skills))), h = cg(n.date), v = n.project.name;
                return l(Sm, {
                    ctor: "::",
                    _0: s(Wm, 6, 8, 4),
                    _1: {ctor: "::", _0: Hw, _1: {ctor: "::", _0: Uv("project-cell"), _1: {ctor: "[]"}}}
                }, {
                    ctor: "::",
                    _0: l(Ow, {
                        ctor: "::",
                        _0: l(Jv, "width", "auto"),
                        _1: {
                            ctor: "::",
                            _0: l(Jv, "height", "auto"),
                            _1: {ctor: "::", _0: l(Jv, "display", "flex"), _1: {ctor: "[]"}}
                        }
                    }, {
                        ctor: "::",
                        _0: l(Fw, {ctor: "::", _0: l(Jv, "width", "auto"), _1: {ctor: "[]"}}, {
                            ctor: "::",
                            _0: l(Cw, {
                                ctor: "::",
                                _0: Um,
                                _1: {ctor: "::", _0: l(Jv, "width", "100%"), _1: {ctor: "[]"}}
                            }, {
                                ctor: "::",
                                _0: l(Gv, {ctor: "::", _0: Gm, _1: {ctor: "::", _0: Nm, _1: {ctor: "[]"}}}, {
                                    ctor: "::",
                                    _0: Eu(v),
                                    _1: {ctor: "[]"}
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: l(Gv, {ctor: "::", _0: Gm, _1: {ctor: "::", _0: Mm, _1: {ctor: "[]"}}}, {
                                        ctor: "::",
                                        _0: Eu(ex(n.results.externalItems)),
                                        _1: {ctor: "[]"}
                                    }),
                                    _1: {ctor: "[]"}
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(Aw, {ctor: "::", _0: Um, _1: {ctor: "[]"}}, {
                                    ctor: "::",
                                    _0: l(Gv, {
                                        ctor: "::",
                                        _0: Om,
                                        _1: {ctor: "::", _0: Rm(.87), _1: {ctor: "[]"}}
                                    }, {ctor: "::", _0: Eu(h), _1: {ctor: "[]"}}),
                                    _1: {ctor: "[]"}
                                }),
                                _1: {ctor: "[]"}
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(qw, {ctor: "::", _0: l(Jv, "width", "auto"), _1: {ctor: "[]"}}, {
                                ctor: "::", _0: l(Tm, {ctor: "[]"}, {
                                    ctor: "::",
                                    _0: l(Sm, {ctor: "::", _0: s(Wm, 3, 2, 4), _1: {ctor: "[]"}}, {
                                        ctor: "::",
                                        _0: l(zv, {
                                            ctor: "::",
                                            _0: jm,
                                            _1: {ctor: "::", _0: Bm, _1: {ctor: "::", _0: Lm, _1: {ctor: "[]"}}}
                                        }, {ctor: "::", _0: Eu(Tk), _1: {ctor: "[]"}}),
                                        _1: {
                                            ctor: "::",
                                            _0: l(zv, {
                                                ctor: "::",
                                                _0: Im,
                                                _1: {ctor: "::", _0: l(Jv, "padding", "5%"), _1: {ctor: "[]"}}
                                            }, {ctor: "::", _0: l(Ux, d, ""), _1: {ctor: "[]"}}),
                                            _1: {ctor: "[]"}
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Sm, {ctor: "::", _0: s(Wm, 5, 3, 4), _1: {ctor: "[]"}}, {
                                            ctor: "::",
                                            _0: l(zv, {
                                                ctor: "::",
                                                _0: jm,
                                                _1: {ctor: "::", _0: Bm, _1: {ctor: "::", _0: Lm, _1: {ctor: "[]"}}}
                                            }, {ctor: "::", _0: Eu(Nk), _1: {ctor: "[]"}}),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Kw, {
                                                    ctor: "::",
                                                    _0: s(Wm, 10, 6, 4),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: l(ym, km, 1),
                                                        _1: {ctor: "::", _0: l(ym, xm, 1), _1: {ctor: "[]"}}
                                                    }
                                                }, s(zx, _, a, f)),
                                                _1: {ctor: "[]"}
                                            }
                                        }),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Sm, {ctor: "::", _0: s(Wm, 4, 3, 4), _1: {ctor: "[]"}}, {
                                                ctor: "::",
                                                _0: l(zv, {
                                                    ctor: "::",
                                                    _0: jm,
                                                    _1: {ctor: "::", _0: Bm, _1: {ctor: "::", _0: Lm, _1: {ctor: "[]"}}}
                                                }, {ctor: "::", _0: Eu(vk), _1: {ctor: "[]"}}),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(Tm, {ctor: "[]"}, {
                                                        ctor: "::",
                                                        _0: l(Sm, {
                                                            ctor: "::",
                                                            _0: Gm,
                                                            _1: {ctor: "::", _0: Im, _1: {ctor: "[]"}}
                                                        }, {ctor: "::", _0: l(Ux, u, mk), _1: {ctor: "[]"}}),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: l(Sm, {
                                                                ctor: "::",
                                                                _0: Gm,
                                                                _1: {ctor: "::", _0: Im, _1: {ctor: "[]"}}
                                                            }, {ctor: "::", _0: l(Ux, i, gk), _1: {ctor: "[]"}}),
                                                            _1: {ctor: "[]"}
                                                        }
                                                    }),
                                                    _1: {ctor: "[]"}
                                                }
                                            }),
                                            _1: {ctor: "[]"}
                                        }
                                    }
                                }), _1: {ctor: "[]"}
                            }),
                            _1: {
                                ctor: "::",
                                _0: l(Lw, {
                                    ctor: "::",
                                    _0: Ew,
                                    _1: {
                                        ctor: "::",
                                        _0: l(Jv, "display", "flex"),
                                        _1: {
                                            ctor: "::",
                                            _0: l(Jv, "justify-content", "space-around"),
                                            _1: {
                                                ctor: "::",
                                                _0: l(Jv, "align-items", "center"),
                                                _1: {ctor: "::", _0: Hm, _1: {ctor: "[]"}}
                                            }
                                        }
                                    }
                                }, {
                                    ctor: "::",
                                    _0: p(Hg, qx, {ctor: "::", _0: r, _1: {ctor: "[]"}}, t.model.mdl, {
                                        ctor: "::",
                                        _0: Ig,
                                        _1: {
                                            ctor: "::",
                                            _0: Fg,
                                            _1: {
                                                ctor: "::", _0: Pg, _1: {
                                                    ctor: "::", _0: qv(function (t) {
                                                        return {ctor: "SelectDetails", _0: t}
                                                    }(n.results.testRunId)), _1: {ctor: "[]"}
                                                }
                                            }
                                        }
                                    }, {ctor: "::", _0: Eu(yk), _1: {ctor: "[]"}}),
                                    _1: {ctor: "[]"}
                                }),
                                _1: {ctor: "[]"}
                            }
                        }
                    }),
                    _1: {ctor: "[]"}
                })
            }), mS = function (t) {
                var r = function (t) {
                    var r = function () {
                        var r = t.studentFullRecord;
                        return "Just" === r.ctor ? l(pS, r._0, t) : {ctor: "[]"}
                    }();
                    return l(hS, t, r)
                }(t);
                return "Just" === t.studentFullRecord.ctor ? ht(r.studentFullRecord) ? Yx(jk) : function (t) {
                    var r = kt(l(ot, function (t) {
                        return t.date
                    }, t.studentFullRecord));
                    return t.studentFullRecord, l(Tm, {ctor: "[]"}, l(It, function (r) {
                        return l(vS, t, r)
                    }, r))
                }(r) : Yx(jk)
            }, gS = n(function (t, r) {
                return l(Cn["!"], l(ox.set, !1, l(cx.set, $(t), r)), {ctor: "[]"})
            }), bS = function (t) {
                return gS(function (t) {
                    var r = t;
                    switch (r.ctor) {
                        case"BadUrl":
                            return r._0;
                        case"Timeout":
                            return "Request timeout";
                        case"NetworkError":
                            return "Network error";
                        case"BadStatus":
                            return r._0.body;
                        default:
                            return l(z["++"], r._0, r._1.body)
                    }
                }(t))
            }, yS = function (t) {
                return zt({ctor: "::", _0: Fk, _1: ad(t)})
            }, TS = n(function (t, r) {
                return l(Cn["!"], l(ox.set, !0, r), {
                    ctor: "::", _0: s(th, Ox, function (r) {
                        return Rx(t(r))
                    }, s(ik, r.apiEndpoint, M(r.mainMenu.selectedYear), r.studentLogin)), _1: {ctor: "[]"}
                })
            }), wS = o(function (t, r, n) {
                var e = l(X, Hk, l(Pt, t, r)), o = function (t) {
                    return y.eq(s(nd, Hk, function (t) {
                        return vr(t.code)
                    }, t.project.module_), e) ? $(vr(t.project.name)) : Z
                };
                return function (r) {
                    return yS(function (r) {
                        return y.eq(t, 0) ? l(bt, function (t) {
                            return vr(function (t) {
                                return t.name
                            }(t.project))
                        }, r) : l(wt, o, r)
                    }(r))
                }(n)
            }), kS = n(function (t, r) {
                r.mainMenu;
                var n = yS(l(bt, function (t) {
                    return l(nd, Hk, function (t) {
                        return vr(t.code)
                    })(function (t) {
                        return t.module_
                    }(t.project))
                }, t)), e = s(wS, 0, n, t);
                return l(Cn["!"], l(ox.set, !1, l(kx.set, 0, l(Sx.set, 0, l(mx.set, e, l(bx.set, n, l(sx.set, $(t), r)))))), {ctor: "[]"})
            }), xS = TS(l(ed, x(lg), kS)), SS = function (t) {
                var r = fx(t), n = r._0, e = r._1, o = r._2, c = r._3, u = r._4,
                    i = l(z["++"], "#", l(z["++"], M(n), l(z["++"], "/", l(z["++"], xi(e), l(z["++"], "/", l(z["++"], xi(o), s(nd, "", function (t) {
                        return l(z["++"], "/", Ca(t))
                    }, c))))))), _ = s(nd, "", function (t) {
                        return l(z["++"], "?student=", t)
                    }, u);
                return function (t) {
                    return function (r) {
                        return function (n) {
                            return function (e) {
                                return function (o) {
                                    return function (c) {
                                        return function (u) {
                                            return function (i) {
                                                return function (_) {
                                                    return function (a) {
                                                        return function (f) {
                                                            return {
                                                                href: t,
                                                                host: r,
                                                                hostname: n,
                                                                protocol: e,
                                                                origin: o,
                                                                port_: c,
                                                                pathname: u,
                                                                search: i,
                                                                hash: _,
                                                                username: a,
                                                                password: f
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }("")("")("")("")("")("")("")(_)(i)("")("")
            }, MS = function (t) {
                var r = SS(t);
                return l(z["++"], r.search, r.hash)
            }, NS = o(function (t, r, n) {
                var e = mt(s(nd, {ctor: "[]"}, yt(function (r) {
                    return y.eq(r.results.testRunId, t)
                }), n.studentFullRecord)), o = s(nd, "", function (t) {
                    return function (t) {
                        return t.name
                    }(t.project)
                }, e), c = s(nd, "", function (t) {
                    return l(nd, Hk, function (t) {
                        return mr(t.code)
                    })(function (t) {
                        return t.module_
                    }(t.project))
                }, e), u = l(ox.set, !1, l(_x.set, $(d(tx, t, o, r, c)), n));
                n.detailsModel;
                return l(Cn["!"], u, {ctor: "::", _0: d_(MS(u)), _1: {ctor: "[]"}})
            }), BS = o(function (t, r, n) {
                return l(Cn["!"], l(ox.set, !0, n), {
                    ctor: "::", _0: s(th, Ox, function (r) {
                        return Rx(s(ed, bS, NS(t), r))
                    }, s(ok, n.apiEndpoint, Ca(t), r)), _1: {ctor: "[]"}
                })
            }), RS = o(function (t, r, e) {
                return Nn(l(X, e, l(Pt, 0, l(jt, function (r) {
                    var n = r;
                    return y.eq(n._1, t)
                }, l(Ut, n(function (t, r) {
                    return {ctor: "_Tuple2", _0: t, _1: r}
                }), r)))))
            }), OS = d($k, Nw, Z, Z, !1), AS = function (t) {
                return l(ix.set, OS, l(kx.set, 0, l(Sx.set, 0, t)))
            }, CS = n(function (t, r) {
                l(Pt, r.mainMenu.selectedModule, r.mainMenu.modules);
                var n = y.cmp(Ft(r.mainMenu.projects), t) < 1 ? 0 : t;
                l(Pt, n, r.mainMenu.projects);
                return l(kx.set, n, r)
            }), ES = n(function (t, r) {
                var n = s(RS, vr(t), r.mainMenu.projects, {ctor: "_Tuple2", _0: 0, _1: ""});
                return l(CS, n, r)
            }), LS = n(function (t, r) {
                var n = y.cmp(Ft(r.mainMenu.modules), t) < 1 ? 0 : t, e = s(nd, Jt, function (t) {
                    return s(wS, n, r.mainMenu.modules, t)
                }, r.studentFullRecord);
                l(Pt, n, r.mainMenu.modules);
                return l(mx.set, e, l(kx.set, 0, l(Sx.set, n, r)))
            }), qS = n(function (t, r) {
                var n = s(RS, vr(t), r.mainMenu.modules, {ctor: "_Tuple2", _0: 0, _1: ""});
                return l(LS, n, r)
            }), DS = n(function (t, r) {
                var n = l(X, r.currentYear, l(Pt, t, r.mainMenu.years));
                return l(Nx.set, n, r)
            }), IS = n(function (t, r) {
                var n = s(RS, t, r.mainMenu.years, {ctor: "_Tuple2", _0: 0, _1: 0});
                return l(DS, n, r)
            }), FS = o(function (t, r, n) {
                var e = l(t, r, n), o = l(ix.set, OS, e);
                return l(Cn["!"], o, {ctor: "::", _0: d_(MS(o)), _1: {ctor: "[]"}})
            }), PS = i(function (t, r, e, o, c, u) {
                var i = n(function (t, r) {
                    return dg({ctor: "::", _0: sg(qS(t)), _1: {ctor: "::", _0: sg(ES(r)), _1: {ctor: "[]"}}})
                }), _ = l(ix.set, OS, l(lx.set, o, u));
                return !td(_.studentFullRecord) && !td(_.detailsModel.details) && y.eq(t, u.mainMenu.selectedYear) && y.eq(o, u.studentLogin) ? s(i, r, e, _) : l(dg, {
                    ctor: "::",
                    _0: sg(IS(t)),
                    _1: {
                        ctor: "::", _0: TS(l(ed, bS, function (t) {
                            return dg({
                                ctor: "::",
                                _0: kS(t),
                                _1: {ctor: "::", _0: l(i, r, e), _1: {ctor: "::", _0: c, _1: {ctor: "[]"}}}
                            })
                        })), _1: {ctor: "[]"}
                    }
                }, l(ox.set, !0, _))
            }), JS = function (t) {
                return l(X, "", ki(t))
            }, jS = function (t) {
                return fa(function (r) {
                    return l(Nt, function (t) {
                        return t._0(r)
                    }, t)
                })
            }({
                ctor: "::",
                _0: l(ha, Ix, l(pa["</>"], da, l(pa["</>"], sa, l(pa["<?>"], sa, ma("student"))))),
                _1: {
                    ctor: "::",
                    _0: l(ha, Dx, l(pa["</>"], da, l(pa["</>"], sa, l(pa["</>"], sa, l(pa["<?>"], sa, ma("student")))))),
                    _1: {ctor: "[]"}
                }
            }), US = n(function (t, r) {
                var n = function (t) {
                    var r = l(ia, jS, t), n = r;
                    return "Just" === n.ctor && "Master" === n._0.ctor && (Lr(n._0._1) || Lr(n._0._2)) ? Z : r
                }(t);
                if ("Nothing" === n.ctor) return l(Cn["!"], r, {ctor: "::", _0: d_(MS(AS(r))), _1: {ctor: "[]"}});
                if ("Master" === n._0.ctor) return h(PS, n._0._0, JS(n._0._1), JS(n._0._2), n._0._3, lg, r);
                var e = n._0._4, o = Tf(n._0._3);
                return h(PS, n._0._0, JS(n._0._1), JS(n._0._2), e, s(nd, gS(Pk), function (t) {
                    return l(BS, t, e)
                }, o), r)
            }), HS = function (t) {
                return l(ag, Lx, l(ig, hx, Oh(t)))
            }, WS = function (t) {
                var r = l(X, "", ki(t.auth.redirectState)), n = function (t) {
                    var r = l(Mr, "#", t), n = mt(r), e = l(X, "", n), o = l(dr, "?", e) ? e : "",
                        c = "Nothing" === n.ctor ? l(X, "", mt(r)) : l(X, "", mt(l(ct, 1, r)));
                    return {ctor: "_Tuple2", _0: o, _1: l(z["++"], "#", c)}
                }(r);
                n._0, n._1;
                return l(Cn["!"], t, {
                    ctor: "::", _0: function (t) {
                        return u_(l_(t))
                    }(l(z["++"], t.pathname, r)), _1: {ctor: "[]"}
                })
            }, zS = o(function (t, r, n) {
                var e = l(Tx.set, zt(kt(l(Dt, 2014, eg(r)))), l(Nx.set, eg(r), l(dx.set, eg(r), l(px.set, $(r), n))));
                return l(US, t, e)
            }), GS = function (t) {
                return function (r) {
                    return l(YS, t, ("Mdl" === t.ctor ? S : cx.set(Z))(r))
                }
            }, YS = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Mdl":
                        return l(Mw, qx, r._0);
                    case"UpdateAuth":
                        return VS(r._0);
                    case"NewUrl":
                        return function (t) {
                            return l(Cn["!"], t, {ctor: "::", _0: d_(r._0), _1: {ctor: "[]"}})
                        };
                    case"UpdateURL":
                        var e = r._0;
                        return function (t) {
                            var r = SS(t);
                            return !td(t.studentFullRecord) && y.eq(r.search, e.search) && y.eq(r.hash, e.hash) ? l(Cn["!"], t, {ctor: "[]"}) : l(US, e, t)
                        };
                    case"ReceiveDate":
                        return l(zS, r._0, r._1);
                    case"WithToken":
                        return HS(function (t) {
                            return {ctor: "WithToken", _0: t}
                        }(r._0));
                    case"ExecuteCallback":
                        return r._0;
                    case"SelectYear":
                        return l(fg, l(FS, DS, r._0), xS);
                    case"SelectModule":
                        return l(FS, LS, r._0);
                    case"SelectProject":
                        return l(FS, CS, r._0);
                    case"DetailsMsg":
                        return p(Yh, function (t) {
                            return t.detailsModel
                        }, n(function (t, r) {
                            return y.update(t, {detailsModel: r})
                        }), Bx, Px, r._0);
                    default:
                        return function (t) {
                            return s(BS, r._0, t.studentLogin, t)
                        }
                }
            }, VS = function (t) {
                var r = t;
                switch (r.ctor) {
                    case"Callback":
                        return GS(r._0);
                    case"TokenReadFromLocation":
                        return WS;
                    default:
                        return HS(t)
                }
            }, QS = n(function (t, r) {
                var n = {selectedYear: 0, selectedModule: 0, selectedProject: 0, modules: Jt, projects: Jt, years: Jt},
                    e = Jx, o = e._0, c = e._1, u = l(Rh, t, r), i = u._0, _ = u._1, a = {
                        mdl: Nw,
                        auth: i,
                        date: Z,
                        apiEndpoint: t.apiEndpoint,
                        pathname: r.pathname,
                        currentYear: 0,
                        studentFullRecord: Z,
                        studentLogin: Z,
                        detailsModel: o,
                        mainMenu: n,
                        error: Z,
                        loading: !1
                    }, f = l(je, Ax(r), Qc);
                return l(Cn["!"], a, {
                    ctor: "::",
                    _0: kw(qx),
                    _1: {
                        ctor: "::",
                        _0: l(En, Lx, _),
                        _1: {ctor: "::", _0: l(En, Bx, c), _1: {ctor: "::", _0: f, _1: {ctor: "[]"}}}
                    }
                })
            }), XS = function (t) {
                var r = l(bt, function (t) {
                    return l(nw, {ctor: "[]"}, t)
                }, Wt(t.mainMenu.projects));
                return h(tw, qx, {ctor: "::", _0: 0, _1: {ctor: "[]"}}, t.mdl, {
                    ctor: "::",
                    _0: zT,
                    _1: {
                        ctor: "::", _0: function (t) {
                            return Nv(n(function (t, r) {
                                return y.update(r, {onSelectTab: $(t)})
                            })(t))
                        }(Cx), _1: {
                            ctor: "::", _0: function (t) {
                                return Nv(n(function (t, r) {
                                    return y.update(r, {activeTab: t})
                                })(t))
                            }(t.mainMenu.selectedProject), _1: {ctor: "[]"}
                        }
                    }
                }, r, {ctor: "[]"})
            }, ZS = function (t) {
                return {
                    ctor: "::",
                    _0: l(Ly, {ctor: "[]"}, {
                        ctor: "::",
                        _0: p(ww, qx, {ctor: "::", _0: 0, _1: {ctor: "[]"}}, t.mdl, {
                            ctor: "::",
                            _0: _w(M(t.mainMenu.selectedYear)),
                            _1: {ctor: "::", _0: uw, _1: {ctor: "[]"}}
                        }, l(It, n(function (t, r) {
                            return l(fw, {
                                ctor: "::", _0: function (t) {
                                    return Nv(function (r) {
                                        return y.update(r, {onSelect: $(t)})
                                    })
                                }(function (t) {
                                    return {ctor: "SelectYear", _0: t}
                                }(t)), _1: {ctor: "[]"}
                            }, {ctor: "::", _0: Eu(M(r)), _1: {ctor: "[]"}})
                        }), Wt(t.mainMenu.years))),
                        _1: {
                            ctor: "::", _0: Dy, _1: {
                                ctor: "::",
                                _0: l(qy, {
                                    ctor: "::", _0: qv(function (t) {
                                        return {ctor: "NewUrl", _0: t}
                                    }(MS(AS(t)))), _1: {ctor: "[]"}
                                }, {ctor: "::", _0: Eu(Wk), _1: {ctor: "[]"}}),
                                _1: {
                                    ctor: "::",
                                    _0: Dy,
                                    _1: {
                                        ctor: "::",
                                        _0: Dy,
                                        _1: {ctor: "::", _0: s(Fx, t, 1, "help.html"), _1: {ctor: "[]"}}
                                    }
                                }
                            }
                        }
                    }),
                    _1: {ctor: "[]"}
                }
            }, KS = function (t) {
                var r = l(bt, Cu(Lx), function (t) {
                    return s(nd, {ctor: "[]"}, function (t) {
                        return {
                            ctor: "::",
                            _0: l(Yu, {
                                ctor: "::",
                                _0: ri("log-frame"),
                                _1: {ctor: "::", _0: ei(t), _1: {ctor: "[]"}}
                            }, {ctor: "[]"}),
                            _1: {ctor: "[]"}
                        }
                    }, ih(hx.get(t)))
                }(t)), e = function () {
                    if (y.eq(t.loading, !0)) return Gx;
                    var r = t.error;
                    return "Nothing" === r.ctor ? "Details" === function (t) {
                        var r = fx(t), n = r._0, e = r._1, o = r._2, c = r._3, u = r._4;
                        return s(nd, d(Ix, n, e, o, u), function (t) {
                            return p(Dx, n, e, o, Ca(t), u)
                        }, c)
                    }(t).ctor ? l(Cu, Bx, dS(t.detailsModel)) : mS(t) : Yx(r._0)
                }(), o = (s($k, t.mdl, Z, Z), XS(t));
                return d(aT, qx, t.mdl, {
                    ctor: "::", _0: Iy, _1: {
                        ctor: "::", _0: function (t) {
                            return Nv(n(function (t, r) {
                                return y.update(r, {selectedTab: t})
                            })(t))
                        }(t.mainMenu.selectedModule), _1: {
                            ctor: "::", _0: function (t) {
                                return Nv(n(function (t, r) {
                                    return y.update(r, {
                                        onSelectTab: $(function (r) {
                                            return vi(t(r))
                                        })
                                    })
                                })(t))
                            }(Ex), _1: {ctor: "[]"}
                        }
                    }
                }, {
                    header: ZS(t), drawer: {ctor: "[]"}, tabs: {
                        ctor: "_Tuple2", _0: Wt(l(Ht, function (t) {
                            return Eu(t)
                        }, t.mainMenu.modules)), _1: {
                            ctor: "::", _0: function (t) {
                                var r = t;
                                return Uv(l(z["++"], "mdl-color--", r._0))
                            }(vm), _1: {ctor: "[]"}
                        }
                    }, main: l(z["++"], {ctor: "::", _0: o, _1: {ctor: "::", _0: e, _1: {ctor: "[]"}}}, l(z["++"], r, Xm))
                })
            }, $S = function (t) {
                return function (t) {
                    switch (t.state.ctor) {
                        case"Init":
                        case"InitCheck":
                            return !1;
                        default:
                            return !0
                    }
                }(t.auth) ? KS(t) : l(ju, {ctor: "::", _0: ni("app-wrapper"), _1: {ctor: "[]"}}, function (t) {
                    return s(nd, {ctor: "[]"}, function (r) {
                        return {
                            ctor: "::",
                            _0: l(zv, {
                                ctor: "::",
                                _0: Yv(hm),
                                _1: {
                                    ctor: "::",
                                    _0: l(Jv, "display", "flex"),
                                    _1: {
                                        ctor: "::",
                                        _0: l(Jv, "min-height", "100vh"),
                                        _1: {ctor: "::", _0: l(Jv, "min-width", "100vw"), _1: {ctor: "[]"}}
                                    }
                                }
                            }, {
                                ctor: "::",
                                _0: p(Hg, qx, {ctor: "::", _0: 0, _1: {ctor: "[]"}}, t.mdl, {
                                    ctor: "::",
                                    _0: Ig,
                                    _1: {
                                        ctor: "::",
                                        _0: Fg,
                                        _1: {
                                            ctor: "::",
                                            _0: Pg,
                                            _1: {
                                                ctor: "::",
                                                _0: Jg(r),
                                                _1: {ctor: "::", _0: l(Jv, "margin", "auto"), _1: {ctor: "[]"}}
                                            }
                                        }
                                    }
                                }, {ctor: "::", _0: Eu(Jk), _1: {ctor: "[]"}}),
                                _1: {ctor: "::", _0: s(Fx, t, 1, "help.html"), _1: {ctor: "[]"}}
                            }),
                            _1: {ctor: "[]"}
                        }
                    }, ih(hx.get(t)))
                }(t))
            }, tM = (bi($S), l(m_, function (t) {
                return {ctor: "UpdateURL", _0: t}
            }, {
                init: QS, update: GS, subscriptions: function (t) {
                    return Ln({
                        ctor: "::", _0: function (t) {
                            return l(Dn, Lx, kh(t.auth))
                        }(t), _1: {ctor: "::", _0: l(xw, qx, t), _1: {ctor: "[]"}}
                    })
                }, view: $S
            })(l(ee, function (t) {
                return l(ee, function (r) {
                    return l(ee, function (n) {
                        return l(ee, function (e) {
                            return l(ee, function (o) {
                                return l(ee, function (c) {
                                    return ce({
                                        apiEndpoint: t,
                                        authorizeUrl: r,
                                        clientID: n,
                                        redirectUrl: e,
                                        renewalUrl: o,
                                        seed: c
                                    })
                                }, l(ge, "seed", xe))
                            }, l(ge, "renewalUrl", Me))
                        }, l(ge, "redirectUrl", Me))
                    }, l(ge, "clientID", Me))
                }, l(ge, "authorizeUrl", Me))
            }, l(ge, "apiEndpoint", Me)))), rM = {};
        rM.Student = rM.Student || {}, rM.Student.Main = rM.Student.Main || {}, void 0 !== tM && tM(rM.Student.Main, "Student.Main", void 0), void 0 === (e = function () {
            return rM
        }.apply(r, [])) || (t.exports = e)
    }).call(this)
}]);
