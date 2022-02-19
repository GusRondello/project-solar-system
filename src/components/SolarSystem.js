import React, { Component } from 'react';
import '../App.css';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planeta) => (<PlanetCard
          planetName={ planeta.name }
          planetImage={ planeta.image }
          key={ planeta.name }
        />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
