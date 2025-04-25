import { useState } from "react";
import '../Components/UI/CSS/Buttons.css';

const AdminEventControl = () => {
  const [newEventTime, setNewEventTime] = useState("");
  const [newEventName, setNewEventName] = useState("");

  const updateEvent = async () => {
    if (!newEventTime || !newEventName) {
      alert("Please fill out both event name and time.");
      return;
    }

    const eventDate = new Date(newEventTime).getTime() + 6 * 60 * 60 * 1000;

    try {
      const response = await fetch("https://comptron-server-2.onrender.com/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eventDate, eventName: newEventName }),
      });

      const data = await response.json();
      console.log("Server Response:", data);

      if (response.ok) {
        alert("Event updated successfully!");
        window.dispatchEvent(new Event("eventUpdated"));
      } else {
        alert("Failed to update event: " + data.error);
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      <h2 className="text-white text-2xl">Update Event Info</h2>

      <input
        type="text"
        placeholder="Enter Event Name"
        className="p-2 rounded border text-black border-white bg-white"
        value={newEventName}
        onChange={(e) => setNewEventName(e.target.value)}
      />

      <input
        type="datetime-local"
        className="p-2 rounded border text-black border-white bg-white"
        value={newEventTime}
        onChange={(e) => setNewEventTime(e.target.value)}
      />

      <button className="button6 mb-5 absolute" onClick={updateEvent}>
        Update
      </button>
    </div>
  );
};

export default AdminEventControl;
