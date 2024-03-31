import { defaultMetadata } from "~/site.config";
import Image from "next/image";
import Logo from '~/public/logo.png'

export function BrandMark() {
  return (
    <Image alt={defaultMetadata.title} className="mr-2 size-8" src={Logo} />
  )
}
