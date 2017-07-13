// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__7639__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7640__i = 0, G__7640__a = new Array(arguments.length -  0);
while (G__7640__i < G__7640__a.length) {G__7640__a[G__7640__i] = arguments[G__7640__i + 0]; ++G__7640__i;}
  args = new cljs.core.IndexedSeq(G__7640__a,0);
} 
return G__7639__delegate.call(this,args);};
G__7639.cljs$lang$maxFixedArity = 0;
G__7639.cljs$lang$applyTo = (function (arglist__7641){
var args = cljs.core.seq(arglist__7641);
return G__7639__delegate(args);
});
G__7639.cljs$core$IFn$_invoke$arity$variadic = G__7639__delegate;
return G__7639;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__7642__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__7642 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7643__i = 0, G__7643__a = new Array(arguments.length -  0);
while (G__7643__i < G__7643__a.length) {G__7643__a[G__7643__i] = arguments[G__7643__i + 0]; ++G__7643__i;}
  args = new cljs.core.IndexedSeq(G__7643__a,0);
} 
return G__7642__delegate.call(this,args);};
G__7642.cljs$lang$maxFixedArity = 0;
G__7642.cljs$lang$applyTo = (function (arglist__7644){
var args = cljs.core.seq(arglist__7644);
return G__7642__delegate(args);
});
G__7642.cljs$core$IFn$_invoke$arity$variadic = G__7642__delegate;
return G__7642;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1499953725261