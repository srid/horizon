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
var tab__2682 = e.target;
var title__2683 = tab__2682.getCaption();
var content__2684 = goog.dom.getElement.call(null,cljs.core.str.call(null,title__2683,"_content"));

var G__2685__2686 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,goog.dom.getChildren.call(null,goog.dom.getElement.call(null,content__2684.parentNode)),0));

if(cljs.core.truth_(G__2685__2686))
{var e__2687 = cljs.core.first.call(null,G__2685__2686);
var G__2685__2688 = G__2685__2686;

while(true){
goog.style.showElement.call(null,e__2687,false);
var temp__3698__auto____2689 = cljs.core.next.call(null,G__2685__2688);

if(cljs.core.truth_(temp__3698__auto____2689))
{var G__2685__2690 = temp__3698__auto____2689;

{
var G__2691 = cljs.core.first.call(null,G__2685__2690);
var G__2692 = G__2685__2690;
e__2687 = G__2691;
G__2685__2688 = G__2692;
continue;
}
} else
{}
break;
}
} else
{}
return goog.style.showElement.call(null,content__2684,true);
});
stackato.init = (function init(n){
stackato.apps_tablesorter.decorate(goog.dom.getElement.call(null,"app"));
var G__2693__2694 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1,2,3,4]));

if(cljs.core.truth_(G__2693__2694))
{var index__2695 = cljs.core.first.call(null,G__2693__2694);
var G__2693__2696 = G__2693__2694;

while(true){
stackato.apps_tablesorter.setSortFunction(index__2695,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2697 = cljs.core.next.call(null,G__2693__2696);

if(cljs.core.truth_(temp__3698__auto____2697))
{var G__2693__2698 = temp__3698__auto____2697;

{
var G__2705 = cljs.core.first.call(null,G__2693__2698);
var G__2706 = G__2693__2698;
index__2695 = G__2705;
G__2693__2696 = G__2706;
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
var G__2699__2700 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([0,1]));

if(cljs.core.truth_(G__2699__2700))
{var index__2701 = cljs.core.first.call(null,G__2699__2700);
var G__2699__2702 = G__2699__2700;

while(true){
stackato.users_tablesorter.setSortFunction(index__2701,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
var temp__3698__auto____2703 = cljs.core.next.call(null,G__2699__2702);

if(cljs.core.truth_(temp__3698__auto____2703))
{var G__2699__2704 = temp__3698__auto____2703;

{
var G__2707 = cljs.core.first.call(null,G__2699__2704);
var G__2708 = G__2699__2704;
index__2701 = G__2707;
G__2699__2702 = G__2708;
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
