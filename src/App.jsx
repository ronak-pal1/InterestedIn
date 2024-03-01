import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontPage from "./pages/FrontPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import UniversityPage from "./pages/UniversityPage";
import SingleUniPage from "./pages/SingleUniPage";
import MentorsPage from "./pages/MentorsPage";
import BlogsPage from "./pages/BlogsPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import SingleMentorPage from "./pages/SingleMentorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/universities" element={<UniversityPage />} />
        <Route path="/universities/:id" element={<SingleUniPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/mentors/:id" element={<SingleMentorPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
