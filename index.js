const special = require('./groups/special');
const positioning = require('./groups/positioning');
const boxModel = require('./groups/boxModel');
const typography = require('./groups/typography');
const visual = require('./groups/visual');
const animation = require('./groups/animation');
const misc = require('./groups/misc');
const config = require('./config');

const rational = [
  ...special,
  ...positioning,
  ...boxModel({ border: false }),
  ...typography,
  ...visual({ border: true }),
  ...animation,
  ...misc,
];

module.exports = config(rational);
