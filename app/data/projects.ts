export interface ProjectSection {
  title: string;
  items: string[];
  image?: string;
  imageAbove?: string;
}

export interface ProjectFile {
  id: string;
  filename: string;
  folder: string;
  title: string;
  meta: string;
  status: 'shipped' | 'in-progress' | 'patented' | 'archived';
  summary: string;
  stats?: { value: string; label: string }[];
  sections: ProjectSection[];
}

export interface Folder {
  name: string;
  label: string;
  order: number;
}

export const folders: Folder[] = [
  { name: 'about', label: 'about', order: 0 },
  { name: 'constant-contact', label: 'constant-contact', order: 1 },
  { name: 'sharpspring', label: 'sharpspring', order: 2 },
  { name: 'side-projects', label: 'side-projects', order: 3 },
];

export const projects: ProjectFile[] = [
  // ─── ABOUT ────────────────────────────────────────
  {
    id: 'how-i-work',
    filename: 'how-i-work.md',
    folder: 'about',
    title: 'How I Work',
    meta: 'Senior Product Designer · 10+ years · Florida',
    status: 'shipped',
    summary:
      'I solve problems for users in ways that move business metrics. Every project starts with understanding the person on the other end, and every decision ties back to a measurable outcome. Strong cross-functional collaboration is what makes that work consistently and at pace.',
    sections: [
      {
        title: 'Before I Open Figma',
        items: [
          'Three-way kickoff with PM and engineering. Questions only.',
          'Query Snowflake data via Cursor + MCP. Understand behavior, scale, and drop-off before sketching.',
          'Benchmark competitors (Mobbin, PageFlows, Cosmos). What works, what can be pushed, what shouldn\'t be reinvented.',
          'Map end-to-end flow on Remarkable tablet, import to FigJam. Consider what happens before and after the feature.',
        ],
      },
      {
        title: 'Design Philosophy',
        items: [
          'Start high-level, zoom into granularity. Users should understand without instructions.',
          'Fewest possible foundational elements, expanded as you move deeper.',
          'Every design decision ladders to a business metric or user outcome.',
          'Wireframes and flows before high-fidelity. Jumping to hi-fi before alignment wastes weeks.',
        ],
      },
      {
        title: 'Engineering Collaboration',
        items: [
          'Fluent in HTML, CSS, Tailwind, JavaScript. Can pinpoint exact DOM structures I\'m designing for.',
          'Pull branches, make changes in Cursor, push back up. Same language as engineers.',
          'Build production-ready React output with Figma Make. What I hand off is usually close to shippable.',
        ],
      },
      {
        title: 'Values',
        items: [
          'Solve real problems, measure the result, iterate.',
          'Design and engineering should speak the same language.',
          'The best work comes from decisive teams with clear ownership.',
        ],
      },
    ],
  },
  {
    id: 'ai-workflow',
    filename: 'ai-workflow.md',
    folder: 'about',
    title: 'AI Workflow',
    meta: 'Daily toolkit · 2+ years professional AI design experience',
    status: 'shipped',
    summary:
      'AI is core craft infrastructure. Cursor, Claude Code, Figma Make, and MCP connections to Figma and Snowflake are my daily workflow.',
    sections: [
      {
        title: 'Daily Stack',
        items: [
          'Cursor with MCP servers connected to Figma, Snowflake, and GitHub repos.',
          'Claude Code CLI for development automation and project scaffolding.',
          'Figma Make for prototyping with near-production React output.',
        ],
      },
      {
        title: 'Cursor + Snowflake MCP',
        items: [
          'Query user behavior data directly at project kickoff.',
          'Understand scale, behavior patterns, and drop-off before opening Figma.',
          'No waiting for analytics hand-offs. Data is live and accessible.',
        ],
      },
      {
        title: 'Cursor + Figma MCP',
        items: [
          'Pull Figma context directly into the code editor.',
          'Design decisions informed by what\'s actually in the component library.',
          'Reduces design-to-dev gap by working in both systems simultaneously.',
        ],
      },
      {
        title: 'LLM Training Experience',
        items: [
          'Hands-on training data curation for Prompt-to-Email at Constant Contact.',
          'Used the email database + performance metrics as training signal for the model.',
          'Learned how model output quality depends on input structure and data quality.',
          'Currently exploring Lovable, Bolt, MagicPatterns to expand the toolkit.',
        ],
      },
    ],
  },

  // ─── CONSTANT CONTACT ─────────────────────────────
  {
    id: 'mweb-activation',
    filename: 'mweb-gamification.md',
    folder: 'constant-contact',
    title: 'mWeb Gamification Experience',
    meta: 'Constant Contact · Q4 2025 · PLG Growth Pod',
    status: 'shipped',
    summary:
      'Gamified activation flow built from scratch on a surface that had never been designed to activate anyone. Highest revenue impact of three simultaneous PLG experiments.',
    stats: [
      { value: '10,000+', label: 'monthly mWeb sign-ups' },
      { value: '4.8%', label: 'activation rate (users had to go to desktop)' },
    ],
    sections: [
      {
        title: 'The Problem',
        imageAbove: '/mweb-wireframes.png',
        items: [
          'mWeb was a billboard. It pointed users to desktop or the app with no activation infrastructure.',
          'Users got stuck on send-ready prerequisites (email verification, physical address) before they could send their first email.',
          'Email verification had been a friction point for years. Leadership resisted gating it at sign-up.',
        ],
      },
      {
        title: 'What I Did',
        imageAbove: '/mweb-figmamakeideation.png',
        items: [
          'Queried Snowflake data, researched gamification patterns, iterated with Figma Make + Cursor prototyping.',
          'Stripped dashboard noise for new users. Built level-based progression with a progress bar.',
          'Each completed step triggers celebration + CTA pointing straight to the next step. No dead ends.',
          'Verify email → celebrate → add address → celebrate → add contact → celebrate → send.',
        ],
        image: '/mweb-levels.jpg',
      },
      {
        title: 'The Full Flow',
        items: [
          'Level-based progression guides users through each activation prerequisite.',
          'Email editor, contacts upload, and social posting all redesigned for mWeb as part of this initiative.',
        ],
        image: '/mweb-levelflow.jpg',
      },
      {
        title: 'Figma Flow',
        items: [
          'End-to-end user flow mapped in Figma covering every activation path and edge case.',
        ],
        image: '/mweb-figmaflow.png',
      },
      {
        title: 'Results (A/B, 25,469 users)',
        items: [
          '+21.6% activation rate',
          '+10.6% email sends · +12.7% first-time senders · +16.9% power senders (3+)',
          '+4.8% email verification (largest single metric jump across all experiments)',
          '+6.7% ELTV per converter ($609 vs $571) · +$861K estimated annual revenue',
        ],
      },
      {
        title: 'Key Insight',
        items: [
          'Users who activated faster self-selected into higher-value plans. The gamification improved converter quality, not just quantity.',
          'AI-assisted prototyping (Figma Make + Cursor) compressed the iteration cycle under tight timelines.',
        ],
      },
    ],
  },
  {
    id: 'newton-editor',
    filename: 'mobile-email-editor.md',
    folder: 'constant-contact',
    title: 'Mobile Email Editor',
    meta: 'Constant Contact · Designed 2023, shipped as mWeb 2025',
    status: 'patented',
    summary:
      'Novel mobile email editor interaction model. UXR-validated, shelved for 18 months, then resurrected and shipped. Being patented.',
    sections: [
      {
        title: 'The Problem',
        imageAbove: '/editor-originalsendflow.png',
        items: [
          'Desktop email editors rely on precise mouse interactions. Small tap targets on mobile create frustration.',
          'Nobody had solved the core dexterity problem of editing rich content on a small screen.',
        ],
      },
      {
        title: 'The Solution',
        items: [
          'Expanded state interaction model. Tapping the email body triggers an expanded view where every element stretches to 44px minimum tap height with labels.',
          'Tapping an element opens a full-screen editing view with bottom sheet controls.',
          'Users never fight small targets. The interaction model teaches itself through use.',
          'Benchmarked against Adobe Express, Canva, Mailchimp, Squarespace, Wix, and others.',
        ],
        image: '/editor-expandingfordexterity.jpg',
      },
      {
        title: 'Editing + Scheduling',
        items: [
          'Full-screen text editing with bottom sheet style controls for color, font size, and layout.',
          'Draft saving and calendar-based scheduling built into the mobile flow.',
        ],
        image: '/editor-textediting.jpg',
      },
      {
        title: 'UXR Validation + Resurrection',
        imageAbove: '/editor-savingdraft.jpg',
        items: [
          'Two prototype rounds. Task completion: 58% → 89% (31-point jump driven by iteration).',
          'Shelved when the app team was reallocated. 18 months later, PLG team planned a simplified mWeb editor.',
          'I pushed back with prior UXR data: a bad editor causes more attrition than no editor. Engineering rebuilt it in ~2 weeks.',
        ],
        image: '/editor-schedulingcalendar.jpg',
      },
      {
        title: 'Results (mWeb A/B, 14,523 users)',
        items: [
          '+2.1% trial-to-paid · +2x activation-to-send lift · +17.5% second email creation',
          'Being patented. +$60K estimated annual revenue.',
          'Express Send had been inflating send counts through low-commitment interactions. The real editor replaced hollow sends with meaningful ones, which is why trial-to-paid improved while raw send volume dropped.',
        ],
      },
    ],
  },
  {
    id: 'brandkit',
    filename: 'brandkit.md',
    folder: 'constant-contact',
    title: 'BrandKit',
    meta: 'Constant Contact · 2022 · Sole Designer',
    status: 'shipped',
    summary:
      'Brand asset scraping and template personalization system. 107M+ assets processed. 400K+ users. Sole designer, shipped in 2 months.',
    sections: [
      {
        title: 'The Problem',
        imageAbove: '/bk-brandkit-preview.jpg',
        items: [
          '3,000+ email templates, none felt like the user\'s business.',
          'Manual brand customization caused significant friction and drop-off.',
          'CTCT\'s users are SMB owners without hex codes, optimized images, or accessible logos.',
        ],
      },
      {
        title: 'The Solution (Pre-LLM)',
        imageAbove: '/bk-image-18.jpg',
        items: [
          'Users enter their website URL. System scrapes logo, colors, and images.',
          'Selection interface for reviewing and correcting scraped assets.',
          'Manual color assignment override for when the system mis-applied scraped colors.',
          'Background color constraints (defaulted to light unless clearly dark site). Logo as primary trust-builder.',
        ],
        image: '/bk-apply-your-brand.jpg',
      },
      {
        title: 'Results',
        imageAbove: '/bk-image-19.jpg',
        items: [
          'Trial users who engaged with BrandKit were 68.7% more likely to convert to paid.',
          '107M+ assets processed. 400K+ users. Sole designer, shipped in 2 months.',
          'Architecture intentionally left room for LLM replacement. That replacement became Prompt-to-Email years later.',
        ],
      },
    ],
  },
  {
    id: 'prompt-to-email',
    filename: 'prompt-to-email.md',
    folder: 'constant-contact',
    title: 'Prompt-to-Email',
    meta: 'Constant Contact · 2024–2025 · AI/LLM',
    status: 'shipped',
    summary:
      'AI email generation with LLM training data curation. A demographic-informed search reframe changed adoption across the platform.',
    sections: [
      {
        title: 'Origin',
        imageAbove: '/pte-hero.jpg',
        items: [
          'I initiated the concept based on UXR: users wanted templates reflecting their business.',
          'Original vision included site scraping for brand context (connected to BrandKit). Narrowed scope when the vector system wasn\'t ready.',
        ],
      },
      {
        title: 'The Real Challenge',
        imageAbove: '/pte-wireframe-input.jpg',
        items: [
          'Teaching the LLM what a good email looks like. Worked with engineering and the AI team on training data.',
          'Used CTCT\'s email database with performance metrics. Highest-converting emails trained the model on format and structure.',
          'Builder packs: modular email sections the LLM could compose based on user prompts.',
        ],
        image: '/pte-wireframe-results.jpg',
      },
      {
        title: 'The Search Reframe',
        imageAbove: '/pte-inapp-preview.webp',
        items: [
          'UXR showed CTCT\'s core demographic (45+) was put off by "generate an email" framing.',
          'I repositioned the prompt as a search field: "search for the email you want to create."',
          'Transformed CTCT from a limited template library into a platform where users could find a template for anything.',
        ],
        image: '/pte-inapp-results.webp',
      },
      {
        title: 'Results',
        items: [
          'Email creation time: 25 minutes → under 4 minutes for new users.',
          'Primary entry point for 38% of new email campaigns.',
          '52% higher send-completion rate vs. blank templates.',
        ],
      },
    ],
  },
  {
    id: 'contacts-redesign',
    filename: 'contacts-redesign.md',
    folder: 'constant-contact',
    title: 'Contacts Upload Redesign',
    meta: 'Constant Contact · Q4 2025 · Desktop + mWeb',
    status: 'shipped',
    summary:
      'Redesigned the contacts upload flow. Fixed false completion signals, cognitive overload, and field mapping friction. Cleanest cause-and-effect chain of the three PLG experiments.',
    sections: [
      {
        title: 'The Problem',
        imageAbove: '/cu-original-screen---before-upload.jpg',
        items: [
          'Drop field turned green with checkmark on file add, but users still had to hit Continue. Many read the checkmark as "done" and left.',
          'CTA changed to "Replace" after adding a file. The only visible action suggested replacing, not continuing.',
          'Field mapping had massive cognitive overload. Dozens of columns needing manual mapping.',
        ],
        image: '/cu-original-screen---after-upload.jpg',
      },
      {
        title: 'What I Fixed',
        imageAbove: '/cu-original-screen---mapping-page.jpg',
        items: [
          'Blue instead of green on file add (informative, not celebratory). CTA changed to "Continue" inside the drop field.',
          'Auto-mapped four core fields (name, email, phone). Everything else defaulted to "skipped." Users could still manually map more.',
          'Moved sample data column from second to last position. Reduced rows from four to two. This single change dramatically improved comprehension.',
          'Converted a full separate permission consent page into an inline dialog. Same compliance, better completion.',
        ],
        image: '/cu-new-screen---before-upload.jpg',
      },
      {
        title: 'The Redesign',
        imageAbove: '/cu-new-screen---after-upload.jpg',
        items: [
          'Blue state replaces the false-completion green. "Continue" is the primary CTA at every stage.',
          'Redesigned mapping page with auto-mapped fields, color-coded status, and reduced sample data.',
        ],
        image: '/cu-new-screen---mapping-page.jpg',
      },
      {
        title: 'Results (A/B, 4,462 users)',
        items: [
          '+3.0% trial-to-paid (48.8% → 50.2%)',
          '+3.0% deep contacts (82.6% → 85.1%)',
          '+2.4% email sends · +$215K estimated annual revenue',
          'Better upload → more contacts → more sends → more conversions.',
        ],
      },
    ],
  },
  {
    id: 'dmarc-compliance',
    filename: 'dmarc-compliance.md',
    folder: 'constant-contact',
    title: 'DMARC Compliance',
    meta: 'Constant Contact · Oct 2023 – Jan 2024 · Emergency',
    status: 'shipped',
    summary:
      'Google/Yahoo DMARC mandate threatened 80% of 460K users. Four months to solve it. Cited as the best industry solution among all email platforms.',
    sections: [
      {
        title: 'The Crisis',
        items: [
          'Oct 2023: Google and Yahoo required DMARC authentication for bulk senders by Feb 1, 2024.',
          '~60-70% of CTCT\'s 460K users sent from freemail addresses (Gmail, Yahoo). Non-compliance = all emails land in spam.',
          'Four months to solve a problem affecting roughly 80% of the entire user base at a scale support agents couldn\'t handle one-on-one.',
        ],
      },
      {
        title: 'The Solution',
        items: [
          'Freemail users: ccsend.com subdomain system. joesdonuts@gmail.com became joe@joesdonuts.ccsend.com. No DNS config required. 100% migration rate.',
          'Custom domain users: step-by-step DNS tutorial in plain language. Flow wasn\'t marked complete until live DNS check confirmed DMARC propagation.',
          'Auto-routed users on login to the correct path. Custom domain users could opt into ccsend.com if they preferred.',
        ],
      },
      {
        title: 'The Team',
        items: [
          'Design, engineering, deliverability, and content design working ~12-hour days for three months.',
          'The subject matter was deeply technical. The margin for confusion in the user experience was essentially zero.',
        ],
      },
      {
        title: 'The Outcome',
        items: [
          'Support call volume stayed far below projections.',
          'Users navigated a DNS compliance process without calling support.',
          'CTCT cited as best industry solution among all email marketing platforms.',
        ],
      },
    ],
  },
  {
    id: 'social-integration',
    filename: 'social-integration.md',
    folder: 'constant-contact',
    title: 'Social Media Integration',
    meta: 'Constant Contact · 2024–2025 · Two Phases',
    status: 'shipped',
    summary:
      'Two-phase social posting experience. Phase 1 shipped native posting across iOS, iPad, and Android. Phase 2 rebuilt it with AI-powered platform-specific content generation.',
    sections: [
      {
        title: 'Phase 1 — Native Social Posting',
        items: [
          'First native social posting for iOS, iPad, Android. Facebook, Instagram, LinkedIn. I owned every surface: platform selection, OAuth, composition, preview, scheduling, drafts.',
          'Users expected to write one post for all platforms (like desktop). The mobile-first build didn\'t support multi-platform posting from the start.',
          'I should have pushed back harder on that gap earlier. Lesson learned, applied directly in Phase 2.',
        ],
      },
      {
        title: 'Phase 2 — AI-Powered Rebuild (mWeb PLG)',
        items: [
          'LLM generates platform-specific captions from a single prompt. One input, unique outputs per platform.',
          'Instead of generating AI images (which underperform on social), I surfaced the LLM\'s image description as human-readable creative direction.',
          '"Take a real photo of your kitchen counter with flowers." Real images outperform generated ones consistently.',
        ],
      },
      {
        title: 'Results',
        items: [
          'Phase 1: 34% social posting adoption. +28% weekly social posts. 41% adoption of email-to-social AI summarization.',
          'Phase 2: platform-specific AI content with a novel image prompt approach that prioritized user performance over product convenience.',
        ],
      },
    ],
  },
  {
    id: 'in-app-subscriptions',
    filename: 'in-app-subscriptions.md',
    folder: 'constant-contact',
    title: 'In-App Subscriptions',
    meta: 'Constant Contact · May 2025 · iOS',
    status: 'archived',
    summary:
      'iOS in-app purchase flow for trial-to-paid conversion. Well-executed and well-tested. Deprioritized due to Apple pricing constraints and the Epic v. Apple ruling.',
    sections: [
      {
        title: 'The Gap',
        items: [
          'CTCT had no way to convert trial users to paid from within the mobile app.',
          'Apple Pay is one of the lowest-friction payment flows that exists, and it wasn\'t available to users.',
        ],
      },
      {
        title: 'What I Did',
        items: [
          'Designed a dark-toned paywall, intentionally breaking from the app\'s white background. Tonal shift signals "pay attention, make a decision." Tested well in UXR.',
          'Learned the RevenueCat editor directly. Built paywalls myself rather than handing off specs. Navigated their v1 → v2 editor transition mid-project.',
          'Engineering adopted my RevenueCat builds directly, cutting implementation time and eliminating translation drift.',
        ],
      },
      {
        title: 'Why It Was Deprioritized',
        items: [
          'Apple\'s pricing constraints meant CTCT couldn\'t mirror existing plans inside Apple\'s system, creating customer service complexity.',
          'Epic v. Apple ruling opened external web payment links. Leadership chose to test a mApp-to-mWeb pay flow instead.',
        ],
      },
      {
        title: 'Results (Pre-Deprioritization)',
        items: [
          '+22% free-to-paid conversion rate within first quarter of limited rollout.',
          '-15% churn among Lite-tier users who previously hit send limits and abandoned.',
        ],
      },
    ],
  },

  // ─── SHARPSPRING ──────────────────────────────────
  {
    id: 'white-label-systems',
    filename: 'white-label-systems.md',
    folder: 'sharpspring',
    title: 'White-Label Design Systems',
    meta: 'SharpSpring · 2019–2021 · Carried into Constant Contact',
    status: 'shipped',
    summary:
      'Token-based design system for agency partners who rebranded the platform for their SMB clients. Genuine white-label work with multi-brand, multi-context design constraints.',
    sections: [
      {
        title: 'The Context',
        items: [
          'SharpSpring: marketing automation platform serving thousands of agencies.',
          'Agencies rebranded the tool for their SMB clients. Components needed to hold up under different brand tokens, client contexts, and customization levels.',
        ],
      },
      {
        title: 'What I Built',
        items: [
          'Token-based design system and Figma component library.',
          'Accessibility-compliant component templates that became the foundation carried into the Constant Contact acquisition.',
          'Brand Onboarding Flow integrating brand-data ingestion to reduce setup time.',
        ],
      },
      {
        title: 'Multi-Surface Continuation',
        items: [
          'Design system work at CTCT continued across mobile app, mobile web, and desktop.',
          'Same systems thinking applied across every surface and project since.',
        ],
      },
    ],
  },

  // ─── SIDE PROJECTS ────────────────────────────────
  {
    id: 'hierarch',
    filename: 'hierarch.md',
    folder: 'side-projects',
    title: 'Hierarch',
    meta: 'Side Project · In Development · hierarch.vercel.app',
    status: 'in-progress',
    summary:
      'Project management tool designed for product designers. "Linear for designers." Full-stack app built end-to-end with Claude Code and Cursor.',
    sections: [
      {
        title: 'The Problem',
        imageAbove: '/hierarch-overview.png',
        items: [
          'Jira and Linear serve developers and PMs well. There\'s no tool designed around how designers actually work.',
          'Designers need workflow stages, critique cycles, and a bird\'s-eye view for design managers.',
        ],
      },
      {
        title: 'What I Built',
        items: [
          'Designer-specific workflow with integration to Linear and Figma.',
          'Side-sheet drill-down navigation with breadcrumb stack. Minimal top-level elements, expand as you move deeper.',
          'Back button navigates up. Consistent panel behavior regardless of entry point.',
        ],
        image: '/hierarch-capacity.png',
      },
      {
        title: 'Tech Stack',
        items: [
          'React + TypeScript + Tailwind + Supabase + Framer Motion.',
          'Built entirely with Claude Code CLI and Cursor.',
          'Live at hierarch.vercel.app',
        ],
      },
    ],
  },
  {
    id: 'pro-ux-kit',
    filename: 'pro-ux-kit.md',
    folder: 'side-projects',
    title: 'Pro UX Kit',
    meta: 'Side Project · Shipped · prouxkit.com',
    status: 'shipped',
    summary:
      'Suite of 9 design utility tools I kept rebuilding for myself. Shipped and live.',
    sections: [
      {
        title: 'The Tools',
        items: [
          'Color Sampler · Contrast Checker · Border Radius Calculator',
          'Type Scale · Shadow Studio · Spacing Scale',
          'Tint & Shade Generator · Glass Generator · Clamp Calculator',
        ],
      },
      {
        title: 'Tech Stack',
        items: [
          'Next.js + TypeScript + Tailwind. Built with Claude Code.',
          'Each tool solves a specific design workflow problem I encountered repeatedly.',
          'Live at prouxkit.com',
        ],
      },
    ],
  },
  {
    id: 'spicy-resume',
    filename: 'spicy-resume.md',
    folder: 'side-projects',
    title: 'Spicy Resume',
    meta: 'Side Project · Shipped · spicyresu.me',
    status: 'shipped',
    summary:
      'ATS resume tailoring app. Upload a resume, paste a job URL, and the AI generates a qualifications section aligned to the role with before/after ATS scoring.',
    sections: [
      {
        title: 'How It Works',
        imageAbove: '/spicy-upload.png',
        items: [
          'Three-panel workspace: document list + job input on the left, block-based resume editor in the center, live ATS score panel on the right.',
          'Paste a job URL. The app scrapes the description, extracts keywords with Claude Haiku, and scores the resume against them.',
          'Generates a "Qualifications Aligned to [Company]" section inserted into a new copy. Original resume stays untouched.',
          'Before/after ATS scoring with exact, stem, synonym, and phrase matching across weighted categories.',
        ],
        image: '/spicy-editor.png',
      },
      {
        title: 'Key Design Decisions',
        items: [
          'Block-based editor with H1/H2/H3/P formatting and bullet toggle. Every block is independently editable.',
          'Per-type typography settings: independent font, size, and line height for each heading level.',
          'URL scraper handles Ashby, Greenhouse, Lever, and SmartRecruiters job boards automatically.',
          'Export to DOCX and PDF with proper typography and formatting preserved.',
        ],
        image: '/spicy-tailored.png',
      },
      {
        title: 'Tech Stack',
        items: [
          'Next.js 16 + TypeScript + Tailwind v4 + Supabase + Claude Haiku 4.5 via Anthropic SDK.',
          'pdf-parse + mammoth for resume parsing. Neobrutalist design system.',
          'Live at spicyresu.me',
        ],
        image: '/spicy-workhistory.png',
      },
    ],
  },
  {
    id: 'studioframe',
    filename: 'studioframe.md',
    folder: 'side-projects',
    title: 'StudioFrame',
    meta: 'Side Project · Shipped · studiofra.me',
    status: 'shipped',
    summary:
      'Desktop app for loading any website into device frames, customizing backgrounds, and recording polished demo videos.',
    sections: [
      {
        title: 'What It Does',
        items: [
          'Load any URL into customizable mobile or web device frames.',
          'Customize backgrounds (solid, gradient, image with opacity), device color/size/scale, status bar, scrollbar, drop shadow.',
          'Record screen with optional camera overlay and zoom.',
          'Built-in FFmpeg conversion for WebM-to-MP4 and MOV-to-MP4.',
        ],
        image: '/studioframe-dashboard.png',
      },
      {
        title: 'Key Features',
        items: [
          'Google OAuth and email magic link sign-in with persistent sessions.',
          'Vertical toolbar with flyout menus (record, camera, settings).',
          'Sidebar with Device and Background sections.',
          'Cross-origin iframe loading with dynamic background detection.',
        ],
        image: '/studioframe-mobile.jpg',
      },
      {
        title: 'Tech Stack',
        items: [
          'Electron 41 + vanilla HTML/CSS/JS + Supabase Auth + FFmpeg 5.3.',
          'Packaged as macOS .dmg with electron-builder.',
          'Live at studiofra.me',
        ],
      },
    ],
  },
];

export function getProjectsByFolder(folderName: string): ProjectFile[] {
  return projects.filter((p) => p.folder === folderName);
}

export function getAllProjectIds(): string[] {
  const ordered: ProjectFile[] = [];
  for (const folder of folders) {
    ordered.push(...getProjectsByFolder(folder.name));
  }
  return ordered.map((p) => p.id);
}
