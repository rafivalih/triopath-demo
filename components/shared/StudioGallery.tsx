import Image from "next/image";

import img1 from "../../app/images/img1.png";
import img2 from "../../app/images/img2.png";
import img3 from "../../app/images/img3.png";
import img4 from "../../app/images/img4.png";
import img5 from "../../app/images/img5.png";
import img6 from "../../app/images/img6.png";
import img7 from "../../app/images/img7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function StudioGallery() {
	return (
		<section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-4">
			<div className="mx-auto max-w-[1450px]">
				{/* Heading */}
				<div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
					<h2 className="text-4xl font-bold tracking-tight text-[#242222] sm:text-5xl lg:text-6xl">
						A Peek Inside The Studio.
					</h2>

					<p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#77736e] sm:text-lg">
						Sketches, sticky notes and the occasional bad first draft — the
						parts that don't make it into the case studies.
					</p>
				</div>

				{/* Gallery */}
				<div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
					{/* Image 1 */}
					<div className="relative col-span-1 h-[200px] overflow-hidden rounded-xl border border-black/20 sm:h-[280px] lg:col-span-3 lg:h-[530px]">
						<Image
							src={images[0]}
							alt="Studio collaboration"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 50vw, 50vw"
						/>
					</div>

					{/* Image 2 */}
					<div className="relative col-span-1 h-[200px] overflow-hidden rounded-xl border border-black/20 sm:h-[280px] lg:col-span-3 lg:h-[530px]">
						<Image
							src={images[1]}
							alt="Team discussion"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 50vw, 50vw"
						/>
					</div>

					{/* Image 3 */}
					<div className="relative col-span-2 h-[120px] overflow-hidden rounded-xl border border-black/20 sm:col-span-1 sm:h-[300px] lg:col-span-2 lg:h-[340px]">
						{" "}
						<Image
							src={images[2]}
							alt="Team meeting"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 50vw, 33vw"
						/>
					</div>

					{/* Image 4 */}
					<div className="relative col-span-1 h-[180px] overflow-hidden rounded-xl border border-black/20 sm:h-[300px] lg:col-span-2 lg:h-[340px]">
						<Image
							src={images[3]}
							alt="Creative discussion"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 50vw, 33vw"
						/>
					</div>

					{/* Image 5 */}
					<div className="relative col-span-1 h-[180px] overflow-hidden rounded-xl border border-black/20 sm:h-[300px] lg:col-span-2 lg:h-[340px]">
						<Image
							src={images[4]}
							alt="Team collaboration"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 50vw, 33vw"
						/>
					</div>

					{/* Image 6 */}
					<div className="relative col-span-1 h-[200px] overflow-hidden rounded-xl border border-black/20 sm:h-[350px] lg:col-span-4 lg:h-[430px]">
						<Image
							src={images[5]}
							alt="Workspace"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 50vw, 67vw"
						/>
					</div>

					{/* Image 7 */}
					<div className="relative col-span-1 h-[200px] overflow-hidden rounded-xl border border-black/20 sm:col-span-1 sm:h-[350px] lg:col-span-2 lg:h-[430px]">
						{" "}
						<Image
							src={images[6]}
							alt="Studio workspace"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 33vw"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
