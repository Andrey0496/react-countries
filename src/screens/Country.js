import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import FullPageSpinner from '../components/FullPageSpinner';
import PageNotFound from '../components/PageNotFound';
import CountryScreenStyles from '../styles/CountryScreenStyles';
import { formatNumber } from '../utils';

async function getCountry(id) {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);

  const country = await res.json();

  return country;
}

function renderNeighbourCountries(borders) {
  if (borders && borders.length > 0) {
    return (
      <div className="borders-panel-row">
        <div className="panel-row-label">Neighbouring Countries</div>
        <div className="panel-row-value">
          {borders.map(({ alpha3Code, flag, name }) => (
            <Link key={alpha3Code} to={`/country/${alpha3Code}`}>
              <div className="country">
                <img src={flag} alt={name}></img>

                <div className="center">{name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  return null;
}

export default function Country() {
  let { countryId } = useParams();

  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState(null);
  const [status, setStatus] = useState('idle');

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';
  const isError = status == 'error';

  const setCountryInfo = useCallback(async () => {
    const countryInfo = await getCountry(countryId);
    const bordersInfo = await Promise.all(
      countryInfo.borders.map((border) => getCountry(border))
    );

    setCountry(countryInfo);
    setBorders(bordersInfo);
  }, [countryId]);

  useEffect(() => {
    setStatus('loading');

    setCountryInfo()
      .then(() => {
        setStatus('success');
      })
      .catch((e) => {
        console.log(e);
        setStatus('error');
      });
  }, [setCountryInfo]);

  if (isIdle || isLoading) {
    return <FullPageSpinner />;
  } else if (isError) {
    return <PageNotFound />;
  } else if (isSuccess) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{country.name} | React Countries</title>
        </Helmet>
        <CountryScreenStyles>
          <div className="container-left">
            <div className="panel overview-panel">
              <img src={country.flag} alt={country.name} />

              <h1>{country.name}</h1>
              <div className="center">{country.region}</div>

              <div className="overview-numbers">
                <div>
                  <div className="overview-value">
                    {formatNumber(country.population || 0)}
                  </div>
                  <div className="overview-label">Population</div>
                </div>
                <div>
                  <div className="overview-value">
                    {formatNumber(country.area || 0)}
                  </div>
                  <div className="overview-label">Area</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="panel details-panel">
              <h4>Details</h4>
              <div className="panel-row">
                <div className="panel-row-label">Capital</div>
                <div className="panel-row-value">{country.capital}</div>
              </div>
              <div className="panel-row">
                <div className="panel-row-label">Languages</div>
                <div className="panel-row-value">
                  {country.languages.map(({ name }) => name).join(', ')}
                </div>
              </div>
              <div className="panel-row">
                <div className="panel-row-label">Currencies</div>
                <div className="panel-row-value">
                  {country.currencies.map(({ name }) => name).join(', ')}
                </div>
              </div>
              <div className="panel-row">
                <div className="panel-row-label">Native Name</div>
                <div className="panel-row-value">{country.nativeName}</div>
              </div>
              <div className="panel-row">
                <div className="panel-row-label">Gini</div>
                <div className="panel-row-value">{country.gini || 0} %</div>
              </div>

              {renderNeighbourCountries(borders)}
            </div>
          </div>
        </CountryScreenStyles>
      </>
    );
  } else return null;
}
