import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import CountriesTable from '../components/CountriesTable';
import FullPageSpinner from '../components/FullPageSpinner';
import SearchInput from '../components/SearchInput';

const HomeScreenStyles = styled.div`
  .counts {
    margin: 12px 0;
    color: var(--colors-text-secondary);
  }

  .header {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 720px) {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .counts {
      flex: 1;
    }

    .input {
      flex: 2;
    }
  }
`;

export default function Home() {
  const [countries, setCountries] = useState(null);
  const [status, setStatus] = useState('idle');
  const [keyword, setKeyword] = useState('');

  const isIdle = status === 'idle';
  const isLoading = status === 'loading';
  const isSuccess = status === 'success';

  useEffect(() => {
    setStatus('loading');

    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((countries) => {
        setCountries(countries);
        setStatus('success');
      });
  }, []);

  const filteredCountries = countries?.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();

    setKeyword(e.target.value.toLowerCase());
  };

  if (isIdle || isLoading) {
    return <FullPageSpinner />;
  } else if (isSuccess) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Countries</title>
        </Helmet>
        <HomeScreenStyles>
          <div className="header">
            <div className="counts">
              Found {filteredCountries.length} countries
            </div>
            <div className="input">
              <SearchInput
                placeholder="Filter by Name, Region or SubRegion"
                onChange={onInputChange}
              />
            </div>
          </div>
          <CountriesTable countries={filteredCountries} />
        </HomeScreenStyles>
      </>
    );
  } else return null;
}
