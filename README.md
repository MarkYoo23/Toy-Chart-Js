# Project initialize

npx create-react-app toy_chart_js --template typescript

# Pritter

## 1. Npm

$npm install -D prettier

## 2. Add File

.prettierrc

## 3. make file

(root)/.prettierrc

## 4. write file

{
"printWidth": 120,
"singleQuote": true,
"semi": true,
"tabWidth": 2,
"trailingComma": "all",
"endOfLine": "auto"
}

# Mui

## 1. Npm

npm install @mui/material @emotion/react @emotion/styled

# react-chartjs-2

## 1. Npm

npm install --save chart.js react-chartjs-2

## 2.

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);
