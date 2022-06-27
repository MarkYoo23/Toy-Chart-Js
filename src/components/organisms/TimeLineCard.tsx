import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { TimeLineElement } from '../../models/TimeLineElement';
import SpanTimeLineChart from '../molecules/SpanTimeLineChart';

const SpanTimeLineCard: React.FC = () => {
  const elementsA: TimeLineElement[] = [];
  const elementsB: TimeLineElement[] = [];

  const currentTime = new Date();

  for (let i = 0; i < 100; i++) {
    var targetTime = new Date(currentTime.getTime() + 1000 * i * 60 * 24);
    const elementA: TimeLineElement = {
      spanTime: i,
      x: targetTime.getTime(),
      value: 0 - i * 1,
    };

    elementsA.push(elementA);

    const elementB: TimeLineElement = {
      spanTime: i,
      x: targetTime.getTime(),
      value: 25 - i * 5,
    };

    elementsB.push(elementB);
  }

  return (
    <Card sx={{ minWidth: 600 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <SpanTimeLineChart elementsA={elementsA} elementsB={elementsB} />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default SpanTimeLineCard;
