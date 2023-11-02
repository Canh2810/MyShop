'use client'

// Libs
import { memo, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

// Types
import { IPost, TypoVariants, CommonVariants } from '@/types'

// Components
import { Badge, Typography } from '../index'

// Constants
import { ROUTES } from '@/constants'
import { generatePlaceholder } from '@/utils'

// Stores
import { useQueryStore } from '@/stores'

export interface PostCardProps {
  post: IPost
}

const PostCard = ({ post }: PostCardProps) => {
  const { id, title, imageURL, author, category, date } = post || {}
  const { username, avatar } = author || {}
  const router = useRouter()
  const clearQuery = useQueryStore((state) => state.clearQuery)

  // Navigate to single post page
  const handleClickPostCard = useCallback(() => {
    clearQuery()
    router.push(ROUTES.SINGLE_POST_PARAM + id)
  }, [clearQuery, id, router])

  return (
    <div
      className="p-4 rounded-xl border border-light-200 dark:border-dark-200 border-solid w-fit cursor-pointer"
      onClick={handleClickPostCard}
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
        <Badge variant={CommonVariants.Secondary} title={category} />
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
  )
}

export default memo(PostCard)
