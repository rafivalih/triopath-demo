"use client";

import Image from "next/image";

import microsoft from "../../app/images/companies/microsoft.png";
import amazon from "../../app/images/companies/amazon.png";
import tcs from "../../app/images/companies/tcs-logo.png";
import google from "../../app/images/companies/google-wordmark.svg";
import nvidia from "../../app/images/companies/nvidia.jpg";
import meta from "../../app/images/companies/meta.png";
import ibm from "../../app/images/companies/ibm.png";
import oracle from "../../app/images/companies/oracle.png";
import adobe from "../../app/images/companies/adobe.png";
import salesforce from "../../app/images/companies/salesforce.png";
// import cisco from "../../app/images/companies/cisco.svg";
import intel from "../../app/images/companies/Intel.png";
import accenture from "../../app/images/companies/Accenture.webp";
import hcl from "../../app/images/companies/HCL-logo.png";
import infosys from "../../app/images/companies/Infosys_logo.webp";

const companies = [
	microsoft,
	tcs,
	nvidia,
	meta,
	google,
	amazon,
	infosys,
	ibm,
	oracle,
	adobe,
	salesforce,
	intel,
	accenture,
	hcl,
];


const marqueeCompanies = [...companies, ...companies];

export default function CompaniesMarquee() {
	return (
		<section className="w-full border-y border-black/10 bg-white">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
				<div className="flex h-[90px] w-full items-stretch sm:h-[100px] lg:h-[100px]">
					{/* Fixed Title */}
					<div
						className="
              relative z-20 flex w-[150px] shrink-0 items-center
              border-r border-black/10 bg-white px-4
              sm:w-[210px] sm:px-6
              lg:w-[300px] lg:px-8
            "
					>
						<div className="border-l-[4px] border-[#5368df] pl-3 sm:pl-4 lg:pl-5">
							<h2
								className="
                  text-[15px] font-semibold leading-tight text-[#282828]
                  sm:text-[20px]
                  lg:text-[28px]
                "
							>
								Companies We
								<br />
								Apply To
							</h2>
						</div>
					</div>

					{/* Marquee Area */}
					<div className="relative min-w-0 flex-1 overflow-hidden">
						{/* Soft fade */}
						<div
							className="
                pointer-events-none absolute inset-y-0 left-0 z-10
                w-12 bg-gradient-to-r from-white via-white/80 to-transparent
                sm:w-16
                lg:w-20
              "
						/>

						{/* Moving Track */}
						<div className="marquee-track flex h-full w-max">
							{marqueeCompanies.map((company, index) => (
								<div
									key={index}
									className="
                    flex h-full w-[130px] shrink-0 items-center
                    justify-center border-r border-black/10 px-4
                    sm:w-[170px] sm:px-5
                    lg:w-[210px]
                  "
								>
									<div className="flex h-full w-full items-center justify-center">
										<Image
											src={company}
											alt=""
											className="
                        max-h-7
                        max-w-[105px]
                        object-contain
                        sm:max-h-8
                        sm:max-w-[130px]
                        lg:max-h-9
                        lg:max-w-[160px]
                      "
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.marquee-track {
					animation: marquee 20s linear infinite;
				}

				@keyframes marquee {
					from {
						transform: translateX(0);
					}

					to {
						transform: translateX(-50%);
					}
				}
			`}</style>
		</section>
	);
}
