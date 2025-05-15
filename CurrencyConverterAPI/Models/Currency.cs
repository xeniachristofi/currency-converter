namespace CurrencyConverterAPI
{
    /// <summary>  
    /// Represents a currency with its code, name, and exchange rate.  
    /// </summary>  
    public class Currency
    {
        /// <summary>  
        /// Gets or sets the currency code (e.g., USD, EUR).  
        /// </summary>  
        public string Code { get; set; } = "";

        /// <summary>  
        /// Gets or sets the name of the currency (e.g., US Dollar, Euro).  
        /// </summary>  
        public string Name { get; set; } = "";

        /// <summary>  
        /// Gets or sets the exchange rate of the currency relative to a base currency.  
        /// </summary>  
        public double ExchangeRate { get; set; }
    }
}
