goog.provide('horizon');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.events.Event');
goog.require('goog.events.EventType');
goog.require('goog.ui.TableSorter');
goog.require('goog.ui.Tab');
goog.require('goog.ui.TabBar');
horizon.tabbar = (new goog.ui.TabBar());
horizon.apps_tablesorter = (new goog.ui.TableSorter());
horizon.users_tablesorter = (new goog.ui.TableSorter());
horizon.handle_tab_select = (function handle_tab_select(tabbar,e){
var tab__2372 = e.target;
var title__2373 = tab__2372.getCaption();
var content__2374 = goog.dom.getElement.call(null,cljs.core.str.call(null,title__2373,"_content"));

var G__2375__2376 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,goog.dom.getChildren.call(null,goog.dom.getElement.call(null,content__2374.parentNode)),0));

if(cljs.core.truth_(G__2375__2376))
{var e__2377 = cljs.core.first.call(null,G__2375__2376);
var G__2375__2378 = G__2375__2376;

while(true){
goog.style.showElement.call(null,e__2377,false);
var temp__3698__auto____2379 = cljs.core.next.call(null,G__2375__2378);

if(cljs.core.truth_(temp__3698__auto____2379))
{var G__2375__2380 = temp__3698__auto____2379;

{
var G__2381 = cljs.core.first.call(null,G__2375__2380);
var G__2382 = G__2375__2380;
e__2377 = G__2381;
G__2375__2378 = G__2382;
continue;
}
} else
{}
break;
}
} else
{}
return goog.style.showElement.call(null,content__2374,true);
});
horizon.init = (function init(n){
horizon.apps_tablesorter.decorate(goog.dom.getElement.call(null,"app"));
var G__2383__2384 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]));

if(cljs.core.truth_(G__2383__2384))
{var index__2385 = cljs.core.first.call(null,G__2383__2384);
var G__2383__2386 = G__2383__2384;

while(true){
horizon.apps_tablesorter.setSortFunction(index__2385,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2387 = cljs.core.next.call(null,G__2383__2386);

if(cljs.core.truth_(temp__3698__auto____2387))
{var G__2383__2388 = temp__3698__auto____2387;

{
var G__2395 = cljs.core.first.call(null,G__2383__2388);
var G__2396 = G__2383__2388;
index__2385 = G__2395;
G__2383__2386 = G__2396;
continue;
}
} else
{}
break;
}
} else
{}
horizon.apps_tablesorter.sort(4);
horizon.users_tablesorter.decorate(goog.dom.getElement.call(null,"users"));
var G__2389__2390 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1]));

if(cljs.core.truth_(G__2389__2390))
{var index__2391 = cljs.core.first.call(null,G__2389__2390);
var G__2389__2392 = G__2389__2390;

while(true){
horizon.users_tablesorter.setSortFunction(index__2391,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2393 = cljs.core.next.call(null,G__2389__2392);

if(cljs.core.truth_(temp__3698__auto____2393))
{var G__2389__2394 = temp__3698__auto____2393;

{
var G__2397 = cljs.core.first.call(null,G__2389__2394);
var G__2398 = G__2389__2394;
index__2391 = G__2397;
G__2389__2392 = G__2398;
continue;
}
} else
{}
break;
}
} else
{}
horizon.users_tablesorter.setSortFunction(2,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.numericSort));
horizon.users_tablesorter.sort(2);
horizon.tabbar.decorate(goog.dom.getElement("maintab"));
goog.events.listen(horizon.tabbar,goog.ui.Component.EventType.SELECT,cljs.core.partial.call(null,horizon.handle_tab_select,horizon.tabbar));
return horizon.tabbar.setSelectedTabIndex(1);
});
goog.exportSymbol('horizon.init', horizon.init);
