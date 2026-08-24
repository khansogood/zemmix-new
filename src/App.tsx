import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Why from "./components/Why";
import Projects from "./components/Projects";
import Advantages from "./components/Advantages";
import Services from "./components/Services";
import Terms from "./components/Terms";
import Builds from "./components/Builds";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Messenger from "./components/Messenger";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Stats />
                <Why />
                <Projects />
                <Advantages />
                <Services />
                <Terms />
                <Builds />
                <Contacts />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
        <Messenger />
      </div>
    </BrowserRouter>
  );
}