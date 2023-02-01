import About from "../About"
import Container from "../Container"
import Album from "../Album"

export const routes =[
  {path: '/Persik_project/about', component: About, exact: true},
  { path: '/Persik_project', component: Container, exact: true },
  {path: '/Persik_project/album', component: Album, exact: true},
]