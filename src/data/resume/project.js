/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const project = [
  {
    name: 'OnlineOrder',
    position: 'Lead Designer & Developer',
    url: '',
    startDate: '2023-1-1',
    endDate: '2023-4-21',
    summary: 'A SpringBoot based online food ordering web application',
    highlights: [
      'Developed CRUD REST APIs using Spring Controllers, including registration, menu searching, ordering, and checkout.',
      'Leveraged Spring Data JDBC and for a PostrgresSQL database hosted on AWS RDS.',
      'Implemented application authentication via Spring Security, employing session-based authentication mechanisms.',
      'Architected the project(controller, service, repository) with dependency injection.',
      'Constructed the frontend using ReactJS and Ant Design, providing cart management and ordering functions.',
      'Containerized the build and pushed image to AWS ECR, deployed on AWS App Runner for scalability and accessibility.',
    ],
  },
  {
    name: 'MiniSpotify',
    position: 'Lead Designer & Developer',
    url: '',
    startDate: '2024-03-12',
    endDate: '2024-05-19',
    summary: 'A personalized spotify favorate management app',
    highlights: [
      'Designed a Kotlin Spotify favorite app leveraging Android Jetpack Library and Hilt Dependency Injection.',
      'Implemented the BottomBar & App Navigation using Jetpack Navigation component. • Created a mock RESTFUL API json-server and used the Retrofit to handle requests.',
      'Built the feed/album/favorite UI in Jetpack Compose following MVVM architecture.',
      'Enabled the local cache ability for favorite feature by using Room Database.',
      'Integrated the Google Exoplayer to handle the global music playback.',
    ],
  },
  {
    name: 'Distributed Key/Value Store',
    position: 'Lead Designer & Developer',
    url: '',
    startDate: '2023-09-20',
    endDate: '2023-12-23',
    summary: 'Infrastructure project in C++',
    highlights: [
      'Designed and implemented a robust replicated state machine using Raft consensus algorithm, featuring reliable shutdown via periodic disk writes.',
      'Developed a resilient key/value storage service on top of the Raft cluster, incorporating log compaction through state snapshots for enhanced performance and efficiency.',
      'Engineered a distributed key/value storage service and a distributed transaction service, utilizing Optimistic Concurrency Control / 2-phase locking to ensure transactional integrity.',
      'Conducted extensive testing, including unreliable network simulations, to guarantee data consistency and reliability under various failure conditions.',
    ],
  },
  {
    name: 'Around',
    position: 'Lead Designer & Developer',
    url: '',
    startDate: '2024-1-15',
    endDate: '2024-03-30',
    summary: 'A Cloud and React based social network',
    highlights: [
      'Designed and developed a dynamic social networking web application using ReactJS, allowing users to create, browse, and search for nearby posts.',
      'Upgraded user authentication with a secure token-based system, streamlining the registration, login, and logout processes.',
      'Launched a scalable web service in Go on Google Cloud’s App Engine to efficiently manage posts and user interactions.',
      'Implemented ElasticSearch on Google Cloud Engine (GCE) to power robust search capabilities, enabling users to find recentposts and view their personal content.',
    ],
  },
  {
    name: 'AI PDF Reader',
    position: 'Lead Designer & Developer',
    url: '',
    startDate: '2024-04-25',
    endDate: '2024-06-30',
    summary: 'Full-stack web-based Q&A AI agent for PDF document queries',
    highlights: [
      'Engineered an interactive conversational UI leveraging React and Ant Design, enabling users to upload and interact with PDF documents in real-time.',
      'Architected and implemented RESTful APIs via Express and Node.js.',
      'Utilized a memory vector store to cache generated embeddings for efficient retrieval.',
      'Built an AI agent integrating OpenAI’s GPT-3.5 Turbo API and Langchain technologies, enabling document loading, splitting, storage, retrieval and output functionalities.',
    ],
  },
];
export default project;
