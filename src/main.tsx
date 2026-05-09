import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { Hero } from "./components/mothers-day/Hero";
import { Gallery } from "./components/mothers-day/Gallery";
import {Timeline} from "./components/mothers-day/Timeline";
import {Letter} from "./components/mothers-day/Letter";
import {Lessons} from "./components/mothers-day/Lessons";
import {ThankYou} from "./components/mothers-day/ThankYou";
import {ParticleBackground} from "./components/mothers-day/ParticleBackground";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <ParticleBackground />

      <div className="relative z-10">
        <Hero />
        <Gallery />
        <Timeline />
        <Letter />
        <Lessons />
        <ThankYou />
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);