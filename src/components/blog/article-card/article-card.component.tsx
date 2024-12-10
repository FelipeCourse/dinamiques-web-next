import { UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'react';

import { cn } from '@/shared/libs';
import { ArticleModel } from '@/shared/models';

import {
  ArticleAuthorNameComponent,
  ArticlePublishedLastDateComponent,
  ArticleReadingTimeComponent,
  AvatarComponent,
  AvatarImageComponent,
  CardComponent,
  CardContentComponent,
  CardFooterComponent,
  CardHeaderComponent,
  SectionDecoratorComponent,
  TitleComponent,
} from '@/components';

interface ArticleCardComponentProps extends ComponentProps<'article'> {
  article: ArticleModel;
}

export function ArticleCardComponent({
  article: { category, teacher, article },
  ...props
}: ArticleCardComponentProps): JSX.Element {
  return (
    <Link
      className={cn('grid max-w-[27.5rem] w-full group', props.className)}
      href={`/blog/${article.slug}`}
    >
      <CardComponent
        className="grid overflow-hidden duration-500 ease-in-out group-hover:border-base-11"
        as="article"
        itemScope
        itemType="https://schema.org/Article"
      >
        <div
          className={`relative flex h-[13.75rem] overflow-hidden ${!article.highlightImageUrl && 'bg-primary-4'}`}
        >
          {article.highlightImageUrl && (
            <Image
              className="rounded-t-md object-cover duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-70"
              src={article.highlightImageUrl}
              width={440}
              height={220}
              alt={article.title}
              itemProp="image"
            />
          )}
          <SectionDecoratorComponent className="absolute bottom-0 z-[2] h-[2.5rem] fill-base-15" />
        </div>
        <CardHeaderComponent className="pb-6 pt-8">
          <h2
            className="mb-3 border-s-2 ps-1 text-xs font-semibold uppercase tracking-[0.038em] text-base-white"
            style={{ borderColor: category.color }}
            itemProp="genre"
          >
            {category.name}
          </h2>
          <TitleComponent
            className="font-normal text-primary-3 xs:text-h3-md md:text-h3-md lg:text-h3-md"
            tag="h1"
            hasBarDecorator={false}
            hasDotDecorator={false}
            itemProp="headline"
          >
            {article.title}
          </TitleComponent>
        </CardHeaderComponent>
        <CardContentComponent>
          <p className="text-md" itemProp="description">
            {article.summary}
          </p>
        </CardContentComponent>
        <CardFooterComponent className="flex flex-wrap items-center justify-between gap-5 self-end pt-11">
          <div className="flex items-center gap-x-3">
            <AvatarComponent className="flex items-center justify-center bg-base-16">
              {teacher.avatarImageUrl ? (
                <AvatarImageComponent
                  src={teacher.avatarImageUrl}
                  alt={teacher.name}
                />
              ) : (
                <UserIcon className="size-[1.75rem] text-primary-5" />
              )}
            </AvatarComponent>
            <div className="grid gap-y-1">
              <ArticleAuthorNameComponent
                tag="h3"
                authorName={teacher.name}
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              />
              <ArticlePublishedLastDateComponent
                publishedLastDate={article.publishedLastDate}
              />
            </div>
          </div>
          <ArticleReadingTimeComponent readingTime={article.readingTime} />
        </CardFooterComponent>
      </CardComponent>
    </Link>
  );
}
