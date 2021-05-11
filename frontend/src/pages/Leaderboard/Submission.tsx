import React, {useState} from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

type ScoreSubmission = {
  onSubmit: (value: any) => void;
};

const ScoreSubmission = ({onSubmit}: ScoreSubmission) => {
  const [counter, setCounter] = useState(0);
  const ref = React.createRef<any>();

  const readJSON = async (file: any) => {
    const read = (file: any): Promise<{image: string; prediction: number}[]> =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            resolve(JSON.parse(reader.result));
          }
        };
        reader.onerror = (error) => reject(error);
      });

    const data = await read(file);

    onSubmit(btoa(data.map((_) => [_.image, _.prediction].join(':')).join(',')));
    setCounter(counter + 1);
  };

  return (
    <Box bgcolor="white" padding="32px" m="0 auto" width="600px">
      <p>
        Please upload a <pre style={{display: 'inline-block'}}>.json</pre>-file with the following
        format:
      </p>
      <pre style={{background: '#fafafa', padding: '16px'}}>
        [<br />
        {`  {"image": "1.jpg", "prediction": 1},`}
        <br />
        {`  {"image": "2.jpg", "prediction": 0},`}
        <br />
        {`  ...`}
        <br />]
      </pre>
      <Box display="flex" justifyContent="space-between" mt={4} width="100px">
        <Button
          type="button"
          variant="contained"
          disableElevation
          color="primary"
          onClick={() => {
            ref.current && ref.current.click();
          }}
        >
          Upload
        </Button>
        <input
          key={`upload:${counter}`}
          ref={ref}
          style={{
            position: 'absolute',
            top: '-9999px',
          }}
          type="file"
          name="file"
          onChange={(e) => {
            readJSON(e.target.files && e.target.files[0]);
          }}
        />
      </Box>
    </Box>
  );
};

export default ScoreSubmission;
