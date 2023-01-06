import {
  Button,
  Card as CardMUI,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { formattedPrice } from '../../../utils/formattedPrice';

type CardProps = {
  imageUrl: string;
  title: string;
  price: number | string;
  actions?: boolean;
};

export const Card = ({
  imageUrl,
  title,
  price,
  actions = false,
}: CardProps) => {
  return (
    <CardMUI>
      <CardMedia sx={{ paddingTop: '56%' }} image={imageUrl} title={title} />

      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>

        <Typography>{formattedPrice(price)}</Typography>

        {actions ? (
          <CardActions
            sx={{
              marginTop: 2,
              display: 'flex',
              padding: 0,
              justifyContent: 'space-between',
            }}
          >
            <Button size="small" variant="contained">
              Editar
            </Button>
            <Button size="small" variant="contained" color="error">
              Remover
            </Button>
          </CardActions>
        ) : null}
      </CardContent>
    </CardMUI>
  );
};
