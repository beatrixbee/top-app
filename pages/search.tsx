import { withLayout } from '@/layout/layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { TopPageModel } from '@/interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '@/interfaces/product.interface';
import { SidebarProps } from '@/layout/Sidebar/Sidebar.props';

function Search(): JSX.Element {

	return (
		<>
			Search
		</>
	);
}

export default withLayout(Search);