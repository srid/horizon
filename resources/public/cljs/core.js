goog.provide('stackato');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.events.Event');
goog.require('goog.events.EventType');
goog.require('goog.ui.TableSorter');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');
stackato.tabbar = (new goog.ui.TabBar());
stackato.tablesorter = (new goog.ui.TableSorter());
stackato.table_make_sortable = (function table_make_sortable(element){
var G__2556__2557 = stackato.tablesorter;

G__2556__2557.decorate(element);
G__2556__2557.setSortFunction(0,goog.ui.TableSorter.alphaSort);
G__2556__2557.setSortFunction(1,goog.ui.TableSorter.alphaSort);
G__2556__2557.setSortFunction(2,goog.ui.TableSorter.alphaSort);
G__2556__2557.setSortFunction(4,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
G__2556__2557.sort(4);
return G__2556__2557;
});
stackato.handle_tab_select = (function handle_tab_select(tabbar,e){
var tab__2558 = e.target;
var tab_title__2559 = tab__2558.getCaption();
var tab_content__2560 = goog.dom.getElement.call(null,cljs.core.str.call(null,tab_title__2559,"_content"));
var content__2561 = goog.dom.getElement.call(null,cljs.core.str.call(null,tabbar.getId(),"_content"));

content__2561.innerHTML = tab_content__2560.innerHTML;
var temp__3698__auto____2562 = goog.dom.findNode.call(null,content__2561,(function (p1__2555_SHARP_){
return cljs.core._EQ_.call(null,"all-users",p1__2555_SHARP_.getAttribute("id"));
}));

if(cljs.core.truth_(temp__3698__auto____2562))
{var all_users__2563 = temp__3698__auto____2562;

return stackato.table_make_sortable.call(null,all_users__2563);
} else
{return null;
}
});
stackato.events = goog.object.getValues(goog.ui.Component.EventType);
stackato.init = (function init(n){
stackato.tabbar.decorate(goog.dom.getElement("maintab"));
return goog.events.listen(stackato.tabbar,goog.ui.Component.EventType.SELECT,cljs.core.partial.call(null,stackato.handle_tab_select,stackato.tabbar));
});
goog.exportSymbol('stackato.init', stackato.init);
