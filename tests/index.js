import Relsa from '../src/index.js';
import extend from '../helpers/extend.js';

const options = {
  render: 11,
  startIndex: 3,
  container: '.relsa',
  customDotClassName: 'dot',
};

function createInstance() {
  document.body.innerHTML = '<div class="relsa"></div>';
  return new Relsa(options);
}
const relsa = createInstance();

test('check options value type', () => {
  const invalidRelsa = new Relsa('options');
  expect(invalidRelsa.options.render).toEqual(4);
});

test('check render minimal value', () => {
  const invalidRelsa = new Relsa({ render: 0 });
  expect(invalidRelsa.options.render).toEqual(1);
});

test('check startIndex allowed minimal value', () => {
  const invalidRelsa = new Relsa({ startIndex: 0 });
  expect(invalidRelsa.options.startIndex).toEqual(1);
});

test('check startIndex allowed maximal value', () => {
  const invalidRelsa = new Relsa({ startIndex: options.render + 1 });
  expect(invalidRelsa.options.startIndex).toEqual(1);
});

test('check options extending', () => {
  const a = { b: 'c', x: 'y' };
  const d = { b: 'e' };
  const extendObject = extend(a, d);
  expect(extendObject).toEqual({ b: 'e', x: 'y' });
});

test('check width of items', () => {
  const renderedItems = document.querySelectorAll('.relsa-item');
  renderedItems.forEach((item, i) => {
    expect(relsa.state.proportions[relsa.options.startIndex - 1][i] + '%').toBe(
      item.style.flexBasis
    );
  });
});

test('set next item active', () => {
  const currentActiveItem = relsa.state.currentActiveItem;
  relsa.setNext();
  expect(relsa.state.currentActiveItem).toBe(currentActiveItem + 1);
});

test('set previous item active', () => {
  const currentActiveItem = relsa.state.currentActiveItem;
  relsa.setPrev();
  expect(relsa.state.currentActiveItem).toBe(currentActiveItem - 1);
});

test('set non-existent item active', () => {
  expect(relsa.setActiveItem(relsa.options.render + 1)).toBeFalsy();
  expect(relsa.setActiveItem(0)).toBeFalsy();
});

test('set custom classes for relsa-items', () => {
  const renderedItems = document.querySelectorAll('.relsa-item');
  renderedItems.forEach((item, i) => {
    expect(item.classList.contains(options.customDotClassName)).toBeTruthy();
  });
});
