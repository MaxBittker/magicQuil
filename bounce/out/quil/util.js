// Compiled by ClojureScript 1.7.170 {}
goog.provide('quil.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Function that does nothing.
 */
quil.util.no_fn = (function quil$util$no_fn(){
return null;
});
/**
 * Returns the val associated with key in mappings or key directly if it
 *   is one of the vals in mappings. Otherwise throws an exception.
 */
quil.util.resolve_constant_key = (function quil$util$resolve_constant_key(key,mappings){
if(cljs.core.truth_(cljs.core.get.call(null,mappings,key))){
return cljs.core.get.call(null,mappings,key);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),cljs.core.vals.call(null,mappings)))){
return key;
} else {
throw (new Error([cljs.core.str("Expecting a keyword, got: "),cljs.core.str(key),cljs.core.str(". Expected one of: "),cljs.core.str(cljs.core.vec.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,mappings))))].join('')));

}
}
});
/**
 * Returns the length of the longest key of map m. Assumes m's keys are strings
 * and returns 0 if map is empty:
 * (length-of-longest-key {"foo" 1 "barr" 2 "bazzz" 3}) ;=> 5
 * (length-of-longest-key {}) ;=> 0
 */
quil.util.length_of_longest_key = (function quil$util$length_of_longest_key(m){
var or__4668__auto__ = cljs.core.last.call(null,cljs.core.sort.call(null,cljs.core.map.call(null,(function (p1__5854_SHARP_){
return p1__5854_SHARP_.length();
}),cljs.core.keys.call(null,m))));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return (0);
}
});
/**
 * Generates a padding string starting concatting s with len times pad:
 * (gen-padding "" 5 "b") ;=> "bbbbb"
 * May be called without starting string s in which case it defaults to the
 * empty string and also without pad in which case it defaults to a single space
 */
quil.util.gen_padding = (function quil$util$gen_padding(var_args){
var args5855 = [];
var len__5726__auto___5858 = arguments.length;
var i__5727__auto___5859 = (0);
while(true){
if((i__5727__auto___5859 < len__5726__auto___5858)){
args5855.push((arguments[i__5727__auto___5859]));

var G__5860 = (i__5727__auto___5859 + (1));
i__5727__auto___5859 = G__5860;
continue;
} else {
}
break;
}

var G__5857 = args5855.length;
switch (G__5857) {
case 1:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args5855.length)].join('')));

}
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$1 = (function (len){
return quil.util.gen_padding.call(null,"",len," ");
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$2 = (function (len,pad){
return quil.util.gen_padding.call(null,"",len,pad);
});

quil.util.gen_padding.cljs$core$IFn$_invoke$arity$3 = (function (s,len,pad){
if((len > (0))){
return quil.util.gen_padding.call(null,[cljs.core.str(s),cljs.core.str(pad)].join(''),(len - (1)),pad);
} else {
return s;
}
});

quil.util.gen_padding.cljs$lang$maxFixedArity = 3;
quil.util.print_definition_list = (function quil$util$print_definition_list(definitions){
var longest_key = quil.util.length_of_longest_key.call(null,definitions);
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (longest_key){
return (function (p__5864){
var vec__5865 = p__5864;
var k = cljs.core.nth.call(null,vec__5865,(0),null);
var v = cljs.core.nth.call(null,vec__5865,(1),null);
var len = k.length();
var diff = (longest_key - len);
var pad = quil.util.gen_padding.call(null,diff);
return cljs.core.println.call(null,k,pad,"- ",v);
});})(longest_key))
,definitions));
});
quil.util.prepare_quil_name = (function quil$util$prepare_quil_name(const_keyword){
return clojure.string.replace.call(null,clojure.string.upper_case.call(null,cljs.core.name.call(null,const_keyword)),/-/,"_");
});

//# sourceMappingURL=util.js.map