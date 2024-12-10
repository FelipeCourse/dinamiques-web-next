import { formatDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formattedPublishedLastDate(date: Date): string {
  return formatDate(date, 'dd MMM yyyy', {
    locale: ptBR,
  });
}

export function formattedDateAuditFields(date: Date): string {
  return formatDate(date, 'dd/MM/yyyy', {
    locale: ptBR,
  });
}
