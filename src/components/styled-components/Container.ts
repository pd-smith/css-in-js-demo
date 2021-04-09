import { getPaddingStyling, getStackStyling } from '../../lib/styles/styled-components';
import styled from 'styled-components';
import { ContainerProps } from 'src/lib/types/container';

function getContainerStyles(props: ContainerProps) {
    return `
      ${getPaddingStyling(props)}
      ${getStackStyling(props)}
      background-color: cornflowerblue;
    `;
}

export const Container = styled.div<ContainerProps>`
  ${getContainerStyles}
`;

