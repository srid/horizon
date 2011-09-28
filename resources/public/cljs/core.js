goog.provide('stackato');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');
stackato.init = (function init(n){
return cljs.core.str.call(null,"Hello ",n);
});
goog.exportSymbol('stackato.init', stackato.init);
