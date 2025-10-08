import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './assets/Pages/Home.jsx'
import Apps from './assets/Pages/Apps.jsx'
import Installation from './assets/Pages/Installation.jsx'
import MainLayout from './assets/Layouts/MainLayout.jsx'
import CardDetails from './assets/Component/CardDetails.jsx'
import ErrorPage from './assets/Component/ErrorPage.jsx'


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
        loader: () => fetch('../public/AllData.json'),
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/details/:id',
        loader: () => fetch('../public/AllData.json'),
        Component: CardDetails
      },
      {
        path: '/apps/details/:id',
        Component: CardDetails,
        loader: () => fetch('../public/AllData.json'),
        errorElement: <ErrorPage />
      },
      {
        path: '*',
        Component: ErrorPage
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
