
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
      shortDescription: 'A centralized mobile marketplace connecting verified vehicle rental companies with travelers, focusing on trust, transparency, and a chat-first user experience tailored for the Sri Lankan market.',
      techStack: ['React Native', 'MongoDB', 'Product Design'],
      heroImage: 'projectVehicleRental',
      overview: {
        problem: 'The vehicle rental ecosystem in Sri Lanka is highly fragmented. Renters typically rely on unorganized Facebook groups, classified platforms like ikman.lk, or word-of-mouth referrals. This results in high risk of scams, unclear pricing, and poor vehicle condition transparency. On the other side, rental companies (mostly SMEs) face low visibility, manual booking management, and frequent double bookings. There was a clear need for a centralized, trustworthy system that works within local expectations.',
        goals: [
          'Trust: Identity verification for both renters and rental companies',
          'Clarity: Transparent pricing, including mileage limits and excess charges',
          'Flexibility: A chat-first booking flow that supports negotiation and familiar payment methods'
        ],
        role: 'I was responsible for UX research and product strategy, UI/UX design, interaction design, and frontend and backend implementation.',
      },
      process: {
        research: 'User research revealed three dominant pain points: lack of trust in listings and vehicles, hidden costs (especially mileage-related fees), and a strong cultural preference for negotiation and direct communication. These insights shaped a solution that balances modern UX patterns with local behavior.',
        uxStrategy: 'Instead of forcing an immediate online payment—often a major drop-off point in Sri Lanka—I designed a Request → Accept → Chat workflow. A booking request is sent first. Once accepted, a chat channel opens where users can negotiate details and share offline payment proof. This approach increased comfort and trust.',
        designDecisions: 'A single app supports both renters and hosts. A "Switch Role" toggle transforms the UI between a customer browsing experience and a company dashboard—encouraging supply. I also designed a pill-shaped floating navigation bar, which improves reachability and adds visual distinction.',
      },
      designAndDevelopment: {
        uiApproach: 'The interface was designed to feel clean, trustworthy, and easy to scan, using system fonts for readability, a clear visual hierarchy, and a color system where blue conveys trust, green indicates verification, and amber signals pending actions.',
        developmentHighlights: 'Key features include horizontal category chips for instant filtering, mileage limits displayed directly on listing cards to reduce anxiety, a highly visible "Verified Renter" badge to build host confidence, and a streamlined host dashboard with quick actions.',
        responsiveness: 'Rent Hub was designed as a mobile-first application for both iOS and Android. The layout was tested across multiple screen sizes to ensure consistent usability, fluid adaptation of floating navigation, and clear readability across devices.',
      },
      outcome: {
        results: 'The MVP demonstrated a strong user-centered approach tailored to local market needs. User testing validated the chat-first workflow as a key differentiator, significantly increasing user confidence and the likelihood of completed bookings.',
        learnings: 'This project reinforced that successful digital products in emerging markets require cultural adaptation, not just localization. Designing for trust, familiarity, and real-world behaviors—such as cash payments and direct communication—was essential for adoption.',
        finalThoughts: 'Future phases include payment gateway integration (PayHere/Stripe) for secure online transactions and AI-powered pricing suggestions for hosts. Rent Hub showcases my ability to design and build user-focused digital products that solve real problems through thoughtful UX and practical technical solutions.',
      },
    },
    {
        slug: 'teacher-arena-community',
        title: 'Teacher Arena – A Commission-Free Marketplace for Educators',
        shortDescription: 'An independent, commission-free e-commerce platform for educators to buy and sell digital resources.',
        techStack: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom CSS/HTML', 'Brevo Integration', 'Stripe'],
        heroImage: 'projectTeacherArena',
        overview: {
          problem: 'My client, an established creator of educational resources, was relying heavily on Teachers Pay Teachers (TpT) as their primary sales channel. While TpT provided traffic, it came at a steep cost: high transaction fees, lack of ownership over customer data, and limited branding capabilities.',
          goals: [
            'Build an independent, scalable e-commerce platform that allows the client to sell digital resources directly to teachers, keeping 100% of the profit and building a proprietary customer database.'
          ],
          role: 'Lead Developer & UI/UX Designer',
        },
        process: {
          research: 'I designed and developed Teacher Arena, a custom WordPress-based marketplace tailored specifically for digital downloads. The platform prioritizes a clean, trust-inspiring UX that rivals major marketplaces while offering the flexibility of a standalone website. Key features included a digital e-commerce engine with WooCommerce, a custom contributor onboarding flow, marketing automation with Brevo, and a scoped CSS architecture.',
          uxStrategy: 'The target audience is busy teachers looking for reliable, high-quality materials. The design needed to be clean, scannable, and professional. I used a trustworthy color palette, legible typography (Inter), and optimized the entire shopping and checkout flow for mobile devices to ensure teachers could browse and purchase on the go.',
          designDecisions: 'This project required significant custom development. I migrated legacy layouts to modern Flexbox Containers for better performance, engineered a scoped CSS class system to prevent style leakage on unique landing pages, and minimized plugin bloat by hand-coding custom widgets for critical forms.',
        },
        designAndDevelopment: {
            uiApproach: 'The target audience is busy teachers looking for reliable, high-quality materials. The design needed to be clean, scannable, and professional. Visual Identity: I utilized a trustworthy color palette of Medical Blue (#0D47A1) and Soft Blue (#E3F2FD) against a clean White background to reduce cognitive load. Typography: Selected Inter, a highly legible sans-serif font, to ensure readability across devices, from desktop monitors to mobile phones. Mobile-First Experience: Optimized the shopping cart and checkout flow for mobile devices, ensuring teachers can browse and purchase on the go. (Solved horizontal scrolling issues by strictly managing overflow and element widths).',
            developmentHighlights: 'This wasn\'t just a drag-and-drop job. It required significant custom development to achieve the specific functionality the client needed. Custom Elementor Containers: Migrated legacy section-based layouts to modern Flexbox Containers for better performance and layout control. CSS Scoping & Isolation: Faced with style leakage where landing page styles affected the global header/footer, I engineered a scoped CSS class system (e.g., .subscribe-page-wrapper) to encapsulate styles. This allowed for unique, high-impact landing pages that didn\'t break the main shop layout. Performance Optimization: Minimized plugin bloat by hand-coding custom HTML/CSS widgets for critical areas like the "Subscribe" and "Contact" forms, rather than relying on heavy add-ons.',
            responsiveness: 'A mobile-first approach was central to the design. The shopping cart and checkout flow were specifically optimized for mobile devices, ensuring a seamless purchase experience for teachers on the go. Horizontal scrolling issues were resolved by strictly managing overflow and element widths in the CSS.',
        },
        outcome: {
          results: 'Teacher Arena successfully launched as a fully independent platform. The client now saves thousands annually in marketplace fees, owns their customer list for direct marketing, and has established Teacher Arena as a professional brand.',
          learnings: '"By moving from a rented audience on TpT to an owned platform on WordPress, we turned a 20% commission loss into a 100% profit gain per sale, while offering a better user experience for our teachers."',
          finalThoughts: 'Teacher Arena stands as a testament to the power of a well-executed custom e-commerce solution. It not only solved the client\'s immediate financial pain points but also provided a scalable foundation for future growth and community building.',
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
  

    
