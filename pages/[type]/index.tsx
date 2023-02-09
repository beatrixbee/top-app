import { withLayout } from '@/layout/layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import { ParsedUrlQuery } from 'querystring';

function Type({firstCategory}: TypeProps): JSX.Element {

	return (
		<>
			Type: {firstCategory}
		</>
	);
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: firstLevelMenu.map(m => '/' +  m.route),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if(!params) {
		return {
			notFound: true
		};
	}
	const firstCateogyrItem = firstLevelMenu.find(m => m.route == params.type);
	if(!firstCateogyrItem){
		return {
			notFound: true
		};
	}
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory: firstCateogyrItem.id
	});

	if (menu.length == 0) {
		return {
			notFound: true
		};
	}

	return {
		props: {
			menu,
			firstCategory: firstCateogyrItem.id,
		}
	};
};

interface TypeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}