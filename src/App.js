import "./App.css";
import Header from "./components/Header";

import TeachingSection from "./components/SectionTeaching";
import DifferencesSection from "./components/SectionDifferences";
import IntroSection from "./components/IntroSection";

export default function App() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </div>
  );
}