import styled from 'styled-components';

export const HeadingStyles = styled.div`
  display: flex;
  padding: 20px;

  > div {
    flex: 1;
    margin-right: 16px;
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    flex: 4;
    font-weight: 500;
    color: var(--colors-text-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .headingArrow {
    color: var(--colors-primary);
    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 2px;
  }
`;

export const RowStyles = styled.div`
  display: flex;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 16px;
  align-items: center;
  background-color: var(--colors-background-light);
  box-shadow: var(--box-shadow);
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  color: var(--colors-text-primary);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }

  .flag {
    flex: 1;
    margin-right: 16px;

    img {
      border-radius: 2px;
      width: 100%;
    }
  }

  div {
    flex: 4;
  }
`;
