import { SetStateAction, useState } from 'react';
import W12MForm from './W12MForm';


 //Props need to pass state back to forrm
 interface PlanetNameInputProps {
    planetName: string;
    handlePlanetName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  } 


const PlanetNameInput : React.FC<PlanetNameInputProps> = ( { planetName, handlePlanetName }) => 
  {
    return ( 
        <div>
            <label htmlFor="planetName">Planet Name</label>
            <input 
                id="planetName" 
                type="text"
                value={planetName}
                onChange={handlePlanetName}
            />
  		</div>
  ) 
}; 

 

export default PlanetNameInput;