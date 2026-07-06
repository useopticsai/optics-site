// src/lib/constants.ts
// Single source of truth for site content, links, and shared data.
// Components import from here. Never hardcode this data inline.
//
// FRAMING RULE: all forward-looking numbers below are PROJECTIONS/TARGETS,
// not proven results. Present them with language like "designed to",
// "targeting", "built to". This is a pre-launch company. Do not state
// pilot-stage figures as established fact. Review before public launch.
//
// PRICING is intentionally NOT included and must NOT appear on the public
// site. It is handled in direct conversation only.
//
// STYLE: bold, direct, plain language. Short sentences. Active voice.
// No em-dashes anywhere in copy.

// ---- Contact & external links ----
export const CONTACT = {
    email: "useopticsai@gmail.com",
    // NOTE: personal-profile URL for now (/in/). A company page (/company/)
    // is coming. Swap this when it exists.
    linkedin: "https://www.linkedin.com/in/useoptics/",
};

// ---- Navigation (top nav links; Join Pilot is the single CTA, kept separate) ----
// Team has been merged into the Mission page, so it is no longer a nav item.
export interface NavItem {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

export const NAV_LINKS: NavItem[] = [
    {
        label: "Product",
        href: "/product",
        children: [
            { label: "The Problem", href: "/product#problem" },
            { label: "Technology", href: "/product#technology" },
            { label: "Competitive Edge", href: "/product#competitive-edge" },
            { label: "MVP Demo", href: "/product#demo" },
        ],
    },
    {
        label: "Mission",
        href: "/mission",
        children: [
            { label: "Our Mission", href: "/mission#mission" },
            { label: "Values", href: "/mission#values" },
            { label: "Team", href: "/mission#team" },
        ],
    },
    { label: "Careers", href: "/careers" },
];

export const PRIMARY_CTA = { label: "Join the Pilot", href: "/pilot" };

// ---- Home: value proposition ----
export const HERO = {
    tagline: "Stop baking what you throw away.",
    subtag: "Supporting bakeries. Reducing food waste.",
    coreFunction:
        "Optics forecasts demand for independent bakeries, so you bake the right amount every morning.",
    // projection framing: these are targets, not proven results.
    impact:
        "Built to eliminate the roughly 25% revenue leak from overproduction, with demand forecasting that targets 85% accuracy.",
    onboarding: "30-minute setup. No hardware required.",
    status: "Now accepting early-access bakeries.",
};

// ---- Problem ----
export const PROBLEM = [
    {
        title: "Money in the trash",
        body: "Independent bakeries can lose $30K to $50K a year throwing away up to 25% of daily production. That is real cost across ingredients, labor, and energy.",
    },
    {
        title: "Enterprise tools are out of reach",
        body: "Legacy inventory platforms take months to integrate and charge $10K or more in upfront setup fees. Small bakeries cannot justify that.",
    },
    {
        title: "Ordering by gut feel",
        body: "Most bakers guess. They overbake and toss the surplus, or sell out early and lose the sale. Either way, money walks out the door.",
    },
];

// Short problem teaser headline for the Home page problem section.
export const PROBLEM_TEASER_HEADLINE =
    "Independent bakeries lose thousands every year — silently.";
export const PROBLEM_HEADLINE =
    "Bakeries weren't built to waste — but the tools haven't caught up.";
export const PROBLEM_SUBLINE =
    "Independent bakeries face systemic inefficiencies that quietly erode margins every day.";

// ---- Technology ----
export const TECHNOLOGY = [
    {
        title: "Bayesian hierarchical modeling",
        body: "Optics learns from a shared network of bakeries to forecast from day one, using network-wide patterns instead of waiting months for your own history. (Network scale is the target, not a current count.)",
    },
    {
        title: "Real-time signal integration",
        body: "The model reads outside signals like weather shifts, local events, holidays, and social trends, and updates its demand predictions as conditions change.",
    },
    {
        title: "Agentic AI co-pilot",
        body: "Optics does not just predict. It adjusts production proactively, flags anomalies, and generates next-day prep sheets automatically.",
    },
];

// Section headline for the Technology section.
export const TECHNOLOGY_HEADLINE = "Built different — from the math up.";
export const TECHNOLOGY_SUBLINE =
    "Three layers of intelligence designed to work together, so every forecast gets sharper over time.";

// ---- Competitive edge (vs. legacy POS like Toast/Oracle) ----
export const COMPETITIVE_EDGE_HEADLINE = "What legacy POS can't do.";
export const COMPETITIVE_EDGE = [
    "Waste-elimination AI, a Bayesian forecasting engine, an agentic co-pilot, and a cross-bakery learning network in one product.",
    "Real-time weather and event data feeding every prediction.",
    "A 30-minute setup with zero setup fees.",
];

// ---- MVP Demo ----
export const DEMO = {
    label: "See it in action",
    title: "MVP Demo",
    body: "A walkthrough of the Optics forecasting dashboard is coming soon.",
    placeholder: "Demo video coming soon",
};

// ---- Mission page content ----
// Lead statement for the Mission page.
export const MISSION = {
    headline: "Good food should feed people, not landfills.",
    lead:
        "Independent bakeries throw away up to a quarter of what they make. Not because they are careless, but because guessing tomorrow's demand is genuinely hard. Optics exists to end that guessing.",
    body: [
        "We build demand forecasting that works for real bakeries. It reads network-wide patterns and live signals, learns fast, and tells you how much to bake before the ovens turn on.",
        "Enterprise tools already solve this for grocery chains and factories. Small bakeries have been left out, priced out by six-figure systems and months of setup. We think the shops that care most about their craft deserve the same edge.",
        "Cutting waste is not only good business. Every loaf that gets eaten instead of tossed is water, energy, grain, and labor that did not go to waste. We are building a company where the profitable choice and the responsible choice are the same choice.",
    ],
    // TODO: expand with a founding story or specific origin moment if you want
    // a more personal narrative. Keep any numbers projection-framed.
};

// Short values, used as a supporting beat on the Mission page.
// These describe how the company operates, not product claims.
export const VALUES = [
    {
        title: "Bakeries first",
        body: "We build for the shop floor, not the boardroom. If it does not help a baker at 5 a.m., it does not ship.",
        image: "/values_pictures/bakeries_first.webp",
    },
    {
        title: "Honest numbers",
        body: "We frame what our technology is designed to do, and we do not dress up projections as proven results.",
        image: "/values_pictures/honest_numbers.jpg",
    },
    {
        title: "Waste is the enemy",
        body: "Every decision points at the same goal: less thrown away, more sold, more margin kept.",
        image: "/values_pictures/waste_enemy.jpg",
    },
];

export const VALUES_LABEL = "How we operate";
export const VALUES_TITLE = "Values";

// ---- Team ----
export const TEAM_HEADLINE = "The team behind Optics.";
export const TEAM = [
    {
        name: "Mohammad Alrahmah",
        role: "Co-Founder & CEO",
        education: "Cornell University, Computer Science and Economics",
        focus:
            "Economic modeling and the architecture of the Bayesian forecasting engine.",
        linkedin: "https://www.linkedin.com/in/mohammad-alrahmah-05401528a/",
        headshot: "/headshots/mohammad_headshot.jpg",
    },
    {
        name: "Hashem Alrahmah",
        role: "Co-Founder & CTO",
        education: "Georgetown University, M.S. Data Science and Analytics",
        focus: "Production ML systems and scalable data pipelines.",
        linkedin: "https://www.linkedin.com/in/hashem-alrahmah/",
        headshot: "/headshots/hashem_headshot.jpg",
    },
];

// ---- About / Company (short version, e.g. for footer or meta) ----
export const ABOUT =
    "Optics helps independent bakeries stop guessing how much to bake. It forecasts demand from network-wide and real-time signals to cut the overproduction waste that quietly erodes small bakeries' margins, without the cost and complexity of enterprise systems.";

// ---- Careers ----
export interface FormFieldConfig {
    name: string;
    label: string;
    type: "text" | "email" | "textarea" | "url" | "tel";
    required?: boolean;
    placeholder?: string;
    rows?: number;
}

export const CAREERS_FORM_CONFIG: FormFieldConfig[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
        placeholder: "Your full name",
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "you@example.com",
    },
    {
        name: "message",
        label: "What would you bring / why Optics?",
        type: "textarea",
        required: true,
        rows: 5,
        placeholder: "Tell us about your background, what you like to build, and why you want to work on food waste in independent bakeries.",
    },
    {
        name: "links",
        label: "Links (Portfolio, LinkedIn, GitHub, etc.)",
        type: "text",
        required: false,
        placeholder: "https://linkedin.com/in/... or https://github.com/...",
    },
];

export const CAREERS_FORM_MESSAGES = {
    subject: "New Application — Optics Careers",
    submitButton: "Send Application",
    submittingButton: "Sending...",
    successTitle: "Thanks — we'll be in touch.",
    successBody: "We received your application and will review it carefully.",
    errorTitle: "Something went wrong.",
    errorFallback: "We couldn't send your application right now. Please try again or email us directly.",
    unavailableTitle: "Form temporarily unavailable",
    unavailableBody: "Our submission system is currently offline. Please apply by emailing us directly.",
    requiredError: "This field is required.",
    emailError: "Please enter a valid email address.",
};

export const CAREERS = {
    headline: "Work on a problem that actually matters.",
    intro: "We're a two-person team helping independent bakeries stop throwing away good food and good money. We move fast, go deep, and take the work seriously.",
    valuesHeadline: "How we work.",
    values: [
        {
            title: "Depth over breadth",
            body: "We'd rather understand one problem completely than skim across ten. If you like going deep, you'll fit in here.",
        },
        {
            title: "Real ownership",
            body: "There are two of us. You'd own something real, not a ticket in a backlog.",
        },
        {
            title: "Honest by default",
            body: "We frame what our technology is built to do, and we hold ourselves to it. That applies to how we work together too.",
        },
        {
            title: "The mission matters",
            body: "Food waste is a real problem with real cost. We're not building another lifestyle app.",
        },
    ],
    rolesHeadline: "Hiring, but slowly.",
    rolesBody: "We're a small team and we hire deliberately. If you think you have something to offer; a niche in AI and ML, engineering, product, or something else entirely then we'd love to hear from you.",
    noOpenRoles: "No open roles at this time.",
    applyHeading: "Apply to Optics",
    preferEmailPrefix: "Prefer to email us directly? Reach us at ",
    // No specific open roles yet.
};


// ---- Pilot program ----
export const PILOT = {
    headline: "The pilot is open. Version 1 is almost here.",
    status:
        "We are finalizing version 1 of Optics and enrolling a small group of pilot bakeries right now. Pilot bakeries get in first, shape the product with us, and are the first to run their mornings on it.",
    involvesHeadline: "What the pilot involves.",
    involves: [
        {
            title: "Forecasts built for your bakery",
            body: "Optics is built to tell you how much to bake before the ovens turn on. It learns from network-wide patterns and live signals like weather, local events, and holidays, and it adjusts as conditions change.",
        },
        {
            title: "A prep sheet, not a spreadsheet",
            body: "Each day, Optics is designed to turn its forecast into a simple next-day prep sheet. No dashboards to decode at 5 a.m. Just what to make and how much.",
        },
        {
            title: "Running in 30 minutes",
            body: "Setup takes about half an hour. No new hardware, no integration project, no IT department required.",
        },
        {
            title: "Your feedback shapes version 1",
            body: "This is a pilot. You tell us what works on a real shop floor and what does not, and we build accordingly. Early bakeries have a direct line to the founders.",
        },
    ],
    whoHeadline: "Who it's for.",
    who: "Independent bakeries that are tired of throwing away good product, and want a say in the tool built to fix it.",
    formHeadline: "Apply for the pilot.",
    formIntro:
        "Tell us a bit about your bakery. We are enrolling in small batches and will reach out directly.",
    successMessage: "Thanks. We will be in touch about the pilot soon.",
    privacyNote:
        "We only use your details to contact you about the Optics pilot. We never sell them.",
};

export const PILOT_FORM_CONFIG: FormFieldConfig[] = [
    {
        name: "bakeryName",
        label: "Bakery name",
        type: "text",
        required: true,
        placeholder: "Your bakery's name",
    },
    {
        name: "name",
        label: "Contact name",
        type: "text",
        required: true,
        placeholder: "Your full name",
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "you@example.com",
    },
    {
        name: "location",
        label: "City / location",
        type: "text",
        required: true,
        placeholder: "e.g., Seattle, WA",
    },
    {
        name: "productionSize",
        label: "Approximate daily production or bakery size",
        type: "text",
        required: false,
        placeholder: "e.g., 500 loaves/day or 2 retail locations",
    },
    {
        name: "message",
        label: "Anything you want us to know?",
        type: "textarea",
        required: false,
        rows: 4,
        placeholder: "Tell us about your current morning workflow, biggest waste drivers, or any questions.",
    },
];

export const PILOT_FORM_MESSAGES = {
    subject: "New Pilot Application",
    submitButton: "Apply for Pilot",
    submittingButton: "Sending...",
    successTitle: PILOT.successMessage,
    successBody: "We received your application and will review it carefully.",
    errorTitle: "Something went wrong.",
    errorFallback: "We couldn't submit your application right now. Please try again or email us directly.",
    unavailableTitle: "Form temporarily unavailable",
    unavailableBody: "Our submission system is currently offline. Please apply by emailing us directly.",
    requiredError: "This field is required.",
    emailError: "Please enter a valid email address.",
};

// ---- Privacy policy ----
// NOTE: This is a plain-language privacy policy describing what the site
// actually does today (collects form submissions via Web3Forms, hosted on
// Vercel, no analytics/tracking cookies at time of writing).
// TODO before launch: (1) have a lawyer review, (2) set the real effective
// date, (3) add your legal entity name and contact/mailing details,
// (4) update if you add analytics, cookies, or new data processors.
export const PRIVACY = {
    headline: "Privacy, kept simple.",
    lastUpdated: "TODO: set effective date before launch",
    intro:
        "This policy explains what information Optics collects, why, and what we do with it. We keep this short and honest because that is how we want to run the company.",
    sections: [
        {
            title: "What we collect",
            body: "We only collect information you give us directly. When you submit a form on this site (the pilot application or the careers form), we collect the details you enter, such as your name, email address, bakery name, location, and anything you write in the message fields. We do not collect more than that.",
        },
        {
            title: "How your information is handled",
            body: "Our forms are processed by Web3Forms, a third-party form service that delivers your submission to our email inbox. Your submission passes through their systems to reach us. This website is hosted on Vercel. We do not currently run advertising trackers or sell your information to anyone.",
        },
        {
            title: "Why we use it",
            body: "We use the information you submit only to respond to you and to contact you about Optics, the pilot program, or a role you applied for. We do not use it for unrelated marketing, and we do not share it with advertisers.",
        },
        {
            title: "How long we keep it",
            body: "We keep your submission for as long as we need it to stay in touch with you about Optics. If you ask us to delete it, we will.",
        },
        {
            title: "Your choices",
            body: "You can ask us at any time to tell you what information we hold about you, to correct it, or to delete it. Email us and we will take care of it.",
        },
        {
            title: "Changes to this policy",
            body: "If we change how we handle your information, for example if we add analytics or new services, we will update this page. Check back here for the current version.",
        },
        {
            title: "Contact",
            body: "Questions about privacy? Email us and we will respond.",
        },
    ],
    // The contact section should render CONTACT.email from constants, not a
    // hardcoded address.
};

// ---- Closing CTA (reused across pages via CtaBand) ----
export const CLOSING_CTA = {
    headline: "See what smarter baking looks like.",
    subline: "Join the bakeries getting ahead of demand instead of guessing at it.",
};

// ---- Logo (in /public) ----
export const LOGO = {
    primary: "/logoNOBG.png",
    secondary: "/logowithbio.jpg",
    altText: "Optics",
};