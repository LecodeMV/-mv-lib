import {
  Bitmap,
  ScreenSprite,
  ToneFilter,
  ToneSprite,
  TilingSprite,
  Weather,
  Sprite
} from './rpg_core';

export class Sprite_Base extends Sprite {
  constructor() {
    super();
  }
  _animationSprites: Sprite[];
  _effectTarget: any;
  _hiding: boolean;
  update(): void {}
  hide(): void {}
  show(): void {}
  updateVisibility(): void {}
  visible: boolean;
  updateAnimationSprites(): void {}
  startAnimation(animation: any, mirror: any, delay: any): void {}
  isAnimationPlaying(): boolean {
    return null;
  }
}
export class Sprite_Button extends Sprite {
  constructor() {
    super();
  }
  _touching: boolean;
  _coldFrame: any;
  _hotFrame: any;
  _clickHandler: any;
  update(): void {}
  updateFrame(): void {}
  setColdFrame(x: any, y: any, width: any, height: any): void {}
  setHotFrame(x: any, y: any, width: any, height: any): void {}
  setClickHandler(method: any): void {}
  callClickHandler(): void {}
  processTouch(): void {}
  isActive(): boolean {
    return null;
  }
  isButtonTouched(): boolean {
    return null;
  }
  canvasToLocalX(x: any): any {
    return null;
  }
  canvasToLocalY(y: any): any {
    return null;
  }
}
export class Sprite_Character extends Sprite_Base {
  constructor(character: any) {
    super();
  }
  initMembers(): void {}
  _character: any;
  _balloonDuration: number;
  _tilesetId: number;
  _upperBody: any;
  _lowerBody: any;
  setCharacter(character: any): void {}
  update(): void {}
  updateVisibility(): void {}
  isTile(): boolean {
    return null;
  }
  tilesetBitmap(tileId: any): any {
    return null;
  }
  updateBitmap(): void {}
  isImageChanged(): boolean {
    return null;
  }
  setTileBitmap(): void {}
  bitmap: any;
  setCharacterBitmap(): void {}
  _isBigCharacter: any;
  updateFrame(): void {}
  updateTileFrame(): void {}
  updateCharacterFrame(): void {}
  characterBlockX(): number {
    return null;
  }
  characterBlockY(): number {
    return null;
  }
  characterPatternX(): any {
    return null;
  }
  characterPatternY(): number {
    return null;
  }
  patternWidth(): any {
    return null;
  }
  patternHeight(): any {
    return null;
  }
  updateHalfBodySprites(): void {}
  createHalfBodySprites(): void {}
  updatePosition(): void {}
  x: any;
  y: any;
  z: any;
  updateAnimation(): void {}
  updateOther(): void {}
  opacity: any;
  blendMode: any;
  _bushDepth: any;
  setupAnimation(): void {}
  setupBalloon(): void {}
  startBalloon(): void {}
  updateBalloon(): void {}
  endBalloon(): void {}
  isBalloonPlaying(): boolean {
    return null;
  }
}
export class Sprite_Battler extends Sprite_Base {
  constructor(battler: any) {
    super();
  }
  initMembers(): void {}
  _battler: any;
  _damages: undefined[];
  _homeX: number;
  _homeY: number;
  _offsetX: number;
  _offsetY: number;
  _targetOffsetX: number;
  _targetOffsetY: number;
  _movementDuration: number;
  _selectionEffectCount: number;
  setBattler(battler: any): void {}
  setHome(x: any, y: any): void {}
  update(): void {}
  updateVisibility(): void {}
  updateMain(): void {}
  updateBitmap(): void {}
  updateFrame(): void {}
  updateMove(): void {}
  updatePosition(): void {}
  x: any;
  y: any;
  updateAnimation(): void {}
  updateDamagePopup(): void {}
  updateSelectionEffect(): void {}
  setupAnimation(): void {}
  setupDamagePopup(): void {}
  damageOffsetX(): number {
    return null;
  }
  damageOffsetY(): number {
    return null;
  }
  startMove(x: any, y: any, duration: any): void {}
  onMoveEnd(): void {}
  isEffecting(): boolean {
    return null;
  }
  isMoving(): boolean {
    return null;
  }
  inHomePosition(): boolean {
    return null;
  }
}
export class Sprite_Actor extends Sprite_Battler {
  constructor(battler: any) {
    super(battler);
  }
  static MOTIONS: {
    walk: {
      index: number;
      loop: boolean;
    };
    wait: {
      index: number;
      loop: boolean;
    };
    chant: {
      index: number;
      loop: boolean;
    };
    guard: {
      index: number;
      loop: boolean;
    };
    damage: {
      index: number;
      loop: boolean;
    };
    evade: {
      index: number;
      loop: boolean;
    };
    thrust: {
      index: number;
      loop: boolean;
    };
    swing: {
      index: number;
      loop: boolean;
    };
    missile: {
      index: number;
      loop: boolean;
    };
    skill: {
      index: number;
      loop: boolean;
    };
    spell: {
      index: number;
      loop: boolean;
    };
    item: {
      index: number;
      loop: boolean;
    };
    escape: {
      index: number;
      loop: boolean;
    };
    victory: {
      index: number;
      loop: boolean;
    };
    dying: {
      index: number;
      loop: boolean;
    };
    abnormal: {
      index: number;
      loop: boolean;
    };
    sleep: {
      index: number;
      loop: boolean;
    };
    dead: {
      index: number;
      loop: boolean;
    };
  };
  initMembers(): void {}
  _battlerName: string;
  _motion: any;
  _motionCount: number;
  _pattern: number;
  createMainSprite(): void {}
  _mainSprite: Sprite_Base;
  _effectTarget: any;
  createShadowSprite(): void {}
  _shadowSprite: Sprite;
  createWeaponSprite(): void {}
  _weaponSprite: Sprite_Weapon;
  createStateSprite(): void {}
  _stateSprite: Sprite_StateOverlay;
  setBattler(battler: any): void {}
  moveToStartPosition(): void {}
  setActorHome(index: any): void {}
  update(): void {}
  updateShadow(): void {}
  updateMain(): void {}
  setupMotion(): void {}
  setupWeaponAnimation(): void {}
  startMotion(motionType: any): void {}
  updateTargetPosition(): void {}
  updateBitmap(): void {}
  updateFrame(): void {}
  updateMove(): void {}
  updateMotion(): void {}
  updateMotionCount(): void {}
  motionSpeed(): number {
    return null;
  }
  refreshMotion(): void {}
  startEntryMotion(): void {}
  stepForward(): void {}
  stepBack(): void {}
  retreat(): void {}
  onMoveEnd(): void {}
  damageOffsetX(): number {
    return null;
  }
  damageOffsetY(): number {
    return null;
  }
}
export class Sprite_Enemy extends Sprite_Battler {
  constructor(battler: any) {
    super(battler);
  }
  initMembers(): void {}
  _enemy: any;
  _appeared: boolean;
  _battlerName: string;
  _battlerHue: number;
  _effectType: any;
  _effectDuration: number;
  _shake: number;
  createStateIconSprite(): void {}
  _stateIconSprite: Sprite_StateIcon;
  setBattler(battler: any): void {}
  update(): void {}
  updateBitmap(): void {}
  loadBitmap(name: any, hue: any): void {}
  updateFrame(): void {}
  updatePosition(): void {}
  updateStateSprite(): void {}
  initVisibility(): void {}
  setupEffect(): void {}
  startEffect(effectType: any): void {}
  startAppear(): void {}
  startDisappear(): void {}
  startWhiten(): void {}
  startBlink(): void {}
  startCollapse(): void {}
  startBossCollapse(): void {}
  startInstantCollapse(): void {}
  updateEffect(): void {}
  isEffecting(): boolean {
    return null;
  }
  revertToNormal(): void {}
  blendMode: number;
  opacity: number;
  updateWhiten(): void {}
  updateBlink(): void {}
  updateAppear(): void {}
  updateDisappear(): void {}
  updateCollapse(): void {}
  updateBossCollapse(): void {}
  updateInstantCollapse(): void {}
  damageOffsetX(): number {
    return null;
  }
  damageOffsetY(): number {
    return null;
  }
}
export class Sprite_Animation extends Sprite {
  constructor() {
    super();
  }
  static _checker1: {};
  static _checker2: {};
  _reduceArtifacts: boolean;
  initMembers(): void {}
  _target: any;
  _animation: any;
  _mirror: boolean;
  _delay: number;
  _rate: number;
  _duration: number;
  _flashColor: number[];
  _flashDuration: number;
  _screenFlashDuration: number;
  _hidingDuration: number;
  _bitmap1: any;
  _bitmap2: any;
  _cellSprites: undefined[];
  _screenFlashSprite: any;
  _duplicated: boolean;
  z: number;
  setup(target: any, animation: any, mirror: any, delay: any): void {}
  remove(): void {}
  setupRate(): void {}
  setupDuration(): void {}
  update(): void {}
  updateFlash(): void {}
  updateScreenFlash(): void {}
  absoluteX(): number {
    return null;
  }
  absoluteY(): number {
    return null;
  }
  updateHiding(): void {}
  isPlaying(): boolean {
    return null;
  }
  loadBitmaps(): void {}
  isReady(): any {
    return null;
  }
  createSprites(): void {}
  createCellSprites(): void {}
  createScreenFlashSprite(): void {}
  updateMain(): void {}
  updatePosition(): void {}
  updateFrame(): void {}
  currentFrameIndex(): number {
    return null;
  }
  updateAllCellSprites(frame: any): void {}
  updateCellSprite(sprite: any, cell: any): void {}
  processTimingData(timing: any): void {}
  startFlash(color: any, duration: any): void {}
  startScreenFlash(color: any, duration: any): void {}
  startHiding(duration: any): void {}
}
export class Sprite_Damage extends Sprite {
  constructor() {
    super();
  }
  _duration: number;
  _flashColor: number[];
  _flashDuration: number;
  _damageBitmap: any;
  setup(target: any): void {}
  setupCriticalEffect(): void {}
  digitWidth(): number {
    return null;
  }
  digitHeight(): number {
    return null;
  }
  createMiss(): void {}
  createDigits(baseRow: any, value: any): void {}
  createChildSprite(): any {
    return null;
  }
  update(): void {}
  updateChild(sprite: any): void {}
  updateFlash(): void {}
  updateOpacity(): void {}
  isPlaying(): boolean {
    return null;
  }
}
export class Sprite_StateIcon extends Sprite {
  constructor() {
    super();
  }
  static _iconWidth: number;
  static _iconHeight: number;
  initMembers(): void {}
  _battler: any;
  _iconIndex: number;
  _animationCount: number;
  _animationIndex: number;
  loadBitmap(): void {}
  bitmap: any;
  setup(battler: any): void {}
  update(): void {}
  animationWait(): number {
    return null;
  }
  updateIcon(): void {}
  updateFrame(): void {}
}
export class Sprite_StateOverlay extends Sprite_Base {
  constructor() {
    super();
  }
  initMembers(): void {}
  _battler: any;
  _overlayIndex: number;
  _animationCount: number;
  _pattern: number;
  loadBitmap(): void {}
  bitmap: any;
  setup(battler: any): void {}
  update(): void {}
  animationWait(): number {
    return null;
  }
  updatePattern(): void {}
  updateFrame(): void {}
}
export class Sprite_Weapon extends Sprite_Base {
  constructor() {
    super();
  }
  initMembers(): void {}
  _weaponImageId: number;
  _animationCount: number;
  _pattern: number;
  x: number;
  setup(weaponImageId: any): void {}
  update(): void {}
  animationWait(): number {
    return null;
  }
  updatePattern(): void {}
  loadBitmap(): void {}
  updateFrame(): void {}
  isPlaying(): boolean {
    return null;
  }
}
export class Sprite_Balloon extends Sprite_Base {
  constructor() {
    super();
  }
  initMembers(): void {}
  _balloonId: number;
  _duration: number;
  z: number;
  loadBitmap(): void {}
  bitmap: any;
  setup(balloonId: any): void {}
  update(): void {}
  updateFrame(): void {}
  speed(): number {
    return null;
  }
  waitTime(): number {
    return null;
  }
  frameIndex(): number {
    return null;
  }
  isPlaying(): boolean {
    return null;
  }
}
export class Sprite_Picture extends Sprite {
  constructor(pictureId: any) {
    super();
  }
  _pictureId: any;
  _pictureName: string;
  _isPicture: boolean;
  picture(): any {
    return null;
  }
  update(): void {}
  updateBitmap(): void {}
  updateOrigin(): void {}
  updatePosition(): void {}
  x: number;
  y: number;
  updateScale(): void {}
  updateTone(): void {}
  updateOther(): void {}
  opacity: any;
  blendMode: any;
  rotation: number;
  loadBitmap(): void {}
  bitmap: any;
}
export class Sprite_Timer extends Sprite {
  constructor() {
    super();
  }
  _seconds: number;
  createBitmap(): void {}
  bitmap: Bitmap;
  update(): void {}
  updateBitmap(): void {}
  redraw(): void {}
  timerText(): string {
    return null;
  }
  updatePosition(): void {}
  x: number;
  y: number;
  updateVisibility(): void {}
  visible: any;
}
export class Sprite_Destination extends Sprite {
  constructor() {
    super();
  }
  _frameCount: number;
  update(): void {}
  createBitmap(): void {}
  bitmap: Bitmap;
  blendMode: any;
  updatePosition(): void {}
  x: number;
  y: number;
  updateAnimation(): void {}
  opacity: number;
}
export class Spriteset_Base extends Sprite {
  constructor() {
    super();
  }
  _tone: number[];
  opaque: boolean;
  createLowerLayer(): void {}
  createUpperLayer(): void {}
  update(): void {}
  createBaseSprite(): void {}
  _baseSprite: Sprite;
  _blackScreen: ScreenSprite;
  createToneChanger(): void {}
  createWebGLToneChanger(): void {}
  _toneFilter: ToneFilter;
  createCanvasToneChanger(): void {}
  _toneSprite: ToneSprite;
  createPictures(): void {}
  _pictureContainer: Sprite;
  createTimer(): void {}
  _timerSprite: Sprite_Timer;
  createScreenSprites(): void {}
  _flashSprite: ScreenSprite;
  _fadeSprite: ScreenSprite;
  updateScreenSprites(): void {}
  updateToneChanger(): void {}
  updateWebGLToneChanger(): void {}
  updateCanvasToneChanger(): void {}
  updatePosition(): void {}
  x: number;
  y: number;
}
export class Spriteset_Map extends Spriteset_Base {
  constructor() {
    super();
  }
  createLowerLayer(): void {}
  update(): void {}
  hideCharacters(): void {}
  createParallax(): void {}
  _parallax: TilingSprite;
  createTilemap(): void {}
  loadTileset(): void {}
  _tileset: any;
  createCharacters(): void {}
  _characterSprites: undefined[];
  createShadow(): void {}
  _shadowSprite: Sprite;
  createDestination(): void {}
  _destinationSprite: Sprite_Destination;
  createWeather(): void {}
  _weather: Weather;
  updateTileset(): void {}
  _canvasReAddParallax(): void {}
  updateParallax(): void {}
  updateTilemap(): void {}
  updateShadow(): void {}
  updateWeather(): void {}
}
export class Spriteset_Battle extends Spriteset_Base {
  constructor() {
    super();
  }
  _battlebackLocated: boolean;
  createLowerLayer(): void {}
  createBackground(): void {}
  _backgroundSprite: Sprite;
  update(): void {}
  createBattleField(): void {}
  _battleField: Sprite;
  createBattleback(): void {}
  _back1Sprite: TilingSprite;
  _back2Sprite: TilingSprite;
  updateBattleback(): void {}
  locateBattleback(): void {}
  battleback1Bitmap(): any {
    return null;
  }
  battleback2Bitmap(): any {
    return null;
  }
  battleback1Name(): any {
    return null;
  }
  battleback2Name(): any {
    return null;
  }
  overworldBattleback1Name(): any {
    return null;
  }
  overworldBattleback2Name(): any {
    return null;
  }
  normalBattleback1Name(): any {
    return null;
  }
  normalBattleback2Name(): any {
    return null;
  }
  terrainBattleback1Name(
    type: any
  ):
    | 'Wasteland'
    | 'DirtField'
    | 'Desert'
    | 'Lava1'
    | 'Lava2'
    | 'Snowfield'
    | 'Clouds'
    | 'PoisonSwamp' {
    return null;
  }
  terrainBattleback2Name(
    type: any
  ): 'Wasteland' | 'Desert' | 'Snowfield' | 'Clouds' | 'PoisonSwamp' | 'Forest' | 'Cliff' | 'Lava' {
    return null;
  }
  defaultBattleback1Name(): string {
    return null;
  }
  defaultBattleback2Name(): string {
    return null;
  }
  shipBattleback1Name(): string {
    return null;
  }
  shipBattleback2Name(): string {
    return null;
  }
  autotileType(z: any): any {
    return null;
  }
  createEnemies(): void {}
  _enemySprites: any[];
  compareEnemySprite(a: any, b: any): number {
    return null;
  }
  createActors(): void {}
  _actorSprites: undefined[];
  updateActors(): void {}
  battlerSprites(): any {
    return null;
  }
  isAnimationPlaying(): any {
    return null;
  }
  isEffecting(): any {
    return null;
  }
  isAnyoneMoving(): any {
    return null;
  }
  isBusy(): any {
    return null;
  }
}
