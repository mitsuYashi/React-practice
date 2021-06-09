import React from 'react';

export default function FoodVal(props) {
	return (
        <>
            {props.food.map((data) => {
                return (
                    <p>{data}</p>
                );
            })}
        </>
	);
}