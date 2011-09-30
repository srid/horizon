goog.provide('stackato');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.ui.TableSorter');
stackato.init = (function init(n){
var component__2339 = (new goog.ui.TableSorter());

var G__2340__2341 = component__2339;

G__2340__2341.decorate(goog.dom.getElement.call(null,"all-users"));
G__2340__2341.setSortFunction(1,goog.ui.TableSorter.alphaSort);
G__2340__2341.setSortFunction(2,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
return G__2340__2341;
});
goog.exportSymbol('stackato.init', stackato.init);
