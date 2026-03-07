import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { Feedback } from './components/Feedback'
import CTA from './components/CTA'

function Home() {
	return (
		<>
			<div className='bg-gray-50' >
				<Navbar />
				<Hero />
				<Services />
				<Experience />
				<Projects />
				<Feedback />
				<CTA />
			</div>

		</>
	)
}

export default Home