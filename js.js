var e = Object.create
  , t = Object.defineProperty
  , n = Object.getOwnPropertyDescriptor
  , r = Object.getOwnPropertyNames
  , i = Object.getPrototypeOf
  , a = Object.prototype.hasOwnProperty
  , o = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports)
  , s = (e, n) => {
    let r = {};
    for (var i in e)
        t(r, i, {
            get: e[i],
            enumerable: !0
        });
    return n || t(r, Symbol.toStringTag, {
        value: `Module`
    }),
    r
}
  , c = (e, i, o, s) => {
    if (i && typeof i == `object` || typeof i == `function`)
        for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
            d = c[l],
            !a.call(e, d) && d !== o && t(e, d, {
                get: (e => i[e]).bind(null, d),
                enumerable: !(s = n(i, d)) || s.enumerable
            });
    return e
}
  , l = (n, r, a) => (a = n == null ? {} : e(i(n)),
c(r || !n || !n.__esModule ? t(a, `default`, {
    value: n,
    enumerable: !0
}) : a, n));
(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`))
        return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`))
        n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes)
                    e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`,
        t
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
}
)();
var u = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.portal`)
      , r = Symbol.for(`react.fragment`)
      , i = Symbol.for(`react.strict_mode`)
      , a = Symbol.for(`react.profiler`)
      , o = Symbol.for(`react.consumer`)
      , s = Symbol.for(`react.context`)
      , c = Symbol.for(`react.forward_ref`)
      , l = Symbol.for(`react.suspense`)
      , u = Symbol.for(`react.memo`)
      , d = Symbol.for(`react.lazy`)
      , f = Symbol.for(`react.activity`)
      , p = Symbol.iterator;
    function m(e) {
        return typeof e != `object` || !e ? null : (e = p && e[p] || e[`@@iterator`],
        typeof e == `function` ? e : null)
    }
    var h = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , g = Object.assign
      , _ = {};
    function v(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    v.prototype.isReactComponent = {},
    v.prototype.setState = function(e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
            throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
        this.updater.enqueueSetState(this, e, t, `setState`)
    }
    ,
    v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`)
    }
    ;
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
        this.props = e,
        this.context = t,
        this.refs = _,
        this.updater = n || h
    }
    var x = b.prototype = new y;
    x.constructor = b,
    g(x, v.prototype),
    x.isPureReactComponent = !0;
    var S = Array.isArray;
    function C() {}
    var w = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , ee = Object.prototype.hasOwnProperty;
    function te(e, n, r) {
        var i = r.ref;
        return {
            $$typeof: t,
            type: e,
            key: n,
            ref: i === void 0 ? null : i,
            props: r
        }
    }
    function T(e, t) {
        return te(e.type, t, e.props)
    }
    function E(e) {
        return typeof e == `object` && !!e && e.$$typeof === t
    }
    function D(e) {
        var t = {
            "=": `=0`,
            ":": `=2`
        };
        return `$` + e.replace(/[=:]/g, function(e) {
            return t[e]
        })
    }
    var ne = /\/+/g;
    function re(e, t) {
        return typeof e == `object` && e && e.key != null ? D(`` + e.key) : t.toString(36)
    }
    function ie(e) {
        switch (e.status) {
        case `fulfilled`:
            return e.value;
        case `rejected`:
            throw e.reason;
        default:
            switch (typeof e.status == `string` ? e.then(C, C) : (e.status = `pending`,
            e.then(function(t) {
                e.status === `pending` && (e.status = `fulfilled`,
                e.value = t)
            }, function(t) {
                e.status === `pending` && (e.status = `rejected`,
                e.reason = t)
            })),
            e.status) {
            case `fulfilled`:
                return e.value;
            case `rejected`:
                throw e.reason
            }
        }
        throw e
    }
    function ae(e, r, i, a, o) {
        var s = typeof e;
        (s === `undefined` || s === `boolean`) && (e = null);
        var c = !1;
        if (e === null)
            c = !0;
        else
            switch (s) {
            case `bigint`:
            case `string`:
            case `number`:
                c = !0;
                break;
            case `object`:
                switch (e.$$typeof) {
                case t:
                case n:
                    c = !0;
                    break;
                case d:
                    return c = e._init,
                    ae(c(e._payload), r, i, a, o)
                }
            }
        if (c)
            return o = o(e),
            c = a === `` ? `.` + re(e, 0) : a,
            S(o) ? (i = ``,
            c != null && (i = c.replace(ne, `$&/`) + `/`),
            ae(o, r, i, ``, function(e) {
                return e
            })) : o != null && (E(o) && (o = T(o, i + (o.key == null || e && e.key === o.key ? `` : (`` + o.key).replace(ne, `$&/`) + `/`) + c)),
            r.push(o)),
            1;
        c = 0;
        var l = a === `` ? `.` : a + `:`;
        if (S(e))
            for (var u = 0; u < e.length; u++)
                a = e[u],
                s = l + re(a, u),
                c += ae(a, r, i, s, o);
        else if (u = m(e),
        typeof u == `function`)
            for (e = u.call(e),
            u = 0; !(a = e.next()).done; )
                a = a.value,
                s = l + re(a, u++),
                c += ae(a, r, i, s, o);
        else if (s === `object`) {
            if (typeof e.then == `function`)
                return ae(ie(e), r, i, a, o);
            throw r = String(e),
            Error(`Objects are not valid as a React child (found: ` + (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) + `). If you meant to render a collection of children, use an array instead.`)
        }
        return c
    }
    function oe(e, t, n) {
        if (e == null)
            return e;
        var r = []
          , i = 0;
        return ae(e, r, ``, ``, function(e) {
            return t.call(n, e, i++)
        }),
        r
    }
    function se(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(),
            t.then(function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 1,
                e._result = t)
            }, function(t) {
                (e._status === 0 || e._status === -1) && (e._status = 2,
                e._result = t)
            }),
            e._status === -1 && (e._status = 0,
            e._result = t)
        }
        if (e._status === 1)
            return e._result.default;
        throw e._result
    }
    var O = typeof reportError == `function` ? reportError : function(e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            var t = new window.ErrorEvent(`error`,{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, e);
            return
        }
        console.error(e)
    }
      , k = {
        map: oe,
        forEach: function(e, t, n) {
            oe(e, function() {
                t.apply(this, arguments)
            }, n)
        },
        count: function(e) {
            var t = 0;
            return oe(e, function() {
                t++
            }),
            t
        },
        toArray: function(e) {
            return oe(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!E(e))
                throw Error(`React.Children.only expected to receive a single React element child.`);
            return e
        }
    };
    e.Activity = f,
    e.Children = k,
    e.Component = v,
    e.Fragment = r,
    e.Profiler = a,
    e.PureComponent = b,
    e.StrictMode = i,
    e.Suspense = l,
    e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w,
    e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return w.H.useMemoCache(e)
        }
    },
    e.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }
    ,
    e.cacheSignal = function() {
        return null
    }
    ,
    e.cloneElement = function(e, t, n) {
        if (e == null)
            throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props)
          , i = e.key;
        if (t != null)
            for (a in t.key !== void 0 && (i = `` + t.key),
            t)
                !ee.call(t, a) || a === `key` || a === `__self` || a === `__source` || a === `ref` && t.ref === void 0 || (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1)
            r.children = n;
        else if (1 < a) {
            for (var o = Array(a), s = 0; s < a; s++)
                o[s] = arguments[s + 2];
            r.children = o
        }
        return te(e.type, i, r)
    }
    ,
    e.createContext = function(e) {
        return e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        e.Provider = e,
        e.Consumer = {
            $$typeof: o,
            _context: e
        },
        e
    }
    ,
    e.createElement = function(e, t, n) {
        var r, i = {}, a = null;
        if (t != null)
            for (r in t.key !== void 0 && (a = `` + t.key),
            t)
                ee.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1)
            i.children = n;
        else if (1 < o) {
            for (var s = Array(o), c = 0; c < o; c++)
                s[c] = arguments[c + 2];
            i.children = s
        }
        if (e && e.defaultProps)
            for (r in o = e.defaultProps,
            o)
                i[r] === void 0 && (i[r] = o[r]);
        return te(e, a, i)
    }
    ,
    e.createRef = function() {
        return {
            current: null
        }
    }
    ,
    e.forwardRef = function(e) {
        return {
            $$typeof: c,
            render: e
        }
    }
    ,
    e.isValidElement = E,
    e.lazy = function(e) {
        return {
            $$typeof: d,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: se
        }
    }
    ,
    e.memo = function(e, t) {
        return {
            $$typeof: u,
            type: e,
            compare: t === void 0 ? null : t
        }
    }
    ,
    e.startTransition = function(e) {
        var t = w.T
          , n = {};
        w.T = n;
        try {
            var r = e()
              , i = w.S;
            i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, O)
        } catch (e) {
            O(e)
        } finally {
            t !== null && n.types !== null && (t.types = n.types),
            w.T = t
        }
    }
    ,
    e.unstable_useCacheRefresh = function() {
        return w.H.useCacheRefresh()
    }
    ,
    e.use = function(e) {
        return w.H.use(e)
    }
    ,
    e.useActionState = function(e, t, n) {
        return w.H.useActionState(e, t, n)
    }
    ,
    e.useCallback = function(e, t) {
        return w.H.useCallback(e, t)
    }
    ,
    e.useContext = function(e) {
        return w.H.useContext(e)
    }
    ,
    e.useDebugValue = function() {}
    ,
    e.useDeferredValue = function(e, t) {
        return w.H.useDeferredValue(e, t)
    }
    ,
    e.useEffect = function(e, t) {
        return w.H.useEffect(e, t)
    }
    ,
    e.useEffectEvent = function(e) {
        return w.H.useEffectEvent(e)
    }
    ,
    e.useId = function() {
        return w.H.useId()
    }
    ,
    e.useImperativeHandle = function(e, t, n) {
        return w.H.useImperativeHandle(e, t, n)
    }
    ,
    e.useInsertionEffect = function(e, t) {
        return w.H.useInsertionEffect(e, t)
    }
    ,
    e.useLayoutEffect = function(e, t) {
        return w.H.useLayoutEffect(e, t)
    }
    ,
    e.useMemo = function(e, t) {
        return w.H.useMemo(e, t)
    }
    ,
    e.useOptimistic = function(e, t) {
        return w.H.useOptimistic(e, t)
    }
    ,
    e.useReducer = function(e, t, n) {
        return w.H.useReducer(e, t, n)
    }
    ,
    e.useRef = function(e) {
        return w.H.useRef(e)
    }
    ,
    e.useState = function(e) {
        return w.H.useState(e)
    }
    ,
    e.useSyncExternalStore = function(e, t, n) {
        return w.H.useSyncExternalStore(e, t, n)
    }
    ,
    e.useTransition = function() {
        return w.H.useTransition()
    }
    ,
    e.version = `19.2.4`
}
))
  , d = o(( (e, t) => {
    t.exports = u()
}
))
  , f = o((e => {
    function t(e, t) {
        var n = e.length;
        e.push(t);
        a: for (; 0 < n; ) {
            var r = n - 1 >>> 1
              , a = e[r];
            if (0 < i(a, t))
                e[r] = t,
                e[n] = a,
                n = r;
            else
                break a
        }
    }
    function n(e) {
        return e.length === 0 ? null : e[0]
    }
    function r(e) {
        if (e.length === 0)
            return null;
        var t = e[0]
          , n = e.pop();
        if (n !== t) {
            e[0] = n;
            a: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
                var s = 2 * (r + 1) - 1
                  , c = e[s]
                  , l = s + 1
                  , u = e[l];
                if (0 > i(c, n))
                    l < a && 0 > i(u, c) ? (e[r] = u,
                    e[l] = n,
                    r = l) : (e[r] = c,
                    e[s] = n,
                    r = s);
                else if (l < a && 0 > i(u, n))
                    e[r] = u,
                    e[l] = n,
                    r = l;
                else
                    break a
            }
        }
        return t
    }
    function i(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return n === 0 ? e.id - t.id : n
    }
    if (e.unstable_now = void 0,
    typeof performance == `object` && typeof performance.now == `function`) {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var o = Date
          , s = o.now();
        e.unstable_now = function() {
            return o.now() - s
        }
    }
    var c = []
      , l = []
      , u = 1
      , d = null
      , f = 3
      , p = !1
      , m = !1
      , h = !1
      , g = !1
      , _ = typeof setTimeout == `function` ? setTimeout : null
      , v = typeof clearTimeout == `function` ? clearTimeout : null
      , y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
        for (var i = n(l); i !== null; ) {
            if (i.callback === null)
                r(l);
            else if (i.startTime <= e)
                r(l),
                i.sortIndex = i.expirationTime,
                t(c, i);
            else
                break;
            i = n(l)
        }
    }
    function x(e) {
        if (h = !1,
        b(e),
        !m)
            if (n(c) !== null)
                m = !0,
                S || (S = !0,
                E());
            else {
                var t = n(l);
                t !== null && re(x, t.startTime - e)
            }
    }
    var S = !1
      , C = -1
      , w = 5
      , ee = -1;
    function te() {
        return g ? !0 : !(e.unstable_now() - ee < w)
    }
    function T() {
        if (g = !1,
        S) {
            var t = e.unstable_now();
            ee = t;
            var i = !0;
            try {
                a: {
                    m = !1,
                    h && (h = !1,
                    v(C),
                    C = -1),
                    p = !0;
                    var a = f;
                    try {
                        b: {
                            for (b(t),
                            d = n(c); d !== null && !(d.expirationTime > t && te()); ) {
                                var o = d.callback;
                                if (typeof o == `function`) {
                                    d.callback = null,
                                    f = d.priorityLevel;
                                    var s = o(d.expirationTime <= t);
                                    if (t = e.unstable_now(),
                                    typeof s == `function`) {
                                        d.callback = s,
                                        b(t),
                                        i = !0;
                                        break b
                                    }
                                    d === n(c) && r(c),
                                    b(t)
                                } else
                                    r(c);
                                d = n(c)
                            }
                            if (d !== null)
                                i = !0;
                            else {
                                var u = n(l);
                                u !== null && re(x, u.startTime - t),
                                i = !1
                            }
                        }
                        break a
                    } finally {
                        d = null,
                        f = a,
                        p = !1
                    }
                    i = void 0
                }
            } finally {
                i ? E() : S = !1
            }
        }
    }
    var E;
    if (typeof y == `function`)
        E = function() {
            y(T)
        }
        ;
    else if (typeof MessageChannel < `u`) {
        var D = new MessageChannel
          , ne = D.port2;
        D.port1.onmessage = T,
        E = function() {
            ne.postMessage(null)
        }
    } else
        E = function() {
            _(T, 0)
        }
        ;
    function re(t, n) {
        C = _(function() {
            t(e.unstable_now())
        }, n)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(e) {
        e.callback = null
    }
    ,
    e.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : w = 0 < e ? Math.floor(1e3 / e) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_next = function(e) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var t = 3;
            break;
        default:
            t = f
        }
        var n = f;
        f = t;
        try {
            return e()
        } finally {
            f = n
        }
    }
    ,
    e.unstable_requestPaint = function() {
        g = !0
    }
    ,
    e.unstable_runWithPriority = function(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            e = 3
        }
        var n = f;
        f = e;
        try {
            return t()
        } finally {
            f = n
        }
    }
    ,
    e.unstable_scheduleCallback = function(r, i, a) {
        var o = e.unstable_now();
        switch (typeof a == `object` && a ? (a = a.delay,
        a = typeof a == `number` && 0 < a ? o + a : o) : a = o,
        r) {
        case 1:
            var s = -1;
            break;
        case 2:
            s = 250;
            break;
        case 5:
            s = 1073741823;
            break;
        case 4:
            s = 1e4;
            break;
        default:
            s = 5e3
        }
        return s = a + s,
        r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1
        },
        a > o ? (r.sortIndex = a,
        t(l, r),
        n(c) === null && r === n(l) && (h ? (v(C),
        C = -1) : h = !0,
        re(x, a - o))) : (r.sortIndex = s,
        t(c, r),
        m || p || (m = !0,
        S || (S = !0,
        E()))),
        r
    }
    ,
    e.unstable_shouldYield = te,
    e.unstable_wrapCallback = function(e) {
        var t = f;
        return function() {
            var n = f;
            f = t;
            try {
                return e.apply(this, arguments)
            } finally {
                f = n
            }
        }
    }
}
))
  , p = o(( (e, t) => {
    t.exports = f()
}
))
  , m = o((e => {
    var t = d();
    function n(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
            t += `?args[]=` + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += `&args[]=` + encodeURIComponent(arguments[n])
        }
        return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
    }
    function r() {}
    var i = {
        d: {
            f: r,
            r: function() {
                throw Error(n(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , a = Symbol.for(`react.portal`);
    function o(e, t, n) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: a,
            key: r == null ? null : `` + r,
            children: e,
            containerInfo: t,
            implementation: n
        }
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
        if (e === `font`)
            return ``;
        if (typeof t == `string`)
            return t === `use-credentials` ? t : ``
    }
    e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i,
    e.createPortal = function(e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
            throw Error(n(299));
        return o(e, t, null, r)
    }
    ,
    e.flushSync = function(e) {
        var t = s.T
          , n = i.p;
        try {
            if (s.T = null,
            i.p = 2,
            e)
                return e()
        } finally {
            s.T = t,
            i.p = n,
            i.d.f()
        }
    }
    ,
    e.preconnect = function(e, t) {
        typeof e == `string` && (t ? (t = t.crossOrigin,
        t = typeof t == `string` ? t === `use-credentials` ? t : `` : void 0) : t = null,
        i.d.C(e, t))
    }
    ,
    e.prefetchDNS = function(e) {
        typeof e == `string` && i.d.D(e)
    }
    ,
    e.preinit = function(e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
            var n = t.as
              , r = c(n, t.crossOrigin)
              , a = typeof t.integrity == `string` ? t.integrity : void 0
              , o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
            n === `style` ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o
            }) : n === `script` && i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0
            })
        }
    }
    ,
    e.preinitModule = function(e, t) {
        if (typeof e == `string`)
            if (typeof t == `object` && t) {
                if (t.as == null || t.as === `script`) {
                    var n = c(t.as, t.crossOrigin);
                    i.d.M(e, {
                        crossOrigin: n,
                        integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                        nonce: typeof t.nonce == `string` ? t.nonce : void 0
                    })
                }
            } else
                t ?? i.d.M(e)
    }
    ,
    e.preload = function(e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
            var n = t.as
              , r = c(n, t.crossOrigin);
            i.d.L(e, n, {
                crossOrigin: r,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                type: typeof t.type == `string` ? t.type : void 0,
                fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
                referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
                imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
                imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
                media: typeof t.media == `string` ? t.media : void 0
            })
        }
    }
    ,
    e.preloadModule = function(e, t) {
        if (typeof e == `string`)
            if (t) {
                var n = c(t.as, t.crossOrigin);
                i.d.m(e, {
                    as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
                    crossOrigin: n,
                    integrity: typeof t.integrity == `string` ? t.integrity : void 0
                })
            } else
                i.d.m(e)
    }
    ,
    e.requestFormReset = function(e) {
        i.d.r(e)
    }
    ,
    e.unstable_batchedUpdates = function(e, t) {
        return e(t)
    }
    ,
    e.useFormState = function(e, t, n) {
        return s.H.useFormState(e, t, n)
    }
    ,
    e.useFormStatus = function() {
        return s.H.useHostTransitionStatus()
    }
    ,
    e.version = `19.2.4`
}
))
  , h = o(( (e, t) => {
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (e) {
                console.error(e)
            }
    }
    n(),
    t.exports = m()
}
))
  , g = o((e => {
    var t = p()
      , n = d()
      , r = h();
    function i(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
            t += `?args[]=` + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += `&args[]=` + encodeURIComponent(arguments[n])
        }
        return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
    }
    function a(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function o(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                t.flags & 4098 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function s(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function c(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function l(e) {
        if (o(e) !== e)
            throw Error(i(188))
    }
    function u(e) {
        var t = e.alternate;
        if (!t) {
            if (t = o(e),
            t === null)
                throw Error(i(188));
            return t === e ? e : null
        }
        for (var n = e, r = t; ; ) {
            var a = n.return;
            if (a === null)
                break;
            var s = a.alternate;
            if (s === null) {
                if (r = a.return,
                r !== null) {
                    n = r;
                    continue
                }
                break
            }
            if (a.child === s.child) {
                for (s = a.child; s; ) {
                    if (s === n)
                        return l(a),
                        e;
                    if (s === r)
                        return l(a),
                        t;
                    s = s.sibling
                }
                throw Error(i(188))
            }
            if (n.return !== r.return)
                n = a,
                r = s;
            else {
                for (var c = !1, u = a.child; u; ) {
                    if (u === n) {
                        c = !0,
                        n = a,
                        r = s;
                        break
                    }
                    if (u === r) {
                        c = !0,
                        r = a,
                        n = s;
                        break
                    }
                    u = u.sibling
                }
                if (!c) {
                    for (u = s.child; u; ) {
                        if (u === n) {
                            c = !0,
                            n = s,
                            r = a;
                            break
                        }
                        if (u === r) {
                            c = !0,
                            r = s,
                            n = a;
                            break
                        }
                        u = u.sibling
                    }
                    if (!c)
                        throw Error(i(189))
                }
            }
            if (n.alternate !== r)
                throw Error(i(190))
        }
        if (n.tag !== 3)
            throw Error(i(188));
        return n.stateNode.current === n ? e : t
    }
    function f(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = f(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var m = Object.assign
      , g = Symbol.for(`react.element`)
      , _ = Symbol.for(`react.transitional.element`)
      , v = Symbol.for(`react.portal`)
      , y = Symbol.for(`react.fragment`)
      , b = Symbol.for(`react.strict_mode`)
      , x = Symbol.for(`react.profiler`)
      , S = Symbol.for(`react.consumer`)
      , C = Symbol.for(`react.context`)
      , w = Symbol.for(`react.forward_ref`)
      , ee = Symbol.for(`react.suspense`)
      , te = Symbol.for(`react.suspense_list`)
      , T = Symbol.for(`react.memo`)
      , E = Symbol.for(`react.lazy`)
      , D = Symbol.for(`react.activity`)
      , ne = Symbol.for(`react.memo_cache_sentinel`)
      , re = Symbol.iterator;
    function ie(e) {
        return typeof e != `object` || !e ? null : (e = re && e[re] || e[`@@iterator`],
        typeof e == `function` ? e : null)
    }
    var ae = Symbol.for(`react.client.reference`);
    function oe(e) {
        if (e == null)
            return null;
        if (typeof e == `function`)
            return e.$$typeof === ae ? null : e.displayName || e.name || null;
        if (typeof e == `string`)
            return e;
        switch (e) {
        case y:
            return `Fragment`;
        case x:
            return `Profiler`;
        case b:
            return `StrictMode`;
        case ee:
            return `Suspense`;
        case te:
            return `SuspenseList`;
        case D:
            return `Activity`
        }
        if (typeof e == `object`)
            switch (e.$$typeof) {
            case v:
                return `Portal`;
            case C:
                return e.displayName || `Context`;
            case S:
                return (e._context.displayName || `Context`) + `.Consumer`;
            case w:
                var t = e.render;
                return e = e.displayName,
                e ||= (e = t.displayName || t.name || ``,
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`),
                e;
            case T:
                return t = e.displayName || null,
                t === null ? oe(e.type) || `Memo` : t;
            case E:
                t = e._payload,
                e = e._init;
                try {
                    return oe(e(t))
                } catch {}
            }
        return null
    }
    var se = Array.isArray
      , O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , ce = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , le = []
      , ue = -1;
    function de(e) {
        return {
            current: e
        }
    }
    function A(e) {
        0 > ue || (e.current = le[ue],
        le[ue] = null,
        ue--)
    }
    function j(e, t) {
        ue++,
        le[ue] = e.current,
        e.current = t
    }
    var fe = de(null)
      , pe = de(null)
      , me = de(null)
      , he = de(null);
    function ge(e, t) {
        switch (j(me, t),
        j(pe, e),
        j(fe, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = Vd(t),
                e = Hd(t, e);
            else
                switch (e) {
                case `svg`:
                    e = 1;
                    break;
                case `math`:
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        A(fe),
        j(fe, e)
    }
    function _e() {
        A(fe),
        A(pe),
        A(me)
    }
    function ve(e) {
        e.memoizedState !== null && j(he, e);
        var t = fe.current
          , n = Hd(t, e.type);
        t !== n && (j(pe, e),
        j(fe, n))
    }
    function ye(e) {
        pe.current === e && (A(fe),
        A(pe)),
        he.current === e && (A(he),
        Qf._currentValue = ce)
    }
    var be, xe;
    function M(e) {
        if (be === void 0)
            try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                be = t && t[1] || ``,
                xe = -1 < e.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``
            }
        return `
` + be + e + xe
    }
    var Se = !1;
    function Ce(e, t) {
        if (!e || Se)
            return ``;
        Se = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var r = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var n = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(n.prototype, `props`, {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == `object` && Reflect.construct) {
                                try {
                                    Reflect.construct(n, [])
                                } catch (e) {
                                    var r = e
                                }
                                Reflect.construct(e, [], n)
                            } else {
                                try {
                                    n.call()
                                } catch (e) {
                                    r = e
                                }
                                e.call(n.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (e) {
                                r = e
                            }
                            (n = e()) && typeof n.catch == `function` && n.catch(function() {})
                        }
                    } catch (e) {
                        if (e && r && typeof e.stack == `string`)
                            return [e.stack, r.stack]
                    }
                    return [null, null]
                }
            };
            r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
            var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
            i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, `name`, {
                value: `DetermineComponentFrameRoot`
            });
            var a = r.DetermineComponentFrameRoot()
              , o = a[0]
              , s = a[1];
            if (o && s) {
                var c = o.split(`
`)
                  , l = s.split(`
`);
                for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`); )
                    r++;
                for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`); )
                    i++;
                if (r === c.length || i === l.length)
                    for (r = c.length - 1,
                    i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i]; )
                        i--;
                for (; 1 <= r && 0 <= i; r--,
                i--)
                    if (c[r] !== l[i]) {
                        if (r !== 1 || i !== 1)
                            do
                                if (r--,
                                i--,
                                0 > i || c[r] !== l[i]) {
                                    var u = `
` + c[r].replace(` at new `, ` at `);
                                    return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)),
                                    u
                                }
                            while (1 <= r && 0 <= i);
                        break
                    }
            }
        } finally {
            Se = !1,
            Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : ``) ? M(n) : ``
    }
    function we(e, t) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return M(e.type);
        case 16:
            return M(`Lazy`);
        case 13:
            return e.child !== t && t !== null ? M(`Suspense Fallback`) : M(`Suspense`);
        case 19:
            return M(`SuspenseList`);
        case 0:
        case 15:
            return Ce(e.type, !1);
        case 11:
            return Ce(e.type.render, !1);
        case 1:
            return Ce(e.type, !0);
        case 31:
            return M(`Activity`);
        default:
            return ``
        }
    }
    function Te(e) {
        try {
            var t = ``
              , n = null;
            do
                t += we(e, n),
                n = e,
                e = e.return;
            while (e);
            return t
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }
    var Ee = Object.prototype.hasOwnProperty
      , De = t.unstable_scheduleCallback
      , Oe = t.unstable_cancelCallback
      , ke = t.unstable_shouldYield
      , Ae = t.unstable_requestPaint
      , je = t.unstable_now
      , Me = t.unstable_getCurrentPriorityLevel
      , Ne = t.unstable_ImmediatePriority
      , Pe = t.unstable_UserBlockingPriority
      , Fe = t.unstable_NormalPriority
      , Ie = t.unstable_LowPriority
      , Le = t.unstable_IdlePriority
      , Re = t.log
      , ze = t.unstable_setDisableYieldValue
      , Be = null
      , Ve = null;
    function He(e) {
        if (typeof Re == `function` && ze(e),
        Ve && typeof Ve.setStrictMode == `function`)
            try {
                Ve.setStrictMode(Be, e)
            } catch {}
    }
    var Ue = Math.clz32 ? Math.clz32 : Ke
      , We = Math.log
      , Ge = Math.LN2;
    function Ke(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (We(e) / Ge | 0) | 0
    }
    var qe = 256
      , Je = 262144
      , Ye = 4194304;
    function Xe(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function Ze(e, t, n) {
        var r = e.pendingLanes;
        if (r === 0)
            return 0;
        var i = 0
          , a = e.suspendedLanes
          , o = e.pingedLanes;
        e = e.warmLanes;
        var s = r & 134217727;
        return s === 0 ? (s = r & ~a,
        s === 0 ? o === 0 ? n || (n = r & ~e,
        n !== 0 && (i = Xe(n))) : i = Xe(o) : i = Xe(s)) : (r = s & ~a,
        r === 0 ? (o &= s,
        o === 0 ? n || (n = s & ~e,
        n !== 0 && (i = Xe(n))) : i = Xe(o)) : i = Xe(r)),
        i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i,
        n = t & -t,
        a >= n || a === 32 && n & 4194048) ? t : i
    }
    function Qe(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function $e(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function N() {
        var e = Ye;
        return Ye <<= 1,
        !(Ye & 62914560) && (Ye = 4194304),
        e
    }
    function P(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function et(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function tt(e, t, n, r, i, a) {
        var o = e.pendingLanes;
        e.pendingLanes = n,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= n,
        e.entangledLanes &= n,
        e.errorRecoveryDisabledLanes &= n,
        e.shellSuspendCounter = 0;
        var s = e.entanglements
          , c = e.expirationTimes
          , l = e.hiddenUpdates;
        for (n = o & ~n; 0 < n; ) {
            var u = 31 - Ue(n)
              , d = 1 << u;
            s[u] = 0,
            c[u] = -1;
            var f = l[u];
            if (f !== null)
                for (l[u] = null,
                u = 0; u < f.length; u++) {
                    var p = f[u];
                    p !== null && (p.lane &= -536870913)
                }
            n &= ~d
        }
        r !== 0 && nt(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t))
    }
    function nt(e, t, n) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var r = 31 - Ue(t);
        e.entangledLanes |= t,
        e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930
    }
    function rt(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var r = 31 - Ue(n)
              , i = 1 << r;
            i & t | e[r] & t && (e[r] |= t),
            n &= ~i
        }
    }
    function it(e, t) {
        var n = t & -t;
        return n = n & 42 ? 1 : at(n),
        (n & (e.suspendedLanes | t)) === 0 ? n : 0
    }
    function at(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function ot(e) {
        return e &= -e,
        2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2
    }
    function st() {
        var e = k.p;
        return e === 0 ? (e = window.event,
        e === void 0 ? 32 : mp(e.type)) : e
    }
    function ct(e, t) {
        var n = k.p;
        try {
            return k.p = e,
            t()
        } finally {
            k.p = n
        }
    }
    var lt = Math.random().toString(36).slice(2)
      , ut = `__reactFiber$` + lt
      , dt = `__reactProps$` + lt
      , ft = `__reactContainer$` + lt
      , pt = `__reactEvents$` + lt
      , mt = `__reactListeners$` + lt
      , ht = `__reactHandles$` + lt
      , gt = `__reactResources$` + lt
      , _t = `__reactMarker$` + lt;
    function vt(e) {
        delete e[ut],
        delete e[dt],
        delete e[pt],
        delete e[mt],
        delete e[ht]
    }
    function yt(e) {
        var t = e[ut];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[ft] || n[ut]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = df(e); e !== null; ) {
                        if (n = e[ut])
                            return n;
                        e = df(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function bt(e) {
        if (e = e[ut] || e[ft]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function xt(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(i(33))
    }
    function St(e) {
        var t = e[gt];
        return t ||= e[gt] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        },
        t
    }
    function Ct(e) {
        e[_t] = !0
    }
    var wt = new Set
      , Tt = {};
    function F(e, t) {
        Et(e, t),
        Et(e + `Capture`, t)
    }
    function Et(e, t) {
        for (Tt[e] = t,
        e = 0; e < t.length; e++)
            wt.add(t[e])
    }
    var Dt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`)
      , Ot = {}
      , kt = {};
    function At(e) {
        return Ee.call(kt, e) ? !0 : Ee.call(Ot, e) ? !1 : Dt.test(e) ? kt[e] = !0 : (Ot[e] = !0,
        !1)
    }
    function jt(e, t, n) {
        if (At(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case `undefined`:
                case `function`:
                case `symbol`:
                    e.removeAttribute(t);
                    return;
                case `boolean`:
                    var r = t.toLowerCase().slice(0, 5);
                    if (r !== `data-` && r !== `aria-`) {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, `` + n)
            }
    }
    function Mt(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, `` + n)
        }
    }
    function Nt(e, t, n, r) {
        if (r === null)
            e.removeAttribute(n);
        else {
            switch (typeof r) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
                e.removeAttribute(n);
                return
            }
            e.setAttributeNS(t, n, `` + r)
        }
    }
    function Pt(e) {
        switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
            return e;
        case `object`:
            return e;
        default:
            return ``
        }
    }
    function Ft(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`)
    }
    function It(e, t, n) {
        var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
            var i = r.get
              , a = r.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(e) {
                    n = `` + e,
                    a.call(this, e)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: r.enumerable
            }),
            {
                getValue: function() {
                    return n
                },
                setValue: function(e) {
                    n = `` + e
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Lt(e) {
        if (!e._valueTracker) {
            var t = Ft(e) ? `checked` : `value`;
            e._valueTracker = It(e, t, `` + e[t])
        }
    }
    function Rt(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , r = ``;
        return e && (r = Ft(e) ? e.checked ? `true` : `false` : e.value),
        e = r,
        e === n ? !1 : (t.setValue(e),
        !0)
    }
    function zt(e) {
        if (e ||= typeof document < `u` ? document : void 0,
        e === void 0)
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Bt = /[\n"\\]/g;
    function Vt(e) {
        return e.replace(Bt, function(e) {
            return `\\` + e.charCodeAt(0).toString(16) + ` `
        })
    }
    function Ht(e, t, n, r, i, a, o, s) {
        e.name = ``,
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` ? e.type = o : e.removeAttribute(`type`),
        t == null ? o !== `submit` && o !== `reset` || e.removeAttribute(`value`) : o === `number` ? (t === 0 && e.value === `` || e.value != t) && (e.value = `` + Pt(t)) : e.value !== `` + Pt(t) && (e.value = `` + Pt(t)),
        t == null ? n == null ? r != null && e.removeAttribute(`value`) : Wt(e, o, Pt(n)) : Wt(e, o, Pt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean` ? e.name = `` + Pt(s) : e.removeAttribute(`name`)
    }
    function Ut(e, t, n, r, i, a, o, s) {
        if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a),
        t != null || n != null) {
            if (!(a !== `submit` && a !== `reset` || t != null)) {
                Lt(e);
                return
            }
            n = n == null ? `` : `` + Pt(n),
            t = t == null ? n : `` + Pt(t),
            s || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        r ??= i,
        r = typeof r != `function` && typeof r != `symbol` && !!r,
        e.checked = s ? e.checked : !!r,
        e.defaultChecked = !!r,
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o),
        Lt(e)
    }
    function Wt(e, t, n) {
        t === `number` && zt(e.ownerDocument) === e || e.defaultValue === `` + n || (e.defaultValue = `` + n)
    }
    function Gt(e, t, n, r) {
        if (e = e.options,
        t) {
            t = {};
            for (var i = 0; i < n.length; i++)
                t[`$` + n[i]] = !0;
            for (n = 0; n < e.length; n++)
                i = t.hasOwnProperty(`$` + e[n].value),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = `` + Pt(n),
            t = null,
            i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0,
                    r && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Kt(e, t, n) {
        if (t != null && (t = `` + Pt(t),
        t !== e.value && (e.value = t),
        n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n == null ? `` : `` + Pt(n)
    }
    function qt(e, t, n, r) {
        if (t == null) {
            if (r != null) {
                if (n != null)
                    throw Error(i(92));
                if (se(r)) {
                    if (1 < r.length)
                        throw Error(i(93));
                    r = r[0]
                }
                n = r
            }
            n ??= ``,
            t = n
        }
        n = Pt(t),
        e.defaultValue = n,
        r = e.textContent,
        r === n && r !== `` && r !== null && (e.value = r),
        Lt(e)
    }
    function Jt(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Yt = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
    function Xt(e, t, n) {
        var r = t.indexOf(`--`) === 0;
        n == null || typeof n == `boolean` || n === `` ? r ? e.setProperty(t, ``) : t === `float` ? e.cssFloat = `` : e[t] = `` : r ? e.setProperty(t, n) : typeof n != `number` || n === 0 || Yt.has(t) ? t === `float` ? e.cssFloat = n : e[t] = (`` + n).trim() : e[t] = n + `px`
    }
    function Zt(e, t, n) {
        if (t != null && typeof t != `object`)
            throw Error(i(62));
        if (e = e.style,
        n != null) {
            for (var r in n)
                !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``);
            for (var a in t)
                r = t[a],
                t.hasOwnProperty(a) && n[a] !== r && Xt(e, a, r)
        } else
            for (var o in t)
                t.hasOwnProperty(o) && Xt(e, o, t[o])
    }
    function Qt(e) {
        if (e.indexOf(`-`) === -1)
            return !1;
        switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
            return !1;
        default:
            return !0
        }
    }
    var $t = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]])
      , en = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function tn(e) {
        return en.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e
    }
    function nn() {}
    var rn = null;
    function an(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var on = null
      , sn = null;
    function cn(e) {
        var t = bt(e);
        if (t && (e = t.stateNode)) {
            var n = e[dt] || null;
            a: switch (e = t.stateNode,
            t.type) {
            case `input`:
                if (Ht(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                t = n.name,
                n.type === `radio` && t != null) {
                    for (n = e; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll(`input[name="` + Vt(`` + t) + `"][type="radio"]`),
                    t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = r[dt] || null;
                            if (!a)
                                throw Error(i(90));
                            Ht(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        r = n[t],
                        r.form === e.form && Rt(r)
                }
                break a;
            case `textarea`:
                Kt(e, n.value, n.defaultValue);
                break a;
            case `select`:
                t = n.value,
                t != null && Gt(e, !!n.multiple, t, !1)
            }
        }
    }
    var ln = !1;
    function un(e, t, n) {
        if (ln)
            return e(t, n);
        ln = !0;
        try {
            return e(t)
        } finally {
            if (ln = !1,
            (on !== null || sn !== null) && (bu(),
            on && (t = on,
            e = sn,
            sn = on = null,
            cn(t),
            e)))
                for (t = 0; t < e.length; t++)
                    cn(e[t])
        }
    }
    function dn(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var r = n[dt] || null;
        if (r === null)
            return null;
        n = r[t];
        a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
            (r = !r.disabled) || (e = e.type,
            r = !(e === `button` || e === `input` || e === `select` || e === `textarea`)),
            e = !r;
            break a;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != `function`)
            throw Error(i(231, t, typeof n));
        return n
    }
    var fn = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0)
      , pn = !1;
    if (fn)
        try {
            var mn = {};
            Object.defineProperty(mn, `passive`, {
                get: function() {
                    pn = !0
                }
            }),
            window.addEventListener(`test`, mn, mn),
            window.removeEventListener(`test`, mn, mn)
        } catch {
            pn = !1
        }
    var hn = null
      , gn = null
      , _n = null;
    function vn() {
        if (_n)
            return _n;
        var e, t = gn, n = t.length, r, i = `value`in hn ? hn.value : hn.textContent, a = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++)
            ;
        var o = n - e;
        for (r = 1; r <= o && t[n - r] === i[a - r]; r++)
            ;
        return _n = i.slice(e, 1 < r ? 1 - r : void 0)
    }
    function yn(e) {
        var t = e.keyCode;
        return `charCode`in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function bn() {
        return !0
    }
    function xn() {
        return !1
    }
    function Sn(e) {
        function t(t, n, r, i, a) {
            for (var o in this._reactName = t,
            this._targetInst = r,
            this.type = n,
            this.nativeEvent = i,
            this.target = a,
            this.currentTarget = null,
            e)
                e.hasOwnProperty(o) && (t = e[o],
                this[o] = t ? t(i) : i[o]);
            return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? bn : xn,
            this.isPropagationStopped = xn,
            this
        }
        return m(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = !1),
                this.isDefaultPrevented = bn)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
                this.isPropagationStopped = bn)
            },
            persist: function() {},
            isPersistent: bn
        }),
        t
    }
    var Cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, wn = Sn(Cn), Tn = m({}, Cn, {
        view: 0,
        detail: 0
    }), En = Sn(Tn), Dn, On, kn, An = m({}, Tn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Vn,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return `movementX`in e ? e.movementX : (e !== kn && (kn && e.type === `mousemove` ? (Dn = e.screenX - kn.screenX,
            On = e.screenY - kn.screenY) : On = Dn = 0,
            kn = e),
            Dn)
        },
        movementY: function(e) {
            return `movementY`in e ? e.movementY : On
        }
    }), jn = Sn(An), Mn = Sn(m({}, An, {
        dataTransfer: 0
    })), Nn = Sn(m({}, Tn, {
        relatedTarget: 0
    })), Pn = Sn(m({}, Cn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })), Fn = Sn(m({}, Cn, {
        clipboardData: function(e) {
            return `clipboardData`in e ? e.clipboardData : window.clipboardData
        }
    })), In = Sn(m({}, Cn, {
        data: 0
    })), Ln = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`
    }, Rn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`
    }, zn = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`
    };
    function Bn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = zn[e]) ? !!t[e] : !1
    }
    function Vn() {
        return Bn
    }
    var Hn = Sn(m({}, Tn, {
        key: function(e) {
            if (e.key) {
                var t = Ln[e.key] || e.key;
                if (t !== `Unidentified`)
                    return t
            }
            return e.type === `keypress` ? (e = yn(e),
            e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Rn[e.keyCode] || `Unidentified` : ``
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Vn,
        charCode: function(e) {
            return e.type === `keypress` ? yn(e) : 0
        },
        keyCode: function(e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === `keypress` ? yn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
        }
    }))
      , Un = Sn(m({}, An, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }))
      , Wn = Sn(m({}, Tn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Vn
    }))
      , Gn = Sn(m({}, Cn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }))
      , Kn = Sn(m({}, An, {
        deltaX: function(e) {
            return `deltaX`in e ? e.deltaX : `wheelDeltaX`in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return `deltaY`in e ? e.deltaY : `wheelDeltaY`in e ? -e.wheelDeltaY : `wheelDelta`in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }))
      , qn = Sn(m({}, Cn, {
        newState: 0,
        oldState: 0
    }))
      , Jn = [9, 13, 27, 32]
      , Yn = fn && `CompositionEvent`in window
      , Xn = null;
    fn && `documentMode`in document && (Xn = document.documentMode);
    var Zn = fn && `TextEvent`in window && !Xn
      , Qn = fn && (!Yn || Xn && 8 < Xn && 11 >= Xn)
      , $n = ` `
      , er = !1;
    function tr(e, t) {
        switch (e) {
        case `keyup`:
            return Jn.indexOf(t.keyCode) !== -1;
        case `keydown`:
            return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
            return !0;
        default:
            return !1
        }
    }
    function nr(e) {
        return e = e.detail,
        typeof e == `object` && `data`in e ? e.data : null
    }
    var rr = !1;
    function ir(e, t) {
        switch (e) {
        case `compositionend`:
            return nr(t);
        case `keypress`:
            return t.which === 32 ? (er = !0,
            $n) : null;
        case `textInput`:
            return e = t.data,
            e === $n && er ? null : e;
        default:
            return null
        }
    }
    function ar(e, t) {
        if (rr)
            return e === `compositionend` || !Yn && tr(e, t) ? (e = vn(),
            _n = gn = hn = null,
            rr = !1,
            e) : null;
        switch (e) {
        case `paste`:
            return null;
        case `keypress`:
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case `compositionend`:
            return Qn && t.locale !== `ko` ? null : t.data;
        default:
            return null
        }
    }
    var or = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function sr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === `input` ? !!or[e.type] : t === `textarea`
    }
    function cr(e, t, n, r) {
        on ? sn ? sn.push(r) : sn = [r] : on = r,
        t = Ed(t, `onChange`),
        0 < t.length && (n = new wn(`onChange`,`change`,null,n,r),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var lr = null
      , ur = null;
    function dr(e) {
        yd(e, 0)
    }
    function fr(e) {
        if (Rt(xt(e)))
            return e
    }
    function pr(e, t) {
        if (e === `change`)
            return t
    }
    var mr = !1;
    if (fn) {
        var hr;
        if (fn) {
            var gr = `oninput`in document;
            if (!gr) {
                var _r = document.createElement(`div`);
                _r.setAttribute(`oninput`, `return;`),
                gr = typeof _r.oninput == `function`
            }
            hr = gr
        } else
            hr = !1;
        mr = hr && (!document.documentMode || 9 < document.documentMode)
    }
    function vr() {
        lr && (lr.detachEvent(`onpropertychange`, yr),
        ur = lr = null)
    }
    function yr(e) {
        if (e.propertyName === `value` && fr(ur)) {
            var t = [];
            cr(t, ur, e, an(e)),
            un(dr, t)
        }
    }
    function br(e, t, n) {
        e === `focusin` ? (vr(),
        lr = t,
        ur = n,
        lr.attachEvent(`onpropertychange`, yr)) : e === `focusout` && vr()
    }
    function xr(e) {
        if (e === `selectionchange` || e === `keyup` || e === `keydown`)
            return fr(ur)
    }
    function Sr(e, t) {
        if (e === `click`)
            return fr(t)
    }
    function Cr(e, t) {
        if (e === `input` || e === `change`)
            return fr(t)
    }
    function wr(e, t) {
        return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t
    }
    var Tr = typeof Object.is == `function` ? Object.is : wr;
    function Er(e, t) {
        if (Tr(e, t))
            return !0;
        if (typeof e != `object` || !e || typeof t != `object` || !t)
            return !1;
        var n = Object.keys(e)
          , r = Object.keys(t);
        if (n.length !== r.length)
            return !1;
        for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!Ee.call(t, i) || !Tr(e[i], t[i]))
                return !1
        }
        return !0
    }
    function Dr(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Or(e, t) {
        var n = Dr(e);
        e = 0;
        for (var r; n; ) {
            if (n.nodeType === 3) {
                if (r = e + n.textContent.length,
                e <= t && r >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = r
            }
            a: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break a
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Dr(n)
        }
    }
    function kr(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kr(e, t.parentNode) : `contains`in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Ar(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = zt(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == `string`
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = zt(e.document)
        }
        return t
    }
    function jr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`)
    }
    var Mr = fn && `documentMode`in document && 11 >= document.documentMode
      , Nr = null
      , Pr = null
      , Fr = null
      , Ir = !1;
    function Lr(e, t, n) {
        var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        Ir || Nr == null || Nr !== zt(r) || (r = Nr,
        `selectionStart`in r && jr(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
        r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }),
        Fr && Er(Fr, r) || (Fr = r,
        r = Ed(Pr, `onSelect`),
        0 < r.length && (t = new wn(`onSelect`,`select`,null,t,n),
        e.push({
            event: t,
            listeners: r
        }),
        t.target = Nr)))
    }
    function Rr(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n[`Webkit` + e] = `webkit` + t,
        n[`Moz` + e] = `moz` + t,
        n
    }
    var zr = {
        animationend: Rr(`Animation`, `AnimationEnd`),
        animationiteration: Rr(`Animation`, `AnimationIteration`),
        animationstart: Rr(`Animation`, `AnimationStart`),
        transitionrun: Rr(`Transition`, `TransitionRun`),
        transitionstart: Rr(`Transition`, `TransitionStart`),
        transitioncancel: Rr(`Transition`, `TransitionCancel`),
        transitionend: Rr(`Transition`, `TransitionEnd`)
    }
      , Br = {}
      , Vr = {};
    fn && (Vr = document.createElement(`div`).style,
    `AnimationEvent`in window || (delete zr.animationend.animation,
    delete zr.animationiteration.animation,
    delete zr.animationstart.animation),
    `TransitionEvent`in window || delete zr.transitionend.transition);
    function Hr(e) {
        if (Br[e])
            return Br[e];
        if (!zr[e])
            return e;
        var t = zr[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Vr)
                return Br[e] = t[n];
        return e
    }
    var Ur = Hr(`animationend`)
      , Wr = Hr(`animationiteration`)
      , Gr = Hr(`animationstart`)
      , Kr = Hr(`transitionrun`)
      , qr = Hr(`transitionstart`)
      , Jr = Hr(`transitioncancel`)
      , Yr = Hr(`transitionend`)
      , Xr = new Map
      , Zr = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
    Zr.push(`scrollEnd`);
    function Qr(e, t) {
        Xr.set(e, t),
        F(t, [e])
    }
    var $r = typeof reportError == `function` ? reportError : function(e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            var t = new window.ErrorEvent(`error`,{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, e);
            return
        }
        console.error(e)
    }
      , ei = []
      , ti = 0
      , ni = 0;
    function ri() {
        for (var e = ti, t = ni = ti = 0; t < e; ) {
            var n = ei[t];
            ei[t++] = null;
            var r = ei[t];
            ei[t++] = null;
            var i = ei[t];
            ei[t++] = null;
            var a = ei[t];
            if (ei[t++] = null,
            r !== null && i !== null) {
                var o = r.pending;
                o === null ? i.next = i : (i.next = o.next,
                o.next = i),
                r.pending = i
            }
            a !== 0 && si(n, i, a)
        }
    }
    function ii(e, t, n, r) {
        ei[ti++] = e,
        ei[ti++] = t,
        ei[ti++] = n,
        ei[ti++] = r,
        ni |= r,
        e.lanes |= r,
        e = e.alternate,
        e !== null && (e.lanes |= r)
    }
    function ai(e, t, n, r) {
        return ii(e, t, n, r),
        ci(e)
    }
    function oi(e, t) {
        return ii(e, null, null, t),
        ci(e)
    }
    function si(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        r !== null && (r.lanes |= n);
        for (var i = !1, a = e.return; a !== null; )
            a.childLanes |= n,
            r = a.alternate,
            r !== null && (r.childLanes |= n),
            a.tag === 22 && (e = a.stateNode,
            e === null || e._visibility & 1 || (i = !0)),
            e = a,
            a = a.return;
        return e.tag === 3 ? (a = e.stateNode,
        i && t !== null && (i = 31 - Ue(n),
        e = a.hiddenUpdates,
        r = e[i],
        r === null ? e[i] = [t] : r.push(t),
        t.lane = n | 536870912),
        a) : null
    }
    function ci(e) {
        if (50 < du)
            throw du = 0,
            fu = null,
            Error(i(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var li = {};
    function ui(e, t, n, r) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = r,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function di(e, t, n, r) {
        return new ui(e,t,n,r)
    }
    function fi(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function pi(e, t) {
        var n = e.alternate;
        return n === null ? (n = di(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 65011712,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.refCleanup = e.refCleanup,
        n
    }
    function mi(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = n.childLanes,
        e.lanes = n.lanes,
        e.child = n.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = n.memoizedProps,
        e.memoizedState = n.memoizedState,
        e.updateQueue = n.updateQueue,
        e.type = n.type,
        t = n.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function hi(e, t, n, r, a, o) {
        var s = 0;
        if (r = e,
        typeof e == `function`)
            fi(e) && (s = 1);
        else if (typeof e == `string`)
            s = Uf(e, n, fe.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
        else
            a: switch (e) {
            case D:
                return e = di(31, n, t, a),
                e.elementType = D,
                e.lanes = o,
                e;
            case y:
                return gi(n.children, a, o, t);
            case b:
                s = 8,
                a |= 24;
                break;
            case x:
                return e = di(12, n, t, a | 2),
                e.elementType = x,
                e.lanes = o,
                e;
            case ee:
                return e = di(13, n, t, a),
                e.elementType = ee,
                e.lanes = o,
                e;
            case te:
                return e = di(19, n, t, a),
                e.elementType = te,
                e.lanes = o,
                e;
            default:
                if (typeof e == `object` && e)
                    switch (e.$$typeof) {
                    case C:
                        s = 10;
                        break a;
                    case S:
                        s = 9;
                        break a;
                    case w:
                        s = 11;
                        break a;
                    case T:
                        s = 14;
                        break a;
                    case E:
                        s = 16,
                        r = null;
                        break a
                    }
                s = 29,
                n = Error(i(130, e === null ? `null` : typeof e, ``)),
                r = null
            }
        return t = di(s, n, t, a),
        t.elementType = e,
        t.type = r,
        t.lanes = o,
        t
    }
    function gi(e, t, n, r) {
        return e = di(7, e, r, t),
        e.lanes = n,
        e
    }
    function _i(e, t, n) {
        return e = di(6, e, null, t),
        e.lanes = n,
        e
    }
    function vi(e) {
        var t = di(18, null, null, 0);
        return t.stateNode = e,
        t
    }
    function yi(e, t, n) {
        return t = di(4, e.children === null ? [] : e.children, e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var bi = new WeakMap;
    function xi(e, t) {
        if (typeof e == `object` && e) {
            var n = bi.get(e);
            return n === void 0 ? (t = {
                value: e,
                source: t,
                stack: Te(t)
            },
            bi.set(e, t),
            t) : n
        }
        return {
            value: e,
            source: t,
            stack: Te(t)
        }
    }
    var Si = []
      , Ci = 0
      , wi = null
      , Ti = 0
      , Ei = []
      , Di = 0
      , Oi = null
      , ki = 1
      , Ai = ``;
    function ji(e, t) {
        Si[Ci++] = Ti,
        Si[Ci++] = wi,
        wi = e,
        Ti = t
    }
    function Mi(e, t, n) {
        Ei[Di++] = ki,
        Ei[Di++] = Ai,
        Ei[Di++] = Oi,
        Oi = e;
        var r = ki;
        e = Ai;
        var i = 32 - Ue(r) - 1;
        r &= ~(1 << i),
        n += 1;
        var a = 32 - Ue(t) + i;
        if (30 < a) {
            var o = i - i % 5;
            a = (r & (1 << o) - 1).toString(32),
            r >>= o,
            i -= o,
            ki = 1 << 32 - Ue(t) + i | n << i | r,
            Ai = a + e
        } else
            ki = 1 << a | n << i | r,
            Ai = e
    }
    function Ni(e) {
        e.return !== null && (ji(e, 1),
        Mi(e, 1, 0))
    }
    function Pi(e) {
        for (; e === wi; )
            wi = Si[--Ci],
            Si[Ci] = null,
            Ti = Si[--Ci],
            Si[Ci] = null;
        for (; e === Oi; )
            Oi = Ei[--Di],
            Ei[Di] = null,
            Ai = Ei[--Di],
            Ei[Di] = null,
            ki = Ei[--Di],
            Ei[Di] = null
    }
    function Fi(e, t) {
        Ei[Di++] = ki,
        Ei[Di++] = Ai,
        Ei[Di++] = Oi,
        ki = t.id,
        Ai = t.overflow,
        Oi = e
    }
    var I = null
      , L = null
      , R = !1
      , Ii = null
      , Li = !1
      , Ri = Error(i(519));
    function zi(e) {
        throw Gi(xi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e)),
        Ri
    }
    function Bi(e) {
        var t = e.stateNode
          , n = e.type
          , r = e.memoizedProps;
        switch (t[ut] = e,
        t[dt] = r,
        n) {
        case `dialog`:
            Q(`cancel`, t),
            Q(`close`, t);
            break;
        case `iframe`:
        case `object`:
        case `embed`:
            Q(`load`, t);
            break;
        case `video`:
        case `audio`:
            for (n = 0; n < _d.length; n++)
                Q(_d[n], t);
            break;
        case `source`:
            Q(`error`, t);
            break;
        case `img`:
        case `image`:
        case `link`:
            Q(`error`, t),
            Q(`load`, t);
            break;
        case `details`:
            Q(`toggle`, t);
            break;
        case `input`:
            Q(`invalid`, t),
            Ut(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
            break;
        case `select`:
            Q(`invalid`, t);
            break;
        case `textarea`:
            Q(`invalid`, t),
            qt(t, r.value, r.defaultValue, r.children)
        }
        n = r.children,
        typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || !0 === r.suppressHydrationWarning || Md(t.textContent, n) ? (r.popover != null && (Q(`beforetoggle`, t),
        Q(`toggle`, t)),
        r.onScroll != null && Q(`scroll`, t),
        r.onScrollEnd != null && Q(`scrollend`, t),
        r.onClick != null && (t.onclick = nn),
        t = !0) : t = !1,
        t || zi(e, !0)
    }
    function Vi(e) {
        for (I = e.return; I; )
            switch (I.tag) {
            case 5:
            case 31:
            case 13:
                Li = !1;
                return;
            case 27:
            case 3:
                Li = !0;
                return;
            default:
                I = I.return
            }
    }
    function Hi(e) {
        if (e !== I)
            return !1;
        if (!R)
            return Vi(e),
            R = !0,
            !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
        n = !(n !== `form` && n !== `button`) || Ud(e.type, e.memoizedProps)),
        n = !n),
        n && L && zi(e),
        Vi(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e === null ? null : e.dehydrated,
            !e)
                throw Error(i(317));
            L = uf(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
            e = e === null ? null : e.dehydrated,
            !e)
                throw Error(i(317));
            L = uf(e)
        } else
            t === 27 ? (t = L,
            Zd(e.type) ? (e = lf,
            lf = null,
            L = e) : L = t) : L = I ? cf(e.stateNode.nextSibling) : null;
        return !0
    }
    function Ui() {
        L = I = null,
        R = !1
    }
    function Wi() {
        var e = Ii;
        return e !== null && (Zl === null ? Zl = e : Zl.push.apply(Zl, e),
        Ii = null),
        e
    }
    function Gi(e) {
        Ii === null ? Ii = [e] : Ii.push(e)
    }
    var Ki = de(null)
      , qi = null
      , Ji = null;
    function Yi(e, t, n) {
        j(Ki, t._currentValue),
        t._currentValue = n
    }
    function Xi(e) {
        e._currentValue = Ki.current,
        A(Ki)
    }
    function Zi(e, t, n) {
        for (; e !== null; ) {
            var r = e.alternate;
            if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t,
            r !== null && (r.childLanes |= t)),
            e === n)
                break;
            e = e.return
        }
    }
    function Qi(e, t, n, r) {
        var a = e.child;
        for (a !== null && (a.return = e); a !== null; ) {
            var o = a.dependencies;
            if (o !== null) {
                var s = a.child;
                o = o.firstContext;
                a: for (; o !== null; ) {
                    var c = o;
                    o = a;
                    for (var l = 0; l < t.length; l++)
                        if (c.context === t[l]) {
                            o.lanes |= n,
                            c = o.alternate,
                            c !== null && (c.lanes |= n),
                            Zi(o.return, n, e),
                            r || (s = null);
                            break a
                        }
                    o = c.next
                }
            } else if (a.tag === 18) {
                if (s = a.return,
                s === null)
                    throw Error(i(341));
                s.lanes |= n,
                o = s.alternate,
                o !== null && (o.lanes |= n),
                Zi(s, n, e),
                s = null
            } else
                s = a.child;
            if (s !== null)
                s.return = a;
            else
                for (s = a; s !== null; ) {
                    if (s === e) {
                        s = null;
                        break
                    }
                    if (a = s.sibling,
                    a !== null) {
                        a.return = s.return,
                        s = a;
                        break
                    }
                    s = s.return
                }
            a = s
        }
    }
    function $i(e, t, n, r) {
        e = null;
        for (var a = t, o = !1; a !== null; ) {
            if (!o) {
                if (a.flags & 524288)
                    o = !0;
                else if (a.flags & 262144)
                    break
            }
            if (a.tag === 10) {
                var s = a.alternate;
                if (s === null)
                    throw Error(i(387));
                if (s = s.memoizedProps,
                s !== null) {
                    var c = a.type;
                    Tr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c))
                }
            } else if (a === he.current) {
                if (s = a.alternate,
                s === null)
                    throw Error(i(387));
                s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [Qf] : e.push(Qf))
            }
            a = a.return
        }
        e !== null && Qi(t, e, n, r),
        t.flags |= 262144
    }
    function ea(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Tr(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function ta(e) {
        qi = e,
        Ji = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function na(e) {
        return ia(qi, e)
    }
    function ra(e, t) {
        return qi === null && ta(e),
        ia(e, t)
    }
    function ia(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
        Ji === null) {
            if (e === null)
                throw Error(i(308));
            Ji = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Ji = Ji.next = t;
        return n
    }
    var aa = typeof AbortController < `u` ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(t, n) {
                e.push(n)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(e) {
                return e()
            })
        }
    }
      , oa = t.unstable_scheduleCallback
      , sa = t.unstable_NormalPriority
      , ca = {
        $$typeof: C,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function la() {
        return {
            controller: new aa,
            data: new Map,
            refCount: 0
        }
    }
    function ua(e) {
        e.refCount--,
        e.refCount === 0 && oa(sa, function() {
            e.controller.abort()
        })
    }
    var da = null
      , fa = 0
      , pa = 0
      , ma = null;
    function ha(e, t) {
        if (da === null) {
            var n = da = [];
            fa = 0,
            pa = dd(),
            ma = {
                status: `pending`,
                value: void 0,
                then: function(e) {
                    n.push(e)
                }
            }
        }
        return fa++,
        t.then(ga, ga),
        t
    }
    function ga() {
        if (--fa === 0 && da !== null) {
            ma !== null && (ma.status = `fulfilled`);
            var e = da;
            da = null,
            pa = 0,
            ma = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function _a(e, t) {
        var n = []
          , r = {
            status: `pending`,
            value: null,
            reason: null,
            then: function(e) {
                n.push(e)
            }
        };
        return e.then(function() {
            r.status = `fulfilled`,
            r.value = t;
            for (var e = 0; e < n.length; e++)
                (0,
                n[e])(t)
        }, function(e) {
            for (r.status = `rejected`,
            r.reason = e,
            e = 0; e < n.length; e++)
                (0,
                n[e])(void 0)
        }),
        r
    }
    var va = O.S;
    O.S = function(e, t) {
        eu = je(),
        typeof t == `object` && t && typeof t.then == `function` && ha(e, t),
        va !== null && va(e, t)
    }
    ;
    var ya = de(null);
    function ba() {
        var e = ya.current;
        return e === null ? q.pooledCache : e
    }
    function xa(e, t) {
        t === null ? j(ya, ya.current) : j(ya, t.pool)
    }
    function Sa() {
        var e = ba();
        return e === null ? null : {
            parent: ca._currentValue,
            pool: e
        }
    }
    var Ca = Error(i(460))
      , wa = Error(i(474))
      , Ta = Error(i(542))
      , Ea = {
        then: function() {}
    };
    function Da(e) {
        return e = e.status,
        e === `fulfilled` || e === `rejected`
    }
    function Oa(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(nn, nn),
        t = n),
        t.status) {
        case `fulfilled`:
            return t.value;
        case `rejected`:
            throw e = t.reason,
            Ma(e),
            e;
        default:
            if (typeof t.status == `string`)
                t.then(nn, nn);
            else {
                if (e = q,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(i(482));
                e = t,
                e.status = `pending`,
                e.then(function(e) {
                    if (t.status === `pending`) {
                        var n = t;
                        n.status = `fulfilled`,
                        n.value = e
                    }
                }, function(e) {
                    if (t.status === `pending`) {
                        var n = t;
                        n.status = `rejected`,
                        n.reason = e
                    }
                })
            }
            switch (t.status) {
            case `fulfilled`:
                return t.value;
            case `rejected`:
                throw e = t.reason,
                Ma(e),
                e
            }
            throw Aa = t,
            Ca
        }
    }
    function ka(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (e) {
            throw typeof e == `object` && e && typeof e.then == `function` ? (Aa = e,
            Ca) : e
        }
    }
    var Aa = null;
    function ja() {
        if (Aa === null)
            throw Error(i(459));
        var e = Aa;
        return Aa = null,
        e
    }
    function Ma(e) {
        if (e === Ca || e === Ta)
            throw Error(i(483))
    }
    var Na = null
      , Pa = 0;
    function Fa(e) {
        var t = Pa;
        return Pa += 1,
        Na === null && (Na = []),
        Oa(Na, e, t)
    }
    function Ia(e, t) {
        t = t.props.ref,
        e.ref = t === void 0 ? null : t
    }
    function La(e, t) {
        throw t.$$typeof === g ? Error(i(525)) : (e = Object.prototype.toString.call(t),
        Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)))
    }
    function z(e) {
        function t(t, n) {
            if (e) {
                var r = t.deletions;
                r === null ? (t.deletions = [n],
                t.flags |= 16) : r.push(n)
            }
        }
        function n(n, r) {
            if (!e)
                return null;
            for (; r !== null; )
                t(n, r),
                r = r.sibling;
            return null
        }
        function r(e) {
            for (var t = new Map; e !== null; )
                e.key === null ? t.set(e.index, e) : t.set(e.key, e),
                e = e.sibling;
            return t
        }
        function a(e, t) {
            return e = pi(e, t),
            e.index = 0,
            e.sibling = null,
            e
        }
        function o(t, n, r) {
            return t.index = r,
            e ? (r = t.alternate,
            r === null ? (t.flags |= 67108866,
            n) : (r = r.index,
            r < n ? (t.flags |= 67108866,
            n) : r)) : (t.flags |= 1048576,
            n)
        }
        function s(t) {
            return e && t.alternate === null && (t.flags |= 67108866),
            t
        }
        function c(e, t, n, r) {
            return t === null || t.tag !== 6 ? (t = _i(n, e.mode, r),
            t.return = e,
            t) : (t = a(t, n),
            t.return = e,
            t)
        }
        function l(e, t, n, r) {
            var i = n.type;
            return i === y ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == `object` && i && i.$$typeof === E && ka(i) === t.type) ? (t = a(t, n.props),
            Ia(t, n),
            t.return = e,
            t) : (t = hi(n.type, n.key, n.props, null, e.mode, r),
            Ia(t, n),
            t.return = e,
            t)
        }
        function u(e, t, n, r) {
            return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = yi(n, e.mode, r),
            t.return = e,
            t) : (t = a(t, n.children || []),
            t.return = e,
            t)
        }
        function d(e, t, n, r, i) {
            return t === null || t.tag !== 7 ? (t = gi(n, e.mode, r, i),
            t.return = e,
            t) : (t = a(t, n),
            t.return = e,
            t)
        }
        function f(e, t, n) {
            if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`)
                return t = _i(`` + t, e.mode, n),
                t.return = e,
                t;
            if (typeof t == `object` && t) {
                switch (t.$$typeof) {
                case _:
                    return n = hi(t.type, t.key, t.props, null, e.mode, n),
                    Ia(n, t),
                    n.return = e,
                    n;
                case v:
                    return t = yi(t, e.mode, n),
                    t.return = e,
                    t;
                case E:
                    return t = ka(t),
                    f(e, t, n)
                }
                if (se(t) || ie(t))
                    return t = gi(t, e.mode, n, null),
                    t.return = e,
                    t;
                if (typeof t.then == `function`)
                    return f(e, Fa(t), n);
                if (t.$$typeof === C)
                    return f(e, ra(e, t), n);
                La(e, t)
            }
            return null
        }
        function p(e, t, n, r) {
            var i = t === null ? null : t.key;
            if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`)
                return i === null ? c(e, t, `` + n, r) : null;
            if (typeof n == `object` && n) {
                switch (n.$$typeof) {
                case _:
                    return n.key === i ? l(e, t, n, r) : null;
                case v:
                    return n.key === i ? u(e, t, n, r) : null;
                case E:
                    return n = ka(n),
                    p(e, t, n, r)
                }
                if (se(n) || ie(n))
                    return i === null ? d(e, t, n, r, null) : null;
                if (typeof n.then == `function`)
                    return p(e, t, Fa(n), r);
                if (n.$$typeof === C)
                    return p(e, t, ra(e, n), r);
                La(e, n)
            }
            return null
        }
        function m(e, t, n, r, i) {
            if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`)
                return e = e.get(n) || null,
                c(t, e, `` + r, i);
            if (typeof r == `object` && r) {
                switch (r.$$typeof) {
                case _:
                    return e = e.get(r.key === null ? n : r.key) || null,
                    l(t, e, r, i);
                case v:
                    return e = e.get(r.key === null ? n : r.key) || null,
                    u(t, e, r, i);
                case E:
                    return r = ka(r),
                    m(e, t, n, r, i)
                }
                if (se(r) || ie(r))
                    return e = e.get(n) || null,
                    d(t, e, r, i, null);
                if (typeof r.then == `function`)
                    return m(e, t, n, Fa(r), i);
                if (r.$$typeof === C)
                    return m(e, t, n, ra(t, r), i);
                La(t, r)
            }
            return null
        }
        function h(i, a, s, c) {
            for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
                d.index > h ? (g = d,
                d = null) : g = d.sibling;
                var _ = p(i, d, s[h], c);
                if (_ === null) {
                    d === null && (d = g);
                    break
                }
                e && d && _.alternate === null && t(i, d),
                a = o(_, a, h),
                u === null ? l = _ : u.sibling = _,
                u = _,
                d = g
            }
            if (h === s.length)
                return n(i, d),
                R && ji(i, h),
                l;
            if (d === null) {
                for (; h < s.length; h++)
                    d = f(i, s[h], c),
                    d !== null && (a = o(d, a, h),
                    u === null ? l = d : u.sibling = d,
                    u = d);
                return R && ji(i, h),
                l
            }
            for (d = r(d); h < s.length; h++)
                g = m(d, i, h, s[h], c),
                g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key),
                a = o(g, a, h),
                u === null ? l = g : u.sibling = g,
                u = g);
            return e && d.forEach(function(e) {
                return t(i, e)
            }),
            R && ji(i, h),
            l
        }
        function g(a, s, c, l) {
            if (c == null)
                throw Error(i(151));
            for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++,
            v = c.next()) {
                h.index > g ? (_ = h,
                h = null) : _ = h.sibling;
                var y = p(a, h, v.value, l);
                if (y === null) {
                    h === null && (h = _);
                    break
                }
                e && h && y.alternate === null && t(a, h),
                s = o(y, s, g),
                d === null ? u = y : d.sibling = y,
                d = y,
                h = _
            }
            if (v.done)
                return n(a, h),
                R && ji(a, g),
                u;
            if (h === null) {
                for (; !v.done; g++,
                v = c.next())
                    v = f(a, v.value, l),
                    v !== null && (s = o(v, s, g),
                    d === null ? u = v : d.sibling = v,
                    d = v);
                return R && ji(a, g),
                u
            }
            for (h = r(h); !v.done; g++,
            v = c.next())
                v = m(h, a, g, v.value, l),
                v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key),
                s = o(v, s, g),
                d === null ? u = v : d.sibling = v,
                d = v);
            return e && h.forEach(function(e) {
                return t(a, e)
            }),
            R && ji(a, g),
            u
        }
        function b(e, r, o, c) {
            if (typeof o == `object` && o && o.type === y && o.key === null && (o = o.props.children),
            typeof o == `object` && o) {
                switch (o.$$typeof) {
                case _:
                    a: {
                        for (var l = o.key; r !== null; ) {
                            if (r.key === l) {
                                if (l = o.type,
                                l === y) {
                                    if (r.tag === 7) {
                                        n(e, r.sibling),
                                        c = a(r, o.props.children),
                                        c.return = e,
                                        e = c;
                                        break a
                                    }
                                } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === E && ka(l) === r.type) {
                                    n(e, r.sibling),
                                    c = a(r, o.props),
                                    Ia(c, o),
                                    c.return = e,
                                    e = c;
                                    break a
                                }
                                n(e, r);
                                break
                            } else
                                t(e, r);
                            r = r.sibling
                        }
                        o.type === y ? (c = gi(o.props.children, e.mode, c, o.key),
                        c.return = e,
                        e = c) : (c = hi(o.type, o.key, o.props, null, e.mode, c),
                        Ia(c, o),
                        c.return = e,
                        e = c)
                    }
                    return s(e);
                case v:
                    a: {
                        for (l = o.key; r !== null; ) {
                            if (r.key === l)
                                if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling),
                                    c = a(r, o.children || []),
                                    c.return = e,
                                    e = c;
                                    break a
                                } else {
                                    n(e, r);
                                    break
                                }
                            else
                                t(e, r);
                            r = r.sibling
                        }
                        c = yi(o, e.mode, c),
                        c.return = e,
                        e = c
                    }
                    return s(e);
                case E:
                    return o = ka(o),
                    b(e, r, o, c)
                }
                if (se(o))
                    return h(e, r, o, c);
                if (ie(o)) {
                    if (l = ie(o),
                    typeof l != `function`)
                        throw Error(i(150));
                    return o = l.call(o),
                    g(e, r, o, c)
                }
                if (typeof o.then == `function`)
                    return b(e, r, Fa(o), c);
                if (o.$$typeof === C)
                    return b(e, r, ra(e, o), c);
                La(e, o)
            }
            return typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint` ? (o = `` + o,
            r !== null && r.tag === 6 ? (n(e, r.sibling),
            c = a(r, o),
            c.return = e,
            e = c) : (n(e, r),
            c = _i(o, e.mode, c),
            c.return = e,
            e = c),
            s(e)) : n(e, r)
        }
        return function(e, t, n, r) {
            try {
                Pa = 0;
                var i = b(e, t, n, r);
                return Na = null,
                i
            } catch (t) {
                if (t === Ca || t === Ta)
                    throw t;
                var a = di(29, t, null, e.mode);
                return a.lanes = r,
                a.return = e,
                a
            }
        }
    }
    var B = z(!0)
      , Ra = z(!1)
      , za = !1;
    function Ba(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Va(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Ha(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ua(e, t, n) {
        var r = e.updateQueue;
        if (r === null)
            return null;
        if (r = r.shared,
        K & 2) {
            var i = r.pending;
            return i === null ? t.next = t : (t.next = i.next,
            i.next = t),
            r.pending = t,
            t = ci(e),
            si(e, null, n),
            t
        }
        return ii(e, r, t, n),
        ci(e)
    }
    function Wa(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        n & 4194048)) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            rt(e, n)
        }
    }
    function Ga(e, t) {
        var n = e.updateQueue
          , r = e.alternate;
        if (r !== null && (r = r.updateQueue,
        n === r)) {
            var i = null
              , a = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var o = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    a === null ? i = a = o : a = a.next = o,
                    n = n.next
                } while (n !== null);
                a === null ? i = a = t : a = a.next = t
            } else
                i = a = t;
            n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    var Ka = !1;
    function qa() {
        if (Ka) {
            var e = ma;
            if (e !== null)
                throw e
        }
    }
    function Ja(e, t, n, r) {
        Ka = !1;
        var i = e.updateQueue;
        za = !1;
        var a = i.firstBaseUpdate
          , o = i.lastBaseUpdate
          , s = i.shared.pending;
        if (s !== null) {
            i.shared.pending = null;
            var c = s
              , l = c.next;
            c.next = null,
            o === null ? a = l : o.next = l,
            o = c;
            var u = e.alternate;
            u !== null && (u = u.updateQueue,
            s = u.lastBaseUpdate,
            s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l,
            u.lastBaseUpdate = c))
        }
        if (a !== null) {
            var d = i.baseState;
            o = 0,
            u = l = c = null,
            s = a;
            do {
                var f = s.lane & -536870913
                  , p = f !== s.lane;
                if (p ? (Y & f) === f : (r & f) === f) {
                    f !== 0 && f === pa && (Ka = !0),
                    u !== null && (u = u.next = {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null
                    });
                    a: {
                        var h = e
                          , g = s;
                        f = t;
                        var _ = n;
                        switch (g.tag) {
                        case 1:
                            if (h = g.payload,
                            typeof h == `function`) {
                                d = h.call(_, d, f);
                                break a
                            }
                            d = h;
                            break a;
                        case 3:
                            h.flags = h.flags & -65537 | 128;
                        case 0:
                            if (h = g.payload,
                            f = typeof h == `function` ? h.call(_, d, f) : h,
                            f == null)
                                break a;
                            d = m({}, d, f);
                            break a;
                        case 2:
                            za = !0
                        }
                    }
                    f = s.callback,
                    f !== null && (e.flags |= 64,
                    p && (e.flags |= 8192),
                    p = i.callbacks,
                    p === null ? i.callbacks = [f] : p.push(f))
                } else
                    p = {
                        lane: f,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    },
                    u === null ? (l = u = p,
                    c = d) : u = u.next = p,
                    o |= f;
                if (s = s.next,
                s === null) {
                    if (s = i.shared.pending,
                    s === null)
                        break;
                    p = s,
                    s = p.next,
                    p.next = null,
                    i.lastBaseUpdate = p,
                    i.shared.pending = null
                }
            } while (1);
            u === null && (c = d),
            i.baseState = c,
            i.firstBaseUpdate = l,
            i.lastBaseUpdate = u,
            a === null && (i.shared.lanes = 0),
            Gl |= o,
            e.lanes = o,
            e.memoizedState = d
        }
    }
    function Ya(e, t) {
        if (typeof e != `function`)
            throw Error(i(191, e));
        e.call(t)
    }
    function Xa(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
            e = 0; e < n.length; e++)
                Ya(n[e], t)
    }
    var Za = de(null)
      , Qa = de(0);
    function $a(e, t) {
        e = Ul,
        j(Qa, e),
        j(Za, t),
        Ul = e | t.baseLanes
    }
    function eo() {
        j(Qa, Ul),
        j(Za, Za.current)
    }
    function to() {
        Ul = Qa.current,
        A(Za),
        A(Qa)
    }
    var no = de(null)
      , ro = null;
    function io(e) {
        var t = e.alternate;
        j(lo, lo.current & 1),
        j(no, e),
        ro === null && (t === null || Za.current !== null || t.memoizedState !== null) && (ro = e)
    }
    function ao(e) {
        j(lo, lo.current),
        j(no, e),
        ro === null && (ro = e)
    }
    function oo(e) {
        e.tag === 22 ? (j(lo, lo.current),
        j(no, e),
        ro === null && (ro = e)) : so(e)
    }
    function so() {
        j(lo, lo.current),
        j(no, no.current)
    }
    function co(e) {
        A(no),
        ro === e && (ro = null),
        A(lo)
    }
    var lo = de(0);
    function uo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || af(n) || of(n)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === `forwards` || t.memoizedProps.revealOrder === `backwards` || t.memoizedProps.revealOrder === `unstable_legacy-backwards` || t.memoizedProps.revealOrder === `together`)) {
                if (t.flags & 128)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var fo = 0
      , V = null
      , H = null
      , po = null
      , mo = !1
      , ho = !1
      , go = !1
      , _o = 0
      , vo = 0
      , yo = null
      , bo = 0;
    function xo() {
        throw Error(i(321))
    }
    function So(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Tr(e[n], t[n]))
                return !1;
        return !0
    }
    function Co(e, t, n, r, i, a) {
        return fo = a,
        V = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        O.H = e === null || e.memoizedState === null ? zs : Bs,
        go = !1,
        a = n(r, i),
        go = !1,
        ho && (a = To(t, n, r, i)),
        wo(e),
        a
    }
    function wo(e) {
        O.H = Rs;
        var t = H !== null && H.next !== null;
        if (fo = 0,
        po = H = V = null,
        mo = !1,
        vo = 0,
        yo = null,
        t)
            throw Error(i(300));
        e === null || rc || (e = e.dependencies,
        e !== null && ea(e) && (rc = !0))
    }
    function To(e, t, n, r) {
        V = e;
        var a = 0;
        do {
            if (ho && (yo = null),
            vo = 0,
            ho = !1,
            25 <= a)
                throw Error(i(301));
            if (a += 1,
            po = H = null,
            e.updateQueue != null) {
                var o = e.updateQueue;
                o.lastEffect = null,
                o.events = null,
                o.stores = null,
                o.memoCache != null && (o.memoCache.index = 0)
            }
            O.H = Vs,
            o = t(n, r)
        } while (ho);
        return o
    }
    function Eo() {
        var e = O.H
          , t = e.useState()[0];
        return t = typeof t.then == `function` ? No(t) : t,
        e = e.useState()[0],
        (H === null ? null : H.memoizedState) !== e && (V.flags |= 1024),
        t
    }
    function Do() {
        var e = _o !== 0;
        return _o = 0,
        e
    }
    function Oo(e, t, n) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~n
    }
    function ko(e) {
        if (mo) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            mo = !1
        }
        fo = 0,
        po = H = V = null,
        ho = !1,
        vo = _o = 0,
        yo = null
    }
    function Ao() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return po === null ? V.memoizedState = po = e : po = po.next = e,
        po
    }
    function jo() {
        if (H === null) {
            var e = V.alternate;
            e = e === null ? null : e.memoizedState
        } else
            e = H.next;
        var t = po === null ? V.memoizedState : po.next;
        if (t !== null)
            po = t,
            H = e;
        else {
            if (e === null)
                throw V.alternate === null ? Error(i(467)) : Error(i(310));
            H = e,
            e = {
                memoizedState: H.memoizedState,
                baseState: H.baseState,
                baseQueue: H.baseQueue,
                queue: H.queue,
                next: null
            },
            po === null ? V.memoizedState = po = e : po = po.next = e
        }
        return po
    }
    function Mo() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function No(e) {
        var t = vo;
        return vo += 1,
        yo === null && (yo = []),
        e = Oa(yo, e, t),
        t = V,
        (po === null ? t.memoizedState : po.next) === null && (t = t.alternate,
        O.H = t === null || t.memoizedState === null ? zs : Bs),
        e
    }
    function Po(e) {
        if (typeof e == `object` && e) {
            if (typeof e.then == `function`)
                return No(e);
            if (e.$$typeof === C)
                return na(e)
        }
        throw Error(i(438, String(e)))
    }
    function Fo(e) {
        var t = null
          , n = V.updateQueue;
        if (n !== null && (t = n.memoCache),
        t == null) {
            var r = V.alternate;
            r !== null && (r = r.updateQueue,
            r !== null && (r = r.memoCache,
            r != null && (t = {
                data: r.data.map(function(e) {
                    return e.slice()
                }),
                index: 0
            })))
        }
        if (t ??= {
            data: [],
            index: 0
        },
        n === null && (n = Mo(),
        V.updateQueue = n),
        n.memoCache = t,
        n = t.data[t.index],
        n === void 0)
            for (n = t.data[t.index] = Array(e),
            r = 0; r < e; r++)
                n[r] = ne;
        return t.index++,
        n
    }
    function Io(e, t) {
        return typeof t == `function` ? t(e) : t
    }
    function Lo(e) {
        return Ro(jo(), H, e)
    }
    function Ro(e, t, n) {
        var r = e.queue;
        if (r === null)
            throw Error(i(311));
        r.lastRenderedReducer = n;
        var a = e.baseQueue
          , o = r.pending;
        if (o !== null) {
            if (a !== null) {
                var s = a.next;
                a.next = o.next,
                o.next = s
            }
            t.baseQueue = a = o,
            r.pending = null
        }
        if (o = e.baseState,
        a === null)
            e.memoizedState = o;
        else {
            t = a.next;
            var c = s = null
              , l = null
              , u = t
              , d = !1;
            do {
                var f = u.lane & -536870913;
                if (f === u.lane ? (fo & f) === f : (Y & f) === f) {
                    var p = u.revertLane;
                    if (p === 0)
                        l !== null && (l = l.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        }),
                        f === pa && (d = !0);
                    else if ((fo & p) === p) {
                        u = u.next,
                        p === pa && (d = !0);
                        continue
                    } else
                        f = {
                            lane: 0,
                            revertLane: u.revertLane,
                            gesture: null,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null
                        },
                        l === null ? (c = l = f,
                        s = o) : l = l.next = f,
                        V.lanes |= p,
                        Gl |= p;
                    f = u.action,
                    go && n(o, f),
                    o = u.hasEagerState ? u.eagerState : n(o, f)
                } else
                    p = {
                        lane: f,
                        revertLane: u.revertLane,
                        gesture: u.gesture,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null
                    },
                    l === null ? (c = l = p,
                    s = o) : l = l.next = p,
                    V.lanes |= f,
                    Gl |= f;
                u = u.next
            } while (u !== null && u !== t);
            if (l === null ? s = o : l.next = c,
            !Tr(o, e.memoizedState) && (rc = !0,
            d && (n = ma,
            n !== null)))
                throw n;
            e.memoizedState = o,
            e.baseState = s,
            e.baseQueue = l,
            r.lastRenderedState = o
        }
        return a === null && (r.lanes = 0),
        [e.memoizedState, r.dispatch]
    }
    function zo(e) {
        var t = jo()
          , n = t.queue;
        if (n === null)
            throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch
          , a = n.pending
          , o = t.memoizedState;
        if (a !== null) {
            n.pending = null;
            var s = a = a.next;
            do
                o = e(o, s.action),
                s = s.next;
            while (s !== a);
            Tr(o, t.memoizedState) || (rc = !0),
            t.memoizedState = o,
            t.baseQueue === null && (t.baseState = o),
            n.lastRenderedState = o
        }
        return [o, r]
    }
    function Bo(e, t, n) {
        var r = V
          , a = jo()
          , o = R;
        if (o) {
            if (n === void 0)
                throw Error(i(407));
            n = n()
        } else
            n = t();
        var s = !Tr((H || a).memoizedState, n);
        if (s && (a.memoizedState = n,
        rc = !0),
        a = a.queue,
        ds(Uo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || po !== null && po.memoizedState.tag & 1) {
            if (r.flags |= 2048,
            os(9, {
                destroy: void 0
            }, Ho.bind(null, r, a, n, t), null),
            q === null)
                throw Error(i(349));
            o || fo & 127 || Vo(r, t, n)
        }
        return n
    }
    function Vo(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = V.updateQueue,
        t === null ? (t = Mo(),
        V.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function Ho(e, t, n, r) {
        t.value = n,
        t.getSnapshot = r,
        Wo(t) && Go(e)
    }
    function Uo(e, t, n) {
        return n(function() {
            Wo(t) && Go(e)
        })
    }
    function Wo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Tr(e, n)
        } catch {
            return !0
        }
    }
    function Go(e) {
        var t = oi(e, 2);
        t !== null && hu(t, e, 2)
    }
    function Ko(e) {
        var t = Ao();
        if (typeof e == `function`) {
            var n = e;
            if (e = n(),
            go) {
                He(!0);
                try {
                    n()
                } finally {
                    He(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Io,
            lastRenderedState: e
        },
        t
    }
    function qo(e, t, n, r) {
        return e.baseState = n,
        Ro(e, H, typeof r == `function` ? r : Io)
    }
    function Jo(e, t, n, r, a) {
        if (Fs(e))
            throw Error(i(485));
        if (e = t.action,
        e !== null) {
            var o = {
                payload: a,
                action: e,
                next: null,
                isTransition: !0,
                status: `pending`,
                value: null,
                reason: null,
                listeners: [],
                then: function(e) {
                    o.listeners.push(e)
                }
            };
            O.T === null ? o.isTransition = !1 : n(!0),
            r(o),
            n = t.pending,
            n === null ? (o.next = t.pending = o,
            Yo(t, o)) : (o.next = n.next,
            t.pending = n.next = o)
        }
    }
    function Yo(e, t) {
        var n = t.action
          , r = t.payload
          , i = e.state;
        if (t.isTransition) {
            var a = O.T
              , o = {};
            O.T = o;
            try {
                var s = n(i, r)
                  , c = O.S;
                c !== null && c(o, s),
                Xo(e, t, s)
            } catch (n) {
                Qo(e, t, n)
            } finally {
                a !== null && o.types !== null && (a.types = o.types),
                O.T = a
            }
        } else
            try {
                a = n(i, r),
                Xo(e, t, a)
            } catch (n) {
                Qo(e, t, n)
            }
    }
    function Xo(e, t, n) {
        typeof n == `object` && n && typeof n.then == `function` ? n.then(function(n) {
            Zo(e, t, n)
        }, function(n) {
            return Qo(e, t, n)
        }) : Zo(e, t, n)
    }
    function Zo(e, t, n) {
        t.status = `fulfilled`,
        t.value = n,
        $o(t),
        e.state = n,
        t = e.pending,
        t !== null && (n = t.next,
        n === t ? e.pending = null : (n = n.next,
        t.next = n,
        Yo(e, n)))
    }
    function Qo(e, t, n) {
        var r = e.pending;
        if (e.pending = null,
        r !== null) {
            r = r.next;
            do
                t.status = `rejected`,
                t.reason = n,
                $o(t),
                t = t.next;
            while (t !== r)
        }
        e.action = null
    }
    function $o(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function es(e, t) {
        return t
    }
    function ts(e, t) {
        if (R) {
            var n = q.formState;
            if (n !== null) {
                a: {
                    var r = V;
                    if (R) {
                        if (L) {
                            b: {
                                for (var i = L, a = Li; i.nodeType !== 8; ) {
                                    if (!a) {
                                        i = null;
                                        break b
                                    }
                                    if (i = cf(i.nextSibling),
                                    i === null) {
                                        i = null;
                                        break b
                                    }
                                }
                                a = i.data,
                                i = a === `F!` || a === `F` ? i : null
                            }
                            if (i) {
                                L = cf(i.nextSibling),
                                r = i.data === `F!`;
                                break a
                            }
                        }
                        zi(r)
                    }
                    r = !1
                }
                r && (t = n[0])
            }
        }
        return n = Ao(),
        n.memoizedState = n.baseState = t,
        r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: es,
            lastRenderedState: t
        },
        n.queue = r,
        n = Ms.bind(null, V, r),
        r.dispatch = n,
        r = Ko(!1),
        a = Ps.bind(null, V, !1, r.queue),
        r = Ao(),
        i = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        r.queue = i,
        n = Jo.bind(null, V, i, a, n),
        i.dispatch = n,
        r.memoizedState = e,
        [t, n, !1]
    }
    function ns(e) {
        return rs(jo(), H, e)
    }
    function rs(e, t, n) {
        if (t = Ro(e, t, es)[0],
        e = Lo(Io)[0],
        typeof t == `object` && t && typeof t.then == `function`)
            try {
                var r = No(t)
            } catch (e) {
                throw e === Ca ? Ta : e
            }
        else
            r = t;
        t = jo();
        var i = t.queue
          , a = i.dispatch;
        return n !== t.memoizedState && (V.flags |= 2048,
        os(9, {
            destroy: void 0
        }, is.bind(null, i, n), null)),
        [r, a, e]
    }
    function is(e, t) {
        e.action = t
    }
    function as(e) {
        var t = jo()
          , n = H;
        if (n !== null)
            return rs(t, n, e);
        jo(),
        t = t.memoizedState,
        n = jo();
        var r = n.queue.dispatch;
        return n.memoizedState = e,
        [t, r, !1]
    }
    function os(e, t, n, r) {
        return e = {
            tag: e,
            create: n,
            deps: r,
            inst: t,
            next: null
        },
        t = V.updateQueue,
        t === null && (t = Mo(),
        V.updateQueue = t),
        n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (r = n.next,
        n.next = e,
        e.next = r,
        t.lastEffect = e),
        e
    }
    function ss() {
        return jo().memoizedState
    }
    function cs(e, t, n, r) {
        var i = Ao();
        V.flags |= e,
        i.memoizedState = os(1 | t, {
            destroy: void 0
        }, n, r === void 0 ? null : r)
    }
    function ls(e, t, n, r) {
        var i = jo();
        r = r === void 0 ? null : r;
        var a = i.memoizedState.inst;
        H !== null && r !== null && So(r, H.memoizedState.deps) ? i.memoizedState = os(t, a, n, r) : (V.flags |= e,
        i.memoizedState = os(1 | t, a, n, r))
    }
    function us(e, t) {
        cs(8390656, 8, e, t)
    }
    function ds(e, t) {
        ls(2048, 8, e, t)
    }
    function fs(e) {
        V.flags |= 4;
        var t = V.updateQueue;
        if (t === null)
            t = Mo(),
            V.updateQueue = t,
            t.events = [e];
        else {
            var n = t.events;
            n === null ? t.events = [e] : n.push(e)
        }
    }
    function ps(e) {
        var t = jo().memoizedState;
        return fs({
            ref: t,
            nextImpl: e
        }),
        function() {
            if (K & 2)
                throw Error(i(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function ms(e, t) {
        return ls(4, 2, e, t)
    }
    function hs(e, t) {
        return ls(4, 4, e, t)
    }
    function gs(e, t) {
        if (typeof t == `function`) {
            e = e();
            var n = t(e);
            return function() {
                typeof n == `function` ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function _s(e, t, n) {
        n = n == null ? null : n.concat([e]),
        ls(4, 4, gs.bind(null, t, e), n)
    }
    function vs() {}
    function ys(e, t) {
        var n = jo();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return t !== null && So(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
        e)
    }
    function bs(e, t) {
        var n = jo();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        if (t !== null && So(t, r[1]))
            return r[0];
        if (r = e(),
        go) {
            He(!0);
            try {
                e()
            } finally {
                He(!1)
            }
        }
        return n.memoizedState = [r, t],
        r
    }
    function U(e, t, n) {
        return n === void 0 || fo & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n,
        e = mu(),
        V.lanes |= e,
        Gl |= e,
        n)
    }
    function xs(e, t, n, r) {
        return Tr(n, t) ? n : Za.current === null ? !(fo & 42) || fo & 1073741824 && !(Y & 261930) ? (rc = !0,
        e.memoizedState = n) : (e = mu(),
        V.lanes |= e,
        Gl |= e,
        t) : (e = U(e, n, r),
        Tr(e, t) || (rc = !0),
        e)
    }
    function Ss(e, t, n, r, i) {
        var a = k.p;
        k.p = a !== 0 && 8 > a ? a : 8;
        var o = O.T
          , s = {};
        O.T = s,
        Ps(e, !1, t, n);
        try {
            var c = i()
              , l = O.S;
            l !== null && l(s, c),
            typeof c == `object` && c && typeof c.then == `function` ? Ns(e, t, _a(c, r), pu(e)) : Ns(e, t, r, pu(e))
        } catch (n) {
            Ns(e, t, {
                then: function() {},
                status: `rejected`,
                reason: n
            }, pu())
        } finally {
            k.p = a,
            o !== null && s.types !== null && (o.types = s.types),
            O.T = o
        }
    }
    function Cs() {}
    function ws(e, t, n, r) {
        if (e.tag !== 5)
            throw Error(i(476));
        var a = Ts(e).queue;
        Ss(e, a, t, ce, n === null ? Cs : function() {
            return Es(e),
            n(r)
        }
        )
    }
    function Ts(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: ce,
            baseState: ce,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Io,
                lastRenderedState: ce
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Io,
                lastRenderedState: n
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function Es(e) {
        var t = Ts(e);
        t.next === null && (t = e.alternate.memoizedState),
        Ns(e, t.next.queue, {}, pu())
    }
    function Ds() {
        return na(Qf)
    }
    function Os() {
        return jo().memoizedState
    }
    function ks() {
        return jo().memoizedState
    }
    function As(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var n = pu();
                e = Ha(n);
                var r = Ua(t, e, n);
                r !== null && (hu(r, t, n),
                Wa(r, t, n)),
                t = {
                    cache: la()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function js(e, t, n) {
        var r = pu();
        n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Fs(e) ? Is(t, n) : (n = ai(e, t, n, r),
        n !== null && (hu(n, e, r),
        Ls(n, t, r)))
    }
    function Ms(e, t, n) {
        Ns(e, t, n, pu())
    }
    function Ns(e, t, n, r) {
        var i = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Fs(e))
            Is(t, i);
        else {
            var a = e.alternate;
            if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer,
            a !== null))
                try {
                    var o = t.lastRenderedState
                      , s = a(o, n);
                    if (i.hasEagerState = !0,
                    i.eagerState = s,
                    Tr(s, o))
                        return ii(e, t, i, 0),
                        q === null && ri(),
                        !1
                } catch {}
            if (n = ai(e, t, i, r),
            n !== null)
                return hu(n, e, r),
                Ls(n, t, r),
                !0
        }
        return !1
    }
    function Ps(e, t, n, r) {
        if (r = {
            lane: 2,
            revertLane: dd(),
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Fs(e)) {
            if (t)
                throw Error(i(479))
        } else
            t = ai(e, n, r, 2),
            t !== null && hu(t, e, 2)
    }
    function Fs(e) {
        var t = e.alternate;
        return e === V || t !== null && t === V
    }
    function Is(e, t) {
        ho = mo = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function Ls(e, t, n) {
        if (n & 4194048) {
            var r = t.lanes;
            r &= e.pendingLanes,
            n |= r,
            t.lanes = n,
            rt(e, n)
        }
    }
    var Rs = {
        readContext: na,
        use: Po,
        useCallback: xo,
        useContext: xo,
        useEffect: xo,
        useImperativeHandle: xo,
        useLayoutEffect: xo,
        useInsertionEffect: xo,
        useMemo: xo,
        useReducer: xo,
        useRef: xo,
        useState: xo,
        useDebugValue: xo,
        useDeferredValue: xo,
        useTransition: xo,
        useSyncExternalStore: xo,
        useId: xo,
        useHostTransitionStatus: xo,
        useFormState: xo,
        useActionState: xo,
        useOptimistic: xo,
        useMemoCache: xo,
        useCacheRefresh: xo
    };
    Rs.useEffectEvent = xo;
    var zs = {
        readContext: na,
        use: Po,
        useCallback: function(e, t) {
            return Ao().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: na,
        useEffect: us,
        useImperativeHandle: function(e, t, n) {
            n = n == null ? null : n.concat([e]),
            cs(4194308, 4, gs.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return cs(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            cs(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ao();
            t = t === void 0 ? null : t;
            var r = e();
            if (go) {
                He(!0);
                try {
                    e()
                } finally {
                    He(!1)
                }
            }
            return n.memoizedState = [r, t],
            r
        },
        useReducer: function(e, t, n) {
            var r = Ao();
            if (n !== void 0) {
                var i = n(t);
                if (go) {
                    He(!0);
                    try {
                        n(t)
                    } finally {
                        He(!1)
                    }
                }
            } else
                i = t;
            return r.memoizedState = r.baseState = i,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i
            },
            r.queue = e,
            e = e.dispatch = js.bind(null, V, e),
            [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ao();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Ko(e);
            var t = e.queue
              , n = Ms.bind(null, V, t);
            return t.dispatch = n,
            [e.memoizedState, n]
        },
        useDebugValue: vs,
        useDeferredValue: function(e, t) {
            return U(Ao(), e, t)
        },
        useTransition: function() {
            var e = Ko(!1);
            return e = Ss.bind(null, V, e.queue, !0, !1),
            Ao().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var r = V
              , a = Ao();
            if (R) {
                if (n === void 0)
                    throw Error(i(407));
                n = n()
            } else {
                if (n = t(),
                q === null)
                    throw Error(i(349));
                Y & 127 || Vo(r, t, n)
            }
            a.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return a.queue = o,
            us(Uo.bind(null, r, o, e), [e]),
            r.flags |= 2048,
            os(9, {
                destroy: void 0
            }, Ho.bind(null, r, o, n, t), null),
            n
        },
        useId: function() {
            var e = Ao()
              , t = q.identifierPrefix;
            if (R) {
                var n = Ai
                  , r = ki;
                n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n,
                t = `_` + t + `R_` + n,
                n = _o++,
                0 < n && (t += `H` + n.toString(32)),
                t += `_`
            } else
                n = bo++,
                t = `_` + t + `r_` + n.toString(32) + `_`;
            return e.memoizedState = t
        },
        useHostTransitionStatus: Ds,
        useFormState: ts,
        useActionState: ts,
        useOptimistic: function(e) {
            var t = Ao();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = Ps.bind(null, V, !0, n),
            n.dispatch = t,
            [e, t]
        },
        useMemoCache: Fo,
        useCacheRefresh: function() {
            return Ao().memoizedState = As.bind(null, V)
        },
        useEffectEvent: function(e) {
            var t = Ao()
              , n = {
                impl: e
            };
            return t.memoizedState = n,
            function() {
                if (K & 2)
                    throw Error(i(440));
                return n.impl.apply(void 0, arguments)
            }
        }
    }
      , Bs = {
        readContext: na,
        use: Po,
        useCallback: ys,
        useContext: na,
        useEffect: ds,
        useImperativeHandle: _s,
        useInsertionEffect: ms,
        useLayoutEffect: hs,
        useMemo: bs,
        useReducer: Lo,
        useRef: ss,
        useState: function() {
            return Lo(Io)
        },
        useDebugValue: vs,
        useDeferredValue: function(e, t) {
            return xs(jo(), H.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Lo(Io)[0]
              , t = jo().memoizedState;
            return [typeof e == `boolean` ? e : No(e), t]
        },
        useSyncExternalStore: Bo,
        useId: Os,
        useHostTransitionStatus: Ds,
        useFormState: ns,
        useActionState: ns,
        useOptimistic: function(e, t) {
            return qo(jo(), H, e, t)
        },
        useMemoCache: Fo,
        useCacheRefresh: ks
    };
    Bs.useEffectEvent = ps;
    var Vs = {
        readContext: na,
        use: Po,
        useCallback: ys,
        useContext: na,
        useEffect: ds,
        useImperativeHandle: _s,
        useInsertionEffect: ms,
        useLayoutEffect: hs,
        useMemo: bs,
        useReducer: zo,
        useRef: ss,
        useState: function() {
            return zo(Io)
        },
        useDebugValue: vs,
        useDeferredValue: function(e, t) {
            var n = jo();
            return H === null ? U(n, e, t) : xs(n, H.memoizedState, e, t)
        },
        useTransition: function() {
            var e = zo(Io)[0]
              , t = jo().memoizedState;
            return [typeof e == `boolean` ? e : No(e), t]
        },
        useSyncExternalStore: Bo,
        useId: Os,
        useHostTransitionStatus: Ds,
        useFormState: as,
        useActionState: as,
        useOptimistic: function(e, t) {
            var n = jo();
            return H === null ? (n.baseState = e,
            [e, n.queue.dispatch]) : qo(n, H, e, t)
        },
        useMemoCache: Fo,
        useCacheRefresh: ks
    };
    Vs.useEffectEvent = ps;
    function Hs(e, t, n, r) {
        t = e.memoizedState,
        n = n(r, t),
        n = n == null ? t : m({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Us = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = pu()
              , i = Ha(r);
            i.payload = t,
            n != null && (i.callback = n),
            t = Ua(e, i, r),
            t !== null && (hu(t, e, r),
            Wa(t, e, r))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = pu()
              , i = Ha(r);
            i.tag = 1,
            i.payload = t,
            n != null && (i.callback = n),
            t = Ua(e, i, r),
            t !== null && (hu(t, e, r),
            Wa(t, e, r))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = pu()
              , r = Ha(n);
            r.tag = 2,
            t != null && (r.callback = t),
            t = Ua(e, r, n),
            t !== null && (hu(t, e, n),
            Wa(t, e, n))
        }
    };
    function Ws(e, t, n, r, i, a, o) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Er(n, r) || !Er(i, a) : !0
    }
    function Gs(e, t, n, r) {
        e = t.state,
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Us.enqueueReplaceState(t, t.state, null)
    }
    function Ks(e, t) {
        var n = t;
        if (`ref`in t)
            for (var r in n = {},
            t)
                r !== `ref` && (n[r] = t[r]);
        if (e = e.defaultProps)
            for (var i in n === t && (n = m({}, n)),
            e)
                n[i] === void 0 && (n[i] = e[i]);
        return n
    }
    function qs(e) {
        $r(e)
    }
    function Js(e) {
        console.error(e)
    }
    function Ys(e) {
        $r(e)
    }
    function Xs(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function Zs(e, t, n) {
        try {
            var r = e.onCaughtError;
            r(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }
    function Qs(e, t, n) {
        return n = Ha(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            Xs(e, t)
        }
        ,
        n
    }
    function $s(e) {
        return e = Ha(e),
        e.tag = 3,
        e
    }
    function ec(e, t, n, r) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == `function`) {
            var a = r.value;
            e.payload = function() {
                return i(a)
            }
            ,
            e.callback = function() {
                Zs(t, n, r)
            }
        }
        var o = n.stateNode;
        o !== null && typeof o.componentDidCatch == `function` && (e.callback = function() {
            Zs(t, n, r),
            typeof i != `function` && (ru === null ? ru = new Set([this]) : ru.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: e === null ? `` : e
            })
        }
        )
    }
    function tc(e, t, n, r, a) {
        if (n.flags |= 32768,
        typeof r == `object` && r && typeof r.then == `function`) {
            if (t = n.alternate,
            t !== null && $i(t, n, a, !0),
            n = no.current,
            n !== null) {
                switch (n.tag) {
                case 31:
                case 13:
                    return ro === null ? Du() : n.alternate === null && Wl === 0 && (Wl = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = a,
                    r === Ea ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? n.updateQueue = new Set([r]) : t.add(r),
                    Gu(e, r, a)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    r === Ea ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r])
                    },
                    n.updateQueue = t) : (n = t.retryQueue,
                    n === null ? t.retryQueue = new Set([r]) : n.add(r)),
                    Gu(e, r, a)),
                    !1
                }
                throw Error(i(435, n.tag))
            }
            return Gu(e, r, a),
            Du(),
            !1
        }
        if (R)
            return t = no.current,
            t === null ? (r !== Ri && (t = Error(i(423), {
                cause: r
            }),
            Gi(xi(t, n))),
            e = e.current.alternate,
            e.flags |= 65536,
            a &= -a,
            e.lanes |= a,
            r = xi(r, n),
            a = Qs(e.stateNode, r, a),
            Ga(e, a),
            Wl !== 4 && (Wl = 2)) : (!(t.flags & 65536) && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = a,
            r !== Ri && (e = Error(i(422), {
                cause: r
            }),
            Gi(xi(e, n)))),
            !1;
        var o = Error(i(520), {
            cause: r
        });
        if (o = xi(o, n),
        Xl === null ? Xl = [o] : Xl.push(o),
        Wl !== 4 && (Wl = 2),
        t === null)
            return !0;
        r = xi(r, n),
        n = t;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                e = a & -a,
                n.lanes |= e,
                e = Qs(n.stateNode, r, e),
                Ga(n, e),
                !1;
            case 1:
                if (t = n.type,
                o = n.stateNode,
                !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (ru === null || !ru.has(o))))
                    return n.flags |= 65536,
                    a &= -a,
                    n.lanes |= a,
                    a = $s(a),
                    ec(a, e, n, r),
                    Ga(n, a),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var nc = Error(i(461))
      , rc = !1;
    function ic(e, t, n, r) {
        t.child = e === null ? Ra(t, null, n, r) : B(t, e.child, n, r)
    }
    function ac(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        if (`ref`in r) {
            var o = {};
            for (var s in r)
                s !== `ref` && (o[s] = r[s])
        } else
            o = r;
        return ta(t),
        r = Co(e, t, n, o, a, i),
        s = Do(),
        e !== null && !rc ? (Oo(e, t, i),
        kc(e, t, i)) : (R && s && Ni(t),
        t.flags |= 1,
        ic(e, t, r, i),
        t.child)
    }
    function oc(e, t, n, r, i) {
        if (e === null) {
            var a = n.type;
            return typeof a == `function` && !fi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
            t.type = a,
            sc(e, t, a, r, i)) : (e = hi(n.type, null, r, t, t.mode, i),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (a = e.child,
        !Ac(e, i)) {
            var o = a.memoizedProps;
            if (n = n.compare,
            n = n === null ? Er : n,
            n(o, r) && e.ref === t.ref)
                return kc(e, t, i)
        }
        return t.flags |= 1,
        e = pi(a, r),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function sc(e, t, n, r, i) {
        if (e !== null) {
            var a = e.memoizedProps;
            if (Er(a, r) && e.ref === t.ref)
                if (rc = !1,
                t.pendingProps = r = a,
                Ac(e, i))
                    e.flags & 131072 && (rc = !0);
                else
                    return t.lanes = e.lanes,
                    kc(e, t, i)
        }
        return hc(e, t, n, r, i)
    }
    function cc(e, t, n, r) {
        var i = r.children
          , a = e === null ? null : e.memoizedState;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        r.mode === `hidden`) {
            if (t.flags & 128) {
                if (a = a === null ? n : a.baseLanes | n,
                e !== null) {
                    for (r = t.child = e.child,
                    i = 0; r !== null; )
                        i = i | r.lanes | r.childLanes,
                        r = r.sibling;
                    r = i & ~a
                } else
                    r = 0,
                    t.child = null;
                return uc(e, t, a, n, r)
            }
            if (n & 536870912)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && xa(t, a === null ? null : a.cachePool),
                a === null ? eo() : $a(t, a),
                oo(t);
            else
                return r = t.lanes = 536870912,
                uc(e, t, a === null ? n : a.baseLanes | n, n, r)
        } else
            a === null ? (e !== null && xa(t, null),
            eo(),
            so(t)) : (xa(t, a.cachePool),
            $a(t, a),
            so(t),
            t.memoizedState = null);
        return ic(e, t, i, n),
        t.child
    }
    function lc(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function uc(e, t, n, r, i) {
        var a = ba();
        return a = a === null ? null : {
            parent: ca._currentValue,
            pool: a
        },
        t.memoizedState = {
            baseLanes: n,
            cachePool: a
        },
        e !== null && xa(t, null),
        eo(),
        oo(t),
        e !== null && $i(e, t, r, !0),
        t.childLanes = i,
        null
    }
    function dc(e, t) {
        return t = wc({
            mode: t.mode,
            children: t.children
        }, e.mode),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function fc(e, t, n) {
        return B(t, e.child, null, n),
        e = dc(t, t.pendingProps),
        e.flags |= 2,
        co(t),
        t.memoizedState = null,
        e
    }
    function pc(e, t, n) {
        var r = t.pendingProps
          , a = (t.flags & 128) != 0;
        if (t.flags &= -129,
        e === null) {
            if (R) {
                if (r.mode === `hidden`)
                    return e = dc(t, r),
                    t.lanes = 536870912,
                    lc(null, e);
                if (ao(t),
                (e = L) ? (e = rf(e, Li),
                e = e !== null && e.data === `&` ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : {
                        id: ki,
                        overflow: Ai
                    },
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = vi(e),
                n.return = t,
                t.child = n,
                I = t,
                L = null)) : e = null,
                e === null)
                    throw zi(t);
                return t.lanes = 536870912,
                null
            }
            return dc(t, r)
        }
        var o = e.memoizedState;
        if (o !== null) {
            var s = o.dehydrated;
            if (ao(t),
            a)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = fc(e, t, n);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(i(558));
            else if (rc || $i(e, t, n, !1),
            a = (n & e.childLanes) !== 0,
            rc || a) {
                if (r = q,
                r !== null && (s = it(r, n),
                s !== 0 && s !== o.retryLane))
                    throw o.retryLane = s,
                    oi(e, s),
                    hu(r, e, s),
                    nc;
                Du(),
                t = fc(e, t, n)
            } else
                e = o.treeContext,
                L = cf(s.nextSibling),
                I = t,
                R = !0,
                Ii = null,
                Li = !1,
                e !== null && Fi(t, e),
                t = dc(t, r),
                t.flags |= 4096;
            return t
        }
        return e = pi(e.child, {
            mode: r.mode,
            children: r.children
        }),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function mc(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != `function` && typeof n != `object`)
                throw Error(i(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }
    function hc(e, t, n, r, i) {
        return ta(t),
        n = Co(e, t, n, r, void 0, i),
        r = Do(),
        e !== null && !rc ? (Oo(e, t, i),
        kc(e, t, i)) : (R && r && Ni(t),
        t.flags |= 1,
        ic(e, t, n, i),
        t.child)
    }
    function gc(e, t, n, r, i, a) {
        return ta(t),
        t.updateQueue = null,
        n = To(t, r, n, i),
        wo(e),
        r = Do(),
        e !== null && !rc ? (Oo(e, t, a),
        kc(e, t, a)) : (R && r && Ni(t),
        t.flags |= 1,
        ic(e, t, n, a),
        t.child)
    }
    function _c(e, t, n, r, i) {
        if (ta(t),
        t.stateNode === null) {
            var a = li
              , o = n.contextType;
            typeof o == `object` && o && (a = na(o)),
            a = new n(r,a),
            t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null,
            a.updater = Us,
            t.stateNode = a,
            a._reactInternals = t,
            a = t.stateNode,
            a.props = r,
            a.state = t.memoizedState,
            a.refs = {},
            Ba(t),
            o = n.contextType,
            a.context = typeof o == `object` && o ? na(o) : li,
            a.state = t.memoizedState,
            o = n.getDerivedStateFromProps,
            typeof o == `function` && (Hs(t, n, o, r),
            a.state = t.memoizedState),
            typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state,
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Us.enqueueReplaceState(a, a.state, null),
            Ja(t, r, a, i),
            qa(),
            a.state = t.memoizedState),
            typeof a.componentDidMount == `function` && (t.flags |= 4194308),
            r = !0
        } else if (e === null) {
            a = t.stateNode;
            var s = t.memoizedProps
              , c = Ks(n, s);
            a.props = c;
            var l = a.context
              , u = n.contextType;
            o = li,
            typeof u == `object` && u && (o = na(u));
            var d = n.getDerivedStateFromProps;
            u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`,
            s = t.pendingProps !== s,
            u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && Gs(t, a, r, o),
            za = !1;
            var f = t.memoizedState;
            a.state = f,
            Ja(t, r, a, i),
            qa(),
            l = t.memoizedState,
            s || f !== l || za ? (typeof d == `function` && (Hs(t, n, d, r),
            l = t.memoizedState),
            (c = za || Ws(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()),
            typeof a.componentDidMount == `function` && (t.flags |= 4194308)) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
            t.memoizedProps = r,
            t.memoizedState = l),
            a.props = r,
            a.state = l,
            a.context = o,
            r = c) : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
            r = !1)
        } else {
            a = t.stateNode,
            Va(e, t),
            o = t.memoizedProps,
            u = Ks(n, o),
            a.props = u,
            d = t.pendingProps,
            f = a.context,
            l = n.contextType,
            c = li,
            typeof l == `object` && l && (c = na(l)),
            s = n.getDerivedStateFromProps,
            (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && Gs(t, a, r, c),
            za = !1,
            f = t.memoizedState,
            a.state = f,
            Ja(t, r, a, i),
            qa();
            var p = t.memoizedState;
            o !== d || f !== p || za || e !== null && e.dependencies !== null && ea(e.dependencies) ? (typeof s == `function` && (Hs(t, n, s, r),
            p = t.memoizedState),
            (u = za || Ws(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ea(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
            typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)),
            typeof a.componentDidUpdate == `function` && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024)) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = r,
            t.memoizedState = p),
            a.props = r,
            a.state = p,
            a.context = c,
            r = u) : (typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
            r = !1)
        }
        return a = r,
        mc(e, t),
        r = (t.flags & 128) != 0,
        a || r ? (a = t.stateNode,
        n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(),
        t.flags |= 1,
        e !== null && r ? (t.child = B(t, e.child, null, i),
        t.child = B(t, null, n, i)) : ic(e, t, n, i),
        t.memoizedState = a.state,
        e = t.child) : e = kc(e, t, i),
        e
    }
    function vc(e, t, n, r) {
        return Ui(),
        t.flags |= 256,
        ic(e, t, n, r),
        t.child
    }
    var yc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function bc(e) {
        return {
            baseLanes: e,
            cachePool: Sa()
        }
    }
    function xc(e, t, n) {
        return e = e === null ? 0 : e.childLanes & ~n,
        t && (e |= Jl),
        e
    }
    function Sc(e, t, n) {
        var r = t.pendingProps, a = !1, o = (t.flags & 128) != 0, s;
        if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (lo.current & 2) != 0),
        s && (a = !0,
        t.flags &= -129),
        s = (t.flags & 32) != 0,
        t.flags &= -33,
        e === null) {
            if (R) {
                if (a ? io(t) : so(t),
                (e = L) ? (e = rf(e, Li),
                e = e !== null && e.data !== `&` ? e : null,
                e !== null && (t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : {
                        id: ki,
                        overflow: Ai
                    },
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                n = vi(e),
                n.return = t,
                t.child = n,
                I = t,
                L = null)) : e = null,
                e === null)
                    throw zi(t);
                return of(e) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var c = r.children;
            return r = r.fallback,
            a ? (so(t),
            a = t.mode,
            c = wc({
                mode: `hidden`,
                children: c
            }, a),
            r = gi(r, a, n, null),
            c.return = t,
            r.return = t,
            c.sibling = r,
            t.child = c,
            r = t.child,
            r.memoizedState = bc(n),
            r.childLanes = xc(e, s, n),
            t.memoizedState = yc,
            lc(null, r)) : (io(t),
            Cc(t, c))
        }
        var l = e.memoizedState;
        if (l !== null && (c = l.dehydrated,
        c !== null)) {
            if (o)
                t.flags & 256 ? (io(t),
                t.flags &= -257,
                t = Tc(e, t, n)) : t.memoizedState === null ? (so(t),
                c = r.fallback,
                a = t.mode,
                r = wc({
                    mode: `visible`,
                    children: r.children
                }, a),
                c = gi(c, a, n, null),
                c.flags |= 2,
                r.return = t,
                c.return = t,
                r.sibling = c,
                t.child = r,
                B(t, e.child, null, n),
                r = t.child,
                r.memoizedState = bc(n),
                r.childLanes = xc(e, s, n),
                t.memoizedState = yc,
                t = lc(null, r)) : (so(t),
                t.child = e.child,
                t.flags |= 128,
                t = null);
            else if (io(t),
            of(c)) {
                if (s = c.nextSibling && c.nextSibling.dataset,
                s)
                    var u = s.dgst;
                s = u,
                r = Error(i(419)),
                r.stack = ``,
                r.digest = s,
                Gi({
                    value: r,
                    source: null,
                    stack: null
                }),
                t = Tc(e, t, n)
            } else if (rc || $i(e, t, n, !1),
            s = (n & e.childLanes) !== 0,
            rc || s) {
                if (s = q,
                s !== null && (r = it(s, n),
                r !== 0 && r !== l.retryLane))
                    throw l.retryLane = r,
                    oi(e, r),
                    hu(s, e, r),
                    nc;
                af(c) || Du(),
                t = Tc(e, t, n)
            } else
                af(c) ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = l.treeContext,
                L = cf(c.nextSibling),
                I = t,
                R = !0,
                Ii = null,
                Li = !1,
                e !== null && Fi(t, e),
                t = Cc(t, r.children),
                t.flags |= 4096);
            return t
        }
        return a ? (so(t),
        c = r.fallback,
        a = t.mode,
        l = e.child,
        u = l.sibling,
        r = pi(l, {
            mode: `hidden`,
            children: r.children
        }),
        r.subtreeFlags = l.subtreeFlags & 65011712,
        u === null ? (c = gi(c, a, n, null),
        c.flags |= 2) : c = pi(u, c),
        c.return = t,
        r.return = t,
        r.sibling = c,
        t.child = r,
        lc(null, r),
        r = t.child,
        c = e.child.memoizedState,
        c === null ? c = bc(n) : (a = c.cachePool,
        a === null ? a = Sa() : (l = ca._currentValue,
        a = a.parent === l ? a : {
            parent: l,
            pool: l
        }),
        c = {
            baseLanes: c.baseLanes | n,
            cachePool: a
        }),
        r.memoizedState = c,
        r.childLanes = xc(e, s, n),
        t.memoizedState = yc,
        lc(e.child, r)) : (io(t),
        n = e.child,
        e = n.sibling,
        n = pi(n, {
            mode: `visible`,
            children: r.children
        }),
        n.return = t,
        n.sibling = null,
        e !== null && (s = t.deletions,
        s === null ? (t.deletions = [e],
        t.flags |= 16) : s.push(e)),
        t.child = n,
        t.memoizedState = null,
        n)
    }
    function Cc(e, t) {
        return t = wc({
            mode: `visible`,
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function wc(e, t) {
        return e = di(22, e, null, t),
        e.lanes = 0,
        e
    }
    function Tc(e, t, n) {
        return B(t, e.child, null, n),
        e = Cc(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function Ec(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        r !== null && (r.lanes |= t),
        Zi(e.return, t, n)
    }
    function Dc(e, t, n, r, i, a) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a
        } : (o.isBackwards = t,
        o.rendering = null,
        o.renderingStartTime = 0,
        o.last = r,
        o.tail = n,
        o.tailMode = i,
        o.treeForkCount = a)
    }
    function Oc(e, t, n) {
        var r = t.pendingProps
          , i = r.revealOrder
          , a = r.tail;
        r = r.children;
        var o = lo.current
          , s = (o & 2) != 0;
        if (s ? (o = o & 1 | 2,
        t.flags |= 128) : o &= 1,
        j(lo, o),
        ic(e, t, r, n),
        r = R ? Ti : 0,
        !s && e !== null && e.flags & 128)
            a: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ec(e, n, t);
                else if (e.tag === 19)
                    Ec(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break a;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break a;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (i) {
        case `forwards`:
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && uo(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Dc(t, !1, i, n, a, r);
            break;
        case `backwards`:
        case `unstable_legacy-backwards`:
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && uo(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Dc(t, !0, n, null, a, r);
            break;
        case `together`:
            Dc(t, !1, null, null, void 0, r);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function kc(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        Gl |= t.lanes,
        (n & t.childLanes) === 0)
            if (e !== null) {
                if ($i(e, t, n, !1),
                (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(i(153));
        if (t.child !== null) {
            for (e = t.child,
            n = pi(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = pi(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Ac(e, t) {
        return (e.lanes & t) === 0 ? (e = e.dependencies,
        !!(e !== null && ea(e))) : !0
    }
    function jc(e, t, n) {
        switch (t.tag) {
        case 3:
            ge(t, t.stateNode.containerInfo),
            Yi(t, ca, e.memoizedState.cache),
            Ui();
            break;
        case 27:
        case 5:
            ve(t);
            break;
        case 4:
            ge(t, t.stateNode.containerInfo);
            break;
        case 10:
            Yi(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                ao(t),
                null;
            break;
        case 13:
            var r = t.memoizedState;
            if (r !== null)
                return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (io(t),
                e = kc(e, t, n),
                e === null ? null : e.sibling) : Sc(e, t, n) : (io(t),
                t.flags |= 128,
                null);
            io(t);
            break;
        case 19:
            var i = (e.flags & 128) != 0;
            if (r = (n & t.childLanes) !== 0,
            r ||= ($i(e, t, n, !1),
            (n & t.childLanes) !== 0),
            i) {
                if (r)
                    return Oc(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState,
            i !== null && (i.rendering = null,
            i.tail = null,
            i.lastEffect = null),
            j(lo, lo.current),
            r)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            cc(e, t, n, t.pendingProps);
        case 24:
            Yi(t, ca, e.memoizedState.cache)
        }
        return kc(e, t, n)
    }
    function Mc(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                rc = !0;
            else {
                if (!Ac(e, n) && !(t.flags & 128))
                    return rc = !1,
                    jc(e, t, n);
                rc = !!(e.flags & 131072)
            }
        else
            rc = !1,
            R && t.flags & 1048576 && Mi(t, Ti, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            a: {
                var r = t.pendingProps;
                if (e = ka(t.elementType),
                t.type = e,
                typeof e == `function`)
                    fi(e) ? (r = Ks(e, r),
                    t.tag = 1,
                    t = _c(null, t, e, r, n)) : (t.tag = 0,
                    t = hc(null, t, e, r, n));
                else {
                    if (e != null) {
                        var a = e.$$typeof;
                        if (a === w) {
                            t.tag = 11,
                            t = ac(null, t, e, r, n);
                            break a
                        } else if (a === T) {
                            t.tag = 14,
                            t = oc(null, t, e, r, n);
                            break a
                        }
                    }
                    throw t = oe(e) || e,
                    Error(i(306, t, ``))
                }
            }
            return t;
        case 0:
            return hc(e, t, t.type, t.pendingProps, n);
        case 1:
            return r = t.type,
            a = Ks(r, t.pendingProps),
            _c(e, t, r, a, n);
        case 3:
            a: {
                if (ge(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(i(387));
                r = t.pendingProps;
                var o = t.memoizedState;
                a = o.element,
                Va(e, t),
                Ja(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.cache,
                Yi(t, ca, r),
                r !== o.cache && Qi(t, [ca], n, !0),
                qa(),
                r = s.element,
                o.isDehydrated)
                    if (o = {
                        element: r,
                        isDehydrated: !1,
                        cache: s.cache
                    },
                    t.updateQueue.baseState = o,
                    t.memoizedState = o,
                    t.flags & 256) {
                        t = vc(e, t, r, n);
                        break a
                    } else if (r !== a) {
                        a = xi(Error(i(424)), t),
                        Gi(a),
                        t = vc(e, t, r, n);
                        break a
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === `HTML` ? e.ownerDocument.body : e
                        }
                        for (L = cf(e.firstChild),
                        I = t,
                        R = !0,
                        Ii = null,
                        Li = !0,
                        n = Ra(t, null, r, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (Ui(),
                    r === a) {
                        t = kc(e, t, n);
                        break a
                    }
                    ic(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return mc(e, t),
            e === null ? (n = kf(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : R || (n = t.type,
            e = t.pendingProps,
            r = Bd(me.current).createElement(n),
            r[ut] = t,
            r[dt] = e,
            Pd(r, n, e),
            Ct(r),
            t.stateNode = r) : t.memoizedState = kf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return ve(t),
            e === null && R && (r = t.stateNode = ff(t.type, t.pendingProps, me.current),
            I = t,
            Li = !0,
            a = L,
            Zd(t.type) ? (lf = a,
            L = cf(r.firstChild)) : L = a),
            ic(e, t, t.pendingProps.children, n),
            mc(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && R && ((a = r = L) && (r = tf(r, t.type, t.pendingProps, Li),
            r === null ? a = !1 : (t.stateNode = r,
            I = t,
            L = cf(r.firstChild),
            Li = !1,
            a = !0)),
            a || zi(t)),
            ve(t),
            a = t.type,
            o = t.pendingProps,
            s = e === null ? null : e.memoizedProps,
            r = o.children,
            Ud(a, o) ? r = null : s !== null && Ud(a, s) && (t.flags |= 32),
            t.memoizedState !== null && (a = Co(e, t, Eo, null, null, n),
            Qf._currentValue = a),
            mc(e, t),
            ic(e, t, r, n),
            t.child;
        case 6:
            return e === null && R && ((e = n = L) && (n = nf(n, t.pendingProps, Li),
            n === null ? e = !1 : (t.stateNode = n,
            I = t,
            L = null,
            e = !0)),
            e || zi(t)),
            null;
        case 13:
            return Sc(e, t, n);
        case 4:
            return ge(t, t.stateNode.containerInfo),
            r = t.pendingProps,
            e === null ? t.child = B(t, null, r, n) : ic(e, t, r, n),
            t.child;
        case 11:
            return ac(e, t, t.type, t.pendingProps, n);
        case 7:
            return ic(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return ic(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return ic(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            return r = t.pendingProps,
            Yi(t, t.type, r.value),
            ic(e, t, r.children, n),
            t.child;
        case 9:
            return a = t.type._context,
            r = t.pendingProps.children,
            ta(t),
            a = na(a),
            r = r(a),
            t.flags |= 1,
            ic(e, t, r, n),
            t.child;
        case 14:
            return oc(e, t, t.type, t.pendingProps, n);
        case 15:
            return sc(e, t, t.type, t.pendingProps, n);
        case 19:
            return Oc(e, t, n);
        case 31:
            return pc(e, t, n);
        case 22:
            return cc(e, t, n, t.pendingProps);
        case 24:
            return ta(t),
            r = na(ca),
            e === null ? (a = ba(),
            a === null && (a = q,
            o = la(),
            a.pooledCache = o,
            o.refCount++,
            o !== null && (a.pooledCacheLanes |= n),
            a = o),
            t.memoizedState = {
                parent: r,
                cache: a
            },
            Ba(t),
            Yi(t, ca, a)) : ((e.lanes & n) !== 0 && (Va(e, t),
            Ja(t, null, null, n),
            qa()),
            a = e.memoizedState,
            o = t.memoizedState,
            a.parent === r ? (r = o.cache,
            Yi(t, ca, r),
            r !== a.cache && Qi(t, [ca], n, !0)) : (a = {
                parent: r,
                cache: r
            },
            t.memoizedState = a,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
            Yi(t, ca, r))),
            ic(e, t, t.pendingProps.children, n),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(i(156, t.tag))
    }
    function Nc(e) {
        e.flags |= 4
    }
    function Pc(e, t, n, r, i) {
        if ((t = (e.mode & 32) != 0) && (t = !1),
        t) {
            if (e.flags |= 16777216,
            (i & 335544128) === i)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (wu())
                    e.flags |= 8192;
                else
                    throw Aa = Ea,
                    wa
        } else
            e.flags &= -16777217
    }
    function Fc(e, t) {
        if (t.type !== `stylesheet` || t.state.loading & 4)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Wf(t))
            if (wu())
                e.flags |= 8192;
            else
                throw Aa = Ea,
                wa
    }
    function Ic(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag === 22 ? 536870912 : N(),
        e.lanes |= t,
        Yl |= t)
    }
    function Lc(e, t) {
        if (!R)
            switch (e.tailMode) {
            case `hidden`:
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case `collapsed`:
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n),
                    n = n.sibling;
                r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
            }
    }
    function W(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , r = 0;
        if (t)
            for (var i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags & 65011712,
                r |= i.flags & 65011712,
                i.return = e,
                i = i.sibling;
        else
            for (i = e.child; i !== null; )
                n |= i.lanes | i.childLanes,
                r |= i.subtreeFlags,
                r |= i.flags,
                i.return = e,
                i = i.sibling;
        return e.subtreeFlags |= r,
        e.childLanes = n,
        t
    }
    function Rc(e, t, n) {
        var r = t.pendingProps;
        switch (Pi(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return W(t),
            null;
        case 1:
            return W(t),
            null;
        case 3:
            return n = t.stateNode,
            r = null,
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Xi(ca),
            _e(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (e === null || e.child === null) && (Hi(t) ? Nc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
            Wi())),
            W(t),
            null;
        case 26:
            var a = t.type
              , o = t.memoizedState;
            return e === null ? (Nc(t),
            o === null ? (W(t),
            Pc(t, a, null, r, n)) : (W(t),
            Fc(t, o))) : o ? o === e.memoizedState ? (W(t),
            t.flags &= -16777217) : (Nc(t),
            W(t),
            Fc(t, o)) : (e = e.memoizedProps,
            e !== r && Nc(t),
            W(t),
            Pc(t, a, e, r, n)),
            null;
        case 27:
            if (ye(t),
            n = me.current,
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && Nc(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(i(166));
                    return W(t),
                    null
                }
                e = fe.current,
                Hi(t) ? Bi(t, e) : (e = ff(a, r, n),
                t.stateNode = e,
                Nc(t))
            }
            return W(t),
            null;
        case 5:
            if (ye(t),
            a = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== r && Nc(t);
            else {
                if (!r) {
                    if (t.stateNode === null)
                        throw Error(i(166));
                    return W(t),
                    null
                }
                if (o = fe.current,
                Hi(t))
                    Bi(t, o);
                else {
                    var s = Bd(me.current);
                    switch (o) {
                    case 1:
                        o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                        break;
                    case 2:
                        o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                        break;
                    default:
                        switch (a) {
                        case `svg`:
                            o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                            break;
                        case `math`:
                            o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                            break;
                        case `script`:
                            o = s.createElement(`div`),
                            o.innerHTML = `<script><\/script>`,
                            o = o.removeChild(o.firstChild);
                            break;
                        case `select`:
                            o = typeof r.is == `string` ? s.createElement(`select`, {
                                is: r.is
                            }) : s.createElement(`select`),
                            r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
                            break;
                        default:
                            o = typeof r.is == `string` ? s.createElement(a, {
                                is: r.is
                            }) : s.createElement(a)
                        }
                    }
                    o[ut] = t,
                    o[dt] = r;
                    a: for (s = t.child; s !== null; ) {
                        if (s.tag === 5 || s.tag === 6)
                            o.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s,
                            s = s.child;
                            continue
                        }
                        if (s === t)
                            break a;
                        for (; s.sibling === null; ) {
                            if (s.return === null || s.return === t)
                                break a;
                            s = s.return
                        }
                        s.sibling.return = s.return,
                        s = s.sibling
                    }
                    t.stateNode = o;
                    a: switch (Pd(o, a, r),
                    a) {
                    case `button`:
                    case `input`:
                    case `select`:
                    case `textarea`:
                        r = !!r.autoFocus;
                        break a;
                    case `img`:
                        r = !0;
                        break a;
                    default:
                        r = !1
                    }
                    r && Nc(t)
                }
            }
            return W(t),
            Pc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== r && Nc(t);
            else {
                if (typeof r != `string` && t.stateNode === null)
                    throw Error(i(166));
                if (e = me.current,
                Hi(t)) {
                    if (e = t.stateNode,
                    n = t.memoizedProps,
                    r = null,
                    a = I,
                    a !== null)
                        switch (a.tag) {
                        case 27:
                        case 5:
                            r = a.memoizedProps
                        }
                    e[ut] = t,
                    e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Md(e.nodeValue, n)),
                    e || zi(t, !0)
                } else
                    e = Bd(e).createTextNode(r),
                    e[ut] = t,
                    t.stateNode = e
            }
            return W(t),
            null;
        case 31:
            if (n = t.memoizedState,
            e === null || e.memoizedState !== null) {
                if (r = Hi(t),
                n !== null) {
                    if (e === null) {
                        if (!r)
                            throw Error(i(318));
                        if (e = t.memoizedState,
                        e = e === null ? null : e.dehydrated,
                        !e)
                            throw Error(i(557));
                        e[ut] = t
                    } else
                        Ui(),
                        !(t.flags & 128) && (t.memoizedState = null),
                        t.flags |= 4;
                    W(t),
                    e = !1
                } else
                    n = Wi(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                    e = !0;
                if (!e)
                    return t.flags & 256 ? (co(t),
                    t) : (co(t),
                    null);
                if (t.flags & 128)
                    throw Error(i(558))
            }
            return W(t),
            null;
        case 13:
            if (r = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (a = Hi(t),
                r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!a)
                            throw Error(i(318));
                        if (a = t.memoizedState,
                        a = a === null ? null : a.dehydrated,
                        !a)
                            throw Error(i(317));
                        a[ut] = t
                    } else
                        Ui(),
                        !(t.flags & 128) && (t.memoizedState = null),
                        t.flags |= 4;
                    W(t),
                    a = !1
                } else
                    a = Wi(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                    a = !0;
                if (!a)
                    return t.flags & 256 ? (co(t),
                    t) : (co(t),
                    null)
            }
            return co(t),
            t.flags & 128 ? (t.lanes = n,
            t) : (n = r !== null,
            e = e !== null && e.memoizedState !== null,
            n && (r = t.child,
            a = null,
            r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool),
            o = null,
            r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool),
            o !== a && (r.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            Ic(t, t.updateQueue),
            W(t),
            null);
        case 4:
            return _e(),
            e === null && Sd(t.stateNode.containerInfo),
            W(t),
            null;
        case 10:
            return Xi(t.type),
            W(t),
            null;
        case 19:
            if (A(lo),
            r = t.memoizedState,
            r === null)
                return W(t),
                null;
            if (a = (t.flags & 128) != 0,
            o = r.rendering,
            o === null)
                if (a)
                    Lc(r, !1);
                else {
                    if (Wl !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null; ) {
                            if (o = uo(e),
                            o !== null) {
                                for (t.flags |= 128,
                                Lc(r, !1),
                                e = o.updateQueue,
                                t.updateQueue = e,
                                Ic(t, e),
                                t.subtreeFlags = 0,
                                e = n,
                                n = t.child; n !== null; )
                                    mi(n, e),
                                    n = n.sibling;
                                return j(lo, lo.current & 1 | 2),
                                R && ji(t, r.treeForkCount),
                                t.child
                            }
                            e = e.sibling
                        }
                    r.tail !== null && je() > tu && (t.flags |= 128,
                    a = !0,
                    Lc(r, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = uo(o),
                    e !== null) {
                        if (t.flags |= 128,
                        a = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        Ic(t, e),
                        Lc(r, !0),
                        r.tail === null && r.tailMode === `hidden` && !o.alternate && !R)
                            return W(t),
                            null
                    } else
                        2 * je() - r.renderingStartTime > tu && n !== 536870912 && (t.flags |= 128,
                        a = !0,
                        Lc(r, !1),
                        t.lanes = 4194304);
                r.isBackwards ? (o.sibling = t.child,
                t.child = o) : (e = r.last,
                e === null ? t.child = o : e.sibling = o,
                r.last = o)
            }
            return r.tail === null ? (W(t),
            null) : (e = r.tail,
            r.rendering = e,
            r.tail = e.sibling,
            r.renderingStartTime = je(),
            e.sibling = null,
            n = lo.current,
            j(lo, a ? n & 1 | 2 : n & 1),
            R && ji(t, r.treeForkCount),
            e);
        case 22:
        case 23:
            return co(t),
            to(),
            r = t.memoizedState !== null,
            e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192),
            r ? n & 536870912 && !(t.flags & 128) && (W(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : W(t),
            n = t.updateQueue,
            n !== null && Ic(t, n.retryQueue),
            n = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            r = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && A(ya),
            null;
        case 24:
            return n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Xi(ca),
            W(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(i(156, t.tag))
    }
    function zc(e, t) {
        switch (Pi(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Xi(ca),
            _e(),
            e = t.flags,
            e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return ye(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (co(t),
                t.alternate === null)
                    throw Error(i(340));
                Ui()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 13:
            if (co(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(i(340));
                Ui()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return A(lo),
            null;
        case 4:
            return _e(),
            null;
        case 10:
            return Xi(t.type),
            null;
        case 22:
        case 23:
            return co(t),
            to(),
            e !== null && A(ya),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Xi(ca),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Bc(e, t) {
        switch (Pi(t),
        t.tag) {
        case 3:
            Xi(ca),
            _e();
            break;
        case 26:
        case 27:
        case 5:
            ye(t);
            break;
        case 4:
            _e();
            break;
        case 31:
            t.memoizedState !== null && co(t);
            break;
        case 13:
            co(t);
            break;
        case 19:
            A(lo);
            break;
        case 10:
            Xi(t.type);
            break;
        case 22:
        case 23:
            co(t),
            to(),
            e !== null && A(ya);
            break;
        case 24:
            Xi(ca)
        }
    }
    function Vc(e, t) {
        try {
            var n = t.updateQueue
              , r = n === null ? null : n.lastEffect;
            if (r !== null) {
                var i = r.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        r = void 0;
                        var a = n.create
                          , o = n.inst;
                        r = a(),
                        o.destroy = r
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (e) {
            Z(t, t.return, e)
        }
    }
    function Hc(e, t, n) {
        try {
            var r = t.updateQueue
              , i = r === null ? null : r.lastEffect;
            if (i !== null) {
                var a = i.next;
                r = a;
                do {
                    if ((r.tag & e) === e) {
                        var o = r.inst
                          , s = o.destroy;
                        if (s !== void 0) {
                            o.destroy = void 0,
                            i = t;
                            var c = n
                              , l = s;
                            try {
                                l()
                            } catch (e) {
                                Z(i, c, e)
                            }
                        }
                    }
                    r = r.next
                } while (r !== a)
            }
        } catch (e) {
            Z(t, t.return, e)
        }
    }
    function Uc(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                Xa(t, n)
            } catch (t) {
                Z(e, e.return, t)
            }
        }
    }
    function Wc(e, t, n) {
        n.props = Ks(e.type, e.memoizedProps),
        n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (n) {
            Z(e, t, n)
        }
    }
    function Gc(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var r = e.stateNode;
                    break;
                case 30:
                    r = e.stateNode;
                    break;
                default:
                    r = e.stateNode
                }
                typeof n == `function` ? e.refCleanup = n(r) : n.current = r
            }
        } catch (n) {
            Z(e, t, n)
        }
    }
    function Kc(e, t) {
        var n = e.ref
          , r = e.refCleanup;
        if (n !== null)
            if (typeof r == `function`)
                try {
                    r()
                } catch (n) {
                    Z(e, t, n)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof n == `function`)
                try {
                    n(null)
                } catch (n) {
                    Z(e, t, n)
                }
            else
                n.current = null
    }
    function qc(e) {
        var t = e.type
          , n = e.memoizedProps
          , r = e.stateNode;
        try {
            a: switch (t) {
            case `button`:
            case `input`:
            case `select`:
            case `textarea`:
                n.autoFocus && r.focus();
                break a;
            case `img`:
                n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet)
            }
        } catch (t) {
            Z(e, e.return, t)
        }
    }
    function Jc(e, t, n) {
        try {
            var r = e.stateNode;
            Fd(r, e.type, n, t),
            r[dt] = t
        } catch (t) {
            Z(e, e.return, t)
        }
    }
    function Yc(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zd(e.type) || e.tag === 4
    }
    function Xc(e) {
        a: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Yc(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Zd(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue a;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function Zc(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n,
            t.appendChild(e),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = nn));
        else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (Zc(e, t, n),
            e = e.sibling; e !== null; )
                Zc(e, t, n),
                e = e.sibling
    }
    function Qc(e, t, n) {
        var r = e.tag;
        if (r === 5 || r === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (r === 27 && Zd(e.type) && (n = e.stateNode),
        e = e.child,
        e !== null))
            for (Qc(e, t, n),
            e = e.sibling; e !== null; )
                Qc(e, t, n),
                e = e.sibling
    }
    function $c(e) {
        var t = e.stateNode
          , n = e.memoizedProps;
        try {
            for (var r = e.type, i = t.attributes; i.length; )
                t.removeAttributeNode(i[0]);
            Pd(t, r, n),
            t[ut] = e,
            t[dt] = n
        } catch (t) {
            Z(e, e.return, t)
        }
    }
    var el = !1
      , G = !1
      , tl = !1
      , nl = typeof WeakSet == `function` ? WeakSet : Set
      , rl = null;
    function il(e, t) {
        if (e = e.containerInfo,
        Rd = sp,
        e = Ar(e),
        jr(e)) {
            if (`selectionStart`in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                a: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var r = n.getSelection && n.getSelection();
                    if (r && r.rangeCount !== 0) {
                        n = r.anchorNode;
                        var a = r.anchorOffset
                          , o = r.focusNode;
                        r = r.focusOffset;
                        try {
                            n.nodeType,
                            o.nodeType
                        } catch {
                            n = null;
                            break a
                        }
                        var s = 0
                          , c = -1
                          , l = -1
                          , u = 0
                          , d = 0
                          , f = e
                          , p = null;
                        b: for (; ; ) {
                            for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a),
                            f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r),
                            f.nodeType === 3 && (s += f.nodeValue.length),
                            (m = f.firstChild) !== null; )
                                p = f,
                                f = m;
                            for (; ; ) {
                                if (f === e)
                                    break b;
                                if (p === n && ++u === a && (c = s),
                                p === o && ++d === r && (l = s),
                                (m = f.nextSibling) !== null)
                                    break;
                                f = p,
                                p = f.parentNode
                            }
                            f = m
                        }
                        n = c === -1 || l === -1 ? null : {
                            start: c,
                            end: l
                        }
                    } else
                        n = null
                }
            n ||= {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (zd = {
            focusedElem: e,
            selectionRange: n
        },
        sp = !1,
        rl = t; rl !== null; )
            if (t = rl,
            e = t.child,
            t.subtreeFlags & 1028 && e !== null)
                e.return = t,
                rl = e;
            else
                for (; rl !== null; ) {
                    switch (t = rl,
                    o = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        if (e & 4 && (e = t.updateQueue,
                        e = e === null ? null : e.events,
                        e !== null))
                            for (n = 0; n < e.length; n++)
                                a = e[n],
                                a.ref.impl = a.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (e & 1024 && o !== null) {
                            e = void 0,
                            n = t,
                            a = o.memoizedProps,
                            o = o.memoizedState,
                            r = n.stateNode;
                            try {
                                var h = Ks(n.type, a);
                                e = r.getSnapshotBeforeUpdate(h, o),
                                r.__reactInternalSnapshotBeforeUpdate = e
                            } catch (e) {
                                Z(n, n.return, e)
                            }
                        }
                        break;
                    case 3:
                        if (e & 1024) {
                            if (e = t.stateNode.containerInfo,
                            n = e.nodeType,
                            n === 9)
                                ef(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                case `HEAD`:
                                case `HTML`:
                                case `BODY`:
                                    ef(e);
                                    break;
                                default:
                                    e.textContent = ``
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if (e & 1024)
                            throw Error(i(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        rl = e;
                        break
                    }
                    rl = t.return
                }
    }
    function al(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            bl(e, n),
            r & 4 && Vc(5, n);
            break;
        case 1:
            if (bl(e, n),
            r & 4)
                if (e = n.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (e) {
                        Z(n, n.return, e)
                    }
                else {
                    var i = Ks(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (e) {
                        Z(n, n.return, e)
                    }
                }
            r & 64 && Uc(n),
            r & 512 && Gc(n, n.return);
            break;
        case 3:
            if (bl(e, n),
            r & 64 && (e = n.updateQueue,
            e !== null)) {
                if (t = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        t = n.child.stateNode;
                        break;
                    case 1:
                        t = n.child.stateNode
                    }
                try {
                    Xa(e, t)
                } catch (e) {
                    Z(n, n.return, e)
                }
            }
            break;
        case 27:
            t === null && r & 4 && $c(n);
        case 26:
        case 5:
            bl(e, n),
            t === null && r & 4 && qc(n),
            r & 512 && Gc(n, n.return);
            break;
        case 12:
            bl(e, n);
            break;
        case 31:
            bl(e, n),
            r & 4 && dl(e, n);
            break;
        case 13:
            bl(e, n),
            r & 4 && fl(e, n),
            r & 64 && (e = n.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (n = Ju.bind(null, n),
            sf(e, n))));
            break;
        case 22:
            if (r = n.memoizedState !== null || el,
            !r) {
                t = t !== null && t.memoizedState !== null || G,
                i = el;
                var a = G;
                el = r,
                (G = t) && !a ? Sl(e, n, (n.subtreeFlags & 8772) != 0) : bl(e, n),
                el = i,
                G = a
            }
            break;
        case 30:
            break;
        default:
            bl(e, n)
        }
    }
    function ol(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        ol(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && vt(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var sl = null
      , cl = !1;
    function ll(e, t, n) {
        for (n = n.child; n !== null; )
            ul(e, t, n),
            n = n.sibling
    }
    function ul(e, t, n) {
        if (Ve && typeof Ve.onCommitFiberUnmount == `function`)
            try {
                Ve.onCommitFiberUnmount(Be, n)
            } catch {}
        switch (n.tag) {
        case 26:
            G || Kc(n, t),
            ll(e, t, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            G || Kc(n, t);
            var r = sl
              , i = cl;
            Zd(n.type) && (sl = n.stateNode,
            cl = !1),
            ll(e, t, n),
            pf(n.stateNode),
            sl = r,
            cl = i;
            break;
        case 5:
            G || Kc(n, t);
        case 6:
            if (r = sl,
            i = cl,
            sl = null,
            ll(e, t, n),
            sl = r,
            cl = i,
            sl !== null)
                if (cl)
                    try {
                        (sl.nodeType === 9 ? sl.body : sl.nodeName === `HTML` ? sl.ownerDocument.body : sl).removeChild(n.stateNode)
                    } catch (e) {
                        Z(n, t, e)
                    }
                else
                    try {
                        sl.removeChild(n.stateNode)
                    } catch (e) {
                        Z(n, t, e)
                    }
            break;
        case 18:
            sl !== null && (cl ? (e = sl,
            Qd(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode),
            Np(e)) : Qd(sl, n.stateNode));
            break;
        case 4:
            r = sl,
            i = cl,
            sl = n.stateNode.containerInfo,
            cl = !0,
            ll(e, t, n),
            sl = r,
            cl = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Hc(2, n, t),
            G || Hc(4, n, t),
            ll(e, t, n);
            break;
        case 1:
            G || (Kc(n, t),
            r = n.stateNode,
            typeof r.componentWillUnmount == `function` && Wc(n, t, r)),
            ll(e, t, n);
            break;
        case 21:
            ll(e, t, n);
            break;
        case 22:
            G = (r = G) || n.memoizedState !== null,
            ll(e, t, n),
            G = r;
            break;
        default:
            ll(e, t, n)
        }
    }
    function dl(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                Np(e)
            } catch (e) {
                Z(t, t.return, e)
            }
        }
    }
    function fl(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Np(e)
            } catch (e) {
                Z(t, t.return, e)
            }
    }
    function pl(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new nl),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new nl),
            t;
        default:
            throw Error(i(435, e.tag))
        }
    }
    function ml(e, t) {
        var n = pl(e);
        t.forEach(function(t) {
            if (!n.has(t)) {
                n.add(t);
                var r = Yu.bind(null, e, t);
                t.then(r, r)
            }
        })
    }
    function hl(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var r = 0; r < n.length; r++) {
                var a = n[r]
                  , o = e
                  , s = t
                  , c = s;
                a: for (; c !== null; ) {
                    switch (c.tag) {
                    case 27:
                        if (Zd(c.type)) {
                            sl = c.stateNode,
                            cl = !1;
                            break a
                        }
                        break;
                    case 5:
                        sl = c.stateNode,
                        cl = !1;
                        break a;
                    case 3:
                    case 4:
                        sl = c.stateNode.containerInfo,
                        cl = !0;
                        break a
                    }
                    c = c.return
                }
                if (sl === null)
                    throw Error(i(160));
                ul(o, s, a),
                sl = null,
                cl = !1,
                o = a.alternate,
                o !== null && (o.return = null),
                a.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                _l(t, e),
                t = t.sibling
    }
    var gl = null;
    function _l(e, t) {
        var n = e.alternate
          , r = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            hl(t, e),
            vl(e),
            r & 4 && (Hc(3, e, e.return),
            Vc(3, e),
            Hc(5, e, e.return));
            break;
        case 1:
            hl(t, e),
            vl(e),
            r & 512 && (G || n === null || Kc(n, n.return)),
            r & 64 && el && (e = e.updateQueue,
            e !== null && (r = e.callbacks,
            r !== null && (n = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
            break;
        case 26:
            var a = gl;
            if (hl(t, e),
            vl(e),
            r & 512 && (G || n === null || Kc(n, n.return)),
            r & 4) {
                var o = n === null ? null : n.memoizedState;
                if (r = e.memoizedState,
                n === null)
                    if (r === null)
                        if (e.stateNode === null) {
                            a: {
                                r = e.type,
                                n = e.memoizedProps,
                                a = a.ownerDocument || a;
                                b: switch (r) {
                                case `title`:
                                    o = a.getElementsByTagName(`title`)[0],
                                    (!o || o[_t] || o[ut] || o.namespaceURI === `http://www.w3.org/2000/svg` || o.hasAttribute(`itemprop`)) && (o = a.createElement(r),
                                    a.head.insertBefore(o, a.querySelector(`head > title`))),
                                    Pd(o, r, n),
                                    o[ut] = e,
                                    Ct(o),
                                    r = o;
                                    break a;
                                case `link`:
                                    var s = Vf(`link`, `href`, a).get(r + (n.href || ``));
                                    if (s) {
                                        for (var c = 0; c < s.length; c++)
                                            if (o = s[c],
                                            o.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && o.getAttribute(`title`) === (n.title == null ? null : n.title) && o.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                s.splice(c, 1);
                                                break b
                                            }
                                    }
                                    o = a.createElement(r),
                                    Pd(o, r, n),
                                    a.head.appendChild(o);
                                    break;
                                case `meta`:
                                    if (s = Vf(`meta`, `content`, a).get(r + (n.content || ``))) {
                                        for (c = 0; c < s.length; c++)
                                            if (o = s[c],
                                            o.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && o.getAttribute(`name`) === (n.name == null ? null : n.name) && o.getAttribute(`property`) === (n.property == null ? null : n.property) && o.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                                                s.splice(c, 1);
                                                break b
                                            }
                                    }
                                    o = a.createElement(r),
                                    Pd(o, r, n),
                                    a.head.appendChild(o);
                                    break;
                                default:
                                    throw Error(i(468, r))
                                }
                                o[ut] = e,
                                Ct(o),
                                r = o
                            }
                            e.stateNode = r
                        } else
                            Hf(a, e.type, e.stateNode);
                    else
                        e.stateNode = If(a, r, e.memoizedProps);
                else
                    o === r ? r === null && e.stateNode !== null && Jc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : o.count--,
                    r === null ? Hf(a, e.type, e.stateNode) : If(a, r, e.memoizedProps))
            }
            break;
        case 27:
            hl(t, e),
            vl(e),
            r & 512 && (G || n === null || Kc(n, n.return)),
            n !== null && r & 4 && Jc(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (hl(t, e),
            vl(e),
            r & 512 && (G || n === null || Kc(n, n.return)),
            e.flags & 32) {
                a = e.stateNode;
                try {
                    Jt(a, ``)
                } catch (t) {
                    Z(e, e.return, t)
                }
            }
            r & 4 && e.stateNode != null && (a = e.memoizedProps,
            Jc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (tl = !0);
            break;
        case 6:
            if (hl(t, e),
            vl(e),
            r & 4) {
                if (e.stateNode === null)
                    throw Error(i(162));
                r = e.memoizedProps,
                n = e.stateNode;
                try {
                    n.nodeValue = r
                } catch (t) {
                    Z(e, e.return, t)
                }
            }
            break;
        case 3:
            if (Bf = null,
            a = gl,
            gl = gf(t.containerInfo),
            hl(t, e),
            gl = a,
            vl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    Np(t.containerInfo)
                } catch (t) {
                    Z(e, e.return, t)
                }
            tl && (tl = !1,
            yl(e));
            break;
        case 4:
            r = gl,
            gl = gf(e.stateNode.containerInfo),
            hl(t, e),
            vl(e),
            gl = r;
            break;
        case 12:
            hl(t, e),
            vl(e);
            break;
        case 31:
            hl(t, e),
            vl(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            ml(e, r)));
            break;
        case 13:
            hl(t, e),
            vl(e),
            e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && ($l = je()),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            ml(e, r)));
            break;
        case 22:
            a = e.memoizedState !== null;
            var l = n !== null && n.memoizedState !== null
              , u = el
              , d = G;
            if (el = u || a,
            G = d || l,
            hl(t, e),
            G = d,
            el = u,
            vl(e),
            r & 8192)
                a: for (t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || el || G || xl(e)),
                n = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            l = n = t;
                            try {
                                if (o = l.stateNode,
                                a)
                                    s = o.style,
                                    typeof s.setProperty == `function` ? s.setProperty(`display`, `none`, `important`) : s.display = `none`;
                                else {
                                    c = l.stateNode;
                                    var f = l.memoizedProps.style
                                      , p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                                    c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim()
                                }
                            } catch (e) {
                                Z(l, l.return, e)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            l = t;
                            try {
                                l.stateNode.nodeValue = a ? `` : l.memoizedProps
                            } catch (e) {
                                Z(l, l.return, e)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (n === null) {
                            l = t;
                            try {
                                var m = l.stateNode;
                                a ? $d(m, !0) : $d(l.stateNode, !1)
                            } catch (e) {
                                Z(l, l.return, e)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break a;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break a;
                        n === t && (n = null),
                        t = t.return
                    }
                    n === t && (n = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            r & 4 && (r = e.updateQueue,
            r !== null && (n = r.retryQueue,
            n !== null && (r.retryQueue = null,
            ml(e, n))));
            break;
        case 19:
            hl(t, e),
            vl(e),
            r & 4 && (r = e.updateQueue,
            r !== null && (e.updateQueue = null,
            ml(e, r)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            hl(t, e),
            vl(e)
        }
    }
    function vl(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, r = e.return; r !== null; ) {
                    if (Yc(r)) {
                        n = r;
                        break
                    }
                    r = r.return
                }
                if (n == null)
                    throw Error(i(160));
                switch (n.tag) {
                case 27:
                    var a = n.stateNode;
                    Qc(e, Xc(e), a);
                    break;
                case 5:
                    var o = n.stateNode;
                    n.flags & 32 && (Jt(o, ``),
                    n.flags &= -33),
                    Qc(e, Xc(e), o);
                    break;
                case 3:
                case 4:
                    var s = n.stateNode.containerInfo;
                    Zc(e, Xc(e), s);
                    break;
                default:
                    throw Error(i(161))
                }
            } catch (t) {
                Z(e, e.return, t)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function yl(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                yl(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function bl(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                al(e, t.alternate, t),
                t = t.sibling
    }
    function xl(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Hc(4, t, t.return),
                xl(t);
                break;
            case 1:
                Kc(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == `function` && Wc(t, t.return, n),
                xl(t);
                break;
            case 27:
                pf(t.stateNode);
            case 26:
            case 5:
                Kc(t, t.return),
                xl(t);
                break;
            case 22:
                t.memoizedState === null && xl(t);
                break;
            case 30:
                xl(t);
                break;
            default:
                xl(t)
            }
            e = e.sibling
        }
    }
    function Sl(e, t, n) {
        for (n &&= (t.subtreeFlags & 8772) != 0,
        t = t.child; t !== null; ) {
            var r = t.alternate
              , i = e
              , a = t
              , o = a.flags;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Sl(i, a, n),
                Vc(4, a);
                break;
            case 1:
                if (Sl(i, a, n),
                r = a,
                i = r.stateNode,
                typeof i.componentDidMount == `function`)
                    try {
                        i.componentDidMount()
                    } catch (e) {
                        Z(r, r.return, e)
                    }
                if (r = a,
                i = r.updateQueue,
                i !== null) {
                    var s = r.stateNode;
                    try {
                        var c = i.shared.hiddenCallbacks;
                        if (c !== null)
                            for (i.shared.hiddenCallbacks = null,
                            i = 0; i < c.length; i++)
                                Ya(c[i], s)
                    } catch (e) {
                        Z(r, r.return, e)
                    }
                }
                n && o & 64 && Uc(a),
                Gc(a, a.return);
                break;
            case 27:
                $c(a);
            case 26:
            case 5:
                Sl(i, a, n),
                n && r === null && o & 4 && qc(a),
                Gc(a, a.return);
                break;
            case 12:
                Sl(i, a, n);
                break;
            case 31:
                Sl(i, a, n),
                n && o & 4 && dl(i, a);
                break;
            case 13:
                Sl(i, a, n),
                n && o & 4 && fl(i, a);
                break;
            case 22:
                a.memoizedState === null && Sl(i, a, n),
                Gc(a, a.return);
                break;
            case 30:
                break;
            default:
                Sl(i, a, n)
            }
            t = t.sibling
        }
    }
    function Cl(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++,
        n != null && ua(n))
    }
    function wl(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && ua(e))
    }
    function Tl(e, t, n, r) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                El(e, t, n, r),
                t = t.sibling
    }
    function El(e, t, n, r) {
        var i = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Tl(e, t, n, r),
            i & 2048 && Vc(9, t);
            break;
        case 1:
            Tl(e, t, n, r);
            break;
        case 3:
            Tl(e, t, n, r),
            i & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && ua(e)));
            break;
        case 12:
            if (i & 2048) {
                Tl(e, t, n, r),
                e = t.stateNode;
                try {
                    var a = t.memoizedProps
                      , o = a.id
                      , s = a.onPostCommit;
                    typeof s == `function` && s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0)
                } catch (e) {
                    Z(t, t.return, e)
                }
            } else
                Tl(e, t, n, r);
            break;
        case 31:
            Tl(e, t, n, r);
            break;
        case 13:
            Tl(e, t, n, r);
            break;
        case 23:
            break;
        case 22:
            a = t.stateNode,
            o = t.alternate,
            t.memoizedState === null ? a._visibility & 2 ? Tl(e, t, n, r) : (a._visibility |= 2,
            Dl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? Tl(e, t, n, r) : Ol(e, t),
            i & 2048 && Cl(o, t);
            break;
        case 24:
            Tl(e, t, n, r),
            i & 2048 && wl(t.alternate, t);
            break;
        default:
            Tl(e, t, n, r)
        }
    }
    function Dl(e, t, n, r, i) {
        for (i &&= (t.subtreeFlags & 10256) != 0 || !1,
        t = t.child; t !== null; ) {
            var a = e
              , o = t
              , s = n
              , c = r
              , l = o.flags;
            switch (o.tag) {
            case 0:
            case 11:
            case 15:
                Dl(a, o, s, c, i),
                Vc(8, o);
                break;
            case 23:
                break;
            case 22:
                var u = o.stateNode;
                o.memoizedState === null ? (u._visibility |= 2,
                Dl(a, o, s, c, i)) : u._visibility & 2 ? Dl(a, o, s, c, i) : Ol(a, o),
                i && l & 2048 && Cl(o.alternate, o);
                break;
            case 24:
                Dl(a, o, s, c, i),
                i && l & 2048 && wl(o.alternate, o);
                break;
            default:
                Dl(a, o, s, c, i)
            }
            t = t.sibling
        }
    }
    function Ol(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e
                  , r = t
                  , i = r.flags;
                switch (r.tag) {
                case 22:
                    Ol(n, r),
                    i & 2048 && Cl(r.alternate, r);
                    break;
                case 24:
                    Ol(n, r),
                    i & 2048 && wl(r.alternate, r);
                    break;
                default:
                    Ol(n, r)
                }
                t = t.sibling
            }
    }
    var kl = 8192;
    function Al(e, t, n) {
        if (e.subtreeFlags & kl)
            for (e = e.child; e !== null; )
                jl(e, t, n),
                e = e.sibling
    }
    function jl(e, t, n) {
        switch (e.tag) {
        case 26:
            Al(e, t, n),
            e.flags & kl && e.memoizedState !== null && Gf(n, gl, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Al(e, t, n);
            break;
        case 3:
        case 4:
            var r = gl;
            gl = gf(e.stateNode.containerInfo),
            Al(e, t, n),
            gl = r;
            break;
        case 22:
            e.memoizedState === null && (r = e.alternate,
            r !== null && r.memoizedState !== null ? (r = kl,
            kl = 16777216,
            Al(e, t, n),
            kl = r) : Al(e, t, n));
            break;
        default:
            Al(e, t, n)
        }
    }
    function Ml(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Nl(e) {
        var t = e.deletions;
        if (e.flags & 16) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    rl = r,
                    Il(r, e)
                }
            Ml(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Pl(e),
                e = e.sibling
    }
    function Pl(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Nl(e),
            e.flags & 2048 && Hc(9, e, e.return);
            break;
        case 3:
            Nl(e);
            break;
        case 12:
            Nl(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            Fl(e)) : Nl(e);
            break;
        default:
            Nl(e)
        }
    }
    function Fl(e) {
        var t = e.deletions;
        if (e.flags & 16) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    rl = r,
                    Il(r, e)
                }
            Ml(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Hc(8, t, t.return),
                Fl(t);
                break;
            case 22:
                n = t.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                Fl(t));
                break;
            default:
                Fl(t)
            }
            e = e.sibling
        }
    }
    function Il(e, t) {
        for (; rl !== null; ) {
            var n = rl;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Hc(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var r = n.memoizedState.cachePool.pool;
                    r != null && r.refCount++
                }
                break;
            case 24:
                ua(n.memoizedState.cache)
            }
            if (r = n.child,
            r !== null)
                r.return = n,
                rl = r;
            else
                a: for (n = e; rl !== null; ) {
                    r = rl;
                    var i = r.sibling
                      , a = r.return;
                    if (ol(r),
                    r === n) {
                        rl = null;
                        break a
                    }
                    if (i !== null) {
                        i.return = a,
                        rl = i;
                        break a
                    }
                    rl = a
                }
        }
    }
    var Ll = {
        getCacheForType: function(e) {
            var t = na(ca)
              , n = t.data.get(e);
            return n === void 0 && (n = e(),
            t.data.set(e, n)),
            n
        },
        cacheSignal: function() {
            return na(ca).controller.signal
        }
    }
      , Rl = typeof WeakMap == `function` ? WeakMap : Map
      , K = 0
      , q = null
      , J = null
      , Y = 0
      , X = 0
      , zl = null
      , Bl = !1
      , Vl = !1
      , Hl = !1
      , Ul = 0
      , Wl = 0
      , Gl = 0
      , Kl = 0
      , ql = 0
      , Jl = 0
      , Yl = 0
      , Xl = null
      , Zl = null
      , Ql = !1
      , $l = 0
      , eu = 0
      , tu = 1 / 0
      , nu = null
      , ru = null
      , iu = 0
      , au = null
      , ou = null
      , su = 0
      , cu = 0
      , lu = null
      , uu = null
      , du = 0
      , fu = null;
    function pu() {
        return K & 2 && Y !== 0 ? Y & -Y : O.T === null ? st() : dd()
    }
    function mu() {
        if (Jl === 0)
            if (!(Y & 536870912) || R) {
                var e = Je;
                Je <<= 1,
                !(Je & 3932160) && (Je = 262144),
                Jl = e
            } else
                Jl = 536870912;
        return e = no.current,
        e !== null && (e.flags |= 32),
        Jl
    }
    function hu(e, t, n) {
        (e === q && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Su(e, 0),
        yu(e, Y, Jl, !1)),
        et(e, n),
        (!(K & 2) || e !== q) && (e === q && (!(K & 2) && (Kl |= n),
        Wl === 4 && yu(e, Y, Jl, !1)),
        rd(e))
    }
    function gu(e, t, n) {
        if (K & 6)
            throw Error(i(327));
        var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || Qe(e, t)
          , a = r ? Au(e, t) : Ou(e, t, !0)
          , o = r;
        do {
            if (a === 0) {
                Vl && !r && yu(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate,
                o && !vu(n)) {
                    a = Ou(e, t, !1),
                    o = !1;
                    continue
                }
                if (a === 2) {
                    if (o = t,
                    e.errorRecoveryDisabledLanes & o)
                        var s = 0;
                    else
                        s = e.pendingLanes & -536870913,
                        s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
                    if (s !== 0) {
                        t = s;
                        a: {
                            var c = e;
                            a = Xl;
                            var l = c.current.memoizedState.isDehydrated;
                            if (l && (Su(c, s).flags |= 256),
                            s = Ou(c, s, !1),
                            s !== 2) {
                                if (Hl && !l) {
                                    c.errorRecoveryDisabledLanes |= o,
                                    Kl |= o,
                                    a = 4;
                                    break a
                                }
                                o = Zl,
                                Zl = a,
                                o !== null && (Zl === null ? Zl = o : Zl.push.apply(Zl, o))
                            }
                            a = s
                        }
                        if (o = !1,
                        a !== 2)
                            continue
                    }
                }
                if (a === 1) {
                    Su(e, 0),
                    yu(e, t, 0, !0);
                    break
                }
                a: {
                    switch (r = e,
                    o = a,
                    o) {
                    case 0:
                    case 1:
                        throw Error(i(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        yu(r, t, Jl, !Bl);
                        break a;
                    case 2:
                        Zl = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(i(329))
                    }
                    if ((t & 62914560) === t && (a = $l + 300 - je(),
                    10 < a)) {
                        if (yu(r, t, Jl, !Bl),
                        Ze(r, 0, !0) !== 0)
                            break a;
                        su = t,
                        r.timeoutHandle = Kd(_u.bind(null, r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, o, `Throttled`, -0, 0), a);
                        break a
                    }
                    _u(r, n, Zl, nu, Ql, t, Jl, Kl, Yl, Bl, o, null, -0, 0)
                }
            }
            break
        } while (1);
        rd(e)
    }
    function _u(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
        if (e.timeoutHandle = -1,
        d = t.subtreeFlags,
        d & 8192 || (d & 16785408) == 16785408) {
            d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: nn
            },
            jl(t, a, d);
            var m = (a & 62914560) === a ? $l - je() : (a & 4194048) === a ? eu - je() : 0;
            if (m = qf(d, m),
            m !== null) {
                su = a,
                e.cancelPendingCommit = m(Lu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)),
                yu(e, a, o, !l);
                return
            }
        }
        Lu(e, t, a, n, r, i, o, s, c)
    }
    function vu(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , a = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Tr(a(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function yu(e, t, n, r) {
        t &= ~ql,
        t &= ~Kl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        r && (e.warmLanes |= t),
        r = e.expirationTimes;
        for (var i = t; 0 < i; ) {
            var a = 31 - Ue(i)
              , o = 1 << a;
            r[a] = -1,
            i &= ~o
        }
        n !== 0 && nt(e, n, t)
    }
    function bu() {
        return K & 6 ? !0 : (id(0, !1),
        !1)
    }
    function xu() {
        if (J !== null) {
            if (X === 0)
                var e = J.return;
            else
                e = J,
                Ji = qi = null,
                ko(e),
                Na = null,
                Pa = 0,
                e = J;
            for (; e !== null; )
                Bc(e.alternate, e),
                e = e.return;
            J = null
        }
    }
    function Su(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
        qd(n)),
        n = e.cancelPendingCommit,
        n !== null && (e.cancelPendingCommit = null,
        n()),
        su = 0,
        xu(),
        q = e,
        J = n = pi(e.current, null),
        Y = t,
        X = 0,
        zl = null,
        Bl = !1,
        Vl = Qe(e, t),
        Hl = !1,
        Yl = Jl = ql = Kl = Gl = Wl = 0,
        Zl = Xl = null,
        Ql = !1,
        t & 8 && (t |= t & 32);
        var r = e.entangledLanes;
        if (r !== 0)
            for (e = e.entanglements,
            r &= t; 0 < r; ) {
                var i = 31 - Ue(r)
                  , a = 1 << i;
                t |= e[i],
                r &= ~a
            }
        return Ul = t,
        ri(),
        n
    }
    function Cu(e, t) {
        V = null,
        O.H = Rs,
        t === Ca || t === Ta ? (t = ja(),
        X = 3) : t === wa ? (t = ja(),
        X = 4) : X = t === nc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1,
        zl = t,
        J === null && (Wl = 1,
        Xs(e, xi(t, e.current)))
    }
    function wu() {
        var e = no.current;
        return e === null ? !0 : (Y & 4194048) === Y ? ro === null : (Y & 62914560) === Y || Y & 536870912 ? e === ro : !1
    }
    function Tu() {
        var e = O.H;
        return O.H = Rs,
        e === null ? Rs : e
    }
    function Eu() {
        var e = O.A;
        return O.A = Ll,
        e
    }
    function Du() {
        Wl = 4,
        Bl || (Y & 4194048) !== Y && no.current !== null || (Vl = !0),
        !(Gl & 134217727) && !(Kl & 134217727) || q === null || yu(q, Y, Jl, !1)
    }
    function Ou(e, t, n) {
        var r = K;
        K |= 2;
        var i = Tu()
          , a = Eu();
        (q !== e || Y !== t) && (nu = null,
        Su(e, t)),
        t = !1;
        var o = Wl;
        a: do
            try {
                if (X !== 0 && J !== null) {
                    var s = J
                      , c = zl;
                    switch (X) {
                    case 8:
                        xu(),
                        o = 6;
                        break a;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        no.current === null && (t = !0);
                        var l = X;
                        if (X = 0,
                        zl = null,
                        Pu(e, s, c, l),
                        n && Vl) {
                            o = 0;
                            break a
                        }
                        break;
                    default:
                        l = X,
                        X = 0,
                        zl = null,
                        Pu(e, s, c, l)
                    }
                }
                ku(),
                o = Wl;
                break
            } catch (t) {
                Cu(e, t)
            }
        while (1);
        return t && e.shellSuspendCounter++,
        Ji = qi = null,
        K = r,
        O.H = i,
        O.A = a,
        J === null && (q = null,
        Y = 0,
        ri()),
        o
    }
    function ku() {
        for (; J !== null; )
            Mu(J)
    }
    function Au(e, t) {
        var n = K;
        K |= 2;
        var r = Tu()
          , a = Eu();
        q !== e || Y !== t ? (nu = null,
        tu = je() + 500,
        Su(e, t)) : Vl = Qe(e, t);
        a: do
            try {
                if (X !== 0 && J !== null) {
                    t = J;
                    var o = zl;
                    b: switch (X) {
                    case 1:
                        X = 0,
                        zl = null,
                        Pu(e, t, o, 1);
                        break;
                    case 2:
                    case 9:
                        if (Da(o)) {
                            X = 0,
                            zl = null,
                            Nu(t);
                            break
                        }
                        t = function() {
                            X !== 2 && X !== 9 || q !== e || (X = 7),
                            rd(e)
                        }
                        ,
                        o.then(t, t);
                        break a;
                    case 3:
                        X = 7;
                        break a;
                    case 4:
                        X = 5;
                        break a;
                    case 7:
                        Da(o) ? (X = 0,
                        zl = null,
                        Nu(t)) : (X = 0,
                        zl = null,
                        Pu(e, t, o, 7));
                        break;
                    case 5:
                        var s = null;
                        switch (J.tag) {
                        case 26:
                            s = J.memoizedState;
                        case 5:
                        case 27:
                            var c = J;
                            if (s ? Wf(s) : c.stateNode.complete) {
                                X = 0,
                                zl = null;
                                var l = c.sibling;
                                if (l !== null)
                                    J = l;
                                else {
                                    var u = c.return;
                                    u === null ? J = null : (J = u,
                                    Fu(u))
                                }
                                break b
                            }
                        }
                        X = 0,
                        zl = null,
                        Pu(e, t, o, 5);
                        break;
                    case 6:
                        X = 0,
                        zl = null,
                        Pu(e, t, o, 6);
                        break;
                    case 8:
                        xu(),
                        Wl = 6;
                        break a;
                    default:
                        throw Error(i(462))
                    }
                }
                ju();
                break
            } catch (t) {
                Cu(e, t)
            }
        while (1);
        return Ji = qi = null,
        O.H = r,
        O.A = a,
        K = n,
        J === null ? (q = null,
        Y = 0,
        ri(),
        Wl) : 0
    }
    function ju() {
        for (; J !== null && !ke(); )
            Mu(J)
    }
    function Mu(e) {
        var t = Mc(e.alternate, e, Ul);
        e.memoizedProps = e.pendingProps,
        t === null ? Fu(e) : J = t
    }
    function Nu(e) {
        var t = e
          , n = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = gc(n, t, t.pendingProps, t.type, void 0, Y);
            break;
        case 11:
            t = gc(n, t, t.pendingProps, t.type.render, t.ref, Y);
            break;
        case 5:
            ko(t);
        default:
            Bc(n, t),
            t = J = mi(t, Ul),
            t = Mc(n, t, Ul)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? Fu(e) : J = t
    }
    function Pu(e, t, n, r) {
        Ji = qi = null,
        ko(t),
        Na = null,
        Pa = 0;
        var i = t.return;
        try {
            if (tc(e, i, t, n, Y)) {
                Wl = 1,
                Xs(e, xi(n, e.current)),
                J = null;
                return
            }
        } catch (t) {
            if (i !== null)
                throw J = i,
                t;
            Wl = 1,
            Xs(e, xi(n, e.current)),
            J = null;
            return
        }
        t.flags & 32768 ? (R || r === 1 ? e = !0 : Vl || Y & 536870912 ? e = !1 : (Bl = e = !0,
        (r === 2 || r === 9 || r === 3 || r === 6) && (r = no.current,
        r !== null && r.tag === 13 && (r.flags |= 16384))),
        Iu(t, e)) : Fu(t)
    }
    function Fu(e) {
        var t = e;
        do {
            if (t.flags & 32768) {
                Iu(t, Bl);
                return
            }
            e = t.return;
            var n = Rc(t.alternate, t, Ul);
            if (n !== null) {
                J = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                J = t;
                return
            }
            J = t = e
        } while (t !== null);
        Wl === 0 && (Wl = 5)
    }
    function Iu(e, t) {
        do {
            var n = zc(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                J = n;
                return
            }
            if (n = e.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                J = e;
                return
            }
            J = e = n
        } while (e !== null);
        Wl = 6,
        J = null
    }
    function Lu(e, t, n, r, a, o, s, c, l) {
        e.cancelPendingCommit = null;
        do
            Hu();
        while (iu !== 0);
        if (K & 6)
            throw Error(i(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(i(177));
            if (o = t.lanes | t.childLanes,
            o |= ni,
            tt(e, n, o, s, c, l),
            e === q && (J = q = null,
            Y = 0),
            ou = t,
            au = e,
            su = n,
            cu = o,
            lu = a,
            uu = r,
            t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            Xu(Fe, function() {
                return Uu(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            r = (t.flags & 13878) != 0,
            t.subtreeFlags & 13878 || r) {
                r = O.T,
                O.T = null,
                a = k.p,
                k.p = 2,
                s = K,
                K |= 4;
                try {
                    il(e, t, n)
                } finally {
                    K = s,
                    k.p = a,
                    O.T = r
                }
            }
            iu = 1,
            Ru(),
            zu(),
            Bu()
        }
    }
    function Ru() {
        if (iu === 1) {
            iu = 0;
            var e = au
              , t = ou
              , n = (t.flags & 13878) != 0;
            if (t.subtreeFlags & 13878 || n) {
                n = O.T,
                O.T = null;
                var r = k.p;
                k.p = 2;
                var i = K;
                K |= 4;
                try {
                    _l(t, e);
                    var a = zd
                      , o = Ar(e.containerInfo)
                      , s = a.focusedElem
                      , c = a.selectionRange;
                    if (o !== s && s && s.ownerDocument && kr(s.ownerDocument.documentElement, s)) {
                        if (c !== null && jr(s)) {
                            var l = c.start
                              , u = c.end;
                            if (u === void 0 && (u = l),
                            `selectionStart`in s)
                                s.selectionStart = l,
                                s.selectionEnd = Math.min(u, s.value.length);
                            else {
                                var d = s.ownerDocument || document
                                  , f = d && d.defaultView || window;
                                if (f.getSelection) {
                                    var p = f.getSelection()
                                      , m = s.textContent.length
                                      , h = Math.min(c.start, m)
                                      , g = c.end === void 0 ? h : Math.min(c.end, m);
                                    !p.extend && h > g && (o = g,
                                    g = h,
                                    h = o);
                                    var _ = Or(s, h)
                                      , v = Or(s, g);
                                    if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                                        var y = d.createRange();
                                        y.setStart(_.node, _.offset),
                                        p.removeAllRanges(),
                                        h > g ? (p.addRange(y),
                                        p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset),
                                        p.addRange(y))
                                    }
                                }
                            }
                        }
                        for (d = [],
                        p = s; p = p.parentNode; )
                            p.nodeType === 1 && d.push({
                                element: p,
                                left: p.scrollLeft,
                                top: p.scrollTop
                            });
                        for (typeof s.focus == `function` && s.focus(),
                        s = 0; s < d.length; s++) {
                            var b = d[s];
                            b.element.scrollLeft = b.left,
                            b.element.scrollTop = b.top
                        }
                    }
                    sp = !!Rd,
                    zd = Rd = null
                } finally {
                    K = i,
                    k.p = r,
                    O.T = n
                }
            }
            e.current = t,
            iu = 2
        }
    }
    function zu() {
        if (iu === 2) {
            iu = 0;
            var e = au
              , t = ou
              , n = (t.flags & 8772) != 0;
            if (t.subtreeFlags & 8772 || n) {
                n = O.T,
                O.T = null;
                var r = k.p;
                k.p = 2;
                var i = K;
                K |= 4;
                try {
                    al(e, t.alternate, t)
                } finally {
                    K = i,
                    k.p = r,
                    O.T = n
                }
            }
            iu = 3
        }
    }
    function Bu() {
        if (iu === 4 || iu === 3) {
            iu = 0,
            Ae();
            var e = au
              , t = ou
              , n = su
              , r = uu;
            t.subtreeFlags & 10256 || t.flags & 10256 ? iu = 5 : (iu = 0,
            ou = au = null,
            Vu(e, e.pendingLanes));
            var i = e.pendingLanes;
            if (i === 0 && (ru = null),
            ot(n),
            t = t.stateNode,
            Ve && typeof Ve.onCommitFiberRoot == `function`)
                try {
                    Ve.onCommitFiberRoot(Be, t, void 0, (t.current.flags & 128) == 128)
                } catch {}
            if (r !== null) {
                t = O.T,
                i = k.p,
                k.p = 2,
                O.T = null;
                try {
                    for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
                        var s = r[o];
                        a(s.value, {
                            componentStack: s.stack
                        })
                    }
                } finally {
                    O.T = t,
                    k.p = i
                }
            }
            su & 3 && Hu(),
            rd(e),
            i = e.pendingLanes,
            n & 261930 && i & 42 ? e === fu ? du++ : (du = 0,
            fu = e) : du = 0,
            id(0, !1)
        }
    }
    function Vu(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        ua(t)))
    }
    function Hu() {
        return Ru(),
        zu(),
        Bu(),
        Uu()
    }
    function Uu() {
        if (iu !== 5)
            return !1;
        var e = au
          , t = cu;
        cu = 0;
        var n = ot(su)
          , r = O.T
          , a = k.p;
        try {
            k.p = 32 > n ? 32 : n,
            O.T = null,
            n = lu,
            lu = null;
            var o = au
              , s = su;
            if (iu = 0,
            ou = au = null,
            su = 0,
            K & 6)
                throw Error(i(331));
            var c = K;
            if (K |= 4,
            Pl(o.current),
            El(o, o.current, s, n),
            K = c,
            id(0, !1),
            Ve && typeof Ve.onPostCommitFiberRoot == `function`)
                try {
                    Ve.onPostCommitFiberRoot(Be, o)
                } catch {}
            return !0
        } finally {
            k.p = a,
            O.T = r,
            Vu(e, t)
        }
    }
    function Wu(e, t, n) {
        t = xi(n, t),
        t = Qs(e.stateNode, t, 2),
        e = Ua(e, t, 2),
        e !== null && (et(e, 2),
        rd(e))
    }
    function Z(e, t, n) {
        if (e.tag === 3)
            Wu(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Wu(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var r = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (ru === null || !ru.has(r))) {
                        e = xi(n, e),
                        n = $s(2),
                        r = Ua(t, n, 2),
                        r !== null && (ec(n, r, t, e),
                        et(r, 2),
                        rd(r));
                        break
                    }
                }
                t = t.return
            }
    }
    function Gu(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new Rl;
            var i = new Set;
            r.set(t, i)
        } else
            i = r.get(t),
            i === void 0 && (i = new Set,
            r.set(t, i));
        i.has(n) || (Hl = !0,
        i.add(n),
        e = Ku.bind(null, e, t, n),
        t.then(e, e))
    }
    function Ku(e, t, n) {
        var r = e.pingCache;
        r !== null && r.delete(t),
        e.pingedLanes |= e.suspendedLanes & n,
        e.warmLanes &= ~n,
        q === e && (Y & n) === n && (Wl === 4 || Wl === 3 && (Y & 62914560) === Y && 300 > je() - $l ? !(K & 2) && Su(e, 0) : ql |= n,
        Yl === Y && (Yl = 0)),
        rd(e)
    }
    function qu(e, t) {
        t === 0 && (t = N()),
        e = oi(e, t),
        e !== null && (et(e, t),
        rd(e))
    }
    function Ju(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        qu(e, n)
    }
    function Yu(e, t) {
        var n = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var r = e.stateNode
              , a = e.memoizedState;
            a !== null && (n = a.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        case 22:
            r = e.stateNode._retryCache;
            break;
        default:
            throw Error(i(314))
        }
        r !== null && r.delete(t),
        qu(e, n)
    }
    function Xu(e, t) {
        return De(e, t)
    }
    var Zu = null
      , Qu = null
      , $u = !1
      , ed = !1
      , td = !1
      , nd = 0;
    function rd(e) {
        e !== Qu && e.next === null && (Qu === null ? Zu = Qu = e : Qu = Qu.next = e),
        ed = !0,
        $u || ($u = !0,
        ud())
    }
    function id(e, t) {
        if (!td && ed) {
            td = !0;
            do
                for (var n = !1, r = Zu; r !== null; ) {
                    if (!t)
                        if (e !== 0) {
                            var i = r.pendingLanes;
                            if (i === 0)
                                var a = 0;
                            else {
                                var o = r.suspendedLanes
                                  , s = r.pingedLanes;
                                a = (1 << 31 - Ue(42 | e) + 1) - 1,
                                a &= i & ~(o & ~s),
                                a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0
                            }
                            a !== 0 && (n = !0,
                            ld(r, a))
                        } else
                            a = Y,
                            a = Ze(r, r === q ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1),
                            !(a & 3) || Qe(r, a) || (n = !0,
                            ld(r, a));
                    r = r.next
                }
            while (n);
            td = !1
        }
    }
    function ad() {
        od()
    }
    function od() {
        ed = $u = !1;
        var e = 0;
        nd !== 0 && Gd() && (e = nd);
        for (var t = je(), n = null, r = Zu; r !== null; ) {
            var i = r.next
              , a = sd(r, t);
            a === 0 ? (r.next = null,
            n === null ? Zu = i : n.next = i,
            i === null && (Qu = n)) : (n = r,
            (e !== 0 || a & 3) && (ed = !0)),
            r = i
        }
        iu !== 0 && iu !== 5 || id(e, !1),
        nd !== 0 && (nd = 0)
    }
    function sd(e, t) {
        for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a; ) {
            var o = 31 - Ue(a)
              , s = 1 << o
              , c = i[o];
            c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = $e(s, t)) : c <= t && (e.expiredLanes |= s),
            a &= ~s
        }
        if (t = q,
        n = Y,
        n = Ze(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r = e.callbackNode,
        n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null)
            return r !== null && r !== null && Oe(r),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if (!(n & 3) || Qe(e, n)) {
            if (t = n & -n,
            t === e.callbackPriority)
                return t;
            switch (r !== null && Oe(r),
            ot(n)) {
            case 2:
            case 8:
                n = Pe;
                break;
            case 32:
                n = Fe;
                break;
            case 268435456:
                n = Le;
                break;
            default:
                n = Fe
            }
            return r = cd.bind(null, e),
            n = De(n, r),
            e.callbackPriority = t,
            e.callbackNode = n,
            t
        }
        return r !== null && r !== null && Oe(r),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function cd(e, t) {
        if (iu !== 0 && iu !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var n = e.callbackNode;
        if (Hu() && e.callbackNode !== n)
            return null;
        var r = Y;
        return r = Ze(e, e === q ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        r === 0 ? null : (gu(e, r, t),
        sd(e, je()),
        e.callbackNode != null && e.callbackNode === n ? cd.bind(null, e) : null)
    }
    function ld(e, t) {
        if (Hu())
            return null;
        gu(e, t, !0)
    }
    function ud() {
        Yd(function() {
            K & 6 ? De(Ne, ad) : od()
        })
    }
    function dd() {
        if (nd === 0) {
            var e = pa;
            e === 0 && (e = qe,
            qe <<= 1,
            !(qe & 261888) && (qe = 256)),
            nd = e
        }
        return nd
    }
    function fd(e) {
        return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : tn(`` + e)
    }
    function pd(e, t) {
        var n = t.ownerDocument.createElement(`input`);
        return n.name = t.name,
        n.value = t.value,
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        e = new FormData(e),
        n.parentNode.removeChild(n),
        e
    }
    function md(e, t, n, r, i) {
        if (t === `submit` && n && n.stateNode === i) {
            var a = fd((i[dt] || null).action)
              , o = r.submitter;
            o && (t = (t = o[dt] || null) ? fd(t.formAction) : o.getAttribute(`formAction`),
            t !== null && (a = t,
            o = null));
            var s = new wn(`action`,`action`,null,r,i);
            e.push({
                event: s,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (r.defaultPrevented) {
                            if (nd !== 0) {
                                var e = o ? pd(i, o) : new FormData(i);
                                ws(n, {
                                    pending: !0,
                                    data: e,
                                    method: i.method,
                                    action: a
                                }, null, e)
                            }
                        } else
                            typeof a == `function` && (s.preventDefault(),
                            e = o ? pd(i, o) : new FormData(i),
                            ws(n, {
                                pending: !0,
                                data: e,
                                method: i.method,
                                action: a
                            }, a, e))
                    },
                    currentTarget: i
                }]
            })
        }
    }
    for (var hd = 0; hd < Zr.length; hd++) {
        var gd = Zr[hd];
        Qr(gd.toLowerCase(), `on` + (gd[0].toUpperCase() + gd.slice(1)))
    }
    Qr(Ur, `onAnimationEnd`),
    Qr(Wr, `onAnimationIteration`),
    Qr(Gr, `onAnimationStart`),
    Qr(`dblclick`, `onDoubleClick`),
    Qr(`focusin`, `onFocus`),
    Qr(`focusout`, `onBlur`),
    Qr(Kr, `onTransitionRun`),
    Qr(qr, `onTransitionStart`),
    Qr(Jr, `onTransitionCancel`),
    Qr(Yr, `onTransitionEnd`),
    Et(`onMouseEnter`, [`mouseout`, `mouseover`]),
    Et(`onMouseLeave`, [`mouseout`, `mouseover`]),
    Et(`onPointerEnter`, [`pointerout`, `pointerover`]),
    Et(`onPointerLeave`, [`pointerout`, `pointerover`]),
    F(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
    F(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),
    F(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
    F(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
    F(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)),
    F(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
    var _d = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `)
      , vd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));
    function yd(e, t) {
        t = (t & 4) != 0;
        for (var n = 0; n < e.length; n++) {
            var r = e[n]
              , i = r.event;
            r = r.listeners;
            a: {
                var a = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var s = r[o]
                          , c = s.instance
                          , l = s.currentTarget;
                        if (s = s.listener,
                        c !== a && i.isPropagationStopped())
                            break a;
                        a = s,
                        i.currentTarget = l;
                        try {
                            a(i)
                        } catch (e) {
                            $r(e)
                        }
                        i.currentTarget = null,
                        a = c
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (s = r[o],
                        c = s.instance,
                        l = s.currentTarget,
                        s = s.listener,
                        c !== a && i.isPropagationStopped())
                            break a;
                        a = s,
                        i.currentTarget = l;
                        try {
                            a(i)
                        } catch (e) {
                            $r(e)
                        }
                        i.currentTarget = null,
                        a = c
                    }
            }
        }
    }
    function Q(e, t) {
        var n = t[pt];
        n === void 0 && (n = t[pt] = new Set);
        var r = e + `__bubble`;
        n.has(r) || (Cd(t, e, 2, !1),
        n.add(r))
    }
    function bd(e, t, n) {
        var r = 0;
        t && (r |= 4),
        Cd(n, e, r, t)
    }
    var xd = `_reactListening` + Math.random().toString(36).slice(2);
    function Sd(e) {
        if (!e[xd]) {
            e[xd] = !0,
            wt.forEach(function(t) {
                t !== `selectionchange` && (vd.has(t) || bd(t, !1, e),
                bd(t, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[xd] || (t[xd] = !0,
            bd(`selectionchange`, !1, t))
        }
    }
    function Cd(e, t, n, r) {
        switch (mp(t)) {
        case 2:
            var i = cp;
            break;
        case 8:
            i = lp;
            break;
        default:
            i = up
        }
        n = i.bind(null, t, n, e),
        i = void 0,
        !pn || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = !0),
        r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, {
            passive: i
        })
    }
    function wd(e, t, n, r, i) {
        var a = r;
        if (!(t & 1) && !(t & 2) && r !== null)
            a: for (; ; ) {
                if (r === null)
                    return;
                var s = r.tag;
                if (s === 3 || s === 4) {
                    var c = r.stateNode.containerInfo;
                    if (c === i)
                        break;
                    if (s === 4)
                        for (s = r.return; s !== null; ) {
                            var l = s.tag;
                            if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                                return;
                            s = s.return
                        }
                    for (; c !== null; ) {
                        if (s = yt(c),
                        s === null)
                            return;
                        if (l = s.tag,
                        l === 5 || l === 6 || l === 26 || l === 27) {
                            r = a = s;
                            continue a
                        }
                        c = c.parentNode
                    }
                }
                r = r.return
            }
        un(function() {
            var r = a
              , i = an(n)
              , s = [];
            a: {
                var c = Xr.get(e);
                if (c !== void 0) {
                    var l = wn
                      , u = e;
                    switch (e) {
                    case `keypress`:
                        if (yn(n) === 0)
                            break a;
                    case `keydown`:
                    case `keyup`:
                        l = Hn;
                        break;
                    case `focusin`:
                        u = `focus`,
                        l = Nn;
                        break;
                    case `focusout`:
                        u = `blur`,
                        l = Nn;
                        break;
                    case `beforeblur`:
                    case `afterblur`:
                        l = Nn;
                        break;
                    case `click`:
                        if (n.button === 2)
                            break a;
                    case `auxclick`:
                    case `dblclick`:
                    case `mousedown`:
                    case `mousemove`:
                    case `mouseup`:
                    case `mouseout`:
                    case `mouseover`:
                    case `contextmenu`:
                        l = jn;
                        break;
                    case `drag`:
                    case `dragend`:
                    case `dragenter`:
                    case `dragexit`:
                    case `dragleave`:
                    case `dragover`:
                    case `dragstart`:
                    case `drop`:
                        l = Mn;
                        break;
                    case `touchcancel`:
                    case `touchend`:
                    case `touchmove`:
                    case `touchstart`:
                        l = Wn;
                        break;
                    case Ur:
                    case Wr:
                    case Gr:
                        l = Pn;
                        break;
                    case Yr:
                        l = Gn;
                        break;
                    case `scroll`:
                    case `scrollend`:
                        l = En;
                        break;
                    case `wheel`:
                        l = Kn;
                        break;
                    case `copy`:
                    case `cut`:
                    case `paste`:
                        l = Fn;
                        break;
                    case `gotpointercapture`:
                    case `lostpointercapture`:
                    case `pointercancel`:
                    case `pointerdown`:
                    case `pointermove`:
                    case `pointerout`:
                    case `pointerover`:
                    case `pointerup`:
                        l = Un;
                        break;
                    case `toggle`:
                    case `beforetoggle`:
                        l = qn
                    }
                    var d = (t & 4) != 0
                      , f = !d && (e === `scroll` || e === `scrollend`)
                      , p = d ? c === null ? null : c + `Capture` : c;
                    d = [];
                    for (var m = r, h; m !== null; ) {
                        var g = m;
                        if (h = g.stateNode,
                        g = g.tag,
                        g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = dn(m, p),
                        g != null && d.push(Td(m, g, h))),
                        f)
                            break;
                        m = m.return
                    }
                    0 < d.length && (c = new l(c,u,null,n,i),
                    s.push({
                        event: c,
                        listeners: d
                    }))
                }
            }
            if (!(t & 7)) {
                a: {
                    if (c = e === `mouseover` || e === `pointerover`,
                    l = e === `mouseout` || e === `pointerout`,
                    c && n !== rn && (u = n.relatedTarget || n.fromElement) && (yt(u) || u[ft]))
                        break a;
                    if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window,
                    l ? (u = n.relatedTarget || n.toElement,
                    l = r,
                    u = u ? yt(u) : null,
                    u !== null && (f = o(u),
                    d = u.tag,
                    u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null,
                    u = r),
                    l !== u)) {
                        if (d = jn,
                        g = `onMouseLeave`,
                        p = `onMouseEnter`,
                        m = `mouse`,
                        (e === `pointerout` || e === `pointerover`) && (d = Un,
                        g = `onPointerLeave`,
                        p = `onPointerEnter`,
                        m = `pointer`),
                        f = l == null ? c : xt(l),
                        h = u == null ? c : xt(u),
                        c = new d(g,m + `leave`,l,n,i),
                        c.target = f,
                        c.relatedTarget = h,
                        g = null,
                        yt(i) === r && (d = new d(p,m + `enter`,u,n,i),
                        d.target = h,
                        d.relatedTarget = f,
                        g = d),
                        f = g,
                        l && u)
                            b: {
                                for (d = Dd,
                                p = l,
                                m = u,
                                h = 0,
                                g = p; g; g = d(g))
                                    h++;
                                g = 0;
                                for (var _ = m; _; _ = d(_))
                                    g++;
                                for (; 0 < h - g; )
                                    p = d(p),
                                    h--;
                                for (; 0 < g - h; )
                                    m = d(m),
                                    g--;
                                for (; h--; ) {
                                    if (p === m || m !== null && p === m.alternate) {
                                        d = p;
                                        break b
                                    }
                                    p = d(p),
                                    m = d(m)
                                }
                                d = null
                            }
                        else
                            d = null;
                        l !== null && Od(s, c, l, d, !1),
                        u !== null && f !== null && Od(s, f, u, d, !0)
                    }
                }
                a: {
                    if (c = r ? xt(r) : window,
                    l = c.nodeName && c.nodeName.toLowerCase(),
                    l === `select` || l === `input` && c.type === `file`)
                        var v = pr;
                    else if (sr(c))
                        if (mr)
                            v = Cr;
                        else {
                            v = xr;
                            var y = br
                        }
                    else
                        l = c.nodeName,
                        !l || l.toLowerCase() !== `input` || c.type !== `checkbox` && c.type !== `radio` ? r && Qt(r.elementType) && (v = pr) : v = Sr;
                    if (v &&= v(e, r)) {
                        cr(s, v, n, i);
                        break a
                    }
                    y && y(e, c, r),
                    e === `focusout` && r && c.type === `number` && r.memoizedProps.value != null && Wt(c, `number`, c.value)
                }
                switch (y = r ? xt(r) : window,
                e) {
                case `focusin`:
                    (sr(y) || y.contentEditable === `true`) && (Nr = y,
                    Pr = r,
                    Fr = null);
                    break;
                case `focusout`:
                    Fr = Pr = Nr = null;
                    break;
                case `mousedown`:
                    Ir = !0;
                    break;
                case `contextmenu`:
                case `mouseup`:
                case `dragend`:
                    Ir = !1,
                    Lr(s, n, i);
                    break;
                case `selectionchange`:
                    if (Mr)
                        break;
                case `keydown`:
                case `keyup`:
                    Lr(s, n, i)
                }
                var b;
                if (Yn)
                    b: {
                        switch (e) {
                        case `compositionstart`:
                            var x = `onCompositionStart`;
                            break b;
                        case `compositionend`:
                            x = `onCompositionEnd`;
                            break b;
                        case `compositionupdate`:
                            x = `onCompositionUpdate`;
                            break b
                        }
                        x = void 0
                    }
                else
                    rr ? tr(e, n) && (x = `onCompositionEnd`) : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
                x && (Qn && n.locale !== `ko` && (rr || x !== `onCompositionStart` ? x === `onCompositionEnd` && rr && (b = vn()) : (hn = i,
                gn = `value`in hn ? hn.value : hn.textContent,
                rr = !0)),
                y = Ed(r, x),
                0 < y.length && (x = new In(x,e,null,n,i),
                s.push({
                    event: x,
                    listeners: y
                }),
                b ? x.data = b : (b = nr(n),
                b !== null && (x.data = b)))),
                (b = Zn ? ir(e, n) : ar(e, n)) && (x = Ed(r, `onBeforeInput`),
                0 < x.length && (y = new In(`onBeforeInput`,`beforeinput`,null,n,i),
                s.push({
                    event: y,
                    listeners: x
                }),
                y.data = b)),
                md(s, e, r, n, i)
            }
            yd(s, t)
        })
    }
    function Td(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Ed(e, t) {
        for (var n = t + `Capture`, r = []; e !== null; ) {
            var i = e
              , a = i.stateNode;
            if (i = i.tag,
            i !== 5 && i !== 26 && i !== 27 || a === null || (i = dn(e, n),
            i != null && r.unshift(Td(e, i, a)),
            i = dn(e, t),
            i != null && r.push(Td(e, i, a))),
            e.tag === 3)
                return r;
            e = e.return
        }
        return []
    }
    function Dd(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Od(e, t, n, r, i) {
        for (var a = t._reactName, o = []; n !== null && n !== r; ) {
            var s = n
              , c = s.alternate
              , l = s.stateNode;
            if (s = s.tag,
            c !== null && c === r)
                break;
            s !== 5 && s !== 26 && s !== 27 || l === null || (c = l,
            i ? (l = dn(n, a),
            l != null && o.unshift(Td(n, l, c))) : i || (l = dn(n, a),
            l != null && o.push(Td(n, l, c)))),
            n = n.return
        }
        o.length !== 0 && e.push({
            event: t,
            listeners: o
        })
    }
    var kd = /\r\n?/g
      , Ad = /\u0000|\uFFFD/g;
    function jd(e) {
        return (typeof e == `string` ? e : `` + e).replace(kd, `
`).replace(Ad, ``)
    }
    function Md(e, t) {
        return t = jd(t),
        jd(e) === t
    }
    function $(e, t, n, r, a, o) {
        switch (n) {
        case `children`:
            typeof r == `string` ? t === `body` || t === `textarea` && r === `` || Jt(e, r) : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Jt(e, `` + r);
            break;
        case `className`:
            Mt(e, `class`, r);
            break;
        case `tabIndex`:
            Mt(e, `tabindex`, r);
            break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
            Mt(e, n, r);
            break;
        case `style`:
            Zt(e, r, o);
            break;
        case `data`:
            if (t !== `object`) {
                Mt(e, `data`, r);
                break
            }
        case `src`:
        case `href`:
            if (r === `` && (t !== `a` || n !== `href`)) {
                e.removeAttribute(n);
                break
            }
            if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
                e.removeAttribute(n);
                break
            }
            r = tn(`` + r),
            e.setAttribute(n, r);
            break;
        case `action`:
        case `formAction`:
            if (typeof r == `function`) {
                e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
                break
            } else
                typeof o == `function` && (n === `formAction` ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                $(e, t, `formEncType`, a.formEncType, a, null),
                $(e, t, `formMethod`, a.formMethod, a, null),
                $(e, t, `formTarget`, a.formTarget, a, null)) : ($(e, t, `encType`, a.encType, a, null),
                $(e, t, `method`, a.method, a, null),
                $(e, t, `target`, a.target, a, null)));
            if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
                e.removeAttribute(n);
                break
            }
            r = tn(`` + r),
            e.setAttribute(n, r);
            break;
        case `onClick`:
            r != null && (e.onclick = nn);
            break;
        case `onScroll`:
            r != null && Q(`scroll`, e);
            break;
        case `onScrollEnd`:
            r != null && Q(`scrollend`, e);
            break;
        case `dangerouslySetInnerHTML`:
            if (r != null) {
                if (typeof r != `object` || !(`__html`in r))
                    throw Error(i(61));
                if (n = r.__html,
                n != null) {
                    if (a.children != null)
                        throw Error(i(60));
                    e.innerHTML = n
                }
            }
            break;
        case `multiple`:
            e.multiple = r && typeof r != `function` && typeof r != `symbol`;
            break;
        case `muted`:
            e.muted = r && typeof r != `function` && typeof r != `symbol`;
            break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
            break;
        case `autoFocus`:
            break;
        case `xlinkHref`:
            if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
                e.removeAttribute(`xlink:href`);
                break
            }
            n = tn(`` + r),
            e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
            break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
            r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, `` + r) : e.removeAttribute(n);
            break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
            r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
            break;
        case `capture`:
        case `download`:
            !0 === r ? e.setAttribute(n, ``) : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, r) : e.removeAttribute(n);
            break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
            r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
            break;
        case `rowSpan`:
        case `start`:
            r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
            break;
        case `popover`:
            Q(`beforetoggle`, e),
            Q(`toggle`, e),
            jt(e, `popover`, r);
            break;
        case `xlinkActuate`:
            Nt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
            break;
        case `xlinkArcrole`:
            Nt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
            break;
        case `xlinkRole`:
            Nt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
            break;
        case `xlinkShow`:
            Nt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
            break;
        case `xlinkTitle`:
            Nt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
            break;
        case `xlinkType`:
            Nt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
            break;
        case `xmlBase`:
            Nt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
            break;
        case `xmlLang`:
            Nt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
            break;
        case `xmlSpace`:
            Nt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
            break;
        case `is`:
            jt(e, `is`, r);
            break;
        case `innerText`:
        case `textContent`:
            break;
        default:
            (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) && (n = $t.get(n) || n,
            jt(e, n, r))
        }
    }
    function Nd(e, t, n, r, a, o) {
        switch (n) {
        case `style`:
            Zt(e, r, o);
            break;
        case `dangerouslySetInnerHTML`:
            if (r != null) {
                if (typeof r != `object` || !(`__html`in r))
                    throw Error(i(61));
                if (n = r.__html,
                n != null) {
                    if (a.children != null)
                        throw Error(i(60));
                    e.innerHTML = n
                }
            }
            break;
        case `children`:
            typeof r == `string` ? Jt(e, r) : (typeof r == `number` || typeof r == `bigint`) && Jt(e, `` + r);
            break;
        case `onScroll`:
            r != null && Q(`scroll`, e);
            break;
        case `onScrollEnd`:
            r != null && Q(`scrollend`, e);
            break;
        case `onClick`:
            r != null && (e.onclick = nn);
            break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
            break;
        case `innerText`:
        case `textContent`:
            break;
        default:
            if (!Tt.hasOwnProperty(n))
                a: {
                    if (n[0] === `o` && n[1] === `n` && (a = n.endsWith(`Capture`),
                    t = n.slice(2, a ? n.length - 7 : void 0),
                    o = e[dt] || null,
                    o = o == null ? null : o[n],
                    typeof o == `function` && e.removeEventListener(t, o, a),
                    typeof r == `function`)) {
                        typeof o != `function` && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                        e.addEventListener(t, r, a);
                        break a
                    }
                    n in e ? e[n] = r : !0 === r ? e.setAttribute(n, ``) : jt(e, n, r)
                }
        }
    }
    function Pd(e, t, n) {
        switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
            break;
        case `img`:
            Q(`error`, e),
            Q(`load`, e);
            var r = !1, a = !1, o;
            for (o in n)
                if (n.hasOwnProperty(o)) {
                    var s = n[o];
                    if (s != null)
                        switch (o) {
                        case `src`:
                            r = !0;
                            break;
                        case `srcSet`:
                            a = !0;
                            break;
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            throw Error(i(137, t));
                        default:
                            $(e, t, o, s, n, null)
                        }
                }
            a && $(e, t, `srcSet`, n.srcSet, n, null),
            r && $(e, t, `src`, n.src, n, null);
            return;
        case `input`:
            Q(`invalid`, e);
            var c = o = s = a = null
              , l = null
              , u = null;
            for (r in n)
                if (n.hasOwnProperty(r)) {
                    var d = n[r];
                    if (d != null)
                        switch (r) {
                        case `name`:
                            a = d;
                            break;
                        case `type`:
                            s = d;
                            break;
                        case `checked`:
                            l = d;
                            break;
                        case `defaultChecked`:
                            u = d;
                            break;
                        case `value`:
                            o = d;
                            break;
                        case `defaultValue`:
                            c = d;
                            break;
                        case `children`:
                        case `dangerouslySetInnerHTML`:
                            if (d != null)
                                throw Error(i(137, t));
                            break;
                        default:
                            $(e, t, r, d, n, null)
                        }
                }
            Ut(e, o, c, l, u, s, a, !1);
            return;
        case `select`:
            for (a in Q(`invalid`, e),
            r = s = o = null,
            n)
                if (n.hasOwnProperty(a) && (c = n[a],
                c != null))
                    switch (a) {
                    case `value`:
                        o = c;
                        break;
                    case `defaultValue`:
                        s = c;
                        break;
                    case `multiple`:
                        r = c;
                    default:
                        $(e, t, a, c, n, null)
                    }
            t = o,
            n = s,
            e.multiple = !!r,
            t == null ? n != null && Gt(e, !!r, n, !0) : Gt(e, !!r, t, !1);
            return;
        case `textarea`:
            for (s in Q(`invalid`, e),
            o = a = r = null,
            n)
                if (n.hasOwnProperty(s) && (c = n[s],
                c != null))
                    switch (s) {
                    case `value`:
                        r = c;
                        break;
                    case `defaultValue`:
                        a = c;
                        break;
                    case `children`:
                        o = c;
                        break;
                    case `dangerouslySetInnerHTML`:
                        if (c != null)
                            throw Error(i(91));
                        break;
                    default:
                        $(e, t, s, c, n, null)
                    }
            qt(e, r, a, o);
            return;
        case `option`:
            for (l in n)
                if (n.hasOwnProperty(l) && (r = n[l],
                r != null))
                    switch (l) {
                    case `selected`:
                        e.selected = r && typeof r != `function` && typeof r != `symbol`;
                        break;
                    default:
                        $(e, t, l, r, n, null)
                    }
            return;
        case `dialog`:
            Q(`beforetoggle`, e),
            Q(`toggle`, e),
            Q(`cancel`, e),
            Q(`close`, e);
            break;
        case `iframe`:
        case `object`:
            Q(`load`, e);
            break;
        case `video`:
        case `audio`:
            for (r = 0; r < _d.length; r++)
                Q(_d[r], e);
            break;
        case `image`:
            Q(`error`, e),
            Q(`load`, e);
            break;
        case `details`:
            Q(`toggle`, e);
            break;
        case `embed`:
        case `source`:
        case `link`:
            Q(`error`, e),
            Q(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
            for (u in n)
                if (n.hasOwnProperty(u) && (r = n[u],
                r != null))
                    switch (u) {
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                        throw Error(i(137, t));
                    default:
                        $(e, t, u, r, n, null)
                    }
            return;
        default:
            if (Qt(t)) {
                for (d in n)
                    n.hasOwnProperty(d) && (r = n[d],
                    r !== void 0 && Nd(e, t, d, r, n, void 0));
                return
            }
        }
        for (c in n)
            n.hasOwnProperty(c) && (r = n[c],
            r != null && $(e, t, c, r, n, null))
    }
    function Fd(e, t, n, r) {
        switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
            break;
        case `input`:
            var a = null
              , o = null
              , s = null
              , c = null
              , l = null
              , u = null
              , d = null;
            for (m in n) {
                var f = n[m];
                if (n.hasOwnProperty(m) && f != null)
                    switch (m) {
                    case `checked`:
                        break;
                    case `value`:
                        break;
                    case `defaultValue`:
                        l = f;
                    default:
                        r.hasOwnProperty(m) || $(e, t, m, null, r, f)
                    }
            }
            for (var p in r) {
                var m = r[p];
                if (f = n[p],
                r.hasOwnProperty(p) && (m != null || f != null))
                    switch (p) {
                    case `type`:
                        o = m;
                        break;
                    case `name`:
                        a = m;
                        break;
                    case `checked`:
                        u = m;
                        break;
                    case `defaultChecked`:
                        d = m;
                        break;
                    case `value`:
                        s = m;
                        break;
                    case `defaultValue`:
                        c = m;
                        break;
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                        if (m != null)
                            throw Error(i(137, t));
                        break;
                    default:
                        m !== f && $(e, t, p, m, r, f)
                    }
            }
            Ht(e, s, c, l, u, d, o, a);
            return;
        case `select`:
            for (o in m = s = c = p = null,
            n)
                if (l = n[o],
                n.hasOwnProperty(o) && l != null)
                    switch (o) {
                    case `value`:
                        break;
                    case `multiple`:
                        m = l;
                    default:
                        r.hasOwnProperty(o) || $(e, t, o, null, r, l)
                    }
            for (a in r)
                if (o = r[a],
                l = n[a],
                r.hasOwnProperty(a) && (o != null || l != null))
                    switch (a) {
                    case `value`:
                        p = o;
                        break;
                    case `defaultValue`:
                        c = o;
                        break;
                    case `multiple`:
                        s = o;
                    default:
                        o !== l && $(e, t, a, o, r, l)
                    }
            t = c,
            n = s,
            r = m,
            p == null ? !!r != !!n && (t == null ? Gt(e, !!n, n ? [] : ``, !1) : Gt(e, !!n, t, !0)) : Gt(e, !!n, p, !1);
            return;
        case `textarea`:
            for (c in m = p = null,
            n)
                if (a = n[c],
                n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
                    switch (c) {
                    case `value`:
                        break;
                    case `children`:
                        break;
                    default:
                        $(e, t, c, null, r, a)
                    }
            for (s in r)
                if (a = r[s],
                o = n[s],
                r.hasOwnProperty(s) && (a != null || o != null))
                    switch (s) {
                    case `value`:
                        p = a;
                        break;
                    case `defaultValue`:
                        m = a;
                        break;
                    case `children`:
                        break;
                    case `dangerouslySetInnerHTML`:
                        if (a != null)
                            throw Error(i(91));
                        break;
                    default:
                        a !== o && $(e, t, s, a, r, o)
                    }
            Kt(e, p, m);
            return;
        case `option`:
            for (var h in n)
                if (p = n[h],
                n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
                    switch (h) {
                    case `selected`:
                        e.selected = !1;
                        break;
                    default:
                        $(e, t, h, null, r, p)
                    }
            for (l in r)
                if (p = r[l],
                m = n[l],
                r.hasOwnProperty(l) && p !== m && (p != null || m != null))
                    switch (l) {
                    case `selected`:
                        e.selected = p && typeof p != `function` && typeof p != `symbol`;
                        break;
                    default:
                        $(e, t, l, p, r, m)
                    }
            return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
            for (var g in n)
                p = n[g],
                n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
            for (u in r)
                if (p = r[u],
                m = n[u],
                r.hasOwnProperty(u) && p !== m && (p != null || m != null))
                    switch (u) {
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                        if (p != null)
                            throw Error(i(137, t));
                        break;
                    default:
                        $(e, t, u, p, r, m)
                    }
            return;
        default:
            if (Qt(t)) {
                for (var _ in n)
                    p = n[_],
                    n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Nd(e, t, _, void 0, r, p);
                for (d in r)
                    p = r[d],
                    m = n[d],
                    !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Nd(e, t, d, p, r, m);
                return
            }
        }
        for (var v in n)
            p = n[v],
            n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
        for (f in r)
            p = r[f],
            m = n[f],
            !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m)
    }
    function Id(e) {
        switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
            return !0;
        default:
            return !1
        }
    }
    function Ld() {
        if (typeof performance.getEntriesByType == `function`) {
            for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
                var i = n[r]
                  , a = i.transferSize
                  , o = i.initiatorType
                  , s = i.duration;
                if (a && s && Id(o)) {
                    for (o = 0,
                    s = i.responseEnd,
                    r += 1; r < n.length; r++) {
                        var c = n[r]
                          , l = c.startTime;
                        if (l > s)
                            break;
                        var u = c.transferSize
                          , d = c.initiatorType;
                        u && Id(d) && (c = c.responseEnd,
                        o += u * (c < s ? 1 : (s - l) / (c - l)))
                    }
                    if (--r,
                    t += 8 * (a + o) / (i.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == `number`) ? e : 5
    }
    var Rd = null
      , zd = null;
    function Bd(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function Vd(e) {
        switch (e) {
        case `http://www.w3.org/2000/svg`:
            return 1;
        case `http://www.w3.org/1998/Math/MathML`:
            return 2;
        default:
            return 0
        }
    }
    function Hd(e, t) {
        if (e === 0)
            switch (t) {
            case `svg`:
                return 1;
            case `math`:
                return 2;
            default:
                return 0
            }
        return e === 1 && t === `foreignObject` ? 0 : e
    }
    function Ud(e, t) {
        return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Wd = null;
    function Gd() {
        var e = window.event;
        return e && e.type === `popstate` ? e === Wd ? !1 : (Wd = e,
        !0) : (Wd = null,
        !1)
    }
    var Kd = typeof setTimeout == `function` ? setTimeout : void 0
      , qd = typeof clearTimeout == `function` ? clearTimeout : void 0
      , Jd = typeof Promise == `function` ? Promise : void 0
      , Yd = typeof queueMicrotask == `function` ? queueMicrotask : Jd === void 0 ? Kd : function(e) {
        return Jd.resolve(null).then(e).catch(Xd)
    }
    ;
    function Xd(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Zd(e) {
        return e === `head`
    }
    function Qd(e, t) {
        var n = t
          , r = 0;
        do {
            var i = n.nextSibling;
            if (e.removeChild(n),
            i && i.nodeType === 8)
                if (n = i.data,
                n === `/$` || n === `/&`) {
                    if (r === 0) {
                        e.removeChild(i),
                        Np(t);
                        return
                    }
                    r--
                } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`)
                    r++;
                else if (n === `html`)
                    pf(e.ownerDocument.documentElement);
                else if (n === `head`) {
                    n = e.ownerDocument.head,
                    pf(n);
                    for (var a = n.firstChild; a; ) {
                        var o = a.nextSibling
                          , s = a.nodeName;
                        a[_t] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a),
                        a = o
                    }
                } else
                    n === `body` && pf(e.ownerDocument.body);
            n = i
        } while (n);
        Np(t)
    }
    function $d(e, t) {
        var n = e;
        e = 0;
        do {
            var r = n.nextSibling;
            if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display,
            n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``,
            n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue,
            n.nodeValue = ``) : n.nodeValue = n._stashedText || ``),
            r && r.nodeType === 8)
                if (n = r.data,
                n === `/$`) {
                    if (e === 0)
                        break;
                    e--
                } else
                    n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++;
            n = r
        } while (n)
    }
    function ef(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
            case `HTML`:
            case `HEAD`:
            case `BODY`:
                ef(n),
                vt(n);
                continue;
            case `SCRIPT`:
            case `STYLE`:
                continue;
            case `LINK`:
                if (n.rel.toLowerCase() === `stylesheet`)
                    continue
            }
            e.removeChild(n)
        }
    }
    function tf(e, t, n, r) {
        for (; e.nodeType === 1; ) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`))
                    break
            } else if (!r)
                if (t === `input` && e.type === `hidden`) {
                    var a = i.name == null ? null : `` + i.name;
                    if (i.type === `hidden` && e.getAttribute(`name`) === a)
                        return e
                } else
                    return e;
            else if (!e[_t])
                switch (t) {
                case `meta`:
                    if (!e.hasAttribute(`itemprop`))
                        break;
                    return e;
                case `link`:
                    if (a = e.getAttribute(`rel`),
                    a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title))
                        break;
                    return e;
                case `style`:
                    if (e.hasAttribute(`data-precedence`))
                        break;
                    return e;
                case `script`:
                    if (a = e.getAttribute(`src`),
                    (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`))
                        break;
                    return e;
                default:
                    return e
                }
            if (e = cf(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function nf(e, t, n) {
        if (t === ``)
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = cf(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function rf(e, t) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = cf(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function af(e) {
        return e.data === `$?` || e.data === `$~`
    }
    function of(e) {
        return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`
    }
    function sf(e, t) {
        var n = e.ownerDocument;
        if (e.data === `$~`)
            e._reactRetry = t;
        else if (e.data !== `$?` || n.readyState !== `loading`)
            t();
        else {
            var r = function() {
                t(),
                n.removeEventListener(`DOMContentLoaded`, r)
            };
            n.addEventListener(`DOMContentLoaded`, r),
            e._reactRetry = r
        }
    }
    function cf(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`)
                    break;
                if (t === `/$` || t === `/&`)
                    return null
            }
        }
        return e
    }
    var lf = null;
    function uf(e) {
        e = e.nextSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === `/$` || n === `/&`) {
                    if (t === 0)
                        return cf(e.nextSibling);
                    t--
                } else
                    n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function df(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n !== `/$` && n !== `/&` || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function ff(e, t, n) {
        switch (t = Bd(n),
        e) {
        case `html`:
            if (e = t.documentElement,
            !e)
                throw Error(i(452));
            return e;
        case `head`:
            if (e = t.head,
            !e)
                throw Error(i(453));
            return e;
        case `body`:
            if (e = t.body,
            !e)
                throw Error(i(454));
            return e;
        default:
            throw Error(i(451))
        }
    }
    function pf(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        vt(e)
    }
    var mf = new Map
      , hf = new Set;
    function gf(e) {
        return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var _f = k.d;
    k.d = {
        f: vf,
        r: yf,
        D: Sf,
        C: Cf,
        L: wf,
        m: Tf,
        X: Df,
        S: Ef,
        M: Of
    };
    function vf() {
        var e = _f.f()
          , t = bu();
        return e || t
    }
    function yf(e) {
        var t = bt(e);
        t !== null && t.tag === 5 && t.type === `form` ? Es(t) : _f.r(e)
    }
    var bf = typeof document > `u` ? null : document;
    function xf(e, t, n) {
        var r = bf;
        if (r && typeof t == `string` && t) {
            var i = Vt(t);
            i = `link[rel="` + e + `"][href="` + i + `"]`,
            typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
            hf.has(i) || (hf.add(i),
            e = {
                rel: e,
                crossOrigin: n,
                href: t
            },
            r.querySelector(i) === null && (t = r.createElement(`link`),
            Pd(t, `link`, e),
            Ct(t),
            r.head.appendChild(t)))
        }
    }
    function Sf(e) {
        _f.D(e),
        xf(`dns-prefetch`, e, null)
    }
    function Cf(e, t) {
        _f.C(e, t),
        xf(`preconnect`, e, t)
    }
    function wf(e, t, n) {
        _f.L(e, t, n);
        var r = bf;
        if (r && e && t) {
            var i = `link[rel="preload"][as="` + Vt(t) + `"]`;
            t === `image` && n && n.imageSrcSet ? (i += `[imagesrcset="` + Vt(n.imageSrcSet) + `"]`,
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Vt(n.imageSizes) + `"]`)) : i += `[href="` + Vt(e) + `"]`;
            var a = i;
            switch (t) {
            case `style`:
                a = Af(e);
                break;
            case `script`:
                a = Pf(e)
            }
            mf.has(a) || (e = m({
                rel: `preload`,
                href: t === `image` && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
            mf.set(a, e),
            r.querySelector(i) !== null || t === `style` && r.querySelector(jf(a)) || t === `script` && r.querySelector(Ff(a)) || (t = r.createElement(`link`),
            Pd(t, `link`, e),
            Ct(t),
            r.head.appendChild(t)))
        }
    }
    function Tf(e, t) {
        _f.m(e, t);
        var n = bf;
        if (n && e) {
            var r = t && typeof t.as == `string` ? t.as : `script`
              , i = `link[rel="modulepreload"][as="` + Vt(r) + `"][href="` + Vt(e) + `"]`
              , a = i;
            switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
                a = Pf(e)
            }
            if (!mf.has(a) && (e = m({
                rel: `modulepreload`,
                href: e
            }, t),
            mf.set(a, e),
            n.querySelector(i) === null)) {
                switch (r) {
                case `audioworklet`:
                case `paintworklet`:
                case `serviceworker`:
                case `sharedworker`:
                case `worker`:
                case `script`:
                    if (n.querySelector(Ff(a)))
                        return
                }
                r = n.createElement(`link`),
                Pd(r, `link`, e),
                Ct(r),
                n.head.appendChild(r)
            }
        }
    }
    function Ef(e, t, n) {
        _f.S(e, t, n);
        var r = bf;
        if (r && e) {
            var i = St(r).hoistableStyles
              , a = Af(e);
            t ||= `default`;
            var o = i.get(a);
            if (!o) {
                var s = {
                    loading: 0,
                    preload: null
                };
                if (o = r.querySelector(jf(a)))
                    s.loading = 5;
                else {
                    e = m({
                        rel: `stylesheet`,
                        href: e,
                        "data-precedence": t
                    }, n),
                    (n = mf.get(a)) && Rf(e, n);
                    var c = o = r.createElement(`link`);
                    Ct(c),
                    Pd(c, `link`, e),
                    c._p = new Promise(function(e, t) {
                        c.onload = e,
                        c.onerror = t
                    }
                    ),
                    c.addEventListener(`load`, function() {
                        s.loading |= 1
                    }),
                    c.addEventListener(`error`, function() {
                        s.loading |= 2
                    }),
                    s.loading |= 4,
                    Lf(o, t, r)
                }
                o = {
                    type: `stylesheet`,
                    instance: o,
                    count: 1,
                    state: s
                },
                i.set(a, o)
            }
        }
    }
    function Df(e, t) {
        _f.X(e, t);
        var n = bf;
        if (n && e) {
            var r = St(n).hoistableScripts
              , i = Pf(e)
              , a = r.get(i);
            a || (a = n.querySelector(Ff(i)),
            a || (e = m({
                src: e,
                async: !0
            }, t),
            (t = mf.get(i)) && zf(e, t),
            a = n.createElement(`script`),
            Ct(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
            a = {
                type: `script`,
                instance: a,
                count: 1,
                state: null
            },
            r.set(i, a))
        }
    }
    function Of(e, t) {
        _f.M(e, t);
        var n = bf;
        if (n && e) {
            var r = St(n).hoistableScripts
              , i = Pf(e)
              , a = r.get(i);
            a || (a = n.querySelector(Ff(i)),
            a || (e = m({
                src: e,
                async: !0,
                type: `module`
            }, t),
            (t = mf.get(i)) && zf(e, t),
            a = n.createElement(`script`),
            Ct(a),
            Pd(a, `link`, e),
            n.head.appendChild(a)),
            a = {
                type: `script`,
                instance: a,
                count: 1,
                state: null
            },
            r.set(i, a))
        }
    }
    function kf(e, t, n, r) {
        var a = (a = me.current) ? gf(a) : null;
        if (!a)
            throw Error(i(446));
        switch (e) {
        case `meta`:
        case `title`:
            return null;
        case `style`:
            return typeof n.precedence == `string` && typeof n.href == `string` ? (t = Af(n.href),
            n = St(a).hoistableStyles,
            r = n.get(t),
            r || (r = {
                type: `style`,
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, r)),
            r) : {
                type: `void`,
                instance: null,
                count: 0,
                state: null
            };
        case `link`:
            if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
                e = Af(n.href);
                var o = St(a).hoistableStyles
                  , s = o.get(e);
                if (s || (a = a.ownerDocument || a,
                s = {
                    type: `stylesheet`,
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                o.set(e, s),
                (o = a.querySelector(jf(e))) && !o._p && (s.instance = o,
                s.state.loading = 5),
                mf.has(e) || (n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                mf.set(e, n),
                o || Nf(a, e, n, s.state))),
                t && r === null)
                    throw Error(i(528, ``));
                return s
            }
            if (t && r !== null)
                throw Error(i(529, ``));
            return null;
        case `script`:
            return t = n.async,
            n = n.src,
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (t = Pf(n),
            n = St(a).hoistableScripts,
            r = n.get(t),
            r || (r = {
                type: `script`,
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, r)),
            r) : {
                type: `void`,
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(i(444, e))
        }
    }
    function Af(e) {
        return `href="` + Vt(e) + `"`
    }
    function jf(e) {
        return `link[rel="stylesheet"][` + e + `]`
    }
    function Mf(e) {
        return m({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Nf(e, t, n, r) {
        e.querySelector(`link[rel="preload"][as="style"][` + t + `]`) ? r.loading = 1 : (t = e.createElement(`link`),
        r.preload = t,
        t.addEventListener(`load`, function() {
            return r.loading |= 1
        }),
        t.addEventListener(`error`, function() {
            return r.loading |= 2
        }),
        Pd(t, `link`, n),
        Ct(t),
        e.head.appendChild(t))
    }
    function Pf(e) {
        return `[src="` + Vt(e) + `"]`
    }
    function Ff(e) {
        return `script[async]` + e
    }
    function If(e, t, n) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case `style`:
                var r = e.querySelector(`style[data-href~="` + Vt(n.href) + `"]`);
                if (r)
                    return t.instance = r,
                    Ct(r),
                    r;
                var a = m({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return r = (e.ownerDocument || e).createElement(`style`),
                Ct(r),
                Pd(r, `style`, a),
                Lf(r, n.precedence, e),
                t.instance = r;
            case `stylesheet`:
                a = Af(n.href);
                var o = e.querySelector(jf(a));
                if (o)
                    return t.state.loading |= 4,
                    t.instance = o,
                    Ct(o),
                    o;
                r = Mf(n),
                (a = mf.get(a)) && Rf(r, a),
                o = (e.ownerDocument || e).createElement(`link`),
                Ct(o);
                var s = o;
                return s._p = new Promise(function(e, t) {
                    s.onload = e,
                    s.onerror = t
                }
                ),
                Pd(o, `link`, r),
                t.state.loading |= 4,
                Lf(o, n.precedence, e),
                t.instance = o;
            case `script`:
                return o = Pf(n.src),
                (a = e.querySelector(Ff(o))) ? (t.instance = a,
                Ct(a),
                a) : (r = n,
                (a = mf.get(o)) && (r = m({}, n),
                zf(r, a)),
                e = e.ownerDocument || e,
                a = e.createElement(`script`),
                Ct(a),
                Pd(a, `link`, r),
                e.head.appendChild(a),
                t.instance = a);
            case `void`:
                return null;
            default:
                throw Error(i(443, t.type))
            }
        else
            t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance,
            t.state.loading |= 4,
            Lf(r, n.precedence, e));
        return t.instance
    }
    function Lf(e, t, n) {
        for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
            var s = r[o];
            if (s.dataset.precedence === t)
                a = s;
            else if (a !== i)
                break
        }
        a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
        t.insertBefore(e, t.firstChild))
    }
    function Rf(e, t) {
        e.crossOrigin ??= t.crossOrigin,
        e.referrerPolicy ??= t.referrerPolicy,
        e.title ??= t.title
    }
    function zf(e, t) {
        e.crossOrigin ??= t.crossOrigin,
        e.referrerPolicy ??= t.referrerPolicy,
        e.integrity ??= t.integrity
    }
    var Bf = null;
    function Vf(e, t, n) {
        if (Bf === null) {
            var r = new Map
              , i = Bf = new Map;
            i.set(n, r)
        } else
            i = Bf,
            r = i.get(n),
            r || (r = new Map,
            i.set(n, r));
        if (r.has(e))
            return r;
        for (r.set(e, null),
        n = n.getElementsByTagName(e),
        i = 0; i < n.length; i++) {
            var a = n[i];
            if (!(a[_t] || a[ut] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
                var o = a.getAttribute(t) || ``;
                o = e + o;
                var s = r.get(o);
                s ? s.push(a) : r.set(o, [a])
            }
        }
        return r
    }
    function Hf(e, t, n) {
        e = e.ownerDocument || e,
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null)
    }
    function Uf(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case `meta`:
        case `title`:
            return !0;
        case `style`:
            if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``)
                break;
            return !0;
        case `link`:
            if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case `stylesheet`:
                return e = t.disabled,
                typeof t.precedence == `string` && e == null;
            default:
                return !0
            }
        case `script`:
            if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`)
                return !0
        }
        return !1
    }
    function Wf(e) {
        return !(e.type === `stylesheet` && !(e.state.loading & 3))
    }
    function Gf(e, t, n, r) {
        if (n.type === `stylesheet` && (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
            if (n.instance === null) {
                var i = Af(r.href)
                  , a = t.querySelector(jf(i));
                if (a) {
                    t = a._p,
                    typeof t == `object` && t && typeof t.then == `function` && (e.count++,
                    e = Jf.bind(e),
                    t.then(e, e)),
                    n.state.loading |= 4,
                    n.instance = a,
                    Ct(a);
                    return
                }
                a = t.ownerDocument || t,
                r = Mf(r),
                (i = mf.get(i)) && Rf(r, i),
                a = a.createElement(`link`),
                Ct(a);
                var o = a;
                o._p = new Promise(function(e, t) {
                    o.onload = e,
                    o.onerror = t
                }
                ),
                Pd(a, `link`, r),
                n.instance = a
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(n, t),
            (t = n.state.preload) && !(n.state.loading & 3) && (e.count++,
            n = Jf.bind(e),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n))
        }
    }
    var Kf = 0;
    function qf(e, t) {
        return e.stylesheets && e.count === 0 && Xf(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(n) {
            var r = setTimeout(function() {
                if (e.stylesheets && Xf(e, e.stylesheets),
                e.unsuspend) {
                    var t = e.unsuspend;
                    e.unsuspend = null,
                    t()
                }
            }, 6e4 + t);
            0 < e.imgBytes && Kf === 0 && (Kf = 62500 * Ld());
            var i = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && Xf(e, e.stylesheets),
                e.unsuspend)) {
                    var t = e.unsuspend;
                    e.unsuspend = null,
                    t()
                }
            }, (e.imgBytes > Kf ? 50 : 800) + t);
            return e.unsuspend = n,
            function() {
                e.unsuspend = null,
                clearTimeout(r),
                clearTimeout(i)
            }
        }
        : null
    }
    function Jf() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Xf(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Yf = null;
    function Xf(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Yf = new Map,
        t.forEach(Zf, e),
        Yf = null,
        Jf.call(e))
    }
    function Zf(e, t) {
        if (!(t.state.loading & 4)) {
            var n = Yf.get(e);
            if (n)
                var r = n.get(null);
            else {
                n = new Map,
                Yf.set(e, n);
                for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
                    var o = i[a];
                    (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o),
                    r = o)
                }
                r && n.set(null, r)
            }
            i = t.instance,
            o = i.getAttribute(`data-precedence`),
            a = n.get(o) || r,
            a === r && n.set(null, i),
            n.set(o, i),
            this.count++,
            r = Jf.bind(this),
            i.addEventListener(`load`, r),
            i.addEventListener(`error`, r),
            a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(i, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var Qf = {
        $$typeof: C,
        Provider: null,
        Consumer: null,
        _currentValue: ce,
        _currentValue2: ce,
        _threadCount: 0
    };
    function $f(e, t, n, r, i, a, o, s, c) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = P(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = P(0),
        this.hiddenUpdates = P(null),
        this.identifierPrefix = r,
        this.onUncaughtError = i,
        this.onCaughtError = a,
        this.onRecoverableError = o,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = c,
        this.incompleteTransitions = new Map
    }
    function ep(e, t, n, r, i, a, o, s, c, l, u, d) {
        return e = new $f(e,t,n,o,c,l,u,d,s),
        t = 1,
        !0 === a && (t |= 24),
        a = di(3, null, null, t),
        e.current = a,
        a.stateNode = e,
        t = la(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: t
        },
        Ba(a),
        e
    }
    function tp(e) {
        return e ? (e = li,
        e) : li
    }
    function np(e, t, n, r, i, a) {
        i = tp(i),
        r.context === null ? r.context = i : r.pendingContext = i,
        r = Ha(t),
        r.payload = {
            element: n
        },
        a = a === void 0 ? null : a,
        a !== null && (r.callback = a),
        n = Ua(e, r, t),
        n !== null && (hu(n, e, t),
        Wa(n, e, t))
    }
    function rp(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function ip(e, t) {
        rp(e, t),
        (e = e.alternate) && rp(e, t)
    }
    function ap(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = oi(e, 67108864);
            t !== null && hu(t, e, 67108864),
            ip(e, 67108864)
        }
    }
    function op(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = pu();
            t = at(t);
            var n = oi(e, t);
            n !== null && hu(n, e, t),
            ip(e, t)
        }
    }
    var sp = !0;
    function cp(e, t, n, r) {
        var i = O.T;
        O.T = null;
        var a = k.p;
        try {
            k.p = 2,
            up(e, t, n, r)
        } finally {
            k.p = a,
            O.T = i
        }
    }
    function lp(e, t, n, r) {
        var i = O.T;
        O.T = null;
        var a = k.p;
        try {
            k.p = 8,
            up(e, t, n, r)
        } finally {
            k.p = a,
            O.T = i
        }
    }
    function up(e, t, n, r) {
        if (sp) {
            var i = dp(r);
            if (i === null)
                wd(e, t, r, fp, n),
                Cp(e, r);
            else if (Tp(i, e, t, n, r))
                r.stopPropagation();
            else if (Cp(e, r),
            t & 4 && -1 < Sp.indexOf(e)) {
                for (; i !== null; ) {
                    var a = bt(i);
                    if (a !== null)
                        switch (a.tag) {
                        case 3:
                            if (a = a.stateNode,
                            a.current.memoizedState.isDehydrated) {
                                var o = Xe(a.pendingLanes);
                                if (o !== 0) {
                                    var s = a;
                                    for (s.pendingLanes |= 2,
                                    s.entangledLanes |= 2; o; ) {
                                        var c = 1 << 31 - Ue(o);
                                        s.entanglements[1] |= c,
                                        o &= ~c
                                    }
                                    rd(a),
                                    !(K & 6) && (tu = je() + 500,
                                    id(0, !1))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            s = oi(a, 2),
                            s !== null && hu(s, a, 2),
                            bu(),
                            ip(a, 2)
                        }
                    if (a = dp(r),
                    a === null && wd(e, t, r, fp, n),
                    a === i)
                        break;
                    i = a
                }
                i !== null && r.stopPropagation()
            } else
                wd(e, t, r, null, n)
        }
    }
    function dp(e) {
        return e = an(e),
        pp(e)
    }
    var fp = null;
    function pp(e) {
        if (fp = null,
        e = yt(e),
        e !== null) {
            var t = o(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = s(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 31) {
                    if (e = c(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return fp = e,
        null
    }
    function mp(e) {
        switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
            return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
            return 8;
        case `message`:
            switch (Me()) {
            case Ne:
                return 2;
            case Pe:
                return 8;
            case Fe:
            case Ie:
                return 32;
            case Le:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var hp = !1
      , gp = null
      , _p = null
      , vp = null
      , yp = new Map
      , bp = new Map
      , xp = []
      , Sp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
    function Cp(e, t) {
        switch (e) {
        case `focusin`:
        case `focusout`:
            gp = null;
            break;
        case `dragenter`:
        case `dragleave`:
            _p = null;
            break;
        case `mouseover`:
        case `mouseout`:
            vp = null;
            break;
        case `pointerover`:
        case `pointerout`:
            yp.delete(t.pointerId);
            break;
        case `gotpointercapture`:
        case `lostpointercapture`:
            bp.delete(t.pointerId)
        }
    }
    function wp(e, t, n, r, i, a) {
        return e === null || e.nativeEvent !== a ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i]
        },
        t !== null && (t = bt(t),
        t !== null && ap(t)),
        e) : (e.eventSystemFlags |= r,
        t = e.targetContainers,
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e)
    }
    function Tp(e, t, n, r, i) {
        switch (t) {
        case `focusin`:
            return gp = wp(gp, e, t, n, r, i),
            !0;
        case `dragenter`:
            return _p = wp(_p, e, t, n, r, i),
            !0;
        case `mouseover`:
            return vp = wp(vp, e, t, n, r, i),
            !0;
        case `pointerover`:
            var a = i.pointerId;
            return yp.set(a, wp(yp.get(a) || null, e, t, n, r, i)),
            !0;
        case `gotpointercapture`:
            return a = i.pointerId,
            bp.set(a, wp(bp.get(a) || null, e, t, n, r, i)),
            !0
        }
        return !1
    }
    function Ep(e) {
        var t = yt(e.target);
        if (t !== null) {
            var n = o(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = s(n),
                    t !== null) {
                        e.blockedOn = t,
                        ct(e.priority, function() {
                            op(n)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = c(n),
                    t !== null) {
                        e.blockedOn = t,
                        ct(e.priority, function() {
                            op(n)
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Dp(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = dp(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var r = new n.constructor(n.type,n);
                rn = r,
                n.target.dispatchEvent(r),
                rn = null
            } else
                return t = bt(n),
                t !== null && ap(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Op(e, t, n) {
        Dp(e) && n.delete(t)
    }
    function kp() {
        hp = !1,
        gp !== null && Dp(gp) && (gp = null),
        _p !== null && Dp(_p) && (_p = null),
        vp !== null && Dp(vp) && (vp = null),
        yp.forEach(Op),
        bp.forEach(Op)
    }
    function Ap(e, n) {
        e.blockedOn === n && (e.blockedOn = null,
        hp || (hp = !0,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, kp)))
    }
    var jp = null;
    function Mp(e) {
        jp !== e && (jp = e,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
            jp === e && (jp = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t]
                  , r = e[t + 1]
                  , i = e[t + 2];
                if (typeof r != `function`) {
                    if (pp(r || n) === null)
                        continue;
                    break
                }
                var a = bt(n);
                a !== null && (e.splice(t, 3),
                t -= 3,
                ws(a, {
                    pending: !0,
                    data: i,
                    method: n.method,
                    action: r
                }, r, i))
            }
        }))
    }
    function Np(e) {
        function t(t) {
            return Ap(t, e)
        }
        gp !== null && Ap(gp, e),
        _p !== null && Ap(_p, e),
        vp !== null && Ap(vp, e),
        yp.forEach(t),
        bp.forEach(t);
        for (var n = 0; n < xp.length; n++) {
            var r = xp[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
        for (; 0 < xp.length && (n = xp[0],
        n.blockedOn === null); )
            Ep(n),
            n.blockedOn === null && xp.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
        n != null)
            for (r = 0; r < n.length; r += 3) {
                var i = n[r]
                  , a = n[r + 1]
                  , o = i[dt] || null;
                if (typeof a == `function`)
                    o || Mp(n);
                else if (o) {
                    var s = null;
                    if (a && a.hasAttribute(`formAction`)) {
                        if (i = a,
                        o = a[dt] || null)
                            s = o.formAction;
                        else if (pp(i) !== null)
                            continue
                    } else
                        s = o.action;
                    typeof s == `function` ? n[r + 1] = s : (n.splice(r, 3),
                    r -= 3),
                    Mp(n)
                }
            }
    }
    function Pp() {
        function e(e) {
            e.canIntercept && e.info === `react-transition` && e.intercept({
                handler: function() {
                    return new Promise(function(e) {
                        return i = e
                    }
                    )
                },
                focusReset: `manual`,
                scroll: `manual`
            })
        }
        function t() {
            i !== null && (i(),
            i = null),
            r || setTimeout(n, 20)
        }
        function n() {
            if (!r && !navigation.transition) {
                var e = navigation.currentEntry;
                e && e.url != null && navigation.navigate(e.url, {
                    state: e.getState(),
                    info: `react-transition`,
                    history: `replace`
                })
            }
        }
        if (typeof navigation == `object`) {
            var r = !1
              , i = null;
            return navigation.addEventListener(`navigate`, e),
            navigation.addEventListener(`navigatesuccess`, t),
            navigation.addEventListener(`navigateerror`, t),
            setTimeout(n, 100),
            function() {
                r = !0,
                navigation.removeEventListener(`navigate`, e),
                navigation.removeEventListener(`navigatesuccess`, t),
                navigation.removeEventListener(`navigateerror`, t),
                i !== null && (i(),
                i = null)
            }
        }
    }
    function Fp(e) {
        this._internalRoot = e
    }
    Ip.prototype.render = Fp.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(i(409));
        var n = t.current;
        np(n, pu(), e, t, null, null)
    }
    ,
    Ip.prototype.unmount = Fp.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            np(e.current, 2, null, e, null, null),
            bu(),
            t[ft] = null
        }
    }
    ;
    function Ip(e) {
        this._internalRoot = e
    }
    Ip.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = st();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < xp.length && t !== 0 && t < xp[n].priority; n++)
                ;
            xp.splice(n, 0, e),
            n === 0 && Ep(e)
        }
    }
    ;
    var Lp = n.version;
    if (Lp !== `19.2.4`)
        throw Error(i(527, Lp, `19.2.4`));
    k.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == `function` ? Error(i(188)) : (e = Object.keys(e).join(`,`),
            Error(i(268, e)));
        return e = u(t),
        e = e === null ? null : f(e),
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var Rp = {
        bundleType: 0,
        version: `19.2.4`,
        rendererPackageName: `react-dom`,
        currentDispatcherRef: O,
        reconcilerVersion: `19.2.4`
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
        var zp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!zp.isDisabled && zp.supportsFiber)
            try {
                Be = zp.inject(Rp),
                Ve = zp
            } catch {}
    }
    e.createRoot = function(e, t) {
        if (!a(e))
            throw Error(i(299));
        var n = !1
          , r = ``
          , o = qs
          , s = Js
          , c = Ys;
        return t != null && (!0 === t.unstable_strictMode && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
        t.onCaughtError !== void 0 && (s = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        t = ep(e, 1, !1, null, null, n, r, null, o, s, c, Pp),
        e[ft] = t.current,
        Sd(e),
        new Fp(t)
    }
}
))
  , _ = o(( (e, t) => {
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (e) {
                console.error(e)
            }
    }
    n(),
    t.exports = g()
}
))
  , v = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , y = new class extends v {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (typeof window < `u` && window.addEventListener) {
                let t = () => e();
                return window.addEventListener(`visibilitychange`, t, !1),
                () => {
                    window.removeEventListener(`visibilitychange`, t)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(e => {
            typeof e == `boolean` ? this.setFocused(e) : this.onFocus()
        }
        )
    }
    setFocused(e) {
        this.#e !== e && (this.#e = e,
        this.onFocus())
    }
    onFocus() {
        let e = this.isFocused();
        this.listeners.forEach(t => {
            t(e)
        }
        )
    }
    isFocused() {
        return typeof this.#e == `boolean` ? this.#e : globalThis.document?.visibilityState !== `hidden`
    }
}
  , b = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: e => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: e => clearInterval(e)
}
  , x = new class {
    #e = b;
    setTimeoutProvider(e) {
        this.#e = e
    }
    setTimeout(e, t) {
        return this.#e.setTimeout(e, t)
    }
    clearTimeout(e) {
        this.#e.clearTimeout(e)
    }
    setInterval(e, t) {
        return this.#e.setInterval(e, t)
    }
    clearInterval(e) {
        this.#e.clearInterval(e)
    }
}
;
function S(e) {
    setTimeout(e, 0)
}
var C = typeof window > `u` || `Deno`in globalThis;
function w() {}
function ee(e, t) {
    return typeof e == `function` ? e(t) : e
}
function te(e) {
    return typeof e == `number` && e >= 0 && e !== 1 / 0
}
function T(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function E(e, t) {
    return typeof e == `function` ? e(t) : e
}
function D(e, t) {
    return typeof e == `function` ? e(t) : e
}
function ne(e, t) {
    let {type: n=`all`, exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== ie(o, t.options))
                return !1
        } else if (!oe(t.queryKey, o))
            return !1
    }
    if (n !== `all`) {
        let e = t.isActive();
        if (n === `active` && !e || n === `inactive` && e)
            return !1
    }
    return !(typeof s == `boolean` && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t))
}
function re(e, t) {
    let {exact: n, status: r, predicate: i, mutationKey: a} = e;
    if (a) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (ae(t.options.mutationKey) !== ae(a))
                return !1
        } else if (!oe(t.options.mutationKey, a))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function ie(e, t) {
    return (t?.queryKeyHashFn || ae)(e)
}
function ae(e) {
    return JSON.stringify(e, (e, t) => le(t) ? Object.keys(t).sort().reduce( (e, n) => (e[n] = t[n],
    e), {}) : t)
}
function oe(e, t) {
    return e === t ? !0 : typeof e == typeof t && e && t && typeof e == `object` && typeof t == `object` ? Object.keys(t).every(n => oe(e[n], t[n])) : !1
}
var se = Object.prototype.hasOwnProperty;
function O(e, t, n=0) {
    if (e === t)
        return e;
    if (n > 500)
        return t;
    let r = ce(e) && ce(t);
    if (!r && !(le(e) && le(t)))
        return t;
    let i = (r ? e : Object.keys(e)).length
      , a = r ? t : Object.keys(t)
      , o = a.length
      , s = r ? Array(o) : {}
      , c = 0;
    for (let l = 0; l < o; l++) {
        let o = r ? l : a[l]
          , u = e[o]
          , d = t[o];
        if (u === d) {
            s[o] = u,
            (r ? l < i : se.call(e, o)) && c++;
            continue
        }
        if (u === null || d === null || typeof u != `object` || typeof d != `object`) {
            s[o] = d;
            continue
        }
        let f = O(u, d, n + 1);
        s[o] = f,
        f === u && c++
    }
    return i === o && c === i ? e : s
}
function k(e, t) {
    if (!t || Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (let n in e)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function ce(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function le(e) {
    if (!ue(e))
        return !1;
    let t = e.constructor;
    if (t === void 0)
        return !0;
    let n = t.prototype;
    return !(!ue(n) || !n.hasOwnProperty(`isPrototypeOf`) || Object.getPrototypeOf(e) !== Object.prototype)
}
function ue(e) {
    return Object.prototype.toString.call(e) === `[object Object]`
}
function de(e) {
    return new Promise(t => {
        x.setTimeout(t, e)
    }
    )
}
function A(e, t, n) {
    return typeof n.structuralSharing == `function` ? n.structuralSharing(e, t) : n.structuralSharing === !1 ? t : O(e, t)
}
function j(e) {
    return e
}
function fe(e, t, n=0) {
    let r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function pe(e, t, n=0) {
    let r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var me = Symbol();
function he(e, t) {
    return !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === me ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
function ge(e, t) {
    return typeof e == `function` ? e(...t) : !!e
}
function _e(e, t, n) {
    let r = !1, i;
    return Object.defineProperty(e, `signal`, {
        enumerable: !0,
        get: () => (i ??= t(),
        r ? i : (r = !0,
        i.aborted ? n() : i.addEventListener(`abort`, n, {
            once: !0
        }),
        i))
    }),
    e
}
var ve = ( () => {
    let e = () => C;
    return {
        isServer() {
            return e()
        },
        setIsServer(t) {
            e = t
        }
    }
}
)();
function ye() {
    let e, t, n = new Promise( (n, r) => {
        e = n,
        t = r
    }
    );
    n.status = `pending`,
    n.catch( () => {}
    );
    function r(e) {
        Object.assign(n, e),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = t => {
        r({
            status: `fulfilled`,
            value: t
        }),
        e(t)
    }
    ,
    n.reject = e => {
        r({
            status: `rejected`,
            reason: e
        }),
        t(e)
    }
    ,
    n
}
var be = S;
function xe() {
    let e = []
      , t = 0
      , n = e => {
        e()
    }
      , r = e => {
        e()
    }
      , i = be
      , a = r => {
        t ? e.push(r) : i( () => {
            n(r)
        }
        )
    }
      , o = () => {
        let t = e;
        e = [],
        t.length && i( () => {
            r( () => {
                t.forEach(e => {
                    n(e)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: e => {
            let n;
            t++;
            try {
                n = e()
            } finally {
                t--,
                t || o()
            }
            return n
        }
        ,
        batchCalls: e => (...t) => {
            a( () => {
                e(...t)
            }
            )
        }
        ,
        schedule: a,
        setNotifyFunction: e => {
            n = e
        }
        ,
        setBatchNotifyFunction: e => {
            r = e
        }
        ,
        setScheduler: e => {
            i = e
        }
    }
}
var M = xe()
  , Se = new class extends v {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = e => {
            if (typeof window < `u` && window.addEventListener) {
                let t = () => e(!0)
                  , n = () => e(!1);
                return window.addEventListener(`online`, t, !1),
                window.addEventListener(`offline`, n, !1),
                () => {
                    window.removeEventListener(`online`, t),
                    window.removeEventListener(`offline`, n)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(e) {
        this.#n = e,
        this.#t?.(),
        this.#t = e(this.setOnline.bind(this))
    }
    setOnline(e) {
        this.#e !== e && (this.#e = e,
        this.listeners.forEach(t => {
            t(e)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
;
function Ce(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function we(e) {
    return (e ?? `online`) === `online` ? Se.isOnline() : !0
}
var Te = class extends Error {
    constructor(e) {
        super(`CancelledError`),
        this.revert = e?.revert,
        this.silent = e?.silent
    }
}
;
function Ee(e) {
    let t = !1, n = 0, r, i = ye(), a = () => i.status !== `pending`, o = t => {
        if (!a()) {
            let n = new Te(t);
            f(n),
            e.onCancel?.(n)
        }
    }
    , s = () => {
        t = !0
    }
    , c = () => {
        t = !1
    }
    , l = () => y.isFocused() && (e.networkMode === `always` || Se.isOnline()) && e.canRun(), u = () => we(e.networkMode) && e.canRun(), d = e => {
        a() || (r?.(),
        i.resolve(e))
    }
    , f = e => {
        a() || (r?.(),
        i.reject(e))
    }
    , p = () => new Promise(t => {
        r = e => {
            (a() || l()) && t(e)
        }
        ,
        e.onPause?.()
    }
    ).then( () => {
        r = void 0,
        a() || e.onContinue?.()
    }
    ), m = () => {
        if (a())
            return;
        let r, i = n === 0 ? e.initialPromise : void 0;
        try {
            r = i ?? e.fn()
        } catch (e) {
            r = Promise.reject(e)
        }
        Promise.resolve(r).then(d).catch(r => {
            if (a())
                return;
            let i = e.retry ?? (ve.isServer() ? 0 : 3)
              , o = e.retryDelay ?? Ce
              , s = typeof o == `function` ? o(n, r) : o
              , c = i === !0 || typeof i == `number` && n < i || typeof i == `function` && i(n, r);
            if (t || !c) {
                f(r);
                return
            }
            n++,
            e.onFail?.(n, r),
            de(s).then( () => l() ? void 0 : p()).then( () => {
                t ? f(r) : m()
            }
            )
        }
        )
    }
    ;
    return {
        promise: i,
        status: () => i.status,
        cancel: o,
        continue: () => (r?.(),
        i),
        cancelRetry: s,
        continueRetry: c,
        canStart: u,
        start: () => (u() ? m() : p().then(m),
        i)
    }
}
var De = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        te(this.gcTime) && (this.#e = x.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (ve.isServer() ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e &&= (x.clearTimeout(this.#e),
        void 0)
    }
}
  , Oe = class extends De {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(e) {
        super(),
        this.#o = !1,
        this.#a = e.defaultOptions,
        this.setOptions(e.options),
        this.observers = [],
        this.#r = e.client,
        this.#n = this.#r.getQueryCache(),
        this.queryKey = e.queryKey,
        this.queryHash = e.queryHash,
        this.#e = je(this.options),
        this.state = e.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#i?.promise
    }
    setOptions(e) {
        if (this.options = {
            ...this.#a,
            ...e
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            let e = je(this.options);
            e.data !== void 0 && (this.setState(Ae(e.data, e.dataUpdatedAt)),
            this.#e = e)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === `idle` && this.#n.remove(this)
    }
    setData(e, t) {
        let n = A(this.state.data, e, this.options);
        return this.#c({
            data: n,
            type: `success`,
            dataUpdatedAt: t?.updatedAt,
            manual: t?.manual
        }),
        n
    }
    setState(e, t) {
        this.#c({
            type: `setState`,
            state: e,
            setStateOptions: t
        })
    }
    cancel(e) {
        let t = this.#i?.promise;
        return this.#i?.cancel(e),
        t ? t.then(w).catch(w) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    get resetState() {
        return this.#e
    }
    reset() {
        this.destroy(),
        this.setState(this.resetState)
    }
    isActive() {
        return this.observers.some(e => D(e.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === me || !this.isFetched()
    }
    isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(e => E(e.options.staleTime, this) === `static`) : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(e=0) {
        return this.state.data === void 0 ? !0 : e === `static` ? !1 : this.state.isInvalidated ? !0 : !T(this.state.dataUpdatedAt, e)
    }
    onFocus() {
        this.observers.find(e => e.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#i?.continue()
    }
    onOnline() {
        this.observers.find(e => e.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#i?.continue()
    }
    addObserver(e) {
        this.observers.includes(e) || (this.observers.push(e),
        this.clearGcTimeout(),
        this.#n.notify({
            type: `observerAdded`,
            query: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e),
        this.observers.length || (this.#i && (this.#o || this.#s() ? this.#i.cancel({
            revert: !0
        }) : this.#i.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: `observerRemoved`,
            query: this,
            observer: e
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    #s() {
        return this.state.fetchStatus === `paused` && this.state.status === `pending`
    }
    invalidate() {
        this.state.isInvalidated || this.#c({
            type: `invalidate`
        })
    }
    async fetch(e, t) {
        if (this.state.fetchStatus !== `idle` && this.#i?.status() !== `rejected`) {
            if (this.state.data !== void 0 && t?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#i)
                return this.#i.continueRetry(),
                this.#i.promise
        }
        if (e && this.setOptions(e),
        !this.options.queryFn) {
            let e = this.observers.find(e => e.options.queryFn);
            e && this.setOptions(e.options)
        }
        let n = new AbortController
          , r = e => {
            Object.defineProperty(e, `signal`, {
                enumerable: !0,
                get: () => (this.#o = !0,
                n.signal)
            })
        }
          , i = () => {
            let e = he(this.options, t)
              , n = ( () => {
                let e = {
                    client: this.#r,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return r(e),
                e
            }
            )();
            return this.#o = !1,
            this.options.persister ? this.options.persister(e, n, this) : e(n)
        }
          , a = ( () => {
            let e = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#r,
                state: this.state,
                fetchFn: i
            };
            return r(e),
            e
        }
        )();
        this.options.behavior?.onFetch(a, this),
        this.#t = this.state,
        (this.state.fetchStatus === `idle` || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#c({
            type: `fetch`,
            meta: a.fetchOptions?.meta
        }),
        this.#i = Ee({
            initialPromise: t?.initialPromise,
            fn: a.fetchFn,
            onCancel: e => {
                e instanceof Te && e.revert && this.setState({
                    ...this.#t,
                    fetchStatus: `idle`
                }),
                n.abort()
            }
            ,
            onFail: (e, t) => {
                this.#c({
                    type: `failed`,
                    failureCount: e,
                    error: t
                })
            }
            ,
            onPause: () => {
                this.#c({
                    type: `pause`
                })
            }
            ,
            onContinue: () => {
                this.#c({
                    type: `continue`
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        });
        try {
            let e = await this.#i.start();
            if (e === void 0)
                throw Error(`${this.queryHash} data is undefined`);
            return this.setData(e),
            this.#n.config.onSuccess?.(e, this),
            this.#n.config.onSettled?.(e, this.state.error, this),
            e
        } catch (e) {
            if (e instanceof Te) {
                if (e.silent)
                    return this.#i.promise;
                if (e.revert) {
                    if (this.state.data === void 0)
                        throw e;
                    return this.state.data
                }
            }
            throw this.#c({
                type: `error`,
                error: e
            }),
            this.#n.config.onError?.(e, this),
            this.#n.config.onSettled?.(this.state.data, e, this),
            e
        } finally {
            this.scheduleGc()
        }
    }
    #c(e) {
        this.state = (t => {
            switch (e.type) {
            case `failed`:
                return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error
                };
            case `pause`:
                return {
                    ...t,
                    fetchStatus: `paused`
                };
            case `continue`:
                return {
                    ...t,
                    fetchStatus: `fetching`
                };
            case `fetch`:
                return {
                    ...t,
                    ...ke(t.data, this.options),
                    fetchMeta: e.meta ?? null
                };
            case `success`:
                let n = {
                    ...t,
                    ...Ae(e.data, e.dataUpdatedAt),
                    dataUpdateCount: t.dataUpdateCount + 1,
                    ...!e.manual && {
                        fetchStatus: `idle`,
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#t = e.manual ? n : void 0,
                n;
            case `error`:
                let r = e.error;
                return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: `idle`,
                    status: `error`,
                    isInvalidated: !0
                };
            case `invalidate`:
                return {
                    ...t,
                    isInvalidated: !0
                };
            case `setState`:
                return {
                    ...t,
                    ...e.state
                }
            }
        }
        )(this.state),
        M.batch( () => {
            this.observers.forEach(e => {
                e.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: `updated`,
                action: e
            })
        }
        )
    }
}
;
function ke(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: we(t.networkMode) ? `fetching` : `paused`,
        ...e === void 0 && {
            error: null,
            status: `pending`
        }
    }
}
function Ae(e, t) {
    return {
        data: e,
        dataUpdatedAt: t ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: `success`
    }
}
function je(e) {
    let t = typeof e.initialData == `function` ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == `function` ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? `success` : `pending`,
        fetchStatus: `idle`
    }
}
var Me = class extends v {
    constructor(e, t) {
        super(),
        this.options = t,
        this.#e = e,
        this.#s = null,
        this.#o = ye(),
        this.bindMethods(),
        this.setOptions(t)
    }
    #e;
    #t = void 0;
    #n = void 0;
    #r = void 0;
    #i;
    #a;
    #o;
    #s;
    #c;
    #l;
    #u;
    #d;
    #f;
    #p;
    #m = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this),
        Pe(this.#t, this.options) ? this.#h() : this.updateResult(),
        this.#y())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Fe(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Fe(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#b(),
        this.#x(),
        this.#t.removeObserver(this)
    }
    setOptions(e) {
        let t = this.options
          , n = this.#t;
        if (this.options = this.#e.defaultQueryOptions(e),
        this.options.enabled !== void 0 && typeof this.options.enabled != `boolean` && typeof this.options.enabled != `function` && typeof D(this.options.enabled, this.#t) != `boolean`)
            throw Error(`Expected enabled to be a boolean or a callback that returns a boolean`);
        this.#S(),
        this.#t.setOptions(this.options),
        t._defaulted && !k(this.options, t) && this.#e.getQueryCache().notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this
        });
        let r = this.hasListeners();
        r && Ie(this.#t, n, this.options, t) && this.#h(),
        this.updateResult(),
        r && (this.#t !== n || D(this.options.enabled, this.#t) !== D(t.enabled, this.#t) || E(this.options.staleTime, this.#t) !== E(t.staleTime, this.#t)) && this.#g();
        let i = this.#_();
        r && (this.#t !== n || D(this.options.enabled, this.#t) !== D(t.enabled, this.#t) || i !== this.#p) && this.#v(i)
    }
    getOptimisticResult(e) {
        let t = this.#e.getQueryCache().build(this.#e, e)
          , n = this.createResult(t, e);
        return Re(this, n) && (this.#r = n,
        this.#a = this.options,
        this.#i = this.#t.state),
        n
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(e, t) {
        return new Proxy(e,{
            get: (e, n) => (this.trackProp(n),
            t?.(n),
            n === `promise` && (this.trackProp(`data`),
            !this.options.experimental_prefetchInRender && this.#o.status === `pending` && this.#o.reject(Error(`experimental_prefetchInRender feature flag is not enabled`))),
            Reflect.get(e, n))
        })
    }
    trackProp(e) {
        this.#m.add(e)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({...e}={}) {
        return this.fetch({
            ...e
        })
    }
    fetchOptimistic(e) {
        let t = this.#e.defaultQueryOptions(e)
          , n = this.#e.getQueryCache().build(this.#e, t);
        return n.fetch().then( () => this.createResult(n, t))
    }
    fetch(e) {
        return this.#h({
            ...e,
            cancelRefetch: e.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        this.#r))
    }
    #h(e) {
        this.#S();
        let t = this.#t.fetch(this.options, e);
        return e?.throwOnError || (t = t.catch(w)),
        t
    }
    #g() {
        this.#b();
        let e = E(this.options.staleTime, this.#t);
        if (ve.isServer() || this.#r.isStale || !te(e))
            return;
        let t = T(this.#r.dataUpdatedAt, e) + 1;
        this.#d = x.setTimeout( () => {
            this.#r.isStale || this.updateResult()
        }
        , t)
    }
    #_() {
        return (typeof this.options.refetchInterval == `function` ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }
    #v(e) {
        this.#x(),
        this.#p = e,
        !(ve.isServer() || D(this.options.enabled, this.#t) === !1 || !te(this.#p) || this.#p === 0) && (this.#f = x.setInterval( () => {
            (this.options.refetchIntervalInBackground || y.isFocused()) && this.#h()
        }
        , this.#p))
    }
    #y() {
        this.#g(),
        this.#v(this.#_())
    }
    #b() {
        this.#d &&= (x.clearTimeout(this.#d),
        void 0)
    }
    #x() {
        this.#f &&= (x.clearInterval(this.#f),
        void 0)
    }
    createResult(e, t) {
        let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, {state: c} = e, l = {
            ...c
        }, u = !1, d;
        if (t._optimisticResults) {
            let i = this.hasListeners()
              , a = !i && Pe(e, t)
              , o = i && Ie(e, n, t, r);
            (a || o) && (l = {
                ...l,
                ...ke(c.data, e.options)
            }),
            t._optimisticResults === `isRestoring` && (l.fetchStatus = `idle`)
        }
        let {error: f, errorUpdatedAt: p, status: m} = l;
        d = l.data;
        let h = !1;
        if (t.placeholderData !== void 0 && d === void 0 && m === `pending`) {
            let e;
            i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data,
            h = !0) : e = typeof t.placeholderData == `function` ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData,
            e !== void 0 && (m = `success`,
            d = A(i?.data, e, t),
            u = !0)
        }
        if (t.select && d !== void 0 && !h)
            if (i && d === a?.data && t.select === this.#c)
                d = this.#l;
            else
                try {
                    this.#c = t.select,
                    d = t.select(d),
                    d = A(i?.data, d, t),
                    this.#l = d,
                    this.#s = null
                } catch (e) {
                    this.#s = e
                }
        this.#s && (f = this.#s,
        d = this.#l,
        p = Date.now(),
        m = `error`);
        let g = l.fetchStatus === `fetching`
          , _ = m === `pending`
          , v = m === `error`
          , y = _ && g
          , b = d !== void 0
          , x = {
            status: m,
            fetchStatus: l.fetchStatus,
            isPending: _,
            isSuccess: m === `success`,
            isError: v,
            isInitialLoading: y,
            isLoading: y,
            data: d,
            dataUpdatedAt: l.dataUpdatedAt,
            error: f,
            errorUpdatedAt: p,
            failureCount: l.fetchFailureCount,
            failureReason: l.fetchFailureReason,
            errorUpdateCount: l.errorUpdateCount,
            isFetched: e.isFetched(),
            isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
            isFetching: g,
            isRefetching: g && !_,
            isLoadingError: v && !b,
            isPaused: l.fetchStatus === `paused`,
            isPlaceholderData: u,
            isRefetchError: v && b,
            isStale: Le(e, t),
            refetch: this.refetch,
            promise: this.#o,
            isEnabled: D(t.enabled, e) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            let t = x.data !== void 0
              , r = x.status === `error` && !t
              , i = e => {
                r ? e.reject(x.error) : t && e.resolve(x.data)
            }
              , a = () => {
                i(this.#o = x.promise = ye())
            }
              , o = this.#o;
            switch (o.status) {
            case `pending`:
                e.queryHash === n.queryHash && i(o);
                break;
            case `fulfilled`:
                (r || x.data !== o.value) && a();
                break;
            case `rejected`:
                (!r || x.error !== o.reason) && a();
                break
            }
        }
        return x
    }
    updateResult() {
        let e = this.#r
          , t = this.createResult(this.#t, this.options);
        this.#i = this.#t.state,
        this.#a = this.options,
        this.#i.data !== void 0 && (this.#u = this.#t),
        !k(t, e) && (this.#r = t,
        this.#C({
            listeners: ( () => {
                if (!e)
                    return !0;
                let {notifyOnChangeProps: t} = this.options
                  , n = typeof t == `function` ? t() : t;
                if (n === `all` || !n && !this.#m.size)
                    return !0;
                let r = new Set(n ?? this.#m);
                return this.options.throwOnError && r.add(`error`),
                Object.keys(this.#r).some(t => {
                    let n = t;
                    return this.#r[n] !== e[n] && r.has(n)
                }
                )
            }
            )()
        }))
    }
    #S() {
        let e = this.#e.getQueryCache().build(this.#e, this.options);
        if (e === this.#t)
            return;
        let t = this.#t;
        this.#t = e,
        this.#n = e.state,
        this.hasListeners() && (t?.removeObserver(this),
        e.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#y()
    }
    #C(e) {
        M.batch( () => {
            e.listeners && this.listeners.forEach(e => {
                e(this.#r)
            }
            ),
            this.#e.getQueryCache().notify({
                query: this.#t,
                type: `observerResultsUpdated`
            })
        }
        )
    }
}
;
function Ne(e, t) {
    return D(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === `error` && t.retryOnMount === !1)
}
function Pe(e, t) {
    return Ne(e, t) || e.state.data !== void 0 && Fe(e, t, t.refetchOnMount)
}
function Fe(e, t, n) {
    if (D(t.enabled, e) !== !1 && E(t.staleTime, e) !== `static`) {
        let r = typeof n == `function` ? n(e) : n;
        return r === `always` || r !== !1 && Le(e, t)
    }
    return !1
}
function Ie(e, t, n, r) {
    return (e !== t || D(r.enabled, e) === !1) && (!n.suspense || e.state.status !== `error`) && Le(e, n)
}
function Le(e, t) {
    return D(t.enabled, e) !== !1 && e.isStaleByTime(E(t.staleTime, e))
}
function Re(e, t) {
    return !k(e.getCurrentResult(), t)
}
function ze(e) {
    return {
        onFetch: (t, n) => {
            let r = t.options
              , i = t.fetchOptions?.meta?.fetchMore?.direction
              , a = t.state.data?.pages || []
              , o = t.state.data?.pageParams || []
              , s = {
                pages: [],
                pageParams: []
            }
              , c = 0
              , l = async () => {
                let n = !1
                  , l = e => {
                    _e(e, () => t.signal, () => n = !0)
                }
                  , u = he(t.options, t.fetchOptions)
                  , d = async (e, r, i) => {
                    if (n)
                        return Promise.reject();
                    if (r == null && e.pages.length)
                        return Promise.resolve(e);
                    let a = await u(( () => {
                        let e = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: r,
                            direction: i ? `backward` : `forward`,
                            meta: t.options.meta
                        };
                        return l(e),
                        e
                    }
                    )())
                      , {maxPages: o} = t.options
                      , s = i ? pe : fe;
                    return {
                        pages: s(e.pages, a, o),
                        pageParams: s(e.pageParams, r, o)
                    }
                }
                ;
                if (i && a.length) {
                    let e = i === `backward`
                      , t = e ? Ve : Be
                      , n = {
                        pages: a,
                        pageParams: o
                    };
                    s = await d(n, t(r, n), e)
                } else {
                    let t = e ?? a.length;
                    do {
                        let e = c === 0 ? o[0] ?? r.initialPageParam : Be(r, s);
                        if (c > 0 && e == null)
                            break;
                        s = await d(s, e),
                        c++
                    } while (c < t)
                }
                return s
            }
            ;
            t.options.persister ? t.fetchFn = () => t.options.persister?.(l, {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal
            }, n) : t.fetchFn = l
        }
    }
}
function Be(e, {pages: t, pageParams: n}) {
    let r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function Ve(e, {pages: t, pageParams: n}) {
    return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0
}
function He(e, t) {
    return t ? Be(e, t) != null : !1
}
function Ue(e, t) {
    return !t || !e.getPreviousPageParam ? !1 : Ve(e, t) != null
}
var We = class extends Me {
    constructor(e, t) {
        super(e, t)
    }
    bindMethods() {
        super.bindMethods(),
        this.fetchNextPage = this.fetchNextPage.bind(this),
        this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
    }
    setOptions(e) {
        super.setOptions({
            ...e,
            behavior: ze()
        })
    }
    getOptimisticResult(e) {
        return e.behavior = ze(),
        super.getOptimisticResult(e)
    }
    fetchNextPage(e) {
        return this.fetch({
            ...e,
            meta: {
                fetchMore: {
                    direction: `forward`
                }
            }
        })
    }
    fetchPreviousPage(e) {
        return this.fetch({
            ...e,
            meta: {
                fetchMore: {
                    direction: `backward`
                }
            }
        })
    }
    createResult(e, t) {
        let {state: n} = e
          , r = super.createResult(e, t)
          , {isFetching: i, isRefetching: a, isError: o, isRefetchError: s} = r
          , c = n.fetchMeta?.fetchMore?.direction
          , l = o && c === `forward`
          , u = i && c === `forward`
          , d = o && c === `backward`
          , f = i && c === `backward`;
        return {
            ...r,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: He(t, n.data),
            hasPreviousPage: Ue(t, n.data),
            isFetchNextPageError: l,
            isFetchingNextPage: u,
            isFetchPreviousPageError: d,
            isFetchingPreviousPage: f,
            isRefetchError: s && !l && !d,
            isRefetching: a && !u && !f
        }
    }
}
  , Ge = class extends De {
    #e;
    #t;
    #n;
    #r;
    constructor(e) {
        super(),
        this.#e = e.client,
        this.mutationId = e.mutationId,
        this.#n = e.mutationCache,
        this.#t = [],
        this.state = e.state || Ke(),
        this.setOptions(e.options),
        this.scheduleGc()
    }
    setOptions(e) {
        this.options = e,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(e) {
        this.#t.includes(e) || (this.#t.push(e),
        this.clearGcTimeout(),
        this.#n.notify({
            type: `observerAdded`,
            mutation: this,
            observer: e
        }))
    }
    removeObserver(e) {
        this.#t = this.#t.filter(t => t !== e),
        this.scheduleGc(),
        this.#n.notify({
            type: `observerRemoved`,
            mutation: this,
            observer: e
        })
    }
    optionalRemove() {
        this.#t.length || (this.state.status === `pending` ? this.scheduleGc() : this.#n.remove(this))
    }
    continue() {
        return this.#r?.continue() ?? this.execute(this.state.variables)
    }
    async execute(e) {
        let t = () => {
            this.#i({
                type: `continue`
            })
        }
          , n = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#r = Ee({
            fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(Error(`No mutationFn found`)),
            onFail: (e, t) => {
                this.#i({
                    type: `failed`,
                    failureCount: e,
                    error: t
                })
            }
            ,
            onPause: () => {
                this.#i({
                    type: `pause`
                })
            }
            ,
            onContinue: t,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        let r = this.state.status === `pending`
          , i = !this.#r.canStart();
        try {
            if (r)
                t();
            else {
                this.#i({
                    type: `pending`,
                    variables: e,
                    isPaused: i
                }),
                this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
                let t = await this.options.onMutate?.(e, n);
                t !== this.state.context && this.#i({
                    type: `pending`,
                    context: t,
                    variables: e,
                    isPaused: i
                })
            }
            let a = await this.#r.start();
            return await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
            await this.options.onSuccess?.(a, e, this.state.context, n),
            await this.#n.config.onSettled?.(a, null, this.state.variables, this.state.context, this, n),
            await this.options.onSettled?.(a, null, e, this.state.context, n),
            this.#i({
                type: `success`,
                data: a
            }),
            a
        } catch (t) {
            try {
                await this.#n.config.onError?.(t, e, this.state.context, this, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.options.onError?.(t, e, this.state.context, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n)
            } catch (e) {
                Promise.reject(e)
            }
            try {
                await this.options.onSettled?.(void 0, t, e, this.state.context, n)
            } catch (e) {
                Promise.reject(e)
            }
            throw this.#i({
                type: `error`,
                error: t
            }),
            t
        } finally {
            this.#n.runNext(this)
        }
    }
    #i(e) {
        this.state = (t => {
            switch (e.type) {
            case `failed`:
                return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error
                };
            case `pause`:
                return {
                    ...t,
                    isPaused: !0
                };
            case `continue`:
                return {
                    ...t,
                    isPaused: !1
                };
            case `pending`:
                return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: `pending`,
                    variables: e.variables,
                    submittedAt: Date.now()
                };
            case `success`:
                return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: `success`,
                    isPaused: !1
                };
            case `error`:
                return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: `error`
                }
            }
        }
        )(this.state),
        M.batch( () => {
            this.#t.forEach(t => {
                t.onMutationUpdate(e)
            }
            ),
            this.#n.notify({
                mutation: this,
                type: `updated`,
                action: e
            })
        }
        )
    }
}
;
function Ke() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: `idle`,
        variables: void 0,
        submittedAt: 0
    }
}
var qe = class extends v {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Set,
        this.#t = new Map,
        this.#n = 0
    }
    #e;
    #t;
    #n;
    build(e, t, n) {
        let r = new Ge({
            client: e,
            mutationCache: this,
            mutationId: ++this.#n,
            options: e.defaultMutationOptions(t),
            state: n
        });
        return this.add(r),
        r
    }
    add(e) {
        this.#e.add(e);
        let t = Je(e);
        if (typeof t == `string`) {
            let n = this.#t.get(t);
            n ? n.push(e) : this.#t.set(t, [e])
        }
        this.notify({
            type: `added`,
            mutation: e
        })
    }
    remove(e) {
        if (this.#e.delete(e)) {
            let t = Je(e);
            if (typeof t == `string`) {
                let n = this.#t.get(t);
                if (n)
                    if (n.length > 1) {
                        let t = n.indexOf(e);
                        t !== -1 && n.splice(t, 1)
                    } else
                        n[0] === e && this.#t.delete(t)
            }
        }
        this.notify({
            type: `removed`,
            mutation: e
        })
    }
    canRun(e) {
        let t = Je(e);
        if (typeof t == `string`) {
            let n = this.#t.get(t)?.find(e => e.state.status === `pending`);
            return !n || n === e
        } else
            return !0
    }
    runNext(e) {
        let t = Je(e);
        return typeof t == `string` ? (this.#t.get(t)?.find(t => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        M.batch( () => {
            this.#e.forEach(e => {
                this.notify({
                    type: `removed`,
                    mutation: e
                })
            }
            ),
            this.#e.clear(),
            this.#t.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(e) {
        let t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(e => re(t, e))
    }
    findAll(e={}) {
        return this.getAll().filter(t => re(e, t))
    }
    notify(e) {
        M.batch( () => {
            this.listeners.forEach(t => {
                t(e)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        let e = this.getAll().filter(e => e.state.isPaused);
        return M.batch( () => Promise.all(e.map(e => e.continue().catch(w))))
    }
}
;
function Je(e) {
    return e.options.scope?.id
}
var Ye = class extends v {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(e, t) {
        super(),
        this.#e = e,
        this.setOptions(t),
        this.bindMethods(),
        this.#i()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(e) {
        let t = this.options;
        this.options = this.#e.defaultMutationOptions(e),
        k(this.options, t) || this.#e.getMutationCache().notify({
            type: `observerOptionsUpdated`,
            mutation: this.#n,
            observer: this
        }),
        t?.mutationKey && this.options.mutationKey && ae(t.mutationKey) !== ae(this.options.mutationKey) ? this.reset() : this.#n?.state.status === `pending` && this.#n.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#n?.removeObserver(this)
    }
    onMutationUpdate(e) {
        this.#i(),
        this.#a(e)
    }
    getCurrentResult() {
        return this.#t
    }
    reset() {
        this.#n?.removeObserver(this),
        this.#n = void 0,
        this.#i(),
        this.#a()
    }
    mutate(e, t) {
        return this.#r = t,
        this.#n?.removeObserver(this),
        this.#n = this.#e.getMutationCache().build(this.#e, this.options),
        this.#n.addObserver(this),
        this.#n.execute(e)
    }
    #i() {
        let e = this.#n?.state ?? Ke();
        this.#t = {
            ...e,
            isPending: e.status === `pending`,
            isSuccess: e.status === `success`,
            isError: e.status === `error`,
            isIdle: e.status === `idle`,
            mutate: this.mutate,
            reset: this.reset
        }
    }
    #a(e) {
        M.batch( () => {
            if (this.#r && this.hasListeners()) {
                let t = this.#t.variables
                  , n = this.#t.context
                  , r = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (e?.type === `success`) {
                    try {
                        this.#r.onSuccess?.(e.data, t, n, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        this.#r.onSettled?.(e.data, null, t, n, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                } else if (e?.type === `error`) {
                    try {
                        this.#r.onError?.(e.error, t, n, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                    try {
                        this.#r.onSettled?.(void 0, e.error, t, n, r)
                    } catch (e) {
                        Promise.reject(e)
                    }
                }
            }
            this.listeners.forEach(e => {
                e(this.#t)
            }
            )
        }
        )
    }
}
  , Xe = class extends v {
    constructor(e={}) {
        super(),
        this.config = e,
        this.#e = new Map
    }
    #e;
    build(e, t, n) {
        let r = t.queryKey
          , i = t.queryHash ?? ie(r, t)
          , a = this.get(i);
        return a || (a = new Oe({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r)
        }),
        this.add(a)),
        a
    }
    add(e) {
        this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e),
        this.notify({
            type: `added`,
            query: e
        }))
    }
    remove(e) {
        let t = this.#e.get(e.queryHash);
        t && (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({
            type: `removed`,
            query: e
        }))
    }
    clear() {
        M.batch( () => {
            this.getAll().forEach(e => {
                this.remove(e)
            }
            )
        }
        )
    }
    get(e) {
        return this.#e.get(e)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(e) {
        let t = {
            exact: !0,
            ...e
        };
        return this.getAll().find(e => ne(t, e))
    }
    findAll(e={}) {
        let t = this.getAll();
        return Object.keys(e).length > 0 ? t.filter(t => ne(e, t)) : t
    }
    notify(e) {
        M.batch( () => {
            this.listeners.forEach(t => {
                t(e)
            }
            )
        }
        )
    }
    onFocus() {
        M.batch( () => {
            this.getAll().forEach(e => {
                e.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        M.batch( () => {
            this.getAll().forEach(e => {
                e.onOnline()
            }
            )
        }
        )
    }
}
  , Ze = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e={}) {
        this.#e = e.queryCache || new Xe,
        this.#t = e.mutationCache || new qe,
        this.#n = e.defaultOptions || {},
        this.#r = new Map,
        this.#i = new Map,
        this.#a = 0
    }
    mount() {
        this.#a++,
        this.#a === 1 && (this.#o = y.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#s = Se.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#a--,
        this.#a === 0 && (this.#o?.(),
        this.#o = void 0,
        this.#s?.(),
        this.#s = void 0)
    }
    isFetching(e) {
        return this.#e.findAll({
            ...e,
            fetchStatus: `fetching`
        }).length
    }
    isMutating(e) {
        return this.#t.findAll({
            ...e,
            status: `pending`
        }).length
    }
    getQueryData(e) {
        let t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state.data
    }
    ensureQueryData(e) {
        let t = this.defaultQueryOptions(e)
          , n = this.#e.build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(E(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return this.#e.findAll(e).map( ({queryKey: e, state: t}) => [e, t.data])
    }
    setQueryData(e, t, n) {
        let r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = this.#e.get(r.queryHash)?.state.data
          , a = ee(t, i);
        if (a !== void 0)
            return this.#e.build(this, r).setData(a, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return M.batch( () => this.#e.findAll(e).map( ({queryKey: e}) => [e, this.setQueryData(e, t, n)]))
    }
    getQueryState(e) {
        let t = this.defaultQueryOptions({
            queryKey: e
        });
        return this.#e.get(t.queryHash)?.state
    }
    removeQueries(e) {
        let t = this.#e;
        M.batch( () => {
            t.findAll(e).forEach(e => {
                t.remove(e)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        let n = this.#e;
        return M.batch( () => (n.findAll(e).forEach(e => {
            e.reset()
        }
        ),
        this.refetchQueries({
            type: `active`,
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        let n = {
            revert: !0,
            ...t
        }
          , r = M.batch( () => this.#e.findAll(e).map(e => e.cancel(n)));
        return Promise.all(r).then(w).catch(w)
    }
    invalidateQueries(e, t={}) {
        return M.batch( () => (this.#e.findAll(e).forEach(e => {
            e.invalidate()
        }
        ),
        e?.refetchType === `none` ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: e?.refetchType ?? e?.type ?? `active`
        }, t)))
    }
    refetchQueries(e, t={}) {
        let n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = M.batch( () => this.#e.findAll(e).filter(e => !e.isDisabled() && !e.isStatic()).map(e => {
            let t = e.fetch(void 0, n);
            return n.throwOnError || (t = t.catch(w)),
            e.state.fetchStatus === `paused` ? Promise.resolve() : t
        }
        ));
        return Promise.all(r).then(w)
    }
    fetchQuery(e) {
        let t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        let n = this.#e.build(this, t);
        return n.isStaleByTime(E(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(w).catch(w)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = ze(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(w).catch(w)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = ze(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return Se.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(e) {
        this.#n = e
    }
    setQueryDefaults(e, t) {
        this.#r.set(ae(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        let t = [...this.#r.values()]
          , n = {};
        return t.forEach(t => {
            oe(e, t.queryKey) && Object.assign(n, t.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        this.#i.set(ae(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        let t = [...this.#i.values()]
          , n = {};
        return t.forEach(t => {
            oe(e, t.mutationKey) && Object.assign(n, t.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        let t = {
            ...this.#n.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash ||= ie(t.queryKey, t),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === me && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e?._defaulted ? e : {
            ...this.#n.mutations,
            ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , Qe = o((e => {
    var t = Symbol.for(`react.transitional.element`)
      , n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
        var i = null;
        if (r !== void 0 && (i = `` + r),
        n.key !== void 0 && (i = `` + n.key),
        `key`in n)
            for (var a in r = {},
            n)
                a !== `key` && (r[a] = n[a]);
        else
            r = n;
        return n = r.ref,
        {
            $$typeof: t,
            type: e,
            key: i,
            ref: n === void 0 ? null : n,
            props: r
        }
    }
    e.Fragment = n,
    e.jsx = r,
    e.jsxs = r
}
))
  , $e = o(( (e, t) => {
    t.exports = Qe()
}
))
  , N = l(d(), 1)
  , P = $e()
  , et = N.createContext(void 0)
  , tt = e => {
    let t = N.useContext(et);
    if (e)
        return e;
    if (!t)
        throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t
}
  , nt = ({client: e, children: t}) => (N.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
(0,
P.jsx)(et.Provider, {
    value: e,
    children: t
}))
  , rt = N.createContext(!1)
  , it = () => N.useContext(rt);
rt.Provider;
function at() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        }
        ,
        reset: () => {
            e = !0
        }
        ,
        isReset: () => e
    }
}
var ot = N.createContext(at())
  , st = () => N.useContext(ot)
  , ct = (e, t, n) => {
    let r = n?.state.error && typeof e.throwOnError == `function` ? ge(e.throwOnError, [n.state.error, n]) : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1))
}
  , lt = e => {
    N.useEffect( () => {
        e.clearReset()
    }
    , [e])
}
  , ut = ({result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i}) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || ge(n, [e.error, r]))
  , dt = e => {
    if (e.suspense) {
        let t = 1e3
          , n = e => e === `static` ? e : Math.max(e ?? t, t)
          , r = e.staleTime;
        e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t))
    }
}
  , ft = (e, t) => e.isLoading && e.isFetching && !t
  , pt = (e, t) => e?.suspense && t.isPending
  , mt = (e, t, n) => t.fetchOptimistic(e).catch( () => {
    n.clearReset()
}
);
function ht(e, t, n) {
    let r = it()
      , i = st()
      , a = tt(n)
      , o = a.defaultQueryOptions(e);
    a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
    let s = a.getQueryCache().get(o.queryHash);
    o._optimisticResults = r ? `isRestoring` : `optimistic`,
    dt(o),
    ct(o, i, s),
    lt(i);
    let c = !a.getQueryCache().get(o.queryHash)
      , [l] = N.useState( () => new t(a,o))
      , u = l.getOptimisticResult(o)
      , d = !r && e.subscribed !== !1;
    if (N.useSyncExternalStore(N.useCallback(e => {
        let t = d ? l.subscribe(M.batchCalls(e)) : w;
        return l.updateResult(),
        t
    }
    , [l, d]), () => l.getCurrentResult(), () => l.getCurrentResult()),
    N.useEffect( () => {
        l.setOptions(o)
    }
    , [o, l]),
    pt(o, u))
        throw mt(o, l, i);
    if (ut({
        result: u,
        errorResetBoundary: i,
        throwOnError: o.throwOnError,
        query: s,
        suspense: o.suspense
    }))
        throw u.error;
    return a.getDefaultOptions().queries?._experimental_afterQuery?.(o, u),
    o.experimental_prefetchInRender && !ve.isServer() && ft(u, r) && (c ? mt(o, l, i) : s?.promise)?.catch(w).finally( () => {
        l.updateResult()
    }
    ),
    o.notifyOnChangeProps ? u : l.trackResult(u)
}
function gt(e, t) {
    return ht(e, Me, t)
}
function _t(e, t) {
    let n = tt(t)
      , [r] = N.useState( () => new Ye(n,e));
    N.useEffect( () => {
        r.setOptions(e)
    }
    , [r, e]);
    let i = N.useSyncExternalStore(N.useCallback(e => r.subscribe(M.batchCalls(e)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult())
      , a = N.useCallback( (e, t) => {
        r.mutate(e, t).catch(w)
    }
    , [r]);
    if (i.error && ge(r.options.throwOnError, [i.error]))
        throw i.error;
    return {
        ...i,
        mutate: a,
        mutateAsync: i.mutate
    }
}
function vt(e, t) {
    return ht(e, We, t)
}
var yt = `modulepreload`
  , bt = function(e) {
    return `/` + e
}
  , xt = {}
  , St = function(e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
        let e = document.getElementsByTagName(`link`)
          , i = document.querySelector(`meta[property=csp-nonce]`)
          , a = i?.nonce || i?.getAttribute(`nonce`);
        function o(e) {
            return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
                status: `fulfilled`,
                value: e
            }), e => ({
                status: `rejected`,
                reason: e
            }))))
        }
        r = o(t.map(t => {
            if (t = bt(t, n),
            t in xt)
                return;
            xt[t] = !0;
            let r = t.endsWith(`.css`)
              , i = r ? `[rel="stylesheet"]` : ``;
            if (n)
                for (let n = e.length - 1; n >= 0; n--) {
                    let i = e[n];
                    if (i.href === t && (!r || i.rel === `stylesheet`))
                        return
                }
            else if (document.querySelector(`link[href="${t}"]${i}`))
                return;
            let o = document.createElement(`link`);
            if (o.rel = r ? `stylesheet` : yt,
            r || (o.as = `script`),
            o.crossOrigin = ``,
            o.href = t,
            a && o.setAttribute(`nonce`, a),
            document.head.appendChild(o),
            r)
                return new Promise( (e, n) => {
                    o.addEventListener(`load`, e),
                    o.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)))
                }
                )
        }
        ))
    }
    function i(e) {
        let t = new Event(`vite:preloadError`,{
            cancelable: !0
        });
        if (t.payload = e,
        window.dispatchEvent(t),
        !t.defaultPrevented)
            throw e
    }
    return r.then(t => {
        for (let e of t || [])
            e.status === `rejected` && i(e.reason);
        return e().catch(i)
    }
    )
}
  , Ct = `popstate`;
function wt(e) {
    return typeof e == `object` && !!e && `pathname`in e && `search`in e && `hash`in e && `state`in e && `key`in e
}
function Tt(e={}) {
    function t(e, t) {
        let n = t.state?.masked
          , {pathname: r, search: i, hash: a} = n || e.location;
        return kt(``, {
            pathname: r,
            search: i,
            hash: a
        }, t.state && t.state.usr || null, t.state && t.state.key || `default`, n ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash
        } : void 0)
    }
    function n(e, t) {
        return typeof t == `string` ? t : At(t)
    }
    return Mt(t, n, null, e)
}
function F(e, t) {
    if (e === !1 || e == null)
        throw Error(t)
}
function Et(e, t) {
    if (!e) {
        typeof console < `u` && console.warn(t);
        try {
            throw Error(t)
        } catch {}
    }
}
function Dt() {
    return Math.random().toString(36).substring(2, 10)
}
function Ot(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t,
        masked: e.unstable_mask ? {
            pathname: e.pathname,
            search: e.search,
            hash: e.hash
        } : void 0
    }
}
function kt(e, t, n=null, r, i) {
    return {
        pathname: typeof e == `string` ? e : e.pathname,
        search: ``,
        hash: ``,
        ...typeof t == `string` ? jt(t) : t,
        state: n,
        key: t && t.key || r || Dt(),
        unstable_mask: i
    }
}
function At({pathname: e=`/`, search: t=``, hash: n=``}) {
    return t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
}
function jt(e) {
    let t = {};
    if (e) {
        let n = e.indexOf(`#`);
        n >= 0 && (t.hash = e.substring(n),
        e = e.substring(0, n));
        let r = e.indexOf(`?`);
        r >= 0 && (t.search = e.substring(r),
        e = e.substring(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function Mt(e, t, n, r={}) {
    let {window: i=document.defaultView, v5Compat: a=!1} = r
      , o = i.history
      , s = `POP`
      , c = null
      , l = u();
    l ?? (l = 0,
    o.replaceState({
        ...o.state,
        idx: l
    }, ``));
    function u() {
        return (o.state || {
            idx: null
        }).idx
    }
    function d() {
        s = `POP`;
        let e = u()
          , t = e == null ? null : e - l;
        l = e,
        c && c({
            action: s,
            location: h.location,
            delta: t
        })
    }
    function f(e, t) {
        s = `PUSH`;
        let r = wt(e) ? e : kt(h.location, e, t);
        n && n(r, e),
        l = u() + 1;
        let d = Ot(r, l)
          , f = h.createHref(r.unstable_mask || r);
        try {
            o.pushState(d, ``, f)
        } catch (e) {
            if (e instanceof DOMException && e.name === `DataCloneError`)
                throw e;
            i.location.assign(f)
        }
        a && c && c({
            action: s,
            location: h.location,
            delta: 1
        })
    }
    function p(e, t) {
        s = `REPLACE`;
        let r = wt(e) ? e : kt(h.location, e, t);
        n && n(r, e),
        l = u();
        let i = Ot(r, l)
          , d = h.createHref(r.unstable_mask || r);
        o.replaceState(i, ``, d),
        a && c && c({
            action: s,
            location: h.location,
            delta: 0
        })
    }
    function m(e) {
        return Nt(e)
    }
    let h = {
        get action() {
            return s
        },
        get location() {
            return e(i, o)
        },
        listen(e) {
            if (c)
                throw Error(`A history only accepts one active listener`);
            return i.addEventListener(Ct, d),
            c = e,
            () => {
                i.removeEventListener(Ct, d),
                c = null
            }
        },
        createHref(e) {
            return t(i, e)
        },
        createURL: m,
        encodeLocation(e) {
            let t = m(e);
            return {
                pathname: t.pathname,
                search: t.search,
                hash: t.hash
            }
        },
        push: f,
        replace: p,
        go(e) {
            return o.go(e)
        }
    };
    return h
}
function Nt(e, t=!1) {
    let n = `http://localhost`;
    typeof window < `u` && (n = window.location.origin === `null` ? window.location.href : window.location.origin),
    F(n, `No window.location.(origin|href) available to create URL`);
    let r = typeof e == `string` ? e : At(e);
    return r = r.replace(/ $/, `%20`),
    !t && r.startsWith(`//`) && (r = n + r),
    new URL(r,n)
}
function Pt(e, t, n=`/`) {
    return Ft(e, t, n, !1)
}
function Ft(e, t, n, r) {
    let i = $t((typeof t == `string` ? jt(t) : t).pathname || `/`, n);
    if (i == null)
        return null;
    let a = Lt(e);
    zt(a);
    let o = null;
    for (let e = 0; o == null && e < a.length; ++e) {
        let t = Qt(i);
        o = Yt(a[e], t, r)
    }
    return o
}
function It(e, t) {
    let {route: n, pathname: r, params: i} = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        loaderData: t[n.id],
        handle: n.handle
    }
}
function Lt(e, t=[], n=[], r=``, i=!1) {
    let a = (e, a, o=i, s) => {
        let c = {
            relativePath: s === void 0 ? e.path || `` : s,
            caseSensitive: e.caseSensitive === !0,
            childrenIndex: a,
            route: e
        };
        if (c.relativePath.startsWith(`/`)) {
            if (!c.relativePath.startsWith(r) && o)
                return;
            F(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            c.relativePath = c.relativePath.slice(r.length)
        }
        let l = cn([r, c.relativePath])
          , u = n.concat(c);
        e.children && e.children.length > 0 && (F(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`),
        Lt(e.children, t, u, l, o)),
        !(e.path == null && !e.index) && t.push({
            path: l,
            score: qt(l, e.index),
            routesMeta: u
        })
    }
    ;
    return e.forEach( (e, t) => {
        if (e.path === `` || !e.path?.includes(`?`))
            a(e, t);
        else
            for (let n of Rt(e.path))
                a(e, t, !0, n)
    }
    ),
    t
}
function Rt(e) {
    let t = e.split(`/`);
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith(`?`)
      , a = n.replace(/\?$/, ``);
    if (r.length === 0)
        return i ? [a, ``] : [a];
    let o = Rt(r.join(`/`))
      , s = [];
    return s.push(...o.map(e => e === `` ? a : [a, e].join(`/`))),
    i && s.push(...o),
    s.map(t => e.startsWith(`/`) && t === `` ? `/` : t)
}
function zt(e) {
    e.sort( (e, t) => e.score === t.score ? Jt(e.routesMeta.map(e => e.childrenIndex), t.routesMeta.map(e => e.childrenIndex)) : t.score - e.score)
}
var Bt = /^:[\w-]+$/
  , Vt = 3
  , Ht = 2
  , Ut = 1
  , Wt = 10
  , Gt = -2
  , Kt = e => e === `*`;
function qt(e, t) {
    let n = e.split(`/`)
      , r = n.length;
    return n.some(Kt) && (r += Gt),
    t && (r += Ht),
    n.filter(e => !Kt(e)).reduce( (e, t) => e + (Bt.test(t) ? Vt : t === `` ? Ut : Wt), r)
}
function Jt(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Yt(e, t, n=!1) {
    let {routesMeta: r} = e
      , i = {}
      , a = `/`
      , o = [];
    for (let e = 0; e < r.length; ++e) {
        let s = r[e]
          , c = e === r.length - 1
          , l = a === `/` ? t : t.slice(a.length) || `/`
          , u = Xt({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: c
        }, l)
          , d = s.route;
        if (!u && c && n && !r[r.length - 1].route.index && (u = Xt({
            path: s.relativePath,
            caseSensitive: s.caseSensitive,
            end: !1
        }, l)),
        !u)
            return null;
        Object.assign(i, u.params),
        o.push({
            params: i,
            pathname: cn([a, u.pathname]),
            pathnameBase: ln(cn([a, u.pathnameBase])),
            route: d
        }),
        u.pathnameBase !== `/` && (a = cn([a, u.pathnameBase]))
    }
    return o
}
function Xt(e, t) {
    typeof e == `string` && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Zt(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let a = i[0]
      , o = a.replace(/(.)\/+$/, `$1`)
      , s = i.slice(1);
    return {
        params: r.reduce( (e, {paramName: t, isOptional: n}, r) => {
            if (t === `*`) {
                let e = s[r] || ``;
                o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`)
            }
            let i = s[r];
            return n && !i ? e[t] = void 0 : e[t] = (i || ``).replace(/%2F/g, `/`),
            e
        }
        , {}),
        pathname: a,
        pathnameBase: o,
        pattern: e
    }
}
function Zt(e, t=!1, n=!0) {
    Et(e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`);
    let r = []
      , i = `^` + e.replace(/\/*\*?$/, ``).replace(/^\/*/, `/`).replace(/[\\.*+^${}|()[\]]/g, `\\$&`).replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
        if (r.push({
            paramName: t,
            isOptional: n != null
        }),
        n) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`
        }
        return `/([^\\/]+)`
    }
    ).replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
    return e.endsWith(`*`) ? (r.push({
        paramName: `*`
    }),
    i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`) : n ? i += `\\/*$` : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i,t ? void 0 : `i`), r]
}
function Qt(e) {
    try {
        return e.split(`/`).map(e => decodeURIComponent(e).replace(/\//g, `%2F`)).join(`/`)
    } catch (t) {
        return Et(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),
        e
    }
}
function $t(e, t) {
    if (t === `/`)
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith(`/`) ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== `/` ? null : e.slice(n) || `/`
}
var en = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function tn(e, t=`/`) {
    let {pathname: n, search: r=``, hash: i=``} = typeof e == `string` ? jt(e) : e, a;
    return n ? (n = n.replace(/\/\/+/g, `/`),
    a = n.startsWith(`/`) ? nn(n.substring(1), `/`) : nn(n, t)) : a = t,
    {
        pathname: a,
        search: un(r),
        hash: dn(i)
    }
}
function nn(e, t) {
    let n = t.replace(/\/+$/, ``).split(`/`);
    return e.split(`/`).forEach(e => {
        e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e)
    }
    ),
    n.length > 1 ? n.join(`/`) : `/`
}
function rn(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function an(e) {
    return e.filter( (e, t) => t === 0 || e.route.path && e.route.path.length > 0)
}
function on(e) {
    let t = an(e);
    return t.map( (e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)
}
function sn(e, t, n, r=!1) {
    let i;
    typeof e == `string` ? i = jt(e) : (i = {
        ...e
    },
    F(!i.pathname || !i.pathname.includes(`?`), rn(`?`, `pathname`, `search`, i)),
    F(!i.pathname || !i.pathname.includes(`#`), rn(`#`, `pathname`, `hash`, i)),
    F(!i.search || !i.search.includes(`#`), rn(`#`, `search`, `hash`, i)));
    let a = e === `` || i.pathname === ``, o = a ? `/` : i.pathname, s;
    if (o == null)
        s = n;
    else {
        let e = t.length - 1;
        if (!r && o.startsWith(`..`)) {
            let t = o.split(`/`);
            for (; t[0] === `..`; )
                t.shift(),
                --e;
            i.pathname = t.join(`/`)
        }
        s = e >= 0 ? t[e] : `/`
    }
    let c = tn(i, s)
      , l = o && o !== `/` && o.endsWith(`/`)
      , u = (a || o === `.`) && n.endsWith(`/`);
    return !c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`),
    c
}
var cn = e => e.join(`/`).replace(/\/\/+/g, `/`)
  , ln = e => e.replace(/\/+$/, ``).replace(/^\/*/, `/`)
  , un = e => !e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e
  , dn = e => !e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e
  , fn = class {
    constructor(e, t, n, r=!1) {
        this.status = e,
        this.statusText = t || ``,
        this.internal = r,
        n instanceof Error ? (this.data = n.toString(),
        this.error = n) : this.data = n
    }
}
;
function pn(e) {
    return e != null && typeof e.status == `number` && typeof e.statusText == `string` && typeof e.internal == `boolean` && `data`in e
}
function mn(e) {
    return e.map(e => e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g, `/`) || `/`
}
var hn = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
function gn(e, t) {
    let n = e;
    if (typeof n != `string` || !en.test(n))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: n
        };
    let r = n
      , i = !1;
    if (hn)
        try {
            let e = new URL(window.location.href)
              , r = n.startsWith(`//`) ? new URL(e.protocol + n) : new URL(n)
              , a = $t(r.pathname, t);
            r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0
        } catch {
            Et(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: r,
        isExternal: i,
        to: n
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var _n = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(_n);
var vn = [`GET`, ..._n];
new Set(vn);
var yn = N.createContext(null);
yn.displayName = `DataRouter`;
var bn = N.createContext(null);
bn.displayName = `DataRouterState`;
var xn = N.createContext(!1);
function Sn() {
    return N.useContext(xn)
}
var Cn = N.createContext({
    isTransitioning: !1
});
Cn.displayName = `ViewTransition`;
var wn = N.createContext(new Map);
wn.displayName = `Fetchers`;
var Tn = N.createContext(null);
Tn.displayName = `Await`;
var En = N.createContext(null);
En.displayName = `Navigation`;
var Dn = N.createContext(null);
Dn.displayName = `Location`;
var On = N.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
On.displayName = `Route`;
var kn = N.createContext(null);
kn.displayName = `RouteError`;
var An = `REACT_ROUTER_ERROR`
  , jn = `REDIRECT`
  , Mn = `ROUTE_ERROR_RESPONSE`;
function Nn(e) {
    if (e.startsWith(`${An}:${jn}:{`))
        try {
            let t = JSON.parse(e.slice(28));
            if (typeof t == `object` && t && typeof t.status == `number` && typeof t.statusText == `string` && typeof t.location == `string` && typeof t.reloadDocument == `boolean` && typeof t.replace == `boolean`)
                return t
        } catch {}
}
function Pn(e) {
    if (e.startsWith(`${An}:${Mn}:{`))
        try {
            let t = JSON.parse(e.slice(40));
            if (typeof t == `object` && t && typeof t.status == `number` && typeof t.statusText == `string`)
                return new fn(t.status,t.statusText,t.data)
        } catch {}
}
function Fn(e, {relative: t}={}) {
    F(In(), `useHref() may be used only in the context of a <Router> component.`);
    let {basename: n, navigator: r} = N.useContext(En)
      , {hash: i, pathname: a, search: o} = Gn(e, {
        relative: t
    })
      , s = a;
    return n !== `/` && (s = a === `/` ? n : cn([n, a])),
    r.createHref({
        pathname: s,
        search: o,
        hash: i
    })
}
function In() {
    return N.useContext(Dn) != null
}
function Ln() {
    return F(In(), `useLocation() may be used only in the context of a <Router> component.`),
    N.useContext(Dn).location
}
var Rn = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function zn(e) {
    N.useContext(En).static || N.useLayoutEffect(e)
}
function Bn() {
    let {isDataRoute: e} = N.useContext(On);
    return e ? ur() : Vn()
}
function Vn() {
    F(In(), `useNavigate() may be used only in the context of a <Router> component.`);
    let e = N.useContext(yn)
      , {basename: t, navigator: n} = N.useContext(En)
      , {matches: r} = N.useContext(On)
      , {pathname: i} = Ln()
      , a = JSON.stringify(on(r))
      , o = N.useRef(!1);
    return zn( () => {
        o.current = !0
    }
    ),
    N.useCallback( (r, s={}) => {
        if (Et(o.current, Rn),
        !o.current)
            return;
        if (typeof r == `number`) {
            n.go(r);
            return
        }
        let c = sn(r, JSON.parse(a), i, s.relative === `path`);
        e == null && t !== `/` && (c.pathname = c.pathname === `/` ? t : cn([t, c.pathname])),
        (s.replace ? n.replace : n.push)(c, s.state, s)
    }
    , [t, n, a, i, e])
}
var Hn = N.createContext(null);
function Un(e) {
    let t = N.useContext(On).outlet;
    return N.useMemo( () => t && N.createElement(Hn.Provider, {
        value: e
    }, t), [t, e])
}
function Wn() {
    let {matches: e} = N.useContext(On)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function Gn(e, {relative: t}={}) {
    let {matches: n} = N.useContext(On)
      , {pathname: r} = Ln()
      , i = JSON.stringify(on(n));
    return N.useMemo( () => sn(e, JSON.parse(i), r, t === `path`), [e, i, r, t])
}
function Kn(e, t) {
    return qn(e, t)
}
function qn(e, t, n) {
    F(In(), `useRoutes() may be used only in the context of a <Router> component.`);
    let {navigator: r} = N.useContext(En)
      , {matches: i} = N.useContext(On)
      , a = i[i.length - 1]
      , o = a ? a.params : {}
      , s = a ? a.pathname : `/`
      , c = a ? a.pathnameBase : `/`
      , l = a && a.route;
    {
        let e = l && l.path || ``;
        fr(s, !l || e.endsWith(`*`) || e.endsWith(`*?`), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`)
    }
    let u = Ln(), d;
    if (t) {
        let e = typeof t == `string` ? jt(t) : t;
        F(c === `/` || e.pathname?.startsWith(c), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),
        d = e
    } else
        d = u;
    let f = d.pathname || `/`
      , p = f;
    if (c !== `/`) {
        let e = c.replace(/^\//, ``).split(`/`);
        p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`)
    }
    let m = Pt(e, {
        pathname: p
    });
    Et(l || m != null, `No routes matched location "${d.pathname}${d.search}${d.hash}" `),
    Et(m == null || m[m.length - 1].route.element !== void 0 || m[m.length - 1].route.Component !== void 0 || m[m.length - 1].route.lazy !== void 0, `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let h = er(m && m.map(e => Object.assign({}, e, {
        params: Object.assign({}, o, e.params),
        pathname: cn([c, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)).pathname : e.pathname]),
        pathnameBase: e.pathnameBase === `/` ? c : cn([c, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, `%25`).replace(/\?/g, `%3F`).replace(/#/g, `%23`)).pathname : e.pathnameBase])
    })), i, n);
    return t && h ? N.createElement(Dn.Provider, {
        value: {
            location: {
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`,
                unstable_mask: void 0,
                ...d
            },
            navigationType: `POP`
        }
    }, h) : h
}
function Jn() {
    let e = lr()
      , t = pn(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = `rgba(200,200,200, 0.5)`
      , i = {
        padding: `0.5rem`,
        backgroundColor: r
    }
      , a = {
        padding: `2px 4px`,
        backgroundColor: r
    }
      , o = null;
    return console.error(`Error handled by React Router default ErrorBoundary:`, e),
    o = N.createElement(N.Fragment, null, N.createElement(`p`, null, `💿 Hey developer 👋`), N.createElement(`p`, null, `You can provide a way better UX than this when your app throws errors by providing your own `, N.createElement(`code`, {
        style: a
    }, `ErrorBoundary`), ` or`, ` `, N.createElement(`code`, {
        style: a
    }, `errorElement`), ` prop on your route.`)),
    N.createElement(N.Fragment, null, N.createElement(`h2`, null, `Unexpected Application Error!`), N.createElement(`h3`, {
        style: {
            fontStyle: `italic`
        }
    }, t), n ? N.createElement(`pre`, {
        style: i
    }, n) : null, o)
}
var Yn = N.createElement(Jn, null)
  , Xn = class extends N.Component {
    constructor(e) {
        super(e),
        this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error
        }
    }
    static getDerivedStateFromError(e) {
        return {
            error: e
        }
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || t.revalidation !== `idle` && e.revalidation === `idle` ? {
            error: e.error,
            location: e.location,
            revalidation: e.revalidation
        } : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation
        }
    }
    componentDidCatch(e, t) {
        this.props.onError ? this.props.onError(e, t) : console.error(`React Router caught the following error during render`, e)
    }
    render() {
        let e = this.state.error;
        if (this.context && typeof e == `object` && e && `digest`in e && typeof e.digest == `string`) {
            let t = Pn(e.digest);
            t && (e = t)
        }
        let t = e === void 0 ? this.props.children : N.createElement(On.Provider, {
            value: this.props.routeContext
        }, N.createElement(kn.Provider, {
            value: e,
            children: this.props.component
        }));
        return this.context ? N.createElement(Qn, {
            error: e
        }, t) : t
    }
}
;
Xn.contextType = xn;
var Zn = new WeakMap;
function Qn({children: e, error: t}) {
    let {basename: n} = N.useContext(En);
    if (typeof t == `object` && t && `digest`in t && typeof t.digest == `string`) {
        let e = Nn(t.digest);
        if (e) {
            let r = Zn.get(t);
            if (r)
                throw r;
            let i = gn(e.location, n);
            if (hn && !Zn.get(t))
                if (i.isExternal || e.reloadDocument)
                    window.location.href = i.absoluteURL || i.to;
                else {
                    let n = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(i.to, {
                        replace: e.replace
                    }));
                    throw Zn.set(t, n),
                    n
                }
            return N.createElement(`meta`, {
                httpEquiv: `refresh`,
                content: `0;url=${i.absoluteURL || i.to}`
            })
        }
    }
    return e
}
function $n({routeContext: e, match: t, children: n}) {
    let r = N.useContext(yn);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    N.createElement(On.Provider, {
        value: e
    }, n)
}
function er(e, t=[], n) {
    let r = n?.state;
    if (e == null) {
        if (!r)
            return null;
        if (r.errors)
            e = r.matches;
        else if (t.length === 0 && !r.initialized && r.matches.length > 0)
            e = r.matches;
        else
            return null
    }
    let i = e
      , a = r?.errors;
    if (a != null) {
        let e = i.findIndex(e => e.route.id && a?.[e.route.id] !== void 0);
        F(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),
        i = i.slice(0, Math.min(i.length, e + 1))
    }
    let o = !1
      , s = -1;
    if (n && r) {
        o = r.renderFallback;
        for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
            t.route.id) {
                let {loaderData: e, errors: a} = r
                  , c = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
                if (t.route.lazy || c) {
                    n.isStatic && (o = !0),
                    i = s >= 0 ? i.slice(0, s + 1) : [i[0]];
                    break
                }
            }
        }
    }
    let c = n?.onError
      , l = r && c ? (e, t) => {
        c(e, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: mn(r.matches),
            errorInfo: t
        })
    }
    : void 0;
    return i.reduceRight( (e, n, c) => {
        let u, d = !1, f = null, p = null;
        r && (u = a && n.route.id ? a[n.route.id] : void 0,
        f = n.route.errorElement || Yn,
        o && (s < 0 && c === 0 ? (fr(`route-fallback`, !1, "No `HydrateFallback` element provided to render during initial hydration"),
        d = !0,
        p = null) : s === c && (d = !0,
        p = n.route.hydrateFallbackElement || null)));
        let m = t.concat(i.slice(0, c + 1))
          , h = () => {
            let t;
            return t = u ? f : d ? p : n.route.Component ? N.createElement(n.route.Component, null) : n.route.element ? n.route.element : e,
            N.createElement($n, {
                match: n,
                routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: r != null
                },
                children: t
            })
        }
        ;
        return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0) ? N.createElement(Xn, {
            location: r.location,
            revalidation: r.revalidation,
            component: f,
            error: u,
            children: h(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            },
            onError: l
        }) : h()
    }
    , null)
}
function tr(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function nr(e) {
    let t = N.useContext(yn);
    return F(t, tr(e)),
    t
}
function rr(e) {
    let t = N.useContext(bn);
    return F(t, tr(e)),
    t
}
function ir(e) {
    let t = N.useContext(On);
    return F(t, tr(e)),
    t
}
function ar(e) {
    let t = ir(e)
      , n = t.matches[t.matches.length - 1];
    return F(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
}
function or() {
    return ar(`useRouteId`)
}
function sr() {
    return rr(`useNavigation`).navigation
}
function cr() {
    let {matches: e, loaderData: t} = rr(`useMatches`);
    return N.useMemo( () => e.map(e => It(e, t)), [e, t])
}
function lr() {
    let e = N.useContext(kn)
      , t = rr(`useRouteError`)
      , n = ar(`useRouteError`);
    return e === void 0 ? t.errors?.[n] : e
}
function ur() {
    let {router: e} = nr(`useNavigate`)
      , t = ar(`useNavigate`)
      , n = N.useRef(!1);
    return zn( () => {
        n.current = !0
    }
    ),
    N.useCallback(async (r, i={}) => {
        Et(n.current, Rn),
        n.current && (typeof r == `number` ? await e.navigate(r) : await e.navigate(r, {
            fromRouteId: t,
            ...i
        }))
    }
    , [e, t])
}
var dr = {};
function fr(e, t, n) {
    !t && !dr[e] && (dr[e] = !0,
    Et(!1, n))
}
N.useOptimistic,
N.memo(pr);
function pr({routes: e, future: t, state: n, isStatic: r, onError: i}) {
    return qn(e, void 0, {
        state: n,
        isStatic: r,
        onError: i,
        future: t
    })
}
function mr({to: e, replace: t, state: n, relative: r}) {
    F(In(), `<Navigate> may be used only in the context of a <Router> component.`);
    let {static: i} = N.useContext(En);
    Et(!i, `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);
    let {matches: a} = N.useContext(On)
      , {pathname: o} = Ln()
      , s = Bn()
      , c = sn(e, on(a), o, r === `path`)
      , l = JSON.stringify(c);
    return N.useEffect( () => {
        s(JSON.parse(l), {
            replace: t,
            state: n,
            relative: r
        })
    }
    , [s, l, r, t, n]),
    null
}
function hr(e) {
    return Un(e.context)
}
function gr(e) {
    F(!1, `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)
}
function _r({basename: e=`/`, children: t=null, location: n, navigationType: r=`POP`, navigator: i, static: a=!1, unstable_useTransitions: o}) {
    F(!In(), `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);
    let s = e.replace(/^\/*/, `/`)
      , c = N.useMemo( () => ({
        basename: s,
        navigator: i,
        static: a,
        unstable_useTransitions: o,
        future: {}
    }), [s, i, a, o]);
    typeof n == `string` && (n = jt(n));
    let {pathname: l=`/`, search: u=``, hash: d=``, state: f=null, key: p=`default`, unstable_mask: m} = n
      , h = N.useMemo( () => {
        let e = $t(l, s);
        return e == null ? null : {
            location: {
                pathname: e,
                search: u,
                hash: d,
                state: f,
                key: p,
                unstable_mask: m
            },
            navigationType: r
        }
    }
    , [s, l, u, d, f, p, r, m]);
    return Et(h != null, `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),
    h == null ? null : N.createElement(En.Provider, {
        value: c
    }, N.createElement(Dn.Provider, {
        children: t,
        value: h
    }))
}
function vr({children: e, location: t}) {
    return Kn(yr(e), t)
}
N.Component;
function yr(e, t=[]) {
    let n = [];
    return N.Children.forEach(e, (e, r) => {
        if (!N.isValidElement(e))
            return;
        let i = [...t, r];
        if (e.type === N.Fragment) {
            n.push.apply(n, yr(e.props.children, i));
            return
        }
        F(e.type === gr, `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        F(!e.props.index || !e.props.children, `An index route cannot have child routes.`);
        let a = {
            id: e.props.id || i.join(`-`),
            caseSensitive: e.props.caseSensitive,
            element: e.props.element,
            Component: e.props.Component,
            index: e.props.index,
            path: e.props.path,
            middleware: e.props.middleware,
            loader: e.props.loader,
            action: e.props.action,
            hydrateFallbackElement: e.props.hydrateFallbackElement,
            HydrateFallback: e.props.HydrateFallback,
            errorElement: e.props.errorElement,
            ErrorBoundary: e.props.ErrorBoundary,
            hasErrorBoundary: e.props.hasErrorBoundary === !0 || e.props.ErrorBoundary != null || e.props.errorElement != null,
            shouldRevalidate: e.props.shouldRevalidate,
            handle: e.props.handle,
            lazy: e.props.lazy
        };
        e.props.children && (a.children = yr(e.props.children, i)),
        n.push(a)
    }
    ),
    n
}
var br = `get`
  , xr = `application/x-www-form-urlencoded`;
function Sr(e) {
    return typeof HTMLElement < `u` && e instanceof HTMLElement
}
function Cr(e) {
    return Sr(e) && e.tagName.toLowerCase() === `button`
}
function wr(e) {
    return Sr(e) && e.tagName.toLowerCase() === `form`
}
function Tr(e) {
    return Sr(e) && e.tagName.toLowerCase() === `input`
}
function Er(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Dr(e, t) {
    return e.button === 0 && (!t || t === `_self`) && !Er(e)
}
function Or(e=``) {
    return new URLSearchParams(typeof e == `string` || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce( (t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(e => [n, e]) : [[n, r]])
    }
    , []))
}
function kr(e, t) {
    let n = Or(e);
    return t && t.forEach( (e, r) => {
        n.has(r) || t.getAll(r).forEach(e => {
            n.append(r, e)
        }
        )
    }
    ),
    n
}
var Ar = null;
function jr() {
    if (Ar === null)
        try {
            new FormData(document.createElement(`form`),0),
            Ar = !1
        } catch {
            Ar = !0
        }
    return Ar
}
var Mr = new Set([`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`]);
function Nr(e) {
    return e != null && !Mr.has(e) ? (Et(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xr}"`),
    null) : e
}
function Pr(e, t) {
    let n, r, i, a, o;
    if (wr(e)) {
        let o = e.getAttribute(`action`);
        r = o ? $t(o, t) : null,
        n = e.getAttribute(`method`) || br,
        i = Nr(e.getAttribute(`enctype`)) || xr,
        a = new FormData(e)
    } else if (Cr(e) || Tr(e) && (e.type === `submit` || e.type === `image`)) {
        let o = e.form;
        if (o == null)
            throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);
        let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
        if (r = s ? $t(s, t) : null,
        n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || br,
        i = Nr(e.getAttribute(`formenctype`)) || Nr(o.getAttribute(`enctype`)) || xr,
        a = new FormData(o,e),
        !jr()) {
            let {name: t, type: n, value: r} = e;
            if (n === `image`) {
                let e = t ? `${t}.` : ``;
                a.append(`${e}x`, `0`),
                a.append(`${e}y`, `0`)
            } else
                t && a.append(t, r)
        }
    } else if (Sr(e))
        throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
    else
        n = br,
        r = null,
        i = xr,
        o = e;
    return a && i === `text/plain` && (o = a,
    a = void 0),
    {
        action: r,
        method: n.toLowerCase(),
        encType: i,
        formData: a,
        body: o
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Fr = {
    "&": `\\u0026`,
    ">": `\\u003e`,
    "<": `\\u003c`,
    "\u2028": `\\u2028`,
    "\u2029": `\\u2029`
}
  , Ir = /[&><\u2028\u2029]/g;
function Lr(e) {
    return e.replace(Ir, e => Fr[e])
}
function Rr(e, t) {
    if (e === !1 || e == null)
        throw Error(t)
}
function zr(e, t, n, r) {
    let i = typeof e == `string` ? new URL(e,typeof window > `u` ? `server://singlefetch/` : window.location.origin) : e;
    return n ? i.pathname.endsWith(`/`) ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === `/` ? i.pathname = `_root.${r}` : t && $t(i.pathname, t) === `/` ? i.pathname = `${t.replace(/\/$/, ``)}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, ``)}.${r}`,
    i
}
async function Br(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let n = await St( () => import(e.module), []);
        return t[e.id] = n,
        n
    } catch (t) {
        return console.error(`Error loading route module \`${e.module}\`, reloading page...`),
        console.error(t),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function Vr(e) {
    return e != null && typeof e.page == `string`
}
function Hr(e) {
    return e == null ? !1 : e.href == null ? e.rel === `preload` && typeof e.imageSrcSet == `string` && typeof e.imageSizes == `string` : typeof e.rel == `string` && typeof e.href == `string`
}
async function Ur(e, t, n) {
    return Jr((await Promise.all(e.map(async e => {
        let r = t.routes[e.route.id];
        if (r) {
            let e = await Br(r, n);
            return e.links ? e.links() : []
        }
        return []
    }
    ))).flat(1).filter(Hr).filter(e => e.rel === `stylesheet` || e.rel === `preload`).map(e => e.rel === `stylesheet` ? {
        ...e,
        rel: `prefetch`,
        as: `style`
    } : {
        ...e,
        rel: `prefetch`
    }))
}
function Wr(e, t, n, r, i, a) {
    let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0
      , s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`];
    return a === `assets` ? t.filter( (e, t) => o(e, t) || s(e, t)) : a === `data` ? t.filter( (t, a) => {
        let c = r.routes[t.route.id];
        if (!c || !c.hasLoader)
            return !1;
        if (o(t, a) || s(t, a))
            return !0;
        if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
                currentUrl: new URL(i.pathname + i.search + i.hash,window.origin),
                currentParams: n[0]?.params || {},
                nextUrl: new URL(e,window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0
            });
            if (typeof r == `boolean`)
                return r
        }
        return !0
    }
    ) : []
}
function Gr(e, t, {includeHydrateFallback: n}={}) {
    return Kr(e.map(e => {
        let r = t.routes[e.route.id];
        if (!r)
            return [];
        let i = [r.module];
        return r.clientActionModule && (i = i.concat(r.clientActionModule)),
        r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
        n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)),
        r.imports && (i = i.concat(r.imports)),
        i
    }
    ).flat(1))
}
function Kr(e) {
    return [...new Set(e)]
}
function qr(e) {
    let t = {}
      , n = Object.keys(e).sort();
    for (let r of n)
        t[r] = e[r];
    return t
}
function Jr(e, t) {
    let n = new Set
      , r = new Set(t);
    return e.reduce( (e, i) => {
        if (t && !Vr(i) && i.as === `script` && i.href && r.has(i.href))
            return e;
        let a = JSON.stringify(qr(i));
        return n.has(a) || (n.add(a),
        e.push({
            key: a,
            link: i
        })),
        e
    }
    , [])
}
function Yr() {
    let e = N.useContext(yn);
    return Rr(e, `You must render this element inside a <DataRouterContext.Provider> element`),
    e
}
function Xr() {
    let e = N.useContext(bn);
    return Rr(e, `You must render this element inside a <DataRouterStateContext.Provider> element`),
    e
}
var Zr = N.createContext(void 0);
Zr.displayName = `FrameworkContext`;
function Qr() {
    let e = N.useContext(Zr);
    return Rr(e, `You must render this element inside a <HydratedRouter> element`),
    e
}
function $r(e, t) {
    let n = N.useContext(Zr)
      , [r,i] = N.useState(!1)
      , [a,o] = N.useState(!1)
      , {onFocus: s, onBlur: c, onMouseEnter: l, onMouseLeave: u, onTouchStart: d} = t
      , f = N.useRef(null);
    N.useEffect( () => {
        if (e === `render` && o(!0),
        e === `viewport`) {
            let e = new IntersectionObserver(e => {
                e.forEach(e => {
                    o(e.isIntersecting)
                }
                )
            }
            ,{
                threshold: .5
            });
            return f.current && e.observe(f.current),
            () => {
                e.disconnect()
            }
        }
    }
    , [e]),
    N.useEffect( () => {
        if (r) {
            let e = setTimeout( () => {
                o(!0)
            }
            , 100);
            return () => {
                clearTimeout(e)
            }
        }
    }
    , [r]);
    let p = () => {
        i(!0)
    }
      , m = () => {
        i(!1),
        o(!1)
    }
    ;
    return n ? e === `intent` ? [a, f, {
        onFocus: ei(s, p),
        onBlur: ei(c, m),
        onMouseEnter: ei(l, p),
        onMouseLeave: ei(u, m),
        onTouchStart: ei(d, p)
    }] : [a, f, {}] : [!1, f, {}]
}
function ei(e, t) {
    return n => {
        e && e(n),
        n.defaultPrevented || t(n)
    }
}
function ti({page: e, ...t}) {
    let n = Sn()
      , {router: r} = Yr()
      , i = N.useMemo( () => Pt(r.routes, e, r.basename), [r.routes, e, r.basename]);
    return i ? n ? N.createElement(ri, {
        page: e,
        matches: i,
        ...t
    }) : N.createElement(ii, {
        page: e,
        matches: i,
        ...t
    }) : null
}
function ni(e) {
    let {manifest: t, routeModules: n} = Qr()
      , [r,i] = N.useState([]);
    return N.useEffect( () => {
        let r = !1;
        return Ur(e, t, n).then(e => {
            r || i(e)
        }
        ),
        () => {
            r = !0
        }
    }
    , [e, t, n]),
    r
}
function ri({page: e, matches: t, ...n}) {
    let r = Ln()
      , {future: i} = Qr()
      , {basename: a} = Yr()
      , o = N.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let n = zr(e, a, i.unstable_trailingSlashAwareDataRequests, `rsc`)
          , o = !1
          , s = [];
        for (let e of t)
            typeof e.route.shouldRevalidate == `function` ? o = !0 : s.push(e.route.id);
        return o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
    }
    , [a, i.unstable_trailingSlashAwareDataRequests, e, r, t]);
    return N.createElement(N.Fragment, null, o.map(e => N.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
    })))
}
function ii({page: e, matches: t, ...n}) {
    let r = Ln()
      , {future: i, manifest: a, routeModules: o} = Qr()
      , {basename: s} = Yr()
      , {loaderData: c, matches: l} = Xr()
      , u = N.useMemo( () => Wr(e, t, l, a, r, `data`), [e, t, l, a, r])
      , d = N.useMemo( () => Wr(e, t, l, a, r, `assets`), [e, t, l, a, r])
      , f = N.useMemo( () => {
        if (e === r.pathname + r.search + r.hash)
            return [];
        let n = new Set
          , l = !1;
        if (t.forEach(e => {
            let t = a.routes[e.route.id];
            !t || !t.hasLoader || (!u.some(t => t.route.id === e.route.id) && e.route.id in c && o[e.route.id]?.shouldRevalidate || t.hasClientLoader ? l = !0 : n.add(e.route.id))
        }
        ),
        n.size === 0)
            return [];
        let d = zr(e, s, i.unstable_trailingSlashAwareDataRequests, `data`);
        return l && n.size > 0 && d.searchParams.set(`_routes`, t.filter(e => n.has(e.route.id)).map(e => e.route.id).join(`,`)),
        [d.pathname + d.search]
    }
    , [s, i.unstable_trailingSlashAwareDataRequests, c, r, a, u, t, e, o])
      , p = N.useMemo( () => Gr(d, a), [d, a])
      , m = ni(d);
    return N.createElement(N.Fragment, null, f.map(e => N.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n
    })), p.map(e => N.createElement(`link`, {
        key: e,
        rel: `modulepreload`,
        href: e,
        ...n
    })), m.map( ({key: e, link: t}) => N.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin
    })))
}
function ai(...e) {
    return t => {
        e.forEach(e => {
            typeof e == `function` ? e(t) : e != null && (e.current = t)
        }
        )
    }
}
N.Component;
var oi = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0;
try {
    oi && (window.__reactRouterVersion = `7.14.0`)
} catch {}
function si({basename: e, children: t, unstable_useTransitions: n, window: r}) {
    let i = N.useRef();
    i.current ??= Tt({
        window: r,
        v5Compat: !0
    });
    let a = i.current
      , [o,s] = N.useState({
        action: a.action,
        location: a.location
    })
      , c = N.useCallback(e => {
        n === !1 ? s(e) : N.startTransition( () => s(e))
    }
    , [n]);
    return N.useLayoutEffect( () => a.listen(c), [a, c]),
    N.createElement(_r, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: a,
        unstable_useTransitions: n
    })
}
function ci({basename: e, children: t, history: n, unstable_useTransitions: r}) {
    let[i,a] = N.useState({
        action: n.action,
        location: n.location
    })
      , o = N.useCallback(e => {
        r === !1 ? a(e) : N.startTransition( () => a(e))
    }
    , [r]);
    return N.useLayoutEffect( () => n.listen(o), [n, o]),
    N.createElement(_r, {
        basename: e,
        children: t,
        location: i.location,
        navigationType: i.action,
        navigator: n,
        unstable_useTransitions: r
    })
}
ci.displayName = `unstable_HistoryRouter`;
var li = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ui = N.forwardRef(function({onClick: e, discover: t=`render`, prefetch: n=`none`, relative: r, reloadDocument: i, replace: a, unstable_mask: o, state: s, target: c, to: l, preventScrollReset: u, viewTransition: d, unstable_defaultShouldRevalidate: f, ...p}, m) {
    let {basename: h, navigator: g, unstable_useTransitions: _} = N.useContext(En)
      , v = typeof l == `string` && li.test(l)
      , y = gn(l, h);
    l = y.to;
    let b = Fn(l, {
        relative: r
    })
      , x = Ln()
      , S = null;
    if (o) {
        let e = sn(o, [], x.unstable_mask ? x.unstable_mask.pathname : `/`, !0);
        h !== `/` && (e.pathname = e.pathname === `/` ? h : cn([h, e.pathname])),
        S = g.createHref(e)
    }
    let[C,w,ee] = $r(n, p)
      , te = _i(l, {
        replace: a,
        unstable_mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        unstable_defaultShouldRevalidate: f,
        unstable_useTransitions: _
    });
    function T(t) {
        e && e(t),
        t.defaultPrevented || te(t)
    }
    let E = !(y.isExternal || i)
      , D = N.createElement(`a`, {
        ...p,
        ...ee,
        href: (E ? S : void 0) || y.absoluteURL || b,
        onClick: E ? T : e,
        ref: ai(m, w),
        target: c,
        "data-discover": !v && t === `render` ? `true` : void 0
    });
    return C && !v ? N.createElement(N.Fragment, null, D, N.createElement(ti, {
        page: b
    })) : D
});
ui.displayName = `Link`;
var di = N.forwardRef(function({"aria-current": e=`page`, caseSensitive: t=!1, className: n=``, end: r=!1, style: i, to: a, viewTransition: o, children: s, ...c}, l) {
    let u = Gn(a, {
        relative: c.relative
    })
      , d = Ln()
      , f = N.useContext(bn)
      , {navigator: p, basename: m} = N.useContext(En)
      , h = f != null && Oi(u) && o === !0
      , g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname
      , _ = d.pathname
      , v = f && f.navigation && f.navigation.location ? f.navigation.location.pathname : null;
    t || (_ = _.toLowerCase(),
    v = v ? v.toLowerCase() : null,
    g = g.toLowerCase()),
    v && m && (v = $t(v, m) || v);
    let y = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length, b = _ === g || !r && _.startsWith(g) && _.charAt(y) === `/`, x = v != null && (v === g || !r && v.startsWith(g) && v.charAt(g.length) === `/`), S = {
        isActive: b,
        isPending: x,
        isTransitioning: h
    }, C = b ? e : void 0, w;
    w = typeof n == `function` ? n(S) : [n, b ? `active` : null, x ? `pending` : null, h ? `transitioning` : null].filter(Boolean).join(` `);
    let ee = typeof i == `function` ? i(S) : i;
    return N.createElement(ui, {
        ...c,
        "aria-current": C,
        className: w,
        ref: l,
        style: ee,
        to: a,
        viewTransition: o
    }, typeof s == `function` ? s(S) : s)
});
di.displayName = `NavLink`;
var fi = N.forwardRef( ({discover: e=`render`, fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: a, method: o=br, action: s, onSubmit: c, relative: l, preventScrollReset: u, viewTransition: d, unstable_defaultShouldRevalidate: f, ...p}, m) => {
    let {unstable_useTransitions: h} = N.useContext(En)
      , g = xi()
      , _ = Si(s, {
        relative: l
    })
      , v = o.toLowerCase() === `get` ? `get` : `post`
      , y = typeof s == `string` && li.test(s);
    return N.createElement(`form`, {
        ref: m,
        method: v,
        action: _,
        onSubmit: r ? c : e => {
            if (c && c(e),
            e.defaultPrevented)
                return;
            e.preventDefault();
            let r = e.nativeEvent.submitter
              , s = r?.getAttribute(`formmethod`) || o
              , p = () => g(r || e.currentTarget, {
                fetcherKey: t,
                method: s,
                navigate: n,
                replace: i,
                state: a,
                relative: l,
                preventScrollReset: u,
                viewTransition: d,
                unstable_defaultShouldRevalidate: f
            });
            h && n !== !1 ? N.startTransition( () => p()) : p()
        }
        ,
        ...p,
        "data-discover": !y && e === `render` ? `true` : void 0
    })
}
);
fi.displayName = `Form`;
function pi({getKey: e, storageKey: t, ...n}) {
    let r = N.useContext(Zr)
      , {basename: i} = N.useContext(En)
      , a = Ln()
      , o = cr();
    Ei({
        getKey: e,
        storageKey: t
    });
    let s = N.useMemo( () => {
        if (!r || !e)
            return null;
        let t = Ti(a, o, i, e);
        return t === a.key ? null : t
    }
    , []);
    if (!r || r.isSpaMode)
        return null;
    let c = ( (e, t) => {
        if (!window.history.state || !window.history.state.key) {
            let e = Math.random().toString(32).slice(2);
            window.history.replaceState({
                key: e
            }, ``)
        }
        try {
            let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[t || window.history.state.key];
            typeof n == `number` && window.scrollTo(0, n)
        } catch (t) {
            console.error(t),
            sessionStorage.removeItem(e)
        }
    }
    ).toString();
    return N.createElement(`script`, {
        ...n,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: `(${c})(${Lr(JSON.stringify(t || Ci))}, ${Lr(JSON.stringify(s))})`
        }
    })
}
pi.displayName = `ScrollRestoration`;
function mi(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function hi(e) {
    let t = N.useContext(yn);
    return F(t, mi(e)),
    t
}
function gi(e) {
    let t = N.useContext(bn);
    return F(t, mi(e)),
    t
}
function _i(e, {target: t, replace: n, unstable_mask: r, state: i, preventScrollReset: a, relative: o, viewTransition: s, unstable_defaultShouldRevalidate: c, unstable_useTransitions: l}={}) {
    let u = Bn()
      , d = Ln()
      , f = Gn(e, {
        relative: o
    });
    return N.useCallback(p => {
        if (Dr(p, t)) {
            p.preventDefault();
            let t = n === void 0 ? At(d) === At(f) : n
              , m = () => u(e, {
                replace: t,
                unstable_mask: r,
                state: i,
                preventScrollReset: a,
                relative: o,
                viewTransition: s,
                unstable_defaultShouldRevalidate: c
            });
            l ? N.startTransition( () => m()) : m()
        }
    }
    , [d, u, f, n, r, i, t, e, a, o, s, c, l])
}
function vi(e) {
    Et(typeof URLSearchParams < `u`, "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let t = N.useRef(Or(e))
      , n = N.useRef(!1)
      , r = Ln()
      , i = N.useMemo( () => kr(r.search, n.current ? null : t.current), [r.search])
      , a = Bn();
    return [i, N.useCallback( (e, t) => {
        let r = Or(typeof e == `function` ? e(new URLSearchParams(i)) : e);
        n.current = !0,
        a(`?` + r, t)
    }
    , [a, i])]
}
var yi = 0
  , bi = () => `__${String(++yi)}__`;
function xi() {
    let {router: e} = hi(`useSubmit`)
      , {basename: t} = N.useContext(En)
      , n = or()
      , r = e.fetch
      , i = e.navigate;
    return N.useCallback(async (e, a={}) => {
        let {action: o, method: s, encType: c, formData: l, body: u} = Pr(e, t);
        a.navigate === !1 ? await r(a.fetcherKey || bi(), n, a.action || o, {
            unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync
        }) : await i(a.action || o, {
            unstable_defaultShouldRevalidate: a.unstable_defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition
        })
    }
    , [r, i, t, n])
}
function Si(e, {relative: t}={}) {
    let {basename: n} = N.useContext(En)
      , r = N.useContext(On);
    F(r, `useFormAction must be used inside a RouteContext`);
    let[i] = r.matches.slice(-1)
      , a = {
        ...Gn(e || `.`, {
            relative: t
        })
    }
      , o = Ln();
    if (e == null) {
        a.search = o.search;
        let e = new URLSearchParams(a.search)
          , t = e.getAll(`index`);
        if (t.some(e => e === ``)) {
            e.delete(`index`),
            t.filter(e => e).forEach(t => e.append(`index`, t));
            let n = e.toString();
            a.search = n ? `?${n}` : ``
        }
    }
    return (!e || e === `.`) && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : cn([n, a.pathname])),
    At(a)
}
var Ci = `react-router-scroll-positions`
  , wi = {};
function Ti(e, t, n, r) {
    let i = null;
    return r && (i = r(n === `/` ? e : {
        ...e,
        pathname: $t(e.pathname, n) || e.pathname
    }, t)),
    i ??= e.key,
    i
}
function Ei({getKey: e, storageKey: t}={}) {
    let {router: n} = hi(`useScrollRestoration`)
      , {restoreScrollPosition: r, preventScrollReset: i} = gi(`useScrollRestoration`)
      , {basename: a} = N.useContext(En)
      , o = Ln()
      , s = cr()
      , c = sr();
    N.useEffect( () => (window.history.scrollRestoration = `manual`,
    () => {
        window.history.scrollRestoration = `auto`
    }
    ), []),
    Di(N.useCallback( () => {
        if (c.state === `idle`) {
            let t = Ti(o, s, a, e);
            wi[t] = window.scrollY
        }
        try {
            sessionStorage.setItem(t || Ci, JSON.stringify(wi))
        } catch (e) {
            Et(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)
        }
        window.history.scrollRestoration = `auto`
    }
    , [c.state, e, a, o, s, t])),
    typeof document < `u` && (N.useLayoutEffect( () => {
        try {
            let e = sessionStorage.getItem(t || Ci);
            e && (wi = JSON.parse(e))
        } catch {}
    }
    , [t]),
    N.useLayoutEffect( () => {
        let t = n?.enableScrollRestoration(wi, () => window.scrollY, e ? (t, n) => Ti(t, n, a, e) : void 0);
        return () => t && t()
    }
    , [n, a, e]),
    N.useLayoutEffect( () => {
        if (r !== !1) {
            if (typeof r == `number`) {
                window.scrollTo(0, r);
                return
            }
            try {
                if (o.hash) {
                    let e = document.getElementById(decodeURIComponent(o.hash.slice(1)));
                    if (e) {
                        e.scrollIntoView();
                        return
                    }
                }
            } catch {
                Et(!1, `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)
            }
            i !== !0 && window.scrollTo(0, 0)
        }
    }
    , [o, r, i]))
}
function Di(e, t) {
    let {capture: n} = t || {};
    N.useEffect( () => {
        let t = n == null ? void 0 : {
            capture: n
        };
        return window.addEventListener(`pagehide`, e, t),
        () => {
            window.removeEventListener(`pagehide`, e, t)
        }
    }
    , [e, n])
}
function Oi(e, {relative: t}={}) {
    let n = N.useContext(Cn);
    F(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: r} = hi(`useViewTransitionState`)
      , i = Gn(e, {
        relative: t
    });
    if (!n.isTransitioning)
        return !1;
    let a = $t(n.currentLocation.pathname, r) || n.currentLocation.pathname
      , o = $t(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Xt(i.pathname, o) != null || Xt(i.pathname, a) != null
}
var ki = _();
function Ai(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
var {toString: ji} = Object.prototype
  , {getPrototypeOf: Mi} = Object
  , {iterator: Ni, toStringTag: Pi} = Symbol
  , Fi = (e => t => {
    let n = ji.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , I = e => (e = e.toLowerCase(),
t => Fi(t) === e)
  , L = e => t => typeof t === e
  , {isArray: R} = Array
  , Ii = L(`undefined`);
function Li(e) {
    return e !== null && !Ii(e) && e.constructor !== null && !Ii(e.constructor) && Vi(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
var Ri = I(`ArrayBuffer`);
function zi(e) {
    let t;
    return t = typeof ArrayBuffer < `u` && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && Ri(e.buffer),
    t
}
var Bi = L(`string`)
  , Vi = L(`function`)
  , Hi = L(`number`)
  , Ui = e => typeof e == `object` && !!e
  , Wi = e => e === !0 || e === !1
  , Gi = e => {
    if (Fi(e) !== `object`)
        return !1;
    let t = Mi(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Pi in e) && !(Ni in e)
}
  , Ki = e => {
    if (!Ui(e) || Li(e))
        return !1;
    try {
        return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype
    } catch {
        return !1
    }
}
  , qi = I(`Date`)
  , Ji = I(`File`)
  , Yi = e => !!(e && e.uri !== void 0)
  , Xi = e => e && e.getParts !== void 0
  , Zi = I(`Blob`)
  , Qi = I(`FileList`)
  , $i = e => Ui(e) && Vi(e.pipe);
function ea() {
    return typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : typeof global < `u` ? global : {}
}
var ta = ea()
  , na = ta.FormData === void 0 ? void 0 : ta.FormData
  , ra = e => {
    let t;
    return e && (na && e instanceof na || Vi(e.append) && ((t = Fi(e)) === `formdata` || t === `object` && Vi(e.toString) && e.toString() === `[object FormData]`))
}
  , ia = I(`URLSearchParams`)
  , [aa,oa,sa,ca] = [`ReadableStream`, `Request`, `Response`, `Headers`].map(I)
  , la = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``);
function ua(e, t, {allOwnKeys: n=!1}={}) {
    if (e == null)
        return;
    let r, i;
    if (typeof e != `object` && (e = [e]),
    R(e))
        for (r = 0,
        i = e.length; r < i; r++)
            t.call(null, e[r], r, e);
    else {
        if (Li(e))
            return;
        let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length, o;
        for (r = 0; r < a; r++)
            o = i[r],
            t.call(null, e[o], o, e)
    }
}
function da(e, t) {
    if (Li(e))
        return null;
    t = t.toLowerCase();
    let n = Object.keys(e), r = n.length, i;
    for (; r-- > 0; )
        if (i = n[r],
        t === i.toLowerCase())
            return i;
    return null
}
var fa = typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : typeof window < `u` ? window : global
  , pa = e => !Ii(e) && e !== fa;
function ma() {
    let {caseless: e, skipUndefined: t} = pa(this) && this || {}
      , n = {}
      , r = (r, i) => {
        if (i === `__proto__` || i === `constructor` || i === `prototype`)
            return;
        let a = e && da(n, i) || i;
        Gi(n[a]) && Gi(r) ? n[a] = ma(n[a], r) : Gi(r) ? n[a] = ma({}, r) : R(r) ? n[a] = r.slice() : (!t || !Ii(r)) && (n[a] = r)
    }
    ;
    for (let e = 0, t = arguments.length; e < t; e++)
        arguments[e] && ua(arguments[e], r);
    return n
}
var ha = (e, t, n, {allOwnKeys: r}={}) => (ua(t, (t, r) => {
    n && Vi(t) ? Object.defineProperty(e, r, {
        value: Ai(t, n),
        writable: !0,
        enumerable: !0,
        configurable: !0
    }) : Object.defineProperty(e, r, {
        value: t,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
, {
    allOwnKeys: r
}),
e)
  , ga = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , _a = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    Object.defineProperty(e.prototype, `constructor`, {
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(e, `super`, {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , va = (e, t, n, r) => {
    let i, a, o, s = {};
    if (t ||= {},
    e == null)
        return t;
    do {
        for (i = Object.getOwnPropertyNames(e),
        a = i.length; a-- > 0; )
            o = i[a],
            (!r || r(o, e, t)) && !s[o] && (t[o] = e[o],
            s[o] = !0);
        e = n !== !1 && Mi(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , ya = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    let r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , ba = e => {
    if (!e)
        return null;
    if (R(e))
        return e;
    let t = e.length;
    if (!Hi(t))
        return null;
    let n = Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , xa = (e => t => e && t instanceof e)(typeof Uint8Array < `u` && Mi(Uint8Array))
  , Sa = (e, t) => {
    let n = (e && e[Ni]).call(e), r;
    for (; (r = n.next()) && !r.done; ) {
        let n = r.value;
        t.call(e, n[0], n[1])
    }
}
  , Ca = (e, t) => {
    let n, r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , wa = I(`HTMLFormElement`)
  , Ta = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, n) {
    return t.toUpperCase() + n
})
  , Ea = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Da = I(`RegExp`)
  , Oa = (e, t) => {
    let n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    ua(n, (n, i) => {
        let a;
        (a = t(n, i, e)) !== !1 && (r[i] = a || n)
    }
    ),
    Object.defineProperties(e, r)
}
  , ka = e => {
    Oa(e, (t, n) => {
        if (Vi(e) && [`arguments`, `caller`, `callee`].indexOf(n) !== -1)
            return !1;
        let r = e[n];
        if (Vi(r)) {
            if (t.enumerable = !1,
            `writable`in t) {
                t.writable = !1;
                return
            }
            t.set ||= () => {
                throw Error(`Can not rewrite read-only method '` + n + `'`)
            }
        }
    }
    )
}
  , Aa = (e, t) => {
    let n = {}
      , r = e => {
        e.forEach(e => {
            n[e] = !0
        }
        )
    }
    ;
    return R(e) ? r(e) : r(String(e).split(t)),
    n
}
  , ja = () => {}
  , Ma = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Na(e) {
    return !!(e && Vi(e.append) && e[Pi] === `FormData` && e[Ni])
}
var Pa = e => {
    let t = Array(10)
      , n = (e, r) => {
        if (Ui(e)) {
            if (t.indexOf(e) >= 0)
                return;
            if (Li(e))
                return e;
            if (!(`toJSON`in e)) {
                t[r] = e;
                let i = R(e) ? [] : {};
                return ua(e, (e, t) => {
                    let a = n(e, r + 1);
                    !Ii(a) && (i[t] = a)
                }
                ),
                t[r] = void 0,
                i
            }
        }
        return e
    }
    ;
    return n(e, 0)
}
  , Fa = I(`AsyncFunction`)
  , Ia = e => e && (Ui(e) || Vi(e)) && Vi(e.then) && Vi(e.catch)
  , La = ( (e, t) => e ? setImmediate : t ? ( (e, t) => (fa.addEventListener(`message`, ({source: n, data: r}) => {
    n === fa && r === e && t.length && t.shift()()
}
, !1),
n => {
    t.push(n),
    fa.postMessage(e, `*`)
}
))(`axios@${Math.random()}`, []) : e => setTimeout(e))(typeof setImmediate == `function`, Vi(fa.postMessage))
  , z = {
    isArray: R,
    isArrayBuffer: Ri,
    isBuffer: Li,
    isFormData: ra,
    isArrayBufferView: zi,
    isString: Bi,
    isNumber: Hi,
    isBoolean: Wi,
    isObject: Ui,
    isPlainObject: Gi,
    isEmptyObject: Ki,
    isReadableStream: aa,
    isRequest: oa,
    isResponse: sa,
    isHeaders: ca,
    isUndefined: Ii,
    isDate: qi,
    isFile: Ji,
    isReactNativeBlob: Yi,
    isReactNative: Xi,
    isBlob: Zi,
    isRegExp: Da,
    isFunction: Vi,
    isStream: $i,
    isURLSearchParams: ia,
    isTypedArray: xa,
    isFileList: Qi,
    forEach: ua,
    merge: ma,
    extend: ha,
    trim: la,
    stripBOM: ga,
    inherits: _a,
    toFlatObject: va,
    kindOf: Fi,
    kindOfTest: I,
    endsWith: ya,
    toArray: ba,
    forEachEntry: Sa,
    matchAll: Ca,
    isHTMLForm: wa,
    hasOwnProperty: Ea,
    hasOwnProp: Ea,
    reduceDescriptors: Oa,
    freezeMethods: ka,
    toObjectSet: Aa,
    toCamelCase: Ta,
    noop: ja,
    toFiniteNumber: Ma,
    findKey: da,
    global: fa,
    isContextDefined: pa,
    isSpecCompliantForm: Na,
    toJSONObject: Pa,
    isAsyncFn: Fa,
    isThenable: Ia,
    setImmediate: La,
    asap: typeof queueMicrotask < `u` ? queueMicrotask.bind(fa) : typeof process < `u` && process.nextTick || La,
    isIterable: e => e != null && Vi(e[Ni])
}
  , B = class e extends Error {
    static from(t, n, r, i, a, o) {
        let s = new e(t.message,n || t.code,r,i,a);
        return s.cause = t,
        s.name = t.name,
        t.status != null && s.status == null && (s.status = t.status),
        o && Object.assign(s, o),
        s
    }
    constructor(e, t, n, r, i) {
        super(e),
        Object.defineProperty(this, `message`, {
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0
        }),
        this.name = `AxiosError`,
        this.isAxiosError = !0,
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        i && (this.response = i,
        this.status = i.status)
    }
    toJSON() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: z.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
}
;
B.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`,
B.ERR_BAD_OPTION = `ERR_BAD_OPTION`,
B.ECONNABORTED = `ECONNABORTED`,
B.ETIMEDOUT = `ETIMEDOUT`,
B.ERR_NETWORK = `ERR_NETWORK`,
B.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`,
B.ERR_DEPRECATED = `ERR_DEPRECATED`,
B.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`,
B.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`,
B.ERR_CANCELED = `ERR_CANCELED`,
B.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`,
B.ERR_INVALID_URL = `ERR_INVALID_URL`;
function Ra(e) {
    return z.isPlainObject(e) || z.isArray(e)
}
function za(e) {
    return z.endsWith(e, `[]`) ? e.slice(0, -2) : e
}
function Ba(e, t, n) {
    return e ? e.concat(t).map(function(e, t) {
        return e = za(e),
        !n && t ? `[` + e + `]` : e
    }).join(n ? `.` : ``) : t
}
function Va(e) {
    return z.isArray(e) && !e.some(Ra)
}
var Ha = z.toFlatObject(z, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
});
function Ua(e, t, n) {
    if (!z.isObject(e))
        throw TypeError(`target must be an object`);
    t ||= new FormData,
    n = z.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(e, t) {
        return !z.isUndefined(t[e])
    });
    let r = n.metaTokens
      , i = n.visitor || l
      , a = n.dots
      , o = n.indexes
      , s = (n.Blob || typeof Blob < `u` && Blob) && z.isSpecCompliantForm(t);
    if (!z.isFunction(i))
        throw TypeError(`visitor must be a function`);
    function c(e) {
        if (e === null)
            return ``;
        if (z.isDate(e))
            return e.toISOString();
        if (z.isBoolean(e))
            return e.toString();
        if (!s && z.isBlob(e))
            throw new B(`Blob is not supported. Use a Buffer instead.`);
        return z.isArrayBuffer(e) || z.isTypedArray(e) ? s && typeof Blob == `function` ? new Blob([e]) : Buffer.from(e) : e
    }
    function l(e, n, i) {
        let s = e;
        if (z.isReactNative(t) && z.isReactNativeBlob(e))
            return t.append(Ba(i, n, a), c(e)),
            !1;
        if (e && !i && typeof e == `object`) {
            if (z.endsWith(n, `{}`))
                n = r ? n : n.slice(0, -2),
                e = JSON.stringify(e);
            else if (z.isArray(e) && Va(e) || (z.isFileList(e) || z.endsWith(n, `[]`)) && (s = z.toArray(e)))
                return n = za(n),
                s.forEach(function(e, r) {
                    !(z.isUndefined(e) || e === null) && t.append(o === !0 ? Ba([n], r, a) : o === null ? n : n + `[]`, c(e))
                }),
                !1
        }
        return Ra(e) ? !0 : (t.append(Ba(i, n, a), c(e)),
        !1)
    }
    let u = []
      , d = Object.assign(Ha, {
        defaultVisitor: l,
        convertValue: c,
        isVisitable: Ra
    });
    function f(e, n) {
        if (!z.isUndefined(e)) {
            if (u.indexOf(e) !== -1)
                throw Error(`Circular reference detected in ` + n.join(`.`));
            u.push(e),
            z.forEach(e, function(e, r) {
                (!(z.isUndefined(e) || e === null) && i.call(t, e, z.isString(r) ? r.trim() : r, n, d)) === !0 && f(e, n ? n.concat(r) : [r])
            }),
            u.pop()
        }
    }
    if (!z.isObject(e))
        throw TypeError(`data must be an object`);
    return f(e),
    t
}
function Wa(e) {
    let t = {
        "!": `%21`,
        "'": `%27`,
        "(": `%28`,
        ")": `%29`,
        "~": `%7E`,
        "%20": `+`,
        "%00": `\0`
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
        return t[e]
    })
}
function Ga(e, t) {
    this._pairs = [],
    e && Ua(e, this, t)
}
var Ka = Ga.prototype;
Ka.append = function(e, t) {
    this._pairs.push([e, t])
}
,
Ka.toString = function(e) {
    let t = e ? function(t) {
        return e.call(this, t, Wa)
    }
    : Wa;
    return this._pairs.map(function(e) {
        return t(e[0]) + `=` + t(e[1])
    }, ``).join(`&`)
}
;
function qa(e) {
    return encodeURIComponent(e).replace(/%3A/gi, `:`).replace(/%24/g, `$`).replace(/%2C/gi, `,`).replace(/%20/g, `+`)
}
function Ja(e, t, n) {
    if (!t)
        return e;
    let r = n && n.encode || qa, i = z.isFunction(n) ? {
        serialize: n
    } : n, a = i && i.serialize, o;
    if (o = a ? a(t, i) : z.isURLSearchParams(t) ? t.toString() : new Ga(t,i).toString(r),
    o) {
        let t = e.indexOf(`#`);
        t !== -1 && (e = e.slice(0, t)),
        e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o
    }
    return e
}
var Ya = class {
    constructor() {
        this.handlers = []
    }
    use(e, t, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: n ? n.synchronous : !1,
            runWhen: n ? n.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }
    clear() {
        this.handlers &&= []
    }
    forEach(e) {
        z.forEach(this.handlers, function(t) {
            t !== null && e(t)
        })
    }
}
  , Xa = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0
}
  , Za = {
    isBrowser: !0,
    classes: {
        URLSearchParams: typeof URLSearchParams < `u` ? URLSearchParams : Ga,
        FormData: typeof FormData < `u` ? FormData : null,
        Blob: typeof Blob < `u` ? Blob : null
    },
    protocols: [`http`, `https`, `file`, `blob`, `url`, `data`]
}
  , Qa = s({
    hasBrowserEnv: () => $a,
    hasStandardBrowserEnv: () => to,
    hasStandardBrowserWebWorkerEnv: () => no,
    navigator: () => eo,
    origin: () => ro
})
  , $a = typeof window < `u` && typeof document < `u`
  , eo = typeof navigator == `object` && navigator || void 0
  , to = $a && (!eo || [`ReactNative`, `NativeScript`, `NS`].indexOf(eo.product) < 0)
  , no = typeof WorkerGlobalScope < `u` && self instanceof WorkerGlobalScope && typeof self.importScripts == `function`
  , ro = $a && window.location.href || `http://localhost`
  , io = {
    ...Qa,
    ...Za
};
function ao(e, t) {
    return Ua(e, new io.classes.URLSearchParams, {
        visitor: function(e, t, n, r) {
            return io.isNode && z.isBuffer(e) ? (this.append(t, e.toString(`base64`)),
            !1) : r.defaultVisitor.apply(this, arguments)
        },
        ...t
    })
}
function oo(e) {
    return z.matchAll(/\w+|\[(\w*)]/g, e).map(e => e[0] === `[]` ? `` : e[1] || e[0])
}
function so(e) {
    let t = {}, n = Object.keys(e), r, i = n.length, a;
    for (r = 0; r < i; r++)
        a = n[r],
        t[a] = e[a];
    return t
}
function co(e) {
    function t(e, n, r, i) {
        let a = e[i++];
        if (a === `__proto__`)
            return !0;
        let o = Number.isFinite(+a)
          , s = i >= e.length;
        return a = !a && z.isArray(r) ? r.length : a,
        s ? (z.hasOwnProp(r, a) ? r[a] = [r[a], n] : r[a] = n,
        !o) : ((!r[a] || !z.isObject(r[a])) && (r[a] = []),
        t(e, n, r[a], i) && z.isArray(r[a]) && (r[a] = so(r[a])),
        !o)
    }
    if (z.isFormData(e) && z.isFunction(e.entries)) {
        let n = {};
        return z.forEachEntry(e, (e, r) => {
            t(oo(e), r, n, 0)
        }
        ),
        n
    }
    return null
}
function lo(e, t, n) {
    if (z.isString(e))
        try {
            return (t || JSON.parse)(e),
            z.trim(e)
        } catch (e) {
            if (e.name !== `SyntaxError`)
                throw e
        }
    return (n || JSON.stringify)(e)
}
var uo = {
    transitional: Xa,
    adapter: [`xhr`, `http`, `fetch`],
    transformRequest: [function(e, t) {
        let n = t.getContentType() || ``
          , r = n.indexOf(`application/json`) > -1
          , i = z.isObject(e);
        if (i && z.isHTMLForm(e) && (e = new FormData(e)),
        z.isFormData(e))
            return r ? JSON.stringify(co(e)) : e;
        if (z.isArrayBuffer(e) || z.isBuffer(e) || z.isStream(e) || z.isFile(e) || z.isBlob(e) || z.isReadableStream(e))
            return e;
        if (z.isArrayBufferView(e))
            return e.buffer;
        if (z.isURLSearchParams(e))
            return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`, !1),
            e.toString();
        let a;
        if (i) {
            if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
                return ao(e, this.formSerializer).toString();
            if ((a = z.isFileList(e)) || n.indexOf(`multipart/form-data`) > -1) {
                let t = this.env && this.env.FormData;
                return Ua(a ? {
                    "files[]": e
                } : e, t && new t, this.formSerializer)
            }
        }
        return i || r ? (t.setContentType(`application/json`, !1),
        lo(e)) : e
    }
    ],
    transformResponse: [function(e) {
        let t = this.transitional || uo.transitional
          , n = t && t.forcedJSONParsing
          , r = this.responseType === `json`;
        if (z.isResponse(e) || z.isReadableStream(e))
            return e;
        if (e && z.isString(e) && (n && !this.responseType || r)) {
            let n = !(t && t.silentJSONParsing) && r;
            try {
                return JSON.parse(e, this.parseReviver)
            } catch (e) {
                if (n)
                    throw e.name === `SyntaxError` ? B.from(e, B.ERR_BAD_RESPONSE, this, null, this.response) : e
            }
        }
        return e
    }
    ],
    timeout: 0,
    xsrfCookieName: `XSRF-TOKEN`,
    xsrfHeaderName: `X-XSRF-TOKEN`,
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: io.classes.FormData,
        Blob: io.classes.Blob
    },
    validateStatus: function(e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: `application/json, text/plain, */*`,
            "Content-Type": void 0
        }
    }
};
z.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`], e => {
    uo.headers[e] = {}
}
);
var fo = z.toObjectSet([`age`, `authorization`, `content-length`, `content-type`, `etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`, `last-modified`, `location`, `max-forwards`, `proxy-authorization`, `referer`, `retry-after`, `user-agent`])
  , V = e => {
    let t = {}, n, r, i;
    return e && e.split(`
`).forEach(function(e) {
        i = e.indexOf(`:`),
        n = e.substring(0, i).trim().toLowerCase(),
        r = e.substring(i + 1).trim(),
        !(!n || t[n] && fo[n]) && (n === `set-cookie` ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + `, ` + r : r)
    }),
    t
}
  , H = Symbol(`internals`);
function po(e) {
    return e && String(e).trim().toLowerCase()
}
function mo(e) {
    return e === !1 || e == null ? e : z.isArray(e) ? e.map(mo) : String(e).replace(/[\r\n]+$/, ``)
}
function ho(e) {
    let t = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g, r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
var go = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function _o(e, t, n, r, i) {
    if (z.isFunction(r))
        return r.call(this, t, n);
    if (i && (t = n),
    z.isString(t)) {
        if (z.isString(r))
            return t.indexOf(r) !== -1;
        if (z.isRegExp(r))
            return r.test(t)
    }
}
function vo(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n)
}
function yo(e, t) {
    let n = z.toCamelCase(` ` + t);
    [`get`, `set`, `has`].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(e, n, i) {
                return this[r].call(this, t, e, n, i)
            },
            configurable: !0
        })
    }
    )
}
var bo = class {
    constructor(e) {
        e && this.set(e)
    }
    set(e, t, n) {
        let r = this;
        function i(e, t, n) {
            let i = po(t);
            if (!i)
                throw Error(`header name must be a non-empty string`);
            let a = z.findKey(r, i);
            (!a || r[a] === void 0 || n === !0 || n === void 0 && r[a] !== !1) && (r[a || t] = mo(e))
        }
        let a = (e, t) => z.forEach(e, (e, n) => i(e, n, t));
        if (z.isPlainObject(e) || e instanceof this.constructor)
            a(e, t);
        else if (z.isString(e) && (e = e.trim()) && !go(e))
            a(V(e), t);
        else if (z.isObject(e) && z.isIterable(e)) {
            let n = {}, r, i;
            for (let t of e) {
                if (!z.isArray(t))
                    throw TypeError(`Object iterator must return a key-value pair`);
                n[i = t[0]] = (r = n[i]) ? z.isArray(r) ? [...r, t[1]] : [r, t[1]] : t[1]
            }
            a(n, t)
        } else
            e != null && i(t, e, n);
        return this
    }
    get(e, t) {
        if (e = po(e),
        e) {
            let n = z.findKey(this, e);
            if (n) {
                let e = this[n];
                if (!t)
                    return e;
                if (t === !0)
                    return ho(e);
                if (z.isFunction(t))
                    return t.call(this, e, n);
                if (z.isRegExp(t))
                    return t.exec(e);
                throw TypeError(`parser must be boolean|regexp|function`)
            }
        }
    }
    has(e, t) {
        if (e = po(e),
        e) {
            let n = z.findKey(this, e);
            return !!(n && this[n] !== void 0 && (!t || _o(this, this[n], n, t)))
        }
        return !1
    }
    delete(e, t) {
        let n = this
          , r = !1;
        function i(e) {
            if (e = po(e),
            e) {
                let i = z.findKey(n, e);
                i && (!t || _o(n, n[i], i, t)) && (delete n[i],
                r = !0)
            }
        }
        return z.isArray(e) ? e.forEach(i) : i(e),
        r
    }
    clear(e) {
        let t = Object.keys(this)
          , n = t.length
          , r = !1;
        for (; n--; ) {
            let i = t[n];
            (!e || _o(this, this[i], i, e, !0)) && (delete this[i],
            r = !0)
        }
        return r
    }
    normalize(e) {
        let t = this
          , n = {};
        return z.forEach(this, (r, i) => {
            let a = z.findKey(n, i);
            if (a) {
                t[a] = mo(r),
                delete t[i];
                return
            }
            let o = e ? vo(i) : String(i).trim();
            o !== i && delete t[i],
            t[o] = mo(r),
            n[o] = !0
        }
        ),
        this
    }
    concat(...e) {
        return this.constructor.concat(this, ...e)
    }
    toJSON(e) {
        let t = Object.create(null);
        return z.forEach(this, (n, r) => {
            n != null && n !== !1 && (t[r] = e && z.isArray(n) ? n.join(`, `) : n)
        }
        ),
        t
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([e,t]) => e + `: ` + t).join(`
`)
    }
    getSetCookie() {
        return this.get(`set-cookie`) || []
    }
    get[Symbol.toStringTag]() {
        return `AxiosHeaders`
    }
    static from(e) {
        return e instanceof this ? e : new this(e)
    }
    static concat(e, ...t) {
        let n = new this(e);
        return t.forEach(e => n.set(e)),
        n
    }
    static accessor(e) {
        let t = (this[H] = this[H] = {
            accessors: {}
        }).accessors
          , n = this.prototype;
        function r(e) {
            let r = po(e);
            t[r] || (yo(n, e),
            t[r] = !0)
        }
        return z.isArray(e) ? e.forEach(r) : r(e),
        this
    }
}
;
bo.accessor([`Content-Type`, `Content-Length`, `Accept`, `Accept-Encoding`, `User-Agent`, `Authorization`]),
z.reduceDescriptors(bo.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(e) {
            this[n] = e
        }
    }
}
),
z.freezeMethods(bo);
function xo(e, t) {
    let n = this || uo
      , r = t || n
      , i = bo.from(r.headers)
      , a = r.data;
    return z.forEach(e, function(e) {
        a = e.call(n, a, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    a
}
function So(e) {
    return !!(e && e.__CANCEL__)
}
var Co = class extends B {
    constructor(e, t, n) {
        super(e ?? `canceled`, B.ERR_CANCELED, t, n),
        this.name = `CanceledError`,
        this.__CANCEL__ = !0
    }
}
;
function wo(e, t, n) {
    let r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new B(`Request failed with status code ` + n.status,[B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function To(e) {
    let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ``
}
function Eo(e, t) {
    e ||= 10;
    let n = Array(e), r = Array(e), i = 0, a = 0, o;
    return t = t === void 0 ? 1e3 : t,
    function(s) {
        let c = Date.now()
          , l = r[a];
        o ||= c,
        n[i] = s,
        r[i] = c;
        let u = a
          , d = 0;
        for (; u !== i; )
            d += n[u++],
            u %= e;
        if (i = (i + 1) % e,
        i === a && (a = (a + 1) % e),
        c - o < t)
            return;
        let f = l && c - l;
        return f ? Math.round(d * 1e3 / f) : void 0
    }
}
function Do(e, t) {
    let n = 0, r = 1e3 / t, i, a, o = (t, r=Date.now()) => {
        n = r,
        i = null,
        a &&= (clearTimeout(a),
        null),
        e(...t)
    }
    ;
    return [ (...e) => {
        let t = Date.now()
          , s = t - n;
        s >= r ? o(e, t) : (i = e,
        a ||= setTimeout( () => {
            a = null,
            o(i)
        }
        , r - s))
    }
    , () => i && o(i)]
}
var Oo = (e, t, n=3) => {
    let r = 0
      , i = Eo(50, 250);
    return Do(n => {
        let a = n.loaded
          , o = n.lengthComputable ? n.total : void 0
          , s = a - r
          , c = i(s)
          , l = a <= o;
        r = a,
        e({
            loaded: a,
            total: o,
            progress: o ? a / o : void 0,
            bytes: s,
            rate: c || void 0,
            estimated: c && o && l ? (o - a) / c : void 0,
            event: n,
            lengthComputable: o != null,
            [t ? `download` : `upload`]: !0
        })
    }
    , n)
}
  , ko = (e, t) => {
    let n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , Ao = e => (...t) => z.asap( () => e(...t))
  , jo = io.hasStandardBrowserEnv ? ( (e, t) => n => (n = new URL(n,io.origin),
e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(new URL(io.origin), io.navigator && /(msie|trident)/i.test(io.navigator.userAgent)) : () => !0
  , Mo = io.hasStandardBrowserEnv ? {
    write(e, t, n, r, i, a, o) {
        if (typeof document > `u`)
            return;
        let s = [`${e}=${encodeURIComponent(t)}`];
        z.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
        z.isString(r) && s.push(`path=${r}`),
        z.isString(i) && s.push(`domain=${i}`),
        a === !0 && s.push(`secure`),
        z.isString(o) && s.push(`SameSite=${o}`),
        document.cookie = s.join(`; `)
    },
    read(e) {
        if (typeof document > `u`)
            return null;
        let t = document.cookie.match(RegExp(`(?:^|; )` + e + `=([^;]*)`));
        return t ? decodeURIComponent(t[1]) : null
    },
    remove(e) {
        this.write(e, ``, Date.now() - 864e5, `/`)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function No(e) {
    return typeof e == `string` ? /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) : !1
}
function Po(e, t) {
    return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e
}
function Fo(e, t, n) {
    let r = !No(t);
    return e && (r || n == 0) ? Po(e, t) : t
}
var Io = e => e instanceof bo ? {
    ...e
} : e;
function Lo(e, t) {
    t ||= {};
    let n = {};
    function r(e, t, n, r) {
        return z.isPlainObject(e) && z.isPlainObject(t) ? z.merge.call({
            caseless: r
        }, e, t) : z.isPlainObject(t) ? z.merge({}, t) : z.isArray(t) ? t.slice() : t
    }
    function i(e, t, n, i) {
        if (!z.isUndefined(t))
            return r(e, t, n, i);
        if (!z.isUndefined(e))
            return r(void 0, e, n, i)
    }
    function a(e, t) {
        if (!z.isUndefined(t))
            return r(void 0, t)
    }
    function o(e, t) {
        if (!z.isUndefined(t))
            return r(void 0, t);
        if (!z.isUndefined(e))
            return r(void 0, e)
    }
    function s(n, i, a) {
        if (a in t)
            return r(n, i);
        if (a in e)
            return r(void 0, n)
    }
    let c = {
        url: a,
        method: a,
        data: a,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: s,
        headers: (e, t, n) => i(Io(e), Io(t), n, !0)
    };
    return z.forEach(Object.keys({
        ...e,
        ...t
    }), function(r) {
        if (r === `__proto__` || r === `constructor` || r === `prototype`)
            return;
        let a = z.hasOwnProp(c, r) ? c[r] : i
          , o = a(e[r], t[r], r);
        z.isUndefined(o) && a !== s || (n[r] = o)
    }),
    n
}
var Ro = e => {
    let t = Lo({}, e)
      , {data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s} = t;
    if (t.headers = o = bo.from(o),
    t.url = Ja(Fo(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer),
    s && o.set(`Authorization`, `Basic ` + btoa((s.username || ``) + `:` + (s.password ? unescape(encodeURIComponent(s.password)) : ``))),
    z.isFormData(n)) {
        if (io.hasStandardBrowserEnv || io.hasStandardBrowserWebWorkerEnv)
            o.setContentType(void 0);
        else if (z.isFunction(n.getHeaders)) {
            let e = n.getHeaders()
              , t = [`content-type`, `content-length`];
            Object.entries(e).forEach( ([e,n]) => {
                t.includes(e.toLowerCase()) && o.set(e, n)
            }
            )
        }
    }
    if (io.hasStandardBrowserEnv && (r && z.isFunction(r) && (r = r(t)),
    r || r !== !1 && jo(t.url))) {
        let e = i && a && Mo.read(a);
        e && o.set(i, e)
    }
    return t
}
  , zo = typeof XMLHttpRequest < `u` && function(e) {
    return new Promise(function(t, n) {
        let r = Ro(e), i = r.data, a = bo.from(r.headers).normalize(), {responseType: o, onUploadProgress: s, onDownloadProgress: c} = r, l, u, d, f, p;
        function m() {
            f && f(),
            p && p(),
            r.cancelToken && r.cancelToken.unsubscribe(l),
            r.signal && r.signal.removeEventListener(`abort`, l)
        }
        let h = new XMLHttpRequest;
        h.open(r.method.toUpperCase(), r.url, !0),
        h.timeout = r.timeout;
        function g() {
            if (!h)
                return;
            let r = bo.from(`getAllResponseHeaders`in h && h.getAllResponseHeaders());
            wo(function(e) {
                t(e),
                m()
            }, function(e) {
                n(e),
                m()
            }, {
                data: !o || o === `text` || o === `json` ? h.responseText : h.response,
                status: h.status,
                statusText: h.statusText,
                headers: r,
                config: e,
                request: h
            }),
            h = null
        }
        `onloadend`in h ? h.onloadend = g : h.onreadystatechange = function() {
            !h || h.readyState !== 4 || h.status === 0 && !(h.responseURL && h.responseURL.indexOf(`file:`) === 0) || setTimeout(g)
        }
        ,
        h.onabort = function() {
            h &&= (n(new B(`Request aborted`,B.ECONNABORTED,e,h)),
            null)
        }
        ,
        h.onerror = function(t) {
            let r = new B(t && t.message ? t.message : `Network Error`,B.ERR_NETWORK,e,h);
            r.event = t || null,
            n(r),
            h = null
        }
        ,
        h.ontimeout = function() {
            let t = r.timeout ? `timeout of ` + r.timeout + `ms exceeded` : `timeout exceeded`
              , i = r.transitional || Xa;
            r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
            n(new B(t,i.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,e,h)),
            h = null
        }
        ,
        i === void 0 && a.setContentType(null),
        `setRequestHeader`in h && z.forEach(a.toJSON(), function(e, t) {
            h.setRequestHeader(t, e)
        }),
        z.isUndefined(r.withCredentials) || (h.withCredentials = !!r.withCredentials),
        o && o !== `json` && (h.responseType = r.responseType),
        c && ([d,p] = Oo(c, !0),
        h.addEventListener(`progress`, d)),
        s && h.upload && ([u,f] = Oo(s),
        h.upload.addEventListener(`progress`, u),
        h.upload.addEventListener(`loadend`, f)),
        (r.cancelToken || r.signal) && (l = t => {
            h &&= (n(!t || t.type ? new Co(null,e,h) : t),
            h.abort(),
            null)
        }
        ,
        r.cancelToken && r.cancelToken.subscribe(l),
        r.signal && (r.signal.aborted ? l() : r.signal.addEventListener(`abort`, l)));
        let _ = To(r.url);
        if (_ && io.protocols.indexOf(_) === -1) {
            n(new B(`Unsupported protocol ` + _ + `:`,B.ERR_BAD_REQUEST,e));
            return
        }
        h.send(i || null)
    }
    )
}
  , Bo = (e, t) => {
    let {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let n = new AbortController, r, i = function(e) {
            if (!r) {
                r = !0,
                o();
                let t = e instanceof Error ? e : this.reason;
                n.abort(t instanceof B ? t : new Co(t instanceof Error ? t.message : t))
            }
        }, a = t && setTimeout( () => {
            a = null,
            i(new B(`timeout of ${t}ms exceeded`,B.ETIMEDOUT))
        }
        , t), o = () => {
            e &&= (a && clearTimeout(a),
            a = null,
            e.forEach(e => {
                e.unsubscribe ? e.unsubscribe(i) : e.removeEventListener(`abort`, i)
            }
            ),
            null)
        }
        ;
        e.forEach(e => e.addEventListener(`abort`, i));
        let {signal: s} = n;
        return s.unsubscribe = () => z.asap(o),
        s
    }
}
  , Vo = function*(e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
        yield e;
        return
    }
    let r = 0, i;
    for (; r < n; )
        i = r + t,
        yield e.slice(r, i),
        r = i
}
  , Ho = async function*(e, t) {
    for await(let n of Uo(e))
        yield*Vo(n, t)
}
  , Uo = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    let t = e.getReader();
    try {
        for (; ; ) {
            let {done: e, value: n} = await t.read();
            if (e)
                break;
            yield n
        }
    } finally {
        await t.cancel()
    }
}
  , Wo = (e, t, n, r) => {
    let i = Ho(e, t), a = 0, o, s = e => {
        o || (o = !0,
        r && r(e))
    }
    ;
    return new ReadableStream({
        async pull(e) {
            try {
                let {done: t, value: r} = await i.next();
                if (t) {
                    s(),
                    e.close();
                    return
                }
                let o = r.byteLength;
                n && n(a += o),
                e.enqueue(new Uint8Array(r))
            } catch (e) {
                throw s(e),
                e
            }
        },
        cancel(e) {
            return s(e),
            i.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Go = 64 * 1024
  , {isFunction: Ko} = z
  , qo = ( ({Request: e, Response: t}) => ({
    Request: e,
    Response: t
}))(z.global)
  , {ReadableStream: Jo, TextEncoder: Yo} = z.global
  , Xo = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , Zo = e => {
    e = z.merge.call({
        skipUndefined: !0
    }, qo, e);
    let {fetch: t, Request: n, Response: r} = e
      , i = t ? Ko(t) : typeof fetch == `function`
      , a = Ko(n)
      , o = Ko(r);
    if (!i)
        return !1;
    let s = i && Ko(Jo)
      , c = i && (typeof Yo == `function` ? (e => t => e.encode(t))(new Yo) : async e => new Uint8Array(await new n(e).arrayBuffer()))
      , l = a && s && Xo( () => {
        let e = !1
          , t = new Jo
          , r = new n(io.origin,{
            body: t,
            method: `POST`,
            get duplex() {
                return e = !0,
                `half`
            }
        }).headers.has(`Content-Type`);
        return t.cancel(),
        e && !r
    }
    )
      , u = o && s && Xo( () => z.isReadableStream(new r(``).body))
      , d = {
        stream: u && (e => e.body)
    };
    i && [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach(e => {
        !d[e] && (d[e] = (t, n) => {
            let r = t && t[e];
            if (r)
                return r.call(t);
            throw new B(`Response type '${e}' is not supported`,B.ERR_NOT_SUPPORT,n)
        }
        )
    }
    );
    let f = async e => {
        if (e == null)
            return 0;
        if (z.isBlob(e))
            return e.size;
        if (z.isSpecCompliantForm(e))
            return (await new n(io.origin,{
                method: `POST`,
                body: e
            }).arrayBuffer()).byteLength;
        if (z.isArrayBufferView(e) || z.isArrayBuffer(e))
            return e.byteLength;
        if (z.isURLSearchParams(e) && (e += ``),
        z.isString(e))
            return (await c(e)).byteLength
    }
      , p = async (e, t) => z.toFiniteNumber(e.getContentLength()) ?? f(t);
    return async e => {
        let {url: i, method: o, data: s, signal: c, cancelToken: f, timeout: m, onDownloadProgress: h, onUploadProgress: g, responseType: _, headers: v, withCredentials: y=`same-origin`, fetchOptions: b} = Ro(e)
          , x = t || fetch;
        _ = _ ? (_ + ``).toLowerCase() : `text`;
        let S = Bo([c, f && f.toAbortSignal()], m), C = null, w = S && S.unsubscribe && ( () => {
            S.unsubscribe()
        }
        ), ee;
        try {
            if (g && l && o !== `get` && o !== `head` && (ee = await p(v, s)) !== 0) {
                let e = new n(i,{
                    method: `POST`,
                    body: s,
                    duplex: `half`
                }), t;
                if (z.isFormData(s) && (t = e.headers.get(`content-type`)) && v.setContentType(t),
                e.body) {
                    let[t,n] = ko(ee, Oo(Ao(g)));
                    s = Wo(e.body, Go, t, n)
                }
            }
            z.isString(y) || (y = y ? `include` : `omit`);
            let t = a && `credentials`in n.prototype
              , c = {
                ...b,
                signal: S,
                method: o.toUpperCase(),
                headers: v.normalize().toJSON(),
                body: s,
                duplex: `half`,
                credentials: t ? y : void 0
            };
            C = a && new n(i,c);
            let f = await (a ? x(C, b) : x(i, c))
              , m = u && (_ === `stream` || _ === `response`);
            if (u && (h || m && w)) {
                let e = {};
                [`status`, `statusText`, `headers`].forEach(t => {
                    e[t] = f[t]
                }
                );
                let t = z.toFiniteNumber(f.headers.get(`content-length`))
                  , [n,i] = h && ko(t, Oo(Ao(h), !0)) || [];
                f = new r(Wo(f.body, Go, n, () => {
                    i && i(),
                    w && w()
                }
                ),e)
            }
            _ ||= `text`;
            let te = await d[z.findKey(d, _) || `text`](f, e);
            return !m && w && w(),
            await new Promise( (t, n) => {
                wo(t, n, {
                    data: te,
                    headers: bo.from(f.headers),
                    status: f.status,
                    statusText: f.statusText,
                    config: e,
                    request: C
                })
            }
            )
        } catch (t) {
            throw w && w(),
            t && t.name === `TypeError` && /Load failed|fetch/i.test(t.message) ? Object.assign(new B(`Network Error`,B.ERR_NETWORK,e,C,t && t.response), {
                cause: t.cause || t
            }) : B.from(t, t && t.code, e, C, t && t.response)
        }
    }
}
  , Qo = new Map
  , $o = e => {
    let t = e && e.env || {}, {fetch: n, Request: r, Response: i} = t, a = [r, i, n], o = a.length, s, c, l = Qo;
    for (; o--; )
        s = a[o],
        c = l.get(s),
        c === void 0 && l.set(s, c = o ? new Map : Zo(t)),
        l = c;
    return c
}
;
$o();
var es = {
    http: null,
    xhr: zo,
    fetch: {
        get: $o
    }
};
z.forEach(es, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, `name`, {
                value: t
            })
        } catch {}
        Object.defineProperty(e, `adapterName`, {
            value: t
        })
    }
}
);
var ts = e => `- ${e}`
  , ns = e => z.isFunction(e) || e === null || e === !1;
function rs(e, t) {
    e = z.isArray(e) ? e : [e];
    let {length: n} = e, r, i, a = {};
    for (let o = 0; o < n; o++) {
        r = e[o];
        let n;
        if (i = r,
        !ns(r) && (i = es[(n = String(r)).toLowerCase()],
        i === void 0))
            throw new B(`Unknown adapter '${n}'`);
        if (i && (z.isFunction(i) || (i = i.get(t))))
            break;
        a[n || `#` + o] = i
    }
    if (!i) {
        let e = Object.entries(a).map( ([e,t]) => `adapter ${e} ` + (t === !1 ? `is not supported by the environment` : `is not available in the build`));
        throw new B(`There is no suitable adapter to dispatch the request ` + (n ? e.length > 1 ? `since :
` + e.map(ts).join(`
`) : ` ` + ts(e[0]) : `as no adapter specified`),`ERR_NOT_SUPPORT`)
    }
    return i
}
var is = {
    getAdapter: rs,
    adapters: es
};
function as(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new Co(null,e)
}
function os(e) {
    return as(e),
    e.headers = bo.from(e.headers),
    e.data = xo.call(e, e.transformRequest),
    [`post`, `put`, `patch`].indexOf(e.method) !== -1 && e.headers.setContentType(`application/x-www-form-urlencoded`, !1),
    is.getAdapter(e.adapter || uo.adapter, e)(e).then(function(t) {
        return as(e),
        t.data = xo.call(e, e.transformResponse, t),
        t.headers = bo.from(t.headers),
        t
    }, function(t) {
        return So(t) || (as(e),
        t && t.response && (t.response.data = xo.call(e, e.transformResponse, t.response),
        t.response.headers = bo.from(t.response.headers))),
        Promise.reject(t)
    })
}
var ss = `1.14.0`
  , cs = {};
[`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach( (e, t) => {
    cs[e] = function(n) {
        return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e
    }
}
);
var ls = {};
cs.transitional = function(e, t, n) {
    function r(e, t) {
        return `[Axios v` + ss + `] Transitional option '` + e + `'` + t + (n ? `. ` + n : ``)
    }
    return (n, i, a) => {
        if (e === !1)
            throw new B(r(i, ` has been removed` + (t ? ` in ` + t : ``)),B.ERR_DEPRECATED);
        return t && !ls[i] && (ls[i] = !0,
        console.warn(r(i, ` has been deprecated since v` + t + ` and will be removed in the near future`))),
        e ? e(n, i, a) : !0
    }
}
,
cs.spelling = function(e) {
    return (t, n) => (console.warn(`${n} is likely a misspelling of ${e}`),
    !0)
}
;
function us(e, t, n) {
    if (typeof e != `object`)
        throw new B(`options must be an object`,B.ERR_BAD_OPTION_VALUE);
    let r = Object.keys(e)
      , i = r.length;
    for (; i-- > 0; ) {
        let a = r[i]
          , o = t[a];
        if (o) {
            let t = e[a]
              , n = t === void 0 || o(t, a, e);
            if (n !== !0)
                throw new B(`option ` + a + ` must be ` + n,B.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new B(`Unknown option ` + a,B.ERR_BAD_OPTION)
    }
}
var ds = {
    assertOptions: us,
    validators: cs
}
  , fs = ds.validators
  , ps = class {
    constructor(e) {
        this.defaults = e || {},
        this.interceptors = {
            request: new Ya,
            response: new Ya
        }
    }
    async request(e, t) {
        try {
            return await this._request(e, t)
        } catch (e) {
            if (e instanceof Error) {
                let t = {};
                Error.captureStackTrace ? Error.captureStackTrace(t) : t = Error();
                let n = t.stack ? t.stack.replace(/^.+\n/, ``) : ``;
                try {
                    e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, ``)) && (e.stack += `
` + n) : e.stack = n
                } catch {}
            }
            throw e
        }
    }
    _request(e, t) {
        typeof e == `string` ? (t ||= {},
        t.url = e) : t = e || {},
        t = Lo(this.defaults, t);
        let {transitional: n, paramsSerializer: r, headers: i} = t;
        n !== void 0 && ds.assertOptions(n, {
            silentJSONParsing: fs.transitional(fs.boolean),
            forcedJSONParsing: fs.transitional(fs.boolean),
            clarifyTimeoutError: fs.transitional(fs.boolean),
            legacyInterceptorReqResOrdering: fs.transitional(fs.boolean)
        }, !1),
        r != null && (z.isFunction(r) ? t.paramsSerializer = {
            serialize: r
        } : ds.assertOptions(r, {
            encode: fs.function,
            serialize: fs.function
        }, !0)),
        t.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls === void 0 ? t.allowAbsoluteUrls = !0 : t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls),
        ds.assertOptions(t, {
            baseUrl: fs.spelling(`baseURL`),
            withXsrfToken: fs.spelling(`withXSRFToken`)
        }, !0),
        t.method = (t.method || this.defaults.method || `get`).toLowerCase();
        let a = i && z.merge(i.common, i[t.method]);
        i && z.forEach([`delete`, `get`, `head`, `post`, `put`, `patch`, `common`], e => {
            delete i[e]
        }
        ),
        t.headers = bo.concat(a, i);
        let o = []
          , s = !0;
        this.interceptors.request.forEach(function(e) {
            if (typeof e.runWhen == `function` && e.runWhen(t) === !1)
                return;
            s &&= e.synchronous;
            let n = t.transitional || Xa;
            n && n.legacyInterceptorReqResOrdering ? o.unshift(e.fulfilled, e.rejected) : o.push(e.fulfilled, e.rejected)
        });
        let c = [];
        this.interceptors.response.forEach(function(e) {
            c.push(e.fulfilled, e.rejected)
        });
        let l, u = 0, d;
        if (!s) {
            let e = [os.bind(this), void 0];
            for (e.unshift(...o),
            e.push(...c),
            d = e.length,
            l = Promise.resolve(t); u < d; )
                l = l.then(e[u++], e[u++]);
            return l
        }
        d = o.length;
        let f = t;
        for (; u < d; ) {
            let e = o[u++]
              , t = o[u++];
            try {
                f = e(f)
            } catch (e) {
                t.call(this, e);
                break
            }
        }
        try {
            l = os.call(this, f)
        } catch (e) {
            return Promise.reject(e)
        }
        for (u = 0,
        d = c.length; u < d; )
            l = l.then(c[u++], c[u++]);
        return l
    }
    getUri(e) {
        return e = Lo(this.defaults, e),
        Ja(Fo(e.baseURL, e.url, e.allowAbsoluteUrls), e.params, e.paramsSerializer)
    }
}
;
z.forEach([`delete`, `get`, `head`, `options`], function(e) {
    ps.prototype[e] = function(t, n) {
        return this.request(Lo(n || {}, {
            method: e,
            url: t,
            data: (n || {}).data
        }))
    }
}),
z.forEach([`post`, `put`, `patch`], function(e) {
    function t(t) {
        return function(n, r, i) {
            return this.request(Lo(i || {}, {
                method: e,
                headers: t ? {
                    "Content-Type": `multipart/form-data`
                } : {},
                url: n,
                data: r
            }))
        }
    }
    ps.prototype[e] = t(),
    ps.prototype[e + `Form`] = t(!0)
});
var ms = class e {
    constructor(e) {
        if (typeof e != `function`)
            throw TypeError(`executor must be a function.`);
        let t;
        this.promise = new Promise(function(e) {
            t = e
        }
        );
        let n = this;
        this.promise.then(e => {
            if (!n._listeners)
                return;
            let t = n._listeners.length;
            for (; t-- > 0; )
                n._listeners[t](e);
            n._listeners = null
        }
        ),
        this.promise.then = e => {
            let t, r = new Promise(e => {
                n.subscribe(e),
                t = e
            }
            ).then(e);
            return r.cancel = function() {
                n.unsubscribe(t)
            }
            ,
            r
        }
        ,
        e(function(e, r, i) {
            n.reason || (n.reason = new Co(e,r,i),
            t(n.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(e) {
        if (this.reason) {
            e(this.reason);
            return
        }
        this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }
    unsubscribe(e) {
        if (!this._listeners)
            return;
        let t = this._listeners.indexOf(e);
        t !== -1 && this._listeners.splice(t, 1)
    }
    toAbortSignal() {
        let e = new AbortController
          , t = t => {
            e.abort(t)
        }
        ;
        return this.subscribe(t),
        e.signal.unsubscribe = () => this.unsubscribe(t),
        e.signal
    }
    static source() {
        let t;
        return {
            token: new e(function(e) {
                t = e
            }
            ),
            cancel: t
        }
    }
}
;
function hs(e) {
    return function(t) {
        return e.apply(null, t)
    }
}
function gs(e) {
    return z.isObject(e) && e.isAxiosError === !0
}
var _s = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
};
Object.entries(_s).forEach( ([e,t]) => {
    _s[t] = e
}
);
function vs(e) {
    let t = new ps(e)
      , n = Ai(ps.prototype.request, t);
    return z.extend(n, ps.prototype, t, {
        allOwnKeys: !0
    }),
    z.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(t) {
        return vs(Lo(e, t))
    }
    ,
    n
}
var ys = vs(uo);
ys.Axios = ps,
ys.CanceledError = Co,
ys.CancelToken = ms,
ys.isCancel = So,
ys.VERSION = ss,
ys.toFormData = Ua,
ys.AxiosError = B,
ys.Cancel = ys.CanceledError,
ys.all = function(e) {
    return Promise.all(e)
}
,
ys.spread = hs,
ys.isAxiosError = gs,
ys.mergeConfig = Lo,
ys.AxiosHeaders = bo,
ys.formToJSON = e => co(z.isHTMLForm(e) ? new FormData(e) : e),
ys.getAdapter = is.getAdapter,
ys.HttpStatusCode = _s,
ys.default = ys;
var bs = `https://shield.rivi.us`
  , U = ys.create({
    baseURL: bs
});
U.interceptors.request.use(e => {
    let t = localStorage.getItem(`pg_token`);
    return t && (e.headers.Authorization = `Bearer ${t}`),
    e
}
),
U.interceptors.response.use(e => e, e => (e.response?.status === 401 && (localStorage.removeItem(`pg_token`),
window.location.href = `/login`),
Promise.reject(e)));
var xs = e => U.post(`/api/auth/request-code`, {
    email: e
})
  , Ss = async (e, t, n, r) => {
    let i = await U.post(`/api/auth/verify-code`, {
        email: e,
        code: t,
        tosVersion: n,
        privacyVersion: r
    }, {
        validateStatus: e => e < 500
    });
    if (i.status === 409)
        throw Error(`consent_required`);
    if (i.status !== 200)
        throw Error(`invalid_code`);
    return i
}
;
async function Cs(e, t) {
    let n = await fetch(`${bs}/api/auth/accept-terms`, {
        method: `POST`,
        headers: {
            "Content-Type": `application/json`,
            Authorization: `Bearer ${localStorage.getItem(`pg_token`) ?? ``}`
        },
        body: JSON.stringify({
            tosVersion: e,
            privacyVersion: t
        })
    });
    if (!n.ok)
        throw Error(`Failed to accept terms`);
    return n.json()
}
var ws = () => U.get(`/api/devices`)
  , Ts = e => U.delete(`/api/devices/${e}`)
  , Es = (e, t) => U.patch(`/api/devices/${e}`, {
    name: t
})
  , Ds = (e, t) => U.get(`/api/devices/${e}/logs`, {
    params: {
        ...t?.pageToken && {
            pageToken: t.pageToken
        },
        ...t?.days && {
            days: t.days
        },
        ...t?.limit && {
            limit: t.limit
        }
    }
})
  , Os = e => U.get(`/api/devices/${e}/policy`)
  , ks = (e, t) => U.put(`/api/devices/${e}/policy/filtering-mode`, {
    mode: t
})
  , As = (e, t, n) => U.post(`/api/devices/${e}/policy/rules`, {
    domain: t,
    action: n
})
  , js = (e, t) => U.put(`/api/devices/${e}/policy/block-categories`, {
    enabled: t
})
  , Ms = () => U.get(`/api/policy/groups`)
  , Ns = e => U.put(`/api/policy/groups`, e)
  , Ps = e => U.get(`/api/devices/${e}/policy/enabled-groups`)
  , Fs = (e, t) => U.put(`/api/devices/${e}/policy/enabled-groups`, {
    enabledGroupIds: t
})
  , Is = e => U.get(`/api/devices/${e}/policy/schedule`)
  , Ls = (e, t) => U.put(`/api/devices/${e}/policy/schedule`, t)
  , Rs = () => U.get(`/api/blocklists/catalog`)
  , zs = e => U.get(`/api/devices/${e}/policy/blocklist-prefs`)
  , Bs = (e, t) => U.put(`/api/devices/${e}/policy/blocklist-prefs`, t)
  , Vs = {
    enabled: !1,
    idlePauseMinutes: 5,
    creditLockAsBreak: !0,
    rules: []
}
  , Hs = e => U.get(`/api/devices/${e}/policy/breaks`)
  , Us = (e, t) => U.put(`/api/devices/${e}/policy/breaks`, t)
  , Ws = () => U.get(`/api/admin/releases`)
  , Gs = e => U.post(`/api/admin/releases/promote`, {
    version: e
});
function Ks({size: e=28}) {
    return (0,
    P.jsxs)(`svg`, {
        width: e,
        height: e,
        viewBox: `0 0 90 90`,
        fill: `none`,
        xmlns: `http://www.w3.org/2000/svg`,
        "aria-hidden": `true`,
        children: [(0,
        P.jsx)(`path`, {
            d: `M45 70 Q10 55 15 20 Q30 40 45 45 Z`,
            fill: `#60a5fa`
        }), (0,
        P.jsx)(`path`, {
            d: `M45 70 Q80 55 75 20 Q60 40 45 45 Z`,
            fill: `#3b82f6`
        }), (0,
        P.jsx)(`path`, {
            d: `M45 45 Q38 25 45 12 Q52 25 45 45 Z`,
            fill: `#2563eb`
        }), (0,
        P.jsx)(`ellipse`, {
            cx: `45`,
            cy: `68`,
            rx: `18`,
            ry: `6`,
            fill: `#93c5fd`,
            opacity: `0.35`
        }), (0,
        P.jsx)(`circle`, {
            cx: `45`,
            cy: `72`,
            r: `3`,
            fill: `#1e40af`
        })]
    })
}
var qs = `support@rivi.us`
  , Js = `Rivius`
  , Ys = `State of Massachusetts, United States`
  , Xs = `April 13, 2026`;
function Zs({variant: e=`light`}) {
    let t = new Date().getFullYear()
      , n = e === `dark`;
    return (0,
    P.jsx)(`footer`, {
        className: `w-full py-6 px-6 mt-auto ${n ? `bg-transparent` : `border-t border-gray-100 bg-white`}`,
        children: (0,
        P.jsxs)(`div`, {
            className: `max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs`,
            children: [(0,
            P.jsxs)(`span`, {
                className: `text-gray-400`,
                children: [`© `, t, ` `, Js, `. All rights reserved.`]
            }), (0,
            P.jsxs)(`div`, {
                className: `flex items-center gap-5`,
                children: [(0,
                P.jsx)(ui, {
                    to: `/terms`,
                    className: `hover:underline transition-colors ${n ? `text-gray-400 hover:text-gray-200` : `text-gray-500 hover:text-gray-700`}`,
                    children: `Terms of Service`
                }), (0,
                P.jsx)(ui, {
                    to: `/privacy`,
                    className: `hover:underline transition-colors ${n ? `text-gray-400 hover:text-gray-200` : `text-gray-500 hover:text-gray-700`}`,
                    children: `Privacy Policy`
                }), (0,
                P.jsx)(ui, {
                    to: `/faq`,
                    className: `hover:underline transition-colors ${n ? `text-gray-400 hover:text-gray-200` : `text-gray-500 hover:text-gray-700`}`,
                    children: `FAQ`
                }), (0,
                P.jsx)(`a`, {
                    href: `mailto:${qs}`,
                    className: `hover:underline transition-colors ${n ? `text-gray-400 hover:text-gray-200` : `text-gray-500 hover:text-gray-700`}`,
                    children: `Contact`
                })]
            })]
        })
    })
}
function Qs() {
    let e = Bn()
      , [t,n] = (0,
    N.useState)(`email`)
      , [r,i] = (0,
    N.useState)(``)
      , [a,o] = (0,
    N.useState)(``)
      , [s,c] = (0,
    N.useState)(!1)
      , [l,u] = (0,
    N.useState)(``)
      , [d,f] = (0,
    N.useState)(!1)
      , [p,m] = (0,
    N.useState)(!1);
    async function h(e) {
        e.preventDefault(),
        c(!0),
        u(``);
        try {
            await xs(r.trim()),
            f(!0),
            n(`code`)
        } catch {
            u(`Failed to send code. Try again.`)
        } finally {
            c(!1)
        }
    }
    async function g(t) {
        t.preventDefault(),
        c(!0),
        u(``);
        try {
            let t = await Ss(r.trim(), a.trim(), 1, 1);
            localStorage.setItem(`pg_token`, t.data.token),
            localStorage.setItem(`pg_email`, r.trim()),
            e(`/device`)
        } catch (e) {
            e instanceof Error && e.message === `consent_required` ? u(`Please return to the first step and accept the Terms of Service.`) : u(`Invalid or expired code.`)
        } finally {
            c(!1)
        }
    }
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsx)(`div`, {
            className: `flex-1 flex items-center justify-center p-4`,
            children: (0,
            P.jsxs)(`div`, {
                className: `bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-sm p-8`,
                children: [(0,
                P.jsxs)(`div`, {
                    className: `mb-8 text-center`,
                    children: [(0,
                    P.jsx)(Ks, {
                        size: 52
                    }), (0,
                    P.jsx)(`h1`, {
                        className: `text-xl font-semibold text-gray-900 mt-2`,
                        children: `Rivshield`
                    }), (0,
                    P.jsx)(`p`, {
                        className: `text-sm text-gray-500 mt-1`,
                        children: `Parent dashboard`
                    })]
                }), t === `email` ? (0,
                P.jsxs)(`form`, {
                    onSubmit: h,
                    className: `space-y-4`,
                    children: [(0,
                    P.jsxs)(`div`, {
                        children: [(0,
                        P.jsx)(`label`, {
                            className: `block text-sm font-medium text-gray-700 mb-1`,
                            children: `Email address`
                        }), (0,
                        P.jsx)(`input`, {
                            type: `email`,
                            value: r,
                            onChange: e => i(e.target.value),
                            required: !0,
                            autoFocus: !0,
                            placeholder: `you@example.com`,
                            className: `w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                        })]
                    }), (0,
                    P.jsxs)(`div`, {
                        className: `flex items-start gap-2`,
                        children: [(0,
                        P.jsx)(`input`, {
                            type: `checkbox`,
                            id: `consent`,
                            checked: p,
                            onChange: e => m(e.target.checked),
                            className: `mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 [color-scheme:light]`
                        }), (0,
                        P.jsxs)(`label`, {
                            htmlFor: `consent`,
                            className: `text-xs text-gray-600 leading-snug`,
                            children: [`I have read and agree to the`, ` `, (0,
                            P.jsx)(ui, {
                                to: `/terms`,
                                target: `_blank`,
                                className: `text-blue-600 hover:underline`,
                                children: `Terms of Service`
                            }), ` `, `and`, ` `, (0,
                            P.jsx)(ui, {
                                to: `/privacy`,
                                target: `_blank`,
                                className: `text-blue-600 hover:underline`,
                                children: `Privacy Policy`
                            }), `.`]
                        })]
                    }), l && (0,
                    P.jsx)(`p`, {
                        className: `text-sm text-red-600`,
                        children: l
                    }), (0,
                    P.jsx)(`button`, {
                        type: `submit`,
                        disabled: s || !r || !p,
                        className: `w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-colors`,
                        children: s ? `Sending…` : `Send login code`
                    })]
                }) : (0,
                P.jsxs)(`form`, {
                    onSubmit: g,
                    className: `space-y-4`,
                    children: [d && (0,
                    P.jsxs)(`p`, {
                        className: `text-sm text-gray-600 bg-blue-50 border border-blue-100 rounded-lg p-3`,
                        children: [`A 6-digit code was sent to `, (0,
                        P.jsx)(`strong`, {
                            children: r
                        }), `. It expires in 10 minutes.`]
                    }), (0,
                    P.jsxs)(`div`, {
                        children: [(0,
                        P.jsx)(`label`, {
                            className: `block text-sm font-medium text-gray-700 mb-1`,
                            children: `Login code`
                        }), (0,
                        P.jsx)(`input`, {
                            type: `text`,
                            value: a,
                            onChange: e => o(e.target.value.replace(/\D/g, ``).slice(0, 6)),
                            required: !0,
                            autoFocus: !0,
                            placeholder: `123456`,
                            inputMode: `numeric`,
                            className: `w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-blue-500`
                        })]
                    }), l && (0,
                    P.jsx)(`p`, {
                        className: `text-sm text-red-600`,
                        children: l
                    }), (0,
                    P.jsx)(`button`, {
                        type: `submit`,
                        disabled: s || a.length !== 6,
                        className: `w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors`,
                        children: s ? `Verifying…` : `Sign in`
                    }), (0,
                    P.jsx)(`button`, {
                        type: `button`,
                        onClick: () => {
                            n(`email`),
                            o(``),
                            u(``)
                        }
                        ,
                        className: `w-full text-sm text-gray-500 hover:text-gray-700`,
                        children: `← Use a different email`
                    })]
                })]
            })
        }), (0,
        P.jsx)(Zs, {})]
    })
}
function $s() {
    let e = localStorage.getItem(`pg_token`);
    if (!e)
        return {
            email: ``,
            isAdmin: !1,
            tosVersion: 0,
            privacyVersion: 0
        };
    try {
        let t = JSON.parse(atob(e.split(`.`)[1]));
        return {
            email: t.email ?? ``,
            isAdmin: t.admin === `true` || t.admin === !0,
            tosVersion: Number(t.tosVersion ?? 0),
            privacyVersion: Number(t.privacyVersion ?? 0)
        }
    } catch {
        return {
            email: ``,
            isAdmin: !1,
            tosVersion: 0,
            privacyVersion: 0
        }
    }
}
function ec({device: e, onConfirm: t, onCancel: n}) {
    let[r,i] = (0,
    N.useState)(!1)
      , [a,o] = (0,
    N.useState)(!1)
      , [s,c] = (0,
    N.useState)(null);
    async function l() {
        o(!0),
        c(null);
        try {
            await t()
        } catch (e) {
            c(e instanceof Error ? e.message : `Failed to remove device`)
        } finally {
            o(!1)
        }
    }
    return (0,
    P.jsx)(`div`, {
        role: `dialog`,
        "aria-modal": `true`,
        className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40`,
        onClick: e => e.target === e.currentTarget && n(),
        children: (0,
        P.jsxs)(`div`, {
            className: `bg-white rounded-xl shadow-xl w-full max-w-sm p-6`,
            children: [(0,
            P.jsxs)(`h3`, {
                className: `text-lg font-semibold text-gray-900 mb-1`,
                children: [`Remove "`, e.name, `"?`]
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-500 mb-4`,
                children: `This will permanently delete the device, all browsing rules, and all activity history. To reconnect, run the installer on the device again.`
            }), (0,
            P.jsx)(`hr`, {
                className: `my-4 border-gray-100`
            }), (0,
            P.jsxs)(`label`, {
                className: `flex items-start gap-3 mb-4 cursor-pointer select-none`,
                children: [(0,
                P.jsx)(`span`, {
                    className: `mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${r ? `bg-red-600 border-red-600` : `border-gray-300 bg-white`}`,
                    onClick: () => i(e => !e),
                    children: r && (0,
                    P.jsx)(`svg`, {
                        className: `h-3 w-3 text-white`,
                        viewBox: `0 0 12 12`,
                        fill: `none`,
                        stroke: `currentColor`,
                        strokeWidth: `2`,
                        children: (0,
                        P.jsx)(`path`, {
                            d: `M2 6l3 3 5-5`
                        })
                    })
                }), (0,
                P.jsx)(`input`, {
                    type: `checkbox`,
                    checked: r,
                    onChange: e => i(e.target.checked),
                    className: `sr-only`
                }), (0,
                P.jsx)(`span`, {
                    className: `text-sm text-gray-700`,
                    children: `I understand this cannot be undone`
                })]
            }), s && (0,
            P.jsx)(`p`, {
                className: `text-sm text-red-600 mb-3`,
                children: s
            }), (0,
            P.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [(0,
                P.jsx)(`button`, {
                    onClick: n,
                    disabled: a,
                    className: `px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg disabled:opacity-50`,
                    children: `Cancel`
                }), (0,
                P.jsx)(`button`, {
                    onClick: l,
                    disabled: !r || a,
                    className: `px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed ml-auto`,
                    children: a ? `Removing…` : `Remove device`
                })]
            })]
        })
    })
}
var tc = {
    whitelist: [],
    blacklist: []
};
function nc(e) {
    let t = tt()
      , {data: n} = gt({
        queryKey: [`groups`],
        queryFn: async () => (await Ms()).data ?? tc,
        staleTime: 3e4
    })
      , r = (n ?? tc)[e]
      , i = (0,
    N.useCallback)(async e => {
        t.setQueryData([`groups`], e),
        await Ns(e)
    }
    , [t]);
    return {
        groups: r,
        saveGroup: (0,
        N.useCallback)(async n => {
            let r = t.getQueryData([`groups`]) ?? tc
              , a = r[e]
              , o = a.some(e => e.id === n.id) ? a.map(e => e.id === n.id ? n : e) : [...a, n];
            await i({
                ...r,
                [e]: o
            })
        }
        , [e, t, i]),
        deleteGroup: (0,
        N.useCallback)(n => {
            let r = t.getQueryData([`groups`]) ?? tc;
            i({
                ...r,
                [e]: r[e].filter(e => e.id !== n)
            })
        }
        , [e, t, i])
    }
}
function rc(e) {
    let t = tt()
      , {data: n} = gt({
        queryKey: [`enabledGroups`, e],
        queryFn: async () => (await Ps(e)).data?.enabledGroupIds ?? [],
        staleTime: 3e4
    })
      , r = new Set(n ?? [])
      , i = _t({
        mutationFn: t => Fs(e, t),
        onMutate: n => {
            t.setQueryData([`enabledGroups`, e], n)
        }
        ,
        onError: () => {
            t.invalidateQueries({
                queryKey: [`enabledGroups`, e]
            })
        }
    });
    function a(n) {
        let a = t.getQueryData([`enabledGroups`, e]) ?? []
          , o = r.has(n) ? a.filter(e => e !== n) : [...a, n];
        i.mutate(o)
    }
    return {
        enabledGroupIds: r,
        toggleGroup: a
    }
}
var ic = {
    timezone: ``,
    blocks: []
};
function ac(e) {
    let t = tt()
      , {data: n, isPending: r} = gt({
        queryKey: [`schedule`, e],
        queryFn: () => Is(e).then(e => e.data ?? ic),
        staleTime: 3e4,
        enabled: !!e
    })
      , i = (0,
    N.useCallback)(async n => {
        t.setQueryData([`schedule`, e], n),
        await Ls(e, n)
    }
    , [e, t])
      , a = (0,
    N.useCallback)(n => {
        let r = t.getQueryData([`schedule`, e]) ?? ic
          , a = r.blocks.some(e => e.id === n.id) ? r.blocks.map(e => e.id === n.id ? n : e) : [...r.blocks, n];
        i({
            ...r,
            blocks: a
        })
    }
    , [e, t, i])
      , o = (0,
    N.useCallback)(n => {
        let r = t.getQueryData([`schedule`, e]) ?? ic;
        i({
            ...r,
            blocks: r.blocks.filter(e => e.id !== n)
        })
    }
    , [e, t, i])
      , s = (0,
    N.useCallback)(n => {
        let r = t.getQueryData([`schedule`, e]) ?? ic
          , a = r.blocks.map(e => e.id === n ? {
            ...e,
            enabled: !e.enabled
        } : e);
        i({
            ...r,
            blocks: a
        })
    }
    , [e, t, i])
      , c = (0,
    N.useCallback)(n => {
        i({
            ...t.getQueryData([`schedule`, e]) ?? ic,
            timezone: n
        })
    }
    , [e, t, i])
      , l = (0,
    N.useCallback)(n => {
        let r = t.getQueryData([`schedule`, e]) ?? ic
          , a = r.blocks.map(e => ({
            ...e,
            groupIds: e.groupIds?.filter(e => e !== n)
        }));
        i({
            ...r,
            blocks: a
        })
    }
    , [e, t, i]);
    return {
        schedule: n ?? ic,
        isPending: r,
        saveBlock: a,
        deleteBlock: o,
        toggleBlock: s,
        setTimezone: c,
        removeGroupFromBlocks: l
    }
}
function oc(e) {
    let t = tt()
      , {data: n, isPending: r} = gt({
        queryKey: [`breaks`, e],
        queryFn: () => Hs(e).then(e => e.data ?? Vs),
        staleTime: 3e4,
        enabled: !!e
    })
      , i = (0,
    N.useCallback)(async n => {
        t.setQueryData([`breaks`, e], n),
        await Us(e, n)
    }
    , [e, t])
      , a = (0,
    N.useCallback)( () => {
        let n = t.getQueryData([`breaks`, e]) ?? Vs;
        i({
            ...n,
            enabled: !n.enabled
        })
    }
    , [e, t, i])
      , o = (0,
    N.useCallback)( (n, r) => {
        i({
            ...t.getQueryData([`breaks`, e]) ?? Vs,
            [n]: r
        })
    }
    , [e, t, i])
      , s = (0,
    N.useCallback)(n => {
        let r = t.getQueryData([`breaks`, e]) ?? Vs;
        i({
            ...r,
            rules: [...r.rules, n]
        })
    }
    , [e, t, i])
      , c = (0,
    N.useCallback)(n => {
        let r = t.getQueryData([`breaks`, e]) ?? Vs
          , a = r.rules.map(e => e.id === n.id ? n : e);
        i({
            ...r,
            rules: a
        })
    }
    , [e, t, i])
      , l = (0,
    N.useCallback)(n => {
        let r = t.getQueryData([`breaks`, e]) ?? Vs;
        i({
            ...r,
            rules: r.rules.filter(e => e.id !== n)
        })
    }
    , [e, t, i]);
    return {
        config: n ?? Vs,
        isPending: r,
        save: i,
        toggleEnabled: a,
        updateGlobal: o,
        addRule: s,
        updateRule: c,
        deleteRule: l
    }
}
function sc({enabled: e, onChange: t}) {
    return (0,
    P.jsx)(`button`, {
        onClick: () => t(!e),
        className: `relative w-8 h-5 rounded-full transition-colors flex-shrink-0 ${e ? `bg-green-500` : `bg-gray-300`}`,
        children: (0,
        P.jsx)(`span`, {
            className: `absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${e ? `translate-x-3` : `translate-x-0`}`
        })
    })
}
function cc(e) {
    let t = {};
    return e.forEach(e => {
        (e.intervalMinutes < 1 || e.intervalMinutes > 480) && (t[e.id + `_interval`] = `Must be 1–480 min`),
        (e.durationMinutes < 1 || e.durationMinutes > 60) && (t[e.id + `_duration`] = `Must be 1–60 min`),
        (e.warnSeconds < 0 || e.warnSeconds > 600) && (t[e.id + `_warn`] = `Must be 0–600 sec`),
        e.durationMinutes * 60 + e.warnSeconds >= e.intervalMinutes * 60 && (t[e.id + `_cross`] = `Duration + warning must be less than interval`)
    }
    ),
    t
}
function lc({deviceId: e}) {
    let {config: t, isPending: n, toggleEnabled: r, save: i} = oc(e)
      , [a,o] = (0,
    N.useState)(null)
      , [s,c] = (0,
    N.useState)(null)
      , [l,u] = (0,
    N.useState)(null)
      , [d,f] = (0,
    N.useState)(!1)
      , p = a ?? t.idlePauseMinutes
      , m = s ?? t.creditLockAsBreak
      , h = l ?? t.rules
      , g = cc(h)
      , _ = Object.keys(g).length > 0
      , v = a !== null || s !== null || l !== null
      , y = (e, n, r) => {
        let i = l ?? t.rules
          , a = typeof r == `boolean` ? r : r === `` ? 0 : Number(r);
        u(i.map(t => t.id === e ? {
            ...t,
            [n]: a
        } : t))
    }
      , b = async (e, n) => {
        let r = l ?? t.rules
          , o = r
          , c = r.map(t => t.id === e ? {
            ...t,
            enabled: n
        } : t)
          , d = {
            ...t,
            idlePauseMinutes: a ?? t.idlePauseMinutes,
            creditLockAsBreak: s ?? t.creditLockAsBreak,
            rules: c
        };
        u(c);
        try {
            await i(d)
        } catch (e) {
            console.error(`Failed to toggle rule:`, e),
            u(o)
        }
    }
      , x = () => {
        let e = l ?? t.rules
          , n = {
            id: crypto.randomUUID(),
            enabled: !0,
            intervalMinutes: 60,
            durationMinutes: 5,
            warnSeconds: 60
        };
        u([...e, n])
    }
      , S = async e => {
        let n = l ?? t.rules
          , r = n
          , o = n.filter(t => t.id !== e)
          , c = {
            ...t,
            idlePauseMinutes: a ?? t.idlePauseMinutes,
            creditLockAsBreak: s ?? t.creditLockAsBreak,
            rules: o
        };
        u(o);
        try {
            await i(c)
        } catch (e) {
            console.error(`Failed to delete rule:`, e),
            u(r)
        }
    }
    ;
    return (0,
    P.jsxs)(`div`, {
        className: `max-w-4xl mx-auto mb-4 rounded-2xl overflow-hidden shadow-sm border bg-white border-gray-200`,
        children: [(0,
        P.jsxs)(`div`, {
            className: `px-5 py-4 flex items-center justify-between border-b border-gray-100`,
            children: [(0,
            P.jsx)(`span`, {
                className: `text-xs font-semibold uppercase tracking-wide text-gray-400`,
                children: `Break Time`
            }), (0,
            P.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0,
                P.jsx)(`span`, {
                    className: `text-xs text-gray-500`,
                    children: t.enabled ? `On` : `Off`
                }), (0,
                P.jsx)(sc, {
                    enabled: t.enabled,
                    onChange: () => r()
                }), (0,
                P.jsx)(`span`, {
                    className: `text-gray-300 cursor-default ml-1`,
                    title: `Scheduled breaks remind the child to take breaks at regular intervals`,
                    children: `ⓘ`
                })]
            })]
        }), (0,
        P.jsxs)(`div`, {
            className: `px-5 py-4 space-y-4`,
            children: [(0,
            P.jsxs)(`div`, {
                className: `space-y-3`,
                children: [(0,
                P.jsxs)(`div`, {
                    className: `flex items-center gap-2 text-sm text-gray-700`,
                    children: [(0,
                    P.jsx)(`span`, {
                        children: `Pause when idle for`
                    }), (0,
                    P.jsx)(`input`, {
                        type: `number`,
                        min: 0,
                        max: 60,
                        value: p,
                        onChange: e => o(Number(e.target.value)),
                        className: `w-16 text-center border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                    }), (0,
                    P.jsx)(`span`, {
                        children: `min`
                    }), (0,
                    P.jsx)(`span`, {
                        className: `text-xs text-gray-400`,
                        children: `(0 = never pause)`
                    })]
                }), (0,
                P.jsxs)(`label`, {
                    className: `flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none`,
                    children: [(0,
                    P.jsx)(`input`, {
                        type: `checkbox`,
                        checked: m,
                        onChange: e => c(e.target.checked),
                        className: `rounded`
                    }), `Count screen-lock ≥ break duration as a natural break`]
                })]
            }), (0,
            P.jsx)(`div`, {
                className: `border-t border-gray-100`
            }), (0,
            P.jsxs)(`div`, {
                className: `space-y-2`,
                children: [h.map(e => (0,
                P.jsxs)(`div`, {
                    className: `bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3 flex-wrap`,
                    children: [(0,
                    P.jsx)(sc, {
                        enabled: e.enabled,
                        onChange: t => b(e.id, t)
                    }), (0,
                    P.jsxs)(`div`, {
                        className: `flex items-center gap-1.5 flex-wrap flex-1`,
                        children: [(0,
                        P.jsx)(`span`, {
                            className: `text-sm text-gray-600`,
                            children: `Every`
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `flex flex-col items-start`,
                            children: [(0,
                            P.jsx)(`input`, {
                                type: `number`,
                                min: 1,
                                max: 480,
                                value: e.intervalMinutes,
                                onChange: t => y(e.id, `intervalMinutes`, t.target.value),
                                className: `w-16 text-center border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                            }), g[e.id + `_interval`] && (0,
                            P.jsx)(`span`, {
                                className: `text-xs text-red-500 mt-1`,
                                children: g[e.id + `_interval`]
                            })]
                        }), (0,
                        P.jsx)(`span`, {
                            className: `text-sm text-gray-600`,
                            children: `min`
                        }), (0,
                        P.jsx)(`span`, {
                            className: `text-sm text-gray-600 ml-2`,
                            children: `for`
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `flex flex-col items-start`,
                            children: [(0,
                            P.jsx)(`input`, {
                                type: `number`,
                                min: 1,
                                max: 60,
                                value: e.durationMinutes,
                                onChange: t => y(e.id, `durationMinutes`, t.target.value),
                                className: `w-16 text-center border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                            }), g[e.id + `_duration`] && (0,
                            P.jsx)(`span`, {
                                className: `text-xs text-red-500 mt-1`,
                                children: g[e.id + `_duration`]
                            })]
                        }), (0,
                        P.jsx)(`span`, {
                            className: `text-sm text-gray-600`,
                            children: `min`
                        }), (0,
                        P.jsx)(`span`, {
                            className: `text-sm text-gray-600 ml-2`,
                            children: `warn`
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `flex flex-col items-start`,
                            children: [(0,
                            P.jsx)(`input`, {
                                type: `number`,
                                min: 0,
                                max: 600,
                                value: e.warnSeconds,
                                onChange: t => y(e.id, `warnSeconds`, t.target.value),
                                className: `w-16 text-center border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                            }), g[e.id + `_warn`] && (0,
                            P.jsx)(`span`, {
                                className: `text-xs text-red-500 mt-1`,
                                children: g[e.id + `_warn`]
                            })]
                        }), (0,
                        P.jsx)(`span`, {
                            className: `text-sm text-gray-600`,
                            children: `sec`
                        }), g[e.id + `_cross`] && (0,
                        P.jsx)(`span`, {
                            className: `text-xs text-red-500 w-full mt-1`,
                            children: g[e.id + `_cross`]
                        })]
                    }), (0,
                    P.jsx)(`button`, {
                        onClick: () => S(e.id),
                        className: `text-gray-300 hover:text-red-400 ml-auto text-base leading-none`,
                        title: `Delete rule`,
                        children: `✕`
                    })]
                }, e.id)), (0,
                P.jsx)(`button`, {
                    onClick: x,
                    className: `w-full text-sm text-blue-600 py-3 border border-dashed border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors`,
                    children: `+ Add break rule`
                })]
            }), v && (0,
            P.jsx)(`div`, {
                className: `flex justify-end pt-1`,
                children: (0,
                P.jsx)(`button`, {
                    onClick: async () => {
                        if (!(_ || d || n)) {
                            f(!0);
                            try {
                                await i({
                                    ...t,
                                    idlePauseMinutes: a ?? t.idlePauseMinutes,
                                    creditLockAsBreak: s ?? t.creditLockAsBreak,
                                    rules: l ?? t.rules
                                }),
                                o(null),
                                c(null),
                                u(null)
                            } finally {
                                f(!1)
                            }
                        }
                    }
                    ,
                    disabled: _ || d || n,
                    className: `px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg disabled:opacity-40`,
                    children: d ? `Saving…` : `Save`
                })
            })]
        })]
    })
}
function uc({domain: e}) {
    return (0,
    P.jsx)(`a`, {
        href: `https://${e}`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `font-mono text-xs text-blue-600 hover:underline`,
        children: e
    })
}
var dc = []
  , fc = [{
    label: `30m`,
    minutes: 30
}, {
    label: `1h`,
    minutes: 60
}, {
    label: `3h`,
    minutes: 180
}]
  , pc = [`📚`, `🎮`, `💬`, `💼`, `🎬`, `🏃`, `🎵`, `🌐`]
  , mc = [{
    id: `blockOnly`,
    label: `Block Only`
}, {
    id: `allowOnly`,
    label: `Allow Only`
}, {
    id: `blockAll`,
    label: `Block All`
}]
  , hc = [`allowOnly`, `blockAll`];
function gc(e) {
    return e ? e.filteringEnabled ? e.whitelistMode ? `allowOnly` : `blockOnly` : e.whitelistMode ? `blockAll` : `allowAll` : `allowAll`
}
function _c(e) {
    return e === `allowOnly` ? `whitelist` : e === `blockOnly` ? `blacklist` : null
}
function vc(e) {
    let t = e.trim().toLowerCase().replace(/\.+$/, ``);
    return t === `*` || t.startsWith(`*.`) && t.slice(2).includes(`*`) || t.includes(`*`) && !t.startsWith(`*.`) ? `` : t
}
function yc(e) {
    let t = [...e]
      , n = new Set(e);
    for (let r of e)
        if (!r.startsWith(`*.`) && r.startsWith(`www.`)) {
            let e = r.slice(4);
            e && !n.has(e) && (n.add(e),
            t.push(e))
        }
    return t
}
function bc(e) {
    let t = e.startsWith(`*.`) ? e.slice(2) : e
      , n = t.split(`.`);
    return n.length < 2 ? t : n.slice(-2).join(`.`)
}
function xc(e) {
    let t = new Set
      , n = [];
    for (let r of e) {
        if (r.startsWith(`*.`)) {
            t.has(r) || (t.add(r),
            n.push(r));
            continue
        }
        let e = bc(r);
        if (!e.includes(`.`))
            t.has(e) || (t.add(e),
            n.push(e));
        else {
            let r = `*.${e}`;
            t.has(r) || (t.add(r),
            n.push(r))
        }
    }
    return n
}
function Sc({group: e, initialDomains: t, onSave: n, onDelete: r, onClose: i}) {
    let[a,o] = (0,
    N.useState)(e?.name ?? ``)
      , [s,c] = (0,
    N.useState)(e?.emoji ?? `🌐`)
      , [l,u] = (0,
    N.useState)(yc((e?.domains ?? t ?? []).map(vc)))
      , [d,f] = (0,
    N.useState)(`simple`)
      , p = d === `simple` ? xc(l) : l
      , [m,h] = (0,
    N.useState)(``);
    function g() {
        let e = vc(m);
        if (!e) {
            h(``);
            return
        }
        l.includes(e) || u(yc([...l, e])),
        h(``)
    }
    function _(e) {
        if (d === `advanced`)
            u(l.filter(t => t !== e));
        else {
            let t = e.startsWith(`*.`) ? e.slice(2) : e;
            u(l.filter(e => bc(e) !== t))
        }
    }
    function v() {
        if (!a.trim())
            return;
        let t = d === `simple` ? xc(l) : l;
        n({
            id: e?.id ?? crypto.randomUUID(),
            name: a.trim(),
            emoji: s,
            domains: t
        }),
        i()
    }
    return (0,
    P.jsx)(`div`, {
        role: `dialog`,
        "aria-modal": `true`,
        className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40`,
        onClick: e => e.target === e.currentTarget && i(),
        children: (0,
        P.jsxs)(`div`, {
            className: `bg-white rounded-xl shadow-xl w-full max-w-md p-6`,
            children: [(0,
            P.jsx)(`h3`, {
                className: `font-semibold text-gray-900 mb-3`,
                children: e ? `Edit group` : `New group`
            }), (0,
            P.jsxs)(`div`, {
                className: `flex mb-4 rounded-lg overflow-hidden border border-gray-200`,
                children: [(0,
                P.jsx)(`button`, {
                    onClick: () => f(`simple`),
                    title: `Blocks entire domains including all subdomains (e.g., *.example.com)`,
                    className: `flex-1 text-xs font-medium py-1.5 transition-colors ${d === `simple` ? `bg-blue-600 text-white` : `bg-white text-gray-500 hover:bg-gray-50`}`,
                    children: `Simple`
                }), (0,
                P.jsx)(`button`, {
                    onClick: () => f(`advanced`),
                    title: `Blocks only specific subdomains as seen in activity history`,
                    className: `flex-1 text-xs font-medium py-1.5 border-l border-gray-200 transition-colors ${d === `advanced` ? `bg-blue-600 text-white border-l-blue-600` : `bg-white text-gray-500 hover:bg-gray-50`}`,
                    children: `Advanced`
                })]
            }), (0,
            P.jsx)(`div`, {
                className: `flex gap-2 mb-4 flex-wrap`,
                children: pc.map(e => (0,
                P.jsx)(`button`, {
                    onClick: () => c(e),
                    className: `text-xl p-1.5 rounded-lg border-2 transition-colors ${s === e ? `border-blue-500 bg-blue-50` : `border-transparent hover:border-gray-200`}`,
                    children: e
                }, e))
            }), (0,
            P.jsx)(`input`, {
                value: a,
                onChange: e => o(e.target.value),
                placeholder: `Group name`,
                className: `w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500`
            }), p.length > 0 && (0,
            P.jsx)(`div`, {
                className: `flex flex-wrap gap-1.5 mb-3 max-h-48 overflow-y-auto`,
                children: p.map(e => (0,
                P.jsxs)(`span`, {
                    className: `flex items-center gap-1 text-xs font-mono bg-gray-100 rounded-full px-2 py-0.5`,
                    children: [e, (0,
                    P.jsx)(`button`, {
                        onClick: () => _(e),
                        className: `text-gray-400 hover:text-red-500 leading-none`,
                        children: `×`
                    })]
                }, e))
            }), (0,
            P.jsxs)(`div`, {
                className: `flex gap-2 mb-5`,
                children: [(0,
                P.jsx)(`input`, {
                    value: m,
                    onChange: e => h(e.target.value),
                    onKeyDown: e => e.key === `Enter` && g(),
                    placeholder: `example.com or *.example.com`,
                    className: `flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500`
                }), (0,
                P.jsx)(`button`, {
                    onClick: g,
                    className: `px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg`,
                    children: `Add`
                })]
            }), (0,
            P.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0,
                P.jsx)(`button`, {
                    onClick: v,
                    disabled: !a.trim(),
                    className: `px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg disabled:opacity-40`,
                    children: `Save`
                }), (0,
                P.jsx)(`button`, {
                    onClick: i,
                    className: `px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg`,
                    children: `Cancel`
                }), e && (0,
                P.jsx)(`button`, {
                    onClick: () => {
                        r(e.id),
                        i()
                    }
                    ,
                    className: `ml-auto text-sm text-red-500 hover:text-red-700`,
                    children: `Delete group`
                })]
            })]
        })
    })
}
function Cc({domains: e, groups: t, onAdd: n, onClose: r}) {
    let[i,a] = (0,
    N.useState)(t[0]?.id ?? `__new__`)
      , [o,s] = (0,
    N.useState)(``);
    function c() {
        i === `__new__` && !o.trim() || (n(i === `__new__` ? `__new__:${o.trim()}` : i, e),
        r())
    }
    return (0,
    P.jsx)(`div`, {
        role: `dialog`,
        "aria-modal": `true`,
        className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40`,
        onClick: e => e.target === e.currentTarget && r(),
        children: (0,
        P.jsxs)(`div`, {
            className: `bg-white rounded-xl shadow-xl w-full max-w-sm p-6`,
            children: [(0,
            P.jsx)(`h3`, {
                className: `font-semibold text-gray-900 mb-1`,
                children: `Add to group`
            }), (0,
            P.jsx)(`p`, {
                className: `text-xs text-gray-500 font-mono mb-4`,
                children: e.join(`, `)
            }), (0,
            P.jsx)(`label`, {
                className: `block text-xs font-medium text-gray-600 mb-1`,
                children: `Group`
            }), (0,
            P.jsxs)(`select`, {
                value: i,
                onChange: e => a(e.target.value),
                className: `w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-3 focus:outline-none`,
                children: [t.map(e => (0,
                P.jsxs)(`option`, {
                    value: e.id,
                    children: [e.emoji, ` `, e.name]
                }, e.id)), (0,
                P.jsx)(`option`, {
                    value: `__new__`,
                    children: `+ Create new group`
                })]
            }), i === `__new__` && (0,
            P.jsx)(`input`, {
                value: o,
                onChange: e => s(e.target.value),
                placeholder: `Group name`,
                className: `w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500`
            }), (0,
            P.jsxs)(`div`, {
                className: `flex gap-2`,
                children: [(0,
                P.jsx)(`button`, {
                    onClick: c,
                    disabled: i === `__new__` && !o.trim(),
                    className: `px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg disabled:opacity-40`,
                    children: `Confirm`
                }), (0,
                P.jsx)(`button`, {
                    onClick: r,
                    className: `px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg`,
                    children: `Cancel`
                })]
            })]
        })
    })
}
var wc = {
    allowAll: {
        activeDesc: `Active — all traffic is allowed, no filtering applied`,
        inactiveDesc: `Inactive — enable to allow all traffic without filtering`
    },
    allowOnly: {
        activeDesc: `Active — only listed sites are allowed, everything else is blocked`,
        inactiveDesc: `Inactive — enable to block everything except listed sites`
    },
    blockOnly: {
        activeDesc: `Active — listed sites are blocked, everything else is allowed`,
        inactiveDesc: `Inactive — enable to block only listed sites`
    },
    blockAll: {
        activeDesc: `Active — all internet traffic is blocked`,
        inactiveDesc: `Inactive — enable to block all internet traffic`
    }
};
function Tc({deviceId: e, blockDomains: t, onBlockDomainsConsumed: n, scheduleOverride: r}) {
    let i = tt()
      , [a,o] = vi()
      , [s,c] = (0,
    N.useState)(yc((t ?? []).map(vc)))
      , l = a.get(`tab`)
      , {data: u} = gt({
        queryKey: [`policy`, e],
        queryFn: () => Os(e).then(e => e.data)
    })
      , d = gc(u)
      , f = t?.length || d === `allowAll` ? `blockOnly` : d
      , p = l && mc.some(e => e.id === l) ? l : f
      , m = e => o(t => {
        let n = new URLSearchParams(t);
        return n.set(`tab`, e),
        n
    }
    , {
        replace: !0
    })
      , [h,g] = (0,
    N.useState)(0)
      , [_,v] = (0,
    N.useState)(t?.length ? `new` : null)
      , [y,b] = (0,
    N.useState)( () => {
        if (hc.includes(l))
            return !0;
        let t = i.getQueryData([`policy`, e]);
        return hc.includes(gc(t))
    }
    );
    (0,
    N.useEffect)( () => {
        hc.includes(d) && b(!0)
    }
    , [d]);
    let[x,S] = (0,
    N.useState)(null)
      , [C,w] = (0,
    N.useState)(null)
      , {schedule: ee, removeGroupFromBlocks: te} = ac(e);
    (0,
    N.useEffect)( () => {
        t?.length && (n?.(),
        l || o(e => {
            let t = new URLSearchParams(e);
            return t.set(`tab`, `blockOnly`),
            t
        }
        , {
            replace: !0
        }))
    }
    , []);
    let {data: T} = gt({
        queryKey: [`logs`, e],
        queryFn: () => Ds(e).then(e => e.data)
    })
      , E = _c(p)
      , D = nc(`whitelist`)
      , ne = nc(`blacklist`)
      , {groups: re, saveGroup: ie, deleteGroup: ae} = E === `whitelist` ? D : ne
      , {enabledGroupIds: oe, toggleGroup: se} = rc(e)
      , O = T?.items ?? dc
      , k = (0,
    N.useMemo)( () => {
        let e = Date.now() - fc[h].minutes * 6e4;
        return [...new Set(O.filter(t => new Date(t.timestamp).getTime() >= e).map(e => e.domain))]
    }
    , [O, h]);
    async function ce(t) {
        let n = !re.some(e => e.id === t.id);
        await ie(t),
        n && se(t.id),
        i.invalidateQueries({
            queryKey: [`policy`, e]
        })
    }
    function le(t) {
        e && (ae(t),
        te(t),
        i.invalidateQueries({
            queryKey: [`policy`, e]
        }))
    }
    function ue(t) {
        if (!e)
            return;
        let n = (ee.blocks ?? []).filter(e => e.groupIds?.includes(t));
        if (n.length > 0) {
            w({
                groupId: t,
                groupName: re.find(e => e.id === t)?.name ?? `this group`,
                blockNames: n.map(e => e.name)
            });
            return
        }
        le(t)
    }
    function de(e, t) {
        if (e.startsWith(`__new__:`)) {
            let n = e.slice(8);
            ce({
                id: crypto.randomUUID(),
                name: n,
                emoji: `🌐`,
                domains: yc(t)
            })
        } else {
            let n = re.find(t => t.id === e);
            n && ce({
                ...n,
                domains: yc([...new Set([...n.domains, ...t])])
            })
        }
    }
    async function A(t, n) {
        if (!e)
            return;
        let r = n ? t : `allowAll`
          , a = r === `allowOnly` || r === `blockOnly`
          , o = r === `allowOnly` || r === `blockAll`;
        i.setQueryData([`policy`, e], e => e && {
            ...e,
            filteringEnabled: a,
            whitelistMode: o
        }),
        i.setQueryData([`devices`], t => t?.map(t => t.deviceId === e ? {
            ...t,
            filteringEnabled: a,
            whitelistMode: o
        } : t));
        try {
            await ks(e, r)
        } finally {
            i.invalidateQueries({
                queryKey: [`policy`, e]
            }),
            i.invalidateQueries({
                queryKey: [`devices`]
            })
        }
    }
    let j = _t({
        mutationFn: t => js(e, t),
        onMutate: async t => {
            await i.cancelQueries({
                queryKey: [`devices`]
            }),
            i.setQueryData([`devices`], n => n?.map(n => n.deviceId === e ? {
                ...n,
                blockCategories: t
            } : n))
        }
        ,
        onSuccess: () => {
            i.invalidateQueries({
                queryKey: [`policy`, e]
            }),
            i.invalidateQueries({
                queryKey: [`devices`]
            })
        }
    })
      , fe = d === p
      , pe = wc[p]
      , me = p === `allowOnly` || p === `blockOnly`;
    return (0,
    P.jsxs)(P.Fragment, {
        children: [r && (0,
        P.jsxs)(`div`, {
            className: `max-w-4xl mx-auto mb-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800`,
            children: [(0,
            P.jsx)(`span`, {
                className: `mt-0.5 text-lg leading-none`,
                children: `🕐`
            }), (0,
            P.jsxs)(`div`, {
                className: `text-left`,
                children: [(0,
                P.jsxs)(`p`, {
                    className: `font-semibold`,
                    children: [`Schedule "`, r.name, `" is active`]
                }), (0,
                P.jsxs)(`p`, {
                    className: `mt-0.5`,
                    children: [`Mode: `, {
                        allowAll: `Allow All`,
                        allowOnly: `Allow Only`,
                        blockOnly: `Block Only`,
                        blockAll: `Block All`
                    }[r.mode] ?? r.mode, ` · Ends at `, r.endTime]
                }), (0,
                P.jsx)(`p`, {
                    className: `mt-1 text-amber-600`,
                    children: `The rules below are paused until the schedule ends.`
                })]
            })]
        }), (0,
        P.jsx)(lc, {
            deviceId: e
        }), (0,
        P.jsx)(`div`, {
            className: r ? `opacity-50` : ``,
            children: (0,
            P.jsxs)(`div`, {
                className: `max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-sm border transition-all ${fe ? `bg-white border-gray-200` : `bg-gray-50 border-gray-300 border-dashed`}`,
                children: [(0,
                P.jsxs)(`div`, {
                    className: `px-5 py-4 flex items-center gap-3 flex-wrap`,
                    children: [(0,
                    P.jsx)(`span`, {
                        className: `text-xs font-semibold uppercase tracking-wide text-gray-400`,
                        children: `Mode`
                    }), (0,
                    P.jsxs)(`div`, {
                        className: `flex items-center gap-1.5 flex-wrap flex-1`,
                        children: [mc.filter(e => !hc.includes(e.id) || y).map(e => {
                            let t = d === e.id
                              , n = p === e.id;
                            return (0,
                            P.jsxs)(`button`, {
                                onClick: () => m(e.id),
                                className: `inline-flex items-center gap-1.5 text-xs rounded-full border transition-colors ${n ? `pl-3 pr-1.5 py-1 font-semibold ${t ? `bg-green-50 border-green-300 text-green-800` : `bg-gray-100 border-gray-300 text-gray-700`}` : `px-3 py-1.5 border-gray-200 text-gray-500 hover:border-gray-300`}`,
                                children: [(0,
                                P.jsx)(`span`, {
                                    className: `inline-block w-2 h-2 rounded-full flex-shrink-0 ${t ? `bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]` : `bg-red-400`}`
                                }), e.label, n && (0,
                                P.jsx)(`span`, {
                                    onClick: n => {
                                        n.stopPropagation(),
                                        A(e.id, !t)
                                    }
                                    ,
                                    className: `relative inline-block w-7 h-4 rounded-full transition-colors flex-shrink-0 cursor-pointer ml-0.5 ${t ? `bg-green-500` : `bg-gray-300`}`,
                                    children: (0,
                                    P.jsx)(`span`, {
                                        className: `absolute top-0.5 left-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform ${t ? `translate-x-3` : `translate-x-0`}`
                                    })
                                })]
                            }, e.id)
                        }
                        ), (0,
                        P.jsx)(`button`, {
                            onClick: () => {
                                let e = !y;
                                b(e),
                                !e && hc.includes(p) && m(`blockOnly`)
                            }
                            ,
                            disabled: y && hc.includes(d),
                            title: y && hc.includes(d) ? `Cannot hide advanced modes while one is active` : void 0,
                            className: `inline-flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-full border border-dashed border-gray-300 text-gray-400 hover:border-gray-400 hover:text-gray-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:text-gray-400`,
                            children: y ? `− Advanced` : `+ Advanced`
                        })]
                    })]
                }), fe ? (0,
                P.jsx)(`div`, {
                    className: `px-5 py-2 text-xs bg-green-50 text-green-700`,
                    children: pe.activeDesc
                }) : (0,
                P.jsxs)(`div`, {
                    className: `px-5 py-3 flex items-center justify-between bg-red-50 border-t border-red-100`,
                    children: [(0,
                    P.jsxs)(`div`, {
                        className: `flex items-center gap-2 text-sm text-red-800`,
                        children: [(0,
                        P.jsx)(`svg`, {
                            xmlns: `http://www.w3.org/2000/svg`,
                            viewBox: `0 0 20 20`,
                            fill: `currentColor`,
                            className: `w-4 h-4 flex-shrink-0`,
                            children: (0,
                            P.jsx)(`path`, {
                                fillRule: `evenodd`,
                                d: `M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z`,
                                clipRule: `evenodd`
                            })
                        }), (0,
                        P.jsx)(`span`, {
                            children: d === `allowAll` ? `Allow All is active — all traffic is permitted, no filtering applied` : `Not active — rules below won't apply`
                        })]
                    }), (0,
                    P.jsx)(`button`, {
                        onClick: () => A(p, !0),
                        className: `text-xs font-semibold bg-red-200 hover:bg-red-300 text-red-900 px-3 py-1.5 rounded-lg transition-colors`,
                        children: `Activate`
                    })]
                }), (0,
                P.jsxs)(`div`, {
                    className: fe ? `` : `opacity-40`,
                    children: [p === `blockOnly` && (0,
                    P.jsxs)(`div`, {
                        className: `px-5 py-3 flex items-center justify-between border-b border-gray-100 bg-gray-50`,
                        children: [(0,
                        P.jsxs)(`div`, {
                            children: [(0,
                            P.jsx)(`span`, {
                                className: `text-xs font-semibold text-gray-700`,
                                children: `Block categories`
                            }), (0,
                            P.jsx)(`span`, {
                                className: `ml-2 text-xs text-gray-400`,
                                children: `Apply category blocklists (configured in Categories tab)`
                            })]
                        }), (0,
                        P.jsx)(sc, {
                            enabled: u?.blockCategories ?? !0,
                            onChange: e => j.mutate(e)
                        })]
                    }), me ? (0,
                    P.jsxs)(`div`, {
                        className: `px-5 py-4`,
                        children: [p === `allowOnly` && (0,
                        P.jsxs)(`div`, {
                            className: `mb-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800`,
                            children: [(0,
                            P.jsx)(`span`, {
                                className: `mt-0.5 shrink-0`,
                                children: `⚠️`
                            }), (0,
                            P.jsx)(`span`, {
                                children: `Only explicitly listed sites will be accessible. This may disrupt services you rely on — for example, captive portal login pages at public Wi-Fi locations (hotels, airports, coffee shops) will not load unless their domains are allowed. Review your allowlist carefully before enabling. Use at your own risk.`
                            })]
                        }), re.length === 0 && (0,
                        P.jsx)(`p`, {
                            className: `text-sm text-gray-400 text-center py-8`,
                            children: `No groups yet. Create one or add sites from recent activity.`
                        }), re.map(e => {
                            let t = oe.has(e.id);
                            return (0,
                            P.jsxs)(`div`, {
                                className: `bg-gray-50 border border-gray-100 rounded-xl p-3 mb-3 transition-opacity ${t ? `` : `opacity-50`}`,
                                children: [(0,
                                P.jsxs)(`div`, {
                                    className: `flex items-center justify-between mb-2`,
                                    children: [(0,
                                    P.jsxs)(`div`, {
                                        className: `flex items-center gap-2 font-semibold text-sm text-gray-900`,
                                        children: [(0,
                                        P.jsx)(`span`, {
                                            children: e.emoji
                                        }), (0,
                                        P.jsx)(`span`, {
                                            children: e.name
                                        }), (0,
                                        P.jsxs)(`span`, {
                                            className: `text-xs text-gray-400 font-normal`,
                                            children: [e.domains.length, ` `, e.domains.length === 1 ? `site` : `sites`]
                                        })]
                                    }), (0,
                                    P.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [(0,
                                        P.jsx)(`div`, {
                                            className: `flex items-center gap-1 text-xs`,
                                            children: t ? (0,
                                            P.jsxs)(P.Fragment, {
                                                children: [(0,
                                                P.jsx)(`svg`, {
                                                    xmlns: `http://www.w3.org/2000/svg`,
                                                    viewBox: `0 0 24 24`,
                                                    fill: `currentColor`,
                                                    className: `w-3.5 h-3.5 text-red-500`,
                                                    children: (0,
                                                    P.jsx)(`path`, {
                                                        fillRule: `evenodd`,
                                                        d: `M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z`,
                                                        clipRule: `evenodd`
                                                    })
                                                }), (0,
                                                P.jsx)(`span`, {
                                                    className: `text-red-500 font-medium`,
                                                    children: `Blocked`
                                                })]
                                            }) : (0,
                                            P.jsxs)(P.Fragment, {
                                                children: [(0,
                                                P.jsx)(`svg`, {
                                                    xmlns: `http://www.w3.org/2000/svg`,
                                                    viewBox: `0 0 24 24`,
                                                    fill: `currentColor`,
                                                    className: `w-3.5 h-3.5 text-gray-400`,
                                                    children: (0,
                                                    P.jsx)(`path`, {
                                                        d: `M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 00-7.5 0v3h.75a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3H15v-3c0-2.9-2.35-5.25-5.25-5.25S4.5 3.85 4.5 6.75v.75a.75.75 0 01-1.5 0V6.75C3 3.85 5.35 1.5 8.25 1.5H18z`
                                                    })
                                                }), (0,
                                                P.jsx)(`span`, {
                                                    className: `text-gray-400`,
                                                    children: `Not blocked`
                                                })]
                                            })
                                        }), (0,
                                        P.jsx)(sc, {
                                            enabled: t,
                                            onChange: () => se(e.id)
                                        }), (0,
                                        P.jsx)(`button`, {
                                            onClick: () => v(e),
                                            className: `text-xs px-3 py-1 rounded-full bg-white hover:bg-gray-100 text-gray-600 border border-gray-200`,
                                            children: `Edit`
                                        })]
                                    })]
                                }), e.domains.length > 0 && (0,
                                P.jsx)(`div`, {
                                    className: `flex flex-wrap gap-1.5`,
                                    children: e.domains.map(e => (0,
                                    P.jsx)(`span`, {
                                        className: `text-xs font-mono bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-600`,
                                        children: e
                                    }, e))
                                })]
                            }, e.id)
                        }
                        ), (0,
                        P.jsx)(`button`, {
                            onClick: () => v(`new`),
                            className: `w-full text-sm text-blue-600 py-3 border border-dashed border-blue-200 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2`,
                            children: `+ New group`
                        })]
                    }) : p === `blockAll` ? (0,
                    P.jsxs)(`div`, {
                        className: `flex flex-col items-center justify-center py-16`,
                        children: [(0,
                        P.jsx)(`div`, {
                            className: `text-4xl mb-4`,
                            children: `🚫`
                        }), (0,
                        P.jsx)(`div`, {
                            className: `text-lg font-semibold text-gray-700 mb-1`,
                            children: `All traffic blocked`
                        }), (0,
                        P.jsx)(`div`, {
                            className: `text-sm text-gray-400 max-w-xs text-center`,
                            children: `All internet access is blocked. No rules are needed.`
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `mt-6 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800 max-w-xs text-left`,
                            children: [(0,
                            P.jsx)(`span`, {
                                className: `mt-0.5 shrink-0`,
                                children: `⚠️`
                            }), (0,
                            P.jsx)(`span`, {
                                children: `This mode blocks all DNS traffic and may disrupt services you rely on. For example, captive portal login pages at public Wi-Fi locations (hotels, airports, coffee shops) will not load. Review your dependencies before enabling. Use at your own risk.`
                            })]
                        })]
                    }) : (0,
                    P.jsxs)(`div`, {
                        className: `flex flex-col items-center justify-center py-16`,
                        children: [(0,
                        P.jsx)(`div`, {
                            className: `text-4xl mb-4`,
                            children: `🌐`
                        }), (0,
                        P.jsx)(`div`, {
                            className: `text-lg font-semibold text-gray-700 mb-1`,
                            children: `No filtering active`
                        }), (0,
                        P.jsx)(`div`, {
                            className: `text-sm text-gray-400 max-w-xs text-center`,
                            children: `All websites are accessible. Switch to another mode to manage rules.`
                        })]
                    }), me && (0,
                    P.jsxs)(`div`, {
                        className: `border-t border-gray-100 px-5 py-4 bg-gray-50/50`,
                        children: [(0,
                        P.jsxs)(`div`, {
                            className: `flex items-center gap-3 mb-3 flex-wrap`,
                            children: [(0,
                            P.jsx)(`span`, {
                                className: `text-xs font-semibold uppercase tracking-wide text-gray-400`,
                                children: `Quick add from history`
                            }), (0,
                            P.jsx)(`div`, {
                                className: `flex gap-1.5`,
                                children: fc.map( (e, t) => (0,
                                P.jsx)(`button`, {
                                    onClick: () => g(t),
                                    className: `text-xs px-2 py-1 rounded-full border transition-colors ${t === h ? `bg-blue-600 text-white border-blue-600` : `bg-white text-gray-500 border-gray-200 hover:border-gray-300`}`,
                                    children: e.label
                                }, e.label))
                            })]
                        }), k.length === 0 && (0,
                        P.jsx)(`p`, {
                            className: `text-xs text-gray-400 text-center py-4`,
                            children: `No recent activity`
                        }), k.length > 0 && (0,
                        P.jsxs)(`div`, {
                            className: `flex flex-wrap items-center gap-1.5`,
                            children: [k.map(e => (0,
                            P.jsxs)(`span`, {
                                className: `inline-flex items-center gap-1 bg-white border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-mono text-gray-800`,
                                children: [(0,
                                P.jsx)(uc, {
                                    domain: e
                                }), (0,
                                P.jsx)(`button`, {
                                    onClick: () => S([e]),
                                    className: `text-blue-500 hover:text-blue-700 ml-0.5`,
                                    children: `+ add`
                                })]
                            }, e)), (0,
                            P.jsx)(`button`, {
                                onClick: () => S(k.map(vc)),
                                className: `text-xs px-2.5 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg transition-colors`,
                                children: `Add all to group...`
                            })]
                        })]
                    })]
                })]
            })
        }), _ !== null && (0,
        P.jsx)(Sc, {
            group: _ === `new` ? null : _,
            initialDomains: _ === `new` ? s : void 0,
            onSave: ce,
            onDelete: ue,
            onClose: () => {
                v(null),
                c([])
            }
        }), x !== null && (0,
        P.jsx)(Cc, {
            domains: x,
            groups: re,
            onAdd: de,
            onClose: () => S(null)
        }), C !== null && (0,
        P.jsx)(`div`, {
            className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40`,
            children: (0,
            P.jsxs)(`div`, {
                className: `bg-white rounded-xl shadow-xl w-full max-w-sm p-6 flex flex-col gap-4`,
                children: [(0,
                P.jsxs)(`div`, {
                    className: `flex items-start gap-3`,
                    children: [(0,
                    P.jsx)(`div`, {
                        className: `flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center`,
                        children: (0,
                        P.jsx)(`svg`, {
                            className: `w-4 h-4 text-amber-600`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: 2,
                            viewBox: `0 0 24 24`,
                            children: (0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z`
                            })
                        })
                    }), (0,
                    P.jsxs)(`div`, {
                        children: [(0,
                        P.jsx)(`h3`, {
                            className: `text-sm font-semibold text-gray-900`,
                            children: `Group used in schedule`
                        }), (0,
                        P.jsxs)(`p`, {
                            className: `text-xs text-gray-500 mt-1`,
                            children: [(0,
                            P.jsx)(`span`, {
                                className: `font-medium text-gray-700`,
                                children: C.groupName
                            }), ` is used in `, C.blockNames.length === 1 ? `this schedule block` : `these schedule blocks`, `:`]
                        }), (0,
                        P.jsx)(`ul`, {
                            className: `mt-1.5 space-y-0.5`,
                            children: C.blockNames.map(e => (0,
                            P.jsxs)(`li`, {
                                className: `text-xs text-amber-700 font-medium`,
                                children: [`• `, e]
                            }, e))
                        }), (0,
                        P.jsx)(`p`, {
                            className: `text-xs text-gray-500 mt-2`,
                            children: `Deleting it will remove it from those schedule blocks.`
                        })]
                    })]
                }), (0,
                P.jsxs)(`div`, {
                    className: `flex gap-2 justify-end`,
                    children: [(0,
                    P.jsx)(`button`, {
                        onClick: () => w(null),
                        className: `text-sm px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700`,
                        children: `Cancel`
                    }), (0,
                    P.jsx)(`button`, {
                        onClick: () => {
                            le(C.groupId),
                            w(null)
                        }
                        ,
                        className: `text-sm px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white`,
                        children: `Delete anyway`
                    })]
                })]
            })
        })]
    })
}
var Ec = [`S`, `M`, `T`, `W`, `T`, `F`, `S`]
  , Dc = [{
    id: `allowAll`,
    label: `Allow All`,
    description: `All traffic allowed`
}, {
    id: `allowOnly`,
    label: `Allow Only`,
    description: `Only selected groups allowed`,
    advanced: !0,
    advancedWarning: `Only explicitly listed sites will be accessible. This may disrupt services you rely on — for example, captive portal login pages at public Wi-Fi locations (hotels, airports, coffee shops) will not load unless their domains are allowed. Review your allowlist carefully before enabling. Use at your own risk.`
}, {
    id: `blockOnly`,
    label: `Block Only`,
    description: `Only selected groups blocked`
}, {
    id: `blockAll`,
    label: `Block All`,
    description: `All traffic blocked`,
    advanced: !0,
    advancedWarning: `This mode blocks all DNS traffic and may disrupt services you rely on. For example, captive portal login pages at public Wi-Fi locations (hotels, airports, coffee shops) will not load. Review your dependencies before enabling. Use at your own risk.`
}]
  , Oc = {
    allowAll: `bg-green-100 text-green-700 border-green-200`,
    allowOnly: `bg-blue-100 text-blue-700 border-blue-200`,
    blockOnly: `bg-amber-100 text-amber-700 border-amber-200`,
    blockAll: `bg-red-100 text-red-700 border-red-200`
}
  , kc = {
    allowAll: `bg-green-100 text-green-700 border-green-200`,
    allowOnly: `bg-red-100 text-red-700 border-red-200`,
    blockOnly: `bg-green-100 text-green-700 border-green-200`,
    blockAll: `bg-red-100 text-red-700 border-red-200`
}
  , Ac = [{
    value: `America/New_York`,
    label: `Eastern (ET)`
}, {
    value: `America/Chicago`,
    label: `Central (CT)`
}, {
    value: `America/Denver`,
    label: `Mountain (MT)`
}, {
    value: `America/Los_Angeles`,
    label: `Pacific (PT)`
}, {
    value: `America/Anchorage`,
    label: `Alaska (AKT)`
}, {
    value: `Pacific/Honolulu`,
    label: `Hawaii (HT)`
}, {
    value: `America/Toronto`,
    label: `Toronto (ET)`
}, {
    value: `America/Vancouver`,
    label: `Vancouver (PT)`
}, {
    value: `Europe/London`,
    label: `London (GMT/BST)`
}, {
    value: `Europe/Paris`,
    label: `Paris (CET/CEST)`
}, {
    value: `Europe/Berlin`,
    label: `Berlin (CET/CEST)`
}, {
    value: `Europe/Amsterdam`,
    label: `Amsterdam (CET)`
}, {
    value: `Asia/Tokyo`,
    label: `Tokyo (JST)`
}, {
    value: `Asia/Singapore`,
    label: `Singapore (SGT)`
}, {
    value: `Australia/Sydney`,
    label: `Sydney (AEST)`
}, {
    value: `UTC`,
    label: `UTC`
}];
function jc(e) {
    let[t,n] = e.split(`:`).map(Number)
      , r = t >= 12 ? `PM` : `AM`;
    return `${t % 12 || 12}:${String(n).padStart(2, `0`)} ${r}`
}
function Mc(e) {
    let[t,n] = e.split(`:`).map(Number);
    return t * 60 + n
}
function Nc(e, t) {
    return e.some(e => t.includes(e))
}
function Pc(e, t, n, r) {
    let i = Mc(e)
      , a = Mc(t)
      , o = Mc(n)
      , s = Mc(r);
    if (i === a || o === s)
        return !0;
    let c = i < a ? [[i, a]] : [[i, 1440], [0, a]]
      , l = o < s ? [[o, s]] : [[o, 1440], [0, s]];
    for (let[e,t] of c)
        for (let[n,r] of l)
            if (e < r && n < t)
                return !0;
    return !1
}
function Fc(e, t, n, r, i) {
    return e.length === 0 ? [] : r.filter(r => r.id === i || !Nc(e, r.days) ? !1 : Pc(t, n, r.startTime, r.endTime))
}
function Ic(e) {
    if (!e.timezone || e.blocks.length === 0)
        return null;
    let t, n, r;
    try {
        let i = new Date
          , a = new Intl.DateTimeFormat(`en-US`,{
            timeZone: e.timezone,
            weekday: `short`,
            hour: `2-digit`,
            minute: `2-digit`,
            hour12: !1
        }).formatToParts(i)
          , o = a.find(e => e.type === `weekday`)?.value ?? `Sun`
          , s = parseInt(a.find(e => e.type === `hour`)?.value ?? `0`, 10)
          , c = parseInt(a.find(e => e.type === `minute`)?.value ?? `0`, 10);
        t = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`].indexOf(o),
        n = s === 24 ? 0 : s,
        r = c
    } catch {
        return null
    }
    let i = t
      , a = (i + 6) % 7
      , o = n * 60 + r
      , s = e => e === `blockAll` ? 0 : e === `blockOnly` ? 1 : e === `allowOnly` ? 2 : 3
      , c = null
      , l = 99;
    for (let t of e.blocks) {
        if (!t.enabled)
            continue;
        let[e,n] = t.startTime.split(`:`).map(Number)
          , [r,u] = t.endTime.split(`:`).map(Number)
          , d = e * 60 + n
          , f = r * 60 + u
          , p = !1;
        if (d === f)
            p = t.days.includes(i);
        else if (d < f)
            p = t.days.includes(i) && o >= d && o < f;
        else {
            let e = t.days.includes(i) && o >= d
              , n = t.days.includes(a) && o < f;
            p = e || n
        }
        if (p) {
            let e = s(t.mode);
            e < l && (l = e,
            c = t)
        }
    }
    return c
}
function Lc({enabled: e, onChange: t}) {
    return (0,
    P.jsx)(`button`, {
        onClick: n => {
            n.stopPropagation(),
            t(!e)
        }
        ,
        className: `relative w-8 h-5 rounded-full transition-colors flex-shrink-0 ${e ? `bg-green-500` : `bg-gray-300`}`,
        children: (0,
        P.jsx)(`span`, {
            className: `absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${e ? `translate-x-3` : `translate-x-0`}`
        })
    })
}
function W({block: e, existingBlocks: t, onSave: n, onDelete: r, onClose: i}) {
    let[a,o] = (0,
    N.useState)(e?.name ?? ``)
      , [s,c] = (0,
    N.useState)(e?.days ?? [1, 2, 3, 4, 5])
      , [l,u] = (0,
    N.useState)(e?.startTime ?? `08:00`)
      , [d,f] = (0,
    N.useState)(e?.endTime ?? `15:00`)
      , [p,m] = (0,
    N.useState)(e?.mode ?? `blockAll`)
      , [h,g] = (0,
    N.useState)(e?.groupIds ?? [])
      , [_,v] = (0,
    N.useState)(e?.blockCategories ?? !1)
      , [y,b] = (0,
    N.useState)([])
      , x = nc(`whitelist`)
      , S = nc(`blacklist`)
      , C = p === `allowOnly` ? `whitelist` : p === `blockOnly` ? `blacklist` : null
      , w = C === `whitelist` ? x.groups : C === `blacklist` ? S.groups : []
      , ee = l > d && l !== d;
    function te(e) {
        b([]),
        c(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e].sort())
    }
    function T(e) {
        g(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
    }
    function E() {
        let r = a.trim();
        if (!r || s.length === 0)
            return;
        let o = Fc(s, l, d, t, e?.id);
        if (o.length > 0) {
            b(o.map(e => e.name));
            return
        }
        n({
            id: e?.id ?? crypto.randomUUID(),
            name: r,
            enabled: e?.enabled ?? !0,
            days: s,
            startTime: l,
            endTime: d,
            mode: p,
            groupIds: C ? h : void 0,
            blockCategories: p === `blockOnly` ? _ : void 0
        }),
        i()
    }
    return (0,
    P.jsx)(`div`, {
        className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40`,
        onClick: i,
        children: (0,
        P.jsxs)(`div`, {
            className: `bg-white rounded-xl shadow-xl w-full max-w-lg p-6 flex flex-col gap-4 max-h-[90vh] overflow-y-auto scrollbar-thin`,
            onClick: e => e.stopPropagation(),
            children: [(0,
            P.jsx)(`h2`, {
                className: `text-base font-semibold text-gray-900`,
                children: e ? `Edit schedule block` : `New schedule block`
            }), (0,
            P.jsxs)(`div`, {
                children: [(0,
                P.jsx)(`label`, {
                    className: `block text-xs font-medium text-gray-600 mb-1`,
                    children: `Name`
                }), (0,
                P.jsx)(`input`, {
                    type: `text`,
                    value: a,
                    onChange: e => o(e.target.value),
                    placeholder: `e.g. School hours, Bedtime`,
                    className: `w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                })]
            }), (0,
            P.jsxs)(`div`, {
                children: [(0,
                P.jsx)(`label`, {
                    className: `block text-xs font-medium text-gray-600 mb-2`,
                    children: `Days`
                }), (0,
                P.jsx)(`div`, {
                    className: `flex gap-1.5`,
                    children: Ec.map( (e, t) => (0,
                    P.jsx)(`button`, {
                        onClick: () => te(t),
                        className: `w-9 h-9 rounded-full text-xs font-semibold transition-colors ${s.includes(t) ? `bg-blue-600 text-white` : `bg-gray-100 text-gray-500 hover:bg-gray-200`}`,
                        children: e
                    }, t))
                }), s.length === 0 && (0,
                P.jsx)(`p`, {
                    className: `text-xs text-red-500 mt-1`,
                    children: `Select at least one day`
                })]
            }), (0,
            P.jsxs)(`div`, {
                children: [(0,
                P.jsx)(`label`, {
                    className: `block text-xs font-medium text-gray-600 mb-2`,
                    children: `Time range`
                }), (0,
                P.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [(0,
                    P.jsx)(`input`, {
                        type: `time`,
                        value: l,
                        onChange: e => {
                            b([]),
                            u(e.target.value)
                        }
                        ,
                        className: `border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                    }), (0,
                    P.jsx)(`span`, {
                        className: `text-gray-400 text-sm`,
                        children: `to`
                    }), (0,
                    P.jsx)(`input`, {
                        type: `time`,
                        value: d,
                        onChange: e => {
                            b([]),
                            f(e.target.value)
                        }
                        ,
                        className: `border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`
                    })]
                }), ee && (0,
                P.jsxs)(`p`, {
                    className: `text-xs text-amber-600 mt-1`,
                    children: [`Spans midnight — ends the following day at `, jc(d)]
                })]
            }), y.length > 0 && (0,
            P.jsxs)(`div`, {
                className: `flex items-start gap-2 px-3 py-2 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700`,
                children: [(0,
                P.jsx)(`svg`, {
                    className: `w-3.5 h-3.5 flex-shrink-0 mt-0.5`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: 2,
                    viewBox: `0 0 24 24`,
                    children: (0,
                    P.jsx)(`path`, {
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        d: `M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z`
                    })
                }), (0,
                P.jsxs)(`div`, {
                    children: [(0,
                    P.jsx)(`span`, {
                        className: `font-semibold`,
                        children: `Conflicts with: `
                    }), y.join(`, `), (0,
                    P.jsx)(`div`, {
                        className: `text-red-500 mt-0.5`,
                        children: `Adjust the days or time range to avoid overlap.`
                    })]
                })]
            }), (0,
            P.jsxs)(`div`, {
                children: [(0,
                P.jsx)(`label`, {
                    className: `block text-xs font-medium text-gray-600 mb-2`,
                    children: `Mode`
                }), (0,
                P.jsx)(`div`, {
                    className: `grid grid-cols-2 gap-2`,
                    children: Dc.map(e => (0,
                    P.jsxs)(`button`, {
                        onClick: () => {
                            m(e.id),
                            g([]),
                            e.id !== `blockOnly` && v(!1)
                        }
                        ,
                        className: `text-left px-3 py-2 rounded-lg border text-xs transition-colors ${p === e.id ? kc[e.id] + ` font-semibold` : `border-gray-200 text-gray-600 hover:border-gray-300`}`,
                        children: [(0,
                        P.jsxs)(`div`, {
                            className: `font-medium flex items-center gap-1 flex-wrap`,
                            children: [e.label, e.advanced && (0,
                            P.jsxs)(`span`, {
                                className: `relative group/adv`,
                                children: [(0,
                                P.jsx)(`span`, {
                                    className: `text-[10px] font-normal text-gray-400 cursor-help`,
                                    children: `(Advanced)`
                                }), (0,
                                P.jsxs)(`div`, {
                                    className: `absolute bottom-full left-0 mb-1.5 w-56 bg-gray-900 text-white rounded-lg px-2.5 py-2 shadow-xl opacity-0 group-hover/adv:opacity-100 pointer-events-none transition-opacity z-20 whitespace-normal font-normal leading-snug`,
                                    children: [e.advancedWarning, (0,
                                    P.jsx)(`div`, {
                                        className: `absolute top-full left-3 border-4 border-transparent border-t-gray-900`
                                    })]
                                })]
                            })]
                        }), (0,
                        P.jsx)(`div`, {
                            className: `text-gray-400 mt-0.5`,
                            children: e.description
                        })]
                    }, e.id))
                })]
            }), C && (0,
            P.jsxs)(`div`, {
                children: [(0,
                P.jsxs)(`label`, {
                    className: `block text-xs font-medium text-gray-600 mb-2`,
                    children: [p === `allowOnly` ? `Allowed groups` : `Blocked groups`, (0,
                    P.jsx)(`span`, {
                        className: `text-gray-400 font-normal ml-1`,
                        children: `(leave empty to use all)`
                    })]
                }), w.length === 0 ? (0,
                P.jsxs)(`p`, {
                    className: `text-xs text-gray-400`,
                    children: [`No `, p === `allowOnly` ? `allow-only` : `block-only`, ` groups exist yet. Create groups in the Rules tab first.`]
                }) : (0,
                P.jsx)(`div`, {
                    className: `flex flex-col gap-1.5 max-h-36 overflow-y-auto`,
                    children: w.map(e => (0,
                    P.jsxs)(`label`, {
                        className: `flex items-center gap-2 cursor-pointer`,
                        children: [(0,
                        P.jsx)(`div`, {
                            onClick: () => T(e.id),
                            className: `w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${h.includes(e.id) ? `bg-blue-600 border-blue-600` : `bg-white border-gray-300`}`,
                            children: h.includes(e.id) && (0,
                            P.jsx)(`svg`, {
                                className: `w-2.5 h-2.5 text-white`,
                                fill: `none`,
                                viewBox: `0 0 12 12`,
                                stroke: `currentColor`,
                                strokeWidth: 2.5,
                                children: (0,
                                P.jsx)(`path`, {
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    d: `M2 6l3 3 5-5`
                                })
                            })
                        }), (0,
                        P.jsxs)(`span`, {
                            className: `text-sm`,
                            children: [e.emoji, ` `, e.name]
                        }), (0,
                        P.jsxs)(`span`, {
                            className: `text-xs text-gray-400`,
                            children: [e.domains.length, ` sites`]
                        })]
                    }, e.id))
                })]
            }), p === `blockOnly` && (0,
            P.jsxs)(`div`, {
                className: `flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2.5`,
                children: [(0,
                P.jsxs)(`div`, {
                    children: [(0,
                    P.jsx)(`span`, {
                        className: `text-xs font-semibold text-gray-700`,
                        children: `Block categories`
                    }), (0,
                    P.jsx)(`p`, {
                        className: `text-xs text-gray-400 mt-0.5`,
                        children: `Apply category blocklists when this block is active`
                    })]
                }), (0,
                P.jsx)(Lc, {
                    enabled: _,
                    onChange: v
                })]
            }), (0,
            P.jsxs)(`div`, {
                className: `flex items-center justify-between pt-2`,
                children: [e ? (0,
                P.jsx)(`button`, {
                    onClick: () => {
                        r(e.id),
                        i()
                    }
                    ,
                    className: `text-xs text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg`,
                    children: `Delete block`
                }) : (0,
                P.jsx)(`span`, {}), (0,
                P.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [(0,
                    P.jsx)(`button`, {
                        onClick: i,
                        className: `text-sm px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700`,
                        children: `Cancel`
                    }), (0,
                    P.jsx)(`button`, {
                        onClick: E,
                        disabled: !a.trim() || s.length === 0,
                        className: `text-sm px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed`,
                        children: e ? `Save changes` : `Add block`
                    })]
                })]
            })]
        })
    })
}
function Rc({deviceId: e}) {
    let {schedule: t, isPending: n, saveBlock: r, deleteBlock: i, toggleBlock: a, setTimezone: o} = ac(e)
      , [s,c] = (0,
    N.useState)(null)
      , l = Ic(t)
      , u = Intl.DateTimeFormat().resolvedOptions().timeZone;
    (0,
    N.useEffect)( () => {
        !n && !t.timezone && u && o(u)
    }
    , [n, t.timezone, u]);
    function d(e) {
        o(e)
    }
    let f = s === `new` ? null : s ?? null;
    return (0,
    P.jsxs)(`div`, {
        className: `max-w-4xl mx-auto`,
        children: [(0,
        P.jsxs)(`div`, {
            className: `bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm`,
            children: [(0,
            P.jsxs)(`div`, {
                className: `px-5 py-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3`,
                children: [(0,
                P.jsx)(`div`, {
                    children: (0,
                    P.jsx)(`h2`, {
                        className: `text-base font-semibold text-gray-900`,
                        children: `Weekly Schedule`
                    })
                }), (0,
                P.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [(0,
                    P.jsx)(`label`, {
                        className: `text-xs text-gray-500`,
                        children: `Timezone`
                    }), (0,
                    P.jsxs)(`select`, {
                        value: t.timezone || u,
                        onChange: e => d(e.target.value),
                        className: `border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500`,
                        children: [Ac.map(e => (0,
                        P.jsx)(`option`, {
                            value: e.value,
                            children: e.label
                        }, e.value)), t.timezone && !Ac.some(e => e.value === t.timezone) && (0,
                        P.jsx)(`option`, {
                            value: t.timezone,
                            children: t.timezone
                        })]
                    })]
                })]
            }), (0,
            P.jsxs)(`div`, {
                className: `px-5 py-2 text-xs flex items-center gap-2 ${l ? `bg-green-50 text-green-700` : `bg-gray-50 text-gray-500`}`,
                children: [(0,
                P.jsx)(`svg`, {
                    className: `w-3.5 h-3.5 flex-shrink-0`,
                    fill: `none`,
                    stroke: `currentColor`,
                    strokeWidth: 2,
                    viewBox: `0 0 24 24`,
                    children: (0,
                    P.jsx)(`path`, {
                        strokeLinecap: `round`,
                        strokeLinejoin: `round`,
                        d: `M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z`
                    })
                }), l ? (0,
                P.jsxs)(P.Fragment, {
                    children: [`Currently active: `, (0,
                    P.jsx)(`span`, {
                        className: `font-semibold`,
                        children: l.name
                    }), `\xA0(`, Dc.find(e => e.id === l.mode)?.label, `)`]
                }) : `No scheduled block active — default Rules tab configuration in effect`]
            }), (0,
            P.jsxs)(`div`, {
                className: `px-5 py-4`,
                children: [t.blocks.length === 0 && (0,
                P.jsx)(`p`, {
                    className: `text-sm text-gray-400 text-center py-8`,
                    children: `No schedule blocks yet. Add one to automatically control access at specific times.`
                }), t.blocks.map(e => {
                    let t = l?.id === e.id;
                    return (0,
                    P.jsx)(`div`, {
                        onClick: () => c(e),
                        className: `border rounded-xl p-3 mb-3 cursor-pointer hover:border-blue-200 hover:bg-blue-50/30 transition-all ${t ? `border-green-200 bg-green-50` : e.enabled ? `bg-gray-50 border-gray-100` : `bg-gray-50 border-gray-100 opacity-50`}`,
                        children: (0,
                        P.jsxs)(`div`, {
                            className: `flex items-start justify-between gap-3`,
                            children: [(0,
                            P.jsxs)(`div`, {
                                className: `flex-1 min-w-0`,
                                children: [(0,
                                P.jsxs)(`div`, {
                                    className: `flex items-center gap-2 mb-1.5`,
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `text-sm font-semibold text-gray-900 truncate`,
                                        children: e.name
                                    }), t && (0,
                                    P.jsx)(`span`, {
                                        className: `text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium`,
                                        children: `Active now`
                                    })]
                                }), (0,
                                P.jsx)(`div`, {
                                    className: `flex gap-1 mb-1.5`,
                                    children: Ec.map( (t, n) => (0,
                                    P.jsx)(`span`, {
                                        className: `inline-flex items-center justify-center w-5 h-5 text-[10px] rounded-full font-semibold ${e.days.includes(n) ? `bg-blue-600 text-white` : `bg-gray-200 text-gray-400`}`,
                                        children: t
                                    }, n))
                                }), (0,
                                P.jsxs)(`div`, {
                                    className: `flex items-center gap-2 flex-wrap`,
                                    children: [(0,
                                    P.jsxs)(`span`, {
                                        className: `text-xs text-gray-500`,
                                        children: [jc(e.startTime), ` – `, jc(e.endTime), e.startTime > e.endTime && e.startTime !== e.endTime && (0,
                                        P.jsx)(`span`, {
                                            className: `text-amber-500 ml-1`,
                                            children: `(overnight)`
                                        })]
                                    }), (0,
                                    P.jsx)(`span`, {
                                        className: `text-xs px-2 py-0.5 rounded-full border font-medium ${Oc[e.mode]}`,
                                        children: Dc.find(t => t.id === e.mode)?.label
                                    }), e.mode === `blockOnly` && e.blockCategories && (0,
                                    P.jsx)(`span`, {
                                        className: `text-xs px-2 py-0.5 rounded-full border font-medium bg-purple-50 border-purple-200 text-purple-700`,
                                        children: `+ Categories`
                                    })]
                                })]
                            }), (0,
                            P.jsx)(Lc, {
                                enabled: e.enabled,
                                onChange: () => a(e.id)
                            })]
                        })
                    }, e.id)
                }
                ), (0,
                P.jsx)(`button`, {
                    onClick: () => c(`new`),
                    className: `w-full mt-1 py-3 border-2 border-dashed border-gray-200 rounded-xl text-sm text-gray-400 hover:border-blue-300 hover:text-blue-500 transition-colors`,
                    children: `+ Add schedule block`
                })]
            })]
        }), s !== null && (0,
        P.jsx)(W, {
            block: f,
            existingBlocks: t.blocks,
            onSave: r,
            onDelete: i,
            onClose: () => c(null)
        })]
    })
}
function zc(e) {
    let t = tt()
      , {data: n, isLoading: r} = gt({
        queryKey: [`blocklist-catalog`],
        queryFn: () => Rs().then(e => e.data),
        staleTime: 3600 * 1e3,
        retry: 2
    })
      , {data: i} = gt({
        queryKey: [`blocklist-prefs`, e],
        queryFn: () => zs(e).then(e => e.data),
        staleTime: 3e4,
        enabled: !!e,
        placeholderData: {
            enabledCategories: [],
            categoriesEnabled: !0
        }
    })
      , a = _t({
        mutationFn: t => Bs(e, t),
        onMutate: async n => {
            await t.cancelQueries({
                queryKey: [`blocklist-prefs`, e]
            });
            let r = t.getQueryData([`blocklist-prefs`, e]);
            return t.setQueryData([`blocklist-prefs`, e], n),
            {
                prev: r
            }
        }
        ,
        onError: (n, r, i) => {
            i?.prev && t.setQueryData([`blocklist-prefs`, e], i.prev)
        }
        ,
        onSettled: () => {
            t.invalidateQueries({
                queryKey: [`blocklist-prefs`, e]
            })
        }
    });
    function o(e) {
        let t = i?.enabledCategories ?? []
          , n = t.includes(e) ? t.filter(t => t !== e) : [...t, e];
        a.mutate({
            enabledCategories: n,
            categoriesEnabled: i?.categoriesEnabled ?? !0
        })
    }
    function s(e) {
        return i?.enabledCategories.includes(e) ?? !1
    }
    function c() {
        n && a.mutate({
            enabledCategories: n.categories.map(e => e.id),
            categoriesEnabled: i?.categoriesEnabled ?? !0
        })
    }
    function l() {
        a.mutate({
            enabledCategories: [],
            categoriesEnabled: i?.categoriesEnabled ?? !0
        })
    }
    return {
        catalog: n,
        prefs: i,
        catalogLoading: r,
        toggleCategory: o,
        isEnabled: s,
        selectAll: c,
        deselectAll: l
    }
}
function Bc({enabled: e, onChange: t}) {
    return (0,
    P.jsx)(`button`, {
        onClick: () => t(!e),
        className: `relative w-8 h-5 rounded-full transition-colors flex-shrink-0 ${e ? `bg-green-500` : `bg-gray-300`}`,
        children: (0,
        P.jsx)(`span`, {
            className: `absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${e ? `translate-x-3` : `translate-x-0`}`
        })
    })
}
function Vc(e) {
    return e >= 1e6 ? `~${(e / 1e6).toFixed(1)}M` : e >= 1e3 ? `~${Math.round(e / 1e3)}K` : `~${e}`
}
function Hc({deviceId: e, categoriesActive: t}) {
    let {catalog: n, catalogLoading: r, toggleCategory: i, isEnabled: a, selectAll: o, deselectAll: s} = zc(e)
      , c = n ? [...new Set(n.categories.map(e => e.attribution))] : []
      , l = n ? n.categories.every(e => a(e.id)) : !1;
    return (0,
    P.jsxs)(`div`, {
        className: `max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm`,
        children: [(0,
        P.jsxs)(`div`, {
            className: `px-5 py-4 flex items-center gap-3`,
            children: [(0,
            P.jsxs)(`div`, {
                className: `flex-1`,
                children: [(0,
                P.jsx)(`span`, {
                    className: `text-sm font-semibold text-gray-800`,
                    children: `Category Filters`
                }), (0,
                P.jsx)(`span`, {
                    className: `ml-2 text-xs text-gray-400`,
                    children: `Pre-built blocklists updated daily`
                })]
            }), n && (0,
            P.jsx)(`button`, {
                onClick: l ? s : o,
                className: `text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors`,
                children: l ? `Deselect all` : `Select all`
            }), (0,
            P.jsx)(`span`, {
                title: `Controlled by your Rules & Schedule settings`,
                className: `text-xs font-semibold px-2.5 py-1 rounded-full cursor-default ${t ? `bg-green-100 text-green-700` : `bg-gray-100 text-gray-500`}`,
                children: t ? `On` : `Off`
            })]
        }), (0,
        P.jsx)(`div`, {
            className: `px-5 py-2 text-xs ${t ? `bg-green-50 text-green-700` : `bg-gray-50 text-gray-500`}`,
            children: t ? `Category filters active` : `Category filters off — enable "Block categories" in the Rules or Schedule tab when using Block Only mode`
        }), (0,
        P.jsxs)(`div`, {
            className: `px-5 py-4`,
            children: [r && (0,
            P.jsx)(`div`, {
                className: `text-xs text-gray-400 text-center py-4`,
                children: `Loading categories…`
            }), n && n.categories.map(e => {
                let n = a(e.id);
                return (0,
                P.jsx)(`div`, {
                    className: `bg-gray-50 border border-gray-100 rounded-xl p-3 mb-2 transition-opacity ${!t || !n ? `opacity-50` : ``}`,
                    children: (0,
                    P.jsxs)(`div`, {
                        className: `flex items-center justify-between`,
                        children: [(0,
                        P.jsxs)(`div`, {
                            className: `flex items-center gap-2 min-w-0`,
                            children: [(0,
                            P.jsx)(`span`, {
                                className: `text-base flex-shrink-0`,
                                children: e.emoji
                            }), (0,
                            P.jsxs)(`div`, {
                                className: `min-w-0`,
                                children: [(0,
                                P.jsx)(`span`, {
                                    className: `text-sm font-semibold text-gray-900`,
                                    children: e.name
                                }), (0,
                                P.jsxs)(`span`, {
                                    className: `ml-2 text-xs text-gray-400`,
                                    children: [Vc(e.domainCount), ` domains`]
                                }), (0,
                                P.jsx)(`p`, {
                                    className: `text-xs text-gray-500 mt-0.5 truncate`,
                                    children: e.description
                                })]
                            })]
                        }), (0,
                        P.jsx)(Bc, {
                            enabled: n,
                            onChange: () => i(e.id)
                        })]
                    })
                }, e.id)
            }
            ), c.length > 0 && (0,
            P.jsxs)(`p`, {
                className: `text-xs text-gray-400 mt-2 px-1`,
                children: [`Powered by: `, c.join(` · `)]
            })]
        })]
    })
}
function Uc({device: e, onConfirm: t, onCancel: n}) {
    let[r,i] = (0,
    N.useState)(e.name)
      , [a,o] = (0,
    N.useState)(!1)
      , [s,c] = (0,
    N.useState)(null);
    async function l() {
        let e = r.trim();
        if (e) {
            o(!0),
            c(null);
            try {
                await t(e)
            } catch (e) {
                let t = e?.response?.data?.message;
                c(t ?? `Failed to rename device.`),
                o(!1)
            }
        }
    }
    return (0,
    P.jsx)(`div`, {
        role: `dialog`,
        "aria-modal": `true`,
        className: `fixed inset-0 z-50 flex items-center justify-center bg-black/40`,
        onClick: e => e.target === e.currentTarget && n(),
        children: (0,
        P.jsxs)(`div`, {
            className: `bg-white rounded-xl shadow-xl w-full max-w-sm p-6`,
            children: [(0,
            P.jsx)(`h2`, {
                className: `text-base font-semibold text-gray-900 mb-4`,
                children: `Rename device`
            }), (0,
            P.jsx)(`input`, {
                autoFocus: !0,
                value: r,
                onChange: e => i(e.target.value),
                onKeyDown: e => e.key === `Enter` && l(),
                maxLength: 20,
                placeholder: `Device name`,
                className: `w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-xs text-gray-400 mb-3 text-right`,
                children: [r.trim().length, `/20`]
            }), s && (0,
            P.jsx)(`p`, {
                className: `text-sm text-red-600 mb-3`,
                children: s
            }), (0,
            P.jsxs)(`div`, {
                className: `flex gap-2 justify-end`,
                children: [(0,
                P.jsx)(`button`, {
                    onClick: n,
                    className: `px-4 py-2 text-sm text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-100`,
                    children: `Cancel`
                }), (0,
                P.jsx)(`button`, {
                    onClick: l,
                    disabled: a || !r.trim(),
                    className: `px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50`,
                    children: a ? `Saving…` : `Save`
                })]
            })]
        })
    })
}
var Wc = [{
    label: `1h`,
    days: null,
    minutes: 60
}, {
    label: `1d`,
    days: 1,
    minutes: 1440
}, {
    label: `7d`,
    days: 7,
    minutes: 10080
}, {
    label: `30d`,
    days: 30,
    minutes: 43200
}];
function Gc() {
    let e = Bn()
      , t = tt()
      , [n,r] = vi()
      , [i,a] = (0,
    N.useState)(null)
      , [o,s] = (0,
    N.useState)(null)
      , [c,l] = (0,
    N.useState)(null)
      , [u,d] = (0,
    N.useState)(null)
      , [f,p] = (0,
    N.useState)(!1)
      , [m,h] = (0,
    N.useState)(!1)
      , [g,_] = (0,
    N.useState)(!1)
      , v = (0,
    N.useRef)(null)
      , y = (0,
    N.useCallback)( () => {
        let e = v.current;
        e && (h(e.scrollLeft > 0),
        _(e.scrollLeft + e.clientWidth < e.scrollWidth - 1))
    }
    , [])
      , {email: b, isAdmin: x} = $s()
      , {data: S=[], isLoading: C} = gt({
        queryKey: [`devices`],
        queryFn: () => ws().then(e => e.data),
        refetchInterval: 1e4
    })
      , w = n.get(`device`)
      , ee = w ? Math.max(0, S.findIndex(e => e.deviceId === w)) : 0
      , te = Math.min(ee, Math.max(0, S.length - 1))
      , T = S[te] ?? null
      , {schedule: E} = ac(T?.deviceId ?? ``)
      , D = T ? Ic(E) : null
      , ne = !D && !!(T?.filteringEnabled || T?.whitelistMode)
      , re = (0,
    N.useMemo)( () => D ? D.mode === `blockOnly` && (D.blockCategories ?? !1) : T ? T.filteringEnabled && !T.whitelistMode && (T.blockCategories ?? !1) : !1, [D, T])
      , [ie,ae] = (0,
    N.useState)(90)
      , oe = (0,
    N.useMemo)( () => {
        let e = Wc.filter(e => (e.days ?? 1) <= ie);
        return !Wc.some(e => e.days === ie) && ie > 1 && e.push({
            label: `${ie}d`,
            days: ie,
            minutes: ie * 1440
        }),
        e
    }
    , [ie])
      , se = n.get(`window`)
      , O = se ? Math.max(0, oe.findIndex(e => e.label === se)) : 0
      , k = oe[O] ?? oe[0]
      , ce = n.get(`view`)
      , le = ce === `rules` ? `rules` : ce === `schedule` ? `schedule` : ce === `categories` ? `categories` : `activity`
      , [ue,de] = (0,
    N.useState)([])
      , [A,fe] = (0,
    N.useState)(``);
    (0,
    N.useEffect)( () => {
        de([]),
        fe(``)
    }
    , [T?.deviceId]);
    let {data: pe} = gt({
        queryKey: [`logs-head`, T?.deviceId, k.days],
        queryFn: () => Ds(T.deviceId, {
            days: k.days ?? 1,
            limit: 200
        }).then(e => e.data),
        enabled: !!T,
        refetchInterval: 1e4,
        placeholderData: j
    })
      , {data: me, fetchNextPage: he, hasNextPage: ge, isFetchingNextPage: _e} = vt({
        queryKey: [`logs-tail`, T?.deviceId, k.days],
        queryFn: ({pageParam: e}) => Ds(T.deviceId, {
            pageToken: e,
            days: k.days ?? 1,
            limit: 200
        }).then(e => e.data),
        initialPageParam: pe?.nextToken,
        getNextPageParam: e => e.nextToken ?? void 0,
        enabled: !!T && !!pe?.nextToken
    });
    (0,
    N.useEffect)( () => {
        pe?.activityLogTtlDays != null && ae(pe.activityLogTtlDays)
    }
    , [pe?.activityLogTtlDays]),
    (0,
    N.useEffect)( () => {
        y();
        let e = v.current;
        if (!e)
            return;
        let t = new ResizeObserver(y);
        return t.observe(e),
        () => t.disconnect()
    }
    , [y, S.length]);
    let ve = me?.pages.flatMap(e => e.items) ?? []
      , ye = [...pe?.items ?? [], ...ve]
      , be = (0,
    N.useMemo)( () => {
        let e = Date.now() - k.minutes * 6e4
          , t = A.toLowerCase();
        return ye.filter(n => new Date(n.timestamp).getTime() >= e && (!t || n.domain.toLowerCase().includes(t)))
    }
    , [ye, k, A])
      , xe = _t({
        mutationFn: e => Ts(e),
        onSuccess: () => t.invalidateQueries({
            queryKey: [`devices`]
        })
    })
      , M = _t({
        mutationFn: ({deviceId: e, name: t}) => Es(e, t),
        onSuccess: () => t.invalidateQueries({
            queryKey: [`devices`]
        })
    });
    function Se() {
        if (!T)
            return;
        let e = [...new Set(be.map(e => e.domain))];
        e.length !== 0 && (de(e),
        r(e => {
            let t = new URLSearchParams(e);
            return t.set(`view`, `rules`),
            t.set(`tab`, `blockOnly`),
            t
        }
        , {
            replace: !0
        }))
    }
    function Ce() {
        localStorage.removeItem(`pg_token`),
        localStorage.removeItem(`pg_email`),
        e(`/login`)
    }
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsxs)(`header`, {
            className: `bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between`,
            children: [(0,
            P.jsxs)(ui, {
                to: `/device`,
                className: `flex items-center gap-2 hover:opacity-70 transition-opacity`,
                children: [(0,
                P.jsx)(Ks, {
                    size: 26
                }), (0,
                P.jsx)(`span`, {
                    className: `font-semibold text-gray-900`,
                    children: `RivShield`
                })]
            }), (0,
            P.jsxs)(`div`, {
                className: `relative`,
                children: [(0,
                P.jsxs)(`button`, {
                    "aria-label": `User menu`,
                    onClick: () => p(!f),
                    className: `flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors`,
                    children: [(0,
                    P.jsx)(`svg`, {
                        className: `w-5 h-5 text-gray-400`,
                        fill: `none`,
                        stroke: `currentColor`,
                        viewBox: `0 0 24 24`,
                        children: (0,
                        P.jsx)(`path`, {
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            strokeWidth: 1.5,
                            d: `M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z`
                        })
                    }), (0,
                    P.jsx)(`span`, {
                        children: b
                    })]
                }), f && (0,
                P.jsxs)(P.Fragment, {
                    children: [(0,
                    P.jsx)(`div`, {
                        className: `fixed inset-0 z-10`,
                        onClick: () => p(!1)
                    }), (0,
                    P.jsxs)(`div`, {
                        className: `absolute right-0 top-full mt-1 z-20 bg-white border border-gray-200 rounded-lg shadow-lg p-1 min-w-40`,
                        children: [x && (0,
                        P.jsx)(ui, {
                            to: `/admin`,
                            className: `flex items-center gap-2 w-full text-left text-sm px-3 py-2 hover:bg-gray-50 text-gray-700 rounded`,
                            onClick: () => p(!1),
                            children: `Admin`
                        }), (0,
                        P.jsx)(`a`, {
                            href: `/downloads`,
                            className: `flex items-center gap-2 w-full text-left text-sm px-3 py-2 hover:bg-gray-50 text-gray-700 rounded`,
                            onClick: () => p(!1),
                            children: `Downloads`
                        }), (0,
                        P.jsx)(`button`, {
                            onClick: Ce,
                            className: `flex items-center gap-2 w-full text-left text-sm px-3 py-2 hover:bg-gray-50 text-gray-700 rounded`,
                            children: `Sign out`
                        })]
                    })]
                })]
            })]
        }), C && (0,
        P.jsx)(`div`, {
            className: `p-6 text-sm text-gray-500`,
            children: `Loading…`
        }), !C && S.length === 0 && (0,
        P.jsx)(`div`, {
            className: `max-w-4xl mx-auto p-6`,
            children: (0,
            P.jsx)(`div`, {
                className: `bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500 text-sm`,
                children: `No devices registered yet. Run the installer on a child's laptop to get started.`
            })
        }), S.length > 0 && (0,
        P.jsxs)(P.Fragment, {
            children: [(0,
            P.jsxs)(`div`, {
                className: `bg-white border-b border-gray-200 pl-6 flex`,
                children: [(0,
                P.jsxs)(`div`, {
                    className: `relative flex items-stretch min-w-0 flex-1`,
                    children: [m && (0,
                    P.jsx)(`button`, {
                        onClick: () => {
                            v.current?.scrollBy({
                                left: -200,
                                behavior: `smooth`
                            })
                        }
                        ,
                        className: `absolute left-0 top-0 bottom-0 z-10 flex items-center px-1 bg-gradient-to-r from-white via-white to-transparent pr-4`,
                        "aria-label": `Scroll devices left`,
                        children: (0,
                        P.jsx)(`svg`, {
                            className: `w-4 h-4 text-gray-500`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: 2,
                            viewBox: `0 0 24 24`,
                            children: (0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M15 19l-7-7 7-7`
                            })
                        })
                    }), (0,
                    P.jsx)(`div`, {
                        ref: v,
                        className: `flex overflow-x-auto scrollbar-hide`,
                        onScroll: y,
                        children: S.map( (e, t) => (0,
                        P.jsxs)(`div`, {
                            className: `flex items-stretch border-b-2 transition-colors flex-shrink-0 ${t === te ? `border-blue-600 bg-blue-200` : `border-transparent`}`,
                            children: [(0,
                            P.jsxs)(`button`, {
                                onClick: () => r(t => {
                                    let n = new URLSearchParams(t);
                                    return n.set(`device`, e.deviceId),
                                    n
                                }
                                , {
                                    replace: !0
                                }),
                                className: `flex items-center gap-2 px-4 py-3 text-sm transition-colors whitespace-nowrap ${t === te ? `text-blue-700 font-semibold` : `text-gray-500 hover:text-gray-800 hover:bg-gray-50`}`,
                                children: [e.isOnline ? (0,
                                P.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    "data-testid": `status-online`,
                                    title: `Agent v${e.agentVersion ?? `?`} · last seen ${new Date(e.lastSeen).toLocaleString()}`,
                                    className: `flex-shrink-0`,
                                    children: (0,
                                    P.jsx)(`svg`, {
                                        className: `w-4 h-4 text-green-500`,
                                        fill: `none`,
                                        stroke: `currentColor`,
                                        strokeWidth: 2,
                                        viewBox: `0 0 24 24`,
                                        children: (0,
                                        P.jsx)(`path`, {
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            d: `M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0`
                                        })
                                    })
                                }) : (0,
                                P.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    "data-testid": `status-offline`,
                                    title: `Agent v${e.agentVersion ?? `?`} · last seen ${new Date(e.lastSeen).toLocaleString()}`,
                                    className: `flex-shrink-0`,
                                    children: (0,
                                    P.jsxs)(`svg`, {
                                        className: `w-4 h-4 text-red-400`,
                                        fill: `none`,
                                        stroke: `currentColor`,
                                        strokeWidth: 2,
                                        viewBox: `0 0 24 24`,
                                        children: [(0,
                                        P.jsx)(`path`, {
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            d: `M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0`
                                        }), (0,
                                        P.jsx)(`path`, {
                                            strokeLinecap: `round`,
                                            strokeLinejoin: `round`,
                                            d: `M3 3l18 18`
                                        })]
                                    })
                                }), e.name]
                            }), t === te && (0,
                            P.jsx)(`div`, {
                                className: `relative`,
                                children: (0,
                                P.jsx)(`button`, {
                                    "aria-label": `Open menu for ${e.name}`,
                                    onClick: t => {
                                        if (t.stopPropagation(),
                                        i === e.deviceId)
                                            a(null),
                                            s(null);
                                        else {
                                            let n = t.currentTarget.getBoundingClientRect();
                                            s({
                                                top: n.bottom,
                                                left: n.left
                                            }),
                                            a(e.deviceId)
                                        }
                                    }
                                    ,
                                    className: `px-2 h-full text-gray-400 hover:text-gray-600`,
                                    children: `⋯`
                                })
                            })]
                        }, e.deviceId))
                    }), g && (0,
                    P.jsx)(`button`, {
                        onClick: () => {
                            v.current?.scrollBy({
                                left: 200,
                                behavior: `smooth`
                            })
                        }
                        ,
                        className: `absolute right-0 top-0 bottom-0 z-10 flex items-center px-1 bg-gradient-to-l from-white via-white to-transparent pl-4`,
                        "aria-label": `Scroll devices right`,
                        children: (0,
                        P.jsx)(`svg`, {
                            className: `w-4 h-4 text-gray-500`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: 2,
                            viewBox: `0 0 24 24`,
                            children: (0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M9 5l7 7-7 7`
                            })
                        })
                    })]
                }), i && o && ( () => {
                    let e = S.find(e => e.deviceId === i);
                    return e ? (0,
                    P.jsxs)(P.Fragment, {
                        children: [(0,
                        P.jsx)(`div`, {
                            className: `fixed inset-0 z-40`,
                            onClick: () => {
                                a(null),
                                s(null)
                            }
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `fixed z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-1 min-w-44`,
                            style: {
                                top: o.top,
                                left: o.left
                            },
                            children: [(0,
                            P.jsx)(`button`, {
                                className: `flex items-center gap-2 w-full text-left text-sm px-3 py-2 hover:bg-gray-50 text-gray-700 rounded`,
                                onClick: () => {
                                    a(null),
                                    s(null),
                                    r(e => {
                                        let t = new URLSearchParams(e);
                                        return t.set(`view`, `rules`),
                                        t
                                    }
                                    , {
                                        replace: !0
                                    })
                                }
                                ,
                                children: `⚙ Configure rules`
                            }), (0,
                            P.jsx)(`button`, {
                                className: `flex items-center gap-2 w-full text-left text-sm px-3 py-2 hover:bg-gray-50 text-gray-700 rounded`,
                                onClick: () => {
                                    a(null),
                                    s(null),
                                    d(e)
                                }
                                ,
                                children: `✏ Rename device`
                            }), (0,
                            P.jsx)(`hr`, {
                                className: `my-1 border-gray-100`
                            }), (0,
                            P.jsx)(`button`, {
                                onClick: () => {
                                    a(null),
                                    s(null),
                                    l(e)
                                }
                                ,
                                className: `flex items-center gap-2 w-full text-left text-sm px-3 py-2 hover:bg-red-50 text-red-600 rounded`,
                                children: `🗑 Remove device`
                            })]
                        })]
                    }) : null
                }
                )(), (0,
                P.jsxs)(`div`, {
                    className: `flex-shrink-0 flex items-stretch border-l border-gray-200 ml-2`,
                    children: [(0,
                    P.jsxs)(`button`, {
                        onClick: () => r(e => {
                            let t = new URLSearchParams(e);
                            return t.delete(`view`),
                            t
                        }
                        , {
                            replace: !0
                        }),
                        className: `flex flex-col items-center px-3 pt-2 pb-1 text-[11px] border-b-2 transition-colors gap-0.5 ${le === `activity` ? `font-semibold text-blue-700 border-blue-600` : `text-gray-500 border-transparent hover:text-gray-700`}`,
                        children: [(0,
                        P.jsx)(`svg`, {
                            className: `w-[18px] h-[18px]`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: 1.5,
                            viewBox: `0 0 24 24`,
                            children: (0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`
                            })
                        }), (0,
                        P.jsx)(`span`, {
                            children: `Activity`
                        }), (0,
                        P.jsx)(`span`, {
                            className: `h-[9px]`
                        })]
                    }), (0,
                    P.jsxs)(`button`, {
                        onClick: () => r(e => {
                            let t = new URLSearchParams(e);
                            return t.set(`view`, `rules`),
                            t
                        }
                        , {
                            replace: !0
                        }),
                        className: `flex flex-col items-center px-3 pt-2 pb-1 text-[11px] border-b-2 transition-colors gap-0.5 ${le === `rules` ? `font-semibold text-blue-700 border-blue-600` : `text-gray-500 border-transparent hover:text-gray-700`}`,
                        children: [(0,
                        P.jsxs)(`svg`, {
                            className: `w-[18px] h-[18px]`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: 1.5,
                            viewBox: `0 0 24 24`,
                            children: [(0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z`
                            }), (0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M15 12a3 3 0 11-6 0 3 3 0 016 0z`
                            })]
                        }), (0,
                        P.jsx)(`span`, {
                            children: `Rules`
                        }), ne ? (0,
                        P.jsx)(`span`, {
                            className: `text-[9px] px-2.5 py-0 leading-none rounded-full font-semibold bg-green-700 text-white`,
                            children: `On`
                        }) : (0,
                        P.jsx)(`span`, {
                            className: `text-[9px] px-2.5 py-0 leading-none rounded-full bg-gray-200 text-gray-500`,
                            children: `Off`
                        })]
                    }), (0,
                    P.jsxs)(`button`, {
                        onClick: () => r(e => {
                            let t = new URLSearchParams(e);
                            return t.set(`view`, `schedule`),
                            t
                        }
                        , {
                            replace: !0
                        }),
                        className: `flex flex-col items-center px-3 pt-2 pb-1 text-[11px] border-b-2 transition-colors gap-0.5 ${le === `schedule` ? `font-semibold text-blue-700 border-blue-600` : `text-gray-500 border-transparent hover:text-gray-700`}`,
                        children: [(0,
                        P.jsx)(`svg`, {
                            className: `w-[18px] h-[18px]`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: 1.5,
                            viewBox: `0 0 24 24`,
                            children: (0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z`
                            })
                        }), (0,
                        P.jsx)(`span`, {
                            children: `Schedule`
                        }), D ? (0,
                        P.jsx)(`span`, {
                            className: `text-[9px] px-2.5 py-0 leading-none rounded-full font-semibold bg-green-700 text-white`,
                            children: `On`
                        }) : (0,
                        P.jsx)(`span`, {
                            className: `text-[9px] px-2.5 py-0 leading-none rounded-full bg-gray-200 text-gray-500`,
                            children: `Off`
                        })]
                    }), (0,
                    P.jsxs)(`button`, {
                        onClick: () => r(e => {
                            let t = new URLSearchParams(e);
                            return t.set(`view`, `categories`),
                            t
                        }
                        , {
                            replace: !0
                        }),
                        className: `flex flex-col items-center px-3 pt-2 pb-1 text-[11px] border-b-2 transition-colors gap-0.5 ${le === `categories` ? `font-semibold text-blue-700 border-blue-600` : `text-gray-500 border-transparent hover:text-gray-700`}`,
                        children: [(0,
                        P.jsx)(`svg`, {
                            className: `w-[18px] h-[18px]`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: 1.5,
                            viewBox: `0 0 24 24`,
                            children: (0,
                            P.jsx)(`path`, {
                                strokeLinecap: `round`,
                                strokeLinejoin: `round`,
                                d: `M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z`
                            })
                        }), (0,
                        P.jsx)(`span`, {
                            children: `Categories`
                        }), re ? (0,
                        P.jsx)(`span`, {
                            title: `Controlled by your Rules & Schedule settings`,
                            className: `text-[9px] px-2.5 py-0 leading-none rounded-full font-semibold bg-green-700 text-white cursor-default`,
                            children: `On`
                        }) : (0,
                        P.jsx)(`span`, {
                            title: `Controlled by your Rules & Schedule settings`,
                            className: `text-[9px] px-2.5 py-0 leading-none rounded-full bg-gray-200 text-gray-500 cursor-default`,
                            children: `Off`
                        })]
                    })]
                })]
            }), T && le === `activity` && (0,
            P.jsxs)(`div`, {
                className: `max-w-4xl mx-auto p-6`,
                children: [( () => {
                    let e = {
                        allowAll: `Allow All`,
                        allowOnly: `Allow Only`,
                        blockOnly: `Block Only`,
                        blockAll: `Block All`
                    };
                    if (D) {
                        let t = [];
                        return (D.mode === `allowOnly` || D.mode === `blockOnly`) && t.push(`Rules`),
                        D.blockCategories && t.push(`Categories`),
                        (0,
                        P.jsxs)(`div`, {
                            className: `mb-4 flex items-center gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800`,
                            children: [(0,
                            P.jsx)(`span`, {
                                className: `text-base leading-none`,
                                children: `🕐`
                            }), (0,
                            P.jsxs)(`span`, {
                                children: [`Schedule `, (0,
                                P.jsxs)(`strong`, {
                                    children: [`"`, D.name, `"`]
                                }), ` active — `, e[D.mode] ?? D.mode, ` until `, D.endTime]
                            }), t.length > 0 && (0,
                            P.jsx)(`div`, {
                                className: `ml-2 flex items-center gap-1.5`,
                                children: t.map(e => (0,
                                P.jsx)(`span`, {
                                    className: `text-[10px] px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-medium`,
                                    children: e
                                }, e))
                            })]
                        })
                    }
                    let t = [];
                    return (T.filteringEnabled || T.whitelistMode) && t.push(`Rules`),
                    re && t.push(`Categories`),
                    t.length === 0 ? (0,
                    P.jsxs)(`div`, {
                        className: `mb-4 flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500`,
                        children: [(0,
                        P.jsx)(`span`, {
                            className: `inline-block w-2 h-2 rounded-full bg-gray-400 flex-shrink-0`
                        }), (0,
                        P.jsx)(`span`, {
                            children: `No filtering applied — all traffic is allowed`
                        })]
                    }) : (0,
                    P.jsxs)(`div`, {
                        className: `mb-4 flex items-center gap-2.5 rounded-xl border border-green-200 bg-green-50 px-4 py-2.5 text-sm text-green-800`,
                        children: [(0,
                        P.jsx)(`span`, {
                            className: `inline-block w-2 h-2 rounded-full bg-green-500 flex-shrink-0`
                        }), (0,
                        P.jsxs)(`span`, {
                            children: [t.join(` and `), ` in effect`]
                        })]
                    })
                }
                )(), (0,
                P.jsxs)(`div`, {
                    className: `bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm p-5`,
                    children: [(0,
                    P.jsxs)(`div`, {
                        className: `flex items-center justify-between mb-3`,
                        children: [(0,
                        P.jsx)(`div`, {
                            className: `flex items-center gap-2`,
                            children: oe.map( (e, t) => (0,
                            P.jsx)(`button`, {
                                onClick: () => r(t => {
                                    let n = new URLSearchParams(t);
                                    return n.set(`window`, e.label),
                                    n
                                }
                                , {
                                    replace: !0
                                }),
                                className: `text-xs px-3 py-1.5 rounded-full border transition-colors ${t === O ? `bg-blue-600 text-white border-blue-600` : `bg-white text-gray-500 border-gray-200 hover:border-gray-300`}`,
                                children: e.label
                            }, e.label))
                        }), (0,
                        P.jsx)(`input`, {
                            type: `text`,
                            placeholder: `Filter by domain...`,
                            value: A,
                            onChange: e => fe(e.target.value),
                            className: `text-xs px-3 py-1.5 border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 w-44`
                        }), (0,
                        P.jsxs)(`button`, {
                            onClick: Se,
                            disabled: be.length === 0,
                            className: `text-xs px-3 py-1.5 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 disabled:opacity-40 transition-colors`,
                            children: [`🚫 Block all (past `, k.label, `)`]
                        })]
                    }), (0,
                    P.jsx)(`div`, {
                        className: `rounded-xl border border-gray-100 overflow-hidden`,
                        children: (0,
                        P.jsxs)(`table`, {
                            className: `w-full text-sm`,
                            children: [(0,
                            P.jsx)(`thead`, {
                                className: `bg-gray-50 border-b border-gray-100`,
                                children: (0,
                                P.jsxs)(`tr`, {
                                    children: [(0,
                                    P.jsx)(`th`, {
                                        className: `text-left px-4 py-3 font-medium text-gray-600 text-xs uppercase tracking-wide`,
                                        children: `Domain`
                                    }), (0,
                                    P.jsx)(`th`, {
                                        className: `text-left px-4 py-3 font-medium text-gray-600 text-xs uppercase tracking-wide hidden sm:table-cell`,
                                        children: `Time`
                                    }), (0,
                                    P.jsx)(`th`, {
                                        className: `text-left px-4 py-3 font-medium text-gray-600 text-xs uppercase tracking-wide`,
                                        children: `Status`
                                    })]
                                })
                            }), (0,
                            P.jsxs)(`tbody`, {
                                className: `divide-y divide-gray-50`,
                                children: [be.map( (e, t) => (0,
                                P.jsxs)(`tr`, {
                                    className: `hover:bg-gray-50`,
                                    children: [(0,
                                    P.jsx)(`td`, {
                                        className: `px-4 py-2.5`,
                                        children: (0,
                                        P.jsx)(uc, {
                                            domain: e.domain
                                        })
                                    }), (0,
                                    P.jsx)(`td`, {
                                        className: `px-4 py-2.5 text-gray-400 text-xs hidden sm:table-cell`,
                                        children: new Date(e.timestamp).toLocaleTimeString()
                                    }), (0,
                                    P.jsx)(`td`, {
                                        className: `px-4 py-2.5`,
                                        children: (0,
                                        P.jsx)(`span`, {
                                            className: `inline-flex text-xs px-2 py-0.5 rounded-full font-medium ${e.wasBlocked ? `bg-red-100 text-red-600` : `bg-green-100 text-green-700`}`,
                                            children: e.wasBlocked ? `Blocked` : `Allowed`
                                        })
                                    })]
                                }, t)), be.length === 0 && (0,
                                P.jsx)(`tr`, {
                                    children: (0,
                                    P.jsxs)(`td`, {
                                        colSpan: 3,
                                        className: `px-4 py-8 text-center text-gray-400 text-sm`,
                                        children: [`No activity in the past `, k.label, `.`]
                                    })
                                })]
                            })]
                        })
                    }), ge && (0,
                    P.jsx)(`div`, {
                        className: `flex justify-center py-4`,
                        children: (0,
                        P.jsx)(`button`, {
                            onClick: () => he(),
                            disabled: _e,
                            className: `text-sm px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 disabled:opacity-50 transition-colors`,
                            children: _e ? `Loading...` : `Load more`
                        })
                    })]
                })]
            }), T && le === `rules` && (0,
            P.jsx)(`div`, {
                className: `p-6`,
                children: (0,
                P.jsx)(Tc, {
                    deviceId: T.deviceId,
                    blockDomains: ue.length > 0 ? ue : void 0,
                    onBlockDomainsConsumed: () => de([]),
                    scheduleOverride: D
                })
            }), T && le === `schedule` && (0,
            P.jsx)(`div`, {
                className: `p-6`,
                children: (0,
                P.jsx)(Rc, {
                    deviceId: T.deviceId
                })
            }), T && le === `categories` && (0,
            P.jsx)(`div`, {
                className: `p-6`,
                children: (0,
                P.jsx)(Hc, {
                    deviceId: T.deviceId,
                    categoriesActive: re
                })
            }), c && (0,
            P.jsx)(ec, {
                device: c,
                onConfirm: async () => {
                    if (await xe.mutateAsync(c.deviceId),
                    l(null),
                    S[te]?.deviceId === c.deviceId) {
                        let e = S.find(e => e.deviceId !== c.deviceId);
                        r(t => {
                            let n = new URLSearchParams(t);
                            return e ? n.set(`device`, e.deviceId) : n.delete(`device`),
                            n
                        }
                        , {
                            replace: !0
                        })
                    }
                }
                ,
                onCancel: () => l(null)
            }), u && (0,
            P.jsx)(Uc, {
                device: u,
                onConfirm: async e => {
                    await M.mutateAsync({
                        deviceId: u.deviceId,
                        name: e
                    }),
                    d(null)
                }
                ,
                onCancel: () => d(null)
            })]
        }), (0,
        P.jsx)(Zs, {})]
    })
}
function Kc() {
    let {deviceId: e} = Wn()
      , t = tt()
      , [n,r] = (0,
    N.useState)(null)
      , {data: i, fetchNextPage: a, hasNextPage: o, isFetchingNextPage: s, isLoading: c} = vt({
        queryKey: [`logs`, e],
        queryFn: ({pageParam: t}) => Ds(e, {
            pageToken: t
        }).then(e => e.data),
        initialPageParam: void 0,
        getNextPageParam: e => e.nextToken ?? void 0,
        refetchInterval: 1e4
    })
      , l = _t({
        mutationFn: ({domain: t, action: n}) => As(e, t, n),
        onSuccess: () => {
            t.invalidateQueries({
                queryKey: [`logs`, e]
            }),
            r(null)
        }
    })
      , u = i?.pages.flatMap(e => e.items) ?? [];
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsxs)(`header`, {
            className: `bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3`,
            children: [(0,
            P.jsxs)(ui, {
                to: `/device`,
                className: `flex items-center gap-2 hover:opacity-70 transition-opacity`,
                children: [(0,
                P.jsx)(Ks, {
                    size: 22
                }), (0,
                P.jsx)(`span`, {
                    className: `font-semibold text-gray-900 text-sm`,
                    children: `Rivshield`
                })]
            }), (0,
            P.jsx)(`span`, {
                className: `text-gray-300`,
                children: `|`
            }), (0,
            P.jsx)(`span`, {
                className: `font-medium text-gray-900`,
                children: `Activity log`
            }), (0,
            P.jsx)(ui, {
                to: `/device?device=${e}&view=rules`,
                className: `ml-auto text-sm px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg`,
                children: `Manage rules`
            })]
        }), (0,
        P.jsxs)(`main`, {
            className: `max-w-4xl mx-auto p-6`,
            children: [c && (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-500`,
                children: `Loading…`
            }), (0,
            P.jsxs)(`div`, {
                className: `bg-white rounded-xl border border-gray-200 overflow-hidden`,
                children: [(0,
                P.jsxs)(`table`, {
                    className: `w-full text-sm`,
                    children: [(0,
                    P.jsx)(`thead`, {
                        className: `bg-gray-50 border-b border-gray-100`,
                        children: (0,
                        P.jsxs)(`tr`, {
                            children: [(0,
                            P.jsx)(`th`, {
                                className: `text-left px-4 py-3 font-medium text-gray-600`,
                                children: `Domain`
                            }), (0,
                            P.jsx)(`th`, {
                                className: `text-left px-4 py-3 font-medium text-gray-600 hidden sm:table-cell`,
                                children: `Time`
                            }), (0,
                            P.jsx)(`th`, {
                                className: `text-left px-4 py-3 font-medium text-gray-600`,
                                children: `Status`
                            }), (0,
                            P.jsx)(`th`, {
                                className: `px-4 py-3`
                            })]
                        })
                    }), (0,
                    P.jsx)(`tbody`, {
                        className: `divide-y divide-gray-50`,
                        children: u.map( (e, t) => (0,
                        P.jsxs)(`tr`, {
                            className: `hover:bg-gray-50 transition-colors`,
                            children: [(0,
                            P.jsx)(`td`, {
                                className: `px-4 py-2.5`,
                                children: (0,
                                P.jsx)(uc, {
                                    domain: e.domain
                                })
                            }), (0,
                            P.jsx)(`td`, {
                                className: `px-4 py-2.5 text-gray-400 text-xs hidden sm:table-cell`,
                                children: new Date(e.timestamp).toLocaleString()
                            }), (0,
                            P.jsx)(`td`, {
                                className: `px-4 py-2.5`,
                                children: (0,
                                P.jsx)(`span`, {
                                    className: `inline-flex text-xs px-2 py-0.5 rounded-full font-medium ${e.wasBlocked ? `bg-red-100 text-red-600` : `bg-green-100 text-green-700`}`,
                                    children: e.wasBlocked ? `Blocked` : `Allowed`
                                })
                            }), (0,
                            P.jsxs)(`td`, {
                                className: `px-4 py-2.5 relative`,
                                children: [(0,
                                P.jsx)(`button`, {
                                    onClick: () => r(n === e.domain ? null : e.domain),
                                    className: `text-xs px-2 py-1 rounded text-gray-500 hover:text-gray-700 hover:bg-gray-100`,
                                    children: `⋯`
                                }), n === e.domain && (0,
                                P.jsxs)(`div`, {
                                    className: `absolute right-0 top-full z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-32`,
                                    children: [(0,
                                    P.jsx)(`button`, {
                                        onClick: () => l.mutate({
                                            domain: e.domain,
                                            action: `Block`
                                        }),
                                        className: `block w-full text-left text-sm px-3 py-1.5 hover:bg-red-50 text-red-600 rounded`,
                                        children: `🚫 Block domain`
                                    }), (0,
                                    P.jsx)(`button`, {
                                        onClick: () => l.mutate({
                                            domain: e.domain,
                                            action: `Allow`
                                        }),
                                        className: `block w-full text-left text-sm px-3 py-1.5 hover:bg-green-50 text-green-700 rounded`,
                                        children: `✓ Always allow`
                                    })]
                                })]
                            })]
                        }, t))
                    })]
                }), o && (0,
                P.jsx)(`div`, {
                    className: `p-4 text-center border-t border-gray-100`,
                    children: (0,
                    P.jsx)(`button`, {
                        onClick: () => a(),
                        disabled: s,
                        className: `text-sm text-blue-600 hover:text-blue-700 disabled:opacity-50`,
                        children: s ? `Loading…` : `Load more`
                    })
                }), u.length === 0 && !c && (0,
                P.jsx)(`div`, {
                    className: `p-8 text-center text-gray-400 text-sm`,
                    children: `No activity logged yet.`
                })]
            })]
        }), (0,
        P.jsx)(Zs, {})]
    })
}
var qc = [{
    icon: (0,
    P.jsx)(`svg`, {
        width: `20`,
        height: `20`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        children: (0,
        P.jsx)(`path`, {
            d: `M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`
        })
    }),
    title: `DNS-level filtering`,
    body: `Every DNS lookup goes through Rivshield first. Blocked domains return NXDOMAIN instantly — no browser extension, no proxy needed.`
}, {
    icon: (0,
    P.jsxs)(`svg`, {
        width: `20`,
        height: `20`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        children: [(0,
        P.jsx)(`rect`, {
            x: `3`,
            y: `11`,
            width: `18`,
            height: `11`,
            rx: `2`,
            ry: `2`
        }), (0,
        P.jsx)(`path`, {
            d: `M7 11V7a5 5 0 0 1 10 0v4`
        })]
    }),
    title: `Kernel-level lockdown`,
    body: `Windows Filtering Platform blocks external DNS servers, DoH endpoints, and VPN ports at the OS level — before any app can interfere.`
}, {
    icon: (0,
    P.jsxs)(`svg`, {
        width: `20`,
        height: `20`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        children: [(0,
        P.jsx)(`circle`, {
            cx: `12`,
            cy: `12`,
            r: `10`
        }), (0,
        P.jsx)(`polyline`, {
            points: `12 6 12 12 16 14`
        })]
    }),
    title: `Schedules & categories`,
    body: `Set internet hours by day, switch filter modes on a timer, and toggle pre-built blocklists for social media, gaming, and adult content.`
}, {
    icon: (0,
    P.jsxs)(`svg`, {
        width: `20`,
        height: `20`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        children: [(0,
        P.jsx)(`rect`, {
            x: `2`,
            y: `3`,
            width: `20`,
            height: `14`,
            rx: `2`,
            ry: `2`
        }), (0,
        P.jsx)(`line`, {
            x1: `8`,
            y1: `21`,
            x2: `16`,
            y2: `21`
        }), (0,
        P.jsx)(`line`, {
            x1: `12`,
            y1: `17`,
            x2: `12`,
            y2: `21`
        })]
    }),
    title: `Cloud dashboard`,
    body: `View DNS activity, add rules, and manage settings from any browser. Changes sync to the device within 30 seconds.`
}]
  , Jc = [{
    n: `01`,
    title: `Install`,
    body: `Run the setup on your child's Windows laptop and enter your email. The installer removes their admin rights automatically.`
}, {
    n: `02`,
    title: `Configure`,
    body: `Open your parent dashboard and set up rules, schedules, and blocklists — takes less than five minutes.`
}, {
    n: `03`,
    title: `Monitor`,
    body: `Review live DNS activity and refine your rules anytime. Changes take effect within 30 seconds, no restart required.`
}]
  , Yc = [{
    q: `What platforms does it run on?`,
    a: `Windows 10 and Windows 11, 64-bit (x64) only. ARM and 32-bit systems are not supported.`
}, {
    q: `Can my child uninstall it?`,
    a: `Not without administrator access. The installer removes their admin rights as part of setup.`
}, {
    q: `Will it slow down the internet?`,
    a: `No. The DNS interceptor resolves queries locally and forwards allowed ones to Cloudflare with minimal overhead.`
}, {
    q: `What data leaves the device?`,
    a: `Only DNS query logs, linked to your parent email. Logs are stored in your own AWS account and expire automatically after 90 days.`
}, {
    q: `How much does it cost?`,
    a: `Free during early access.`
}, {
    q: `Is it open source?`,
    a: `No. The agent runs locally and only communicates with your own AWS account — your data never touches a shared Rivshield server.`
}, {
    q: `Does it work on school-managed devices?`,
    a: `Rivshield requires admin-level installation. It will not work on MDM-managed school devices.`
}]
  , Xc = `'Syne', sans-serif`;
function Zc() {
    return (0,
    P.jsxs)(`div`, {
        style: {
            textAlign: `left`,
            width: `100%`,
            color: `#0f172a`
        },
        children: [(0,
        P.jsx)(`style`, {
            children: `
        .lp-nav-login:hover { background: rgba(59,130,246,0.18) !important; }
        .lp-btn-primary { background: #3b82f6; color: #fff; box-shadow: 0 0 22px rgba(59,130,246,0.35); transition: background 0.15s, box-shadow 0.15s; }
        .lp-btn-primary:hover { background: #2563eb !important; box-shadow: 0 0 30px rgba(59,130,246,0.55) !important; }
        .lp-btn-ghost { color: #94a3b8; border: 1px solid rgba(255,255,255,0.08); transition: color 0.15s, border-color 0.15s; }
        .lp-btn-ghost:hover { color: #e2e8f0 !important; border-color: rgba(255,255,255,0.2) !important; }
        .lp-feature-card { background: #fafbff; border: 1px solid #e2e8f0; border-radius: 14px; transition: box-shadow 0.2s, transform 0.2s; }
        .lp-feature-card:hover { box-shadow: 0 8px 28px rgba(59,130,246,0.1); transform: translateY(-3px); }
        @keyframes lp-fadein { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .lp-hero-badge { animation: lp-fadein 0.5s ease both; }
        .lp-hero-h1 { animation: lp-fadein 0.55s 0.08s ease both; }
        .lp-hero-sub { animation: lp-fadein 0.55s 0.18s ease both; }
        .lp-hero-ctas { animation: lp-fadein 0.55s 0.28s ease both; }
      `
        }), (0,
        P.jsxs)(`header`, {
            className: `sticky top-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4`,
            style: {
                background: `rgba(10,18,32,0.93)`,
                backdropFilter: `blur(14px)`,
                borderBottom: `1px solid rgba(255,255,255,0.06)`
            },
            children: [(0,
            P.jsxs)(`div`, {
                className: `flex items-center gap-2.5`,
                children: [(0,
                P.jsx)(Ks, {
                    size: 24
                }), (0,
                P.jsx)(`span`, {
                    style: {
                        fontFamily: Xc,
                        fontWeight: 700,
                        fontSize: `1rem`,
                        color: `#e2e8f0`,
                        letterSpacing: `-0.01em`
                    },
                    children: `Rivshield`
                })]
            }), (0,
            P.jsx)(ui, {
                to: `/login`,
                className: `lp-nav-login text-sm font-medium px-4 py-2 rounded-lg`,
                style: {
                    color: `#93c5fd`,
                    background: `rgba(59,130,246,0.1)`,
                    border: `1px solid rgba(59,130,246,0.22)`,
                    transition: `background 0.15s`
                },
                children: `Parent login →`
            })]
        }), (0,
        P.jsxs)(`section`, {
            className: `relative overflow-hidden px-6 sm:px-10 pt-24 pb-32`,
            style: {
                background: `#0a1220`,
                backgroundImage: `
            radial-gradient(ellipse 72% 60% at 50% -8%, rgba(59,130,246,0.2) 0%, transparent 62%),
            linear-gradient(rgba(59,130,246,0.042) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.042) 1px, transparent 1px)
          `,
                backgroundSize: `auto, 50px 50px, 50px 50px`
            },
            children: [(0,
            P.jsx)(`div`, {
                className: `absolute pointer-events-none`,
                style: {
                    top: `5%`,
                    left: `50%`,
                    transform: `translateX(-50%)`,
                    width: 400,
                    height: 400,
                    background: `radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 68%)`,
                    filter: `blur(50px)`
                }
            }), (0,
            P.jsxs)(`div`, {
                className: `relative max-w-3xl mx-auto`,
                style: {
                    textAlign: `center`
                },
                children: [(0,
                P.jsxs)(`div`, {
                    className: `lp-hero-badge inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-8`,
                    style: {
                        background: `rgba(59,130,246,0.1)`,
                        color: `#93c5fd`,
                        border: `1px solid rgba(59,130,246,0.25)`,
                        letterSpacing: `0.07em`,
                        textTransform: `uppercase`
                    },
                    children: [(0,
                    P.jsx)(`span`, {
                        style: {
                            width: 6,
                            height: 6,
                            borderRadius: `50%`,
                            background: `#60a5fa`,
                            flexShrink: 0
                        }
                    }), `Early access`]
                }), (0,
                P.jsxs)(`h1`, {
                    className: `lp-hero-h1`,
                    style: {
                        fontFamily: Xc,
                        fontWeight: 800,
                        fontSize: `clamp(2.1rem, 5.5vw, 3.4rem)`,
                        lineHeight: 1.08,
                        letterSpacing: `-0.03em`,
                        color: `#eef4ff`,
                        marginBottom: `1.4rem`
                    },
                    children: [`Keep your kids safe online`, (0,
                    P.jsx)(`br`, {}), (0,
                    P.jsx)(`span`, {
                        style: {
                            color: `#60a5fa`
                        },
                        children: `without the arms race.`
                    })]
                }), (0,
                P.jsx)(`p`, {
                    className: `lp-hero-sub`,
                    style: {
                        fontSize: `1.05rem`,
                        lineHeight: 1.72,
                        color: `#8da4be`,
                        maxWidth: 560,
                        margin: `0 auto 2.5rem`
                    },
                    children: `Rivshield is a kernel-level parental firewall for Windows laptops. It blocks VPNs, rogue DNS servers, and every circumvention trick — at the OS level, before any app can interfere.`
                }), (0,
                P.jsxs)(`div`, {
                    className: `lp-hero-ctas flex items-center justify-center gap-3 flex-wrap`,
                    children: [(0,
                    P.jsxs)(`a`, {
                        href: `/downloads`,
                        className: `lp-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold`,
                        children: [(0,
                        P.jsxs)(`svg`, {
                            width: `15`,
                            height: `15`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2.5`,
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            children: [(0,
                            P.jsx)(`path`, {
                                d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`
                            }), (0,
                            P.jsx)(`polyline`, {
                                points: `7 10 12 15 17 10`
                            }), (0,
                            P.jsx)(`line`, {
                                x1: `12`,
                                y1: `15`,
                                x2: `12`,
                                y2: `3`
                            })]
                        }), `Download for Windows`]
                    }), (0,
                    P.jsx)(`a`, {
                        href: `#how-it-works`,
                        className: `lp-btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium`,
                        children: `See how it works`
                    })]
                })]
            }), (0,
            P.jsx)(`div`, {
                className: `absolute bottom-0 left-0 right-0 h-20 pointer-events-none`,
                style: {
                    background: `linear-gradient(to bottom, transparent, #fff)`
                }
            })]
        }), (0,
        P.jsx)(`section`, {
            className: `px-6 sm:px-10 py-20 bg-white`,
            children: (0,
            P.jsxs)(`div`, {
                className: `max-w-4xl mx-auto`,
                children: [(0,
                P.jsx)(`p`, {
                    style: {
                        textTransform: `uppercase`,
                        fontSize: `0.7rem`,
                        letterSpacing: `0.14em`,
                        color: `#64748b`,
                        fontWeight: 700,
                        textAlign: `center`,
                        marginBottom: `0.6rem`
                    },
                    children: `How it protects`
                }), (0,
                P.jsx)(`h2`, {
                    style: {
                        fontFamily: Xc,
                        fontWeight: 700,
                        fontSize: `clamp(1.5rem, 3vw, 2.1rem)`,
                        color: `#0f172a`,
                        textAlign: `center`,
                        marginBottom: `3rem`,
                        letterSpacing: `-0.025em`
                    },
                    children: `Defense in depth — at the OS level`
                }), (0,
                P.jsx)(`div`, {
                    style: {
                        display: `grid`,
                        gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
                        gap: `1.25rem`
                    },
                    children: qc.map(e => (0,
                    P.jsxs)(`div`, {
                        className: `lp-feature-card`,
                        style: {
                            padding: `1.5rem`
                        },
                        children: [(0,
                        P.jsx)(`div`, {
                            style: {
                                width: 40,
                                height: 40,
                                borderRadius: 10,
                                background: `rgba(59,130,246,0.08)`,
                                color: `#3b82f6`,
                                display: `flex`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                marginBottom: `1rem`
                            },
                            children: e.icon
                        }), (0,
                        P.jsx)(`h3`, {
                            style: {
                                fontWeight: 600,
                                fontSize: `0.95rem`,
                                color: `#0f172a`,
                                marginBottom: `0.45rem`
                            },
                            children: e.title
                        }), (0,
                        P.jsx)(`p`, {
                            style: {
                                fontSize: `0.875rem`,
                                lineHeight: 1.68,
                                color: `#64748b`
                            },
                            children: e.body
                        })]
                    }, e.title))
                })]
            })
        }), (0,
        P.jsx)(`section`, {
            id: `how-it-works`,
            className: `px-6 sm:px-10 py-20`,
            style: {
                background: `#f8fafc`
            },
            children: (0,
            P.jsxs)(`div`, {
                className: `max-w-4xl mx-auto`,
                children: [(0,
                P.jsx)(`p`, {
                    style: {
                        textTransform: `uppercase`,
                        fontSize: `0.7rem`,
                        letterSpacing: `0.14em`,
                        color: `#64748b`,
                        fontWeight: 700,
                        textAlign: `center`,
                        marginBottom: `0.6rem`
                    },
                    children: `Setup`
                }), (0,
                P.jsx)(`h2`, {
                    style: {
                        fontFamily: Xc,
                        fontWeight: 700,
                        fontSize: `clamp(1.5rem, 3vw, 2.1rem)`,
                        color: `#0f172a`,
                        textAlign: `center`,
                        marginBottom: `3.5rem`,
                        letterSpacing: `-0.025em`
                    },
                    children: `Up and running in minutes`
                }), (0,
                P.jsx)(`div`, {
                    style: {
                        display: `grid`,
                        gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
                        gap: `2.5rem`
                    },
                    children: Jc.map(e => (0,
                    P.jsxs)(`div`, {
                        style: {
                            textAlign: `center`
                        },
                        children: [(0,
                        P.jsx)(`div`, {
                            style: {
                                fontFamily: Xc,
                                fontWeight: 800,
                                fontSize: `3.8rem`,
                                lineHeight: 1,
                                color: `transparent`,
                                WebkitTextStroke: `1.5px #cbd5e1`,
                                marginBottom: `1rem`,
                                display: `block`
                            },
                            children: e.n
                        }), (0,
                        P.jsx)(`h3`, {
                            style: {
                                fontWeight: 600,
                                fontSize: `1rem`,
                                color: `#0f172a`,
                                marginBottom: `0.5rem`
                            },
                            children: e.title
                        }), (0,
                        P.jsx)(`p`, {
                            style: {
                                fontSize: `0.875rem`,
                                lineHeight: 1.68,
                                color: `#64748b`
                            },
                            children: e.body
                        })]
                    }, e.n))
                })]
            })
        }), (0,
        P.jsx)(`section`, {
            className: `px-6 sm:px-10 py-20 bg-white`,
            children: (0,
            P.jsxs)(`div`, {
                className: `max-w-2xl mx-auto`,
                children: [(0,
                P.jsx)(`p`, {
                    style: {
                        textTransform: `uppercase`,
                        fontSize: `0.7rem`,
                        letterSpacing: `0.14em`,
                        color: `#64748b`,
                        fontWeight: 700,
                        textAlign: `center`,
                        marginBottom: `0.6rem`
                    },
                    children: `FAQ`
                }), (0,
                P.jsx)(`h2`, {
                    style: {
                        fontFamily: Xc,
                        fontWeight: 700,
                        fontSize: `clamp(1.5rem, 3vw, 2.1rem)`,
                        color: `#0f172a`,
                        textAlign: `center`,
                        marginBottom: `3rem`,
                        letterSpacing: `-0.025em`
                    },
                    children: `Common questions`
                }), (0,
                P.jsx)(`div`, {
                    children: Yc.map( (e, t) => (0,
                    P.jsxs)(`div`, {
                        style: {
                            padding: `1.2rem 0`,
                            borderBottom: t < Yc.length - 1 ? `1px solid #e2e8f0` : `none`
                        },
                        children: [(0,
                        P.jsx)(`p`, {
                            style: {
                                fontWeight: 600,
                                color: `#0f172a`,
                                marginBottom: `0.35rem`,
                                fontSize: `0.9rem`
                            },
                            children: e.q
                        }), (0,
                        P.jsx)(`p`, {
                            style: {
                                color: `#64748b`,
                                fontSize: `0.875rem`,
                                lineHeight: 1.68
                            },
                            children: e.a
                        })]
                    }, t))
                })]
            })
        }), (0,
        P.jsx)(`section`, {
            className: `px-6 sm:px-10 py-24`,
            style: {
                background: `#0a1220`,
                backgroundImage: `radial-gradient(ellipse 60% 90% at 50% 50%, rgba(59,130,246,0.13) 0%, transparent 65%)`,
                textAlign: `center`
            },
            children: (0,
            P.jsxs)(`div`, {
                className: `max-w-lg mx-auto`,
                children: [(0,
                P.jsx)(`div`, {
                    className: `flex justify-center mb-5`,
                    children: (0,
                    P.jsx)(Ks, {
                        size: 46
                    })
                }), (0,
                P.jsx)(`h2`, {
                    style: {
                        fontFamily: Xc,
                        fontWeight: 700,
                        fontSize: `clamp(1.5rem, 3vw, 2rem)`,
                        color: `#eef4ff`,
                        marginBottom: `0.75rem`,
                        letterSpacing: `-0.025em`
                    },
                    children: `Ready to take control?`
                }), (0,
                P.jsx)(`p`, {
                    style: {
                        color: `#8da4be`,
                        marginBottom: `2rem`,
                        lineHeight: 1.68
                    },
                    children: `Free during early access. Install in minutes.`
                }), (0,
                P.jsxs)(`div`, {
                    className: `flex items-center justify-center gap-3 flex-wrap`,
                    children: [(0,
                    P.jsxs)(`a`, {
                        href: `/downloads`,
                        className: `lp-btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold`,
                        children: [(0,
                        P.jsxs)(`svg`, {
                            width: `15`,
                            height: `15`,
                            viewBox: `0 0 24 24`,
                            fill: `none`,
                            stroke: `currentColor`,
                            strokeWidth: `2.5`,
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            children: [(0,
                            P.jsx)(`path`, {
                                d: `M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`
                            }), (0,
                            P.jsx)(`polyline`, {
                                points: `7 10 12 15 17 10`
                            }), (0,
                            P.jsx)(`line`, {
                                x1: `12`,
                                y1: `15`,
                                x2: `12`,
                                y2: `3`
                            })]
                        }), `Download for Windows`]
                    }), (0,
                    P.jsx)(ui, {
                        to: `/login`,
                        className: `lp-btn-ghost inline-flex items-center px-6 py-3 rounded-xl text-sm font-medium`,
                        children: `Parent login →`
                    })]
                })]
            })
        }), (0,
        P.jsx)(`div`, {
            style: {
                background: `#060e1a`,
                borderTop: `1px solid rgba(255,255,255,0.04)`
            },
            children: (0,
            P.jsx)(Zs, {
                variant: `dark`
            })
        })]
    })
}
function Qc(e) {
    return e.split(`.`).map(Number)
}
function $c(e, t) {
    let n = Qc(e)
      , r = Qc(t);
    for (let e = 0; e < Math.max(n.length, r.length); e++) {
        let t = (n[e] ?? 0) - (r[e] ?? 0);
        if (t !== 0)
            return t < 0
    }
    return !1
}
function el() {
    let e = tt()
      , [t,n] = (0,
    N.useState)(null)
      , {data: r, isLoading: i} = gt({
        queryKey: [`admin-releases`],
        queryFn: () => Ws().then(e => e.data),
        refetchInterval: 3e4
    })
      , a = _t({
        mutationFn: e => Gs(e),
        onSuccess: () => {
            e.invalidateQueries({
                queryKey: [`admin-releases`]
            }),
            n(null)
        }
    });
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsxs)(`header`, {
            className: `bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between`,
            children: [(0,
            P.jsxs)(ui, {
                to: `/device`,
                className: `flex items-center gap-2 hover:opacity-70 transition-opacity`,
                children: [(0,
                P.jsx)(Ks, {
                    size: 26
                }), (0,
                P.jsx)(`span`, {
                    className: `font-semibold text-gray-900`,
                    children: `RivShield`
                })]
            }), (0,
            P.jsx)(`span`, {
                className: `text-sm text-gray-500 font-medium`,
                children: `Admin`
            })]
        }), (0,
        P.jsxs)(`div`, {
            className: `max-w-4xl mx-auto p-6 space-y-6`,
            children: [r?.staged && ( () => {
                let e = r.staged
                  , t = r.promoted?.version === e.version;
                return (0,
                P.jsxs)(`div`, {
                    className: `bg-white rounded-xl border shadow-sm p-5 flex items-start justify-between gap-4 ${t ? `border-green-200` : `border-blue-200`}`,
                    children: [(0,
                    P.jsxs)(`div`, {
                        children: [(0,
                        P.jsx)(`p`, {
                            className: `text-xs font-medium text-gray-500 uppercase tracking-wide mb-1`,
                            children: `Latest Build`
                        }), (0,
                        P.jsx)(`p`, {
                            className: `text-base font-semibold text-gray-900 font-mono`,
                            children: e.version
                        }), (0,
                        P.jsxs)(`p`, {
                            className: `text-xs text-gray-400 mt-0.5`,
                            children: [`Staged `, new Date(e.stagedAt).toLocaleString(), e.sha256 && (0,
                            P.jsxs)(`span`, {
                                className: `ml-2 font-mono`,
                                children: [e.sha256.slice(0, 12), `…`]
                            })]
                        })]
                    }), t ? (0,
                    P.jsx)(`span`, {
                        className: `text-xs px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-medium whitespace-nowrap mt-1`,
                        children: `current`
                    }) : (0,
                    P.jsx)(`button`, {
                        onClick: () => n(e.version),
                        className: `text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap`,
                        children: `Promote to agents`
                    })]
                })
            }
            )(), (0,
            P.jsxs)(`div`, {
                className: `bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden`,
                children: [(0,
                P.jsxs)(`div`, {
                    className: `px-5 py-4 border-b border-gray-100`,
                    children: [(0,
                    P.jsx)(`h2`, {
                        className: `text-base font-semibold text-gray-900`,
                        children: `Versions`
                    }), r?.promoted && (0,
                    P.jsxs)(`p`, {
                        className: `text-xs text-gray-500 mt-0.5`,
                        children: [`Current promoted release: `, (0,
                        P.jsx)(`span`, {
                            className: `font-medium text-gray-700`,
                            children: r.promoted.version
                        }), ` `, `— promoted by `, r.promoted.promotedBy, ` on `, new Date(r.promoted.promotedAt).toLocaleDateString()]
                    })]
                }), i ? (0,
                P.jsx)(`div`, {
                    className: `p-5 text-sm text-gray-400`,
                    children: `Loading releases…`
                }) : (0,
                P.jsxs)(`table`, {
                    className: `w-full text-sm`,
                    children: [(0,
                    P.jsx)(`thead`, {
                        className: `bg-gray-50 border-b border-gray-100`,
                        children: (0,
                        P.jsxs)(`tr`, {
                            children: [(0,
                            P.jsx)(`th`, {
                                className: `text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide`,
                                children: `Version`
                            }), (0,
                            P.jsx)(`th`, {
                                className: `text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide hidden sm:table-cell`,
                                children: `SHA256`
                            }), (0,
                            P.jsx)(`th`, {
                                className: `text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide hidden sm:table-cell`,
                                children: `Size`
                            }), (0,
                            P.jsx)(`th`, {
                                className: `text-left px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide hidden sm:table-cell`,
                                children: `Uploaded`
                            }), (0,
                            P.jsx)(`th`, {
                                className: `px-5 py-3`
                            })]
                        })
                    }), (0,
                    P.jsxs)(`tbody`, {
                        className: `divide-y divide-gray-50`,
                        children: [(r?.releases ?? []).map(e => {
                            let t = r?.promoted?.version === e.version;
                            return (0,
                            P.jsxs)(`tr`, {
                                className: `hover:bg-gray-50`,
                                children: [(0,
                                P.jsx)(`td`, {
                                    className: `px-5 py-3`,
                                    children: (0,
                                    P.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [(0,
                                        P.jsx)(`span`, {
                                            className: `font-mono text-sm text-gray-900`,
                                            children: e.version
                                        }), t && (0,
                                        P.jsx)(`span`, {
                                            className: `text-[10px] px-1.5 py-0.5 rounded-full bg-green-100 text-green-700 font-medium`,
                                            children: `current`
                                        })]
                                    })
                                }), (0,
                                P.jsx)(`td`, {
                                    className: `px-5 py-3 font-mono text-xs text-gray-400 hidden sm:table-cell`,
                                    title: e.sha256,
                                    children: e.sha256 ? e.sha256.slice(0, 16) + `…` : `—`
                                }), (0,
                                P.jsx)(`td`, {
                                    className: `px-5 py-3 text-xs text-gray-500 hidden sm:table-cell`,
                                    children: e.sizeBytes ? `${(e.sizeBytes / 1048576).toFixed(1)} MB` : `—`
                                }), (0,
                                P.jsx)(`td`, {
                                    className: `px-5 py-3 text-xs text-gray-500 hidden sm:table-cell`,
                                    children: new Date(e.lastModified).toLocaleDateString()
                                }), (0,
                                P.jsx)(`td`, {
                                    className: `px-5 py-3 text-right`,
                                    children: !t && (0,
                                    P.jsx)(`button`, {
                                        onClick: () => n(e.version),
                                        className: `text-xs px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-colors`,
                                        children: `Promote`
                                    })
                                })]
                            }, e.version)
                        }
                        ), (r?.releases ?? []).length === 0 && (0,
                        P.jsx)(`tr`, {
                            children: (0,
                            P.jsx)(`td`, {
                                colSpan: 5,
                                className: `px-5 py-8 text-center text-sm text-gray-400`,
                                children: `No releases found in S3.`
                            })
                        })]
                    })]
                })]
            })]
        }), (0,
        P.jsx)(Zs, {}), t && ( () => {
            let e = !!(r?.promoted && $c(t, r.promoted.version));
            return (0,
            P.jsxs)(P.Fragment, {
                children: [(0,
                P.jsx)(`div`, {
                    className: `fixed inset-0 z-40 bg-black/30 backdrop-blur-sm`,
                    onClick: () => n(null)
                }), (0,
                P.jsx)(`div`, {
                    className: `fixed inset-0 z-50 flex items-center justify-center p-4`,
                    children: (0,
                    P.jsxs)(`div`, {
                        className: `bg-white rounded-2xl shadow-xl border border-gray-200 p-6 max-w-sm w-full space-y-4`,
                        children: [(0,
                        P.jsxs)(`h3`, {
                            className: `text-base font-semibold text-gray-900`,
                            children: [`Promote v`, t, `?`]
                        }), e ? (0,
                        P.jsxs)(`div`, {
                            className: `space-y-2`,
                            children: [(0,
                            P.jsxs)(`div`, {
                                className: `flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 p-3`,
                                children: [(0,
                                P.jsx)(`span`, {
                                    className: `text-amber-500 mt-0.5`,
                                    children: `⚠`
                                }), (0,
                                P.jsxs)(`p`, {
                                    className: `text-sm text-amber-800`,
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-semibold`,
                                        children: `This is a rollback.`
                                    }), ` Running agents will `, (0,
                                    P.jsx)(`span`, {
                                        className: `font-semibold`,
                                        children: `not`
                                    }), ` be affected — agents only install versions newer than what they already have. Only new installs from the downloads page will get v`, t, `.`]
                                })]
                            }), (0,
                            P.jsxs)(`p`, {
                                className: `text-sm text-gray-600`,
                                children: [`The downloads page will show v`, t, ` and the static installer link will point to it.`]
                            })]
                        }) : (0,
                        P.jsx)(`p`, {
                            className: `text-sm text-gray-600`,
                            children: `This will trigger background updates on all devices running older versions. The action cannot be undone automatically — to roll back, promote an older version.`
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `flex gap-3 justify-end pt-1`,
                            children: [(0,
                            P.jsx)(`button`, {
                                onClick: () => n(null),
                                className: `text-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors`,
                                children: `Cancel`
                            }), (0,
                            P.jsx)(`button`, {
                                onClick: () => a.mutate(t),
                                disabled: a.isPending,
                                className: `text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors`,
                                children: a.isPending ? `Promoting…` : `Promote`
                            })]
                        })]
                    })
                })]
            })
        }
        )()]
    })
}
function G({n: e, children: t}) {
    return (0,
    P.jsxs)(`h2`, {
        className: `text-xl font-semibold text-gray-900 mt-10 mb-3 flex items-baseline gap-2`,
        children: [(0,
        P.jsx)(`span`, {
            className: `inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold shrink-0`,
            children: e
        }), t]
    })
}
function tl() {
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsxs)(`div`, {
            className: `flex-1 w-full max-w-3xl mx-auto px-6 py-12`,
            children: [(0,
            P.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-8`,
                children: [(0,
                P.jsx)(Ks, {
                    size: 28
                }), (0,
                P.jsx)(ui, {
                    to: `/`,
                    className: `text-sm text-blue-600 hover:underline`,
                    children: `← Back to home`
                })]
            }), (0,
            P.jsx)(`h1`, {
                className: `text-3xl font-bold text-gray-900 mb-1`,
                children: `Terms of Service`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-500 mb-6`,
                children: [`Version `, 1, ` — Last updated: `, Xs]
            }), (0,
            P.jsx)(G, {
                n: 1,
                children: `Acceptance of Terms`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`By using Rivshield (the "Service"), you agree to these Terms. If you do not agree, do not use the Service. These Terms constitute a legally binding agreement between you and `, Js, `. Acceptance occurs when you check the acceptance checkbox during account creation or software installation.`]
            }), (0,
            P.jsx)(G, {
                n: 2,
                children: `Description of the Service`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `Rivshield is a parental control service comprising:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `a Windows agent that intercepts DNS queries on enrolled devices and enforces content filtering policies configured by the parent;`
                }), (0,
                P.jsx)(`li`, {
                    children: `a web dashboard that allows parents to monitor device activity, configure filtering rules, and manage enrolled devices;`
                }), (0,
                P.jsx)(`li`, {
                    children: `a cloud backend that synchronizes policies and activity logs between the agent and dashboard.`
                })]
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `The Service is designed to be used by a parent or legal guardian to monitor and restrict internet content on a device used by a minor in their care.`
            }), (0,
            P.jsx)(G, {
                n: 3,
                children: `Eligibility`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `You must be at least 18 years of age and the legal parent or guardian of the minor whose device you are enrolling. By using the Service you represent and warrant that these conditions are met. The Service is not available to minors and no child under 18 should create a parent account.`
            }), (0,
            P.jsx)(G, {
                n: 4,
                children: `Account Registration and Security`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`You register using your email address and a one-time verification code. You are responsible for maintaining the security of your email account. You must notify us immediately at`, ` `, (0,
                P.jsx)(`a`, {
                    href: `mailto:${qs}`,
                    className: `text-blue-600 hover:underline`,
                    children: qs
                }), ` if you become aware of any unauthorized access. `, Js, ` is not liable for any loss resulting from unauthorized use of your credentials.`]
            }), (0,
            P.jsx)(G, {
                n: 5,
                children: `License Grant`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`Subject to your compliance with these Terms, `, Js, ` grants you a limited, personal, non-exclusive, non-transferable, revocable license to:`]
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `install and run the Rivshield agent software on devices that you own or are authorized to manage;`
                }), (0,
                P.jsx)(`li`, {
                    children: `access and use the web dashboard.`
                })]
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `This license does not include the right to sublicense, resell, or use the Service for commercial purposes.`
            }), (0,
            P.jsx)(G, {
                n: 6,
                children: `Acceptable Use`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `You agree not to:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `reverse engineer, decompile, or attempt to extract the source code of any component of the Service;`
                }), (0,
                P.jsx)(`li`, {
                    children: `attempt to circumvent, disable, or tamper with any content filtering or security mechanism;`
                }), (0,
                P.jsx)(`li`, {
                    children: `install the agent on a device without the knowledge and consent of the device's primary adult user (if the primary user is an adult);`
                }), (0,
                P.jsx)(`li`, {
                    children: `use the Service to monitor or control adults without their explicit, informed consent;`
                }), (0,
                P.jsx)(`li`, {
                    children: `use the Service in connection with any illegal activity or in violation of any applicable law;`
                }), (0,
                P.jsx)(`li`, {
                    children: `resell, sublicense, or otherwise make the Service available to third parties.`
                })]
            }), (0,
            P.jsx)(G, {
                n: 7,
                children: `Parental Responsibility`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `You are solely responsible for:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `determining that installation and use of the Service on the enrolled device is appropriate for your household and lawful in your jurisdiction;`
                }), (0,
                P.jsx)(`li`, {
                    children: `disclosing the existence of the monitoring software to household members as required by applicable law;`
                }), (0,
                P.jsx)(`li`, {
                    children: `the accuracy of filtering rules you configure;`
                }), (0,
                P.jsx)(`li`, {
                    children: `any harm that results from a failure of the Service to block specific content.`
                })]
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [Js, ` does not guarantee that the Service will block all objectionable content.`]
            }), (0,
            P.jsx)(G, {
                n: 8,
                children: `Fees`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`The Service is currently provided free of charge. `, Js, ` reserves the right to introduce paid subscription tiers in the future. You will be given at least 30 days' advance notice of any pricing change, and continued use of the Service after that notice constitutes acceptance of the new pricing. Free tiers, if any, will be described on the website at the time of any pricing change.`]
            }), (0,
            P.jsx)(G, {
                n: 9,
                children: `Intellectual Property`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`All rights in the Service, including software, trademarks, logos, and content (excluding your data), are owned by or licensed to `, Js, `. These Terms do not grant you any rights to`, ` `, Js, `'s intellectual property except as expressly stated herein.`]
            }), (0,
            P.jsx)(G, {
                n: 10,
                children: `Third-Party Services`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `The Service relies on third-party providers, including:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `Amazon Web Services for cloud hosting, storage, and email delivery;`
                }), (0,
                P.jsx)(`li`, {
                    children: `Cloudflare (1.1.1.1) as an upstream DNS resolver.`
                })]
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`Your use of the Service is also subject to the terms and privacy policies of these providers.`, ` `, Js, ` is not responsible for the acts or omissions of third-party providers.`]
            }), (0,
            P.jsx)(G, {
                n: 11,
                children: `Service Availability`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [Js, ` does not guarantee uninterrupted or error-free operation of the Service. The Service is provided on an "as available" basis. `, Js, ` reserves the right to modify, suspend, or discontinue any feature or the Service as a whole with or without notice.`]
            }), (0,
            P.jsx)(G, {
                n: 12,
                children: `Disclaimers`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-xs text-gray-600 leading-relaxed font-medium uppercase tracking-wide p-4 bg-gray-100 rounded-lg mb-3`,
                children: [`THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICE WILL BE SECURE, UNINTERRUPTED, TIMELY, OR ERROR-FREE.`, ` `, Js.toUpperCase(), ` DOES NOT WARRANT THAT THE CONTENT FILTERING WILL BLOCK ALL OBJECTIONABLE MATERIAL OR PREVENT ALL UNAUTHORIZED ACCESS.`]
            }), (0,
            P.jsx)(G, {
                n: 13,
                children: `Limitation of Liability`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-xs text-gray-600 leading-relaxed font-medium uppercase tracking-wide p-4 bg-gray-100 rounded-lg mb-3`,
                children: [`TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, `, Js.toUpperCase(), ` AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL `, Js.toUpperCase(), `'S AGGREGATE LIABILITY EXCEED THE GREATER OF THE TOTAL FEES PAID BY YOU IN THE TWELVE MONTHS PRECEDING THE CLAIM OR ONE HUNDRED U.S. DOLLARS ($100).`]
            }), (0,
            P.jsx)(G, {
                n: 14,
                children: `Indemnification`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`You agree to indemnify, defend, and hold harmless `, Js, ` and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another.`]
            }), (0,
            P.jsx)(G, {
                n: 15,
                children: `Termination`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`You may terminate your use of the Service at any time by uninstalling the agent software and ceasing to access the dashboard. `, Js, ` may suspend or terminate your access to the Service immediately, without prior notice, if you breach these Terms or if `, Js, ` reasonably believes that your use of the Service is harmful or unlawful. Upon termination, your license rights cease and you should uninstall the agent software from all enrolled devices.`]
            }), (0,
            P.jsx)(G, {
                n: 16,
                children: `Changes to Terms`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [Js, ` may update these Terms from time to time. The current version number is displayed at the top of this page. When the version is incremented, you will be required to review and accept the updated Terms before you can continue using the dashboard. Continued use of the Service after acceptance constitutes agreement to the updated Terms.`]
            }), (0,
            P.jsx)(G, {
                n: 17,
                children: `Governing Law and Disputes`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`These Terms are governed by and construed in accordance with the laws of the`, ` `, Ys, `, without regard to its conflict of law provisions. Any dispute arising out of or relating to these Terms or the Service shall be resolved first through good-faith negotiation. If the dispute is not resolved within 30 days, it shall be settled by binding arbitration administered in accordance with applicable arbitration rules.`]
            }), (0,
            P.jsxs)(`p`, {
                className: `text-xs text-gray-600 leading-relaxed font-medium uppercase tracking-wide p-4 bg-gray-100 rounded-lg mb-3`,
                children: [`YOU AND `, Js.toUpperCase(), ` EACH WAIVE ANY RIGHT TO A JURY TRIAL AND TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.`]
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `[NOTE: This section is a template and should be reviewed by qualified counsel before relying on it.]`
            }), (0,
            P.jsx)(G, {
                n: 18,
                children: `Contact`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`For questions about these Terms, please contact: `, Js, ` · Email:`, ` `, (0,
                P.jsx)(`a`, {
                    href: `mailto:${qs}`,
                    className: `text-blue-600 hover:underline`,
                    children: qs
                }), ``, `.`]
            })]
        }), (0,
        P.jsx)(Zs, {
            variant: `light`
        })]
    })
}
function nl({n: e, children: t}) {
    return (0,
    P.jsxs)(`h2`, {
        className: `text-xl font-semibold text-gray-900 mt-10 mb-3 flex items-baseline gap-2`,
        children: [(0,
        P.jsx)(`span`, {
            className: `inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold shrink-0`,
            children: e
        }), t]
    })
}
function rl() {
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsxs)(`div`, {
            className: `flex-1 w-full max-w-3xl mx-auto px-6 py-12`,
            children: [(0,
            P.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-8`,
                children: [(0,
                P.jsx)(Ks, {
                    size: 28
                }), (0,
                P.jsx)(ui, {
                    to: `/`,
                    className: `text-sm text-blue-600 hover:underline`,
                    children: `← Back to home`
                })]
            }), (0,
            P.jsx)(`h1`, {
                className: `text-3xl font-bold text-gray-900 mb-1`,
                children: `Privacy Policy`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-500 mb-6`,
                children: [`Version `, 1, ` — Last updated: `, Xs]
            }), (0,
            P.jsx)(nl, {
                n: 1,
                children: `Introduction`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [Js, ` ("we," "us," "our") operates the Rivshield parental control service. This Privacy Policy explains how we collect, use, and protect information when you use the Rivshield agent software and web dashboard. By using the Service you agree to the collection and use of information as described here.`]
            }), (0,
            P.jsx)(nl, {
                n: 2,
                children: `Scope`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `This policy applies to:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `the Rivshield agent software installed on enrolled devices;`
                }), (0,
                P.jsx)(`li`, {
                    children: `the Rivshield web dashboard at the Service URL;`
                }), (0,
                P.jsx)(`li`, {
                    children: `the backend cloud APIs that connect them.`
                })]
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `It does not apply to third-party services we link to.`
            }), (0,
            P.jsx)(nl, {
                n: 3,
                children: `Information We Collect`
            }), (0,
            P.jsx)(`h3`, {
                className: `text-base font-semibold text-gray-800 mt-4 mb-2`,
                children: `From parent accounts`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `Your email address (used for authentication via one-time verification codes);`
                }), (0,
                P.jsx)(`li`, {
                    children: `approximate IP address and browser user-agent (logged automatically when you access the dashboard);`
                }), (0,
                P.jsx)(`li`, {
                    children: `acceptance timestamp and version when you agree to these policies.`
                })]
            }), (0,
            P.jsx)(`h3`, {
                className: `text-base font-semibold text-gray-800 mt-4 mb-2`,
                children: `From enrolled devices (via the agent)`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `Device name and a randomly generated device identifier (GUID);`
                }), (0,
                P.jsx)(`li`, {
                    children: `agent software version;`
                }), (0,
                P.jsx)(`li`, {
                    children: `timestamps of agent heartbeat connections;`
                }), (0,
                P.jsx)(`li`, {
                    children: `DNS queries made by the device, including: the domain name queried, whether it was allowed or blocked, the applicable filtering rule, and the timestamp.`
                })]
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `We do NOT collect the content of web pages visited, full URLs (only the domain portion of DNS queries), keystrokes, screen content, files, photographs, microphone or camera input, or location data.`
            }), (0,
            P.jsx)(nl, {
                n: 4,
                children: `Information We Do Not Collect`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `We explicitly do not collect or store:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `the content of any website or application;`
                }), (0,
                P.jsx)(`li`, {
                    children: `complete URLs (we see only the domain name portion of DNS queries);`
                }), (0,
                P.jsx)(`li`, {
                    children: `keystrokes or typed text;`
                }), (0,
                P.jsx)(`li`, {
                    children: `screenshots or screen recordings;`
                }), (0,
                P.jsx)(`li`, {
                    children: `microphone or camera data;`
                }), (0,
                P.jsx)(`li`, {
                    children: `files or documents;`
                }), (0,
                P.jsx)(`li`, {
                    children: `precise geographic location;`
                }), (0,
                P.jsx)(`li`, {
                    children: `payment information (the Service is currently free).`
                })]
            }), (0,
            P.jsx)(nl, {
                n: 5,
                children: `How We Use Your Information`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `We use collected information to:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `operate the Service and return DNS allow/block decisions to the agent;`
                }), (0,
                P.jsx)(`li`, {
                    children: `present activity logs and filtering statistics to the parent dashboard;`
                }), (0,
                P.jsx)(`li`, {
                    children: `send you one-time verification codes by email for authentication;`
                }), (0,
                P.jsx)(`li`, {
                    children: `record your consent to our policies;`
                }), (0,
                P.jsx)(`li`, {
                    children: `improve the reliability and accuracy of the content filtering system;`
                }), (0,
                P.jsx)(`li`, {
                    children: `comply with legal obligations;`
                }), (0,
                P.jsxs)(`li`, {
                    children: [`respond to your support requests sent to`, ` `, (0,
                    P.jsx)(`a`, {
                        href: `mailto:${qs}`,
                        className: `text-blue-600 hover:underline`,
                        children: qs
                    }), `.`]
                })]
            }), (0,
            P.jsx)(nl, {
                n: 6,
                children: `Data Retention`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `Activity logs (DNS query records) are retained for the period configured in the Service settings (currently 90 days) and then automatically deleted.`
                }), (0,
                P.jsx)(`li`, {
                    children: `Device records are retained until you delete the device from the dashboard.`
                }), (0,
                P.jsx)(`li`, {
                    children: `Parent consent records (email + accepted version + timestamp) are retained for the lifetime of your account and for 6 years thereafter for legal audit purposes.`
                }), (0,
                P.jsx)(`li`, {
                    children: `Authentication codes (OTPs) expire after 10 minutes.`
                }), (0,
                P.jsx)(`li`, {
                    children: `If you delete your account by removing all devices and ceasing use, residual data is removed on the next applicable retention cycle.`
                })]
            }), (0,
            P.jsx)(nl, {
                n: 7,
                children: `Legal Bases for Processing`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `If you are located in the European Economic Area, we process your personal data on the following legal bases:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Performance of a contract`
                    }), ` — processing your email and device data is necessary to provide the Service you have requested;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Legitimate interests`
                    }), ` — we retain logs for the retention period because parents have a legitimate interest in reviewing past activity;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Consent`
                    }), ` — we rely on your explicit consent (the acceptance checkbox) for processing related to the content of these policies and for optional communications.`]
                })]
            }), (0,
            P.jsx)(nl, {
                n: 8,
                children: `Children's Data`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`Rivshield is a parental control product. The parent/guardian is the account holder and the data controller for information about the enrolled child. `, Js, ` acts as a data processor on the parent's behalf for monitored-user data. The Service is not directed to children under 13, and children should not create a parent account. If you believe a child has created an account, contact us at`, ` `, (0,
                P.jsx)(`a`, {
                    href: `mailto:${qs}`,
                    className: `text-blue-600 hover:underline`,
                    children: qs
                }), `.`]
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `With respect to COPPA (Children's Online Privacy Protection Act): we do not knowingly collect personal information directly from children; the child's DNS query data is collected at the parent's direction under the parent's account.`
            }), (0,
            P.jsx)(nl, {
                n: 9,
                children: `Sharing Your Information`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `We do not sell your personal information. We share data only with:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Infrastructure subprocessors`
                    }), ` — Amazon Web Services, Inc. (hosting, DynamoDB storage, and SES email delivery, located in the United States, us-east-1 region);`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Upstream DNS resolver`
                    }), ` — Cloudflare, Inc. (1.1.1.1) processes DNS queries forwarded by the agent; note that Cloudflare receives the querying device's public IP address as part of the DNS protocol — this is not under our control;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Legal requirements`
                    }), ` — we may disclose information if required by law, court order, or to protect the rights and safety of users or the public;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Business transfers`
                    }), ` — in the event of a merger, acquisition, or sale of assets, user data may be transferred as part of that transaction, with advance notice to users.`]
                })]
            }), (0,
            P.jsx)(nl, {
                n: 10,
                children: `Security`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `We implement reasonable technical and organizational measures to protect your information, including:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsx)(`li`, {
                    children: `TLS encryption for all data in transit between the agent, dashboard, and backend;`
                }), (0,
                P.jsx)(`li`, {
                    children: `JWT-based authentication for parent sessions;`
                }), (0,
                P.jsx)(`li`, {
                    children: `hashed device bearer tokens;`
                }), (0,
                P.jsx)(`li`, {
                    children: `encryption at rest provided by AWS DynamoDB's default encryption;`
                }), (0,
                P.jsx)(`li`, {
                    children: `access to production systems limited to authorized personnel.`
                })]
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`No security measure is perfect, and we cannot guarantee absolute security. Notify us at`, ` `, (0,
                P.jsx)(`a`, {
                    href: `mailto:${qs}`,
                    className: `text-blue-600 hover:underline`,
                    children: qs
                }), ` if you believe your account has been compromised.`]
            }), (0,
            P.jsx)(nl, {
                n: 11,
                children: `International Data Transfers`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `Your data is stored and processed in the United States (AWS us-east-1 region). If you access the Service from outside the United States, your information is transferred to and processed in the United States. By using the Service, you consent to this transfer.`
            }), (0,
            P.jsx)(nl, {
                n: 12,
                children: `Your Rights and Choices`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `Depending on your location, you may have the right to:`
            }), (0,
            P.jsxs)(`ul`, {
                className: `list-disc list-outside pl-5 text-sm text-gray-700 leading-relaxed space-y-1 mb-3`,
                children: [(0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Access`
                    }), ` your personal data — contact us at`, ` `, (0,
                    P.jsx)(`a`, {
                        href: `mailto:${qs}`,
                        className: `text-blue-600 hover:underline`,
                        children: qs
                    }), ` to request a copy;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Correct`
                    }), ` inaccurate information — you can update your device name in the dashboard;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Delete`
                    }), ` your data — deleting a device from the dashboard permanently removes all associated activity logs; you may request deletion of your consent record by contacting us;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Portability`
                    }), ` — contact us at`, ` `, (0,
                    P.jsx)(`a`, {
                        href: `mailto:${qs}`,
                        className: `text-blue-600 hover:underline`,
                        children: qs
                    }), ` to request an export of your activity data;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Withdraw consent`
                    }), ` — you may withdraw your acceptance of these policies by ceasing to use the Service and uninstalling the agent;`]
                }), (0,
                P.jsxs)(`li`, {
                    children: [(0,
                    P.jsx)(`strong`, {
                        children: `Lodge a complaint`
                    }), ` — if you are in the EEA, you have the right to lodge a complaint with your local supervisory authority.`]
                })]
            }), (0,
            P.jsx)(nl, {
                n: 13,
                children: `Cookies and Tracking`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `The Rivshield dashboard does not use cookies or third-party analytics trackers. We store your authentication token in your browser's localStorage. We do not use advertising networks, behavioral tracking, or fingerprinting.`
            }), (0,
            P.jsx)(nl, {
                n: 14,
                children: `Do Not Track`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `The dashboard does not alter its data collection practices in response to Do Not Track signals, as we do not perform behavioral tracking in the first place.`
            }), (0,
            P.jsx)(nl, {
                n: 15,
                children: `Changes to This Policy`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: `We may update this Privacy Policy from time to time. The version number is displayed at the top of this page. When the version is incremented, you will be required to acknowledge the updated policy before you can continue using the dashboard. We encourage you to review this policy periodically.`
            }), (0,
            P.jsx)(nl, {
                n: 16,
                children: `Contact Us`
            }), (0,
            P.jsxs)(`p`, {
                className: `text-sm text-gray-700 leading-relaxed mb-3`,
                children: [`Questions, requests, or concerns about this Privacy Policy: `, Js, ` · Email:`, ` `, (0,
                P.jsx)(`a`, {
                    href: `mailto:${qs}`,
                    className: `text-blue-600 hover:underline`,
                    children: qs
                }), ``, `.`]
            })]
        }), (0,
        P.jsx)(Zs, {
            variant: `light`
        })]
    })
}
function il({text: e}) {
    let[t,n] = (0,
    N.useState)(!1);
    return (0,
    P.jsx)(`button`, {
        onClick: () => {
            navigator.clipboard.writeText(e).then( () => {
                n(!0),
                setTimeout( () => n(!1), 2e3)
            }
            )
        }
        ,
        className: `ml-2 shrink-0 text-xs px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors`,
        children: t ? `Copied!` : `Copy`
    })
}
function al({children: e}) {
    return (0,
    P.jsxs)(`div`, {
        className: `relative flex items-start mt-2`,
        children: [(0,
        P.jsx)(`pre`, {
            className: `flex-1 bg-gray-900 text-gray-100 text-xs rounded-lg p-4 overflow-x-auto whitespace-pre-wrap break-all`,
            children: (0,
            P.jsx)(`code`, {
                children: e
            })
        }), (0,
        P.jsx)(il, {
            text: e
        })]
    })
}
function ol(e) {
    return `# RivShield Cleanup and Diagnostic Tool
# Run this script in an elevated (Run as Administrator) PowerShell window.
# It will attempt to fully remove RivShield from this machine.
# If any step fails, it generates a diagnostic report and tells you where to find it.

$SupportEmail = "${e}"

# --- Admin check -------------------------------------------------------------
$isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole(
    [Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host ""
    Write-Host "ERROR: This script must be run as Administrator." -ForegroundColor Red
    Write-Host "Right-click PowerShell and choose 'Run as Administrator', then try again." -ForegroundColor Red
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

$stepLog  = [System.Collections.Generic.List[string]]::new()
$failed   = [System.Collections.Generic.List[string]]::new()

function Run-Step {
    param([string]$Name, [scriptblock]$Action)
    Write-Host "  $Name..." -NoNewline
    try {
        & $Action
        Write-Host " done" -ForegroundColor Green
        $stepLog.Add("[OK]   $Name")
    } catch {
        Write-Host " FAILED" -ForegroundColor Red
        Write-Host "         $_" -ForegroundColor DarkRed
        $stepLog.Add("[FAIL] $Name - $_")
        $failed.Add($Name)
    }
}

Write-Host ""
Write-Host "RivShield Cleanup Tool" -ForegroundColor Cyan
Write-Host "======================" -ForegroundColor Cyan
Write-Host ""

# --- Step 1: Stop services ---------------------------------------------------
Run-Step "Stop Watchdog service" {
    $out = sc.exe stop Rivshield.Watchdog 2>&1
    # Exit code 1062 = service not started - treat as success
    if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne 1062) {
        $svc = Get-Service -Name Rivshield.Watchdog -ErrorAction SilentlyContinue
        if ($svc -and $svc.Status -ne 'Stopped') { throw $out }
    }
}

Run-Step "Stop Agent service" {
    $out = sc.exe stop Rivshield.Agent 2>&1
    if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne 1062) {
        $svc = Get-Service -Name Rivshield.Agent -ErrorAction SilentlyContinue
        if ($svc -and $svc.Status -ne 'Stopped') { throw $out }
    }
}

# --- Step 2: Strip registry ACLs ---------------------------------------------
Run-Step "Remove registry Deny-ACLs" {
    foreach ($k in 'Rivshield.Agent','Rivshield.Watchdog') {
        $p = "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\$k"
        if (Test-Path $p) {
            $acl = Get-Acl $p
            $denyRules = $acl.Access | Where-Object { $_.AccessControlType -eq 'Deny' }
            foreach ($rule in $denyRules) { $acl.RemoveAccessRule($rule) | Out-Null }
            Set-Acl -Path $p -AclObject $acl
        }
    }
}

# --- Step 3: Delete services -------------------------------------------------
Run-Step "Delete Agent service" {
    sc.exe delete Rivshield.Agent 2>&1 | Out-Null
}

Run-Step "Delete Watchdog service" {
    sc.exe delete Rivshield.Watchdog 2>&1 | Out-Null
}

# --- Step 4: Remove WFP kernel filters ---------------------------------------
Run-Step "Remove WFP kernel filters" {
    Add-Type -TypeDefinition @'
using System;
using System.Runtime.InteropServices;
public static class RivFwp {
    // serverName is IntPtr so $null marshals as a true null pointer (local engine).
    // authnService 10 = RPC_C_AUTHN_WINNT (NTLM) - works in interactive sessions.
    [DllImport("fwpuclnt.dll")]
    public static extern uint FwpmEngineOpen0(IntPtr serverName, uint authnService, IntPtr authIdentity, IntPtr session, out IntPtr engineHandle);
    [DllImport("fwpuclnt.dll")]
    public static extern uint FwpmSubLayerDeleteByKey0(IntPtr engineHandle, ref Guid key);
    [DllImport("fwpuclnt.dll")]
    public static extern uint FwpmEngineClose0(IntPtr engineHandle);
}
'@ -ErrorAction Stop

    # List all known sublayer GUIDs across RivShield versions
    $guids = @('8b7f4e2a-3c91-4d1a-b2f0-9e6a5d8c7b3f')

    $engine = [IntPtr]::Zero
    # 10 = RPC_C_AUTHN_WINNT; works for interactive local sessions unlike RPC_C_AUTHN_DEFAULT
    $err = [RivFwp]::FwpmEngineOpen0([IntPtr]::Zero, 10, [IntPtr]::Zero, [IntPtr]::Zero, [ref]$engine)
    if ($err -ne 0) { throw ("FwpmEngineOpen0 failed: 0x" + $err.ToString("X8")) }
    try {
        foreach ($g in $guids) {
            $guid = [Guid]$g
            # 0x80320007 = FWP_E_NOT_FOUND, 0x80320009 = FWP_E_SUBLAYER_NOT_FOUND — both mean already gone
            $r = [RivFwp]::FwpmSubLayerDeleteByKey0($engine, [ref]$guid)
            if ($r -ne 0 -and $r -ne 0x80320007 -and $r -ne 0x80320009) {
                Write-Host ("  [warn] FwpmSubLayerDeleteByKey0: 0x" + $r.ToString("X8")) -ForegroundColor DarkYellow
            }
        }
    } finally {
        [void][RivFwp]::FwpmEngineClose0($engine)
    }
}

# --- Step 5: Restore DNS -----------------------------------------------------
Run-Step "Restore DNS settings" {
    $bk = "$env:ProgramData\\RivShield\\dns-backup.json"
    if (Test-Path $bk) {
        $entries = Get-Content $bk -Raw | ConvertFrom-Json
        foreach ($entry in $entries) {
            if ($entry.PreviousDns -eq 'dhcp' -or [string]::IsNullOrEmpty($entry.PreviousDns)) {
                Set-DnsClientServerAddress -InterfaceAlias $entry.AdapterName -ResetServerAddresses -EA Stop
            } else {
                Set-DnsClientServerAddress -InterfaceAlias $entry.AdapterName -ServerAddresses $entry.PreviousDns -EA Stop
            }
        }
    } else {
        Get-NetAdapter | ForEach-Object {
            Set-DnsClientServerAddress -InterfaceAlias $_.Name -ResetServerAddresses -EA SilentlyContinue
        }
    }
}

# --- Step 6: Flush DNS cache -------------------------------------------------
Run-Step "Flush DNS cache" {
    ipconfig /flushdns | Out-Null
}

# --- Step 7: Delete data files -----------------------------------------------
Run-Step "Delete RivShield data" {
    Remove-Item -Recurse -Force "$env:ProgramData\\RivShield" -EA SilentlyContinue
    Remove-Item -Recurse -Force "$env:ProgramFiles\\RivShield" -EA SilentlyContinue
}

# --- Step 8: Remove Programs and Features entry ------------------------------
Run-Step "Remove installer registry entry" {
    $key = 'HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\{3F2A1C9D-7E84-4B60-A5D3-8F1B2E4C6A7E}_is1'
    if (Test-Path $key) { Remove-Item $key -Force }
}

# ── Results ───────────────────────────────────────────────────────────────────
Write-Host ""

if ($failed.Count -eq 0) {
    Write-Host "All steps completed successfully." -ForegroundColor Green
    Write-Host "Please reboot your computer to ensure all changes take effect."
    Write-Host ""
} else {
    Write-Host ("$($failed.Count) step(s) failed: " + ($failed -join ', ')) -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Collecting diagnostic information..." -ForegroundColor Cyan

    $diagPath = "$env:TEMP\\rivshield-diag-$(Get-Date -Format 'yyyyMMdd-HHmmss').txt"
    $lines = [System.Collections.Generic.List[string]]::new()

    $lines.Add("RivShield Diagnostic Report")
    $lines.Add("Generated : $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') UTC")
    $lines.Add("OS        : $([System.Environment]::OSVersion.VersionString)")
    $lines.Add("Machine   : $env:COMPUTERNAME")
    $lines.Add("")

    $lines.Add("=== Cleanup Log ===")
    $stepLog | ForEach-Object { $lines.Add($_) }
    $lines.Add("")

    $lines.Add("=== DNS State ===")
    try { Get-DnsClientServerAddress | ForEach-Object { $lines.Add("  $($_.InterfaceAlias): $($_.ServerAddresses -join ', ')") } }
    catch { $lines.Add("  Error: $_") }
    $lines.Add("")

    $lines.Add("=== WFP Filter State ===")
    try {
        $wfpFile = "$env:TEMP\\riv-wfp-$([System.IO.Path]::GetRandomFileName()).xml"
        netsh wfp show filters file=$wfpFile 2>&1 | Out-Null
        if (Test-Path $wfpFile) {
            $raw = Get-Content $wfpFile -Raw
            $rivMatches = [regex]::Matches($raw, '(?i)rivshield')
            if ($rivMatches.Count -gt 0) {
                $lines.Add("  WARNING: $($rivMatches.Count) RivShield reference(s) still found in WFP filter list")
            } else {
                $lines.Add("  OK: No RivShield entries in WFP filter list")
            }
            Remove-Item $wfpFile -EA SilentlyContinue
        }
    } catch { $lines.Add("  Error reading WFP state: $_") }
    $lines.Add("")

    $lines.Add("=== Services ===")
    try {
        $svcs = Get-Service -Name "Rivshield*" -EA SilentlyContinue
        if ($svcs) { $svcs | ForEach-Object { $lines.Add("  $($_.Name): $($_.Status)") } }
        else { $lines.Add("  No RivShield services found (expected after cleanup)") }
    } catch { $lines.Add("  Error: $_") }
    $lines.Add("")

    $lines.Add("=== Application Event Log (last 100 RivShield entries) ===")
    try {
        $events = Get-EventLog -LogName Application -Source "Rivshield*" -Newest 100 -EA SilentlyContinue
        if ($events) {
            $events | ForEach-Object {
                $lines.Add("  [$($_.TimeGenerated)] $($_.EntryType) $($_.Source): $($_.Message -replace '\r?\n',' ')")
            }
        } else { $lines.Add("  No RivShield events found") }
    } catch { $lines.Add("  Error: $_") }

    $lines | Out-File -FilePath $diagPath -Encoding UTF8
    Write-Host ""
    Write-Host "Diagnostic report saved to:" -ForegroundColor Cyan
    Write-Host "  $diagPath" -ForegroundColor White
    Write-Host ""
    Write-Host "Please email that file to $SupportEmail so we can help you." -ForegroundColor Cyan
    Write-Host ""

    try { Invoke-Item (Split-Path $diagPath) } catch {}
}

Read-Host "Press Enter to exit"
`
}
function sl(e) {
    let t = new TextEncoder().encode(e)
      , n = ``;
    return t.forEach(e => {
        n += String.fromCharCode(e)
    }
    ),
    [`@echo off`, `:: RivShield Cleanup Tool`, `:: Right-click this file and select "Run as administrator"`, `::`, `net session >nul 2>&1`, `if %errorlevel% neq 0 (`, `    echo.`, `    echo  This script must be run as Administrator.`, `    echo  Right-click RivShieldFix.bat and select "Run as administrator"`, `    echo.`, `    pause`, `    exit /b 1`, `)`, `set "B64=%TEMP%\\rivshield-b64-%RANDOM%.txt"`, `set "PS=%TEMP%\\rivshield-fix-%RANDOM%.ps1"`, `(`, (btoa(n).match(/.{1,64}/g) ?? []).map(e => `echo ${e}`).join(`\r
`), `) > "%B64%"`, `certutil -decode "%B64%" "%PS%" >nul 2>&1`, `del "%B64%" 2>nul`, `if not exist "%PS%" (`, `    echo Could not prepare the script. Use the manual steps at ${`${window.location.origin}/faq`}`, `    pause`, `    exit /b 1`, `)`, `powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%PS%"`, `del "%PS%" 2>nul`, `exit /b`].join(`\r
`)
}
function cl({email: e}) {
    return (0,
    P.jsxs)(`button`, {
        onClick: () => {
            let t = sl(ol(e))
              , n = new Blob([t],{
                type: `text/plain`
            })
              , r = URL.createObjectURL(n)
              , i = document.createElement(`a`);
            i.href = r,
            i.download = `RivShieldFix.bat`,
            document.body.appendChild(i),
            i.click(),
            document.body.removeChild(i),
            URL.revokeObjectURL(r)
        }
        ,
        className: `inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors`,
        children: [(0,
        P.jsx)(`svg`, {
            className: `w-4 h-4`,
            fill: `none`,
            stroke: `currentColor`,
            viewBox: `0 0 24 24`,
            children: (0,
            P.jsx)(`path`, {
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                strokeWidth: 2,
                d: `M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4`
            })
        }), `Download RivShieldFix.bat`]
    })
}
var ll = `sc.exe stop Rivshield.Watchdog
sc.exe stop Rivshield.Agent`
  , ul = `foreach ($k in 'Rivshield.Agent','Rivshield.Watchdog') {
  $p = "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\$k"
  if (Test-Path $p) {
    $a = Get-Acl $p
    $a.Access | Where-Object { $_.AccessControlType -eq 'Deny' } |
      ForEach-Object { $a.RemoveAccessRule($_) | Out-Null }
    Set-Acl -Path $p -AclObject $a
  }
}`
  , dl = `sc.exe delete Rivshield.Agent
sc.exe delete Rivshield.Watchdog`
  , fl = `Add-Type -TypeDefinition @"
using System; using System.Runtime.InteropServices;
public static class Fwp {
  [DllImport("fwpuclnt.dll")] public static extern uint FwpmEngineOpen0(
    IntPtr serverName, uint authnService, IntPtr authIdentity, IntPtr session, out IntPtr engineHandle);
  [DllImport("fwpuclnt.dll")] public static extern uint FwpmSubLayerDeleteByKey0(
    IntPtr engineHandle, ref Guid key);
  [DllImport("fwpuclnt.dll")] public static extern uint FwpmEngineClose0(IntPtr engineHandle);
}
"@
$g = [Guid]"8b7f4e2a-3c91-4d1a-b2f0-9e6a5d8c7b3f"
$e = [IntPtr]::Zero
[void][Fwp]::FwpmEngineOpen0([IntPtr]::Zero, 10, [IntPtr]::Zero, [IntPtr]::Zero, [ref]$e)
[void][Fwp]::FwpmSubLayerDeleteByKey0($e, [ref]$g)
[void][Fwp]::FwpmEngineClose0($e)`
  , pl = `$bk = "$env:ProgramData\\Rivshield\\dns-backup.json"
if (Test-Path $bk) {
  $entries = Get-Content $bk -Raw | ConvertFrom-Json
  foreach ($entry in $entries) {
    if ($entry.PreviousDns -eq 'dhcp') {
      Set-DnsClientServerAddress -InterfaceAlias $entry.AdapterName -ResetServerAddresses
    } else {
      Set-DnsClientServerAddress -InterfaceAlias $entry.AdapterName -ServerAddresses $entry.PreviousDns
    }
  }
} else {
  Get-NetAdapter | ForEach-Object {
    Set-DnsClientServerAddress -InterfaceAlias $_.Name -ResetServerAddresses
  }
}`
  , ml = `ipconfig /flushdns`
  , hl = `Remove-Item -Recurse -Force "$env:ProgramData\\Rivshield"
Remove-Item -Recurse -Force "$env:ProgramFiles\\RivShield"`
  , gl = `reg delete "HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\{3F2A1C9D-7E84-4B60-A5D3-8F1B2E4C6A7E}_is1" /f`;
function _l() {
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsxs)(`div`, {
            className: `flex-1 w-full max-w-3xl mx-auto px-6 py-12`,
            children: [(0,
            P.jsxs)(`div`, {
                className: `flex items-center gap-2 mb-8`,
                children: [(0,
                P.jsx)(Ks, {
                    size: 28
                }), (0,
                P.jsx)(ui, {
                    to: `/`,
                    className: `text-sm text-blue-600 hover:underline`,
                    children: `← Back to home`
                })]
            }), (0,
            P.jsx)(`h1`, {
                className: `text-3xl font-bold text-gray-900 mb-1`,
                children: `FAQ`
            }), (0,
            P.jsx)(`p`, {
                className: `text-sm text-gray-500 mb-8`,
                children: `Frequently asked questions about RivShield.`
            }), (0,
            P.jsxs)(`details`, {
                className: `rounded-lg border border-gray-200 bg-white overflow-hidden`,
                open: !0,
                children: [(0,
                P.jsxs)(`summary`, {
                    className: `cursor-pointer px-6 py-5 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none flex items-center justify-between gap-2`,
                    children: [(0,
                    P.jsx)(`span`, {
                        children: `My child's device is still blocked after I removed it or uninstalled RivShield. How do I reset it?`
                    }), (0,
                    P.jsx)(`svg`, {
                        className: `w-4 h-4 text-gray-400 shrink-0`,
                        fill: `none`,
                        stroke: `currentColor`,
                        viewBox: `0 0 24 24`,
                        children: (0,
                        P.jsx)(`path`, {
                            strokeLinecap: `round`,
                            strokeLinejoin: `round`,
                            strokeWidth: 2,
                            d: `M19 9l-7 7-7-7`
                        })
                    })]
                }), (0,
                P.jsxs)(`div`, {
                    className: `px-6 pb-8 text-sm text-gray-700 space-y-6 border-t border-gray-100 pt-5`,
                    children: [(0,
                    P.jsxs)(`div`, {
                        className: `rounded-lg bg-blue-50 border border-blue-200 px-5 py-4 space-y-3`,
                        children: [(0,
                        P.jsx)(`p`, {
                            className: `font-semibold text-blue-900`,
                            children: `Automatic fix (recommended)`
                        }), (0,
                        P.jsxs)(`p`, {
                            className: `text-blue-800 text-xs leading-relaxed`,
                            children: [`Download this file and run it on the child's laptop. It handles everything automatically — no PowerShell execution policy changes needed. If any step fails, it saves a diagnostic report to `, (0,
                            P.jsx)(`code`, {
                                className: `bg-blue-100 px-1 rounded`,
                                children: `%TEMP%`
                            }), ` and opens that folder for you.`]
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `flex flex-wrap items-center gap-3`,
                            children: [(0,
                            P.jsx)(cl, {
                                email: qs
                            }), (0,
                            P.jsx)(`span`, {
                                className: `text-xs text-blue-700`,
                                children: `Right-click → Run as administrator`
                            })]
                        }), (0,
                        P.jsxs)(`p`, {
                            className: `text-xs text-blue-700`,
                            children: [`If Windows shows a SmartScreen warning, click `, (0,
                            P.jsx)(`strong`, {
                                children: `More info`
                            }), ` → `, (0,
                            P.jsx)(`strong`, {
                                children: `Run anyway`
                            }), `.`]
                        }), (0,
                        P.jsxs)(`p`, {
                            className: `text-xs text-blue-700`,
                            children: [`If the script can't fix everything, email the generated diagnostic file to `, (0,
                            P.jsx)(`a`, {
                                href: `mailto:${qs}`,
                                className: `underline`,
                                children: qs
                            }), ` and we'll walk you through the remaining steps.`]
                        })]
                    }), (0,
                    P.jsxs)(`div`, {
                        children: [(0,
                        P.jsx)(`p`, {
                            className: `font-medium text-gray-900 mb-2`,
                            children: `This guide covers these symptoms:`
                        }), (0,
                        P.jsxs)(`ul`, {
                            className: `list-disc list-outside pl-5 space-y-1 text-gray-600`,
                            children: [(0,
                            P.jsx)(`li`, {
                                children: `Sites are still blocked after removing the device from the dashboard or uninstalling the app`
                            }), (0,
                            P.jsx)(`li`, {
                                children: `DNS resolution fails entirely after uninstall`
                            }), (0,
                            P.jsx)(`li`, {
                                children: `Can't reinstall — the installer says the service already exists`
                            }), (0,
                            P.jsx)(`li`, {
                                children: `The Watchdog service keeps restarting the Agent when you try to stop it`
                            })]
                        })]
                    }), (0,
                    P.jsxs)(`details`, {
                        className: `rounded-lg border border-gray-200 overflow-hidden`,
                        children: [(0,
                        P.jsxs)(`summary`, {
                            className: `cursor-pointer px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors list-none flex items-center justify-between`,
                            children: [(0,
                            P.jsx)(`span`, {
                                children: `Fix it manually (step-by-step)`
                            }), (0,
                            P.jsx)(`svg`, {
                                className: `w-3.5 h-3.5 text-gray-400`,
                                fill: `none`,
                                stroke: `currentColor`,
                                viewBox: `0 0 24 24`,
                                children: (0,
                                P.jsx)(`path`, {
                                    strokeLinecap: `round`,
                                    strokeLinejoin: `round`,
                                    strokeWidth: 2,
                                    d: `M19 9l-7 7-7-7`
                                })
                            })]
                        }), (0,
                        P.jsxs)(`div`, {
                            className: `px-4 pb-5 pt-4 space-y-5 text-sm text-gray-700 border-t border-gray-200`,
                            children: [(0,
                            P.jsxs)(`div`, {
                                className: `rounded bg-amber-50 border border-amber-200 px-3 py-2 text-amber-800 text-xs`,
                                children: [`All commands must be run in an `, (0,
                                P.jsx)(`strong`, {
                                    children: `elevated (Run as Administrator) PowerShell`
                                }), ` window.`]
                            }), (0,
                            P.jsxs)(`ol`, {
                                className: `list-decimal list-outside pl-5 space-y-5`,
                                children: [(0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Stop the Watchdog first`
                                    }), ` — it will restart the Agent if the Agent is stopped first.`, (0,
                                    P.jsx)(al, {
                                        children: ll
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Remove registry ACLs`
                                    }), ` — the Watchdog locks its service registry keys with Deny permissions.`, (0,
                                    P.jsx)(al, {
                                        children: ul
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Delete the services`
                                    }), (0,
                                    P.jsx)(al, {
                                        children: dl
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Remove WFP kernel filters`
                                    }), ` — the most common cause of "sites still blocked." These filters persist in the Windows kernel across reboots until explicitly deleted.`, (0,
                                    P.jsx)(al, {
                                        children: fl
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Restore DNS on every adapter`
                                    }), (0,
                                    P.jsx)(al, {
                                        children: pl
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Flush the DNS cache`
                                    }), (0,
                                    P.jsx)(al, {
                                        children: ml
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Delete all RivShield data files`
                                    }), (0,
                                    P.jsx)(al, {
                                        children: hl
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Optional: remove the Programs & Features entry`
                                    }), (0,
                                    P.jsx)(al, {
                                        children: gl
                                    })]
                                }), (0,
                                P.jsxs)(`li`, {
                                    children: [(0,
                                    P.jsx)(`span`, {
                                        className: `font-medium`,
                                        children: `Reboot.`
                                    }), ` The filter removal is immediate, but a reboot clears every browser and OS resolver cache.`]
                                })]
                            }), (0,
                            P.jsxs)(`div`, {
                                children: [(0,
                                P.jsx)(`p`, {
                                    className: `font-medium text-gray-900 mb-2`,
                                    children: `Verify it worked:`
                                }), (0,
                                P.jsxs)(`ul`, {
                                    className: `list-disc list-outside pl-5 space-y-1 text-gray-600`,
                                    children: [(0,
                                    P.jsxs)(`li`, {
                                        children: [`Run `, (0,
                                        P.jsx)(`code`, {
                                            className: `bg-gray-100 px-1 rounded`,
                                            children: `Get-DnsClientServerAddress`
                                        }), ` — no adapter should show its own IP as the DNS server`]
                                    }), (0,
                                    P.jsxs)(`li`, {
                                        children: [`Run `, (0,
                                        P.jsx)(`code`, {
                                            className: `bg-gray-100 px-1 rounded`,
                                            children: `nslookup google.com`
                                        }), ` — should resolve normally, not return NXDOMAIN`]
                                    }), (0,
                                    P.jsx)(`li`, {
                                        children: `Browse to a previously-blocked site`
                                    }), (0,
                                    P.jsxs)(`li`, {
                                        children: [`Run `, (0,
                                        P.jsx)(`code`, {
                                            className: `bg-gray-100 px-1 rounded`,
                                            children: `Get-Service Rivshield.Agent`
                                        }), ` — should return an error, not a running service`]
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    P.jsxs)(`div`, {
                        className: `rounded-lg bg-gray-50 border border-gray-200 px-4 py-4 text-xs text-gray-600 space-y-2`,
                        children: [(0,
                        P.jsx)(`p`, {
                            className: `font-medium text-gray-700`,
                            children: `Still stuck after running the script?`
                        }), (0,
                        P.jsxs)(`p`, {
                            children: [`The script saves a diagnostic report to `, (0,
                            P.jsx)(`code`, {
                                className: `bg-gray-100 px-1 rounded`,
                                children: `%TEMP%`
                            }), ` when it can't fix something. Email that file to`, ` `, (0,
                            P.jsx)(`a`, {
                                href: `mailto:${qs}`,
                                className: `text-blue-600 hover:underline`,
                                children: qs
                            }), `. The report includes your current DNS state, WFP filter list, service status, and recent RivShield log entries — enough for us to diagnose exactly what's stuck and tell you how to clear it.`]
                        })]
                    })]
                })]
            }), (0,
            P.jsxs)(`p`, {
                className: `mt-8 text-xs text-gray-500`,
                children: [`Have a question not covered here?`, ` `, (0,
                P.jsx)(`a`, {
                    href: `mailto:${qs}`,
                    className: `text-blue-600 hover:underline`,
                    children: `Contact us`
                }), `.`]
            })]
        }), (0,
        P.jsx)(Zs, {
            variant: `light`
        })]
    })
}
function vl({children: e}) {
    let {isAdmin: t} = $s();
    return localStorage.getItem(`pg_token`) ? t ? (0,
    P.jsx)(P.Fragment, {
        children: e
    }) : (0,
    P.jsx)(mr, {
        to: `/device`,
        replace: !0
    }) : (0,
    P.jsx)(mr, {
        to: `/login`,
        replace: !0
    })
}
function yl() {
    let e = $s()
      , [t,n] = (0,
    N.useState)(!1)
      , [r,i] = (0,
    N.useState)(``);
    if ((e.tosVersion ?? 0) >= 1 && (e.privacyVersion ?? 0) >= 1)
        return (0,
        P.jsx)(hr, {});
    async function a() {
        n(!0),
        i(``);
        try {
            let e = await Cs(1, 1);
            localStorage.setItem(`pg_token`, e.token),
            window.location.reload()
        } catch {
            i(`Something went wrong. Please try again.`)
        } finally {
            n(!1)
        }
    }
    return (0,
    P.jsxs)(`div`, {
        className: `min-h-screen bg-gray-50 flex flex-col`,
        children: [(0,
        P.jsx)(`div`, {
            className: `flex-1 flex items-center justify-center p-4`,
            children: (0,
            P.jsxs)(`div`, {
                className: `bg-white rounded-2xl shadow-sm border border-gray-200 p-8 w-full max-w-md`,
                children: [(0,
                P.jsx)(`div`, {
                    className: `flex justify-center mb-6`,
                    children: (0,
                    P.jsx)(Ks, {
                        size: 48
                    })
                }), (0,
                P.jsx)(`h1`, {
                    className: `text-xl font-semibold text-gray-900 text-center mb-3`,
                    children: `We've updated our Terms`
                }), (0,
                P.jsx)(`p`, {
                    className: `text-sm text-gray-600 text-center leading-relaxed mb-6`,
                    children: `To continue using Rivshield, please review and accept the updated Terms of Service and Privacy Policy.`
                }), (0,
                P.jsxs)(`div`, {
                    className: `flex items-center justify-center gap-5 mb-6 text-sm`,
                    children: [(0,
                    P.jsx)(ui, {
                        to: `/terms`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `text-blue-600 hover:underline`,
                        children: `Terms of Service`
                    }), (0,
                    P.jsx)(`span`, {
                        className: `text-gray-300`,
                        children: `·`
                    }), (0,
                    P.jsx)(ui, {
                        to: `/privacy`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `text-blue-600 hover:underline`,
                        children: `Privacy Policy`
                    })]
                }), r && (0,
                P.jsx)(`p`, {
                    className: `text-sm text-red-600 text-center mb-4`,
                    children: r
                }), (0,
                P.jsx)(`button`, {
                    onClick: a,
                    disabled: t,
                    className: `w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-colors`,
                    children: t ? `Saving…` : `I Agree to the Updated Terms`
                })]
            })
        }), (0,
        P.jsx)(Zs, {})]
    })
}
var bl = new Ze({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 1e4
        }
    }
});
function xl({children: e}) {
    return localStorage.getItem(`pg_token`) ? (0,
    P.jsx)(P.Fragment, {
        children: e
    }) : (0,
    P.jsx)(mr, {
        to: `/login`,
        replace: !0
    })
}
function Sl({children: e}) {
    return localStorage.getItem(`pg_token`) ? (0,
    P.jsx)(mr, {
        to: `/device`,
        replace: !0
    }) : (0,
    P.jsx)(P.Fragment, {
        children: e
    })
}
function Cl() {
    let {deviceId: e} = Wn();
    return (0,
    P.jsx)(mr, {
        to: `/device?device=${e}&view=rules`,
        replace: !0
    })
}
(0,
ki.createRoot)(document.getElementById(`root`)).render((0,
P.jsx)(N.StrictMode, {
    children: (0,
    P.jsx)(nt, {
        client: bl,
        children: (0,
        P.jsx)(si, {
            children: (0,
            P.jsxs)(vr, {
                children: [(0,
                P.jsx)(gr, {
                    path: `/`,
                    element: (0,
                    P.jsx)(Sl, {
                        children: (0,
                        P.jsx)(Zc, {})
                    })
                }), (0,
                P.jsx)(gr, {
                    path: `/login`,
                    element: (0,
                    P.jsx)(Qs, {})
                }), (0,
                P.jsx)(gr, {
                    path: `/terms`,
                    element: (0,
                    P.jsx)(tl, {})
                }), (0,
                P.jsx)(gr, {
                    path: `/privacy`,
                    element: (0,
                    P.jsx)(rl, {})
                }), (0,
                P.jsx)(gr, {
                    path: `/faq`,
                    element: (0,
                    P.jsx)(_l, {})
                }), (0,
                P.jsxs)(gr, {
                    element: (0,
                    P.jsx)(xl, {
                        children: (0,
                        P.jsx)(yl, {})
                    }),
                    children: [(0,
                    P.jsx)(gr, {
                        path: `/device`,
                        element: (0,
                        P.jsx)(Gc, {})
                    }), (0,
                    P.jsx)(gr, {
                        path: `/device/:deviceId`,
                        element: (0,
                        P.jsx)(Kc, {})
                    }), (0,
                    P.jsx)(gr, {
                        path: `/device/:deviceId/policy`,
                        element: (0,
                        P.jsx)(Cl, {})
                    }), (0,
                    P.jsx)(gr, {
                        path: `/admin`,
                        element: (0,
                        P.jsx)(vl, {
                            children: (0,
                            P.jsx)(el, {})
                        })
                    })]
                }), (0,
                P.jsx)(gr, {
                    path: `*`,
                    element: (0,
                    P.jsx)(mr, {
                        to: `/`,
                        replace: !0
                    })
                })]
            })
        })
    })
}));