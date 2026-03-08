import React from 'react'

function Projects() {
	return (
		<>
			<div
				className="mx-auto max-w-7xl py-12 sm:py-12 md:py-18 lg:py-24 px-6 sm:px-6 md:px-8 lg:px-12 bg-gray-100"
			>
				{/* Added proper heading hierarchy - h2 instead of h3 for section title */}
				<h2 className="text-center text-3xl md:text-5xl lg:text-7xl font-black uppercase">Projects</h2>

				{/* Changed from div to p for better semantics */}
				<p className="text-center mt-4 mb-12">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ducimus facilis cum dolorem
					error hic nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quisquam? Lorem
					ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, illo.
				</p>

				<div className="flex flex-col gap-12">
					{/* Project 1 - Added article tags for each project */}
					<article
						className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 border border-gray-800 px-8 py-4"
					>
						{/* Added width and height attributes for image optimization */}
						<img
							className="size-96"
							src="/proj1.webp"
							alt="Mobile app interface showing fintech dashboard with financial data"
							loading="lazy"
							width="384"
							height="384"
						/>
						<div>
							{/* Changed button to span since it's not interactive */}
							<span
								className="px-6 py-4 bg-gray-900 border border-gray-50 text-white text-lg font-semibold mb-4 sm:mb-4 md:mb-8 lg:mb-12 inline-block"
							>
								App Development
							</span>

							{/* Changed to h3 for proper heading hierarchy */}
							<h3 className="text-4xl font-semibold mb-2 sm:mb-2 md:mb-4 lg:mb-6">
								App Development for a Fintech
							</h3>

							{/* Changed from div to p */}
							<p className="mb-6 sm:mb-6 md:mb-12 lg:mb-21">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab optio quo provident eaque
								atque possimus, eius ullam officiis ad eum quidem placeat dolores laboriosam neque.
							</p>

							{/* Changed to a for better accessibility - assuming this is a link */}
							<a
								href="#"
								className="flex border-b border-gray-400 text-lg font-semibold gap-2 group w-fit hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
								aria-label="See details about App Development for a Fintech project"
							>
								<span>See Details</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6 group-hover:-rotate-45 transition-transform duration-150"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</a>
						</div>
					</article>

					{/* Project 2 */}
					<article
						className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 border border-gray-800 px-8 py-4"
					>
						<div>
							<span
								className="px-6 py-4 bg-gray-900 border border-gray-50 text-white text-lg font-semibold mb-4 sm:mb-4 md:mb-8 lg:mb-12 inline-block"
							>
								Web Development
							</span>

							<h3 className="text-4xl font-semibold mb-2 sm:mb-2 md:mb-4 lg:mb-6">
								E-commerce app development
							</h3>

							<p className="mb-6 sm:mb-6 md:mb-12 lg:mb-21">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab optio quo provident eaque
								atque possimus, eius ullam officiis ad eum quidem placeat dolores laboriosam neque.
							</p>

							<a
								href="#"
								className="flex border-b border-gray-400 text-lg font-semibold gap-2 group w-fit hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
								aria-label="See details about E-commerce app development project"
							>
								<span>See Details</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6 group-hover:-rotate-45 transition-transform duration-150"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</a>
						</div>
						<img
							className="size-96"
							src="/proj2.webp"
							alt="E-commerce website interface showing product grid and shopping cart"
							loading="lazy"
							width="384"
							height="384"
						/>
					</article>

					{/* Project 3 */}
					<article
						className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 border border-gray-800 px-8 py-4"
					>
						<img
							className="size-96"
							src="/proj3.webp"
							alt="SaaS web application dashboard with analytics and charts"
							loading="lazy"
							width="384"
							height="384"
						/>
						<div>
							<span
								className="px-6 py-4 bg-gray-900 border border-gray-50 text-white text-lg font-semibold mb-4 sm:mb-4 md:mb-8 lg:mb-12 inline-block"
							>
								Web Design
							</span>

							<h3 className="text-4xl font-semibold mb-2 sm:mb-2 md:mb-4 lg:mb-6">
								Web Design for a Saas App
							</h3>

							<p className="mb-6 sm:mb-6 md:mb-12 lg:mb-21">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab optio quo provident eaque
								atque possimus, eius ullam officiis ad eum quidem placeat dolores laboriosam neque.
							</p>

							<a
								href="#"
								className="flex border-b border-gray-400 text-lg font-semibold gap-2 group w-fit hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
								aria-label="See details about Web Design for a Saas App project"
							>
								<span>See Details</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6 group-hover:-rotate-45 transition-transform duration-150"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</a>
						</div>
					</article>
				</div>
			</div>
		</>
	)
}

export default Projects