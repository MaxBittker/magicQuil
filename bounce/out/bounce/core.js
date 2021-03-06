// Compiled by ClojureScript 1.7.170 {}
goog.provide('bounce.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
bounce.core.g = ((10) / (60));
bounce.core.setup = (function bounce$core$setup(){
quil.core.frame_rate.call(null,(60));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"x","x",2099068185),(250),new cljs.core.Keyword(null,"y","y",-1757859776),(50),new cljs.core.Keyword(null,"vx","vx",-1685168462),(10),new cljs.core.Keyword(null,"vy","vy",-2018509997),(0)], null);
});
bounce.core.update_state = (function bounce$core$update_state(state){
var newvy = ((((450) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state)))?(new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state) * -0.985):new cljs.core.Keyword(null,"vy","vy",-2018509997).cljs$core$IFn$_invoke$arity$1(state));
var newxy = (((((50) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state))) || (((450) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state))))?(new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state) * (-1)):new cljs.core.Keyword(null,"vx","vx",-1685168462).cljs$core$IFn$_invoke$arity$1(state));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + newxy),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + newvy),new cljs.core.Keyword(null,"vx","vx",-1685168462),newxy,new cljs.core.Keyword(null,"vy","vy",-2018509997),((1) * (newvy + bounce.core.g))], null);
});
/**
 * takes a coordinate and returns its 4 reflections
 */
bounce.core.reflect = (function bounce$core$reflect(x,y){
var w = cljs.core.quot.call(null,quil.core.width.call(null),(2));
var h = cljs.core.quot.call(null,quil.core.height.call(null),(2));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((0) + ((-1) * y))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) + ((-1) * x)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) + ((-1) * x)),((0) + ((-1) * y))], null)], null);
});
bounce.core.draw_state = (function bounce$core$draw_state(state){
quil.core.fill.call(null,(100),(0),(155),0.5);

quil.core.rect.call(null,(-1),(-1),((1) + quil.core.width.call(null)),((1) + quil.core.height.call(null)));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(100),(155));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var tr__6178__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__6178__auto__);

var seq__6260 = cljs.core.seq.call(null,bounce.core.reflect.call(null,x,y));
var chunk__6261 = null;
var count__6262 = (0);
var i__6263 = (0);
while(true){
if((i__6263 < count__6262)){
var vec__6264 = cljs.core._nth.call(null,chunk__6261,i__6263);
var x__$1 = cljs.core.nth.call(null,vec__6264,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__6264,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(100),(100));

var G__6266 = seq__6260;
var G__6267 = chunk__6261;
var G__6268 = count__6262;
var G__6269 = (i__6263 + (1));
seq__6260 = G__6266;
chunk__6261 = G__6267;
count__6262 = G__6268;
i__6263 = G__6269;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6260);
if(temp__4425__auto__){
var seq__6260__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6260__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6260__$1);
var G__6270 = cljs.core.chunk_rest.call(null,seq__6260__$1);
var G__6271 = c__5471__auto__;
var G__6272 = cljs.core.count.call(null,c__5471__auto__);
var G__6273 = (0);
seq__6260 = G__6270;
chunk__6261 = G__6271;
count__6262 = G__6272;
i__6263 = G__6273;
continue;
} else {
var vec__6265 = cljs.core.first.call(null,seq__6260__$1);
var x__$1 = cljs.core.nth.call(null,vec__6265,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__6265,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(100),(100));

var G__6274 = cljs.core.next.call(null,seq__6260__$1);
var G__6275 = null;
var G__6276 = (0);
var G__6277 = (0);
seq__6260 = G__6274;
chunk__6261 = G__6275;
count__6262 = G__6276;
i__6263 = G__6277;
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
bounce.core.bounce = (function bounce$core$bounce(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"bounce",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,bounce.core.update_state))?(function() { 
var G__6278__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.update_state,args);
};
var G__6278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6279__i = 0, G__6279__a = new Array(arguments.length -  0);
while (G__6279__i < G__6279__a.length) {G__6279__a[G__6279__i] = arguments[G__6279__i + 0]; ++G__6279__i;}
  args = new cljs.core.IndexedSeq(G__6279__a,0);
} 
return G__6278__delegate.call(this,args);};
G__6278.cljs$lang$maxFixedArity = 0;
G__6278.cljs$lang$applyTo = (function (arglist__6280){
var args = cljs.core.seq(arglist__6280);
return G__6278__delegate(args);
});
G__6278.cljs$core$IFn$_invoke$arity$variadic = G__6278__delegate;
return G__6278;
})()
:bounce.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1100),(1100)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,bounce.core.setup))?(function() { 
var G__6281__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.setup,args);
};
var G__6281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6282__i = 0, G__6282__a = new Array(arguments.length -  0);
while (G__6282__i < G__6282__a.length) {G__6282__a[G__6282__i] = arguments[G__6282__i + 0]; ++G__6282__i;}
  args = new cljs.core.IndexedSeq(G__6282__a,0);
} 
return G__6281__delegate.call(this,args);};
G__6281.cljs$lang$maxFixedArity = 0;
G__6281.cljs$lang$applyTo = (function (arglist__6283){
var args = cljs.core.seq(arglist__6283);
return G__6281__delegate(args);
});
G__6281.cljs$core$IFn$_invoke$arity$variadic = G__6281__delegate;
return G__6281;
})()
:bounce.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,bounce.core.draw_state))?(function() { 
var G__6284__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.draw_state,args);
};
var G__6284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6285__i = 0, G__6285__a = new Array(arguments.length -  0);
while (G__6285__i < G__6285__a.length) {G__6285__a[G__6285__i] = arguments[G__6285__i + 0]; ++G__6285__i;}
  args = new cljs.core.IndexedSeq(G__6285__a,0);
} 
return G__6284__delegate.call(this,args);};
G__6284.cljs$lang$maxFixedArity = 0;
G__6284.cljs$lang$applyTo = (function (arglist__6286){
var args = cljs.core.seq(arglist__6286);
return G__6284__delegate(args);
});
G__6284.cljs$core$IFn$_invoke$arity$variadic = G__6284__delegate;
return G__6284;
})()
:bounce.core.draw_state));
});
goog.exportSymbol('bounce.core.bounce', bounce.core.bounce);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5808__5809__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5808__5809__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),bounce.core.bounce,new cljs.core.Keyword(null,"host-id","host-id",742376279),"bounce"], null));
}

//# sourceMappingURL=core.js.map