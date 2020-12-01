import * as React from 'react';
import use5DayForecast from '../../../hooks/use5DayForecast';
import Heading from '../../Atoms/Heading';
import Icon from '../../Atoms/Icon';
import Loader from '../../Atoms/Loader';
import { StyledForecastData } from './5DayForecast.styled';

export interface IFiveDayForecastProps {
  locationId: string;
}

const FiveDayForecast: React.FC<IFiveDayForecastProps> = ({ locationId }) => {
  const { status, data } = use5DayForecast({
    locationId,
  });

  const summary = data?.data.Headline.Text;

  return (
    <>
      {status === 'loading' ? (
        <Loader />
      ) : status === 'error' ? (
        <span>Sorry, we cannot get the weather information</span>
      ) : (
        <>
          <Heading type="h3">{summary}</Heading>
          {data &&
            data.data.DailyForecasts.map((forecast: any, i: number) => {
              const date = forecast.Date.split('T')[0];
              const { Minimum, Maximum } = forecast.Temperature || {};
              const { Day } = forecast;
              return (
                <StyledForecastData key={i}>
                  <span>
                    {Minimum.Value}&#176; {Minimum.Unit}
                    {' --> '}
                    {Maximum.Value}&#176;{Maximum.Unit}
                  </span>
                  <span>
                    <Icon id={Day.Icon} text={Day.IconPhrase} />
                  </span>
                  <span>{date}</span>
                </StyledForecastData>
              );
            })}
        </>
      )}
    </>
  );
};

export default FiveDayForecast;
