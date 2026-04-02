"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    register( /* { strapi }: { strapi: Core.Strapi } */) { },
    async bootstrap({ strapi }) {
        try {
            const sDb = strapi.documents('api::service.service');
            const count = await sDb.count({});
            if (count === 0) {
                await sDb.create({
                    data: {
                        title: "Cloud Infrastructure",
                        slug: "cloud-infrastructure",
                        summary: "Advanced architectural optimization for scalable deployments.",
                        features: ["AWS integration", "Zero-downtime scaling"]
                    },
                    status: 'published'
                });
                await sDb.create({
                    data: {
                        title: "Data Analytics",
                        slug: "data-analytics",
                        summary: "Unlock actionable insights from large datasets safely.",
                        features: ["Machine Learning", "Big Data"]
                    },
                    status: 'published'
                });
                console.log("Mock Services inserted!");
            }
            const pDb = strapi.documents('api::project.project');
            if ((await pDb.count({})) === 0) {
                await pDb.create({
                    data: {
                        client: "Global FinTech Solutions",
                        slug: "fintech-solutions",
                        challenge: "Legacy monolith causing performance issues.",
                        solution: "Refactored to robust serverless architecture with Node.",
                        results: "Latency drops by 40% alongside 100% SLA uptime.",
                        technicalTags: ["Node.js", "Docker", "AWS"]
                    },
                    status: 'published'
                });
                console.log("Mock Projects inserted!");
            }
            const tDb = strapi.documents('api::testimonial.testimonial');
            if ((await tDb.count({})) === 0) {
                await tDb.create({
                    data: {
                        clientName: "Jane Doe",
                        role: "CEO at TechCorp",
                        quote: "Innomax transformed our outdated backend systems entirely.",
                        rating: 5
                    },
                    status: 'published'
                });
                console.log("Mock Testimonials inserted!");
            }
            const prDb = strapi.documents('api::pricing-plan.pricing-plan');
            if ((await prDb.count({})) === 0) {
                await prDb.create({
                    data: {
                        tierName: "Enterprise Tier",
                        price: "$3,499/mo",
                        featureList: ["Dedicated support", "Custom Integrations", "Advanced Analytics"],
                        isPopular: true
                    },
                    status: 'published'
                });
                console.log("Mock Pricing inserted!");
            }
        }
        catch (e) {
            console.error("Bootstrap mock error:", e);
        }
    },
};
