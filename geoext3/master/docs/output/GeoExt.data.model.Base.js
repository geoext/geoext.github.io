Ext.data.JsonP.GeoExt_data_model_Base({"tagname":"class","name":"GeoExt.data.model.Base","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Base.js","href":"Base2.html#GeoExt-data-model-Base"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Model","mixins":[],"requires":["Ext.data.identifier.Uuid"],"uses":[],"members":[{"name":"identifier","tagname":"property","owner":"GeoExt.data.model.Base","id":"property-identifier","meta":{"private":true}},{"name":"schema","tagname":"property","owner":"GeoExt.data.model.Base","id":"property-schema","meta":{"private":true}},{"name":"loadRawData","tagname":"method","owner":"GeoExt.data.model.Base","id":"static-method-loadRawData","meta":{"static":true}}],"code_type":"ext_define","id":"class-GeoExt.data.model.Base","component":false,"superclasses":["Ext.data.Model"],"subclasses":["GeoExt.data.model.Layer","GeoExt.data.model.OlObject","GeoExt.data.model.print.Capability","GeoExt.data.model.print.Layout","GeoExt.data.model.print.LayoutAttribute"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Model<div class='subclass '><strong>GeoExt.data.model.Base</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.data.identifier.Uuid</div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/GeoExt.data.model.Layer' rel='GeoExt.data.model.Layer' class='docClass'>GeoExt.data.model.Layer</a></div><div class='dependency'><a href='#!/api/GeoExt.data.model.OlObject' rel='GeoExt.data.model.OlObject' class='docClass'>GeoExt.data.model.OlObject</a></div><div class='dependency'><a href='#!/api/GeoExt.data.model.print.Capability' rel='GeoExt.data.model.print.Capability' class='docClass'>GeoExt.data.model.print.Capability</a></div><div class='dependency'><a href='#!/api/GeoExt.data.model.print.Layout' rel='GeoExt.data.model.print.Layout' class='docClass'>GeoExt.data.model.print.Layout</a></div><div class='dependency'><a href='#!/api/GeoExt.data.model.print.LayoutAttribute' rel='GeoExt.data.model.print.LayoutAttribute' class='docClass'>GeoExt.data.model.print.LayoutAttribute</a></div><h4>Files</h4><div class='dependency'><a href='source/Base2.html#GeoExt-data-model-Base' target='_blank'>Base.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-identifier' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Base'>GeoExt.data.model.Base</span><br/><a href='source/Base2.html#GeoExt-data-model-Base-property-identifier' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Base-property-identifier' class='name expandable'>identifier</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;uuid&#39;</code></p></div></div></div><div id='property-schema' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Base'>GeoExt.data.model.Base</span><br/><a href='source/Base2.html#GeoExt-data-model-Base-property-schema' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Base-property-schema' class='name expandable'>schema</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{id: &#39;geoext-schema&#39;, namespace: &#39;GeoExt.data.model&#39;}</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-loadRawData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.model.Base'>GeoExt.data.model.Base</span><br/><a href='source/Base2.html#GeoExt-data-model-Base-static-method-loadRawData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.model.Base-static-method-loadRawData' class='name expandable'>loadRawData</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/GeoExt.data.model.Base\" rel=\"GeoExt.data.model.Base\" class=\"docClass\">GeoExt.data.model.Base</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Loads a record from a provided data structure initializing the models\nassociations. ...</div><div class='long'><p>Loads a record from a provided data structure initializing the models\nassociations. Simply calling Ext.create will not utilize the models\nconfigured reader and effectivly sidetrack associations configs.\nThis static helper method makes sure associations are initialized\nproperly and are available with the returned record.</p>\n\n<p>Be aware that the provided data may be modified by the models reader\ninitializing associations.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data the record will be created with.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.model.Base\" rel=\"GeoExt.data.model.Base\" class=\"docClass\">GeoExt.data.model.Base</a></span><div class='sub-desc'><p>The record.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});