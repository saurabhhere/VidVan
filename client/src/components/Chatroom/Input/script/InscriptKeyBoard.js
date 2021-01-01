
//*********************Adds Inscript Typing functionality where ever It finds a class named "Inscript" ***************//
//*****************************Edited/Updated by Coding Keeda************************************//

import jQuery from 'jquery';
import $ from 'jquery';
import React from 'react'
 
var RTSPL = {};
RTSPL.util = {
    keyCode: function (b) {
        if (!b) {
            var b = window.event
        }
        
            var a = b.keyCode;

            switch (a) {
                case 59:
                    a = 186;
                    break;
                case 107:
                    a = 187;
                    break;
                case 109:
                    a = 189;
                    break;
                case 61:
                    a = 187;
                    break;
                case 173:
                    a = 189;
                    break
            }
            return a
        
        
        return b.keyCode
    },
    isCtrl: function (a) {
        if (!a) {
            var a = window.event
        }
        return a.ctrlKey
    },
    isAlt: function (a) {
        if (!a) {
            var a = window.event
        }
        return a.altKey
    },
    isShift: function (a) {
        if (!a) {
            var a = window.event
        }
        return a.shiftKey
    },
    insertAtCaret: function (a, f) {
        var d = this.getSelectionStart(a);
        var b = this.getSelectionEnd(a);
        var c = a.value.length;
        a.value = a.value.substring(0, d) + f + a.value.substring(b, c);
        this.setCaretPosition(a, d + f.length, 0)
    },
    deleteAtCaret: function (c, b, a) {
        var g = this.getSelectionStart(c);
        var d = this.getSelectionEnd(c);
        var f = c.value.length;
        if (b > g) {
            b = g
        }
        if (d + a > f) {
            a = f - d
        }
        var h = c.value.substring(g - b, d + a);
        c.value = c.value.substring(0, g - b) + c.value.substring(d + a);
        this.setCaretPosition(c, g - b, 0);
        return h
    },
    getSelectionStart: function (a) {
        a.focus();
        if (a.selectionStart !== undefined) {
            return a.selectionStart
        } else {
            if (document.selection) {
                var b = document.selection.createRange();
                if (b == null) {
                    return 0
                }
                var d = a.createTextRange();
                var c = d.duplicate();
                d.moveToBookmark(b.getBookmark());
                c.setEndPoint("EndToStart", d);
                return c.text.length
            }
        }
        return 0
    },
    getSelectionEnd: function (a) {
        a.focus();
        if (a.selectionEnd !== undefined) {
            return a.selectionEnd
        } else {
            if (document.selection) {
                var b = document.selection.createRange();
                if (b == null) {
                    return 0
                }
                var d = a.createTextRange();
                var c = d.duplicate();
                d.moveToBookmark(b.getBookmark());
                c.setEndPoint("EndToStart", d);
                return c.text.length + b.text.length
            }
        }
        return a.value.length
    },
    setCaretPosition: function (b, d, a) {
        var c = b.value.length;
        if (d > c) {
            d = c
        }
        if (d + a > c) {
            a = c - a
        }
        b.focus();
        if (b.setSelectionRange) {
            b.setSelectionRange(d, d + a)
        } else {
            if (b.createTextRange) {
                var f = b.createTextRange();
                f.collapse(true);
                f.moveEnd("character", d + a);
                f.moveStart("character", d);
                f.select()
            }
        }
        b.focus()
    },
    selectAll: function (a) {
        this.setCaretPosition(a, 0, a.value.length)
    }
};
RTSPL.layout = function () {
    this.keys = [];
    this.deadkeys = [];
    this.dir = "ltr";
    this.name = "US";
    this.lang = "en"
};
RTSPL.layout.prototype.loadDefault = function () {
    this.keys = [{
        i: "k0",
        c: "0",
        n: "`",
        s: "~"
    }, {
        i: "k1",
        c: "0",
        n: "1",
        s: "!"
    }, {
        i: "k2",
        c: "0",
        n: "2",
        s: "@"
    }, {
        i: "k3",
        c: "0",
        n: "3",
        s: "#"
    }, {
        i: "k4",
        c: "0",
        n: "4",
        s: "$"
    }, {
        i: "k5",
        c: "0",
        n: "5",
        s: "%"
    }, {
        i: "k6",
        c: "0",
        n: "6",
        s: "^"
    }, {
        i: "k7",
        c: "0",
        n: "7",
        s: "&"
    }, {
        i: "k8",
        c: "0",
        n: "8",
        s: "*"
    }, {
        i: "k9",
        c: "0",
        n: "9",
        s: "("
    }, {
        i: "k10",
        c: "0",
        n: "0",
        s: ")"
    }, {
        i: "k11",
        c: "0",
        n: "-",
        s: "_"
    }, {
        i: "k12",
        c: "0",
        n: "=",
        s: "+"
    }, {
        i: "k13",
        c: "1",
        n: "q",
        s: "Q"
    }, {
        i: "k14",
        c: "1",
        n: "w",
        s: "W"
    }, {
        i: "k15",
        c: "1",
        n: "e",
        s: "E"
    }, {
        i: "k16",
        c: "1",
        n: "r",
        s: "R"
    }, {
        i: "k17",
        c: "1",
        n: "t",
        s: "T"
    }, {
        i: "k18",
        c: "1",
        n: "y",
        s: "Y"
    }, {
        i: "k19",
        c: "1",
        n: "u",
        s: "U"
    }, {
        i: "k20",
        c: "1",
        n: "i",
        s: "I"
    }, {
        i: "k21",
        c: "1",
        n: "o",
        s: "O"
    }, {
        i: "k22",
        c: "1",
        n: "p",
        s: "P"
    }, {
        i: "k23",
        c: "0",
        n: "[",
        s: "{"
    }, {
        i: "k24",
        c: "0",
        n: "]",
        s: "}"
    }, {
        i: "k25",
        c: "0",
        n: "\\",
        s: "|"
    }, {
        i: "k26",
        c: "1",
        n: "a",
        s: "A"
    }, {
        i: "k27",
        c: "1",
        n: "s",
        s: "S"
    }, {
        i: "k28",
        c: "1",
        n: "d",
        s: "D"
    }, {
        i: "k29",
        c: "1",
        n: "f",
        s: "F"
    }, {
        i: "k30",
        c: "1",
        n: "g",
        s: "G"
    }, {
        i: "k31",
        c: "1",
        n: "h",
        s: "H"
    }, {
        i: "k32",
        c: "1",
        n: "j",
        s: "J"
    }, {
        i: "k33",
        c: "1",
        n: "k",
        s: "K"
    }, {
        i: "k34",
        c: "1",
        n: "l",
        s: "L"
    }, {
        i: "k35",
        c: "0",
        n: ";",
        s: ":"
    }, {
        i: "k36",
        c: "0",
        n: "'",
        s: '"'
    }, {
        i: "k37",
        c: "1",
        n: "z",
        s: "Z"
    }, {
        i: "k38",
        c: "1",
        n: "x",
        s: "X"
    }, {
        i: "k39",
        c: "1",
        n: "c",
        s: "C"
    }, {
        i: "k40",
        c: "1",
        n: "v",
        s: "V"
    }, {
        i: "k41",
        c: "1",
        n: "b",
        s: "B"
    }, {
        i: "k42",
        c: "1",
        n: "n",
        s: "N"
    }, {
        i: "k43",
        c: "1",
        n: "m",
        s: "M"
    }, {
        i: "k44",
        c: "0",
        n: ",",
        s: "<"
    }, {
        i: "k45",
        c: "0",
        n: ".",
        s: ">"
    }, {
        i: "k46",
        c: "0",
        n: "/",
        s: "?"
    }, {
        i: "k47",
        c: "0",
        n: "\\",
        s: "|"
    }];
    this.dir = "ltr";
    this.name = "US";
    this.lang = "en"
};
RTSPL.layout.prototype.load = function (a) {
    this.keys = a.keys;
    this.deadkeys = a.deadkeys;
    this.dir = a.dir;
    this.name = a.name;
    this.lang = a.lang ? a.lang : "en"
};
RTSPL.layout.parser = {
    keyCodes: [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 220],
    getKeyCode: function (c, e, b) {
        var d = c.length;
        for (var a = 0; a < d; a++) {
            if (c[a].i == b) {
                return e == 1 ? (c[a].s ? c[a].s : "") : (c[a].n ? c[a].n : "")
            }
        }
        return 0
    },
    getKey: function (c, b) {
        var d = c.length;
        for (var a = 0; a < d; a++) {
            if (c[a].i == b) {
                return c[a]
            }
        }
        return null
    },
    isDeadkey: function (a, d) {
        if (!a) {
            return false
        }
        var c = a.length;
        for (var b = 0; b < c; b++) {
            if (a[b].k == d) {
                return true
            }
        }
        return false
    },
    getMappedValue: function (a, e, d) {
        if (!a) {
            return ""
        }
        var c = a.length;
        for (var b = 0; b < c; b++) {
            if (a[b].k == d && a[b].b == e) {
                return a[b].c
            }
        }
        return ""
    },
    getKeyId: function (b) {
        for (var a = 0; a < 48; a++) {
            if (this.keyCodes[a] == b) {
                return a
            }
        }
        return -1
    },
    getState: function (d, a, e, b, c) {
        var f = "n";
        if (!a && !e && d) {
            f = "n"
        } else {
            if (!a && e && !d) {
                f = "s"
            } else {
                if (!a && e && d) {
                    f = "s"
                } else {
                    if (a && !e && !d) {
                        f = "n"
                    } else {
                        if (a && !e && d) {
                            f = "t"
                        } else {
                            if (a && e && !d) {
                                f = "s"
                            } else {
                                if (a && e && d) {
                                    f = "f"
                                }
                            }
                        }
                    }
                }
            }
        }
        if ((f == "n" || f == "s") && b) {
            if (c == "1") {
                if (f == "n") {
                    f = "s"
                } else {
                    f = "n"
                }
            }
            if (c == "SGCap") {
                if (f == "n") {
                    f = "y"
                } else {
                    if (f == "s") {
                        f = "z"
                    }
                }
            }
        }
        return f
    }
};
RTSPL.keyboard = function (a, d) {
    this.defaultLayout = new RTSPL.layout();
    this.defaultLayout.loadDefault();
    this.virtualLayout = new RTSPL.layout();
    this.virtualLayout.loadDefault();
    this.currentLayout = this.virtualLayout;
    this.shift = false;
    this.shiftOn = false;
    this.caps = false;
    this.capsOn = false;
    this.alt = false;
    this.ctrl = false;
    this.altCtrlOn = false;
    this.fontSize = 18;
    this.counter = 0;
    this.interval = 0;
    this.prev = "";
    this.cancelkeypress = false;
    this.customOnBackspace = function (e) { };
    this.customOnEnter = function () { };
    this.customOnSpace = function () {
        return false
    };
    this.customOnKey = function (e) {
        return false
    };
    this.customOnEsc = function () { };
    this.customDrawKeyboard = function (e) {
        return e
    };
    this.textbox = $("#" + d);

    this.nativeTextbox = document.getElementById(d);

    var c = ['<div style="display:none;" id="RTSPL-keyboard">'];
    for (var b = 0; b < 13; b++) {
        c.push('<button id="RTSPL-k', b, '" class="RTSPL-key"></button>')
    }
    c.push('<button id="RTSPL-backspace"><span>Backspace</span></button>');
    c.push('<div class="RTSPL-clear"></div>');
    c.push('<button id="RTSPL-tab"><span>Tab</span></button>');
    for (var b = 13; b < 25; b++) {
        c.push('<button id="RTSPL-k', b, '" class="RTSPL-key"></button>')
    }
    c.push('<button id="RTSPL-k25"></button>');
    c.push('<div class="RTSPL-clear"></div>');
    c.push('<button id="RTSPL-caps-lock"><span>Caps Lock</span></button>');
    for (var b = 26; b < 37; b++) {
        c.push('<button id="RTSPL-k', b, '" class="RTSPL-key"></button>')
    }
    c.push('<button id="RTSPL-enter" class="RTSPL-enter"><span>Enter</span></button>');
    c.push('<div class="RTSPL-clear"></div>');
    c.push('<button id="RTSPL-left-shift"><span>Shift</span></button>');
    c.push('<button id="RTSPL-k47" class="RTSPL-key"></button>');
    for (var b = 37; b < 47; b++) {
        c.push('<button id="RTSPL-k', b, '" class="RTSPL-key"></button>')
    }
    c.push('<button id="RTSPL-right-shift"><span>Shift</span></button>');
    c.push('<div class="RTSPL-clear"></div>');
    c.push('<button id="RTSPL-left-ctrl"><span>Ctrl</span></button>');
    c.push('<button id="RTSPL"><span>RTSPL</span></button>');
    c.push('<button id="RTSPL-left-alt"><span>Alt</span></button>');
    c.push('<button id="RTSPL-space"><span>Space</span></button>');
    c.push('<button id="RTSPL-right-alt"><span>Alt</span></button>');
    c.push('<button id="RTSPL-escape" title="Turn on/off keyboard input conversion"><span>Esc</span></button>');
    c.push('<button id="RTSPL-right-ctrl"><span>Ctrl</span></button>');
    c.push('<div class="RTSPL-clear"></div>');
    c.push("</div>");
    document.getElementById(a).innerHTML = c.join("");
    this.wireEvents();
    this.drawKeyboard()
};
RTSPL.keyboard.prototype.loadDefaultLayout = function (a) {
    this.defaultLayout.load(a);
    this.drawKeyboard()
};
RTSPL.keyboard.prototype.loadVirtualLayout = function (a) {
    this.virtualLayout.load(a);
    this.drawKeyboard();
    this.textbox.attr("dir", this.attr("dir"))
};
RTSPL.keyboard.prototype.switchLayout = function () {
    this.currentLayout = (this.currentLayout === this.defaultLayout) ? this.virtualLayout : this.defaultLayout;
    this.reset();
    this.drawKeyboard();
    this.textbox.attr("dir", this.attr("dir"))
};
RTSPL.keyboard.prototype.onEsc = function () {
    this.switchLayout();
    this.customOnEsc()
};
RTSPL.keyboard.prototype.onShift = function () {
    this.shift = !this.shift;
    this.drawKeyboard()
};
RTSPL.keyboard.prototype.onAlt = function () {
    this.alt = !this.alt;
    this.drawKeyboard()
};
RTSPL.keyboard.prototype.onCtrl = function () {
    this.ctrl = !this.ctrl;
    this.drawKeyboard()
};
RTSPL.keyboard.prototype.onCapsLock = function () {
    this.caps = !this.caps;
    this.drawKeyboard()
};
RTSPL.keyboard.prototype.onBackspace = function () {
    if (this.prev != "") {
        this.prev = "";
        this.shift = false;
        this.drawKeyboard()
    } else {
        var a = RTSPL.util.deleteAtCaret(this.nativeTextbox, 1, 0);
        this.customOnBackspace(a)
    }
};

RTSPL.keyboard.prototype.onSpace = function () {
    if (!this.customOnSpace()) {
        RTSPL.util.insertAtCaret(this.nativeTextbox, "\u0020")
    }
};
RTSPL.keyboard.prototype.attr = function (a) {
    if (a == "dir") {
        return this.currentLayout.dir
    } else {
        if (a == "lang") {
            return this.currentLayout.lang
        } else {
            if (a == "name") {
                return this.currentLayout.name
            }
        }
    }
    return ""
};
RTSPL.keyboard.prototype.reset = function () {
    this.shift = false;
    this.caps = false;
    this.alt = false;
    this.ctrl = false;
    this.counter = 0;
    this.interval = 0;
    this.prev = ""
};
RTSPL.keyboard.prototype.stopRepeat = function () {
    if (this.interval != 0) {
        clearInterval(this.interval);
        this.counter = 0;
        this.interval = 0
    }
};
RTSPL.keyboard.prototype.onKey = function (b) {
    var a = RTSPL.layout.parser.getKey(this.currentLayout.keys, b);
    if (a) {
        var d = RTSPL.layout.parser.getState(this.ctrl, this.alt, this.shift, this.caps, a.c ? a.c : "0");
        var e = a[d] ? a[d] : "";
        if (this.prev != "") {
            var c = RTSPL.layout.parser.getMappedValue(this.currentLayout.deadkeys, e, this.prev);
            if (c != "") {
                RTSPL.util.insertAtCaret(this.nativeTextbox, c)
            }
            this.prev = ""
        } else {
            if (RTSPL.layout.parser.isDeadkey(this.currentLayout.deadkeys, e)) {
                this.prev = e
            } else {
                if (e != "") {
                    if (!this.customOnKey(e)) {
                        RTSPL.util.insertAtCaret(this.nativeTextbox, e)
                    }
                }
            }
        }
    }
};
RTSPL.keyboard.prototype.drawKeyboard = function () {
    if (!this.currentLayout.keys) {
        return
    }
    var d, f, j, k;
    var g = this.currentLayout.keys.length;
    for (var e = 0; e < g; e++) {
        f = this.currentLayout.keys[e];
        if (!$("RTSPL-" + f.i)) {
            continue
        }
        var c = this.ctrl;
        var a = this.alt;
        var h = this.shift;
        var b = this.caps;
        if (this.shiftOn) {
            h = true
        }
        if (this.capsOn) {
            b = true
        }
        if (this.altCtrlOn) {
            c = true;
            a = true
        }
        j = RTSPL.layout.parser.getState(c, a, h, b, f.c ? f.c : "0");
        k = f[j] ? f[j] : "";
        if (this.prev != "") {
            k = RTSPL.layout.parser.getMappedValue(this.currentLayout.deadkeys, k, this.prev)
        }
        if (!h) {
            k = this.customDrawKeyboard(k);
            if (k == "") {
                k = "&nbsp;"
            }
            d = '<div class="RTSPL-label-reference">' + RTSPL.layout.parser.getKeyCode(this.defaultLayout.keys, 0, f.i) + '</div><div class="RTSPL-label-natural" style="font-size:' + this.fontSize + 'px;">&nbsp;' + k + "</div>"
        } else {
            if (k == "") {
                k = "&nbsp;"
            }
            d = '<div class="RTSPL-label-reference">' + RTSPL.layout.parser.getKeyCode(this.defaultLayout.keys, 0, f.i) + '</div><div class="RTSPL-label-shift" style="font-size:' + this.fontSize + 'px;">&nbsp;' + k + "</div>"
        }
        document.getElementById("RTSPL-" + f.i).innerHTML = d
    }
    $("#RTSPL-left-ctrl").removeClass();
    $("#RTSPL-right-ctrl").removeClass();
    if (c) {
        $("#RTSPL-left-ctrl").addClass("RTSPL-recessed" + (this.ctrl ? "" : "-hover"));
        $("#RTSPL-right-ctrl").addClass("RTSPL-recessed" + (this.ctrl ? "" : "-hover"))
    }
    $("#RTSPL-left-alt").removeClass();
    $("#RTSPL-right-alt").removeClass();
    if (a) {
        $("#RTSPL-left-alt").addClass("RTSPL-recessed" + (this.alt ? "" : "-hover"));
        $("#RTSPL-right-alt").addClass("RTSPL-recessed" + (this.alt ? "" : "-hover"))
    }
    $("#RTSPL-left-shift").removeClass();
    $("#RTSPL-right-shift").removeClass();
    if (h) {
        $("#RTSPL-left-shift").addClass("RTSPL-recessed" + (this.shift ? "" : "-hover"));
        $("#RTSPL-right-shift").addClass("RTSPL-recessed" + (this.shift ? "" : "-hover"))
    }
    $("#RTSPL-caps-lock").removeClass();
    if (b) {
        $("#RTSPL-caps-lock").addClass("RTSPL-recessed" + (this.caps ? "" : "-hover"))
    }
};
RTSPL.keyboard.prototype.wireEvents = function () {
    var a = this;
    $("#RTSPL-keyboard").delegate("button", "mousedown", function (b) {
        var c = this.id;
        a.interval = setInterval(function () {
            a.counter++;
            if (a.counter > 5) {
                switch (c) {
                    case "RTSPL-backspace":
                        a.onBackspace();
                        break;
                    default:
                        if (c.search("RTSPL-k([0-9])|([1-3][0-9])|(4[0-7])") != -1) {
                            a.onKey(c.substr(7));
                            a.shift = false;
                            a.alt = false;
                            a.ctrl = false;
                            a.drawKeyboard()
                        }
                        break
                }
            }
        }, 50)
    });
    $("#RTSPL-keyboard").delegate("button", "mouseup", function (b) {
        a.stopRepeat()
    });
    $("#RTSPL-keyboard").delegate("button", "mouseout", function (b) {
        a.stopRepeat()
    });
    $("#RTSPL-keyboard").delegate("button", "click", function (b) {
        var c = this.id;
        switch (c) {
            case "RTSPL-left-shift":
            case "RTSPL-right-shift":
                a.onShift();
                break;
            case "RTSPL-left-alt":
            case "RTSPL-right-alt":
                a.onCtrl();
                a.onAlt();
                break;
            case "RTSPL-left-ctrl":
            case "RTSPL-right-ctrl":
                a.onAlt();
                a.onCtrl();
                break;
            case "RTSPL-escape":
                a.onEsc();
                break;
            case "RTSPL-caps-lock":
                a.onCapsLock();
                break;
            case "RTSPL-backspace":
                a.onBackspace();
                break;
            case "RTSPL-space":
                a.onSpace();
                break;
            default:
                if (c.search("RTSPL-k([0-9])|([1-3][0-9])|(4[0-7])") != -1) {
                    a.onKey(c.substr(7));
                    a.shift = false;
                    a.alt = false;
                    a.ctrl = false;
                    a.drawKeyboard()
                }
                break
        }
    });
    $("#RTSPL-left-shift, #RTSPL-right-shift").bind("mouseover", function (b) {
        a.shiftOn = true;
        a.drawKeyboard()
    });
    $("#RTSPL-left-shift, #RTSPL-right-shift").bind("mouseout", function (b) {
        a.shiftOn = false;
        a.drawKeyboard()
    });
    $("#RTSPL-left-ctrl, #RTSPL-right-ctrl").bind("mouseover", function (b) {
        a.altCtrlOn = true;
        a.drawKeyboard()
    });
    $("#RTSPL-left-ctrl, #RTSPL-right-ctrl").bind("mouseout", function (b) {
        a.altCtrlOn = false;
        a.drawKeyboard()
    });
    $("#RTSPL-left-alt, #RTSPL-right-alt").bind("mouseover", function (b) {
        a.altCtrlOn = true;
        a.drawKeyboard()
    });
    $("#RTSPL-left-alt, #RTSPL-right-alt").bind("mouseout", function (b) {
        a.altCtrlOn = false;
        a.drawKeyboard()
    });
    $("#RTSPL-caps-lock").bind("mouseover", function (b) {
        a.capsOn = true;
        a.drawKeyboard()
    });
    $("#RTSPL-caps-lock").bind("mouseout", function (b) {
        a.capsOn = false;
        a.drawKeyboard()
    });
    a.textbox.bind("keydown", function (b) {
        var d = RTSPL.util.keyCode(b);
        if ((d == 65 || d == 67 || d == 86 || d == 88 || d == 89 || d == 90) && (a.ctrl && !a.alt && !a.shift)) {
            return
        }
        if (a.currentLayout == a.defaultLayout && d != 27) {
            return
        }
        switch (d) {
            case 17:
                a.ctrl = false;
                a.onCtrl();
                break;
            case 18:
                a.alt = false;
                a.onAlt();
                break;
            case 16:
                a.shift = false;
                a.onShift();
                break;
            case 27:
                a.onEsc();
                break;
            case 8:
                a.onBackspace();
                b.preventDefault();
                break;
            case 32:
                a.onSpace();
                b.preventDefault();
                break;
            default:
                var c = RTSPL.layout.parser.getKeyId(RTSPL.util.keyCode(b));
                if (c != -1) {
                    a.onKey("k" + c);
                    a.drawKeyboard();
                    b.preventDefault();
                    a.cancelkeypress = true
                }
                break
        }
    });

    a.textbox.bind("keyup", function (b) {
        switch (RTSPL.util.keyCode(b)) {
            case 17:
                a.ctrl = true;
                a.onCtrl();
                break;
            case 18:
                a.alt = true;
                a.onAlt();
                break;
            case 16:
                a.shift = true;
                a.onShift();
                break;
            default:
        }
    })
};
    function GetInscriptTyping()
{
        $('body').append('<div id="keyboard"></div>');
        var AppendArray = [];
        $(document).find('.input').each(function () {
            AppendArray.push(this.id);
        });

        $.each(AppendArray, function (index, value) {
            var keyboard = null;
            keyboard = new RTSPL.keyboard("keyboard", value);
            keyboard.fontSize = 16;
            keyboard.loadVirtualLayout({
                "name": "Devanagari Inscript",
                "dir": "ltr",
                "keys": [{
                    "i": "k0",
                    "c": "0",
                    "n": "ॊ",
                    "s": "ऒ"
                }, {
                    "i": "k1",
                    "c": "0",
                    "n": "1",
                    "s": "ऍ",
                    "t": "१"
                }, {
                    "i": "k2",
                    "c": "0",
                    "n": "2",
                    "s": "ॅ",
                    "t": "२"
                }, {
                    "i": "k3",
                    "c": "0",
                    "n": "3",
                    "s": "र",
                    "t": "३"
                }, {
                    "i": "k4",
                    "c": "0",
                    "n": "4",
                    "s": "र्",
                    "t": "४"
                }, {
                    "i": "k5",
                    "c": "0",
                    "n": "5",  
                    "s": "ज्ञ",
                    "t": "५"
                }, {
                    "i": "k6",
                    "c": "0",
                    "n": "6",
                    "s": "त्र",
                    "t": "६"
                }, {
                    "i": "k7",
                    "c": "0",
                    "n": "7",
                    "s": "क्ष",
                    "t": "७"
                }, {
                    "i": "k8",
                    "c": "0",
                    "n": "8",
                    "s": "श्र",
                    "t": "८"
                }, {
                    "i": "k9",
                    "c": "0",
                    "n": "9",
                    "s": "(",
                    "t": "९"
                }, {
                    "i": "k10",
                    "c": "0",
                    "n": "0",
                    "s": ")",
                    "t": "०"
                }, {
                    "i": "k11",
                    "c": "0",
                    "n": "-",
                    "s": "ः"
                }, {
                    "i": "k12",
                    "c": "0",
                    "n": "ृ",
                    "s": "ऋ",
                    "t": "ॄ"
                }, {
                    "i": "k13",
                    "c": "0",
                    "n": "ौ",
                    "s": "औ"
                }, {
                    "i": "k14",
                    "c": "0",
                    "n": "ै",
                    "s": "ऐ"
                }, {
                    "i": "k15",
                    "c": "0",
                    "n": "ा",
                    "s": "आ"
                }, {
                    "i": "k16",
                    "c": "0",
                    "n": "ी",
                    "s": "ई",
                    "t": "ॣ"
                }, {
                    "i": "k17",
                    "c": "0",
                    "n": "ू",
                    "s": "ऊ"
                }, {
                    "i": "k18",
                    "c": "0",
                    "n": "ब",
                    "s": "भ"
                }, {
                    "i": "k19",
                    "c": "0",
                    "n": "ह",
                    "s": "ङ"
                }, {
                    "i": "k20",
                    "c": "0",
                    "n": "ग",
                    "s": "घ",
                    "t": "ग़"
                }, {
                    "i": "k21",
                    "c": "0",
                    "n": "द",
                    "s": "ध"
                }, {
                    "i": "k22",
                    "c": "0",
                    "n": "ज",
                    "s": "झ",
                    "t": "ज़"
                }, {
                    "i": "k23",
                    "c": "0",
                    "n": "ड",
                    "s": "ढ",
                    "t": "ड़"
                }, {
                    "i": "k24",
                    "c": "0",
                    "n": "़",
                    "s": "ञ"
                }, {
                    "i": "k25",
                    "c": "0",
                    "n": "ॉ",
                    "s": "ऑ"
                }, {
                    "i": "k26",
                    "c": "0",
                    "n": "ो",
                    "s": "ओ"
                }, {
                    "i": "k27",
                    "c": "0",
                    "n": "े",
                    "s": "ए"
                }, {
                    "i": "k28",
                    "c": "0",
                    "n": "्",
                    "s": "अ"
                }, {
                    "i": "k29",
                    "c": "0",
                    "n": "ि",
                    "s": "इ",
                    "t": "ॢ"
                }, {
                    "i": "k30",
                    "c": "0",
                    "n": "ु",
                    "s": "उ"
                }, {
                    "i": "k31",
                    "c": "0",
                    "n": "प",
                    "s": "फ"
                }, {
                    "i": "k32",
                    "c": "0",
                    "n": "र",
                    "s": "ऱ"
                }, {
                    "i": "k33",
                    "c": "0",
                    "n": "क",
                    "s": "ख",
                    "t": "क़"
                }, {
                    "i": "k34",
                    "c": "0",
                    "n": "त",
                    "s": "थ"
                }, {
                    "i": "k35",
                    "c": "0",
                    "n": "च",
                    "s": "छ",
                    "t": "॒"
                }, {
                    "i": "k36",
                    "c": "0",
                    "n": "ट",
                    "s": "ठ"
                }, {
                    "i": "k37",
                    "c": "0",
                    "n": "ॆ",
                    "s": "ऎ",
                    "t": "॓"
                }, {
                    "i": "k38",
                    "c": "0",
                    "n": "ं",
                    "s": "ँ"
                }, {
                    "i": "k39",
                    "c": "0",
                    "n": "म",
                    "s": "ण",
                    "t": "॔"
                }, {
                    "i": "k40",
                    "c": "0",
                    "n": "न",
                    "s": "ऩ"
                }, {
                    "i": "k41",
                    "c": "0",
                    "n": "व",
                    "s": "ऴ"
                }, {
                    "i": "k42",
                    "c": "0",
                    "n": "ल",
                    "s": "ळ"
                }, {
                    "i": "k43",
                    "c": "0",
                    "n": "स",
                    "s": "श"
                }, {
                    "i": "k44",
                    "c": "0",
                    "n": ",",
                    "s": "ष",
                    "t": "॰"
                }, {
                    "i": "k45",
                    "c": "0",
                    "n": ".",
                    "s": "।",
                    "t": "॥"
                }, {
                    "i": "k46",
                    "c": "0",
                    "n": "य",
                    "s": "य़"
                }, {
                    "i": "k47",
                    "c": "0",
                    "n": "ॉ",
                    "s": "ऑ"
                }],
                "deadkeys": []
            });
        });
    }

export default GetInscriptTyping;
  //  });



//Style Sheet

/*#RTSPL-keyboard {
            width: 630px;
            line-height: 20px;
            font-size: 1em;
        }

        .RTSPL-key, #RTSPL-backspace, #RTSPL-tab, #RTSPL-k25, #RTSPL-caps-lock, #RTSPL-enter, #RTSPL-left-shift, #RTSPL-right-shift, #RTSPL-space, #RTSPL-left-ctrl, #RTSPL-right-ctrl, #RTSPL-left-alt, #RTSPL-right-alt, #RTSPL, #RTSPL-escape {
            float: left;
            display: block;
            margin: 1px;
            height: 3em;
            line-height: 2.75em;
            text-align: center;
            color: gray;
        }

        .RTSPL-key {
            width: 40px;
        }

        #RTSPL-backspace {
            width: 78px;
        }

        #RTSPL-tab {
            width: 62px;
        }

        #RTSPL-k25 {
            width: 56px;
        }

        #RTSPL-caps-lock {
            width: 76px;
        }

        #RTSPL-enter {
            width: 84px;
        }

        #RTSPL-left-shift {
            width: 46px;
        }

        #RTSPL-right-shift {
            width: 114px;
        }

        #RTSPL-space {
            width: 246px;
            text-align: center;
        }

        #RTSPL-right-ctrl, #RTSPL-right-alt, #RTSPL-escape {
            width: 62px;
        }

        #RTSPL-left-ctrl, #RTSPL-left-alt, #RTSPL {
            width: 60px;
        }

        .RTSPL-label-reference {
            color: gray;
            font-size: .9em;
            line-height: 12px;
            text-align: left;
            cursor: default;
        }

        .RTSPL-label-natural {
            margin-top: -5px;
            color: #e0115f;
            line-height: 20px;
            text-align: center;
            cursor: default;
        }

        .RTSPL-label-shift {
            margin-top: -5px;
            color: #057cb5;
            line-height: 20px;
            text-align: center;
            cursor: default;
        }

        #RTSPL-k29 .RTSPL-label-reference, #RTSPL-k32 .RTSPL-label-reference {
            color: #000;
        }

        .RTSPL-recessed span {
            color: #3C0;
        }

        .RTSPL-recessed-hover span {
            color: #ffd800;
        }

        .RTSPL-clear {
            clear: both;
        }*/