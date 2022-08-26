import About from "../About"
import Container from "../Container"
import Album from "../Album"

export const routes =[
  {path: '/about', component: About, exact: true},
  { path: '/container', component: Container, exact: true },
  {path: '/album', component: Album, exact: true},
]
