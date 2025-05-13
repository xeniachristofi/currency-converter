using Microsoft.AspNetCore.Mvc;

namespace CurrencyConverterAPI.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ConversionController : ControllerBase
  {
    // Mock list of currencies and exchange rates (relative to USD)
    private static readonly List<Currency> Currencies = new List<Currency>()
    {
      new Currency { Code = "USD", ExchangeRate = 1.0f },
      new Currency { Code = "EUR", ExchangeRate = 0.85f },
      new Currency { Code = "ZAR", ExchangeRate = 0.055f },
      new Currency { Code = "GBP", ExchangeRate = 0.75f },
    };
 

    private readonly ILogger<ConversionController> _logger;

    public ConversionController(ILogger<ConversionController> logger)
    {
      _logger = logger;
    }

    [HttpGet(Name = "convert")]
    public float ConvertCurrency(string from, string to, float amount)
    {
      var fromCurrency = Currencies.FirstOrDefault(c => c.Code == from);
      var toCurrency = Currencies.FirstOrDefault(c => c.Code == to);
      if (fromCurrency == null || toCurrency == null)
      {
        throw new ArgumentException("Invalid currency code.");
      }
      // Convert the amount to USD first, then to the target currency
      var amountInUSD = amount / fromCurrency.ExchangeRate;
      return amountInUSD * toCurrency.ExchangeRate;
    }
  }
}
