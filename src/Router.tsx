import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { Developed } from "./pages/Developed";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";





export function Router() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="projetos" element={<Developed />} />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:path" element={<Post />} />
    </Routes>
  );
}
