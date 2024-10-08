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
const work = [
  {
    name: 'Graduate Research Assistant',
    position: 'under Prof.Shuai Mu',
    url: '',
    startDate: '2024-01-28',
    summary: 'Working on JetPack, a Generalized Enhancement of Consensus Protocols with Fast Path Optimization',
    highlights: [
      'Pioneered the integration of TDigest with Boost Serialization Support implemented into the testing framework in C++, achieving real-time latency visualization with near-zero overhead, maintaining accuracy within an error margin of less than 0.001%, and reducing latency storage by 99% compared to the original measurement tool.',
      'Testing Framework Deployment Deployed a sophisticated testing framework on AWS ECR instances, enabling extensive intercontinental performance analysis of various consensus protocols, including Copilot and Raft.',
      'Data Visualization Tools Developed advanced Python plotting scripts to effectively visualize test data, providing clear insights into the performance improvements from fast path optimization.',
    ],
  },
];

export default work;
