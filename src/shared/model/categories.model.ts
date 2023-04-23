export interface ICategories {
  id?: number;
  name?: string | null;
}

export class Categories implements ICategories {
  constructor(public id?: number, public name?: string | null) {
  }
}

export function getCategoriesIdentifier(categories: ICategories): number | undefined {
  return categories.id;
}
