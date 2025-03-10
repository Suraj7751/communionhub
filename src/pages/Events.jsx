import { useState } from "react";
import Navbar from "../components/Navbar";

const Events = () => {
  const [events, setEvents] = useState([
    { title: "Charity Drive", date: "2025-04-15", location: "City Park", category: "Charity" },
    { title: "Interfaith Conference", date: "2025-04-20", location: "Grand Hall", category: "Religious" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "" });

  const addEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.category) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", location: "", category: "" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Events</h2>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Add New Event</h3>
          <input type="text" placeholder="Title" className="border p-2 m-1" value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} />
          <input type="date" className="border p-2 m-1" value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} />
          <input type="text" placeholder="Location" className="border p-2 m-1" value={newEvent.location} onChange={e => setNewEvent({ ...newEvent, location: e.target.value })} />
          <select className="border p-2 m-1" value={newEvent.category} onChange={e => setNewEvent({ ...newEvent, category: e.target.value })}>
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <button onClick={addEvent} className="bg-green-500 px-4 py-2 text-white rounded-lg">Add Event</button>
        </div>

        <h3 className="text-lg font-semibold mt-4">Event Listings</h3>
        <div className="space-y-2">
          {events.map((event, index) => (
            <div key={index} className="border p-3 rounded-lg bg-gray-100">
              <h4 className="text-xl font-semibold">{event.title}</h4>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Category: {event.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
