import { ClockIcon } from '@heroicons/react/24/outline';
import { ComponentProps } from 'react';

import { formatToHoursAndMinutes } from '@/shared/utils';

interface ArticleReadingTimeComponentProps extends ComponentProps<'time'> {
  readingTime: number;
}

export function ArticleReadingTimeComponent({
  readingTime,
}: ArticleReadingTimeComponentProps): JSX.Element {
  return (
    <time
      className="flex items-center gap-2 text-sm font-semibold text-base-4"
      dateTime={`${readingTime}`}
      itemProp="timeRequired"
    >
      <ClockIcon className="size-[1.042rem] text-primary-3" />
      {formatToHoursAndMinutes(readingTime)}
    </time>
  );
}
