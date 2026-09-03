import React from "react";

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Privacy Policy
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-gray-500 transition hover:text-gray-900"
            aria-label="Close Privacy Policy"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 text-sm leading-7 text-gray-700">
          <p className="mb-6">
            Triopath Careers Private Limited uses candidate information as
            necessary to provide career guidance, profile development, job
            application support, recruiter communication, and related career
            services.
          </p>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              1. Information Used for Career Services
            </h3>
            <p>
              Information provided by candidates may be used for career
              guidance, role discovery, resume development, profile
              optimization, job application assistance, recruiter
              communication, and interview coordination.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              2. Profile & Resume Information
            </h3>
            <p>
              Candidate profile information and resume details may be reviewed,
              analyzed, rewritten, restructured, and optimized as part of the
              career support services.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              3. Sharing with Recruiters & Employers
            </h3>
            <p>
              Candidate information may be shared with relevant recruiters,
              vendors, and employers strictly for career and job-related
              purposes.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              4. Candidate Authorization
            </h3>
            <p>
              Candidates may authorize Triopath to perform services including
              profile marketing, job applications where applicable,
              communication with recruiters or employers, and interview
              coordination and follow-ups.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              5. Accuracy of Information
            </h3>
            <p>
              Candidates are responsible for providing accurate and truthful
              information. Misrepresentation or non-cooperation may result in
              termination of services.
            </p>
          </section>

          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              6. Confidentiality
            </h3>
            <p>
              Information and materials shared as part of the career service
              process are handled in connection with the agreed career-related
              services. Company materials, strategies, documents, and training
              provided to candidates must not be shared, copied, or distributed
              to third parties.
            </p>
          </section>

          {/* Refund Policy */}
          <section className="mb-6">
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              7. Refund Policy
            </h3>
            <p>
              All payments made towards Triopath career services are
              non-refundable, including cases involving dissatisfaction,
              delays in results, or personal reasons.
            </p>

            <p className="mt-3">
              The services are based on effort, strategy, and execution and do
              not guarantee job placement, interview calls, salary outcomes, or
              employment offers.
            </p>
          </section>

          <section>
            <h3 className="mb-2 text-base font-semibold text-gray-900">
              8. Service Discontinuation
            </h3>
            <p>
              Service discontinuation and termination are subject to the
              applicable service agreement and authorization terms.
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

export default PrivacyPolicy;