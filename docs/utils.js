/**
 * spec exception.
 *
 * <p>Indices a runtime error while executing the generated code.</p>
 */
function specException(message = "") {
    this.name = "specException";
    this.message = message;
}
specException.prototype = Error.prototype;

/** spec utility code. */
class specUtils {

    static MIN_INT = -2147483648; // Java 'int' minimum value.
    static MAX_INT = 2147483647; // Java 'int' maximum value.

    /**
     * Returns the absolute value of an integer number.
     *
     * @param {number} x - The integer number.
     * @return {number} `abs(x)`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static absInt(x) {
        if (x == specUtils.MIN_INT) {
            throw new specException(specUtils.fmt("Integer overflow: abs(%d).", x));
        }
        return Math.abs(x);
    }

    /**
     * Returns the absolute value of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `abs(x)`.
     */
    static absReal(x) {
        return Math.abs(x);
    }

    /**
     * Returns the arc cosine of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `acos(x)`.
     * @throws {specException} If the operation results in real overflow, or `NaN`.
     */
    static acos(x) {
        var rslt = Math.acos(x);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: acos(%s).",
                specUtils.realToStr(x)));
        }
        if (Number.isNaN(rslt)) {
            throw new specException(specUtils.fmt("Invalid operation: acos(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the arc sine of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `asin(x)`.
     * @throws {specException} If the operation results in real overflow, or `NaN`.
     */
    static asin(x) {
        var rslt = Math.asin(x);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: asin(%s).",
                specUtils.realToStr(x)));
        }
        if (Number.isNaN(rslt)) {
            throw new specException(specUtils.fmt("Invalid operation: asin(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the arc tangent of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `atan(x)`.
     * @throws {specException} If the operation results in real overflow, or `NaN`.
     */
    static atan(x) {
        var rslt = Math.atan(x);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: atan(%s).",
                specUtils.realToStr(x)));
        }
        if (Number.isNaN(rslt)) {
            throw new specException(specUtils.fmt("Invalid operation: atan(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the addition of two integer numbers.
     *
     * @param {number} x - The first integer number.
     * @param {number} y - The second integer number.
     * @return {number} `x + y`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static addInt(x, y) {
        var rslt = x + y;
        if (specUtils.MIN_INT <= rslt && rslt <= specUtils.MAX_INT) {
            return (rslt == -0.0) ? 0.0 : rslt;
        }

        throw new specException(specUtils.fmt("Integer overflow: %d + %d.", x, y));
    }

    /**
     * Returns the addition of two real numbers.
     *
     * @param {number} x - The first real number.
     * @param {number} y - The second real number.
     * @return {number} `x + y`.
     * @throws {specException} If the operation results in real overflow.
     */
    static addReal(x, y) {
        var rslt = x + y;
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: %s + %s.",
                specUtils.realToStr(x), specUtils.realToStr(y)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the addition of two strings.
     *
     * @param {string} x - The first string.
     * @param {string} y - The second string.
     * @return {string} `x + y`.
     */
    static addString(x, y) {
        return x + y;
    }

    /**
     * Converts a JavaScript Boolean to a CIF boolean value literal, in the CIF ASCII representation.
     *
     * @param {boolean} x - The JavaScript Boolean value.
     * @return {string} The CIF boolean value literal, in the CIF ASCII representation.
     */
    static boolToStr(x) {
        return x ? "true" : "false";
    }

    /**
     * Returns the cube root of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `cbrt(x)`.
     */
    static cbrt(x) {
        var rslt = Math.cbrt(x);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the ceil of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `ceil(x)`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static ceil(x) {
        var rslt = Math.ceil(x);
        if (rslt < specUtils.MIN_INT || rslt > specUtils.MAX_INT) {
            throw new specException(specUtils.fmt("Integer overflow: ceil(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Checks a real value to ensure it is not `NaN` or infinite.
     *
     * @param {number} value - The real value to check.
     * @param {string} name - The name of the CIF variable that contains the value.
     */
    static checkReal(value, name) {
        if (Number.isFinite(value)) return;

        var msg;
        if (Number.isNaN(value)) {
            msg = "NaN";
        } else if (value == Number.POSITIVE_INFINITY) {
            msg = "+inf";
        } else {
            msg = "-inf";
        }
        throw new specException(specUtils.fmt("The value of variable \"%s\" has become \"%s\".", name, msg));
    }

    /**
     * Creates and returns a shallow copy of a list.
     *
     * @param {array} lst - The list to copy.
     * @return {array} The shallow copy of the list.
     */
    static copy(lst) {
        var rslt = [];
        for (var i = 0; i < lst.length; i++) {
            rslt.push(lst[i]);
        };
        return rslt;
    }

    /**
     * Returns the cosine of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `cos(x)`.
     * @throws {specException} If the operation results in real overflow, or `NaN`.
     */
    static cos(x) {
        var rslt = Math.cos(x);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: cos(%s).",
                specUtils.realToStr(x)));
        }
        if (Number.isNaN(rslt)) {
            throw new specException(specUtils.fmt("Invalid operation: cos(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the integer division of two integer numbers.
     *
     * @param {number} x - The dividend.
     * @param {number} y - The divisor.
     * @return {number} `x div y`.
     * @throws {specException} If the operation results in integer overflow, or division by zero.
     */
    static div(x, y) {
        if (y == 0) {
            throw new specException(specUtils.fmt("Division by zero: %d div %d.", x, y));
        }
        if (x == specUtils.MIN_INT && y == -1) {
            throw new specException(specUtils.fmt("Integer overflow: %d div %d.", x, y));
        }
        var rslt = Math.trunc(Math.trunc(x) / Math.trunc(y));
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the real division of two real numbers.
     *
     * @param {number} x - The first real number.
     * @param {number} y - The second real number.
     * @return {number} `x / y`.
     * @throws {specException} If the operation results in real overflow, or division by zero.
     */
    static divide(x, y) {
        if (y == 0.0) {
            throw new specException(specUtils.fmt("Division by zero: %s / %s.",
                specUtils.realToStr(x), specUtils.realToStr(y)));
        }
        var rslt = x / y;
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: %s * %s.",
                specUtils.realToStr(x), specUtils.realToStr(y)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns empty(x) for the given list.
     *
     * @param {array} x - The list.
     * @return {boolean} `empty(x)`.
     */
    static empty(x) {
        return x.length <= 0;
    }

    /**
     * Returns `true` if the arguments are equal to each other and `false` otherwise.
     * Can handle `null` values.
     *
     * @param {object} obj1 - The first object.
     * @param {object} obj2 - The second object.
     * @return {boolean} `true` if the arguments are equal to each other, `false` otherwise.
     */
    static equalObjs(obj1, obj2) {
        return obj1 === obj2;
    }

    /**
     * Returns a backslash escaped version of the string. That is:
     * <ul>
     * <li>backslash (`"\\"`) becomes `"\\\\"`</li>
     * <li>new line (`"\n"`) becomes `"\\n"`</li>
     * <li>tab (`"\t"`) becomes `"\\t"`</li>
     * <li>double quotes (`"\""`) becomes `"\\\""`</li>
     * </ul>
     *
     * @param {string} s - The string value to escape.
     * @return {string} The backslash escaped string value.
     */
    static escape(s) {
        return s.toString().replaceAll("\\", "\\\\")
            .replaceAll("\n", "\\n")
            .replaceAll("\t", "\\t")
            .replaceAll("\"", "\\\"");
    }

    /**
     * Returns an HTML-escaped version of the string.
     *
     * @param {string} s - The string value to escape.
     * @return {string} The escaped string value.
     */
    static escapeHtml(s) {
        return s.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&apos;");
    }

    /**
     * Returns `e`<sup>`x`</sup> of a real number `x`.
     *
     * @param {number} x - The real number.
     * @return {number} `exp(x)`.
     * @throws {specException} If the operation results in real overflow.
     */
    static exp(x) {
        var rslt = Math.exp(x);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: exp(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the floor of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `floor(x)`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static floor(x) {
        var rslt = Math.floor(x);
        if (rslt < specUtils.MIN_INT || rslt > specUtils.MAX_INT) {
            throw new specException(specUtils.fmt("Integer overflow: floor(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns a formatted string using the specified format string and arguments.
     *
     * <p>No localization is applied, which defaults to the US locale.</p>
     *
     * @param {string} format - A format/pattern string.
     * @param {array} args - The arguments referenced by the format specifiers in the format string.
     * @return {string} A formatted string.
     */
    static fmt(str) {
        // TODO: CIF supports more than what is handled here. Full support is to be added in the future.
        var i = 1;
        var hexRegex = /%[Xx]/;
        var realRegex = /%[GgEe]/;
        var floatRegex = /%(\.(\d+))?f/;
        var percentRegex = /%%/;
        return str.replace(/%[Bb]|%[Xx]|%[GgEe]|%[Ss]|%d|%(\.(\d+))?f|%%/g, (matched) => {
            if (hexRegex.test(matched)) {
                return arguments[i++].toString(16);
            } else if (realRegex.test(matched)) {
                return arguments[i++].toExponential();
            } else if (floatRegex.test(matched)) {
                // JavaScript uses 'toFixed' to format floats.
                var digits = matched.match(floatRegex)[2];
                if (digits) {
                    return arguments[i++].toFixed(digits);
                } else {
                    return arguments[i++];
                }
            } else if (percentRegex.test(matched)) {
                return '%';
            }
            return arguments[i++].toString();
        });
    }

    /**
     * Converts a JavaScript Number representing an integer value to a JavaScript Number representing a real value.
     *
     * @param {number} x - The JavaScript Number value representing an integer value.
     * @return {number} The JavaScript Number value representing a real value.
     */
    static intToReal(x) {
        return x;
    }

    /**
     * Converts a JavaScript Number to a CIF integer value literal, in the CIF ASCII representation.
     *
     * @param {number} x - The JavaScript Number value.
     * @return {string} The CIF integer value literal, in the CIF ASCII representation.
     */
    static intToStr(x) {
        return (x == -0.0) ? "0" : x.toString();
    }

    /**
     * Returns the natural logarithm of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `ln(x)`.
     * @throws {specException} If the real number is non-positive.
     */
    static ln(x) {
        if (x <= 0.0) {
            throw new specException(specUtils.fmt("Invalid operation: ln(%s).",
                specUtils.realToStr(x)));
        }
        var rslt = Math.log(x);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the logarithm (base 10) of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `log(x)`.
     * @throws {specException} If the real number is non-positive.
     */
    static log(x) {
        if (x <= 0.0) {
            throw new specException(specUtils.fmt("Invalid operation: log(%s).",
                specUtils.realToStr(x)));
        }
        var rslt = Math.log10(x);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the maximum of two integer numbers.
     *
     * @param {number} x - The first integer number.
     * @param {number} y - The second integer number.
     * @return {number} `max(x, y)`.
     */
    static maxInt(x, y) {
        var rslt = Math.max(x, y);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the maximum of two real numbers.
     *
     * @param {number} x - The first real number.
     * @param {number} y - The second real number.
     * @return {number} `max(x, y)`.
     */
    static maxReal(x, y) {
        var rslt = Math.max(x, y);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the minimum of two integer numbers.
     *
     * @param {number} x - The first integer number.
     * @param {number} y - The second integer number.
     * @return {number} `min(x, y)`.
     */
    static minInt(x, y) {
        var rslt = Math.min(x, y);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the minimum of two real numbers.
     *
     * @param {number} x - The first real number.
     * @param {number} y - The second real number.
     * @return {number} `min(x, y)`.
     */
    static minReal(x, y) {
        var rslt = Math.min(x, y);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the modulus of two integer numbers.
     *
     * @param {number} x - The dividend.
     * @param {number} y - The divisor.
     * @return {number} `x mod y`.
     * @throws {specException} If the operation results in division by zero.
     */
    static mod(x, y) {
        if (y == 0) {
            throw new specException(specUtils.fmt("Division by zero: %d mod %d.", x, y));
        }
        var rslt = x % y;
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Creates a shallow copy of the given list, and replaces the element at the given index with a new value.
     *
     * @param {array} lst - The list.
     * @param {number} origIdx - The 0-based index into the list of the element to replace.
     * Negative indices are allowed, and count from the right.
     * @param {object} newValue - The new value.
     * @return {array} The modified list.
     * @throws {specException} If the index is out of range for the list.
     */
    static modify(lst, origIdx, newValue) {
        // Normalize index and check for out of bounds.
        var idx = origIdx;
        if (idx < 0) idx = lst.length + idx;
        if (idx < 0 || idx >= lst.length) {
            throw new specException(specUtils.fmt("Index out of bounds: %s[%s].",
                specUtils.valueToStr(lst), origIdx));
        }

        // Create a shallow copy, replace the element, and return the list.
        var rslt = specUtils.copy(lst);
        rslt[idx] = newValue;
        return rslt;
    }

    /**
     * Returns the multiplication of two integer numbers.
     *
     * @param {number} x - The first integer number.
     * @param {number} y - The second integer number.
     * @return {number} `x * y`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static multiplyInt(x, y) {
        var rslt = x * y;
        if (specUtils.MIN_INT <= rslt && rslt <= specUtils.MAX_INT) {
            return (rslt == -0.0) ? 0.0 : rslt;
        }

        throw new specException(specUtils.fmt("Integer overflow: %d * %d.", x, y));
    }

    /**
     * Returns the multiplication of two real numbers.
     *
     * @param {number} x - The first real number.
     * @param {number} y - The second real number.
     * @return {number} `x * y`.
     * @throws {specException} If the operation results in real overflow.
     */
    static multiplyReal(x, y) {
        var rslt = x * y;
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: %s * %s.",
                specUtils.realToStr(x), specUtils.realToStr(y)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the negation of an integer number.
     *
     * @param {number} x - The integer number.
     * @return {number} `-value`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static negateInt(x) {
        if (x == specUtils.MIN_INT) {
            throw new specException(specUtils.fmt("Integer overflow: -%d.", x));
        }
        return (x == 0.0) ? 0.0 : -x;
    }

    /**
     * Returns the negation of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `-value`.
     */
    static negateReal(x) {
        return (x == 0.0) ? 0.0 : -x;
    }

    /**
     * Normalizes a print target path. File separators '\\' are replaced by '/'.
     *
     * @param {string} path - The print target path. Should not be special target
     *      ':stdout' or ':stderr'.
     * @return {string} The normalized print target path.
     */
    static normalizePrintTarget(path) {
        return path.replaceAll('\\', '/');
    }

    /**
     * Returns the exponentiation (power) of two integer numbers.
     *
     * @param {number} x - The base integer number.
     * @param {number} y - The exponent integer number, `y >= 0`.
     * @return {number} `pow(x, y)`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static powInt(x, y) {
        if (y < 0) throw new Error("y < 0");
        var rslt = Math.pow(x, y);
        if (specUtils.MIN_INT <= rslt && rslt <= specUtils.MAX_INT) {
            return (rslt == -0.0) ? 0.0 : rslt;
        }
        throw new specException(specUtils.fmt("Integer overflow: pow(%d, %d).", x, y));
    }

    /**
     * Returns the exponentiation (power) of two real numbers.
     *
     * @param {number} x - The base real number.
     * @param {number} y - The exponent real number.
     * @return {number} `pow(x, y)`.
     * @throws {specException} If the operation results in real overflow, or `NaN`.
     */
    static powReal(x, y) {
        // Assumes that the arguments are valid numbers (no inf/NaN/-0.0).
        var rslt = Math.pow(x, y);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: pow(%s, %s).",
                specUtils.realToStr(x), specUtils.realToStr(y)));
        }
        if (Number.isNaN(rslt)) {
            throw new specException(specUtils.fmt("Invalid operation: pow(%s, %s).",
                specUtils.realToStr(x), specUtils.realToStr(y)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Converts a JavaScript Number to a CIF real value literal, in the CIF ASCII representation.
     *
     * <p>Note that the number values may be negative, and the
     * resulting textual representation may thus have a `"-"` prefix,
     * unlike real value literals in the CIF ASCII representation, where the
     * `"-"` character is a unary operator.</p>
     *
     * @param {number} x - The JavaScript Number value.
     * @return {string} The CIF real value literal, in the CIF ASCII representation.
     */
    static realToStr(x) {
        if (!Number.isFinite(x)) throw new Error(x.toString());
        // TODO: Format this to CIF syntax: (0|[1-9][0-9]*)(.[0-9]+|(.[0-9]+)?[eE][-+]?[0-9]+)
        return (x == -0.0) ? "0.0" : x.toString().replace('E', 'e');
    }

    /**
     * Projects a list, using a zero-based index.
     *
     * @param {array} lst - The list.
     * @param {number} origIdx - The 0-based index into the list of the element to return.
     * Negative indices are allowed, and count from the right.
     * @return {object} `lst[origIdx]`.
     * @throws {specException} If the index is out of range for the list.
     */
    static projectList(lst, origIdx) {
        // Normalize index and check for out of bounds.
        var idx = origIdx;
        if (idx < 0) idx = lst.length + idx;
        if (idx < 0 || idx >= lst.length) {
            throw new specException(specUtils.fmt("Index out of bounds: %s[%s].",
                specUtils.valueToStr(lst), origIdx));
        }

        // Return the element.
        return lst[idx];
    }

    /**
     * Projects a string, using a zero-based index.
     *
     * @param {string} str - The string.
     * @param {number} origIdx - The 0-based index into the string of the character to return.
     * Negative indices are allowed, and count from the right.
     * @return {string} `str[origIdx]`.
     * @throws {specException} If the index is out of range for the string.
     */
    static projectString(str, origIdx) {
        var idx = origIdx;
        if (idx < 0) idx = str.length + idx;
        if (idx < 0 || idx >= str.length) {
            throw new specException(specUtils.fmt("Index out of bounds: \"%s\"[%s].",
                specUtils.escape(str), origIdx));
        }

        return str.toString().substring(idx, idx + 1);
    }

    /**
     * Invoked in case of an integer range out of bounds error.
     *
     * @param {string} name - The name of the variable that contains the integer value, as end-user readable text.
     * @param {string} value - The value of the variable that contains the integer value, as end-user readable text.
     * @param {string} type - The type of the variable that contains the integer value, as end-user readable text.
     * @throws {specException} Always thrown.
     */
    static rangeErrInt(name, value, type) {
        throw new specException(specUtils.fmt("Variable \"%s\" is assigned value \"%s\", which " +
            "violates the integer type bounds of the type \"%s\" of that variable.", name, value, type));
    }

    /**
     * Returns the round of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `round(x)`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static round(x) {
        if (x < specUtils.MIN_INT - 0.5 || x >= specUtils.MAX_INT + 0.5) {
            throw new specException(specUtils.fmt("Integer overflow: round(%s).",
                specUtils.realToStr(x)));
        }
        var rslt = Math.round(x);
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns a linearly scaled value.
     *
     * @param {number} v - The value to scale.
     * @param {number} inmin - The minimum of the input interval.
     * @param {number} inmax - The maximum of the input interval.
     * @param {number} outmin - The minimum of the output interval.
     * @param {number} outmax - The maximum of the output interval.
     * @return {number} `scale(v, inmin, inmax, outmin, outmax)`.
     * @throws {specException} If the input interval is empty, or the operation results in real overflow.
     */
    static scale(v, inmin, inmax, outmin, outmax) {
        // fraction = (v - inmin) / (inmax - inmin);
        // result = outmin + fraction * (outmax - outmin);
        var inrange = specUtils.subtractReal(inmax, inmin);
        if (inrange == 0) {
            throw new specException(specUtils.fmt("Empty input interval: scale(%s, %s, %s, %s, " +
                "%s).", specUtils.realToStr(v),
                specUtils.realToStr(inmin), specUtils.realToStr(inmax),
                specUtils.realToStr(outmin), specUtils.realToStr(outmax)));
        }
        var fraction = specUtils.divide(specUtils.subtractReal(v, inmin), inrange);
        return specUtils.addReal(outmin, specUtils.multiplyReal(fraction,
            specUtils.subtractReal(outmax, outmin)));
    }

    /**
     * Returns the sign of an integer number.
     *
     * @param {number} x - The integer number.
     * @return {number} `sign(x)`.
     */
    static signInt(x) {
        return (x == 0) ? 0 : (x < 0) ? -1 : 1;
    }

    /**
     * Returns the sign of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `sign(x)`.
     */
    static signReal(x) {
        return (x == 0.0) ? 0 : (x < 0.0) ? -1 : 1;
    }

    /**
     * Returns the sine of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `sin(x)`.
     * @throws {specException} If the operation results in real overflow, or `NaN`.
     */
    static sin(x) {
        var rslt = Math.sin(x);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: sin(%s).",
                specUtils.realToStr(x)));
        }
        if (Number.isNaN(rslt)) {
            throw new specException(specUtils.fmt("Invalid operation: sin(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns `size(x)` for the given string.
     *
     * @param {string} x - The string.
     * @return {number} `size(x)`.
     */
    static sizeString(x) {
        return x.length;
    }

    /**
     * Returns `size(x)` for the given list.
     *
     * @param {array} x - The list.
     * @return {number} `size(x)`.
     */
    static sizeList(x) {
        return x.length;
    }

    /**
     * Returns the square root of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `sqrt(x)`.
     * @throws {specException} If the real number is negative.
     */
    static sqrt(x) {
        // Assumes that the argument is never -0.0.
        if (x < 0.0) {
            throw new specException(specUtils.fmt("Invalid operation: sqrt(%s).",
                specUtils.realToStr(x)));
        }
        return Math.sqrt(x);
    }

    /**
     * Converts a CIF boolean value literal, in the CIF ASCII representation, to a JavaScript Boolean.
     *
     * @param {string} x - The CIF boolean value literal, in the CIF ASCII representation.
     * @return {boolean} The JavaScript Boolean value.
     * @throws {specException} If the string value does not represent a boolean value.
     */
    static strToBool(x) {
        if (x == "true") return true;
        if (x == "false") return false;

        throw new specException(specUtils.fmt("Cast from type \"string\" to type \"bool\" " +
            "failed: the string value does not represent a boolean value: \"%s\".",
            specUtils.escape(x)));
    }

    /**
     * Converts a CIF integer value literal, in the CIF ASCII representation, to a JavaScript Number.
     *
     * <p>See also the `CifTypeChecker.transIntExpression` method.</p>
     *
     * @param {string} x - The CIF integer value literal, in the CIF ASCII representation.
     * @return {number} The JavaScript Number value.
     * @throws {specException} If the string value does not represent an integer value.
     */
    static strToInt(x) {
        var rslt = Number.parseInt(x, 10);
        if (Number.isNaN(rslt) || rslt < specUtils.MIN_INT || rslt > specUtils.MAX_INT
            || x.trim().length != x.length)
        {
            throw new specException(specUtils.fmt("Cast from type \"string\" to type \"int\" " +
                "failed: the string value does not represent an integer value, or the integer value " +
                "resulted in integer overflow: \"%s\".", specUtils.escape(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Converts a CIF real value literal, in the CIF ASCII representation, to a JavaScript Number.
     *
     * <p>See also the `CifTypeChecker.transRealExpression` method.</p>
     *
     * @param {string} x - The CIF real value literal, in the CIF ASCII representation.
     * @return {number} The JavaScript Number value.
     * @throws {specException} If the string value does not represent a real value.
     */
    static strToReal(x) {
        var rslt = Number.parseFloat(x, 10);
        if (Number.isNaN(rslt) || x.trim().length != x.length) {
            throw new specException(specUtils.fmt("Cast from type \"string\" to type \"real\" " +
                "failed: the string value does not represent a real value: \"%s\".",
                specUtils.escape(x)));
        }

        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Cast from type \"string\" to type \"real\" " +
                "failed, due to real overflow: \"%s\".", specUtils.escape(x)));
        }

        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the subtraction of two integer numbers.
     *
     * @param {number} x - The first integer number.
     * @param {number} y - The second integer number.
     * @return {number} `x - y`.
     * @throws {specException} If the operation results in integer overflow.
     */
    static subtractInt(x, y) {
        var rslt = x - y;
        if (specUtils.MIN_INT <= rslt && rslt <= specUtils.MAX_INT) {
            return (rslt == -0.0) ? 0.0 : rslt;
        }

        throw new specException(specUtils.fmt("Integer overflow: %d - %d.", x, y));
    }

    /**
     * Returns the subtraction of two real numbers.
     *
     * @param {number} x - The first real number.
     * @param {number} y - The second real number.
     * @return {number} `x - y`.
     * @throws {specException} If the operation results in real overflow.
     */
    static subtractReal(x, y) {
        var rslt = x - y;
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: %s - %s.",
                specUtils.realToStr(x), specUtils.realToStr(y)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Returns the tangent of a real number.
     *
     * @param {number} x - The real number.
     * @return {number} `tan(x)`.
     * @throws {specException} If the operation results in real overflow, or `NaN`.
     */
    static tan(x) {
        var rslt = Math.tan(x);
        if (!Number.isFinite(rslt)) {
            throw new specException(specUtils.fmt("Real overflow: tan(%s).",
                specUtils.realToStr(x)));
        }
        if (Number.isNaN(rslt)) {
            throw new specException(specUtils.fmt("Invalid operation: tan(%s).",
                specUtils.realToStr(x)));
        }
        return (rslt == -0.0) ? 0.0 : rslt;
    }

    /**
     * Converts the given value into a textual representation, closely resembling the CIF ASCII syntax.
     *
     * @param {object} value - The value.
     * @return {string} The textual representation.
     */
    static valueToStr(value) {
        if (typeof(value) == "boolean") {
            return value ? "true" : "false";
        } else if (typeof(value) == "number") {
            return (value.toString()).replace('E', 'e');
        } else if (typeof(value) == "string") {
            return "\"" + specUtils.escape(value) + "\"";
        } else if (Array.isArray(value)) {
            var txt = "[";
            for (var i = 0; i < value.length; i++) {
                if (i > 0) txt += ", ";
                txt += specUtils.valueToStr(value[i]);
            }
            txt += "]";
            return txt;
        } else if (typeof(value) == "object") {
            return value.toString();
        } else if (typeof(value) == "symbol") {
            return value.description;
        } else {
            throw new Error("Unsupported value: " + value);
        }
    }
}
