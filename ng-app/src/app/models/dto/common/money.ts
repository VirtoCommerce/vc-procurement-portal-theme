import { ICurrency } from './currency';

export interface IMoney {
  amount: number;
  formattedAmount: string;
  formattedAmountWithoutPointAndCurrency: string;
  formattedAmountWithoutPoint: string;
  formattedAmountWithoutCurrency: string;
  currency: ICurrency;
}


