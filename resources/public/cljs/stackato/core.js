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
stackato.apps_tablesorter = (new goog.ui.TableSorter());
stackato.users_tablesorter = (new goog.ui.TableSorter());
stackato.handle_tab_select = (function handle_tab_select(tabbar,e){
var tab__2315 = e.target;
var title__2316 = tab__2315.getCaption();
var content__2317 = goog.dom.getElement.call(null,cljs.core.str.call(null,title__2316,"_content"));

var G__2318__2319 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,goog.dom.getChildren.call(null,goog.dom.getElement.call(null,content__2317.parentNode)),0));

if(cljs.core.truth_(G__2318__2319))
{var e__2320 = cljs.core.first.call(null,G__2318__2319);
var G__2318__2321 = G__2318__2319;

while(true){
goog.style.showElement.call(null,e__2320,false);
var temp__3698__auto____2322 = cljs.core.next.call(null,G__2318__2321);

if(cljs.core.truth_(temp__3698__auto____2322))
{var G__2318__2323 = temp__3698__auto____2322;

{
var G__2324 = cljs.core.first.call(null,G__2318__2323);
var G__2325 = G__2318__2323;
e__2320 = G__2324;
G__2318__2321 = G__2325;
continue;
}
} else
{}
break;
}
} else
{}
return goog.style.showElement.call(null,content__2317,true);
});
stackato.init = (function init(n){
stackato.apps_tablesorter.decorate(goog.dom.getElement.call(null,"app"));
var G__2326__2327 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]));

if(cljs.core.truth_(G__2326__2327))
{var index__2328 = cljs.core.first.call(null,G__2326__2327);
var G__2326__2329 = G__2326__2327;

while(true){
stackato.apps_tablesorter.setSortFunction(index__2328,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2330 = cljs.core.next.call(null,G__2326__2329);

if(cljs.core.truth_(temp__3698__auto____2330))
{var G__2326__2331 = temp__3698__auto____2330;

{
var G__2338 = cljs.core.first.call(null,G__2326__2331);
var G__2339 = G__2326__2331;
index__2328 = G__2338;
G__2326__2329 = G__2339;
continue;
}
} else
{}
break;
}
} else
{}
stackato.apps_tablesorter.sort(4);
stackato.users_tablesorter.decorate(goog.dom.getElement.call(null,"users"));
var G__2332__2333 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1]));

if(cljs.core.truth_(G__2332__2333))
{var index__2334 = cljs.core.first.call(null,G__2332__2333);
var G__2332__2335 = G__2332__2333;

while(true){
stackato.users_tablesorter.setSortFunction(index__2334,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2336 = cljs.core.next.call(null,G__2332__2335);

if(cljs.core.truth_(temp__3698__auto____2336))
{var G__2332__2337 = temp__3698__auto____2336;

{
var G__2340 = cljs.core.first.call(null,G__2332__2337);
var G__2341 = G__2332__2337;
index__2334 = G__2340;
G__2332__2335 = G__2341;
continue;
}
} else
{}
break;
}
} else
{}
stackato.users_tablesorter.setSortFunction(2,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.numericSort));
stackato.users_tablesorter.sort(2);
stackato.tabbar.decorate(goog.dom.getElement("maintab"));
goog.events.listen(stackato.tabbar,goog.ui.Component.EventType.SELECT,cljs.core.partial.call(null,stackato.handle_tab_select,stackato.tabbar));
return stackato.tabbar.setSelectedTabIndex(1);
});
goog.exportSymbol('stackato.init', stackato.init);
