import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calenderpage.css";

const localizer = momentLocalizer(moment);

const Calenderpage = ({ list }) => {
  const activeTasks = list.filter((task) => !task.completed);

  if (activeTasks.length === 0) return <p>No tasks in the calendar...</p>;

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
    <div
      style={{
        height: "500px",
        padding: "20px ",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Kalender</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, backgroundColor: "#f0f0f0", borderRadius: "8px" }}
      />
    </div>
  );
};

export default Calenderpage;
