import { useEffect, useState } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import { getEvents } from '../../data/data';
import Event from '../../types/Event';

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(getEvents());
  }, []);

  return (
    <>
      <Container>
        <h1>Events</h1>
        {events.map(({ id, title }) => (
          <Grid.Row key={id}>
            <Grid.Column>
              <p>{title}</p>
            </Grid.Column>
          </Grid.Row>
        ))}
      </Container>
    </>
  );
};

export default Events;
