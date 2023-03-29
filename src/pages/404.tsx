import { Flex, Text } from '@chakra-ui/react';

export default function Custom404() {
  return (
    <Flex height="50vh" alignItems={'center'} justifyContent="center" flexDirection={'column'}>
      <Text fontSize={'6xl'} color="red.500">
        404
      </Text>
      <Text>Page Not Found</Text>
    </Flex>
  );
}
