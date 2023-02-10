import Link from "next/link";
import Image from "next/image";
import { Container, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


export function Header() {
  return (<Box w="100%" as="header" borderBottom="solid 2px" borderColor="gray.100">
    <Container as={Flex} justifyContent="space-between" alignItems="center" size="lg">
      <Box margin="1rem 0">
        <Image src="/logo.svg" alt="" width={100} height={48} />
      </Box>
      <nav>
        <Flex as="ul" listStyleType="none" gap="2rem">
          <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Woman</Link></li>
          <li><Link href="#">Men</Link></li>
          <li><Link href="#">Beauty</Link></li>
          <li><Link href="#">Accesories</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Contact</Link></li>
        </Flex>
      </nav>

      <div className="commerce-menu">
        <Flex as="ul" listStyleType="none" gap="1.5rem">
          <li>
            <Link href="#"><Image src="/ico-search.svg" alt="" width="24" height="24" /></Link>
          </li>
          <li>
            <Link href="#"><Image src="/ico-globe.svg" alt="" width="24" height="24" /></Link>
          </li>
          <li>
            <Link href="#"><Image src="/ico-user.svg" alt="" width="24" height="24" /></Link>
          </li>
          <li>
            <Link href="#"><Image src="/ico-bag.svg" alt="" width="24" height="24" /></Link>
          </li>
        </Flex>
      </div>
    </Container>
  </Box>);
}