import styled from 'styled-components';

const TabBar = styled.nav`
  // Positioning
  position: ${(props) => props.absolute ? 'absolute' : 'relative'};
  z-index: 20;

  // Size
  width: 100%;
  height: var(--topbar-height);
  display: flex;
  justify-content: center;

  &.sticky {
    position: fixed;
    top: 0;
    background: ${(props) => props.transparent ? 'none' : 'var(--light-gray)'};
  }

  // Styling
  background: ${(props) => props.transparent ? 'none' : 'var(--background-color)'};
  box-shadow: ${(props) => props.borderless ? 'none' : 'inset 0 -7px 1px -7px var(--foreground-color)'};
  color: ${(props) => props.reversed ? 'var(--background-color)' : 'var(--foreground-color)'};

  + nav {
    height: var(--segment-bar-height);
  }

  &.bottom-bar {
    // Positioning
    position: fixed;
    bottom: 0;
    z-index: 9999;
    height: var(--tab-bar-height);
    // Styling
    box-shadow: inset 0 7px 1px -7px var(--foreground-color);

    // Larger Screens
    // @media (min-width: 720px) {
    //   // Positioning
    //   top: 0;
    //   left: 0;
    //   bottom: auto;

    //   // Size
    //   width: var(--topbar-height);
    //   height: 100vh;

    //   // Styling
    //   box-shadow: inset -7px 0 1px -7px var(--foreground-color);
    // }
  }
`;

export default TabBar;
