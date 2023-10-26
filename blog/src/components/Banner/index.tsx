// Libs
import { memo } from 'react'
import Image from 'next/image'

// Types
import { IPost, TypoVariants } from '@/types'

// Components
import { Badge, Typography } from '../index'

export interface PostCardProps {
  post: IPost
}

const Banner = ({ post }: PostCardProps) => {
  const { title, imageURL, author, category, date } = post || {}
  const { username, avatar } = author || {}

  return (
    <section className="relative">
      <Image
        src={imageURL}
        width={1216}
        height={600}
        alt={title}
        style={{ borderRadius: '12px' }}
        priority
      />
      <div className="absolute left-[64px] bottom-[-68px] bg-white dark:bg-dark-300 rounded-xl border border-light-200 dark:border-dark-200 border-solid w-[589px] flex flex-col items-start gap-4 p-10 shadow-md">
        <Badge title={category} />
        <Typography variant={TypoVariants.HeadingExtraLarge}>
          {title}
        </Typography>
        <div className="mt-2 flex items-center gap-5">
          <Image
            src={imageURL}
            width={36}
            height={36}
            alt={avatar}
            style={{ borderRadius: '18px', marginRight: '8px' }}
            priority
          />
          <Typography>{username}</Typography>
          <Typography>{date}</Typography>
        </div>
      </div>
    </section>
  )
}

export default memo(Banner)
