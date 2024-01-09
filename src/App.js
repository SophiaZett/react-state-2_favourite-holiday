import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");
  const holidayInputref = useRef(null); //(bonus aufgabe) wir brauchen eine referenz (die useRef - Hook)

  function handleSubmit(event) {
    event.preventDefault();
    const holidayValue = event.target.holiday.value;
    const dateValue = event.target.date.value;
    setHoliday(holidayValue);
    setDate(dateValue);

    // (bonus aufgabe)Zurücksetzen der Formularfelder
    setHoliday("");
    setDate("");

    // (bonus aufgabe) Fokus auf das Holiday-Feld. bzgl current: .current ist der Teil der Referenz, der tatsächlich auf das Element selbst zugreift.
    holidayInputref.current.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          ref={holidayInputref} // (bonus aufgabe) verknüpfung der referenz mit dem holiday-feld
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          value={holiday} //(bonus aufgabe)
          onChange={(event) => setHoliday(event.target.value)} //(bonus aufgabe)
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date} //(bonus aufgabe)
          onChange={(event) => setDate(event.target.value)} //(bonus aufgabe)
        />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
