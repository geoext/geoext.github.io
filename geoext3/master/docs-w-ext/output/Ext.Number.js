Ext.data.JsonP.Ext_Number({"tagname":"class","name":"Ext.Number","autodetected":{},"files":[{"filename":"Number.js","href":"Number.html#Ext-Number"}],"singleton":true,"members":[{"name":"clipIndices","tagname":"method","owner":"Ext.Number","id":"method-clipIndices","meta":{}},{"name":"constrain","tagname":"method","owner":"Ext.Number","id":"method-constrain","meta":{}},{"name":"correctFloat","tagname":"method","owner":"Ext.Number","id":"method-correctFloat","meta":{}},{"name":"from","tagname":"method","owner":"Ext.Number","id":"method-from","meta":{}},{"name":"isEqual","tagname":"method","owner":"Ext.Number","id":"method-isEqual","meta":{}},{"name":"isFinite","tagname":"method","owner":"Ext.Number","id":"method-isFinite","meta":{}},{"name":"log10","tagname":"method","owner":"Ext.Number","id":"method-log10","meta":{}},{"name":"randomInt","tagname":"method","owner":"Ext.Number","id":"method-randomInt","meta":{}},{"name":"roundToNearest","tagname":"method","owner":"Ext.Number","id":"method-roundToNearest","meta":{}},{"name":"sign","tagname":"method","owner":"Ext.Number","id":"method-sign","meta":{}},{"name":"snap","tagname":"method","owner":"Ext.Number","id":"method-snap","meta":{}},{"name":"snapInRange","tagname":"method","owner":"Ext.Number","id":"method-snapInRange","meta":{}},{"name":"toFixed","tagname":"method","owner":"Ext.Number","id":"method-toFixed","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Ext.Number","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Number.html#Ext-Number' target='_blank'>Number.js</a></div></pre><div class='doc-contents'><p>A collection of useful static methods to deal with numbers</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clipIndices' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-clipIndices' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-clipIndices' class='name expandable'>clipIndices</a>( <span class='pre'>length, indices, [options]</span> ) : Number[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Coerces a given index into a valid index given a length. ...</div><div class='long'><p>Coerces a given index into a valid index given a <code>length</code>.</p>\n\n<p>Negative indexes are interpreted starting at the end of the collection. That is,\na value of -1 indicates the last item, or equivalent to <code>length - 1</code>.</p>\n\n<p>When handling methods that take \"begin\" and \"end\" arguments like most array or\nstring methods, this method can be used like so:</p>\n\n<pre><code> function foo (array, begin, end) {\n     var range = <a href=\"#!/api/Ext.Number-method-clipIndices\" rel=\"Ext.Number-method-clipIndices\" class=\"docClass\">Ext.Number.clipIndices</a>(array.length, [begin, end]);\n\n     begin = range[0];\n     end   = range[1];\n\n     // 0 &lt;= begin &lt;= end &lt;= array.length\n\n     var length = end - begin;\n }\n</code></pre>\n\n<p>For example:</p>\n\n<pre><code> +---+---+---+---+---+---+---+---+\n |   |   |   |   |   |   |   |   |  length = 8\n +---+---+---+---+---+---+---+---+\n   0   1   2   3   4   5   6   7\n  -8  -7  -6  -5  -4  -3  -2  -1\n\n console.log(<a href=\"#!/api/Ext.Number-method-clipIndices\" rel=\"Ext.Number-method-clipIndices\" class=\"docClass\">Ext.Number.clipIndices</a>(8, [3, 10]); // logs \"[3, 8]\"\n console.log(<a href=\"#!/api/Ext.Number-method-clipIndices\" rel=\"Ext.Number-method-clipIndices\" class=\"docClass\">Ext.Number.clipIndices</a>(8, [-5]);    // logs \"[3, 8]\"\n console.log(<a href=\"#!/api/Ext.Number-method-clipIndices\" rel=\"Ext.Number-method-clipIndices\" class=\"docClass\">Ext.Number.clipIndices</a>(8, []);\n console.log(<a href=\"#!/api/Ext.Number-method-clipIndices\" rel=\"Ext.Number-method-clipIndices\" class=\"docClass\">Ext.Number.clipIndices</a>(8, []);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>length</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>indices</span> : Number[]<div class='sub-desc'>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object with different option flags.</p>\n<ul><li><span class='pre'>count</span> : Boolean (optional)<div class='sub-desc'><p>The second number in <code>indices</code> is the\ncount not and an index.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>inclusive</span> : Boolean (optional)<div class='sub-desc'><p>The second number in <code>indices</code> is\n\"inclusive\" meaning that the item should be considered in the range. Normally,\nthe second number is considered the first item outside the range or as an\n\"exclusive\" bound.</p>\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>wrap</span> : Boolean (optional)<div class='sub-desc'><p>Wraps negative numbers backwards from the\nend of the array. Passing <code>false</code> simply clips negative index values at 0.</p>\n<p>Defaults to: <code>true</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number[]</span><div class='sub-desc'><p>The normalized <code>[begin, end]</code> array where <code>end</code> is now\nexclusive such that <code>length = end - begin</code>. Both values are between 0 and the\ngiven <code>length</code> and <code>end</code> will not be less-than <code>begin</code>.</p>\n</div></li></ul></div></div></div><div id='method-constrain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-constrain' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-constrain' class='name expandable'>constrain</a>( <span class='pre'>number, min, max</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Checks whether or not the passed number is within a desired range. ...</div><div class='long'><p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : Number<div class='sub-desc'><p>The number to check</p>\n</div></li><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>The minimum number in the range</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>The maximum number in the range</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The constrained value if outside the range, otherwise the current value</p>\n</div></li></ul></div></div></div><div id='method-correctFloat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-correctFloat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-correctFloat' class='name expandable'>correctFloat</a>( <span class='pre'>n</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Corrects floating point numbers that overflow to a non-precise\nvalue because of their floating nature, for example 0....</div><div class='long'><p>Corrects floating point numbers that overflow to a non-precise\nvalue because of their floating nature, for example <code>0.1 + 0.2</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>The number</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The correctly rounded number</p>\n</div></li></ul></div></div></div><div id='method-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-from' class='name expandable'>from</a>( <span class='pre'>value, defaultValue</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Validate that a value is numeric and convert it to a number if necessary. ...</div><div class='long'><p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<pre><code><a href=\"#!/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a>('1.23', 1); // returns 1.23\n<a href=\"#!/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a>('abc', 1); // returns 1\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>defaultValue</span> : Number<div class='sub-desc'><p>The value to return if the original value is non-numeric</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>value, if numeric, defaultValue otherwise</p>\n\n</div></li></ul></div></div></div><div id='method-isEqual' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-isEqual' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-isEqual' class='name expandable'>isEqual</a>( <span class='pre'>n1, n2, epsilon</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if two numbers n1 and n2 are equal within a given\nmargin of precision epsilon. ...</div><div class='long'><p>Determines if two numbers <code>n1</code> and <code>n2</code> are equal within a given\nmargin of precision <code>epsilon</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n1</span> : Number<div class='sub-desc'><p>First number.</p>\n</div></li><li><span class='pre'>n2</span> : Number<div class='sub-desc'><p>Second number.</p>\n</div></li><li><span class='pre'>epsilon</span> : Number<div class='sub-desc'><p>Margin of precision.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code>, if numbers are equal. <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-isFinite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-isFinite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-isFinite' class='name expandable'>isFinite</a>( <span class='pre'>value</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines if the value passed is a number and also finite. ...</div><div class='long'><p>Determines if the value passed is a number and also finite.\nThis a Polyfill version of Number.isFinite(),differently than\nthe isFinite() function, this method doesn't convert the parameter to a number.</p>\n        <p>Available since: <b>6.2</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>Number to be tested.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code>, if the parameter is a number and finite, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-log10' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-log10' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-log10' class='name expandable'>log10</a>( <span class='pre'>x</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the base 10 logarithm of a number. ...</div><div class='long'><p>Returns the base 10 logarithm of a number.\nThis will use Math.log10, if available (ES6).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The number.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Base 10 logarithm of the number 'x'.</p>\n</div></li></ul></div></div></div><div id='method-randomInt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-randomInt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-randomInt' class='name expandable'>randomInt</a>( <span class='pre'>from, to</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a random integer between the specified range (inclusive) ...</div><div class='long'><p>Returns a random integer between the specified range (inclusive)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : Number<div class='sub-desc'><p>Lowest value to return.</p>\n</div></li><li><span class='pre'>to</span> : Number<div class='sub-desc'><p>Highest value to return.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>A random integer within the specified range.</p>\n</div></li></ul></div></div></div><div id='method-roundToNearest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-roundToNearest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-roundToNearest' class='name expandable'>roundToNearest</a>( <span class='pre'>value, interval</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Round a number to the nearest interval. ...</div><div class='long'><p>Round a number to the nearest interval.</p>\n        <p>Available since: <b>6.2.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The value to round.</p>\n</div></li><li><span class='pre'>interval</span> : Number<div class='sub-desc'><p>The interval to round to.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The rounded value.</p>\n</div></li></ul></div></div></div><div id='method-sign' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-sign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-sign' class='name expandable'>sign</a>( <span class='pre'>x</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the sign of the given number. ...</div><div class='long'><p>Returns the sign of the given number. See also MDN for Math.sign documentation\nfor the standard method this method emulates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Number<div class='sub-desc'><p>The number.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The sign of the number <code>x</code>, indicating whether the number is\npositive (1), negative (-1) or zero (0).</p>\n</div></li></ul></div></div></div><div id='method-snap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-snap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-snap' class='name expandable'>snap</a>( <span class='pre'>value, increment, minValue, maxValue</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Snaps the passed number between stopping points based upon a passed increment value. ...</div><div class='long'><p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n\n<p>The difference between this and <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">snapInRange</a> is that <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">snapInRange</a> uses the minValue\nwhen calculating snap points:</p>\n\n<pre><code>r = <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">Ext.Number.snap</a>(56, 2, 55, 65);        // Returns 56 - snap points are zero based\n\nr = <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">Ext.Number.snapInRange</a>(56, 2, 55, 65); // Returns 57 - snap points are based from minValue\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The unsnapped value.</p>\n</div></li><li><span class='pre'>increment</span> : Number<div class='sub-desc'><p>The increment by which the value must move.</p>\n</div></li><li><span class='pre'>minValue</span> : Number<div class='sub-desc'><p>The minimum value to which the returned value must be constrained. Overrides the increment.</p>\n</div></li><li><span class='pre'>maxValue</span> : Number<div class='sub-desc'><p>The maximum value to which the returned value must be constrained. Overrides the increment.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The value of the nearest snap target.</p>\n</div></li></ul></div></div></div><div id='method-snapInRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-snapInRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-snapInRange' class='name expandable'>snapInRange</a>( <span class='pre'>value, increment, [minValue], [maxValue]</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Snaps the passed number between stopping points based upon a passed increment value. ...</div><div class='long'><p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n\n<p>The difference between this and <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">snap</a> is that <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">snap</a> does not use the minValue\nwhen calculating snap points:</p>\n\n<pre><code>r = <a href=\"#!/api/Ext.Number-method-snap\" rel=\"Ext.Number-method-snap\" class=\"docClass\">Ext.Number.snap</a>(56, 2, 55, 65);        // Returns 56 - snap points are zero based\n\nr = <a href=\"#!/api/Ext.Number-method-snapInRange\" rel=\"Ext.Number-method-snapInRange\" class=\"docClass\">Ext.Number.snapInRange</a>(56, 2, 55, 65); // Returns 57 - snap points are based from minValue\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The unsnapped value.</p>\n</div></li><li><span class='pre'>increment</span> : Number<div class='sub-desc'><p>The increment by which the value must move.</p>\n</div></li><li><span class='pre'>minValue</span> : Number (optional)<div class='sub-desc'><p>The minimum value to which the returned value must be constrained.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>maxValue</span> : Number (optional)<div class='sub-desc'><p>The maximum value to which the returned value must be constrained.</p>\n<p>Defaults to: <code>Infinity</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The value of the nearest snap target.</p>\n</div></li></ul></div></div></div><div id='method-toFixed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Number'>Ext.Number</span><br/><a href='source/Number.html#Ext-Number-method-toFixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Number-method-toFixed' class='name expandable'>toFixed</a>( <span class='pre'>value, precision</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Formats a number using fixed-point notation ...</div><div class='long'><p>Formats a number using fixed-point notation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The number to format</p>\n</div></li><li><span class='pre'>precision</span> : Number<div class='sub-desc'><p>The number of digits to show after the decimal point</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});