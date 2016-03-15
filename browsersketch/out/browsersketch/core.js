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
var tr__6536__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__6536__auto__);

var seq__6624 = cljs.core.seq.call(null,browsersketch.core.reflect.call(null,x,y));
var chunk__6625 = null;
var count__6626 = (0);
var i__6627 = (0);
while(true){
if((i__6627 < count__6626)){
var vec__6628 = cljs.core._nth.call(null,chunk__6625,i__6627);
var x__$1 = cljs.core.nth.call(null,vec__6628,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__6628,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(r * (200)),(r * (200)));

var G__6630 = seq__6624;
var G__6631 = chunk__6625;
var G__6632 = count__6626;
var G__6633 = (i__6627 + (1));
seq__6624 = G__6630;
chunk__6625 = G__6631;
count__6626 = G__6632;
i__6627 = G__6633;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6624);
if(temp__4425__auto__){
var seq__6624__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6624__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6624__$1);
var G__6634 = cljs.core.chunk_rest.call(null,seq__6624__$1);
var G__6635 = c__5471__auto__;
var G__6636 = cljs.core.count.call(null,c__5471__auto__);
var G__6637 = (0);
seq__6624 = G__6634;
chunk__6625 = G__6635;
count__6626 = G__6636;
i__6627 = G__6637;
continue;
} else {
var vec__6629 = cljs.core.first.call(null,seq__6624__$1);
var x__$1 = cljs.core.nth.call(null,vec__6629,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__6629,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(r * (200)),(r * (200)));

var G__6638 = cljs.core.next.call(null,seq__6624__$1);
var G__6639 = null;
var G__6640 = (0);
var G__6641 = (0);
seq__6624 = G__6638;
chunk__6625 = G__6639;
count__6626 = G__6640;
i__6627 = G__6641;
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
var G__6642__delegate = function (args){
return cljs.core.apply.call(null,browsersketch.core.update_state,args);
};
var G__6642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6643__i = 0, G__6643__a = new Array(arguments.length -  0);
while (G__6643__i < G__6643__a.length) {G__6643__a[G__6643__i] = arguments[G__6643__i + 0]; ++G__6643__i;}
  args = new cljs.core.IndexedSeq(G__6643__a,0);
} 
return G__6642__delegate.call(this,args);};
G__6642.cljs$lang$maxFixedArity = 0;
G__6642.cljs$lang$applyTo = (function (arglist__6644){
var args = cljs.core.seq(arglist__6644);
return G__6642__delegate(args);
});
G__6642.cljs$core$IFn$_invoke$arity$variadic = G__6642__delegate;
return G__6642;
})()
:browsersketch.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(700),(700)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,browsersketch.core.setup))?(function() { 
var G__6645__delegate = function (args){
return cljs.core.apply.call(null,browsersketch.core.setup,args);
};
var G__6645 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6646__i = 0, G__6646__a = new Array(arguments.length -  0);
while (G__6646__i < G__6646__a.length) {G__6646__a[G__6646__i] = arguments[G__6646__i + 0]; ++G__6646__i;}
  args = new cljs.core.IndexedSeq(G__6646__a,0);
} 
return G__6645__delegate.call(this,args);};
G__6645.cljs$lang$maxFixedArity = 0;
G__6645.cljs$lang$applyTo = (function (arglist__6647){
var args = cljs.core.seq(arglist__6647);
return G__6645__delegate(args);
});
G__6645.cljs$core$IFn$_invoke$arity$variadic = G__6645__delegate;
return G__6645;
})()
:browsersketch.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,browsersketch.core.draw_state))?(function() { 
var G__6648__delegate = function (args){
return cljs.core.apply.call(null,browsersketch.core.draw_state,args);
};
var G__6648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6649__i = 0, G__6649__a = new Array(arguments.length -  0);
while (G__6649__i < G__6649__a.length) {G__6649__a[G__6649__i] = arguments[G__6649__i + 0]; ++G__6649__i;}
  args = new cljs.core.IndexedSeq(G__6649__a,0);
} 
return G__6648__delegate.call(this,args);};
G__6648.cljs$lang$maxFixedArity = 0;
G__6648.cljs$lang$applyTo = (function (arglist__6650){
var args = cljs.core.seq(arglist__6650);
return G__6648__delegate(args);
});
G__6648.cljs$core$IFn$_invoke$arity$variadic = G__6648__delegate;
return G__6648;
})()
:browsersketch.core.draw_state));
});
goog.exportSymbol('browsersketch.core.browsersketch', browsersketch.core.browsersketch);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5858__5859__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5858__5859__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),browsersketch.core.browsersketch,new cljs.core.Keyword(null,"host-id","host-id",742376279),"browsersketch"], null));
}

//# sourceMappingURL=core.js.map