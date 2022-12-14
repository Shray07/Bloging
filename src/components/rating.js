import React from 'react'
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';

export default function StyledRating() {
  return (
    <div>
      <Typography component="legend">Custom icon and color</Typography>
<StyledRating
  name="customized-color"
  defaultValue={2}
  getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
  precision={0.5}
  icon={<FavoriteIcon fontSize="inherit" />}
  emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
/>
<Typography component="legend">10 stars</Typography>
<Rating name="customized-10" defaultValue={2} max={10} />
    </div>
  )
}
