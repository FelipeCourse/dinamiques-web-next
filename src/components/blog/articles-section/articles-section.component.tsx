'use client';

import { useArticleContext } from '@/data/contexts';

import { ArticleCardComponent, SectionBoxComponent } from '@/components';

// TODO: Add dinamic pagination
export function ArticlesSectionComponent(): JSX.Element {
  const { filteredArticles } = useArticleContext();

  return (
    <SectionBoxComponent className="grid" tag="section">
      <div className="grid items-stretch justify-items-center gap-9 sm:grid-cols-articles-section">
        {filteredArticles.length > 0 ? (
          filteredArticles
            .filter(({ article }) => article.isPublished)
            .map((article, index) => (
              <ArticleCardComponent
                className={`${index % 2 === 0 && filteredArticles.length !== 1 ? 'md:justify-self-end' : 'md:justify-self-start'}`}
                key={article.id}
                article={article}
              />
            ))
        ) : (
          <p>Não há artigos disponíveis no momento.</p>
        )}
      </div>
      {/* <footer>
        <PaginationComponent>
          <PaginationContentComponent>
            <PaginationItemComponent>
              <PaginationPreviousComponent href="#" />
            </PaginationItemComponent>
            <PaginationItemComponent>
              <PaginationLinkComponent href="#">1</PaginationLinkComponent>
            </PaginationItemComponent>
            <PaginationItemComponent>
              <PaginationNextComponent href="#" />
            </PaginationItemComponent>
          </PaginationContentComponent>
        </PaginationComponent>
      </footer> */}
    </SectionBoxComponent>
  );
}
