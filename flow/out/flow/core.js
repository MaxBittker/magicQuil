// Compiled by ClojureScript 1.8.34 {}
goog.provide('flow.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
flow.core.setup = (function flow$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"fish","fish",-1871685900),cljs.core.take.call(null,(5),cljs.core.repeatedly.call(null,flow.core.genfish))], null);
});
flow.core.genfish = (function flow$core$genfish(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,quil.core.width.call(null)),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null);
});
flow.core.update_state = (function flow$core$update_state(state){
var fish = flow.core.tick.call(null,flow.core.grow.call(null,new cljs.core.Keyword(null,"fish","fish",-1871685900).cljs$core$IFn$_invoke$arity$1(state)));
console.log(cljs.core.count.call(null,fish));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"fish","fish",-1871685900),fish], null);
});
flow.core.tick = (function flow$core$tick(fish){
return cljs.core.filter.call(null,(function (f){
return ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(f) < quil.core.height.call(null))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(f) < quil.core.width.call(null))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(f) > (0)));
}),cljs.core.map.call(null,cljs.core.partial.call(null,flow.core.tickfish,fish),fish));
});
flow.core.grow = (function flow$core$grow(fish){
if(((cljs.core.count.call(null,fish) > (50))) || ((cljs.core.rand_int.call(null,(5)) < (4)))){
return fish;
} else {
return cljs.core.concat.call(null,fish,cljs.core.take.call(null,(1),cljs.core.repeatedly.call(null,flow.core.genfish)));
}
});
flow.core.tickfish = (function flow$core$tickfish(fish,f){
var dx = cljs.core.reduce.call(null,(function (a,b){
return (a + flow.core.dxf.call(null,b,f));
}),(0),fish);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(flow.core.clamp.call(null,dx,-0.5,0.5) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(f)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(f) + new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(f)),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(f)], null);
});
flow.core.abs = (function flow$core$abs(n){
var x__6541__auto__ = n;
var y__6542__auto__ = (- n);
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
});
/**
 * Clamp a to (min-a, max-x)
 */
flow.core.clamp = (function flow$core$clamp(a,min_a,max_a){
var x__6548__auto__ = max_a;
var y__6549__auto__ = (function (){var x__6541__auto__ = min_a;
var y__6542__auto__ = a;
return ((x__6541__auto__ > y__6542__auto__) ? x__6541__auto__ : y__6542__auto__);
})();
return ((x__6548__auto__ < y__6549__auto__) ? x__6548__auto__ : y__6549__auto__);
});
flow.core.dxf = (function flow$core$dxf(a,b){
var close = ((1) / flow.core.abs.call(null,(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b))));
if(((close > (100))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b)))){
return (0);
} else {
return ((1) / (((-1) * close) * (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b))));
}
});
flow.core.drawfish = (function flow$core$drawfish(f){
return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(f),(25),(25));
});
flow.core.draw_state = (function flow$core$draw_state(state){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(100),(0),(155),0.1);

quil.core.rect.call(null,(-1),(-1),((1) + quil.core.width.call(null)),((1) + quil.core.height.call(null)));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(100),(155));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var seq__11799 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"fish","fish",-1871685900).cljs$core$IFn$_invoke$arity$1(state));
var chunk__11800 = null;
var count__11801 = (0);
var i__11802 = (0);
while(true){
if((i__11802 < count__11801)){
var f = cljs.core._nth.call(null,chunk__11800,i__11802);
flow.core.drawfish.call(null,f);

var G__11803 = seq__11799;
var G__11804 = chunk__11800;
var G__11805 = count__11801;
var G__11806 = (i__11802 + (1));
seq__11799 = G__11803;
chunk__11800 = G__11804;
count__11801 = G__11805;
i__11802 = G__11806;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11799);
if(temp__4657__auto__){
var seq__11799__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11799__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__11799__$1);
var G__11807 = cljs.core.chunk_rest.call(null,seq__11799__$1);
var G__11808 = c__7021__auto__;
var G__11809 = cljs.core.count.call(null,c__7021__auto__);
var G__11810 = (0);
seq__11799 = G__11807;
chunk__11800 = G__11808;
count__11801 = G__11809;
i__11802 = G__11810;
continue;
} else {
var f = cljs.core.first.call(null,seq__11799__$1);
flow.core.drawfish.call(null,f);

var G__11811 = cljs.core.next.call(null,seq__11799__$1);
var G__11812 = null;
var G__11813 = (0);
var G__11814 = (0);
seq__11799 = G__11811;
chunk__11800 = G__11812;
count__11801 = G__11813;
i__11802 = G__11814;
continue;
}
} else {
return null;
}
}
break;
}
});
flow.core.flow = (function flow$core$flow(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"flow",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,flow.core.update_state))?(function() { 
var G__11815__delegate = function (args){
return cljs.core.apply.call(null,flow.core.update_state,args);
};
var G__11815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11816__i = 0, G__11816__a = new Array(arguments.length -  0);
while (G__11816__i < G__11816__a.length) {G__11816__a[G__11816__i] = arguments[G__11816__i + 0]; ++G__11816__i;}
  args = new cljs.core.IndexedSeq(G__11816__a,0);
} 
return G__11815__delegate.call(this,args);};
G__11815.cljs$lang$maxFixedArity = 0;
G__11815.cljs$lang$applyTo = (function (arglist__11817){
var args = cljs.core.seq(arglist__11817);
return G__11815__delegate(args);
});
G__11815.cljs$core$IFn$_invoke$arity$variadic = G__11815__delegate;
return G__11815;
})()
:flow.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,flow.core.setup))?(function() { 
var G__11818__delegate = function (args){
return cljs.core.apply.call(null,flow.core.setup,args);
};
var G__11818 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11819__i = 0, G__11819__a = new Array(arguments.length -  0);
while (G__11819__i < G__11819__a.length) {G__11819__a[G__11819__i] = arguments[G__11819__i + 0]; ++G__11819__i;}
  args = new cljs.core.IndexedSeq(G__11819__a,0);
} 
return G__11818__delegate.call(this,args);};
G__11818.cljs$lang$maxFixedArity = 0;
G__11818.cljs$lang$applyTo = (function (arglist__11820){
var args = cljs.core.seq(arglist__11820);
return G__11818__delegate(args);
});
G__11818.cljs$core$IFn$_invoke$arity$variadic = G__11818__delegate;
return G__11818;
})()
:flow.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,flow.core.draw_state))?(function() { 
var G__11821__delegate = function (args){
return cljs.core.apply.call(null,flow.core.draw_state,args);
};
var G__11821 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11822__i = 0, G__11822__a = new Array(arguments.length -  0);
while (G__11822__i < G__11822__a.length) {G__11822__a[G__11822__i] = arguments[G__11822__i + 0]; ++G__11822__i;}
  args = new cljs.core.IndexedSeq(G__11822__a,0);
} 
return G__11821__delegate.call(this,args);};
G__11821.cljs$lang$maxFixedArity = 0;
G__11821.cljs$lang$applyTo = (function (arglist__11823){
var args = cljs.core.seq(arglist__11823);
return G__11821__delegate(args);
});
G__11821.cljs$core$IFn$_invoke$arity$variadic = G__11821__delegate;
return G__11821;
})()
:flow.core.draw_state));
});
goog.exportSymbol('flow.core.flow', flow.core.flow);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7363__7364__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7363__7364__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),flow.core.flow,new cljs.core.Keyword(null,"host-id","host-id",742376279),"flow"], null));
}

//# sourceMappingURL=core.js.map