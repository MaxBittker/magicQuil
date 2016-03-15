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
var tr__6927__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__6927__auto__);

var seq__10068 = cljs.core.seq.call(null,bounce.core.reflect.call(null,x,y));
var chunk__10069 = null;
var count__10070 = (0);
var i__10071 = (0);
while(true){
if((i__10071 < count__10070)){
var vec__10072 = cljs.core._nth.call(null,chunk__10069,i__10071);
var x__$1 = cljs.core.nth.call(null,vec__10072,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__10072,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(100),(100));

var G__10074 = seq__10068;
var G__10075 = chunk__10069;
var G__10076 = count__10070;
var G__10077 = (i__10071 + (1));
seq__10068 = G__10074;
chunk__10069 = G__10075;
count__10070 = G__10076;
i__10071 = G__10077;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10068);
if(temp__4425__auto__){
var seq__10068__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10068__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__10068__$1);
var G__10078 = cljs.core.chunk_rest.call(null,seq__10068__$1);
var G__10079 = c__5471__auto__;
var G__10080 = cljs.core.count.call(null,c__5471__auto__);
var G__10081 = (0);
seq__10068 = G__10078;
chunk__10069 = G__10079;
count__10070 = G__10080;
i__10071 = G__10081;
continue;
} else {
var vec__10073 = cljs.core.first.call(null,seq__10068__$1);
var x__$1 = cljs.core.nth.call(null,vec__10073,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__10073,(1),null);
quil.core.ellipse.call(null,x__$1,y__$1,(100),(100));

var G__10082 = cljs.core.next.call(null,seq__10068__$1);
var G__10083 = null;
var G__10084 = (0);
var G__10085 = (0);
seq__10068 = G__10082;
chunk__10069 = G__10083;
count__10070 = G__10084;
i__10071 = G__10085;
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
var G__10086__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.update_state,args);
};
var G__10086 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10087__i = 0, G__10087__a = new Array(arguments.length -  0);
while (G__10087__i < G__10087__a.length) {G__10087__a[G__10087__i] = arguments[G__10087__i + 0]; ++G__10087__i;}
  args = new cljs.core.IndexedSeq(G__10087__a,0);
} 
return G__10086__delegate.call(this,args);};
G__10086.cljs$lang$maxFixedArity = 0;
G__10086.cljs$lang$applyTo = (function (arglist__10088){
var args = cljs.core.seq(arglist__10088);
return G__10086__delegate(args);
});
G__10086.cljs$core$IFn$_invoke$arity$variadic = G__10086__delegate;
return G__10086;
})()
:bounce.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1100),(1100)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,bounce.core.setup))?(function() { 
var G__10089__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.setup,args);
};
var G__10089 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10090__i = 0, G__10090__a = new Array(arguments.length -  0);
while (G__10090__i < G__10090__a.length) {G__10090__a[G__10090__i] = arguments[G__10090__i + 0]; ++G__10090__i;}
  args = new cljs.core.IndexedSeq(G__10090__a,0);
} 
return G__10089__delegate.call(this,args);};
G__10089.cljs$lang$maxFixedArity = 0;
G__10089.cljs$lang$applyTo = (function (arglist__10091){
var args = cljs.core.seq(arglist__10091);
return G__10089__delegate(args);
});
G__10089.cljs$core$IFn$_invoke$arity$variadic = G__10089__delegate;
return G__10089;
})()
:bounce.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,bounce.core.draw_state))?(function() { 
var G__10092__delegate = function (args){
return cljs.core.apply.call(null,bounce.core.draw_state,args);
};
var G__10092 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10093__i = 0, G__10093__a = new Array(arguments.length -  0);
while (G__10093__i < G__10093__a.length) {G__10093__a[G__10093__i] = arguments[G__10093__i + 0]; ++G__10093__i;}
  args = new cljs.core.IndexedSeq(G__10093__a,0);
} 
return G__10092__delegate.call(this,args);};
G__10092.cljs$lang$maxFixedArity = 0;
G__10092.cljs$lang$applyTo = (function (arglist__10094){
var args = cljs.core.seq(arglist__10094);
return G__10092__delegate(args);
});
G__10092.cljs$core$IFn$_invoke$arity$variadic = G__10092__delegate;
return G__10092;
})()
:bounce.core.draw_state));
});
goog.exportSymbol('bounce.core.bounce', bounce.core.bounce);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5898__5899__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5898__5899__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),bounce.core.bounce,new cljs.core.Keyword(null,"host-id","host-id",742376279),"bounce"], null));
}

//# sourceMappingURL=core.js.map