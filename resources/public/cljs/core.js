goog.provide('stackato');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.ui.TableSorter');
stackato.init = (function init(n){
var component__2315 = (new goog.ui.TableSorter());

var G__2316__2317 = component__2315;

G__2316__2317.decorate(goog.dom.getElement.call(null,"all-users"));
G__2316__2317.setSortFunction(0,goog.ui.TableSorter.alphaSort);
G__2316__2317.setSortFunction(1,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
G__2316__2317.setSortFunction(3,goog.ui.TableSorter.alphaSort);
return G__2316__2317;
});
goog.exportSymbol('stackato.init', stackato.init);
