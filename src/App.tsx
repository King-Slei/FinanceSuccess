import React, { useEffect, useRef, useState } from 'react';

import Section from '@components/Section';
import Header from '@components/sections/Header';
import Footer from '@components/sections/Footer';
import Navigation from '@components/Navigation';
import Button from '@components/Button';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrow_down.svg';

import CONTENT_SECTIONS from '@content/sections';

const App: React.FC = () => {
	const [section, setSection] = useState(0);
	const footerRef = useRef<HTMLDivElement>(null);

	const handleScroll = (): void => {
		const { scrollY, innerHeight } = window;

		for (let i = CONTENT_SECTIONS.length - 1; i >= 0; i--) {
			const sectionOffset = CONTENT_SECTIONS[i].ref.current?.offsetTop ?? 0;
			const isLastSection = i === CONTENT_SECTIONS.length - 1;
			const bottomPastFooter = scrollY + innerHeight >= (footerRef.current?.offsetTop ?? 0);
			const topPastSection = scrollY >= sectionOffset;

			if (topPastSection || (isLastSection && bottomPastFooter)) {
				setSection(i);
				break;
			}
		}
	};

	const scrollToStart = () => {
		// const firstSection = CONTENT_SECTIONS[0].ref.current;
		// if (firstSection) {
		// 	window.scrollTo({ top: firstSection.offsetTop, behavior: 'smooth' });
		// }
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<Navigation section={section} sections={CONTENT_SECTIONS} />
			<main className='overflow-x-hidden text-gray-7 dark:text-gray-1'>
				<Header ref={CONTENT_SECTIONS[0].ref} />
				{CONTENT_SECTIONS.map(({ title, ref, children }, i) => (
					<Section title={title} ref={ref} index={i} key={title}>
						{children}
					</Section>
				))}
				<Footer sections={CONTENT_SECTIONS} ref={footerRef} />
			</main>
			{/* Victor Eziyi text in cursive, white, fixed at the top-left corner */}
			<div className="fixed top-8 left-8 z-50 text-white text-4xl font-cursive">
				Victor Eziyi
			</div>
			{/* Book Appointment button, fixed at the top-right corner */}
			<div className="fixed top-8 right-8 z-50">
				<Button text="Book Appointment" onClick={scrollToStart} />
			</div>
		</>
	);
};

export default App;
