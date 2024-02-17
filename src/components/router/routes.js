import About from "../About";
import Main from "../Main";
import Album from "../Album";

export const routes =[
  {path: '/about', component: About, exact: true},
  { path: '/', component: Main, exact: true },
  {path: '/album', component: Album, exact: true},
]