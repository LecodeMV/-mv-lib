import { Bitmap, Sprite, Window } from './rpg_core';

export class Window_Base extends Window {
  constructor(x: any, y: any, width: any, height: any) {
    super();
  }
  _opening: boolean;
  _closing: boolean;
  _dimmerSprite: any;
  static _iconWidth: number;
  static _iconHeight: number;
  static _faceWidth: number;
  static _faceHeight: number;
  lineHeight(): number {
    return null;
  }
  standardFontFace():
    | 'SimHei, Heiti TC, sans-serif'
    | 'Dotum, AppleGothic, sans-serif'
    | 'GameFont' {
    return null;
  }
  standardFontSize(): number {
    return null;
  }
  standardPadding(): number {
    return null;
  }
  textPadding(): number {
    return null;
  }
  standardBackOpacity(): number {
    return null;
  }
  loadWindowskin(): void {}
  windowskin: any;
  updatePadding(): void {}
  padding: any;
  updateBackOpacity(): void {}
  backOpacity: any;
  contentsWidth(): number {
    return null;
  }
  contentsHeight(): number {
    return null;
  }
  fittingHeight(numLines: any): number {
    return null;
  }
  updateTone(): void {}
  createContents(): void {}
  contents: Bitmap;
  resetFontSettings(): void {}
  resetTextColor(): void {}
  update(): void {}
  updateOpen(): void {}
  updateClose(): void {}
  //@ts-ignore
  open(): void {}
  close(): void {}
  isOpening(): any {
    return null;
  }
  isClosing(): any {
    return null;
  }
  show(): void {}
  visible: boolean;
  hide(): void {}
  activate(): void {}
  active: boolean;
  deactivate(): void {}
  textColor(n: any): any {
    return null;
  }
  normalColor(): any {
    return null;
  }
  systemColor(): any {
    return null;
  }
  crisisColor(): any {
    return null;
  }
  deathColor(): any {
    return null;
  }
  gaugeBackColor(): any {
    return null;
  }
  hpGaugeColor1(): any {
    return null;
  }
  hpGaugeColor2(): any {
    return null;
  }
  mpGaugeColor1(): any {
    return null;
  }
  mpGaugeColor2(): any {
    return null;
  }
  mpCostColor(): any {
    return null;
  }
  powerUpColor(): any {
    return null;
  }
  powerDownColor(): any {
    return null;
  }
  tpGaugeColor1(): any {
    return null;
  }
  tpGaugeColor2(): any {
    return null;
  }
  tpCostColor(): any {
    return null;
  }
  pendingColor(): any {
    return null;
  }
  translucentOpacity(): number {
    return null;
  }
  changeTextColor(color: any): void {}
  changePaintOpacity(enabled: any): void {}
  drawText(text: any, x: any, y: any, maxWidth: any, align: any): void {}
  textWidth(text: any): any {
    return null;
  }
  drawTextEx(text: any, x: any, y: any): number {
    return null;
  }
  convertEscapeCharacters(text: any): any {
    return null;
  }
  actorName(n: any): any {
    return null;
  }
  partyMemberName(n: any): any {
    return null;
  }
  processCharacter(textState: any): void {}
  processNormalCharacter(textState: any): void {}
  processNewLine(textState: any): void {}
  processNewPage(textState: any): void {}
  obtainEscapeCode(textState: any): string {
    return null;
  }
  obtainEscapeParam(textState: any): number | '' {
    return null;
  }
  processEscapeCharacter(code: any, textState: any): void {}
  processDrawIcon(iconIndex: any, textState: any): void {}
  makeFontBigger(): void {}
  makeFontSmaller(): void {}
  calcTextHeight(textState: any, all: any): number {
    return null;
  }
  drawIcon(iconIndex: any, x: any, y: any): void {}
  drawFace(faceName: any, faceIndex: any, x: any, y: any, width: any, height: any): void {}
  drawCharacter(characterName: any, characterIndex: any, x: any, y: any): void {}
  drawGauge(x: any, y: any, width: any, rate: any, color1: any, color2: any): void {}
  hpColor(actor: any): any {
    return null;
  }
  mpColor(actor: any): any {
    return null;
  }
  tpColor(actor: any): any {
    return null;
  }
  drawActorCharacter(actor: any, x: any, y: any): void {}
  drawActorFace(actor: any, x: any, y: any, width: any, height: any): void {}
  drawActorName(actor: any, x: any, y: any, width: any): void {}
  drawActorClass(actor: any, x: any, y: any, width: any): void {}
  drawActorNickname(actor: any, x: any, y: any, width: any): void {}
  drawActorLevel(actor: any, x: any, y: any): void {}
  drawActorIcons(actor: any, x: any, y: any, width: any): void {}
  drawCurrentAndMax(
    current: any,
    max: any,
    x: any,
    y: any,
    width: any,
    color1: any,
    color2: any
  ): void {}
  drawActorHp(actor: any, x: any, y: any, width: any): void {}
  drawActorMp(actor: any, x: any, y: any, width: any): void {}
  drawActorTp(actor: any, x: any, y: any, width: any): void {}
  drawActorSimpleStatus(actor: any, x: any, y: any, width: any): void {}
  drawItemName(item: any, x: any, y: any, width: any): void {}
  drawCurrencyValue(value: any, unit: any, x: any, y: any, width: any): void {}
  paramchangeTextColor(change: any): any {
    return null;
  }
  setBackgroundType(type: any): void {}
  showBackgroundDimmer(): void {}
  hideBackgroundDimmer(): void {}
  updateBackgroundDimmer(): void {}
  refreshDimmerBitmap(): void {}
  dimColor1(): string {
    return null;
  }
  dimColor2(): string {
    return null;
  }
  canvasToLocalX(x: any): any {
    return null;
  }
  canvasToLocalY(y: any): any {
    return null;
  }
  reserveFaceImages(): void {}
}
export class Window_Selectable extends Window_Base {
  constructor(x: any, y: any, width: any, height: any) {
    super(x, y, width, height);
  }
  _index: number;
  _cursorFixed: boolean;
  _cursorAll: boolean;
  _stayCount: number;
  _helpWindow: any;
  _handlers: {};
  _touching: boolean;
  _scrollX: number;
  _scrollY: number;
  index(): any {
    return null;
  }
  cursorFixed(): any {
    return null;
  }
  setCursorFixed(cursorFixed: any): void {}
  cursorAll(): any {
    return null;
  }
  setCursorAll(cursorAll: any): void {}
  maxCols(): number {
    return null;
  }
  maxItems(): number {
    return null;
  }
  spacing(): number {
    return null;
  }
  itemWidth(): number {
    return null;
  }
  itemHeight(): any {
    return null;
  }
  maxRows(): number {
    return null;
  }
  activate(): void {}
  deactivate(): void {}
  select(index: any): void {}
  deselect(): void {}
  reselect(): void {}
  row(): number {
    return null;
  }
  topRow(): number {
    return null;
  }
  maxTopRow(): number {
    return null;
  }
  setTopRow(row: any): void {}
  resetScroll(): void {}
  maxPageRows(): number {
    return null;
  }
  maxPageItems(): number {
    return null;
  }
  isHorizontal(): boolean {
    return null;
  }
  bottomRow(): number {
    return null;
  }
  setBottomRow(row: any): void {}
  topIndex(): number {
    return null;
  }
  itemRect(index: any): any {
    return null;
  }
  itemRectForText(index: any): any {
    return null;
  }
  setHelpWindow(helpWindow: any): void {}
  showHelpWindow(): void {}
  hideHelpWindow(): void {}
  setHandler(symbol: any, method: any): void {}
  isHandled(symbol: any): boolean {
    return null;
  }
  callHandler(symbol: any): void {}
  isOpenAndActive(): any {
    return null;
  }
  isCursorMovable(): boolean {
    return null;
  }
  cursorDown(wrap: any): void {}
  cursorUp(wrap: any): void {}
  cursorRight(wrap: any): void {}
  cursorLeft(wrap: any): void {}
  cursorPagedown(): void {}
  cursorPageup(): void {}
  scrollDown(): void {}
  scrollUp(): void {}
  update(): void {}
  updateArrows(): void {}
  downArrowVisible: boolean;
  upArrowVisible: boolean;
  processCursorMove(): void {}
  processHandling(): void {}
  processWheel(): void {}
  processTouch(): void {}
  isTouchedInsideFrame(): boolean {
    return null;
  }
  onTouch(triggered: any): void {}
  hitTest(x: any, y: any): any {
    return null;
  }
  isContentsArea(x: any, y: any): boolean {
    return null;
  }
  isTouchOkEnabled(): any {
    return null;
  }
  isOkEnabled(): any {
    return null;
  }
  isCancelEnabled(): any {
    return null;
  }
  isOkTriggered(): any {
    return null;
  }
  isCancelTriggered(): any {
    return null;
  }
  processOk(): void {}
  playOkSound(): void {}
  playBuzzerSound(): void {}
  callOkHandler(): void {}
  processCancel(): void {}
  callCancelHandler(): void {}
  processPageup(): void {}
  processPagedown(): void {}
  updateInputData(): void {}
  updateCursor(): void {}
  isCursorVisible(): boolean {
    return null;
  }
  ensureCursorVisible(): void {}
  callUpdateHelp(): void {}
  updateHelp(): void {}
  setHelpWindowItem(item: any): void {}
  isCurrentItemEnabled(): boolean {
    return null;
  }
  drawAllItems(): void {}
  drawItem(index: any): void {}
  clearItem(index: any): void {}
  redrawItem(index: any): void {}
  redrawCurrentItem(): void {}
  refresh(): void {}
}
export class Window_Command extends Window_Selectable {
  constructor(x: any, y: any) {
    super(x, y, 0, 0);
  }
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  clearCommandList(): void {}
  _list: undefined[];
  makeCommandList(): void {}
  addCommand(name: string, symbol: string, enabled = true, ext?: any): void {}
  commandName(index: any): any {
    return null;
  }
  commandSymbol(index: any): any {
    return null;
  }
  isCommandEnabled(index: any): any {
    return null;
  }
  currentData(): any {
    return null;
  }
  isCurrentItemEnabled(): any {
    return null;
  }
  currentSymbol(): any {
    return null;
  }
  currentExt(): any {
    return null;
  }
  findSymbol(symbol: any): number {
    return null;
  }
  selectSymbol(symbol: any): void {}
  findExt(ext: any): number {
    return null;
  }
  selectExt(ext: any): void {}
  drawItem(index: any): void {}
  itemTextAlign(): string {
    return null;
  }
  isOkEnabled(): boolean {
    return null;
  }
  callOkHandler(): void {}
  refresh(): void {}
}
export class Window_HorzCommand extends Window_Command {
  constructor(x: any, y: any) {
    super(x, y);
  }
  numVisibleRows(): number {
    return null;
  }
  itemTextAlign(): string {
    return null;
  }
}
export class Window_Help extends Window_Base {
  constructor(numLines: any) {
    super(0, 0, 0, 0);
  }
  _text: string;
  setText(text: any): void {}
  clear(): void {}
  setItem(item: any): void {}
  refresh(): void {}
}
export class Window_Gold extends Window_Base {
  constructor(x: any, y: any) {
    super(x, y, 0, 0);
  }
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  refresh(): void {}
  value(): any {
    return null;
  }
  currencyUnit(): any {
    return null;
  }
  open(): void {}
}
export class Window_MenuCommand extends Window_Command {
  constructor(x: any, y: any) {
    super(x, y);
  }
  static _lastCommandSymbol: any;
  static initCommandPosition(): void {}
  windowWidth(): number {
    return null;
  }
  numVisibleRows(): any {
    return null;
  }
  makeCommandList(): void {}
  addMainCommands(): void {}
  addFormationCommand(): void {}
  addOriginalCommands(): void {}
  addOptionsCommand(): void {}
  addSaveCommand(): void {}
  addGameEndCommand(): void {}
  needsCommand(name: any): any {
    return null;
  }
  areMainCommandsEnabled(): any {
    return null;
  }
  isFormationEnabled(): any {
    return null;
  }
  isOptionsEnabled(): boolean {
    return null;
  }
  isSaveEnabled(): any {
    return null;
  }
  isGameEndEnabled(): boolean {
    return null;
  }
  processOk(): void {}
  selectLast(): void {}
}
export class Window_MenuStatus extends Window_Selectable {
  constructor(x: any, y: any) {
    super(x, y, 0, 0);
  }
  _formationMode: boolean;
  _pendingIndex: number;
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  itemHeight(): number {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  loadImages(): void {}
  drawItem(index: any): void {}
  drawItemBackground(index: any): void {}
  drawItemImage(index: any): void {}
  drawItemStatus(index: any): void {}
  processOk(): void {}
  isCurrentItemEnabled(): any {
    return null;
  }
  selectLast(): void {}
  formationMode(): any {
    return null;
  }
  setFormationMode(formationMode: any): void {}
  pendingIndex(): any {
    return null;
  }
  setPendingIndex(index: any): void {}
}
export class Window_MenuActor extends Window_MenuStatus {
  constructor() {
    super(0, 0);
  }
  processOk(): void {}
  selectLast(): void {}
  selectForItem(item: any): void {}
}
export class Window_ItemCategory extends Window_HorzCommand {
  constructor() {
    super(0, 0);
  }
  windowWidth(): any {
    return null;
  }
  update(): void {}
  makeCommandList(): void {}
  setItemWindow(itemWindow: any): void {}
  _itemWindow: any;
}
export class Window_ItemList extends Window_Selectable {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  _category: string;
  _data: undefined[];
  setCategory(category: any): void {}
  spacing(): number {
    return null;
  }
  item(): any {
    return null;
  }
  isCurrentItemEnabled(): any {
    return null;
  }
  includes(item: any): any {
    return null;
  }
  needsNumber(): boolean {
    return null;
  }
  isEnabled(item: any): any {
    return null;
  }
  makeItemList(): void {}
  selectLast(): void {}
  drawItem(index: any): void {}
  numberWidth(): any {
    return null;
  }
  drawItemNumber(item: any, x: any, y: any, width: any): void {}
  updateHelp(): void {}
  refresh(): void {}
}
export class Window_SkillType extends Window_Command {
  constructor(x: any, y: any) {
    super(0, 0);
  }
  _actor: any;
  windowWidth(): number {
    return null;
  }
  setActor(actor: any): void {}
  numVisibleRows(): number {
    return null;
  }
  makeCommandList(): void {}
  update(): void {}
  setSkillWindow(skillWindow: any): void {}
  _skillWindow: any;
  selectLast(): void {}
}
export class Window_SkillStatus extends Window_Base {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  _actor: any;
  setActor(actor: any): void {}
  refresh(): void {}
}
export class Window_SkillList extends Window_Selectable {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  _actor: any;
  _stypeId: number;
  _data: undefined[];
  setActor(actor: any): void {}
  setStypeId(stypeId: any): void {}
  spacing(): number {
    return null;
  }
  isCurrentItemEnabled(): any {
    return null;
  }
  includes(item: any): boolean {
    return null;
  }
  isEnabled(item: any): any {
    return null;
  }
  makeItemList(): void {}
  selectLast(): void {}
  drawItem(index: any): void {}
  costWidth(): any {
    return null;
  }
  drawSkillCost(skill: any, x: any, y: any, width: any): void {}
  updateHelp(): void {}
  refresh(): void {}
}
export class Window_EquipStatus extends Window_Base {
  constructor(x: any, y: any) {
    super(0, 0, 0, 0);
  }
  _actor: any;
  _tempActor: any;
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  setActor(actor: any): void {}
  refresh(): void {}
  setTempActor(tempActor: any): void {}
  drawItem(x: any, y: any, paramId: any): void {}
  drawParamName(x: any, y: any, paramId: any): void {}
  drawCurrentParam(x: any, y: any, paramId: any): void {}
  drawRightArrow(x: any, y: any): void {}
  drawNewParam(x: any, y: any, paramId: any): void {}
}
export class Window_EquipCommand extends Window_HorzCommand {
  constructor(x: any, y: any, width: any) {
    super(0, 0);
  }
  _windowWidth: any;
  windowWidth(): any {
    return null;
  }
  makeCommandList(): void {}
}
export class Window_EquipSlot extends Window_Selectable {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  _actor: any;
  setActor(actor: any): void {}
  update(): void {}
  drawItem(index: any): void {}
  slotName(index: any): any {
    return null;
  }
  isEnabled(index: any): any {
    return null;
  }
  isCurrentItemEnabled(): any {
    return null;
  }
  setStatusWindow(statusWindow: any): void {}
  _statusWindow: any;
  setItemWindow(itemWindow: any): void {}
  _itemWindow: any;
  updateHelp(): void {}
}
export class Window_EquipItem extends Window_ItemList {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  _actor: any;
  _slotId: number;
  setActor(actor: any): void {}
  setSlotId(slotId: any): void {}
  includes(item: any): any {
    return null;
  }
  isEnabled(item: any): boolean {
    return null;
  }
  selectLast(): void {}
  setStatusWindow(statusWindow: any): void {}
  _statusWindow: any;
  updateHelp(): void {}
  playOkSound(): void {}
}
export class Window_Status extends Window_Selectable {
  constructor() {
    super(0, 0, 0, 0);
  }
  _actor: any;
  setActor(actor: any): void {}
  refresh(): void {}
  drawBlock1(y: any): void {}
  drawBlock2(y: any): void {}
  drawBlock3(y: any): void {}
  drawBlock4(y: any): void {}
  drawHorzLine(y: any): void {}
  lineColor(): any {
    return null;
  }
  drawBasicInfo(x: any, y: any): void {}
  drawParameters(x: any, y: any): void {}
  drawExpInfo(x: any, y: any): void {}
  drawEquipments(x: any, y: any): void {}
  drawProfile(x: any, y: any): void {}
  maxEquipmentLines(): number {
    return null;
  }
}
export class Window_Options extends Window_Command {
  constructor() {
    super(0, 0);
  }
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  updatePlacement(): void {}
  x: number;
  y: number;
  makeCommandList(): void {}
  addGeneralOptions(): void {}
  addVolumeOptions(): void {}
  drawItem(index: any): void {}
  statusText(index: any): any {
    return null;
  }
  isVolumeSymbol(symbol: any): any {
    return null;
  }
  booleanStatusText(value: any): 'ON' | 'OFF' {
    return null;
  }
  volumeStatusText(value: any): string {
    return null;
  }
  processOk(): void {}
  cursorRight(wrap: any): void {}
  cursorLeft(wrap: any): void {}
  volumeOffset(): number {
    return null;
  }
  changeValue(symbol: any, value: any): void {}
  getConfigValue(symbol: any): any {
    return null;
  }
  setConfigValue(symbol: any, volume: any): void {}
}
export class Window_SavefileList extends Window_Selectable {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  _mode: any;
  setMode(mode: any): void {}
  maxVisibleItems(): number {
    return null;
  }
  itemHeight(): number {
    return null;
  }
  drawItem(index: any): void {}
  drawFileId(id: any, x: any, y: any): void {}
  drawContents(info: any, rect: any, valid: any): void {}
  drawGameTitle(info: any, x: any, y: any, width: any): void {}
  drawPartyCharacters(info: any, x: any, y: any): void {}
  drawPlaytime(info: any, x: any, y: any, width: any): void {}
  playOkSound(): void {}
}
export class Window_ShopCommand extends Window_HorzCommand {
  constructor(width: any, purchaseOnly: any) {
    super(0, 0);
  }
  _windowWidth: any;
  _purchaseOnly: any;
  windowWidth(): any {
    return null;
  }
  makeCommandList(): void {}
}
export class Window_ShopBuy extends Window_Selectable {
  constructor(x: any, y: any, height: any, shopGoods: any) {
    super(0, 0, 0, 0);
  }
  _shopGoods: any;
  _money: number;
  windowWidth(): number {
    return null;
  }
  setMoney(money: any): void {}
  isCurrentItemEnabled(): any {
    return null;
  }
  price(item: any): any {
    return null;
  }
  isEnabled(item: any): boolean {
    return null;
  }
  refresh(): void {}
  makeItemList(): void {}
  _data: undefined[];
  _price: undefined[];
  drawItem(index: any): void {}
  setStatusWindow(statusWindow: any): void {}
  _statusWindow: any;
  updateHelp(): void {}
}
export class Window_ShopSell extends Window_ItemList {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  isEnabled(item: any): boolean {
    return null;
  }
}
export class Window_ShopNumber extends Window_Selectable {
  constructor(x: any, y: any, height: any) {
    super(0, 0, 0, 0);
  }
  _item: any;
  _max: number;
  _price: number;
  _number: number;
  _currencyUnit: any;
  windowWidth(): number {
    return null;
  }
  number(): any {
    return null;
  }
  setup(item: any, max: any, price: any): void {}
  setCurrencyUnit(currencyUnit: any): void {}
  createButtons(): void {}
  _buttons: undefined[];
  placeButtons(): void {}
  updateButtonsVisiblity(): void {}
  showButtons(): void {}
  hideButtons(): void {}
  refresh(): void {}
  drawMultiplicationSign(): void {}
  drawNumber(): void {}
  drawTotalPrice(): void {}
  itemY(): number {
    return null;
  }
  priceY(): number {
    return null;
  }
  buttonY(): number {
    return null;
  }
  cursorWidth(): number {
    return null;
  }
  cursorX(): number {
    return null;
  }
  maxDigits(): number {
    return null;
  }
  update(): void {}
  isOkTriggered(): any {
    return null;
  }
  playOkSound(): void {}
  processNumberChange(): void {}
  changeNumber(amount: any): void {}
  updateCursor(): void {}
  onButtonUp(): void {}
  onButtonUp2(): void {}
  onButtonDown(): void {}
  onButtonDown2(): void {}
  onButtonOk(): void {}
}
export class Window_ShopStatus extends Window_Base {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  _item: any;
  _pageIndex: number;
  refresh(): void {}
  setItem(item: any): void {}
  isEquipItem(): any {
    return null;
  }
  drawPossession(x: any, y: any): void {}
  drawEquipInfo(x: any, y: any): void {}
  statusMembers(): any {
    return null;
  }
  pageSize(): number {
    return null;
  }
  maxPages(): number {
    return null;
  }
  drawActorEquipInfo(x: any, y: any, actor: any): void {}
  drawActorParamChange(x: any, y: any, actor: any, item1: any): void {}
  currentEquippedItem(actor: any, etypeId: any): any {
    return null;
  }
  update(): void {}
  updatePage(): void {}
  isPageChangeEnabled(): boolean {
    return null;
  }
  isPageChangeRequested(): boolean {
    return null;
  }
  isTouchedInsideFrame(): boolean {
    return null;
  }
  changePage(): void {}
}
export class Window_NameEdit extends Window_Base {
  constructor(actor: any, maxLength: any) {
    super(0, 0, 0, 0);
  }
  _actor: any;
  _name: any;
  _index: any;
  _maxLength: any;
  _defaultName: any;
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  //@ts-ignore
  name(): any {
    return null;
  }
  restoreDefault(): boolean {
    return null;
  }
  add(ch: any): boolean {
    return null;
  }
  back(): boolean {
    return null;
  }
  faceWidth(): number {
    return null;
  }
  charWidth(): any {
    return null;
  }
  itemRect(
    index: any
  ): {
    x: any;
    y: number;
    width: any;
    height: any;
  } {
    return null;
  }
  underlineRect(index: any): any {
    return null;
  }
  underlineColor(): any {
    return null;
  }
  drawUnderline(index: any): void {}
  drawChar(index: any): void {}
  refresh(): void {}
}
export class Window_NameInput extends Window_Selectable {
  constructor(editWindow: any) {
    super(0, 0, 0, 0);
  }
  static LATIN1: string[];
  static LATIN2: string[];
  static RUSSIA: string[];
  static JAPAN1: string[];
  static JAPAN2: string[];
  static JAPAN3: string[];
  _editWindow: any;
  _page: number;
  _index: number;
  windowHeight(): any {
    return null;
  }
  table(): string[][] {
    return null;
  }
  character(): any {
    return null;
  }
  isPageChange(): boolean {
    return null;
  }
  isOk(): boolean {
    return null;
  }
  itemRect(
    index: any
  ): {
    x: number;
    y: number;
    width: number;
    height: any;
  } {
    return null;
  }
  refresh(): void {}
  updateCursor(): void {}
  isCursorMovable(): any {
    return null;
  }
  cursorDown(wrap: any): void {}
  cursorUp(wrap: any): void {}
  cursorRight(wrap: any): void {}
  cursorLeft(wrap: any): void {}
  cursorPagedown(): void {}
  cursorPageup(): void {}
  processCursorMove(): void {}
  processHandling(): void {}
  isCancelEnabled(): boolean {
    return null;
  }
  processCancel(): void {}
  processJump(): void {}
  processBack(): void {}
  processOk(): void {}
  onNameAdd(): void {}
  onNameOk(): void {}
}
export class Window_ChoiceList extends Window_Command {
  constructor(messageWindow: any) {
    super(0, 0);
  }
  _messageWindow: any;
  openness: number;
  _background: number;
  selectDefault(): void {}
  updatePlacement(): void {}
  width: any;
  height: any;
  updateBackground(): void {}
  windowWidth(): number {
    return null;
  }
  numVisibleRows(): any {
    return null;
  }
  maxChoiceWidth(): number {
    return null;
  }
  textWidthEx(text: any): any {
    return null;
  }
  contentsHeight(): number {
    return null;
  }
  makeCommandList(): void {}
  drawItem(index: any): void {}
  isCancelEnabled(): boolean {
    return null;
  }
  isOkTriggered(): any {
    return null;
  }
  callOkHandler(): void {}
  callCancelHandler(): void {}
}
export class Window_NumberInput extends Window_Selectable {
  constructor(messageWindow: any) {
    super(0, 0, 0, 0);
  }
  _messageWindow: any;
  _number: number;
  _maxDigits: number;
  openness: number;
  updatePlacement(): void {}
  width: any;
  height: any;
  x: number;
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  itemWidth(): number {
    return null;
  }
  createButtons(): void {}
  _buttons: undefined[];
  placeButtons(): void {}
  updateButtonsVisiblity(): void {}
  showButtons(): void {}
  hideButtons(): void {}
  buttonY(): any {
    return null;
  }
  update(): void {}
  processDigitChange(): void {}
  changeDigit(up: any): void {}
  isTouchOkEnabled(): boolean {
    return null;
  }
  isOkEnabled(): boolean {
    return null;
  }
  isCancelEnabled(): boolean {
    return null;
  }
  isOkTriggered(): any {
    return null;
  }
  processOk(): void {}
  drawItem(index: any): void {}
  onButtonUp(): void {}
  onButtonDown(): void {}
  onButtonOk(): void {}
}
export class Window_EventItem extends Window_ItemList {
  constructor(messageWindow: any) {
    super(0, 0, 0, 0);
  }
  _messageWindow: any;
  openness: number;
  windowHeight(): any {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  updatePlacement(): void {}
  includes(item: any): boolean {
    return null;
  }
  isEnabled(item: any): boolean {
    return null;
  }
  onOk(): void {}
  onCancel(): void {}
}
export class Window_Message extends Window_Base {
  constructor() {
    super(0, 0, 0, 0);
  }
  openness: number;
  initMembers(): void {}
  _imageReservationId: any;
  _background: number;
  _positionType: number;
  _waitCount: number;
  _faceBitmap: any;
  _textState: any;
  subWindows(): any[] {
    return null;
  }
  createSubWindows(): void {}
  _goldWindow: Window_Gold;
  _choiceWindow: Window_ChoiceList;
  _numberWindow: Window_NumberInput;
  _itemWindow: Window_EventItem;
  windowWidth(): any {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  clearFlags(): void {}
  _showFast: boolean;
  _lineShowFast: boolean;
  _pauseSkip: boolean;
  numVisibleRows(): number {
    return null;
  }
  update(): void {}
  checkToNotClose(): void {}
  canStart(): boolean {
    return null;
  }
  startMessage(): void {}
  updatePlacement(): void {}
  y: number;
  updateBackground(): void {}
  terminateMessage(): void {}
  updateWait(): boolean {
    return null;
  }
  updateLoading(): boolean {
    return null;
  }
  updateInput(): boolean {
    return null;
  }
  isAnySubWindowActive(): any {
    return null;
  }
  updateMessage(): boolean {
    return null;
  }
  onEndOfText(): void {}
  startInput(): boolean {
    return null;
  }
  isTriggered(): any {
    return null;
  }
  doesContinue(): boolean {
    return null;
  }
  areSettingsChanged(): boolean {
    return null;
  }
  updateShowFast(): void {}
  newPage(textState: any): void {}
  loadMessageFace(): void {}
  drawMessageFace(): void {}
  newLineX(): 0 | 168 {
    return null;
  }
  processNewLine(textState: any): void {}
  processNewPage(textState: any): void {}
  isEndOfText(textState: any): boolean {
    return null;
  }
  needsNewPage(textState: any): boolean {
    return null;
  }
  processEscapeCharacter(code: any, textState: any): void {}
  startWait(count: any): void {}
  startPause(): void {}
  pause: boolean;
}
export class Window_ScrollText extends Window_Base {
  constructor() {
    super(0, 0, 0, 0);
  }
  opacity: number;
  _text: string;
  _allTextHeight: number;
  update(): void {}
  startMessage(): void {}
  refresh(): void {}
  contentsHeight(): number {
    return null;
  }
  updateMessage(): void {}
  scrollSpeed(): number {
    return null;
  }
  isFastForward(): any {
    return null;
  }
  fastForwardRate(): number {
    return null;
  }
  terminateMessage(): void {}
}
export class Window_MapName extends Window_Base {
  constructor() {
    super(0, 0, 0, 0);
  }
  opacity: number;
  contentsOpacity: number;
  _showCount: number;
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  update(): void {}
  updateFadeIn(): void {}
  updateFadeOut(): void {}
  open(): void {}
  close(): void {}
  refresh(): void {}
  drawBackground(x: any, y: any, width: any, height: any): void {}
}
export class Window_BattleLog extends Window_Selectable {
  constructor() {
    super(0, 0, 0, 0);
  }
  opacity: number;
  _lines: undefined[];
  _methods: undefined[];
  _waitCount: number;
  _waitMode: string;
  _baseLineStack: undefined[];
  _spriteset: any;
  setSpriteset(spriteset: any): void {}
  windowWidth(): any {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  createBackBitmap(): void {}
  _backBitmap: Bitmap;
  createBackSprite(): void {}
  _backSprite: Sprite;
  messageSpeed(): number {
    return null;
  }
  isBusy(): any {
    return null;
  }
  update(): void {}
  updateWait(): any {
    return null;
  }
  updateWaitCount(): boolean {
    return null;
  }
  updateWaitMode(): boolean {
    return null;
  }
  setWaitMode(waitMode: any): void {}
  callNextMethod(): void {}
  isFastForward(): any {
    return null;
  }
  push(methodName: any): void {}
  clear(): void {}
  wait(): void {}
  waitForEffect(): void {}
  waitForMovement(): void {}
  addText(text: any): void {}
  pushBaseLine(): void {}
  popBaseLine(): void {}
  waitForNewLine(): void {}
  popupDamage(target: any): void {}
  performActionStart(subject: any, action: any): void {}
  performAction(subject: any, action: any): void {}
  performActionEnd(subject: any): void {}
  performDamage(target: any): void {}
  performMiss(target: any): void {}
  performRecovery(target: any): void {}
  performEvasion(target: any): void {}
  performMagicEvasion(target: any): void {}
  performCounter(target: any): void {}
  performReflection(target: any): void {}
  performSubstitute(substitute: any, target: any): void {}
  performCollapse(target: any): void {}
  showAnimation(subject: any, targets: any, animationId: any): void {}
  showAttackAnimation(subject: any, targets: any): void {}
  showActorAttackAnimation(subject: any, targets: any): void {}
  showEnemyAttackAnimation(subject: any, targets: any): void {}
  showNormalAnimation(targets: any, animationId: any, mirror: any): void {}
  animationBaseDelay(): number {
    return null;
  }
  animationNextDelay(): number {
    return null;
  }
  refresh(): void {}
  drawBackground(): void {}
  backRect(): {
    x: number;
    y: any;
    width: any;
    height: number;
  } {
    return null;
  }
  backColor(): string {
    return null;
  }
  backPaintOpacity(): number {
    return null;
  }
  drawLineText(index: any): void {}
  startTurn(): void {}
  startAction(subject: any, action: any, targets: any): void {}
  endAction(subject: any): void {}
  displayCurrentState(subject: any): void {}
  displayRegeneration(subject: any): void {}
  displayAction(subject: any, item: any): void {}
  displayCounter(target: any): void {}
  displayReflection(target: any): void {}
  displaySubstitute(substitute: any, target: any): void {}
  displayActionResults(subject: any, target: any): void {}
  displayFailure(target: any): void {}
  displayCritical(target: any): void {}
  displayDamage(target: any): void {}
  displayMiss(target: any): void {}
  displayEvasion(target: any): void {}
  displayHpDamage(target: any): void {}
  displayMpDamage(target: any): void {}
  displayTpDamage(target: any): void {}
  displayAffectedStatus(target: any): void {}
  displayAutoAffectedStatus(target: any): void {}
  displayChangedStates(target: any): void {}
  displayAddedStates(target: any): void {}
  displayRemovedStates(target: any): void {}
  displayChangedBuffs(target: any): void {}
  displayBuffs(target: any, buffs: any, fmt: any): void {}
  makeHpDamageText(target: any): any {
    return null;
  }
  makeMpDamageText(target: any): any {
    return null;
  }
  makeTpDamageText(target: any): any {
    return null;
  }
}
export class Window_PartyCommand extends Window_Command {
  constructor() {
    super(0, 0);
  }
  openness: number;
  windowWidth(): number {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  makeCommandList(): void {}
  setup(): void {}
}
export class Window_ActorCommand extends Window_Command {
  constructor() {
    super(0, 0);
  }
  openness: number;
  _actor: any;
  windowWidth(): number {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  makeCommandList(): void {}
  addAttackCommand(): void {}
  addSkillCommands(): void {}
  addGuardCommand(): void {}
  addItemCommand(): void {}
  setup(actor: any): void {}
  processOk(): void {}
  selectLast(): void {}
}
export class Window_BattleStatus extends Window_Selectable {
  constructor() {
    super(0, 0, 0, 0);
  }
  openness: number;
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  refresh(): void {}
  drawItem(index: any): void {}
  basicAreaRect(index: any): any {
    return null;
  }
  gaugeAreaRect(index: any): any {
    return null;
  }
  gaugeAreaWidth(): number {
    return null;
  }
  drawBasicArea(rect: any, actor: any): void {}
  drawGaugeArea(rect: any, actor: any): void {}
  drawGaugeAreaWithTp(rect: any, actor: any): void {}
  drawGaugeAreaWithoutTp(rect: any, actor: any): void {}
}
export class Window_BattleActor extends Window_BattleStatus {
  constructor(x: any, y: any) {
    super();
  }
  x: any;
  y: any;
  openness: number;
  show(): void {}
  hide(): void {}
  select(index: any): void {}
}
export class Window_BattleEnemy extends Window_Selectable {
  constructor(x: any, y: any) {
    super(0, 0, 0, 0);
  }
  _enemies: undefined[];
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  numVisibleRows(): number {
    return null;
  }
  enemy(): any {
    return null;
  }
  enemyIndex(): any {
    return null;
  }
  drawItem(index: any): void {}
  show(): void {}
  hide(): void {}
  refresh(): void {}
  select(index: any): void {}
}
export class Window_BattleSkill extends Window_SkillList {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  show(): void {}
  hide(): void {}
}
export class Window_BattleItem extends Window_ItemList {
  constructor(x: any, y: any, width: any, height: any) {
    super(0, 0, 0, 0);
  }
  includes(item: any): any {
    return null;
  }
  show(): void {}
  hide(): void {}
}
export class Window_TitleCommand extends Window_Command {
  constructor() {
    super(0, 0);
  }
  openness: number;
  static _lastCommandSymbol: any;
  static initCommandPosition(): void {}
  windowWidth(): number {
    return null;
  }
  updatePlacement(): void {}
  x: number;
  y: number;
  makeCommandList(): void {}
  isContinueEnabled(): any {
    return null;
  }
  processOk(): void {}
  selectLast(): void {}
}
export class Window_GameEnd extends Window_Command {
  constructor() {
    super(0, 0);
  }
  openness: number;
  windowWidth(): number {
    return null;
  }
  updatePlacement(): void {}
  x: number;
  y: number;
  makeCommandList(): void {}
}
export class Window_DebugRange extends Window_Selectable {
  constructor(x: any, y: any) {
    super(0, 0, 0, 0);
  }
  static lastTopRow: number;
  _maxSwitches: number;
  _maxVariables: number;
  windowWidth(): number {
    return null;
  }
  windowHeight(): any {
    return null;
  }
  update(): void {}
  mode(): 'switch' | 'variable' {
    return null;
  }
  topId(): number {
    return null;
  }
  refresh(): void {}
  drawItem(index: any): void {}
  isCancelTriggered(): any {
    return null;
  }
  processCancel(): void {}
  setEditWindow(editWindow: any): void {}
  _editWindow: any;
}
export class Window_DebugEdit extends Window_Selectable {
  constructor(x: any, y: any, width: any) {
    super(0, 0, 0, 0);
  }
  _mode: string;
  _topId: number;
  refresh(): void {}
  drawItem(index: any): void {}
  itemName(dataId: any): any {
    return null;
  }
  itemStatus(dataId: any): string {
    return null;
  }
  setMode(mode: any): void {}
  setTopId(id: any): void {}
  currentId(): any {
    return null;
  }
  update(): void {}
  updateSwitch(): void {}
  updateVariable(): void {}
}
