import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  addMonths,
  isBefore,
  isSameDay,
} from "date-fns";

function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();


  const days = eachDayOfInterval({
    start: startOfMonth(selectedDate),
    end: endOfMonth(selectedDate),
  });


  return (
    <div className="calendar">
      {/* Calendar Header */}
      <div className="calendar-header">
        <button onClick={() => setSelectedDate((d) => addMonths(d, -1))}>Previous</button>
        <h2>{format(selectedDate, "MMMM yyyy")}</h2>
        <button onClick={() => setSelectedDate((d) => addMonths(d, 1))}>Next</button>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {days.map((day) => {
          const dateKey = format(day, "yyyy-MM-dd");
          const isToday = isSameDay(day, currentDate); // Check if the day is today
          const isPast = isBefore(day, currentDate) && !isToday; // Check if the day is in the past but not today

          return (
            <div
              key={dateKey}
              className={`calendar-day ${isToday ? "current-date" : ""} ${
                isPast ? "past-date" : ""
              }`}
            >
              <div className="date-label">{format(day, "EEE, MMM d")}</div>
              <div className="note-row">

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cal;