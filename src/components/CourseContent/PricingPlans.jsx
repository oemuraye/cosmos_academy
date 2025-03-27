import React from 'react'

const pricingPlans = [
    {
      title: "Weekly Membership",
      description:
        "Perfect for learners seeking flexibility without long-term commitments.",
      features: [
        { label: "Pay-As-You-Go", detail: "Only pay for the weeks you learn.  " },
        { label: "Access to Live Classes", detail: "Engage with instructors in real-time." },
        { label: "Flexible Scheduling", detail: "Learn at your pace, on your terms." },
      ],
      cardBg: "#FCE7D6",
      cardBtnBg: "#EFCEA0",
      buttonText: "Coming Soon",
    },
    {
      title: "Monthly Membership",
      description: "For committed learners looking for continuous learning.",
      features: [
        { label: "Unlimited Course Access", detail: "Explore all foundational and advanced courses." },
        { label: "1-on-1 Mentorship:", detail: "Personalized guidance from industry experts." },
        { label: "Priority Support", detail: "Connect with peers and instructors anytime." },
      ],
      cardBg: "#BDD7FE",
      cardBtnBg: "#90B8F3",
      buttonText: "Coming Soon",
    },
    {
      title: "Annual Membership",
      description: "Best value for dedicated learners ready to commit to growth.",
      features: [
        { label: "Unlimited Course Access", detail: "Explore all foundational and advanced courses." },
        { label: "1-on-1 Mentorship:", detail: "Personalized guidance from industry experts." },
        { label: "Priority Support", detail: "Connect with peers and instructors anytime." },
      ],
      cardBg: "#FFC3FF",
      cardBtnBg: "#DE91FF",
      buttonText: "Coming Soon",
    },
];

const PricingPlans = () => {
  return (
    <section className='pricing-section container mb-5'>
        <section className="section-heading my-5">
          <h2>Choose the right plan for you</h2>
        </section>

        <section className="plans-display">
            <div className="row">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className="col-md-4 col-sm-12 my-3">
                        <div className="plan-card p-4" style={{ backgroundColor: plan.cardBg }}>
                            <h5 className="">{plan.title}</h5>
                            <p className="">{plan.description}</p>

                            <hr />

                            <ul className="list-unstyled">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className='my-1'>
                                        <strong>{feature.label}:</strong> <span dangerouslySetInnerHTML={{ __html: feature.detail}}></span>
                                    </li>
                                ))}
                            </ul>

                            <hr />

                            <button style={{ backgroundColor: plan.cardBtnBg }} className="btn mt-3">{plan.buttonText}</button>
                        </div>
                    </div>
                ))}

            </div>

        </section>

    </section>
  )
}

export default PricingPlans