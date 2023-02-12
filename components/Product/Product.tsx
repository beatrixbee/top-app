import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';


export const Product = ({ product, className, ...props}: ProductProps): JSX.Element => {

	return (
		<div className={cn(className, styles.product)} {...props}>
			{product.title}
		</div>
	);
};