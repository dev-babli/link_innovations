import React from "react";

const pricingPlans = [
    {
        name: "Starter",
        price: "$29",
        period: "per month",
        description: "Perfect for small teams getting started",
        features: [
            "Up to 5 users",
            "Basic financial modeling",
            "Standard integrations",
            "Email support"
        ],
        cta: "Start free trial",
        popular: false
    },
    {
        name: "Professional",
        price: "$99",
        period: "per month",
        description: "For growing teams that need more power",
        features: [
            "Up to 25 users",
            "Advanced modeling tools",
            "All integrations",
            "Priority support",
            "Custom reporting"
        ],
        cta: "Start free trial",
        popular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        description: "For large organizations with complex needs",
        features: [
            "Unlimited users",
            "Advanced security",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee"
        ],
        cta: "Contact sales",
        popular: false
    }
];

const LinkVaretoPricingSection = () => {
    return (
        <section className="bg-gray-50 py-20 lg:py-32">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Choose your plan.
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="text-gray-600">Monthly</span>
                        <div className="relative">
                            <input type="checkbox" id="toggle" className="sr-only" />
                            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                                <div className="w-12 h-6 bg-gray-300 rounded-full p-1 transition-colors">
                                    <div className="w-4 h-4 bg-white rounded-full shadow transform transition-transform"></div>
                                </div>
                            </label>
                        </div>
                        <span className="text-gray-600">Yearly <span className="text-green-600 font-semibold">Save 50%</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${plan.popular
                                    ? 'bg-purple-600 text-white shadow-2xl transform scale-105'
                                    : 'bg-white text-gray-900 shadow-lg border border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <div className="mb-4">
                                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                                        {plan.period}
                                    </span>
                                </div>
                                <p className={`${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.popular
                                        ? 'bg-white text-purple-600 hover:bg-gray-100 hover:shadow-lg'
                                        : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LinkVaretoPricingSection;