import { Stage, WindowLayer, Sprite } from './rpg_core';

import {
  Window_TitleCommand,
  Window_MapName,
  Window_Message,
  Window_ScrollText,
  Window_Help,
  Window_MenuCommand,
  Window_Gold,
  Window_MenuStatus,
  Window_MenuActor,
  Window_ItemCategory,
  Window_ItemList,
  Window_SkillType,
  Window_SkillStatus,
  Window_SkillList,
  Window_EquipStatus,
  Window_EquipCommand,
  Window_EquipSlot,
  Window_EquipItem,
  Window_Status,
  Window_Options,
  Window_SavefileList,
  Window_GameEnd,
  Window_ShopCommand,
  Window_Base,
  Window_ShopNumber,
  Window_ShopStatus,
  Window_ShopBuy,
  Window_ShopSell,
  Window_NameEdit,
  Window_NameInput,
  Window_DebugRange,
  Window_DebugEdit,
  Window_BattleLog,
  Window_BattleStatus,
  Window_PartyCommand,
  Window_ActorCommand,
  Window_BattleSkill,
  Window_BattleItem,
  Window_BattleActor,
  Window_BattleEnemy
} from './rpg_windows';

import { Spriteset_Map, Spriteset_Battle } from './rpg_sprites';

export class Scene_Base extends Stage {
  constructor() {
    super();
  }
  _active: boolean;
  _fadeSign: number;
  _fadeDuration: number;
  _fadeSprite: any;
  _imageReservationId: any;
  /**
   * Attach a reservation to the reserve queue.
   *
   * @method attachReservation
   * @instance
   * @memberof Scene_Base
   */
  attachReservation(): any {
    return null;
  }
  /**
   * Remove the reservation from the Reserve queue.
   *
   * @method detachReservation
   * @instance
   * @memberof Scene_Base
   */
  detachReservation(): any {
    return null;
  }
  /**
   * Create the components and add them to the rendering process.
   *
   * @method create
   * @instance
   * @memberof Scene_Base
   */
  create(): any {
    return null;
  }
  /**
   * Returns whether the scene is active or not.
   *
   * @method isActive
   * @instance
   * @memberof Scene_Base
   * @return {Boolean} return true if the scene is active
   */
  isActive(): boolean {
    return null;
  }
  /**
   * Return whether the scene is ready to start or not.
   *
   * @method isReady
   * @instance
   * @memberof Scene_Base
   * @return {Boolean} Return true if the scene is ready to start
   */
  isReady(): boolean {
    return null;
  }
  /**
   * Start the scene processing.
   *
   * @method start
   * @instance
   * @memberof Scene_Base
   */
  start(): any {
    return null;
  }
  /**
   * Update the scene processing each new frame.
   *
   * @method update
   * @instance
   * @memberof Scene_Base
   */
  update(): any {
    return null;
  }
  /**
   * Stop the scene processing.
   *
   * @method stop
   * @instance
   * @memberof Scene_Base
   */
  stop(): any {
    return null;
  }
  /**
   * Return whether the scene is busy or not.
   *
   * @method isBusy
   * @instance
   * @memberof Scene_Base
   * @return {Boolean} Return true if the scene is currently busy
   */
  isBusy(): boolean {
    return null;
  }
  /**
   * Terminate the scene before switching to a another scene.
   *
   * @method terminate
   * @instance
   * @memberof Scene_Base
   */
  terminate(): any {
    return null;
  }
  /**
   * Create the layer for the windows children
   * and add it to the rendering process.
   *
   * @method createWindowLayer
   * @instance
   * @memberof Scene_Base
   */
  createWindowLayer(): any {
    return null;
  }
  _windowLayer: WindowLayer;
  /**
   * Add the children window to the windowLayer processing.
   *
   * @method addWindow
   * @instance
   * @memberof Scene_Base
   */
  addWindow(): any {
    return null;
  }
  /**
   * Request a fadeIn screen process.
   *
   * @method startFadeIn
   * @param {Number} [duration=30] The time the process will take for fadeIn the screen
   * @param {Boolean} [white=false] If true the fadein will be process with a white color else it's will be black
   *
   * @instance
   * @memberof Scene_Base
   */
  startFadeIn(duration: number, white: boolean): any {
    return null;
  }
  /**
   * Request a fadeOut screen process.
   *
   * @method startFadeOut
   * @param {Number} [duration=30] The time the process will take for fadeOut the screen
   * @param {Boolean} [white=false] If true the fadeOut will be process with a white color else it's will be black
   *
   * @instance
   * @memberof Scene_Base
   */
  startFadeOut(duration: number, white: boolean): any {
    return null;
  }
  /**
   * Create a Screen sprite for the fadein and fadeOut purpose and
   * add it to the rendering process.
   *
   * @method createFadeSprite
   * @instance
   * @memberof Scene_Base
   */
  createFadeSprite(): any {
    return null;
  }
  /**
   * Update the screen fade processing.
   *
   * @method updateFade
   * @instance
   * @memberof Scene_Base
   */
  updateFade(): any {
    return null;
  }
  /**
   * Update the children of the scene EACH frame.
   *
   * @method updateChildren
   * @instance
   * @memberof Scene_Base
   */
  updateChildren(): any {
    return null;
  }
  /**
   * Pop the scene from the stack array and switch to the
   * previous scene.
   *
   * @method popScene
   * @instance
   * @memberof Scene_Base
   */
  popScene(): any {
    return null;
  }
  /**
   * Check whether the game should be triggering a gameover.
   *
   * @method checkGameover
   * @instance
   * @memberof Scene_Base
   */
  checkGameover(): any {
    return null;
  }
  /**
   * Slowly fade out all the visual and audio of the scene.
   *
   * @method fadeOutAll
   * @instance
   * @memberof Scene_Base
   */
  fadeOutAll(): any {
    return null;
  }
  /**
   * Return the screen fade speed value.
   *
   * @method fadeSpeed
   * @instance
   * @memberof Scene_Base
   * @return {Number} Return the fade speed
   */
  fadeSpeed(): number {
    return null;
  }
  /**
   * Return a slow screen fade speed value.
   *
   * @method slowFadeSpeed
   * @instance
   * @memberof Scene_Base
   * @return {Number} Return the fade speed
   */
  slowFadeSpeed(): number {
    return null;
  }
}
export class Scene_Boot extends Scene_Base {
  constructor() {
    super();
  }
  _startDate: number;
  create(): void {}
  loadSystemWindowImage(): void {}
  static loadSystemImages(): void {}
  isReady(): any {
    return null;
  }
  isGameFontLoaded(): boolean {
    return null;
  }
  start(): void {}
  updateDocumentTitle(): void {}
  checkPlayerLocation(): void {}
}
export class Scene_Title extends Scene_Base {
  constructor() {
    super();
  }
  create(): void {}
  start(): void {}
  update(): void {}
  isBusy(): any {
    return null;
  }
  terminate(): void {}
  createBackground(): void {}
  _backSprite1: Sprite;
  _backSprite2: Sprite;
  createForeground(): void {}
  _gameTitleSprite: Sprite;
  drawGameTitle(): void {}
  centerSprite(sprite: any): void {}
  createCommandWindow(): void {}
  _commandWindow: Window_TitleCommand;
  commandNewGame(): void {}
  commandContinue(): void {}
  commandOptions(): void {}
  playTitleMusic(): void {}
}
export class Scene_Map extends Scene_Base {
  constructor() {
    super();
  }
  _waitCount: number;
  _encounterEffectDuration: number;
  _mapLoaded: boolean;
  _touchCount: number;
  create(): void {}
  _transfer: any;
  isReady(): any {
    return null;
  }
  onMapLoaded(): void {}
  start(): void {}
  menuCalling: boolean;
  update(): void {}
  updateMainMultiply(): void {}
  updateMain(): void {}
  isFastForward(): any {
    return null;
  }
  stop(): void {}
  isBusy(): any {
    return null;
  }
  terminate(): void {}
  needsFadeIn(): any {
    return null;
  }
  needsSlowFadeOut(): any {
    return null;
  }
  updateWaitCount(): boolean {
    return null;
  }
  updateDestination(): void {}
  isMapTouchOk(): any {
    return null;
  }
  processMapTouch(): void {}
  isSceneChangeOk(): boolean {
    return null;
  }
  updateScene(): void {}
  createDisplayObjects(): void {}
  createSpriteset(): void {}
  _spriteset: Spriteset_Map;
  createAllWindows(): void {}
  createMapNameWindow(): void {}
  _mapNameWindow: Window_MapName;
  createMessageWindow(): void {}
  _messageWindow: Window_Message;
  createScrollTextWindow(): void {}
  _scrollTextWindow: Window_ScrollText;
  updateTransferPlayer(): void {}
  updateEncounter(): void {}
  updateCallMenu(): void {}
  isMenuEnabled(): boolean {
    return null;
  }
  isMenuCalled(): any {
    return null;
  }
  callMenu(): void {}
  updateCallDebug(): void {}
  isDebugCalled(): any {
    return null;
  }
  fadeInForTransfer(): void {}
  fadeOutForTransfer(): void {}
  launchBattle(): void {}
  stopAudioOnBattleStart(): void {}
  startEncounterEffect(): void {}
  updateEncounterEffect(): void {}
  snapForBattleBackground(): void {}
  startFlashForEncounter(duration: any): void {}
  encounterEffectSpeed(): number {
    return null;
  }
}
export class Scene_MenuBase extends Scene_Base {
  constructor() {
    super();
  }
  create(): void {}
  actor(): any {
    return null;
  }
  updateActor(): void {}
  _actor: any;
  createBackground(): void {}
  _backgroundSprite: Sprite;
  setBackgroundOpacity(opacity: any): void {}
  createHelpWindow(): void {}
  _helpWindow: Window_Help;
  nextActor(): void {}
  previousActor(): void {}
  onActorChange(): void {}
}
export class Scene_Menu extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  start(): void {}
  createCommandWindow(): void {}
  _commandWindow: Window_MenuCommand;
  createGoldWindow(): void {}
  _goldWindow: Window_Gold;
  createStatusWindow(): void {}
  _statusWindow: Window_MenuStatus;
  commandItem(): void {}
  commandPersonal(): void {}
  commandFormation(): void {}
  commandOptions(): void {}
  commandSave(): void {}
  commandGameEnd(): void {}
  onPersonalOk(): void {}
  onPersonalCancel(): void {}
  onFormationOk(): void {}
  onFormationCancel(): void {}
}
export class Scene_ItemBase extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  createActorWindow(): void {}
  _actorWindow: Window_MenuActor;
  item(): any {
    return null;
  }
  user(): any {
    return null;
  }
  isCursorLeft(): boolean {
    return null;
  }
  showSubWindow(window: any): void {}
  hideSubWindow(window: any): void {}
  onActorOk(): void {}
  onActorCancel(): void {}
  determineItem(): void {}
  useItem(): void {}
  activateItemWindow(): void {}
  itemTargetActors(): any {
    return null;
  }
  canUse(): any {
    return null;
  }
  isItemEffectsValid(): any {
    return null;
  }
  applyItem(): void {}
  checkCommonEvent(): void {}
}
export class Scene_Item extends Scene_ItemBase {
  constructor() {
    super();
  }
  create(): void {}
  createCategoryWindow(): void {}
  _categoryWindow: Window_ItemCategory;
  createItemWindow(): void {}
  _itemWindow: Window_ItemList;
  user(): any {
    return null;
  }
  onCategoryOk(): void {}
  onItemOk(): void {}
  onItemCancel(): void {}
  playSeForItem(): void {}
  useItem(): void {}
}
export class Scene_Skill extends Scene_ItemBase {
  constructor() {
    super();
  }
  create(): void {}
  start(): void {}
  createSkillTypeWindow(): void {}
  _skillTypeWindow: Window_SkillType;
  createStatusWindow(): void {}
  _statusWindow: Window_SkillStatus;
  createItemWindow(): void {}
  _itemWindow: Window_SkillList;
  refreshActor(): void {}
  user(): any {
    return null;
  }
  commandSkill(): void {}
  onItemOk(): void {}
  onItemCancel(): void {}
  playSeForItem(): void {}
  useItem(): void {}
  onActorChange(): void {}
}
export class Scene_Equip extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  createStatusWindow(): void {}
  _statusWindow: Window_EquipStatus;
  createCommandWindow(): void {}
  _commandWindow: Window_EquipCommand;
  createSlotWindow(): void {}
  _slotWindow: Window_EquipSlot;
  createItemWindow(): void {}
  _itemWindow: Window_EquipItem;
  refreshActor(): void {}
  commandEquip(): void {}
  commandOptimize(): void {}
  commandClear(): void {}
  onSlotOk(): void {}
  onSlotCancel(): void {}
  onItemOk(): void {}
  onItemCancel(): void {}
  onActorChange(): void {}
}
export class Scene_Status extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  _statusWindow: Window_Status;
  start(): void {}
  refreshActor(): void {}
  onActorChange(): void {}
}
export class Scene_Options extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  terminate(): void {}
  createOptionsWindow(): void {}
  _optionsWindow: Window_Options;
}
export class Scene_File extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  start(): void {}
  savefileId(): any {
    return null;
  }
  createHelpWindow(): void {}
  _helpWindow: Window_Help;
  createListWindow(): void {}
  _listWindow: Window_SavefileList;
  mode(): any {
    return null;
  }
  activateListWindow(): void {}
  helpWindowText(): string {
    return null;
  }
  firstSavefileIndex(): number {
    return null;
  }
  onSavefileOk(): void {}
}
export class Scene_Save extends Scene_File {
  constructor() {
    super();
  }
  mode(): string {
    return null;
  }
  helpWindowText(): any {
    return null;
  }
  firstSavefileIndex(): number {
    return null;
  }
  onSavefileOk(): void {}
  onSaveSuccess(): void {}
  onSaveFailure(): void {}
}
export class Scene_Load extends Scene_File {
  constructor() {
    super();
  }
  _loadSuccess: boolean;
  terminate(): void {}
  mode(): string {
    return null;
  }
  helpWindowText(): any {
    return null;
  }
  firstSavefileIndex(): number {
    return null;
  }
  onSavefileOk(): void {}
  onLoadSuccess(): void {}
  onLoadFailure(): void {}
  reloadMapIfUpdated(): void {}
}
export class Scene_GameEnd extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  stop(): void {}
  createBackground(): void {}
  createCommandWindow(): void {}
  _commandWindow: Window_GameEnd;
  commandToTitle(): void {}
}
export class Scene_Shop extends Scene_MenuBase {
  constructor() {
    super();
  }
  prepare(goods: any, purchaseOnly: any): void {}
  _goods: any;
  _purchaseOnly: any;
  _item: any;
  create(): void {}
  createGoldWindow(): void {}
  _goldWindow: Window_Gold;
  createCommandWindow(): void {}
  _commandWindow: Window_ShopCommand;
  createDummyWindow(): void {}
  _dummyWindow: Window_Base;
  createNumberWindow(): void {}
  _numberWindow: Window_ShopNumber;
  createStatusWindow(): void {}
  _statusWindow: Window_ShopStatus;
  createBuyWindow(): void {}
  _buyWindow: Window_ShopBuy;
  createCategoryWindow(): void {}
  _categoryWindow: Window_ItemCategory;
  createSellWindow(): void {}
  _sellWindow: Window_ShopSell;
  activateBuyWindow(): void {}
  activateSellWindow(): void {}
  commandBuy(): void {}
  commandSell(): void {}
  onBuyOk(): void {}
  onBuyCancel(): void {}
  onCategoryOk(): void {}
  onCategoryCancel(): void {}
  onSellOk(): void {}
  onSellCancel(): void {}
  onNumberOk(): void {}
  onNumberCancel(): void {}
  doBuy(number: any): void {}
  doSell(number: any): void {}
  endNumberInput(): void {}
  maxBuy(): number {
    return null;
  }
  maxSell(): any {
    return null;
  }
  money(): any {
    return null;
  }
  currencyUnit(): any {
    return null;
  }
  buyingPrice(): any {
    return null;
  }
  sellingPrice(): number {
    return null;
  }
}
export class Scene_Name extends Scene_MenuBase {
  constructor() {
    super();
  }
  prepare(actorId: any, maxLength: any): void {}
  _actorId: any;
  _maxLength: any;
  create(): void {}
  _actor: any;
  start(): void {}
  createEditWindow(): void {}
  _editWindow: Window_NameEdit;
  createInputWindow(): void {}
  _inputWindow: Window_NameInput;
  onInputOk(): void {}
}
export class Scene_Debug extends Scene_MenuBase {
  constructor() {
    super();
  }
  create(): void {}
  createRangeWindow(): void {}
  _rangeWindow: Window_DebugRange;
  createEditWindow(): void {}
  _editWindow: Window_DebugEdit;
  createDebugHelpWindow(): void {}
  _debugHelpWindow: Window_Base;
  onRangeOk(): void {}
  onEditCancel(): void {}
  refreshHelpWindow(): void {}
  helpText(): string {
    return null;
  }
}
export class Scene_Battle extends Scene_Base {
  constructor() {
    super();
  }
  create(): void {}
  start(): void {}
  update(): void {}
  updateBattleProcess(): void {}
  isAnyInputWindowActive(): any {
    return null;
  }
  changeInputWindow(): void {}
  stop(): void {}
  terminate(): void {}
  needsSlowFadeOut(): any {
    return null;
  }
  updateStatusWindow(): void {}
  updateWindowPositions(): void {}
  createDisplayObjects(): void {}
  createSpriteset(): void {}
  _spriteset: Spriteset_Battle;
  createAllWindows(): void {}
  createLogWindow(): void {}
  _logWindow: Window_BattleLog;
  createStatusWindow(): void {}
  _statusWindow: Window_BattleStatus;
  createPartyCommandWindow(): void {}
  _partyCommandWindow: Window_PartyCommand;
  createActorCommandWindow(): void {}
  _actorCommandWindow: Window_ActorCommand;
  createHelpWindow(): void {}
  _helpWindow: Window_Help;
  createSkillWindow(): void {}
  _skillWindow: Window_BattleSkill;
  createItemWindow(): void {}
  _itemWindow: Window_BattleItem;
  createActorWindow(): void {}
  _actorWindow: Window_BattleActor;
  createEnemyWindow(): void {}
  _enemyWindow: Window_BattleEnemy;
  createMessageWindow(): void {}
  _messageWindow: Window_Message;
  createScrollTextWindow(): void {}
  _scrollTextWindow: Window_ScrollText;
  refreshStatus(): void {}
  startPartyCommandSelection(): void {}
  commandFight(): void {}
  commandEscape(): void {}
  startActorCommandSelection(): void {}
  commandAttack(): void {}
  commandSkill(): void {}
  commandGuard(): void {}
  commandItem(): void {}
  selectNextCommand(): void {}
  selectPreviousCommand(): void {}
  selectActorSelection(): void {}
  onActorOk(): void {}
  onActorCancel(): void {}
  selectEnemySelection(): void {}
  onEnemyOk(): void {}
  onEnemyCancel(): void {}
  onSkillOk(): void {}
  onSkillCancel(): void {}
  onItemOk(): void {}
  onItemCancel(): void {}
  onSelectAction(): void {}
  endCommandSelection(): void {}
}
export class Scene_Gameover extends Scene_Base {
  constructor() {
    super();
  }
  create(): void {}
  start(): void {}
  update(): void {}
  stop(): void {}
  terminate(): void {}
  playGameoverMusic(): void {}
  createBackground(): void {}
  _backSprite: Sprite;
  isTriggered(): any {
    return null;
  }
  gotoTitle(): void {}
}
