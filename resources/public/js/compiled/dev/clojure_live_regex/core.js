// Compiled by ClojureScript 1.9.229 {}
goog.provide('clojure_live_regex.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(cljs.core.truth_(goog.DEBUG)){
cljs.core.enable_console_print_BANG_.call(null);
} else {
}
clojure_live_regex.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-string","re-string",379541800),[cljs.core.str("(w)\\w+")].join(''),new cljs.core.Keyword(null,"re-input","re-input",2060547436),"The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.",new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"input-selected","input-selected",-1484506560),false], null));
clojure_live_regex.core.re_string = reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-string","re-string",379541800)], null));
clojure_live_regex.core.re_input = reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-input","re-input",2060547436)], null));
clojure_live_regex.core.logo = (function clojure_live_regex$core$logo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["2rem",new cljs.core.Keyword(null,"border-box","border-box",1278054804),"rgb(250,247,246)","1.8rem","bold","left","12rem","rgb(88,118,255)","1rem 1rem",new cljs.core.Keyword(null,"none","none",1333468478),"inline-block","none",new cljs.core.Keyword(null,"sans-serif","sans-serif",-1598160348),"4rem"])], null),"Regex",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2rem",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"200"], null)], null),"clj"], null)], null);
});
clojure_live_regex.core.credit = (function clojure_live_regex$core$credit(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://kieranbrowne.com",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["rgba(0,0,0,0.1)","right","2rem","bold","2rem","none","block","fixed","sans-serif"])], null),"K"], null)], null);
});
clojure_live_regex.core.regex_string = (function clojure_live_regex$core$regex_string(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["4rem",new cljs.core.Keyword(null,"border-box","border-box",1278054804),"rgb(250,247,246)","1.2rem","left","calc(100vw - 12rem)",(cljs.core.truth_(cljs.core.deref.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null))))?"rgb(255,56,10)":"rgb(10,10,10)"),"1rem 2rem",new cljs.core.Keyword(null,"none","none",1333468478),"inline-block","none",new cljs.core.Keyword(null,"monospace","monospace",2089559697),"4rem"]),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,clojure_live_regex.core.re_string),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-selected","input-selected",-1484506560)], null)),false);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__8227_SHARP_){
cljs.core.reset_BANG_.call(null,clojure_live_regex.core.re_string,p1__8227_SHARP_.target.value);

return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)),false);
})], null)], null);
});
clojure_live_regex.core.regex_list = (function clojure_live_regex$core$regex_list(){
try{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-selected","input-selected",-1484506560)], null)),false);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["2rem",new cljs.core.Keyword(null,"border-box","border-box",1278054804),"1.2rem","left",new cljs.core.Keyword(null,"scroll","scroll",971553779),"none","12rem","2rem 0rem",new cljs.core.Keyword(null,"none","none",1333468478),"inline-block","none",new cljs.core.Keyword(null,"monospace","monospace",2089559697),"calc(100vh - 4rem)"])], null)], null),cljs.core.map.call(null,(function (match,i){
if(cljs.core.coll_QMARK_.call(null,match)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core.even_QMARK_.call(null,i))?"rgba(255,255,255,1)":"none"),new cljs.core.Keyword(null,"padding","padding",1660304693),"0rem 1rem"], null)], null),[cljs.core.str(match)].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core.even_QMARK_.call(null,i))?"rgba(255,255,255,1)":"none"),new cljs.core.Keyword(null,"padding","padding",1660304693),"0rem 1rem"], null)], null),match], null);
}
}),cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.deref.call(null,clojure_live_regex.core.re_string);
if(cljs.core.truth_(and__6397__auto__)){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,clojure_live_regex.core.re_string)));
} else {
return and__6397__auto__;
}
})())?cljs.core.deref.call(null,clojure_live_regex.core.re_string):"\\w+")),cljs.core.deref.call(null,clojure_live_regex.core.re_input)),cljs.core.range.call(null,(40))));
}catch (e8229){var e = e8229;
cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)),true);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"width","width",-384071477),"12rem",new cljs.core.Keyword(null,"height","height",1025178622),"calc(100vh - 4rem)"], null)], null)], null);
}});
clojure_live_regex.core.wrap_str = (function clojure_live_regex$core$wrap_str(var_args){
var args8230 = [];
var len__7484__auto___8233 = arguments.length;
var i__7485__auto___8234 = (0);
while(true){
if((i__7485__auto___8234 < len__7484__auto___8233)){
args8230.push((arguments[i__7485__auto___8234]));

var G__8235 = (i__7485__auto___8234 + (1));
i__7485__auto___8234 = G__8235;
continue;
} else {
}
break;
}

var G__8232 = args8230.length;
switch (G__8232) {
case 4:
return clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8230.length)].join('')));

}
});

clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$4 = (function (s,before,after,part){
return [cljs.core.str(before),cljs.core.str((cljs.core.truth_(part)?cljs.core.nth.call(null,s,part):s)),cljs.core.str(after)].join('');
});

clojure_live_regex.core.wrap_str.cljs$core$IFn$_invoke$arity$3 = (function (s,before,after){
return clojure_live_regex.core.wrap_str.call(null,s,before,after,null);
});

clojure_live_regex.core.wrap_str.cljs$lang$maxFixedArity = 4;

clojure_live_regex.core.highlight = (function clojure_live_regex$core$highlight(s){
return clojure_live_regex.core.wrap_str.call(null,s,"<span style=\"background-color: rgb(88,118,255); color: rgb(250,247,246)\">","</span>");
});
clojure_live_regex.core.surround = (function clojure_live_regex$core$surround(s){
return clojure_live_regex.core.wrap_str.call(null,s,"<span style=\"box-shadow: 0 0 0 2px rgb(255,56,10);\">","</span>");
});
clojure_live_regex.core.output_styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["2rem","border-box","rgba(10,10,10)","top","pre-wrap","1.2rem","left","scroll","calc(100vw - 12rem)","white","2rem 2rem","none","inline-block","none",new cljs.core.Keyword(null,"monospace","monospace",2089559697),"calc(100vh - 4rem)","0 auto"]);
clojure_live_regex.core.regex_output = (function clojure_live_regex$core$regex_output(){
if(cljs.core.truth_(cljs.core.deref.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-selected","input-selected",-1484506560)], null))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),clojure_live_regex.core.output_styles], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],["2rem","border-box","rgba(10,10,10)","top","1.2rem","left","scroll","calc(100vw - 12rem)","white","46rem","none","none","inline-block","none",new cljs.core.Keyword(null,"monospace","monospace",2089559697),"calc(100vh - 8rem)","-2px"]),new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,clojure_live_regex.core.re_input),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (p1__8237_SHARP_){
cljs.core.reset_BANG_.call(null,clojure_live_regex.core.re_input,p1__8237_SHARP_.target.value);

return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-selected","input-selected",-1484506560)], null)),false);
})], null)], null)], null);
} else {
try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),clojure_live_regex.core.output_styles,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-selected","input-selected",-1484506560)], null)),true);
}),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),clojure_live_regex.core.wrap_str.call(null,clojure.string.replace.call(null,cljs.core.deref.call(null,clojure_live_regex.core.re_input),cljs.core.re_pattern.call(null,(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.deref.call(null,clojure_live_regex.core.re_string);
if(cljs.core.truth_(and__6397__auto__)){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,clojure_live_regex.core.re_string)));
} else {
return and__6397__auto__;
}
})())?cljs.core.deref.call(null,clojure_live_regex.core.re_string):"\\w+")),(function (match){
if(cljs.core.coll_QMARK_.call(null,match)){
return clojure_live_regex.core.highlight.call(null,clojure.string.replace.call(null,cljs.core.first.call(null,match),cljs.core.second.call(null,match),clojure_live_regex.core.surround));
} else {
return clojure_live_regex.core.highlight.call(null,match);
}
})),"<p style=\"max-width: 46rem; margin:0;\">","</p>")], null)], null)], null);
}catch (e8239){var e = e8239;
cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,clojure_live_regex.core.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)),true);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),clojure_live_regex.core.output_styles], null),cljs.core.deref.call(null,clojure_live_regex.core.re_input)], null);
}}
});
clojure_live_regex.core.app = (function clojure_live_regex$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure_live_regex.core.logo.call(null),clojure_live_regex.core.regex_string.call(null),clojure_live_regex.core.regex_list.call(null),clojure_live_regex.core.regex_output.call(null),clojure_live_regex.core.credit.call(null)], null);
});
clojure_live_regex.core.main = (function clojure_live_regex$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure_live_regex.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('clojure_live_regex.core.main', clojure_live_regex.core.main);

//# sourceMappingURL=core.js.map?rel=1499953726927