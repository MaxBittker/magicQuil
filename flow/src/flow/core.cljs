(ns flow.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))


(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :fish (take 5 (repeatedly genfish))})


(defn genfish []
  {:x (rand-int (q/width)) :y 0 :s 1})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  (let [fish (tick (grow (:fish state)))]
    (js/console.log (count fish))
    {:color (mod (+ (:color state) 0.7) 255)
     :fish fish}))

(defn tick [fish]
  (filter (fn [f] (and (< (:y f) (q/height)) (< (:x f) (q/width)) (> (:x f) 0))) (map (partial tickfish fish) fish)))

(defn grow [fish]
  (if (or (> (count fish) 50) (< (rand-int 5) 4))
    fish
    (concat fish (take 1 (repeatedly genfish)))))


(defn tickfish [fish f]
  (let [dx (reduce (fn [a b] (+ a (dxf b f))) 0 fish)]
    ; (js/console.log dx)
    {:x (+ (clamp dx -0.5 0.5) (:x f)) :y (+ (:y f) (:s f)) :s (:s f)}))

(defn abs [n] (max n (- n)))

(defn clamp "Clamp a to (min-a, max-x)"
  [a min-a max-a]
  (min max-a (max min-a a)))

(defn dxf [a b]
  ; (js/console.log (:x a) (:x b))
  (let [close (/ 1 (abs (- (:y a) (:y b))))]
    ; (js/console.log close)
    (if (or (> close 100) (= (:x a) (:x b)))
      0
      (/ 1 (* -1 close (- (:x a) (:x b)))))))

(defn drawfish [f]
  ; (js/console.log (:x fish))
  (q/ellipse (:x f) (:y f) 25 25))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  ; (q/background (+ 100 (:color state)) 100 255 50)
  ; Set circle color.
  (q/no-stroke)
  (q/fill 100 0 155 0.1)
  (q/rect -1 -1 (+ 1 (q/width)) (+ 1(q/height)))
  (q/fill (:color state) 100 155)

  ; Calculate x and y coordinates of the circle.
  (let [angle (:angle state)
        x (:x state)
        y (:y state)]
    ; Move origin point to the center of the sketch.
    ; (q/with-translation [(/ (q/width) 2)
    ;                      (/ (q/height) 2)]
    (doseq [f (:fish state)] (drawfish f))))
    ;   ; Draw the circle.
      ; (q/ellipse x y 100 100)
      ; (q/ellipse y x 100 100)))

(q/defsketch flow
  :host "flow"
  :size [1500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
