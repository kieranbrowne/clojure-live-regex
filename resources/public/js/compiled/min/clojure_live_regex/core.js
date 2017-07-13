// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('clojure_live_regex.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_();
} else {
}
clojure_live_regex.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$re_DASH_string,[cljs.core.str("(w)\\w+")].join(''),cljs.core.cst$kw$re_DASH_input,"The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.",cljs.core.cst$kw$error,false,cljs.core.cst$kw$input_DASH_selected,false], null));
clojure_live_regex.core.re_string = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_string], null));
clojure_live_regex.core.re_input = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$re_DASH_input], null));
clojure_live_regex.core.logo = (function clojure_live_regex$core$logo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$float,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$padding,cljs.core.cst$kw$outline,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height],["2rem",cljs.core.cst$kw$border_DASH_box,"rgb(250,247,246)","1.8rem","bold","left","12rem","rgb(88,118,255)","1rem 1rem",cljs.core.cst$kw$none,"inline-block","none",cljs.core.cst$kw$sans_DASH_serif,"4rem"])], null),"Regex",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sub,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line_DASH_height,(0),cljs.core.cst$kw$font_DASH_size,"1.2rem",cljs.core.cst$kw$font_DASH_weight,"200"], null)], null),"clj"], null)], null);
});
clojure_live_regex.core.credit = (function clojure_live_regex$core$credit(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"http://kieranbrowne.com",cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$bottom,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$right,cljs.core.cst$kw$text_DASH_decoration,cljs.core.cst$kw$display,cljs.core.cst$kw$position,cljs.core.cst$kw$font_DASH_family],["rgba(0,0,0,0.1)","right","2rem","bold","2rem","none","block","fixed","sans-serif"])], null),"K"], null)], null);
});
clojure_live_regex.core.regex_string = (function clojure_live_regex$core$regex_string(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$color,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$float,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$padding,cljs.core.cst$kw$outline,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height],["4rem",cljs.core.cst$kw$border_DASH_box,"rgb(250,247,246)","1.2rem","left","calc(100vw - 12rem)",(cljs.core.truth_((function (){var G__12974 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12974) : cljs.core.deref.call(null,G__12974));
})())?"rgb(255,56,10)":"rgb(10,10,10)"),"1rem 2rem",cljs.core.cst$kw$none,"inline-block","none",cljs.core.cst$kw$monospace,"4rem"]),cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_string) : cljs.core.deref.call(null,clojure_live_regex.core.re_string)),cljs.core.cst$kw$on_DASH_click,(function (){
var G__12975 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_selected], null));
var G__12976 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12975,G__12976) : cljs.core.reset_BANG_.call(null,G__12975,G__12976));
}),cljs.core.cst$kw$on_DASH_change,(function (p1__12966_SHARP_){
var G__12977_12981 = clojure_live_regex.core.re_string;
var G__12978_12982 = p1__12966_SHARP_.target.value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12977_12981,G__12978_12982) : cljs.core.reset_BANG_.call(null,G__12977_12981,G__12978_12982));

var G__12979 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null));
var G__12980 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12979,G__12980) : cljs.core.reset_BANG_.call(null,G__12979,G__12980));
})], null)], null);
});
clojure_live_regex.core.regex_list = (function clojure_live_regex$core$regex_list(){
try{return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__12991 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_selected], null));
var G__12992 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12991,G__12992) : cljs.core.reset_BANG_.call(null,G__12991,G__12992));
}),cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$float,cljs.core.cst$kw$overflow,cljs.core.cst$kw$list_DASH_style,cljs.core.cst$kw$width,cljs.core.cst$kw$padding,cljs.core.cst$kw$outline,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height],["2rem",cljs.core.cst$kw$border_DASH_box,"1.2rem","left",cljs.core.cst$kw$scroll,"none","12rem","2rem 0rem",cljs.core.cst$kw$none,"inline-block","none",cljs.core.cst$kw$monospace,"calc(100vh - 4rem)"])], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (match,i){
if(cljs.core.coll_QMARK_(match)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,((cljs.core.even_QMARK_(i))?"rgba(255,255,255,1)":"none"),cljs.core.cst$kw$padding,"0rem 1rem"], null)], null),[cljs.core.str(match)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$background,((cljs.core.even_QMARK_(i))?"rgba(255,255,255,1)":"none"),cljs.core.cst$kw$padding,"0rem 1rem"], null)], null),match], null);
}
}),cljs.core.re_seq(cljs.core.re_pattern((cljs.core.truth_((function (){var and__6397__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_string) : cljs.core.deref.call(null,clojure_live_regex.core.re_string));
if(cljs.core.truth_(and__6397__auto__)){
return !(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_string) : cljs.core.deref.call(null,clojure_live_regex.core.re_string))));
} else {
return and__6397__auto__;
}
})())?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_string) : cljs.core.deref.call(null,clojure_live_regex.core.re_string)):"\\w+")),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_input) : cljs.core.deref.call(null,clojure_live_regex.core.re_input))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((40))));
}catch (e12988){var e = e12988;
var G__12989_12993 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null));
var G__12990_12994 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__12989_12993,G__12990_12994) : cljs.core.reset_BANG_.call(null,G__12989_12993,G__12990_12994));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$float,"left",cljs.core.cst$kw$width,"12rem",cljs.core.cst$kw$height,"calc(100vh - 4rem)"], null)], null)], null);
}});
clojure_live_regex.core.wrap_str = (function clojure_live_regex$core$wrap_str(var_args){
var args12995 = [];
var len__7484__auto___12998 = arguments.length;
var i__7485__auto___12999 = (0);
while(true){
if((i__7485__auto___12999 < len__7484__auto___12998)){
args12995.push((arguments[i__7485__auto___12999]));

var G__13000 = (i__7485__auto___12999 + (1));
i__7485__auto___12999 = G__13000;
continue;
} else {
}
break;
}

var G__12997 = args12995.length;
switch (G__12997) {
case 4:
return clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12995.length)].join('')));

}
});

clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$4 = (function (s,before,after,part){
return [cljs.core.str(before),cljs.core.str((cljs.core.truth_(part)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,part):s)),cljs.core.str(after)].join('');
});

clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$3 = (function (s,before,after){
return clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$4(s,before,after,null);
});

clojure_live_regex.core.wrap_str.cljs$lang$maxFixedArity = 4;

clojure_live_regex.core.highlight = (function clojure_live_regex$core$highlight(s){
return clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$3(s,"<span style=\"background-color: rgb(88,118,255); color: rgb(250,247,246)\">","</span>");
});
clojure_live_regex.core.surround = (function clojure_live_regex$core$surround(s){
return clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$3(s,"<span style=\"box-shadow: 0 0 0 2px rgb(255,56,10);\">","</span>");
});
clojure_live_regex.core.output_styles = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$color,cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$float,cljs.core.cst$kw$overflow,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$padding,cljs.core.cst$kw$outline,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["2rem","border-box","rgba(10,10,10)","top","pre-wrap","1.2rem","left","scroll","calc(100vw - 12rem)","white","2rem 2rem","none","inline-block","none",cljs.core.cst$kw$monospace,"calc(100vh - 4rem)","0 auto"]);
clojure_live_regex.core.regex_output = (function clojure_live_regex$core$regex_output(){
if(cljs.core.truth_((function (){var G__13013 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_selected], null));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13013) : cljs.core.deref.call(null,G__13013));
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,clojure_live_regex.core.output_styles], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$line_DASH_height,cljs.core.cst$kw$box_DASH_sizing,cljs.core.cst$kw$color,cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$float,cljs.core.cst$kw$overflow,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$max_DASH_width,cljs.core.cst$kw$resize,cljs.core.cst$kw$outline,cljs.core.cst$kw$display,cljs.core.cst$kw$border,cljs.core.cst$kw$font_DASH_family,cljs.core.cst$kw$height,cljs.core.cst$kw$margin],["2rem","border-box","rgba(10,10,10)","top","1.2rem","left","scroll","calc(100vw - 12rem)","white","46rem","none","none","inline-block","none",cljs.core.cst$kw$monospace,"calc(100vh - 8rem)","-2px"]),cljs.core.cst$kw$default_DASH_value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_input) : cljs.core.deref.call(null,clojure_live_regex.core.re_input)),cljs.core.cst$kw$on_DASH_blur,(function (p1__13002_SHARP_){
var G__13014_13023 = clojure_live_regex.core.re_input;
var G__13015_13024 = p1__13002_SHARP_.target.value;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13014_13023,G__13015_13024) : cljs.core.reset_BANG_.call(null,G__13014_13023,G__13015_13024));

var G__13016 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_selected], null));
var G__13017 = false;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13016,G__13017) : cljs.core.reset_BANG_.call(null,G__13016,G__13017));
})], null)], null)], null);
} else {
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,clojure_live_regex.core.output_styles,cljs.core.cst$kw$on_DASH_click,(function (){
var G__13021 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input_DASH_selected], null));
var G__13022 = true;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13021,G__13022) : cljs.core.reset_BANG_.call(null,G__13021,G__13022));
}),cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$3(clojure.string.replace((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_input) : cljs.core.deref.call(null,clojure_live_regex.core.re_input)),cljs.core.re_pattern((cljs.core.truth_((function (){var and__6397__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_string) : cljs.core.deref.call(null,clojure_live_regex.core.re_string));
if(cljs.core.truth_(and__6397__auto__)){
return !(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_string) : cljs.core.deref.call(null,clojure_live_regex.core.re_string))));
} else {
return and__6397__auto__;
}
})())?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_string) : cljs.core.deref.call(null,clojure_live_regex.core.re_string)):"\\w+")),(function (match){
if(cljs.core.coll_QMARK_(match)){
return clojure_live_regex.core.highlight(clojure.string.replace(cljs.core.first(match),cljs.core.second(match),clojure_live_regex.core.surround));
} else {
return clojure_live_regex.core.highlight(match);
}
})),"<p style=\"max-width: 46rem; margin:0;\">","</p>")], null)], null)], null);
}catch (e13018){var e = e13018;
var G__13019_13025 = reagent.core.cursor(clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null));
var G__13020_13026 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13019_13025,G__13020_13026) : cljs.core.reset_BANG_.call(null,G__13019_13025,G__13020_13026));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,clojure_live_regex.core.output_styles], null),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(clojure_live_regex.core.re_input) : cljs.core.deref.call(null,clojure_live_regex.core.re_input))], null);
}}
});
clojure_live_regex.core.app = (function clojure_live_regex$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,clojure_live_regex.core.logo(),clojure_live_regex.core.regex_string(),clojure_live_regex.core.regex_list(),clojure_live_regex.core.regex_output(),clojure_live_regex.core.credit()], null);
});
clojure_live_regex.core.main = (function clojure_live_regex$core$main(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_live_regex.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('clojure_live_regex.core.main', clojure_live_regex.core.main);
