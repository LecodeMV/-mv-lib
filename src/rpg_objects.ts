import { DataActor, DataEnemy, DataCommonEvent } from './data';

export class Game_Temp {
  constructor() {}
  _isPlaytest: any;
  _commonEventId: number;
  _destinationX: any;
  _destinationY: any;
  isPlaytest(): any {
    return null;
  }
  reserveCommonEvent(commonEventId: any): void {}
  clearCommonEvent(): void {}
  isCommonEventReserved(): boolean {
    return null;
  }
  reservedCommonEvent(): any {
    return null;
  }
  setDestination(x: any, y: any): void {}
  clearDestination(): void {}
  isDestinationValid(): boolean {
    return null;
  }
  destinationX(): any {
    return null;
  }
  destinationY(): any {
    return null;
  }
}
export class Game_System {
  constructor() {}
  _saveEnabled: boolean;
  _menuEnabled: boolean;
  _encounterEnabled: boolean;
  _formationEnabled: boolean;
  _battleCount: number;
  _winCount: number;
  _escapeCount: number;
  _saveCount: number;
  _versionId: number;
  _framesOnSave: number;
  _bgmOnSave: any;
  _bgsOnSave: any;
  _windowTone: any;
  _battleBgm: any;
  _victoryMe: any;
  _defeatMe: any;
  _savedBgm: any;
  _walkingBgm: any;
  isJapanese(): any {
    return null;
  }
  isChinese(): any {
    return null;
  }
  isKorean(): any {
    return null;
  }
  isCJK(): any {
    return null;
  }
  isRussian(): any {
    return null;
  }
  isSideView(): any {
    return null;
  }
  isSaveEnabled(): any {
    return null;
  }
  disableSave(): void {}
  enableSave(): void {}
  isMenuEnabled(): any {
    return null;
  }
  disableMenu(): void {}
  enableMenu(): void {}
  isEncounterEnabled(): any {
    return null;
  }
  disableEncounter(): void {}
  enableEncounter(): void {}
  isFormationEnabled(): any {
    return null;
  }
  disableFormation(): void {}
  enableFormation(): void {}
  battleCount(): any {
    return null;
  }
  winCount(): any {
    return null;
  }
  escapeCount(): any {
    return null;
  }
  saveCount(): any {
    return null;
  }
  versionId(): any {
    return null;
  }
  windowTone(): any {
    return null;
  }
  setWindowTone(value: any): void {}
  battleBgm(): any {
    return null;
  }
  setBattleBgm(value: any): void {}
  victoryMe(): any {
    return null;
  }
  setVictoryMe(value: any): void {}
  defeatMe(): any {
    return null;
  }
  setDefeatMe(value: any): void {}
  onBattleStart(): void {}
  onBattleWin(): void {}
  onBattleEscape(): void {}
  onBeforeSave(): void {}
  onAfterLoad(): void {}
  playtime(): number {
    return null;
  }
  playtimeText(): string {
    return null;
  }
  saveBgm(): void {}
  replayBgm(): void {}
  saveWalkingBgm(): void {}
  replayWalkingBgm(): void {}
  saveWalkingBgm2(): void {}
}
export class Game_Timer {
  constructor() {}
  _frames: number;
  _working: boolean;
  update(sceneActive: any): void {}
  start(count: any): void {}
  stop(): void {}
  isWorking(): any {
    return null;
  }
  seconds(): number {
    return null;
  }
  onExpire(): void {}
}
export class Game_Message {
  constructor() {}
  clear(): void {}
  _texts: undefined[];
  _choices: undefined[];
  _faceName: string;
  _faceIndex: number;
  _background: number;
  _positionType: number;
  _choiceDefaultType: number;
  _choiceCancelType: number;
  _choiceBackground: number;
  _choicePositionType: number;
  _numInputVariableId: number;
  _numInputMaxDigits: number;
  _itemChoiceVariableId: number;
  _itemChoiceItypeId: number;
  _scrollMode: boolean;
  _scrollSpeed: number;
  _scrollNoFast: boolean;
  _choiceCallback: any;
  choices(): any {
    return null;
  }
  faceName(): any {
    return null;
  }
  faceIndex(): any {
    return null;
  }
  background(): any {
    return null;
  }
  positionType(): any {
    return null;
  }
  choiceDefaultType(): any {
    return null;
  }
  choiceCancelType(): any {
    return null;
  }
  choiceBackground(): any {
    return null;
  }
  choicePositionType(): any {
    return null;
  }
  numInputVariableId(): any {
    return null;
  }
  numInputMaxDigits(): any {
    return null;
  }
  itemChoiceVariableId(): any {
    return null;
  }
  itemChoiceItypeId(): any {
    return null;
  }
  scrollMode(): any {
    return null;
  }
  scrollSpeed(): any {
    return null;
  }
  scrollNoFast(): any {
    return null;
  }
  add(text: any): void {}
  setFaceImage(faceName: any, faceIndex: any): void {}
  setBackground(background: any): void {}
  setPositionType(positionType: any): void {}
  setChoices(choices: any, defaultType: any, cancelType: any): void {}
  setChoiceBackground(background: any): void {}
  setChoicePositionType(positionType: any): void {}
  setNumberInput(variableId: any, maxDigits: any): void {}
  setItemChoice(variableId: any, itemType: any): void {}
  setScroll(speed: any, noFast: any): void {}
  setChoiceCallback(callback: any): void {}
  onChoice(n: any): void {}
  hasText(): boolean {
    return null;
  }
  isChoice(): boolean {
    return null;
  }
  isNumberInput(): boolean {
    return null;
  }
  isItemChoice(): boolean {
    return null;
  }
  isBusy(): any {
    return null;
  }
  newPage(): void {}
  allText(): any {
    return null;
  }
}
export class Game_Switches {
  constructor() {}
  clear(): void {}
  _data: undefined[];
  value(switchId: any): boolean {
    return null;
  }
  setValue(switchId: any, value: any): void {}
  onChange(): void {}
}
export class Game_Variables {
  constructor() {}
  clear(): void {}
  _data: undefined[];
  value(variableId: any): any {
    return null;
  }
  setValue(variableId: any, value: any): void {}
  onChange(): void {}
}
export class Game_SelfSwitches {
  constructor() {}
  clear(): void {}
  _data: {};
  value(key: any): boolean {
    return null;
  }
  setValue(key: any, value: any): void {}
  onChange(): void {}
}
export class Game_Screen {
  constructor() {}
  clear(): void {}
  onBattleStart(): void {}
  brightness(): any {
    return null;
  }
  tone(): any {
    return null;
  }
  flashColor(): any {
    return null;
  }
  shake(): any {
    return null;
  }
  zoomX(): any {
    return null;
  }
  zoomY(): any {
    return null;
  }
  zoomScale(): any {
    return null;
  }
  weatherType(): any {
    return null;
  }
  weatherPower(): any {
    return null;
  }
  picture(pictureId: any): any {
    return null;
  }
  clearFade(): void {}
  _brightness: number;
  _fadeOutDuration: number;
  _fadeInDuration: number;
  clearTone(): void {}
  _tone: number[];
  _toneTarget: number[];
  _toneDuration: number;
  clearFlash(): void {}
  _flashColor: number[];
  _flashDuration: number;
  clearShake(): void {}
  _shakePower: number;
  _shakeSpeed: number;
  _shakeDuration: number;
  _shakeDirection: number;
  _shake: number;
  clearZoom(): void {}
  _zoomX: number;
  _zoomY: number;
  _zoomScale: number;
  _zoomScaleTarget: number;
  _zoomDuration: number;
  clearWeather(): void {}
  _weatherType: string;
  _weatherPower: number;
  _weatherPowerTarget: number;
  _weatherDuration: number;
  clearPictures(): void {}
  _pictures: undefined[];
  eraseBattlePictures(): void {}
  maxPictures(): number {
    return null;
  }
  startFadeOut(duration: any): void {}
  startFadeIn(duration: any): void {}
  startTint(tone: any, duration: any): void {}
  startFlash(color: any, duration: any): void {}
  startShake(power: any, speed: any, duration: any): void {}
  startZoom(x: any, y: any, scale: any, duration: any): void {}
  setZoom(x: any, y: any, scale: any): void {}
  changeWeather(type: any, power: any, duration: any): void {}
  update(): void {}
  updateFadeOut(): void {}
  updateFadeIn(): void {}
  updateTone(): void {}
  updateFlash(): void {}
  updateShake(): void {}
  updateZoom(): void {}
  updateWeather(): void {}
  updatePictures(): void {}
  startFlashForDamage(): void {}
  showPicture(
    pictureId: any,
    name: any,
    origin: any,
    x: any,
    y: any,
    scaleX: any,
    scaleY: any,
    opacity: any,
    blendMode: any
  ): void {}
  movePicture(
    pictureId: any,
    origin: any,
    x: any,
    y: any,
    scaleX: any,
    scaleY: any,
    opacity: any,
    blendMode: any,
    duration: any
  ): void {}
  rotatePicture(pictureId: any, speed: any): void {}
  tintPicture(pictureId: any, tone: any, duration: any): void {}
  erasePicture(pictureId: any): void {}
}
export class Game_Picture {
  constructor() {}
  name(): any {
    return null;
  }
  origin(): any {
    return null;
  }
  x(): any {
    return null;
  }
  y(): any {
    return null;
  }
  scaleX(): any {
    return null;
  }
  scaleY(): any {
    return null;
  }
  opacity(): any {
    return null;
  }
  blendMode(): any {
    return null;
  }
  tone(): any {
    return null;
  }
  angle(): any {
    return null;
  }
  initBasic(): void {}
  _name: string;
  _origin: number;
  _x: number;
  _y: number;
  _scaleX: number;
  _scaleY: number;
  _opacity: number;
  _blendMode: number;
  initTarget(): void {}
  _targetX: any;
  _targetY: any;
  _targetScaleX: any;
  _targetScaleY: any;
  _targetOpacity: any;
  _duration: number;
  initTone(): void {}
  _tone: any;
  _toneTarget: any;
  _toneDuration: number;
  initRotation(): void {}
  _angle: number;
  _rotationSpeed: number;
  show(
    name: any,
    origin: any,
    x: any,
    y: any,
    scaleX: any,
    scaleY: any,
    opacity: any,
    blendMode: any
  ): void {}
  move(
    origin: any,
    x: any,
    y: any,
    scaleX: any,
    scaleY: any,
    opacity: any,
    blendMode: any,
    duration: any
  ): void {}
  rotate(speed: any): void {}
  tint(tone: any, duration: any): void {}
  erase(): void {}
  update(): void {}
  updateMove(): void {}
  updateTone(): void {}
  updateRotation(): void {}
}
export class Game_Item {
  constructor(item: any) {}
  _dataClass: string;
  _itemId: number;
  isSkill(): boolean {
    return null;
  }
  isItem(): boolean {
    return null;
  }
  isUsableItem(): any {
    return null;
  }
  isWeapon(): boolean {
    return null;
  }
  isArmor(): boolean {
    return null;
  }
  isEquipItem(): any {
    return null;
  }
  isNull(): boolean {
    return null;
  }
  itemId(): any {
    return null;
  }
  object(): any {
    return null;
  }
  setObject(item: any): void {}
  setEquip(isWeapon: any, itemId: any): void {}
}
export class Game_Action {
  constructor(subject: any, forcing: any) {}
  static EFFECT_RECOVER_HP: number;
  static EFFECT_RECOVER_MP: number;
  static EFFECT_GAIN_TP: number;
  static EFFECT_ADD_STATE: number;
  static EFFECT_REMOVE_STATE: number;
  static EFFECT_ADD_BUFF: number;
  static EFFECT_ADD_DEBUFF: number;
  static EFFECT_REMOVE_BUFF: number;
  static EFFECT_REMOVE_DEBUFF: number;
  static EFFECT_SPECIAL: number;
  static EFFECT_GROW: number;
  static EFFECT_LEARN_SKILL: number;
  static EFFECT_COMMON_EVENT: number;
  static SPECIAL_EFFECT_ESCAPE: number;
  static HITTYPE_CERTAIN: number;
  static HITTYPE_PHYSICAL: number;
  static HITTYPE_MAGICAL: number;
  _subjectActorId: number;
  _subjectEnemyIndex: number;
  _forcing: any;
  clear(): void {}
  _item: Game_Item;
  _targetIndex: number;
  setSubject(subject: any): void {}
  subject(): any {
    return null;
  }
  friendsUnit(): any {
    return null;
  }
  opponentsUnit(): any {
    return null;
  }
  setEnemyAction(action: any): void {}
  setAttack(): void {}
  setGuard(): void {}
  setSkill(skillId: any): void {}
  setItem(itemId: any): void {}
  setItemObject(object: any): void {}
  setTarget(targetIndex: any): void {}
  item(): any {
    return null;
  }
  isSkill(): any {
    return null;
  }
  isItem(): any {
    return null;
  }
  numRepeats(): number {
    return null;
  }
  checkItemScope(list: any): any {
    return null;
  }
  isForOpponent(): any {
    return null;
  }
  isForFriend(): any {
    return null;
  }
  isForDeadFriend(): any {
    return null;
  }
  isForUser(): any {
    return null;
  }
  isForOne(): any {
    return null;
  }
  isForRandom(): any {
    return null;
  }
  isForAll(): any {
    return null;
  }
  needsSelection(): any {
    return null;
  }
  numTargets(): number {
    return null;
  }
  checkDamageType(list: any): any {
    return null;
  }
  isHpEffect(): any {
    return null;
  }
  isMpEffect(): any {
    return null;
  }
  isDamage(): any {
    return null;
  }
  isRecover(): any {
    return null;
  }
  isDrain(): any {
    return null;
  }
  isHpRecover(): any {
    return null;
  }
  isMpRecover(): any {
    return null;
  }
  isCertainHit(): boolean {
    return null;
  }
  isPhysical(): boolean {
    return null;
  }
  isMagical(): boolean {
    return null;
  }
  isAttack(): boolean {
    return null;
  }
  isGuard(): boolean {
    return null;
  }
  isMagicSkill(): any {
    return null;
  }
  decideRandomTarget(): void {}
  setConfusion(): void {}
  prepare(): void {}
  isValid(): any {
    return null;
  }
  speed(): any {
    return null;
  }
  makeTargets(): any {
    return null;
  }
  repeatTargets(targets: any): any[] {
    return null;
  }
  confusionTarget(): any {
    return null;
  }
  targetsForOpponents(): any[] {
    return null;
  }
  targetsForFriends(): any[] {
    return null;
  }
  evaluate(): number {
    return null;
  }
  itemTargetCandidates(): any {
    return null;
  }
  evaluateWithTarget(target: any): number {
    return null;
  }
  testApply(target: any): any {
    return null;
  }
  hasItemAnyValidEffects(target: any): any {
    return null;
  }
  testItemEffect(target: any, effect: any): any {
    return null;
  }
  itemCnt(target: any): any {
    return null;
  }
  itemMrf(target: any): any {
    return null;
  }
  itemHit(target: any): number {
    return null;
  }
  itemEva(target: any): any {
    return null;
  }
  itemCri(target: any): number {
    return null;
  }
  apply(target: any): void {}
  makeDamageValue(target: any, critical: any): number {
    return null;
  }
  evalDamageFormula(target: any): number {
    return null;
  }
  calcElementRate(target: any): any {
    return null;
  }
  elementsMaxRate(target: any, elements: any): any {
    return null;
  }
  applyCritical(damage: any): number {
    return null;
  }
  applyVariance(damage: any, variance: any): any {
    return null;
  }
  applyGuard(damage: any, target: any): number {
    return null;
  }
  executeDamage(target: any, value: any): void {}
  executeHpDamage(target: any, value: any): void {}
  executeMpDamage(target: any, value: any): void {}
  gainDrainedHp(value: any): void {}
  gainDrainedMp(value: any): void {}
  applyItemEffect(target: any, effect: any): void {}
  itemEffectRecoverHp(target: any, effect: any): void {}
  itemEffectRecoverMp(target: any, effect: any): void {}
  itemEffectGainTp(target: any, effect: any): void {}
  itemEffectAddState(target: any, effect: any): void {}
  itemEffectAddAttackState(target: any, effect: any): void {}
  itemEffectAddNormalState(target: any, effect: any): void {}
  itemEffectRemoveState(target: any, effect: any): void {}
  itemEffectAddBuff(target: any, effect: any): void {}
  itemEffectAddDebuff(target: any, effect: any): void {}
  itemEffectRemoveBuff(target: any, effect: any): void {}
  itemEffectRemoveDebuff(target: any, effect: any): void {}
  itemEffectSpecial(target: any, effect: any): void {}
  itemEffectGrow(target: any, effect: any): void {}
  itemEffectLearnSkill(target: any, effect: any): void {}
  itemEffectCommonEvent(target: any, effect: any): void {}
  makeSuccess(target: any): void {}
  applyItemUserEffect(target: any): void {}
  lukEffectRate(target: any): number {
    return null;
  }
  applyGlobal(): void {}
}
export class Game_ActionResult {
  constructor() {}
  clear(): void {}
  used: boolean;
  missed: boolean;
  evaded: boolean;
  physical: boolean;
  drain: boolean;
  critical: boolean;
  success: boolean;
  hpAffected: boolean;
  hpDamage: number;
  mpDamage: number;
  tpDamage: number;
  addedStates: undefined[];
  removedStates: undefined[];
  addedBuffs: undefined[];
  addedDebuffs: undefined[];
  removedBuffs: undefined[];
  addedStateObjects(): any {
    return null;
  }
  removedStateObjects(): any {
    return null;
  }
  isStatusAffected(): boolean {
    return null;
  }
  isHit(): boolean {
    return null;
  }
  isStateAdded(stateId: any): any {
    return null;
  }
  pushAddedState(stateId: any): void {}
  isStateRemoved(stateId: any): any {
    return null;
  }
  pushRemovedState(stateId: any): void {}
  isBuffAdded(paramId: any): any {
    return null;
  }
  pushAddedBuff(paramId: any): void {}
  isDebuffAdded(paramId: any): any {
    return null;
  }
  pushAddedDebuff(paramId: any): void {}
  isBuffRemoved(paramId: any): any {
    return null;
  }
  pushRemovedBuff(paramId: any): void {}
}
export class Game_BattlerBase {
  constructor() {}
  static TRAIT_ELEMENT_RATE: number;
  static TRAIT_DEBUFF_RATE: number;
  static TRAIT_STATE_RATE: number;
  static TRAIT_STATE_RESIST: number;
  static TRAIT_PARAM: number;
  static TRAIT_XPARAM: number;
  static TRAIT_SPARAM: number;
  static TRAIT_ATTACK_ELEMENT: number;
  static TRAIT_ATTACK_STATE: number;
  static TRAIT_ATTACK_SPEED: number;
  static TRAIT_ATTACK_TIMES: number;
  static TRAIT_STYPE_ADD: number;
  static TRAIT_STYPE_SEAL: number;
  static TRAIT_SKILL_ADD: number;
  static TRAIT_SKILL_SEAL: number;
  static TRAIT_EQUIP_WTYPE: number;
  static TRAIT_EQUIP_ATYPE: number;
  static TRAIT_EQUIP_LOCK: number;
  static TRAIT_EQUIP_SEAL: number;
  static TRAIT_SLOT_TYPE: number;
  static TRAIT_ACTION_PLUS: number;
  static TRAIT_SPECIAL_FLAG: number;
  static TRAIT_COLLAPSE_TYPE: number;
  static TRAIT_PARTY_ABILITY: number;
  static FLAG_ID_AUTO_BATTLE: number;
  static FLAG_ID_GUARD: number;
  static FLAG_ID_SUBSTITUTE: number;
  static FLAG_ID_PRESERVE_TP: number;
  static ICON_BUFF_START: number;
  static ICON_DEBUFF_START: number;
  initMembers(): void {}
  _hp: number;
  _mp: number;
  _tp: number;
  _hidden: boolean;
  clearParamPlus(): void {}
  _paramPlus: number[];
  clearStates(): void {}
  _states: undefined[];
  _stateTurns: {};
  eraseState(stateId: any): void {}
  isStateAffected(stateId: any): any {
    return null;
  }
  isDeathStateAffected(): any {
    return null;
  }
  deathStateId(): number {
    return null;
  }
  resetStateCounts(stateId: any): void {}
  isStateExpired(stateId: any): boolean {
    return null;
  }
  updateStateTurns(): void {}
  clearBuffs(): void {}
  _buffs: number[];
  _buffTurns: number[];
  eraseBuff(paramId: any): void {}
  buffLength(): any {
    return null;
  }
  buff(paramId: any): any {
    return null;
  }
  isBuffAffected(paramId: any): boolean {
    return null;
  }
  isDebuffAffected(paramId: any): boolean {
    return null;
  }
  isBuffOrDebuffAffected(paramId: any): boolean {
    return null;
  }
  isMaxBuffAffected(paramId: any): boolean {
    return null;
  }
  isMaxDebuffAffected(paramId: any): boolean {
    return null;
  }
  increaseBuff(paramId: any): void {}
  decreaseBuff(paramId: any): void {}
  overwriteBuffTurns(paramId: any, turns: any): void {}
  isBuffExpired(paramId: any): boolean {
    return null;
  }
  updateBuffTurns(): void {}
  die(): void {}
  revive(): void {}
  states(): any {
    return null;
  }
  stateIcons(): any {
    return null;
  }
  buffIcons(): any[] {
    return null;
  }
  buffIconIndex(buffLevel: any, paramId: any): any {
    return null;
  }
  allIcons(): any {
    return null;
  }
  traitObjects(): any {
    return null;
  }
  allTraits(): any {
    return null;
  }
  traits(code: any): any {
    return null;
  }
  traitsWithId(code: any, id: any): any {
    return null;
  }
  traitsPi(code: any, id: any): any {
    return null;
  }
  traitsSum(code: any, id: any): any {
    return null;
  }
  traitsSumAll(code: any): any {
    return null;
  }
  traitsSet(code: any): any {
    return null;
  }
  paramBase(paramId: any): number {
    return null;
  }
  paramPlus(paramId: any): any {
    return null;
  }
  paramMin(paramId: any): 0 | 1 {
    return null;
  }
  paramMax(paramId: any): 999999 | 9999 | 999 {
    return null;
  }
  paramRate(paramId: any): any {
    return null;
  }
  paramBuffRate(paramId: any): number {
    return null;
  }
  param(paramId: any): number {
    return null;
  }
  xparam(xparamId: any): any {
    return null;
  }
  sparam(sparamId: any): any {
    return null;
  }
  elementRate(elementId: any): any {
    return null;
  }
  debuffRate(paramId: any): any {
    return null;
  }
  stateRate(stateId: any): any {
    return null;
  }
  stateResistSet(): any {
    return null;
  }
  isStateResist(stateId: any): any {
    return null;
  }
  attackElements(): any {
    return null;
  }
  attackStates(): any {
    return null;
  }
  attackStatesRate(stateId: any): any {
    return null;
  }
  attackSpeed(): any {
    return null;
  }
  attackTimesAdd(): number {
    return null;
  }
  addedSkillTypes(): any {
    return null;
  }
  isSkillTypeSealed(stypeId: any): any {
    return null;
  }
  addedSkills(): any {
    return null;
  }
  isSkillSealed(skillId: any): any {
    return null;
  }
  isEquipWtypeOk(wtypeId: any): any {
    return null;
  }
  isEquipAtypeOk(atypeId: any): any {
    return null;
  }
  isEquipTypeLocked(etypeId: any): any {
    return null;
  }
  isEquipTypeSealed(etypeId: any): any {
    return null;
  }
  slotType(): any {
    return null;
  }
  isDualWield(): boolean {
    return null;
  }
  actionPlusSet(): any {
    return null;
  }
  specialFlag(flagId: any): any {
    return null;
  }
  collapseType(): any {
    return null;
  }
  partyAbility(abilityId: any): any {
    return null;
  }
  isAutoBattle(): any {
    return null;
  }
  isGuard(): any {
    return null;
  }
  isSubstitute(): any {
    return null;
  }
  isPreserveTp(): any {
    return null;
  }
  addParam(paramId: any, value: any): void {}
  setHp(hp: any): void {}
  setMp(mp: any): void {}
  setTp(tp: any): void {}
  maxTp(): number {
    return null;
  }
  refresh(): void {}
  recoverAll(): void {}
  hpRate(): number {
    return null;
  }
  mpRate(): number {
    return null;
  }
  tpRate(): number {
    return null;
  }
  hide(): void {}
  appear(): void {}
  isHidden(): any {
    return null;
  }
  isAppeared(): boolean {
    return null;
  }
  isDead(): any {
    return null;
  }
  isAlive(): boolean {
    return null;
  }
  isDying(): boolean {
    return null;
  }
  isRestricted(): boolean {
    return null;
  }
  canInput(): boolean {
    return null;
  }
  canMove(): boolean {
    return null;
  }
  isConfused(): boolean {
    return null;
  }
  confusionLevel(): any {
    return null;
  }
  isActor(): this is Game_Actor {
    return null;
  }
  isEnemy(): this is Game_Enemy {
    return null;
  }
  sortStates(): void {}
  restriction(): any {
    return null;
  }
  addNewState(stateId: any): void {}
  onRestrict(): void {}
  mostImportantStateText(): any {
    return null;
  }
  stateMotionIndex(): any {
    return null;
  }
  stateOverlayIndex(): any {
    return null;
  }
  isSkillWtypeOk(skill: any): boolean {
    return null;
  }
  skillMpCost(skill: any): number {
    return null;
  }
  skillTpCost(skill: any): any {
    return null;
  }
  canPaySkillCost(skill: any): boolean {
    return null;
  }
  paySkillCost(skill: any): void {}
  isOccasionOk(item: any): boolean {
    return null;
  }
  meetsUsableItemConditions(item: any): any {
    return null;
  }
  meetsSkillConditions(skill: any): boolean {
    return null;
  }
  meetsItemConditions(item: any): any {
    return null;
  }
  canUse(item: any): any {
    return null;
  }
  canEquip(item: any): any {
    return null;
  }
  canEquipWeapon(item: any): boolean {
    return null;
  }
  canEquipArmor(item: any): boolean {
    return null;
  }
  attackSkillId(): number {
    return null;
  }
  guardSkillId(): number {
    return null;
  }
  canAttack(): any {
    return null;
  }
  canGuard(): any {
    return null;
  }
  readonly hp: any;
  readonly mp: any;
  readonly tp: any;
  readonly mhp: any;
  readonly mmp: any;
  readonly atk: any;
  readonly def: any;
  readonly mat: any;
  readonly mdf: any;
  readonly agi: any;
  readonly luk: any;
  readonly hit: any;
  readonly eva: any;
  readonly cri: any;
  readonly cev: any;
  readonly mev: any;
  readonly mrf: any;
  readonly cnt: any;
  readonly hrg: any;
  readonly mrg: any;
  readonly trg: any;
  readonly tgr: any;
  readonly grd: any;
  readonly rec: any;
  readonly pha: any;
  readonly mcr: any;
  readonly tcr: any;
  readonly pdr: any;
  readonly mdr: any;
  readonly fdr: any;
  readonly exr: any;
}
export class Game_Battler extends Game_BattlerBase {
  constructor() {
    super();
  }
  initMembers(): void {}
  _actions: undefined[];
  _speed: number;
  _result: Game_ActionResult;
  _actionState: string;
  _lastTargetIndex: number;
  _animations: undefined[];
  _damagePopup: boolean;
  _effectType: any;
  _motionType: any;
  _weaponImageId: number;
  _motionRefresh: boolean;
  _selected: boolean;
  clearAnimations(): void {}
  clearDamagePopup(): void {}
  clearWeaponAnimation(): void {}
  clearEffect(): void {}
  clearMotion(): void {}
  requestEffect(effectType: any): void {}
  requestMotion(motionType: any): void {}
  requestMotionRefresh(): void {}
  select(): void {}
  deselect(): void {}
  isAnimationRequested(): boolean {
    return null;
  }
  isDamagePopupRequested(): any {
    return null;
  }
  isEffectRequested(): boolean {
    return null;
  }
  isMotionRequested(): boolean {
    return null;
  }
  isWeaponAnimationRequested(): boolean {
    return null;
  }
  isMotionRefreshRequested(): any {
    return null;
  }
  isSelected(): any {
    return null;
  }
  effectType(): any {
    return null;
  }
  motionType(): any {
    return null;
  }
  weaponImageId(): any {
    return null;
  }
  shiftAnimation(): any {
    return null;
  }
  startAnimation(animationId: any, mirror: any, delay: any): void {}
  startDamagePopup(): void {}
  startWeaponAnimation(weaponImageId: any): void {}
  action(index: any): any {
    return null;
  }
  setAction(index: any, action: any): void {}
  numActions(): any {
    return null;
  }
  clearActions(): void {}
  clearResult(): void {}
  refresh(): void {}
  addState(stateId: any): void {}
  isStateAddable(stateId: any): boolean {
    return null;
  }
  isStateRestrict(stateId: any): any {
    return null;
  }
  onRestrict(): void {}
  removeState(stateId: any): void {}
  escape(): void {}
  addBuff(paramId: any, turns: any): void {}
  addDebuff(paramId: any, turns: any): void {}
  removeBuff(paramId: any): void {}
  removeBattleStates(): void {}
  removeAllBuffs(): void {}
  removeStatesAuto(timing: any): void {}
  removeBuffsAuto(): void {}
  removeStatesByDamage(): void {}
  makeActionTimes(): any {
    return null;
  }
  makeActions(): void {}
  makeSpeed(): void {}
  currentAction(): any {
    return null;
  }
  removeCurrentAction(): void {}
  setLastTarget(target: any): void {}
  forceAction(skillId: any, targetIndex: any): void {}
  useItem(item: any): void {}
  consumeItem(item: any): void {}
  gainHp(value: any): void {}
  gainMp(value: any): void {}
  gainTp(value: any): void {}
  gainSilentTp(value: any): void {}
  initTp(): void {}
  clearTp(): void {}
  chargeTpByDamage(damageRate: any): void {}
  regenerateHp(): void {}
  maxSlipDamage(): any {
    return null;
  }
  regenerateMp(): void {}
  regenerateTp(): void {}
  regenerateAll(): void {}
  onBattleStart(): void {}
  onAllActionsEnd(): void {}
  onTurnEnd(): void {}
  onBattleEnd(): void {}
  onDamage(value: any): void {}
  setActionState(actionState: any): void {}
  isUndecided(): boolean {
    return null;
  }
  isInputting(): boolean {
    return null;
  }
  isWaiting(): boolean {
    return null;
  }
  isActing(): boolean {
    return null;
  }
  isChanting(): any {
    return null;
  }
  isGuardWaiting(): any {
    return null;
  }
  performActionStart(action: any): void {}
  performAction(action: any): void {}
  performActionEnd(): void {}
  performDamage(): void {}
  performMiss(): void {}
  performRecovery(): void {}
  performEvasion(): void {}
  performMagicEvasion(): void {}
  performCounter(): void {}
  performReflection(): void {}
  performSubstitute(target: any): void {}
  performCollapse(): void {}
}
export class Game_Actor extends Game_Battler {
  constructor(actorId: any) {
    super();
  }
  initMembers(): void {}
  _actorId: number;
  _name: string;
  _nickname: string;
  _classId: number;
  _level: number;
  _characterName: string;
  _characterIndex: number;
  _faceName: string;
  _faceIndex: number;
  _battlerName: string;
  _exp: {};
  _skills: undefined[];
  _equips: undefined[];
  _actionInputIndex: number;
  _lastMenuSkill: Game_Item;
  _lastBattleSkill: Game_Item;
  _lastCommandSymbol: string;
  setup(actorId: any): void {}
  _profile: any;
  actorId(): any {
    return null;
  }
  actor(): DataActor {
    return null;
  }
  name(): any {
    return null;
  }
  setName(name: any): void {}
  nickname(): any {
    return null;
  }
  setNickname(nickname: any): void {}
  profile(): any {
    return null;
  }
  setProfile(profile: any): void {}
  characterName(): any {
    return null;
  }
  characterIndex(): any {
    return null;
  }
  faceName(): any {
    return null;
  }
  faceIndex(): any {
    return null;
  }
  battlerName(): any {
    return null;
  }
  clearStates(): void {}
  _stateSteps: {};
  eraseState(stateId: any): void {}
  resetStateCounts(stateId: any): void {}
  initImages(): void {}
  expForLevel(level: any): number {
    return null;
  }
  initExp(): void {}
  currentExp(): any {
    return null;
  }
  currentLevelExp(): any {
    return null;
  }
  nextLevelExp(): any {
    return null;
  }
  nextRequiredExp(): number {
    return null;
  }
  maxLevel(): any {
    return null;
  }
  isMaxLevel(): boolean {
    return null;
  }
  initSkills(): void {}
  initEquips(equips: any): void {}
  equipSlots(): any[] {
    return null;
  }
  equips(): any {
    return null;
  }
  weapons(): any {
    return null;
  }
  armors(): any {
    return null;
  }
  hasWeapon(weapon: any): any {
    return null;
  }
  hasArmor(armor: any): any {
    return null;
  }
  isEquipChangeOk(slotId: any): boolean {
    return null;
  }
  changeEquip(slotId: any, item: any): void {}
  forceChangeEquip(slotId: any, item: any): void {}
  tradeItemWithParty(newItem: any, oldItem: any): boolean {
    return null;
  }
  changeEquipById(etypeId: any, itemId: any): void {}
  isEquipped(item: any): any {
    return null;
  }
  discardEquip(item: any): void {}
  releaseUnequippableItems(forcing: any): void {}
  clearEquipments(): void {}
  optimizeEquipments(): void {}
  bestEquipItem(slotId: any): any {
    return null;
  }
  calcEquipItemPerformance(item: any): any {
    return null;
  }
  isSkillWtypeOk(skill: any): boolean {
    return null;
  }
  isWtypeEquipped(wtypeId: any): any {
    return null;
  }
  refresh(): void {}
  isActor(): boolean {
    return null;
  }
  friendsUnit(): any {
    return null;
  }
  opponentsUnit(): any {
    return null;
  }
  isBattleMember(): any {
    return null;
  }
  isFormationChangeOk(): boolean {
    return null;
  }
  currentClass(): any {
    return null;
  }
  isClass(gameClass: any): boolean {
    return null;
  }
  skills(): any[] {
    return null;
  }
  usableSkills(): any {
    return null;
  }
  traitObjects(): any {
    return null;
  }
  attackElements(): any {
    return null;
  }
  hasNoWeapons(): boolean {
    return null;
  }
  bareHandsElementId(): number {
    return null;
  }
  paramMax(paramId: any): any {
    return null;
  }
  paramBase(paramId: any): any {
    return null;
  }
  paramPlus(paramId: any): any {
    return null;
  }
  attackAnimationId1(): any {
    return null;
  }
  attackAnimationId2(): any {
    return null;
  }
  bareHandsAnimationId(): number {
    return null;
  }
  changeExp(exp: any, show: any): void {}
  levelUp(): void {}
  levelDown(): void {}
  findNewSkills(lastSkills: any): any {
    return null;
  }
  displayLevelUp(newSkills: any): void {}
  gainExp(exp: any): void {}
  finalExpRate(): number {
    return null;
  }
  benchMembersExpRate(): 0 | 1 {
    return null;
  }
  shouldDisplayLevelUp(): boolean {
    return null;
  }
  changeLevel(level: any, show: any): void {}
  learnSkill(skillId: any): void {}
  forgetSkill(skillId: any): void {}
  isLearnedSkill(skillId: any): any {
    return null;
  }
  hasSkill(skillId: any): any {
    return null;
  }
  changeClass(classId: any, keepExp: any): void {}
  setCharacterImage(characterName: any, characterIndex: any): void {}
  setFaceImage(faceName: any, faceIndex: any): void {}
  setBattlerImage(battlerName: any): void {}
  isSpriteVisible(): any {
    return null;
  }
  startAnimation(animationId: any, mirror: any, delay: any): void {}
  performActionStart(action: any): void {}
  performAction(action: any): void {}
  performActionEnd(): void {}
  performAttack(): void {}
  performDamage(): void {}
  performEvasion(): void {}
  performMagicEvasion(): void {}
  performCounter(): void {}
  performCollapse(): void {}
  performVictory(): void {}
  performEscape(): void {}
  makeActionList(): any[] {
    return null;
  }
  makeAutoBattleActions(): void {}
  makeConfusionActions(): void {}
  makeActions(): void {}
  onPlayerWalk(): void {}
  updateStateSteps(state: any): void {}
  showAddedStates(): void {}
  showRemovedStates(): void {}
  stepsForTurn(): number {
    return null;
  }
  turnEndOnMap(): void {}
  checkFloorEffect(): void {}
  executeFloorDamage(): void {}
  basicFloorDamage(): number {
    return null;
  }
  maxFloorDamage(): any {
    return null;
  }
  performMapDamage(): void {}
  clearActions(): void {}
  inputtingAction(): any {
    return null;
  }
  selectNextCommand(): boolean {
    return null;
  }
  selectPreviousCommand(): boolean {
    return null;
  }
  lastMenuSkill(): any {
    return null;
  }
  setLastMenuSkill(skill: any): void {}
  lastBattleSkill(): any {
    return null;
  }
  setLastBattleSkill(skill: any): void {}
  lastCommandSymbol(): any {
    return null;
  }
  setLastCommandSymbol(symbol: any): void {}
  testEscape(item: any): any {
    return null;
  }
  meetsUsableItemConditions(item: any): any {
    return null;
  }
  readonly level: any;
}
export class Game_Enemy extends Game_Battler {
  constructor(enemyId: any, x: any, y: any) {
    super();
  }
  initMembers(): void {}
  _enemyId: number;
  _letter: string;
  _plural: boolean;
  _screenX: number;
  _screenY: number;
  setup(enemyId: any, x: any, y: any): void {}
  isEnemy(): boolean {
    return null;
  }
  friendsUnit(): any {
    return null;
  }
  opponentsUnit(): any {
    return null;
  }
  isBattleMember(): boolean {
    return null;
  }
  enemyId(): any {
    return null;
  }
  enemy(): DataEnemy {
    return null;
  }
  traitObjects(): any {
    return null;
  }
  paramBase(paramId: any): any {
    return null;
  }
  exp(): any {
    return null;
  }
  gold(): any {
    return null;
  }
  makeDropItems(): any {
    return null;
  }
  dropItemRate(): 2 | 1 {
    return null;
  }
  itemObject(kind: any, dataId: any): any {
    return null;
  }
  isSpriteVisible(): boolean {
    return null;
  }
  screenX(): any {
    return null;
  }
  screenY(): any {
    return null;
  }
  battlerName(): any {
    return null;
  }
  battlerHue(): any {
    return null;
  }
  originalName(): any {
    return null;
  }
  name(): any {
    return null;
  }
  isLetterEmpty(): boolean {
    return null;
  }
  setLetter(letter: any): void {}
  setPlural(plural: any): void {}
  performActionStart(action: any): void {}
  performAction(action: any): void {}
  performActionEnd(): void {}
  performDamage(): void {}
  performCollapse(): void {}
  transform(enemyId: any): void {}
  meetsCondition(action: any): any {
    return null;
  }
  meetsTurnCondition(param1: any, param2: any): boolean {
    return null;
  }
  meetsHpCondition(param1: any, param2: any): boolean {
    return null;
  }
  meetsMpCondition(param1: any, param2: any): boolean {
    return null;
  }
  meetsStateCondition(param: any): any {
    return null;
  }
  meetsPartyLevelCondition(param: any): boolean {
    return null;
  }
  meetsSwitchCondition(param: any): any {
    return null;
  }
  isActionValid(action: any): any {
    return null;
  }
  selectAction(actionList: any, ratingZero: any): any {
    return null;
  }
  selectAllActions(actionList: any): void {}
  makeActions(): void {}
}
export class Game_Actors {
  constructor() {}
  _data: undefined[];
}
export class Game_Unit {
  constructor() {}
  _inBattle: boolean;
  inBattle(): any {
    return null;
  }
  members(): any[] {
    return null;
  }
  aliveMembers(): any {
    return null;
  }
  deadMembers(): any {
    return null;
  }
  movableMembers(): any {
    return null;
  }
  clearActions(): any {
    return null;
  }
  agility(): number {
    return null;
  }
  tgrSum(): any {
    return null;
  }
  randomTarget(): any {
    return null;
  }
  randomDeadTarget(): any {
    return null;
  }
  smoothTarget(index: any): any {
    return null;
  }
  smoothDeadTarget(index: any): any {
    return null;
  }
  clearResults(): void {}
  onBattleStart(): void {}
  onBattleEnd(): void {}
  makeActions(): void {}
  select(activeMember: any): void {}
  isAllDead(): boolean {
    return null;
  }
  substituteBattler(): any {
    return null;
  }
}
export class Game_Party extends Game_Unit {
  constructor() {
    super();
  }
  static ABILITY_ENCOUNTER_HALF: number;
  static ABILITY_ENCOUNTER_NONE: number;
  static ABILITY_CANCEL_SURPRISE: number;
  static ABILITY_RAISE_PREEMPTIVE: number;
  static ABILITY_GOLD_DOUBLE: number;
  static ABILITY_DROP_ITEM_DOUBLE: number;
  _gold: number;
  _steps: number;
  _lastItem: Game_Item;
  _menuActorId: number;
  _targetActorId: number;
  _actors: undefined[];
  initAllItems(): void {}
  _items: {};
  _weapons: {};
  _armors: {};
  exists(): boolean {
    return null;
  }
  size(): any {
    return null;
  }
  isEmpty(): boolean {
    return null;
  }
  allMembers(): any {
    return null;
  }
  battleMembers(): any {
    return null;
  }
  maxBattleMembers(): number {
    return null;
  }
  leader(): any {
    return null;
  }
  reviveBattleMembers(): void {}
  armors(): any[] {
    return null;
  }
  equipItems(): any {
    return null;
  }
  allItems(): any {
    return null;
  }
  itemContainer(item: any): any {
    return null;
  }
  setupStartingMembers(): void {}
  setupBattleTest(): void {}
  setupBattleTestMembers(): void {}
  setupBattleTestItems(): void {}
  highestLevel(): any {
    return null;
  }
  addActor(actorId: any): void {}
  removeActor(actorId: any): void {}
  gold(): any {
    return null;
  }
  gainGold(amount: any): void {}
  loseGold(amount: any): void {}
  maxGold(): number {
    return null;
  }
  steps(): any {
    return null;
  }
  increaseSteps(): void {}
  numItems(item: any): any {
    return null;
  }
  maxItems(item: any): number {
    return null;
  }
  hasMaxItems(item: any): boolean {
    return null;
  }
  hasItem(item: any, includeEquip: any): boolean {
    return null;
  }
  isAnyMemberEquipped(item: any): any {
    return null;
  }
  gainItem(item: any, amount: any, includeEquip: any): void {}
  discardMembersEquip(item: any, amount: any): void {}
  loseItem(item: any, amount: any, includeEquip: any): void {}
  consumeItem(item: any): void {}
  canUse(item: any): any {
    return null;
  }
  canInput(): any {
    return null;
  }
  isAllDead(): any {
    return null;
  }
  onPlayerWalk(): void {}
  menuActor(): any {
    return null;
  }
  setMenuActor(actor: any): void {}
  makeMenuActorNext(): void {}
  makeMenuActorPrevious(): void {}
  targetActor(): any {
    return null;
  }
  setTargetActor(actor: any): void {}
  lastItem(): any {
    return null;
  }
  setLastItem(item: any): void {}
  swapOrder(index1: any, index2: any): void {}
  charactersForSavefile(): any {
    return null;
  }
  facesForSavefile(): any {
    return null;
  }
  partyAbility(abilityId: any): any {
    return null;
  }
  hasEncounterHalf(): any {
    return null;
  }
  hasEncounterNone(): any {
    return null;
  }
  hasCancelSurprise(): any {
    return null;
  }
  hasRaisePreemptive(): any {
    return null;
  }
  hasGoldDouble(): any {
    return null;
  }
  hasDropItemDouble(): any {
    return null;
  }
  ratePreemptive(troopAgi: any): number {
    return null;
  }
  rateSurprise(troopAgi: any): number {
    return null;
  }
  performVictory(): void {}
  performEscape(): void {}
  removeBattleStates(): void {}
  requestMotionRefresh(): void {}
}
export class Game_Troop extends Game_Unit {
  constructor() {
    super();
  }
  static LETTER_TABLE_HALF: string[];
  static LETTER_TABLE_FULL: string[];
  _interpreter: Game_Interpreter;
  isEventRunning(): any {
    return null;
  }
  updateInterpreter(): void {}
  turnCount(): any {
    return null;
  }
  clear(): void {}
  _troopId: number;
  _eventFlags: {};
  _enemies: undefined[];
  _turnCount: number;
  _namesCount: {};
  troop(): any {
    return null;
  }
  setup(troopId: any): void {}
  makeUniqueNames(): void {}
  letterTable(): string[] {
    return null;
  }
  enemyNames(): any[] {
    return null;
  }
  meetsConditions(page: any): boolean {
    return null;
  }
  setupBattleEvent(): void {}
  increaseTurn(): void {}
  expTotal(): any {
    return null;
  }
  goldTotal(): number {
    return null;
  }
  goldRate(): 2 | 1 {
    return null;
  }
  makeDropItems(): any {
    return null;
  }
}
export class Game_Map {
  constructor() {}
  _interpreter: Game_Interpreter;
  _mapId: number;
  _tilesetId: number;
  _events: undefined[];
  _commonEvents: undefined[];
  _vehicles: undefined[];
  _displayX: number;
  _displayY: number;
  _nameDisplay: boolean;
  _scrollDirection: number;
  _scrollRest: number;
  _scrollSpeed: number;
  _parallaxName: string;
  _parallaxZero: boolean;
  _parallaxLoopX: boolean;
  _parallaxLoopY: boolean;
  _parallaxSx: number;
  _parallaxSy: number;
  _parallaxX: number;
  _parallaxY: number;
  _battleback1Name: any;
  _battleback2Name: any;
  setup(mapId: any): void {}
  _needsRefresh: boolean;
  isEventRunning(): any {
    return null;
  }
  tileWidth(): number {
    return null;
  }
  tileHeight(): number {
    return null;
  }
  mapId(): any {
    return null;
  }
  tilesetId(): any {
    return null;
  }
  displayX(): any {
    return null;
  }
  displayY(): any {
    return null;
  }
  parallaxName(): any {
    return null;
  }
  battleback1Name(): any {
    return null;
  }
  battleback2Name(): any {
    return null;
  }
  requestRefresh(mapId: any): void {}
  isNameDisplayEnabled(): any {
    return null;
  }
  disableNameDisplay(): void {}
  enableNameDisplay(): void {}
  createVehicles(): void {}
  refereshVehicles(): void {}
  vehicles(): any {
    return null;
  }
  vehicle(type: any): any {
    return null;
  }
  boat(): any {
    return null;
  }
  ship(): any {
    return null;
  }
  airship(): any {
    return null;
  }
  setupEvents(): void {}
  events(): any {
    return null;
  }
  event(eventId: any): any {
    return null;
  }
  eraseEvent(eventId: any): void {}
  parallelCommonEvents(): any {
    return null;
  }
  setupScroll(): void {}
  setupParallax(): void {}
  setupBattleback(): void {}
  setDisplayPos(x: any, y: any): void {}
  parallaxOx(): number {
    return null;
  }
  parallaxOy(): number {
    return null;
  }
  tileset(): any {
    return null;
  }
  tilesetFlags(): any {
    return null;
  }
  displayName(): any {
    return null;
  }
  width(): any {
    return null;
  }
  height(): any {
    return null;
  }
  isLoopHorizontal(): boolean {
    return null;
  }
  isLoopVertical(): boolean {
    return null;
  }
  isDashDisabled(): any {
    return null;
  }
  encounterList(): any {
    return null;
  }
  encounterStep(): any {
    return null;
  }
  isOverworld(): boolean {
    return null;
  }
  screenTileX(): number {
    return null;
  }
  screenTileY(): number {
    return null;
  }
  adjustX(x: any): any {
    return null;
  }
  adjustY(y: any): any {
    return null;
  }
  roundX(x: any): any {
    return null;
  }
  roundY(y: any): any {
    return null;
  }
  xWithDirection(x: any, d: any): any {
    return null;
  }
  yWithDirection(y: any, d: any): any {
    return null;
  }
  roundXWithDirection(x: any, d: any): any {
    return null;
  }
  roundYWithDirection(y: any, d: any): any {
    return null;
  }
  deltaX(x1: any, x2: any): number {
    return null;
  }
  deltaY(y1: any, y2: any): number {
    return null;
  }
  distance(x1: any, y1: any, x2: any, y2: any): number {
    return null;
  }
  canvasToMapX(x: any): any {
    return null;
  }
  canvasToMapY(y: any): any {
    return null;
  }
  autoplay(): void {}
  refreshIfNeeded(): void {}
  refresh(): void {}
  refreshTileEvents(): void {}
  tileEvents: any;
  eventsXy(x: any, y: any): any {
    return null;
  }
  eventsXyNt(x: any, y: any): any {
    return null;
  }
  tileEventsXy(x: any, y: any): any {
    return null;
  }
  eventIdXy(x: any, y: any): any {
    return null;
  }
  scrollDown(distance: any): void {}
  scrollLeft(distance: any): void {}
  scrollRight(distance: any): void {}
  scrollUp(distance: any): void {}
  isValid(x: any, y: any): boolean {
    return null;
  }
  checkPassage(x: any, y: any, bit: any): boolean {
    return null;
  }
  tileId(x: any, y: any, z: any): any {
    return null;
  }
  layeredTiles(x: any, y: any): any[] {
    return null;
  }
  allTiles(x: any, y: any): any {
    return null;
  }
  autotileType(x: any, y: any, z: any): number {
    return null;
  }
  isPassable(x: any, y: any, d: any): any {
    return null;
  }
  isBoatPassable(x: any, y: any): any {
    return null;
  }
  isShipPassable(x: any, y: any): any {
    return null;
  }
  isAirshipLandOk(x: any, y: any): any {
    return null;
  }
  checkLayeredTilesFlags(x: any, y: any, bit: any): any {
    return null;
  }
  isLadder(x: any, y: any): any {
    return null;
  }
  isBush(x: any, y: any): any {
    return null;
  }
  isCounter(x: any, y: any): any {
    return null;
  }
  isDamageFloor(x: any, y: any): any {
    return null;
  }
  terrainTag(x: any, y: any): number {
    return null;
  }
  regionId(x: any, y: any): any {
    return null;
  }
  startScroll(direction: any, distance: any, speed: any): void {}
  isScrolling(): boolean {
    return null;
  }
  update(sceneActive: any): void {}
  updateScroll(): void {}
  scrollDistance(): number {
    return null;
  }
  doScroll(direction: any, distance: any): void {}
  updateEvents(): void {}
  updateVehicles(): void {}
  updateParallax(): void {}
  changeTileset(tilesetId: any): void {}
  changeBattleback(battleback1Name: any, battleback2Name: any): void {}
  changeParallax(name: any, loopX: any, loopY: any, sx: any, sy: any): void {}
  updateInterpreter(): void {}
  unlockEvent(eventId: any): void {}
  setupStartingEvent(): boolean {
    return null;
  }
  setupTestEvent(): boolean {
    return null;
  }
  setupStartingMapEvent(): boolean {
    return null;
  }
  setupAutorunCommonEvent(): boolean {
    return null;
  }
  isAnyEventStarting(): any {
    return null;
  }
}
export class Game_CommonEvent {
  constructor(commonEventId: any) {}
  _commonEventId: any;
  event(): any {
    return null;
  }
  refresh(): void {}
  isActive(): any {
    return null;
  }
  update(): void {}
}
export class Game_CharacterBase {
  constructor() {}
  initMembers(): void {}
  _x: number;
  _y: number;
  _realX: number;
  _realY: number;
  _moveSpeed: number;
  _moveFrequency: number;
  _opacity: number;
  _blendMode: number;
  _direction: number;
  _pattern: number;
  _priorityType: number;
  _tileId: number;
  _characterName: string;
  _characterIndex: number;
  _isObjectCharacter: boolean;
  _walkAnime: boolean;
  _stepAnime: boolean;
  _directionFix: boolean;
  _through: boolean;
  _transparent: boolean;
  _bushDepth: number;
  _animationId: number;
  _balloonId: number;
  _animationPlaying: boolean;
  _balloonPlaying: boolean;
  _animationCount: number;
  _stopCount: number;
  _jumpCount: number;
  _jumpPeak: number;
  _movementSuccess: boolean;
  pos(x: any, y: any): boolean {
    return null;
  }
  posNt(x: any, y: any): boolean {
    return null;
  }
  moveSpeed(): any {
    return null;
  }
  setMoveSpeed(moveSpeed: any): void {}
  moveFrequency(): any {
    return null;
  }
  setMoveFrequency(moveFrequency: any): void {}
  opacity(): any {
    return null;
  }
  setOpacity(opacity: any): void {}
  blendMode(): any {
    return null;
  }
  setBlendMode(blendMode: any): void {}
  isNormalPriority(): boolean {
    return null;
  }
  setPriorityType(priorityType: any): void {}
  isMoving(): boolean {
    return null;
  }
  isJumping(): boolean {
    return null;
  }
  jumpHeight(): number {
    return null;
  }
  isStopping(): boolean {
    return null;
  }
  checkStop(threshold: any): boolean {
    return null;
  }
  resetStopCount(): void {}
  realMoveSpeed(): any {
    return null;
  }
  distancePerFrame(): number {
    return null;
  }
  isDashing(): boolean {
    return null;
  }
  isDebugThrough(): boolean {
    return null;
  }
  straighten(): void {}
  reverseDir(d: any): number {
    return null;
  }
  canPass(x: any, y: any, d: any): boolean {
    return null;
  }
  canPassDiagonally(x: any, y: any, horz: any, vert: any): boolean {
    return null;
  }
  isMapPassable(x: any, y: any, d: any): any {
    return null;
  }
  isCollidedWithCharacters(x: any, y: any): any {
    return null;
  }
  isCollidedWithEvents(x: any, y: any): any {
    return null;
  }
  isCollidedWithVehicles(x: any, y: any): any {
    return null;
  }
  setPosition(x: any, y: any): void {}
  copyPosition(character: any): void {}
  locate(x: any, y: any): void {}
  direction(): any {
    return null;
  }
  setDirection(d: any): void {}
  isTile(): boolean {
    return null;
  }
  isObjectCharacter(): any {
    return null;
  }
  shiftY(): 0 | 6 {
    return null;
  }
  scrolledX(): any {
    return null;
  }
  scrolledY(): any {
    return null;
  }
  screenX(): number {
    return null;
  }
  screenY(): number {
    return null;
  }
  screenZ(): number {
    return null;
  }
  isNearTheScreen(): boolean {
    return null;
  }
  update(): void {}
  updateStop(): void {}
  updateJump(): void {}
  updateMove(): void {}
  updateAnimation(): void {}
  animationWait(): number {
    return null;
  }
  updateAnimationCount(): void {}
  updatePattern(): void {}
  maxPattern(): number {
    return null;
  }
  pattern(): any {
    return null;
  }
  setPattern(pattern: any): void {}
  isOriginalPattern(): boolean {
    return null;
  }
  resetPattern(): void {}
  refreshBushDepth(): void {}
  isOnLadder(): any {
    return null;
  }
  isOnBush(): any {
    return null;
  }
  terrainTag(): any {
    return null;
  }
  regionId(): any {
    return null;
  }
  increaseSteps(): void {}
  characterName(): any {
    return null;
  }
  characterIndex(): any {
    return null;
  }
  setImage(characterName: any, characterIndex: any): void {}
  setTileImage(tileId: any): void {}
  checkEventTriggerTouchFront(d: any): void {}
  checkEventTriggerTouch(x: any, y: any): boolean {
    return null;
  }
  isMovementSucceeded(x: any, y: any): any {
    return null;
  }
  setMovementSuccess(success: any): void {}
  moveStraight(d: any): void {}
  moveDiagonally(horz: any, vert: any): void {}
  jump(xPlus: any, yPlus: any): void {}
  hasWalkAnime(): any {
    return null;
  }
  setWalkAnime(walkAnime: any): void {}
  hasStepAnime(): any {
    return null;
  }
  setStepAnime(stepAnime: any): void {}
  isDirectionFixed(): any {
    return null;
  }
  setDirectionFix(directionFix: any): void {}
  isThrough(): any {
    return null;
  }
  setThrough(through: any): void {}
  isTransparent(): any {
    return null;
  }
  bushDepth(): any {
    return null;
  }
  setTransparent(transparent: any): void {}
  requestAnimation(animationId: any): void {}
  requestBalloon(balloonId: any): void {}
  animationId(): any {
    return null;
  }
  balloonId(): any {
    return null;
  }
  startAnimation(): void {}
  startBalloon(): void {}
  isAnimationPlaying(): any {
    return null;
  }
  isBalloonPlaying(): any {
    return null;
  }
  endAnimation(): void {}
  endBalloon(): void {}
  readonly x: any;
  readonly y: any;
}
export class Game_Character extends Game_CharacterBase {
  constructor() {
    super();
  }
  static ROUTE_END: number;
  static ROUTE_MOVE_DOWN: number;
  static ROUTE_MOVE_LEFT: number;
  static ROUTE_MOVE_RIGHT: number;
  static ROUTE_MOVE_UP: number;
  static ROUTE_MOVE_LOWER_L: number;
  static ROUTE_MOVE_LOWER_R: number;
  static ROUTE_MOVE_UPPER_L: number;
  static ROUTE_MOVE_UPPER_R: number;
  static ROUTE_MOVE_RANDOM: number;
  static ROUTE_MOVE_TOWARD: number;
  static ROUTE_MOVE_AWAY: number;
  static ROUTE_MOVE_FORWARD: number;
  static ROUTE_MOVE_BACKWARD: number;
  static ROUTE_JUMP: number;
  static ROUTE_WAIT: number;
  static ROUTE_TURN_DOWN: number;
  static ROUTE_TURN_LEFT: number;
  static ROUTE_TURN_RIGHT: number;
  static ROUTE_TURN_UP: number;
  static ROUTE_TURN_90D_R: number;
  static ROUTE_TURN_90D_L: number;
  static ROUTE_TURN_180D: number;
  static ROUTE_TURN_90D_R_L: number;
  static ROUTE_TURN_RANDOM: number;
  static ROUTE_TURN_TOWARD: number;
  static ROUTE_TURN_AWAY: number;
  static ROUTE_SWITCH_ON: number;
  static ROUTE_SWITCH_OFF: number;
  static ROUTE_CHANGE_SPEED: number;
  static ROUTE_CHANGE_FREQ: number;
  static ROUTE_WALK_ANIME_ON: number;
  static ROUTE_WALK_ANIME_OFF: number;
  static ROUTE_STEP_ANIME_ON: number;
  static ROUTE_STEP_ANIME_OFF: number;
  static ROUTE_DIR_FIX_ON: number;
  static ROUTE_DIR_FIX_OFF: number;
  static ROUTE_THROUGH_ON: number;
  static ROUTE_THROUGH_OFF: number;
  static ROUTE_TRANSPARENT_ON: number;
  static ROUTE_TRANSPARENT_OFF: number;
  static ROUTE_CHANGE_IMAGE: number;
  static ROUTE_CHANGE_OPACITY: number;
  static ROUTE_CHANGE_BLEND_MODE: number;
  static ROUTE_PLAY_SE: number;
  static ROUTE_SCRIPT: number;
  initMembers(): void {}
  _moveRouteForcing: boolean;
  _moveRoute: any;
  _moveRouteIndex: number;
  _originalMoveRoute: any;
  _originalMoveRouteIndex: number;
  _waitCount: number;
  memorizeMoveRoute(): void {}
  restoreMoveRoute(): void {}
  isMoveRouteForcing(): any {
    return null;
  }
  setMoveRoute(moveRoute: any): void {}
  forceMoveRoute(moveRoute: any): void {}
  updateStop(): void {}
  updateRoutineMove(): void {}
  processMoveCommand(command: any): void {}
  deltaXFrom(x: any): any {
    return null;
  }
  deltaYFrom(y: any): any {
    return null;
  }
  moveRandom(): void {}
  moveTowardCharacter(character: any): void {}
  moveAwayFromCharacter(character: any): void {}
  turnTowardCharacter(character: any): void {}
  turnAwayFromCharacter(character: any): void {}
  turnTowardPlayer(): void {}
  turnAwayFromPlayer(): void {}
  moveTowardPlayer(): void {}
  moveAwayFromPlayer(): void {}
  moveForward(): void {}
  moveBackward(): void {}
  processRouteEnd(): void {}
  advanceMoveRouteIndex(): void {}
  turnRight90(): void {}
  turnLeft90(): void {}
  turn180(): void {}
  turnRightOrLeft90(): void {}
  turnRandom(): void {}
  swap(character: any): void {}
  findDirectionTo(goalX: any, goalY: any): 0 | 2 | 4 | 6 | 8 {
    return null;
  }
}
export class Game_Player extends Game_Character {
  constructor() {
    super();
  }
  initMembers(): void {}
  _vehicleType: string;
  _vehicleGettingOn: boolean;
  _vehicleGettingOff: boolean;
  _dashing: boolean;
  _needsMapReload: boolean;
  _transferring: boolean;
  _newMapId: number;
  _newX: number;
  _newY: number;
  _newDirection: number;
  _fadeType: number;
  _followers: Game_Followers;
  _encounterCount: number;
  clearTransferInfo(): void {}
  followers(): any {
    return null;
  }
  refresh(): void {}
  isStopping(): any {
    return null;
  }
  reserveTransfer(mapId: any, x: any, y: any, d: any, fadeType: any): void {}
  requestMapReload(): void {}
  isTransferring(): any {
    return null;
  }
  newMapId(): any {
    return null;
  }
  fadeType(): any {
    return null;
  }
  performTransfer(): void {}
  isMapPassable(x: any, y: any, d: any): any {
    return null;
  }
  isInBoat(): boolean {
    return null;
  }
  isInShip(): boolean {
    return null;
  }
  isInAirship(): boolean {
    return null;
  }
  isInVehicle(): any {
    return null;
  }
  isNormal(): boolean {
    return null;
  }
  isDashing(): any {
    return null;
  }
  isDebugThrough(): any {
    return null;
  }
  isCollided(x: any, y: any): any {
    return null;
  }
  centerX(): number {
    return null;
  }
  centerY(): number {
    return null;
  }
  center(x: any, y: any): any {
    return null;
  }
  locate(x: any, y: any): void {}
  increaseSteps(): void {}
  makeEncounterCount(): void {}
  makeEncounterTroopId(): any {
    return null;
  }
  meetsEncounterConditions(encounter: any): any {
    return null;
  }
  executeEncounter(): boolean {
    return null;
  }
  startMapEvent(x: any, y: any, triggers: any, normal: any): void {}
  moveByInput(): void {}
  canMove(): boolean {
    return null;
  }
  getInputDirection(): any {
    return null;
  }
  executeMove(direction: any): void {}
  //@ts-ignore
  update(sceneActive: any): void {}
  updateDashing(): void {}
  isDashButtonPressed(): any {
    return null;
  }
  updateScroll(lastScrolledX: any, lastScrolledY: any): void {}
  updateVehicle(): void {}
  updateVehicleGetOn(): void {}
  updateVehicleGetOff(): void {}
  updateNonmoving(wasMoving: any): void {}
  triggerAction(): boolean {
    return null;
  }
  triggerButtonAction(): boolean {
    return null;
  }
  triggerTouchAction(): any {
    return null;
  }
  triggerTouchActionD1(x1: any, y1: any): any {
    return null;
  }
  triggerTouchActionD2(x2: any, y2: any): any {
    return null;
  }
  triggerTouchActionD3(x2: any, y2: any): any {
    return null;
  }
  updateEncounterCount(): void {}
  canEncounter(): boolean {
    return null;
  }
  encounterProgressValue(): number {
    return null;
  }
  checkEventTriggerHere(triggers: any): void {}
  checkEventTriggerThere(triggers: any): void {}
  //@ts-ignore
  checkEventTriggerTouch(x: any, y: any): void {}
  canStartLocalEvents(): boolean {
    return null;
  }
  getOnOffVehicle(): any {
    return null;
  }
  getOnVehicle(): any {
    return null;
  }
  getOffVehicle(): any {
    return null;
  }
  forceMoveForward(): void {}
  isOnDamageFloor(): boolean {
    return null;
  }
  moveStraight(d: any): void {}
  moveDiagonally(horz: any, vert: any): void {}
  jump(xPlus: any, yPlus: any): void {}
  showFollowers(): void {}
  hideFollowers(): void {}
  gatherFollowers(): void {}
  areFollowersGathering(): any {
    return null;
  }
  areFollowersGathered(): any {
    return null;
  }
}
export class Game_Follower extends Game_Character {
  constructor(memberIndex: any) {
    super();
  }
  _memberIndex: any;
  refresh(): void {}
  isVisible(): any {
    return null;
  }
  update(): void {}
  chaseCharacter(character: any): void {}
}
export class Game_Followers {
  constructor() {}
  _visible: any;
  _gathering: boolean;
  _data: undefined[];
  isVisible(): any {
    return null;
  }
  show(): void {}
  hide(): void {}
  follower(index: any): any {
    return null;
  }
  forEach(callback: any, thisObject: any): void {}
  reverseEach(callback: any, thisObject: any): void {}
  refresh(): void {}
  update(): void {}
  updateMove(): void {}
  jumpAll(): void {}
  synchronize(x: any, y: any, d: any): void {}
  gather(): void {}
  areGathering(): any {
    return null;
  }
  visibleFollowers(): any {
    return null;
  }
  areMoving(): any {
    return null;
  }
  areGathered(): any {
    return null;
  }
  isSomeoneCollided(x: any, y: any): any {
    return null;
  }
}
export class Game_Vehicle extends Game_Character {
  constructor(type: any) {
    super();
  }
  _type: any;
  initMembers(): void {}
  _mapId: number;
  _altitude: number;
  _driving: boolean;
  _bgm: any;
  isBoat(): boolean {
    return null;
  }
  isShip(): boolean {
    return null;
  }
  isAirship(): boolean {
    return null;
  }
  resetDirection(): void {}
  initMoveSpeed(): void {}
  loadSystemSettings(): void {}
  refresh(): void {}
  setLocation(mapId: any, x: any, y: any): void {}
  pos(x: any, y: any): any {
    return null;
  }
  isMapPassable(x: any, y: any, d: any): any {
    return null;
  }
  getOn(): void {}
  getOff(): void {}
  setBgm(bgm: any): void {}
  playBgm(): void {}
  syncWithPlayer(): void {}
  screenY(): number {
    return null;
  }
  shadowX(): any {
    return null;
  }
  shadowY(): any {
    return null;
  }
  shadowOpacity(): number {
    return null;
  }
  canMove(): any {
    return null;
  }
  update(): void {}
  updateAirship(): void {}
  updateAirshipAltitude(): void {}
  maxAltitude(): number {
    return null;
  }
  isLowest(): boolean {
    return null;
  }
  isHighest(): boolean {
    return null;
  }
  isTakeoffOk(): any {
    return null;
  }
  isLandOk(x: any, y: any, d: any): boolean {
    return null;
  }
}
export class Game_Event extends Game_Character {
  constructor(mapId: any, eventId: any) {
    super();
  }
  _mapId: any;
  _eventId: any;
  initMembers(): void {}
  _moveType: number;
  _trigger: number;
  _starting: boolean;
  _erased: boolean;
  _pageIndex: number;
  _originalPattern: number;
  _originalDirection: number;
  _prelockDirection: number;
  _locked: boolean;
  eventId(): any {
    return null;
  }
  event(): DataCommonEvent {
    return null;
  }
  page(): any {
    return null;
  }
  isCollidedWithCharacters(x: any, y: any): any {
    return null;
  }
  isCollidedWithEvents(x: any, y: any): boolean {
    return null;
  }
  isCollidedWithPlayerCharacters(x: any, y: any): any {
    return null;
  }
  lock(): void {}
  unlock(): void {}
  updateStop(): void {}
  updateSelfMovement(): void {}
  stopCountThreshold(): number {
    return null;
  }
  moveTypeRandom(): void {}
  moveTypeTowardPlayer(): void {}
  isNearThePlayer(): boolean {
    return null;
  }
  moveTypeCustom(): void {}
  isStarting(): any {
    return null;
  }
  clearStartingFlag(): void {}
  isTriggerIn(triggers: any): any {
    return null;
  }
  erase(): void {}
  refresh(): void {}
  findProperPageIndex(): number {
    return null;
  }
  meetsConditions(page: any): boolean {
    return null;
  }
  setupPage(): void {}
  clearPageSettings(): void {}
  _interpreter: any;
  setupPageSettings(): void {}
  isOriginalPattern(): boolean {
    return null;
  }
  resetPattern(): void {}
  //@ts-ignore
  checkEventTriggerTouch(x: any, y: any): void {}
  checkEventTriggerAuto(): void {}
  update(): void {}
  updateParallel(): void {}
  locate(x: any, y: any): void {}
  forceMoveRoute(moveRoute: any): void {}
}
export class Game_Interpreter {
  constructor(depth: any) {}
  _depth: any;
  _branch: {};
  _params: undefined[];
  _indent: number;
  _frameCount: number;
  _freezeChecker: number;
  checkOverflow(): void {}
  clear(): void {}
  _mapId: number;
  _eventId: number;
  _list: any;
  _index: number;
  _waitCount: number;
  _waitMode: string;
  _comments: string;
  _character: any;
  _childInterpreter: any;
  setup(list: any, eventId: any): void {}
  eventId(): any {
    return null;
  }
  isOnCurrentMap(): boolean {
    return null;
  }
  setupReservedCommonEvent(): boolean {
    return null;
  }
  isRunning(): boolean {
    return null;
  }
  update(): void {}
  updateChild(): boolean {
    return null;
  }
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
  wait(duration: any): void {}
  fadeSpeed(): number {
    return null;
  }
  executeCommand(): boolean {
    return null;
  }
  checkFreeze(): boolean {
    return null;
  }
  terminate(): void {}
  skipBranch(): void {}
  currentCommand(): any {
    return null;
  }
  nextEventCode(): any {
    return null;
  }
  iterateActorId(param: any, callback: any): void {}
  iterateActorEx(param1: any, param2: any, callback: any): void {}
  iterateActorIndex(param: any, callback: any): void {}
  iterateEnemyIndex(param: any, callback: any): void {}
  iterateBattler(param1: any, param2: any, callback: any): void {}
  character(param: any): any {
    return null;
  }
  operateValue(operation: any, operandType: any, operand: any): any {
    return null;
  }
  changeHp(target: any, value: any, allowDeath: any): void {}
  command101(): boolean {
    return null;
  }
  command102(): boolean {
    return null;
  }
  setupChoices(params: any): void {}
  command402(): boolean {
    return null;
  }
  command403(): boolean {
    return null;
  }
  command103(): boolean {
    return null;
  }
  setupNumInput(params: any): void {}
  command104(): boolean {
    return null;
  }
  setupItemChoice(params: any): void {}
  command105(): boolean {
    return null;
  }
  command108(): boolean {
    return null;
  }
  command111(): boolean {
    return null;
  }
  command411(): boolean {
    return null;
  }
  command112(): boolean {
    return null;
  }
  command413(): boolean {
    return null;
  }
  command113(): boolean {
    return null;
  }
  command115(): boolean {
    return null;
  }
  command117(): boolean {
    return null;
  }
  setupChild(list: any, eventId: any): void {}
  command118(): boolean {
    return null;
  }
  command119(): boolean {
    return null;
  }
  jumpTo(index: any): void {}
  command121(): boolean {
    return null;
  }
  command122(): boolean {
    return null;
  }
  gameDataOperand(type: any, param1: any, param2: any): any {
    return null;
  }
  operateVariable(variableId: any, operationType: any, value: any): void {}
  command123(): boolean {
    return null;
  }
  command124(): boolean {
    return null;
  }
  command125(): boolean {
    return null;
  }
  command126(): boolean {
    return null;
  }
  command127(): boolean {
    return null;
  }
  command128(): boolean {
    return null;
  }
  command129(): boolean {
    return null;
  }
  command132(): boolean {
    return null;
  }
  command133(): boolean {
    return null;
  }
  command134(): boolean {
    return null;
  }
  command135(): boolean {
    return null;
  }
  command136(): boolean {
    return null;
  }
  command137(): boolean {
    return null;
  }
  command138(): boolean {
    return null;
  }
  command139(): boolean {
    return null;
  }
  command140(): boolean {
    return null;
  }
  command201(): boolean {
    return null;
  }
  command202(): boolean {
    return null;
  }
  command203(): boolean {
    return null;
  }
  command204(): boolean {
    return null;
  }
  command205(): boolean {
    return null;
  }
  command206(): boolean {
    return null;
  }
  command211(): boolean {
    return null;
  }
  command212(): boolean {
    return null;
  }
  command213(): boolean {
    return null;
  }
  command214(): boolean {
    return null;
  }
  command216(): boolean {
    return null;
  }
  command217(): boolean {
    return null;
  }
  command221(): boolean {
    return null;
  }
  command222(): boolean {
    return null;
  }
  command223(): boolean {
    return null;
  }
  command224(): boolean {
    return null;
  }
  command225(): boolean {
    return null;
  }
  command230(): boolean {
    return null;
  }
  command231(): boolean {
    return null;
  }
  command232(): boolean {
    return null;
  }
  command233(): boolean {
    return null;
  }
  command234(): boolean {
    return null;
  }
  command235(): boolean {
    return null;
  }
  command236(): boolean {
    return null;
  }
  command241(): boolean {
    return null;
  }
  command242(): boolean {
    return null;
  }
  command243(): boolean {
    return null;
  }
  command244(): boolean {
    return null;
  }
  command245(): boolean {
    return null;
  }
  command246(): boolean {
    return null;
  }
  command249(): boolean {
    return null;
  }
  command250(): boolean {
    return null;
  }
  command251(): boolean {
    return null;
  }
  command261(): boolean {
    return null;
  }
  videoFileExt(): '.webm' | '.mp4' {
    return null;
  }
  command281(): boolean {
    return null;
  }
  command282(): boolean {
    return null;
  }
  command283(): boolean {
    return null;
  }
  command284(): boolean {
    return null;
  }
  command285(): boolean {
    return null;
  }
  command301(): boolean {
    return null;
  }
  command601(): boolean {
    return null;
  }
  command602(): boolean {
    return null;
  }
  command603(): boolean {
    return null;
  }
  command302(): boolean {
    return null;
  }
  command303(): boolean {
    return null;
  }
  command311(): boolean {
    return null;
  }
  command312(): boolean {
    return null;
  }
  command326(): boolean {
    return null;
  }
  command313(): boolean {
    return null;
  }
  command314(): boolean {
    return null;
  }
  command315(): boolean {
    return null;
  }
  command316(): boolean {
    return null;
  }
  command317(): boolean {
    return null;
  }
  command318(): boolean {
    return null;
  }
  command319(): boolean {
    return null;
  }
  command320(): boolean {
    return null;
  }
  command321(): boolean {
    return null;
  }
  command322(): boolean {
    return null;
  }
  command323(): boolean {
    return null;
  }
  command324(): boolean {
    return null;
  }
  command325(): boolean {
    return null;
  }
  command331(): boolean {
    return null;
  }
  command332(): boolean {
    return null;
  }
  command342(): boolean {
    return null;
  }
  command333(): boolean {
    return null;
  }
  command334(): boolean {
    return null;
  }
  command335(): boolean {
    return null;
  }
  command336(): boolean {
    return null;
  }
  command337(): boolean {
    return null;
  }
  command339(): boolean {
    return null;
  }
  command340(): boolean {
    return null;
  }
  command351(): boolean {
    return null;
  }
  command352(): boolean {
    return null;
  }
  command353(): boolean {
    return null;
  }
  command354(): boolean {
    return null;
  }
  command355(): boolean {
    return null;
  }
  command356(): boolean {
    return null;
  }
  pluginCommand(command: any, args: any): void {}
  static requestImages(list: any, commonList: any): void {}
}
