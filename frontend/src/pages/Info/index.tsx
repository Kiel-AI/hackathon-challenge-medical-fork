import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Info = () => {
  return (
    <>
      <Box mt={4}>
        <Box bgcolor="white" p={4} m="0 auto" width="640px">
          <Box mb={2}>
            <Typography variant="h6">
              Challenge Strategy: Optimized image assessment for COVID-19{' '}
            </Typography>
          </Box>
          <Typography>
            For training and validation of the networks we provide a dataset of radiographs from a
            pre COVID-19 time{' '}
            <a href="https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia?">
              Kaggle Chest X-ray Competition (Pneumonia
            </a>
            ). This includes 3883 cases with pneumonia and 1349 healthy controls. This dataset can
            be downloaded from the challenge repository. It contains the correct health status,
            pneumonia and healthy are separated in the respective folders. Currently the validation
            dataset contains only a few cases – feel free to redistribute the cases.
          </Typography>
          <Box my={2}>
            <Typography variant="h6">Testing the performance of your model</Typography>
          </Box>
          <Typography>
            We have kept 624 of the cases for an independent test dataset. This dataset can be
            downloaded from the challenge repository, too. Once you have a model ready for testing
            you should run it on this test dataset and export your predicted health status as a JSON
            file, the specific format being shown on the <strong>'Leaderboard'</strong> page. Right
            there you can upload your JSON file and you will see the performance of your model,
            specifically the accuracy of your predictions, shown as a bar chart. Your own model’s
            performance is indicated in yellow and that of (potential) competitors in a different
            color. You can make this test as often as you like. If the performance of your current
            test is poorer compared to previous test from your team the bar will remain at the best
            level achieved by your team so far. If you maintain a good tracking of your model
            history you can pick your strongest model and see how you are doing compared to the
            competition (provided that other teams also have managed to create an outcome file).
          </Typography>
          <Box my={2}>
            <Typography variant="h6">Checking the performance on COVID-19 cases</Typography>
          </Box>
          <Typography>
            On Saturday we will notify you of a test dataset of cases with COVID-19 and healthy
            controls. You can thus test your model on this dataset and the performance will be
            indicated as a separate bar chart on the web site. As stated above, the number of
            COVID-19 cases in public repositories is limited. We have extensively searched the web
            and have selected a subset of 82 cases from{' '}
            <a href="https://josephpcohen.com/w/public-covid19-dataset/">
              a larger dataset put together by J.P.Cohen
            </a>
            . These cases have been reviewed by an experienced radiologist at the University Medical
            Center Schleswig-Holstein in Kiel, Prof. Marcus Both, who selected only cases without
            technical problems and clear patterns of abnormality. They are matched by 82 cases.
          </Typography>
        </Box>
      </Box>
      <Box m="0 auto" mt={4}>
        <Box bgcolor="white" padding={4} m="0 auto" width="640px">
          <Box my={2}>
            <Typography variant="h6">The outcome and the future</Typography>
          </Box>
          <Typography>
            The winner will be the team with the best average performance (on accuracy) on
            pre-COVID-19 pneumonia cases and on COVID-19 cases. Given the limited number of
            established open access COVID-19 cases we believe this is a fair criterion: the test on
            the pre-COVID-19 dataset will provide a solid indication of the ability of the model to
            identify pneumonia; currently there is no solid evidence that COVID-19 pneumonia will
            show features on radiographs that differ from pneumonia due to other causes and thus a
            robust model should also perform well on COVID-19 cases.
          </Typography>
          <Box my={2}>
            <Typography variant="h6">What is ahead</Typography>
          </Box>
          <Typography>
            Having said this we plan to move forward. Once larger image databases become available
            (and we are involved in a number of projects collecting those) we should test whether
            your models aren’t perhaps even better than what is expected today. So if you like, stay
            connected and we can continue the research together.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Info;
