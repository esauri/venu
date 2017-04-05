import styled from 'styled-components';

const FlexListView = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;

  padding: 0;
  padding-top: var(--padding);


  li {
    margin: 0 var(--padding) var(--padding) 0;
  }

  &.spaced li {
    margin: 0 calc(var(--padding) * 1.5) calc(var(--padding) * 1.5) 0;
  }
`;

export default FlexListView;