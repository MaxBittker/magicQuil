// Compiled by ClojureScript 1.8.34 {}
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
var tr__8564__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8564__auto__);

var seq__8680 = cljs.core.seq.call(null,bounce.core.reflect.call(null,x,y));
var chunk__8681 = null;
var count__8682 = (0);
var i__8683 = (0);
while(true){
if((i__8683 < count__8682)){
var vec__8684 = cljs.core._nth.call(null,chunk__8681,i__8683);
var x__$1 = cljs.core.nth.call(null,vec__8684,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__8684,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(100),(100));

var G__8686 = seq__8680;
var G__8687 = chunk__8681;
var G__8688 = count__8682;
var G__8689 = (i__8683 + (1));
seq__8680 = G__8686;
chunk__8681 = G__8687;
count__8682 = G__8688;
i__8683 = G__8689;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8680);
if(temp__4657__auto__){
var seq__8680__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8680__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__8680__$1);
var G__8690 = cljs.core.chunk_rest.call(null,seq__8680__$1);
var G__8691 = c__7021__auto__;
var G__8692 = cljs.core.count.call(null,c__7021__auto__);
var G__8693 = (0);
seq__8680 = G__8690;
chunk__8681 = G__8691;
count__8682 = G__8692;
i__8683 = G__8693;
continue;
} else {
var vec__8685 = cljs.core.first.call(null,seq__8680__$1);
var x__$1 = cljs.core.nth.call(null,vec__8685,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__8685,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(100),(100));

var G__8694 = cljs.core.next.call(null,seq__8680__$1);
var G__8695 = null;
var G__8696 = (0);
var G__8697 = (0);
seq__8680 = G__8694;
chunk__8681 = G__8695;
count__8682 = G__8696;
i__8683 = G__8697;
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
var G__8698__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.update_state,args);
};
var G__8698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8699__i = 0, G__8699__a = new Array(arguments.length -  0);
while (G__8699__i < G__8699__a.length) {G__8699__a[G__8699__i] = arguments[G__8699__i + 0]; ++G__8699__i;}
  args = new cljs.core.IndexedSeq(G__8699__a,0);
} 
return G__8698__delegate.call(this,args);};
G__8698.cljs$lang$maxFixedArity = 0;
G__8698.cljs$lang$applyTo = (function (arglist__8700){
var args = cljs.core.seq(arglist__8700);
return G__8698__delegate(args);
});
G__8698.cljs$core$IFn$_invoke$arity$variadic = G__8698__delegate;
return G__8698;
})()
:bounce.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1100),(1100)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,bounce.core.setup))?(function() { 
var G__8701__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.setup,args);
};
var G__8701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8702__i = 0, G__8702__a = new Array(arguments.length -  0);
while (G__8702__i < G__8702__a.length) {G__8702__a[G__8702__i] = arguments[G__8702__i + 0]; ++G__8702__i;}
  args = new cljs.core.IndexedSeq(G__8702__a,0);
} 
return G__8701__delegate.call(this,args);};
G__8701.cljs$lang$maxFixedArity = 0;
G__8701.cljs$lang$applyTo = (function (arglist__8703){
var args = cljs.core.seq(arglist__8703);
return G__8701__delegate(args);
});
G__8701.cljs$core$IFn$_invoke$arity$variadic = G__8701__delegate;
return G__8701;
})()
:bounce.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,bounce.core.draw_state))?(function() { 
var G__8704__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.draw_state,args);
};
var G__8704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8705__i = 0, G__8705__a = new Array(arguments.length -  0);
while (G__8705__i < G__8705__a.length) {G__8705__a[G__8705__i] = arguments[G__8705__i + 0]; ++G__8705__i;}
  args = new cljs.core.IndexedSeq(G__8705__a,0);
} 
return G__8704__delegate.call(this,args);};
G__8704.cljs$lang$maxFixedArity = 0;
G__8704.cljs$lang$applyTo = (function (arglist__8706){
var args = cljs.core.seq(arglist__8706);
return G__8704__delegate(args);
});
G__8704.cljs$core$IFn$_invoke$arity$variadic = G__8704__delegate;
return G__8704;
})()
:bounce.core.draw_state));
});
goog.exportSymbol('bounce.core.bounce', bounce.core.bounce);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7463__7464__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7463__7464__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),bounce.core.bounce,new cljs.core.Keyword(null,"host-id","host-id",742376279),"bounce"], null));
}

//# sourceMappingURL=core.js.map