goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
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
var or__3548__auto____2342 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2342))
{return or__3548__auto____2342;
} else
{var or__3548__auto____2343 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2343))
{return or__3548__auto____2343;
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
if(cljs.core.truth_((function (){var and__3546__auto____2344 = coll;

if(cljs.core.truth_(and__3546__auto____2344))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2344;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2345 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2345))
{return or__3548__auto____2345;
} else
{var or__3548__auto____2346 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2346))
{return or__3548__auto____2346;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2347 = coll;

if(cljs.core.truth_(and__3546__auto____2347))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2347;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2348 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2348))
{return or__3548__auto____2348;
} else
{var or__3548__auto____2349 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2349))
{return or__3548__auto____2349;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2350 = coll;

if(cljs.core.truth_(and__3546__auto____2350))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2350;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2351 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2351))
{return or__3548__auto____2351;
} else
{var or__3548__auto____2352 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2352))
{return or__3548__auto____2352;
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
var _nth__2359 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2353 = coll;

if(cljs.core.truth_(and__3546__auto____2353))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2353;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2354 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2354))
{return or__3548__auto____2354;
} else
{var or__3548__auto____2355 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2355))
{return or__3548__auto____2355;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2360 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2356 = coll;

if(cljs.core.truth_(and__3546__auto____2356))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2356;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2357 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2357))
{return or__3548__auto____2357;
} else
{var or__3548__auto____2358 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2358))
{return or__3548__auto____2358;
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
return _nth__2359.call(this,coll,n);
case  3 :
return _nth__2360.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2362 = coll;

if(cljs.core.truth_(and__3546__auto____2362))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2362;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2363 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2363))
{return or__3548__auto____2363;
} else
{var or__3548__auto____2364 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2364))
{return or__3548__auto____2364;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2365 = coll;

if(cljs.core.truth_(and__3546__auto____2365))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2365;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2366 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2366))
{return or__3548__auto____2366;
} else
{var or__3548__auto____2367 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2367))
{return or__3548__auto____2367;
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
var _lookup__2374 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2368 = o;

if(cljs.core.truth_(and__3546__auto____2368))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2368;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2369 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2369))
{return or__3548__auto____2369;
} else
{var or__3548__auto____2370 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2370))
{return or__3548__auto____2370;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2375 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2371 = o;

if(cljs.core.truth_(and__3546__auto____2371))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2371;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2372 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2372))
{return or__3548__auto____2372;
} else
{var or__3548__auto____2373 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2373))
{return or__3548__auto____2373;
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
return _lookup__2374.call(this,o,k);
case  3 :
return _lookup__2375.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2377 = coll;

if(cljs.core.truth_(and__3546__auto____2377))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2377;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2378 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2378))
{return or__3548__auto____2378;
} else
{var or__3548__auto____2379 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2379))
{return or__3548__auto____2379;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2380 = coll;

if(cljs.core.truth_(and__3546__auto____2380))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2380;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2381 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2381))
{return or__3548__auto____2381;
} else
{var or__3548__auto____2382 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2382))
{return or__3548__auto____2382;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2383 = coll;

if(cljs.core.truth_(and__3546__auto____2383))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2383;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2384 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2384))
{return or__3548__auto____2384;
} else
{var or__3548__auto____2385 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2385))
{return or__3548__auto____2385;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2386 = coll;

if(cljs.core.truth_(and__3546__auto____2386))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2386;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2387 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2387))
{return or__3548__auto____2387;
} else
{var or__3548__auto____2388 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2388))
{return or__3548__auto____2388;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2389 = coll;

if(cljs.core.truth_(and__3546__auto____2389))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2389;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2390 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2390))
{return or__3548__auto____2390;
} else
{var or__3548__auto____2391 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2391))
{return or__3548__auto____2391;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2392 = coll;

if(cljs.core.truth_(and__3546__auto____2392))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2392;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2393 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2393))
{return or__3548__auto____2393;
} else
{var or__3548__auto____2394 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2394))
{return or__3548__auto____2394;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2395 = coll;

if(cljs.core.truth_(and__3546__auto____2395))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2395;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2396 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2396))
{return or__3548__auto____2396;
} else
{var or__3548__auto____2397 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2397))
{return or__3548__auto____2397;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2398 = o;

if(cljs.core.truth_(and__3546__auto____2398))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2398;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2399 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2399))
{return or__3548__auto____2399;
} else
{var or__3548__auto____2400 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2400))
{return or__3548__auto____2400;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2401 = o;

if(cljs.core.truth_(and__3546__auto____2401))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2401;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2402 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2402))
{return or__3548__auto____2402;
} else
{var or__3548__auto____2403 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2403))
{return or__3548__auto____2403;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2404 = o;

if(cljs.core.truth_(and__3546__auto____2404))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2404;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2405 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2405))
{return or__3548__auto____2405;
} else
{var or__3548__auto____2406 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2406))
{return or__3548__auto____2406;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2407 = o;

if(cljs.core.truth_(and__3546__auto____2407))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2407;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2408 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2408))
{return or__3548__auto____2408;
} else
{var or__3548__auto____2409 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2409))
{return or__3548__auto____2409;
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
var _reduce__2416 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2410 = coll;

if(cljs.core.truth_(and__3546__auto____2410))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2410;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2411 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{var or__3548__auto____2412 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2412))
{return or__3548__auto____2412;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2417 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2413 = coll;

if(cljs.core.truth_(and__3546__auto____2413))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2413;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2414 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2414))
{return or__3548__auto____2414;
} else
{var or__3548__auto____2415 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2415))
{return or__3548__auto____2415;
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
return _reduce__2416.call(this,coll,f);
case  3 :
return _reduce__2417.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2419 = o;

if(cljs.core.truth_(and__3546__auto____2419))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2419;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2420 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{var or__3548__auto____2421 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2421))
{return or__3548__auto____2421;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2422 = o;

if(cljs.core.truth_(and__3546__auto____2422))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2422;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2423 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{var or__3548__auto____2424 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2425 = o;

if(cljs.core.truth_(and__3546__auto____2425))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2425;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2426 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2426))
{return or__3548__auto____2426;
} else
{var or__3548__auto____2427 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2427))
{return or__3548__auto____2427;
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
if(cljs.core.truth_((function (){var and__3546__auto____2428 = o;

if(cljs.core.truth_(and__3546__auto____2428))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2428;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2429 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2429))
{return or__3548__auto____2429;
} else
{var or__3548__auto____2430 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2430))
{return or__3548__auto____2430;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2431 = d;

if(cljs.core.truth_(and__3546__auto____2431))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2431;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2432 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2432))
{return or__3548__auto____2432;
} else
{var or__3548__auto____2433 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2433))
{return or__3548__auto____2433;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2434 = this$;

if(cljs.core.truth_(and__3546__auto____2434))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2434;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2435 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2435))
{return or__3548__auto____2435;
} else
{var or__3548__auto____2436 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2436))
{return or__3548__auto____2436;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2437 = this$;

if(cljs.core.truth_(and__3546__auto____2437))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2437;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2438 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2438))
{return or__3548__auto____2438;
} else
{var or__3548__auto____2439 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2439))
{return or__3548__auto____2439;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2440 = this$;

if(cljs.core.truth_(and__3546__auto____2440))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2440;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2441 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2441))
{return or__3548__auto____2441;
} else
{var or__3548__auto____2442 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2442))
{return or__3548__auto____2442;
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
var G__2443 = null;
var G__2443__2444 = (function (_,n){
return null;
});
var G__2443__2445 = (function (_,n,not_found){
return not_found;
});
G__2443 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2443__2444.call(this,_,n);
case  3 :
return G__2443__2445.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2443;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2447 = null;
var G__2447__2448 = (function (_,f){
return f.call(null);
});
var G__2447__2449 = (function (_,f,start){
return start;
});
G__2447 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2447__2448.call(this,_,f);
case  3 :
return G__2447__2449.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2447;
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
var G__2451 = null;
var G__2451__2452 = (function (o,k){
return null;
});
var G__2451__2453 = (function (o,k,not_found){
return not_found;
});
G__2451 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2451__2452.call(this,o,k);
case  3 :
return G__2451__2453.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2451;
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
var ci_reduce__2461 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2455 = cljs.core._nth.call(null,cicoll,0);
var n__2456 = 1;

while(true){
if(cljs.core.truth_((n__2456 < cljs.core._count.call(null,cicoll))))
{{
var G__2465 = f.call(null,val__2455,cljs.core._nth.call(null,cicoll,n__2456));
var G__2466 = (n__2456 + 1);
val__2455 = G__2465;
n__2456 = G__2466;
continue;
}
} else
{return val__2455;
}
break;
}
}
});
var ci_reduce__2462 = (function (cicoll,f,val){
var val__2457 = val;
var n__2458 = 0;

while(true){
if(cljs.core.truth_((n__2458 < cljs.core._count.call(null,cicoll))))
{{
var G__2467 = f.call(null,val__2457,cljs.core._nth.call(null,cicoll,n__2458));
var G__2468 = (n__2458 + 1);
val__2457 = G__2467;
n__2458 = G__2468;
continue;
}
} else
{return val__2457;
}
break;
}
});
var ci_reduce__2463 = (function (cicoll,f,val,idx){
var val__2459 = val;
var n__2460 = idx;

while(true){
if(cljs.core.truth_((n__2460 < cljs.core._count.call(null,cicoll))))
{{
var G__2469 = f.call(null,val__2459,cljs.core._nth.call(null,cicoll,n__2460));
var G__2470 = (n__2460 + 1);
val__2459 = G__2469;
n__2460 = G__2470;
continue;
}
} else
{return val__2459;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2461.call(this,cicoll,f);
case  3 :
return ci_reduce__2462.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2463.call(this,cicoll,f,val,idx);
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
var this__2471 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2479 = null;
var G__2479__2480 = (function (coll,f){
var this__2472 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2472.a[this__2472.i]),(this__2472.i + 1));
});
var G__2479__2481 = (function (coll,f,start){
var this__2473 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2473.i);
});
G__2479 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2479__2480.call(this,coll,f);
case  3 :
return G__2479__2481.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2479;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2474 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2475 = this;
return this__2475.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2476 = this;
return (this__2476.a[this__2476.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2477 = this;
if(cljs.core.truth_(((this__2477.i + 1) < this__2477.a.length)))
{return (new cljs.core.IndexedSeq(this__2477.a,(this__2477.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2478 = this;
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
var G__2483 = null;
var G__2483__2484 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2483__2485 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2483 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2483__2484.call(this,array,f);
case  3 :
return G__2483__2485.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2483;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2487 = null;
var G__2487__2488 = (function (array,k){
return (array[k]);
});
var G__2487__2489 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2487 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2487__2488.call(this,array,k);
case  3 :
return G__2487__2489.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2487;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2491 = null;
var G__2491__2492 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2491__2493 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2491 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2491__2492.call(this,array,n);
case  3 :
return G__2491__2493.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2491;
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
var temp__3698__auto____2495 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2495))
{var s__2496 = temp__3698__auto____2495;

return cljs.core._first.call(null,s__2496);
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
var G__2497 = cljs.core.next.call(null,s);
s = G__2497;
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
var s__2498 = cljs.core.seq.call(null,x);
var n__2499 = 0;

while(true){
if(cljs.core.truth_(s__2498))
{{
var G__2500 = cljs.core.next.call(null,s__2498);
var G__2501 = (n__2499 + 1);
s__2498 = G__2500;
n__2499 = G__2501;
continue;
}
} else
{return n__2499;
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
var conj__2502 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2503 = (function() { 
var G__2505__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2506 = conj.call(null,coll,x);
var G__2507 = cljs.core.first.call(null,xs);
var G__2508 = cljs.core.next.call(null,xs);
coll = G__2506;
x = G__2507;
xs = G__2508;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2505 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2505__delegate.call(this, coll, x, xs);
};
G__2505.cljs$lang$maxFixedArity = 2;
G__2505.cljs$lang$applyTo = (function (arglist__2509){
var coll = cljs.core.first(arglist__2509);
var x = cljs.core.first(cljs.core.next(arglist__2509));
var xs = cljs.core.rest(cljs.core.next(arglist__2509));
return G__2505__delegate.call(this, coll, x, xs);
});
return G__2505;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2502.call(this,coll,x);
default:
return conj__2503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2503.cljs$lang$applyTo;
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
var nth__2510 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2511 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2510.call(this,coll,n);
case  3 :
return nth__2511.call(this,coll,n,not_found);
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
var get__2513 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2514 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2513.call(this,o,k);
case  3 :
return get__2514.call(this,o,k,not_found);
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
var assoc__2517 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2518 = (function() { 
var G__2520__delegate = function (coll,k,v,kvs){
while(true){
var ret__2516 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2521 = ret__2516;
var G__2522 = cljs.core.first.call(null,kvs);
var G__2523 = cljs.core.second.call(null,kvs);
var G__2524 = cljs.core.nnext.call(null,kvs);
coll = G__2521;
k = G__2522;
v = G__2523;
kvs = G__2524;
continue;
}
} else
{return ret__2516;
}
break;
}
};
var G__2520 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2520__delegate.call(this, coll, k, v, kvs);
};
G__2520.cljs$lang$maxFixedArity = 3;
G__2520.cljs$lang$applyTo = (function (arglist__2525){
var coll = cljs.core.first(arglist__2525);
var k = cljs.core.first(cljs.core.next(arglist__2525));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2525)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2525)));
return G__2520__delegate.call(this, coll, k, v, kvs);
});
return G__2520;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2517.call(this,coll,k,v);
default:
return assoc__2518.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2518.cljs$lang$applyTo;
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
var dissoc__2527 = (function (coll){
return coll;
});
var dissoc__2528 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2529 = (function() { 
var G__2531__delegate = function (coll,k,ks){
while(true){
var ret__2526 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2532 = ret__2526;
var G__2533 = cljs.core.first.call(null,ks);
var G__2534 = cljs.core.next.call(null,ks);
coll = G__2532;
k = G__2533;
ks = G__2534;
continue;
}
} else
{return ret__2526;
}
break;
}
};
var G__2531 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2531__delegate.call(this, coll, k, ks);
};
G__2531.cljs$lang$maxFixedArity = 2;
G__2531.cljs$lang$applyTo = (function (arglist__2535){
var coll = cljs.core.first(arglist__2535);
var k = cljs.core.first(cljs.core.next(arglist__2535));
var ks = cljs.core.rest(cljs.core.next(arglist__2535));
return G__2531__delegate.call(this, coll, k, ks);
});
return G__2531;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2527.call(this,coll);
case  2 :
return dissoc__2528.call(this,coll,k);
default:
return dissoc__2529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2529.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__302__auto____2536 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2537 = x__302__auto____2536;

if(cljs.core.truth_(and__3546__auto____2537))
{var and__3546__auto____2538 = x__302__auto____2536.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2538))
{return cljs.core.not.call(null,x__302__auto____2536.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2538;
}
} else
{return and__3546__auto____2537;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____2536);
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
var disj__2540 = (function (coll){
return coll;
});
var disj__2541 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2542 = (function() { 
var G__2544__delegate = function (coll,k,ks){
while(true){
var ret__2539 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2545 = ret__2539;
var G__2546 = cljs.core.first.call(null,ks);
var G__2547 = cljs.core.next.call(null,ks);
coll = G__2545;
k = G__2546;
ks = G__2547;
continue;
}
} else
{return ret__2539;
}
break;
}
};
var G__2544 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2544__delegate.call(this, coll, k, ks);
};
G__2544.cljs$lang$maxFixedArity = 2;
G__2544.cljs$lang$applyTo = (function (arglist__2548){
var coll = cljs.core.first(arglist__2548);
var k = cljs.core.first(cljs.core.next(arglist__2548));
var ks = cljs.core.rest(cljs.core.next(arglist__2548));
return G__2544__delegate.call(this, coll, k, ks);
});
return G__2544;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2540.call(this,coll);
case  2 :
return disj__2541.call(this,coll,k);
default:
return disj__2542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2542.cljs$lang$applyTo;
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
{var x__302__auto____2549 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2550 = x__302__auto____2549;

if(cljs.core.truth_(and__3546__auto____2550))
{var and__3546__auto____2551 = x__302__auto____2549.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2551))
{return cljs.core.not.call(null,x__302__auto____2549.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2551;
}
} else
{return and__3546__auto____2550;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__302__auto____2549);
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
{var x__302__auto____2552 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2553 = x__302__auto____2552;

if(cljs.core.truth_(and__3546__auto____2553))
{var and__3546__auto____2554 = x__302__auto____2552.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2554))
{return cljs.core.not.call(null,x__302__auto____2552.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2554;
}
} else
{return and__3546__auto____2553;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__302__auto____2552);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__302__auto____2555 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2556 = x__302__auto____2555;

if(cljs.core.truth_(and__3546__auto____2556))
{var and__3546__auto____2557 = x__302__auto____2555.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2557))
{return cljs.core.not.call(null,x__302__auto____2555.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2557;
}
} else
{return and__3546__auto____2556;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__302__auto____2555);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__302__auto____2558 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2559 = x__302__auto____2558;

if(cljs.core.truth_(and__3546__auto____2559))
{var and__3546__auto____2560 = x__302__auto____2558.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2560))
{return cljs.core.not.call(null,x__302__auto____2558.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2560;
}
} else
{return and__3546__auto____2559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__302__auto____2558);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__302__auto____2561 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2562 = x__302__auto____2561;

if(cljs.core.truth_(and__3546__auto____2562))
{var and__3546__auto____2563 = x__302__auto____2561.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2563))
{return cljs.core.not.call(null,x__302__auto____2561.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2563;
}
} else
{return and__3546__auto____2562;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__302__auto____2561);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__302__auto____2564 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2565 = x__302__auto____2564;

if(cljs.core.truth_(and__3546__auto____2565))
{var and__3546__auto____2566 = x__302__auto____2564.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2566))
{return cljs.core.not.call(null,x__302__auto____2564.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2566;
}
} else
{return and__3546__auto____2565;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__302__auto____2564);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__302__auto____2567 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2568 = x__302__auto____2567;

if(cljs.core.truth_(and__3546__auto____2568))
{var and__3546__auto____2569 = x__302__auto____2567.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2569))
{return cljs.core.not.call(null,x__302__auto____2567.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2569;
}
} else
{return and__3546__auto____2568;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__302__auto____2567);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2570 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2570.push(key);
}));
return keys__2570;
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
{var x__302__auto____2571 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2572 = x__302__auto____2571;

if(cljs.core.truth_(and__3546__auto____2572))
{var and__3546__auto____2573 = x__302__auto____2571.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2573))
{return cljs.core.not.call(null,x__302__auto____2571.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2573;
}
} else
{return and__3546__auto____2572;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__302__auto____2571);
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
var and__3546__auto____2574 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2574))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2575 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2575))
{return or__3548__auto____2575;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2574;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2576 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2576))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2576;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2577 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2577))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2577;
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
var and__3546__auto____2578 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2578))
{return (n == n.toFixed());
} else
{return and__3546__auto____2578;
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
if(cljs.core.truth_((function (){var and__3546__auto____2579 = coll;

if(cljs.core.truth_(and__3546__auto____2579))
{var and__3546__auto____2580 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2580))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2580;
}
} else
{return and__3546__auto____2579;
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
var distinct_QMARK___2585 = (function (x){
return true;
});
var distinct_QMARK___2586 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2587 = (function() { 
var G__2589__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2581 = cljs.core.set([y,x]);
var xs__2582 = more;

while(true){
var x__2583 = cljs.core.first.call(null,xs__2582);
var etc__2584 = cljs.core.next.call(null,xs__2582);

if(cljs.core.truth_(xs__2582))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2581,x__2583)))
{return false;
} else
{{
var G__2590 = cljs.core.conj.call(null,s__2581,x__2583);
var G__2591 = etc__2584;
s__2581 = G__2590;
xs__2582 = G__2591;
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
var G__2589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2589__delegate.call(this, x, y, more);
};
G__2589.cljs$lang$maxFixedArity = 2;
G__2589.cljs$lang$applyTo = (function (arglist__2592){
var x = cljs.core.first(arglist__2592);
var y = cljs.core.first(cljs.core.next(arglist__2592));
var more = cljs.core.rest(cljs.core.next(arglist__2592));
return G__2589__delegate.call(this, x, y, more);
});
return G__2589;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2585.call(this,x);
case  2 :
return distinct_QMARK___2586.call(this,x,y);
default:
return distinct_QMARK___2587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2587.cljs$lang$applyTo;
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
var r__2593 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2593)))
{return r__2593;
} else
{if(cljs.core.truth_(r__2593))
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
var sort__2595 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2596 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2594 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2594,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2594);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2595.call(this,comp);
case  2 :
return sort__2596.call(this,comp,coll);
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
var sort_by__2598 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2599 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2598.call(this,keyfn,comp);
case  3 :
return sort_by__2599.call(this,keyfn,comp,coll);
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
var reduce__2601 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2602 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2601.call(this,f,val);
case  3 :
return reduce__2602.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2608 = (function (f,coll){
var temp__3695__auto____2604 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2604))
{var s__2605 = temp__3695__auto____2604;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2605),cljs.core.next.call(null,s__2605));
} else
{return f.call(null);
}
});
var seq_reduce__2609 = (function (f,val,coll){
var val__2606 = val;
var coll__2607 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2607))
{{
var G__2611 = f.call(null,val__2606,cljs.core.first.call(null,coll__2607));
var G__2612 = cljs.core.next.call(null,coll__2607);
val__2606 = G__2611;
coll__2607 = G__2612;
continue;
}
} else
{return val__2606;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2608.call(this,f,val);
case  3 :
return seq_reduce__2609.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2613 = null;
var G__2613__2614 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2613__2615 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2613 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2613__2614.call(this,coll,f);
case  3 :
return G__2613__2615.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2613;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2617 = (function (){
return 0;
});
var _PLUS___2618 = (function (x){
return x;
});
var _PLUS___2619 = (function (x,y){
return (x + y);
});
var _PLUS___2620 = (function() { 
var G__2622__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2622 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2622__delegate.call(this, x, y, more);
};
G__2622.cljs$lang$maxFixedArity = 2;
G__2622.cljs$lang$applyTo = (function (arglist__2623){
var x = cljs.core.first(arglist__2623);
var y = cljs.core.first(cljs.core.next(arglist__2623));
var more = cljs.core.rest(cljs.core.next(arglist__2623));
return G__2622__delegate.call(this, x, y, more);
});
return G__2622;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2617.call(this);
case  1 :
return _PLUS___2618.call(this,x);
case  2 :
return _PLUS___2619.call(this,x,y);
default:
return _PLUS___2620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2620.cljs$lang$applyTo;
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
var ___2624 = (function (x){
return (- x);
});
var ___2625 = (function (x,y){
return (x - y);
});
var ___2626 = (function() { 
var G__2628__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2628__delegate.call(this, x, y, more);
};
G__2628.cljs$lang$maxFixedArity = 2;
G__2628.cljs$lang$applyTo = (function (arglist__2629){
var x = cljs.core.first(arglist__2629);
var y = cljs.core.first(cljs.core.next(arglist__2629));
var more = cljs.core.rest(cljs.core.next(arglist__2629));
return G__2628__delegate.call(this, x, y, more);
});
return G__2628;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2624.call(this,x);
case  2 :
return ___2625.call(this,x,y);
default:
return ___2626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2626.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2630 = (function (){
return 1;
});
var _STAR___2631 = (function (x){
return x;
});
var _STAR___2632 = (function (x,y){
return (x * y);
});
var _STAR___2633 = (function() { 
var G__2635__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2635 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2635__delegate.call(this, x, y, more);
};
G__2635.cljs$lang$maxFixedArity = 2;
G__2635.cljs$lang$applyTo = (function (arglist__2636){
var x = cljs.core.first(arglist__2636);
var y = cljs.core.first(cljs.core.next(arglist__2636));
var more = cljs.core.rest(cljs.core.next(arglist__2636));
return G__2635__delegate.call(this, x, y, more);
});
return G__2635;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2630.call(this);
case  1 :
return _STAR___2631.call(this,x);
case  2 :
return _STAR___2632.call(this,x,y);
default:
return _STAR___2633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2633.cljs$lang$applyTo;
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
var _SLASH___2637 = (function (x){
return (1 / x);
});
var _SLASH___2638 = (function (x,y){
return (x / y);
});
var _SLASH___2639 = (function() { 
var G__2641__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2641 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2641__delegate.call(this, x, y, more);
};
G__2641.cljs$lang$maxFixedArity = 2;
G__2641.cljs$lang$applyTo = (function (arglist__2642){
var x = cljs.core.first(arglist__2642);
var y = cljs.core.first(cljs.core.next(arglist__2642));
var more = cljs.core.rest(cljs.core.next(arglist__2642));
return G__2641__delegate.call(this, x, y, more);
});
return G__2641;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2637.call(this,x);
case  2 :
return _SLASH___2638.call(this,x,y);
default:
return _SLASH___2639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2639.cljs$lang$applyTo;
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
var _LT___2643 = (function (x){
return true;
});
var _LT___2644 = (function (x,y){
return (x < y);
});
var _LT___2645 = (function() { 
var G__2647__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2648 = y;
var G__2649 = cljs.core.first.call(null,more);
var G__2650 = cljs.core.next.call(null,more);
x = G__2648;
y = G__2649;
more = G__2650;
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
var G__2647 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2647__delegate.call(this, x, y, more);
};
G__2647.cljs$lang$maxFixedArity = 2;
G__2647.cljs$lang$applyTo = (function (arglist__2651){
var x = cljs.core.first(arglist__2651);
var y = cljs.core.first(cljs.core.next(arglist__2651));
var more = cljs.core.rest(cljs.core.next(arglist__2651));
return G__2647__delegate.call(this, x, y, more);
});
return G__2647;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2643.call(this,x);
case  2 :
return _LT___2644.call(this,x,y);
default:
return _LT___2645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2645.cljs$lang$applyTo;
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
var _LT__EQ___2652 = (function (x){
return true;
});
var _LT__EQ___2653 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2654 = (function() { 
var G__2656__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2657 = y;
var G__2658 = cljs.core.first.call(null,more);
var G__2659 = cljs.core.next.call(null,more);
x = G__2657;
y = G__2658;
more = G__2659;
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
var G__2656 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2656__delegate.call(this, x, y, more);
};
G__2656.cljs$lang$maxFixedArity = 2;
G__2656.cljs$lang$applyTo = (function (arglist__2660){
var x = cljs.core.first(arglist__2660);
var y = cljs.core.first(cljs.core.next(arglist__2660));
var more = cljs.core.rest(cljs.core.next(arglist__2660));
return G__2656__delegate.call(this, x, y, more);
});
return G__2656;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2652.call(this,x);
case  2 :
return _LT__EQ___2653.call(this,x,y);
default:
return _LT__EQ___2654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2654.cljs$lang$applyTo;
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
var _GT___2661 = (function (x){
return true;
});
var _GT___2662 = (function (x,y){
return (x > y);
});
var _GT___2663 = (function() { 
var G__2665__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2666 = y;
var G__2667 = cljs.core.first.call(null,more);
var G__2668 = cljs.core.next.call(null,more);
x = G__2666;
y = G__2667;
more = G__2668;
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
var G__2665 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2665__delegate.call(this, x, y, more);
};
G__2665.cljs$lang$maxFixedArity = 2;
G__2665.cljs$lang$applyTo = (function (arglist__2669){
var x = cljs.core.first(arglist__2669);
var y = cljs.core.first(cljs.core.next(arglist__2669));
var more = cljs.core.rest(cljs.core.next(arglist__2669));
return G__2665__delegate.call(this, x, y, more);
});
return G__2665;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2661.call(this,x);
case  2 :
return _GT___2662.call(this,x,y);
default:
return _GT___2663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2663.cljs$lang$applyTo;
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
var _GT__EQ___2670 = (function (x){
return true;
});
var _GT__EQ___2671 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2672 = (function() { 
var G__2674__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2675 = y;
var G__2676 = cljs.core.first.call(null,more);
var G__2677 = cljs.core.next.call(null,more);
x = G__2675;
y = G__2676;
more = G__2677;
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
var G__2674 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2674__delegate.call(this, x, y, more);
};
G__2674.cljs$lang$maxFixedArity = 2;
G__2674.cljs$lang$applyTo = (function (arglist__2678){
var x = cljs.core.first(arglist__2678);
var y = cljs.core.first(cljs.core.next(arglist__2678));
var more = cljs.core.rest(cljs.core.next(arglist__2678));
return G__2674__delegate.call(this, x, y, more);
});
return G__2674;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2670.call(this,x);
case  2 :
return _GT__EQ___2671.call(this,x,y);
default:
return _GT__EQ___2672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2672.cljs$lang$applyTo;
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
var max__2679 = (function (x){
return x;
});
var max__2680 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2681 = (function() { 
var G__2683__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2683 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2683__delegate.call(this, x, y, more);
};
G__2683.cljs$lang$maxFixedArity = 2;
G__2683.cljs$lang$applyTo = (function (arglist__2684){
var x = cljs.core.first(arglist__2684);
var y = cljs.core.first(cljs.core.next(arglist__2684));
var more = cljs.core.rest(cljs.core.next(arglist__2684));
return G__2683__delegate.call(this, x, y, more);
});
return G__2683;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2679.call(this,x);
case  2 :
return max__2680.call(this,x,y);
default:
return max__2681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2681.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2685 = (function (x){
return x;
});
var min__2686 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2687 = (function() { 
var G__2689__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2689 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2689__delegate.call(this, x, y, more);
};
G__2689.cljs$lang$maxFixedArity = 2;
G__2689.cljs$lang$applyTo = (function (arglist__2690){
var x = cljs.core.first(arglist__2690);
var y = cljs.core.first(cljs.core.next(arglist__2690));
var more = cljs.core.rest(cljs.core.next(arglist__2690));
return G__2689__delegate.call(this, x, y, more);
});
return G__2689;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2685.call(this,x);
case  2 :
return min__2686.call(this,x,y);
default:
return min__2687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2687.cljs$lang$applyTo;
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
var rem__2691 = (n % d);

return cljs.core.fix.call(null,((n - rem__2691) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2692 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2692));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2693 = (function (){
return Math.random.call(null);
});
var rand__2694 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2693.call(this);
case  1 :
return rand__2694.call(this,n);
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
var _EQ__EQ___2696 = (function (x){
return true;
});
var _EQ__EQ___2697 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2698 = (function() { 
var G__2700__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2701 = y;
var G__2702 = cljs.core.first.call(null,more);
var G__2703 = cljs.core.next.call(null,more);
x = G__2701;
y = G__2702;
more = G__2703;
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
var G__2700 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2700__delegate.call(this, x, y, more);
};
G__2700.cljs$lang$maxFixedArity = 2;
G__2700.cljs$lang$applyTo = (function (arglist__2704){
var x = cljs.core.first(arglist__2704);
var y = cljs.core.first(cljs.core.next(arglist__2704));
var more = cljs.core.rest(cljs.core.next(arglist__2704));
return G__2700__delegate.call(this, x, y, more);
});
return G__2700;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2696.call(this,x);
case  2 :
return _EQ__EQ___2697.call(this,x,y);
default:
return _EQ__EQ___2698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2698.cljs$lang$applyTo;
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
var n__2705 = n;
var xs__2706 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2707 = xs__2706;

if(cljs.core.truth_(and__3546__auto____2707))
{return (n__2705 > 0);
} else
{return and__3546__auto____2707;
}
})()))
{{
var G__2708 = (n__2705 - 1);
var G__2709 = cljs.core.next.call(null,xs__2706);
n__2705 = G__2708;
xs__2706 = G__2709;
continue;
}
} else
{return xs__2706;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2714 = null;
var G__2714__2715 = (function (coll,n){
var temp__3695__auto____2710 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2710))
{var xs__2711 = temp__3695__auto____2710;

return cljs.core.first.call(null,xs__2711);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2714__2716 = (function (coll,n,not_found){
var temp__3695__auto____2712 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2712))
{var xs__2713 = temp__3695__auto____2712;

return cljs.core.first.call(null,xs__2713);
} else
{return not_found;
}
});
G__2714 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2714__2715.call(this,coll,n);
case  3 :
return G__2714__2716.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2714;
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
var str__2718 = (function (){
return "";
});
var str__2719 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2720 = (function() { 
var G__2722__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2723 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2724 = cljs.core.next.call(null,more);
sb = G__2723;
more = G__2724;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2722 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2722__delegate.call(this, x, ys);
};
G__2722.cljs$lang$maxFixedArity = 1;
G__2722.cljs$lang$applyTo = (function (arglist__2725){
var x = cljs.core.first(arglist__2725);
var ys = cljs.core.rest(arglist__2725);
return G__2722__delegate.call(this, x, ys);
});
return G__2722;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2718.call(this);
case  1 :
return str__2719.call(this,x);
default:
return str__2720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2720.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2726 = (function (s,start){
return s.substring(start);
});
var subs__2727 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2726.call(this,s,start);
case  3 :
return subs__2727.call(this,s,start,end);
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
var symbol__2729 = (function (name){
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
var symbol__2730 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2729.call(this,ns);
case  2 :
return symbol__2730.call(this,ns,name);
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
var keyword__2732 = (function (name){
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
var keyword__2733 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2732.call(this,ns);
case  2 :
return keyword__2733.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2735 = cljs.core.seq.call(null,x);
var ys__2736 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2735)))
{return cljs.core.nil_QMARK_.call(null,ys__2736);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2736)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2735),cljs.core.first.call(null,ys__2736))))
{{
var G__2737 = cljs.core.next.call(null,xs__2735);
var G__2738 = cljs.core.next.call(null,ys__2736);
xs__2735 = G__2737;
ys__2736 = G__2738;
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
return cljs.core.reduce.call(null,(function (p1__2739_SHARP_,p2__2740_SHARP_){
return cljs.core.hash_combine.call(null,p1__2739_SHARP_,cljs.core.hash.call(null,p2__2740_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
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
var this__2741 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2742 = this;
return (new cljs.core.List(this__2742.meta,o,coll,(this__2742.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2743 = this;
return this__2743.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2744 = this;
return this__2744.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2745 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2746 = this;
return this__2746.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2747 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2748 = this;
return (new cljs.core.List(meta,this__2748.first,this__2748.rest,this__2748.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2749 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2750 = this;
return this__2750.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2751 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2752 = this;
return this__2752.count;
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
var this__2753 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2754 = this;
return (new cljs.core.List(this__2754.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2755 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2756 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2757 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2758 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2759 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2760 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2761 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2762 = this;
return this__2762.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2763 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2764 = this;
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
list.cljs$lang$applyTo = (function (arglist__2765){
var items = cljs.core.seq( arglist__2765 );;
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
var this__2766 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2767 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2768 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2769 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2769.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2770 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2771 = this;
return this__2771.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2772 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2772.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2772.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2773 = this;
return this__2773.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2774 = this;
return (new cljs.core.Cons(meta,this__2774.first,this__2774.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2775 = null;
var G__2775__2776 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2775__2777 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2775 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2775__2776.call(this,string,f);
case  3 :
return G__2775__2777.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2775;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2779 = null;
var G__2779__2780 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2779__2781 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2779 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2779__2780.call(this,string,k);
case  3 :
return G__2779__2781.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2779;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2783 = null;
var G__2783__2784 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2783__2785 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2783 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2783__2784.call(this,string,n);
case  3 :
return G__2783__2785.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2783;
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
var G__2787 = null;
var G__2787__2788 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2787__2789 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2787 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2787__2788.call(this,_,coll);
case  3 :
return G__2787__2789.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2787;
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
var x__2791 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2791;
} else
{lazy_seq.x = x__2791.call(null);
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
var this__2792 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2793 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2794 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2795 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2795.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2796 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2797 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2798 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2799 = this;
return this__2799.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2800 = this;
return (new cljs.core.LazySeq(meta,this__2800.realized,this__2800.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2801 = cljs.core.array.call(null);

var s__2802 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2802)))
{ary__2801.push(cljs.core.first.call(null,s__2802));
{
var G__2803 = cljs.core.next.call(null,s__2802);
s__2802 = G__2803;
continue;
}
} else
{return ary__2801;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2804 = s;
var i__2805 = n;
var sum__2806 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2807 = (i__2805 > 0);

if(cljs.core.truth_(and__3546__auto____2807))
{return cljs.core.seq.call(null,s__2804);
} else
{return and__3546__auto____2807;
}
})()))
{{
var G__2808 = cljs.core.next.call(null,s__2804);
var G__2809 = (i__2805 - 1);
var G__2810 = (sum__2806 + 1);
s__2804 = G__2808;
i__2805 = G__2809;
sum__2806 = G__2810;
continue;
}
} else
{return sum__2806;
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
var concat__2814 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2815 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2816 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2811 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2811))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2811),concat.call(null,cljs.core.rest.call(null,s__2811),y));
} else
{return y;
}
})));
});
var concat__2817 = (function() { 
var G__2819__delegate = function (x,y,zs){
var cat__2813 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2812 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2812))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2812),cat.call(null,cljs.core.rest.call(null,xys__2812),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2813.call(null,concat.call(null,x,y),zs);
};
var G__2819 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2819__delegate.call(this, x, y, zs);
};
G__2819.cljs$lang$maxFixedArity = 2;
G__2819.cljs$lang$applyTo = (function (arglist__2820){
var x = cljs.core.first(arglist__2820);
var y = cljs.core.first(cljs.core.next(arglist__2820));
var zs = cljs.core.rest(cljs.core.next(arglist__2820));
return G__2819__delegate.call(this, x, y, zs);
});
return G__2819;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2814.call(this);
case  1 :
return concat__2815.call(this,x);
case  2 :
return concat__2816.call(this,x,y);
default:
return concat__2817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2817.cljs$lang$applyTo;
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
var list_STAR___2821 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2822 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2823 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2824 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2825 = (function() { 
var G__2827__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2827 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2827__delegate.call(this, a, b, c, d, more);
};
G__2827.cljs$lang$maxFixedArity = 4;
G__2827.cljs$lang$applyTo = (function (arglist__2828){
var a = cljs.core.first(arglist__2828);
var b = cljs.core.first(cljs.core.next(arglist__2828));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2828)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2828))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2828))));
return G__2827__delegate.call(this, a, b, c, d, more);
});
return G__2827;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2821.call(this,a);
case  2 :
return list_STAR___2822.call(this,a,b);
case  3 :
return list_STAR___2823.call(this,a,b,c);
case  4 :
return list_STAR___2824.call(this,a,b,c,d);
default:
return list_STAR___2825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2825.cljs$lang$applyTo;
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
var apply__2838 = (function (f,args){
var fixed_arity__2829 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2829 + 1)) <= fixed_arity__2829)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2839 = (function (f,x,args){
var arglist__2830 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2831 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2830,fixed_arity__2831) <= fixed_arity__2831)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2830));
} else
{return f.cljs$lang$applyTo(arglist__2830);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2830));
}
});
var apply__2840 = (function (f,x,y,args){
var arglist__2832 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2833 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2832,fixed_arity__2833) <= fixed_arity__2833)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2832));
} else
{return f.cljs$lang$applyTo(arglist__2832);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2832));
}
});
var apply__2841 = (function (f,x,y,z,args){
var arglist__2834 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2835 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2834,fixed_arity__2835) <= fixed_arity__2835)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2834));
} else
{return f.cljs$lang$applyTo(arglist__2834);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2834));
}
});
var apply__2842 = (function() { 
var G__2844__delegate = function (f,a,b,c,d,args){
var arglist__2836 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2837 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2836,fixed_arity__2837) <= fixed_arity__2837)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2836));
} else
{return f.cljs$lang$applyTo(arglist__2836);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2836));
}
};
var G__2844 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2844__delegate.call(this, f, a, b, c, d, args);
};
G__2844.cljs$lang$maxFixedArity = 5;
G__2844.cljs$lang$applyTo = (function (arglist__2845){
var f = cljs.core.first(arglist__2845);
var a = cljs.core.first(cljs.core.next(arglist__2845));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2845)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2845))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2845)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2845)))));
return G__2844__delegate.call(this, f, a, b, c, d, args);
});
return G__2844;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2838.call(this,f,a);
case  3 :
return apply__2839.call(this,f,a,b);
case  4 :
return apply__2840.call(this,f,a,b,c);
case  5 :
return apply__2841.call(this,f,a,b,c,d);
default:
return apply__2842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2842.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2846){
var obj = cljs.core.first(arglist__2846);
var f = cljs.core.first(cljs.core.next(arglist__2846));
var args = cljs.core.rest(cljs.core.next(arglist__2846));
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
var not_EQ___2847 = (function (x){
return false;
});
var not_EQ___2848 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2849 = (function() { 
var G__2851__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2851 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2851__delegate.call(this, x, y, more);
};
G__2851.cljs$lang$maxFixedArity = 2;
G__2851.cljs$lang$applyTo = (function (arglist__2852){
var x = cljs.core.first(arglist__2852);
var y = cljs.core.first(cljs.core.next(arglist__2852));
var more = cljs.core.rest(cljs.core.next(arglist__2852));
return G__2851__delegate.call(this, x, y, more);
});
return G__2851;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2847.call(this,x);
case  2 :
return not_EQ___2848.call(this,x,y);
default:
return not_EQ___2849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2849.cljs$lang$applyTo;
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
var G__2853 = pred;
var G__2854 = cljs.core.next.call(null,coll);
pred = G__2853;
coll = G__2854;
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
{var or__3548__auto____2855 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2855))
{return or__3548__auto____2855;
} else
{{
var G__2856 = pred;
var G__2857 = cljs.core.next.call(null,coll);
pred = G__2856;
coll = G__2857;
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
var G__2858 = null;
var G__2858__2859 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2858__2860 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2858__2861 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2858__2862 = (function() { 
var G__2864__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2864 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2864__delegate.call(this, x, y, zs);
};
G__2864.cljs$lang$maxFixedArity = 2;
G__2864.cljs$lang$applyTo = (function (arglist__2865){
var x = cljs.core.first(arglist__2865);
var y = cljs.core.first(cljs.core.next(arglist__2865));
var zs = cljs.core.rest(cljs.core.next(arglist__2865));
return G__2864__delegate.call(this, x, y, zs);
});
return G__2864;
})()
;
G__2858 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2858__2859.call(this);
case  1 :
return G__2858__2860.call(this,x);
case  2 :
return G__2858__2861.call(this,x,y);
default:
return G__2858__2862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2858.cljs$lang$maxFixedArity = 2;
G__2858.cljs$lang$applyTo = G__2858__2862.cljs$lang$applyTo;
return G__2858;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2866__delegate = function (args){
return x;
};
var G__2866 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2866__delegate.call(this, args);
};
G__2866.cljs$lang$maxFixedArity = 0;
G__2866.cljs$lang$applyTo = (function (arglist__2867){
var args = cljs.core.seq( arglist__2867 );;
return G__2866__delegate.call(this, args);
});
return G__2866;
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
var comp__2871 = (function (){
return cljs.core.identity;
});
var comp__2872 = (function (f){
return f;
});
var comp__2873 = (function (f,g){
return (function() {
var G__2877 = null;
var G__2877__2878 = (function (){
return f.call(null,g.call(null));
});
var G__2877__2879 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2877__2880 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2877__2881 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2877__2882 = (function() { 
var G__2884__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2884 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2884__delegate.call(this, x, y, z, args);
};
G__2884.cljs$lang$maxFixedArity = 3;
G__2884.cljs$lang$applyTo = (function (arglist__2885){
var x = cljs.core.first(arglist__2885);
var y = cljs.core.first(cljs.core.next(arglist__2885));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2885)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2885)));
return G__2884__delegate.call(this, x, y, z, args);
});
return G__2884;
})()
;
G__2877 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2877__2878.call(this);
case  1 :
return G__2877__2879.call(this,x);
case  2 :
return G__2877__2880.call(this,x,y);
case  3 :
return G__2877__2881.call(this,x,y,z);
default:
return G__2877__2882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2877.cljs$lang$maxFixedArity = 3;
G__2877.cljs$lang$applyTo = G__2877__2882.cljs$lang$applyTo;
return G__2877;
})()
});
var comp__2874 = (function (f,g,h){
return (function() {
var G__2886 = null;
var G__2886__2887 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2886__2888 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2886__2889 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2886__2890 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2886__2891 = (function() { 
var G__2893__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2893 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2893__delegate.call(this, x, y, z, args);
};
G__2893.cljs$lang$maxFixedArity = 3;
G__2893.cljs$lang$applyTo = (function (arglist__2894){
var x = cljs.core.first(arglist__2894);
var y = cljs.core.first(cljs.core.next(arglist__2894));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2894)));
return G__2893__delegate.call(this, x, y, z, args);
});
return G__2893;
})()
;
G__2886 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2886__2887.call(this);
case  1 :
return G__2886__2888.call(this,x);
case  2 :
return G__2886__2889.call(this,x,y);
case  3 :
return G__2886__2890.call(this,x,y,z);
default:
return G__2886__2891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2886.cljs$lang$maxFixedArity = 3;
G__2886.cljs$lang$applyTo = G__2886__2891.cljs$lang$applyTo;
return G__2886;
})()
});
var comp__2875 = (function() { 
var G__2895__delegate = function (f1,f2,f3,fs){
var fs__2868 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2896__delegate = function (args){
var ret__2869 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2868),args);
var fs__2870 = cljs.core.next.call(null,fs__2868);

while(true){
if(cljs.core.truth_(fs__2870))
{{
var G__2897 = cljs.core.first.call(null,fs__2870).call(null,ret__2869);
var G__2898 = cljs.core.next.call(null,fs__2870);
ret__2869 = G__2897;
fs__2870 = G__2898;
continue;
}
} else
{return ret__2869;
}
break;
}
};
var G__2896 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2896__delegate.call(this, args);
};
G__2896.cljs$lang$maxFixedArity = 0;
G__2896.cljs$lang$applyTo = (function (arglist__2899){
var args = cljs.core.seq( arglist__2899 );;
return G__2896__delegate.call(this, args);
});
return G__2896;
})()
;
};
var G__2895 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2895__delegate.call(this, f1, f2, f3, fs);
};
G__2895.cljs$lang$maxFixedArity = 3;
G__2895.cljs$lang$applyTo = (function (arglist__2900){
var f1 = cljs.core.first(arglist__2900);
var f2 = cljs.core.first(cljs.core.next(arglist__2900));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2900)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2900)));
return G__2895__delegate.call(this, f1, f2, f3, fs);
});
return G__2895;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2871.call(this);
case  1 :
return comp__2872.call(this,f1);
case  2 :
return comp__2873.call(this,f1,f2);
case  3 :
return comp__2874.call(this,f1,f2,f3);
default:
return comp__2875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2875.cljs$lang$applyTo;
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
var partial__2901 = (function (f,arg1){
return (function() { 
var G__2906__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2906 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2906__delegate.call(this, args);
};
G__2906.cljs$lang$maxFixedArity = 0;
G__2906.cljs$lang$applyTo = (function (arglist__2907){
var args = cljs.core.seq( arglist__2907 );;
return G__2906__delegate.call(this, args);
});
return G__2906;
})()
;
});
var partial__2902 = (function (f,arg1,arg2){
return (function() { 
var G__2908__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2908 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2908__delegate.call(this, args);
};
G__2908.cljs$lang$maxFixedArity = 0;
G__2908.cljs$lang$applyTo = (function (arglist__2909){
var args = cljs.core.seq( arglist__2909 );;
return G__2908__delegate.call(this, args);
});
return G__2908;
})()
;
});
var partial__2903 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2910__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2910 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2910__delegate.call(this, args);
};
G__2910.cljs$lang$maxFixedArity = 0;
G__2910.cljs$lang$applyTo = (function (arglist__2911){
var args = cljs.core.seq( arglist__2911 );;
return G__2910__delegate.call(this, args);
});
return G__2910;
})()
;
});
var partial__2904 = (function() { 
var G__2912__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2913__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2913 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2913__delegate.call(this, args);
};
G__2913.cljs$lang$maxFixedArity = 0;
G__2913.cljs$lang$applyTo = (function (arglist__2914){
var args = cljs.core.seq( arglist__2914 );;
return G__2913__delegate.call(this, args);
});
return G__2913;
})()
;
};
var G__2912 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2912__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2912.cljs$lang$maxFixedArity = 4;
G__2912.cljs$lang$applyTo = (function (arglist__2915){
var f = cljs.core.first(arglist__2915);
var arg1 = cljs.core.first(cljs.core.next(arglist__2915));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2915)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2915))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2915))));
return G__2912__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2912;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2901.call(this,f,arg1);
case  3 :
return partial__2902.call(this,f,arg1,arg2);
case  4 :
return partial__2903.call(this,f,arg1,arg2,arg3);
default:
return partial__2904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2904.cljs$lang$applyTo;
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
var fnil__2916 = (function (f,x){
return (function() {
var G__2920 = null;
var G__2920__2921 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2920__2922 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2920__2923 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2920__2924 = (function() { 
var G__2926__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2926 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2926__delegate.call(this, a, b, c, ds);
};
G__2926.cljs$lang$maxFixedArity = 3;
G__2926.cljs$lang$applyTo = (function (arglist__2927){
var a = cljs.core.first(arglist__2927);
var b = cljs.core.first(cljs.core.next(arglist__2927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2927)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2927)));
return G__2926__delegate.call(this, a, b, c, ds);
});
return G__2926;
})()
;
G__2920 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2920__2921.call(this,a);
case  2 :
return G__2920__2922.call(this,a,b);
case  3 :
return G__2920__2923.call(this,a,b,c);
default:
return G__2920__2924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2920.cljs$lang$maxFixedArity = 3;
G__2920.cljs$lang$applyTo = G__2920__2924.cljs$lang$applyTo;
return G__2920;
})()
});
var fnil__2917 = (function (f,x,y){
return (function() {
var G__2928 = null;
var G__2928__2929 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2928__2930 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2928__2931 = (function() { 
var G__2933__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2933 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2933__delegate.call(this, a, b, c, ds);
};
G__2933.cljs$lang$maxFixedArity = 3;
G__2933.cljs$lang$applyTo = (function (arglist__2934){
var a = cljs.core.first(arglist__2934);
var b = cljs.core.first(cljs.core.next(arglist__2934));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2934)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2934)));
return G__2933__delegate.call(this, a, b, c, ds);
});
return G__2933;
})()
;
G__2928 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2928__2929.call(this,a,b);
case  3 :
return G__2928__2930.call(this,a,b,c);
default:
return G__2928__2931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2928.cljs$lang$maxFixedArity = 3;
G__2928.cljs$lang$applyTo = G__2928__2931.cljs$lang$applyTo;
return G__2928;
})()
});
var fnil__2918 = (function (f,x,y,z){
return (function() {
var G__2935 = null;
var G__2935__2936 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2935__2937 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2935__2938 = (function() { 
var G__2940__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2940 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2940__delegate.call(this, a, b, c, ds);
};
G__2940.cljs$lang$maxFixedArity = 3;
G__2940.cljs$lang$applyTo = (function (arglist__2941){
var a = cljs.core.first(arglist__2941);
var b = cljs.core.first(cljs.core.next(arglist__2941));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2941)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2941)));
return G__2940__delegate.call(this, a, b, c, ds);
});
return G__2940;
})()
;
G__2935 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2935__2936.call(this,a,b);
case  3 :
return G__2935__2937.call(this,a,b,c);
default:
return G__2935__2938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2935.cljs$lang$maxFixedArity = 3;
G__2935.cljs$lang$applyTo = G__2935__2938.cljs$lang$applyTo;
return G__2935;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2916.call(this,f,x);
case  3 :
return fnil__2917.call(this,f,x,y);
case  4 :
return fnil__2918.call(this,f,x,y,z);
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
var mapi__2944 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2942 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2942))
{var s__2943 = temp__3698__auto____2942;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2943)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2943)));
} else
{return null;
}
})));
});

return mapi__2944.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2945))
{var s__2946 = temp__3698__auto____2945;

var x__2947 = f.call(null,cljs.core.first.call(null,s__2946));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2947)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2946));
} else
{return cljs.core.cons.call(null,x__2947,keep.call(null,f,cljs.core.rest.call(null,s__2946)));
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
var keepi__2957 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2954))
{var s__2955 = temp__3698__auto____2954;

var x__2956 = f.call(null,idx,cljs.core.first.call(null,s__2955));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2956)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2955));
} else
{return cljs.core.cons.call(null,x__2956,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2955)));
}
} else
{return null;
}
})));
});

return keepi__2957.call(null,0,coll);
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
var every_pred__3002 = (function (p){
return (function() {
var ep1 = null;
var ep1__3007 = (function (){
return true;
});
var ep1__3008 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3009 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2964 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2964))
{return p.call(null,y);
} else
{return and__3546__auto____2964;
}
})());
});
var ep1__3010 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2965 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2965))
{var and__3546__auto____2966 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____2966))
{return p.call(null,z);
} else
{return and__3546__auto____2966;
}
} else
{return and__3546__auto____2965;
}
})());
});
var ep1__3011 = (function() { 
var G__3013__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2967 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2967))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____2967;
}
})());
};
var G__3013 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3013__delegate.call(this, x, y, z, args);
};
G__3013.cljs$lang$maxFixedArity = 3;
G__3013.cljs$lang$applyTo = (function (arglist__3014){
var x = cljs.core.first(arglist__3014);
var y = cljs.core.first(cljs.core.next(arglist__3014));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3014)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3014)));
return G__3013__delegate.call(this, x, y, z, args);
});
return G__3013;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3007.call(this);
case  1 :
return ep1__3008.call(this,x);
case  2 :
return ep1__3009.call(this,x,y);
case  3 :
return ep1__3010.call(this,x,y,z);
default:
return ep1__3011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3011.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3003 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3015 = (function (){
return true;
});
var ep2__3016 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2968 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2968))
{return p2.call(null,x);
} else
{return and__3546__auto____2968;
}
})());
});
var ep2__3017 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2969 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2969))
{var and__3546__auto____2970 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2970))
{var and__3546__auto____2971 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2971))
{return p2.call(null,y);
} else
{return and__3546__auto____2971;
}
} else
{return and__3546__auto____2970;
}
} else
{return and__3546__auto____2969;
}
})());
});
var ep2__3018 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2972 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2972))
{var and__3546__auto____2973 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2973))
{var and__3546__auto____2974 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2974))
{var and__3546__auto____2975 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2975))
{var and__3546__auto____2976 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2976))
{return p2.call(null,z);
} else
{return and__3546__auto____2976;
}
} else
{return and__3546__auto____2975;
}
} else
{return and__3546__auto____2974;
}
} else
{return and__3546__auto____2973;
}
} else
{return and__3546__auto____2972;
}
})());
});
var ep2__3019 = (function() { 
var G__3021__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2977 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2977))
{return cljs.core.every_QMARK_.call(null,(function (p1__2948_SHARP_){
var and__3546__auto____2978 = p1.call(null,p1__2948_SHARP_);

if(cljs.core.truth_(and__3546__auto____2978))
{return p2.call(null,p1__2948_SHARP_);
} else
{return and__3546__auto____2978;
}
}),args);
} else
{return and__3546__auto____2977;
}
})());
};
var G__3021 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3021__delegate.call(this, x, y, z, args);
};
G__3021.cljs$lang$maxFixedArity = 3;
G__3021.cljs$lang$applyTo = (function (arglist__3022){
var x = cljs.core.first(arglist__3022);
var y = cljs.core.first(cljs.core.next(arglist__3022));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3022)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3022)));
return G__3021__delegate.call(this, x, y, z, args);
});
return G__3021;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3015.call(this);
case  1 :
return ep2__3016.call(this,x);
case  2 :
return ep2__3017.call(this,x,y);
case  3 :
return ep2__3018.call(this,x,y,z);
default:
return ep2__3019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3019.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3004 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3023 = (function (){
return true;
});
var ep3__3024 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2979 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2979))
{var and__3546__auto____2980 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2980))
{return p3.call(null,x);
} else
{return and__3546__auto____2980;
}
} else
{return and__3546__auto____2979;
}
})());
});
var ep3__3025 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2981 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2981))
{var and__3546__auto____2982 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2982))
{var and__3546__auto____2983 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2983))
{var and__3546__auto____2984 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2984))
{var and__3546__auto____2985 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2985))
{return p3.call(null,y);
} else
{return and__3546__auto____2985;
}
} else
{return and__3546__auto____2984;
}
} else
{return and__3546__auto____2983;
}
} else
{return and__3546__auto____2982;
}
} else
{return and__3546__auto____2981;
}
})());
});
var ep3__3026 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2986 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2986))
{var and__3546__auto____2987 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2987))
{var and__3546__auto____2988 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2988))
{var and__3546__auto____2989 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2989))
{var and__3546__auto____2990 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2990))
{var and__3546__auto____2991 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____2991))
{var and__3546__auto____2992 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2992))
{var and__3546__auto____2993 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____2993))
{return p3.call(null,z);
} else
{return and__3546__auto____2993;
}
} else
{return and__3546__auto____2992;
}
} else
{return and__3546__auto____2991;
}
} else
{return and__3546__auto____2990;
}
} else
{return and__3546__auto____2989;
}
} else
{return and__3546__auto____2988;
}
} else
{return and__3546__auto____2987;
}
} else
{return and__3546__auto____2986;
}
})());
});
var ep3__3027 = (function() { 
var G__3029__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2994 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2994))
{return cljs.core.every_QMARK_.call(null,(function (p1__2949_SHARP_){
var and__3546__auto____2995 = p1.call(null,p1__2949_SHARP_);

if(cljs.core.truth_(and__3546__auto____2995))
{var and__3546__auto____2996 = p2.call(null,p1__2949_SHARP_);

if(cljs.core.truth_(and__3546__auto____2996))
{return p3.call(null,p1__2949_SHARP_);
} else
{return and__3546__auto____2996;
}
} else
{return and__3546__auto____2995;
}
}),args);
} else
{return and__3546__auto____2994;
}
})());
};
var G__3029 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3029__delegate.call(this, x, y, z, args);
};
G__3029.cljs$lang$maxFixedArity = 3;
G__3029.cljs$lang$applyTo = (function (arglist__3030){
var x = cljs.core.first(arglist__3030);
var y = cljs.core.first(cljs.core.next(arglist__3030));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3030)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3030)));
return G__3029__delegate.call(this, x, y, z, args);
});
return G__3029;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3023.call(this);
case  1 :
return ep3__3024.call(this,x);
case  2 :
return ep3__3025.call(this,x,y);
case  3 :
return ep3__3026.call(this,x,y,z);
default:
return ep3__3027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3027.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3005 = (function() { 
var G__3031__delegate = function (p1,p2,p3,ps){
var ps__2997 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3032 = (function (){
return true;
});
var epn__3033 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2950_SHARP_){
return p1__2950_SHARP_.call(null,x);
}),ps__2997);
});
var epn__3034 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2951_SHARP_){
var and__3546__auto____2998 = p1__2951_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2998))
{return p1__2951_SHARP_.call(null,y);
} else
{return and__3546__auto____2998;
}
}),ps__2997);
});
var epn__3035 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2952_SHARP_){
var and__3546__auto____2999 = p1__2952_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2999))
{var and__3546__auto____3000 = p1__2952_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3000))
{return p1__2952_SHARP_.call(null,z);
} else
{return and__3546__auto____3000;
}
} else
{return and__3546__auto____2999;
}
}),ps__2997);
});
var epn__3036 = (function() { 
var G__3038__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3001 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3001))
{return cljs.core.every_QMARK_.call(null,(function (p1__2953_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2953_SHARP_,args);
}),ps__2997);
} else
{return and__3546__auto____3001;
}
})());
};
var G__3038 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3038__delegate.call(this, x, y, z, args);
};
G__3038.cljs$lang$maxFixedArity = 3;
G__3038.cljs$lang$applyTo = (function (arglist__3039){
var x = cljs.core.first(arglist__3039);
var y = cljs.core.first(cljs.core.next(arglist__3039));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3039)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3039)));
return G__3038__delegate.call(this, x, y, z, args);
});
return G__3038;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3032.call(this);
case  1 :
return epn__3033.call(this,x);
case  2 :
return epn__3034.call(this,x,y);
case  3 :
return epn__3035.call(this,x,y,z);
default:
return epn__3036.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3036.cljs$lang$applyTo;
return epn;
})()
};
var G__3031 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3031__delegate.call(this, p1, p2, p3, ps);
};
G__3031.cljs$lang$maxFixedArity = 3;
G__3031.cljs$lang$applyTo = (function (arglist__3040){
var p1 = cljs.core.first(arglist__3040);
var p2 = cljs.core.first(cljs.core.next(arglist__3040));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3040)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3040)));
return G__3031__delegate.call(this, p1, p2, p3, ps);
});
return G__3031;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3002.call(this,p1);
case  2 :
return every_pred__3003.call(this,p1,p2);
case  3 :
return every_pred__3004.call(this,p1,p2,p3);
default:
return every_pred__3005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3005.cljs$lang$applyTo;
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
var some_fn__3080 = (function (p){
return (function() {
var sp1 = null;
var sp1__3085 = (function (){
return null;
});
var sp1__3086 = (function (x){
return p.call(null,x);
});
var sp1__3087 = (function (x,y){
var or__3548__auto____3042 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3042))
{return or__3548__auto____3042;
} else
{return p.call(null,y);
}
});
var sp1__3088 = (function (x,y,z){
var or__3548__auto____3043 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3043))
{return or__3548__auto____3043;
} else
{var or__3548__auto____3044 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3044))
{return or__3548__auto____3044;
} else
{return p.call(null,z);
}
}
});
var sp1__3089 = (function() { 
var G__3091__delegate = function (x,y,z,args){
var or__3548__auto____3045 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3045))
{return or__3548__auto____3045;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3091 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3091__delegate.call(this, x, y, z, args);
};
G__3091.cljs$lang$maxFixedArity = 3;
G__3091.cljs$lang$applyTo = (function (arglist__3092){
var x = cljs.core.first(arglist__3092);
var y = cljs.core.first(cljs.core.next(arglist__3092));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3092)));
return G__3091__delegate.call(this, x, y, z, args);
});
return G__3091;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3085.call(this);
case  1 :
return sp1__3086.call(this,x);
case  2 :
return sp1__3087.call(this,x,y);
case  3 :
return sp1__3088.call(this,x,y,z);
default:
return sp1__3089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3089.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3081 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3093 = (function (){
return null;
});
var sp2__3094 = (function (x){
var or__3548__auto____3046 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3046))
{return or__3548__auto____3046;
} else
{return p2.call(null,x);
}
});
var sp2__3095 = (function (x,y){
var or__3548__auto____3047 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
} else
{var or__3548__auto____3048 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3048))
{return or__3548__auto____3048;
} else
{var or__3548__auto____3049 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3049))
{return or__3548__auto____3049;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3096 = (function (x,y,z){
var or__3548__auto____3050 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3050))
{return or__3548__auto____3050;
} else
{var or__3548__auto____3051 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{var or__3548__auto____3052 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3052))
{return or__3548__auto____3052;
} else
{var or__3548__auto____3053 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3053))
{return or__3548__auto____3053;
} else
{var or__3548__auto____3054 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3054))
{return or__3548__auto____3054;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3097 = (function() { 
var G__3099__delegate = function (x,y,z,args){
var or__3548__auto____3055 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3055))
{return or__3548__auto____3055;
} else
{return cljs.core.some.call(null,(function (p1__2958_SHARP_){
var or__3548__auto____3056 = p1.call(null,p1__2958_SHARP_);

if(cljs.core.truth_(or__3548__auto____3056))
{return or__3548__auto____3056;
} else
{return p2.call(null,p1__2958_SHARP_);
}
}),args);
}
};
var G__3099 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3099__delegate.call(this, x, y, z, args);
};
G__3099.cljs$lang$maxFixedArity = 3;
G__3099.cljs$lang$applyTo = (function (arglist__3100){
var x = cljs.core.first(arglist__3100);
var y = cljs.core.first(cljs.core.next(arglist__3100));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3100)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3100)));
return G__3099__delegate.call(this, x, y, z, args);
});
return G__3099;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3093.call(this);
case  1 :
return sp2__3094.call(this,x);
case  2 :
return sp2__3095.call(this,x,y);
case  3 :
return sp2__3096.call(this,x,y,z);
default:
return sp2__3097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3097.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3082 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3101 = (function (){
return null;
});
var sp3__3102 = (function (x){
var or__3548__auto____3057 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3057))
{return or__3548__auto____3057;
} else
{var or__3548__auto____3058 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3058))
{return or__3548__auto____3058;
} else
{return p3.call(null,x);
}
}
});
var sp3__3103 = (function (x,y){
var or__3548__auto____3059 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3059))
{return or__3548__auto____3059;
} else
{var or__3548__auto____3060 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3060))
{return or__3548__auto____3060;
} else
{var or__3548__auto____3061 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3061))
{return or__3548__auto____3061;
} else
{var or__3548__auto____3062 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3062))
{return or__3548__auto____3062;
} else
{var or__3548__auto____3063 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3063))
{return or__3548__auto____3063;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3104 = (function (x,y,z){
var or__3548__auto____3064 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3064))
{return or__3548__auto____3064;
} else
{var or__3548__auto____3065 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3065))
{return or__3548__auto____3065;
} else
{var or__3548__auto____3066 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3066))
{return or__3548__auto____3066;
} else
{var or__3548__auto____3067 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3067))
{return or__3548__auto____3067;
} else
{var or__3548__auto____3068 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3068))
{return or__3548__auto____3068;
} else
{var or__3548__auto____3069 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3069))
{return or__3548__auto____3069;
} else
{var or__3548__auto____3070 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3070))
{return or__3548__auto____3070;
} else
{var or__3548__auto____3071 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3071))
{return or__3548__auto____3071;
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
var sp3__3105 = (function() { 
var G__3107__delegate = function (x,y,z,args){
var or__3548__auto____3072 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3072))
{return or__3548__auto____3072;
} else
{return cljs.core.some.call(null,(function (p1__2959_SHARP_){
var or__3548__auto____3073 = p1.call(null,p1__2959_SHARP_);

if(cljs.core.truth_(or__3548__auto____3073))
{return or__3548__auto____3073;
} else
{var or__3548__auto____3074 = p2.call(null,p1__2959_SHARP_);

if(cljs.core.truth_(or__3548__auto____3074))
{return or__3548__auto____3074;
} else
{return p3.call(null,p1__2959_SHARP_);
}
}
}),args);
}
};
var G__3107 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3107__delegate.call(this, x, y, z, args);
};
G__3107.cljs$lang$maxFixedArity = 3;
G__3107.cljs$lang$applyTo = (function (arglist__3108){
var x = cljs.core.first(arglist__3108);
var y = cljs.core.first(cljs.core.next(arglist__3108));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3108)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3108)));
return G__3107__delegate.call(this, x, y, z, args);
});
return G__3107;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3101.call(this);
case  1 :
return sp3__3102.call(this,x);
case  2 :
return sp3__3103.call(this,x,y);
case  3 :
return sp3__3104.call(this,x,y,z);
default:
return sp3__3105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3105.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3083 = (function() { 
var G__3109__delegate = function (p1,p2,p3,ps){
var ps__3075 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3110 = (function (){
return null;
});
var spn__3111 = (function (x){
return cljs.core.some.call(null,(function (p1__2960_SHARP_){
return p1__2960_SHARP_.call(null,x);
}),ps__3075);
});
var spn__3112 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2961_SHARP_){
var or__3548__auto____3076 = p1__2961_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3076))
{return or__3548__auto____3076;
} else
{return p1__2961_SHARP_.call(null,y);
}
}),ps__3075);
});
var spn__3113 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2962_SHARP_){
var or__3548__auto____3077 = p1__2962_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3077))
{return or__3548__auto____3077;
} else
{var or__3548__auto____3078 = p1__2962_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3078))
{return or__3548__auto____3078;
} else
{return p1__2962_SHARP_.call(null,z);
}
}
}),ps__3075);
});
var spn__3114 = (function() { 
var G__3116__delegate = function (x,y,z,args){
var or__3548__auto____3079 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3079))
{return or__3548__auto____3079;
} else
{return cljs.core.some.call(null,(function (p1__2963_SHARP_){
return cljs.core.some.call(null,p1__2963_SHARP_,args);
}),ps__3075);
}
};
var G__3116 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3116__delegate.call(this, x, y, z, args);
};
G__3116.cljs$lang$maxFixedArity = 3;
G__3116.cljs$lang$applyTo = (function (arglist__3117){
var x = cljs.core.first(arglist__3117);
var y = cljs.core.first(cljs.core.next(arglist__3117));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3117)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3117)));
return G__3116__delegate.call(this, x, y, z, args);
});
return G__3116;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3110.call(this);
case  1 :
return spn__3111.call(this,x);
case  2 :
return spn__3112.call(this,x,y);
case  3 :
return spn__3113.call(this,x,y,z);
default:
return spn__3114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3114.cljs$lang$applyTo;
return spn;
})()
};
var G__3109 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3109__delegate.call(this, p1, p2, p3, ps);
};
G__3109.cljs$lang$maxFixedArity = 3;
G__3109.cljs$lang$applyTo = (function (arglist__3118){
var p1 = cljs.core.first(arglist__3118);
var p2 = cljs.core.first(cljs.core.next(arglist__3118));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3118)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3118)));
return G__3109__delegate.call(this, p1, p2, p3, ps);
});
return G__3109;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3080.call(this,p1);
case  2 :
return some_fn__3081.call(this,p1,p2);
case  3 :
return some_fn__3082.call(this,p1,p2,p3);
default:
return some_fn__3083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3083.cljs$lang$applyTo;
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
var map__3131 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3119 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3119))
{var s__3120 = temp__3698__auto____3119;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3120)),map.call(null,f,cljs.core.rest.call(null,s__3120)));
} else
{return null;
}
})));
});
var map__3132 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3121 = cljs.core.seq.call(null,c1);
var s2__3122 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3123 = s1__3121;

if(cljs.core.truth_(and__3546__auto____3123))
{return s2__3122;
} else
{return and__3546__auto____3123;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3121),cljs.core.first.call(null,s2__3122)),map.call(null,f,cljs.core.rest.call(null,s1__3121),cljs.core.rest.call(null,s2__3122)));
} else
{return null;
}
})));
});
var map__3133 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3124 = cljs.core.seq.call(null,c1);
var s2__3125 = cljs.core.seq.call(null,c2);
var s3__3126 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3127 = s1__3124;

if(cljs.core.truth_(and__3546__auto____3127))
{var and__3546__auto____3128 = s2__3125;

if(cljs.core.truth_(and__3546__auto____3128))
{return s3__3126;
} else
{return and__3546__auto____3128;
}
} else
{return and__3546__auto____3127;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3124),cljs.core.first.call(null,s2__3125),cljs.core.first.call(null,s3__3126)),map.call(null,f,cljs.core.rest.call(null,s1__3124),cljs.core.rest.call(null,s2__3125),cljs.core.rest.call(null,s3__3126)));
} else
{return null;
}
})));
});
var map__3134 = (function() { 
var G__3136__delegate = function (f,c1,c2,c3,colls){
var step__3130 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3129 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3129)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3129),step.call(null,map.call(null,cljs.core.rest,ss__3129)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3041_SHARP_){
return cljs.core.apply.call(null,f,p1__3041_SHARP_);
}),step__3130.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3136 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3136__delegate.call(this, f, c1, c2, c3, colls);
};
G__3136.cljs$lang$maxFixedArity = 4;
G__3136.cljs$lang$applyTo = (function (arglist__3137){
var f = cljs.core.first(arglist__3137);
var c1 = cljs.core.first(cljs.core.next(arglist__3137));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3137)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3137))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3137))));
return G__3136__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3136;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3131.call(this,f,c1);
case  3 :
return map__3132.call(this,f,c1,c2);
case  4 :
return map__3133.call(this,f,c1,c2,c3);
default:
return map__3134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3134.cljs$lang$applyTo;
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
{var temp__3698__auto____3138 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3138))
{var s__3139 = temp__3698__auto____3138;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3139),take.call(null,(n - 1),cljs.core.rest.call(null,s__3139)));
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
var step__3142 = (function (n,coll){
while(true){
var s__3140 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3141 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3141))
{return s__3140;
} else
{return and__3546__auto____3141;
}
})()))
{{
var G__3143 = (n - 1);
var G__3144 = cljs.core.rest.call(null,s__3140);
n = G__3143;
coll = G__3144;
continue;
}
} else
{return s__3140;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3142.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3145 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3146 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3145.call(this,n);
case  2 :
return drop_last__3146.call(this,n,s);
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
var s__3148 = cljs.core.seq.call(null,coll);
var lead__3149 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3149))
{{
var G__3150 = cljs.core.next.call(null,s__3148);
var G__3151 = cljs.core.next.call(null,lead__3149);
s__3148 = G__3150;
lead__3149 = G__3151;
continue;
}
} else
{return s__3148;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3154 = (function (pred,coll){
while(true){
var s__3152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3153 = s__3152;

if(cljs.core.truth_(and__3546__auto____3153))
{return pred.call(null,cljs.core.first.call(null,s__3152));
} else
{return and__3546__auto____3153;
}
})()))
{{
var G__3155 = pred;
var G__3156 = cljs.core.rest.call(null,s__3152);
pred = G__3155;
coll = G__3156;
continue;
}
} else
{return s__3152;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3154.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3157 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3157))
{var s__3158 = temp__3698__auto____3157;

return cljs.core.concat.call(null,s__3158,cycle.call(null,s__3158));
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
var repeat__3159 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3160 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3159.call(this,n);
case  2 :
return repeat__3160.call(this,n,x);
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
var repeatedly__3162 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3163 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3162.call(this,n);
case  2 :
return repeatedly__3163.call(this,n,f);
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
var interleave__3169 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3165 = cljs.core.seq.call(null,c1);
var s2__3166 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3167 = s1__3165;

if(cljs.core.truth_(and__3546__auto____3167))
{return s2__3166;
} else
{return and__3546__auto____3167;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3165),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3166),interleave.call(null,cljs.core.rest.call(null,s1__3165),cljs.core.rest.call(null,s2__3166))));
} else
{return null;
}
})));
});
var interleave__3170 = (function() { 
var G__3172__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3168 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3168)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3168),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3168)));
} else
{return null;
}
})));
};
var G__3172 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3172__delegate.call(this, c1, c2, colls);
};
G__3172.cljs$lang$maxFixedArity = 2;
G__3172.cljs$lang$applyTo = (function (arglist__3173){
var c1 = cljs.core.first(arglist__3173);
var c2 = cljs.core.first(cljs.core.next(arglist__3173));
var colls = cljs.core.rest(cljs.core.next(arglist__3173));
return G__3172__delegate.call(this, c1, c2, colls);
});
return G__3172;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3169.call(this,c1,c2);
default:
return interleave__3170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3170.cljs$lang$applyTo;
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
var cat__3176 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3174 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3174))
{var coll__3175 = temp__3695__auto____3174;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3175),cat.call(null,cljs.core.rest.call(null,coll__3175),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3176.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3177 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3178 = (function() { 
var G__3180__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3180 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3180__delegate.call(this, f, coll, colls);
};
G__3180.cljs$lang$maxFixedArity = 2;
G__3180.cljs$lang$applyTo = (function (arglist__3181){
var f = cljs.core.first(arglist__3181);
var coll = cljs.core.first(cljs.core.next(arglist__3181));
var colls = cljs.core.rest(cljs.core.next(arglist__3181));
return G__3180__delegate.call(this, f, coll, colls);
});
return G__3180;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3177.call(this,f,coll);
default:
return mapcat__3178.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3178.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3182 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3182))
{var s__3183 = temp__3698__auto____3182;

var f__3184 = cljs.core.first.call(null,s__3183);
var r__3185 = cljs.core.rest.call(null,s__3183);

if(cljs.core.truth_(pred.call(null,f__3184)))
{return cljs.core.cons.call(null,f__3184,filter.call(null,pred,r__3185));
} else
{return filter.call(null,pred,r__3185);
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
var walk__3187 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3187.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3186_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3186_SHARP_));
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
var partition__3194 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3195 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3188 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3188))
{var s__3189 = temp__3698__auto____3188;

var p__3190 = cljs.core.take.call(null,n,s__3189);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3190))))
{return cljs.core.cons.call(null,p__3190,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3189)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3196 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3191 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3191))
{var s__3192 = temp__3698__auto____3191;

var p__3193 = cljs.core.take.call(null,n,s__3192);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3193))))
{return cljs.core.cons.call(null,p__3193,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3192)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3193,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3194.call(this,n,step);
case  3 :
return partition__3195.call(this,n,step,pad);
case  4 :
return partition__3196.call(this,n,step,pad,coll);
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
var get_in__3202 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3203 = (function (m,ks,not_found){
var sentinel__3198 = cljs.core.lookup_sentinel;
var m__3199 = m;
var ks__3200 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3200))
{var m__3201 = cljs.core.get.call(null,m__3199,cljs.core.first.call(null,ks__3200),sentinel__3198);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3198,m__3201)))
{return not_found;
} else
{{
var G__3205 = sentinel__3198;
var G__3206 = m__3201;
var G__3207 = cljs.core.next.call(null,ks__3200);
sentinel__3198 = G__3205;
m__3199 = G__3206;
ks__3200 = G__3207;
continue;
}
}
} else
{return m__3199;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3202.call(this,m,ks);
case  3 :
return get_in__3203.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3208,v){
var vec__3209__3210 = p__3208;
var k__3211 = cljs.core.nth.call(null,vec__3209__3210,0,null);
var ks__3212 = cljs.core.nthnext.call(null,vec__3209__3210,1);

if(cljs.core.truth_(ks__3212))
{return cljs.core.assoc.call(null,m,k__3211,assoc_in.call(null,cljs.core.get.call(null,m,k__3211),ks__3212,v));
} else
{return cljs.core.assoc.call(null,m,k__3211,v);
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
var update_in__delegate = function (m,p__3213,f,args){
var vec__3214__3215 = p__3213;
var k__3216 = cljs.core.nth.call(null,vec__3214__3215,0,null);
var ks__3217 = cljs.core.nthnext.call(null,vec__3214__3215,1);

if(cljs.core.truth_(ks__3217))
{return cljs.core.assoc.call(null,m,k__3216,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3216),ks__3217,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3216,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3216),args));
}
};
var update_in = function (m,p__3213,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3213, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3218){
var m = cljs.core.first(arglist__3218);
var p__3213 = cljs.core.first(cljs.core.next(arglist__3218));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3218)));
return update_in__delegate.call(this, m, p__3213, f, args);
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
var this__3219 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3220 = this;
var new_array__3221 = cljs.core.aclone.call(null,this__3220.array);

new_array__3221.push(o);
return (new cljs.core.Vector(this__3220.meta,new_array__3221));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3222 = this;
if(cljs.core.truth_((this__3222.array.length > 0)))
{var vector_seq__3223 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3222.array.length)))
{return cljs.core.cons.call(null,(this__3222.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3223.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3224 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3225 = this;
var count__3226 = this__3225.array.length;

if(cljs.core.truth_((count__3226 > 0)))
{return (this__3225.array[(count__3226 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3227 = this;
if(cljs.core.truth_((this__3227.array.length > 0)))
{var new_array__3228 = cljs.core.aclone.call(null,this__3227.array);

new_array__3228.pop();
return (new cljs.core.Vector(this__3227.meta,new_array__3228));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3229 = this;
return (new cljs.core.Vector(meta,this__3229.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3230 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3230.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3244 = null;
var G__3244__3245 = (function (coll,n){
var this__3231 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3232 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3232))
{return (n < this__3231.array.length);
} else
{return and__3546__auto____3232;
}
})()))
{return (this__3231.array[n]);
} else
{return null;
}
});
var G__3244__3246 = (function (coll,n,not_found){
var this__3233 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3234 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3234))
{return (n < this__3233.array.length);
} else
{return and__3546__auto____3234;
}
})()))
{return (this__3233.array[n]);
} else
{return not_found;
}
});
G__3244 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3244__3245.call(this,coll,n);
case  3 :
return G__3244__3246.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3244;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3235 = this;
return this__3235.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3248 = null;
var G__3248__3249 = (function (v,f){
var this__3236 = this;
return cljs.core.ci_reduce.call(null,this__3236.array,f);
});
var G__3248__3250 = (function (v,f,start){
var this__3237 = this;
return cljs.core.ci_reduce.call(null,this__3237.array,f,start);
});
G__3248 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3248__3249.call(this,v,f);
case  3 :
return G__3248__3250.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3248;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3238 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3239 = this;
return this__3239.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3240 = this;
var new_array__3241 = cljs.core.aclone.call(null,this__3240.array);

(new_array__3241[k] = v);
return (new cljs.core.Vector(this__3240.meta,new_array__3241));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3252 = null;
var G__3252__3253 = (function (coll,k){
var this__3242 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3252__3254 = (function (coll,k,not_found){
var this__3243 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3252 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3252__3253.call(this,coll,k);
case  3 :
return G__3252__3254.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3252;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3256 = null;
var G__3256__3257 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3256__3258 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3256 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3256__3257.call(this,_,k);
case  3 :
return G__3256__3258.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3256;
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
vector.cljs$lang$applyTo = (function (arglist__3260){
var args = cljs.core.seq( arglist__3260 );;
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
var this__3261 = this;
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
var len__3262 = array.length;

var i__3263 = 0;

while(true){
if(cljs.core.truth_((i__3263 < len__3262)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3263]))))
{return i__3263;
} else
{{
var G__3264 = (i__3263 + incr);
i__3263 = G__3264;
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
var obj_map_contains_key_QMARK___3266 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3267 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3265 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3265))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3265;
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
return obj_map_contains_key_QMARK___3266.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3267.call(this,k,strobj,true_val,false_val);
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
var this__3270 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3271 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3272 = this;
if(cljs.core.truth_((this__3272.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3269_SHARP_){
return cljs.core.vector.call(null,p1__3269_SHARP_,(this__3272.strobj[p1__3269_SHARP_]));
}),this__3272.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3273 = this;
return (new cljs.core.ObjMap(meta,this__3273.keys,this__3273.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3274 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3275 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3275))
{return this__3274.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3275;
}
})()))
{var new_keys__3276 = cljs.core.aclone.call(null,this__3274.keys);
var new_strobj__3277 = goog.object.clone.call(null,this__3274.strobj);

new_keys__3276.splice(cljs.core.scan_array.call(null,1,k,new_keys__3276),1);
cljs.core.js_delete.call(null,new_strobj__3277,k);
return (new cljs.core.ObjMap(this__3274.meta,new_keys__3276,new_strobj__3277));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3278 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3278.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3279 = this;
return this__3279.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3280 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3281 = this;
return this__3281.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3282 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3283 = goog.object.clone.call(null,this__3282.strobj);
var overwrite_QMARK___3284 = new_strobj__3283.hasOwnProperty(k);

(new_strobj__3283[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3284))
{return (new cljs.core.ObjMap(this__3282.meta,this__3282.keys,new_strobj__3283));
} else
{var new_keys__3285 = cljs.core.aclone.call(null,this__3282.keys);

new_keys__3285.push(k);
return (new cljs.core.ObjMap(this__3282.meta,new_keys__3285,new_strobj__3283));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3282.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3286 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3286.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3289 = null;
var G__3289__3290 = (function (coll,k){
var this__3287 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3289__3291 = (function (coll,k,not_found){
var this__3288 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3288.strobj,(this__3288.strobj[k]),not_found);
});
G__3289 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3289__3290.call(this,coll,k);
case  3 :
return G__3289__3291.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3289;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3294 = null;
var G__3294__3295 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3294__3296 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3294 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3294__3295.call(this,_,k);
case  3 :
return G__3294__3296.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3294;
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
var this__3298 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3299 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3300 = this;
if(cljs.core.truth_((this__3300.count > 0)))
{var hashes__3301 = cljs.core.js_keys.call(null,this__3300.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3293_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3300.hashobj[p1__3293_SHARP_])));
}),hashes__3301);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3302 = this;
return (new cljs.core.HashMap(meta,this__3302.count,this__3302.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3303 = this;
var h__3304 = cljs.core.hash.call(null,k);
var bucket__3305 = (this__3303.hashobj[h__3304]);
var i__3306 = (cljs.core.truth_(bucket__3305)?cljs.core.scan_array.call(null,2,k,bucket__3305):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3306)))
{return coll;
} else
{var new_hashobj__3307 = goog.object.clone.call(null,this__3303.hashobj);

if(cljs.core.truth_((3 > bucket__3305.length)))
{cljs.core.js_delete.call(null,new_hashobj__3307,h__3304);
} else
{var new_bucket__3308 = cljs.core.aclone.call(null,bucket__3305);

new_bucket__3308.splice(i__3306,2);
(new_hashobj__3307[h__3304] = new_bucket__3308);
}
return (new cljs.core.HashMap(this__3303.meta,(this__3303.count - 1),new_hashobj__3307));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3309 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3309.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3310 = this;
return this__3310.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3311 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3312 = this;
return this__3312.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3313 = this;
var h__3314 = cljs.core.hash.call(null,k);
var bucket__3315 = (this__3313.hashobj[h__3314]);

if(cljs.core.truth_(bucket__3315))
{var new_bucket__3316 = cljs.core.aclone.call(null,bucket__3315);
var new_hashobj__3317 = goog.object.clone.call(null,this__3313.hashobj);

(new_hashobj__3317[h__3314] = new_bucket__3316);
var temp__3695__auto____3318 = cljs.core.scan_array.call(null,2,k,new_bucket__3316);

if(cljs.core.truth_(temp__3695__auto____3318))
{var i__3319 = temp__3695__auto____3318;

(new_bucket__3316[(i__3319 + 1)] = v);
return (new cljs.core.HashMap(this__3313.meta,this__3313.count,new_hashobj__3317));
} else
{new_bucket__3316.push(k,v);
return (new cljs.core.HashMap(this__3313.meta,(this__3313.count + 1),new_hashobj__3317));
}
} else
{var new_hashobj__3320 = goog.object.clone.call(null,this__3313.hashobj);

(new_hashobj__3320[h__3314] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3313.meta,(this__3313.count + 1),new_hashobj__3320));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3321 = this;
var bucket__3322 = (this__3321.hashobj[cljs.core.hash.call(null,k)]);
var i__3323 = (cljs.core.truth_(bucket__3322)?cljs.core.scan_array.call(null,2,k,bucket__3322):null);

if(cljs.core.truth_(i__3323))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3328 = null;
var G__3328__3329 = (function (coll,k){
var this__3324 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3328__3330 = (function (coll,k,not_found){
var this__3325 = this;
var bucket__3326 = (this__3325.hashobj[cljs.core.hash.call(null,k)]);
var i__3327 = (cljs.core.truth_(bucket__3326)?cljs.core.scan_array.call(null,2,k,bucket__3326):null);

if(cljs.core.truth_(i__3327))
{return (bucket__3326[(i__3327 + 1)]);
} else
{return not_found;
}
});
G__3328 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3328__3329.call(this,coll,k);
case  3 :
return G__3328__3330.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3328;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3332 = ks.length;

var i__3333 = 0;
var out__3334 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3333 < len__3332)))
{{
var G__3335 = (i__3333 + 1);
var G__3336 = cljs.core.assoc.call(null,out__3334,(ks[i__3333]),(vs[i__3333]));
i__3333 = G__3335;
out__3334 = G__3336;
continue;
}
} else
{return out__3334;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3337 = null;
var G__3337__3338 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3337__3339 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3337 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3337__3338.call(this,_,k);
case  3 :
return G__3337__3339.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3337;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3341 = cljs.core.seq.call(null,keyvals);
var out__3342 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3341))
{{
var G__3343 = cljs.core.nnext.call(null,in$__3341);
var G__3344 = cljs.core.assoc.call(null,out__3342,cljs.core.first.call(null,in$__3341),cljs.core.second.call(null,in$__3341));
in$__3341 = G__3343;
out__3342 = G__3344;
continue;
}
} else
{return out__3342;
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
hash_map.cljs$lang$applyTo = (function (arglist__3345){
var keyvals = cljs.core.seq( arglist__3345 );;
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
{return cljs.core.reduce.call(null,(function (p1__3346_SHARP_,p2__3347_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3348 = p1__3346_SHARP_;

if(cljs.core.truth_(or__3548__auto____3348))
{return or__3548__auto____3348;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3347_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3349){
var maps = cljs.core.seq( arglist__3349 );;
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
{var merge_entry__3352 = (function (m,e){
var k__3350 = cljs.core.first.call(null,e);
var v__3351 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3350)))
{return cljs.core.assoc.call(null,m,k__3350,f.call(null,cljs.core.get.call(null,m,k__3350),v__3351));
} else
{return cljs.core.assoc.call(null,m,k__3350,v__3351);
}
});
var merge2__3354 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3352,(function (){var or__3548__auto____3353 = m1;

if(cljs.core.truth_(or__3548__auto____3353))
{return or__3548__auto____3353;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3354,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3355){
var f = cljs.core.first(arglist__3355);
var maps = cljs.core.rest(arglist__3355);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3357 = cljs.core.ObjMap.fromObject([],{});
var keys__3358 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3358))
{var key__3359 = cljs.core.first.call(null,keys__3358);
var entry__3360 = cljs.core.get.call(null,map,key__3359);

{
var G__3361 = (cljs.core.truth_(entry__3360)?cljs.core.assoc.call(null,ret__3357,key__3359,entry__3360):ret__3357);
var G__3362 = cljs.core.next.call(null,keys__3358);
ret__3357 = G__3361;
keys__3358 = G__3362;
continue;
}
} else
{return ret__3357;
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
var this__3363 = this;
return (new cljs.core.Set(this__3363.meta,cljs.core.dissoc.call(null,this__3363.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3364 = this;
var and__3546__auto____3365 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3365))
{var and__3546__auto____3366 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3366))
{return cljs.core.every_QMARK_.call(null,(function (p1__3356_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3356_SHARP_);
}),other);
} else
{return and__3546__auto____3366;
}
} else
{return and__3546__auto____3365;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3367 = this;
return (new cljs.core.Set(this__3367.meta,cljs.core.assoc.call(null,this__3367.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3368 = this;
return cljs.core.keys.call(null,this__3368.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3369 = this;
return (new cljs.core.Set(meta,this__3369.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3370 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3370.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3371 = this;
return this__3371.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3372 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3373 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3376 = null;
var G__3376__3377 = (function (coll,v){
var this__3374 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3376__3378 = (function (coll,v,not_found){
var this__3375 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3375.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3376 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3376__3377.call(this,coll,v);
case  3 :
return G__3376__3378.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3376;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3380 = null;
var G__3380__3381 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3380__3382 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3380 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3380__3381.call(this,_,k);
case  3 :
return G__3380__3382.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3380;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3385 = cljs.core.seq.call(null,coll);
var out__3386 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3385))))
{{
var G__3387 = cljs.core.rest.call(null,in$__3385);
var G__3388 = cljs.core.conj.call(null,out__3386,cljs.core.first.call(null,in$__3385));
in$__3385 = G__3387;
out__3386 = G__3388;
continue;
}
} else
{return out__3386;
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
{var n__3389 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3390 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3390))
{var e__3391 = temp__3695__auto____3390;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3391));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3389,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3384_SHARP_){
var temp__3695__auto____3392 = cljs.core.find.call(null,smap,p1__3384_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3392))
{var e__3393 = temp__3695__auto____3392;

return cljs.core.second.call(null,e__3393);
} else
{return p1__3384_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3401 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3394,seen){
while(true){
var vec__3395__3396 = p__3394;
var f__3397 = cljs.core.nth.call(null,vec__3395__3396,0,null);
var xs__3398 = vec__3395__3396;

var temp__3698__auto____3399 = cljs.core.seq.call(null,xs__3398);

if(cljs.core.truth_(temp__3698__auto____3399))
{var s__3400 = temp__3698__auto____3399;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3397)))
{{
var G__3402 = cljs.core.rest.call(null,s__3400);
var G__3403 = seen;
p__3394 = G__3402;
seen = G__3403;
continue;
}
} else
{return cljs.core.cons.call(null,f__3397,step.call(null,cljs.core.rest.call(null,s__3400),cljs.core.conj.call(null,seen,f__3397)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3401.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3404 = cljs.core.Vector.fromArray([]);
var s__3405 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3405)))
{{
var G__3406 = cljs.core.conj.call(null,ret__3404,cljs.core.first.call(null,s__3405));
var G__3407 = cljs.core.next.call(null,s__3405);
ret__3404 = G__3406;
s__3405 = G__3407;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3404);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3408 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3408))
{return or__3548__auto____3408;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3409 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3409 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3409 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3410 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3410))
{return or__3548__auto____3410;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3411 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3411 > -1)))
{return cljs.core.subs.call(null,x,2,i__3411);
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
var map__3414 = cljs.core.ObjMap.fromObject([],{});
var ks__3415 = cljs.core.seq.call(null,keys);
var vs__3416 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3417 = ks__3415;

if(cljs.core.truth_(and__3546__auto____3417))
{return vs__3416;
} else
{return and__3546__auto____3417;
}
})()))
{{
var G__3418 = cljs.core.assoc.call(null,map__3414,cljs.core.first.call(null,ks__3415),cljs.core.first.call(null,vs__3416));
var G__3419 = cljs.core.next.call(null,ks__3415);
var G__3420 = cljs.core.next.call(null,vs__3416);
map__3414 = G__3418;
ks__3415 = G__3419;
vs__3416 = G__3420;
continue;
}
} else
{return map__3414;
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
var max_key__3423 = (function (k,x){
return x;
});
var max_key__3424 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3425 = (function() { 
var G__3427__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3412_SHARP_,p2__3413_SHARP_){
return max_key.call(null,k,p1__3412_SHARP_,p2__3413_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3427 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3427__delegate.call(this, k, x, y, more);
};
G__3427.cljs$lang$maxFixedArity = 3;
G__3427.cljs$lang$applyTo = (function (arglist__3428){
var k = cljs.core.first(arglist__3428);
var x = cljs.core.first(cljs.core.next(arglist__3428));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3428)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3428)));
return G__3427__delegate.call(this, k, x, y, more);
});
return G__3427;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3423.call(this,k,x);
case  3 :
return max_key__3424.call(this,k,x,y);
default:
return max_key__3425.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3425.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3429 = (function (k,x){
return x;
});
var min_key__3430 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3431 = (function() { 
var G__3433__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3421_SHARP_,p2__3422_SHARP_){
return min_key.call(null,k,p1__3421_SHARP_,p2__3422_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3433 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3433__delegate.call(this, k, x, y, more);
};
G__3433.cljs$lang$maxFixedArity = 3;
G__3433.cljs$lang$applyTo = (function (arglist__3434){
var k = cljs.core.first(arglist__3434);
var x = cljs.core.first(cljs.core.next(arglist__3434));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3434)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3434)));
return G__3433__delegate.call(this, k, x, y, more);
});
return G__3433;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3429.call(this,k,x);
case  3 :
return min_key__3430.call(this,k,x,y);
default:
return min_key__3431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3431.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3437 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3438 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3435))
{var s__3436 = temp__3698__auto____3435;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3436),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3436)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3437.call(this,n,step);
case  3 :
return partition_all__3438.call(this,n,step,coll);
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
var temp__3698__auto____3440 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3440))
{var s__3441 = temp__3698__auto____3440;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3441))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3441),take_while.call(null,pred,cljs.core.rest.call(null,s__3441)));
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
var this__3442 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3443 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3444 = this;
return this__3444.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3445 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3445.meta,(this__3445.start + this__3445.step),this__3445.end,this__3445.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3446 = this;
var comp__3447 = (cljs.core.truth_((this__3446.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3447.call(null,this__3446.start,this__3446.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3448 = this;
return (new cljs.core.Range(meta,this__3448.start,this__3448.end,this__3448.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3449 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3449.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3459 = null;
var G__3459__3460 = (function (rng,n){
var this__3450 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3450.start + (n * this__3450.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3451 = (this__3450.start > this__3450.end);

if(cljs.core.truth_(and__3546__auto____3451))
{return cljs.core._EQ_.call(null,this__3450.step,0);
} else
{return and__3546__auto____3451;
}
})()))
{return this__3450.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3459__3461 = (function (rng,n,not_found){
var this__3452 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3452.start + (n * this__3452.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3453 = (this__3452.start > this__3452.end);

if(cljs.core.truth_(and__3546__auto____3453))
{return cljs.core._EQ_.call(null,this__3452.step,0);
} else
{return and__3546__auto____3453;
}
})()))
{return this__3452.start;
} else
{return not_found;
}
}
});
G__3459 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3459__3460.call(this,rng,n);
case  3 :
return G__3459__3461.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3459;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3454 = this;
return this__3454.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3463 = null;
var G__3463__3464 = (function (rng,f){
var this__3455 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3463__3465 = (function (rng,f,s){
var this__3456 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3463 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3463__3464.call(this,rng,f);
case  3 :
return G__3463__3465.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3463;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3457 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3458 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3458.end - this__3458.start) / this__3458.step));
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
var range__3467 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3468 = (function (end){
return range.call(null,0,end,1);
});
var range__3469 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3470 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3467.call(this);
case  1 :
return range__3468.call(this,start);
case  2 :
return range__3469.call(this,start,end);
case  3 :
return range__3470.call(this,start,end,step);
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
var temp__3698__auto____3472 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3472))
{var s__3473 = temp__3698__auto____3472;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3473),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3473)));
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
var temp__3698__auto____3475 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3475))
{var s__3476 = temp__3698__auto____3475;

var fst__3477 = cljs.core.first.call(null,s__3476);
var fv__3478 = f.call(null,fst__3477);
var run__3479 = cljs.core.cons.call(null,fst__3477,cljs.core.take_while.call(null,(function (p1__3474_SHARP_){
return cljs.core._EQ_.call(null,fv__3478,f.call(null,p1__3474_SHARP_));
}),cljs.core.next.call(null,s__3476)));

return cljs.core.cons.call(null,run__3479,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3479),s__3476))));
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
var reductions__3494 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3490 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3490))
{var s__3491 = temp__3695__auto____3490;

return reductions.call(null,f,cljs.core.first.call(null,s__3491),cljs.core.rest.call(null,s__3491));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3495 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3492 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3492))
{var s__3493 = temp__3698__auto____3492;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3493)),cljs.core.rest.call(null,s__3493));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3494.call(this,f,init);
case  3 :
return reductions__3495.call(this,f,init,coll);
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
var juxt__3498 = (function (f){
return (function() {
var G__3503 = null;
var G__3503__3504 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3503__3505 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3503__3506 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3503__3507 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3503__3508 = (function() { 
var G__3510__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3510 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3510__delegate.call(this, x, y, z, args);
};
G__3510.cljs$lang$maxFixedArity = 3;
G__3510.cljs$lang$applyTo = (function (arglist__3511){
var x = cljs.core.first(arglist__3511);
var y = cljs.core.first(cljs.core.next(arglist__3511));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3511)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3511)));
return G__3510__delegate.call(this, x, y, z, args);
});
return G__3510;
})()
;
G__3503 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3503__3504.call(this);
case  1 :
return G__3503__3505.call(this,x);
case  2 :
return G__3503__3506.call(this,x,y);
case  3 :
return G__3503__3507.call(this,x,y,z);
default:
return G__3503__3508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3503.cljs$lang$maxFixedArity = 3;
G__3503.cljs$lang$applyTo = G__3503__3508.cljs$lang$applyTo;
return G__3503;
})()
});
var juxt__3499 = (function (f,g){
return (function() {
var G__3512 = null;
var G__3512__3513 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3512__3514 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3512__3515 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3512__3516 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3512__3517 = (function() { 
var G__3519__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3519 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3519__delegate.call(this, x, y, z, args);
};
G__3519.cljs$lang$maxFixedArity = 3;
G__3519.cljs$lang$applyTo = (function (arglist__3520){
var x = cljs.core.first(arglist__3520);
var y = cljs.core.first(cljs.core.next(arglist__3520));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3520)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3520)));
return G__3519__delegate.call(this, x, y, z, args);
});
return G__3519;
})()
;
G__3512 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3512__3513.call(this);
case  1 :
return G__3512__3514.call(this,x);
case  2 :
return G__3512__3515.call(this,x,y);
case  3 :
return G__3512__3516.call(this,x,y,z);
default:
return G__3512__3517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3512.cljs$lang$maxFixedArity = 3;
G__3512.cljs$lang$applyTo = G__3512__3517.cljs$lang$applyTo;
return G__3512;
})()
});
var juxt__3500 = (function (f,g,h){
return (function() {
var G__3521 = null;
var G__3521__3522 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3521__3523 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3521__3524 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3521__3525 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3521__3526 = (function() { 
var G__3528__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3528 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3528__delegate.call(this, x, y, z, args);
};
G__3528.cljs$lang$maxFixedArity = 3;
G__3528.cljs$lang$applyTo = (function (arglist__3529){
var x = cljs.core.first(arglist__3529);
var y = cljs.core.first(cljs.core.next(arglist__3529));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3529)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3529)));
return G__3528__delegate.call(this, x, y, z, args);
});
return G__3528;
})()
;
G__3521 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3521__3522.call(this);
case  1 :
return G__3521__3523.call(this,x);
case  2 :
return G__3521__3524.call(this,x,y);
case  3 :
return G__3521__3525.call(this,x,y,z);
default:
return G__3521__3526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3521.cljs$lang$maxFixedArity = 3;
G__3521.cljs$lang$applyTo = G__3521__3526.cljs$lang$applyTo;
return G__3521;
})()
});
var juxt__3501 = (function() { 
var G__3530__delegate = function (f,g,h,fs){
var fs__3497 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3531 = null;
var G__3531__3532 = (function (){
return cljs.core.reduce.call(null,(function (p1__3480_SHARP_,p2__3481_SHARP_){
return cljs.core.conj.call(null,p1__3480_SHARP_,p2__3481_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3497);
});
var G__3531__3533 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3482_SHARP_,p2__3483_SHARP_){
return cljs.core.conj.call(null,p1__3482_SHARP_,p2__3483_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3497);
});
var G__3531__3534 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3484_SHARP_,p2__3485_SHARP_){
return cljs.core.conj.call(null,p1__3484_SHARP_,p2__3485_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3497);
});
var G__3531__3535 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3486_SHARP_,p2__3487_SHARP_){
return cljs.core.conj.call(null,p1__3486_SHARP_,p2__3487_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3497);
});
var G__3531__3536 = (function() { 
var G__3538__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3488_SHARP_,p2__3489_SHARP_){
return cljs.core.conj.call(null,p1__3488_SHARP_,cljs.core.apply.call(null,p2__3489_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3497);
};
var G__3538 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3538__delegate.call(this, x, y, z, args);
};
G__3538.cljs$lang$maxFixedArity = 3;
G__3538.cljs$lang$applyTo = (function (arglist__3539){
var x = cljs.core.first(arglist__3539);
var y = cljs.core.first(cljs.core.next(arglist__3539));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3539)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3539)));
return G__3538__delegate.call(this, x, y, z, args);
});
return G__3538;
})()
;
G__3531 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3531__3532.call(this);
case  1 :
return G__3531__3533.call(this,x);
case  2 :
return G__3531__3534.call(this,x,y);
case  3 :
return G__3531__3535.call(this,x,y,z);
default:
return G__3531__3536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3531.cljs$lang$maxFixedArity = 3;
G__3531.cljs$lang$applyTo = G__3531__3536.cljs$lang$applyTo;
return G__3531;
})()
};
var G__3530 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3530__delegate.call(this, f, g, h, fs);
};
G__3530.cljs$lang$maxFixedArity = 3;
G__3530.cljs$lang$applyTo = (function (arglist__3540){
var f = cljs.core.first(arglist__3540);
var g = cljs.core.first(cljs.core.next(arglist__3540));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3540)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3540)));
return G__3530__delegate.call(this, f, g, h, fs);
});
return G__3530;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3498.call(this,f);
case  2 :
return juxt__3499.call(this,f,g);
case  3 :
return juxt__3500.call(this,f,g,h);
default:
return juxt__3501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3501.cljs$lang$applyTo;
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
var dorun__3542 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3545 = cljs.core.next.call(null,coll);
coll = G__3545;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3543 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3541 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3541))
{return (n > 0);
} else
{return and__3546__auto____3541;
}
})()))
{{
var G__3546 = (n - 1);
var G__3547 = cljs.core.next.call(null,coll);
n = G__3546;
coll = G__3547;
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
return dorun__3542.call(this,n);
case  2 :
return dorun__3543.call(this,n,coll);
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
var doall__3548 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3549 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3548.call(this,n);
case  2 :
return doall__3549.call(this,n,coll);
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
var matches__3551 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3551),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3551),1)))
{return cljs.core.first.call(null,matches__3551);
} else
{return cljs.core.vec.call(null,matches__3551);
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
var matches__3552 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3552)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3552),1)))
{return cljs.core.first.call(null,matches__3552);
} else
{return cljs.core.vec.call(null,matches__3552);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3553 = cljs.core.re_find.call(null,re,s);
var match_idx__3554 = s.search(re);
var match_str__3555 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3553))?cljs.core.first.call(null,match_data__3553):match_data__3553);
var post_match__3556 = cljs.core.subs.call(null,s,(match_idx__3554 + cljs.core.count.call(null,match_str__3555)));

if(cljs.core.truth_(match_data__3553))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3553,re_seq.call(null,re,post_match__3556));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3557_SHARP_){
return print_one.call(null,p1__3557_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3558 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3558))
{var and__3546__auto____3562 = (function (){var x__302__auto____3559 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3560 = x__302__auto____3559;

if(cljs.core.truth_(and__3546__auto____3560))
{var and__3546__auto____3561 = x__302__auto____3559.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3561))
{return cljs.core.not.call(null,x__302__auto____3559.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3561;
}
} else
{return and__3546__auto____3560;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____3559);
}
})();

if(cljs.core.truth_(and__3546__auto____3562))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3562;
}
} else
{return and__3546__auto____3558;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__302__auto____3563 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3564 = x__302__auto____3563;

if(cljs.core.truth_(and__3546__auto____3564))
{var and__3546__auto____3565 = x__302__auto____3563.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3565))
{return cljs.core.not.call(null,x__302__auto____3563.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3565;
}
} else
{return and__3546__auto____3564;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__302__auto____3563);
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
var first_obj__3566 = cljs.core.first.call(null,objs);
var sb__3567 = (new goog.string.StringBuffer());

var G__3568__3569 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3568__3569))
{var obj__3570 = cljs.core.first.call(null,G__3568__3569);
var G__3568__3571 = G__3568__3569;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3570,first_obj__3566)))
{} else
{sb__3567.append(" ");
}
var G__3572__3573 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3570,opts));

if(cljs.core.truth_(G__3572__3573))
{var string__3574 = cljs.core.first.call(null,G__3572__3573);
var G__3572__3575 = G__3572__3573;

while(true){
sb__3567.append(string__3574);
var temp__3698__auto____3576 = cljs.core.next.call(null,G__3572__3575);

if(cljs.core.truth_(temp__3698__auto____3576))
{var G__3572__3577 = temp__3698__auto____3576;

{
var G__3580 = cljs.core.first.call(null,G__3572__3577);
var G__3581 = G__3572__3577;
string__3574 = G__3580;
G__3572__3575 = G__3581;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3578 = cljs.core.next.call(null,G__3568__3571);

if(cljs.core.truth_(temp__3698__auto____3578))
{var G__3568__3579 = temp__3698__auto____3578;

{
var G__3582 = cljs.core.first.call(null,G__3568__3579);
var G__3583 = G__3568__3579;
obj__3570 = G__3582;
G__3568__3571 = G__3583;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3567);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3584 = cljs.core.first.call(null,objs);

var G__3585__3586 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3585__3586))
{var obj__3587 = cljs.core.first.call(null,G__3585__3586);
var G__3585__3588 = G__3585__3586;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3587,first_obj__3584)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3589__3590 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3587,opts));

if(cljs.core.truth_(G__3589__3590))
{var string__3591 = cljs.core.first.call(null,G__3589__3590);
var G__3589__3592 = G__3589__3590;

while(true){
cljs.core.string_print.call(null,string__3591);
var temp__3698__auto____3593 = cljs.core.next.call(null,G__3589__3592);

if(cljs.core.truth_(temp__3698__auto____3593))
{var G__3589__3594 = temp__3698__auto____3593;

{
var G__3597 = cljs.core.first.call(null,G__3589__3594);
var G__3598 = G__3589__3594;
string__3591 = G__3597;
G__3589__3592 = G__3598;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3595 = cljs.core.next.call(null,G__3585__3588);

if(cljs.core.truth_(temp__3698__auto____3595))
{var G__3585__3596 = temp__3698__auto____3595;

{
var G__3599 = cljs.core.first.call(null,G__3585__3596);
var G__3600 = G__3585__3596;
obj__3587 = G__3599;
G__3585__3588 = G__3600;
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
pr_str.cljs$lang$applyTo = (function (arglist__3601){
var objs = cljs.core.seq( arglist__3601 );;
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
pr.cljs$lang$applyTo = (function (arglist__3602){
var objs = cljs.core.seq( arglist__3602 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3603){
var objs = cljs.core.seq( arglist__3603 );;
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
println.cljs$lang$applyTo = (function (arglist__3604){
var objs = cljs.core.seq( arglist__3604 );;
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
prn.cljs$lang$applyTo = (function (arglist__3605){
var objs = cljs.core.seq( arglist__3605 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3606 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3606,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3607 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3607))
{var nspc__3608 = temp__3698__auto____3607;

return cljs.core.str.call(null,nspc__3608,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3609 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3609))
{var nspc__3610 = temp__3698__auto____3609;

return cljs.core.str.call(null,nspc__3610,"/");
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
var pr_pair__3611 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3611,"{",", ","}",opts,coll);
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
var this__3612 = this;
var G__3613__3614 = cljs.core.seq.call(null,this__3612.watches);

if(cljs.core.truth_(G__3613__3614))
{var G__3616__3618 = cljs.core.first.call(null,G__3613__3614);
var vec__3617__3619 = G__3616__3618;
var key__3620 = cljs.core.nth.call(null,vec__3617__3619,0,null);
var f__3621 = cljs.core.nth.call(null,vec__3617__3619,1,null);
var G__3613__3622 = G__3613__3614;

var G__3616__3623 = G__3616__3618;
var G__3613__3624 = G__3613__3622;

while(true){
var vec__3625__3626 = G__3616__3623;
var key__3627 = cljs.core.nth.call(null,vec__3625__3626,0,null);
var f__3628 = cljs.core.nth.call(null,vec__3625__3626,1,null);
var G__3613__3629 = G__3613__3624;

f__3628.call(null,key__3627,this$,oldval,newval);
var temp__3698__auto____3630 = cljs.core.next.call(null,G__3613__3629);

if(cljs.core.truth_(temp__3698__auto____3630))
{var G__3613__3631 = temp__3698__auto____3630;

{
var G__3638 = cljs.core.first.call(null,G__3613__3631);
var G__3639 = G__3613__3631;
G__3616__3623 = G__3638;
G__3613__3624 = G__3639;
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
var this__3632 = this;
return this$.watches = cljs.core.assoc.call(null,this__3632.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3633 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3633.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3634 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3634.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3635 = this;
return this__3635.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3636 = this;
return this__3636.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3637 = this;
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
var atom__3646 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3647 = (function() { 
var G__3649__delegate = function (x,p__3640){
var map__3641__3642 = p__3640;
var map__3641__3643 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3641__3642))?cljs.core.apply.call(null,cljs.core.hash_map,map__3641__3642):map__3641__3642);
var validator__3644 = cljs.core.get.call(null,map__3641__3643,"﷐'validator");
var meta__3645 = cljs.core.get.call(null,map__3641__3643,"﷐'meta");

return (new cljs.core.Atom(x,meta__3645,validator__3644,null));
};
var G__3649 = function (x,var_args){
var p__3640 = null;
if (goog.isDef(var_args)) {
  p__3640 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3649__delegate.call(this, x, p__3640);
};
G__3649.cljs$lang$maxFixedArity = 1;
G__3649.cljs$lang$applyTo = (function (arglist__3650){
var x = cljs.core.first(arglist__3650);
var p__3640 = cljs.core.rest(arglist__3650);
return G__3649__delegate.call(this, x, p__3640);
});
return G__3649;
})()
;
atom = function(x,var_args){
var p__3640 = var_args;
switch(arguments.length){
case  1 :
return atom__3646.call(this,x);
default:
return atom__3647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3647.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3651 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3651))
{var validate__3652 = temp__3698__auto____3651;

if(cljs.core.truth_(validate__3652.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__3653 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3653,new_value);
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
var swap_BANG___3654 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3655 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3656 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3657 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3658 = (function() { 
var G__3660__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3660 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3660__delegate.call(this, a, f, x, y, z, more);
};
G__3660.cljs$lang$maxFixedArity = 5;
G__3660.cljs$lang$applyTo = (function (arglist__3661){
var a = cljs.core.first(arglist__3661);
var f = cljs.core.first(cljs.core.next(arglist__3661));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3661)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3661))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3661)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3661)))));
return G__3660__delegate.call(this, a, f, x, y, z, more);
});
return G__3660;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3654.call(this,a,f);
case  3 :
return swap_BANG___3655.call(this,a,f,x);
case  4 :
return swap_BANG___3656.call(this,a,f,x,y);
case  5 :
return swap_BANG___3657.call(this,a,f,x,y,z);
default:
return swap_BANG___3658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3658.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3662){
var iref = cljs.core.first(arglist__3662);
var f = cljs.core.first(cljs.core.next(arglist__3662));
var args = cljs.core.rest(cljs.core.next(arglist__3662));
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
var gensym__3663 = (function (){
return gensym.call(null,"G__");
});
var gensym__3664 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3663.call(this);
case  1 :
return gensym__3664.call(this,prefix_string);
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
var this__3666 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3666.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3667 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3667.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3667.state,this__3667.f);
}
return cljs.core.deref.call(null,this__3667.state);
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
delay.cljs$lang$applyTo = (function (arglist__3668){
var body = cljs.core.seq( arglist__3668 );;
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
var map__3669__3670 = options;
var map__3669__3671 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3669__3670))?cljs.core.apply.call(null,cljs.core.hash_map,map__3669__3670):map__3669__3670);
var keywordize_keys__3672 = cljs.core.get.call(null,map__3669__3671,"﷐'keywordize-keys");
var keyfn__3673 = (cljs.core.truth_(keywordize_keys__3672)?cljs.core.keyword:cljs.core.str);
var f__3679 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__356__auto____3678 = (function iter__3674(s__3675){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3675__3676 = s__3675;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3675__3676)))
{var k__3677 = cljs.core.first.call(null,s__3675__3676);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3673.call(null,k__3677),thisfn.call(null,(x[k__3677]))]),iter__3674.call(null,cljs.core.rest.call(null,s__3675__3676)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____3678.call(null,cljs.core.js_keys.call(null,x));
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

return f__3679.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3680){
var x = cljs.core.first(arglist__3680);
var options = cljs.core.rest(arglist__3680);
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
var mem__3681 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3685__delegate = function (args){
var temp__3695__auto____3682 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3681),args);

if(cljs.core.truth_(temp__3695__auto____3682))
{var v__3683 = temp__3695__auto____3682;

return v__3683;
} else
{var ret__3684 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3681,cljs.core.assoc,args,ret__3684);
return ret__3684;
}
};
var G__3685 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3685__delegate.call(this, args);
};
G__3685.cljs$lang$maxFixedArity = 0;
G__3685.cljs$lang$applyTo = (function (arglist__3686){
var args = cljs.core.seq( arglist__3686 );;
return G__3685__delegate.call(this, args);
});
return G__3685;
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
var trampoline__3688 = (function (f){
while(true){
var ret__3687 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3687)))
{{
var G__3691 = ret__3687;
f = G__3691;
continue;
}
} else
{return ret__3687;
}
break;
}
});
var trampoline__3689 = (function() { 
var G__3692__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3692 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3692__delegate.call(this, f, args);
};
G__3692.cljs$lang$maxFixedArity = 1;
G__3692.cljs$lang$applyTo = (function (arglist__3693){
var f = cljs.core.first(arglist__3693);
var args = cljs.core.rest(arglist__3693);
return G__3692__delegate.call(this, f, args);
});
return G__3692;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3688.call(this,f);
default:
return trampoline__3689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3689.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3694 = (function (){
return rand.call(null,1);
});
var rand__3695 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3694.call(this);
case  1 :
return rand__3695.call(this,n);
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
var k__3697 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3697,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3697,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3706 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3707 = (function (h,child,parent){
var or__3548__auto____3698 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3698))
{return or__3548__auto____3698;
} else
{var or__3548__auto____3699 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3699))
{return or__3548__auto____3699;
} else
{var and__3546__auto____3700 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3700))
{var and__3546__auto____3701 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3701))
{var and__3546__auto____3702 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3702))
{var ret__3703 = true;
var i__3704 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3705 = cljs.core.not.call(null,ret__3703);

if(cljs.core.truth_(or__3548__auto____3705))
{return or__3548__auto____3705;
} else
{return cljs.core._EQ_.call(null,i__3704,cljs.core.count.call(null,parent));
}
})()))
{return ret__3703;
} else
{{
var G__3709 = isa_QMARK_.call(null,h,child.call(null,i__3704),parent.call(null,i__3704));
var G__3710 = (i__3704 + 1);
ret__3703 = G__3709;
i__3704 = G__3710;
continue;
}
}
break;
}
} else
{return and__3546__auto____3702;
}
} else
{return and__3546__auto____3701;
}
} else
{return and__3546__auto____3700;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3706.call(this,h,child);
case  3 :
return isa_QMARK___3707.call(this,h,child,parent);
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
var parents__3711 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3712 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3711.call(this,h);
case  2 :
return parents__3712.call(this,h,tag);
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
var ancestors__3714 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3715 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3714.call(this,h);
case  2 :
return ancestors__3715.call(this,h,tag);
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
var descendants__3717 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3718 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3717.call(this,h);
case  2 :
return descendants__3718.call(this,h,tag);
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
var derive__3728 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3729 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3723 = "﷐'parents".call(null,h);
var td__3724 = "﷐'descendants".call(null,h);
var ta__3725 = "﷐'ancestors".call(null,h);
var tf__3726 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3727 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3723.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3725.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3725.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3723,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3726.call(null,"﷐'ancestors".call(null,h),tag,td__3724,parent,ta__3725),"﷐'descendants":tf__3726.call(null,"﷐'descendants".call(null,h),parent,ta__3725,tag,td__3724)});
})());

if(cljs.core.truth_(or__3548__auto____3727))
{return or__3548__auto____3727;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3728.call(this,h,tag);
case  3 :
return derive__3729.call(this,h,tag,parent);
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
var underive__3735 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3736 = (function (h,tag,parent){
var parentMap__3731 = "﷐'parents".call(null,h);
var childsParents__3732 = (cljs.core.truth_(parentMap__3731.call(null,tag))?cljs.core.disj.call(null,parentMap__3731.call(null,tag),parent):cljs.core.set([]));
var newParents__3733 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3732))?cljs.core.assoc.call(null,parentMap__3731,tag,childsParents__3732):cljs.core.dissoc.call(null,parentMap__3731,tag));
var deriv_seq__3734 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3720_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3720_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3720_SHARP_),cljs.core.second.call(null,p1__3720_SHARP_)));
}),cljs.core.seq.call(null,newParents__3733)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3731.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3721_SHARP_,p2__3722_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3721_SHARP_,p2__3722_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3734));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3735.call(this,h,tag);
case  3 :
return underive__3736.call(this,h,tag,parent);
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
var xprefs__3738 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3740 = (cljs.core.truth_((function (){var and__3546__auto____3739 = xprefs__3738;

if(cljs.core.truth_(and__3546__auto____3739))
{return xprefs__3738.call(null,y);
} else
{return and__3546__auto____3739;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3740))
{return or__3548__auto____3740;
} else
{var or__3548__auto____3742 = (function (){var ps__3741 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3741) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3741),prefer_table)))
{} else
{}
{
var G__3745 = cljs.core.rest.call(null,ps__3741);
ps__3741 = G__3745;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3742))
{return or__3548__auto____3742;
} else
{var or__3548__auto____3744 = (function (){var ps__3743 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3743) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3743),y,prefer_table)))
{} else
{}
{
var G__3746 = cljs.core.rest.call(null,ps__3743);
ps__3743 = G__3746;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3744))
{return or__3548__auto____3744;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3747 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3747))
{return or__3548__auto____3747;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3756 = cljs.core.reduce.call(null,(function (be,p__3748){
var vec__3749__3750 = p__3748;
var k__3751 = cljs.core.nth.call(null,vec__3749__3750,0,null);
var ___3752 = cljs.core.nth.call(null,vec__3749__3750,1,null);
var e__3753 = vec__3749__3750;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3751)))
{var be2__3755 = (cljs.core.truth_((function (){var or__3548__auto____3754 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3754))
{return or__3548__auto____3754;
} else
{return cljs.core.dominates.call(null,k__3751,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3753:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3755),k__3751,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3751," and ",cljs.core.first.call(null,be2__3755),", and neither is preferred")));
}
return be2__3755;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3756))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3756));
return cljs.core.second.call(null,best_entry__3756);
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
if(cljs.core.truth_((function (){var and__3546__auto____3757 = mf;

if(cljs.core.truth_(and__3546__auto____3757))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3757;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3758 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3758))
{return or__3548__auto____3758;
} else
{var or__3548__auto____3759 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3759))
{return or__3548__auto____3759;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3760 = mf;

if(cljs.core.truth_(and__3546__auto____3760))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3760;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3761 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3761))
{return or__3548__auto____3761;
} else
{var or__3548__auto____3762 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3762))
{return or__3548__auto____3762;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3763 = mf;

if(cljs.core.truth_(and__3546__auto____3763))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3763;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3764 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3764))
{return or__3548__auto____3764;
} else
{var or__3548__auto____3765 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3765))
{return or__3548__auto____3765;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3766 = mf;

if(cljs.core.truth_(and__3546__auto____3766))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3766;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3767 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3767))
{return or__3548__auto____3767;
} else
{var or__3548__auto____3768 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3768))
{return or__3548__auto____3768;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3769 = mf;

if(cljs.core.truth_(and__3546__auto____3769))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3769;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3770 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3770))
{return or__3548__auto____3770;
} else
{var or__3548__auto____3771 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3771))
{return or__3548__auto____3771;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3772 = mf;

if(cljs.core.truth_(and__3546__auto____3772))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3772;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3773 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3773))
{return or__3548__auto____3773;
} else
{var or__3548__auto____3774 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3774))
{return or__3548__auto____3774;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3775 = mf;

if(cljs.core.truth_(and__3546__auto____3775))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3775;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3776 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3776))
{return or__3548__auto____3776;
} else
{var or__3548__auto____3777 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3777))
{return or__3548__auto____3777;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3778 = mf;

if(cljs.core.truth_(and__3546__auto____3778))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3778;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3779 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3779))
{return or__3548__auto____3779;
} else
{var or__3548__auto____3780 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3780))
{return or__3548__auto____3780;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3781 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3782 = cljs.core._get_method.call(null,mf,dispatch_val__3781);

if(cljs.core.truth_(target_fn__3782))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3781)));
}
return cljs.core.apply.call(null,target_fn__3782,args);
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
var this__3783 = this;
cljs.core.swap_BANG_.call(null,this__3783.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3783.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3783.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3783.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3784 = this;
cljs.core.swap_BANG_.call(null,this__3784.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3784.method_cache,this__3784.method_table,this__3784.cached_hierarchy,this__3784.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3785 = this;
cljs.core.swap_BANG_.call(null,this__3785.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3785.method_cache,this__3785.method_table,this__3785.cached_hierarchy,this__3785.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3786 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3786.cached_hierarchy),cljs.core.deref.call(null,this__3786.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3786.method_cache,this__3786.method_table,this__3786.cached_hierarchy,this__3786.hierarchy);
}
var temp__3695__auto____3787 = cljs.core.deref.call(null,this__3786.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3787))
{var target_fn__3788 = temp__3695__auto____3787;

return target_fn__3788;
} else
{var temp__3695__auto____3789 = cljs.core.find_and_cache_best_method.call(null,this__3786.name,dispatch_val,this__3786.hierarchy,this__3786.method_table,this__3786.prefer_table,this__3786.method_cache,this__3786.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3789))
{var target_fn__3790 = temp__3695__auto____3789;

return target_fn__3790;
} else
{return cljs.core.deref.call(null,this__3786.method_table).call(null,this__3786.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3791 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3791.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3791.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3791.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3791.method_cache,this__3791.method_table,this__3791.cached_hierarchy,this__3791.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3792 = this;
return cljs.core.deref.call(null,this__3792.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3793 = this;
return cljs.core.deref.call(null,this__3793.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3794 = this;
return cljs.core.do_invoke.call(null,mf,this__3794.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3795__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3795 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3795__delegate.call(this, _, args);
};
G__3795.cljs$lang$maxFixedArity = 1;
G__3795.cljs$lang$applyTo = (function (arglist__3796){
var _ = cljs.core.first(arglist__3796);
var args = cljs.core.rest(arglist__3796);
return G__3795__delegate.call(this, _, args);
});
return G__3795;
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
