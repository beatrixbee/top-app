import { RatingProps } from './Rating.props';
import cn from 'classnames';
import styles from './Rating.module.css';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from './star.svg';

export const Rating = ({isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);
	
	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<span key=''
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter = {() => changeDisplay(i +1)}
					onMouseLeave = {() => changeDisplay(rating)}
					onClick = {() => onClick(i +1)}
				>	
					<StarIcon 
						tabIndex = {(isEditable ? 0 : -1)}
						onKeyDown = {(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if(!isEditable){
			return;
		}
		constructRating(i);
	};
	
	const onClick = (i: number) => {
		if(!isEditable || !setRating){
			return;
		}
		setRating(i);
	};
	
	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		if(e.code != 'Space' || !setRating){
			return;
		}
		setRating(i);
	};

	return (
		<div { ...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};