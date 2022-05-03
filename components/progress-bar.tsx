
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const  LinearDeterminate = () => {
  const [progress, setProgress] = React.useState(100);

    
  

  return (
    <Box sx={{ width: '100%' }}>
        {progress}
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}




export {LinearDeterminate};

