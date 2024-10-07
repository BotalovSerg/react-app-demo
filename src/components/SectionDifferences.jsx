import { useState } from "react";
import { differences } from "../data";
import Button from "./Button/Button";

export default function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <Button
        isActive={contentType === "one"}
        buttonCliked={() => handleClick("one")}
      >
        Click 1
      </Button>
      <Button
        isActive={contentType === "two"}
        buttonCliked={() => handleClick("two")}
      >
        Click 2
      </Button>
      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <div>Press on button</div>
      )}
    </section>
  );
}
