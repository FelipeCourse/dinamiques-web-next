import { describe, expect, it } from 'vitest';

import { articleSchema } from './article.schema';

describe('ArticleSchema unit tests', () => {
  it('should pass with valid article data', () => {
    const validArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'This is a valid summary of the article.',
      readingTime: 5,
      content: 'This is the content of the article.',
      highlightImageUrl: 'https://valid-image.com',
      isPublished: true,
    };
    const result = articleSchema.safeParse(validArticle);
    expect(result.success).toBe(true);
  });

  it('should fail if categoryId is missing or empty', () => {
    const invalidArticle = {
      categoryId: '',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      highlightImageUrl: 'https://valid-image.com',
      isPublished: true,
    };
    const result = articleSchema.safeParse(invalidArticle);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const categoryIdError = errors?.find(
      (error) => error.path[0] === 'categoryId',
    );
    expect(categoryIdError).toBeDefined();
    expect(categoryIdError?.message).toBe('Categoria é obrigatória.');
    expect(categoryIdError?.path).toEqual(['categoryId']);
    expect(categoryIdError?.code).toBe('too_small');
  });

  it('should fail if title is too short', () => {
    const invalidArticle = {
      categoryId: '123',
      title: 'No',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      highlightImageUrl: 'https://valid-image.com',
      isPublished: true,
    };
    const result = articleSchema.safeParse(invalidArticle);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const titleError = errors?.find((error) => error.path[0] === 'title');
    expect(titleError).toBeDefined();
    expect(titleError?.message).toBe(
      'Título deve ter pelo menos 3 caracteres.',
    );
    expect(titleError?.path).toEqual(['title']);
    expect(titleError?.code).toBe('too_small');
  });

  it('should fail if summary is too short', () => {
    const invalidArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Short',
      readingTime: 5,
      content: 'Valid content.',
      highlightImageUrl: 'https://valid-image.com',
      isPublished: true,
    };
    const result = articleSchema.safeParse(invalidArticle);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const summaryError = errors?.find((error) => error.path[0] === 'summary');
    expect(summaryError).toBeDefined();
    expect(summaryError?.message).toBe(
      'Resumo deve ter pelo menos 10 caracteres.',
    );
    expect(summaryError?.path).toEqual(['summary']);
    expect(summaryError?.code).toBe('too_small');
  });

  it('should fail if readingTime is negative or zero', () => {
    const invalidArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: -1,
      content: 'Valid content.',
      highlightImageUrl: 'https://valid-image.com',
      isPublished: true,
    };
    const result = articleSchema.safeParse(invalidArticle);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const readingTimeError = errors?.find(
      (error) => error.path[0] === 'readingTime',
    );
    expect(readingTimeError).toBeDefined();
    expect(readingTimeError?.message).toBe(
      'Tempo de leitura deve ser maior que 0.',
    );
    expect(readingTimeError?.path).toEqual(['readingTime']);
    expect(readingTimeError?.code).toBe('too_small');
  });

  it('should fail if content is empty', () => {
    const invalidArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: '',
      highlightImageUrl: 'https://valid-image.com',
      isPublished: true,
    };
    const result = articleSchema.safeParse(invalidArticle);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const contentError = errors?.find((error) => error.path[0] === 'content');
    expect(contentError).toBeDefined();
    expect(contentError?.message).toBe('Conteúdo é obrigatório.');
    expect(contentError?.path).toEqual(['content']);
    expect(contentError?.code).toBe('too_small');
  });

  it('should pass if highlightImageUrl is a valid URL', () => {
    const validArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      highlightImageUrl: 'https://valid-image.com',
      isPublished: true,
    };
    const result = articleSchema.safeParse(validArticle);
    expect(result.success).toBe(true);
  });

  it('should fail if highlightImageUrl is an invalid URL', () => {
    const invalidArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      highlightImageUrl: 'invalid-url',
      isPublished: true,
    };
    const result = articleSchema.safeParse(invalidArticle);
    expect(result.success).toBe(false);
    const errors = result?.error?.errors;
    const highlightImageUrlError = errors?.find(
      (error) => error.path[0] === 'highlightImageUrl',
    );
    expect(highlightImageUrlError).toBeDefined();
    expect(highlightImageUrlError?.message).toBe(
      'URL da imagem de destaque deve ser uma URL válida.',
    );
    expect(highlightImageUrlError?.path).toEqual(['highlightImageUrl']);
    expect(highlightImageUrlError?.code).toBe('custom');
  });

  it('should pass if isPublished is a boolean true', () => {
    const validArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      isPublished: true,
    };
    const result = articleSchema.safeParse(validArticle);
    expect(result.success).toBe(true);
    expect(result?.data?.isPublished).toBe(true);
  });

  it('should pass if isPublished is a boolean false', () => {
    const validArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      isPublished: false,
    };
    const result = articleSchema.safeParse(validArticle);
    expect(result.success).toBe(true);
    expect(result?.data?.isPublished).toBe(false);
  });

  it('should pass if isPublished is a string "true"', () => {
    const validArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      isPublished: 'true',
    };
    const result = articleSchema.safeParse(validArticle);
    expect(result.success).toBe(true);
    expect(result?.data?.isPublished).toBe(true);
  });

  it('should pass if isPublished is a string "false"', () => {
    const validArticle = {
      categoryId: '123',
      title: 'Valid Title',
      summary: 'Valid summary.',
      readingTime: 5,
      content: 'Valid content.',
      isPublished: 'false',
    };
    const result = articleSchema.safeParse(validArticle);
    expect(result.success).toBe(true);
    expect(result?.data?.isPublished).toBe(false);
  });
});
