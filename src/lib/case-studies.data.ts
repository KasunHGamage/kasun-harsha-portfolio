
export type CaseStudy = {
    slug: string;
    title: string;
    shortDescription: string;
    techStack: string[];
    heroImage: string;
    overview: {
      problem: string;
      goals: string[];
      role: string;
    };
    process: {
      research: string;
      uxStrategy: string;
      designDecisions: string;
    };
    designAndDevelopment: {
      uiApproach: string;
      developmentHighlights: string;
      responsiveness: string;
    };
    outcome: {
      results: string;
      learnings: string;
      finalThoughts: string;
    };
  };
  
  export const caseStudies: CaseStudy[] = [
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
        title: 'New Game Cards E-commerce',
        shortDescription: 'A unique e-commerce experience for trading card enthusiasts, featuring an engaging, card-centric UI and smooth, animated interactions.',
        techStack: ['React', 'Framer Motion', 'Stripe', 'E-commerce'],
        heroImage: 'projectGameCards',
        overview: {
          problem: 'Most e-commerce websites for collectibles are generic and fail to capture the excitement of the hobby. The user experience is often transactional and lacks the fun of discovery and collection.',
          goals: [
            'Design an immersive and visually engaging shopping experience tailored to card collectors.',
            'Create a highly interactive UI with animations that enhance, rather than distract.',
            'Integrate a secure and seamless checkout process with Stripe.',
            'Develop a front-end that is both beautiful and performant.'
          ],
          role: 'I was the lead Frontend Developer and UI Designer, focusing on creating a memorable user interface and bringing it to life with code.',
        },
        process: {
          research: 'My research involved analyzing both e-commerce best practices and the design language of popular trading card games. The goal was to blend the two to create something that felt both familiar and innovative to the target audience.',
          uxStrategy: 'The core strategy was to make the product—the cards—the hero of the experience. This meant large card images, interactive hover effects, and a browsing experience that mimics sorting through a physical collection.',
          designDecisions: 'The design is dark and thematic, using colors and typography that complement the fantasy and sci-fi art of the cards. A card-based layout was used throughout the site to maintain a consistent theme.',
        },
        designAndDevelopment: {
          uiApproach: 'The UI was built in React, which allowed for the creation of dynamic and stateful components. I used Framer Motion extensively to create fluid animations for card flips, page transitions, and adding items to the cart. This added a layer of polish and delight.',
          developmentHighlights: 'The Stripe integration was a key part of the project. I implemented a custom checkout flow that was both secure and perfectly matched the site\'s design, avoiding a jarring redirect to a generic payment page.',
          responsiveness: 'The card-based layout naturally lent itself to a responsive design. Using a CSS grid system, the layout fluidly adapts from a multi-column desktop view to a single-column mobile experience without compromising the user experience.',
        },
        outcome: {
          results: 'The site received praise for its unique design and engaging user experience. Average session duration was 25% longer than industry benchmarks, and the conversion rate saw a 10% uplift compared to the previous, more generic site design.',
          learnings: 'This project taught me how to balance complex animations with performance. I learned techniques for optimizing animations and ensuring the site remained fast and responsive, even with many moving parts.',
          finalThoughts: 'This project was a fantastic opportunity to merge my passion for design and development. It shows that e-commerce doesn’t have to be boring and that thoughtful design and animation can lead to a more engaging and profitable user experience.',
        },
      }
  ];
  

    
