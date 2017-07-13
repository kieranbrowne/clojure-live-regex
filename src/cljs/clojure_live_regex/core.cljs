(ns clojure-live-regex.core
  (:require
   [reagent.core :as r :refer [atom cursor]]))

(when js/goog.DEBUG
  (enable-console-print!))

(def state (atom {:re-string (str "(w)\\w+")
                  :re-input "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn."
                  :error false
                  :input-selected false
                  }))

(def re-string (cursor state [:re-string]))
(def re-input (cursor state [:re-input]))

(defn logo []
  [:div {
           :style {:font-family :sans-serif
                   :font-size "1.8rem"
                   :height "4rem"
                   :line-height "2rem"
                   :padding "1rem 1rem"
                   :float "left"
                   :display "inline-block"
                   :border "none"
                   :font-weight "bold"
                   :background "rgb(88,118,255)"
                   :color "rgb(250,247,246)"
                   :outline :none
                   :width "12rem"
                   :box-sizing :border-box
                   }}
   "Regex" [:sub {:style {:line-height 0 :font-size "1.2rem" :font-weight "200"}} "clj"]
   ])

(defn credit []
  [:div
   [:a {:href "http://kieranbrowne.com"
        :style
        {:position "fixed"
         :bottom "2rem"
         :right "2rem"
         :display "block"
         :font-family "sans-serif"
         :text-align "right"
         :color "rgba(0,0,0,0.1)"
         :font-weight "bold"
         :text-decoration "none"}
        } "K"]]
  )

(defn regex-string []
  [:input {:type "text"
           :style {:font-family :monospace
                 :font-size "1.2rem"
                   :line-height "4rem"
                   :height "4rem"
                   :float "left"
                   :padding "1rem 2rem"
                   :display "inline-block"
                   :border "none"
                   :background (if @(cursor state [:error]) "rgb(255,56,10)" "rgb(10,10,10)")
                   :color "rgb(250,247,246)"
                   :outline :none
                   :box-sizing :border-box
                   :width "calc(100vw - 12rem)"
                   }
           :value @re-string
           :on-click #(reset! (cursor state [:input-selected]) false)
           :on-change #(do (reset! re-string (.-value (.-target %)))
                           (reset! (cursor state [:error]) false)

                           )
           }
   ])

(defn regex-list []
  (try
    (into
     [:div {:on-click #(reset! (cursor state [:input-selected]) false)
            :style {:font-family :monospace
                    :font-size "1.2rem"
                    :float "left"
                    :line-height "2rem"
                    :height "calc(100vh - 4rem)"
                    :overflow :scroll
                    :list-style "none"
                    :padding "2rem 0rem"
                    :display "inline-block"
                    :border "none"
                    :outline :none
                    :width "12rem"
                    :box-sizing :border-box
                    }}]

           (map
            (fn [match i] (if (coll? match)
                     ;; (into [:ul])
                     [:li
                      {:style {:background
                               (if (even? i)
                                 "rgba(255,255,255,1)"
                                 "none")
                               :padding "0rem 1rem"
                               }}
                      (str match)]
                     ;; [:li match]
                     [:li {:style {:background
                                   (if (even? i)
                                     "rgba(255,255,255,1)"
                                     "none")
                                   :padding "0rem 1rem"
                                   }}
                      match]))

                 (re-seq
                  (re-pattern (if (and  @re-string (not (empty? @re-string)))
                                @re-string "\\w+"))
                  @re-input)
                 (range 40)
             ))
    (catch :default e
      (reset! (cursor state [:error]) true)
      [:div
       {:style
        {:float "left"
         :width "12rem"
         :height "calc(100vh - 4rem)"}}])
    ))



(defn wrap-str
  ([s before after part]
   (str before (if part (nth s part) s) after))
  ([s before after] (wrap-str s before after nil)))

(defn highlight [s]
  (wrap-str
   s "<span style=\"background-color: rgb(88,118,255); color: rgb(250,247,246)\">"
   "</span>"))

(defn surround [s]
  (wrap-str s
   "<span style=\"box-shadow: 0 0 0 2px rgb(255,56,10);\">"
   "</span>"))

(def output-styles
  {:font-family :monospace
   :font-size "1.2rem"
   :line-height "2rem"
   :color "rgba(10,10,10)"
   :overflow "scroll"
   :width "calc(100vw - 12rem)"
   :margin "0 auto"
   :padding "2rem 2rem"
   :background "white"
   :vertical-align "top"
   :float "left"
   :height "calc(100vh - 4rem)"
   :display "inline-block"
   :white-space "pre-wrap"
   :border "none"
   :outline "none"
   :box-sizing "border-box"
   })

(defn regex-output []
  (if @(cursor state [:input-selected])
    [:div {:style output-styles}
     [:textarea
      {:style {:max-width "46rem"
               :font-family :monospace
               :font-size "1.2rem"
               :line-height "2rem"
               :color "rgba(10,10,10)"
               :overflow "scroll"
               :width "calc(100vw - 12rem)"
               :background "white"
               :vertical-align "top"
               :float "left"
               :height "calc(100vh - 8rem)"
               :resize "none"
               :display "inline-block"
               :border "none"
               :outline "none"
               :box-sizing "border-box"
               :margin "-2px"}
      :default-value @re-input
      :on-blur #(do (reset! re-input (.-value (.-target %)))
                  (reset! (cursor state [:input-selected]) false))
      }]]

    (try
      [:div
       {:style output-styles
        :on-click #(reset! (cursor state [:input-selected]) true)
        :dangerouslySetInnerHTML
        {:__html
         (wrap-str
          (clojure.string/replace
           @re-input
           (re-pattern (if (and  @re-string (not (empty? @re-string)))
                         @re-string "\\w+"))
           (fn [match]
             (if (coll? match)
               (-> match
                   ;; get full match
                   first
                   ;; replace submatches
                   (clojure.string/replace
                    (second match)
                    surround
                    )
                   ;; highlight entire str
                   (highlight)
                   )
               ;; for plain match
               (highlight match)
               )))
          "<p style=\"max-width: 46rem; margin:0;\">"
          "</p>"
          )}}]

      (catch :default e
        (reset! (cursor state [:error]) true)
        [:div
         {:style output-styles}
         @re-input
         ]))))

(defn app []
  [:div
   (logo)
   (regex-string)
   (regex-list)
   (regex-output)
   (credit)
   ])

(defn ^:export main []
  (r/render
    [app] (.getElementById js/document "app")))
