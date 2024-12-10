import { z } from 'zod';

import { HEXADECIMAL_COLOR_PATTERN } from '@/shared/patterns';

export const categorySchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(1, {
      message: 'Nome é obrigatório.',
    })
    .min(3, {
      message: 'Nome deve ter pelo menos 3 caracteres.',
    })
    .max(50, {
      message: 'Nome deve ter no máximo 50 caracteres.',
    }),
  color: z.string().regex(HEXADECIMAL_COLOR_PATTERN, {
    message: 'Cor deve ser um hexadecimal válido.',
  }),
  isActive: z
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
          'isActive deve ser uma string "true" ou "false", ou um booleano.',
      },
    )
    .transform((value) => {
      if (typeof value === 'string') {
        return value === 'true';
      }

      return value;
    }),
});
