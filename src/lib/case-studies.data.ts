
export type CaseStudy = {
    slug: string;
    title: string;
    shortDescription: string;
    techStack: string[];
    heroImage: string;
    overview: {
      problem: string;
      problemImage?: string;
      goals: string[];
      role: string;
    };
    process: {
      research: string;
      uxStrategy: string;
      designDecisions: string;
      comparisonImage?: string;
    };
    designAndDevelopment: {
      uiApproach: string;
      developmentHighlights: string;
      responsiveness: string;
      image?: string;
    };
    outcome: {
      results: string;
      learnings: string;
      finalThoughts: string;
      finalImage?: string;
    };
  };
  
  export const caseStudies: CaseStudy[] = [
    {
        slug: 'myslt-redesign',
        title: 'MySLT Mobile App Redesign',
        shortDescription: 'An independent redesign concept focused on improving clarity, hierarchy, and user experience for a national ISP’s mobile application.',
        techStack: ['UX/UI Design', 'Case Study', 'Mobile App', 'Figma'],
        heroImage: 'mysltHero',
        overview: {
          problem: 'The existing MySLT app provides essential functionality, but the experience often feels dense and difficult to scan, especially during quick, task-focused usage. Key issues observed: Important information such as remaining data and active packages lacks clear visual priority. Screens present too much information at once, increasing cognitive load. Primary actions are available, but not always easy to identify at a glance.',
          problemImage: 'mysltHero',
          goals: [
            'Clarify information hierarchy so users can immediately understand their account status.',
            'Reduce visual clutter to support faster scanning and decision-making.',
            'Improve consistency across screens to make interactions predictable and intuitive.'
          ],
          role: 'UX/UI Designer. This was an independent redesign concept for portfolio purposes.',
        },
        process: {
          research: 'The project is a personal UX/UI redesign case study created for portfolio purposes. The goal was to improve clarity, information hierarchy, and usability across core screens, while keeping the experience familiar to existing users.',
          uxStrategy: 'This project focuses on refining existing screens, not adding new features. The approach was to reorganize content based on importance and usage frequency, use spacing, alignment, and typography to guide attention, and simplify layouts while preserving familiarity for current users.',
          designDecisions: 'Key UX improvements focused on clearer hierarchy by surfacing primary information like data usage immediately. Layouts were cleaned by minimizing non-essential elements. Actions were grouped and placed consistently to reduce cognitive effort.',
          comparisonImage: 'mysltBeforeAfter',
        },
        designAndDevelopment: {
          uiApproach: 'The visual design follows a light, modern, and restrained UI style, suitable for a national ISP product. It features light backgrounds with generous white space, selective use of SLT Mobitel brand colors for emphasis, a clear typographic hierarchy, and subtle depth instead of heavy decoration.',
          developmentHighlights: 'As a conceptual design project, the focus was on UI/UX strategy and visual execution in Figma rather than code implementation. The design system was built to be easily translatable to React Native or native development environments.',
          responsiveness: 'The designs were created with a mobile-first approach, ensuring that layouts, typography, and touch targets were optimized for both Android and iOS devices of various sizes.',
          image: 'mysltBeforeAfter'
        },
        outcome: {
          results: 'This redesign demonstrates how improving structure, hierarchy, and clarity can significantly enhance the usability of a complex utility app—without altering its core functionality.',
          learnings: 'The project reinforces a design philosophy of focusing on clarity first, then supporting it with thoughtful visual design to create intuitive and effective user experiences.',
          finalThoughts: 'This is an independent redesign concept created for portfolio purposes only and is not affiliated with or endorsed by SLT-Mobitel.',
          finalImage: 'mysltFinal',
        },
      },
    {
      slug: 'rent-hub',
      title: 'Rent Hub - Vehicle Rental App',
      shortDescription: 'Rent Hub is a mobile vehicle rental marketplace designed for the Sri Lankan market. It connects verified vehicle rental companies with travelers through a centralized platform focused on trust, pricing transparency, and a chat-first booking experience.',
      techStack: ['React Native', 'MongoDB', 'Product Design', 'Mobile UX'],
      heroImage: 'projectVehicleRental',
      overview: {
        problem: 'The vehicle rental ecosystem in Sri Lanka is highly fragmented. Renters typically rely on unorganized Facebook groups, classified platforms like ikman.lk, or word-of-mouth referrals. This results in: High risk of scams and unreliable listings, Unclear pricing, especially mileage limits and excess charges, Poor vehicle condition transparency. On the other side, rental companies (mostly SMEs) face: Low visibility, Manual booking management via calls and WhatsApp, Frequent double bookings and lost revenue. There was a clear need for a centralized, trustworthy system that works within local expectations.',
        goals: [
          'Trust: Identity verification for both renters and rental companies',
          'Clarity: Transparent pricing, including mileage limits and excess charges',
          'Flexibility: A chat-first booking flow that supports negotiation and familiar payment methods'
        ],
        role: 'Product Designer & Full Stack Developer. I was responsible for: UX research and product strategy, UI/UX design, Interaction design, Frontend and backend implementation.',
      },
      process: {
        research: 'User research revealed three dominant pain points: Lack of trust in listings and vehicles, Hidden costs, especially mileage-related fees, A strong cultural preference for negotiation and direct communication. Renters feared receiving poor-quality vehicles, while hosts spent time responding to inquiries that rarely converted. These insights shaped a solution that balances modern UX patterns with local behavior.',
        uxStrategy: 'Instead of forcing an immediate online payment—often a major drop-off point in Sri Lanka—I designed a Request → Accept → Chat workflow. A booking request is sent first. Once accepted, a chat channel opens where users can negotiate pickup location, pricing, and payment method. Offline payment proof can be shared inside the chat. This approach increased comfort and trust without sacrificing structure.',
        designDecisions: 'A single app supports both renters and hosts. A "Switch Role" toggle transforms the UI between a customer browsing experience and a company dashboard—encouraging supply. I also designed a pill-shaped floating navigation bar, which improves reachability and adds visual distinction.',
      },
      designAndDevelopment: {
        uiApproach: 'The interface was designed to feel clean, trustworthy, and easy to scan: Typography: System sans-serif (San Francisco / Roboto) for native readability, Hierarchy: Bold pricing and vehicle titles for quick decision-making, Color System: Primary Blue (#2563EB) → trust and reliability, Status Green (#059669) → verified users, Warning Amber (#D97706) → pending actions, Neutral background (#F3F4F6) → reduced eye strain.',
        developmentHighlights: 'Key features include horizontal category chips for instant filtering, mileage limits displayed directly on listing cards to reduce anxiety, a highly visible "Verified Renter" badge to build host confidence, and a streamlined host dashboard with quick actions.',
        responsiveness: 'Rent Hub was designed as a mobile-first application for both iOS and Android. The layout was tested across multiple screen sizes to ensure consistent usability, fluid adaptation of floating navigation, and clear readability across devices.',
      },
      outcome: {
        results: 'The MVP demonstrated a strong user-centered approach tailored to local market needs. User testing validated the chat-first workflow as a key differentiator, significantly increasing user confidence and the likelihood of completed bookings.',
        learnings: 'This project reinforced that successful digital products in emerging markets require cultural adaptation, not just localization. Designing for trust, familiarity, and real-world behaviors—such as cash payments and direct communication—was essential for adoption.',
        finalThoughts: 'Future phases include: Payment gateway integration (PayHere / Stripe) for secure online transactions, AI-powered pricing suggestions for hosts based on demand patterns. Rent Hub showcases my ability to design and build user-focused digital products that solve real problems through thoughtful UX, strategic design decisions, and practical technical solutions.',
      },
    },
    {
      slug: 'teacher-arena-community',
      title: 'Teacher Arena – A Commission-Free Marketplace for Educators',
      shortDescription: 'Teacher Arena is an independent, commission-free e-commerce platform built for educators to buy and sell digital teaching resources. The platform was designed to help an established educational content creator move away from third-party marketplaces and build a profitable, brand-owned sales channel.',
      techStack: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom CSS/HTML', 'Brevo', 'Stripe'],
      heroImage: 'projectTeacherArena',
      overview: {
        problem: 'The client relied heavily on Teachers Pay Teachers (TpT) as their primary sales platform. While TpT provided traffic, it introduced several critical limitations: High transaction and commission fees, No ownership of customer data, Limited branding and customization, Dependence on a third-party marketplace. This resulted in reduced profit margins and restricted long-term growth.',
        goals: [
          'Build a fully independent e-commerce platform',
          'Enable direct sales of digital resources with 100% profit retention',
          'Create a professional, trustworthy experience for educators',
          'Establish ownership of customer data for long-term marketing and growth',
          'Ensure the platform is scalable and easy to maintain'
        ],
        role: 'Lead Developer & UI/UX Designer. I was responsible for: UX strategy and interface design, WordPress and WooCommerce development, Custom CSS/HTML implementation, Performance optimization, Integration of payments and email automation.',
      },
      process: {
        research: 'The primary audience—teachers—are busy professionals who value clarity, trust, and speed. The platform needed to feel as reliable as major marketplaces while offering the flexibility of a standalone website. Based on this, the solution focused on: Clear navigation and scannable layouts, A frictionless digital download experience, A simplified contributor and checkout flow, Mobile-first usability.',
        uxStrategy: 'The design prioritizes ease of use and professionalism. Teachers should be able to: Quickly find relevant resources, Understand pricing and product value at a glance, Purchase materials seamlessly, even on mobile. The shopping and checkout flow was optimized to minimize steps and reduce cognitive load.',
        designDecisions: 'This project required significant custom development. I migrated legacy layouts to modern Flexbox Containers for better performance, engineered a scoped CSS class system to prevent style leakage on unique landing pages, and minimized plugin bloat by hand-coding custom widgets for critical forms.',
      },
      designAndDevelopment: {
        uiApproach: 'The interface was designed to be clean, calm, and trustworthy: Color Palette: Medical Blue (#0D47A1) for credibility, Soft Blue (#E3F2FD) for visual balance, White backgrounds to reduce cognitive load. Typography: Inter for high readability across all devices. Mobile-First Design: Cart and checkout flows optimized for small screens, Strict control of spacing and overflow to eliminate horizontal scrolling.',
        developmentHighlights: 'This project required more than standard page building: Modern Layout System: Migrated legacy layouts to Elementor Flexbox Containers for better performance and responsiveness. Scoped CSS Architecture: Solved style-leakage issues by implementing isolated CSS wrappers (e.g., .subscribe-page-wrapper) to allow unique landing pages without affecting global styles. Performance Optimization: Reduced plugin bloat by hand-coding custom HTML/CSS widgets for critical forms, improving load times and maintainability. Marketing & Payments: Integrated Brevo for email automation and Stripe for secure digital transactions.',
        responsiveness: 'A mobile-first approach guided every design decision. The platform was tested across devices to ensure: Smooth browsing on mobile, Fast checkout experience, Consistent layouts across screen sizes. All horizontal scrolling issues were resolved through careful CSS management and layout constraints.',
      },
      outcome: {
        results: 'Teacher Arena successfully launched as a fully independent digital marketplace. The client now: Retains 100% of sales revenue, Owns their customer database for direct marketing, Saves thousands annually in marketplace fees, Operates under a strong, professional brand identity.',
        learnings: 'Moving from a rented audience to an owned platform significantly improves both profitability and control. A custom e-commerce solution, when executed correctly, can outperform large marketplaces while delivering a better user experience.',
        finalThoughts: 'Teacher Arena demonstrates the impact of combining thoughtful UI/UX design with practical development decisions. By addressing both user needs and business goals, the platform provides a scalable foundation for future growth, content expansion, and community building.',
      },
    },
      {
        slug: 'new-game-cards-ecommerce',
        title: 'New Game Cards — Interactive E-commerce Experience',
        shortDescription: 'An e-commerce platform for trading card enthusiasts, featuring a card-centric UI, smooth animations, and immersive interactions.',
        techStack: ['React', 'Framer Motion', 'Stripe', 'E-commerce'],
        heroImage: 'projectGameCards',
        overview: {
          problem: 'Most collectible e-commerce websites follow generic shopping patterns. While functional, they often feel transactional and fail to capture the emotion, discovery, and excitement that collectors associate with trading cards. As a result: Products feel static and interchangeable, Browsing lacks a sense of exploration, The experience does not reflect the hobby itself. The challenge was to design an e-commerce experience that feels alive, expressive, and memorable, without sacrificing usability or performance.',
          goals: [
            'Design an immersive shopping experience tailored to card collectors',
            'Make the cards themselves the visual and interactive focus',
            'Use animations to enhance clarity and delight, not distract',
            'Integrate a secure, seamless checkout with Stripe',
            'Deliver a fast, responsive frontend despite rich interactions',
          ],
          role: 'Lead Frontend Developer & UI Designer. I was responsible for: UI/UX design and interaction concepts, Frontend architecture and component design, Animation implementation with Framer Motion, Stripe checkout integration, Performance optimization.',
        },
        process: {
          research: 'Research focused on two areas: E-commerce usability best practices, Visual and interaction patterns from popular trading card games. The goal was to merge familiarity with innovation—creating an interface that feels intuitive while still capturing the fantasy and excitement of card collecting.',
          uxStrategy: 'The core UX strategy was simple: make the cards the hero. This meant: Large, high-quality card visuals, Interactive hover and focus states, Browsing that feels like sorting through a physical collection, Clear hierarchy so animations support, not obscure, decision-making. The experience encourages exploration while keeping purchasing straightforward.',
          designDecisions: 'The design is dark and thematic, using colors and typography that complement the fantasy and sci-fi art of the cards. A card-based layout was used throughout the site to maintain a consistent theme.',
        },
        designAndDevelopment: {
          uiApproach: 'The interface was built in React, enabling dynamic, reusable components across the site. Framer Motion was used extensively to introduce smooth, natural animations such as: Card hover and focus interactions, Page transitions, Add-to-cart feedback. Animations were carefully timed and restrained to add polish without impacting usability.',
          developmentHighlights: 'Custom Stripe Checkout: Implemented a seamless checkout experience that matches the site’s visual identity, avoiding jarring redirects to generic payment pages. Animation Performance: Optimized animation triggers and transitions to maintain smooth performance, even with multiple animated elements on screen.',
          responsiveness: 'The card-based layout was designed to be fully responsive: CSS Grid adapts seamlessly from multi-column desktop layouts to single-column mobile views, Touch-friendly interactions on mobile devices, Consistent visual hierarchy across screen sizes. Despite heavy use of animation, the site remains fast and responsive.',
        },
        outcome: {
          results: 'Strong positive feedback on visual design and interaction quality. 25% increase in average session duration compared to industry benchmarks. 10% uplift in conversion rate versus the previous generic store design.',
          learnings: 'This project reinforced the importance of balancing animation and performance. Thoughtful motion design can significantly enhance engagement—but only when implemented with restraint and technical care.',
          finalThoughts: 'New Game Cards demonstrates how e-commerce experiences can move beyond basic transactions. By combining strong UI/UX principles with modern frontend development, the project shows that engaging design and smooth interaction can directly improve both user enjoyment and business results.',
        },
      }
  ];
  

    




    