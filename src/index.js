import extend from '../helpers/extend';

import './styles.scss';

function Relsa(options) {
  const _this = this;

  const defaultOptions = {
    container: '.relsa-container',
    render: 4,
    startIndex: 1,
    customDotClassName: '',
    isResponsive: true,
  };

  options.render && (options.render = Math.floor(options.render));
  options.startIndex && (options.startIndex = Math.floor(options.startIndex));

  if (options.render < 1) {
    options.render = 1;
  }

  if (options.startIndex > options.render || options.startIndex < 1) {
    options.startIndex = 1;
  }

  options instanceof Object
    ? (this.options = extend(defaultOptions, options))
    : (this.options = defaultOptions);

  this.generateProportions = function () {
    let proportions = [];
    const itemsQuantity = _this.options.render;
    const singleItem = Number((50 / itemsQuantity).toFixed(2));

    // create array
    for (let index = 0; index < itemsQuantity; index++) {
      let linearProportions = [];

      for (let index = 0; index < itemsQuantity + 1; index++) {
        linearProportions.push(singleItem);
      }
      proportions.push(linearProportions);
    }

    const isItemsQuantityOdd = itemsQuantity % 2;

    // fill array with values of proportions
    proportions.forEach((item, index) => {
      if (isItemsQuantityOdd && index == Math.ceil(itemsQuantity / 2) - 1) {
        item[index] = singleItem * itemsQuantity;
        item[index + 1] = singleItem * itemsQuantity;
        return false;
      }
      item[index] =
        singleItem *
        (itemsQuantity +
          (Math.floor(itemsQuantity / 2) - index) -
          Number(!isItemsQuantityOdd));
      item[index + 1] =
        singleItem * (itemsQuantity - (Math.floor(itemsQuantity / 2) - index));
    });

    return proportions;
  };

  this.state = {
    currentActiveItem: this.options.startIndex,
    node: document.querySelector(options.container),
    proportions: this.generateProportions(),
  };
  this.render = function () {
    const renderNode = _this.state.node;

    if (_this.options.container.length < 1 || renderNode.length < 1) {
      console.log('No container found in', options.container);
      return false;
    }

    renderNode.classList.add('relsa-carousel');
    if (_this.options.isResponsive) {
      renderNode.classList.add('responsive');
    }

    let relsaItem = document.createElement('div');
    const initialRelsaItem = _this.options.startIndex - 1;
    relsaItem.style.flexBasis =
      _this.state.proportions[initialRelsaItem][0] + '%';
    relsaItem.className =
      'relsa-item' +
      (options.customDotClassName ? ' ' + options.customDotClassName : '');
    renderNode.appendChild(relsaItem);

    for (let index = 1; index < options.render + 1; index++) {
      let newRelsaItem = relsaItem.cloneNode();
      newRelsaItem.innerHTML = '<span>' + index + '</span>';
      newRelsaItem.style.flexBasis =
        _this.state.proportions[initialRelsaItem][index] + '%';
      renderNode.appendChild(newRelsaItem);
    }
    this.setActiveClassName(_this.options.startIndex);

    return _this;
  };

  this.setActiveClassName = function (index) {
    const relsaItems = _this.state.node.querySelectorAll('.relsa-item');
    relsaItems.forEach((i) => i.classList.remove('active'));

    const newActiveRelsaItem = relsaItems[index].classList.add('active');
    return newActiveRelsaItem;
  };

  this.setProportions = function () {
    const activeItem = _this.state.currentActiveItem - 1;
    const relsaItems = _this.state.node.querySelectorAll('.relsa-item');
    relsaItems.forEach((item, index) => {
      item.style.flexBasis = _this.state.proportions[activeItem][index] + '%';
    });
  };

  this.setNext = function () {
    return _this.setActiveItem(_this.state.currentActiveItem + 1);
  };
  this.setPrev = function () {
    return _this.setActiveItem(_this.state.currentActiveItem - 1);
  };

  this.setActiveItem = function (itemIndex) {
    if (itemIndex < 1 || itemIndex > _this.options.render) {
      return false;
    }
    _this.state.currentActiveItem = itemIndex;
    _this.setActiveClassName(_this.state.currentActiveItem);
    _this.setProportions();

    return _this.state;
  };
}

export default Relsa;
