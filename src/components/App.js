import React from 'react';
import Countdown from './Countdown';
import Hero from './Hero';
import NavBar from './Navbar';
import OurStory from './OurStory';
import Rsvp from './Rsvp';

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Countdown />
      <OurStory />
      <Rsvp />
    </div>
  );
}
