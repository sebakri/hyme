import { Route, Routes } from "solid-app-router"
import type { Component } from "solid-js"
import Navigation from "./Navigation/navigation"
import Dashboard from "./pages/Dashboard/Dashboard"
import DevicesPage from "./pages/Devices/Devices"
import RoomsPage from "./pages/Rooms/Rooms"

const App: Component = () => {
  return (
    <div class="min-h-screen grid grid-rows-[min-content,1fr] xl:max-w-screen-xl mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/rooms" element={<RoomsPage />} />
        </Routes>
    </div>
  )
}

export default App
