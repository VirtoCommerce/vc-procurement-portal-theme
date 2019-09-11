import { ILanguage } from '@models/dto/common/language';

export interface ILocalizedString {
  language: ILanguage;
  value: string;
}
