import React from 'react'

import cardImage from '../../assets/images/cardImg.png';


const pricingPlans = [
    {
      title: "Weekly Membership",
      description:
        "Perfect for learners seeking flexibility without long-term commitments.",
      features: [
        { label: "Pay-As-You-Go", detail: "Only pay for the weeks you </br> learn." },
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
    {
      title: "Pay-per-course Membership",
      description: "For committed learners looking for continuous learning.",
      features: [
        { label: "Unlimited Course Access", detail: "Explore all foundational and advanced courses." },
        { label: "1-on-1 Mentorship:", detail: "Personalized guidance from industry experts." },
        { label: "Priority Support", detail: "Connect with peers and instructors anytime." },
      ],
      cardBg: "#BDADFF",
      cardBtnBg: "#9981FF",
      buttonText: "Coming Soon",
    },
];

const PricingPlansSection = () => {
  return (
    <section className='pricing-section container mb-5'>
        <section className="section-heading my-5">
          <h2>Flexible Pricing Plans Designed for You</h2>
          <p>Whether you're just starting out or advancing your tech journey, there’s a plan for you because we believe that quality education should be accessible to everyone. That’s why we’ve created flexible pricing options to fit your goals and schedule.</p>
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
                                        <strong>{feature.label}:</strong> {feature.detail}
                                    </li>
                                ))}
                            </ul>

                            <hr />

                            <button style={{ backgroundColor: plan.cardBtnBg }} className="btn mt-3">{plan.buttonText}</button>
                        </div>
                    </div>
                ))}

                <div className="col-md-6 col-sm-12 my-3">
                    <div className="plan_long-card" style={{ backgroundColor: '#C7F16C' }}>
                        <div className="p-3 pt-4">
                            <h5 className="">Special Discounts & Scholarships</h5>
                            <p className="pe-5">We offer discounts for students, early subscribers, and group enrollments. <strong>Need financial support?</strong> Apply for our scholarship program designed to help passionate learners thrive.</p>

                            <button style={{ backgroundColor: '#AFD55E' }} className="btn mt-3">Coming Soon</button>
                        </div>
                        <img src={cardImage} alt="img" width='100%' height='168px' className='' style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

        </section>

    </section>
  )
}

export default PricingPlansSection