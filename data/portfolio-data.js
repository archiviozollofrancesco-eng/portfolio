// ==========================================
// 🗄️ YOUR PORTFOLIO DATABASE
// ==========================================

const projectsData = [
    {
        id: 1,
        title: "European Youth Event",
        tag: "Communication",
        description: "A clean, data-heavy dashboard designed for a modern fintech startup. Focused on data visualization and ease of use.",
        image: "images/project1.jpg",
        tech: ["React", "Tailwind", "D3.js"]
    },
    {
        id: 2,
        title: "LevelUP! Event",
        tag: "Communication",
        description: "An intuitive mobile interface for controlling connected home devices. Emphasizes one-tap actions and clean typography.",
        image: "images/project2.jpg",
        tech: ["SwiftUI", "Figma", "CoreAnimation"]
    },
    {
        id: 3,
        title: "Minimalist E-Commerce",
        tag: "UI/UX",
        description: "A concept for a high-end fashion retailer. The design gets out of the way to let the photography speak for itself.",
        image: "images/project3.jpg",
        tech: ["Next.js", "Framer Motion"]
    }
];

const writingsData = [
    {
        title: "Un governo di destra inutile",
        date: "Oct 12, 2026",
        preview: "Why having fewer options actually makes for better software and happier users...",
        image: "images/writing1.jpg",
        
        // Notice the backticks (` `) around the fullText below. 
        // This allows you to use normal "Enter" line breaks safely!
        fullText: `True Apple-esque minimalism isn't just about removing visual clutter; it's about removing cognitive clutter. It's about having the courage to make decisions on behalf of the user, curating the experience so they don't have to navigate a labyrinth of settings.

We must return to interfaces that constrain. Constraints breed creativity, yes, but in software, constraints breed peace of mind.`
    },
    {
        title: "Architecture of Society",
        date: "Sep 28, 2026",
        preview: "Reflecting on how physical urban planning dictates digital community structures...",
        image: "images/writing2.jpg",
        fullText: `If you look closely at how cities are planned, you'll see a mirror of how we construct our digital spaces. The wide avenues of major social platforms versus the intricate, winding alleyways of niche forums.

As we spend more time inhabiting the internet, the principles of civic design become paramount to software engineering. How do we design public digital squares that foster healthy debate rather than mob mentality?

The architecture of a space dictates the behavior within it. A room with all chairs facing a single podium creates a lecture. A room with chairs in a circle creates a conversation. What does an algorithmic feed create?`
    }
];
