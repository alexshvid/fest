;(function(){var x=Function('return this')();if(!x.fest)x.fest={};x.fest['attribute_expression']=function(__fest_context) {
    "use strict";
    var __fest_self = this,
        __fest_buf = "",
        __fest_chunks = [],
        __fest_chunk, __fest_attrs = [],
        __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_html = "",
        __fest_blocks = {},
        __fest_params, __fest_element, __fest_debug_file = "",
        __fest_debug_line = "",
        __fest_debug_block = "",
        __fest_htmlchars = /[&<>"]/g,
        __fest_short_tags = {
            "area": true,
            "base": true,
            "br": true,
            "col": true,
            "command": true,
            "embed": true,
            "hr": true,
            "img": true,
            "input": true,
            "keygen": true,
            "link": true,
            "meta": true,
            "param": true,
            "source": true,
            "wbr": true
        },
        __fest_element_stack = [],
        __fest_htmlhash = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;"
        },
        __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g,
        __fest_jshash = {
            "\"": "\\\"",
            "\\": "\\\\",
            "/": "\\/",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\b": "\\b",
            "\f": "\\f",
            "'": "\\'",
            "<": "\\u003C",
            ">": "\\u003E"
        },
        ___fest_log_error;
    if (typeof __fest_error === "undefined") {
        ___fest_log_error = (typeof console !== "undefined" && console.error) ?
        function() {
            return Function.prototype.apply.call(console.error, console, arguments)
        } : function() {};
    } else {
        ___fest_log_error = __fest_error
    };

    function __fest_log_error(msg) {
        ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file)
    }
    function __fest_replaceHTML(chr) {
        return __fest_htmlhash[chr]
    }
    function __fest_replaceJS(chr) {
        return __fest_jshash[chr]
    }
    function __fest_extend(dest, src) {
        for (var i in src) if (src.hasOwnProperty(i)) dest[i] = src[i];
    }
    function __fest_param(fn) {
        fn.param = true;
        return fn
    }
    function __fest_call(fn, params, cp) {
        if (cp) for (var i in params) if (typeof params[i] == "function" && params[i].param) params[i] = params[i]();
        return fn.call(__fest_self, params)
    }
    function __fest_escapeJS(s) {
        if (typeof s === "string") {
            if (__fest_jschars.test(s)) return s.replace(__fest_jschars, __fest_replaceJS);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    function __fest_escapeHTML(s) {
        if (typeof s === "string") {
            if (__fest_htmlchars.test(s)) return s.replace(__fest_htmlchars, __fest_replaceHTML);
        } else if (typeof s === "undefined") return "";
        return s;
    }
    var json = __fest_context;
    try {
        var block = 'b-block';
        var element = '__element';
        var modifier = '_modifier';
    } catch (e) {
        __fest_log_error(e.message);
    }
    __fest_blocks.modify = function(params) {
        var __fest_buf = "";
        try {
            __fest_buf += (__fest_escapeHTML(params.block))
        } catch (e) {
            __fest_log_error(e.message + "9");
        }
        try {
            __fest_buf += (__fest_escapeHTML(params.element))
        } catch (e) {
            __fest_log_error(e.message + "10");
        }
        try {
            __fest_buf += (__fest_escapeHTML(modifier))
        } catch (e) {
            __fest_log_error(e.message + "11");
        }
        return __fest_buf;
    };
    try {
        __fest_attrs[0] = __fest_escapeHTML(block)
    } catch (e) {
        __fest_attrs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[1] = __fest_escapeHTML('&')
    } catch (e) {
        __fest_attrs[1] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[2] = __fest_escapeHTML('<')
    } catch (e) {
        __fest_attrs[2] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[3] = __fest_escapeHTML('>')
    } catch (e) {
        __fest_attrs[3] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[4] = __fest_escapeHTML('\'')
    } catch (e) {
        __fest_attrs[4] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[5] = __fest_escapeHTML('\"')
    } catch (e) {
        __fest_attrs[5] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[6] = __fest_escapeHTML('{')
    } catch (e) {
        __fest_attrs[6] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[7] = __fest_escapeHTML('}')
    } catch (e) {
        __fest_attrs[7] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[8] = __fest_escapeHTML('{}')
    } catch (e) {
        __fest_attrs[8] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[9] = __fest_escapeHTML('{{}{}}')
    } catch (e) {
        __fest_attrs[9] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("<div class=\"" + __fest_attrs[0] + "\" data-amp=\"" + __fest_attrs[1] + "\" data-lt=\"" + __fest_attrs[2] + "\" data-gt=\"" + __fest_attrs[3] + "\" data-apos=\"" + __fest_attrs[4] + "\" data-quot=\"" + __fest_attrs[5] + "\" data-elcb=\"" + __fest_attrs[6] + "\" data-ercb=\"" + __fest_attrs[7] + "\" data-lcb=\"{\" data-rcb=\"}\" data-ecb=\"" + __fest_attrs[8] + "\" data-dcb=\"{}\" data-crazy=\"" + __fest_attrs[9] + "\" data-crazy-again=\"{{}{}}\" data-crazy-too=\"{}{}\">");
    try {
        __fest_attrs[0] = __fest_escapeHTML(block)
    } catch (e) {
        __fest_attrs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[1] = __fest_escapeHTML(modifier)
    } catch (e) {
        __fest_attrs[1] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[2] = __fest_escapeHTML( !! (block && modifier))
    } catch (e) {
        __fest_attrs[2] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("<div class=\"" + __fest_attrs[0] + "" + __fest_attrs[1] + "\" data-has-modifier=\"" + __fest_attrs[2] + "\"></div>");
    try {
        __fest_attrs[0] = __fest_escapeHTML(block + element)
    } catch (e) {
        __fest_attrs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[1] = __fest_escapeHTML({
            'key': 'value'
        }['key'])
    } catch (e) {
        __fest_attrs[1] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("<div class=\"" + __fest_attrs[0] + "\" data-obj-value=\"" + __fest_attrs[1] + "\" data-obj-json=\"{ \"key\": \"value\" }\">");
    try {
        __fest_attrs[0] = __fest_escapeHTML('name')
    } catch (e) {
        __fest_attrs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[1] = __fest_escapeHTML('{<"\'&>}')
    } catch (e) {
        __fest_attrs[1] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("<span class=\"" + __fest_attrs[0] + "\" data-spec-chars=\"{\u003C\"\'&\u003E}\" data-espec-chars=\"" + __fest_attrs[1] + "\">");
    __fest_select = "modify";
    __fest_params = {};
    try {
        __fest_params = {
            "block": block,
            "element": element
        }
    } catch (e) {
        __fest_log_error(e.message)
    }
    __fest_chunks.push(__fest_buf, {
        name: __fest_select,
        params: __fest_params,
        cp: false
    });
    __fest_buf = "";
    __fest_buf += ("</span></div></div>");
    var item, value, __fest_to0, __fest_iterator0;
    try {
        __fest_iterator0 = [1, 2, 3, 4, 5].filter(function(item) {
            return item !== 3
        }) || [];
        __fest_to0 = __fest_iterator0.length;
    } catch (e) {
        __fest_iterator0 = [];
        __fest_to0 = 0;
        __fest_log_error(e.message);
    }
    for (item = 0; item < __fest_to0; item++) {
        value = __fest_iterator0[item];
        try {
            __fest_buf += (__fest_escapeHTML(value))
        } catch (e) {
            __fest_log_error(e.message + "23");
        }
    }
    try {
        var a = 'A';
        var b = 'B';
    } catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[0] = __fest_escapeHTML(a)
    } catch (e) {
        __fest_attrs[0] = "";
        __fest_log_error(e.message);
    }
    try {
        __fest_attrs[1] = __fest_escapeHTML(b)
    } catch (e) {
        __fest_attrs[1] = "";
        __fest_log_error(e.message);
    }
    __fest_buf += ("<div data-lf=\"a\n\rb\" data-backslash=\"\\\" data-apos=\"\'\" data-quot=\"\"\" data-block=\"" + __fest_attrs[0] + "\" data-block-with-text=\"a" + __fest_attrs[1] + "{c}\"></div>");
    __fest_to = __fest_chunks.length;
    if (__fest_to) {
        __fest_iterator = 0;
        for (; __fest_iterator < __fest_to; __fest_iterator++) {
            __fest_chunk = __fest_chunks[__fest_iterator];
            if (typeof __fest_chunk === "string") {
                __fest_html += __fest_chunk;
            } else {
                __fest_fn = __fest_blocks[__fest_chunk.name];
                if (__fest_fn) __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
            }
        }
        return __fest_html + __fest_buf;
    } else {
        return __fest_buf;
    }
}})();