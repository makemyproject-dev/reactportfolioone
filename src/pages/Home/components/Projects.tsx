import React from 'react'

function Projects() {
	return (
		<>
			<div
				className="mx-auto max-w-7xl py-12 sm:py-12 md:py-18 lg:py-24 px-6 sm:px-6 md:px-8 lg:px-12 bg-gray-100"
			>
				<h3 className="text-center text-3xl md:text-5xl lg:text-7xl font-black uppercase">Projects</h3>
				<div className="text-center mt-4 mb-12">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ducimus facilis cum dolorem
					error hic nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quisquam? Lorem
					ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, illo.
				</div>

				<div className="flex flex-col gap-12">
					<div
						className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 border border-gray-800 px-8 py-4"
					>
						<img className="size-96" src="/proj1.png" alt="" />
						<div>
							<button
								className="px-6 py-4 bg-gray-900 border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition-all duration-150 hover:border hover:border-gray-900 text-white text-lg font-semibold cursor-pointer mb-4 sm:mb-4 md:mb-8 lg:mb-12"
							>
								App Development
							</button>

							<h4 className="text-4xl font-semibold mb-2 sm:mb-2 md:mb-4 lg:mb-6">
								App Development for a Fintech
							</h4>
							<div className="mb-6 sm:mb-6 md:mb-12 lg:mb-21">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab optio quo provident eaque
								atque possimus, eius ullam officiis ad eum quidem placeat dolores laboriosam neque.
							</div>
							<div
								className="flex border-b border-gray-400 cursor-pointer text-lg font-semibold gap-2 group w-fit"
							>
								<span>See Details</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6 group-hover:-rotate-45"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div
						className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 border border-gray-800 px-8 py-4"
					>
						<div>
							<button
								className="px-6 py-4 bg-gray-900 border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition-all duration-150 hover:border hover:border-gray-900 text-white text-lg font-semibold cursor-pointer mb-4 sm:mb-4 md:mb-8 lg:mb-12"
							>
								Web Development
							</button>

							<h4 className="text-4xl font-semibold mb-2 sm:mb-2 md:mb-4 lg:mb-6">
								E-commerce app development
							</h4>
							<div className="mb-6 sm:mb-6 md:mb-12 lg:mb-21">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab optio quo provident eaque
								atque possimus, eius ullam officiis ad eum quidem placeat dolores laboriosam neque.
							</div>
							<div
								className="flex border-b border-gray-400 cursor-pointer text-lg font-semibold gap-2 group w-fit"
							>
								<span>See Details</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6 group-hover:-rotate-45"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</div>
						</div>
						<img className="size-96" src="/proj2.png" alt="" />
					</div>
					<div
						className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 border border-gray-800 px-8 py-4"
					>
						<img className="size-96" src="/proj3.png" alt="" />
						<div>
							<button
								className="px-6 py-4 bg-gray-900 border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition-all duration-150 hover:border hover:border-gray-900 text-white text-lg font-semibold cursor-pointer mb-4 sm:mb-4 md:mb-8 lg:mb-12"
							>
								Web Design
							</button>

							<h4 className="text-4xl font-semibold mb-2 sm:mb-2 md:mb-4 lg:mb-6">
								Web Design for a Saas App
							</h4>
							<div className="mb-6 sm:mb-6 md:mb-12 lg:mb-21">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab optio quo provident eaque
								atque possimus, eius ullam officiis ad eum quidem placeat dolores laboriosam neque.
							</div>
							<div
								className="flex border-b border-gray-400 cursor-pointer text-lg font-semibold gap-2 group w-fit"
							>
								<span>See Details</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="size-6 group-hover:-rotate-45"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Projects