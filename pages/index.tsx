import { Htag, Button, Ptag, Tag } from '@/components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>Text</Htag>
            <Button appearance='primary' className='asdasd' arrow='right'>Button</Button>
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
