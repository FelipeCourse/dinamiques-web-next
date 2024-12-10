import { z } from 'zod';

export const signinDialogSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'E-mail é obrigatório.',
    })
    .min(8, {
      message: 'E-mail deve ter pelo menos 8 caracteres.',
    })
    .max(128, {
      message: 'E-mail deve ter no máximo 255 caracteres.',
    })
    .email('E-mail deve ser válido.'),
  password: z
    .string()
    .min(1, {
      message: 'Senha é obrigatória.',
    })
    .min(5, {
      message: 'Senha deve ter pelo menos 5 caracteres.',
    })
    .max(128, {
      message: 'Senha deve ter no máximo 128 caracteres.',
    }),
});
