import { React, useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import TeachingSection from "./components/SectionTeaching";
import DifferencesSection from "./components/SectionDifferences";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";

export default function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <div className="App">
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedbackSection />}
      </main>
    </div>
  );
}
