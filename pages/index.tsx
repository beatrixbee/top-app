import { Htag, Button } from '@/components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>Text</Htag>
            <Button appearance='primary' className='asdasd' arrow='right'>Button</Button>
            <Button appearance='ghost'>Button</Button>
		</div>
	);
}
