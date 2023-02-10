import { Flex } from "@chakra-ui/react";
import { AdvantageItem } from "./AdvantageItem";

export function AdvantageSection() {
  return <Flex justifyContent="space-between" margin="2rem 0">
    <AdvantageItem title="Free Shipping" content="On all UA order or order above $100" icon="/ico-truck.svg"></AdvantageItem>
    <AdvantageItem title="30 days return" content="Simply return it within 30 days for an exchange" icon="/ico-return.svg"></AdvantageItem>
    <AdvantageItem title="Support 24/7" content="Contact us 24 hours a day, 7 days a week" icon="/ico-support.svg"></AdvantageItem>
  </Flex>
}