const hasOwnProperty = Object.prototype.hasOwnProperty;

function extend(target) {
  for (var i = 1; i < arguments.length; i++) {
    const source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}

export default extend;
