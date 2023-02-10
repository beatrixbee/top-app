import { AdvantageProps } from './Advantage.props';
import styles from './Advantage.module.css';
import { Htag } from '../Htag/Htag';
import { Ptag } from '../Ptag/Ptag';
import CheckIcon from './check.svg';

export const Advantage = ({ advantages }: AdvantageProps): JSX.Element => {
	return (
		<>
			{advantages.map(a => (
				<div key={a._id} className={styles.advantage}>
					<CheckIcon />
					<div className={styles.title}>{a.title}</div>
					<div className={styles.vline}/>
					<div className={styles.description}>{a.description}</div>
				</div>
			))}
		</>
	);
};