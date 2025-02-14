import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calenderpage.css";

const localizer = momentLocalizer(moment);

const Calenderpage = ({ list }) => {
  const activeTasks = list.filter((task) => !task.completed); // Visa ej klarmarkerade uppgifter

  if (activeTasks.length === 0) return <p>Inga uppgifter i kalendern...</p>;

  const events = activeTasks.map((task) => {
    const startDate = new Date(`${task.date}T${task.time || "00:00"}`);
    let endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

    if (endDate.getDate() !== startDate.getDate()) {
      endDate = new Date(startDate);
      endDate.setHours(23, 59, 0);
    }

    return {
      id: task.id,
      title: task.todo,
      start: startDate,
      end: endDate,
      allDay: false,
      description: task.description,
    };
  });

  return (
    <div style={{ height: "700px", padding: "20px " }}>
      <h1>Kalender</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, backgroundColor: "#f0f0f0", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Calenderpage;
