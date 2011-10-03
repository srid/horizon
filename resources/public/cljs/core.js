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
var G__3223__3224 = stackato.tablesorter;

G__3223__3224.decorate(element);
G__3223__3224.setSortFunction(0,goog.ui.TableSorter.alphaSort);
G__3223__3224.setSortFunction(1,goog.ui.TableSorter.alphaSort);
G__3223__3224.setSortFunction(2,goog.ui.TableSorter.alphaSort);
G__3223__3224.setSortFunction(4,goog.ui.TableSorter.createReverseSort.call(null,goog.ui.TableSorter.alphaSort));
G__3223__3224.sort(4);
return G__3223__3224;
});
stackato.handle_tab_select = (function handle_tab_select(tabbar,e){
var tab__3225 = e.target;
var title__3226 = tab__3225.getCaption();
var content__3227 = goog.dom.getElement.call(null,cljs.core.str.call(null,title__3226,"_content"));

var G__3228__3229 = cljs.core.seq.call(null,cljs.core.prim_seq.call(null,goog.dom.getChildren.call(null,goog.dom.getElement.call(null,content__3227.parentNode)),0));

if(cljs.core.truth_(G__3228__3229))
{var e__3230 = cljs.core.first.call(null,G__3228__3229);
var G__3228__3231 = G__3228__3229;

while(true){
goog.style.showElement.call(null,e__3230,false);
var temp__3698__auto____3232 = cljs.core.next.call(null,G__3228__3231);

if(cljs.core.truth_(temp__3698__auto____3232))
{var G__3228__3233 = temp__3698__auto____3232;

{
var G__3234 = cljs.core.first.call(null,G__3228__3233);
var G__3235 = G__3228__3233;
e__3230 = G__3234;
G__3228__3231 = G__3235;
continue;
}
} else
{}
break;
}
} else
{}
window.p.call(null,title__3226);
window.p.call(null,content__3227);
return goog.style.showElement.call(null,content__3227,true);
});
stackato.events = goog.object.getValues(goog.ui.Component.EventType);
stackato.init = (function init(n){
stackato.table_make_sortable.call(null,goog.dom.getElement.call(null,"all-users"));
stackato.tabbar.decorate(goog.dom.getElement("maintab"));
goog.events.listen(stackato.tabbar,goog.ui.Component.EventType.SELECT,cljs.core.partial.call(null,stackato.handle_tab_select,stackato.tabbar));
return stackato.tabbar.setSelectedTabIndex(1);
});
goog.exportSymbol('stackato.init', stackato.init);
