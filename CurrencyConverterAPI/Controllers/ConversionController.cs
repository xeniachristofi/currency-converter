using Microsoft.AspNetCore.Mvc;

namespace CurrencyConverterAPI.Controllers
{
    /// <summary>
    /// Controller for handling currency conversion operations.
    /// </summary>
    [ApiController]
    public class ConversionController : ControllerBase
    {
        // Mock list of currencies and exchange rates (relative to USD)
        private readonly List<Currency> Currencies = new List<Currency>()
        {
          new Currency { Code = "USD", Name = "US Dollar", ExchangeRate = 1.0 },
          new Currency { Code = "EUR", Name = "Euro", ExchangeRate = 0.89 },
          new Currency { Code = "JPY", Name = "Japanese Yen", ExchangeRate = 145.0 },
          new Currency { Code = "ZAR", Name = "South African Rand", ExchangeRate = 18.26 },
          new Currency { Code = "GBP", Name = "Great British Pound", ExchangeRate = 0.75 },
          new Currency { Code = "AUD", Name = "Australian Dollar", ExchangeRate = 1.56 },
          new Currency { Code = "CAD", Name = "Canadian Dollar", ExchangeRate = 1.25 },
          new Currency { Code = "CNY", Name = "Chinese Yuan", ExchangeRate = 6.5 },
          new Currency { Code = "INR", Name = "Indian Rupee", ExchangeRate = 74.0 },
          new Currency { Code = "BRL", Name = "Brazilian Real", ExchangeRate = 5.25 },
        };

        private readonly ILogger<ConversionController> _logger;

        /// <summary>
        /// Initializes a new instance of the <see cref="ConversionController"/> class.
        /// </summary>
        /// <param name="logger">The logger instance.</param>
        public ConversionController(ILogger<ConversionController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Converts an amount from one currency to another.
        /// </summary>
        /// <param name="from">The currency code to convert from.</param>
        /// <param name="to">The currency code to convert to.</param>
        /// <param name="amount">The amount to convert. Defaults to 1.</param>
        /// <returns>The converted amount in the target currency.</returns>
        /// <exception cref="ArgumentException">Thrown when an invalid currency code is provided.</exception>
        [HttpGet("convert")]
        public double ConvertCurrency(string from, string to, double amount = 1)
        {
            var fromCurrency = Currencies.FirstOrDefault(c => c.Code == from);
            var toCurrency = Currencies.FirstOrDefault(c => c.Code == to);
            if (fromCurrency == null || toCurrency == null)
            {
                throw new ArgumentException("Invalid currency code.");
            }
            if (amount < 0)
            {
                throw new ArgumentException("Amount must be a positive number.");
            }
            // Convert the amount to USD first, then to the target currency
            var amountInUSD = amount / fromCurrency.ExchangeRate;
            return amountInUSD * toCurrency.ExchangeRate;
        }

        /// <summary>
        /// Retrieves the list of available currencies and their exchange rates compared to USD.
        /// </summary>
        /// <returns>A list of currencies.</returns>
        [HttpGet("list")]
        public virtual IEnumerable<Currency> GetCurrencies()
        {
            return Currencies;
        }


        /// <summary>
        /// Retrieves the exchange rate for a specific currency code.
        /// </summary>
        /// <param name="code">The currency code to retrieve the exchange rate for.</param>
        /// <returns>The exchange rate of the specified currency relative to USD.</returns>
        /// <exception cref="ArgumentException">Thrown when an invalid currency code is provided.</exception>
        [HttpGet("exchangeRate")]
        public double GetExchangeRateForCurrency(string code)
        {
            var currency = Currencies.FirstOrDefault(c => c.Code == code); 
            if (currency == null)
            {
                throw new ArgumentException("Invalid currency code.");
            }
            return currency.ExchangeRate;
        }
  }
}
