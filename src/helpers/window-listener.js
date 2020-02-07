import debounce from './debounce';
import throttle from './throttle';

const SCROLL_TIME_OUT = 50;
const RESIZE_TIME_OUT = 50;
const MOUSE_MOVE_TIME_OUT = 50;

class WindowListener {
  resizeCallbacks = {};
  mouseMoveCallbacks = {};
  scrollCallbacks = {};

  constructor() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  registerResizeCallback(name, callback) {
    this.resizeCallbacks[name] = callback;
  }

  unregisterResizeCallback(name) {
    delete this.resizeCallbacks[name];
  }

  registerMouseMoveCallback(name, callback) {
    this.mouseMoveCallbacks[name] = callback;
  }

  unregisterMouseMoveCallback(name) {
    delete this.mouseMoveCallbacks[name];
  }

  registerScrollCallback(name, callback) {
    this.scrollCallbacks[name] = callback;
  }

  unregisterScrollCallback(name) {
    delete this.scrollCallbacks[name];
  }

  callFuncList(funcList, ...args) {
    for (let prop in funcList) {
      if(typeof funcList[prop] == 'function') {
        funcList[prop](...args);
      } else {
        console.log(new Error(`${prop} not a function. It is ${typeof funcList[prop]}`));
      }
    }
  }

  onResize = debounce((e) => {
    this.callFuncList(this.resizeCallbacks, e);
  }, RESIZE_TIME_OUT);

  onScroll = throttle((e) => {
    this.callFuncList(this.scrollCallbacks, e);
  }, SCROLL_TIME_OUT);

  onMouseMove = throttle((e) => {
    this.callFuncList(this.mouseMoveCallbacks, e);
  }, MOUSE_MOVE_TIME_OUT);

}

export default new WindowListener();
