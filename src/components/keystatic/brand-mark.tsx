import Logo from '~/public/logo.png';
import { defaultMetadata } from '~/site.config';
import Image from 'next/image';

export function BrandMark() {
  return (
    <Image alt={defaultMetadata.title} className="mr-2 size-8" src={Logo} />
  );
}
