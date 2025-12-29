(function () {
    const x = document.createElement("link").relList;
    if (x && x.supports && x.supports("modulepreload"))
        return;
    for (const g of document.querySelectorAll('link[rel="modulepreload"]'))
        u(g);
    new MutationObserver(g => {
        for (const z of g)
            if (z.type === "childList")
                for (const D of z.addedNodes)
                    D.tagName === "LINK" && D.rel === "modulepreload" && u(D)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function v(g) {
        const z = {};
        return g.integrity && (z.integrity = g.integrity),
            g.referrerPolicy && (z.referrerPolicy = g.referrerPolicy),
            g.crossOrigin === "use-credentials" ? z.credentials = "include" : g.crossOrigin === "anonymous" ? z.credentials = "omit" : z.credentials = "same-origin",
            z
    }
    function u(g) {
        if (g.ep)
            return;
        g.ep = !0;
        const z = v(g);
        fetch(g.href, z)
    }
}
)();
function J0(d) {
    return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d
}
var yc = {
    exports: {}
}
    , Ss = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O0;
function vx() {
    if (O0)
        return Ss;
    O0 = 1;
    var d = Symbol.for("react.transitional.element")
        , x = Symbol.for("react.fragment");
    function v(u, g, z) {
        var D = null;
        if (z !== void 0 && (D = "" + z),
            g.key !== void 0 && (D = "" + g.key),
            "key" in g) {
            z = {};
            for (var Y in g)
                Y !== "key" && (z[Y] = g[Y])
        } else
            z = g;
        return g = z.ref,
        {
            $$typeof: d,
            type: u,
            key: D,
            ref: g !== void 0 ? g : null,
            props: z
        }
    }
    return Ss.Fragment = x,
        Ss.jsx = v,
        Ss.jsxs = v,
        Ss
}
var U0;
function jx() {
    return U0 || (U0 = 1,
        yc.exports = vx()),
        yc.exports
}
var l = jx()
    , pc = {
        exports: {}
    }
    , Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _0;
function Nx() {
    if (_0)
        return Q;
    _0 = 1;
    var d = Symbol.for("react.transitional.element")
        , x = Symbol.for("react.portal")
        , v = Symbol.for("react.fragment")
        , u = Symbol.for("react.strict_mode")
        , g = Symbol.for("react.profiler")
        , z = Symbol.for("react.consumer")
        , D = Symbol.for("react.context")
        , Y = Symbol.for("react.forward_ref")
        , w = Symbol.for("react.suspense")
        , N = Symbol.for("react.memo")
        , _ = Symbol.for("react.lazy")
        , M = Symbol.for("react.activity")
        , H = Symbol.iterator;
    function ce(f) {
        return f === null || typeof f != "object" ? null : (f = H && f[H] || f["@@iterator"],
            typeof f == "function" ? f : null)
    }
    var Ne = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () { },
        enqueueReplaceState: function () { },
        enqueueSetState: function () { }
    }
        , X = Object.assign
        , be = {};
    function Te(f, A, O) {
        this.props = f,
            this.context = A,
            this.refs = be,
            this.updater = O || Ne
    }
    Te.prototype.isReactComponent = {},
        Te.prototype.setState = function (f, A) {
            if (typeof f != "object" && typeof f != "function" && f != null)
                throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, f, A, "setState")
        }
        ,
        Te.prototype.forceUpdate = function (f) {
            this.updater.enqueueForceUpdate(this, f, "forceUpdate")
        }
        ;
    function Tt() { }
    Tt.prototype = Te.prototype;
    function qe(f, A, O) {
        this.props = f,
            this.context = A,
            this.refs = be,
            this.updater = O || Ne
    }
    var ut = qe.prototype = new Tt;
    ut.constructor = qe,
        X(ut, Te.prototype),
        ut.isPureReactComponent = !0;
    var Et = Array.isArray;
    function Qe() { }
    var ee = {
        H: null,
        A: null,
        T: null,
        S: null
    }
        , Ve = Object.prototype.hasOwnProperty;
    function At(f, A, O) {
        var R = O.ref;
        return {
            $$typeof: d,
            type: f,
            key: A,
            ref: R !== void 0 ? R : null,
            props: O
        }
    }
    function Ka(f, A) {
        return At(f.type, A, f.props)
    }
    function zt(f) {
        return typeof f == "object" && f !== null && f.$$typeof === d
    }
    function Ze(f) {
        var A = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + f.replace(/[=:]/g, function (O) {
            return A[O]
        })
    }
    var Ta = /\/+/g;
    function Ut(f, A) {
        return typeof f == "object" && f !== null && f.key != null ? Ze("" + f.key) : A.toString(36)
    }
    function Nt(f) {
        switch (f.status) {
            case "fulfilled":
                return f.value;
            case "rejected":
                throw f.reason;
            default:
                switch (typeof f.status == "string" ? f.then(Qe, Qe) : (f.status = "pending",
                    f.then(function (A) {
                        f.status === "pending" && (f.status = "fulfilled",
                            f.value = A)
                    }, function (A) {
                        f.status === "pending" && (f.status = "rejected",
                            f.reason = A)
                    })),
                f.status) {
                    case "fulfilled":
                        return f.value;
                    case "rejected":
                        throw f.reason
                }
        }
        throw f
    }
    function S(f, A, O, R, V) {
        var J = typeof f;
        (J === "undefined" || J === "boolean") && (f = null);
        var re = !1;
        if (f === null)
            re = !0;
        else
            switch (J) {
                case "bigint":
                case "string":
                case "number":
                    re = !0;
                    break;
                case "object":
                    switch (f.$$typeof) {
                        case d:
                        case x:
                            re = !0;
                            break;
                        case _:
                            return re = f._init,
                                S(re(f._payload), A, O, R, V)
                    }
            }
        if (re)
            return V = V(f),
                re = R === "" ? "." + Ut(f, 0) : R,
                Et(V) ? (O = "",
                    re != null && (O = re.replace(Ta, "$&/") + "/"),
                    S(V, A, O, "", function (Cl) {
                        return Cl
                    })) : V != null && (zt(V) && (V = Ka(V, O + (V.key == null || f && f.key === V.key ? "" : ("" + V.key).replace(Ta, "$&/") + "/") + re)),
                        A.push(V)),
                1;
        re = 0;
        var Ge = R === "" ? "." : R + ":";
        if (Et(f))
            for (var we = 0; we < f.length; we++)
                R = f[we],
                    J = Ge + Ut(R, we),
                    re += S(R, A, O, J, V);
        else if (we = ce(f),
            typeof we == "function")
            for (f = we.call(f),
                we = 0; !(R = f.next()).done;)
                R = R.value,
                    J = Ge + Ut(R, we++),
                    re += S(R, A, O, J, V);
        else if (J === "object") {
            if (typeof f.then == "function")
                return S(Nt(f), A, O, R, V);
            throw A = String(f),
            Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.")
        }
        return re
    }
    function C(f, A, O) {
        if (f == null)
            return f;
        var R = []
            , V = 0;
        return S(f, R, "", "", function (J) {
            return A.call(O, J, V++)
        }),
            R
    }
    function L(f) {
        if (f._status === -1) {
            var A = f._result;
            A = A(),
                A.then(function (O) {
                    (f._status === 0 || f._status === -1) && (f._status = 1,
                        f._result = O)
                }, function (O) {
                    (f._status === 0 || f._status === -1) && (f._status = 2,
                        f._result = O)
                }),
                f._status === -1 && (f._status = 0,
                    f._result = A)
        }
        if (f._status === 1)
            return f._result.default;
        throw f._result
    }
    var de = typeof reportError == "function" ? reportError : function (f) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var A = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f),
                error: f
            });
            if (!window.dispatchEvent(A))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", f);
            return
        }
        console.error(f)
    }
        , fe = {
            map: C,
            forEach: function (f, A, O) {
                C(f, function () {
                    A.apply(this, arguments)
                }, O)
            },
            count: function (f) {
                var A = 0;
                return C(f, function () {
                    A++
                }),
                    A
            },
            toArray: function (f) {
                return C(f, function (A) {
                    return A
                }) || []
            },
            only: function (f) {
                if (!zt(f))
                    throw Error("React.Children.only expected to receive a single React element child.");
                return f
            }
        };
    return Q.Activity = M,
        Q.Children = fe,
        Q.Component = Te,
        Q.Fragment = v,
        Q.Profiler = g,
        Q.PureComponent = qe,
        Q.StrictMode = u,
        Q.Suspense = w,
        Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee,
        Q.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function (f) {
                return ee.H.useMemoCache(f)
            }
        },
        Q.cache = function (f) {
            return function () {
                return f.apply(null, arguments)
            }
        }
        ,
        Q.cacheSignal = function () {
            return null
        }
        ,
        Q.cloneElement = function (f, A, O) {
            if (f == null)
                throw Error("The argument must be a React element, but you passed " + f + ".");
            var R = X({}, f.props)
                , V = f.key;
            if (A != null)
                for (J in A.key !== void 0 && (V = "" + A.key),
                    A)
                    !Ve.call(A, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && A.ref === void 0 || (R[J] = A[J]);
            var J = arguments.length - 2;
            if (J === 1)
                R.children = O;
            else if (1 < J) {
                for (var re = Array(J), Ge = 0; Ge < J; Ge++)
                    re[Ge] = arguments[Ge + 2];
                R.children = re
            }
            return At(f.type, V, R)
        }
        ,
        Q.createContext = function (f) {
            return f = {
                $$typeof: D,
                _currentValue: f,
                _currentValue2: f,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            },
                f.Provider = f,
                f.Consumer = {
                    $$typeof: z,
                    _context: f
                },
                f
        }
        ,
        Q.createElement = function (f, A, O) {
            var R, V = {}, J = null;
            if (A != null)
                for (R in A.key !== void 0 && (J = "" + A.key),
                    A)
                    Ve.call(A, R) && R !== "key" && R !== "__self" && R !== "__source" && (V[R] = A[R]);
            var re = arguments.length - 2;
            if (re === 1)
                V.children = O;
            else if (1 < re) {
                for (var Ge = Array(re), we = 0; we < re; we++)
                    Ge[we] = arguments[we + 2];
                V.children = Ge
            }
            if (f && f.defaultProps)
                for (R in re = f.defaultProps,
                    re)
                    V[R] === void 0 && (V[R] = re[R]);
            return At(f, J, V)
        }
        ,
        Q.createRef = function () {
            return {
                current: null
            }
        }
        ,
        Q.forwardRef = function (f) {
            return {
                $$typeof: Y,
                render: f
            }
        }
        ,
        Q.isValidElement = zt,
        Q.lazy = function (f) {
            return {
                $$typeof: _,
                _payload: {
                    _status: -1,
                    _result: f
                },
                _init: L
            }
        }
        ,
        Q.memo = function (f, A) {
            return {
                $$typeof: N,
                type: f,
                compare: A === void 0 ? null : A
            }
        }
        ,
        Q.startTransition = function (f) {
            var A = ee.T
                , O = {};
            ee.T = O;
            try {
                var R = f()
                    , V = ee.S;
                V !== null && V(O, R),
                    typeof R == "object" && R !== null && typeof R.then == "function" && R.then(Qe, de)
            } catch (J) {
                de(J)
            } finally {
                A !== null && O.types !== null && (A.types = O.types),
                    ee.T = A
            }
        }
        ,
        Q.unstable_useCacheRefresh = function () {
            return ee.H.useCacheRefresh()
        }
        ,
        Q.use = function (f) {
            return ee.H.use(f)
        }
        ,
        Q.useActionState = function (f, A, O) {
            return ee.H.useActionState(f, A, O)
        }
        ,
        Q.useCallback = function (f, A) {
            return ee.H.useCallback(f, A)
        }
        ,
        Q.useContext = function (f) {
            return ee.H.useContext(f)
        }
        ,
        Q.useDebugValue = function () { }
        ,
        Q.useDeferredValue = function (f, A) {
            return ee.H.useDeferredValue(f, A)
        }
        ,
        Q.useEffect = function (f, A) {
            return ee.H.useEffect(f, A)
        }
        ,
        Q.useEffectEvent = function (f) {
            return ee.H.useEffectEvent(f)
        }
        ,
        Q.useId = function () {
            return ee.H.useId()
        }
        ,
        Q.useImperativeHandle = function (f, A, O) {
            return ee.H.useImperativeHandle(f, A, O)
        }
        ,
        Q.useInsertionEffect = function (f, A) {
            return ee.H.useInsertionEffect(f, A)
        }
        ,
        Q.useLayoutEffect = function (f, A) {
            return ee.H.useLayoutEffect(f, A)
        }
        ,
        Q.useMemo = function (f, A) {
            return ee.H.useMemo(f, A)
        }
        ,
        Q.useOptimistic = function (f, A) {
            return ee.H.useOptimistic(f, A)
        }
        ,
        Q.useReducer = function (f, A, O) {
            return ee.H.useReducer(f, A, O)
        }
        ,
        Q.useRef = function (f) {
            return ee.H.useRef(f)
        }
        ,
        Q.useState = function (f) {
            return ee.H.useState(f)
        }
        ,
        Q.useSyncExternalStore = function (f, A, O) {
            return ee.H.useSyncExternalStore(f, A, O)
        }
        ,
        Q.useTransition = function () {
            return ee.H.useTransition()
        }
        ,
        Q.version = "19.2.0",
        Q
}
var R0;
function Mc() {
    return R0 || (R0 = 1,
        pc.exports = Nx()),
        pc.exports
}
var W = Mc();
const zs = J0(W);
var vc = {
    exports: {}
}
    , Ts = {}
    , jc = {
        exports: {}
    }
    , Nc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B0;
function wx() {
    return B0 || (B0 = 1,
        (function (d) {
            function x(S, C) {
                var L = S.length;
                S.push(C);
                e: for (; 0 < L;) {
                    var de = L - 1 >>> 1
                        , fe = S[de];
                    if (0 < g(fe, C))
                        S[de] = C,
                            S[L] = fe,
                            L = de;
                    else
                        break e
                }
            }
            function v(S) {
                return S.length === 0 ? null : S[0]
            }
            function u(S) {
                if (S.length === 0)
                    return null;
                var C = S[0]
                    , L = S.pop();
                if (L !== C) {
                    S[0] = L;
                    e: for (var de = 0, fe = S.length, f = fe >>> 1; de < f;) {
                        var A = 2 * (de + 1) - 1
                            , O = S[A]
                            , R = A + 1
                            , V = S[R];
                        if (0 > g(O, L))
                            R < fe && 0 > g(V, O) ? (S[de] = V,
                                S[R] = L,
                                de = R) : (S[de] = O,
                                    S[A] = L,
                                    de = A);
                        else if (R < fe && 0 > g(V, L))
                            S[de] = V,
                                S[R] = L,
                                de = R;
                        else
                            break e
                    }
                }
                return C
            }
            function g(S, C) {
                var L = S.sortIndex - C.sortIndex;
                return L !== 0 ? L : S.id - C.id
            }
            if (d.unstable_now = void 0,
                typeof performance == "object" && typeof performance.now == "function") {
                var z = performance;
                d.unstable_now = function () {
                    return z.now()
                }
            } else {
                var D = Date
                    , Y = D.now();
                d.unstable_now = function () {
                    return D.now() - Y
                }
            }
            var w = []
                , N = []
                , _ = 1
                , M = null
                , H = 3
                , ce = !1
                , Ne = !1
                , X = !1
                , be = !1
                , Te = typeof setTimeout == "function" ? setTimeout : null
                , Tt = typeof clearTimeout == "function" ? clearTimeout : null
                , qe = typeof setImmediate < "u" ? setImmediate : null;
            function ut(S) {
                for (var C = v(N); C !== null;) {
                    if (C.callback === null)
                        u(N);
                    else if (C.startTime <= S)
                        u(N),
                            C.sortIndex = C.expirationTime,
                            x(w, C);
                    else
                        break;
                    C = v(N)
                }
            }
            function Et(S) {
                if (X = !1,
                    ut(S),
                    !Ne)
                    if (v(w) !== null)
                        Ne = !0,
                            Qe || (Qe = !0,
                                Ze());
                    else {
                        var C = v(N);
                        C !== null && Nt(Et, C.startTime - S)
                    }
            }
            var Qe = !1
                , ee = -1
                , Ve = 5
                , At = -1;
            function Ka() {
                return be ? !0 : !(d.unstable_now() - At < Ve)
            }
            function zt() {
                if (be = !1,
                    Qe) {
                    var S = d.unstable_now();
                    At = S;
                    var C = !0;
                    try {
                        e: {
                            Ne = !1,
                                X && (X = !1,
                                    Tt(ee),
                                    ee = -1),
                                ce = !0;
                            var L = H;
                            try {
                                t: {
                                    for (ut(S),
                                        M = v(w); M !== null && !(M.expirationTime > S && Ka());) {
                                        var de = M.callback;
                                        if (typeof de == "function") {
                                            M.callback = null,
                                                H = M.priorityLevel;
                                            var fe = de(M.expirationTime <= S);
                                            if (S = d.unstable_now(),
                                                typeof fe == "function") {
                                                M.callback = fe,
                                                    ut(S),
                                                    C = !0;
                                                break t
                                            }
                                            M === v(w) && u(w),
                                                ut(S)
                                        } else
                                            u(w);
                                        M = v(w)
                                    }
                                    if (M !== null)
                                        C = !0;
                                    else {
                                        var f = v(N);
                                        f !== null && Nt(Et, f.startTime - S),
                                            C = !1
                                    }
                                }
                                break e
                            } finally {
                                M = null,
                                    H = L,
                                    ce = !1
                            }
                            C = void 0
                        }
                    } finally {
                        C ? Ze() : Qe = !1
                    }
                }
            }
            var Ze;
            if (typeof qe == "function")
                Ze = function () {
                    qe(zt)
                }
                    ;
            else if (typeof MessageChannel < "u") {
                var Ta = new MessageChannel
                    , Ut = Ta.port2;
                Ta.port1.onmessage = zt,
                    Ze = function () {
                        Ut.postMessage(null)
                    }
            } else
                Ze = function () {
                    Te(zt, 0)
                }
                    ;
            function Nt(S, C) {
                ee = Te(function () {
                    S(d.unstable_now())
                }, C)
            }
            d.unstable_IdlePriority = 5,
                d.unstable_ImmediatePriority = 1,
                d.unstable_LowPriority = 4,
                d.unstable_NormalPriority = 3,
                d.unstable_Profiling = null,
                d.unstable_UserBlockingPriority = 2,
                d.unstable_cancelCallback = function (S) {
                    S.callback = null
                }
                ,
                d.unstable_forceFrameRate = function (S) {
                    0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ve = 0 < S ? Math.floor(1e3 / S) : 5
                }
                ,
                d.unstable_getCurrentPriorityLevel = function () {
                    return H
                }
                ,
                d.unstable_next = function (S) {
                    switch (H) {
                        case 1:
                        case 2:
                        case 3:
                            var C = 3;
                            break;
                        default:
                            C = H
                    }
                    var L = H;
                    H = C;
                    try {
                        return S()
                    } finally {
                        H = L
                    }
                }
                ,
                d.unstable_requestPaint = function () {
                    be = !0
                }
                ,
                d.unstable_runWithPriority = function (S, C) {
                    switch (S) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            S = 3
                    }
                    var L = H;
                    H = S;
                    try {
                        return C()
                    } finally {
                        H = L
                    }
                }
                ,
                d.unstable_scheduleCallback = function (S, C, L) {
                    var de = d.unstable_now();
                    switch (typeof L == "object" && L !== null ? (L = L.delay,
                        L = typeof L == "number" && 0 < L ? de + L : de) : L = de,
                    S) {
                        case 1:
                            var fe = -1;
                            break;
                        case 2:
                            fe = 250;
                            break;
                        case 5:
                            fe = 1073741823;
                            break;
                        case 4:
                            fe = 1e4;
                            break;
                        default:
                            fe = 5e3
                    }
                    return fe = L + fe,
                        S = {
                            id: _++,
                            callback: C,
                            priorityLevel: S,
                            startTime: L,
                            expirationTime: fe,
                            sortIndex: -1
                        },
                        L > de ? (S.sortIndex = L,
                            x(N, S),
                            v(w) === null && S === v(N) && (X ? (Tt(ee),
                                ee = -1) : X = !0,
                                Nt(Et, L - de))) : (S.sortIndex = fe,
                                    x(w, S),
                                    Ne || ce || (Ne = !0,
                                        Qe || (Qe = !0,
                                            Ze()))),
                        S
                }
                ,
                d.unstable_shouldYield = Ka,
                d.unstable_wrapCallback = function (S) {
                    var C = H;
                    return function () {
                        var L = H;
                        H = C;
                        try {
                            return S.apply(this, arguments)
                        } finally {
                            H = L
                        }
                    }
                }
        }
        )(Nc)),
        Nc
}
var H0;
function kx() {
    return H0 || (H0 = 1,
        jc.exports = wx()),
        jc.exports
}
var wc = {
    exports: {}
}
    , Ye = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q0;
function Sx() {
    if (q0)
        return Ye;
    q0 = 1;
    var d = Mc();
    function x(w) {
        var N = "https://react.dev/errors/" + w;
        if (1 < arguments.length) {
            N += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var _ = 2; _ < arguments.length; _++)
                N += "&args[]=" + encodeURIComponent(arguments[_])
        }
        return "Minified React error #" + w + "; visit " + N + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function v() { }
    var u = {
        d: {
            f: v,
            r: function () {
                throw Error(x(522))
            },
            D: v,
            C: v,
            L: v,
            m: v,
            X: v,
            S: v,
            M: v
        },
        p: 0,
        findDOMNode: null
    }
        , g = Symbol.for("react.portal");
    function z(w, N, _) {
        var M = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: g,
            key: M == null ? null : "" + M,
            children: w,
            containerInfo: N,
            implementation: _
        }
    }
    var D = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Y(w, N) {
        if (w === "font")
            return "";
        if (typeof N == "string")
            return N === "use-credentials" ? N : ""
    }
    return Ye.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u,
        Ye.createPortal = function (w, N) {
            var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!N || N.nodeType !== 1 && N.nodeType !== 9 && N.nodeType !== 11)
                throw Error(x(299));
            return z(w, N, null, _)
        }
        ,
        Ye.flushSync = function (w) {
            var N = D.T
                , _ = u.p;
            try {
                if (D.T = null,
                    u.p = 2,
                    w)
                    return w()
            } finally {
                D.T = N,
                    u.p = _,
                    u.d.f()
            }
        }
        ,
        Ye.preconnect = function (w, N) {
            typeof w == "string" && (N ? (N = N.crossOrigin,
                N = typeof N == "string" ? N === "use-credentials" ? N : "" : void 0) : N = null,
                u.d.C(w, N))
        }
        ,
        Ye.prefetchDNS = function (w) {
            typeof w == "string" && u.d.D(w)
        }
        ,
        Ye.preinit = function (w, N) {
            if (typeof w == "string" && N && typeof N.as == "string") {
                var _ = N.as
                    , M = Y(_, N.crossOrigin)
                    , H = typeof N.integrity == "string" ? N.integrity : void 0
                    , ce = typeof N.fetchPriority == "string" ? N.fetchPriority : void 0;
                _ === "style" ? u.d.S(w, typeof N.precedence == "string" ? N.precedence : void 0, {
                    crossOrigin: M,
                    integrity: H,
                    fetchPriority: ce
                }) : _ === "script" && u.d.X(w, {
                    crossOrigin: M,
                    integrity: H,
                    fetchPriority: ce,
                    nonce: typeof N.nonce == "string" ? N.nonce : void 0
                })
            }
        }
        ,
        Ye.preinitModule = function (w, N) {
            if (typeof w == "string")
                if (typeof N == "object" && N !== null) {
                    if (N.as == null || N.as === "script") {
                        var _ = Y(N.as, N.crossOrigin);
                        u.d.M(w, {
                            crossOrigin: _,
                            integrity: typeof N.integrity == "string" ? N.integrity : void 0,
                            nonce: typeof N.nonce == "string" ? N.nonce : void 0
                        })
                    }
                } else
                    N == null && u.d.M(w)
        }
        ,
        Ye.preload = function (w, N) {
            if (typeof w == "string" && typeof N == "object" && N !== null && typeof N.as == "string") {
                var _ = N.as
                    , M = Y(_, N.crossOrigin);
                u.d.L(w, _, {
                    crossOrigin: M,
                    integrity: typeof N.integrity == "string" ? N.integrity : void 0,
                    nonce: typeof N.nonce == "string" ? N.nonce : void 0,
                    type: typeof N.type == "string" ? N.type : void 0,
                    fetchPriority: typeof N.fetchPriority == "string" ? N.fetchPriority : void 0,
                    referrerPolicy: typeof N.referrerPolicy == "string" ? N.referrerPolicy : void 0,
                    imageSrcSet: typeof N.imageSrcSet == "string" ? N.imageSrcSet : void 0,
                    imageSizes: typeof N.imageSizes == "string" ? N.imageSizes : void 0,
                    media: typeof N.media == "string" ? N.media : void 0
                })
            }
        }
        ,
        Ye.preloadModule = function (w, N) {
            if (typeof w == "string")
                if (N) {
                    var _ = Y(N.as, N.crossOrigin);
                    u.d.m(w, {
                        as: typeof N.as == "string" && N.as !== "script" ? N.as : void 0,
                        crossOrigin: _,
                        integrity: typeof N.integrity == "string" ? N.integrity : void 0
                    })
                } else
                    u.d.m(w)
        }
        ,
        Ye.requestFormReset = function (w) {
            u.d.r(w)
        }
        ,
        Ye.unstable_batchedUpdates = function (w, N) {
            return w(N)
        }
        ,
        Ye.useFormState = function (w, N, _) {
            return D.H.useFormState(w, N, _)
        }
        ,
        Ye.useFormStatus = function () {
            return D.H.useHostTransitionStatus()
        }
        ,
        Ye.version = "19.2.0",
        Ye
}
var Y0;
function Tx() {
    if (Y0)
        return wc.exports;
    Y0 = 1;
    function d() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)
            } catch (x) {
                console.error(x)
            }
    }
    return d(),
        wc.exports = Sx(),
        wc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G0;
function Ex() {
    if (G0)
        return Ts;
    G0 = 1;
    var d = kx()
        , x = Mc()
        , v = Tx();
    function u(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                t += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function g(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function z(e) {
        var t = e
            , a = e;
        if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do
                t = e,
                    (t.flags & 4098) !== 0 && (a = t.return),
                    e = t.return;
            while (e)
        }
        return t.tag === 3 ? a : null
    }
    function D(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
                e !== null && (t = e.memoizedState)),
                t !== null)
                return t.dehydrated
        }
        return null
    }
    function Y(e) {
        if (e.tag === 31) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
                e !== null && (t = e.memoizedState)),
                t !== null)
                return t.dehydrated
        }
        return null
    }
    function w(e) {
        if (z(e) !== e)
            throw Error(u(188))
    }
    function N(e) {
        var t = e.alternate;
        if (!t) {
            if (t = z(e),
                t === null)
                throw Error(u(188));
            return t !== e ? null : e
        }
        for (var a = e, s = t; ;) {
            var r = a.return;
            if (r === null)
                break;
            var i = r.alternate;
            if (i === null) {
                if (s = r.return,
                    s !== null) {
                    a = s;
                    continue
                }
                break
            }
            if (r.child === i.child) {
                for (i = r.child; i;) {
                    if (i === a)
                        return w(r),
                            e;
                    if (i === s)
                        return w(r),
                            t;
                    i = i.sibling
                }
                throw Error(u(188))
            }
            if (a.return !== s.return)
                a = r,
                    s = i;
            else {
                for (var n = !1, c = r.child; c;) {
                    if (c === a) {
                        n = !0,
                            a = r,
                            s = i;
                        break
                    }
                    if (c === s) {
                        n = !0,
                            s = r,
                            a = i;
                        break
                    }
                    c = c.sibling
                }
                if (!n) {
                    for (c = i.child; c;) {
                        if (c === a) {
                            n = !0,
                                a = i,
                                s = r;
                            break
                        }
                        if (c === s) {
                            n = !0,
                                s = i,
                                a = r;
                            break
                        }
                        c = c.sibling
                    }
                    if (!n)
                        throw Error(u(189))
                }
            }
            if (a.alternate !== s)
                throw Error(u(190))
        }
        if (a.tag !== 3)
            throw Error(u(188));
        return a.stateNode.current === a ? e : t
    }
    function _(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null;) {
            if (t = _(e),
                t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var M = Object.assign
        , H = Symbol.for("react.element")
        , ce = Symbol.for("react.transitional.element")
        , Ne = Symbol.for("react.portal")
        , X = Symbol.for("react.fragment")
        , be = Symbol.for("react.strict_mode")
        , Te = Symbol.for("react.profiler")
        , Tt = Symbol.for("react.consumer")
        , qe = Symbol.for("react.context")
        , ut = Symbol.for("react.forward_ref")
        , Et = Symbol.for("react.suspense")
        , Qe = Symbol.for("react.suspense_list")
        , ee = Symbol.for("react.memo")
        , Ve = Symbol.for("react.lazy")
        , At = Symbol.for("react.activity")
        , Ka = Symbol.for("react.memo_cache_sentinel")
        , zt = Symbol.iterator;
    function Ze(e) {
        return e === null || typeof e != "object" ? null : (e = zt && e[zt] || e["@@iterator"],
            typeof e == "function" ? e : null)
    }
    var Ta = Symbol.for("react.client.reference");
    function Ut(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === Ta ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
            case X:
                return "Fragment";
            case Te:
                return "Profiler";
            case be:
                return "StrictMode";
            case Et:
                return "Suspense";
            case Qe:
                return "SuspenseList";
            case At:
                return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
                case Ne:
                    return "Portal";
                case qe:
                    return e.displayName || "Context";
                case Tt:
                    return (e._context.displayName || "Context") + ".Consumer";
                case ut:
                    var t = e.render;
                    return e = e.displayName,
                        e || (e = t.displayName || t.name || "",
                            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                        e;
                case ee:
                    return t = e.displayName || null,
                        t !== null ? t : Ut(e.type) || "Memo";
                case Ve:
                    t = e._payload,
                        e = e._init;
                    try {
                        return Ut(e(t))
                    } catch { }
            }
        return null
    }
    var Nt = Array.isArray
        , S = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
        , C = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
        , L = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }
        , de = []
        , fe = -1;
    function f(e) {
        return {
            current: e
        }
    }
    function A(e) {
        0 > fe || (e.current = de[fe],
            de[fe] = null,
            fe--)
    }
    function O(e, t) {
        fe++,
            de[fe] = e.current,
            e.current = t
    }
    var R = f(null)
        , V = f(null)
        , J = f(null)
        , re = f(null);
    function Ge(e, t) {
        switch (O(J, t),
        O(V, e),
        O(R, null),
        t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? a0(e) : 0;
                break;
            default:
                if (e = t.tagName,
                    t = t.namespaceURI)
                    t = a0(t),
                        e = l0(t, e);
                else
                    switch (e) {
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0
                    }
        }
        A(R),
            O(R, e)
    }
    function we() {
        A(R),
            A(V),
            A(J)
    }
    function Cl(e) {
        e.memoizedState !== null && O(re, e);
        var t = R.current
            , a = l0(t, e.type);
        t !== a && (O(V, e),
            O(R, a))
    }
    function Ms(e) {
        V.current === e && (A(R),
            A(V)),
            re.current === e && (A(re),
                js._currentValue = L)
    }
    var Pr, Dc;
    function Ea(e) {
        if (Pr === void 0)
            try {
                throw Error()
            } catch (a) {
                var t = a.stack.trim().match(/\n( *(at )?)/);
                Pr = t && t[1] || "",
                    Dc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Pr + e + Dc
    }
    var ei = !1;
    function ti(e, t) {
        if (!e || ei)
            return "";
        ei = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var E = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(E.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }),
                                typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(E, [])
                                } catch (j) {
                                    var p = j
                                }
                                Reflect.construct(e, [], E)
                            } else {
                                try {
                                    E.call()
                                } catch (j) {
                                    p = j
                                }
                                e.call(E.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (j) {
                                p = j
                            }
                            (E = e()) && typeof E.catch == "function" && E.catch(function () { })
                        }
                    } catch (j) {
                        if (j && p && typeof j.stack == "string")
                            return [j.stack, p.stack]
                    }
                    return [null, null]
                }
            };
            s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var r = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
            r && r.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var i = s.DetermineComponentFrameRoot()
                , n = i[0]
                , c = i[1];
            if (n && c) {
                var o = n.split(`
`)
                    , y = c.split(`
`);
                for (r = s = 0; s < o.length && !o[s].includes("DetermineComponentFrameRoot");)
                    s++;
                for (; r < y.length && !y[r].includes("DetermineComponentFrameRoot");)
                    r++;
                if (s === o.length || r === y.length)
                    for (s = o.length - 1,
                        r = y.length - 1; 1 <= s && 0 <= r && o[s] !== y[r];)
                        r--;
                for (; 1 <= s && 0 <= r; s--,
                    r--)
                    if (o[s] !== y[r]) {
                        if (s !== 1 || r !== 1)
                            do
                                if (s--,
                                    r--,
                                    0 > r || o[s] !== y[r]) {
                                    var k = `
` + o[s].replace(" at new ", " at ");
                                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)),
                                        k
                                }
                            while (1 <= s && 0 <= r);
                        break
                    }
            }
        } finally {
            ei = !1,
                Error.prepareStackTrace = a
        }
        return (a = e ? e.displayName || e.name : "") ? Ea(a) : ""
    }
    function $0(e, t) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Ea(e.type);
            case 16:
                return Ea("Lazy");
            case 13:
                return e.child !== t && t !== null ? Ea("Suspense Fallback") : Ea("Suspense");
            case 19:
                return Ea("SuspenseList");
            case 0:
            case 15:
                return ti(e.type, !1);
            case 11:
                return ti(e.type.render, !1);
            case 1:
                return ti(e.type, !0);
            case 31:
                return Ea("Activity");
            default:
                return ""
        }
    }
    function Cc(e) {
        try {
            var t = ""
                , a = null;
            do
                t += $0(e, a),
                    a = e,
                    e = e.return;
            while (e);
            return t
        } catch (s) {
            return `
Error generating stack: ` + s.message + `
` + s.stack
        }
    }
    var ai = Object.prototype.hasOwnProperty
        , li = d.unstable_scheduleCallback
        , si = d.unstable_cancelCallback
        , W0 = d.unstable_shouldYield
        , I0 = d.unstable_requestPaint
        , et = d.unstable_now
        , P0 = d.unstable_getCurrentPriorityLevel
        , Oc = d.unstable_ImmediatePriority
        , Uc = d.unstable_UserBlockingPriority
        , Ds = d.unstable_NormalPriority
        , em = d.unstable_LowPriority
        , _c = d.unstable_IdlePriority
        , tm = d.log
        , am = d.unstable_setDisableYieldValue
        , Ol = null
        , tt = null;
    function ea(e) {
        if (typeof tm == "function" && am(e),
            tt && typeof tt.setStrictMode == "function")
            try {
                tt.setStrictMode(Ol, e)
            } catch { }
    }
    var at = Math.clz32 ? Math.clz32 : rm
        , lm = Math.log
        , sm = Math.LN2;
    function rm(e) {
        return e >>>= 0,
            e === 0 ? 32 : 31 - (lm(e) / sm | 0) | 0
    }
    var Cs = 256
        , Os = 262144
        , Us = 4194304;
    function Aa(e) {
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
    function _s(e, t, a) {
        var s = e.pendingLanes;
        if (s === 0)
            return 0;
        var r = 0
            , i = e.suspendedLanes
            , n = e.pingedLanes;
        e = e.warmLanes;
        var c = s & 134217727;
        return c !== 0 ? (s = c & ~i,
            s !== 0 ? r = Aa(s) : (n &= c,
                n !== 0 ? r = Aa(n) : a || (a = c & ~e,
                    a !== 0 && (r = Aa(a))))) : (c = s & ~i,
                        c !== 0 ? r = Aa(c) : n !== 0 ? r = Aa(n) : a || (a = s & ~e,
                            a !== 0 && (r = Aa(a)))),
            r === 0 ? 0 : t !== 0 && t !== r && (t & i) === 0 && (i = r & -r,
                a = t & -t,
                i >= a || i === 32 && (a & 4194048) !== 0) ? t : r
    }
    function Ul(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function im(e, t) {
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
    function Rc() {
        var e = Us;
        return Us <<= 1,
            (Us & 62914560) === 0 && (Us = 4194304),
            e
    }
    function ri(e) {
        for (var t = [], a = 0; 31 > a; a++)
            t.push(e);
        return t
    }
    function _l(e, t) {
        e.pendingLanes |= t,
            t !== 268435456 && (e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.warmLanes = 0)
    }
    function nm(e, t, a, s, r, i) {
        var n = e.pendingLanes;
        e.pendingLanes = a,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0,
            e.expiredLanes &= a,
            e.entangledLanes &= a,
            e.errorRecoveryDisabledLanes &= a,
            e.shellSuspendCounter = 0;
        var c = e.entanglements
            , o = e.expirationTimes
            , y = e.hiddenUpdates;
        for (a = n & ~a; 0 < a;) {
            var k = 31 - at(a)
                , E = 1 << k;
            c[k] = 0,
                o[k] = -1;
            var p = y[k];
            if (p !== null)
                for (y[k] = null,
                    k = 0; k < p.length; k++) {
                    var j = p[k];
                    j !== null && (j.lane &= -536870913)
                }
            a &= ~E
        }
        s !== 0 && Bc(e, s, 0),
            i !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(n & ~t))
    }
    function Bc(e, t, a) {
        e.pendingLanes |= t,
            e.suspendedLanes &= ~t;
        var s = 31 - at(t);
        e.entangledLanes |= t,
            e.entanglements[s] = e.entanglements[s] | 1073741824 | a & 261930
    }
    function Hc(e, t) {
        var a = e.entangledLanes |= t;
        for (e = e.entanglements; a;) {
            var s = 31 - at(a)
                , r = 1 << s;
            r & t | e[s] & t && (e[s] |= t),
                a &= ~r
        }
    }
    function qc(e, t) {
        var a = t & -t;
        return a = (a & 42) !== 0 ? 1 : ii(a),
            (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    }
    function ii(e) {
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
    function ni(e) {
        return e &= -e,
            2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Yc() {
        var e = C.p;
        return e !== 0 ? e : (e = window.event,
            e === void 0 ? 32 : T0(e.type))
    }
    function Gc(e, t) {
        var a = C.p;
        try {
            return C.p = e,
                t()
        } finally {
            C.p = a
        }
    }
    var ta = Math.random().toString(36).slice(2)
        , Ue = "__reactFiber$" + ta
        , Ke = "__reactProps$" + ta
        , Ja = "__reactContainer$" + ta
        , ci = "__reactEvents$" + ta
        , cm = "__reactListeners$" + ta
        , dm = "__reactHandles$" + ta
        , Lc = "__reactResources$" + ta
        , Rl = "__reactMarker$" + ta;
    function di(e) {
        delete e[Ue],
            delete e[Ke],
            delete e[ci],
            delete e[cm],
            delete e[dm]
    }
    function Fa(e) {
        var t = e[Ue];
        if (t)
            return t;
        for (var a = e.parentNode; a;) {
            if (t = a[Ja] || a[Ue]) {
                if (a = t.alternate,
                    t.child !== null || a !== null && a.child !== null)
                    for (e = u0(e); e !== null;) {
                        if (a = e[Ue])
                            return a;
                        e = u0(e)
                    }
                return t
            }
            e = a,
                a = e.parentNode
        }
        return null
    }
    function $a(e) {
        if (e = e[Ue] || e[Ja]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function Bl(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(u(33))
    }
    function Wa(e) {
        var t = e[Lc];
        return t || (t = e[Lc] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
            t
    }
    function Ce(e) {
        e[Rl] = !0
    }
    var Xc = new Set
        , Qc = {};
    function za(e, t) {
        Ia(e, t),
            Ia(e + "Capture", t)
    }
    function Ia(e, t) {
        for (Qc[e] = t,
            e = 0; e < t.length; e++)
            Xc.add(t[e])
    }
    var um = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
        , Vc = {}
        , Zc = {};
    function om(e) {
        return ai.call(Zc, e) ? !0 : ai.call(Vc, e) ? !1 : um.test(e) ? Zc[e] = !0 : (Vc[e] = !0,
            !1)
    }
    function Rs(e, t, a) {
        if (om(t))
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var s = t.toLowerCase().slice(0, 5);
                        if (s !== "data-" && s !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + a)
            }
    }
    function Bs(e, t, a) {
        if (a === null)
            e.removeAttribute(t);
        else {
            switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + a)
        }
    }
    function _t(e, t, a, s) {
        if (s === null)
            e.removeAttribute(a);
        else {
            switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(a);
                    return
            }
            e.setAttributeNS(t, a, "" + s)
        }
    }
    function ot(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }
    function Kc(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function mm(e, t, a) {
        var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (!e.hasOwnProperty(t) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var r = s.get
                , i = s.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return r.call(this)
                },
                set: function (n) {
                    a = "" + n,
                        i.call(this, n)
                }
            }),
                Object.defineProperty(e, t, {
                    enumerable: s.enumerable
                }),
            {
                getValue: function () {
                    return a
                },
                setValue: function (n) {
                    a = "" + n
                },
                stopTracking: function () {
                    e._valueTracker = null,
                        delete e[t]
                }
            }
        }
    }
    function ui(e) {
        if (!e._valueTracker) {
            var t = Kc(e) ? "checked" : "value";
            e._valueTracker = mm(e, t, "" + e[t])
        }
    }
    function Jc(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var a = t.getValue()
            , s = "";
        return e && (s = Kc(e) ? e.checked ? "true" : "false" : e.value),
            e = s,
            e !== a ? (t.setValue(e),
                !0) : !1
    }
    function Hs(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
            typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var fm = /[\n"\\]/g;
    function mt(e) {
        return e.replace(fm, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function oi(e, t, a, s, r, i, n, c) {
        e.name = "",
            n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" ? e.type = n : e.removeAttribute("type"),
            t != null ? n === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ot(t)) : e.value !== "" + ot(t) && (e.value = "" + ot(t)) : n !== "submit" && n !== "reset" || e.removeAttribute("value"),
            t != null ? mi(e, n, ot(t)) : a != null ? mi(e, n, ot(a)) : s != null && e.removeAttribute("value"),
            r == null && i != null && (e.defaultChecked = !!i),
            r != null && (e.checked = r && typeof r != "function" && typeof r != "symbol"),
            c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.name = "" + ot(c) : e.removeAttribute("name")
    }
    function Fc(e, t, a, s, r, i, n, c) {
        if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i),
            t != null || a != null) {
            if (!(i !== "submit" && i !== "reset" || t != null)) {
                ui(e);
                return
            }
            a = a != null ? "" + ot(a) : "",
                t = t != null ? "" + ot(t) : a,
                c || t === e.value || (e.value = t),
                e.defaultValue = t
        }
        s = s ?? r,
            s = typeof s != "function" && typeof s != "symbol" && !!s,
            e.checked = c ? e.checked : !!s,
            e.defaultChecked = !!s,
            n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (e.name = n),
            ui(e)
    }
    function mi(e, t, a) {
        t === "number" && Hs(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
    }
    function Pa(e, t, a, s) {
        if (e = e.options,
            t) {
            t = {};
            for (var r = 0; r < a.length; r++)
                t["$" + a[r]] = !0;
            for (a = 0; a < e.length; a++)
                r = t.hasOwnProperty("$" + e[a].value),
                    e[a].selected !== r && (e[a].selected = r),
                    r && s && (e[a].defaultSelected = !0)
        } else {
            for (a = "" + ot(a),
                t = null,
                r = 0; r < e.length; r++) {
                if (e[r].value === a) {
                    e[r].selected = !0,
                        s && (e[r].defaultSelected = !0);
                    return
                }
                t !== null || e[r].disabled || (t = e[r])
            }
            t !== null && (t.selected = !0)
        }
    }
    function $c(e, t, a) {
        if (t != null && (t = "" + ot(t),
            t !== e.value && (e.value = t),
            a == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = a != null ? "" + ot(a) : ""
    }
    function Wc(e, t, a, s) {
        if (t == null) {
            if (s != null) {
                if (a != null)
                    throw Error(u(92));
                if (Nt(s)) {
                    if (1 < s.length)
                        throw Error(u(93));
                    s = s[0]
                }
                a = s
            }
            a == null && (a = ""),
                t = a
        }
        a = ot(t),
            e.defaultValue = a,
            s = e.textContent,
            s === a && s !== "" && s !== null && (e.value = s),
            ui(e)
    }
    function el(e, t) {
        if (t) {
            var a = e.firstChild;
            if (a && a === e.lastChild && a.nodeType === 3) {
                a.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var xm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Ic(e, t, a) {
        var s = t.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? s ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : s ? e.setProperty(t, a) : typeof a != "number" || a === 0 || xm.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
    }
    function Pc(e, t, a) {
        if (t != null && typeof t != "object")
            throw Error(u(62));
        if (e = e.style,
            a != null) {
            for (var s in a)
                !a.hasOwnProperty(s) || t != null && t.hasOwnProperty(s) || (s.indexOf("--") === 0 ? e.setProperty(s, "") : s === "float" ? e.cssFloat = "" : e[s] = "");
            for (var r in t)
                s = t[r],
                    t.hasOwnProperty(r) && a[r] !== s && Ic(e, r, s)
        } else
            for (var i in t)
                t.hasOwnProperty(i) && Ic(e, i, t[i])
    }
    function fi(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var hm = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
        , gm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function qs(e) {
        return gm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function Rt() { }
    var xi = null;
    function hi(e) {
        return e = e.target || e.srcElement || window,
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
    }
    var tl = null
        , al = null;
    function ed(e) {
        var t = $a(e);
        if (t && (e = t.stateNode)) {
            var a = e[Ke] || null;
            e: switch (e = t.stateNode,
            t.type) {
                case "input":
                    if (oi(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                        t = a.name,
                        a.type === "radio" && t != null) {
                        for (a = e; a.parentNode;)
                            a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'),
                            t = 0; t < a.length; t++) {
                            var s = a[t];
                            if (s !== e && s.form === e.form) {
                                var r = s[Ke] || null;
                                if (!r)
                                    throw Error(u(90));
                                oi(s, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name)
                            }
                        }
                        for (t = 0; t < a.length; t++)
                            s = a[t],
                                s.form === e.form && Jc(s)
                    }
                    break e;
                case "textarea":
                    $c(e, a.value, a.defaultValue);
                    break e;
                case "select":
                    t = a.value,
                        t != null && Pa(e, !!a.multiple, t, !1)
            }
        }
    }
    var gi = !1;
    function td(e, t, a) {
        if (gi)
            return e(t, a);
        gi = !0;
        try {
            var s = e(t);
            return s
        } finally {
            if (gi = !1,
                (tl !== null || al !== null) && (Tr(),
                    tl && (t = tl,
                        e = al,
                        al = tl = null,
                        ed(t),
                        e)))
                for (t = 0; t < e.length; t++)
                    ed(e[t])
        }
    }
    function Hl(e, t) {
        var a = e.stateNode;
        if (a === null)
            return null;
        var s = a[Ke] || null;
        if (s === null)
            return null;
        a = s[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (s = !s.disabled) || (e = e.type,
                    s = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                    e = !s;
                break e;
            default:
                e = !1
        }
        if (e)
            return null;
        if (a && typeof a != "function")
            throw Error(u(231, t, typeof a));
        return a
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
        , bi = !1;
    if (Bt)
        try {
            var ql = {};
            Object.defineProperty(ql, "passive", {
                get: function () {
                    bi = !0
                }
            }),
                window.addEventListener("test", ql, ql),
                window.removeEventListener("test", ql, ql)
        } catch {
            bi = !1
        }
    var aa = null
        , yi = null
        , Ys = null;
    function ad() {
        if (Ys)
            return Ys;
        var e, t = yi, a = t.length, s, r = "value" in aa ? aa.value : aa.textContent, i = r.length;
        for (e = 0; e < a && t[e] === r[e]; e++)
            ;
        var n = a - e;
        for (s = 1; s <= n && t[a - s] === r[i - s]; s++)
            ;
        return Ys = r.slice(e, 1 < s ? 1 - s : void 0)
    }
    function Gs(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
            e === 0 && t === 13 && (e = 13)) : e = t,
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
    }
    function Ls() {
        return !0
    }
    function ld() {
        return !1
    }
    function Je(e) {
        function t(a, s, r, i, n) {
            this._reactName = a,
                this._targetInst = r,
                this.type = s,
                this.nativeEvent = i,
                this.target = n,
                this.currentTarget = null;
            for (var c in e)
                e.hasOwnProperty(c) && (a = e[c],
                    this[c] = a ? a(i) : i[c]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ls : ld,
                this.isPropagationStopped = ld,
                this
        }
        return M(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                    this.isDefaultPrevented = Ls)
            },
            stopPropagation: function () {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                    this.isPropagationStopped = Ls)
            },
            persist: function () { },
            isPersistent: Ls
        }),
            t
    }
    var Ma = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Xs = Je(Ma), Yl = M({}, Ma, {
        view: 0,
        detail: 0
    }), bm = Je(Yl), pi, vi, Gl, Qs = M({}, Yl, {
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
        getModifierState: Ni,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Gl && (Gl && e.type === "mousemove" ? (pi = e.screenX - Gl.screenX,
                vi = e.screenY - Gl.screenY) : vi = pi = 0,
                Gl = e),
                pi)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : vi
        }
    }), sd = Je(Qs), ym = M({}, Qs, {
        dataTransfer: 0
    }), pm = Je(ym), vm = M({}, Yl, {
        relatedTarget: 0
    }), ji = Je(vm), jm = M({}, Ma, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Nm = Je(jm), wm = M({}, Ma, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), km = Je(wm), Sm = M({}, Ma, {
        data: 0
    }), rd = Je(Sm), Tm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, Em = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Am = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function zm(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = Am[e]) ? !!t[e] : !1
    }
    function Ni() {
        return zm
    }
    var Mm = M({}, Yl, {
        key: function (e) {
            if (e.key) {
                var t = Tm[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Gs(e),
                e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Em[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ni,
        charCode: function (e) {
            return e.type === "keypress" ? Gs(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? Gs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
        , Dm = Je(Mm)
        , Cm = M({}, Qs, {
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
        })
        , id = Je(Cm)
        , Om = M({}, Yl, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Ni
        })
        , Um = Je(Om)
        , _m = M({}, Ma, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })
        , Rm = Je(_m)
        , Bm = M({}, Qs, {
            deltaX: function (e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function (e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })
        , Hm = Je(Bm)
        , qm = M({}, Ma, {
            newState: 0,
            oldState: 0
        })
        , Ym = Je(qm)
        , Gm = [9, 13, 27, 32]
        , wi = Bt && "CompositionEvent" in window
        , Ll = null;
    Bt && "documentMode" in document && (Ll = document.documentMode);
    var Lm = Bt && "TextEvent" in window && !Ll
        , nd = Bt && (!wi || Ll && 8 < Ll && 11 >= Ll)
        , cd = " "
        , dd = !1;
    function ud(e, t) {
        switch (e) {
            case "keyup":
                return Gm.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }
    function od(e) {
        return e = e.detail,
            typeof e == "object" && "data" in e ? e.data : null
    }
    var ll = !1;
    function Xm(e, t) {
        switch (e) {
            case "compositionend":
                return od(t);
            case "keypress":
                return t.which !== 32 ? null : (dd = !0,
                    cd);
            case "textInput":
                return e = t.data,
                    e === cd && dd ? null : e;
            default:
                return null
        }
    }
    function Qm(e, t) {
        if (ll)
            return e === "compositionend" || !wi && ud(e, t) ? (e = ad(),
                Ys = yi = aa = null,
                ll = !1,
                e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length)
                        return t.char;
                    if (t.which)
                        return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return nd && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var Vm = {
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
    function md(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Vm[e.type] : t === "textarea"
    }
    function fd(e, t, a, s) {
        tl ? al ? al.push(s) : al = [s] : tl = s,
            t = Or(t, "onChange"),
            0 < t.length && (a = new Xs("onChange", "change", null, a, s),
                e.push({
                    event: a,
                    listeners: t
                }))
    }
    var Xl = null
        , Ql = null;
    function Zm(e) {
        $o(e, 0)
    }
    function Vs(e) {
        var t = Bl(e);
        if (Jc(t))
            return e
    }
    function xd(e, t) {
        if (e === "change")
            return t
    }
    var hd = !1;
    if (Bt) {
        var ki;
        if (Bt) {
            var Si = "oninput" in document;
            if (!Si) {
                var gd = document.createElement("div");
                gd.setAttribute("oninput", "return;"),
                    Si = typeof gd.oninput == "function"
            }
            ki = Si
        } else
            ki = !1;
        hd = ki && (!document.documentMode || 9 < document.documentMode)
    }
    function bd() {
        Xl && (Xl.detachEvent("onpropertychange", yd),
            Ql = Xl = null)
    }
    function yd(e) {
        if (e.propertyName === "value" && Vs(Ql)) {
            var t = [];
            fd(t, Ql, e, hi(e)),
                td(Zm, t)
        }
    }
    function Km(e, t, a) {
        e === "focusin" ? (bd(),
            Xl = t,
            Ql = a,
            Xl.attachEvent("onpropertychange", yd)) : e === "focusout" && bd()
    }
    function Jm(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Vs(Ql)
    }
    function Fm(e, t) {
        if (e === "click")
            return Vs(t)
    }
    function $m(e, t) {
        if (e === "input" || e === "change")
            return Vs(t)
    }
    function Wm(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var lt = typeof Object.is == "function" ? Object.is : Wm;
    function Vl(e, t) {
        if (lt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var a = Object.keys(e)
            , s = Object.keys(t);
        if (a.length !== s.length)
            return !1;
        for (s = 0; s < a.length; s++) {
            var r = a[s];
            if (!ai.call(t, r) || !lt(e[r], t[r]))
                return !1
        }
        return !0
    }
    function pd(e) {
        for (; e && e.firstChild;)
            e = e.firstChild;
        return e
    }
    function vd(e, t) {
        var a = pd(e);
        e = 0;
        for (var s; a;) {
            if (a.nodeType === 3) {
                if (s = e + a.textContent.length,
                    e <= t && s >= t)
                    return {
                        node: a,
                        offset: t - e
                    };
                e = s
            }
            e: {
                for (; a;) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break e
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = pd(a)
        }
    }
    function jd(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jd(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Nd(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Hs(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var a = typeof t.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                e = t.contentWindow;
            else
                break;
            t = Hs(e.document)
        }
        return t
    }
    function Ti(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var Im = Bt && "documentMode" in document && 11 >= document.documentMode
        , sl = null
        , Ei = null
        , Zl = null
        , Ai = !1;
    function wd(e, t, a) {
        var s = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        Ai || sl == null || sl !== Hs(s) || (s = sl,
            "selectionStart" in s && Ti(s) ? s = {
                start: s.selectionStart,
                end: s.selectionEnd
            } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(),
                s = {
                    anchorNode: s.anchorNode,
                    anchorOffset: s.anchorOffset,
                    focusNode: s.focusNode,
                    focusOffset: s.focusOffset
                }),
            Zl && Vl(Zl, s) || (Zl = s,
                s = Or(Ei, "onSelect"),
                0 < s.length && (t = new Xs("onSelect", "select", null, t, a),
                    e.push({
                        event: t,
                        listeners: s
                    }),
                    t.target = sl)))
    }
    function Da(e, t) {
        var a = {};
        return a[e.toLowerCase()] = t.toLowerCase(),
            a["Webkit" + e] = "webkit" + t,
            a["Moz" + e] = "moz" + t,
            a
    }
    var rl = {
        animationend: Da("Animation", "AnimationEnd"),
        animationiteration: Da("Animation", "AnimationIteration"),
        animationstart: Da("Animation", "AnimationStart"),
        transitionrun: Da("Transition", "TransitionRun"),
        transitionstart: Da("Transition", "TransitionStart"),
        transitioncancel: Da("Transition", "TransitionCancel"),
        transitionend: Da("Transition", "TransitionEnd")
    }
        , zi = {}
        , kd = {};
    Bt && (kd = document.createElement("div").style,
        "AnimationEvent" in window || (delete rl.animationend.animation,
            delete rl.animationiteration.animation,
            delete rl.animationstart.animation),
        "TransitionEvent" in window || delete rl.transitionend.transition);
    function Ca(e) {
        if (zi[e])
            return zi[e];
        if (!rl[e])
            return e;
        var t = rl[e], a;
        for (a in t)
            if (t.hasOwnProperty(a) && a in kd)
                return zi[e] = t[a];
        return e
    }
    var Sd = Ca("animationend")
        , Td = Ca("animationiteration")
        , Ed = Ca("animationstart")
        , Pm = Ca("transitionrun")
        , ef = Ca("transitionstart")
        , tf = Ca("transitioncancel")
        , Ad = Ca("transitionend")
        , zd = new Map
        , Mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Mi.push("scrollEnd");
    function wt(e, t) {
        zd.set(e, t),
            za(t, [e])
    }
    var Zs = typeof reportError == "function" ? reportError : function (e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
        , ft = []
        , il = 0
        , Di = 0;
    function Ks() {
        for (var e = il, t = Di = il = 0; t < e;) {
            var a = ft[t];
            ft[t++] = null;
            var s = ft[t];
            ft[t++] = null;
            var r = ft[t];
            ft[t++] = null;
            var i = ft[t];
            if (ft[t++] = null,
                s !== null && r !== null) {
                var n = s.pending;
                n === null ? r.next = r : (r.next = n.next,
                    n.next = r),
                    s.pending = r
            }
            i !== 0 && Md(a, r, i)
        }
    }
    function Js(e, t, a, s) {
        ft[il++] = e,
            ft[il++] = t,
            ft[il++] = a,
            ft[il++] = s,
            Di |= s,
            e.lanes |= s,
            e = e.alternate,
            e !== null && (e.lanes |= s)
    }
    function Ci(e, t, a, s) {
        return Js(e, t, a, s),
            Fs(e)
    }
    function Oa(e, t) {
        return Js(e, null, null, t),
            Fs(e)
    }
    function Md(e, t, a) {
        e.lanes |= a;
        var s = e.alternate;
        s !== null && (s.lanes |= a);
        for (var r = !1, i = e.return; i !== null;)
            i.childLanes |= a,
                s = i.alternate,
                s !== null && (s.childLanes |= a),
                i.tag === 22 && (e = i.stateNode,
                    e === null || e._visibility & 1 || (r = !0)),
                e = i,
                i = i.return;
        return e.tag === 3 ? (i = e.stateNode,
            r && t !== null && (r = 31 - at(a),
                e = i.hiddenUpdates,
                s = e[r],
                s === null ? e[r] = [t] : s.push(t),
                t.lane = a | 536870912),
            i) : null
    }
    function Fs(e) {
        if (50 < xs)
            throw xs = 0,
            Ln = null,
            Error(u(185));
        for (var t = e.return; t !== null;)
            e = t,
                t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var nl = {};
    function af(e, t, a, s) {
        this.tag = e,
            this.key = a,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.refCleanup = this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = s,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
    }
    function st(e, t, a, s) {
        return new af(e, t, a, s)
    }
    function Oi(e) {
        return e = e.prototype,
            !(!e || !e.isReactComponent)
    }
    function Ht(e, t) {
        var a = e.alternate;
        return a === null ? (a = st(e.tag, t, e.key, e.mode),
            a.elementType = e.elementType,
            a.type = e.type,
            a.stateNode = e.stateNode,
            a.alternate = e,
            e.alternate = a) : (a.pendingProps = t,
                a.type = e.type,
                a.flags = 0,
                a.subtreeFlags = 0,
                a.deletions = null),
            a.flags = e.flags & 65011712,
            a.childLanes = e.childLanes,
            a.lanes = e.lanes,
            a.child = e.child,
            a.memoizedProps = e.memoizedProps,
            a.memoizedState = e.memoizedState,
            a.updateQueue = e.updateQueue,
            t = e.dependencies,
            a.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            },
            a.sibling = e.sibling,
            a.index = e.index,
            a.ref = e.ref,
            a.refCleanup = e.refCleanup,
            a
    }
    function Dd(e, t) {
        e.flags &= 65011714;
        var a = e.alternate;
        return a === null ? (e.childLanes = 0,
            e.lanes = t,
            e.child = null,
            e.subtreeFlags = 0,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.updateQueue = null,
            e.dependencies = null,
            e.stateNode = null) : (e.childLanes = a.childLanes,
                e.lanes = a.lanes,
                e.child = a.child,
                e.subtreeFlags = 0,
                e.deletions = null,
                e.memoizedProps = a.memoizedProps,
                e.memoizedState = a.memoizedState,
                e.updateQueue = a.updateQueue,
                e.type = a.type,
                t = a.dependencies,
                e.dependencies = t === null ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }),
            e
    }
    function $s(e, t, a, s, r, i) {
        var n = 0;
        if (s = e,
            typeof e == "function")
            Oi(e) && (n = 1);
        else if (typeof e == "string")
            n = cx(e, a, R.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
                case At:
                    return e = st(31, a, t, r),
                        e.elementType = At,
                        e.lanes = i,
                        e;
                case X:
                    return Ua(a.children, r, i, t);
                case be:
                    n = 8,
                        r |= 24;
                    break;
                case Te:
                    return e = st(12, a, t, r | 2),
                        e.elementType = Te,
                        e.lanes = i,
                        e;
                case Et:
                    return e = st(13, a, t, r),
                        e.elementType = Et,
                        e.lanes = i,
                        e;
                case Qe:
                    return e = st(19, a, t, r),
                        e.elementType = Qe,
                        e.lanes = i,
                        e;
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case qe:
                                n = 10;
                                break e;
                            case Tt:
                                n = 9;
                                break e;
                            case ut:
                                n = 11;
                                break e;
                            case ee:
                                n = 14;
                                break e;
                            case Ve:
                                n = 16,
                                    s = null;
                                break e
                        }
                    n = 29,
                        a = Error(u(130, e === null ? "null" : typeof e, "")),
                        s = null
            }
        return t = st(n, a, t, r),
            t.elementType = e,
            t.type = s,
            t.lanes = i,
            t
    }
    function Ua(e, t, a, s) {
        return e = st(7, e, s, t),
            e.lanes = a,
            e
    }
    function Ui(e, t, a) {
        return e = st(6, e, null, t),
            e.lanes = a,
            e
    }
    function Cd(e) {
        var t = st(18, null, null, 0);
        return t.stateNode = e,
            t
    }
    function _i(e, t, a) {
        return t = st(4, e.children !== null ? e.children : [], e.key, t),
            t.lanes = a,
            t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            t
    }
    var Od = new WeakMap;
    function xt(e, t) {
        if (typeof e == "object" && e !== null) {
            var a = Od.get(e);
            return a !== void 0 ? a : (t = {
                value: e,
                source: t,
                stack: Cc(t)
            },
                Od.set(e, t),
                t)
        }
        return {
            value: e,
            source: t,
            stack: Cc(t)
        }
    }
    var cl = []
        , dl = 0
        , Ws = null
        , Kl = 0
        , ht = []
        , gt = 0
        , la = null
        , Mt = 1
        , Dt = "";
    function qt(e, t) {
        cl[dl++] = Kl,
            cl[dl++] = Ws,
            Ws = e,
            Kl = t
    }
    function Ud(e, t, a) {
        ht[gt++] = Mt,
            ht[gt++] = Dt,
            ht[gt++] = la,
            la = e;
        var s = Mt;
        e = Dt;
        var r = 32 - at(s) - 1;
        s &= ~(1 << r),
            a += 1;
        var i = 32 - at(t) + r;
        if (30 < i) {
            var n = r - r % 5;
            i = (s & (1 << n) - 1).toString(32),
                s >>= n,
                r -= n,
                Mt = 1 << 32 - at(t) + r | a << r | s,
                Dt = i + e
        } else
            Mt = 1 << i | a << r | s,
                Dt = e
    }
    function Ri(e) {
        e.return !== null && (qt(e, 1),
            Ud(e, 1, 0))
    }
    function Bi(e) {
        for (; e === Ws;)
            Ws = cl[--dl],
                cl[dl] = null,
                Kl = cl[--dl],
                cl[dl] = null;
        for (; e === la;)
            la = ht[--gt],
                ht[gt] = null,
                Dt = ht[--gt],
                ht[gt] = null,
                Mt = ht[--gt],
                ht[gt] = null
    }
    function _d(e, t) {
        ht[gt++] = Mt,
            ht[gt++] = Dt,
            ht[gt++] = la,
            Mt = t.id,
            Dt = t.overflow,
            la = e
    }
    var _e = null
        , he = null
        , te = !1
        , sa = null
        , bt = !1
        , Hi = Error(u(519));
    function ra(e) {
        var t = Error(u(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Jl(xt(t, e)),
        Hi
    }
    function Rd(e) {
        var t = e.stateNode
            , a = e.type
            , s = e.memoizedProps;
        switch (t[Ue] = e,
        t[Ke] = s,
        a) {
            case "dialog":
                $("cancel", t),
                    $("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                $("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < gs.length; a++)
                    $(gs[a], t);
                break;
            case "source":
                $("error", t);
                break;
            case "img":
            case "image":
            case "link":
                $("error", t),
                    $("load", t);
                break;
            case "details":
                $("toggle", t);
                break;
            case "input":
                $("invalid", t),
                    Fc(t, s.value, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name, !0);
                break;
            case "select":
                $("invalid", t);
                break;
            case "textarea":
                $("invalid", t),
                    Wc(t, s.value, s.defaultValue, s.children)
        }
        a = s.children,
            typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || s.suppressHydrationWarning === !0 || e0(t.textContent, a) ? (s.popover != null && ($("beforetoggle", t),
                $("toggle", t)),
                s.onScroll != null && $("scroll", t),
                s.onScrollEnd != null && $("scrollend", t),
                s.onClick != null && (t.onclick = Rt),
                t = !0) : t = !1,
            t || ra(e, !0)
    }
    function Bd(e) {
        for (_e = e.return; _e;)
            switch (_e.tag) {
                case 5:
                case 31:
                case 13:
                    bt = !1;
                    return;
                case 27:
                case 3:
                    bt = !0;
                    return;
                default:
                    _e = _e.return
            }
    }
    function ul(e) {
        if (e !== _e)
            return !1;
        if (!te)
            return Bd(e),
                te = !0,
                !1;
        var t = e.tag, a;
        if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type,
            a = !(a !== "form" && a !== "button") || lc(e.type, e.memoizedProps)),
            a = !a),
            a && he && ra(e),
            Bd(e),
            t === 13) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(u(317));
            he = d0(e)
        } else if (t === 31) {
            if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                throw Error(u(317));
            he = d0(e)
        } else
            t === 27 ? (t = he,
                pa(e.type) ? (e = cc,
                    cc = null,
                    he = e) : he = t) : he = _e ? pt(e.stateNode.nextSibling) : null;
        return !0
    }
    function _a() {
        he = _e = null,
            te = !1
    }
    function qi() {
        var e = sa;
        return e !== null && (Ie === null ? Ie = e : Ie.push.apply(Ie, e),
            sa = null),
            e
    }
    function Jl(e) {
        sa === null ? sa = [e] : sa.push(e)
    }
    var Yi = f(null)
        , Ra = null
        , Yt = null;
    function ia(e, t, a) {
        O(Yi, t._currentValue),
            t._currentValue = a
    }
    function Gt(e) {
        e._currentValue = Yi.current,
            A(Yi)
    }
    function Gi(e, t, a) {
        for (; e !== null;) {
            var s = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
                e === a)
                break;
            e = e.return
        }
    }
    function Li(e, t, a, s) {
        var r = e.child;
        for (r !== null && (r.return = e); r !== null;) {
            var i = r.dependencies;
            if (i !== null) {
                var n = r.child;
                i = i.firstContext;
                e: for (; i !== null;) {
                    var c = i;
                    i = r;
                    for (var o = 0; o < t.length; o++)
                        if (c.context === t[o]) {
                            i.lanes |= a,
                                c = i.alternate,
                                c !== null && (c.lanes |= a),
                                Gi(i.return, a, e),
                                s || (n = null);
                            break e
                        }
                    i = c.next
                }
            } else if (r.tag === 18) {
                if (n = r.return,
                    n === null)
                    throw Error(u(341));
                n.lanes |= a,
                    i = n.alternate,
                    i !== null && (i.lanes |= a),
                    Gi(n, a, e),
                    n = null
            } else
                n = r.child;
            if (n !== null)
                n.return = r;
            else
                for (n = r; n !== null;) {
                    if (n === e) {
                        n = null;
                        break
                    }
                    if (r = n.sibling,
                        r !== null) {
                        r.return = n.return,
                            n = r;
                        break
                    }
                    n = n.return
                }
            r = n
        }
    }
    function ol(e, t, a, s) {
        e = null;
        for (var r = t, i = !1; r !== null;) {
            if (!i) {
                if ((r.flags & 524288) !== 0)
                    i = !0;
                else if ((r.flags & 262144) !== 0)
                    break
            }
            if (r.tag === 10) {
                var n = r.alternate;
                if (n === null)
                    throw Error(u(387));
                if (n = n.memoizedProps,
                    n !== null) {
                    var c = r.type;
                    lt(r.pendingProps.value, n.value) || (e !== null ? e.push(c) : e = [c])
                }
            } else if (r === re.current) {
                if (n = r.alternate,
                    n === null)
                    throw Error(u(387));
                n.memoizedState.memoizedState !== r.memoizedState.memoizedState && (e !== null ? e.push(js) : e = [js])
            }
            r = r.return
        }
        e !== null && Li(t, e, a, s),
            t.flags |= 262144
    }
    function Is(e) {
        for (e = e.firstContext; e !== null;) {
            if (!lt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Ba(e) {
        Ra = e,
            Yt = null,
            e = e.dependencies,
            e !== null && (e.firstContext = null)
    }
    function Re(e) {
        return Hd(Ra, e)
    }
    function Ps(e, t) {
        return Ra === null && Ba(e),
            Hd(e, t)
    }
    function Hd(e, t) {
        var a = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: a,
            next: null
        },
            Yt === null) {
            if (e === null)
                throw Error(u(308));
            Yt = t,
                e.dependencies = {
                    lanes: 0,
                    firstContext: t
                },
                e.flags |= 524288
        } else
            Yt = Yt.next = t;
        return a
    }
    var lf = typeof AbortController < "u" ? AbortController : function () {
        var e = []
            , t = this.signal = {
                aborted: !1,
                addEventListener: function (a, s) {
                    e.push(s)
                }
            };
        this.abort = function () {
            t.aborted = !0,
                e.forEach(function (a) {
                    return a()
                })
        }
    }
        , sf = d.unstable_scheduleCallback
        , rf = d.unstable_NormalPriority
        , Ee = {
            $$typeof: qe,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
    function Xi() {
        return {
            controller: new lf,
            data: new Map,
            refCount: 0
        }
    }
    function Fl(e) {
        e.refCount--,
            e.refCount === 0 && sf(rf, function () {
                e.controller.abort()
            })
    }
    var $l = null
        , Qi = 0
        , ml = 0
        , fl = null;
    function nf(e, t) {
        if ($l === null) {
            var a = $l = [];
            Qi = 0,
                ml = Jn(),
                fl = {
                    status: "pending",
                    value: void 0,
                    then: function (s) {
                        a.push(s)
                    }
                }
        }
        return Qi++,
            t.then(qd, qd),
            t
    }
    function qd() {
        if (--Qi === 0 && $l !== null) {
            fl !== null && (fl.status = "fulfilled");
            var e = $l;
            $l = null,
                ml = 0,
                fl = null;
            for (var t = 0; t < e.length; t++)
                (0,
                    e[t])()
        }
    }
    function cf(e, t) {
        var a = []
            , s = {
                status: "pending",
                value: null,
                reason: null,
                then: function (r) {
                    a.push(r)
                }
            };
        return e.then(function () {
            s.status = "fulfilled",
                s.value = t;
            for (var r = 0; r < a.length; r++)
                (0,
                    a[r])(t)
        }, function (r) {
            for (s.status = "rejected",
                s.reason = r,
                r = 0; r < a.length; r++)
                (0,
                    a[r])(void 0)
        }),
            s
    }
    var Yd = S.S;
    S.S = function (e, t) {
        ko = et(),
            typeof t == "object" && t !== null && typeof t.then == "function" && nf(e, t),
            Yd !== null && Yd(e, t)
    }
        ;
    var Ha = f(null);
    function Vi() {
        var e = Ha.current;
        return e !== null ? e : xe.pooledCache
    }
    function er(e, t) {
        t === null ? O(Ha, Ha.current) : O(Ha, t.pool)
    }
    function Gd() {
        var e = Vi();
        return e === null ? null : {
            parent: Ee._currentValue,
            pool: e
        }
    }
    var xl = Error(u(460))
        , Zi = Error(u(474))
        , tr = Error(u(542))
        , ar = {
            then: function () { }
        };
    function Ld(e) {
        return e = e.status,
            e === "fulfilled" || e === "rejected"
    }
    function Xd(e, t, a) {
        switch (a = e[a],
        a === void 0 ? e.push(t) : a !== t && (t.then(Rt, Rt),
            t = a),
        t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                Vd(e),
                e;
            default:
                if (typeof t.status == "string")
                    t.then(Rt, Rt);
                else {
                    if (e = xe,
                        e !== null && 100 < e.shellSuspendCounter)
                        throw Error(u(482));
                    e = t,
                        e.status = "pending",
                        e.then(function (s) {
                            if (t.status === "pending") {
                                var r = t;
                                r.status = "fulfilled",
                                    r.value = s
                            }
                        }, function (s) {
                            if (t.status === "pending") {
                                var r = t;
                                r.status = "rejected",
                                    r.reason = s
                            }
                        })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason,
                        Vd(e),
                        e
                }
                throw Ya = t,
                xl
        }
    }
    function qa(e) {
        try {
            var t = e._init;
            return t(e._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ya = a,
                xl) : a
        }
    }
    var Ya = null;
    function Qd() {
        if (Ya === null)
            throw Error(u(459));
        var e = Ya;
        return Ya = null,
            e
    }
    function Vd(e) {
        if (e === xl || e === tr)
            throw Error(u(483))
    }
    var hl = null
        , Wl = 0;
    function lr(e) {
        var t = Wl;
        return Wl += 1,
            hl === null && (hl = []),
            Xd(hl, e, t)
    }
    function Il(e, t) {
        t = t.props.ref,
            e.ref = t !== void 0 ? t : null
    }
    function sr(e, t) {
        throw t.$$typeof === H ? Error(u(525)) : (e = Object.prototype.toString.call(t),
            Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Zd(e) {
        function t(h, m) {
            if (e) {
                var b = h.deletions;
                b === null ? (h.deletions = [m],
                    h.flags |= 16) : b.push(m)
            }
        }
        function a(h, m) {
            if (!e)
                return null;
            for (; m !== null;)
                t(h, m),
                    m = m.sibling;
            return null
        }
        function s(h) {
            for (var m = new Map; h !== null;)
                h.key !== null ? m.set(h.key, h) : m.set(h.index, h),
                    h = h.sibling;
            return m
        }
        function r(h, m) {
            return h = Ht(h, m),
                h.index = 0,
                h.sibling = null,
                h
        }
        function i(h, m, b) {
            return h.index = b,
                e ? (b = h.alternate,
                    b !== null ? (b = b.index,
                        b < m ? (h.flags |= 67108866,
                            m) : b) : (h.flags |= 67108866,
                                m)) : (h.flags |= 1048576,
                                    m)
        }
        function n(h) {
            return e && h.alternate === null && (h.flags |= 67108866),
                h
        }
        function c(h, m, b, T) {
            return m === null || m.tag !== 6 ? (m = Ui(b, h.mode, T),
                m.return = h,
                m) : (m = r(m, b),
                    m.return = h,
                    m)
        }
        function o(h, m, b, T) {
            var q = b.type;
            return q === X ? k(h, m, b.props.children, T, b.key) : m !== null && (m.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ve && qa(q) === m.type) ? (m = r(m, b.props),
                Il(m, b),
                m.return = h,
                m) : (m = $s(b.type, b.key, b.props, null, h.mode, T),
                    Il(m, b),
                    m.return = h,
                    m)
        }
        function y(h, m, b, T) {
            return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = _i(b, h.mode, T),
                m.return = h,
                m) : (m = r(m, b.children || []),
                    m.return = h,
                    m)
        }
        function k(h, m, b, T, q) {
            return m === null || m.tag !== 7 ? (m = Ua(b, h.mode, T, q),
                m.return = h,
                m) : (m = r(m, b),
                    m.return = h,
                    m)
        }
        function E(h, m, b) {
            if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
                return m = Ui("" + m, h.mode, b),
                    m.return = h,
                    m;
            if (typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                    case ce:
                        return b = $s(m.type, m.key, m.props, null, h.mode, b),
                            Il(b, m),
                            b.return = h,
                            b;
                    case Ne:
                        return m = _i(m, h.mode, b),
                            m.return = h,
                            m;
                    case Ve:
                        return m = qa(m),
                            E(h, m, b)
                }
                if (Nt(m) || Ze(m))
                    return m = Ua(m, h.mode, b, null),
                        m.return = h,
                        m;
                if (typeof m.then == "function")
                    return E(h, lr(m), b);
                if (m.$$typeof === qe)
                    return E(h, Ps(h, m), b);
                sr(h, m)
            }
            return null
        }
        function p(h, m, b, T) {
            var q = m !== null ? m.key : null;
            if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
                return q !== null ? null : c(h, m, "" + b, T);
            if (typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                    case ce:
                        return b.key === q ? o(h, m, b, T) : null;
                    case Ne:
                        return b.key === q ? y(h, m, b, T) : null;
                    case Ve:
                        return b = qa(b),
                            p(h, m, b, T)
                }
                if (Nt(b) || Ze(b))
                    return q !== null ? null : k(h, m, b, T, null);
                if (typeof b.then == "function")
                    return p(h, m, lr(b), T);
                if (b.$$typeof === qe)
                    return p(h, m, Ps(h, b), T);
                sr(h, b)
            }
            return null
        }
        function j(h, m, b, T, q) {
            if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
                return h = h.get(b) || null,
                    c(m, h, "" + T, q);
            if (typeof T == "object" && T !== null) {
                switch (T.$$typeof) {
                    case ce:
                        return h = h.get(T.key === null ? b : T.key) || null,
                            o(m, h, T, q);
                    case Ne:
                        return h = h.get(T.key === null ? b : T.key) || null,
                            y(m, h, T, q);
                    case Ve:
                        return T = qa(T),
                            j(h, m, b, T, q)
                }
                if (Nt(T) || Ze(T))
                    return h = h.get(b) || null,
                        k(m, h, T, q, null);
                if (typeof T.then == "function")
                    return j(h, m, b, lr(T), q);
                if (T.$$typeof === qe)
                    return j(h, m, b, Ps(m, T), q);
                sr(m, T)
            }
            return null
        }
        function U(h, m, b, T) {
            for (var q = null, ae = null, B = m, K = m = 0, P = null; B !== null && K < b.length; K++) {
                B.index > K ? (P = B,
                    B = null) : P = B.sibling;
                var le = p(h, B, b[K], T);
                if (le === null) {
                    B === null && (B = P);
                    break
                }
                e && B && le.alternate === null && t(h, B),
                    m = i(le, m, K),
                    ae === null ? q = le : ae.sibling = le,
                    ae = le,
                    B = P
            }
            if (K === b.length)
                return a(h, B),
                    te && qt(h, K),
                    q;
            if (B === null) {
                for (; K < b.length; K++)
                    B = E(h, b[K], T),
                        B !== null && (m = i(B, m, K),
                            ae === null ? q = B : ae.sibling = B,
                            ae = B);
                return te && qt(h, K),
                    q
            }
            for (B = s(B); K < b.length; K++)
                P = j(B, h, K, b[K], T),
                    P !== null && (e && P.alternate !== null && B.delete(P.key === null ? K : P.key),
                        m = i(P, m, K),
                        ae === null ? q = P : ae.sibling = P,
                        ae = P);
            return e && B.forEach(function (ka) {
                return t(h, ka)
            }),
                te && qt(h, K),
                q
        }
        function G(h, m, b, T) {
            if (b == null)
                throw Error(u(151));
            for (var q = null, ae = null, B = m, K = m = 0, P = null, le = b.next(); B !== null && !le.done; K++,
                le = b.next()) {
                B.index > K ? (P = B,
                    B = null) : P = B.sibling;
                var ka = p(h, B, le.value, T);
                if (ka === null) {
                    B === null && (B = P);
                    break
                }
                e && B && ka.alternate === null && t(h, B),
                    m = i(ka, m, K),
                    ae === null ? q = ka : ae.sibling = ka,
                    ae = ka,
                    B = P
            }
            if (le.done)
                return a(h, B),
                    te && qt(h, K),
                    q;
            if (B === null) {
                for (; !le.done; K++,
                    le = b.next())
                    le = E(h, le.value, T),
                        le !== null && (m = i(le, m, K),
                            ae === null ? q = le : ae.sibling = le,
                            ae = le);
                return te && qt(h, K),
                    q
            }
            for (B = s(B); !le.done; K++,
                le = b.next())
                le = j(B, h, K, le.value, T),
                    le !== null && (e && le.alternate !== null && B.delete(le.key === null ? K : le.key),
                        m = i(le, m, K),
                        ae === null ? q = le : ae.sibling = le,
                        ae = le);
            return e && B.forEach(function (px) {
                return t(h, px)
            }),
                te && qt(h, K),
                q
        }
        function me(h, m, b, T) {
            if (typeof b == "object" && b !== null && b.type === X && b.key === null && (b = b.props.children),
                typeof b == "object" && b !== null) {
                switch (b.$$typeof) {
                    case ce:
                        e: {
                            for (var q = b.key; m !== null;) {
                                if (m.key === q) {
                                    if (q = b.type,
                                        q === X) {
                                        if (m.tag === 7) {
                                            a(h, m.sibling),
                                                T = r(m, b.props.children),
                                                T.return = h,
                                                h = T;
                                            break e
                                        }
                                    } else if (m.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Ve && qa(q) === m.type) {
                                        a(h, m.sibling),
                                            T = r(m, b.props),
                                            Il(T, b),
                                            T.return = h,
                                            h = T;
                                        break e
                                    }
                                    a(h, m);
                                    break
                                } else
                                    t(h, m);
                                m = m.sibling
                            }
                            b.type === X ? (T = Ua(b.props.children, h.mode, T, b.key),
                                T.return = h,
                                h = T) : (T = $s(b.type, b.key, b.props, null, h.mode, T),
                                    Il(T, b),
                                    T.return = h,
                                    h = T)
                        }
                        return n(h);
                    case Ne:
                        e: {
                            for (q = b.key; m !== null;) {
                                if (m.key === q)
                                    if (m.tag === 4 && m.stateNode.containerInfo === b.containerInfo && m.stateNode.implementation === b.implementation) {
                                        a(h, m.sibling),
                                            T = r(m, b.children || []),
                                            T.return = h,
                                            h = T;
                                        break e
                                    } else {
                                        a(h, m);
                                        break
                                    }
                                else
                                    t(h, m);
                                m = m.sibling
                            }
                            T = _i(b, h.mode, T),
                                T.return = h,
                                h = T
                        }
                        return n(h);
                    case Ve:
                        return b = qa(b),
                            me(h, m, b, T)
                }
                if (Nt(b))
                    return U(h, m, b, T);
                if (Ze(b)) {
                    if (q = Ze(b),
                        typeof q != "function")
                        throw Error(u(150));
                    return b = q.call(b),
                        G(h, m, b, T)
                }
                if (typeof b.then == "function")
                    return me(h, m, lr(b), T);
                if (b.$$typeof === qe)
                    return me(h, m, Ps(h, b), T);
                sr(h, b)
            }
            return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b,
                m !== null && m.tag === 6 ? (a(h, m.sibling),
                    T = r(m, b),
                    T.return = h,
                    h = T) : (a(h, m),
                        T = Ui(b, h.mode, T),
                        T.return = h,
                        h = T),
                n(h)) : a(h, m)
        }
        return function (h, m, b, T) {
            try {
                Wl = 0;
                var q = me(h, m, b, T);
                return hl = null,
                    q
            } catch (B) {
                if (B === xl || B === tr)
                    throw B;
                var ae = st(29, B, null, h.mode);
                return ae.lanes = T,
                    ae.return = h,
                    ae
            } finally { }
        }
    }
    var Ga = Zd(!0)
        , Kd = Zd(!1)
        , na = !1;
    function Ki(e) {
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
    function Ji(e, t) {
        e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            })
    }
    function ca(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function da(e, t, a) {
        var s = e.updateQueue;
        if (s === null)
            return null;
        if (s = s.shared,
            (se & 2) !== 0) {
            var r = s.pending;
            return r === null ? t.next = t : (t.next = r.next,
                r.next = t),
                s.pending = t,
                t = Fs(e),
                Md(e, null, a),
                t
        }
        return Js(e, s, t, a),
            Fs(e)
    }
    function Pl(e, t, a) {
        if (t = t.updateQueue,
            t !== null && (t = t.shared,
                (a & 4194048) !== 0)) {
            var s = t.lanes;
            s &= e.pendingLanes,
                a |= s,
                t.lanes = a,
                Hc(e, a)
        }
    }
    function Fi(e, t) {
        var a = e.updateQueue
            , s = e.alternate;
        if (s !== null && (s = s.updateQueue,
            a === s)) {
            var r = null
                , i = null;
            if (a = a.firstBaseUpdate,
                a !== null) {
                do {
                    var n = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    i === null ? r = i = n : i = i.next = n,
                        a = a.next
                } while (a !== null);
                i === null ? r = i = t : i = i.next = t
            } else
                r = i = t;
            a = {
                baseState: s.baseState,
                firstBaseUpdate: r,
                lastBaseUpdate: i,
                shared: s.shared,
                callbacks: s.callbacks
            },
                e.updateQueue = a;
            return
        }
        e = a.lastBaseUpdate,
            e === null ? a.firstBaseUpdate = t : e.next = t,
            a.lastBaseUpdate = t
    }
    var $i = !1;
    function es() {
        if ($i) {
            var e = fl;
            if (e !== null)
                throw e
        }
    }
    function ts(e, t, a, s) {
        $i = !1;
        var r = e.updateQueue;
        na = !1;
        var i = r.firstBaseUpdate
            , n = r.lastBaseUpdate
            , c = r.shared.pending;
        if (c !== null) {
            r.shared.pending = null;
            var o = c
                , y = o.next;
            o.next = null,
                n === null ? i = y : n.next = y,
                n = o;
            var k = e.alternate;
            k !== null && (k = k.updateQueue,
                c = k.lastBaseUpdate,
                c !== n && (c === null ? k.firstBaseUpdate = y : c.next = y,
                    k.lastBaseUpdate = o))
        }
        if (i !== null) {
            var E = r.baseState;
            n = 0,
                k = y = o = null,
                c = i;
            do {
                var p = c.lane & -536870913
                    , j = p !== c.lane;
                if (j ? (I & p) === p : (s & p) === p) {
                    p !== 0 && p === ml && ($i = !0),
                        k !== null && (k = k.next = {
                            lane: 0,
                            tag: c.tag,
                            payload: c.payload,
                            callback: null,
                            next: null
                        });
                    e: {
                        var U = e
                            , G = c;
                        p = t;
                        var me = a;
                        switch (G.tag) {
                            case 1:
                                if (U = G.payload,
                                    typeof U == "function") {
                                    E = U.call(me, E, p);
                                    break e
                                }
                                E = U;
                                break e;
                            case 3:
                                U.flags = U.flags & -65537 | 128;
                            case 0:
                                if (U = G.payload,
                                    p = typeof U == "function" ? U.call(me, E, p) : U,
                                    p == null)
                                    break e;
                                E = M({}, E, p);
                                break e;
                            case 2:
                                na = !0
                        }
                    }
                    p = c.callback,
                        p !== null && (e.flags |= 64,
                            j && (e.flags |= 8192),
                            j = r.callbacks,
                            j === null ? r.callbacks = [p] : j.push(p))
                } else
                    j = {
                        lane: p,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    },
                        k === null ? (y = k = j,
                            o = E) : k = k.next = j,
                        n |= p;
                if (c = c.next,
                    c === null) {
                    if (c = r.shared.pending,
                        c === null)
                        break;
                    j = c,
                        c = j.next,
                        j.next = null,
                        r.lastBaseUpdate = j,
                        r.shared.pending = null
                }
            } while (!0);
            k === null && (o = E),
                r.baseState = o,
                r.firstBaseUpdate = y,
                r.lastBaseUpdate = k,
                i === null && (r.shared.lanes = 0),
                xa |= n,
                e.lanes = n,
                e.memoizedState = E
        }
    }
    function Jd(e, t) {
        if (typeof e != "function")
            throw Error(u(191, e));
        e.call(t)
    }
    function Fd(e, t) {
        var a = e.callbacks;
        if (a !== null)
            for (e.callbacks = null,
                e = 0; e < a.length; e++)
                Jd(a[e], t)
    }
    var gl = f(null)
        , rr = f(0);
    function $d(e, t) {
        e = $t,
            O(rr, e),
            O(gl, t),
            $t = e | t.baseLanes
    }
    function Wi() {
        O(rr, $t),
            O(gl, gl.current)
    }
    function Ii() {
        $t = rr.current,
            A(gl),
            A(rr)
    }
    var rt = f(null)
        , yt = null;
    function ua(e) {
        var t = e.alternate;
        O(ke, ke.current & 1),
            O(rt, e),
            yt === null && (t === null || gl.current !== null || t.memoizedState !== null) && (yt = e)
    }
    function Pi(e) {
        O(ke, ke.current),
            O(rt, e),
            yt === null && (yt = e)
    }
    function Wd(e) {
        e.tag === 22 ? (O(ke, ke.current),
            O(rt, e),
            yt === null && (yt = e)) : oa()
    }
    function oa() {
        O(ke, ke.current),
            O(rt, rt.current)
    }
    function it(e) {
        A(rt),
            yt === e && (yt = null),
            A(ke)
    }
    var ke = f(0);
    function ir(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var a = t.memoizedState;
                if (a !== null && (a = a.dehydrated,
                    a === null || ic(a) || nc(a)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                    t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
                t = t.sibling
        }
        return null
    }
    var Lt = 0
        , Z = null
        , ue = null
        , Ae = null
        , nr = !1
        , bl = !1
        , La = !1
        , cr = 0
        , as = 0
        , yl = null
        , df = 0;
    function ve() {
        throw Error(u(321))
    }
    function en(e, t) {
        if (t === null)
            return !1;
        for (var a = 0; a < t.length && a < e.length; a++)
            if (!lt(e[a], t[a]))
                return !1;
        return !0
    }
    function tn(e, t, a, s, r, i) {
        return Lt = i,
            Z = t,
            t.memoizedState = null,
            t.updateQueue = null,
            t.lanes = 0,
            S.H = e === null || e.memoizedState === null ? Uu : bn,
            La = !1,
            i = a(s, r),
            La = !1,
            bl && (i = Pd(t, a, s, r)),
            Id(e),
            i
    }
    function Id(e) {
        S.H = rs;
        var t = ue !== null && ue.next !== null;
        if (Lt = 0,
            Ae = ue = Z = null,
            nr = !1,
            as = 0,
            yl = null,
            t)
            throw Error(u(300));
        e === null || ze || (e = e.dependencies,
            e !== null && Is(e) && (ze = !0))
    }
    function Pd(e, t, a, s) {
        Z = e;
        var r = 0;
        do {
            if (bl && (yl = null),
                as = 0,
                bl = !1,
                25 <= r)
                throw Error(u(301));
            if (r += 1,
                Ae = ue = null,
                e.updateQueue != null) {
                var i = e.updateQueue;
                i.lastEffect = null,
                    i.events = null,
                    i.stores = null,
                    i.memoCache != null && (i.memoCache.index = 0)
            }
            S.H = _u,
                i = t(a, s)
        } while (bl);
        return i
    }
    function uf() {
        var e = S.H
            , t = e.useState()[0];
        return t = typeof t.then == "function" ? ls(t) : t,
            e = e.useState()[0],
            (ue !== null ? ue.memoizedState : null) !== e && (Z.flags |= 1024),
            t
    }
    function an() {
        var e = cr !== 0;
        return cr = 0,
            e
    }
    function ln(e, t, a) {
        t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~a
    }
    function sn(e) {
        if (nr) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null),
                    e = e.next
            }
            nr = !1
        }
        Lt = 0,
            Ae = ue = Z = null,
            bl = !1,
            as = cr = 0,
            yl = null
    }
    function Le() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ae === null ? Z.memoizedState = Ae = e : Ae = Ae.next = e,
            Ae
    }
    function Se() {
        if (ue === null) {
            var e = Z.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = ue.next;
        var t = Ae === null ? Z.memoizedState : Ae.next;
        if (t !== null)
            Ae = t,
                ue = e;
        else {
            if (e === null)
                throw Z.alternate === null ? Error(u(467)) : Error(u(310));
            ue = e,
                e = {
                    memoizedState: ue.memoizedState,
                    baseState: ue.baseState,
                    baseQueue: ue.baseQueue,
                    queue: ue.queue,
                    next: null
                },
                Ae === null ? Z.memoizedState = Ae = e : Ae = Ae.next = e
        }
        return Ae
    }
    function dr() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function ls(e) {
        var t = as;
        return as += 1,
            yl === null && (yl = []),
            e = Xd(yl, e, t),
            t = Z,
            (Ae === null ? t.memoizedState : Ae.next) === null && (t = t.alternate,
                S.H = t === null || t.memoizedState === null ? Uu : bn),
            e
    }
    function ur(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return ls(e);
            if (e.$$typeof === qe)
                return Re(e)
        }
        throw Error(u(438, String(e)))
    }
    function rn(e) {
        var t = null
            , a = Z.updateQueue;
        if (a !== null && (t = a.memoCache),
            t == null) {
            var s = Z.alternate;
            s !== null && (s = s.updateQueue,
                s !== null && (s = s.memoCache,
                    s != null && (t = {
                        data: s.data.map(function (r) {
                            return r.slice()
                        }),
                        index: 0
                    })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
            a === null && (a = dr(),
                Z.updateQueue = a),
            a.memoCache = t,
            a = t.data[t.index],
            a === void 0)
            for (a = t.data[t.index] = Array(e),
                s = 0; s < e; s++)
                a[s] = Ka;
        return t.index++,
            a
    }
    function Xt(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function or(e) {
        var t = Se();
        return nn(t, ue, e)
    }
    function nn(e, t, a) {
        var s = e.queue;
        if (s === null)
            throw Error(u(311));
        s.lastRenderedReducer = a;
        var r = e.baseQueue
            , i = s.pending;
        if (i !== null) {
            if (r !== null) {
                var n = r.next;
                r.next = i.next,
                    i.next = n
            }
            t.baseQueue = r = i,
                s.pending = null
        }
        if (i = e.baseState,
            r === null)
            e.memoizedState = i;
        else {
            t = r.next;
            var c = n = null
                , o = null
                , y = t
                , k = !1;
            do {
                var E = y.lane & -536870913;
                if (E !== y.lane ? (I & E) === E : (Lt & E) === E) {
                    var p = y.revertLane;
                    if (p === 0)
                        o !== null && (o = o.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        }),
                            E === ml && (k = !0);
                    else if ((Lt & p) === p) {
                        y = y.next,
                            p === ml && (k = !0);
                        continue
                    } else
                        E = {
                            lane: 0,
                            revertLane: y.revertLane,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        },
                            o === null ? (c = o = E,
                                n = i) : o = o.next = E,
                            Z.lanes |= p,
                            xa |= p;
                    E = y.action,
                        La && a(i, E),
                        i = y.hasEagerState ? y.eagerState : a(i, E)
                } else
                    p = {
                        lane: E,
                        revertLane: y.revertLane,
                        gesture: y.gesture,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    },
                        o === null ? (c = o = p,
                            n = i) : o = o.next = p,
                        Z.lanes |= E,
                        xa |= E;
                y = y.next
            } while (y !== null && y !== t);
            if (o === null ? n = i : o.next = c,
                !lt(i, e.memoizedState) && (ze = !0,
                    k && (a = fl,
                        a !== null)))
                throw a;
            e.memoizedState = i,
                e.baseState = n,
                e.baseQueue = o,
                s.lastRenderedState = i
        }
        return r === null && (s.lanes = 0),
            [e.memoizedState, s.dispatch]
    }
    function cn(e) {
        var t = Se()
            , a = t.queue;
        if (a === null)
            throw Error(u(311));
        a.lastRenderedReducer = e;
        var s = a.dispatch
            , r = a.pending
            , i = t.memoizedState;
        if (r !== null) {
            a.pending = null;
            var n = r = r.next;
            do
                i = e(i, n.action),
                    n = n.next;
            while (n !== r);
            lt(i, t.memoizedState) || (ze = !0),
                t.memoizedState = i,
                t.baseQueue === null && (t.baseState = i),
                a.lastRenderedState = i
        }
        return [i, s]
    }
    function eu(e, t, a) {
        var s = Z
            , r = Se()
            , i = te;
        if (i) {
            if (a === void 0)
                throw Error(u(407));
            a = a()
        } else
            a = t();
        var n = !lt((ue || r).memoizedState, a);
        if (n && (r.memoizedState = a,
            ze = !0),
            r = r.queue,
            on(lu.bind(null, s, r, e), [e]),
            r.getSnapshot !== t || n || Ae !== null && Ae.memoizedState.tag & 1) {
            if (s.flags |= 2048,
                pl(9, {
                    destroy: void 0
                }, au.bind(null, s, r, a, t), null),
                xe === null)
                throw Error(u(349));
            i || (Lt & 127) !== 0 || tu(s, t, a)
        }
        return a
    }
    function tu(e, t, a) {
        e.flags |= 16384,
            e = {
                getSnapshot: t,
                value: a
            },
            t = Z.updateQueue,
            t === null ? (t = dr(),
                Z.updateQueue = t,
                t.stores = [e]) : (a = t.stores,
                    a === null ? t.stores = [e] : a.push(e))
    }
    function au(e, t, a, s) {
        t.value = a,
            t.getSnapshot = s,
            su(t) && ru(e)
    }
    function lu(e, t, a) {
        return a(function () {
            su(t) && ru(e)
        })
    }
    function su(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var a = t();
            return !lt(e, a)
        } catch {
            return !0
        }
    }
    function ru(e) {
        var t = Oa(e, 2);
        t !== null && Pe(t, e, 2)
    }
    function dn(e) {
        var t = Le();
        if (typeof e == "function") {
            var a = e;
            if (e = a(),
                La) {
                ea(!0);
                try {
                    a()
                } finally {
                    ea(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
            t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: e
            },
            t
    }
    function iu(e, t, a, s) {
        return e.baseState = a,
            nn(e, ue, typeof s == "function" ? s : Xt)
    }
    function of(e, t, a, s, r) {
        if (xr(e))
            throw Error(u(485));
        if (e = t.action,
            e !== null) {
            var i = {
                payload: r,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (n) {
                    i.listeners.push(n)
                }
            };
            S.T !== null ? a(!0) : i.isTransition = !1,
                s(i),
                a = t.pending,
                a === null ? (i.next = t.pending = i,
                    nu(t, i)) : (i.next = a.next,
                        t.pending = a.next = i)
        }
    }
    function nu(e, t) {
        var a = t.action
            , s = t.payload
            , r = e.state;
        if (t.isTransition) {
            var i = S.T
                , n = {};
            S.T = n;
            try {
                var c = a(r, s)
                    , o = S.S;
                o !== null && o(n, c),
                    cu(e, t, c)
            } catch (y) {
                un(e, t, y)
            } finally {
                i !== null && n.types !== null && (i.types = n.types),
                    S.T = i
            }
        } else
            try {
                i = a(r, s),
                    cu(e, t, i)
            } catch (y) {
                un(e, t, y)
            }
    }
    function cu(e, t, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function (s) {
            du(e, t, s)
        }, function (s) {
            return un(e, t, s)
        }) : du(e, t, a)
    }
    function du(e, t, a) {
        t.status = "fulfilled",
            t.value = a,
            uu(t),
            e.state = a,
            t = e.pending,
            t !== null && (a = t.next,
                a === t ? e.pending = null : (a = a.next,
                    t.next = a,
                    nu(e, a)))
    }
    function un(e, t, a) {
        var s = e.pending;
        if (e.pending = null,
            s !== null) {
            s = s.next;
            do
                t.status = "rejected",
                    t.reason = a,
                    uu(t),
                    t = t.next;
            while (t !== s)
        }
        e.action = null
    }
    function uu(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
                e[t])()
    }
    function ou(e, t) {
        return t
    }
    function mu(e, t) {
        if (te) {
            var a = xe.formState;
            if (a !== null) {
                e: {
                    var s = Z;
                    if (te) {
                        if (he) {
                            t: {
                                for (var r = he, i = bt; r.nodeType !== 8;) {
                                    if (!i) {
                                        r = null;
                                        break t
                                    }
                                    if (r = pt(r.nextSibling),
                                        r === null) {
                                        r = null;
                                        break t
                                    }
                                }
                                i = r.data,
                                    r = i === "F!" || i === "F" ? r : null
                            }
                            if (r) {
                                he = pt(r.nextSibling),
                                    s = r.data === "F!";
                                break e
                            }
                        }
                        ra(s)
                    }
                    s = !1
                }
                s && (t = a[0])
            }
        }
        return a = Le(),
            a.memoizedState = a.baseState = t,
            s = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ou,
                lastRenderedState: t
            },
            a.queue = s,
            a = Du.bind(null, Z, s),
            s.dispatch = a,
            s = dn(!1),
            i = gn.bind(null, Z, !1, s.queue),
            s = Le(),
            r = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            },
            s.queue = r,
            a = of.bind(null, Z, r, i, a),
            r.dispatch = a,
            s.memoizedState = e,
            [t, a, !1]
    }
    function fu(e) {
        var t = Se();
        return xu(t, ue, e)
    }
    function xu(e, t, a) {
        if (t = nn(e, t, ou)[0],
            e = or(Xt)[0],
            typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var s = ls(t)
            } catch (n) {
                throw n === xl ? tr : n
            }
        else
            s = t;
        t = Se();
        var r = t.queue
            , i = r.dispatch;
        return a !== t.memoizedState && (Z.flags |= 2048,
            pl(9, {
                destroy: void 0
            }, mf.bind(null, r, a), null)),
            [s, i, e]
    }
    function mf(e, t) {
        e.action = t
    }
    function hu(e) {
        var t = Se()
            , a = ue;
        if (a !== null)
            return xu(t, a, e);
        Se(),
            t = t.memoizedState,
            a = Se();
        var s = a.queue.dispatch;
        return a.memoizedState = e,
            [t, s, !1]
    }
    function pl(e, t, a, s) {
        return e = {
            tag: e,
            create: a,
            deps: s,
            inst: t,
            next: null
        },
            t = Z.updateQueue,
            t === null && (t = dr(),
                Z.updateQueue = t),
            a = t.lastEffect,
            a === null ? t.lastEffect = e.next = e : (s = a.next,
                a.next = e,
                e.next = s,
                t.lastEffect = e),
            e
    }
    function gu() {
        return Se().memoizedState
    }
    function mr(e, t, a, s) {
        var r = Le();
        Z.flags |= e,
            r.memoizedState = pl(1 | t, {
                destroy: void 0
            }, a, s === void 0 ? null : s)
    }
    function fr(e, t, a, s) {
        var r = Se();
        s = s === void 0 ? null : s;
        var i = r.memoizedState.inst;
        ue !== null && s !== null && en(s, ue.memoizedState.deps) ? r.memoizedState = pl(t, i, a, s) : (Z.flags |= e,
            r.memoizedState = pl(1 | t, i, a, s))
    }
    function bu(e, t) {
        mr(8390656, 8, e, t)
    }
    function on(e, t) {
        fr(2048, 8, e, t)
    }
    function ff(e) {
        Z.flags |= 4;
        var t = Z.updateQueue;
        if (t === null)
            t = dr(),
                Z.updateQueue = t,
                t.events = [e];
        else {
            var a = t.events;
            a === null ? t.events = [e] : a.push(e)
        }
    }
    function yu(e) {
        var t = Se().memoizedState;
        return ff({
            ref: t,
            nextImpl: e
        }),
            function () {
                if ((se & 2) !== 0)
                    throw Error(u(440));
                return t.impl.apply(void 0, arguments)
            }
    }
    function pu(e, t) {
        return fr(4, 2, e, t)
    }
    function vu(e, t) {
        return fr(4, 4, e, t)
    }
    function ju(e, t) {
        if (typeof t == "function") {
            e = e();
            var a = t(e);
            return function () {
                typeof a == "function" ? a() : t(null)
            }
        }
        if (t != null)
            return e = e(),
                t.current = e,
                function () {
                    t.current = null
                }
    }
    function Nu(e, t, a) {
        a = a != null ? a.concat([e]) : null,
            fr(4, 4, ju.bind(null, t, e), a)
    }
    function mn() { }
    function wu(e, t) {
        var a = Se();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        return t !== null && en(t, s[1]) ? s[0] : (a.memoizedState = [e, t],
            e)
    }
    function ku(e, t) {
        var a = Se();
        t = t === void 0 ? null : t;
        var s = a.memoizedState;
        if (t !== null && en(t, s[1]))
            return s[0];
        if (s = e(),
            La) {
            ea(!0);
            try {
                e()
            } finally {
                ea(!1)
            }
        }
        return a.memoizedState = [s, t],
            s
    }
    function fn(e, t, a) {
        return a === void 0 || (Lt & 1073741824) !== 0 && (I & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a,
            e = To(),
            Z.lanes |= e,
            xa |= e,
            a)
    }
    function Su(e, t, a, s) {
        return lt(a, t) ? a : gl.current !== null ? (e = fn(e, a, s),
            lt(e, t) || (ze = !0),
            e) : (Lt & 42) === 0 || (Lt & 1073741824) !== 0 && (I & 261930) === 0 ? (ze = !0,
                e.memoizedState = a) : (e = To(),
                    Z.lanes |= e,
                    xa |= e,
                    t)
    }
    function Tu(e, t, a, s, r) {
        var i = C.p;
        C.p = i !== 0 && 8 > i ? i : 8;
        var n = S.T
            , c = {};
        S.T = c,
            gn(e, !1, t, a);
        try {
            var o = r()
                , y = S.S;
            if (y !== null && y(c, o),
                o !== null && typeof o == "object" && typeof o.then == "function") {
                var k = cf(o, s);
                ss(e, t, k, dt(e))
            } else
                ss(e, t, s, dt(e))
        } catch (E) {
            ss(e, t, {
                then: function () { },
                status: "rejected",
                reason: E
            }, dt())
        } finally {
            C.p = i,
                n !== null && c.types !== null && (n.types = c.types),
                S.T = n
        }
    }
    function xf() { }
    function xn(e, t, a, s) {
        if (e.tag !== 5)
            throw Error(u(476));
        var r = Eu(e).queue;
        Tu(e, r, t, L, a === null ? xf : function () {
            return Au(e),
                a(s)
        }
        )
    }
    function Eu(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: L,
            baseState: L,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: L
            },
            next: null
        };
        var a = {};
        return t.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Xt,
                lastRenderedState: a
            },
            next: null
        },
            e.memoizedState = t,
            e = e.alternate,
            e !== null && (e.memoizedState = t),
            t
    }
    function Au(e) {
        var t = Eu(e);
        t.next === null && (t = e.alternate.memoizedState),
            ss(e, t.next.queue, {}, dt())
    }
    function hn() {
        return Re(js)
    }
    function zu() {
        return Se().memoizedState
    }
    function Mu() {
        return Se().memoizedState
    }
    function hf(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var a = dt();
                    e = ca(a);
                    var s = da(t, e, a);
                    s !== null && (Pe(s, t, a),
                        Pl(s, t, a)),
                        t = {
                            cache: Xi()
                        },
                        e.payload = t;
                    return
            }
            t = t.return
        }
    }
    function gf(e, t, a) {
        var s = dt();
        a = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            xr(e) ? Cu(t, a) : (a = Ci(e, t, a, s),
                a !== null && (Pe(a, e, s),
                    Ou(a, t, s)))
    }
    function Du(e, t, a) {
        var s = dt();
        ss(e, t, a, s)
    }
    function ss(e, t, a, s) {
        var r = {
            lane: s,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (xr(e))
            Cu(t, r);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
                i !== null))
                try {
                    var n = t.lastRenderedState
                        , c = i(n, a);
                    if (r.hasEagerState = !0,
                        r.eagerState = c,
                        lt(c, n))
                        return Js(e, t, r, 0),
                            xe === null && Ks(),
                            !1
                } catch { } finally { }
            if (a = Ci(e, t, r, s),
                a !== null)
                return Pe(a, e, s),
                    Ou(a, t, s),
                    !0
        }
        return !1
    }
    function gn(e, t, a, s) {
        if (s = {
            lane: 2,
            revertLane: Jn(),
            gesture: null,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
            xr(e)) {
            if (t)
                throw Error(u(479))
        } else
            t = Ci(e, a, s, 2),
                t !== null && Pe(t, e, 2)
    }
    function xr(e) {
        var t = e.alternate;
        return e === Z || t !== null && t === Z
    }
    function Cu(e, t) {
        bl = nr = !0;
        var a = e.pending;
        a === null ? t.next = t : (t.next = a.next,
            a.next = t),
            e.pending = t
    }
    function Ou(e, t, a) {
        if ((a & 4194048) !== 0) {
            var s = t.lanes;
            s &= e.pendingLanes,
                a |= s,
                t.lanes = a,
                Hc(e, a)
        }
    }
    var rs = {
        readContext: Re,
        use: ur,
        useCallback: ve,
        useContext: ve,
        useEffect: ve,
        useImperativeHandle: ve,
        useLayoutEffect: ve,
        useInsertionEffect: ve,
        useMemo: ve,
        useReducer: ve,
        useRef: ve,
        useState: ve,
        useDebugValue: ve,
        useDeferredValue: ve,
        useTransition: ve,
        useSyncExternalStore: ve,
        useId: ve,
        useHostTransitionStatus: ve,
        useFormState: ve,
        useActionState: ve,
        useOptimistic: ve,
        useMemoCache: ve,
        useCacheRefresh: ve
    };
    rs.useEffectEvent = ve;
    var Uu = {
        readContext: Re,
        use: ur,
        useCallback: function (e, t) {
            return Le().memoizedState = [e, t === void 0 ? null : t],
                e
        },
        useContext: Re,
        useEffect: bu,
        useImperativeHandle: function (e, t, a) {
            a = a != null ? a.concat([e]) : null,
                mr(4194308, 4, ju.bind(null, t, e), a)
        },
        useLayoutEffect: function (e, t) {
            return mr(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            mr(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var a = Le();
            t = t === void 0 ? null : t;
            var s = e();
            if (La) {
                ea(!0);
                try {
                    e()
                } finally {
                    ea(!1)
                }
            }
            return a.memoizedState = [s, t],
                s
        },
        useReducer: function (e, t, a) {
            var s = Le();
            if (a !== void 0) {
                var r = a(t);
                if (La) {
                    ea(!0);
                    try {
                        a(t)
                    } finally {
                        ea(!1)
                    }
                }
            } else
                r = t;
            return s.memoizedState = s.baseState = r,
                e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: r
                },
                s.queue = e,
                e = e.dispatch = gf.bind(null, Z, e),
                [s.memoizedState, e]
        },
        useRef: function (e) {
            var t = Le();
            return e = {
                current: e
            },
                t.memoizedState = e
        },
        useState: function (e) {
            e = dn(e);
            var t = e.queue
                , a = Du.bind(null, Z, t);
            return t.dispatch = a,
                [e.memoizedState, a]
        },
        useDebugValue: mn,
        useDeferredValue: function (e, t) {
            var a = Le();
            return fn(a, e, t)
        },
        useTransition: function () {
            var e = dn(!1);
            return e = Tu.bind(null, Z, e.queue, !0, !1),
                Le().memoizedState = e,
                [!1, e]
        },
        useSyncExternalStore: function (e, t, a) {
            var s = Z
                , r = Le();
            if (te) {
                if (a === void 0)
                    throw Error(u(407));
                a = a()
            } else {
                if (a = t(),
                    xe === null)
                    throw Error(u(349));
                (I & 127) !== 0 || tu(s, t, a)
            }
            r.memoizedState = a;
            var i = {
                value: a,
                getSnapshot: t
            };
            return r.queue = i,
                bu(lu.bind(null, s, i, e), [e]),
                s.flags |= 2048,
                pl(9, {
                    destroy: void 0
                }, au.bind(null, s, i, a, t), null),
                a
        },
        useId: function () {
            var e = Le()
                , t = xe.identifierPrefix;
            if (te) {
                var a = Dt
                    , s = Mt;
                a = (s & ~(1 << 32 - at(s) - 1)).toString(32) + a,
                    t = "_" + t + "R_" + a,
                    a = cr++,
                    0 < a && (t += "H" + a.toString(32)),
                    t += "_"
            } else
                a = df++,
                    t = "_" + t + "r_" + a.toString(32) + "_";
            return e.memoizedState = t
        },
        useHostTransitionStatus: hn,
        useFormState: mu,
        useActionState: mu,
        useOptimistic: function (e) {
            var t = Le();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
                t = gn.bind(null, Z, !0, a),
                a.dispatch = t,
                [e, t]
        },
        useMemoCache: rn,
        useCacheRefresh: function () {
            return Le().memoizedState = hf.bind(null, Z)
        },
        useEffectEvent: function (e) {
            var t = Le()
                , a = {
                    impl: e
                };
            return t.memoizedState = a,
                function () {
                    if ((se & 2) !== 0)
                        throw Error(u(440));
                    return a.impl.apply(void 0, arguments)
                }
        }
    }
        , bn = {
            readContext: Re,
            use: ur,
            useCallback: wu,
            useContext: Re,
            useEffect: on,
            useImperativeHandle: Nu,
            useInsertionEffect: pu,
            useLayoutEffect: vu,
            useMemo: ku,
            useReducer: or,
            useRef: gu,
            useState: function () {
                return or(Xt)
            },
            useDebugValue: mn,
            useDeferredValue: function (e, t) {
                var a = Se();
                return Su(a, ue.memoizedState, e, t)
            },
            useTransition: function () {
                var e = or(Xt)[0]
                    , t = Se().memoizedState;
                return [typeof e == "boolean" ? e : ls(e), t]
            },
            useSyncExternalStore: eu,
            useId: zu,
            useHostTransitionStatus: hn,
            useFormState: fu,
            useActionState: fu,
            useOptimistic: function (e, t) {
                var a = Se();
                return iu(a, ue, e, t)
            },
            useMemoCache: rn,
            useCacheRefresh: Mu
        };
    bn.useEffectEvent = yu;
    var _u = {
        readContext: Re,
        use: ur,
        useCallback: wu,
        useContext: Re,
        useEffect: on,
        useImperativeHandle: Nu,
        useInsertionEffect: pu,
        useLayoutEffect: vu,
        useMemo: ku,
        useReducer: cn,
        useRef: gu,
        useState: function () {
            return cn(Xt)
        },
        useDebugValue: mn,
        useDeferredValue: function (e, t) {
            var a = Se();
            return ue === null ? fn(a, e, t) : Su(a, ue.memoizedState, e, t)
        },
        useTransition: function () {
            var e = cn(Xt)[0]
                , t = Se().memoizedState;
            return [typeof e == "boolean" ? e : ls(e), t]
        },
        useSyncExternalStore: eu,
        useId: zu,
        useHostTransitionStatus: hn,
        useFormState: hu,
        useActionState: hu,
        useOptimistic: function (e, t) {
            var a = Se();
            return ue !== null ? iu(a, ue, e, t) : (a.baseState = e,
                [e, a.queue.dispatch])
        },
        useMemoCache: rn,
        useCacheRefresh: Mu
    };
    _u.useEffectEvent = yu;
    function yn(e, t, a, s) {
        t = e.memoizedState,
            a = a(s, t),
            a = a == null ? t : M({}, t, a),
            e.memoizedState = a,
            e.lanes === 0 && (e.updateQueue.baseState = a)
    }
    var pn = {
        enqueueSetState: function (e, t, a) {
            e = e._reactInternals;
            var s = dt()
                , r = ca(s);
            r.payload = t,
                a != null && (r.callback = a),
                t = da(e, r, s),
                t !== null && (Pe(t, e, s),
                    Pl(t, e, s))
        },
        enqueueReplaceState: function (e, t, a) {
            e = e._reactInternals;
            var s = dt()
                , r = ca(s);
            r.tag = 1,
                r.payload = t,
                a != null && (r.callback = a),
                t = da(e, r, s),
                t !== null && (Pe(t, e, s),
                    Pl(t, e, s))
        },
        enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var a = dt()
                , s = ca(a);
            s.tag = 2,
                t != null && (s.callback = t),
                t = da(e, s, a),
                t !== null && (Pe(t, e, a),
                    Pl(t, e, a))
        }
    };
    function Ru(e, t, a, s, r, i, n) {
        return e = e.stateNode,
            typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, i, n) : t.prototype && t.prototype.isPureReactComponent ? !Vl(a, s) || !Vl(r, i) : !0
    }
    function Bu(e, t, a, s) {
        e = t.state,
            typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, s),
            typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, s),
            t.state !== e && pn.enqueueReplaceState(t, t.state, null)
    }
    function Xa(e, t) {
        var a = t;
        if ("ref" in t) {
            a = {};
            for (var s in t)
                s !== "ref" && (a[s] = t[s])
        }
        if (e = e.defaultProps) {
            a === t && (a = M({}, a));
            for (var r in e)
                a[r] === void 0 && (a[r] = e[r])
        }
        return a
    }
    function Hu(e) {
        Zs(e)
    }
    function qu(e) {
        console.error(e)
    }
    function Yu(e) {
        Zs(e)
    }
    function hr(e, t) {
        try {
            var a = e.onUncaughtError;
            a(t.value, {
                componentStack: t.stack
            })
        } catch (s) {
            setTimeout(function () {
                throw s
            })
        }
    }
    function Gu(e, t, a) {
        try {
            var s = e.onCaughtError;
            s(a.value, {
                componentStack: a.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (r) {
            setTimeout(function () {
                throw r
            })
        }
    }
    function vn(e, t, a) {
        return a = ca(a),
            a.tag = 3,
            a.payload = {
                element: null
            },
            a.callback = function () {
                hr(e, t)
            }
            ,
            a
    }
    function Lu(e) {
        return e = ca(e),
            e.tag = 3,
            e
    }
    function Xu(e, t, a, s) {
        var r = a.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var i = s.value;
            e.payload = function () {
                return r(i)
            }
                ,
                e.callback = function () {
                    Gu(t, a, s)
                }
        }
        var n = a.stateNode;
        n !== null && typeof n.componentDidCatch == "function" && (e.callback = function () {
            Gu(t, a, s),
                typeof r != "function" && (ha === null ? ha = new Set([this]) : ha.add(this));
            var c = s.stack;
            this.componentDidCatch(s.value, {
                componentStack: c !== null ? c : ""
            })
        }
        )
    }
    function bf(e, t, a, s, r) {
        if (a.flags |= 32768,
            s !== null && typeof s == "object" && typeof s.then == "function") {
            if (t = a.alternate,
                t !== null && ol(t, a, r, !0),
                a = rt.current,
                a !== null) {
                switch (a.tag) {
                    case 31:
                    case 13:
                        return yt === null ? Er() : a.alternate === null && je === 0 && (je = 3),
                            a.flags &= -257,
                            a.flags |= 65536,
                            a.lanes = r,
                            s === ar ? a.flags |= 16384 : (t = a.updateQueue,
                                t === null ? a.updateQueue = new Set([s]) : t.add(s),
                                Vn(e, s, r)),
                            !1;
                    case 22:
                        return a.flags |= 65536,
                            s === ar ? a.flags |= 16384 : (t = a.updateQueue,
                                t === null ? (t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([s])
                                },
                                    a.updateQueue = t) : (a = t.retryQueue,
                                        a === null ? t.retryQueue = new Set([s]) : a.add(s)),
                                Vn(e, s, r)),
                            !1
                }
                throw Error(u(435, a.tag))
            }
            return Vn(e, s, r),
                Er(),
                !1
        }
        if (te)
            return t = rt.current,
                t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                    t.flags |= 65536,
                    t.lanes = r,
                    s !== Hi && (e = Error(u(422), {
                        cause: s
                    }),
                        Jl(xt(e, a)))) : (s !== Hi && (t = Error(u(423), {
                            cause: s
                        }),
                            Jl(xt(t, a))),
                            e = e.current.alternate,
                            e.flags |= 65536,
                            r &= -r,
                            e.lanes |= r,
                            s = xt(s, a),
                            r = vn(e.stateNode, s, r),
                            Fi(e, r),
                            je !== 4 && (je = 2)),
                !1;
        var i = Error(u(520), {
            cause: s
        });
        if (i = xt(i, a),
            fs === null ? fs = [i] : fs.push(i),
            je !== 4 && (je = 2),
            t === null)
            return !0;
        s = xt(s, a),
            a = t;
        do {
            switch (a.tag) {
                case 3:
                    return a.flags |= 65536,
                        e = r & -r,
                        a.lanes |= e,
                        e = vn(a.stateNode, s, e),
                        Fi(a, e),
                        !1;
                case 1:
                    if (t = a.type,
                        i = a.stateNode,
                        (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ha === null || !ha.has(i))))
                        return a.flags |= 65536,
                            r &= -r,
                            a.lanes |= r,
                            r = Lu(r),
                            Xu(r, e, a, s),
                            Fi(a, r),
                            !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var jn = Error(u(461))
        , ze = !1;
    function Be(e, t, a, s) {
        t.child = e === null ? Kd(t, null, a, s) : Ga(t, e.child, a, s)
    }
    function Qu(e, t, a, s, r) {
        a = a.render;
        var i = t.ref;
        if ("ref" in s) {
            var n = {};
            for (var c in s)
                c !== "ref" && (n[c] = s[c])
        } else
            n = s;
        return Ba(t),
            s = tn(e, t, a, n, i, r),
            c = an(),
            e !== null && !ze ? (ln(e, t, r),
                Qt(e, t, r)) : (te && c && Ri(t),
                    t.flags |= 1,
                    Be(e, t, s, r),
                    t.child)
    }
    function Vu(e, t, a, s, r) {
        if (e === null) {
            var i = a.type;
            return typeof i == "function" && !Oi(i) && i.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
                t.type = i,
                Zu(e, t, i, s, r)) : (e = $s(a.type, null, s, t, t.mode, r),
                    e.ref = t.ref,
                    e.return = t,
                    t.child = e)
        }
        if (i = e.child,
            !zn(e, r)) {
            var n = i.memoizedProps;
            if (a = a.compare,
                a = a !== null ? a : Vl,
                a(n, s) && e.ref === t.ref)
                return Qt(e, t, r)
        }
        return t.flags |= 1,
            e = Ht(i, s),
            e.ref = t.ref,
            e.return = t,
            t.child = e
    }
    function Zu(e, t, a, s, r) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (Vl(i, s) && e.ref === t.ref)
                if (ze = !1,
                    t.pendingProps = s = i,
                    zn(e, r))
                    (e.flags & 131072) !== 0 && (ze = !0);
                else
                    return t.lanes = e.lanes,
                        Qt(e, t, r)
        }
        return Nn(e, t, a, s, r)
    }
    function Ku(e, t, a, s) {
        var r = s.children
            , i = e !== null ? e.memoizedState : null;
        if (e === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
            s.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = i !== null ? i.baseLanes | a : a,
                    e !== null) {
                    for (s = t.child = e.child,
                        r = 0; s !== null;)
                        r = r | s.lanes | s.childLanes,
                            s = s.sibling;
                    s = r & ~i
                } else
                    s = 0,
                        t.child = null;
                return Ju(e, t, i, a, s)
            }
            if ((a & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                    e !== null && er(t, i !== null ? i.cachePool : null),
                    i !== null ? $d(t, i) : Wi(),
                    Wd(t);
            else
                return s = t.lanes = 536870912,
                    Ju(e, t, i !== null ? i.baseLanes | a : a, a, s)
        } else
            i !== null ? (er(t, i.cachePool),
                $d(t, i),
                oa(),
                t.memoizedState = null) : (e !== null && er(t, null),
                    Wi(),
                    oa());
        return Be(e, t, r, a),
            t.child
    }
    function is(e, t) {
        return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
            t.sibling
    }
    function Ju(e, t, a, s, r) {
        var i = Vi();
        return i = i === null ? null : {
            parent: Ee._currentValue,
            pool: i
        },
            t.memoizedState = {
                baseLanes: a,
                cachePool: i
            },
            e !== null && er(t, null),
            Wi(),
            Wd(t),
            e !== null && ol(e, t, s, !0),
            t.childLanes = r,
            null
    }
    function gr(e, t) {
        return t = yr({
            mode: t.mode,
            children: t.children
        }, e.mode),
            t.ref = e.ref,
            e.child = t,
            t.return = e,
            t
    }
    function Fu(e, t, a) {
        return Ga(t, e.child, null, a),
            e = gr(t, t.pendingProps),
            e.flags |= 2,
            it(t),
            t.memoizedState = null,
            e
    }
    function yf(e, t, a) {
        var s = t.pendingProps
            , r = (t.flags & 128) !== 0;
        if (t.flags &= -129,
            e === null) {
            if (te) {
                if (s.mode === "hidden")
                    return e = gr(t, s),
                        t.lanes = 536870912,
                        is(null, e);
                if (Pi(t),
                    (e = he) ? (e = c0(e, bt),
                        e = e !== null && e.data === "&" ? e : null,
                        e !== null && (t.memoizedState = {
                            dehydrated: e,
                            treeContext: la !== null ? {
                                id: Mt,
                                overflow: Dt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                            a = Cd(e),
                            a.return = t,
                            t.child = a,
                            _e = t,
                            he = null)) : e = null,
                    e === null)
                    throw ra(t);
                return t.lanes = 536870912,
                    null
            }
            return gr(t, s)
        }
        var i = e.memoizedState;
        if (i !== null) {
            var n = i.dehydrated;
            if (Pi(t),
                r)
                if (t.flags & 256)
                    t.flags &= -257,
                        t = Fu(e, t, a);
                else if (t.memoizedState !== null)
                    t.child = e.child,
                        t.flags |= 128,
                        t = null;
                else
                    throw Error(u(558));
            else if (ze || ol(e, t, a, !1),
                r = (a & e.childLanes) !== 0,
                ze || r) {
                if (s = xe,
                    s !== null && (n = qc(s, a),
                        n !== 0 && n !== i.retryLane))
                    throw i.retryLane = n,
                    Oa(e, n),
                    Pe(s, e, n),
                    jn;
                Er(),
                    t = Fu(e, t, a)
            } else
                e = i.treeContext,
                    he = pt(n.nextSibling),
                    _e = t,
                    te = !0,
                    sa = null,
                    bt = !1,
                    e !== null && _d(t, e),
                    t = gr(t, s),
                    t.flags |= 4096;
            return t
        }
        return e = Ht(e.child, {
            mode: s.mode,
            children: s.children
        }),
            e.ref = t.ref,
            t.child = e,
            e.return = t,
            e
    }
    function br(e, t) {
        var a = t.ref;
        if (a === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(u(284));
            (e === null || e.ref !== a) && (t.flags |= 4194816)
        }
    }
    function Nn(e, t, a, s, r) {
        return Ba(t),
            a = tn(e, t, a, s, void 0, r),
            s = an(),
            e !== null && !ze ? (ln(e, t, r),
                Qt(e, t, r)) : (te && s && Ri(t),
                    t.flags |= 1,
                    Be(e, t, a, r),
                    t.child)
    }
    function $u(e, t, a, s, r, i) {
        return Ba(t),
            t.updateQueue = null,
            a = Pd(t, s, a, r),
            Id(e),
            s = an(),
            e !== null && !ze ? (ln(e, t, i),
                Qt(e, t, i)) : (te && s && Ri(t),
                    t.flags |= 1,
                    Be(e, t, a, i),
                    t.child)
    }
    function Wu(e, t, a, s, r) {
        if (Ba(t),
            t.stateNode === null) {
            var i = nl
                , n = a.contextType;
            typeof n == "object" && n !== null && (i = Re(n)),
                i = new a(s, i),
                t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
                i.updater = pn,
                t.stateNode = i,
                i._reactInternals = t,
                i = t.stateNode,
                i.props = s,
                i.state = t.memoizedState,
                i.refs = {},
                Ki(t),
                n = a.contextType,
                i.context = typeof n == "object" && n !== null ? Re(n) : nl,
                i.state = t.memoizedState,
                n = a.getDerivedStateFromProps,
                typeof n == "function" && (yn(t, a, n, s),
                    i.state = t.memoizedState),
                typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (n = i.state,
                    typeof i.componentWillMount == "function" && i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
                    n !== i.state && pn.enqueueReplaceState(i, i.state, null),
                    ts(t, s, i, r),
                    es(),
                    i.state = t.memoizedState),
                typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                s = !0
        } else if (e === null) {
            i = t.stateNode;
            var c = t.memoizedProps
                , o = Xa(a, c);
            i.props = o;
            var y = i.context
                , k = a.contextType;
            n = nl,
                typeof k == "object" && k !== null && (n = Re(k));
            var E = a.getDerivedStateFromProps;
            k = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function",
                c = t.pendingProps !== c,
                k || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c || y !== n) && Bu(t, i, s, n),
                na = !1;
            var p = t.memoizedState;
            i.state = p,
                ts(t, s, i, r),
                es(),
                y = t.memoizedState,
                c || p !== y || na ? (typeof E == "function" && (yn(t, a, E, s),
                    y = t.memoizedState),
                    (o = na || Ru(t, a, o, s, p, y, n)) ? (k || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
                        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                            t.memoizedProps = s,
                            t.memoizedState = y),
                    i.props = s,
                    i.state = y,
                    i.context = n,
                    s = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
                        s = !1)
        } else {
            i = t.stateNode,
                Ji(e, t),
                n = t.memoizedProps,
                k = Xa(a, n),
                i.props = k,
                E = t.pendingProps,
                p = i.context,
                y = a.contextType,
                o = nl,
                typeof y == "object" && y !== null && (o = Re(y)),
                c = a.getDerivedStateFromProps,
                (y = typeof c == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (n !== E || p !== o) && Bu(t, i, s, o),
                na = !1,
                p = t.memoizedState,
                i.state = p,
                ts(t, s, i, r),
                es();
            var j = t.memoizedState;
            n !== E || p !== j || na || e !== null && e.dependencies !== null && Is(e.dependencies) ? (typeof c == "function" && (yn(t, a, c, s),
                j = t.memoizedState),
                (k = na || Ru(t, a, k, s, p, j, o) || e !== null && e.dependencies !== null && Is(e.dependencies)) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(s, j, o),
                    typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(s, j, o)),
                    typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || n === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
                        typeof i.getSnapshotBeforeUpdate != "function" || n === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
                        t.memoizedProps = s,
                        t.memoizedState = j),
                i.props = s,
                i.state = j,
                i.context = o,
                s = k) : (typeof i.componentDidUpdate != "function" || n === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != "function" || n === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
                    s = !1)
        }
        return i = s,
            br(e, t),
            s = (t.flags & 128) !== 0,
            i || s ? (i = t.stateNode,
                a = s && typeof a.getDerivedStateFromError != "function" ? null : i.render(),
                t.flags |= 1,
                e !== null && s ? (t.child = Ga(t, e.child, null, r),
                    t.child = Ga(t, null, a, r)) : Be(e, t, a, r),
                t.memoizedState = i.state,
                e = t.child) : e = Qt(e, t, r),
            e
    }
    function Iu(e, t, a, s) {
        return _a(),
            t.flags |= 256,
            Be(e, t, a, s),
            t.child
    }
    var wn = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function kn(e) {
        return {
            baseLanes: e,
            cachePool: Gd()
        }
    }
    function Sn(e, t, a) {
        return e = e !== null ? e.childLanes & ~a : 0,
            t && (e |= ct),
            e
    }
    function Pu(e, t, a) {
        var s = t.pendingProps, r = !1, i = (t.flags & 128) !== 0, n;
        if ((n = i) || (n = e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0),
            n && (r = !0,
                t.flags &= -129),
            n = (t.flags & 32) !== 0,
            t.flags &= -33,
            e === null) {
            if (te) {
                if (r ? ua(t) : oa(),
                    (e = he) ? (e = c0(e, bt),
                        e = e !== null && e.data !== "&" ? e : null,
                        e !== null && (t.memoizedState = {
                            dehydrated: e,
                            treeContext: la !== null ? {
                                id: Mt,
                                overflow: Dt
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                            a = Cd(e),
                            a.return = t,
                            t.child = a,
                            _e = t,
                            he = null)) : e = null,
                    e === null)
                    throw ra(t);
                return nc(e) ? t.lanes = 32 : t.lanes = 536870912,
                    null
            }
            var c = s.children;
            return s = s.fallback,
                r ? (oa(),
                    r = t.mode,
                    c = yr({
                        mode: "hidden",
                        children: c
                    }, r),
                    s = Ua(s, r, a, null),
                    c.return = t,
                    s.return = t,
                    c.sibling = s,
                    t.child = c,
                    s = t.child,
                    s.memoizedState = kn(a),
                    s.childLanes = Sn(e, n, a),
                    t.memoizedState = wn,
                    is(null, s)) : (ua(t),
                        Tn(t, c))
        }
        var o = e.memoizedState;
        if (o !== null && (c = o.dehydrated,
            c !== null)) {
            if (i)
                t.flags & 256 ? (ua(t),
                    t.flags &= -257,
                    t = En(e, t, a)) : t.memoizedState !== null ? (oa(),
                        t.child = e.child,
                        t.flags |= 128,
                        t = null) : (oa(),
                            c = s.fallback,
                            r = t.mode,
                            s = yr({
                                mode: "visible",
                                children: s.children
                            }, r),
                            c = Ua(c, r, a, null),
                            c.flags |= 2,
                            s.return = t,
                            c.return = t,
                            s.sibling = c,
                            t.child = s,
                            Ga(t, e.child, null, a),
                            s = t.child,
                            s.memoizedState = kn(a),
                            s.childLanes = Sn(e, n, a),
                            t.memoizedState = wn,
                            t = is(null, s));
            else if (ua(t),
                nc(c)) {
                if (n = c.nextSibling && c.nextSibling.dataset,
                    n)
                    var y = n.dgst;
                n = y,
                    s = Error(u(419)),
                    s.stack = "",
                    s.digest = n,
                    Jl({
                        value: s,
                        source: null,
                        stack: null
                    }),
                    t = En(e, t, a)
            } else if (ze || ol(e, t, a, !1),
                n = (a & e.childLanes) !== 0,
                ze || n) {
                if (n = xe,
                    n !== null && (s = qc(n, a),
                        s !== 0 && s !== o.retryLane))
                    throw o.retryLane = s,
                    Oa(e, s),
                    Pe(n, e, s),
                    jn;
                ic(c) || Er(),
                    t = En(e, t, a)
            } else
                ic(c) ? (t.flags |= 192,
                    t.child = e.child,
                    t = null) : (e = o.treeContext,
                        he = pt(c.nextSibling),
                        _e = t,
                        te = !0,
                        sa = null,
                        bt = !1,
                        e !== null && _d(t, e),
                        t = Tn(t, s.children),
                        t.flags |= 4096);
            return t
        }
        return r ? (oa(),
            c = s.fallback,
            r = t.mode,
            o = e.child,
            y = o.sibling,
            s = Ht(o, {
                mode: "hidden",
                children: s.children
            }),
            s.subtreeFlags = o.subtreeFlags & 65011712,
            y !== null ? c = Ht(y, c) : (c = Ua(c, r, a, null),
                c.flags |= 2),
            c.return = t,
            s.return = t,
            s.sibling = c,
            t.child = s,
            is(null, s),
            s = t.child,
            c = e.child.memoizedState,
            c === null ? c = kn(a) : (r = c.cachePool,
                r !== null ? (o = Ee._currentValue,
                    r = r.parent !== o ? {
                        parent: o,
                        pool: o
                    } : r) : r = Gd(),
                c = {
                    baseLanes: c.baseLanes | a,
                    cachePool: r
                }),
            s.memoizedState = c,
            s.childLanes = Sn(e, n, a),
            t.memoizedState = wn,
            is(e.child, s)) : (ua(t),
                a = e.child,
                e = a.sibling,
                a = Ht(a, {
                    mode: "visible",
                    children: s.children
                }),
                a.return = t,
                a.sibling = null,
                e !== null && (n = t.deletions,
                    n === null ? (t.deletions = [e],
                        t.flags |= 16) : n.push(e)),
                t.child = a,
                t.memoizedState = null,
                a)
    }
    function Tn(e, t) {
        return t = yr({
            mode: "visible",
            children: t
        }, e.mode),
            t.return = e,
            e.child = t
    }
    function yr(e, t) {
        return e = st(22, e, null, t),
            e.lanes = 0,
            e
    }
    function En(e, t, a) {
        return Ga(t, e.child, null, a),
            e = Tn(t, t.pendingProps.children),
            e.flags |= 2,
            t.memoizedState = null,
            e
    }
    function eo(e, t, a) {
        e.lanes |= t;
        var s = e.alternate;
        s !== null && (s.lanes |= t),
            Gi(e.return, t, a)
    }
    function An(e, t, a, s, r, i) {
        var n = e.memoizedState;
        n === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: s,
            tail: a,
            tailMode: r,
            treeForkCount: i
        } : (n.isBackwards = t,
            n.rendering = null,
            n.renderingStartTime = 0,
            n.last = s,
            n.tail = a,
            n.tailMode = r,
            n.treeForkCount = i)
    }
    function to(e, t, a) {
        var s = t.pendingProps
            , r = s.revealOrder
            , i = s.tail;
        s = s.children;
        var n = ke.current
            , c = (n & 2) !== 0;
        if (c ? (n = n & 1 | 2,
            t.flags |= 128) : n &= 1,
            O(ke, n),
            Be(e, t, s, a),
            s = te ? Kl : 0,
            !c && e !== null && (e.flags & 128) !== 0)
            e: for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && eo(e, a, t);
                else if (e.tag === 19)
                    eo(e, a, t);
                else if (e.child !== null) {
                    e.child.return = e,
                        e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                    e = e.sibling
            }
        switch (r) {
            case "forwards":
                for (a = t.child,
                    r = null; a !== null;)
                    e = a.alternate,
                        e !== null && ir(e) === null && (r = a),
                        a = a.sibling;
                a = r,
                    a === null ? (r = t.child,
                        t.child = null) : (r = a.sibling,
                            a.sibling = null),
                    An(t, !1, r, a, i, s);
                break;
            case "backwards":
            case "unstable_legacy-backwards":
                for (a = null,
                    r = t.child,
                    t.child = null; r !== null;) {
                    if (e = r.alternate,
                        e !== null && ir(e) === null) {
                        t.child = r;
                        break
                    }
                    e = r.sibling,
                        r.sibling = a,
                        a = r,
                        r = e
                }
                An(t, !0, a, null, i, s);
                break;
            case "together":
                An(t, !1, null, null, void 0, s);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }
    function Qt(e, t, a) {
        if (e !== null && (t.dependencies = e.dependencies),
            xa |= t.lanes,
            (a & t.childLanes) === 0)
            if (e !== null) {
                if (ol(e, t, a, !1),
                    (a & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(u(153));
        if (t.child !== null) {
            for (e = t.child,
                a = Ht(e, e.pendingProps),
                t.child = a,
                a.return = t; e.sibling !== null;)
                e = e.sibling,
                    a = a.sibling = Ht(e, e.pendingProps),
                    a.return = t;
            a.sibling = null
        }
        return t.child
    }
    function zn(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
            !!(e !== null && Is(e)))
    }
    function pf(e, t, a) {
        switch (t.tag) {
            case 3:
                Ge(t, t.stateNode.containerInfo),
                    ia(t, Ee, e.memoizedState.cache),
                    _a();
                break;
            case 27:
            case 5:
                Cl(t);
                break;
            case 4:
                Ge(t, t.stateNode.containerInfo);
                break;
            case 10:
                ia(t, t.type, t.memoizedProps.value);
                break;
            case 31:
                if (t.memoizedState !== null)
                    return t.flags |= 128,
                        Pi(t),
                        null;
                break;
            case 13:
                var s = t.memoizedState;
                if (s !== null)
                    return s.dehydrated !== null ? (ua(t),
                        t.flags |= 128,
                        null) : (a & t.child.childLanes) !== 0 ? Pu(e, t, a) : (ua(t),
                            e = Qt(e, t, a),
                            e !== null ? e.sibling : null);
                ua(t);
                break;
            case 19:
                var r = (e.flags & 128) !== 0;
                if (s = (a & t.childLanes) !== 0,
                    s || (ol(e, t, a, !1),
                        s = (a & t.childLanes) !== 0),
                    r) {
                    if (s)
                        return to(e, t, a);
                    t.flags |= 128
                }
                if (r = t.memoizedState,
                    r !== null && (r.rendering = null,
                        r.tail = null,
                        r.lastEffect = null),
                    O(ke, ke.current),
                    s)
                    break;
                return null;
            case 22:
                return t.lanes = 0,
                    Ku(e, t, a, t.pendingProps);
            case 24:
                ia(t, Ee, e.memoizedState.cache)
        }
        return Qt(e, t, a)
    }
    function ao(e, t, a) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                ze = !0;
            else {
                if (!zn(e, a) && (t.flags & 128) === 0)
                    return ze = !1,
                        pf(e, t, a);
                ze = (e.flags & 131072) !== 0
            }
        else
            ze = !1,
                te && (t.flags & 1048576) !== 0 && Ud(t, Kl, t.index);
        switch (t.lanes = 0,
        t.tag) {
            case 16:
                e: {
                    var s = t.pendingProps;
                    if (e = qa(t.elementType),
                        t.type = e,
                        typeof e == "function")
                        Oi(e) ? (s = Xa(e, s),
                            t.tag = 1,
                            t = Wu(null, t, e, s, a)) : (t.tag = 0,
                                t = Nn(null, t, e, s, a));
                    else {
                        if (e != null) {
                            var r = e.$$typeof;
                            if (r === ut) {
                                t.tag = 11,
                                    t = Qu(null, t, e, s, a);
                                break e
                            } else if (r === ee) {
                                t.tag = 14,
                                    t = Vu(null, t, e, s, a);
                                break e
                            }
                        }
                        throw t = Ut(e) || e,
                        Error(u(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Nn(e, t, t.type, t.pendingProps, a);
            case 1:
                return s = t.type,
                    r = Xa(s, t.pendingProps),
                    Wu(e, t, s, r, a);
            case 3:
                e: {
                    if (Ge(t, t.stateNode.containerInfo),
                        e === null)
                        throw Error(u(387));
                    s = t.pendingProps;
                    var i = t.memoizedState;
                    r = i.element,
                        Ji(e, t),
                        ts(t, s, null, a);
                    var n = t.memoizedState;
                    if (s = n.cache,
                        ia(t, Ee, s),
                        s !== i.cache && Li(t, [Ee], a, !0),
                        es(),
                        s = n.element,
                        i.isDehydrated)
                        if (i = {
                            element: s,
                            isDehydrated: !1,
                            cache: n.cache
                        },
                            t.updateQueue.baseState = i,
                            t.memoizedState = i,
                            t.flags & 256) {
                            t = Iu(e, t, s, a);
                            break e
                        } else if (s !== r) {
                            r = xt(Error(u(424)), t),
                                Jl(r),
                                t = Iu(e, t, s, a);
                            break e
                        } else {
                            switch (e = t.stateNode.containerInfo,
                            e.nodeType) {
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                            }
                            for (he = pt(e.firstChild),
                                _e = t,
                                te = !0,
                                sa = null,
                                bt = !0,
                                a = Kd(t, null, s, a),
                                t.child = a; a;)
                                a.flags = a.flags & -3 | 4096,
                                    a = a.sibling
                        }
                    else {
                        if (_a(),
                            s === r) {
                            t = Qt(e, t, a);
                            break e
                        }
                        Be(e, t, s, a)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return br(e, t),
                    e === null ? (a = x0(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : te || (a = t.type,
                        e = t.pendingProps,
                        s = Ur(J.current).createElement(a),
                        s[Ue] = t,
                        s[Ke] = e,
                        He(s, a, e),
                        Ce(s),
                        t.stateNode = s) : t.memoizedState = x0(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                    null;
            case 27:
                return Cl(t),
                    e === null && te && (s = t.stateNode = o0(t.type, t.pendingProps, J.current),
                        _e = t,
                        bt = !0,
                        r = he,
                        pa(t.type) ? (cc = r,
                            he = pt(s.firstChild)) : he = r),
                    Be(e, t, t.pendingProps.children, a),
                    br(e, t),
                    e === null && (t.flags |= 4194304),
                    t.child;
            case 5:
                return e === null && te && ((r = s = he) && (s = Ff(s, t.type, t.pendingProps, bt),
                    s !== null ? (t.stateNode = s,
                        _e = t,
                        he = pt(s.firstChild),
                        bt = !1,
                        r = !0) : r = !1),
                    r || ra(t)),
                    Cl(t),
                    r = t.type,
                    i = t.pendingProps,
                    n = e !== null ? e.memoizedProps : null,
                    s = i.children,
                    lc(r, i) ? s = null : n !== null && lc(r, n) && (t.flags |= 32),
                    t.memoizedState !== null && (r = tn(e, t, uf, null, null, a),
                        js._currentValue = r),
                    br(e, t),
                    Be(e, t, s, a),
                    t.child;
            case 6:
                return e === null && te && ((e = a = he) && (a = $f(a, t.pendingProps, bt),
                    a !== null ? (t.stateNode = a,
                        _e = t,
                        he = null,
                        e = !0) : e = !1),
                    e || ra(t)),
                    null;
            case 13:
                return Pu(e, t, a);
            case 4:
                return Ge(t, t.stateNode.containerInfo),
                    s = t.pendingProps,
                    e === null ? t.child = Ga(t, null, s, a) : Be(e, t, s, a),
                    t.child;
            case 11:
                return Qu(e, t, t.type, t.pendingProps, a);
            case 7:
                return Be(e, t, t.pendingProps, a),
                    t.child;
            case 8:
                return Be(e, t, t.pendingProps.children, a),
                    t.child;
            case 12:
                return Be(e, t, t.pendingProps.children, a),
                    t.child;
            case 10:
                return s = t.pendingProps,
                    ia(t, t.type, s.value),
                    Be(e, t, s.children, a),
                    t.child;
            case 9:
                return r = t.type._context,
                    s = t.pendingProps.children,
                    Ba(t),
                    r = Re(r),
                    s = s(r),
                    t.flags |= 1,
                    Be(e, t, s, a),
                    t.child;
            case 14:
                return Vu(e, t, t.type, t.pendingProps, a);
            case 15:
                return Zu(e, t, t.type, t.pendingProps, a);
            case 19:
                return to(e, t, a);
            case 31:
                return yf(e, t, a);
            case 22:
                return Ku(e, t, a, t.pendingProps);
            case 24:
                return Ba(t),
                    s = Re(Ee),
                    e === null ? (r = Vi(),
                        r === null && (r = xe,
                            i = Xi(),
                            r.pooledCache = i,
                            i.refCount++,
                            i !== null && (r.pooledCacheLanes |= a),
                            r = i),
                        t.memoizedState = {
                            parent: s,
                            cache: r
                        },
                        Ki(t),
                        ia(t, Ee, r)) : ((e.lanes & a) !== 0 && (Ji(e, t),
                            ts(t, null, null, a),
                            es()),
                            r = e.memoizedState,
                            i = t.memoizedState,
                            r.parent !== s ? (r = {
                                parent: s,
                                cache: s
                            },
                                t.memoizedState = r,
                                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = r),
                                ia(t, Ee, s)) : (s = i.cache,
                                    ia(t, Ee, s),
                                    s !== r.cache && Li(t, [Ee], a, !0))),
                    Be(e, t, t.pendingProps.children, a),
                    t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(u(156, t.tag))
    }
    function Vt(e) {
        e.flags |= 4
    }
    function Mn(e, t, a, s, r) {
        if ((t = (e.mode & 32) !== 0) && (t = !1),
            t) {
            if (e.flags |= 16777216,
                (r & 335544128) === r)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Mo())
                    e.flags |= 8192;
                else
                    throw Ya = ar,
                    Zi
        } else
            e.flags &= -16777217
    }
    function lo(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
            !p0(t))
            if (Mo())
                e.flags |= 8192;
            else
                throw Ya = ar,
                Zi
    }
    function pr(e, t) {
        t !== null && (e.flags |= 4),
            e.flags & 16384 && (t = e.tag !== 22 ? Rc() : 536870912,
                e.lanes |= t,
                wl |= t)
    }
    function ns(e, t) {
        if (!te)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var a = null; t !== null;)
                        t.alternate !== null && (a = t),
                            t = t.sibling;
                    a === null ? e.tail = null : a.sibling = null;
                    break;
                case "collapsed":
                    a = e.tail;
                    for (var s = null; a !== null;)
                        a.alternate !== null && (s = a),
                            a = a.sibling;
                    s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null
            }
    }
    function ge(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
            , a = 0
            , s = 0;
        if (t)
            for (var r = e.child; r !== null;)
                a |= r.lanes | r.childLanes,
                    s |= r.subtreeFlags & 65011712,
                    s |= r.flags & 65011712,
                    r.return = e,
                    r = r.sibling;
        else
            for (r = e.child; r !== null;)
                a |= r.lanes | r.childLanes,
                    s |= r.subtreeFlags,
                    s |= r.flags,
                    r.return = e,
                    r = r.sibling;
        return e.subtreeFlags |= s,
            e.childLanes = a,
            t
    }
    function vf(e, t, a) {
        var s = t.pendingProps;
        switch (Bi(t),
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
                return ge(t),
                    null;
            case 1:
                return ge(t),
                    null;
            case 3:
                return a = t.stateNode,
                    s = null,
                    e !== null && (s = e.memoizedState.cache),
                    t.memoizedState.cache !== s && (t.flags |= 2048),
                    Gt(Ee),
                    we(),
                    a.pendingContext && (a.context = a.pendingContext,
                        a.pendingContext = null),
                    (e === null || e.child === null) && (ul(t) ? Vt(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
                        qi())),
                    ge(t),
                    null;
            case 26:
                var r = t.type
                    , i = t.memoizedState;
                return e === null ? (Vt(t),
                    i !== null ? (ge(t),
                        lo(t, i)) : (ge(t),
                            Mn(t, r, null, s, a))) : i ? i !== e.memoizedState ? (Vt(t),
                                ge(t),
                                lo(t, i)) : (ge(t),
                                    t.flags &= -16777217) : (e = e.memoizedProps,
                                        e !== s && Vt(t),
                                        ge(t),
                                        Mn(t, r, e, s, a)),
                    null;
            case 27:
                if (Ms(t),
                    a = J.current,
                    r = t.type,
                    e !== null && t.stateNode != null)
                    e.memoizedProps !== s && Vt(t);
                else {
                    if (!s) {
                        if (t.stateNode === null)
                            throw Error(u(166));
                        return ge(t),
                            null
                    }
                    e = R.current,
                        ul(t) ? Rd(t) : (e = o0(r, s, a),
                            t.stateNode = e,
                            Vt(t))
                }
                return ge(t),
                    null;
            case 5:
                if (Ms(t),
                    r = t.type,
                    e !== null && t.stateNode != null)
                    e.memoizedProps !== s && Vt(t);
                else {
                    if (!s) {
                        if (t.stateNode === null)
                            throw Error(u(166));
                        return ge(t),
                            null
                    }
                    if (i = R.current,
                        ul(t))
                        Rd(t);
                    else {
                        var n = Ur(J.current);
                        switch (i) {
                            case 1:
                                i = n.createElementNS("http://www.w3.org/2000/svg", r);
                                break;
                            case 2:
                                i = n.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                                break;
                            default:
                                switch (r) {
                                    case "svg":
                                        i = n.createElementNS("http://www.w3.org/2000/svg", r);
                                        break;
                                    case "math":
                                        i = n.createElementNS("http://www.w3.org/1998/Math/MathML", r);
                                        break;
                                    case "script":
                                        i = n.createElement("div"),
                                            i.innerHTML = "<script><\/script>",
                                            i = i.removeChild(i.firstChild);
                                        break;
                                    case "select":
                                        i = typeof s.is == "string" ? n.createElement("select", {
                                            is: s.is
                                        }) : n.createElement("select"),
                                            s.multiple ? i.multiple = !0 : s.size && (i.size = s.size);
                                        break;
                                    default:
                                        i = typeof s.is == "string" ? n.createElement(r, {
                                            is: s.is
                                        }) : n.createElement(r)
                                }
                        }
                        i[Ue] = t,
                            i[Ke] = s;
                        e: for (n = t.child; n !== null;) {
                            if (n.tag === 5 || n.tag === 6)
                                i.appendChild(n.stateNode);
                            else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                                n.child.return = n,
                                    n = n.child;
                                continue
                            }
                            if (n === t)
                                break e;
                            for (; n.sibling === null;) {
                                if (n.return === null || n.return === t)
                                    break e;
                                n = n.return
                            }
                            n.sibling.return = n.return,
                                n = n.sibling
                        }
                        t.stateNode = i;
                        e: switch (He(i, r, s),
                        r) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s = !!s.autoFocus;
                                break e;
                            case "img":
                                s = !0;
                                break e;
                            default:
                                s = !1
                        }
                        s && Vt(t)
                    }
                }
                return ge(t),
                    Mn(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
                    null;
            case 6:
                if (e && t.stateNode != null)
                    e.memoizedProps !== s && Vt(t);
                else {
                    if (typeof s != "string" && t.stateNode === null)
                        throw Error(u(166));
                    if (e = J.current,
                        ul(t)) {
                        if (e = t.stateNode,
                            a = t.memoizedProps,
                            s = null,
                            r = _e,
                            r !== null)
                            switch (r.tag) {
                                case 27:
                                case 5:
                                    s = r.memoizedProps
                            }
                        e[Ue] = t,
                            e = !!(e.nodeValue === a || s !== null && s.suppressHydrationWarning === !0 || e0(e.nodeValue, a)),
                            e || ra(t, !0)
                    } else
                        e = Ur(e).createTextNode(s),
                            e[Ue] = t,
                            t.stateNode = e
                }
                return ge(t),
                    null;
            case 31:
                if (a = t.memoizedState,
                    e === null || e.memoizedState !== null) {
                    if (s = ul(t),
                        a !== null) {
                        if (e === null) {
                            if (!s)
                                throw Error(u(318));
                            if (e = t.memoizedState,
                                e = e !== null ? e.dehydrated : null,
                                !e)
                                throw Error(u(557));
                            e[Ue] = t
                        } else
                            _a(),
                                (t.flags & 128) === 0 && (t.memoizedState = null),
                                t.flags |= 4;
                        ge(t),
                            e = !1
                    } else
                        a = qi(),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                            e = !0;
                    if (!e)
                        return t.flags & 256 ? (it(t),
                            t) : (it(t),
                                null);
                    if ((t.flags & 128) !== 0)
                        throw Error(u(558))
                }
                return ge(t),
                    null;
            case 13:
                if (s = t.memoizedState,
                    e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (r = ul(t),
                        s !== null && s.dehydrated !== null) {
                        if (e === null) {
                            if (!r)
                                throw Error(u(318));
                            if (r = t.memoizedState,
                                r = r !== null ? r.dehydrated : null,
                                !r)
                                throw Error(u(317));
                            r[Ue] = t
                        } else
                            _a(),
                                (t.flags & 128) === 0 && (t.memoizedState = null),
                                t.flags |= 4;
                        ge(t),
                            r = !1
                    } else
                        r = qi(),
                            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r),
                            r = !0;
                    if (!r)
                        return t.flags & 256 ? (it(t),
                            t) : (it(t),
                                null)
                }
                return it(t),
                    (t.flags & 128) !== 0 ? (t.lanes = a,
                        t) : (a = s !== null,
                            e = e !== null && e.memoizedState !== null,
                            a && (s = t.child,
                                r = null,
                                s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (r = s.alternate.memoizedState.cachePool.pool),
                                i = null,
                                s.memoizedState !== null && s.memoizedState.cachePool !== null && (i = s.memoizedState.cachePool.pool),
                                i !== r && (s.flags |= 2048)),
                            a !== e && a && (t.child.flags |= 8192),
                            pr(t, t.updateQueue),
                            ge(t),
                            null);
            case 4:
                return we(),
                    e === null && In(t.stateNode.containerInfo),
                    ge(t),
                    null;
            case 10:
                return Gt(t.type),
                    ge(t),
                    null;
            case 19:
                if (A(ke),
                    s = t.memoizedState,
                    s === null)
                    return ge(t),
                        null;
                if (r = (t.flags & 128) !== 0,
                    i = s.rendering,
                    i === null)
                    if (r)
                        ns(s, !1);
                    else {
                        if (je !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (i = ir(e),
                                    i !== null) {
                                    for (t.flags |= 128,
                                        ns(s, !1),
                                        e = i.updateQueue,
                                        t.updateQueue = e,
                                        pr(t, e),
                                        t.subtreeFlags = 0,
                                        e = a,
                                        a = t.child; a !== null;)
                                        Dd(a, e),
                                            a = a.sibling;
                                    return O(ke, ke.current & 1 | 2),
                                        te && qt(t, s.treeForkCount),
                                        t.child
                                }
                                e = e.sibling
                            }
                        s.tail !== null && et() > kr && (t.flags |= 128,
                            r = !0,
                            ns(s, !1),
                            t.lanes = 4194304)
                    }
                else {
                    if (!r)
                        if (e = ir(i),
                            e !== null) {
                            if (t.flags |= 128,
                                r = !0,
                                e = e.updateQueue,
                                t.updateQueue = e,
                                pr(t, e),
                                ns(s, !0),
                                s.tail === null && s.tailMode === "hidden" && !i.alternate && !te)
                                return ge(t),
                                    null
                        } else
                            2 * et() - s.renderingStartTime > kr && a !== 536870912 && (t.flags |= 128,
                                r = !0,
                                ns(s, !1),
                                t.lanes = 4194304);
                    s.isBackwards ? (i.sibling = t.child,
                        t.child = i) : (e = s.last,
                            e !== null ? e.sibling = i : t.child = i,
                            s.last = i)
                }
                return s.tail !== null ? (e = s.tail,
                    s.rendering = e,
                    s.tail = e.sibling,
                    s.renderingStartTime = et(),
                    e.sibling = null,
                    a = ke.current,
                    O(ke, r ? a & 1 | 2 : a & 1),
                    te && qt(t, s.treeForkCount),
                    e) : (ge(t),
                        null);
            case 22:
            case 23:
                return it(t),
                    Ii(),
                    s = t.memoizedState !== null,
                    e !== null ? e.memoizedState !== null !== s && (t.flags |= 8192) : s && (t.flags |= 8192),
                    s ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (ge(t),
                        t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t),
                    a = t.updateQueue,
                    a !== null && pr(t, a.retryQueue),
                    a = null,
                    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
                    s = null,
                    t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
                    s !== a && (t.flags |= 2048),
                    e !== null && A(Ha),
                    null;
            case 24:
                return a = null,
                    e !== null && (a = e.memoizedState.cache),
                    t.memoizedState.cache !== a && (t.flags |= 2048),
                    Gt(Ee),
                    ge(t),
                    null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(u(156, t.tag))
    }
    function jf(e, t) {
        switch (Bi(t),
        t.tag) {
            case 1:
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 3:
                return Gt(Ee),
                    we(),
                    e = t.flags,
                    (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 26:
            case 27:
            case 5:
                return Ms(t),
                    null;
            case 31:
                if (t.memoizedState !== null) {
                    if (it(t),
                        t.alternate === null)
                        throw Error(u(340));
                    _a()
                }
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 13:
                if (it(t),
                    e = t.memoizedState,
                    e !== null && e.dehydrated !== null) {
                    if (t.alternate === null)
                        throw Error(u(340));
                    _a()
                }
                return e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 19:
                return A(ke),
                    null;
            case 4:
                return we(),
                    null;
            case 10:
                return Gt(t.type),
                    null;
            case 22:
            case 23:
                return it(t),
                    Ii(),
                    e !== null && A(Ha),
                    e = t.flags,
                    e & 65536 ? (t.flags = e & -65537 | 128,
                        t) : null;
            case 24:
                return Gt(Ee),
                    null;
            case 25:
                return null;
            default:
                return null
        }
    }
    function so(e, t) {
        switch (Bi(t),
        t.tag) {
            case 3:
                Gt(Ee),
                    we();
                break;
            case 26:
            case 27:
            case 5:
                Ms(t);
                break;
            case 4:
                we();
                break;
            case 31:
                t.memoizedState !== null && it(t);
                break;
            case 13:
                it(t);
                break;
            case 19:
                A(ke);
                break;
            case 10:
                Gt(t.type);
                break;
            case 22:
            case 23:
                it(t),
                    Ii(),
                    e !== null && A(Ha);
                break;
            case 24:
                Gt(Ee)
        }
    }
    function cs(e, t) {
        try {
            var a = t.updateQueue
                , s = a !== null ? a.lastEffect : null;
            if (s !== null) {
                var r = s.next;
                a = r;
                do {
                    if ((a.tag & e) === e) {
                        s = void 0;
                        var i = a.create
                            , n = a.inst;
                        s = i(),
                            n.destroy = s
                    }
                    a = a.next
                } while (a !== r)
            }
        } catch (c) {
            ne(t, t.return, c)
        }
    }
    function ma(e, t, a) {
        try {
            var s = t.updateQueue
                , r = s !== null ? s.lastEffect : null;
            if (r !== null) {
                var i = r.next;
                s = i;
                do {
                    if ((s.tag & e) === e) {
                        var n = s.inst
                            , c = n.destroy;
                        if (c !== void 0) {
                            n.destroy = void 0,
                                r = t;
                            var o = a
                                , y = c;
                            try {
                                y()
                            } catch (k) {
                                ne(r, o, k)
                            }
                        }
                    }
                    s = s.next
                } while (s !== i)
            }
        } catch (k) {
            ne(t, t.return, k)
        }
    }
    function ro(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var a = e.stateNode;
            try {
                Fd(t, a)
            } catch (s) {
                ne(e, e.return, s)
            }
        }
    }
    function io(e, t, a) {
        a.props = Xa(e.type, e.memoizedProps),
            a.state = e.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (s) {
            ne(e, t, s)
        }
    }
    function ds(e, t) {
        try {
            var a = e.ref;
            if (a !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var s = e.stateNode;
                        break;
                    case 30:
                        s = e.stateNode;
                        break;
                    default:
                        s = e.stateNode
                }
                typeof a == "function" ? e.refCleanup = a(s) : a.current = s
            }
        } catch (r) {
            ne(e, t, r)
        }
    }
    function Ct(e, t) {
        var a = e.ref
            , s = e.refCleanup;
        if (a !== null)
            if (typeof s == "function")
                try {
                    s()
                } catch (r) {
                    ne(e, t, r)
                } finally {
                    e.refCleanup = null,
                        e = e.alternate,
                        e != null && (e.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (r) {
                    ne(e, t, r)
                }
            else
                a.current = null
    }
    function no(e) {
        var t = e.type
            , a = e.memoizedProps
            , s = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && s.focus();
                    break e;
                case "img":
                    a.src ? s.src = a.src : a.srcSet && (s.srcset = a.srcSet)
            }
        } catch (r) {
            ne(e, e.return, r)
        }
    }
    function Dn(e, t, a) {
        try {
            var s = e.stateNode;
            Xf(s, e.type, a, t),
                s[Ke] = t
        } catch (r) {
            ne(e, e.return, r)
        }
    }
    function co(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && pa(e.type) || e.tag === 4
    }
    function Cn(e) {
        e: for (; ;) {
            for (; e.sibling === null;) {
                if (e.return === null || co(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
                e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && pa(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                    e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function On(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
                t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
                    t.appendChild(e),
                    a = a._reactRootContainer,
                    a != null || t.onclick !== null || (t.onclick = Rt));
        else if (s !== 4 && (s === 27 && pa(e.type) && (a = e.stateNode,
            t = null),
            e = e.child,
            e !== null))
            for (On(e, t, a),
                e = e.sibling; e !== null;)
                On(e, t, a),
                    e = e.sibling
    }
    function vr(e, t, a) {
        var s = e.tag;
        if (s === 5 || s === 6)
            e = e.stateNode,
                t ? a.insertBefore(e, t) : a.appendChild(e);
        else if (s !== 4 && (s === 27 && pa(e.type) && (a = e.stateNode),
            e = e.child,
            e !== null))
            for (vr(e, t, a),
                e = e.sibling; e !== null;)
                vr(e, t, a),
                    e = e.sibling
    }
    function uo(e) {
        var t = e.stateNode
            , a = e.memoizedProps;
        try {
            for (var s = e.type, r = t.attributes; r.length;)
                t.removeAttributeNode(r[0]);
            He(t, s, a),
                t[Ue] = e,
                t[Ke] = a
        } catch (i) {
            ne(e, e.return, i)
        }
    }
    var Zt = !1
        , Me = !1
        , Un = !1
        , oo = typeof WeakSet == "function" ? WeakSet : Set
        , Oe = null;
    function Nf(e, t) {
        if (e = e.containerInfo,
            tc = Gr,
            e = Nd(e),
            Ti(e)) {
            if ("selectionStart" in e)
                var a = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    a = (a = e.ownerDocument) && a.defaultView || window;
                    var s = a.getSelection && a.getSelection();
                    if (s && s.rangeCount !== 0) {
                        a = s.anchorNode;
                        var r = s.anchorOffset
                            , i = s.focusNode;
                        s = s.focusOffset;
                        try {
                            a.nodeType,
                                i.nodeType
                        } catch {
                            a = null;
                            break e
                        }
                        var n = 0
                            , c = -1
                            , o = -1
                            , y = 0
                            , k = 0
                            , E = e
                            , p = null;
                        t: for (; ;) {
                            for (var j; E !== a || r !== 0 && E.nodeType !== 3 || (c = n + r),
                                E !== i || s !== 0 && E.nodeType !== 3 || (o = n + s),
                                E.nodeType === 3 && (n += E.nodeValue.length),
                                (j = E.firstChild) !== null;)
                                p = E,
                                    E = j;
                            for (; ;) {
                                if (E === e)
                                    break t;
                                if (p === a && ++y === r && (c = n),
                                    p === i && ++k === s && (o = n),
                                    (j = E.nextSibling) !== null)
                                    break;
                                E = p,
                                    p = E.parentNode
                            }
                            E = j
                        }
                        a = c === -1 || o === -1 ? null : {
                            start: c,
                            end: o
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (ac = {
            focusedElem: e,
            selectionRange: a
        },
            Gr = !1,
            Oe = t; Oe !== null;)
            if (t = Oe,
                e = t.child,
                (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                    Oe = e;
            else
                for (; Oe !== null;) {
                    switch (t = Oe,
                    i = t.alternate,
                    e = t.flags,
                    t.tag) {
                        case 0:
                            if ((e & 4) !== 0 && (e = t.updateQueue,
                                e = e !== null ? e.events : null,
                                e !== null))
                                for (a = 0; a < e.length; a++)
                                    r = e[a],
                                        r.ref.impl = r.nextImpl;
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && i !== null) {
                                e = void 0,
                                    a = t,
                                    r = i.memoizedProps,
                                    i = i.memoizedState,
                                    s = a.stateNode;
                                try {
                                    var U = Xa(a.type, r);
                                    e = s.getSnapshotBeforeUpdate(U, i),
                                        s.__reactInternalSnapshotBeforeUpdate = e
                                } catch (G) {
                                    ne(a, a.return, G)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo,
                                    a = e.nodeType,
                                    a === 9)
                                    rc(e);
                                else if (a === 1)
                                    switch (e.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            rc(e);
                                            break;
                                        default:
                                            e.textContent = ""
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
                            if ((e & 1024) !== 0)
                                throw Error(u(163))
                    }
                    if (e = t.sibling,
                        e !== null) {
                        e.return = t.return,
                            Oe = e;
                        break
                    }
                    Oe = t.return
                }
    }
    function mo(e, t, a) {
        var s = a.flags;
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                Jt(e, a),
                    s & 4 && cs(5, a);
                break;
            case 1:
                if (Jt(e, a),
                    s & 4)
                    if (e = a.stateNode,
                        t === null)
                        try {
                            e.componentDidMount()
                        } catch (n) {
                            ne(a, a.return, n)
                        }
                    else {
                        var r = Xa(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (n) {
                            ne(a, a.return, n)
                        }
                    }
                s & 64 && ro(a),
                    s & 512 && ds(a, a.return);
                break;
            case 3:
                if (Jt(e, a),
                    s & 64 && (e = a.updateQueue,
                        e !== null)) {
                    if (t = null,
                        a.child !== null)
                        switch (a.child.tag) {
                            case 27:
                            case 5:
                                t = a.child.stateNode;
                                break;
                            case 1:
                                t = a.child.stateNode
                        }
                    try {
                        Fd(e, t)
                    } catch (n) {
                        ne(a, a.return, n)
                    }
                }
                break;
            case 27:
                t === null && s & 4 && uo(a);
            case 26:
            case 5:
                Jt(e, a),
                    t === null && s & 4 && no(a),
                    s & 512 && ds(a, a.return);
                break;
            case 12:
                Jt(e, a);
                break;
            case 31:
                Jt(e, a),
                    s & 4 && ho(e, a);
                break;
            case 13:
                Jt(e, a),
                    s & 4 && go(e, a),
                    s & 64 && (e = a.memoizedState,
                        e !== null && (e = e.dehydrated,
                            e !== null && (a = Df.bind(null, a),
                                Wf(e, a))));
                break;
            case 22:
                if (s = a.memoizedState !== null || Zt,
                    !s) {
                    t = t !== null && t.memoizedState !== null || Me,
                        r = Zt;
                    var i = Me;
                    Zt = s,
                        (Me = t) && !i ? Ft(e, a, (a.subtreeFlags & 8772) !== 0) : Jt(e, a),
                        Zt = r,
                        Me = i
                }
                break;
            case 30:
                break;
            default:
                Jt(e, a)
        }
    }
    function fo(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
            fo(t)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            e.tag === 5 && (t = e.stateNode,
                t !== null && di(t)),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
    }
    var ye = null
        , Fe = !1;
    function Kt(e, t, a) {
        for (a = a.child; a !== null;)
            xo(e, t, a),
                a = a.sibling
    }
    function xo(e, t, a) {
        if (tt && typeof tt.onCommitFiberUnmount == "function")
            try {
                tt.onCommitFiberUnmount(Ol, a)
            } catch { }
        switch (a.tag) {
            case 26:
                Me || Ct(a, t),
                    Kt(e, t, a),
                    a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
                        a.parentNode.removeChild(a));
                break;
            case 27:
                Me || Ct(a, t);
                var s = ye
                    , r = Fe;
                pa(a.type) && (ye = a.stateNode,
                    Fe = !1),
                    Kt(e, t, a),
                    ys(a.stateNode),
                    ye = s,
                    Fe = r;
                break;
            case 5:
                Me || Ct(a, t);
            case 6:
                if (s = ye,
                    r = Fe,
                    ye = null,
                    Kt(e, t, a),
                    ye = s,
                    Fe = r,
                    ye !== null)
                    if (Fe)
                        try {
                            (ye.nodeType === 9 ? ye.body : ye.nodeName === "HTML" ? ye.ownerDocument.body : ye).removeChild(a.stateNode)
                        } catch (i) {
                            ne(a, t, i)
                        }
                    else
                        try {
                            ye.removeChild(a.stateNode)
                        } catch (i) {
                            ne(a, t, i)
                        }
                break;
            case 18:
                ye !== null && (Fe ? (e = ye,
                    i0(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode),
                    Dl(e)) : i0(ye, a.stateNode));
                break;
            case 4:
                s = ye,
                    r = Fe,
                    ye = a.stateNode.containerInfo,
                    Fe = !0,
                    Kt(e, t, a),
                    ye = s,
                    Fe = r;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ma(2, a, t),
                    Me || ma(4, a, t),
                    Kt(e, t, a);
                break;
            case 1:
                Me || (Ct(a, t),
                    s = a.stateNode,
                    typeof s.componentWillUnmount == "function" && io(a, t, s)),
                    Kt(e, t, a);
                break;
            case 21:
                Kt(e, t, a);
                break;
            case 22:
                Me = (s = Me) || a.memoizedState !== null,
                    Kt(e, t, a),
                    Me = s;
                break;
            default:
                Kt(e, t, a)
        }
    }
    function ho(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
            e !== null && (e = e.memoizedState,
                e !== null))) {
            e = e.dehydrated;
            try {
                Dl(e)
            } catch (a) {
                ne(t, t.return, a)
            }
        }
    }
    function go(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
            e !== null && (e = e.memoizedState,
                e !== null && (e = e.dehydrated,
                    e !== null))))
            try {
                Dl(e)
            } catch (a) {
                ne(t, t.return, a)
            }
    }
    function wf(e) {
        switch (e.tag) {
            case 31:
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new oo),
                    t;
            case 22:
                return e = e.stateNode,
                    t = e._retryCache,
                    t === null && (t = e._retryCache = new oo),
                    t;
            default:
                throw Error(u(435, e.tag))
        }
    }
    function jr(e, t) {
        var a = wf(e);
        t.forEach(function (s) {
            if (!a.has(s)) {
                a.add(s);
                var r = Cf.bind(null, e, s);
                s.then(r, r)
            }
        })
    }
    function $e(e, t) {
        var a = t.deletions;
        if (a !== null)
            for (var s = 0; s < a.length; s++) {
                var r = a[s]
                    , i = e
                    , n = t
                    , c = n;
                e: for (; c !== null;) {
                    switch (c.tag) {
                        case 27:
                            if (pa(c.type)) {
                                ye = c.stateNode,
                                    Fe = !1;
                                break e
                            }
                            break;
                        case 5:
                            ye = c.stateNode,
                                Fe = !1;
                            break e;
                        case 3:
                        case 4:
                            ye = c.stateNode.containerInfo,
                                Fe = !0;
                            break e
                    }
                    c = c.return
                }
                if (ye === null)
                    throw Error(u(160));
                xo(i, n, r),
                    ye = null,
                    Fe = !1,
                    i = r.alternate,
                    i !== null && (i.return = null),
                    r.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null;)
                bo(t, e),
                    t = t.sibling
    }
    var kt = null;
    function bo(e, t) {
        var a = e.alternate
            , s = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                $e(t, e),
                    We(e),
                    s & 4 && (ma(3, e, e.return),
                        cs(3, e),
                        ma(5, e, e.return));
                break;
            case 1:
                $e(t, e),
                    We(e),
                    s & 512 && (Me || a === null || Ct(a, a.return)),
                    s & 64 && Zt && (e = e.updateQueue,
                        e !== null && (s = e.callbacks,
                            s !== null && (a = e.shared.hiddenCallbacks,
                                e.shared.hiddenCallbacks = a === null ? s : a.concat(s))));
                break;
            case 26:
                var r = kt;
                if ($e(t, e),
                    We(e),
                    s & 512 && (Me || a === null || Ct(a, a.return)),
                    s & 4) {
                    var i = a !== null ? a.memoizedState : null;
                    if (s = e.memoizedState,
                        a === null)
                        if (s === null)
                            if (e.stateNode === null) {
                                e: {
                                    s = e.type,
                                        a = e.memoizedProps,
                                        r = r.ownerDocument || r;
                                    t: switch (s) {
                                        case "title":
                                            i = r.getElementsByTagName("title")[0],
                                                (!i || i[Rl] || i[Ue] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = r.createElement(s),
                                                    r.head.insertBefore(i, r.querySelector("head > title"))),
                                                He(i, s, a),
                                                i[Ue] = e,
                                                Ce(i),
                                                s = i;
                                            break e;
                                        case "link":
                                            var n = b0("link", "href", r).get(s + (a.href || ""));
                                            if (n) {
                                                for (var c = 0; c < n.length; c++)
                                                    if (i = n[c],
                                                        i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                        n.splice(c, 1);
                                                        break t
                                                    }
                                            }
                                            i = r.createElement(s),
                                                He(i, s, a),
                                                r.head.appendChild(i);
                                            break;
                                        case "meta":
                                            if (n = b0("meta", "content", r).get(s + (a.content || ""))) {
                                                for (c = 0; c < n.length; c++)
                                                    if (i = n[c],
                                                        i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                        n.splice(c, 1);
                                                        break t
                                                    }
                                            }
                                            i = r.createElement(s),
                                                He(i, s, a),
                                                r.head.appendChild(i);
                                            break;
                                        default:
                                            throw Error(u(468, s))
                                    }
                                    i[Ue] = e,
                                        Ce(i),
                                        s = i
                                }
                                e.stateNode = s
                            } else
                                y0(r, e.type, e.stateNode);
                        else
                            e.stateNode = g0(r, s, e.memoizedProps);
                    else
                        i !== s ? (i === null ? a.stateNode !== null && (a = a.stateNode,
                            a.parentNode.removeChild(a)) : i.count--,
                            s === null ? y0(r, e.type, e.stateNode) : g0(r, s, e.memoizedProps)) : s === null && e.stateNode !== null && Dn(e, e.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                $e(t, e),
                    We(e),
                    s & 512 && (Me || a === null || Ct(a, a.return)),
                    a !== null && s & 4 && Dn(e, e.memoizedProps, a.memoizedProps);
                break;
            case 5:
                if ($e(t, e),
                    We(e),
                    s & 512 && (Me || a === null || Ct(a, a.return)),
                    e.flags & 32) {
                    r = e.stateNode;
                    try {
                        el(r, "")
                    } catch (U) {
                        ne(e, e.return, U)
                    }
                }
                s & 4 && e.stateNode != null && (r = e.memoizedProps,
                    Dn(e, r, a !== null ? a.memoizedProps : r)),
                    s & 1024 && (Un = !0);
                break;
            case 6:
                if ($e(t, e),
                    We(e),
                    s & 4) {
                    if (e.stateNode === null)
                        throw Error(u(162));
                    s = e.memoizedProps,
                        a = e.stateNode;
                    try {
                        a.nodeValue = s
                    } catch (U) {
                        ne(e, e.return, U)
                    }
                }
                break;
            case 3:
                if (Br = null,
                    r = kt,
                    kt = _r(t.containerInfo),
                    $e(t, e),
                    kt = r,
                    We(e),
                    s & 4 && a !== null && a.memoizedState.isDehydrated)
                    try {
                        Dl(t.containerInfo)
                    } catch (U) {
                        ne(e, e.return, U)
                    }
                Un && (Un = !1,
                    yo(e));
                break;
            case 4:
                s = kt,
                    kt = _r(e.stateNode.containerInfo),
                    $e(t, e),
                    We(e),
                    kt = s;
                break;
            case 12:
                $e(t, e),
                    We(e);
                break;
            case 31:
                $e(t, e),
                    We(e),
                    s & 4 && (s = e.updateQueue,
                        s !== null && (e.updateQueue = null,
                            jr(e, s)));
                break;
            case 13:
                $e(t, e),
                    We(e),
                    e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (wr = et()),
                    s & 4 && (s = e.updateQueue,
                        s !== null && (e.updateQueue = null,
                            jr(e, s)));
                break;
            case 22:
                r = e.memoizedState !== null;
                var o = a !== null && a.memoizedState !== null
                    , y = Zt
                    , k = Me;
                if (Zt = y || r,
                    Me = k || o,
                    $e(t, e),
                    Me = k,
                    Zt = y,
                    We(e),
                    s & 8192)
                    e: for (t = e.stateNode,
                        t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                        r && (a === null || o || Zt || Me || Qa(e)),
                        a = null,
                        t = e; ;) {
                        if (t.tag === 5 || t.tag === 26) {
                            if (a === null) {
                                o = a = t;
                                try {
                                    if (i = o.stateNode,
                                        r)
                                        n = i.style,
                                            typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
                                    else {
                                        c = o.stateNode;
                                        var E = o.memoizedProps.style
                                            , p = E != null && E.hasOwnProperty("display") ? E.display : null;
                                        c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim()
                                    }
                                } catch (U) {
                                    ne(o, o.return, U)
                                }
                            }
                        } else if (t.tag === 6) {
                            if (a === null) {
                                o = t;
                                try {
                                    o.stateNode.nodeValue = r ? "" : o.memoizedProps
                                } catch (U) {
                                    ne(o, o.return, U)
                                }
                            }
                        } else if (t.tag === 18) {
                            if (a === null) {
                                o = t;
                                try {
                                    var j = o.stateNode;
                                    r ? n0(j, !0) : n0(o.stateNode, !1)
                                } catch (U) {
                                    ne(o, o.return, U)
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t,
                                t = t.child;
                            continue
                        }
                        if (t === e)
                            break e;
                        for (; t.sibling === null;) {
                            if (t.return === null || t.return === e)
                                break e;
                            a === t && (a = null),
                                t = t.return
                        }
                        a === t && (a = null),
                            t.sibling.return = t.return,
                            t = t.sibling
                    }
                s & 4 && (s = e.updateQueue,
                    s !== null && (a = s.retryQueue,
                        a !== null && (s.retryQueue = null,
                            jr(e, a))));
                break;
            case 19:
                $e(t, e),
                    We(e),
                    s & 4 && (s = e.updateQueue,
                        s !== null && (e.updateQueue = null,
                            jr(e, s)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                $e(t, e),
                    We(e)
        }
    }
    function We(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var a, s = e.return; s !== null;) {
                    if (co(s)) {
                        a = s;
                        break
                    }
                    s = s.return
                }
                if (a == null)
                    throw Error(u(160));
                switch (a.tag) {
                    case 27:
                        var r = a.stateNode
                            , i = Cn(e);
                        vr(e, i, r);
                        break;
                    case 5:
                        var n = a.stateNode;
                        a.flags & 32 && (el(n, ""),
                            a.flags &= -33);
                        var c = Cn(e);
                        vr(e, c, n);
                        break;
                    case 3:
                    case 4:
                        var o = a.stateNode.containerInfo
                            , y = Cn(e);
                        On(e, y, o);
                        break;
                    default:
                        throw Error(u(161))
                }
            } catch (k) {
                ne(e, e.return, k)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function yo(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                yo(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    e = e.sibling
            }
    }
    function Jt(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;)
                mo(e, t.alternate, t),
                    t = t.sibling
    }
    function Qa(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ma(4, t, t.return),
                        Qa(t);
                    break;
                case 1:
                    Ct(t, t.return);
                    var a = t.stateNode;
                    typeof a.componentWillUnmount == "function" && io(t, t.return, a),
                        Qa(t);
                    break;
                case 27:
                    ys(t.stateNode);
                case 26:
                case 5:
                    Ct(t, t.return),
                        Qa(t);
                    break;
                case 22:
                    t.memoizedState === null && Qa(t);
                    break;
                case 30:
                    Qa(t);
                    break;
                default:
                    Qa(t)
            }
            e = e.sibling
        }
    }
    function Ft(e, t, a) {
        for (a = a && (t.subtreeFlags & 8772) !== 0,
            t = t.child; t !== null;) {
            var s = t.alternate
                , r = e
                , i = t
                , n = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    Ft(r, i, a),
                        cs(4, i);
                    break;
                case 1:
                    if (Ft(r, i, a),
                        s = i,
                        r = s.stateNode,
                        typeof r.componentDidMount == "function")
                        try {
                            r.componentDidMount()
                        } catch (y) {
                            ne(s, s.return, y)
                        }
                    if (s = i,
                        r = s.updateQueue,
                        r !== null) {
                        var c = s.stateNode;
                        try {
                            var o = r.shared.hiddenCallbacks;
                            if (o !== null)
                                for (r.shared.hiddenCallbacks = null,
                                    r = 0; r < o.length; r++)
                                    Jd(o[r], c)
                        } catch (y) {
                            ne(s, s.return, y)
                        }
                    }
                    a && n & 64 && ro(i),
                        ds(i, i.return);
                    break;
                case 27:
                    uo(i);
                case 26:
                case 5:
                    Ft(r, i, a),
                        a && s === null && n & 4 && no(i),
                        ds(i, i.return);
                    break;
                case 12:
                    Ft(r, i, a);
                    break;
                case 31:
                    Ft(r, i, a),
                        a && n & 4 && ho(r, i);
                    break;
                case 13:
                    Ft(r, i, a),
                        a && n & 4 && go(r, i);
                    break;
                case 22:
                    i.memoizedState === null && Ft(r, i, a),
                        ds(i, i.return);
                    break;
                case 30:
                    break;
                default:
                    Ft(r, i, a)
            }
            t = t.sibling
        }
    }
    function _n(e, t) {
        var a = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            e = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== a && (e != null && e.refCount++,
                a != null && Fl(a))
    }
    function Rn(e, t) {
        e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
                e != null && Fl(e))
    }
    function St(e, t, a, s) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;)
                po(e, t, a, s),
                    t = t.sibling
    }
    function po(e, t, a, s) {
        var r = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                St(e, t, a, s),
                    r & 2048 && cs(9, t);
                break;
            case 1:
                St(e, t, a, s);
                break;
            case 3:
                St(e, t, a, s),
                    r & 2048 && (e = null,
                        t.alternate !== null && (e = t.alternate.memoizedState.cache),
                        t = t.memoizedState.cache,
                        t !== e && (t.refCount++,
                            e != null && Fl(e)));
                break;
            case 12:
                if (r & 2048) {
                    St(e, t, a, s),
                        e = t.stateNode;
                    try {
                        var i = t.memoizedProps
                            , n = i.id
                            , c = i.onPostCommit;
                        typeof c == "function" && c(n, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (o) {
                        ne(t, t.return, o)
                    }
                } else
                    St(e, t, a, s);
                break;
            case 31:
                St(e, t, a, s);
                break;
            case 13:
                St(e, t, a, s);
                break;
            case 23:
                break;
            case 22:
                i = t.stateNode,
                    n = t.alternate,
                    t.memoizedState !== null ? i._visibility & 2 ? St(e, t, a, s) : us(e, t) : i._visibility & 2 ? St(e, t, a, s) : (i._visibility |= 2,
                        vl(e, t, a, s, (t.subtreeFlags & 10256) !== 0 || !1)),
                    r & 2048 && _n(n, t);
                break;
            case 24:
                St(e, t, a, s),
                    r & 2048 && Rn(t.alternate, t);
                break;
            default:
                St(e, t, a, s)
        }
    }
    function vl(e, t, a, s, r) {
        for (r = r && ((t.subtreeFlags & 10256) !== 0 || !1),
            t = t.child; t !== null;) {
            var i = e
                , n = t
                , c = a
                , o = s
                , y = n.flags;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    vl(i, n, c, o, r),
                        cs(8, n);
                    break;
                case 23:
                    break;
                case 22:
                    var k = n.stateNode;
                    n.memoizedState !== null ? k._visibility & 2 ? vl(i, n, c, o, r) : us(i, n) : (k._visibility |= 2,
                        vl(i, n, c, o, r)),
                        r && y & 2048 && _n(n.alternate, n);
                    break;
                case 24:
                    vl(i, n, c, o, r),
                        r && y & 2048 && Rn(n.alternate, n);
                    break;
                default:
                    vl(i, n, c, o, r)
            }
            t = t.sibling
        }
    }
    function us(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var a = e
                    , s = t
                    , r = s.flags;
                switch (s.tag) {
                    case 22:
                        us(a, s),
                            r & 2048 && _n(s.alternate, s);
                        break;
                    case 24:
                        us(a, s),
                            r & 2048 && Rn(s.alternate, s);
                        break;
                    default:
                        us(a, s)
                }
                t = t.sibling
            }
    }
    var os = 8192;
    function jl(e, t, a) {
        if (e.subtreeFlags & os)
            for (e = e.child; e !== null;)
                vo(e, t, a),
                    e = e.sibling
    }
    function vo(e, t, a) {
        switch (e.tag) {
            case 26:
                jl(e, t, a),
                    e.flags & os && e.memoizedState !== null && dx(a, kt, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                jl(e, t, a);
                break;
            case 3:
            case 4:
                var s = kt;
                kt = _r(e.stateNode.containerInfo),
                    jl(e, t, a),
                    kt = s;
                break;
            case 22:
                e.memoizedState === null && (s = e.alternate,
                    s !== null && s.memoizedState !== null ? (s = os,
                        os = 16777216,
                        jl(e, t, a),
                        os = s) : jl(e, t, a));
                break;
            default:
                jl(e, t, a)
        }
    }
    function jo(e) {
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
    function ms(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    Oe = s,
                        wo(s, e)
                }
            jo(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;)
                No(e),
                    e = e.sibling
    }
    function No(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ms(e),
                    e.flags & 2048 && ma(9, e, e.return);
                break;
            case 3:
                ms(e);
                break;
            case 12:
                ms(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
                    Nr(e)) : ms(e);
                break;
            default:
                ms(e)
        }
    }
    function Nr(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    Oe = s,
                        wo(s, e)
                }
            jo(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e,
            t.tag) {
                case 0:
                case 11:
                case 15:
                    ma(8, t, t.return),
                        Nr(t);
                    break;
                case 22:
                    a = t.stateNode,
                        a._visibility & 2 && (a._visibility &= -3,
                            Nr(t));
                    break;
                default:
                    Nr(t)
            }
            e = e.sibling
        }
    }
    function wo(e, t) {
        for (; Oe !== null;) {
            var a = Oe;
            switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    ma(8, a, t);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var s = a.memoizedState.cachePool.pool;
                        s != null && s.refCount++
                    }
                    break;
                case 24:
                    Fl(a.memoizedState.cache)
            }
            if (s = a.child,
                s !== null)
                s.return = a,
                    Oe = s;
            else
                e: for (a = e; Oe !== null;) {
                    s = Oe;
                    var r = s.sibling
                        , i = s.return;
                    if (fo(s),
                        s === a) {
                        Oe = null;
                        break e
                    }
                    if (r !== null) {
                        r.return = i,
                            Oe = r;
                        break e
                    }
                    Oe = i
                }
        }
    }
    var kf = {
        getCacheForType: function (e) {
            var t = Re(Ee)
                , a = t.data.get(e);
            return a === void 0 && (a = e(),
                t.data.set(e, a)),
                a
        },
        cacheSignal: function () {
            return Re(Ee).controller.signal
        }
    }
        , Sf = typeof WeakMap == "function" ? WeakMap : Map
        , se = 0
        , xe = null
        , F = null
        , I = 0
        , ie = 0
        , nt = null
        , fa = !1
        , Nl = !1
        , Bn = !1
        , $t = 0
        , je = 0
        , xa = 0
        , Va = 0
        , Hn = 0
        , ct = 0
        , wl = 0
        , fs = null
        , Ie = null
        , qn = !1
        , wr = 0
        , ko = 0
        , kr = 1 / 0
        , Sr = null
        , ha = null
        , De = 0
        , ga = null
        , kl = null
        , Wt = 0
        , Yn = 0
        , Gn = null
        , So = null
        , xs = 0
        , Ln = null;
    function dt() {
        return (se & 2) !== 0 && I !== 0 ? I & -I : S.T !== null ? Jn() : Yc()
    }
    function To() {
        if (ct === 0)
            if ((I & 536870912) === 0 || te) {
                var e = Os;
                Os <<= 1,
                    (Os & 3932160) === 0 && (Os = 262144),
                    ct = e
            } else
                ct = 536870912;
        return e = rt.current,
            e !== null && (e.flags |= 32),
            ct
    }
    function Pe(e, t, a) {
        (e === xe && (ie === 2 || ie === 9) || e.cancelPendingCommit !== null) && (Sl(e, 0),
            ba(e, I, ct, !1)),
            _l(e, a),
            ((se & 2) === 0 || e !== xe) && (e === xe && ((se & 2) === 0 && (Va |= a),
                je === 4 && ba(e, I, ct, !1)),
                Ot(e))
    }
    function Eo(e, t, a) {
        if ((se & 6) !== 0)
            throw Error(u(327));
        var s = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ul(e, t)
            , r = s ? Af(e, t) : Qn(e, t, !0)
            , i = s;
        do {
            if (r === 0) {
                Nl && !s && ba(e, t, 0, !1);
                break
            } else {
                if (a = e.current.alternate,
                    i && !Tf(a)) {
                    r = Qn(e, t, !1),
                        i = !1;
                    continue
                }
                if (r === 2) {
                    if (i = t,
                        e.errorRecoveryDisabledLanes & i)
                        var n = 0;
                    else
                        n = e.pendingLanes & -536870913,
                            n = n !== 0 ? n : n & 536870912 ? 536870912 : 0;
                    if (n !== 0) {
                        t = n;
                        e: {
                            var c = e;
                            r = fs;
                            var o = c.current.memoizedState.isDehydrated;
                            if (o && (Sl(c, n).flags |= 256),
                                n = Qn(c, n, !1),
                                n !== 2) {
                                if (Bn && !o) {
                                    c.errorRecoveryDisabledLanes |= i,
                                        Va |= i,
                                        r = 4;
                                    break e
                                }
                                i = Ie,
                                    Ie = r,
                                    i !== null && (Ie === null ? Ie = i : Ie.push.apply(Ie, i))
                            }
                            r = n
                        }
                        if (i = !1,
                            r !== 2)
                            continue
                    }
                }
                if (r === 1) {
                    Sl(e, 0),
                        ba(e, t, 0, !0);
                    break
                }
                e: {
                    switch (s = e,
                    i = r,
                    i) {
                        case 0:
                        case 1:
                            throw Error(u(345));
                        case 4:
                            if ((t & 4194048) !== t)
                                break;
                        case 6:
                            ba(s, t, ct, !fa);
                            break e;
                        case 2:
                            Ie = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(u(329))
                    }
                    if ((t & 62914560) === t && (r = wr + 300 - et(),
                        10 < r)) {
                        if (ba(s, t, ct, !fa),
                            _s(s, 0, !0) !== 0)
                            break e;
                        Wt = t,
                            s.timeoutHandle = s0(Ao.bind(null, s, a, Ie, Sr, qn, t, ct, Va, wl, fa, i, "Throttled", -0, 0), r);
                        break e
                    }
                    Ao(s, a, Ie, Sr, qn, t, ct, Va, wl, fa, i, null, -0, 0)
                }
            }
            break
        } while (!0);
        Ot(e)
    }
    function Ao(e, t, a, s, r, i, n, c, o, y, k, E, p, j) {
        if (e.timeoutHandle = -1,
            E = t.subtreeFlags,
            E & 8192 || (E & 16785408) === 16785408) {
            E = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Rt
            },
                vo(t, i, E);
            var U = (i & 62914560) === i ? wr - et() : (i & 4194048) === i ? ko - et() : 0;
            if (U = ux(E, U),
                U !== null) {
                Wt = i,
                    e.cancelPendingCommit = U(Ro.bind(null, e, t, i, a, s, r, n, c, o, k, E, null, p, j)),
                    ba(e, i, n, !y);
                return
            }
        }
        Ro(e, t, i, a, s, r, n, c, o)
    }
    function Tf(e) {
        for (var t = e; ;) {
            var a = t.tag;
            if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
                a !== null && (a = a.stores,
                    a !== null)))
                for (var s = 0; s < a.length; s++) {
                    var r = a[s]
                        , i = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!lt(i(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = t.child,
                t.subtreeFlags & 16384 && a !== null)
                a.return = t,
                    t = a;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null;) {
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
    function ba(e, t, a, s) {
        t &= ~Hn,
            t &= ~Va,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            s && (e.warmLanes |= t),
            s = e.expirationTimes;
        for (var r = t; 0 < r;) {
            var i = 31 - at(r)
                , n = 1 << i;
            s[i] = -1,
                r &= ~n
        }
        a !== 0 && Bc(e, a, t)
    }
    function Tr() {
        return (se & 6) === 0 ? (hs(0),
            !1) : !0
    }
    function Xn() {
        if (F !== null) {
            if (ie === 0)
                var e = F.return;
            else
                e = F,
                    Yt = Ra = null,
                    sn(e),
                    hl = null,
                    Wl = 0,
                    e = F;
            for (; e !== null;)
                so(e.alternate, e),
                    e = e.return;
            F = null
        }
    }
    function Sl(e, t) {
        var a = e.timeoutHandle;
        a !== -1 && (e.timeoutHandle = -1,
            Zf(a)),
            a = e.cancelPendingCommit,
            a !== null && (e.cancelPendingCommit = null,
                a()),
            Wt = 0,
            Xn(),
            xe = e,
            F = a = Ht(e.current, null),
            I = t,
            ie = 0,
            nt = null,
            fa = !1,
            Nl = Ul(e, t),
            Bn = !1,
            wl = ct = Hn = Va = xa = je = 0,
            Ie = fs = null,
            qn = !1,
            (t & 8) !== 0 && (t |= t & 32);
        var s = e.entangledLanes;
        if (s !== 0)
            for (e = e.entanglements,
                s &= t; 0 < s;) {
                var r = 31 - at(s)
                    , i = 1 << r;
                t |= e[r],
                    s &= ~i
            }
        return $t = t,
            Ks(),
            a
    }
    function zo(e, t) {
        Z = null,
            S.H = rs,
            t === xl || t === tr ? (t = Qd(),
                ie = 3) : t === Zi ? (t = Qd(),
                    ie = 4) : ie = t === jn ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
            nt = t,
            F === null && (je = 1,
                hr(e, xt(t, e.current)))
    }
    function Mo() {
        var e = rt.current;
        return e === null ? !0 : (I & 4194048) === I ? yt === null : (I & 62914560) === I || (I & 536870912) !== 0 ? e === yt : !1
    }
    function Do() {
        var e = S.H;
        return S.H = rs,
            e === null ? rs : e
    }
    function Co() {
        var e = S.A;
        return S.A = kf,
            e
    }
    function Er() {
        je = 4,
            fa || (I & 4194048) !== I && rt.current !== null || (Nl = !0),
            (xa & 134217727) === 0 && (Va & 134217727) === 0 || xe === null || ba(xe, I, ct, !1)
    }
    function Qn(e, t, a) {
        var s = se;
        se |= 2;
        var r = Do()
            , i = Co();
        (xe !== e || I !== t) && (Sr = null,
            Sl(e, t)),
            t = !1;
        var n = je;
        e: do
            try {
                if (ie !== 0 && F !== null) {
                    var c = F
                        , o = nt;
                    switch (ie) {
                        case 8:
                            Xn(),
                                n = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            rt.current === null && (t = !0);
                            var y = ie;
                            if (ie = 0,
                                nt = null,
                                Tl(e, c, o, y),
                                a && Nl) {
                                n = 0;
                                break e
                            }
                            break;
                        default:
                            y = ie,
                                ie = 0,
                                nt = null,
                                Tl(e, c, o, y)
                    }
                }
                Ef(),
                    n = je;
                break
            } catch (k) {
                zo(e, k)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
            Yt = Ra = null,
            se = s,
            S.H = r,
            S.A = i,
            F === null && (xe = null,
                I = 0,
                Ks()),
            n
    }
    function Ef() {
        for (; F !== null;)
            Oo(F)
    }
    function Af(e, t) {
        var a = se;
        se |= 2;
        var s = Do()
            , r = Co();
        xe !== e || I !== t ? (Sr = null,
            kr = et() + 500,
            Sl(e, t)) : Nl = Ul(e, t);
        e: do
            try {
                if (ie !== 0 && F !== null) {
                    t = F;
                    var i = nt;
                    t: switch (ie) {
                        case 1:
                            ie = 0,
                                nt = null,
                                Tl(e, t, i, 1);
                            break;
                        case 2:
                        case 9:
                            if (Ld(i)) {
                                ie = 0,
                                    nt = null,
                                    Uo(t);
                                break
                            }
                            t = function () {
                                ie !== 2 && ie !== 9 || xe !== e || (ie = 7),
                                    Ot(e)
                            }
                                ,
                                i.then(t, t);
                            break e;
                        case 3:
                            ie = 7;
                            break e;
                        case 4:
                            ie = 5;
                            break e;
                        case 7:
                            Ld(i) ? (ie = 0,
                                nt = null,
                                Uo(t)) : (ie = 0,
                                    nt = null,
                                    Tl(e, t, i, 7));
                            break;
                        case 5:
                            var n = null;
                            switch (F.tag) {
                                case 26:
                                    n = F.memoizedState;
                                case 5:
                                case 27:
                                    var c = F;
                                    if (n ? p0(n) : c.stateNode.complete) {
                                        ie = 0,
                                            nt = null;
                                        var o = c.sibling;
                                        if (o !== null)
                                            F = o;
                                        else {
                                            var y = c.return;
                                            y !== null ? (F = y,
                                                Ar(y)) : F = null
                                        }
                                        break t
                                    }
                            }
                            ie = 0,
                                nt = null,
                                Tl(e, t, i, 5);
                            break;
                        case 6:
                            ie = 0,
                                nt = null,
                                Tl(e, t, i, 6);
                            break;
                        case 8:
                            Xn(),
                                je = 6;
                            break e;
                        default:
                            throw Error(u(462))
                    }
                }
                zf();
                break
            } catch (k) {
                zo(e, k)
            }
        while (!0);
        return Yt = Ra = null,
            S.H = s,
            S.A = r,
            se = a,
            F !== null ? 0 : (xe = null,
                I = 0,
                Ks(),
                je)
    }
    function zf() {
        for (; F !== null && !W0();)
            Oo(F)
    }
    function Oo(e) {
        var t = ao(e.alternate, e, $t);
        e.memoizedProps = e.pendingProps,
            t === null ? Ar(e) : F = t
    }
    function Uo(e) {
        var t = e
            , a = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = $u(a, t, t.pendingProps, t.type, void 0, I);
                break;
            case 11:
                t = $u(a, t, t.pendingProps, t.type.render, t.ref, I);
                break;
            case 5:
                sn(t);
            default:
                so(a, t),
                    t = F = Dd(t, $t),
                    t = ao(a, t, $t)
        }
        e.memoizedProps = e.pendingProps,
            t === null ? Ar(e) : F = t
    }
    function Tl(e, t, a, s) {
        Yt = Ra = null,
            sn(t),
            hl = null,
            Wl = 0;
        var r = t.return;
        try {
            if (bf(e, r, t, a, I)) {
                je = 1,
                    hr(e, xt(a, e.current)),
                    F = null;
                return
            }
        } catch (i) {
            if (r !== null)
                throw F = r,
                i;
            je = 1,
                hr(e, xt(a, e.current)),
                F = null;
            return
        }
        t.flags & 32768 ? (te || s === 1 ? e = !0 : Nl || (I & 536870912) !== 0 ? e = !1 : (fa = e = !0,
            (s === 2 || s === 9 || s === 3 || s === 6) && (s = rt.current,
                s !== null && s.tag === 13 && (s.flags |= 16384))),
            _o(t, e)) : Ar(t)
    }
    function Ar(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                _o(t, fa);
                return
            }
            e = t.return;
            var a = vf(t.alternate, t, $t);
            if (a !== null) {
                F = a;
                return
            }
            if (t = t.sibling,
                t !== null) {
                F = t;
                return
            }
            F = t = e
        } while (t !== null);
        je === 0 && (je = 5)
    }
    function _o(e, t) {
        do {
            var a = jf(e.alternate, e);
            if (a !== null) {
                a.flags &= 32767,
                    F = a;
                return
            }
            if (a = e.return,
                a !== null && (a.flags |= 32768,
                    a.subtreeFlags = 0,
                    a.deletions = null),
                !t && (e = e.sibling,
                    e !== null)) {
                F = e;
                return
            }
            F = e = a
        } while (e !== null);
        je = 6,
            F = null
    }
    function Ro(e, t, a, s, r, i, n, c, o) {
        e.cancelPendingCommit = null;
        do
            zr();
        while (De !== 0);
        if ((se & 6) !== 0)
            throw Error(u(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(u(177));
            if (i = t.lanes | t.childLanes,
                i |= Di,
                nm(e, a, i, n, c, o),
                e === xe && (F = xe = null,
                    I = 0),
                kl = t,
                ga = e,
                Wt = a,
                Yn = i,
                Gn = r,
                So = s,
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
                    e.callbackPriority = 0,
                    Of(Ds, function () {
                        return Go(),
                            null
                    })) : (e.callbackNode = null,
                        e.callbackPriority = 0),
                s = (t.flags & 13878) !== 0,
                (t.subtreeFlags & 13878) !== 0 || s) {
                s = S.T,
                    S.T = null,
                    r = C.p,
                    C.p = 2,
                    n = se,
                    se |= 4;
                try {
                    Nf(e, t, a)
                } finally {
                    se = n,
                        C.p = r,
                        S.T = s
                }
            }
            De = 1,
                Bo(),
                Ho(),
                qo()
        }
    }
    function Bo() {
        if (De === 1) {
            De = 0;
            var e = ga
                , t = kl
                , a = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || a) {
                a = S.T,
                    S.T = null;
                var s = C.p;
                C.p = 2;
                var r = se;
                se |= 4;
                try {
                    bo(t, e);
                    var i = ac
                        , n = Nd(e.containerInfo)
                        , c = i.focusedElem
                        , o = i.selectionRange;
                    if (n !== c && c && c.ownerDocument && jd(c.ownerDocument.documentElement, c)) {
                        if (o !== null && Ti(c)) {
                            var y = o.start
                                , k = o.end;
                            if (k === void 0 && (k = y),
                                "selectionStart" in c)
                                c.selectionStart = y,
                                    c.selectionEnd = Math.min(k, c.value.length);
                            else {
                                var E = c.ownerDocument || document
                                    , p = E && E.defaultView || window;
                                if (p.getSelection) {
                                    var j = p.getSelection()
                                        , U = c.textContent.length
                                        , G = Math.min(o.start, U)
                                        , me = o.end === void 0 ? G : Math.min(o.end, U);
                                    !j.extend && G > me && (n = me,
                                        me = G,
                                        G = n);
                                    var h = vd(c, G)
                                        , m = vd(c, me);
                                    if (h && m && (j.rangeCount !== 1 || j.anchorNode !== h.node || j.anchorOffset !== h.offset || j.focusNode !== m.node || j.focusOffset !== m.offset)) {
                                        var b = E.createRange();
                                        b.setStart(h.node, h.offset),
                                            j.removeAllRanges(),
                                            G > me ? (j.addRange(b),
                                                j.extend(m.node, m.offset)) : (b.setEnd(m.node, m.offset),
                                                    j.addRange(b))
                                    }
                                }
                            }
                        }
                        for (E = [],
                            j = c; j = j.parentNode;)
                            j.nodeType === 1 && E.push({
                                element: j,
                                left: j.scrollLeft,
                                top: j.scrollTop
                            });
                        for (typeof c.focus == "function" && c.focus(),
                            c = 0; c < E.length; c++) {
                            var T = E[c];
                            T.element.scrollLeft = T.left,
                                T.element.scrollTop = T.top
                        }
                    }
                    Gr = !!tc,
                        ac = tc = null
                } finally {
                    se = r,
                        C.p = s,
                        S.T = a
                }
            }
            e.current = t,
                De = 2
        }
    }
    function Ho() {
        if (De === 2) {
            De = 0;
            var e = ga
                , t = kl
                , a = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || a) {
                a = S.T,
                    S.T = null;
                var s = C.p;
                C.p = 2;
                var r = se;
                se |= 4;
                try {
                    mo(e, t.alternate, t)
                } finally {
                    se = r,
                        C.p = s,
                        S.T = a
                }
            }
            De = 3
        }
    }
    function qo() {
        if (De === 4 || De === 3) {
            De = 0,
                I0();
            var e = ga
                , t = kl
                , a = Wt
                , s = So;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? De = 5 : (De = 0,
                kl = ga = null,
                Yo(e, e.pendingLanes));
            var r = e.pendingLanes;
            if (r === 0 && (ha = null),
                ni(a),
                t = t.stateNode,
                tt && typeof tt.onCommitFiberRoot == "function")
                try {
                    tt.onCommitFiberRoot(Ol, t, void 0, (t.current.flags & 128) === 128)
                } catch { }
            if (s !== null) {
                t = S.T,
                    r = C.p,
                    C.p = 2,
                    S.T = null;
                try {
                    for (var i = e.onRecoverableError, n = 0; n < s.length; n++) {
                        var c = s[n];
                        i(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    S.T = t,
                        C.p = r
                }
            }
            (Wt & 3) !== 0 && zr(),
                Ot(e),
                r = e.pendingLanes,
                (a & 261930) !== 0 && (r & 42) !== 0 ? e === Ln ? xs++ : (xs = 0,
                    Ln = e) : xs = 0,
                hs(0)
        }
    }
    function Yo(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
            t != null && (e.pooledCache = null,
                Fl(t)))
    }
    function zr() {
        return Bo(),
            Ho(),
            qo(),
            Go()
    }
    function Go() {
        if (De !== 5)
            return !1;
        var e = ga
            , t = Yn;
        Yn = 0;
        var a = ni(Wt)
            , s = S.T
            , r = C.p;
        try {
            C.p = 32 > a ? 32 : a,
                S.T = null,
                a = Gn,
                Gn = null;
            var i = ga
                , n = Wt;
            if (De = 0,
                kl = ga = null,
                Wt = 0,
                (se & 6) !== 0)
                throw Error(u(331));
            var c = se;
            if (se |= 4,
                No(i.current),
                po(i, i.current, n, a),
                se = c,
                hs(0, !1),
                tt && typeof tt.onPostCommitFiberRoot == "function")
                try {
                    tt.onPostCommitFiberRoot(Ol, i)
                } catch { }
            return !0
        } finally {
            C.p = r,
                S.T = s,
                Yo(e, t)
        }
    }
    function Lo(e, t, a) {
        t = xt(a, t),
            t = vn(e.stateNode, t, 2),
            e = da(e, t, 2),
            e !== null && (_l(e, 2),
                Ot(e))
    }
    function ne(e, t, a) {
        if (e.tag === 3)
            Lo(e, e, a);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    Lo(t, e, a);
                    break
                } else if (t.tag === 1) {
                    var s = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ha === null || !ha.has(s))) {
                        e = xt(a, e),
                            a = Lu(2),
                            s = da(t, a, 2),
                            s !== null && (Xu(a, s, t, e),
                                _l(s, 2),
                                Ot(s));
                        break
                    }
                }
                t = t.return
            }
    }
    function Vn(e, t, a) {
        var s = e.pingCache;
        if (s === null) {
            s = e.pingCache = new Sf;
            var r = new Set;
            s.set(t, r)
        } else
            r = s.get(t),
                r === void 0 && (r = new Set,
                    s.set(t, r));
        r.has(a) || (Bn = !0,
            r.add(a),
            e = Mf.bind(null, e, t, a),
            t.then(e, e))
    }
    function Mf(e, t, a) {
        var s = e.pingCache;
        s !== null && s.delete(t),
            e.pingedLanes |= e.suspendedLanes & a,
            e.warmLanes &= ~a,
            xe === e && (I & a) === a && (je === 4 || je === 3 && (I & 62914560) === I && 300 > et() - wr ? (se & 2) === 0 && Sl(e, 0) : Hn |= a,
                wl === I && (wl = 0)),
            Ot(e)
    }
    function Xo(e, t) {
        t === 0 && (t = Rc()),
            e = Oa(e, t),
            e !== null && (_l(e, t),
                Ot(e))
    }
    function Df(e) {
        var t = e.memoizedState
            , a = 0;
        t !== null && (a = t.retryLane),
            Xo(e, a)
    }
    function Cf(e, t) {
        var a = 0;
        switch (e.tag) {
            case 31:
            case 13:
                var s = e.stateNode
                    , r = e.memoizedState;
                r !== null && (a = r.retryLane);
                break;
            case 19:
                s = e.stateNode;
                break;
            case 22:
                s = e.stateNode._retryCache;
                break;
            default:
                throw Error(u(314))
        }
        s !== null && s.delete(t),
            Xo(e, a)
    }
    function Of(e, t) {
        return li(e, t)
    }
    var Mr = null
        , El = null
        , Zn = !1
        , Dr = !1
        , Kn = !1
        , ya = 0;
    function Ot(e) {
        e !== El && e.next === null && (El === null ? Mr = El = e : El = El.next = e),
            Dr = !0,
            Zn || (Zn = !0,
                _f())
    }
    function hs(e, t) {
        if (!Kn && Dr) {
            Kn = !0;
            do
                for (var a = !1, s = Mr; s !== null;) {
                    if (e !== 0) {
                        var r = s.pendingLanes;
                        if (r === 0)
                            var i = 0;
                        else {
                            var n = s.suspendedLanes
                                , c = s.pingedLanes;
                            i = (1 << 31 - at(42 | e) + 1) - 1,
                                i &= r & ~(n & ~c),
                                i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0
                        }
                        i !== 0 && (a = !0,
                            Ko(s, i))
                    } else
                        i = I,
                            i = _s(s, s === xe ? i : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== -1),
                            (i & 3) === 0 || Ul(s, i) || (a = !0,
                                Ko(s, i));
                    s = s.next
                }
            while (a);
            Kn = !1
        }
    }
    function Uf() {
        Qo()
    }
    function Qo() {
        Dr = Zn = !1;
        var e = 0;
        ya !== 0 && Vf() && (e = ya);
        for (var t = et(), a = null, s = Mr; s !== null;) {
            var r = s.next
                , i = Vo(s, t);
            i === 0 ? (s.next = null,
                a === null ? Mr = r : a.next = r,
                r === null && (El = a)) : (a = s,
                    (e !== 0 || (i & 3) !== 0) && (Dr = !0)),
                s = r
        }
        De !== 0 && De !== 5 || hs(e),
            ya !== 0 && (ya = 0)
    }
    function Vo(e, t) {
        for (var a = e.suspendedLanes, s = e.pingedLanes, r = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i;) {
            var n = 31 - at(i)
                , c = 1 << n
                , o = r[n];
            o === -1 ? ((c & a) === 0 || (c & s) !== 0) && (r[n] = im(c, t)) : o <= t && (e.expiredLanes |= c),
                i &= ~c
        }
        if (t = xe,
            a = I,
            a = _s(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
            s = e.callbackNode,
            a === 0 || e === t && (ie === 2 || ie === 9) || e.cancelPendingCommit !== null)
            return s !== null && s !== null && si(s),
                e.callbackNode = null,
                e.callbackPriority = 0;
        if ((a & 3) === 0 || Ul(e, a)) {
            if (t = a & -a,
                t === e.callbackPriority)
                return t;
            switch (s !== null && si(s),
            ni(a)) {
                case 2:
                case 8:
                    a = Uc;
                    break;
                case 32:
                    a = Ds;
                    break;
                case 268435456:
                    a = _c;
                    break;
                default:
                    a = Ds
            }
            return s = Zo.bind(null, e),
                a = li(a, s),
                e.callbackPriority = t,
                e.callbackNode = a,
                t
        }
        return s !== null && s !== null && si(s),
            e.callbackPriority = 2,
            e.callbackNode = null,
            2
    }
    function Zo(e, t) {
        if (De !== 0 && De !== 5)
            return e.callbackNode = null,
                e.callbackPriority = 0,
                null;
        var a = e.callbackNode;
        if (zr() && e.callbackNode !== a)
            return null;
        var s = I;
        return s = _s(e, e === xe ? s : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
            s === 0 ? null : (Eo(e, s, t),
                Vo(e, et()),
                e.callbackNode != null && e.callbackNode === a ? Zo.bind(null, e) : null)
    }
    function Ko(e, t) {
        if (zr())
            return null;
        Eo(e, t, !0)
    }
    function _f() {
        Kf(function () {
            (se & 6) !== 0 ? li(Oc, Uf) : Qo()
        })
    }
    function Jn() {
        if (ya === 0) {
            var e = ml;
            e === 0 && (e = Cs,
                Cs <<= 1,
                (Cs & 261888) === 0 && (Cs = 256)),
                ya = e
        }
        return ya
    }
    function Jo(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : qs("" + e)
    }
    function Fo(e, t) {
        var a = t.ownerDocument.createElement("input");
        return a.name = t.name,
            a.value = t.value,
            e.id && a.setAttribute("form", e.id),
            t.parentNode.insertBefore(a, t),
            e = new FormData(e),
            a.parentNode.removeChild(a),
            e
    }
    function Rf(e, t, a, s, r) {
        if (t === "submit" && a && a.stateNode === r) {
            var i = Jo((r[Ke] || null).action)
                , n = s.submitter;
            n && (t = (t = n[Ke] || null) ? Jo(t.formAction) : n.getAttribute("formAction"),
                t !== null && (i = t,
                    n = null));
            var c = new Xs("action", "action", null, s, r);
            e.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function () {
                        if (s.defaultPrevented) {
                            if (ya !== 0) {
                                var o = n ? Fo(r, n) : new FormData(r);
                                xn(a, {
                                    pending: !0,
                                    data: o,
                                    method: r.method,
                                    action: i
                                }, null, o)
                            }
                        } else
                            typeof i == "function" && (c.preventDefault(),
                                o = n ? Fo(r, n) : new FormData(r),
                                xn(a, {
                                    pending: !0,
                                    data: o,
                                    method: r.method,
                                    action: i
                                }, i, o))
                    },
                    currentTarget: r
                }]
            })
        }
    }
    for (var Fn = 0; Fn < Mi.length; Fn++) {
        var $n = Mi[Fn]
            , Bf = $n.toLowerCase()
            , Hf = $n[0].toUpperCase() + $n.slice(1);
        wt(Bf, "on" + Hf)
    }
    wt(Sd, "onAnimationEnd"),
        wt(Td, "onAnimationIteration"),
        wt(Ed, "onAnimationStart"),
        wt("dblclick", "onDoubleClick"),
        wt("focusin", "onFocus"),
        wt("focusout", "onBlur"),
        wt(Pm, "onTransitionRun"),
        wt(ef, "onTransitionStart"),
        wt(tf, "onTransitionCancel"),
        wt(Ad, "onTransitionEnd"),
        Ia("onMouseEnter", ["mouseout", "mouseover"]),
        Ia("onMouseLeave", ["mouseout", "mouseover"]),
        Ia("onPointerEnter", ["pointerout", "pointerover"]),
        Ia("onPointerLeave", ["pointerout", "pointerover"]),
        za("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
        za("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
        za("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
        za("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
        za("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
        za("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var gs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
        , qf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gs));
    function $o(e, t) {
        t = (t & 4) !== 0;
        for (var a = 0; a < e.length; a++) {
            var s = e[a]
                , r = s.event;
            s = s.listeners;
            e: {
                var i = void 0;
                if (t)
                    for (var n = s.length - 1; 0 <= n; n--) {
                        var c = s[n]
                            , o = c.instance
                            , y = c.currentTarget;
                        if (c = c.listener,
                            o !== i && r.isPropagationStopped())
                            break e;
                        i = c,
                            r.currentTarget = y;
                        try {
                            i(r)
                        } catch (k) {
                            Zs(k)
                        }
                        r.currentTarget = null,
                            i = o
                    }
                else
                    for (n = 0; n < s.length; n++) {
                        if (c = s[n],
                            o = c.instance,
                            y = c.currentTarget,
                            c = c.listener,
                            o !== i && r.isPropagationStopped())
                            break e;
                        i = c,
                            r.currentTarget = y;
                        try {
                            i(r)
                        } catch (k) {
                            Zs(k)
                        }
                        r.currentTarget = null,
                            i = o
                    }
            }
        }
    }
    function $(e, t) {
        var a = t[ci];
        a === void 0 && (a = t[ci] = new Set);
        var s = e + "__bubble";
        a.has(s) || (Wo(t, e, 2, !1),
            a.add(s))
    }
    function Wn(e, t, a) {
        var s = 0;
        t && (s |= 4),
            Wo(a, e, s, t)
    }
    var Cr = "_reactListening" + Math.random().toString(36).slice(2);
    function In(e) {
        if (!e[Cr]) {
            e[Cr] = !0,
                Xc.forEach(function (a) {
                    a !== "selectionchange" && (qf.has(a) || Wn(a, !1, e),
                        Wn(a, !0, e))
                });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Cr] || (t[Cr] = !0,
                Wn("selectionchange", !1, t))
        }
    }
    function Wo(e, t, a, s) {
        switch (T0(t)) {
            case 2:
                var r = fx;
                break;
            case 8:
                r = xx;
                break;
            default:
                r = fc
        }
        a = r.bind(null, t, a, e),
            r = void 0,
            !bi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (r = !0),
            s ? r !== void 0 ? e.addEventListener(t, a, {
                capture: !0,
                passive: r
            }) : e.addEventListener(t, a, !0) : r !== void 0 ? e.addEventListener(t, a, {
                passive: r
            }) : e.addEventListener(t, a, !1)
    }
    function Pn(e, t, a, s, r) {
        var i = s;
        if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
            e: for (; ;) {
                if (s === null)
                    return;
                var n = s.tag;
                if (n === 3 || n === 4) {
                    var c = s.stateNode.containerInfo;
                    if (c === r)
                        break;
                    if (n === 4)
                        for (n = s.return; n !== null;) {
                            var o = n.tag;
                            if ((o === 3 || o === 4) && n.stateNode.containerInfo === r)
                                return;
                            n = n.return
                        }
                    for (; c !== null;) {
                        if (n = Fa(c),
                            n === null)
                            return;
                        if (o = n.tag,
                            o === 5 || o === 6 || o === 26 || o === 27) {
                            s = i = n;
                            continue e
                        }
                        c = c.parentNode
                    }
                }
                s = s.return
            }
        td(function () {
            var y = i
                , k = hi(a)
                , E = [];
            e: {
                var p = zd.get(e);
                if (p !== void 0) {
                    var j = Xs
                        , U = e;
                    switch (e) {
                        case "keypress":
                            if (Gs(a) === 0)
                                break e;
                        case "keydown":
                        case "keyup":
                            j = Dm;
                            break;
                        case "focusin":
                            U = "focus",
                                j = ji;
                            break;
                        case "focusout":
                            U = "blur",
                                j = ji;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            j = ji;
                            break;
                        case "click":
                            if (a.button === 2)
                                break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            j = sd;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            j = pm;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            j = Um;
                            break;
                        case Sd:
                        case Td:
                        case Ed:
                            j = Nm;
                            break;
                        case Ad:
                            j = Rm;
                            break;
                        case "scroll":
                        case "scrollend":
                            j = bm;
                            break;
                        case "wheel":
                            j = Hm;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            j = km;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            j = id;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            j = Ym
                    }
                    var G = (t & 4) !== 0
                        , me = !G && (e === "scroll" || e === "scrollend")
                        , h = G ? p !== null ? p + "Capture" : null : p;
                    G = [];
                    for (var m = y, b; m !== null;) {
                        var T = m;
                        if (b = T.stateNode,
                            T = T.tag,
                            T !== 5 && T !== 26 && T !== 27 || b === null || h === null || (T = Hl(m, h),
                                T != null && G.push(bs(m, T, b))),
                            me)
                            break;
                        m = m.return
                    }
                    0 < G.length && (p = new j(p, U, null, a, k),
                        E.push({
                            event: p,
                            listeners: G
                        }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (p = e === "mouseover" || e === "pointerover",
                        j = e === "mouseout" || e === "pointerout",
                        p && a !== xi && (U = a.relatedTarget || a.fromElement) && (Fa(U) || U[Ja]))
                        break e;
                    if ((j || p) && (p = k.window === k ? k : (p = k.ownerDocument) ? p.defaultView || p.parentWindow : window,
                        j ? (U = a.relatedTarget || a.toElement,
                            j = y,
                            U = U ? Fa(U) : null,
                            U !== null && (me = z(U),
                                G = U.tag,
                                U !== me || G !== 5 && G !== 27 && G !== 6) && (U = null)) : (j = null,
                                    U = y),
                        j !== U)) {
                        if (G = sd,
                            T = "onMouseLeave",
                            h = "onMouseEnter",
                            m = "mouse",
                            (e === "pointerout" || e === "pointerover") && (G = id,
                                T = "onPointerLeave",
                                h = "onPointerEnter",
                                m = "pointer"),
                            me = j == null ? p : Bl(j),
                            b = U == null ? p : Bl(U),
                            p = new G(T, m + "leave", j, a, k),
                            p.target = me,
                            p.relatedTarget = b,
                            T = null,
                            Fa(k) === y && (G = new G(h, m + "enter", U, a, k),
                                G.target = b,
                                G.relatedTarget = me,
                                T = G),
                            me = T,
                            j && U)
                            t: {
                                for (G = Yf,
                                    h = j,
                                    m = U,
                                    b = 0,
                                    T = h; T; T = G(T))
                                    b++;
                                T = 0;
                                for (var q = m; q; q = G(q))
                                    T++;
                                for (; 0 < b - T;)
                                    h = G(h),
                                        b--;
                                for (; 0 < T - b;)
                                    m = G(m),
                                        T--;
                                for (; b--;) {
                                    if (h === m || m !== null && h === m.alternate) {
                                        G = h;
                                        break t
                                    }
                                    h = G(h),
                                        m = G(m)
                                }
                                G = null
                            }
                        else
                            G = null;
                        j !== null && Io(E, p, j, G, !1),
                            U !== null && me !== null && Io(E, me, U, G, !0)
                    }
                }
                e: {
                    if (p = y ? Bl(y) : window,
                        j = p.nodeName && p.nodeName.toLowerCase(),
                        j === "select" || j === "input" && p.type === "file")
                        var ae = xd;
                    else if (md(p))
                        if (hd)
                            ae = $m;
                        else {
                            ae = Jm;
                            var B = Km
                        }
                    else
                        j = p.nodeName,
                            !j || j.toLowerCase() !== "input" || p.type !== "checkbox" && p.type !== "radio" ? y && fi(y.elementType) && (ae = xd) : ae = Fm;
                    if (ae && (ae = ae(e, y))) {
                        fd(E, ae, a, k);
                        break e
                    }
                    B && B(e, p, y),
                        e === "focusout" && y && p.type === "number" && y.memoizedProps.value != null && mi(p, "number", p.value)
                }
                switch (B = y ? Bl(y) : window,
                e) {
                    case "focusin":
                        (md(B) || B.contentEditable === "true") && (sl = B,
                            Ei = y,
                            Zl = null);
                        break;
                    case "focusout":
                        Zl = Ei = sl = null;
                        break;
                    case "mousedown":
                        Ai = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Ai = !1,
                            wd(E, a, k);
                        break;
                    case "selectionchange":
                        if (Im)
                            break;
                    case "keydown":
                    case "keyup":
                        wd(E, a, k)
                }
                var K;
                if (wi)
                    e: {
                        switch (e) {
                            case "compositionstart":
                                var P = "onCompositionStart";
                                break e;
                            case "compositionend":
                                P = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                P = "onCompositionUpdate";
                                break e
                        }
                        P = void 0
                    }
                else
                    ll ? ud(e, a) && (P = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (P = "onCompositionStart");
                P && (nd && a.locale !== "ko" && (ll || P !== "onCompositionStart" ? P === "onCompositionEnd" && ll && (K = ad()) : (aa = k,
                    yi = "value" in aa ? aa.value : aa.textContent,
                    ll = !0)),
                    B = Or(y, P),
                    0 < B.length && (P = new rd(P, e, null, a, k),
                        E.push({
                            event: P,
                            listeners: B
                        }),
                        K ? P.data = K : (K = od(a),
                            K !== null && (P.data = K)))),
                    (K = Lm ? Xm(e, a) : Qm(e, a)) && (P = Or(y, "onBeforeInput"),
                        0 < P.length && (B = new rd("onBeforeInput", "beforeinput", null, a, k),
                            E.push({
                                event: B,
                                listeners: P
                            }),
                            B.data = K)),
                    Rf(E, e, y, a, k)
            }
            $o(E, t)
        })
    }
    function bs(e, t, a) {
        return {
            instance: e,
            listener: t,
            currentTarget: a
        }
    }
    function Or(e, t) {
        for (var a = t + "Capture", s = []; e !== null;) {
            var r = e
                , i = r.stateNode;
            if (r = r.tag,
                r !== 5 && r !== 26 && r !== 27 || i === null || (r = Hl(e, a),
                    r != null && s.unshift(bs(e, r, i)),
                    r = Hl(e, t),
                    r != null && s.push(bs(e, r, i))),
                e.tag === 3)
                return s;
            e = e.return
        }
        return []
    }
    function Yf(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function Io(e, t, a, s, r) {
        for (var i = t._reactName, n = []; a !== null && a !== s;) {
            var c = a
                , o = c.alternate
                , y = c.stateNode;
            if (c = c.tag,
                o !== null && o === s)
                break;
            c !== 5 && c !== 26 && c !== 27 || y === null || (o = y,
                r ? (y = Hl(a, i),
                    y != null && n.unshift(bs(a, y, o))) : r || (y = Hl(a, i),
                        y != null && n.push(bs(a, y, o)))),
                a = a.return
        }
        n.length !== 0 && e.push({
            event: t,
            listeners: n
        })
    }
    var Gf = /\r\n?/g
        , Lf = /\u0000|\uFFFD/g;
    function Po(e) {
        return (typeof e == "string" ? e : "" + e).replace(Gf, `
`).replace(Lf, "")
    }
    function e0(e, t) {
        return t = Po(t),
            Po(e) === t
    }
    function oe(e, t, a, s, r, i) {
        switch (a) {
            case "children":
                typeof s == "string" ? t === "body" || t === "textarea" && s === "" || el(e, s) : (typeof s == "number" || typeof s == "bigint") && t !== "body" && el(e, "" + s);
                break;
            case "className":
                Bs(e, "class", s);
                break;
            case "tabIndex":
                Bs(e, "tabindex", s);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Bs(e, a, s);
                break;
            case "style":
                Pc(e, s, i);
                break;
            case "data":
                if (t !== "object") {
                    Bs(e, "data", s);
                    break
                }
            case "src":
            case "href":
                if (s === "" && (t !== "a" || a !== "href")) {
                    e.removeAttribute(a);
                    break
                }
                if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                s = qs("" + s),
                    e.setAttribute(a, s);
                break;
            case "action":
            case "formAction":
                if (typeof s == "function") {
                    e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else
                    typeof i == "function" && (a === "formAction" ? (t !== "input" && oe(e, t, "name", r.name, r, null),
                        oe(e, t, "formEncType", r.formEncType, r, null),
                        oe(e, t, "formMethod", r.formMethod, r, null),
                        oe(e, t, "formTarget", r.formTarget, r, null)) : (oe(e, t, "encType", r.encType, r, null),
                            oe(e, t, "method", r.method, r, null),
                            oe(e, t, "target", r.target, r, null)));
                if (s == null || typeof s == "symbol" || typeof s == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                s = qs("" + s),
                    e.setAttribute(a, s);
                break;
            case "onClick":
                s != null && (e.onclick = Rt);
                break;
            case "onScroll":
                s != null && $("scroll", e);
                break;
            case "onScrollEnd":
                s != null && $("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s))
                        throw Error(u(61));
                    if (a = s.__html,
                        a != null) {
                        if (r.children != null)
                            throw Error(u(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "multiple":
                e.multiple = s && typeof s != "function" && typeof s != "symbol";
                break;
            case "muted":
                e.muted = s && typeof s != "function" && typeof s != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (s == null || typeof s == "function" || typeof s == "boolean" || typeof s == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                a = qs("" + s),
                    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "" + s) : e.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                s && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
                break;
            case "capture":
            case "download":
                s === !0 ? e.setAttribute(a, "") : s !== !1 && s != null && typeof s != "function" && typeof s != "symbol" ? e.setAttribute(a, s) : e.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                s != null && typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s ? e.setAttribute(a, s) : e.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s) ? e.removeAttribute(a) : e.setAttribute(a, s);
                break;
            case "popover":
                $("beforetoggle", e),
                    $("toggle", e),
                    Rs(e, "popover", s);
                break;
            case "xlinkActuate":
                _t(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
                break;
            case "xlinkArcrole":
                _t(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
                break;
            case "xlinkRole":
                _t(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
                break;
            case "xlinkShow":
                _t(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
                break;
            case "xlinkTitle":
                _t(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
                break;
            case "xlinkType":
                _t(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
                break;
            case "xmlBase":
                _t(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
                break;
            case "xmlLang":
                _t(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
                break;
            case "xmlSpace":
                _t(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
                break;
            case "is":
                Rs(e, "is", s);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = hm.get(a) || a,
                    Rs(e, a, s))
        }
    }
    function ec(e, t, a, s, r, i) {
        switch (a) {
            case "style":
                Pc(e, s, i);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s))
                        throw Error(u(61));
                    if (a = s.__html,
                        a != null) {
                        if (r.children != null)
                            throw Error(u(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof s == "string" ? el(e, s) : (typeof s == "number" || typeof s == "bigint") && el(e, "" + s);
                break;
            case "onScroll":
                s != null && $("scroll", e);
                break;
            case "onScrollEnd":
                s != null && $("scrollend", e);
                break;
            case "onClick":
                s != null && (e.onclick = Rt);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Qc.hasOwnProperty(a))
                    e: {
                        if (a[0] === "o" && a[1] === "n" && (r = a.endsWith("Capture"),
                            t = a.slice(2, r ? a.length - 7 : void 0),
                            i = e[Ke] || null,
                            i = i != null ? i[a] : null,
                            typeof i == "function" && e.removeEventListener(t, i, r),
                            typeof s == "function")) {
                            typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                                e.addEventListener(t, s, r);
                            break e
                        }
                        a in e ? e[a] = s : s === !0 ? e.setAttribute(a, "") : Rs(e, a, s)
                    }
        }
    }
    function He(e, t, a) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                $("error", e),
                    $("load", e);
                var s = !1, r = !1, i;
                for (i in a)
                    if (a.hasOwnProperty(i)) {
                        var n = a[i];
                        if (n != null)
                            switch (i) {
                                case "src":
                                    s = !0;
                                    break;
                                case "srcSet":
                                    r = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(u(137, t));
                                default:
                                    oe(e, t, i, n, a, null)
                            }
                    }
                r && oe(e, t, "srcSet", a.srcSet, a, null),
                    s && oe(e, t, "src", a.src, a, null);
                return;
            case "input":
                $("invalid", e);
                var c = i = n = r = null
                    , o = null
                    , y = null;
                for (s in a)
                    if (a.hasOwnProperty(s)) {
                        var k = a[s];
                        if (k != null)
                            switch (s) {
                                case "name":
                                    r = k;
                                    break;
                                case "type":
                                    n = k;
                                    break;
                                case "checked":
                                    o = k;
                                    break;
                                case "defaultChecked":
                                    y = k;
                                    break;
                                case "value":
                                    i = k;
                                    break;
                                case "defaultValue":
                                    c = k;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (k != null)
                                        throw Error(u(137, t));
                                    break;
                                default:
                                    oe(e, t, s, k, a, null)
                            }
                    }
                Fc(e, i, c, o, y, n, r, !1);
                return;
            case "select":
                $("invalid", e),
                    s = n = i = null;
                for (r in a)
                    if (a.hasOwnProperty(r) && (c = a[r],
                        c != null))
                        switch (r) {
                            case "value":
                                i = c;
                                break;
                            case "defaultValue":
                                n = c;
                                break;
                            case "multiple":
                                s = c;
                            default:
                                oe(e, t, r, c, a, null)
                        }
                t = i,
                    a = n,
                    e.multiple = !!s,
                    t != null ? Pa(e, !!s, t, !1) : a != null && Pa(e, !!s, a, !0);
                return;
            case "textarea":
                $("invalid", e),
                    i = r = s = null;
                for (n in a)
                    if (a.hasOwnProperty(n) && (c = a[n],
                        c != null))
                        switch (n) {
                            case "value":
                                s = c;
                                break;
                            case "defaultValue":
                                r = c;
                                break;
                            case "children":
                                i = c;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (c != null)
                                    throw Error(u(91));
                                break;
                            default:
                                oe(e, t, n, c, a, null)
                        }
                Wc(e, s, r, i);
                return;
            case "option":
                for (o in a)
                    if (a.hasOwnProperty(o) && (s = a[o],
                        s != null))
                        switch (o) {
                            case "selected":
                                e.selected = s && typeof s != "function" && typeof s != "symbol";
                                break;
                            default:
                                oe(e, t, o, s, a, null)
                        }
                return;
            case "dialog":
                $("beforetoggle", e),
                    $("toggle", e),
                    $("cancel", e),
                    $("close", e);
                break;
            case "iframe":
            case "object":
                $("load", e);
                break;
            case "video":
            case "audio":
                for (s = 0; s < gs.length; s++)
                    $(gs[s], e);
                break;
            case "image":
                $("error", e),
                    $("load", e);
                break;
            case "details":
                $("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                $("error", e),
                    $("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (y in a)
                    if (a.hasOwnProperty(y) && (s = a[y],
                        s != null))
                        switch (y) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(u(137, t));
                            default:
                                oe(e, t, y, s, a, null)
                        }
                return;
            default:
                if (fi(t)) {
                    for (k in a)
                        a.hasOwnProperty(k) && (s = a[k],
                            s !== void 0 && ec(e, t, k, s, a, void 0));
                    return
                }
        }
        for (c in a)
            a.hasOwnProperty(c) && (s = a[c],
                s != null && oe(e, t, c, s, a, null))
    }
    function Xf(e, t, a, s) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var r = null
                    , i = null
                    , n = null
                    , c = null
                    , o = null
                    , y = null
                    , k = null;
                for (j in a) {
                    var E = a[j];
                    if (a.hasOwnProperty(j) && E != null)
                        switch (j) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                o = E;
                            default:
                                s.hasOwnProperty(j) || oe(e, t, j, null, s, E)
                        }
                }
                for (var p in s) {
                    var j = s[p];
                    if (E = a[p],
                        s.hasOwnProperty(p) && (j != null || E != null))
                        switch (p) {
                            case "type":
                                i = j;
                                break;
                            case "name":
                                r = j;
                                break;
                            case "checked":
                                y = j;
                                break;
                            case "defaultChecked":
                                k = j;
                                break;
                            case "value":
                                n = j;
                                break;
                            case "defaultValue":
                                c = j;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (j != null)
                                    throw Error(u(137, t));
                                break;
                            default:
                                j !== E && oe(e, t, p, j, s, E)
                        }
                }
                oi(e, n, c, o, y, k, i, r);
                return;
            case "select":
                j = n = c = p = null;
                for (i in a)
                    if (o = a[i],
                        a.hasOwnProperty(i) && o != null)
                        switch (i) {
                            case "value":
                                break;
                            case "multiple":
                                j = o;
                            default:
                                s.hasOwnProperty(i) || oe(e, t, i, null, s, o)
                        }
                for (r in s)
                    if (i = s[r],
                        o = a[r],
                        s.hasOwnProperty(r) && (i != null || o != null))
                        switch (r) {
                            case "value":
                                p = i;
                                break;
                            case "defaultValue":
                                c = i;
                                break;
                            case "multiple":
                                n = i;
                            default:
                                i !== o && oe(e, t, r, i, s, o)
                        }
                t = c,
                    a = n,
                    s = j,
                    p != null ? Pa(e, !!a, p, !1) : !!s != !!a && (t != null ? Pa(e, !!a, t, !0) : Pa(e, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                j = p = null;
                for (c in a)
                    if (r = a[c],
                        a.hasOwnProperty(c) && r != null && !s.hasOwnProperty(c))
                        switch (c) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                oe(e, t, c, null, s, r)
                        }
                for (n in s)
                    if (r = s[n],
                        i = a[n],
                        s.hasOwnProperty(n) && (r != null || i != null))
                        switch (n) {
                            case "value":
                                p = r;
                                break;
                            case "defaultValue":
                                j = r;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (r != null)
                                    throw Error(u(91));
                                break;
                            default:
                                r !== i && oe(e, t, n, r, s, i)
                        }
                $c(e, p, j);
                return;
            case "option":
                for (var U in a)
                    if (p = a[U],
                        a.hasOwnProperty(U) && p != null && !s.hasOwnProperty(U))
                        switch (U) {
                            case "selected":
                                e.selected = !1;
                                break;
                            default:
                                oe(e, t, U, null, s, p)
                        }
                for (o in s)
                    if (p = s[o],
                        j = a[o],
                        s.hasOwnProperty(o) && p !== j && (p != null || j != null))
                        switch (o) {
                            case "selected":
                                e.selected = p && typeof p != "function" && typeof p != "symbol";
                                break;
                            default:
                                oe(e, t, o, p, s, j)
                        }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var G in a)
                    p = a[G],
                        a.hasOwnProperty(G) && p != null && !s.hasOwnProperty(G) && oe(e, t, G, null, s, p);
                for (y in s)
                    if (p = s[y],
                        j = a[y],
                        s.hasOwnProperty(y) && p !== j && (p != null || j != null))
                        switch (y) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (p != null)
                                    throw Error(u(137, t));
                                break;
                            default:
                                oe(e, t, y, p, s, j)
                        }
                return;
            default:
                if (fi(t)) {
                    for (var me in a)
                        p = a[me],
                            a.hasOwnProperty(me) && p !== void 0 && !s.hasOwnProperty(me) && ec(e, t, me, void 0, s, p);
                    for (k in s)
                        p = s[k],
                            j = a[k],
                            !s.hasOwnProperty(k) || p === j || p === void 0 && j === void 0 || ec(e, t, k, p, s, j);
                    return
                }
        }
        for (var h in a)
            p = a[h],
                a.hasOwnProperty(h) && p != null && !s.hasOwnProperty(h) && oe(e, t, h, null, s, p);
        for (E in s)
            p = s[E],
                j = a[E],
                !s.hasOwnProperty(E) || p === j || p == null && j == null || oe(e, t, E, p, s, j)
    }
    function t0(e) {
        switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
                return !0;
            default:
                return !1
        }
    }
    function Qf() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), s = 0; s < a.length; s++) {
                var r = a[s]
                    , i = r.transferSize
                    , n = r.initiatorType
                    , c = r.duration;
                if (i && c && t0(n)) {
                    for (n = 0,
                        c = r.responseEnd,
                        s += 1; s < a.length; s++) {
                        var o = a[s]
                            , y = o.startTime;
                        if (y > c)
                            break;
                        var k = o.transferSize
                            , E = o.initiatorType;
                        k && t0(E) && (o = o.responseEnd,
                            n += k * (o < c ? 1 : (c - y) / (o - y)))
                    }
                    if (--s,
                        t += 8 * (i + n) / (r.duration / 1e3),
                        e++,
                        10 < e)
                        break
                }
            }
            if (0 < e)
                return t / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
            typeof e == "number") ? e : 5
    }
    var tc = null
        , ac = null;
    function Ur(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function a0(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }
    function l0(e, t) {
        if (e === 0)
            switch (t) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function lc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var sc = null;
    function Vf() {
        var e = window.event;
        return e && e.type === "popstate" ? e === sc ? !1 : (sc = e,
            !0) : (sc = null,
                !1)
    }
    var s0 = typeof setTimeout == "function" ? setTimeout : void 0
        , Zf = typeof clearTimeout == "function" ? clearTimeout : void 0
        , r0 = typeof Promise == "function" ? Promise : void 0
        , Kf = typeof queueMicrotask == "function" ? queueMicrotask : typeof r0 < "u" ? function (e) {
            return r0.resolve(null).then(e).catch(Jf)
        }
            : s0;
    function Jf(e) {
        setTimeout(function () {
            throw e
        })
    }
    function pa(e) {
        return e === "head"
    }
    function i0(e, t) {
        var a = t
            , s = 0;
        do {
            var r = a.nextSibling;
            if (e.removeChild(a),
                r && r.nodeType === 8)
                if (a = r.data,
                    a === "/$" || a === "/&") {
                    if (s === 0) {
                        e.removeChild(r),
                            Dl(t);
                        return
                    }
                    s--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    s++;
                else if (a === "html")
                    ys(e.ownerDocument.documentElement);
                else if (a === "head") {
                    a = e.ownerDocument.head,
                        ys(a);
                    for (var i = a.firstChild; i;) {
                        var n = i.nextSibling
                            , c = i.nodeName;
                        i[Rl] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i),
                            i = n
                    }
                } else
                    a === "body" && ys(e.ownerDocument.body);
            a = r
        } while (a);
        Dl(t)
    }
    function n0(e, t) {
        var a = e;
        e = 0;
        do {
            var s = a.nextSibling;
            if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display,
                a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
                    a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue,
                        a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
                s && s.nodeType === 8)
                if (a = s.data,
                    a === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
            a = s
        } while (a)
    }
    function rc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var a = t;
            switch (t = t.nextSibling,
            a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    rc(a),
                        di(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet")
                        continue
            }
            e.removeChild(a)
        }
    }
    function Ff(e, t, a, s) {
        for (; e.nodeType === 1;) {
            var r = a;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (s) {
                if (!e[Rl])
                    switch (t) {
                        case "meta":
                            if (!e.hasAttribute("itemprop"))
                                break;
                            return e;
                        case "link":
                            if (i = e.getAttribute("rel"),
                                i === "stylesheet" && e.hasAttribute("data-precedence"))
                                break;
                            if (i !== r.rel || e.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || e.getAttribute("title") !== (r.title == null ? null : r.title))
                                break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence"))
                                break;
                            return e;
                        case "script":
                            if (i = e.getAttribute("src"),
                                (i !== (r.src == null ? null : r.src) || e.getAttribute("type") !== (r.type == null ? null : r.type) || e.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                break;
                            return e;
                        default:
                            return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var i = r.name == null ? null : "" + r.name;
                if (r.type === "hidden" && e.getAttribute("name") === i)
                    return e
            } else
                return e;
            if (e = pt(e.nextSibling),
                e === null)
                break
        }
        return null
    }
    function $f(e, t, a) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = pt(e.nextSibling),
                e === null))
                return null;
        return e
    }
    function c0(e, t) {
        for (; e.nodeType !== 8;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = pt(e.nextSibling),
                e === null))
                return null;
        return e
    }
    function ic(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function nc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function Wf(e, t) {
        var a = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = t;
        else if (e.data !== "$?" || a.readyState !== "loading")
            t();
        else {
            var s = function () {
                t(),
                    a.removeEventListener("DOMContentLoaded", s)
            };
            a.addEventListener("DOMContentLoaded", s),
                e._reactRetry = s
        }
    }
    function pt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                    t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return e
    }
    var cc = null;
    function d0(e) {
        e = e.nextSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "/$" || a === "/&") {
                    if (t === 0)
                        return pt(e.nextSibling);
                    t--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++
            }
            e = e.nextSibling
        }
        return null
    }
    function u0(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var a = e.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    a !== "/$" && a !== "/&" || t++
            }
            e = e.previousSibling
        }
        return null
    }
    function o0(e, t, a) {
        switch (t = Ur(a),
        e) {
            case "html":
                if (e = t.documentElement,
                    !e)
                    throw Error(u(452));
                return e;
            case "head":
                if (e = t.head,
                    !e)
                    throw Error(u(453));
                return e;
            case "body":
                if (e = t.body,
                    !e)
                    throw Error(u(454));
                return e;
            default:
                throw Error(u(451))
        }
    }
    function ys(e) {
        for (var t = e.attributes; t.length;)
            e.removeAttributeNode(t[0]);
        di(e)
    }
    var vt = new Map
        , m0 = new Set;
    function _r(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var It = C.d;
    C.d = {
        f: If,
        r: Pf,
        D: ex,
        C: tx,
        L: ax,
        m: lx,
        X: rx,
        S: sx,
        M: ix
    };
    function If() {
        var e = It.f()
            , t = Tr();
        return e || t
    }
    function Pf(e) {
        var t = $a(e);
        t !== null && t.tag === 5 && t.type === "form" ? Au(t) : It.r(e)
    }
    var Al = typeof document > "u" ? null : document;
    function f0(e, t, a) {
        var s = Al;
        if (s && typeof t == "string" && t) {
            var r = mt(t);
            r = 'link[rel="' + e + '"][href="' + r + '"]',
                typeof a == "string" && (r += '[crossorigin="' + a + '"]'),
                m0.has(r) || (m0.add(r),
                    e = {
                        rel: e,
                        crossOrigin: a,
                        href: t
                    },
                    s.querySelector(r) === null && (t = s.createElement("link"),
                        He(t, "link", e),
                        Ce(t),
                        s.head.appendChild(t)))
        }
    }
    function ex(e) {
        It.D(e),
            f0("dns-prefetch", e, null)
    }
    function tx(e, t) {
        It.C(e, t),
            f0("preconnect", e, t)
    }
    function ax(e, t, a) {
        It.L(e, t, a);
        var s = Al;
        if (s && e && t) {
            var r = 'link[rel="preload"][as="' + mt(t) + '"]';
            t === "image" && a && a.imageSrcSet ? (r += '[imagesrcset="' + mt(a.imageSrcSet) + '"]',
                typeof a.imageSizes == "string" && (r += '[imagesizes="' + mt(a.imageSizes) + '"]')) : r += '[href="' + mt(e) + '"]';
            var i = r;
            switch (t) {
                case "style":
                    i = zl(e);
                    break;
                case "script":
                    i = Ml(e)
            }
            vt.has(i) || (e = M({
                rel: "preload",
                href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                as: t
            }, a),
                vt.set(i, e),
                s.querySelector(r) !== null || t === "style" && s.querySelector(ps(i)) || t === "script" && s.querySelector(vs(i)) || (t = s.createElement("link"),
                    He(t, "link", e),
                    Ce(t),
                    s.head.appendChild(t)))
        }
    }
    function lx(e, t) {
        It.m(e, t);
        var a = Al;
        if (a && e) {
            var s = t && typeof t.as == "string" ? t.as : "script"
                , r = 'link[rel="modulepreload"][as="' + mt(s) + '"][href="' + mt(e) + '"]'
                , i = r;
            switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    i = Ml(e)
            }
            if (!vt.has(i) && (e = M({
                rel: "modulepreload",
                href: e
            }, t),
                vt.set(i, e),
                a.querySelector(r) === null)) {
                switch (s) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(vs(i)))
                            return
                }
                s = a.createElement("link"),
                    He(s, "link", e),
                    Ce(s),
                    a.head.appendChild(s)
            }
        }
    }
    function sx(e, t, a) {
        It.S(e, t, a);
        var s = Al;
        if (s && e) {
            var r = Wa(s).hoistableStyles
                , i = zl(e);
            t = t || "default";
            var n = r.get(i);
            if (!n) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (n = s.querySelector(ps(i)))
                    c.loading = 5;
                else {
                    e = M({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, a),
                        (a = vt.get(i)) && dc(e, a);
                    var o = n = s.createElement("link");
                    Ce(o),
                        He(o, "link", e),
                        o._p = new Promise(function (y, k) {
                            o.onload = y,
                                o.onerror = k
                        }
                        ),
                        o.addEventListener("load", function () {
                            c.loading |= 1
                        }),
                        o.addEventListener("error", function () {
                            c.loading |= 2
                        }),
                        c.loading |= 4,
                        Rr(n, t, s)
                }
                n = {
                    type: "stylesheet",
                    instance: n,
                    count: 1,
                    state: c
                },
                    r.set(i, n)
            }
        }
    }
    function rx(e, t) {
        It.X(e, t);
        var a = Al;
        if (a && e) {
            var s = Wa(a).hoistableScripts
                , r = Ml(e)
                , i = s.get(r);
            i || (i = a.querySelector(vs(r)),
                i || (e = M({
                    src: e,
                    async: !0
                }, t),
                    (t = vt.get(r)) && uc(e, t),
                    i = a.createElement("script"),
                    Ce(i),
                    He(i, "link", e),
                    a.head.appendChild(i)),
                i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                },
                s.set(r, i))
        }
    }
    function ix(e, t) {
        It.M(e, t);
        var a = Al;
        if (a && e) {
            var s = Wa(a).hoistableScripts
                , r = Ml(e)
                , i = s.get(r);
            i || (i = a.querySelector(vs(r)),
                i || (e = M({
                    src: e,
                    async: !0,
                    type: "module"
                }, t),
                    (t = vt.get(r)) && uc(e, t),
                    i = a.createElement("script"),
                    Ce(i),
                    He(i, "link", e),
                    a.head.appendChild(i)),
                i = {
                    type: "script",
                    instance: i,
                    count: 1,
                    state: null
                },
                s.set(r, i))
        }
    }
    function x0(e, t, a, s) {
        var r = (r = J.current) ? _r(r) : null;
        if (!r)
            throw Error(u(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (t = zl(a.href),
                    a = Wa(r).hoistableStyles,
                    s = a.get(t),
                    s || (s = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    },
                        a.set(t, s)),
                    s) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    e = zl(a.href);
                    var i = Wa(r).hoistableStyles
                        , n = i.get(e);
                    if (n || (r = r.ownerDocument || r,
                        n = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        },
                        i.set(e, n),
                        (i = r.querySelector(ps(e))) && !i._p && (n.instance = i,
                            n.state.loading = 5),
                        vt.has(e) || (a = {
                            rel: "preload",
                            as: "style",
                            href: a.href,
                            crossOrigin: a.crossOrigin,
                            integrity: a.integrity,
                            media: a.media,
                            hrefLang: a.hrefLang,
                            referrerPolicy: a.referrerPolicy
                        },
                            vt.set(e, a),
                            i || nx(r, e, a, n.state))),
                        t && s === null)
                        throw Error(u(528, ""));
                    return n
                }
                if (t && s !== null)
                    throw Error(u(529, ""));
                return null;
            case "script":
                return t = a.async,
                    a = a.src,
                    typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ml(a),
                        a = Wa(r).hoistableScripts,
                        s = a.get(t),
                        s || (s = {
                            type: "script",
                            instance: null,
                            count: 0,
                            state: null
                        },
                            a.set(t, s)),
                        s) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
            default:
                throw Error(u(444, e))
        }
    }
    function zl(e) {
        return 'href="' + mt(e) + '"'
    }
    function ps(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function h0(e) {
        return M({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function nx(e, t, a, s) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? s.loading = 1 : (t = e.createElement("link"),
            s.preload = t,
            t.addEventListener("load", function () {
                return s.loading |= 1
            }),
            t.addEventListener("error", function () {
                return s.loading |= 2
            }),
            He(t, "link", a),
            Ce(t),
            e.head.appendChild(t))
    }
    function Ml(e) {
        return '[src="' + mt(e) + '"]'
    }
    function vs(e) {
        return "script[async]" + e
    }
    function g0(e, t, a) {
        if (t.count++,
            t.instance === null)
            switch (t.type) {
                case "style":
                    var s = e.querySelector('style[data-href~="' + mt(a.href) + '"]');
                    if (s)
                        return t.instance = s,
                            Ce(s),
                            s;
                    var r = M({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return s = (e.ownerDocument || e).createElement("style"),
                        Ce(s),
                        He(s, "style", r),
                        Rr(s, a.precedence, e),
                        t.instance = s;
                case "stylesheet":
                    r = zl(a.href);
                    var i = e.querySelector(ps(r));
                    if (i)
                        return t.state.loading |= 4,
                            t.instance = i,
                            Ce(i),
                            i;
                    s = h0(a),
                        (r = vt.get(r)) && dc(s, r),
                        i = (e.ownerDocument || e).createElement("link"),
                        Ce(i);
                    var n = i;
                    return n._p = new Promise(function (c, o) {
                        n.onload = c,
                            n.onerror = o
                    }
                    ),
                        He(i, "link", s),
                        t.state.loading |= 4,
                        Rr(i, a.precedence, e),
                        t.instance = i;
                case "script":
                    return i = Ml(a.src),
                        (r = e.querySelector(vs(i))) ? (t.instance = r,
                            Ce(r),
                            r) : (s = a,
                                (r = vt.get(i)) && (s = M({}, a),
                                    uc(s, r)),
                                e = e.ownerDocument || e,
                                r = e.createElement("script"),
                                Ce(r),
                                He(r, "link", s),
                                e.head.appendChild(r),
                                t.instance = r);
                case "void":
                    return null;
                default:
                    throw Error(u(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (s = t.instance,
                t.state.loading |= 4,
                Rr(s, a.precedence, e));
        return t.instance
    }
    function Rr(e, t, a) {
        for (var s = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), r = s.length ? s[s.length - 1] : null, i = r, n = 0; n < s.length; n++) {
            var c = s[n];
            if (c.dataset.precedence === t)
                i = c;
            else if (i !== r)
                break
        }
        i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
            t.insertBefore(e, t.firstChild))
    }
    function dc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title)
    }
    function uc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity)
    }
    var Br = null;
    function b0(e, t, a) {
        if (Br === null) {
            var s = new Map
                , r = Br = new Map;
            r.set(a, s)
        } else
            r = Br,
                s = r.get(a),
                s || (s = new Map,
                    r.set(a, s));
        if (s.has(e))
            return s;
        for (s.set(e, null),
            a = a.getElementsByTagName(e),
            r = 0; r < a.length; r++) {
            var i = a[r];
            if (!(i[Rl] || i[Ue] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
                var n = i.getAttribute(t) || "";
                n = e + n;
                var c = s.get(n);
                c ? c.push(i) : s.set(n, [i])
            }
        }
        return s
    }
    function y0(e, t, a) {
        e = e.ownerDocument || e,
            e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
    }
    function cx(e, t, a) {
        if (a === 1 || t.itemProp != null)
            return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                    break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                    break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled,
                            typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                    return !0
        }
        return !1
    }
    function p0(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function dx(e, t, a, s) {
        if (a.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var r = zl(s.href)
                    , i = t.querySelector(ps(r));
                if (i) {
                    t = i._p,
                        t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++,
                            e = Hr.bind(e),
                            t.then(e, e)),
                        a.state.loading |= 4,
                        a.instance = i,
                        Ce(i);
                    return
                }
                i = t.ownerDocument || t,
                    s = h0(s),
                    (r = vt.get(r)) && dc(s, r),
                    i = i.createElement("link"),
                    Ce(i);
                var n = i;
                n._p = new Promise(function (c, o) {
                    n.onload = c,
                        n.onerror = o
                }
                ),
                    He(i, "link", s),
                    a.instance = i
            }
            e.stylesheets === null && (e.stylesheets = new Map),
                e.stylesheets.set(a, t),
                (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++,
                    a = Hr.bind(e),
                    t.addEventListener("load", a),
                    t.addEventListener("error", a))
        }
    }
    var oc = 0;
    function ux(e, t) {
        return e.stylesheets && e.count === 0 && Yr(e, e.stylesheets),
            0 < e.count || 0 < e.imgCount ? function (a) {
                var s = setTimeout(function () {
                    if (e.stylesheets && Yr(e, e.stylesheets),
                        e.unsuspend) {
                        var i = e.unsuspend;
                        e.unsuspend = null,
                            i()
                    }
                }, 6e4 + t);
                0 < e.imgBytes && oc === 0 && (oc = 62500 * Qf());
                var r = setTimeout(function () {
                    if (e.waitingForImages = !1,
                        e.count === 0 && (e.stylesheets && Yr(e, e.stylesheets),
                            e.unsuspend)) {
                        var i = e.unsuspend;
                        e.unsuspend = null,
                            i()
                    }
                }, (e.imgBytes > oc ? 50 : 800) + t);
                return e.unsuspend = a,
                    function () {
                        e.unsuspend = null,
                            clearTimeout(s),
                            clearTimeout(r)
                    }
            }
                : null
    }
    function Hr() {
        if (this.count--,
            this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Yr(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                    e()
            }
        }
    }
    var qr = null;
    function Yr(e, t) {
        e.stylesheets = null,
            e.unsuspend !== null && (e.count++,
                qr = new Map,
                t.forEach(ox, e),
                qr = null,
                Hr.call(e))
    }
    function ox(e, t) {
        if (!(t.state.loading & 4)) {
            var a = qr.get(e);
            if (a)
                var s = a.get(null);
            else {
                a = new Map,
                    qr.set(e, a);
                for (var r = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < r.length; i++) {
                    var n = r[i];
                    (n.nodeName === "LINK" || n.getAttribute("media") !== "not all") && (a.set(n.dataset.precedence, n),
                        s = n)
                }
                s && a.set(null, s)
            }
            r = t.instance,
                n = r.getAttribute("data-precedence"),
                i = a.get(n) || s,
                i === s && a.set(null, r),
                a.set(n, r),
                this.count++,
                s = Hr.bind(this),
                r.addEventListener("load", s),
                r.addEventListener("error", s),
                i ? i.parentNode.insertBefore(r, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
                    e.insertBefore(r, e.firstChild)),
                t.state.loading |= 4
        }
    }
    var js = {
        $$typeof: qe,
        Provider: null,
        Consumer: null,
        _currentValue: L,
        _currentValue2: L,
        _threadCount: 0
    };
    function mx(e, t, a, s, r, i, n, c, o) {
        this.tag = 1,
            this.containerInfo = e,
            this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
            this.callbackPriority = 0,
            this.expirationTimes = ri(-1),
            this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = ri(0),
            this.hiddenUpdates = ri(null),
            this.identifierPrefix = s,
            this.onUncaughtError = r,
            this.onCaughtError = i,
            this.onRecoverableError = n,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = o,
            this.incompleteTransitions = new Map
    }
    function v0(e, t, a, s, r, i, n, c, o, y, k, E) {
        return e = new mx(e, t, a, n, o, y, k, E, c),
            t = 1,
            i === !0 && (t |= 24),
            i = st(3, null, null, t),
            e.current = i,
            i.stateNode = e,
            t = Xi(),
            t.refCount++,
            e.pooledCache = t,
            t.refCount++,
            i.memoizedState = {
                element: s,
                isDehydrated: a,
                cache: t
            },
            Ki(i),
            e
    }
    function j0(e) {
        return e ? (e = nl,
            e) : nl
    }
    function N0(e, t, a, s, r, i) {
        r = j0(r),
            s.context === null ? s.context = r : s.pendingContext = r,
            s = ca(t),
            s.payload = {
                element: a
            },
            i = i === void 0 ? null : i,
            i !== null && (s.callback = i),
            a = da(e, s, t),
            a !== null && (Pe(a, e, t),
                Pl(a, e, t))
    }
    function w0(e, t) {
        if (e = e.memoizedState,
            e !== null && e.dehydrated !== null) {
            var a = e.retryLane;
            e.retryLane = a !== 0 && a < t ? a : t
        }
    }
    function mc(e, t) {
        w0(e, t),
            (e = e.alternate) && w0(e, t)
    }
    function k0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = Oa(e, 67108864);
            t !== null && Pe(t, e, 67108864),
                mc(e, 67108864)
        }
    }
    function S0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var t = dt();
            t = ii(t);
            var a = Oa(e, t);
            a !== null && Pe(a, e, t),
                mc(e, t)
        }
    }
    var Gr = !0;
    function fx(e, t, a, s) {
        var r = S.T;
        S.T = null;
        var i = C.p;
        try {
            C.p = 2,
                fc(e, t, a, s)
        } finally {
            C.p = i,
                S.T = r
        }
    }
    function xx(e, t, a, s) {
        var r = S.T;
        S.T = null;
        var i = C.p;
        try {
            C.p = 8,
                fc(e, t, a, s)
        } finally {
            C.p = i,
                S.T = r
        }
    }
    function fc(e, t, a, s) {
        if (Gr) {
            var r = xc(s);
            if (r === null)
                Pn(e, t, s, Lr, a),
                    E0(e, s);
            else if (gx(r, e, t, a, s))
                s.stopPropagation();
            else if (E0(e, s),
                t & 4 && -1 < hx.indexOf(e)) {
                for (; r !== null;) {
                    var i = $a(r);
                    if (i !== null)
                        switch (i.tag) {
                            case 3:
                                if (i = i.stateNode,
                                    i.current.memoizedState.isDehydrated) {
                                    var n = Aa(i.pendingLanes);
                                    if (n !== 0) {
                                        var c = i;
                                        for (c.pendingLanes |= 2,
                                            c.entangledLanes |= 2; n;) {
                                            var o = 1 << 31 - at(n);
                                            c.entanglements[1] |= o,
                                                n &= ~o
                                        }
                                        Ot(i),
                                            (se & 6) === 0 && (kr = et() + 500,
                                                hs(0))
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                c = Oa(i, 2),
                                    c !== null && Pe(c, i, 2),
                                    Tr(),
                                    mc(i, 2)
                        }
                    if (i = xc(s),
                        i === null && Pn(e, t, s, Lr, a),
                        i === r)
                        break;
                    r = i
                }
                r !== null && s.stopPropagation()
            } else
                Pn(e, t, s, null, a)
        }
    }
    function xc(e) {
        return e = hi(e),
            hc(e)
    }
    var Lr = null;
    function hc(e) {
        if (Lr = null,
            e = Fa(e),
            e !== null) {
            var t = z(e);
            if (t === null)
                e = null;
            else {
                var a = t.tag;
                if (a === 13) {
                    if (e = D(t),
                        e !== null)
                        return e;
                    e = null
                } else if (a === 31) {
                    if (e = Y(t),
                        e !== null)
                        return e;
                    e = null
                } else if (a === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Lr = e,
            null
    }
    function T0(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (P0()) {
                    case Oc:
                        return 2;
                    case Uc:
                        return 8;
                    case Ds:
                    case em:
                        return 32;
                    case _c:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var gc = !1
        , va = null
        , ja = null
        , Na = null
        , Ns = new Map
        , ws = new Map
        , wa = []
        , hx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function E0(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                va = null;
                break;
            case "dragenter":
            case "dragleave":
                ja = null;
                break;
            case "mouseover":
            case "mouseout":
                Na = null;
                break;
            case "pointerover":
            case "pointerout":
                Ns.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ws.delete(t.pointerId)
        }
    }
    function ks(e, t, a, s, r, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: t,
            domEventName: a,
            eventSystemFlags: s,
            nativeEvent: i,
            targetContainers: [r]
        },
            t !== null && (t = $a(t),
                t !== null && k0(t)),
            e) : (e.eventSystemFlags |= s,
                t = e.targetContainers,
                r !== null && t.indexOf(r) === -1 && t.push(r),
                e)
    }
    function gx(e, t, a, s, r) {
        switch (t) {
            case "focusin":
                return va = ks(va, e, t, a, s, r),
                    !0;
            case "dragenter":
                return ja = ks(ja, e, t, a, s, r),
                    !0;
            case "mouseover":
                return Na = ks(Na, e, t, a, s, r),
                    !0;
            case "pointerover":
                var i = r.pointerId;
                return Ns.set(i, ks(Ns.get(i) || null, e, t, a, s, r)),
                    !0;
            case "gotpointercapture":
                return i = r.pointerId,
                    ws.set(i, ks(ws.get(i) || null, e, t, a, s, r)),
                    !0
        }
        return !1
    }
    function A0(e) {
        var t = Fa(e.target);
        if (t !== null) {
            var a = z(t);
            if (a !== null) {
                if (t = a.tag,
                    t === 13) {
                    if (t = D(a),
                        t !== null) {
                        e.blockedOn = t,
                            Gc(e.priority, function () {
                                S0(a)
                            });
                        return
                    }
                } else if (t === 31) {
                    if (t = Y(a),
                        t !== null) {
                        e.blockedOn = t,
                            Gc(e.priority, function () {
                                S0(a)
                            });
                        return
                    }
                } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Xr(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var a = xc(e.nativeEvent);
            if (a === null) {
                a = e.nativeEvent;
                var s = new a.constructor(a.type, a);
                xi = s,
                    a.target.dispatchEvent(s),
                    xi = null
            } else
                return t = $a(a),
                    t !== null && k0(t),
                    e.blockedOn = a,
                    !1;
            t.shift()
        }
        return !0
    }
    function z0(e, t, a) {
        Xr(e) && a.delete(t)
    }
    function bx() {
        gc = !1,
            va !== null && Xr(va) && (va = null),
            ja !== null && Xr(ja) && (ja = null),
            Na !== null && Xr(Na) && (Na = null),
            Ns.forEach(z0),
            ws.forEach(z0)
    }
    function Qr(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
            gc || (gc = !0,
                d.unstable_scheduleCallback(d.unstable_NormalPriority, bx)))
    }
    var Vr = null;
    function M0(e) {
        Vr !== e && (Vr = e,
            d.unstable_scheduleCallback(d.unstable_NormalPriority, function () {
                Vr === e && (Vr = null);
                for (var t = 0; t < e.length; t += 3) {
                    var a = e[t]
                        , s = e[t + 1]
                        , r = e[t + 2];
                    if (typeof s != "function") {
                        if (hc(s || a) === null)
                            continue;
                        break
                    }
                    var i = $a(a);
                    i !== null && (e.splice(t, 3),
                        t -= 3,
                        xn(i, {
                            pending: !0,
                            data: r,
                            method: a.method,
                            action: s
                        }, s, r))
                }
            }))
    }
    function Dl(e) {
        function t(o) {
            return Qr(o, e)
        }
        va !== null && Qr(va, e),
            ja !== null && Qr(ja, e),
            Na !== null && Qr(Na, e),
            Ns.forEach(t),
            ws.forEach(t);
        for (var a = 0; a < wa.length; a++) {
            var s = wa[a];
            s.blockedOn === e && (s.blockedOn = null)
        }
        for (; 0 < wa.length && (a = wa[0],
            a.blockedOn === null);)
            A0(a),
                a.blockedOn === null && wa.shift();
        if (a = (e.ownerDocument || e).$$reactFormReplay,
            a != null)
            for (s = 0; s < a.length; s += 3) {
                var r = a[s]
                    , i = a[s + 1]
                    , n = r[Ke] || null;
                if (typeof i == "function")
                    n || M0(a);
                else if (n) {
                    var c = null;
                    if (i && i.hasAttribute("formAction")) {
                        if (r = i,
                            n = i[Ke] || null)
                            c = n.formAction;
                        else if (hc(r) !== null)
                            continue
                    } else
                        c = n.action;
                    typeof c == "function" ? a[s + 1] = c : (a.splice(s, 3),
                        s -= 3),
                        M0(a)
                }
            }
    }
    function D0() {
        function e(i) {
            i.canIntercept && i.info === "react-transition" && i.intercept({
                handler: function () {
                    return new Promise(function (n) {
                        return r = n
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            r !== null && (r(),
                r = null),
                s || setTimeout(a, 20)
        }
        function a() {
            if (!s && !navigation.transition) {
                var i = navigation.currentEntry;
                i && i.url != null && navigation.navigate(i.url, {
                    state: i.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var s = !1
                , r = null;
            return navigation.addEventListener("navigate", e),
                navigation.addEventListener("navigatesuccess", t),
                navigation.addEventListener("navigateerror", t),
                setTimeout(a, 100),
                function () {
                    s = !0,
                        navigation.removeEventListener("navigate", e),
                        navigation.removeEventListener("navigatesuccess", t),
                        navigation.removeEventListener("navigateerror", t),
                        r !== null && (r(),
                            r = null)
                }
        }
    }
    function bc(e) {
        this._internalRoot = e
    }
    Zr.prototype.render = bc.prototype.render = function (e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(u(409));
        var a = t.current
            , s = dt();
        N0(a, s, e, t, null, null)
    }
        ,
        Zr.prototype.unmount = bc.prototype.unmount = function () {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                N0(e.current, 2, null, e, null, null),
                    Tr(),
                    t[Ja] = null
            }
        }
        ;
    function Zr(e) {
        this._internalRoot = e
    }
    Zr.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
            var t = Yc();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var a = 0; a < wa.length && t !== 0 && t < wa[a].priority; a++)
                ;
            wa.splice(a, 0, e),
                a === 0 && A0(e)
        }
    }
        ;
    var C0 = x.version;
    if (C0 !== "19.2.0")
        throw Error(u(527, C0, "19.2.0"));
    C.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","),
                Error(u(268, e)));
        return e = N(t),
            e = e !== null ? _(e) : null,
            e = e === null ? null : e.stateNode,
            e
    }
        ;
    var yx = {
        bundleType: 0,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: S,
        reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Kr.isDisabled && Kr.supportsFiber)
            try {
                Ol = Kr.inject(yx),
                    tt = Kr
            } catch { }
    }
    return Ts.createRoot = function (e, t) {
        if (!g(e))
            throw Error(u(299));
        var a = !1
            , s = ""
            , r = Hu
            , i = qu
            , n = Yu;
        return t != null && (t.unstable_strictMode === !0 && (a = !0),
            t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
            t.onCaughtError !== void 0 && (i = t.onCaughtError),
            t.onRecoverableError !== void 0 && (n = t.onRecoverableError)),
            t = v0(e, 1, !1, null, null, a, s, null, r, i, n, D0),
            e[Ja] = t.current,
            In(e),
            new bc(t)
    }
        ,
        Ts.hydrateRoot = function (e, t, a) {
            if (!g(e))
                throw Error(u(299));
            var s = !1
                , r = ""
                , i = Hu
                , n = qu
                , c = Yu
                , o = null;
            return a != null && (a.unstable_strictMode === !0 && (s = !0),
                a.identifierPrefix !== void 0 && (r = a.identifierPrefix),
                a.onUncaughtError !== void 0 && (i = a.onUncaughtError),
                a.onCaughtError !== void 0 && (n = a.onCaughtError),
                a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
                a.formState !== void 0 && (o = a.formState)),
                t = v0(e, 1, !0, t, a ?? null, s, r, o, i, n, c, D0),
                t.context = j0(null),
                a = t.current,
                s = dt(),
                s = ii(s),
                r = ca(s),
                r.callback = null,
                da(a, r, s),
                a = s,
                t.current.lanes = a,
                _l(t, a),
                Ot(t),
                e[Ja] = t.current,
                In(e),
                new Zr(t)
        }
        ,
        Ts.version = "19.2.0",
        Ts
}
var L0;
function Ax() {
    if (L0)
        return vc.exports;
    L0 = 1;
    function d() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)
            } catch (x) {
                console.error(x)
            }
    }
    return d(),
        vc.exports = Ex(),
        vc.exports
}
var zx = Ax();
const Mx = J0(zx)
    , Dx = [{
        title: "DESIGN KIT MENU",
        items: [{
            id: "dashboard",
            label: "Dashboard",
            icon: "bi-speedometer2",
            href: "#!"
        }, {
            id: "mail",
            label: "Mail",
            icon: "bi-envelope",
            href: "#!",
            badge: {
                text: "289",
                color: "bg-blue-500"
            }
        }, {
            id: "icons",
            label: "Icons",
            icon: "bi-gem",
            href: "#!",
            badge: {
                text: "New",
                color: "bg-green-500"
            }
        }, {
            id: "vehicle-engine-data",
            label: "Vehicle & Engine Data",
            icon: "bi-file-earmark-plus",
            href: "#!",
            submenu: [{
                id: "vehicle-speed",
                label: "Vehicle Speed",
                icon: "",
                href: "#!"
            }, {
                id: "ignition-status",
                label: "Ignition Status",
                icon: "",
                href: "#!"
            }, {
                id: "engine-on/off-status",
                label: "Engine On/Off Status",
                icon: "",
                href: "#!"
            }]
        },]
    }, {
        title: "WIDGET MENU",
        items: [{
            id: "blog",
            label: "Blog App",
            icon: "bi-journal-richtext",
            href: "#!",
            submenu: [{
                id: "blog-list",
                label: "Blog List",
                icon: "",
                href: "#!"
            }, {
                id: "blog-detail",
                label: "Blog Detail",
                icon: "",
                href: "#!"
            }]
        }, {
            id: "ui-element",
            label: "UI Element",
            icon: "bi-puzzle",
            href: "#!",
            submenu: [{
                id: "element",
                label: "Element",
                icon: "",
                href: "#!"
            }, {
                id: "button",
                label: "Button",
                icon: "",
                href: "#!"
            }, {
                id: "wizard",
                label: "Wizard",
                icon: "",
                href: "#!"
            }, {
                id: "calendar",
                label: "Calendar",
                icon: "",
                href: "#!"
            }, {
                id: "treeview",
                label: "Tree View",
                icon: "",
                href: "#!"
            }, {
                id: "grids",
                label: "Grids",
                icon: "",
                href: "#!"
            }, {
                id: "chart",
                label: "Chart",
                icon: "",
                href: "#!"
            }, {
                id: "typography",
                label: "Typography",
                icon: "",
                href: "#!"
            }]
        }, {
            id: "media",
            label: "Media",
            icon: "bi-image",
            href: "#!"
        }]
    }, {
        title: "COMPONENT KIT MENU",
        items: [{
            id: "form",
            label: "Form",
            icon: "bi-pencil-square",
            href: "#!",
            submenu: [{
                id: "form-element",
                label: "Form Element",
                icon: "",
                href: "#!"
            }, {
                id: "advance-form",
                label: "Advance Form",
                icon: "",
                href: "#!"
            }, {
                id: "text-editor",
                label: "Text Editor",
                icon: "",
                href: "#!"
            }, {
                id: "file-upload",
                label: "File Upload",
                icon: "",
                href: "#!"
            }]
        }, {
            id: "tables",
            label: "Tables",
            icon: "bi-table",
            href: "#!"
        }, {
            id: "map",
            label: "Map",
            icon: "bi-bar-chart-line",
            href: "#!"
        }]
    }]
    , Cx = [
        {
            title: "Total Vehicles",
            value: "128",
            unit: "",
            icon: "bi bi-truck",
            color: "blue",
            change: "+5%",
            changeText: "Active today",
        },
        {
            title: "Ignition ON",
            value: "86",
            unit: "",
            icon: "bi bi-power",
            color: "green",
            change: "67%",
            changeText: "Running",
        },
        {
            title: "Idle Vehicles",
            value: "24",
            unit: "",
            icon: "bi bi-pause-circle",
            color: "yellow",
            change: "18%",
            changeText: "Idle",
        },
        {
            title: "Alerts Today",
            value: "12",
            unit: "",
            icon: "bi bi-exclamation-triangle",
            color: "red",
            change: "Overspeed",
            changeText: "Geofence / Speed",
        },
    ]
    , Xe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a leo ut est ullancorper consequat. Duis efficitur, diam nec rhoncus unna, nisl tellus tincidunt lek, vita molestie dolor mi et diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    , Ox = [{
        id: 1,
        sender: "Twitter",
        senderIcon: "bi-twitter",
        senderIconClass: "text-sky-400",
        subject: "Do You Know Uwais, Justin Beiber on twitter?",
        preview: "...",
        body: `Hi Dave, 

Could you be interested in following Uwais and Justin Beiber? 

${Xe}`,
        timestamp: "Jan 8 at 07:10am",
        isRead: !1,
        isStarred: !0
    }, {
        id: 2,
        sender: "Facebook",
        senderIcon: "bi-facebook",
        senderIconClass: "text-blue-600",
        subject: "Meeting Reminder",
        preview: "Ut enim ad minim veniam, quis nostrud exercitation...",
        body: `This is a reminder for your meeting tomorrow. 

${Xe}`,
        timestamp: "Yesterday at 1:30am",
        isRead: !1,
        isStarred: !1
    }, {
        id: 3,
        sender: "Instagram",
        senderIcon: "bi-instagram",
        senderIconClass: "text-pink-500",
        subject: "User Interface Conference",
        preview: "Ut enim ad minim veniam, quis nostrud exercitation...",
        body: `The UI conference is starting soon. Here is the agenda. 

${Xe}`,
        timestamp: "Jan 13 at 7:30am",
        isRead: !0,
        isStarred: !0
    }, {
        id: 4,
        sender: "Jhoney Deep",
        senderIcon: "bi-person",
        senderIconClass: "text-gray-500",
        subject: "Hi, matirasa",
        preview: "how are u today?",
        body: `Just checking in, how are you today? 

${Xe}`,
        timestamp: "Jan 11 at 7:32am",
        isRead: !1,
        isStarred: !1
    }, {
        id: 5,
        sender: "Behance Support",
        senderIcon: "bi-behance",
        senderIconClass: "text-blue-500",
        subject: "Upgrade your membership",
        preview: "you may be eligible for a FREE Trial.",
        body: `Upgrade your membership today and get a free trial of our premium features. 

${Xe}`,
        timestamp: "Jan 11 at 10:11pm",
        isRead: !0,
        isStarred: !1
    }, {
        id: 6,
        sender: "Tumblr",
        senderIcon: "bi-tumblr",
        senderIconClass: "text-indigo-400",
        subject: "Follow",
        preview: "more blogs and have more fun",
        body: `Discover new blogs to follow and have more fun on Tumblr. 

${Xe}`,
        timestamp: "Jan 11 at 9:54pm",
        isRead: !0,
        isStarred: !0
    }, {
        id: 7,
        sender: "Paypal",
        senderIcon: "bi-paypal",
        senderIconClass: "text-blue-700",
        subject: "We're transfering money from PayPal to your bank",
        preview: "",
        body: `Your recent transfer is being processed. 

${Xe}`,
        timestamp: "Jan 11 at 9:54pm",
        isRead: !0,
        isStarred: !1
    }, {
        id: 8,
        sender: "Dropbox",
        senderIcon: "bi-dropbox",
        senderIconClass: "text-blue-500",
        subject: "New Update",
        preview: "Now are available, get it now!",
        body: `A new version of Dropbox is available with new features. 

${Xe}`,
        timestamp: "Jan 11 at 9:54pm",
        isRead: !1,
        isStarred: !1
    }, {
        id: 9,
        sender: "Twitter",
        senderIcon: "bi-twitter",
        senderIconClass: "text-sky-400",
        subject: "Do You Know Uwais, Justin Beiber on twitter?",
        preview: "...",
        body: `Here are some more people you might know on Twitter. 

${Xe}`,
        timestamp: "Jan 8 at 07:10am",
        isRead: !0,
        isStarred: !1
    }, {
        id: 10,
        sender: "Facebook",
        senderIcon: "bi-facebook",
        senderIconClass: "text-blue-600",
        subject: "Meeting Reminder",
        preview: "Ut enim ad minim veniam, quis nostrud exercitation...",
        body: `Another meeting reminder for your convenience. 

${Xe}`,
        timestamp: "Yesterday at 1:30am",
        isRead: !0,
        isStarred: !0
    }, {
        id: 11,
        sender: "Instagram",
        senderIcon: "bi-instagram",
        senderIconClass: "text-pink-500",
        subject: "User Interface Conference",
        preview: "Ut enim ad minim veniam, quis nostrud exercitation...",
        body: `Don't miss the keynote speech at the UI conference. 

${Xe}`,
        timestamp: "Jan 13 at 7:30am",
        isRead: !1,
        isStarred: !1
    }, {
        id: 12,
        sender: "Jhoney Deep",
        senderIcon: "bi-person",
        senderIconClass: "text-gray-500",
        subject: "Hi, matirasa",
        preview: "how are u today?",
        body: `Hope you're having a great day! 

${Xe}`,
        timestamp: "Jan 11 at 7:32am",
        isRead: !0,
        isStarred: !1
    }, {
        id: 13,
        sender: "Behance Support",
        senderIcon: "bi-behance",
        senderIconClass: "text-blue-500",
        subject: "Upgrade your membership",
        preview: "you may be eligible for a FREE Trial.",
        body: `Last chance to upgrade your membership with a free trial. 

${Xe}`,
        timestamp: "Jan 11 at 10:11pm",
        isRead: !1,
        isStarred: !0
    }, {
        id: 14,
        sender: "Tumblr",
        senderIcon: "bi-tumblr",
        senderIconClass: "text-indigo-400",
        subject: "Follow",
        preview: "more blogs and have more fun",
        body: `Keep following for more fun content! 

${Xe}`,
        timestamp: "Jan 11 at 9:54pm",
        isRead: !0,
        isStarred: !1
    }, {
        id: 15,
        sender: "Paypal",
        senderIcon: "bi-paypal",
        senderIconClass: "text-blue-700",
        subject: "We're transfering money from PayPal to your bank",
        preview: "",
        body: `Your money transfer has been completed. 

${Xe}`,
        timestamp: "Jan 11 at 9:54pm",
        isRead: !0,
        isStarred: !1
    }]
    , zc = [{
        id: 1,
        title: "Mastering Tailwind CSS: A Beginner's Guide",
        excerpt: "Dive deep into the utility-first CSS framework that's taking the web development world by storm. Learn the basics and best practices.",
        content: `
            <p>Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.</p>
            <h3>Getting Started</h3>
            <p>To get started with Tailwind, you can install it via npm or yarn. It integrates seamlessly with modern build tools like Vite, Webpack, and PostCSS.</p>
            <pre><code class="language-bash">npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>
            <h3>Core Concepts</h3>
            <p>The core concept of Tailwind is its utility-first approach. Instead of writing custom CSS, you apply pre-existing classes directly in your HTML. For example:</p>
            <ul>
                <li><code>p-4</code> for padding</li>
                <li><code>text-lg</code> for large text</li>
                <li><code>bg-blue-500</code> for a blue background</li>
            </ul>
            <blockquote>“The ability to build complex components from a constrained set of primitive utilities is the main reason I love Tailwind CSS.”</blockquote>
        `,
        author: {
            name: "Alex Johnson",
            avatarSeed: "alex"
        },
        publishDate: "October 26, 2025",
        imageUrlSeed: "tech",
        tags: ["Web Development", "CSS", "Tailwind"],
        views: "12.k",
        comments: 5
    }, {
        id: 2,
        title: "The Rise of React Server Components",
        excerpt: "Explore the future of React development with Server Components, understanding how they change the way we build web applications.",
        content: "<p>React Server Components are a new way to build React applications that can improve performance and reduce bundle sizes. They allow you to write components that run exclusively on the server, fetching data and rendering static content before it ever reaches the client.</p>",
        author: {
            name: "Samantha Lee",
            avatarSeed: "samantha"
        },
        publishDate: "October 24, 2025",
        imageUrlSeed: "code",
        tags: ["React", "JavaScript", "Frontend"],
        views: "8.7k",
        comments: 12
    }, {
        id: 3,
        title: "A Deep Dive into Modern UI/UX Design Principles",
        excerpt: "Good design is more than just aesthetics. This post covers the fundamental principles of modern UI/UX design that every developer should know.",
        content: "<p>Modern UI/UX design focuses on creating intuitive, efficient, and enjoyable user experiences. Key principles include clarity, consistency, and feedback. By understanding these, developers can build products that users love.</p>",
        author: {
            name: "David Chen",
            avatarSeed: "david"
        },
        publishDate: "October 22, 2025",
        imageUrlSeed: "design",
        tags: ["UI/UX", "Design", "Frontend"],
        views: "15.1k",
        comments: 28
    }, {
        id: 4,
        title: "Why Vite is the Future of Frontend Tooling",
        excerpt: "Vite has revolutionized the frontend development experience with its lightning-fast HMR and build speeds. Let's explore why.",
        content: "<p>Vite is a next-generation frontend build tool that significantly improves the developer experience. It leverages native ES modules in the browser, providing an instant server start and lightning-fast Hot Module Replacement (HMR).</p>",
        author: {
            name: "Emily Carter",
            avatarSeed: "emily"
        },
        publishDate: "October 20, 2025",
        imageUrlSeed: "abstract",
        tags: ["Vite", "Tooling", "JavaScript"],
        views: "9.2k",
        comments: 18
    }]
    , Ux = ({ items: d, isCollapsed: x, setCurrentPage: v }) => l.jsx("ul", {
        className: `
            ${x ? "absolute left-full top-0 mt-0 ml-5 w-64 bg-black bg-opacity-70 backdrop-filter backdrop-blur rounded-2xl shadow-lg z-999 p-3" : "mt-1 p-2 bg-black bg-opacity-30 backdrop-filter backdrop-blur rounded-2xl"}
        `,
        children: d.map(u => l.jsx("li", {
            children: l.jsx("a", {
                href: u.href,
                onClick: g => {
                    u.href === "#!" && g.preventDefault(),
                        v(u.id)
                }
                ,
                className: "block text-sm py-2 px-9 rounded-2xl text-white text-sm dark:text-white hover:bg-black/20",
                children: u.label
            })
        }, u.id))
    })
    , _x = ({ item: d, isCollapsed: x, activeItem: v, setActiveItem: u, setCurrentPage: g }) => {
        const { id: z, icon: D, label: Y, submenu: w, badge: N } = d
            , _ = w && w.length > 0
            , M = v === Y
            , H = ce => {
                d.href === "#!" && ce.preventDefault(),
                    _ ? u(M ? null : Y) : (g(z),
                        u(null))
            }
            ;
        return l.jsxs("li", {
            className: "relative",
            children: [l.jsxs("a", {
                href: d.href,
                onClick: H,
                className: `group relative text-sm flex items-center py-2 px-3 rounded-md text-white dark:text-white hover:rounded-2xl hover:bg-black/20 hover:text-white dark:hover:text-white ${x ? "justify-center" : ""}`,
                children: [l.jsx("i", {
                    className: `bi ${D} text-lg`
                }), l.jsx("span", {
                    className: `ml-3 flex-grow whitespace-nowrap ${x ? "hidden" : ""}`,
                    children: Y
                }), N && l.jsx("span", {
                    className: `text-xs font-medium ${N.color} text-white px-2 py-0.5 rounded-full ml-auto ${x ? "hidden" : ""}`,
                    children: N.text
                }), _ && !x && l.jsx("i", {
                    className: `bi bi-chevron-down text-sm ml-auto transition-transform duration-200 ${M ? "rotate-180" : ""}`
                }), _ && x && l.jsx("i", {
                    className: "bi bi-circle-fill text-[6px] absolute right-2 top-0 text-indigo-400"
                }), x && l.jsx("span", {
                    className: "absolute left-full top-1/2 -translate-y-1/2 ml-4 px-9 ml-5 mt-0 py-3 bg-black bg-opacity-70 backdrop-filter backdrop-blur rounded-2xl text-white   whitespace-nowrap z-10 invisible opacity-0 transition-opacity group-hover:visible group-hover:opacity-100",
                    children: Y
                })]
            }), _ && M && l.jsx(Ux, {
                items: w,
                isCollapsed: x,
                setCurrentPage: g
            })]
        })
    }
    , Rx = ({ isCollapsed: d, onToggle: x, setCurrentPage: v }) => {
        const [u, g] = W.useState("")
            , [z, D] = W.useState(null)
            , Y = W.useRef(null)
            , w = W.useRef(null)
            , N = Dx.map(M => ({
                ...M,
                items: M.items.filter(H => H.label.toLowerCase().includes(u.toLowerCase()) || H.submenu && H.submenu.some(ce => ce.label.toLowerCase().includes(u.toLowerCase())))
            })).filter(M => M.items.length > 0);
        W.useEffect(() => {
            d && D(null)
        }
            , [d]),
            W.useEffect(() => {
                const M = H => {
                    var ce;
                    d && z && !((ce = w.current) != null && ce.contains(H.target)) && D(null)
                }
                    ;
                return document.addEventListener("mousedown", M),
                    () => {
                        document.removeEventListener("mousedown", M)
                    }
            }
                , [d, z]);
        const _ = () => {
            d && (x(),
                setTimeout(() => {
                    var M;
                    (M = Y.current) == null || M.focus()
                }
                    , 300))
        }
            ;
        return l.jsxs("aside", {
            ref: w,
            id: "side-menu",
            className: `
                fixed left-0 top-0 h-full bg-gray-900 md:bg-transparent text-white flex flex-col
                dark:border-gray-700 transition-all duration-300 ease-in-out z-30
                ${d ? "w-64 -translate-x-full md:w-20 md:translate-x-0" : "w-64 translate-x-0"}
            `,
            children: [l.jsxs("div", {
                className: "flex items-center justify-between py-2 px-[12px] dark:border-gray-700 bg-transparent flex-shrink-0",
                children: [l.jsxs("span", {
                    className: `w-full text-lg font-bold ${d ? "hidden" : ""}`,
                    children: ["FM System ", l.jsx("span", {
                        className: "font-normal text-sm ml-2",
                        children: ""
                    })]
                }), l.jsx("button", {
                    onClick: x,
                    className: "p-2 rounded-md m-0 mx-auto md:block hidden",
                    children: l.jsx("i", {
                        className: "bi bi-list text-xl"
                    })
                }), l.jsx("button", {
                    onClick: x,
                    className: "p-2 rounded-md m-0 ml-auto md:hidden block",
                    children: l.jsx("i", {
                        className: "bi bi-x-lg text-xl"
                    })
                })]
            }), l.jsxs("div", {
                className: `flex-grow flex flex-col ${d ? "overflow-visible" : "overflow-hidden"}`,
                children: [l.jsx("div", {
                    className: "flex-shrink-0 p-2 ",
                    children: d ? l.jsx("div", {
                        className: "flex justify-center",
                        children: l.jsx("button", {
                            onClick: _,
                            className: "px-2 py-4 rounded-2xl hover:bg-black/20 hover:w-full",
                            "aria-label": "Search menu",
                            children: l.jsx("i", {
                                className: "bi bi-search text-lg text-white"
                            })
                        })
                    }) : l.jsxs("div", {
                        className: "relative  pr-2",
                        children: [l.jsx("input", {
                            ref: Y,
                            type: "text",
                            placeholder: "Search Menu...",
                            value: u,
                            onChange: M => g(M.target.value),
                            className: "w-full text-sm rounded-full px-4 text-white placeholder-white/60 bg-black bg-opacity-25 p-3 rounded-full border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)]"
                        }), l.jsx("i", {
                            className: "bi bi-search absolute top-1/2 right-6 -translate-y-1/2 text-white "
                        })]
                    })
                }), l.jsx("div", {
                    className: `flex-grow ${d ? "overflow-visible" : "overflow-y-auto scrollbar-thin scrollbar-thumb-black/30 scrollbar-track-transparent hover:scrollbar-thumb-black/50"}`,
                    children: l.jsx("nav", {
                        className: "flex flex-col px-2 pb-2",
                        children: N.map(M => l.jsxs("div", {
                            className: "mb-3 bg-black bg-opacity-25 p-2 rounded-2xl border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)]",
                            children: [l.jsxs("div", {
                                className: "flex items-center justify-between text-xs font-semibold text-white dark:text-white uppercase px-3 py-2",
                                children: [l.jsx("span", {
                                    className: d ? "hidden" : "px-3 py-1 bg-black bg-opacity-30 rounded-xl",
                                    children: M.title
                                }), l.jsx("i", {
                                    className: d ? "hidden" : "bi bi-gear-fill"
                                })]
                            }), l.jsx("ul", {
                                className: "flex flex-col space-y-1",
                                children: M.items.map(H => l.jsx(_x, {
                                    item: H,
                                    isCollapsed: d,
                                    activeItem: z,
                                    setActiveItem: D,
                                    setCurrentPage: v
                                }, H.label))
                            })]
                        }, M.title))
                    })
                })]
            }), l.jsx("div", {
                className: "p-3 mt-auto  bg-black/20 flex-shrink-0",
                children: l.jsx("div", {
                    className: `${d ? "hidden" : ""} bg-white/10 dark:bg-gray-700/50 rounded-lg p-3 text-center text-white`,
                    children: l.jsxs("div", {
                        className: "relative inline-block",
                        children: [l.jsxs("svg", {
                            className: "w-24 h-24",
                            viewBox: "0 0 120 120",
                            children: [l.jsx("circle", {
                                cx: "60",
                                cy: "60",
                                r: "54",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "5",
                                className: "text-gray-200 dark:text-gray-600"
                            }), l.jsx("circle", {
                                cx: "60",
                                cy: "60",
                                r: "54",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "5",
                                strokeDasharray: "339.292",
                                strokeDashoffset: "101.787",
                                className: "text-cyan-400 transform -rotate-90 origin-center"
                            })]
                        }), l.jsxs("div", {
                            className: "absolute inset-0 flex flex-col items-center justify-center",
                            children: [l.jsx("span", {
                                className: "text-3xl font-bold",
                                children: "369"
                            }), l.jsx("span", {
                                className: "text-xs text-white",
                                children: "VISITORS"
                            })]
                        })]
                    })
                })
            })]
        })
    }
    , X0 = ({ buttonContent: d, children: x, menuWidthClass: v = "w-72", positionClass: u = "left-0" }) => {
        const [g, z] = W.useState(!1)
            , D = W.useRef(null);
        return W.useEffect(() => {
            const Y = w => {
                var N;
                (N = D.current) != null && N.contains(w.target) || z(!1)
            }
                ;
            return document.addEventListener("mousedown", Y),
                () => {
                    document.removeEventListener("mousedown", Y)
                }
        }
            , []),
            l.jsxs("div", {
                ref: D,
                className: "relative",
                children: [l.jsx("button", {
                    onClick: () => z(!g),
                    className: "w-10 h-10 rounded-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent relative",
                    type: "button",
                    children: d
                }), g && l.jsx("div", {
                    className: `block absolute mt-3 ${v} origin-top-left ${u} bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700 z-20`,
                    children: x
                })]
            })
    }
    , Bx = ({ setCurrentPage: d }) => {
        const [x, v] = W.useState(!1)
            , u = W.useRef(null);
        return W.useEffect(() => {
            const g = z => {
                var D;
                (D = u.current) != null && D.contains(z.target) || v(!1)
            }
                ;
            return document.addEventListener("mousedown", g),
                () => document.removeEventListener("mousedown", g)
        }
            , []),
            l.jsxs("div", {
                ref: u,
                className: "relative",
                children: [l.jsxs("a", {
                    href: "#!",
                    onClick: g => {
                        g.preventDefault(),
                            v(!x)
                    }
                    ,
                    className: "flex items-center gap-2 text-white",
                    children: [l.jsx("img", {
                        src: "assets/img/user",
                        alt: "User Avatar",
                        className: "rounded-full",
                        width: "32",
                        height: "32"
                    }), l.jsx("span", {
                        className: "hidden text-sm sm:inline",
                        children: "Hi, Shariq"
                    }), l.jsx("i", {
                        className: "bi bi-chevron-down text-sm"
                    })]
                }), x && l.jsxs("div", {
                    className: "absolute right-0 mt-4 w-48 origin-top-right p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700 z-20",
                    children: [l.jsxs("a", {
                        href: "#!",
                        onClick: g => {
                            g.preventDefault(),
                                d("profile-page"),
                                v(!1)
                        }
                        ,
                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: [l.jsx("i", {
                            className: "bi bi-person mr-2"
                        }), " Profile"]
                    }), l.jsxs("a", {
                        href: "#!",
                        onClick: g => {
                            g.preventDefault(),
                                d("login"),
                                v(!1)
                        }
                        ,
                        className: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: [l.jsx("i", {
                            className: "bi bi-box-arrow-right mr-2"
                        }), " Logout"]
                    })]
                })]
            })
    }
    , Hx = ({ onMenuToggle: d, onSettingsToggle: x, isCollapsed: v, setCurrentPage: u }) => {
        const [g, z] = W.useState(!1)
            , [D, Y] = W.useState(0)
            , [w, N] = W.useState(new Date)
            , [_, M] = W.useState(0);
        W.useEffect(() => {
            const be = () => {
                const Te = window.scrollY;
                Y(Te),
                    z(Te > 10)
            }
                ;
            return window.addEventListener("scroll", be),
                () => window.removeEventListener("scroll", be)
        }
            , []),
            W.useEffect(() => {
                const be = () => {
                    N(new Date)
                }
                    ;
                be();
                const Te = setInterval(be, 1e3);
                return () => clearInterval(Te)
            }
                , []);
        const H = be => be.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric"
        })
            , ce = be => be.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                hour12: !0
            })
            , Ne = [
                {
                    city: "DEL",
                    temp: 42,
                    icon: "bi-sun-fill",
                    windSpeed: "14km/hr"
                },
                {
                    city: "MUM",
                    temp: 33,
                    icon: "bi-cloud-rain-heavy-fill",
                    windSpeed: "18km/hr"
                },
                {
                    city: "BLR",
                    temp: 28,
                    icon: "bi-cloud-sun-fill",
                    windSpeed: "12km/hr"
                },
                {
                    city: "CHE",
                    temp: 36,
                    icon: "bi-sun-haze-fill",
                    windSpeed: "20km/hr"
                },
                {
                    city: "KOL",
                    temp: 34,
                    icon: "bi-cloud-lightning-rain-fill",
                    windSpeed: "16km/hr"
                }
            ]
            ;
        W.useEffect(() => {
            const Te = setInterval(() => {
                M(Tt => (Tt + 1) % Ne.length)
            }
                , 5e3);
            return () => clearInterval(Te)
        }
            , []);
        const X = () => Ne[_];
        return l.jsx("header", {
            className: `fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out ${v ? "md:pl-20" : "md:pl-64"}`,
            children: l.jsxs("div", {
                className: `blur-smlef-header flex items-center justify-between p-3 text-white ${g ? "scrolled" : "top"}`,
                children: [l.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [l.jsx("button", {
                        onClick: d,
                        className: "md:hidden p-2 text-white",
                        children: l.jsx("i", {
                            className: "bi bi-list text-2xl"
                        })
                    }), l.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [l.jsxs(X0, {
                            buttonContent: l.jsxs(l.Fragment, {
                                children: [l.jsx("i", {
                                    className: "bi bi-bell text-lg"
                                }), l.jsx("span", {
                                    className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full",
                                    children: "23"
                                })]
                            }),
                            children: [l.jsx("div", {
                                className: "p-3",
                                children: l.jsx("h6", {
                                    className: "text-black font-semibold",
                                    children: "Notifications"
                                })
                            }), l.jsxs("a", {
                                className: "flex gap-3 items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700",
                                href: "#!",
                                children: [l.jsx("i", {
                                    className: "bi bi-chat-dots text-blue-500"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-semibold text-sm text-black",
                                        children: "New comment"
                                    }), l.jsx("div", {
                                        className: "text-xs text-gray-500",
                                        children: "5 mins ago"
                                    })]
                                })]
                            }), l.jsxs("a", {
                                className: "flex gap-3 items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700",
                                href: "#!",
                                children: [l.jsx("i", {
                                    className: "bi bi-person-plus text-green-500"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-semibold text-sm text-black",
                                        children: "New follower"
                                    }), l.jsx("div", {
                                        className: "text-xs text-gray-500",
                                        children: "1 hour ago"
                                    })]
                                })]
                            }), l.jsx("div", {
                                className: "border-t border-gray-200 dark:border-gray-700 my-1"
                            }), l.jsx("a", {
                                className: "block text-center text-sm text-gray-500 p-2 hover:bg-gray-50 dark:hover:bg-gray-700",
                                href: "#!",
                                children: "View all notifications"
                            })]
                        }), l.jsxs(X0, {
                            buttonContent: l.jsxs(l.Fragment, {
                                children: [l.jsx("i", {
                                    className: "bi bi-exclamation-triangle text-lg text-white"
                                }), l.jsx("span", {
                                    className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full",
                                    children: "5"
                                })]
                            }),
                            children: [l.jsx("div", {
                                className: "p-3",
                                children: l.jsx("h6", {
                                    className: "text-black font-semibold",
                                    children: "System Alerts"
                                })
                            }), l.jsxs("a", {
                                className: "flex gap-3 items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700",
                                href: "#!",
                                children: [l.jsx("i", {
                                    className: "bi bi-hdd text-red-500"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-semibold text-sm text-black",
                                        children: "Server capacity"
                                    }), l.jsx("div", {
                                        className: "text-xs text-gray-500",
                                        children: "15 mins ago"
                                    })]
                                })]
                            }), l.jsxs("a", {
                                className: "flex gap-3 items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700",
                                href: "#!",
                                children: [l.jsx("i", {
                                    className: "bi bi-database-slash text-yellow-500"
                                }), l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "font-semibold text-sm text-black",
                                        children: "Backup failed"
                                    }), l.jsx("div", {
                                        className: "text-xs text-gray-500",
                                        children: "2 hours ago"
                                    })]
                                })]
                            }), l.jsx("div", {
                                className: "border-t border-gray-200 dark:border-gray-700 my-1"
                            }), l.jsx("a", {
                                className: "block text-center text-sm text-gray-500 p-2 hover:bg-gray-50 dark:hover:bg-gray-700",
                                href: "#!",
                                children: "Check system status"
                            })]
                        })]
                    }), l.jsxs("div", {
                        className: "hidden md:flex items-center gap-6 py-2 px-5  bg-black bg-opacity-25 p-3 rounded-full border-[1px] border-[solid] border-[rgba(0,0,0,0.05)] [box-shadow:0_1px_0_rgba(255,_255,_255,_0.1)] ml-3",
                        children: [l.jsxs("div", {
                            className: "flex items-center gap-2 text-white rounded text-sm",
                            children: [l.jsx("i", {
                                className: "bi bi-calendar3"
                            }), l.jsx("span", {
                                children: H(w)
                            })]
                        }), l.jsxs("div", {
                            className: "flex items-center gap-2 text-sm text-white",
                            children: [l.jsx("i", {
                                className: "bi bi-clock"
                            }), l.jsx("span", {
                                children: ce(w)
                            })]
                        }), l.jsxs("div", {
                            className: "flex items-center gap-2 text-sm text-white",
                            children: [l.jsx("i", {
                                className: `bi ${X().icon}`
                            }), l.jsxs("span", {
                                children: [X().city, " ", l.jsx("b", {
                                    children: X().temp
                                }), ", ", X().windSpeed]
                            })]
                        })]
                    })]
                }), l.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [l.jsx(Bx, {
                        setCurrentPage: u
                    }), l.jsx("button", {
                        onClick: x,
                        className: "p-2 rounded-md hover:bg-transparent dark:hover:bg-transparent text-white",
                        type: "button",
                        children: l.jsx("i", {
                            className: "bi bi-three-dots-vertical"
                        })
                    })]
                })]
            })
        })
    }
    , qx = ({ title: d, value: x, unit: v, icon: u, color: g, change: z, changeText: D }) => {
        const Y = {
            red: {
                text: "text-red-500",
                bg: "bg-red-100 dark:bg-red-900/50",
                icon: "text-red-500"
            },
            yellow: {
                text: "text-yellow-500",
                bg: "bg-yellow-100 dark:bg-yellow-900/50",
                icon: "text-yellow-500"
            },
            sky: {
                text: "text-sky-500",
                bg: "bg-sky-100 dark:bg-sky-900/50",
                icon: "text-sky-500"
            },
            blue: {
                text: "text-blue-500",
                bg: "bg-blue-100 dark:bg-blue-900/50",
                icon: "text-blue-500"
            }
        }
            , w = Y[g] || Y.blue;
        return l.jsx("div", {
            className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full",
            children: l.jsxs("div", {
                className: "p-4 flex flex-col h-full",
                children: [l.jsxs("div", {
                    className: "flex justify-between items-start mb-3",
                    children: [l.jsxs("div", {
                        children: [l.jsx("div", {
                            className: "text-sm font-semibold text-gray-500 uppercase",
                            children: d
                        }), l.jsxs("div", {
                            className: `text-4xl font-bold mt-2 ${w.text}`,
                            children: [l.jsx("span", {
                                children: x
                            }), v && l.jsx("small", {
                                className: "text-xl font-medium text-gray-400 ml-1",
                                children: v
                            })]
                        })]
                    }), l.jsx("div", {
                        className: `p-3 rounded ${w.bg}`,
                        children: l.jsx("i", {
                            className: `bi ${u} ${w.icon} text-3xl`
                        })
                    })]
                }), l.jsxs("div", {
                    className: "mt-auto pt-3 border-t border-gray-200 dark:border-gray-700 flex items-center text-sm text-gray-500",
                    children: [l.jsx("span", {
                        className: `${z > 0 ? "text-green-500" : "text-red-500"} mr-2`,
                        children: l.jsx("i", {
                            className: `bi ${z > 0 ? "bi-arrow-up" : "bi-arrow-down"}`
                        })
                    }), l.jsx("span", {
                        children: D
                    })]
                })]
            })
        })
    }
    , Yx = ({ userName: d = "Shariq", lastSignIn: x = "Yesterday, 16:54 PM", showAlert: v = !0 }) => v ? l.jsxs("div", {
        className: "flex flex-row  justify-center items-center w-full flex-grow p-4 text-sm text-blue-800",
        role: "alert",
        children: ["Welcome back, ", l.jsx("span", {
            className: "font-bold",
            children: d
        }), "! Your last sign in at ", x]
    }) : null
    , Gx = ({ items: d, showHome: x = !0, homeHref: v = "#!" }) => {
        const u = g => g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();
        return l.jsx("nav", {
            "aria-label": "breadcrumb",
            className: "block w-fit text-sm bg-white py-3 px-6 rounded-full border",
            children: l.jsxs("ol", {
                className: "flex items-center text-gray-500",
                children: [x && l.jsxs(l.Fragment, {
                    children: [l.jsx("li", {
                        children: l.jsxs("a", {
                            href: v,
                            className: "hover:underline",
                            children: [l.jsx("i", {
                                className: "bi bi-house-door"
                            }), " ", u("Home")]
                        })
                    }), d.length > 0 && l.jsx("li", {
                        className: "mx-2",
                        children: "/"
                    })]
                }), d.map((g, z) => l.jsxs(zs.Fragment, {
                    children: [l.jsx("li", {
                        children: g.isActive ? l.jsx("span", {
                            className: "text-gray-800 dark:text-gray-200",
                            "aria-current": "page",
                            children: u(g.label)
                        }) : l.jsx("a", {
                            href: g.href || "#!",
                            className: "hover:underline",
                            children: u(g.label)
                        })
                    }), z < d.length - 1 && l.jsx("li", {
                        className: "mx-2",
                        children: "/"
                    })]
                }, z))]
            })
        })
    }
    , pe = ({ title: d, breadcrumbItems: x = [], showAlert: v = !0, userName: u = "Shariq", lastSignIn: g = "Yesterday, 16:54 PM", showSearch: z = !0, searchPlaceholder: D = "Search...", showHome: Y = !0, homeHref: w = "#!" }) => {
        const N = M => M.charAt(0).toUpperCase() + M.slice(1).toLowerCase()
            , _ = [...x, {
                label: N(d),
                isActive: !0
            }];
        return l.jsxs(l.Fragment, {
            children: [l.jsxs("div", {
                className: "flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 border-b pb-3 px-4 md:px-6 -mx-4 my-0",
                children: [l.jsx("div", {
                    className: "sm:ml-200 flex min-w-xl md:w-1/4 justify-start lg:ml-8 ",
                    children: l.jsx("h1", {
                        className: "text-2xl font-bold capitalize ",
                        children: d.toUpperCase()
                    })
                }), l.jsx(Yx, {
                    userName: u,
                    lastSignIn: g,
                    showAlert: v
                }), z && l.jsx("div", {
                    className: "w-full md:w-1/4 items-center justify-start gap-3",
                    children: l.jsxs("div", {
                        className: "relative md:w-full sm:w-screen",
                        children: [l.jsx("input", {
                            type: "text",
                            placeholder: D,
                            className: "w-full text-sm rounded-2xl border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                        }), l.jsx("i", {
                            className: "bi bi-search absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                        })]
                    })
                })]
            }), l.jsx(Gx, {
                items: _,
                showHome: Y,
                homeHref: w
            })]
        })
    }
    , Lx = () => {
        const [d, x] = W.useState([
            {
                type: "DELHI NCR FLEET",
                typeColor: "bg-sky-400",
                speed: "48 Km/hours",
                icon: "bi-truck",
                user: {
                    name: "Ramesh Kumar",
                    role: "Driver",
                    avatar: "https://picsum.photos/seed/ramesh/40/40"
                },
                progress: 82,
                progressColor: "bg-sky-400",
                from: "Delhi",
                to: "Gurugram"
            },
            {
                type: "MUMBAI LOGISTICS",
                typeColor: "bg-teal-500",
                speed: "62 Km/hours",
                icon: "bi-truck-flatbed",
                user: {
                    name: "Amit Patil",
                    role: "Driver",
                    avatar: "https://picsum.photos/seed/amit/40/40"
                },
                progress: 56,
                progressColor: "bg-teal-500",
                from: "Mumbai",
                to: "Pune"
            },
            {
                type: "SOUTH INDIA SUPPLY",
                typeColor: "bg-red-500",
                speed: "35 Km/hours",
                icon: "bi-truck-front",
                user: {
                    name: "Suresh Reddy",
                    role: "Driver",
                    avatar: "https://picsum.photos/seed/suresh/40/40"
                },
                progress: 38,
                progressColor: "bg-red-500",
                from: "Bengaluru",
                to: "Chennai"
            }
        ]);

        W.useEffect(() => {
            const u = setInterval(() => {
                x(g => g.map(z => {
                    let D = z.progress + Math.random() * 2;
                    return D > 100 && (D = 0),
                    {
                        ...z,
                        progress: D
                    }
                }
                ))
            }
                , 1e3);
            return () => clearInterval(u)
        }
            , []);
        const v = [{
            icon: "bi-fuel-pump",
            iconBg: "bg-red-500",
            title: "GAS STATION",
            distance: "5 Km Foward",
            time: "20 Min",
            actionIcon: "bi-arrow-up-circle"
        }, {
            icon: "bi-shop",
            iconBg: "bg-sky-400",
            title: "RESTOURANT",
            distance: "1 Km Turn Left",
            time: "20 Min",
            actionIcon: "bi-arrow-left-circle"
        }, {
            icon: "bi-hospital",
            iconBg: "bg-teal-500",
            title: "ZOO",
            distance: "3 Km Turn Right",
            time: "20 Min",
            actionIcon: "bi-arrow-right-circle"
        }];
        return l.jsx("main", {
            className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
            children: l.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [l.jsx(pe, {
                    title: "Dashboard",
                    breadcrumbItems: [],
                    userName: "Shariq",
                    lastSignIn: "Yesterday, 16:54 PM"
                }), l.jsx("div", {
                    className: "bg-white  block",
                    children: l.jsx("div", {
                        className: "p-0",
                        children: l.jsx("div", {
                            className: "md:aspect-[calc(4*3+1)/4] sm:aspect-video  -mx-[22px] my-[0]",
                            children: l.jsx("div", {
                                id: "google-map",
                                className: "rounded w-full h-full z-0",
                                style: {
                                    border: 0
                                },
                                allowFullScreen: !0,
                                loading: "lazy",
                                referrerPolicy: "no-referrer-when-downgrade"
                            })
                        })
                    })
                }), l.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:-mt-[112px] sm:mt-0 z-10",
                    children: Cx.map((u, g) => l.jsx(qx, {
                        ...u
                    }, g))
                }), l.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-4",
                    children: [l.jsx("div", {
                        className: "lg:col-span-2",
                        children: l.jsxs("div", {
                            className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full",
                            children: [l.jsxs("div", {
                                className: "px-4 py-3 border-b dark:border-gray-700 font-semibold flex justify-between items-center",
                                children: [l.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [l.jsx("i", {
                                        className: "bi bi-truck"
                                    }), l.jsx("span", {
                                        children: "DESTINATION"
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex gap-2 text-gray-400",
                                    children: [l.jsx("i", {
                                        className: "bi bi-chevron-up cursor-pointer"
                                    }), l.jsx("i", {
                                        className: "bi bi-x-lg cursor-pointer"
                                    })]
                                })]
                            }), l.jsx("div", {
                                className: "p-6",
                                children: l.jsx("div", {
                                    className: "flex flex-col gap-6",
                                    children: d.map((u, g) => l.jsxs("div", {
                                        className: `flex flex-col md:flex-row items-center gap-4 ${g !== d.length - 1 ? "border-b border-gray-100 dark:border-gray-700 pb-6" : ""}`,
                                        children: [l.jsxs("div", {
                                            className: "w-full md:w-48 flex-shrink-0",
                                            children: [l.jsxs("div", {
                                                className: `${u.typeColor} text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-2 mb-1`,
                                                children: [l.jsx("i", {
                                                    className: `bi ${u.icon}`
                                                }), u.type]
                                            }), l.jsxs("div", {
                                                className: "text-gray-500 text-sm font-bold flex items-center gap-1",
                                                children: [l.jsx("i", {
                                                    className: "bi bi-speedometer2"
                                                }), u.speed]
                                            })]
                                        }), l.jsxs("div", {
                                            className: "w-full md:w-48 flex items-center gap-3 flex-shrink-0 border-l border-gray-200 dark:border-gray-700 pl-0 md:pl-4 border-dashed",
                                            children: [l.jsx("img", {
                                                src: u.user.avatar,
                                                alt: u.user.name,
                                                className: "w-10 h-10 rounded-full"
                                            }), l.jsxs("div", {
                                                children: [l.jsx("div", {
                                                    className: "font-bold text-gray-700 dark:text-gray-200 text-sm",
                                                    children: u.user.name
                                                }), l.jsx("div", {
                                                    className: "text-gray-400 text-xs",
                                                    children: u.user.role
                                                })]
                                            })]
                                        }), l.jsxs("div", {
                                            className: "flex-grow w-full",
                                            children: [l.jsxs("div", {
                                                className: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 relative",
                                                children: [l.jsx("div", {
                                                    className: `${u.progressColor} h-2.5 rounded-full`,
                                                    style: {
                                                        width: `${u.progress > 100 ? 100 : u.progress}%`
                                                    }
                                                }), l.jsxs("span", {
                                                    className: "absolute right-0 -top-5 text-xs text-gray-500",
                                                    children: [u.progress > 100 ? 106 : u.progress, "%"]
                                                })]
                                            }), l.jsxs("div", {
                                                className: "flex justify-between mt-1",
                                                children: [l.jsx("span", {
                                                    className: "text-xs bg-red-600 text-white px-2 py-1 rounded-full",
                                                    children: u.from
                                                }), l.jsx("span", {
                                                    className: "text-xs bg-teal-600 text-white px-2 py-1 rounded-full",
                                                    children: u.to
                                                })]
                                            })]
                                        })]
                                    }, g))
                                })
                            })]
                        })
                    }), l.jsx("div", {
                        children: l.jsxs("div", {
                            className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 h-full",
                            children: [l.jsxs("div", {
                                className: "px-4 py-3 border-b dark:border-gray-700 font-semibold flex justify-between items-center",
                                children: [l.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [l.jsx("i", {
                                        className: "bi bi-arrow-left-right"
                                    }), l.jsx("span", {
                                        children: "DIRECTION"
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex gap-2 text-gray-400",
                                    children: [l.jsx("i", {
                                        className: "bi bi-chevron-up cursor-pointer"
                                    }), l.jsx("i", {
                                        className: "bi bi-x-lg cursor-pointer"
                                    })]
                                })]
                            }), l.jsx("div", {
                                className: "p-4",
                                children: l.jsx("div", {
                                    className: "flex flex-col gap-4",
                                    children: v.map((u, g) => l.jsxs("div", {
                                        className: "flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0 last:pb-0",
                                        children: [l.jsx("div", {
                                            className: `${u.iconBg} p-3 rounded-full flex-shrink-0 w-12 h-12 flex items-center justify-center`,
                                            children: l.jsx("i", {
                                                className: `bi ${u.icon} text-white text-2xl`
                                            })
                                        }), l.jsxs("div", {
                                            className: "flex-grow",
                                            children: [l.jsx("div", {
                                                className: "flex items-center gap-2",
                                                children: l.jsx("span", {
                                                    className: "text-xs font-bold bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded",
                                                    children: u.title
                                                })
                                            }), l.jsxs("div", {
                                                className: "text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1",
                                                children: [l.jsx("span", {
                                                    children: u.distance
                                                }), l.jsx("i", {
                                                    className: `bi ${u.actionIcon}`
                                                })]
                                            }), l.jsxs("div", {
                                                className: "text-xs text-gray-400 italic flex items-center gap-12",
                                                children: [l.jsx("span", {
                                                    children: "Estimated time :"
                                                }), l.jsx("i", {
                                                    className: "bi bi-clock"
                                                }), l.jsx("span", {
                                                    children: u.time
                                                })]
                                            })]
                                        })]
                                    }, g))
                                })
                            })]
                        })
                    })]
                }), l.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: [l.jsxs("div", {
                        className: "bg-teal-500 rounded-lg p-4 text-white relative overflow-hidden",
                        children: [l.jsx("div", {
                            className: "absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none",
                            children: l.jsx("div", {
                                className: "grid grid-cols-10 grid-rows-10 gap-4 h-full w-full",
                                children: Array.from({
                                    length: 100
                                }).map((u, g) => l.jsx("div", {
                                    className: "border border-white/20"
                                }, g))
                            })
                        }), l.jsxs("div", {
                            className: "relative z-10",
                            children: [l.jsx("div", {
                                className: "h-48 flex items-center justify-center",
                                children: l.jsxs("div", {
                                    className: "w-full h-full border border-white/30 rounded flex items-center justify-center relative",
                                    children: [l.jsxs("svg", {
                                        viewBox: "0 0 500 150",
                                        className: "w-full h-full",
                                        children: [l.jsx("path", {
                                            d: "M0,100 C50,80 100,120 150,60 S250,20 300,80 S400,120 500,40",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }), l.jsx("path", {
                                            d: "M0,150 L0,100 C50,80 100,120 150,60 S250,20 300,80 S400,120 500,40 L500,150 Z",
                                            fill: "rgba(255,255,255,0.1)"
                                        })]
                                    }), l.jsx("div", {
                                        className: "absolute left-2 top-2 text-xs",
                                        children: "100"
                                    }), l.jsx("div", {
                                        className: "absolute left-2 top-1/4 text-xs",
                                        children: "75"
                                    }), l.jsx("div", {
                                        className: "absolute left-2 top-2/4 text-xs",
                                        children: "50"
                                    }), l.jsx("div", {
                                        className: "absolute left-2 top-3/4 text-xs",
                                        children: "25"
                                    }), l.jsx("div", {
                                        className: "absolute left-2 bottom-2 text-xs",
                                        children: "0"
                                    })]
                                })
                            }), l.jsxs("div", {
                                className: "flex justify-between items-end mt-4",
                                children: [l.jsxs("div", {
                                    children: [l.jsx("div", {
                                        className: "text-sm opacity-80",
                                        children: "Speed Avarage"
                                    }), l.jsxs("div", {
                                        className: "text-5xl font-bold",
                                        children: ["74 ", l.jsx("span", {
                                            className: "text-xs bg-teal-700 px-1 rounded",
                                            children: "KM / HOURS"
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "text-right",
                                    children: [l.jsx("div", {
                                        className: "text-sm opacity-80",
                                        children: "Traffic per day"
                                    }), l.jsx("div", {
                                        className: "text-3xl font-bold",
                                        children: "2.5874"
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "grid grid-cols-3 gap-4 mt-6",
                                children: [l.jsxs("div", {
                                    className: "bg-teal-600/50 p-2 rounded text-center",
                                    children: [l.jsx("div", {
                                        className: "text-sm font-semibold",
                                        children: "Traffic Rates"
                                    }), l.jsxs("div", {
                                        className: "text-xl font-bold mt-1",
                                        children: ["30 % ", l.jsx("span", {
                                            className: "text-xs font-normal opacity-70",
                                            children: "-1,3 %"
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "bg-teal-600/50 p-2 rounded text-center",
                                    children: [l.jsx("div", {
                                        className: "text-sm font-semibold",
                                        children: "Traffic Rates"
                                    }), l.jsxs("div", {
                                        className: "text-xl font-bold mt-1",
                                        children: ["30 % ", l.jsx("span", {
                                            className: "text-xs font-normal opacity-70",
                                            children: "-1,3 %"
                                        })]
                                    })]
                                }), l.jsxs("div", {
                                    className: "bg-teal-600/50 p-2 rounded text-center",
                                    children: [l.jsx("div", {
                                        className: "text-sm font-semibold",
                                        children: "Traffic Rates"
                                    }), l.jsxs("div", {
                                        className: "text-xl font-bold mt-1",
                                        children: ["30 % ", l.jsx("span", {
                                            className: "text-xs font-normal opacity-70",
                                            children: "-1,3 %"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }), l.jsxs("div", {
                        className: "bg-sky-400 rounded-lg p-6 text-white relative overflow-hidden",
                        children: [l.jsxs("div", {
                            className: "flex justify-between items-start relative z-10",
                            children: [l.jsx("div", {
                                children: l.jsxs("h2", {
                                    className: "text-xl font-bold",
                                    children: ["Monday, ", l.jsx("span", {
                                        className: "font-normal",
                                        children: "07:30 AM"
                                    })]
                                })
                            }), l.jsx("div", {
                                className: "text-xl font-bold",
                                children: "CF"
                            })]
                        }), l.jsx("div", {
                            className: "flex items-center justify-center my-8 relative z-10",
                            children: l.jsxs("div", {
                                className: "flex items-center gap-4",
                                children: [l.jsx("i", {
                                    className: "bi bi-cloud-lightning-rain-fill text-8xl"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h1", {
                                        className: "text-4xl font-bold",
                                        children: "Berlin"
                                    }), l.jsx("div", {
                                        className: "text-lg opacity-90",
                                        children: "Day Lightning"
                                    })]
                                })]
                            })
                        }), l.jsx("div", {
                            className: "text-right relative z-10 mb-8",
                            children: l.jsxs("div", {
                                className: "text-6xl font-light flex justify-end items-start",
                                children: [l.jsx("i", {
                                    className: "bi bi-thermometer-half text-4xl mt-2"
                                }), l.jsx("span", {
                                    children: "18"
                                }), l.jsx("span", {
                                    className: "text-4xl mt-1",
                                    children: "°C"
                                })]
                            })
                        }), l.jsx("div", {
                            className: "grid grid-cols-5 gap-2 relative z-10",
                            children: [{
                                day: "MON",
                                temp: 85,
                                icon: "bi-cloud-lightning-rain",
                                wind: 15
                            }, {
                                day: "TUE",
                                temp: 81,
                                icon: "bi-cloud-sun",
                                wind: 12
                            }, {
                                day: "WED",
                                temp: 83,
                                icon: "bi-cloud-rain",
                                wind: 14
                            }, {
                                day: "THU",
                                temp: 80,
                                icon: "bi-sun",
                                wind: 15
                            }, {
                                day: "FRI",
                                temp: 79,
                                icon: "bi-cloud-drizzle",
                                wind: 11
                            }].map((u, g) => l.jsxs("div", {
                                className: "text-center",
                                children: [l.jsx("div", {
                                    className: "bg-black/10 py-1 text-xs font-bold mb-2",
                                    children: u.day
                                }), l.jsxs("div", {
                                    className: "text-2xl font-bold mb-1",
                                    children: [u.temp, l.jsx("span", {
                                        className: "text-xs align-top",
                                        children: "°C"
                                    })]
                                }), l.jsx("i", {
                                    className: `bi ${u.icon} text-2xl mb-1 block`
                                }), l.jsxs("div", {
                                    className: "text-xs opacity-80",
                                    children: [u.wind, " KM/H"]
                                })]
                            }, g))
                        })]
                    })]
                })]
            })
        })
    }
    , Xx = () => {
        const d = W.useRef([])
            , x = [{
                value: 86,
                label: "Distance traveled",
                description: "86% to the check point"
            }, {
                value: 60,
                label: "The average speed",
                description: "30KM/h avarage speed"
            }, {
                value: 25,
                label: "Overall result",
                description: "30KM/h avarage Result"
            }];
        return W.useEffect(() => {
            d.current.forEach((v, u) => {
                if (v) {
                    const g = v.getContext("2d");
                    if (g) {
                        const z = v.width
                            , D = z / 2
                            , Y = z / 2
                            , w = z / 2 - 5;
                        g.clearRect(0, 0, z, z),
                            g.beginPath(),
                            g.arc(D, Y, w, 0, 2 * Math.PI),
                            g.strokeStyle = "rgba(117, 116, 116, 1)",
                            g.lineWidth = 4,
                            g.lineCap = "round",
                            g.stroke();
                        const _ = x[u].value / 100 * 2 * Math.PI - Math.PI / 2;
                        g.beginPath(),
                            g.arc(D, Y, w, -Math.PI / 2, _),
                            g.strokeStyle = "rgb(34, 197, 94)",
                            g.lineWidth = 4,
                            g.lineCap = "round",
                            g.stroke()
                    }
                }
            }
            )
        }
            , []),
            l.jsxs("div", {
                className: "widget-container",
                children: [l.jsx("h3", {
                    className: "flex items-center justify-between text-xs font-semibold text-white dark:text-white uppercase px-3 py-2",
                    children: l.jsxs("span", {
                        className: "px-3 py-1 mb-3 bg-black bg-opacity-60 rounded-xl",
                        children: [l.jsx("i", {
                            className: "bi bi-speedometer2"
                        }), "  MAIN WIDGET"]
                    })
                }), l.jsx("div", {
                    className: "metrics-grid",
                    children: x.map((v, u) => l.jsxs("div", {
                        className: "metric-row",
                        children: [l.jsx("div", {
                            className: "metric-circle-wrapper",
                            children: l.jsxs("span", {
                                className: "metric-circle",
                                children: [l.jsx("span", {
                                    className: "metric-value",
                                    children: v.value
                                }), l.jsx("canvas", {
                                    ref: g => {
                                        d.current[u] = g
                                    }
                                    ,
                                    height: "110",
                                    width: "110",
                                    className: "metric-canvas"
                                })]
                            })
                        }), l.jsxs("div", {
                            className: "metric-details",
                            children: [l.jsx("b", {
                                className: "metric-label",
                                children: v.label
                            }), l.jsx("i", {
                                className: "metric-description",
                                children: v.description
                            })]
                        })]
                    }, u))
                }), l.jsx("style", {
                    children: `
        .widget-container {
          border-radius: 4px;
          min-height: 300px;
          margin-bottom: 15px;
        }

        .widget-title {
           background:red;
          color: #222;
          font-weight: 800;
          line-height: 14.3px;
          margin-bottom: 20px;
          margin-left: 20px;
        }

        .widget-badge {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 11px;
          border-color: rgba(96, 73, 230, 1);
             color: #222;
          display: inline-block;
          line-height: 14.3px;
          margin-bottom: 20px;
          padding: 2px 10px 4px 10px;
        }

        .metrics-grid {
          padding: 0 15px;
          position: relative;
          width: 100%;
        }

        .metric-row {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
        }

        .metric-circle-wrapper {
          flex-shrink: 0;
          width: 60px;
          margin-right: 15px;
        }

        .metric-circle {
          display: inline-block;
          position: relative;
          width: 60px;
          height: 60px;
          text-align: center;
         
        }

        .metric-value {
          display: inline-block;
            color: #222;
          line-height: 60px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .metric-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;
        }

        .metric-details {
          flex: 1;
        }

        .metric-label {
           color: #222;
          font-size: 12px;
          font-weight: 700;
          display: block;
          text-transform: capitalize;
          margin-bottom: 2px;
        }

        .metric-description {
               color: #222;
          font-size: 10px;
          display: block;
          line-height: 14.2857px;
        }
      `
                })]
            })
    }
    , Qx = ({ isOpen: d, onClose: x }) => l.jsxs(l.Fragment, {
        children: [l.jsx("div", {
            id: "settings-panel-backdrop",
            className: `fixed inset-0 bg-black/30 z-40 ${d ? "" : "hidden"}`,
            onClick: x
        }), l.jsxs("div", {
            id: "settings-panel",
            className: ` bg-white paper-wrap bevel tlbr p-0 fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${d ? "translate-x-0" : "translate-x-full"}`,
            children: [l.jsxs("div", {
                className: "flex items-center justify-between p-4 border-b dark:border-gray-700",
                children: [l.jsx("h5", {
                    className: "text-xl font-bold upprcase text-gray-900 dark:text-gray-100 pl-12",
                    children: "Settings Panel"
                }), l.jsx("button", {
                    onClick: x,
                    type: "button",
                    className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-x-lg"
                    })
                })]
            }), l.jsxs("div", {
                className: "overflow-y-auto max-h-[calc(100vh-80px)]",
                children: [l.jsx("div", {
                    className: "p-4 border-b dark:border-gray-700",
                    children: l.jsx(Xx, {})
                }), l.jsxs("div", {
                    className: "p-4",
                    children: [l.jsx("h6", {
                        className: "mb-3 font-semibold text-sm text-gray-900 dark:text-gray-100",
                        children: "User Chat"
                    }), l.jsxs("ul", {
                        className: "space-y-3",
                        children: [l.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("img", {
                                    src: "https://avatar.iran.liara.run/public/boy?username=Scott",
                                    className: "rounded-full mr-3",
                                    alt: "Alex Johnson",
                                    width: "40",
                                    height: "40"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h6", {
                                        className: "mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: "Alex Johnson"
                                    }), l.jsx("small", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: "Online"
                                    })]
                                })]
                            }), l.jsx("span", {
                                className: "px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full",
                                children: "Online"
                            })]
                        }), l.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("img", {
                                    src: "https://avatar.iran.liara.run/public/boy",
                                    className: "rounded-full mr-3",
                                    alt: "Maria Garcia",
                                    width: "40",
                                    height: "40"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h6", {
                                        className: "mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: "Maria Garcia"
                                    }), l.jsx("small", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: "5 mins ago"
                                    })]
                                })]
                            }), l.jsx("span", {
                                className: "px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full",
                                children: "Online"
                            })]
                        }), l.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("img", {
                                    src: "https://avatar.iran.liara.run/public/boy",
                                    className: "rounded-full mr-3",
                                    alt: "James Wilson",
                                    width: "40",
                                    height: "40"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h6", {
                                        className: "mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: "James Wilson"
                                    }), l.jsx("small", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: "15 mins ago"
                                    })]
                                })]
                            }), l.jsx("span", {
                                className: "px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 rounded-full",
                                children: "Offline"
                            })]
                        }), l.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("img", {
                                    src: "https://avatar.iran.liara.run/public/boy",
                                    className: "rounded-full mr-3",
                                    alt: "Sophia Chen",
                                    width: "40",
                                    height: "40"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h6", {
                                        className: "mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: "Sophia Chen"
                                    }), l.jsx("small", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: "Online"
                                    })]
                                })]
                            }), l.jsx("span", {
                                className: "px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full",
                                children: "Online"
                            })]
                        }), l.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("img", {
                                    src: "https://avatar.iran.liara.run/public/boy?username=Tony",
                                    className: "rounded-full mr-3",
                                    alt: "David Kumar",
                                    width: "40",
                                    height: "40"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h6", {
                                        className: "mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: "David Kumar"
                                    }), l.jsx("small", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: "30 mins ago"
                                    })]
                                })]
                            }), l.jsx("span", {
                                className: "px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 rounded-full",
                                children: "Offline"
                            })]
                        }), l.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("img", {
                                    src: "https://avatar.iran.liara.run/public/girl?username=harry",
                                    className: "rounded-full mr-3",
                                    alt: "Emma Taylor",
                                    width: "40",
                                    height: "40"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h6", {
                                        className: "mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: "Emma Taylor"
                                    }), l.jsx("small", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: "Online"
                                    })]
                                })]
                            }), l.jsx("span", {
                                className: "px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:bg-green-900/50 dark:text-green-300 rounded-full",
                                children: "Online"
                            })]
                        }), l.jsxs("li", {
                            className: "flex items-center justify-between",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("img", {
                                    src: "https://avatar.iran.liara.run/public/girl?username=Maria",
                                    className: "rounded-full mr-3",
                                    alt: "Liam O'Connor",
                                    width: "40",
                                    height: "40"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h6", {
                                        className: "mb-0 text-sm font-semibold text-gray-900 dark:text-gray-100",
                                        children: "Liam O'Connor"
                                    }), l.jsx("small", {
                                        className: "text-gray-500 dark:text-gray-400",
                                        children: "45 mins ago"
                                    })]
                                })]
                            }), l.jsx("span", {
                                className: "px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 dark:bg-gray-600 dark:text-gray-300 rounded-full",
                                children: "Offline"
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
    , Vx = ({ email: d, onBack: x }) => l.jsxs("div", {
        className: "flex flex-col h-full",
        children: [l.jsxs("div", {
            className: "p-3 flex items-center border-b dark:border-gray-700 gap-2",
            children: [l.jsxs("button", {
                onClick: x,
                className: "px-3 py-1 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2",
                children: [l.jsx("i", {
                    className: "bi bi-arrow-left"
                }), " Back"]
            }), l.jsx("div", {
                className: "flex-grow"
            }), l.jsx("button", {
                className: "px-3 py-1 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                children: l.jsx("i", {
                    className: "bi bi-reply-fill"
                })
            }), l.jsx("button", {
                className: "px-3 py-1 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                children: l.jsx("i", {
                    className: "bi bi-arrow-right-short"
                })
            }), l.jsx("button", {
                className: "px-3 py-1 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                children: l.jsx("i", {
                    className: "bi bi-envelope-open"
                })
            }), l.jsx("button", {
                className: "px-3 py-1 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                children: l.jsx("i", {
                    className: "bi bi-trash"
                })
            })]
        }), l.jsxs("div", {
            className: "p-4 flex-grow overflow-y-auto",
            children: [l.jsx("h1", {
                className: "text-2xl font-bold mb-4",
                children: d.subject
            }), l.jsxs("div", {
                className: "flex items-center gap-3 mb-6 pb-4 border-b dark:border-gray-700",
                children: [l.jsx("div", {
                    className: "p-3 rounded-full bg-gray-100 dark:bg-gray-700",
                    children: l.jsx("i", {
                        className: `bi ${d.senderIcon} ${d.senderIconClass} text-2xl`
                    })
                }), l.jsxs("div", {
                    children: [l.jsx("div", {
                        className: "font-semibold text-gray-800 dark:text-gray-200",
                        children: d.sender
                    }), l.jsx("div", {
                        className: "text-sm text-gray-500 dark:text-gray-400",
                        children: "to me"
                    })]
                }), l.jsx("div", {
                    className: "ml-auto text-sm text-gray-500 dark:text-gray-400",
                    children: d.timestamp
                })]
            }), l.jsx("div", {
                className: "prose dark:prose-invert max-w-none whitespace-pre-wrap",
                children: l.jsx("p", {
                    children: d.body
                })
            })]
        })]
    })
    , Zx = () => {
        const [d, x] = W.useState(Ox)
            , [v, u] = W.useState(new Set)
            , [g, z] = W.useState(null)
            , D = M => {
                x(d.map(H => H.id === M ? {
                    ...H,
                    isStarred: !H.isStarred
                } : H))
            }
            , Y = M => {
                M.target.checked ? u(new Set(d.map(H => H.id))) : u(new Set)
            }
            , w = M => {
                const H = new Set(v);
                H.has(M) ? H.delete(M) : H.add(M),
                    u(H)
            }
            , N = M => {
                x(H => H.map(ce => ce.id === M.id ? {
                    ...ce,
                    isRead: !0
                } : ce)),
                    z(M)
            }
            , _ = () => {
                z(null)
            }
            ;
        return l.jsx("main", {
            className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
            children: l.jsxs("div", {
                className: "flex flex-col gap-4 ",
                children: [l.jsx(pe, {
                    title: "Mail",
                    breadcrumbItems: [],
                    userName: "Shariq",
                    lastSignIn: "Yesterday, 16:54 PM"
                }), l.jsxs("div", {
                    className: "flex gap-4 flex-grow min-h-0",
                    children: [l.jsxs("aside", {
                        className: "w-56 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm hidden lg:flex flex-col",
                        children: [l.jsx("div", {
                            className: "p-3",
                            children: l.jsxs("button", {
                                className: "w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-md shadow transition-colors",
                                children: [l.jsx("i", {
                                    className: "bi bi-pencil-square mr-2"
                                }), " Compose Mail"]
                            })
                        }), l.jsx("nav", {
                            className: "p-2 flex-grow",
                            children: l.jsxs("ul", {
                                className: "space-y-1",
                                children: [l.jsx("li", {
                                    children: l.jsxs("a", {
                                        href: "#!",
                                        className: "flex justify-between items-center py-2 px-3 rounded-md bg-gray-100 dark:bg-gray-700 font-semibold text-gray-800 dark:text-gray-100",
                                        children: [l.jsxs("span", {
                                            className: "flex items-center gap-3",
                                            children: [l.jsx("i", {
                                                className: "bi bi-inbox w-5"
                                            }), " Inbox"]
                                        }), l.jsx("span", {
                                            className: "text-xs font-bold text-white bg-cyan-500 px-2 py-0.5 rounded-full",
                                            children: "648"
                                        })]
                                    })
                                }), l.jsx("li", {
                                    children: l.jsxs("a", {
                                        href: "#!",
                                        className: "flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400",
                                        children: [l.jsxs("span", {
                                            className: "flex items-center gap-3",
                                            children: [l.jsx("i", {
                                                className: "bi bi-file-earmark-text w-5"
                                            }), " Draft"]
                                        }), l.jsx("span", {
                                            className: "text-xs font-bold text-white bg-blue-500 px-2 py-0.5 rounded-full",
                                            children: "5"
                                        })]
                                    })
                                }), l.jsx("li", {
                                    children: l.jsx("a", {
                                        href: "#!",
                                        className: "flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400",
                                        children: l.jsxs("span", {
                                            className: "flex items-center gap-3",
                                            children: [l.jsx("i", {
                                                className: "bi bi-send w-5"
                                            }), " Sent"]
                                        })
                                    })
                                }), l.jsx("li", {
                                    children: l.jsx("a", {
                                        href: "#!",
                                        className: "flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400",
                                        children: l.jsxs("span", {
                                            className: "flex items-center gap-3",
                                            children: [l.jsx("i", {
                                                className: "bi bi-trash w-5"
                                            }), " Trash"]
                                        })
                                    })
                                }), l.jsx("li", {
                                    children: l.jsxs("a", {
                                        href: "#!",
                                        className: "flex justify-between items-center py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400",
                                        children: [l.jsxs("span", {
                                            className: "flex items-center gap-3",
                                            children: [l.jsx("i", {
                                                className: "bi bi-shield-slash w-5"
                                            }), " Spam"]
                                        }), l.jsx("span", {
                                            className: "text-xs font-bold text-white bg-orange-500 px-2 py-0.5 rounded-full",
                                            children: "123"
                                        })]
                                    })
                                })]
                            })
                        })]
                    }), l.jsx("div", {
                        className: "flex-1 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm flex flex-col min-w-0",
                        children: g ? l.jsx(Vx, {
                            email: g,
                            onBack: _
                        }) : l.jsxs(l.Fragment, {
                            children: [l.jsx("div", {
                                className: "p-3 border-b dark:border-gray-700",
                                children: l.jsxs("h1", {
                                    className: "text-lg font-bold flex items-center",
                                    children: [l.jsx("i", {
                                        className: "bi bi-envelope mr-3 text-gray-500"
                                    }), " MAIL"]
                                })
                            }), l.jsxs("div", {
                                className: "p-3 flex flex-wrap justify-between items-center border-b dark:border-gray-700 gap-2",
                                children: [l.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [l.jsxs("div", {
                                        className: "flex items-center",
                                        children: [l.jsx("input", {
                                            type: "checkbox",
                                            className: "form-checkbox h-4 w-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500",
                                            onChange: Y,
                                            checked: v.size === d.length && d.length > 0
                                        }), l.jsx("span", {
                                            className: "ml-2 text-sm",
                                            children: "All"
                                        })]
                                    }), l.jsxs("button", {
                                        className: "px-3 py-1 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                                        children: ["More ", l.jsx("i", {
                                            className: "bi bi-chevron-down text-xs"
                                        })]
                                    }), l.jsxs("button", {
                                        className: "px-3 py-1 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                                        children: [l.jsx("i", {
                                            className: "bi bi-arrow-clockwise"
                                        }), " Refresh"]
                                    })]
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-500",
                                    children: [l.jsx("span", {
                                        children: "1-50 of 124"
                                    }), l.jsxs("div", {
                                        className: "flex",
                                        children: [l.jsx("button", {
                                            className: "px-2 py-1 border rounded-l-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                                            children: l.jsx("i", {
                                                className: "bi bi-chevron-left"
                                            })
                                        }), l.jsx("button", {
                                            className: "px-2 py-1 border-t border-b border-r rounded-r-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                                            children: l.jsx("i", {
                                                className: "bi bi-chevron-right"
                                            })
                                        })]
                                    })]
                                })]
                            }), l.jsx("div", {
                                className: "overflow-y-auto flex-grow",
                                children: l.jsx("table", {
                                    className: "w-full text-sm",
                                    children: l.jsx("tbody", {
                                        className: "divide-y divide-gray-200 dark:divide-gray-700",
                                        children: d.map(M => l.jsxs("tr", {
                                            onClick: () => N(M),
                                            className: `transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 ${M.isRead ? "text-gray-600 dark:text-gray-400" : "font-bold"}`,
                                            children: [l.jsx("td", {
                                                className: "p-3 w-12 text-center",
                                                onClick: H => H.stopPropagation(),
                                                children: l.jsx("input", {
                                                    type: "checkbox",
                                                    className: "form-checkbox h-4 w-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500",
                                                    onChange: () => w(M.id),
                                                    checked: v.has(M.id)
                                                })
                                            }), l.jsx("td", {
                                                className: "p-3 w-12 text-center",
                                                onClick: H => H.stopPropagation(),
                                                children: l.jsx("button", {
                                                    onClick: () => D(M.id),
                                                    children: l.jsx("i", {
                                                        className: `bi ${M.isStarred ? "bi-star-fill text-yellow-400" : "bi-star"}`
                                                    })
                                                })
                                            }), l.jsx("td", {
                                                className: "p-3 w-12 text-center",
                                                children: l.jsx("i", {
                                                    className: `bi ${M.senderIcon} ${M.senderIconClass}`
                                                })
                                            }), l.jsx("td", {
                                                className: "p-3 w-40 truncate whitespace-nowrap text-gray-800 dark:text-gray-200",
                                                children: M.sender
                                            }), l.jsxs("td", {
                                                className: "p-3",
                                                children: [l.jsx("span", {
                                                    className: "text-gray-800 dark:text-gray-200",
                                                    children: M.subject
                                                }), M.preview && l.jsxs("span", {
                                                    className: "text-gray-500 dark:text-gray-400 font-normal ml-2 hidden sm:inline",
                                                    children: ["- ", M.preview]
                                                })]
                                            }), l.jsx("td", {
                                                className: "p-3 w-40 text-right whitespace-nowrap text-xs font-normal",
                                                children: M.timestamp
                                            })]
                                        }, M.id))
                                    })
                                })
                            })]
                        })
                    })]
                })]
            })
        })
    }
    , Kx = [{
        title: "DRIP ICON",
        description: l.jsxs(l.Fragment, {
            children: ["Vector line-icon font by ", l.jsx("a", {
                href: "#!",
                className: "text-blue-500 hover:underline",
                children: "Amit Jakhu"
            }), ". Version 1.0"]
        }),
        icons: ["bi-list", "bi-list-ul", "bi-list-ol", "bi-list-task", "bi-arrow-up", "bi-paperclip", "bi-arrow-right", "bi-code", "bi-calendar-date", "bi-arrow-clockwise", "bi-chat-left-dots", "bi-broadcast", "bi-wifi", "bi-folder2", "bi-share", "bi-reply", "bi-heart", "bi-headphones", "bi-gear", "bi-info-circle", "bi-box-arrow-right", "bi-telephone", "bi-camera-video", "bi-mic", "bi-play-circle", "bi-pause-circle", "bi-stop-circle", "bi-pc-display", "bi-music-note-beamed", "bi-house", "bi-question-circle", "bi-arrow-return-left", "bi-three-dots", "bi-upload", "bi-people", "bi-trash", "bi-star", "bi-volume-up", "bi-exclamation-triangle", "bi-alarm"]
    }, {
        title: "WEATHER ICON",
        description: l.jsxs(l.Fragment, {
            children: ["The Weather Icons project created and maintained by ", l.jsx("a", {
                href: "#!",
                className: "text-blue-500 hover:underline",
                children: "Erik Flowers"
            }), ". Original artwork by Lukas Bischoff."]
        }),
        icons: ["bi-cloud-sun", "bi-cloud-lightning-rain", "bi-cloud-drizzle", "bi-cloud-rain-heavy", "bi-cloud-rain", "bi-cloud-hail", "bi-cloud-snow", "bi-cloud-sleet", "bi-cloudy", "bi-cloud-fog", "bi-cloud-haze", "bi-clouds", "bi-cloud-upload", "bi-cloud-download", "bi-cloud-slash", "bi-cloud-plus", "bi-cloud-minus", "bi-wind", "bi-tornado", "bi-tsunami", "bi-hurricane", "bi-thermometer-sun", "bi-thermometer-snow", "bi-thermometer-half", "bi-thermometer-high", "bi-thermometer-low", "bi-thermometer", "bi-droplet", "bi-umbrella", "bi-sunrise", "bi-sunset", "bi-moon-stars", "bi-moon", "bi-brightness-high", "bi-brightness-low", "bi-arrow-up-short", "bi-arrow-down-short", "bi-arrow-left-short", "bi-arrow-right-short", "bi-compass"]
    }, {
        title: "ENTYPO ICONS",
        description: l.jsxs(l.Fragment, {
            children: ["A set of 250+ carefully crafted pictograms by ", l.jsx("a", {
                href: "#!",
                className: "text-blue-500 hover:underline",
                children: "Daniel Bruce"
            }), ". To use with single element use this ", l.jsx("code", {
                children: '<span class="entypo-note"></span>'
            })]
        }),
        icons: ["bi-music-note-list", "bi-search", "bi-envelope", "bi-heart", "bi-star", "bi-person", "bi-people", "bi-person-plus", "bi-image", "bi-camera", "bi-grid-3x3-gap", "bi-list-ul", "bi-check-lg", "bi-x-lg", "bi-plus-lg", "bi-dash-lg", "bi-info-circle", "bi-exclamation-circle", "bi-question-circle", "bi-link-45deg", "bi-paperclip", "bi-lock", "bi-unlock", "bi-eye", "bi-tag", "bi-bookmark", "bi-flag", "bi-hand-thumbs-up", "bi-hand-thumbs-down", "bi-upload", "bi-download", "bi-reply", "bi-pencil-square", "bi-pen", "bi-printer", "bi-arrow-repeat", "bi-book-half", "bi-card-text", "bi-chat-left-dots", "bi-chat-right-dots", "bi-pin-map", "bi-geo-alt", "bi-telephone", "bi-gear", "bi-wrench", "bi-basket", "bi-cart", "bi-mic", "bi-volume-mute", "bi-volume-down", "bi-volume-up", "bi-lightbulb", "bi-brightness-high", "bi-arrows-angle-expand", "bi-arrows-angle-contract", "bi-clock-history", "bi-clock", "bi-hourglass-split", "bi-shield-check", "bi-exclamation-triangle", "bi-calendar-event", "bi-folder", "bi-archive", "bi-file-earmark-zip"]
    }, {
        title: "FONT AWESOME ICONS",
        description: l.jsxs(l.Fragment, {
            children: ["The iconic font designed for use with Twitter Bootstrap by ", l.jsx("a", {
                href: "#!",
                className: "text-blue-500 hover:underline",
                children: "Dave Gandy"
            }), ". Avant comes baked with Font Awesome 4.0.1, which provides you with scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS."]
        }),
        icons: ["bi-camera-reels", "bi-film", "bi-search", "bi-check-lg", "bi-x-lg", "bi-zoom-in", "bi-zoom-out", "bi-power", "bi-signal", "bi-gear", "bi-trash", "bi-house", "bi-file-earmark", "bi-clock", "bi-arrow-repeat", "bi-lock", "bi-flag", "bi-headphones", "bi-volume-up", "bi-volume-down", "bi-volume-mute", "bi-qr-code", "bi-barcode-scan", "bi-tag", "bi-book", "bi-bookmark", "bi-printer", "bi-camera", "bi-type-bold", "bi-type-italic", "bi-text-left", "bi-text-center", "bi-text-right", "bi-justify", "bi-list-ul", "bi-list-ol", "bi-type-strikethrough", "bi-type-underline", "bi-paperclip", "bi-files", "bi-scissors", "bi-save", "bi-menu-button-wide", "bi-list-task", "bi-arrows-move", "bi-play", "bi-pause", "bi-stop", "bi-skip-backward", "bi-skip-forward", "bi-fast-forward", "bi-step-forward", "bi-eject", "bi-chevron-left", "bi-chevron-right", "bi-chevron-up"]
    }, {
        title: "MAKI ICONS",
        description: l.jsxs(l.Fragment, {
            children: ["It's a clean point of interest icon set made for web cartography by ", l.jsx("a", {
                href: "#!",
                className: "text-blue-500 hover:underline",
                children: "MapBox"
            }), "."]
        }),
        icons: ["bi-train-front", "bi-airplane", "bi-airplane-engines", "bi-cloud-drizzle", "bi-bus-front", "bi-cup-hot", "bi-triangle", "bi-shield-shaded", "bi-egg-fried", "bi-fuel-pump", "bi-flower1", "bi-fire", "bi-book-half", "bi-info-circle", "bi-shop", "bi-tree", "bi-water", "bi-flower2", "bi-shop-window", "bi-bank", "bi-bicycle", "bi-flower3", "bi-building", "bi-flag", "bi-droplet", "bi-cone-striped", "bi-tree-fill", "bi-key", "bi-record-circle", "bi-plug", "bi-tsunami", "bi-trash"]
    }]
    , Jx = ({ set: d }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsxs("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: [l.jsxs("h2", {
                className: "text-base font-semibold flex items-center gap-2",
                children: [l.jsx("i", {
                    className: "bi bi-gem"
                }), " ", d.title]
            }), l.jsxs("div", {
                className: "text-xs text-gray-400",
                children: [l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-chevron-up"
                    })
                }), l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-x"
                    })
                })]
            })]
        }), l.jsxs("div", {
            className: "p-4",
            children: [l.jsx("p", {
                className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                children: d.description
            }), l.jsx("div", {
                className: "grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 text-center",
                children: d.icons.map((x, v) => l.jsxs("div", {
                    className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex flex-col items-center justify-center h-20 group",
                    children: [l.jsx("i", {
                        className: `bi ${x} text-2xl mb-1`
                    }), l.jsx("span", {
                        className: "text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity truncate w-full",
                        children: x.replace("bi-", "")
                    })]
                }, v))
            })]
        })]
    })
    , Fx = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4 ",
            children: [l.jsx(pe, {
                title: "Icon page",
                breadcrumbItems: [],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM"
            }), Kx.map(d => l.jsx(Jx, {
                set: d
            }, d.title))]
        })
    })
    , Pt = ({ label: d, children: x }) => l.jsxs("div", {
        className: "grid grid-cols-3 gap-4 items-center border-t mt-4 pt-4",
        children: [l.jsx("dt", {
            className: "font-semibold text-gray-500 dark:text-gray-400 text-sm",
            children: d
        }), l.jsx("dd", {
            className: "col-span-2 text-gray-800 dark:text-gray-200 text-sm",
            children: x
        })]
    })
    , Es = ({ time: d, activity: x }) => l.jsxs("li", {
        className: "py-2 border-t mt-4 pt-4  flex justify-between items-center",
        children: [l.jsxs("span", {
            className: "text-gray-600 dark:text-gray-400",
            children: [l.jsx("b", {
                className: "text-gray-800 dark:text-gray-200",
                children: d
            }), " - ", x]
        }), l.jsx("button", {
            className: "text-gray-400 hover:text-cyan-500",
            children: l.jsx("i", {
                className: "bi bi-pencil"
            })
        })]
    })
    , $x = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Profile",
                breadcrumbItems: [{
                    label: "Extra Pages",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM",
                showAlert: !0
            }), l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
                children: [l.jsxs("h2", {
                    className: "text-base font-semibold mb-4 flex items-center gap-2",
                    children: [l.jsx("i", {
                        className: "bi bi-person"
                    }), " Profile"]
                }), l.jsxs("div", {
                    className: "flex flex-col md:flex-row gap-8",
                    children: [l.jsxs("div", {
                        className: "flex-shrink-0 text-center",
                        children: [l.jsx("img", {
                            src: "https://picsum.photos/seed/dave-profile/128/128",
                            alt: "Dave Mattew",
                            className: "w-32 h-32 rounded-full mx-auto"
                        }), l.jsxs("div", {
                            className: "mt-4 text-yellow-400",
                            children: [l.jsx("i", {
                                className: "bi bi-star-fill"
                            }), " ", l.jsx("i", {
                                className: "bi bi-star-fill"
                            }), " ", l.jsx("i", {
                                className: "bi bi-star-fill"
                            }), " ", l.jsx("i", {
                                className: "bi bi-star-fill"
                            }), " ", l.jsx("i", {
                                className: "bi bi-star-half"
                            })]
                        }), l.jsxs("dl", {
                            className: "mt-4 text-left space-y-3 text-sm",
                            children: [l.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [l.jsx("dt", {
                                    className: "font-semibold text-gray-500",
                                    children: "Joined"
                                }), l.jsx("dd", {
                                    className: "text-gray-700 dark:text-gray-300",
                                    children: "2.13.2014"
                                })]
                            }), l.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [l.jsx("dt", {
                                    className: "font-semibold text-gray-500",
                                    children: "Last seen"
                                }), l.jsx("dd", {
                                    className: "text-gray-700 dark:text-gray-300",
                                    children: "Yesterday"
                                })]
                            }), l.jsxs("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: [l.jsx("dt", {
                                    className: "font-semibold text-gray-500",
                                    children: "Nickname"
                                }), l.jsx("dd", {
                                    className: "text-gray-700 dark:text-gray-300",
                                    children: "themesmile"
                                })]
                            })]
                        })]
                    }), l.jsxs("div", {
                        className: "flex-grow",
                        children: [l.jsxs("div", {
                            className: "flex justify-between items-start",
                            children: [l.jsx("h3", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-200",
                                children: "Dave Mattew"
                            }), l.jsxs("div", {
                                className: "flex gap-2 text-gray-500",
                                children: [l.jsx("a", {
                                    href: "#!",
                                    className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
                                    children: l.jsx("i", {
                                        className: "bi bi-facebook"
                                    })
                                }), l.jsx("a", {
                                    href: "#!",
                                    className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
                                    children: l.jsx("i", {
                                        className: "bi bi-twitter"
                                    })
                                }), l.jsx("a", {
                                    href: "#!",
                                    className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
                                    children: l.jsx("i", {
                                        className: "bi bi-linkedin"
                                    })
                                }), l.jsx("a", {
                                    href: "#!",
                                    className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
                                    children: l.jsx("i", {
                                        className: "bi bi-github"
                                    })
                                }), l.jsx("a", {
                                    href: "#!",
                                    className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700",
                                    children: l.jsx("i", {
                                        className: "bi bi-google"
                                    })
                                })]
                            })]
                        }), l.jsxs("dl", {
                            className: "mt-4 space-y-3 mb-24",
                            children: [l.jsx(Pt, {
                                label: "User Id",
                                children: ": eko.sulis"
                            }), l.jsx(Pt, {
                                label: "Name",
                                children: ": Eko Sulistyo"
                            }), l.jsx(Pt, {
                                label: "Email",
                                children: ": eko.sulistyo@yahoo.com"
                            }), l.jsx(Pt, {
                                label: "Phone",
                                children: ": 081 725 xxx"
                            }), l.jsx(Pt, {
                                label: "Active Periode",
                                children: ": 02 Dec 2014"
                            }), l.jsx(Pt, {
                                label: "Last Update",
                                children: ": 02 Apr 2014"
                            }), l.jsx(Pt, {
                                label: "About",
                                children: ": Web Designer / UI"
                            }), l.jsx(Pt, {
                                label: "Hobbies",
                                children: ": Read, out with friends, listen to music, draw and learn new things"
                            }), l.jsxs(Pt, {
                                label: "Skills",
                                children: [": ", l.jsx("span", {
                                    className: "inline-block bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-sm mr-1",
                                    children: "html5"
                                }), l.jsx("span", {
                                    className: "inline-block bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-sm mr-1",
                                    children: "css3"
                                }), l.jsx("span", {
                                    className: "inline-block bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-sm mr-1",
                                    children: "jquery"
                                }), l.jsx("span", {
                                    className: "inline-block bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-sm",
                                    children: "bootstrap3"
                                })]
                            })]
                        }), l.jsxs("div", {
                            className: "mt-6 mb-24",
                            children: [l.jsxs("h4", {
                                className: "font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-300",
                                children: [l.jsx("i", {
                                    className: "bi bi-arrow-repeat"
                                }), " Recent Activities"]
                            }), l.jsxs("ul", {
                                className: "mt-2",
                                children: [l.jsx(Es, {
                                    time: "Today, 1:00",
                                    activity: "Jeff Manzi liked your post."
                                }), l.jsx(Es, {
                                    time: "Today, 12:23",
                                    activity: "Mark Frendo liked and shared your post."
                                }), l.jsx(Es, {
                                    time: "Today, 12:20",
                                    activity: "You posted a new blog entry title 'Why social media is'."
                                }), l.jsx(Es, {
                                    time: "Yesterday",
                                    activity: "Karen P. liked your post."
                                }), l.jsx(Es, {
                                    time: "2 Days Ago",
                                    activity: "Jeff Manzi liked your post."
                                })]
                            })]
                        })]
                    })]
                })]
            }), l.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: [l.jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-lg p-4 text-center border dark:border-gray-700",
                    children: [l.jsx("div", {
                        className: "text-3xl font-bold",
                        children: "20,7K"
                    }), l.jsx("div", {
                        className: "text-sm text-gray-500",
                        children: "Followers"
                    }), l.jsxs("button", {
                        className: "mt-3 w-full bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-md transition-colors",
                        children: [l.jsx("i", {
                            className: "bi bi-plus-circle"
                        }), " Follow"]
                    })]
                }), l.jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-lg p-4 text-center border dark:border-gray-700",
                    children: [l.jsx("div", {
                        className: "text-3xl font-bold",
                        children: "245"
                    }), l.jsx("div", {
                        className: "text-sm text-gray-500",
                        children: "Following"
                    }), l.jsxs("button", {
                        className: "mt-3 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-md transition-colors",
                        children: [l.jsx("i", {
                            className: "bi bi-person-check"
                        }), " View Profile"]
                    })]
                }), l.jsxs("div", {
                    className: "bg-white dark:bg-gray-800 rounded-lg p-4 text-center border dark:border-gray-700",
                    children: [l.jsx("div", {
                        className: "text-3xl font-bold",
                        children: "43"
                    }), l.jsx("div", {
                        className: "text-sm text-gray-500",
                        children: "Likes"
                    }), l.jsxs("button", {
                        className: "mt-3 w-full bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-md transition-colors",
                        children: [l.jsx("i", {
                            className: "bi bi-hand-thumbs-up"
                        }), " Likes"]
                    })]
                })]
            }), l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700",
                children: [l.jsxs("div", {
                    className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
                    children: [l.jsxs("h2", {
                        className: "text-base font-semibold flex items-center gap-2",
                        children: [l.jsx("i", {
                            className: "bi bi-pencil-square"
                        }), " EDIT PROFILE"]
                    }), l.jsxs("div", {
                        className: "text-xs text-gray-400",
                        children: [l.jsx("button", {
                            className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                            children: l.jsx("i", {
                                className: "bi bi-chevron-up"
                            })
                        }), l.jsx("button", {
                            className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                            children: l.jsx("i", {
                                className: "bi bi-x"
                            })
                        })]
                    })]
                }), l.jsxs("div", {
                    className: "p-4 space-y-6",
                    children: [l.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [l.jsx("img", {
                            src: "https://picsum.photos/seed/avatar-edit/64/64",
                            alt: "avatar",
                            className: "w-16 h-16 rounded-full"
                        }), l.jsxs("div", {
                            children: [l.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: "Upload a different photo..."
                            }), l.jsxs("div", {
                                className: "flex mt-1",
                                children: [l.jsx("button", {
                                    className: "px-4 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-l-md",
                                    children: "Browse"
                                }), l.jsx("input", {
                                    type: "text",
                                    className: "form-input w-full text-sm rounded-r-md border-gray-300 dark:border-gray-600 dark:bg-gray-700",
                                    placeholder: "No file selected",
                                    readOnly: !0
                                })]
                            })]
                        })]
                    }), l.jsxs("div", {
                        className: "p-3 text-sm text-sky-700 rounded-lg bg-sky-100 dark:bg-sky-900/50 dark:text-sky-300",
                        role: "alert",
                        children: [l.jsx("i", {
                            className: "bi bi-info-circle mr-1"
                        }), " This is an ", l.jsx("b", {
                            children: ".alert"
                        }), ". Use this to show important messages to the user."]
                    }), l.jsxs("div", {
                        children: [l.jsx("h3", {
                            className: "font-semibold text-gray-700 dark:text-gray-300 border-b dark:border-gray-700 pb-2 mb-4",
                            children: "Personal info"
                        }), l.jsxs("form", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "first-name",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "First name:"
                                }), l.jsx("input", {
                                    type: "text",
                                    id: "first-name",
                                    defaultValue: "Jane",
                                    className: "form-input w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "last-name",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "Last name:"
                                }), l.jsx("input", {
                                    type: "text",
                                    id: "last-name",
                                    defaultValue: "Bishop",
                                    className: "form-input w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "company",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "Company:"
                                }), l.jsx("input", {
                                    type: "text",
                                    id: "company",
                                    className: "form-input w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "email",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "Email:"
                                }), l.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    defaultValue: "janesemail@gmail.com",
                                    className: "form-input w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "time-zone",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "Time Zone:"
                                }), l.jsxs("select", {
                                    id: "time-zone",
                                    className: "form-select w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700",
                                    children: [l.jsx("option", {
                                        children: "(GMT-06:00) Central Time (US & Canada)"
                                    }), l.jsx("option", {
                                        children: "(GMT-05:00) Eastern Time (US & Canada)"
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "username",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "Username:"
                                }), l.jsx("input", {
                                    type: "text",
                                    id: "username",
                                    defaultValue: "janeuser",
                                    className: "form-input w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "password",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "Password:"
                                }), l.jsx("input", {
                                    type: "password",
                                    id: "password",
                                    defaultValue: "********",
                                    className: "form-input w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("label", {
                                    htmlFor: "confirm-password",
                                    className: "w-1/3 text-right pr-4 text-gray-500 dark:text-gray-400",
                                    children: "Confirm password:"
                                }), l.jsx("input", {
                                    type: "password",
                                    id: "confirm-password",
                                    defaultValue: "********",
                                    className: "form-input w-2/3 rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                })]
                            }), l.jsx("div", {
                                className: "md:col-span-2",
                                children: l.jsxs("div", {
                                    className: "flex justify-end gap-2 mt-4",
                                    children: [l.jsx("button", {
                                        type: "submit",
                                        className: "px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md",
                                        children: "Save Changes"
                                    }), l.jsx("button", {
                                        type: "button",
                                        className: "px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-gray-200 rounded-md",
                                        children: "Cancel"
                                    })]
                                })
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
    , Wx = () => {
        const d = [{
            qty: 1,
            product: "Call of Duty",
            serial: "455-981-221",
            description: "El snort testosterone trophy driving gloves handsome",
            subtotal: 64.5
        }, {
            qty: 1,
            product: "Need for Speed IV",
            serial: "247-925-726",
            description: "Wes Anderson umami biodiesel",
            subtotal: 50
        }, {
            qty: 1,
            product: "Monsters DVD",
            serial: "735-845-642",
            description: "Terry Richardson helvetica tousled street art master",
            subtotal: 10.7
        }, {
            qty: 1,
            product: "Grown Ups Blue Ray",
            serial: "422-568-642",
            description: "Tousled lomo letterpress",
            subtotal: 25.99
        }]
            , x = d.reduce((z, D) => z + D.subtotal, 0)
            , v = x * .093
            , u = 5.8
            , g = x + v + u;
        return l.jsx("main", {
            className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
            children: l.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [l.jsx(pe, {
                    title: "Invoice",
                    breadcrumbItems: [{
                        label: "Extra Pages",
                        href: "#!"
                    }],
                    userName: "Shariq",
                    lastSignIn: "Yesterday, 16:54 PM",
                    showAlert: !0
                }), l.jsxs("div", {
                    className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700",
                    children: [l.jsxs("div", {
                        className: "bg-cyan-100/50 dark:bg-cyan-900/20 p-4 sm:p-6 flex flex-wrap justify-between items-center rounded-t-lg",
                        children: [l.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [l.jsx("i", {
                                className: "bi bi-globe text-4xl text-cyan-600 dark:text-cyan-400"
                            }), l.jsx("h2", {
                                className: "text-2xl font-bold text-gray-700 dark:text-gray-200",
                                children: "FMS, Inc."
                            })]
                        }), l.jsx("div", {
                            className: "text-lg text-cyan-700 dark:text-cyan-300 mt-2 sm:mt-0",
                            children: "Date: 8/03/2014"
                        })]
                    }), l.jsxs("div", {
                        className: "p-4 sm:p-6",
                        children: [l.jsxs("div", {
                            className: "grid md:grid-cols-3 gap-6 mb-8",
                            children: [l.jsxs("div", {
                                className: "md:col-span-2 grid sm:grid-cols-2 gap-6 text-sm",
                                children: [l.jsxs("div", {
                                    children: [l.jsx("h3", {
                                        className: "font-semibold mb-2 text-gray-600 dark:text-gray-400",
                                        children: "From"
                                    }), l.jsxs("address", {
                                        className: "not-italic text-gray-800 dark:text-gray-200",
                                        children: [l.jsx("strong", {
                                            children: "Admin, Inc."
                                        }), l.jsx("br", {}), "795 Folsom Ave, Suite 600", l.jsx("br", {}), "San Francisco, CA 94107", l.jsx("br", {}), "Phone: (804) 123-5432", l.jsx("br", {}), "Email: info@almasaedstudio.com"]
                                    })]
                                }), l.jsxs("div", {
                                    children: [l.jsx("h3", {
                                        className: "font-semibold mb-2 text-gray-600 dark:text-gray-400",
                                        children: "To"
                                    }), l.jsxs("address", {
                                        className: "not-italic text-gray-800 dark:text-gray-200",
                                        children: [l.jsx("strong", {
                                            children: "John Doe"
                                        }), l.jsx("br", {}), "795 Folsom Ave, Suite 600", l.jsx("br", {}), "San Francisco, CA 94107", l.jsx("br", {}), "Phone: (555) 539-1037", l.jsx("br", {}), "Email: john.doe@example.com"]
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "text-sm text-right",
                                children: [l.jsx("p", {
                                    children: l.jsx("strong", {
                                        className: "text-gray-600 dark:text-gray-400",
                                        children: "Invoice #007612"
                                    })
                                }), l.jsxs("p", {
                                    children: [l.jsx("strong", {
                                        children: "Order ID:"
                                    }), " 4F3S8J"]
                                }), l.jsxs("p", {
                                    children: [l.jsx("strong", {
                                        children: "Payment Due:"
                                    }), " 2/22/2014"]
                                }), l.jsxs("p", {
                                    children: [l.jsx("strong", {
                                        children: "Account:"
                                    }), " 968-34567"]
                                })]
                            })]
                        }), l.jsx("div", {
                            className: "overflow-x-auto mb-8",
                            children: l.jsxs("table", {
                                className: "w-full text-sm text-left",
                                children: [l.jsx("thead", {
                                    className: "bg-gray-50 dark:bg-gray-700/50",
                                    children: l.jsxs("tr", {
                                        children: [l.jsx("th", {
                                            className: "p-3 font-semibold",
                                            children: "Qty"
                                        }), l.jsx("th", {
                                            className: "p-3 font-semibold",
                                            children: "Product"
                                        }), l.jsx("th", {
                                            className: "p-3 font-semibold",
                                            children: "Serial #"
                                        }), l.jsx("th", {
                                            className: "p-3 font-semibold",
                                            children: "Description"
                                        }), l.jsx("th", {
                                            className: "p-3 font-semibold text-right",
                                            children: "Subtotal"
                                        })]
                                    })
                                }), l.jsx("tbody", {
                                    children: d.map((z, D) => l.jsxs("tr", {
                                        className: "border-b dark:border-gray-700",
                                        children: [l.jsx("td", {
                                            className: "p-3",
                                            children: z.qty
                                        }), l.jsx("td", {
                                            className: "p-3 font-medium text-gray-800 dark:text-gray-200",
                                            children: z.product
                                        }), l.jsx("td", {
                                            className: "p-3",
                                            children: z.serial
                                        }), l.jsx("td", {
                                            className: "p-3",
                                            children: z.description
                                        }), l.jsxs("td", {
                                            className: "p-3 text-right",
                                            children: ["$", z.subtotal.toFixed(2)]
                                        })]
                                    }, D))
                                })]
                            })
                        }), l.jsxs("div", {
                            className: "grid md:grid-cols-2 gap-8",
                            children: [l.jsxs("div", {
                                children: [l.jsx("h4", {
                                    className: "font-semibold text-gray-800 dark:text-gray-200 mb-2",
                                    children: "Payment Methods:"
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-2 mb-4",
                                    children: [l.jsx("img", {
                                        src: "https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/visa.svg?sanitize=true",
                                        alt: "Visa",
                                        className: "h-8"
                                    }), l.jsx("img", {
                                        src: "https://raw.githubusercontent.com/datatrans/payment-logos/master/assets/cards/mastercard.svg?sanitize=true",
                                        alt: "Mastercard",
                                        className: "h-8"
                                    }), l.jsx("img", {
                                        src: "https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/logo/amex.svg",
                                        alt: "American Express",
                                        className: "h-8"
                                    }), l.jsx("img", {
                                        src: "https://raw.githubusercontent.com/aaronfagan/svg-credit-card-payment-icons/main/logo/paypal.svg",
                                        alt: "Paypal",
                                        className: "h-8"
                                    })]
                                }), l.jsx("p", {
                                    className: "text-xs p-3 bg-gray-100 dark:bg-gray-900/50 rounded-md text-gray-500 dark:text-gray-400",
                                    children: "Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra."
                                })]
                            }), l.jsxs("div", {
                                className: "text-right",
                                children: [l.jsx("h3", {
                                    className: "font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200",
                                    children: "Amount Due 2/22/2014"
                                }), l.jsxs("div", {
                                    className: "space-y-2",
                                    children: [l.jsxs("div", {
                                        className: "flex justify-between items-center text-gray-600 dark:text-gray-400",
                                        children: [l.jsx("p", {
                                            children: "Subtotal:"
                                        }), " ", l.jsxs("p", {
                                            children: ["$", x.toFixed(2)]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "flex justify-between items-center text-gray-600 dark:text-gray-400",
                                        children: [l.jsx("p", {
                                            children: "Tax (9.3%):"
                                        }), " ", l.jsxs("p", {
                                            children: ["$", v.toFixed(2)]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "flex justify-between items-center text-gray-600 dark:text-gray-400 pb-2 border-b-2 dark:border-gray-700",
                                        children: [l.jsx("p", {
                                            children: "Shipping:"
                                        }), " ", l.jsxs("p", {
                                            children: ["$", u.toFixed(2)]
                                        })]
                                    }), l.jsxs("div", {
                                        className: "flex justify-between items-center text-2xl font-bold text-gray-800 dark:text-gray-100",
                                        children: [l.jsx("p", {
                                            children: "Total:"
                                        }), " ", l.jsxs("p", {
                                            children: ["$", g.toFixed(2)]
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }), l.jsxs("div", {
                        className: "p-4 sm:p-6 border-t dark:border-gray-700 flex flex-wrap justify-between items-center gap-4",
                        children: [l.jsxs("button", {
                            className: "px-4 py-2 text-sm border dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2",
                            children: [l.jsx("i", {
                                className: "bi bi-printer"
                            }), " Print"]
                        }), l.jsxs("div", {
                            className: "flex gap-2",
                            children: [l.jsxs("button", {
                                className: "px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-2",
                                children: [l.jsx("i", {
                                    className: "bi bi-download"
                                }), " Generate PDF"]
                            }), l.jsxs("button", {
                                className: "px-4 py-2 text-sm bg-teal-500 hover:bg-teal-600 text-white rounded-md flex items-center gap-2",
                                children: [l.jsx("i", {
                                    className: "bi bi-envelope"
                                }), " Submit Payment"]
                            })]
                        })]
                    })]
                })]
            })
        })
    }
    , Ix = () => {
        const [d, x] = W.useState(!1)
            , v = [{
                name: "Basic",
                popular: !1,
                price: {
                    monthly: 9,
                    yearly: 7
                },
                description: "Perfect for individuals and small projects",
                features: ["5 projects", "10 GB storage", "Basic support", "1 team member"]
            }, {
                name: "Pro",
                popular: !0,
                price: {
                    monthly: 29,
                    yearly: 23
                },
                description: "Great for growing teams and businesses",
                features: ["Unlimited projects", "100 GB storage", "Priority support", "Up to 10 team members", "Advanced analytics"]
            }, {
                name: "Enterprise",
                popular: !1,
                price: "Custom",
                description: "For large organizations with advanced needs",
                features: ["Everything in Pro", "Unlimited storage", "24/7 dedicated support", "Unlimited team members", "Custom integrations"]
            }]
            , u = [{
                name: "Starter",
                price: {
                    monthly: 0,
                    yearly: 0
                },
                description: "Get started with basic features",
                features: ["3 projects", "5 GB storage", "Community support"]
            }, {
                name: "Professional",
                price: {
                    monthly: 19,
                    yearly: 15
                },
                description: "For professionals and small teams",
                features: ["15 projects", "50 GB storage", "Email support", "5 team members"]
            }, {
                name: "Business",
                price: {
                    monthly: 49,
                    yearly: 39
                },
                description: "For larger teams and businesses",
                features: ["Unlimited projects", "200 GB storage", "Priority support", "Unlimited team members"]
            }]
            , g = [{
                name: "Free",
                price: {
                    monthly: 0,
                    yearly: 0
                },
                description: "For trying out our platform",
                features: ["1 workspace", "5 projects", "Basic features"]
            }, {
                name: "Team",
                price: {
                    monthly: 25,
                    yearly: 20
                },
                description: "For small to medium teams",
                features: ["Unlimited workspaces", "Unlimited projects", "Advanced features", "Priority support"]
            }, {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: ["Everything in Team", "Dedicated support", "SLA guarantee"]
            }]
            , z = {
                headers: ["Free", "Starter", "Professional", "Enterprise"],
                features: [{
                    name: "Projects",
                    values: ["Up to 3", "Up to 10", "Unlimited", "Unlimited"]
                }, {
                    name: "Storage",
                    values: ["1 GB", "10 GB", "100 GB", "Unlimited"]
                }, {
                    name: "Team Members",
                    values: ["1", "Up to 5", "Up to 20", "Unlimited"]
                }, {
                    name: "API Access",
                    values: ["×", "✓", "✓", "✓"]
                }, {
                    name: "Priority Support",
                    values: ["×", "×", "✓", "✓"]
                }, {
                    name: "Advanced Security",
                    values: ["×", "×", "✓", "✓"]
                }, {
                    name: "SSO & Compliance",
                    values: ["×", "×", "×", "✓"]
                }]
            }
            , D = () => l.jsx("svg", {
                className: "w-5 h-5 text-blue-500",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M5 13l4 4L19 7"
                })
            })
            , Y = () => l.jsx("svg", {
                className: "w-5 h-5 text-gray-300 dark:text-gray-600",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: l.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M5 13l4 4L19 7"
                })
            });
        return l.jsxs("main", {
            className: "flex-grow p-3 md:p-4 bg-gray-50 paper-wrap bevel tlbr",
            children: [l.jsx("div", {
                className: "flex flex-col gap-4",
                children: l.jsx(pe, {
                    title: "Pricing table",
                    breadcrumbItems: [{
                        label: "Extra Pages",
                        href: "#!"
                    }],
                    userName: "Shariq",
                    lastSignIn: "Today, 10:16 AM",
                    showSearch: !0
                })
            }), l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-sm border dark:border-gray-700 mt-4",
                children: [l.jsxs("section", {
                    className: "text-center max-w-2xl mx-auto",
                    children: [l.jsx("h1", {
                        className: "text-3xl md:text-4xl font-bold",
                        children: "Choose Your Plan"
                    }), l.jsx("p", {
                        className: "mt-3 text-gray-600 dark:text-gray-400",
                        children: "Select the perfect plan for your needs. All plans include a 14-day free trial."
                    }), l.jsxs("div", {
                        className: "mt-6 flex justify-center items-center space-x-4",
                        children: [l.jsx("span", {
                            className: `font-medium ${d ? "text-gray-500" : "text-blue-600"}`,
                            children: "Monthly"
                        }), l.jsxs("label", {
                            htmlFor: "billing-toggle",
                            className: "relative inline-flex items-center cursor-pointer",
                            children: [l.jsx("input", {
                                type: "checkbox",
                                id: "billing-toggle",
                                className: "sr-only peer",
                                checked: d,
                                onChange: () => x(!d)
                            }), l.jsx("div", {
                                className: "w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                            })]
                        }), l.jsx("span", {
                            className: `font-medium ${d ? "text-blue-600" : "text-gray-500"}`,
                            children: "Yearly (Save 20%)"
                        })]
                    })]
                }), l.jsx("div", {
                    className: "grid lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto",
                    children: v.map(w => l.jsxs("div", {
                        className: `rounded-xl border ${w.popular ? "border-blue-500" : "border-gray-200 dark:border-gray-700"} p-6 relative flex flex-col`,
                        children: [w.popular && l.jsxs("span", {
                            className: "absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full",
                            children: [l.jsx("i", {
                                className: "bi bi-star-fill text-yellow-400 mr-1"
                            }), " Most Popular"]
                        }), l.jsx("h3", {
                            className: "text-xl font-semibold",
                            children: w.name
                        }), l.jsx("p", {
                            className: "text-gray-500 dark:text-gray-400 mt-2",
                            children: w.description
                        }), l.jsx("div", {
                            className: "mt-6",
                            children: typeof w.price == "string" ? l.jsx("span", {
                                className: "text-4xl font-bold",
                                children: w.price
                            }) : l.jsxs(l.Fragment, {
                                children: [l.jsxs("span", {
                                    className: "text-4xl font-bold",
                                    children: ["$", d ? w.price.yearly : w.price.monthly]
                                }), l.jsx("span", {
                                    className: "text-gray-500",
                                    children: " / per month"
                                })]
                            })
                        }), l.jsx("ul", {
                            className: "mt-6 space-y-4 flex-grow",
                            children: w.features.map(N => l.jsxs("li", {
                                className: "flex items-center space-x-3",
                                children: [w.name === "Basic" ? l.jsx(Y, {}) : l.jsx(D, {}), l.jsx("span", {
                                    children: N
                                })]
                            }, N))
                        }), l.jsx("button", {
                            className: `w-full py-2.5 rounded-lg mt-8 font-semibold ${w.name === "Pro" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50"}`,
                            children: w.price === "Custom" ? "Contact Sales" : "Get Started"
                        })]
                    }, w.name))
                }), l.jsx("hr", {
                    className: "my-16 border-gray-200 dark:border-gray-700"
                }), l.jsxs("section", {
                    className: "text-center max-w-2xl mx-auto",
                    children: [l.jsx("h2", {
                        className: "text-3xl font-bold",
                        children: "Alternative Design: Simple Pricing"
                    }), l.jsx("p", {
                        className: "mt-3 text-gray-600 dark:text-gray-400",
                        children: "Clean and straightforward pricing options"
                    })]
                }), l.jsx("div", {
                    className: "grid lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto",
                    children: u.map(w => l.jsxs("div", {
                        className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col",
                        children: [l.jsx("h3", {
                            className: "text-lg font-semibold text-blue-600",
                            children: w.name
                        }), l.jsxs("div", {
                            className: "mt-4",
                            children: [l.jsxs("span", {
                                className: "text-4xl font-bold",
                                children: ["$", d ? w.price.yearly : w.price.monthly]
                            }), l.jsx("span", {
                                className: "text-gray-500",
                                children: " per month"
                            })]
                        }), l.jsx("p", {
                            className: "text-gray-500 dark:text-gray-400 mt-2 h-10",
                            children: w.description
                        }), l.jsx("hr", {
                            className: "my-6 border-gray-200 dark:border-gray-700"
                        }), l.jsx("ul", {
                            className: "space-y-4 flex-grow",
                            children: w.features.map(N => l.jsxs("li", {
                                className: "flex items-center space-x-3",
                                children: [l.jsx(D, {}), l.jsx("span", {
                                    children: N
                                })]
                            }, N))
                        }), l.jsx("button", {
                            className: `w-full py-2.5 rounded-lg mt-8 font-semibold ${w.name !== "Starter" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50"}`,
                            children: w.name === "Starter" ? "Start Free" : "Get Started"
                        })]
                    }, w.name))
                }), l.jsx("hr", {
                    className: "my-16 border-gray-200 dark:border-gray-700"
                }), l.jsxs("section", {
                    className: "text-center max-w-2xl mx-auto",
                    children: [l.jsx("h2", {
                        className: "text-3xl font-bold",
                        children: "Alternative Design: Feature Comparison"
                    }), l.jsx("p", {
                        className: "mt-3 text-gray-600 dark:text-gray-400",
                        children: "Compare features across all plans"
                    })]
                }), l.jsx("div", {
                    className: "grid lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto",
                    children: g.map(w => l.jsxs("div", {
                        className: "rounded-xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col",
                        children: [l.jsx("h3", {
                            className: "text-xl font-semibold",
                            children: w.name
                        }), l.jsx("p", {
                            className: "text-gray-500 dark:text-gray-400 mt-2",
                            children: w.description
                        }), l.jsx("div", {
                            className: "mt-6",
                            children: typeof w.price == "string" ? l.jsx("span", {
                                className: "text-4xl font-bold",
                                children: w.price
                            }) : l.jsxs(l.Fragment, {
                                children: [l.jsxs("span", {
                                    className: "text-4xl font-bold",
                                    children: ["$", d ? w.price.yearly : w.price.monthly]
                                }), l.jsx("span", {
                                    className: "text-gray-500",
                                    children: " / per user"
                                })]
                            })
                        }), l.jsx("hr", {
                            className: "my-6 border-gray-200 dark:border-gray-700"
                        }), l.jsx("p", {
                            className: "font-semibold mb-4",
                            children: "What's included"
                        }), l.jsx("ul", {
                            className: "space-y-4 flex-grow",
                            children: w.features.map(N => l.jsxs("li", {
                                className: "flex items-center space-x-3",
                                children: [l.jsx(D, {}), l.jsx("span", {
                                    children: N
                                })]
                            }, N))
                        }), l.jsx("button", {
                            className: `w-full py-2.5 rounded-lg mt-8 font-semibold ${w.name === "Team" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 dark:bg-blue-900/30 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50"}`,
                            children: w.price === "Custom" ? "Contact Sales" : "Get Started"
                        })]
                    }, w.name))
                }), l.jsxs("div", {
                    className: "mt-16 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg flex items-center gap-3 max-w-6xl mx-auto",
                    children: [l.jsx("i", {
                        className: "bi bi-info-circle-fill text-xl"
                    }), l.jsxs("p", {
                        className: "text-sm",
                        children: [l.jsx("strong", {
                            className: "font-semibold",
                            children: "Special Offer"
                        }), " Get 20% off on annual plans. Limited time offer for new customers."]
                    })]
                }), l.jsxs("div", {
                    className: "mt-20 max-w-6xl mx-auto",
                    children: [l.jsx("h2", {
                        className: "text-3xl font-bold text-center mb-10",
                        children: "Compare Plans"
                    }), l.jsx("div", {
                        className: "overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700",
                        children: l.jsxs("table", {
                            className: "w-full text-sm",
                            children: [l.jsx("thead", {
                                children: l.jsxs("tr", {
                                    className: "bg-gray-50 dark:bg-gray-700/50",
                                    children: [l.jsx("th", {
                                        className: "p-4 text-left font-semibold",
                                        children: "Features"
                                    }), z.headers.map(w => l.jsx("th", {
                                        className: "p-4 text-center font-semibold",
                                        children: w
                                    }, w))]
                                })
                            }), l.jsx("tbody", {
                                className: "divide-y divide-gray-200 dark:divide-gray-700",
                                children: z.features.map(w => l.jsxs("tr", {
                                    children: [l.jsx("td", {
                                        className: "p-4 font-medium",
                                        children: w.name
                                    }), w.values.map((N, _) => l.jsxs("td", {
                                        className: "p-4 text-center text-gray-600 dark:text-gray-400",
                                        children: [N === "✓" && l.jsx("span", {
                                            className: "text-green-500 text-lg font-bold",
                                            children: "✓"
                                        }), N === "×" && l.jsx("span", {
                                            className: "text-gray-400 dark:text-gray-500 font-bold",
                                            children: "×"
                                        }), N !== "✓" && N !== "×" && N]
                                    }, _))]
                                }, w.name))
                            })]
                        })
                    })]
                })]
            })]
        })
    }
    , Sa = ({ title: d, subtitle: x }) => l.jsxs("div", {
        className: "mb-8",
        children: [l.jsx("h2", {
            className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
            children: d
        }), l.jsx("p", {
            className: "text-gray-500 dark:text-gray-400 mt-1",
            children: x
        })]
    })
    , Px = () => {
        const d = [{
            name: "Sarah Johnson",
            action: "completed task",
            title: "Finalized Q4 marketing strategy presentation",
            status: "Completed",
            time: "2 min ago",
            color: "green",
            avatar: "1"
        }, {
            name: "Michael Chen",
            action: "created new project",
            title: "Mobile App Redesign Initiative",
            status: "New",
            time: "15 min ago",
            color: "blue",
            avatar: "2"
        }, {
            name: "Emily Rodriguez",
            action: "commented on",
            title: "Product roadmap needs review before next sprint",
            status: "Comment",
            time: "1 hour ago",
            color: "gray",
            avatar: "3"
        }, {
            name: "David Kim",
            action: "uploaded files",
            title: "Design mockups v3.0 - 12 files",
            status: "Upload",
            time: "2 hours ago",
            color: "yellow",
            avatar: "4"
        }]
            , x = {
                green: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
                blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
                gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
                yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
            };
        return l.jsxs("div", {
            className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
            children: [l.jsxs("div", {
                className: "flex justify-between items-center mb-4",
                children: [l.jsxs("div", {
                    className: "relative w-full max-w-xs",
                    children: [l.jsx("input", {
                        type: "text",
                        placeholder: "Search activities",
                        className: "w-full text-sm rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 pl-10"
                    }), l.jsx("i", {
                        className: "bi bi-search absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                    })]
                }), l.jsxs("button", {
                    className: "text-sm px-3 py-1.5 border dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2",
                    children: [l.jsx("i", {
                        className: "bi bi-filter"
                    }), " Filter"]
                })]
            }), l.jsx("ul", {
                className: "space-y-3",
                children: d.map((v, u) => l.jsxs("li", {
                    className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-md",
                    children: [l.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [l.jsx("img", {
                            src: `https://picsum.photos/seed/${v.avatar}/40/40`,
                            alt: v.name,
                            className: "w-10 h-10 rounded-full"
                        }), l.jsxs("div", {
                            children: [l.jsxs("p", {
                                className: "text-sm text-gray-500 dark:text-gray-400",
                                children: [l.jsx("span", {
                                    className: "font-semibold text-gray-800 dark:text-gray-200",
                                    children: v.name
                                }), " ", v.action]
                            }), l.jsx("h4", {
                                className: "font-semibold",
                                children: v.title
                            })]
                        })]
                    }), l.jsxs("div", {
                        className: "text-right",
                        children: [l.jsx("span", {
                            className: `px-2 py-1 text-xs font-medium rounded-full ${x[v.color]}`,
                            children: v.status
                        }), l.jsx("p", {
                            className: "text-xs text-gray-400 mt-1",
                            children: v.time
                        })]
                    })]
                }, u))
            })]
        })
    }
    , eh = () => {
        const d = [{
            name: "Alex Thompson",
            time: "5 minutes ago",
            text: "Deployed new version to production environment",
            tags: [{
                label: "Deployed",
                color: "green"
            }],
            color: "blue",
            avatar: "5"
        }, {
            name: "Laura Martinez",
            time: "30 minutes ago",
            text: "Updated API documentation for authentication endpoints",
            tags: [{
                label: "Updated",
                color: "yellow"
            }],
            color: "yellow",
            avatar: "6"
        }, {
            name: "James Wilson",
            time: "2 hours ago",
            text: "Merged pull request for homepage redesign",
            tags: [{
                label: "Merged",
                color: "purple"
            }],
            color: "purple",
            avatar: "7"
        }, {
            name: "Rachel Green",
            time: "5 hours ago",
            text: "Created new sprint and assigned tasks to team members",
            tags: [{
                label: "Created",
                color: "blue"
            }],
            color: "gray",
            avatar: "8"
        }]
            , x = {
                green: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
                yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
                purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300",
                blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
            };
        return l.jsxs("div", {
            className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
            children: [l.jsxs("div", {
                className: "relative pl-8",
                children: [l.jsx("div", {
                    className: "absolute left-3 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"
                }), d.map((v, u) => l.jsxs("div", {
                    className: "relative mb-8",
                    children: [l.jsx("div", {
                        className: `absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-${v.color}-500`
                    }), l.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [l.jsx("img", {
                            src: `https://picsum.photos/seed/${v.avatar}/32/32`,
                            alt: v.name,
                            className: "w-8 h-8 rounded-full mt-1"
                        }), l.jsxs("div", {
                            children: [l.jsxs("p", {
                                className: "text-sm",
                                children: [l.jsx("span", {
                                    className: "font-semibold text-gray-800 dark:text-gray-200",
                                    children: v.name
                                }), l.jsx("span", {
                                    className: "text-gray-500 dark:text-gray-400 ml-2",
                                    children: v.time
                                })]
                            }), l.jsx("p", {
                                className: "mt-1",
                                children: v.text
                            }), l.jsx("div", {
                                className: "mt-2 flex gap-2",
                                children: v.tags.map(g => l.jsxs("span", {
                                    className: `text-xs font-medium px-2 py-0.5 rounded-full ${x[g.color]}`,
                                    children: [g.color === "green" && l.jsx("i", {
                                        className: "bi bi-check-circle mr-1"
                                    }), g.color === "yellow" && l.jsx("i", {
                                        className: "bi bi-pencil mr-1"
                                    }), g.color === "purple" && l.jsx("i", {
                                        className: "bi bi-git mr-1"
                                    }), g.color === "blue" && l.jsx("i", {
                                        className: "bi bi-plus-circle mr-1"
                                    }), g.label]
                                }, g.label))
                            })]
                        })]
                    })]
                }, u))]
            }), l.jsx("div", {
                className: "text-center mt-4",
                children: l.jsxs("a", {
                    href: "#!",
                    className: "text-sm font-semibold text-blue-600 hover:underline",
                    children: ["View all ", l.jsx("i", {
                        className: "bi bi-arrow-right"
                    })]
                })
            })]
        })
    }
    , th = () => {
        const d = [{
            name: "Tom Anderson",
            role: "Senior Developer",
            title: "Released version 2.0 of the mobile application",
            description: "Successfully deployed the latest release with new features including dark mode, push notifications, and performance improvements.",
            tags: ["Release", "Mobile", "v2.0"],
            time: "Just now",
            avatar: "9"
        }, {
            name: "Nina Patel",
            role: "Product Manager",
            title: "Conducted user research session with 15 participants",
            description: "Gathered valuable insights on user preferences for the new dashboard redesign. Key findings documented and ready for team review.",
            tags: ["Research", "UX"],
            time: "1 hour ago",
            avatar: "10"
        }, {
            name: "Brian Foster",
            role: "DevOps Engineer",
            title: "Optimized database queries reducing load time by 40%",
            description: "Implemented indexing and query optimization strategies that significantly improved application performance across all services.",
            tags: ["Performance", "Database"],
            time: "3 hours ago",
            avatar: "11"
        }];
        return l.jsx("div", {
            className: "space-y-4",
            children: d.map((x, v) => l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
                children: [l.jsxs("div", {
                    className: "flex justify-between items-start",
                    children: [l.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [l.jsx("img", {
                            src: `https://picsum.photos/seed/${x.avatar}/48/48`,
                            alt: x.name,
                            className: "w-12 h-12 rounded-full"
                        }), l.jsxs("div", {
                            children: [l.jsx("h4", {
                                className: "font-semibold",
                                children: x.name
                            }), l.jsx("p", {
                                className: "text-sm text-gray-500 dark:text-gray-400",
                                children: x.role
                            })]
                        })]
                    }), l.jsxs("p", {
                        className: "text-xs text-gray-400",
                        children: [l.jsx("i", {
                            className: "bi bi-clock mr-1"
                        }), " ", x.time]
                    })]
                }), l.jsxs("div", {
                    className: "mt-4",
                    children: [l.jsx("h3", {
                        className: "font-semibold text-lg",
                        children: x.title
                    }), l.jsx("p", {
                        className: "mt-1 text-gray-600 dark:text-gray-400",
                        children: x.description
                    }), l.jsx("div", {
                        className: "mt-3 flex gap-2",
                        children: x.tags.map(u => l.jsx("span", {
                            className: "text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300",
                            children: u
                        }, u))
                    })]
                })]
            }, v))
        })
    }
    , ah = () => {
        const x = [{
            group: "Today",
            icon: "bi-git",
            color: "text-purple-500",
            title: "Pull request merged",
            text: "Feature/new-authentication merged into main branch",
            time: "10:45 AM"
        }, {
            group: "Today",
            icon: "bi-check-circle-fill",
            color: "text-green-500",
            title: "All tests passed",
            text: "CI/CD pipeline completed successfully",
            time: "9:30 AM"
        }, {
            group: "Yesterday",
            icon: "bi-exclamation-triangle-fill",
            color: "text-yellow-500",
            title: "Security alert resolved",
            text: "Dependency vulnerability patched and deployed",
            time: "4:20 PM"
        }, {
            group: "Yesterday",
            icon: "bi-file-earmark-text-fill",
            color: "text-blue-500",
            title: "Documentation updated",
            text: "API reference guide now includes new endpoints",
            time: "2:15 PM"
        }, {
            group: "Yesterday",
            icon: "bi-chat-dots-fill",
            color: "text-gray-500",
            title: "Team meeting scheduled",
            text: "Sprint planning session for next week",
            time: "11:00 AM"
        }, {
            group: "Dec 10, 2023",
            icon: "bi-graph-up-arrow",
            color: "text-teal-500",
            title: "Performance milestone reached",
            text: "Application response time improved by 50%",
            time: "3:45 PM"
        }].reduce((v, u) => ((v[u.group] = v[u.group] || []).push(u),
            v), {});
        return l.jsxs("div", {
            className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
            children: [Object.entries(x).map(([v, u]) => l.jsxs("div", {
                className: "relative pb-4",
                children: [l.jsx("div", {
                    className: "flex justify-center -mb-4",
                    children: l.jsx("span", {
                        className: "text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full z-10",
                        children: v
                    })
                }), l.jsx("div", {
                    className: "absolute left-1/2 top-3 bottom-0 w-px bg-gray-200 dark:bg-gray-700"
                }), l.jsx("ul", {
                    className: "mt-8 space-y-4",
                    children: u.map((g, z) => l.jsxs("li", {
                        className: "p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border dark:border-gray-200 dark:border-gray-700 flex justify-between items-center",
                        children: [l.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [l.jsx("div", {
                                className: "p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm border dark:border-gray-600",
                                children: l.jsx("i", {
                                    className: `bi ${g.icon} ${g.color}`
                                })
                            }), l.jsxs("div", {
                                children: [l.jsx("h4", {
                                    className: "font-semibold",
                                    children: g.title
                                }), l.jsx("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: g.text
                                })]
                            })]
                        }), l.jsx("p", {
                            className: "text-xs text-gray-400",
                            children: g.time
                        })]
                    }, z))
                })]
            }, v)), l.jsx("div", {
                className: "text-center mt-4",
                children: l.jsxs("button", {
                    className: "text-sm font-semibold text-blue-600 hover:underline",
                    children: [l.jsx("i", {
                        className: "bi bi-arrow-down-circle mr-1"
                    }), " Load more activity"]
                })
            })]
        })
    }
    , lh = () => l.jsxs("div", {
        className: "relative",
        children: [l.jsx("div", {
            className: "absolute left-16 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700"
        }), l.jsxs("div", {
            className: "space-y-8",
            children: [l.jsxs("div", {
                className: "flex gap-4 items-start",
                children: [l.jsxs("div", {
                    className: "text-right w-24 flex-shrink-0 relative",
                    children: [l.jsx("p", {
                        className: "font-semibold text-sm",
                        children: "Today"
                    }), l.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: "2:45 PM"
                    })]
                }), l.jsxs("div", {
                    className: "relative w-full",
                    children: [l.jsx("div", {
                        className: "absolute -left-11 top-1 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600"
                    }), l.jsx("div", {
                        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
                        children: l.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [l.jsx("div", {
                                className: "p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full",
                                children: l.jsx("i", {
                                    className: "bi bi-rocket-takeoff-fill text-blue-500"
                                })
                            }), l.jsxs("div", {
                                children: [l.jsx("h4", {
                                    className: "font-semibold",
                                    children: "Product Launch"
                                }), l.jsx("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: "Major milestone achieved"
                                }), l.jsx("p", {
                                    className: "text-sm mt-2",
                                    children: "Successfully launched our flagship product to the market. Initial feedback has been overwhelmingly positive with over 1,000 sign-ups in the first hour."
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-2 mt-3",
                                    children: [l.jsx("img", {
                                        src: "https://picsum.photos/seed/12/24/24",
                                        className: "w-6 h-6 rounded-full"
                                    }), l.jsx("span", {
                                        className: "text-xs font-medium",
                                        children: "John Doe"
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            }), l.jsxs("div", {
                className: "flex gap-4 items-start",
                children: [l.jsxs("div", {
                    className: "text-right w-24 flex-shrink-0 relative",
                    children: [l.jsx("p", {
                        className: "font-semibold text-sm",
                        children: "Today"
                    }), l.jsx("p", {
                        className: "text-xs text-gray-500",
                        children: "11:30 AM"
                    })]
                }), l.jsxs("div", {
                    className: "relative w-full",
                    children: [l.jsx("div", {
                        className: "absolute -left-11 top-1 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600"
                    }), l.jsx("div", {
                        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
                        children: l.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [l.jsx("div", {
                                className: "p-2 bg-green-100 dark:bg-green-900/50 rounded-full",
                                children: l.jsx("i", {
                                    className: "bi bi-check-circle-fill text-green-500"
                                })
                            }), l.jsxs("div", {
                                children: [l.jsx("h4", {
                                    className: "font-semibold",
                                    children: "Design Review Completed"
                                }), l.jsx("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: "All approvals received"
                                }), l.jsx("p", {
                                    className: "text-sm mt-2",
                                    children: "Final design review meeting concluded with stakeholder approval. Ready to proceed to development phase."
                                }), l.jsxs("div", {
                                    className: "flex items-center gap-2 mt-3",
                                    children: [l.jsx("img", {
                                        src: "https://picsum.photos/seed/3/24/24",
                                        className: "w-6 h-6 rounded-full"
                                    }), l.jsx("span", {
                                        className: "text-xs font-medium",
                                        children: "Sarah Miller"
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })]
        })]
    })
    , sh = () => {
        const d = [{
            icon: "bi-check-circle-fill",
            title: "Project Setup",
            description: "Initialize repository and configure basic settings",
            time: "Completed 5 days ago",
            status: "Completed",
            progress: 100,
            color: "green"
        }, {
            icon: "bi-check-circle-fill",
            title: "Design Phase",
            description: "Create mockups and design system components",
            time: "Completed 3 days ago",
            status: "Completed",
            progress: 100,
            color: "green"
        }, {
            icon: "bi-lightning-charge-fill",
            title: "Development",
            description: "Build frontend and backend functionality",
            time: "Progress 65%",
            status: "In Progress",
            progress: 65,
            color: "blue"
        }, {
            icon: "bi-clock-history",
            title: "Testing",
            description: "Quality assurance and bug fixes",
            time: "Starts in 7 days",
            status: "Upcoming",
            progress: 0,
            color: "gray"
        }, {
            icon: "bi-circle",
            title: "Deployment",
            description: "Launch to production environment",
            time: "Starts in 14 days",
            status: "Upcoming",
            progress: 0,
            color: "gray"
        }]
            , x = {
                green: {
                    text: "text-green-600 dark:text-green-400",
                    bg: "bg-green-100 dark:bg-green-900/30",
                    border: "border-green-500",
                    icon: "text-green-500"
                },
                blue: {
                    text: "text-blue-600 dark:text-blue-400",
                    bg: "bg-blue-100 dark:bg-blue-900/30",
                    border: "border-blue-500",
                    icon: "text-blue-500"
                },
                gray: {
                    text: "text-gray-600 dark:text-gray-400",
                    bg: "bg-gray-100 dark:bg-gray-800",
                    border: "border-gray-200 dark:border-gray-700",
                    icon: "text-gray-400"
                }
            };
        return l.jsx("div", {
            className: "overflow-x-auto pb-4",
            children: l.jsx("div", {
                className: "flex space-x-4",
                children: d.map((v, u) => l.jsxs("div", {
                    className: `w-64 flex-shrink-0 rounded-lg p-4 flex flex-col ${x[v.color].bg} ${v.status === "In Progress" ? "border-2 " + x[v.color].border : "border dark:border-gray-700"}`,
                    children: [l.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [l.jsx("div", {
                            className: "p-2 rounded-full bg-white dark:bg-gray-700",
                            children: l.jsx("i", {
                                className: `bi ${v.icon} ${x[v.color].icon}`
                            })
                        }), l.jsx("span", {
                            className: `px-2 py-0.5 text-xs font-semibold rounded-full ${x[v.color].bg} ${x[v.color].text}`,
                            children: v.status
                        })]
                    }), l.jsxs("div", {
                        className: "mt-4 flex-grow",
                        children: [l.jsx("h4", {
                            className: "font-semibold",
                            children: v.title
                        }), l.jsx("p", {
                            className: "text-xs mt-1 text-gray-500 dark:text-gray-400",
                            children: v.description
                        })]
                    }), l.jsxs("div", {
                        className: "mt-4",
                        children: [l.jsx("p", {
                            className: "text-xs text-gray-500 dark:text-gray-400 mb-1",
                            children: v.time
                        }), v.progress > 0 && l.jsx("div", {
                            className: "w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5",
                            children: l.jsx("div", {
                                className: `h-1.5 rounded-full ${v.color === "green" ? "bg-green-500" : "bg-blue-500"}`,
                                style: {
                                    width: `${v.progress}%`
                                }
                            })
                        })]
                    })]
                }, u))
            })
        })
    }
    , rh = () => l.jsxs("main", {
        className: "flex-grow p-3 md:p-4 bg-gray-50 paper-wrap bevel tlbr",
        children: [l.jsx("div", {
            className: "flex flex-col gap-4",
            children: l.jsx(pe, {
                title: "Time Line",
                breadcrumbItems: [{
                    label: "Extra Pages",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:16 AM",
                showSearch: !0
            })
        }), l.jsx("div", {
            className: "flex flex-col gap-8 mt-12",
            children: l.jsxs("div", {
                className: "space-y-12",
                children: [l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Style 1: Compact Activity Feed",
                        subtitle: ""
                    }), l.jsx(Px, {})]
                }), l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Style 2: Visual Timeline with Connectors",
                        subtitle: ""
                    }), l.jsx(eh, {})]
                }), l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Style 3: Card-Based Timeline",
                        subtitle: ""
                    }), l.jsx(th, {})]
                }), l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Style 4: Timeline with Date Separators",
                        subtitle: ""
                    }), l.jsx(ah, {})]
                }), l.jsx("hr", {
                    className: "border-gray-200 dark:border-gray-700"
                }), l.jsxs("div", {
                    className: "text-center",
                    children: [l.jsx("h1", {
                        className: "text-3xl font-bold",
                        children: "Timeline Styles"
                    }), l.jsx("p", {
                        className: "mt-1 text-gray-500 dark:text-gray-400",
                        children: "Multiple timeline layout variations for different use cases"
                    }), "jg"]
                }), l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Style 1: Left Date Column Timeline",
                        subtitle: ""
                    }), l.jsx(lh, {})]
                }), l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Style 2: Center Line Timeline",
                        subtitle: "Strategic planning for next quarter finalized. Key objectives and KPIs defined."
                    }), l.jsx("div", {
                        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4 text-center text-gray-400",
                        children: "Center Line Timeline - UI Placeholder"
                    })]
                }), l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Style 3: Compact Inline Timeline",
                        subtitle: "Customer Milestone: 10,000 Users"
                    }), l.jsx("div", {
                        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4 text-center text-gray-400",
                        children: "Compact Inline Timeline - UI Placeholder"
                    })]
                }), l.jsxs("section", {
                    children: [l.jsx(Sa, {
                        title: "Alternative 1: Card Timeline with Progress",
                        subtitle: "Horizontal cards with progress indicators and status badges"
                    }), l.jsx(sh, {})]
                })]
            })
        })]
    })
    , As = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsxs("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: [l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            }), l.jsxs("div", {
                className: "text-xs text-gray-400 flex items-center gap-1",
                children: [l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-chevron-up"
                    })
                }), l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-x"
                    })
                })]
            })]
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , Jr = ({ color: d, icon: x, title: v, children: u }) => {
        const g = {
            yellow: "bg-yellow-100/50 text-yellow-900 dark:bg-yellow-900/20 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800/50",
            red: "bg-red-100/50 text-red-900 dark:bg-red-900/20 dark:text-red-200 border border-red-200 dark:border-red-800/50",
            green: "bg-green-100/50 text-green-900 dark:bg-green-900/20 dark:text-green-200 border border-green-200 dark:border-green-800/50",
            blue: "bg-sky-100/50 text-sky-900 dark:bg-sky-900/20 dark:text-sky-200 border border-sky-200 dark:border-sky-800/50"
        }
            , z = {
                yellow: "hover:bg-yellow-200/50 dark:hover:bg-yellow-900/40",
                red: "hover:bg-red-200/50 dark:hover:bg-red-900/40",
                green: "hover:bg-green-200/50 dark:hover:bg-green-900/40",
                blue: "hover:bg-sky-200/50 dark:hover:bg-sky-900/40"
            };
        return l.jsxs("div", {
            className: `p-3.5 mb-4 text-sm rounded-lg flex items-start ${g[d]}`,
            role: "alert",
            children: [l.jsx("i", {
                className: `bi ${x} text-lg mr-3 mt-0.5`
            }), l.jsxs("div", {
                className: "flex-grow",
                children: [l.jsx("span", {
                    className: "font-bold",
                    children: v
                }), " ", u]
            }), l.jsxs("button", {
                type: "button",
                className: `ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg inline-flex h-8 w-8 ${z[d]}`,
                "aria-label": "Close",
                children: [l.jsx("span", {
                    className: "sr-only",
                    children: "Close"
                }), l.jsx("i", {
                    className: "bi bi-x text-xl"
                })]
            })]
        })
    }
    , Fr = ({ color: d, percentage: x }) => l.jsx("div", {
        className: "bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden",
        children: l.jsx("div", {
            className: `${d} h-4 rounded-full`,
            style: {
                width: `${x}%`
            }
        })
    })
    , ih = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Elements",
                breadcrumbItems: [{
                    label: "UI Elements",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:16 AM",
                showSearch: !0
            }), l.jsxs(As, {
                title: "ALERT",
                children: [l.jsxs("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: ["For longer messages, increase the padding on the top and bottom of the alert wrapper by adding ", l.jsx("code", {
                        className: "text-red-500 bg-red-100 dark:bg-red-900/30 text-xs px-1 py-0.5 rounded",
                        children: ".alert-block"
                    }), "."]
                }), l.jsx(Jr, {
                    color: "yellow",
                    icon: "bi-exclamation-triangle-fill",
                    title: "Warning!",
                    children: "Best check yo self, you're not looking too good."
                }), l.jsx(Jr, {
                    color: "red",
                    icon: "bi-exclamation-octagon-fill",
                    title: "Oh snap!",
                    children: "Change a few things up and try submitting again."
                }), l.jsx(Jr, {
                    color: "green",
                    icon: "bi-check-circle-fill",
                    title: "Well done!",
                    children: "You successfully read this important alert message."
                }), l.jsx(Jr, {
                    color: "blue",
                    icon: "bi-info-circle-fill",
                    title: "Heads up!",
                    children: "This alert needs your attention, but it's not super important."
                })]
            }), l.jsx(As, {
                title: "NOTIFY",
                children: l.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Info Notice"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Success Notice"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Important Notice"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Info Notice"
                    })]
                })
            }), l.jsx(As, {
                title: "TOOLTIP",
                children: l.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Tooltip on left"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Tooltip on top"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Tooltip on bottom"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm border rounded-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                        children: "Tooltip on right"
                    })]
                })
            }), l.jsx(As, {
                title: "PROGRESS BAR",
                children: l.jsxs("div", {
                    className: "space-y-4",
                    children: [l.jsx(Fr, {
                        color: "bg-teal-400",
                        percentage: 80
                    }), l.jsx(Fr, {
                        color: "bg-cyan-400",
                        percentage: 60
                    }), l.jsx(Fr, {
                        color: "bg-yellow-400",
                        percentage: 90
                    }), l.jsx(Fr, {
                        color: "bg-red-400",
                        percentage: 100
                    })]
                })
            }), l.jsxs(As, {
                title: "LABELS AND BADGES",
                children: [l.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [l.jsx("span", {
                        className: "px-2.5 py-1 text-xs font-semibold rounded-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                        children: "Default"
                    }), l.jsx("span", {
                        className: "px-2.5 py-1 text-xs font-semibold rounded-sm bg-green-500 text-white",
                        children: "Success"
                    }), l.jsx("span", {
                        className: "px-2.5 py-1 text-xs font-semibold rounded-sm bg-yellow-500 text-white",
                        children: "Warning"
                    }), l.jsx("span", {
                        className: "px-2.5 py-1 text-xs font-semibold rounded-sm bg-red-500 text-white",
                        children: "Important"
                    }), l.jsx("span", {
                        className: "px-2.5 py-1 text-xs font-semibold rounded-sm bg-cyan-500 text-white",
                        children: "Info"
                    }), l.jsx("span", {
                        className: "px-2.5 py-1 text-xs font-semibold rounded-sm bg-gray-700 text-white",
                        children: "Inverse"
                    })]
                }), l.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2 mt-4",
                    children: [l.jsx("span", {
                        className: "w-6 h-6 inline-flex items-center justify-center text-xs font-bold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                        children: "1"
                    }), l.jsx("span", {
                        className: "w-6 h-6 inline-flex items-center justify-center text-xs font-bold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                        children: "2"
                    }), l.jsx("span", {
                        className: "w-6 h-6 inline-flex items-center justify-center text-xs font-bold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                        children: "4"
                    }), l.jsx("span", {
                        className: "w-6 h-6 inline-flex items-center justify-center text-xs font-bold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                        children: "6"
                    }), l.jsx("span", {
                        className: "w-6 h-6 inline-flex items-center justify-center text-xs font-bold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                        children: "8"
                    }), l.jsx("span", {
                        className: "w-6 h-6 inline-flex items-center justify-center text-xs font-bold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                        children: "10"
                    })]
                })]
            })]
        })
    })
    , Za = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsxs("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: [l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            }), l.jsxs("div", {
                className: "text-xs text-gray-400 flex items-center gap-1",
                children: [l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-chevron-up"
                    })
                }), l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-x"
                    })
                })]
            })]
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , nh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Button",
                breadcrumbItems: [{
                    label: "UI Elements",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM"
            }), l.jsxs("div", {
                className: "p-3 text-sm text-blue-800 rounded-lg bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300 flex justify-between items-center",
                role: "alert",
                children: [l.jsxs("span", {
                    children: [l.jsx("i", {
                        className: "bi bi-info-circle mr-2"
                    }), "Welcome back, ", l.jsx("b", {
                        children: "Dave matthew!"
                    }), " Your last sign in at Yesterday, 16:54 PM"]
                }), l.jsx("button", {
                    type: "button",
                    className: "text-blue-800 dark:text-blue-300 opacity-75 hover:opacity-100",
                    children: l.jsx("i", {
                        className: "bi bi-x"
                    })
                })]
            }), l.jsxs(Za, {
                title: "Default Buttons",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Use any of the available button classes to quickly create a styled button."
                }), l.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                        children: "Primary"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                        children: "Secondary"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                        children: "Success"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",
                        children: "Danger"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400",
                        children: "Warning"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400",
                        children: "Info"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400",
                        children: "Light"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700",
                        children: "Dark"
                    })]
                })]
            }), l.jsxs(Za, {
                title: "Button Sizes",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Fancy larger or smaller buttons? Add classes for additional sizes."
                }), l.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [l.jsx("button", {
                        className: "px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                        children: "Small button"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                        children: "Default button"
                    }), l.jsx("button", {
                        className: "px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                        children: "Large button"
                    })]
                })]
            }), l.jsxs(Za, {
                title: "Rounded  buttons",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Fancy larger or smaller buttons? Add classes for additional sizes."
                }), l.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [l.jsx("button", {
                        className: "px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700",
                        children: "Small button"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700",
                        children: "Default button"
                    }), l.jsx("button", {
                        className: "px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                        children: "Large button"
                    })]
                })]
            }), l.jsxs(Za, {
                title: "Buttons with Icon",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "You can add an icon to your button."
                }), l.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [l.jsxs("button", {
                        className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700",
                        children: [l.jsx("i", {
                            className: "bi bi-check-circle"
                        }), " Success"]
                    }), l.jsxs("button", {
                        className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600",
                        children: [l.jsx("i", {
                            className: "bi bi-exclamation-triangle"
                        }), " Warning"]
                    }), l.jsxs("button", {
                        className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700",
                        children: [l.jsx("i", {
                            className: "bi bi-trash"
                        }), " Delete"]
                    }), l.jsxs("button", {
                        className: "flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded-md hover:bg-sky-600",
                        children: ["Info ", l.jsx("i", {
                            className: "bi bi-info-circle"
                        })]
                    })]
                })]
            }), l.jsxs(Za, {
                title: "Button Groups",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Group a series of buttons together on a single line with the button group."
                }), l.jsxs("div", {
                    className: "inline-flex rounded-md shadow-sm",
                    role: "group",
                    children: [l.jsx("button", {
                        type: "button",
                        className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 focus:z-10 focus:ring-2 focus:ring-blue-700",
                        children: "Left"
                    }), l.jsx("button", {
                        type: "button",
                        className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 focus:z-10 focus:ring-2 focus:ring-blue-700",
                        children: "Middle"
                    }), l.jsx("button", {
                        type: "button",
                        className: "px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 focus:z-10 focus:ring-2 focus:ring-blue-700",
                        children: "Right"
                    })]
                })]
            }), l.jsxs(Za, {
                title: "Block Level Buttons",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Create block level buttons—those that span the full width of a parent—by adding a full-width utility class."
                }), l.jsxs("div", {
                    className: "space-y-2",
                    children: [l.jsx("button", {
                        className: "w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                        children: "Block level button"
                    }), l.jsx("button", {
                        className: "w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
                        children: "Block level button"
                    })]
                })]
            }), l.jsxs(Za, {
                title: "Disabled State",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Make buttons look inactive by adding the disabled boolean attribute to any button element."
                }), l.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [l.jsx("button", {
                        disabled: !0,
                        className: "px-4 py-2 text-sm font-medium text-white bg-blue-400 dark:bg-blue-800/50 rounded-md cursor-not-allowed",
                        children: "Primary button"
                    }), l.jsx("button", {
                        disabled: !0,
                        className: "px-4 py-2 text-sm font-medium text-gray-500 bg-gray-200 dark:bg-gray-700/50 dark:text-gray-400 rounded-md cursor-not-allowed",
                        children: "Button"
                    })]
                })]
            })]
        })
    })
    , Q0 = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsxs("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: [l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            }), l.jsxs("div", {
                className: "text-xs text-gray-400 flex items-center gap-1",
                children: [l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-chevron-up"
                    })
                }), l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-x"
                    })
                })]
            })]
        }), l.jsx("div", {
            className: "p-8",
            children: x
        })]
    })
    , ch = () => {
        const [d, x] = W.useState(1)
            , v = ["Create Account", "User Profile", "Confirmation"]
            , u = v.length
            , g = () => x(D => D < u ? D + 1 : D)
            , z = () => x(D => D > 1 ? D - 1 : D);
        return l.jsxs("div", {
            children: [l.jsx("div", {
                className: "flex items-center justify-between mb-8",
                children: v.map((D, Y) => {
                    const w = Y + 1
                        , N = d > w
                        , _ = d === w;
                    return l.jsxs(zs.Fragment, {
                        children: [l.jsxs("div", {
                            className: "flex items-center flex-col text-center",
                            children: [l.jsx("div", {
                                className: `w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${N ? "bg-blue-600 text-white" : _ ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 border-2 border-blue-500" : "bg-gray-200 dark:bg-gray-700 text-gray-500"}`,
                                children: N ? l.jsx("i", {
                                    className: "bi bi-check-lg"
                                }) : w
                            }), l.jsx("p", {
                                className: `mt-2 text-sm font-medium ${_ ? "text-blue-600 dark:text-blue-400" : "text-gray-500"}`,
                                children: D
                            })]
                        }), w < u && l.jsx("div", {
                            className: `flex-1 h-1 mx-4 rounded ${d > w ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`
                        })]
                    }, D)
                }
                )
            }), l.jsx("div", {
                className: "p-6 border dark:border-gray-700 rounded-lg min-h-[150px] flex items-center justify-center",
                children: l.jsxs("p", {
                    className: "text-gray-600 dark:text-gray-400",
                    children: ["Content for: ", l.jsx("span", {
                        className: "font-bold",
                        children: v[d - 1]
                    })]
                })
            }), l.jsxs("div", {
                className: "flex justify-between mt-6",
                children: [l.jsx("button", {
                    onClick: z,
                    disabled: d === 1,
                    className: "px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
                    children: "Previous"
                }), l.jsx("button", {
                    onClick: g,
                    className: "px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50",
                    children: d === u ? "Finish" : "Next"
                })]
            })]
        })
    }
    , dh = () => {
        const [d, x] = W.useState(1)
            , v = [{
                name: "Step 1",
                description: "Your Information",
                icon: "bi-person"
            }, {
                name: "Step 2",
                description: "Billing Address",
                icon: "bi-credit-card"
            }, {
                name: "Step 3",
                description: "Payment Details",
                icon: "bi-cash-coin"
            }, {
                name: "Step 4",
                description: "Finalize Order",
                icon: "bi-check2-circle"
            }];
        return l.jsxs("div", {
            className: "flex flex-col md:flex-row gap-8",
            children: [l.jsx("div", {
                className: "md:w-1/4",
                children: l.jsx("ol", {
                    className: "relative text-gray-500 border-l border-gray-200 dark:border-gray-700",
                    children: v.map((u, g) => {
                        const z = g + 1
                            , D = d >= z;
                        return l.jsxs("li", {
                            className: "mb-10 ml-6",
                            children: [l.jsx("span", {
                                className: `absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white dark:ring-gray-800 ${D ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-700"}`,
                                children: l.jsx("i", {
                                    className: `bi ${u.icon}`
                                })
                            }), l.jsx("h3", {
                                className: `font-medium leading-tight ${D ? "text-gray-900 dark:text-white" : ""}`,
                                children: u.name
                            }), l.jsx("p", {
                                className: "text-sm",
                                children: u.description
                            })]
                        }, u.name)
                    }
                    )
                })
            }), l.jsxs("div", {
                className: "flex-1",
                children: [l.jsx("div", {
                    className: "p-6 border dark:border-gray-700 rounded-lg min-h-[150px] flex items-center justify-center",
                    children: l.jsxs("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: ["Content for: ", l.jsx("span", {
                            className: "font-bold",
                            children: v[d - 1].description
                        })]
                    })
                }), l.jsxs("div", {
                    className: "flex justify-between mt-6",
                    children: [l.jsx("button", {
                        onClick: () => x(u => u > 1 ? u - 1 : u),
                        disabled: d === 1,
                        className: "px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600",
                        children: "Previous"
                    }), l.jsx("button", {
                        onClick: () => x(u => u < v.length ? u + 1 : u),
                        className: "px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50",
                        children: d === v.length ? "Finish" : "Next"
                    })]
                })]
            })]
        })
    }
    , uh = () => l.jsx("main", {
        className: "flex-grow p-6 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Wizards",
                breadcrumbItems: [{
                    label: "UI Elements",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:16 AM",
                showSearch: !0
            }), l.jsxs(Q0, {
                title: "Simple Wizard",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
                    children: "A basic wizard component with step progression indicators."
                }), l.jsx(ch, {})]
            }), l.jsxs(Q0, {
                title: "Vertical Wizard with Icons",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
                    children: "A vertically oriented wizard, perfect for sidebars or forms with more descriptive steps."
                }), l.jsx(dh, {})]
            })]
        })
    })
    , oh = () => {
        const [d, x] = W.useState(new Date)
            , v = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            , u = z => {
                x(D => {
                    const Y = new Date(D);
                    return Y.setMonth(Y.getMonth() + z),
                        Y
                }
                )
            }
            , g = () => {
                const z = d.getFullYear()
                    , D = d.getMonth()
                    , Y = new Date(z, D, 1).getDay()
                    , w = new Date(z, D + 1, 0).getDate()
                    , N = new Date(z, D, 0).getDate()
                    , _ = [];
                for (let X = Y; X > 0; X--) {
                    const be = N - X + 1;
                    _.push(l.jsx("div", {
                        className: "p-2 border-r border-b border-gray-200 dark:border-gray-700 min-h-[100px] flex flex-col text-gray-400 dark:text-gray-500",
                        children: l.jsx("div", {
                            className: "flex justify-end",
                            children: l.jsx("span", {
                                className: "w-8 h-8 flex items-center justify-center text-sm",
                                children: be
                            })
                        })
                    }, `prev-${X}`))
                }
                const M = new Date
                    , H = M.getFullYear() === z && M.getMonth() === D;
                for (let X = 1; X <= w; X++) {
                    const be = H && X === M.getDate();
                    _.push(l.jsxs("div", {
                        className: "p-2 border-r border-b border-gray-200 dark:border-gray-700 min-h-[100px] flex flex-col hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                        children: [l.jsx("div", {
                            className: "flex justify-end",
                            children: l.jsx("span", {
                                className: `w-8 h-8 flex items-center justify-center text-sm ${be ? "bg-blue-600 text-white rounded-full font-bold" : ""}`,
                                children: X
                            })
                        }), X === 10 && l.jsx("div", {
                            className: "text-xs mt-1 p-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded truncate",
                            children: "Project Deadline"
                        }), X === 22 && l.jsx("div", {
                            className: "text-xs mt-1 p-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded truncate",
                            children: "Team Meeting"
                        })]
                    }, X))
                }
                const ce = 42;
                let Ne = 1;
                for (; _.length < ce;)
                    _.push(l.jsx("div", {
                        className: "p-2 border-r border-b border-gray-200 dark:border-gray-700 min-h-[100px] flex flex-col text-gray-400 dark:text-gray-500",
                        children: l.jsx("div", {
                            className: "flex justify-end",
                            children: l.jsx("span", {
                                className: "w-8 h-8 flex items-center justify-center text-sm",
                                children: Ne
                            })
                        })
                    }, `next-${Ne}`)),
                        Ne++;
                for (let X = 35; X < 42; X++)
                    _[X] && (_[X] = zs.cloneElement(_[X], {
                        className: _[X].props.className.replace("border-b", "")
                    }));
                for (let X = 6; X < 42; X += 7)
                    _[X] && (_[X] = zs.cloneElement(_[X], {
                        className: _[X].props.className.replace("border-r", "")
                    }));
                return _
            }
            ;
        return l.jsx("main", {
            className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
            children: l.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [l.jsx(pe, {
                    title: "Calendar",
                    breadcrumbItems: [{
                        label: "UI Elements",
                        href: "#!"
                    }],
                    userName: "Shariq",
                    lastSignIn: "Today, 10:16 AM",
                    showSearch: !0
                }), l.jsxs("div", {
                    className: "flex flex-col lg:flex-row gap-4",
                    children: [l.jsx("aside", {
                        className: "lg:w-64 flex-shrink-0",
                        children: l.jsxs("div", {
                            className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 p-4",
                            children: [l.jsxs("button", {
                                className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow transition-colors flex items-center justify-center gap-2",
                                children: [l.jsx("i", {
                                    className: "bi bi-plus-lg"
                                }), " Create Event"]
                            }), l.jsxs("div", {
                                className: "mt-6",
                                children: [l.jsx("h3", {
                                    className: "text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase",
                                    children: "My Calendars"
                                }), l.jsxs("ul", {
                                    className: "mt-2 space-y-2",
                                    children: [l.jsx("li", {
                                        children: l.jsxs("label", {
                                            className: "flex items-center text-sm gap-2",
                                            children: [l.jsx("input", {
                                                type: "checkbox",
                                                className: "form-checkbox text-blue-500 h-4 w-4 rounded border-gray-300 dark:border-gray-600 focus:ring-blue-500",
                                                defaultChecked: !0
                                            }), " ", l.jsx("span", {
                                                className: "w-3 h-3 rounded-full bg-blue-500 inline-block"
                                            }), " Work"]
                                        })
                                    }), l.jsx("li", {
                                        children: l.jsxs("label", {
                                            className: "flex items-center text-sm gap-2",
                                            children: [l.jsx("input", {
                                                type: "checkbox",
                                                className: "form-checkbox text-green-500 h-4 w-4 rounded border-gray-300 dark:border-gray-600 focus:ring-green-500",
                                                defaultChecked: !0
                                            }), " ", l.jsx("span", {
                                                className: "w-3 h-3 rounded-full bg-green-500 inline-block"
                                            }), " Personal"]
                                        })
                                    }), l.jsx("li", {
                                        children: l.jsxs("label", {
                                            className: "flex items-center text-sm gap-2",
                                            children: [l.jsx("input", {
                                                type: "checkbox",
                                                className: "form-checkbox text-yellow-500 h-4 w-4 rounded border-gray-300 dark:border-gray-600 focus:ring-yellow-500"
                                            }), " ", l.jsx("span", {
                                                className: "w-3 h-3 rounded-full bg-yellow-500 inline-block"
                                            }), " Holidays"]
                                        })
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "mt-6",
                                children: [l.jsx("h3", {
                                    className: "text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase",
                                    children: "Upcoming Events"
                                }), l.jsxs("ul", {
                                    className: "mt-2 space-y-3",
                                    children: [l.jsxs("li", {
                                        className: "p-2 bg-gray-50 dark:bg-gray-700/50 rounded-md",
                                        children: [l.jsx("p", {
                                            className: "font-semibold text-sm",
                                            children: "Design Sync Meeting"
                                        }), l.jsx("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: "Today, 4:00 PM"
                                        })]
                                    }), l.jsxs("li", {
                                        className: "p-2 bg-gray-50 dark:bg-gray-700/50 rounded-md",
                                        children: [l.jsx("p", {
                                            className: "font-semibold text-sm",
                                            children: "Q3 Planning"
                                        }), l.jsx("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                            children: "Tomorrow, 10:00 AM"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), l.jsxs("div", {
                        className: "flex-1 bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 overflow-hidden",
                        children: [l.jsxs("div", {
                            className: "p-4 flex justify-between items-center border-b dark:border-gray-700",
                            children: [l.jsx("button", {
                                onClick: () => u(-1),
                                className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",
                                children: l.jsx("i", {
                                    className: "bi bi-chevron-left"
                                })
                            }), l.jsx("h2", {
                                className: "text-lg font-bold",
                                children: d.toLocaleString("default", {
                                    month: "long",
                                    year: "numeric"
                                })
                            }), l.jsx("button", {
                                onClick: () => u(1),
                                className: "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",
                                children: l.jsx("i", {
                                    className: "bi bi-chevron-right"
                                })
                            })]
                        }), l.jsxs("div", {
                            children: [l.jsx("div", {
                                className: "grid grid-cols-7 text-center font-semibold text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700",
                                children: v.map(z => l.jsx("div", {
                                    className: "py-3 border-r border-gray-200 dark:border-gray-700 last:border-r-0",
                                    children: z
                                }, z))
                            }), l.jsx("div", {
                                className: "grid grid-cols-7",
                                children: g()
                            })]
                        })]
                    })]
                })]
            })
        })
    }
    , mh = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsxs("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: [l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            }), l.jsxs("div", {
                className: "text-xs text-gray-400 flex items-center gap-1",
                children: [l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-chevron-up"
                    })
                }), l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-x"
                    })
                })]
            })]
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , fh = [{
        name: "public",
        type: "folder",
        children: [{
            name: "vite.svg",
            type: "file"
        }]
    }, {
        name: "src",
        type: "folder",
        children: [{
            name: "components",
            type: "folder",
            children: [{
                name: "App.tsx",
                type: "file"
            }, {
                name: "Dashboard.tsx",
                type: "file"
            }, {
                name: "Header.tsx",
                type: "file"
            }]
        }, {
            name: "index.tsx",
            type: "file"
        }]
    }, {
        name: "package.json",
        type: "file"
    }, {
        name: "tailwind.config.js",
        type: "file"
    }]
    , F0 = ({ node: d, level: x = 0 }) => {
        var Y;
        const [v, u] = W.useState(x === 0)
            , g = d.type === "folder"
            , z = d.children && d.children.length > 0
            , D = () => {
                g && u(!v)
            }
            ;
        return l.jsxs("div", {
            children: [l.jsxs("div", {
                className: "flex items-center p-1.5 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700",
                style: {
                    paddingLeft: `${x * 20 + 8}px`
                },
                onClick: D,
                children: [g ? l.jsx("i", {
                    className: `bi ${v && z ? "bi-chevron-down" : "bi-chevron-right"} text-xs w-4`
                }) : l.jsx("div", {
                    className: "w-4"
                }), l.jsx("i", {
                    className: `bi ${g ? "bi-folder-fill text-yellow-500" : "bi-file-earmark-text text-gray-500"} mr-2`
                }), l.jsx("span", {
                    className: "text-sm",
                    children: d.name
                })]
            }), v && z && l.jsx("div", {
                children: (Y = d.children) == null ? void 0 : Y.map((w, N) => l.jsx(F0, {
                    node: w,
                    level: x + 1
                }, N))
            })]
        })
    }
    , xh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Tree View",
                breadcrumbItems: [{
                    label: "UI Elements",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:16 AM",
                showSearch: !0
            }), l.jsxs(mh, {
                title: "File System Tree View",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "A simple, interactive tree view component to display hierarchical data like a file system."
                }), l.jsx("div", {
                    className: "p-4 border dark:border-gray-700 rounded-lg",
                    children: fh.map((d, x) => l.jsx(F0, {
                        node: d
                    }, x))
                })]
            })]
        })
    })
    , kc = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsxs("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: [l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            }), l.jsxs("div", {
                className: "text-xs text-gray-400 flex items-center gap-1",
                children: [l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-chevron-up"
                    })
                }), l.jsx("button", {
                    className: "p-1 hover:text-gray-600 dark:hover:text-gray-200",
                    children: l.jsx("i", {
                        className: "bi bi-x"
                    })
                })]
            })]
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , jt = ({ children: d, className: x }) => l.jsx("div", {
        className: `p-4 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-center font-medium cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors ${x}`,
        onClick: () => alert(`You clicked on cell: ${d}`),
        children: d
    })
    , hh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Grids",
                breadcrumbItems: [{
                    label: "UI Elements",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:16 AM",
                showSearch: !0
            }), l.jsxs(kc, {
                title: "Basic Grid",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "A simple three-column grid."
                }), l.jsxs("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: [l.jsx(jt, {
                        children: ".col-span-1"
                    }), l.jsx(jt, {
                        children: ".col-span-1"
                    }), l.jsx(jt, {
                        children: ".col-span-1"
                    })]
                })]
            }), l.jsxs(kc, {
                title: "Spanning Columns",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Grid items can span multiple columns."
                }), l.jsxs("div", {
                    className: "grid grid-cols-3 gap-4",
                    children: [l.jsx(jt, {
                        children: ".col-span-1"
                    }), l.jsx(jt, {
                        className: "col-span-2",
                        children: ".col-span-2"
                    }), l.jsx(jt, {
                        className: "col-span-2",
                        children: ".col-span-2"
                    }), l.jsx(jt, {
                        children: ".col-span-1"
                    }), l.jsx(jt, {
                        className: "col-span-3",
                        children: ".col-span-3"
                    })]
                })]
            }), l.jsxs(kc, {
                title: "Responsive Grid",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Use responsive modifiers to create different layouts for different screen sizes. This grid is 1 column on small screens, 2 on medium, and 4 on large screens."
                }), l.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                    children: [l.jsx(jt, {
                        children: "1"
                    }), l.jsx(jt, {
                        children: "2"
                    }), l.jsx(jt, {
                        children: "3"
                    }), l.jsx(jt, {
                        children: "4"
                    })]
                })]
            })]
        })
    })
    , $r = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , gh = () => l.jsxs("div", {
        className: "flex justify-around items-end h-64 p-4 border dark:border-gray-700 rounded-lg",
        children: [l.jsx("div", {
            className: "w-10 bg-blue-500 rounded-t-sm",
            style: {
                height: "70%"
            }
        }), l.jsx("div", {
            className: "w-10 bg-blue-500 rounded-t-sm",
            style: {
                height: "50%"
            }
        }), l.jsx("div", {
            className: "w-10 bg-blue-500 rounded-t-sm",
            style: {
                height: "90%"
            }
        }), l.jsx("div", {
            className: "w-10 bg-blue-500 rounded-t-sm",
            style: {
                height: "60%"
            }
        }), l.jsx("div", {
            className: "w-10 bg-blue-500 rounded-t-sm",
            style: {
                height: "75%"
            }
        })]
    })
    , bh = () => l.jsx("div", {
        className: "h-64 p-4 border dark:border-gray-700 rounded-lg",
        children: l.jsx("svg", {
            className: "w-full h-full",
            viewBox: "0 0 100 50",
            preserveAspectRatio: "none",
            children: l.jsx("path", {
                d: "M 0 40 L 10 30 L 20 35 L 30 20 L 40 25 L 50 10 L 60 15 L 70 25 L 80 20 L 90 30 L 100 25",
                fill: "none",
                stroke: "#3b82f6",
                strokeWidth: "1"
            })
        })
    })
    , yh = () => l.jsx("div", {
        className: "h-64 flex items-center justify-center p-4 border dark:border-gray-700 rounded-lg",
        children: l.jsxs("div", {
            className: "relative inline-block",
            children: [l.jsxs("svg", {
                className: "w-40 h-40",
                viewBox: "0 0 120 120",
                children: [l.jsx("circle", {
                    cx: "60",
                    cy: "60",
                    r: "54",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "12",
                    className: "text-gray-200 dark:text-gray-700"
                }), l.jsx("circle", {
                    cx: "60",
                    cy: "60",
                    r: "54",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "12",
                    strokeDasharray: "339.292",
                    strokeDashoffset: "101.787",
                    className: "text-cyan-400 transform -rotate-90 origin-center"
                })]
            }), l.jsxs("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center",
                children: [l.jsx("span", {
                    className: "text-3xl font-bold",
                    children: "70%"
                }), l.jsx("span", {
                    className: "text-xs text-gray-500",
                    children: "COMPLETE"
                })]
            })]
        })
    })
    , ph = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Charts",
                breadcrumbItems: [{
                    label: "UI Elements",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:16 AM",
                showSearch: !0
            }), l.jsxs("div", {
                className: "p-4 text-sm text-yellow-800 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300",
                role: "alert",
                children: [l.jsx("i", {
                    className: "bi bi-info-circle mr-2"
                }), " These are static placeholders. For dynamic charts, you'll need a library like ", l.jsx("b", {
                    children: "Chart.js"
                }), " or ", l.jsx("b", {
                    children: "Recharts"
                }), "."]
            }), l.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: [l.jsx($r, {
                    title: "Bar Chart",
                    children: l.jsx(gh, {})
                }), l.jsx($r, {
                    title: "Line Chart",
                    children: l.jsx(bh, {})
                }), l.jsx($r, {
                    title: "Donut Chart",
                    children: l.jsx(yh, {})
                }), l.jsx($r, {
                    title: "Area Chart",
                    children: l.jsx("div", {
                        className: "h-64 flex items-center justify-center text-gray-400 border dark:border-gray-700 rounded-lg",
                        children: "Area Chart Placeholder"
                    })
                })]
            })]
        })
    })
    , Wr = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4 prose dark:prose-invert max-w-none",
            children: x
        })]
    })
    , vh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Typography",
                breadcrumbItems: [{
                    label: "UI Element",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:17 AM",
                showAlert: !1
            }), l.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: [l.jsxs("div", {
                    className: "space-y-4",
                    children: [l.jsxs(Wr, {
                        title: "Headings",
                        children: [l.jsx("h1", {
                            className: "text-5xl font-bold text-heading border-b mb-6 pb-6",
                            children: "h1. Heading 1"
                        }), l.jsx("h2", {
                            className: "text-4xl font-bold text-heading border-b mb-6 pb-6",
                            children: "h2. Heading 2"
                        }), l.jsx("h3", {
                            className: "text-3xl font-bold text-heading border-b mb-6 pb-6",
                            children: "h3. Heading 3"
                        }), l.jsx("h4", {
                            className: "text-2xl font-bold text-heading border-b mb-6 pb-6",
                            children: "h4. Heading 4"
                        }), l.jsx("h5", {
                            className: "text-xl font-bold text-heading border-b mb-6 pb-6",
                            children: "h5. Heading 5"
                        }), l.jsx("h6", {
                            className: "text-lg font-bold text-heading border-b mb-6 pb-6",
                            children: "h6. Heading 6"
                        })]
                    }), l.jsx(Wr, {
                        title: "Blockquotes",
                        children: l.jsxs("blockquote", {
                            className: "p-4 my-4 border-s-4 border-default bg-neutral-secondary-soft",
                            children: [l.jsx("p", {
                                className: "text-3xl italic font-medium leading-relaxed text-heading",
                                children: '"The quick brown fox jumps over the lazy dog."'
                            }), l.jsx("footer", {
                                children: "— Someone famous"
                            })]
                        })
                    })]
                }), l.jsxs("div", {
                    className: "space-y-4",
                    children: [l.jsxs(Wr, {
                        title: "Body Text",
                        children: [l.jsxs("p", {
                            children: ["Welcome to the FMS Admin Dashboard. This is a standard paragraph of text. You can use it to convey information to the user.", l.jsx("strong", {
                                children: "This text is bold."
                            }), " ", l.jsx("em", {
                                children: "This text is italic."
                            })]
                        }), l.jsx("p", {
                            className: "lead ",
                            children: "This is a lead paragraph. It stands out from regular paragraphs. Use it for introductions or important summaries."
                        }), l.jsxs("p", {
                            children: ["You can use ", l.jsx("mark", {
                                children: "highlighted text"
                            }), " to draw attention, or ", l.jsx("code", {
                                children: "inline code"
                            }), " for technical terms. Link to other pages with a simple ", l.jsx("a", {
                                href: "#!",
                                children: "anchor tag"
                            }), "."]
                        })]
                    }), l.jsxs(Wr, {
                        title: "Lists",
                        children: [l.jsx("h4", {
                            children: "Unordered List"
                        }), l.jsxs("ul", {
                            children: [l.jsx("li", {
                                children: "List item one"
                            }), l.jsxs("li", {
                                children: ["List item two", l.jsxs("ul", {
                                    children: [l.jsx("li", {
                                        children: "Nested item A"
                                    }), l.jsx("li", {
                                        children: "Nested item B"
                                    })]
                                })]
                            }), l.jsx("li", {
                                children: "List item three"
                            })]
                        }), l.jsx("h4", {
                            children: "Ordered List"
                        }), l.jsxs("ol", {
                            children: [l.jsx("li", {
                                children: "First item"
                            }), l.jsx("li", {
                                children: "Second item"
                            }), l.jsx("li", {
                                children: "Third item"
                            })]
                        })]
                    })]
                })]
            })]
        })
    })
    , jh = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , Nh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Form Elements",
                breadcrumbItems: [{
                    label: "Forms",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Today, 10:16 AM",
                showSearch: !0
            }), l.jsxs(jh, {
                title: "Basic Form Elements",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
                    children: "An overview of basic form controls, styled using Tailwind CSS and the @tailwindcss/forms plugin."
                }), l.jsxs("form", {
                    className: "space-y-6",
                    children: [l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "text-input",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Text Input"
                        }), l.jsx("input", {
                            type: "text",
                            id: "text-input",
                            placeholder: "Enter text...",
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 sm:text-sm"
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "email-input",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Email Input"
                        }), l.jsx("input", {
                            type: "email",
                            id: "email-input",
                            placeholder: "you@example.com",
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 sm:text-sm"
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "password-input",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Password"
                        }), l.jsx("input", {
                            type: "password",
                            id: "password-input",
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 sm:text-sm"
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "select-menu",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Select Menu"
                        }), l.jsxs("select", {
                            id: "select-menu",
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 sm:text-sm",
                            children: [l.jsx("option", {
                                children: "Option 1"
                            }), l.jsx("option", {
                                children: "Option 2"
                            }), l.jsx("option", {
                                children: "Option 3"
                            })]
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "textarea",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Textarea"
                        }), l.jsx("textarea", {
                            id: "textarea",
                            rows: 4,
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 sm:text-sm",
                            placeholder: "Enter a message..."
                        })]
                    }), l.jsxs("fieldset", {
                        children: [l.jsx("legend", {
                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Checkboxes"
                        }), l.jsxs("div", {
                            className: "mt-2 space-y-2",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("input", {
                                    id: "checkbox-1",
                                    type: "checkbox",
                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                                }), l.jsx("label", {
                                    htmlFor: "checkbox-1",
                                    className: "ml-2 block text-sm text-gray-900 dark:text-gray-200",
                                    children: "Option A"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("input", {
                                    id: "checkbox-2",
                                    type: "checkbox",
                                    className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600",
                                    defaultChecked: !0
                                }), l.jsx("label", {
                                    htmlFor: "checkbox-2",
                                    className: "ml-2 block text-sm text-gray-900 dark:text-gray-200",
                                    children: "Option B"
                                })]
                            })]
                        })]
                    }), l.jsxs("fieldset", {
                        children: [l.jsx("legend", {
                            className: "text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Radio Buttons"
                        }), l.jsxs("div", {
                            className: "mt-2 space-y-2",
                            children: [l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("input", {
                                    id: "radio-1",
                                    name: "radio-group",
                                    type: "radio",
                                    className: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                                }), l.jsx("label", {
                                    htmlFor: "radio-1",
                                    className: "ml-2 block text-sm text-gray-900 dark:text-gray-200",
                                    children: "Choice 1"
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-center",
                                children: [l.jsx("input", {
                                    id: "radio-2",
                                    name: "radio-group",
                                    type: "radio",
                                    className: "h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600",
                                    defaultChecked: !0
                                }), l.jsx("label", {
                                    htmlFor: "radio-2",
                                    className: "ml-2 block text-sm text-gray-900 dark:text-gray-200",
                                    children: "Choice 2"
                                })]
                            })]
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "file-upload",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "File input"
                        }), l.jsx("input", {
                            id: "file-upload",
                            name: "file-upload",
                            type: "file",
                            className: "mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-900/40 dark:file:text-blue-300 dark:hover:file:bg-blue-900/60"
                        })]
                    }), l.jsxs("div", {
                        className: "pt-4 border-t dark:border-gray-700",
                        children: [l.jsx("button", {
                            type: "submit",
                            className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                            children: "Save"
                        }), l.jsx("button", {
                            type: "button",
                            className: "ml-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500",
                            children: "Cancel"
                        })]
                    })]
                })]
            })]
        })
    })
    , Sc = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , wh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Advance form",
                breadcrumbItems: [{
                    label: "Forms",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM"
            }), l.jsxs(Sc, {
                title: "Input Groups",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
                    children: "Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs."
                }), l.jsxs("div", {
                    className: "space-y-4 max-w-md",
                    children: [l.jsxs("div", {
                        className: "flex",
                        children: [l.jsx("span", {
                            className: "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-300 dark:border-gray-600",
                            children: "@"
                        }), l.jsx("input", {
                            type: "text",
                            className: "rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
                            placeholder: "username"
                        })]
                    }), l.jsxs("div", {
                        className: "flex",
                        children: [l.jsx("input", {
                            type: "text",
                            className: "rounded-none rounded-l-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600",
                            placeholder: "example.com"
                        }), l.jsx("span", {
                            className: "inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-300 dark:border-gray-600",
                            children: ".com"
                        })]
                    }), l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("div", {
                            className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                            children: l.jsx("i", {
                                className: "bi bi-envelope text-gray-400"
                            })
                        }), l.jsx("input", {
                            type: "text",
                            className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600",
                            placeholder: "email address"
                        })]
                    })]
                })]
            }), l.jsxs(Sc, {
                title: "Validation States",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
                    children: "Provide valuable, contextual feedback to users with simple validation styles on form controls."
                }), l.jsxs("div", {
                    className: "space-y-4 max-w-md",
                    children: [l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "success-input",
                            className: "block mb-2 text-sm font-medium text-green-700 dark:text-green-500",
                            children: "Success input"
                        }), l.jsx("input", {
                            type: "text",
                            id: "success-input",
                            className: "bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100/10 dark:border-green-500",
                            placeholder: "Success",
                            defaultValue: "username_is_available"
                        }), l.jsxs("p", {
                            className: "mt-2 text-sm text-green-600 dark:text-green-500",
                            children: [l.jsx("span", {
                                className: "font-medium",
                                children: "Well done!"
                            }), " Username available!"]
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "error-input",
                            className: "block mb-2 text-sm font-medium text-red-700 dark:text-red-500",
                            children: "Error input"
                        }), l.jsx("input", {
                            type: "text",
                            id: "error-input",
                            className: "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100/10 dark:border-red-500",
                            placeholder: "Error",
                            defaultValue: "invalid_email"
                        }), l.jsxs("p", {
                            className: "mt-2 text-sm text-red-600 dark:text-red-500",
                            children: [l.jsx("span", {
                                className: "font-medium",
                                children: "Oh, snap!"
                            }), " Email address is incorrect."]
                        })]
                    })]
                })]
            }), l.jsxs(Sc, {
                title: "Switches & Toggles",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
                    children: "A simple toggle switch created with a styled checkbox."
                }), l.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [l.jsxs("label", {
                        className: "relative inline-flex items-center cursor-pointer",
                        children: [l.jsx("input", {
                            type: "checkbox",
                            value: "",
                            className: "sr-only peer"
                        }), l.jsx("div", {
                            className: "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        }), l.jsx("span", {
                            className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                            children: "Email Notifications"
                        })]
                    }), l.jsxs("label", {
                        className: "relative inline-flex items-center cursor-pointer",
                        children: [l.jsx("input", {
                            type: "checkbox",
                            value: "",
                            className: "sr-only peer",
                            defaultChecked: !0
                        }), l.jsx("div", {
                            className: "w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                        }), l.jsx("span", {
                            className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                            children: "Push Notifications"
                        })]
                    })]
                })]
            })]
        })
    })
    , kh = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , Sh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Text Editor",
                breadcrumbItems: [{
                    label: "Forms",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM"
            }), l.jsxs("div", {
                className: "p-4 text-sm text-yellow-800 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300",
                role: "alert",
                children: [l.jsx("i", {
                    className: "bi bi-info-circle mr-2"
                }), " This is a UI placeholder. For a fully functional editor, integrate a library like ", l.jsx("b", {
                    children: "Quill.js"
                }), " or ", l.jsx("b", {
                    children: "TinyMCE"
                }), "."]
            }), l.jsxs(kh, {
                title: "WYSIWYG Editor",
                children: [l.jsxs("div", {
                    className: "border border-gray-200 dark:border-gray-700 rounded-lg",
                    children: [l.jsxs("div", {
                        className: "flex items-center p-2 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 rounded-t-lg space-x-1",
                        children: [l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-type-bold"
                            })
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-type-italic"
                            })
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-type-underline"
                            })
                        }), l.jsx("div", {
                            className: "w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-link-45deg"
                            })
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-image"
                            })
                        }), l.jsx("div", {
                            className: "w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-list-ul"
                            })
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-list-ol"
                            })
                        }), l.jsx("div", {
                            className: "w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1"
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-text-left"
                            })
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-text-center"
                            })
                        }), l.jsx("button", {
                            className: "p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600",
                            children: l.jsx("i", {
                                className: "bi bi-text-right"
                            })
                        })]
                    }), l.jsx("textarea", {
                        rows: 12,
                        className: "w-full p-3 border-0 focus:ring-0 dark:bg-gray-800 dark:text-gray-200 resize-y",
                        placeholder: "Start writing..."
                    })]
                }), l.jsx("div", {
                    className: "flex justify-end mt-4",
                    children: l.jsx("button", {
                        type: "submit",
                        className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                        children: "Publish"
                    })
                })]
            })]
        })
    })
    , V0 = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , Th = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "File Upload",
                breadcrumbItems: [{
                    label: "Forms",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM"
            }), l.jsx(V0, {
                title: "Drag and Drop Uploader",
                children: l.jsx("div", {
                    className: "flex items-center justify-center w-full",
                    children: l.jsxs("label", {
                        htmlFor: "dropzone-file",
                        className: "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
                        children: [l.jsxs("div", {
                            className: "flex flex-col items-center justify-center pt-5 pb-6",
                            children: [l.jsx("i", {
                                className: "bi bi-cloud-upload text-4xl text-gray-500 dark:text-gray-400"
                            }), l.jsxs("p", {
                                className: "mb-2 text-sm text-gray-500 dark:text-gray-400",
                                children: [l.jsx("span", {
                                    className: "font-semibold",
                                    children: "Click to upload"
                                }), " or drag and drop"]
                            }), l.jsx("p", {
                                className: "text-xs text-gray-500 dark:text-gray-400",
                                children: "SVG, PNG, JPG or GIF (MAX. 800x400px)"
                            })]
                        }), l.jsx("input", {
                            id: "dropzone-file",
                            type: "file",
                            className: "hidden"
                        })]
                    })
                })
            }), l.jsxs(V0, {
                title: "Upload Progress",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Example of file upload progress indicators."
                }), l.jsxs("div", {
                    className: "space-y-4",
                    children: [l.jsxs("div", {
                        children: [l.jsxs("div", {
                            className: "flex justify-between mb-1",
                            children: [l.jsx("span", {
                                className: "text-base font-medium text-blue-700 dark:text-white",
                                children: "design-mockup.fig"
                            }), l.jsx("span", {
                                className: "text-sm font-medium text-blue-700 dark:text-white",
                                children: "45%"
                            })]
                        }), l.jsx("div", {
                            className: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",
                            children: l.jsx("div", {
                                className: "bg-blue-600 h-2.5 rounded-full",
                                style: {
                                    width: "45%"
                                }
                            })
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsxs("div", {
                            className: "flex justify-between mb-1",
                            children: [l.jsx("span", {
                                className: "text-base font-medium text-green-700 dark:text-white",
                                children: "project-assets.zip"
                            }), l.jsx("span", {
                                className: "text-sm font-medium text-green-700 dark:text-white",
                                children: "100%"
                            })]
                        }), l.jsx("div", {
                            className: "w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700",
                            children: l.jsx("div", {
                                className: "bg-green-600 h-2.5 rounded-full",
                                style: {
                                    width: "100%"
                                }
                            })
                        })]
                    })]
                })]
            })]
        })
    })
    , Tc = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , Ec = [{
        id: 1,
        name: "John Doe",
        title: "Software Engineer",
        email: "john@example.com",
        role: "Admin",
        status: "Active"
    }, {
        id: 2,
        name: "Jane Smith",
        title: "Product Manager",
        email: "jane@example.com",
        role: "Member",
        status: "Active"
    }, {
        id: 3,
        name: "Sam Green",
        title: "UI/UX Designer",
        email: "sam@example.com",
        role: "Member",
        status: "Inactive"
    }, {
        id: 4,
        name: "Chris Lee",
        title: "DevOps Engineer",
        email: "chris@example.com",
        role: "Owner",
        status: "Active"
    }, {
        id: 5,
        name: "Alex Johnson",
        title: "Data Scientist",
        email: "alex@example.com",
        role: "Member",
        status: "Active"
    }]
    , Eh = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Tables",
                breadcrumbItems: [],
                userName: "Shariq",
                lastSignIn: "Today, 10:17 AM",
                showAlert: !1
            }), l.jsxs(Tc, {
                title: "Basic Table",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "A simple table with minimal styling."
                }), l.jsx("div", {
                    className: "overflow-x-auto",
                    children: l.jsxs("table", {
                        className: "w-full text-sm text-left text-gray-500 dark:text-gray-400",
                        children: [l.jsx("thead", {
                            className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
                            children: l.jsxs("tr", {
                                children: [l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Name"
                                }), l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Title"
                                }), l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Status"
                                }), l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Role"
                                })]
                            })
                        }), l.jsx("tbody", {
                            children: Ec.slice(0, 3).map(d => l.jsxs("tr", {
                                className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
                                children: [l.jsx("th", {
                                    scope: "row",
                                    className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white",
                                    children: d.name
                                }), l.jsx("td", {
                                    className: "px-6 py-4",
                                    children: d.title
                                }), l.jsx("td", {
                                    className: "px-6 py-4",
                                    children: d.status
                                }), l.jsx("td", {
                                    className: "px-6 py-4",
                                    children: d.role
                                })]
                            }, d.id))
                        })]
                    })
                })]
            }), l.jsxs(Tc, {
                title: "Striped & Hover Table",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "Table with alternating row colors and a hover effect."
                }), l.jsx("div", {
                    className: "overflow-x-auto relative shadow-md sm:rounded-lg border dark:border-gray-700",
                    children: l.jsxs("table", {
                        className: "w-full text-sm text-left text-gray-500 dark:text-gray-400",
                        children: [l.jsx("thead", {
                            className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
                            children: l.jsxs("tr", {
                                children: [l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "User"
                                }), l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Title"
                                }), l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: "Status"
                                }), l.jsx("th", {
                                    scope: "col",
                                    className: "px-6 py-3",
                                    children: l.jsx("span", {
                                        className: "sr-only",
                                        children: "Edit"
                                    })
                                })]
                            })
                        }), l.jsx("tbody", {
                            children: Ec.map(d => l.jsxs("tr", {
                                className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700",
                                children: [l.jsxs("td", {
                                    className: "px-6 py-4",
                                    children: [l.jsx("div", {
                                        className: "font-medium text-gray-900 dark:text-white",
                                        children: d.name
                                    }), l.jsx("div", {
                                        className: "text-xs text-gray-500 dark:text-gray-400",
                                        children: d.email
                                    })]
                                }), l.jsx("td", {
                                    className: "px-6 py-4",
                                    children: d.title
                                }), l.jsx("td", {
                                    className: "px-6 py-4",
                                    children: l.jsx("span", {
                                        className: `px-2 py-1 text-xs font-medium rounded-full ${d.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300" : "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-300"}`,
                                        children: d.status
                                    })
                                }), l.jsx("td", {
                                    className: "px-6 py-4 text-right",
                                    children: l.jsx("a", {
                                        href: "#!",
                                        className: "font-medium text-blue-600 dark:text-blue-500 hover:underline",
                                        children: "Edit"
                                    })
                                })]
                            }, d.id))
                        })]
                    })
                })]
            }), l.jsxs(Tc, {
                title: "Responsive Table with Pagination",
                children: [l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
                    children: "This table will scroll horizontally on smaller screens. Includes search and pagination."
                }), l.jsxs("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("input", {
                            type: "text",
                            placeholder: "Search users...",
                            className: "w-full text-sm rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 pr-8"
                        }), l.jsx("i", {
                            className: "bi bi-search absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                        })]
                    }), l.jsxs("button", {
                        className: "px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-2",
                        children: [l.jsx("i", {
                            className: "bi bi-plus-lg"
                        }), " Add User"]
                    })]
                }), l.jsx("div", {
                    className: "overflow-x-auto rounded-lg border dark:border-gray-700",
                    children: l.jsxs("table", {
                        className: "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
                        children: [l.jsx("thead", {
                            className: "bg-gray-50 dark:bg-gray-700",
                            children: l.jsxs("tr", {
                                children: [l.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Name"
                                }), l.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Title"
                                }), l.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Status"
                                }), l.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Role"
                                }), l.jsx("th", {
                                    className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                    children: "Actions"
                                })]
                            })
                        }), l.jsx("tbody", {
                            className: "bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700",
                            children: Ec.map(d => l.jsxs("tr", {
                                children: [l.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white",
                                    children: d.name
                                }), l.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                    children: d.title
                                }), l.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                    children: d.status
                                }), l.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",
                                    children: d.role
                                }), l.jsxs("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2",
                                    children: [l.jsx("button", {
                                        className: "text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 p-1",
                                        children: l.jsx("i", {
                                            className: "bi bi-pencil-square"
                                        })
                                    }), l.jsx("button", {
                                        className: "text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 p-1",
                                        children: l.jsx("i", {
                                            className: "bi bi-trash"
                                        })
                                    })]
                                })]
                            }, d.id))
                        })]
                    })
                }), l.jsxs("div", {
                    className: "flex justify-between items-center mt-4 text-sm",
                    children: [l.jsx("span", {
                        className: "text-gray-500 dark:text-gray-400",
                        children: "Showing 1 to 5 of 20 results"
                    }), l.jsxs("div", {
                        className: "inline-flex rounded-md shadow-sm",
                        children: [l.jsx("button", {
                            className: "px-3 py-1 border rounded-l-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50",
                            disabled: !0,
                            children: "Previous"
                        }), l.jsx("button", {
                            className: "px-3 py-1 border-t border-b border-r rounded-r-md dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700",
                            children: "Next"
                        })]
                    })]
                })]
            })]
        })
    })
    , Z0 = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , Ah = () => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Map",
                breadcrumbItems: [],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM"
            }), l.jsxs("div", {
                className: "p-4 text-sm text-yellow-800 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 dark:text-yellow-300",
                role: "alert",
                children: [l.jsx("i", {
                    className: "bi bi-info-circle mr-2"
                }), " Map functionality requires integration with a service like Google Maps API or Leaflet. These are visual placeholders."]
            }), l.jsx(Z0, {
                title: "Google Map",
                children: l.jsx("div", {
                    className: "aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700",
                    children: l.jsx("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798934529!2d-74.25986540325477!3d40.69767006333903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%2C%20USA!5e0!3m2!1sen!2sid!4v1716960161427!5m2!1sen!2sid",
                        className: "w-full h-full",
                        style: {
                            border: 0
                        },
                        allowFullScreen: !0,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade"
                    })
                })
            }), l.jsx(Z0, {
                title: "Vector Map (Placeholder)",
                children: l.jsx("div", {
                    className: "aspect-video rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center",
                    children: l.jsxs("div", {
                        className: "text-center text-gray-500 dark:text-gray-400",
                        children: [l.jsx("i", {
                            className: "bi bi-geo-alt text-6xl"
                        }), l.jsx("p", {
                            className: "mt-2 font-semibold",
                            children: "Vector Map Area"
                        }), l.jsx("p", {
                            className: "text-sm",
                            children: "A vector map library like jVectorMap or D3.js would be rendered here."
                        })]
                    })
                })
            })]
        })
    })
    , Ac = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-sm rounded-lg border dark:border-gray-700 mb-4",
        children: [l.jsx("div", {
            className: "px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center",
            children: l.jsx("h2", {
                className: "text-base font-semibold uppercase tracking-wider",
                children: d
            })
        }), l.jsx("div", {
            className: "p-4",
            children: x
        })]
    })
    , zh = () => {
        const d = [10, 25, 33, 41, 58, 62, 77, 83];
        return l.jsx("main", {
            className: "flex-grow p-3 md:p-4 bg-white paper-wrap bevel tlbr",
            children: l.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [l.jsx(pe, {
                    title: "Media",
                    breadcrumbItems: [],
                    userName: "Shariq",
                    lastSignIn: "Yesterday, 16:54 PM"
                }), l.jsx(Ac, {
                    title: "Image Gallery",
                    children: l.jsx("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                        children: d.map(x => l.jsxs("div", {
                            className: "relative overflow-hidden rounded-lg group aspect-square",
                            children: [l.jsx("img", {
                                src: `https://picsum.photos/seed/${x}/400/400`,
                                alt: `Gallery image ${x}`,
                                className: "w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                            }), l.jsx("div", {
                                className: "absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                                children: l.jsx("i", {
                                    className: "bi bi-arrows-fullscreen text-white text-3xl"
                                })
                            })]
                        }, x))
                    })
                }), l.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-4",
                    children: [l.jsx(Ac, {
                        title: "Video Player",
                        children: l.jsxs("div", {
                            className: "aspect-video bg-black rounded-lg flex items-center justify-center relative overflow-hidden",
                            children: [l.jsx("img", {
                                src: "https://picsum.photos/seed/video-thumb/800/450",
                                className: "w-full h-full object-cover opacity-50",
                                alt: "Video thumbnail"
                            }), l.jsx("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: l.jsx("button", {
                                    className: "w-20 h-20 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white flex items-center justify-center transition",
                                    children: l.jsx("i", {
                                        className: "bi bi-play-fill text-5xl ml-2"
                                    })
                                })
                            })]
                        })
                    }), l.jsx(Ac, {
                        title: "Media Objects",
                        children: l.jsxs("div", {
                            className: "space-y-4",
                            children: [l.jsxs("div", {
                                className: "flex items-start gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50",
                                children: [l.jsx("img", {
                                    src: "https://picsum.photos/seed/user1/64/64",
                                    alt: "User",
                                    className: "w-12 h-12 rounded-full flex-shrink-0"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h4", {
                                        className: "font-semibold",
                                        children: "John Doe"
                                    }), l.jsx("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
                                    })]
                                })]
                            }), l.jsxs("div", {
                                className: "flex items-start gap-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50",
                                children: [l.jsx("img", {
                                    src: "https://picsum.photos/seed/user2/64/64",
                                    alt: "User",
                                    className: "w-12 h-12 rounded-full flex-shrink-0"
                                }), l.jsxs("div", {
                                    children: [l.jsx("h4", {
                                        className: "font-semibold",
                                        children: "Jane Smith"
                                    }), l.jsx("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                        children: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
                                    })]
                                })]
                            })]
                        })
                    })]
                })]
            })
        })
    }
    , Mh = ({ setCurrentPage: d }) => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 flex items-center justify-center h-screen",
        children: l.jsx("div", {
            className: "w-full max-w-md",
            children: l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8",
                children: [l.jsx("h2", {
                    className: "text-center text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2",
                    children: "Welcome Back!"
                }), l.jsx("p", {
                    className: "text-center text-sm text-gray-500 dark:text-gray-400 mb-8",
                    children: "Sign in to continue to FMS"
                }), l.jsxs("form", {
                    className: "space-y-6",
                    children: [l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "email",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Email Address"
                        }), l.jsx("div", {
                            className: "mt-1",
                            children: l.jsx("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                required: !0,
                                placeholder: "you@example.com",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            })
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "password",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Password"
                        }), l.jsx("div", {
                            className: "mt-1",
                            children: l.jsx("input", {
                                id: "password",
                                name: "password",
                                type: "password",
                                autoComplete: "current-password",
                                required: !0,
                                placeholder: "••••••••",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            })
                        })]
                    }), l.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [l.jsxs("div", {
                            className: "flex items-center",
                            children: [l.jsx("input", {
                                id: "remember-me",
                                name: "remember-me",
                                type: "checkbox",
                                className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                            }), l.jsx("label", {
                                htmlFor: "remember-me",
                                className: "ml-2 block text-sm text-gray-900 dark:text-gray-300",
                                children: "Remember me"
                            })]
                        }), l.jsx("div", {
                            className: "text-sm",
                            children: l.jsx("a", {
                                href: "#!",
                                className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300",
                                children: "Forgot your password?"
                            })
                        })]
                    }), l.jsx("div", {
                        children: l.jsx("button", {
                            type: "submit",
                            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800",
                            children: "Sign in"
                        })
                    })]
                }), l.jsxs("div", {
                    className: "mt-6",
                    children: [l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 flex items-center",
                            children: l.jsx("div", {
                                className: "w-full border-t border-gray-300 dark:border-gray-600"
                            })
                        }), l.jsx("div", {
                            className: "relative flex justify-center text-sm",
                            children: l.jsx("span", {
                                className: "px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400",
                                children: "Or continue with"
                            })
                        })]
                    }), l.jsxs("div", {
                        className: "mt-6 grid grid-cols-2 gap-3",
                        children: [l.jsx("div", {
                            children: l.jsxs("a", {
                                href: "#!",
                                className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600",
                                children: [l.jsx("i", {
                                    className: "bi bi-google text-red-500"
                                }), l.jsx("span", {
                                    className: "sr-only",
                                    children: "Sign in with Google"
                                })]
                            })
                        }), l.jsx("div", {
                            children: l.jsxs("a", {
                                href: "#!",
                                className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600",
                                children: [l.jsx("i", {
                                    className: "bi bi-facebook text-blue-600"
                                }), l.jsx("span", {
                                    className: "sr-only",
                                    children: "Sign in with Facebook"
                                })]
                            })
                        })]
                    })]
                }), l.jsxs("p", {
                    className: "mt-8 text-center text-sm text-gray-500 dark:text-gray-400",
                    children: ["Not a member?", " ", l.jsx("a", {
                        href: "#!",
                        onClick: x => {
                            x.preventDefault(),
                                d("signup")
                        }
                        ,
                        className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300",
                        children: "Sign Up"
                    })]
                })]
            })
        })
    })
    , Dh = ({ post: d, onReadMore: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col group",
        children: [l.jsxs("div", {
            className: "relative overflow-hidden",
            children: [l.jsx("img", {
                src: `https://picsum.photos/seed/${d.imageUrlSeed}/600/400`,
                alt: d.title,
                className: "w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
            }), l.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            }), l.jsx("div", {
                className: "absolute bottom-4 left-4",
                children: d.tags.map(v => l.jsx("span", {
                    className: "text-xs font-semibold text-white bg-blue-500/80 px-2 py-1 rounded-full mr-2",
                    children: v
                }, v))
            })]
        }), l.jsxs("div", {
            className: "p-5 flex flex-col flex-grow",
            children: [l.jsx("h3", {
                className: "text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
                children: d.title
            }), l.jsx("p", {
                className: "text-gray-600 dark:text-gray-400 text-sm flex-grow mb-4",
                children: d.excerpt
            }), l.jsxs("div", {
                className: "flex items-center justify-between mt-auto text-sm text-gray-500 dark:text-gray-400",
                children: [l.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [l.jsx("img", {
                        src: `https://picsum.photos/seed/${d.author.avatarSeed}/40/40`,
                        alt: d.author.name,
                        className: "w-8 h-8 rounded-full"
                    }), l.jsxs("div", {
                        children: [l.jsx("p", {
                            className: "font-semibold text-gray-700 dark:text-gray-300",
                            children: d.author.name
                        }), l.jsx("p", {
                            className: "text-xs",
                            children: d.publishDate
                        })]
                    })]
                }), l.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [l.jsxs("span", {
                        title: "Views",
                        children: [l.jsx("i", {
                            className: "bi bi-eye mr-1"
                        }), d.views]
                    }), l.jsxs("span", {
                        title: "Comments",
                        children: [l.jsx("i", {
                            className: "bi bi-chat-dots mr-1"
                        }), d.comments]
                    })]
                })]
            }), l.jsxs("button", {
                onClick: x,
                className: "mt-4 w-full text-center py-2 px-4 text-sm font-semibold rounded-md text-blue-600 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors",
                children: ["Read More ", l.jsx("i", {
                    className: "bi bi-arrow-right ml-1"
                })]
            })]
        })]
    })
    , Ch = ({ setCurrentPage: d }) => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 bg-gray-50 dark:bg-gray-900/50 paper-wrap bevel tlbr",
        children: l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [l.jsx(pe, {
                title: "Blog List",
                breadcrumbItems: [{
                    label: "Blog App",
                    href: "#!"
                }],
                userName: "Shariq",
                lastSignIn: "Yesterday, 16:54 PM"
            }), l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700 flex flex-wrap items-center justify-between gap-4",
                children: [l.jsxs("div", {
                    className: "relative flex-grow max-w-xs",
                    children: [l.jsx("input", {
                        type: "text",
                        placeholder: "Search articles...",
                        className: "w-full text-sm rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500 pl-10"
                    }), l.jsx("i", {
                        className: "bi bi-search absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                    })]
                }), l.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [l.jsxs("select", {
                        className: "form-select text-sm rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500",
                        children: [l.jsx("option", {
                            children: "Sort by Date"
                        }), l.jsx("option", {
                            children: "Sort by Popularity"
                        }), l.jsx("option", {
                            children: "Sort by Title"
                        })]
                    }), l.jsxs("button", {
                        className: "px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-2",
                        children: [l.jsx("i", {
                            className: "bi bi-plus-lg"
                        }), " New Post"]
                    })]
                })]
            }), l.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6",
                children: zc.map(x => l.jsx(Dh, {
                    post: x,
                    onReadMore: () => d("blog-detail")
                }, x.id))
            }), l.jsx("div", {
                className: "flex justify-center mt-6",
                children: l.jsx("nav", {
                    "aria-label": "Page navigation",
                    children: l.jsxs("ul", {
                        className: "inline-flex items-center -space-x-px",
                        children: [l.jsx("li", {
                            children: l.jsx("a", {
                                href: "#!",
                                className: "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                                children: "Previous"
                            })
                        }), l.jsx("li", {
                            children: l.jsx("a", {
                                href: "#!",
                                className: "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                                children: "1"
                            })
                        }), l.jsx("li", {
                            children: l.jsx("a", {
                                href: "#!",
                                "aria-current": "page",
                                className: "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
                                children: "2"
                            })
                        }), l.jsx("li", {
                            children: l.jsx("a", {
                                href: "#!",
                                className: "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                                children: "3"
                            })
                        }), l.jsx("li", {
                            children: l.jsx("a", {
                                href: "#!",
                                className: "py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                                children: "Next"
                            })
                        })]
                    })
                })
            })]
        })
    })
    , Ir = ({ title: d, children: x }) => l.jsxs("div", {
        className: "bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border dark:border-gray-700",
        children: [l.jsx("h3", {
            className: "font-bold text-lg mb-4 pb-2 border-b dark:border-gray-700",
            children: d
        }), x]
    })
    , Oh = ({ setCurrentPage: d }) => {
        const x = zc[0];
        return l.jsx("main", {
            className: "flex-grow p-3 md:p-4 bg-gray-50 dark:bg-gray-900/50 paper-wrap bevel tlbr",
            children: l.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [l.jsx(pe, {
                    title: "Blog Detail",
                    breadcrumbItems: [{
                        label: "Blog App",
                        href: "#!"
                    }],
                    userName: "Shariq",
                    lastSignIn: "Yesterday, 16:54 PM"
                }), l.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [l.jsxs("div", {
                        className: "lg:col-span-2 space-y-6",
                        children: [l.jsxs("div", {
                            className: "bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border dark:border-gray-700",
                            children: [l.jsx("img", {
                                src: `https://picsum.photos/seed/${x.imageUrlSeed}/1200/600`,
                                alt: x.title,
                                className: "w-full h-auto md:h-80 object-cover"
                            }), l.jsxs("div", {
                                className: "p-6 md:p-8",
                                children: [l.jsxs("div", {
                                    className: "flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400",
                                    children: [l.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [l.jsx("img", {
                                            src: `https://picsum.photos/seed/${x.author.avatarSeed}/40/40`,
                                            alt: x.author.name,
                                            className: "w-8 h-8 rounded-full"
                                        }), l.jsx("span", {
                                            children: x.author.name
                                        })]
                                    }), l.jsxs("span", {
                                        children: [l.jsx("i", {
                                            className: "bi bi-calendar3 mr-1"
                                        }), " ", x.publishDate]
                                    }), l.jsxs("span", {
                                        children: [l.jsx("i", {
                                            className: "bi bi-eye mr-1"
                                        }), " ", x.views, " Views"]
                                    }), l.jsxs("span", {
                                        children: [l.jsx("i", {
                                            className: "bi bi-chat-dots mr-1"
                                        }), " ", x.comments, " Comments"]
                                    })]
                                }), l.jsx("h1", {
                                    className: "text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6",
                                    children: x.title
                                }), l.jsx("div", {
                                    className: "prose dark:prose-invert max-w-none",
                                    dangerouslySetInnerHTML: {
                                        __html: x.content
                                    }
                                }), l.jsxs("div", {
                                    className: "mt-8 pt-6 border-t dark:border-gray-700",
                                    children: [l.jsx("span", {
                                        className: "font-semibold",
                                        children: "Tags:"
                                    }), x.tags.map(v => l.jsx("a", {
                                        href: "#!",
                                        className: "inline-block text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full ml-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600",
                                        children: v
                                    }, v))]
                                })]
                            })]
                        }), l.jsxs("div", {
                            className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 flex items-start gap-4",
                            children: [l.jsx("img", {
                                src: `https://picsum.photos/seed/${x.author.avatarSeed}/80/80`,
                                alt: x.author.name,
                                className: "w-20 h-20 rounded-full"
                            }), l.jsxs("div", {
                                children: [l.jsxs("h3", {
                                    className: "font-bold text-lg text-gray-800 dark:text-gray-100",
                                    children: ["About", x.author.name]
                                }), l.jsxs("p", {
                                    className: "text-sm text-gray-600 dark:text-gray-400 mt-1",
                                    children: ["A passionate writer and developer, ", x.author.name, " loves to explore new technologies and share knowledge with the community. Follow for more insights on web development and design."]
                                })]
                            })]
                        }), l.jsxs("div", {
                            className: "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700",
                            children: [l.jsxs("h3", {
                                className: "font-bold text-xl mb-4",
                                children: ["Comments (", x.comments, ")"]
                            }), l.jsx("div", {
                                className: "space-y-4",
                                children: l.jsxs("div", {
                                    className: "flex items-start gap-3",
                                    children: [l.jsx("img", {
                                        src: "https://picsum.photos/seed/commenter1/48/48",
                                        alt: "Commenter",
                                        className: "w-12 h-12 rounded-full"
                                    }), l.jsx("div", {
                                        className: "flex-1",
                                        children: l.jsxs("div", {
                                            className: "bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg",
                                            children: [l.jsxs("div", {
                                                className: "flex justify-between items-center",
                                                children: [l.jsx("span", {
                                                    className: "font-semibold",
                                                    children: "Jane Doe"
                                                }), l.jsx("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: "2 hours ago"
                                                })]
                                            }), l.jsx("p", {
                                                className: "text-sm mt-1",
                                                children: "Great article! Really helped clarify the core concepts of Tailwind CSS."
                                            })]
                                        })
                                    })]
                                })
                            }), l.jsxs("form", {
                                className: "mt-6",
                                children: [l.jsx("h4", {
                                    className: "font-semibold mb-2",
                                    children: "Leave a Comment"
                                }), l.jsx("textarea", {
                                    rows: 4,
                                    placeholder: "Write your comment here...",
                                    className: "w-full text-sm rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-blue-500 focus:border-blue-500"
                                }), l.jsx("button", {
                                    type: "submit",
                                    className: "mt-2 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md",
                                    children: "Post Comment"
                                })]
                            })]
                        })]
                    }), l.jsxs("aside", {
                        className: "space-y-6",
                        children: [l.jsx(Ir, {
                            title: "Search",
                            children: l.jsxs("div", {
                                className: "relative",
                                children: [l.jsx("input", {
                                    type: "text",
                                    placeholder: "Search blog...",
                                    className: "w-full text-sm rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 pl-10"
                                }), l.jsx("i", {
                                    className: "bi bi-search absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
                                })]
                            })
                        }), l.jsx(Ir, {
                            title: "Categories",
                            children: l.jsxs("ul", {
                                className: "space-y-2 text-sm",
                                children: [l.jsxs("li", {
                                    className: "flex justify-between",
                                    children: [l.jsx("a", {
                                        href: "#!",
                                        className: "text-gray-600 dark:text-gray-300 hover:text-blue-500",
                                        children: "Web Development"
                                    }), " ", l.jsx("span", {
                                        className: "text-gray-400",
                                        children: "12"
                                    })]
                                }), l.jsxs("li", {
                                    className: "flex justify-between",
                                    children: [l.jsx("a", {
                                        href: "#!",
                                        className: "text-gray-600 dark:text-gray-300 hover:text-blue-500",
                                        children: "Design"
                                    }), l.jsx("span", {
                                        className: "text-gray-400",
                                        children: "8"
                                    })]
                                }), l.jsxs("li", {
                                    className: "flex justify-between",
                                    children: [l.jsx("a", {
                                        href: "#!",
                                        className: "text-gray-600 dark:text-gray-300 hover:text-blue-500",
                                        children: "JavaScript"
                                    }), l.jsx("span", {
                                        className: "text-gray-400",
                                        children: "5"
                                    })]
                                }), l.jsxs("li", {
                                    className: "flex justify-between",
                                    children: [l.jsx("a", {
                                        href: "#!",
                                        className: "text-gray-600 dark:text-gray-300 hover:text-blue-500",
                                        children: "Tutorials"
                                    }), l.jsx("span", {
                                        className: "text-gray-400",
                                        children: "15"
                                    })]
                                })]
                            })
                        }), l.jsx(Ir, {
                            title: "Recent Posts",
                            children: l.jsx("ul", {
                                className: "space-y-3",
                                children: zc.slice(1, 4).map(v => l.jsxs("li", {
                                    className: "flex items-start gap-3",
                                    children: [l.jsx("img", {
                                        src: `https://picsum.photos/seed/${v.imageUrlSeed}/80/80`,
                                        alt: v.title,
                                        className: "w-16 h-16 object-cover rounded-md"
                                    }), l.jsxs("div", {
                                        children: [l.jsx("a", {
                                            href: "#!",
                                            className: "font-semibold text-sm leading-tight hover:text-blue-500",
                                            children: v.title
                                        }), l.jsx("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: v.publishDate
                                        })]
                                    })]
                                }, v.id))
                            })
                        }), l.jsx(Ir, {
                            title: "Tags",
                            children: l.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: ["React", "CSS", "Vite", "UI/UX", "Frontend", "Design", "Web", "Tutorial"].map(v => l.jsx("a", {
                                    href: "#!",
                                    className: "text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600",
                                    children: v
                                }, v))
                            })
                        })]
                    })]
                })]
            })
        })
    }
    , Uh = ({ setCurrentPage: d }) => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 flex items-center justify-center h-screen",
        children: l.jsx("div", {
            className: "w-full max-w-md",
            children: l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8",
                children: [l.jsx("h2", {
                    className: "text-center text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2",
                    children: "Create an Account"
                }), l.jsx("p", {
                    className: "text-center text-sm text-gray-500 dark:text-gray-400 mb-8",
                    children: "Get started with your free account today."
                }), l.jsxs("form", {
                    className: "space-y-6",
                    children: [l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "fullname",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Full Name"
                        }), l.jsx("div", {
                            className: "mt-1",
                            children: l.jsx("input", {
                                id: "fullname",
                                name: "fullname",
                                type: "text",
                                autoComplete: "name",
                                required: !0,
                                placeholder: "John Doe",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            })
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "email",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Email Address"
                        }), l.jsx("div", {
                            className: "mt-1",
                            children: l.jsx("input", {
                                id: "email",
                                name: "email",
                                type: "email",
                                autoComplete: "email",
                                required: !0,
                                placeholder: "you@example.com",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            })
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "password",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Password"
                        }), l.jsx("div", {
                            className: "mt-1",
                            children: l.jsx("input", {
                                id: "password",
                                name: "password",
                                type: "password",
                                autoComplete: "new-password",
                                required: !0,
                                placeholder: "••••••••",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            })
                        })]
                    }), l.jsxs("div", {
                        children: [l.jsx("label", {
                            htmlFor: "confirm-password",
                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                            children: "Confirm Password"
                        }), l.jsx("div", {
                            className: "mt-1",
                            children: l.jsx("input", {
                                id: "confirm-password",
                                name: "confirm-password",
                                type: "password",
                                autoComplete: "new-password",
                                required: !0,
                                placeholder: "••••••••",
                                className: "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            })
                        })]
                    }), l.jsxs("div", {
                        className: "flex items-center",
                        children: [l.jsx("input", {
                            id: "terms",
                            name: "terms",
                            type: "checkbox",
                            className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                        }), l.jsxs("label", {
                            htmlFor: "terms",
                            className: "ml-2 block text-sm text-gray-900 dark:text-gray-300",
                            children: ["I agree to the ", l.jsx("a", {
                                href: "#!",
                                className: "font-medium text-blue-600 hover:text-blue-500",
                                children: "Terms and Conditions"
                            })]
                        })]
                    }), l.jsx("div", {
                        children: l.jsx("button", {
                            type: "submit",
                            className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800",
                            children: "Create Account"
                        })
                    })]
                }), l.jsxs("div", {
                    className: "mt-6",
                    children: [l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("div", {
                            className: "absolute inset-0 flex items-center",
                            children: l.jsx("div", {
                                className: "w-full border-t border-gray-300 dark:border-gray-600"
                            })
                        }), l.jsx("div", {
                            className: "relative flex justify-center text-sm",
                            children: l.jsx("span", {
                                className: "px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400",
                                children: "Or sign up with"
                            })
                        })]
                    }), l.jsxs("div", {
                        className: "mt-6 grid grid-cols-2 gap-3",
                        children: [l.jsx("div", {
                            children: l.jsxs("a", {
                                href: "#!",
                                className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600",
                                children: [l.jsx("i", {
                                    className: "bi bi-google text-red-500"
                                }), l.jsx("span", {
                                    className: "sr-only",
                                    children: "Sign up with Google"
                                })]
                            })
                        }), l.jsx("div", {
                            children: l.jsxs("a", {
                                href: "#!",
                                className: "w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600",
                                children: [l.jsx("i", {
                                    className: "bi bi-facebook text-blue-600"
                                }), l.jsx("span", {
                                    className: "sr-only",
                                    children: "Sign up with Facebook"
                                })]
                            })
                        })]
                    })]
                }), l.jsxs("p", {
                    className: "mt-8 text-center text-sm text-gray-500 dark:text-gray-400",
                    children: ["Already have an account?", " ", l.jsx("a", {
                        href: "#!",
                        onClick: x => {
                            x.preventDefault(),
                                d("login")
                        }
                        ,
                        className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300",
                        children: "Sign In"
                    })]
                })]
            })
        })
    })
    , _h = ({ setCurrentPage: d }) => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 flex items-center justify-center h-screen",
        children: l.jsxs("div", {
            className: "w-full max-w-sm text-center",
            children: [l.jsxs("div", {
                className: "bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8",
                children: [l.jsx("img", {
                    src: "https://picsum.photos/seed/dave/96/96",
                    alt: "User Avatar",
                    className: "w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200 dark:border-gray-700"
                }), l.jsx("h2", {
                    className: "text-xl font-bold text-gray-800 dark:text-gray-100",
                    children: "Shariq"
                }), l.jsx("p", {
                    className: "text-sm text-gray-500 dark:text-gray-400 mb-6",
                    children: "Enter your password to unlock"
                }), l.jsxs("form", {
                    className: "space-y-4",
                    children: [l.jsxs("div", {
                        className: "relative",
                        children: [l.jsx("div", {
                            className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                            children: l.jsx("i", {
                                className: "bi bi-lock-fill text-gray-400"
                            })
                        }), l.jsx("input", {
                            id: "password",
                            name: "password",
                            type: "password",
                            required: !0,
                            placeholder: "Password",
                            className: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        })]
                    }), l.jsx("div", {
                        children: l.jsx("button", {
                            type: "submit",
                            className: "w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800",
                            children: "Unlock"
                        })
                    })]
                })]
            }), l.jsx("p", {
                className: "mt-6 text-center text-sm",
                children: l.jsx("a", {
                    href: "#!",
                    onClick: x => {
                        x.preventDefault(),
                            d("login")
                    }
                    ,
                    className: "font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300",
                    children: "Sign in as a different user"
                })
            })]
        })
    })
    , Rh = ({ setCurrentPage: d }) => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 flex flex-col items-center justify-center text-center h-screen",
        children: l.jsxs("div", {
            className: "max-w-md",
            children: [l.jsx("h1", {
                className: "text-8xl md:text-9xl font-extrabold text-blue-600 dark:text-blue-500 tracking-tighter",
                children: "404"
            }), l.jsx("h2", {
                className: "mt-4 text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100",
                children: "Oops! Page Not Found."
            }), l.jsx("p", {
                className: "mt-3 text-gray-600 dark:text-gray-400",
                children: "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            }), l.jsx("div", {
                className: "mt-8",
                children: l.jsxs("div", {
                    className: "flex w-full max-w-sm mx-auto",
                    children: [l.jsx("input", {
                        type: "text",
                        placeholder: "Search...",
                        className: "flex-grow px-3 py-2 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    }), l.jsx("button", {
                        className: "px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700 focus:outline-none",
                        children: l.jsx("i", {
                            className: "bi bi-search"
                        })
                    })]
                })
            }), l.jsx("div", {
                className: "mt-6",
                children: l.jsx("button", {
                    onClick: () => d("dashboard"),
                    className: "px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                    children: "Go to Homepage"
                })
            })]
        })
    })
    , Bh = ({ setCurrentPage: d }) => l.jsx("main", {
        className: "flex-grow p-3 md:p-4 flex flex-col items-center justify-center text-center h-screen",
        children: l.jsxs("div", {
            className: "max-w-md",
            children: [l.jsx("i", {
                className: "bi bi-hdd-network-fill text-6xl text-white"
            }), l.jsx("h1", {
                className: "mt-4 text-8xl md:text-9xl font-extrabold text-red-100 dark:text-red-500 tracking-tighter",
                children: "500"
            }), l.jsx("h2", {
                className: "mt-4 text-2xl md:text-3xl font-semibold text-white dark:text-white-100",
                children: "Internal Server Error"
            }), l.jsx("p", {
                className: "mt-3 text-white dark:text-white-400",
                children: "We're sorry, something went wrong on our end. Please try again later or contact support if the problem persists."
            }), l.jsx("div", {
                className: "mt-8",
                children: l.jsx("button", {
                    onClick: () => d("dashboard"),
                    className: "px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
                    children: "Go back to Homepage"
                })
            })]
        })
    })
    , Hh = () => {
        const [d, x] = W.useState(window.innerWidth < 768)
            , [v, u] = W.useState(!1);
        W.useEffect(() => {
            const D = () => {
                window.innerWidth < 768 ? x(!0) : x(!1)
            }
                ;
            return window.addEventListener("resize", D),
                () => window.removeEventListener("resize", D)
        }
            , []);
        const [g, z] = W.useState("dashboard");
        return W.useEffect(() => {
            localStorage.removeItem("theme"),
                localStorage.removeItem("themeColor"),
                document.documentElement.classList.remove("dark"),
                document.documentElement.removeAttribute("data-theme")
        }
            , []),
            l.jsxs("div", {
                className: "text-gray-800 bg-transparent min-h-screen relative",
                children: [l.jsx(Rx, {
                    isCollapsed: d,
                    onToggle: () => x(!d),
                    setCurrentPage: z
                }), l.jsxs("div", {
                    id: "main-content",
                    className: `
                    flex flex-col pt-16 bg-transparent transition-all duration-300 ease-in-out
                    ${d ? "md:ml-20" : "md:ml-64"} ml-0
                `,
                    children: [l.jsx(Hx, {
                        isCollapsed: d,
                        onMenuToggle: () => x(!d),
                        onSettingsToggle: () => u(!0),
                        setCurrentPage: z
                    }), l.jsxs("div", {
                        className: "flex-1",
                        children: [g === "dashboard" && l.jsx(Lx, {}), g === "media" && l.jsx(zh, {}), g === "blog-list" && l.jsx(Ch, {
                            setCurrentPage: z
                        }), g === "blog-detail" && l.jsx(Oh, {
                            setCurrentPage: z
                        }), g === "mail" && l.jsx(Zx, {}), g === "icons" && l.jsx(Fx, {}), g === "profile-page" && l.jsx($x, {}), g === "invoice-page" && l.jsx(Wx, {}), g === "pricing-table" && l.jsx(Ix, {}), g === "timeline" && l.jsx(rh, {}), g === "element" && l.jsx(ih, {}), g === "lock-screen" && l.jsx(_h, {
                            setCurrentPage: z
                        }), g === "404-error" && l.jsx(Rh, {
                            setCurrentPage: z
                        }), g === "500-error" && l.jsx(Bh, {
                            setCurrentPage: z
                        }), g === "login" && l.jsx(Mh, {
                            setCurrentPage: z
                        }), g === "signup" && l.jsx(Uh, {
                            setCurrentPage: z
                        }), g === "button" && l.jsx(nh, {}), g === "wizard" && l.jsx(uh, {}), g === "calendar" && l.jsx(oh, {}), g === "treeview" && l.jsx(xh, {}), g === "grids" && l.jsx(hh, {}), g === "chart" && l.jsx(ph, {}), g === "typography" && l.jsx(vh, {}), g === "form-element" && l.jsx(Nh, {}), g === "advance-form" && l.jsx(wh, {}), g === "text-editor" && l.jsx(Sh, {}), g === "file-upload" && l.jsx(Th, {}), g === "tables" && l.jsx(Eh, {}), g === "map" && l.jsx(Ah, {})]
                    }), l.jsxs("footer", {
                        className: "p-3 text-center text-sm text-white",
                        children: ["Make with Love ♥ ", new Date().getFullYear(), " Thesmile All Rights Reserved"]
                    })]
                }), l.jsx(Qx, {
                    isOpen: v,
                    onClose: () => u(!1)
                })]
            })
    }
    , K0 = document.getElementById("root");
K0 && Mx.createRoot(K0).render(l.jsx(zs.StrictMode, {
    children: l.jsx(Hh, {})
}));
