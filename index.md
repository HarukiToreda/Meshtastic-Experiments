---
layout: default
title: Home
---

# Haruki's Meshtastic Experiments

Welcome to my personal Meshtastic experiments. Here, I share my own measurements, values, and various comparisons to help others interested in Meshtastic. Feel free to explore the different sections through the navigation buttons below.

## Navigation and Descriptions

<table>
  <thead>
    <tr>
      <th>Page</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/Meshtastic-Experiments/Battery-Runtime-Tests" class="button">Battery Runtime Tests</a></td>
      <td>I conducted various tests with different devices and batteries to determine the actual runtime. This helps in better planning how long a node will remain powered on when using a battery.</td>
    </tr>
    <tr>
      <td><a href="/Meshtastic-Experiments/ADC-Calculator" class="button">ADC Calculator</a></td>
      <td>The ADC Calculator on the Meshtastic website is often inaccurate as it calculates based on percentage. This calculator, however, uses the voltage measured by the node for more precise results.</td>
    </tr>
    <tr>
      <td><a href="/Meshtastic-Experiments/LoRa-Boards-Comparison-Table" class="button">LoRa Boards Comparison Table</a></td>
      <td>This extensive table compares all development boards with built-in LoRa, allowing you to see and plan out the features available for better planning.</td>
    </tr>
    <tr>
      <td><a href="/Meshtastic-Experiments/LoRa-Boards-Power-Measurements" class="button">LoRa Boards Power Measurements</a></td>
      <td>I personally tested and measured the power consumption of each node I own to provide real values based on the tested firmware.</td>
    </tr>
    <tr>
      <td><a href="/Meshtastic-Experiments/Additional-Hardware" class="button">Additional Hardware</a></td>
      <td>This is a list of all additional hardware currently supported by Meshtastic.</td>
    </tr>
  </tbody>
</table>

<style>
  .button {
    display: inline-block;
    padding: 10px 20px;
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #007BFF;
    text-align: center;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .button:hover {
    background-color: #0056b3;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
  }

  th {
    background-color: #f2f2f2;
    text-align: left;
  }

  td {
    vertical-align: top;
  }
</style>
