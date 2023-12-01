import About from "../About";
import Main from "../Main";
import Album from "../Album";

export const routes =[
  {path: '/Persik_project/about', component: About, exact: true},
  { path: '/Persik_project', component: Main, exact: true },
  {path: '/Persik_project/album', component: Album, exact: true},
]