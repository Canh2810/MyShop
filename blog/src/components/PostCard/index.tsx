// Libs
import { memo } from 'react'
import Image from 'next/image'

// Types
import { IPost, TypoVariants, CommonVariants } from '@/types'

// Components
import { Badge, Typography } from '../index'

// Constants
import { generatePlaceholder } from '@/utils'

import { Heart } from '@/assets'

export interface PostCardProps {
  post: IPost
  onCLickPostCard: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const PostCard = ({ post, onCLickPostCard }: PostCardProps) => {
  const { title, imageURL, author, category, date, favorite } = post || {}
  const { username, avatar } = author || {}

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onCLickPostCard(event)
  }

  return (
    <>
      <div
        className="p-4 rounded-xl border border-light-200 dark:border-dark-200 border-solid w-fit cursor-pointer"
        onClick={handleClick}
      >
        <div className="relative w-[354px] h-[234px]">
          <Image
            src={imageURL}
            alt={title}
            fill
            placeholder="blur"
            blurDataURL={generatePlaceholder(354, 234)}
            style={{
              borderRadius: '6px',
              marginBottom: '16px',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="p-2 w-[334px] flex flex-col items-start justify-between gap-5">
          <div className="flex items-center justify-between w-full z-40">
            <Badge variant={CommonVariants.Secondary} title={category} />
            <Heart favorite={favorite} />
          </div>
          <Typography
            variant={TypoVariants.HeadingLarge}
            className="w-full h-[84px] line-clamp-3"
          >
            {title}
          </Typography>
          <div className="mt-1 flex items-center gap-5">
            <Image
              src={avatar}
              width={36}
              height={36}
              alt={avatar}
              sizes="334px"
              style={{ borderRadius: '50%', marginRight: '-8px' }}
            />
            <Typography className="font-primary !important">
              {username}
            </Typography>
            <Typography className="font-primary !important">{date}</Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(PostCard)
