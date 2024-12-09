import Image from 'next/image'

interface HeroBannerProps {
  title: string
  description: string
  image: string
  className?: string
}

export function Herobanner({ title, description, image, className }: HeroBannerProps) {
  return (
    <div className={`rounded-lg p-6 text-white ${className}`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <Image src={image} alt="Car" width={300} height={200} className="object-contain" />
        </div>
      </div>
    </div>
  )
}

