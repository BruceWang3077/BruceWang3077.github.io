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
    name: 'JetPack',
    position: 'Graduate Research Assistant under Prof.Shuai Mu',
    url: '',
    startDate: '2024-01-28',
    summary: 'Generalized Enhancement of Consensus Protocols with Fast Path Optimization',
    highlights: [
      'Innovative Latency Measurement Integrated TDigest into the testing framework in C++, enabling real-time latency visualization with minimal overhead and maintaining precision with an error rate of less than 0.001%.',
      'Testing Framework Deployment Deployed a sophisticated testing framework on AWS ECR instances, enabling extensive intercontinental performance analysis of various consensus protocols, including Copilot and Raft.',
      'Data Visualization Tools Developed advanced Python plotting scripts to effectively visualize test data, providing clear insights into the performance improvements from fast path optimization.',
    ],
  },
];

export default work;
