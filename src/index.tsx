import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router"

import "./global.css"
import { SheetProvider } from "@components/sheet/stack"

import { Navigation } from "@shared/navigation"
import { Home } from "@pages/home"
import { Calendar } from "@pages/calendar"
import { Priorize } from "@pages/priorize"
import { Notes } from "@pages/notes"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <BrowserRouter>
      <Navigation />
      <SheetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/priorize" element={<Priorize />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </SheetProvider>
    </BrowserRouter>
  </>
)
