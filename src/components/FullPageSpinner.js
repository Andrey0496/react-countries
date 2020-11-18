import { FaSpinner } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
  color: var(--colors-text-primary);
`;
Spinner.defaultProps = {
  'aria-label': 'loading',
};

const FullPageSpinnerStyles = styled.div`
  font-size: 4em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function FullPageSpinner() {
  return (
    <FullPageSpinnerStyles>
      <Spinner />
    </FullPageSpinnerStyles>
  );
}

export default FullPageSpinner;
