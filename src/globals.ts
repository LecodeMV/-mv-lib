import {
  DataActor,
  DataClass,
  DataSkill,
  DataItem,
  DataWeapon,
  DataArmor,
  DataEnemy,
  DataTroop,
  DataState,
  DataAnimation,
  DataCommonEvent
} from './data';
import {
  Game_Temp,
  Game_System,
  Game_Screen,
  Game_Timer,
  Game_Message,
  Game_Switches,
  Game_Variables,
  Game_SelfSwitches,
  Game_Actors,
  Game_Party,
  Game_Troop,
  Game_Map,
  Game_Player,
  Game_Event
} from '.';

export var $dataActors: DataActor[];
export var $dataClasses: DataClass[];
export var $dataSkills: DataSkill[];
export var $dataItems: DataItem[];
export var $dataWeapons: DataWeapon[];
export var $dataArmors: DataArmor[];
export var $dataEnemies: DataEnemy[];
export var $dataTroops: DataTroop[];
export var $dataStates: DataState[];
export var $dataAnimations: DataAnimation[];
export var $dataTilesets: any;
export var $dataCommonEvents: DataCommonEvent[];
export var $dataSystem: any;
export var $dataMapInfos: any;
export var $dataMap: any;

export var $gameTemp: Game_Temp;
export var $gameSystem: Game_System;
export var $gameScreen: Game_Screen;
export var $gameTimer: Game_Timer;
export var $gameMessage: Game_Message;
export var $gameSwitches: Game_Switches;
export var $gameVariables: Game_Variables;
export var $gameSelfSwitches: Game_SelfSwitches;
export var $gameActors: Game_Actors;
export var $gameParty: Game_Party;
export var $gameTroop: Game_Troop;
export var $gameMap: Game_Map;
export var $gamePlayer: Game_Player;
export var $testEvent: Game_Event;
