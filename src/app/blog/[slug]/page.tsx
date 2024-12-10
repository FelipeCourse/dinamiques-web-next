import { UserIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import {
  getArticleBySlugHttp,
  getArticlesHttp,
  getRecommendedArticlesByCategoryHttp,
} from '@/http';

import {
  ArticleAuthorNameComponent,
  ArticlePublishedLastDateComponent,
  ArticleReadingTimeComponent,
  ArticlesRecommendationSectionComponent,
  AvatarComponent,
  AvatarImageComponent,
  ContentRendererComponent,
  HeroComponent,
  HeroContentComponent,
  HeroFooterComponent,
  HeroHeaderComponent,
  NavigationBreadcrumbComponent,
  SectionBoxComponent,
  TitleComponent,
} from '@/components';

export async function generateStaticParams() {
  const response = await getArticlesHttp();

  if (response?.data) {
    return response?.data?.map(({ article }) => ({
      slug: article.slug,
    }));
  }

  return [];
}

export async function generateMetadata({
  params: { slug },
}: ArticlePageProps): Promise<Metadata | null> {
  const response = await getArticleBySlugHttp({ slug });

  if (response?.data) {
    const { article } = response?.data;

    return {
      title: article.title,
      description: article.summary,
    };
  }

  return null;
}

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({
  params: { slug },
}: ArticlePageProps): Promise<JSX.Element> {
  const response = await getArticleBySlugHttp({ slug });

  if (!response!.data) {
    return notFound();
  }

  const { id, teacher, category, article } = response!.data;
  const recommendedArticles = await getRecommendedArticlesByCategoryHttp({
    categoryName: category.name,
    excludeId: id,
  });

  const backgroundImage = {
    path: article.highlightImageUrl,
    alt: article.title,
    width: 1600,
    height: 640,
    isPriority: true,
  };

  const breadcrumbItems = [
    {
      label: category.name,
      path: '/blog',
    },
    {
      label: article.title,
      path: '',
    },
  ];

  return (
    <>
      <HeroComponent
        className="animate-fadein opacity-0"
        backgroundImage={backgroundImage}
        itemScope
        itemType="https://schema.org/Article"
      >
        <HeroHeaderComponent>
          <NavigationBreadcrumbComponent breadcrumbItems={breadcrumbItems} />
          <TitleComponent
            className="text-base-white md:ms-8 lg:ms-11"
            tag="h1"
            itemProp="headline"
          >
            {article.title}
          </TitleComponent>
        </HeroHeaderComponent>
        <HeroContentComponent className="mb-11 mt-6">
          <p
            className="max-w-[36.25rem] ps-4 text-md md:ms-8 lg:ms-11"
            itemProp="description"
          >
            {article?.summary}
          </p>
        </HeroContentComponent>
        <HeroFooterComponent className="flex-wrap gap-3">
          <div className="ms-4 flex flex-wrap gap-3 md:ms-[3.25rem] lg:ms-[4.75rem]">
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
            <div className="mr-10 grid gap-y-1">
              <ArticleAuthorNameComponent
                className="text-base-white"
                tag="h3"
                authorName={teacher.name}
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              />
              <ArticlePublishedLastDateComponent
                className="text-base-5"
                publishedLastDate={article.publishedLastDate}
                itemProp="datePublished"
              />
            </div>
            <ArticleReadingTimeComponent
              readingTime={article.readingTime}
              itemProp="timeRequired"
            />
          </div>
        </HeroFooterComponent>
      </HeroComponent>
      <main>
        <SectionBoxComponent
          className="max-w-[61.25rem] items-start lg:text-xl"
          tag="section"
        >
          <ContentRendererComponent content={article.content} />
        </SectionBoxComponent>
        {recommendedArticles?.data && recommendedArticles.data.length > 0 && (
          <ArticlesRecommendationSectionComponent
            articles={recommendedArticles.data}
          />
        )}
      </main>
    </>
  );
}
