import { TagProps } from './Tag.props';
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ size = 'm', className, href, color = 'ghost', children, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.primary]: color === 'primary',
				[styles.gray]: color === 'grey',
				[styles.green]: color === 'green',
			})}
			{...props}
		>	{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};