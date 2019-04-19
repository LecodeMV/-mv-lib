export type RPGObject =
  | DataActor
  | DataArmor
  | DataClass
  | DataEnemy
  | DataItem
  | DataSkill
  | DataState;

export interface DataActor {
  id: number;
  battlerName: string;
  characterIndex: number;
  characterName: string;
  classId: number;
  equips: number[];
  faceIndex: number;
  faceName: string;
  traits: [];
  initialLevel: number;
  maxLevel: number;
  name: string;
  nickname: '';
  note: string;
  profile: string;
}

export interface DataAnimation {
  id: number;
  animation1Hue: number;
  animation1Name: string;
  animation2Hue: number;
  animation2Name: '';
  frames: (Array<number[]>)[];
  name: string;
  position: number;
  timings: {
    flashColor: [number, number, number, number];
    flashDuration: number;
    flashScope: number;
    frame: number;
    se: { name: string; pan: number; pitch: number; volume: number };
  }[];
}

export interface DataArmor {
  id: number;
  atypeId: number;
  description: string;
  etypeId: number;
  traits: [{ code: number; dataId: number; value: number }];
  iconIndex: number;
  name: string;
  note: string;
  params: number[];
  price: number;
}

export interface DataClass {
  id: number;
  expParams: number[];
  traits: { code: number; dataId: number; value: number }[];
  learnings: { level: number; note: string; skillId: number }[];
  name: string;
  note: string;
  params: (number[])[];
}

export interface DataCommonEvent {
  id: number;
  list: { code: number; indent: number; parameters: string[] }[];
  name: string;
  switchId: number;
  trigger: number;
}

export interface DataEnemy {
  id: number;
  actions: {
    conditionParam1: number;
    conditionParam2: number;
    conditionType: number;
    rating: number;
    skillId: number;
  }[];
  battlerHue: number;
  battlerName: string;
  dropItems: { dataId: number; denominator: number; kind: number }[];
  exp: number;
  traits: { code: number; dataId: number; value: number }[];
  gold: number;
  name: string;
  note: string;
  params: number[];
}

export interface DataItem {
  id: number;
  animationId: number;
  consumable: true;
  damage: { critical: false; elementId: number; formula: string; type: number; variance: number };
  description: string;
  effects: { code: number; dataId: number; value1: number; value2: number }[];
  hitType: number;
  iconIndex: number;
  itypeId: number;
  name: string;
  note: string;
  occasion: number;
  price: number;
  repeats: number;
  scope: number;
  speed: number;
  successRate: number;
  tpGain: number;
}

export interface DataSkill {
  id: number;
  animationId: number;
  damage: {
    critical: true;
    elementId: number;
    formula: string;
    type: number;
    variance: number;
  };
  description: '';
  effects: [{ code: number; dataId: number; value1: number; value2: number }];
  hitType: number;
  iconIndex: number;
  message1: string;
  message2: string;
  mpCost: number;
  name: string;
  note: string;
  occasion: number;
  repeats: number;
  requiredWtypeId1: number;
  requiredWtypeId2: number;
  scope: number;
  speed: number;
  stypeId: number;
  successRate: number;
  tpCost: number;
  tpGain: number;
}

export interface DataState {
  id: number;
  autoRemovalTiming: number;
  chanceByDamage: number;
  iconIndex: number;
  maxTurns: number;
  message1: string;
  message2: string;
  message3: string;
  message4: string;
  minTurns: number;
  motion: number;
  name: string;
  note: string;
  overlay: number;
  priority: number;
  releaseByDamage: false;
  removeAtBattleEnd: false;
  removeByDamage: false;
  removeByRestriction: false;
  removeByWalking: false;
  restriction: number;
  stepsToRemove: number;
  traits: { code: number; dataId: number; value: number }[];
}

export interface DataWeapon {
  id: number;
  animationId: number;
  description: string;
  etypeId: number;
  traits: {
    code: number;
    dataId: number;
    value: number;
  }[];
  iconIndex: number;
  name: string;
  note: string;
  params: number[];
  price: number;
  wtypeId: number;
}

export interface DataTroop {
  id: number;
  members: {
    enemyId: number;
    x: number;
    y: number;
    hidden: boolean;
  }[];
  name: string;
  pages: {
    conditions: {
      actorHp: number;
      actorId: number;
      actorValid: boolean;
      enemyHp: number;
      enemyIndex: number;
      enemyValid: boolean;
      switchId: number;
      switchValid: boolean;
      turnA: number;
      turnB: number;
      turnEnding: boolean;
      turnValid: boolean;
    };
    list: {
      code: number;
      indent: number;
      parameters: string[];
    }[];
    span: number;
  }[];
}
