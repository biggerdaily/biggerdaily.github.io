var overZoom=1.5;//鼠标悬浮时，图标放大1.5倍。
function icon_on_click(t){
    console.log(t.el);
    var bigpic= t.el.getAttribute("data-pic");
    document.getElementById("active_pan_wrap").setAttribute("class","a active_pan_wrap");
    document.getElementById("bigpic").setAttribute("src",bigpic);
}
function active_pan_wrap_hide(){
    document.getElementById("active_pan_wrap").setAttribute("class","a active_pan_wrap hide");
}
var tts = tts || {};
tts.CSSHelper = function () {
    var t = tts.CSSHelper.getVendorPrefix("Transform"), e = null != t, i = t + "Transform";
    tts.CSSHelper.transformString = t + "Transform";
    var n = t + "Transition", r = navigator.userAgent.toLowerCase().match(/android 2/i) || navigator.userAgent.toLowerCase().match(/android 3/i) ? !0 : !1, s = function () {
        return t
    }, o = function () {
        return e
    }, a = function (t) {
        t.style[i] = ""
    }, u = function (t) {
        t.style[n] = ""
    }, c = function (e, i) {
        i = i || "hidden", e.style.backfaceVisibility = "hidden", e.style[t + "BackfaceVisibility"] = "hidden"
    }, l = function (t, n, s, o, c, l) {
        t && (1 != l && (l = !1), o = o || 1, c = c || 0, 0 == l && u(t), e && 1 != r ? 1 == r ? (a(t), t.getAttribute("data-pos") || t.setAttribute("data-pos", t.offsetLeft + "," + t.offsetTop), pos = t.getAttribute("data-pos").split(","), n += parseInt(pos[0]), s += parseInt(pos[1]), t.style.left = tts.CSSHelper.roundForCSS(n) + "px", t.style.top = tts.CSSHelper.roundForCSS(s) + "px", 1 != o && t.children && t.children[0] && t.children[0].style && (t.children[0].style[i] = f(o))) : t.style[i] = h(n, s) + f(o) + p(c) : (t.style.left = tts.CSSHelper.roundForCSS(n) + "px", t.style.top = tts.CSSHelper.roundForCSS(s) + "px", t.style.zoom = o))
    }, d = function (t, e) {
        t.style[i] = p(e)
    }, h = function (t, e) {
        return " translate3d( " + tts.CSSHelper.roundForCSS(t) + "px, " + tts.CSSHelper.roundForCSS(e) + "px, 0px )"
    }, f = function (t) {
        return " scale( " + tts.CSSHelper.roundForCSS(t) + " )"
    }, p = function (t) {
        return " rotate( " + tts.CSSHelper.roundForCSS(t) + "deg )"
    };
    return {update2DPosition: l, update2DRotation: d, getVendor: s, getCssTransformsEnabled: o, setBackfaceVisbility: c}
}, tts.CSSHelper.getVendorPrefix = function (t) {
    var e = function () {
        if (!navigator.userAgent.toLowerCase().match(/msie 9/i)) {
            var e = ["Moz", "Webkit", "ms"], n = i();
            for (var r in e)if (void 0 !== n.style[e[r] + t])return e[r];
            return null
        }
    }, i = function () {
        var t = document.body.childNodes;
        for (var e in t)if ("undefined" != typeof t[e].style)return t[e]
    };
    return e()
}, tts.CSSHelper.roundForCSS = function (t) {
    var e = Math.pow(10, 2);
    return Math.round(t * e) / e
}, tts.CSSHelper.posArray = [0, 0], tts.CSSHelper.findPos = function (t) {
    var e = window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft, i = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop, n = curtop = 0;
    if (t.offsetParent)do {
        if (t.offsetParent && "undefined" != typeof t.offsetParent.style && "undefined" != typeof t.offsetParent.style[tts.CSSHelper.transformString] && t.offsetParent.style[tts.CSSHelper.transformString]) {
            var r = t.offsetParent.style[tts.CSSHelper.transformString].split("translate3d(")[1].split(")")[0].replace(/ +/g, "").replace(/px+/g, "").split(",");
            n += parseInt(r[0]), curtop += parseInt(r[1])
        }
        n += t.offsetLeft, curtop += t.offsetTop
    } while (t = t.offsetParent);
    return tts.CSSHelper.posArray[0] = n - e, tts.CSSHelper.posArray[1] = curtop - i, tts.CSSHelper.posArray
};
var ElasticPoint = function (t, e, i, n, r) {
    var s = n, o = r, a = t, u = e, c = i, l = t, d = e, h = i, f = 0, p = 0, g = 0, m = !1, t = function () {
        return a
    }, e = function () {
        return u
    }, i = function () {
        return c
    }, v = function () {
        return m
    }, S = function () {
        return f + p + g
    }, y = function () {
        return f
    }, w = function () {
        return p
    }, M = function () {
        return g
    }, U = function (t, e, i) {
        a = t, u = e, c = i
    }, A = function (t, e, i) {
        l = t, d = e, h = i
    }, T = function (t) {
        l = t
    }, C = function (t) {
        d = t
    }, b = function (t) {
        h = t
    }, L = function (t) {
        s = t
    }, x = function (t) {
        o = t
    }, E = function () {
        f = ((l - a) * o + f) * s, p = ((d - u) * o + p) * s, g = ((h - c) * o + g) * s, a += f, u += p, c += g, m = f > .001 || p > .001 || g > .001
    };
    return {
        x: t,
        y: e,
        z: i,
        isDirty: v,
        speed: S,
        speedX: y,
        speedY: w,
        speedZ: M,
        setTarget: A,
        setTargetX: T,
        setTargetY: C,
        setTargetZ: b,
        setCurrent: U,
        setFriction: L,
        setAccel: x,
        update: E
    }
}, MathUtil = MathUtil || {};
MathUtil.TWO_PI = 2 * Math.PI, MathUtil.randRange = function (t, e) {
    return Math.round(Math.random() * (e - t)) + t
}, MathUtil.randRangeDecimel = function (t, e) {
    return Math.random() * (e - t) + t
}, MathUtil.getPercentWithinRange = function (t, e, i) {
    return e += -t, i += -t, t += -t, i / (e - t)
}, MathUtil.lerpByPercent = function (t, e, i) {
    return t + (e - t) * i
}, MathUtil.map = function (t, e, i, n, r) {
    return (r - n) * ((t - e) / (i - e)) + n
}, MathUtil.roundToDecimal = function (t, e) {
    var i = Math.pow(10, e);
    return Math.round(t * i) / i
}, MathUtil.easeTo = function (t, e, i) {
    return t -= (t - e) / i
}, MathUtil.degreesToRadians = function (t) {
    return t * (Math.PI / 180)
}, MathUtil.radiansToDegrees = function (t) {
    return t * (180 / Math.PI)
}, MathUtil.percentToDegrees = function (t) {
    return 360 * Math.abs(t)
}, MathUtil.degreesToPercent = function (t) {
    return Math.abs(t / 360)
}, MathUtil.sums = function (t) {
    for (var e = 0, i = t.length, n = 0; i > n; n++)e += t[n];
    return e
}, MathUtil.average = function (t) {
    return MathUtil.sums(t) / t.length
}, MathUtil.interp = function (t, e, i) {
    return (e - t) * i + t
}, MathUtil.remap = function (t, e, i, n, r) {
    return MathUtil.interp(n, r, MathUtil.getPercentWithinRange(e, i, t))
}, MathUtil.getDistance = function (t, e, i, n) {
    return a = t - i, b = e - n, Math.abs(Math.sqrt(a * a + b * b))
}, MathUtil.clamp = function (t, e, i) {
    return Math.max(e, Math.min(i, t))
}, MathUtil.constrainAngle = function (t) {
    return 0 > t ? t + 360 : t > 360 ? t - 360 : t
}, MathUtil.constrainRadians = function (t) {
    return 0 > t ? t + 2 * Math.PI : t > 2 * Math.PI ? t - 2 * Math.PI : t
}, MathUtil.getAngleToTarget = function (t, e, i, n) {
    return MathUtil.constrainAngle(180 * -Math.atan2(t - i, e - n) / Math.PI)
}, MathUtil.getRadiansToTarget = function (t, e, i, n) {
    return -Math.atan2(t - i, e - n)
}, MathUtil.getRotationDirectionToTarget = function (t, e) {
    var i = Math.abs(t - e);
    return t > e ? 180 > i ? -1 : 1 : 180 > i ? 1 : -1
}, function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e) {
        var i = (new Date).getTime(), n = Math.max(0, 16 - (i - t)), r = window.setTimeout(function () {
            e(i + n)
        }, n);
        return t = i + n, r
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}(), function () {
    var t = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    };
    this.FeaturedUser = function () {
        function t(t, e, i, n) {
            this.grid = t, this.el = e, this.imageEl = i, this.index = n, this.name = this.imageEl.getAttribute("data-username"), this.gridLoc = {
                x: 0,
                y: 0
            }, this.isOffScreen = !1, this.selected = !1, this.isAccel = !1, this.offset = new ElasticPoint(1, 1, 1, .15, .05), this.scale = new ElasticPoint(0, 0, .001, .65, .21), this.calcGridPosition(), this.addClickHandlers()
        }

        return t.prototype.calcGridPosition = function () {
            var t, e, i, n;
            return i = this.grid.gridCols * UserGrid.userSpacing, e = this.grid.gridRows * UserGrid.userSpacing, t = this.index % this.grid.gridCols, n = Math.floor(this.index / this.grid.gridCols), this.gridLoc.x = -i / 2 + t * UserGrid.userSpacing + UserGrid.userSpacing / 2, this.gridLoc.y = this.grid.stageH / 2 - e / 2 + n * UserGrid.userSpacing + 1.5 * UserGrid.userSpacing, this.curX = this.gridLoc.x, this.curY = this.gridLoc.y
        }, t.prototype.scaleUp = function () {
            return this.el.classList.add("visible"), this.scale.setTargetZ(1)
        }, t.prototype.scaleDown = function () {
            return this.scale.setTargetZ(0)
        }, t.prototype.forceShow = function () {
            return this.calcGridPosition(), this.scale.setTargetZ(1), this.el.classList.add("visible")
        }, t.prototype.setActive = function (t) {
            var e, i;
            return t ? (this.selected = !0, this.scale.setTargetZ(1.4), e = document.createElement("div"), e.classList.add("outro__cover"), document.body.appendChild(e), i = document.querySelector(".link__logo"), null != i && i.classList.add("loading"), setTimeout(function () {
                return function () {
                    return e.classList.add("outro--active")
                }
            }(this), 650), setTimeout(function (t) {
                return function () {
                    //点击图标以后，跳转到哪儿。
                    //return document.location = "/" + t.name
                    console.log(t);
                }
            }(this), 800), setTimeout(function () {
                return function () {
                    //return document.location.reload()
                }
            }(this), 5e3)) : this.scale.setTargetZ(0)
        }, t.prototype.addClickHandlers = function () {
            return this.el.addEventListener("mouseout", function (t) {
                return function () {
                    return t.grid.exiting !== !0 ? t.scale.setTargetZ(1) : void 0
                }
            }(this)), this.el.addEventListener("mouseover", function (t) {
                return function () {
                    return t.scale.setTargetZ(overZoom)//鼠标悬浮时放大几倍
                }
            }(this)), this.el.addEventListener("click", function (t) {
                return function (e) {
                    //return e.preventDefault(), t.grid.activateUser(t)
                    icon_on_click(t);

                }
            }(this))
        }, t.prototype.setAccelerometer = function () {
            return this.offset.setFriction(.05), this.isAccel = !0
        }, t.prototype.update = function () {
            var t, e, i;
            return e = MathUtil.getDistance(this.grid.mouseOffsetX * this.grid.stageW, this.grid.mouseOffsetY * this.grid.stageH + this.grid.stageH / 2, this.curX, this.curY), i = e / this.grid.stageW, this.isAccel ? (.2 > i && (i = .2), i > .35 && (i = .35)) : (.25 > i && (i = .25), i > .6 && (i = .6)), t = 1 - i, this.offset.setAccel(t), this.offset.setTargetX(this.grid.mouseOffsetX * this.grid.gridOverhangX), this.offset.setTargetY(this.grid.mouseOffsetY * this.grid.gridOverhangY), this.offset.update(), this.scale.update(), this.curX = this.gridLoc.x - this.offset.x(), this.curY = this.gridLoc.y - this.offset.y(), this.curX > -this.grid.stageW / 2 - UserGrid.userRadius && this.curX < this.grid.stageW / 2 + UserGrid.userRadius && this.curY > -this.grid.stageH / 2 - UserGrid.userRadius && this.curY < this.grid.stageH + UserGrid.userRadius ? (this.grid.cssHelper.update2DPosition(this.el, this.curX, this.curY, this.scale.z(), 0, !1), this.isOffScreen = !1) : this.isOffScreen === !1 ? (this.curX = -UserGrid.userSize, this.curY = -UserGrid.userSize, this.grid.cssHelper.update2DPosition(this.el, this.curX, this.curY, this.scale.z(), 0, !1), this.isOffScreen = !0) : void 0
        }, t
    }(), this.UserGrid = function () {
        function e() {
            this.animate = t(this.animate, this), this.updateOrientation = t(this.updateOrientation, this), this.cssHelper = new tts.CSSHelper, this.scaleUpIndex = 0, this.scaleUpLastTime = 0, this.scaleDownIndex = 0, this.scaleDownLastTime = 0, this.lazyLoadAvatars(), this.getElements(), this.avatarsArr.length > 0 && setTimeout(function (t) {
                return function () {
                    return t.active = !0, t.timeout = 0, t.paused = !1, t.createMaxNodes(), t.gridConfig(), t.getUserData(), t.watchMouse(), t.watchAccelerometer(), setTimeout(function () {
                        return requestAnimationFrame(t.animate)
                    }, 350)
                }
            }(this), 0)
        }

        return e.userSize = 130, e.userRadius = e.userSize / 2, e.userPadding = 40, e.userSpacing = e.userSize + e.userPadding, e.mobileBreak = 720, e.prototype.supportsTemplate = function () {
            return "content"in document.createElement("template")
        }, e.prototype.lazyLoadAvatars = function () {
            var t, e;
            return e = document.querySelector("#avatars-lazyload"), this.supportsTemplate() ? (e = document.querySelector("#avatars-lazyload"), t = document.importNode(e.content, !0), e.parentElement.appendChild(t), e.parentElement.removeChild(e)) : e.parentElement.innerHTML = e.innerHTML
        }, e.prototype.getElements = function () {
            return this.gridEl = document.querySelector(".profile__group"), this.avatarsEl = this.gridEl.querySelector(".profile-avatars"), this.avatarsArr = document.querySelectorAll(".avatar-container")
        }, e.prototype.getUserData = function () {
            var t, e, i, n, r, s, o;
            for (this.users = [], this.numUsersLoaded = 0, o = this.avatarsArr, i = r = 0, s = o.length; s > r; i = ++r)t = o[i], e = t.querySelector(".avatar--large"), n = new FeaturedUser(this, t, e, this.numUsersLoaded), this.users.push(n), this.numUsersLoaded++;
            return !0
        }, e.prototype.createMaxNodes = function () {
            var t, i, n, r, s, o, a, u;
            for (this.screenW = window.screen.width, this.screenH = window.screen.height, r = Math.ceil(this.screenW / e.userSize), this.gridCols % 2 === 0 && (r += 3), s = Math.ceil(this.screenH / e.userSize), s += s % 2 === 0 ? 3 : 2, this.stageW < e.mobileBreak && (s += 2), o = s * r, a = Math.ceil(o / this.avatarsArr.length), i = this.avatarsEl.innerHTML, t = "", n = u = 0; a > u; n = u += 1)t += i;
            return this.avatarsEl.innerHTML = t, this.avatarsArr = document.querySelectorAll(".avatar-container")
        }, e.prototype.getGridSpacing = function () {
            return this.stageW < e.mobileBreak ? (this.gridEl.classList.add("small--avatars"), e.userSize = 90, e.userPadding = 20) : (this.gridEl.classList.remove("small--avatars"), e.userSize = 130, e.userPadding = 40), e.userSpacing = e.userSize + e.userPadding, e.userRadius = e.userSize / 2
        }, e.prototype.gridConfig = function () {
            return this.gridEl ? (this.stageW = this.gridEl.offsetWidth, this.stageH = this.gridEl.offsetHeight, this.stageAspectRatio = this.stageW / this.stageH, this.getGridSpacing(), this.gridCols = Math.ceil(this.stageW / e.userSize), this.gridCols % 2 === 0 && (this.gridCols += 3), this.gridRows = Math.ceil(this.stageH / e.userSize), this.gridRows += this.gridRows % 2 === 0 ? 3 : 2, this.stageW < e.mobileBreak && (this.gridRows += 2), this.numUsersDisplayed = this.gridRows * this.gridCols, this.gridOverhangX = this.gridCols * e.userSpacing - this.stageW, this.gridOverhangY = (this.gridRows - 2) * e.userSpacing - this.stageH) : void 0
        }, e.prototype.watchMouse = function () {
            return this.mouseOffset = new ElasticPoint(0, 0, 0, .25, .05), this.mouseX = 0, this.mouseY = 0, this.mouseOffsetX = 0, this.mouseOffsetY = 0, window.addEventListener("mousemove", function (t) {
                return function (e) {
                    var i, n, r;
                    if (t.exiting !== !0)return n = e.clientX - t.mouseX, r = e.clientY - t.mouseY, i = t.gridEl.getBoundingClientRect(), t.mouseX = e.clientX, t.mouseY = e.clientY, t.mouseX > i.left && t.mouseX < i.left + i.width && t.mouseY > i.top && t.mouseY < i.top + i.height && (t.mouseY -= i.top, t.mouseOffsetX = MathUtil.clamp(MathUtil.getPercentWithinRange(0, t.stageW, t.mouseX) - .5, -.5, .5), t.mouseOffsetY = MathUtil.clamp(MathUtil.getPercentWithinRange(0, t.stageH, t.mouseY) - .5, -.5, .5), t.mouseOffset.setTarget(t.mouseOffsetX, t.mouseOffsetY, 0)), t.active === !1 && requestAnimationFrame(t.animate), t.active = !0, t.timeout = 0
                }
            }(this), !1)
        }, e.prototype.watchAccelerometer = function () {
            return this.tiltZAxis = 0, this.tiltXAxis = 0, this.compass = 0, this.accelerometerSet = !1, window.addEventListener("deviceorientation", this.updateOrientation)
        }, e.prototype.updateOrientation = function (t) {
            var e, i, n, r, s;
            if (this.tiltZAxis = parseFloat(t.gamma), this.tiltXAxis = parseFloat(t.beta), this.compass = parseFloat(t.alpha), Math.abs(this.tiltZAxis) > 0 && Math.abs(this.tiltXAxis) > 0 && this.tiltXAxis < 90 && this.tiltXAxis > 0) {
                if (this.mouseOffsetX = MathUtil.clamp(this.tiltZAxis, -45, 45) / 45 / 2, this.mouseOffsetY = MathUtil.clamp(this.tiltXAxis, 0, 90) / 90 - .5, !this.accelerometerSet) {
                    for (s = this.users, n = 0, r = s.length; r > n; n++)i = s[n], i.setAccelerometer();
                    this.accelerometerSet = !0
                }
                return window.innerWidth > window.innerHeight && (e = this.mouseOffsetX, this.mouseOffsetX = this.mouseOffsetY, this.mouseOffsetY = e), this.mouseOffset.setTarget(this.mouseOffsetX, this.mouseOffsetY, 0)
            }
        }, e.prototype.nextScaleUp = function () {
            var t, e, i, n, r, s, o;
            for (this.scaleUpLastTime = Date.now(), r = this.scaleUpIndex, i = r, n = r + r, t = s = r; n >= s; t = s += 1)e = t, t !== r && (e = i), e < this.numUsersDisplayed && null != (o = this.users[e]) && o.scaleUp(), i += this.gridCols - 1;
            return this.scaleUpIndex++, this.scaleUpIndex >= this.gridRows + this.gridCols ? this.nextScaleUp = null : void 0
        }, e.prototype.nextScaleDown = function () {
            var t, e, i, n, r, s, o, a;
            for (this.scaleDownLastTime = Date.now(), r = this.scaleDownIndex, i = r, n = r + r, t = s = r; n >= s; t = s += 1)e = t, t !== r && (e = i), e < this.numUsersDisplayed && !(null != (o = this.users[e]) ? o.selected : void 0) && null != (a = this.users[e]) && a.scaleDown(), i += this.gridCols - 1;
            return this.scaleDownIndex++, this.scaleDownIndex >= this.gridRows + this.gridCols ? this.nextScaleDown = null : void 0
        }, e.prototype.animate = function () {
            var t, e, i, n;
            if (this.active === !0 && this.paused === !1) {
                for (requestAnimationFrame(this.animate), Date.now() > this.scaleUpLastTime + 100 && "function" == typeof this.nextScaleUp && this.nextScaleUp(), this.exiting && Date.now() > this.scaleDownLastTime + 20 && "function" == typeof this.nextScaleDown && this.nextScaleDown(), this.mouseOffset.update(), n = this.users, e = 0, i = n.length; i > e; e++)t = n[e], t.update();
                this.timeout > 150 && (this.active = !1)
            }
            return !0
        }, e.prototype.activateUser = function (t) {
            return this.exiting = !0, t.setActive(!0)
        }, e.prototype.setPaused = function (t) {
            return this.paused = t, this.paused ? void 0 : this.animate()
        }, e.prototype.resized = function () {
            var t, e, i, n, r, s;
            if (this.gridConfig(), (null != (n = this.users) ? n.length : void 0) > 0) {
                for (r = this.users, s = [], e = 0, i = r.length; i > e; e++)t = r[e], s.push(t.forceShow());
                return s
            }
        }, e
    }()
}.call(this), function () {
    var t, e, i, n, r;
    r = Date.now || function () {
        return (new Date).getTime()
    }, n = function (t, e, i) {
        var n, s, o, a, u, c;
        return u = void 0, n = void 0, s = void 0, c = void 0, a = void 0, o = function () {
            var l;
            l = r() - c, e > l ? u = setTimeout(o, e - l) : (u = null, i || (a = t.apply(s, n), s = n = null))
        }, function () {
            var l;
            return s = this, n = arguments, c = r(), l = i && !u, u || (u = setTimeout(o, e)), l && (a = t.apply(s, n), s = n = null), a
        }
    }, i = function (t, e, i) {
        var n, r, s;
        return s = new XMLHttpRequest, n = document.querySelector('meta[name="csrf-token"]'), r = n ? n.getAttribute("content") : void 0, s.onload = function () {
            return function () {
                return 4 === s.readyState && 200 === s.status ? "function" == typeof e ? e(s) : void 0 : "function" == typeof i ? i(s) : void 0
            }
        }(this), s.open(t.method, t.url, !0), r && s.setRequestHeader("X-CSRF-Token", r), s.send(t.data || null)
    }, t = function () {
        var t;
        return t = document.createElement("div"), t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector
    }(), e = function (e, i) {
        if (t.bind(e)(i))return e;
        for (e = e.parentNode; e && e !== document;) {
            if (t.bind(e)(i))return e;
            e = e.parentNode
        }
        return !1
    }, function () {
        var t, e, r, s, o, a, u, c, l, d, h, f, p, g, m, v, S, y, w, M, U, A, T, C, b, L, x, E, H, D, O, P, X, Y, R, F, z, k, q, W, I, G, B, Z, _;
        for (_ = null, G = null, X = [], O = document.querySelectorAll(".js-section"),
                 P = document.querySelectorAll(".js-section-link"), o = -1, Y = O.length,
                 t = document.getElementById("agree_button"),
                 k = document.getElementById("sharing_button"),
                 //l = document.getElementById("form"),
                 //b = l.querySelector("input.btn"),
                 y = document.querySelector(".main"),
                 w = document.querySelector(".navigation"),
                 setTimeout(function () {
            return function () {
                var t;
                return t = new window.UserGrid
            }
        }(this), 200), u = function () {
            return null != G ? G : G = document.getElementById("form_email")
        }, A = function () {
            return null != _ ? _ : _ = document.getElementById("poll")
        }, x = function (t, e) {
            return Math.abs(e - t) <= .5 ? void scrollTo(0, e) : (t = .8 * t + .2 * e, scrollTo(0, Math.round(t)), setTimeout(function () {
                return function () {
                    return x(t, e)
                }
            }(this), 16.66667))
        }, H = function (t) {
            var e;
            return e = pageYOffset + t.getBoundingClientRect().top, x(pageYOffset, e)
        }, E = function (t) {
            var e, i, n;
            for (i = 0, n = X.length; n > i; i++)if (e = X[i], e.id === t)return H(e.el)
        }, W = function () {
            var t, e, i, n, r;
            for (X = [], e = n = 0, r = O.length; r > n; e = ++n)i = O[e], t = i.getBoundingClientRect(), X.push({
                el: i,
                id: i.getAttribute("id"),
                rect: {top: i.offsetTop, bottom: t.bottom, height: t.height},
                index: e
            });
            return X
        }, p = function () {
            var t, e, i;
            for (t = e = i = Y - 1; e >= 0; t = e += -1)if (pageYOffset >= X[t].rect.top)return X[t];
            return X[0]
        }, F = function (t) {
            var e;
            return e = document.body, e.classList.remove("snapped"), e.setAttribute("data-activated", t), e.offsetWidth, e.classList.add("snapped")
        }, R = function (t) {
            //return t.index !== o ? ("undefined" != typeof history && null !== history && history.pushState(null, null, "/" + t.id), o = t.index, F(t.id)) : void 0
        }, g = function (t) {
            var e, i, n;
            for (i = 0, n = X.length; n > i; i++)if (e = X[i], e.id === t)return e
        }, m = function (t) {
            var e, i, n;
            for (null == t && (t = o), i = 0, n = X.length; n > i; i++)if (e = X[i], e.index === t)return e
        }, s = function (t) {
            return t >= Y || 0 > t ? 0 : t
        }, M = function () {
            var t, e;
            return t = s(o + 1), e = m(t), R(e), E(e.id)
        }, C = function () {
            var t, e;
            return t = s(o - 1), e = m(t), R(e), E(e.id)
        }, U = function () {
            return function (t) {
                var e;
                return t.preventDefault(), e = A(), e.classList.remove("closed"), e.classList.add("opened"), e.offsetWidth, e.classList.add("open")
            }
        }(this), r = function () {
            return function (t) {
                var e;
                return t.preventDefault(), e = A(), e.classList.remove("open"), setTimeout(function () {
                    return e.classList.remove("opened"), e.offsetWidth, e.classList.add("closed")
                }, 300)
            }
        }(this), z = function (t, e) {
            return null == e && (e = !0), u().value = t, u().disabled = e
        }, h = function () {
            return function () {
                var t;
                return "undefined" != typeof ga && null !== ga && ga("send", "event", "invite-submit", "success", null, 1), t = window.innerWidth < 400 ? "Check your email to join Ello." : "Please check your email to join Ello.", z(t, !0), l.classList.add("form-was-submitted"), setTimeout(function () {
                    return M()
                }, 1e3), b.removeAttribute("disabled")
            }
        }(this), d = function () {
            return function () {
                return "undefined" != typeof ga && null !== ga && ga("send", "event", "invite-submit", "failure", null, 1), l.classList.add("form--error"), z("Sorry, please try again.", !1), b.removeAttribute("disabled")
            }
        }(this), f = function () {
            return function (t) {
                return t.preventDefault(), b.setAttribute("disabled", "disabled"), u().value.length && c(u().value) ? i({
                    method: l.method,
                    url: l.action + ".json",
                    data: new FormData(l)
                }, h, d) : ("undefined" != typeof ga && null !== ga && ga("send", "event", "invite-submit", "error", null, 1), b.removeAttribute("disabled"), z("Come on, use a real e-mail.", !1))
            }
        }(this), c = function () {
            return function (t) {
                var e;
                return e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, e.test(t)
            }
        }(this), q = function () {
            return function (t) {
                var e, i, n;
                return t.preventDefault(), n = t.target.getAttribute("href") ? t.target : t.target.parentNode, e = n.getAttribute("href").replace(/\//gi, ""), i = g(e), R(i, i, e), E(i.id)
            }
        }(this), L = function () {
            return function () {
                return W(), R(p()), "undefined" != typeof _userGrid && null !== _userGrid ? _userGrid.resized() : void 0
            }
        }(this), D = function () {
            return function () {
                return R(p())
            }
        }(this), T = function () {
            return function () {
                var t, e;
                return t = window.location.pathname.replace(/\//gi, ""), t.length ? (e = g(t), R(e), E(e.id)) : R(X[0])
            }
        }(this), e = function (t) {
            var e;
            return e = (t.target || t.srcElement).tagName.toLowerCase(), !("input" === e)
        }, S = function () {
            return function (t) {
                var i;
                if (/(38|40)/.test(t.keyCode) && e(t)) {
                    switch (t.keyCode) {
                        case 38:
                            i = C;
                            break;
                        case 40:
                            i = M
                    }
                    return i ? (t.preventDefault(), t.stopPropagation(), i()) : void 0
                }
            }
        }(this), a = n(L, 300),
                 window.addEventListener("resize", a),
                 window.addEventListener("scroll", D), "no-touch" === document.documentElement.className && document.addEventListener("keydown", S),
                 //window.addEventListener("popstate", T),
                 //l.addEventListener("submit", f),
                 //t.addEventListener("click", U),
                 //k.addEventListener("click", r),
                 B = 0, Z = P.length; Z > B; B++)I = P[B]
                 //I.addEventListener("click", q);
        return (v = function () {
            var t;
            return W(), t = window.location.pathname.replace(/\//gi, ""), t.length ? setTimeout(function () {
            }(this), 500) : L()
        })()
    }()
}.call(this);