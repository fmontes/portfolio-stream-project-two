import Link from "next/link";
import Image from "next/image";

export function TopBar() {
  return (<div>
    <ul>
      <li>
        <Link href="#">+38 (050) 12 34 567</Link>
      </li>
      <li>
        <Link href="#">Ukraine, Kyiv,Khreshchatyk 1</Link>
      </li>
      <li>
        <Link href="#">All week 24/7</Link>
      </li>
    </ul>

    <ul>
      <li>
        <Link href="#"><Image src="/ico-small-fb.svg" width={24} height="24" alt="" /></Link>
      </li>
      <li>
        <Link href="#"><Image src="/ico-small-fb.svg" width={24} height="24" alt="" /></Link>
      </li>
      <li>
        <Link href="#"><Image src="/ico-small-fb.svg" width={24} height="24" alt="" /></Link>
      </li>
      <li>
        <Link href="#"><Image src="/ico-small-fb.svg" width={24} height="24" alt="" /></Link>
      </li>
    </ul>
  </div>);
}