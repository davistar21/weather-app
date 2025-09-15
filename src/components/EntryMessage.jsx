import React, { useMemo } from "react";

const weatherMessages = [
  "Clear skies and sunny vibes ahead!",
  "Looks like rain — don’t forget your umbrella!",
  "Cloudy with a chance of cozy.",
  "The stars are hiding, but they're still there.",
  "Blue skies, nothing but blue skies.",
  "Storm’s brewing — stay safe out there!",
  "It’s the kind of sky that makes you want to write poetry.",
  "The sky's painting with every shade of sunset.",
  "Windy whispers in the clouds today.",
  "It’s gloomy, but that’s a mood too.",
];

const EntryMessage = (props) => {
  const randomMessage = useMemo(() => {
    const index = Math.floor(Math.random() * weatherMessages.length);
    return weatherMessages[index];
  }, []); //

  return <section className="entry-message">{randomMessage}</section>;
};

export default EntryMessage;
