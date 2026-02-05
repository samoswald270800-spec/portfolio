import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AnalyticsShowcase from './components/AnalyticsShowcase';
import Methodology from './components/Methodology';
import ScrollProgress from './components/ScrollProgress';
import Philosophy from './components/Philosophy';
import Certifications from './components/Certifications';

function App() {
    return (
        <ThemeProvider>
            <ScrollProgress />
            <div className="noise" />
            <div className="scanlines" />
            <CustomCursor />
            <ThemeToggle />

            <main>
                <Hero />
                <Philosophy />
                <Methodology />
                <AnalyticsShowcase />
                <Projects />
                <Experience />
                <Certifications />
                <Skills />
                <Contact />
            </main>
        </ThemeProvider>
    );
}

export default App;
