import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { type EmblaOptionsType } from 'embla-carousel'

const feedbacks = [
	{ name: "David Joe", role: "Project Manager", company: "XYY Techsoft", img: "man-square-4.webp", },
	{ name: "Sarah Smith", role: "Product Designer", company: "XYY Techsoft", img: "woman-square-2.webp", },
	{ name: "James Bond", role: "Developer", company: "XYY Techsoft", img: "man-square-3.webp", },
];

export const Feedback: React.FC = () => {
	const options: EmblaOptionsType = { loop: true }

	// 1. Initialize Embla hook (Replaces afterNextRender + EmblaCarousel init)
	const [emblaRef, emblaApi] = useEmblaCarousel(options)

	// 2. State management (Replaces signals)
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

	// 3. Setup listeners (Replaces the effect logic inside afterNextRender)
	const onSelect = useCallback(() => {
		if (!emblaApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return

		setScrollSnaps(emblaApi.scrollSnapList())
		emblaApi.on('select', onSelect)
		emblaApi.on('reInit', onSelect)

		// Cleanup (Replaces ngOnDestroy - hook handles destroy automatically)
		return () => {
			emblaApi.off('select', onSelect)
			emblaApi.off('reInit', onSelect)
		}
	}, [emblaApi, onSelect])

	// 4. Methods (Using useCallback for performance)
	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
	const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

	return (
		<>
			<div className="mx-auto max-w-7xl py-12 sm:py-12 md:py-18 lg:py-24 px-6 sm:px-6 md:px-8 lg:px-12">
				{/* Fixed heading hierarchy - h2 for section title */}
				<h2 className="text-center text-3xl md:text-5xl lg:text-7xl font-black uppercase">Feedback</h2>

				{/* Changed div to p for better semantics */}
				<p className="text-center mt-4 mb-12">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ducimus facilis cum dolorem
					error hic nulla?
				</p>

				{/* Viewport - emblaRef replaces #viewport */}
				<div className="overflow-hidden" ref={emblaRef}>
					<div className="flex" role="list" aria-label="Customer feedback carousel"> {/* Added role and aria-label */}
						{feedbacks.map((item, index) => (
							<article
								key={index}
								className="relative flex-[0_0_100%] min-w-0 bg-black py-6 md:py-8 lg:py-12"
								role="listitem"
								aria-label={`Feedback from ${item.name}, ${item.role} at ${item.company}`}
							>
								<div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-6 gap-8 px-6 sm:px-6 md:px-8 lg:px-12 bg-black text-white">
									<div className="flex gap-4 items-start">
										<svg
											fill="currentColor"
											className="size-12 shrink-0"
											viewBox="0 0 32 32"
											aria-hidden="true" /* Decorative icon */
										>
											<path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z" />
											<path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z" />
										</svg>
										<div className="text-2xl">
											<p className="mb-6">
												Lorem, ipsum dolor sit amet consectetur adipisicing elit...
											</p>
											<div className="flex mt-24">
												<h3 className="border-r border-gray-500 pr-4 text-xl font-semibold">{item.name}</h3>
												<p className="font-light pl-4">{item.role}</p>
											</div>
											<p className="font-bold text-yellow-500">{item.company}</p>
										</div>
									</div>

									<div className="flex items-center justify-center">
										<img
											src={item.img}
											alt={`${item.name} - ${item.role} at ${item.company}`}

											className="rounded-full size-36 md:size-52 lg:size-72"
											loading="lazy"
											width="288"
											height="288"
										/>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>

				{/* Controls */}
				<div className="flex justify-between mt-8">
					<div className="flex gap-2" role="group" aria-label="Carousel navigation">
						<button
							onClick={() => emblaApi?.scrollPrev()}
							className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
							aria-label="Previous feedback"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-12"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>
						</button>

						<button
							onClick={() => emblaApi?.scrollNext()}
							className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
							aria-label="Next feedback"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="size-12"
								aria-hidden="true"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>
						</button>
					</div>

					{/* Pagination Dots */}
					<div
						className="flex gap-2 items-center"
						role="group"
						aria-label="Feedback slide indicators"
					>
						{scrollSnaps.map((_, index) => (
							<button
								key={index}
								onClick={() => emblaApi?.scrollTo(index)}
								className="border border-gray-800 rounded-full p-2 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
								style={{
									backgroundColor: index === selectedIndex ? 'gray' : 'white',
								}}
								aria-label={`Go to feedback ${index + 1}`}
								aria-current={index === selectedIndex ? 'true' : 'false'}
							/>
						))}
					</div>
				</div>
			</div></>
	)
}