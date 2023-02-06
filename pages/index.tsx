import { Htag, Button, Ptag, Tag } from '@/components';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		if(counter > 0){
			console.log(counter);
		}
	});

	return (
		<div>
			<Htag tag='h1'>{counter}</Htag>
			<Button appearance='primary' className='asdasd' arrow='right' onClick={() => setCounter(x => x+1)}>Button</Button>
			<Button appearance='ghost'>Button</Button>
			<Ptag className='ppp'>Some normal text</Ptag>
			<Ptag className='ppp' size='s'>Some small text</Ptag>
			<Ptag className='ppp' size='l'>Some large text</Ptag>
			<Tag size='s' color='ghost'>Small</Tag>
			<Tag size='m' color='red'>Medium</Tag>
			<Tag color='primary'>Medium</Tag>
		</div>
	);
}
