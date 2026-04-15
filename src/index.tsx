import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router"

import "@tokens"
import "@common/reset.css"
import "@common/base.css"
import { SheetProvider } from "@components/sheet/stack"

import { Navigation } from "@common/navigation"
import { Home } from "@app/home"
import { Calendar } from "@app/calendar"
import { Priorize } from "@app/priorize"
import { Notes } from "@app/notes"

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
