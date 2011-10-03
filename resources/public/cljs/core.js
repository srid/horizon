goog.provide('stackato');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.ui.TableSorter');
stackato.init = (function init(n){
var component__2342 = (new goog.ui.TableSorter());

var G__2343__2344 = component__2342;

G__2343__2344.decorate(goog.dom.getElement.call(null,"all-users"));
G__2343__2344.setSortFunction(0,goog.ui.TableSorter.alphaSort);
G__2343__2344.setSortFunction(1,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
return G__2343__2344;
});
goog.exportSymbol('stackato.init', stackato.init);
