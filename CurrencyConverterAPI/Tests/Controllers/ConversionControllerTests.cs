using System;
using Microsoft.Extensions.Logging;
using NUnit;
using CurrencyConverterAPI.Controllers;
using NUnit.Framework;


namespace CurrencyConverterAPI.Tests.Controllers

{
  [TestFixture]
  public class ConversionControllerTests
    {
        private readonly ConversionController _controller;

        public ConversionControllerTests()
        {
            // Use a mock logger since logging is not under test
            var logger = new LoggerFactory().CreateLogger<ConversionController>();
            _controller = new ConversionController(logger);
        }

        [Test]
        [TestCase("USD", "EUR", 1, 0.85f)]
        [TestCase("EUR", "USD", 1, 1.0f / 0.85f)]
        [TestCase("USD", "JPY", 2, 220.0f)]
        [TestCase("GBP", "AUD", 10, (10 / 0.75f) * 1.35f)]
        [TestCase("INR", "BRL", 74, (74 / 74.0f) * 5.25f)]
        public void ConvertCurrency_ValidInputs_ReturnsExpectedResult(string from, string to, float amount, float expected)
        {
          // Act
          var result = _controller.ConvertCurrency(from, to, amount);

          // Assert
          Assert.That(result, Is.EqualTo(expected).Within(0.01f), $"Expected {expected} but got {result} for conversion from {from} to {to} with amount {amount}.");
    }

        [Test]
        public void ConvertCurrency_InvalidFromCurrency_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() => _controller.ConvertCurrency("XXX", "USD", 1));
        }

        [Test]
        public void ConvertCurrency_InvalidToCurrency_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() => _controller.ConvertCurrency("USD", "YYY", 1));
        }

        [Test]
        public void ConvertCurrency_NegativeAmount_ThrowsArgumentException()
        {
            Assert.Throws<ArgumentException>(() => _controller.ConvertCurrency("USD", "EUR", -5));
        }
    }
}
