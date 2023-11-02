// Libs
import { memo } from 'react'
import Image from 'next/image'

// Types
import { IPost, TypoVariants } from '@/types'

// Components
import { Badge, Typography } from '../index'
import { generatePlaceholder } from '@/utils'

export interface PostCardProps {
  post: IPost
}

const Banner = ({ post }: PostCardProps) => {
  const { title, imageURL, author, category, date } = post || {}
  const { username, avatar } = author || {}

  return (
    <section className="relative mb-[64px]">
      <div className="relative w-[1216px] h-[600px]">
        <Image
          src={imageURL}
          fill
          alt={title}
          placeholder="blur"
          blurDataURL={generatePlaceholder(1216, 600)}
          sizes="100vw"
          style={{ borderRadius: '12px', objectFit: 'cover' }}
          priority
        />
      </div>
      <div className="absolute left-[64px] bottom-[-64px]  bg-white dark:bg-dark-300 rounded-xl border border-light-200 dark:border-dark-200 border-solid w-[589px] flex flex-col items-start gap-4 p-10 shadow-md">
        <Badge title={category} />
        <Typography variant={TypoVariants.HeadingExtraLarge}>
          {title}
        </Typography>
        <div className="mt-2 flex items-center gap-5">
          <div className="relative w-9 h-9">
            <Image
              src={imageURL}
              fill
              alt={avatar}
              style={{ borderRadius: '50%', marginRight: '8px' }}
            />
          </div>
          <Typography>{username}</Typography>
          <Typography>{date}</Typography>
        </div>
      </div>
    </section>
  )
}

export default memo(Banner)
