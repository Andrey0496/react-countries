import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

const LayoutStyles = styled.div`
  padding: 16px 20px;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: 1100px;
  margin: 0 auto;

  .footer {
    margin-top: 32px;
    text-align: center;
    color: var(colors-text-primary);
    font-size: 13px;
  }
`;
export default function Layout({ children }) {
  return (
    <LayoutStyles>
      <Header />
      <main>{children}</main>
      <footer className="footer">Andrey Castillo @ river.io</footer>
    </LayoutStyles>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
