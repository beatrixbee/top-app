import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';
import cn from 'classnames';
import { useContext } from 'react';
import styles from './Menu.module.css';
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ServicesIcon from './icons/services.svg';
import ProductsIcon from './icons/products.svg';


const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', id:TopLevelCategory.Courses, icon: <CoursesIcon/>},
	{ route: 'services', name: 'Сервисы', id:TopLevelCategory.Services, icon: <ServicesIcon/>},
	{ route: 'books', name: 'Книги', id:TopLevelCategory.Books, icon: <BooksIcon/>},
	{ route: 'products', name: 'Продукты', id:TopLevelCategory.Products, icon: <ProductsIcon/>}
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id === firstCategory
							})}>
								{m.icon}
								<span>{m.name}</span>
							</div>
						</a>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>
							{
								m._id.secondCategory
							}
						</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<a href={`/${route}/${p.alias}`} key={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</a>
			))
		);
	};

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	);
};