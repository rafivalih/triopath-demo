import React from "react";

interface TermsAndConditionProps {
  onClose: () => void;
}

const TermsAndCondition: React.FC<TermsAndConditionProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Terms & Conditions
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 transition hover:text-gray-900"
            aria-label="Close Terms & Conditions"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 text-sm leading-7 text-gray-700">
          <p className="mb-6">
            These Terms & Conditions define the terms under which Triopath
            Careers Private Limited provides career acceleration and job
            application support services to candidates.
          </p>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              1. Scope of Services
            </h3>
            <p>
              Triopath provides professional career support services including
              resume optimization, LinkedIn profile enhancement, profile
              marketing, job application support, recruiter communication, and
              interview coordination. These services are intended to provide
              advisory and execution-based support to improve job search
              outcomes.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              2. Mandatory Service Commitment
            </h3>
            <p>
              The candidate agrees to a minimum mandatory service period of two
              (2) months from the date of onboarding. Early discontinuation
              during this period is not permitted except under exceptional
              circumstances approved by Triopath.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              3. No Guarantee of Job or Placement
            </h3>
            <p>
              Triopath does not guarantee job placement, interview calls,
              salary outcomes, or employment offers. Results may depend on
              market demand, candidate skills and experience, interview
              performance, and decisions made by employers.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              4. Candidate Responsibilities
            </h3>
            <p>
              Candidates are expected to provide accurate information, respond
              promptly to communications, actively cooperate throughout the
              service period, and participate in activities required as part of
              the career support process.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              5. Mock Interviews & Training
            </h3>
            <p>
              Mock interviews, training sessions, and preparation activities
              conducted by Triopath are mandatory. Candidates are expected to
              attend scheduled sessions on time and participate seriously.
              Repeated absence may reduce service effectiveness or result in
              termination of services without refund.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              6. Confidentiality
            </h3>
            <p>
              Materials, strategies, documents, and training shared by
              Triopath are confidential and must not be shared, copied, or
              distributed to third parties.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              7. Data Usage for Career Services
            </h3>
            <p>
              Candidate profile and information may be shared with recruiters,
              vendors, and employers strictly for job-related purposes as part
              of the career support and job application process.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              8. Service Termination
            </h3>
            <p>
              Triopath reserves the right to terminate services in cases
              involving false information, non-cooperation, unethical
              behavior, or violation of the agreement. A candidate may request
              discontinuation after the mandatory service period; however, no
              refund will be applicable.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              9. Limitation of Liability
            </h3>
            <p>
              Triopath shall not be held liable for losses, rejections,
              delays, or outcomes related to job applications, interviews, or
              employment opportunities, as these may depend on third-party
              decisions beyond the Company's control.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              10. Governing Law
            </h3>
            <p>
              The agreement is governed by and interpreted in accordance with
              the laws of India. The courts of Andhra Pradesh shall have
              exclusive jurisdiction.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              11. Declaration
            </h3>
            <p>
              By proceeding with the services, the candidate confirms that they
              have read, understood, and agreed to the applicable terms and
              conditions.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;