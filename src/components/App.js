import React from 'react';
import './App.css';
import Countdown from './countdown';
import Hero from './Hero';
import NavBar from './navbar';
import OurStory from './ourStory';
import Gallery from './Gallery';
import Rsvp from './rsvp';

export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Countdown />
      <OurStory />
      <Gallery />
      <Rsvp />
    </div>
  );
}
