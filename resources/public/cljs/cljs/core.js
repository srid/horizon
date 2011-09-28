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
var or__3548__auto____2315 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2315))
{return or__3548__auto____2315;
} else
{var or__3548__auto____2316 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2316))
{return or__3548__auto____2316;
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
if(cljs.core.truth_((function (){var and__3546__auto____2317 = coll;

if(cljs.core.truth_(and__3546__auto____2317))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2317;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2318 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2318))
{return or__3548__auto____2318;
} else
{var or__3548__auto____2319 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2319))
{return or__3548__auto____2319;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2320 = coll;

if(cljs.core.truth_(and__3546__auto____2320))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2320;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2321 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2321))
{return or__3548__auto____2321;
} else
{var or__3548__auto____2322 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2322))
{return or__3548__auto____2322;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2323 = coll;

if(cljs.core.truth_(and__3546__auto____2323))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2323;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2324 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2324))
{return or__3548__auto____2324;
} else
{var or__3548__auto____2325 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2325))
{return or__3548__auto____2325;
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
var _nth__2332 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2326 = coll;

if(cljs.core.truth_(and__3546__auto____2326))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2326;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2327 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2327))
{return or__3548__auto____2327;
} else
{var or__3548__auto____2328 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2328))
{return or__3548__auto____2328;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2333 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2329 = coll;

if(cljs.core.truth_(and__3546__auto____2329))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2329;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2330 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2330))
{return or__3548__auto____2330;
} else
{var or__3548__auto____2331 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2331))
{return or__3548__auto____2331;
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
return _nth__2332.call(this,coll,n);
case  3 :
return _nth__2333.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2335 = coll;

if(cljs.core.truth_(and__3546__auto____2335))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2335;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2336 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2336))
{return or__3548__auto____2336;
} else
{var or__3548__auto____2337 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2337))
{return or__3548__auto____2337;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2338 = coll;

if(cljs.core.truth_(and__3546__auto____2338))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2338;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2339 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2339))
{return or__3548__auto____2339;
} else
{var or__3548__auto____2340 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2340))
{return or__3548__auto____2340;
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
var _lookup__2347 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2341 = o;

if(cljs.core.truth_(and__3546__auto____2341))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2341;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2342 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2342))
{return or__3548__auto____2342;
} else
{var or__3548__auto____2343 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2343))
{return or__3548__auto____2343;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2348 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2344 = o;

if(cljs.core.truth_(and__3546__auto____2344))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2344;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2345 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2345))
{return or__3548__auto____2345;
} else
{var or__3548__auto____2346 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2346))
{return or__3548__auto____2346;
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
return _lookup__2347.call(this,o,k);
case  3 :
return _lookup__2348.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2350 = coll;

if(cljs.core.truth_(and__3546__auto____2350))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2350;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2351 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2351))
{return or__3548__auto____2351;
} else
{var or__3548__auto____2352 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2352))
{return or__3548__auto____2352;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2353 = coll;

if(cljs.core.truth_(and__3546__auto____2353))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2353;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2354 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2354))
{return or__3548__auto____2354;
} else
{var or__3548__auto____2355 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2355))
{return or__3548__auto____2355;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2356 = coll;

if(cljs.core.truth_(and__3546__auto____2356))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2356;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2357 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2357))
{return or__3548__auto____2357;
} else
{var or__3548__auto____2358 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2358))
{return or__3548__auto____2358;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2359 = coll;

if(cljs.core.truth_(and__3546__auto____2359))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2359;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2360 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2360))
{return or__3548__auto____2360;
} else
{var or__3548__auto____2361 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2361))
{return or__3548__auto____2361;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2362 = coll;

if(cljs.core.truth_(and__3546__auto____2362))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2362;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2363 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2363))
{return or__3548__auto____2363;
} else
{var or__3548__auto____2364 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2364))
{return or__3548__auto____2364;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2365 = coll;

if(cljs.core.truth_(and__3546__auto____2365))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2365;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2366 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2366))
{return or__3548__auto____2366;
} else
{var or__3548__auto____2367 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2367))
{return or__3548__auto____2367;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2368 = coll;

if(cljs.core.truth_(and__3546__auto____2368))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2368;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2369 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2369))
{return or__3548__auto____2369;
} else
{var or__3548__auto____2370 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2370))
{return or__3548__auto____2370;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2371 = o;

if(cljs.core.truth_(and__3546__auto____2371))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2371;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2372 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2372))
{return or__3548__auto____2372;
} else
{var or__3548__auto____2373 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2373))
{return or__3548__auto____2373;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2374 = o;

if(cljs.core.truth_(and__3546__auto____2374))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2374;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2375 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2375))
{return or__3548__auto____2375;
} else
{var or__3548__auto____2376 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2376))
{return or__3548__auto____2376;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2377 = o;

if(cljs.core.truth_(and__3546__auto____2377))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2377;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2378 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2378))
{return or__3548__auto____2378;
} else
{var or__3548__auto____2379 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2379))
{return or__3548__auto____2379;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2380 = o;

if(cljs.core.truth_(and__3546__auto____2380))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2380;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2381 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2381))
{return or__3548__auto____2381;
} else
{var or__3548__auto____2382 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2382))
{return or__3548__auto____2382;
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
var _reduce__2389 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2383 = coll;

if(cljs.core.truth_(and__3546__auto____2383))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2383;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2384 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2384))
{return or__3548__auto____2384;
} else
{var or__3548__auto____2385 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2385))
{return or__3548__auto____2385;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2390 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2386 = coll;

if(cljs.core.truth_(and__3546__auto____2386))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2386;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2387 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2387))
{return or__3548__auto____2387;
} else
{var or__3548__auto____2388 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2388))
{return or__3548__auto____2388;
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
return _reduce__2389.call(this,coll,f);
case  3 :
return _reduce__2390.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2392 = o;

if(cljs.core.truth_(and__3546__auto____2392))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2392;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2393 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2393))
{return or__3548__auto____2393;
} else
{var or__3548__auto____2394 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2394))
{return or__3548__auto____2394;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2395 = o;

if(cljs.core.truth_(and__3546__auto____2395))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2395;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2396 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2396))
{return or__3548__auto____2396;
} else
{var or__3548__auto____2397 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2397))
{return or__3548__auto____2397;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2398 = o;

if(cljs.core.truth_(and__3546__auto____2398))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2398;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2399 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2399))
{return or__3548__auto____2399;
} else
{var or__3548__auto____2400 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2400))
{return or__3548__auto____2400;
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
if(cljs.core.truth_((function (){var and__3546__auto____2401 = o;

if(cljs.core.truth_(and__3546__auto____2401))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2401;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2402 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2402))
{return or__3548__auto____2402;
} else
{var or__3548__auto____2403 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2403))
{return or__3548__auto____2403;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2404 = d;

if(cljs.core.truth_(and__3546__auto____2404))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2404;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2405 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2405))
{return or__3548__auto____2405;
} else
{var or__3548__auto____2406 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2406))
{return or__3548__auto____2406;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2407 = this$;

if(cljs.core.truth_(and__3546__auto____2407))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2407;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2408 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2408))
{return or__3548__auto____2408;
} else
{var or__3548__auto____2409 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2409))
{return or__3548__auto____2409;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2410 = this$;

if(cljs.core.truth_(and__3546__auto____2410))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2410;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2411 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2411))
{return or__3548__auto____2411;
} else
{var or__3548__auto____2412 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2412))
{return or__3548__auto____2412;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2413 = this$;

if(cljs.core.truth_(and__3546__auto____2413))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2413;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2414 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2414))
{return or__3548__auto____2414;
} else
{var or__3548__auto____2415 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2415))
{return or__3548__auto____2415;
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
var G__2416 = null;
var G__2416__2417 = (function (_,n){
return null;
});
var G__2416__2418 = (function (_,n,not_found){
return not_found;
});
G__2416 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2416__2417.call(this,_,n);
case  3 :
return G__2416__2418.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2416;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2420 = null;
var G__2420__2421 = (function (_,f){
return f.call(null);
});
var G__2420__2422 = (function (_,f,start){
return start;
});
G__2420 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2420__2421.call(this,_,f);
case  3 :
return G__2420__2422.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2420;
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
var G__2424 = null;
var G__2424__2425 = (function (o,k){
return null;
});
var G__2424__2426 = (function (o,k,not_found){
return not_found;
});
G__2424 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2424__2425.call(this,o,k);
case  3 :
return G__2424__2426.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2424;
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
var ci_reduce__2434 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2428 = cljs.core._nth.call(null,cicoll,0);
var n__2429 = 1;

while(true){
if(cljs.core.truth_((n__2429 < cljs.core._count.call(null,cicoll))))
{{
var G__2438 = f.call(null,val__2428,cljs.core._nth.call(null,cicoll,n__2429));
var G__2439 = (n__2429 + 1);
val__2428 = G__2438;
n__2429 = G__2439;
continue;
}
} else
{return val__2428;
}
break;
}
}
});
var ci_reduce__2435 = (function (cicoll,f,val){
var val__2430 = val;
var n__2431 = 0;

while(true){
if(cljs.core.truth_((n__2431 < cljs.core._count.call(null,cicoll))))
{{
var G__2440 = f.call(null,val__2430,cljs.core._nth.call(null,cicoll,n__2431));
var G__2441 = (n__2431 + 1);
val__2430 = G__2440;
n__2431 = G__2441;
continue;
}
} else
{return val__2430;
}
break;
}
});
var ci_reduce__2436 = (function (cicoll,f,val,idx){
var val__2432 = val;
var n__2433 = idx;

while(true){
if(cljs.core.truth_((n__2433 < cljs.core._count.call(null,cicoll))))
{{
var G__2442 = f.call(null,val__2432,cljs.core._nth.call(null,cicoll,n__2433));
var G__2443 = (n__2433 + 1);
val__2432 = G__2442;
n__2433 = G__2443;
continue;
}
} else
{return val__2432;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2434.call(this,cicoll,f);
case  3 :
return ci_reduce__2435.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2436.call(this,cicoll,f,val,idx);
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
var this__2444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2452 = null;
var G__2452__2453 = (function (coll,f){
var this__2445 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2445.a[this__2445.i]),(this__2445.i + 1));
});
var G__2452__2454 = (function (coll,f,start){
var this__2446 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2446.i);
});
G__2452 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2452__2453.call(this,coll,f);
case  3 :
return G__2452__2454.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2452;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2447 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2448 = this;
return this__2448.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2449 = this;
return (this__2449.a[this__2449.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2450 = this;
if(cljs.core.truth_(((this__2450.i + 1) < this__2450.a.length)))
{return (new cljs.core.IndexedSeq(this__2450.a,(this__2450.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2451 = this;
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
var G__2456 = null;
var G__2456__2457 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2456__2458 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2456 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2456__2457.call(this,array,f);
case  3 :
return G__2456__2458.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2456;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2460 = null;
var G__2460__2461 = (function (array,k){
return (array[k]);
});
var G__2460__2462 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2460 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2460__2461.call(this,array,k);
case  3 :
return G__2460__2462.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2460;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2464 = null;
var G__2464__2465 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2464__2466 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2464 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2464__2465.call(this,array,n);
case  3 :
return G__2464__2466.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2464;
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
var temp__3698__auto____2468 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2468))
{var s__2469 = temp__3698__auto____2468;

return cljs.core._first.call(null,s__2469);
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
var G__2470 = cljs.core.next.call(null,s);
s = G__2470;
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
var s__2471 = cljs.core.seq.call(null,x);
var n__2472 = 0;

while(true){
if(cljs.core.truth_(s__2471))
{{
var G__2473 = cljs.core.next.call(null,s__2471);
var G__2474 = (n__2472 + 1);
s__2471 = G__2473;
n__2472 = G__2474;
continue;
}
} else
{return n__2472;
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
var conj__2475 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2476 = (function() { 
var G__2478__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2479 = conj.call(null,coll,x);
var G__2480 = cljs.core.first.call(null,xs);
var G__2481 = cljs.core.next.call(null,xs);
coll = G__2479;
x = G__2480;
xs = G__2481;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2478 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2478__delegate.call(this, coll, x, xs);
};
G__2478.cljs$lang$maxFixedArity = 2;
G__2478.cljs$lang$applyTo = (function (arglist__2482){
var coll = cljs.core.first(arglist__2482);
var x = cljs.core.first(cljs.core.next(arglist__2482));
var xs = cljs.core.rest(cljs.core.next(arglist__2482));
return G__2478__delegate.call(this, coll, x, xs);
});
return G__2478;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2475.call(this,coll,x);
default:
return conj__2476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2476.cljs$lang$applyTo;
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
var nth__2483 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2484 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2483.call(this,coll,n);
case  3 :
return nth__2484.call(this,coll,n,not_found);
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
var get__2486 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2487 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2486.call(this,o,k);
case  3 :
return get__2487.call(this,o,k,not_found);
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
var assoc__2490 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2491 = (function() { 
var G__2493__delegate = function (coll,k,v,kvs){
while(true){
var ret__2489 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2494 = ret__2489;
var G__2495 = cljs.core.first.call(null,kvs);
var G__2496 = cljs.core.second.call(null,kvs);
var G__2497 = cljs.core.nnext.call(null,kvs);
coll = G__2494;
k = G__2495;
v = G__2496;
kvs = G__2497;
continue;
}
} else
{return ret__2489;
}
break;
}
};
var G__2493 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2493__delegate.call(this, coll, k, v, kvs);
};
G__2493.cljs$lang$maxFixedArity = 3;
G__2493.cljs$lang$applyTo = (function (arglist__2498){
var coll = cljs.core.first(arglist__2498);
var k = cljs.core.first(cljs.core.next(arglist__2498));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2498)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2498)));
return G__2493__delegate.call(this, coll, k, v, kvs);
});
return G__2493;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2490.call(this,coll,k,v);
default:
return assoc__2491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2491.cljs$lang$applyTo;
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
var dissoc__2500 = (function (coll){
return coll;
});
var dissoc__2501 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2502 = (function() { 
var G__2504__delegate = function (coll,k,ks){
while(true){
var ret__2499 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2505 = ret__2499;
var G__2506 = cljs.core.first.call(null,ks);
var G__2507 = cljs.core.next.call(null,ks);
coll = G__2505;
k = G__2506;
ks = G__2507;
continue;
}
} else
{return ret__2499;
}
break;
}
};
var G__2504 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2504__delegate.call(this, coll, k, ks);
};
G__2504.cljs$lang$maxFixedArity = 2;
G__2504.cljs$lang$applyTo = (function (arglist__2508){
var coll = cljs.core.first(arglist__2508);
var k = cljs.core.first(cljs.core.next(arglist__2508));
var ks = cljs.core.rest(cljs.core.next(arglist__2508));
return G__2504__delegate.call(this, coll, k, ks);
});
return G__2504;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2500.call(this,coll);
case  2 :
return dissoc__2501.call(this,coll,k);
default:
return dissoc__2502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2502.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__302__auto____2509 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2510 = x__302__auto____2509;

if(cljs.core.truth_(and__3546__auto____2510))
{var and__3546__auto____2511 = x__302__auto____2509.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2511))
{return cljs.core.not.call(null,x__302__auto____2509.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2511;
}
} else
{return and__3546__auto____2510;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____2509);
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
var disj__2513 = (function (coll){
return coll;
});
var disj__2514 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2515 = (function() { 
var G__2517__delegate = function (coll,k,ks){
while(true){
var ret__2512 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2518 = ret__2512;
var G__2519 = cljs.core.first.call(null,ks);
var G__2520 = cljs.core.next.call(null,ks);
coll = G__2518;
k = G__2519;
ks = G__2520;
continue;
}
} else
{return ret__2512;
}
break;
}
};
var G__2517 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2517__delegate.call(this, coll, k, ks);
};
G__2517.cljs$lang$maxFixedArity = 2;
G__2517.cljs$lang$applyTo = (function (arglist__2521){
var coll = cljs.core.first(arglist__2521);
var k = cljs.core.first(cljs.core.next(arglist__2521));
var ks = cljs.core.rest(cljs.core.next(arglist__2521));
return G__2517__delegate.call(this, coll, k, ks);
});
return G__2517;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2513.call(this,coll);
case  2 :
return disj__2514.call(this,coll,k);
default:
return disj__2515.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2515.cljs$lang$applyTo;
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
{var x__302__auto____2522 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2523 = x__302__auto____2522;

if(cljs.core.truth_(and__3546__auto____2523))
{var and__3546__auto____2524 = x__302__auto____2522.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2524))
{return cljs.core.not.call(null,x__302__auto____2522.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2524;
}
} else
{return and__3546__auto____2523;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__302__auto____2522);
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
{var x__302__auto____2525 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2526 = x__302__auto____2525;

if(cljs.core.truth_(and__3546__auto____2526))
{var and__3546__auto____2527 = x__302__auto____2525.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2527))
{return cljs.core.not.call(null,x__302__auto____2525.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2527;
}
} else
{return and__3546__auto____2526;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__302__auto____2525);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__302__auto____2528 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2529 = x__302__auto____2528;

if(cljs.core.truth_(and__3546__auto____2529))
{var and__3546__auto____2530 = x__302__auto____2528.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2530))
{return cljs.core.not.call(null,x__302__auto____2528.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2530;
}
} else
{return and__3546__auto____2529;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__302__auto____2528);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__302__auto____2531 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2532 = x__302__auto____2531;

if(cljs.core.truth_(and__3546__auto____2532))
{var and__3546__auto____2533 = x__302__auto____2531.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2533))
{return cljs.core.not.call(null,x__302__auto____2531.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2533;
}
} else
{return and__3546__auto____2532;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__302__auto____2531);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__302__auto____2534 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2535 = x__302__auto____2534;

if(cljs.core.truth_(and__3546__auto____2535))
{var and__3546__auto____2536 = x__302__auto____2534.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2536))
{return cljs.core.not.call(null,x__302__auto____2534.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2536;
}
} else
{return and__3546__auto____2535;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__302__auto____2534);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__302__auto____2537 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2538 = x__302__auto____2537;

if(cljs.core.truth_(and__3546__auto____2538))
{var and__3546__auto____2539 = x__302__auto____2537.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2539))
{return cljs.core.not.call(null,x__302__auto____2537.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2539;
}
} else
{return and__3546__auto____2538;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__302__auto____2537);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__302__auto____2540 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2541 = x__302__auto____2540;

if(cljs.core.truth_(and__3546__auto____2541))
{var and__3546__auto____2542 = x__302__auto____2540.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2542))
{return cljs.core.not.call(null,x__302__auto____2540.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2542;
}
} else
{return and__3546__auto____2541;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__302__auto____2540);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2543 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2543.push(key);
}));
return keys__2543;
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
{var x__302__auto____2544 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2545 = x__302__auto____2544;

if(cljs.core.truth_(and__3546__auto____2545))
{var and__3546__auto____2546 = x__302__auto____2544.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2546))
{return cljs.core.not.call(null,x__302__auto____2544.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2546;
}
} else
{return and__3546__auto____2545;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__302__auto____2544);
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
var and__3546__auto____2547 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2547))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2548 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2548))
{return or__3548__auto____2548;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2547;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2549 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2549))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2549;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2550 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2550))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2550;
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
var and__3546__auto____2551 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2551))
{return (n == n.toFixed());
} else
{return and__3546__auto____2551;
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
if(cljs.core.truth_((function (){var and__3546__auto____2552 = coll;

if(cljs.core.truth_(and__3546__auto____2552))
{var and__3546__auto____2553 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2553))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2553;
}
} else
{return and__3546__auto____2552;
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
var distinct_QMARK___2558 = (function (x){
return true;
});
var distinct_QMARK___2559 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2560 = (function() { 
var G__2562__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2554 = cljs.core.set([y,x]);
var xs__2555 = more;

while(true){
var x__2556 = cljs.core.first.call(null,xs__2555);
var etc__2557 = cljs.core.next.call(null,xs__2555);

if(cljs.core.truth_(xs__2555))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2554,x__2556)))
{return false;
} else
{{
var G__2563 = cljs.core.conj.call(null,s__2554,x__2556);
var G__2564 = etc__2557;
s__2554 = G__2563;
xs__2555 = G__2564;
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
var G__2562 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2562__delegate.call(this, x, y, more);
};
G__2562.cljs$lang$maxFixedArity = 2;
G__2562.cljs$lang$applyTo = (function (arglist__2565){
var x = cljs.core.first(arglist__2565);
var y = cljs.core.first(cljs.core.next(arglist__2565));
var more = cljs.core.rest(cljs.core.next(arglist__2565));
return G__2562__delegate.call(this, x, y, more);
});
return G__2562;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2558.call(this,x);
case  2 :
return distinct_QMARK___2559.call(this,x,y);
default:
return distinct_QMARK___2560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2560.cljs$lang$applyTo;
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
var r__2566 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2566)))
{return r__2566;
} else
{if(cljs.core.truth_(r__2566))
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
var sort__2568 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2569 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2567 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2567,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2567);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2568.call(this,comp);
case  2 :
return sort__2569.call(this,comp,coll);
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
var sort_by__2571 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2572 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2571.call(this,keyfn,comp);
case  3 :
return sort_by__2572.call(this,keyfn,comp,coll);
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
var reduce__2574 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2575 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2574.call(this,f,val);
case  3 :
return reduce__2575.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2581 = (function (f,coll){
var temp__3695__auto____2577 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2577))
{var s__2578 = temp__3695__auto____2577;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2578),cljs.core.next.call(null,s__2578));
} else
{return f.call(null);
}
});
var seq_reduce__2582 = (function (f,val,coll){
var val__2579 = val;
var coll__2580 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2580))
{{
var G__2584 = f.call(null,val__2579,cljs.core.first.call(null,coll__2580));
var G__2585 = cljs.core.next.call(null,coll__2580);
val__2579 = G__2584;
coll__2580 = G__2585;
continue;
}
} else
{return val__2579;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2581.call(this,f,val);
case  3 :
return seq_reduce__2582.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2586 = null;
var G__2586__2587 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2586__2588 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2586 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2586__2587.call(this,coll,f);
case  3 :
return G__2586__2588.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2586;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2590 = (function (){
return 0;
});
var _PLUS___2591 = (function (x){
return x;
});
var _PLUS___2592 = (function (x,y){
return (x + y);
});
var _PLUS___2593 = (function() { 
var G__2595__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2595 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2595__delegate.call(this, x, y, more);
};
G__2595.cljs$lang$maxFixedArity = 2;
G__2595.cljs$lang$applyTo = (function (arglist__2596){
var x = cljs.core.first(arglist__2596);
var y = cljs.core.first(cljs.core.next(arglist__2596));
var more = cljs.core.rest(cljs.core.next(arglist__2596));
return G__2595__delegate.call(this, x, y, more);
});
return G__2595;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2590.call(this);
case  1 :
return _PLUS___2591.call(this,x);
case  2 :
return _PLUS___2592.call(this,x,y);
default:
return _PLUS___2593.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2593.cljs$lang$applyTo;
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
var ___2597 = (function (x){
return (- x);
});
var ___2598 = (function (x,y){
return (x - y);
});
var ___2599 = (function() { 
var G__2601__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2601 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2601__delegate.call(this, x, y, more);
};
G__2601.cljs$lang$maxFixedArity = 2;
G__2601.cljs$lang$applyTo = (function (arglist__2602){
var x = cljs.core.first(arglist__2602);
var y = cljs.core.first(cljs.core.next(arglist__2602));
var more = cljs.core.rest(cljs.core.next(arglist__2602));
return G__2601__delegate.call(this, x, y, more);
});
return G__2601;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2597.call(this,x);
case  2 :
return ___2598.call(this,x,y);
default:
return ___2599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2599.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2603 = (function (){
return 1;
});
var _STAR___2604 = (function (x){
return x;
});
var _STAR___2605 = (function (x,y){
return (x * y);
});
var _STAR___2606 = (function() { 
var G__2608__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2608 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2608__delegate.call(this, x, y, more);
};
G__2608.cljs$lang$maxFixedArity = 2;
G__2608.cljs$lang$applyTo = (function (arglist__2609){
var x = cljs.core.first(arglist__2609);
var y = cljs.core.first(cljs.core.next(arglist__2609));
var more = cljs.core.rest(cljs.core.next(arglist__2609));
return G__2608__delegate.call(this, x, y, more);
});
return G__2608;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2603.call(this);
case  1 :
return _STAR___2604.call(this,x);
case  2 :
return _STAR___2605.call(this,x,y);
default:
return _STAR___2606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2606.cljs$lang$applyTo;
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
var _SLASH___2610 = (function (x){
return (1 / x);
});
var _SLASH___2611 = (function (x,y){
return (x / y);
});
var _SLASH___2612 = (function() { 
var G__2614__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2614 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2614__delegate.call(this, x, y, more);
};
G__2614.cljs$lang$maxFixedArity = 2;
G__2614.cljs$lang$applyTo = (function (arglist__2615){
var x = cljs.core.first(arglist__2615);
var y = cljs.core.first(cljs.core.next(arglist__2615));
var more = cljs.core.rest(cljs.core.next(arglist__2615));
return G__2614__delegate.call(this, x, y, more);
});
return G__2614;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2610.call(this,x);
case  2 :
return _SLASH___2611.call(this,x,y);
default:
return _SLASH___2612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2612.cljs$lang$applyTo;
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
var _LT___2616 = (function (x){
return true;
});
var _LT___2617 = (function (x,y){
return (x < y);
});
var _LT___2618 = (function() { 
var G__2620__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2621 = y;
var G__2622 = cljs.core.first.call(null,more);
var G__2623 = cljs.core.next.call(null,more);
x = G__2621;
y = G__2622;
more = G__2623;
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
var G__2620 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2620__delegate.call(this, x, y, more);
};
G__2620.cljs$lang$maxFixedArity = 2;
G__2620.cljs$lang$applyTo = (function (arglist__2624){
var x = cljs.core.first(arglist__2624);
var y = cljs.core.first(cljs.core.next(arglist__2624));
var more = cljs.core.rest(cljs.core.next(arglist__2624));
return G__2620__delegate.call(this, x, y, more);
});
return G__2620;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2616.call(this,x);
case  2 :
return _LT___2617.call(this,x,y);
default:
return _LT___2618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2618.cljs$lang$applyTo;
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
var _LT__EQ___2625 = (function (x){
return true;
});
var _LT__EQ___2626 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2627 = (function() { 
var G__2629__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2630 = y;
var G__2631 = cljs.core.first.call(null,more);
var G__2632 = cljs.core.next.call(null,more);
x = G__2630;
y = G__2631;
more = G__2632;
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
var G__2629 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2629__delegate.call(this, x, y, more);
};
G__2629.cljs$lang$maxFixedArity = 2;
G__2629.cljs$lang$applyTo = (function (arglist__2633){
var x = cljs.core.first(arglist__2633);
var y = cljs.core.first(cljs.core.next(arglist__2633));
var more = cljs.core.rest(cljs.core.next(arglist__2633));
return G__2629__delegate.call(this, x, y, more);
});
return G__2629;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2625.call(this,x);
case  2 :
return _LT__EQ___2626.call(this,x,y);
default:
return _LT__EQ___2627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2627.cljs$lang$applyTo;
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
var _GT___2634 = (function (x){
return true;
});
var _GT___2635 = (function (x,y){
return (x > y);
});
var _GT___2636 = (function() { 
var G__2638__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2639 = y;
var G__2640 = cljs.core.first.call(null,more);
var G__2641 = cljs.core.next.call(null,more);
x = G__2639;
y = G__2640;
more = G__2641;
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
var G__2638 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2638__delegate.call(this, x, y, more);
};
G__2638.cljs$lang$maxFixedArity = 2;
G__2638.cljs$lang$applyTo = (function (arglist__2642){
var x = cljs.core.first(arglist__2642);
var y = cljs.core.first(cljs.core.next(arglist__2642));
var more = cljs.core.rest(cljs.core.next(arglist__2642));
return G__2638__delegate.call(this, x, y, more);
});
return G__2638;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2634.call(this,x);
case  2 :
return _GT___2635.call(this,x,y);
default:
return _GT___2636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2636.cljs$lang$applyTo;
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
var _GT__EQ___2643 = (function (x){
return true;
});
var _GT__EQ___2644 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2645 = (function() { 
var G__2647__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
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
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
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
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2643.call(this,x);
case  2 :
return _GT__EQ___2644.call(this,x,y);
default:
return _GT__EQ___2645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2645.cljs$lang$applyTo;
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
var max__2652 = (function (x){
return x;
});
var max__2653 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2654 = (function() { 
var G__2656__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2656 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2656__delegate.call(this, x, y, more);
};
G__2656.cljs$lang$maxFixedArity = 2;
G__2656.cljs$lang$applyTo = (function (arglist__2657){
var x = cljs.core.first(arglist__2657);
var y = cljs.core.first(cljs.core.next(arglist__2657));
var more = cljs.core.rest(cljs.core.next(arglist__2657));
return G__2656__delegate.call(this, x, y, more);
});
return G__2656;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2652.call(this,x);
case  2 :
return max__2653.call(this,x,y);
default:
return max__2654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2654.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2658 = (function (x){
return x;
});
var min__2659 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2660 = (function() { 
var G__2662__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2662 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2662__delegate.call(this, x, y, more);
};
G__2662.cljs$lang$maxFixedArity = 2;
G__2662.cljs$lang$applyTo = (function (arglist__2663){
var x = cljs.core.first(arglist__2663);
var y = cljs.core.first(cljs.core.next(arglist__2663));
var more = cljs.core.rest(cljs.core.next(arglist__2663));
return G__2662__delegate.call(this, x, y, more);
});
return G__2662;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2658.call(this,x);
case  2 :
return min__2659.call(this,x,y);
default:
return min__2660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2660.cljs$lang$applyTo;
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
var rem__2664 = (n % d);

return cljs.core.fix.call(null,((n - rem__2664) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2665 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2665));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2666 = (function (){
return Math.random.call(null);
});
var rand__2667 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2666.call(this);
case  1 :
return rand__2667.call(this,n);
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
var _EQ__EQ___2669 = (function (x){
return true;
});
var _EQ__EQ___2670 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2671 = (function() { 
var G__2673__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2674 = y;
var G__2675 = cljs.core.first.call(null,more);
var G__2676 = cljs.core.next.call(null,more);
x = G__2674;
y = G__2675;
more = G__2676;
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
var G__2673 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2673__delegate.call(this, x, y, more);
};
G__2673.cljs$lang$maxFixedArity = 2;
G__2673.cljs$lang$applyTo = (function (arglist__2677){
var x = cljs.core.first(arglist__2677);
var y = cljs.core.first(cljs.core.next(arglist__2677));
var more = cljs.core.rest(cljs.core.next(arglist__2677));
return G__2673__delegate.call(this, x, y, more);
});
return G__2673;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2669.call(this,x);
case  2 :
return _EQ__EQ___2670.call(this,x,y);
default:
return _EQ__EQ___2671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2671.cljs$lang$applyTo;
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
var n__2678 = n;
var xs__2679 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2680 = xs__2679;

if(cljs.core.truth_(and__3546__auto____2680))
{return (n__2678 > 0);
} else
{return and__3546__auto____2680;
}
})()))
{{
var G__2681 = (n__2678 - 1);
var G__2682 = cljs.core.next.call(null,xs__2679);
n__2678 = G__2681;
xs__2679 = G__2682;
continue;
}
} else
{return xs__2679;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2687 = null;
var G__2687__2688 = (function (coll,n){
var temp__3695__auto____2683 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2683))
{var xs__2684 = temp__3695__auto____2683;

return cljs.core.first.call(null,xs__2684);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2687__2689 = (function (coll,n,not_found){
var temp__3695__auto____2685 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2685))
{var xs__2686 = temp__3695__auto____2685;

return cljs.core.first.call(null,xs__2686);
} else
{return not_found;
}
});
G__2687 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2687__2688.call(this,coll,n);
case  3 :
return G__2687__2689.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2687;
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
var str__2691 = (function (){
return "";
});
var str__2692 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2693 = (function() { 
var G__2695__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2696 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2697 = cljs.core.next.call(null,more);
sb = G__2696;
more = G__2697;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2695 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2695__delegate.call(this, x, ys);
};
G__2695.cljs$lang$maxFixedArity = 1;
G__2695.cljs$lang$applyTo = (function (arglist__2698){
var x = cljs.core.first(arglist__2698);
var ys = cljs.core.rest(arglist__2698);
return G__2695__delegate.call(this, x, ys);
});
return G__2695;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2691.call(this);
case  1 :
return str__2692.call(this,x);
default:
return str__2693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2693.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2699 = (function (s,start){
return s.substring(start);
});
var subs__2700 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2699.call(this,s,start);
case  3 :
return subs__2700.call(this,s,start,end);
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
var symbol__2702 = (function (name){
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
var symbol__2703 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2702.call(this,ns);
case  2 :
return symbol__2703.call(this,ns,name);
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
var keyword__2705 = (function (name){
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
var keyword__2706 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2705.call(this,ns);
case  2 :
return keyword__2706.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2708 = cljs.core.seq.call(null,x);
var ys__2709 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2708)))
{return cljs.core.nil_QMARK_.call(null,ys__2709);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2709)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2708),cljs.core.first.call(null,ys__2709))))
{{
var G__2710 = cljs.core.next.call(null,xs__2708);
var G__2711 = cljs.core.next.call(null,ys__2709);
xs__2708 = G__2710;
ys__2709 = G__2711;
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
return cljs.core.reduce.call(null,(function (p1__2712_SHARP_,p2__2713_SHARP_){
return cljs.core.hash_combine.call(null,p1__2712_SHARP_,cljs.core.hash.call(null,p2__2713_SHARP_));
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
var this__2714 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2715 = this;
return (new cljs.core.List(this__2715.meta,o,coll,(this__2715.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2716 = this;
return this__2716.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2717 = this;
return this__2717.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2718 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2719 = this;
return this__2719.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2720 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2721 = this;
return (new cljs.core.List(meta,this__2721.first,this__2721.rest,this__2721.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2722 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2723 = this;
return this__2723.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2724 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2725 = this;
return this__2725.count;
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
var this__2726 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2727 = this;
return (new cljs.core.List(this__2727.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2728 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2729 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2730 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2731 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2732 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2733 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2734 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2735 = this;
return this__2735.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2736 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2737 = this;
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
list.cljs$lang$applyTo = (function (arglist__2738){
var items = cljs.core.seq( arglist__2738 );;
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
var this__2739 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2740 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2741 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2742 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2742.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2743 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2744 = this;
return this__2744.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2745 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2745.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2745.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2746 = this;
return this__2746.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2747 = this;
return (new cljs.core.Cons(meta,this__2747.first,this__2747.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2748 = null;
var G__2748__2749 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2748__2750 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2748 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2748__2749.call(this,string,f);
case  3 :
return G__2748__2750.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2748;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2752 = null;
var G__2752__2753 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2752__2754 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2752 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2752__2753.call(this,string,k);
case  3 :
return G__2752__2754.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2752;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2756 = null;
var G__2756__2757 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2756__2758 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2756 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2756__2757.call(this,string,n);
case  3 :
return G__2756__2758.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2756;
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
var G__2760 = null;
var G__2760__2761 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2760__2762 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2760 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2760__2761.call(this,_,coll);
case  3 :
return G__2760__2762.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2760;
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
var x__2764 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2764;
} else
{lazy_seq.x = x__2764.call(null);
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
var this__2765 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2766 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2767 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2768 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2768.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2769 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2770 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2771 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2772 = this;
return this__2772.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2773 = this;
return (new cljs.core.LazySeq(meta,this__2773.realized,this__2773.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2774 = cljs.core.array.call(null);

var s__2775 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2775)))
{ary__2774.push(cljs.core.first.call(null,s__2775));
{
var G__2776 = cljs.core.next.call(null,s__2775);
s__2775 = G__2776;
continue;
}
} else
{return ary__2774;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2777 = s;
var i__2778 = n;
var sum__2779 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2780 = (i__2778 > 0);

if(cljs.core.truth_(and__3546__auto____2780))
{return cljs.core.seq.call(null,s__2777);
} else
{return and__3546__auto____2780;
}
})()))
{{
var G__2781 = cljs.core.next.call(null,s__2777);
var G__2782 = (i__2778 - 1);
var G__2783 = (sum__2779 + 1);
s__2777 = G__2781;
i__2778 = G__2782;
sum__2779 = G__2783;
continue;
}
} else
{return sum__2779;
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
var concat__2787 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2788 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2789 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2784 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2784))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2784),concat.call(null,cljs.core.rest.call(null,s__2784),y));
} else
{return y;
}
})));
});
var concat__2790 = (function() { 
var G__2792__delegate = function (x,y,zs){
var cat__2786 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2785 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2785))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2785),cat.call(null,cljs.core.rest.call(null,xys__2785),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2786.call(null,concat.call(null,x,y),zs);
};
var G__2792 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2792__delegate.call(this, x, y, zs);
};
G__2792.cljs$lang$maxFixedArity = 2;
G__2792.cljs$lang$applyTo = (function (arglist__2793){
var x = cljs.core.first(arglist__2793);
var y = cljs.core.first(cljs.core.next(arglist__2793));
var zs = cljs.core.rest(cljs.core.next(arglist__2793));
return G__2792__delegate.call(this, x, y, zs);
});
return G__2792;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2787.call(this);
case  1 :
return concat__2788.call(this,x);
case  2 :
return concat__2789.call(this,x,y);
default:
return concat__2790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2790.cljs$lang$applyTo;
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
var list_STAR___2794 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2795 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2796 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2797 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2798 = (function() { 
var G__2800__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2800 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2800__delegate.call(this, a, b, c, d, more);
};
G__2800.cljs$lang$maxFixedArity = 4;
G__2800.cljs$lang$applyTo = (function (arglist__2801){
var a = cljs.core.first(arglist__2801);
var b = cljs.core.first(cljs.core.next(arglist__2801));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2801)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2801))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2801))));
return G__2800__delegate.call(this, a, b, c, d, more);
});
return G__2800;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2794.call(this,a);
case  2 :
return list_STAR___2795.call(this,a,b);
case  3 :
return list_STAR___2796.call(this,a,b,c);
case  4 :
return list_STAR___2797.call(this,a,b,c,d);
default:
return list_STAR___2798.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2798.cljs$lang$applyTo;
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
var apply__2811 = (function (f,args){
var fixed_arity__2802 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2802 + 1)) <= fixed_arity__2802)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2812 = (function (f,x,args){
var arglist__2803 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2804 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2803,fixed_arity__2804) <= fixed_arity__2804)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2803));
} else
{return f.cljs$lang$applyTo(arglist__2803);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2803));
}
});
var apply__2813 = (function (f,x,y,args){
var arglist__2805 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2806 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2805,fixed_arity__2806) <= fixed_arity__2806)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2805));
} else
{return f.cljs$lang$applyTo(arglist__2805);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2805));
}
});
var apply__2814 = (function (f,x,y,z,args){
var arglist__2807 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2808 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2807,fixed_arity__2808) <= fixed_arity__2808)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2807));
} else
{return f.cljs$lang$applyTo(arglist__2807);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2807));
}
});
var apply__2815 = (function() { 
var G__2817__delegate = function (f,a,b,c,d,args){
var arglist__2809 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2810 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2809,fixed_arity__2810) <= fixed_arity__2810)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2809));
} else
{return f.cljs$lang$applyTo(arglist__2809);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2809));
}
};
var G__2817 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2817__delegate.call(this, f, a, b, c, d, args);
};
G__2817.cljs$lang$maxFixedArity = 5;
G__2817.cljs$lang$applyTo = (function (arglist__2818){
var f = cljs.core.first(arglist__2818);
var a = cljs.core.first(cljs.core.next(arglist__2818));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2818)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2818))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2818)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2818)))));
return G__2817__delegate.call(this, f, a, b, c, d, args);
});
return G__2817;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2811.call(this,f,a);
case  3 :
return apply__2812.call(this,f,a,b);
case  4 :
return apply__2813.call(this,f,a,b,c);
case  5 :
return apply__2814.call(this,f,a,b,c,d);
default:
return apply__2815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2815.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2819){
var obj = cljs.core.first(arglist__2819);
var f = cljs.core.first(cljs.core.next(arglist__2819));
var args = cljs.core.rest(cljs.core.next(arglist__2819));
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
var not_EQ___2820 = (function (x){
return false;
});
var not_EQ___2821 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2822 = (function() { 
var G__2824__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2824 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2824__delegate.call(this, x, y, more);
};
G__2824.cljs$lang$maxFixedArity = 2;
G__2824.cljs$lang$applyTo = (function (arglist__2825){
var x = cljs.core.first(arglist__2825);
var y = cljs.core.first(cljs.core.next(arglist__2825));
var more = cljs.core.rest(cljs.core.next(arglist__2825));
return G__2824__delegate.call(this, x, y, more);
});
return G__2824;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2820.call(this,x);
case  2 :
return not_EQ___2821.call(this,x,y);
default:
return not_EQ___2822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2822.cljs$lang$applyTo;
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
var G__2826 = pred;
var G__2827 = cljs.core.next.call(null,coll);
pred = G__2826;
coll = G__2827;
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
{var or__3548__auto____2828 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____2828))
{return or__3548__auto____2828;
} else
{{
var G__2829 = pred;
var G__2830 = cljs.core.next.call(null,coll);
pred = G__2829;
coll = G__2830;
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
var G__2831 = null;
var G__2831__2832 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2831__2833 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2831__2834 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2831__2835 = (function() { 
var G__2837__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2837 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2837__delegate.call(this, x, y, zs);
};
G__2837.cljs$lang$maxFixedArity = 2;
G__2837.cljs$lang$applyTo = (function (arglist__2838){
var x = cljs.core.first(arglist__2838);
var y = cljs.core.first(cljs.core.next(arglist__2838));
var zs = cljs.core.rest(cljs.core.next(arglist__2838));
return G__2837__delegate.call(this, x, y, zs);
});
return G__2837;
})()
;
G__2831 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2831__2832.call(this);
case  1 :
return G__2831__2833.call(this,x);
case  2 :
return G__2831__2834.call(this,x,y);
default:
return G__2831__2835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2831.cljs$lang$maxFixedArity = 2;
G__2831.cljs$lang$applyTo = G__2831__2835.cljs$lang$applyTo;
return G__2831;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2839__delegate = function (args){
return x;
};
var G__2839 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2839__delegate.call(this, args);
};
G__2839.cljs$lang$maxFixedArity = 0;
G__2839.cljs$lang$applyTo = (function (arglist__2840){
var args = cljs.core.seq( arglist__2840 );;
return G__2839__delegate.call(this, args);
});
return G__2839;
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
var comp__2844 = (function (){
return cljs.core.identity;
});
var comp__2845 = (function (f){
return f;
});
var comp__2846 = (function (f,g){
return (function() {
var G__2850 = null;
var G__2850__2851 = (function (){
return f.call(null,g.call(null));
});
var G__2850__2852 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2850__2853 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2850__2854 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2850__2855 = (function() { 
var G__2857__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2857 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2857__delegate.call(this, x, y, z, args);
};
G__2857.cljs$lang$maxFixedArity = 3;
G__2857.cljs$lang$applyTo = (function (arglist__2858){
var x = cljs.core.first(arglist__2858);
var y = cljs.core.first(cljs.core.next(arglist__2858));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2858)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2858)));
return G__2857__delegate.call(this, x, y, z, args);
});
return G__2857;
})()
;
G__2850 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2850__2851.call(this);
case  1 :
return G__2850__2852.call(this,x);
case  2 :
return G__2850__2853.call(this,x,y);
case  3 :
return G__2850__2854.call(this,x,y,z);
default:
return G__2850__2855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2850.cljs$lang$maxFixedArity = 3;
G__2850.cljs$lang$applyTo = G__2850__2855.cljs$lang$applyTo;
return G__2850;
})()
});
var comp__2847 = (function (f,g,h){
return (function() {
var G__2859 = null;
var G__2859__2860 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2859__2861 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2859__2862 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2859__2863 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2859__2864 = (function() { 
var G__2866__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2866 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2866__delegate.call(this, x, y, z, args);
};
G__2866.cljs$lang$maxFixedArity = 3;
G__2866.cljs$lang$applyTo = (function (arglist__2867){
var x = cljs.core.first(arglist__2867);
var y = cljs.core.first(cljs.core.next(arglist__2867));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2867)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2867)));
return G__2866__delegate.call(this, x, y, z, args);
});
return G__2866;
})()
;
G__2859 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2859__2860.call(this);
case  1 :
return G__2859__2861.call(this,x);
case  2 :
return G__2859__2862.call(this,x,y);
case  3 :
return G__2859__2863.call(this,x,y,z);
default:
return G__2859__2864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2859.cljs$lang$maxFixedArity = 3;
G__2859.cljs$lang$applyTo = G__2859__2864.cljs$lang$applyTo;
return G__2859;
})()
});
var comp__2848 = (function() { 
var G__2868__delegate = function (f1,f2,f3,fs){
var fs__2841 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2869__delegate = function (args){
var ret__2842 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2841),args);
var fs__2843 = cljs.core.next.call(null,fs__2841);

while(true){
if(cljs.core.truth_(fs__2843))
{{
var G__2870 = cljs.core.first.call(null,fs__2843).call(null,ret__2842);
var G__2871 = cljs.core.next.call(null,fs__2843);
ret__2842 = G__2870;
fs__2843 = G__2871;
continue;
}
} else
{return ret__2842;
}
break;
}
};
var G__2869 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2869__delegate.call(this, args);
};
G__2869.cljs$lang$maxFixedArity = 0;
G__2869.cljs$lang$applyTo = (function (arglist__2872){
var args = cljs.core.seq( arglist__2872 );;
return G__2869__delegate.call(this, args);
});
return G__2869;
})()
;
};
var G__2868 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2868__delegate.call(this, f1, f2, f3, fs);
};
G__2868.cljs$lang$maxFixedArity = 3;
G__2868.cljs$lang$applyTo = (function (arglist__2873){
var f1 = cljs.core.first(arglist__2873);
var f2 = cljs.core.first(cljs.core.next(arglist__2873));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2873)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2873)));
return G__2868__delegate.call(this, f1, f2, f3, fs);
});
return G__2868;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2844.call(this);
case  1 :
return comp__2845.call(this,f1);
case  2 :
return comp__2846.call(this,f1,f2);
case  3 :
return comp__2847.call(this,f1,f2,f3);
default:
return comp__2848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2848.cljs$lang$applyTo;
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
var partial__2874 = (function (f,arg1){
return (function() { 
var G__2879__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2879 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2879__delegate.call(this, args);
};
G__2879.cljs$lang$maxFixedArity = 0;
G__2879.cljs$lang$applyTo = (function (arglist__2880){
var args = cljs.core.seq( arglist__2880 );;
return G__2879__delegate.call(this, args);
});
return G__2879;
})()
;
});
var partial__2875 = (function (f,arg1,arg2){
return (function() { 
var G__2881__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2881 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2881__delegate.call(this, args);
};
G__2881.cljs$lang$maxFixedArity = 0;
G__2881.cljs$lang$applyTo = (function (arglist__2882){
var args = cljs.core.seq( arglist__2882 );;
return G__2881__delegate.call(this, args);
});
return G__2881;
})()
;
});
var partial__2876 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2883__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2883 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2883__delegate.call(this, args);
};
G__2883.cljs$lang$maxFixedArity = 0;
G__2883.cljs$lang$applyTo = (function (arglist__2884){
var args = cljs.core.seq( arglist__2884 );;
return G__2883__delegate.call(this, args);
});
return G__2883;
})()
;
});
var partial__2877 = (function() { 
var G__2885__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2886__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2886 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2886__delegate.call(this, args);
};
G__2886.cljs$lang$maxFixedArity = 0;
G__2886.cljs$lang$applyTo = (function (arglist__2887){
var args = cljs.core.seq( arglist__2887 );;
return G__2886__delegate.call(this, args);
});
return G__2886;
})()
;
};
var G__2885 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2885__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2885.cljs$lang$maxFixedArity = 4;
G__2885.cljs$lang$applyTo = (function (arglist__2888){
var f = cljs.core.first(arglist__2888);
var arg1 = cljs.core.first(cljs.core.next(arglist__2888));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2888)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2888))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2888))));
return G__2885__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2885;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2874.call(this,f,arg1);
case  3 :
return partial__2875.call(this,f,arg1,arg2);
case  4 :
return partial__2876.call(this,f,arg1,arg2,arg3);
default:
return partial__2877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2877.cljs$lang$applyTo;
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
var fnil__2889 = (function (f,x){
return (function() {
var G__2893 = null;
var G__2893__2894 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2893__2895 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2893__2896 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2893__2897 = (function() { 
var G__2899__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2899 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2899__delegate.call(this, a, b, c, ds);
};
G__2899.cljs$lang$maxFixedArity = 3;
G__2899.cljs$lang$applyTo = (function (arglist__2900){
var a = cljs.core.first(arglist__2900);
var b = cljs.core.first(cljs.core.next(arglist__2900));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2900)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2900)));
return G__2899__delegate.call(this, a, b, c, ds);
});
return G__2899;
})()
;
G__2893 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2893__2894.call(this,a);
case  2 :
return G__2893__2895.call(this,a,b);
case  3 :
return G__2893__2896.call(this,a,b,c);
default:
return G__2893__2897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2893.cljs$lang$maxFixedArity = 3;
G__2893.cljs$lang$applyTo = G__2893__2897.cljs$lang$applyTo;
return G__2893;
})()
});
var fnil__2890 = (function (f,x,y){
return (function() {
var G__2901 = null;
var G__2901__2902 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2901__2903 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2901__2904 = (function() { 
var G__2906__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2906 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2906__delegate.call(this, a, b, c, ds);
};
G__2906.cljs$lang$maxFixedArity = 3;
G__2906.cljs$lang$applyTo = (function (arglist__2907){
var a = cljs.core.first(arglist__2907);
var b = cljs.core.first(cljs.core.next(arglist__2907));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2907)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2907)));
return G__2906__delegate.call(this, a, b, c, ds);
});
return G__2906;
})()
;
G__2901 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2901__2902.call(this,a,b);
case  3 :
return G__2901__2903.call(this,a,b,c);
default:
return G__2901__2904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2901.cljs$lang$maxFixedArity = 3;
G__2901.cljs$lang$applyTo = G__2901__2904.cljs$lang$applyTo;
return G__2901;
})()
});
var fnil__2891 = (function (f,x,y,z){
return (function() {
var G__2908 = null;
var G__2908__2909 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2908__2910 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2908__2911 = (function() { 
var G__2913__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2913 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2913__delegate.call(this, a, b, c, ds);
};
G__2913.cljs$lang$maxFixedArity = 3;
G__2913.cljs$lang$applyTo = (function (arglist__2914){
var a = cljs.core.first(arglist__2914);
var b = cljs.core.first(cljs.core.next(arglist__2914));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2914)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2914)));
return G__2913__delegate.call(this, a, b, c, ds);
});
return G__2913;
})()
;
G__2908 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2908__2909.call(this,a,b);
case  3 :
return G__2908__2910.call(this,a,b,c);
default:
return G__2908__2911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2908.cljs$lang$maxFixedArity = 3;
G__2908.cljs$lang$applyTo = G__2908__2911.cljs$lang$applyTo;
return G__2908;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2889.call(this,f,x);
case  3 :
return fnil__2890.call(this,f,x,y);
case  4 :
return fnil__2891.call(this,f,x,y,z);
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
var mapi__2917 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2915 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2915))
{var s__2916 = temp__3698__auto____2915;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2916)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2916)));
} else
{return null;
}
})));
});

return mapi__2917.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2918 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2918))
{var s__2919 = temp__3698__auto____2918;

var x__2920 = f.call(null,cljs.core.first.call(null,s__2919));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2920)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2919));
} else
{return cljs.core.cons.call(null,x__2920,keep.call(null,f,cljs.core.rest.call(null,s__2919)));
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
var keepi__2930 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____2927 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2927))
{var s__2928 = temp__3698__auto____2927;

var x__2929 = f.call(null,idx,cljs.core.first.call(null,s__2928));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2929)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2928));
} else
{return cljs.core.cons.call(null,x__2929,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__2928)));
}
} else
{return null;
}
})));
});

return keepi__2930.call(null,0,coll);
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
var every_pred__2975 = (function (p){
return (function() {
var ep1 = null;
var ep1__2980 = (function (){
return true;
});
var ep1__2981 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2982 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2937 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2937))
{return p.call(null,y);
} else
{return and__3546__auto____2937;
}
})());
});
var ep1__2983 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2938 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____2938))
{var and__3546__auto____2939 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____2939))
{return p.call(null,z);
} else
{return and__3546__auto____2939;
}
} else
{return and__3546__auto____2938;
}
})());
});
var ep1__2984 = (function() { 
var G__2986__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2940 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2940))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____2940;
}
})());
};
var G__2986 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2986__delegate.call(this, x, y, z, args);
};
G__2986.cljs$lang$maxFixedArity = 3;
G__2986.cljs$lang$applyTo = (function (arglist__2987){
var x = cljs.core.first(arglist__2987);
var y = cljs.core.first(cljs.core.next(arglist__2987));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2987)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2987)));
return G__2986__delegate.call(this, x, y, z, args);
});
return G__2986;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2980.call(this);
case  1 :
return ep1__2981.call(this,x);
case  2 :
return ep1__2982.call(this,x,y);
case  3 :
return ep1__2983.call(this,x,y,z);
default:
return ep1__2984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2984.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2976 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2988 = (function (){
return true;
});
var ep2__2989 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2941 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2941))
{return p2.call(null,x);
} else
{return and__3546__auto____2941;
}
})());
});
var ep2__2990 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2942 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2942))
{var and__3546__auto____2943 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2943))
{var and__3546__auto____2944 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2944))
{return p2.call(null,y);
} else
{return and__3546__auto____2944;
}
} else
{return and__3546__auto____2943;
}
} else
{return and__3546__auto____2942;
}
})());
});
var ep2__2991 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2945 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2945))
{var and__3546__auto____2946 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2946))
{var and__3546__auto____2947 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2947))
{var and__3546__auto____2948 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2948))
{var and__3546__auto____2949 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2949))
{return p2.call(null,z);
} else
{return and__3546__auto____2949;
}
} else
{return and__3546__auto____2948;
}
} else
{return and__3546__auto____2947;
}
} else
{return and__3546__auto____2946;
}
} else
{return and__3546__auto____2945;
}
})());
});
var ep2__2992 = (function() { 
var G__2994__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2950 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2950))
{return cljs.core.every_QMARK_.call(null,(function (p1__2921_SHARP_){
var and__3546__auto____2951 = p1.call(null,p1__2921_SHARP_);

if(cljs.core.truth_(and__3546__auto____2951))
{return p2.call(null,p1__2921_SHARP_);
} else
{return and__3546__auto____2951;
}
}),args);
} else
{return and__3546__auto____2950;
}
})());
};
var G__2994 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2994__delegate.call(this, x, y, z, args);
};
G__2994.cljs$lang$maxFixedArity = 3;
G__2994.cljs$lang$applyTo = (function (arglist__2995){
var x = cljs.core.first(arglist__2995);
var y = cljs.core.first(cljs.core.next(arglist__2995));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2995)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2995)));
return G__2994__delegate.call(this, x, y, z, args);
});
return G__2994;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2988.call(this);
case  1 :
return ep2__2989.call(this,x);
case  2 :
return ep2__2990.call(this,x,y);
case  3 :
return ep2__2991.call(this,x,y,z);
default:
return ep2__2992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2992.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2977 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2996 = (function (){
return true;
});
var ep3__2997 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2952 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2952))
{var and__3546__auto____2953 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2953))
{return p3.call(null,x);
} else
{return and__3546__auto____2953;
}
} else
{return and__3546__auto____2952;
}
})());
});
var ep3__2998 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2954 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2954))
{var and__3546__auto____2955 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2955))
{var and__3546__auto____2956 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2956))
{var and__3546__auto____2957 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2957))
{var and__3546__auto____2958 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2958))
{return p3.call(null,y);
} else
{return and__3546__auto____2958;
}
} else
{return and__3546__auto____2957;
}
} else
{return and__3546__auto____2956;
}
} else
{return and__3546__auto____2955;
}
} else
{return and__3546__auto____2954;
}
})());
});
var ep3__2999 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2959 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____2959))
{var and__3546__auto____2960 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____2960))
{var and__3546__auto____2961 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____2961))
{var and__3546__auto____2962 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____2962))
{var and__3546__auto____2963 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____2963))
{var and__3546__auto____2964 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____2964))
{var and__3546__auto____2965 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____2965))
{var and__3546__auto____2966 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____2966))
{return p3.call(null,z);
} else
{return and__3546__auto____2966;
}
} else
{return and__3546__auto____2965;
}
} else
{return and__3546__auto____2964;
}
} else
{return and__3546__auto____2963;
}
} else
{return and__3546__auto____2962;
}
} else
{return and__3546__auto____2961;
}
} else
{return and__3546__auto____2960;
}
} else
{return and__3546__auto____2959;
}
})());
});
var ep3__3000 = (function() { 
var G__3002__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2967 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2967))
{return cljs.core.every_QMARK_.call(null,(function (p1__2922_SHARP_){
var and__3546__auto____2968 = p1.call(null,p1__2922_SHARP_);

if(cljs.core.truth_(and__3546__auto____2968))
{var and__3546__auto____2969 = p2.call(null,p1__2922_SHARP_);

if(cljs.core.truth_(and__3546__auto____2969))
{return p3.call(null,p1__2922_SHARP_);
} else
{return and__3546__auto____2969;
}
} else
{return and__3546__auto____2968;
}
}),args);
} else
{return and__3546__auto____2967;
}
})());
};
var G__3002 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3002__delegate.call(this, x, y, z, args);
};
G__3002.cljs$lang$maxFixedArity = 3;
G__3002.cljs$lang$applyTo = (function (arglist__3003){
var x = cljs.core.first(arglist__3003);
var y = cljs.core.first(cljs.core.next(arglist__3003));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3003)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3003)));
return G__3002__delegate.call(this, x, y, z, args);
});
return G__3002;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2996.call(this);
case  1 :
return ep3__2997.call(this,x);
case  2 :
return ep3__2998.call(this,x,y);
case  3 :
return ep3__2999.call(this,x,y,z);
default:
return ep3__3000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3000.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2978 = (function() { 
var G__3004__delegate = function (p1,p2,p3,ps){
var ps__2970 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3005 = (function (){
return true;
});
var epn__3006 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2923_SHARP_){
return p1__2923_SHARP_.call(null,x);
}),ps__2970);
});
var epn__3007 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2924_SHARP_){
var and__3546__auto____2971 = p1__2924_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2971))
{return p1__2924_SHARP_.call(null,y);
} else
{return and__3546__auto____2971;
}
}),ps__2970);
});
var epn__3008 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2925_SHARP_){
var and__3546__auto____2972 = p1__2925_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____2972))
{var and__3546__auto____2973 = p1__2925_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____2973))
{return p1__2925_SHARP_.call(null,z);
} else
{return and__3546__auto____2973;
}
} else
{return and__3546__auto____2972;
}
}),ps__2970);
});
var epn__3009 = (function() { 
var G__3011__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____2974 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____2974))
{return cljs.core.every_QMARK_.call(null,(function (p1__2926_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2926_SHARP_,args);
}),ps__2970);
} else
{return and__3546__auto____2974;
}
})());
};
var G__3011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3011__delegate.call(this, x, y, z, args);
};
G__3011.cljs$lang$maxFixedArity = 3;
G__3011.cljs$lang$applyTo = (function (arglist__3012){
var x = cljs.core.first(arglist__3012);
var y = cljs.core.first(cljs.core.next(arglist__3012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3012)));
return G__3011__delegate.call(this, x, y, z, args);
});
return G__3011;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3005.call(this);
case  1 :
return epn__3006.call(this,x);
case  2 :
return epn__3007.call(this,x,y);
case  3 :
return epn__3008.call(this,x,y,z);
default:
return epn__3009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3009.cljs$lang$applyTo;
return epn;
})()
};
var G__3004 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3004__delegate.call(this, p1, p2, p3, ps);
};
G__3004.cljs$lang$maxFixedArity = 3;
G__3004.cljs$lang$applyTo = (function (arglist__3013){
var p1 = cljs.core.first(arglist__3013);
var p2 = cljs.core.first(cljs.core.next(arglist__3013));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3013)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3013)));
return G__3004__delegate.call(this, p1, p2, p3, ps);
});
return G__3004;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2975.call(this,p1);
case  2 :
return every_pred__2976.call(this,p1,p2);
case  3 :
return every_pred__2977.call(this,p1,p2,p3);
default:
return every_pred__2978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2978.cljs$lang$applyTo;
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
var some_fn__3053 = (function (p){
return (function() {
var sp1 = null;
var sp1__3058 = (function (){
return null;
});
var sp1__3059 = (function (x){
return p.call(null,x);
});
var sp1__3060 = (function (x,y){
var or__3548__auto____3015 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3015))
{return or__3548__auto____3015;
} else
{return p.call(null,y);
}
});
var sp1__3061 = (function (x,y,z){
var or__3548__auto____3016 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3016))
{return or__3548__auto____3016;
} else
{var or__3548__auto____3017 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3017))
{return or__3548__auto____3017;
} else
{return p.call(null,z);
}
}
});
var sp1__3062 = (function() { 
var G__3064__delegate = function (x,y,z,args){
var or__3548__auto____3018 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3018))
{return or__3548__auto____3018;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3064__delegate.call(this, x, y, z, args);
};
G__3064.cljs$lang$maxFixedArity = 3;
G__3064.cljs$lang$applyTo = (function (arglist__3065){
var x = cljs.core.first(arglist__3065);
var y = cljs.core.first(cljs.core.next(arglist__3065));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3065)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3065)));
return G__3064__delegate.call(this, x, y, z, args);
});
return G__3064;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3058.call(this);
case  1 :
return sp1__3059.call(this,x);
case  2 :
return sp1__3060.call(this,x,y);
case  3 :
return sp1__3061.call(this,x,y,z);
default:
return sp1__3062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3062.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3054 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3066 = (function (){
return null;
});
var sp2__3067 = (function (x){
var or__3548__auto____3019 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3019))
{return or__3548__auto____3019;
} else
{return p2.call(null,x);
}
});
var sp2__3068 = (function (x,y){
var or__3548__auto____3020 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3020))
{return or__3548__auto____3020;
} else
{var or__3548__auto____3021 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3021))
{return or__3548__auto____3021;
} else
{var or__3548__auto____3022 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3022))
{return or__3548__auto____3022;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3069 = (function (x,y,z){
var or__3548__auto____3023 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3023))
{return or__3548__auto____3023;
} else
{var or__3548__auto____3024 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3024))
{return or__3548__auto____3024;
} else
{var or__3548__auto____3025 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3025))
{return or__3548__auto____3025;
} else
{var or__3548__auto____3026 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3026))
{return or__3548__auto____3026;
} else
{var or__3548__auto____3027 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3027))
{return or__3548__auto____3027;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3070 = (function() { 
var G__3072__delegate = function (x,y,z,args){
var or__3548__auto____3028 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3028))
{return or__3548__auto____3028;
} else
{return cljs.core.some.call(null,(function (p1__2931_SHARP_){
var or__3548__auto____3029 = p1.call(null,p1__2931_SHARP_);

if(cljs.core.truth_(or__3548__auto____3029))
{return or__3548__auto____3029;
} else
{return p2.call(null,p1__2931_SHARP_);
}
}),args);
}
};
var G__3072 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3072__delegate.call(this, x, y, z, args);
};
G__3072.cljs$lang$maxFixedArity = 3;
G__3072.cljs$lang$applyTo = (function (arglist__3073){
var x = cljs.core.first(arglist__3073);
var y = cljs.core.first(cljs.core.next(arglist__3073));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3073)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3073)));
return G__3072__delegate.call(this, x, y, z, args);
});
return G__3072;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3066.call(this);
case  1 :
return sp2__3067.call(this,x);
case  2 :
return sp2__3068.call(this,x,y);
case  3 :
return sp2__3069.call(this,x,y,z);
default:
return sp2__3070.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3070.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3055 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3074 = (function (){
return null;
});
var sp3__3075 = (function (x){
var or__3548__auto____3030 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3030))
{return or__3548__auto____3030;
} else
{var or__3548__auto____3031 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3031))
{return or__3548__auto____3031;
} else
{return p3.call(null,x);
}
}
});
var sp3__3076 = (function (x,y){
var or__3548__auto____3032 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3032))
{return or__3548__auto____3032;
} else
{var or__3548__auto____3033 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
} else
{var or__3548__auto____3034 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3034))
{return or__3548__auto____3034;
} else
{var or__3548__auto____3035 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3035))
{return or__3548__auto____3035;
} else
{var or__3548__auto____3036 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3036))
{return or__3548__auto____3036;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3077 = (function (x,y,z){
var or__3548__auto____3037 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3037))
{return or__3548__auto____3037;
} else
{var or__3548__auto____3038 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3038))
{return or__3548__auto____3038;
} else
{var or__3548__auto____3039 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3039))
{return or__3548__auto____3039;
} else
{var or__3548__auto____3040 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3040))
{return or__3548__auto____3040;
} else
{var or__3548__auto____3041 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3041))
{return or__3548__auto____3041;
} else
{var or__3548__auto____3042 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3042))
{return or__3548__auto____3042;
} else
{var or__3548__auto____3043 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3043))
{return or__3548__auto____3043;
} else
{var or__3548__auto____3044 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3044))
{return or__3548__auto____3044;
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
var sp3__3078 = (function() { 
var G__3080__delegate = function (x,y,z,args){
var or__3548__auto____3045 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3045))
{return or__3548__auto____3045;
} else
{return cljs.core.some.call(null,(function (p1__2932_SHARP_){
var or__3548__auto____3046 = p1.call(null,p1__2932_SHARP_);

if(cljs.core.truth_(or__3548__auto____3046))
{return or__3548__auto____3046;
} else
{var or__3548__auto____3047 = p2.call(null,p1__2932_SHARP_);

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
} else
{return p3.call(null,p1__2932_SHARP_);
}
}
}),args);
}
};
var G__3080 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3080__delegate.call(this, x, y, z, args);
};
G__3080.cljs$lang$maxFixedArity = 3;
G__3080.cljs$lang$applyTo = (function (arglist__3081){
var x = cljs.core.first(arglist__3081);
var y = cljs.core.first(cljs.core.next(arglist__3081));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3081)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3081)));
return G__3080__delegate.call(this, x, y, z, args);
});
return G__3080;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3074.call(this);
case  1 :
return sp3__3075.call(this,x);
case  2 :
return sp3__3076.call(this,x,y);
case  3 :
return sp3__3077.call(this,x,y,z);
default:
return sp3__3078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3078.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3056 = (function() { 
var G__3082__delegate = function (p1,p2,p3,ps){
var ps__3048 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3083 = (function (){
return null;
});
var spn__3084 = (function (x){
return cljs.core.some.call(null,(function (p1__2933_SHARP_){
return p1__2933_SHARP_.call(null,x);
}),ps__3048);
});
var spn__3085 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2934_SHARP_){
var or__3548__auto____3049 = p1__2934_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3049))
{return or__3548__auto____3049;
} else
{return p1__2934_SHARP_.call(null,y);
}
}),ps__3048);
});
var spn__3086 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2935_SHARP_){
var or__3548__auto____3050 = p1__2935_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3050))
{return or__3548__auto____3050;
} else
{var or__3548__auto____3051 = p1__2935_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{return p1__2935_SHARP_.call(null,z);
}
}
}),ps__3048);
});
var spn__3087 = (function() { 
var G__3089__delegate = function (x,y,z,args){
var or__3548__auto____3052 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3052))
{return or__3548__auto____3052;
} else
{return cljs.core.some.call(null,(function (p1__2936_SHARP_){
return cljs.core.some.call(null,p1__2936_SHARP_,args);
}),ps__3048);
}
};
var G__3089 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3089__delegate.call(this, x, y, z, args);
};
G__3089.cljs$lang$maxFixedArity = 3;
G__3089.cljs$lang$applyTo = (function (arglist__3090){
var x = cljs.core.first(arglist__3090);
var y = cljs.core.first(cljs.core.next(arglist__3090));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3090)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3090)));
return G__3089__delegate.call(this, x, y, z, args);
});
return G__3089;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3083.call(this);
case  1 :
return spn__3084.call(this,x);
case  2 :
return spn__3085.call(this,x,y);
case  3 :
return spn__3086.call(this,x,y,z);
default:
return spn__3087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3087.cljs$lang$applyTo;
return spn;
})()
};
var G__3082 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3082__delegate.call(this, p1, p2, p3, ps);
};
G__3082.cljs$lang$maxFixedArity = 3;
G__3082.cljs$lang$applyTo = (function (arglist__3091){
var p1 = cljs.core.first(arglist__3091);
var p2 = cljs.core.first(cljs.core.next(arglist__3091));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3091)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3091)));
return G__3082__delegate.call(this, p1, p2, p3, ps);
});
return G__3082;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3053.call(this,p1);
case  2 :
return some_fn__3054.call(this,p1,p2);
case  3 :
return some_fn__3055.call(this,p1,p2,p3);
default:
return some_fn__3056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3056.cljs$lang$applyTo;
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
var map__3104 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3092))
{var s__3093 = temp__3698__auto____3092;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3093)),map.call(null,f,cljs.core.rest.call(null,s__3093)));
} else
{return null;
}
})));
});
var map__3105 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3094 = cljs.core.seq.call(null,c1);
var s2__3095 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3096 = s1__3094;

if(cljs.core.truth_(and__3546__auto____3096))
{return s2__3095;
} else
{return and__3546__auto____3096;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3094),cljs.core.first.call(null,s2__3095)),map.call(null,f,cljs.core.rest.call(null,s1__3094),cljs.core.rest.call(null,s2__3095)));
} else
{return null;
}
})));
});
var map__3106 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3097 = cljs.core.seq.call(null,c1);
var s2__3098 = cljs.core.seq.call(null,c2);
var s3__3099 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3100 = s1__3097;

if(cljs.core.truth_(and__3546__auto____3100))
{var and__3546__auto____3101 = s2__3098;

if(cljs.core.truth_(and__3546__auto____3101))
{return s3__3099;
} else
{return and__3546__auto____3101;
}
} else
{return and__3546__auto____3100;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3097),cljs.core.first.call(null,s2__3098),cljs.core.first.call(null,s3__3099)),map.call(null,f,cljs.core.rest.call(null,s1__3097),cljs.core.rest.call(null,s2__3098),cljs.core.rest.call(null,s3__3099)));
} else
{return null;
}
})));
});
var map__3107 = (function() { 
var G__3109__delegate = function (f,c1,c2,c3,colls){
var step__3103 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3102 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3102)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3102),step.call(null,map.call(null,cljs.core.rest,ss__3102)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3014_SHARP_){
return cljs.core.apply.call(null,f,p1__3014_SHARP_);
}),step__3103.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3109 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3109__delegate.call(this, f, c1, c2, c3, colls);
};
G__3109.cljs$lang$maxFixedArity = 4;
G__3109.cljs$lang$applyTo = (function (arglist__3110){
var f = cljs.core.first(arglist__3110);
var c1 = cljs.core.first(cljs.core.next(arglist__3110));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3110)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3110))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3110))));
return G__3109__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3109;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3104.call(this,f,c1);
case  3 :
return map__3105.call(this,f,c1,c2);
case  4 :
return map__3106.call(this,f,c1,c2,c3);
default:
return map__3107.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3107.cljs$lang$applyTo;
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
{var temp__3698__auto____3111 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3111))
{var s__3112 = temp__3698__auto____3111;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3112),take.call(null,(n - 1),cljs.core.rest.call(null,s__3112)));
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
var step__3115 = (function (n,coll){
while(true){
var s__3113 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3114 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3114))
{return s__3113;
} else
{return and__3546__auto____3114;
}
})()))
{{
var G__3116 = (n - 1);
var G__3117 = cljs.core.rest.call(null,s__3113);
n = G__3116;
coll = G__3117;
continue;
}
} else
{return s__3113;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3115.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3118 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3119 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3118.call(this,n);
case  2 :
return drop_last__3119.call(this,n,s);
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
var s__3121 = cljs.core.seq.call(null,coll);
var lead__3122 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3122))
{{
var G__3123 = cljs.core.next.call(null,s__3121);
var G__3124 = cljs.core.next.call(null,lead__3122);
s__3121 = G__3123;
lead__3122 = G__3124;
continue;
}
} else
{return s__3121;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3127 = (function (pred,coll){
while(true){
var s__3125 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3126 = s__3125;

if(cljs.core.truth_(and__3546__auto____3126))
{return pred.call(null,cljs.core.first.call(null,s__3125));
} else
{return and__3546__auto____3126;
}
})()))
{{
var G__3128 = pred;
var G__3129 = cljs.core.rest.call(null,s__3125);
pred = G__3128;
coll = G__3129;
continue;
}
} else
{return s__3125;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3127.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3130 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3130))
{var s__3131 = temp__3698__auto____3130;

return cljs.core.concat.call(null,s__3131,cycle.call(null,s__3131));
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
var repeat__3132 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3133 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3132.call(this,n);
case  2 :
return repeat__3133.call(this,n,x);
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
var repeatedly__3135 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3136 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3135.call(this,n);
case  2 :
return repeatedly__3136.call(this,n,f);
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
var interleave__3142 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3138 = cljs.core.seq.call(null,c1);
var s2__3139 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3140 = s1__3138;

if(cljs.core.truth_(and__3546__auto____3140))
{return s2__3139;
} else
{return and__3546__auto____3140;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3138),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3139),interleave.call(null,cljs.core.rest.call(null,s1__3138),cljs.core.rest.call(null,s2__3139))));
} else
{return null;
}
})));
});
var interleave__3143 = (function() { 
var G__3145__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3141 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3141)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3141),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3141)));
} else
{return null;
}
})));
};
var G__3145 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3145__delegate.call(this, c1, c2, colls);
};
G__3145.cljs$lang$maxFixedArity = 2;
G__3145.cljs$lang$applyTo = (function (arglist__3146){
var c1 = cljs.core.first(arglist__3146);
var c2 = cljs.core.first(cljs.core.next(arglist__3146));
var colls = cljs.core.rest(cljs.core.next(arglist__3146));
return G__3145__delegate.call(this, c1, c2, colls);
});
return G__3145;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3142.call(this,c1,c2);
default:
return interleave__3143.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3143.cljs$lang$applyTo;
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
var cat__3149 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3147))
{var coll__3148 = temp__3695__auto____3147;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3148),cat.call(null,cljs.core.rest.call(null,coll__3148),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3149.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3150 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3151 = (function() { 
var G__3153__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3153 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3153__delegate.call(this, f, coll, colls);
};
G__3153.cljs$lang$maxFixedArity = 2;
G__3153.cljs$lang$applyTo = (function (arglist__3154){
var f = cljs.core.first(arglist__3154);
var coll = cljs.core.first(cljs.core.next(arglist__3154));
var colls = cljs.core.rest(cljs.core.next(arglist__3154));
return G__3153__delegate.call(this, f, coll, colls);
});
return G__3153;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3150.call(this,f,coll);
default:
return mapcat__3151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3151.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3155))
{var s__3156 = temp__3698__auto____3155;

var f__3157 = cljs.core.first.call(null,s__3156);
var r__3158 = cljs.core.rest.call(null,s__3156);

if(cljs.core.truth_(pred.call(null,f__3157)))
{return cljs.core.cons.call(null,f__3157,filter.call(null,pred,r__3158));
} else
{return filter.call(null,pred,r__3158);
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
var walk__3160 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3160.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3159_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3159_SHARP_));
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
var partition__3167 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3168 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3161 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3161))
{var s__3162 = temp__3698__auto____3161;

var p__3163 = cljs.core.take.call(null,n,s__3162);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3163))))
{return cljs.core.cons.call(null,p__3163,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3162)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3169 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3164 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3164))
{var s__3165 = temp__3698__auto____3164;

var p__3166 = cljs.core.take.call(null,n,s__3165);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3166))))
{return cljs.core.cons.call(null,p__3166,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3165)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3166,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3167.call(this,n,step);
case  3 :
return partition__3168.call(this,n,step,pad);
case  4 :
return partition__3169.call(this,n,step,pad,coll);
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
var get_in__3175 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3176 = (function (m,ks,not_found){
var sentinel__3171 = cljs.core.lookup_sentinel;
var m__3172 = m;
var ks__3173 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3173))
{var m__3174 = cljs.core.get.call(null,m__3172,cljs.core.first.call(null,ks__3173),sentinel__3171);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3171,m__3174)))
{return not_found;
} else
{{
var G__3178 = sentinel__3171;
var G__3179 = m__3174;
var G__3180 = cljs.core.next.call(null,ks__3173);
sentinel__3171 = G__3178;
m__3172 = G__3179;
ks__3173 = G__3180;
continue;
}
}
} else
{return m__3172;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3175.call(this,m,ks);
case  3 :
return get_in__3176.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3181,v){
var vec__3182__3183 = p__3181;
var k__3184 = cljs.core.nth.call(null,vec__3182__3183,0,null);
var ks__3185 = cljs.core.nthnext.call(null,vec__3182__3183,1);

if(cljs.core.truth_(ks__3185))
{return cljs.core.assoc.call(null,m,k__3184,assoc_in.call(null,cljs.core.get.call(null,m,k__3184),ks__3185,v));
} else
{return cljs.core.assoc.call(null,m,k__3184,v);
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
var update_in__delegate = function (m,p__3186,f,args){
var vec__3187__3188 = p__3186;
var k__3189 = cljs.core.nth.call(null,vec__3187__3188,0,null);
var ks__3190 = cljs.core.nthnext.call(null,vec__3187__3188,1);

if(cljs.core.truth_(ks__3190))
{return cljs.core.assoc.call(null,m,k__3189,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3189),ks__3190,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3189,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3189),args));
}
};
var update_in = function (m,p__3186,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3186, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3191){
var m = cljs.core.first(arglist__3191);
var p__3186 = cljs.core.first(cljs.core.next(arglist__3191));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3191)));
return update_in__delegate.call(this, m, p__3186, f, args);
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
var this__3192 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3193 = this;
var new_array__3194 = cljs.core.aclone.call(null,this__3193.array);

new_array__3194.push(o);
return (new cljs.core.Vector(this__3193.meta,new_array__3194));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3195 = this;
if(cljs.core.truth_((this__3195.array.length > 0)))
{var vector_seq__3196 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3195.array.length)))
{return cljs.core.cons.call(null,(this__3195.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3196.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3197 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3198 = this;
var count__3199 = this__3198.array.length;

if(cljs.core.truth_((count__3199 > 0)))
{return (this__3198.array[(count__3199 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3200 = this;
if(cljs.core.truth_((this__3200.array.length > 0)))
{var new_array__3201 = cljs.core.aclone.call(null,this__3200.array);

new_array__3201.pop();
return (new cljs.core.Vector(this__3200.meta,new_array__3201));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3202 = this;
return (new cljs.core.Vector(meta,this__3202.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3203 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3203.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3217 = null;
var G__3217__3218 = (function (coll,n){
var this__3204 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3205 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3205))
{return (n < this__3204.array.length);
} else
{return and__3546__auto____3205;
}
})()))
{return (this__3204.array[n]);
} else
{return null;
}
});
var G__3217__3219 = (function (coll,n,not_found){
var this__3206 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3207 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3207))
{return (n < this__3206.array.length);
} else
{return and__3546__auto____3207;
}
})()))
{return (this__3206.array[n]);
} else
{return not_found;
}
});
G__3217 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3217__3218.call(this,coll,n);
case  3 :
return G__3217__3219.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3217;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3208 = this;
return this__3208.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3221 = null;
var G__3221__3222 = (function (v,f){
var this__3209 = this;
return cljs.core.ci_reduce.call(null,this__3209.array,f);
});
var G__3221__3223 = (function (v,f,start){
var this__3210 = this;
return cljs.core.ci_reduce.call(null,this__3210.array,f,start);
});
G__3221 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3221__3222.call(this,v,f);
case  3 :
return G__3221__3223.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3221;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3211 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3212 = this;
return this__3212.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3213 = this;
var new_array__3214 = cljs.core.aclone.call(null,this__3213.array);

(new_array__3214[k] = v);
return (new cljs.core.Vector(this__3213.meta,new_array__3214));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3225 = null;
var G__3225__3226 = (function (coll,k){
var this__3215 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3225__3227 = (function (coll,k,not_found){
var this__3216 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3225 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3225__3226.call(this,coll,k);
case  3 :
return G__3225__3227.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3225;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3229 = null;
var G__3229__3230 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3229__3231 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3229 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3229__3230.call(this,_,k);
case  3 :
return G__3229__3231.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3229;
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
vector.cljs$lang$applyTo = (function (arglist__3233){
var args = cljs.core.seq( arglist__3233 );;
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
var this__3234 = this;
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
var len__3235 = array.length;

var i__3236 = 0;

while(true){
if(cljs.core.truth_((i__3236 < len__3235)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3236]))))
{return i__3236;
} else
{{
var G__3237 = (i__3236 + incr);
i__3236 = G__3237;
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
var obj_map_contains_key_QMARK___3239 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3240 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3238 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3238))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3238;
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
return obj_map_contains_key_QMARK___3239.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3240.call(this,k,strobj,true_val,false_val);
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
var this__3243 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3244 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3245 = this;
if(cljs.core.truth_((this__3245.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3242_SHARP_){
return cljs.core.vector.call(null,p1__3242_SHARP_,(this__3245.strobj[p1__3242_SHARP_]));
}),this__3245.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3246 = this;
return (new cljs.core.ObjMap(meta,this__3246.keys,this__3246.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3247 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3248 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3248))
{return this__3247.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3248;
}
})()))
{var new_keys__3249 = cljs.core.aclone.call(null,this__3247.keys);
var new_strobj__3250 = goog.object.clone.call(null,this__3247.strobj);

new_keys__3249.splice(cljs.core.scan_array.call(null,1,k,new_keys__3249),1);
cljs.core.js_delete.call(null,new_strobj__3250,k);
return (new cljs.core.ObjMap(this__3247.meta,new_keys__3249,new_strobj__3250));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3251 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3251.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3252 = this;
return this__3252.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3253 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3254 = this;
return this__3254.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3255 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3256 = goog.object.clone.call(null,this__3255.strobj);
var overwrite_QMARK___3257 = new_strobj__3256.hasOwnProperty(k);

(new_strobj__3256[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3257))
{return (new cljs.core.ObjMap(this__3255.meta,this__3255.keys,new_strobj__3256));
} else
{var new_keys__3258 = cljs.core.aclone.call(null,this__3255.keys);

new_keys__3258.push(k);
return (new cljs.core.ObjMap(this__3255.meta,new_keys__3258,new_strobj__3256));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3255.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3259 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3259.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3262 = null;
var G__3262__3263 = (function (coll,k){
var this__3260 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3262__3264 = (function (coll,k,not_found){
var this__3261 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3261.strobj,(this__3261.strobj[k]),not_found);
});
G__3262 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3262__3263.call(this,coll,k);
case  3 :
return G__3262__3264.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3262;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3267 = null;
var G__3267__3268 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3267__3269 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3267 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3267__3268.call(this,_,k);
case  3 :
return G__3267__3269.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3267;
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
var this__3271 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3272 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3273 = this;
if(cljs.core.truth_((this__3273.count > 0)))
{var hashes__3274 = cljs.core.js_keys.call(null,this__3273.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3266_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3273.hashobj[p1__3266_SHARP_])));
}),hashes__3274);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3275 = this;
return (new cljs.core.HashMap(meta,this__3275.count,this__3275.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3276 = this;
var h__3277 = cljs.core.hash.call(null,k);
var bucket__3278 = (this__3276.hashobj[h__3277]);
var i__3279 = (cljs.core.truth_(bucket__3278)?cljs.core.scan_array.call(null,2,k,bucket__3278):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3279)))
{return coll;
} else
{var new_hashobj__3280 = goog.object.clone.call(null,this__3276.hashobj);

if(cljs.core.truth_((3 > bucket__3278.length)))
{cljs.core.js_delete.call(null,new_hashobj__3280,h__3277);
} else
{var new_bucket__3281 = cljs.core.aclone.call(null,bucket__3278);

new_bucket__3281.splice(i__3279,2);
(new_hashobj__3280[h__3277] = new_bucket__3281);
}
return (new cljs.core.HashMap(this__3276.meta,(this__3276.count - 1),new_hashobj__3280));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3282 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3282.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3283 = this;
return this__3283.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3284 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3285 = this;
return this__3285.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3286 = this;
var h__3287 = cljs.core.hash.call(null,k);
var bucket__3288 = (this__3286.hashobj[h__3287]);

if(cljs.core.truth_(bucket__3288))
{var new_bucket__3289 = cljs.core.aclone.call(null,bucket__3288);
var new_hashobj__3290 = goog.object.clone.call(null,this__3286.hashobj);

(new_hashobj__3290[h__3287] = new_bucket__3289);
var temp__3695__auto____3291 = cljs.core.scan_array.call(null,2,k,new_bucket__3289);

if(cljs.core.truth_(temp__3695__auto____3291))
{var i__3292 = temp__3695__auto____3291;

(new_bucket__3289[(i__3292 + 1)] = v);
return (new cljs.core.HashMap(this__3286.meta,this__3286.count,new_hashobj__3290));
} else
{new_bucket__3289.push(k,v);
return (new cljs.core.HashMap(this__3286.meta,(this__3286.count + 1),new_hashobj__3290));
}
} else
{var new_hashobj__3293 = goog.object.clone.call(null,this__3286.hashobj);

(new_hashobj__3293[h__3287] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3286.meta,(this__3286.count + 1),new_hashobj__3293));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3294 = this;
var bucket__3295 = (this__3294.hashobj[cljs.core.hash.call(null,k)]);
var i__3296 = (cljs.core.truth_(bucket__3295)?cljs.core.scan_array.call(null,2,k,bucket__3295):null);

if(cljs.core.truth_(i__3296))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3301 = null;
var G__3301__3302 = (function (coll,k){
var this__3297 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3301__3303 = (function (coll,k,not_found){
var this__3298 = this;
var bucket__3299 = (this__3298.hashobj[cljs.core.hash.call(null,k)]);
var i__3300 = (cljs.core.truth_(bucket__3299)?cljs.core.scan_array.call(null,2,k,bucket__3299):null);

if(cljs.core.truth_(i__3300))
{return (bucket__3299[(i__3300 + 1)]);
} else
{return not_found;
}
});
G__3301 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3301__3302.call(this,coll,k);
case  3 :
return G__3301__3303.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3301;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3305 = ks.length;

var i__3306 = 0;
var out__3307 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3306 < len__3305)))
{{
var G__3308 = (i__3306 + 1);
var G__3309 = cljs.core.assoc.call(null,out__3307,(ks[i__3306]),(vs[i__3306]));
i__3306 = G__3308;
out__3307 = G__3309;
continue;
}
} else
{return out__3307;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3310 = null;
var G__3310__3311 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3310__3312 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3310 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3310__3311.call(this,_,k);
case  3 :
return G__3310__3312.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3310;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3314 = cljs.core.seq.call(null,keyvals);
var out__3315 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3314))
{{
var G__3316 = cljs.core.nnext.call(null,in$__3314);
var G__3317 = cljs.core.assoc.call(null,out__3315,cljs.core.first.call(null,in$__3314),cljs.core.second.call(null,in$__3314));
in$__3314 = G__3316;
out__3315 = G__3317;
continue;
}
} else
{return out__3315;
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
hash_map.cljs$lang$applyTo = (function (arglist__3318){
var keyvals = cljs.core.seq( arglist__3318 );;
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
{return cljs.core.reduce.call(null,(function (p1__3319_SHARP_,p2__3320_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3321 = p1__3319_SHARP_;

if(cljs.core.truth_(or__3548__auto____3321))
{return or__3548__auto____3321;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3320_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3322){
var maps = cljs.core.seq( arglist__3322 );;
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
{var merge_entry__3325 = (function (m,e){
var k__3323 = cljs.core.first.call(null,e);
var v__3324 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3323)))
{return cljs.core.assoc.call(null,m,k__3323,f.call(null,cljs.core.get.call(null,m,k__3323),v__3324));
} else
{return cljs.core.assoc.call(null,m,k__3323,v__3324);
}
});
var merge2__3327 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3325,(function (){var or__3548__auto____3326 = m1;

if(cljs.core.truth_(or__3548__auto____3326))
{return or__3548__auto____3326;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3327,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3328){
var f = cljs.core.first(arglist__3328);
var maps = cljs.core.rest(arglist__3328);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3330 = cljs.core.ObjMap.fromObject([],{});
var keys__3331 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3331))
{var key__3332 = cljs.core.first.call(null,keys__3331);
var entry__3333 = cljs.core.get.call(null,map,key__3332);

{
var G__3334 = (cljs.core.truth_(entry__3333)?cljs.core.assoc.call(null,ret__3330,key__3332,entry__3333):ret__3330);
var G__3335 = cljs.core.next.call(null,keys__3331);
ret__3330 = G__3334;
keys__3331 = G__3335;
continue;
}
} else
{return ret__3330;
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
var this__3336 = this;
return (new cljs.core.Set(this__3336.meta,cljs.core.dissoc.call(null,this__3336.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3337 = this;
var and__3546__auto____3338 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3338))
{var and__3546__auto____3339 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3339))
{return cljs.core.every_QMARK_.call(null,(function (p1__3329_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3329_SHARP_);
}),other);
} else
{return and__3546__auto____3339;
}
} else
{return and__3546__auto____3338;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3340 = this;
return (new cljs.core.Set(this__3340.meta,cljs.core.assoc.call(null,this__3340.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3341 = this;
return cljs.core.keys.call(null,this__3341.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3342 = this;
return (new cljs.core.Set(meta,this__3342.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3343 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3343.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3344 = this;
return this__3344.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3345 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3346 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3349 = null;
var G__3349__3350 = (function (coll,v){
var this__3347 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3349__3351 = (function (coll,v,not_found){
var this__3348 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3348.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3349 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3349__3350.call(this,coll,v);
case  3 :
return G__3349__3351.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3349;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3353 = null;
var G__3353__3354 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3353__3355 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3353 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3353__3354.call(this,_,k);
case  3 :
return G__3353__3355.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3353;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3358 = cljs.core.seq.call(null,coll);
var out__3359 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3358))))
{{
var G__3360 = cljs.core.rest.call(null,in$__3358);
var G__3361 = cljs.core.conj.call(null,out__3359,cljs.core.first.call(null,in$__3358));
in$__3358 = G__3360;
out__3359 = G__3361;
continue;
}
} else
{return out__3359;
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
{var n__3362 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3363 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3363))
{var e__3364 = temp__3695__auto____3363;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3364));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3362,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3357_SHARP_){
var temp__3695__auto____3365 = cljs.core.find.call(null,smap,p1__3357_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3365))
{var e__3366 = temp__3695__auto____3365;

return cljs.core.second.call(null,e__3366);
} else
{return p1__3357_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3374 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3367,seen){
while(true){
var vec__3368__3369 = p__3367;
var f__3370 = cljs.core.nth.call(null,vec__3368__3369,0,null);
var xs__3371 = vec__3368__3369;

var temp__3698__auto____3372 = cljs.core.seq.call(null,xs__3371);

if(cljs.core.truth_(temp__3698__auto____3372))
{var s__3373 = temp__3698__auto____3372;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3370)))
{{
var G__3375 = cljs.core.rest.call(null,s__3373);
var G__3376 = seen;
p__3367 = G__3375;
seen = G__3376;
continue;
}
} else
{return cljs.core.cons.call(null,f__3370,step.call(null,cljs.core.rest.call(null,s__3373),cljs.core.conj.call(null,seen,f__3370)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3374.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3377 = cljs.core.Vector.fromArray([]);
var s__3378 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3378)))
{{
var G__3379 = cljs.core.conj.call(null,ret__3377,cljs.core.first.call(null,s__3378));
var G__3380 = cljs.core.next.call(null,s__3378);
ret__3377 = G__3379;
s__3378 = G__3380;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3377);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3381 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3381))
{return or__3548__auto____3381;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3382 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3382 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3382 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3383 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3383))
{return or__3548__auto____3383;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3384 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3384 > -1)))
{return cljs.core.subs.call(null,x,2,i__3384);
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
var map__3387 = cljs.core.ObjMap.fromObject([],{});
var ks__3388 = cljs.core.seq.call(null,keys);
var vs__3389 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3390 = ks__3388;

if(cljs.core.truth_(and__3546__auto____3390))
{return vs__3389;
} else
{return and__3546__auto____3390;
}
})()))
{{
var G__3391 = cljs.core.assoc.call(null,map__3387,cljs.core.first.call(null,ks__3388),cljs.core.first.call(null,vs__3389));
var G__3392 = cljs.core.next.call(null,ks__3388);
var G__3393 = cljs.core.next.call(null,vs__3389);
map__3387 = G__3391;
ks__3388 = G__3392;
vs__3389 = G__3393;
continue;
}
} else
{return map__3387;
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
var max_key__3396 = (function (k,x){
return x;
});
var max_key__3397 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3398 = (function() { 
var G__3400__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3385_SHARP_,p2__3386_SHARP_){
return max_key.call(null,k,p1__3385_SHARP_,p2__3386_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3400 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3400__delegate.call(this, k, x, y, more);
};
G__3400.cljs$lang$maxFixedArity = 3;
G__3400.cljs$lang$applyTo = (function (arglist__3401){
var k = cljs.core.first(arglist__3401);
var x = cljs.core.first(cljs.core.next(arglist__3401));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3401)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3401)));
return G__3400__delegate.call(this, k, x, y, more);
});
return G__3400;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3396.call(this,k,x);
case  3 :
return max_key__3397.call(this,k,x,y);
default:
return max_key__3398.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3398.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3402 = (function (k,x){
return x;
});
var min_key__3403 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3404 = (function() { 
var G__3406__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3394_SHARP_,p2__3395_SHARP_){
return min_key.call(null,k,p1__3394_SHARP_,p2__3395_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3406 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3406__delegate.call(this, k, x, y, more);
};
G__3406.cljs$lang$maxFixedArity = 3;
G__3406.cljs$lang$applyTo = (function (arglist__3407){
var k = cljs.core.first(arglist__3407);
var x = cljs.core.first(cljs.core.next(arglist__3407));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3407)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3407)));
return G__3406__delegate.call(this, k, x, y, more);
});
return G__3406;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3402.call(this,k,x);
case  3 :
return min_key__3403.call(this,k,x,y);
default:
return min_key__3404.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3404.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3410 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3411 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3408 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3408))
{var s__3409 = temp__3698__auto____3408;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3409),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3409)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3410.call(this,n,step);
case  3 :
return partition_all__3411.call(this,n,step,coll);
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
var temp__3698__auto____3413 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3413))
{var s__3414 = temp__3698__auto____3413;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3414))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3414),take_while.call(null,pred,cljs.core.rest.call(null,s__3414)));
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
var this__3415 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3416 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3417 = this;
return this__3417.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3418 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3418.meta,(this__3418.start + this__3418.step),this__3418.end,this__3418.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3419 = this;
var comp__3420 = (cljs.core.truth_((this__3419.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3420.call(null,this__3419.start,this__3419.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3421 = this;
return (new cljs.core.Range(meta,this__3421.start,this__3421.end,this__3421.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3422 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3422.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3432 = null;
var G__3432__3433 = (function (rng,n){
var this__3423 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3423.start + (n * this__3423.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3424 = (this__3423.start > this__3423.end);

if(cljs.core.truth_(and__3546__auto____3424))
{return cljs.core._EQ_.call(null,this__3423.step,0);
} else
{return and__3546__auto____3424;
}
})()))
{return this__3423.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3432__3434 = (function (rng,n,not_found){
var this__3425 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3425.start + (n * this__3425.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3426 = (this__3425.start > this__3425.end);

if(cljs.core.truth_(and__3546__auto____3426))
{return cljs.core._EQ_.call(null,this__3425.step,0);
} else
{return and__3546__auto____3426;
}
})()))
{return this__3425.start;
} else
{return not_found;
}
}
});
G__3432 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3432__3433.call(this,rng,n);
case  3 :
return G__3432__3434.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3432;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3427 = this;
return this__3427.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3436 = null;
var G__3436__3437 = (function (rng,f){
var this__3428 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3436__3438 = (function (rng,f,s){
var this__3429 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3436 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3436__3437.call(this,rng,f);
case  3 :
return G__3436__3438.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3436;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3430 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3431 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3431.end - this__3431.start) / this__3431.step));
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
var range__3440 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3441 = (function (end){
return range.call(null,0,end,1);
});
var range__3442 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3443 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3440.call(this);
case  1 :
return range__3441.call(this,start);
case  2 :
return range__3442.call(this,start,end);
case  3 :
return range__3443.call(this,start,end,step);
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
var temp__3698__auto____3445 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3445))
{var s__3446 = temp__3698__auto____3445;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3446),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3446)));
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
var temp__3698__auto____3448 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3448))
{var s__3449 = temp__3698__auto____3448;

var fst__3450 = cljs.core.first.call(null,s__3449);
var fv__3451 = f.call(null,fst__3450);
var run__3452 = cljs.core.cons.call(null,fst__3450,cljs.core.take_while.call(null,(function (p1__3447_SHARP_){
return cljs.core._EQ_.call(null,fv__3451,f.call(null,p1__3447_SHARP_));
}),cljs.core.next.call(null,s__3449)));

return cljs.core.cons.call(null,run__3452,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3452),s__3449))));
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
var reductions__3467 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3463 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3463))
{var s__3464 = temp__3695__auto____3463;

return reductions.call(null,f,cljs.core.first.call(null,s__3464),cljs.core.rest.call(null,s__3464));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3468 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3465 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3465))
{var s__3466 = temp__3698__auto____3465;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3466)),cljs.core.rest.call(null,s__3466));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3467.call(this,f,init);
case  3 :
return reductions__3468.call(this,f,init,coll);
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
var juxt__3471 = (function (f){
return (function() {
var G__3476 = null;
var G__3476__3477 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3476__3478 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3476__3479 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3476__3480 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3476__3481 = (function() { 
var G__3483__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3483 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3483__delegate.call(this, x, y, z, args);
};
G__3483.cljs$lang$maxFixedArity = 3;
G__3483.cljs$lang$applyTo = (function (arglist__3484){
var x = cljs.core.first(arglist__3484);
var y = cljs.core.first(cljs.core.next(arglist__3484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3484)));
return G__3483__delegate.call(this, x, y, z, args);
});
return G__3483;
})()
;
G__3476 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3476__3477.call(this);
case  1 :
return G__3476__3478.call(this,x);
case  2 :
return G__3476__3479.call(this,x,y);
case  3 :
return G__3476__3480.call(this,x,y,z);
default:
return G__3476__3481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3476.cljs$lang$maxFixedArity = 3;
G__3476.cljs$lang$applyTo = G__3476__3481.cljs$lang$applyTo;
return G__3476;
})()
});
var juxt__3472 = (function (f,g){
return (function() {
var G__3485 = null;
var G__3485__3486 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3485__3487 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3485__3488 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3485__3489 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3485__3490 = (function() { 
var G__3492__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3492 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3492__delegate.call(this, x, y, z, args);
};
G__3492.cljs$lang$maxFixedArity = 3;
G__3492.cljs$lang$applyTo = (function (arglist__3493){
var x = cljs.core.first(arglist__3493);
var y = cljs.core.first(cljs.core.next(arglist__3493));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3493)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3493)));
return G__3492__delegate.call(this, x, y, z, args);
});
return G__3492;
})()
;
G__3485 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3485__3486.call(this);
case  1 :
return G__3485__3487.call(this,x);
case  2 :
return G__3485__3488.call(this,x,y);
case  3 :
return G__3485__3489.call(this,x,y,z);
default:
return G__3485__3490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3485.cljs$lang$maxFixedArity = 3;
G__3485.cljs$lang$applyTo = G__3485__3490.cljs$lang$applyTo;
return G__3485;
})()
});
var juxt__3473 = (function (f,g,h){
return (function() {
var G__3494 = null;
var G__3494__3495 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3494__3496 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3494__3497 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3494__3498 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3494__3499 = (function() { 
var G__3501__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3501 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3501__delegate.call(this, x, y, z, args);
};
G__3501.cljs$lang$maxFixedArity = 3;
G__3501.cljs$lang$applyTo = (function (arglist__3502){
var x = cljs.core.first(arglist__3502);
var y = cljs.core.first(cljs.core.next(arglist__3502));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3502)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3502)));
return G__3501__delegate.call(this, x, y, z, args);
});
return G__3501;
})()
;
G__3494 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3494__3495.call(this);
case  1 :
return G__3494__3496.call(this,x);
case  2 :
return G__3494__3497.call(this,x,y);
case  3 :
return G__3494__3498.call(this,x,y,z);
default:
return G__3494__3499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3494.cljs$lang$maxFixedArity = 3;
G__3494.cljs$lang$applyTo = G__3494__3499.cljs$lang$applyTo;
return G__3494;
})()
});
var juxt__3474 = (function() { 
var G__3503__delegate = function (f,g,h,fs){
var fs__3470 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3504 = null;
var G__3504__3505 = (function (){
return cljs.core.reduce.call(null,(function (p1__3453_SHARP_,p2__3454_SHARP_){
return cljs.core.conj.call(null,p1__3453_SHARP_,p2__3454_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3470);
});
var G__3504__3506 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3455_SHARP_,p2__3456_SHARP_){
return cljs.core.conj.call(null,p1__3455_SHARP_,p2__3456_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3470);
});
var G__3504__3507 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3457_SHARP_,p2__3458_SHARP_){
return cljs.core.conj.call(null,p1__3457_SHARP_,p2__3458_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3470);
});
var G__3504__3508 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3459_SHARP_,p2__3460_SHARP_){
return cljs.core.conj.call(null,p1__3459_SHARP_,p2__3460_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3470);
});
var G__3504__3509 = (function() { 
var G__3511__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3461_SHARP_,p2__3462_SHARP_){
return cljs.core.conj.call(null,p1__3461_SHARP_,cljs.core.apply.call(null,p2__3462_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3470);
};
var G__3511 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3511__delegate.call(this, x, y, z, args);
};
G__3511.cljs$lang$maxFixedArity = 3;
G__3511.cljs$lang$applyTo = (function (arglist__3512){
var x = cljs.core.first(arglist__3512);
var y = cljs.core.first(cljs.core.next(arglist__3512));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3512)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3512)));
return G__3511__delegate.call(this, x, y, z, args);
});
return G__3511;
})()
;
G__3504 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3504__3505.call(this);
case  1 :
return G__3504__3506.call(this,x);
case  2 :
return G__3504__3507.call(this,x,y);
case  3 :
return G__3504__3508.call(this,x,y,z);
default:
return G__3504__3509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3504.cljs$lang$maxFixedArity = 3;
G__3504.cljs$lang$applyTo = G__3504__3509.cljs$lang$applyTo;
return G__3504;
})()
};
var G__3503 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3503__delegate.call(this, f, g, h, fs);
};
G__3503.cljs$lang$maxFixedArity = 3;
G__3503.cljs$lang$applyTo = (function (arglist__3513){
var f = cljs.core.first(arglist__3513);
var g = cljs.core.first(cljs.core.next(arglist__3513));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3513)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3513)));
return G__3503__delegate.call(this, f, g, h, fs);
});
return G__3503;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3471.call(this,f);
case  2 :
return juxt__3472.call(this,f,g);
case  3 :
return juxt__3473.call(this,f,g,h);
default:
return juxt__3474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3474.cljs$lang$applyTo;
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
var dorun__3515 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3518 = cljs.core.next.call(null,coll);
coll = G__3518;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3516 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3514 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3514))
{return (n > 0);
} else
{return and__3546__auto____3514;
}
})()))
{{
var G__3519 = (n - 1);
var G__3520 = cljs.core.next.call(null,coll);
n = G__3519;
coll = G__3520;
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
return dorun__3515.call(this,n);
case  2 :
return dorun__3516.call(this,n,coll);
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
var doall__3521 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3522 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3521.call(this,n);
case  2 :
return doall__3522.call(this,n,coll);
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
var matches__3524 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3524),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3524),1)))
{return cljs.core.first.call(null,matches__3524);
} else
{return cljs.core.vec.call(null,matches__3524);
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
var matches__3525 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3525)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3525),1)))
{return cljs.core.first.call(null,matches__3525);
} else
{return cljs.core.vec.call(null,matches__3525);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3526 = cljs.core.re_find.call(null,re,s);
var match_idx__3527 = s.search(re);
var match_str__3528 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3526))?cljs.core.first.call(null,match_data__3526):match_data__3526);
var post_match__3529 = cljs.core.subs.call(null,s,(match_idx__3527 + cljs.core.count.call(null,match_str__3528)));

if(cljs.core.truth_(match_data__3526))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3526,re_seq.call(null,re,post_match__3529));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3530_SHARP_){
return print_one.call(null,p1__3530_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3531 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3531))
{var and__3546__auto____3535 = (function (){var x__302__auto____3532 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3533 = x__302__auto____3532;

if(cljs.core.truth_(and__3546__auto____3533))
{var and__3546__auto____3534 = x__302__auto____3532.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3534))
{return cljs.core.not.call(null,x__302__auto____3532.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3534;
}
} else
{return and__3546__auto____3533;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__302__auto____3532);
}
})();

if(cljs.core.truth_(and__3546__auto____3535))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3535;
}
} else
{return and__3546__auto____3531;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__302__auto____3536 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3537 = x__302__auto____3536;

if(cljs.core.truth_(and__3546__auto____3537))
{var and__3546__auto____3538 = x__302__auto____3536.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3538))
{return cljs.core.not.call(null,x__302__auto____3536.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3538;
}
} else
{return and__3546__auto____3537;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__302__auto____3536);
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
var first_obj__3539 = cljs.core.first.call(null,objs);
var sb__3540 = (new goog.string.StringBuffer());

var G__3541__3542 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3541__3542))
{var obj__3543 = cljs.core.first.call(null,G__3541__3542);
var G__3541__3544 = G__3541__3542;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3543,first_obj__3539)))
{} else
{sb__3540.append(" ");
}
var G__3545__3546 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3543,opts));

if(cljs.core.truth_(G__3545__3546))
{var string__3547 = cljs.core.first.call(null,G__3545__3546);
var G__3545__3548 = G__3545__3546;

while(true){
sb__3540.append(string__3547);
var temp__3698__auto____3549 = cljs.core.next.call(null,G__3545__3548);

if(cljs.core.truth_(temp__3698__auto____3549))
{var G__3545__3550 = temp__3698__auto____3549;

{
var G__3553 = cljs.core.first.call(null,G__3545__3550);
var G__3554 = G__3545__3550;
string__3547 = G__3553;
G__3545__3548 = G__3554;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3551 = cljs.core.next.call(null,G__3541__3544);

if(cljs.core.truth_(temp__3698__auto____3551))
{var G__3541__3552 = temp__3698__auto____3551;

{
var G__3555 = cljs.core.first.call(null,G__3541__3552);
var G__3556 = G__3541__3552;
obj__3543 = G__3555;
G__3541__3544 = G__3556;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3540);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3557 = cljs.core.first.call(null,objs);

var G__3558__3559 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3558__3559))
{var obj__3560 = cljs.core.first.call(null,G__3558__3559);
var G__3558__3561 = G__3558__3559;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3560,first_obj__3557)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3562__3563 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3560,opts));

if(cljs.core.truth_(G__3562__3563))
{var string__3564 = cljs.core.first.call(null,G__3562__3563);
var G__3562__3565 = G__3562__3563;

while(true){
cljs.core.string_print.call(null,string__3564);
var temp__3698__auto____3566 = cljs.core.next.call(null,G__3562__3565);

if(cljs.core.truth_(temp__3698__auto____3566))
{var G__3562__3567 = temp__3698__auto____3566;

{
var G__3570 = cljs.core.first.call(null,G__3562__3567);
var G__3571 = G__3562__3567;
string__3564 = G__3570;
G__3562__3565 = G__3571;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3568 = cljs.core.next.call(null,G__3558__3561);

if(cljs.core.truth_(temp__3698__auto____3568))
{var G__3558__3569 = temp__3698__auto____3568;

{
var G__3572 = cljs.core.first.call(null,G__3558__3569);
var G__3573 = G__3558__3569;
obj__3560 = G__3572;
G__3558__3561 = G__3573;
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
pr_str.cljs$lang$applyTo = (function (arglist__3574){
var objs = cljs.core.seq( arglist__3574 );;
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
pr.cljs$lang$applyTo = (function (arglist__3575){
var objs = cljs.core.seq( arglist__3575 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3576){
var objs = cljs.core.seq( arglist__3576 );;
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
println.cljs$lang$applyTo = (function (arglist__3577){
var objs = cljs.core.seq( arglist__3577 );;
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
prn.cljs$lang$applyTo = (function (arglist__3578){
var objs = cljs.core.seq( arglist__3578 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3579 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3579,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3580 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3580))
{var nspc__3581 = temp__3698__auto____3580;

return cljs.core.str.call(null,nspc__3581,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3582 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3582))
{var nspc__3583 = temp__3698__auto____3582;

return cljs.core.str.call(null,nspc__3583,"/");
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
var pr_pair__3584 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3584,"{",", ","}",opts,coll);
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
var this__3585 = this;
var G__3586__3587 = cljs.core.seq.call(null,this__3585.watches);

if(cljs.core.truth_(G__3586__3587))
{var G__3589__3591 = cljs.core.first.call(null,G__3586__3587);
var vec__3590__3592 = G__3589__3591;
var key__3593 = cljs.core.nth.call(null,vec__3590__3592,0,null);
var f__3594 = cljs.core.nth.call(null,vec__3590__3592,1,null);
var G__3586__3595 = G__3586__3587;

var G__3589__3596 = G__3589__3591;
var G__3586__3597 = G__3586__3595;

while(true){
var vec__3598__3599 = G__3589__3596;
var key__3600 = cljs.core.nth.call(null,vec__3598__3599,0,null);
var f__3601 = cljs.core.nth.call(null,vec__3598__3599,1,null);
var G__3586__3602 = G__3586__3597;

f__3601.call(null,key__3600,this$,oldval,newval);
var temp__3698__auto____3603 = cljs.core.next.call(null,G__3586__3602);

if(cljs.core.truth_(temp__3698__auto____3603))
{var G__3586__3604 = temp__3698__auto____3603;

{
var G__3611 = cljs.core.first.call(null,G__3586__3604);
var G__3612 = G__3586__3604;
G__3589__3596 = G__3611;
G__3586__3597 = G__3612;
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
var this__3605 = this;
return this$.watches = cljs.core.assoc.call(null,this__3605.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3606 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3606.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3607 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3607.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3608 = this;
return this__3608.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3609 = this;
return this__3609.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3610 = this;
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
var atom__3619 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3620 = (function() { 
var G__3622__delegate = function (x,p__3613){
var map__3614__3615 = p__3613;
var map__3614__3616 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3614__3615))?cljs.core.apply.call(null,cljs.core.hash_map,map__3614__3615):map__3614__3615);
var validator__3617 = cljs.core.get.call(null,map__3614__3616,"﷐'validator");
var meta__3618 = cljs.core.get.call(null,map__3614__3616,"﷐'meta");

return (new cljs.core.Atom(x,meta__3618,validator__3617,null));
};
var G__3622 = function (x,var_args){
var p__3613 = null;
if (goog.isDef(var_args)) {
  p__3613 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3622__delegate.call(this, x, p__3613);
};
G__3622.cljs$lang$maxFixedArity = 1;
G__3622.cljs$lang$applyTo = (function (arglist__3623){
var x = cljs.core.first(arglist__3623);
var p__3613 = cljs.core.rest(arglist__3623);
return G__3622__delegate.call(this, x, p__3613);
});
return G__3622;
})()
;
atom = function(x,var_args){
var p__3613 = var_args;
switch(arguments.length){
case  1 :
return atom__3619.call(this,x);
default:
return atom__3620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3620.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3624 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3624))
{var validate__3625 = temp__3698__auto____3624;

if(cljs.core.truth_(validate__3625.call(null,new_value)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")));
}
} else
{}
var old_value__3626 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3626,new_value);
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
var swap_BANG___3627 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3628 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3629 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3630 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3631 = (function() { 
var G__3633__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3633 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3633__delegate.call(this, a, f, x, y, z, more);
};
G__3633.cljs$lang$maxFixedArity = 5;
G__3633.cljs$lang$applyTo = (function (arglist__3634){
var a = cljs.core.first(arglist__3634);
var f = cljs.core.first(cljs.core.next(arglist__3634));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3634)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3634))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3634)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3634)))));
return G__3633__delegate.call(this, a, f, x, y, z, more);
});
return G__3633;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3627.call(this,a,f);
case  3 :
return swap_BANG___3628.call(this,a,f,x);
case  4 :
return swap_BANG___3629.call(this,a,f,x,y);
case  5 :
return swap_BANG___3630.call(this,a,f,x,y,z);
default:
return swap_BANG___3631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3631.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3635){
var iref = cljs.core.first(arglist__3635);
var f = cljs.core.first(cljs.core.next(arglist__3635));
var args = cljs.core.rest(cljs.core.next(arglist__3635));
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
var gensym__3636 = (function (){
return gensym.call(null,"G__");
});
var gensym__3637 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3636.call(this);
case  1 :
return gensym__3637.call(this,prefix_string);
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
var this__3639 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3639.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3640 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3640.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3640.state,this__3640.f);
}
return cljs.core.deref.call(null,this__3640.state);
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
delay.cljs$lang$applyTo = (function (arglist__3641){
var body = cljs.core.seq( arglist__3641 );;
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
var map__3642__3643 = options;
var map__3642__3644 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3642__3643))?cljs.core.apply.call(null,cljs.core.hash_map,map__3642__3643):map__3642__3643);
var keywordize_keys__3645 = cljs.core.get.call(null,map__3642__3644,"﷐'keywordize-keys");
var keyfn__3646 = (cljs.core.truth_(keywordize_keys__3645)?cljs.core.keyword:cljs.core.str);
var f__3652 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__356__auto____3651 = (function iter__3647(s__3648){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3648__3649 = s__3648;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3648__3649)))
{var k__3650 = cljs.core.first.call(null,s__3648__3649);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3646.call(null,k__3650),thisfn.call(null,(x[k__3650]))]),iter__3647.call(null,cljs.core.rest.call(null,s__3648__3649)));
} else
{return null;
}
break;
}
})));
});

return iter__356__auto____3651.call(null,cljs.core.js_keys.call(null,x));
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

return f__3652.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3653){
var x = cljs.core.first(arglist__3653);
var options = cljs.core.rest(arglist__3653);
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
var mem__3654 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3658__delegate = function (args){
var temp__3695__auto____3655 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3654),args);

if(cljs.core.truth_(temp__3695__auto____3655))
{var v__3656 = temp__3695__auto____3655;

return v__3656;
} else
{var ret__3657 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3654,cljs.core.assoc,args,ret__3657);
return ret__3657;
}
};
var G__3658 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3658__delegate.call(this, args);
};
G__3658.cljs$lang$maxFixedArity = 0;
G__3658.cljs$lang$applyTo = (function (arglist__3659){
var args = cljs.core.seq( arglist__3659 );;
return G__3658__delegate.call(this, args);
});
return G__3658;
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
var trampoline__3661 = (function (f){
while(true){
var ret__3660 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3660)))
{{
var G__3664 = ret__3660;
f = G__3664;
continue;
}
} else
{return ret__3660;
}
break;
}
});
var trampoline__3662 = (function() { 
var G__3665__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3665 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3665__delegate.call(this, f, args);
};
G__3665.cljs$lang$maxFixedArity = 1;
G__3665.cljs$lang$applyTo = (function (arglist__3666){
var f = cljs.core.first(arglist__3666);
var args = cljs.core.rest(arglist__3666);
return G__3665__delegate.call(this, f, args);
});
return G__3665;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3661.call(this,f);
default:
return trampoline__3662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3662.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3667 = (function (){
return rand.call(null,1);
});
var rand__3668 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3667.call(this);
case  1 :
return rand__3668.call(this,n);
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
var k__3670 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3670,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3670,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3679 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3680 = (function (h,child,parent){
var or__3548__auto____3671 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3671))
{return or__3548__auto____3671;
} else
{var or__3548__auto____3672 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3672))
{return or__3548__auto____3672;
} else
{var and__3546__auto____3673 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3673))
{var and__3546__auto____3674 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3674))
{var and__3546__auto____3675 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3675))
{var ret__3676 = true;
var i__3677 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3678 = cljs.core.not.call(null,ret__3676);

if(cljs.core.truth_(or__3548__auto____3678))
{return or__3548__auto____3678;
} else
{return cljs.core._EQ_.call(null,i__3677,cljs.core.count.call(null,parent));
}
})()))
{return ret__3676;
} else
{{
var G__3682 = isa_QMARK_.call(null,h,child.call(null,i__3677),parent.call(null,i__3677));
var G__3683 = (i__3677 + 1);
ret__3676 = G__3682;
i__3677 = G__3683;
continue;
}
}
break;
}
} else
{return and__3546__auto____3675;
}
} else
{return and__3546__auto____3674;
}
} else
{return and__3546__auto____3673;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3679.call(this,h,child);
case  3 :
return isa_QMARK___3680.call(this,h,child,parent);
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
var parents__3684 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3685 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3684.call(this,h);
case  2 :
return parents__3685.call(this,h,tag);
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
var ancestors__3687 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3688 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3687.call(this,h);
case  2 :
return ancestors__3688.call(this,h,tag);
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
var descendants__3690 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3691 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3690.call(this,h);
case  2 :
return descendants__3691.call(this,h,tag);
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
var derive__3701 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3702 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3696 = "﷐'parents".call(null,h);
var td__3697 = "﷐'descendants".call(null,h);
var ta__3698 = "﷐'ancestors".call(null,h);
var tf__3699 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3700 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3696.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3698.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3698.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3696,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3699.call(null,"﷐'ancestors".call(null,h),tag,td__3697,parent,ta__3698),"﷐'descendants":tf__3699.call(null,"﷐'descendants".call(null,h),parent,ta__3698,tag,td__3697)});
})());

if(cljs.core.truth_(or__3548__auto____3700))
{return or__3548__auto____3700;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3701.call(this,h,tag);
case  3 :
return derive__3702.call(this,h,tag,parent);
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
var underive__3708 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3709 = (function (h,tag,parent){
var parentMap__3704 = "﷐'parents".call(null,h);
var childsParents__3705 = (cljs.core.truth_(parentMap__3704.call(null,tag))?cljs.core.disj.call(null,parentMap__3704.call(null,tag),parent):cljs.core.set([]));
var newParents__3706 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3705))?cljs.core.assoc.call(null,parentMap__3704,tag,childsParents__3705):cljs.core.dissoc.call(null,parentMap__3704,tag));
var deriv_seq__3707 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3693_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3693_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3693_SHARP_),cljs.core.second.call(null,p1__3693_SHARP_)));
}),cljs.core.seq.call(null,newParents__3706)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3704.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3694_SHARP_,p2__3695_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3694_SHARP_,p2__3695_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3707));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3708.call(this,h,tag);
case  3 :
return underive__3709.call(this,h,tag,parent);
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
var xprefs__3711 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3713 = (cljs.core.truth_((function (){var and__3546__auto____3712 = xprefs__3711;

if(cljs.core.truth_(and__3546__auto____3712))
{return xprefs__3711.call(null,y);
} else
{return and__3546__auto____3712;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3713))
{return or__3548__auto____3713;
} else
{var or__3548__auto____3715 = (function (){var ps__3714 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3714) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3714),prefer_table)))
{} else
{}
{
var G__3718 = cljs.core.rest.call(null,ps__3714);
ps__3714 = G__3718;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3715))
{return or__3548__auto____3715;
} else
{var or__3548__auto____3717 = (function (){var ps__3716 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3716) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3716),y,prefer_table)))
{} else
{}
{
var G__3719 = cljs.core.rest.call(null,ps__3716);
ps__3716 = G__3719;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3717))
{return or__3548__auto____3717;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3720 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3720))
{return or__3548__auto____3720;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3729 = cljs.core.reduce.call(null,(function (be,p__3721){
var vec__3722__3723 = p__3721;
var k__3724 = cljs.core.nth.call(null,vec__3722__3723,0,null);
var ___3725 = cljs.core.nth.call(null,vec__3722__3723,1,null);
var e__3726 = vec__3722__3723;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3724)))
{var be2__3728 = (cljs.core.truth_((function (){var or__3548__auto____3727 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3727))
{return or__3548__auto____3727;
} else
{return cljs.core.dominates.call(null,k__3724,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3726:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3728),k__3724,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3724," and ",cljs.core.first.call(null,be2__3728),", and neither is preferred")));
}
return be2__3728;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3729))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3729));
return cljs.core.second.call(null,best_entry__3729);
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
if(cljs.core.truth_((function (){var and__3546__auto____3730 = mf;

if(cljs.core.truth_(and__3546__auto____3730))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3730;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3731 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3731))
{return or__3548__auto____3731;
} else
{var or__3548__auto____3732 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3732))
{return or__3548__auto____3732;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3733 = mf;

if(cljs.core.truth_(and__3546__auto____3733))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3733;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3734 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3734))
{return or__3548__auto____3734;
} else
{var or__3548__auto____3735 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3735))
{return or__3548__auto____3735;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3736 = mf;

if(cljs.core.truth_(and__3546__auto____3736))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3736;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3737 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3737))
{return or__3548__auto____3737;
} else
{var or__3548__auto____3738 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3738))
{return or__3548__auto____3738;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3739 = mf;

if(cljs.core.truth_(and__3546__auto____3739))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3739;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3740 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3740))
{return or__3548__auto____3740;
} else
{var or__3548__auto____3741 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3741))
{return or__3548__auto____3741;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3742 = mf;

if(cljs.core.truth_(and__3546__auto____3742))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3742;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3743 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3743))
{return or__3548__auto____3743;
} else
{var or__3548__auto____3744 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3744))
{return or__3548__auto____3744;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3745 = mf;

if(cljs.core.truth_(and__3546__auto____3745))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3745;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3746 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3746))
{return or__3548__auto____3746;
} else
{var or__3548__auto____3747 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3747))
{return or__3548__auto____3747;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3748 = mf;

if(cljs.core.truth_(and__3546__auto____3748))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3748;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3749 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3749))
{return or__3548__auto____3749;
} else
{var or__3548__auto____3750 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3750))
{return or__3548__auto____3750;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3751 = mf;

if(cljs.core.truth_(and__3546__auto____3751))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3751;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3752 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3752))
{return or__3548__auto____3752;
} else
{var or__3548__auto____3753 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3753))
{return or__3548__auto____3753;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3754 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3755 = cljs.core._get_method.call(null,mf,dispatch_val__3754);

if(cljs.core.truth_(target_fn__3755))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3754)));
}
return cljs.core.apply.call(null,target_fn__3755,args);
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
var this__3756 = this;
cljs.core.swap_BANG_.call(null,this__3756.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3756.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3756.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3756.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3757 = this;
cljs.core.swap_BANG_.call(null,this__3757.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3757.method_cache,this__3757.method_table,this__3757.cached_hierarchy,this__3757.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3758 = this;
cljs.core.swap_BANG_.call(null,this__3758.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3758.method_cache,this__3758.method_table,this__3758.cached_hierarchy,this__3758.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3759 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3759.cached_hierarchy),cljs.core.deref.call(null,this__3759.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3759.method_cache,this__3759.method_table,this__3759.cached_hierarchy,this__3759.hierarchy);
}
var temp__3695__auto____3760 = cljs.core.deref.call(null,this__3759.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3760))
{var target_fn__3761 = temp__3695__auto____3760;

return target_fn__3761;
} else
{var temp__3695__auto____3762 = cljs.core.find_and_cache_best_method.call(null,this__3759.name,dispatch_val,this__3759.hierarchy,this__3759.method_table,this__3759.prefer_table,this__3759.method_cache,this__3759.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3762))
{var target_fn__3763 = temp__3695__auto____3762;

return target_fn__3763;
} else
{return cljs.core.deref.call(null,this__3759.method_table).call(null,this__3759.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3764 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3764.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3764.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3764.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3764.method_cache,this__3764.method_table,this__3764.cached_hierarchy,this__3764.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3765 = this;
return cljs.core.deref.call(null,this__3765.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3766 = this;
return cljs.core.deref.call(null,this__3766.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3767 = this;
return cljs.core.do_invoke.call(null,mf,this__3767.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3768__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3768 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3768__delegate.call(this, _, args);
};
G__3768.cljs$lang$maxFixedArity = 1;
G__3768.cljs$lang$applyTo = (function (arglist__3769){
var _ = cljs.core.first(arglist__3769);
var args = cljs.core.rest(arglist__3769);
return G__3768__delegate.call(this, _, args);
});
return G__3768;
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
