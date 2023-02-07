import { LayoutProps } from './layout.props';
import styles from './Layout.module.css';
import { Footer } from './Footer/Footer';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Component, FunctionComponent } from 'react';

const Layout = ({children, ...props }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header}/>
			<Sidebar className={styles.sidebar}/>
			<div className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer}/>
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component { ...props }/>
			</Layout>
		);
	};
};