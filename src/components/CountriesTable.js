import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { HeadingStyles, RowStyles } from '../styles/CountriesTableStyles';
import { formatNumber } from '../utils';

const sortCountries = (countries, orderBy, direction) => {
  if (direction === 'asc') {
    return [...countries].sort((a, b) => (a[orderBy] > b[orderBy] ? 1 : -1));
  }

  if (direction === 'desc') {
    return [...countries].sort((a, b) => (a[orderBy] > b[orderBy] ? -1 : 1));
  }

  return countries;
};

function SortArrow({ direction }) {
  if (!direction) {
    return <></>;
  }

  if (direction === 'desc') {
    return (
      <div className="headingArrow">
        <MdKeyboardArrowDown />
      </div>
    );
  } else {
    return (
      <div className="headingArrow">
        <MdKeyboardArrowUp />
      </div>
    );
  }
}

export default function CountriesTable({ countries }) {
  const [direction, setDirection] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

  const sortedCountries = sortCountries(countries, orderBy, direction);

  const switchDirection = () => {
    if (!direction) {
      setDirection('desc');
    } else if (direction === 'desc') {
      setDirection('asc');
    } else {
      setDirection(null);
    }
  };

  const setOrderByAndDirection = (orderByField) => {
    switchDirection();
    setOrderBy(orderByField);
  };

  return (
    <div>
      <HeadingStyles>
        <div></div>
        <button onClick={() => setOrderByAndDirection('name')}>
          <div>Name</div>
          {orderBy === 'name' && <SortArrow direction={direction} />}
        </button>
        <button onClick={() => setOrderByAndDirection('population')}>
          <div>Population</div>
          {orderBy === 'population' && <SortArrow direction={direction} />}
        </button>
        <button onClick={() => setOrderByAndDirection('area')}>
          <div>
            Area(km<sup>2</sup>)
          </div>
          {orderBy === 'area' && <SortArrow direction={direction} />}
        </button>
        <button onClick={() => setOrderByAndDirection('gini')}>
          <div>Gini</div>
          {orderBy === 'gini' && <SortArrow direction={direction} />}
        </button>
      </HeadingStyles>
      {sortedCountries.map(
        ({ alpha3Code, name, population, flag, area, gini }) => (
          <Link key={alpha3Code} to={`/country/${alpha3Code}`}>
            <RowStyles>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div>{name}</div>
              <div>{formatNumber(population)}</div>
              <div>{formatNumber(area || 0)}</div>
              <div>{gini || 0} %</div>
            </RowStyles>
          </Link>
        )
      )}
    </div>
  );
}

CountriesTable.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      alpha3Code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      population: PropTypes.number,
      flag: PropTypes.string,
      area: PropTypes.number,
      gini: PropTypes.number,
    })
  ).isRequired,
};
