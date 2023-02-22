import * as React from 'react';

import { Box, Flex } from '@chakra-ui/react';

interface ICategoryLabelProps {
  children: React.ReactNode;
}

export const CenteredLabel: React.FunctionComponent<ICategoryLabelProps> = ({ children }) => {
  return (
    <Flex display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box
        bgColor="white"
        padding="1rem 1.5rem"
        position="relative"
        width="fit-content"
        zIndex="1"
        textTransform="uppercase"
        fontWeight="bold"
        borderRadius="0.25rem"
      >
        {children}
      </Box>
    </Flex>
  );
};
