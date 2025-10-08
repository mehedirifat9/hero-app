import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './assets/Pages/Home.jsx'
import Apps from './assets/Pages/Apps.jsx'
import Installation from './assets/Pages/Installation.jsx'
import MainLayout from './assets/Layouts/MainLayout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    hydrateFallbackElement: <p>...Loading</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('../public/trendingData.json'),
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/installation',
        Component: Installation,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
