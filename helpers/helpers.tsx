import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ServicesIcon from './icons/services.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { FirstLevelMenuItem } from '@/interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', id:TopLevelCategory.Courses, icon: <CoursesIcon/>},
	{ route: 'services', name: 'Сервисы', id:TopLevelCategory.Services, icon: <ServicesIcon/>},
	{ route: 'books', name: 'Книги', id:TopLevelCategory.Books, icon: <BooksIcon/>},
	{ route: 'products', name: 'Продукты', id:TopLevelCategory.Products, icon: <ProductsIcon/>}
];

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');