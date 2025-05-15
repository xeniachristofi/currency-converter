using CurrencyConverterAPI.Controllers;
using NUnit.Framework;
using Moq;


namespace CurrencyConverterAPI.Tests.Controllers

{


  /// <summary>
  /// Unit tests for the <see cref="ConversionController"/> class.
  /// </summary>
  [TestFixture]
    public class ConversionControllerTests
    {
        private static ConversionController _controller = new ConversionController(new LoggerFactory().CreateLogger<ConversionController>());

    /// <summary>
    /// Initializes a new instance of the <see cref="ConversionControllerTests"/> class.
    /// </summary>


      public class ControllerTest
    {
        /// <summary>
        /// Test cases for the <see cref="ConversionController.ConvertCurrency"/> method.
        /// </summary>
      public static object[] cases =
      {
        new object[] { "USD", "EUR", 1, _controller.GetExchangeRateForCurrency("EUR") / _controller.GetExchangeRateForCurrency("USD")},
        new object[] { "EUR", "USD", 1, _controller.GetExchangeRateForCurrency("USD") / _controller.GetExchangeRateForCurrency("EUR") },
        new object[] { "USD", "JPY", 2, (_controller.GetExchangeRateForCurrency("JPY") / _controller.GetExchangeRateForCurrency("USD"))*2 },
        new object[] { "GBP", "AUD", 10, (_controller.GetExchangeRateForCurrency("AUD") / _controller.GetExchangeRateForCurrency("GBP"))*10 },
        new object[] { "INR", "BRL", 74, (_controller.GetExchangeRateForCurrency("BRL") / _controller.GetExchangeRateForCurrency("INR")) * 74 }
      };
    };
    
    /// <summary>
    /// Tests the <see cref="ConversionController.ConvertCurrency"/> method with valid inputs.
    /// Note: these tests are not parameterised
    /// </summary>
    /// <param name="from">The source currency code.</param>
    /// <param name="to">The target currency code.</param>
    /// <param name="amount">The amount to convert.</param>
    /// <param name="expected">The expected conversion result.</param>
    [TestCaseSource(typeof(ControllerTest), nameof(ControllerTest.cases))]
    public void ConvertCurrency_ValidInputs_ReturnsExpectedResult(string from, string to, double amount, double expected)
        {
            // Act
            var result = _controller.ConvertCurrency(from, to, amount);

            // Assert
            Assert.That(result, Is.EqualTo(expected), $"Expected {expected} but got {result} for conversion from {from} to {to} with amount {amount}.");
        }

        /// <summary>
        /// Tests that <see cref="ConversionController.ConvertCurrency"/> throws an <see cref="ArgumentException"/> for an invalid source currency.
        /// </summary>
        [Test]
        public void ConvertCurrency_InvalidFromCurrency_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() => _controller.ConvertCurrency("XXX", "USD", 1));
        }

        /// <summary>
        /// Tests that <see cref="ConversionController.ConvertCurrency"/> throws an <see cref="ArgumentException"/> for an invalid target currency.
        /// </summary>
        [Test]
        public void ConvertCurrency_InvalidToCurrency_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() => _controller.ConvertCurrency("USD", "YYY", 1));
        }

        /// <summary>
        /// Tests that <see cref="ConversionController.ConvertCurrency"/> throws an <see cref="ArgumentException"/> for a negative amount.
        /// </summary>
        [Test]
        public void ConvertCurrency_NegativeAmount_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() => _controller.ConvertCurrency("USD", "EUR", -5));
        }

    /// <summary>
    /// Tests that <see cref="ConversionController.GetExchangeRateForCurrency"/> returns a correct value.
    /// </summary>
    [Test]
    public void GetExchangeRateForCurrency_ReturnsTrue()
    {
      Assert.That(_controller.GetExchangeRateForCurrency("USD"), Is.EqualTo(1), "Exchange rate for USD should be 1.");
    }
  }
}
