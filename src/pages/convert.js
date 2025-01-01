import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import digitalImage from './financial2.png';
import './convert.css';

const Convert = () => {
  // State for input and conversion data
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('IDR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});

  // API Key for CurrencyFreaks (replace with your actual API key)
  const API_KEY = '2a3a1ed58f974a8185d2d5ff8943f911';
  const API_URL = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}`;

  // Fetch the latest exchange rates from the API
  const fetchExchangeRates = async () => {
    try {
      const response = await axios.get(API_URL);
      setExchangeRates(response.data.rates); // Store the rates in state
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  };

  // Fetch exchange rates on component mount and when the currencies change
  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency, toCurrency]);

  // Handle currency conversion when amount or currencies change
  const handleConvert = () => {
    if (amount && fromCurrency && toCurrency && exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const rateFromBase = exchangeRates[fromCurrency];
      const rateToBase = exchangeRates[toCurrency];
      const result = (amount / rateFromBase) * rateToBase; // Convert amount
      setConvertedAmount(result.toFixed(2)); // Set converted amount (rounded to 2 decimal places)
    }
  };

  return (
    <div className="Convert">
      <div className="tulisanconvert">Convert your currency</div>
      <div className="inputdantombol">
        <div className="inputtombol">
          <div className="inputtombol1">
            <div className="input1">
              <input
                type="number"
                placeholder="Enter the amount to convert"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} // Update the amount
              />
            </div>
            <div className="input2">
              {convertedAmount !== null && `${convertedAmount}`} {/* Display the result */}
            </div>
          </div>
          <div className="inputtombol2">
            <select
              className="currency-dropdown"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)} // Handle currency change
            >
              <option value="USD">Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="GBP">British Pound Sterling (GBP)</option>
                <option value="IDR">Indonesian Rupiah (IDR)</option>
                <option value="AUD">Australian Dollar (AUD)</option>
                <option value="CAD">Canadian Dollar (CAD)</option>
                <option value="CHF">Swiss Franc (CHF)</option>
                <option value="CNY">Chinese Yuan (CNY)</option>
                <option value="NZD">New Zealand Dollar (NZD)</option>
                <option value="HKD">Hong Kong Dollar (HKD)</option>
                <option value="SGD">Singapore Dollar (SGD)</option>
                <option value="KRW">South Korean Won (KRW)</option>
                <option value="INR">Indian Rupee (INR)</option>
                <option value="BRL">Brazilian Real (BRL)</option>
                <option value="ZAR">South African Rand (ZAR)</option>
                <option value="MXN">Mexican Peso (MXN)</option>
                <option value="RUB">Russian Ruble (RUB)</option>
                <option value="MYR">Malaysian Ringgit (MYR)</option>
                <option value="THB">Thai Baht (THB)</option>

            </select>
            <select
              className="currency-dropdown"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)} // Handle currency change
            >
              <option value="USD">Dollar (USD)</option>
                <option value="EUR">Euro (EUR)</option>
                <option value="JPY">Japanese Yen (JPY)</option>
                <option value="GBP">British Pound Sterling (GBP)</option>
                <option value="IDR">Indonesian Rupiah (IDR)</option>
                <option value="AUD">Australian Dollar (AUD)</option>
                <option value="CAD">Canadian Dollar (CAD)</option>
                <option value="CHF">Swiss Franc (CHF)</option>
                <option value="CNY">Chinese Yuan (CNY)</option>
                <option value="NZD">New Zealand Dollar (NZD)</option>
                <option value="HKD">Hong Kong Dollar (HKD)</option>
                <option value="SGD">Singapore Dollar (SGD)</option>
                <option value="KRW">South Korean Won (KRW)</option>
                <option value="INR">Indian Rupee (INR)</option>
                <option value="BRL">Brazilian Real (BRL)</option>
                <option value="ZAR">South African Rand (ZAR)</option>
                <option value="MXN">Mexican Peso (MXN)</option>
                <option value="RUB">Russian Ruble (RUB)</option>
                <option value="MYR">Malaysian Ringgit (MYR)</option>
                <option value="THB">Thai Baht (THB)</option>

            </select>
          </div>
        </div>
        <div className="tombolconvert">
          <button className="klikconvert" onClick={handleConvert}>
            Convert
          </button>
        </div>
        <div className="gambaran">
          <img src={digitalImage} alt="digital" />
        </div>
      </div>
    </div>
  );
};

export default Convert;
