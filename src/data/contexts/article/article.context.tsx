'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { allActiveCategories, useCategoryContext } from '@/data/contexts';

import { ArticleModel, CategoryModel } from '@/shared/models';
import { handleSortingDescendingByDate } from '@/shared/utils';

interface ArticleContextData {
  filteredArticles: ArticleModel[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

interface ArticleContextReturn {
  filteredArticles: ArticleModel[];
  searchQuery: string;
  handleArticlesFilter: (query: string) => void;
}

interface ArticleProviderProps {
  fetchedArticles: ArticleModel[];
  children: React.ReactNode;
}

const ArticleContext = createContext<ArticleContextData>(
  {} as ArticleContextData,
);

export function ArticleProvider({
  fetchedArticles,
  children,
}: ArticleProviderProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [articles, setArticles] = useState<ArticleModel[] | []>(
    fetchedArticles,
  );
  const { activeCategory } = useCategoryContext();

  const handleArticlesFilter = useCallback(
    (
      inputArticles: ArticleModel[],
      category: CategoryModel,
      query: string,
    ): ArticleModel[] => {
      if (!inputArticles) {
        return [];
      }

      let filteredArticles = inputArticles;
      const isSpecificCategory = category.id !== allActiveCategories.id;

      if (isSpecificCategory) {
        filteredArticles = filteredArticles.filter(
          (article) => article.category.name === category.name,
        );
      }

      if (query) {
        filteredArticles = filteredArticles.filter(
          ({ article }) =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.content.toLowerCase().includes(query.toLowerCase()),
        );
      }

      return handleSortingDescendingByDate(
        filteredArticles,
        ({ article }) => article.publishedLastDate,
      );
    },
    [],
  );

  const filteredArticles = useMemo(() => {
    const categoryToFilter =
      activeCategory.id === allActiveCategories.id
        ? allActiveCategories
        : activeCategory;

    return handleArticlesFilter(articles, categoryToFilter, searchQuery);
  }, [articles, handleArticlesFilter, activeCategory, searchQuery]);

  const value = useMemo(
    () => ({
      filteredArticles,
      searchQuery,
      setSearchQuery,
    }),
    [filteredArticles, searchQuery],
  );

  useEffect(() => {
    setArticles(fetchedArticles);
  }, [fetchedArticles]);

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}

export function useArticleContext(): ArticleContextReturn {
  if (useContext(ArticleContext) === undefined) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }

  const { filteredArticles, searchQuery, setSearchQuery } =
    useContext(ArticleContext);

  const handleArticlesFilter = (query: string) => {
    setSearchQuery(query);
  };

  return {
    filteredArticles,
    searchQuery,
    handleArticlesFilter,
  };
}
