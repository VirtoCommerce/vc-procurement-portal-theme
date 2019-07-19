export interface Currency
{
    code: string;
    cultureName: string;
    symbol: string;
    englishName: string;
    /**Exchnage rate with primary currency */
    exchangeRate: number;
    /**https://msdn.microsoft.com/en-us/library/dwhawy9k%28v=vs.110%29.aspx?f=255&amp;MSPPError=-2147217396 */
    customFormatting: string;
}
