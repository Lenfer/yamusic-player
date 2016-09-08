!function(t, e) {
    var i; "undefined" != typeof window ? i = window : "undefined" != typeof global && (i = global);
    var n = {},
        r = function(e) {
            if (e in n) return n[e].a;
            if (!t[e]) return void console.error("No such module: " + e);
            var o = n[e] = { a: {} };
            return t[e].call(i, o, o.a, function() {
                return r.apply({}, arguments) }, i), o.a };
    r.call({}, 0) }([function(t, e, i, n) {
    var r = i(1);
    r.build = "music", i(2), i(161), i(169), i(171), i(188) }, function(t, e, i, n) {
    var r = function() {
            var t = document.currentScript || function() {
                    var t = document.getElementsByTagName("script");
                    return t[t.length - 1] }(),
                e = document.createElement("a");
            e.href = t.src;
            var i = e.protocol + "//" + e.host;
            return i.replace(/:\d*$/, "") + "/api/v2.0/" },
        o = "https://music.yandex.ru/api/v2.0";
    try { o = r() } catch (s) {}
    var a = { apiURL: o, build: "unknown" };
    t.a = a }, function(t, e, i, n) { i(3);
    var r = i(1);
    ya.music.Audio.config.flash.path = r.apiURL.replace(/v2\.0\/$/, "") + "audio/dist", delete ya.music.Audio.config, delete ya.music.Audio.Logger, i(44), i(51), i(66), i(158);
    var o = i(67).MusicPlayer,
        s = i(59);
    ya.music.auth = { update: function() {
            return o.b().then(function() {
                return ya.music.auth.getAuth() }, function() {
                throw new Error("Cannot fetch auth data") }) }, getAuth: function() {
            return { logged: s.logged, premium: s.premium, invalid: s.invalid } } } }, function(t, e, i, n) {
    var r = i(4);
    i(32), i(33), i(34), i(35), i(42), t.a = r }, function(t, e, i, n) { "undefined" == typeof window.ya && (window.ya = {});
    var r = window.ya; "undefined" == typeof r.music && (r.music = {}), "undefined" == typeof r.music.Audio && (r.music.Audio = {});
    var o = i(5),
        s = i(6),
        a = i(31);
    r.music.Audio = a.createClass(s), r.music.Audio.config = o, t.a = r.music.Audio }, function(t, e, i, n) {
    var r = { audio: { retry: 3 }, flash: { path: "dist", name: "player-2_1.swf", version: "9.0.28", playerID: "YandexAudioFlashPlayer", callback: "ya.music.Audio._flashCallback", initTimeout: 3e3, loadTimeout: 5e3, clickTimeout: 1e3, heartBeatInterval: 1e3 }, html5: { blacklist: ["linux:mozilla", "unix:mozilla", "macos:mozilla", ":opera", "@NT 5", "@NT 4", ":msie/9"] } };
    t.a = r }, function(t, e, i, n) {
    var r = i(7),
        o = new r("AudioPlayer"),
        s = i(9),
        a = i(11),
        c = i(14),
        u = i(13),
        h = i(5),
        l = i(10),
        f = i(15),
        p = i(16),
        d = i(19),
        E = 1,
        y = { html5: i(20), flash: i(23) },
        v = "@" + u.platform.version + " " + u.platform.os + ":" + u.browser.name + "/" + u.browser.version;
    y.flash.priority = 0, y.html5.priority = h.html5.blacklist.some(function(t) {
        return v.match(t) }) ? -1 : 1, setTimeout(function() { o.info({ flash: { available: y.flash.available, priority: y.flash.priority }, html5: { available: y.html5.available, priority: y.html5.priority, c: !!y.html5.c } }, "audioTypes") }, 0);
    var b = function(t, e) { this.name = E++, s.call(this), this.preferredType = t, this.overlay = e, this.d = b.STATE_INIT, this.e = 0, this.f = 0, this.g = null, this.h = new c, this.whenReady = this.h.i().then(function() { o.info(this, "implementation found", this.j.type), this.j.on("*", function(t, e, i) {
                if (this.k(t, e, i), !e) switch (t) {
                    case b.EVENT_PLAY:
                        this.l(b.STATE_PLAYING);
                        break;
                    case b.EVENT_ENDED:
                    case b.EVENT_SWAP:
                    case b.EVENT_STOP:
                    case b.EVENT_ERROR:
                        o.info(this, "onEnded", t, i), this.l(b.STATE_IDLE);
                        break;
                    case b.EVENT_PAUSE:
                        this.l(b.STATE_PAUSED);
                        break;
                    case b.EVENT_CRASHED:
                        this.l(b.STATE_CRASHED) } }.bind(this)), this.l(b.STATE_IDLE) }.bind(this), function(t) {
            throw o.error(this, p.NO_IMPLEMENTATION, t), this.l(b.STATE_CRASHED), t }.bind(this)), this.m(0) };
    s.mixin(b), l(b, d, !0), b.info = { html5: y.html5.available, flash: y.flash.available }, b.c = y.html5.c, b.prototype.l = function(t) {
        if (t !== b.STATE_PAUSED || this.d === b.STATE_PLAYING) {
            var e = this.d !== t;
            this.d = t, e && (o.info(this, "newState", t), this.trigger(b.EVENT_STATE, t)) } }, b.prototype.m = function(t) {
        function e() {
            var r = i.shift();
            return r ? void n.n(r).then(n.h.resolve, e) : void n.m(t + 1) }
        if (t = t || 0, o.info(this, "_init", t), this.h.pending) { t > h.audio.retry && (o.error(this, p.NO_IMPLEMENTATION), this.h.reject(new p(p.NO_IMPLEMENTATION)));
            var i = [y.html5, y.flash].sort(function(t, e) {
                    return t.available !== e.available ? t.available ? -1 : 1 : t.AudioImplementation.type === this.preferredType ? -1 : e.AudioImplementation.type === this.preferredType ? 1 : e.priority - t.priority }.bind(this)),
                n = this;
            e() } }, b.prototype.n = function(t) { o.info(this, "_initType", t);
        var e = new c;
        try { this.j = new t.AudioImplementation(this.overlay), this.j.whenReady ? this.j.whenReady.then(e.resolve, e.reject) : e.resolve() } catch (i) { e.reject(i), o.warn(this, "_initTypeError", t, i) }
        return e.i() }, b.prototype.o = function(t, e, i) {
        var n = new c,
            r = this;
        this[t] = n;
        var o = function() { e.forEach(function(t) { r.off(t, n.resolve) }), i.forEach(function(t) { r.off(t, n.reject) }), delete r[t] };
        return e.forEach(function(t) { r.on(t, n.resolve) }), i.forEach(function(t) { r.on(t, function(e) {
                var i = e instanceof Error ? e : new p(e || t);
                n.reject(i) }) }), n.i().then(o, o), n.i() }, b.prototype.k = function(t, e, i) { t !== b.EVENT_PROGRESS;
        var n = (e ? b.PRELOADER_EVENT : "") + t;
        switch (t) {
            case b.EVENT_CRASHED:
            case b.EVENT_SWAP:
                this.trigger(t, i);
                break;
            case b.EVENT_ERROR:
                o.error(this, "error", n, i), this.trigger(n, i);
                break;
            case b.EVENT_VOLUME:
                this.trigger(t, this.getVolume());
                break;
            case b.EVENT_PROGRESS:
                this.trigger(n, { duration: this.getDuration(e), loaded: this.getLoaded(e), position: e ? 0 : this.getPosition(), played: e ? 0 : this.getPlayed() });
                break;
            default:
                this.trigger(n) } }, b.prototype.initPromise = function() {
        return this.whenReady }, b.prototype.getState = function() {
        return this.d }, b.prototype.getType = function() {
        return this.j && this.j.type }, b.prototype.getSrc = function(t) {
        return this.j && this.j.getSrc(t) }, b.prototype.play = function(t, e) { o.info(this, "play", o.p(t), e), this.e = 0, this.f = 0, this.q(), this.r && this.r.reject("play"), this.s && this.s.reject("play"), this.t && this.t.reject("play");
        var i = this.o("_whenPlay", [b.EVENT_PLAY], [b.EVENT_STOP, b.EVENT_ERROR, b.EVENT_CRASHED]);
        return i.abort = function() { this.r && (this.r.reject.apply(this.r, arguments), this.stop()) }.bind(this), this.l(b.STATE_PAUSED), this.j.play(t, e), i }, b.prototype.restart = function() {
        return this.getDuration() ? (this.q(), this.setPosition(0), this.e = 0, this.f = 0, this.resume()) : f(new p(p.BAD_STATE)) }, b.prototype.stop = function(t) {
        if (o.info(this, "stop", t), 0 !== t) return this.j.stop(t);
        this.e = 0, this.f = 0, this.r && this.r.reject("stop"), this.s && this.s.reject("stop");
        var e;
        return e = this.t ? this.t.i() : this.o("_whenStop", [b.EVENT_STOP], [b.EVENT_PLAY, b.EVENT_ERROR, b.EVENT_CRASHED]), this.j.stop(), e }, b.prototype.pause = function() {
        if (o.info(this, "pause"), this.d !== b.STATE_PLAYING) return f(new p(p.BAD_STATE));
        var t;
        return this.r && this.r.reject("pause"), t = this.s ? this.s.i() : this.o("_whenPause", [b.EVENT_PAUSE], [b.EVENT_STOP, b.EVENT_PLAY, b.EVENT_ERROR, b.EVENT_CRASHED]), this.j.pause(), t }, b.prototype.resume = function() {
        if (o.info(this, "resume"), this.d === b.STATE_PLAYING && !this.s) return a.resolve();
        if (this.d !== b.STATE_IDLE && this.d !== b.STATE_PAUSED && this.d !== b.STATE_PLAYING) return f(new p(p.BAD_STATE));
        var t;
        return this.s && this.s.reject("resume"), this.r ? t = this.r.i() : (t = this.o("_whenPlay", [b.EVENT_PLAY], [b.EVENT_STOP, b.EVENT_ERROR, b.EVENT_CRASHED]), t.abort = function() { this.r && (this.r.reject.apply(this.r, arguments), this.stop()) }.bind(this)), this.j.resume(), t }, b.prototype.playPreloaded = function(t) {
        if (o.info(this, "playPreloaded", o.p(t)), t || (t = this.getSrc(1)), !this.isPreloaded(t)) return o.warn(this, "playPreloadedBadTrack", p.NOT_PRELOADED), f(new p(p.NOT_PRELOADED));
        this.e = 0, this.f = 0, this.q(), this.r && this.r.reject("playPreloaded"), this.s && this.s.reject("playPreloaded"), this.t && this.t.reject("playPreloaded");
        var e = this.o("_whenPlay", [b.EVENT_PLAY], [b.EVENT_STOP, b.EVENT_ERROR, b.EVENT_CRASHED]);
        e.abort = function() { this.r && (this.r.reject.apply(this.r, arguments), this.stop()) }.bind(this), this.l(b.STATE_PAUSED);
        var i = this.j.playPreloaded();
        return i || (o.warn(this, "playPreloadedError", p.NOT_PRELOADED), this.r.reject(new p(p.NOT_PRELOADED))), e }, b.prototype.preload = function(t, e) {
        if ("msie" === u.browser.name && "9" == u.browser.version[0]) return f(new p(p.NOT_PRELOADED));
        o.info(this, "preload", o.p(t), e), this.u && this.u.reject("preload");
        var i = this.o("_whenPreload", [b.PRELOADER_EVENT + b.EVENT_LOADING, b.EVENT_SWAP], [b.PRELOADER_EVENT + b.EVENT_CRASHED, b.PRELOADER_EVENT + b.EVENT_ERROR, b.PRELOADER_EVENT + b.EVENT_STOP]);
        return i.abort = function() { this.u && (this.u.reject.apply(this.u, arguments), this.stop(1)) }.bind(this), this.j.preload(t, e), i }, b.prototype.isPreloaded = function(t) {
        return this.j.isPreloaded(t) }, b.prototype.isPreloading = function(t) {
        return this.j.isPreloading(t, 1) }, b.prototype.getPosition = function() {
        return this.j.getPosition() || 0 }, b.prototype.setPosition = function(t) {
        return o.info(this, "setPosition", t), t = "flash" == this.j.type ? Math.max(0, Math.min(this.getLoaded() - 1, t)) : Math.max(0, Math.min(this.getDuration() - 1, t)), this.e += this.getPosition() - this.f, this.f = t, this.j.setPosition(t), t }, b.prototype.getDuration = function(t) {
        return this.j.getDuration(t ? 1 : 0) || 0 }, b.prototype.getLoaded = function(t) {
        return this.j.getLoaded(t ? 1 : 0) || 0 }, b.prototype.getPlayed = function() {
        var t = this.getPosition();
        return this.e += t - this.f, this.f = t, this.e }, b.prototype.getVolume = function() {
        return this.j ? this.j.getVolume() : 0 }, b.prototype.setVolume = function(t) {
        return this.j ? this.j.setVolume(t) : 0 }, b.prototype.isDeviceVolume = function() {
        return this.j ? this.j.isDeviceVolume() : !0 }, b.prototype.toggleCrossDomain = function(t) {
        return "html5" !== this.j.type ? (o.warn(this, "toggleCrossDomainFailed", this.j.type), !1) : void this.j.toggleCrossDomain(t) }, b.prototype.toggleWebAudioAPI = function(t) {
        return o.info(this, "toggleWebAudioAPI", t), "html5" !== this.j.type ? (o.warn(this, "toggleWebAudioAPIFailed", this.j.type), !1) : this.j.toggleWebAudioAPI(t) }, b.prototype.setAudioPreprocessor = function(t) {
        return o.info(this, "setAudioPreprocessor"), "html5" !== this.j.type ? (o.warn(this, "setAudioPreprocessorFailed", this.j.type), !1) : this.j.setAudioPreprocessor(t) }, b.prototype.q = function() { this.g = Math.random().toString().slice(2) }, b.prototype.getPlayId = function() {
        return this.g }, b.prototype.v = function() {
        return { index: this.j && this.j.name, src: this.j && this.j.v(), type: this.j && this.j.type } }, t.a = b }, function(t, e, i, n) {
    var r = ["debug", "log", "info", "warn", "error", "trace"],
        o = i(8),
        s = function(t) { this.channel = t };
    s.ignores = [], s.logLevels = [], s.prototype.debug = o, s.prototype.log = o, s.prototype.info = o, s.prototype.warn = o, s.prototype.error = o, s.prototype.trace = o, s.prototype.p = function(t) {
        return s.showUrl(t) }, s.showUrl = function(t) {
        return t }, r.forEach(function(t) { s.prototype[t] = function() {
            var e = [].slice.call(arguments);
            e.unshift(this.channel), e.unshift(t), s.log.apply(s, e) } }), s.log = function(t, e, i) {
        var n = [].slice.call(arguments, 3).map(function(t) {
                return t && t.v && t.v() || t }),
            r = { timestamp: +new Date, level: t, channel: e, w: i, message: n };
        s.ignores[e] || -1 === s.logLevels.indexOf(t) || s.x(r) }, s.x = function(t) {
        try {
            var e = t.level,
                i = t.w && (t.w.y || t.w.name),
                n = t.w && (t.w.v ? t.w.v() : ""); "function" != typeof console[e] ? console.log.apply(console, [e.toUpperCase(), s.z(t.timestamp), "[" + t.channel + (i ? ":" + i : "") + "]", n].concat(t.message)) : console[e].apply(console, [s.z(t.timestamp), "[" + t.channel + (i ? ":" + i : "") + "]", n].concat(t.message)) } catch (r) {} }, s.z = function(t) {
        var e = new Date(t),
            i = e.getMilliseconds();
        return i = i > 100 ? i : i > 10 ? "0" + i : "00" + i, e.toLocaleTimeString() + "." + i }, t.a = s }, function(t, e, i, n) {
    var r = function() {};
    t.a = r }, function(t, e, i, n) {
    var r = i(10),
        o = "_listeners",
        s = "_muted",
        a = function() { this[o] = {}, this[s] = !1 };
    a.mixin = function(t) {
        return r(t.prototype, a.prototype, !0), t }, a.eventize = function(t) {
        return r(t, a.prototype, !0), a.call(t), t }, a.prototype.on = function(t, e) {
        return this[o][t] || (this[o][t] = []), this[o][t].push(e), this }, a.prototype.off = function(t, e) {
        if (!this[o][t]) return this;
        if (!e) return delete this[o][t], this;
        for (var i = this[o][t], n = 0, r = i.length; r > n; n++)
            if (i[n] === e || i[n].callback === e) { i.splice(n, 1), i.length || delete this[o][t];
                break }
        return this }, a.prototype.once = function(t, e) {
        var i = this,
            n = function() { i.off(t, n), e.apply(this, arguments) };
        return n.callback = e, i.on(t, n), this }, a.prototype.clearListeners = function() {
        for (var t in this[o]) this[o].hasOwnProperty(t) && delete this[o][t];
        return this }, a.prototype.trigger = function(t, e) {
        if (this[s]) return this;
        if (e = [].slice.call(arguments, 1), "*" !== t && a.prototype.trigger.apply(this, ["*", t].concat(e)), !this[o][t]) return this;
        for (var i = [].concat(this[o][t]), n = 0, r = i.length; r > n; n++) i[n].apply(null, e);
        return this }, a.prototype.pipeEvents = function(t) {
        return this.on("*", a.prototype.trigger.bind(t)), this }, a.prototype.muteEvents = function() {
        return this[s] = !0, this }, a.prototype.unmuteEvents = function() {
        return delete this[s], this }, t.a = a }, function(t, e, i, n) {
    var r = function(t) {
        var e, i, n = [].slice.call(arguments, 1);
        if (n[n.length - 1] === !0) e = t, n.pop();
        else { e = {};
            for (i in t) t.hasOwnProperty(i) && (e[i] = t[i]) }
        for (var r = 0, o = n.length; o > r; r++)
            for (i in n[r]) n[r].hasOwnProperty(i) && (e[i] = n[r][i]);
        return e };
    t.a = r }, function(t, e, i, n) {
    var r, o = i(12),
        s = i(13);
    r = "function" != typeof window.Promise || "msie" === s.browser.name || "edge" === s.browser.name ? o.Promise : window.Promise, t.a = r }, function(t, e, i, n) {! function(e) {
        var i, n = function() {
                var t = [],
                    i = function(e) {
                        return 1 === t.push(e) },
                    n = function() {
                        var e = t,
                            i = 0,
                            n = t.length;
                        for (t = []; n > i;) e[i++]() };
                if ("function" == typeof setImmediate) return function(t) { i(t) && setImmediate(n) };
                if ("object" == typeof process && process.nextTick) return function(t) { i(t) && process.nextTick(n) };
                var r = e.MutationObserver || e.WebKitMutationObserver;
                if (r) {
                    var o = 1,
                        s = document.createTextNode("");
                    return new r(n).observe(s, { characterData: !0 }),
                        function(t) { i(t) && (s.data = o *= -1) } }
                if (e.postMessage) {
                    var a = !0;
                    if (e.attachEvent) {
                        var c = function() { a = !1 };
                        e.attachEvent("onmessage", c), e.postMessage("__checkAsync", "*"), e.detachEvent("onmessage", c) }
                    if (a) {
                        var u = "__promise" + +new Date,
                            h = function(t) { t.data === u && (t.stopPropagation && t.stopPropagation(), n()) };
                        return e.addEventListener ? e.addEventListener("message", h, !0) : e.attachEvent("onmessage", h),
                            function(t) { i(t) && e.postMessage(u, "*") } } }
                var l = e.document;
                if ("onreadystatechange" in l.createElement("script")) {
                    var f = function() {
                        var t = l.createElement("script");
                        t.onreadystatechange = function() { t.parentNode.removeChild(t), t = t.onreadystatechange = null, n() }, (l.documentElement || l.body).appendChild(t) };
                    return function(t) { i(t) && f() } }
                return function(t) { i(t) && setTimeout(n, 0) } }(),
            r = function(t) { n(function() {
                    throw t }) },
            o = function(t) {
                return "function" == typeof t },
            s = function(t) {
                return null !== t && "object" == typeof t },
            a = Object.prototype.toString,
            c = Array.isArray || function(t) {
                return "[object Array]" === a.call(t) },
            u = function(t) {
                for (var e = [], i = 0, n = t.length; n > i;) e.push(i++);
                return e },
            h = Object.keys || function(t) {
                var e = [];
                for (var i in t) t.hasOwnProperty(i) && e.push(i);
                return e },
            l = function(t) {
                var e = function(e) { this.name = t, this.message = e };
                return e.prototype = new Error, e },
            f = function(t, e) {
                return function(i) { t.call(this, i, e) } },
            p = function() { this.A = new E };
        p.prototype = { i: function() {
                return this.A }, resolve: function(t) { this.A.isResolved() || this.A.B(t) }, reject: function(t) { this.A.isResolved() || (b.isPromise(t) ? (t = t.then(function(t) {
                    var e = b.defer();
                    return e.reject(t), e.i() }), this.A.B(t)) : this.A.C(t)) }, notify: function(t) { this.A.isResolved() || this.A.D(t) } };
        var d = { PENDING: 0, RESOLVED: 1, FULFILLED: 2, REJECTED: 3 },
            E = function(t) {
                if (this.E = i, this.F = d.PENDING, this.G = [], this.H = [], this.I = [], t) {
                    var e = this,
                        n = t.length;
                    t(function(t) { e.isResolved() || e.B(t) }, n > 1 ? function(t) { e.isResolved() || e.C(t) } : i, n > 2 ? function(t) { e.isResolved() || e.D(t) } : i) } };
        E.prototype = { valueOf: function() {
                return this.E }, isResolved: function() {
                return this.F !== d.PENDING }, isFulfilled: function() {
                return this.F === d.FULFILLED }, isRejected: function() {
                return this.F === d.REJECTED }, then: function(t, e, i, n) {
                var r = new p;
                return this.J(r, t, e, i, n), r.i() }, "catch": function(t, e) {
                return this.then(i, t, e) }, K: function(t, e) {
                return this.then(i, t, e) }, always: function(t, e) {
                var i = this,
                    n = function() {
                        return t.call(this, i) };
                return this.then(n, n, e) }, progress: function(t, e) {
                return this.then(i, i, t, e) }, spread: function(t, e, i) {
                return this.then(function(e) {
                    return t.apply(this, e) }, e, i) }, done: function(t, e, i, n) { this.then(t, e, i, n).K(r) }, delay: function(t) {
                var e, i = this.then(function(i) {
                    var n = new p;
                    return e = setTimeout(function() { n.resolve(i) }, t), n.i() });
                return i.always(function() { clearTimeout(e) }), i }, L: function(t) {
                var e = new p,
                    i = setTimeout(function() { e.reject(new b.TimedOutError("timed out")) }, t);
                return this.then(function(t) { e.resolve(t) }, function(t) { e.reject(t) }), e.i().always(function() { clearTimeout(i) }), e.i() }, M: !0, B: function(t) {
                if (!(this.F > d.RESOLVED)) {
                    if (t === this) return void this.C(TypeError("Can't resolve promise with itself"));
                    if (this.F = d.RESOLVED, t && t.M) return void(t.isFulfilled() ? this.N(t.valueOf()) : t.isRejected() ? this.C(t.valueOf()) : t.then(this.N, this.C, this.D, this));
                    if (s(t) || o(t)) {
                        var e;
                        try { e = t.then } catch (i) {
                            return void this.C(i) }
                        if (o(e)) {
                            var n = this,
                                r = !1;
                            try { e.call(t, function(t) { r || (r = !0, n.B(t)) }, function(t) { r || (r = !0, n.C(t)) }, function(t) { n.D(t) }) } catch (i) { r || this.C(i) }
                            return } }
                    this.N(t) } }, N: function(t) { this.F > d.RESOLVED || (this.F = d.FULFILLED, this.E = t, this.O(this.G, t), this.G = this.H = this.I = i) }, C: function(t) { this.F > d.RESOLVED || (this.F = d.REJECTED, this.E = t, this.O(this.H, t), this.G = this.H = this.I = i) }, D: function(t) { this.O(this.I, t) }, J: function(t, e, n, r, s) { n && !o(n) ? (s = n, n = i) : r && !o(r) && (s = r, r = i);
                var a;
                this.isRejected() || (a = { defer: t, fn: o(e) ? e : i, ctx: s }, this.isFulfilled() ? this.O([a], this.E) : this.G.push(a)), this.isFulfilled() || (a = { defer: t, fn: n, ctx: s }, this.isRejected() ? this.O([a], this.E) : this.H.push(a)), this.F <= d.RESOLVED && this.I.push({ defer: t, fn: r, ctx: s }) }, O: function(t, e) {
                var i = t.length;
                if (i) {
                    var r = this.isResolved(),
                        o = this.isFulfilled();
                    n(function() {
                        for (var n, s, a, c = 0; i > c;)
                            if (n = t[c++], s = n.defer, a = n.fn) {
                                var u, h = n.ctx;
                                try { u = h ? a.call(h, e) : a(e) } catch (l) { s.reject(l);
                                    continue }
                                r ? s.resolve(u) : s.notify(u) } else r ? o ? s.resolve(e) : s.reject(e) : s.notify(e) }) } } };
        var y = { cast: function(t) {
                return b.cast(t) }, all: function(t) {
                return b.all(t) }, race: function(t) {
                return b.anyResolved(t) }, resolve: function(t) {
                return b.resolve(t) }, reject: function(t) {
                return b.reject(t) } };
        for (var v in y) y.hasOwnProperty(v) && (E[v] = y[v]);
        var b = { P: p, Promise: E, defer: function() {
                    return new p }, when: function(t, e, i, n, r) {
                    return b.cast(t).then(e, i, n, r) }, K: function(t, e, n) {
                    return b.when(t, i, e, n) }, always: function(t, e, i) {
                    return b.when(t).always(e, i) }, progress: function(t, e, i) {
                    return b.when(t).progress(e, i) }, spread: function(t, e, i, n) {
                    return b.when(t).spread(e, i, n) }, done: function(t, e, i, n, r) { b.when(t).done(e, i, n, r) }, isPromise: function(t) {
                    return s(t) && o(t.then) }, cast: function(t) {
                    return t && t.M ? t : b.resolve(t) }, valueOf: function(t) {
                    return t && o(t.valueOf) ? t.valueOf() : t }, isFulfilled: function(t) {
                    return t && o(t.isFulfilled) ? t.isFulfilled() : !0 }, isRejected: function(t) {
                    return t && o(t.isRejected) ? t.isRejected() : !1 }, isResolved: function(t) {
                    return t && o(t.isResolved) ? t.isResolved() : !0 }, resolve: function(t) {
                    var e = b.defer();
                    return e.resolve(t), e.i() }, fulfill: function(t) {
                    var e = b.defer(),
                        i = e.i();
                    return e.resolve(t), i.isFulfilled() ? i : i.then(null, function(t) {
                        return t }) }, reject: function(t) {
                    var e = b.defer();
                    return e.reject(t), e.i() }, invoke: function(t, i) {
                    var n, r = Math.max(arguments.length - 1, 0);
                    if (r) { n = Array(r);
                        for (var o = 0; r > o;) n[o++] = arguments[o] }
                    try {
                        return b.resolve(n ? t.apply(e, n) : t.call(e)) } catch (s) {
                        return b.reject(s) } }, all: function(t) {
                    var e = new p,
                        i = c(t),
                        n = i ? u(t) : h(t),
                        r = n.length,
                        o = i ? [] : {};
                    if (!r) return e.resolve(o), e.i();
                    var s = r;
                    return b.Q(t, function(t, i) { o[n[i]] = t, --s || e.resolve(o) }, e.reject, e.notify, e, n), e.i() }, allResolved: function(t) {
                    var e = new p,
                        i = c(t),
                        n = i ? u(t) : h(t),
                        r = n.length,
                        o = i ? [] : {};
                    if (!r) return e.resolve(o), e.i();
                    var s = function() {--r || e.resolve(t) };
                    return b.Q(t, s, s, e.notify, e, n), e.i() }, allPatiently: function(t) {
                    return b.allResolved(t).then(function() {
                        var e, i, n, r, o = c(t),
                            s = o ? u(t) : h(t),
                            a = s.length,
                            l = 0;
                        if (!a) return o ? [] : {};
                        for (; a > l;) n = s[l++], r = t[n], b.isRejected(r) ? (e || (e = o ? [] : {}), o ? e.push(r.valueOf()) : e[n] = r.valueOf()) : e || ((i || (i = o ? [] : {}))[n] = b.valueOf(r));
                        if (e) throw e;
                        return i }) }, any: function(t) {
                    var e = new p,
                        i = t.length;
                    if (!i) return e.reject(Error()), e.i();
                    var n, r = 0;
                    return b.Q(t, e.resolve, function(t) { r || (n = t), ++r === i && e.reject(n) }, e.notify, e), e.i() }, anyResolved: function(t) {
                    var e = new p,
                        i = t.length;
                    return i ? (b.Q(t, e.resolve, e.reject, e.notify, e), e.i()) : (e.reject(Error()), e.i()) }, delay: function(t, e) {
                    return b.resolve(t).delay(e) }, L: function(t, e) {
                    return b.resolve(t).L(e) }, Q: function(t, e, i, n, r, o) {
                    for (var s = o ? o.length : t.length, a = 0; s > a;) b.when(t[o ? o[a] : a], f(e, a), i, n, r), ++a }, TimedOutError: l("TimedOut") },
            m = !0; "object" == typeof t && "object" == typeof t.a && (t.a = b, m = !1), "object" == typeof modules && o(modules.define) && (modules.define("vow", function(t) { t(b) }), m = !1), "function" == typeof define && (define(function(t, e, i) { i.a = b }), m = !1), m && (e.vow = b) }(this) }, function(t, e, i, n) {
    var r = navigator.userAgent.toLowerCase(),
        o = /(ucbrowser)\/([\w.]+)/,
        s = /(webkit)[ \/]([\w.]+)/,
        a = /(yabrowser)[ \/]([\w.]+)/,
        c = /(opr|opera)(?:.*version)?[ \/]([\w.]+)/,
        u = /(msie) ([\w.]+)/,
        h = /(edge)\/([\w.]+)/,
        l = /(iemobile)\/([\d\.]+)/,
        f = /(mozilla)(?:.*? rv:([\w.]+))?/,
        p = /^((?!chrome).)*version\/([\d\w\.]+).*(safari)/,
        d = o.exec(r) || p.exec(r) || a.exec(r) || h.exec(r) || l.exec(r) || c.exec(r) || s.exec(r) || u.exec(r) || r.indexOf("compatible") < 0 && f.exec(r) || [],
        E = { name: d[1] || "", version: d[2] || "0" }; "safari" === d[3] && (E.name = d[3]), "msie" === E.name && (document.documentMode ? E.documentMode = document.documentMode : (E.documentMode = 5, document.compatMode && "CSS1Compat" === document.compatMode && (E.documentMode = 7))), "opr" === E.name && (E.name = "opera"), "mozilla" === E.name && "11" === E.version.split(".")[0] && (E.name = "msie");
    var y = /(windows phone|ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,
        v = /(ipad|playbook)/,
        b = /(android)/,
        m = /(mobile)/;
    T = y.exec(r) || [];
    var g = v.exec(r) || !m.exec(r) && b.exec(r) || [];
    T[1] && (T[1] = T[1].replace(/\s/g, "_"));
    var T = { type: T[1] || "", tablet: !!g[1], mobile: T[1] && !g[1] || !1 };
    T.type || (T.type = "pc"), T.os = T.type, "ipad" === T.type || "iphone" === T.type || "ipod" === T.type ? T.os = "ios" : "android" === T.type ? T.os = "android" : "windows phone" === T.type || -1 !== navigator.appVersion.indexOf("Win") ? (T.os = "windows", T.version = navigator.userAgent.match(/win[^ ]* ([^;]*)/i), T.version = T.version && T.version[1]) : -1 !== navigator.appVersion.indexOf("Mac") ? T.os = "macos" : -1 !== navigator.appVersion.indexOf("X11") ? T.os = "unix" : -1 !== navigator.appVersion.indexOf("Linux") && (T.os = "linux");
    var A = !0;
    try {
        var _ = document.createElement("audio");
        _.volume = .63, A = Math.abs(_.volume - .63) > .01 } catch (N) { A = !0 }
    var w = { browser: E, platform: T, onlyDeviceVolume: A };
    t.a = w }, function(t, e, i, n) {
    var r = i(11),
        o = i(8),
        s = function() {
            var t = this,
                e = new r(function(e, i) { t.resolve = e, t.reject = i }),
                i = e.then(function(e) {
                    return t.resolved = !0, t.pending = !1, e }, function(e) {
                    throw t.rejected = !0, t.pending = !1, e });
            i["catch"](o), this.pending = !0, this.rejected = !1, this.i = function() {
                return i } };
    s.when = function() {
        var t = new s,
            e = [].slice.call(arguments),
            i = e.length,
            n = function() { i--, 0 >= i && t.resolve() };
        return e.forEach(function(e) { e.then(n, t.reject) }), e = null, t.i.abort = t.reject, t.i() }, t.a = s }, function(t, e, i, n) {
    var r = i(8),
        o = i(11),
        s = function(t) {
            var e = o.reject(t);
            return e["catch"](r), e };
    t.a = s }, function(t, e, i, n) {
    var r = i(17),
        o = function(t) { r.call(this, t) };
    o.prototype = r.create("AudioError"), o.NO_IMPLEMENTATION = "cannot find suitable implementation", o.NOT_PRELOADED = "track is not preloaded", o.BAD_STATE = "action is not permited from current state", o.FLASH_BLOCKER = "flash is rejected by flash blocker plugin", o.FLASH_UNKNOWN_CRASH = "flash is crashed without reason", o.FLASH_INIT_TIMEOUT = "flash init timed out", o.FLASH_INTERNAL_ERROR = "flash internal error", o.FLASH_EMMITER_NOT_FOUND = "flash event emmiter not found", o.FLASH_NOT_RESPONDING = "flash player doesn't response", t.a = o }, function(t, e, i, n) {
    var r = i(18),
        o = function(t, e) {
            var i = new Error(t, e);
            i.name = this.name, this.message = i.message, this.stack = i.stack };
    o.create = function(t) {
        var e = r(o);
        return e.name = t, e }, o.prototype = r(Error), o.prototype.name = "ErrorClass", t.a = o }, function(t, e, i, n) {
    var r = function(t) {
        var e = function() {};
        return e.prototype = t.prototype, new e };
    t.a = r }, function(t, e, i, n) {
    var r = {};
    r.EVENT_PLAY = "play", r.EVENT_STOP = "stop", r.EVENT_PAUSE = "pause", r.EVENT_PROGRESS = "progress", r.EVENT_LOADING = "loading", r.EVENT_LOADED = "loaded", r.EVENT_VOLUME = "volumechange", r.EVENT_ENDED = "ended", r.EVENT_CRASHED = "crashed", r.EVENT_ERROR = "error", r.EVENT_STATE = "state", r.EVENT_SWAP = "swap", r.PRELOADER_EVENT = "preloader:", r.STATE_INIT = "init", r.STATE_CRASHED = "crashed", r.STATE_IDLE = "idle", r.STATE_PLAYING = "playing", r.STATE_PAUSED = "paused", t.a = r }, function(t, e, i, n) {
    var r = i(7),
        o = new r("AudioHTML5"),
        s = i(13),
        a = i(9),
        c = i(19),
        u = i(21),
        h = 1;
    if (e.available = function() {
            var t = !0;
            try {
                var e = document.createElement("audio"),
                    i = e.canPlayType("audio/mpeg");
                i && "no" !== i || (o.warn(this, "HTML5 detection failed with reason", i), t = !1) } catch (n) { o.warn(this, "HTML5 detection failed with error", n), t = !1 }
            return o.info(this, "detection", t), t }(), s.platform.mobile || s.platform.tablet) l = null, o.info(this, "WebAudioAPI not allowed for mobile");
    else try {
        var l = new AudioContext;
        o.info(this, "WebAudioAPI context created") } catch (f) { l = null, o.info(this, "WebAudioAPI not detected") }
    var p = function() { this.name = h++, a.call(this), this.on("*", function(t) { t !== c.EVENT_PROGRESS }.bind(this)), this.webAudioApi = !1, this.activeLoader = 0, this.volume = 1, this.loaders = [], this.R(), this.R(), this.S(0) };
    a.mixin(p), e.type = p.type = p.prototype.type = "html5", p.prototype.R = function() {
        var t = this,
            e = new u;
        e.index = this.loaders.push(e) - 1, e.on("*", function(i, n) {
            var r = (t.loaders.length + e.index - t.activeLoader) % t.loaders.length;
            t.trigger(i, r, n) }), this.webAudioApi && e.createSource(l) }, p.prototype.S = function(t) { this.activeLoader = (this.activeLoader + t) % this.loaders.length, this.trigger(c.EVENT_SWAP, t), 0 !== t && this.stop(t) }, p.prototype.T = function(t) {
        return t = t || 0, this.loaders[(this.activeLoader + t) % this.loaders.length] }, p.prototype.toggleCrossDomain = function(t) { this.loaders.forEach(function(e) { e.toggleCrossDomain(t) }) }, p.prototype.toggleWebAudioAPI = function(t) {
        return l ? (o.info(this, "toggleWebAudioAPI", t), this.webAudioApi == t ? t : (t ? (this.U = l.createGain(), this.U.gain.value = this.volume, this.U.connect(l.destination), this.preprocessor && this.preprocessor.output.connect(this.U), this.loaders.forEach(function(t) { t.audio.volume = 1, t.createSource(l), t.output.disconnect(), t.output.connect(this.preprocessor ? this.preprocessor.input : this.U) }.bind(this))) : this.U && (this.preprocessor && this.preprocessor.output.disconnect(), this.U.disconnect(), delete this.U, this.loaders.forEach(function(t) { t.audio.volume = this.volume, t.output.disconnect(), t.output.connect(l.destination) }.bind(this))), this.webAudioApi = t, t)) : (o.warn(this, "toggleWebAudioAPIError", t), !1) }, p.prototype.setAudioPreprocessor = function(t) {
        return this.webAudioApi ? (o.info(this, "setAudioPreprocessor"), this.preprocessor === t ? !0 : (this.preprocessor && this.preprocessor.output.disconnect(), this.preprocessor = t, t ? (this.loaders.forEach(function(e) { e.output.disconnect(), e.output.connect(t.input) }), t.output.connect(this.U), !0) : (this.loaders.forEach(function(t) { t.output.disconnect(), t.output.connect(this.U) }.bind(this)), !0))) : (o.warn(this, "setAudioPreprocessorError", t), !1) }, p.prototype.play = function(t, e) {
        var i = this.T();
        i.load(t), i.play(0) }, p.prototype.pause = function() {
        var t = this.T();
        t.pause() }, p.prototype.resume = function() {
        var t = this.T();
        t.play() }, p.prototype.stop = function(t) {
        var e = this.T(t || 0);
        e.stop(), this.trigger(c.EVENT_STOP, t) }, p.prototype.getPosition = function() {
        return this.T().audio.currentTime }, p.prototype.setPosition = function(t) { this.T().setPosition(t - .001) }, p.prototype.getDuration = function(t) {
        return this.T(t).audio.duration }, p.prototype.getLoaded = function(t) {
        var e = this.T(t);
        return e.audio.buffered.length ? e.audio.buffered.end(0) - e.audio.buffered.start(0) : 0 }, p.prototype.getVolume = function() {
        return this.volume }, p.prototype.setVolume = function(t) { this.volume = t, this.webAudioApi ? this.U.gain.value = t : this.loaders.forEach(function(e) { e.audio.volume = t }), this.trigger(c.EVENT_VOLUME) }, p.prototype.preload = function(t, e, i) { i = null == i ? 1 : i;
        var n = this.T(i);
        n.load(t) }, p.prototype.isPreloaded = function(t, e) { e = null == e ? 1 : e;
        var i = this.T(e);
        return i.src === t && !i.notLoading }, p.prototype.isPreloading = function(t, e) { e = null == e ? 1 : e;
        var i = this.T(e);
        return i.src === t }, p.prototype.playPreloaded = function(t) { t = null == t ? 1 : t;
        var e = this.T(t);
        return e.src ? (this.S(t), e.play(), !0) : !1 }, p.prototype.getSrc = function(t) {
        return this.T(t).src }, p.prototype.isDeviceVolume = function() {
        return s.onlyDeviceVolume }, p.prototype.v = function() {
        try {
            return { main: o.p(this.getSrc(0)), preloader: o.p(this.getSrc(1)) } } catch (t) {
            return "" } }, e.c = l, e.AudioImplementation = p }, function(t, e, i, n) {
    var r = i(7),
        o = new r("AudioHTML5Loader"),
        s = i(9),
        a = i(14),
        c = i(19),
        u = i(22),
        h = i(8),
        l = 1,
        f = function() { this.name = l++, s.call(this), this.on("*", function(t) { t !== c.EVENT_PROGRESS }.bind(this)), this.V = {}, this.src = "", this.position = 0, this.lastUpdate = 0, this.notLoading = !0, this.output = null, this.W = this.X.bind(this), this.Y = this.Z.bind(this), this.$ = this._.bind(this), this.aa = this.ba.bind(this), this.ca = this.da.bind(this), this.ea = this.fa.bind(this), this.ga = this.ha.bind(this), this.ia = this.ja.bind(this), this.ka = this.trigger.bind(this, c.EVENT_PLAY), this.la() };
    s.mixin(f), f.ma = 30, f.EVENT_NATIVE_PLAY = "play", f.EVENT_NATIVE_PAUSE = "pause", f.EVENT_NATIVE_TIMEUPDATE = "timeupdate", f.EVENT_NATIVE_ENDED = "ended", f.EVENT_NATIVE_DURATION = "durationchange", f.EVENT_NATIVE_LOADING = "progress", f.EVENT_NATIVE_META = "loadedmetadata", f.EVENT_NATIVE_CANPLAY = "canplay", f.EVENT_NATIVE_ERROR = "error", f.na = function() {}, f.na.step = "user", f.prototype.ba = function() {
        var t = +new Date;
        t - this.lastUpdate < f.ma || (this.lastUpdate = t, this.trigger(c.EVENT_PROGRESS)) }, f.prototype.da = function() {
        if (this.ba(), this.audio.buffered.length) {
            var t = this.audio.buffered.end(0) - this.audio.buffered.start(0);
            this.notLoading && t && (this.notLoading = !1, this.trigger(c.EVENT_LOADING)), t >= this.audio.duration - .1 && this.trigger(c.EVENT_LOADED) } }, f.prototype.fa = function() { this.trigger(c.EVENT_PROGRESS), this.trigger(c.EVENT_ENDED), this.ended = !0, this.playing = !1, this.audio.pause() }, f.prototype.ha = function(t) {
        if (this.src) {
            if (2 == this.audio.error.code) return o.warn(this, "Network error. Restarting...", o.p(this.src)), this.position = this.audio.currentTime, void this.Z();
            var e = new u(this.audio.error ? u.html5[this.audio.error.code] : t instanceof Error ? t.message : t, this.src);
            this.playing = !1, this.trigger(c.EVENT_ERROR, e) } }, f.prototype.ja = function() { this.ended || this.trigger(c.EVENT_PAUSE) }, f.prototype.oa = function() { document.body.addEventListener("mousedown", this.$, !0), document.body.addEventListener("keydown", this.$, !0), document.body.addEventListener("touchstart", this.$, !0) }, f.prototype.pa = function() { document.body.removeEventListener("mousedown", this.$, !0), document.body.removeEventListener("keydown", this.$, !0), document.body.removeEventListener("touchstart", this.$, !0) }, f.prototype.qa = function() { this.audio.addEventListener(f.EVENT_NATIVE_PAUSE, this.ia), this.audio.addEventListener(f.EVENT_NATIVE_PLAY, this.ka), this.audio.addEventListener(f.EVENT_NATIVE_ENDED, this.ea), this.audio.addEventListener(f.EVENT_NATIVE_TIMEUPDATE, this.aa), this.audio.addEventListener(f.EVENT_NATIVE_DURATION, this.aa), this.audio.addEventListener(f.EVENT_NATIVE_LOADING, this.ca), this.audio.addEventListener(f.EVENT_NATIVE_ERROR, this.ga) }, f.prototype.ra = function() { this.audio.removeEventListener(f.EVENT_NATIVE_PAUSE, this.ia), this.audio.removeEventListener(f.EVENT_NATIVE_PLAY, this.ka), this.audio.removeEventListener(f.EVENT_NATIVE_ENDED, this.ea), this.audio.removeEventListener(f.EVENT_NATIVE_TIMEUPDATE, this.aa), this.audio.removeEventListener(f.EVENT_NATIVE_DURATION, this.aa), this.audio.removeEventListener(f.EVENT_NATIVE_LOADING, this.ca), this.audio.removeEventListener(f.EVENT_NATIVE_ERROR, this.ga) }, f.prototype.la = function() { this.muteEvents(), this.audio = document.createElement("audio"), this.audio.loop = !1, this.audio.preload = this.audio.autobuffer = "auto", this.audio.autoplay = !1, this.audio.src = "", this.oa(), this.sa = f.na, this.qa() }, f.prototype.ta = function() { this.muteEvents(), this.pa(), this.ra(), this.audio = null }, f.prototype._ = function() {
        this.pa(), this.sa = function(t) { this.sa && (this.audio.removeEventListener(f.EVENT_NATIVE_PLAY, this.sa), this.audio.removeEventListener(f.EVENT_NATIVE_CANPLAY, this.sa), this.audio.removeEventListener(f.EVENT_NATIVE_META, this.sa), this.audio.removeEventListener(f.EVENT_NATIVE_ERROR, this.sa), this.sa = function() { this.sa && (this.audio.removeEventListener(f.EVENT_NATIVE_PAUSE, this.sa), delete this.sa, this.unmuteEvents(), o.info(this, "_startupAudio:ready")) }.bind(this), this.sa.step = "pause", this.audio.addEventListener(f.EVENT_NATIVE_PAUSE, this.sa), this.audio.pause()) }.bind(this), this.sa.step = "play", this.audio.addEventListener(f.EVENT_NATIVE_PLAY, this.sa), this.audio.addEventListener(f.EVENT_NATIVE_CANPLAY, this.sa), this.audio.addEventListener(f.EVENT_NATIVE_META, this.sa), this.audio.addEventListener(f.EVENT_NATIVE_ERROR, this.sa),
            this.audio.load(), this.audio.play()
    }, f.prototype.ua = function(t) { this.pa(), this.unmuteEvents(), this.sa && (this.audio.removeEventListener(f.EVENT_NATIVE_PLAY, this.sa), this.audio.removeEventListener(f.EVENT_NATIVE_CANPLAY, this.sa), this.audio.removeEventListener(f.EVENT_NATIVE_META, this.sa), this.audio.removeEventListener(f.EVENT_NATIVE_ERROR, this.sa), this.audio.removeEventListener(f.EVENT_NATIVE_PAUSE, this.sa), o.warn(this, "_startupAudio:interrupted", this.sa.step, t), delete this.sa) }, f.prototype.va = function(t, e, i) {
        if (!this.V[t]) {
            var n = new a;
            if (this.V[t] = n, e.call(this)) n.resolve();
            else {
                for (var r = function() { e.call(this) && n.resolve() }.bind(this), o = function() {
                        for (var t = 0, e = i.length; e > t; t++) this.audio.removeEventListener(i[t], r) }.bind(this), s = 0, c = i.length; c > s; s++) this.audio.addEventListener(i[s], r);
                n.i().then(o, o) } }
        return this.V[t].i() }, f.prototype.wa = function(t, e) {
        var i;
        (i = this.V[t]) && (delete this.V[t], i.reject(e)) }, f.prototype.xa = function(t) {
        for (var e in this.V) this.V.hasOwnProperty(e) && this.wa(e, t) }, f.ya = [f.EVENT_NATIVE_META, f.EVENT_NATIVE_CANPLAY], f.prototype.za = function() {
        return this.audio.readyState > this.audio.HAVE_METADATA }, f.prototype.Aa = function() {
        return this.va("metadata", this.za, f.ya) }, f.Ba = [f.EVENT_NATIVE_LOADING], f.prototype.Ca = function() { this.Da = this.Da && clearTimeout(this.Da) || setTimeout(function() { this.wa("loaded", "timeout") }.bind(this), 5e3);
        var t = Math.min(this.position + 45, this.audio.duration);
        return this.audio.buffered.length && this.audio.buffered.end(0) - this.audio.buffered.start(0) >= t }, f.prototype.Ea = function() {
        var t = this.va("loaded", this.Ca, f.Ba);
        return t.cleanTimer || (t.cleanTimer = function() { this.Da = clearTimeout(this.Da) }.bind(this), t.then(t.cleanTimer, t.cleanTimer)), t }, f.Fa = [f.EVENT_NATIVE_TIMEUPDATE], f.prototype.Ga = function() {
        var t = Math.min(this.position + .2, this.audio.duration);
        return this.audio.currentTime >= t }, f.prototype.Ha = function() {
        return this.va("playing", this.Ga, f.Fa) }, f.prototype.Ia = function() {
        if (!this.V.startPlaying) {
            var t = new a;
            this.V.startPlaying = t;
            var e, i = function(t) { n = !0, this.wa("startPlaying", t) }.bind(this),
                n = !1,
                r = function() { clearTimeout(e) };
            this.Ha().then(function() { n = !0, t.resolve(), o.info(this, "startPlaying:success") }.bind(this), i), this.Ea().then(function() { n || (e = setTimeout(function() { t.reject("timeout"), this.wa("playing", "timeout"), o.warn(this, "startPlaying:failed") }.bind(this), 5e3)) }.bind(this), i), this.Ha().then(r, r), t.i().then(r, r) }
        return this.V.startPlaying.i() }, f.prototype.load = function(t) { this.xa("load"), this.ua("load"), this.ended = !1, this.playing = !1, this.notLoading = !0, this.position = 0, this.src = t, this.audio.src = t, this.audio.load() }, f.prototype.stop = function() { this.xa("stop"), this.ua("stop"), this.load("") }, f.prototype.X = function() { this.audio.currentTime = this.position, this.playing && (this.ua("startPlay"), this.audio.play(), this.Ia().then(function() { this.retry = 0 }.bind(this), this.Y)) }, f.prototype.Z = function(t) {
        if (o.info(this, "_restart", t, this.position, this.playing), this.src && (!t || "timeout" === t)) {
            if (this.retry++, this.retry > 5) return this.playing = !1, void this.trigger(c.EVENT_ERROR, new u(u.DONT_START, this.src));
            var e = this.position,
                i = this.playing;
            this.load(this.src), i ? this.Ja(e) : this.setPosition(e) } }, f.prototype.play = function(t) {
        return this.retry = 0, this.Ja(t) }, f.prototype.Ja = function(t) { this.playing || (this.ua("play"), this.ended = !1, this.playing = !0, this.position = null == t ? this.position || 0 : t, this.Aa().then(this.W, h)) }, f.prototype.pause = function() { this.playing = !1, this.wa("startPlaying", "pause"), this.ua("pause"), this.audio.pause(), this.position = this.audio.currentTime }, f.prototype.setPosition = function(t) {
        return isFinite(t) ? (this.position = t, void this.Aa().then(function() { this.audio.currentTime = this.position }.bind(this), h)) : void o.warn(this, "setPositionFailed", t) }, f.prototype.toggleCrossDomain = function(t) { t ? this.audio.crossOrigin = "anonymous" : this.audio.removeAttribute("crossOrigin"), this.Z() }, f.prototype.createSource = function(t) {
        if (!this.output) {
            var e = !this.audio.crossOrigin;
            this.audio.crossOrigin = "anonymous", this.output = t.createMediaElementSource(this.audio), this.output.connect(t.destination), e && this.Z() } }, f.prototype.destroySource = function() { this.output && (o.warn(this, "destroySource"), this.output.disconnect(), this.output = null, this.xa("destroy"), this.ta(), this.la(), this._(), this.Z()) }, f.prototype.destroy = function() { this.output && (this.output.disconnect(), this.output = null), this.xa(), this.ta(), this.Y = null, this.W = null, this.V = null }, f.prototype.v = function() {
        return { init: !!this.sa && this.sa.step, src: o.p(this.src), playing: this.playing, ended: this.ended, notLoading: this.notLoading, position: this.position } }, t.a = f
}, function(t, e, i, n) {
    var r = i(17),
        o = function(t, e) { r.call(this, t), this.src = e };
    o.prototype = r.create("PlaybackError"), o.CONNECTION_ABORTED = "Connection aborted", o.NETWORK_ERROR = "Network error", o.DECODE_ERROR = "Decode error", o.BAD_DATA = "Bad data", o.DONT_START = "Playback start error", o.html5 = { 1: o.CONNECTION_ABORTED, 2: o.NETWORK_ERROR, 3: o.DECODE_ERROR, 4: o.BAD_DATA }, t.a = o }, function(t, e, i, n) {
    var r, o = i(5),
        s = i(24),
        a = i(13),
        c = i(7),
        u = new c("AudioFlash"),
        h = i(25),
        l = i(29),
        f = i(9),
        p = 1,
        d = s.getFlashPlayerVersion();
    a.flashVersion = d.major + "." + d.minor + "." + d.release, e.available = s.hasFlashPlayerVersion(o.flash.version), u.info(this, "detection", e.available);
    var E = function(t, e) { this.name = p++, (!r || e) && (r = new h(t)), f.call(this), this.whenReady = r.createPlayer(this), this.whenReady.then(function(t) { u.info(this, "ready", t) }.bind(this), function(t) { u.error(this, "failed", t) }.bind(this)) };
    f.mixin(E), e.type = E.type = E.prototype.type = "flash", Object.keys(l.prototype).filter(function(t) {
        return l.prototype.hasOwnProperty(t) && "_" !== t[0] }).map(function(t) { E.prototype[t] = function() {
            if (!/^get/.test(t), !this.hasOwnProperty("id")) return u.warn(this, "player is not ready"), null;
            var e = [].slice.call(arguments);
            return e.unshift(this.id), r.flash[t].apply(r.flash, e) } }), E.prototype.isDeviceVolume = function() {
        return !1 }, E.prototype.v = function() {
        try {
            return this.hasOwnProperty("id") ? { main: u.p(this.getSrc(0)), preloader: u.p(this.getSrc(1)) } : { main: "not ready", preloader: "not ready" } } catch (t) {
            return "" } }, e.AudioImplementation = E }, function(t, e, i, n) {
    var r = function() {
        function t() {
            if (!H) {
                try {
                    var t = M.getElementsByTagName("body")[0].appendChild(v("span"));
                    t.parentNode.removeChild(t) } catch (e) {
                    return }
                H = !0;
                for (var i = j.length, n = 0; i > n; n++) j[n]() } }

        function e(t) { H ? t() : j[j.length] = t }

        function i(t) {
            if (typeof x.addEventListener != R) x.addEventListener("load", t, !1);
            else if (typeof M.addEventListener != R) M.addEventListener("load", t, !1);
            else if (typeof x.attachEvent != R) b(x, "onload", t);
            else if ("function" == typeof x.onload) {
                var e = x.onload;
                x.onload = function() { e(), t() } } else x.onload = t }

        function n() { U ? o() : s() }

        function o() {
            var t = M.getElementsByTagName("body")[0],
                e = v(L);
            e.setAttribute("type", I);
            var i = t.appendChild(e);
            if (i) {
                var n = 0;! function() {
                    if (typeof i.GetVariable != R) {
                        var r = i.GetVariable("$version");
                        r && (r = r.split(" ")[1].split(","), B.pv = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]) } else if (10 > n) return n++, void setTimeout(arguments.callee, 10);
                    t.removeChild(e), i = null, s() }() } else s() }

        function s() {
            var t = F.length;
            if (t > 0)
                for (var e = 0; t > e; e++) {
                    var i = F[e].id,
                        n = F[e].callbackFn,
                        r = { Ka: !1, id: i };
                    if (B.pv[0] > 0) {
                        var o = y(i);
                        if (o)
                            if (!m(F[e].swfVersion) || B.wk && B.wk < 312)
                                if (F[e].expressInstall && c()) {
                                    var s = {};
                                    s.data = F[e].expressInstall, s.width = o.getAttribute("width") || "0", s.height = o.getAttribute("height") || "0", o.getAttribute("class") && (s.styleclass = o.getAttribute("class")), o.getAttribute("align") && (s.align = o.getAttribute("align"));
                                    for (var l = {}, f = o.getElementsByTagName("param"), p = f.length, d = 0; p > d; d++) "movie" != f[d].getAttribute("name").toLowerCase() && (l[f[d].getAttribute("name")] = f[d].getAttribute("value"));
                                    u(s, l, i, n) } else h(o), n && n(r);
                        else T(i, !0), n && (r.Ka = !0, r.ref = a(i), n(r)) } else if (T(i, !0), n) {
                        var E = a(i);
                        E && typeof E.SetVariable != R && (r.Ka = !0, r.ref = E), n(r) } } }

        function a(t) {
            var e = null,
                i = y(t);
            if (i && "OBJECT" == i.nodeName)
                if (typeof i.SetVariable != R) e = i;
                else {
                    var n = i.getElementsByTagName(L)[0];
                    n && (e = n) }
            return e }

        function c() {
            return !G && m("6.0.65") && (B.win || B.mac) && !(B.wk && B.wk < 312) }

        function u(t, e, i, n) { G = !0, w = n || null, S = { Ka: !1, id: i };
            var r = y(i);
            if (r) { "OBJECT" == r.nodeName ? (_ = l(r), N = null) : (_ = r, N = i), t.id = V, (typeof t.width == R || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) && (t.width = "310"), (typeof t.height == R || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) && (t.height = "137"), M.title = M.title.slice(0, 47) + " - Flash Player Installation";
                var o = B.ie && B.win ? "ActiveX" : "PlugIn",
                    s = "MMredirectURL=" + x.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + o + "&MMdoctitle=" + M.title;
                if (typeof e.flashvars != R ? e.flashvars += "&" + s : e.flashvars = s, B.ie && B.win && 4 != r.readyState) {
                    var a = v("div");
                    i += "SWFObjectNew", a.setAttribute("id", i), r.parentNode.insertBefore(a, r), r.style.display = "none",
                        function() { 4 == r.readyState ? r.parentNode.removeChild(r) : setTimeout(arguments.callee, 10) }() }
                f(t, e, i) } }

        function h(t) {
            if (B.ie && B.win && 4 != t.readyState) {
                var e = v("div");
                t.parentNode.insertBefore(e, t), e.parentNode.replaceChild(l(t), e), t.style.display = "none",
                    function() { 4 == t.readyState ? t.parentNode.removeChild(t) : setTimeout(arguments.callee, 10) }() } else t.parentNode.replaceChild(l(t), t) }

        function l(t) {
            var e = v("div");
            if (B.win && B.ie) e.innerHTML = t.innerHTML;
            else {
                var i = t.getElementsByTagName(L)[0];
                if (i) {
                    var n = i.childNodes;
                    if (n)
                        for (var r = n.length, o = 0; r > o; o++) 1 == n[o].nodeType && "PARAM" == n[o].nodeName || 8 == n[o].nodeType || e.appendChild(n[o].cloneNode(!0)) } }
            return e }

        function f(t, e, i) {
            var n, r = y(i);
            if (B.wk && B.wk < 312) return n;
            if (r)
                if (typeof t.id == R && (t.id = i), B.ie && B.win) {
                    var o = "";
                    for (var s in t) t[s] != Object.prototype[s] && ("data" == s.toLowerCase() ? e.movie = t[s] : "styleclass" == s.toLowerCase() ? o += ' class="' + t[s] + '"' : "classid" != s.toLowerCase() && (o += " " + s + '="' + t[s] + '"'));
                    var a = "";
                    for (var c in e) e[c] != Object.prototype[c] && (a += '<param name="' + c + '" value="' + e[c] + '" />');
                    r.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + o + ">" + a + "</object>", q[q.length] = t.id, n = y(t.id) } else {
                    var u = v(L);
                    u.setAttribute("type", I);
                    for (var h in t) t[h] != Object.prototype[h] && ("styleclass" == h.toLowerCase() ? u.setAttribute("class", t[h]) : "classid" != h.toLowerCase() && u.setAttribute(h, t[h]));
                    for (var l in e) e[l] != Object.prototype[l] && "movie" != l.toLowerCase() && p(u, l, e[l]);
                    r.parentNode.replaceChild(u, r), n = u }
            return n }

        function p(t, e, i) {
            var n = v("param");
            n.setAttribute("name", e), n.setAttribute("value", i), t.appendChild(n) }

        function d(t) {
            var e = y(t);
            e && "OBJECT" == e.nodeName && (B.ie && B.win ? (e.style.display = "none", function() { 4 == e.readyState ? E(t) : setTimeout(arguments.callee, 10) }()) : e.parentNode.removeChild(e)) }

        function E(t) {
            var e = y(t);
            if (e) {
                for (var i in e) "function" == typeof e[i] && (e[i] = null);
                e.parentNode.removeChild(e) } }

        function y(t) {
            var e = null;
            try { e = M.getElementById(t) } catch (i) {}
            return e }

        function v(t) {
            return M.createElement(t) }

        function b(t, e, i) { t.attachEvent(e, i), Y[Y.length] = [t, e, i] }

        function m(t) {
            var e = B.pv,
                i = t.split(".");
            return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, e[0] > i[0] || e[0] == i[0] && e[1] > i[1] || e[0] == i[0] && e[1] == i[1] && e[2] >= i[2] ? !0 : !1 }

        function g(t, e, i, n) {
            if (!B.ie || !B.mac) {
                var r = M.getElementsByTagName("head")[0];
                if (r) {
                    var o = i && "string" == typeof i ? i : "screen";
                    if (n && (P = null, k = null), !P || k != o) {
                        var s = v("style");
                        s.setAttribute("type", "text/css"), s.setAttribute("media", o), P = r.appendChild(s), B.ie && B.win && typeof M.styleSheets != R && M.styleSheets.length > 0 && (P = M.styleSheets[M.styleSheets.length - 1]), k = o }
                    B.ie && B.win ? P && typeof P.addRule == L && P.addRule(t, e) : P && typeof M.createTextNode != R && P.appendChild(M.createTextNode(t + " {" + e + "}")) } } }

        function T(t, e) {
            if (W) {
                var i = e ? "visible" : "hidden";
                H && y(t) ? y(t).style.visibility = i : g("#" + t, "visibility:" + i) } }

        function A(t) {
            var e = /[\\\"<>\.;]/,
                i = null != e.exec(t);
            return i && typeof encodeURIComponent != R ? encodeURIComponent(t) : t }
        var _, N, w, S, P, k, R = "undefined",
            L = "object",
            O = "Shockwave Flash",
            D = "ShockwaveFlash.ShockwaveFlash",
            I = "application/x-shockwave-flash",
            V = "SWFObjectExprInst",
            C = "onreadystatechange",
            x = window,
            M = document,
            K = navigator,
            U = !1,
            j = [n],
            F = [],
            q = [],
            Y = [],
            H = !1,
            G = !1,
            W = !0,
            B = function() {
                var t = typeof M.getElementById != R && typeof M.getElementsByTagName != R && typeof M.createElement != R,
                    e = K.userAgent.toLowerCase(),
                    i = K.platform.toLowerCase(),
                    n = i ? /win/.test(i) : /win/.test(e),
                    r = i ? /mac/.test(i) : /mac/.test(e),
                    o = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                    s = !1,
                    a = [0, 0, 0],
                    c = null;
                if (typeof K.plugins != R && typeof K.plugins[O] == L) c = K.plugins[O].description, !c || typeof K.mimeTypes != R && K.mimeTypes[I] && !K.mimeTypes[I].enabledPlugin || (U = !0, s = !1, c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if (typeof x.ActiveXObject != R) try {
                    var u = new ActiveXObject(D);
                    u && (c = u.GetVariable("$version"), c && (s = !0, c = c.split(" ")[1].split(","), a = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)])) } catch (h) {}
                return { w3: t, pv: a, wk: o, ie: s, win: n, mac: r } }();
        return function() { B.w3 && ((typeof M.readyState != R && "complete" == M.readyState || typeof M.readyState == R && (M.getElementsByTagName("body")[0] || M.body)) && t(), H || (typeof M.addEventListener != R && M.addEventListener("DOMContentLoaded", t, !1), B.ie && B.win && (M.attachEvent(C, function() { "complete" == M.readyState && (M.detachEvent(C, arguments.callee), t()) }), x == top && ! function() {
                    if (!H) {
                        try { M.documentElement.doScroll("left") } catch (e) {
                            return void setTimeout(arguments.callee, 0) }
                        t() } }()), B.wk && ! function() {
                    return H ? void 0 : /loaded|complete/.test(M.readyState) ? void t() : void setTimeout(arguments.callee, 0) }(), i(t))) }(),
            function() { B.ie && B.win && window.attachEvent("onunload", function() {
                    for (var t = Y.length, e = 0; t > e; e++) Y[e][0].detachEvent(Y[e][1], Y[e][2]);
                    for (var i = q.length, n = 0; i > n; n++) d(q[n]);
                    for (var o in B) B[o] = null;
                    B = null;
                    for (var s in r) r[s] = null;
                    r = null }) }(), { registerObject: function(t, e, i, n) {
                    if (B.w3 && t && e) {
                        var r = {};
                        r.id = t, r.swfVersion = e, r.expressInstall = i, r.callbackFn = n, F[F.length] = r, T(t, !1) } else n && n({ Ka: !1, id: t }) }, getObjectById: function(t) {
                    return B.w3 ? a(t) : void 0 }, embedSWF: function(t, i, n, r, o, s, a, h, l, p) {
                    var d = { Ka: !1, id: i };
                    B.w3 && !(B.wk && B.wk < 312) && t && i && n && r && o ? (T(i, !1), e(function() { n += "", r += "";
                        var e = {};
                        if (l && typeof l === L)
                            for (var E in l) e[E] = l[E];
                        e.data = t, e.width = n, e.height = r;
                        var y = {};
                        if (h && typeof h === L)
                            for (var v in h) y[v] = h[v];
                        if (a && typeof a === L)
                            for (var b in a) typeof y.flashvars != R ? y.flashvars += "&" + b + "=" + a[b] : y.flashvars = b + "=" + a[b];
                        if (m(o)) {
                            var g = f(e, y, i);
                            e.id == i && T(i, !0), d.Ka = !0, d.ref = g } else {
                            if (s && c()) return e.data = s, void u(e, y, i, p);
                            T(i, !0) }
                        p && p(d) })) : p && p(d) }, switchOffAutoHideShow: function() { W = !1 }, ua: B, getFlashPlayerVersion: function() {
                    return { major: B.pv[0], minor: B.pv[1], release: B.pv[2] } }, hasFlashPlayerVersion: m, createSWF: function(t, e, i) {
                    return B.w3 ? f(t, e, i) : void 0 }, showExpressInstall: function(t, e, i, n) { B.w3 && c() && u(t, e, i, n) }, removeSWF: function(t) { B.w3 && d(t) }, createCSS: function(t, e, i, n) { B.w3 && g(t, e, i, n) }, addDomLoadEvent: e, addLoadEvent: i, getQueryParamValue: function(t) {
                    var e = M.location.search || M.location.hash;
                    if (e) {
                        if (/\?/.test(e) && (e = e.split("?")[1]), null == t) return A(e);
                        for (var i = e.split("&"), n = 0; n < i.length; n++)
                            if (i[n].substring(0, i[n].indexOf("=")) == t) return A(i[n].substring(i[n].indexOf("=") + 1)) }
                    return "" }, expressInstallCallback: function() {
                    if (G) {
                        var t = y(V);
                        t && _ && (t.parentNode.replaceChild(_, t), N && (T(N, !0), B.ie && B.win && (_.style.display = "block")), w && w(S)), G = !1 } } } }();
    t.a = r }, function(t, e, i, n) {
    var r = i(7),
        o = new r("FlashManager"),
        s = i(5),
        a = i(19),
        c = i(26),
        u = i(29),
        h = i(11),
        l = i(14),
        f = i(16),
        p = i(30),
        d = function(t) { this.d = "init", this.overlay = t, this.emmiters = [];
            var e = this.La = new l;
            this.whenReady = this.La.i();
            var i = s.flash.callback.split("."),
                n = i.pop(),
                r = window;
            if (i.forEach(function(t) { r[t] || (r[t] = {}), r = r[t] }), r[n] = this.Ma.bind(this), this.Na = setTimeout(this.Oa.bind(this), s.flash.loadTimeout), c(s.flash.path + "/" + s.flash.name, s.flash.version, s.flash.playerID, this.Pa.bind(this), {}, t), t) {
                var a;
                t.addEventListener("mousedown", function() { a = a || setTimeout(function() { e.reject(new f(f.FLASH_NOT_RESPONDING)) }, s.flash.clickTimeout) }, !0) }
            this.whenReady.then(function(t) { a = a && clearTimeout(a), o.info(this, "ready", t) }.bind(this), function(t) { o.error(this, "failed", t) }.bind(this)) };
    d.EVENT_INIT = "init", d.EVENT_FAIL = "failed", d.EVENT_ERROR = "error", d.EVENT_DEBUG = "debug", d.prototype.Pa = function(t) { clearTimeout(this.Na), delete this.Na, t.Ka ? (this.flash = new u(t.ref), "ready" === this.d ? this.La.resolve(t.ref) : this.overlay || (this.Qa = setTimeout(this.Ra.bind(this), s.flash.initTimeout))) : (this.d = "failed", this.La.reject(new f(t.Sa ? f.FLASH_BLOCKER : f.FLASH_UNKNOWN_CRASH))) }, d.prototype.Oa = function() { this.d = "failed", this.La.reject(new p(p.TIMEOUT)) }, d.prototype.Ra = function() { this.d = "failed", this.La.reject(new f(f.FLASH_INIT_TIMEOUT)) }, d.prototype.Ta = function() { this.d = "ready", this.Qa && (clearTimeout(this.Qa), delete this.Qa), this.flash && (this.La.resolve(this.flash), this.Ua = setInterval(this.Va.bind(this), 1e3)) }, d.prototype.Ma = function(t, e, i, n) {
        return "failed" === this.d ? void o.warn(this, "onEventFailed", t, e, i, n) : (t === d.EVENT_DEBUG ? o.info(this, "flashDEBUG", e, i, n) : t === d.EVENT_ERROR && o.warn(this, "flashError", e, i, n), t === d.EVENT_INIT ? this.Ta() : t === d.EVENT_FAIL ? (o.error(this, "failed", f.FLASH_INTERNAL_ERROR), void this.La.reject(new f(f.FLASH_INTERNAL_ERROR))) : void(-1 == e ? h.resolve().then(function() { this.emmiters.forEach(function(e) { e.trigger(t, i, n) }) }.bind(this)) : this.emmiters[e] ? h.resolve().then(function() { this.emmiters[e].trigger(t, i, n) }.bind(this)) : o.error(this, f.FLASH_EMMITER_NOT_FOUND, e))) }, d.prototype.Va = function() {
        try { this.flash.Wa() } catch (t) { o.error(this, "crashed", t), this.Ma(a.EVENT_CRASHED, -1, t) } }, d.prototype.createPlayer = function(t) {
        var e = this.whenReady.then(function() {
            return t.id = this.flash.Xa(), this.emmiters[t.id] = t, t.id }.bind(this));
        return e.then(function(t) {}.bind(this), function(t) { o.error(this, "createPlayerError", t) }.bind(this)), e }, t.a = d }, function(t, e, i, n) {
    var r = i(27),
        o = i(28),
        s = i(13),
        a = "windows" === s.platform.os && "safari" === s.browser.name,
        c = "ya-flash-player-wrapper";
    t.a = function(t, e, i, n, s, u, h, l) {
        var f = document.createElement("div");
        f.id = "wrapper_" + i, f.innerHTML = '<div id="' + i + '"></div>', h = h || "1000", l = l || "1000";
        var p, d, E, y;
        return u && !a ? (p = o, d = h, E = l, y = { allowscriptaccess: "always", wmode: "transparent" }, f.className = c, f.style.cssText = "position: relative; width: 100%; height: 100%; overflow: hidden;", u.appendChild(f)) : (p = r, d = E = "1", y = { allowscriptaccess: "always" }, f.style.cssText = "position: absolute; left: -1px; top: -1px; width: 0px; height: 0px; overflow: hidden;", document.body.appendChild(f)), p.embedSWF(t, i, d, E, e, "", s, y, {}, n), f } }, function(t, e, i, n) {
    function r(t) { t.parentNode.removeChild(t) }
    var o = i(24),
        s = { Ya: "fbn-swf-wrapper", Za: 500, $a: [function(t, e) {
                return e.childNodes.length > 1 }, function(t) {
                return t.type && "application/x-shockwave-flash" != t.type }, function(t) {
                return !t.parentNode }, function(t) {
                return t.parentNode.className.indexOf("CTFnodisplay") > -1 }], embedSWF: function(t, e, i, n, a, c, u, h, l, f, p) { o && o.addDomLoadEvent(function() {
                    var d = document.getElementById(e);
                    if (d) {
                        var E = document.createElement("div");
                        E.className = s.Ya, d.parentNode.replaceChild(E, d), E.appendChild(d), o.embedSWF(t, e, i, n, a, c, u, h, l, function(t) {
                            function i(t) {
                                if (p !== !1) { o.removeSWF(e), r(E);
                                    var i = document.getElementById("CTFstack");
                                    i && r(i);
                                    var n = document.body.lastChild;
                                    n && "ujs_flashblock_placeholder" == n.className && r(n) }
                                t.Ka = !1, t.Sa = !0, f(t) }
                            if (t && t.Ka !== !1) {
                                var n = t.ref,
                                    a = !1;
                                try { a = n && n.getSVGDocument && n.getSVGDocument() } catch (c) {}
                                a ? i(t) : window.setTimeout(function() {
                                    for (var e = s.$a, r = 0, o = e.length; o > r; r++)
                                        if (e[r](n, E)) return void i(t);
                                    f(t) }, s.Za) } else f(t) }) } }) } };
    t.a = s }, function(t, e, i, n) {
    var r = i(24),
        o = { Ya: "femb-swf-wrapper", Za: 500, embedSWF: function(t, e, i, n, s, a, c, u, h, l) { r.addDomLoadEvent(function() {
                    var f = document.getElementById(e);
                    if (f) {
                        var p = document.createElement("div");
                        p.className = o.Ya, f.parentNode.replaceChild(p, f), p.appendChild(f), r.embedSWF(t, e, i, n, s, a, c, u, h, function(t) {
                            function e(t) { t.Ka = !1, l(t) }
                            if (t && t.Ka !== !1) {
                                var i = t.ref,
                                    n = !1;
                                try { n = i && i.getSVGDocument && i.getSVGDocument() } catch (r) {}
                                n ? e(t) : window.setTimeout(function() { l(t) }, o.Za) } else l(t) }) } }) } };
    t.a = o }, function(t, e, i, n) {
    var r = i(7),
        o = new r("FlashInterface"),
        s = function(t) { this.flash = ya.music.Audio._a = t };
    s.prototype.ab = function(t) {
        try {
            return this.flash.call.apply(this.flash, arguments) } catch (e) {
            return o.error(this, "_callFlashError", e, arguments[0], arguments[1], arguments[2]), null } }, s.prototype.Wa = function() { this.ab("heartBeat", -1) }, s.prototype.Xa = function() {
        return this.ab("addPlayer", -1) }, s.prototype.setVolume = function(t, e) { this.ab("setVolume", -1, e) }, s.prototype.getVolume = function() {
        return this.ab("getVolume", -1) }, s.prototype.play = function(t, e, i) { this.ab("play", t, e, i) }, s.prototype.stop = function(t, e) { this.ab("stop", t, e || 0) }, s.prototype.pause = function(t) { this.ab("pause", t) }, s.prototype.resume = function(t) { this.ab("resume", t) }, s.prototype.getPosition = function(t) {
        return this.ab("getPosition", t) }, s.prototype.setPosition = function(t, e) { this.ab("setPosition", t, e) }, s.prototype.getDuration = function(t, e) {
        return this.ab("getDuration", t, e || 0) }, s.prototype.getLoaded = function(t, e) {
        return this.ab("getLoaded", t, e || 0) }, s.prototype.preload = function(t, e, i, n) {
        return this.ab("preload", t, e, i, null == n ? 1 : n) }, s.prototype.isPreloaded = function(t, e, i) {
        return this.ab("isPreloaded", t, e, null == i ? 1 : i) }, s.prototype.isPreloading = function(t, e, i) {
        return this.ab("isPreloading", t, e, null == i ? 1 : i) }, s.prototype.playPreloaded = function(t, e) {
        return this.ab("playPreloaded", t, null == e ? 1 : e) }, s.prototype.getSrc = function(t, e) {
        return this.ab("getSrc", t, e || 0) }, t.a = s }, function(t, e, i, n) {
    var r = i(17),
        o = function(t) { r.call(this, t) };
    o.prototype = r.create("LoaderError"), o.TIMEOUT = "request timeout", o.FAILED = "request failed", t.a = o }, function(t, e, i, n) {
    var r = i(9),
        o = function(t) {
            if (t) {
                for (var e in t) "_" === e[0] || "function" != typeof t[e] || t[e] === Object.prototype[e] || t.hasOwnProperty(e) || r.prototype.hasOwnProperty(e) || (this[e] = t[e].bind(t));
                t.pipeEvents && (r.call(this), this.on = r.prototype.on, this.once = r.prototype.once, this.off = r.prototype.off, this.clearListeners = r.prototype.clearListeners, t.pipeEvents(this)) } };
    o.exportStatic = function(t, e, i) { i = i || [], Object.keys(t).forEach(function(n) { t.hasOwnProperty(n) && "_" !== n[0] && "prototype" !== n && -1 === i.indexOf(n) && (e[n] = t[n]) }) }, o.createClass = function(t, e, i) {
        var n = function() {
                var e = function() {};
                e.prototype = t.prototype;
                var i = new e;
                return t.apply(i, arguments), i.bb() },
            r = function() {};
        r.prototype = (e || o).prototype, n.prototype = new r;
        var s;
        for (var a in t.prototype) s = t.prototype[a], Object.prototype[a] != s && "function" != typeof s && "_" !== a[0] && (n.prototype[a] = s);
        var c = function(t) {
            var e = o.prototype;
            o.prototype = n.prototype;
            var i = new o(t);
            return o.prototype = e, i };
        return t.prototype.bb = function() {
            return this.cb || (this.cb = c(this)), this.cb }, i || o.exportStatic(t, n), n }, t.a = o }, function(t, e, i, n) { i(4);
    var r = i(16),
        o = i(22);
    ya.music.Audio.AudioError = r, ya.music.Audio.PlaybackError = o }, function(t, e, i, n) { i(4);
    var r = i(30);
    ya.music.Audio.LoaderError = r }, function(t, e, i, n) { i(4);
    var r = i(7);
    ya.music.Audio.Logger = r }, function(t, e, i, n) { i(36), ya.music.Audio.fx.Equalizer = i(37) }, function(t, e, i, n) { i(4), ya.music.Audio.fx = {} }, function(t, e, i, n) {
    var r = i(9),
        o = i(10),
        s = i(38),
        a = i(39),
        c = function(t, e) { r.call(this), this.preamp = new a(t, "highshelf", 0), this.preamp.on("*", this.db.bind(this, this.preamp)), e = e || c.DEFAULT_BANDS;
            var i;
            this.bands = e.map(function(n, r) {
                var o = new a(t, 0 == r ? "lowshelf" : r + 1 < e.length ? "peaking" : "highshelf", n);
                return o.on("*", this.db.bind(this, o)), i ? i.filter.connect(o.filter) : this.preamp.filter.connect(o.filter), i = o, o }.bind(this)), this.input = this.preamp.filter, this.output = this.bands[this.bands.length - 1].filter };
    r.mixin(c), o(c, s, !0), c.DEFAULT_BANDS = i(40), c.DEFAULT_PRESETS = i(41), c.prototype.db = function(t, e, i) { this.trigger(e, t.getFreq(), i) }, c.prototype.loadPreset = function(t) { t.bands.forEach(function(t, e) { this.bands[e].setValue(t) }.bind(this)), this.preamp.setValue(t.preamp) }, c.prototype.savePreset = function() {
        return { preamp: this.preamp.getValue(), bands: this.bands.map(function(t) {
                return t.getValue() }) } }, c.prototype.guessPreamp = function() {
        for (var t = 0, e = 0, i = this.bands.length; i > e; e++) t += this.bands[e].getValue();
        return -t / 2 }, t.a = c }, function(t, e, i, n) {
    var r = {};
    r.EVENT_CHANGE = "change", t.a = r }, function(t, e, i, n) {
    var r = i(9),
        o = i(38),
        s = function(t, e, i) { r.call(this), this.type = e, this.filter = t.createBiquadFilter(), this.filter.type = e, this.filter.frequency.value = i, this.filter.Q.value = 1, this.filter.gain.value = 0 };
    r.mixin(s), s.prototype.getFreq = function() {
        return this.filter.frequency.value }, s.prototype.getValue = function() {
        return this.filter.gain.value }, s.prototype.setValue = function(t) { this.filter.gain.value = t, this.trigger(o.EVENT_CHANGE, t) }, t.a = s }, function(t, e, i, n) { t.a = [60, 170, 310, 600, 1e3, 3e3, 6e3, 12e3, 14e3, 16e3] }, function(t, e, i, n) { t.a = [{ id: "default", preamp: 0, bands: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }, { id: "Classical", preamp: -.5, bands: [-.5, -.5, -.5, -.5, -.5, -.5, -3.5, -3.5, -3.5, -4.5] }, { id: "Club", preamp: -3.359999895095825, bands: [-.5, -.5, 4, 2.5, 2.5, 2.5, 1.5, -.5, -.5, -.5] }, { id: "Dance", preamp: -2.1599998474121094, bands: [4.5, 3.5, 1, -.5, -.5, -2.5, -3.5, -3.5, -.5, -.5] }, { id: "Full Bass", preamp: -3.5999999046325684, bands: [4, 4.5, 4.5, 2.5, .5, -2, -4, -5, -5.5, -5.5] }, { id: "Full Bass & Treble", preamp: -5.039999961853027, bands: [3.5, 2.5, -.5, -3.5, -2, .5, 4, 5.5, 6, 6] }, { id: "Full Treble", preamp: -6, bands: [-4.5, -4.5, -4.5, -2, 1, 5.5, 8, 8, 8, 8] }, { id: "Laptop Speakers / Headphone", preamp: -4.079999923706055, bands: [2, 5.5, 2.5, -1.5, -1, .5, 2, 4.5, 6, 7] }, { id: "Large Hall", preamp: -3.5999999046325684, bands: [5, 5, 2.5, 2.5, -.5, -2, -2, -2, -.5, -.5] }, { id: "Live", preamp: -2.6399998664855957, bands: [-2, -.5, 2, 2.5, 2.5, 2.5, 2, 1, 1, 1] }, { id: "Party", preamp: -2.6399998664855957, bands: [3.5, 3.5, -.5, -.5, -.5, -.5, -.5, -.5, 3.5, 3.5] }, { id: "Pop", preamp: -3.119999885559082, bands: [-.5, 2, 3.5, 4, 2.5, -.5, -1, -1, -.5, -.5] }, { id: "Reggae", preamp: -4.079999923706055, bands: [-.5, -.5, -.5, -2.5, -.5, 3, 3, -.5, -.5, -.5] }, { id: "Rock", preamp: -5.039999961853027, bands: [4, 2, -2.5, -4, -1.5, 2, 4, 5.5, 5.5, 5.5] }, { id: "Ska", preamp: -5.519999980926514, bands: [-1, -2, -2, -.5, 2, 2.5, 4, 4.5, 5.5, 4.5] }, { id: "Soft", preamp: -4.799999713897705, bands: [2, .5, -.5, -1, -.5, 2, 4, 4.5, 5.5, 6] }, { id: "Soft Rock", preamp: -2.6399998664855957, bands: [2, 2, 1, -.5, -2, -2.5, -1.5, -.5, 1, 4] }, { id: "Techno", preamp: -3.8399999141693115, bands: [4, 2.5, -.5, -2.5, -2, -.5, 4, 4.5, 4.5, 4] }] }, function(t, e, i, n) { i(36), ya.music.Audio.fx.volumeLib = i(43) }, function(t, e, i, n) {
    var r = {};
    r.EPSILON = .01, r.eb = 20 / Math.log(10), r.toExponent = function(t) {
        var e = Math.pow(r.EPSILON, 1 - t);
        return e > r.EPSILON ? e : 0 }, r.fromExponent = function(t) {
        return 1 - Math.log(Math.max(t, r.EPSILON)) / Math.log(r.EPSILON) }, r.toDBFS = function(t) {
        return Math.log(t) * r.eb }, r.fromDBFS = function(t) {
        return Math.exp(t / r.eb) }, t.a = r }, function(t, e, i, n) { i(45), i(46), ya.music.info = i(47), ya.music.lib = {}, ya.music.lib.trackId = i(48) }, function(t, e, i, n) { "undefined" == typeof window.ya && (window.ya = {});
    var r = window.ya; "undefined" == typeof r.music && (r.music = {}) }, function(t, e, i, n) {!window.addEventListener && function(t, e, i, n, r, o, s) { t[n] = e[n] = i[n] = function(t, e) {
            var i = this;
            s.unshift([i, t, e, function(t) { t.currentTarget = i, t.preventDefault = function() { t.returnValue = !1 }, t.stopPropagation = function() { t.cancelBubble = !0 }, t.target = t.srcElement || i, e && e.call && e.call(i, t) }]), this.attachEvent("on" + t, s[0][3]) }, t[r] = e[r] = i[r] = function(t, e) {
            for (var i, n = 0; i = s[n]; ++n)
                if (i[0] == this && i[1] == t && i[2] == e) return this.detachEvent("on" + t, s.splice(n, 1)[0][3]) }, t[o] = e[o] = i[o] = function(t) {
            return this.fireEvent("on" + t.type, t) } }(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []), Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1),
            i = this,
            n = function() {},
            r = function() {
                return i.apply(this instanceof n && t ? this : t, e.concat(Array.prototype.slice.call(arguments))) };
        return n.prototype = this.prototype, r.prototype = new n, r }), Object.keys || (Object.keys = function() { "use strict";
        var t = Object.prototype.hasOwnProperty,
            e = !{ toString: null }.propertyIsEnumerable("toString"),
            i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            n = i.length;
        return function(r) {
            if ("object" != typeof r && ("function" != typeof r || null === r)) throw new TypeError("Object.keys called on non-object");
            var o, s, a = [];
            for (o in r) t.call(r, o) && a.push(o);
            if (e)
                for (s = 0; n > s; s++) t.call(r, i[s]) && a.push(i[s]);
            return a } }()), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
        var i;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var n = Object(this),
            r = n.length >>> 0;
        if (0 === r) return -1;
        var o = +e || 0;
        if (Math.abs(o) === 1 / 0 && (o = 0), o >= r) return -1;
        for (i = Math.max(o >= 0 ? o : r - Math.abs(o), 0); r > i;) {
            if (i in n && n[i] === t) return i;
            i++ }
        return -1 }), Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
        var i, n;
        if (null == this) throw new TypeError(" this is null or not defined");
        var r = Object(this),
            o = r.length >>> 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (arguments.length > 1 && (i = e), n = 0; o > n;) {
            var s;
            n in r && (s = r[n], t.call(i, s, n, r)), n++ } }), Array.prototype.map || (Array.prototype.map = function(t, e) {
        var i, n, r;
        if (null == this) throw new TypeError(" this is null or not defined");
        var o = Object(this),
            s = o.length >>> 0;
        if ("function" != typeof t) throw new TypeError(t + " is not a function");
        for (arguments.length > 1 && (i = e), n = new Array(s), r = 0; s > r;) {
            var a, c;
            r in o && (a = o[r], c = t.call(i, a, r, o), n[r] = c), r++ }
        return n }), Array.prototype.filter || (Array.prototype.filter = function(t) { "use strict";
        if (void 0 === this || null === this) throw new TypeError;
        var e = Object(this),
            i = e.length >>> 0;
        if ("function" != typeof t) throw new TypeError;
        for (var n = [], r = arguments.length >= 2 ? arguments[1] : void 0, o = 0; i > o; o++)
            if (o in e) {
                var s = e[o];
                t.call(r, s, o, e) && n.push(s) }
        return n }), "undefined" == typeof console && (console = {}), "function" != typeof console.log && (console.log = function() {}), "function" != typeof console.info && (console.info = console.log), "function" != typeof console.warn && (console.warn = console.log), "function" != typeof console.error && (console.error = console.log), "function" != typeof console.debug && (console.debug = console.log) }, function(t, e, i, n) { t.a = i(13) }, function(t, e, i, n) {
    var r = i(49).apply;
    t.a = function(t) {
        if (!(t instanceof Object)) return "" + t;
        var e = r(".albums[0].id[0]", t);
        return t.id + (e ? ":" + e : "") } }, function(t, e, i, n) { t.a = i(50) }, function(t, e, i, n) {
    ! function() {
        function e(t) {
            return Function("data,subst", r(n(t))) }
        var i = { PATH: 1, SELECTOR: 2, OBJ_PRED: 3, POS_PRED: 4, LOGICAL_EXPR: 5, COMPARISON_EXPR: 6, MATH_EXPR: 7, CONCAT_EXPR: 8, UNARY_EXPR: 9, POS_EXPR: 10, LITERAL: 11 },
            n = function() {
                function t(t) { U = t.split(""), j = 0, F = null, q = U.length;
                    var i = e(),
                        n = k();
                    return n.type !== Y.EOP && M(n), i }

                function e() {
                    for (var t, e = n(); T("|");) k(), (t || (t = [e])).push(n());
                    return t ? { type: i.CONCAT_EXPR, args: t } : e }

                function n() {
                    return T("(") ? r() : s() }

                function r() { w("(");
                    var t = e();
                    w(")");
                    for (var n, r = []; n = o();) r.push(n);
                    return r.length ? t.type === i.PATH ? (t.parts = t.parts.concat(r), t) : (r.unshift(t), { type: i.PATH, parts: r }) : t }

                function o() {
                    return T("[") ? u() : T("{") ? h() : T("(") ? r() : void 0 }

                function s() { A() || M(k());
                    var t, e = !1;
                    T("^") ? (k(), e = !0) : N() && (t = k().val.substr(1));
                    for (var n, r = []; n = a();) r.push(n);
                    return { type: i.PATH, fromRoot: e, subst: t, parts: r } }

                function a() {
                    return _() ? c() : o() }

                function c() {
                    var t, e = k().val,
                        n = S();
                    return (T("*") || n.type === Y.ID || n.type === Y.STR) && (t = k().val), { type: i.SELECTOR, selector: e, prop: t } }

                function u() { w("[");
                    var t = v();
                    return w("]"), { type: i.POS_PRED, arg: t } }

                function h() { w("{");
                    var t = l();
                    return w("}"), { type: i.OBJ_PRED, arg: t } }

                function l() {
                    for (var t, e = f(); T("||");) k(), (t || (t = [e])).push(f());
                    return t ? { type: i.LOGICAL_EXPR, op: "||", args: t } : e }

                function f() {
                    for (var t, e = p(); T("&&");) k(), (t || (t = [e])).push(p());
                    return t ? { type: i.LOGICAL_EXPR, op: "&&", args: t } : e }

                function p() {
                    for (var t = d(); T("==") || T("!=") || T("===") || T("!==") || T("^=") || T("^==") || T("$==") || T("$=") || T("*==") || T("*=");) t = { type: i.COMPARISON_EXPR, op: k().val, args: [t, p()] };
                    return t }

                function d() {
                    for (var t = E(); T("<") || T(">") || T("<=") || T(">=");) t = { type: i.COMPARISON_EXPR, op: k().val, args: [t, d()] };
                    return t }

                function E() {
                    for (var t = y(); T("+") || T("-");) t = { type: i.MATH_EXPR, op: k().val, args: [t, E()] };
                    return t }

                function y() {
                    for (var t = b(); T("*") || T("/") || T("%");) t = { type: i.MATH_EXPR, op: k().val, args: [t, y()] };
                    return t }

                function v() {
                    if (T(":")) return k(), { type: i.POS_EXPR, toIdx: b() };
                    var t = b();
                    return T(":") ? (k(),
                        T("]") ? { type: i.POS_EXPR, fromIdx: t } : { type: i.POS_EXPR, fromIdx: t, toIdx: b() }) : { type: i.POS_EXPR, idx: t }
                }

                function b() {
                    return T("!") || T("-") ? { type: i.UNARY_EXPR, op: k().val, arg: b() } : m() }

                function m() {
                    var t = S(),
                        e = t.type;
                    return e === Y.STR || e === Y.NUM || e === Y.BOOL ? { type: i.LITERAL, val: k().val } : A() ? s() : T("(") ? g() : M(k()) }

                function g() { w("(");
                    var t = l();
                    return w(")"), t }

                function T(t) {
                    var e = S();
                    return e.type === Y.PUNCT && e.val === t }

                function A() {
                    return _() || N() || T("^") }

                function _() {
                    var t = S();
                    if (t.type === Y.PUNCT) {
                        var e = t.val;
                        return "." === e || ".." === e }
                    return !1 }

                function N() {
                    var t = S();
                    return t.type === Y.ID && "$" === t.val[0] }

                function w(t) {
                    var e = k();
                    (e.type !== Y.PUNCT || e.val !== t) && M(e) }

                function S() {
                    if (null !== F) return F;
                    var t = j;
                    return F = P(), j = t, F }

                function P() {
                    for (; L(U[j]);) ++j;
                    if (j >= q) return { type: Y.EOP, range: [j, j] };
                    var t = x();
                    return t || (t = I()) || (t = V()) || (t = C()) ? t : (t = { range: [j, j] }, j >= q ? t.type = Y.EOP : t.val = U[j], void M(t)) }

                function k() {
                    var t;
                    return F ? (j = F.range[1], t = F, F = null, t) : P() }

                function R(t) {
                    return "0123456789".indexOf(t) >= 0 }

                function L(t) {
                    return " " === t }

                function O(t) {
                    return "$" === t || "@" === t || "_" === t || t >= "a" && "z" >= t || t >= "A" && "Z" >= t }

                function D(t) {
                    return O(t) || t >= "0" && "9" >= t }

                function I() {
                    var t = U[j];
                    if (O(t)) {
                        for (var e = j, i = t; ++j < q && (t = U[j], D(t));) i += t;
                        return "true" === i || "false" === i ? { type: Y.BOOL, val: "true" === i, range: [e, j] } : { type: Y.ID, val: i, range: [e, j] } } }

                function V() {
                    if ('"' === U[j]) {
                        for (var t, e = ++j, i = "", n = !1; q > j;) {
                            if (t = U[j++], "\\" === t) t = U[j++];
                            else if ('"' === t) { n = !0;
                                break }
                            i += t }
                        return n ? { type: Y.STR, val: i, range: [e, j] } : void 0 } }

                function C() {
                    var t = j,
                        e = U[j],
                        i = "." === e;
                    if (i || R(e)) {
                        for (var n = e; ++j < q;) {
                            if (e = U[j], "." === e) {
                                if (i) return;
                                i = !0 } else if (!R(e)) break;
                            n += e }
                        return { type: Y.NUM, val: i ? parseFloat(n) : parseInt(n, 10), range: [t, j] } } }

                function x() {
                    var t = j,
                        e = U[j],
                        i = U[j + 1];
                    if ("." === e) {
                        if (R(i)) return;
                        return "." === U[++j] ? { type: Y.PUNCT, val: "..", range: [t, ++j] } : { type: Y.PUNCT, val: ".", range: [t, j] } }
                    if ("=" === i) {
                        var n = U[j + 2];
                        if ("=" === n) {
                            if ("=!^$*".indexOf(e) >= 0) return { type: Y.PUNCT, val: e + i + n, range: [t, j += 3] } } else if ("=!^$*><".indexOf(e) >= 0) return { type: Y.PUNCT, val: e + i, range: [t, j += 2] } }
                    return e !== i || "|" !== e && "&" !== e ? ":{}()[]^+-*/%!><|".indexOf(e) >= 0 ? { type: Y.PUNCT, val: e, range: [t, ++j] } : void 0 : { type: Y.PUNCT, val: e + i, range: [t, j += 2] } }

                function M(t) { t.type === Y.EOP && K(t, H.UNEXP_EOP), K(t, H.UNEXP_TOKEN, t.val) }

                function K(t, e) {
                    var i = Array.prototype.slice.call(arguments, 2),
                        n = e.replace(/%(\d)/g, function(t, e) {
                            return i[e] || "" }),
                        r = new Error(n);
                    throw r.column = t.range[0], r }
                var U, j, F, q, Y = { ID: 1, NUM: 2, STR: 3, BOOL: 4, PUNCT: 5, EOP: 6 },
                    H = { UNEXP_TOKEN: 'Unexpected token "%0"', UNEXP_EOP: "Unexpected end of path" };
                return t
            }(),
            r = function() {
                function t() {
                    if (N.length) return N.shift();
                    var t = "v" + ++_;
                    return A.push(t), t }

                function e() {
                    for (var t = arguments, e = t.length; e--;) N.push(t[e]) }

                function n(t) {
                    if (T = [], A = ["res"], _ = 0, N = [], u(t, "res", "data"), T.unshift("var ", Array.isArray ? "isArr = Array.isArray" : 'toStr = Object.prototype.toString, isArr = function(o) { return toStr.call(o) === "[object Array]"; }', ", concat = Array.prototype.concat", ",", A.join(","), ";"), t.type === i.PATH) {
                        var e = t.parts[t.parts.length - 1];
                        e && e.type === i.POS_PRED && "idx" in e.arg && T.push("res = res[0];") }
                    return T.push("return res;"), T.join("") }

                function r(t, e, n) {
                    var r = t.parts,
                        u = 0,
                        h = r.length;
                    for (T.push(e, "=", t.fromRoot ? "data" : t.subst ? "subst." + t.subst : n, ";", "isArr(" + e + ") || (" + e + " = [" + e + "]);"); h > u;) {
                        var l = r[u++];
                        switch (l.type) {
                            case i.SELECTOR:
                                ".." === l.selector ? s(l, e, e) : o(l, e, e);
                                break;
                            case i.OBJ_PRED:
                                a(l, e, e);
                                break;
                            case i.POS_PRED:
                                c(l, e, e);
                                break;
                            case i.CONCAT_EXPR:
                                E(l, e, e) } } }

                function o(i, n, r) {
                    if (i.prop) {
                        var o = y(i.prop),
                            s = t(),
                            a = t(),
                            c = t(),
                            u = t(),
                            h = t(),
                            l = t(),
                            f = t();
                        T.push(s, "= [];", a, "= 0;", c, "=", r, ".length;", f, "= [];", "while(", a, "<", c, ") {", u, "=", r, "[", a, "++];", "if(", u, "!= null) {"), "*" === i.prop ? (T.push("if(typeof ", u, '=== "object") {', "if(isArr(", u, ")) {", s, "=", s, ".concat(", u, ");", "}", "else {", "for(", h, " in ", u, ") {", "if(", u, ".hasOwnProperty(", h, ")) {", l, "=", u, "[", h, "];"), v(s, l), T.push("}", "}", "}", "}")) : (T.push(l, "=", u, "[", o, "];"), v(s, l, f, c)), T.push("}", "}", n, "=", c, "> 1 &&", f, ".length?", f, ".length > 1?", "concat.apply(", s, ",", f, ") :", s, ".concat(", f, "[0]) :", s, ";"), e(s, a, c, u, h, l, f) } }

                function s(i, n, r) {
                    var o = i.prop,
                        s = t(),
                        a = t(),
                        c = t(),
                        u = t(),
                        h = t(),
                        l = t(),
                        f = t(),
                        p = t();
                    T.push(s, "=", r, ".slice(),", p, "= [];", "while(", s, ".length) {", a, "=", s, ".shift();"), o ? T.push("if(typeof ", a, '=== "object" &&', a, ") {") : T.push("if(typeof ", a, "!= null) {"), T.push(c, "= [];", "if(isArr(", a, ")) {", u, "= 0,", f, "=", a, ".length;", "while(", u, "<", f, ") {", l, "=", a, "[", u, "++];"), o && T.push("if(typeof ", l, '=== "object") {'), v(c, l), o && T.push("}"), T.push("}", "}", "else {"), o ? "*" !== o && (T.push(l, "=", a, '["' + o + '"];'), v(p, l)) : (v(p, a), T.push("if(typeof ", a, '=== "object") {')), T.push("for(", h, " in ", a, ") {", "if(", a, ".hasOwnProperty(", h, ")) {", l, "=", a, "[", h, "];"), v(c, l), "*" === o && v(p, l), T.push("}", "}"), o || T.push("}"), T.push("}", c, ".length &&", s, ".unshift.apply(", s, ",", c, ");", "}", "}", n, "=", p, ";"), e(s, a, c, u, h, l, f, p) }

                function a(i, n, r) {
                    var o = t(),
                        s = t(),
                        a = t(),
                        c = t(),
                        h = t();
                    T.push(o, "= [];", s, "= 0;", a, "=", r, ".length;", "while(", s, "<", a, ") {", h, "=", r, "[", s, "++];"), u(i.arg, c, h), T.push(m(i.arg, c), "&&", o, ".push(", h, ");", "}", n, "=", o, ";"), e(o, s, a, h, c) }

                function c(i, n, r) {
                    var o, s, a = i.arg;
                    if (a.idx) {
                        var c = t();
                        return u(a.idx, c, r), T.push(c, "< 0 && (", c, "=", r, ".length +", c, ");", n, "=", r, "[", c, "] == null? [] : [", r, "[", c, "]];"), e(c), !1 }
                    a.fromIdx ? a.toIdx ? (u(a.fromIdx, o = t(), r), u(a.toIdx, s = t(), r), T.push(n, "=", r, ".slice(", o, ",", s, ");"), e(o, s)) : (u(a.fromIdx, o = t(), r), T.push(n, "=", r, ".slice(", o, ");"), e(o)) : (u(a.toIdx, s = t(), r), T.push(n, "=", r, ".slice(0,", s, ");"), e(s)) }

                function u(t, e, n) {
                    switch (t.type) {
                        case i.PATH:
                            r(t, e, n);
                            break;
                        case i.CONCAT_EXPR:
                            E(t, e, n);
                            break;
                        case i.COMPARISON_EXPR:
                            h(t, e, n);
                            break;
                        case i.MATH_EXPR:
                            p(t, e, n);
                            break;
                        case i.LOGICAL_EXPR:
                            f(t, e, n);
                            break;
                        case i.UNARY_EXPR:
                            d(t, e, n);
                            break;
                        case i.LITERAL:
                            var o = t.val;
                            T.push(e, "=", "string" == typeof o ? y(o) : o, ";") } }

                function h(n, r, o) {
                    var s = t(),
                        a = t(),
                        c = t(),
                        h = t(),
                        f = t(),
                        p = t(),
                        d = t(),
                        E = t(),
                        y = n.args[0],
                        v = n.args[1];
                    T.push(r, "= false;"), u(y, s, o), u(v, a, o);
                    var b = y.type === i.PATH,
                        m = v.type === i.LITERAL;
                    T.push(c, "="), b ? T.push("true;") : T.push("isArr(", s, ");"), T.push(h, "="), m ? T.push("false;") : T.push("isArr(", a, ");"), T.push("if("), b || T.push(c, "&&"), T.push(s, ".length === 1) {", s, "=", s, "[0];", c, "= false;", "}"), m || T.push("if(", h, "&&", a, ".length === 1) {", a, "=", a, "[0];", h, "= false;", "}"), T.push(f, "= 0;", "if(", c, ") {", d, "=", s, ".length;"), m || (T.push("if(", h, ") {", E, "=", a, ".length;", "while(", f, "<", d, "&& !", r, ") {", p, "= 0;", "while(", p, "<", E, ") {"), l(n.op, [s, "[", f, "]"].join(""), [a, "[", p, "]"].join("")), T.push(r, "= true;", "break;", "}", "++", p, ";", "}", "++", f, ";", "}", "}", "else {")), T.push("while(", f, "<", d, ") {"), l(n.op, [s, "[", f, "]"].join(""), a), T.push(r, "= true;", "break;", "}", "++", f, ";", "}"), m || T.push("}"), T.push("}"), m || (T.push("else if(", h, ") {", E, "=", a, ".length;", "while(", f, "<", E, ") {"), l(n.op, s, [a, "[", f, "]"].join("")), T.push(r, "= true;", "break;", "}", "++", f, ";", "}", "}")), T.push("else {", r, "=", w[n.op](s, a), ";", "}"), e(s, a, c, h, f, p, d, E) }

                function l(t, e, i) { T.push("if(", w[t](e, i), ") {") }

                function f(i, n, r) {
                    var o, s = [],
                        a = i.args,
                        c = a.length,
                        h = 0;
                    switch (T.push(n, "= false;"), i.op) {
                        case "&&":
                            for (; c > h;) s.push(o = t()), u(a[h], o, r), T.push("if(", m(a[h++], o), ") {");
                            T.push(n, "= true;");
                            break;
                        case "||":
                            for (; c > h;) s.push(o = t()), u(a[h], o, r), T.push("if(", m(a[h], o), ") {", n, "= true;", "}"), h++ + 1 < c && T.push("else {");--c }
                    for (; c--;) T.push("}");
                    e.apply(null, s) }

                function p(i, n, r) {
                    var o = t(),
                        s = t(),
                        a = i.args;
                    u(a[0], o, r), u(a[1], s, r), T.push(n, "=", w[i.op](g(a[0], o), g(a[1], s)), ";"), e(o, s) }

                function d(i, n, r) {
                    var o = t(),
                        s = i.arg;
                    switch (u(s, o, r), i.op) {
                        case "!":
                            T.push(n, "= !", m(s, o) + ";");
                            break;
                        case "-":
                            T.push(n, "= -", g(s, o) + ";") }
                    e(o) }

                function E(i, n, r) {
                    for (var o = [], s = i.args, a = s.length, c = 0; a > c;) o.push(t()), u(s[c], o[c++], r);
                    T.push(n, "= concat.call(", o.join(","), ");"), e.apply(null, o) }

                function y(t) {
                    return "'" + t.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'" }

                function v(t, e, i, n) { T.push("if(", e, "!= null) {", "if(isArr(", e, ")) {"), i && (T.push(n, "> 1?"), b(i, e), T.push(":")), T.push(t, "=", t, ".length?", t, ".concat(", e, ") :", e, ".slice()", ";", "}", "else {"), i && T.push("if(", i, ".length) {", t, "= concat.apply(", t, ",", i, ");", i, "= [];", "}"), b(t, e), T.push(";", "}", "}") }

                function b(t, e) { T.push(t, ".length?", t, ".push(", e, ") :", t, "[0] =", e) }

                function m(t, e) {
                    switch (t.type) {
                        case i.LOGICAL_EXPR:
                            return e;
                        case i.LITERAL:
                            return "!!" + e;
                        case i.PATH:
                            return e + ".length > 0";
                        default:
                            return ["(typeof ", e, '=== "boolean"?', e, ":", "isArr(", e, ")?", e, ".length > 0 : !!", e, ")"].join("") } }

                function g(t, e) {
                    switch (t.type) {
                        case i.LITERAL:
                            return e;
                        case i.PATH:
                            return e + "[0]";
                        default:
                            return ["(isArr(", e, ")?", e, "[0] : ", e, ")"].join("") } }
                var T, A, _, N, w = { "===": function(t, e) {
                        return t + "===" + e }, "==": function(t, e) {
                        return ["typeof ", t, '=== "string" && typeof ', e, '=== "string"?', t, ".toLowerCase() ===", e, ".toLowerCase() :" + t, "==", e].join("") }, ">=": function(t, e) {
                        return t + ">=" + e }, ">": function(t, e) {
                        return t + ">" + e }, "<=": function(t, e) {
                        return t + "<=" + e }, "<": function(t, e) {
                        return t + "<" + e }, "!==": function(t, e) {
                        return t + "!==" + e }, "!=": function(t, e) {
                        return t + "!=" + e }, "^==": function(t, e) {
                        return ["typeof ", t, '=== "string" && typeof ', e, '=== "string" &&', t, ".indexOf(", e, ") === 0"].join("") }, "^=": function(t, e) {
                        return [t, "!= null &&", e, "!= null &&", t, ".toString().toLowerCase().indexOf(", e, ".toString().toLowerCase()) === 0"].join("") }, "$==": function(t, e) {
                        return ["typeof ", t, '=== "string" && typeof ', e, '=== "string" &&', t, ".lastIndexOf(", e, ") ===", t, ".length -", e, ".length"].join("") }, "$=": function(t, e) {
                        return [t, "!= null &&", e, "!= null &&", "(", t, "=", t, ".toLowerCase().toString()).indexOf(", "(", e, "=", e, ".toLowerCase().toLowerCase())) ===", t, ".length -", e, ".length"].join("") }, "*==": function(t, e) {
                        return ["typeof ", t, '=== "string" && typeof ', e, '=== "string" &&', t, ".indexOf(", e, ") > -1"].join("") }, "*=": function(t, e) {
                        return [t, "!= null && ", e, "!= null &&", t, ".toString().toLowerCase().indexOf(", e, ".toString().toLowerCase()) > -1"].join("") }, "+": function(t, e) {
                        return t + "+" + e }, "-": function(t, e) {
                        return t + "-" + e }, "*": function(t, e) {
                        return t + "*" + e }, "/": function(t, e) {
                        return t + "/" + e }, "%": function(t, e) {
                        return t + "%" + e } };
                return n }(),
            o = {},
            s = [],
            a = { cacheSize: 100 },
            c = { cacheSize: function(t, e) {
                    if (t > e && s.length > e)
                        for (var i = s.splice(0, s.length - e), n = i.length; n--;) delete o[i[n]] } },
            u = function(t, i, n) {
                return o[t] || (o[t] = e(t), s.push(t) > a.cacheSize && delete o[s.shift()]), o[t](i, n || {}) };
        u.version = "0.3.1", u.params = function(t) {
            if (!arguments.length) return a;
            for (var e in t) t.hasOwnProperty(e) && (c[e] && c[e](a[e], t[e]), a[e] = t[e]) }, u.compile = e, u.apply = u, "object" == typeof t && "object" == typeof t.a ? t.a = u : "object" == typeof modules ? modules.define("jspath", function(t) { t(u) }) : "function" == typeof define ? define(function(t, e, i) { i.a = u }) : JSPath = u
    }()
}, function(t, e, i, n) { i(45);
    var r = i(7),
        o = i(52);
    r.log = function() { o.log.apply(o, arguments) }, r.showUrl = o.showUrl, ya.music.Logger = { hideChannel: o.hideChannel, showChannel: o.showChannel, send: o.send, dump: o.dump.bind(o, ["error", "warn", "log", "info"]) } }, function(t, e, i, n) {
    var r = i(53),
        o = i(54),
        s = i(65),
        a = i(60),
        c = i(47),
        u = i(61),
        h = ["error", "warn", "log", "info"];
    r.development && r.debug && h.push("debug", "trace");
    var l = a.load("yandexuid", !0) + ":" + (new Date).valueOf(),
        f = function(t) {
            return this instanceof f ? void(this.channel = t) : new f(t) };
    f.ignores = {}, f.log = function(t, e, i) {
        if (r.development || "debug" != t) {
            var n = [].slice.call(arguments, 3).map(function(t) {
                    if (t && t.v && (t = t.v()), "function" == typeof t && (t = "[[function]]"), "msie" === c.browser.name || "edge" === c.browser.name) try { t = JSON.stringify(t) } catch (e) {}
                    return t }),
                o = i && (i.y || i.name);
            if (i && i.v && (i = i.v()), "msie" === c.browser.name || "edge" === c.browser.name) try { i = JSON.stringify(i) } catch (s) {}
            o = o || i && (i.y || i.name), "function" == typeof i && (i = "[[function]]");
            var a = { name: o, timestamp: +new Date, level: t, channel: e, w: i, message: n };
            f.logs.unshift(a), f.logs.length > r.logger.max && (f.logs.length = r.logger.max), f.ignores[e] || ((r.debug || "error" === t) && f.x.call(this, a), (r.logger.verbose || "error" === t) && f.fb(a)) } }, f.logs = [], f.prototype.debug = f.prototype.trace = function() {}, h.forEach(function(t) { f.prototype[t] = function() {
            var e = [].slice.call(arguments);
            e.unshift(this.channel), e.unshift(t), f.log.apply(this, e) } }), f.prototype.p = function(t) {
        return f.showUrl(t) };
    var p = /^(([^:]*:)?\/\/[^\/?#]*).*$/;
    f.showUrl = function(t) {
        return (t || "").replace(p, "$1") }, f.z = function(t) {
        var e = new Date(t),
            i = e.getMilliseconds();
        i = i > 100 ? i : i > 10 ? "0" + i : "00" + i;
        var n = e.getDate();
        return n = n > 10 ? n : "0" + n, n + " " + e.toLocaleTimeString() + "." + i }, f.x = function(t, e) {
        var i = t.level,
            n = t.name,
            r = t.w;
        return e ? [i.toUpperCase(), f.z(t.timestamp), "[" + t.channel + (n ? ":" + n : "") + "]"].concat(t.message.map(u)) : void("function" != typeof console[i] ? console.log.apply(console, [i.toUpperCase(), f.z(t.timestamp), "[" + t.channel + (n ? ":" + n : "") + "]", t.message[0], r].concat(t.message.slice(1))) : console[i].apply(console, [f.z(t.timestamp), "[" + t.channel + (n ? ":" + n : "") + "]", t.message[0], r].concat(t.message.slice(1)))) }, f.fb = function(t) {
        var e = new Image;
        e.src = "/favicon.ico?log=apiv2-0&sessionID=" + l + "&level=" + t.level + "&timestamp=" + t.timestamp + "&channel=" + t.channel + "&message=" + encodeURIComponent(u(t.message)) }, f.gb = function(t, e) {
        return f.logs.filter(function(i) {
            return !(t && -1 === t.indexOf(i.level) || e && -1 === e.indexOf(i.channel)) }) }, f.hb = function() {
        var t = s.load(r.logger.key, !0);
        f.logs = t || [] }, f.dump = function(t, e) {
        return f.gb(t, e).reverse().map(function(t) {
            return f.x(t, !0).join(" ") }) }, f.send = function(t, e) {
        var i = f.gb(t, e);
        return i.length = r.logger.send, o.post("log/", { log: u(i) }) }, f.save = function(t, e) {
        var i = f.gb(t, e);
        i.length = r.logger.save, s.store(r.logger.key, i, !0, !0) }, f.hideChannel = function(t) {
        return f.ignores[t] = !0, f.saveSettings() }, f.showChannel = function(t) {
        return f.ignores[t] = !1, f.saveSettings() }, f.saveSettings = function() {
        return s.store(r.logger.config, f.ignores, !0, !0) }, f.ib = function() { f.ignores = s.load(r.logger.config, !0) || {} }, f.hb(), f.ib(), t.a = f }, function(t, e, i, n) {
    var r = /debug/,
        o = /(totoro|prestable\.music|mt|qa)\.yandex\.ru$/,
        s = r.test(document.location.hash),
        a = o.test(document.location.hostname),
        c = { debug: s, development: a, logger: { max: 1e3, send: 100, save: 20, key: "YaMusicAPILog", config: "YaMusicAPILogIgnores" } };
    t.a = c }, function(t, e, i, n) {
    var r = i(55),
        o = i(1);
    t.a = new r(o.apiURL + "handlers/", { withCredentials: !0 }) }, function(t, e, i, n) {
    var r = i(56),
        o = i(57),
        s = i(58),
        a = i(59),
        c = i(47),
        u = i(62),
        h = i(63),
        l = location.href.replace(/^([^:]*:\/\/[^\/]*).*$/, "$1"),
        f = 0,
        p = function(t, e) { this.handlerUrl = t, this.options = e || {}, s(this.options, { responseType: "json", L: 1e4, attempts: 1 }, !0) };
    p.prototype.request = function(t, e, i, n) {
        var p = "c_" + f++;
        i = i || {};
        try {
            var d = window.top == window ? document.location.href : document.referrer;
            d = d.replace(/^[^:]*:\/\/([^\/]*).*$/, "$1"), i["external-domain"] = d, window.parent !== window.top ? i.overembed = "yes" : i.overembed = "no", "msie" === c.browser.name && "9" == c.browser.version[0] && (e += (/\?/.test(e) ? "&" : "?") + "device_id=" + encodeURIComponent(a.device_id)) } catch (E) {}
        var y = {};
        (this.handlerUrl + e).slice(0, l.length) == l && (y = { headers: { "X-Retpath-Y": location.href } });
        var v = r[t](this.handlerUrl + e, i, s(n ? { dataType: "json" } : {}, this.options, y, !0)),
            b = new o;
        return v.then(function(t) {
            var e = t.captcha && t.captcha["captcha-page"];
            return e ? void(location = e) : void b.resolve(t) }), v["catch"](b.reject), b.i().abort = function(t) { b.reject(new h(t)), v.abort() }, b.i().id = p, b.i()["catch"](u), b.i() }, p.prototype.get = function(t, e) {
        return this.request("get", t, e) }, p.prototype.post = function(t, e, i) {
        return s(e || {}, { sign: a.csrf }, !0), this.request("post", t, e, i) }, t.a = p }, function _(module, exports, require, global) {! function(t, e, i) { "undefined" != typeof module && module.a ? module.a = i : "function" == typeof define && define.amd ? define(i) : t[e] = i }(this, "qwest", function() {
        var win = window,
            doc = document,
            before, defaultXdrResponseType = "json",
            limit = null,
            requests = 0,
            request_stack = [],
            getXHR = function() {
                return win.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP") },
            xhr2 = "" === getXHR().responseType,
            qwest = function(method, url, data, options, before) { method = method.toUpperCase(), data = data || null, options = options || {};
                var nativeResponseParsing = !1,
                    crossOrigin, xhr, xdr = !1,
                    timeoutInterval, aborted = !1,
                    attempts = 0,
                    headers = {},
                    mimeTypes = { text: "*/*", xml: "text/xml", json: "application/json", post: "application/x-www-form-urlencoded" },
                    accept = { text: "*/*", xml: "application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1", json: "application/json; q=1.0, text/*; q=0.8, */*; q=0.1" },
                    contentType = "Content-Type",
                    vars = "",
                    i, j, serialized, then_stack = [],
                    catch_stack = [],
                    complete_stack = [],
                    response, success, error, func, promises = { then: function(t) {
                            return options.async ? then_stack.push(t) : success && t.call(xhr, response), promises }, "catch": function(t) {
                            return options.async ? catch_stack.push(t) : error && t.call(xhr, response), promises }, complete: function(t) {
                            return options.async ? complete_stack.push(t) : t.call(xhr), promises }, abort: function() { aborted = !0, xhr.abort() } },
                    promises_limit = { then: function(t) {
                            return request_stack[request_stack.length - 1].then.push(t), promises_limit }, "catch": function(t) {
                            return request_stack[request_stack.length - 1]["catch"].push(t), promises_limit }, complete: function(t) {
                            return request_stack[request_stack.length - 1].complete.push(t), promises_limit } },
                    handleResponse = function() {
                        if (!aborted) {
                            var i, req, p, responseType;
                            if (--requests, clearInterval(timeoutInterval), request_stack.length) {
                                for (req = request_stack.shift(), p = qwest(req.method, req.url, req.data, req.options, req.before), i = 0; func = req.then[i]; ++i) p.then(func);
                                for (i = 0; func = req["catch"][i]; ++i) p["catch"](func);
                                for (i = 0; func = req.complete[i]; ++i) p.complete(func) }
                            try {
                                if ("status" in xhr && !/^2|1223/.test(xhr.status)) throw xhr.status ? xhr.status + " (" + xhr.statusText + ")" : "broken connection";
                                var responseText = "responseText",
                                    responseXML = "responseXML",
                                    parseError = "parseError";
                                if (nativeResponseParsing && "response" in xhr && null !== xhr.response) response = xhr.response;
                                else if ("document" == options.responseType) {
                                    var frame = doc.createElement("iframe");
                                    frame.style.display = "none", doc.body.appendChild(frame), frame.contentDocument.open(), frame.contentDocument.write(xhr.response), frame.contentDocument.close(), response = frame.contentDocument, doc.body.removeChild(frame) } else {
                                    if (responseType = options.responseType, "auto" == responseType)
                                        if (xdr) responseType = defaultXdrResponseType;
                                        else {
                                            var ct = xhr.getResponseHeader(contentType) || "";
                                            responseType = ct.indexOf(mimeTypes.json) > -1 ? "json" : ct.indexOf(mimeTypes.xml) > -1 ? "xml" : "text" }
                                    switch (responseType) {
                                        case "json":
                                            try { response = "JSON" in win ? JSON.parse(xhr[responseText]) : eval("(" + xhr[responseText] + ")") } catch (e) {
                                                throw "Error while parsing JSON body : " + e }
                                            break;
                                        case "xml":
                                            try { win.DOMParser ? response = (new DOMParser).parseFromString(xhr[responseText], "text/xml") : (response = new ActiveXObject("Microsoft.XMLDOM"), response.async = "false", response.loadXML(xhr[responseText])) } catch (e) { response = void 0 }
                                            if (!response || !response.documentElement || response.getElementsByTagName("parsererror").length) throw "Invalid XML";
                                            break;
                                        default:
                                            response = xhr[responseText] } }
                                if (success = !0, p = response, options.async)
                                    for (i = 0; func = then_stack[i]; ++i) p = func.call(xhr, p) } catch (e) {
                                if (error = !0, response = e, options.async)
                                    for (i = 0; func = catch_stack[i]; ++i) func.call(xhr, e, url) }
                            if (options.async)
                                for (i = 0; func = complete_stack[i]; ++i) func.call(xhr) } },
                    buildData = function(t, e) {
                        var i, n = [],
                            r = encodeURIComponent;
                        if ("object" == typeof t && null != t) {
                            for (i in t)
                                if (t.hasOwnProperty(i)) {
                                    var o = buildData(t[i], e ? e + "[]" : i); "" !== o && (n = n.concat(o)) } } else null != t && null != e && n.push(r(e) + "=" + r(t));
                        return n.join("&") };
                switch (++requests, "retries" in options && (win.console && console.warn && console.warn('[Qwest] The retries option is deprecated. It indicates total number of requests to attempt. Please use the "attempts" option.'), options.attempts = options.retries), options.async = "async" in options ? !!options.async : !0, options.cache = "cache" in options ? !!options.cache : "GET" != method, options.dataType = "dataType" in options ? options.dataType.toLowerCase() : "post", options.responseType = "responseType" in options ? options.responseType.toLowerCase() : "auto", options.user = options.user || "", options.password = options.password || "", options.withCredentials = !!options.withCredentials, options.L = "timeout" in options ? parseInt(options.L, 10) : 3e3, options.attempts = "attempts" in options ? parseInt(options.attempts, 10) : 3, i = url.match(/\/\/(.+?)\//), crossOrigin = i && i[1] ? i[1] != location.host : !1, "ArrayBuffer" in win && data instanceof ArrayBuffer ? options.dataType = "arraybuffer" : "Blob" in win && data instanceof Blob ? options.dataType = "blob" : "Document" in win && data instanceof Document ? options.dataType = "document" : "FormData" in win && data instanceof FormData && (options.dataType = "formdata"), options.dataType) {
                    case "json":
                        data = JSON.stringify(data);
                        break;
                    case "post":
                        data = buildData(data) }
                if (options.headers) {
                    var format = function(t, e, i) {
                        return e + i.toUpperCase() };
                    for (i in options.headers) headers[i.replace(/(^|-)([^-])/g, format)] = options.headers[i] }
                if (headers[contentType] || "GET" == method || options.dataType in mimeTypes && mimeTypes[options.dataType] && (headers[contentType] = mimeTypes[options.dataType]), headers.Accept || (headers.Accept = options.responseType in accept ? accept[options.responseType] : "*/*"), crossOrigin || headers["X-Requested-With"] || (headers["X-Requested-With"] = "XMLHttpRequest"), "GET" == method && (vars += data), options.cache || (vars && (vars += "&"), vars += "__t=" + +new Date), vars && (url += (/\?/.test(url) ? "&" : "?") + vars), limit && requests == limit) return request_stack.push({ method: method, url: url, data: data, options: options, before: before, then: [], "catch": [], complete: [] }), promises_limit;
                var send = function() {
                        if (xhr = getXHR(), crossOrigin && ("withCredentials" in xhr || !win.XDomainRequest || (xhr = new XDomainRequest, xdr = !0, "GET" != method && "POST" != method && (method = "POST"))), xdr ? xhr.open(method, url) : (xhr.open(method, url, options.async, options.user, options.password), xhr2 && options.async && (xhr.withCredentials = options.withCredentials)), !xdr)
                            for (var t in headers) xhr.setRequestHeader(t, headers[t]);
                        if (xhr2 && "document" != options.responseType) try { xhr.responseType = options.responseType, nativeResponseParsing = xhr.responseType == options.responseType } catch (e) {}
                        xhr2 || xdr ? xhr.onload = handleResponse : xhr.onreadystatechange = function() { 4 == xhr.readyState && handleResponse() }, xhr.onerror = handleResponse, "auto" !== options.responseType && "overrideMimeType" in xhr && xhr.overrideMimeType(mimeTypes[options.responseType]), before && before.call(xhr), xdr ? setTimeout(function() { xhr.send("GET" != method ? data : null) }, 0) : xhr.send("GET" != method ? data : null) },
                    timeout = function() { timeoutInterval = setTimeout(function() {
                            if (aborted = !0, xhr.abort(), options.attempts && ++attempts == options.attempts) {
                                if (aborted = !1, error = !0, response = "Timeout (" + url + ")", options.async)
                                    for (i = 0; func = catch_stack[i]; ++i) func.call(xhr, response) } else aborted = !1, timeout(), send() }, options.L) };
                return timeout(), send(), promises },
            create = function(t) {
                return function(e, i, n) {
                    var r = before;
                    return before = null, qwest(t, e, i, n, r) } },
            obj = { before: function(t) {
                    return before = t, obj }, get: create("GET"), post: create("POST"), put: create("PUT"), "delete": create("DELETE"), xhr2: xhr2, limit: function(t) { limit = t }, setDefaultXdrResponseType: function(t) { defaultXdrResponseType = t.toLowerCase() } };
        return obj }()) }, function(t, e, i, n) { t.a = i(14) }, function(t, e, i, n) { t.a = i(10) }, function(t, e, i, n) {
    var r = i(60),
        o = t.a = { csrf: "", device_id: r.load("device_id", !1), logged: !1, premium: !1, invalid: !1, timestamp: (new Date).valueOf(), localTimestamp: (new Date).valueOf(), getTimestamp: function() {
                return (new Date).valueOf() - o.localTimestamp + o.timestamp } } }, function(t, e, i, n) {
    var r = i(61),
        o = "." + document.location.hostname.split(".").slice(-2).join(".");
    e.store = function(t, e, i) {
        try { document.cookie = t + "=" + (i ? r : JSON.stringify)(e) + ";domain=" + o + ";path=/" } catch (n) {
            return !1 }
        return !0 }, e.load = function(t, e) {
        try {
            var i = document.cookie.match(new RegExp(t + "=([^;]*)"));
            i = i && i[1], e || (i = i && JSON.parse(i)) } catch (n) {
            return "" }
        return i } }, function(t, e, i, n) {
    var r = function(t, e) {
        return e instanceof Object ? -1 !== t.indexOf(e) ? '"<recursion>"' : (t.push(e), "function" == typeof e ? '"<function>"' : e instanceof HTMLElement ? '"<DOMObject>"' : e instanceof Error ? '"Error: ' + Error.message.replace(/"/g, '\\"') + '"' : e instanceof Array ? "[" + e.filter(function(t) {
            return "function" != typeof t }).map(r.bind(null, t)).join(", ") + "]" : "{" + Object.keys(e).filter(function(t) {
            return e.hasOwnProperty(t) && "function" != typeof e[t] }).map(function(i) {
            return '"' + i + '":' + r(t, e[i]) }).join(", ") + "}") : '"' + e + '"' };
    t.a = function(t) {
        try {
            return r([], t) } catch (e) {
            return t.toString() } } }, function(t, e, i, n) { t.a = function() {} }, function(t, e, i, n) {
    var r = i(64),
        o = function(t) { r.call(this, t) };
    o.prototype = r.create("AbortError"), t.a = o }, function(t, e, i, n) { t.a = i(17) }, function(t, e, i, n) {
    var r = i(61),
        o = function() {
            try {
                return "localStorage" in window && null !== window.localStorage } catch (t) {
                return !1 } }(),
        s = window.localStorage,
        a = "." + document.location.hostname.split(".").slice(-2).join(".");
    e.store = function(t, e, i, n) {
        if (i && !o) return !1;
        var c;
        if (o) try { s.setItem(t, (n ? r : JSON.stringify)(e)) } catch (u) {
            if (i) return !1;
            c = u }
        if (!o || c) try { document.cookie = t + "=" + (n ? r : JSON.stringify)(e) + ";domain=" + a } catch (u) {
            return !1 }
        return !0 }, e.load = function(t, e) {
        if (e && !o) return null;
        var i, n;
        if (o) try { i = JSON.parse(s.getItem(t)) } catch (r) {
            if (e) return null;
            n = r }
        if (!o || n) try { i = document.cookie.match(new RegExp(t + "=([^;]*)")), i = i || i[0], i = i && JSON.parse(i) } catch (r) {
            return null }
        return i } }, function(t, e, i, n) { i(45);
    var r = i(67).jb;
    ya.music.Player = r, ya.music.Player.AdvertError = i(120), ya.music.Player.LoaderError = i(124), ya.music.Player.PlaybackError = i(98) }, function(t, e, i, n) {
    var r, o = i(52),
        s = new o("MusicPlayer"),
        a = i(68),
        c = i(62),
        n = i(69),
        u = i(58),
        h = i(57),
        l = i(70),
        f = i(71),
        p = i(72),
        d = i(73),
        E = i(74),
        y = i(65),
        v = i(75),
        b = i(144),
        m = i(145),
        g = i(6),
        T = i(146),
        A = i(147),
        _ = i(148),
        N = i(149),
        w = i(92),
        S = i(122),
        P = i(150),
        k = i(153).AbstractSource,
        R = i(153).kb,
        L = i(154),
        O = i(76),
        D = (i(155), i(106)),
        I = i(157),
        V = 1,
        C = new m;
    S({ errors: [] }).then(function() { s.info(null, "advertSDKSuccess") }, function(t) { s.error(null, "advertSDKFailed", t) });
    var x = function(t) { t = t || {}, t.preferredType || (t.preferredType = y.load(a.typeKey)), this.name = V++, s.info(this, "constructor", t), f.call(this), this.d = x.STATE_INIT, this.source = null, this.crossTabs = new b(this), this.playing = !1, this.lb = this.mb.bind(this), this.nb = new g(t.preferredType, t.overlay), this.ob = new g(t.preferredType, t.overlay), this.pb = new g(t.preferredType, t.overlay);
        var e = new h;
        this.ob.initPromise().then(e.resolve, e.resolve);
        var i = new h;
        this.pb.initPromise().then(i.resolve, i.resolve);
        var n = new h;
        r.then(n.resolve, n.resolve), this.qb(x.INIT_STEP_MAIN, this.nb.initPromise()), this.qb(x.INIT_STEP_ADVERT, e.i()), this.qb(x.INIT_STEP_COMMON, i.i()), this.qb(x.INIT_STEP_AUTH, n.i()), this.nb.initPromise().then(function() { g.c && this.nb.toggleCrossDomain(!0) }.bind(this), c), this.rb = new p("musicPlayerSource", !0), this.sb = new p("musicPlayerInit", x.STATE_INIT), this.tb = new p("musicPlayerReasdy"), this.tb.ub(this.rb), this.tb.ub(this.sb), this.vb = new v(this), this.vb.on("*", this.wb.bind(this)), this.ctlMain = new A("main", this, this.vb.xb, this.nb), this.ctlAdvert = new A("advert", this, this.vb.yb, this.ob, { setPosition: !0 }), this.ctlCommon = new A("common", this, this.vb.zb, this.pb, { setPosition: !0 }), this.ctlAuto = new _([this.ctlMain, this.ctlAdvert, this.ctlCommon]), this.Ab = this.Bb.bind(this), this.ctlVolume = new T(this), this.ctlAuto.on("*", this.Ab), this.ctlVolume.on("*", this.Ab), this.diagnostic = new N(this), this.h = h.when(this.nb.initPromise(), n.i(), e.i(), i.i()).then(function() { s.info(this, "ready"), this.sb.lock(!1), this.l(x.STATE_IDLE), C.on(m.EVENT_SLEEP, function() { this.pause() }.bind(this)) }.bind(this), function(t) {
            throw s.error(this, "failed", t), this.sb.lock(x.STATE_CRASHED), this.l(x.STATE_CRASHED), t }.bind(this)), this.h["catch"](c) };
    f.mixin(x), u(x, O, !0), x.prototype.qb = function(t, e) { e.then(function() { this.trigger(x.EVENT_INIT_STEP, t, x.INIT_READY) }.bind(this), function() { s.error(this, "initStepFailed", t), this.trigger(x.EVENT_INIT_STEP, t, x.INIT_FAIL) }.bind(this)) }, x.prototype.mb = function(t) {
        var e = [].slice.call(arguments, 1);
        this.trigger.apply(this, [x.SOURCE_EVENTS + t].concat(e)), (t === D.EVENT_FINISHED || t === D.EVENT_STOP) && this.Cb(!1), t === D.EVENT_PLAY && this.Cb(!0) }, x.prototype.wb = function(t) { this.Db && (t === O.EVENT_TRACK_PLAY || t === O.EVENT_ADVERT_PLAY || t === O.EVENT_COMMON_PLAY) && this.ctlAuto.pause(), this.trigger.apply(this, arguments) }, x.prototype.Bb = function(t, e) {
        var i = [].slice.call(arguments, 1);
        (t !== g.EVENT_PROGRESS || "common" !== this.getActivePlayer()) && this.trigger.apply(this, [x.AUDIO_EVENTS + t].concat(i)), t === g.EVENT_STATE && e === g.STATE_PLAYING && this.trigger(x.EVENT_PLAY_PAUSE, !0) }, x.prototype.l = function(t) { this.d !== t && (this.d = t) }, x.prototype.Eb = function(t) { s.info(this, "_detachSource", t), t.off("*", this.lb), this.trigger(x.EVENT_SOURCE_DETACH, t.bb()), this.source === t && (this.rb.lock(!0), this.rb.Fb(this.source.tb), this.source = null) }, x.prototype.Gb = function(t) { s.info(this, "_attachSource", t), this.source && this.source.Hb(), this.source = t, this.source.on("*", this.lb), this.trigger(x.EVENT_SOURCE_ATTACH, this.source.bb()), this.trigger(x.SOURCE_EVENTS + L.EVENT_UPDATE, L.UPDATE_ALL), this.trigger(x.SOURCE_EVENTS + L.EVENT_UPDATE, L.UPDATE_TRACK), this.rb.ub(this.source.tb), this.rb.lock(!1) }, x.prototype.initPromise = function() {
        return this.h }, x.prototype.getState = function() {
        return this.d }, x.prototype.getType = function() {
        return this.ctlMain.getType() }, x.Ib = function(t, e) {
        return { data: t.Jb[e], prepared: t.Jb.prepared, started: t.Jb.started, ended: t.Jb.ended, isPrepared: t.Jb.isPrepared, isStarted: t.Jb.isStarted, isEnded: t.Jb.isEnded } }, x.prototype.getActivity = function() {
        var t = this.vb.Lb.Kb || this.vb.Lb.Mb,
            e = this.vb.Nb.Kb || this.vb.Nb.Mb,
            i = this.vb.Ob.Kb || this.vb.Ob.Mb,
            n = i && !i.Jb.Pb ? x.Ib(i, "track") : null,
            r = e && !e.Jb.Pb ? x.Ib(e, "advert") : null,
            o = t && !t.Jb.Pb ? x.Ib(t, "common") : null,
            s = o && !o.isEnded ? "common" : r && !r.isEnded ? "advert" : n && !n.isEnded ? "track" : !1;
        return { active: s, track: n, advert: r, common: o } }, x.prototype.getCurrentFormat = function() {
        var t = this.vb.Ob.Kb;
        return t = t && t.Jb.track, t = t && t.format }, x.prototype.Cb = function(t) {
        (t || !this.Qb) && this.playing != t && (this.playing = t, this.trigger(x.EVENT_PLAY_PAUSE, t)) }, x.prototype.getSource = function() {
        return this.source && this.source.bb() }, x.prototype.setSource = function(t) {
        if (this.source !== t && this.getSource() !== t) {
            if (!(t instanceof k || t instanceof R)) throw new TypeError("Source must be instance of AbstractSource class");
            this.Cb(!1), t.Rb ? t.Rb(this) : t.attach(this) } }, x.prototype.setIndex = function(t, e) {
        return this.getSource() !== t && this.setSource(t), this.source.setIndex(e) }, x.prototype.play = function(t, e, i) { t && this.getSource() !== t && (this.Qb = !0, this.setSource(t), delete this.Qb);
        var n = this.source.Ja(e, i);
        return this.Cb(!0), this.Db = !1, n }, x.prototype.stop = function(t, e) {
        if (!this.source) return l.resolve();
        var i = this.source.Sb(e);
        return t && this.Eb(this.source), this.Cb(!1), i }, x.Tb = function(t) {
        return function() {
            return this.source ? (("next" === t || "prev" === t || "dislike" === t) && (this.Db = !1), this.source["_" + t].apply(this.source, arguments)) : d(new I(I.NO_SOURCE)) } }, x.prototype.next = x.Tb("next"), x.prototype.prev = x.Tb("prev"), x.prototype.like = x.Tb("like"), x.prototype.unlike = x.Tb("unlike"), x.prototype.dislike = x.Tb("dislike"), x.prototype.undislike = x.Tb("undislike"), x.prototype.playCommon = function(t) { this.crossTabs.notify(), this.Db = !1, this.Cb(!0);
        var e = this.vb.playCommon(t),
            i = e.then(function() { this.source && this.source.isPlaying() || this.Cb(!1) }.bind(this));
        return i["catch"](c), this.getPlaybackState() ? e.started.then(function() { this.trigger(x.EVENT_PLAY_PAUSE, !0) }.bind(this), c) : this.trigger(x.EVENT_PLAY_PAUSE, !0), i.abort = e.abort, i }, x.prototype.isPlaying = function() {
        var t = this.getPlaybackState();
        return this.Db || t && t === g.STATE_PAUSED ? !1 : this.playing }, x.prototype.getCurrentTrack = function() {
        var t = this.vb.Ob.Mb || this.vb.Ob.Kb;
        return t = t && !t.Jb.aborted && t.Jb, t && t.track }, x.prototype.getAdvertData = function() {
        var t = this.vb.Nb.Kb;
        return t = t && !t.Jb.aborted && !t.Jb.isEnded && t.Jb, t && t.advert }, x.prototype.getPlaybackState = function() {
        return this.ctlAuto.getState() }, x.prototype.getActivePlayer = function() {
        var t = this.ctlAuto.getActive();
        return t && t.name }, x.prototype.pause = function() { this.Db = !0;
        var t = this.ctlAuto.pause();
        return this.trigger(x.EVENT_PLAY_PAUSE, !1), t }, x.prototype.resume = function() { this.Db = !1;
        var t = this.ctlAuto.resume();
        return this.getPlaybackState() ? t.then(function() { this.trigger(x.EVENT_PLAY_PAUSE, !0) }.bind(this), c) : this.trigger(x.EVENT_PLAY_PAUSE, !0), t }, x.prototype.setPosition = function(t, e) {
        return this[e ? "ctlMain" : "ctlAuto"].setPosition(t) }, x.prototype.getPosition = function(t) {
        return this[t ? "ctlMain" : "ctlAuto"].getPosition() }, x.prototype.getDuration = function(t) {
        return this[t ? "ctlMain" : "ctlAuto"].getDuration()
    }, x.prototype.getLoaded = function(t) {
        return this[t ? "ctlMain" : "ctlAuto"].getLoaded() }, x.prototype.getPlayed = function() {
        return this.ctlMain.getPlayed() }, x.prototype.isVolume = function() {
        return !this.ctlVolume.isDeviceVolume() }, x.prototype.setVolume = function(t) {
        return this.ctlVolume.setVolume(t) }, x.prototype.getVolume = function() {
        return this.ctlVolume.getVolume() }, x.prototype.toggleMute = function(t) {
        return this.ctlVolume.mute(t) }, x.prototype.toggleExponentVolume = function(t) {
        return this.ctlVolume.setVolumeExponent(t) }, x.prototype.isExponentVolume = function() {
        return this.ctlVolume.getVolumeExponent() }, x.prototype.getEqualizer = function() {
        return this.ctlVolume.createEqualizer(), this.ctlVolume.getEqualizer() }, x.prototype.toggleEqualizer = function(t) {
        return this.ctlVolume.toggleEqualizer(t) }, x.prototype.isEqualizer = function() {
        return this.ctlVolume.isEqualizerActive() }, x.prototype.getDiagnostic = function() {
        return this.diagnostic.getState() }, x.setRequestGlobals = function(t) { u(n, t, !0) }, x.getRequestGlobals = function() {
        return n }, x.prototype.onAdvertClick = function() { this.vb.trigger(O.EVENT_ADVERT_CLICK) }, x.getPreferredType = function() {
        return y.load(a.typeKey) }, x.getHQ = function() {
        return y.load(a.hqKey) ? 1 : 0 }, x.getFormat = function() {
        var t = y.load(a.formatKey);
        return "mp3" !== t && "aac" !== t && (t = "mp3"), t }, x.setPreferredType = function(t) {
        return y.store(a.typeKey, t) }, x.setHQ = function(t) {
        return t = t ? 1 : 0, w.setHQ(t), y.store(a.hqKey, t ? 1 : 0), t }, x.setFormat = function(t) {
        if ("mp3" !== t && "aac" !== t) throw new RangeError("Only 'mp3' and 'aac' format accepted for now");
        return w.setFormat(t), y.store(a.formatKey, t), t };
    var M, K = 432e5,
        U = 18e5;
    x.b = function() {
        return r = P({}), r.then(function() { M = M && clearTimeout(M) || setTimeout(x.b, K) }, function(t) { s.error({}, "_updateAuthFailed", t), M = M && clearTimeout(M) || setTimeout(x.b, U) }), r }, x.prototype.v = function() {
        return { d: this.d, source: this.source && this.source.v() } }, x.b(), w.setFormat(x.getFormat()), w.setHQ(x.getHQ()), e.MusicPlayer = x, e.jb = E.createClass(x)
}, function(t, e, i, n) {
    var r = /(totoro|qa|mt)\.yandex\.ru$/.test(location.hostname),
        o = { typeKey: "Ya_Music_Player_Type", hqKey: "Ya_Music_Player_HQ", formatKey: "Ya_Music_Player_Format", skipTimeout: 1e3, crossTabs: { instanceKey: "Ya_Music_Player_ID", pollInterval: 500 }, sandman: { checkInterval: 5e3, sleepInterval: 2e4 }, volume: { gammaKey: "Ya_Music_Volume_Gamma", gammaValue: 2, valueKey: "Ya_Music_Volume", valueDefault: .5 }, track: { playRetry: 1, playRetryTimeout: 0, dataRetry: 1, dataRetryTimeout: 500, permitRetry: 1, permitRetryTimeout: 500, urlRetry: 1, urlRetryTimeout: 300 }, advert: { sdk: "//" + (r ? "betastatic." : "") + "yastatic.net/awaps-ad-sdk-js/1_0/adsdk.js", sdkTimeout: 5e3, sdkRety: 12, sdkRetryTimeout: 1e4, paramsRetry: 3, paramsRetryTimeout: 500, loaderRetry: 3, loaderRetryTimeout: 500, dataRetry: 3, dataRetryTimeout: 500, DATA_TIMEOUT: 2e3, PLAY_TIMEOUT: 5e3, cacheTimeout: 5, feedbackRetry: 5, feedbackTimeout: 100 }, radio: { settingsSetRetry: 1, settingsSetTimeout: 1e3, settingsGetRetry: 3, settingsGetTimeout: 1e3, tracksRetry: 5, tracksTimeout: 1e3, startRetry: 2, startTimeout: 1e3, feedbackRetry: 5, feedbackTimeout: 500 } };
    t.a = o }, function(t, e, i, n) { t.a = {} }, function(t, e, i, n) {
    var r = i(62),
        o = i(11),
        s = o.prototype.then;
    o.prototype.then = function(t, e) {
        var i = s.apply(this, arguments);
        return e != r && i["catch"](r), i }, t.a = o }, function(t, e, i, n) { t.a = i(9) }, function(t, e, i, n) {
    var r = i(71),
        o = i(70),
        s = i(57),
        a = function(t, e) { r.call(this), this.name = t, this.lockers = [], this.unlockers = [], this.d = !!e, this.lastState = this.d, this.Ub = this.Vb.bind(this) };
    r.mixin(a), a.EVENT_LOCK = "lock", a.EVENT_UNLOCK = "unlock", a.prototype.getPromise = function() {
        if (this.getState()) {
            var t = new s;
            return this.on(a.EVENT_UNLOCK, t.resolve), t.i().abort = t.reject, t.i() }
        return o.resolve() }, a.prototype.getState = function() {
        var t = !!this.d;
        return t || this.lockers.some(function(e) {
            return e.getState() ? (t = !0, !0) : void 0 }), t || this.unlockers.some(function(e) {
            return e.getState() ? void 0 : (t = !0, !0) }), t }, a.prototype.Vb = function() {
        var t = this.getState();
        t !== this.lastState && (this.lastState = t, this.trigger(t ? a.EVENT_LOCK : a.EVENT_UNLOCK)) }, a.prototype.ub = function(t) { this.lockers.push(t), t.on("*", this.Ub) }, a.prototype.addUnlocker = function(t) { this.unlockers.push(t), t.on("*", this.Ub) }, a.prototype.Fb = function(t) {
        var e = this.lockers.indexOf(t); - 1 !== e && this.lockers.splice(e), t.off("*", this.Ub) }, a.prototype.removeUnlocker = function(t) {
        var e = this.unlockers.indexOf(t); - 1 !== e && this.unlockers.splice(e), t.off("*", this.Ub) }, a.prototype.lock = function(t) {
        return !!this.d == !!t ? !1 : (this.d = t, this.Vb(), !0) }, a.prototype.unlock = function(t) {
        return this.d !== t ? !1 : (this.d = null, this.Vb(), !0) }, a.prototype.v = function() {
        return this.name + ": " + (this.d ? "self-locked" : this.getState() ? "locked [" + this.lockers.map(function(t) {
            return t.name + ":" + t.getState() }).join(", ") + "] [" + this.unlockers.map(function(t) {
            return t.name + ":" + t.getState() }).join(", ") + "]" : "unlocked") }, t.a = a }, function(t, e, i, n) { t.a = i(15) }, function(t, e, i, n) { t.a = i(31) }, function(t, e, i, n) {
    var r = i(52),
        o = new r("Core"),
        s = i(68),
        a = i(19),
        c = i(76),
        u = i(57),
        h = i(71),
        l = i(72),
        f = i(77),
        p = i(62),
        d = i(48),
        E = i(87),
        y = i(116),
        v = i(132),
        b = i(137),
        m = i(139),
        g = i(141),
        T = i(143),
        A = i(121),
        _ = 0,
        N = function(t) { h.call(this), this.Wb = t, this.Xb = new l("playMain"), this.Yb = new l("playAdvert"), this.Zb = new l("playCommonLocked"), this.$b = new l("preloadMain"), this._b = new l("preloadAdvert"), this.ac = new l("preloadCommon"), this.xb = new l("audioMain", !0), this.yb = new l("audioAdvert", !0), this.zb = new l("audioCommon", !0), this.xb.addUnlocker(this.yb), this.xb.addUnlocker(this.zb), this.xb.addUnlocker(this.Xb), this.bc(this.xb, this.Wb.nb), this.yb.addUnlocker(this.zb), this.yb.addUnlocker(this.Yb), this.bc(this.yb, this.Wb.ob), this.zb.addUnlocker(this.Zb), this.bc(this.zb, this.Wb.pb), this.Ob = new f(this.Xb), this.Nb = new f(this.Yb), this.Lb = new f(this.Zb), this.cc = new f(this.$b), this.dc = new f(this._b), this.ec = new f(this.ac), this.fc = this.xb.lock.bind(this.xb, !0), this.gc = this.xb.lock.bind(this.xb, !1), this.hc = this.yb.lock.bind(this.yb, !0), this.ic = this.yb.lock.bind(this.yb, !1), this.jc = this.zb.lock.bind(this.zb, !0), this.kc = this.zb.lock.bind(this.zb, !1), this.lc = this.mc.bind(this), this.xb.on("*", this.lc), this.yb.on("*", this.lc), this.zb.on("*", this.lc), this.Xb.on("*", this.lc), this.Yb.on("*", this.lc), this.Zb.on("*", this.lc) };
    h.mixin(N), N.prototype.isMainActive = function() {
        return !this.xb.getState() }, N.prototype.isAdvertActive = function() {
        return !this.yb.getState() }, N.prototype.isCommonActive = function() {
        return !this.zb.getState() }, N.prototype.isMainPlaying = function() {
        return !this.xb.d }, N.prototype.isAdvertPlaying = function() {
        return !this.yb.d }, N.prototype.isCommonPlaying = function() {
        return !this.zb.d }, N.prototype.bc = function(t, e) {
        var i = function() { e.getState() === a.STATE_PLAYING && e.pause() }.bind(this);
        t.on(l.EVENT_LOCK, function() { e.listen || (e.on(a.EVENT_STATE, i), e.listen = !0, i()) }.bind(this)), t.on(l.EVENT_UNLOCK, function() { e.off(a.EVENT_STATE, i), e.listen = !1, (e.getState() === a.STATE_PAUSED || e.s) && e.resume() }.bind(this)), t.getState() && t.trigger(l.EVENT_LOCK) }, N.prototype.mc = function() {
        var t = this.isMainPlaying(),
            e = this.isAdvertPlaying(),
            i = this.isCommonPlaying(),
            n = t || e || i || this.Xb.getState() || this.Yb.getState() || this.Zb.getState();
        i ? this.Wb.l(c.STATE_SOUND) : e ? this.Wb.l(c.STATE_ADVERT) : t ? this.Wb.l(c.STATE_PLAYING) : n ? this.Wb.l(c.STATE_LOADING) : this.Wb.l(c.STATE_IDLE) }, N.prototype.nc = function(t) { this.trigger(c.EVENT_TRACK_REQUEST, t.track) }, N.prototype.oc = function(t) { this.trigger(c.EVENT_TRACK_BEGIN, t.track) }, N.prototype.pc = function(t) { this.trigger(c.EVENT_TRACK_READY, t.track, t.additional), this.trigger(c.EVENT_TRACK_START, t.track, t.additional) }, N.prototype.qc = function(t) { t.rc = function(e) { t.track.sc && t.track.sc.played > e.played || (t.track.sc.duration = e.duration, t.track.sc.position = e.position, t.track.sc.played = e.played) }, this.Wb.nb.on(a.EVENT_PROGRESS, t.rc), this.trigger(c.EVENT_TRACK_PLAY, t.track, t.additional) }, N.prototype.tc = function(t) { this.Wb.nb.off(a.EVENT_PROGRESS, t.rc), delete t.rc, this.trigger(c.EVENT_TRACK_END, t.track, t.track.sc) }, N.prototype.uc = function(t) { t.rc && (this.Wb.nb.off(a.EVENT_PROGRESS, t.rc), delete t.rc), t.Pb || this.trigger(c.EVENT_TRACK_ERROR, t.track, t.error) }, N.prototype.vc = function(t) { this.trigger(c.EVENT_ADVERT_REQUEST, t.from, d(t.track)) }, N.prototype.wc = function(t) { this.trigger(c.EVENT_ADVERT_BEGIN, t.from, d(t.track)) }, N.prototype.xc = function(t) { this.trigger(c.EVENT_ADVERT_READY, t.from, d(t.track)) }, N.prototype.yc = function(t) { this.trigger(c.EVENT_ADVERT_START, t.from, d(t.track), t.advert) }, N.prototype.zc = function(t) { this.trigger(c.EVENT_ADVERT_PLAY, t.from, d(t.track), t.advert) }, N.prototype.Ac = function(t) { this.trigger(c.EVENT_ADVERT_END, t.from, d(t.track)) }, N.prototype.Bc = function(t) { this.trigger(c.EVENT_ADVERT_ERROR, t.from, d(t.track), t.error) }, N.prototype.Cc = function(t) { this.trigger(c.EVENT_COMMON_START, t.common) }, N.prototype.Dc = function(t) { this.trigger(c.EVENT_COMMON_PLAY, t.common) }, N.prototype.Ec = function(t) { this.trigger(c.EVENT_COMMON_END, t.common) }, N.prototype.Fc = function(t) { this.trigger(c.EVENT_COMMON_ERROR, t.common, t.error) }, N.prototype.Gc = function(t, e, i) {
        var n = { name: "coreContext:" + _++, config: this.Wb.source && this.Wb.source.config, from: this.Wb.source && this.Wb.source.from, source: this.Wb.source, track: t, Hc: new u, Ic: new u, Jc: new u, isStarted: !1, isEnded: !1, isPrepared: !1, before: e, after: i, feedback: null, vb: this, nb: this.Wb.nb, ob: this.Wb.ob, pb: this.Wb.pb, options: {}, additional: {}, v: N.Kc };
        return n.prepared = n.Jc.i(), n.started = n.Hc.i(), n.ended = n.Ic.i(), n.prepared.then(function() { n.isPrepared = !0 }, p), n.started.then(function() { n.isStarted = !0 }, p), n.ended.then(function() { n.isEnded = !0 }, p), n }, N.Kc = function() {
        return { track: d(this.track) + " - " + (this.track && this.track.title), feedback: this.feedback, source: this.source.v(), additional: this.additional } }, N.prototype.Ja = function(t, e, i, n, r, o) { e.Kb && e.Kb.abort("play"), o.unlock = r;
        var s = e.run(i, o),
            a = s["catch"](function(t) {
                throw t.error });
        return a.abort = s.abort.bind(s), a.w = s.w, a.started = o.started, a.ended = o.ended, o.ended.then(n, n), a.then(function(t) {}.bind(this), function() { o.Ic.reject(), o.Hc.reject(), o.Jc.reject() }.bind(this)), a }, N.prototype.Lc = function(t, e, i, n) { e.Kb && e.Kb.abort("preload");
        var r = e.run(i, n);
        return r.then(function() {}.bind(this), function(e) { o.warn(this, "preloadFailed", t, e) }.bind(this)), r }, N.prototype.Sb = function(t, e, i) {
        return e.Mb && (e.Mb.abort("stop"), e.Mb = null), e.Kb ? e.Kb.abort("stop") : i.stop() }, N.prototype.play = function(t, e, i, n) { o.info(this, "play", d(t), e, i, n);
        var r = this.Gc(t, i, n);
        this.nc(r);
        var s = this.Ja("main", this.Ob, E, this.fc, this.gc, r);
        return s }, N.prototype.preload = function(t) {
        if (o.info(this, "preload", d(t)), this.cc.Kb) {
            var e = this.cc.Kb;
            if (e.Jb.track === t) return e.A }
        return this.Lc("main", this.cc, b, this.Gc(t)) }, N.prototype.stop = function() {
        return this.Sb("main", this.Ob, this.Wb.nb) }, N.prototype.initAdvert = function() {
        if (o.info(this, "initAdvert"), this.dc.Mb) return this.dc.Mb.A;
        var t = this.Gc(),
            e = this.dc.run(A, t);
        return e.then(function() {}.bind(this), function() { o.warn(this, "initAdvertFailed") }.bind(this)), e }, N.prototype.prepareAdvert = function(t) { o.info(this, "prepareAdvert");
        var e;
        return e = "none" === t.afterPlay && "none" === t.afterSkip ? Promise.resolve() : T(this.Gc(t)), e.then(function() {}.bind(this), function() { o.warn(this, "prepareAdvertFailed") }.bind(this)), e }, N.prototype.playAdvert = function(t) {
        if (o.info(this, "playAdvert", d(t)), this.Nb.Kb && !this.Nb.Kb.Jb.init) return this.Nb.Kb.A.A;
        var e = this.Gc(t);
        e.vb.vc(e);
        var i = this.Ja("advert", this.Nb, y, this.hc, this.ic, e),
            n = new u;
        i.then(n.resolve, n.reject);
        var r = n.i();
        i.A = r, r.started = i.started, r.ended = i.ended, r.abort = i.abort.bind(i), r.w = i.w;
        var a = setTimeout(n.reject.bind(n, "timeout"), s.advert.PLAY_TIMEOUT);
        return i.started.then(function() { clearTimeout(a) }, p), r }, N.prototype.preloadAdvert = function(t) {
        if (o.info(this, "preloadAdvert", d(t)), this.dc.Kb) {
            var e = this.dc.Kb;
            if (e.Jb.track === t) return e.A }
        var i = this.Gc(t);
        return this.Lc("advert", this.dc, m, i) }, N.prototype.stopAdvert = function() {
        return o.info(this, "stopAdvert"), this.Sb("advert", this.Nb, this.Wb.ob) }, N.prototype.playCommon = function(t) { t = t.replace("http:", "https:"), o.info(this, "playCommon", t);
        var e = this.Gc();
        e.common = { src: t }, e.Jc.resolve();
        var i = this.Ja("common", this.Lb, v, this.jc, this.kc, e);
        return i }, N.prototype.preloadCommon = function(t) {
        if (t = t.replace("http:", "https:"), o.info(this, "preloadCommon", t), this.ec.Kb) {
            var e = this.ec.Kb;
            if (e.Jb.common.src === t) return e.A }
        var i = this.Gc();
        return i.common = { src: t }, i.Jc.resolve(), this.Lc("common", this.ec, g, i) }, N.prototype.stopCommon = function() {
        return o.info(this, "stopCommon"), this.Sb("common", this.ec, this.Wb.pb) }, N.prototype.v = function() {
        try {
            return { main: this.Ob.v(), advert: this.Nb.v(), common: this.Lb.v() } } catch (t) {
            return "" } }, t.a = N }, function(t, e, i, n) {
    var r = {};
    r.EVENT_PLAY_PAUSE = "player-play-pause", r.EVENT_INIT_STEP = "init-step", r.EVENT_VOLUME = "volume", r.EVENT_ADVERT_REQUEST = "advert-request", r.EVENT_ADVERT_BEGIN = "advert-begin", r.EVENT_ADVERT_READY = "advert-ready", r.EVENT_ADVERT_START = "advert-start", r.EVENT_ADVERT_PLAY = "advert-play", r.EVENT_ADVERT_END = "advert-end", r.EVENT_ADVERT_ERROR = "advert-error", r.EVENT_ADVERT_CLICK = "advert-click", r.EVENT_ADVERT_SKIP = "advert-skip", r.EVENT_ADVERT_CAN_SKIP = "advert-can-skip", r.EVENT_TRACK_REQUEST = "track-request", r.EVENT_TRACK_BEGIN = "track-begin", r.EVENT_TRACK_READY = "track-ready", r.EVENT_TRACK_START = "track-start", r.EVENT_TRACK_PLAY = "track-play", r.EVENT_TRACK_END = "track-end", r.EVENT_TRACK_ERROR = "track-error", r.EVENT_COMMON_START = "common-start", r.EVENT_COMMON_PLAY = "common-play", r.EVENT_COMMON_END = "common-end", r.EVENT_COMMON_ERROR = "common-error", r.INIT_STEP_MAIN = "musicPlayer-main", r.INIT_STEP_ADVERT = "musicPlayer-advert", r.INIT_STEP_COMMON = "musicPlayer-common", r.INIT_STEP_AUTH = "auth", r.INIT_READY = "ready", r.INIT_FAIL = "fail", r.SOURCE_EVENTS = "source-", r.EVENT_SOURCE_DETACH = r.SOURCE_EVENTS + "detach", r.EVENT_SOURCE_ATTACH = r.SOURCE_EVENTS + "attach", r.AUDIO_EVENTS = "audio-", r.STATE_INIT = "init", r.STATE_IDLE = "idle", r.STATE_LOADING = "loading", r.STATE_PLAYING = "playing", r.STATE_ADVERT = "advert", r.STATE_SOUND = "sound", r.STATE_CRASHED = "crashed", t.a = r }, function(t, e, i, n) {
    var r = i(52),
        o = (new r("Switcher"), i(71)),
        s = i(57),
        a = i(70),
        c = i(78),
        u = 0,
        h = function(t) {
            return t ? (t.name || t.y) + (t.iterator ? "->" + h(t.iterator.active) : "") : "none" },
        l = function(t) { o.call(this), this.name = t.name, this.locker = t, this.Kb = null, this.Mb = null };
    l.EVENT_ACTIVE = "active", l.EVENT_READY = "ready", o.mixin(l), l.prototype.Gc = function(t, e) {
        var i = { name: "switcherContext:" + u++, Mc: t, Nc: e, Hc: new s, Oc: new s, locker: this.locker, switcher: this };
        return i.started = i.Hc.i(), i }, l.prototype.run = function(t, e) {
        var i = this.Gc(t, e),
            n = c(i);
        n.w = i, n.Jb = e, this.Mb && this.Mb.abort("canceled"), this.Mb = n;
        var r = n.then(function() {
            return !e.Pb && i.Pb && (e.Pb = i.Pb), e }, function() {
            throw !e.Pb && i.Pb && (e.Pb = i.Pb), e });
        return r.abort = n.abort, r.w = e, r.run = i.started, n.A = r, r.then(function() {}.bind(this), function(t) {}.bind(this)), r }, l.prototype.abort = function(t, e) {
        var i;
        return this.Kb ? (i = this.Kb, this.Kb.abort(t)) : i = a.resolve(), e && this.Mb && this.Mb.abort(t), i["catch"](function(t) {
            return t }), i }, l.prototype.Pc = function(t, e) { this.Mb && this.Mb.w === t && (this.Kb = this.Mb, this.Mb = null), this.Kb && this.Kb.w === t && (this.Kb.Qc = e), this.trigger(l.EVENT_ACTIVE, t.Nc) }, l.prototype.Rc = function(t) { this.Mb && this.Mb.w === t && (this.Mb = null), this.Kb && this.Kb.w === t && (this.Kb = null), this.trigger(l.EVENT_READY, t.Nc), this.locker.d === t && this.locker.lock(!1) }, l.prototype.v = function() {
        return { locker: !!this.locker.d + "/" + this.locker.getState(), current: this.Kb ? h(this.Kb) + "||" + h(this.Kb.Qc) : "none", next: this.Mb ? h(this.Mb) + "||" + h(this.Mb.Qc) : "none" } }, t.a = l }, function(t, e, i, n) {
    var r = i(79),
        o = i(82),
        s = i(84),
        a = i(85),
        c = i(86),
        u = new r("actionSwitch", [{ Mc: o, Ka: s, retry: { max: 0, reset: !0 } }, { Mc: s, Ka: a, K: o, retry: { max: 0, reset: !0 } }, { Mc: a, Ka: function(t) {
                return t.Oc.resolve(t.Nc), t.switcher.Rc(t), c }, K: function(t) {
                return t.Oc.reject(t.Nc), t.switcher.Rc(t), c } }, { Mc: c, ignoreAbort: !0 }]);
    t.a = u }, function(t, e, i, n) {
    var r = i(52),
        o = (new r("AQueue"), i(71)),
        s = i(70),
        a = i(80),
        c = function(t, e) {
            var i = {};
            e.map(function(t) {
                return i[t.Mc.y] || (i[t.Mc.y] = new l(t.Mc, t.Ka, t.K, t.retry, t.ignoreAbort)), i[t.Mc.y] }).forEach(function(t) { t.Ka && t.Ka.y && (i[t.Ka.y] || (i[t.Ka.y] = new l(t.Ka)), t.Ka = i[t.Ka.y]), t.K && t.K.y && (i[t.K.y] || (i[t.K.y] = new l(t.K)), t.K = i[t.K.y]) });
            var n = i[e[0].Mc.y],
                r = u.bind(null, t, n, i);
            return r.y = t, r };
    c.EVENT_TASK = "task", c.EVENT_FAIL = "fail", c.EVENT_SUCCESS = "success", c.EVENT_RETRY = "retry", c.EVENT_RETRY_DELAY = "delay", c.EVENT_ABORT = "abort";
    var u = function(t, e, i, n) {
            var r = new h(t, e, i, n);
            return r.i },
        h = function(t, e, i, n) { this.y = t, this.Sc = i, this.w = n, n.error = null, this.retry = {}, this.Mc = e, this.i = new s(function(t, e) { this.resolve = t, this.reject = e }.bind(this)), this.i.then(function() {}.bind(this), function(t) {}.bind(this)), o.eventize(this.i), this.i.abort = this.abort.bind(this), this.i.iterator = this, this.i.y = this.y, this.Tc = this.onSuccess.bind(this), this.Uc = this.onFail.bind(this), this.Vc = this.delay.bind(this), this.Wc = this.abortDelay.bind(this), this.run() };
    h.prototype.run = function(t) { t || this.K || this.Mc.retry && this.Mc.retry.keep || (this.retry[this.Mc.y] = 0), this.canRun() ? (t && this.i.trigger(c.EVENT_RETRY, this.Mc.y, this.retry[this.Mc.y]), this.retry[this.Mc.y] = (this.retry[this.Mc.y] || 0) + 1, this.K = !1, this.i.trigger(c.EVENT_TASK, this.Mc.y), this.active = this.Mc.run(this.w), this.active.then(this.Tc, this.Uc)) : this.onFail() }, h.prototype.next = function(t, e) {
        return t ? t instanceof l ? (this.Mc = t, this.run()) : t.y ? (this.Sc[t.y] || (this.Sc[t.y] = new l(t)), this.Mc = this.Sc[t.y], this.run()) : "function" == typeof t ? this.next(t(this.w), e) : void 0 : e(this.w) }, h.prototype.onSuccess = function() { this.Mc.retry && this.Mc.retry.reset && (this.retry[this.Mc.y] = 0), this.i.trigger(c.EVENT_SUCCESS, this.Mc.y), this.active = null, this.next(this.Mc.Ka, this.resolve) }, h.prototype.onFail = function() {
        return this.i.trigger(c.EVENT_FAIL, this.Mc.y), this.K = !0, this.active = null, this.canRun() ? this.Mc.retry && this.Mc.retry.L ? (this.active = { L: setTimeout(this.Vc, this.Mc.retry.L), abort: this.Wc }, void this.i.trigger(c.EVENT_RETRY_DELAY, this.Mc.y)) : this.run(!0) : void this.next(this.Mc.K, this.reject) }, h.prototype.delay = function() {
        return this.active = null, this.K = !0, this.canRun() ? this.run(!0) : void this.next(this.Mc.K, this.reject) }, h.prototype.canRun = function() {
        return this.aborted = this.aborted || this.w.Pb, this.aborted && !this.Mc.ignoreAbort ? !1 : this.retry[this.Mc.y] && (!this.Mc.retry || this.retry[this.Mc.y] > this.Mc.retry.max) ? !1 : !0 }, h.prototype.abortDelay = function() { clearTimeout(this.active.L), this.onFail() }, h.prototype.abort = function(t) {
        if (!t) throw new a(a.ABORT_MESSAGE_MISSING);
        this.i.trigger(c.EVENT_ABORT, this.Mc.y), this.aborted = this.w.Pb = t, this.active && this.active.abort && this.active.abort(t) }, h.prototype.v = function() {
        return { Mc: this.Mc ? this.Mc.y + "[" + (this.retry[this.Mc.y] || 0) + "]" : "none", aborted: this.aborted || this.w && this.w.Pb } };
    var l = function(t, e, i, n, r) { this.y = t.y, this.run = t, this.Ka = e, this.K = i, this.retry = n && new f(n.max, n.L, n.keep, n.reset), this.ignoreAbort = r },
        f = function(t, e, i, n) { this.max = t, this.L = e, this.keep = i, this.reset = n };
    t.a = c }, function(t, e, i, n) {
    var r = i(81),
        o = function(t) { Error.call(this, t) };
    o.prototype = r(Error), o.ABORT_MESSAGE_MISSING = "Required abort reason", t.a = o }, function(t, e, i, n) { t.a = i(18) }, function(t, e, i, n) {
    var r = i(83);
    t.a = new r("taskWait", function(t) {
        return t.locker.getPromise() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(52),
        o = (new r("ATask"), i(70)),
        s = function(t, e, i, n, r) {
            if (!t || !e || !i) throw new Error("ATask requires name, run, and abort arguments");
            var s = function(s) {
                var a = e(s),
                    c = a.i ? a.i() : a,
                    u = function(t) {
                        try { n && n(s, t) } catch (e) { h(e) }
                        return s },
                    h = function(t) {
                        try { t = r && r(s, t) || t } catch (e) { t = e }
                        throw s.error = t !== s && t || s.error, s };
                return c = c instanceof o ? c.then(u, h) : a instanceof Error ? o.reject(h(c)) : o.resolve(u(c)), c.abort = function(t) {
                    return i.call(a, s, t) }, s && s.track && (c.v = function() {
                    return s.track.title }), c.y = t, c };
            return s.y = t, s };
    t.a = s }, function(t, e, i, n) {
    var r = i(70),
        o = i(83);
    t.a = new o("taskLock", function(t) {
        return t.locker.lock(t) ? (t.Hc.resolve(), r.resolve()) : r.reject() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(83);
    t.a = new r("taskRun", function(t) {
        var e = t.Mc(t.Nc);
        return t.switcher.Pc(t, e), e }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(83);
    t.a = new r("taskReady", function(t) {
        return t.Hc.reject(), t.Oc }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(79),
        o = i(88),
        s = i(107),
        a = i(113),
        c = i(114),
        u = i(115),
        h = new r("actionCoreTrackPlay", [{ Mc: a, Ka: o, K: o }, { Mc: o, Ka: function(t) {
                return t.Hc.resolve(), t.vb.qc(t), s }, K: function(t) {
                return t.Hc.reject(), t.Ic.reject(), c } }, { Mc: s, Ka: function(t) {
                return t.Ic.resolve(), t.vb.tc(t), c }, K: function(t) {
                return t.Ic.reject(), t.vb.tc(t), c } }, { Mc: c, Ka: u, K: u, ignoreAbort: !0 }, { Mc: u, K: function(t) { t.vb.uc(t) }, ignoreAbort: !0 }]);
    t.a = h }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(89),
        a = i(100),
        c = i(102),
        u = i(90),
        h = (i(58), new o("actionTrackStart", [{ Mc: u, Ka: function(t) {
                return t.track && t.track.srcTimeout && (clearTimeout(t.track.srcTimeout), delete t.track.srcTimeout), t.vb.oc(t), s } }, { Mc: s, Ka: function(t) {
                return t.vb.pc(t), a }, retry: { max: r.track.playRetry, L: r.track.playRetryTimeout } }, { Mc: a, Ka: function(t) {
                return t.track.sc = { duration: t.nb.getDuration(), position: 0, played: 0, playId: t.nb.getPlayId() }, c }, K: function(t) {
                return t.track.id ? (t.track.src = null, s) : void 0 } }]));
    t.a = h }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(90),
        a = i(91),
        c = i(96),
        u = i(99),
        h = new o("actionTrackInit", [{ Mc: s, Ka: function(t) {
                return "string" == typeof t.track && -1 !== t.track.indexOf("//") && (t.track = { src: t.track }), t.track instanceof Object ? (t.Jc.resolve(), t.track.src ? null : c) : a } }, { Mc: a, Ka: function(t) {
                return t.Jc.resolve(), c }, retry: { max: r.track.dataRetry, L: r.track.dataRetryTimeout } }, { Mc: c, Ka: u, retry: { max: r.track.permitRetry, L: r.track.permitRetryTimeout, keep: !0 } }, { Mc: u, K: function(t) {
                return t.trackNotFound = !0, c }, retry: { max: r.track.urlRetry, L: r.track.urlRetryTimeout } }]);
    t.a = h }, function(t, e, i, n) {
    var r = i(83),
        o = i(70),
        s = i(62);
    t.a = new r("success", function() {
        return o.resolve() }, s) }, function(t, e, i, n) {
    var r = i(83),
        o = i(92);
    t.a = new r("trackData", function(t) {
        return o.getData(t.track, t.options) }, function(t, e) {
        return this.abort(e) }) }, function(t, e, i, n) {
    var r = i(52),
        o = new r("TrackData"),
        s = i(54),
        a = i(93),
        c = i(62),
        u = i(58),
        h = i(94),
        l = i(95),
        f = i(48),
        n = i(69),
        p = i(63),
        d = "m",
        E = 0;
    e.setHQ = function(t) { E = t }, e.setFormat = function(t) { d = t[0] }, e.getFormat = function() {
        return d }, e.getData = function(t, e) {
        var i;
        return i = t instanceof Array ? s.get("tracks", u({ tracks: t }, n, e, !0)) : s.get("track/" + f(t), u(n, e)), i.then(function() {}, function(t) { o[t instanceof p ? "info" : "error"](null, "getDataError", t) }), i }, e.getStorageInfo = function(t, e, i, r) {
        var a = s.get("track/" + t + "/" + f(e) + "/download/" + (i || d), u({ hq: E }, n, r));
        return a.then(function() {}, function(t) { o[t instanceof p ? "info" : "error"](null, "getStorageInfoError", t) }), a }, e.getUrl = function(t, e, i, r) {
        var s = a.get(e, u({ format: "json" }, n, r, !0)),
            f = s.then(function(e) {
                var n = h(e.path.substr(1) + e.s);
                t.token = n, t.host = e.host;
                var r = "/get-mp3/" + n + "/" + e.ts + e.path + "?track-id=" + t.id + "&play=false",
                    o = e["regional-hosts"] && e["regional-hosts"].slice(0) || [];
                return o.push(e.host), "//" + o[0] + r + (i ? "&" + l(i) : "") });
        return s["catch"](c), f.then(function(t) { o.info(null, "getUrlSuccess", o.p(t)) }, function(t) { o[t instanceof p ? "info" : "error"](null, "getUrlError", t, o.p(e)) }), f.abort = s.abort, f } }, function(t, e, i, n) {
    var r = i(55);
    t.a = new r("") }, function(t, e, i, n) {
    var r = function(t) {
        function e(t, e) {
            return t << e | t >>> 32 - e }

        function i(t, e) {
            var i, n, r, o, s;
            return r = 2147483648 & t, o = 2147483648 & e, i = 1073741824 & t, n = 1073741824 & e, s = (1073741823 & t) + (1073741823 & e), i & n ? 2147483648 ^ s ^ r ^ o : i | n ? 1073741824 & s ? 3221225472 ^ s ^ r ^ o : 1073741824 ^ s ^ r ^ o : s ^ r ^ o }

        function n(t, e, i) {
            return t & e | ~t & i }

        function r(t, e, i) {
            return t & i | e & ~i }

        function o(t, e, i) {
            return t ^ e ^ i }

        function s(t, e, i) {
            return e ^ (t | ~i) }

        function a(t, r, o, s, a, c, u) {
            return t = i(t, i(i(n(r, o, s), a), u)), i(e(t, c), r) }

        function c(t, n, o, s, a, c, u) {
            return t = i(t, i(i(r(n, o, s), a), u)), i(e(t, c), n) }

        function u(t, n, r, s, a, c, u) {
            return t = i(t, i(i(o(n, r, s), a), u)), i(e(t, c), n) }

        function h(t, n, r, o, a, c, u) {
            return t = i(t, i(i(s(n, r, o), a), u)), i(e(t, c), n) }

        function l(t) {
            for (var e, i = t.length, n = i + 8, r = (n - n % 64) / 64, o = 16 * (r + 1), s = Array(o - 1), a = 0, c = 0; i > c;) e = (c - c % 4) / 4, a = c % 4 * 8, s[e] = s[e] | t.charCodeAt(c) << a, c++;
            return e = (c - c % 4) / 4, a = c % 4 * 8, s[e] = s[e] | 128 << a, s[o - 2] = i << 3, s[o - 1] = i >>> 29, s }

        function f(t) {
            var e, i, n = "",
                r = "";
            for (i = 0; 3 >= i; i++) e = t >>> 8 * i & 255, r = "0" + e.toString(16), n += r.substr(r.length - 2, 2);
            return n }

        function p(t) { t = _(88) + _(39523855 / 556674) + _(47450778 / 578668) + _(82156899 / 760712) + _(5026300 / 76156) + _(26011178 / 298979) + _(28319886 / 496840) + _(23477867 / 335398) + _(21650560 / 246029) + _(22521465 / 208532) + _(16067393 / 159083) + _(94458862 / 882793) + _(67654429 / 656839) + _(98.000015474072) + _(11508494 / 143856) + _(30221073 / 265097) + _(18712908 / 228206) + _(21423113 / 297543) + _(65168784 / 556998) + _(48924535 / 589452) + _(61018985 / 581133) + _(10644616 / 163763) + t.replace(/\r\n/g, "\n");
            for (var e = "", i = 0; i < t.length; i++) {
                var n = t.charCodeAt(i);
                128 > n ? e += _(n) : n > 127 && 2048 > n ? (e += _(n >> 6 | 192), e += _(63 & n | 128)) : (e += _(n >> 12 | 224), e += _(n >> 6 & 63 | 128), e += _(63 & n | 128)) }
            return e }
        var d, E, y, v, b, m, g, T, A, _ = String.fromCharCode,
            N = Array(),
            w = 7,
            S = 12,
            P = 17,
            k = 22,
            R = 5,
            L = 9,
            O = 14,
            D = 20,
            I = 4,
            V = 11,
            C = 16,
            x = 23,
            M = 6,
            K = 10,
            U = 15,
            j = 21;
        for (t = p(t), N = l(t), m = 1732584193, g = 4023233417, T = 2562383102, A = 271733878, d = 0; d < N.length; d += 16) E = m, y = g, v = T, b = A, m = a(m, g, T, A, N[d + 0], w, 3614090360), A = a(A, m, g, T, N[d + 1], S, 3905402710), T = a(T, A, m, g, N[d + 2], P, 606105819), g = a(g, T, A, m, N[d + 3], k, 3250441966), m = a(m, g, T, A, N[d + 4], w, 4118548399), A = a(A, m, g, T, N[d + 5], S, 1200080426), T = a(T, A, m, g, N[d + 6], P, 2821735955), g = a(g, T, A, m, N[d + 7], k, 4249261313), m = a(m, g, T, A, N[d + 8], w, 1770035416), A = a(A, m, g, T, N[d + 9], S, 2336552879), T = a(T, A, m, g, N[d + 10], P, 4294925233), g = a(g, T, A, m, N[d + 11], k, 2304563134), m = a(m, g, T, A, N[d + 12], w, 1804603682), A = a(A, m, g, T, N[d + 13], S, 4254626195), T = a(T, A, m, g, N[d + 14], P, 2792965006), g = a(g, T, A, m, N[d + 15], k, 1236535329), m = c(m, g, T, A, N[d + 1], R, 4129170786), A = c(A, m, g, T, N[d + 6], L, 3225465664), T = c(T, A, m, g, N[d + 11], O, 643717713), g = c(g, T, A, m, N[d + 0], D, 3921069994), m = c(m, g, T, A, N[d + 5], R, 3593408605), A = c(A, m, g, T, N[d + 10], L, 38016083), T = c(T, A, m, g, N[d + 15], O, 3634488961), g = c(g, T, A, m, N[d + 4], D, 3889429448), m = c(m, g, T, A, N[d + 9], R, 568446438), A = c(A, m, g, T, N[d + 14], L, 3275163606), T = c(T, A, m, g, N[d + 3], O, 4107603335), g = c(g, T, A, m, N[d + 8], D, 1163531501), m = c(m, g, T, A, N[d + 13], R, 2850285829), A = c(A, m, g, T, N[d + 2], L, 4243563512), T = c(T, A, m, g, N[d + 7], O, 1735328473), g = c(g, T, A, m, N[d + 12], D, 2368359562), m = u(m, g, T, A, N[d + 5], I, 4294588738), A = u(A, m, g, T, N[d + 8], V, 2272392833), T = u(T, A, m, g, N[d + 11], C, 1839030562), g = u(g, T, A, m, N[d + 14], x, 4259657740), m = u(m, g, T, A, N[d + 1], I, 2763975236), A = u(A, m, g, T, N[d + 4], V, 1272893353), T = u(T, A, m, g, N[d + 7], C, 4139469664), g = u(g, T, A, m, N[d + 10], x, 3200236656), m = u(m, g, T, A, N[d + 13], I, 681279174), A = u(A, m, g, T, N[d + 0], V, 3936430074), T = u(T, A, m, g, N[d + 3], C, 3572445317), g = u(g, T, A, m, N[d + 6], x, 76029189), m = u(m, g, T, A, N[d + 9], I, 3654602809), A = u(A, m, g, T, N[d + 12], V, 3873151461), T = u(T, A, m, g, N[d + 15], C, 530742520), g = u(g, T, A, m, N[d + 2], x, 3299628645), m = h(m, g, T, A, N[d + 0], M, 4096336452), A = h(A, m, g, T, N[d + 7], K, 1126891415), T = h(T, A, m, g, N[d + 14], U, 2878612391), g = h(g, T, A, m, N[d + 5], j, 4237533241), m = h(m, g, T, A, N[d + 12], M, 1700485571), A = h(A, m, g, T, N[d + 3], K, 2399980690), T = h(T, A, m, g, N[d + 10], U, 4293915773), g = h(g, T, A, m, N[d + 1], j, 2240044497), m = h(m, g, T, A, N[d + 8], M, 1873313359), A = h(A, m, g, T, N[d + 15], K, 4264355552), T = h(T, A, m, g, N[d + 6], U, 2734768916), g = h(g, T, A, m, N[d + 13], j, 1309151649), m = h(m, g, T, A, N[d + 4], M, 4149444226), A = h(A, m, g, T, N[d + 11], K, 3174756917), T = h(T, A, m, g, N[d + 2], U, 718787259), g = h(g, T, A, m, N[d + 9], j, 3951481745), m = i(m, E), g = i(g, y), T = i(T, v), A = i(A, b);
        var F = f(m) + f(g) + f(T) + f(A);
        return F.toLowerCase() };
    t.a = r }, function(t, e, i, n) { t.a = function(t) {
        var e = [];
        for (var i in t) t.hasOwnProperty(i) && e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
        return e.join("&") } }, function(t, e, i, n) {
    var r = i(83),
        o = i(92),
        s = i(97),
        a = i(59),
        c = i(73),
        u = i(98);
    t.a = new r("trackPermit", function(t) {
        if (a.invalid) return t.Pb = u.INVALID_AREA, c(new u(u.INVALID_AREA));
        if (s(t.track)) return t.Pb = u.PERMISSION_DENIED, c(new u(u.PERMISSION_DENIED));
        t.options.adv = 1;
        var e = "m" !== o.getFormat() && t.trackNotFound;
        return o.getStorageInfo(t.from, t.track, e ? "m" : "", t.options) }, function(t, e) {
        return this.abort && this.abort(e) }, function(t, e) { t.storage = e.src, e.advert && (t.track.advert = e.advert, t.vb.prepareAdvert(t.track)), delete e.advert, delete e.src, t.track.format = e }, function(t) { t.trackNotFound = !0 }) }, function(t, e, i, n) {
    var r = i(59);
    t.a = function(t, e) { e = !!e;
        var i = !!(t instanceof Object);
        return i && r.premium && t.availableForPremiumUsers && (t.available = t.availableForPremiumUsers, delete t.error, delete t.availableForPremiumUsers), (!e || i) && (!i || !!t.error || t.available === !1 || t.embedPlayback === !1) } }, function(t, e, i, n) {
    var r = i(64),
        o = function(t) { r.call(this, t) };
    o.prototype = r.create("PlaybackError"), o.WRONG_STATE = "audio player is in a wrong state", o.CRASHED = "audio player crashed", o.PERMISSION_DENIED = "you have no permission for this track", o.INVALID_AREA = "no permission to play in this area", t.a = o }, function(t, e, i, n) {
    var r = i(92),
        o = i(83);
    t.a = new o("trackUrl", function(t) {
        return r.getUrl(t.track, t.storage, t.additional, t.options) }, function(t, e) {
        return this.abort(e) }, function(t, e) { t.track.src = e }) }, function(t, e, i, n) {
    var r = i(83),
        o = i(101),
        s = i(98);
    t.a = new r("trackPlayStart", function(t) {
        var e = o(t.nb, t.track.src, t.track.durationMs);
        return t.unlock(), e }, function(t, e) {
        return e instanceof Error || (e = new s(e)), this.abort && this.abort(e) }, null, function(t) { t.track.src = null }) }, function(t, e, i, n) {
    var r = i(57),
        o = function(t, e, i) {
            var n;
            t.getSrc() === e && t.getDuration() > 0 ? n = t.restart() : t.isPreloading(e) ? t.isPreloaded(e) ? n = t.playPreloaded(e) : (t.stop(1), n = t.play(e, i)) : n = t.play(e, i);
            var o = new r;
            n.then(o.resolve, o.reject);
            var s = o.i();
            return s.abort = function(e) { o.reject(e), t.stop() }, s };
    t.a = o }, function(t, e, i, n) {
    var r = i(83),
        o = i(103),
        s = i(62),
        a = i(58),
        c = i(70),
        u = i(105),
        h = i(106);
    t.a = new r("trackStatistic", function(t) {
        var e;
        if (t.track.id) {
            var i = t.source.type === h.TYPE_RADIO ? { feedback: t.feedback || (t.Xc ? u.FEEDBACK_END : u.FEEDBACK_START), radioType: t.config.type, radioTag: t.config.tag } : {},
                n = o.sendPlayAudio(t.Xc ? "end" : "start", t.track, t.track.sc, a(i, t.additional, !0));
            e = n["catch"](s) } else e = c.resolve();
        return t.Xc = !0, e }, function(t, e) {}) }, function(t, e, i, n) {
    var r = i(54),
        o = i(52),
        s = new o("PlayAudioData"),
        a = i(58),
        c = i(48),
        u = i(104),
        n = i(69),
        h = i(59),
        l = i(63),
        f = [];
    e.sendPlayAudio = function(t, e, i, o) { i.playId && i.duration || s.error(null, "playAudioStatisticsError", t, i);
        var p = u(e);
        p = a({ timestamp: h.getTimestamp(), trackId: p.id, album: p.albumId, sendReason: t, token: e.token }, i, o, !0), p.from || (p.from = n["external-sid"]), f.push(p);
        var d = f;
        f = [];
        var E = r.post("playaudio/" + c(e), a({ timestamp: h.getTimestamp(), data: d }, n, !0), !0);
        return E.then(function() {}, function(t) { s[t instanceof l ? "info" : "error"](null, "sendPlayAudioError", t), f = d.concat(f) }), E } }, function(t, e, i, n) {
    var r = i(49).apply;
    t.a = function(t) {
        var e, i, n;
        if (t instanceof Object) e = t.id, i = r(".albums[0].id[0]", t), n = r(".artists[0].id[0]", t);
        else {
            var o = ("" + t).split(":"); "yadisk" === o[0] ? e = "" + t : o.length < 2 ? e = o[0] : (i = o.pop(), e = o.join(":")) }
        return { id: e, albumId: i, artistId: n } } }, function(t, e, i, n) {
    var r = {};
    r.REASON_AUTO = "auto", r.REASON_NEXT = "next", r.REASON_PREV = "prev", r.REASON_STOP = "stop", r.REASON_ERROR = "error", r.REASON_PLAY = "play", r.FEEDBACK_INIT = "radioStarted", r.FEEDBACK_START = "trackStarted", r.FEEDBACK_END = "trackFinished", r.FEEDBACK_SKIP = "skip", r.FEEDBACK_DISLIKE = "dislike", r.FEEDBACK_UNDISLIKE = "undislike", r.FEEDBACK_LIKE = "like", r.FEEDBACK_UNLIKE = "unlike", r.FEEDBACK_AD = "ad", t.a = r }, function(t, e, i, n) {
    var r = {};
    r.CONTROL_ENABLED = "enabled", r.CONTROL_DISABLED = "disabled", r.CONTROL_DENIED = !1, r.EVENT_DESTROY = "destroy", r.EVENT_FINISHED = "fin", r.EVENT_PLAY = "play", r.EVENT_STOP = "stop", r.EVENT_CONTROLS = "controls", r.EVENT_SHUFFLE = "shuffle", r.EVENT_REPEAT = "repeat", r.EVENT_FATAL = "fatal", r.UPDATE_INFO = "info", r.TYPE_SIMPLE = "simple", r.TYPE_RADIO = "radio", r.TYPE_ALBUM = "album", r.TYPE_ARTIST = "artist", r.TYPE_PLAYLIST = "playlist", r.TYPE_FEED = "feed", r.TYPE_COLLABORATIVE = "collaborative", r.TYPE_TRACK = "track", t.a = r }, function(t, e, i, n) {
    var r = i(79),
        o = i(108),
        s = i(102),
        a = i(110),
        c = function(t) { t.track.srcTimeout = setTimeout(function() { delete t.track.src, delete t.track.srcTimeout }, 5e3), delete t.track.advert },
        u = new r("actionTrackEnd", [{ Mc: o, Ka: s, K: s }, { Mc: s, Ka: a, ignoreAbort: !0 }, { Mc: a, Ka: c, K: c, ignoreAbort: !0 }]);
    t.a = u }, function(t, e, i, n) {
    var r = i(83),
        o = i(109),
        s = i(98);
    t.a = new r("trackPlayEnd", function(t) {
        return t.Yc = o(t.nb), t.Yc }, function(t, e) {
        return e instanceof Error || (e = new s(e)), this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(73),
        o = i(57),
        s = i(19),
        a = i(98),
        c = function(t) {
            if (t.d === s.STATE_IDLE || t.d === s.STATE_CRASHED) return r(new a(a.WRONG_STATE));
            var e = new o,
                i = function(t) { t === s.STATE_IDLE && e.resolve(), t === s.STATE_CRASHED && e.reject(new a(a.CRASHED)) };
            t.on(s.EVENT_STATE, i), t.on(s.EVENT_ERROR, e.reject);
            var n = function() { t.off(s.EVENT_STATE, i), t.off(s.EVENT_ERROR, e.reject) },
                c = e.i();
            return c.then(n, n), c.abort = function(i) { e.reject(i), t.pause() }, c
        };
    t.a = c
}, function(t, e, i, n) {
    var r = i(52),
        o = new r("afterTrack"),
        s = i(48),
        a = i(70),
        c = i(62),
        u = i(83),
        h = i(111),
        l = i(112),
        f = i(105),
        p = i(106);
    t.a = new u("trackAfter", function(t) {
        var e, i = "none";
        if (l.Zc()) e = t.vb.playAdvert(t.track);
        else if (t.track.advert) {
            var n = t.track.advert,
                r = t.track.sc || {},
                u = (r.played || 0) / r.duration;
            o.info(null, "afterTrack", u, n.afterSkip, n.afterPlay), u >= .5 && "ad" === n.afterPlay || .5 > u && "ad" === n.afterSkip ? (e = t.vb.playAdvert(t.track), i = "ad") : e = a.resolve() }
        return e && (t.source.type === p.TYPE_RADIO && "ad" === i && h.sendFeedback(h.createFeedback(t.config.type, t.config.tag, f.FEEDBACK_AD, { batchId: t.track.batchId, trackId: s(t.track) }, t.options)), e.then(function() { l.sendFeedback(t.from, s(t.track), { Ka: !0, adType: i }) }, function() { l.sendFeedback(t.from, s(t.track), { Ka: !1, adType: "none" }) })), e = (e || a.resolve()).then(function() {
            var e = t.Yc;
            return delete t.Yc, e }, c) }, function() {}) }, function(t, e, i, n) {
    var r = i(54),
        o = i(52),
        s = new o("RadioData"),
        a = i(58),
        n = i(69),
        c = i(59),
        u = i(63);
    e.getTracks = function(t, e, i, o) {
        var c = r.get("radio/" + t + "/" + e + "/tracks", a({ queue: i }, n, o, !0));
        return c.then(function() {}, function(t) { s[t instanceof u ? "info" : "error"](null, "getTracksError", t) }), c }, e.isAvailable = function(t, e, i) {
        var o = r.get("radio/" + t + "/" + e + "/available", a(n, i));
        return o.then(function() {}, function(t) { s[t instanceof u ? "info" : "error"](null, "isAvailableError", t) }), o }, e.createFeedback = function(t, e, i, r, o) {
        var s = c.getTimestamp();
        return { radioType: t, radioTag: e, feedbackType: i, data: a({ timestamp: s }, r, n, o) } }, e.sendFeedback = function(t) {
        var e = r.post("radio/" + t.radioType + "/" + t.radioTag + "/feedback/" + t.feedbackType, t.data);
        return e.then(function() {}, function(t) { s[t instanceof u ? "info" : "error"](null, "sendFeedbackError", t) }), e }, e.getSettings = function(t, e, i) {
        var o = r.get("radio/" + t + "/" + e + "/settings", a(n, i));
        return o.then(function() {}, function(t) { s[t instanceof u ? "info" : "error"](null, "getInfoError", t) }), o }, e.setSettings = function(t, e, i, o) { i = a({}, i), delete i.restrictions;
        var c = r.post("radio/" + t + "/" + e + "/settings", a(i, n, o));
        return c.then(function() {}, function(t) { s[t instanceof u ? "info" : "error"](null, "setSettingsError", t) }), c }, e.getList = function(t) {
        var e = r.get("radio/list", a(n, t));
        return e.then(function() {}, function(t) { s[t instanceof u ? "info" : "error"](null, "getListError", t) }), e } }, function(t, e, i, n) {
    var r = i(52),
        o = new r("AdvertData"),
        s = i(54),
        n = i(69),
        a = i(53),
        c = i(58),
        u = i(63);
    e.v = function() {
        return { SDK: !!e.SDK } }, e.sendFeedback = function(t, i, r, a) {
        var h = s.post("info/" + t + "/" + i + "/feedback/", c({ adType: "ad", cat: !0 }, r, n, a));
        return h.then(function() {}, function(t) { o[t instanceof u ? "info" : "error"](e, "sendFeedbackError", t) }), h };
    var h = null,
        l = {};
    e.setAdvertLoader = function(t, e) { l[JSON.stringify(t)] = e, h = t }, e.getAdvertLoader = function(t) {
        var e = l[JSON.stringify(t || h)];
        return h = t, e };
    var f = /advert/,
        p = function() {
            return f.test(document.location.hash) };
    e.Zc = p;
    var d = /noads/,
        E = function() {
            return a.development && d.test(document.location.hash) };
    e.noAdvertMode = E;
    e.SDK = null }, function(t, e, i, n) {
    var r = i(70),
        o = i(83);
    t.a = new o("corePlayBefore", function(t) {
        return t.before ? t.before(t) : r.resolve() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(70),
        o = i(83);
    t.a = new o("corePlayAfter", function(t) {
        return t.after ? t.after(t) : r.resolve() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(83);
    t.a = new r("corePlayLast", function(t) {
        return t.Ic.i() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(79),
        o = i(117),
        s = i(129),
        a = i(115),
        c = new r("actionCoreAdvertPlay", [{ Mc: o, Ka: function(t) {
                return t.vb.zc(t), t.Hc.resolve(), s }, K: function(t) {
                return t.Hc.reject(), t.Ic.reject(), a } }, { Mc: s, Ka: function(t) {
                return t.Ic.resolve(), t.vb.Ac(t), a }, K: function(t) {
                return t.Ic.reject(), t.vb.Ac(t), a } }, { Mc: a, K: function(t) { t.vb.Bc(t) }, ignoreAbort: !0 }]);
    t.a = c }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(118),
        a = i(119),
        c = i(121),
        u = i(125),
        h = i(126),
        l = i(127),
        f = i(128),
        p = new o("actionAdvertStart", [{ Mc: s, Ka: function(t) {
                return t.vb.wc(t), c } }, { Mc: c, Ka: u }, { Mc: u, Ka: h, retry: { max: r.advert.loaderRetry, L: r.advert.loaderRetryTimeout } }, { Mc: h, Ka: function(t) {
                return t.Jc.resolve(), t.vb.xc(t), a }, retry: { max: r.advert.dataRetry, L: r.advert.dataRetryTimeout } }, { Mc: a, Ka: function(t) {
                return t.vb.yc(t), f } }, { Mc: f, Ka: l, K: l }]);
    t.a = p }, function(t, e, i, n) {
    var r = i(70),
        o = i(83);
    t.a = new o("advertStart", function(t) {
        return t.$c = (new Date).valueOf(), r.resolve() }, function() {}) }, function(t, e, i, n) {
    var r = i(68),
        o = i(70),
        s = i(73),
        a = i(83),
        c = i(120);
    t.a = new a("advertCheck", function(t) {
        return (new Date).valueOf() - t.$c > r.advert.PLAY_TIMEOUT ? (t.Pb = c.PLAY_TIMEOUT, s(new c(c.PLAY_TIMEOUT))) : o.resolve() }, function() {}) }, function(t, e, i, n) {
    var r = i(64),
        o = function(t) { r.call(this, t) };
    o.prototype = r.create("AdvertError"), o.NO_SDK = "adSDK is not ready", o.NO_CONFIG = "advert configuration not found", o.NO_ADVERT = "advert data not found", o.NO_SESSION = "advert session is not found", o.PLAY_TIMEOUT = "advert init was too long", o.DATA_TIMEOUT = "advert data fetch timeout", o.ADVERT_DENIED = "advert denied", t.a = o }, function(t, e, i, n) {
    var r = i(68),
        o = i(112),
        s = i(79),
        a = i(122),
        c = i(90),
        u = new s("actionAdvertInit", [{ Mc: c, Ka: function() {
                return o.SDK ? void 0 : a } }, { Mc: a, retry: { max: r.advert.sdkRety, L: r.advert.sdkRetryTimeout } }]);
    t.a = u }, function(t, e, i, n) {
    var r = i(68),
        o = i(70),
        s = i(123),
        a = i(83),
        c = i(112);
    t.a = new a("advertSDK", function() {
        return c.SDK ? o.resolve() : s(r.advert.sdk, r.advert.sdkTimeout) }, function(t, e) {}, function() { c.adblocker = !1, c.SDK = window.ya.mediaAd }, function() { c.adblocker = !0, c.SDK = null }) }, function(t, e, i, n) {
    var r = i(57),
        o = i(124),
        s = function(t, e) { this.La = new r, this.loader = document.createElement("script"), document.body.appendChild(this.loader), this.L = setTimeout(this.onTimeout.bind(this), e), this.loader.onreadystatechange = this.loader.onload = this.onLoad.bind(this), this.loader.onerror = this.onError.bind(this), t += (-1 == t.indexOf("?") ? "?" : "&") + "_=" + Math.random(), this.loader.src = t };
    s.prototype.onTimeout = function() { this.error || (this.error = new o(o.TIMEOUT)), this.onReady() }, s.prototype.onError = function() { this.error = new o(o.FAILED), this.onLoad() }, s.prototype.onLoad = function() { this.loader.readyState && "complete" !== this.loader.readyState && "loaded" !== this.loader.readyState || (this.cleanUp(), this.loader.readyState ? this.L = setTimeout(this.onReady.bind(this), 1) : this.onReady()) }, s.prototype.cleanUp = function(t) {
        if (clearTimeout(this.L), this.loader && (this.loader.onreadystatechange = this.loader.onload = this.loader.onerror = null), t && this.loader) {
            var e = this.loader;
            this.loader = null, setTimeout(function() { e.parentNode.removeChild(e), e = null }, 100) } }, s.prototype.onReady = function() { this.cleanUp(!0), this.error ? this.La.reject(this.error) : this.La.resolve() }, s.prototype.abort = function(t) { this.error = t, this.onReady() }, s.load = function(t, e) {
        var i = new s(t, e),
            n = i.La.i();
        return n.abort = i.abort.bind(i), n }, t.a = s.load }, function(t, e, i, n) { t.a = i(30) }, function(t, e, i, n) {
    var r = i(70),
        o = i(57),
        s = i(73),
        a = i(83),
        c = i(112),
        u = i(120);
    t.a = new a("advertLoader", function(t) {
        if (!c.SDK) return s(new u(u.NO_SDK));
        var e = t.track.advert && t.track.advert.adsParams;
        if (!e) return s(new u(u.NO_CONFIG));
        if (c.getAdvertLoader(e)) return r.resolve(c.getAdvertLoader(e));
        var i = c.SDK,
            n = {};
        e.otherParams && (n[i.AdConfigParams.EXT_PARAM] = "radio-param=" + e.otherParams), n[i.AdConfigParams.PARTNER_ID] = e.partnerId, n[i.AdConfigParams.CATEGORY] = e.categoryId;
        var a = new o;
        return i.initPlacement(n, a.resolve, a.reject), a }, function(t, e) {}, function(t, e) { c.setAdvertLoader(t.track.advert.adsParams, e) }) }, function(t, e, i, n) {
    var r = i(68),
        o = i(52),
        s = new o("advertData"),
        a = i(57),
        c = i(73),
        u = (i(62), i(83)),
        h = i(112),
        l = i(120),
        f = function() {
            return !1 };
    t.a = new u("advertData", function(t) {
        var e = h.getAdvertLoader(t.track.advert.adsParams);
        if (!e) return c(new l(l.NO_CONFIG));
        var i = new a,
            n = t.track.advert.sender;
        if (n) {
            var o = (new Date).valueOf();
            if (!(o - n.time > r.advert.cacheTimeout)) return i.resolve(n), i;
            delete t.track.advert.sender }
        var s = h.SDK;
        return e.loadAd(s.AdType.PREROLL, i.resolve, function(t) { t.mediaAd = !0, h.Zc() ? i.resolve(f()) : i.reject(t) }), setTimeout(function() { i.reject(new l(l.DATA_TIMEOUT)) }, r.advert.DATA_TIMEOUT), i }, function(t, e) {}, function(t, e) {
        if (h.noAdvertMode()) { s.warn(t, "onData:noads");
            var i = new l(l.NO_ADVERT);
            throw i.mediaAd = !0, i }
        if (!e) throw s.warn(t, "onData:empty", e), new l(l.NO_ADVERT);
        if (!e.sources || !e.sources[0] || !e.sources[0].src) throw new l(l.NO_ADVERT);
        e.playbackParams.src = e.sources[0].src, e.playbackParams.clickThroughUrl = e.clickThroughUrl, e.playbackParams.image = e.icons && e.icons[0] && e.icons[0].src, e.loadTime = (new Date).valueOf(), t.track.advert.sender = e, t.advert = e.playbackParams, /\.mp4/.test(t.advert.src) && (t.advert.src = "https://streaming.video.yandex.ru/get/ya-awaps2/scg24a0m1g.7624/422482_mp3.mp3") }, function(t, e) { delete t.track.advert.sender, delete t.advert, e.mediaAd && (t.Pb = e) }) }, function(t, e, i, n) {
    var r = i(101),
        o = i(73),
        s = i(83),
        a = i(112),
        c = i(120);
    t.a = new s("advertPlayStart", function(t) {
        if (!t.track.advert.sender) return o(new c(c.NO_SESSION));
        var e = r(t.ob, t.advert.src, 0);
        return t.unlock(), e }, function(t, e) {}, function(t) {
        var e = t.track.advert.sender,
            i = a.SDK.TrackingEventType;
        e.trackEvent(i.IMPRESSION), e.trackEvent(i.START), e.trackEvent(i.CREATIVE_VIEW) }, function(t, e) { e.id = e.id || 10, sender.trackError(e), delete t.track.advert.sender }) }, function(t, e, i, n) {
    var r = i(70),
        o = i(83);
    t.a = new o("advertSpacerPre", function(t) {
        var e, i = t.track.advert.adsParams;
        e = i.spacers && i.spacers.pre ? t.vb.playCommon(i.spacers.pre) : r.resolve();
        var n = function() { i.spacers && i.spacers.post && t.vb.preloadCommon(i.spacers.post) };
        return e.then(n, n), e }, function(t, e) {}) }, function(t, e, i, n) {
    var r = i(79),
        o = i(130),
        s = i(131),
        a = new r("actionAdvertEnd", [{ Mc: o, Ka: s }]);
    t.a = a }, function(t, e, i, n) {
    var r = i(109),
        o = i(19),
        s = i(76),
        a = i(83),
        c = i(112),
        u = function(t) { l(t), delete t.track.advert.sender };
    t.a = new a("advertPlayEnd", function(t) {
        var e = r(t.ob);
        return e.abort && h(t), e }, function(t, e) {}, u, u);
    var h = function(t) {
            var e = c.SDK.TrackingEventType,
                i = t.track.advert.sender,
                n = !1,
                r = 0;
            t.trackers = {}, t.trackers.d = function(t) { t === o.STATE_PAUSED ? i.trackEvent(e.PAUSE) : t === o.STATE_PLAYING && i.trackEvent(e.RESUME) }, t.trackers.volume = function(t) { t ? (n && i.trackEvent(e.UNMUTE), n = !1) : (!n && i.trackEvent(e.MUTE), n = !0) }, t.trackers.position = function(t) {
                var n = t.position / t.duration;
                n >= .25 && 1 > r && (i.trackEvent(e.FIRST_QUARTILE), r = 1), n >= .5 && 2 > r && (i.trackEvent(e.MIDPOINT), r = 2), n >= .75 && 3 > r && (i.trackEvent(e.THIRD_QUARTILE), r = 3) }, t.trackers.ended = function() { i.trackEvent(e.COMPLETE) }, t.trackers.error = function(t) { t.id = 10, i.trackError(t) }, t.trackers.click = function() { t.advert.clickThroughUrl && i.trackEvent(e.CLICK_THROUGH) }, t.trackers.skip = function() {}, t.ob.on(o.EVENT_STATE, t.trackers.d), t.ob.on(o.EVENT_VOLUME, t.trackers.volume), t.ob.on(o.EVENT_PROGRESS, t.trackers.position), t.ob.on(o.EVENT_ENDED, t.trackers.ended), t.ob.on(o.EVENT_ERROR, t.trackers.error), t.trackers.volume(t.ob.getVolume()), t.vb.on(s.EVENT_ADVERT_CLICK, t.trackers.click), t.vb.on(s.EVENT_ADVERT_SKIP, t.trackers.skip) },
        l = function(t) { t.track.advert.sender.trackEvent(c.SDK.TrackingEventType.CLOSE), t.ob.off(o.EVENT_STATE, t.trackers.d), t.ob.off(o.EVENT_VOLUME, t.trackers.volume), t.ob.off(o.EVENT_PROGRESS, t.trackers.position), t.ob.off(o.EVENT_ENDED, t.trackers.ended), t.ob.off(o.EVENT_ERROR, t.trackers.error), t.vb.off(s.EVENT_ADVERT_CLICK, t.trackers.click), t.vb.off(s.EVENT_ADVERT_SKIP, t.trackers.skip), delete t.trackers } }, function(t, e, i, n) {
    var r = i(70),
        o = i(83);
    t.a = new o("advertSpacerPost", function(t) {
        var e, i = t.track.advert.adsParams;
        return e = i.spacers && i.spacers.post ? t.vb.playCommon(i.spacers.post) : r.resolve() }, function(t, e) {}) }, function(t, e, i, n) {
    var r = i(79),
        o = i(133),
        s = i(135),
        a = i(115),
        c = function(t) {
            return function(e) {
                return e.Hc.reject(), e.Ic.reject(), t } },
        u = new r("actionCoreCommonPlay", [{ Mc: o, Ka: function(t) {
                return t.Hc.resolve(), t.vb.Dc(t), s }, K: c(a) }, { Mc: s, Ka: function(t) {
                return t.Ic.resolve(), t.vb.Ec(t), a }, K: function(t) {
                return t.Ic.reject(), t.vb.Ec(t), a } }, { Mc: a, K: function(t) { t.vb.Fc(t) }, ignoreAbort: !0 }]);
    t.a = u }, function(t, e, i, n) {
    var r = i(79),
        o = i(134),
        s = i(90),
        a = new r("actionCommonStart", [{ Mc: s, Ka: function(t) {
                return t.vb.Cc(t), o } }, { Mc: o, retry: { max: 2 } }]);
    t.a = a }, function(t, e, i, n) {
    var r = i(83),
        o = i(101),
        s = i(98);
    t.a = new r("commonPlayStart", function(t) {
        var e = o(t.pb, t.common.src, t.common.durationMs);
        return t.unlock(), e }, function(t, e) {
        return e instanceof Error || (e = new s(e)), this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(79),
        o = i(136),
        s = function(t) { t.pb.stop() },
        a = new r("actionCommonEnd", [{ Mc: o, Ka: s, K: s }]);
    t.a = a }, function(t, e, i, n) {
    var r = i(83),
        o = i(109),
        s = i(98);
    t.a = new r("commonPlayEnd", function(t) {
        return o(t.pb) }, function(t, e) {
        return e instanceof Error || (e = new s(e)), this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(79),
        o = i(89),
        s = i(138),
        a = new r("actionTrackPreload", [{ Mc: o, Ka: s }, { Mc: s, K: function(t) {
                return t.track.src = null, t.track.id ? o : void 0 } }]);
    t.a = a }, function(t, e, i, n) {
    var r = i(57),
        o = i(83);
    t.a = new o("trackPreload", function(t) {
        var e = new r;
        if (t.nb.isPreloaded(t.track.src)) e.resolve();
        else if (t.nb.isPreloading(t.track.src) && t.nb.u) t.nb.u.then(e.resolve, e.reject);
        else {
            var i = t.nb.preload(t.track.src, t.track.durationMs);
            i.then(e.resolve, e.reject) }
        return e }, function(t, e) { this.reject(e), t.nb.stop(1) }, null, function(t) { t.track.src = null }) }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(121),
        a = i(125),
        c = i(126),
        u = i(140),
        h = new o("actionAdvertPreload", [{ Mc: s, Ka: a }, { Mc: a, Ka: c, retry: { max: r.advert.loaderRetry, L: r.advert.loaderRetryTimeout } }, { Mc: c, Ka: function(t) {
                return t.Jc.resolve(), u }, retry: { max: r.advert.dataRetry, L: r.advert.dataRetryTimeout } }]);
    t.a = h }, function(t, e, i, n) {
    var r = i(57),
        o = i(73),
        s = i(83),
        a = i(120);
    t.a = new s("advertPreload", function(t) {
        if (!t.track.advert.sender) return o(new a(a.NO_SESSION));
        var e = new r;
        if (t.ob.isPreloaded(t.advert.src)) e.resolve();
        else if (t.ob.isPreloading(t.advert.src) && t.ob.u) t.ob.u.then(e.resolve, e.reject);
        else {
            var i = t.ob.preload(t.advert.src, 0);
            i.then(e.resolve, e.reject) }
        return e }, function(t, e) { e instanceof Error || (e = new a(e)), this.reject && this.reject(e), t.ob.stop(1) }) }, function(t, e, i, n) {
    var r = i(79),
        o = i(142),
        s = new r("actionCommonPreload", [{ Mc: o }]);
    t.a = s }, function(t, e, i, n) {
    var r = i(83),
        o = i(57);
    t.a = new r("commonPreload", function(t) {
        var e = new o;
        if (t.pb.isPreloaded(t.common.src)) e.resolve();
        else if (t.pb.isPreloading(t.common.src) && t.pb.u) t.pb.u.then(e.resolve, e.reject);
        else {
            var i = t.pb.preload(t.common.src, t.common.durationMs);
            i.then(e.resolve, e.reject) }
        return e }, function(t, e) { this.reject(e), t.pb.stop(1) }, null, function(t) { t.common.src = null }) }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(122),
        a = i(125),
        c = new o("actionAdvertLoader", [{ Mc: s, Ka: a, retry: { max: r.advert.sdk, L: r.advert.sdkRetryTimeout } }, { Mc: a, retry: { max: r.advert.loaderRetry, L: r.advert.loaderRetryTimeout } }]);
    t.a = c }, function(t, e, i, n) {
    var r = i(68),
        o = i(19),
        s = "." + document.location.hostname.split(".").slice(-2).join("."),
        a = function(t) { this.Wb = t, this.inctanceId = "" + +new Date + Math.random(), a.instances[this.inctanceId] = this, a.timer || (a.timer = setInterval(a.poll, r.crossTabs.pollInterval)) };
    a.prototype.notify = function() { document.cookie = r.crossTabs.instanceKey + "=;domain=" + s + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;", document.cookie = r.crossTabs.instanceKey + "=" + this.inctanceId + ";domain=" + s + ";path=/" }, a.poll = function() {
        var t = document.cookie.match(a.COOKIE_REG);
        if (t = t && t[1]) {
            var e;
            for (var i in a.instances) a.instances.hasOwnProperty(i) && (e = a.instances[i].Wb, i != t && e.getPlaybackState() === o.STATE_PLAYING && e.pause()) } }, a.instances = {}, a.COOKIE_REG = new RegExp(r.crossTabs.instanceKey + "=([^;]*)"), t.a = a }, function(t, e, i, n) {
    var r = i(68),
        o = i(71),
        s = function() { o.call(this), this.lastCheck = (new Date).valueOf(), setInterval(this.check.bind(this), r.sandman.checkInterval) };
    o.mixin(s), s.EVENT_SLEEP = "sleep", s.prototype.check = function() {
        var t = (new Date).valueOf();
        t - this.lastCheck > r.sandman.sleepInterval && this.trigger(s.EVENT_SLEEP), this.lastCheck = t }, t.a = s }, function(t, e, i, n) {
    var r = i(68),
        o = i(71),
        s = i(65),
        a = i(62),
        c = i(76),
        u = ya.music.Audio,
        h = u.c,
        l = u.fx.Equalizer,
        f = u.fx.volumeLib,
        p = .8,
        d = function(t) { o.call(this), this.Wb = t, this.setVolume(s.load(r.volume.valueKey) || r.volume.valueDefault), this.isExponent = s.load(r.volume.gammaKey), null == this.isExponent && (this.isExponent = !0), this.equalizerActive = !1, this.equalizer = null, this.Wb.nb.initPromise().then(this.Ta.bind(this, this.Wb.nb, !1), a), this.Wb.ob.initPromise().then(this.Ta.bind(this, this.Wb.ob, !0), a), this.Wb.pb.initPromise().then(this.Ta.bind(this, this.Wb.pb, !0), a) };
    o.mixin(d), d.prototype.Ta = function(t, e) { t.setVolume(this.volume * (e ? p : 1)) }, d.prototype.isDeviceVolume = function() {
        return this.Wb.nb.isDeviceVolume() }, d.prototype.getVolume = function() {
        return this.isExponent ? f.fromExponent(this.volume) : this.volume }, d.prototype.setVolume = function(t) {
        return this.isExponent && (t = f.toExponent(t)), 1e-4 > t ? t = 0 : t > 1 && (t = 1), t && s.store(r.volume.valueKey, t), this.volume = t, this.Wb.nb.setVolume(t), this.Wb.ob.setVolume(t * p), this.Wb.pb.setVolume(t * p), this.trigger(c.EVENT_VOLUME, this.getVolume()), this.volume }, d.prototype.mute = function(t) { null == t && (t = this.getVolume() > 0), t === !1 ? this.setVolume(this.lastVolume || r.volume.valueDefault) : (this.lastVolume = this.getVolume(), this.setVolume(0)) }, d.prototype.equalizerAvailable = function() {
        return "html5" === this.Wb.nb.getType() && !!h }, d.prototype.createEqualizer = function() {
        return this.equalizerAvailable() ? (this.equalizer || (this.equalizer = new l(h, l.DEFAULT_BANDS)), this.equalizer) : !1 }, d.prototype.toggleEqualizer = function(t) {
        return t ? this.Wb.nb.toggleWebAudioAPI(!0) ? this.equalizerActive ? this.equalizer : this.createEqualizer() ? (this.Wb.nb.setAudioPreprocessor(this.equalizer), this.equalizerActive = !0, this.equalizer) : !1 : (this.equalizerActive = !1, !1) : (this.Wb.nb.setAudioPreprocessor(null), this.equalizerActive = !1, this.Wb.nb.toggleWebAudioAPI(!1)) }, d.prototype.getEqualizer = function() {
        return this.equalizer }, d.prototype.isEqualizerActive = function() {
        return this.equalizerActive }, d.prototype.setVolumeExponent = function(t) { s.store(r.volume.gammaKey, t), this.isExponent = t, this.trigger(c.EVENT_VOLUME, this.getVolume()) }, d.prototype.getVolumeExponent = function() {
        return this.isExponent }, t.a = d }, function(t, e, i, n) {
    var r = i(71),
        o = i(73),
        s = function(t, e, i, n, o) { r.call(this), this.name = t, this.locker = i, this._c = n, this.Wb = e, this.denyControl = o || {}, this._c.on("*", this.ad.bind(this)), this.locker.pipeEvents(this) };
    r.mixin(s), s.prototype.ad = function(t) { "volumechange" !== t && this.trigger.apply(this, arguments) }, s.prototype.getType = function() {
        return this._c.getType() }, s.prototype.getState = function() {
        return this._c.getState() }, s.prototype.setPosition = function() {
        return this.locker.getState() || this.denyControl.setPosition ? this.getPosition() : this._c.setPosition.apply(this._c, arguments) }, s.prototype.pause = function() {
        return this.locker.getState() || this.denyControl.pause ? o() : this._c.pause.apply(this._c, arguments) }, s.prototype.resume = function() {
        return this.Wb.crossTabs.notify(), this.locker.getState() || this.denyControl.resume ? o() : this._c.resume.apply(this._c, arguments) }, ["getPosition", "getDuration", "getLoaded", "getPlayed", "getPlayId", "isPreloaded", "isPreloading", "getSrc"].forEach(function(t) { s.prototype[t] = function() {
            return this.denyControl[t] ? null : this._c[t].apply(this._c, arguments) } }), s.prototype.v = function() {
        return { name: this.name, d: this.locker.getState() } }, t.a = s }, function(t, e, i, n) {
    var r = i(52),
        o = (new r("ControlsAuto"), i(73)),
        s = i(71),
        a = i(72),
        c = function(t) { s.call(this), this.controls = t, this.active = null, this.bd = this.Ma.bind(this), this.controls.forEach(function(t) { t.locker.on("*", this.cd.bind(this, t)) }.bind(this)) };
    s.mixin(c), c.prototype.cd = function(t, e) { a.EVENT_UNLOCK === e && this.S(t), a.EVENT_LOCK === e && this.active === t && this.S(null) }, c.prototype.Ma = function() { this.trigger.apply(this, arguments) }, c.prototype.S = function(t) { this.active !== t && (this.active && this.active.off("*", this.bd), this.active = t, this.active && this.active.on("*", this.bd)) }, c.prototype.getActive = function() {
        return this.active }, ["pause", "resume"].forEach(function(t) { c.prototype[t] = function() {
            return this.active ? this.active[t].apply(this.active, arguments) : o() } }), ["setPosition", "getPosition", "getDuration", "getLoaded", "getPlayed", "getPlayId", "isPreloaded", "isPreloading", "getState", "getSrc", "getType"].forEach(function(t) { c.prototype[t] = function() {
            return this.active ? this.active[t].apply(this.active, arguments) : null } }), c.v = function() {
        return { active: this.active && this.active.name } }, t.a = c }, function(t, e, i, n) {
    var r = i(76),
        o = i(58),
        s = i(48),
        a = i(112),
        c = i(59),
        u = function(t) { this.Wb = t, this.vb = this.Wb.vb, this.source = null, this.queue = null, this.dd = this.ed.bind(this), this.Wb.on(r.EVENT_SOURCE_ATTACH, this.dd), this.Wb.on(r.EVENT_SOURCE_DETACH, this.dd) };
    u.prototype.ed = function() { this.source = this.Wb.source, this.queue = this.source && this.source.queue };
    var h = { fd: "musicPlayer", gd: "state", hd: "activity", Pc: "active", id: "track", jd: "advert", kd: "common", ld: "locks", md: "sourceLocker", nd: "initLocker", od: "readyLocker", pd: "audioMain", qd: "audioAdvert", rd: "audioCommon", sd: "source", td: "type", ud: "isLocked", vd: "isPlaying", wd: "config", xd: "controls", yd: "playLocker", zd: "playerLocker", Ad: "tracksLocker", Bd: "settingsLocker", Cd: "settingsStateLocker", Dd: "tasks", Ed: "inited", Fd: "switchers", Gd: "playSwitcher", Hd: "tracksSwitcher", Id: "settingsSwitcher", Jd: "tracks", Kd: "isReady", _prev: "prev", Ld: "current", _next: "next", Md: "index", Nd: "virtualIndex", Od: "list.lenght", Pd: "virtualList.length", Qd: "repeat", Rd: "shuffle", Sd: "pendingUpdate", Td: "populating", Ud: "listLocker", Vd: "indexLocker", Wd: "trackLocker", Xd: "core", Yd: "isMainActive", Zd: "isAdvertActive", $d: "isCommonActive", _d: "isMainPlaying", ae: "isAdvertPlaying", be: "isCommonPlaying", ce: "playMainLocker", de: "playAdvertLocker", ee: "playCommonLocker", fe: "preloadMainLocker", ge: "preloadAdvertLocker", he: "preloadCommonLocker", ie: "audioMainLocker", je: "audioAdvertLocker", ke: "audioCommonLocker", le: "playMainSwitcher", me: "playAdvertSwitcher", ne: "playCommonSwitcher", oe: "preloadMainSwitcher", pe: "preloadAdvertSwitcher", qe: "preloadCommonSwitcher", re: "SDK", se: "loader", te: "sender", ue: "user", ve: "logged", we: "csrf", xe: "premium", ye: "invalid", ze: "data", Jc: "prepared", Ae: "statred", Ic: "ended", g: "playId", Be: "src", Ce: "preloader", De: "duration", Ee: "loaded", Fe: "position", e: "played", Ge: "process", r: "whenPlay", u: "whenPreload", s: "whenPause", t: "whenStop", He: "id", Ie: "title", Je: "task", Ke: "lockerTask", Le: "runnerTask", Me: "name", Ne: "subtask" },
        l = function(t) {
            var e = {};
            for (var i in t) t.hasOwnProperty(i) && (e[h[i]] = t[i]);
            return e };
    u.prototype.getState = function() {
        var t = this.Wb.getActivity();
        return l({ fd: l({ gd: this.Wb.d, hd: l({ Pc: t.active, id: u.Oe(t.track, "track"), jd: u.Oe(t.advert, "advert"), kd: u.Oe(t.common, "common") }), ld: l({ md: u.Pe(this.Wb.rb), nd: u.Pe(this.Wb.sb), od: u.Pe(this.Wb.tb) }) }), pd: u.Qe(this.Wb.nb), qd: u.Qe(this.Wb.ob), rd: u.Qe(this.Wb.pb), sd: this.source ? l({ td: this.source.type, ud: this.source.isLocked(), vd: this.source.isPlaying(), wd: o(this.source.config, { settings: "hidden" }), xd: this.source.getControls(), ld: l({ nd: u.Pe(this.source.sb), yd: u.Pe(this.source.Re), od: u.Pe(this.source.tb), zd: u.Pe(this.source.Se), Ad: u.Pe(this.source.Te), Bd: u.Pe(this.source.Ue), Cd: u.Pe(this.source.Ve) }), Dd: l({ Ed: u.We(this.source.inited) }), Fd: l({ Gd: u.Xe(this.source.Ye), Hd: u.Xe(this.source.Ze), Id: u.Xe(this.source.$e) }) }) : "none", Jd: this.queue ? l({ Kd: this.queue.isReady(), _prev: u._e(this.queue.getPrev()), Ld: u._e(this.queue.getCurrent()), _next: u._e(this.queue.getNext()), Md: this.queue.index, Nd: this.queue.af, Od: this.queue.list.length, Pd: this.queue.bf.length, Qd: this.queue.repeat, Rd: this.queue.shuffle, Sd: this.queue.cf ? this.queue.update : "none", Td: this.queue.populating, ld: l({ Ud: u.Pe(this.queue.df), Vd: u.Pe(this.queue.ef), Wd: u.Pe(this.queue.ff), od: u.Pe(this.queue.tb) }) }) : "none", Xd: l({ gd: l({ Yd: this.vb.isMainActive(), Zd: this.vb.isAdvertActive(), $d: this.vb.isCommonActive(), _d: this.vb.isMainPlaying(), ae: this.vb.isAdvertPlaying(), be: this.vb.isCommonPlaying() }), ld: l({ ce: u.Pe(this.vb.Xb), de: u.Pe(this.vb.Yb), ee: u.Pe(this.vb.Zb), fe: u.Pe(this.vb.$b), ge: u.Pe(this.vb._b), he: u.Pe(this.vb.ac), ie: u.Pe(this.vb.xb), je: u.Pe(this.vb.yb), ke: u.Pe(this.vb.zb) }), Fd: l({ le: u.Xe(this.vb.Ob), me: u.Xe(this.vb.Nb), ne: u.Xe(this.vb.Lb), oe: u.Xe(this.vb.cc), pe: u.Xe(this.vb.dc), qe: u.Xe(this.vb.ec) }) }), jd: l({ re: !!a.SDK, se: this.source && !!this.source.advertLoader, te: this.source && !!this.source.advertSender }), ue: l({ ve: c.logged, we: !!c.csrf, xe: c.premium, ye: c.invalid }) }) }, u.Oe = function(t, e) {
        return t ? l({ ze: "track" === e ? u._e(t.data) : t.data, Jc: t.isPrepared, Ae: t.isStarted, Ic: t.isEnded }) : "none" }, u.Qe = function(t) {
        return l({ td: t.getType(), gd: t.getState(), g: t.getPlayId(), Be: t.getSrc(), Ce: t.getSrc(1), De: t.getDuration(), Ee: t.getLoaded(), Fe: t.getPosition(), e: t.getPlayed(), Ge: l({ r: !!t.r, u: !!t.u, s: !!t.s, t: !!t.t }) }) }, u.Pe = function(t) {
        return t ? t.getState() + "/" + !!t.d : "none" }, u.Xe = function(t) {
        return t ? l({ gd: t.locker.getState() ? "locked" : "unlocked", Ld: u.gf(t.Kb), _next: u.gf(t.Mb) }) : "none" }, u._e = function(t) {
        return t ? l({ He: s(t), Ie: t.title || "loading", jd: t.advert }) : "none" }, u.gf = function(t) {
        return t ? l({ Je: t.w.Mc.y, Ke: u.We(t), Le: u.We(t.Qc) }) : "none" }, u.We = function(t) {
        return t ? l({ Me: t.y, Ne: t.iterator ? u.We(t.iterator.active) : "none" }) : "none" }, t.a = u }, function(t, e, i, n) {
    var r = i(79),
        o = i(151),
        s = new r("actionAuth", [{ Mc: o, retry: { max: 10, L: 500 } }]);
    t.a = s }, function(t, e, i, n) {
    var r = i(83),
        o = i(152);
    t.a = new r("auth", function() {
        return o.getAuth() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(52),
        o = new r("UserData"),
        s = i(54),
        a = i(58),
        n = i(69),
        c = i(60),
        u = i(59),
        h = i(63);
    e.getAuth = function(t) {
        var e = s.get("auth", a(n, t));
        return e.then(function(t) { a(u, t, !0), u.localTimestamp = (new Date).valueOf(), c.store("device_id", t.device_id) }, function(t) { o[t instanceof h ? "info" : "error"](null, "getAuthError", t) }), e } }, function(t, e, i, n) {
    var r = i(74),
        o = function() {};
    e.AbstractSource = o, e.kb = r.createClass(o) }, function(t, e, i, n) {
    var r = {};
    r.EVENT_UPDATE = "update", r.EVENT_CURRENT_REMOVED = "current-removed", r.UPDATE_INDEX = "index", r.UPDATE_TRACK = "track", r.UPDATE_TRACKS = "tracks", r.UPDATE_ALL = "all", r.UPDATE_LIST = "list", r.UPDATE_VLIST = "vlist", r.SHUFFLE_ON = !0, r.SHUFFLE_OFF = !1, r.REPEAT_NONE = !1, r.REPEAT_ONE = 1, r.REPEAT_ALL = 2, t.a = r }, function(t, e, i, n) { t.a = i(156) }, function(t, e, i, n) {
    var r = {};
    r.ADVERT_TYPE_END = "end", r.ADVERT_TYPE_FEED = "feed", r.ADVERT_TYPE_RADIO = "radio", t.a = r }, function(t, e, i, n) {
    var r = i(64),
        o = function(t) { r.call(this, t) };
    o.prototype = r.create("PlayerError"), o.NO_SOURCE = "no source", t.a = o }, function(t, e, i, n) { i(159) }, function(t, e, i, n) { i(45);
    var r = i(74),
        o = i(106),
        s = i(154);
    ya.music.sources = {}, r.exportStatic(o, ya.music.sources), r.exportStatic(s, ya.music.sources), ya.music.sources.SourceError = i(160) }, function(t, e, i, n) {
    var r = i(64),
        o = function(t) { r.call(this, t) };
    o.prototype = r.create("SourceError"), o.INIT_ERROR = "source cannot init", o.NOT_ATTACHED = "source is not attached to music player", o.DENY_INDEX = "index based navigation is not allowed for this source type", o.DENY_NEXT = "can not jump to next track. sorry", o.DENY_PREV = "can not jump to previous track. sorry", o.DENY_LIKE = "can not like this track", o.DENY_UNLIKE = "can not unlike this track", o.DENY_DISLIKE = "can not dislike this track", o.DENY_UNDISLIKE = "can not undislike this track", o.DENY_SETTINGS = "this source type has no settings", t.a = o }, function(t, e, i, n) { i(159);
    var r = ya.music.sources;
    r.SimpleSource = i(162).hf }, function(t, e, i, n) {
    var r = i(68),
        o = i(52),
        s = new o("SimpleSource"),
        a = i(97),
        c = i(48),
        u = i(58),
        h = i(62),
        l = i(72),
        f = i(71),
        p = i(70),
        d = i(57),
        E = i(73),
        y = i(74),
        v = i(81),
        b = i(77),
        m = i(163),
        g = i(105),
        T = i(19),
        A = i(154),
        _ = i(106),
        N = i(160),
        w = i(165),
        S = i(67).MusicPlayer,
        P = i(67).jb,
        k = i(153).AbstractSource,
        R = i(153).kb,
        L = 1,
        O = 0,
        D = function(t) {
            return function() {
                return E(t) } },
        I = function(t) { f.call(this), this.name = L++ + ":" + this.type, this.config = t, this.queue = new m, this.queue.pipeEvents(this), this.Re = new l("sourcePlay"), this.tb = new l("sourceReady"), this["if"] = new l("sourceDelay"), this.sb = new l("sourceInit", !0), this.Se = new l("sourcePlayer", !0), this.tb.ub(this.Se), this.tb.ub(this.sb), this.tb.ub(this.queue.tb), this.Re.ub(this.tb), this["if"].on("lock", this.jf.bind(this)), this.tb.on("*", this.cd.bind(this)), this.Ye = new b(this.Re), this.kf = this.rc.bind(this), this.lf = this.mf.bind(this), this.nf = this.of.bind(this), this.pf = this["if"].lock.bind(this["if"], !1), this.qf = this.rf.bind(this), this.sf = this.tf.bind(this), this.m(), this.config.from && this.setFrom(this.config.from), this.inited.then(function() { s.info(this, "initSuccess"), this.sb.lock(!1) }.bind(this), function(t) { s.error(this, "initFailed", t) }.bind(this)) };
    I.prototype = v(k), f.mixin(I), u(I, _, !0), I.prototype.type = I.TYPE_SIMPLE, I.prototype.getConfig = function() {
        return u({}, this.config, !0) }, I.prototype.m = function() {
        return this.inited || (this.inited = p.resolve()), this.inited }, I.prototype.setFrom = function(t) { this.from = t, this.Se.getPromise().then(function() { this.vb && this.vb.initAdvert() }.bind(this), h) }, I.prototype.Gc = function(t, e, i) {
        var n = { name: "sourceContext:" + O++, config: this.config, source: this, id: new d, track: i || this.queue.getCurrent(), Hc: new d, Ic: new d, reason: t, options: {}, additional: {}, v: I.Kc };
        return a(n.track) || n.id.resolve(n.track), n.id.i().then(function(t) { n.realTrack = t }.bind(this), function(t) { s.warn(this, "contextTrackFail", n, t) }.bind(this)), e && this.Wb && (n.vb = this.vb, n.nb = this.Wb.nb, n.ob = this.Wb.ob, n.pb = this.Wb.pb), n }, I.prototype.uf = function() {
        return this.Ye.Kb ? this.Ye.Kb.Jb.vf : null }, I.Kc = function() {
        return { track: this.track && c(this.track) || this.realTrack && c(this.realTrack), source: this.source.v(), reason: this.reason, additional: this.additional } }, I.prototype.Rb = function(t) {
        if (!(t instanceof S)) throw new TypeError("musicPlayer must be instance of Player class");
        this.Wb && this.Hb(this.Wb), this.Wb = t, this.vb = t.vb, this.Wb.Gb(this), this.wf(), this.Se.lock(!1) }, I.prototype.attach = function(t) {
        if (!(t instanceof P || t instanceof S)) throw new TypeError("musicPlayer must be instance of Player class");
        t.setSource(this) }, I.prototype.Hb = function(t) { t || (t = this.Wb), t.Eb(this), t === this.Wb && (this.Sb(), this.xf(), this.Wb = null, this.vb = null, this.Se.lock(!0)) }, I.prototype.detach = function() { this.Wb && this.Hb(this.Wb) }, I.prototype.wf = function() { this.queue.on(A.EVENT_UPDATE, this.lf), this.queue.on(A.EVENT_CURRENT_REMOVED, this.nf) }, I.prototype.xf = function() { this.queue.off(A.EVENT_UPDATE, this.lf), this.queue.off(A.EVENT_CURRENT_REMOVED, this.nf), this.Wb.nb.off(T.EVENT_PROGRESS, this.kf) }, I.prototype.mf = function(t) { t !== A.UPDATE_TRACK && t !== A.UPDATE_VLIST && this.trigger(I.EVENT_CONTROLS) }, I.prototype.rf = function() { this.Wb && this.Wb.nb.on(T.EVENT_PROGRESS, this.kf) }, I.prototype.tf = function() { this.Wb && this.Wb.nb.off(T.EVENT_PROGRESS, this.kf) }, I.prototype.cd = function() {}, I.prototype.jf = function() { setTimeout(this.pf, r.skipTimeout) }, I.prototype.rc = function(t) {
        if (0 !== t.duration) {
            var e, i;
            t.duration - t.position < r.advert.cacheTimeout ? !this.yf && (i = this.queue.getCurrent()) && i.advert && (s.info(this, "_onProgressAdvertPreload"), this.vb.preloadAdvert(i), this.yf = !0) : this.yf = !1, t.loaded + 1 >= t.duration ? !this.zf && (e = this.queue.getNext()) && (i = i || this.queue.getCurrent()) && i !== e && (s.info(this, "_onProgressTrackPreload"), this.vb.preload(e), this.zf = !0) : this.zf = !1 } }, I.prototype.Af = function(t) {
        if (s.info(this, "_onEnded", t), !t.Pb && this.playing) {
            if (this.getControls().next !== I.CONTROL_ENABLED) return this.playing = !1, void this.trigger(I.EVENT_FINISHED);
            this._next(g.REASON_AUTO) } }, I.prototype.of = function() { this.playing && (this.Sb(), this.Ja()) }, I.prototype.Bf = function(t, e, i) {
        return s.info(this, "_sendFeedback", t, e, i), t = t || this.Gc(e, !0), t.feedback = i, this.Cf ? this.Cf(t) : t }, I.prototype.Cf = null, I.prototype.Df = null, I.prototype.readyPromise = function() {
        var t = this.inited.then(function() {
            return this.tb.getPromise() }.bind(this));
        return t["catch"](h), t }, I.prototype.isLocked = function() {
        return this.tb.getState() }, I.prototype.getConfig = function() {
        return this.config }, I.prototype.isPlaying = function() {
        return this.playing }, I.prototype.toggleShuffle = function(t) {
        return s.info(this, "setShuffle", t), null == t && (t = this.isShuffle() === A.SHUFFLE_OFF ? A.SHUFFLE_ON : A.SHUFFLE_OFF), this.getControls().shuffle !== I.CONTROL_ENABLED ? (this.trigger(I.EVENT_SHUFFLE, !1), A.SHUFFLE_OFF) : (this.queue.Ef(t), this.trigger(I.EVENT_SHUFFLE, t), t) }, I.prototype.isShuffle = function() {
        return this.queue.shuffle }, I.prototype.setRepeat = function(t) {
        return s.info(this, "setRepeat", t), this.getControls().repeat !== I.CONTROL_ENABLED ? (this.trigger(I.EVENT_REPEAT, !1), A.REPEAT_NONE) : (this.queue.Ff(t), this.trigger(I.EVENT_REPEAT, t), t)
    }, I.prototype.getRepeat = function() {
        return this.queue.repeat }, I.prototype.getControls = function() {
        return { index: I.CONTROL_ENABLED, next: this.queue.getNext() ? I.CONTROL_ENABLED : I.CONTROL_DISABLED, prev: this.queue.getPrev() ? I.CONTROL_ENABLED : I.CONTROL_DISABLED, shuffle: I.CONTROL_ENABLED, repeat: I.CONTROL_ENABLED, like: I.CONTROL_DENIED, dislike: I.CONTROL_DENIED } }, I.prototype.setIndex = function(t, e) {
        return this.Gf("index") ? E(new N(N.DENY_INDEX)) : (this.Sb("index"), void(e ? this.queue.Hf(t, !1) : this.queue.Hf(this.queue.convertIndex(t), !1))) }, I.prototype.selectTrack = function(t) {
        var e = this.queue.find(t);
        null != e && this.setIndex(e, !0) }, I.prototype.Gf = function(t) {
        return this.getControls()[t] !== I.CONTROL_ENABLED || this["if"].getState() ? (s.warn(this, "actionDenied", t, this.getControls()[t], this["if"].getState()), !0) : !1 }, I.prototype.Ja = function(t, e) {
        if (s.info(this, "play", t, e), this.Wb && this.Wb.crossTabs.notify(), e || (e = g.REASON_PLAY), null != t) {
            if (this.Gf("index")) return E(new N(N.DENY_INDEX));
            this.Ye.abort("play:" + e), this.queue.Hf(t, !1), this.queue.If() }
        this.tf();
        var i = this.Gc(e),
            n = this.Ye.run(w, i),
            r = n["catch"](function(t) {
                throw t.Pb || (s.error(this, "playFailed", t, t.error), this.trigger(_.EVENT_FATAL, t.error), this.Sb()), t.Hc.reject("failed"), t.Ic.reject("failed"), t.id.reject("failed"), t.error }.bind(this));
        return r.abort = n.abort, i.Hc.i().then(this.qf, h), i.Ic.i().then(this.sf, this.sf), this.playing = !0, this["if"].lock(!0), this.trigger(_.EVENT_PLAY, e, r), r.then(function(t) { this.Af(t) }.bind(this), h), this.zf = !1, i.Hc.i() }, I.prototype.Sb = function(t) {
        return s.info(this, "stop", t), this.tf(), this.playing = !1, t || (t = g.REASON_STOP), this.Ye.abort("stop:" + t, !0), this.trigger(_.EVENT_STOP, t), this.Wb ? this.vb.stop(t) : p.resolve() }, I.prototype.Jf = function(t, e, i) {
        return s.info(this, "_go", t, e, i), this.Gf(t ? "next" : "prev") ? E(new N(t ? N.DENY_NEXT : N.DENY_PREV)) : (e = e || (t ? g.REASON_NEXT : g.REASON_PREV), this.Ye.Kb && (this.uf() && (this.uf().feedback = i || g.FEEDBACK_END), this.Ye.abort((t ? "next:" : "prev:") + e)), t && e === g.REASON_AUTO || this.getRepeat() !== A.REPEAT_ONE || this.setRepeat(A.REPEAT_ALL), this.queue.Kf(t ? 1 : -1), this.Ja(null, e)) }, I.prototype.Lf = function(t, e) {
        return this.Jf(!0, t, e) }, I.prototype._next = function(t) {
        return this.Lf(t) }, I.prototype._prev = function(t) {
        return this.Jf(!1, t) }, I.prototype.getTrack = function(t, e) {
        return null == t || t === !1 ? this.queue.getCurrent() : this.queue.getList(!e)[t] }, I.prototype.getPrev = function(t) {
        return this.queue.getPrev(t) }, I.prototype.getNext = function(t) {
        return this.queue.getNext(t) }, I.prototype.getIndex = function(t) {
        return this.queue.getIndex(!t) }, I.prototype.convertIndex = function(t, e) {
        return this.queue.convertIndex(t, !e) }, I.prototype.getTracks = function(t) {
        return this.queue.getList(!t) }, I.prototype.append = function(t) {
        return this.queue.append(t) }, I.prototype.prepend = function(t) {
        return this.queue.prepend(t) }, I.prototype.move = function(t, e) {
        return this.queue.move(t, e) }, I.prototype.remove = function(t, e) {
        return this.queue.remove(t, e) }, I.prototype.removeUnavail = function() {
        return this.queue.removeUnavail() }, I.prototype.populate = function(t, e) {
        return this.queue.populate(t, e) }, I.prototype.setSettings = D(new N(N.DENY_SETTINGS)), I.prototype.getSettings = D(new N(N.DENY_SETTINGS)), I.prototype._like = D(new N(N.DENY_LIKE)), I.prototype._dislike = D(new N(N.DENY_DISLIKE)), I.prototype._unlike = D(new N(N.DENY_UNLIKE)), I.prototype._undislike = D(new N(N.DENY_UNDISLIKE)), I.prototype.Mf = function(t) { delete t.tracks, this.info = t, this.trigger(A.EVENT_UPDATE, I.UPDATE_INFO, this.info) }, I.prototype.getInfo = function() {
        return this.info }, I.prototype.destroy = function(t) { s.info(this, "destroy", t), t = t || "destroy", this.Sb(t), this.Wb && this.Hb(this.Wb), this.trigger(I.EVENT_DESTROY), this.clearListeners(), this.queue.destroy(), this.inited && this.inited.abort && this.inited.abort(t), this.sb.lock(t), this.Ye.abort(t, !0), this.Ye.Mb = null, this.Ye.Kb = null, this.Re.d && this.Re.d.abort && this.Re.d.abort(t), this.Re.lock(t), this.tb.lock(t), this.Se.lock(t), this.tb.clearListeners() }, I.prototype.v = function() {
        try {
            return { listId: this.queue.name, Wb: this.Wb && this.Wb.name, ready: this.tb.getState(), play: this.Se.getState(), queue: this.queue.v() } } catch (t) {
            return "" } }, e.SimpleSource = I, e.hf = y.createClass(I, R, !0)
}, function(t, e, i, n) {
    var r = i(52),
        o = new r("Queue"),
        s = i(72),
        a = i(71),
        c = i(57),
        u = i(70),
        h = i(92),
        l = i(48),
        f = i(164),
        p = i(97),
        d = i(58),
        E = i(154),
        y = 1,
        v = function() { this.name = y++, a.call(this), this.update = {}, this.populating = [], this.lastTrack = null, this.cf = null, this.Nf = this.Of.bind(this), this.list = [], this.index = null, this.bf = [], this.af = null, this.tb = new s("queueReady"), this.df = new s("queueList", !0), this.ef = new s("queueIndex", !0), this.ff = new s("queueTrack", !0), this.tb.ub(this.df), this.tb.ub(this.ef), this.tb.ub(this.ff), this.repeat = !1, this.shuffle = !1 };
    a.mixin(v), d(v, E, !0), v.Pf = 50, v.prototype.Ef = function(t) { this.shuffle !== t && (this.shuffle = t, this.If()) }, v.prototype.Ff = function(t) { this.repeat = t }, v.prototype.Qf = function(t, e) {
        if (null != this.index && this.list[this.index] instanceof Object ? (p(this.list[this.index]) ? this.ff.lock(!0) : this.ff.lock(!1), this.ef.lock(!1)) : this.ef.lock(!0), this.list.length ? this.df.lock(!1) : this.df.lock(!0), this.lastTrack !== this.getCurrent() && t !== v.UPDATE_TRACK && (this.lastTrack = this.getCurrent(), this.Qf(v.UPDATE_TRACK)), t === v.UPDATE_TRACKS) this.update[v.UPDATE_TRACKS] = d(this.update[v.UPDATE_TRACKS] || {}, e, !0);
        else {
            if (this.update[t]) return;
            this.update[t] = !0 }
        this.cf || (this.cf = setTimeout(this.Nf, 1)) }, v.prototype.Of = function() { this.cf = null, !this.update[v.UPDATE_VLIST] || this.update[v.UPDATE_ALL] || this.update[v.UPDATE_LIST] || this.trigger(v.EVENT_UPDATE, v.UPDATE_VLIST), this.update[v.UPDATE_TRACKS] && this.trigger(v.EVENT_UPDATE, v.UPDATE_TRACKS, this.update[v.UPDATE_TRACKS]), this.update[v.UPDATE_LIST] && this.update[v.UPDATE_INDEX] ? (this.populate(), this.trigger(v.EVENT_UPDATE, v.UPDATE_ALL)) : this.update[v.UPDATE_LIST] ? (this.populate(), this.trigger(v.EVENT_UPDATE, v.UPDATE_LIST)) : this.update[v.UPDATE_INDEX] && (this.populate(), this.trigger(v.EVENT_UPDATE, v.UPDATE_INDEX)), this.update[v.UPDATE_TRACK] && this.trigger(v.EVENT_UPDATE, v.UPDATE_TRACK), this.update = {} }, v.prototype.If = function(t) {
        var e, i, n, r = [];
        for (e = 0, i = this.list.length; i > e; e++) n = this.list[e], p(n, !0) || r.push(e);
        var o;
        if (this.shuffle && null !== this.index && (o = r.indexOf(this.index), -1 !== o && r.splice(o, 1)), this.shuffle)
            for (this.bf = []; r.length;) this.bf.push(r.splice(Math.min(r.length - 1, Math.floor(Math.random() * r.length)), 1)[0]);
        else this.bf = r;
        null != o && -1 !== o && this.bf.unshift(this.index), t || (null !== this.index ? (this.af = this.bf.indexOf(this.index), -1 === this.af && this.Hf(this.index)) : this.bf.length && this.Hf(0, !0)) }, v.prototype.Rf = function(t, e, i) {
        var n = this.bf.length;
        return null == e && (e = this.repeat), e ? (t %= n, 0 > t && (t += n), t) : t >= n ? i ? null : n - 1 : 0 > t ? i ? null : 0 : t }, v.prototype.Sf = function() {
        for (var t = this.list.length, e = (this.index || 0) + 1; t > e;) {
            if (!p(this.list[e])) return e;
            e++ }
        for (e = (this.index || 0) - 1; e >= 0;) {
            if (!p(this.list[e])) return e;
            e-- }
        return null }, v.prototype.Hf = function(t, e) { o.info(this, "_setIndex", t, e), e ? (this.af = t, this.index = this.bf[this.af]) : (this.index = t, null != this.index ? this.af = this.bf.indexOf(this.index) : this.af = null), (null == this.af || -1 === this.af) && (null !== this.index ? (this.index = this.Sf(), this.af = null != this.index ? this.bf.indexOf(this.index) : null) : this.bf.length ? (this.index = this.bf[0], this.af = 0) : (this.index = null, this.af = null)), this.Qf(v.UPDATE_INDEX) }, v.prototype.Kf = function(t, e) { o.info(this, "_moveVirtualIndex", t, e), this.bf.length < 2 || this.repeat === v.REPEAT_ONE || (this.af = this.Rf(this.af + t, this.repeat || e), this.index = this.bf[this.af], this.Qf(v.UPDATE_INDEX)) }, v.prototype.Tf = function(t) {
        for (var e, i, n = {}, r = !1, o = !1, s = 0, a = this.list.length; a > s; s++)
            if (!(this.list[s] instanceof Object)) {
                var c = f(this.list[s]);
                e = t[c], e && (r = !0, n[s] = e, this.list[s] = e, i = p(e), o = o || i, s !== this.index || i || this.Qf(v.UPDATE_TRACK)) }
        r && this.Qf(v.UPDATE_TRACKS, n), o && (this.If(), this.Qf(v.UPDATE_VLIST)) }, v.prototype.isReady = function() {
        return !this.tb.getState() }, v.prototype.append = function(t) { this.list.push.apply(this.list, t), this.Qf(v.UPDATE_LIST), this.If() }, v.prototype.prepend = function(t) { this.list.unshift.apply(this.list, t), this.Qf(v.UPDATE_LIST), this.If(!0), this.Hf(this.index + t.length) }, v.prototype.move = function(t, e) { o.info(this, "move", t, e), this.list.splice(e, 0, this.list.splice(t, 1)[0]);
        var i = this.index;
        i === t ? i = e : this.index > t && this.index <= e ? i-- : this.index < t && this.index >= e && i++, this.Qf(v.UPDATE_LIST), this.If(!0), this.Hf(i) }, v.prototype.remove = function(t, e) { o.info(this, "remove", t, e);
        var i;
        if (t instanceof Array) i = t;
        else
            for (e = null == e ? this.list.length : e, i = []; e >= t; t++) i.push(t);
        if (i.length) {
            var n = !1,
                r = !1;
            i.reverse().forEach(function(t) {
                if (null !== this.index) {
                    if (t === this.index) { n = !0, r = !0;
                        var e = this.Sf();
                        null !== e && e >= this.index && e--, this.index = e }
                    t < this.index && (this.index--, n = !0) }
                this.list.splice(t, 1) }.bind(this)), this.Qf(v.UPDATE_LIST), this.If(n), n && this.Hf(this.index), r && this.trigger(v.EVENT_CURRENT_REMOVED) } }, v.prototype.removeUnavail = function() {
        for (var t = 0, e = this.list.length; e > t; t++) p(this.list[t], !0) && (this.remove(t, t), t--, e--) }, v.prototype.getList = function(t) {
        return t ? this.list.filter(function(t) {
            return !p(t, !0) }.bind(this)) : [].concat(this.list) }, v.prototype.convertIndex = function(t, e) {
        if (e && p(this.list[t], !0)) return null;
        for (var i, n = -1, r = 0, o = this.list.length; o > r; r++)
            if (i = !p(this.list[r], !0), e) {
                if (i && n++, r === t) return i ? n : null } else if (i && (n++, n === t)) return r;
        return null }, v.prototype.getIndex = function(t) {
        return t ? this.convertIndex(this.index, !0) : this.index }, v.prototype.find = function(t) {
        var e = null;
        return this.list.filter(function(i, n) {
            (l(i) == t || f(i) == t) && (e = n) }), idx }, v.prototype.getCurrent = function() {
        return null == this.index ? null : this.list[this.index] }, v.prototype.getNext = function(t) {
        if (null == this.af) return null;
        if (this.repeat === v.REPEAT_ONE && !t) return this.getCurrent();
        var e = this.Rf(this.af + 1, null, !0);
        return null == e ? null : this.list[this.bf[e]] }, v.prototype.getPrev = function(t) {
        if (null == this.af) return null;
        if (this.repeat === v.REPEAT_ONE && !t) return this.getCurrent();
        var e = this.Rf(this.af - 1, null, !0);
        return null == e ? null : this.list[this.bf[e]] }, v.prototype.populate = function(t, e) {
        return this.Uf(0, t, e) }, v.prototype.Uf = function(t, e, i) {
        var n = !1;
        (e === !1 || null == e) && (e = this.af || 0, n = !0), e--, i = i || v.Pf;
        var r = Math.min(i, n ? this.bf.length : this.list.length),
            s = n ? this.bf.map(function(t) {
                return this.list[t] }.bind(this)) : this.list;
        if (!s.length) return u.resolve();
        e %= s.length, e = 0 > e ? s.length + e : e;
        for (var a = [], l = 0, f = 0; r > l && l < s.length;) f = (e + l) % s.length, s[f] instanceof Object ? p(s[f]) && r < s.length && r++ : -1 === this.populating.indexOf(s[f]) && a.push(s[f]), l++;
        if (!a.length) return u.resolve();
        this.populating = this.populating.concat(a);
        var d = new c,
            E = h.getData(a),
            y = { iteration: t, from: e, count: i, Vf: n, poor: a, La: d };
        return E.then(this.Wf.bind(this, y), d.reject), d.i().abort = E.abort, d.i().then(function() {}.bind(this), function(t) { o.error(this, "populateFail", t) }.bind(this)), d.i() }, v.prototype.Wf = function(t, e) {
        var i = {};
        t.poor.forEach(function(t) {
            var e = this.populating.indexOf(t); - 1 !== e && this.populating.splice(e, 1) }.bind(this));
        var n = !1;
        if (e.forEach(function(t) { n = n || p(t), i[t.id] = t }), this.Tf(i), n) {
            if (t.iteration > 10) return void t.La.reject("retry limit");
            var r = this.Uf(t.iteration + 1, t.Vf ? !1 : t.from, t.count);
            r.abort && (t.La.i().abort = r.abort), r.then(t.La.resolve, t.La.reject) } else t.La.resolve() }, v.prototype.destroy = function(t) { this.cf = this.cf && clearTimeout(this.cf), this.clearListeners(), this.tb.clearListeners(), this.tb.lock(t), this.df.lock(t), this.ef.lock(t), this.ff.lock(t), this.list = [], this.bf = [], this.index = null, this.af = null, this.lastTrack = null, this.update = {}, this.populating = [] }, v.prototype.v = function() {
        return { index: this.index, length: this.list.length, vindex: this.af, vlength: this.bf.length } }, t.a = v }, function(t, e, i, n) {
    var r = i(104);
    t.a = function(t) {
        return r(t).id } }, function(t, e, i, n) {
    var r = i(79),
        o = i(166),
        s = i(167),
        a = i(168),
        c = new r("actionSourcePlay", [{ Mc: o, Ka: s, K: a }, { Mc: s, Ka: a, K: a }, { Mc: a, ignoreAbort: !0 }]);
    t.a = c }, function(t, e, i, n) {
    var r = i(83),
        o = i(58);
    t.a = new r("sourcePlayStart", function(t) { t.vb = t.source.Wb.vb, t.id.resolve(t.source.getTrack());
        var e = t.vb.play(t.source.getTrack(), t.reason, t.source.Df, t.source.Cf);
        return e.w.additional = o(t.additional, e.w.additional, !0), e.w.options = o(t.options, e.w.options, !0), e.started.then(t.Hc.resolve, t.Hc.reject), e.ended.then(t.Ic.resolve, t.Ic.reject), t.vf = e.w, e }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(70),
        o = i(83);
    t.a = new o("sourcePlayEnd", function() {
        return r.resolve() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(83);
    t.a = new r("sourceLastPlay", function(t) {
        return t.Ic.i() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) { i(159);
    var r = ya.music.sources;
    r.FeedSource = i(170).Xf }, function(t, e, i, n) {
    var r = i(162).SimpleSource,
        o = i(162).hf,
        s = i(81),
        a = i(74),
        c = function(t) { r.call(this, t) };
    c.prototype = s(r), c.prototype.type = r.TYPE_FEED, e.FeedSource = c, e.Xf = a.createClass(c, o) }, function(t, e, i, n) { i(159);
    var r = ya.music.sources;
    r.RadioSource = i(172).Yf }, function(t, e, i, n) {
    var r = i(52),
        o = new r("RadioSource"),
        s = i(62),
        a = i(81),
        c = i(162).SimpleSource,
        u = i(162).hf,
        h = i(74),
        l = i(70),
        f = i(73),
        p = i(97),
        d = i(72),
        E = i(77),
        y = i(154),
        v = i(105),
        b = i(76),
        m = i(106),
        g = i(173),
        T = i(176),
        A = i(177),
        _ = i(182),
        N = i(184),
        w = i(185),
        S = i(187),
        P = i(160),
        k = i(63),
        R = function(t, e) { c.call(this, t), this.name = this.name += ":" + t.type + ":" + t.tag, this.Te = new d("radioTracks"), this.Ue = new d("settings"), this.Ve = new d("settingsState"), this.Te.ub(this.tb), this.Ue.ub(this.sb), this.Ve.ub(this.sb), this.tb.ub(this.Ue), this.tb.ub(this.Ve), this.Ze = new E(this.Te), this.$e = new E(this.Ue), t.storeBefore = t.storeBefore || 1, t.storeAfter = t.storeAfter || 1, e && e.length && this.queue.append(e), this.queue.on(y.EVENT_UPDATE, this.Zf.bind(this)), this.$f = this._f.bind(this) };
    R.ag = {}, R.ag[y.UPDATE_ALL] = !0, R.ag[y.UPDATE_INDEX] = !0, R.ag[y.UPDATE_LIST] = !0, R.prototype = a(c), R.prototype.type = c.TYPE_RADIO, R.prototype.m = function() {
        var t = A(this.Gc("start"));
        return this.inited = t["catch"](function(t) {
            throw t.error }), this.inited["catch"](s), this.inited }, R.prototype.Df = w, R.prototype.Cf = g, R.prototype.wf = function() { c.prototype.wf.apply(this, arguments), this.vb.Yb.on("*", this.lf), this.vb.on(b.EVENT_TRACK_READY, this.$f), this.vb.on(b.EVENT_TRACK_ERROR, this.$f) }, R.prototype.xf = function() { c.prototype.xf.apply(this, arguments), this.vb.Yb.off("*", this.lf), this.vb.off(b.EVENT_TRACK_READY, this.$f), this.vb.off(b.EVENT_TRACK_ERROR, this.$f) }, R.prototype.Af = function(t) {
        if (!t.Pb && this.playing) {
            if (this.queue.getNext() || this._f(), this.getControls().next !== c.CONTROL_ENABLED) return void this.Ye.run(T, this.Gc("auto-next"));
            this._next(v.REASON_AUTO) } }, R.prototype.getControls = function() {
        var t = this.Wb && this.vb.Yb.getState(),
            e = this.queue.getNext() && !t && !this.Te.getState();
        return { index: c.CONTROL_DENIED, next: e ? c.CONTROL_ENABLED : c.CONTROL_DISABLED, prev: c.CONTROL_DENIED, shuffle: c.CONTROL_DENIED, repeat: c.CONTROL_DENIED, like: this.queue.getCurrent() ? c.CONTROL_ENABLED : c.CONTROL_DISABLED, dislike: e && this.queue.getCurrent() ? c.CONTROL_ENABLED : c.CONTROL_DISABLED } }, R.prototype.Zf = function(t) { R.ag[t] && (this.queue.removeUnavail(), this.sb.getState() || this.Ye.Kb && this.Ye.Mb || this._f()) }, R.prototype._f = function() { this.queue.getList(!0).length - this.queue.getIndex() < this.config.storeAfter + 2 && (this.Ze.abort("load"), this.Ze.run(S, this.Gc("tracksLoad")).then(function() {}.bind(this), function(t) { t.Pb || (o.error(this, "tracksLoadFailed", t.error), this.trigger(m.EVENT_FATAL, t.error), this.Sb()) }.bind(this))) }, R.prototype.bg = function(t) { this.queue.remove(0, this.queue.getIndex() - this.config.storeBefore - 1), t || this.queue.remove(this.queue.getIndex() + this.config.storeAfter + 1) }, R.prototype.append = s, R.prototype.prepend = s, R.prototype.remove = s, R.prototype.move = s, R.prototype.cg = function(t, e) {
        return this["if"].getState() || (t ? p(t) : !this.queue.getCurrent()) || e && this.Gf(e) }, R.prototype._next = function(t) {
        return this.Gf("next") ? f(new P(P.DENY_NEXT)) : (t || (t = v.REASON_NEXT), t === v.REASON_AUTO ? (this.bg(!0), this.Lf(t, v.FEEDBACK_END)) : (this.bg(), this.Lf(t, v.FEEDBACK_SKIP))) }, R.prototype._dislike = function(t) {
        return o.info(this, "dislike", t), this.cg(t, "dislike") ? f(new P(P.DENY_DISLIKE)) : (this.bg(), t ? this.Bf(this.Gc("dislike", !0, t), "dislike", v.FEEDBACK_DISLIKE) : this.Lf(v.REASON_NEXT, v.FEEDBACK_DISLIKE)) }, R.prototype._like = function(t) {
        return o.info(this, "like", t), this.cg(t) ? f(new P(P.DENY_LIKE)) : (this.bg(), this.Bf(this.Gc("like", !0, t), "like", v.FEEDBACK_LIKE)) }, R.prototype._undislike = function(t) {
        return o.info(this, "undislike", t), this.cg(t) ? f(new P(P.DENY_UNDISLIKE)) : (this.bg(), this.Bf(this.Gc("undislike", !0, t), "undislike", v.FEEDBACK_UNDISLIKE)) }, R.prototype._unlike = function(t) {
        return o.info(this, "unlike", t), this.cg(t) ? f(new P(P.DENY_UNLIKE)) : (this.bg(), this.Bf(this.Gc("unlike", !0, t), "unlike", v.FEEDBACK_UNLIKE)) }, R.prototype.getSettings = function() {
        if (!this.Ve.getState()) return l.resolve(this.config.settings);
        if (this.$e.Kb) return this.$e.Kb.A.A;
        var t = this.$e.run(N, this.Gc("getSettings"));
        return this.dg(t) }, R.prototype.setSettings = function(t) { o.info(this, "setSettings", t), this.$e.abort("setSettings");
        var e = this.Gc("setSettings");
        e.settings = t;
        var i = this.$e.run(_, e);
        return i.then(function() { this.queue.remove(this.queue.getIndex() + 1) }.bind(this), s), this.dg(i) }, R.prototype.dg = function(t) {
        var e = t.then(function() {
            return this.config.settings }.bind(this), function(t) {
            if (t.Pb) throw new k(t.Pb.toString());
            throw t.error });
        return t.A = e, e.then(function() { this.Ve.lock(!1) }.bind(this), function(t) { o[t instanceof k ? "warn" : "error"](this, "settingsFailed", t), this.Ve.lock(!0), t instanceof k || (o.error(this, "Cannot fetch radio settings", t), this.trigger(m.EVENT_FATAL, t), this.Sb()) }.bind(this)), e.abort = t.abort, e }, R.prototype.v = function() {
        try {
            return { listId: this.queue.name, Wb: this.Wb && this.Wb.name, ready: this.tb.getState(), play: this.Se.getState(), tracks: this.Te.getState(), queue: this.queue.v() } } catch (t) {
            return "" } }, e.RadioSource = R, e.Yf = h.createClass(R, u) }, function(t, e, i, n) {
    var r = i(52),
        o = new r("radioTrackFeedback"),
        s = i(111),
        a = i(174),
        c = i(83),
        u = i(105),
        h = i(48);
    t.a = new c("radioTrackFeedback", function(t) {
        return t.track.sc || "like" === t.feedback || "unlike" === t.feedback || o.warn(t, "sendFeedback", "noStatistics", h(t.track)), a({ feedback: s.createFeedback(t.config.type, t.config.tag, t.feedback || u.FEEDBACK_END, { batchId: t.track.batchId, trackId: h(t.track), totalPlayed: t.track.sc && t.track.sc.played || .1 }, t.options) }) }, function() {}, function(t) {
        switch (t.feedback) {
            case u.FEEDBACK_LIKE:
                t.track.liked = !0;
                break;
            case u.FEEDBACK_UNLIKE:
                t.track.liked = !1;
                break;
            case u.FEEDBACK_DISLIKE:
                t.track.disliked = !0;
                break;
            case u.FEEDBACK_UNDISLIKE:
                t.track.disliked = !1 } }) }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(175),
        a = new o("actionRadioFeedback", [{ Mc: s, retry: { max: r.radio.feedbackRetry, L: r.radio.feedbackTimeout } }]);
    t.a = a }, function(t, e, i, n) {
    var r = i(83),
        o = i(111);
    t.a = new r("radioFeedback", function(t) {
        return o.sendFeedback(t.feedback) }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(70),
        o = i(83),
        s = i(105);
    t.a = new o("radioAutoNext", function(t) {
        return t.source._next(s.REASON_AUTO), r.resolve() }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = i(79),
        o = i(68),
        s = i(178),
        a = i(179),
        c = i(180),
        u = new r("actionRadioStart", [{ Mc: s, Ka: a, retry: { max: o.radio.settingsGetRetry, L: o.radio.settingsGetTimeout } }, { Mc: a, Ka: c, retry: { max: o.radio.startRetry, L: o.radio.startTimeout } }, { Mc: c, retry: { max: o.radio.tracksRetry, L: o.radio.tracksTimeout } }]);
    t.a = u }, function(t, e, i, n) {
    var r = i(83),
        o = i(111);
    t.a = new r("radioGetSettings", function(t) {
        return o.getSettings(t.config.type, t.config.tag, t.options) }, function(t, e) { this.abort && this.abort(e) }, function(t, e) {
        return e.station ? (t.source.Mf({ name: e.station.name, icon: e.station.icon }), t.config.settings = e.settings, t.config.settings.restrictions = e.station.restrictions, void(t.source.eg = e.adParams)) : void(t.config.settings = {}) }, function(t) { t.config.available = !1 }) }, function(t, e, i, n) {
    var r = i(111),
        o = i(174),
        s = i(83),
        a = i(105);
    t.a = new s("radioStart", function(t) {
        return o({ feedback: r.createFeedback(t.config.type, t.config.tag, a.FEEDBACK_INIT, { from: t.config.from }, t.options) }) }, function(t, e) {
        return this.abort(e) }) }, function(t, e, i, n) {
    var r = i(83),
        o = i(111),
        s = i(48),
        a = i(181),
        c = i(62);
    t.a = new r("radioGetTracks", function(t) {
        for (var e = t.source.queue, i = e.getList(!0).slice(e.getIndex(!0)), n = 0, r = i.length; r > n; n++) i[n] = s(i[n]);
        var u = o.getTracks(t.config.type, t.config.tag, i, t.options);
        return u.then(function(i) {
            var n = a.entriesToTracks(i.tracks);
            e.remove(0, e.getIndex() - t.config.storeBefore - 1), e.append(n) }, c), u }, function(t, e) { this.abort && this.abort(e) }) }, function(t, e, i, n) {
    var r = function(t) {
        for (var e, i = [], n = 0, r = t.length; r > n; n++) e = t[n], "jingle" !== e.type && "ad" !== e.type && "track" === e.type && (e.track.liked = e.liked, e.track.disliked = e.disliked, i.push(e.track));
        return i };
    e.entriesToTracks = r }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(58),
        a = i(183),
        c = i(178),
        u = i(90),
        h = new o("actionRadioSetSettings", [{ Mc: u, Ka: function(t) {
                return t.settings = s(t.source.config.settings, t.settings), a } }, { Mc: a, Ka: c, K: c, retry: { max: r.radio.settingsSetRetry, L: r.radio.settingsSetTimeout } }, { Mc: c, retry: { max: r.radio.settingsGetRetry, L: r.radio.settingsGetTimeout }, ignoreAbort: !0 }]);
    t.a = h }, function(t, e, i, n) {
    var r = i(111),
        o = i(83);
    t.a = new o("radioSetSettings", function(t) {
        return r.setSettings(t.config.type, t.config.tag, t.settings, t.options) }, function(t, e) {
        return this.abort(e) }) }, function(t, e, i, n) {
    var r = i(68),
        o = i(79),
        s = i(178),
        a = new o("actionRadioGetSettings", [{ Mc: s, retry: { max: r.radio.settingsGetRetry, L: r.radio.settingsGetTimeout } }]);
    t.a = a }, function(t, e, i, n) {
    var r = i(79),
        o = i(186),
        s = new r("actionRadioTrackBefore", [{ Mc: o }]);
    t.a = s }, function(t, e, i, n) {
    var r = i(111),
        o = i(174),
        s = i(83),
        a = i(105),
        c = i(48);
    t.a = new s("radioTrackStart", function(t) {
        return o({ feedback: r.createFeedback(t.config.type, t.config.tag, a.FEEDBACK_START, { trackId: c(t.track), batchId: t.track.batchId }, t.options) }) }, function(t, e) {
        return this.abort(e) }) }, function(t, e, i, n) {
    var r = i(79),
        o = i(68),
        s = i(180),
        a = new r("actionRadioGetTracks", [{ Mc: s, retry: { max: o.radio.tracksRetry, L: o.radio.tracksTimeout } }]);
    t.a = a }, function(t, e, i, n) { i(159);
    var r = ya.music.sources;
    r.ArtistSource = i(189).fg }, function(t, e, i, n) {
    var r = i(70),
        o = i(162).SimpleSource,
        s = i(162).hf,
        a = i(81),
        c = i(74),
        u = i(62),
        h = i(190),
        l = function(t, e) { o.call(this, { id: t }), e && this.append(e) };
    l.prototype = a(o), l.prototype.type = o.TYPE_ARTIST, l.prototype.m = function() {
        if (this.config.autoLoad === !1) return this.inited = r.resolve(), this.inited;
        var t = h(this.Gc("start"));
        return this.inited = t["catch"](function(t) {
            throw t.error }), this.inited["catch"](u), this.inited }, e.ArtistSource = l, e.fg = c.createClass(l, s) }, function(t, e, i, n) {
    var r = i(79),
        o = i(191),
        s = new r("actionArtistStart", [{ Mc: o, retry: { max: 3, L: 1e3 } }]);
    t.a = s }, function(t, e, i, n) {
    var r = i(83),
        o = i(192);
    t.a = new r("artistStart", function(t) {
        return o.getArtistTracks(t.source.config.id) }, function(t, e) { this.abort && this.abort(e) }, function(t, e) {
        return t.source.append(e.tracks.slice(t.source.queue.list.length)), t.source.Mf(e), e }) }, function(t, e, i, n) {
    var r = i(54),
        o = i(52),
        s = new o("ArtistData"),
        a = i(58),
        n = i(69),
        c = i(63);
    e.getArtistTracks = function(t, e) {
        var i = r.get("artist/" + t, a(n, e));
        return i.then(function() {}, function(t) { s[t instanceof c ? "info" : "error"](null, "getArtistError", t) }), i } }]);
