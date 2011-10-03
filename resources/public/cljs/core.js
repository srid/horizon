goog.provide('stackato');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.ui.TableSorter');
stackato.init = (function init(n){
var component__2330 = (new goog.ui.TableSorter());

var G__2331__2332 = component__2330;

G__2331__2332.decorate(goog.dom.getElement.call(null,"all-users"));
G__2331__2332.setSortFunction(0,goog.ui.TableSorter.alphaSort);
G__2331__2332.setSortFunction(1,goog.ui.TableSorter.alphaSort);
G__2331__2332.setSortFunction(2,goog.ui.TableSorter.alphaSort);
G__2331__2332.setSortFunction(4,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
G__2331__2332.sort(4);
return G__2331__2332;
});
goog.exportSymbol('stackato.init', stackato.init);
