import styled from '@emotion/styled';
import { getPaddingStyling, getStackStyling } from '../../lib/styles/emotion';
import { ContainerProps } from 'src/lib/types/container';
  
const Container = styled.div<ContainerProps>(getPaddingStyling, getStackStyling, {
    backgroundColor: 'cornflowerblue'
});

export default Container;

