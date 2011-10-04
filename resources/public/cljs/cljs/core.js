goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2399 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2399))
{return or__3548__auto____2399;
} else
{var or__3548__auto____2400 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2400))
{return or__3548__auto____2400;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2401 = coll;

if(cljs.core.truth_(and__3546__auto____2401))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2401;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2402 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2402))
{return or__3548__auto____2402;
} else
{var or__3548__auto____2403 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2403))
{return or__3548__auto____2403;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2404 = coll;

if(cljs.core.truth_(and__3546__auto____2404))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2404;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2405 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2405))
{return or__3548__auto____2405;
} else
{var or__3548__auto____2406 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2406))
{return or__3548__auto____2406;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2407 = coll;

if(cljs.core.truth_(and__3546__auto____2407))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2407;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2408 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2408))
{return or__3548__auto____2408;
} else
{var or__3548__auto____2409 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2409))
{return or__3548__auto____2409;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2416 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2410 = coll;

if(cljs.core.truth_(and__3546__auto____2410))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2410;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2411 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{var or__3548__auto____2412 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2412))
{return or__3548__auto____2412;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2417 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2413 = coll;

if(cljs.core.truth_(and__3546__auto____2413))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2413;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2414 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2414))
{return or__3548__auto____2414;
} else
{var or__3548__auto____2415 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2415))
{return or__3548__auto____2415;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2416.call(this,coll,n);
case  3 :
return _nth__2417.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2419 = coll;

if(cljs.core.truth_(and__3546__auto____2419))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2419;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2420 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{var or__3548__auto____2421 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2421))
{return or__3548__auto____2421;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2422 = coll;

if(cljs.core.truth_(and__3546__auto____2422))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2422;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2423 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{var or__3548__auto____2424 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2431 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2425 = o;

if(cljs.core.truth_(and__3546__auto____2425))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2425;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2426 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2426))
{return or__3548__auto____2426;
} else
{var or__3548__auto____2427 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2427))
{return or__3548__auto____2427;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2432 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2428 = o;

if(cljs.core.truth_(and__3546__auto____2428))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2428;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2429 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2429))
{return or__3548__auto____2429;
} else
{var or__3548__auto____2430 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2430))
{return or__3548__auto____2430;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2431.call(this,o,k);
case  3 :
return _lookup__2432.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2434 = coll;

if(cljs.core.truth_(and__3546__auto____2434))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2434;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2435 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2437 = coll;

if(cljs.core.truth_(and__3546__auto____2437))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2437;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2438 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{var or__3548__auto____2439 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2439))
{return or__3548__auto____2439;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2440 = coll;

if(cljs.core.truth_(and__3546__auto____2440))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2440;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2441 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{var or__3548__auto____2442 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2442))
{return or__3548__auto____2442;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2443 = coll;

if(cljs.core.truth_(and__3546__auto____2443))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2443;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2444 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2444))
{return or__3548__auto____2444;
} else
{var or__3548__auto____2445 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2445))
{return or__3548__auto____2445;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2446 = coll;

if(cljs.core.truth_(and__3546__auto____2446))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2446;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2447 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2447))
{return or__3548__auto____2447;
} else
{var or__3548__auto____2448 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2448))
{return or__3548__auto____2448;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2449 = coll;

if(cljs.core.truth_(and__3546__auto____2449))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2449;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2450 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2450))
{return or__3548__auto____2450;
} else
{var or__3548__auto____2451 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2451))
{return or__3548__auto____2451;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2452 = coll;

if(cljs.core.truth_(and__3546__auto____2452))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2452;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2453 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2453))
{return or__3548__auto____2453;
} else
{var or__3548__auto____2454 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2454))
{return or__3548__auto____2454;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2455 = o;

if(cljs.core.truth_(and__3546__auto____2455))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2455;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2456 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
} else
{var or__3548__auto____2457 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2457))
{return or__3548__auto____2457;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2458 = o;

if(cljs.core.truth_(and__3546__auto____2458))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2458;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2459 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{var or__3548__auto____2460 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2460))
{return or__3548__auto____2460;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2461 = o;

if(cljs.core.truth_(and__3546__auto____2461))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2461;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2462 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{var or__3548__auto____2463 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2463))
{return or__3548__auto____2463;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2464 = o;

if(cljs.core.truth_(and__3546__auto____2464))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2464;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2465 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
} else
{var or__3548__auto____2466 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2466))
{return or__3548__auto____2466;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2473 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2467 = coll;

if(cljs.core.truth_(and__3546__auto____2467))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2467;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2468 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2468))
{return or__3548__auto____2468;
} else
{var or__3548__auto____2469 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2469))
{return or__3548__auto____2469;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2474 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2470 = coll;

if(cljs.core.truth_(and__3546__auto____2470))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2470;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2471 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
} else
{var or__3548__auto____2472 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2472))
{return or__3548__auto____2472;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2473.call(this,coll,f);
case  3 :
return _reduce__2474.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2476 = o;

if(cljs.core.truth_(and__3546__auto____2476))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2476;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2477 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{var or__3548__auto____2478 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2478))
{return or__3548__auto____2478;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2479 = o;

if(cljs.core.truth_(and__3546__auto____2479))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2479;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2480 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
} else
{var or__3548__auto____2481 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2481))
{return or__3548__auto____2481;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2482 = o;

if(cljs.core.truth_(and__3546__auto____2482))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2482;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2483 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{var or__3548__auto____2484 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2484))
{return or__3548__auto____2484;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____2485 = o;

if(cljs.core.truth_(and__3546__auto____2485))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2485;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2486 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2486))
{return or__3548__auto____2486;
} else
{var or__3548__auto____2487 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2487))
{return or__3548__auto____2487;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2488 = d;

if(cljs.core.truth_(and__3546__auto____2488))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2488;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2489 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2489))
{return or__3548__auto____2489;
} else
{var or__3548__auto____2490 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2490))
{return or__3548__auto____2490;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2491 = this$;

if(cljs.core.truth_(and__3546__auto____2491))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2491;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2492 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{var or__3548__auto____2493 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2493))
{return or__3548__auto____2493;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2494 = this$;

if(cljs.core.truth_(and__3546__auto____2494))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2494;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2495 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{var or__3548__auto____2496 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2496))
{return or__3548__auto____2496;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2497 = this$;

if(cljs.core.truth_(and__3546__auto____2497))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2497;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2498 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2498))
{return or__3548__auto____2498;
} else
{var or__3548__auto____2499 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2499))
{return or__3548__auto____2499;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2500 = null;
var G__2500__2501 = (function (_,n){
return null;
});
var G__2500__2502 = (function (_,n,not_found){
return not_found;
});
G__2500 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2500__2501.call(this,_,n);
case  3 :
return G__2500__2502.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2500;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2504 = null;
var G__2504__2505 = (function (_,f){
return f.call(null);
});
var G__2504__2506 = (function (_,f,start){
return start;
});
G__2504 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2504__2505.call(this,_,f);
case  3 :
return G__2504__2506.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2504;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2508 = null;
var G__2508__2509 = (function (o,k){
return null;
});
var G__2508__2510 = (function (o,k,not_found){
return not_found;
});
G__2508 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2508__2509.call(this,o,k);
case  3 :
return G__2508__2510.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2508;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2518 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2512 = cljs.core._nth.call(null,cicoll,0);
var n__2513 = 1;

while(true){
if(cljs.core.truth_((n__2513 < cljs.core._count.call(null,cicoll))))
{{
var G__2522 = f.call(null,val__2512,cljs.core._nth.call(null,cicoll,n__2513));
var G__2523 = (n__2513 + 1);
val__2512 = G__2522;
n__2513 = G__2523;
continue;
}
} else
{return val__2512;
}
break;
}
}
});
var ci_reduce__2519 = (function (cicoll,f,val){
var val__2514 = val;
var n__2515 = 0;

while(true){
if(cljs.core.truth_((n__2515 < cljs.core._count.call(null,cicoll))))
{{
var G__2524 = f.call(null,val__2514,cljs.core._nth.call(null,cicoll,n__2515));
var G__2525 = (n__2515 + 1);
val__2514 = G__2524;
n__2515 = G__2525;
continue;
}
} else
{return val__2514;
}
break;
}
});
var ci_reduce__2520 = (function (cicoll,f,val,idx){
var val__2516 = val;
var n__2517 = idx;

while(true){
if(cljs.core.truth_((n__2517 < cljs.core._count.call(null,cicoll))))
{{
var G__2526 = f.call(null,val__2516,cljs.core._nth.call(null,cicoll,n__2517));
var G__2527 = (n__2517 + 1);
val__2516 = G__2526;
n__2517 = G__2527;
continue;
}
} else
{return val__2516;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2518.call(this,cicoll,f);
case  3 :
return ci_reduce__2519.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2520.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2528 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2536 = null;
var G__2536__2537 = (function (coll,f){
var this__2529 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2529.a[this__2529.i]),(this__2529.i + 1));
});
var G__2536__2538 = (function (coll,f,start){
var this__2530 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2530.i);
});
G__2536 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2536__2537.call(this,coll,f);
case  3 :
return G__2536__2538.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2536;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2531 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2532 = this;
return this__2532.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2533 = this;
return (this__2533.a[this__2533.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2534 = this;
if(cljs.core.truth_(((this__2534.i + 1) < this__2534.a.length)))
{return (new cljs.core.IndexedSeq(this__2534.a,(this__2534.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2535 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2540 = null;
var G__2540__2541 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2540__2542 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2540 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2540__2541.call(this,array,f);
case  3 :
return G__2540__2542.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2540;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2544 = null;
var G__2544__2545 = (function (array,k){
return (array[k]);
});
var G__2544__2546 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2544 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2544__2545.call(this,array,k);
case  3 :
return G__2544__2546.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2544;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2548 = null;
var G__2548__2549 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2548__2550 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2548 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2548__2549.call(this,array,n);
case  3 :
return G__2548__2550.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2548;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____2552 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2552))
{var s__2553 = temp__3698__auto____2552;

return cljs.core._first.call(null,s__2553);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2554 = cljs.core.next.call(null,s);
s = G__2554;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2555 = cljs.core.seq.call(null,x);
var n__2556 = 0;

while(true){
if(cljs.core.truth_(s__2555))
{{
var G__2557 = cljs.core.next.call(null,s__2555);
var G__2558 = (n__2556 + 1);
s__2555 = G__2557;
n__2556 = G__2558;
continue;
}
} else
{return n__2556;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2559 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2560 = (function() { 
var G__2562__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2563 = conj.call(null,coll,x);
var G__2564 = cljs.core.first.call(null,xs);
var G__2565 = cljs.core.next.call(null,xs);
coll = G__2563;
x = G__2564;
xs = G__2565;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2562 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2562__delegate.call(this, coll, x, xs);
};
G__2562.cljs$lang$maxFixedArity = 2;
G__2562.cljs$lang$applyTo = (function (arglist__2566){
var coll = cljs.core.first(arglist__2566);
var x = cljs.core.first(cljs.core.next(arglist__2566));
var xs = cljs.core.rest(cljs.core.next(arglist__2566));
return G__2562__delegate.call(this, coll, x, xs);
});
return G__2562;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2559.call(this,coll,x);
default:
return conj__2560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2560.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2567 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2568 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2567.call(this,coll,n);
case  3 :
return nth__2568.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2570 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2571 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2570.call(this,o,k);
case  3 :
return get__2571.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2574 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2575 = (function() { 
var G__2577__delegate = function (coll,k,v,kvs){
while(true){
var ret__2573 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2578 = ret__2573;
var G__2579 = cljs.core.first.call(null,kvs);
var G__2580 = cljs.core.second.call(null,kvs);
var G__2581 = cljs.core.nnext.call(null,kvs);
coll = G__2578;
k = G__2579;
v = G__2580;
kvs = G__2581;
continue;
}
} else
{return ret__2573;
}
break;
}
};
var G__2577 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2577__delegate.call(this, coll, k, v, kvs);
};
G__2577.cljs$lang$maxFixedArity = 3;
G__2577.cljs$lang$applyTo = (function (arglist__2582){
var coll = cljs.core.first(arglist__2582);
var k = cljs.core.first(cljs.core.next(arglist__2582));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2582)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2582)));
return G__2577__delegate.call(this, coll, k, v, kvs);
});
return G__2577;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2574.call(this,coll,k,v);
default:
return assoc__2575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2575.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2584 = (function (coll){
return coll;
});
var dissoc__2585 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2586 = (function() { 
var G__2588__delegate = function (coll,k,ks){
while(true){
var ret__2583 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2589 = ret__2583;
var G__2590 = cljs.core.first.call(null,ks);
var G__2591 = cljs.core.next.call(null,ks);
coll = G__2589;
k = G__2590;
ks = G__2591;
continue;
}
} else
{return ret__2583;
}
break;
}
};
var G__2588 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2588__delegate.call(this, coll, k, ks);
};
G__2588.cljs$lang$maxFixedArity = 2;
G__2588.cljs$lang$applyTo = (function (arglist__2592){
var coll = cljs.core.first(arglist__2592);
var k = cljs.core.first(cljs.core.next(arglist__2592));
var ks = cljs.core.rest(cljs.core.next(arglist__2592));
return G__2588__delegate.call(this, coll, k, ks);
});
return G__2588;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2584.call(this,coll);
case  2 :
return dissoc__2585.call(this,coll,k);
default:
return dissoc__2586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2586.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__302__auto____2593 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2594 = x__302__auto____2593;

if(cljs.core.truth_(and__3546__auto____2594))
{var and__3546__auto____2595 = x__302__auto____2593.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2595))
{return cljs.core.not.call(null,x__302__auto____2593.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2595;
}
} else
{return and__3546__auto____2594;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____2593);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2597 = (function (coll){
return coll;
});
var disj__2598 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2599 = (function() { 
var G__2601__delegate = function (coll,k,ks){
while(true){
var ret__2596 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2602 = ret__2596;
var G__2603 = cljs.core.first.call(null,ks);
var G__2604 = cljs.core.next.call(null,ks);
coll = G__2602;
k = G__2603;
ks = G__2604;
continue;
}
} else
{return ret__2596;
}
break;
}
};
var G__2601 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2601__delegate.call(this, coll, k, ks);
};
G__2601.cljs$lang$maxFixedArity = 2;
G__2601.cljs$lang$applyTo = (function (arglist__2605){
var coll = cljs.core.first(arglist__2605);
var k = cljs.core.first(cljs.core.next(arglist__2605));
var ks = cljs.core.rest(cljs.core.next(arglist__2605));
return G__2601__delegate.call(this, coll, k, ks);
});
return G__2601;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2597.call(this,coll);
case  2 :
return disj__2598.call(this,coll,k);
default:
return disj__2599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2599.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__302__auto____2606 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2607 = x__302__auto____2606;

if(cljs.core.truth_(and__3546__auto____2607))
{var and__3546__auto____2608 = x__302__auto____2606.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2608))
{return cljs.core.not.call(null,x__302__auto____2606.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2608;
}
} else
{return and__3546__auto____2607;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__302__auto____2606);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__302__auto____2609 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2610 = x__302__auto____2609;

if(cljs.core.truth_(and__3546__auto____2610))
{var and__3546__auto____2611 = x__302__auto____2609.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2611))
{return cljs.core.not.call(null,x__302__auto____2609.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2611;
}
} else
{return and__3546__auto____2610;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__302__auto____2609);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__302__auto____2612 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2613 = x__302__auto____2612;

if(cljs.core.truth_(and__3546__auto____2613))
{var and__3546__auto____2614 = x__302__auto____2612.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2614))
{return cljs.core.not.call(null,x__302__auto____2612.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2614;
}
} else
{return and__3546__auto____2613;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__302__auto____2612);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__302__auto____2615 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2616 = x__302__auto____2615;

if(cljs.core.truth_(and__3546__auto____2616))
{var and__3546__auto____2617 = x__302__auto____2615.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2617))
{return cljs.core.not.call(null,x__302__auto____2615.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2617;
}
} else
{return and__3546__auto____2616;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__302__auto____2615);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__302__auto____2618 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2619 = x__302__auto____2618;

if(cljs.core.truth_(and__3546__auto____2619))
{var and__3546__auto____2620 = x__302__auto____2618.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2620))
{return cljs.core.not.call(null,x__302__auto____2618.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2620;
}
} else
{return and__3546__auto____2619;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__302__auto____2618);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__302__auto____2621 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2622 = x__302__auto____2621;

if(cljs.core.truth_(and__3546__auto____2622))
{var and__3546__auto____2623 = x__302__auto____2621.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2623))
{return cljs.core.not.call(null,x__302__auto____2621.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2623;
}
} else
{return and__3546__auto____2622;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__302__auto____2621);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__302__auto____2624 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2625 = x__302__auto____2624;

if(cljs.core.truth_(and__3546__auto____2625))
{var and__3546__auto____2626 = x__302__auto____2624.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2626))
{return cljs.core.not.call(null,x__302__auto____2624.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2626;
}
} else
{return and__3546__auto____2625;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__302__auto____2624);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2627 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2627.push(key);
}));
return keys__2627;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__302__auto____2628 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2629 = x__302__auto____2628;

if(cljs.core.truth_(and__3546__auto____2629))
{var and__3546__auto____2630 = x__302__auto____2628.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2630))
{return cljs.core.not.call(null,x__302__auto____2628.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2630;
}
} else
{return and__3546__auto____2629;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__302__auto____2628);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____2631 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2631))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2632 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2632))
{return or__3548__auto____2632;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2631;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2633 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2633))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2633;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2634 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2634))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2634;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____2635 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2635))
{return (n == n.toFixed());
} else
{return and__3546__auto____2635;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2636 = coll;

if(cljs.core.truth_(and__3546__auto____2636))
{var and__3546__auto____2637 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2637))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2637;
}
} else
{return and__3546__auto____2636;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2642 = (function (x){
return true;
});
var distinct_QMARK___2643 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2644 = (function() { 
var G__2646__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2638 = cljs.core.set([y,x]);
var xs__2639 = more;

while(true){
var x__2640 = cljs.core.first.call(null,xs__2639);
var etc__2641 = cljs.core.next.call(null,xs__2639);

if(cljs.core.truth_(xs__2639))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2638,x__2640)))
{return false;
} else
{{
var G__2647 = cljs.core.conj.call(null,s__2638,x__2640);
var G__2648 = etc__2641;
s__2638 = G__2647;
xs__2639 = G__2648;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2646 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2646__delegate.call(this, x, y, more);
};
G__2646.cljs$lang$maxFixedArity = 2;
G__2646.cljs$lang$applyTo = (function (arglist__2649){
var x = cljs.core.first(arglist__2649);
var y = cljs.core.first(cljs.core.next(arglist__2649));
var more = cljs.core.rest(cljs.core.next(arglist__2649));
return G__2646__delegate.call(this, x, y, more);
});
return G__2646;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2642.call(this,x);
case  2 :
return distinct_QMARK___2643.call(this,x,y);
default:
return distinct_QMARK___2644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2644.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2650 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2650)))
{return r__2650;
} else
{if(cljs.core.truth_(r__2650))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2652 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2653 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2651 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2651,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2651);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2652.call(this,comp);
case  2 :
return sort__2653.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2655 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2656 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2655.call(this,keyfn,comp);
case  3 :
return sort_by__2656.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2658 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2659 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2658.call(this,f,val);
case  3 :
return reduce__2659.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2665 = (function (f,coll){
var temp__3695__auto____2661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2661))
{var s__2662 = temp__3695__auto____2661;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2662),cljs.core.next.call(null,s__2662));
} else
{return f.call(null);
}
});
var seq_reduce__2666 = (function (f,val,coll){
var val__2663 = val;
var coll__2664 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2664))
{{
var G__2668 = f.call(null,val__2663,cljs.core.first.call(null,coll__2664));
var G__2669 = cljs.core.next.call(null,coll__2664);
val__2663 = G__2668;
coll__2664 = G__2669;
continue;
}
} else
{return val__2663;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2665.call(this,f,val);
case  3 :
return seq_reduce__2666.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2670 = null;
var G__2670__2671 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2670__2672 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2670 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2670__2671.call(this,coll,f);
case  3 :
return G__2670__2672.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2670;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2674 = (function (){
return 0;
});
var _PLUS___2675 = (function (x){
return x;
});
var _PLUS___2676 = (function (x,y){
return (x + y);
});
var _PLUS___2677 = (function() { 
var G__2679__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2679 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2679__delegate.call(this, x, y, more);
};
G__2679.cljs$lang$maxFixedArity = 2;
G__2679.cljs$lang$applyTo = (function (arglist__2680){
var x = cljs.core.first(arglist__2680);
var y = cljs.core.first(cljs.core.next(arglist__2680));
var more = cljs.core.rest(cljs.core.next(arglist__2680));
return G__2679__delegate.call(this, x, y, more);
});
return G__2679;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2674.call(this);
case  1 :
return _PLUS___2675.call(this,x);
case  2 :
return _PLUS___2676.call(this,x,y);
default:
return _PLUS___2677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2677.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2681 = (function (x){
return (- x);
});
var ___2682 = (function (x,y){
return (x - y);
});
var ___2683 = (function() { 
var G__2685__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2685 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2685__delegate.call(this, x, y, more);
};
G__2685.cljs$lang$maxFixedArity = 2;
G__2685.cljs$lang$applyTo = (function (arglist__2686){
var x = cljs.core.first(arglist__2686);
var y = cljs.core.first(cljs.core.next(arglist__2686));
var more = cljs.core.rest(cljs.core.next(arglist__2686));
return G__2685__delegate.call(this, x, y, more);
});
return G__2685;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2681.call(this,x);
case  2 :
return ___2682.call(this,x,y);
default:
return ___2683.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2683.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2687 = (function (){
return 1;
});
var _STAR___2688 = (function (x){
return x;
});
var _STAR___2689 = (function (x,y){
return (x * y);
});
var _STAR___2690 = (function() { 
var G__2692__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2692 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2692__delegate.call(this, x, y, more);
};
G__2692.cljs$lang$maxFixedArity = 2;
G__2692.cljs$lang$applyTo = (function (arglist__2693){
var x = cljs.core.first(arglist__2693);
var y = cljs.core.first(cljs.core.next(arglist__2693));
var more = cljs.core.rest(cljs.core.next(arglist__2693));
return G__2692__delegate.call(this, x, y, more);
});
return G__2692;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2687.call(this);
case  1 :
return _STAR___2688.call(this,x);
case  2 :
return _STAR___2689.call(this,x,y);
default:
return _STAR___2690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2690.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2694 = (function (x){
return (1 / x);
});
var _SLASH___2695 = (function (x,y){
return (x / y);
});
var _SLASH___2696 = (function() { 
var G__2698__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2698 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2698__delegate.call(this, x, y, more);
};
G__2698.cljs$lang$maxFixedArity = 2;
G__2698.cljs$lang$applyTo = (function (arglist__2699){
var x = cljs.core.first(arglist__2699);
var y = cljs.core.first(cljs.core.next(arglist__2699));
var more = cljs.core.rest(cljs.core.next(arglist__2699));
return G__2698__delegate.call(this, x, y, more);
});
return G__2698;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2694.call(this,x);
case  2 :
return _SLASH___2695.call(this,x,y);
default:
return _SLASH___2696.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2696.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2700 = (function (x){
return true;
});
var _LT___2701 = (function (x,y){
return (x < y);
});
var _LT___2702 = (function() { 
var G__2704__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2705 = y;
var G__2706 = cljs.core.first.call(null,more);
var G__2707 = cljs.core.next.call(null,more);
x = G__2705;
y = G__2706;
more = G__2707;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2704 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2704__delegate.call(this, x, y, more);
};
G__2704.cljs$lang$maxFixedArity = 2;
G__2704.cljs$lang$applyTo = (function (arglist__2708){
var x = cljs.core.first(arglist__2708);
var y = cljs.core.first(cljs.core.next(arglist__2708));
var more = cljs.core.rest(cljs.core.next(arglist__2708));
return G__2704__delegate.call(this, x, y, more);
});
return G__2704;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2700.call(this,x);
case  2 :
return _LT___2701.call(this,x,y);
default:
return _LT___2702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2702.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2709 = (function (x){
return true;
});
var _LT__EQ___2710 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2711 = (function() { 
var G__2713__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2714 = y;
var G__2715 = cljs.core.first.call(null,more);
var G__2716 = cljs.core.next.call(null,more);
x = G__2714;
y = G__2715;
more = G__2716;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2713 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2713__delegate.call(this, x, y, more);
};
G__2713.cljs$lang$maxFixedArity = 2;
G__2713.cljs$lang$applyTo = (function (arglist__2717){
var x = cljs.core.first(arglist__2717);
var y = cljs.core.first(cljs.core.next(arglist__2717));
var more = cljs.core.rest(cljs.core.next(arglist__2717));
return G__2713__delegate.call(this, x, y, more);
});
return G__2713;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2709.call(this,x);
case  2 :
return _LT__EQ___2710.call(this,x,y);
default:
return _LT__EQ___2711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2711.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2718 = (function (x){
return true;
});
var _GT___2719 = (function (x,y){
return (x > y);
});
var _GT___2720 = (function() { 
var G__2722__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2723 = y;
var G__2724 = cljs.core.first.call(null,more);
var G__2725 = cljs.core.next.call(null,more);
x = G__2723;
y = G__2724;
more = G__2725;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2722 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2722__delegate.call(this, x, y, more);
};
G__2722.cljs$lang$maxFixedArity = 2;
G__2722.cljs$lang$applyTo = (function (arglist__2726){
var x = cljs.core.first(arglist__2726);
var y = cljs.core.first(cljs.core.next(arglist__2726));
var more = cljs.core.rest(cljs.core.next(arglist__2726));
return G__2722__delegate.call(this, x, y, more);
});
return G__2722;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2718.call(this,x);
case  2 :
return _GT___2719.call(this,x,y);
default:
return _GT___2720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2720.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2727 = (function (x){
return true;
});
var _GT__EQ___2728 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2729 = (function() { 
var G__2731__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2732 = y;
var G__2733 = cljs.core.first.call(null,more);
var G__2734 = cljs.core.next.call(null,more);
x = G__2732;
y = G__2733;
more = G__2734;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2731 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2731__delegate.call(this, x, y, more);
};
G__2731.cljs$lang$maxFixedArity = 2;
G__2731.cljs$lang$applyTo = (function (arglist__2735){
var x = cljs.core.first(arglist__2735);
var y = cljs.core.first(cljs.core.next(arglist__2735));
var more = cljs.core.rest(cljs.core.next(arglist__2735));
return G__2731__delegate.call(this, x, y, more);
});
return G__2731;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2727.call(this,x);
case  2 :
return _GT__EQ___2728.call(this,x,y);
default:
return _GT__EQ___2729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2729.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2736 = (function (x){
return x;
});
var max__2737 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2738 = (function() { 
var G__2740__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2740 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2740__delegate.call(this, x, y, more);
};
G__2740.cljs$lang$maxFixedArity = 2;
G__2740.cljs$lang$applyTo = (function (arglist__2741){
var x = cljs.core.first(arglist__2741);
var y = cljs.core.first(cljs.core.next(arglist__2741));
var more = cljs.core.rest(cljs.core.next(arglist__2741));
return G__2740__delegate.call(this, x, y, more);
});
return G__2740;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2736.call(this,x);
case  2 :
return max__2737.call(this,x,y);
default:
return max__2738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2738.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2742 = (function (x){
return x;
});
var min__2743 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2744 = (function() { 
var G__2746__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2746__delegate.call(this, x, y, more);
};
G__2746.cljs$lang$maxFixedArity = 2;
G__2746.cljs$lang$applyTo = (function (arglist__2747){
var x = cljs.core.first(arglist__2747);
var y = cljs.core.first(cljs.core.next(arglist__2747));
var more = cljs.core.rest(cljs.core.next(arglist__2747));
return G__2746__delegate.call(this, x, y, more);
});
return G__2746;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2742.call(this,x);
case  2 :
return min__2743.call(this,x,y);
default:
return min__2744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2744.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2748 = (n % d);

return cljs.core.fix.call(null,((n - rem__2748) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2749 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2749));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2750 = (function (){
return Math.random.call(null);
});
var rand__2751 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2750.call(this);
case  1 :
return rand__2751.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2753 = (function (x){
return true;
});
var _EQ__EQ___2754 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2755 = (function() { 
var G__2757__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2758 = y;
var G__2759 = cljs.core.first.call(null,more);
var G__2760 = cljs.core.next.call(null,more);
x = G__2758;
y = G__2759;
more = G__2760;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2757 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2757__delegate.call(this, x, y, more);
};
G__2757.cljs$lang$maxFixedArity = 2;
G__2757.cljs$lang$applyTo = (function (arglist__2761){
var x = cljs.core.first(arglist__2761);
var y = cljs.core.first(cljs.core.next(arglist__2761));
var more = cljs.core.rest(cljs.core.next(arglist__2761));
return G__2757__delegate.call(this, x, y, more);
});
return G__2757;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2753.call(this,x);
case  2 :
return _EQ__EQ___2754.call(this,x,y);
default:
return _EQ__EQ___2755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2755.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2762 = n;
var xs__2763 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2764 = xs__2763;

if(cljs.core.truth_(and__3546__auto____2764))
{return (n__2762 > 0);
} else
{return and__3546__auto____2764;
}
})()))
{{
var G__2765 = (n__2762 - 1);
var G__2766 = cljs.core.next.call(null,xs__2763);
n__2762 = G__2765;
xs__2763 = G__2766;
continue;
}
} else
{return xs__2763;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2771 = null;
var G__2771__2772 = (function (coll,n){
var temp__3695__auto____2767 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2767))
{var xs__2768 = temp__3695__auto____2767;

return cljs.core.first.call(null,xs__2768);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2771__2773 = (function (coll,n,not_found){
var temp__3695__auto____2769 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2769))
{var xs__2770 = temp__3695__auto____2769;

return cljs.core.first.call(null,xs__2770);
} else
{return not_found;
}
});
G__2771 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2771__2772.call(this,coll,n);
case  3 :
return G__2771__2773.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2771;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2775 = (function (){
return "";
});
var str__2776 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2777 = (function() { 
var G__2779__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2780 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2781 = cljs.core.next.call(null,more);
sb = G__2780;
more = G__2781;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2779 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2779__delegate.call(this, x, ys);
};
G__2779.cljs$lang$maxFixedArity = 1;
G__2779.cljs$lang$applyTo = (function (arglist__2782){
var x = cljs.core.first(arglist__2782);
var ys = cljs.core.rest(arglist__2782);
return G__2779__delegate.call(this, x, ys);
});
return G__2779;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2775.call(this);
case  1 :
return str__2776.call(this,x);
default:
return str__2777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2777.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2783 = (function (s,start){
return s.substring(start);
});
var subs__2784 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2783.call(this,s,start);
case  3 :
return subs__2784.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2786 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2787 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2786.call(this,ns);
case  2 :
return symbol__2787.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2789 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2790 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2789.call(this,ns);
case  2 :
return keyword__2790.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2792 = cljs.core.seq.call(null,x);
var ys__2793 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2792)))
{return cljs.core.nil_QMARK_.call(null,ys__2793);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2793)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2792),cljs.core.first.call(null,ys__2793))))
{{
var G__2794 = cljs.core.next.call(null,xs__2792);
var G__2795 = cljs.core.next.call(null,ys__2793);
xs__2792 = G__2794;
ys__2793 = G__2795;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2796_SHARP_,p2__2797_SHARP_){
return cljs.core.hash_combine.call(null,p1__2796_SHARP_,cljs.core.hash.call(null,p2__2797_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2798__2799 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2798__2799))
{var G__2801__2803 = cljs.core.first.call(null,G__2798__2799);
var vec__2802__2804 = G__2801__2803;
var key_name__2805 = cljs.core.nth.call(null,vec__2802__2804,0,null);
var f__2806 = cljs.core.nth.call(null,vec__2802__2804,1,null);
var G__2798__2807 = G__2798__2799;

var G__2801__2808 = G__2801__2803;
var G__2798__2809 = G__2798__2807;

while(true){
var vec__2810__2811 = G__2801__2808;
var key_name__2812 = cljs.core.nth.call(null,vec__2810__2811,0,null);
var f__2813 = cljs.core.nth.call(null,vec__2810__2811,1,null);
var G__2798__2814 = G__2798__2809;

var str_name__2815 = cljs.core.name.call(null,key_name__2812);

obj[str_name__2815] = f__2813;
var temp__3698__auto____2816 = cljs.core.next.call(null,G__2798__2814);

if(cljs.core.truth_(temp__3698__auto____2816))
{var G__2798__2817 = temp__3698__auto____2816;

{
var G__2818 = cljs.core.first.call(null,G__2798__2817);
var G__2819 = G__2798__2817;
G__2801__2808 = G__2818;
G__2798__2809 = G__2819;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2820 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2821 = this;
return (new cljs.core.List(this__2821.meta,o,coll,(this__2821.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2822 = this;
return this__2822.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2823 = this;
return this__2823.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2824 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2825 = this;
return this__2825.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2826 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2827 = this;
return (new cljs.core.List(meta,this__2827.first,this__2827.rest,this__2827.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2828 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2829 = this;
return this__2829.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2830 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2831 = this;
return this__2831.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2832 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2833 = this;
return (new cljs.core.List(this__2833.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2834 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2835 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2836 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2837 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2838 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2839 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2840 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2841 = this;
return this__2841.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2842 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2843 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2844){
var items = cljs.core.seq( arglist__2844 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2845 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2846 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2847 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2848 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2848.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2849 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2850 = this;
return this__2850.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2851 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2851.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2851.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2852 = this;
return this__2852.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2853 = this;
return (new cljs.core.Cons(meta,this__2853.first,this__2853.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2854 = null;
var G__2854__2855 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2854__2856 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2854 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2854__2855.call(this,string,f);
case  3 :
return G__2854__2856.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2854;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2858 = null;
var G__2858__2859 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2858__2860 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2858 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2858__2859.call(this,string,k);
case  3 :
return G__2858__2860.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2858;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2862 = null;
var G__2862__2863 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2862__2864 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2862 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2862__2863.call(this,string,n);
case  3 :
return G__2862__2864.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2862;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2866 = null;
var G__2866__2867 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2866__2868 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2866 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2866__2867.call(this,_,coll);
case  3 :
return G__2866__2868.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2866;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2870 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2870;
} else
{lazy_seq.x = x__2870.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2871 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2872 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2873 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2874 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2874.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2875 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2876 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2877 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2878 = this;
return this__2878.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2879 = this;
return (new cljs.core.LazySeq(meta,this__2879.realized,this__2879.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2880 = cljs.core.array.call(null);

var s__2881 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2881)))
{ary__2880.push(cljs.core.first.call(null,s__2881));
{
var G__2882 = cljs.core.next.call(null,s__2881);
s__2881 = G__2882;
continue;
}
} else
{return ary__2880;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2883 = s;
var i__2884 = n;
var sum__2885 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2886 = (i__2884 > 0);

if(cljs.core.truth_(and__3546__auto____2886))
{return cljs.core.seq.call(null,s__2883);
} else
{return and__3546__auto____2886;
}
})()))
{{
var G__2887 = cljs.core.next.call(null,s__2883);
var G__2888 = (i__2884 - 1);
var G__2889 = (sum__2885 + 1);
s__2883 = G__2887;
i__2884 = G__2888;
sum__2885 = G__2889;
continue;
}
} else
{return sum__2885;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2893 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2894 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2895 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2890 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2890))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2890),concat.call(null,cljs.core.rest.call(null,s__2890),y));
} else
{return y;
}
})));
});
var concat__2896 = (function() { 
var G__2898__delegate = function (x,y,zs){
var cat__2892 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2891 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2891))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2891),cat.call(null,cljs.core.rest.call(null,xys__2891),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2892.call(null,concat.call(null,x,y),zs);
};
var G__2898 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2898__delegate.call(this, x, y, zs);
};
G__2898.cljs$lang$maxFixedArity = 2;
G__2898.cljs$lang$applyTo = (function (arglist__2899){
var x = cljs.core.first(arglist__2899);
var y = cljs.core.first(cljs.core.next(arglist__2899));
var zs = cljs.core.rest(cljs.core.next(arglist__2899));
return G__2898__delegate.call(this, x, y, zs);
});
return G__2898;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2893.call(this);
case  1 :
return concat__2894.call(this,x);
case  2 :
return concat__2895.call(this,x,y);
default:
return concat__2896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2896.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2900 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2901 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2902 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2903 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2904 = (function() { 
var G__2906__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2906 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2906__delegate.call(this, a, b, c, d, more);
};
G__2906.cljs$lang$maxFixedArity = 4;
G__2906.cljs$lang$applyTo = (function (arglist__2907){
var a = cljs.core.first(arglist__2907);
var b = cljs.core.first(cljs.core.next(arglist__2907));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2907)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2907))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2907))));
return G__2906__delegate.call(this, a, b, c, d, more);
});
return G__2906;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2900.call(this,a);
case  2 :
return list_STAR___2901.call(this,a,b);
case  3 :
return list_STAR___2902.call(this,a,b,c);
case  4 :
return list_STAR___2903.call(this,a,b,c,d);
default:
return list_STAR___2904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2904.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2917 = (function (f,args){
var fixed_arity__2908 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2908 + 1)) <= fixed_arity__2908)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2918 = (function (f,x,args){
var arglist__2909 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2910 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2909,fixed_arity__2910) <= fixed_arity__2910)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2909));
} else
{return f.cljs$lang$applyTo(arglist__2909);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2909));
}
});
var apply__2919 = (function (f,x,y,args){
var arglist__2911 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2912 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2911,fixed_arity__2912) <= fixed_arity__2912)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2911));
} else
{return f.cljs$lang$applyTo(arglist__2911);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2911));
}
});
var apply__2920 = (function (f,x,y,z,args){
var arglist__2913 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2914 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2913,fixed_arity__2914) <= fixed_arity__2914)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2913));
} else
{return f.cljs$lang$applyTo(arglist__2913);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2913));
}
});
var apply__2921 = (function() { 
var G__2923__delegate = function (f,a,b,c,d,args){
var arglist__2915 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2916 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2915,fixed_arity__2916) <= fixed_arity__2916)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2915));
} else
{return f.cljs$lang$applyTo(arglist__2915);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2915));
}
};
var G__2923 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2923__delegate.call(this, f, a, b, c, d, args);
};
G__2923.cljs$lang$maxFixedArity = 5;
G__2923.cljs$lang$applyTo = (function (arglist__2924){
var f = cljs.core.first(arglist__2924);
var a = cljs.core.first(cljs.core.next(arglist__2924));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2924)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2924))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2924)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2924)))));
return G__2923__delegate.call(this, f, a, b, c, d, args);
});
return G__2923;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2917.call(this,f,a);
case  3 :
return apply__2918.call(this,f,a,b);
case  4 :
return apply__2919.call(this,f,a,b,c);
case  5 :
return apply__2920.call(this,f,a,b,c,d);
default:
return apply__2921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2921.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2925){
var obj = cljs.core.first(arglist__2925);
var f = cljs.core.first(cljs.core.next(arglist__2925));
var args = cljs.core.rest(cljs.core.next(arglist__2925));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2926 = (function (x){
return false;
});
var not_EQ___2927 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2928 = (function() { 
var G__2930__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2930 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2930__delegate.call(this, x, y, more);
};
G__2930.cljs$lang$maxFixedArity = 2;
G__2930.cljs$lang$applyTo = (function (arglist__2931){
var x = cljs.core.first(arglist__2931);
var y = cljs.core.first(cljs.core.next(arglist__2931));
var more = cljs.core.rest(cljs.core.next(arglist__2931));
return G__2930__delegate.call(this, x, y, more);
});
return G__2930;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2926.call(this,x);
case  2 :
return not_EQ___2927.call(this,x,y);
default:
return not_EQ___2928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2928.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2932 = pred;
var G__2933 = cljs.core.next.call(null,coll);
pred = G__2932;
coll = G__2933;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____2934 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2934))
{return or__3548__auto____2934;
} else
{{
var G__2935 = pred;
var G__2936 = cljs.core.next.call(null,coll);
pred = G__2935;
coll = G__2936;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2937 = null;
var G__2937__2938 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2937__2939 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2937__2940 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2937__2941 = (function() { 
var G__2943__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2943 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2943__delegate.call(this, x, y, zs);
};
G__2943.cljs$lang$maxFixedArity = 2;
G__2943.cljs$lang$applyTo = (function (arglist__2944){
var x = cljs.core.first(arglist__2944);
var y = cljs.core.first(cljs.core.next(arglist__2944));
var zs = cljs.core.rest(cljs.core.next(arglist__2944));
return G__2943__delegate.call(this, x, y, zs);
});
return G__2943;
})()
;
G__2937 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2937__2938.call(this);
case  1 :
return G__2937__2939.call(this,x);
case  2 :
return G__2937__2940.call(this,x,y);
default:
return G__2937__2941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2937.cljs$lang$maxFixedArity = 2;
G__2937.cljs$lang$applyTo = G__2937__2941.cljs$lang$applyTo;
return G__2937;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2945__delegate = function (args){
return x;
};
var G__2945 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2945__delegate.call(this, args);
};
G__2945.cljs$lang$maxFixedArity = 0;
G__2945.cljs$lang$applyTo = (function (arglist__2946){
var args = cljs.core.seq( arglist__2946 );;
return G__2945__delegate.call(this, args);
});
return G__2945;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2950 = (function (){
return cljs.core.identity;
});
var comp__2951 = (function (f){
return f;
});
var comp__2952 = (function (f,g){
return (function() {
var G__2956 = null;
var G__2956__2957 = (function (){
return f.call(null,g.call(null));
});
var G__2956__2958 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2956__2959 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2956__2960 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2956__2961 = (function() { 
var G__2963__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2963 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2963__delegate.call(this, x, y, z, args);
};
G__2963.cljs$lang$maxFixedArity = 3;
G__2963.cljs$lang$applyTo = (function (arglist__2964){
var x = cljs.core.first(arglist__2964);
var y = cljs.core.first(cljs.core.next(arglist__2964));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2964)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2964)));
return G__2963__delegate.call(this, x, y, z, args);
});
return G__2963;
})()
;
G__2956 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2956__2957.call(this);
case  1 :
return G__2956__2958.call(this,x);
case  2 :
return G__2956__2959.call(this,x,y);
case  3 :
return G__2956__2960.call(this,x,y,z);
default:
return G__2956__2961.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2956.cljs$lang$maxFixedArity = 3;
G__2956.cljs$lang$applyTo = G__2956__2961.cljs$lang$applyTo;
return G__2956;
})()
});
var comp__2953 = (function (f,g,h){
return (function() {
var G__2965 = null;
var G__2965__2966 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2965__2967 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2965__2968 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2965__2969 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2965__2970 = (function() { 
var G__2972__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2972 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2972__delegate.call(this, x, y, z, args);
};
G__2972.cljs$lang$maxFixedArity = 3;
G__2972.cljs$lang$applyTo = (function (arglist__2973){
var x = cljs.core.first(arglist__2973);
var y = cljs.core.first(cljs.core.next(arglist__2973));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2973)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2973)));
return G__2972__delegate.call(this, x, y, z, args);
});
return G__2972;
})()
;
G__2965 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2965__2966.call(this);
case  1 :
return G__2965__2967.call(this,x);
case  2 :
return G__2965__2968.call(this,x,y);
case  3 :
return G__2965__2969.call(this,x,y,z);
default:
return G__2965__2970.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2965.cljs$lang$maxFixedArity = 3;
G__2965.cljs$lang$applyTo = G__2965__2970.cljs$lang$applyTo;
return G__2965;
})()
});
var comp__2954 = (function() { 
var G__2974__delegate = function (f1,f2,f3,fs){
var fs__2947 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2975__delegate = function (args){
var ret__2948 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2947),args);
var fs__2949 = cljs.core.next.call(null,fs__2947);

while(true){
if(cljs.core.truth_(fs__2949))
{{
var G__2976 = cljs.core.first.call(null,fs__2949).call(null,ret__2948);
var G__2977 = cljs.core.next.call(null,fs__2949);
ret__2948 = G__2976;
fs__2949 = G__2977;
continue;
}
} else
{return ret__2948;
}
break;
}
};
var G__2975 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2975__delegate.call(this, args);
};
G__2975.cljs$lang$maxFixedArity = 0;
G__2975.cljs$lang$applyTo = (function (arglist__2978){
var args = cljs.core.seq( arglist__2978 );;
return G__2975__delegate.call(this, args);
});
return G__2975;
})()
;
};
var G__2974 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2974__delegate.call(this, f1, f2, f3, fs);
};
G__2974.cljs$lang$maxFixedArity = 3;
G__2974.cljs$lang$applyTo = (function (arglist__2979){
var f1 = cljs.core.first(arglist__2979);
var f2 = cljs.core.first(cljs.core.next(arglist__2979));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2979)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2979)));
return G__2974__delegate.call(this, f1, f2, f3, fs);
});
return G__2974;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2950.call(this);
case  1 :
return comp__2951.call(this,f1);
case  2 :
return comp__2952.call(this,f1,f2);
case  3 :
return comp__2953.call(this,f1,f2,f3);
default:
return comp__2954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2954.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2980 = (function (f,arg1){
return (function() { 
var G__2985__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2985 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2985__delegate.call(this, args);
};
G__2985.cljs$lang$maxFixedArity = 0;
G__2985.cljs$lang$applyTo = (function (arglist__2986){
var args = cljs.core.seq( arglist__2986 );;
return G__2985__delegate.call(this, args);
});
return G__2985;
})()
;
});
var partial__2981 = (function (f,arg1,arg2){
return (function() { 
var G__2987__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2987 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2987__delegate.call(this, args);
};
G__2987.cljs$lang$maxFixedArity = 0;
G__2987.cljs$lang$applyTo = (function (arglist__2988){
var args = cljs.core.seq( arglist__2988 );;
return G__2987__delegate.call(this, args);
});
return G__2987;
})()
;
});
var partial__2982 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2989__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2989 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2989__delegate.call(this, args);
};
G__2989.cljs$lang$maxFixedArity = 0;
G__2989.cljs$lang$applyTo = (function (arglist__2990){
var args = cljs.core.seq( arglist__2990 );;
return G__2989__delegate.call(this, args);
});
return G__2989;
})()
;
});
var partial__2983 = (function() { 
var G__2991__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2992__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2992 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2992__delegate.call(this, args);
};
G__2992.cljs$lang$maxFixedArity = 0;
G__2992.cljs$lang$applyTo = (function (arglist__2993){
var args = cljs.core.seq( arglist__2993 );;
return G__2992__delegate.call(this, args);
});
return G__2992;
})()
;
};
var G__2991 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2991__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2991.cljs$lang$maxFixedArity = 4;
G__2991.cljs$lang$applyTo = (function (arglist__2994){
var f = cljs.core.first(arglist__2994);
var arg1 = cljs.core.first(cljs.core.next(arglist__2994));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2994)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2994))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2994))));
return G__2991__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2991;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2980.call(this,f,arg1);
case  3 :
return partial__2981.call(this,f,arg1,arg2);
case  4 :
return partial__2982.call(this,f,arg1,arg2,arg3);
default:
return partial__2983.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2983.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2995 = (function (f,x){
return (function() {
var G__2999 = null;
var G__2999__3000 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2999__3001 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2999__3002 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2999__3003 = (function() { 
var G__3005__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3005 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3005__delegate.call(this, a, b, c, ds);
};
G__3005.cljs$lang$maxFixedArity = 3;
G__3005.cljs$lang$applyTo = (function (arglist__3006){
var a = cljs.core.first(arglist__3006);
var b = cljs.core.first(cljs.core.next(arglist__3006));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3006)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3006)));
return G__3005__delegate.call(this, a, b, c, ds);
});
return G__3005;
})()
;
G__2999 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2999__3000.call(this,a);
case  2 :
return G__2999__3001.call(this,a,b);
case  3 :
return G__2999__3002.call(this,a,b,c);
default:
return G__2999__3003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2999.cljs$lang$maxFixedArity = 3;
G__2999.cljs$lang$applyTo = G__2999__3003.cljs$lang$applyTo;
return G__2999;
})()
});
var fnil__2996 = (function (f,x,y){
return (function() {
var G__3007 = null;
var G__3007__3008 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3007__3009 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3007__3010 = (function() { 
var G__3012__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3012 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3012__delegate.call(this, a, b, c, ds);
};
G__3012.cljs$lang$maxFixedArity = 3;
G__3012.cljs$lang$applyTo = (function (arglist__3013){
var a = cljs.core.first(arglist__3013);
var b = cljs.core.first(cljs.core.next(arglist__3013));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3013)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3013)));
return G__3012__delegate.call(this, a, b, c, ds);
});
return G__3012;
})()
;
G__3007 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3007__3008.call(this,a,b);
case  3 :
return G__3007__3009.call(this,a,b,c);
default:
return G__3007__3010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3007.cljs$lang$maxFixedArity = 3;
G__3007.cljs$lang$applyTo = G__3007__3010.cljs$lang$applyTo;
return G__3007;
})()
});
var fnil__2997 = (function (f,x,y,z){
return (function() {
var G__3014 = null;
var G__3014__3015 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3014__3016 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3014__3017 = (function() { 
var G__3019__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3019 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3019__delegate.call(this, a, b, c, ds);
};
G__3019.cljs$lang$maxFixedArity = 3;
G__3019.cljs$lang$applyTo = (function (arglist__3020){
var a = cljs.core.first(arglist__3020);
var b = cljs.core.first(cljs.core.next(arglist__3020));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3020)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3020)));
return G__3019__delegate.call(this, a, b, c, ds);
});
return G__3019;
})()
;
G__3014 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3014__3015.call(this,a,b);
case  3 :
return G__3014__3016.call(this,a,b,c);
default:
return G__3014__3017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3014.cljs$lang$maxFixedArity = 3;
G__3014.cljs$lang$applyTo = G__3014__3017.cljs$lang$applyTo;
return G__3014;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2995.call(this,f,x);
case  3 :
return fnil__2996.call(this,f,x,y);
case  4 :
return fnil__2997.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3023 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3021 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3021))
{var s__3022 = temp__3698__auto____3021;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3022)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3022)));
} else
{return null;
}
})));
});

return mapi__3023.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3024 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3024))
{var s__3025 = temp__3698__auto____3024;

var x__3026 = f.call(null,cljs.core.first.call(null,s__3025));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3026)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3025));
} else
{return cljs.core.cons.call(null,x__3026,keep.call(null,f,cljs.core.rest.call(null,s__3025)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3036 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3033 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3033))
{var s__3034 = temp__3698__auto____3033;

var x__3035 = f.call(null,idx,cljs.core.first.call(null,s__3034));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3035)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3034));
} else
{return cljs.core.cons.call(null,x__3035,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3034)));
}
} else
{return null;
}
})));
});

return keepi__3036.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3081 = (function (p){
return (function() {
var ep1 = null;
var ep1__3086 = (function (){
return true;
});
var ep1__3087 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3088 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3043 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3043))
{return p.call(null,y);
} else
{return and__3546__auto____3043;
}
})());
});
var ep1__3089 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3044 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3044))
{var and__3546__auto____3045 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3045))
{return p.call(null,z);
} else
{return and__3546__auto____3045;
}
} else
{return and__3546__auto____3044;
}
})());
});
var ep1__3090 = (function() { 
var G__3092__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3046 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3046))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3046;
}
})());
};
var G__3092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3092__delegate.call(this, x, y, z, args);
};
G__3092.cljs$lang$maxFixedArity = 3;
G__3092.cljs$lang$applyTo = (function (arglist__3093){
var x = cljs.core.first(arglist__3093);
var y = cljs.core.first(cljs.core.next(arglist__3093));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3093)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3093)));
return G__3092__delegate.call(this, x, y, z, args);
});
return G__3092;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3086.call(this);
case  1 :
return ep1__3087.call(this,x);
case  2 :
return ep1__3088.call(this,x,y);
case  3 :
return ep1__3089.call(this,x,y,z);
default:
return ep1__3090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3090.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3082 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3094 = (function (){
return true;
});
var ep2__3095 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3047 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3047))
{return p2.call(null,x);
} else
{return and__3546__auto____3047;
}
})());
});
var ep2__3096 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3048 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3048))
{var and__3546__auto____3049 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3049))
{var and__3546__auto____3050 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3050))
{return p2.call(null,y);
} else
{return and__3546__auto____3050;
}
} else
{return and__3546__auto____3049;
}
} else
{return and__3546__auto____3048;
}
})());
});
var ep2__3097 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3051 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3051))
{var and__3546__auto____3052 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3052))
{var and__3546__auto____3053 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3053))
{var and__3546__auto____3054 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3054))
{var and__3546__auto____3055 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3055))
{return p2.call(null,z);
} else
{return and__3546__auto____3055;
}
} else
{return and__3546__auto____3054;
}
} else
{return and__3546__auto____3053;
}
} else
{return and__3546__auto____3052;
}
} else
{return and__3546__auto____3051;
}
})());
});
var ep2__3098 = (function() { 
var G__3100__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3056 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3056))
{return cljs.core.every_QMARK_.call(null,(function (p1__3027_SHARP_){
var and__3546__auto____3057 = p1.call(null,p1__3027_SHARP_);

if(cljs.core.truth_(and__3546__auto____3057))
{return p2.call(null,p1__3027_SHARP_);
} else
{return and__3546__auto____3057;
}
}),args);
} else
{return and__3546__auto____3056;
}
})());
};
var G__3100 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3100__delegate.call(this, x, y, z, args);
};
G__3100.cljs$lang$maxFixedArity = 3;
G__3100.cljs$lang$applyTo = (function (arglist__3101){
var x = cljs.core.first(arglist__3101);
var y = cljs.core.first(cljs.core.next(arglist__3101));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3101)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3101)));
return G__3100__delegate.call(this, x, y, z, args);
});
return G__3100;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3094.call(this);
case  1 :
return ep2__3095.call(this,x);
case  2 :
return ep2__3096.call(this,x,y);
case  3 :
return ep2__3097.call(this,x,y,z);
default:
return ep2__3098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3098.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3083 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3102 = (function (){
return true;
});
var ep3__3103 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3058 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3058))
{var and__3546__auto____3059 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3059))
{return p3.call(null,x);
} else
{return and__3546__auto____3059;
}
} else
{return and__3546__auto____3058;
}
})());
});
var ep3__3104 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3060 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3060))
{var and__3546__auto____3061 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3061))
{var and__3546__auto____3062 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3062))
{var and__3546__auto____3063 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3063))
{var and__3546__auto____3064 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3064))
{return p3.call(null,y);
} else
{return and__3546__auto____3064;
}
} else
{return and__3546__auto____3063;
}
} else
{return and__3546__auto____3062;
}
} else
{return and__3546__auto____3061;
}
} else
{return and__3546__auto____3060;
}
})());
});
var ep3__3105 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3065 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3065))
{var and__3546__auto____3066 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3066))
{var and__3546__auto____3067 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3067))
{var and__3546__auto____3068 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3068))
{var and__3546__auto____3069 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3069))
{var and__3546__auto____3070 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3070))
{var and__3546__auto____3071 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3071))
{var and__3546__auto____3072 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3072))
{return p3.call(null,z);
} else
{return and__3546__auto____3072;
}
} else
{return and__3546__auto____3071;
}
} else
{return and__3546__auto____3070;
}
} else
{return and__3546__auto____3069;
}
} else
{return and__3546__auto____3068;
}
} else
{return and__3546__auto____3067;
}
} else
{return and__3546__auto____3066;
}
} else
{return and__3546__auto____3065;
}
})());
});
var ep3__3106 = (function() { 
var G__3108__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3073 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3073))
{return cljs.core.every_QMARK_.call(null,(function (p1__3028_SHARP_){
var and__3546__auto____3074 = p1.call(null,p1__3028_SHARP_);

if(cljs.core.truth_(and__3546__auto____3074))
{var and__3546__auto____3075 = p2.call(null,p1__3028_SHARP_);

if(cljs.core.truth_(and__3546__auto____3075))
{return p3.call(null,p1__3028_SHARP_);
} else
{return and__3546__auto____3075;
}
} else
{return and__3546__auto____3074;
}
}),args);
} else
{return and__3546__auto____3073;
}
})());
};
var G__3108 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3108__delegate.call(this, x, y, z, args);
};
G__3108.cljs$lang$maxFixedArity = 3;
G__3108.cljs$lang$applyTo = (function (arglist__3109){
var x = cljs.core.first(arglist__3109);
var y = cljs.core.first(cljs.core.next(arglist__3109));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3109)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3109)));
return G__3108__delegate.call(this, x, y, z, args);
});
return G__3108;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3102.call(this);
case  1 :
return ep3__3103.call(this,x);
case  2 :
return ep3__3104.call(this,x,y);
case  3 :
return ep3__3105.call(this,x,y,z);
default:
return ep3__3106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3106.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3084 = (function() { 
var G__3110__delegate = function (p1,p2,p3,ps){
var ps__3076 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3111 = (function (){
return true;
});
var epn__3112 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3029_SHARP_){
return p1__3029_SHARP_.call(null,x);
}),ps__3076);
});
var epn__3113 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3030_SHARP_){
var and__3546__auto____3077 = p1__3030_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3077))
{return p1__3030_SHARP_.call(null,y);
} else
{return and__3546__auto____3077;
}
}),ps__3076);
});
var epn__3114 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3031_SHARP_){
var and__3546__auto____3078 = p1__3031_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3078))
{var and__3546__auto____3079 = p1__3031_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3079))
{return p1__3031_SHARP_.call(null,z);
} else
{return and__3546__auto____3079;
}
} else
{return and__3546__auto____3078;
}
}),ps__3076);
});
var epn__3115 = (function() { 
var G__3117__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3080 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3080))
{return cljs.core.every_QMARK_.call(null,(function (p1__3032_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3032_SHARP_,args);
}),ps__3076);
} else
{return and__3546__auto____3080;
}
})());
};
var G__3117 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3117__delegate.call(this, x, y, z, args);
};
G__3117.cljs$lang$maxFixedArity = 3;
G__3117.cljs$lang$applyTo = (function (arglist__3118){
var x = cljs.core.first(arglist__3118);
var y = cljs.core.first(cljs.core.next(arglist__3118));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3118)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3118)));
return G__3117__delegate.call(this, x, y, z, args);
});
return G__3117;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3111.call(this);
case  1 :
return epn__3112.call(this,x);
case  2 :
return epn__3113.call(this,x,y);
case  3 :
return epn__3114.call(this,x,y,z);
default:
return epn__3115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3115.cljs$lang$applyTo;
return epn;
})()
};
var G__3110 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3110__delegate.call(this, p1, p2, p3, ps);
};
G__3110.cljs$lang$maxFixedArity = 3;
G__3110.cljs$lang$applyTo = (function (arglist__3119){
var p1 = cljs.core.first(arglist__3119);
var p2 = cljs.core.first(cljs.core.next(arglist__3119));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3119)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3119)));
return G__3110__delegate.call(this, p1, p2, p3, ps);
});
return G__3110;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3081.call(this,p1);
case  2 :
return every_pred__3082.call(this,p1,p2);
case  3 :
return every_pred__3083.call(this,p1,p2,p3);
default:
return every_pred__3084.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3084.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3159 = (function (p){
return (function() {
var sp1 = null;
var sp1__3164 = (function (){
return null;
});
var sp1__3165 = (function (x){
return p.call(null,x);
});
var sp1__3166 = (function (x,y){
var or__3548__auto____3121 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{return p.call(null,y);
}
});
var sp1__3167 = (function (x,y,z){
var or__3548__auto____3122 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3122))
{return or__3548__auto____3122;
} else
{var or__3548__auto____3123 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3123))
{return or__3548__auto____3123;
} else
{return p.call(null,z);
}
}
});
var sp1__3168 = (function() { 
var G__3170__delegate = function (x,y,z,args){
var or__3548__auto____3124 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3170__delegate.call(this, x, y, z, args);
};
G__3170.cljs$lang$maxFixedArity = 3;
G__3170.cljs$lang$applyTo = (function (arglist__3171){
var x = cljs.core.first(arglist__3171);
var y = cljs.core.first(cljs.core.next(arglist__3171));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3171)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3171)));
return G__3170__delegate.call(this, x, y, z, args);
});
return G__3170;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3164.call(this);
case  1 :
return sp1__3165.call(this,x);
case  2 :
return sp1__3166.call(this,x,y);
case  3 :
return sp1__3167.call(this,x,y,z);
default:
return sp1__3168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3168.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3160 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3172 = (function (){
return null;
});
var sp2__3173 = (function (x){
var or__3548__auto____3125 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3125))
{return or__3548__auto____3125;
} else
{return p2.call(null,x);
}
});
var sp2__3174 = (function (x,y){
var or__3548__auto____3126 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3126))
{return or__3548__auto____3126;
} else
{var or__3548__auto____3127 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{var or__3548__auto____3128 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3128))
{return or__3548__auto____3128;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3175 = (function (x,y,z){
var or__3548__auto____3129 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3129))
{return or__3548__auto____3129;
} else
{var or__3548__auto____3130 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3130))
{return or__3548__auto____3130;
} else
{var or__3548__auto____3131 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3131))
{return or__3548__auto____3131;
} else
{var or__3548__auto____3132 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3132))
{return or__3548__auto____3132;
} else
{var or__3548__auto____3133 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3176 = (function() { 
var G__3178__delegate = function (x,y,z,args){
var or__3548__auto____3134 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3134))
{return or__3548__auto____3134;
} else
{return cljs.core.some.call(null,(function (p1__3037_SHARP_){
var or__3548__auto____3135 = p1.call(null,p1__3037_SHARP_);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{return p2.call(null,p1__3037_SHARP_);
}
}),args);
}
};
var G__3178 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3178__delegate.call(this, x, y, z, args);
};
G__3178.cljs$lang$maxFixedArity = 3;
G__3178.cljs$lang$applyTo = (function (arglist__3179){
var x = cljs.core.first(arglist__3179);
var y = cljs.core.first(cljs.core.next(arglist__3179));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3179)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3179)));
return G__3178__delegate.call(this, x, y, z, args);
});
return G__3178;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3172.call(this);
case  1 :
return sp2__3173.call(this,x);
case  2 :
return sp2__3174.call(this,x,y);
case  3 :
return sp2__3175.call(this,x,y,z);
default:
return sp2__3176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3176.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3161 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3180 = (function (){
return null;
});
var sp3__3181 = (function (x){
var or__3548__auto____3136 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{var or__3548__auto____3137 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3137))
{return or__3548__auto____3137;
} else
{return p3.call(null,x);
}
}
});
var sp3__3182 = (function (x,y){
var or__3548__auto____3138 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{var or__3548__auto____3139 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{var or__3548__auto____3140 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
} else
{var or__3548__auto____3141 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{var or__3548__auto____3142 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3183 = (function (x,y,z){
var or__3548__auto____3143 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{var or__3548__auto____3144 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{var or__3548__auto____3146 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3146))
{return or__3548__auto____3146;
} else
{var or__3548__auto____3147 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3147))
{return or__3548__auto____3147;
} else
{var or__3548__auto____3148 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{var or__3548__auto____3149 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3149))
{return or__3548__auto____3149;
} else
{var or__3548__auto____3150 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3184 = (function() { 
var G__3186__delegate = function (x,y,z,args){
var or__3548__auto____3151 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{return cljs.core.some.call(null,(function (p1__3038_SHARP_){
var or__3548__auto____3152 = p1.call(null,p1__3038_SHARP_);

if(cljs.core.truth_(or__3548__auto____3152))
{return or__3548__auto____3152;
} else
{var or__3548__auto____3153 = p2.call(null,p1__3038_SHARP_);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{return p3.call(null,p1__3038_SHARP_);
}
}
}),args);
}
};
var G__3186 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3186__delegate.call(this, x, y, z, args);
};
G__3186.cljs$lang$maxFixedArity = 3;
G__3186.cljs$lang$applyTo = (function (arglist__3187){
var x = cljs.core.first(arglist__3187);
var y = cljs.core.first(cljs.core.next(arglist__3187));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3187)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3187)));
return G__3186__delegate.call(this, x, y, z, args);
});
return G__3186;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3180.call(this);
case  1 :
return sp3__3181.call(this,x);
case  2 :
return sp3__3182.call(this,x,y);
case  3 :
return sp3__3183.call(this,x,y,z);
default:
return sp3__3184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3184.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3162 = (function() { 
var G__3188__delegate = function (p1,p2,p3,ps){
var ps__3154 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3189 = (function (){
return null;
});
var spn__3190 = (function (x){
return cljs.core.some.call(null,(function (p1__3039_SHARP_){
return p1__3039_SHARP_.call(null,x);
}),ps__3154);
});
var spn__3191 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3040_SHARP_){
var or__3548__auto____3155 = p1__3040_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3155))
{return or__3548__auto____3155;
} else
{return p1__3040_SHARP_.call(null,y);
}
}),ps__3154);
});
var spn__3192 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3041_SHARP_){
var or__3548__auto____3156 = p1__3041_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3156))
{return or__3548__auto____3156;
} else
{var or__3548__auto____3157 = p1__3041_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{return p1__3041_SHARP_.call(null,z);
}
}
}),ps__3154);
});
var spn__3193 = (function() { 
var G__3195__delegate = function (x,y,z,args){
var or__3548__auto____3158 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3158))
{return or__3548__auto____3158;
} else
{return cljs.core.some.call(null,(function (p1__3042_SHARP_){
return cljs.core.some.call(null,p1__3042_SHARP_,args);
}),ps__3154);
}
};
var G__3195 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3195__delegate.call(this, x, y, z, args);
};
G__3195.cljs$lang$maxFixedArity = 3;
G__3195.cljs$lang$applyTo = (function (arglist__3196){
var x = cljs.core.first(arglist__3196);
var y = cljs.core.first(cljs.core.next(arglist__3196));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3196)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3196)));
return G__3195__delegate.call(this, x, y, z, args);
});
return G__3195;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3189.call(this);
case  1 :
return spn__3190.call(this,x);
case  2 :
return spn__3191.call(this,x,y);
case  3 :
return spn__3192.call(this,x,y,z);
default:
return spn__3193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3193.cljs$lang$applyTo;
return spn;
})()
};
var G__3188 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3188__delegate.call(this, p1, p2, p3, ps);
};
G__3188.cljs$lang$maxFixedArity = 3;
G__3188.cljs$lang$applyTo = (function (arglist__3197){
var p1 = cljs.core.first(arglist__3197);
var p2 = cljs.core.first(cljs.core.next(arglist__3197));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3197)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3197)));
return G__3188__delegate.call(this, p1, p2, p3, ps);
});
return G__3188;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3159.call(this,p1);
case  2 :
return some_fn__3160.call(this,p1,p2);
case  3 :
return some_fn__3161.call(this,p1,p2,p3);
default:
return some_fn__3162.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3162.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3210 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3198 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3198))
{var s__3199 = temp__3698__auto____3198;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3199)),map.call(null,f,cljs.core.rest.call(null,s__3199)));
} else
{return null;
}
})));
});
var map__3211 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3200 = cljs.core.seq.call(null,c1);
var s2__3201 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3202 = s1__3200;

if(cljs.core.truth_(and__3546__auto____3202))
{return s2__3201;
} else
{return and__3546__auto____3202;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3200),cljs.core.first.call(null,s2__3201)),map.call(null,f,cljs.core.rest.call(null,s1__3200),cljs.core.rest.call(null,s2__3201)));
} else
{return null;
}
})));
});
var map__3212 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3203 = cljs.core.seq.call(null,c1);
var s2__3204 = cljs.core.seq.call(null,c2);
var s3__3205 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3206 = s1__3203;

if(cljs.core.truth_(and__3546__auto____3206))
{var and__3546__auto____3207 = s2__3204;

if(cljs.core.truth_(and__3546__auto____3207))
{return s3__3205;
} else
{return and__3546__auto____3207;
}
} else
{return and__3546__auto____3206;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3203),cljs.core.first.call(null,s2__3204),cljs.core.first.call(null,s3__3205)),map.call(null,f,cljs.core.rest.call(null,s1__3203),cljs.core.rest.call(null,s2__3204),cljs.core.rest.call(null,s3__3205)));
} else
{return null;
}
})));
});
var map__3213 = (function() { 
var G__3215__delegate = function (f,c1,c2,c3,colls){
var step__3209 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3208 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3208)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3208),step.call(null,map.call(null,cljs.core.rest,ss__3208)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3120_SHARP_){
return cljs.core.apply.call(null,f,p1__3120_SHARP_);
}),step__3209.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3215 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3215__delegate.call(this, f, c1, c2, c3, colls);
};
G__3215.cljs$lang$maxFixedArity = 4;
G__3215.cljs$lang$applyTo = (function (arglist__3216){
var f = cljs.core.first(arglist__3216);
var c1 = cljs.core.first(cljs.core.next(arglist__3216));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3216)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3216))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3216))));
return G__3215__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3215;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3210.call(this,f,c1);
case  3 :
return map__3211.call(this,f,c1,c2);
case  4 :
return map__3212.call(this,f,c1,c2,c3);
default:
return map__3213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3213.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3217))
{var s__3218 = temp__3698__auto____3217;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3218),take.call(null,(n - 1),cljs.core.rest.call(null,s__3218)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3221 = (function (n,coll){
while(true){
var s__3219 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3220 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3220))
{return s__3219;
} else
{return and__3546__auto____3220;
}
})()))
{{
var G__3222 = (n - 1);
var G__3223 = cljs.core.rest.call(null,s__3219);
n = G__3222;
coll = G__3223;
continue;
}
} else
{return s__3219;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3221.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3224 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3225 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3224.call(this,n);
case  2 :
return drop_last__3225.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3227 = cljs.core.seq.call(null,coll);
var lead__3228 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3228))
{{
var G__3229 = cljs.core.next.call(null,s__3227);
var G__3230 = cljs.core.next.call(null,lead__3228);
s__3227 = G__3229;
lead__3228 = G__3230;
continue;
}
} else
{return s__3227;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3233 = (function (pred,coll){
while(true){
var s__3231 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3232 = s__3231;

if(cljs.core.truth_(and__3546__auto____3232))
{return pred.call(null,cljs.core.first.call(null,s__3231));
} else
{return and__3546__auto____3232;
}
})()))
{{
var G__3234 = pred;
var G__3235 = cljs.core.rest.call(null,s__3231);
pred = G__3234;
coll = G__3235;
continue;
}
} else
{return s__3231;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3233.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3236 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3236))
{var s__3237 = temp__3698__auto____3236;

return cljs.core.concat.call(null,s__3237,cycle.call(null,s__3237));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3238 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3239 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3238.call(this,n);
case  2 :
return repeat__3239.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3241 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3242 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3241.call(this,n);
case  2 :
return repeatedly__3242.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3248 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3244 = cljs.core.seq.call(null,c1);
var s2__3245 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3246 = s1__3244;

if(cljs.core.truth_(and__3546__auto____3246))
{return s2__3245;
} else
{return and__3546__auto____3246;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3244),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3245),interleave.call(null,cljs.core.rest.call(null,s1__3244),cljs.core.rest.call(null,s2__3245))));
} else
{return null;
}
})));
});
var interleave__3249 = (function() { 
var G__3251__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3247 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3247)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3247),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3247)));
} else
{return null;
}
})));
};
var G__3251 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3251__delegate.call(this, c1, c2, colls);
};
G__3251.cljs$lang$maxFixedArity = 2;
G__3251.cljs$lang$applyTo = (function (arglist__3252){
var c1 = cljs.core.first(arglist__3252);
var c2 = cljs.core.first(cljs.core.next(arglist__3252));
var colls = cljs.core.rest(cljs.core.next(arglist__3252));
return G__3251__delegate.call(this, c1, c2, colls);
});
return G__3251;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3248.call(this,c1,c2);
default:
return interleave__3249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3249.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3255 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3253 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3253))
{var coll__3254 = temp__3695__auto____3253;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3254),cat.call(null,cljs.core.rest.call(null,coll__3254),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3255.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3256 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3257 = (function() { 
var G__3259__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3259 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3259__delegate.call(this, f, coll, colls);
};
G__3259.cljs$lang$maxFixedArity = 2;
G__3259.cljs$lang$applyTo = (function (arglist__3260){
var f = cljs.core.first(arglist__3260);
var coll = cljs.core.first(cljs.core.next(arglist__3260));
var colls = cljs.core.rest(cljs.core.next(arglist__3260));
return G__3259__delegate.call(this, f, coll, colls);
});
return G__3259;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3256.call(this,f,coll);
default:
return mapcat__3257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3257.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3261 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3261))
{var s__3262 = temp__3698__auto____3261;

var f__3263 = cljs.core.first.call(null,s__3262);
var r__3264 = cljs.core.rest.call(null,s__3262);

if(cljs.core.truth_(pred.call(null,f__3263)))
{return cljs.core.cons.call(null,f__3263,filter.call(null,pred,r__3264));
} else
{return filter.call(null,pred,r__3264);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3266 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3266.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3265_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3265_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3273 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3274 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3267))
{var s__3268 = temp__3698__auto____3267;

var p__3269 = cljs.core.take.call(null,n,s__3268);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3269))))
{return cljs.core.cons.call(null,p__3269,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3268)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3275 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3270 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3270))
{var s__3271 = temp__3698__auto____3270;

var p__3272 = cljs.core.take.call(null,n,s__3271);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3272))))
{return cljs.core.cons.call(null,p__3272,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3271)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3272,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3273.call(this,n,step);
case  3 :
return partition__3274.call(this,n,step,pad);
case  4 :
return partition__3275.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3281 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3282 = (function (m,ks,not_found){
var sentinel__3277 = cljs.core.lookup_sentinel;
var m__3278 = m;
var ks__3279 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3279))
{var m__3280 = cljs.core.get.call(null,m__3278,cljs.core.first.call(null,ks__3279),sentinel__3277);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3277,m__3280)))
{return not_found;
} else
{{
var G__3284 = sentinel__3277;
var G__3285 = m__3280;
var G__3286 = cljs.core.next.call(null,ks__3279);
sentinel__3277 = G__3284;
m__3278 = G__3285;
ks__3279 = G__3286;
continue;
}
}
} else
{return m__3278;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3281.call(this,m,ks);
case  3 :
return get_in__3282.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3287,v){
var vec__3288__3289 = p__3287;
var k__3290 = cljs.core.nth.call(null,vec__3288__3289,0,null);
var ks__3291 = cljs.core.nthnext.call(null,vec__3288__3289,1);

if(cljs.core.truth_(ks__3291))
{return cljs.core.assoc.call(null,m,k__3290,assoc_in.call(null,cljs.core.get.call(null,m,k__3290),ks__3291,v));
} else
{return cljs.core.assoc.call(null,m,k__3290,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3292,f,args){
var vec__3293__3294 = p__3292;
var k__3295 = cljs.core.nth.call(null,vec__3293__3294,0,null);
var ks__3296 = cljs.core.nthnext.call(null,vec__3293__3294,1);

if(cljs.core.truth_(ks__3296))
{return cljs.core.assoc.call(null,m,k__3295,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3295),ks__3296,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3295,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3295),args));
}
};
var update_in = function (m,p__3292,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3292, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3297){
var m = cljs.core.first(arglist__3297);
var p__3292 = cljs.core.first(cljs.core.next(arglist__3297));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3297)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3297)));
return update_in__delegate.call(this, m, p__3292, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3298 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3299 = this;
var new_array__3300 = cljs.core.aclone.call(null,this__3299.array);

new_array__3300.push(o);
return (new cljs.core.Vector(this__3299.meta,new_array__3300));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3301 = this;
if(cljs.core.truth_((this__3301.array.length > 0)))
{var vector_seq__3302 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3301.array.length)))
{return cljs.core.cons.call(null,(this__3301.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3302.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3303 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3304 = this;
var count__3305 = this__3304.array.length;

if(cljs.core.truth_((count__3305 > 0)))
{return (this__3304.array[(count__3305 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3306 = this;
if(cljs.core.truth_((this__3306.array.length > 0)))
{var new_array__3307 = cljs.core.aclone.call(null,this__3306.array);

new_array__3307.pop();
return (new cljs.core.Vector(this__3306.meta,new_array__3307));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3308 = this;
return (new cljs.core.Vector(meta,this__3308.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3309 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3309.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3323 = null;
var G__3323__3324 = (function (coll,n){
var this__3310 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3311 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3311))
{return (n < this__3310.array.length);
} else
{return and__3546__auto____3311;
}
})()))
{return (this__3310.array[n]);
} else
{return null;
}
});
var G__3323__3325 = (function (coll,n,not_found){
var this__3312 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3313 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3313))
{return (n < this__3312.array.length);
} else
{return and__3546__auto____3313;
}
})()))
{return (this__3312.array[n]);
} else
{return not_found;
}
});
G__3323 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3323__3324.call(this,coll,n);
case  3 :
return G__3323__3325.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3323;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3314 = this;
return this__3314.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3327 = null;
var G__3327__3328 = (function (v,f){
var this__3315 = this;
return cljs.core.ci_reduce.call(null,this__3315.array,f);
});
var G__3327__3329 = (function (v,f,start){
var this__3316 = this;
return cljs.core.ci_reduce.call(null,this__3316.array,f,start);
});
G__3327 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3327__3328.call(this,v,f);
case  3 :
return G__3327__3329.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3327;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3317 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3318 = this;
return this__3318.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3319 = this;
var new_array__3320 = cljs.core.aclone.call(null,this__3319.array);

(new_array__3320[k] = v);
return (new cljs.core.Vector(this__3319.meta,new_array__3320));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3331 = null;
var G__3331__3332 = (function (coll,k){
var this__3321 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3331__3333 = (function (coll,k,not_found){
var this__3322 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3331 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3331__3332.call(this,coll,k);
case  3 :
return G__3331__3333.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3331;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3335 = null;
var G__3335__3336 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3335__3337 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3335 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3335__3336.call(this,_,k);
case  3 :
return G__3335__3337.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3335;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3339){
var args = cljs.core.seq( arglist__3339 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3340 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3341 = array.length;

var i__3342 = 0;

while(true){
if(cljs.core.truth_((i__3342 < len__3341)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3342]))))
{return i__3342;
} else
{{
var G__3343 = (i__3342 + incr);
i__3342 = G__3343;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3345 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3346 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3344 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3344))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3344;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3345.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3346.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3349 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3350 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3351 = this;
if(cljs.core.truth_((this__3351.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3348_SHARP_){
return cljs.core.vector.call(null,p1__3348_SHARP_,(this__3351.strobj[p1__3348_SHARP_]));
}),this__3351.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3352 = this;
return (new cljs.core.ObjMap(meta,this__3352.keys,this__3352.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3353 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3354 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3354))
{return this__3353.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3354;
}
})()))
{var new_keys__3355 = cljs.core.aclone.call(null,this__3353.keys);
var new_strobj__3356 = goog.object.clone.call(null,this__3353.strobj);

new_keys__3355.splice(cljs.core.scan_array.call(null,1,k,new_keys__3355),1);
cljs.core.js_delete.call(null,new_strobj__3356,k);
return (new cljs.core.ObjMap(this__3353.meta,new_keys__3355,new_strobj__3356));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3357 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3357.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3358 = this;
return this__3358.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3359 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3360 = this;
return this__3360.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3361 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3362 = goog.object.clone.call(null,this__3361.strobj);
var overwrite_QMARK___3363 = new_strobj__3362.hasOwnProperty(k);

(new_strobj__3362[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3363))
{return (new cljs.core.ObjMap(this__3361.meta,this__3361.keys,new_strobj__3362));
} else
{var new_keys__3364 = cljs.core.aclone.call(null,this__3361.keys);

new_keys__3364.push(k);
return (new cljs.core.ObjMap(this__3361.meta,new_keys__3364,new_strobj__3362));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3361.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3365 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3365.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3368 = null;
var G__3368__3369 = (function (coll,k){
var this__3366 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3368__3370 = (function (coll,k,not_found){
var this__3367 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3367.strobj,(this__3367.strobj[k]),not_found);
});
G__3368 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3368__3369.call(this,coll,k);
case  3 :
return G__3368__3370.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3368;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3373 = null;
var G__3373__3374 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3373__3375 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3373 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3373__3374.call(this,_,k);
case  3 :
return G__3373__3375.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3373;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3377 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3378 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3379 = this;
if(cljs.core.truth_((this__3379.count > 0)))
{var hashes__3380 = cljs.core.js_keys.call(null,this__3379.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3372_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3379.hashobj[p1__3372_SHARP_])));
}),hashes__3380);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3381 = this;
return (new cljs.core.HashMap(meta,this__3381.count,this__3381.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3382 = this;
var h__3383 = cljs.core.hash.call(null,k);
var bucket__3384 = (this__3382.hashobj[h__3383]);
var i__3385 = (cljs.core.truth_(bucket__3384)?cljs.core.scan_array.call(null,2,k,bucket__3384):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3385)))
{return coll;
} else
{var new_hashobj__3386 = goog.object.clone.call(null,this__3382.hashobj);

if(cljs.core.truth_((3 > bucket__3384.length)))
{cljs.core.js_delete.call(null,new_hashobj__3386,h__3383);
} else
{var new_bucket__3387 = cljs.core.aclone.call(null,bucket__3384);

new_bucket__3387.splice(i__3385,2);
(new_hashobj__3386[h__3383] = new_bucket__3387);
}
return (new cljs.core.HashMap(this__3382.meta,(this__3382.count - 1),new_hashobj__3386));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3388 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3388.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3389 = this;
return this__3389.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3390 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3391 = this;
return this__3391.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3392 = this;
var h__3393 = cljs.core.hash.call(null,k);
var bucket__3394 = (this__3392.hashobj[h__3393]);

if(cljs.core.truth_(bucket__3394))
{var new_bucket__3395 = cljs.core.aclone.call(null,bucket__3394);
var new_hashobj__3396 = goog.object.clone.call(null,this__3392.hashobj);

(new_hashobj__3396[h__3393] = new_bucket__3395);
var temp__3695__auto____3397 = cljs.core.scan_array.call(null,2,k,new_bucket__3395);

if(cljs.core.truth_(temp__3695__auto____3397))
{var i__3398 = temp__3695__auto____3397;

(new_bucket__3395[(i__3398 + 1)] = v);
return (new cljs.core.HashMap(this__3392.meta,this__3392.count,new_hashobj__3396));
} else
{new_bucket__3395.push(k,v);
return (new cljs.core.HashMap(this__3392.meta,(this__3392.count + 1),new_hashobj__3396));
}
} else
{var new_hashobj__3399 = goog.object.clone.call(null,this__3392.hashobj);

(new_hashobj__3399[h__3393] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3392.meta,(this__3392.count + 1),new_hashobj__3399));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3400 = this;
var bucket__3401 = (this__3400.hashobj[cljs.core.hash.call(null,k)]);
var i__3402 = (cljs.core.truth_(bucket__3401)?cljs.core.scan_array.call(null,2,k,bucket__3401):null);

if(cljs.core.truth_(i__3402))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3407 = null;
var G__3407__3408 = (function (coll,k){
var this__3403 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3407__3409 = (function (coll,k,not_found){
var this__3404 = this;
var bucket__3405 = (this__3404.hashobj[cljs.core.hash.call(null,k)]);
var i__3406 = (cljs.core.truth_(bucket__3405)?cljs.core.scan_array.call(null,2,k,bucket__3405):null);

if(cljs.core.truth_(i__3406))
{return (bucket__3405[(i__3406 + 1)]);
} else
{return not_found;
}
});
G__3407 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3407__3408.call(this,coll,k);
case  3 :
return G__3407__3409.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3407;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3411 = ks.length;

var i__3412 = 0;
var out__3413 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3412 < len__3411)))
{{
var G__3414 = (i__3412 + 1);
var G__3415 = cljs.core.assoc.call(null,out__3413,(ks[i__3412]),(vs[i__3412]));
i__3412 = G__3414;
out__3413 = G__3415;
continue;
}
} else
{return out__3413;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3416 = null;
var G__3416__3417 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3416__3418 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3416 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3416__3417.call(this,_,k);
case  3 :
return G__3416__3418.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3416;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3420 = cljs.core.seq.call(null,keyvals);
var out__3421 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3420))
{{
var G__3422 = cljs.core.nnext.call(null,in$__3420);
var G__3423 = cljs.core.assoc.call(null,out__3421,cljs.core.first.call(null,in$__3420),cljs.core.second.call(null,in$__3420));
in$__3420 = G__3422;
out__3421 = G__3423;
continue;
}
} else
{return out__3421;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3424){
var keyvals = cljs.core.seq( arglist__3424 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3425_SHARP_,p2__3426_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3427 = p1__3425_SHARP_;

if(cljs.core.truth_(or__3548__auto____3427))
{return or__3548__auto____3427;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3426_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3428){
var maps = cljs.core.seq( arglist__3428 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3431 = (function (m,e){
var k__3429 = cljs.core.first.call(null,e);
var v__3430 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3429)))
{return cljs.core.assoc.call(null,m,k__3429,f.call(null,cljs.core.get.call(null,m,k__3429),v__3430));
} else
{return cljs.core.assoc.call(null,m,k__3429,v__3430);
}
});
var merge2__3433 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3431,(function (){var or__3548__auto____3432 = m1;

if(cljs.core.truth_(or__3548__auto____3432))
{return or__3548__auto____3432;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3433,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3434){
var f = cljs.core.first(arglist__3434);
var maps = cljs.core.rest(arglist__3434);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3436 = cljs.core.ObjMap.fromObject([],{});
var keys__3437 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3437))
{var key__3438 = cljs.core.first.call(null,keys__3437);
var entry__3439 = cljs.core.get.call(null,map,key__3438);

{
var G__3440 = (cljs.core.truth_(entry__3439)?cljs.core.assoc.call(null,ret__3436,key__3438,entry__3439):ret__3436);
var G__3441 = cljs.core.next.call(null,keys__3437);
ret__3436 = G__3440;
keys__3437 = G__3441;
continue;
}
} else
{return ret__3436;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3442 = this;
return (new cljs.core.Set(this__3442.meta,cljs.core.dissoc.call(null,this__3442.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3443 = this;
var and__3546__auto____3444 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3444))
{var and__3546__auto____3445 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3445))
{return cljs.core.every_QMARK_.call(null,(function (p1__3435_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3435_SHARP_);
}),other);
} else
{return and__3546__auto____3445;
}
} else
{return and__3546__auto____3444;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3446 = this;
return (new cljs.core.Set(this__3446.meta,cljs.core.assoc.call(null,this__3446.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3447 = this;
return cljs.core.keys.call(null,this__3447.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3448 = this;
return (new cljs.core.Set(meta,this__3448.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3449 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3449.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3450 = this;
return this__3450.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3451 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3452 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3455 = null;
var G__3455__3456 = (function (coll,v){
var this__3453 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3455__3457 = (function (coll,v,not_found){
var this__3454 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3454.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3455 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3455__3456.call(this,coll,v);
case  3 :
return G__3455__3457.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3455;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3459 = null;
var G__3459__3460 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3459__3461 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3459 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3459__3460.call(this,_,k);
case  3 :
return G__3459__3461.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3459;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3464 = cljs.core.seq.call(null,coll);
var out__3465 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3464))))
{{
var G__3466 = cljs.core.rest.call(null,in$__3464);
var G__3467 = cljs.core.conj.call(null,out__3465,cljs.core.first.call(null,in$__3464));
in$__3464 = G__3466;
out__3465 = G__3467;
continue;
}
} else
{return out__3465;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3468 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3469 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3469))
{var e__3470 = temp__3695__auto____3469;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3470));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3468,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3463_SHARP_){
var temp__3695__auto____3471 = cljs.core.find.call(null,smap,p1__3463_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3471))
{var e__3472 = temp__3695__auto____3471;

return cljs.core.second.call(null,e__3472);
} else
{return p1__3463_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3480 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3473,seen){
while(true){
var vec__3474__3475 = p__3473;
var f__3476 = cljs.core.nth.call(null,vec__3474__3475,0,null);
var xs__3477 = vec__3474__3475;

var temp__3698__auto____3478 = cljs.core.seq.call(null,xs__3477);

if(cljs.core.truth_(temp__3698__auto____3478))
{var s__3479 = temp__3698__auto____3478;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3476)))
{{
var G__3481 = cljs.core.rest.call(null,s__3479);
var G__3482 = seen;
p__3473 = G__3481;
seen = G__3482;
continue;
}
} else
{return cljs.core.cons.call(null,f__3476,step.call(null,cljs.core.rest.call(null,s__3479),cljs.core.conj.call(null,seen,f__3476)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3480.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3483 = cljs.core.Vector.fromArray([]);
var s__3484 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3484)))
{{
var G__3485 = cljs.core.conj.call(null,ret__3483,cljs.core.first.call(null,s__3484));
var G__3486 = cljs.core.next.call(null,s__3484);
ret__3483 = G__3485;
s__3484 = G__3486;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3483);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____3487 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3487))
{return or__3548__auto____3487;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3488 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3488 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3488 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____3489 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3489))
{return or__3548__auto____3489;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3490 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3490 > -1)))
{return cljs.core.subs.call(null,x,2,i__3490);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3493 = cljs.core.ObjMap.fromObject([],{});
var ks__3494 = cljs.core.seq.call(null,keys);
var vs__3495 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3496 = ks__3494;

if(cljs.core.truth_(and__3546__auto____3496))
{return vs__3495;
} else
{return and__3546__auto____3496;
}
})()))
{{
var G__3497 = cljs.core.assoc.call(null,map__3493,cljs.core.first.call(null,ks__3494),cljs.core.first.call(null,vs__3495));
var G__3498 = cljs.core.next.call(null,ks__3494);
var G__3499 = cljs.core.next.call(null,vs__3495);
map__3493 = G__3497;
ks__3494 = G__3498;
vs__3495 = G__3499;
continue;
}
} else
{return map__3493;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3502 = (function (k,x){
return x;
});
var max_key__3503 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3504 = (function() { 
var G__3506__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3491_SHARP_,p2__3492_SHARP_){
return max_key.call(null,k,p1__3491_SHARP_,p2__3492_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3506 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3506__delegate.call(this, k, x, y, more);
};
G__3506.cljs$lang$maxFixedArity = 3;
G__3506.cljs$lang$applyTo = (function (arglist__3507){
var k = cljs.core.first(arglist__3507);
var x = cljs.core.first(cljs.core.next(arglist__3507));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3507)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3507)));
return G__3506__delegate.call(this, k, x, y, more);
});
return G__3506;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3502.call(this,k,x);
case  3 :
return max_key__3503.call(this,k,x,y);
default:
return max_key__3504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3504.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3508 = (function (k,x){
return x;
});
var min_key__3509 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3510 = (function() { 
var G__3512__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3500_SHARP_,p2__3501_SHARP_){
return min_key.call(null,k,p1__3500_SHARP_,p2__3501_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3512 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3512__delegate.call(this, k, x, y, more);
};
G__3512.cljs$lang$maxFixedArity = 3;
G__3512.cljs$lang$applyTo = (function (arglist__3513){
var k = cljs.core.first(arglist__3513);
var x = cljs.core.first(cljs.core.next(arglist__3513));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3513)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3513)));
return G__3512__delegate.call(this, k, x, y, more);
});
return G__3512;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3508.call(this,k,x);
case  3 :
return min_key__3509.call(this,k,x,y);
default:
return min_key__3510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3510.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3516 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3517 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3514 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3514))
{var s__3515 = temp__3698__auto____3514;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3515),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3515)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3516.call(this,n,step);
case  3 :
return partition_all__3517.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3519 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3519))
{var s__3520 = temp__3698__auto____3519;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3520))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3520),take_while.call(null,pred,cljs.core.rest.call(null,s__3520)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3521 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3522 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3523 = this;
return this__3523.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3524 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3524.meta,(this__3524.start + this__3524.step),this__3524.end,this__3524.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3525 = this;
var comp__3526 = (cljs.core.truth_((this__3525.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3526.call(null,this__3525.start,this__3525.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3527 = this;
return (new cljs.core.Range(meta,this__3527.start,this__3527.end,this__3527.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3528 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3528.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3538 = null;
var G__3538__3539 = (function (rng,n){
var this__3529 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3529.start + (n * this__3529.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3530 = (this__3529.start > this__3529.end);

if(cljs.core.truth_(and__3546__auto____3530))
{return cljs.core._EQ_.call(null,this__3529.step,0);
} else
{return and__3546__auto____3530;
}
})()))
{return this__3529.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3538__3540 = (function (rng,n,not_found){
var this__3531 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3531.start + (n * this__3531.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3532 = (this__3531.start > this__3531.end);

if(cljs.core.truth_(and__3546__auto____3532))
{return cljs.core._EQ_.call(null,this__3531.step,0);
} else
{return and__3546__auto____3532;
}
})()))
{return this__3531.start;
} else
{return not_found;
}
}
});
G__3538 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3538__3539.call(this,rng,n);
case  3 :
return G__3538__3540.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3538;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3533 = this;
return this__3533.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3542 = null;
var G__3542__3543 = (function (rng,f){
var this__3534 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3542__3544 = (function (rng,f,s){
var this__3535 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3542 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3542__3543.call(this,rng,f);
case  3 :
return G__3542__3544.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3542;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3536 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3537 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3537.end - this__3537.start) / this__3537.step));
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3546 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3547 = (function (end){
return range.call(null,0,end,1);
});
var range__3548 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3549 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3546.call(this);
case  1 :
return range__3547.call(this,start);
case  2 :
return range__3548.call(this,start,end);
case  3 :
return range__3549.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3551 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3551))
{var s__3552 = temp__3698__auto____3551;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3552),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3552)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3554 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3554))
{var s__3555 = temp__3698__auto____3554;

var fst__3556 = cljs.core.first.call(null,s__3555);
var fv__3557 = f.call(null,fst__3556);
var run__3558 = cljs.core.cons.call(null,fst__3556,cljs.core.take_while.call(null,(function (p1__3553_SHARP_){
return cljs.core._EQ_.call(null,fv__3557,f.call(null,p1__3553_SHARP_));
}),cljs.core.next.call(null,s__3555)));

return cljs.core.cons.call(null,run__3558,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3558),s__3555))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3573 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3569 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3569))
{var s__3570 = temp__3695__auto____3569;

return reductions.call(null,f,cljs.core.first.call(null,s__3570),cljs.core.rest.call(null,s__3570));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3574 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3571 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3571))
{var s__3572 = temp__3698__auto____3571;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3572)),cljs.core.rest.call(null,s__3572));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3573.call(this,f,init);
case  3 :
return reductions__3574.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3577 = (function (f){
return (function() {
var G__3582 = null;
var G__3582__3583 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3582__3584 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3582__3585 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3582__3586 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3582__3587 = (function() { 
var G__3589__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3589 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3589__delegate.call(this, x, y, z, args);
};
G__3589.cljs$lang$maxFixedArity = 3;
G__3589.cljs$lang$applyTo = (function (arglist__3590){
var x = cljs.core.first(arglist__3590);
var y = cljs.core.first(cljs.core.next(arglist__3590));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3590)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3590)));
return G__3589__delegate.call(this, x, y, z, args);
});
return G__3589;
})()
;
G__3582 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3582__3583.call(this);
case  1 :
return G__3582__3584.call(this,x);
case  2 :
return G__3582__3585.call(this,x,y);
case  3 :
return G__3582__3586.call(this,x,y,z);
default:
return G__3582__3587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3582.cljs$lang$maxFixedArity = 3;
G__3582.cljs$lang$applyTo = G__3582__3587.cljs$lang$applyTo;
return G__3582;
})()
});
var juxt__3578 = (function (f,g){
return (function() {
var G__3591 = null;
var G__3591__3592 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3591__3593 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3591__3594 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3591__3595 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3591__3596 = (function() { 
var G__3598__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3598 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3598__delegate.call(this, x, y, z, args);
};
G__3598.cljs$lang$maxFixedArity = 3;
G__3598.cljs$lang$applyTo = (function (arglist__3599){
var x = cljs.core.first(arglist__3599);
var y = cljs.core.first(cljs.core.next(arglist__3599));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3599)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3599)));
return G__3598__delegate.call(this, x, y, z, args);
});
return G__3598;
})()
;
G__3591 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3591__3592.call(this);
case  1 :
return G__3591__3593.call(this,x);
case  2 :
return G__3591__3594.call(this,x,y);
case  3 :
return G__3591__3595.call(this,x,y,z);
default:
return G__3591__3596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3591.cljs$lang$maxFixedArity = 3;
G__3591.cljs$lang$applyTo = G__3591__3596.cljs$lang$applyTo;
return G__3591;
})()
});
var juxt__3579 = (function (f,g,h){
return (function() {
var G__3600 = null;
var G__3600__3601 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3600__3602 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3600__3603 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3600__3604 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3600__3605 = (function() { 
var G__3607__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3607 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3607__delegate.call(this, x, y, z, args);
};
G__3607.cljs$lang$maxFixedArity = 3;
G__3607.cljs$lang$applyTo = (function (arglist__3608){
var x = cljs.core.first(arglist__3608);
var y = cljs.core.first(cljs.core.next(arglist__3608));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3608)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3608)));
return G__3607__delegate.call(this, x, y, z, args);
});
return G__3607;
})()
;
G__3600 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3600__3601.call(this);
case  1 :
return G__3600__3602.call(this,x);
case  2 :
return G__3600__3603.call(this,x,y);
case  3 :
return G__3600__3604.call(this,x,y,z);
default:
return G__3600__3605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3600.cljs$lang$maxFixedArity = 3;
G__3600.cljs$lang$applyTo = G__3600__3605.cljs$lang$applyTo;
return G__3600;
})()
});
var juxt__3580 = (function() { 
var G__3609__delegate = function (f,g,h,fs){
var fs__3576 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3610 = null;
var G__3610__3611 = (function (){
return cljs.core.reduce.call(null,(function (p1__3559_SHARP_,p2__3560_SHARP_){
return cljs.core.conj.call(null,p1__3559_SHARP_,p2__3560_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3576);
});
var G__3610__3612 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3561_SHARP_,p2__3562_SHARP_){
return cljs.core.conj.call(null,p1__3561_SHARP_,p2__3562_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3576);
});
var G__3610__3613 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3563_SHARP_,p2__3564_SHARP_){
return cljs.core.conj.call(null,p1__3563_SHARP_,p2__3564_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3576);
});
var G__3610__3614 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3565_SHARP_,p2__3566_SHARP_){
return cljs.core.conj.call(null,p1__3565_SHARP_,p2__3566_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3576);
});
var G__3610__3615 = (function() { 
var G__3617__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3567_SHARP_,p2__3568_SHARP_){
return cljs.core.conj.call(null,p1__3567_SHARP_,cljs.core.apply.call(null,p2__3568_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3576);
};
var G__3617 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3617__delegate.call(this, x, y, z, args);
};
G__3617.cljs$lang$maxFixedArity = 3;
G__3617.cljs$lang$applyTo = (function (arglist__3618){
var x = cljs.core.first(arglist__3618);
var y = cljs.core.first(cljs.core.next(arglist__3618));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3618)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3618)));
return G__3617__delegate.call(this, x, y, z, args);
});
return G__3617;
})()
;
G__3610 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3610__3611.call(this);
case  1 :
return G__3610__3612.call(this,x);
case  2 :
return G__3610__3613.call(this,x,y);
case  3 :
return G__3610__3614.call(this,x,y,z);
default:
return G__3610__3615.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3610.cljs$lang$maxFixedArity = 3;
G__3610.cljs$lang$applyTo = G__3610__3615.cljs$lang$applyTo;
return G__3610;
})()
};
var G__3609 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3609__delegate.call(this, f, g, h, fs);
};
G__3609.cljs$lang$maxFixedArity = 3;
G__3609.cljs$lang$applyTo = (function (arglist__3619){
var f = cljs.core.first(arglist__3619);
var g = cljs.core.first(cljs.core.next(arglist__3619));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3619)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3619)));
return G__3609__delegate.call(this, f, g, h, fs);
});
return G__3609;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3577.call(this,f);
case  2 :
return juxt__3578.call(this,f,g);
case  3 :
return juxt__3579.call(this,f,g,h);
default:
return juxt__3580.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3580.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3621 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3624 = cljs.core.next.call(null,coll);
coll = G__3624;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3622 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3620 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3620))
{return (n > 0);
} else
{return and__3546__auto____3620;
}
})()))
{{
var G__3625 = (n - 1);
var G__3626 = cljs.core.next.call(null,coll);
n = G__3625;
coll = G__3626;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3621.call(this,n);
case  2 :
return dorun__3622.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3627 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3628 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3627.call(this,n);
case  2 :
return doall__3628.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3630 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3630),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3630),1)))
{return cljs.core.first.call(null,matches__3630);
} else
{return cljs.core.vec.call(null,matches__3630);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3631 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3631)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3631),1)))
{return cljs.core.first.call(null,matches__3631);
} else
{return cljs.core.vec.call(null,matches__3631);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3632 = cljs.core.re_find.call(null,re,s);
var match_idx__3633 = s.search(re);
var match_str__3634 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3632))?cljs.core.first.call(null,match_data__3632):match_data__3632);
var post_match__3635 = cljs.core.subs.call(null,s,(match_idx__3633 + cljs.core.count.call(null,match_str__3634)));

if(cljs.core.truth_(match_data__3632))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3632,re_seq.call(null,re,post_match__3635));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3636_SHARP_){
return print_one.call(null,p1__3636_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3637 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3637))
{var and__3546__auto____3641 = (function (){var x__302__auto____3638 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3639 = x__302__auto____3638;

if(cljs.core.truth_(and__3546__auto____3639))
{var and__3546__auto____3640 = x__302__auto____3638.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3640))
{return cljs.core.not.call(null,x__302__auto____3638.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3640;
}
} else
{return and__3546__auto____3639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____3638);
}
})();

if(cljs.core.truth_(and__3546__auto____3641))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3641;
}
} else
{return and__3546__auto____3637;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__302__auto____3642 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3643 = x__302__auto____3642;

if(cljs.core.truth_(and__3546__auto____3643))
{var and__3546__auto____3644 = x__302__auto____3642.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3644))
{return cljs.core.not.call(null,x__302__auto____3642.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3644;
}
} else
{return and__3546__auto____3643;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__302__auto____3642);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3645 = cljs.core.first.call(null,objs);
var sb__3646 = (new goog.string.StringBuffer());

var G__3647__3648 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3647__3648))
{var obj__3649 = cljs.core.first.call(null,G__3647__3648);
var G__3647__3650 = G__3647__3648;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3649,first_obj__3645)))
{} else
{sb__3646.append(" ");
}
var G__3651__3652 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3649,opts));

if(cljs.core.truth_(G__3651__3652))
{var string__3653 = cljs.core.first.call(null,G__3651__3652);
var G__3651__3654 = G__3651__3652;

while(true){
sb__3646.append(string__3653);
var temp__3698__auto____3655 = cljs.core.next.call(null,G__3651__3654);

if(cljs.core.truth_(temp__3698__auto____3655))
{var G__3651__3656 = temp__3698__auto____3655;

{
var G__3659 = cljs.core.first.call(null,G__3651__3656);
var G__3660 = G__3651__3656;
string__3653 = G__3659;
G__3651__3654 = G__3660;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3657 = cljs.core.next.call(null,G__3647__3650);

if(cljs.core.truth_(temp__3698__auto____3657))
{var G__3647__3658 = temp__3698__auto____3657;

{
var G__3661 = cljs.core.first.call(null,G__3647__3658);
var G__3662 = G__3647__3658;
obj__3649 = G__3661;
G__3647__3650 = G__3662;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3646);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3663 = cljs.core.first.call(null,objs);

var G__3664__3665 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3664__3665))
{var obj__3666 = cljs.core.first.call(null,G__3664__3665);
var G__3664__3667 = G__3664__3665;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3666,first_obj__3663)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3668__3669 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3666,opts));

if(cljs.core.truth_(G__3668__3669))
{var string__3670 = cljs.core.first.call(null,G__3668__3669);
var G__3668__3671 = G__3668__3669;

while(true){
cljs.core.string_print.call(null,string__3670);
var temp__3698__auto____3672 = cljs.core.next.call(null,G__3668__3671);

if(cljs.core.truth_(temp__3698__auto____3672))
{var G__3668__3673 = temp__3698__auto____3672;

{
var G__3676 = cljs.core.first.call(null,G__3668__3673);
var G__3677 = G__3668__3673;
string__3670 = G__3676;
G__3668__3671 = G__3677;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3674 = cljs.core.next.call(null,G__3664__3667);

if(cljs.core.truth_(temp__3698__auto____3674))
{var G__3664__3675 = temp__3698__auto____3674;

{
var G__3678 = cljs.core.first.call(null,G__3664__3675);
var G__3679 = G__3664__3675;
obj__3666 = G__3678;
G__3664__3667 = G__3679;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3680){
var objs = cljs.core.seq( arglist__3680 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3681){
var objs = cljs.core.seq( arglist__3681 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3682){
var objs = cljs.core.seq( arglist__3682 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3683){
var objs = cljs.core.seq( arglist__3683 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3684){
var objs = cljs.core.seq( arglist__3684 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3685 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3685,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3686 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3686))
{var nspc__3687 = temp__3698__auto____3686;

return cljs.core.str.call(null,nspc__3687,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3688 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3688))
{var nspc__3689 = temp__3698__auto____3688;

return cljs.core.str.call(null,nspc__3689,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3690 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3690,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3691 = this;
var G__3692__3693 = cljs.core.seq.call(null,this__3691.watches);

if(cljs.core.truth_(G__3692__3693))
{var G__3695__3697 = cljs.core.first.call(null,G__3692__3693);
var vec__3696__3698 = G__3695__3697;
var key__3699 = cljs.core.nth.call(null,vec__3696__3698,0,null);
var f__3700 = cljs.core.nth.call(null,vec__3696__3698,1,null);
var G__3692__3701 = G__3692__3693;

var G__3695__3702 = G__3695__3697;
var G__3692__3703 = G__3692__3701;

while(true){
var vec__3704__3705 = G__3695__3702;
var key__3706 = cljs.core.nth.call(null,vec__3704__3705,0,null);
var f__3707 = cljs.core.nth.call(null,vec__3704__3705,1,null);
var G__3692__3708 = G__3692__3703;

f__3707.call(null,key__3706,this$,oldval,newval);
var temp__3698__auto____3709 = cljs.core.next.call(null,G__3692__3708);

if(cljs.core.truth_(temp__3698__auto____3709))
{var G__3692__3710 = temp__3698__auto____3709;

{
var G__3717 = cljs.core.first.call(null,G__3692__3710);
var G__3718 = G__3692__3710;
G__3695__3702 = G__3717;
G__3692__3703 = G__3718;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__3711 = this;
return this$.watches = cljs.core.assoc.call(null,this__3711.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3712 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3712.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3713 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3713.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3714 = this;
return this__3714.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3715 = this;
return this__3715.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3716 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3725 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3726 = (function() { 
var G__3728__delegate = function (x,p__3719){
var map__3720__3721 = p__3719;
var map__3720__3722 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3720__3721))?cljs.core.apply.call(null,cljs.core.hash_map,map__3720__3721):map__3720__3721);
var validator__3723 = cljs.core.get.call(null,map__3720__3722,"﷐'validator");
var meta__3724 = cljs.core.get.call(null,map__3720__3722,"﷐'meta");

return (new cljs.core.Atom(x,meta__3724,validator__3723,null));
};
var G__3728 = function (x,var_args){
var p__3719 = null;
if (goog.isDef(var_args)) {
  p__3719 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3728__delegate.call(this, x, p__3719);
};
G__3728.cljs$lang$maxFixedArity = 1;
G__3728.cljs$lang$applyTo = (function (arglist__3729){
var x = cljs.core.first(arglist__3729);
var p__3719 = cljs.core.rest(arglist__3729);
return G__3728__delegate.call(this, x, p__3719);
});
return G__3728;
})()
;
atom = function(x,var_args){
var p__3719 = var_args;
switch(arguments.length){
case  1 :
return atom__3725.call(this,x);
default:
return atom__3726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3726.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3730 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3730))
{var validate__3731 = temp__3698__auto____3730;

if(cljs.core.truth_(validate__3731.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__3732 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3732,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3733 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3734 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3735 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3736 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3737 = (function() { 
var G__3739__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3739 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3739__delegate.call(this, a, f, x, y, z, more);
};
G__3739.cljs$lang$maxFixedArity = 5;
G__3739.cljs$lang$applyTo = (function (arglist__3740){
var a = cljs.core.first(arglist__3740);
var f = cljs.core.first(cljs.core.next(arglist__3740));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3740)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3740))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3740)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3740)))));
return G__3739__delegate.call(this, a, f, x, y, z, more);
});
return G__3739;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3733.call(this,a,f);
case  3 :
return swap_BANG___3734.call(this,a,f,x);
case  4 :
return swap_BANG___3735.call(this,a,f,x,y);
case  5 :
return swap_BANG___3736.call(this,a,f,x,y,z);
default:
return swap_BANG___3737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3737.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3741){
var iref = cljs.core.first(arglist__3741);
var f = cljs.core.first(cljs.core.next(arglist__3741));
var args = cljs.core.rest(cljs.core.next(arglist__3741));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3742 = (function (){
return gensym.call(null,"G__");
});
var gensym__3743 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3742.call(this);
case  1 :
return gensym__3743.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3745 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3745.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3746 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3746.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3746.state,this__3746.f);
}
return cljs.core.deref.call(null,this__3746.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3747){
var body = cljs.core.seq( arglist__3747 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3748__3749 = options;
var map__3748__3750 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3748__3749))?cljs.core.apply.call(null,cljs.core.hash_map,map__3748__3749):map__3748__3749);
var keywordize_keys__3751 = cljs.core.get.call(null,map__3748__3750,"﷐'keywordize-keys");
var keyfn__3752 = (cljs.core.truth_(keywordize_keys__3751)?cljs.core.keyword:cljs.core.str);
var f__3758 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__356__auto____3757 = (function iter__3753(s__3754){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3754__3755 = s__3754;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3754__3755)))
{var k__3756 = cljs.core.first.call(null,s__3754__3755);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3752.call(null,k__3756),thisfn.call(null,(x[k__3756]))]),iter__3753.call(null,cljs.core.rest.call(null,s__3754__3755)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____3757.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3758.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3759){
var x = cljs.core.first(arglist__3759);
var options = cljs.core.rest(arglist__3759);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3760 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3764__delegate = function (args){
var temp__3695__auto____3761 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3760),args);

if(cljs.core.truth_(temp__3695__auto____3761))
{var v__3762 = temp__3695__auto____3761;

return v__3762;
} else
{var ret__3763 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3760,cljs.core.assoc,args,ret__3763);
return ret__3763;
}
};
var G__3764 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3764__delegate.call(this, args);
};
G__3764.cljs$lang$maxFixedArity = 0;
G__3764.cljs$lang$applyTo = (function (arglist__3765){
var args = cljs.core.seq( arglist__3765 );;
return G__3764__delegate.call(this, args);
});
return G__3764;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3767 = (function (f){
while(true){
var ret__3766 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3766)))
{{
var G__3770 = ret__3766;
f = G__3770;
continue;
}
} else
{return ret__3766;
}
break;
}
});
var trampoline__3768 = (function() { 
var G__3771__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3771 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3771__delegate.call(this, f, args);
};
G__3771.cljs$lang$maxFixedArity = 1;
G__3771.cljs$lang$applyTo = (function (arglist__3772){
var f = cljs.core.first(arglist__3772);
var args = cljs.core.rest(arglist__3772);
return G__3771__delegate.call(this, f, args);
});
return G__3771;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3767.call(this,f);
default:
return trampoline__3768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3768.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3773 = (function (){
return rand.call(null,1);
});
var rand__3774 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3773.call(this);
case  1 :
return rand__3774.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3776 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3776,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3776,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3785 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3786 = (function (h,child,parent){
var or__3548__auto____3777 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3777))
{return or__3548__auto____3777;
} else
{var or__3548__auto____3778 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3778))
{return or__3548__auto____3778;
} else
{var and__3546__auto____3779 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3779))
{var and__3546__auto____3780 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3780))
{var and__3546__auto____3781 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3781))
{var ret__3782 = true;
var i__3783 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3784 = cljs.core.not.call(null,ret__3782);

if(cljs.core.truth_(or__3548__auto____3784))
{return or__3548__auto____3784;
} else
{return cljs.core._EQ_.call(null,i__3783,cljs.core.count.call(null,parent));
}
})()))
{return ret__3782;
} else
{{
var G__3788 = isa_QMARK_.call(null,h,child.call(null,i__3783),parent.call(null,i__3783));
var G__3789 = (i__3783 + 1);
ret__3782 = G__3788;
i__3783 = G__3789;
continue;
}
}
break;
}
} else
{return and__3546__auto____3781;
}
} else
{return and__3546__auto____3780;
}
} else
{return and__3546__auto____3779;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3785.call(this,h,child);
case  3 :
return isa_QMARK___3786.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3790 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3791 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3790.call(this,h);
case  2 :
return parents__3791.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3793 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3794 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3793.call(this,h);
case  2 :
return ancestors__3794.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3796 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3797 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3796.call(this,h);
case  2 :
return descendants__3797.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3807 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3808 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3802 = "﷐'parents".call(null,h);
var td__3803 = "﷐'descendants".call(null,h);
var ta__3804 = "﷐'ancestors".call(null,h);
var tf__3805 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3806 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3802.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3804.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3804.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3802,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3805.call(null,"﷐'ancestors".call(null,h),tag,td__3803,parent,ta__3804),"﷐'descendants":tf__3805.call(null,"﷐'descendants".call(null,h),parent,ta__3804,tag,td__3803)});
})());

if(cljs.core.truth_(or__3548__auto____3806))
{return or__3548__auto____3806;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3807.call(this,h,tag);
case  3 :
return derive__3808.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3814 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3815 = (function (h,tag,parent){
var parentMap__3810 = "﷐'parents".call(null,h);
var childsParents__3811 = (cljs.core.truth_(parentMap__3810.call(null,tag))?cljs.core.disj.call(null,parentMap__3810.call(null,tag),parent):cljs.core.set([]));
var newParents__3812 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3811))?cljs.core.assoc.call(null,parentMap__3810,tag,childsParents__3811):cljs.core.dissoc.call(null,parentMap__3810,tag));
var deriv_seq__3813 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3799_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3799_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3799_SHARP_),cljs.core.second.call(null,p1__3799_SHARP_)));
}),cljs.core.seq.call(null,newParents__3812)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3810.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3800_SHARP_,p2__3801_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3800_SHARP_,p2__3801_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3813));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3814.call(this,h,tag);
case  3 :
return underive__3815.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3817 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3819 = (cljs.core.truth_((function (){var and__3546__auto____3818 = xprefs__3817;

if(cljs.core.truth_(and__3546__auto____3818))
{return xprefs__3817.call(null,y);
} else
{return and__3546__auto____3818;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3819))
{return or__3548__auto____3819;
} else
{var or__3548__auto____3821 = (function (){var ps__3820 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3820) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3820),prefer_table)))
{} else
{}
{
var G__3824 = cljs.core.rest.call(null,ps__3820);
ps__3820 = G__3824;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3821))
{return or__3548__auto____3821;
} else
{var or__3548__auto____3823 = (function (){var ps__3822 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3822) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3822),y,prefer_table)))
{} else
{}
{
var G__3825 = cljs.core.rest.call(null,ps__3822);
ps__3822 = G__3825;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3823))
{return or__3548__auto____3823;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3826 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3826))
{return or__3548__auto____3826;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3835 = cljs.core.reduce.call(null,(function (be,p__3827){
var vec__3828__3829 = p__3827;
var k__3830 = cljs.core.nth.call(null,vec__3828__3829,0,null);
var ___3831 = cljs.core.nth.call(null,vec__3828__3829,1,null);
var e__3832 = vec__3828__3829;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3830)))
{var be2__3834 = (cljs.core.truth_((function (){var or__3548__auto____3833 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3833))
{return or__3548__auto____3833;
} else
{return cljs.core.dominates.call(null,k__3830,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3832:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3834),k__3830,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3830," and ",cljs.core.first.call(null,be2__3834),", and neither is preferred")));
}
return be2__3834;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3835))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3835));
return cljs.core.second.call(null,best_entry__3835);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3836 = mf;

if(cljs.core.truth_(and__3546__auto____3836))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3836;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3837 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3837))
{return or__3548__auto____3837;
} else
{var or__3548__auto____3838 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3838))
{return or__3548__auto____3838;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3839 = mf;

if(cljs.core.truth_(and__3546__auto____3839))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3839;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3840 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3840))
{return or__3548__auto____3840;
} else
{var or__3548__auto____3841 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3841))
{return or__3548__auto____3841;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3842 = mf;

if(cljs.core.truth_(and__3546__auto____3842))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3842;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3843 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3843))
{return or__3548__auto____3843;
} else
{var or__3548__auto____3844 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3844))
{return or__3548__auto____3844;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3845 = mf;

if(cljs.core.truth_(and__3546__auto____3845))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3845;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3846 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3846))
{return or__3548__auto____3846;
} else
{var or__3548__auto____3847 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3847))
{return or__3548__auto____3847;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3848 = mf;

if(cljs.core.truth_(and__3546__auto____3848))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3848;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3849 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3849))
{return or__3548__auto____3849;
} else
{var or__3548__auto____3850 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3850))
{return or__3548__auto____3850;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3851 = mf;

if(cljs.core.truth_(and__3546__auto____3851))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3851;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3852 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3852))
{return or__3548__auto____3852;
} else
{var or__3548__auto____3853 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3853))
{return or__3548__auto____3853;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3854 = mf;

if(cljs.core.truth_(and__3546__auto____3854))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3854;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3855 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3855))
{return or__3548__auto____3855;
} else
{var or__3548__auto____3856 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3856))
{return or__3548__auto____3856;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3857 = mf;

if(cljs.core.truth_(and__3546__auto____3857))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3857;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3858 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3858))
{return or__3548__auto____3858;
} else
{var or__3548__auto____3859 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3859))
{return or__3548__auto____3859;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3860 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3861 = cljs.core._get_method.call(null,mf,dispatch_val__3860);

if(cljs.core.truth_(target_fn__3861))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3860)));
}
return cljs.core.apply.call(null,target_fn__3861,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3862 = this;
cljs.core.swap_BANG_.call(null,this__3862.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3862.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3862.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3862.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3863 = this;
cljs.core.swap_BANG_.call(null,this__3863.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3863.method_cache,this__3863.method_table,this__3863.cached_hierarchy,this__3863.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3864 = this;
cljs.core.swap_BANG_.call(null,this__3864.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3864.method_cache,this__3864.method_table,this__3864.cached_hierarchy,this__3864.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3865 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3865.cached_hierarchy),cljs.core.deref.call(null,this__3865.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3865.method_cache,this__3865.method_table,this__3865.cached_hierarchy,this__3865.hierarchy);
}
var temp__3695__auto____3866 = cljs.core.deref.call(null,this__3865.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3866))
{var target_fn__3867 = temp__3695__auto____3866;

return target_fn__3867;
} else
{var temp__3695__auto____3868 = cljs.core.find_and_cache_best_method.call(null,this__3865.name,dispatch_val,this__3865.hierarchy,this__3865.method_table,this__3865.prefer_table,this__3865.method_cache,this__3865.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3868))
{var target_fn__3869 = temp__3695__auto____3868;

return target_fn__3869;
} else
{return cljs.core.deref.call(null,this__3865.method_table).call(null,this__3865.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3870 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3870.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3870.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3870.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3870.method_cache,this__3870.method_table,this__3870.cached_hierarchy,this__3870.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3871 = this;
return cljs.core.deref.call(null,this__3871.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3872 = this;
return cljs.core.deref.call(null,this__3872.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3873 = this;
return cljs.core.do_invoke.call(null,mf,this__3873.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3874__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3874 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3874__delegate.call(this, _, args);
};
G__3874.cljs$lang$maxFixedArity = 1;
G__3874.cljs$lang$applyTo = (function (arglist__3875){
var _ = cljs.core.first(arglist__3875);
var args = cljs.core.rest(arglist__3875);
return G__3874__delegate.call(this, _, args);
});
return G__3874;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
