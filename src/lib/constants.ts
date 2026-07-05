// src/lib/constants.ts
// Single source of truth for site content, links, and shared data.
// Components import from here — never hardcode this data inline.
//
// FRAMING RULE: all forward-looking numbers below are PROJECTIONS/TARGETS,
// not proven results. Present them with language like "designed to",
// "targeting", "projected". This is a pre-launch company. Do not state
// pilot-stage figures as established fact. Review before public launch.
//
// PRICING is intentionally NOT included and must NOT appear on the public
// site. It is handled in direct conversation only.

// ---- Contact & external links ----
export const CONTACT = {
    email: "useopticsai@gmail.com",
    // NOTE: personal-profile URL for now (/in/). A company page (/company/)
    // is coming — swap this when it exists.
    linkedin: "https://www.linkedin.com/in/useoptics/",
};

// ---- Navigation (top nav links; Join Waitlist is the single CTA, kept separate) ----
export const NAV_LINKS = [
    { label: "Product", href: "/product" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Careers", href: "/careers" },
];

export const PRIMARY_CTA = { label: "Join Waitlist", href: "/waitlist" };

// ---- Team ----
export const TEAM = [
    {
        name: "Mohammad Alrahmah",
        role: "Co-Founder & CEO",
        education: "Cornell University (Computer Science & Economics)",
        focus:
            "Economic modeling and the architecture of the Bayesian forecasting engine.",
        linkedin: "https://www.linkedin.com/in/mohammad-alrahmah-05401528a/",
    },
    {
        name: "Hashem Alrahmah",
        role: "Co-Founder & CTO",
        education: "Georgetown University (M.S. Data Science & Analytics)",
        focus: "Production ML systems and scalable data pipelines.",
        linkedin: "https://www.linkedin.com/in/hashem-alrahmah/",
    },
];

// ---- Home: value proposition ----
export const HERO = {
    tagline: "Supporting bakeries, reducing food waste.",
    coreFunction:
        "Optics optimizes inventory and operations for independent bakeries.",
    // projection framing:
    impact:
        "Designed to eliminate the ~25% revenue leak caused by overproduction, using demand forecasting that targets ~85% accuracy.",
    onboarding: "30-minute setup, no hardware required.",
    status: "Now accepting early-access bakeries.",
};

// ---- Problem ----
export const PROBLEM = [
    {
        title: "Financial waste",
        body: "Bakeries can lose an estimated $30K–$50K a year throwing away up to 25% of daily production — direct COGS across ingredients, labor, and energy.",
    },
    {
        title: "High barriers to entry",
        body: "Enterprise inventory platforms often require months of integration and $10K+ in upfront setup fees.",
    },
    {
        title: "Unscientific ordering",
        body: "Bakers rely on intuition, leading to overbaking or selling out early and losing revenue.",
    },
];

// ---- Technology ----
export const TECHNOLOGY = [
    {
        title: "Bayesian hierarchical modeling",
        body: "Learns from a shared network of bakeries to enable Day-1 forecasting using network-wide data. (Network scale is the vision/target, not a current count.)",
    },
    {
        title: "Real-time signal integration",
        body: "Ingests external signals — weather shifts, local events, holidays, social trends — to continuously update demand predictions.",
    },
    {
        title: "Agentic AI co-pilot",
        body: "Proactive production adjustments, anomaly flags, and automatically generated next-day prep sheets.",
    },
];

// ---- Competitive edge (vs. legacy POS like Toast/Oracle) ----
export const COMPETITIVE_EDGE = [
    "Waste-elimination AI, a Bayesian forecasting engine, an agentic co-pilot, and a cross-bakery learning network.",
    "Data advantage: real-time weather and event data.",
    "Deployment advantage: 30-minute setup, zero setup fees.",
];

// ---- About / Company ----
export const ABOUT =
    "Optics helps independent bakeries stop guessing how much to bake. By forecasting demand from network-wide and real-time signals, it aims to cut the overproduction waste that quietly erodes small bakeries' margins — without the cost and complexity of enterprise inventory systems.";

// ---- Careers ----
export const CAREERS =
    "We're growing. If you feel strongly about our mission, fill out this form or reach out to us directly — we'd love to connect!";

// ---- Logo (in /public; transparent PNG now available for primary) ----
export const LOGO = {
    primary: "/logoNOBG.png",
    alt: "/logowithbio.jpg",
};