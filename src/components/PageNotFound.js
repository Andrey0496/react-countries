import styled from 'styled-components';

const PageNotFoundStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: var(--colors-primary);
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 1px solid var(--colors-text-primary);
    }
  }
`;

function PageNotFound() {
  return (
    <PageNotFoundStyles>
      <div>
        <h1>404</h1>
        <h2>This page could not be found</h2>
      </div>
    </PageNotFoundStyles>
  );
}

export default PageNotFound;
