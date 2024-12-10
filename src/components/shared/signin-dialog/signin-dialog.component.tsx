'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { signinHttp } from '@/http';

import { useAuthContext } from '@/data/contexts';
import { useToast } from '@/data/hooks';

import { AuthModel } from '@/shared/models';

import {
  ButtonComponent,
  DialogComponent,
  DialogContentComponent,
  DialogFooterComponent,
  DialogHeaderComponent,
  DialogTitleComponent,
  DialogTriggerComponent,
  FormComponent,
  FormControlComponent,
  FormFieldComponent,
  FormItemComponent,
  FormLabelComponent,
  FormMessageComponent,
  InputComponent,
  SpinnerComponent,
  TitleComponent,
} from '@/components';

import { signinDialogSchema } from './signin-dialog.schema';

export function SigninDialogComponent(): JSX.Element {
  const signinDialogForm = useForm<z.infer<typeof signinDialogSchema>>({
    resolver: zodResolver(signinDialogSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { checkAuthentication } = useAuthContext();
  const router = useRouter();
  const { toast } = useToast();
  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: signinHttp,
    onSuccess: (data: AuthModel) => {
      if (data.accessToken) {
        checkAuthentication();
        router.push('/admin');

        toast({
          title: 'Sucesso!',
          description: 'Autenticação efetuada com sucesso.',
          variant: 'success',
        });
      }
    },
  });

  function handleSubmit(values: z.infer<typeof signinDialogSchema>): void {
    mutate({ values });
  }

  function handleClose(): void {
    signinDialogForm.reset({
      email: '',
      password: '',
    });
  }

  useEffect(() => {
    if (error?.message) {
      toast({
        title: 'Erro!',
        description:
          'Um erro inesperado ocorreu ao tentar se autenticar. Tente novamente mais tarde.',
        variant: 'destructive',
      });
    }
  }, [isError, error, toast]);

  return (
    <>
      <DialogComponent onOpenChange={handleClose}>
        <DialogTriggerComponent asChild>
          <ButtonComponent color="primary" className="w-full">
            Entrar
          </ButtonComponent>
        </DialogTriggerComponent>
        <DialogContentComponent className="sm:max-w-screen-sm">
          <DialogHeaderComponent>
            <DialogTitleComponent asChild>
              <TitleComponent tag="h3" hasDotDecorator={false}>
                Autenticação
              </TitleComponent>
            </DialogTitleComponent>
          </DialogHeaderComponent>
          <FormComponent {...signinDialogForm}>
            <form
              className="space-y-8"
              onSubmit={signinDialogForm.handleSubmit(handleSubmit)}
            >
              <FormFieldComponent
                control={signinDialogForm.control}
                name="email"
                render={({ field }) => (
                  <FormItemComponent>
                    <FormLabelComponent>E-mail</FormLabelComponent>
                    <FormControlComponent>
                      <InputComponent
                        placeholder="Digite o seu e-mail"
                        {...field}
                      />
                    </FormControlComponent>
                    <FormMessageComponent />
                  </FormItemComponent>
                )}
              />
              <FormFieldComponent
                control={signinDialogForm.control}
                name="password"
                render={({ field }) => (
                  <FormItemComponent>
                    <FormLabelComponent>Senha</FormLabelComponent>
                    <FormControlComponent>
                      <InputComponent
                        type="password"
                        placeholder="Digite a sua senha"
                        {...field}
                      />
                    </FormControlComponent>
                    <FormMessageComponent />
                  </FormItemComponent>
                )}
              />
              <DialogFooterComponent>
                <ButtonComponent
                  color="primary"
                  type="submit"
                  disabled={isPending}
                >
                  Entrar
                </ButtonComponent>
              </DialogFooterComponent>
            </form>
          </FormComponent>
        </DialogContentComponent>
      </DialogComponent>
      {isPending && (
        <div className="fixed inset-0 z-[100] flex h-screen w-full items-center justify-center bg-base-black/40">
          <SpinnerComponent />
        </div>
      )}
    </>
  );
}
