import { MotionValue } from "framer-motion";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

const Basic = lazy(() => import("@motions/basic"));
const Variants = lazy(() => import("@motions/variants"));
const Gestures = lazy(() => import("@motions/gestures"));
const Motion = lazy(() => import("@motions/motionValues"));
const Scroll = lazy(() => import("@motions/scroll"));
const SVGAnimate = lazy(() => import("@motions/svgAnimate"));
const AnimatePresence = lazy(() => import("@motions/animatePresence"));
const CustomSlider = lazy(() => import("@motions/animatePresenceSlider"));
const LayoutAnimate1 = lazy(() => import("@motions/layoutAnimate1"));
const LayoutAnimate2 = lazy(() => import("@motions/layoutAnimate2"));

const Router = () => {
  return (
    <div>
      <h1>Frame Motion Test</h1>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Basic />} />
            <Route
              path="basic"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Basic />
                </Suspense>
              }
            />
            <Route
              path="variants"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Variants />
                </Suspense>
              }
            />
            <Route
              path="gestures"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Gestures />
                </Suspense>
              }
            />
            <Route
              path="motion"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Motion />
                </Suspense>
              }
            />
            <Route
              path="basic"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Basic />
                </Suspense>
              }
            />
            <Route
              path="scroll"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <Scroll />
                </Suspense>
              }
            />
            <Route
              path="svgAnimate"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <SVGAnimate />
                </Suspense>
              }
            />
            <Route
              path="animatePresence"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <AnimatePresence />
                </Suspense>
              }
            />
            <Route
              path="customSlider"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <CustomSlider />
                </Suspense>
              }
            />
            <Route
              path="layoutAnimate1"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <LayoutAnimate1 />
                </Suspense>
              }
            />
            <Route
              path="layoutAnimate2"
              element={
                <Suspense fallback={<>Loading...</>}>
                  <LayoutAnimate2 />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
