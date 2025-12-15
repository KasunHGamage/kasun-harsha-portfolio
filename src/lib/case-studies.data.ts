
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
        problem: 'In Sri Lanka, the vehicle rental market is highly fragmented. Renters currently rely on unorganized Facebook groups, classified ads (ikman.lk), or word-of-mouth. This leads to anxiety regarding scams, hidden fees (excess mileage charges), and vehicle condition. Rental Companies (SMEs) struggle with visibility and managing bookings manually via phone calls and WhatsApp, leading to double bookings and lost revenue.',
        goals: [
          'Trust: Identity verification for both renters and hosts.',
          'Clarity: Upfront pricing including mileage limits and excess charges.',
          'Flexibility: A "Chat-First" approach allowing users to negotiate pickup points and payment methods (Cash/Transfer) familiar to the local market.'
        ],
        role: 'Product Designer & Full Stack Developer',
      },
      process: {
        research: 'User research identified the primary pain points: lack of trust, unclear pricing, and a cultural preference for negotiation. Renters feared getting "lemon" cars, while hosts wasted time on non-converting inquiries. This highlighted the need for a solution that balanced modern convenience with local market behaviors.',
        uxStrategy: 'Instead of forcing an immediate credit card payment (which causes drop-offs in Sri Lanka), I implemented a Request -> Accept -> Chat flow. Why? Sri Lankans prefer to speak with the owner to confirm details before paying. How: The booking button initiates a request. Once accepted by the host, a chat channel opens for negotiation and offline payment proof.',
        designDecisions: 'To encourage supply (more cars), I designed a "Switch Role" feature within the single app. A toggle in the profile settings transforms the entire UI from a "Shopping" interface (Customer) to a "Dashboard" interface (Company). This reduces friction for users who might want to rent out their own vehicle occasionally. To differentiate from legacy apps, I moved away from the standard edge-to-edge bottom bar. A pill-shaped navigation bar floating 30px from the bottom with drop shadows. The active tab uses a highlight color and distinct icon style (Outline vs. Filled) for immediate state recognition.',
      },
      designAndDevelopment: {
        uiApproach: 'The UI was designed with a clean, trust-centric aesthetic. Font: System Sans-Serif (San Francisco/Roboto) for native readability. Hierarchy: Heavy use of Bold headers for prices and vehicle titles to scan quickly. Color Palette: Primary Blue (#2563EB) represents trust and professionalism. Status Green (#059669) for "Verified" badges. Warning Amber (#D97706) for "Pending" statuses. Background (#F3F4F6) to reduce eye strain.',
        developmentHighlights: 'The home screen features horizontal scrollable category chips (Car, Bike, Van) allow users to filter instantly without deep menus. Cards show "Mileage Limits" upfront, addressing a major user anxiety about hidden costs. The profile has a prominent "Verified Renter" badge with a green checkmark instantly signals credibility to hosts. For hosts, a high-contrast dashboard shows key stats like earnings and pending requests at-a-glance, with immediate action buttons to minimize clicks.',
        responsiveness: 'As a mobile-first application for both iOS and Android, the design was rigorously tested across a wide range of screen sizes and aspect ratios. The "floating island" navigation and card-based layouts adapt fluidly, ensuring a consistent and optimal experience on any device.',
      },
      outcome: {
        results: 'The MVP design demonstrates a user-centered approach that tackles specific local market challenges. The "Chat-First" workflow was validated through user testing as a key differentiator that significantly increased user comfort and the likelihood of a completed booking.',
        learnings: 'The project underscored that a successful digital product in an emerging market requires deep cultural adaptation, not just translation. Technical solutions must be tailored to solve local problems, like the preference for cash transactions and direct communication, to gain user trust and adoption.',
        finalThoughts: 'Phase 2 includes integration of a Payment Gateway (PayHere/Stripe) for automated booking security. Phase 3 involves AI-powered pricing suggestions for hosts based on demand spikes (holidays/weekends). This case study demonstrates a user-centered design approach, tackling specific local market challenges with tailored technical solutions.',
      },
    },
    {
        slug: 'teacher-arena-community',
        title: 'Teacher Arena – A Commission-Free Marketplace for Educators',
        shortDescription: 'An independent, commission-free e-commerce platform for educators to buy and sell digital resources.',
        techStack: ['WordPress', 'WooCommerce', 'Elementor Pro', 'Custom CSS/HTML', 'Brevo Integration'],
        heroImage: 'projectTeacherArena',
        overview: {
          problem: 'My client, an established creator of educational resources, was relying heavily on Teachers Pay Teachers (TpT) as their primary sales channel. While TpT provided traffic, it came at a steep cost: high transaction fees, no ownership of customer data, and limited branding capabilities.',
          goals: [
            'Build an independent, scalable e-commerce platform to sell digital resources directly.',
            'Eliminate high commission fees from third-party marketplaces.',
            'Enable direct customer data collection for marketing and relationship building.',
            'Provide full brand control and a customizable storefront experience.'
          ],
          role: 'Lead Developer & UI/UX Designer',
        },
        process: {
          research: 'I designed and developed Teacher Arena, a custom WordPress-based marketplace tailored specifically for digital downloads. The platform prioritizes a clean, trust-inspiring UX that rivals major marketplaces while offering the flexibility of a standalone website. Key features included a digital e-commerce engine with WooCommerce, a custom contributor onboarding flow, and marketing automation with Brevo.',
          uxStrategy: 'The target audience is busy teachers looking for reliable, high-quality materials. The design needed to be clean, scannable, and professional. I utilized a trustworthy color palette of Medical Blue (#0D47A1) and Soft Blue (#E3F2FD) to reduce cognitive load and chose Inter for its high legibility. The shopping and checkout experience was optimized with a mobile-first approach.',
          designDecisions: 'This project required significant custom development. I migrated legacy layouts to modern Flexbox Containers in Elementor for better performance. To solve style leakage from landing pages, I engineered a scoped CSS class system to encapsulate styles, allowing unique page designs without breaking the global layout. Performance was also improved by hand-coding custom HTML/CSS widgets instead of relying on heavy plugins.',
        },
        designAndDevelopment: {
          uiApproach: 'The UI was designed to be clean, scannable, and professional to appeal to busy teachers. A trustworthy color palette of Medical Blue (#0D47A1) and Soft Blue (#E3F2FD) against a clean White background was used to reduce cognitive load. The typography, using the highly legible sans-serif font Inter, ensures readability across all devices.',
          developmentHighlights: 'Significant custom development was undertaken. Legacy section-based layouts were migrated to modern Flexbox Containers for better performance. I engineered a scoped CSS class system (e.g., .subscribe-page-wrapper) to prevent style leakage from landing pages to the global header/footer, ensuring layout consistency. Custom HTML/CSS widgets were hand-coded for critical forms to minimize plugin bloat and optimize performance.',
          responsiveness: 'A mobile-first approach was central to the design. The shopping cart and checkout flow were specifically optimized for mobile devices, ensuring a seamless purchase experience for teachers on the go. Horizontal scrolling issues were resolved by strictly managing overflow and element widths in the CSS.',
        },
        outcome: {
          results: 'Teacher Arena successfully launched as a fully independent platform. The client now saves thousands annually in marketplace fees, owns their customer list for direct retargeting, and has established a strong brand authority. "By moving from a rented audience on TpT to an owned platform on WordPress, we turned a 20% commission loss into a 100% profit gain per sale, while offering a better user experience for our teachers."',
          learnings: 'The project highlighted the immense value of owning your platform. It frees you from the commissions and constraints of third-party marketplaces, enabling direct customer relationships and full control over branding and user experience.',
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
  

    
