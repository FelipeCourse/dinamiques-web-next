import { z } from 'zod';

import { URL_PATTERN } from '@/shared/patterns';

export const articleSchema = z.object({
  id: z.string().optional(),
  categoryId: z.string().min(1, {
    message: 'Categoria é obrigatória.',
  }),
  title: z
    .string()
    .min(1, {
      message: 'Título é obrigatório.',
    })
    .min(3, {
      message: 'Título deve ter pelo menos 3 caracteres.',
    })
    .max(150, {
      message: 'Título deve ter no máximo 150 caracteres.',
    }),
  summary: z
    .string()
    .min(1, {
      message: 'Resumo é obrigatório.',
    })
    .min(10, {
      message: 'Resumo deve ter pelo menos 10 caracteres.',
    })
    .max(200, {
      message: 'Resumo deve ter no máximo 200 caracteres.',
    }),
  readingTime: z.coerce.number().positive({
    message: 'Tempo de leitura deve ser maior que 0.',
  }),
  content: z.string().min(1, {
    message: 'Conteúdo é obrigatório.',
  }),
  highlightImageUrl: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value) return true;

        return URL_PATTERN.test(value);
      },
      {
        message: 'URL da imagem de destaque deve ser uma URL válida.',
      },
    ),
  isPublished: z
    .union([z.boolean(), z.literal('true'), z.literal('false')])
    .optional()
    .refine(
      (value) => {
        if (typeof value === 'string') {
          return value === 'true' || value === 'false';
        }

        return true;
      },
      {
        message:
          'isPublished deve ser uma string "true" ou "false", ou um booleano.',
      },
    )
    .transform((value) => {
      if (typeof value === 'string') {
        return value === 'true';
      }

      return value;
    }),
});
