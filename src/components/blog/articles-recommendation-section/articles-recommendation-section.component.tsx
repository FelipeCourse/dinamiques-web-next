import { ComponentProps } from 'react';

import { ArticleModel } from '@/shared/models';
import {
  handleRandomSelection,
  handleSortingDescendingByDate,
} from '@/shared/utils';

import {
  ArticleCardComponent,
  SectionBoxComponent,
  TitleComponent,
} from '@/components';

interface ArticlesRecommendationSectionComponentProps
  extends ComponentProps<'section'> {
  articles: ArticleModel[];
}

export function ArticlesRecommendationSectionComponent({
  articles,
}: ArticlesRecommendationSectionComponentProps): JSX.Element {
  const recommendedArticles = handleSortingDescendingByDate(
    handleRandomSelection(articles).slice(0, 3),
    ({ article }) => article.publishedLastDate,
  );

  return (
    <SectionBoxComponent
      className="border-y border-base-14 bg-base-16"
      tag="section"
      hasContainer={false}
    >
      <div className="container grid max-w-screen-xl flex-col items-center">
        <TitleComponent className="mb-10" tag="h2" hasDotDecorator={false}>
          Recomendados
        </TitleComponent>
        <div className="grid items-stretch justify-items-center gap-9 sm:grid-cols-articles-section">
          {recommendedArticles.map((article, index) => (
            <ArticleCardComponent
              className={`${index % 2 === 0 && recommendedArticles.length !== 1 ? 'md:justify-self-end' : 'md:justify-self-start'}`}
              key={article.id}
              article={article}
            />
          ))}
        </div>
      </div>
    </SectionBoxComponent>
  );
}
