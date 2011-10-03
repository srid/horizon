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
var tab__2436 = e.target;
var title__2437 = tab__2436.getCaption();
var content__2438 = goog.dom.getElement.call(null,cljs.core.str.call(null,title__2437,"_content"));

var G__2439__2440 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,goog.dom.getChildren.call(null,goog.dom.getElement.call(null,content__2438.parentNode)),0));

if(cljs.core.truth_(G__2439__2440))
{var e__2441 = cljs.core.first.call(null,G__2439__2440);
var G__2439__2442 = G__2439__2440;

while(true){
goog.style.showElement.call(null,e__2441,false);
var temp__3698__auto____2443 = cljs.core.next.call(null,G__2439__2442);

if(cljs.core.truth_(temp__3698__auto____2443))
{var G__2439__2444 = temp__3698__auto____2443;

{
var G__2445 = cljs.core.first.call(null,G__2439__2444);
var G__2446 = G__2439__2444;
e__2441 = G__2445;
G__2439__2442 = G__2446;
continue;
}
} else
{}
break;
}
} else
{}
window.p.call(null,title__2437);
window.p.call(null,content__2438);
return goog.style.showElement.call(null,content__2438,true);
});
stackato.init = (function init(n){
stackato.tablesorter.decorate(goog.dom.getElement.call(null,"all-users"));
var G__2447__2448 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]));

if(cljs.core.truth_(G__2447__2448))
{var index__2449 = cljs.core.first.call(null,G__2447__2448);
var G__2447__2450 = G__2447__2448;

while(true){
stackato.tablesorter.setSortFunction(index__2449,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2451 = cljs.core.next.call(null,G__2447__2450);

if(cljs.core.truth_(temp__3698__auto____2451))
{var G__2447__2452 = temp__3698__auto____2451;

{
var G__2453 = cljs.core.first.call(null,G__2447__2452);
var G__2454 = G__2447__2452;
index__2449 = G__2453;
G__2447__2450 = G__2454;
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
