import { SetStateAction, useState } from 'react';
import W12MHeader from './W12MHeader';
//

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('');
	const [planetName, setPlanetName] = useState('');
	const [numBeings, setNumBeings] = useState('');
	const [sumFour, setSumFour] = useState('');
	const [survivalReason, setSurvivalReason] = useState('');


	const handleSpeciesName = (event: { target: { value: SetStateAction<string>; }; }) => {
		setSpeciesName(event.target.value);
	  };
	
	  const handlePlanetName = (event: { target: { value: SetStateAction<string>; }; }) => {
		setPlanetName(event.target.value);
	  };

	  const handleNumBeings = (event: { target: { value: SetStateAction<string>; }; }) => {
		setNumBeings(event.target.value);
	  };

	  const handleSumFour = (event: { target: { value: SetStateAction<string>; }; }) => {
		setSumFour(event.target.value);
	  };
	
	  const handleSurvivalReason = (event: { target: { value: SetStateAction<string>; }; }) => {
		setSurvivalReason(event.target.value);
	  };
	


	  const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
	  }

	return (
		<section className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */

			<form>
				<div>
					<label htmlFor="speciesName">Species Name</label>
					<input 
						id="speciesName" 
						type="text" 
						value={speciesName}
						onChange={handleSpeciesName}/>
				</div>

				<div>
					<label htmlFor="planetName">Planet Name</label>
					<input 
						id="planetName" 
						type="text"
						value={planetName}
						onChange={handlePlanetName}/>
				</div>	

				<div>
					<label htmlFor="numBeings">Number of beings</label>
					<input 
						id="numBeings"
						type="text"
						value={numBeings}
						onChange={handleNumBeings}
					/>
				</div>

				<div>
					<label htmlFor="sumFour">What is 2+2</label>
					<select 
						id="sumFour"
						value={sumFour}
						onChange={handleSumFour}
					>
						<option>Not 4</option>
						<option>4</option>
					</select>
				</div>

				<div>
					<label htmlFor="reasonFor">Reason for sparing</label>
					<textarea 
						id="reason"
						value={survivalReason}
						onChange={handleSurvivalReason}
					/>
				</div>


			</form>
			
			}

		</section>
	);
};

export default W12MForm;
