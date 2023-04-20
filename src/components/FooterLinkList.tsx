import { Box, ComponentWithAs, Flex, IconProps, List, ListItem, Text } from '@chakra-ui/react';

import Link from 'next/link';
import Image from 'next/image';

type LinkInfo = {
  title: string;
  href: string;
  icon?: ComponentWithAs<"svg", IconProps>;
};

export type SectionInfo = {
  title: string;
  links: LinkInfo[];
};
type Props = {
  data: SectionInfo;
};

export function FooterLinkList({ data }: Props) {
  return (
    <>
      <Text textTransform="uppercase" mb="1rem">
        {data.title}
      </Text>
      <Flex as={List} gap="1rem" flexDirection="column" color="gray">
        {data.links.map((link, i) => {
          
          return (
            <ListItem key={i}>
              <Flex as={Link} href={link.href} gap="0.25rem" alignItems="center">
                {link.icon && <link.icon boxSize="24px" />}
                {link.title}
              </Flex>
            </ListItem>
          )
        })}
      </Flex>
    </>
  );
}
