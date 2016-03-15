(ns bounce.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def g (/ 10 60))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 60)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :x 250
   :y 50
   :vx 10
   :vy 0})


(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  (let [newvy (if (< 450 (:y state))
                (* (:vy state) -0.985)
                (:vy state))
        newxy (if (or
                    (> 50 (:x state))
                    (< 450 (:x state)))
                  (* (:vx state) -1)
                  (:vx state))]

    ; (js/console.log (:x state) newxy)
    {:color (mod (+ (:color state) 0.7) 255)
     :x (+ (:x state) newxy)
     :y (+ (:y state) newvy)
     :vx newxy
     :vy (* 1 (+ newvy g))}))


(defn reflect
    "takes a coordinate and returns its 4 reflections"
    [x y]
    (let [w (quot (q/width) 2)
          h (quot (q/height) 2)]
        [[x y]
         [x (+ 0 (* -1 y))]
         [(+  0 (* -1 x)) y]
         [(+ 0 (* -1 x)) (+ 0 (* -1 y))]]))


(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  ; (q/background (+ 100 (:color state)) 100 255 50)
  ; Set circle color.
  (q/fill 100 0 155 0.5)
  (q/rect -1 -1 (+ 1 (q/width)) (+ 1(q/height)))
  (q/fill (:color state) 100 155)
  ; Calculate x and y coordinates of the circle.
  (let [angle (:angle state)
        x (:x state)
        y (:y state)]
    ; Move origin point to the center of the sketch.
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (doseq [[x y] (reflect x y)] (q/ellipse x y 100 100)))))
    ;   ; Draw the circle.
      ; (q/ellipse x y 100 100)
      ; (q/ellipse y x 100 100)))

(q/defsketch bounce
  :host "bounce"
  :size [1100 1100]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
