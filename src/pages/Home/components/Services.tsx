import React from 'react'

function Services() {
	return (
		<>
			<div className="mx-auto max-w-7xl py-12 sm:py-12 md:py-18 lg:py-24 px-6 sm:px-6 md:px-8 lg:px-12 bg-gray-100">

				<h3 className="text-center text-3xl md:text-5xl lg:text-7xl font-black uppercase">Services</h3>
				<div className="text-center mt-4 mb-12">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				</div>

				<div className="container py-6 md:py-9 lg:py-12 mx-auto">
					<div className="flex flex-wrap">
						<div className="md:w-1/3 w-full text-2xl md:text-4xl lg:text-6xl font-bold uppercase">
							<h2>What I've To Offer</h2>
						</div>
						<div className="flex gap-8 md:w-2/3 w-full pb-6 md:pb-0 md:pr-6">
							<div>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sed corrupti omnis
								voluptatibus perspiciatis earum sint officiis accusamus tempora asperiores!
							</div>
							<div>
								<button
									className="px-8 py-4 bg-gray-900 border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition-all duration-150 hover:border hover:border-gray-900 text-white text-xl font-semibold cursor-pointer">
									Services
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="flex">
					<div
						className="basis-5/6 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
						<div
							className="border-2 border-gray-800 p-12 flex flex-col gap-6 h-80 w-80 hover:bg-gray-800 hover:text-white hover:border-white transition-colors duration-300">
							<svg className="size-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.5195 1.5H11.5195C10.6895 1.5 10.0195 2.17 10.0195 3V4C10.0195 4.83 10.6895 5.5 11.5195 5.5H12.5195C13.3495 5.5 14.0195 4.83 14.0195 4V3C14.0195 2.17 13.3495 1.5 12.5195 1.5Z"
									fill="currentColor" />
								<path
									d="M4.26953 10.6699H3.26953C2.43953 10.6699 1.76953 11.3399 1.76953 12.1699V13.1699C1.76953 13.9999 2.43953 14.6699 3.26953 14.6699H4.26953C5.09953 14.6699 5.76953 13.9999 5.76953 13.1699V12.1699C5.76953 11.3399 5.08953 10.6699 4.26953 10.6699Z"
									fill="currentColor" />
								<path
									d="M20.7305 10.6699H19.7305C18.9005 10.6699 18.2305 11.3399 18.2305 12.1699V13.1699C18.2305 13.9999 18.9005 14.6699 19.7305 14.6699H20.7305C21.5605 14.6699 22.2305 13.9999 22.2305 13.1699V12.1699C22.2305 11.3399 21.5605 10.6699 20.7305 10.6699Z"
									fill="currentColor" />
								<path
									d="M3.75 11.9198C3.34 11.9198 3 11.5798 3 11.1698C3 6.89982 6.2 3.30984 10.44 2.80984C10.84 2.76984 11.22 3.05981 11.27 3.46981C11.32 3.87981 11.02 4.24983 10.61 4.29983C7.13 4.70983 4.5 7.65982 4.5 11.1698C4.5 11.5798 4.16 11.9198 3.75 11.9198Z"
									fill="currentColor" />
								<path
									d="M20.249 11.9198C19.839 11.9198 19.499 11.5798 19.499 11.1698C19.499 7.67979 16.889 4.72981 13.429 4.30981C13.019 4.25981 12.729 3.88979 12.779 3.47979C12.829 3.06979 13.209 2.77982 13.619 2.82982C17.829 3.33982 21.009 6.9298 21.009 11.1798C20.999 11.5798 20.669 11.9198 20.249 11.9198Z"
									fill="currentColor" />
								<path
									d="M13.2898 22.0101H10.7198C9.79983 22.0101 9.11982 21.2701 9.28982 20.4701L9.70983 18.6201H14.2998L14.7198 20.4701C14.9098 21.3201 14.2698 22.0101 13.2898 22.0101Z"
									fill="currentColor" />
								<path opacity="0.4"
									d="M16.0698 17.0499L14.2998 18.6199H9.70981L7.93981 17.0499C6.90981 16.2099 6.90981 15.5599 7.68981 14.5699L10.8098 10.6299C11.0298 10.3599 11.2798 10.1699 11.5498 10.0799C11.8398 9.97988 12.1598 9.97988 12.4498 10.0799C12.7198 10.1799 12.9698 10.3599 13.1898 10.6299L16.3098 14.5699C17.0898 15.5599 17.0598 16.1799 16.0698 17.0499Z"
									fill="currentColor" />
							</svg>
							<div className="text-2xl w-20 uppercase font-semibold">Mobile App Development</div>

							<div className="flex gap-4 group cursor-pointer">
								<span>Read More</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
									stroke="currentColor" className="size-6 group-hover:translate-x-2 transition-all duration-300">
									<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
								</svg>
							</div>
						</div>
						<div
							className="border-2 border-gray-800 p-12 flex flex-col gap-6 h-80 w-80 hover:bg-gray-800 hover:text-white hover:border-white transition-colors duration-300">
							<svg className="size-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.5195 1.5H11.5195C10.6895 1.5 10.0195 2.17 10.0195 3V4C10.0195 4.83 10.6895 5.5 11.5195 5.5H12.5195C13.3495 5.5 14.0195 4.83 14.0195 4V3C14.0195 2.17 13.3495 1.5 12.5195 1.5Z"
									fill="currentColor" />
								<path
									d="M4.26953 10.6699H3.26953C2.43953 10.6699 1.76953 11.3399 1.76953 12.1699V13.1699C1.76953 13.9999 2.43953 14.6699 3.26953 14.6699H4.26953C5.09953 14.6699 5.76953 13.9999 5.76953 13.1699V12.1699C5.76953 11.3399 5.08953 10.6699 4.26953 10.6699Z"
									fill="currentColor" />
								<path
									d="M20.7305 10.6699H19.7305C18.9005 10.6699 18.2305 11.3399 18.2305 12.1699V13.1699C18.2305 13.9999 18.9005 14.6699 19.7305 14.6699H20.7305C21.5605 14.6699 22.2305 13.9999 22.2305 13.1699V12.1699C22.2305 11.3399 21.5605 10.6699 20.7305 10.6699Z"
									fill="currentColor" />
								<path
									d="M3.75 11.9198C3.34 11.9198 3 11.5798 3 11.1698C3 6.89982 6.2 3.30984 10.44 2.80984C10.84 2.76984 11.22 3.05981 11.27 3.46981C11.32 3.87981 11.02 4.24983 10.61 4.29983C7.13 4.70983 4.5 7.65982 4.5 11.1698C4.5 11.5798 4.16 11.9198 3.75 11.9198Z"
									fill="currentColor" />
								<path
									d="M20.249 11.9198C19.839 11.9198 19.499 11.5798 19.499 11.1698C19.499 7.67979 16.889 4.72981 13.429 4.30981C13.019 4.25981 12.729 3.88979 12.779 3.47979C12.829 3.06979 13.209 2.77982 13.619 2.82982C17.829 3.33982 21.009 6.9298 21.009 11.1798C20.999 11.5798 20.669 11.9198 20.249 11.9198Z"
									fill="currentColor" />
								<path
									d="M13.2898 22.0101H10.7198C9.79983 22.0101 9.11982 21.2701 9.28982 20.4701L9.70983 18.6201H14.2998L14.7198 20.4701C14.9098 21.3201 14.2698 22.0101 13.2898 22.0101Z"
									fill="currentColor" />
								<path opacity="0.4"
									d="M16.0698 17.0499L14.2998 18.6199H9.70981L7.93981 17.0499C6.90981 16.2099 6.90981 15.5599 7.68981 14.5699L10.8098 10.6299C11.0298 10.3599 11.2798 10.1699 11.5498 10.0799C11.8398 9.97988 12.1598 9.97988 12.4498 10.0799C12.7198 10.1799 12.9698 10.3599 13.1898 10.6299L16.3098 14.5699C17.0898 15.5599 17.0598 16.1799 16.0698 17.0499Z"
									fill="currentColor" />
							</svg>
							<div className="text-2xl w-20 uppercase font-semibold">Web App Development</div>

							<div className="flex gap-4 group cursor-pointer">
								<span>Read More</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
									stroke="currentColor" className="size-6 group-hover:translate-x-2 transition-all duration-300">
									<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
								</svg>
							</div>
						</div>
						<div
							className="border-2 border-gray-800 p-12 flex flex-col gap-6 h-80 w-80 hover:bg-gray-800 hover:text-white hover:border-white transition-colors duration-300">
							<svg className="size-24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12.5195 1.5H11.5195C10.6895 1.5 10.0195 2.17 10.0195 3V4C10.0195 4.83 10.6895 5.5 11.5195 5.5H12.5195C13.3495 5.5 14.0195 4.83 14.0195 4V3C14.0195 2.17 13.3495 1.5 12.5195 1.5Z"
									fill="currentColor" />
								<path
									d="M4.26953 10.6699H3.26953C2.43953 10.6699 1.76953 11.3399 1.76953 12.1699V13.1699C1.76953 13.9999 2.43953 14.6699 3.26953 14.6699H4.26953C5.09953 14.6699 5.76953 13.9999 5.76953 13.1699V12.1699C5.76953 11.3399 5.08953 10.6699 4.26953 10.6699Z"
									fill="currentColor" />
								<path
									d="M20.7305 10.6699H19.7305C18.9005 10.6699 18.2305 11.3399 18.2305 12.1699V13.1699C18.2305 13.9999 18.9005 14.6699 19.7305 14.6699H20.7305C21.5605 14.6699 22.2305 13.9999 22.2305 13.1699V12.1699C22.2305 11.3399 21.5605 10.6699 20.7305 10.6699Z"
									fill="currentColor" />
								<path
									d="M3.75 11.9198C3.34 11.9198 3 11.5798 3 11.1698C3 6.89982 6.2 3.30984 10.44 2.80984C10.84 2.76984 11.22 3.05981 11.27 3.46981C11.32 3.87981 11.02 4.24983 10.61 4.29983C7.13 4.70983 4.5 7.65982 4.5 11.1698C4.5 11.5798 4.16 11.9198 3.75 11.9198Z"
									fill="currentColor" />
								<path
									d="M20.249 11.9198C19.839 11.9198 19.499 11.5798 19.499 11.1698C19.499 7.67979 16.889 4.72981 13.429 4.30981C13.019 4.25981 12.729 3.88979 12.779 3.47979C12.829 3.06979 13.209 2.77982 13.619 2.82982C17.829 3.33982 21.009 6.9298 21.009 11.1798C20.999 11.5798 20.669 11.9198 20.249 11.9198Z"
									fill="currentColor" />
								<path
									d="M13.2898 22.0101H10.7198C9.79983 22.0101 9.11982 21.2701 9.28982 20.4701L9.70983 18.6201H14.2998L14.7198 20.4701C14.9098 21.3201 14.2698 22.0101 13.2898 22.0101Z"
									fill="currentColor" />
								<path opacity="0.4"
									d="M16.0698 17.0499L14.2998 18.6199H9.70981L7.93981 17.0499C6.90981 16.2099 6.90981 15.5599 7.68981 14.5699L10.8098 10.6299C11.0298 10.3599 11.2798 10.1699 11.5498 10.0799C11.8398 9.97988 12.1598 9.97988 12.4498 10.0799C12.7198 10.1799 12.9698 10.3599 13.1898 10.6299L16.3098 14.5699C17.0898 15.5599 17.0598 16.1799 16.0698 17.0499Z"
									fill="currentColor" />
							</svg>
							<div className="text-2xl w-20 uppercase font-semibold">UI - UX Creative Design</div>

							<div className="flex gap-4 group cursor-pointer">
								<span>Read More</span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
									stroke="currentColor" className="size-6 group-hover:translate-x-2 transition-all duration-300">
									<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
								</svg>
							</div>
						</div>
					</div>
					<div className="basis-1/6 flex flex-col justify-around items-center gap-4">
						<div className="rotate-90">Scroll Down</div>
						<div className="border-r-2 border-gray-800 h-1/3"></div>
						<div className="rounded-full p-4 bg-gray-800 text-white">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"
								className="size-6 animate-bounce">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
							</svg>
						</div>
					</div>
				</div>
			</div></>
	)
}

export default Services