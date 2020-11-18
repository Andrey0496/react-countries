import * as mediaQueries from '../styles/mediaQueries';
import styled from 'styled-components';

const CountryScreenStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  color: var(--colors-text-primary);

  .container-left {
    grid-column: 1 / span 4;
  }

  .container-right {
    grid-column: 5 / span 8;
  }

  .panel {
    background-color: var(--colors-background-light);
    box-shadow: var(--box-shadow);
    padding: 20px;
    border-radius: 8px;
  }

  .overview-panel {
    img {
      width: 100%;
      border-radius: 4px;
    }

    h1 {
      text-align: center;
      margin: 20px 0;
    }

    .overview-numbers {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      text-align: center;
      line-height: 20px;

      .overview-value {
        font-weight: 500;
      }

      .overview-label {
        font-size: 14px;
        color: var(--colors-text-secondary);
      }
    }
  }

  .details-panel {
    h4 {
      margin-top: 0px;
      margin-bottom: 16px;
    }

    .panel-row {
      display: flex;
      justify-content: space-between;
      padding: 20px 0px;
      border-bottom: 1px solid var(--colors-background-dark);

      .panel-row-label {
        color: var(--colors-text-secondary);
      }

      .panel-row-value {
        font-weight: 500;
      }
    }

    .borders-panel-row {
      .panel-row-label {
        padding: 20px 0px;
        color: var(--colors-text-secondary);
      }

      .panel-row-value {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 24px;
      }

      .country img {
        width: 100%;
        border-radius: 4px;
      }
    }
  }

  ${mediaQueries.small} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;

    .container-left {
      grid-column: auto / auto;
    }

    .container-right {
      grid-column: auto / auto;
    }
  }
`;

export default CountryScreenStyles;
