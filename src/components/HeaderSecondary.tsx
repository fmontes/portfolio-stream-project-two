import { ShareIcon } from '@/icons/Share';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Container,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Heading,
  Link,
} from '@chakra-ui/react';

type Props = {
  children?: React.ReactNode;
  breadcrumb: {
    href: string;
    text: string;
  }[];
};

export function HeaderSecondary({ children, breadcrumb }: Props) {
  const title = breadcrumb[breadcrumb.length - 1].text;

  return (
    <Box bg="gray.100" padding="1rem">
      <Container>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Breadcrumb textTransform={'capitalize'} fontSize={'sm'} separator={<ChevronRightIcon />}>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href="/">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            {breadcrumb.map(({ text, href }, index) => {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink as={Link} href={href}>
                    {text}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              );
            })}
          </Breadcrumb>

          <Button color={'gray'} variant={'ghost'} leftIcon={<ShareIcon w={18} h={18} />}>
            Share
          </Button>
        </Flex>

        <Heading textTransform={'capitalize'} textAlign={'center'} as="h1" fontSize="2xl" my={'1.5rem'}>
          {title}
        </Heading>
        {children}
      </Container>
    </Box>
  );
}
