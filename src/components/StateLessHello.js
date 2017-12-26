import React from 'react';
// TRADE-OFF você  não extender este compontente?
// Composição? Quando precisar reutilizar este componente?


const HelloWorld = ({ name }) => (
  <div>{`Hi ${name}`}</div>
);

export default HelloWorld;
