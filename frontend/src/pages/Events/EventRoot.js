import { Outlet } from 'react-router-dom';

import EventsNavigation from '../../components/Events/EventsNavigation';

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;