import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';
import { Search } from '@/components';


export const Sidebar = ({className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar)} { ...props }>
			<Logo className={styles.logo} />
			<Search />
			<Menu />
		</div>
	);
};