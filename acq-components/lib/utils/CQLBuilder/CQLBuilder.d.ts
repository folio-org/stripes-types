interface RelationModifier {
  name: string;
  value?: unknown;
}

interface BooleanModifier {
  name: string;
  value?: unknown;
  symbol?: string;
}

interface ValueOptions {
  escapeCQL?: boolean;
  formatter?: (value: unknown) => string;
}

interface ConditionOptions extends ValueOptions {
  modifiers?: RelationModifier[];
}

export declare class CQLBuilder {
  static OPERATORS: {
    ALL: 'all';
    AND: 'AND';
    ANY: 'any';
    EQUAL: '==';
    FUZZY: '=';
    GREATER_THAN: '>';
    GREATER_THAN_EQUAL: '>=';
    LESS_THAN: '<';
    LESS_THAN_EQUAL: '<=';
    NOT: 'NOT';
    NOT_EQUAL: '<>';
    OR: 'OR';
    PROX: 'prox';
  };

  constructor();

  index(index: string): this;
  relation(operator: string, modifiers?: RelationModifier[]): this;
  value(value: string | number, options?: ValueOptions): this;

  equal(field: string, value: string | number, options?: ConditionOptions): this;
  fuzzy(field: string, value: string, options?: ConditionOptions): this;
  notEqual(field: string, value: string | number, options?: ConditionOptions): this;

  greaterThan(field: string, value: string | number, options?: ConditionOptions): this;
  greaterThanEqual(field: string, value: string | number, options?: ConditionOptions): this;
  gte(field: string, value: string | number, options?: ConditionOptions): this;

  lessThan(field: string, value: string | number, options?: ConditionOptions): this;
  lessThanEqual(field: string, value: string | number, options?: ConditionOptions): this;
  lte(field: string, value: string | number, options?: ConditionOptions): this;

  contains(field: string, value: string, options?: ConditionOptions): this;
  containsAny(field: string, value: string, options?: ConditionOptions): this;

  allRecords(options?: ConditionOptions): this;

  and(): this;
  or(): this;
  not(): this;

  relationModifier(name: string, value?: unknown): this;
  relationModifiers(mods: RelationModifier[]): this;

  booleanModifier(name: string, value?: unknown, symbol?: string): this;
  booleanModifiers(mods: BooleanModifier[]): this;

  group(callback: (builder: CQLBuilder) => void): this;

  sortBy(field: string, order?: string): this;
  sortByMultiple(sorts: Array<{ field: string; order: string }>): this;

  build(): string;
}
