// Compiled by ClojureScript 1.7.170 {}
goog.provide('browsersketch.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
cljs.core.enable_console_print_BANG_.call(null);
browsersketch.core.rotate_me = (function browsersketch$core$rotate_me(options){
var draw = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$2(options,(function (){
return null;
}));
var period = (200);
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.partial.call(null,browsersketch.core.rotating_draw,period,draw));
});
browsersketch.core.setup = (function browsersketch$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0),new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null);
});
browsersketch.core.update_state = (function browsersketch$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + (30)),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1),new cljs.core.Keyword(null,"tick","tick",-835886976),(new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(state) + 0.007)], null);
});
/**
 * takes a coordinate and returns its 4 reflections
 */
browsersketch.core.reflect = (function browsersketch$core$reflect(x,y){
var w = cljs.core.quot.call(null,quil.core.width.call(null),(2));
var h = cljs.core.quot.call(null,quil.core.height.call(null),(2));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((0) + ((-1) * y))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) + ((-1) * x)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) + ((-1) * x)),((0) + ((-1) * y))], null)], null);
});
browsersketch.core.abs = (function browsersketch$core$abs(n){
var x__4999__auto__ = n;
var y__5000__auto__ = (- n);
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
});
browsersketch.core.draw_state = (function browsersketch$core$draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(100),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var r = browsersketch.core.abs.call(null,quil.core.sin.call(null,new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(state)));
var x = (((250) * r) * quil.core.cos.call(null,angle));
var y = (((250) * r) * quil.core.sin.call(null,angle));
var tr__6178__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__6178__auto__);

var seq__9299 = cljs.core.seq.call(null,browsersketch.core.reflect.call(null,x,y));
var chunk__9300 = null;
var count__9301 = (0);
var i__9302 = (0);
while(true){
if((i__9302 < count__9301)){
var vec__9303 = cljs.core._nth.call(null,chunk__9300,i__9302);
var x__$1 = cljs.core.nth.call(null,vec__9303,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__9303,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(r * (200)),(r * (200)));

var G__9305 = seq__9299;
var G__9306 = chunk__9300;
var G__9307 = count__9301;
var G__9308 = (i__9302 + (1));
seq__9299 = G__9305;
chunk__9300 = G__9306;
count__9301 = G__9307;
i__9302 = G__9308;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9299);
if(temp__4425__auto__){
var seq__9299__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9299__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__9299__$1);
var G__9309 = cljs.core.chunk_rest.call(null,seq__9299__$1);
var G__9310 = c__5471__auto__;
var G__9311 = cljs.core.count.call(null,c__5471__auto__);
var G__9312 = (0);
seq__9299 = G__9309;
chunk__9300 = G__9310;
count__9301 = G__9311;
i__9302 = G__9312;
continue;
} else {
var vec__9304 = cljs.core.first.call(null,seq__9299__$1);
var x__$1 = cljs.core.nth.call(null,vec__9304,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__9304,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(r * (200)),(r * (200)));

var G__9313 = cljs.core.next.call(null,seq__9299__$1);
var G__9314 = null;
var G__9315 = (0);
var G__9316 = (0);
seq__9299 = G__9313;
chunk__9300 = G__9314;
count__9301 = G__9315;
i__9302 = G__9316;
continue;
}
} else {
return null;
}
}
break;
}
}finally {quil.core.pop_matrix.call(null);
}});
browsersketch.core.browsersketch = (function browsersketch$core$browsersketch(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"browsersketch",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,browsersketch.core.update_state))?(function() { 
var G__9317__delegate = function (args){
return cljs.core.apply.call(null,browsersketch.core.update_state,args);
};
var G__9317 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9318__i = 0, G__9318__a = new Array(arguments.length -  0);
while (G__9318__i < G__9318__a.length) {G__9318__a[G__9318__i] = arguments[G__9318__i + 0]; ++G__9318__i;}
  args = new cljs.core.IndexedSeq(G__9318__a,0);
} 
return G__9317__delegate.call(this,args);};
G__9317.cljs$lang$maxFixedArity = 0;
G__9317.cljs$lang$applyTo = (function (arglist__9319){
var args = cljs.core.seq(arglist__9319);
return G__9317__delegate(args);
});
G__9317.cljs$core$IFn$_invoke$arity$variadic = G__9317__delegate;
return G__9317;
})()
:browsersketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(700)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,browsersketch.core.setup))?(function() { 
var G__9320__delegate = function (args){
return cljs.core.apply.call(null,browsersketch.core.setup,args);
};
var G__9320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9321__i = 0, G__9321__a = new Array(arguments.length -  0);
while (G__9321__i < G__9321__a.length) {G__9321__a[G__9321__i] = arguments[G__9321__i + 0]; ++G__9321__i;}
  args = new cljs.core.IndexedSeq(G__9321__a,0);
} 
return G__9320__delegate.call(this,args);};
G__9320.cljs$lang$maxFixedArity = 0;
G__9320.cljs$lang$applyTo = (function (arglist__9322){
var args = cljs.core.seq(arglist__9322);
return G__9320__delegate(args);
});
G__9320.cljs$core$IFn$_invoke$arity$variadic = G__9320__delegate;
return G__9320;
})()
:browsersketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,browsersketch.core.draw_state))?(function() { 
var G__9323__delegate = function (args){
return cljs.core.apply.call(null,browsersketch.core.draw_state,args);
};
var G__9323 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9324__i = 0, G__9324__a = new Array(arguments.length -  0);
while (G__9324__i < G__9324__a.length) {G__9324__a[G__9324__i] = arguments[G__9324__i + 0]; ++G__9324__i;}
  args = new cljs.core.IndexedSeq(G__9324__a,0);
} 
return G__9323__delegate.call(this,args);};
G__9323.cljs$lang$maxFixedArity = 0;
G__9323.cljs$lang$applyTo = (function (arglist__9325){
var args = cljs.core.seq(arglist__9325);
return G__9323__delegate(args);
});
G__9323.cljs$core$IFn$_invoke$arity$variadic = G__9323__delegate;
return G__9323;
})()
:browsersketch.core.draw_state));
});
goog.exportSymbol('browsersketch.core.browsersketch', browsersketch.core.browsersketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5808__5809__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5808__5809__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),browsersketch.core.browsersketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"browsersketch"], null));
}

//# sourceMappingURL=core.js.map