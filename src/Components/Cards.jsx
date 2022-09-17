import React, {useState} from 'react';
import CardItem from './CardItem';

const Cards = ({players, user, setUser}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'space-around'}}>
			{players.map((player) => <CardItem user={user} player={player} setUser={setUser} />)}
		</div>
	);
};

export default Cards;
