import { CacheMap, ImageCache, RequestQueue } from './rpg_core';

import { DataSkill, DataItem, DataWeapon, DataArmor } from './data';

export class DataManager {
  constructor() {}
  static _globalId: string;
  static _lastAccessedId: number;
  static _errorUrl: any;
  static _databaseFiles: {
    name: string;
    src: string;
  }[];
  static loadDatabase(): void {}
  static loadDataFile(name: any, src: any): void {}
  static isDatabaseLoaded(): boolean {
    return null;
  }
  static loadMapData(mapId: any): void {}
  static makeEmptyMap(): void {}
  static isMapLoaded(): boolean {
    return null;
  }
  static onLoad(object: any): void {}
  static extractMetadata(data: any): void {}
  static checkError(): void {}
  static isBattleTest(): any {
    return null;
  }
  static isEventTest(): any {
    return null;
  }
  static isSkill(item: any): item is DataSkill {
    return null;
  }
  static isItem(item: any): item is DataItem {
    return null;
  }
  static isWeapon(item: any): item is DataWeapon {
    return null;
  }
  static isArmor(item: any): item is DataArmor {
    return null;
  }
  static createGameObjects(): void {}
  static setupNewGame(): void {}
  static setupBattleTest(): void {}
  static setupEventTest(): void {}
  static loadGlobalInfo(): any {
    return null;
  }
  static saveGlobalInfo(info: any): void {}
  static isThisGameFile(savefileId: any): boolean {
    return null;
  }
  static isAnySavefileExists(): boolean {
    return null;
  }
  static latestSavefileId(): number {
    return null;
  }
  static loadAllSavefileImages(): void {}
  static loadSavefileImages(info: any): void {}
  static maxSavefiles(): number {
    return null;
  }
  static saveGame(savefileId: any): any {
    return null;
  }
  static loadGame(savefileId: any): any {
    return null;
  }
  static loadSavefileInfo(savefileId: any): any {
    return null;
  }
  static lastAccessedSavefileId(): any {
    return null;
  }
  static saveGameWithoutRescue(savefileId: any): boolean {
    return null;
  }
  static loadGameWithoutRescue(savefileId: any): boolean {
    return null;
  }
  static selectSavefileForNewGame(): void {}
  static makeSavefileInfo(): {} {
    return null;
  }
  static makeSaveContents(): {} {
    return null;
  }
  static extractSaveContents(contents: any): void {}
}
export class ConfigManager {
  constructor() {}
  static alwaysDash: boolean;
  static commandRemember: boolean;
  static load(): void {}
  static save(): void {}
  static makeData(): {} {
    return null;
  }
  static applyData(config: any): void {}
  static readFlag(config: any, name: any): boolean {
    return null;
  }
  static readVolume(config: any, name: any): any {
    return null;
  }
  static bgmVolume: number;
  static bgsVolume: any;
  static meVolume: any;
  static seVolume: any;
}
export class StorageManager {
  constructor() {}
  static save(savefileId: any, json: any): void {}
  static load(savefileId: any): any {
    return null;
  }
  static exists(savefileId: any): any {
    return null;
  }
  static remove(savefileId: any): void {}
  static backup(savefileId: any): void {}
  static backupExists(savefileId: any): any {
    return null;
  }
  static cleanBackup(savefileId: any): void {}
  static restoreBackup(savefileId: any): void {}
  static isLocalMode(): any {
    return null;
  }
  static saveToLocalFile(savefileId: any, json: any): void {}
  static loadFromLocalFile(savefileId: any): any {
    return null;
  }
  static loadFromLocalBackupFile(savefileId: any): any {
    return null;
  }
  static localFileBackupExists(savefileId: any): any {
    return null;
  }
  static localFileExists(savefileId: any): any {
    return null;
  }
  static removeLocalFile(savefileId: any): void {}
  static saveToWebStorage(savefileId: any, json: any): void {}
  static loadFromWebStorage(savefileId: any): any {
    return null;
  }
  static loadFromWebStorageBackup(savefileId: any): any {
    return null;
  }
  static webStorageBackupExists(savefileId: any): boolean {
    return null;
  }
  static webStorageExists(savefileId: any): boolean {
    return null;
  }
  static removeWebStorage(savefileId: any): void {}
  static localFileDirectoryPath(): any {
    return null;
  }
  static localFilePath(savefileId: any): any {
    return null;
  }
  static webStorageKey(savefileId: any): any {
    return null;
  }
}
export class ImageManager {
  constructor() {}
  static cache: CacheMap;
  static _imageCache: ImageCache;
  static _requestQueue: RequestQueue;
  static _systemReservationId: any;
  static _generateCacheKey(path: any, hue: any): string {
    return null;
  }
  static loadAnimation(filename: any, hue?: number): any {
    return null;
  }
  static loadBattleback1(filename: any, hue?: number): any {
    return null;
  }
  static loadBattleback2(filename: any, hue?: number): any {
    return null;
  }
  static loadEnemy(filename: any, hue?: number): any {
    return null;
  }
  static loadCharacter(filename: any, hue?: number): any {
    return null;
  }
  static loadFace(filename: any, hue?: number): any {
    return null;
  }
  static loadParallax(filename: any, hue?: number): any {
    return null;
  }
  static loadPicture(filename: any, hue?: number): any {
    return null;
  }
  static loadSvActor(filename: any, hue?: number): any {
    return null;
  }
  static loadSvEnemy(filename: any, hue?: number): any {
    return null;
  }
  static loadSystem(filename: any, hue?: number): any {
    return null;
  }
  static loadTileset(filename: any, hue?: number): any {
    return null;
  }
  static loadTitle1(filename: any, hue?: number): any {
    return null;
  }
  static loadTitle2(filename: any, hue?: number): any {
    return null;
  }
  static loadBitmap(folder: any, filename: any, hue?: number, smooth?: any): any {
    return null;
  }
  static loadEmptyBitmap(): any {
    return null;
  }
  static loadNormalBitmap(path: any, hue?: number): any {
    return null;
  }
  static clear(): void {}
  static isReady(): any {
    return null;
  }
  static isObjectCharacter(filename: any): any {
    return null;
  }
  static isBigCharacter(filename: any): any {
    return null;
  }
  static isZeroParallax(filename: any): boolean {
    return null;
  }
  static reserveAnimation(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveBattleback1(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveBattleback2(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveEnemy(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveCharacter(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveFace(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveParallax(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reservePicture(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveSvActor(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveSvEnemy(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveSystem(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveTileset(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveTitle1(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveTitle2(filename: any, hue: any, reservationId: any): any {
    return null;
  }
  static reserveBitmap(folder: any, filename: any, hue: any, smooth: any, reservationId: any): any {
    return null;
  }
  static reserveNormalBitmap(path: any, hue: any, reservationId: any): any {
    return null;
  }
  static releaseReservation(reservationId: any): void {}
  static setDefaultReservationId(reservationId: any): void {}
  static _defaultReservationId: any;
  static requestAnimation(filename: any, hue: any): any {
    return null;
  }
  static requestBattleback1(filename: any, hue: any): any {
    return null;
  }
  static requestBattleback2(filename: any, hue: any): any {
    return null;
  }
  static requestEnemy(filename: any, hue: any): any {
    return null;
  }
  static requestCharacter(filename: any, hue: any): any {
    return null;
  }
  static requestFace(filename: any, hue: any): any {
    return null;
  }
  static requestParallax(filename: any, hue: any): any {
    return null;
  }
  static requestPicture(filename: any, hue: any): any {
    return null;
  }
  static requestSvActor(filename: any, hue: any): any {
    return null;
  }
  static requestSvEnemy(filename: any, hue: any): any {
    return null;
  }
  static requestSystem(filename: any, hue: any): any {
    return null;
  }
  static requestTileset(filename: any, hue: any): any {
    return null;
  }
  static requestTitle1(filename: any, hue: any): any {
    return null;
  }
  static requestTitle2(filename: any, hue: any): any {
    return null;
  }
  static requestBitmap(folder: any, filename: any, hue: any, smooth: any): any {
    return null;
  }
  static requestNormalBitmap(path: any, hue: any): any {
    return null;
  }
  static update(): void {}
  static clearRequest(): void {}
}
export class AudioManager {
  constructor() {}
  static _masterVolume: number;
  static _bgmVolume: number;
  static _bgsVolume: number;
  static _meVolume: number;
  static _seVolume: number;
  static _currentBgm: any;
  static _currentBgs: any;
  static _bgmBuffer: any;
  static _bgsBuffer: any;
  static _meBuffer: any;
  static _seBuffers: undefined[];
  static _staticBuffers: undefined[];
  static _replayFadeTime: number;
  static _path: string;
  static _blobUrl: any;
  static playBgm(bgm: any, pos: any): void {}
  static playEncryptedBgm(bgm: any, pos: any): void {}
  static createDecryptBuffer(url: any, bgm: any, pos: any): void {}
  static replayBgm(bgm: any): void {}
  static isCurrentBgm(bgm: any): boolean {
    return null;
  }
  static updateBgmParameters(bgm: any): void {}
  static updateCurrentBgm(bgm: any, pos: any): void {}
  static stopBgm(): void {}
  static fadeOutBgm(duration: any): void {}
  static fadeInBgm(duration: any): void {}
  static playBgs(bgs: any, pos: any): void {}
  static replayBgs(bgs: any): void {}
  static isCurrentBgs(bgs: any): boolean {
    return null;
  }
  static updateBgsParameters(bgs: any): void {}
  static updateCurrentBgs(bgs: any, pos: any): void {}
  static stopBgs(): void {}
  static fadeOutBgs(duration: any): void {}
  static fadeInBgs(duration: any): void {}
  static playMe(me: any): void {}
  static updateMeParameters(me: any): void {}
  static fadeOutMe(duration: any): void {}
  static stopMe(): void {}
  static playSe(se: any): void {}
  static updateSeParameters(buffer: any, se: any): void {}
  static stopSe(): void {}
  static playStaticSe(se: any): void {}
  static loadStaticSe(se: any): void {}
  static isStaticSe(se: any): boolean {
    return null;
  }
  static stopAll(): void {}
  static saveBgm(): any {
    return null;
  }
  static saveBgs(): any {
    return null;
  }
  static makeEmptyAudioObject(): {
    name: string;
    volume: number;
    pitch: number;
  } {
    return null;
  }
  static createBuffer(folder: any, name: any): any {
    return null;
  }
  static updateBufferParameters(buffer: any, configVolume: any, audio: any): void {}
  static audioFileExt(): '.ogg' | '.m4a' {
    return null;
  }
  static shouldUseHtml5Audio(): boolean {
    return null;
  }
  static checkErrors(): void {}
  static checkWebAudioError(webAudio: any): void {}
  static masterVolume: any;
  static bgmVolume: any;
  static bgsVolume: any;
  static meVolume: any;
  static seVolume: any;
}
export class SoundManager {
  constructor() {}
  static preloadImportantSounds(): void {}
  static loadSystemSound(n: any): void {}
  static playSystemSound(n: any): void {}
  static playCursor(): void {}
  static playOk(): void {}
  static playCancel(): void {}
  static playBuzzer(): void {}
  static playEquip(): void {}
  static playSave(): void {}
  static playLoad(): void {}
  static playBattleStart(): void {}
  static playEscape(): void {}
  static playEnemyAttack(): void {}
  static playEnemyDamage(): void {}
  static playEnemyCollapse(): void {}
  static playBossCollapse1(): void {}
  static playBossCollapse2(): void {}
  static playActorDamage(): void {}
  static playActorCollapse(): void {}
  static playRecovery(): void {}
  static playMiss(): void {}
  static playEvasion(): void {}
  static playMagicEvasion(): void {}
  static playReflection(): void {}
  static playShop(): void {}
  static playUseItem(): void {}
  static playUseSkill(): void {}
}
export class TextManager {
  constructor() {}
  static basic(basicId: any): any {
    return null;
  }
  static param(paramId: any): any {
    return null;
  }
  static command(commandId: any): any {
    return null;
  }
  static message(messageId: any): any {
    return null;
  }
  static getter(
    method: any,
    param: any
  ): {
    get: () => void;
    configurable: boolean;
  } {
    return null;
  }
  currencyUnit: any;
  level: {
    get: () => any;
    configurable: boolean;
  };
  levelA: {
    get: () => any;
    configurable: boolean;
  };
  hp: {
    get: () => any;
    configurable: boolean;
  };
  hpA: {
    get: () => any;
    configurable: boolean;
  };
  mp: {
    get: () => any;
    configurable: boolean;
  };
  mpA: {
    get: () => any;
    configurable: boolean;
  };
  tp: {
    get: () => any;
    configurable: boolean;
  };
  tpA: {
    get: () => any;
    configurable: boolean;
  };
  exp: {
    get: () => any;
    configurable: boolean;
  };
  expA: {
    get: () => any;
    configurable: boolean;
  };
  fight: {
    get: () => any;
    configurable: boolean;
  };
  escape: {
    get: () => any;
    configurable: boolean;
  };
  attack: {
    get: () => any;
    configurable: boolean;
  };
  guard: {
    get: () => any;
    configurable: boolean;
  };
  item: {
    get: () => any;
    configurable: boolean;
  };
  skill: {
    get: () => any;
    configurable: boolean;
  };
  equip: {
    get: () => any;
    configurable: boolean;
  };
  status: {
    get: () => any;
    configurable: boolean;
  };
  formation: {
    get: () => any;
    configurable: boolean;
  };
  save: {
    get: () => any;
    configurable: boolean;
  };
  gameEnd: {
    get: () => any;
    configurable: boolean;
  };
  options: {
    get: () => any;
    configurable: boolean;
  };
  weapon: {
    get: () => any;
    configurable: boolean;
  };
  armor: {
    get: () => any;
    configurable: boolean;
  };
  keyItem: {
    get: () => any;
    configurable: boolean;
  };
  equip2: {
    get: () => any;
    configurable: boolean;
  };
  optimize: {
    get: () => any;
    configurable: boolean;
  };
  clear: {
    get: () => any;
    configurable: boolean;
  };
  newGame: {
    get: () => any;
    configurable: boolean;
  };
  continue_: {
    get: () => any;
    configurable: boolean;
  };
  toTitle: {
    get: () => any;
    configurable: boolean;
  };
  cancel: {
    get: () => any;
    configurable: boolean;
  };
  buy: {
    get: () => any;
    configurable: boolean;
  };
  sell: {
    get: () => any;
    configurable: boolean;
  };
  alwaysDash: {
    get: () => any;
    configurable: boolean;
  };
  commandRemember: {
    get: () => any;
    configurable: boolean;
  };
  bgmVolume: {
    get: () => any;
    configurable: boolean;
  };
  bgsVolume: {
    get: () => any;
    configurable: boolean;
  };
  meVolume: {
    get: () => any;
    configurable: boolean;
  };
  seVolume: {
    get: () => any;
    configurable: boolean;
  };
  possession: {
    get: () => any;
    configurable: boolean;
  };
  expTotal: {
    get: () => any;
    configurable: boolean;
  };
  expNext: {
    get: () => any;
    configurable: boolean;
  };
  saveMessage: {
    get: () => any;
    configurable: boolean;
  };
  loadMessage: {
    get: () => any;
    configurable: boolean;
  };
  file: {
    get: () => any;
    configurable: boolean;
  };
  partyName: {
    get: () => any;
    configurable: boolean;
  };
  emerge: {
    get: () => any;
    configurable: boolean;
  };
  preemptive: {
    get: () => any;
    configurable: boolean;
  };
  surprise: {
    get: () => any;
    configurable: boolean;
  };
  escapeStart: {
    get: () => any;
    configurable: boolean;
  };
  escapeFailure: {
    get: () => any;
    configurable: boolean;
  };
  victory: {
    get: () => any;
    configurable: boolean;
  };
  defeat: {
    get: () => any;
    configurable: boolean;
  };
  obtainExp: {
    get: () => any;
    configurable: boolean;
  };
  obtainGold: {
    get: () => any;
    configurable: boolean;
  };
  obtainItem: {
    get: () => any;
    configurable: boolean;
  };
  levelUp: {
    get: () => any;
    configurable: boolean;
  };
  obtainSkill: {
    get: () => any;
    configurable: boolean;
  };
  useItem: {
    get: () => any;
    configurable: boolean;
  };
  criticalToEnemy: {
    get: () => any;
    configurable: boolean;
  };
  criticalToActor: {
    get: () => any;
    configurable: boolean;
  };
  actorDamage: {
    get: () => any;
    configurable: boolean;
  };
  actorRecovery: {
    get: () => any;
    configurable: boolean;
  };
  actorGain: {
    get: () => any;
    configurable: boolean;
  };
  actorLoss: {
    get: () => any;
    configurable: boolean;
  };
  actorDrain: {
    get: () => any;
    configurable: boolean;
  };
  actorNoDamage: {
    get: () => any;
    configurable: boolean;
  };
  actorNoHit: {
    get: () => any;
    configurable: boolean;
  };
  enemyDamage: {
    get: () => any;
    configurable: boolean;
  };
  enemyRecovery: {
    get: () => any;
    configurable: boolean;
  };
  enemyGain: {
    get: () => any;
    configurable: boolean;
  };
  enemyLoss: {
    get: () => any;
    configurable: boolean;
  };
  enemyDrain: {
    get: () => any;
    configurable: boolean;
  };
  enemyNoDamage: {
    get: () => any;
    configurable: boolean;
  };
  enemyNoHit: {
    get: () => any;
    configurable: boolean;
  };
  evasion: {
    get: () => any;
    configurable: boolean;
  };
  magicEvasion: {
    get: () => any;
    configurable: boolean;
  };
  magicReflection: {
    get: () => any;
    configurable: boolean;
  };
  counterAttack: {
    get: () => any;
    configurable: boolean;
  };
  substitute: {
    get: () => any;
    configurable: boolean;
  };
  buffAdd: {
    get: () => any;
    configurable: boolean;
  };
  debuffAdd: {
    get: () => any;
    configurable: boolean;
  };
  buffRemove: {
    get: () => any;
    configurable: boolean;
  };
  actionFailure: {
    get: () => any;
    configurable: boolean;
  };
}
export class SceneManager {
  constructor() {}
  static _getTimeInMsWithoutMobileSafari(): any {
    return null;
  }
  static _scene: any;
  static _nextScene: any;
  static _stack: undefined[];
  static _stopped: boolean;
  static _sceneStarted: boolean;
  static _exiting: boolean;
  static _previousClass: any;
  static _backgroundBitmap: any;
  static _screenWidth: number;
  static _screenHeight: number;
  static _boxWidth: number;
  static _boxHeight: number;
  static _deltaTime: number;
  static _accumulator: number;
  static run(sceneClass: any): void {}
  static initialize(): void {}
  static initGraphics(): void {}
  static preferableRendererType(): 'canvas' | 'webgl' | 'auto' {
    return null;
  }
  static shouldUseCanvasRenderer(): any {
    return null;
  }
  static checkWebGL(): void {}
  static checkFileAccess(): void {}
  static initAudio(): void {}
  static initInput(): void {}
  static initNwjs(): void {}
  static checkPluginErrors(): void {}
  static setupErrorHandlers(): void {}
  static requestUpdate(): void {}
  static update(): void {}
  static terminate(): void {}
  static onError(e: any): void {}
  static onKeyDown(event: any): void {}
  static catchException(e: any): void {}
  static tickStart(): void {}
  static tickEnd(): void {}
  static updateInputData(): void {}
  static updateMain(): void {}
  static updateManagers(): void {}
  static changeScene(): void {}
  static updateScene(): void {}
  static renderScene(): void {}
  static onSceneCreate(): void {}
  static onSceneStart(): void {}
  static onSceneLoading(): void {}
  static isSceneChanging(): any {
    return null;
  }
  static isCurrentSceneBusy(): any {
    return null;
  }
  static isCurrentSceneStarted(): any {
    return null;
  }
  static isNextScene(sceneClass: any): boolean {
    return null;
  }
  static isPreviousScene(sceneClass: any): boolean {
    return null;
  }
  static goto(sceneClass: any): void {}
  static push(sceneClass: any): void {}
  static pop(): void {}
  static exit(): void {}
  static clearStack(): void {}
  static stop(): void {}
  static prepareNextScene(): void {}
  static snap(): any {
    return null;
  }
  static snapForBackground(): void {}
  static backgroundBitmap(): any {
    return null;
  }
  static resume(): void {}
}
export class BattleManager {
  constructor() {}
  static setup(troopId: any, canEscape: any, canLose: any): void {}
  static _canEscape: any;
  static _canLose: any;
  static initMembers(): void {}
  static _phase: string;
  static _battleTest: boolean;
  static _eventCallback: any;
  static _preemptive: boolean;
  static _surprise: boolean;
  static _actorIndex: number;
  static _actionForcedBattler: any;
  static _mapBgm: any;
  static _mapBgs: any;
  static _actionBattlers: undefined[];
  static _subject: any;
  static _action: any;
  static _targets: undefined[];
  static _logWindow: any;
  static _statusWindow: any;
  static _spriteset: any;
  static _escapeRatio: number;
  static _escaped: boolean;
  static _rewards: {};
  static _turnForced: boolean;
  static isBattleTest(): any {
    return null;
  }
  static setBattleTest(battleTest: any): void {}
  static setEventCallback(callback: any): void {}
  static setLogWindow(logWindow: any): void {}
  static setStatusWindow(statusWindow: any): void {}
  static setSpriteset(spriteset: any): void {}
  static onEncounter(): void {}
  static ratePreemptive(): any {
    return null;
  }
  static rateSurprise(): any {
    return null;
  }
  static saveBgmAndBgs(): void {}
  static playBattleBgm(): void {}
  static playVictoryMe(): void {}
  static playDefeatMe(): void {}
  static replayBgmAndBgs(): void {}
  static makeEscapeRatio(): void {}
  static update(): void {}
  static updateEvent(): any {
    return null;
  }
  static updateEventMain(): boolean {
    return null;
  }
  static isBusy(): any {
    return null;
  }
  static isInputting(): boolean {
    return null;
  }
  static isInTurn(): boolean {
    return null;
  }
  static isTurnEnd(): boolean {
    return null;
  }
  static isAborting(): boolean {
    return null;
  }
  static isBattleEnd(): boolean {
    return null;
  }
  static canEscape(): any {
    return null;
  }
  static canLose(): any {
    return null;
  }
  static isEscaped(): any {
    return null;
  }
  static actor(): any {
    return null;
  }
  static clearActor(): void {}
  static changeActor(newActorIndex: any, lastActorActionState: any): void {}
  static startBattle(): void {}
  static displayStartMessages(): void {}
  static startInput(): void {}
  static inputtingAction(): any {
    return null;
  }
  static selectNextCommand(): void {}
  static selectPreviousCommand(): void {}
  static refreshStatus(): void {}
  static startTurn(): void {}
  static updateTurn(): void {}
  static processTurn(): void {}
  static endTurn(): void {}
  static isForcedTurn(): any {
    return null;
  }
  static updateTurnEnd(): void {}
  static getNextSubject(): any {
    return null;
  }
  static allBattleMembers(): any {
    return null;
  }
  static makeActionOrders(): void {}
  static startAction(): void {}
  static updateAction(): void {}
  static endAction(): void {}
  static invokeAction(subject: any, target: any): void {}
  static invokeNormalAction(subject: any, target: any): void {}
  static invokeCounterAttack(subject: any, target: any): void {}
  static invokeMagicReflection(subject: any, target: any): void {}
  static applySubstitute(target: any): any {
    return null;
  }
  static checkSubstitute(target: any): boolean {
    return null;
  }
  static isActionForced(): boolean {
    return null;
  }
  static forceAction(battler: any): void {}
  static processForcedAction(): void {}
  static abort(): void {}
  static checkBattleEnd(): boolean {
    return null;
  }
  static checkAbort(): boolean {
    return null;
  }
  static processVictory(): void {}
  static processEscape(): boolean {
    return null;
  }
  static processAbort(): void {}
  static processDefeat(): void {}
  static endBattle(result: any): void {}
  static updateBattleEnd(): void {}
  static makeRewards(): void {}
  static displayVictoryMessage(): void {}
  static displayDefeatMessage(): void {}
  static displayEscapeSuccessMessage(): void {}
  static displayEscapeFailureMessage(): void {}
  static displayRewards(): void {}
  static displayExp(): void {}
  static displayGold(): void {}
  static displayDropItems(): void {}
  static gainRewards(): void {}
  static gainExp(): void {}
  static gainGold(): void {}
  static gainDropItems(): void {}
}
export class PluginManager {
  constructor() {}
  static _path: string;
  static _scripts: undefined[];
  static _errorUrls: undefined[];
  static _parameters: {};
  static setup(plugins: any): void {}
  static checkErrors(): void {}
  static parameters(name: any): any {
    return null;
  }
  static setParameters(name: any, parameters: any): void {}
  static loadScript(name: any): void {}
  static onError(e: any): void {}
}
