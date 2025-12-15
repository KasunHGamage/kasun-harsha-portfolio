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
      slug: 'vehicle-rental-app',
      title: 'LankaRent - Vehicle Rental App',
      shortDescription: 'A centralized mobile marketplace connecting verified vehicle rental companies with travelers, focusing on trust, transparency, and a chat-first user experience tailored for the Sri Lankan market.',
      techStack: ['React Native', 'MongoDB', 'Product Design'],
      heroImage: 'caseStudyHeroVehicle',
      overview: {
        problem: 'In Sri Lanka, the vehicle rental market is highly fragmented, relying on unorganized Facebook groups and classified ads. This creates anxiety for renters due to potential scams and hidden fees, while rental SMEs struggle with manual booking management, leading to lost revenue.',
        goals: [
          'Trust: Implement identity verification for both renters and hosts.',
          'Clarity: Provide upfront pricing, including mileage limits and excess charges.',
          'Flexibility: A "Chat-First" approach allowing users to negotiate and confirm details before payment.'
        ],
        role: 'Product Designer & Full Stack Developer',
      },
      process: {
        research: 'User research identified the primary pain points: lack of trust, unclear pricing, and a cultural preference for negotiation. Renters feared getting "lemon" cars, while hosts wasted time on non-converting inquiries. This highlighted the need for a solution that balanced modern convenience with local market behaviors.',
        uxStrategy: 'The core strategy was a "Chat-First" workflow. Instead of forcing immediate online payment, which has high drop-off rates in Sri Lanka, the app uses a Request -> Accept -> Chat flow. This builds trust and allows for negotiation, mirroring real-world interactions and increasing conversion.',
        designDecisions: 'To encourage supply, a "Switch Role" feature was designed, allowing any user to toggle between a renter and a host interface within the same app. This dual-mode approach reduces friction for casual hosts. The UI also features a modern "floating island" navigation bar to differentiate it from standard apps.',
      },
      designAndDevelopment: {
        uiApproach: 'The UI was designed with a clean, trust-centric aesthetic. A native system font was used for readability, with a clear visual hierarchy. Key information like mileage limits and "Verified" badges are prominently displayed to address user anxieties. The color palette uses professional blues and reassuring greens to build credibility.',
        developmentHighlights: 'The home screen features horizontal scrollable category chips for instant filtering. The profile screen emphasizes a "Verified Renter" badge. For hosts, a high-contrast dashboard shows key stats like earnings and pending requests at-a-glance, with immediate action buttons to minimize clicks.',
        responsiveness: 'As a mobile-first application for both iOS and Android, the design was rigorously tested across a wide range of screen sizes and aspect ratios. The "floating island" navigation and card-based layouts adapt fluidly, ensuring a consistent and optimal experience on any device.',
      },
      outcome: {
        results: 'The MVP design demonstrates a user-centered approach that tackles specific local market challenges. The "Chat-First" workflow was validated through user testing as a key differentiator that significantly increased user comfort and the likelihood of a completed booking.',
        learnings: 'The project underscored that a successful digital product in an emerging market requires deep cultural adaptation, not just translation. Technical solutions must be tailored to solve local problems, like the preference for cash transactions and direct communication, to gain user trust and adoption.',
        finalThoughts: 'The next phase includes integrating a local payment gateway (PayHere/Stripe) to secure bookings after chat confirmation, followed by AI-powered pricing suggestions for hosts. This case study showcases a blend of thoughtful UX strategy and practical full-stack development.',
      },
    },
    {
        slug: 'teacher-arena-community',
        title: 'TeacherArena Community Platform',
        shortDescription: 'An online platform designed to empower teachers by providing a space to connect, share valuable resources, and foster professional growth.',
        techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'Community Building'],
        heroImage: 'caseStudyHeroTeacher',
        overview: {
          problem: 'Teachers often work in isolation and lack a dedicated, modern platform for collaboration and resource sharing. Existing solutions were outdated, difficult to navigate, or not tailored to their specific needs.',
          goals: [
            'Create a vibrant and engaging online community for educators.',
            'Develop an intuitive system for uploading, sharing, and discovering teaching resources.',
            'Implement features for professional networking and discussion forums.',
            'Ensure the platform is highly performant and accessible on all devices.'
          ],
          role: 'I led the project as the sole designer and developer, responsible for UX/UI design, frontend and backend development, and database architecture.',
        },
        process: {
          research: 'I conducted surveys and interviews with teachers to gather insights into their daily challenges and what they would want from a community platform. The research highlighted a need for easy content discovery and peer-to-peer communication.',
          uxStrategy: 'The strategy was to build a platform that felt both professional and welcoming. I prioritized a powerful search and filtering system for resources and designed user profiles to encourage connection and networking.',
          designDecisions: 'The design, created in Figma, is clean, organized, and content-focused. A soft, academic-inspired color palette was used. The layout was structured to handle a large volume of user-generated content without feeling cluttered.',
        },
        designAndDevelopment: {
          uiApproach: 'The frontend was built with Next.js for its performance benefits (SSR/SSG) and excellent developer experience. Tailwind CSS was used for utility-first styling, enabling rapid UI implementation.',
          developmentHighlights: 'Supabase was chosen as the backend-as-a-service to handle the database, authentication, and storage. Its PostgreSQL core and simple API made it a powerful and efficient choice for building out community features.',
          responsiveness: 'A responsive-first mindset was key. The platform was designed to work seamlessly on desktops for resource preparation and on mobile devices for quick access and communication on the go.',
        },
        outcome: {
          results: 'TeacherArena quickly grew to over 1,000 active members in its first three months. The resource-sharing feature became the most popular part of the platform, with hundreds of resources exchanged weekly.',
          learnings: 'Building a community platform taught me the importance of moderation tools and clear community guidelines from day one. It also highlighted the power of a strong user feedback loop in prioritizing new features.',
          finalThoughts: 'TeacherArena is a project I\'m incredibly proud of, as it serves a meaningful purpose and showcases my ability to build a full-stack application from the ground up to solve a real-world problem.',
        },
      },
      {
        slug: 'new-game-cards-ecommerce',
        title: 'New Game Cards E-commerce',
        shortDescription: 'A unique e-commerce experience for trading card enthusiasts, featuring an engaging, card-centric UI and smooth, animated interactions.',
        techStack: ['React', 'Framer Motion', 'Stripe', 'E-commerce'],
        heroImage: 'caseStudyHeroCards',
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
  