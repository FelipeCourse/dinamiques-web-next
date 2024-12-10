import { getArticlesHttp, getCategoriesHttp } from '@/http';

import { ArticleProvider, CategoryProvider } from '@/data/contexts';

import {
  ArticlesSectionComponent,
  CategoryMenuComponent,
  HeroComponent,
  HeroHeaderComponent,
  SearchInputComponent,
  SectionBoxComponent,
  TitleComponent,
} from '@/components';

export default async function BlogPage(): Promise<JSX.Element> {
  const categories = await getCategoriesHttp();
  const articles = await getArticlesHttp();

  return (
    <>
      <HeroComponent>
        <HeroHeaderComponent>
          <TitleComponent
            className="animate-fadein text-base-white opacity-0 md:ms-8 lg:ms-11"
            tag="h1"
          >
            Conhecimento ao alcance de todos
          </TitleComponent>
        </HeroHeaderComponent>
      </HeroComponent>
      <main>
        <CategoryProvider>
          <ArticleProvider fetchedArticles={articles!.data!}>
            <SectionBoxComponent className="pb-0 lg:pb-0" tag="section">
              {categories ? (
                <CategoryMenuComponent categories={categories!.data!} />
              ) : (
                <p>Não há categorias disponíveis no momento.</p>
              )}
              <form className="relative mt-10 w-full max-w-[27.5rem] md:self-start lg:mt-11">
                <SearchInputComponent />
              </form>
            </SectionBoxComponent>
            <ArticlesSectionComponent />
          </ArticleProvider>
        </CategoryProvider>
      </main>
    </>
  );
}
