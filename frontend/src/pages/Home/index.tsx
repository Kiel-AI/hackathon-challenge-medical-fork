import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <>
      <Box mt={4}>
        <Box bgcolor="white" m="0 auto" p={4} width="640px">
          <Box mb={2}>
            <Typography variant="h6">Background and Rationale</Typography>
          </Box>
          <Typography>
            In the current critical situation of COVID-19 spread throughout the world appropriate
            image assessment can help to optimize treatment for patients admitted to hospitals.
            Currently imaging by x-ray radiography is standard, in uncertain cases with CT. Patterns
            typical for COVID-19 commence with predominantly peripheral ground glass opacities
            visible on CT, followed by interstitial changes and consolidations that can become
            extensive at later disease stage, associated with a poor prognosis. Radiographs are less
            sensitive and specific compare to CT but still contain valuable information{' '}
            <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2766086">
              (W. Liang et al., JAMA 2020)
            </a>
            . Imaging may help improve patient stratification, e.g. predicting a poor outcome.
          </Typography>
          <Box my={2}>
            <Typography variant="h6">Artificial intelligence in imaging</Typography>
          </Box>
          <Typography>
            Classification of patients based on AI analysis of chest radiographs has been documented
            for lung disorders including tuberculosis, pneumonia,...{' '}
            <a href="https://www.sciencedirect.com/science/article/pii/S0045790618332890">
              (I. Sirazitdinov et al. Comput Electr Eng 2019)
            </a>
            . AI methods may be helpful in assisting the radiologist, pointing to suspicious image
            features. AI method development require large datasets and technical expertise. However,
            application later can be done for single patients and on patients groups. Currently, the
            number of COVID-19 cases in public repositories is limited. We have extensively searched
            the web but the number of cases made available is still limited. How to deal with this
            situation to come up with a powerful AI approach? You may want to take a look at the web
            publication by Adrian Rosebrock, which you can download{' '}
            <a href="https://www.pyimagesearch.com/2020/03/16/detecting-covid-19-in-x-ray-images-with-keras-tensorflow-and-deep-learning/">
              here
            </a>
            .
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
