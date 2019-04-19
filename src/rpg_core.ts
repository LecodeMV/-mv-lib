import { getPIXI } from './pixi-shim';

const PIXI: any = getPIXI();

/**
 * This is not a class, but contains some methods that will be added to the
 * standard Javascript objects.
 *
 * @class JsExtensions
 */ function JsExtensions() {
  return null;
}
export class Utils {
  constructor() {}
  /**
   * The name of the RPG Maker. 'MV' in the current version.
   *
   * @static
   * @property RPGMAKER_NAME
   * @type String
   * @final
   */
  static RPGMAKER_NAME: string;
  /**
   * The version of the RPG Maker.
   *
   * @static
   * @property RPGMAKER_VERSION
   * @type String
   * @final
   */
  static RPGMAKER_VERSION: string;
  /**
   * Checks whether the option is in the query string.
   *
   * @static
   * @method isOptionValid
   * @param {String} name The option name
   * @return {Boolean} True if the option is in the query string
   */
  static isOptionValid(name: string): boolean {
    return null;
  }
  /**
   * Checks whether the platform is NW.js.
   *
   * @static
   * @method isNwjs
   * @return {Boolean} True if the platform is NW.js
   */
  static isNwjs(): boolean {
    return null;
  }
  /**
   * Checks whether the platform is a mobile device.
   *
   * @static
   * @method isMobileDevice
   * @return {Boolean} True if the platform is a mobile device
   */
  static isMobileDevice(): boolean {
    return null;
  }
  /**
   * Checks whether the browser is Mobile Safari.
   *
   * @static
   * @method isMobileSafari
   * @return {Boolean} True if the browser is Mobile Safari
   */
  static isMobileSafari(): boolean {
    return null;
  }
  /**
   * Checks whether the browser is Android Chrome.
   *
   * @static
   * @method isAndroidChrome
   * @return {Boolean} True if the browser is Android Chrome
   */
  static isAndroidChrome(): boolean {
    return null;
  }
  /**
   * Checks whether the browser can read files in the game folder.
   *
   * @static
   * @method canReadGameFiles
   * @return {Boolean} True if the browser can read files in the game folder
   */
  static canReadGameFiles(): boolean {
    return null;
  }
  /**
   * Makes a CSS color string from RGB values.
   *
   * @static
   * @method rgbToCssColor
   * @param {Number} r The red value in the range (0, 255)
   * @param {Number} g The green value in the range (0, 255)
   * @param {Number} b The blue value in the range (0, 255)
   * @return {String} CSS color string
   */
  static rgbToCssColor(r: number, g: number, b: number): string {
    return null;
  }
  static _id: number;
  static generateRuntimeId(): number {
    return null;
  }
  static _supportPassiveEvent: any;
  /**
   * Test this browser support passive event feature
   *
   * @static
   * @method isSupportPassiveEvent
   * @return {Boolean} this browser support passive event or not
   */
  static isSupportPassiveEvent(): boolean {
    return null;
  }
}
export class CacheEntry {
  constructor(resource: any, key: string, item: string) {}
  cache: any;
  key: any;
  item: any;
  cached: boolean;
  touchTicks: number;
  touchSeconds: number;
  ttlTicks: number;
  ttlSeconds: number;
  freedByTTL: boolean;
  /**
   * frees the resource
   */
  free(): any {
    return null;
  }
  /**
   * Allocates the resource
   * @returns {CacheEntry}
   */
  allocate(): CacheEntry {
    return null;
  }
  /**
   * Sets the time to live
   * @param {number} ticks TTL in ticks, 0 if not set
   * @param {number} time TTL in seconds, 0 if not set
   * @returns {CacheEntry}
   */
  setTimeToLive(ticks: number, time: number): CacheEntry {
    return null;
  }
  isStillAlive(): boolean {
    return null;
  }
  /**
   * makes sure that resource wont freed by Time To Live
   * if resource was already freed by TTL, put it in cache again
   */
  touch(): any {
    return null;
  }
}
export class CacheMap {
  constructor(manager: any) {}
  manager: any;
  _inner: {};
  _lastRemovedEntries: {};
  updateTicks: number;
  lastCheckTTL: number;
  delayCheckTTL: number;
  updateSeconds: number;
  /**
   * checks ttl of all elements and removes dead ones
   */
  checkTTL(): any {
    return null;
  }
  /**
   * cache item
   * @param key url of cache element
   * @returns {*|null}
   */
  getItem(key: any): any | null {
    return null;
  }
  clear(): void {}
  setItem(key: any, item: any): any {
    return null;
  }
  update(ticks: any, delta: any): void {}
}
export class ImageCache {
  constructor() {}
  static limit: number;
  _items: {};
  add(key: any, value: any): void {}
  get(key: any): any {
    return null;
  }
  reserve(key: any, value: any, reservationId: any): void {}
  releaseReservation(reservationId: any): void {}
  _truncateCache(): void {}
  _mustBeHeld(item: any): boolean {
    return null;
  }
  isReady(): boolean {
    return null;
  }
  getErrorBitmap(): any {
    return null;
  }
}
export class RequestQueue {
  constructor() {}
  _queue: undefined[];
  enqueue(key: any, value: any): void {}
  update(): void {}
  raisePriority(key: any): void {}
  clear(): void {}
}
export class Point extends PIXI.Point {
  constructor(x: number, y: number) {
    super();
  }
}
export class Rectangle extends PIXI.Rectangle {
  constructor(x: number, y: number, width: number, height: number) {
    super();
  }
  /**
   * @static
   * @property emptyRectangle
   * @type Rectangle
   * @private
   */
  static emptyRectangle: Rectangle;
}
export class Bitmap {
  constructor(width: number, height: number) {}
  static _reuseImages: undefined[];
  /**
   * Bitmap states(Bitmap._loadingState):
   *
   * none:
   * Empty Bitmap
   *
   * pending:
   * Url requested, but pending to load until startRequest called
   *
   * purged:
   * Url request completed and purged.
   *
   * requesting:
   * Requesting supplied URI now.
   *
   * requestCompleted:
   * Request completed
   *
   * decrypting:
   * requesting encrypted data from supplied URI or decrypting it.
   *
   * decryptCompleted:
   * Decrypt completed
   *
   * loaded:
   * loaded. isReady() === true, so It's usable.
   *
   * error:
   * error occurred
   *
   */
  _createCanvas(): any {
    return null;
  }
  ___canvas: any;
  ___context: any;
  _createBaseTexture(source: any): void {}
  ___baseTexture: PIXI.BaseTexture;
  _clearImgInstance(): void {}
  _errorListener: any;
  _loadListener: any;
  _image: any;
  _renewCanvas(): void {}
  _url: string;
  _paintOpacity: number;
  _smooth: boolean;
  _loadListeners: undefined[];
  _loadingState: string;
  _decodeAfterRequest: boolean;
  /**
   * Cache entry, for images. In all cases _url is the same as cacheEntry.key
   * @type CacheEntry
   */
  cacheEntry: CacheEntry;
  /**
   * The face name of the font.
   *
   * @property fontFace
   * @type String
   */
  fontFace: string;
  /**
   * The size of the font in pixels.
   *
   * @property fontSize
   * @type Number
   */
  fontSize: number;
  /**
   * Whether the font is italic.
   *
   * @property fontItalic
   * @type Boolean
   */
  fontItalic: boolean;
  /**
   * The color of the text in CSS format.
   *
   * @property textColor
   * @type String
   */
  textColor: string;
  /**
   * The color of the outline of the text in CSS format.
   *
   * @property outlineColor
   * @type String
   */
  outlineColor: string;
  /**
   * The width of the outline of the text.
   *
   * @property outlineWidth
   * @type Number
   */
  outlineWidth: number;
  /**
   * Loads a image file and returns a new bitmap object.
   *
   * @static
   * @method load
   * @param {String} url The image url of the texture
   * @return Bitmap
   */
  static load(url: string): any {
    return null;
  }
  /**
   * Takes a snapshot of the game screen and returns a new bitmap object.
   *
   * @static
   * @method snap
   * @param {Stage} stage The stage object
   * @return Bitmap
   */
  static snap(stage: Stage): any {
    return null;
  }
  /**
   * Checks whether the bitmap is ready to render.
   *
   * @method isReady
   * @return {Boolean} True if the bitmap is ready to render
   */
  isReady(): boolean {
    return null;
  }
  /**
   * Checks whether a loading error has occurred.
   *
   * @method isError
   * @return {Boolean} True if a loading error has occurred
   */
  isError(): boolean {
    return null;
  }
  /**
   * touch the resource
   * @method touch
   */
  touch(): any {
    return null;
  }
  /**
   * Resizes the bitmap.
   *
   * @method resize
   * @param {Number} width The new width of the bitmap
   * @param {Number} height The new height of the bitmap
   */
  resize(width: number, height: number): any {
    return null;
  }
  /**
   * Performs a block transfer.
   *
   * @method blt
   * @param {Bitmap} source The bitmap to draw
   * @param {Number} sx The x coordinate in the source
   * @param {Number} sy The y coordinate in the source
   * @param {Number} sw The width of the source image
   * @param {Number} sh The height of the source image
   * @param {Number} dx The x coordinate in the destination
   * @param {Number} dy The y coordinate in the destination
   * @param {Number} [dw=sw] The width to draw the image in the destination
   * @param {Number} [dh=sh] The height to draw the image in the destination
   */
  blt(
    source: Bitmap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw?: number,
    dh?: number
  ): any {
    return null;
  }
  /**
   * Performs a block transfer, using assumption that original image was not modified (no hue)
   *
   * @method blt
   * @param {Bitmap} source The bitmap to draw
   * @param {Number} sx The x coordinate in the source
   * @param {Number} sy The y coordinate in the source
   * @param {Number} sw The width of the source image
   * @param {Number} sh The height of the source image
   * @param {Number} dx The x coordinate in the destination
   * @param {Number} dy The y coordinate in the destination
   * @param {Number} [dw=sw] The width to draw the image in the destination
   * @param {Number} [dh=sh] The height to draw the image in the destination
   */
  bltImage(
    source: Bitmap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ): any {
    return null;
  }
  /**
   * Returns pixel color at the specified point.
   *
   * @method getPixel
   * @param {Number} x The x coordinate of the pixel in the bitmap
   * @param {Number} y The y coordinate of the pixel in the bitmap
   * @return {String} The pixel color (hex format)
   */
  getPixel(x: number, y: number): string {
    return null;
  }
  /**
   * Returns alpha pixel value at the specified point.
   *
   * @method getAlphaPixel
   * @param {Number} x The x coordinate of the pixel in the bitmap
   * @param {Number} y The y coordinate of the pixel in the bitmap
   * @return {String} The alpha value
   */
  getAlphaPixel(x: number, y: number): string {
    return null;
  }
  /**
   * Clears the specified rectangle.
   *
   * @method clearRect
   * @param {Number} x The x coordinate for the upper-left corner
   * @param {Number} y The y coordinate for the upper-left corner
   * @param {Number} width The width of the rectangle to clear
   * @param {Number} height The height of the rectangle to clear
   */
  clearRect(x: number, y: number, width: number, height: number): any {
    return null;
  }
  /**
   * Clears the entire bitmap.
   *
   * @method clear
   */
  clear(): any {
    return null;
  }
  /**
   * Fills the specified rectangle.
   *
   * @method fillRect
   * @param {Number} x The x coordinate for the upper-left corner
   * @param {Number} y The y coordinate for the upper-left corner
   * @param {Number} width The width of the rectangle to fill
   * @param {Number} height The height of the rectangle to fill
   * @param {String} color The color of the rectangle in CSS format
   */
  fillRect(x: number, y: number, width: number, height: number, color: string): any {
    return null;
  }
  /**
   * Fills the entire bitmap.
   *
   * @method fillAll
   * @param {String} color The color of the rectangle in CSS format
   */
  fillAll(color: string): any {
    return null;
  }
  /**
   * Draws the rectangle with a gradation.
   *
   * @method gradientFillRect
   * @param {Number} x The x coordinate for the upper-left corner
   * @param {Number} y The y coordinate for the upper-left corner
   * @param {Number} width The width of the rectangle to fill
   * @param {Number} height The height of the rectangle to fill
   * @param {String} color1 The gradient starting color
   * @param {String} color2 The gradient ending color
   * @param {Boolean} vertical Wether the gradient should be draw as vertical or not
   */
  gradientFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color1: string,
    color2: string,
    vertical: boolean
  ): any {
    return null;
  }
  /**
   * Draw a bitmap in the shape of a circle
   *
   * @method drawCircle
   * @param {Number} x The x coordinate based on the circle center
   * @param {Number} y The y coordinate based on the circle center
   * @param {Number} radius The radius of the circle
   * @param {String} color The color of the circle in CSS format
   */
  drawCircle(x: number, y: number, radius: number, color: string): any {
    return null;
  }
  /**
   * Draws the outline text to the bitmap.
   *
   * @method drawText
   * @param {String} text The text that will be drawn
   * @param {Number} x The x coordinate for the left of the text
   * @param {Number} y The y coordinate for the top of the text
   * @param {Number} maxWidth The maximum allowed width of the text
   * @param {Number} lineHeight The height of the text line
   * @param {String} align The alignment of the text
   */
  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    align: string
  ): any {
    return null;
  }
  /**
   * Returns the width of the specified text.
   *
   * @method measureTextWidth
   * @param {String} text The text to be measured
   * @return {Number} The width of the text in pixels
   */
  measureTextWidth(text: string): number {
    return null;
  }
  /**
   * Changes the color tone of the entire bitmap.
   *
   * @method adjustTone
   * @param {Number} r The red strength in the range (-255, 255)
   * @param {Number} g The green strength in the range (-255, 255)
   * @param {Number} b The blue strength in the range (-255, 255)
   */
  adjustTone(r: number, g: number, b: number): any {
    return null;
  }
  /**
   * Rotates the hue of the entire bitmap.
   *
   * @method rotateHue
   * @param {Number} offset The hue offset in 360 degrees
   */
  rotateHue(offset: number): any {
    return null;
  }
  /**
   * Applies a blur effect to the bitmap.
   *
   * @method blur
   */
  blur(): any {
    return null;
  }
  /**
   * Add a callback function that will be called when the bitmap is loaded.
   *
   * @method addLoadListener
   * @param {Function} listner The callback function
   */
  addLoadListener(listner: Function): any {
    return null;
  }
  /**
   * @method _makeFontNameText
   * @private
   */
  _makeFontNameText(): any {
    return null;
  }
  /**
   * @method _drawTextOutline
   * @param {String} text
   * @param {Number} tx
   * @param {Number} ty
   * @param {Number} maxWidth
   * @private
   */
  _drawTextOutline(text: string, tx: number, ty: number, maxWidth: number): any {
    return null;
  }
  /**
   * @method _drawTextBody
   * @param {String} text
   * @param {Number} tx
   * @param {Number} ty
   * @param {Number} maxWidth
   * @private
   */
  _drawTextBody(text: string, tx: number, ty: number, maxWidth: number): any {
    return null;
  }
  /**
   * @method _onLoad
   * @private
   */
  _onLoad(): any {
    return null;
  }
  decode(): void {}
  /**
   * @method _callLoadListeners
   * @private
   */
  _callLoadListeners(): any {
    return null;
  }
  /**
   * @method _onError
   * @private
   */
  _onError(): any {
    return null;
  }
  /**
   * @method _setDirty
   * @private
   */
  _setDirty(): any {
    return null;
  }
  _dirty: boolean;
  /**
   * updates texture is bitmap was dirty
   * @method checkDirty
   */
  checkDirty(): any {
    return null;
  }
  static request(url: any): any {
    return null;
  }
  _requestImage(url: any): void {}
  isRequestOnly(): boolean {
    return null;
  }
  isRequestReady(): boolean {
    return null;
  }
  startRequest(): void {}
  readonly _canvas: any;
  readonly _context: any;
  readonly _baseTexture: any;
  readonly url: string;
  readonly baseTexture: PIXI.BaseTexture;
  readonly canvas: HTMLCanvasElement;
  readonly context: CanvasRenderingContext2D;
  readonly width: number;
  readonly height: number;
  readonly rect: Rectangle;
  smooth: boolean;
  paintOpacity: number;
}
export class Graphics {
  constructor() {}
  static _cssFontLoading: any;
  static _fontLoaded: any;
  static _videoVolume: number;
  /**
   * Initializes the graphics system.
   *
   * @static
   * @method initialize
   * @param {Number} width The width of the game screen
   * @param {Number} height The height of the game screen
   * @param {String} type The type of the renderer.
   *                 'canvas', 'webgl', or 'auto'.
   */
  static initialize(width: number, height: number, type: string): any {
    return null;
  }
  static _width: any;
  static _height: any;
  static _rendererType: any;
  static _boxWidth: any;
  static _boxHeight: any;
  static _scale: number;
  static _realScale: number;
  static _errorShowed: boolean;
  static _errorPrinter: any;
  static _canvas: any;
  static _video: any;
  static _videoUnlocked: boolean;
  static _videoLoading: boolean;
  static _upperCanvas: any;
  static _renderer: any;
  static _fpsMeter: any;
  static _modeBox: any;
  static _skipCount: number;
  static _maxSkip: number;
  static _rendered: boolean;
  static _loadingImage: any;
  static _loadingCount: number;
  static _fpsMeterToggled: boolean;
  static _stretchEnabled: any;
  static _canUseDifferenceBlend: boolean;
  static _canUseSaturationBlend: boolean;
  static _hiddenCanvas: any;
  static _setupCssFontLoading(): void {}
  static canUseCssFontLoading(): boolean {
    return null;
  }
  /**
   * The total frame count of the game screen.
   *
   * @static
   * @property frameCount
   * @type Number
   */
  static frameCount: number;
  /**
   * The alias of PIXI.blendModes.NORMAL.
   *
   * @static
   * @property BLEND_NORMAL
   * @type Number
   * @final
   */
  static BLEND_NORMAL: number;
  /**
   * The alias of PIXI.blendModes.ADD.
   *
   * @static
   * @property BLEND_ADD
   * @type Number
   * @final
   */
  static BLEND_ADD: number;
  /**
   * The alias of PIXI.blendModes.MULTIPLY.
   *
   * @static
   * @property BLEND_MULTIPLY
   * @type Number
   * @final
   */
  static BLEND_MULTIPLY: number;
  /**
   * The alias of PIXI.blendModes.SCREEN.
   *
   * @static
   * @property BLEND_SCREEN
   * @type Number
   * @final
   */
  static BLEND_SCREEN: number;
  /**
   * Marks the beginning of each frame for FPSMeter.
   *
   * @static
   * @method tickStart
   */
  static tickStart(): any {
    return null;
  }
  /**
   * Marks the end of each frame for FPSMeter.
   *
   * @static
   * @method tickEnd
   */
  static tickEnd(): any {
    return null;
  }
  /**
   * Renders the stage to the game screen.
   *
   * @static
   * @method render
   * @param {Stage} stage The stage object to be rendered
   */
  static render(stage: Stage): any {
    return null;
  }
  /**
   * Checks whether the renderer type is WebGL.
   *
   * @static
   * @method isWebGL
   * @return {Boolean} True if the renderer type is WebGL
   */
  static isWebGL(): boolean {
    return null;
  }
  /**
   * Checks whether the current browser supports WebGL.
   *
   * @static
   * @method hasWebGL
   * @return {Boolean} True if the current browser supports WebGL.
   */
  static hasWebGL(): boolean {
    return null;
  }
  /**
   * Checks whether the canvas blend mode 'difference' is supported.
   *
   * @static
   * @method canUseDifferenceBlend
   * @return {Boolean} True if the canvas blend mode 'difference' is supported
   */
  static canUseDifferenceBlend(): boolean {
    return null;
  }
  /**
   * Checks whether the canvas blend mode 'saturation' is supported.
   *
   * @static
   * @method canUseSaturationBlend
   * @return {Boolean} True if the canvas blend mode 'saturation' is supported
   */
  static canUseSaturationBlend(): boolean {
    return null;
  }
  /**
   * Sets the source of the "Now Loading" image.
   *
   * @static
   * @method setLoadingImage
   */
  static setLoadingImage(): any {
    return null;
  }
  /**
   * Initializes the counter for displaying the "Now Loading" image.
   *
   * @static
   * @method startLoading
   */
  static startLoading(): any {
    return null;
  }
  /**
   * Increments the loading counter and displays the "Now Loading" image if necessary.
   *
   * @static
   * @method updateLoading
   */
  static updateLoading(): any {
    return null;
  }
  /**
   * Erases the "Now Loading" image.
   *
   * @static
   * @method endLoading
   */
  static endLoading(): any {
    return null;
  }
  /**
   * Displays the loading error text to the screen.
   *
   * @static
   * @method printLoadingError
   * @param {String} url The url of the resource failed to load
   */
  static printLoadingError(url: string): any {
    return null;
  }
  /**
   * Erases the loading error text.
   *
   * @static
   * @method eraseLoadingError
   */
  static eraseLoadingError(): any {
    return null;
  }
  /**
   * Displays the error text to the screen.
   *
   * @static
   * @method printError
   * @param {String} name The name of the error
   * @param {String} message The message of the error
   */
  static printError(name: string, message: string): any {
    return null;
  }
  /**
   * Shows the FPSMeter element.
   *
   * @static
   * @method showFps
   */
  static showFps(): any {
    return null;
  }
  /**
   * Hides the FPSMeter element.
   *
   * @static
   * @method hideFps
   */
  static hideFps(): any {
    return null;
  }
  /**
   * Loads a font file.
   *
   * @static
   * @method loadFont
   * @param {String} name The face name of the font
   * @param {String} url The url of the font file
   */
  static loadFont(name: string, url: string): any {
    return null;
  }
  /**
   * Checks whether the font file is loaded.
   *
   * @static
   * @method isFontLoaded
   * @param {String} name The face name of the font
   * @return {Boolean} True if the font file is loaded
   */
  static isFontLoaded(name: string): boolean {
    return null;
  }
  /**
   * Starts playback of a video.
   *
   * @static
   * @method playVideo
   * @param {String} src
   */
  static playVideo(src: string): any {
    return null;
  }
  static _videoLoader(): void {}
  /**
   * @static
   * @method _playVideo
   * @param {String} src
   * @private
   */
  static _playVideo(src: string): any {
    return null;
  }
  /**
   * Checks whether the video is playing.
   *
   * @static
   * @method isVideoPlaying
   * @return {Boolean} True if the video is playing
   */
  static isVideoPlaying(): boolean {
    return null;
  }
  /**
   * Checks whether the browser can play the specified video type.
   *
   * @static
   * @method canPlayVideoType
   * @param {String} type The video type to test support for
   * @return {Boolean} True if the browser can play the specified video type
   */
  static canPlayVideoType(type: string): boolean {
    return null;
  }
  /**
   * Sets volume of a video.
   *
   * @static
   * @method setVideoVolume
   * @param {Number} value
   */
  static setVideoVolume(value: number): any {
    return null;
  }
  /**
   * Converts an x coordinate on the page to the corresponding
   * x coordinate on the canvas area.
   *
   * @static
   * @method pageToCanvasX
   * @param {Number} x The x coordinate on the page to be converted
   * @return {Number} The x coordinate on the canvas area
   */
  static pageToCanvasX(x: number): number {
    return null;
  }
  /**
   * Converts a y coordinate on the page to the corresponding
   * y coordinate on the canvas area.
   *
   * @static
   * @method pageToCanvasY
   * @param {Number} y The y coordinate on the page to be converted
   * @return {Number} The y coordinate on the canvas area
   */
  static pageToCanvasY(y: number): number {
    return null;
  }
  /**
   * Checks whether the specified point is inside the game canvas area.
   *
   * @static
   * @method isInsideCanvas
   * @param {Number} x The x coordinate on the canvas area
   * @param {Number} y The y coordinate on the canvas area
   * @return {Boolean} True if the specified point is inside the game canvas area
   */
  static isInsideCanvas(x: number, y: number): boolean {
    return null;
  }
  /**
   * Calls pixi.js garbage collector
   */
  static callGC(): any {
    return null;
  }
  /**
   * @static
   * @method _createAllElements
   * @private
   */
  static _createAllElements(): any {
    return null;
  }
  /**
   * @static
   * @method _updateAllElements
   * @private
   */
  static _updateAllElements(): any {
    return null;
  }
  /**
   * @static
   * @method _updateRealScale
   * @private
   */
  static _updateRealScale(): any {
    return null;
  }
  /**
   * @static
   * @method _makeErrorHtml
   * @param {String} name
   * @param {String} message
   * @return {String}
   * @private
   */
  static _makeErrorHtml(name: string, message: string): string {
    return null;
  }
  /**
   * @static
   * @method _defaultStretchMode
   * @private
   */
  static _defaultStretchMode(): any {
    return null;
  }
  /**
   * @static
   * @method _testCanvasBlendModes
   * @private
   */
  static _testCanvasBlendModes(): any {
    return null;
  }
  /**
   * @static
   * @method _modifyExistingElements
   * @private
   */
  static _modifyExistingElements(): any {
    return null;
  }
  /**
   * @static
   * @method _createErrorPrinter
   * @private
   */
  static _createErrorPrinter(): any {
    return null;
  }
  /**
   * @static
   * @method _updateErrorPrinter
   * @private
   */
  static _updateErrorPrinter(): any {
    return null;
  }
  /**
   * @static
   * @method _createCanvas
   * @private
   */
  static _createCanvas(): any {
    return null;
  }
  /**
   * @static
   * @method _updateCanvas
   * @private
   */
  static _updateCanvas(): any {
    return null;
  }
  /**
   * @static
   * @method _createVideo
   * @private
   */
  static _createVideo(): any {
    return null;
  }
  /**
   * @static
   * @method _updateVideo
   * @private
   */
  static _updateVideo(): any {
    return null;
  }
  /**
   * @static
   * @method _createUpperCanvas
   * @private
   */
  static _createUpperCanvas(): any {
    return null;
  }
  /**
   * @static
   * @method _updateUpperCanvas
   * @private
   */
  static _updateUpperCanvas(): any {
    return null;
  }
  /**
   * @static
   * @method _clearUpperCanvas
   * @private
   */
  static _clearUpperCanvas(): any {
    return null;
  }
  /**
   * @static
   * @method _paintUpperCanvas
   * @private
   */
  static _paintUpperCanvas(): any {
    return null;
  }
  /**
   * @static
   * @method _createRenderer
   * @private
   */
  static _createRenderer(): any {
    return null;
  }
  /**
   * @static
   * @method _updateRenderer
   * @private
   */
  static _updateRenderer(): any {
    return null;
  }
  /**
   * @static
   * @method _createFPSMeter
   * @private
   */
  static _createFPSMeter(): any {
    return null;
  }
  /**
   * @static
   * @method _createModeBox
   * @private
   */
  static _createModeBox(): any {
    return null;
  }
  /**
   * @static
   * @method _createGameFontLoader
   * @private
   */
  static _createGameFontLoader(): any {
    return null;
  }
  /**
   * @static
   * @method _createFontLoader
   * @param {String} name
   * @private
   */
  static _createFontLoader(name: string): any {
    return null;
  }
  /**
   * @static
   * @method _centerElement
   * @param {HTMLElement} element
   * @private
   */
  static _centerElement(element: HTMLElement): any {
    return null;
  }
  /**
   * @static
   * @method _disableTextSelection
   * @private
   */
  static _disableTextSelection(): any {
    return null;
  }
  /**
   * @static
   * @method _disableContextMenu
   * @private
   */
  static _disableContextMenu(): any {
    return null;
  }
  /**
   * @static
   * @method _applyCanvasFilter
   * @private
   */
  static _applyCanvasFilter(): any {
    return null;
  }
  /**
   * @static
   * @method _onVideoLoad
   * @private
   */
  static _onVideoLoad(): any {
    return null;
  }
  /**
   * @static
   * @method _onVideoError
   * @private
   */
  static _onVideoError(): any {
    return null;
  }
  /**
   * @static
   * @method _onVideoEnd
   * @private
   */
  static _onVideoEnd(): any {
    return null;
  }
  /**
   * @static
   * @method _updateVisibility
   * @param {Boolean} videoVisible
   * @private
   */
  static _updateVisibility(videoVisible: boolean): any {
    return null;
  }
  /**
   * @static
   * @method _isVideoVisible
   * @return {Boolean}
   * @private
   */
  static _isVideoVisible(): boolean {
    return null;
  }
  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  static _setupEventHandlers(): any {
    return null;
  }
  /**
   * @static
   * @method _onWindowResize
   * @private
   */
  static _onWindowResize(): any {
    return null;
  }
  /**
   * @static
   * @method _onKeyDown
   * @param {KeyboardEvent} event
   * @private
   */
  static _onKeyDown(event: KeyboardEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onTouchEnd
   * @param {TouchEvent} event
   * @private
   */
  static _onTouchEnd(event: TouchEvent): any {
    return null;
  }
  /**
   * @static
   * @method _switchFPSMeter
   * @private
   */
  static _switchFPSMeter(): any {
    return null;
  }
  /**
   * @static
   * @method _switchStretchMode
   * @return {Boolean}
   * @private
   */
  static _switchStretchMode(): boolean {
    return null;
  }
  /**
   * @static
   * @method _switchFullScreen
   * @private
   */
  static _switchFullScreen(): any {
    return null;
  }
  /**
   * @static
   * @method _isFullScreen
   * @return {Boolean}
   * @private
   */
  static _isFullScreen(): boolean {
    return null;
  }
  /**
   * @static
   * @method _requestFullScreen
   * @private
   */
  static _requestFullScreen(): any {
    return null;
  }
  /**
   * @static
   * @method _cancelFullScreen
   * @private
   */
  static _cancelFullScreen(): any {
    return null;
  }
  static width: number;
  static height: number;
  static boxWidth: number;
  static boxHeight: number;
  static scale: number;
}
export class Input {
  constructor() {}
  /**
   * Initializes the input system.
   *
   * @static
   * @method initialize
   */
  static initialize(): any {
    return null;
  }
  /**
   * The wait time of the key repeat in frames.
   *
   * @static
   * @property keyRepeatWait
   * @type Number
   */
  static keyRepeatWait: number;
  /**
   * The interval of the key repeat in frames.
   *
   * @static
   * @property keyRepeatInterval
   * @type Number
   */
  static keyRepeatInterval: number;
  /**
   * A hash table to convert from a virtual key code to a mapped key name.
   *
   * @static
   * @property keyMapper
   * @type Object
   */
  static keyMapper: Object;
  /**
   * A hash table to convert from a gamepad button to a mapped key name.
   *
   * @static
   * @property gamepadMapper
   * @type Object
   */
  static gamepadMapper: Object;
  /**
   * Clears all the input data.
   *
   * @static
   * @method clear
   */
  static clear(): any {
    return null;
  }
  static _currentState: {};
  static _previousState: {};
  static _gamepadStates: undefined[];
  static _latestButton: any;
  static _pressedTime: number;
  static _dir4: number;
  static _dir8: number;
  static _preferredAxis: string;
  static _date: number;
  /**
   * Updates the input data.
   *
   * @static
   * @method update
   */
  static update(): any {
    return null;
  }
  /**
   * Checks whether a key is currently pressed down.
   *
   * @static
   * @method isPressed
   * @param {String} keyName The mapped name of the key
   * @return {Boolean} True if the key is pressed
   */
  static isPressed(keyName: string): boolean {
    return null;
  }
  /**
   * Checks whether a key is just pressed.
   *
   * @static
   * @method isTriggered
   * @param {String} keyName The mapped name of the key
   * @return {Boolean} True if the key is triggered
   */
  static isTriggered(keyName: string): boolean {
    return null;
  }
  /**
   * Checks whether a key is just pressed or a key repeat occurred.
   *
   * @static
   * @method isRepeated
   * @param {String} keyName The mapped name of the key
   * @return {Boolean} True if the key is repeated
   */
  static isRepeated(keyName: string): boolean {
    return null;
  }
  /**
   * Checks whether a key is kept depressed.
   *
   * @static
   * @method isLongPressed
   * @param {String} keyName The mapped name of the key
   * @return {Boolean} True if the key is long-pressed
   */
  static isLongPressed(keyName: string): boolean {
    return null;
  }
  /**
   * @static
   * @method _wrapNwjsAlert
   * @private
   */
  static _wrapNwjsAlert(): any {
    return null;
  }
  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  static _setupEventHandlers(): any {
    return null;
  }
  /**
   * @static
   * @method _onKeyDown
   * @param {KeyboardEvent} event
   * @private
   */
  static _onKeyDown(event: KeyboardEvent): any {
    return null;
  }
  /**
   * @static
   * @method _shouldPreventDefault
   * @param {Number} keyCode
   * @private
   */
  static _shouldPreventDefault(keyCode: number): any {
    return null;
  }
  /**
   * @static
   * @method _onKeyUp
   * @param {KeyboardEvent} event
   * @private
   */
  static _onKeyUp(event: KeyboardEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onLostFocus
   * @private
   */
  static _onLostFocus(): any {
    return null;
  }
  /**
   * @static
   * @method _pollGamepads
   * @private
   */
  static _pollGamepads(): any {
    return null;
  }
  /**
   * @static
   * @method _updateGamepadState
   * @param {Gamepad} gamepad
   * @param {Number} index
   * @private
   */
  static _updateGamepadState(gamepad: Gamepad, index: number): any {
    return null;
  }
  /**
   * @static
   * @method _updateDirection
   * @private
   */
  static _updateDirection(): any {
    return null;
  }
  /**
   * @static
   * @method _signX
   * @private
   */
  static _signX(): any {
    return null;
  }
  /**
   * @static
   * @method _signY
   * @private
   */
  static _signY(): any {
    return null;
  }
  /**
   * @static
   * @method _makeNumpadDirection
   * @param {Number} x
   * @param {Number} y
   * @return {Number}
   * @private
   */
  static _makeNumpadDirection(x: number, y: number): number {
    return null;
  }
  /**
   * @static
   * @method _isEscapeCompatible
   * @param {String} keyName
   * @return {Boolean}
   * @private
   */
  static _isEscapeCompatible(keyName: string): boolean {
    return null;
  }
  static readonly dir4: number;
  static readonly dir8: number;
  static readonly date: number;
}
export class TouchInput {
  constructor() {}
  /**
   * Initializes the touch system.
   *
   * @static
   * @method initialize
   */
  static initialize(): any {
    return null;
  }
  /**
   * The wait time of the pseudo key repeat in frames.
   *
   * @static
   * @property keyRepeatWait
   * @type Number
   */
  static keyRepeatWait: number;
  /**
   * The interval of the pseudo key repeat in frames.
   *
   * @static
   * @property keyRepeatInterval
   * @type Number
   */
  static keyRepeatInterval: number;
  /**
   * Clears all the touch data.
   *
   * @static
   * @method clear
   */
  static clear(): any {
    return null;
  }
  static _mousePressed: boolean;
  static _screenPressed: boolean;
  static _pressedTime: number;
  static _events: {};
  static _triggered: boolean;
  static _cancelled: boolean;
  static _moved: boolean;
  static _released: boolean;
  static _wheelX: number;
  static _wheelY: number;
  static _x: number;
  static _y: number;
  static _date: number;
  /**
   * Updates the touch data.
   *
   * @static
   * @method update
   */
  static update(): any {
    return null;
  }
  /**
   * Checks whether the mouse button or touchscreen is currently pressed down.
   *
   * @static
   * @method isPressed
   * @return {Boolean} True if the mouse button or touchscreen is pressed
   */
  static isPressed(): boolean {
    return null;
  }
  /**
   * Checks whether the left mouse button or touchscreen is just pressed.
   *
   * @static
   * @method isTriggered
   * @return {Boolean} True if the mouse button or touchscreen is triggered
   */
  static isTriggered(): boolean {
    return null;
  }
  /**
   * Checks whether the left mouse button or touchscreen is just pressed
   * or a pseudo key repeat occurred.
   *
   * @static
   * @method isRepeated
   * @return {Boolean} True if the mouse button or touchscreen is repeated
   */
  static isRepeated(): boolean {
    return null;
  }
  /**
   * Checks whether the left mouse button or touchscreen is kept depressed.
   *
   * @static
   * @method isLongPressed
   * @return {Boolean} True if the left mouse button or touchscreen is long-pressed
   */
  static isLongPressed(): boolean {
    return null;
  }
  /**
   * Checks whether the right mouse button is just pressed.
   *
   * @static
   * @method isCancelled
   * @return {Boolean} True if the right mouse button is just pressed
   */
  static isCancelled(): boolean {
    return null;
  }
  /**
   * Checks whether the mouse or a finger on the touchscreen is moved.
   *
   * @static
   * @method isMoved
   * @return {Boolean} True if the mouse or a finger on the touchscreen is moved
   */
  static isMoved(): boolean {
    return null;
  }
  /**
   * Checks whether the left mouse button or touchscreen is released.
   *
   * @static
   * @method isReleased
   * @return {Boolean} True if the mouse button or touchscreen is released
   */
  static isReleased(): boolean {
    return null;
  }
  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  static _setupEventHandlers(): any {
    return null;
  }
  /**
   * @static
   * @method _onMouseDown
   * @param {MouseEvent} event
   * @private
   */
  static _onMouseDown(event: MouseEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onLeftButtonDown
   * @param {MouseEvent} event
   * @private
   */
  static _onLeftButtonDown(event: MouseEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onMiddleButtonDown
   * @param {MouseEvent} event
   * @private
   */
  static _onMiddleButtonDown(event: MouseEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onRightButtonDown
   * @param {MouseEvent} event
   * @private
   */
  static _onRightButtonDown(event: MouseEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onMouseMove
   * @param {MouseEvent} event
   * @private
   */
  static _onMouseMove(event: MouseEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onMouseUp
   * @param {MouseEvent} event
   * @private
   */
  static _onMouseUp(event: MouseEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onWheel
   * @param {WheelEvent} event
   * @private
   */
  static _onWheel(event: WheelEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onTouchStart
   * @param {TouchEvent} event
   * @private
   */
  static _onTouchStart(event: TouchEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onTouchMove
   * @param {TouchEvent} event
   * @private
   */
  static _onTouchMove(event: TouchEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onTouchEnd
   * @param {TouchEvent} event
   * @private
   */
  static _onTouchEnd(event: TouchEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onTouchCancel
   * @param {TouchEvent} event
   * @private
   */
  static _onTouchCancel(event: TouchEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onPointerDown
   * @param {PointerEvent} event
   * @private
   */
  static _onPointerDown(event: PointerEvent): any {
    return null;
  }
  /**
   * @static
   * @method _onTrigger
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  static _onTrigger(x: number, y: number): any {
    return null;
  }
  /**
   * @static
   * @method _onCancel
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  static _onCancel(x: number, y: number): any {
    return null;
  }
  /**
   * @static
   * @method _onMove
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  static _onMove(x: number, y: number): any {
    return null;
  }
  /**
   * @static
   * @method _onRelease
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  static _onRelease(x: number, y: number): any {
    return null;
  }
  static readonly wheelX: number;
  static readonly wheelY: number;
  static readonly x: number;
  static readonly y: number;
  static readonly date: number;
}
export class Sprite extends PIXI.Sprite {
  constructor(bitmap?: Bitmap) {
    super();
  }
  static voidFilter: PIXI.filters.VoidFilter;
  _bitmap: any;
  _frame: Rectangle;
  _realFrame: Rectangle;
  _blendColor: number[];
  _colorTone: number[];
  _canvas: any;
  _context: any;
  _tintTexture: any;
  /**
   * use heavy renderer that will reduce border artifacts and apply advanced blendModes
   * @type {boolean}
   * @private
   */
  _isPicture: boolean;
  spriteId: number;
  opaque: boolean;
  static _counter: number;
  /**
   * Updates the sprite for each frame.
   *
   * @method update
   */
  update(): any {
    return null;
  }
  /**
   * Sets the x and y at once.
   *
   * @method move
   * @param {Number} x The x coordinate of the sprite
   * @param {Number} y The y coordinate of the sprite
   */
  move(x: number, y: number): any {
    return null;
  }
  x: any;
  y: any;
  /**
   * Sets the rectagle of the bitmap that the sprite displays.
   *
   * @method setFrame
   * @param {Number} x The x coordinate of the frame
   * @param {Number} y The y coordinate of the frame
   * @param {Number} width The width of the frame
   * @param {Number} height The height of the frame
   */
  setFrame(x: number, y: number, width: number, height: number): any {
    return null;
  }
  _refreshFrame: boolean;
  /**
   * Gets the blend color for the sprite.
   *
   * @method getBlendColor
   * @return {Array} The blend color [r, g, b, a]
   */
  getBlendColor(): any[] {
    return null;
  }
  /**
   * Sets the blend color for the sprite.
   *
   * @method setBlendColor
   * @param {Array} color The blend color [r, g, b, a]
   */
  setBlendColor(color: any[]): any {
    return null;
  }
  /**
   * Gets the color tone for the sprite.
   *
   * @method getColorTone
   * @return {Array} The color tone [r, g, b, gray]
   */
  getColorTone(): any[] {
    return null;
  }
  /**
   * Sets the color tone for the sprite.
   *
   * @method setColorTone
   * @param {Array} tone The color tone [r, g, b, gray]
   */
  setColorTone(tone: any[]): any {
    return null;
  }
  /**
   * @method _onBitmapLoad
   * @private
   */
  _onBitmapLoad(): any {
    return null;
  }
  /**
   * @method _refresh
   * @private
   */
  _refresh(): any {
    return null;
  }
  /**
   * @method _isInBitmapRect
   * @param {Number} x
   * @param {Number} y
   * @param {Number} w
   * @param {Number} h
   * @return {Boolean}
   * @private
   */
  _isInBitmapRect(x: number, y: number, w: number, h: number): boolean {
    return null;
  }
  /**
   * @method _needsTint
   * @return {Boolean}
   * @private
   */
  _needsTint(): boolean {
    return null;
  }
  /**
   * @method _createTinter
   * @param {Number} w
   * @param {Number} h
   * @private
   */
  _createTinter(w: number, h: number): any {
    return null;
  }
  /**
   * @method _executeTint
   * @param {Number} x
   * @param {Number} y
   * @param {Number} w
   * @param {Number} h
   * @private
   */
  _executeTint(x: number, y: number, w: number, h: number): any {
    return null;
  }
  _renderCanvas_PIXI: any;
  _renderWebGL_PIXI: any;
  /**
   * @method _renderCanvas
   * @param {Object} renderer
   * @private
   */
  _renderCanvas(renderer: Object): any {
    return null;
  }
  /**
   * checks if we need to speed up custom blendmodes
   * @param renderer
   * @private
   */
  _speedUpCustomBlendModes(renderer: any): any {
    return null;
  }
  /**
   * @method _renderWebGL
   * @param {Object} renderer
   * @private
   */
  _renderWebGL(renderer: Object): any {
    return null;
  }
  bitmap: Bitmap;
  width: number;
  height: number;
  opacity: number;
}
export class Tilemap extends PIXI.Container {
  constructor() {
    super();
  }
  _margin: number;
  _width: any;
  _height: any;
  _tileWidth: number;
  _tileHeight: number;
  _mapWidth: number;
  _mapHeight: number;
  _mapData: any;
  _layerWidth: number;
  _layerHeight: number;
  _lastTiles: undefined[];
  /**
   * The bitmaps used as a tileset.
   *
   * @property bitmaps
   * @type Array
   */
  bitmaps: any[];
  /**
   * The origin point of the tilemap for scrolling.
   *
   * @property origin
   * @type Point
   */
  origin: Point;
  /**
   * The tileset flags.
   *
   * @property flags
   * @type Array
   */
  flags: any[];
  /**
   * The animation count for autotiles.
   *
   * @property animationCount
   * @type Number
   */
  animationCount: number;
  /**
   * Whether the tilemap loops horizontal.
   *
   * @property horizontalWrap
   * @type Boolean
   */
  horizontalWrap: boolean;
  /**
   * Whether the tilemap loops vertical.
   *
   * @property verticalWrap
   * @type Boolean
   */
  verticalWrap: boolean;
  /**
   * Sets the tilemap data.
   *
   * @method setData
   * @param {Number} width The width of the map in number of tiles
   * @param {Number} height The height of the map in number of tiles
   * @param {Array} data The one dimensional array for the map data
   */
  setData(width: number, height: number, data: any[]): any {
    return null;
  }
  /**
   * Checks whether the tileset is ready to render.
   *
   * @method isReady
   * @type Boolean
   * @return {Boolean} True if the tilemap is ready
   */
  isReady: boolean;
  /**
   * Updates the tilemap for each frame.
   *
   * @method update
   */
  update(): any {
    return null;
  }
  animationFrame: number;
  /**
   * Forces to repaint the entire tilemap.
   *
   * @method refresh
   */
  refresh(): any {
    return null;
  }
  /**
   * Forces to refresh the tileset
   *
   * @method refresh
   */
  refreshTileset(): any {
    return null;
  }
  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): any {
    return null;
  }
  /**
   * @method _createLayers
   * @private
   */
  _createLayers(): any {
    return null;
  }
  _lowerBitmap: Bitmap;
  _upperBitmap: Bitmap;
  _lowerLayer: Sprite;
  _upperLayer: Sprite;
  /**
   * @method _updateLayerPositions
   * @param {Number} startX
   * @param {Number} startY
   * @private
   */
  _updateLayerPositions(startX: number, startY: number): any {
    return null;
  }
  /**
   * @method _paintAllTiles
   * @param {Number} startX
   * @param {Number} startY
   * @private
   */
  _paintAllTiles(startX: number, startY: number): any {
    return null;
  }
  /**
   * @method _paintTiles
   * @param {Number} startX
   * @param {Number} startY
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  _paintTiles(startX: number, startY: number, x: number, y: number): any {
    return null;
  }
  /**
   * @method _readLastTiles
   * @param {Number} i
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  _readLastTiles(i: number, x: number, y: number): any {
    return null;
  }
  /**
   * @method _writeLastTiles
   * @param {Number} i
   * @param {Number} x
   * @param {Number} y
   * @param {Array} tiles
   * @private
   */
  _writeLastTiles(i: number, x: number, y: number, tiles: any[]): any {
    return null;
  }
  /**
   * @method _drawTile
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  _drawTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawNormalTile
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  _drawNormalTile(bitmap: Bitmap, tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawAutotile
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  _drawAutotile(bitmap: Bitmap, tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawTableEdge
   * @param {Bitmap} bitmap
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  _drawTableEdge(bitmap: Bitmap, tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawShadow
   * @param {Bitmap} bitmap
   * @param {Number} shadowBits
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  _drawShadow(bitmap: Bitmap, shadowBits: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _readMapData
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   * @return {Number}
   * @private
   */
  _readMapData(x: number, y: number, z: number): number {
    return null;
  }
  /**
   * @method _isHigherTile
   * @param {Number} tileId
   * @return {Boolean}
   * @private
   */
  _isHigherTile(tileId: number): boolean {
    return null;
  }
  /**
   * @method _isTableTile
   * @param {Number} tileId
   * @return {Boolean}
   * @private
   */
  _isTableTile(tileId: number): boolean {
    return null;
  }
  /**
   * @method _isOverpassPosition
   * @param {Number} mx
   * @param {Number} my
   * @return {Boolean}
   * @private
   */
  _isOverpassPosition(mx: number, my: number): boolean {
    return null;
  }
  /**
   * @method _sortChildren
   * @private
   */
  _sortChildren(): any {
    return null;
  }
  /**
   * @method _compareChildOrder
   * @param {Object} a
   * @param {Object} b
   * @private
   */
  _compareChildOrder(a: Object, b: Object): any {
    return null;
  }
  static TILE_ID_B: number;
  static TILE_ID_C: number;
  static TILE_ID_D: number;
  static TILE_ID_E: number;
  static TILE_ID_A5: number;
  static TILE_ID_A1: number;
  static TILE_ID_A2: number;
  static TILE_ID_A3: number;
  static TILE_ID_A4: number;
  static TILE_ID_MAX: number;
  static isVisibleTile(tileId: any): boolean {
    return null;
  }
  static isAutotile(tileId: any): boolean {
    return null;
  }
  static getAutotileKind(tileId: any): number {
    return null;
  }
  static getAutotileShape(tileId: any): number {
    return null;
  }
  static makeAutotileId(kind: any, shape: any): any {
    return null;
  }
  static isSameKindTile(tileID1: any, tileID2: any): boolean {
    return null;
  }
  static isTileA1(tileId: any): boolean {
    return null;
  }
  static isTileA2(tileId: any): boolean {
    return null;
  }
  static isTileA3(tileId: any): boolean {
    return null;
  }
  static isTileA4(tileId: any): boolean {
    return null;
  }
  static isTileA5(tileId: any): boolean {
    return null;
  }
  static isWaterTile(tileId: any): boolean {
    return null;
  }
  static isWaterfallTile(tileId: any): boolean {
    return null;
  }
  static isGroundTile(tileId: any): any {
    return null;
  }
  static isShadowingTile(tileId: any): any {
    return null;
  }
  static isRoofTile(tileId: any): boolean {
    return null;
  }
  static isWallTopTile(tileId: any): boolean {
    return null;
  }
  static isWallSideTile(tileId: any): boolean {
    return null;
  }
  static isWallTile(tileId: any): any {
    return null;
  }
  static isFloorTypeAutotile(tileId: any): any {
    return null;
  }
  static isWallTypeAutotile(tileId: any): any {
    return null;
  }
  static isWaterfallTypeAutotile(tileId: any): any {
    return null;
  }
  static FLOOR_AUTOTILE_TABLE: number[][][];
  static WALL_AUTOTILE_TABLE: number[][][];
  static WATERFALL_AUTOTILE_TABLE: number[][][];
  width: number;
  height: number;
  tileWidth: number;
  tileHeight: number;
}
export class ShaderTilemap extends Tilemap {
  constructor() {
    super();
  }
  roundPixels: boolean;
  /**
   * Uploads animation state in renderer
   *
   * @method _hackRenderer
   * @private
   */
  _hackRenderer(): any {
    return null;
  }
  /**
   * PIXI render method
   *
   * @method renderCanvas
   * @param {Object} pixi renderer
   */
  renderCanvas(pixi: Object): any {
    return null;
  }
  /**
   * PIXI render method
   *
   * @method renderWebGL
   * @param {Object} pixi renderer
   */
  renderWebGL(pixi: Object): any {
    return null;
  }
  /**
   * Forces to repaint the entire tilemap AND update bitmaps list if needed
   *
   * @method refresh
   */
  refresh(): any {
    return null;
  }
  _needsRepaint: boolean;
  /**
   * Call after you update tileset
   *
   * @method updateBitmaps
   */
  refreshTileset(): any {
    return null;
  }
  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): any {
    return null;
  }
  /**
   * @method _createLayers
   * @private
   */
  _createLayers(): any {
    return null;
  }
  /**
   * @method _updateLayerPositions
   * @param {Number} startX
   * @param {Number} startY
   * @private
   */
  _updateLayerPositions(startX: number, startY: number): any {
    return null;
  }
  /**
   * @method _paintAllTiles
   * @param {Number} startX
   * @param {Number} startY
   * @private
   */
  _paintAllTiles(startX: number, startY: number): any {
    return null;
  }
  /**
   * @method _paintTiles
   * @param {Number} startX
   * @param {Number} startY
   * @param {Number} x
   * @param {Number} y
   * @private
   */
  _paintTiles(startX: number, startY: number, x: number, y: number): any {
    return null;
  }
  /**
   * @method _drawTile
   * @param {Array} layers
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  //@ts-ignore
  _drawTile(layers: any[], tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawNormalTile
   * @param {Array} layers
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  //@ts-ignore
  _drawNormalTile(layers: any[], tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawAutotile
   * @param {Array} layers
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  //@ts-ignore
  _drawAutotile(layers: any[], tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawTableEdge
   * @param {Array} layers
   * @param {Number} tileId
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  //@ts-ignore
  _drawTableEdge(layers: any[], tileId: number, dx: number, dy: number): any {
    return null;
  }
  /**
   * @method _drawShadow
   * @param {Number} shadowBits
   * @param {Number} dx
   * @param {Number} dy
   * @private
   */
  //@ts-ignore
  _drawShadow(shadowBits: number, dx: number, dy: number): any {
    return null;
  }
}
// PIXI.extras.PictureTilingSprite
export class TilingSprite extends PIXI.Container {
  constructor(bitmap: Bitmap) {
    super();
  }
  _bitmap: any;
  _width: number;
  _height: number;
  _frame: Rectangle;
  spriteId: number;
  /**
   * The origin point of the tiling sprite for scrolling.
   *
   * @property origin
   * @type Point
   */
  origin: Point;
  _renderCanvas_PIXI: any;
  _renderWebGL_PIXI: any;
  /**
   * @method _renderCanvas
   * @param {Object} renderer
   * @private
   */
  _renderCanvas(renderer: Object): any {
    return null;
  }
  /**
   * @method _renderWebGL
   * @param {Object} renderer
   * @private
   */
  _renderWebGL(renderer: Object): any {
    return null;
  }
  /**
   * Updates the tiling sprite for each frame.
   *
   * @method update
   */
  update(): any {
    return null;
  }
  /**
   * Sets the x, y, width, and height all at once.
   *
   * @method move
   * @param {Number} x The x coordinate of the tiling sprite
   * @param {Number} y The y coordinate of the tiling sprite
   * @param {Number} width The width of the tiling sprite
   * @param {Number} height The height of the tiling sprite
   */
  move(x: number, y: number, width: number, height: number): any {
    return null;
  }
  x: any;
  y: any;
  /**
   * Specifies the region of the image that the tiling sprite will use.
   *
   * @method setFrame
   * @param {Number} x The x coordinate of the frame
   * @param {Number} y The y coordinate of the frame
   * @param {Number} width The width of the frame
   * @param {Number} height The height of the frame
   */
  setFrame(x: number, y: number, width: number, height: number): any {
    return null;
  }
  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): any {
    return null;
  }
  updateTransformTS: any;
  /**
   * @method _onBitmapLoad
   * @private
   */
  _onBitmapLoad(): any {
    return null;
  }
  /**
   * @method _refresh
   * @private
   */
  _refresh(): any {
    return null;
  }
  tilingTexture: any;
  _speedUpCustomBlendModes: any;
  bitmap: Bitmap;
  opacity: number;
}
export class ScreenSprite extends PIXI.Container {
  constructor() {
    super();
  }
  _graphics: PIXI.Graphics;
  _red: number;
  _green: number;
  _blue: number;
  _colorText: string;
  static YEPWarned: boolean;
  static warnYep(): void {}
  /**
   * Sets black to the color of the screen sprite.
   *
   * @method setBlack
   */
  setBlack(): any {
    return null;
  }
  /**
   * Sets white to the color of the screen sprite.
   *
   * @method setWhite
   */
  setWhite(): any {
    return null;
  }
  /**
   * Sets the color of the screen sprite by values.
   *
   * @method setColor
   * @param {Number} r The red value in the range (0, 255)
   * @param {Number} g The green value in the range (0, 255)
   * @param {Number} b The blue value in the range (0, 255)
   */
  setColor(r: number, g: number, b: number): any {
    return null;
  }
  opacity: number;
  anchor: {
    x: number;
    y: number;
  };
  blendMode: any;
}
export class Window extends PIXI.Container {
  constructor() {
    super();
  }
  _isWindow: boolean;
  _windowskin: any;
  _width: number;
  _height: number;
  _cursorRect: Rectangle;
  _openness: number;
  _animationCount: number;
  _padding: number;
  _margin: number;
  _colorTone: number[];
  _windowSpriteContainer: any;
  _windowBackSprite: any;
  _windowCursorSprite: any;
  _windowFrameSprite: any;
  _windowContentsSprite: any;
  _windowArrowSprites: undefined[];
  _windowPauseSignSprite: any;
  /**
   * The origin point of the window for scrolling.
   *
   * @property origin
   * @type Point
   */
  origin: Point;
  /**
   * The active state for the window.
   *
   * @property active
   * @type Boolean
   */
  active: boolean;
  /**
   * The visibility of the down scroll arrow.
   *
   * @property downArrowVisible
   * @type Boolean
   */
  downArrowVisible: boolean;
  /**
   * The visibility of the up scroll arrow.
   *
   * @property upArrowVisible
   * @type Boolean
   */
  upArrowVisible: boolean;
  /**
   * The visibility of the pause sign.
   *
   * @property pause
   * @type Boolean
   */
  pause: boolean;
  /**
   * Updates the window for each frame.
   *
   * @method update
   */
  update(): any {
    return null;
  }
  /**
   * Sets the x, y, width, and height all at once.
   *
   * @method move
   * @param {Number} x The x coordinate of the window
   * @param {Number} y The y coordinate of the window
   * @param {Number} width The width of the window
   * @param {Number} height The height of the window
   */
  move(x: number, y: number, width: number, height: number): any {
    return null;
  }
  x: any;
  y: any;
  /**
   * Returns true if the window is completely open (openness == 255).
   *
   * @method isOpen
   */
  isOpen(): any {
    return null;
  }
  /**
   * Returns true if the window is completely closed (openness == 0).
   *
   * @method isClosed
   */
  isClosed(): any {
    return null;
  }
  /**
   * Sets the position of the command cursor.
   *
   * @method setCursorRect
   * @param {Number} x The x coordinate of the cursor
   * @param {Number} y The y coordinate of the cursor
   * @param {Number} width The width of the cursor
   * @param {Number} height The height of the cursor
   */
  setCursorRect(x: number, y: number, width: number, height: number): any {
    return null;
  }
  /**
   * Changes the color of the background.
   *
   * @method setTone
   * @param {Number} r The red value in the range (-255, 255)
   * @param {Number} g The green value in the range (-255, 255)
   * @param {Number} b The blue value in the range (-255, 255)
   */
  setTone(r: number, g: number, b: number): any {
    return null;
  }
  /**
   * Adds a child between the background and contents.
   *
   * @method addChildToBack
   * @param {Object} child The child to add
   * @return {Object} The child that was added
   */
  addChildToBack(child: Object): Object {
    return null;
  }
  /**
   * @method updateTransform
   * @private
   */
  updateTransform(): any {
    return null;
  }
  /**
   * @method _createAllParts
   * @private
   */
  _createAllParts(): any {
    return null;
  }
  _downArrowSprite: Sprite;
  _upArrowSprite: Sprite;
  /**
   * @method _onWindowskinLoad
   * @private
   */
  _onWindowskinLoad(): any {
    return null;
  }
  /**
   * @method _refreshAllParts
   * @private
   */
  _refreshAllParts(): any {
    return null;
  }
  /**
   * @method _refreshBack
   * @private
   */
  _refreshBack(): any {
    return null;
  }
  /**
   * @method _refreshFrame
   * @private
   */
  _refreshFrame(): any {
    return null;
  }
  /**
   * @method _refreshCursor
   * @private
   */
  _refreshCursor(): any {
    return null;
  }
  /**
   * @method _refreshContents
   * @private
   */
  _refreshContents(): any {
    return null;
  }
  /**
   * @method _refreshArrows
   * @private
   */
  _refreshArrows(): any {
    return null;
  }
  /**
   * @method _refreshPauseSign
   * @private
   */
  _refreshPauseSign(): any {
    return null;
  }
  /**
   * @method _updateCursor
   * @private
   */
  _updateCursor(): any {
    return null;
  }
  /**
   * @method _updateContents
   * @private
   */
  _updateContents(): any {
    return null;
  }
  /**
   * @method _updateArrows
   * @private
   */
  _updateArrows(): any {
    return null;
  }
  /**
   * @method _updatePauseSign
   * @private
   */
  _updatePauseSign(): any {
    return null;
  }
  windowskin: Bitmap;
  contents: Bitmap;
  width: number;
  height: number;
  padding: number;
  margin: number;
  opacity: number;
  backOpacity: number;
  contentsOpacity: number;
  openness: number;
}
export class WindowLayer extends PIXI.Container {
  constructor() {
    super();
  }
  _width: number;
  _height: number;
  _tempCanvas: any;
  _translationMatrix: number[];
  _windowMask: PIXI.Graphics;
  _windowRect: any;
  _renderSprite: any;
  filterArea: PIXI.Rectangle;
  filters: any[];
  onRemoveAsAChild(): void {}
  static voidFilter: PIXI.filters.VoidFilter;
  /**
   * Sets the x, y, width, and height all at once.
   *
   * @method move
   * @param {Number} x The x coordinate of the window layer
   * @param {Number} y The y coordinate of the window layer
   * @param {Number} width The width of the window layer
   * @param {Number} height The height of the window layer
   */
  move(x: number, y: number, width: number, height: number): any {
    return null;
  }
  x: any;
  y: any;
  /**
   * Updates the window layer for each frame.
   *
   * @method update
   */
  update(): any {
    return null;
  }
  /**
   * @method _renderCanvas
   * @param {Object} renderSession
   * @private
   */
  renderCanvas(renderSession: Object): any {
    return null;
  }
  /**
   * @method _canvasClearWindowRect
   * @param {Object} renderSession
   * @param {Window} window
   * @private
   */
  _canvasClearWindowRect(renderSession: Object, window: Window): any {
    return null;
  }
  /**
   * @method _renderWebGL
   * @param {Object} renderSession
   * @private
   */
  renderWebGL(renderSession: Object): any {
    return null;
  }
  /**
   * @method _maskWindow
   * @param {Window} window
   * @private
   */
  _maskWindow(window: Window): any {
    return null;
  }
  width: number;
  height: number;
}
export class Weather extends PIXI.Container {
  constructor() {
    super();
  }
  _width: any;
  _height: any;
  _sprites: undefined[];
  /**
   * The type of the weather in ['none', 'rain', 'storm', 'snow'].
   *
   * @property type
   * @type String
   */
  type: string;
  /**
   * The power of the weather in the range (0, 9).
   *
   * @property power
   * @type Number
   */
  power: number;
  /**
   * The origin point of the weather for scrolling.
   *
   * @property origin
   * @type Point
   */
  origin: Point;
  /**
   * Updates the weather for each frame.
   *
   * @method update
   */
  update(): any {
    return null;
  }
  /**
   * @method _createBitmaps
   * @private
   */
  _createBitmaps(): any {
    return null;
  }
  _rainBitmap: Bitmap;
  _stormBitmap: Bitmap;
  _snowBitmap: Bitmap;
  /**
   * @method _createDimmer
   * @private
   */
  _createDimmer(): any {
    return null;
  }
  _dimmerSprite: ScreenSprite;
  /**
   * @method _updateDimmer
   * @private
   */
  _updateDimmer(): any {
    return null;
  }
  /**
   * @method _updateAllSprites
   * @private
   */
  _updateAllSprites(): any {
    return null;
  }
  /**
   * @method _addSprite
   * @private
   */
  _addSprite(): any {
    return null;
  }
  /**
   * @method _removeSprite
   * @private
   */
  _removeSprite(): any {
    return null;
  }
  /**
   * @method _updateSprite
   * @param {Sprite} sprite
   * @private
   */
  _updateSprite(sprite: Sprite): any {
    return null;
  }
  /**
   * @method _updateRainSprite
   * @param {Sprite} sprite
   * @private
   */
  _updateRainSprite(sprite: Sprite): any {
    return null;
  }
  /**
   * @method _updateStormSprite
   * @param {Sprite} sprite
   * @private
   */
  _updateStormSprite(sprite: Sprite): any {
    return null;
  }
  /**
   * @method _updateSnowSprite
   * @param {Sprite} sprite
   * @private
   */
  _updateSnowSprite(sprite: Sprite): any {
    return null;
  }
  /**
   * @method _rebornSprite
   * @param {Sprite} sprite
   * @private
   */
  _rebornSprite(sprite: Sprite): any {
    return null;
  }
}
export class ToneFilter extends PIXI.filters.ColorMatrixFilter {
  constructor() {
    super();
  }
  /**
   * Changes the hue.
   *
   * @method adjustHue
   * @param {Number} value The hue value in the range (-360, 360)
   */
  adjustHue(value: number): any {
    return null;
  }
  /**
   * Changes the saturation.
   *
   * @method adjustSaturation
   * @param {Number} value The saturation value in the range (-255, 255)
   */
  adjustSaturation(value: number): any {
    return null;
  }
  /**
   * Changes the tone.
   *
   * @method adjustTone
   * @param {Number} r The red strength in the range (-255, 255)
   * @param {Number} g The green strength in the range (-255, 255)
   * @param {Number} b The blue strength in the range (-255, 255)
   */
  adjustTone(r: number, g: number, b: number): any {
    return null;
  }
}
export class ToneSprite extends PIXI.Container {
  constructor() {
    super();
  }
  /**
   * Clears the tone.
   *
   * @method reset
   */
  clear(): any {
    return null;
  }
  _red: number;
  _green: number;
  _blue: number;
  _gray: number;
  /**
   * Sets the tone.
   *
   * @method setTone
   * @param {Number} r The red strength in the range (-255, 255)
   * @param {Number} g The green strength in the range (-255, 255)
   * @param {Number} b The blue strength in the range (-255, 255)
   * @param {Number} gray The grayscale level in the range (0, 255)
   */
  setTone(r: number, g: number, b: number, gray: number): any {
    return null;
  }
  /**
   * @method _renderCanvas
   * @param {Object} renderSession
   * @private
   */
  _renderCanvas(renderSession: Object): any {
    return null;
  }
  /**
   * @method _renderWebGL
   * @param {Object} renderSession
   * @private
   */
  _renderWebGL(renderSession: Object): any {
    return null;
  }
}
export class Stage extends PIXI.Container {
  constructor() {
    super();
  }
  interactive: boolean;
}
export class WebAudio {
  constructor(url: string) {}
  static _standAlone: boolean;
  _url: any;
  static _masterVolume: number;
  static _context: any;
  static _masterGainNode: any;
  static _initialized: boolean;
  static _unlocked: boolean;
  /**
   * Initializes the audio system.
   *
   * @static
   * @method initialize
   * @param {Boolean} noAudio Flag for the no-audio mode
   * @return {Boolean} True if the audio system is available
   */
  static initialize(noAudio: boolean): boolean {
    return null;
  }
  /**
   * Checks whether the browser can play ogg files.
   *
   * @static
   * @method canPlayOgg
   * @return {Boolean} True if the browser can play ogg files
   */
  static canPlayOgg(): boolean {
    return null;
  }
  /**
   * Checks whether the browser can play m4a files.
   *
   * @static
   * @method canPlayM4a
   * @return {Boolean} True if the browser can play m4a files
   */
  static canPlayM4a(): boolean {
    return null;
  }
  /**
   * Sets the master volume of the all audio.
   *
   * @static
   * @method setMasterVolume
   * @param {Number} value Master volume (min: 0, max: 1)
   */
  static setMasterVolume(value: number): any {
    return null;
  }
  /**
   * @static
   * @method _createContext
   * @private
   */
  static _createContext(): any {
    return null;
  }
  /**
   * @static
   * @method _detectCodecs
   * @private
   */
  static _detectCodecs(): any {
    return null;
  }
  /**
   * @static
   * @method _createMasterGainNode
   * @private
   */
  static _createMasterGainNode(): any {
    return null;
  }
  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  static _setupEventHandlers(): any {
    return null;
  }
  /**
   * @static
   * @method _onTouchStart
   * @private
   */
  static _onTouchStart(): any {
    return null;
  }
  /**
   * @static
   * @method _onVisibilityChange
   * @private
   */
  static _onVisibilityChange(): any {
    return null;
  }
  /**
   * @static
   * @method _onHide
   * @private
   */
  static _onHide(): any {
    return null;
  }
  /**
   * @static
   * @method _onShow
   * @private
   */
  static _onShow(): any {
    return null;
  }
  /**
   * @static
   * @method _shouldMuteOnHide
   * @private
   */
  static _shouldMuteOnHide(): any {
    return null;
  }
  /**
   * @static
   * @method _fadeIn
   * @param {Number} duration
   * @private
   */
  static _fadeIn(duration: number): any {
    return null;
  }
  /**
   * @static
   * @method _fadeOut
   * @param {Number} duration
   * @private
   */
  static _fadeOut(duration: number): any {
    return null;
  }
  /**
   * Clears the audio data.
   *
   * @method clear
   */
  clear(): any {
    return null;
  }
  _buffer: any;
  _sourceNode: any;
  _gainNode: any;
  _pannerNode: any;
  _totalTime: number;
  _sampleRate: number;
  _loopStart: number;
  _loopLength: number;
  _startTime: number;
  _volume: number;
  _pitch: number;
  _pan: number;
  _endTimer: any;
  _loadListeners: undefined[];
  _stopListeners: undefined[];
  _hasError: boolean;
  _autoPlay: boolean;
  /**
   * Checks whether the audio data is ready to play.
   *
   * @method isReady
   * @return {Boolean} True if the audio data is ready to play
   */
  isReady(): boolean {
    return null;
  }
  /**
   * Checks whether a loading error has occurred.
   *
   * @method isError
   * @return {Boolean} True if a loading error has occurred
   */
  isError(): boolean {
    return null;
  }
  /**
   * Checks whether the audio is playing.
   *
   * @method isPlaying
   * @return {Boolean} True if the audio is playing
   */
  isPlaying(): boolean {
    return null;
  }
  /**
   * Plays the audio.
   *
   * @method play
   * @param {Boolean} loop Whether the audio data play in a loop
   * @param {Number} offset The start position to play in seconds
   */
  play(loop: boolean, offset: number): any {
    return null;
  }
  /**
   * Stops the audio.
   *
   * @method stop
   */
  stop(): any {
    return null;
  }
  /**
   * Performs the audio fade-in.
   *
   * @method fadeIn
   * @param {Number} duration Fade-in time in seconds
   */
  fadeIn(duration: number): any {
    return null;
  }
  /**
   * Performs the audio fade-out.
   *
   * @method fadeOut
   * @param {Number} duration Fade-out time in seconds
   */
  fadeOut(duration: number): any {
    return null;
  }
  /**
   * Gets the seek position of the audio.
   *
   * @method seek
   */
  seek(): any {
    return null;
  }
  /**
   * Add a callback function that will be called when the audio data is loaded.
   *
   * @method addLoadListener
   * @param {Function} listner The callback function
   */
  addLoadListener(listner: (bitmap: Bitmap) => void): any {
    return null;
  }
  /**
   * Add a callback function that will be called when the playback is stopped.
   *
   * @method addStopListener
   * @param {Function} listner The callback function
   */
  addStopListener(listner: Function): any {
    return null;
  }
  /**
   * @method _load
   * @param {String} url
   * @private
   */
  _load(url: string): any {
    return null;
  }
  /**
   * @method _onXhrLoad
   * @param {XMLHttpRequest} xhr
   * @private
   */
  _onXhrLoad(xhr: XMLHttpRequest): any {
    return null;
  }
  /**
   * @method _startPlaying
   * @param {Boolean} loop
   * @param {Number} offset
   * @private
   */
  _startPlaying(loop: boolean, offset: number): any {
    return null;
  }
  /**
   * @method _createNodes
   * @private
   */
  _createNodes(): any {
    return null;
  }
  /**
   * @method _connectNodes
   * @private
   */
  _connectNodes(): any {
    return null;
  }
  /**
   * @method _removeNodes
   * @private
   */
  _removeNodes(): any {
    return null;
  }
  /**
   * @method _createEndTimer
   * @private
   */
  _createEndTimer(): any {
    return null;
  }
  /**
   * @method _removeEndTimer
   * @private
   */
  _removeEndTimer(): any {
    return null;
  }
  /**
   * @method _updatePanner
   * @private
   */
  _updatePanner(): any {
    return null;
  }
  /**
   * @method _onLoad
   * @private
   */
  _onLoad(): any {
    return null;
  }
  /**
   * @method _readLoopComments
   * @param {Uint8Array} array
   * @private
   */
  _readLoopComments(array: Uint8Array): any {
    return null;
  }
  /**
   * @method _readOgg
   * @param {Uint8Array} array
   * @private
   */
  _readOgg(array: Uint8Array): any {
    return null;
  }
  /**
   * @method _readMp4
   * @param {Uint8Array} array
   * @private
   */
  _readMp4(array: Uint8Array): any {
    return null;
  }
  /**
   * @method _readMetaData
   * @param {Uint8Array} array
   * @param {Number} index
   * @param {Number} size
   * @private
   */
  _readMetaData(array: Uint8Array, index: number, size: number): any {
    return null;
  }
  /**
   * @method _readLittleEndian
   * @param {Uint8Array} array
   * @param {Number} index
   * @private
   */
  _readLittleEndian(array: Uint8Array, index: number): any {
    return null;
  }
  /**
   * @method _readBigEndian
   * @param {Uint8Array} array
   * @param {Number} index
   * @private
   */
  _readBigEndian(array: Uint8Array, index: number): any {
    return null;
  }
  /**
   * @method _readFourCharacters
   * @param {Uint8Array} array
   * @param {Number} index
   * @private
   */
  _readFourCharacters(array: Uint8Array, index: number): any {
    return null;
  }
  readonly url: string;
  volume: number;
  pitch: number;
  pan: number;
}
export class Html5Audio {
  constructor() {}
  static _initialized: boolean;
  static _unlocked: boolean;
  static _audioElement: any;
  static _gainTweenInterval: any;
  static _tweenGain: number;
  static _tweenTargetGain: number;
  static _tweenGainStep: number;
  static _staticSePath: any;
  /**
   * Sets up the Html5 Audio.
   *
   * @static
   * @method setup
   * @param {String} url The url of the audio file
   */
  static setup(url: string): any {
    return null;
  }
  static _url: any;
  /**
   * Initializes the audio system.
   *
   * @static
   * @method initialize
   * @return {Boolean} True if the audio system is available
   */
  static initialize(): boolean {
    return null;
  }
  /**
   * @static
   * @method _setupEventHandlers
   * @private
   */
  static _setupEventHandlers(): any {
    return null;
  }
  /**
   * @static
   * @method _onTouchStart
   * @private
   */
  static _onTouchStart(): any {
    return null;
  }
  /**
   * @static
   * @method _onVisibilityChange
   * @private
   */
  static _onVisibilityChange(): any {
    return null;
  }
  /**
   * @static
   * @method _onLoadedData
   * @private
   */
  static _onLoadedData(): any {
    return null;
  }
  static _buffered: boolean;
  /**
   * @static
   * @method _onError
   * @private
   */
  static _onError(): any {
    return null;
  }
  static _hasError: boolean;
  /**
   * @static
   * @method _onEnded
   * @private
   */
  static _onEnded(): any {
    return null;
  }
  /**
   * @static
   * @method _onHide
   * @private
   */
  static _onHide(): any {
    return null;
  }
  /**
   * @static
   * @method _onShow
   * @private
   */
  static _onShow(): any {
    return null;
  }
  /**
   * Clears the audio data.
   *
   * @static
   * @method clear
   */
  static clear(): any {
    return null;
  }
  static _volume: number;
  static _loadListeners: undefined[];
  static _autoPlay: boolean;
  static _isLoading: boolean;
  /**
   * Set the URL of static se.
   *
   * @static
   * @param {String} url
   */
  static setStaticSe(url: string): any {
    return null;
  }
  /**
   * Checks whether the audio data is ready to play.
   *
   * @static
   * @method isReady
   * @return {Boolean} True if the audio data is ready to play
   */
  static isReady(): boolean {
    return null;
  }
  /**
   * Checks whether a loading error has occurred.
   *
   * @static
   * @method isError
   * @return {Boolean} True if a loading error has occurred
   */
  static isError(): boolean {
    return null;
  }
  /**
   * Checks whether the audio is playing.
   *
   * @static
   * @method isPlaying
   * @return {Boolean} True if the audio is playing
   */
  static isPlaying(): boolean {
    return null;
  }
  /**
   * Plays the audio.
   *
   * @static
   * @method play
   * @param {Boolean} loop Whether the audio data play in a loop
   * @param {Number} offset The start position to play in seconds
   */
  static play(loop: boolean, offset: number): any {
    return null;
  }
  /**
   * Stops the audio.
   *
   * @static
   * @method stop
   */
  static stop(): any {
    return null;
  }
  /**
   * Performs the audio fade-in.
   *
   * @static
   * @method fadeIn
   * @param {Number} duration Fade-in time in seconds
   */
  static fadeIn(duration: number): any {
    return null;
  }
  /**
   * Performs the audio fade-out.
   *
   * @static
   * @method fadeOut
   * @param {Number} duration Fade-out time in seconds
   */
  static fadeOut(duration: number): any {
    return null;
  }
  /**
   * Gets the seek position of the audio.
   *
   * @static
   * @method seek
   */
  static seek(): any {
    return null;
  }
  /**
   * Add a callback function that will be called when the audio data is loaded.
   *
   * @static
   * @method addLoadListener
   * @param {Function} listner The callback function
   */
  static addLoadListener(listner: Function): any {
    return null;
  }
  /**
   * @static
   * @method _load
   * @param {String} url
   * @private
   */
  static _load(url: string): any {
    return null;
  }
  /**
   * @static
   * @method _startPlaying
   * @param {Boolean} loop
   * @param {Number} offset
   * @private
   */
  static _startPlaying(loop: boolean, offset: number): any {
    return null;
  }
  /**
   * @static
   * @method _onLoad
   * @private
   */
  static _onLoad(): any {
    return null;
  }
  /**
   * @static
   * @method _startGainTween
   * @params {Number} duration
   * @private
   */
  static _startGainTween(): any {
    return null;
  }
  /**
   * @static
   * @method _applyTweenValue
   * @param {Number} volume
   * @private
   */
  static _applyTweenValue(volume: number): any {
    return null;
  }
  volume: number;
  static readonly url: string;
  static volume: number;
}
export class JsonEx {
  constructor() {}
  /**
   * The maximum depth of objects.
   *
   * @static
   * @property maxDepth
   * @type Number
   * @default 100
   */
  static maxDepth: number;
  static _id: number;
  static _generateId(): number {
    return null;
  }
  /**
   * Converts an object to a JSON string with object information.
   *
   * @static
   * @method stringify
   * @param {Object} object The object to be converted
   * @return {String} The JSON string
   */
  static stringify(object: Object): string {
    return null;
  }
  static _restoreCircularReference(circulars: any): void {}
  /**
   * Parses a JSON string and reconstructs the corresponding object.
   *
   * @static
   * @method parse
   * @param {String} json The JSON string
   * @return {Object} The reconstructed object
   */
  static parse(json: string): Object {
    return null;
  }
  static _linkCircularReference(contents: any, circulars: any, registry: any): void {}
  static _cleanMetadata(object: any): void {}
  /**
   * Makes a deep copy of the specified object.
   *
   * @static
   * @method makeDeepCopy
   * @param {Object} object The object to be copied
   * @return {Object} The copied object
   */
  static makeDeepCopy(object: Object): Object {
    return null;
  }
  /**
   * @static
   * @method _encode
   * @param {Object} value
   * @param {Array} circular
   * @param {Number} depth
   * @return {Object}
   * @private
   */
  static _encode(value: Object, circular: any[], depth: number): Object {
    return null;
  }
  /**
   * @static
   * @method _decode
   * @param {Object} value
   * @param {Array} circular
   * @param {Object} registry
   * @return {Object}
   * @private
   */
  static _decode(value: Object, circular: any[], registry: Object): Object {
    return null;
  }
  /**
   * @static
   * @method _getConstructorName
   * @param {Object} value
   * @return {String}
   * @private
   */
  static _getConstructorName(value: Object): string {
    return null;
  }
  /**
   * @static
   * @method _resetPrototype
   * @param {Object} value
   * @param {Object} prototype
   * @return {Object}
   * @private
   */
  static _resetPrototype(value: Object, prototype: Object): Object {
    return null;
  }
}
export class Decrypter {
  constructor() {}
  static hasEncryptedImages: boolean;
  static hasEncryptedAudio: boolean;
  static _requestImgFile: undefined[];
  static _headerlength: number;
  static _xhrOk: number;
  static _encryptionKey: string;
  static _ignoreList: string[];
  static SIGNATURE: string;
  static VER: string;
  static REMAIN: string;
  static checkImgIgnore(url: any): boolean {
    return null;
  }
  static decryptImg(url: any, bitmap: any): void {}
  static decryptHTML5Audio(url: any, bgm: any, pos: any): void {}
  static cutArrayHeader(arrayBuffer: any, length: any): any {
    return null;
  }
  static decryptArrayBuffer(arrayBuffer: any): any {
    return null;
  }
  static createBlobUrl(arrayBuffer: any): any {
    return null;
  }
  static extToEncryptExt(url: any): any {
    return null;
  }
  static readEncryptionkey(): void {}
}
export class ResourceHandler {
  constructor() {}
  static _reloaders: undefined[];
  static _defaultRetryInterval: number[];
  static createLoader(url: any, retryMethod: any, resignMethod: any, retryInterval: any) {}
}
