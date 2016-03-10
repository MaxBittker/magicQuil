(ns browsersketch.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(enable-console-print!)



(defn rotate-me [options]
  (let [; user-provided 'draw' or empty function if it's not present
        draw (:draw options (fn []))
        period 200]
    ; replace user-provided draw with
    ; our custom rotating 'draw'
    (assoc options
      :draw (partial rotating-draw period draw))))


(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0
   :tick 0})


(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 30) 255)
   :angle (+ (:angle state) 0.1)
   :tick (+ (:tick state) 0.007)})

(defn reflect
     "takes a coordinate and returns its 4 reflections"
     [x y]
     (let [w (quot (q/width) 2)
           h (quot (q/height) 2)]
         [[x y]
          [x (+ 0 (* -1 y))]
          [(+  0 (* -1 x)) y]
          [(+ 0 (* -1 x)) (+ 0 (* -1 y))]]))

(defn abs [n] (max n (- n)))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  ; (q/background 240)
  ; Set circle color.
  (q/fill (:color state) 100 (:color state))
  ; Calculate x and y coordinates of the circle.
  (let [angle (:angle state)
        r     (abs (q/sin (:tick state)))
        x     (* 250 r (q/cos angle))
        y     (* 250 r (q/sin angle))]
    ; Move origin point to the center of the sketch.
    (q/with-translation [(/ (q/width) 2)
                         (/ (q/height) 2)]
      (doseq [[x y] (reflect x y)] (q/ellipse x y (* r 200) (* r 200))))))
      ; (q/ellipse y x 50 150))))


(q/defsketch browsersketch
  :host "browsersketch"
  :size [700 700]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
