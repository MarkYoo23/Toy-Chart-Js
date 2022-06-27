import { Container, createTheme, CssBaseline, Paper, ThemeProvider } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  BarElement,
} from 'chart.js';
import SpanTimeLineCard from './components/organisms/TimeLineCard';

function App() {
  const theme = createTheme();

  ChartJS.register(
    TimeScale,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <SpanTimeLineCard />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
