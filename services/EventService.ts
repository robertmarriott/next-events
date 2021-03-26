import events from '../data/events.json';
import DateFilter from '../types/DateFilter';
import Event from '../types/Event';

class EventsService {
  private events: Event[];

  constructor() {
    this.events = events;
  }

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | null {
    const events = this.events.filter((event) => event.id === id);

    if (events.length) {
      return events[0];
    }

    return null;
  }

  getFeaturedEvents(): Event[] {
    return this.events.filter((event) => event.isFeatured);
  }

  getFilteredEvents(dateFilter: DateFilter): Event[] {
    const { year, month, day } = dateFilter;
    const filteredEvents = this.events.filter((event) => {
      const eventDate = new Date(event.date);

      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month &&
        eventDate.getDay() === day
      );
    });

    return filteredEvents;
  }
}

export default EventsService;
