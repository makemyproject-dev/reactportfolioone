import React from 'react'

function CTA() {
	return (
		<>
			<div className="mx-auto max-w-7xl py-12 sm:py-12 md:py-18 lg:py-24 px-6 sm:px-6 md:px-8 lg:px-12 bg-gray-100">
				<h3 className="text-center text-3xl md:text-5xl lg:text-7xl font-black">
					Say hi! and tell me about your idea
				</h3>
				<div className="text-center text-xl mt-4 mb-12">
					Feel free to reach out to me and lets start working on your next awesome project
				</div>

				<div className="flex flex-col gap-12"></div>

				<div>
					<div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
						<div className="w-full">
							<label htmlFor="fullname">Name</label>
							<input type="text" id="fullname"
								className="w-full px-3 py-2 text-sm text-gray-900 border-b-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring-gray-500 placeholder-gray-400"
								placeholder="John" />
						</div>
						<div className="w-full">
							<label htmlFor="email">Email</label>
							<input type="text" id="email"
								className="w-full px-3 py-2 text-sm text-gray-900 border-b-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring-gray-500 placeholder-gray-400"
								placeholder="email@example.com" />
						</div>
					</div>
					<div className="flex mt-12">
						<div className="w-full">
							<label htmlFor="message">Message</label>
							<textarea id="message"
								className="w-full px-3 py-2 text-sm text-gray-900 border-b-2 border-gray-300 bg-gray-50 focus:outline-none focus:border-gray-500 focus:ring-gray-500 placeholder-gray-400"
								placeholder="message to me"> </textarea>
						</div>
					</div>

					<div>
						<button
							className="px-8 py-4 bg-orange-600 border border-gray-50 hover:bg-gray-50 hover:text-gray-800 transition-all duration-150 hover:border hover:border-gray-900 text-white text-xl font-semibold mt-12 cursor-pointer">
							Send
						</button>
					</div>
				</div>
			</div></>
	)
}

export default CTA