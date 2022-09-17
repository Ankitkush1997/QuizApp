import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

const CardItem = ({player, user, setUser}) => {
	const [ playerBuzzer, setPlayerBuzzer ] = useState(null);
	const handleBuzzer = (value) => {
		setUser(player.name);
		setPlayerBuzzer(value);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: `${playerBuzzer ? 'green' : '#FFBD00'}`,
				padding: '0.2rem 4rem'
			}}
		>
			<p style={{fontWeight: 'bold'}}>Name :{player.name} </p>
			<p style={{fontWeight: 'bold'}}>Score:{player.points}</p>
			<Button
				onClick={() => handleBuzzer(player.name)}
				style={{backgroundColor: '#EDECED', color: 'black', border: 'none', fontWeight: 'bold'}}
			>
				BUZZER
			</Button>
		</div>
	);
};

export default CardItem;
