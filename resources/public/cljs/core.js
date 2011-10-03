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
stackato.handle_tab_select = (function handle_tab_select(tabbar,e){
var tab__2417 = e.target;
var title__2418 = tab__2417.getCaption();
var content__2419 = goog.dom.getElement.call(null,cljs.core.str.call(null,title__2418,"_content"));

var G__2420__2421 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,goog.dom.getChildren.call(null,goog.dom.getElement.call(null,content__2419.parentNode)),0));

if(cljs.core.truth_(G__2420__2421))
{var e__2422 = cljs.core.first.call(null,G__2420__2421);
var G__2420__2423 = G__2420__2421;

while(true){
goog.style.showElement.call(null,e__2422,false);
var temp__3698__auto____2424 = cljs.core.next.call(null,G__2420__2423);

if(cljs.core.truth_(temp__3698__auto____2424))
{var G__2420__2425 = temp__3698__auto____2424;

{
var G__2426 = cljs.core.first.call(null,G__2420__2425);
var G__2427 = G__2420__2425;
e__2422 = G__2426;
G__2420__2423 = G__2427;
continue;
}
} else
{}
break;
}
} else
{}
window.p.call(null,title__2418);
window.p.call(null,content__2419);
return goog.style.showElement.call(null,content__2419,true);
});
stackato.init = (function init(n){
stackato.tablesorter.decorate(goog.dom.getElement.call(null,"all-users"));
var G__2428__2429 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1,2,4]));

if(cljs.core.truth_(G__2428__2429))
{var index__2430 = cljs.core.first.call(null,G__2428__2429);
var G__2428__2431 = G__2428__2429;

while(true){
stackato.tablesorter.setSortFunction(index__2430,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2432 = cljs.core.next.call(null,G__2428__2431);

if(cljs.core.truth_(temp__3698__auto____2432))
{var G__2428__2433 = temp__3698__auto____2432;

{
var G__2434 = cljs.core.first.call(null,G__2428__2433);
var G__2435 = G__2428__2433;
index__2430 = G__2434;
G__2428__2431 = G__2435;
continue;
}
} else
{}
break;
}
} else
{}
stackato.tablesorter.sort(4);
stackato.tabbar.decorate(goog.dom.getElement("maintab"));
goog.events.listen(stackato.tabbar,goog.ui.Component.EventType.SELECT,cljs.core.partial.call(null,stackato.handle_tab_select,stackato.tabbar));
return stackato.tabbar.setSelectedTabIndex(1);
});
goog.exportSymbol('stackato.init', stackato.init);
