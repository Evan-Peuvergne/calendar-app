import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router"

import { Global as GlobalStyles } from "./global.styles"

import { Navigation } from "@shared/navigation"
import { Home } from "@pages/home"
import { Calendar } from "@pages/calendar"
import { Priorize } from "@pages/priorize"
import { Notes } from "@pages/notes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <BrowserRouter>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/priorize" element={<Priorize />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  </>
)
