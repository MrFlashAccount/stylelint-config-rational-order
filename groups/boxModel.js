const borderProps = require('./border');

const partOne = [
  'display',
  'flex-direction',

  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'order',

  'flex',
  'flex-grow',
  'flex-shrink',
  'flex-basis',
  'flex-flow',
  'flex-wrap',

  'grid',
  'grid-area',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-column',
  'grid-column-end',
  'grid-column-gap',
  'grid-column-start',
  'grid-gap',
  'grid-row',
  'grid-row-end',
  'grid-row-gap',
  'grid-row-start',
  'grid-template',
  'grid-template-areas',
  'grid-template-columns',
  'grid-template-rows',
  'gap',
  'float',
  'clear',
  'box-sizing',

  'min-width',
  'width',
  'max-width',

  'min-height',
  'height',
  'max-height',

  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',

  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
];

const partTwo = ['overflow', 'overflow-x', 'overflow-y'];

module.exports = ({ border }) => [].concat(partOne, border ? borderProps : [], partTwo);
