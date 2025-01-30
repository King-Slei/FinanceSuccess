import React from 'react';
import ContactHighlight from '@components/ContactHighlight';
import Form from '@components/Form';
import Card from '@components/Card';

import { ReactComponent as CompassIcon } from '@assets/icons/compass.svg';
import { ReactComponent as MailIcon } from '@assets/icons/mail.svg';
import { ReactComponent as LinkedInIcon } from '@assets/logos/linkedin.svg';

const Contact: React.FC = () => {
	return (
		<>
			<div className='text-3xl mb-16'>
				Feel free to reach out to me
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-7 gap-8 w-full'>
				<Card
					className='grid gap-8 col-span-1 lg:col-span-3 content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-1'
					animation='fade-right'
				>
					<ContactHighlight Icon={CompassIcon} title='Location' subtitle='Calgary, Canada' />
					<ContactHighlight Icon={MailIcon} title='Email' subtitle='Eziyi.victor@gmail.com' />
					<ContactHighlight
						Icon={LinkedInIcon}
						title='LinkedIn'
						subtitle='none'
					/>
				</Card>
				<Form />
			</div>
		</>
	);
};

export default Contact;
