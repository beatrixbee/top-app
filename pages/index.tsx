import { Htag, Button, Ptag, Tag, Rating } from '@/components';
import { withLayout } from '@/layout/layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {

	const [rating, setRating] = useState<number>(4);

	const [counter, setCounter] = useState<number>(0);


	return (
		<>
			<Htag tag='h2'>{counter}</Htag>
			<Htag tag='h1'>{rating}</Htag>
			<Button appearance='primary' className='asdasd' arrow='right' onClick={() => setCounter(x => x+1)}>Button</Button>
			<Button appearance='ghost'>Button</Button>
			<Ptag className='ppp'>Some normal text</Ptag>
			<Ptag className='ppp' size='s'>Some small text</Ptag>
			<Ptag className='ppp' size='l'>Some large text</Ptag>
			<Tag size='s' color='ghost'>Small</Tag>
			<Tag size='m' color='red'>Medium</Tag>
			<Tag color='primary'>Medium</Tag>
			<Rating rating={4} isEditable/>
			<Rating rating={rating} isEditable setRating={setRating}/>
			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}