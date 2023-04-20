import { Flex } from '@chakra-ui/react';

import Link from 'next/link';
import Image from 'next/image';

type Props = React.ComponentProps<typeof Flex>;

export function SocialIcons(props: Props) {
  return (
    <Flex gap="1rem" {...props}>
      <Link href="#">
        <Image src="/ico-small-fb.svg" width={24} height="24" alt="" />
      </Link>
      <Link href="#">
        <Image src="/ico-small-tw.svg" width={24} height="24" alt="" />
      </Link>
      <Link href="#">
        <Image src="/ico-small-ig.svg" width={24} height="24" alt="" />
      </Link>
      <Link href="#">
        <Image src="/ico-small-pin.svg" width={24} height="24" alt="" />
      </Link>
    </Flex>
  );
}
