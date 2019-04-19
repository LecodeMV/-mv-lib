declare var global, window;
export function getPIXI() {
  global.Canvas = require('canvas');

  require('jsdom-global-fork')();

  //@ts-ignore
  HTMLCanvasElement.prototype.getContext = () => {
    return {};
  };

  // this might be required for image
  global.Image = global.Canvas.Image;

  // Node canvas Image's dont currently have `addEventListener` so we fake it for now.
  // We can always make updates to the node-canvas lib
  global.Image.prototype.addEventListener = function(event, fn) {
    var img = this;

    switch (event) {
      case 'error':
        img.onerror = function() {
          img.onerror = null;
          img.onload = null;
          fn.call(img);
        };
        break;

      case 'load':
        img.onload = function() {
          img.onerror = null;
          img.onload = null;
          fn.call(img);
        };
        break;
    }
  };

  global.Image.prototype.removeEventListener = function() {};

  if (!global.navigator) {
    global.navigator = { userAgent: 'node.js' }; // could be anything
  }

  const old = document.createElement;
  document.createElement = function() {
    let arg = arguments[0];
    if (arg === 'canvas') {
      return global.Canvas.createCanvas(1, 1);
    }
    return old.apply(this, arguments);
  };

  const canvas = global.Canvas.createCanvas(200, 200);
  const ctx = canvas.getContext('2d');
  //@ts-ignore
  HTMLCanvasElement.prototype.getContext = () => {
    return ctx;
  };

  global.window.PIXI = require('pixi.js');

  return global.window.PIXI;
}
