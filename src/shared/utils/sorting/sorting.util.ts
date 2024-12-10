export function handleRandomSelection<T>(items: T[]): T[] {
  return items.sort(() => Math.random() - 0.5);
}

export function handleSortByTerm<T>(
  array: T[],
  key: keyof T,
  isDescending: boolean = false,
): T[] {
  return array.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return isDescending
        ? valueB.localeCompare(valueA)
        : valueA.localeCompare(valueB);
    }

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return isDescending ? valueB - valueA : valueA - valueB;
    }

    return 0;
  });
}

export function handleSortingDescendingByDate<T>(
  items: T[],
  dateGetter: (item: T) => string | Date,
): T[] {
  return [...items].sort((a, b) => {
    const dateA = dateGetter(a);
    const dateB = dateGetter(b);
    const timeA = dateA instanceof Date ? dateA.getTime() : Date.parse(dateA);
    const timeB = dateB instanceof Date ? dateB.getTime() : Date.parse(dateB);

    if (isNaN(timeA) || isNaN(timeB)) {
      return 0;
    }

    return timeB - timeA;
  });
}
