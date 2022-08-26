import React from 'react'
import { Route, Routes } from "react-router-dom";
import Container from './Container';
import { routes } from './router/routes'

export default function AppRouter() {
  return (
    <Routes>
      {routes.map(route =>
        <Route
          element={<route.component/>}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      )}
      <Route path="/*" element={<Container />}/>
    </Routes>
  )
}
