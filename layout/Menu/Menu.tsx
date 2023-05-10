import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import cn from 'classnames';
import { useContext, KeyboardEvent, useState } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '@/helpers/helpers';
import { motion, useReducedMotion } from 'framer-motion';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const shouldReduceMotion = useReducedMotion();
	const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>();
	const openSecondlevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				setAnnounce(m.isOpened ? 'closed' : 'opened');
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const openSecondlevelKey = (key: KeyboardEvent, secondCategory: string) => {
		if (key.code == 'Space' || key.code == 'Enter') {
			key.preventDefault();
			openSecondlevel(secondCategory);
		}
	};

	const router = useRouter();

	const variants = {
		visible: {
			marginBottom: 20,
			transition: shouldReduceMotion ? {} : {
				when: 'beforeChildren',
				staggerChildren: 0.1 
			}
		},
		hidden: {
			// added transition to 'hidden'
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.01 
			},
			marginBottom: 0
		}
	};

	const variantsChildren = {
		visible: {
			opacity: 1,
			height: 'auto' //should reconsider due to the different size of children item
		},
		hidden: {
			opacity: shouldReduceMotion ? 1 : 0,
			height: 0
		}
	};

	const buildFirstLevel = () => {
		return (
			<ul className={styles.firstLevelList}>
				{firstLevelMenu.map(m => (
					<li key={m.route} aria-expanded={m.id === firstCategory}>
						<Link href={`/${m.route}`} legacyBehavior>
							<a>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id === firstCategory
								})}>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</a>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles.secondBlock}>
				{menu.map(m => {

					if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
						m.isOpened = true;
					}

					return (
						<li key={m._id.secondCategory}>
							<button
								onKeyDown={(key: KeyboardEvent) => openSecondlevelKey(key, m._id.secondCategory)}
								className={styles.secondLevel}
								onClick={() => openSecondlevel(m._id.secondCategory)}
								aria-expanded={m.isOpened}
							>
								{
									m._id.secondCategory
								}
							</button>
							<motion.ul 
								layout
								variants={variants}
								initial={m.isOpened ? 'visible' : 'hidden'}
								animate={m.isOpened ? 'visible' : 'hidden'}
								className={styles.secondLevelBlock}
							>
								{buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
							</motion.ul>
						</li>
					);
				})}
			</ul>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) => {
		return (
			pages.map(p => {
				return (
					<motion.li 
						key={p._id}
						variants={variantsChildren}		
					>
						<Link  href={`/${route}/${p.alias}`} legacyBehavior>
							<a tabIndex={isOpened ? 0 : -1} className={cn(styles.thirdLevel, {
								[styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
							})}>
								{p.category}
							</a>
						</Link>
					</motion.li>
				);
			})
		);
	};

	return (
		<nav className={styles.menu} role="navigation">
			{announce && <span  role="log" className='visuallyHidden'>{announce == 'opened' ? 'Развернуто' : 'Свернуто'}</span>}			
			{buildFirstLevel()}
		</nav>
	);
};