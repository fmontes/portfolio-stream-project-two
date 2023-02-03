import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (<header>
    <Image src="/logo.svg" alt="" width={100} height={48} />
    <nav>
      <ul>
        <li><Link href="#">About Us</Link></li>
        <li><Link href="#">Woman</Link></li>
        <li><Link href="#">Men</Link></li>
        <li><Link href="#">Beauty</Link></li>
        <li><Link href="#">Accesories</Link></li>
        <li><Link href="#">Blog</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </nav>

    <div className="commerce-menu">
      <ul>
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
      </ul>
    </div>
  </header>);
}