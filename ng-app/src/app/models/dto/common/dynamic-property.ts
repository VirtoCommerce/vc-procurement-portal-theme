import { ILocalizedString } from './display-name';

export interface IDynamicProperty {
  name: string;
  displayNames: ILocalizedString[];
  isArray: boolean;
  isDictionary: boolean;
  isRequired: boolean;
  valueType: string;
  values: any[];
  dictionaryValues: any[];
  dictionaryItems: any[];
  indexKey: string;
  id: string;
}
