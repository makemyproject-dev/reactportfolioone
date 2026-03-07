import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollTop = useRef(0);
	const scrollThreshold = 5;

	useEffect(() => {
		const onWindowScroll = () => {
			const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
			const scrollDifference = Math.abs(currentScroll - lastScrollTop.current);

			// Only switch if we've scrolled more than the threshold
			if (scrollDifference > scrollThreshold) {
				if (currentScroll > lastScrollTop.current) {
					// Scrolling down
					setIsVisible(false);
				} else {
					// Scrolling up
					setIsVisible(true);
				}
			}

			// Update ref without triggering a re-render
			if (currentScroll >= 0) {
				lastScrollTop.current = currentScroll;
			}
		};

		window.addEventListener('scroll', onWindowScroll);

		return () => window.removeEventListener('scroll', onWindowScroll);
	}, []);

	const toggle = () => setIsVisible(!isVisible);

	return (
		<>
			<div
				className={`mx-auto sticky top-2 z-50 transition-all duration-500 ease-in-out bg-gray-900 border border-gray-900 flex items-center justify-between text-white ${isVisible ? 'max-w-7xl rounded-none py-3 px-4' : 'max-w-16 h-16 rounded-full p-2'
					}`}
			>
				<div className={`flex items-center justify-between w-full transition-opacity duration-300  ${isVisible ? 'opacity-100' : 'opacity-0 hidden'} `}
				>
					<div className="flex gap-2 items-center">
						<span>
							<svg className='size-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 672.83 194.65">

								<path fill='currentColor' className="cls-1" d="m115.35,2.39c-3.87,0-7.04,0-7.04,0,0,0-1.58,2.74-3.52,6.1L.82,188.56c-1.93,3.35-.35,6.09,3.52,6.09h53.52c3.87,0,8.62-2.74,10.55-6.09l36.37-63c1.94-3.35,3.52-2.93,3.52.94v61.11c0,3.87,3.17,7.04,7.04,7.04h44.47c3.87,0,7.04-3.17,7.04-7.04V9.42c0-3.87-3.17-7.04-7.04-7.04h-44.47Z" />
								<path fill='currentColor' className="cls-1" d="m226.24,2.39c-3.87,0-7.04,0-7.04,0,0,0-1.58,2.74-3.52,6.1l-103.97,180.07c-1.94,3.35-.35,6.09,3.52,6.09h53.52c3.87,0,8.62-2.74,10.55-6.09l36.37-63c1.94-3.35,3.52-2.93,3.52.94v61.11c0,3.87,3.17,7.04,7.04,7.04h44.47c3.87,0,7.04-3.17,7.04-7.04V9.42c0-3.87-3.17-7.04-7.04-7.04h-44.47Z" />
								<path fill='currentColor' className="cls-1" d="m108.31,126.5v45.13l58.54-101.39V9.42c0-3.87-3.17-7.04-7.04-7.04h-44.47c-3.87,0-7.04,0-7.04,0,0,0-1.58,2.74-3.52,6.1L.82,188.56c-1.93,3.35-.35,6.09,3.52,6.09h53.52c3.87,0,8.62-2.74,10.55-6.09l36.37-63c1.94-3.35,3.52-2.93,3.52.94Z" />


								<path fill='currentColor' className="cls-1" d="m337.5,2.39c-3.87,0-7.04,0-7.04,0,0,0-1.58,2.74-3.52,6.1l-103.97,180.07c-1.93,3.35-.35,6.09,3.52,6.09h53.52c3.87,0,8.62-2.74,10.55-6.09l36.37-63c1.94-3.35,3.52-2.93,3.52.94v61.11c0,3.87,3.17,7.04,7.04,7.04h44.47c3.87,0,7.04-3.17,7.04-7.04V9.42c0-3.87-3.17-7.04-7.04-7.04h-44.47Z" />
								<path fill='currentColor' className="cls-1" d="m448.4,2.39c-3.87,0-7.04,0-7.04,0,0,0-1.58,2.74-3.52,6.1l-103.97,180.07c-1.94,3.35-.35,6.09,3.52,6.09h53.52c3.87,0,8.62-2.74,10.55-6.09l36.37-63c1.94-3.35,3.52-2.93,3.52.94v61.11c0,3.87,3.17,7.04,7.04,7.04h44.47c3.87,0,7.04-3.17,7.04-7.04V9.42c0-3.87-3.17-7.04-7.04-7.04h-44.47Z" />
								<path fill='currentColor' className="cls-1" d="m330.47,126.5v45.13l58.54-101.39V9.42c0-3.87-3.17-7.04-7.04-7.04h-44.47c-3.87,0-7.04,0-7.04,0,0,0-1.58,2.74-3.52,6.1l-103.97,180.07c-1.93,3.35-.35,6.09,3.52,6.09h53.52c3.87,0,8.62-2.74,10.55-6.09l36.37-63c1.94-3.35,3.52-2.93,3.52.94Z" />


								<path fill='currentColor' className="cls-1" d="m646.52,72.8h-100.54c-14.47,0-26.31,11.84-26.31,26.31s11.84,26.31,26.31,26.31h100.54c14.47,0,26.31-11.84,26.31-26.31s-11.84-26.31-26.31-26.31Z" />
								<rect fill='currentColor' className="cls-1" x="522.79" y="0" width="109.74" height="52.63" rx="26.31" ry="26.31" />
								<circle fill='currentColor' className="cls-1" cx="545.98" cy="168.15" r="26.31" />
								<path fill='currentColor' className="cls-1" d="m572.29,168.14h-52.63c0-14.53,11.78-26.31,26.31-26.31s26.31,11.78,26.31,26.31Z" />

							</svg>
						</span>
						<span className="font-semibold text-lg">Home</span>
					</div>
					<div className="flex gap-1 items-center group">
						<button className="px-6 py-2 bg-orange-600 text-white font-semibold cursor-pointer">
							Contact
						</button>
						<span className="p-2 bg-white text-gray-800">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"
								className="size-6 shrink-0 group-hover:-rotate-45 transition-all duration-300">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
							</svg>
						</span>

					</div>
				</div >

				<div className={`flex justify-center w-full transition-opacity duration-300 cursor-pointer ${isVisible ? 'opacity-0 hidden' : 'opacity-100'} `} onMouseOver={toggle}  >
					< img src="model-tn.png" className="size-12 rounded-full" alt="" />
				</div >
			</div >
		</>
	);
};

export default Navbar;