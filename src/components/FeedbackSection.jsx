import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <section>
      <h3>Feedback</h3>

      <form>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          className="control"
          id="name"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">What problem</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
        >
          <option value="error">Error</option>
          <option value="help">Help</option>
          <option value="kina">Kina</option>
          <option value="pena">Pena</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button>Send feedback</Button>
      </form>
    </section>
  );
}
