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
      title: 'Vehicle Rental Mobile App',
      shortDescription: 'A sleek and intuitive mobile application designed to streamline the vehicle rental process, offering a seamless user experience from booking to return.',
      techStack: ['Figma', 'React Native', 'MongoDB'],
      heroImage: 'caseStudyHeroVehicle',
      overview: {
        problem: 'The existing vehicle rental market was fragmented, with many apps offering clunky interfaces, confusing booking flows, and a lack of transparency in pricing. Users needed a simpler, more trustworthy solution.',
        goals: [
          'Design a user-centric interface that simplifies the booking process.',
          'Build a scalable cross-platform mobile app for both iOS and Android.',
          'Integrate a secure payment and user authentication system.',
          'Ensure real-time availability and transparent pricing.'
        ],
        role: 'As the lead UI/UX Designer and Frontend Developer, I was responsible for the entire product lifecycle, from initial user research and wireframing to building the final production-ready mobile application.',
      },
      process: {
        research: 'I started with competitive analysis and user interviews to understand pain points in the current rental market. Key findings showed a demand for clearer pricing, easier vehicle comparison, and a faster checkout process.',
        uxStrategy: 'The strategy was to create a "less is more" experience. I focused on a linear booking flow, reducing the number of steps required to complete a reservation. I also prioritized visual cues and clear information hierarchy to guide the user.',
        designDecisions: 'A minimalist design system with a clean, modern aesthetic was developed in Figma. The color palette was chosen to evoke trust and reliability. Interactive prototypes were built and tested with users to validate the design choices before development.',
      },
      designAndDevelopment: {
        uiApproach: 'The UI was built with a component-based architecture using React Native, allowing for a consistent look and feel across platforms. I used atomic design principles to create a reusable library of UI elements.',
        developmentHighlights: 'MongoDB was leveraged for the backend, handling user authentication, real-time database for bookings, and cloud functions for business logic. This choice enabled rapid development and scalability.',
        responsiveness: 'While a mobile-first approach was natural, careful attention was paid to ensure the layout adapted perfectly to a wide range of screen sizes and aspect ratios, from small phones to large tablets.',
      },
      outcome: {
        results: 'The app launched to positive user feedback, with a 40% reduction in average booking time compared to competitors. The intuitive UI was frequently cited as a key differentiator in app store reviews.',
        learnings: 'This project reinforced the importance of iterative user testing. Early feedback on the prototype saved significant development time by identifying UX issues before a single line of code was written.',
        finalThoughts: 'The Vehicle Rental App successfully demonstrates how a focus on user-centered design can disrupt a crowded market. It serves as a strong example of my ability to deliver end-to-end product solutions.',
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
  